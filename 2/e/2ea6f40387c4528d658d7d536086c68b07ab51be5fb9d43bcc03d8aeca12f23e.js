e>=5)return void this.report("register_app_info.error",{error:"Exceed maximum number of libraries"});if(this.wrappersMap.has(g))return void this.report("register_app_info.error",{error:"Register duplicated library: ".concat(g)});this.report("register_app_info",{app_info_raw:g,app_info_partner_id:b||null,app_info_url:k||null,app_info_version:C||null}),this.wrappersMap.set(g,v);break;case"stripe-controller-local-storage-acquire-response":var Z=r.payload.nonce;this._handleLocalStorageAcquireResponse(Z);break;case"stripe-controller-frame-precedence-response":var A=r.payload,P=A.nonce,N=A.framePrecedence;if(!P||"string"!=typeof P||!this.requests[P])break;var T=this.requests[P].resolve;N&&"object"==typeof N&&T((0,E.Z)({},N)),delete this.requests[P];break;case"complete-acss-bank-collection":this.acssBankCollectionResolver&&this.acssBankCollectionResolver(r.payload);break;case"meta-pay-confirm-payment":this.walletCompletionResolver&&this.walletCompletionResolver(r.payload);break;case"get-passive-captcha-token-response":this.getPassiveCaptchaTokenResolver&&this.getPassiveCaptchaTokenResolver(r.payload.result)}}},{key:"trackExperimentExposure",value:function(e){this.experimentCache.has(e.experiment_retrieved)||(this.experimentCache.add(e.experiment_retrieved),on.log("experiment_exposure",e,{priority:"high"}))}},{key:"_handleInnerReport",value:function(e,t){this.report(e,t)}},{key:"_handleInnerUpdateLogParams",value:function(e){this.updateLogParams(e)}},{key:"_handleInnerMessage",value:function(e,t){var n=this,r=e.frameId,a=e.message,o=r&&this.frames[r];if(o)switch(a.action){case"stripe-controller-request-complete":var i=a.payload,s=i.nonce,l=i.result,u=i.error;if(!s||"string"!=typeof s||!this.requests[s])break;var c=this.requests[s],d=c.resolve,p=c.reject;l&&"object"==typeof l?d((0,E.Z)((0,E.Z)({},l),{},{frameId:r})):u&&"object"==typeof u&&p((0,E.Z)((0,E.Z)({},u),{},{frameId:r})),delete this.requests[s];break;case"stripe-inner-action":this.innerAction(a.payload.type,a.payload.options,t,r).then((function(e){return n.sendMessage(r,{action:"stripe-inner-action-complete",payload:{nonce:a.payload.nonce,result:e}})}),(function(e){Ee.OG[a.payload.type]&&n.report(ln[a.payload.type].error,{error:e instanceof Error?(0,E.Z)((0,E.Z)({},e),{},{name:e.name,message:e.message}):e}),n.sendMessage(r,{action:"stripe-inner-action-error",payload:{nonce:a.payload.nonce,error:e.message}})}));break;case"stripe-broadcast":this.broadcast(a.payload);break;case"stripe-group-update":case"stripe-group-action":var m=o.group,_=m&&this.groups[m];_&&r&&-1!==_.indexOf(r)&&_.forEach((function(t){r!==t&&n._sendMessage((0,E.Z)((0,E.Z)({},e),{},{frameId:t,type:"controller"}))}));break;case"stripe-link-in-card-update-config":this._linkInCardConfigs=(0,E.Z)((0,E.Z)({},this._linkInCardConfigs),a.payload);break;default:this._handleOuterMessage(e,t)}else this._handleOuterMessage(e,t)}},{key:"_handleLinkMessage",value:function(e,t){var n=e.message,r=n.action,a=n.payload;if("stripe-remember-link-login"===r){var o=a.authSessionClientSecret,i=a.integrationType;this.report("link.set_local_storage_with_login_from_messages",{integrationType:i}),this.linkApiClient.temporaryAndDangerous_setCredentials({authSessionClientSecret:o})}else this._handleOuterMessage(e,t)}},{key:"_buildEncodedUrlParams",value:function(e){var t=e.mids,n=e.betas,r=e.layoutType,a=(0,A.Z)(e,sy),o=(0,B.Ds)(this.referrer);return K(JSON.stringify((0,E.Z)({apiKey:this.apiKey,stripeAccount:this.stripeAccount,mids:t,betas:n,layoutType:r,referrerOrigin:o?o.origin:null},a)))}}]),e}(),yy=fy;Sm=window.location.hash.substring(1).split("?")[0],new yy(Sm)},64007:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var r=function(e,t){return"".concat(e||"https://js.stripe.com/v3/").concat(t||"")}},76466:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var r=function(e){return Boolean(e&&"function"==typeof e.then)}},90874:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});var r=function(){try{var e,t,n;return(null===(e=window)||void 0===e||null===(t=e.navigator)||void 0===t||null===(n=t.connection)||void 0===n?void 0:n.type)||"unknown"}catch(e){return"unknown"}}},68148:function(e,t,n){"use strict";n.d(t,{O8:function(){return r},i3:function(){return a}});var r=function(e){return e.replace(/[A-Z]/g,(function(e){return"_".concat(e[0].toLowerCase())}))},a=function(e){return e.replace(/_./g,(function(e){return e[1].toUpperCase()}))}},63110:function(e){e.exports=function(e){var t=e.split("").map((function(e){return e.charCodeAt(0)})).reduce((function(e,t){return(e<<5)-e+t&(e<<5)-e+t}),0).toString();return"_".concat(t.replace(/[-.]/g,"_"))}},34693:function(e,t,n){"use strict";n.d(t,{Sl:function(){return o},eH:function(){return s},qQ:function(){return i}});var r=n(93324),a=new RegExp("^(?:4[0-9]{15}|(?:5[1-5]|2[2-7])[0-9]{14}|3[47][0-9]{13}|6[045][0-9]{14}|3[089][0-9]{14}|36[0-9]{12}|35[0-9]{14}|(?:62|81)[0-9]{11,}|(?:50|63)[0-9]{14})$"),o=function(e){if("string"!=typeof e)return!1;var t=e.replace(/[\s-]+/g,"").match(/\d{13,}/g);return!!t&&t.some((function(e){return a.test(e)&&function(e){for(var t="0".charCodeAt(0),n=e.length%2,r=0,a=e.length-1;a>=0;--a){var o=a%2===n,i=e.charCodeAt(a)-t;o&&(i*=2),i>9&&(i-=9),r+=i}return r%10==0}(e)}))},i=function(e){var t=e.split("/").map((function(e){return e.trim()})),n=(0,r.Z)(t,2),a=n[0],o=void 0===a?"":a,i=n[1];return{year:void 0===i?"":i,month:o}},s=function(e,t,n){var r=new Date(Date.now()),a=e<100?r.getFullYear()%100:r.getFullYear(),o=r.getMonth()+1;return isNaN(e)||isNaN(t)?null!=n&&n.ignoreIncomplete?null:"incomplete_expiry":e-a<0?"invalid_expiry_year_past":e-a>50?"invalid_expiry_year":e-a==0&&t<o?"invalid_expiry_month_past":null}},39096:function(e,t,n){"use strict";function r(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];if(!e){var o;if(void 0===t)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=0;(o=new Error(t.replace(/%s/g,(function(){return r[i++]})))).name="Invariant Violation"}throw o}}n.d(t,{k:function(){return r}})},84506:function(e,t,n){"use strict";function r(e){return(0,a.Z)(e)||(0,o.Z)(e)||(0,i.Z)(e)||(0,s.Z)()}n.d(t,{Z:function(){return r}});var a=n(83878),o=n(59199),i=n(40181),s=n(25267)}},o={};e.m=a,t=[],e.O=function(n,r,a,o){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],o=t[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,a,o]},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))},e.u=function(e){return"fingerprinted/js/"+({1944:"phone-numbers-lib",2897:"sentry",7058:"stripe-cookies"}[e]||e)+"-"+{1944:"ecb70658f322874fe923ef7bae435c3c",2887:"5e8142915ffb9da7489d99988a9b5472",2897:"77cc8ce0d7b0f5b682c20275277a2620",7058:"eb98f74a74c9f61838b42521c10368fe",7799:"c32de2e7e4161f06c5b80383ef8e23e9"}[e]+".js"},e.miniCssF=function(){},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="stripe-js-v3:",e.l=function(t,a,o){if(n[t])n[t].push(a);else{var i,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){i=c;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,e.nc&&i.setAttribute("nonce",e.nc),i.setAttribute("data-webpack",r+o),i.src=t),n[t]=[a];var d=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var a=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),e)return e(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.j=2204,e.p="https://js.stripe.com/v3/",function(){var t={2204:0,7058:0};e.f.j=function(n,r){var a=e.o(t,n)?t[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(e,r){a=t[n]=[e,r]}));r.push(a[2]=o);var i=e.p+e.u(n),s=new Error;e.l(i,(function(r){if(e.o(t,n)&&(0!==(a=t[n])&&(t[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}}),"chunk-"+n,n)}},e.O.j=function(e){return 0===t[e]};var n=function(n,r){var a,o,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(l)var c=l(e)}for(n&&n(r);u<i.length;u++)o=i[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},r=window.webpackChunkStripeJSinner=window.webpackChunkStripeJSinner||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var i=e.O(void 0,[3712],(function(){return e(8293)}));i=e.O(i)}();