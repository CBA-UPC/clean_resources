                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  (c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){d.headers[e]=r.merge(l)})),e.exports=d},7874:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(e){e.exports={version:"0.27.2"}},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:function(e,t,n){"use strict";var r=n(4867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},7985:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},6016:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},1623:function(e){e.exports=null},4109:function(e,t,n){"use strict";var r=n(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},205:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){t=t||new FormData;var n=[];function i(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(s,o){if(r.isPlainObject(s)||r.isArray(s)){if(-1!==n.indexOf(s))throw Error("Circular reference detected in "+o);n.push(s),r.forEach(s,(function(n,s){if(!r.isUndefined(n)){var a,l=o?o+"."+s:s;if(n&&!o&&"object"==typeof n)if(r.endsWith(s,"{}"))n=JSON.stringify(n);else if(r.endsWith(s,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(l,i(e))}));e(n,l)}})),n.pop()}else t.append(o,i(s))}(e),t}},4875:function(e,t,n){"use strict";var r=n(7288).version,i=n(2648),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};s.transitional=function(e,t,n){function s(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new i(s(r," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!o[r]&&(o[r]=!0,console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),s=r.length;s-- >0;){var o=r[s],a=t[o];if(a){var l=e[o],c=void 0===l||a(l,o,e);if(!0!==c)throw new i("option "+o+" must be "+c,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+o,i.ERR_BAD_OPTION)}},validators:s}},4867:function(e,t,n){"use strict";var r,i=n(1849),s=Object.prototype.toString,o=(r=Object.create(null),function(e){var t=s.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function l(e){return Array.isArray(e)}function c(e){return void 0===e}var u=a("ArrayBuffer");function d(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var f=a("Date"),h=a("File"),m=a("Blob"),g=a("FileList");function v(e){return"[object Function]"===s.call(e)}var y=a("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),l(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,x=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:l,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:p,isUndefined:c,isDate:f,isFile:h,isBlob:m,isFunction:v,isStream:function(e){return d(e)&&v(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:b,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):l(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)b(arguments[r],n);return t},extend:function(e,t,n){return b(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,s,o={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)o[s=r[i]]||(t[s]=e[s],o[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:x,isFileList:g}},9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;null==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},1530:function(e,t,n){"use strict";var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112)("toStringTag"),a=Object,l="Arguments"==s(function(){return arguments}());e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=a(e),o))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var d=a[u];r(e,d)||n&&r(n,d)||l(e,d,c(t,d))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4994:function(e,t,n){"use strict";var r=n(3383).IteratorPrototype,i=n(30),s=n(9114),o=n(8003),a=n(7497),l=function(){return this};e.exports=function(e,t,n,c){var u=t+" Iterator";return e.prototype=i(r,{next:s(+!c,n)}),o(e,u,!1,!0),a[u]=l,e}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(e){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},654:function(e,t,n){"use strict";var r=n(2109),i=n(6916),s=n(1913),o=n(6530),a=n(614),l=n(4994),c=n(9518),u=n(7674),d=n(8003),p=n(8880),f=n(8052),h=n(5112),m=n(7497),g=n(3383),v=o.PROPER,y=o.CONFIGURABLE,b=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,x=h("iterator"),S="keys",E="values",T="entries",C=function(){return this};e.exports=function(e,t,n,o,h,g,O){l(n,t,o);var k,A,L,M=function(e){if(e===h&&D)return D;if(!w&&e in N)return N[e];switch(e){case S:case E:case T:return function(){return new n(this,e)}}return function(){return new n(this)}},P=t+" Iterator",_=!1,N=e.prototype,R=N[x]||N["@@iterator"]||h&&N[h],D=!w&&R||M(h),I="Array"==t&&N.entries||R;if(I&&(k=c(I.call(new e)))!==Object.prototype&&k.next&&(s||c(k)===b||(u?u(k,b):a(k[x])||f(k,x,C)),d(k,P,!0,!0),s&&(m[P]=C)),v&&h==E&&R&&R.name!==E&&(!s&&y?p(N,"name",E):(_=!0,D=function(){return i(R,this)})),h)if(A={values:M(E),keys:g?D:M(S),entries:M(T)},O)for(L in A)(w||_||!(L in N))&&f(N,L,A[L]);else r({target:t,proto:!0,forced:w||_},A);return s&&!O||N[x]===D||f(N,x,D,{name:h}),m[t]=D,A}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},8324:function(e){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(e,t,n){var r=n(317)("span").classList,i=r&&r.constructor&&r.constructor.prototype;e.exports=i===Object.prototype?void 0:i},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=(r=u.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(i=+r[1]),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),l=n(9920),c=n(4705);e.exports=function(e,t){var n,u,d,p,f,h=e.target,m=e.global,g=e.stat;if(n=m?r:g?r[h]||a(h,{}):(r[h]||{}).prototype)for(u in t){if(p=t[u],d=e.dontCallGetSet?(f=i(n,u))&&f.value:n[u],!c(m?u:h+(g?".":"#")+u,e.forced)&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(e.sham||d&&d.sham)&&s(p,"sham",!0),o(n,u,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},7007:function(e,t,n){"use strict";n(4916);var r=n(1702),i=n(8052),s=n(2261),o=n(7293),a=n(5112),l=n(8880),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var p=a(e),f=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!f||!h||n){var m=r(/./[p]),g=t(p,""[e],(function(e,t,n,i,o){var a=r(e),l=t.exec;return l===s||l===u.exec?f&&!o?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,g[0]),i(u,p,g[1])}d&&l(u[p],"sham",!0)}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},647:function(e,t,n){var r=n(1702),i=n(7908),s=Math.floor,o=r("".charAt),a=r("".replace),l=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,p){var f=n+e.length,h=r.length,m=u;return void 0!==d&&(d=i(d),m=c),a(p,m,(function(i,a){var c;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,f);case"<":c=d[l(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>h){var p=s(u/10);return 0===p?i:p<=h?void 0===r[p-1]?o(a,1):r[p-1]+o(a,1):i}c=r[u-1]}return void 0===c?"":c}))}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(8536),a=n(7854),l=n(1702),c=n(111),u=n(8880),d=n(2597),p=n(5465),f=n(6200),h=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap;if(o||p.state){var y=p.state||(p.state=new v),b=l(y.get),w=l(y.has),x=l(y.set);r=function(e,t){if(w(y,e))throw new g(m);return t.facade=e,x(y,e,t),t},i=function(e){return b(y,e)||{}},s=function(e){return w(y,e)}}else{var S=f("state");h[S]=!0,r=function(e,t){if(d(e,S))throw new g(m);return t.facade=e,u(e,S,t),t},i=function(e){return d(e,S)?e[S]:{}},s=function(e){return d(e,S)}}e.exports={set:r,get:i,has:s,enforce:function(e){return s(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},3383:function(e,t,n){"use strict";var r,i,s,o=n(7293),a=n(614),l=n(30),c=n(9518),u=n(8052),d=n(5112),p=n(1913),f=d("iterator"),h=!1;[].keys&&("next"in(s=[].keys())?(i=c(c(s)))!==Object.prototype&&(r=i):h=!0),null==r||o((function(){var e={};return r[f].call(e)!==e}))?r={}:p&&(r=l(r)),a(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},7497:function(e){e.exports={}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,l=n(2788),c=n(9909),u=c.enforce,d=c.get,p=Object.defineProperty,f=o&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),h=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?p(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=u(e);return s(r,"source")||(r.source=h.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&d(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},30:function(e,t,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),l=n(490),c=n(317),u=n(6200)("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"<\/script>"},f=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}var e,t;h="undefined"!=typeof document?document.domain&&r?f(r):((t=c("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):f(r);for(var n=o.length;n--;)delete h.prototype[o[n]];return h()};a[u]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=i(e),n=new d,d.prototype=null,n[u]=e):n=h(),void 0===t?n:s.f(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),l=n(1956);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);for(var n,r=a(t),i=l(t),c=i.length,u=0;c>u;)s.f(e,n=i[u++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor;t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=u(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=l(t),u)try{return d(e,t)}catch(e){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),l=o("IE_PROTO"),c=Object,u=c.prototype;e.exports=a?c.getPrototypeOf:function(e){var t=s(e);if(r(t,l))return t[l];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof c?u:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);for(;t.length>c;)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},7651:function(e,t,n){var r=n(6916),i=n(9670),s=n(614),o=n(4326),a=n(2261),l=TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var c=r(n,e,t);return null!==c&&i(c),c}if("RegExp"===o(e))return r(a,e,t);throw l("RegExp#exec called on incompatible receiver")}},2261:function(e,t,n){"use strict";var r,i,s=n(6916),o=n(1702),a=n(1340),l=n(7066),c=n(2999),u=n(2309),d=n(30),p=n(9909).get,f=n(9441),h=n(7168),m=u("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,v=g,y=o("".charAt),b=o("".indexOf),w=o("".replace),x=o("".slice),S=(i=/b*/g,s(g,r=/a/,"a"),s(g,i,"a"),0!==r.lastIndex||0!==i.lastIndex),E=c.BROKEN_CARET,T=void 0!==/()??/.exec("")[1];(S||T||E||f||h)&&(v=function(e){var t,n,r,i,o,c,u,f=this,h=p(f),C=a(e),O=h.raw;if(O)return O.lastIndex=f.lastIndex,t=s(v,O,C),f.lastIndex=O.lastIndex,t;var k=h.groups,A=E&&f.sticky,L=s(l,f),M=f.source,P=0,_=C;if(A&&(L=w(L,"y",""),-1===b(L,"g")&&(L+="g"),_=x(C,f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==y(C,f.lastIndex-1))&&(M="(?: "+M+")",_=" "+_,P++),n=new RegExp("^(?:"+M+")",L)),T&&(n=new RegExp("^"+M+"$(?!\\s)",L)),S&&(r=f.lastIndex),i=s(g,A?n:f,_),A?i?(i.input=x(i.input,P),i[0]=x(i[0],P),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:S&&i&&(f.lastIndex=f.global?i.index+i[0].length:r),T&&i&&i.length>1&&s(m,i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i&&k)for(i.groups=c=d(null),o=0;o<k.length;o++)c[(u=k[o])[0]]=i[u[1]];return i}),e.exports=v},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){var r=n(7293),i=n(7854).RegExp,s=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=s||r((function(){return!i("a","y").sticky})),a=s||r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:a,MISSED_STICKY:o,UNSUPPORTED_Y:s}},9441:function(e,t,n){var r=n(7293),i=n(7854).RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,t,n){var r=n(7293),i=n(7854).RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4488:function(e){var t=TypeError;e.exports=function(e){if(null==e)throw t("Can't call method on "+e);return e}},8003:function(e,t,n){var r=n(3070).f,i=n(2597),s=n(5112)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:function(e,t,n){var r=n(1702),i=n(9303),s=n(1340),o=n(4488),a=r("".charAt),l=r("".charCodeAt),c=r("".slice),u=function(e){return function(t,n){var r,u,d=s(o(t)),p=i(n),f=d.length;return p<0||p>=f?e?"":void 0:(r=l(d,p))<55296||r>56319||p+1===f||(u=l(d,p+1))<56320||u>57343?e?a(d,p):r:e?c(d,p,p+2):u-56320+(r-55296<<10)+65536}};e.exports={codeAt:u(!1),charAt:u(!0)}},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),l=n(3307),c=i("wks"),u=r.Symbol,d=u&&u.for,p=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(u,e)?c[e]=u[e]:c[e]=l&&d?d(t):p(t)}return c[e]}},6992:function(e,t,n){"use strict";var r=n(5656),i=n(1223),s=n(7497),o=n(9909),a=n(3070).f,l=n(654),c=n(1913),u=n(9781),d="Array Iterator",p=o.set,f=o.getterFor(d);e.exports=l(Array,"Array",(function(e,t){p(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var h=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!c&&u&&"values"!==h.name)try{a(h,"name",{value:"values"})}catch(e){}},4916:function(e,t,n){"use strict";var r=n(2109),i=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},5306:function(e,t,n){"use strict";var r=n(2104),i=n(6916),s=n(1702),o=n(7007),a=n(7293),l=n(9670),c=n(614),u=n(9303),d=n(7466),p=n(1340),f=n(4488),h=n(1530),m=n(8173),g=n(647),v=n(7651),y=n(5112)("replace"),b=Math.max,w=Math.min,x=s([].concat),S=s([].push),E=s("".indexOf),T=s("".slice),C="$0"==="a".replace(/./,"$0"),O=!!/./[y]&&""===/./[y]("a","$0");o("replace",(function(e,t,n){var s=O?"$":"$0";return[function(e,n){var r=f(this),s=null==e?void 0:m(e,y);return s?i(s,e,r,n):i(t,p(r),e,n)},function(e,i){var o=l(this),a=p(e);if("string"==typeof i&&-1===E(i,s)&&-1===E(i,"$<")){var f=n(t,o,a,i);if(f.done)return f.value}var m=c(i);m||(i=p(i));var y=o.global;if(y){var C=o.unicode;o.lastIndex=0}for(var O=[];;){var k=v(o,a);if(null===k)break;if(S(O,k),!y)break;""===p(k[0])&&(o.lastIndex=h(a,d(o.lastIndex),C))}for(var A,L="",M=0,P=0;P<O.length;P++){for(var _=p((k=O[P])[0]),N=b(w(u(k.index),a.length),0),R=[],D=1;D<k.length;D++)S(R,void 0===(A=k[D])?A:Strin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                [a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

var $letroUgcsetJQ = $.noConflict(true);

(function ($) {

/* 1 settings
------------------------------------------- */
letroUgcSet = function(data){
  var self = this;

  self.settings = {
    id: null,
    currentUrl: '', //表示されているページのURL
    isPreview: 0,//0: false, 1:true
    isABTest: 0,//0: false, 1:true
    isABTestHiddenMode: 0,//0: false, 1:true
    styleContainer: null,//
    container: null,//コンテンツコンテナー
    wrapper: null, //コンテンツラッパー
    contents: null,//コンテンツ表示領域
    layoutType: 1,  //1: post , 2: comment
    templateType: 1,  //1: media , 2: slider
    cssSelector: '', //css selector
    positionType: 1, //メディアの挿入位置 1: 指定領域内、2: 指定領域の次、3: 指定領域の前
    headerHtml: '', //フリーHTML（見出しなど）
    cols: null,//行数
    rows: null,//列数
    enableShowUgcComment: 1,//コメント表示有無
    enableShowUgcCommentModal: 1,//モーダル内コメント非表示
    enableShowWatermark: 1,//ウォーターマーク（Letroロゴ）表示有無
    nextPage: 1,//次のページ番号
    perPage: 20,//一ページの表示枚数
    moreButton: null,//
    viewMoreText: 'もっと見る',
    ugcMargin: 10,
    outerMargin: 0,
    outerMaxWidth: null,
    breakpointPx: 768,
    ugcRadius: 0,
    customCss: '',
    colors: {
      main: '#000000',
      border: null,
      bg: '#ffffff',
      text: '#000000',
      modalOverlayBg: '#ffffff',
      modalOverlayOpacity: 80,
    },
    linksHeaderTitle: '関連商品',
    currentModalNum: 0,
    postsNum: 0,
    lang: 'ja'
  }

  self.logs = {
    inview: false,
    ugcSliderInviews: []
  }

  self.isMobile = function () {
    return $(window).width() <= self.settings.breakpointPx;
  };

  self.isLandscape = function () {
    return window.innerHeight < window.innerWidth;
  };

  self.loadRenderFiles = function(fileName, callback){
    var alreadyScript = document.getElementsByTagName('script')[0];
    var stylesheet = document.createElement('link');
    var version = new Date().getTime();
    stylesheet.rel = 'stylesheet';
    stylesheet.type = 'text/css';
    stylesheet.href = __letroUgcGadget.assetBaseUrl + 'css/template/' + fileName + '.css?v=' + version;
    alreadyScript.parentNode.insertBefore(stylesheet, alreadyScript);
    var testElem = document.createElement('span');
    testElem.id = 'cssletroUgcsetReady';
    testElem.style.color = '#fff';
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(testElem, entry);
    var script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = __letroUgcGadget.assetBaseUrl + 'js/template/' + fileName + '.js?v=' + version;
    alreadyScript.parentNode.insertBefore(script, alreadyScript);
    script.onload = script.onreadystatechange = function() {
      var rdyState = script.readyState;
      if (!rdyState || /complete|loaded/.test(script.readyState)) {
        script.onload = null;
        script.onreadystatechange = null;
        (function poll() {
          var node = testElem;
          var value;
          if (window.getComputedStyle) {
            value = document.defaultView.getComputedStyle(testElem, null).getPropertyValue('color');
          }
          else if (node.currentStyle) {
            value = node.currentStyle.color;
          }
          if (value && value === 'rgb(186, 218, 85)' || value.toLowerCase() === '#bada55') {
            testElem.parentNode.removeChild(testElem);
            callback();
          } else {
            setTimeout(poll, 200);
          }
        })();
      }
    };
  };

  self.hex2rgba = function ( hex, opacity ) {
    if ( hex.slice(0, 1) === "#" ) hex = hex.slice(1) ;
    if ( hex.length === 3 ) hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3) ;
    return 'rgba(' + parseInt(hex.slice(0, 2), 16) + ',' + parseInt(hex.slice(2, 4), 16) + ',' + parseInt(hex.slice(4, 6), 16) + ',' + opacity + ')';
  }

  self.setFloatNumber = function(num, digit, type){
    return (type === 'ceil') ? Math.ceil(num * Math.pow(10, digit)) / Math.pow(10, digit) : Math.floor(num * Math.pow(10, digit)) / Math.pow(10, digit);
  };

  self.showError = function(error){
    self.sendError(error);
  };

  self.sendError = function(error){
    console.log(error);
  };

  self.setCss = function (css, selector, declaration) {
    css.insertRule(selector + "{" + declaration + "}", css.cssRules.length);
  };

  self.calcCss = function(ugcsetId){

    var parentDom = 'div.letroUgcsetContainer[data-letro-id="' + ugcsetId + '"]';
    var parentModalDom = '.letroUgcsetModal[data-letro-id="' + ugcsetId + '"]';

    //UGCレイアウト
    if( self.settings.outerMaxWidth ){
      self.setCss( self.settings.letroUgcsetStyle, parentDom + ', ' + parentModalDom, 'max-width: ' + self.settings.outerMaxWidth + 'px !important; margin: 0 auto !important;');
    }
    self.setCss( self.settings.letroUgcsetStyle, parentDom + ' .letroUgcsetWrapper, ' + parentDom + ' .letroUgcsetFreearea', 'margin: 0 ' + self.settings.outerMargin + 'px !important;');

    //media
    if(self.settings.templateType === 1){
      if(self.settings.layoutType === 1 || self.settings.layoutType === 3) {
        self.setCss(
            self.settings.letroUgcsetStyle,
            parentDom + ' .letroUgcsetPost',
            'width: calc(' + self.setFloatNumber(1 / self.settings.cols * 100, 3) + '% - ' + self.settings.ugcMargin * self.setFloatNumber(( self.settings.cols - 1 ) / self.settings.cols, 3, 'ceil') + 'px) !important; margin: 0 ' + self.settings.ugcMargin + 'px ' + self.settings.ugcMargin + 'px 0  !important;'
        );
        self.setCss( self.settings.letroUgcsetStyle, parentDom + ' .letroUgcsetPost:nth-child(' + self.settings.cols + 'n)', 'margin: 0 0 ' + self.settings.ugcMargin + 'px  !important;');
      }
      if(self.settings.layoutType === 2) {
        self.setCss( self.settings.letroUgcsetStyle, parentDom + ' .letroUgcsetPost:not(:first-child)', 'margin-top: ' + self.settings.ugcMargin + 'px !important;');
      }

    } else if(self.settings.templateType === 2) {
      if( self.settings.cols ){
        self.setCss(
          self.settings.letroUgcsetStyle,
          parentDom + ' .letroUgcsetPost',
          'flex-grow: 0 !important; flex-shrink: 0 !important; flex-basis: calc(' + self.setFloatNumber(1 / self.settings.cols * 100, 3) + '% - ' + self.settings.ugcMargin * self.setFloatNumber(( self.settings.cols - 1 ) / self.settings.cols, 3) + 'px) !important; margin: 0 ' + self.settings.ugcMargin + 'px ' + self.settings.ugcMargin + 'px 0  !important; max-width: calc(' + self.setFloatNumber(1 / self.settings.cols * 100, 3) + '% - ' + self.settings.ugcMargin * self.setFloatNumber(( self.settings.cols - 1 ) / self.settings.cols, 3) + 'px) !important;'
        );
      }
      else {
        self.setCss(
          self.settings.letroUgcsetStyle,
          parentDom + ' .letroUgcsetPost',
          'width: calc(20% - ' + self.settings.ugcMargin + 'px) !important; flex-grow: 0 !important; flex-shrink: 0 !important; flex-basis: calc(' + self.setFloatNumber(1 / self.settings.cols * 100, 3) + '% - ' + self.settings.ugcMargin * self.setFloatNumber(( self.settings.cols - 1 ) / self.settings.cols, 3) + 'px) !important; margin: 0 ' + self.settings.ugcMargin + 'px ' + self.settings.ugcMargin + 'px 0  !important;'
        );
      }
      self.setCss( self.settings.letroUgcsetStyle, parentDom + ' .letroGadgetContentsWrapper', 'margin: 0 15px !important;');
      self.setCss(
        self.settings.letroUgcsetStyle,
        parentDom + ' .letroUgcsetPost:last-child',
        'margin: 0 0 ' + self.settings.ugcMargin + 'px  !important;'
      );
      self.setCss(
        self.settings.letroUgcsetStyle,
        parentDom + ' .letroGadgetSliderDirection .letroGadgetSliderDirectionButton',
        'margin-top: -' + self.settings.ugcMargin + 'px  !important;'
      );
    }

    //UGCカラー設定
    //maincolor
    //profIcon
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetPostAuthor::before',
      'color: ' + self.settings.colors.main + ' !important;'
    );

    //icon
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetPostDate::before',
      'color: ' + self.settings.colors.main + ' !important;'
    );

    //more
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetWrapper .letroUgcsetMoreButton a',
      'color: ' + self.settings.colors.moreText + ' !important; border-color: ' + self.settings.colors.main + ' !important; color: ' + self.settings.colors.main + ' !important;'
    );

    //instagram logo
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetPostPhoto::before',
      'color: ' + self.settings.colors.main + ' !important;'
    );

    //border bg
    var postBorderWidth = ( self.settings.colors.border === null ) ? 0 : 1;
    var postBg = ( self.settings.colors.bg === '' ) ? 'transparent' : self.settings.colors.bg;
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetContents .letroUgcsetPostAnchor',
      'border-radius: ' + self.settings.ugcRadius + 'px !important; border-color: ' + self.settings.colors.border + ' !important; border-width: ' + postBorderWidth + ' !important; background-color: ' + postBg + ' !important;'
    );
    //default bottom border
    if(postBorderWidth === 0) {
      self.setCss(
          self.settings.letroUgcsetStyle,
          parentDom + ' .letroUgcsetContents .letroUgcsetPost',
          'border-bottom: 1px solid ' + self.settings.colors.main + ' !important;'
      );
    } else { // Padding if has border
      if(self.settings.layoutType === 2) {
        self.setCss(
            self.settings.letroUgcsetStyle,
            parentDom + ' .letroUgcsetContents .letroUgcsetPost .letroUgcsetPostAnchor',
            'padding: 10px !important;'
        );
      }
    }
    // comment ellipsis
    if(self.isChromeBrowser() && self.settings.layoutType === 2) {
      self.setCss(
          self.settings.letroUgcsetStyle,
          parentDom + ' .letroUgcsetContents .letroUgcsetPost .letroUgcsetPostComment',
          'display: -webkit-box !important;'
      );
    }
    //gradation
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetContents .letroUgcsetPostComment::after',
      'background: linear-gradient(' + self.hex2rgba(self.settings.colors.bg, '0') + ',' + self.hex2rgba(self.settings.colors.bg, '1') + ') !important;'
    );
    //text
    self.setCss(
      self.settings.letroUgcsetStyle,
      parentDom + ' .letroUgcsetContents .letroUgcsetPostAuthor, ' + parentDom + ' .letroUgcsetContents .letroUgcsetPostComment, ' + parentDom + ' .letroUgcsetContents .letroUgcsetPostDate',
      'color: ' + self.settings.colors.text + ' !important;'
    );

    //modal
    self.setCss(
      self.settings.letroUgcsetStyle,
      '.letroUgcsetOverlay[data-letro-id="' + ugcsetId + '"]',
      'background-color: ' + self.hex2rgba(self.settings.colors.modalOverlayBg, self.settings.colors.modalOverlayOpacity / 100 ) + ' !important;'
    );

    //modal white
    if( self.settings.colors.modalOverlayBg.toLowerCase() === '#fff' || self.settings.colors.modalOverlayBg.toLowerCase() === '#ffffff' ){
      self.setCss(
        self.settings.letroUgcsetStyle,
        parentModalDom + ' .letroUgcsetModalClose::before, ' + parentModalDom + ' .letroUgcsetModalNext::before, ' + parentModalDom + ' .letroUgcsetModalPrev::before',
        'color: #666666 !important;'
      );

      self.setCss(
        self.settings.letroUgcsetStyle,
        parentModalDom,
        'box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2) !important;'
      );
    }

    if( self.settings.templateType === 2 ){
      self.setCss(
        self.settings.letroUgcsetStyle,
        parentDom + ' .letroGadgetSliderDirection .letroGadgetSliderDirectionButton:last-child::before,' + parentDom + ' .letroGadgetSliderDirection .letroGadgetSliderDirectionButton:first-child::before,.letroUgcsetContainer[data-letro-id="' + ugcsetId + '"] .letroGadgetSliderPager .letroGadgetSliderPagerButton.letroGadgetSliderPagerButtonActive',
        'color: ' + self.settings.colors.main + ' !important;'
      );
      self.setCss(
        self.settings.letroUgcsetStyle,
        parentDom + ' .letroGadgetSliderPager .letroGadgetSliderPagerButton.letroGadgetSliderPagerButtonActive',
        'background-color: ' + self.settings.colors.main + ' !important;'
      );
    }

    //custom css
    if( self.settings.customCss ){
      $('#letroUgcsetStyle').after('<style>' + self.settings.customCss + '</style>');
    }
  };

  //scroll check
  self.checkScrollPos = function(){
    var scrollPos = $(window).scrollTop();
    if( scrollPos > self.settings.container.offset().top - $(window).height() && !self.logs.inview ){
      self.logs.inview = true;
      __letroUgcGadget.sendTrackingData('viewContainer', null, self);
    }
    $('.letroUgcsetPostLoaded', self.settings.container).each(function(){
      if( scrollPos > $(this).offset().top - $(window).height() ){

        const type = $(this).data('type');
        const autoPlay = $(this).data('autoPlay');
        if( type === 'image' || autoPlay === 0) {
          $('.letroUgcsetPostPhoto', this).css('cssText', 'background: url(' + $('.letroUgcsetPostPhoto', this).data('thumbnail-url') + ') 50% 50% no-repeat; background-size: cover;');
        }
        $(this).removeClass('letroUgcsetPostLoaded');

        if( self.settings.templateType === 1 ){
          __letroUgcGadget.sendTrackingData('viewUgc', $(this).data('id'), self );
        }
        else if( self.settings.templateType === 2 ) {
          for( var i = self.settings.sliderPos; i < ( self.settings.sliderPos + self.settings.cols ); i++ ){
            var ugc = $('.letroUgcsetPost', self.settings.contents).eq(i);
            var ugcId = ugc.data('id');
            if( self.logs.ugcSliderInviews.indexOf( ugcId ) === -1 ){
              self.logs.ugcSliderInviews.push( ugc.data('id') );
              __letroUgcGadget.sendTrackingData('viewUgc', ugcId, self );
            }
          }
        }
      }
    })
  }

  self.isLetroReviewPreviewMode = function () {
    return __letroUgcGadget.log.letro_review_preview_token != null && __letroUgcGadget.log.letro_review_preview_token != '';
  }

  //get ugc data
  self.getData = function(){
    if( self.settings.isABTestHiddenMode === 'hide'){
      return;
    }
    var params = {
      advertiser_id: self.advertiser_id,
      id: self.settings.id,
      per_page: self.settings.perPage,
      page: self.settings.nextPage,
      preview_token: __letroUgcGadget.log.preview_token,
      product_id: __letroUgcGadget.product_id
    };
    if (self.isLetroReviewPreviewMode()) {
      params.letro_review_preview_token = __letroUgcGadget.log.letro_review_preview_token;
    }
    $.ajax({
      type: 'get',
      url: __letroUgcGadget.log.media_api + self.settings.id + '/media.json',
      cache : false,
      dataType: 'jsonp',
      data: params
    }).then(
      function(data){
        if( data.data.length > 0 ){
          self.settings.nextPage = (data.paging.next_page) ? parseInt(data.paging.next_page, 10) : null;
          data.data.ugc_auto_play = self.settings.ugc_auto_play;
          self.settings.layoutType === 1 || self.settings.layoutType === 3
            ? self.render(data.data)
            : self.renderReviewLayout(data.data)
        } else {
          //ugcセットにugcが設定されていない場合は非表示
          var letroUgcsetContainer = document.getElementsByClassName('letroUgcsetContainer');
          letroUgcsetContainer[0].parentNode.removeChild(letroUgcsetContainer[0]);
        }
      },
      function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
      }
    );
  }
  self.storeUgc = function(ugc) {
    if(typeof window.__letroUgcGadget.letroUgcs === 'undefined') {
      window.__letroUgcGadget.letroUgcs = [];
    }
    let ugcs = window.__letroUgcGadget.letroUgcs;
    let isExist = false;
    for(let i = 0; i < ugcs.length; i++) {
      if(ugcs[i].id === ugc.id) {
        isExist = true;
        break;
      }
    }
    if(!isExist) {
      ugcs.push(ugc);
      window.__letroUgcGadget.letroUgcs = ugcs;
    }
  }
  self.getUgc = function(ugcId) {
    const ugcs = window.__letroUgcGadget.letroUgcs;
    for(let i = 0; i < ugcs.length; i++) {
      if(parseInt(ugcId) === parseInt(ugcs[i].id)) {
        return ugcs[i];
      }
    }
    return null;
  }
  self.isChromeBrowser = function () {
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    return isChrome;
  }
  self.viewUgcImageReview = function (ugc) {
    return '<div class="letroUgcsetPost letroUgcsetPostLoaded" data-id="' + ugc.id + '" data-type="image" data-auto-play="0">' +
        '<div class="letroUgcsetPostAnchor" data-href="' + ugc.original_post_url + '">' +
        '<div class="letroUgcSetPostBar">' +
        '<div class="letroUgcsetPostAuthor" data-post-url="' + ugc.original_post_url + '" data-post-id="' + ugc.original_post_id + '">' + ugc.author_name + '</div>' +
        '<div class="letroUgcsetPostDate"><span>' + ugc.pub_date.split(' ')[0].replace(/-/g, '/') + '</span></div></div>' +
        '<div class="letroUgcReviewWrapper">' +
        '<div class="letroUgcsetPostPhoto" data-thumbnail-url="'+ugc.url+'"><img loading="lazy" src="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEUAAAALAAAAAABAAEAAAICRAEAOw==" alt="" /></div>' +
        '<div class="letroUgcsetPostComment">' + ugc.description + '</div></div></div></div>';
  }
  self.viewUgcVideoReview = function (ugc, autoplay) {

    var videoHtml =  autoplay ? '<div class="letroUgcsetPostPhoto letroUgcsetPostVideoAutoPlay" data-video-url="'+ugc.url+'" data-thumbnail-url="'+ugc.thumbnail_url+'">' +
                  '<div class="letroUgcsetPostVideoBg">'+
                      '<div class="letroUgcsetPostVideoBgInner" style="background: url('+ugc.thumbnail_url+') 50% 50% no-repeat; background-size: cover; filter: blur(50px)"></div>' +
                  '</div>' +
                  '<video poster="'+__letroUgcGadget.assetBaseUrl +'images/img_loader.gif" src="'+ugc.url+'" autoplay muted playsinline loop></video>'+
                  '<img loading="lazy" src="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEUAAAALAAAAAABAAEAAAICRAEAOw==" class="letroUgcsetPostPhotoPlaceholder" alt="">'+
              '</div>' : '<div class="letroUgcsetPostPhoto" data-thumbnail-url="'+ugc.thumbnail_url+'"><img loading="lazy" src="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEUAAAALAAAAAABAAEAAAICRAEAOw==" alt="" /></div>';

    return '<div class="letroUgcsetPost letroUgcsetPostLoaded" data-id="'+ugc.id+'" data-type="video" data-auto-play="'+autoplay+'">'+
        '<div class="letroUgcsetPostAnchor" data-href="'+ugc.original_post_url+'">'+
          '<div class="letroUgcSetPostBar">' +
              '<div class="letroUgcsetPostAuthor" data-post-url="'+ugc.original_post_url+'" data-post-id="'+ugc.original_post_id+'">'+ugc.author_name+'</div>' +
              '<div class="letroUgcsetPostDate"><span>' + ugc.pub_date.split(' ')[0].replace(/-/g, '/') + '</span></div>' +
          '</div>'+
          '<div class="letroUgcReviewWrapper">' +
              videoHtml +
             '<div class="letroUgcsetPostComment">'+ugc.description+'</div>'+
          '</div>' +
        '</div>'+
    '</div></div>';
  }
  self.viewModalVideoLandscape = function(ugc, showDescription) {
    const viewInstagramTxt = ( self.settings.lang === 'en' ) ? 'Check it on Instagram' : 'Instagramで見る';
    const description = showDescription ? '<div class="letroUgcsetPostComment">'+ugc.description+'</div>' : '';

	return '<div class="letroUgcsetModalWrapLeft"><div class="letroUgcsetPostPhoto letroUgcsetPostVideo">' +
        '<video poster="'+__letroUgcGadget.assetBaseUrl +'images/img_loader.gif" autoplay muted playsinline loop src="'+ugc.url+'" controls></video></div></div>' +
        '<div class="letroUgcsetModalWrapRight"><div class="letroUgcsetPostText">' +
        '<div class="letroUgcsetPostAuthor" data-post-url="'+ugc.original_post_url+'" data-post-id="'+ugc.original_post_id+'">'+ugc.author_name+'</div>' + description +
        '<div class="letroUgcsetPostLink" data-post-id="'+ugc.original_post_id+'" data-post-url="'+ugc.original_post_url+'">' +
        '<a href="' + ugc.original_post_url + '" rel="noopener" target="_blank">' + viewInstagramTxt + '</a></div>'+ self.viewRelatedLinks(ugc) +'</div>';


  }
  self.viewModalImageLandscape = function(ugc, showDescription) {
    const viewInstagramTxt = ( self.settings.lang === 'en' ) ? 'Check it on Instagram' : 'Instagramで見る';
    const description = showDescription ? '<div class="letroUgcsetPostComment">'+ugc.description+'</div>' : '';
    return  '<div class="letroUgcsetModalWrapLeft"><div class="letroUgcsetPostPhoto"><img loading="lazy" class="letroUgcsetPostPhotoImg" src="'+ugc.url+'" alt=""></div></div>' +
        '<div class="letroUgcsetModalWrapRight"><div class="letroUgcsetPostText">' +
        '<div class="letroUgcsetPostAuthor" data-post-url="'+ugc.original_post_url+'" data-post-id="'+ugc.original_post_id+'">'+ugc.author_name+'</div>'+ description +
        '<div class="letroUgcsetPostLink" data-post-id="'+ugc.original_post_id+'" data-post-url="'+ugc.original_post_url+'">' +
        '<a href="' + ugc.original_post_url + '" rel="noopener" target="_blank">' + viewInstagramTxt + '</a></div>'+ self.viewRelatedLinks(ugc) +'</div>';
  }
  self.viewModalVideoPortrait = function(ugc, showDescription) {
    const description = showDescription ? '<div class="letroUgcsetPostComment">'+ugc.description+'</div>' : '';

    return '<div class="letroUgcsetPostPhoto letroUgcsetPostVideo">' +
        '<video poster="'+__letroUgcGadget.assetBaseUrl + 'images/img_loader.gif" autoplay muted playsinline loop src="'+ugc.url+'" controls></video></div>' +
        '<div class="letroUgcsetPostText">' +
        '<a class="letroUgcsetPostAuthor" data-post-id="'+ugc.original_post_id+'" data-post-url="'+ugc.original_post_url+'" rel="noopener" target="_blank" href="' + ugc.original_post_url + '">' + ugc.author_name + '</a>' +
        description + self.viewRelatedLinks(ugc) +'</div>';
  }
  self.viewModalImagePortrait = function(ugc, showDescription) {
    const description = showDescription ? '<div class="letroUgcsetPostComment">'+ugc.description+'</div>' : '';

    return '<div class="letroUgcsetPostPhoto"><img loading="lazy" class="letroUgcsetPostPhotoImg" src="'+ugc.url+'" alt=""></div>' +
        '<div class="letroUgcsetPostText">' +
        '<a class="letroUgcsetPostAuthor" data-post-id="'+ugc.original_post_id+'" data-post-url="'+ugc.original_post_url+'" rel="noopener" target="_blank" href="' + ugc.original_post_url + '">' + ugc.author_name + '</a>' +
        description + self.viewRelatedLinks(ugc) +'</div>';
  }
  self.viewRelatedLinks = function(ugc) {
    let view = '';

    if( ugc.links && ugc.links.length > 0 ){
      view += ( ugc.links.length > 2 )
          ? '<div class="letroUgcsetPostRelatedItems">'
          : '<div class="letroUgcsetPostRelatedItems letroUgcsetPostRelatedItemsThin">';
      view += '<div class="letroUgcsetPostRelatedItemsTitle">' + self.settings.linksHeaderTitle + '</div>' +
          '<div class="letroUgcsetPostRelatedItemsInner">';

      for( let i = 0; i < ugc.links.length; i++ ){
        const url = ( self.isMobile() || ugc.links[i].pc_url === '' ) ? ugc.links[i].url : ugc.links[i].pc_url;
        const openWindowType = ( 'open_in_new_window' in ugc.links[i] && ugc.links[i].open_in_new_window === 0 ) ? 0 : 1;
        view += '<div class="letroUgcsetPostRelatedItem" data-href="' + url + '" data-id="' + ugc.links[i].id + '" data-new-window="' + openWindowType + '">' +
            '<div class="letroUgcsetPostRelatedItemImg" data-thumbnail-url="' + ugc.links[i].image_url + '"></div>' +
            '<div class="letroUgcsetPostRelatedItemTitle">' + ugc.links[i].title + '</div></div>';
      }
      view += '</div></div></div>';

      return view;
    }
    return '';
  }
  self.renderReviewLayout = function(data){
    const self = this;
    let source = '';
    for( let i = 0; i < data.length; i++ ){
      self.storeUgc(data[i]);
      if(data[i].type === 'video') {
        source += self.viewUgcVideoReview(data[i], data.ugc_auto_play);
      } else {
        source += self.viewUgcImageReview(data[i]);
      }
    }
    self.settings.contents.append(source);
    self.settings.postsNum = $('.letroUgcsetPost', self.settings.container).length;
    if( self.settings.templateType === 1 ){
      self.setMediaDisplay();
    }
    if( self.settings.templateType === 2 ){
      self.setSliderDisplay();
    }
    self.checkScrollPos();
    self.resizeVideo();
  }
  self.initUgcVideo = function (){
    for( var i = self.settings.sliderPos - 1; i < ( self.settings.sliderPos + self.settings.cols + 1); i++ ){
      var ugc = $('.letroUgcsetPost', self.settings.contents).eq(i);

      if(ugc.data('type') === 'video' && parseInt(ugc.data('autoPlay')) === 1 && !ugc.data('loaded')){
        var videoContainer = $('.letroUgcsetPostVideoAutoPlay', ugc);
        ugc.attr('data-loaded', true);
        videoContainer.append('<video poster="'+__letroUgcGadget.assetBaseUrl +'images/img_loader.gif" src="' + videoContainer.data('videoUrl') + '" autoplay muted playsinline loop></video>');
      }
    }
    self.resizeVideo();
  }
  self.resizeVideo = function () {
    $('.letroUgcsetPost video').each(function(index, element){
      var intervalId = setInterval( function () {
        if ( element.readyState >= HTMLMediaElement.HAVE_METADATA ) {
          var w = element.videoWidth ;
          var h = element.videoHeight ;

          var videoClass;
          if ( w > h) {
            videoClass = 'letroUgcsetPostVideoLandscape';
          } else if ( w < h ) {
            videoClass = 'letroUgcsetPostVideoPortlait';
          } else {
            videoClass = 'letroUgcsetPostVideoSquare';
          }

          $(element).addClass(videoClass);
          clearInterval( intervalId ) ;
        }
      }, 500 ) ;
    });
  }
  //render
  self.render = function(data){
    var self = this;
    var source = '';
    var autoplay = data.ugc_auto_play;

    for( var i = 0; i < data.length; i++ ){
      self.storeUgc(data[i]);
      source += '<div class="letroUgcsetPost letroUgcsetPostLoaded" data-id="' + data[i].id + '" data-type="' + data[i].type + '" data-auto-play="' + autoplay + '">' +
          '<div class="letroUgcsetPostAnchor" data-href="' + data[i].original_post_url + '">';

      if( data[i].type === 'video' ){
        if (autoplay == 1 ) {
          var letro_thumbnail_url = null
          if( data[i]['thumbnail_url'] != null ){
            letro_thumbnail_url = data[i]['thumbnail_url']
          }
          var videoHtml = parseInt(self.settings.templateType) === 1 ? '<video poster="'+ __letroUgcGadget.assetBaseUrl +'images/img_loader.gif" src="' + data[i].url + '" autoplay muted playsinline loop></video>' : '';
          source += '<div class="letroUgcsetPostPhoto letroUgcsetPostVideoAutoPlay" data-video-url="' + data[i].url + '" data-thumbnail-url="' + letro_thumbnail_url + '">'
          + '<div class="letroUgcsetPostVideoBg">'
          + '<div class="letroUgcsetPostVideoBgInner" style="background: url('+ letro_thumbnail_url + ') 50% 50% no-repeat; background-size: cover; filter: blur(50px)"></div>'
          + '</div>'
          + videoHtml
          + '<img loading="lazy" src="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEUAAAALAAAAAABAAEAAAICRAEAOw==" class="letroUgcsetPostPhotoPlaceholder" alt="">'
          + '</div>';
        } else {
          source += '<div class="letroUgcsetPostPhoto letroUgcsetPostVideo" data-video-url="' + data[i].url + '" data-thumbnail-url="' + data[i].thumbnail_url + '">' +
              '<img loading="lazy" src="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEUAAAALAAAAAABAAEAAAICRAEAOw==" class="letroUgcsetPostPhotoPlaceholder" alt=""></div>';
        }
      }
      else {
        source += '<div class="letroUgcsetPostPhoto" data-thumbnail-url="' + data[i].url + '">' +
            '<img loading="lazy" src="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEUAAAALAAAAAABAAEAAAICRAEAOw==" class="letroUgcsetPostPhotoPlaceholder" alt=""></div>';
      }

      source += '<div class="letroUgcsetPostText">';
      source += '<div class="letroUgcsetPostAuthor" data-post-url="' + data[i].original_post_url + '" data-post-id="' + data[i].original_post_id + '">' + data[i].author_name + '</div>';
      var description = ( 'description' in data[i] ) ? data[i].description : '';
      source += '<div class="letroUgcsetPostComment">' + description + '</div>';
      var pubDateArr = data[i].pub_date.split(' ');
      source += '<div class="letroUgcsetPostDate"><span>' + pubDateArr[0].replace(/-/g, '/') + '</span></div>';

      if( data[i].links && data[i].links.length > 0 ){

        ( data[i].links.length > 2 ) ? source += '<div class="letroUgcsetPostRelatedItems">' : source += '<div class="letroUgcsetPostRelatedItems letroUgcsetPostRelatedItemsThin">';

        source += '<div class="letroUgcsetPostRelatedItemsTitle">' + self.settings.linksHeaderTitle + '</div>';
        source += '<div class="letroUgcsetPostRelatedItemsInner">';
        for( var j = 0; j < data[i].links.length; j++ ){
          var openWindowType = ( 'open_in_new_window' in data[i].links[j] && data[i].links[j].open_in_new_window === 0 ) ? 0 : 1;
          if( self.isMobile() || data[i].links[j].pc_url === '' ){
            source += '<div class="letroUgcsetPostRelatedItem" data-href="' + data[i].links[j].url + '" data-id="' + data[i].links[j].id + '" data-new-window="' + openWindowType + '">';
          }
          else {
            source += '<div class="letroUgcsetPostRelatedItem" data-href="' + data[i].links[j].pc_url + '" data-id="' + data[i].links[j].id + '" data-new-window="' + openWindowType + '">';
          }

          source += '<div class="letroUgcsetPostRelatedItemImg" data-thumbnail-url="' + data[i].links[j].image_url + '"></div>';
          if( 'title' in data[i].links[j] ){source += '<div class="letroUgcsetPostRelatedItemTitle">' + data[i].links[j].title + '</div>';}
          source += '</div>';
        }
        source += '</div></div>';
      }
      source += '</div>';
      source += '</div></div>';
    }
    self.settings.contents.append(source);
    self.settings.postsNum = $('.letroUgcsetPost', self.settings.container).length;
    if( self.settings.templateType === 1 ){
      self.setMediaDisplay();
    }

    if( self.settings.templateType === 2 ){
      self.setSliderDisplay();
      if(autoplay) {
        self.initUgcVideo();
      }
    }

    self.checkScrollPos();

    //autoPlay class setting
    if (autoplay == 1 ) {
      self.resizeVideo();
    }
  }

  self.expandUgcSetPostText = function (el) {
    var toogleButton = $(el);
    var isExpanded = toogleButton.data('expanded');
    if(!isExpanded) {
      toogleButton.find('.letroViewMoreText').text(( self.settings.lang === 'en' ) ? 'Hide' : 'コメントを隠す');
      toogleButton.find('.letroArrow').removeClass('letroArrowDown');
      toogleButton.find('.letroArrow').addClass('letroArrowUp');
      $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').addClass('letroUgcsetPostCommentExpanded');
    } else {
      toogleButton.find('.letroViewMoreText').text(( self.settings.lang === 'en' ) ? 'View more' : '続きを読む');
      toogleButton.find('.letroArrow').removeClass('letroArrowUp');
      toogleButton.find('.letroArrow').addClass('letroArrowDown');
      $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').removeClass('letroUgcsetPostCommentExpanded');
    }
    $(el).data('expanded', !isExpanded);
  }

  //render modal
  self.renderModal = function(data){
    self.settings.currentModalNum = $('.letroUgcsetPost', self.settings.container).index(data);
    const ugcId = $(data).data('id');
    const ugc = self.getUgc(ugcId);
    const letroMobile = self.isMobile() ? 'letroMobile' : '';
    const bodyElement = $('body');
    let modalContent;

    if (self.isMobile() && !self.isLandscape()) {
      if (ugc.type === 'video') {
        modalContent = self.viewModalVideoPortrait(ugc, self.settings.enableShowUgcCommentModal);
      } else {
        modalContent = self.viewModalImagePortrait(ugc, self.settings.enableShowUgcCommentModal);
      }
    } else {
      if (ugc.type === 'video') {
        modalContent = self.viewModalVideoLandscape(ugc, self.settings.enableShowUgcCommentModal);
      } else {
        modalContent = self.viewModalImageLandscape(ugc, self.settings.enableShowUgcCommentModal);
      }
    }

    bodyElement.append('<div class="letroUgcsetOverlay" data-contents="letro-ugcset" data-letro-id="' + self.settings.id + '"></div>');
    bodyElement.append('<div class="letroUgcsetModal '+letroMobile+'" ' +
        'data-contents="letro-ugcset" ' +
        'data-id="' + ugcId + '" ' +
        'data-letro-id="' + self.settings.id + '">' +
        '<div class="letroUgcsetModalInner"><div class="letroUgcsetModalWrap">' + modalContent +
        '</div></div></div>');

    // Append report link
    const reportPhotoUsageTxt = ( self.settings.lang === 'en' ) ? 'Report' : '写真利用について報告';
    $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostText').append('<div class="letroUgcsetPostCaution"><a href="' + ugc.original_post_url + '" rel="noopener" target="_blank">' + reportPhotoUsageTxt + '</a></div>');

    // Append button close, prev and next
    $('.letroUgcsetModal[data-contents="letro-ugcset"]').append('<span class="letroUgcsetModalClose"></span>');
    if( self.settings.postsNum > 1 ){
      $('.letroUgcsetModal[data-contents="letro-ugcset"]').append('<span class="letroUgcsetModalPrev"></span><span class="letroUgcsetModalNext"></span>');
    }

    // Check modal height
    if( $('.letroUgcsetModal[data-contents="letro-ugcset"]').height() + 80 > $(window).height() ){
      $('.letroUgcsetModal[data-contents="letro-ugcset"]').addClass('letroUgcsetModalLarge');
    }
    $('.letroUgcsetModal[data-contents="letro-ugcset"]').addClass('letroUgcsetModalActive');


    // Check to display view more, exclude 1px border of scroll
    if (self.settings.enableShowUgcCommentModal) {
      if (($('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').prop("scrollHeight") - 1) > ($('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').height())) {
        $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').addClass('letroUgcsetPostCommentNotExpand');
        const viewMoreText = (self.settings.lang === 'en') ? 'View more' : '続きを読む';
        $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').after('<div data-expanded="false" class="letroViewMore"><span class="letroViewMoreText">' + viewMoreText + '</span><span class="letroArrow letroArrowDown"><span></span><span></span></span></div>');
      } else {
        $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostComment').addClass('letroUgcsetPostCommentFixed');
      }
    }

    // Check related links
    if( $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostRelatedItems')[0] ){
      var imgHeight = 0;
      $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostRelatedItem').each(function(){
        if (parseInt(__letroUgcGadget.advertiser_id) === 172) {
            $(this).wrap('<div href="' +$(this).data('href') + '" class="letroUgcsetPostRelatedItemAnchor" data-id="' + $(this).data('id') + '" data-new-window="' + $(this).data('new-window') + '">');
        } else {
            $(this).wrap('<a href="' +$(this).data('href') + '" class="letroUgcsetPostRelatedItemAnchor" data-id="' + $(this).data('id') + '" data-new-window="' + $(this).data('new-window') + '">');
        }
        var relatedItemImg = $('<img loading="lazy" src="' + $('.letroUgcsetPostRelatedItemImg', this).data('thumbnail-url') + '" alt="">').appendTo($('.letroUgcsetPostRelatedItemImg', this));
        relatedItemImg.one('load', function(){
          if( imgHeight < $(this).height() ){
            imgHeight = $(this).height();
            $('.letroUgcsetModal[data-contents="letro-ugcset"] .letroUgcsetPostRelatedItemImg').css('cssText', 'height: ' + imgHeight + 'px !important;');
          }
        });
      });
    }

    var windScrollY = '-' + window.pageYOffset + 'px';
    $('body').css({
      top: windScrollY,
      position: 'fixed',
      width: '100%'
    });
    __letroUgcGadget.sendTrackingData('viewModal', $(data).data('id'), self );
  };

  //slide modal
  self.slideModal = function(direction, sliderTerminalFlg){
    var self = this;
    var newModalNum = 0;
    if( direction === 'prev' ){
      newModalNum = ( self.settings.currentModalNum === 0 ) ? self.settings.postsNum - 1 : self.settings.currentModalNum - 1;
    }
    if( direction === 'next' ){
      newModalNum = ( self.settings.currentModalNum === self.settings.postsNum - 1 ) ? 0 : self.settings.currentModalNum + 1;
    }
    self.removeModal();
    self.renderModal( $('.letroUgcsetPost', self.settings.container).eq(newModalNum) );
  };

  //remove modal
  self.removeModal = function(){
    $('.letroUgcsetOverlay[data-contents="letro-ugcset"]').remove();
    $('.letroUgcsetModal[data-contents="letro-ugcset"]').remove();
    var top = document.body.style.top;
    //some cases, close modal event is duplicated
    //->only execute this function if top attribute has value
    if (typeof top === 'undefined' || top === '') {
      return;
    }
    $('body').css({
      top: '',
      position: '',
      width: ''
    });
    window.scrollTo(0, parseInt(top || '0') * -1);
  };

  //open report window
  self.openReportWindow = function(id, type, src, author, comment){
    var self = this;
    var height = 600, width = 600;
    var windowFeatures = 'height=' + height +
      ',width=' + width +
      ',toolbar=0' +
      ',scrollbars=1' +
      ',status= 0' +
      ',resizable=0' +
      ',location=0' +
      ',menuBar=0';
      var centeredY,centeredX;
      centeredY = window.screenY + (((window.outerHeight/2) - (height/2)));
      centeredX = window.screenX + (((window.outerWidth/2) - (width/2)));

      var langUrl = ( self.settings.lang === 'en' ) ? '_en' : '';

      var url = 'https://letro.jp/tags/report/index' + langUrl + '.html?medium_id=' + id + "&ugcset_id=" + self.settings.id + "&advertiser_id=" + __letroUgcGadget.advertiser_id + '&type=' + type + '&src=' + src + '&author=' + author + '&comment=' + encodeURIComponent(comment) + '&comment_disp=' + self.settings.enableShowUgcCommentModal;
      window.open(url, 'notice', windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
  };

  self.randomIntegerPercent = function() {
    return Math.ceil(Math.random() * 100); // returns a random integer from 1 to 100
  }
  self.bindUcgSetSetting = function(ugcSet, settings) {
    if('position_type' in ugcSet && ugcSet.position_type) settings.positionType = parseInt(ugcSet.position_type, 10);
    if('header_html' in ugcSet && ugcSet.header_html) settings.headerHtml = ugcSet.header_html;
    if('template_type' in ugcSet && ugcSet.template_type) settings.templateType = parseInt(ugcSet.template_type, 10);
    if('layout_type' in ugcSet && ugcSet.layout_type) settings.layoutType = parseInt(ugcSet.layout_type, 10);
    if('enable_show_ugc_comment' in ugcSet && typeof ugcSet.enable_show_ugc_comment === 'number') settings.enableShowUgcComment = parseInt(ugcSet.enable_show_ugc_comment, 10);
    if('enable_show_ugc_comment_modal' in ugcSet && typeof ugcSet.enable_show_ugc_comment_modal === 'number') settings.enableShowUgcCommentModal = parseInt(ugcSet.enable_show_ugc_comment_modal, 10);
    if('enable_show_watermark' in ugcSet && typeof ugcSet.enable_show_watermark === 'number') settings.enableShowWatermark = parseInt(ugcSet.enable_show_watermark, 10);
    if('view_more_text' in ugcSet && ugcSet.view_more_text) settings.viewMoreText = ugcSet.view_more_text;
    if('custom_css' in ugcSet && ugcSet.custom_css) settings.customCss = ugcSet.custom_css;

    if('breakpoint_px' in ugcSet && ugcSet.breakpoint_px) settings.breakpointPx = parseInt(ugcSet.breakpoint_px, 10);
    if('ugc_radius_px' in ugcSet && typeof ugcSet.ugc_radius_px === 'number') settings.ugcRadius = parseInt(ugcSet.ugc_radius_px, 10);
    if( !self.isMobile() && 'pc' in ugcSet ){
      if('outer_max_width_px' in ugcSet.pc && typeof ugcSet.pc.outer_max_width_px === 'number') settings.outerMaxWidth = parseInt(ugcSet.pc.outer_max_width_px, 10);
      if('outer_margin_px' in ugcSet.pc && typeof ugcSet.pc.outer_margin_px === 'number') settings.outerMargin = parseInt(ugcSet.pc.outer_margin_px, 10);
      if('ugc_margin_px' in ugcSet.pc && typeof ugcSet.pc.ugc_margin_px === 'number') settings.ugcMargin = parseInt(ugcSet.pc.ugc_margin_px, 10);
      if('ugc_radius_px' in ugcSet.pc && typeof ugcSet.pc.ugc_radius_px === 'number') settings.ugcRadius = parseInt(ugcSet.pc.ugc_radius_px, 10);
    } else {
      if('outer_margin_px' in ugcSet && typeof ugcSet.outer_margin_px === 'number') settings.outerMargin = parseInt(ugcSet.outer_margin_px, 10);
      if('ugc_margin_px' in ugcSet && typeof ugcSet.ugc_margin_px === 'number') settings.ugcMargin = parseInt(ugcSet.ugc_margin_px, 10);
    }

    if( 'colors' in ugcSet && ugcSet.colors ){
      if('main' in ugcSet.colors && ugcSet.colors.main) settings.colors.main = '#' + ugcSet.colors.main;
      if('logo' in ugcSet.colors && ugcSet.colors.logo) settings.colors.logo = '#' + ugcSet.colors.logo;
      if('border' in ugcSet.colors && ugcSet.colors.border) settings.colors.border = '#' + ugcSet.colors.border;
      if('bg' in ugcSet.colors && ugcSet.colors.bg) settings.colors.bg = '#' + ugcSet.colors.bg;
      if('text' in ugcSet.colors && ugcSet.colors.text) settings.colors.text = '#' + ugcSet.colors.text;
      if('modal_overlay_bg' in ugcSet.colors && ugcSet.colors.modal_overlay_bg) settings.colors.modalOverlayBg = '#' + ugcSet.colors.modal_overlay_bg;
      if('modal_overlay_opacity' in ugcSet.colors && typeof ugcSet.colors.modal_overlay_opacity === 'number') settings.colors.modalOverlayOpacity = parseInt(ugcSet.colors.modal_overlay_opacity, 10);
    }

    if( 'links_header_title' in ugcSet && ugcSet.links_header_title !== null ) settings.linksHeaderTitle = ugcSet.links_header_title;

    if( 'lang' in ugcSet && ugcSet.lang ) settings.lang = ugcSet.lang;

    if( 'ugc_auto_play' in ugcSet ) settings.ugc_auto_play = ugcSet.ugc_auto_play;

    //cols rows
    if( !self.isMobile() && 'pc' in ugcSet ){
      if( 'cols' in ugcSet.pc && ugcSet.pc.cols ){ settings.cols = parseInt(ugcSet.pc.cols, 10);}
      if( 'rows' in ugcSet.pc && ugcSet.pc.rows ){ settings.rows = parseInt(ugcSet.pc.rows, 10);}
    } else {
      if( 'cols' in ugcSet && ugcSet.cols ){ settings.cols = parseInt(ugcSet.cols, 10);}
      if( 'rows' in ugcSet && ugcSet.rows ){ settings.rows = parseInt(ugcSet.rows, 10);}
    }
  }

  self.setABTestPattern = function(settings, pattern) {

    settings.abTestPatternId = pattern.id;
    __letroUgcGadget.setCookie("__vtdr_ab_pattern_" + settings.id,  settings.abTestPatternId, 30, true);

    if(parseInt(pattern.pattern_type) === 0) {
      __letroUgcGadget.setCookie("__vtdr_ab_" + settings.id, 'view', 30, true);
      settings.isABTestHiddenMode = 'view';
    }

    if(parseInt(pattern.pattern_type) === 1) {
      __letroUgcGadget.setCookie("__vtdr_ab_" + settings.id, 'hide', 30, true);
      settings.isABTestHiddenMode = 'hide';
    }
  }
  self.logDisplayRate = function (type, ugcSet, abtestPattern, displayRateValue) {
    var cssSelector = 'css_selector' in abtestPattern ? abtestPattern.css_selector : ugcSet.css_selector;

    if( !$(cssSelector)[0] ){
      return;
    }

    var params = {
      visitor_id: __letroUgcGadget.log.visitor_id,
      advertiser_id: __letroUgcGadget.siteId,
      ugc_set_id: ugcSet.id,
      abtest_pattern_id: abtestPattern.id,
      display_rate_min: abtestPattern.display_rate_min,
      display_rate_max: abtestPattern.display_rate_max,
      display_rate_value: displayRateValue,
    }
    if(type === 'abtest_product_display_rates') {
      params.product_id = __letroUgcGadget.product_id;
    }
    var delibirdUrl = __letroUgcGadget.log.delibird_url + type;
    var req = new XMLHttpRequest();
    req.open('POST', delibirdUrl, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(params));
  }
  //init
  self.init = function(data){
    var ugcSet = data;
    var displayPattern = null;
    var settings = self.settings;
    settings.id = ('id' in ugcSet && ugcSet.id) ? ugcSet.id : self.showErr();
    settings.isPreview = ( 'is_preview' in ugcSet && parseInt(ugcSet.is_preview, 10) === 1 ) ? 1 : 0;
    settings.isABTest = ugcSet.is_abtest;
    settings.abTestPatternId = __letroUgcGadget.getCookie("__vtdr_ab_pattern_" + settings.id);

    if(settings.isPreview !== 1) {
      if (parseInt(ugcSet.is_abtest, 10) === 0) {
        __letroUgcGadget.setCookie('__vtdr_ab_' + settings.id, '', 0, true);
        settings.isABTestHiddenMode = 'view';
      } else {
        var abTestPatterns = [];

        //Prepare abtest patterns, check if has previous abtest pattern id
        ugcSet.abtest_patterns.forEach(function (pattern) {
          if (parseInt(pattern.available) === 1) {

            if (pattern.css_selector === 'null' || pattern.css_selector === null || pattern.css_selector === '') {
              pattern.css_selector = ugcSet.css_selector
            }

            if (parseInt(settings.abTestPatternId) === parseInt(pattern.id)) {
              displayPattern = pattern;
              self.setABTestPattern(settings, displayPattern);
            }

            abTestPatterns.push(pattern);
          }
        });

        // Get new random abtest pattern
        if (displayPattern === null) {
          var randValue = self.randomIntegerPercent();
          var checkpoint = 1;
          for (var i = 0; i < abTestPatterns.length; i++) {
            abTestPatterns[i].display_rate_min = checkpoint;
            abTestPatterns[i].display_rate_max = abTestPatterns[i].display_rate + checkpoint;
            checkpoint = abTestPatterns[i].display_rate_max;

            if (abTestPatterns[i].display_rate_min <= randValue && randValue < abTestPatterns[i].display_rate_max) {
              displayPattern = abTestPatterns[i];
              self.setABTestPattern(settings, displayPattern);
              self.logDisplayRate('abtest_ugc_set_display_rates', ugcSet, displayPattern, randValue);
              if( typeof __letroUgcGadget.ec_mode !== 'undefined' && parseInt(__letroUgcGadget.product_id) !== 0 ) {
                self.logDisplayRate('abtest_product_display_rates', ugcSet, displayPattern, randValue);
              }
              break;
            }
          }
        }
      }

      if( typeof __letroUgcGadget.ec_mode !== 'undefined' ){
        if( __letroUgcGadget.ec_mode == 1 && parseInt(__letroUgcGadget.product_id) !== 0 ){
          if ( parseInt(ugcSet.is_abtest, 10) === 1 ) {
            var modes = document.cookie.match(/__vtdr_ab_[0-9]+=(view|hide)/g);
            if ( modes !== null ){
              var baseMode = modes[0].split("=");
              __letroUgcGadget.setCookie("__vtdr_ab_" + settings.id, baseMode[1], 30, true);
              settings.isABTestHiddenMode = baseMode[1];
            }
          }
        }
      }

      if(displayPattern !== null && 'css_selector' in displayPattern) {
        settings.cssSelector =  displayPattern.css_selector;
      } else if('css_selector' in ugcSet && ugcSet.css_selector) {
        settings.cssSelector =  ugcSet.css_selector;
      }
    } else {
      if('css_selector' in ugcSet && ugcSet.css_selector) {
        settings.cssSelector =  ugcSet.css_selector;
      }
    }

    if( !$(settings.cssSelector)[0] ){
      console.log( 'selector not found - ' + settings.cssSelector );
      __letroUgcGadget.sendTrackingData('ugc_set_investigation', {
        status: 1, // status selector not found
        description: 'selector not found - ' + settings.cssSelector
      }, self);
      return;
    }

    if( $(settings.cssSelector).length > 1 ){
      settings.cssSelector = $(settings.cssSelector)[0];
    }

    if(settings.isPreview !== 1) {
      if(displayPattern !== null) {
        displayPattern.lang = ugcSet.lang;
        displayPattern.type = ugcSet.type;
        self.bindUcgSetSetting(displayPattern, settings);
      } else {
        self.bindUcgSetSetting(ugcSet, settings);
      }
    } else {
      self.bindUcgSetSetting(ugcSet, settings);
    }

    var style = document.createElement('style');
    style.setAttribute("type", "text/css");
    style.id = 'letroUgcsetStyle';
    var jsLength = document.getElementsByTagName('script').length;
    var entry = document.getElementsByTagName('script')[jsLength-1];
    entry.parentNode.insertBefore(style, entry);
    settings.letroUgcsetStyle = style.sheet;

    //wrapper, container
    if(settings.positionType === 1){
      settings.container = $('<div class="letroUgcsetContainer" data-contents="letro-ugcset" data-letro-id="' + settings.id + '" data-letro-template="' + settings.templateType + '" data-letro-layout="' + settings.layoutType + '"></div>').appendTo( settings.cssSelector );
      settings.wrapper = $('<div class="letroUgcsetWrapper"></div>').appendTo(settings.container);
      settings.contents = $('<div class="letroUgcsetContents"></div>').appendTo(settings.wrapper);
    }
    else if(settings.positionType === 2){
      settings.container = $('<div class="letroUgcsetContainer" data-contents="letro-ugcset" data-letro-id="' + settings.id + '" data-letro-template="' + settings.templateType + '" data-letro-layout="' + settings.layoutType + '"></div>').insertAfter( settings.cssSelector );
      settings.wrapper = $('<div class="letroUgcsetWrapper"></div>').appendTo(settings.container);
      settings.contents = $('<div class="letroUgcsetContents"></div>').appendTo(settings.wrapper);
    }
    else if(settings.positionType === 3){
      settings.container = $('<div class="letroUgcsetContainer" data-contents="letro-ugcset" data-letro-id="' + settings.id + '" data-letro-template="' + settings.templateType + '" data-letro-layout="' + settings.layoutType + '"></div>').insertBefore( settings.cssSelector );
      settings.wrapper = $('<div class="letroUgcsetWrapper"></div>').appendTo(settings.container);
      settings.contents = $('<div class="letroUgcsetContents"></div>').appendTo(settings.wrapper);
    }

    //enable_show_ugc_comment
    if( settings.enableShowUgcComment !== 1 ){ settings.contents.addClass('letroUgcsetContentsImage');}

    //freearea
    if(settings.headerHtml && settings.headerHtml !== '' && settings.isABTestHiddenMode !== 'hide' ){
      $( '<div class="letroUgcsetFreearea">' + settings.headerHtml + '</div>' ).insertBefore(settings.wrapper);
    }

    if (settings.layoutType === 2) {
      settings.perPage = settings.rows;
    } else {
      if( settings.templateType === 1 ){
        settings.perPage = settings.cols * settings.rows;
      } else if(settings.templateType === 2){
        settings.perPage = 20;
      }
    }

    //css の設定
    self.calcCss(settings.id);

    //templateType毎のperPage
    if( settings.templateType === 1 && settings.isABTestHiddenMode !== 'hide' ){
      self.loadRenderFiles('media', function(){
        var moreButtonWrap = $('<div class="letroUgcsetMoreButton"><a href="">' + settings.viewMoreText + '</a></div>').appendTo(settings.wrapper);
        settings.moreButton = moreButtonWrap.find('a');
        //watermark
        if( settings.enableShowWatermark === 1 ) settings.wrapper.append(
          '<a class="letroUgcsetWatermark" href="https://service.aainc.co.jp/product/letro/service_docrequest_poweredby?utm_campaign=powered-by-letro" rel="noopener" target="_blank">Supported by <div class="letroUgcsetWatermarkLogo"></div>'
        )
        settings.moreButton.on('click', function(){
          settings.wrapper.removeClass('letroUgcsetHasNext');
          self.getData();
          return false;
        })
        self.getData();
      });
    }
    else if(settings.templateType === 2 && settings.isABTestHiddenMode !== 'hide'){
      self.loadRenderFiles('slider', function(){
        //watermark
        if( settings.enableShowWatermark === 1 ) settings.wrapper.append('<a class="letroUgcsetWatermark" href="https://service.aainc.co.jp/product/letro/?utm_source=powered-by-letro&utm_medium=referral" rel="noopener" target="_blank">Supported by <div class="letroUgcsetWatermarkLogo"></div>');
        self.getData();
      });
    }

    // init css for mobile
    if(self.isMobile()) {
      settings.container.addClass('letroMobile');
    }

    //modal trigger
    settings.wrapper.on('click', '.letroUgcsetPost', function(e){
      self.renderModal($(this));
      return false;
    });

    //modal viewmore trigger
    $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroViewMore', function(){
      self.expandUgcSetPostText($(this));
      return false;
    });

    //modal author trigger
    if(!self.isLandscape()) {
      $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetPostAuthor', function(){
        var ugcSetId =  $('.letroUgcsetModal[data-contents="letro-ugcset"]').data('id');
        var postId = $('.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetPostAuthor').data('postId');
        var mediumId = $('.letroUgcsetModal[data-letro-id="' + settings.id + '"]').data('id');
        var params = {
          ugc_set_id : ugcSetId,
          original_post_id : postId,
          medium_id : mediumId
        };
        __letroUgcGadget.sendTrackingData('originalPostClick', params, self);
      });
    } else {
      $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetPostLink', function(){
        var ugcSetId =  $('.letroUgcsetModal[data-contents="letro-ugcset"]').data('id');
        var postId = $('.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetPostLink').data('postId');
        var mediumId = $('.letroUgcsetModal[data-letro-id="' + settings.id + '"]').data('id');
        var params = {
          ugc_set_id : ugcSetId,
          original_post_id : postId,
          medium_id : mediumId
        };
        __letroUgcGadget.sendTrackingData('originalPostClick', params, self);
      });
    }
    //モーダル閉じる
    $(document).on('click', '.letroUgcsetOverlay[data-letro-id="' + settings.id + '"], .letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetModalClose', function(e){
      self.removeModal();
      return false;
    });

    //モーダル内の＜＞
    $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetModalPrev', function(e){
      self.slideModal('prev');
      return false;
    });

    $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetModalNext', function(e){
      self.slideModal('next');
      return false;
    });

    //モーダル内の関連リンク
    $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetPostRelatedItemAnchor', function(){
      __letroUgcGadget.sendTrackingData('linkClick', [ $('.letroUgcsetModal[data-contents="letro-ugcset"]').data('id'), $(this).data('id') ], self );
      if( $(this).attr('href').match(/^#/) ){
        self.removeModal();
      }
      else if( parseInt( $(this).data('new-window'), 10 ) === 1 ) {
        window.open($(this).attr('href'));
        return false;
      }
      else {
        window.location.href = $(this).attr('href');
      }
    });

    //モーダル内の通報リンク
    $(document).on('click', '.letroUgcsetModal[data-letro-id="' + settings.id + '"] .letroUgcsetPostCaution', function(e){
      const id = $(this).parents('.letroUgcsetModal[data-letro-id="' + settings.id + '"]').data('id');
      const ugc = self.getUgc(id);
      self.openReportWindow(id, ugc.type, encodeURIComponent(ugc.url), ugc.author_name, ugc.description);
      return false;
    });

    //view page
    __letroUgcGadget.setCookie('__letro_v_id_' + __letroUgcGadget.siteId, __letroUgcGadget.log.visitor_id, 365);
    __letroUgcGadget.sendTrackingData('viewPage', null, self);
    $(window).on('scroll.letroGadget', function () {
      self.checkScrollPos();
    });
  }
  self.init(data);

}


