(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Gt:()=>cn});var t=function(e,t,n,r,i){var s="https://".concat(e,"/cgi-bin/pixeltrack.pl?action=")+i;t&&(s+="&smartad_id=".concat(t)),n&&(s+="&context_id=".concat(n)),r&&(s+="&cf=".concat(encodeURIComponent(r))),navigator.sendBeacon(s)},n=function(e){Math.random()<.01&&e()};const r={notify:t,notify_context:function(e,r,i,s){n((function(){return t(e,null,r,i,s)}))},notify_smartad:function(e,r,i){n((function(){return t(e,r,null,null,i)}))}};var i;!function(e){e.NoTcData="tcf_blank",e.NoPermissions="tcf_no_permissions"}(i||(i={}));var s={CONTEXT_NOT_LOADED:"0",CONTEXT_LOADED:"1",LAZY_LOADING_ENABLED:"1",LAZY_LOADING_ROOT_MARGIN:"100",STICKY_AD:"1",PARTNER_TCF_STATUS:"2.0"};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}var l,u={id:"data-dianomi-context-id",done:"data-dianomi-context-done",host:{attribute:"data-dianomi-context-hostname",default:"www.dianomi.com",allowedValues:["dev.dianomi.com"]},endpoint:{attribute:"data-dianomi-context-endpoint",default:"context.pl",allowedValues:["bidcore-context.pl"]},affiliate:"data-dianomi-context-affiliate",cfTest:"data-dianomi-cf-test",clickMacro:"data-dianomi-click-macro",consent:"data-dianomi-consent",darkmodeOverride:"data-dianomi-darkmode-override",pageDomain:"data-dianomi-page-domain",referrer:"data-referrer-url"};function d(e,t,n){t.mobileHeight&&n<480?e.style.height=t.mobileHeight:t.tabletHeight&&n<769&&n>=480?e.style.height=t.tabletHeight:t.height&&(e.style.height=t.height)}function p(e,t,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];arguments.length>3&&void 0!==arguments[3]&&arguments[3]&&!t.nativeUnit?n<480?(e.style.padding="0",e.style.width=t.mobileWidthSM||t.mobileWidth||"",e.style.margin="0 auto"):t.mobileWidth&&n<580?(e.style.padding="0",e.style.width=t.mobileWidth):t.tabletWidth&&n<769&&n>=580?(e.style.padding="0",e.style.width=t.tabletWidth):t.width&&(e.style.width=t.width):r?e.style.width="100%":t.mobileWidthSM&&n<480?e.style.width=t.mobileWidthSM||t.mobileWidth||"":t.mobileWidth&&n<580?e.style.width=t.mobileWidth:t.tabletWidth&&n<769&&n>=580?e.style.width=t.tabletWidth:t.width&&(e.style.width=t.width)}function h(e,t,n){t.mobileFloat&&n<480?e.style.cssFloat=t.mobileFloat:t.float&&(e.style.cssFloat=t.float)}function f(){return window.parent.innerWidth||window.parent.document.documentElement.clientWidth}function m(e){(window.parent||window).addEventListener("resize",(function(){e(),E("resize")}),!1)}l=u,Object.keys(l).map((function(e){var t=l[e];return"string"==typeof t?t:t.attribute}));var v,g,y,b,w={collapse:"dianomi-parent-collapse",resize:"dianomi-parent-resize"};function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.parent.postMessage({type:w[e],frameId:t})}function I(e,t){return e&&(n=t.allowedValues,function(e){if(Array.isArray(e))return o(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||c(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([t.default]).includes(e)?e:t.default;var n}function _(e,t,n){return"dianomi-".concat(e.id,"-").concat(n.unique_id).concat(t)}function S(e,t){return e.some((function(e){return C(e,t)}))}function C(e,t){return t.type===e}function A(e,t,n){t.lazy&&t.lazy===s.LAZY_LOADING_ENABLED?(e.className="lazy dianomiLazy",e.setAttribute("data-src",n)):e.setAttribute("src",n)}function L(e,t){if(t){var n=!0,r=!1,i=void 0;try{for(var s,o=Object.entries(t)[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=a(s.value,2),l=c[0],u=c[1];e.style[l]=u}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}function O(e,t){return"".concat(arguments.length>2&&void 0!==arguments[2]&&arguments[2]?"?":"&").concat(e,"=").concat(encodeURIComponent(t))}function T(){try{return window.top?window.top.location.href:window.parent?window.parent.location.href:window.location.href}catch(e){return window.location.href}}function D(e){var t={},n=!1;return e.forEach((function(e,r){var i,s,o;if(C("smartad",e)&&((null==e||null===(s=e.args)||void 0===s?void 0:s.responsiveHeight)||"1"===(null==e||null===(o=e.args)||void 0===o?void 0:o.closeIfEmpty))&&(n=!0),C("recirc",e)&&(null==e||null===(i=e.args)||void 0===i?void 0:i.responsiveHeight)&&(n=!0),C("cfWaterfall",e))t["cfWaterfall-".concat(r)]=e;else if(S(["smartad","video"],e)){var a,c,l;if((null==e||null===(a=e.args)||void 0===a?void 0:a.nativeUnit)&&t["native-".concat(null==e||null===(c=e.args)||void 0===c?void 0:c.nativeUnit)]){var u=t["native-".concat(e.args.nativeUnit)];C("native",u)&&u.units.push(e)}else(null==e||null===(l=e.args)||void 0===l?void 0:l.nativeUnit)?t["native-".concat(e.args.nativeUnit)]={type:"native",units:[e]}:t["smartad-".concat(e.args.id,"-").concat(r)]=e}else t["other-".concat(r)]=e})),{responsiveHeight:n,units:t}}function x(e,t,n){var r=e;r.style.maxWidth="100%",r.style.minHeight="1px",t.scrolling&&(r.style.overflow=t.scrolling),t.minWidth&&(r.style.minWidth=t.minWidth),t.margin&&(r.style.margin=t.margin),t.maxWidth&&(r.style.maxWidth=t.maxWidth),r.style.border="none",r.style.overflow="hidden";var i=f();return p(r,t,i,!1,n),h(r,t,i),d(r,t,i),r}class N extends Error{constructor(e){super(e),this.name="EncodingError"}}class P extends Error{constructor(e){super(e),this.name="DecodingError"}}class V{static DICT="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";static REVERSE_DICT=new Map([["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25],["a",26],["b",27],["c",28],["d",29],["e",30],["f",31],["g",32],["h",33],["i",34],["j",35],["k",36],["l",37],["m",38],["n",39],["o",40],["p",41],["q",42],["r",43],["s",44],["t",45],["u",46],["v",47],["w",48],["x",49],["y",50],["z",51],["0",52],["1",53],["2",54],["3",55],["4",56],["5",57],["6",58],["7",59],["8",60],["9",61],["-",62],["_",63]]);static BASIS=6;static LCM=24;static encode(e){if(!/^[0-1]+$/.test(e))throw new N("Invalid bitField");const t=e.length%this.LCM;e+=t?"0".repeat(this.LCM-t):"";let n="";for(let t=0;t<e.length;t+=this.BASIS)n+=this.DICT[parseInt(e.substr(t,this.BASIS),2)];return n}static decode(e){if(!/^[A-Za-z0-9\-_]+$/.test(e))throw new P("Invalidly encoded Base64URL string");let t="";for(let n=0;n<e.length;n++){const r=this.REVERSE_DICT.get(e[n]).toString(2);t+="0".repeat(this.BASIS-r.length)+r}return t}}class R{static langSet=new Set(["BG","CA","CS","DA","DE","EL","EN","ES","ET","FI","FR","HR","HU","IT","JA","LT","LV","MT","NL","NO","PL","PT","RO","RU","SK","SL","SV","TR","ZH"]);has(e){return R.langSet.has(e)}forEach(e){R.langSet.forEach(e)}get size(){return R.langSet.size}}class k{static cmpId="cmpId";static cmpVersion="cmpVersion";static consentLanguage="consentLanguage";static consentScreen="consentScreen";static created="created";static supportOOB="supportOOB";static isServiceSpecific="isServiceSpecific";static lastUpdated="lastUpdated";static numCustomPurposes="numCustomPurposes";static policyVersion="policyVersion";static publisherCountryCode="publisherCountryCode";static publisherCustomConsents="publisherCustomConsents";static publisherCustomLegitimateInterests="publisherCustomLegitimateInterests";static publisherLegitimateInterests="publisherLegitimateInterests";static publisherConsents="publisherConsents";static publisherRestrictions="publisherRestrictions";static purposeConsents="purposeConsents";static purposeLegitimateInterests="purposeLegitimateInterests";static purposeOneTreatment="purposeOneTreatment";static specialFeatureOptins="specialFeatureOptins";static useNonStandardStacks="useNonStandardStacks";static vendorConsents="vendorConsents";static vendorLegitimateInterests="vendorLegitimateInterests";static vendorListVersion="vendorListVersion";static vendorsAllowed="vendorsAllowed";static vendorsDisclosed="vendorsDisclosed";static version="version"}class M{clone(){const e=new this.constructor;return Object.keys(this).forEach((t=>{const n=this.deepClone(this[t]);void 0!==n&&(e[t]=n)})),e}deepClone(e){const t=typeof e;if("number"===t||"string"===t||"boolean"===t)return e;if(null!==e&&"object"===t){if("function"==typeof e.clone)return e.clone();if(e instanceof Date)return new Date(e.getTime());if(void 0!==e[Symbol.iterator]){const t=[];for(const n of e)t.push(this.deepClone(n));return e instanceof Array?t:new e.constructor(t)}{const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=this.deepClone(e[n]));return t}}}}class U extends Error{constructor(e,t,n=""){super(`invalid value ${t} passed for ${e} ${n}`),this.name="TCModelError"}}!function(e){e[e.NOT_ALLOWED=0]="NOT_ALLOWED",e[e.REQUIRE_CONSENT=1]="REQUIRE_CONSENT",e[e.REQUIRE_LI=2]="REQUIRE_LI"}(v||(v={}));class j extends M{static hashSeparator="-";purposeId_;restrictionType;constructor(e,t){super(),void 0!==e&&(this.purposeId=e),void 0!==t&&(this.restrictionType=t)}static unHash(e){const t=e.split(this.hashSeparator),n=new j;if(2!==t.length)throw new U("hash",e);return n.purposeId=parseInt(t[0],10),n.restrictionType=parseInt(t[1],10),n}get hash(){if(!this.isValid())throw new Error("cannot hash invalid PurposeRestriction");return`${this.purposeId}${j.hashSeparator}${this.restrictionType}`}get purposeId(){return this.purposeId_}set purposeId(e){this.purposeId_=e}isValid(){return Number.isInteger(this.purposeId)&&this.purposeId>0&&(this.restrictionType===v.NOT_ALLOWED||this.restrictionType===v.REQUIRE_CONSENT||this.restrictionType===v.REQUIRE_LI)}isSameAs(e){return this.purposeId===e.purposeId&&this.restrictionType===e.restrictionType}}class F extends M{root=null;isEmpty(){return!this.root}add(e){const t={value:e,left:null,right:null};let n;if(this.isEmpty())this.root=t;else for(n=this.root;;)if(e<n.value){if(null===n.left){n.left=t;break}n=n.left}else{if(!(e>n.value))break;if(null===n.right){n.right=t;break}n=n.right}}get(){const e=[];let t=this.root;for(;t;)if(t.left){let n=t.left;for(;n.right&&n.right!=t;)n=n.right;n.right==t?(n.right=null,e.push(t.value),t=t.right):(n.right=t,t=t.left)}else e.push(t.value),t=t.right;return e}contains(e){let t=!1,n=this.root;for(;n;){if(n.value===e){t=!0;break}e>n.value?n=n.right:e<n.value&&(n=n.left)}return t}min(e=this.root){let t;for(;e;)e.left?e=e.left:(t=e.value,e=null);return t}max(e=this.root){let t;for(;e;)e.right?e=e.right:(t=e.value,e=null);return t}remove(e,t=this.root){let n=null,r="left";for(;t;)if(e<t.value)n=t,t=t.left,r="left";else if(e>t.value)n=t,t=t.right,r="right";else{if(t.left||t.right)if(t.left)if(t.right){const e=this.min(t.right);this.remove(e,t.right),t.value=e}else n?n[r]=t.left:this.root=t.left;else n?n[r]=t.right:this.root=t.right;else n?n[r]=null:this.root=null;t=null}}}class H extends M{bitLength=0;map=new Map;gvl_;has(e){return this.map.has(e)}isOkToHave(e,t,n){let r=!0;if(this.gvl?.vendors){const i=this.gvl.vendors[n];if(i)if(e===v.NOT_ALLOWED)r=i.legIntPurposes.includes(t)||i.purposes.includes(t);else if(i.flexiblePurposes.length)switch(e){case v.REQUIRE_CONSENT:r=i.flexiblePurposes.includes(t)&&i.legIntPurposes.includes(t);break;case v.REQUIRE_LI:r=i.flexiblePurposes.includes(t)&&i.purposes.includes(t)}else r=!1;else r=!1}return r}add(e,t){if(this.isOkToHave(t.restrictionType,t.purposeId,e)){const n=t.hash;this.has(n)||(this.map.set(n,new F),this.bitLength=0),this.map.get(n).add(e)}}restrictPurposeToLegalBasis(e){const t=this.gvl.vendorIds,n=e.hash,r=function(){let e;for(e of t);return e}();for(let e=1;e<=r;e++)this.has(n)||(this.map.set(n,new F),this.bitLength=0),this.map.get(n).add(e)}getVendors(e){let t=[];if(e){const n=e.hash;this.has(n)&&(t=this.map.get(n).get())}else{const e=new Set;this.map.forEach((t=>{t.get().forEach((t=>{e.add(t)}))})),t=Array.from(e)}return t}getRestrictionType(e,t){let n;return this.getRestrictions(e).forEach((e=>{e.purposeId===t&&(void 0===n||n>e.restrictionType)&&(n=e.restrictionType)})),n}vendorHasRestriction(e,t){let n=!1;const r=this.getRestrictions(e);for(let e=0;e<r.length&&!n;e++)n=t.isSameAs(r[e]);return n}getMaxVendorId(){let e=0;return this.map.forEach((t=>{e=Math.max(t.max(),e)})),e}getRestrictions(e){const t=[];return this.map.forEach(((n,r)=>{e?n.contains(e)&&t.push(j.unHash(r)):t.push(j.unHash(r))})),t}getPurposes(){const e=new Set;return this.map.forEach(((t,n)=>{e.add(j.unHash(n).purposeId)})),Array.from(e)}remove(e,t){const n=t.hash,r=this.map.get(n);r&&(r.remove(e),r.isEmpty()&&(this.map.delete(n),this.bitLength=0))}set gvl(e){this.gvl_||(this.gvl_=e,this.map.forEach(((e,t)=>{const n=j.unHash(t);e.get().forEach((t=>{this.isOkToHave(n.restrictionType,n.purposeId,t)||e.remove(t)}))})))}get gvl(){return this.gvl_}isEmpty(){return 0===this.map.size}get numRestrictions(){return this.map.size}}!function(e){e.COOKIE="cookie",e.WEB="web",e.APP="app"}(g||(g={})),function(e){e.CORE="core",e.VENDORS_DISCLOSED="vendorsDisclosed",e.VENDORS_ALLOWED="vendorsAllowed",e.PUBLISHER_TC="publisherTC"}(y||(y={}));class G{static ID_TO_KEY=[y.CORE,y.VENDORS_DISCLOSED,y.VENDORS_ALLOWED,y.PUBLISHER_TC];static KEY_TO_ID={[y.CORE]:0,[y.VENDORS_DISCLOSED]:1,[y.VENDORS_ALLOWED]:2,[y.PUBLISHER_TC]:3}}class W extends M{bitLength=0;maxId_=0;set_=new Set;*[Symbol.iterator](){for(let e=1;e<=this.maxId;e++)yield[e,this.has(e)]}values(){return this.set_.values()}get maxId(){return this.maxId_}has(e){return this.set_.has(e)}unset(e){Array.isArray(e)?e.forEach((e=>this.unset(e))):"object"==typeof e?this.unset(Object.keys(e).map((e=>Number(e)))):(this.set_.delete(Number(e)),this.bitLength=0,e===this.maxId&&(this.maxId_=0,this.set_.forEach((e=>{this.maxId_=Math.max(this.maxId,e)}))))}isIntMap(e){let t="object"==typeof e;return t=t&&Object.keys(e).every((t=>{let n=Number.isInteger(parseInt(t,10));return n=n&&this.isValidNumber(e[t].id),n=n&&void 0!==e[t].name,n})),t}isValidNumber(e){return parseInt(e,10)>0}isSet(e){let t=!1;return e instanceof Set&&(t=Array.from(e).every(this.isValidNumber)),t}set(e){if(Array.isArray(e))e.forEach((e=>this.set(e)));else if(this.isSet(e))this.set(Array.from(e));else if(this.isIntMap(e))this.set(Object.keys(e).map((e=>Number(e))));else{if(!this.isValidNumber(e))throw new U("set()",e,"must be positive integer array, positive integer, Set<number>, or IntMap");this.set_.add(e),this.maxId_=Math.max(this.maxId,e),this.bitLength=0}}empty(){this.set_=new Set}forEach(e){for(let t=1;t<=this.maxId;t++)e(this.has(t),t)}get size(){return this.set_.size}setAll(e){this.set(e)}}class B{static[k.cmpId]=12;static[k.cmpVersion]=12;static[k.consentLanguage]=12;static[k.consentScreen]=6;static[k.created]=36;static[k.isServiceSpecific]=1;static[k.lastUpdated]=36;static[k.policyVersion]=6;static[k.publisherCountryCode]=12;static[k.publisherLegitimateInterests]=24;static[k.publisherConsents]=24;static[k.purposeConsents]=24;static[k.purposeLegitimateInterests]=24;static[k.purposeOneTreatment]=1;static[k.specialFeatureOptins]=12;static[k.useNonStandardStacks]=1;static[k.vendorListVersion]=12;static[k.version]=6;static anyBoolean=1;static encodingType=1;static maxId=16;static numCustomPurposes=6;static numEntries=12;static numRestrictions=12;static purposeId=6;static restrictionType=2;static segmentType=3;static singleOrRange=1;static vendorId=16}class z{static encode(e){return String(Number(e))}static decode(e){return"1"===e}}class Q{static encode(e,t){let n;if("string"==typeof e&&(e=parseInt(e,10)),n=e.toString(2),n.length>t||e<0)throw new N(`${e} too large to encode into ${t}`);return n.length<t&&(n="0".repeat(t-n.length)+n),n}static decode(e,t){if(t!==e.length)throw new P("invalid bit length");return parseInt(e,2)}}class ${static encode(e,t){return Q.encode(Math.round(e.getTime()/100),t)}static decode(e,t){if(t!==e.length)throw new P("invalid bit length");const n=new Date;return n.setTime(100*Q.decode(e,t)),n}}class J{static encode(e,t){let n="";for(let r=1;r<=t;r++)n+=z.encode(e.has(r));return n}static decode(e,t){if(e.length!==t)throw new P("bitfield encoding length mismatch");const n=new W;for(let r=1;r<=t;r++)z.decode(e[r-1])&&n.set(r);return n.bitLength=e.length,n}}class q{static encode(e,t){const n=(e=e.toUpperCase()).charCodeAt(0)-65,r=e.charCodeAt(1)-65;if(n<0||n>25||r<0||r>25)throw new N(`invalid language code: ${e}`);if(t%2==1)throw new N(`numBits must be even, ${t} is not valid`);return t/=2,Q.encode(n,t)+Q.encode(r,t)}static decode(e,t){let n;if(t!==e.length||e.length%2)throw new P("invalid bit length for language");{const t=65,r=e.length/2,i=Q.decode(e.slice(0,r),r)+t,s=Q.decode(e.slice(r),r)+t;n=String.fromCharCode(i)+String.fromCharCode(s)}return n}}class Y{static encode(e){let t=Q.encode(e.numRestrictions,B.numRestrictions);return e.isEmpty()||e.getRestrictions().forEach((n=>{t+=Q.encode(n.purposeId,B.purposeId),t+=Q.encode(n.restrictionType,B.restrictionType);const r=e.getVendors(n),i=r.length;let s=0,o=0,a="";for(let t=0;t<i;t++){const n=r[t];0===o&&(s++,o=n);const c=r[i-1],l=e.gvl.vendorIds,u=e=>{for(;++e<=c&&!l.has(e););return e};if(t===i-1||r[t+1]>u(n)){const e=!(n===o);a+=z.encode(e),a+=Q.encode(o,B.vendorId),e&&(a+=Q.encode(n,B.vendorId)),o=0}}t+=Q.encode(s,B.numEntries),t+=a})),t}static decode(e){let t=0;const n=new H,r=Q.decode(e.substr(t,B.numRestrictions),B.numRestrictions);t+=B.numRestrictions;for(let i=0;i<r;i++){const r=Q.decode(e.substr(t,B.purposeId),B.purposeId);t+=B.purposeId;const i=Q.decode(e.substr(t,B.restrictionType),B.restrictionType);t+=B.restrictionType;const s=new j(r,i),o=Q.decode(e.substr(t,B.numEntries),B.numEntries);t+=B.numEntries;for(let r=0;r<o;r++){const r=z.decode(e.substr(t,B.anyBoolean));t+=B.anyBoolean;const i=Q.decode(e.substr(t,B.vendorId),B.vendorId);if(t+=B.vendorId,r){const r=Q.decode(e.substr(t,B.vendorId),B.vendorId);if(t+=B.vendorId,r<i)throw new P(`Invalid RangeEntry: endVendorId ${r} is less than ${i}`);for(let e=i;e<=r;e++)n.add(e,s)}else n.add(i,s)}}return n.bitLength=t,n}}!function(e){e[e.FIELD=0]="FIELD",e[e.RANGE=1]="RANGE"}(b||(b={}));class K{static encode(e){const t=[];let n,r=[],i=Q.encode(e.maxId,B.maxId),s="";const o=B.maxId+B.encodingType,a=o+e.maxId,c=2*B.vendorId+B.singleOrRange+B.numEntries;let l=o+B.numEntries;return e.forEach(((i,o)=>{s+=z.encode(i),n=e.maxId>c&&l<a,n&&i&&(e.has(o+1)?0===r.length&&(r.push(o),l+=B.singleOrRange,l+=B.vendorId):(r.push(o),l+=B.vendorId,t.push(r),r=[]))})),n?(i+=String(b.RANGE),i+=this.buildRangeEncoding(t)):(i+=String(b.FIELD),i+=s),i}static decode(e,t){let n,r=0;const i=Q.decode(e.substr(r,B.maxId),B.maxId);r+=B.maxId;const s=Q.decode(e.charAt(r),B.encodingType);if(r+=B.encodingType,s===b.RANGE){if(n=new W,1===t){if("1"===e.substr(r,1))throw new P("Unable to decode default consent=1");r++}const i=Q.decode(e.substr(r,B.numEntries),B.numEntries);r+=B.numEntries;for(let t=0;t<i;t++){const t=z.decode(e.charAt(r));r+=B.singleOrRange;const i=Q.decode(e.substr(r,B.vendorId),B.vendorId);if(r+=B.vendorId,t){const t=Q.decode(e.substr(r,B.vendorId),B.vendorId);r+=B.vendorId;for(let e=i;e<=t;e++)n.set(e)}else n.set(i)}}else{const t=e.substr(r,i);r+=i,n=J.decode(t,i)}return n.bitLength=r,n}static buildRangeEncoding(e){const t=e.length;let n=Q.encode(t,B.numEntries);return e.forEach((e=>{const t=1===e.length;n+=z.encode(!t),n+=Q.encode(e[0],B.vendorId),t||(n+=Q.encode(e[1],B.vendorId))})),n}}function X(){return{[k.version]:Q,[k.created]:$,[k.lastUpdated]:$,[k.cmpId]:Q,[k.cmpVersion]:Q,[k.consentScreen]:Q,[k.consentLanguage]:q,[k.vendorListVersion]:Q,[k.policyVersion]:Q,[k.isServiceSpecific]:z,[k.useNonStandardStacks]:z,[k.specialFeatureOptins]:J,[k.purposeConsents]:J,[k.purposeLegitimateInterests]:J,[k.purposeOneTreatment]:z,[k.publisherCountryCode]:q,[k.vendorConsents]:K,[k.vendorLegitimateInterests]:K,[k.publisherRestrictions]:Y,segmentType:Q,[k.vendorsDisclosed]:K,[k.vendorsAllowed]:K,[k.publisherConsents]:J,[k.publisherLegitimateInterests]:J,[k.numCustomPurposes]:Q,[k.publisherCustomConsents]:J,[k.publisherCustomLegitimateInterests]:J}}class Z{1={[y.CORE]:[k.version,k.created,k.lastUpdated,k.cmpId,k.cmpVersion,k.consentScreen,k.consentLanguage,k.vendorListVersion,k.purposeConsents,k.vendorConsents]};2={[y.CORE]:[k.version,k.created,k.lastUpdated,k.cmpId,k.cmpVersion,k.consentScreen,k.consentLanguage,k.vendorListVersion,k.policyVersion,k.isServiceSpecific,k.useNonStandardStacks,k.specialFeatureOptins,k.purposeConsents,k.purposeLegitimateInterests,k.purposeOneTreatment,k.publisherCountryCode,k.vendorConsents,k.vendorLegitimateInterests,k.publisherRestrictions],[y.PUBLISHER_TC]:[k.publisherConsents,k.publisherLegitimateInterests,k.numCustomPurposes,k.publisherCustomConsents,k.publisherCustomLegitimateInterests],[y.VENDORS_ALLOWED]:[k.vendorsAllowed],[y.VENDORS_DISCLOSED]:[k.vendorsDisclosed]}}class ee{1=[y.CORE];2=[y.CORE];constructor(e,t){if(2===e.version)if(e.isServiceSpecific)this[2].push(y.PUBLISHER_TC);else{const n=!(!t||!t.isForVendors);n&&!0!==e[k.supportOOB]||this[2].push(y.VENDORS_DISCLOSED),n&&(e[k.supportOOB]&&e[k.vendorsAllowed].size>0&&this[2].push(y.VENDORS_ALLOWED),this[2].push(y.PUBLISHER_TC))}}}class te{static fieldSequence=new Z;static encode(e,t){let n;try{n=this.fieldSequence[String(e.version)][t]}catch(n){throw new N(`Unable to encode version: ${e.version}, segment: ${t}`)}let r="";t!==y.CORE&&(r=Q.encode(G.KEY_TO_ID[t],B.segmentType));const i=X();return n.forEach((n=>{const s=e[n],o=i[n];let a=B[n];void 0===a&&this.isPublisherCustom(n)&&(a=Number(e[k.numCustomPurposes]));try{r+=o.encode(s,a)}catch(e){throw new N(`Error encoding ${t}->${n}: ${e.message}`)}})),V.encode(r)}static decode(e,t,n){const r=V.decode(e);let i=0;n===y.CORE&&(t.version=Q.decode(r.substr(i,B[k.version]),B[k.version])),n!==y.CORE&&(i+=B.segmentType);const s=this.fieldSequence[String(t.version)][n],o=X();return s.forEach((e=>{const n=o[e];let s=B[e];if(void 0===s&&this.isPublisherCustom(e)&&(s=Number(t[k.numCustomPurposes])),0!==s){const o=r.substr(i,s);if(t[e]=n===K?n.decode(o,t.version):n.decode(o,s),Number.isInteger(s))i+=s;else{if(!Number.isInteger(t[e].bitLength))throw new P(e);i+=t[e].bitLength}}})),t}static isPublisherCustom(e){return 0===e.indexOf("publisherCustom")}}class ne{static processor=[e=>e,(e,t)=>{e.publisherRestrictions.gvl=t,e.purposeLegitimateInterests.unset(1);const n=new Map;return n.set("legIntPurposes",e.vendorLegitimateInterests),n.set("purposes",e.vendorConsents),n.forEach(((n,r)=>{n.forEach(((i,s)=>{if(i){const i=t.vendors[s];if(!i||i.deletedDate)n.unset(s);else if(0===i[r].length)if("legIntPurposes"===r&&0===i.purposes.length&&0===i.legIntPurposes.length&&i.specialPurposes.length>0);else if(e.isServiceSpecific)if(0===i.flexiblePurposes.length)n.unset(s);else{const t=e.publisherRestrictions.getRestrictions(s);let i=!1;for(let e=0,n=t.length;e<n&&!i;e++)i=t[e].restrictionType===v.REQUIRE_CONSENT&&"purposes"===r||t[e].restrictionType===v.REQUIRE_LI&&"legIntPurposes"===r;i||n.unset(s)}else n.unset(s)}}))})),e.vendorsDisclosed.set(t.vendors),e}];static process(e,t){const n=e.gvl;if(!n)throw new N("Unable to encode TCModel without a GVL");if(!n.isReady)throw new N("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");(e=e.clone()).consentLanguage=n.language.toUpperCase(),t?.version>0&&t?.version<=this.processor.length?e.version=t.version:e.version=this.processor.length;const r=e.version-1;if(!this.processor[r])throw new N(`Invalid version: ${e.version}`);return this.processor[r](e,n)}}class re extends Error{constructor(e){super(e),this.name="GVLError"}}class ie{static absCall(e,t,n,r){return new Promise(((i,s)=>{const o=new XMLHttpRequest;o.withCredentials=n,o.addEventListener("load",(()=>{if(o.readyState==XMLHttpRequest.DONE)if(o.status>=200&&o.status<300){let e=o.response;if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}i(e)}else s(new Error(`HTTP Status: ${o.status} response type: ${o.responseType}`))})),o.addEventListener("error",(()=>{s(new Error("error"))})),o.addEventListener("abort",(()=>{s(new Error("aborted"))})),null===t?o.open("GET",e,!0):o.open("POST",e,!0),o.responseType="json",o.timeout=r,o.ontimeout=()=>{s(new Error("Timeout "+r+"ms "+e))},o.send(t)}))}static post(e,t,n=!1,r=0){return this.absCall(e,JSON.stringify(t),n,r)}static fetch(e,t=!1,n=0){return this.absCall(e,null,t,n)}}class se extends M{static LANGUAGE_CACHE=new Map;static CACHE=new Map;static LATEST_CACHE_KEY=0;static DEFAULT_LANGUAGE="EN";static consentLanguages=new R;static baseUrl_;static set baseUrl(e){if(/^https?:\/\/vendorlist\.consensu\.org\//.test(e))throw new re("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");e.length>0&&"/"!==e[e.length-1]&&(e+="/"),this.baseUrl_=e}static get baseUrl(){return this.baseUrl_}static latestFilename="vendor-list.json";static versionedFilename="archives/vendor-list-v[VERSION].json";static languageFilename="purposes-[LANG].json";readyPromise;gvlSpecificationVersion;vendorListVersion;tcfPolicyVersion;lastUpdated;purposes;specialPurposes;features;specialFeatures;isReady_=!1;vendors_;vendorIds;fullVendorList;byPurposeVendorMap;bySpecialPurposeVendorMap;byFeatureVendorMap;bySpecialFeatureVendorMap;stacks;lang_;isLatest=!1;constructor(e){super();let t=se.baseUrl;if(this.lang_=se.DEFAULT_LANGUAGE,this.isVendorList(e))this.populate(e),this.readyPromise=Promise.resolve();else{if(!t)throw new re("must specify GVL.baseUrl before loading GVL json");if(e>0){const n=e;se.CACHE.has(n)?(this.populate(se.CACHE.get(n)),this.readyPromise=Promise.resolve()):(t+=se.versionedFilename.replace("[VERSION]",String(n)),this.readyPromise=this.fetchJson(t))}else se.CACHE.has(se.LATEST_CACHE_KEY)?(this.populate(se.CACHE.get(se.LATEST_CACHE_KEY)),this.readyPromise=Promise.resolve()):(this.isLatest=!0,this.readyPromise=this.fetchJson(t+se.latestFilename))}}static emptyLanguageCache(e){let t=!1;return void 0===e&&se.LANGUAGE_CACHE.size>0?(se.LANGUAGE_CACHE=new Map,t=!0):"string"==typeof e&&this.consentLanguages.has(e.toUpperCase())&&(se.LANGUAGE_CACHE.delete(e.toUpperCase()),t=!0),t}static emptyCache(e){let t=!1;return Number.isInteger(e)&&e>=0?(se.CACHE.delete(e),t=!0):void 0===e&&(se.CACHE=new Map,t=!0),t}cacheLanguage(){se.LANGUAGE_CACHE.has(this.lang_)||se.LANGUAGE_CACHE.set(this.lang_,{purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks})}async fetchJson(e){try{this.populate(await ie.fetch(e))}catch(e){throw new re(e.message)}}getJson(){return JSON.parse(JSON.stringify({gvlSpecificationVersion:this.gvlSpecificationVersion,vendorListVersion:this.vendorListVersion,tcfPolicyVersion:this.tcfPolicyVersion,lastUpdated:this.lastUpdated,purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,vendors:this.fullVendorList}))}async changeLanguage(e){const t=e.toUpperCase();if(!se.consentLanguages.has(t))throw new re(`unsupported language ${e}`);if(t!==this.lang_)if(this.lang_=t,se.LANGUAGE_CACHE.has(t)){const e=se.LANGUAGE_CACHE.get(t);for(const t in e)e.hasOwnProperty(t)&&(this[t]=e[t])}else{const t=se.baseUrl+se.languageFilename.replace("[LANG]",e);try{await this.fetchJson(t),this.cacheLanguage()}catch(e){throw new re("unable to load language: "+e.message)}}}get language(){return this.lang_}isVendorList(e){return void 0!==e&&void 0!==e.vendors}populate(e){this.purposes=e.purposes,this.specialPurposes=e.specialPurposes,this.features=e.features,this.specialFeatures=e.specialFeatures,this.stacks=e.stacks,this.isVendorList(e)&&(this.gvlSpecificationVersion=e.gvlSpecificationVersion,this.tcfPolicyVersion=e.tcfPolicyVersion,this.vendorListVersion=e.vendorListVersion,this.lastUpdated=e.lastUpdated,"string"==typeof this.lastUpdated&&(this.lastUpdated=new Date(this.lastUpdated)),this.vendors_=e.vendors,this.fullVendorList=e.vendors,this.mapVendors(),this.isReady_=!0,this.isLatest&&se.CACHE.set(se.LATEST_CACHE_KEY,this.getJson()),se.CACHE.has(this.vendorListVersion)||se.CACHE.set(this.vendorListVersion,this.getJson())),this.cacheLanguage()}mapVendors(e){this.byPurposeVendorMap={},this.bySpecialPurposeVendorMap={},this.byFeatureVendorMap={},this.bySpecialFeatureVendorMap={},Object.keys(this.purposes).forEach((e=>{this.byPurposeVendorMap[e]={legInt:new Set,consent:new Set,flexible:new Set}})),Object.keys(this.specialPurposes).forEach((e=>{this.bySpecialPurposeVendorMap[e]=new Set})),Object.keys(this.features).forEach((e=>{this.byFeatureVendorMap[e]=new Set})),Object.keys(this.specialFeatures).forEach((e=>{this.bySpecialFeatureVendorMap[e]=new Set})),Array.isArray(e)||(e=Object.keys(this.fullVendorList).map((e=>+e))),this.vendorIds=new Set(e),this.vendors_=e.reduce(((e,t)=>{const n=this.vendors_[String(t)];return n&&void 0===n.deletedDate&&(n.purposes.forEach((e=>{this.byPurposeVendorMap[String(e)].consent.add(t)})),n.specialPurposes.forEach((e=>{this.bySpecialPurposeVendorMap[String(e)].add(t)})),n.legIntPurposes.forEach((e=>{this.byPurposeVendorMap[String(e)].legInt.add(t)})),n.flexiblePurposes&&n.flexiblePurposes.forEach((e=>{this.byPurposeVendorMap[String(e)].flexible.add(t)})),n.features.forEach((e=>{this.byFeatureVendorMap[String(e)].add(t)})),n.specialFeatures.forEach((e=>{this.bySpecialFeatureVendorMap[String(e)].add(t)})),e[t]=n),e}),{})}getFilteredVendors(e,t,n,r){const i=e.charAt(0).toUpperCase()+e.slice(1);let s;const o={};return s="purpose"===e&&n?this["by"+i+"VendorMap"][String(t)][n]:this["by"+(r?"Special":"")+i+"VendorMap"][String(t)],s.forEach((e=>{o[String(e)]=this.vendors[String(e)]})),o}getVendorsWithConsentPurpose(e){return this.getFilteredVendors("purpose",e,"consent")}getVendorsWithLegIntPurpose(e){return this.getFilteredVendors("purpose",e,"legInt")}getVendorsWithFlexiblePurpose(e){return this.getFilteredVendors("purpose",e,"flexible")}getVendorsWithSpecialPurpose(e){return this.getFilteredVendors("purpose",e,void 0,!0)}getVendorsWithFeature(e){return this.getFilteredVendors("feature",e)}getVendorsWithSpecialFeature(e){return this.getFilteredVendors("feature",e,void 0,!0)}get vendors(){return this.vendors_}narrowVendorsTo(e){this.mapVendors(e)}get isReady(){return this.isReady_}clone(){const e=new se(this.getJson());return this.lang_!==se.DEFAULT_LANGUAGE&&e.changeLanguage(this.lang_),e}static isInstanceOf(e){return"object"==typeof e&&"function"==typeof e.narrowVendorsTo}}class oe extends M{static consentLanguages=se.consentLanguages;isServiceSpecific_=!1;supportOOB_=!0;useNonStandardStacks_=!1;purposeOneTreatment_=!1;publisherCountryCode_="AA";version_=2;consentScreen_=0;policyVersion_=2;consentLanguage_="EN";cmpId_=0;cmpVersion_=0;vendorListVersion_=0;numCustomPurposes_=0;gvl_;created;lastUpdated;specialFeatureOptins=new W;purposeConsents=new W;purposeLegitimateInterests=new W;publisherConsents=new W;publisherLegitimateInterests=new W;publisherCustomConsents=new W;publisherCustomLegitimateInterests=new W;customPurposes;vendorConsents=new W;vendorLegitimateInterests=new W;vendorsDisclosed=new W;vendorsAllowed=new W;publisherRestrictions=new H;constructor(e){super(),e&&(this.gvl=e),this.updated()}set gvl(e){se.isInstanceOf(e)||(e=new se(e)),this.gvl_=e,this.publisherRestrictions.gvl=e}get gvl(){return this.gvl_}set cmpId(e){if(e=Number(e),!(Number.isInteger(e)&&e>1))throw new U("cmpId",e);this.cmpId_=e}get cmpId(){return this.cmpId_}set cmpVersion(e){if(e=Number(e),!(Number.isInteger(e)&&e>-1))throw new U("cmpVersion",e);this.cmpVersion_=e}get cmpVersion(){return this.cmpVersion_}set consentScreen(e){if(e=Number(e),!(Number.isInteger(e)&&e>-1))throw new U("consentScreen",e);this.consentScreen_=e}get consentScreen(){return this.consentScreen_}set consentLanguage(e){this.consentLanguage_=e}get consentLanguage(){return this.consentLanguage_}set publisherCountryCode(e){if(!/^([A-z]){2}$/.test(e))throw new U("publisherCountryCode",e);this.publisherCountryCode_=e.toUpperCase()}get publisherCountryCode(){return this.publisherCountryCode_}set vendorListVersion(e){if((e=Number(e)>>0)<0)throw new U("vendorListVersion",e);this.vendorListVersion_=e}get vendorListVersion(){return this.gvl?this.gvl.vendorListVersion:this.vendorListVersion_}set policyVersion(e){if(this.policyVersion_=parseInt(e,10),this.policyVersion_<0)throw new U("policyVersion",e)}get policyVersion(){return this.gvl?this.gvl.tcfPolicyVersion:this.policyVersion_}set version(e){this.version_=parseInt(e,10)}get version(){return this.version_}set isServiceSpecific(e){this.isServiceSpecific_=e}get isServiceSpecific(){return this.isServiceSpecific_}set useNonStandardStacks(e){this.useNonStandardStacks_=e}get useNonStandardStacks(){return this.useNonStandardStacks_}set supportOOB(e){this.supportOOB_=e}get supportOOB(){return this.supportOOB_}set purposeOneTreatment(e){this.purposeOneTreatment_=e}get purposeOneTreatment(){return this.purposeOneTreatment_}setAllVendorConsents(){this.vendorConsents.set(this.gvl.vendors)}unsetAllVendorConsents(){this.vendorConsents.empty()}setAllVendorsDisclosed(){this.vendorsDisclosed.set(this.gvl.vendors)}unsetAllVendorsDisclosed(){this.vendorsDisclosed.empty()}setAllVendorsAllowed(){this.vendorsAllowed.set(this.gvl.vendors)}unsetAllVendorsAllowed(){this.vendorsAllowed.empty()}setAllVendorLegitimateInterests(){this.vendorLegitimateInterests.set(this.gvl.vendors)}unsetAllVendorLegitimateInterests(){this.vendorLegitimateInterests.empty()}setAllPurposeConsents(){this.purposeConsents.set(this.gvl.purposes)}unsetAllPurposeConsents(){this.purposeConsents.empty()}setAllPurposeLegitimateInterests(){this.purposeLegitimateInterests.set(this.gvl.purposes)}unsetAllPurposeLegitimateInterests(){this.purposeLegitimateInterests.empty()}setAllSpecialFeatureOptins(){this.specialFeatureOptins.set(this.gvl.specialFeatures)}unsetAllSpecialFeatureOptins(){this.specialFeatureOptins.empty()}setAll(){this.setAllVendorConsents(),this.setAllPurposeLegitimateInterests(),this.setAllSpecialFeatureOptins(),this.setAllPurposeConsents(),this.setAllVendorLegitimateInterests()}unsetAll(){this.unsetAllVendorConsents(),this.unsetAllPurposeLegitimateInterests(),this.unsetAllSpecialFeatureOptins(),this.unsetAllPurposeConsents(),this.unsetAllVendorLegitimateInterests()}get numCustomPurposes(){let e=this.numCustomPurposes_;if("object"==typeof this.customPurposes){const t=Object.keys(this.customPurposes).sort(((e,t)=>Number(e)-Number(t)));e=parseInt(t.pop(),10)}return e}set numCustomPurposes(e){if(this.numCustomPurposes_=parseInt(e,10),this.numCustomPurposes_<0)throw new U("numCustomPurposes",e)}updated(){const e=new Date,t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()));this.created=t,this.lastUpdated=t}}class ae{static encode(e,t){let n,r="";return e=ne.process(e,t),n=Array.isArray(t?.segments)?t.segments:new ee(e,t)[""+e.version],n.forEach(((t,i)=>{let s="";i<n.length-1&&(s="."),r+=te.encode(e,t)+s})),r}static decode(e,t){const n=e.split("."),r=n.length;t||(t=new oe);for(let e=0;e<r;e++){const r=n[e],i=V.decode(r.charAt(0)).substr(0,B.segmentType),s=G.ID_TO_KEY[Q.decode(i,B.segmentType).toString()];te.decode(r,t,s)}return t}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var pe={DIANOMI:885},he=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ue(this,"_can_serve_ads",void 0),ue(this,"tcData",void 0),ue(this,"_can_cookie",void 0),this.tcData=t,this._can_serve_ads=n,this._can_cookie=r}var t,n;return t=e,(n=[{key:"toString",value:function(){return"permissions<can_serve_ads=".concat(this.can_serve_ads,", can_cookie=").concat(this.can_cookie,">")}},{key:"get_tcData",value:function(){return this.tcData||null}},{key:"gdpr",value:function(){var e;return(null===(e=this.tcData)||void 0===e?void 0:e.gdprApplies)||null}},{key:"gdpr_consent",value:function(){var e;return tt(this.tcData)?null:(null===(e=this.tcData)||void 0===e?void 0:e.tcString)||null}},{key:"can_serve_ads",value:function(){return this._can_serve_ads}},{key:"can_cookie",value:function(){return this._can_cookie}}])&&le(t.prototype,n),e}();function fe(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function me(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){fe(s,r,i,o,a,"next",e)}function a(e){fe(s,r,i,o,a,"throw",e)}o(void 0)}))}}function ve(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}var ge,ye,be,we,Ee=50;function Ie(e){return _e.apply(this,arguments)}function _e(){return(_e=me((function(e){var t;return ve(this,(function(n){switch(n.label){case 0:return"function"==typeof window.__tcfapi?[2,!0]:[4,Se(e)];case 1:return null===(t=n.sent())?[2,!1]:(function(e,t){var n={};e.__tcfapi=function(e,r,i,s){var o="".concat(e,"-").concat(Math.random()),a={__tcfapiCall:{command:e,parameter:s,version:r,callId:o}};n[o]=i,t.postMessage(a,"*")},window.addEventListener("message",(function(e){return function(e,t){var n;try{n="string"==typeof e.data?JSON.parse(e.data):e.data}catch(t){n=e.data}var r=null==n?void 0:n.__tcfapiReturn;if(r){var i=t[r.callId];"function"==typeof i&&(i(r.returnValue,r.success),r.callId.startsWith("addEventListener")||(t[r.callId]=null))}}(e,n)}),!1)}(window,t),[2,!0])}}))}))).apply(this,arguments)}function Se(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=me((function(e){var t,n;return ve(this,(function(r){switch(r.label){case 0:t=0,r.label=1;case 1:return t<e?null!==(n=Oe(window))?[2,n]:[4,Ae()]:[3,4];case 2:r.sent(),r.label=3;case 3:return t++,[3,1];case 4:return[2,null]}}))}))).apply(this,arguments)}function Ae(){return Le.apply(this,arguments)}function Le(){return(Le=me((function(){return ve(this,(function(e){return[2,new Promise((function(e){setTimeout((function(){e()}),Ee)}))]}))}))).apply(this,arguments)}function Oe(e){try{if(e.frames.__tcfapiLocator)return e}catch(e){}return e===window.top?null:Oe(e.parent)}!function(e){e.PING="ping",e.GET_TC_DATA="getTCData",e.GET_IN_APP_TC_DATA="getInAppTCData",e.GET_VENDOR_LIST="getVendorList",e.ADD_EVENT_LISTENER="addEventListener",e.REMOVE_EVENT_LISTENER="removeEventListener"}(ge||(ge={})),function(e){e.STUB="stub",e.LOADING="loading",e.LOADED="loaded",e.ERROR="error"}(ye||(ye={})),function(e){e.VISIBLE="visible",e.HIDDEN="hidden",e.DISABLED="disabled"}(be||(be={})),function(e){e.TC_LOADED="tcloaded",e.CMP_UI_SHOWN="cmpuishown",e.USER_ACTION_COMPLETE="useractioncomplete"}(we||(we={}));class Te{listenerId;callback;next;param;success=!0;constructor(e,t,n,r){Object.assign(this,{callback:e,listenerId:n,param:t,next:r});try{this.respond()}catch(e){this.invokeCallback(null)}}invokeCallback(e){const t=null!==e;"function"==typeof this.next?this.callback(this.next,e,t):this.callback(e,t)}}class De extends Te{respond(){this.throwIfParamInvalid(),this.invokeCallback(new Re(this.param,this.listenerId))}throwIfParamInvalid(){if(!(void 0===this.param||Array.isArray(this.param)&&this.param.every(Number.isInteger)))throw new Error("Invalid Parameter")}}class xe{eventQueue=new Map;queueNumber=0;add(e){return this.eventQueue.set(this.queueNumber,e),this.queueNumber++}remove(e){return this.eventQueue.delete(e)}exec(){this.eventQueue.forEach(((e,t)=>{new De(e.callback,e.param,t,e.next)}))}clear(){this.queueNumber=0,this.eventQueue.clear()}get size(){return this.eventQueue.size}}class Ne{static apiVersion="2";static tcfPolicyVersion;static eventQueue=new xe;static cmpStatus=ye.LOADING;static disabled=!1;static displayStatus=be.HIDDEN;static cmpId;static cmpVersion;static eventStatus;static gdprApplies;static tcModel;static tcString;static reset(){delete this.cmpId,delete this.cmpVersion,delete this.eventStatus,delete this.gdprApplies,delete this.tcModel,delete this.tcString,delete this.tcfPolicyVersion,this.cmpStatus=ye.LOADING,this.disabled=!1,this.displayStatus=be.HIDDEN,this.eventQueue.clear()}}class Pe{cmpId=Ne.cmpId;cmpVersion=Ne.cmpVersion;gdprApplies=Ne.gdprApplies;tcfPolicyVersion=Ne.tcfPolicyVersion}class Ve extends Pe{cmpStatus=ye.ERROR}class Re extends Pe{tcString;listenerId;eventStatus;cmpStatus;isServiceSpecific;useNonStandardStacks;publisherCC;purposeOneTreatment;outOfBand;purpose;vendor;specialFeatureOptins;publisher;constructor(e,t){if(super(),this.eventStatus=Ne.eventStatus,this.cmpStatus=Ne.cmpStatus,this.listenerId=t,Ne.gdprApplies){const t=Ne.tcModel;this.tcString=Ne.tcString,this.isServiceSpecific=t.isServiceSpecific,this.useNonStandardStacks=t.useNonStandardStacks,this.purposeOneTreatment=t.purposeOneTreatment,this.publisherCC=t.publisherCountryCode,this.outOfBand={allowedVendors:this.createVectorField(t.vendorsAllowed,e),disclosedVendors:this.createVectorField(t.vendorsDisclosed,e)},this.purpose={consents:this.createVectorField(t.purposeConsents),legitimateInterests:this.createVectorField(t.purposeLegitimateInterests)},this.vendor={consents:this.createVectorField(t.vendorConsents,e),legitimateInterests:this.createVectorField(t.vendorLegitimateInterests,e)},this.specialFeatureOptins=this.createVectorField(t.specialFeatureOptins),this.publisher={consents:this.createVectorField(t.publisherConsents),legitimateInterests:this.createVectorField(t.publisherLegitimateInterests),customPurpose:{consents:this.createVectorField(t.publisherCustomConsents),legitimateInterests:this.createVectorField(t.publisherCustomLegitimateInterests)},restrictions:this.createRestrictions(t.publisherRestrictions)}}}createRestrictions(e){const t={};if(e.numRestrictions>0){const n=e.getMaxVendorId();for(let r=1;r<=n;r++){const n=r.toString();e.getRestrictions(r).forEach((e=>{const r=e.purposeId.toString();t[r]||(t[r]={}),t[r][n]=e.restrictionType}))}}return t}createVectorField(e,t){return t?t.reduce(((t,n)=>(t[String(n)]=e.has(Number(n)),t)),{}):[...e].reduce(((e,t)=>(e[t[0].toString(10)]=t[1],e)),{})}}class ke extends Re{constructor(e){super(e),delete this.outOfBand}createVectorField(e){return[...e].reduce(((e,t)=>e+(t[1]?"1":"0")),"")}createRestrictions(e){const t={};if(e.numRestrictions>0){const n=e.getMaxVendorId();e.getRestrictions().forEach((e=>{t[e.purposeId.toString()]="_".repeat(n)}));for(let r=0;r<n;r++){const n=r+1;e.getRestrictions(n).forEach((e=>{const n=e.restrictionType.toString(),i=e.purposeId.toString(),s=t[i].substr(0,r),o=t[i].substr(r+1);t[i]=s+n+o}))}}return t}}class Me extends Pe{cmpLoaded=!0;cmpStatus=Ne.cmpStatus;displayStatus=Ne.displayStatus;apiVersion=String(Ne.apiVersion);gvlVersion;constructor(){super(),Ne.tcModel&&Ne.tcModel.vendorListVersion&&(this.gvlVersion=+Ne.tcModel.vendorListVersion)}}class Ue extends Te{respond(){this.invokeCallback(new Me)}}class je extends De{respond(){this.throwIfParamInvalid(),this.invokeCallback(new ke(this.param))}}class Fe extends Te{respond(){const e=Ne.tcModel,t=e.vendorListVersion;let n;void 0===this.param&&(this.param=t),n=this.param===t&&e.gvl?e.gvl:new se(this.param),n.readyPromise.then((()=>{this.invokeCallback(n.getJson())}))}}class He extends De{respond(){this.listenerId=Ne.eventQueue.add({callback:this.callback,param:this.param,next:this.next}),super.respond()}}class Ge extends Te{respond(){this.invokeCallback(Ne.eventQueue.remove(this.param))}}class We{static[ge.PING]=Ue;static[ge.GET_TC_DATA]=De;static[ge.GET_IN_APP_TC_DATA]=je;static[ge.GET_VENDOR_LIST]=Fe;static[ge.ADD_EVENT_LISTENER]=He;static[ge.REMOVE_EVENT_LISTENER]=Ge}class Be{static set_=new Set([0,2,void 0,null]);static has(e){return"string"==typeof e&&(e=Number(e)),this.set_.has(e)}}const ze="__tcfapi";class Qe{callQueue;customCommands;constructor(e){if(e){let t=ge.ADD_EVENT_LISTENER;if(e?.[t])throw new Error(`Built-In Custom Commmand for ${t} not allowed: Use ${ge.GET_TC_DATA} instead`);if(t=ge.REMOVE_EVENT_LISTENER,e?.[t])throw new Error(`Built-In Custom Commmand for ${t} not allowed`);e?.[ge.GET_TC_DATA]&&(e[ge.ADD_EVENT_LISTENER]=e[ge.GET_TC_DATA],e[ge.REMOVE_EVENT_LISTENER]=e[ge.GET_TC_DATA]),this.customCommands=e}try{this.callQueue=window[ze]()||[]}catch(e){this.callQueue=[]}finally{window[ze]=this.apiCall.bind(this),this.purgeQueuedCalls()}}apiCall(e,t,n,...r){if("string"!=typeof e)n(null,!1);else if(Be.has(t)){if("function"!=typeof n)throw new Error("invalid callback function");Ne.disabled?n(new Ve,!1):this.isCustomCommand(e)||this.isBuiltInCommand(e)?this.isCustomCommand(e)&&!this.isBuiltInCommand(e)?this.customCommands[e](n,...r):e===ge.PING?this.isCustomCommand(e)?new We[e](this.customCommands[e],r[0],null,n):new We[e](n,r[0]):void 0===Ne.tcModel?this.callQueue.push([e,t,n,...r]):this.isCustomCommand(e)&&this.isBuiltInCommand(e)?new We[e](this.customCommands[e],r[0],null,n):new We[e](n,r[0]):n(null,!1)}else n(null,!1)}purgeQueuedCalls(){const e=this.callQueue;this.callQueue=[],e.forEach((e=>{window[ze](...e)}))}isCustomCommand(e){return this.customCommands&&"function"==typeof this.customCommands[e]}isBuiltInCommand(e){return void 0!==We[e]}}class $e{callResponder;isServiceSpecific;numUpdates=0;constructor(e,t,n=!1,r){this.throwIfInvalidInt(e,"cmpId",2),this.throwIfInvalidInt(t,"cmpVersion",0),Ne.cmpId=e,Ne.cmpVersion=t,Ne.tcfPolicyVersion=2,this.isServiceSpecific=!!n,this.callResponder=new Qe(r)}throwIfInvalidInt(e,t,n){if(!("number"==typeof e&&Number.isInteger(e)&&e>=n))throw new Error(`Invalid ${t}: ${e}`)}update(e,t=!1){if(Ne.disabled)throw new Error("CmpApi Disabled");Ne.cmpStatus=ye.LOADED,t?(Ne.displayStatus=be.VISIBLE,Ne.eventStatus=we.CMP_UI_SHOWN):void 0===Ne.tcModel?(Ne.displayStatus=be.DISABLED,Ne.eventStatus=we.TC_LOADED):(Ne.displayStatus=be.HIDDEN,Ne.eventStatus=we.USER_ACTION_COMPLETE),Ne.gdprApplies=null!==e,Ne.gdprApplies?(""===e?(Ne.tcModel=new oe,Ne.tcModel.cmpId=Ne.cmpId,Ne.tcModel.cmpVersion=Ne.cmpVersion):Ne.tcModel=ae.decode(e),Ne.tcModel.isServiceSpecific=this.isServiceSpecific,Ne.tcfPolicyVersion=Number(Ne.tcModel.policyVersion),Ne.tcString=e):Ne.tcModel=null,0===this.numUpdates?this.callResponder.purgeQueuedCalls():Ne.eventQueue.exec(),this.numUpdates++}disable(){Ne.disabled=!0,Ne.cmpStatus=ye.ERROR}}function Je(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qe(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Ye(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){qe(s,r,i,o,a,"next",e)}function a(e){qe(s,r,i,o,a,"throw",e)}o(void 0)}))}}function Ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Je(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Je(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Xe(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}var Ze=20,et=10;function tt(e){return void 0!==(null==e?void 0:e.apiVersion)&&void 0!==(null==e?void 0:e.displayStatus)}function nt(e,t){return rt.apply(this,arguments)}function rt(){return(rt=Ye((function(e,t){var n,r,i,s;return Xe(this,(function(o){switch(o.label){case 0:return[4,Ie(Ze)];case 1:return o.sent()?[4,it()]:[2,new he(null,e,t)];case 2:return o.sent()?[4,ot()]:[2,new he(null,e,t)];case 3:return null===(n=o.sent())?[2,new he(null,e,t)]:!n.gdprApplies||tt(n)?[2,new he(n,e,t)]:(r=Ke(function(e){if(!e.gdprApplies)throw new Error("decideTCF shouldn't be called if gdprApplies=false");var t={};"string"!=typeof e.purpose.consents&&(t=e.purpose.consents);var n,r={};"string"!=typeof e.purpose.legitimateInterests&&(r=e.purpose.legitimateInterests);var i,s=null===(n=e.vendor.legitimateInterests[pe.DIANOMI])||void 0===n||n,o=null===(i=e.vendor.consents[pe.DIANOMI])||void 0===i||i;Object.entries(e.publisher.restrictions).forEach((function(e){var n=de(e,2),i=n[0],s=n[1];Object.entries(s).forEach((function(e){var n=de(e,2),s=n[0],o=n[1];if(parseInt(s)===pe.DIANOMI){var a=o;a===v.NOT_ALLOWED?(r[i]=!1,t[i]=!1):a===v.REQUIRE_LI?t[i]=!1:a===v.REQUIRE_CONSENT&&(r[i]=!1)}}))}));var a=Boolean(r[2]&&r[7]&&r[10]&&s||t[2]&&t[7]&&t[10]&&o);return[a,Boolean(a&&t[1]&&t[2]&&t[7]&&t[10]&&o)]}(n),2),i=r[0],s=r[1],[2,new he(n,i,s)])}}))}))).apply(this,arguments)}function it(){return st.apply(this,arguments)}function st(){return st=Ye((function(){return Xe(this,(function(e){return[2,new Promise((function(e){var t=0,n=setInterval(Ye((function(){var r,i;return Xe(this,(function(s){switch(s.label){case 0:return t++>10&&(clearInterval(n),e(!1)),[4,ut("ping")];case 1:return r=Ke.apply(void 0,[s.sent(),1]),(i=r[0].cmpLoaded)&&(clearInterval(n),e(i)),[2]}}))})),500)}))]}))})),st.apply(this,arguments)}function ot(){return at.apply(this,arguments)}function at(){return(at=Ye((function(){var e,t,n;return Xe(this,(function(r){switch(r.label){case 0:e=0,r.label=1;case 1:return e<Ze?[4,ut("addEventListener")]:[3,9];case 2:if(t=Ke.apply(void 0,[r.sent(),2]),n=t[0],!t[1])return[3,8];switch(n.eventStatus){case we.TC_LOADED:return[3,3];case we.USER_ACTION_COMPLETE:return[3,4];case we.CMP_UI_SHOWN:return[3,5]}return[3,7];case 3:case 4:return[2,n];case 5:return[4,ct()];case 6:return[2,Ke.apply(void 0,[r.sent(),1])[0]];case 7:if("loaded"===n.cmpStatus)return[2,n];throw new Error("Unknown Event Status: "+n.eventStatus);case 8:return e++,[3,1];case 9:return[2,null]}}))}))).apply(this,arguments)}function ct(){return lt.apply(this,arguments)}function lt(){return lt=Ye((function(){return Xe(this,(function(e){return[2,new Promise((function(e){var t=function(t,n){t.eventStatus===we.USER_ACTION_COMPLETE&&e([t,n])};function n(){return n=Ye((function(){return Xe(this,(function(e){switch(e.label){case 0:return[4,ut("addEventListener",t)];case 1:return e.sent(),[2]}}))})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}(),setTimeout(Ye((function(){var t;return Xe(this,(function(n){switch(n.label){case 0:return[4,ut("ping")];case 1:return t=n.sent(),ut("removeEventListener"),e(t),[2]}}))})),1e3*et)}))]}))})),lt.apply(this,arguments)}function ut(e,t){return dt.apply(this,arguments)}function dt(){return(dt=Ye((function(e,t){return Xe(this,(function(n){return[2,new Promise((function(n,r){var i=null!=t?t:function(e,t){n([e,t])};void 0!==window.__tcfapi?window.__tcfapi(e,2,i):r("__tcfapi is undefined")}))]}))}))).apply(this,arguments)}function pt(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function ht(e,t){return ft.apply(this,arguments)}function ft(){var e;return e=function(e,t){var n,r,i,s,o,a;return function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,(function(c){switch(c.label){case 0:return n="https://data.dianomi.com/frontend/usync?redirect=https%3A%2F%2Fdata.dianomi.com%2Ffrontend%2Fping%3Fuid%3D%24UID",null!==e&&!0===e&&(n+="&gdpr=1&gdpr_consent="+t),[4,fetch(n)];case 1:return(r=c.sent()).redirected?(i=r.url,s=new URL(i),o=new URLSearchParams(s.search),null===(a=o.get("uid"))?[2,void 0]:[2,a]):[2,void 0]}}))},ft=function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){pt(s,r,i,o,a,"next",e)}function a(e){pt(s,r,i,o,a,"throw",e)}o(void 0)}))},ft.apply(this,arguments)}function mt(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}var vt=15552e3,gt="DIANOMI-CLICK-COOKIE",yt="session",bt="dnt";function wt(){var e;return e=function(e,t){var n,r;return function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,(function(i){switch(i.label){case 0:return Ot()?(St(),document.cookie=gt+"=;Expires=Mon, 1 Jan 1970 00:00:00 GMT",[2]):(function(){var e=localStorage.getItem(gt);if(null!==e){var t=JSON.parse(e).timestamp;if(null!==t){var n=new Date(Date.parse(t));((new Date).getTime()-n.getTime())/1e3>vt&&St()}}}(),n=Ct(),void 0!==(r=At(n))?[3,2]:[4,ht(e,t)]);case 1:r=i.sent(),i.label=2;case 2:return void 0===r||(function(e){var t="".concat(gt,"=").concat(e,"; max-age=").concat(vt);document.cookie=t}(r),void 0===n.localStorageId&&It(r)),[2]}}))},wt=function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){mt(s,r,i,o,a,"next",e)}function a(e){mt(s,r,i,o,a,"throw",e)}o(void 0)}))},wt.apply(this,arguments)}function Et(){if(!Ot()){var e=At(Ct());if(void 0!==e)return{source:"dianomi.com",atype:1,stype:"ppuid",uids:[{id:e,atype:1,ext:{stype:"ppuid"}}]}}}function It(e){var t={id:e,timestamp:(new Date).toISOString()};localStorage.setItem(gt,JSON.stringify(t))}function _t(){var e=localStorage.getItem(gt);if(null!==e){var t=null;try{t=JSON.parse(e)}catch(e){return void console.error("Error parsing localStorage data:",e)}if(null!==t)return It(t.id),t.id}}function St(){localStorage.removeItem(gt)}function Ct(){return{localStorageId:_t(),firstPartyId:Lt(gt),thirdPartyId:Lt(yt)}}function At(e){var t=!0,n=!1,r=void 0;try{for(var i,s=Object.values(e)[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var o=i.value;if(void 0!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}function Lt(e){var t;return null===(t=document.cookie.split("; ").find((function(t){return t.startsWith(e+"=")})))||void 0===t?void 0:t.split("=")[1]}function Ot(){var e=Lt(bt);return void 0!==e&&""!==e}function Tt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Dt(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function xt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Tt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tt(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Nt=1293,Pt=1;function Vt(e){return Rt.apply(this,arguments)}function Rt(){var e;return e=function(e){var t,n;return function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,(function(r){switch(r.label){case 0:return e.dnt?[2]:[4,(i=e.dianomiContextHost,new Promise((function(e,t){try{if(window.pbjs)return void e(!0);var n=document.createElement("script");n.src="https://".concat(i,"/js/contextfeed/prebid.js"),document.body.appendChild(n),n.onload=function(){e(!0)},n.onerror=function(){t()}}catch(e){t()}})))];case 1:return r.sent()&&pbjs?(t=[],e.identity.id5&&t.push({name:"id5Id",params:{partner:Nt},storage:{type:"html5",name:"id5id",expires:90,refreshInSeconds:28800}}),e.identity.sharedId&&t.push({name:"sharedId",storage:{type:"cookie",name:"sharedId",expires:90,refreshInSeconds:28800}}),e.identity.dmp&&function(e,t){if(null===e)return!t;if(n=e,null!=(r=Me)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r)return!1;var n,r;if(!e.gdprApplies)return!0;if(!e.vendor.consents[pe.DIANOMI]||!e.purpose.consents[Pt])return!1;var i=!1;return Object.entries(e.publisher.restrictions).forEach((function(e){var t=xt(e,2),n=t[0],r=t[1];Object.entries(r).forEach((function(e){var t=xt(e,2),r=t[0],s=t[1];if(parseInt(r)===pe.DIANOMI){var o=s;o===v.NOT_ALLOWED?n===Pt.toString()&&(i=!0):o===v.REQUIRE_LI&&n===Pt.toString()&&(i=!0)}}))})),!i}(e.tcfPermissions.get_tcData(),e.inGDPR)&&(function(e,t){wt.apply(this,arguments)}(e.tcfPermissions.gdpr(),e.tcfPermissions.gdpr_consent()),t.push({name:"pubProvidedId",params:{eidsFunction:Et}})),n={consentManagement:{gdpr:{cmpApi:"iab",timeout:8e3,defaultGdprScope:e.inGDPR}},debug:!0,userSync:{userIds:t,auctionDelay:50}},pbjs.setConfig(n),[4,pbjs.getUserIdsAsync()]):[2];case 2:return r.sent(),[2,pbjs.getUserIdsAsEids()]}var i}))},Rt=function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){Dt(s,r,i,o,a,"next",e)}function a(e){Dt(s,r,i,o,a,"throw",e)}o(void 0)}))},Rt.apply(this,arguments)}function kt(){return new Promise((function(e,t){var n,r,i,s=Mt(window);s?("function"==typeof window.__uspapi||(n=window,r=s,i={},n.__uspapi=function(e,t,n){var s="".concat(e,"-").concat(Math.random()),o={__uspapiCall:{command:e,parameter:"",version:t,callId:s}};i[s]=n,r.postMessage(o,"*")},n.addEventListener("message",(function(e){return function(e,t){var n;try{n="string"==typeof e.data?JSON.parse(e.data):e.data}catch(t){n=e.data}var r=null==n?void 0:n.__uspapiReturn;if(r){var i=t[r.callId];"function"==typeof i&&i(r.returnValue,r.success)}}(e,i)}),!1)),window.__uspapi?window.__uspapi("getUSPData",1,(function(n){(null==n?void 0:n.uspString)?e(n.uspString):t("No USP string present")})):t("No __uspapi on dianomi window")):t("No __uspapiLocator frame")}))}function Mt(e){try{if(e.frames.__uspapiLocator)return e}catch(e){}return e===e.top?null:Mt(e.parent)}function Ut(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function jt(e,t,n){return Ft.apply(this,arguments)}function Ft(){var e;return e=function(e,t,n){var r,i,o,a,c,l;return function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,(function(u){switch(u.label){case 0:return r=1===n.user.can_serve_ads,i=1===n.user.can_cookie,n.usp?[4,kt()]:[3,2];case 1:(o=u.sent())&&(n.uspString=o),u.label=2;case 2:return n.partner_tcf_status===s.PARTNER_TCF_STATUS||n["dianomi-tcf"]?e.consent?(d=e.consent,(p=function(e){try{var t=JSON.parse(decodeURIComponent(e)).gdpr;if(t&&"string"==typeof t)return t}catch(t){if(e)return e}return null}(d))&&function(e){try{return t=e,new $e(2,3,!0).update(t),!0}catch(e){return!1}var t}(p)?[3,4]:[4,cn(e,t,n,null)]):[3,4]:[3,10];case 3:return u.sent(),[2];case 4:return[4,nt(r,i)];case 5:return a=u.sent(),(null==n?void 0:n.identity)?[4,Vt({identity:n.identity,dianomiContextHost:e.host,tcfPermissions:a,inGDPR:1===(null==n||null===(c=n.user)||void 0===c?void 0:c.in_gdpr),dnt:1===(null==n||null===(l=n.user)||void 0===l?void 0:l.dnt)})]:[3,7];case 6:n.identity_values=u.sent(),u.label=7;case 7:return(t.getAttribute("data-dianomi-context-loaded")||s.CONTEXT_NOT_LOADED)===s.CONTEXT_LOADED?[3,9]:[4,cn(e,t,n,a)];case 8:u.sent(),u.label=9;case 9:return[2];case 10:return[4,cn(e,t,n,null)];case 11:return u.sent(),[2]}var d,p}))},Ft=function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){Ut(s,r,i,o,a,"next",e)}function a(e){Ut(s,r,i,o,a,"throw",e)}o(void 0)}))},Ft.apply(this,arguments)}function Ht(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gt(e,t,n){e.forEach((function(e){!function(e,t){navigator.sendBeacon("https://".concat(t,"/cgi-bin/reporting.pl"),JSON.stringify(e))}(function(e,t){var n=t.videoId,r=t.uniqueId,i=t.adId,s=t.url,o=t.adType,a={type:e.type,url:s,body:e.body,unique_id:r,ad_type:o};return n&&(a.video_id=n),i&&(a.ad_id=i),a}(e,t),n)}))}function Wt(e,t,n){if("sendBeacon"in navigator&&"ReportingObserver"in window&&"JSON"in window){var r=(s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ht(e,t,n[t])}))}return e}({},t),o=null!=(o={url:T(),adType:n})?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(o)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(o)).forEach((function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(o,e))})),s),i=new ReportingObserver((function(t){Gt(t,r,e)}),{buffered:!0,types:["intervention"]});i.observe(),window.addEventListener("unload",(function(){var t=i.takeRecords();t.length>0&&Gt(t,r,e)}))}var s,o}function Bt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zt(e){var t,n;function r(t,n){try{var s=e[t](n),o=s.value,a=o instanceof qt;Promise.resolve(a?o.wrapped:o).then((function(e){a?r("next",e):i(s.done?"return":"normal",e)}),(function(e){r("throw",e)}))}catch(e){i("throw",e)}}function i(e,i){switch(e){case"return":t.resolve({value:i,done:!0});break;case"throw":t.reject(i);break;default:t.resolve({value:i,done:!1})}(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,i){return new Promise((function(s,o){var a={key:e,arg:i,resolve:s,reject:o,next:null};n?n=n.next=a:(t=n=a,r(e,i))}))},"function"!=typeof e.return&&(this.return=void 0)}function Qt(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function $t(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){Qt(s,r,i,o,a,"next",e)}function a(e){Qt(s,r,i,o,a,"throw",e)}o(void 0)}))}}function Jt(e){return new qt(e)}function qt(e){this.wrapped=e}function Yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Yt(e,t,n[t])}))}return e}function Xt(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function Zt(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}"function"==typeof Symbol&&Symbol.asyncIterator&&(zt.prototype[Symbol.asyncIterator]=function(){return this}),zt.prototype.next=function(e){return this._invoke("next",e)},zt.prototype.throw=function(e){return this._invoke("throw",e)},zt.prototype.return=function(e){return this._invoke("return",e)};var en,tn="20240109200316687",nn=0,rn=0,sn=1,on={videoDebug:rn,tcfDebug:rn};function an(e){var t="".concat(e.partner_id,".").concat(e.cfid);return e.name&&(t="".concat(t,".").concat(e.name)),t}function cn(e,t,n,r){return ln.apply(this,arguments)}function ln(){return ln=$t((function(e,t,n,o){var a,c,l,u,v,g,y,b,w,I,T,N,P,V,R,k,M,U,j,F,H,G,W,B;function z(e,t,n){if(e.when&&e.when[t]){for(var r=e.when[t],i=0;i<r.length;i++)if(r[i]===n)return!0;return!1}return!0}function Q(e,t,n){return $.apply(this,arguments)}function $(){return $=$t((function(e,t,n){var r,i,s,o,a,c,l,d,p,h,f,g,y,w,E=arguments;function I(){s()?(window.postMessage({type:"dianomi-native-ad",responsive:!0,nativeUnit:n}),a.style.flexDirection="column"):(window.postMessage({type:"dianomi-native-ad",responsive:!1,nativeUnit:n}),a.style.flexDirection="row")}return Zt(this,(function(n){switch(n.label){case 0:r=E.length>3&&void 0!==E[3]?E[3]:v,i=t.responsiveWidth||"0",s=function(){return u<=Number(i)},(o=document.createElement("div")).id="dianomi-native-main-container",(a=document.createElement("div")).id="dianomi-native-container",a.style.display="flex",a.style.flexDirection=s()?"column":"row",o.appendChild(a),r.appendChild(o),c=!0,l=!1,d=void 0,n.label=1;case 1:n.trys.push([1,6,7,8]),p=e[Symbol.iterator](),n.label=2;case 2:return(c=(h=p.next()).done)?[3,5]:(f=h.value,[4,b[f.type](f.args,a,!0,s())]);case 3:n.sent(),n.label=4;case 4:return c=!0,[3,2];case 5:return[3,8];case 6:return g=n.sent(),l=!0,d=g,[3,8];case 7:try{c||null==p.return||p.return()}finally{if(l)throw d}return[7];case 8:return y=0,w=setInterval((function(){y>20&&clearInterval(w),I(),y++}),100),m((function(){I(),clearInterval(w)})),[2]}}))})),$.apply(this,arguments)}function J(e,t){return q.apply(this,arguments)}function q(){return q=$t((function(e,t){var n,r,i;return Zt(this,(function(s){switch(s.label){case 0:return C("native",e)?(Q(e.units,{},"0",t),[3,5]):[3,1];case 1:return S(["smartad","video"],e)?(C("smartad",e)&&t&&(t=x(t,e.args,!1),m((function(){return p(t,e.args,u)}))),t?(n=e.args,r=e.type,C("googleTag",e)||C("iframe",e)||!e.seed||(n=Xt(Kt({},n),{seed:e.seed})),[4,b[r](n,t,!1,!0)]):[3,3]):[3,4];case 2:s.sent(),s.label=3;case 3:return[3,5];case 4:C("passback",e)&&((i=document.createElement("iframe")).classList.add("passback-container"),i.srcdoc=e.args.passbackTag,i.style.border="none",i.width="100%",i.onload=function(){var e;i.style.height="".concat(null===(e=i.contentWindow)||void 0===e?void 0:e.innerHeight,"px")},t.append(i)),s.label=5;case 5:return[2]}}))})),q.apply(this,arguments)}return Zt(this,(function($){switch($.label){case 0:if(c=!1,X=document.getElementById("dianomi-context-wrapper"),l=null==X?void 0:X.getAttribute("data-dianomi-parent-iframe-id"),n["dianomi-tcf"]&&console.log("contextfeed tcf debug enabled, context id",null==e?void 0:e.id,"tcfPermissions=",o),(n["dianomi-tcf"]||n.partner_tcf_status==s.PARTNER_TCF_STATUS)&&o&&!o.can_serve_ads())return n["dianomi-tcf"]&&console.log("context feed tcf debug, showing nothing due to can_serve_ads for context id",e.id),r.notify_context(e.host,e.id,an(n),i.NoPermissions),[2];!n["dianomi-tcf"]&&n.partner_tcf_status!=s.PARTNER_TCF_STATUS||null!==o||(n["dianomi-tcf"]&&console.log("context feed tcf debug, no tcf object for context id",e.id),r.notify_context(e.host,e.id,an(n),i.NoTcData)),L(t,null===(a=n.args)||void 0===a?void 0:a.styling),u=f(),m((function(){u=f()})),y=function(r){document.body.style.overflow="hidden",document.body.style.margin="0",v=document.createElement("div");var i={maxWidth:r.width||"650px",height:r.height||"auto",margin:"0 auto"};L(v,i),un(v,r,u),m((function(){return un(v,r,u)})),g=an(n),t.appendChild(v);var s=document.createElement("div");s.style.borderBottom="1px solid #ccc",s.style.marginBottom="5px",s.style.position="relative",s.style.height="13px";var o=void 0!==n.user.country_code?"&geo_ccod=".concat(n.user.country_code):"";s.innerHTML="<a href='https://".concat(e.host,".dianomi.com/cms/whats-this/?utm.source=").concat(window.location.hostname,"&utm_medium=smartad_sponsor_link' target='_blank'> <span style='font-size: 10px;color: #748683; position: absolute; width: 125px; right: 0; font-family: helvetica, arial, sans-serif;'>Context Feed by <img src='https://www.dianomi.com/img/dianomi-max-200x38.png' alt='dianomi' style='width: 45px;height: auto; display: inline;'><img src='https://www.dianomi.com/cgi-bin/pixeltrack.pl?cf=").concat(encodeURIComponent(g)).concat(o,"'></span></a>"),t.appendChild(v);var a=document.createElement("link");if(a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href","https://".concat(e.host,"/partner/dianomi/css/dianomi-context.css?v=1.1")),document.body.appendChild(a),n.header_html){var c=document.createElement("div");c.innerHTML=n.header_html,v.appendChild(c)}r.iframebuster&&("loading"==document.readyState?document.addEventListener("DOMContentLoaded",(function(){return pn(r.iframebusterOptions)})):pn(r.iframebusterOptions))},b={video:(K=$t((function(t){var r,i,s,a,c,l,d,f=arguments;return Zt(this,(function(y){return r=f.length>1&&void 0!==f[1]?f[1]:v,i=f.length>2&&void 0!==f[2]&&f[2],s=f.length>3&&void 0!==f[3]&&f[3],a=Math.floor(1e5*Math.random()),c="dianomi_video_".concat(t.id,"_").concat(a),l=document.createElement("div"),i&&(l.style.paddingRight=t.nativeRightPadding||"20px"),"left"===t.float&&(l.style.padding="0 15px 0 0"),l.id="dianomi-video-container-".concat(t.id,"-").concat(a),l.classList.add("dianomi_video"),i||(h(l,t,u),p(l,t,u,!0),m((function(){p(l,t,u,!0),h(l,t,u)}))),r.appendChild(l),window[c]={args:t,context_id:e.id,dianomiContextHost:e.host,data:n,tcfPermissions:o,server_can_serve_ads:null==o?void 0:o.can_serve_ads(),server_can_cookie:null==o?void 0:o.can_cookie(),viewportWidth:u,dianomiContextAffiliate:e.affiliate,randomId:a,videoDebug:on.videoDebug,dianomiPageUrl:en,cf:g,isNative:i,isNativeResponsive:s,dvDivContainer:l,dianomiClickMacro:e.clickMacro,unitCount:nn++},(d=document.createElement("script")).src="https://".concat(e.host,"/js/contextfeed/videofeed.js?v=").concat(tn),d.id="dianomi_video_script",d.type="text/javascript",d.setAttribute("dianomi-variable-name",c),r.appendChild(d),window.addEventListener("message",(function(e){var t;"dianomi-parent-resize"===(null===(t=e.data)||void 0===t?void 0:t.type)&&E("resize")})),[2]}))})),function(e){return K.apply(this,arguments)}),smartad:function(){var r=$t((function(r){var i,a,l,y,b,w,E,I,S,C,L,T,D,N,P,V,R,k,M,U,j,F,H,G,W=arguments;return Zt(this,(function(B){switch(B.label){case 0:return i=W.length>1&&void 0!==W[1]?W[1]:v,a=W.length>2&&void 0!==W[2]&&W[2],l=W.length>3&&void 0!==W[3]&&W[3],r.inline?(y="https://".concat(e.host,"/smartads.epl?id=").concat(encodeURIComponent(r.id),"&callback=callback").concat(encodeURIComponent(r.id),"&return_as=callback%20function&returnAs=callback%20function"),(b=document.createElement("script")).setAttribute("src",y),window["callback".concat(r.id)]=function(e){var t="SMART HTML :".concat(e),n=document.getElementById("test");n&&(n.innerHTML=t)},(w=document.createElement("div")).classList.add("dianomiContent"),w.style.display="block",w.setAttribute("id","test"),i.appendChild(w),document.body.appendChild(b),[3,9]):[3,1];case 1:if(E=document.createElement("iframe"),I=r.numAds,S=r.numAdsRes)for(var z in C=0,S)L=Number(z),u>=L&&L>C&&(C=L,I=S[z]);if(T=_(r,nn++,n),D={dianomiContextHost:e.host,numAds:I,cf:g,tcfPermissions:o,server_can_serve_ads:(null==o?void 0:o.can_serve_ads())||null,server_can_cookie:(null==o?void 0:o.can_cookie())||null,data:n,dianomiContextAffiliate:e.affiliate,dianomiPageUrl:en,unitCount:nn,context_element:t,unitId:T,dianomiClickMacro:e.clickMacro,isWaterfall:l,responsiveHeight:r.responsiveHeight,darkmodeOverride:e.darkmodeOverride,pageDomain:e.pageDomain},N=function(e,t){var n=t.numAds,r=t.cf,i=t.data,s=t.tcfPermissions,o=t.server_can_serve_ads,a=t.server_can_cookie,c=t.darkmodeOverride,l=t.responsiveHeight,u=t.isWaterfall,d=t.unitId,p=t.dianomiPageUrl,h=t.dianomiClickMacro,f=t.dianomiContextAffiliate,m=t.pageDomain,v="https://".concat(t.dianomiContextHost,"/smartads.epl");if(v+=O("id",e.id,!0),n&&(v+=O("numAds",n)),e.shuffle&&"0"===e.shuffle&&(v+="&shuffle=0"),e.start&&(v+="&start=".concat(e.start)),e.seed&&(v+="&seed=".concat(Number(e.seed))),r&&(v+=O("cf",r)),"2.0"==i.partner_tcf_status||i["dianomi-tcf"])if(s){v+="&gdpr_consent=".concat(s.gdpr_consent());var g=s.gdpr();v+="&gdpr=".concat(g),v+="&canServeAds=".concat(s.can_serve_ads(),"&canCookie=").concat(s.can_cookie())}else v+="&canServeAds=".concat(o,"&canCookie=").concat(a);return i.partner_tcf_status&&(v+="&partner_tcf_status=".concat(i.partner_tcf_status,"&partnerTcfStatus=").concat(i.partner_tcf_status)),i.uspString&&(v+=O("uspString",i.uspString)),f&&(v+="&affiliate=".concat(f)),h&&(v+=O("clickMacro",h)),p&&(v+=O("url",p)),e.initId&&(v+="&initId=".concat(e.initId)),d&&(v+="&unitId=".concat(d)),e.closeIfEmpty&&(v+="&closeIfEmpty=".concat(e.closeIfEmpty)),u&&(v+="&isWaterfall=true"),l&&(v+="&responsiveHeight=true"),m&&(v+=O("pageDomain",m)),c&&(v+="&darkmodeOverride=".concat(c)),v}(r,D),P=x(E,r,l),r.id&&(P.id=r.id),P.setAttribute("data-dianomi-unit-id",T),r.order&&(P.style.order=r.order),P.setAttribute("title","dianomi SmartAd Content ".concat(r.id,"-").concat(nn)),P.classList.add("smartad_iframe"),!n.identity_values)return[3,7];(V=new FormData).append("postCall","true"),V.append("eids",JSON.stringify(n.identity_values)),B.label=2;case 2:return B.trys.push([2,5,,6]),[4,fetch(N,{credentials:"include",method:"POST",body:V})];case 3:return[4,B.sent().text()];case 4:return k=B.sent(),M=!1,U=function(){var e,t;M||(M=!0,e=k,null==(t=P.contentDocument)||t.open().write(e),null==t||t.close())},"complete"!==(null===(R=P.contentDocument)||void 0===R?void 0:R.readyState)?P.onload=function(){U()}:U(),[3,6];case 5:return j=B.sent(),console.log("Unable to retrieve Smartad",j),A(P,r,N),[3,6];case 6:return[3,8];case 7:A(P,r,N),B.label=8;case 8:F=!1,r.lazy&&r.lazy===s.LAZY_LOADING_ENABLED&&(c=!0,F=!0),a&&P.classList.add("dianomi-native-iframe"),a||function(e,t,n){var r=window.parent.innerWidth,i=f();p(e,t,i,!1,n),h(e,t,i),d(e,t,i),m((function(){window.parent.innerWidth!==r&&(r=window.parent.innerWidth,i=f(),t.responsiveHeight||d(e,t,i),p(e,t,i,!1,n),h(e,t,i))}))}(P,r,l),dn(P,r),r.sticky===s.STICKY_AD?((G=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=document.createElement("div");i.classList.add("dianomi-sticky-div"),i.style.position="fixed",i.style.bottom=null!==(n=t.stickyOffsetBottom)&&void 0!==n?n:"0",i.style.left="0",i.style.width="100%",i.style.zIndex="9999999999";var s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=document.createElement("div");r.style.position="absolute",r.style.right="16px",r.style.bottom="0",r.style.height="auto";var i=document.createElement("a");i.href="https://".concat(e,"/whatsthis.pl?id=").concat(t.id),i.target="_blank",i.rel="nofollow";var s=document.createElement("img");if(s.style.height="auto",s.style.width="30px",s.src="https://".concat(e,"/img/dianomi/dianomi-ad-tag-Grey.png"),i.append(s),r.append(i),n){var o=document.createElement("a");o.href="https://".concat(e,"/legal/privacy.epl"),o.target="_blank",o.style.marginLeft="5px";var a=document.createElement("img");a.src="https://".concat(e,"/img/YAC_Icon.png"),a.alt="ad choices logo",a.style.height="12px",a.style.width="12px",o.append(a),r.append(o)}return r}(e,t,r);i.appendChild(s);var o=function(e,t,n){var r=document.createElement("div");r.style.position="absolute",r.style.right="12px",r.style.top="-12px",r.style.width="30px",r.style.height="auto",r.style.cursor="pointer";var i=document.createElement("img");return i.id="sticky-dianomi-close",i.loading="eager",i.style.height="auto",i.style.width="100%",i.src="https://".concat(t,"/img/dianomi/dianomi-ad-tag-X2.png"),i.onclick=function(){var r="https://".concat(t,"/cgi-bin/pixeltrack.pl?action=close&id=").concat(n.id,"&href=").concat(encodeURIComponent(window.location.href));console.log(window.location);var i=new XMLHttpRequest;i.open("GET",r,!0),i.send(),e.remove()},r.append(i),r}(i,e,t);return i.appendChild(o),i}(e.host,r,null==n||null===(H=n.user)||void 0===H?void 0:H.adchoices)).appendChild(E),(window.top||window).document.body.appendChild(G)):i.appendChild(P),F&&vn(P,r.lazyRootMargin,r.lazyRootElement),a&&function(e,t){window.addEventListener("message",(function(n){var r,i,s=n.data;"dianomi-native-ad"===s.type&&(s.responsive?(null===(r=e.contentWindow)||void 0===r||r.postMessage({type:"dianomi-native-responsive",responsive:!0},"*"),e.style.width="100%"):(null===(i=e.contentWindow)||void 0===i||i.postMessage({type:"dianomi-native-responsive",responsive:!1},"*"),t.width&&(e.style.width=t.width)))}),!1)}(P,r),B.label=9;case 9:return[2]}}))}));return function(e){return r.apply(this,arguments)}}(),iframe:function(e){var t=document.createElement("iframe");e.src&&(t.setAttribute("data-src",e.src),t.setAttribute("src",e.src)),t.setAttribute("title","dianomi iframe Content"),d(t,e,u);var n=window.innerWidth;m((function(){window.parent.innerWidth!==n&&(n=window.innerWidth,d(t,e,u))})),e.width&&(t.style.width=e.width),e.scrolling&&(t.style.overflow=e.scrolling),e.border&&(t.style.border=e.border),v.appendChild(t)},recirc:function(t){var r=document.createElement("iframe"),i=_(t,nn++,n);r.setAttribute("data-dianomi-unit-id",i);var o="https://".concat(e.host,"/recirculation.epl?id=").concat(t.id,"&unitId=").concat(i);t.id&&(r.id=t.id),t.start&&(o+="&start=".concat(t.start)),t.seed&&(o+="&seed=".concat(Number(t.seed))),g&&(o+="&cf=".concat(encodeURIComponent(g))),en&&(o+="&url=".concat(encodeURIComponent(en)));var a=!1;t.lazy&&t.lazy===s.LAZY_LOADING_ENABLED?(c=!0,a=!0,r.className="lazy",r.setAttribute("data-src",o),r.style.minHeight="1px;"):r.setAttribute("src",o);var l="100%";t.width&&(l=t.width),r.style.width=l,r.setAttribute("title","dianomi Recirculation Content"),h(r,t,u),d(r,t,u),p(r,t,u);var f=window.innerWidth;m((function(){window.parent.innerWidth!==f&&(f=window.parent.innerWidth,h(r,t,u),d(r,t,u),p(r,t,u))})),t.minWidth&&(r.style.minWidth=t.minWidth),r.style.border="none",r.style.overflow="hidden",dn(r,t),v.appendChild(r),a&&vn(r,t.lazyRootMargin,t.lazyRootElement)},googleTag:function(e){var t;(t=document.createElement("script")).async=!0,t.src="https://www.googletagservices.com/tag/js/gpt.js",document.head.appendChild(t);var n=document.createElement("div"),r=document.createElement("script"),i=document.createElement("script"),o="";e.tagID&&(n.id=e.tagID),e.padding&&(n.style.padding=e.padding),e.align&&(n.style.textAlign=e.align),e.minWidth&&(n.style.minWidth=e.minWidth),p(n,e,u),h(n,e,u),n.className="googleAdFrame",r.type="text/javascript",e.lazy&&e.lazy===s.LAZY_LOADING_ENABLED&&(o="googletag.pubads().enableLazyLoad({fetchMarginPercent: 100,renderMarginPercent: 80,mobileScaling: 1.5}); ",n.style.minHeight="1px"),r.text=" window.googletag = window.googletag || {cmd: []}; googletag.cmd.push(function() {googletag.defineSlot('".concat(e.slot,"', [").concat(e.sizes,"], '").concat(e.tagID,"').addService(googletag.pubads()); ").concat(o," googletag.enableServices(); });"),i.type="text/javascript",i.text=" googletag.cmd.push(function() { googletag.display('".concat(e.tagID,"');});"),document.head.appendChild(r),v.appendChild(n),n.appendChild(i)}},w={},n.args&&(w=n.args),y(w),I=window.parent.location.hostname,T=n.user.country_code,N=D(n.units),P=N.units,N.responsiveHeight&&window.addEventListener("message",(function(e){if("string"==typeof e.data&&e.origin.includes("dianomi.com")){var t=e.data.split("-");if(/\d{1,4}-\d{1,6}/.test(e.data)){var n=t[0],r=t[1];if(Number(r))for(var i=document.querySelectorAll("[data-dianomi-unit-id^=dianomi-".concat(r,"]")),s=0;s<i.length;s++)i[s].style.height="".concat(n,"px"),E("resize")}if(/\d{1,4}-([a-z])\w+-\d{1,6}-/.test(e.data))for(var o=document.querySelectorAll("IFRAME"),a=0;a<o.length;a++){var c=o[a],l=t[0];if(c.getAttribute("data-dianomi-unit-id")==="dianomi-".concat(t[2],"-").concat(t[3])){E("resize"),c.style.height="".concat(l,"px");break}}}else if(e.data&&"object"==typeof e.data&&"__dianomiResponsiveHeight"in e.data){var u=e.data.__dianomiResponsiveHeight,d=u.frameId,p=u.height;if(Number(d))for(var h=document.querySelectorAll("[data-dianomi-unit-id^=dianomi-".concat(d,"]")),f=0;f<h.length;f++)h[f].style.height="".concat(p,"px"),E("resize")}}),!1),c&&function(){for(var e=gn((function(){return mn()}),{threshold:1}),t=document.querySelectorAll(".dianomiLazy"),n=0;n<t.length;n++){var r=t[n];yn(r,e,!1),yn(r,e,!0)}}(),V=!0,R=!1,k=void 0,$.label=1;case 1:$.trys.push([1,15,16,17]),M=Object.entries(P)[Symbol.iterator](),$.label=2;case 2:return(V=(U=M.next()).done)?[3,14]:(q=U.value,Y=2,j=function(e){if(Array.isArray(e))return e}(q)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}}(q,Y)||function(e,t){if(e){if("string"==typeof e)return Bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Bt(e,t):void 0}}(q,Y)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),F=j[0],H=j[1],C("cfWaterfall",G=H)?(function(e){var t,n=e.units,r=e.closeIfEmpty,i=void 0===r?null:r,s=e.closeUnitIfEmpty,o=void 0===s?null:s,a=Math.floor(1e6*Math.random()),c=D(n).units,p=Object.keys(c);function h(){var e;return e=function(e){var t,n,r,s;return Zt(this,(function(h){switch(h.label){case 0:n="waterfall-".concat(a),h.label=1;case 1:return 0===e?((t=document.createElement("div")).id=n,v.append(t)):(t=document.getElementById(n))&&(t.innerHTML=""),r=p[e],void 0===(s=c[r])?[2]:[4,Jt(J(s,t))];case 2:return h.sent(),e++,[4];case 3:if(h.sent())return[2];if(e===p.length&&S(["smartad","video"],s)){if("1"===i)return s.args.height="0",d(t,s.args,u),E("resize"),[2];if("1"===o)return s.args.height="0",d(t,s.args,u),E("collapse",l),[2]}return[3,1];case 4:return[2]}}))},h=function(){return new zt(e.apply(this,arguments))},h.apply(this,arguments)}var f=function(e){return h.apply(this,arguments)}(0);window.addEventListener("message",(function(e){var t,n;"dianomi-waterfall"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(null==f||null===(n=f.next)||void 0===n||n.call(f,e.data.adServed))}),!1),null==f||null===(t=f.next)||void 0===t||t.call(f)}(G),[3,13]):C("native",G)?(W=n[F]||{},[4,Q(G.units,W,F.split("-")[1])]):[3,4]);case 3:return $.sent(),[3,13];case 4:if(C("passback",G)||!z(G,"domain",I)||!z(G,"country_code",T))return[3,13];switch(C("googleTag",G)||C("iframe",G)||!G.seed||(G.args=Xt(Kt({},G.args),{seed:G.seed})),G.type){case"smartad":return[3,5];case"recirc":return[3,7];case"video":return[3,8];case"googleTag":return[3,10];case"iframe":return[3,11]}return[3,12];case 5:return[4,b.smartad(G.args)];case 6:return $.sent(),[3,13];case 7:return b.recirc(G.args),[3,13];case 8:return[4,b.video(G.args)];case 9:return $.sent(),[3,13];case 10:return b.googleTag(G.args),[3,13];case 11:return b.iframe(G.args),[3,13];case 12:throw new Error("Dianomi: Unknown unit type ".concat(G.type,". Check the unit type in the YAML file. Must be one of the following: smartad, recirc, video, googleTag, iframe, cfWaterfall"));case 13:return V=!0,[3,2];case 14:return[3,17];case 15:return B=$.sent(),R=!0,k=B,[3,17];case 16:try{V||null==M.return||M.return()}finally{if(R)throw k}return[7];case 17:return(n.partner_tcf_status==s.PARTNER_TCF_STATUS||n["dianomi-tcf"])&&t.setAttribute("data-dianomi-context-loaded",s.CONTEXT_LOADED),[2]}var q,Y,K,X}))})),ln.apply(this,arguments)}function un(e,t,n){t.mobileDisplay&&n<480?e.style.display=t.mobileDisplay:e.style.display="block"}function dn(e,t){t.display?e.style.display=t.display:e.style.display="block"}function pn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.parent.postMessage({type:"dianomi-iframebuster",options:e})}function hn(e){return fn.apply(this,arguments)}function fn(){return fn=$t((function(e){var t,n,r,i,o,c,l,d,p,h,f,m,v;return Zt(this,(function(g){switch(g.label){case 0:return n=function(e,t){var n={},r=!0,i=!1,s=void 0;try{for(var o,c=Object.entries(t)[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=a(o.value,2),u=l[0],d=l[1],p="string"==typeof d,h=e.getAttribute(p?d:d.attribute);n[u]=p?h:I(h,d)}}catch(e){i=!0,s=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw s}}return n}(e,u),r=n.id,i=n.done,o=n.host,c=n.endpoint,l=n.cfTest,i===s.CONTEXT_LOADED?[2]:"string"!=typeof n.id?(console.log("Couldn't find data-dianomi-context-id",e),[2]):(function(e){var t,n=e.split(".")[0],r=new URLSearchParams(window.location.search);for(t in on){var i=r.get(t)||("dev"===n).toString();if("videoDebug"===t){var s=parseInt(i);on[t]=isNaN(s)?"dev"===n?sn:rn:s}}}(o),d="https://".concat(o,"/cgi-bin/").concat(c,"?id=").concat(r),"dev.dianomi.com"===o&&(d+="&test=".concat(Date.now())),l&&(d+="&dianomitest=".concat(l)),function(e){try{var t=decodeURIComponent(e);return"null"!==new URL(t).origin}catch(e){return!1}}(p=function(){var e,t=null===(e=document.querySelectorAll(".dianomi_context")[0])||void 0===e?void 0:e.getAttribute("data-referrer-url"),n=window.location!=window.parent.location?document.referrer||window.parent.location.href:document.location.href;return t||n}())&&(h=p.split("/")[2],d+="&h=".concat(encodeURIComponent(h),"&url=").concat(encodeURIComponent(p)),en=p),n.pageDomain&&(d+="&pageDomain=".concat(encodeURIComponent(n.pageDomain))),new URLSearchParams(window.location.search).get("debug")&&(d+="&debug=1"),[4,fetch(d,{credentials:"include"})]);case 1:return(f=g.sent()).ok?[4,f.json()]:[2];case 2:return m=g.sent(),-1!=document.location.hostname.indexOf("exedra.dianomi.com")&&(m.partner_tcf_status="0"),(null==m||null===(t=m.user)||void 0===t?void 0:t.tcfDebug)>0&&(on.tcfDebug=null==m||null===(v=m.user)||void 0===v?void 0:v.tcfDebug),Wt(o,{adId:r||(null==m?void 0:m.cfid),uniqueId:null==m?void 0:m.unique_id},"contextfeed"),[4,jt(n,e,m)];case 3:return g.sent(),e.setAttribute("data-dianomi-context-done",s.CONTEXT_LOADED),[2]}}))})),fn.apply(this,arguments)}function mn(){var e=document.querySelectorAll(".dianomi_context"),t=!0,n=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0)hn(i.value)}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}function vn(e,t,n){var r=gn((function(t){t.forEach((function(t){t.isIntersecting&&(function(e){var t=e.target;if("IFRAME"===t.tagName){var n=t.getAttribute("data-src")||"";n&&(t.src=n,t.classList.add("loaded"))}}(t),yn(e,r,!1),E("resize"))}))}),{threshold:0,rootMargin:"".concat(null!=t?t:s.LAZY_LOADING_ROOT_MARGIN,"px"),root:n?En(e,n):null});yn(e,r,!0)}function gn(e){return new IntersectionObserver(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{threshold:0})}function yn(e,t,n){n?t.observe(e):t.unobserve(e)}var bn,wn=function(e,t){return!!t&&("#"===e[0]?t.id.includes(e.substring(1)):t.className.includes(e.substring(1)))};function En(e,t){return"body"===(null==e?void 0:e.tagName.toLowerCase())&&window.top===window?null:"body"===(null==e?void 0:e.tagName.toLowerCase())?En(window.frameElement,t):wn(t,e)?e:e?En(e.parentElement,t):null}window.dianomiReloadContext=mn,bn=mn,(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?bn():document.addEventListener("DOMContentLoaded",(function(){bn()}))})();on/" title="¿Fue Bobi el perro más viejo del mundo? El título está bajo la lupa">
				¿Fue Bobi el perro más viejo del mundo? El título está bajo la lupa			</a>
		</h2>
				
			</div>

</article>
							</div><!-- end col--c-4 -->
													<div class="col--custom col--c-4 dp_zn0_cn2">
						
<article class="news news--box news--box-style-two news--video-sticky news--nophoto news--with-border-bottom post-type--video" 
	id="article-1548922"
	data-pc=""
			data-video-autostart="true"
		data-video-autoplay-muted="true"
		>
			<div class="news__media">

								<button class="cnnicon cnnicon--close"></button>
								<div class="news__mediaitem">
					<div style="border: 0px none;" class="cnnvideo responsive fave-wrapper" data-actual-vid-height=""><script>
							CNNESPANOL.getProximicData = function getProximicData() {
								var proximicValues = {},
									i;
								if (Array.isArray(window.proximicData)) {
									for (i = 0; i < window.proximicData.length; i++) {
										proximicValues[window.proximicData[i]] = "pconid";
									}
								}
								return proximicValues;
							};
							var FAVE = {
								settings: {
									mediaPlayer: "top",
									site: "cnn-espanol",
									ads: {
										ssai: {
											environment: "prod",
											prod: {
												clips: {
													profile: "vywzeUGdVg",
												},
												liveUnauth: {
													profile: "2VhRaN7PRN",
												}
											}
										}
									},
									prebid: {
										enabled: true
									},
									freewheel: {
										keyValuePairs: {
											guID: window.turner_getGuid,
											proximicData: CNNESPANOL.getProximicData,
											transactionID: window.turner_getTransactionId,
											}
									},
									server: {
										edition: "international"
									},
									conviva: {
										custom: {
											applicationName: "CNN-Web-Espanol"
										}}
								}
							};</script>
						<script type="text/javascript" src="//registry.api.cnn.io/bundles/fave/4.20.10/js"></script>
						<script type="text/javascript" src="https://cnnespanol.cnn.com/wp-content/themes/cnnespanol/static/libs/js/usertiming.js"></script><div id="fave-video1" class="first"></div>
					<script type="text/javascript">
						FAVE.player({
							configs: {
								adsection: "cnnespanol.cnn.com_homepage_t1",
								autostart: true,
								player: {
									autoplay: {
										muted: { enabled: true }
									}
								},
								markupId: "fave-video1",
								video: "spanish\/2024\/01\/15\/sol-nasa-planetas-redaccion-buenos-aires-tv.cnn",
								isLive: false,
								amazonA9: {
									enabled: true
								}
							},
							callbacks: {
								onContentComplete: function onContentComplete(containerId, playerId, videoId) {
									if ( typeof cnnespanolVideoPlaylist === "function" && "undefined" !== cnnespanolVideoPlaylist ) {
										cnnespanolVideoPlaylist(containerId, playerId);
									}
								},
								onContentBegin: function onContentBegin(containerId, playerId, videoId) {
									if ( typeof cnnespanolOnContentPlay === "function" && "undefined" !== cnnespanolOnContentPlay ) {
										cnnespanolOnContentPlay(containerId, playerId, videoId);
									}
								},
								onPlayerReady: function onPlayerReady(containerId, playerId, videoId) {
									if ( typeof cnnespanolVideoMuteUnmute === "function" && "undefined" !== cnnespanolVideoMuteUnmute ) {
										cnnespanolVideoMuteUnmute(containerId, playerId, videoId);
									}
								}
							}
						});
					</script>
			</div>				</div>
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/ciencia-y-espacio/" title="Ciencia y Espacio">
						Ciencia y Espacio							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/sol-nasa-planetas-redaccion-buenos-aires-tv/" title="Mira cómo brilla el Sol en los diferentes planetas del sistema solar">
				Mira cómo brilla el Sol en los diferentes planetas del sistema solar			</a>
		</h2>
				
			</div>

</article>

<article class="news news--box news--box-style-two  news--summary news--nophoto news--with-border-bottom post-type--post" 
	id="article-1549921"
	data-pc="8"
		>
			<div class="news__media">

			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/estados-unidos/" title="Noticias de EE.UU.">
						Noticias de EE.UU.							</a>
									</span>
								<span class="news__time news__time--red">
							22 mins			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/secuestro-nueve-personas-guerrero-orix/" title="Confirman el secuestro de nueve personas en Guerrero">
				Confirman el secuestro de nueve personas en Guerrero			</a>
		</h2>
				
			</div>

</article>

<article class="news news--box news--box-style-two  news--summary news--nophoto news--with-border-bottom post-type--post" 
	id="article-1549881"
	data-pc="9"
		>
			<div class="news__media">

			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/innovacion-2/tecnologia/" title="Tecnología">
						Tecnología							</a>
									</span>
								<span class="news__time news__time--red">
							39 mins			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/tencent-escanear-palma-mano-trax/" title="Tencent implementa pagos y accesos con la palma de la mano">
				Tencent implementa pagos y accesos con la palma de la mano			</a>
		</h2>
				
			</div>

</article>

<article class="news news--box news--box-style-two  news--summary news--nophoto news--with-border-bottom post-type--post" 
	id="article-1549594"
	data-pc="10"
		>
			<div class="news__media">

			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/tiempo/" title="Tiempo">
						Tiempo							</a>
									</span>
								<span class="news__time news__time--red">
							45 mins			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/explosion-artica-tormenta-invernal-sensacion-terminca-congelacion-nieve-trax/" title="Brutal tempestad en EE.UU. lleva frío récord y sensación térmica de -30°C">
				Brutal tempestad en EE.UU. lleva frío récord y sensación térmica de -30°C			</a>
		</h2>
				
			</div>

</article>
							<div class="banner banner300x250">
								
	<div class="wrap-ad">
		<div id="ad_rect_atf_01" class="ad"></div>
	</div>

							</div>
							
							
	<div class="banner banner300x100">
		<div id="ad_ns_atf_02" class="ad"></div>
	</div>
	
							
							</div><!-- end col--c-4 -->
						
			</div>
		</div>
	</div>
</div>
				<div class="ad--native">
					<div id="ad_nat_atf_01" class="cnn_adtag cnn_adtag--dfp"></div>
				</div>
			
		


	<div class="bg-white ovf-h dp_zn1">
		
						<div class="row dp_zn1_cn0">
					<div class="mod mod--white">

						<div class="mod__header">
							<h2 class="mod__title mod__title--bottom-line-center">
								<a href="https://cnnespanol.cnn.com/video/" title="CNN Espanol último videos">
									Videos del día								</a>
							</h2>
						</div>

						<div class="mod__content">
							<div class="col--custom col--c-14">
			
<article class="news news--box news--box-style-two  news--innerbox news--video news--video-destacado-full-width news--nophoto post-type--video" 
	id="article-1549095"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

							<div class="news__mediaitem">
					<div style="border: 0px none;" class="cnnvideo responsive fave-wrapper" data-actual-vid-height="">
						<div id="fave-video2" class="not-first"></div>
						<script type="text/javascript">
							FAVE.player({
								configs: {
									adsection: "cnnespanol.cnn.com_homepage_t1",
									autostart: false,
									player: {
										autoplay: {
											muted: { enabled: false }
										}
									},
									markupId: "fave-video2",
									video: "spanish\/2024\/01\/15\/imagenes-volcan-islandia-lava-casas-cafe-tv.cnn",
									isLive: false,
									amazonA9: {
										enabled: true
									}
								},
								callbacks: {
									onContentBegin: function onContentBegin(containerId, playerId, videoId) {
										if ( typeof cnnespanolOnContentPlay === "function" && "undefined" !== cnnespanolOnContentPlay ) {
											cnnespanolOnContentPlay(containerId, playerId, videoId);
										}
									}
								}
							});
						</script>
					</div>				</div>
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/volcanes/" title="Volcanes">
						Volcanes							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/imagenes-volcan-islandia-lava-casas-cafe-tv/" title="Un río de lava destruye casas en Islandia">
				Un río de lava destruye casas en Islandia			</a>
		</h2>
				
			</div>

</article>
							</div><!-- end .col--custom col--c-14 -->
						</div><!-- end .mod__content -->

					</div><!-- end .mod .mod--dark -->
				</div><!-- end .row -->
							<div class="row dp_zn1_cn1">
					<div class="mod mod--slider-style-two">
						<div class="mod__content swiper-slider" data-swiper="{slidesPerView:'4',spaceBetween:32, breakpoints: { 900: { slidesPerView: 3, spaceBetween: 32 } },pagination:{el:'.swiper-pagination',type:'bullets',clickable:true}}">
							<div class="cnne-swiper-container swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549563"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/donald-trump-discurso-victoria-desantis-haley/" title="Trump habla sobre sus competidores tras la victoria en los caucus de Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Escuha a Trump aplaudir inesperadamente a sus competidores en su discurso" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Escuha a Trump aplaudir inesperadamente a sus competidores en su discurso" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:13								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/donald-trump/" title="Donald Trump">
						Donald Trump							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/donald-trump-discurso-victoria-desantis-haley/" title="Trump habla sobre sus competidores tras la victoria en los caucus de Iowa">
				Trump habla sobre sus competidores tras la victoria en los caucus de Iowa			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549379"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/buffallo-bills-nieve-steelers-nfl-tobogan-deportes-tv-tiempo/" title="Así juegan los seguidores de los Buffalo Bills con la nieve">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Sequence-17B.00_04_37_06.Still053.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Sequence-17B.00_04_37_06.Still053.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Sequence-17B.00_04_37_06.Still053.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Sequence-17B.00_04_37_06.Still053.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:38								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/futbol-americano/" title="Fútbol Americano NFL">
						Fútbol Americano NFL							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/buffallo-bills-nieve-steelers-nfl-tobogan-deportes-tv-tiempo/" title="Así juegan los seguidores de los Buffalo Bills con la nieve">
				Así juegan los seguidores de los Buffalo Bills con la nieve			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549377"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/reyes-dinamarca-pub-historia-trax/" title="Así se conocieron los nuevos reyes de Dinamarca">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Así se conocieron los nuevos reyes de Dinamarca" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115162447-reina-maria-dinamarca-rey-federico-historia-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115162447-reina-maria-dinamarca-rey-federico-historia-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115162447-reina-maria-dinamarca-rey-federico-historia-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115162447-reina-maria-dinamarca-rey-federico-historia-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Así se conocieron los nuevos reyes de Dinamarca" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:35								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/europa/" title="Europa">
						Europa							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/reyes-dinamarca-pub-historia-trax/" title="Así se conocieron los nuevos reyes de Dinamarca">
				Así se conocieron los nuevos reyes de Dinamarca			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549143"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/bernardo-arevalo-discurso-plaza-constitucion-sot/" title="Así fue el discurso de Bernardo Arévalo en la plaza de la Constitución de Ciudad de Guatemala">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Así fue el discurso de Bernardo Arévalo en la plaza de la Constitución de Ciudad de Guatemala" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115105151-bernardo-arevalo-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115105151-bernardo-arevalo-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115105151-bernardo-arevalo-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115105151-bernardo-arevalo-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Así fue el discurso de Bernardo Arévalo en la plaza de la Constitución de Ciudad de Guatemala" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									2:51								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/centroamerica/guatemala/" title="Guatemala">
						Guatemala							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/bernardo-arevalo-discurso-plaza-constitucion-sot/" title="Así fue el discurso de Bernardo Arévalo en la plaza de la Constitución de Ciudad de Guatemala">
				Así fue el discurso de Bernardo Arévalo en la plaza de la Constitución de Ciudad de Guatemala			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549219"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/ron-desantis-iowa-caucus-tv/" title="DeSantis responde sobre si abandonará tras los caucus asambleas partidistas de Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="DeSantis responde sobre si abandonará tras los caucus asambleas partidistas de Iowa" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114100250-ron-desantis-sotu-0114-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114100250-ron-desantis-sotu-0114-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114100250-ron-desantis-sotu-0114-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114100250-ron-desantis-sotu-0114-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="DeSantis responde sobre si abandonará tras los caucus asambleas partidistas de Iowa" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									2:04								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/elecciones-estados-unidos/" title="Elecciones en Estados Unidos">
						Elecciones en Estados Unidos							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/ron-desantis-iowa-caucus-tv/" title="DeSantis responde sobre si abandonará tras los caucus asambleas partidistas de Iowa">
				DeSantis responde sobre si abandonará tras los caucus asambleas partidistas de Iowa			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549319"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/harrison-ford-mujer-premio-emocionado-critics-choice-orix/" title="Un emocionado Harrison Ford reconoció el apoyo de su esposa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Un emocionado Harrison Ford reconoció el apoyo de su esposa" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115155250-harrison-ford-mujer-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115155250-harrison-ford-mujer-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115155250-harrison-ford-mujer-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115155250-harrison-ford-mujer-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Un emocionado Harrison Ford reconoció el apoyo de su esposa" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:23								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/cine/" title="Cine">
						Cine							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/harrison-ford-mujer-premio-emocionado-critics-choice-orix/" title="Un emocionado Harrison Ford reconoció el apoyo de su esposa">
				Un emocionado Harrison Ford reconoció el apoyo de su esposa			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1549188"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/nikki-haley-trump-republicana-eeuu-trax/" title="Haley responde a Trump sobre si es lo suficientemente dura">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Haley responde a Trump sobre si es lo suficientemente dura" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115124509-nikki-haley-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115124509-nikki-haley-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115124509-nikki-haley-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115124509-nikki-haley-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Haley responde a Trump sobre si es lo suficientemente dura" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:40								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/elecciones-estados-unidos/" title="Elecciones en Estados Unidos">
						Elecciones en Estados Unidos							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/nikki-haley-trump-republicana-eeuu-trax/" title="Haley responde a Trump sobre si es lo suficientemente dura">
				Haley responde a Trump sobre si es lo suficientemente dura			</a>
		</h2>
				
			</div>

</article>
				</div>
							<div class="swiper-slide">
			
<article class="news news--box news--box-style-two  news--video news--into-slider news--box post-type--video" 
	id="article-1548595"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/eeuu-yemen-huties-respuesta-mirador-mundial-tv/" title="Grupos hutíes advierten a EE.UU. y al Reino Unido tras sus ataques">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Grupos hutíes advierten a EE.UU. y al Reino Unido tras sus ataques" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113213339-mir-huties-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113213339-mir-huties-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113213339-mir-huties-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113213339-mir-huties-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Grupos hutíes advierten a EE.UU. y al Reino Unido tras sus ataques" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									2:38								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/medio-oriente/" title="Medio Oriente">
						Medio Oriente							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/eeuu-yemen-huties-respuesta-mirador-mundial-tv/" title="Grupos hutíes advierten a EE.UU. y al Reino Unido tras sus ataques">
				Grupos hutíes advierten a EE.UU. y al Reino Unido tras sus ataques			</a>
		</h2>
				
			</div>

</article>
				</div>
											</div><!-- end swiper-wrapper -->
								<div class="swiper-actions">
									<div class="swiper-button-prev"></div>
									<div class="swiper-pagination"></div>
									<div class="swiper-button-next"></div>
								</div>
							</div><!-- end swiper-container -->
						</div><!-- end .mod__content .swiper-slider -->
					</div><!-- end .mod .mod--slider-style-two -->
				</div><!-- end .row -->
				</div>

	<!-- start HP four-posts module -->
	<div class="row dp_zn2"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-left">
					
											<a href="https://cnnespanol.cnn.com/tag/videos-digitales/" title="Videos destacados ▶️">
							Videos destacados ▶️						</a>
									</h2>
							</div>

			<div class="mod__content">
				<div class="row--inner">

												<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1549269"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/nasa-marte-tour-virtual-redaccion-buenos-aires-tv/" title="La NASA comparte un recorrido virtual 360° por un antiguo río de Marte">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="La NASA comparte un recorrido virtual 360° por un antiguo río de Marte" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/230907114358-02-nasa-mars-moxie-perseverance-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/230907114358-02-nasa-mars-moxie-perseverance-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/230907114358-02-nasa-mars-moxie-perseverance-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/230907114358-02-nasa-mars-moxie-perseverance-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="La NASA comparte un recorrido virtual 360° por un antiguo río de Marte" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:26								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/ciencia-y-espacio/" title="Ciencia y Espacio">
						Ciencia y Espacio							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/nasa-marte-tour-virtual-redaccion-buenos-aires-tv/" title="La NASA comparte un recorrido virtual 360° por un antiguo río de Marte">
				La NASA comparte un recorrido virtual 360° por un antiguo río de Marte			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1548922"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/sol-nasa-planetas-redaccion-buenos-aires-tv/" title="Mira cómo brilla el Sol en los diferentes planetas del sistema solar">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Mira cómo brilla el Sol en los diferentes planetas del sistema solar" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112152431-rba-nasa-sol-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112152431-rba-nasa-sol-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112152431-rba-nasa-sol-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112152431-rba-nasa-sol-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Mira cómo brilla el Sol en los diferentes planetas del sistema solar" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:55								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/ciencia-y-espacio/" title="Ciencia y Espacio">
						Ciencia y Espacio							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/sol-nasa-planetas-redaccion-buenos-aires-tv/" title="Mira cómo brilla el Sol en los diferentes planetas del sistema solar">
				Mira cómo brilla el Sol en los diferentes planetas del sistema solar			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1548617"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/rescate-nina-estanque-congelado-agua-vermont-trax/" title="Policías salvan a una niña de un estanque helado">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Policías salvan a una niña de un estanque helado" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113211604-rescate-nia-estanque-helado-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113211604-rescate-nia-estanque-helado-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113211604-rescate-nia-estanque-helado-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113211604-rescate-nia-estanque-helado-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Policías salvan a una niña de un estanque helado" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:12								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/estados-unidos/" title="Noticias de EE.UU.">
						Noticias de EE.UU.							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/rescate-nina-estanque-congelado-agua-vermont-trax/" title="Policías salvan a una niña de un estanque helado">
				Policías salvan a una niña de un estanque helado			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1548472"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/colombia-derrumbe-muertos-desaparecidos-quibdo-medellin-perspectivas-mexico-tv/" title="Derrumbe deja desparecidos y muertos en Colombia, autoridades buscan sobrevivientes">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Derrumbe deja desparecidos y muertos en Colombia, autoridades buscan sobrevivientes" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113113046-colombia-derrumbe-muertos-desaparecidos-quibdo-medellin-perspectivas-mexico-tv-00000000-full-169.png?w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113113046-colombia-derrumbe-muertos-desaparecidos-quibdo-medellin-perspectivas-mexico-tv-00000000-full-169.png?w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113113046-colombia-derrumbe-muertos-desaparecidos-quibdo-medellin-perspectivas-mexico-tv-00000000-full-169.png?w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240113113046-colombia-derrumbe-muertos-desaparecidos-quibdo-medellin-perspectivas-mexico-tv-00000000-full-169.png?w=300&amp;h=170&amp;crop=1" alt="Derrumbe deja desparecidos y muertos en Colombia, autoridades buscan sobrevivientes" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:24								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/zona-andina/colombia/" title="Colombia">
						Colombia							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/colombia-derrumbe-muertos-desaparecidos-quibdo-medellin-perspectivas-mexico-tv/" title="Derrumbe deja desparecidos y muertos en Colombia, autoridades buscan sobrevivientes">
				Derrumbe deja desparecidos y muertos en Colombia, autoridades buscan sobrevivientes			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
											</div>
			</div>
		</div>
	</div>
	<!-- end HP four-posts module -->
							<div class="row wrap-outbrain">
 								<div class="OUTBRAIN" data-src="//cnnespanol.cnn.com" data-widget-id="AR_20" data-ob-template="cnnenespanol" ></div>
							</div>
							<div class="row dp_zn4"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-center">
					
											<a href="https://cnnespanol.cnn.com/seccion/estados-unidos/" title="Estados Unidos">
							Estados Unidos						</a>
									</h2>
			</div>

			<div class="mod__content">

											<div class="col--custom col--c-4 dp_zn4_cn0">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1549909"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/legisladores-eeuu-acuerdo-us-78-000-millones-ampliar-credito-fiscal-hijos-trax/" title="Presentan un ambicioso acuerdo para ampliar el crédito tributario por hijos">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Acuerdo-legisladores-acuerdo-fiscal.webp?w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Acuerdo-legisladores-acuerdo-fiscal.webp?w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Acuerdo-legisladores-acuerdo-fiscal.webp?w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Acuerdo-legisladores-acuerdo-fiscal.webp?w=1024" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/estados-unidos/" title="Noticias de EE.UU.">
						Noticias de EE.UU.							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/legisladores-eeuu-acuerdo-us-78-000-millones-ampliar-credito-fiscal-hijos-trax/" title="Presentan un ambicioso acuerdo para ampliar el crédito tributario por hijos">
				Presentan un ambicioso acuerdo para ampliar el crédito tributario por hijos			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549602"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/conclusiones-caucus-republicanos-iowa-trax/" title="Seis conclusiones de los caucus republicanos en Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Escuha a Trump aplaudir inesperadamente a sus competidores en su discurso" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115233101-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Escuha a Trump aplaudir inesperadamente a sus competidores en su discurso" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/donald-trump/" title="Donald Trump">
						Donald Trump							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/conclusiones-caucus-republicanos-iowa-trax/" title="Seis conclusiones de los caucus republicanos en Iowa">
				Seis conclusiones de los caucus republicanos en Iowa			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549580"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/biden-elecciones-iowa-siempre-ibamos-a-ser-tu-y-yo-victoria-trump-trax/" title="El mensaje de Joe Biden a Donald Trump tras su contudente victoria">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="El presidente de Estados Unidos, Joe Biden, habla durante un evento de campaña en el Montgomery County Community College el 5 de enero de 2024 en Blue Bell, Pensilvania. (Drew Angerer/Getty Images)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/joe-biden.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/joe-biden.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/joe-biden.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/joe-biden.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="El presidente de Estados Unidos, Joe Biden, habla durante un evento de campaña en el Montgomery County Community College el 5 de enero de 2024 en Blue Bell, Pensilvania. (Drew Angerer/Getty Images)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/elecciones-estados-unidos/" title="Elecciones en Estados Unidos">
						Elecciones en Estados Unidos							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/biden-elecciones-iowa-siempre-ibamos-a-ser-tu-y-yo-victoria-trump-trax/" title="El mensaje de Joe Biden a Donald Trump tras su contudente victoria">
				El mensaje de Joe Biden a Donald Trump tras su contudente victoria			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549581"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/aspirante-republicano-vivek-ramaswamy-suspende-campana-presidencial-anuncia-apoyo-a-trump-trax/" title="El aspirante republicano Vivek Ramaswamy suspende su campaña presidencial">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Vivek-Ramaswamy" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Vivek-Ramaswamy-e1705385959912.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Vivek-Ramaswamy-e1705385959912.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Vivek-Ramaswamy-e1705385959912.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Vivek-Ramaswamy-e1705385959912.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Vivek-Ramaswamy" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/politica/" title="Política">
						Política							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/aspirante-republicano-vivek-ramaswamy-suspende-campana-presidencial-anuncia-apoyo-a-trump-trax/" title="El aspirante republicano Vivek Ramaswamy suspende su campaña presidencial">
				El aspirante republicano Vivek Ramaswamy suspende su campaña presidencial			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 left -->
													<div class="col--custom col--c-6 dp_zn4_cn1">
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--video" 
	id="article-1549512"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/trump-gana-iowa-rivales-haley-desantis-resultados-panorama-mundial-tv/" title="CNN proyecta que Trump ganará asambleas partidistas republicanas de Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Trump gana primarias de Iowa. DeSantis y Haley se disputan el segundo lugar" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173903-08-iowa-caucuses-011524-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173903-08-iowa-caucuses-011524-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173903-08-iowa-caucuses-011524-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173903-08-iowa-caucuses-011524-trump-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="Trump gana primarias de Iowa. DeSantis y Haley se disputan el segundo lugar" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:28								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/donald-trump/" title="Donald Trump">
						Donald Trump							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/trump-gana-iowa-rivales-haley-desantis-resultados-panorama-mundial-tv/" title="CNN proyecta que Trump ganará asambleas partidistas republicanas de Iowa">
				CNN proyecta que Trump ganará asambleas partidistas republicanas de Iowa			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--post" 
	id="article-1549477"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/trump-asambleas-partidistas-republicanas-caucus-iowa-trax/" title="Trump ganará el caucus republicano de Iowa, proyecta CNN">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="trump iowa" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/trump-iowa.jpeg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/trump-iowa.jpeg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/trump-iowa.jpeg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/trump-iowa.jpeg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="trump iowa" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/donald-trump/" title="Donald Trump">
						Donald Trump							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/trump-asambleas-partidistas-republicanas-caucus-iowa-trax/" title="Trump ganará el caucus republicano de Iowa, proyecta CNN">
				Trump ganará el caucus republicano de Iowa, proyecta CNN			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-6 middle -->
													<div class="col--custom col--c-4 dp_zn4_cn2">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1549388"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/migrantes-buses-texas-frio-extremo-chicago-trax/" title="Texas se niega a detener envíos de migrantes al frío extremo de Chicago">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115082503-01-chicago-migrant-crisis-january-2024.webp?w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115082503-01-chicago-migrant-crisis-january-2024.webp?w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115082503-01-chicago-migrant-crisis-january-2024.webp?w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115082503-01-chicago-migrant-crisis-january-2024.webp?w=1024" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/inmigracion/" title="Inmigración">
						Inmigración							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/migrantes-buses-texas-frio-extremo-chicago-trax/" title="Texas se niega a detener envíos de migrantes al frío extremo de Chicago">
				Texas se niega a detener envíos de migrantes al frío extremo de Chicago			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1548529"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/tres-migrantes-se-ahogaron-eagle-pass-texas-paso-patrulla-fronteriza-trax/" title="Departamento Militar de Texas niega que su personal haya visto ahogamiento">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Un agente hace guardia en las orillas del río Grande en Shelby Park el 12 de enero de 2024 en Eagle Pass, Texas. (Foto de Brandon Bell/Getty Images)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rio-grande.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rio-grande.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rio-grande.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rio-grande.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Un agente hace guardia en las orillas del río Grande en Shelby Park el 12 de enero de 2024 en Eagle Pass, Texas. (Foto de Brandon Bell/Getty Images)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/inmigracion/inmigrantes-indocumentados/" title="Inmigrantes indocumentados">
						Inmigrantes indocumentados							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/tres-migrantes-se-ahogaron-eagle-pass-texas-paso-patrulla-fronteriza-trax/" title="Departamento Militar de Texas niega que su personal haya visto ahogamiento">
				Departamento Militar de Texas niega que su personal haya visto ahogamiento			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549242"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/cinco-cosas-asambleas-partidistas-republicanas-iowa-trax/" title="5 cosas a tener en cuenta en las asambleas partidistas republicanas de Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936246438.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936246438.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936246438.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936246438.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/elecciones-estados-unidos/" title="Elecciones en Estados Unidos">
						Elecciones en Estados Unidos							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/cinco-cosas-asambleas-partidistas-republicanas-iowa-trax/" title="5 cosas a tener en cuenta en las asambleas partidistas republicanas de Iowa">
				5 cosas a tener en cuenta en las asambleas partidistas republicanas de Iowa			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549255"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/elecciones-caucus-iowa-republicanos-dusa-tv/" title="Arrancan las primarias en Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Arrancan las primarias en Iowa" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115130713-primaris-iowa-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115130713-primaris-iowa-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115130713-primaris-iowa-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115130713-primaris-iowa-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Arrancan las primarias en Iowa" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									2:41								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/estados-unidos/" title="Noticias de EE.UU.">
						Noticias de EE.UU.							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/elecciones-caucus-iowa-republicanos-dusa-tv/" title="Arrancan las primarias en Iowa">
				Arrancan las primarias en Iowa			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 right -->
						
			</div>
		</div>
	</div>
	<div class="row dp_zn5"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-center">
					
											<a href="https://cnnespanol.cnn.com/seccion/latinoamerica/" title="Latinoamérica">
							Latinoamérica						</a>
									</h2>
			</div>

			<div class="mod__content">

											<div class="col--custom col--c-4 dp_zn5_cn0">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--video" 
	id="article-1549940"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/maduro-milei-controversia-adorni-sot/" title="Argentina: Las declaraciones del dictador Maduro son solo eso">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Argentina: Las declaraciones del dictador Maduro son solo eso" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240105214255-milei-full-169_241684.jpg?quality=100&amp;strip=info&amp;w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240105214255-milei-full-169_241684.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240105214255-milei-full-169_241684.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240105214255-milei-full-169_241684.jpg?quality=100&amp;strip=info&amp;w=1024" alt="Argentina: Las declaraciones del dictador Maduro son solo eso" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:09								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/cono-sur/argentina/" title="Argentina">
						Argentina							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/maduro-milei-controversia-adorni-sot/" title="Argentina: Las declaraciones del dictador Maduro son solo eso">
				Argentina: Las declaraciones del dictador Maduro son solo eso			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549892"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/amlo-ron-desantis-donald-trump-partido-republicano-tv/" title="AMLO asegura que el discurso antimigrantes de Trump es para ganar votos">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="AMLO asegura que el discurso antimigrantes de Trump es para ganar votos" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116123347-amlo-ron-desantis-donald-trump-partido-republicano-tv-00000213-full-169.png?w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116123347-amlo-ron-desantis-donald-trump-partido-republicano-tv-00000213-full-169.png?w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116123347-amlo-ron-desantis-donald-trump-partido-republicano-tv-00000213-full-169.png?w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116123347-amlo-ron-desantis-donald-trump-partido-republicano-tv-00000213-full-169.png?w=80&amp;h=80&amp;crop=1" alt="AMLO asegura que el discurso antimigrantes de Trump es para ganar votos" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:40								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/mexico/" title="México">
						México							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/amlo-ron-desantis-donald-trump-partido-republicano-tv/" title="AMLO asegura que el discurso antimigrantes de Trump es para ganar votos">
				AMLO asegura que el discurso antimigrantes de Trump es para ganar votos			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549894"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/amlo-frontera-estados-unidos-mexico-donald-trump-tv/" title="AMLO: &quot;No se pueden cerrar las fronteras entre México y EE.UU.&quot;">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="AMLO: &quot;No se pueden cerrar las fronteras entre México y EE.UU.&quot;" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116122738-amlo-frontera-estados-unidos-mexico-donald-trump-tv-00000127-full-169.png?w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116122738-amlo-frontera-estados-unidos-mexico-donald-trump-tv-00000127-full-169.png?w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116122738-amlo-frontera-estados-unidos-mexico-donald-trump-tv-00000127-full-169.png?w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116122738-amlo-frontera-estados-unidos-mexico-donald-trump-tv-00000127-full-169.png?w=80&amp;h=80&amp;crop=1" alt="AMLO: &quot;No se pueden cerrar las fronteras entre México y EE.UU.&quot;" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:41								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/mexico/" title="México">
						México							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/amlo-frontera-estados-unidos-mexico-donald-trump-tv/" title="AMLO: &quot;No se pueden cerrar las fronteras entre México y EE.UU.&quot;">
				AMLO: &quot;No se pueden cerrar las fronteras entre México y EE.UU.&quot;			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549858"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/carlos-mesa-bolivia-onu-prorroga-mandato-poder-judicial-orix/" title="Carlos Mesa pide a la ONU pide a la ONU pronunciarse sobre Poder Judicial">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="v" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1229243711-e1705423727877.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1229243711-e1705423727877.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1229243711-e1705423727877.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1229243711-e1705423727877.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="v" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/zona-andina/bolivia/" title="Bolivia">
						Bolivia							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/carlos-mesa-bolivia-onu-prorroga-mandato-poder-judicial-orix/" title="Carlos Mesa pide a la ONU pide a la ONU pronunciarse sobre Poder Judicial">
				Carlos Mesa pide a la ONU pide a la ONU pronunciarse sobre Poder Judicial			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 left -->
													<div class="col--custom col--c-6 dp_zn5_cn1">
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--post" 
	id="article-1549544"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/maduro-anuncia-aumento-ingreso-minimo-integral-orix/" title="Nicolás Maduro anuncia aumento del ingreso mínimo integral">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928384622-e1705375618870.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928384622-e1705375618870.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928384622-e1705375618870.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928384622-e1705375618870.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/zona-andina/venezuela/" title="Venezuela">
						Venezuela							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/maduro-anuncia-aumento-ingreso-minimo-integral-orix/" title="Nicolás Maduro anuncia aumento del ingreso mínimo integral">
				Nicolás Maduro anuncia aumento del ingreso mínimo integral			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--post" 
	id="article-1549530"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/fuga-presos-carcel-esmeraldas-ecuador-orix/" title="Más de 40 reos se fugaron de la cárcel Esmeraldas 2 en Ecuador">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1923304477-e1705373716422.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1923304477-e1705373716422.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1923304477-e1705373716422.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1923304477-e1705373716422.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/zona-andina/ecuador/" title="Ecuador">
						Ecuador							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/fuga-presos-carcel-esmeraldas-ecuador-orix/" title="Más de 40 reos se fugaron de la cárcel Esmeraldas 2 en Ecuador">
				Más de 40 reos se fugaron de la cárcel Esmeraldas 2 en Ecuador			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-6 middle -->
													<div class="col--custom col--c-4 dp_zn5_cn2">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--video" 
	id="article-1549497"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/guatemala-bernardo-arevalo-analisis-nuevo-presidente-aristegui-tv/" title="La realidad política en Guatemala: Arévalo y su camino al poder">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="La realidad política en Guatemala: Arévalo y su camino al poder" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173932-bernardo-arevalo-2-full-169.jpg?quality=100&amp;strip=info&amp;w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173932-bernardo-arevalo-2-full-169.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173932-bernardo-arevalo-2-full-169.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173932-bernardo-arevalo-2-full-169.jpg?quality=100&amp;strip=info&amp;w=1024" alt="La realidad política en Guatemala: Arévalo y su camino al poder" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									7:07								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/centroamerica/guatemala/" title="Guatemala">
						Guatemala							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/guatemala-bernardo-arevalo-analisis-nuevo-presidente-aristegui-tv/" title="La realidad política en Guatemala: Arévalo y su camino al poder">
				La realidad política en Guatemala: Arévalo y su camino al poder			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549499"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/guatemala-bernardo-arevalo-presidente-desafios-gobierno-aristegui-tv/" title="¿Qué retos podría enfrentar Bernardo Arévalo en Guatemala?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="¿Qué retos podría enfrentar Bernardo Arévalo en Guatemala?" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173902-bernardo-arevalo-1-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173902-bernardo-arevalo-1-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173902-bernardo-arevalo-1-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115173902-bernardo-arevalo-1-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="¿Qué retos podría enfrentar Bernardo Arévalo en Guatemala?" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									4:31								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/centroamerica/guatemala/" title="Guatemala">
						Guatemala							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/guatemala-bernardo-arevalo-presidente-desafios-gobierno-aristegui-tv/" title="¿Qué retos podría enfrentar Bernardo Arévalo en Guatemala?">
				¿Qué retos podría enfrentar Bernardo Arévalo en Guatemala?			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549484"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/brasil-inundaciones-muertos-brasil-desaparecidos-perspectivas-mexico-tv/" title="Videos captan devastación tras mortales inundaciones en Brasil">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Videos captan devastación tras mortales inundaciones en Brasil" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191019-brasil-inundaciones-muertos-brasil-desaparecidos-perspectivas-mexico-tv-00000209-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191019-brasil-inundaciones-muertos-brasil-desaparecidos-perspectivas-mexico-tv-00000209-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191019-brasil-inundaciones-muertos-brasil-desaparecidos-perspectivas-mexico-tv-00000209-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191019-brasil-inundaciones-muertos-brasil-desaparecidos-perspectivas-mexico-tv-00000209-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Videos captan devastación tras mortales inundaciones en Brasil" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:58								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/brasil/" title="Brasil">
						Brasil							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/brasil-inundaciones-muertos-brasil-desaparecidos-perspectivas-mexico-tv/" title="Videos captan devastación tras mortales inundaciones en Brasil">
				Videos captan devastación tras mortales inundaciones en Brasil			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549446"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/migrantes-solicitudes-refugio-mexico-trax/" title="Casi 141.000 personas pidieron refugio en México en 2023">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1910715048.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1910715048.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1910715048.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1910715048.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/mexico/" title="México">
						México							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/migrantes-solicitudes-refugio-mexico-trax/" title="Casi 141.000 personas pidieron refugio en México en 2023">
				Casi 141.000 personas pidieron refugio en México en 2023			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 right -->
						
			</div>
		</div>
	</div>
	<div class="row dp_zn6"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-center">
					
											<a href="https://cnnespanol.cnn.com/seccion/mundo/" title="Mundo">
							Mundo						</a>
									</h2>
			</div>

			<div class="mod__content">

											<div class="col--custom col--c-4 dp_zn6_cn0">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--video" 
	id="article-1549926"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/ucrania-aviones-rusos-mar-de-azov-trax/" title="Ucrania apunta a dos aviones rusos sobre el Mar de Azov">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Ucrania apunta a dos aviones rusos sobre el Mar de Azov" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116132554-aviones-rusos-ucrania-full-169.jpg?quality=100&amp;strip=info&amp;w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116132554-aviones-rusos-ucrania-full-169.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116132554-aviones-rusos-ucrania-full-169.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116132554-aviones-rusos-ucrania-full-169.jpg?quality=100&amp;strip=info&amp;w=1024" alt="Ucrania apunta a dos aviones rusos sobre el Mar de Azov" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:37								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/seccion/mundo/" title="Mundo">
						Mundo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/ucrania-aviones-rusos-mar-de-azov-trax/" title="Ucrania apunta a dos aviones rusos sobre el Mar de Azov">
				Ucrania apunta a dos aviones rusos sobre el Mar de Azov			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549685"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/gustavo-petro-reunira-papa-francisco-orix/" title="Gustavo Petro se reunirá en el Vaticano con el papa Francisco">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Petro compara ataques en Gaza con campos nazi" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231013125015-petro-hitler-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231013125015-petro-hitler-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231013125015-petro-hitler-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231013125015-petro-hitler-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Petro compara ataques en Gaza con campos nazi" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/francisco-en-america/" title="Papa Francisco">
						Papa Francisco							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/gustavo-petro-reunira-papa-francisco-orix/" title="Gustavo Petro se reunirá en el Vaticano con el papa Francisco">
				Gustavo Petro se reunirá en el Vaticano con el papa Francisco			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549846"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/inundaciones-islas-mauricio-autos-cafe-tv/" title="Autos bajo el agua por las intensas lluvias en Mauricio">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Autos bajo el agua por las intensas lluvias en Mauricio" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130507-inundacion-mauricio-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130507-inundacion-mauricio-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130507-inundacion-mauricio-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130507-inundacion-mauricio-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Autos bajo el agua por las intensas lluvias en Mauricio" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:54								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/africa/" title="África">
						África							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/inundaciones-islas-mauricio-autos-cafe-tv/" title="Autos bajo el agua por las intensas lluvias en Mauricio">
				Autos bajo el agua por las intensas lluvias en Mauricio			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549848"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/destrozos-lava-islandia-volcan-grindavik-cafe-tv/" title="Video capta los daños ocasionados por la erupción del volcán en Islandia">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Video capta los daños ocasionados por la erupción del volcán en Islandia" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130505-islandia-volcan-dao-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130505-islandia-volcan-dao-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130505-islandia-volcan-dao-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116130505-islandia-volcan-dao-cafe-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Video capta los daños ocasionados por la erupción del volcán en Islandia" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:51								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/volcanes/" title="Volcanes">
						Volcanes							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/destrozos-lava-islandia-volcan-grindavik-cafe-tv/" title="Video capta los daños ocasionados por la erupción del volcán en Islandia">
				Video capta los daños ocasionados por la erupción del volcán en Islandia			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 left -->
													<div class="col--custom col--c-6 dp_zn6_cn1">
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--video" 
	id="article-1549850"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/elecciones-iowa-momentos-memorables-trax/" title="Estos son los momentos memorables en las campañas de Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Estos son los momentos memorables en las campañas de Iowa" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116101327-elecciones-iowa-momentos-memorables-trax-00000000-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116101327-elecciones-iowa-momentos-memorables-trax-00000000-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116101327-elecciones-iowa-momentos-memorables-trax-00000000-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116101327-elecciones-iowa-momentos-memorables-trax-00000000-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="Estos son los momentos memorables en las campañas de Iowa" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									2:41								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/seccion/mundo/" title="Mundo">
						Mundo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/elecciones-iowa-momentos-memorables-trax/" title="Estos son los momentos memorables en las campañas de Iowa">
				Estos son los momentos memorables en las campañas de Iowa			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--post" 
	id="article-1549683"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/hamas-rehenes-muertos-tortura-psicologica-trax/" title="Las FDI acusan a Hamas de “tortura psicológica” a familiares de rehenes">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rehenes-16.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rehenes-16.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rehenes-16.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/rehenes-16.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/medio-oriente/" title="Medio Oriente">
						Medio Oriente							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/hamas-rehenes-muertos-tortura-psicologica-trax/" title="Las FDI acusan a Hamas de “tortura psicológica” a familiares de rehenes">
				Las FDI acusan a Hamas de “tortura psicológica” a familiares de rehenes			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-6 middle -->
													<div class="col--custom col--c-4 dp_zn6_cn2">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1549641"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/miles-personas-hambre-gaza-hambruna-llega-velocidad-increible-advierte-jefe-onu-trax/" title="Cientos de miles de personas pasan hambre en Gaza, según la ONU">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gaza-starving.jpg?quality=100&amp;strip=info&amp;w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gaza-starving.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gaza-starving.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gaza-starving.jpg?quality=100&amp;strip=info&amp;w=1024" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/medio-oriente/" title="Medio Oriente">
						Medio Oriente							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/miles-personas-hambre-gaza-hambruna-llega-velocidad-increible-advierte-jefe-onu-trax/" title="Cientos de miles de personas pasan hambre en Gaza, según la ONU">
				Cientos de miles de personas pasan hambre en Gaza, según la ONU			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549045"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/5-cosas-16-enero-iowa-caucus-orix/" title="5 cosas: Trump gana el caucus en Iowa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="iowa trump" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936170743.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936170743.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936170743.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1936170743.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="iowa trump" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/5-cosas/" title="5 cosas">
						5 cosas							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/5-cosas-16-enero-iowa-caucus-orix/" title="5 cosas: Trump gana el caucus en Iowa">
				5 cosas: Trump gana el caucus en Iowa			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549628"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/kim-jong-un-promete-desmantelar-arco-de-unificacion-padre-en-corea-del-norte-y-declara-a-corea-del-sur-su-enemigo-principal-trax/" title="Kim promete desmantelar el arco de unificación y declara &quot;enemigo&quot; al Sur">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Arco Unificación" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/arch-of-reunification-n-korea-e1705397030659.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/arch-of-reunification-n-korea-e1705397030659.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/arch-of-reunification-n-korea-e1705397030659.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/arch-of-reunification-n-korea-e1705397030659.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Arco Unificación" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/corea-del-norte/" title="Corea del Norte">
						Corea del Norte							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/kim-jong-un-promete-desmantelar-arco-de-unificacion-padre-en-corea-del-norte-y-declara-a-corea-del-sur-su-enemigo-principal-trax/" title="Kim promete desmantelar el arco de unificación y declara &quot;enemigo&quot; al Sur">
				Kim promete desmantelar el arco de unificación y declara &quot;enemigo&quot; al Sur			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549618"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/iran-ataques-misiles-iraq-siria-base-espionaje-israeli-trax/" title="Irán lanza ataques con misiles en el norte de Iraq y Siria">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="ataque Irán Iraq" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/2-erbil-missiles-attack.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/2-erbil-missiles-attack.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/2-erbil-missiles-attack.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/2-erbil-missiles-attack.jpeg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="ataque Irán Iraq" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/iran/" title="Irán">
						Irán							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/iran-ataques-misiles-iraq-siria-base-espionaje-israeli-trax/" title="Irán lanza ataques con misiles en el norte de Iraq y Siria">
				Irán lanza ataques con misiles en el norte de Iraq y Siria			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 right -->
						
			</div>
		</div>
	</div>

	<!-- start HP four-posts module -->
	<div class="row dp_zn7"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-left">
					
											<a href="https://cnnespanol.cnn.com/category/dia-del-llamado-a-la-tierra/" title="Llamado a la Tierra">
							Llamado a la Tierra						</a>
									</h2>
									<div class="mod__sponsor">
						
	<div id="ad_ns_btf_01" class="ad"></div>

					</div>
								</div>

			<div class="mod__content">
				<div class="row--inner">

												<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1548163"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/bambu-iinovador-material-construccion-respetuoso-medio-ambiente-llamado-tierra-cnne/" title="El bambú, un innovador material de construcción">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="El bambú, un innovador material de construcción" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112162757-cte-bamboo-construction-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112162757-cte-bamboo-construction-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112162757-cte-bamboo-construction-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112162757-cte-bamboo-construction-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="El bambú, un innovador material de construcción" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									4:25								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/dia-del-llamado-a-la-tierra/" title="Llamado a la Tierra">
						Llamado a la Tierra							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/bambu-iinovador-material-construccion-respetuoso-medio-ambiente-llamado-tierra-cnne/" title="El bambú, un innovador material de construcción">
				El bambú, un innovador material de construcción			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--post" 
	id="article-1548026"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/12/fotografias-primer-plano-maravillas-ocultas-naturaleza-trax/" title="Estas impactantes fotos revelan las maravillas ocultas de la naturaleza">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Una fotografía de Simon Theuma muestra un camarón flotando sobre un mosaico de colores en Australia. (cupoty.com)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/pez.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/pez.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/pez.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/pez.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Una fotografía de Simon Theuma muestra un camarón flotando sobre un mosaico de colores en Australia. (cupoty.com)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/animales/" title="Animales">
						Animales							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/12/fotografias-primer-plano-maravillas-ocultas-naturaleza-trax/" title="Estas impactantes fotos revelan las maravillas ocultas de la naturaleza">
				Estas impactantes fotos revelan las maravillas ocultas de la naturaleza			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--post" 
	id="article-1547469"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/11/este-jardin-mas-feo-mundo-trax/" title="Este jardín fue nombrado el más feo del mundo, pero es por una buena causa">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="premio jardin feo" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111122040-worlds-ugliest-lawn.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111122040-worlds-ugliest-lawn.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111122040-worlds-ugliest-lawn.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111122040-worlds-ugliest-lawn.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="premio jardin feo" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/dia-del-llamado-a-la-tierra/" title="Llamado a la Tierra">
						Llamado a la Tierra							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/11/este-jardin-mas-feo-mundo-trax/" title="Este jardín fue nombrado el más feo del mundo, pero es por una buena causa">
				Este jardín fue nombrado el más feo del mundo, pero es por una buena causa			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1547046"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/akikiki-conservacion-hawai-cnne-llamado-tierra-cte/" title="El akikiki, una especie en peligro de desaparecer">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="El akikiki, una especie en peligro de desaparecer" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240110175125-akikiki-cnne-cte-hawai-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240110175125-akikiki-cnne-cte-hawai-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240110175125-akikiki-cnne-cte-hawai-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240110175125-akikiki-cnne-cte-hawai-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="El akikiki, una especie en peligro de desaparecer" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									3:41								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/dia-del-llamado-a-la-tierra/" title="Llamado a la Tierra">
						Llamado a la Tierra							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/akikiki-conservacion-hawai-cnne-llamado-tierra-cte/" title="El akikiki, una especie en peligro de desaparecer">
				El akikiki, una especie en peligro de desaparecer			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
											</div>
			</div>
		</div>
	</div>
	<!-- end HP four-posts module -->

	<!-- start HP four-posts module -->
	<div class="row dp_zn8"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-left">
					
											<a href="https://cnnespanol.cnn.com/seccion/economia-y-negocios/" title="CNN Negocios">
							CNN Negocios						</a>
									</h2>
									<div class="mod__sponsor">
						
	<div id="ad_ns_btf_01" class="ad"></div>

					</div>
								</div>

			<div class="mod__content">
				<div class="row--inner">

												<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--post" 
	id="article-1549748"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/elon-musk-acciones-tesla-trax/" title="Elon Musk exige tener más acciones de Tesla">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="elon-musk" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/elon-musk-112923.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/elon-musk-112923.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/elon-musk-112923.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/elon-musk-112923.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="elon-musk" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/empresas/" title="Empresas">
						Empresas							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/elon-musk-acciones-tesla-trax/" title="Elon Musk exige tener más acciones de Tesla">
				Elon Musk exige tener más acciones de Tesla			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1549332"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/union-europea-regulacion-inteligencia-artificial-globoeconomia-tv/" title="La Unión Europea busca regular la inteligencia artificial">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="La Unión Europea busca regular la inteligencia artificial" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115160047-ai-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115160047-ai-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115160047-ai-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115160047-ai-full-169.jpeg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="La Unión Europea busca regular la inteligencia artificial" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:40								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/inteligencia-artificial/" title="Inteligencia artificial">
						Inteligencia artificial							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/union-europea-regulacion-inteligencia-artificial-globoeconomia-tv/" title="La Unión Europea busca regular la inteligencia artificial">
				La Unión Europea busca regular la inteligencia artificial			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1549309"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/fmi-inteligencia-artificial-empleos-mundial-cnn-dinero-tv/" title="La IA afectaría gran parte del empleo a nivel mundial">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="La IA afectaría gran parte del empleo a nivel mundial" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/231207165636-jobs-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/231207165636-jobs-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/231207165636-jobs-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/231207165636-jobs-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="La IA afectaría gran parte del empleo a nivel mundial" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:05								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/inteligencia-artificial/" title="Inteligencia artificial">
						Inteligencia artificial							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/fmi-inteligencia-artificial-empleos-mundial-cnn-dinero-tv/" title="La IA afectaría gran parte del empleo a nivel mundial">
				La IA afectaría gran parte del empleo a nivel mundial			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
														<div class="col col--3">

							
<article class="news news--box news--box-style-two  post-type--video" 
	id="article-1549311"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/riqueza-millonarios-multiplica-reporte-oxam-desigualdad-cnn-dinero-tv/" title="Se duplican fortunas de las 5 personas más ricas">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Se duplican fortunas de las 5 personas más ricas" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115152651-money-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115152651-money-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115152651-money-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1 300w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115152651-money-full-169.jpg?quality=100&amp;strip=info&amp;w=300&amp;h=170&amp;crop=1" alt="Se duplican fortunas de las 5 personas más ricas" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:24								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/macroeconomia/economia/" title="Economía">
						Economía							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/riqueza-millonarios-multiplica-reporte-oxam-desigualdad-cnn-dinero-tv/" title="Se duplican fortunas de las 5 personas más ricas">
				Se duplican fortunas de las 5 personas más ricas			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end col--3 -->
											</div>
			</div>
		</div>
	</div>
	<!-- end HP four-posts module -->

<div class="row dp_zn9">
	<div class="row--inner">
		
					<div class="col col--4 dp_zn9_cn0"  data-using-transient >
				<div class="mod mod--style-two">
					
					<div class="mod__header">
						<h2 class="mod__title mod__title--bottom-line-left">
															<a href="https://cnnespanol.cnn.com/seccion/entretenimiento/" title="Entretenimiento">
									Entretenimiento								</a>
													</h2>
					</div>

					<div class="mod__content">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--video" 
	id="article-1549890"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/true-detective-night-country-trax/" title="Así es &quot;True Detective: Night Country&quot;">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Así es &quot;True Detective: Night Country&quot;" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111131812-01-true-detective-night-country-hbo-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111131812-01-true-detective-night-country-hbo-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" data-lazy-sizes="( min-width: 300px ) 350px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111131812-01-true-detective-night-country-hbo-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" sizes="( min-width: 300px ) 350px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111131812-01-true-detective-night-country-hbo-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" alt="Así es &quot;True Detective: Night Country&quot;" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:31								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/television/" title="Televisión">
						Televisión							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/true-detective-night-country-trax/" title="Así es &quot;True Detective: Night Country&quot;">
				Así es &quot;True Detective: Night Country&quot;			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1549736"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/mejores-looks-alfombra-roja-75-emmy-awards-trax/" title="Mejores looks de la alfombra roja de los 75 Emmy Awards">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Aubrey Plaza" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1928393747.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1928393747.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1928393747.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1928393747.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Aubrey Plaza" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/celebridades/" title="Celebridades">
						Celebridades							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/mejores-looks-alfombra-roja-75-emmy-awards-trax/" title="Mejores looks de la alfombra roja de los 75 Emmy Awards">
				Mejores looks de la alfombra roja de los 75 Emmy Awards			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1549749"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/lux-pascal-pedro-pascal-premios-emmy-trax/" title="Pedro Pascal fue a los Emmy con su hermana Lux, actriz y modelo trans">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Pedro Pascal y Lux Pascal asisten a la recepción post-Emmy 2024 de HBO el lunes. (Crédito: Amy Sussman/Getty Images)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116134309-pedro-pascal-lux-pascal-011524.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116134309-pedro-pascal-lux-pascal-011524.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116134309-pedro-pascal-lux-pascal-011524.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116134309-pedro-pascal-lux-pascal-011524.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Pedro Pascal y Lux Pascal asisten a la recepción post-Emmy 2024 de HBO el lunes. (Crédito: Amy Sussman/Getty Images)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/celebridades/" title="Celebridades">
						Celebridades							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/lux-pascal-pedro-pascal-premios-emmy-trax/" title="Pedro Pascal fue a los Emmy con su hermana Lux, actriz y modelo trans">
				Pedro Pascal fue a los Emmy con su hermana Lux, actriz y modelo trans			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1549447"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/premios-emmy-ganadores-lista-completa-orix/" title="Premios Emmy 2023: la lista de todos los ganadores por categoría">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="succession" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928400964.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928400964.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928400964.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1928400964.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="succession" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/television/" title="Televisión">
						Televisión							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/premios-emmy-ganadores-lista-completa-orix/" title="Premios Emmy 2023: la lista de todos los ganadores por categoría">
				Premios Emmy 2023: la lista de todos los ganadores por categoría			</a>
		</h2>
				
			</div>

</article>
												</div>

				</div>
			</div>
		
					<div class="col col--4 dp_zn9_cn1"  data-using-transient >
				<div class="mod mod--style-two">
					
					<div class="mod__header">
						<h2 class="mod__title mod__title--bottom-line-left">
															<a href="https://cnnespanol.cnn.com/seccion/tecnologia/" title="Tecnología">
									Tecnología								</a>
													</h2>
					</div>

					<div class="mod__content">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1549263"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/apple-solucion-aprobada-eludir-prohibicion-watch-clientes-no-les-guste-trax/" title="¿Cómo se rediseñará el Apple Watch para evitar su prohibición en EE.UU.?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="El Apple Watch Series 9 en exhibición el 22 de septiembre de 2023 en Milán, Italia. (Crédito: Ming Yeung/Getty Images)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T141317.213.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T141317.213.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" data-lazy-sizes="( min-width: 300px ) 350px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T141317.213.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" sizes="( min-width: 300px ) 350px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T141317.213.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" alt="El Apple Watch Series 9 en exhibición el 22 de septiembre de 2023 en Milán, Italia. (Crédito: Ming Yeung/Getty Images)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/empresas/" title="Empresas">
						Empresas							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/apple-solucion-aprobada-eludir-prohibicion-watch-clientes-no-les-guste-trax/" title="¿Cómo se rediseñará el Apple Watch para evitar su prohibición en EE.UU.?">
				¿Cómo se rediseñará el Apple Watch para evitar su prohibición en EE.UU.?			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1548962"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/empleos-mundiales-podria-verse-afectado-inteligencia-artificial-fmi-trax/" title="Casi el 40% del empleo mundial podría verse afectado por la IA, dice el FMI">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="FMI empleo" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/international-monetary-fund-file-2018-e1705300187939.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/international-monetary-fund-file-2018-e1705300187939.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/international-monetary-fund-file-2018-e1705300187939.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/international-monetary-fund-file-2018-e1705300187939.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="FMI empleo" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/inteligencia-artificial/" title="Inteligencia artificial">
						Inteligencia artificial							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/empleos-mundiales-podria-verse-afectado-inteligencia-artificial-fmi-trax/" title="Casi el 40% del empleo mundial podría verse afectado por la IA, dice el FMI">
				Casi el 40% del empleo mundial podría verse afectado por la IA, dice el FMI			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1548916"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/14/antropoceno-lunar-nueva-epoca-luna-trax/" title="La Luna entró en una nueva época, dicen los científicos">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/as11-40-5902.webp?w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/as11-40-5902.webp?w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/as11-40-5902.webp?w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/as11-40-5902.webp?w=105&amp;h=60&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/ciencia-y-espacio/" title="Ciencia y Espacio">
						Ciencia y Espacio							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/14/antropoceno-lunar-nueva-epoca-luna-trax/" title="La Luna entró en una nueva época, dicen los científicos">
				La Luna entró en una nueva época, dicen los científicos			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--video" 
	id="article-1548309"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/islas-magicas-titan-saturno-sonda-cassini-perspectivas-mexico-tv/" title="Conoce las &quot;islas mágicas&quot; de una luna de Saturno">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Conoce las &quot;islas mágicas&quot; de una luna de Saturno" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112212847-titan-luna-saturno-islas-magicas-full-169.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112212847-titan-luna-saturno-islas-magicas-full-169.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112212847-titan-luna-saturno-islas-magicas-full-169.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112212847-titan-luna-saturno-islas-magicas-full-169.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Conoce las &quot;islas mágicas&quot; de una luna de Saturno" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:42								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/tv_show/mexico-perspectivas/" title="Perspectivas desde México">
						Perspectivas desde México							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/islas-magicas-titan-saturno-sonda-cassini-perspectivas-mexico-tv/" title="Conoce las &quot;islas mágicas&quot; de una luna de Saturno">
				Conoce las &quot;islas mágicas&quot; de una luna de Saturno			</a>
		</h2>
				
			</div>

</article>
												</div>

				</div>
			</div>
		
					<div class="col col--4 dp_zn9_cn2"   data-using-transient >
				<div class="mod mod--style-two">
					
					<div class="mod__header">
						<h2 class="mod__title mod__title--bottom-line-left">
															<a href="https://cnnespanol.cnn.com/category/coronavirus/" title="Coronavirus">
									Coronavirus								</a>
													</h2>
					</div>

					<div class="mod__content">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1528114"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2023/12/19/covid-subvariante-jn-1-trax/" title="Esta es la subvariante del covid-19 que crece rápidamente en EE.UU.">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/covid.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/covid.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" data-lazy-sizes="( min-width: 300px ) 350px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/covid.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" sizes="( min-width: 300px ) 350px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/covid.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/coronavirus/" title="Coronavirus">
						Coronavirus							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/19/covid-subvariante-jn-1-trax/" title="Esta es la subvariante del covid-19 que crece rápidamente en EE.UU.">
				Esta es la subvariante del covid-19 que crece rápidamente en EE.UU.			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1528216"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2023/12/19/subvariante-jn-1-coronavirus-caracteristicas-sintomas-casos-vacunas-orix/" title="Subvariante JN.1 del coronavirus: características, síntomas, casos y vacuna">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2022/12/coronavirus.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2022/12/coronavirus.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2022/12/coronavirus.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/12/coronavirus.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/coronavirus/" title="Coronavirus">
						Coronavirus							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/19/subvariante-jn-1-coronavirus-caracteristicas-sintomas-casos-vacunas-orix/" title="Subvariante JN.1 del coronavirus: características, síntomas, casos y vacuna">
				Subvariante JN.1 del coronavirus: características, síntomas, casos y vacuna			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1519762"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2023/12/08/gobierno-mexico-aprueba-venta-vacunas-covid-19/" title="Gobierno de México aprueba la venta de las vacunas contra el covid-19">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/08/GettyImages-1231397640-e1691892692198.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/08/GettyImages-1231397640-e1691892692198.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/08/GettyImages-1231397640-e1691892692198.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/08/GettyImages-1231397640-e1691892692198.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/coronavirus/" title="Coronavirus">
						Coronavirus							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/08/gobierno-mexico-aprueba-venta-vacunas-covid-19/" title="Gobierno de México aprueba la venta de las vacunas contra el covid-19">
				Gobierno de México aprueba la venta de las vacunas contra el covid-19			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1479518"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2023/10/18/contagioso-despues-enfermedad-trax/" title="¿Cómo saber si sigues siendo contagioso después de una enfermedad?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="sintomas contagio enfermedades virales" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/gettyimages-1337117157.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/gettyimages-1337117157.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/gettyimages-1337117157.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/gettyimages-1337117157.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="sintomas contagio enfermedades virales" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/coronavirus/" title="Coronavirus">
						Coronavirus							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/10/18/contagioso-despues-enfermedad-trax/" title="¿Cómo saber si sigues siendo contagioso después de una enfermedad?">
				¿Cómo saber si sigues siendo contagioso después de una enfermedad?			</a>
		</h2>
				
			</div>

</article>
												</div>

				</div>
			</div>
		
	</div>
</div>
	<div class="row dp_zn10"  data-using-transient >
		<div class="mod mod--style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-center">
					
											<a href="https://cnnespanol.cnn.com/seccion/deportes/" title="Deportes">
							Deportes						</a>
									</h2>
			</div>

			<div class="mod__content">

											<div class="col--custom col--c-4 dp_zn10_cn0">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--video" 
	id="article-1549938"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/marlon-chito-vera-o-malley-ufc-deportes-tv/" title="&quot;Chito&quot; Vera quiere dedicarle un triunfo a Ecuador">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="&quot;Chito&quot; Vera quiere dedicarle un triunfo a Ecuador" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133931-marlon-chito-vera-ecuador-ufc-full-169.jpg?quality=100&amp;strip=info&amp;w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133931-marlon-chito-vera-ecuador-ufc-full-169.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133931-marlon-chito-vera-ecuador-ufc-full-169.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133931-marlon-chito-vera-ecuador-ufc-full-169.jpg?quality=100&amp;strip=info&amp;w=1024" alt="&quot;Chito&quot; Vera quiere dedicarle un triunfo a Ecuador" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									3:52								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/seccion/deportes/" title="Deportes">
						Deportes							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/marlon-chito-vera-o-malley-ufc-deportes-tv/" title="&quot;Chito&quot; Vera quiere dedicarle un triunfo a Ecuador">
				&quot;Chito&quot; Vera quiere dedicarle un triunfo a Ecuador			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1549878"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/cade-cowell-chivas-guadalajara-deportes-tv/" title="Los números del delantero de EE.UU. que fichó Chivas">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Los números del delantero de EE.UU. que fichó Chivas" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116120052-cade-cowell-chivas-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116120052-cade-cowell-chivas-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116120052-cade-cowell-chivas-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116120052-cade-cowell-chivas-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Los números del delantero de EE.UU. que fichó Chivas" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:28								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/futbol/" title="Fútbol">
						Fútbol							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/cade-cowell-chivas-guadalajara-deportes-tv/" title="Los números del delantero de EE.UU. que fichó Chivas">
				Los números del delantero de EE.UU. que fichó Chivas			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549822"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/federacion-tenis-saudita-rafael-nadal-embajador-trax/" title="La Federación de Tenis saudita nombra a Rafael Nadal como embajador">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Nadal ya no está entre los primeros 100 del mundo" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/230518033913-02-rafael-nadal-presser-prep-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/230518033913-02-rafael-nadal-presser-prep-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/230518033913-02-rafael-nadal-presser-prep-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/230518033913-02-rafael-nadal-presser-prep-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Nadal ya no está entre los primeros 100 del mundo" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/tenis/" title="Tenis">
						Tenis							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/federacion-tenis-saudita-rafael-nadal-embajador-trax/" title="La Federación de Tenis saudita nombra a Rafael Nadal como embajador">
				La Federación de Tenis saudita nombra a Rafael Nadal como embajador			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549659"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/16/roma-despide-jose-mourinho-trax/" title="El AS Roma despide a José Mourinho con &quot;efectos inmediatos&quot;">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116084932-jose-mourinho-card-e1705411119529.webp?w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116084932-jose-mourinho-card-e1705411119529.webp?w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116084932-jose-mourinho-card-e1705411119529.webp?w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116084932-jose-mourinho-card-e1705411119529.webp?w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/futbol/" title="Fútbol">
						Fútbol							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/16/roma-despide-jose-mourinho-trax/" title="El AS Roma despide a José Mourinho con &quot;efectos inmediatos&quot;">
				El AS Roma despide a José Mourinho con &quot;efectos inmediatos&quot;			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 left -->
													<div class="col--custom col--c-6 dp_zn10_cn1">
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--video" 
	id="article-1549475"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/lionel-messi-the-best-inter-miami-deportes-tv/" title="Los números de Messi para ganar el The Best">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Los números de Messi para ganar el The Best" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191244-lionel-messi-the-best-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191244-lionel-messi-the-best-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191244-lionel-messi-the-best-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240115191244-lionel-messi-the-best-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="Los números de Messi para ganar el The Best" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:29								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/futbol/" title="Fútbol">
						Fútbol							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/lionel-messi-the-best-inter-miami-deportes-tv/" title="Los números de Messi para ganar el The Best">
				Los números de Messi para ganar el The Best			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--innerbox news--with-border-bottom post-type--video" 
	id="article-1549397"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/martin-luther-king-natalicio-cnn-deportes-tv/" title="Tributo en el deporte por aniversario del natalicio de Martin Luther King">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Tributo en el deporte por aniversario del natalicio de Martin Luther King" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112132247-01-mlk-legacy-dei-affirmative-action-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112132247-01-mlk-legacy-dei-affirmative-action-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" data-lazy-sizes="( min-width: 300px ) 460px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112132247-01-mlk-legacy-dei-affirmative-action-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1 460w" sizes="( min-width: 300px ) 460px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112132247-01-mlk-legacy-dei-affirmative-action-full-169.jpg?quality=100&amp;strip=info&amp;w=460&amp;h=260&amp;crop=1" alt="Tributo en el deporte por aniversario del natalicio de Martin Luther King" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									0:50								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/deportes/" title="Deportes">
						Deportes							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/martin-luther-king-natalicio-cnn-deportes-tv/" title="Tributo en el deporte por aniversario del natalicio de Martin Luther King">
				Tributo en el deporte por aniversario del natalicio de Martin Luther King			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-6 middle -->
													<div class="col--custom col--c-4 dp_zn10_cn2">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1549327"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/muere-motociclista-carles-falcon-accidente-rally-dakar-trax/" title="Muere Carles Falcón, piloto español, tras un accidente en el Rally Dakar">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="carles falcon" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/carles-falcon-muerte.jpg?quality=100&amp;strip=info&amp;w=1024" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/carles-falcon-muerte.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" data-lazy-sizes="( min-width: 300px ) 300px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/carles-falcon-muerte.jpg?quality=100&amp;strip=info&amp;w=1024 1024w" sizes="( min-width: 300px ) 300px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/carles-falcon-muerte.jpg?quality=100&amp;strip=info&amp;w=1024" alt="carles falcon" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/espana/" title="España">
						España							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/muere-motociclista-carles-falcon-accidente-rally-dakar-trax/" title="Muere Carles Falcón, piloto español, tras un accidente en el Rally Dakar">
				Muere Carles Falcón, piloto español, tras un accidente en el Rally Dakar			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549272"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/ganadores-premios-the-best-fifa-2023-orix/" title="Messi y Bonmatí ganan el premio The Best de la FIFA 2023">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/messi-vacaciones.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/messi-vacaciones.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/messi-vacaciones.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/06/messi-vacaciones.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/futbol/" title="Fútbol">
						Fútbol							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/ganadores-premios-the-best-fifa-2023-orix/" title="Messi y Bonmatí ganan el premio The Best de la FIFA 2023">
				Messi y Bonmatí ganan el premio The Best de la FIFA 2023			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--post" 
	id="article-1549162"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/coco-gauff-luce-nuevo-saque-victoria-primera-ronda-abierto-australia-2024-trax/" title="Coco Gauff luce saque de casi 200 km/h en el Abierto de Australia 2024">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Coco Gauff atribuye su nuevo saque en parte a la exestrella del tenis estadounidense Andy Roddick. (Crédito: David Gray/AFP/Getty Images)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T112011.208.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T112011.208.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T112011.208.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-15T112011.208.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Coco Gauff atribuye su nuevo saque en parte a la exestrella del tenis estadounidense Andy Roddick. (Crédito: David Gray/AFP/Getty Images)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/tenis/" title="Tenis">
						Tenis							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/coco-gauff-luce-nuevo-saque-victoria-primera-ronda-abierto-australia-2024-trax/" title="Coco Gauff luce saque de casi 200 km/h en el Abierto de Australia 2024">
				Coco Gauff luce saque de casi 200 km/h en el Abierto de Australia 2024			</a>
		</h2>
				
			</div>

</article>
						
<article class="news news--box news--box-style-two  news--summary news--with-border-bottom post-type--video" 
	id="article-1548879"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/luis-suarez-mls-lionel-messi-inter-miami-cnn-deportes-tv/" title="Así fue el reencuentro de Luis Suárez con Messi, Busquets y Alba">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Así fue el reencuentro de Luis Suárez con Messi, Busquets y Alba" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114174909-luis-suarez-lionel-messi-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114174909-luis-suarez-lionel-messi-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114174909-luis-suarez-lionel-messi-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240114174909-luis-suarez-lionel-messi-full-169.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Así fue el reencuentro de Luis Suárez con Messi, Busquets y Alba" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									4:33								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/deportes/" title="Deportes">
						Deportes							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/luis-suarez-mls-lionel-messi-inter-miami-cnn-deportes-tv/" title="Así fue el reencuentro de Luis Suárez con Messi, Busquets y Alba">
				Así fue el reencuentro de Luis Suárez con Messi, Busquets y Alba			</a>
		</h2>
				
			</div>

</article>
													</div><!-- end col--c-4 right -->
						
			</div>
		</div>
	</div>

<div class="row dp_zn11">
	<div class="row--inner">
		
					<div class="col col--4 dp_zn11_cn0"  data-using-transient >
				<div class="mod mod--style-two">
					
					<div class="mod__header">
						<h2 class="mod__title mod__title--bottom-line-left">
															<a href="https://cnnespanol.cnn.com/seccion/salud/" title="Salud">
									Salud								</a>
													</h2>
					</div>

					<div class="mod__content">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--video" 
	id="article-1549928"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/lunes-triste-enero-depresion-sintomas-consejos-perspectivas-mexico-tv/" title="Así puedes vencer al lunes más triste del año">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Así puedes vencer al lunes más triste del año" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133124-lunes-triste-enero-depresion-sintomas-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133124-lunes-triste-enero-depresion-sintomas-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" data-lazy-sizes="( min-width: 300px ) 350px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133124-lunes-triste-enero-depresion-sintomas-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" sizes="( min-width: 300px ) 350px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240116133124-lunes-triste-enero-depresion-sintomas-full-169.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" alt="Así puedes vencer al lunes más triste del año" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
																<span>
									1:25								</span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/seccion/salud/" title="Salud">
						Salud							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/lunes-triste-enero-depresion-sintomas-consejos-perspectivas-mexico-tv/" title="Así puedes vencer al lunes más triste del año">
				Así puedes vencer al lunes más triste del año			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1549175"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/moda-cuidado-piel-preadolescentes-trax/" title="La moda de cuidarse la piel llegó a los preadolescentes. ¿Qué vale la pena?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1478186100.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1478186100.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1478186100.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1478186100.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/ninos/" title="Niños">
						Niños							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/moda-cuidado-piel-preadolescentes-trax/" title="La moda de cuidarse la piel llegó a los preadolescentes. ¿Qué vale la pena?">
				La moda de cuidarse la piel llegó a los preadolescentes. ¿Qué vale la pena?			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1039579"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/13/depresion-que-es-como-enfrentarla-pedir-ayuda-orix/" title="¿Qué es la depresión y cómo tratarla?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Depresión" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2018/12/181217100612-02-chronic-fatigue-super-tease.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2018/12/181217100612-02-chronic-fatigue-super-tease.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2018/12/181217100612-02-chronic-fatigue-super-tease.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2018/12/181217100612-02-chronic-fatigue-super-tease.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Depresión" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/salud-mental/" title="Salud mental">
						Salud mental							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/13/depresion-que-es-como-enfrentarla-pedir-ayuda-orix/" title="¿Qué es la depresión y cómo tratarla?">
				¿Qué es la depresión y cómo tratarla?			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1134945"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/13/depresion-cotidianas-lucha-orix/" title="¿Por qué la depresión impide a muchos hacer cosas del día a día?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Despertarse tarde podría relacionarse con la depresión" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2021/06/210608141915-depresion-salud-mental-noctambulo-madrugar-guillermo-arduino-encuentro-00000000-full-169.png?w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2021/06/210608141915-depresion-salud-mental-noctambulo-madrugar-guillermo-arduino-encuentro-00000000-full-169.png?w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2021/06/210608141915-depresion-salud-mental-noctambulo-madrugar-guillermo-arduino-encuentro-00000000-full-169.png?w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2021/06/210608141915-depresion-salud-mental-noctambulo-madrugar-guillermo-arduino-encuentro-00000000-full-169.png?w=105&amp;h=60&amp;crop=1" alt="Despertarse tarde podría relacionarse con la depresión" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/salud-mental/" title="Salud mental">
						Salud mental							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/13/depresion-cotidianas-lucha-orix/" title="¿Por qué la depresión impide a muchos hacer cosas del día a día?">
				¿Por qué la depresión impide a muchos hacer cosas del día a día?			</a>
		</h2>
				
			</div>

</article>
												</div>

				</div>
			</div>
		
					<div class="col col--4 dp_zn11_cn1"  data-using-transient >
				<div class="mod mod--style-two">
					
					<div class="mod__header">
						<h2 class="mod__title mod__title--bottom-line-left">
															<a href="https://cnnespanol.cnn.com/seccion/viajes-y-turismo/" title="Viajes y Turismo">
									Viajes y Turismo								</a>
													</h2>
					</div>

					<div class="mod__content">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1548770"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/14/que-ocurre-cabina-avion-se-despresuriza-subitamente-trax/" title="¿Qué ocurre cuando la cabina de un avión se despresuriza súbitamente?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="¿Qué ocurre cuando la cabina de un avión se despresuriza súbitamente?" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-14T112336.124.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-14T112336.124.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" data-lazy-sizes="( min-width: 300px ) 350px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-14T112336.124.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" sizes="( min-width: 300px ) 350px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-14T112336.124.jpg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" alt="¿Qué ocurre cuando la cabina de un avión se despresuriza súbitamente?" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/aviacion/" title="Aviación">
						Aviación							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/14/que-ocurre-cabina-avion-se-despresuriza-subitamente-trax/" title="¿Qué ocurre cuando la cabina de un avión se despresuriza súbitamente?">
				¿Qué ocurre cuando la cabina de un avión se despresuriza súbitamente?			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1548454"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/13/4-cosas-que-debes-saber-sobre-boeing-y-alaska-airlines-1282-trax/" title="4 cosas que debes saber del Boeing 737 MAX 9 de Alaska Airlines">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Un avión Boeing 737 Max 9 de Alaska Airlines aterrizó en el Aeropuerto Internacional de Los Ángeles (LAX) el 8 de enero de 2024. (Foto: Eric Thayer/Bloomberg/Getty Images)." data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/alaska-airbus-737max.webp?w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/alaska-airbus-737max.webp?w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/alaska-airbus-737max.webp?w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/alaska-airbus-737max.webp?w=105&amp;h=60&amp;crop=1" alt="Un avión Boeing 737 Max 9 de Alaska Airlines aterrizó en el Aeropuerto Internacional de Los Ángeles (LAX) el 8 de enero de 2024. (Foto: Eric Thayer/Bloomberg/Getty Images)." /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/aviacion/" title="Aviación">
						Aviación							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/13/4-cosas-que-debes-saber-sobre-boeing-y-alaska-airlines-1282-trax/" title="4 cosas que debes saber del Boeing 737 MAX 9 de Alaska Airlines">
				4 cosas que debes saber del Boeing 737 MAX 9 de Alaska Airlines			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1548436"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/13/mejores-paises-para-expatriados-trax/" title="¿Pensando en mudarte? Estos son los mejores países para expatriados">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Italia es un destino popular entre las personas que desean mudarse al extranjero. Esta es una vista panorámica de Positano en la costa de Amalfi. ¿Pero sería este lugar un buen hogar? (Antonel/iStockphoto/Getty Images)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1326910770.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1326910770.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1326910770.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/gettyimages-1326910770.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Italia es un destino popular entre las personas que desean mudarse al extranjero. Esta es una vista panorámica de Positano en la costa de Amalfi. ¿Pero sería este lugar un buen hogar? (Antonel/iStockphoto/Getty Images)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/turismo/" title="Turismo">
						Turismo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/13/mejores-paises-para-expatriados-trax/" title="¿Pensando en mudarte? Estos son los mejores países para expatriados">
				¿Pensando en mudarte? Estos son los mejores países para expatriados			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1548366"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/13/estacion-esqui-alta-no-hay-nieve-trax/" title="Es una de las estaciones de esquí más altas pero ¿dónde está la nieve?">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="La famosa estación de esquí de Gulmarg, en la Cachemira administrada por la India, sufre escasez de nieve debido a un tiempo inusualmente seco. Esta fotografía fue tomada en la estación el 10 de enero de 2024. (Crédito: Nasir Kachroo/NurPhoto/Shutterstock)" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112092335-05-gulmarg-snow.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112092335-05-gulmarg-snow.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112092335-05-gulmarg-snow.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240112092335-05-gulmarg-snow.jpg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="La famosa estación de esquí de Gulmarg, en la Cachemira administrada por la India, sufre escasez de nieve debido a un tiempo inusualmente seco. Esta fotografía fue tomada en la estación el 10 de enero de 2024. (Crédito: Nasir Kachroo/NurPhoto/Shutterstock)" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/turismo/" title="Turismo">
						Turismo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/13/estacion-esqui-alta-no-hay-nieve-trax/" title="Es una de las estaciones de esquí más altas pero ¿dónde está la nieve?">
				Es una de las estaciones de esquí más altas pero ¿dónde está la nieve?			</a>
		</h2>
				
			</div>

</article>
												</div>

				</div>
			</div>
		
					<div class="col col--4 dp_zn11_cn2"   data-using-transient >
				<div class="mod mod--style-two">
					
					<div class="mod__header">
						<h2 class="mod__title mod__title--bottom-line-left">
															<a href="https://cnnespanol.cnn.com/seccion/estilo/" title="Estilo">
									Estilo								</a>
													</h2>
					</div>

					<div class="mod__content">
						
<article class="news news--box news--box-style-two  news--with-border-bottom post-type--post" 
	id="article-1548939"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/15/miss-usa-2024-oficial-fuerza-aerea-trax/" title="Coronan a oficial de la Fuerza Aérea como Miss America 2024">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Miss Estados Unidos 2024" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Miss-America-coronacion.jpeg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Miss-America-coronacion.jpeg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" data-lazy-sizes="( min-width: 300px ) 350px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Miss-America-coronacion.jpeg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1 352w" sizes="( min-width: 300px ) 350px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Miss-America-coronacion.jpeg?quality=100&amp;strip=info&amp;w=352&amp;h=199&amp;crop=1" alt="Miss Estados Unidos 2024" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/especiales/cnn-estilo/" title="CNN Estilo">
						CNN Estilo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/miss-usa-2024-oficial-fuerza-aerea-trax/" title="Coronan a oficial de la Fuerza Aérea como Miss America 2024">
				Coronan a oficial de la Fuerza Aérea como Miss America 2024			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1545370"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2024/01/08/galeria-globo-oro-alfombra-roja-2024-trax/" title="GALERÍA | Los mejores looks de la alfombra roja de los Globo de Oro 2024">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Globos de Oro" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Galeria-alfombra-roja-Globo-de-Oro-2024-1-e1704694935944.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Galeria-alfombra-roja-Globo-de-Oro-2024-1-e1704694935944.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Galeria-alfombra-roja-Globo-de-Oro-2024-1-e1704694935944.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Galeria-alfombra-roja-Globo-de-Oro-2024-1-e1704694935944.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Globos de Oro" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/especiales/cnn-estilo/" title="CNN Estilo">
						CNN Estilo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/08/galeria-globo-oro-alfombra-roja-2024-trax/" title="GALERÍA | Los mejores looks de la alfombra roja de los Globo de Oro 2024">
				GALERÍA | Los mejores looks de la alfombra roja de los Globo de Oro 2024			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--post" 
	id="article-1522517"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/2023/12/24/grinch-pelicula-navidad-favoritas-mundo-moda-rita-ryack-trax/" title="Cómo &#039;El Grinch&#039; se volvió una película favorita en el mundo de la moda">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Grinch moda" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/Grinch-Moda-Rita-Ryacks-Oscar-e1702547527332.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/Grinch-Moda-Rita-Ryacks-Oscar-e1702547527332.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/Grinch-Moda-Rita-Ryacks-Oscar-e1702547527332.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/Grinch-Moda-Rita-Ryacks-Oscar-e1702547527332.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Grinch moda" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/especiales/cnn-estilo/" title="CNN Estilo">
						CNN Estilo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/24/grinch-pelicula-navidad-favoritas-mundo-moda-rita-ryack-trax/" title="Cómo &#039;El Grinch&#039; se volvió una película favorita en el mundo de la moda">
				Cómo &#039;El Grinch&#039; se volvió una película favorita en el mundo de la moda			</a>
		</h2>
				
			</div>

</article>
							
<article class="news news--box news--box-style-two  news--summary news--105x60 news--with-border-bottom post-type--video" 
	id="article-1484257"
	data-pc=""
			data-video-autostart="false"
		data-video-autoplay-muted="false"
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/video/opinion-bucket-list-empatia-pandemia-ichaso-cafe-tv/" title="OPINIÓN | Los cambios en el &quot;bucket list&quot; tras la pandemia">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Opinión | Los cambios en el &quot;bucket list&quot; tras la pandemia" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231027104004-opinion-bucket-list-empatia-pandemia-ichaso-cafe-tv-00014822-full-169.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231027104004-opinion-bucket-list-empatia-pandemia-ichaso-cafe-tv-00014822-full-169.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" data-lazy-sizes="( min-width: 300px ) 105px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231027104004-opinion-bucket-list-empatia-pandemia-ichaso-cafe-tv-00014822-full-169.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1 105w" sizes="( min-width: 300px ) 105px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/231027104004-opinion-bucket-list-empatia-pandemia-ichaso-cafe-tv-00014822-full-169.jpeg?quality=100&amp;strip=info&amp;w=105&amp;h=60&amp;crop=1" alt="Opinión | Los cambios en el &quot;bucket list&quot; tras la pandemia" /></noscript> 

													<span class="news__videotime">
								<span class="news__videoicon"></span>
															</span>
												</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
											<a href="https://cnnespanol.cnn.com/category/especiales/cnn-estilo/" title="CNN Estilo">
						CNN Estilo							</a>
									</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/video/opinion-bucket-list-empatia-pandemia-ichaso-cafe-tv/" title="OPINIÓN | Los cambios en el &quot;bucket list&quot; tras la pandemia">
				OPINIÓN | Los cambios en el &quot;bucket list&quot; tras la pandemia			</a>
		</h2>
				
			</div>

</article>
												</div>

				</div>
			</div>
		
	</div>
</div>
	<!-- start HP opinion module -->
	<div class="row dp_zn12"  data-using-transient >
		<div class="mod mod--opinion mod--slider-style-two">

			<div class="mod__header">
				<h2 class="mod__title mod__title--bottom-line-center">
											<a href="https://cnnespanol.cnn.com/seccion/opinion/" title="Opinión">
							Opinión						</a>
									</h2>
			</div>

			<div class="mod__content swiper-slider" data-swiper="{slidesPerView:'5',spaceBetween:8, breakpoints: { 1000: { slidesPerView: 4, spaceBetween: 8 }, 900: { slidesPerView: 3, spaceBetween: 24 } } , pagination:{el:'.swiper-pagination',type:'bullets',clickable:true}}">
				<div class="cnne-swiper-container swiper-container">
					<div class="swiper-wrapper">
						
												<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1549266"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/jorge/" title="Jorge Dávila Miguel">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2015/05/jorge-davila-2-e1568145836946.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2015/05/jorge-davila-2-e1568145836946.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2015/05/jorge-davila-2-e1568145836946.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2015/05/jorge-davila-2-e1568145836946.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/jorge/" title="Jorge Dávila Miguel">Jorge Dávila Miguel</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/15/iowa-primaras-estados-unidos-columna-jorge-davila-orix/" title="OPINIÓN | Iowa es el faro del camino">
				OPINIÓN | Iowa es el faro del camino			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1548299"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/mari-rodriguez-ichaso/" title="Mari Rodríguez Ichaso">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/mari-rodriguez-ichaso/" title="Mari Rodríguez Ichaso">Mari Rodríguez Ichaso</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/12/opinion-eres-fan-de-la-ropa-usada-o-pre-loved-es-un-nuevo-estilo-de-vida/" title="OPINIÓN | ¿Eres fan de la ropa usada? ¡Es un nuevo estilo de vida!">
				OPINIÓN | ¿Eres fan de la ropa usada? ¡Es un nuevo estilo de vida!			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1546545"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/wendy-guerra/" title="Wendy Guerra">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2021/09/Wendy-Guerra-2-OK.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2021/09/Wendy-Guerra-2-OK.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2021/09/Wendy-Guerra-2-OK.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2021/09/Wendy-Guerra-2-OK.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/wendy-guerra/" title="Wendy Guerra">Wendy Guerra</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/09/jaque-mate-a-la-reina-orix/" title="OPINIÓN | Jaque mate a la reina">
				OPINIÓN | Jaque mate a la reina			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1543050"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/mari-rodriguez-ichaso/" title="Mari Rodríguez Ichaso">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/ichaso-e1593100066645.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/mari-rodriguez-ichaso/" title="Mari Rodríguez Ichaso">Mari Rodríguez Ichaso</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2024/01/02/moda-2024-con-absoluta-libertad-orix/" title="OPINIÓN: Moda 2024 ¡con absoluta libertad!">
				OPINIÓN: Moda 2024 ¡con absoluta libertad!			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1536679"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/frida-ghitis/" title="Frida Ghitis">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/frida-ghitis/" title="Frida Ghitis">Frida Ghitis</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/29/opinion-ghitis-grandes-riesgos-mundo-2024-trax/" title="OPINIÓN | Los grandes riesgos a los que se enfrentará el mundo en 2024">
				OPINIÓN | Los grandes riesgos a los que se enfrentará el mundo en 2024			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1535505"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/ken-dorph/" title="Ken Dorph">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="Ken Dorph" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231223125627-op-ed-use-only-ken-dorph-headshot.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231223125627-op-ed-use-only-ken-dorph-headshot.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231223125627-op-ed-use-only-ken-dorph-headshot.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231223125627-op-ed-use-only-ken-dorph-headshot.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="Ken Dorph" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/ken-dorph/" title="Ken Dorph">Ken Dorph</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/25/opinion-critique-guerra-gaza-despedido-santa-claus-trax/" title="OPINIÓN | Critiqué la guerra en Gaza y me despidieron como Santa Claus">
				OPINIÓN | Critiqué la guerra en Gaza y me despidieron como Santa Claus			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1529891"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/jorge-g-castaneda/" title="Jorge G. Castañeda">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/castaneda2-e1593099774496.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/castaneda2-e1593099774496.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/castaneda2-e1593099774496.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2020/03/castaneda2-e1593099774496.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/jorge-g-castaneda/" title="Jorge G. Castañeda">Jorge G. Castañeda</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/21/opinion-castaneda-ensenanzas-fracaso-chile-orix/" title="OPINIÓN | Las enseñanzas del fracaso de Chile">
				OPINIÓN | Las enseñanzas del fracaso de Chile			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1528739"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/frida-ghitis/" title="Frida Ghitis">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2015/04/frida-ghitis-thumbnail.png?w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/frida-ghitis/" title="Frida Ghitis">Frida Ghitis</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/20/opinion-ghitis-hielo-artico-amenaza-rusia-china-trax/" title="OPINIÓN | El deshielo del Ártico plantea una nueva amenaza ruso-china">
				OPINIÓN | El deshielo del Ártico plantea una nueva amenaza ruso-china			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1527871"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/bill-gates/" title="Bill Gates">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt="bill-gates-ia inteligenica artificial ai-gfx" data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/bill-gates-ia-inteligenica-artificial-ai-gfx.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/bill-gates-ia-inteligenica-artificial-ai-gfx.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/bill-gates-ia-inteligenica-artificial-ai-gfx.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/bill-gates-ia-inteligenica-artificial-ai-gfx.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="bill-gates-ia inteligenica artificial ai-gfx" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/bill-gates/" title="Bill Gates">Bill Gates</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/19/bill-gates-optimista-futuro-ia-opinion-trax/" title="Bill Gates: Por qué soy optimista sobre el futuro de la IA">
				Bill Gates: Por qué soy optimista sobre el futuro de la IA			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
														<div class="swiper-slide">

							
<article class="news news--box news--box-style-two  news--opinion post-type--post" 
	id="article-1527682"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/author/david-a-andelman/" title="David A. Andelman">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2016/12/170627165217-david-andelman-profile-large-tease-e1583865064298.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2016/12/170627165217-david-andelman-profile-large-tease-e1583865064298.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" data-lazy-sizes="( min-width: 300px ) 80px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2016/12/170627165217-david-andelman-profile-large-tease-e1583865064298.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1 80w" sizes="( min-width: 300px ) 80px" src="https://cnnespanol.cnn.com/wp-content/uploads/2016/12/170627165217-david-andelman-profile-large-tease-e1583865064298.jpg?quality=100&amp;strip=info&amp;w=80&amp;h=80&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
					<span class="news__label">
				<a href="https://cnnespanol.cnn.com/author/david-a-andelman/" title="David A. Andelman">David A. Andelman</a>			</span>
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/2023/12/18/opinion-elecciones-2024-conmocionar-mundo-trax/" title="OPINIÓN | Prepárate: las elecciones de 2024 podrían conmocionar al mundo">
				OPINIÓN | Prepárate: las elecciones de 2024 podrían conmocionar al mundo			</a>
		</h2>
				
			</div>

</article>
															
							</div><!-- end .swiper-slide -->
												</div>
					<div class="swiper-actions">
						<div class="swiper-button-prev"></div>
						<div class="swiper-pagination"></div>
						<div class="swiper-button-next"></div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- end HP opinion module -->
	<div class="ovf-h dp_zn13">
		<div class="mod mod--slider-style-two mod--photogallery">
			
			<div class="mod__content swiper-slider" data-swiper="{pagination:{el:'.swiper-pagination',type:'bullets',clickable:true},autoplay:{delay:3000},speed:1500,loop:true}">
				<div class="cnne-swiper-container swiper-container">
					<div class="swiper-wrapper">

						
								<div class="swiper-slide">
									<div class="mod__header">
										<h2 class="mod__title">Fotogalería</h2>
									</div>

								
<article class="news news--box news--box-style-none  news--45-11 news--innerbox post-type--post" 
	id="article-1544748"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/gallery/galeria-famosos-muertos-2024-orix/" title="FOTOS | Los famosos que han muerto en 2024">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/famosos-muertos-2024.jpg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/famosos-muertos-2024.jpg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1 1330w" data-lazy-sizes="( min-width: 300px ) 1330px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/famosos-muertos-2024.jpg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1 1330w" sizes="( min-width: 300px ) 1330px" src="https://cnnespanol.cnn.com/wp-content/uploads/2024/01/famosos-muertos-2024.jpg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/gallery/galeria-famosos-muertos-2024-orix/" title="FOTOS | Los famosos que han muerto en 2024">
				FOTOS | Los famosos que han muerto en 2024			</a>
		</h2>
					<div class="news__excerpt">
				<p>Desde la leyenda del fútbol Franz Beckenbauer a Glynis Johns, actriz británica recordada por su papel de Mrs. Banks en “Mary Poppins”, estos son algunos de los famosos que han muerto en lo que va de 2024.</p>
			</div>
				
			</div>

</article>
																	
								</div><!-- end swiper-slide -->
								
								<div class="swiper-slide">
									<div class="mod__header">
										<h2 class="mod__title">Fotogalería</h2>
									</div>

								
<article class="news news--box news--box-style-none  news--45-11 news--innerbox post-type--post" 
	id="article-1508513"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/gallery/fotos-galeria-hotel-mas-angosto-del-mundo-indonesia-trax/" title="Fotos del hotel más angosto del mundo, ubicado en Indonesia">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/11/Galeria-hotel-angosto-piturooms-indonesia-CNN-8-e1700039601248.jpeg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/11/Galeria-hotel-angosto-piturooms-indonesia-CNN-8-e1700039601248.jpeg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1 1330w" data-lazy-sizes="( min-width: 300px ) 1330px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/11/Galeria-hotel-angosto-piturooms-indonesia-CNN-8-e1700039601248.jpeg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1 1330w" sizes="( min-width: 300px ) 1330px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/11/Galeria-hotel-angosto-piturooms-indonesia-CNN-8-e1700039601248.jpeg?quality=100&amp;strip=info&amp;w=1330&amp;h=600&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/gallery/fotos-galeria-hotel-mas-angosto-del-mundo-indonesia-trax/" title="Fotos del hotel más angosto del mundo, ubicado en Indonesia">
				Fotos del hotel más angosto del mundo, ubicado en Indonesia			</a>
		</h2>
					<div class="news__excerpt">
				<p>El PituRooms, que se quiere hacer con el título del más angosto del mundo, tiene cinco plantas y cada una de las siete habitaciones tiene capacidad para una cama doble y un pequeño cuarto de baño con ducha e inodoro.</p>
			</div>
				
			</div>

</article>
																	
								</div><!-- end swiper-slide -->
								
								<div class="swiper-slide">
									<div class="mod__header">
										<h2 class="mod__title">Fotogalería</h2>
									</div>

								
<article class="news news--box news--box-style-none  news--45-11 news--innerbox post-type--post" 
	id="article-715942"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/gallery/ganadores-nobel-de-paz-fotos-ultimos-20-anos-por-que-lo-ganaron/" title="Los ganadores del Nobel de la Paz de las últimas décadas">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2014/10/130912132101-malala-yousafzai-birmingham-amanpour-story-top.jpg?quality=100&amp;strip=info&amp;w=640&amp;h=360&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2014/10/130912132101-malala-yousafzai-birmingham-amanpour-story-top.jpg?quality=100&amp;strip=info&amp;w=640&amp;h=360&amp;crop=1 640w" data-lazy-sizes="( min-width: 300px ) 1330px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2014/10/130912132101-malala-yousafzai-birmingham-amanpour-story-top.jpg?quality=100&amp;strip=info&amp;w=640&amp;h=360&amp;crop=1 640w" sizes="( min-width: 300px ) 1330px" src="https://cnnespanol.cnn.com/wp-content/uploads/2014/10/130912132101-malala-yousafzai-birmingham-amanpour-story-top.jpg?quality=100&amp;strip=info&amp;w=640&amp;h=360&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/gallery/ganadores-nobel-de-paz-fotos-ultimos-20-anos-por-que-lo-ganaron/" title="Los ganadores del Nobel de la Paz de las últimas décadas">
				Los ganadores del Nobel de la Paz de las últimas décadas			</a>
		</h2>
					<div class="news__excerpt">
				<p>Desde instituciones hasta expresidentes y activistas de todos los rincones del mundo, te contamos quiénes han sido los ganadores del premio Nobel de Paz desde 1999 y por qué se los dieron, según las mismas palabras del Comité del Nobel.</p>
			</div>
				
			</div>

</article>
																	
								</div><!-- end swiper-slide -->
								
								<div class="swiper-slide">
									<div class="mod__header">
										<h2 class="mod__title">Fotogalería</h2>
									</div>

								
<article class="news news--box news--box-style-none  news--45-11 news--innerbox post-type--post" 
	id="article-1541937"
	data-pc=""
		>
			<div class="news__media">

																		<a class="news__media-item" href="https://cnnespanol.cnn.com/gallery/fotos-especies-nuevas-2023-trax/" title="FOTOS: las nuevas especies descubiertas por la ciencia en 2023">
					
					<img class="image" src="https://cnnespanol.cnn.com/wp-content/plugins/lazy-load-0.7/images/1x1.trans.gif" alt data-lazy-src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231228133104-03-new-species-of-2023.jpg?quality=100&amp;strip=info&amp;w=1167&amp;h=600&amp;crop=1" data-lazy-srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231228133104-03-new-species-of-2023.jpg?quality=100&amp;strip=info&amp;w=1167&amp;h=600&amp;crop=1 1167w" data-lazy-sizes="( min-width: 300px ) 1330px"><noscript><img class="image" srcset="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231228133104-03-new-species-of-2023.jpg?quality=100&amp;strip=info&amp;w=1167&amp;h=600&amp;crop=1 1167w" sizes="( min-width: 300px ) 1330px" src="https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231228133104-03-new-species-of-2023.jpg?quality=100&amp;strip=info&amp;w=1167&amp;h=600&amp;crop=1" alt="" /></noscript> 

											</a>
				
								
			

		</div>
	
	<div class="news__data">
		
		<h2 class="news__title">
			<a href="https://cnnespanol.cnn.com/gallery/fotos-especies-nuevas-2023-trax/" title="FOTOS: las nuevas especies descubiertas por la ciencia en 2023">
				FOTOS: las nuevas especies descubiertas por la ciencia en 2023			</a>
		</h2>
					<div class="news__excerpt">
				<p>Científicos del Museo de Historia Natural de Londres y la Academia de Ciencias de California descubrieron casi 1.000 nuevas especies en 2023, lo que demuestra que la Tierra todavía alberga muchas maravillas inexploradas.</p>
			</div>
				
			</div>

</article>
																	
								</div><!-- end swiper-slide -->
								
					</div>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
				</div>
			</div>
		</div>
	</div>
		
	</main><!-- end main.main -->

		<script>
			(function ($j, win, doc, undef) {
				'use strict';
				/**> Set video_embed_count **/
				if (win.cnn_metadata === undef) {
					win.cnn_metadata = {};
				}
				$j.extend(true, win.cnn_metadata, {"business":{"cnn":{"page":{"video_embed_count":2}}}});
			}(jQuery, window, document, undefined));
		</script>
		<footer id="footer-primary" class="site-footer-style-two">
		<div class="row">

			<div class="banner banner--mb-30">
				
	<div class="wrap-ad">
		<div id="ad_bnr_btf_01" class="ad"></div>
	</div>

			</div>

			<div class="OUTBRAIN" data-src="http://cnnespanol.cnn.com" data-widget-id="AR_7" data-ob-template="cnnenespanol" ></div>

			<div class="site-logo-wrapper">
				<a class="site-logo" href="https://cnnespanol.cnn.com/" title="Ir a CNNEspañol.com">
					<span class="cnnicon cnnicon--cnne"></span>
				</a>
			</div>
			<div class="nav-footer nav-footer--primary"><ul><li class="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-467157 section-estados-unidos"><a href="https://cnnespanol.cnn.com/seccion/estados-unidos/">EE.UU.</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-455697 section-mundo"><a href="https://cnnespanol.cnn.com/seccion/mundo/">Mundo</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1470743"><a href="https://cnnespanol.cnn.com/category/medio-oriente/israel/">Israel</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431377"><a href="https://cnnespanol.cnn.com/category/mexico/">México</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431378"><a href="https://cnnespanol.cnn.com/category/zona-andina/colombia/">Colombia</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431379"><a href="https://cnnespanol.cnn.com/category/cono-sur/argentina/">Argentina</a></li>
<li class="latam-menu-item menu-item menu-item-type-taxonomy menu-item-object-section menu-item-467148 section-latinoamerica"><a href="https://cnnespanol.cnn.com/seccion/latinoamerica/">Latam</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-899003 section-economia-y-negocios"><a href="https://cnnespanol.cnn.com/seccion/economia-y-negocios/">Negocios</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431380"><a href="https://cnnespanol.cnn.com/seccion/clima/">Clima</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-467158 section-entretenimiento"><a href="https://cnnespanol.cnn.com/seccion/entretenimiento/">Entretenimiento</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-455706 page-Video"><a href="https://cnnespanol.cnn.com/video/">Video</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1317941"><a href="https://cnnespanol.cnn.com/seccion/deportes/">Deportes</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-467160 section-salud"><a href="https://cnnespanol.cnn.com/seccion/salud/">Salud</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-467159 section-tecnologia"><a href="https://cnnespanol.cnn.com/seccion/tecnologia/">Tecno</a></li>
</ul></div>			
			<div class="share-buttons-style-two">

	<span>Síguenos</span>

			<a class="cnnicon cnnicon--facebook-square" href="https://www.facebook.com/CNNee" title="Síguenos en Facebook" rel="nofollow" target="_blank"></a>
	
			<a class="cnnicon cnnicon--twitter" href="https://twitter.com/CNNee" title="Síguenos en Twitter" rel="nofollow" target="_blank">
			<img class="cnnicon__img" src="https://cnnespanol.cnn.com/wp-content/themes/cnnespanol/static/images/x-logo-blk.png" alt="">
		</a>
	
			<a class="cnnicon cnnicon--instagram" href="https://www.instagram.com/cnnee/" title="Síguenos en Instagram" rel="nofollow" target="_blank"></a>
	
	<a class="cnnicon cnnicon--youtube" href="https://www.youtube.com/cnnee" title="Síguenos en Youtube" rel="nofollow" target="_blank">
		<img class="cnnicon__img" src="https://cnnespanol.cnn.com/wp-content/themes/cnnespanol/static/images/icono-youtube.svg" alt="">
	</a>
</div>

			<div class="footer-inner">
				
<div id="colophon" class="footer colophon  ">
	<p>
		<span>&copy; 2024 Cable News Network.</span>
		<span>A Warner Bros. Discovery Company.</span>
		<span>All Rights Reserved.</span>
	</p>
	<p>
		<span>CNN Sans &trade; &amp; &copy; 2024 Cable News Network. </span>
	</p>
			<span><a href="https://cnnespanol.cnn.com/condiciones-de-uso-actualizadas-de-aplicaciones-moviles-y-sitio-web/">Condiciones de uso</a></span>
				<span><a href="https://cnnespanol.cnn.com/anunciese/">An&uacute;nciate</a></span>
				<span><a href="https://www.warnermediaprivacy.com/policycenter/b2c/WMNS/">Privacidad</a></span>
				<span><a href="https://cnnespanol.cnn.com/contactanos/">Cont&aacute;ctanos</a></span>
				<span><a href="https://www.warnermediaprivacy.com/policycenter/b2c/WMNS/">Elecciones de anuncios</a></span>
				<span class="vipfooter">Powered by <a href="https://wpvip.com/?utm_source=vip_powered_wpcom&#038;utm_medium=web&#038;utm_campaign=VIP%20Footer%20Credit&#038;utm_term=cnnespanol.cnn.com" rel="generator nofollow" class="powered-by-wpcom">WordPress VIP</a></span>
	</div>
			</div>

				<script type="text/javascript">
		// get global WM
		window.WM = window.WM || {};
		WM.UserConsent = window.WM.UserConsent || {};
		// if not empty string, then display <a> tag and set text inside with result
		if ( '' !== WM.UserConsent.getLinkTitle() ) {

			var aTag = document.createElement('a'); // create <a> tag
			aTag.className = 'optanon-show-settings'; // set class
			aTag.innerHTML = WM.UserConsent.getLinkTitle(); // set text inside
			aTag.onClick = WM.UserConsent.getLinkAction(); // set onClick action (defaults to Preference Center)
			
			if ( !! document.getElementById('colophon') ) { // if element exists, then append to it!
				// add to links in colophon
				document.getElementById('colophon').appendChild(aTag);
			} else if ( !! document.getElementById('colophon-mobile') ) {
				// add to links in colophon-mobile
				document.getElementById('colophon-mobile').appendChild(aTag);
			}
		}
	</script>

			<a class="go-top cnnicon cnnicon--arrow-up nav-secundary--active" href="#go-top" title="Subir">Subir</a>
		</div>
	</footer>

	</div><!-- /.template__bg -->
		
	<!-- Adobe Launch Tag -->
<script>
		
	var src = 'https:' + '//lightning.cnn.com/launch/7be62238e4c3/5c068b797a4b/launch-ba84c3c145ad.min.js',
		loadAdobeLaunch = function loadAdobeLaunch( src ) {
			var e = document.createElement('script');
			e.setAttribute('id', 'adobe-launch-script');
			e.setAttribute('src', src);
			e.setAttribute('type', 'text/javascript');
			
			document.body.appendChild(e);
		};
	// append the Adobe Launch script
	loadAdobeLaunch(src);
</script>
<!-- End Adobe Launch tag -->
<script type="text/javascript">
		var cnn_metadata = {"name":"cnn international","template_type":"other:blog front","content_type":"adbp:none"};
	
	// set presentation template from viewport width
	var cnneBreakpoints = {"tabletMin":640,"desktopMin":1120};
	if ( typeof cnneBreakpoints.tabletMin !== 'undefined' && typeof cnneBreakpoints.desktopMin !== 'undefined' ){
		var presentationTemplate = 'mobile';
		if ( window.innerWidth >= cnneBreakpoints.desktopMin ) {
			presentationTemplate = 'desktop';
		} else if ( window.innerWidth >= cnneBreakpoints.tabletMin ) {
			presentationTemplate = 'tablet';
		}
		// this location in cnn_metadata is incorrect but the correct location is not found in jsmd-qa.js
		cnn_metadata.presentation_template = presentationTemplate;
	}

	// set orientation from viewport width vs height
	cnn_metadata.orientation = window.innerHeight >= window.innerWidth ? 'portrait' : 'landscape';

	// set branding option from WordPress to filename of logo image
	var logo = jQuery( '.brand-logo > img' );
	if ( logo.length > 0 ) {
		cnn_metadata.branding_ad = jQuery( logo ).first().attr( 'alt' );
	}

</script>

		<!-- Quantcast Tag -->
		<script type="text/javascript">
		var _qevents = _qevents || [],
			quantSrc = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
		// WM OneTrust / CCPA compatible script adding; checks user consent for vendor, measure-content before adding script
		window.WM.UserConsent.addScript({
			id: "js-quantcast",
			async: true,
			src: quantSrc
		}, ['vendor', 'measure-content']);

		_qevents.push({
		qacct:"p-D1yc5zQgjmqr5"
		});
		</script>

		<noscript>
		<div style="display:none;">
		<img src="//pixel.quantserve.com/pixel/p-D1yc5zQgjmqr5.gif" border="0" height="1" width="1" alt="Quantcast"/>
		</div>
		</noscript>
		<!-- End Quantcast tag -->
	
				<script type="text/javascript">
					 _sf_async_config.authors = "";
			_sf_async_config.sections = [""];
						window._sf_endpt=(new Date()).getTime();
				window.WM.UserConsent.addScript({
					id: "js-chartbeat",
					src: "https:\/\/static.chartbeat.com\/js\/chartbeat.js"				}, ['data-store', 'content-person', 'measure-content'] );
			</script>
	<script type="text/javascript" id="production-js-extra">
/* <![CDATA[ */
var ajaxurl = {"ajaxurl":"https:\/\/cnnespanol.cnn.com\/wp-admin\/admin-ajax.php"};
var newsletter = {"nonce":"56ffebd99a"};
var sharing = {"whatsappText":"Click to share with WhatsApp"};
var cnneAdBreakpoints = ["1120","960","640","480","320"];
/* ]]> */
</script>
<script type="text/javascript" src="https://cnnespanol.cnn.com/_static/??-eJx1zNEKwjAMheEXcksHE/FCfJaZZiylTWuTIL69260wOJfff+DTBhbMHkkh7Xs79S84A9ZOY2EZk17gVNG6EtqZc4nU9f8JqxiJgW1UdocipG2RmkFtMUZ4Oed49FsbWq/R0bge+bM8pluY7uEa5jn9ANIxRLA=" ></script><script>
					window.WM.UserConsent.addScript({
						id: "js-" + decodeURIComponent( "outbrain-js" ),
						async: decodeURIComponent(""),
						defer: decodeURIComponent(""),
						src: "\/\/widgets.outbrain.com\/outbrain.js?ver=6.4.2"
						}, ['iab', 'vendor', 'data-store', 'ads-contextual', 'ads-person-prof', 'ads-person', 'content-person-prof', 'content-person', 'measure-ads', 'measure-content', 'measure-market', 'product-develop'] );
				</script><script>
					window.WM.UserConsent.addScript({
						id: "js-" + decodeURIComponent( "sharethrough-js" ),
						async: decodeURIComponent(""),
						defer: decodeURIComponent(""),
						src: "\/\/native.sharethrough.com\/assets\/sfp.js?ver=6.4.2"
						}, ['iab', 'vendor'] );
				</script><script>
					window.WM.UserConsent.addScript({
						id: "js-" + decodeURIComponent( "zeta" ),
						async: decodeURIComponent("1"),
						defer: decodeURIComponent(""),
						src: "\/\/cdn.boomtrain.com\/p13n\/cnn\/p13n.min.js"
						}, ['vendor', 'data-store', 'ads-contextual', 'ads-person-prof', 'ads-person', 'content-person-prof', 'content-person', 'measure-ads', 'measure-content', 'measure-market', 'product-develop'] );
				</script><script type="text/javascript" src="https://cnnespanol.cnn.com/_static/??-eJzTLy/QTc7PK0nNK9EvyClNz8wr1s9JrKrUzclPTNE10DPXzyrWzyosTS2q1CvOz0ss0svNzNPLKtbRJ0YjXACowz7X1tDMwsLE3MTQ1CQLAFPKKeY=" ></script><script defer type="text/javascript" src="https://stats.wp.com/e-202403.js" id="jetpack-stats-js"></script>
<script type="text/javascript" id="jetpack-stats-js-after">
/* <![CDATA[ */
_stq = window._stq || [];
_stq.push([ "view", {v:'ext',blog:'171757394',post:'153839',tz:'-5',srv:'cnnespanol.cnn.com',hp:'vip',j:'1:12.9.3'} ]);
_stq.push([ "clickTrackerInit", "171757394", "153839" ]);
/* ]]> */
</script>
<script type="text/javascript" id="js-viglink">
					var vglnk = { key: "18ad939d9fb5d59cc1cdb7878526937c" };
					// use WM.UserConsent.addScript
						window.WM.UserConsent.addScript({
							async: true,
							src: "//cdn.viglink.com/api/vglnk.js"
						}, ['vendor', 'data-store', 'measure-content']);
			</script>	
	<div id="ad_oop_float_01" class="cnn_adtag cnn_adtag--dfp"></div>

	</body>
</html>