/* 3 init
------------------------------------------- */
__letroUgcGadget.siteId = null;
__letroUgcGadget.hash = '';

__letroUgcGadget.assetBaseUrl = 'https://letro.jp/tags/';
__letroUgcGadget.log = {
  'image': null,
  'visitor_id': null,
  'settigns_url': 'https://api.letro.jp/v1/advertisers/',
  'delibird_url': 'https://log.letro.jp/',
  'media_api': 'https://api.letro.jp/v1/ugc-sets/',
  'cross_domains': null,
  'domains': null,
  'domain': null,
  'conversions': [],
  'auto_linker': false,
  'preview_token': null,
  'letro_review_preview_token': null,
  'should_log': 1,
  'is_sp': null,
  'session': null
}

__letroUgcGadget.getAutoLinkerVisitorId = function () {
  var url = window.location.search;
  var hash  = url.slice(1).split('&');
  var visitorIdByAutoLinker = null;
  for (var i = 0; i < hash.length; i++){
    array = hash[i].split('=');
    if( array[0] === 'letro_visitor_id' ){
      visitorIdByAutoLinker = array[1];
    }
  }
  return visitorIdByAutoLinker;
}

__letroUgcGadget.isSmartphone = function () {
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
    return 1;
  }
  else{
    return 0;
  }
};

__letroUgcGadget.parseUrl = function (url) {
  var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*|)?(#.*|)?$/);
  return match && {
    protocol: match[1],
    host: match[2],
    hostname: match[3],
    port: match[4] || "",
    pathname: match[5] || "",
    search: match[6] || "",
    hash: match[7] || "",
    origin: match[1] + "//" + match[2]
  };
}

__letroUgcGadget.getCookie = function (key) {
  var self = this;
  var ret = null;
  var cookieString = ( document.cookie ) ? document.cookie : "";
  var start = 0;
  var end = cookieString.length;
  var keyEqual = key + "=";
  var offset = cookieString.indexOf((keyEqual));
  if(offset != -1) {
    start = offset + keyEqual.length;
    end   = cookieString.indexOf(";" , start);
    if( end === -1 ){
      end = cookieString.length;
    }
    ret   = decodeURIComponent(cookieString.substring(start,end));
  }
  if( ret === null && ('localStorage' in window) && (window.localStorage !== null) ){
    ret = localStorage.getItem(key);
  }
  return ret;
};

__letroUgcGadget.setCookie = function (key, val, day) {
  var self = this;

  var domain = (__letroUgcGadget.log.domain) ? __letroUgcGadget.log.domain : location.hostname;

  var updateCookieString = key + "=" + encodeURIComponent(val) + ";";
  updateCookieString += "domain=" + domain + ";";
  if(day) {
    var exp = new Date();
    exp.setTime(exp.getTime()+(day*24*60*60*1000));
    updateCookieString += "expires=" + exp.toGMTString() + ";"
  }
  updateCookieString += "path=/";
  document.cookie = updateCookieString;
  if( ('localStorage' in window) && (window.localStorage !== null) ){
    localStorage.setItem(key, val);
  }
}
// is spa
__letroUgcGadget.setConversionEvent = function(url, id){
  history.pushState = ( function(f){ return function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
  }})(history.pushState);

  history.replaceState = ( function(f){ return function replaceState(){
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
  }})(history.replaceState);

  window.addEventListener('popstate', function(){
      return window.dispatchEvent(new Event('locationchange'))
  });

  window.addEventListener('locationchange', function(){
      function trackingDelibird(type, params) {
        if( type === 'conversion' && __letroUgcGadget.log.new_visitor === 1 ){
          return;
        }
        var logData = $.extend({
          "visitor_id": __letroUgcGadget.log.visitor_id,
          "advertiser_id": __letroUgcGadget.siteId,
          "user_agent": navigator.userAgent,
          "referer": document.referrer,
          "location": location.href,
          "is_sp": __letroUgcGadget.log.is_sp,
        }, params);
        var delibirdUrl = __letroUgcGadget.log.delibird_url + type;
        var req = new XMLHttpRequest();
        req.open('POST', delibirdUrl, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(logData));
      }
      if(location.href.indexOf(url) > -1){
        trackingDelibird('conversion', {conversion_id: id});
        //conversion_products
        if ( typeof __letroUgcProducts !== "undefined" && typeof __letroUgcGadget.ecMode !== "undefined"){
            if ( __letroUgcGadget.ecMode == 1 ){
              var letroProductsParams = letroProductsParams || [];
              letroProductsParams['conversion_id'] = id;
              trackingDelibirdByProducts('conversion_products', letroProductsParams);
            }
        }
      }
  })
}
//send log
__letroUgcGadget.sendTrackingData = function(type, params, targetUgcSet){
  var targetUgcSet = targetUgcSet;
  if( targetUgcSet && targetUgcSet.settings.isPreview === 1 || __letroUgcGadget.log.should_log === 0 ){
    return;
  }

  if (type === 'viewPage') {
    var sendData = {
      ugc_set_id: targetUgcSet.settings.id,
      abtest_pattern_id: targetUgcSet.settings.abTestPatternId
    };

    if(parseInt(targetUgcSet.settings.isABTest) === 1) {
      trackingDelibird('abtest_ugc_set_impressions', sendData);
      //ec_mode
      if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
        sendData['product_id'] = __letroUgcGadget.product_id;
        trackingDelibird('abtest_products_impressions', sendData);
      }
    }

    /**
    * For identification tag type on advertiser impression log.
    *
    * 1: ugc tag, 2: review tag
    *
    * This app is ugc tag, so set 1.
    */
    var TAG_TYPE = 1;

    hashString(location.href).then((urlHash) => {
      var advertiserLogData = __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0 ? {
        ref_id: targetUgcSet.settings.id,
        product_id: __letroUgcGadget.product_id,
        location_hash: urlHash,
        type: TAG_TYPE,
      } : {
        ref_id: targetUgcSet.settings.id,
        location_hash: urlHash,
        type: TAG_TYPE,
      }
      if( targetUgcSet.settings.isABTestHiddenMode === 'hide' ){
        trackingDelibird('hidden_ugc_set_impression', sendData);
        trackingDelibird('advertiser_hidden_impressions', advertiserLogData);

        //ec_mode
        if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
          sendData['product_id'] = __letroUgcGadget.product_id;
          trackingDelibird('hidden_products_impressions', sendData);
        }
      } else {
        trackingDelibird('ugc_set_impression', sendData);
        var shouldTrackDelibirdAdvertiserImpressions = true;

        if (__letroUgcGadget.ugcTabGroup !== undefined) {
          const ugcTabGroupData = __letroUgcGadget.ugcTabGroup;
          const ugcTabGroupUgcSets = ugcTabGroupData.ugc_tab_group_ugc_sets;
          const isUgcTabGroupUgcSet = ugcTabGroupUgcSets.some(item => item.ugc_set_id === advertiserLogData.ref_id);

          if (isUgcTabGroupUgcSet) {
            // Check current tab is tab all
            shouldTrackDelibirdAdvertiserImpressions = advertiserLogData.ref_id == ugcTabGroupData.parent_ugc_set.id;
          }
        }
        
        if (shouldTrackDelibirdAdvertiserImpressions) {
          trackingDelibird('advertiser_impressions', advertiserLogData);
        }

        //ec_mode
        if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
          sendData['product_id'] = __letroUgcGadget.product_id;
          trackingDelibird('products_impressions', sendData);
        }
      }
    });
  }
  else if (type === 'viewContainer') {
    var sendData = {
      ugc_set_id: targetUgcSet.settings.id,
      abtest_pattern_id: targetUgcSet.settings.abTestPatternId
    };

    if(parseInt(targetUgcSet.settings.isABTest) === 1) {
      trackingDelibird('abtest_ugc_set_inviews', sendData);
      //ec_mode
      if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
        sendData['product_id'] = __letroUgcGadget.product_id;
        trackingDelibird('abtest_products_inviews', sendData);
      }
    }

    if( targetUgcSet.settings.isABTestHiddenMode === 'hide' ){
      trackingDelibird('hidden_ugc_set_inview', sendData);

      //ec_mode
      if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
        sendData['product_id'] = __letroUgcGadget.product_id;
        trackingDelibird('hidden_products_inviews', sendData);
      }
    }
    else {
      trackingDelibird('ugc_set_inview', sendData);

      //ec mode
      if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
        sendData['product_id'] = __letroUgcGadget.product_id;
        trackingDelibird('products_inviews', sendData);
      }
    }
  }
  else if (type === 'viewUgc') {
    trackingDelibird('medium_inview', {ugc_set_id: targetUgcSet.settings.id, medium_id: params,  abtest_pattern_id: targetUgcSet.settings.abTestPatternId});

    //ec mode
    if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
      trackingDelibird('products_medium_inviews', {ugc_set_id: targetUgcSet.settings.id, medium_id: params, product_id: __letroUgcGadget.product_id,  abtest_pattern_id: targetUgcSet.settings.abTestPatternId});
    }
  }
  else if( type === 'viewModal' ){
    trackingDelibird('medium_click', {ugc_set_id: targetUgcSet.settings.id, medium_id: params,  abtest_pattern_id: targetUgcSet.settings.abTestPatternId});

    //ec mode
    if ( __letroUgcGadget.product_id !== null && __letroUgcGadget.product_id > 0){
      trackingDelibird('products_medium_clicks', {ugc_set_id: targetUgcSet.settings.id, medium_id: params, product_id: __letroUgcGadget.product_id,  abtest_pattern_id: targetUgcSet.settings.abTestPatternId});
    }
  }
  else if( type === 'linkClick' ){
    trackingDelibird('link_click', {ugc_set_id: targetUgcSet.settings.id, medium_id: params[0], link_id: params[1],  abtest_pattern_id: targetUgcSet.settings.abTestPatternId});
  }
  else if( type === 'conversion' ){
    for( var i = 0; i < params.length; i++ ){
      trackingDelibird('conversion', {conversion_id: params[i].id});
      //conversion_products
      if ( typeof __letroUgcProducts !== "undefined" && typeof __letroUgcGadget.ecMode !== "undefined"){
          if ( __letroUgcGadget.ecMode == 1 ){
            var letroProductsParams = letroProductsParams || [];
            letroProductsParams['conversion_id'] = params[i].id;
            trackingDelibirdByProducts('conversion_products', letroProductsParams);
          }
       }
    }
  }
  else if( type === 'visitorIdLog' ){
    trackingDelibird('visitor_id_log', params);
  }
  else if( type === 'custom_conversion' ){
    trackingDelibirdForCustomConversion('conversion', {conversion_id: params});
  }
  else if( type === 'custom_conversion_products' ){
    if ( __letroUgcGadget.ecMode == 1 ){
      trackingDelibirdByProducts('conversion_products', {conversion_id: params});
      __letroUgcProducts = [];
    }
  }
  else if( type === 'originalPostClick' ) {
    params.ugc_set_id = targetUgcSet.settings.id;
    params.abtest_pattern_id = targetUgcSet.settings.abTestPatternId;
    trackingDelibird('original_post_click', params);
  }
  else if( type === 'ugc_set_investigation') {
    params.ugc_set_id = targetUgcSet.settings.id;
    trackingDelibird('ugc_set_investigation', params);
  }
  // 文字列をWeb Crypto APIを用いてSHA-256でhash化しダイジェストを文字列で返す関数
  async function hashString(str) {
    if (window.crypto === undefined || window.crypto.subtle === undefined) {
      return str
    }
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hash = await crypto.subtle.digest('SHA-256', data)
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  }

  function trackingDelibird(type, params) {
    if( type === 'conversion' && __letroUgcGadget.log.new_visitor === 1 ){
      return;
    }
    var logData = $.extend({
      "visitor_id": __letroUgcGadget.log.visitor_id,
      "advertiser_id": __letroUgcGadget.siteId,
      "user_agent": navigator.userAgent,
      "referer": document.referrer,
      "location": location.href,
      "is_sp": __letroUgcGadget.log.is_sp,
    }, params);
    var delibirdUrl = __letroUgcGadget.log.delibird_url + type;
    var req = new XMLHttpRequest();
    req.open('POST', delibirdUrl, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(logData));
  }

  function trackingDelibirdForCustomConversion(type, params) {
    if ( type === 'conversion' && __letroUgcGadget.log.new_visitor === 1 ){
      return;
    }
    var visitorId = __letroUgcGadget.getCookie('__letro_v_id_' + __letroUgcGadget.siteId) || __letroUgcGadget.log.visitor_id;
    var logData = $.extend({
      "visitor_id": visitorId,
      "advertiser_id": __letroUgcGadget.siteId,
      "user_agent": navigator.userAgent,
      "referer": document.referrer,
      "location": location.href,
      "is_sp": __letroUgcGadget.log.is_sp,
    }, params);
    var delibirdUrl = __letroUgcGadget.log.delibird_url + type;
    var req = new XMLHttpRequest();
    req.open('POST', delibirdUrl, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(logData));
  }

  function setAnyItem(sendData){
    var anyItems = {tax:0,free_item_1:'',free_item_2:'',free_item_3:''};
    Object.keys(anyItems).map(function(k) {
      if( typeof sendData[k] == 'undefined' || sendData[k] == ''){
        sendData[k] = anyItems[k];
      }
    });
  }

  function setAndAdd(obj, val, idx, validation, key){
    obj[key] = val;
    validation.push(conversion_products_validation(key, val));
  }
  function setSiteName(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'site_name');
  }
  function setOrderId(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'order_id');
  }
  function setUserId(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'site_user_id');
  }
  function setTax(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'tax');
  }
  function setFreeItem1(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'free_item_1');
  }
  function setFreeItem2(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'free_item_2');
  }
  function setFreeItem3(obj, val, idx, validation){
    setAndAdd(obj, val, idx, validation, 'free_item_3');
  }
  function addItem(obj, val, idx, validation){
    var cnt =0;
    var letroProduct = letroProduct || [];
    var productsLength = 5;

    for (var i=0; i < 5; i++){
      if(__letroUgcProducts[idx][i] === undefined) {
          __letroUgcProducts[idx][i] = undefined;
      }
    }

    __letroUgcProducts[idx].forEach(function(v, cnt){
      switch (cnt) {
        case 1:
          letroProduct['product_id'] = v;
          validation.push(conversion_products_validation('product_id', v));
          break;
        case 2:
          letroProduct['product_name'] = v;
          validation.push(conversion_products_validation('product_name', v));
          break;
        case 3:
          letroProduct['price'] = v;
          validation.push(conversion_products_validation('price', v));
          break;
        case 4:
          letroProduct['quantity'] = v;
          validation.push(conversion_products_validation('quantity', v));
          break;
        default:
      }
      cnt++
    });
    obj['product'].push(letroProduct);
  }

  function conversion_products_validation(key, value){
    var textMax = 50;
    var varcharMax = 50;
    var intMax = 10;
    switch (key) {
      case 'site_name':
      case 'product_name':
        return (value !== undefined && value !== 'null' && value !== null && value !== '' && value.length <= textMax);
        break;
      case 'free_item_1':
      case 'free_item_2':
      case 'free_item_3':
        return value.length <= textMax? true : false;
        break;
      case 'order_id':
      case 'site_user_id':
      case 'product_id':
        pattern = new RegExp("[0-9a-zA-Z-~｡-ﾟ]{1," + varcharMax + "}$");
        return (value !== undefined && value !== 'null' && value !== null && value !== '' &&  value.match(pattern)?true:false);
        break;
      case 'price':
      case 'quantity':
        pattern = new RegExp("^[0-9]{1," + intMax + "}$");
        return (value !== undefined && value !== 'null' && value !== null && value !== '' && String(value).match(pattern)?true:false);
        break;
      case 'tax':
        pattern = new RegExp("^[0-9\.]{1," + intMax + "}$");
        return (String(value).match(pattern) || String(value) == '')? true : false;
        break;
      default:
        return false;
        break;
    }
  }


  function createProducts() {
    var no = 0;
    var productActions = {
      "setSiteName": setSiteName,
      "setOrderId": setOrderId,
      "setUserId": setUserId,
      "setTax": setTax,
      "setFreeItem1": setFreeItem1,
      "setFreeItem2": setFreeItem2,
      "setFreeItem3": setFreeItem3,
      "addItem": addItem
    }
    if (__letroUgcProducts.length > 0){
        var letroProducts = letroProducts || [];
        letroProducts['product'] = [];
        var letroProductsVlid = letroProductsVlid || [];
        __letroUgcProducts.forEach(function(pi){
          productActions[pi[0]](letroProducts, pi[1], no, letroProductsVlid);
          no++
        });
    }
    return {products:letroProducts,vlid:letroProductsVlid};
  }

  function trackingDelibirdByProducts(tableName, sendData, setKeys) {
    var productsData = createProducts();
    Object.keys(productsData.products).map(function(k) {
      if(k !== 'product') sendData[k] = productsData.products[k];
    });
    productsData.products.product.forEach(function(product){
      Object.keys(product).map(function(k) {
         if ( typeof setKeys !== "undefined" ){
           setKeys.forEach(function(setKey){
             if (k == setKey) sendData[k] = product[k];
           });
         } else {
           sendData[k] = product[k];
         }
      });
      setAnyItem(sendData);

      if (productsData.vlid.indexOf(false) === -1) {
         trackingDelibird(tableName, sendData);
      }
    });
  }
}

__letroUgcGadget.sendBaseDomainLog = function(params){
  var logTimestamp = new Date().getTime();
  var logData = $.extend({
    "advertiser_id": __letroUgcGadget.advertiser_id,
    "user_agent": navigator.userAgent,
    "referer": document.referrer,
    "location": location.href,
    "session": __letroUgcGadget.log.session,
    "timestamp": logTimestamp
  }, params);
  var delibirdUrl = __letroUgcGadget.log.delibird_url + 'investigation';
  var req = new XMLHttpRequest();
  req.open('POST', delibirdUrl, true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(logData));
}

__letroUgcGadget.shuffleUgcsetsPattern = function(ugc_sets){
  var random_percent = Math.ceil(Math.random() * 100);
  var target_ugc_set_id = ''
  for( var i = 0; i < ugc_sets.length; i++ ){
    if(random_percent > 0) {
      target_ugc_set_id = ugc_sets[i].ugc_set_id
    }
    random_percent = random_percent - ugc_sets[i].display_rate
  }
  return target_ugc_set_id
}

//launch
__letroUgcGadget.launch = function( data, disp ){
  if( __letroUgcGadget.log.conversions.length > 0 ){
    return;
  }
  //auto linker
  if( Array.isArray(__letroUgcGadget.log.cross_domains) && __letroUgcGadget.log.cross_domains.length > 0 && __letroUgcGadget.auto_linker ){
    var autoLinekerTrigger = ( 'ontouchstart' in document.documentElement ) ? 'touchstart' : 'mousedown';
    var domains = [];
    for( var i = 0; i < __letroUgcGadget.log.cross_domains.length; i++ ){
      domains.push( __letroUgcGadget.log.cross_domains[i].domain );
    }
    $('a').each(function(){
      $self = $(this);
      if( !$self[0].href ){
        return;
      }
      var url = __letroUgcGadget.parseUrl($self[0].href);
      if( url === null ){
        return;
      }

      var host = url.host;
      var linker = (url.search === '' ? '?' : '&') + 'letro_visitor_id=' + __letroUgcGadget.log.visitor_id;
      var rewriteUrl = url.origin + url.pathname + url.search + linker + url.hash;

      // 表示中ページのドメインを含むリンクに対しては自動リンク機能が働かないようにする
      if ( host === __letroUgcGadget.log.domain ) {
        return;
      }

      for ( var i = 0; i < domains.length; i++ ) {
        if( host.indexOf(domains[i]) > -1 ) {
          $self.one( autoLinekerTrigger , function() {
            $(this)[0].href = rewriteUrl
          })
        }
      }

    });
    $('form').each(function(){
      $self = $(this);
      if( !$self[0].action ){
        return;
      }
      var url = __letroUgcGadget.parseUrl($self[0].action);
      if( url === null ){
        return;
      }
      var host = url.host;
      for( var i = 0; i < domains.length; i++ ){
        if( host.indexOf(domains[i]) > -1 ){
          var q = document.createElement('input');
          q.type = 'hidden';
          q.name = 'letro_visitor_id';
          q.value = __letroUgcGadget.log.visitor_id;
          $self[0].appendChild(q);
        }
      }
    });
  }

  if( disp ){
    for( var i = 0; i < data.length; i++ ){
      __letroUgcGadget.ugcSets.push( new letroUgcSet(data[i]) );
    }
  }

}

//init
__letroUgcGadget.init = function(){
  var self = this;
  self.ugcSets = [];
  self.currentUrl = location.href;

  var date = new Date();

  var param = window.location.search;
  var hash  = param.slice(1).split('&');
  for (var i = 0; i < hash.length; i++){
    array = hash[i].split('=');
    if( array[0] === 'letro_preview_token' ){
      self.log.preview_token = array[1]
    }
    if( array[0] === 'letro_review_preview_token' ){
      self.log.letro_review_preview_token = array[1]
    }
  }
  // Log advertiser is undefined
  if (typeof self.advertiser_id === "undefined") {
    self.sendBaseDomainLog({'status': 'advertiser_id is undefined'});
  }
  $.ajax({
    type: 'get',
    url: self.log.settigns_url + self.advertiser_id + '/embedded-settings.json',
    dataType: 'jsonp',
    cache : false,
    data: {
      url: self.currentUrl,
      preview_token: self.log.preview_token,
      letro_review_preview_token: self.log.letro_review_preview_token
    }
  }).then(
    function(data){
      if( 'advertiser_id' in data && data.advertiser_id && 'hash' in data && data.hash) {
        self.siteId = data.advertiser_id;
        self.hash = data.hash;
        self.log.is_sp = self.isSmartphone();

        if( 'cross_domains' in data && data.cross_domains && data.cross_domains.length > 0 ){
          __letroUgcGadget.log.cross_domains = data.cross_domains;
        }
        if( 'domains' in data && data.domains && data.domains.length > 0 ){
          self.log.domains = data.domains;
        }
        else {
          self.sendBaseDomainLog({'status': 'no api data'});
        }

        var domain = null;
        if( self.log.domains !== null  && self.log.domains.length > 0 ){
          for( var i = 0; i < self.log.domains.length; i++ ){
            if( location.hostname.indexOf( self.log.domains[i].domain ) >= 0 ){
              domain = self.log.domains[i].domain;
            }
          }
        }

        if( domain === null && self.log.cross_domains !== null && self.log.cross_domains.length > 0 ){
          for( var i = 0; i < self.log.cross_domains.length; i++ ){
            if( location.hostname.indexOf( self.log.cross_domains[i].domain ) >= 0 ){
              domain = self.log.cross_domains[i].domain;
            }
          }
        }

        if( domain === null ) {
          domain = location.hostname;
          self.sendBaseDomainLog({'status': 'domains not matching'});
        }
        __letroUgcGadget.log.domain = domain;

        self.log.visitor_id = self.getAutoLinkerVisitorId();
        if( self.log.visitor_id === null ){
          self.log.visitor_id = self.getCookie("__letro_v_id_" + self.siteId);
          if( self.log.visitor_id === null || self.log.visitor_id === '' ){
            self.log.visitor_id = self.getCookie("__letro_v_id");
            if( self.log.visitor_id === null || self.log.visitor_id === '' ){
              self.log.visitor_id = String( Math.floor( Math.random() * 100000000 ) );
              __letroUgcGadget.log.new_visitor = 1;
            }
          }
        }
        else {
          self.setCookie('__letro_v_id_' + self.siteId, self.log.visitor_id, 365);
        }

        // set ugc set group
        var baseUrl = self.currentUrl.split('?')[0];
        var ugcSetGroupKey = '__letro_ugc_set_group_' + self.siteId;
        var ugcSetGroups = JSON.parse(localStorage.getItem(ugcSetGroupKey)) || [];

        function convertUgcSetGroup(groupData, uri, targetUgcSetId, self) {
          return {
            uri: uri,
            visitor_id: self.log.visitor_id,
            ugc_set_id: targetUgcSetId,
            group_id: groupData.id,
            ugc_sets: groupData.ugc_sets,
          }
        }

        function findUgcSetGroup(ugcSetGroups, uri, id) {
          return ugcSetGroups.find(
            function(group) {
              return group.uri === uri && group.group_id === id;
            }
          );
        }

        function saveUgcSetGroupToLocalStorage() {
          ugcSetGroups = data.ugc_set_groups
            .filter(function (ugcGroup) {
              return ugcGroup.available === 1
            })
            .map(function (ugcGroup) {
              var ugcSetGroup = findUgcSetGroup(ugcSetGroups, baseUrl, ugcGroup.id)
              if (
                ugcSetGroup &&
                self.log.visitor_id === ugcSetGroup.visitor_id &&
                ugcGroup.ugc_sets.filter((ugcSet) => ugcSet.ugc_set_id === ugcSetGroup.ugc_set_id).length > 0
              ) {
                ugcSetGroup.ugc_sets = ugcGroup.ugc_sets
                return ugcSetGroup
              } else {
                var target_ugc_set_id = __letroUgcGadget.shuffleUgcsetsPattern(ugcGroup.ugc_sets)
                return convertUgcSetGroup(ugcGroup, baseUrl, target_ugc_set_id, self)
              }
            })
          localStorage.setItem(ugcSetGroupKey, JSON.stringify(ugcSetGroups))
        }

        saveUgcSetGroupToLocalStorage()

        // set ugc_set_id to data
        data.ugc_sets = data.ugc_sets.filter(function(ugcSet) {
          var ugcSetGroup = ugcSetGroups.filter(function (groupResult) {
            var result = groupResult.ugc_sets.filter(function (ugcSetResult) {
              return ugcSetResult.ugc_set_id === ugcSet.id
            })
            return result ? result[0] : {}
          })
          return !ugcSetGroup || !ugcSetGroup[0] || ugcSetGroup[0].ugc_set_id === ugcSet.id
        });

        //EC MODE
        if( 'ec_mode' in data ){
          self.ec_mode = data.ec_mode;
        }
        if ( 'product_id' ){
          self.product_id = data.product_id;
        }

        if(data.product_available === 0 && self.log.preview_token === null){
          data.ugc_sets = '';
        }
        if( 'conversions' in data && data.conversions && data.conversions.length > 0 ){
          // is spa
          data.conversions.filter(function(c){return c.is_spa}).forEach(function(c){
            __letroUgcGadget.setConversionEvent(c.url_pattern, c.id)
          })
          // is not spa
          __letroUgcGadget.log.conversions = data.conversions.filter(function(c){return !c.is_spa});
          __letroUgcGadget.sendTrackingData('conversion', __letroUgcGadget.log.conversions);
        }
        if( 'should_log' in data ){
          __letroUgcGadget.log.should_log = data.should_log;
        }

        self.launch(data.ugc_sets, data.ugc_sets.length > 0);
      }
      else {
        self.sendError('ugc_setの取得失敗');
      }
    },
    function(XMLHttpRequest, textStatus, errorThrown){
      console.log(XMLHttpRequest);
      console.log(textStatus);
      console.log(errorThrown);
    }
  );
}

__letroUgcGadget.init();




})($letroUgcsetJQ);
