// For license information, see `https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/launch-41f8ab804942.js`.
window._satellite=window._satellite||{},window._satellite.container={buildInfo:{minified:!0,buildDate:"2023-11-03T19:01:19Z",turbineBuildDate:"2023-02-22T20:37:26Z",turbineVersion:"27.5.0"},environment:{id:"ENc70baddfe38d4faeaae909a2bc1b413d",stage:"production"},dataElements:{RSID:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){var e="cnnarabicdev";try{e=window.cna_omniture?window.cna_omniture.rs_flag&&"dev"==window.cna_omniture.rs_flag?"cnnarabicdev":"cnnarabic":-1!=window.location.hostname.indexOf("arabic.cnn.com")?"cnnarabic":"cnnarabicdev"}catch(e){}return e}}}},extensions:{"sdi-toolkit":{displayName:"SDI Toolkit",hostedLibFilesBaseUrl:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/hostedLibFiles/EP6b416004bd4a44b784a1a772276189d9/",settings:{utilLoadScript:!0,utilQueryString:!0,polyfillObjectAssign:!0,polyfillObjectPromise:!0},modules:{"sdi-toolkit/src/lib/main/extension_main.js":{script:function(e,t,n,r){"use strict";var i=n("@adobe/reactor-window"),a=n("@adobe/reactor-object-assign"),o=n("@adobe/reactor-promise"),s=r.getExtensionSettings()||{};r.logger.debug("Initializing with settings",s),s.polyfillObjectAssign&&(i.Object.assign?r.logger.debug("Object.assign exists. No polyfill needed."):(i.Object.assign=a,r.logger.debug("Object.assign polyfilled from @adobe/reactor-object-assign."))),s.polyfillObjectAssign&&(i.Promise?r.logger.debug("Promise exists. No polyfill needed."):(i.Promise=o,r.logger.debug("Promise polyfilled from @adobe/reactor-promise."))),s.utilQueryString&&(i._sdiToolkit=i._sdiToolkit||{},i._sdiToolkit.reactor=i._sdiToolkit.reactor||{},i._sdiToolkit.reactor.queryString||(i._sdiToolkit.reactor.queryString=n("@adobe/reactor-query-string"),r.logger.debug("_sdiToolkit.reactor.queryString installed from @adobe/reactor-query-string."))),s.utilLoadScript&&(i._sdiToolkit=i._sdiToolkit||{},i._sdiToolkit.reactor=i._sdiToolkit.reactor||{},i._sdiToolkit.reactor.loadScript||(i._sdiToolkit.reactor.loadScript=n("@adobe/reactor-load-script"),r.logger.debug("_sdiToolkit.reactor.loadScript installed from @adobe/reactor-load-script.")))}}}},"adobe-mcid":{displayName:"Experience Cloud ID Service",hostedLibFilesBaseUrl:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/hostedLibFiles/EPf0412a5c65e5429ab0e5ed8ba2256510/",settings:{orgId:"7FF852E2556756057F000101@AdobeOrg",variables:[{name:"trackingServer",value:"metrics.cnn.com"},{name:"trackingServerSecure",value:"smetrics.cnn.com"}],doesOptInApply:!0,isOptInStorageEnabled:!1},modules:{"adobe-mcid/src/lib/sharedModules/mcidInstance.js":{script:function(e,t,n,r){"use strict";var i=n("@adobe/reactor-document"),a=n("../codeLibrary/VisitorAPI"),o=n("../../view/utils/timeUnits"),s=function(e){return e.reduce((function(e,t){var n=/^(true|false)$/i.test(t.value)?JSON.parse(t.value):t.value;return e[t.name]=n,e}),{})},c=function(e){var t=r.getExtensionSettings();if("string"!=typeof t.orgId)throw new TypeError("Org ID is not a string.");var n=s(t.variables||[]),i=t.doesOptInApply;i&&("boolean"==typeof i?n.doesOptInApply=i:t.optInCallback&&(n.doesOptInApply=t.optInCallback));var a=t.isOptInStorageEnabled;a&&(n.isOptInStorageEnabled=a);var c=t.optInCookieDomain;c&&(n.optInCookieDomain=c);var l=t.optInStorageExpiry;if(l){var u=t.timeUnit;if(u&&o[u]){var d=l*o[u];n.optInStorageExpiry=d}}else!0===a&&(n.optInStorageExpiry=33696e3);var f=t.previousPermissions;f&&(n.previousPermissions=f);var p=t.preOptInApprovals;if(p)n.preOptInApprovals=p;else{var m=t.preOptInApprovalInput;m&&(n.preOptInApprovals=m)}var g=t.isIabContext;g&&(n.isIabContext=g);var h=e.getInstance(t.orgId,n);return r.logger.info('Created instance using orgId: "'+t.orgId+'"'),r.logger.info("Set variables: "+JSON.stringify(n)),h.getMarketingCloudVisitorID((function(e){r.logger.info("Obtained Marketing Cloud Visitor Id: "+e)}),!0),h},l=function(e){return(r.getExtensionSettings().pathExclusions||[]).some((function(t){return t.valueIsRegex?new RegExp(t.value,"i").test(e):t.value===e}))},u=null;_satellite.getVisitorId=function(){return u},l(i.location.pathname)?r.logger.warn("MCID library not loaded. One of the path exclusions matches the current path."):u=c(a),e.exports=u},name:"mcid-instance",shared:!0},"adobe-mcid/src/lib/codeLibrary/VisitorAPI.js":{script:function(e){e.exports=(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,r=this;return function(){r.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=(t=void 0===t?[]:t)instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!E.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach((function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)}),this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function r(e,t,n){var r=null==e?void 0:e[t];return void 0===r?n:r}function i(e){for(var t=/^\d+$/,n=0,r=e.length;n<r;n++)if(!t.test(e[n]))return!1;return!0}function a(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var r=parseInt(e[n],10),i=parseInt(t[n],10);if(r>i)return 1;if(i>r)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),r=t.toString().split(".");return i(n.concat(r))?(a(n,r),o(n,r)):NaN}function c(e){return e===Object(e)&&0===Object.keys(e).length}function l(e){return"function"==typeof e||e instanceof Array&&e.length}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=ue("log",e,t),this.warn=ue("warn",e,t),this.error=ue("error",e,t)}function d(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).cookieName,t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).cookies;if(!e||!t)return{get:Te,set:Te,remove:Te};var n={remove:function(){t.remove(e)},get:function(){var n=t.get(e),r={};try{r=JSON.parse(n)}catch(n){r={}}return r},set:function(r,i){i=i||{};var a=n.get(),o=Object.assign(a,r);t.set(e,JSON.stringify(o),{domain:i.optInCookieDomain||"",cookieLifetime:i.optInStorageExpiry||3419e4,expires:!0})}};return n}function f(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function p(){function e(e,t){var n=ge(e);return n.length?n.every((function(e){return!!t[e]})):he(t)}function t(){D(I),T(te.COMPLETE),h(g.status,g.permissions),s&&m.set(g.permissions,{optInCookieDomain:c,optInStorageExpiry:l}),v.execute(Me)}function n(e){return function(n,r){if(!ve(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return T(te.CHANGED),Object.assign(I,ye(ge(n),e)),r||t(),g}}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.doesOptInApply,a=r.previousPermissions,o=r.preOptInApprovals,s=r.isOptInStorageEnabled,c=r.optInCookieDomain,l=r.optInStorageExpiry,u=r.isIabContext,f=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).cookies,p=De(a);Ae(p,"Invalid `previousPermissions`!"),Ae(o,"Invalid `preOptInApprovals`!");var m=d({cookieName:"adobeujs-optin"},{cookies:f}),g=this,h=ee(g),v=se(),y=Se(p),b=Se(o),_=s?m.get():{},S={},C=function(e,t){return Ce(e)||t&&Ce(t)?te.COMPLETE:te.PENDING}(y,_),w=function(e,t,n){var r=ye(oe,!i);return i?Object.assign({},r,e,t,n):r}(b,y,_),I=be(w),T=function(e){return C=e},D=function(e){return w=e};g.deny=n(!1),g.approve=n(!0),g.denyAll=g.deny.bind(g,oe),g.approveAll=g.approve.bind(g,oe),g.isApproved=function(t){return e(t,g.permissions)},g.isPreApproved=function(t){return e(t,b)},g.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?g.on(te.COMPLETE,e):Te;return!i||i&&g.isComplete||o?e(g.permissions):t||v.add(Me,(function(){return e(g.permissions)})),n},g.complete=function(){g.status===te.CHANGED&&t()},g.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(Pe);S[e.name]||(S[e.name]=e,e.onRegister.call(e,g))},g.execute=Ee(S),g.memoizeContent=function(e){Ie(e)&&m.set(e,{optInCookieDomain:c,optInStorageExpiry:l})},g.getMemoizedContent=function(e){var t=m.get();if(t)return t[e]},Object.defineProperties(g,{permissions:{get:function(){return w}},status:{get:function(){return C}},Categories:{get:function(){return ne}},doesOptInApply:{get:function(){return!!i}},isPending:{get:function(){return g.status===te.PENDING}},isComplete:{get:function(){return g.status===te.COMPLETE}},__plugins:{get:function(){return Object.keys(S)}},isIabContext:{get:function(){return u}}})}function m(e,t){function n(){i=null,e.call(e,new f("The call took longer than you wanted!"))}function r(){i&&(clearTimeout(i),e.apply(e,arguments))}if(void 0===t)return e;var i=setTimeout(n,t);return r}function g(){if(window.__tcfapi)return window.__tcfapi;var e=window;if(e!==window.top){for(var t;!t;){e=e.parent;try{e.frames.__tcfapiLocator&&(t=e)}catch(e){}if(e===window.top)break}if(t){var n={};return window.__tcfapi=function(e,r,i,a){var o=Math.random()+"",s={__tcfapiCall:{command:e,parameter:a,version:r,callId:o}};n[o]=i,t.postMessage(s,"*")},window.addEventListener("message",(function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__tcfapiReturn){var r=t.__tcfapiReturn;"function"==typeof n[r.callId]&&(n[r.callId](r.returnValue,r.success),delete n[r.callId])}}),!1),window.__tcfapi}pe.error("__tcfapi not found")}else pe.error("__tcfapi not found")}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=!0===e.vendor.consents[t],i=n.every((function(t){return!0===e.purpose.consents[t]}));return r&&i}function v(){var e=this;e.name="iabPlugin",e.version="0.0.2";var t,n=se(),r={transparencyAndConsentData:null},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r[e]=t};e.fetchConsentData=function(e){var t=m(e.callback,e.timeout);a({callback:t})},e.isApproved=function(e){var t=e.callback,n=e.category,i=e.timeout;if(r.transparencyAndConsentData)return t(null,h(r.transparencyAndConsentData,re[n],ie[n]));var o=m((function(e,r){t(e,h(r,re[n],ie[n]))}),i);a({category:n,callback:o})},e.onRegister=function(n){t=n;var r=Object.keys(re),i=function(e,t){!e&&t&&(r.forEach((function(e){var r=h(t,re[e],ie[e]);n[r?"approve":"deny"](e,!0)})),n.complete())};e.fetchConsentData({callback:i})};var a=function(e){var a=e.callback;if(r.transparencyAndConsentData)return a(null,r.transparencyAndConsentData);n.add("FETCH_CONSENT_DATA",a),o((function(e,a){if(a){var o=be(e),s=t.getMemoizedContent("iabConsentHash"),c=fe(o.tcString).toString(32);o.consentString=e.tcString,o.hasConsentChangedSinceLastCmpPull=s!==c,i("transparencyAndConsentData",o),t.memoizeContent({iabConsentHash:c})}n.execute("FETCH_CONSENT_DATA",[null,r.transparencyAndConsentData])}))},o=function(e){var t=Oe(re),n=g();"function"==typeof n&&n("getTCData",2,e,t)}}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,r=1;r<arguments.length;++r)for(t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e};var b,_,S={MESSAGES:{HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},STATE_KEYS_MAP:{MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},ASYNC_API_MAP:{MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},SYNC_API_MAP:{CUSTOMERIDS:"getCustomerIDs"},ALL_APIS:{MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},FIELDGROUP_TO_FIELD:{MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},FIELDS:{MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},AUTH_STATE:{UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},OPT_OUT:{GLOBAL:"global"},SAME_SITE_VALUES:{LAX:"Lax",STRICT:"Strict",NONE:"None"}},C=S.STATE_KEYS_MAP,w=function(e){function t(){}function n(t,n){var r=this;return function(){var i=e(0,t),a={};return a[t]=i,r.setStateAndPublish(a),n(i),i}}this.getMarketingCloudVisitorID=function(e){e=e||t;var r=this.findField(C.MCMID,e),i=n.call(this,C.MCMID,e);return void 0!==r?r:i()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID((function(t){e({MCMID:t})}))}},I=S.MESSAGES,T=S.ASYNC_API_MAP,D=S.SYNC_API_MAP,A=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(I.GETSTATE),""}}function n(n){this[T[n]]=function(r){r=r||e;var i=this.findField(n,r),a=t.call(this,n,r);return void 0!==i?i:a()}}function r(t){this[D[t]]=function(){return this.findField(t,e)||{}}}Object.keys(T).forEach(n,this),Object.keys(D).forEach(r,this)},k=S.ASYNC_API_MAP,O=function(){Object.keys(k).forEach((function(e){this[k[e]]=function(t){this.callbackRegistry.add(e,t)}}),this)},E=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)};var r=function(){var e=navigator.appName,t=navigator.userAgent;return"Microsoft Internet Explorer"===e||t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0&&t.indexOf("Windows NT 6")>=0};n.getIeVersion=function(){return document.documentMode?document.documentMode:r()?7:null},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce((function(t,n){return e[n]&&(t[n]=e[n]),t}),Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var r=parseInt(e.d_ottl,10);return isNaN(r)&&(r=7200),{optOut:t,d_ottl:r}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}})),M=(E.isObjectEmpty,E.isValueEmpty,E.getIeVersion,E.encodeAndBuildRequest,E.isObject,E.defineGlobalNamespace,E.pluck,E.parseOptOut,E.normalizeBoolean,n),P=S.MESSAGES,N={0:"prefix",1:"orgID",2:"state"},L=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach((function(e,n){void 0!==e&&(t[N[n]]=2!==n?e:JSON.parse(e))})),t}catch(e){}},this.isInvalid=function(n){var r=this.parse(n);if(!r||Object.keys(r).length<2)return!0;var i=e!==r.orgID,a=!t||n.origin!==t,o=-1===Object.keys(P).indexOf(r.prefix);return i||a||o},this.send=function(n,r,i){var a=r+"|"+e;i&&i===Object(i)&&(a+="|"+JSON.stringify(i));try{n.postMessage(a,t)}catch(e){}}},x=S.MESSAGES,j=function(e,t,n,r){function i(e){Object.assign(p,e)}function a(e){Object.assign(p.state,e),Object.assign(p.state.ALLFIELDS,e),p.callbackRegistry.executeAll(p.state)}function o(e){if(!h.isInvalid(e)){g=!1;var t=h.parse(e);p.setStateAndPublish(t.state)}}function s(e){!g&&m&&(g=!0,h.send(r,e))}function c(){i(new w(n._generateID)),p.getMarketingCloudVisitorID(),p.callbackRegistry.executeAll(p.state,!0),y.removeEventListener("message",l)}function l(e){if(!h.isInvalid(e)){var t=h.parse(e);g=!1,y.clearTimeout(p._handshakeTimeout),y.removeEventListener("message",l),i(new A(p)),y.addEventListener("message",o),p.setStateAndPublish(t.state),p.callbackRegistry.hasCallbacks()&&s(x.GETSTATE)}}function u(){m&&postMessage?(y.addEventListener("message",l),s(x.HANDSHAKE),p._handshakeTimeout=setTimeout(c,250)):c()}function d(){y.s_c_in||(y.s_c_il=[],y.s_c_in=0),p._c="Visitor",p._il=y.s_c_il,p._in=y.s_c_in,p._il[p._in]=p,y.s_c_in++}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(p[e]=function(){})}Object.keys(n).forEach(e),p.getSupplementalDataID=n.getSupplementalDataID,p.isAllowed=function(){return!0}}var p=this,m=t.whitelistParentDomain;p.state={ALLFIELDS:{}},p.version=n.version,p.marketingCloudOrgID=e,p.cookieDomain=n.cookieDomain||"",p._instanceType="child";var g=!1,h=new L(e,m);p.callbackRegistry=M(),p.init=function(){d(),f(),i(new O(p)),u()},p.findField=function(e,t){if(void 0!==p.state[e])return t(p.state[e]),p.state[e]},p.messageParent=s,p.setStateAndPublish=a},R=S.MESSAGES,V=S.ALL_APIS,F=S.ASYNC_API_MAP,U=S.FIELDGROUP_TO_FIELD,B=function(e,t){function n(){var t={};return Object.keys(V).forEach((function(n){var r=V[n],i=e[r]();E.isValueEmpty(i)||(t[n]=i)})),t}function r(){var t=[];return e._loading&&Object.keys(e._loading).forEach((function(n){if(e._loading[n]){var r=U[n];t.push(r)}})),t.length?t:null}function i(t){return function n(){var i=r();if(i){var a=F[i[0]];e[a](n,!0)}else t()}}function a(e,r){var i=n();t.send(e,r,i)}function o(e){c(e),a(e,R.HANDSHAKE)}function s(e){i((function(){a(e,R.PARENTSTATE)}))()}function c(n){function r(r){i.call(e,r),t.send(n,R.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var i=e.setCustomerIDs;e.setCustomerIDs=r}return function(e){t.isInvalid(e)||(t.parse(e).prefix===R.HANDSHAKE?o:s)(e.source)}},H=function(e,t){function n(e){return function(n){r[e]=n,++i===a&&t(r)}}var r={},i=0,a=Object.keys(e).length;Object.keys(e).forEach((function(t){var r=e[t];if(r.fn){var i=r.args||[];i.unshift(n(t)),r.fn.apply(r.context||null,i)}}))},G={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),r=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,r<0?t.length:r))},set:function(e,t,n){var i=r(n,"cookieLifetime"),a=r(n,"expires"),o=r(n,"domain"),s=r(n,"secure"),c=r(n,"sameSite"),l=s?"Secure":"",u=c?"SameSite="+c+";":"";if(a&&"SESSION"!==i&&"NONE"!==i){var d=""!==t?parseInt(i||0,10):-60;if(d)(a=new Date).setTime(a.getTime()+1e3*d);else if(1===a){var f=(a=new Date).getYear();a.setYear(f+2+(f<1900?1900:0))}}else a=0;return e&&"NONE"!==i?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(o?" domain="+o+";":"")+u+l,this.get(e)===t):0},remove:function(e,t){var n=r(t,"domain");n=n?" domain="+n+";":"";var i=r(t,"secure"),a=r(t,"sameSite"),o=i?"Secure":"",s=a?"SameSite="+a+";":"";document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n+s+o}},q=function(e,t){!e&&y.location&&(e=y.location.hostname);var n,r=e.split("."),i=t||{};for(n=r.length-2;n>=0;n--)if(i.domain=r.slice(n).join("."),G.set("test","cookie",i))return G.remove("test",i),i.domain;return""},W={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},Y=!!y.postMessage,z={postMessage:function(e,t,n){var r=1;t&&(Y?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+r+++"&"+e))},receiveMessage:function(e,t){var n;try{Y&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),y.addEventListener?y[e?"addEventListener":"removeEventListener"]("message",n):y[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},$=function(e){var t,n,r="0123456789",i="",a="",o=8,s=10,c=10;if(1==e){for(r+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),i+=r.substring(n,n+1),n=Math.floor(Math.random()*o),a+=r.substring(n,n+1),o=16;return i+"-"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),i+=r.substring(n,n+1),0===t&&9==n?s=3:((1==t||2==t)&&10!=s&&2>n||2<t)&&(s=10),n=Math.floor(Math.random()*c),a+=r.substring(n,n+1),0===t&&9==n?c=3:((1==t||2==t)&&10!=c&&2>n||2<t)&&(c=10);return i+a},Q=function(e){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(y.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new y[this.corsMetadata.corsType]},fireCORS:function(t,n){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void i.handleCORSError(t,null,"Response is not JSON")}catch(e){return void i.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var r=t.callback,a=y,o=0;o<r.length;o++)a=a[r[o]];a(n)}catch(e){i.handleCORSError(t,e,"Error forming callback function")}}var i=this;n&&(t.loadErrorHandler=n);try{var a=this.getCORSInstance();a.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(a.withCredentials=!0,a.timeout=e.loadTimeout,a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),a.onerror=function(e){i.handleCORSError(t,e,"onerror")},a.ontimeout=function(e){i.handleCORSError(t,e,"ontimeout")},a.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,r){e.CORSErrors.push({corsData:t,error:n,description:r}),t.loadErrorHandler&&("ontimeout"===r?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},J={POST_MESSAGE_ENABLED:!!y.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},K=function(e,t){var n=y.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,r="http://fast.",i="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(r=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=r+this.subdomain+".demdex.net/dest5.html"+i,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:J.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){(i=n.createElement("iframe")).sandbox="allow-scripts allow-same-origin",i.title="Adobe ID Syncing iFrame",i.id=r.id,i.name=r.id+"_name",i.style.cssText="display: none; width: 0; height: 0;",i.src=r.url,r.newIframeCreated=!0,t(),n.body.appendChild(i)}function t(e){i.addEventListener("load",(function(){i.className="aamIframeLoaded",r.iframeHasLoaded=!0,r.fireIframeLoadedCallbacks(e),r.requestToProcess()}))}this.startedAttachingIframe=!0;var r=this,i=n.getElementById(this.id);i?"IFRAME"!==i.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==i.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=i,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=i},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach((function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})})),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){i.jsonForComparison.push(t),i.jsonWaiting.push(t),i.processSyncOnPage(t)}var r,i=this;if(t===Object(t)&&t.ibs)if(r=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,c=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],r===JSON.stringify(s.ibs||[])){c=!0;break}c?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!J.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var l=this.jsonWaiting.shift();this.process(l),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout((function(){i.messageSendingInterval=J.POST_MESSAGE_ENABLED?null:150}),this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var r=e._getField("MCAAMLH"),i=t.d_region||t.dcs_region;return r?i&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i),parseInt(r,10)!==i&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),r=i)):(r=i)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r)),r||(r=""),r},processSyncOnPage:function(e){var t,n,r,i;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(r=0;r<n;r++)(i=t[r]).syncOnPage&&this.checkFirstPartyCookie(i,"","syncOnPage")},process:function(e){var t,n,r,i,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,r=0;r<n;r++)i=t[r],a=[o("ibs"),o(i.id||""),o(i.tag||""),E.encodeAndBuildRequest(i.url||[],","),o(i.ttl||""),"","",i.fireURLSync?"true":"false"],i.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):i.fireURLSync&&this.checkFirstPartyCookie(i,a.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,r){var i="syncOnPage"===r,a=i?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,c=e._getField(a),l=!1,u=!1,d=Math.ceil((new Date).getTime()/J.MILLIS_PER_DAY);c?(o=c.split("*"),l=(s=this.pruneSyncData(o,t.id,d)).dataPresent,u=s.dataValid,l&&u||this.fireSync(i,t,n,o,a,d)):(o=[],this.fireSync(i,t,n,o,a,d))},pruneSyncData:function(e,t,n){var r,i,a,o=!1,s=!1;for(i=0;i<e.length;i++)r=e[i],a=parseInt(r.split("-")[1],10),r.match("^"+t+"-")?(o=!0,n<a?s=!0:(e.splice(i,1),i--)):n>=a&&(e.splice(i,1),i--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort((function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)}));e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,r,i,a,o){var s=this;if(t){if("img"===n.tag){var c,l,u,d,f=n.url,p=e.loadSSL?"https:":"http:";for(c=0,l=f.length;c<l;c++){u=f[c],d=/^\/\//.test(u);var m=new Image;m.addEventListener("load",function(t,n,r,i){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,c,l,u,d=e._getField(a),f=[];if(d)for(c=0,l=(o=d.split("*")).length;c<l;c++)(u=o[c]).match("^"+n.id+"-")||f.push(u);s.setSyncTrackingData(f,n,r,i)}}(this.onPagePixels.length,n,a,o)),m.src=(d?p:"")+u,this.onPagePixels.push(m)}}}else this.addMessage(r),this.setSyncTrackingData(i,n,a,o)},addMessage:function(t){var n=encodeURIComponent(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((J.POST_MESSAGE_ENABLED?"":n)+t)},setSyncTrackingData:function(t,n,r,i){t.push(n.id+"-"+(i+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(r,t.join("*"))},sendMessages:function(){var e,t=this,n="",r=encodeURIComponent;this.regionChanged&&(n=r("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?J.POST_MESSAGE_ENABLED?(e=n+r("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout((function(){t.sendMessages()}),this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){z.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&("canSetThirdPartyCookies"===(t=e.replace(n,"").split("|"))[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(r){(null==this.url||r.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=r.subdomain||"",this.url=this.getUrl()),r.ibs instanceof Array&&r.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(r):this.requestToProcess(r),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(r)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>J.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},X={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{type:"boolean"},disableThirdPartyCalls:{type:"boolean"},discardTrackingServerECID:{type:"boolean"},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{type:"boolean"},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{type:"boolean"},disableThirdPartyCookies:{type:"boolean"},idSyncDisableSyncs:{type:"boolean"},disableIdSyncs:{type:"boolean"},idSyncIDCallResult:{},idSyncSSLUseAkamai:{type:"boolean"},isCoopSafe:{type:"boolean"},isIabContext:{type:"boolean"},isOptInStorageEnabled:{type:"boolean"},loadSSL:{type:"boolean"},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{type:"boolean"},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{type:"boolean"},sameSiteCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},useLocalStorage:{type:"boolean"},whitelistIframeDomains:{},whitelistParentDomain:{}},Z={getConfigNames:function(){return Object.keys(X)},getConfigs:function(){return X},normalizeConfig:function(e,t){return X[e]&&"boolean"===X[e].type?"function"!=typeof t?t:t():t}},ee=function(e){var t={};return e.on=function(e,n,r){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var i=t[e].push({callback:n,context:r})-1;return function(){t[e].splice(i,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter((function(e){if(e.callback!==n)return e})))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach((function(e){e.callback.apply(e.context,n)}))}},e.publish},te={
PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},ne={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",MEDIA_ANALYTICS:"mediaaa"},re=(t(b={},ne.AAM,565),t(b,ne.ECID,565),b),ie=(t(_={},ne.AAM,[1,10]),t(_,ne.ECID,[1,10]),_),ae=["videoaa","iabConsentHash"],oe=function(e){return Object.keys(e).map((function(t){return e[t]}))}(ne),se=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!l(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var r=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(r,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=(n=void 0===n?[]:n)instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var r=e.callbacks[t].shift();"function"==typeof r?r.apply(null,n):r instanceof Array&&r[1].apply(r[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!c(t))&&Object.keys(e.callbacks).forEach((function(n){var r=void 0!==t[n]?t[n]:"";e.execute(n,r)}),e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},ce=function(){},le=function(e){var t=window.console;return!!t&&"function"==typeof t[e]},ue=function(e,t,n){return n()?function(){if(le(e)){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];console[e].apply(console,[t].concat(r))}}:ce},de=u,fe=function(){for(var e=[],t=0;t<256;t++){for(var n=t,r=0;r<8;r++)n=1&n?3988292384^n>>>1:n>>>1;e.push(n)}return function(t,n){t=unescape(encodeURIComponent(t)),n||(n=0),n^=-1;for(var r=0;r<t.length;r++){var i=255&(n^t.charCodeAt(r));n=n>>>8^e[i]}return(n^=-1)>>>0}}(),pe=new de("[ADOBE OPT-IN]"),me=function(t,n){return e(t)===n},ge=function(e,t){return e instanceof Array?e:me(e,"string")?[e]:t||[]},he=function(e){var t=Object.keys(e);return!!t.length&&t.every((function(t){return!0===e[t]}))},ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!e||_e(e))&&ge(e).every((function(e){return oe.indexOf(e)>-1||t&&ae.indexOf(e)>-1}))},ye=function(e,t){return e.reduce((function(e,n){return e[n]=t,e}),{})},be=function(e){return JSON.parse(JSON.stringify(e))},_e=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Se=function(e){if(Ie(e))return e;try{return JSON.parse(e)}catch(e){return{}}},Ce=function(e){return void 0===e||(Ie(e)?ve(Object.keys(e),!0):we(e))},we=function(e){try{var t=JSON.parse(e);return!!e&&me(e,"string")&&ve(Object.keys(t),!0)}catch(e){return!1}},Ie=function(e){return null!==e&&me(e,"object")&&!1===Array.isArray(e)},Te=function(){},De=function(e){return me(e,"function")?e():e},Ae=function(e,t){Ce(e)||pe.error("".concat(t))},ke=function(e){return Object.keys(e).map((function(t){return e[t]}))},Oe=function(e){return ke(e).filter((function(e,t,n){return n.indexOf(e)===t}))},Ee=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,r=t.params,i=void 0===r?{}:r,a=t.callback,o=void 0===a?Te:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),c=e[s[0]],l=s[1];if(!c||"function"!=typeof c[l])throw new Error("Make sure the plugin and API name exist.");var u=Object.assign(i,{callback:o});c[l].call(c,u)}catch(e){pe.error("[execute] Something went wrong: "+e.message)}}};f.prototype=Object.create(Error.prototype),f.prototype.constructor=f;var Me="fetchPermissions",Pe="[OptIn#registerPlugin] Plugin is invalid.";p.Categories=ne,p.TimeoutError=f;var Ne=Object.freeze({OptIn:p,IabPlugin:v}),Le=function(e,t){e.publishDestinations=function(n){var r=arguments[1],i=arguments[2];try{i="function"==typeof i?i:n.callback}catch(e){i=function(){}}var a=t;if(a.readyToAttachIframePreliminary()){if("string"==typeof n){if(!n.length)return void i({error:"subdomain is not a populated string."});if(!(r instanceof Array&&r.length))return void i({error:"messages is not a populated array."});var o=!1;if(r.forEach((function(e){"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)})),!o)return void i({error:"None of the messages are populated strings."})}else{if(!E.isObject(n))return void i({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void i({error:"config.subdomain is not a populated string."});var c=s.urlDestinations;if(!(c instanceof Array&&c.length))return void i({error:"config.urlDestinations is not a populated array."});var l=[];c.forEach((function(e){E.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):l.push(e))})),function e(){l.length&&setTimeout((function(){var t=new Image,n=l.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()}),100)}()}a.iframe?(i({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIframe=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push((function(e){i({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})})),a.attachIframe()):i({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push((function(e){i({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})}))}else i({error:"The destination publishing iframe is disabled in the Visitor library."})}},xe=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var r,i,a=Math.pow,o=a(2,32),s="",c=[],l=8*t.length,u=e.h=e.h||[],d=e.k=e.k||[],f=d.length,p={},m=2;f<64;m++)if(!p[m]){for(r=0;r<313;r+=m)p[r]=m;u[f]=a(m,.5)*o|0,d[f++]=a(m,1/3)*o|0}for(t+="\x80";t.length%64-56;)t+="\0";for(r=0;r<t.length;r++){if((i=t.charCodeAt(r))>>8)return;c[r>>2]|=i<<(3-r)%4*8}for(c[c.length]=l/o|0,c[c.length]=l,i=0;i<c.length;){var g=c.slice(i,i+=16),h=u;for(u=u.slice(0,8),r=0;r<64;r++){var v=g[r-15],y=g[r-2],b=u[0],_=u[4],S=u[7]+(n(_,6)^n(_,11)^n(_,25))+(_&u[5]^~_&u[6])+d[r]+(g[r]=r<16?g[r]:g[r-16]+(n(v,7)^n(v,18)^v>>>3)+g[r-7]+(n(y,17)^n(y,19)^y>>>10)|0);(u=[S+((n(b,2)^n(b,13)^n(b,22))+(b&u[1]^b&u[2]^u[1]&u[2]))|0].concat(u))[4]=u[4]+S|0}for(r=0;r<8;r++)u[r]=u[r]+h[r]|0}for(r=0;r<8;r++)for(i=3;i+1;i--){var C=u[r]>>8*i&255;s+=(C<16?0:"")+C.toString(16)}return s},je=function(e,t){return"SHA-256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=xe(e)),e},Re=function(e){return String(e).trim().toLowerCase()},Ve=Ne.OptIn;E.defineGlobalNamespace(),window.adobe.OptInCategories=Ve.Categories;var Fe=function(t,n,r){function i(){b._customerIDsHashChanged=!1}function a(e){var t=e;return function(e){var n=e||D.location.href;try{var r=b._extractParamFromUri(n,t);if(r)return te.parsePipeDelimetedKeyValues(r)}catch(e){}}}function o(e){function t(e,t,n){e&&e.match(J.VALID_VISITOR_ID_REGEX)&&(n===P&&(T=!0),t(e))}t(e[P],b.setMarketingCloudVisitorID,P),b._setFieldExpire(V,-1),t(e[j],b.setAnalyticsVisitorID)}function s(e){e=e||{},b._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",b._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},b._supplementalDataIDLast=e.supplementalDataIDLast||"",b._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function c(e){function t(e,t,n){return(n=n?n+="|":n)+(e+"=")+encodeURIComponent(t)}function n(e,n){var r=n[0],i=n[1];return null!=i&&i!==F&&(e=t(r,i,e)),e}return function(e){return(e=e?e+="|":e)+"TS="+te.getTimestampInSeconds()}(e.reduce(n,""))}function l(e){var t=e.minutesToLive,n="";return(b.idSyncDisableSyncs||b.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function u(){return!(!b.configs.doesOptInApply||_.optIn.isComplete&&d())}function d(){return b.configs.doesOptInApply&&b.configs.isIabContext?_.optIn.isApproved(_.optIn.Categories.ECID)&&I:_.optIn.isApproved(_.optIn.Categories.ECID)}function f(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["syncIdentity",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach((function(e){var t=e[0],n=2===e.length?e[1]:"",r=b[t];b[t]=function(e){return d()&&b.isAllowed()?r.apply(b,arguments):("function"==typeof e&&b._callCallback(e,[n]),n)}}))}function p(){var e=b._getAudienceManagerURLData(),t=e.url;return b._loadData(M,t,null,e)}function m(e,t){if(I=!0,e)throw new Error("[IAB plugin] : "+e);t&&t.gdprApplies&&(C=t.consentString,w=t.hasConsentChangedSinceLastCmpPull?1:0),p(),v()}function g(e,t){if(I=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(C=t.consentString,w=t.hasConsentChangedSinceLastCmpPull?1:0),b.init(),v()}function h(){_.optIn.isComplete&&(_.optIn.isApproved(_.optIn.Categories.ECID)?b.configs.isIabContext?_.optIn.execute({command:"iabPlugin.fetchConsentData",callback:g}):(b.init(),v()):b.configs.isIabContext?_.optIn.execute({command:"iabPlugin.fetchConsentData",callback:m}):(f(),v()))}function v(){_.optIn.off("complete",h)}if(!r||r.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var b=this,_=window.adobe,C="",w=0,I=!1,T=!1;b.version="5.2.0";var D=y,A=D.Visitor;A.version=b.version,A.AuthState=S.AUTH_STATE,A.OptOut=S.OPT_OUT,D.s_c_in||(D.s_c_il=[],D.s_c_in=0),b._c="Visitor",b._il=D.s_c_il,b._in=D.s_c_in,b._il[b._in]=b,D.s_c_in++,b._instanceType="regular",b._log={requests:[]},b.marketingCloudOrgID=t,b.cookieName="AMCV_"+t,b.sessionCookieName="AMCVS_"+t;var k={};n&&n.secureCookie&&n.sameSiteCookie&&(k={sameSite:n.sameSiteCookie,secure:n.secureCookie}),b.cookieDomain=b.useLocalStorage?"":q(null,k),b.loadSSL=!0,b.loadTimeout=3e4,b.CORSErrors=[],b.marketingCloudServer=b.audienceManagerServer="dpm.demdex.net",b.sdidParamExpiry=30;var O=null,M="MC",P="MCMID",N="MCIDTS",x="A",j="MCAID",R="AAM",V="MCAAMB",F="NONE",U=function(e){return!Object.prototype[e]},Y=Q(b);b.FIELDS=S.FIELDS,b.cookieRead=function(e){return b.useLocalStorage?e===b.sessionCookieName?sessionStorage.getItem(e):localStorage.getItem(e):G.get(e)},b.cookieWrite=function(e,t,n){var r=""+t;if(b.useLocalStorage)return e===b.sessionCookieName?sessionStorage.setItem(e,r):localStorage.setItem(e,r);var i=b.cookieLifetime?(""+b.cookieLifetime).toUpperCase():"",a={expires:n,domain:b.cookieDomain,cookieLifetime:i};return b.configs&&b.configs.secureCookie&&"https:"===location.protocol&&(a.secure=!0),b.configs&&b.configs.sameSiteCookie&&"https:"===location.protocol&&(a.sameSite=S.SAME_SITE_VALUES[b.configs.sameSiteCookie.toUpperCase()]||"Lax"),G.set(e,r,a)},b.removeCookie=function(e){if(b.useLocalStorage)return e===b.sessionCookieName?sessionStorage.removeItem(e):localStorage.removeItem(e);var t={domain:b.cookieDomain};return b.configs&&b.configs.secureCookie&&"https:"===location.protocol&&(t.secure=!0),b.configs&&b.configs.sameSiteCookie&&"https:"===location.protocol&&(t.sameSite=S.SAME_SITE_VALUES[b.configs.sameSiteCookie.toUpperCase()]||"Lax"),G.remove(e,t)},b.resetState=function(e){e?b._mergeServerState(e):s()},b._isAllowedDone=!1,b._isAllowedFlag=!1,b.isAllowed=function(){return b._isAllowedDone||(b._isAllowedDone=!0,(b.cookieRead(b.cookieName)||b.cookieWrite(b.cookieName,"T",1))&&(b._isAllowedFlag=!0)),"T"===b.cookieRead(b.cookieName)&&b.removeCookie(b.cookieName),b._isAllowedFlag},b.setMarketingCloudVisitorID=function(e){b._setMarketingCloudFields(e)},b._use1stPartyMarketingCloudServer=!1,b.getMarketingCloudVisitorID=function(e,t){b.marketingCloudServer&&b.marketingCloudServer.indexOf(".demdex.net")<0&&(b._use1stPartyMarketingCloudServer=!0);var n=b._getAudienceManagerURLData("_setMarketingCloudFields"),r=n.url;return b._getRemoteField(P,r,e,t,n)};var X=function(e,t){var n={};b.getMarketingCloudVisitorID((function(){t.forEach((function(e){n[e]=b._getField(e,!0)})),-1!==t.indexOf("MCOPTOUT")?b.isOptedOut((function(t){n.MCOPTOUT=t,e(n)}),null,!0):e(n)}),!0)};b.getVisitorValues=function(e,t){var n={MCMID:{fn:b.getMarketingCloudVisitorID,args:[!0],context:b},MCOPTOUT:{fn:b.isOptedOut,args:[void 0,!0],context:b},MCAID:{fn:b.getAnalyticsVisitorID,args:[!0],context:b},MCAAMLH:{fn:b.getAudienceManagerLocationHint,args:[!0],context:b},MCAAMB:{fn:b.getAudienceManagerBlob,args:[!0],context:b}},r=t&&t.length?E.pluck(n,t):n;t&&-1===t.indexOf("MCAID")?X(e,t):H(r,e)},b._currentCustomerIDs={},b._customerIDsHashChanged=!1,b._newCustomerIDsHash="",b.setCustomerIDs=function(t,n){if(!b.isOptedOut()&&t){if(!E.isObject(t)||E.isObjectEmpty(t))return!1;var r,a,o,s;for(r in b._readVisitor(),t)if(U(r)&&(b._currentCustomerIDs.dataSources=b._currentCustomerIDs.dataSources||{},n=(a=t[r]).hasOwnProperty("hashType")?a.hashType:n,a))if("object"===e(a)){var c={};if(a.id){if(n){if(!(s=je(Re(a.id),n)))return;a.id=s,c.hashType=n}c.id=a.id}null!=a.authState&&(c.authState=a.authState),b._currentCustomerIDs.dataSources[r]=c}else if(n){if(!(s=je(Re(a),n)))return;b._currentCustomerIDs.dataSources[r]={id:s,hashType:n}}else b._currentCustomerIDs.dataSources[r]={id:a};var l=b.getCustomerIDs(!0),u=b._getField("MCCIDH"),d="";for(o in u||(u=0),l){var f=l[o];if(!E.isObjectEmpty(f))for(r in f)U(r)&&(d+=(d?"|":"")+r+"|"+((a=f[r]).id?a.id:"")+(a.authState?a.authState:""))}b._newCustomerIDsHash=String(b._hash(d)),b._newCustomerIDsHash!==u&&(b._customerIDsHashChanged=!0,b._mapCustomerIDs(i))}},b.syncIdentity=function(t,n){if(!b.isOptedOut()&&t){if(!E.isObject(t)||E.isObjectEmpty(t))return!1;var r,a,o,s,c;for(r in b._readVisitor(),t)if(U(r)&&(b._currentCustomerIDs.nameSpaces=b._currentCustomerIDs.nameSpaces||{},n=(a=t[r]).hasOwnProperty("hashType")?a.hashType:n,a&&"object"===e(a))){var l={};if(a.id){if(n){if(!(o=je(Re(a.id),n)))return;a.id=o,l.hashType=n}l.id=a.id}null!=a.authState&&(l.authState=a.authState),a.dataSource&&(b._currentCustomerIDs.dataSources=b._currentCustomerIDs.dataSources||{},s=a.dataSource,b._currentCustomerIDs.dataSources[s]=l),b._currentCustomerIDs.nameSpaces[r]=l}var u=b.getCustomerIDs(!0),d=b._getField("MCCIDH"),f="";for(c in d||(d="0"),u){var p=u[c];if(!E.isObjectEmpty(p))for(r in p)U(r)&&(f+=(f?"|":"")+r+"|"+((a=p[r]).id?a.id:"")+(a.authState?a.authState:""))}b._newCustomerIDsHash=String(b._hash(f)),b._newCustomerIDsHash!==d&&(b._customerIDsHashChanged=!0,b._mapCustomerIDs(i))}},b.getCustomerIDs=function(e){b._readVisitor();var t,n,r={dataSources:{},nameSpaces:{}},i=b._currentCustomerIDs.dataSources;for(t in i)U(t)&&(n=i[t]).id&&(r.dataSources[t]||(r.dataSources[t]={}),r.dataSources[t].id=n.id,null!=n.authState?r.dataSources[t].authState=n.authState:r.dataSources[t].authState=A.AuthState.UNKNOWN,n.hashType&&(r.dataSources[t].hashType=n.hashType));var a=b._currentCustomerIDs.nameSpaces;for(t in a)U(t)&&(n=a[t]).id&&(r.nameSpaces[t]||(r.nameSpaces[t]={}),r.nameSpaces[t].id=n.id,null!=n.authState?r.nameSpaces[t].authState=n.authState:r.nameSpaces[t].authState=A.AuthState.UNKNOWN,n.hashType&&(r.nameSpaces[t].hashType=n.hashType));return e?r:r.dataSources},b.setAnalyticsVisitorID=function(e){b._setAnalyticsFields(e)},b.getAnalyticsVisitorID=function(e,t,n){if(!te.isTrackingServerPopulated()&&!n)return b._callCallback(e,[""]),"";var r="";if(n||(r=b.getMarketingCloudVisitorID((function(){b.getAnalyticsVisitorID(e,!0)}))),r||n){var i=n?b.marketingCloudServer:b.trackingServer,a="";b.loadSSL&&(n?b.marketingCloudServerSecure&&(i=b.marketingCloudServerSecure):b.trackingServerSecure&&(i=b.trackingServerSecure));var o={};if(i){var s="http"+(b.loadSSL?"s":"")+"://"+i+"/id",c="d_visid_ver="+b.version+"&mcorgid="+encodeURIComponent(b.marketingCloudOrgID)+(r?"&mid="+encodeURIComponent(r):"")+(b.idSyncDisable3rdPartySyncing||b.disableThirdPartyCookies?"&d_coppa=true":""),l=["s_c_il",b._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];a=s+"?"+c+"&callback=s_c_il%5B"+b._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+c,o.callback=l}return o.url=a,b._getRemoteField(n?P:j,a,e,t,o)}return""},b.getAudienceManagerLocationHint=function(e,t){if(b.getMarketingCloudVisitorID((function(){b.getAudienceManagerLocationHint(e,!0)}))){var n=b._getField(j);if(!n&&te.isTrackingServerPopulated()&&(n=b.getAnalyticsVisitorID((function(){b.getAudienceManagerLocationHint(e,!0)}))),n||!te.isTrackingServerPopulated()){var r=b._getAudienceManagerURLData(),i=r.url;return b._getRemoteField("MCAAMLH",i,e,t,r)}}return""},b.getLocationHint=b.getAudienceManagerLocationHint,b.getAudienceManagerBlob=function(e,t){if(b.getMarketingCloudVisitorID((function(){b.getAudienceManagerBlob(e,!0)}))){var n=b._getField(j);if(!n&&te.isTrackingServerPopulated()&&(n=b.getAnalyticsVisitorID((function(){b.getAudienceManagerBlob(e,!0)}))),n||!te.isTrackingServerPopulated()){var r=b._getAudienceManagerURLData(),i=r.url;return b._customerIDsHashChanged&&b._setFieldExpire(V,-1),b._getRemoteField(V,i,e,t,r)}}return""},b._supplementalDataIDCurrent="",b._supplementalDataIDCurrentConsumed={},b._supplementalDataIDLast="",b._supplementalDataIDLastConsumed={},b.getSupplementalDataID=function(e,t){b._supplementalDataIDCurrent||t||(b._supplementalDataIDCurrent=b._generateID(1));var n=b._supplementalDataIDCurrent;return b._supplementalDataIDLast&&!b._supplementalDataIDLastConsumed[e]?(n=b._supplementalDataIDLast,b._supplementalDataIDLastConsumed[e]=!0):n&&(b._supplementalDataIDCurrentConsumed[e]&&(b._supplementalDataIDLast=b._supplementalDataIDCurrent,b._supplementalDataIDLastConsumed=b._supplementalDataIDCurrentConsumed,b._supplementalDataIDCurrent=n=t?"":b._generateID(1),b._supplementalDataIDCurrentConsumed={}),n&&(b._supplementalDataIDCurrentConsumed[e]=!0)),n};var Z=!1;b._liberatedOptOut=null,b.getOptOut=function(e,t){var n=b._getAudienceManagerURLData("_setMarketingCloudFields"),r=n.url;if(d())return b._getRemoteField("MCOPTOUT",r,e,t,n);if(b._registerCallback("liberatedOptOut",e),null!==b._liberatedOptOut)return b._callAllCallbacks("liberatedOptOut",[b._liberatedOptOut]),Z=!1,b._liberatedOptOut;if(Z)return null;Z=!0;var i="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/\.demdex\.net\/id\?/,".demdex.net/optOutStatus?"),n.callback=[i],y[i]=function(e){if(e===Object(e)){var t,n,r=E.parseOptOut(e,t,F);t=r.optOut,n=1e3*r.d_ottl,b._liberatedOptOut=t,setTimeout((function(){b._liberatedOptOut=null}),n)}b._callAllCallbacks("liberatedOptOut",[t]),Z=!1},Y.fireCORS(n),null},b.isOptedOut=function(e,t,n){t||(t=A.OptOut.GLOBAL);var r=b.getOptOut((function(n){var r=n===A.OptOut.GLOBAL||n.indexOf(t)>=0;b._callCallback(e,[r])}),n);return r?r===A.OptOut.GLOBAL||r.indexOf(t)>=0:null};var ee={subscribed:!1,callbacks:[]};b.onReceiveEcid=function(e){if(d())return b.getMarketingCloudVisitorID(e,!0);ee.subscribed=!0,e&&"function"==typeof e&&ee.callbacks.push(e)},b._fields=null,b._fieldsExpired=null,b._hash=function(e){var t,n=0;if(e)for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n&=n;return n},b._generateID=$,b._generateLocalMID=function(){var e=b._generateID(0);return ie.isClientSideMarketingCloudVisitorID=!0,e},b._callbackList=null,b._callCallback=function(e,t){try{"function"==typeof e?e.apply(D,t):e[1].apply(e[0],t)}catch(e){}},b._registerCallback=function(e,t){t&&(null==b._callbackList&&(b._callbackList={}),null==b._callbackList[e]&&(b._callbackList[e]=[]),b._callbackList[e].push(t))},b._callAllCallbacks=function(e,t){if(null!=b._callbackList){var n=b._callbackList[e];if(n)for(;n.length>0;)b._callCallback(n.shift(),t)}},b._addQuerystringParam=function(e,t,n,r){var i=encodeURIComponent(t)+"="+encodeURIComponent(n),a=te.parseHash(e),o=te.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+i+a;var s=o.split("?"),c=s[0]+"?",l=s[1];return c+te.addQueryParamAtLocation(l,i,r)+a},b._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)").exec(e);if(n&&n.length)return decodeURIComponent(n[1])},b._parseAdobeMcFromUrl=a(J.ADOBE_MC),b._parseAdobeMcSdidFromUrl=a(J.ADOBE_MC_SDID),b._attemptToPopulateSdidFromUrl=function(e){var n=b._parseAdobeMcSdidFromUrl(e),r=1e9;n&&n.TS&&(r=te.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&r<b.sdidParamExpiry&&(b._supplementalDataIDCurrent=n.SDID,b._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},b._attemptToPopulateIdsFromUrl=function(){var e=b._parseAdobeMcFromUrl();if(e&&e.TS){var n=te.getTimestampInSeconds()-e.TS;if(Math.floor(n/60)>J.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;o(e)}},b._mergeServerState=function(e){if(e)try{if((e=function(e){return te.isObject(e)?e:JSON.parse(e)}(e))[b.marketingCloudOrgID]){var t=e[b.marketingCloudOrgID];!function(e){te.isObject(e)&&b.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},b._timeout=null,b._loadData=function(e,t,n,r){t=b._addQuerystringParam(t,"d_fieldgroup",e,1),r.url=b._addQuerystringParam(r.url,"d_fieldgroup",e,1),r.corsUrl=b._addQuerystringParam(r.corsUrl,"d_fieldgroup",e,1),ie.fieldGroupObj[e]=!0,r===Object(r)&&r.corsUrl&&"XMLHttpRequest"===Y.corsMetadata.corsType&&Y.fireCORS(r,n,e)},b._clearTimeout=function(e){null!=b._timeout&&b._timeout[e]&&(clearTimeout(b._timeout[e]),b._timeout[e]=0)},b._settingsDigest=0,b._getSettingsDigest=function(){if(!b._settingsDigest){var e=b.version;b.audienceManagerServer&&(e+="|"+b.audienceManagerServer),b.audienceManagerServerSecure&&(e+="|"+b.audienceManagerServerSecure),b._settingsDigest=b._hash(e)}return b._settingsDigest},b._readVisitorDone=!1,b._readVisitor=function(){if(!b._readVisitorDone){b._readVisitorDone=!0;var e,t,n,r,i,a,o=b._getSettingsDigest(),s=!1,c=b.cookieRead(b.cookieName),l=new Date;if(c||T||b.discardTrackingServerECID||(c=b.cookieRead(J.FIRST_PARTY_SERVER_COOKIE)),null==b._fields&&(b._fields={}),c&&"T"!==c)for((c=c.split("|"))[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!==o&&(s=!0),c.shift()),c.length%2==1&&c.pop(),e=0;e<c.length;e+=2)n=(t=c[e].split("-"))[0],r=c[e+1],t.length>1?(i=parseInt(t[1],10),a=t[1].indexOf("s")>0):(i=0,a=!1),s&&("MCCIDH"===n&&(r=""),i>0&&(i=l.getTime()/1e3-60)),n&&r&&(b._setField(n,r,1),i>0&&(b._fields["expire"+n]=i+(a?"s":""),(l.getTime()>=1e3*i||a&&!b.cookieRead(b.sessionCookieName))&&(b._fieldsExpired||(b._fieldsExpired={}),b._fieldsExpired[n]=!0)));!b._getField(j)&&te.isTrackingServerPopulated()&&(c=b.cookieRead("s_vi"))&&(c=c.split("|")).length>1&&c[0].indexOf("v1")>=0&&((e=(r=c[1]).indexOf("["))>=0&&(r=r.substring(0,e)),r&&r.match(J.VALID_VISITOR_ID_REGEX)&&b._setField(j,r))}},b._appendVersionTo=function(e){var t="vVersion|"+b.version,n=e?b._getCookieVersion(e):null;return n?W.areVersionsDifferent(n,b.version)&&(e=e.replace(J.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},b._writeVisitor=function(){var e,t,n=b._getSettingsDigest();for(e in b._fields)U(e)&&b._fields[e]&&"expire"!==e.substring(0,6)&&(t=b._fields[e],n+=(n?"|":"")+e+(b._fields["expire"+e]?"-"+b._fields["expire"+e]:"")+"|"+t);n=b._appendVersionTo(n),b.cookieWrite(b.cookieName,n,1)},b._getField=function(e,t){return null==b._fields||!t&&b._fieldsExpired&&b._fieldsExpired[e]?null:b._fields[e]},b._setField=function(e,t,n){null==b._fields&&(b._fields={}),b._fields[e]=t,n||b._writeVisitor()},b._getFieldList=function(e,t){var n=b._getField(e,t);return n?n.split("*"):null},b._setFieldList=function(e,t,n){b._setField(e,t?t.join("*"):"",n)},b._getFieldMap=function(e,t){var n=b._getFieldList(e,t);if(n){var r,i={};for(r=0;r<n.length;r+=2)i[n[r]]=n[r+1];return i}return null},b._setFieldMap=function(e,t,n){var r,i=null;if(t)for(r in i=[],t)U(r)&&(i.push(r),i.push(t[r]));b._setFieldList(e,i,n)},b._setFieldExpire=function(e,t,n){var r=new Date;r.setTime(r.getTime()+1e3*t),null==b._fields&&(b._fields={}),b._fields["expire"+e]=Math.floor(r.getTime()/1e3)+(n?"s":""),t<0?(b._fieldsExpired||(b._fieldsExpired={}),b._fieldsExpired[e]=!0):b._fieldsExpired&&(b._fieldsExpired[e]=!1),n&&(b.cookieRead(b.sessionCookieName)||b.cookieWrite(b.sessionCookieName,"1"))},b._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=F),t&&(t===F||t.match(J.VALID_VISITOR_ID_REGEX))||(t="")),t},b._setFields=function(t,n){if(b._clearTimeout(t),null!=b._loading&&(b._loading[t]=!1),ie.fieldGroupObj[t]&&ie.setState(t,!1),t===M){!0!==ie.isClientSideMarketingCloudVisitorID&&(ie.isClientSideMarketingCloudVisitorID=!1);var r=b._getField(P);if(!r||b.overwriteCrossDomainMCIDAndAID){if(!(r="object"===e(n)&&n.mid?n.mid:b._findVisitorID(n))){if(b._use1stPartyMarketingCloudServer&&!b.tried1stPartyMarketingCloudServer)return b.tried1stPartyMarketingCloudServer=!0,void b.getAnalyticsVisitorID(null,!1,!0);r=b._generateLocalMID()}b._setField(P,r)}r&&r!==F||(r=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&b._setFields(R,n),b._use1stPartyMarketingCloudServer&&n.mid&&b._setFields(x,{id:n.id})),b._callAllCallbacks(P,[r])}if(t===R&&"object"===e(n)){var i=604800;null!=n.id_sync_ttl&&n.id_sync_ttl&&(i=parseInt(n.id_sync_ttl,10));var a=ne.getRegionAndCheckIfChanged(n,i);b._callAllCallbacks("MCAAMLH",[a]);var o=b._getField(V);(n.d_blob||n.blob)&&((o=n.d_blob)||(o=n.blob),b._setFieldExpire(V,i),b._setField(V,o)),o||(o=""),b._callAllCallbacks(V,[o]),!n.error_msg&&b._newCustomerIDsHash&&b._setField("MCCIDH",b._newCustomerIDsHash)}if(t===x){var s=b._getField(j);s&&!b.overwriteCrossDomainMCIDAndAID||((s=b._findVisitorID(n))?s!==F&&b._setFieldExpire(V,-1):s=F,b._setField(j,s)),s&&s!==F||(s=""),b._callAllCallbacks(j,[s])}if(b.idSyncDisableSyncs||b.disableIdSyncs)ne.idCallNotProcesssed=!0;else{ne.idCallNotProcesssed=!1;var c={};c.ibs=n.ibs,c.subdomain=n.subdomain,ne.processIDCallData(c)}if(n===Object(n)){var l,u;d()&&b.isAllowed()&&(l=b._getField("MCOPTOUT"));var f=E.parseOptOut(n,l,F);l=f.optOut,u=f.d_ottl,b._setFieldExpire("MCOPTOUT",u,!0),b._setField("MCOPTOUT",l),b._callAllCallbacks("MCOPTOUT",[l])}},b._loading=null,b._getRemoteField=function(e,t,n,r,i){var a,o="",s=te.isFirstPartyAnalyticsVisitorIDCall(e),c={MCAAMLH:!0,MCAAMB:!0};if(d()&&b.isAllowed())if(b._readVisitor(),!(!(o=b._getField(e,!0===c[e]))||b._fieldsExpired&&b._fieldsExpired[e])||b.disableThirdPartyCalls&&!s)o||(e===P?(b._registerCallback(e,n),o=b._generateLocalMID(),b.setMarketingCloudVisitorID(o)):e===j?(b._registerCallback(e,n),o="",b.setAnalyticsVisitorID(o)):(o="",r=!0));else if(e===P||"MCOPTOUT"===e?a=M:"MCAAMLH"===e||e===V?a=R:e===j&&(a=x),a)return!t||null!=b._loading&&b._loading[a]||(null==b._loading&&(b._loading={}),b._loading[a]=!0,a===R&&(w=0),b._loadData(a,t,(function(t){if(!b._getField(e)){t&&ie.setState(a,!0);var n="";e===P?n=b._generateLocalMID():a===R&&(n={error_msg:"timeout"}),b._setFields(a,n)}}),i)),b._registerCallback(e,n),o||(t||b._setFields(a,{id:F}),"");return e!==P&&e!==j||o!==F||(o="",r=!0),n&&r&&b._callCallback(n,[o]),e===P&&ee.subscribed&&(ee.callbacks&&ee.callbacks.length&&ee.callbacks.forEach((function(e){b._callCallback(e,[o])})),ee.subscribed=!1,ee.callbacks.length=0),o},b._setMarketingCloudFields=function(e){b._readVisitor(),b._setFields(M,e)},b._mapCustomerIDs=function(e){b.getAudienceManagerBlob(e,!0)},b._setAnalyticsFields=function(e){b._readVisitor(),b._setFields(x,e)},b._setAudienceManagerFields=function(e){b._readVisitor(),b._setFields(R,e)},b._getAudienceManagerURLData=function(e){var t=b.audienceManagerServer,n="",r=b._getField(P),i=b._getField(V,!0),a=b._getField(j),o=a&&a!==F?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(b.loadSSL&&b.audienceManagerServerSecure&&(t=b.audienceManagerServerSecure),t){var s,c,l,u=b.getCustomerIDs(!0);if(u)for(c in u){var d=u[c];if(!E.isObjectEmpty(d)){var f="nameSpaces"===c?"&d_cid_ns=":"&d_cid_ic=";for(s in d)U(s)&&(l=d[s],o+=f+encodeURIComponent(s)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""))}}e||(e="_setAudienceManagerFields");var p="http"+(b.loadSSL?"s":"")+"://"+t+"/id",m="d_visid_ver="+b.version+(C&&-1!==p.indexOf("demdex.net")?"&gdpr=1&gdpr_consent="+C:"")+(w&&-1!==p.indexOf("demdex.net")?"&d_cf="+w:"")+"&d_rtbd=json&d_ver=2"+(!r&&b._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(b.marketingCloudOrgID)+"&d_nsid="+(b.idSyncContainerID||0)+(r?"&d_mid="+encodeURIComponent(r):"")+(b.idSyncDisable3rdPartySyncing||b.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===O?"&d_coop_safe=1":!1===O?"&d_coop_unsafe=1":"")+(i?"&d_blob="+encodeURIComponent(i):"")+o,g=["s_c_il",b._in,e];return{url:n=p+"?"+m+"&d_cb=s_c_il%5B"+b._in+"%5D."+e,corsUrl:p+"?"+m,callback:g}}return{url:n}},b.appendVisitorIDsTo=function(e){try{var t=[[P,b._getField(P)],[j,b._getField(j)],["MCORGID",b.marketingCloudOrgID]];return b._addQuerystringParam(e,J.ADOBE_MC,c(t))}catch(t){return e}},b.appendSupplementalDataIDTo=function(e,t){if(!(t=t||b.getSupplementalDataID(te.generateRandomString(),!0)))return e;try{var n=c([["SDID",t],["MCORGID",b.marketingCloudOrgID]]);return b._addQuerystringParam(e,J.ADOBE_MC_SDID,n)}catch(t){return e}};var te={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var r=e.split("&");return n=null!=n?n:r.length,r.splice(n,0,t),r.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){return e===j&&(t||(t=b.trackingServer),n||(n=b.trackingServerSecure),!("string"!=typeof(r=b.loadSSL?n:t)||!r.length)&&r.indexOf("2o7.net")<0&&r.indexOf("omtrdc.net")<0);var r},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){G.remove(e,{domain:b.cookieDomain})},isTrackingServerPopulated:function(){return!!b.trackingServer||!!b.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};b._helpers=te;var ne=K(b,A);b._destinationPublishing=ne,b.timeoutMetricsLog=[];var re,ie={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case M:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case x:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case R:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};b.isClientSideMarketingCloudVisitorID=function(){return ie.isClientSideMarketingCloudVisitorID},b.MCIDCallTimedOut=function(){return ie.MCIDCallTimedOut},b.AnalyticsIDCallTimedOut=function(){return ie.AnalyticsIDCallTimedOut},b.AAMIDCallTimedOut=function(){return ie.AAMIDCallTimedOut},b.idSyncGetOnPageSyncInfo=function(){return b._readVisitor(),b._getField("MCSYNCSOP")},b.idSyncByURL=function(e){if(!b.isOptedOut()){var t=l(e||{});if(t.error)return t.error;var n,r,i=e.url,a=encodeURIComponent,o=ne;return i=i.replace(/^https:/,"").replace(/^http:/,""),n=E.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),r=["ibs",a(e.dpid),"img",a(i),t.ttl,"",n],o.addMessage(r.join("|")),o.requestToProcess(),"Successfully queued"}},b.idSyncByDataSource=function(e){if(!b.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,b.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},Le(b,ne),b._getCookieVersion=function(e){e=e||b.cookieRead(b.cookieName);var t=J.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},b._resetAmcvCookie=function(e){var t=b._getCookieVersion();t&&!W.isLessThan(t,e)||b.removeCookie(b.cookieName)},b.setAsCoopSafe=function(){O=!0},b.setAsCoopUnsafe=function(){O=!1},function(){if(b.configs=Object.create(null),te.isObject(n))for(var e in n)U(e)&&(b[e]=n[e],b.configs[e]=n[e])}(),f(),b.init=function(){u()&&(_.optIn.fetchPermissions(h,!0),!_.optIn.isApproved(_.optIn.Categories.ECID))||re||(re=!0,function(){if(te.isObject(n)){b.idSyncContainerID=b.idSyncContainerID||0,O="boolean"==typeof b.isCoopSafe?b.isCoopSafe:te.parseBoolean(b.isCoopSafe),b.resetBeforeVersion&&b._resetAmcvCookie(b.resetBeforeVersion),
b._attemptToPopulateIdsFromUrl(),b._attemptToPopulateSdidFromUrl(),b._readVisitor();var e=b._getField(N),t=Math.ceil((new Date).getTime()/J.MILLIS_PER_DAY);b.idSyncDisableSyncs||b.disableIdSyncs||!ne.canMakeSyncIDCall(e,t)||(b._setFieldExpire(V,-1),b._setField(N,t)),b.getMarketingCloudVisitorID(),b.getAudienceManagerLocationHint(),b.getAudienceManagerBlob(),b._mergeServerState(b.serverState)}else b._attemptToPopulateIdsFromUrl(),b._attemptToPopulateSdidFromUrl()}(),function(){if(!b.idSyncDisableSyncs&&!b.disableIdSyncs){ne.checkDPIframeSrc();var e=function(){var e=ne;e.readyToAttachIframe()&&e.attachIframe()};D.addEventListener("load",(function(){A.windowLoaded=!0,e()}));try{z.receiveMessage((function(e){ne.receiveMessage(e.data)}),ne.iframeHost)}catch(e){}}}(),b.whitelistIframeDomains&&J.POST_MESSAGE_ENABLED&&(b.whitelistIframeDomains=b.whitelistIframeDomains instanceof Array?b.whitelistIframeDomains:[b.whitelistIframeDomains],b.whitelistIframeDomains.forEach((function(e){var n=new L(t,e),r=B(b,n);z.receiveMessage(r,e)}))))}};Fe.config=Z,y.Visitor=Fe;var Ue=Fe,Be=function(e){if(E.isObject(e))return Object.keys(e).filter((function(t){return""!==e[t]&&Z.getConfigs()[t]})).reduce((function(t,n){var r=Z.normalizeConfig(n,e[n]),i=E.normalizeBoolean(r);return t[n]=i,t}),Object.create(null))},He=Ne.OptIn,Ge=Ne.IabPlugin;Ue.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=y.s_c_il;if(t)for(var n=0;n<t.length;n++){var r=t[n];if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e)return r}}();if(n)return n;var r=Be(t)||{};!function(e){y.adobe.optIn=y.adobe.optIn||function(){var t=E.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=(n=n||q())===window.location.hostname?"":n,t.optInCookieDomain=n;var r=new He(t,{cookies:G});if(t.isIabContext&&t.doesOptInApply){var i=new Ge;r.registerPlugin(i)}return r}()}(r||{});var i=e.split("").reverse().join(""),a=new Ue(e,null,i);r.cookieDomain&&(a.cookieDomain=r.cookieDomain),r.sameSiteCookie&&r.secureCookie&&(a.configs={sameSiteCookie:r.sameSiteCookie,secureCookie:r.secureCookie}),y.s_c_il.splice(--y.s_c_in,1);var o=E.getIeVersion();if("number"==typeof o&&o<10)return a._helpers.replaceMethodsWithFunction(a,(function(){}));var s=function(){try{return y.self!==y.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e.removeCookie("TEST_AMCV_COOKIE"),!0)}(a)&&y.parent?new j(e,r,a,y.parent):new Ue(e,r,i);return a=null,s.init(),s},function(){function e(){Ue.windowLoaded=!0}y.addEventListener?y.addEventListener("load",e):y.attachEvent&&y.attachEvent("onload",e),Ue.codeLoadEnd=(new Date).getTime()}()}(),Visitor)}},"adobe-mcid/src/view/utils/timeUnits.js":{script:function(e){var t={Hours:3600,Days:86400,Weeks:604800,Months:2592e3,Years:31536e3};e.exports=t}}}},core:{displayName:"Core",hostedLibFilesBaseUrl:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/hostedLibFiles/EP205185a6537e4aacbdc36b05eb266113/",modules:{"core/src/lib/dataElements/customCode.js":{name:"custom-code",displayName:"Custom Code",script:function(e){"use strict";e.exports=function(e,t){return e.source(t)}}},"core/src/lib/events/libraryLoaded.js":{name:"library-loaded",displayName:"Library Loaded (Page Top)",script:function(e,t,n){"use strict";var r=n("./helpers/pageLifecycleEvents");e.exports=function(e,t){r.registerLibraryLoadedTrigger(t)}}},"core/src/lib/actions/customCode.js":{name:"custom-code",displayName:"Custom Code",script:function(e,t,n,r){"use strict";var i,a,o,s=n("@adobe/reactor-document"),c=n("./helpers/decorateCode"),l=n("./helpers/loadCodeSequentially"),u=n("../../../node_modules/postscribe/dist/postscribe"),d=r.getExtensionSettings(),f=(i=function(e){u(s.body,e,{beforeWriteToken:function(e){return d.cspNonce&&"script"===e.tagName&&(e.attrs.nonce=d.cspNonce),e},error:function(e){r.logger.error(e.msg)}})},a=[],o=function(){if(s.body)for(;a.length;)i(a.shift());else setTimeout(o,20)},function(e){a.push(e),o()}),p=function(){if(s.currentScript)return s.currentScript.async;for(var e=s.querySelectorAll("script"),t=0;t<e.length;t++){var n=e[t];if(/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src))return n.async}return!0}();e.exports=function(e,t){var n={settings:e,event:t},r=n.settings.source;if(r)return n.settings.isExternal?l(r).then((function(e){e&&f(c(n,e))})):void(p||"loading"!==s.readyState?f(c(n,r)):s.write?s.write(c(n,r)):f(c(n,r)))}}},"core/src/lib/conditions/customCode.js":{name:"custom-code",displayName:"Custom Code",script:function(e){"use strict";e.exports=function(e,t){return e.source.call(t.element,t,t.target)}}},"core/src/lib/events/domReady.js":{name:"dom-ready",displayName:"DOM Ready",script:function(e,t,n){"use strict";var r=n("./helpers/pageLifecycleEvents");e.exports=function(e,t){r.registerDomReadyTrigger(t)}}},"core/src/lib/events/pageBottom.js":{name:"page-bottom",displayName:"Page Bottom",script:function(e,t,n){"use strict";var r=n("./helpers/pageLifecycleEvents");e.exports=function(e,t){r.registerPageBottomTrigger(t)}}},"core/src/lib/events/helpers/pageLifecycleEvents.js":{script:function(e,t,n){"use strict";var r=n("@adobe/reactor-window"),i=n("@adobe/reactor-document"),a=-1!==r.navigator.appVersion.indexOf("MSIE 10"),o="WINDOW_LOADED",s="DOM_READY",c="PAGE_BOTTOM",l=[c,s,o],u=function(e,t){return{element:e,target:e,nativeEvent:t}},d={};l.forEach((function(e){d[e]=[]}));var f=function(e,t){l.slice(0,m(e)+1).forEach((function(e){g(t,e)}))},p=function(){return"complete"===i.readyState?o:"interactive"===i.readyState?a?null:s:void 0},m=function(e){return l.indexOf(e)},g=function(e,t){d[t].forEach((function(t){h(e,t)})),d[t]=[]},h=function(e,t){var n=t.trigger,r=t.syntheticEventFn;n(r?r(e):null)};r._satellite=r._satellite||{},r._satellite.pageBottom=f.bind(null,c),i.addEventListener("DOMContentLoaded",f.bind(null,s),!0),r.addEventListener("load",f.bind(null,o),!0),r.setTimeout((function(){var e=p();e&&f(e)}),0),e.exports={registerLibraryLoadedTrigger:function(e){e()},registerPageBottomTrigger:function(e){d[c].push({trigger:e})},registerDomReadyTrigger:function(e){d[s].push({trigger:e,syntheticEventFn:u.bind(null,i)})},registerWindowLoadedTrigger:function(e){d[o].push({trigger:e,syntheticEventFn:u.bind(null,r)})}}}},"core/src/lib/actions/helpers/decorateCode.js":{script:function(e,t,n,r){"use strict";var i=0,a=function(e){return e.settings.isExternal},o=function(e,t){return"<script>\n"+t+"\n</script>"},s=function(e,t){var n="__runScript"+ ++i;return _satellite[n]=function(t){t.call(e.event.element,e.event,e.event.target),delete _satellite[n]},'<script>_satellite["'+n+'"](function(event, target) {\n'+t+"\n});</script>"},c={javascript:function(e,t){return e.settings.global?o(e,t):s(e,t)},html:function(e,t){return a(e)?r.replaceTokens(t,e.event):t}};e.exports=function(e,t){return c[e.settings.language](e,t)}}},"core/src/lib/actions/helpers/loadCodeSequentially.js":{script:function(e,t,n){"use strict";var r=n("@adobe/reactor-promise"),i=n("./getSourceByUrl"),a=r.resolve();e.exports=function(e){var t=new r((function(t){var n=i(e);r.all([n,a]).then((function(e){var n=e[0];t(n)}))}));return a=t,t}}},"core/node_modules/postscribe/dist/postscribe.js":{script:function(e,t){var n,r;n=this,r=function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=r(n(1));e.exports=i.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function a(){}function o(){var e=m.shift();if(e){var t=d.last(e);t.afterDequeue(),e.stream=s.apply(void 0,e),t.afterStreamStart()}}function s(e,t,n){function r(e){e=n.beforeWrite(e),g.write(e),n.afterWrite(e)}(g=new u.default(e,n)).id=p++,g.name=n.name||g.id,c.streams[g.name]=g;var i=e.ownerDocument,s={close:i.close,open:i.open,write:i.write,writeln:i.writeln};l(i,{close:a,open:a,write:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t.join(""))},writeln:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t.join("")+"\n")}});var d=g.win.onerror||a;return g.win.onerror=function(e,t,r){n.error({msg:e+" - "+t+": "+r}),d.apply(g.win,[e,t,r])},g.write(t,(function(){l(i,s),g.win.onerror=d,n.done(),g=null,o()})),g}function c(e,t,n){if(d.isFunction(n))n={done:n};else if("clear"===n)return m=[],g=null,void(p=0);n=d.defaults(n,f);var r=[e=/^#/.test(e)?window.document.getElementById(e.substr(1)):e.jquery?e[0]:e,t,n];return e.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=a}},n.beforeEnqueue(r),m.push(r),g||o(),e.postscribe}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=c;var u=i(n(2)),d=r(n(4)),f={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,autoFix:!0,beforeEnqueue:a,beforeWriteToken:function(e){return e},beforeWrite:function(e){return e},done:a,error:function(e){throw new Error(e.msg)},releaseAsync:!1},p=0,m=[],g=null;l(c,{streams:{},queue:m,WriteStream:u.default})},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){var n=f+t,r=e.getAttribute(n);return u.existy(r)?String(r):r}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=f+t;u.existy(n)&&""!==n?e.setAttribute(r,n):e.removeAttribute(r)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=i(n(3)),u=r(n(4)),d=!1,f="data-ps-",p="ps-style",m="ps-script",g=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.root=t,this.options=n,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new l.default("",{autoFix:n.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],s(this.proxyRoot,"proxyof",0)}return e.prototype.write=function(){var e;for((e=this.writeQueue).push.apply(e,arguments);!this.deferredRemote&&this.writeQueue.length;){var t=this.writeQueue.shift();u.isFunction(t)?this._callFunction(t):this._writeImpl(t)}},e.prototype._callFunction=function(e){var t={type:"function",value:e.name||e.toString()};this._onScriptStart(t),e.call(this.win,this.doc),this._onScriptDone(t)},e.prototype._writeImpl=function(e){this.parser.append(e);for(var t=void 0,n=void 0,r=void 0,i=[];(t=this.parser.readToken())&&!(n=u.isScript(t))&&!(r=u.isStyle(t));)(t=this.options.beforeWriteToken(t))&&i.push(t);i.length>0&&this._writeStaticTokens(i),n&&this._handleScriptToken(t),r&&this._handleStyleToken(t)},e.prototype._writeStaticTokens=function(e){var t=this._buildChunk(e);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,d&&(t.proxyInnerHTML=this.proxyRoot.innerHTML),this._walkChunk(),d&&(t.actualInnerHTML=this.root.innerHTML),t):null},e.prototype._buildChunk=function(e){for(var t=this.actuals.length,n=[],r=[],i=[],a=e.length,o=0;o<a;o++){var s=e[o],c=s.toString();if(n.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var l=t++;r.push(c.replace(/(\/?>)/," "+f+"id="+l+" $1")),s.attrs.id!==m&&s.attrs.id!==p&&i.push("atomicTag"===s.type?"":"<"+s.tagName+" "+f+"proxyof="+l+(s.unary?" />":">"))}}else r.push(c),i.push("endTag"===s.type?c:"")}return{tokens:e,raw:n.join(""),actual:r.join(""),proxy:i.join("")}},e.prototype._walkChunk=function(){for(var e=void 0,t=[this.proxyRoot];u.existy(e=t.shift());){var n=1===e.nodeType;if(!n||!o(e,"proxyof")){n&&(this.actuals[o(e,"id")]=e,s(e,"id"));var r=e.parentNode&&o(e.parentNode,"proxyof");r&&this.actuals[r].appendChild(e)}t.unshift.apply(t,u.toArray(e.childNodes))}},e.prototype._handleScriptToken=function(e){var t=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),e.src=e.attrs.src||e.attrs.SRC,(e=this.options.beforeWriteToken(e))&&(e.src&&this.scriptStack.length?this.deferredRemote=e:this._onScriptStart(e),this._writeScriptToken(e,(function(){t._onScriptDone(e)})))},e.prototype._handleStyleToken=function(e){var t=this.parser.clear();t&&this.writeQueue.unshift(t),e.type=e.attrs.type||e.attrs.TYPE||"text/css",(e=this.options.beforeWriteToken(e))&&this._writeStyleToken(e),t&&this.write()},e.prototype._writeStyleToken=function(e){var t=this._buildStyle(e);this._insertCursor(t,p),e.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=e.content:t.appendChild(this.doc.createTextNode(e.content)))},e.prototype._buildStyle=function(e){var t=this.doc.createElement(e.tagName);return t.setAttribute("type",e.type),u.eachKey(e.attrs,(function(e,n){t.setAttribute(e,n)})),t},e.prototype._insertCursor=function(e,t){this._writeImpl('<span id="'+t+'"/>');var n=this.doc.getElementById(t);n&&n.parentNode.replaceChild(e,n)},e.prototype._onScriptStart=function(e){e.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(e)},e.prototype._onScriptDone=function(e){e===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,e.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},e.prototype._writeScriptToken=function(e,t){var n=this._buildScript(e),r=this._shouldRelease(n),i=this.options.afterAsync;e.src&&(n.src=e.src,this._scriptLoadHandler(n,r?i:function(){t(),i()}));try{this._insertCursor(n,m),n.src&&!r||t()}catch(e){this.options.error(e),t()}},e.prototype._buildScript=function(e){var t=this.doc.createElement(e.tagName);return u.eachKey(e.attrs,(function(e,n){t.setAttribute(e,n)})),e.content&&(t.text=e.content),t},e.prototype._scriptLoadHandler=function(e,t){function n(){e=e.onload=e.onreadystatechange=e.onerror=null}function r(){n(),null!=t&&t(),t=null}function i(e){n(),o(e),null!=t&&t(),t=null}function a(e,t){var n=e["on"+t];null!=n&&(e["_on"+t]=n)}var o=this.options.error;a(e,"load"),a(e,"error"),c(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){i({msg:"onload handler failed "+t+" @ "+e.src})}r()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void i({msg:"onerror handler failed "+t+" @ "+e.src})}i({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&r()}})},e.prototype._shouldRelease=function(e){return!/^script$/i.test(e.nodeName)||!!(this.options.releaseAsync&&e.src&&e.hasAttribute("async"))},e}();t.default=g},function(e){var t;t=function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=r(n(1));e.exports=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=i(n(2)),s=i(n(3)),c=r(n(6)),l=n(5),u={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},d=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.stream=n;var i=!1,s={};for(var l in o)o.hasOwnProperty(l)&&(r.autoFix&&(s[l+"Fix"]=!0),i=i||s[l+"Fix"]);i?(this._readToken=(0,c.default)(this,s,(function(){return t._readTokenImpl()})),this._peekToken=(0,c.default)(this,s,(function(){return t._peekTokenImpl()}))):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return e.prototype.append=function(e){this.stream+=e},e.prototype.prepend=function(e){this.stream=e+this.stream},e.prototype._readTokenImpl=function(){var e=this._peekTokenImpl();if(e)return this.stream=this.stream.slice(e.length),e},e.prototype._peekTokenImpl=function(){for(var e in u)if(u.hasOwnProperty(e)&&u[e].test(this.stream)){var t=s[e](this.stream);if(t)return"startTag"===t.type&&/script|style/i.test(t.tagName)?null:(t.text=this.stream.substr(0,t.length),t)}},e.prototype.peekToken=function(){return this._peekToken()},e.prototype.readToken=function(){return this._readToken()},e.prototype.readTokens=function(e){for(var t=void 0;t=this.readToken();)if(e[t.type]&&!1===e[t.type](t))return},e.prototype.clear=function(){var e=this.stream;return this.stream="",e},e.prototype.rest=function(){return this.stream},e}();for(var f in t.default=d,d.tokenToString=function(e){return e.toString()},d.escapeAttributes=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=(0,l.escapeQuotes)(e[n],null));return t},d.supports=o,o)o.hasOwnProperty(f)&&(d.browserHasFlaw=d.browserHasFlaw||!o[f]&&f)},function(e,t){"use strict";t.__esModule=!0;var n=!1,r=!1,i=window.document.createElement("div");try{var a="<P><I></P></I>";i.innerHTML=a,t.tagSoup=n=i.innerHTML!==a}catch(e){t.tagSoup=n=!1}try{i.innerHTML="<P><i><P></P></i></P>",t.selfClose=r=2===i.childNodes.length}catch(e){t.selfClose=r=!1}i=null,t.tagSoup=n,t.selfClose=r},function(e,t,n){"use strict";function r(e){var t=e.indexOf("-->");if(t>=0)return new l.CommentToken(e.substr(4,t-1),t+3)}function i(e){var t=e.indexOf("<");return new l.CharsToken(t>=0?t:e.length)}function a(e){var t,n,r;if(-1!==e.indexOf(">")){var i=e.match(u.startTag);if(i){var a=(t={},n={},r=i[2],i[2].replace(u.attr,(function(e,i){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(t[arguments[5]]="",n[arguments[5]]=!0):t[i]=arguments[2]||arguments[3]||arguments[4]||u.fillAttr.test(i)&&i||"":t[i]="",r=r.replace(e,"")})),{v:new l.StartTagToken(i[1],i[0].length,t,n,!!i[3],r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===a?"undefined":c(a)))return a.v}}}function o(e){var t=a(e);if(t){var n=e.slice(t.length);if(n.match(new RegExp("</\\s*"+t.tagName+"\\s*>","i"))){var r=n.match(new RegExp("([\\s\\S]*?)</\\s*"+t.tagName+"\\s*>","i"));if(r)return new l.AtomicTagToken(t.tagName,r[0].length+t.length,t.attrs,t.booleanAttrs,r[1])}}}function s(e){var t=e.match(u.endTag);if(t)return new l.EndTagToken(t[1],t[0].length)}t.__esModule=!0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.comment=r,t.chars=i,t.startTag=a,t.atomicTag=o,t.endTag=s;var l=n(4),u={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0,t.EndTagToken=t.AtomicTagToken=t.StartTagToken=t.TagToken=t.CharsToken=t.CommentToken=t.Token=void 0;var i=n(5),a=(t.Token=function e(t,n){r(this,e),this.type=t,this.length=n,this.text=""},t.CommentToken=function(){function e(t,n){r(this,e),this.type="comment",this.length=n||(t?t.length:0),this.text="",this.content=t}return e.prototype.toString=function(){return"<!--"+this.content},e}(),t.CharsToken=function(){function e(t){r(this,e),this.type="chars",this.length=t,this.text=""}return e.prototype.toString=function(){return this.text},e}(),t.TagToken=function(){function e(t,n,i,a,o){r(this,e),this.type=t,this.length=i,this.text="",this.tagName=n,this.attrs=a,this.booleanAttrs=o,this.unary=!1,this.html5Unary=!1}return e.formatTag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n="<"+e.tagName;for(var r in e.attrs)if(e.attrs.hasOwnProperty(r)){n+=" "+r;var a=e.attrs[r];void 0!==e.booleanAttrs&&void 0!==e.booleanAttrs[r]||(n+='="'+(0,i.escapeQuotes)(a)+'"')}return e.rest&&(n+=" "+e.rest),e.unary&&!e.html5Unary?n+="/>":n+=">",null!=t&&(n+=t+"</"+e.tagName+">"),n},e}());t.StartTagToken=function(){function e(t,n,i,a,o,s){r(this,e),this.type="startTag",this.length=n,this.text="",this.tagName=t,this.attrs=i,this.booleanAttrs=a,this.html5Unary=!1,this.unary=o,this.rest=s}return e.prototype.toString=function(){return a.formatTag(this)},e}(),t.AtomicTagToken=function(){function e(t,n,i,a,o){r(this,e),this.type="atomicTag",this.length=n,this.text="",this.tagName=t,this.attrs=i,this.booleanAttrs=a,this.unary=!1,this.html5Unary=!1,this.content=o}return e.prototype.toString=function(){return a.formatTag(this,this.content)},e}(),t.EndTagToken=function(){function e(t,n){r(this,e),this.type="endTag",this.length=n,this.text="",this.tagName=t}return e.prototype.toString=function(){return"</"+this.tagName+">"},e}()},function(e,t){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?e.replace(/([^"]*)"/g,(function(e,t){return/\\/.test(t)?t+'"':t+'\\"'})):t}t.__esModule=!0,t.escapeQuotes=n},function(e,t){"use strict";function n(e){return e&&"startTag"===e.type&&(e.unary=s.test(e.tagName)||e.unary,e.html5Unary=!/\/>$/.test(e.text)),e}function r(e,t){var r=e.stream,i=n(t());return e.stream=r,i}function i(e,t){var n=t.pop();e.prepend("</"+n.tagName+">")}function a(){var e=[];return e.last=function(){return this[this.length-1]},e.lastTagNameEq=function(e){var t=this.last();return t&&t.tagName&&t.tagName.toUpperCase()===e.toUpperCase()},e.containsTagName=function(e){for(var t,n=0;t=this[n];n++)if(t.tagName===e)return!0;return!1},e}function o(e,t,o){function s(){var t=r(e,o);t&&u[t.type]&&u[t.type](t)}var l=a(),u={startTag:function(n){var r=n.tagName;"TR"===r.toUpperCase()&&l.lastTagNameEq("TABLE")?(e.prepend("<TBODY>"),s()):t.selfCloseFix&&c.test(r)&&l.containsTagName(r)?l.lastTagNameEq(r)?i(e,l):(e.prepend("</"+n.tagName+">"),s()):n.unary||l.push(n)},endTag:function(n){l.last()?t.tagSoupFix&&!l.lastTagNameEq(n.tagName)?i(e,l):l.pop():t.tagSoupFix&&(o(),s())}};return function(){return s(),n(o())}}t.__esModule=!0,t.default=o;var s=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i}])},e.exports=t()},function(e,t){"use strict";function n(e){return null!=e}function r(e){return"function"==typeof e}function i(e,t,n){var r=void 0,i=e&&e.length||0;for(r=0;r<i;r++)t.call(n,e[r],r)}function a(e,t,n){for(var r in e)e.hasOwnProperty(r)&&t.call(n,r,e[r])}function o(e,t){return e=e||{},a(t,(function(t,r){n(e[t])||(e[t]=r)})),e}function s(e){try{return Array.prototype.slice.call(e)}catch(r){var t=(n=[],i(e,(function(e){n.push(e)})),{v:n});if("object"===(void 0===t?"undefined":f(t)))return t.v}var n}function c(e){return e[e.length-1]}function l(e,t){return!(!e||"startTag"!==e.type&&"atomicTag"!==e.type||!("tagName"in e)||!~e.tagName.toLowerCase().indexOf(t))}function u(e){return l(e,"script")}function d(e){return l(e,"style")}t.__esModule=!0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.existy=n,t.isFunction=r,t.each=i,t.eachKey=a,t.defaults=o,t.toArray=s,t.last=c,t.isTag=l,t.isScript=u,t.isStyle=d}])},"object"==typeof t&&"object"==typeof e?e.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.postscribe=r():n.postscribe=r()}},"core/src/lib/actions/helpers/getSourceByUrl.js":{script:function(e,t,n){"use strict";var r=n("@adobe/reactor-load-script"),i=n("@adobe/reactor-promise"),a={},o={},s=function(e){return o[e]||(o[e]=r(e)),o[e]};_satellite.__registerScript=function(e,t){a[e]=t},e.exports=function(e){return a[e]?i.resolve(a[e]):new i((function(t){s(e).then((function(){t(a[e])}),(function(){t()}))}))}}}}},"adobe-analytics":{displayName:"Adobe Analytics",hostedLibFilesBaseUrl:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/hostedLibFiles/EPbde2f7ca14e540399dcc1f8208860b7b/",settings:{orgId:"7FF852E2556756057F000101@AdobeOrg",libraryCode:{type:"custom",source:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/EXeddd70f92da34d5bb3676c5ca7160ce3-libraryCode_source.min.js",trackerVariableName:"s"},trackerProperties:{currencyCode:"USD",trackInlineStats:!0,trackDownloadLinks:!0,trackExternalLinks:!0,linkDownloadFileTypes:["doc","docx","eps","jpg","png","svg","xls","ppt","pptx","pdf","xlsx","tab","csv","zip","txt","vsd","vxd","xml","js","css","rar","exe","wma","mov","avi","wmv","mp3","wav","m4v"]}},modules:{"adobe-analytics/src/lib/actions/setVariables.js":{name:"set-variables",displayName:"Set Variables",script:function(e,t,n,r){"use strict";var i=n("../sharedModules/getTracker"),a=n("../helpers/applyTrackerVariables");e.exports=function(e,t){return i().then((function(n){r.logger.info("Set variables on the tracker."),a(n,e.trackerProperties),e.customSetup&&e.customSetup.source&&e.customSetup.source.call(t.element,t,n)}),(function(e){r.logger.error("Cannot set variables: "+e)}))}}},"adobe-analytics/src/lib/sharedModules/getTracker.js":{script:function(e,t,n,r){"use strict";var i,a=n("@adobe/reactor-cookie"),o=n("@adobe/reactor-promise"),s=n("@adobe/reactor-window"),c=n("../helpers/settingsHelper"),l=n("../helpers/augmenters"),u=n("../helpers/applyTrackerVariables"),d=n("../helpers/loadLibrary"),f=n("../helpers/generateVersion")(r.buildInfo.turbineBuildDate),p="beforeSettings",m=r.getSharedModule("adobe-mcid","mcid-instance"),g=function(e){return!e||"true"===a.get(e)},h=function(e){return o.all(l.map((function(t){var n;try{n=t(e)}catch(e){setTimeout((function(){throw e}))}return o.resolve(n)}))).then((function(){return e}))},v=function(e){return m&&(r.logger.info("Setting MCID instance on the tracker."),e.visitor=m),e},y=function(e){return r.logger.info('Setting version on tracker: "'+f+'".'),void 0!==e.tagContainerMarker?e.tagContainerMarker=f:"string"==typeof e.version&&e.version.substring(e.version.length-5)!=="-"+f&&(e.version+="-"+f),e},b=function(e,t,n){return t.loadPhase===p&&t.source&&(r.logger.info("Calling custom script before settings."),t.source.call(s,n)),u(n,e||{}),t.loadPhase!==p&&t.source&&(r.logger.info("Calling custom script after settings."),t.source.call(s,n)),n},_=function(e,t){return c.isAudienceManagementEnabled(e)&&(t.loadModule("AudienceManagement"),r.logger.info("Initializing AudienceManagement module"),t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),t},S=(i=r.getExtensionSettings(),g(i.trackingCookieName)?d(i).then(h).then(v).then(y).then(b.bind(null,i.trackerProperties,i.customSetup||{})).then(_.bind(null,i)):o.reject("EU compliance was not acknowledged by the user."));e.exports=function(){return S}},name:"get-tracker",shared:!0},"adobe-analytics/src/lib/sharedModules/augmentTracker.js":{name:"augment-tracker",shared:!0,script:function(e,t,n){"use strict";var r=n("../helpers/augmenters");e.exports=function(e){r.push(e)}}},"adobe-analytics/src/lib/helpers/applyTrackerVariables.js":{script:function(e,t,n,r){"use strict";var i=n("@adobe/reactor-query-string"),a=n("@adobe/reactor-window"),o=/eVar([0-9]+)/,s=/prop([0-9]+)/,c=new RegExp("^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$"),l=function(e,t,n){return n.indexOf(e)===t},u=function(e,t,n){var r=Object.keys(t).filter(c.test.bind(c));return n&&r.push("events"),(r=r.concat((e.linkTrackVars||"").split(","))).filter((function(e,t){return"None"!==e&&e&&l(e,t,r)})).join(",")},d=function(e,t){var n=t.map((function(e){return e.name}));return(n=n.concat((e.linkTrackEvents||"").split(","))).filter((function(e,t){return"None"!==e&&l(e,t,n)})).join(",")},f=function(e,t,n){e[t]=n[t].join(",")},p=function(e,t,n){var r=n.dynamicVariablePrefix||"D=";n[t].forEach((function(t){var n;if("value"===t.type)n=t.value;else{var i=o.exec(t.value);if(i)n=r+"v"+i[1];else{var a=s.exec(t.value);a&&(n=r+"c"+a[1])}}e[t.name]=n}))},m={linkDownloadFileTypes:f,linkExternalFilters:f,linkInternalFilters:f,hierarchies:function(e,t,n){n[t].forEach((function(t){e[t.name]=t.sections.join(t.delimiter)}))},props:p,eVars:p,campaign:function(e,t,n){if("queryParam"===n[t].type){var r=i.parse(a.location.search);e[t]=r[n[t].value]}else e[t]=n[t].value},events:function(e,t,n){var r=n[t].map((function(e){var t=e.name;return e.id&&(t=[t,e.id].join(":")),e.value&&(t=[t,e.value].join("=")),t}));e[t]=r.join(",")}};e.exports=function(e,t){var n={};t=t||{},Object.keys(t).forEach((function(e){var r=m[e],i=t[e];r?r(n,e,t):n[e]=i})),n.events&&e.events&&e.events.length>0&&(n.events=e.events+","+n.events);var i=t&&t.events&&t.events.length>0,a=u(e,n,i);a&&(n.linkTrackVars=a);var o=d(e,t.events||[]);o&&(n.linkTrackEvents=o),r.logger.info('Applying the following properties on tracker: "'+JSON.stringify(n)+'".'),Object.keys(n).forEach((function(t){e[t]=n[t]}))}}},"adobe-analytics/src/lib/helpers/settingsHelper.js":{script:function(e,t,n,r){"use strict";var i=n("@adobe/reactor-window"),a={LIB_TYPES:{MANAGED:"managed",PREINSTALLED:"preinstalled",REMOTE:"remote",CUSTOM:"custom"},MANAGED_LIB_PATHS:{APP_MEASUREMENT:"AppMeasurement.js",ACTIVITY_MAP:"AppMeasurement_Module_ActivityMap.js",AUDIENCE_MANAGEMENT:"AppMeasurement_Module_AudienceManagement.js"},getReportSuites:function(e){var t=e.production;return e[r.buildInfo.environment]&&(t=e[r.buildInfo.environment]),t.join(",")},isActivityMapEnabled:function(e){return!(e.libraryCode&&!e.libraryCode.useActivityMap&&!1===e.libraryCode.useActivityMap)},isAudienceManagementEnabled:function(e){var t=!1;return e&&e.moduleProperties&&e.moduleProperties.audienceManager&&e.moduleProperties.audienceManager.config&&i&&i._satellite&&i._satellite.company&&i._satellite.company.orgId&&(t=!0),t}};e.exports=a}},"adobe-analytics/src/lib/helpers/augmenters.js":{script:function(e){"use strict";e.exports=[]}},"adobe-analytics/src/lib/helpers/loadLibrary.js":{script:function(e,t,n,r){"use strict";var i=n("@adobe/reactor-load-script"),a=n("@adobe/reactor-window"),o=n("@adobe/reactor-promise"),s=n("./settingsHelper"),c=n("./pollHelper"),l=function(e,t){if(!a.s_gi)throw new Error("Unable to create AppMeasurement tracker, `s_gi` function not found."+a.AppMeasurement);r.logger.info('Creating AppMeasurement tracker with these report suites: "'+t+'"');var n=a.s_gi(t);return e.libraryCode.scopeTrackerGlobally&&(r.logger.info("Setting the tracker as window.s"),a.s=n),n},u=function(e){var t=[];switch(e.libraryCode.type){case s.LIB_TYPES.MANAGED:t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.APP_MEASUREMENT)),s.isActivityMapEnabled(e)&&t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.ACTIVITY_MAP));break;case s.LIB_TYPES.CUSTOM:t.push(e.libraryCode.source);break;case s.LIB_TYPES.REMOTE:t.push("https:"===a.location.protocol?e.libraryCode.httpsUrl:e.libraryCode.httpUrl)}if(s.isAudienceManagementEnabled(e)){var n={namespace:a._satellite.company.orgId};e.moduleProperties.audienceManager.config.visitorService=n,t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT))}return t},d=function(e){return o.all(u(e).map((function(e){return r.logger.info("Loading script: "+e),i(e)})))},f=function(e,t){if(e.libraryCode.accounts)if(t.sa){var n=s.getReportSuites(e.libraryCode.accounts);r.logger.info('Setting the following report suites on the tracker: "'+n+'"'),t.sa(n)}else r.logger.warn("Cannot set report suites on tracker. `sa` method not available.");return t},p=function(e){
if(a[e])return r.logger.info('Found tracker located at: "'+e+'".'),a[e];throw new Error('Cannot find the global variable name: "'+e+'".')};e.exports=function(e){var t=d(e);switch(e.libraryCode.type){case s.LIB_TYPES.MANAGED:var n=s.getReportSuites(e.libraryCode.accounts);return t.then(l.bind(null,e,n));case s.LIB_TYPES.PREINSTALLED:return t.then(c.poll.bind(null,a,e.libraryCode.trackerVariableName)).then(f.bind(null,e));case s.LIB_TYPES.CUSTOM:case s.LIB_TYPES.REMOTE:return t.then(p.bind(null,e.libraryCode.trackerVariableName)).then(f.bind(null,e));default:throw new Error("Cannot load library. Type not supported.")}}}},"adobe-analytics/src/lib/helpers/generateVersion.js":{script:function(e){"use strict";var t=8,n=function(e){return e.getUTCDate().toString(36)},r=function(e){return e.substr(e.length-1)},i=function(e){return Math.floor(e.getUTCHours()/t)},a=function(e){var t=(e.getUTCMonth()+1+12*i(e)).toString(36);return r(t)},o=function(e){return(e.getUTCFullYear()-2010).toString(36)};e.exports=function(e){var t=new Date(e);if(isNaN(t))throw new Error("Invalid date provided");return("L"+o(t)+a(t)+n(t)).toUpperCase()}}},"adobe-analytics/src/lib/helpers/pollHelper.js":{script:function(e,t,n,r){"use strict";var i=n("@adobe/reactor-promise"),a=40,o=250,s=function(e,t,n){r.logger.info('Found property located at: "'+t+'"].'),e(n)},c=function(e,t){return new i((function(n,r){if(e[t])return s(n,t,e[t]);var i=1,c=setInterval((function(){e[t]&&(s(n,t,e[t]),clearInterval(c)),i>=a&&(clearInterval(c),r(new Error('Bailing out. Cannot find the variable name: "'+t+'"].'))),i++}),o)}))};e.exports={poll:function(e,t){return r.logger.info('Waiting for the property to become accessible at: "'+t+'"].'),c(e,t)}}}}}}},company:{orgId:"7FF852E2556756057F000101@AdobeOrg",dynamicCdnEnabled:!1},property:{name:"CNN Arabic",settings:{domains:["arabic.cnn.com"],undefinedVarsReturnEmpty:!1,ruleComponentSequencingEnabled:!0},id:"PR7e8058e18fda428a916c48dc57fc8c4c"},rules:[{id:"RL2329abe17fbb4b8d922f711fcc9b6503",name:"comScore StreamSense All Pages",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:4}],conditions:[],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'wminst.isCSSessionActive = false;\n\nwminst.initStreamingTag = function () {\n    wminst.myStreamingTag = new ns_.StreamingTag({\n        customerC2: "6035748"\n    });\n}\n\nPubSub.subscribe("cs_video-preroll", function (data) {\n    wminst.isCSSessionActive = true;\n    if (typeof wminst.myStreamingTag != "undefined") {\n        wminst.myStreamingTag.stop();\n    }\n    if (!wminst.prev_vid) { //first video\n        wminst.initStreamingTag();\n    } else if (wminst.prev_vid && wminst.prev_vid !== data.id) { //new video\n        wminst.initStreamingTag();\n    } else if (wminst.completed_vid && wminst.completed_vid == data.id) {\n        wminst.completed_vid = "";\n        wminst.initStreamingTag();\n    }\n    wminst.prev_vid = data.id;\n    var clength = data.ad_duration || 0;\n    try {\n        clength = parseInt(clength);\n        if (clength % 1000 !== 0) {\n            clength = clength * 1000;\n        }\n    } catch (e) {\n        clength = 0;\n    }\n    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";\n    var metadata = {\n        ns_st_cl: clength,\n        cs_ucfr: cs_ucfr\n    };\n    if (ns_) {\n        ns_.StreamingTag.AdType = {\n            BrandedOnDemandContent: "34",\n            BrandedOnDemandLive: "35",\n            BrandedOnDemandMidRoll: "32",\n            BrandedOnDemandPostRoll: "33",\n            BrandedOnDemandPreRoll: "31",\n            LinearLive: "21",\n            LinearOnDemandMidRoll: "12",\n            LinearOnDemandPostRoll: "13",\n            LinearOnDemandPreRoll: "11",\n            Other: "00"\n        };\n    }\n    var atype = ns_.StreamingTag.AdType.LinearOnDemandPreRoll;\n    if (data.adType && data.adType.toLowerCase() === "midroll") {\n        atype = ns_.StreamingTag.AdType.LinearOnDemandMidRoll;\n    }\n    if (data.adType && data.adType.toLowerCase() === "postroll") {\n        atype = ns_.StreamingTag.AdType.LinearOnDemandPostRoll;\n    }\n    if (data.isLive && (data.isLive == "true" || data.isLive == true)) {\n        atype = ns_.StreamingTag.AdType.LinearLive;\n    }\n    wminst.myStreamingTag.playVideoAdvertisement(metadata, atype);\n});\n\nPubSub.subscribe("cs_ad-complete", function (data) {\n    wminst.isCSSessionActive = false;\n    if (typeof wminst.myStreamingTag != "undefined") {\n        wminst.myStreamingTag.stop();\n    }\n});\n\nPubSub.subscribe("cs_video-play", function (data) {\n    wminst.isCSSessionActive = true;\n    if (typeof wminst.myStreamingTag != "undefined") {\n        wminst.myStreamingTag.stop();\n    }\n    if (!wminst.prev_vid) { //first video\n        wminst.initStreamingTag();\n    } else if (wminst.prev_vid && wminst.prev_vid !== data.id) { //new video\n        wminst.initStreamingTag();\n    } else if (wminst.completed_vid && wminst.completed_vid == data.id) {\n        wminst.completed_vid = "";\n        wminst.initStreamingTag();\n    }\n    wminst.prev_vid = data.id;\n    var c4 = "CNN";\n    var c3 = "*null";\n    var c6 = "*null";\n    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";\n    var clength = data.trt || 0;\n    try {\n        clength = parseInt(clength);\n        if (clength % 1000 !== 0) {\n            clength = clength * 1000;\n        }\n    } catch (e) {\n        clength = 0;\n    }\n    var adate = data.timestamp || "";\n    try {\n        if (adate) {\n            adate = new Date(adate);\n            adate = adate.toISOString().substring(0, 10);\n        }\n    } catch (e) {}\n    if (typeof data.category != \'undefined\' && data.category.toLowerCase() === "spanish") {\n        c4 = "CNNESPANOL";\n    }\n    if (typeof data.category != \'undefined\' && data.category.toLowerCase() === "cnnmoney") {\n        c4 = "CNNMONEY";\n    }\n    var metadata = {\n        ns_st_ci: data.id,\n        ns_st_cl: clength,\n        ns_st_st: "*null",\n        ns_st_pu: "CNN",\n        ns_st_pr: "CNN Arabic",\n        ns_st_ep: data.slug || "*null",\n        ns_st_sn: "*null",\n        ns_st_en: "*null",\n        ns_st_ge: data.category || "*null",\n        ns_st_ti: "*null",\n        ns_st_ia: "0",\n        ns_st_ce: "0",\n        ns_st_ddt: "*null",\n        ns_st_tdt: adate || "*null",\n        c3: "*null",\n        c4: "CNNAR",\n        c6: "*null",\n        cs_ucfr: cs_ucfr\n    };\n\n    if (ns_) {\n        ns_.StreamingTag.ContentType = {\n            Bumper: "99",\n            Live: "13",\n            LongFormOnDemand: "12",\n            Other: "00",\n            ShortFormOnDemand: "11",\n            UserGeneratedLive: "23",\n            UserGeneratedLongFormOnDemand: "22",\n            UserGeneratedShortFormOnDemand: "21"\n        };\n    }\n    var vtype = ns_.StreamingTag.ContentType.ShortFormOnDemand;\n    if (data.isLive && (data.isLive == "true" || data.isLive == true)) {\n        vtype = ns_.StreamingTag.ContentType.Live;\n    }\n    wminst.myStreamingTag.playVideoContentPart(metadata, vtype);\n});\n\nPubSub.subscribe("cs_video-complete", function (data) {\n    wminst.isCSSessionActive = false;\n    wminst.completed_vid = data.id;\n    if (typeof wminst.myStreamingTag != "undefined") {\n        wminst.myStreamingTag.stop();\n    }\n});\n\nPubSub.subscribe("cs_video-pause", function (data) {\n    wminst.isCSSessionActive = false;\n    if (typeof wminst.myStreamingTag != "undefined") {\n        wminst.myStreamingTag.stop();\n    }\n});\n\nPubSub.subscribe("cs_video-resume", function (data) {\n    wminst.isCSSessionActive = true;\n    if (typeof wminst.myStreamingTag != "undefined") {\n        wminst.myStreamingTag.stop();\n    }\n    var c4 = "CNN";\n    var c3 = "*null";\n    var c6 = "*null";\n    var cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";\n    var clength = data.trt || 0;\n    try {\n        clength = parseInt(clength);\n        if (clength % 1000 !== 0) {\n            clength = clength * 1000;\n        }\n    } catch (e) {\n        clength = 0;\n    }\n    var adate = data.timestamp || "";\n    try {\n        if (adate) {\n            adate = new Date(adate);\n            adate = adate.toISOString().substring(0, 10);\n        }\n    } catch (e) {}\n    if (typeof data.category != \'undefined\' && data.category.toLowerCase() === "spanish") {\n        c4 = "CNNESPANOL";\n    }\n    if (typeof data.category != \'undefined\' && data.category.toLowerCase() === "cnnmoney") {\n        c4 = "CNNMONEY";\n    }\n    var metadata = {\n        ns_st_ci: data.id,\n        ns_st_cl: clength,\n        ns_st_st: "*null",\n        ns_st_pu: "CNN",\n        ns_st_pr: "CNN Arabic",\n        ns_st_ep: data.slug || "*null",\n        ns_st_sn: "*null",\n        ns_st_en: "*null",\n        ns_st_ge: data.category || "*null",\n        ns_st_ti: "*null",\n        ns_st_ia: "0",\n        ns_st_ce: "0",\n        ns_st_ddt: "*null",\n        ns_st_tdt: adate || "*null",\n        c3: "*null",\n        c4: "CNNAR",\n        c6: "*null",\n        cs_ucfr: cs_ucfr\n    };\n\n    if (ns_) {\n        ns_.StreamingTag.ContentType = {\n            Bumper: "99",\n            Live: "13",\n            LongFormOnDemand: "12",\n            Other: "00",\n            ShortFormOnDemand: "11",\n            UserGeneratedLive: "23",\n            UserGeneratedLongFormOnDemand: "22",\n            UserGeneratedShortFormOnDemand: "21"\n        };\n    }\n    var vtype = ns_.StreamingTag.ContentType.ShortFormOnDemand;\n    if (data.isLive && (data.isLive == "true" || data.isLive == true)) {\n        vtype = ns_.StreamingTag.ContentType.Live;\n    }\n    wminst.myStreamingTag.playVideoContentPart(metadata, vtype);\n});\n\nPubSub.subscribe("dynamic-page", function (data) {\n    if (wminst.isCSSessionActive === true && typeof wminst.myStreamingTag != "undefined") {\n        wminst.isCSSessionActive = false;\n        wminst.myStreamingTag.stop();\n    }\n});',language:"javascript"},timeout:2e3,delayNext:!0}]},{id:"RL24f1695a2032400b993a961facef9b21",name:"Adobe Analytics - Video Tracking - All Pages",events:[{modulePath:"core/src/lib/events/domReady.js",settings:{},ruleOrder:4}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isTagConsented("adobe")}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/RCd8f914f6ce8c4da19b1d24786664c69b-source.min.js",language:"javascript",isExternal:!0},timeout:2e3,delayNext:!0}]},{id:"RL48596df93b7e4d2899dcc80515fcc279",name:"Adobe Analytics - Dynamic Tracking - All Pages",events:[{modulePath:"core/src/lib/events/domReady.js",settings:{},ruleOrder:4}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isTagConsented("adobe")}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/RCc7dc27ffaaec4f3b99a22cb14e5276c3-source.min.js",language:"javascript",isExternal:!0},timeout:2e3,delayNext:!0}]},{id:"RL57d8194201744cecb3e2ae1faf139360",name:"Analytics Utility Plugins",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:1}],conditions:[],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{
source:'window.wminst = window.wminst || {};\nwminst.Util = function() {\n    return {\n        loadCustomVariables: function() {\n            this.tmsName = "launch";\n            this.businessName = "cna";\n            this.brandName = "cnnarabic";\n            this.buildVersion = 41; // Build Update Oct 30, 2023\n            this.buildEnv = this.getBuildEnv();\n            this.buildDate = this.getBuildDate();\n            this.debugFlag = "WMINST_DEBUG";\n            this.logPrefix = "[WMINST]";\n            window.is_expansion = true;\n            wminst.subscribersReady = false;\n            wminst.hpt_set = 0;\n            wminst.buffer_count = 0;\n            wminst.is_podcast = 0;\n            wminst.is_scrubbed = false;\n        },\n        getBuildEnv: function() {\n            return {\n                "development": "dev",\n                "staging": "qa",\n                "production": "prod"\n            } [_satellite.environment.stage];\n        },\n        getBuildDate: function() {\n            return _satellite.buildInfo.buildDate.split("T")[0].replace(/-/g, "");\n        },\n        getCNNCodeVersion: function() {\n            return [this.tmsName, this.brandName, this.buildEnv, this.buildVersion, this.buildDate].join(".");\n        },\n        setDebug: function(flag) {\n            if (flag == true) {\n                sessionStorage.setItem(this.debugFlag, true);\n            } else {\n                sessionStorage.removeItem(this.debugFlag);\n            }\n        },\n        log: function() {\n            var logEnabled = sessionStorage.getItem(this.debugFlag);\n            if (logEnabled) {\n                var args = Array.prototype.slice.call(arguments);\n                args.unshift(this.logPrefix);\n                console.log.apply(console, args);\n            }\n        },\n        getTagConsentStatesV1: function(name) {\n            return {\n                "adobe"             : ["perf-general"],\n                "comscore"          : ["perf-vendor"],\n                "nielsen"           : ["perf-vendor"],\n                "floodlight"        : ["ad-vendor"],\n                "facebook-pixel"    : ["perf-vendor", "social-vendor"],\n                "zion"              : ["perf-general", "person-general"],\n                "att-wm-id"         : ["perf-general", "person-general", "ad-general", "social-general", "storage-general", "behavior-general"],\n                "app-nexus-id"      : ["ads-vendor"],\n                "trackonomics"      : ["ads-general", "ads-vendor", "behavior-general", "perf-general", "person-general", "social-general", "storage-general"],\n                "viglink"           : ["ads-vendor"],\n                "quantcast"         : ["ads-vendor"],\n                "amazon"            : ["ads-vendor"],\n                "bounce-x"          : ["iab", "behavior-vendor", "person-vendor", "storage-vendor"],\n                "chartbeat"         : ["perf-general"],\n                "keywee"            : ["ads-vendor", "behavior-vendor", "storage-vendor", "perf-vendor"],\n                "krux"              : ["ads-vendor"],\n                "stack-sonar"       : ["ads-general"],\n                "optimizely"        : ["behavior-general", "perf-general", "person-general"],\n                "bombora"           : ["iab"],\n                "outbrain"          : ["iab", "behavior-vendor"]\n            }[name];\n        },\n        // CCPA/GDPR Categories of v.2\n        getTagConsentStatesV2: function(name) {\n            return {\n                "adobe"             : ["data-store", "content-person-prof", "content-person", "measure-content", "measure-market", "product-develop"],\n                "comscore"          : ["vendor", "measure-content"],\n                "nielsen"           : ["vendor", "measure-content", "data-store"],\n                "facebook-pixel"    : ["data-store", "ads-contextual", "ads-person-prof", "ads-person", "vendor"],\n                "zion"              : ["data-store", "ads-person-prof", "ads-person", "content-person-prof", "content-person", "measure-content"],\n                "att-wm-id"         : ["data-store", "ads-contextual", "ads-person-prof", "ads-person", "content-person-prof", "content-person", "measure-ads", "measure-content", "measure-market", "product-develop", "vendor"],\n                "app-nexus-id"      : ["vendor"],\n                "trackonomics"      : ["data-store", "measure-ads", "vendor"],\n                "viglink"           : ["data-store", "measure-content", "vendor"],\n                "amazon"            : ["data-store", "ads-contextual", "ads-person-prof", "ads-person", "vendor"],\n                "quantcast"         : ["iab", "data-share", "data-sell", "data-store", "ads-contextual", "ads-person-prof", "ads-person", "measure-content", "measure-market", "product-develop"],\n                "bounce-x"          : ["iab", "data-share", "data-sell", "data-store", "ads-contextual", "ads-person-prof", "ads-person", "measure-ads", "measure-market", "product-develop"],\n                "chartbeat"         : ["data-store", "measure-content"],\n                "keywee"            : ["data-store", "ads-person-prof", "ads-person", "measure-ads", "measure-market", "vendor"],\n                "krux"              : ["data-store", "ads-person-prof", "ads-person", "measure-ads", "measure-content", "measure-market"],\n                "stack-sonar"       : ["data-store", "ads-contextual", "ads-person-prof", "ads-person"],\n                "optimizely"        : ["data-store", "content-person-prof", "content-person", "measure-ads", "measure-content", "vendor"],\n                "bombora"           : ["vendor", "data-store", "ads-person-prof", "measure-ads", "measure-content", "product-develop"],\n                "outbrain"          : ["vendor", "data-store", "ads-contextual", "ads-person-prof", "ads-person", "content-person-prof", "content-person", "measure-ads", "measure-content", "measure-market", "product-develop"],\n                "full-story"        : ["measure-content", "product-develop"]\n            }[name];\n        },\n        // CCPA/GDPR Version Check\n        getTagConsentStates: function(name) {\n            try {\n                if (window.WM && WM.UserConsent && WM.UserConsent.getVersion() !== null && WM.UserConsent.getVersion().indexOf("1") === 0) {\n                    return this.getTagConsentStatesV1(name);\n                }\n                return this.getTagConsentStatesV2(name);\n            } catch (e) {\n                return this.getTagConsentStatesV1(name);\n            }\n        },\n        isUSRegion: function() {\n            if (window.WM && WM.UserConsent) {\n                return WM.UserConsent.getGeoCountry() === "US";\n            } else {\n                return _satellite.cookie.get("countryCode") === "US";\n            }\n        },\n        // CCPA/GDPR Check\n        isTagConsented: function(name) {\n            var isInUSRegion = this.isUSRegion();\n            if (name == "att-wm-id") {\n                return isInUSRegion;\n            }\n            if (name == "app-nexus-id" && !isInUSRegion) {\n                return false;\n            }\n            if (name == "quantcast" && isInUSRegion) {\n                return false;\n            }\n            var states = this.getTagConsentStates(name);\n            if (window.WM && WM.UserConsent) {\n                if (WM.UserConsent.isReady() && WM.UserConsent.inUserConsentState(states, {id: name})) {\n                    return true;\n                }\n            } else {\n                return true;\n            }\n            return false;\n        },\n        inIFrame: function() {\n            try {\n                return window.self !== window.top;\n            } catch (e) {\n                return true;\n            }\n        },\n        sendImagePixel: function(url) {\n            var image = new Image();\n            image.src = url;\n            image.style.display = "none";\n            image.width = 1;\n            image.height = 1;\n        },\n        loadScript: function(src, callback) {\n            var e = document.createElement(\'script\');\n            e.type = \'text/javascript\';\n            e.async = true;\n            e.src = src;\n            if (callback) {\n                e.addEventListener(\'load\', callback);\n            }\n            var n = document.getElementsByTagName(\'script\')[0];\n            n.parentNode.insertBefore(e, n);\n        },\n        getCookie: function(name, flag) {\n            var r = _satellite.cookie.get(name) || "";\n            if (flag === \'c\' || flag === 1) {\n                _satellite.cookie.set(name, "-", -1000);\n            }\n            return unescape(r);\n        },\n        removeCookie: function(name) {\n            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.cnn.com;";\n        },\n        getQuery: function(key, loc) {\n            if (!this.params || loc) {\n                var search = loc || window.location.search;\n                var params = search.replace(/^\\?/, ""),\n                    paramObj = {};\n                params = params.split("&");\n                for (var i = 0; i < params.length; i++) {\n                    var t = params[i].split("=");\n                    paramObj[t[0]] = t[1]\n                }\n                if (!loc) {\n                    this.params = paramObj;\n                } else {\n                    return paramObj[key] || "";\n                }\n            }\n            return this.params[key] || "";\n        },\n        getCNNNavigator: function() {\n            return navigator.userAgent;\n        },\n        getBusinessName: function() {\n            return "cnn arabic";\n        },\n        getCNNTranscationId: function() {\n            var rval = "";\n            try {\n                if (typeof window.cnnad_transactionID !== \'undefined\') {\n                    rval = window.cnnad_transactionID;\n                } else if (typeof window.cnnad_getTransactionID === "function") {\n                    rval = cnnad_getTransactionID();\n                } else {\n                    rval = Math.round((new Date()).getTime() / 1000) + "" + Math.floor(Math.random() * 9007199254740992);\n                }\n            } catch (e) {}\n            return rval;\n        },\n        getCNNPreviousPageName: function() { //prop49,eVar49 - Previous PageName\n            var rval = "";\n            try {\n                if (this.isTagConsented(\'adobe\')) {\n                    var pName = window.document.referrer;\n                    var prevP = s.getPreviousValue(wminst.Util.getADBPPageName(), "cnprevpage_pn");\n                    if (prevP && typeof pName != "undefined" && pName != "" && pName.indexOf(".cnn.com") != -1) {\n                        return prevP;\n                    }\n                }\n            } catch (e) {\n                return rval;\n            }\n            return rval;\n        },\n        isEmpty: function(obj) {\n            for (var key in obj) {\n                if (obj.hasOwnProperty(key))\n                    return false;\n            }\n            return true;\n        },\n        isSearchPage: function() {\n            return window.location.pathname.indexOf("/search") === 0;\n        },\n        isRefreshPage: function() {\n            return wminst.Util.getQuery("refresh");\n        },\n        isDynamicPage: function() {\n            return this.isSearchPage() || this.isRefreshPage();\n        },\n        isFavePage: function() {\n            return window.location.hostname.indexOf("fave.api.cnn.io") !== -1 || window.location.hostname.indexOf("fave-api.cnn.com") !== -1;\n        },\n        getVideoMetadata: function(data) {\n            if (!this.isEmpty(data.video)) {\n                return data.video;\n            } else {\n                return data;\n            }\n        },\n        getCNNVisitorID: function(id) {\n            var rval = "";\n            try {\n                rval = this.getCookie(id);\n                rval = rval.replace(/\\[(.+?)\\]/g, "");\n                rval = rval.split("|")[1];\n            } catch (err) {}\n            return rval;\n        },\n        getCNNSection: function(position) {\n            var rval = "";\n            try {\n                if (position == "1") {\n                    if (typeof window.cna_omniture.section[1] == \'undefined\') {\n                        rval = window.cna_omniture.section[0] + ":";\n                    } else {\n                        rval = window.cna_omniture.section[1];\n                    }\n                } else {\n                    rval = window.cna_omniture.section[position];\n                }\n            } catch (err) {}\n            return rval;\n        },\n        getCNNPageFranchise: function(position) { //prop31,eVar31 - page.franchise\n            return window.cna_omniture.broadcast_franchise;\n        },\n        getCNNTemplateType: function(lookupType) { //prop32,eVar32 - page.template_type\n            return window.cna_omniture.template_type.replace(/(adbp|other):/, "");\n        },\n        getCNNContentType: function(defaultVal) { //prop33,eVar33 - page.content_type\n            var tt = wminst.Util.getCNNTemplateType("long") || "";\n            var ct = window.cna_omniture.content_type ? window.cna_omniture.content_type : "";\n            var rObj = {};\n            var l = {\n                "blog": ["blog.read", "adbp:blog read"],\n                "content": ["article.read", "adbp:article read"],\n                "game": ["game.play", "adbp:game played"],\n                "ireport": ["other.ireport", "other:ireport"],\n                "photo wall": ["content.interactive", "other:photo wall"]\n            } [tt];\n            var m = {\n                "adbp:article read": "article.read"\n            } [ct];\n            if (m !== null) {\n                if (typeof ct !== \'undefined\' && ct.indexOf("pivit") !== -1) {\n                    return tt + ":" + ct;\n                } else {\n                    return ct;\n                }\n            }\n            if (!l) {\n                return defaultVal;\n            }\n            return l[1];\n        },\n        getCNNAuthenticated: function(c1, c2, truevalue, falsevalue, neutralvalue, flag) { //prop34,eVar34 - user.authenticated\n            var rValue = 0;\n            if (this.getCookie(c1, flag)) {\n                rValue++;\n            }\n            if (this.getCookie(c2, flag)) {\n                rValue++;\n            }\n            if (rValue == 0) {\n                return falsevalue;\n            } else if (rValue == 1) {\n                return neutralvalue;\n            } else {\n                return truevalue;\n            }\n        },\n        getCNNSearchTerm: function() { //prop39,eVar39 - search.internal.keyword\n            var rval = this.getQuery("query");\n            try {\n                rval = window.cna_omniture.search_term || rval;\n            } catch (e) {}\n            return rval;\n        },\n        getCNNSearchResults: function() { //prop27 - search.internal.number_results\n            var rval = window.cna_omniture.search_results_count;\n            return rval;\n        },\n        getCNNAuthor: function() { //prop2,eVar2 - business.cnn.page.author\n            return window.cna_omniture.author;\n        },\n        getPhotoGalleryName: function() { //prop6,eVar6 - business.cnn.page.photo.gallery\n            return window.cna_omniture.gallery_name;\n        },\n        getCNNPublishDate: function() { //prop16,eVar16 - business.cnn.page.publish_date\n            return window.cna_omniture.publish_date;\n        },\n        getCNNVideoOpportunity: function() { //eVar22 - business.cnn.page.video_embed_count\n            var rval = "";\n            try {\n                rval = window.cna_omniture.video_opportunity;\n            } catch (e) {}\n            return rval ? rval : "0";\n        },\n        getCNNVisitNumber: function(rollday) { //prop8,eVar8 - business.cnn.page.visit_number.$30Day\n            rollday = rollday || 28; //default rolling day is 28\n            var todaydate = new Date().getTime();\n            if (typeof(Storage) !== "undefined") { //check for web storage support\n                if (localStorage.startdate) { //check for start date\n                    if (sessionStorage.online) { //check for session variable\n                        var daysinceonline = Math.ceil((todaydate - sessionStorage.online) / 86400000);\n                        if (daysinceonline > 1) { //if session is older than 24 hours, reset session start time and count as a visit\n                            localStorage.visittype = "repeat"; //set visit type (new vs repeat)\n                            localStorage.visitnum = Number(localStorage.visitnum) + 1; //increment visit number\n                            sessionStorage.online = todaydate; //set session variable\n                        }\n                    } else { //new session\n                        localStorage.visittype = "repeat"; //set visit type (new vs repeat)\n                        localStorage.visitnum = Number(localStorage.visitnum) + 1; //increment visit number\n                        sessionStorage.online = todaydate; //set session variable\n                    }\n                    var daysincestart = Math.ceil((todaydate - localStorage.startdate) / 86400000);\n                    if (daysincestart > Number(rollday)) { //if days since start date is greater than rolling day, set new start date\n                        localStorage.startdate = todaydate;\n                        localStorage.visittype = "new";\n                        localStorage.visitnum = 1;\n                    }\n                } else { //first new visit\n                    localStorage.startdate = todaydate; //set new start date\n                    localStorage.visittype = "new"; //set visit type (new vs repeat)\n                    localStorage.visitnum = 1; //set visit number\n                    sessionStorage.online = todaydate; //set session variable\n                }\n                return localStorage.visittype + ": " + localStorage.visitnum;\n            } else {\n                return "new: 1";\n            }\n        },\n        getCNNLatNav: function() { //prop9,eVar9 - business.cnn.page.lateral_navigation\n            var cnnLateralNav = this.getQuery("iref");\n            if (this.getQuery("refresh")) {\n                cnnLateralNav = "auto-refresh"\n            };\n            return cnnLateralNav;\n        },\n        isVideoAutoStarted: function(data) {\n            if (data.is_autoplay_allowed !== "undefined" && data.isAutoStart !== "undefined") {\n                if (data.is_autoplay_allowed == true && data.isAutoStart == true) {\n                    return true;\n\n                } else {\n                    return false;\n                }\n            } else {\n                return false;\n            }\n        },\n        getCNNDaysSinceLastPublish: function(d) { //prop10,eVar10 - business.cnn.page.days_since_publish\n            var e = new Date();\n            var p;\n            var j;\n            if (d == \'a\') {\n                d = window.cna_omniture.publish_date;\n                j = new Date(d);\n            } else if (d.toString().indexOf("/") != -1) {\n                p = d.split("/");\n                if (p[0].length != 4) {\n                    p[2] = "20" + p[2];\n                    j = new Date(p[2] + "/" + p[0] + "/" + p[1]);\n                } else {\n                    j = new Date(d);\n                }\n            } else {\n                j = new Date(d);\n            }\n            var ONE_DAY = 1000 * 60 * 60 * 24;\n            var date1_ms = e.getTime();\n            var date2_ms = j.getTime();\n            var difference_ms = Math.abs(date1_ms - date2_ms)\n            var days = Math.round((difference_ms / ONE_DAY))\n            if (isNaN(days)) {\n                return ""\n            }\n            return Math.round((difference_ms / ONE_DAY)).toString()\n        },\n        getPageAttribution: function() { //prop4,eVar4 - business.cnn.page.HPlocation\n            var cnnPA = this.getCookie("linkTracking") || this.getQuery("hpt") || "";\n            if (document.referrer !== "" && document.referrer.indexOf("cnn.com") == -1) {\n                cnnPA = "";\n            }\n            this.removeCookie("linkTracking");\n            return cnnPA;\n        },\n        getCNNPhotoImage: function() { //prop25,eVar25 - business.cnn.page.photo.slide\n            return window.cna_omniture.gallery_slide;\n        },\n        getCNNURL: function() { //prop26 - page.clean_url\n            var hostname = window.location.hostname;\n            var pathname = window.location.pathname;\n            pathname = pathname.replace(/([^\\/]+\\.[^\\/]+$)/, "");\n            return hostname + pathname;\n        },\n        getCNNPlatform: function() { //prop37,eVar37 - business.cnn.page.platform\n            var rval = "";\n            if (navigator.userAgent.match(/iPhone/i)) {\n                rval = "smartphone";\n            } else if (navigator.userAgent.match(/iPad/i)) {\n                rval = "tablet";\n            } else if (navigator.userAgent.match(/android/i)) {\n                if (navigator.userAgent.match(/mobile/i)) {\n                    rval = "smartphone";\n                } else {\n                    rval = "tablet";\n                }\n            } else {\n                rval = "desktop";\n            }\n            return rval ? rval : "no value set";\n        },\n        decodeBase64 : function(s) {\n          var e={},i,b=0,c,x,l=0,a,r=\'\',w=String.fromCharCode,L=s.length;\n          var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n          for(i=0;i<64;i++){e[A.charAt(i)]=i;}\n          for(x=0;x<L;x++){\n              c=e[s.charAt(x)];b=(b<<6)+c;l+=6;\n              while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}\n          }\n          return r;\n        },\n        getCNNUserAuthState: function() { // get user auth status\n            var userAuthObj = { \n                        user_login_status:"",\n                        user_account_status: "",\n                        user_registered_status: ""};\n            try {\n                var userLoginState =  _satellite.cookie.get("_cnn_at") ||  _satellite.cookie.get("_cnn_at_edition");// ===> User Logged In\n                if (userLoginState && userLoginState !== "") {\n                    userAuthObj.user_login_status = "logged in";\n                    userAuthObj.user_registered_status = "registered";\n                    var userAuthState = wminst.Util.decodeBase64(userLoginState);\n                    if(userAuthState && userAuthState.indexOf("cnn.authn") > -1) {              \n                        userAuthObj.user_account_status = "account verified";\n                    } else {                \n                        userAuthObj.user_account_status = "account not verified";\n                    }\n                } else {\n                    userAuthObj.user_registered_status = "anonymous";\n                    userAuthObj.user_login_status = "not logged in";\n                    userAuthObj.user_account_status = "account not verified";\n                }\n        \n            \n            } catch(e){}\n            return userAuthObj;\n        },\n        getUserRegisteredStatus: function(){ //prop51,eVar51\n            var rval = "";\n            try {\n                rval = wminst.Util.getCNNUserAuthState();\n                return rval.user_registered_status;\n            }catch(e){}\n            return rval;\n        },\n       getUserAccountStatus: function(){ //prop74,eVar74\n            var rval = "";\n            try {\n                rval = wminst.Util.getCNNUserAuthState();\n                return rval.user_account_status;\n            }catch(e){}\n            return rval;\n        },\n        getUserLoginStatus: function(){ //eVar89\n            var rval = "";\n            try {\n                rval = wminst.Util.getCNNUserAuthState();\n                return rval.user_login_status;\n            }catch(e){}\n            return rval;\n        },\n        getCNNOrientation: function() { //prop56,eVar56 - business.cnn.page.orientation\n            rval = "no value set";\n            try {\n                var x = 0;\n                if (self.innerHeight) {\n                    x = self.innerWidth;\n                } else if (document.documentElement && document.documentElement.clientHeight) {\n                    x = document.documentElement.clientWidth;\n                } else if (document.body) {\n                    x = document.body.clientWidth;\n                }\n\n                var y = 0;\n                if (self.innerHeight) {\n                    y = self.innerHeight;\n                } else if (document.documentElement && document.documentElement.clientHeight) {\n                    y = document.documentElement.clientHeight;\n                } else if (document.body) {\n                    y = document.body.clientHeight;\n                }\n\n                rval = (y > x) ? "portrait" : "landscape";\n            } catch (e) {}\n            return rval;\n        },\n        getCNNUIEngagement: function() { //prop64,eVar64 - business.cnn.video.ui_engagement\n            return window.cna_omniture.friendly_name;\n        },\n        getCNNTopic: function() {\n            let topicObj = (window.CNN || {}).cep_topics || {};\n            let topicKeys = ["cep_brsf", "cep_iabt", "cep_sent", "cep_tags"];\n            let topicVals = [];\n            for (let [key, val] of Object.entries(topicObj)) {\n                if (topicKeys.includes(key)) {\n                    topicVals = topicVals.concat(val);\n                }\n            }\n            let topicStr = (window.cna_omniture || {}).topic || "";\n            return (topicVals.toString() || topicStr).toLowerCase();\n        },\n        getCEPTopisForVideo: function(data) {\n            let topicObj = (data || {}).cepTopics || {};\n            let topicKeys = Object.keys(topicObj);\n            return topicKeys.toString().toLowerCase();\n        },\n        getCNNBrandingPartner: function() { //prop11,eVar11 - business.cnn.page.branding_content_partner\n            return window.cna_omniture.branding_partner || \'\';\n        },\n        getCNNBrandingAd: function(data) { //prop14,eVar14 - business.cnn.page.branding_ad\n          var rval = "";\n          try{\n            if(typeof data !== \'undefined\' && data.branding_social !== \'undefined\' && data.branding_social !== ""){\n              rval = data.branding_social;\n            }\n          }catch(ex){}\n          try{\n          if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) {\n                var pathName = window.location.pathname;\n                if (pathName.indexOf("/v1/amp") != -1) {\n                    rval = "google amp"; //google amp\n                }\n            } else if (hostName.indexOf("arabic.cnn.com") != -1 || hostName.indexOf("dev-fe.arabic.cnn.io") != -1) {\n                var queryParam = wminst.Util.getQuery("appName");\n                if (queryParam == "googleamp") {\n                    rval = "google amp"; //google amp\n                }\n            }else if (window.cna_omniture && window.cna_omniture.fbia && window.cna_omniture.fbia == true) {\n                 if(typeof window.cna_omniture.branding_social !== \'undefined\' && window.cna_omniture.branding_social !== ""){\n                   rval = window.cna_omniture.branding_social || "";\n                 }\n            }\n          }catch(ex){}\n          return rval;\n        },\n        getCNNCookie: function(name) {\n            var cookie = this.getCookie(name);\n            return cookie;\n        },\n        getCNNKruxID: function() { //eVar36\n            var rval = "";\n            try {\n                rval = localStorage.kxkuid;\n            } catch (err) {}\n            return rval;\n        },\n        getADBPTranslateTemplateType: function(templateTypeCode, lookupType) {\n            var adbpprefix = "adbp:",\n                rval = ["o", "other"];\n            var lookup = {\n                    b: "blog",\n                    g: "game",\n                    it: "interactive",\n                    c: "content",\n                    "in": "index",\n                    err: "error",\n                    e: "ecom",\n                    s: "signup",\n                    v: "video",\n                    sf: "section front",\n                    o: "other"\n                },\n                lookupRev = {\n                    "blog": "b",\n                    "game": "g",\n                    "interactive": "it",\n                    "content": "c",\n                    "index": "in",\n                    "error": "err",\n                    "ecom": "e",\n                    "signup": "s",\n                    "video": "v",\n                    "section front": "sf",\n                    "other": "o"\n                };\n            if (lookup[templateTypeCode] != null) {\n                rval = [templateTypeCode, lookup[templateTypeCode]];\n            }\n            if (lookupRev[templateTypeCode] != null) {\n                rval = [lookupRev[templateTypeCode], templateTypeCode];\n            }\n            rval[1] = adbpprefix + rval[1];\n            if (lookupType == "short") {\n                rval = rval[0];\n            }\n            if (lookupType == "long") {\n                rval = rval[1];\n            }\n            return rval;\n        },\n        getADBPTemplateType: function(defaultString, patterns, matchStrings, bsRules, bsMatchStringIndex) {\n            var apre = "adbp:",\n                bpre = "other:",\n                i = bsMatchStringIndex,\n                rval, adbptype = "o";\n            i = (!i ? 0 : i);\n            var mpt = matchStrings[i],\n                md = patterns,\n                bs = bsRules,\n                t, t2, check;\n            mpt = (!mpt ? "" : mpt.toLowerCase());\n            t2 = (!bs ? null : bs[mpt]);\n            if (t2 != null) {\n                adbptype = t2[0];\n                rval = (adbptype === "o" && t2.length < 2 ? mpt : t2[1]);\n            } else {\n                if (md != null) {\n                    for (m in md) {\n                        t = chkMatch(matchStrings[md[m][0]], md[m], m);\n                        if (t) {\n                            adbptype = t;\n                            break;\n                        }\n                    }\n                }\n            }\n\n            function chkMatch(checkStr, reArray, val) {\n                var i, rval = false,\n                    re;\n                for (i = reArray.length - 1; i > 0; i--) {\n                    re = reArray[i];\n                    rval = rval || (re.exec(checkStr) != null ? true : false);\n                }\n                return (!rval ? null : val);\n            }\n            t2 = adbptype.split(":");\n            if (t2.length == 2) {\n                rval = t2[1];\n                adbptype = t2[0];\n            }\n            var x = this.getADBPTranslateTemplateType(adbptype, "long");\n            return {\n                full: (adbptype === "o" && t2[1] ? bpre + rval : x),\n                small: adbptype\n            };\n        },\n        getADBPURL: function(type, lvl) {\n            var hostname = window.location.hostname.toLowerCase();\n            var pathname = window.location.pathname.toLowerCase();\n            pathname = pathname.replace(/([^\\/]+\\.[^\\/]+$)/, "");\n\n            var rval;\n            switch (type) {\n                case "domain":\n                    hostname = hostname.replace("www.", "");\n                    if (lvl == parseFloat(lvl)) {\n                        var domain_array = hostname.split(".");\n                        var currentPointer = domain_array.length - lvl;\n                        var currentDomainLevel = (currentPointer >= 0 ? domain_array[currentPointer] : "");\n                        rval = currentDomainLevel;\n                    } else {\n                        rval = hostname;\n                    }\n                    break;\n                case "path":\n                    var pathname2 = pathname.substring(1);\n                    var path_array = pathname2.split("/");\n                    if (lvl == parseFloat(lvl) && lvl >= 1) {\n                        var currentPathname = (path_array.length >= lvl ? path_array[lvl - 1] : "");\n                        rval = currentPathname;\n                    } else {\n                        rval = pathname;\n                    }\n                    break;\n                case "hier":\n\n                    hostname = hostname.replace("www.", "");\n                    var path_array = pathname.substring(1).split("/");\n                    var h1 = hostname + "/" + path_array[0];\n                    var h2 = h1;\n                    if (path_array[1]) h2 = h2 + "/" + path_array[1];\n                    rval = [h1, h2];\n                    break;\n                default:\n                    rval = hostname + pathname;\n            }\n            return rval;\n        },\n        getADBPPageNameV1: function(pathname, delimiter) {\n            var s_pageName = "";\n            if (!delimiter) delimiter = ":";\n            var ttbefore = this.getCNNTemplateType("long");\n            if (ttbefore) { //default to "other" if template type is not defined\n                ttbefore = ttbefore.replace(/adbp./, "");\n                var templateTypeSmall = wminst.Util.getADBPTranslateTemplateType(ttbefore, "short");\n            } else {\n                var templateTypeSmall = "o";\n            }\n            var buc_p32 = this.businessName + delimiter + templateTypeSmall;\n            var thirdLevelDomain = wminst.Util.getADBPURL("domain", 3);\n            var fullDomain = wminst.Util.getADBPURL("domain");\n            var lastTwoDomain = /(\\.\\w+\\.\\w+)$/.exec(fullDomain);\n            if (lastTwoDomain) thirdLevelDomain = fullDomain.replace(lastTwoDomain[0], "");\n            //if (!pathname) pathname = wminst.Util.gADBPURL("path");\n            if (!pathname) {\n                var p = window.location.pathname.toLowerCase();\n                var a = p.split(\'/\');\n                var l = a.length;\n                var r = /^index./;\n                pathname = (r.test(a[(l - 1)])) ? p.replace(/([^\\/]+\\.[^\\/]+$)/, "") : p;\n                r = /([^\\/]+\\.[^\\/]+$)/;\n                if (!r.test(pathname)) {\n                    l = pathname.length;\n                    if (pathname.charAt(l - 1) !== "/") {\n                        pathname = pathname + "/";\n                    }\n                }\n            }\n            var pageNameLen, r_len;\n            if (thirdLevelDomain == "") {\n                pageNameLen = buc_p32.length + 1 + pathname.length;\n                if (pageNameLen <= 100) {\n                    s_pageName = buc_p32 + delimiter + pathname;\n                } else {\n                    r_len = pageNameLen - 100;\n                    s_pageName = buc_p32 + delimiter + pathname.substring(r_len);\n                }\n            } else {\n                pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;\n                if (pageNameLen <= 100) {\n                    s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;\n                } else {\n                    if (thirdLevelDomain.length <= 5) {\n                        r_len = pageNameLen - 100;\n                        s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len);\n                    } else {\n                        thirdLevelDomain = thirdLevelDomain.substring(0, 5);\n                        pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;\n                        if (pageNameLen <= 100) {\n                            s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;\n                        } else {\n                            r_len = pageNameLen - 100;\n                            s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len);\n                        }\n                    }\n                }\n            }\n            return s_pageName;\n        },\n        getADBPPageName: function(pathname) { //pageName,eVar26 - page.name\n            var rval = pathname || window.location.pathname;\n            rval = rval.toLowerCase();\n            rval = rval.replace(/^.*\\/\\/[^\\/]+/, "");   //remove domain\n            rval = rval.replace("/index.html", "/");    //remove index.html\n            rval = rval.replace(/h_[a-z0-9]+\\/?$/, ""); //remove last folder ID\n            rval = rval.replace(/\\/?$/, "/");           //add trailing slash\n            if (rval === "/") rval += "homepage";\n            return rval;\n        },\n        getCNNPlayerState: function(video) { //eVar67 player State\n            var screenState = video.screen_state || "nvs";\n            var audioState = video.audio_state || "nvs";\n            var playerState = "";\n            try {\n                if (screenState == "nvs" && CNN && CNN.omniture && CNN.omniture.screen_state) {\n                    screenState = CNN.omniture.screen_state;\n                }\n                if (audioState == "nvs") {\n                    if (video.muted === true) {\n                        audioState = "muted";\n                    } else if (video.muted === false) {\n                        audioState = "audio on";\n                    }\n                }\n                playerState = screenState + "|" + audioState;\n                playerState = playerState.toLowerCase();\n            } catch (e) {}\n            return playerState;\n        },\n        getADBPRepeatVisitorByPeriod: function(period, domain) {\n            var e = new Date(),\n                now = new Date(),\n                cp = "rvis" + period,\n                t = parseInt(this.cookie.get(cp), 10),\n                vnum = (t != NaN && t > 0 ? t + 1 : 1),\n                sesonly = this.cookie.get("s" + cp);\n            e.setHours(0);\n            e.setMinutes(0);\n            if (period === "w") {\n                e.setDate(now.getDate() + 7 - now.getDay());\n            } else if (period === "y") {\n                e.setYear(now.getYear() + 1);\n                e.setMonth(0);\n                e.setDate(1);\n            } else { // Assume month\n                e.setMonth(now.getMonth() + 1);\n                e.setDate(1);\n            }\n            if (sesonly.length == 0) {\n                this.cookie.set(cp, vnum, e, null, domain);\n                sesonly = (vnum > 1 ? "repeat" : "new") + ":" + vnum;\n                this.cookie.set("s" + cp, sesonly, null, null, domain);\n            }\n            return sesonly;\n        },\n        getADBPVideoTimeSpent: function(event) { //calculate video time spent in sec\n            if (event && event == "start") {\n                window.video_start_time = new Date().getTime(); //sets video start times\n                window.video_progress = new Date().getTime(); //sets video progress start times\n            } else if (event && event == "progress") {\n                if (window.video_progress > 0) {\n                    var timeSpent = (new Date().getTime() - window.video_progress) / 1000;\n                    window.video_progress = new Date().getTime(); //set new start time\n                    return Math.round(timeSpent);\n                }\n            } else if (event && event == "pause") {\n                if (window.video_start_time > 0) {\n                    if (window.video_pause[0] == 0) { //paused\n                        var playedTime = new Date().getTime() - window.video_start_time + window.video_pause[1];\n                        window.video_pause = [1, playedTime];\n                    } else { //restarted\n                        window.video_pause[0] = 0;\n                        window.video_start_time = new Date().getTime();\n                    }\n                }\n            } else if (event && event == "complete") {\n                if (window.video_start_time > 0) {\n                    var timeSpent = (new Date().getTime() - window.video_start_time + window.video_pause[1]) / 1000;\n                    window.video_start_time = 0; //reset value\n                    window.video_pause = [0, 0]; //reset value\n                    window.video_progress = 0; //reset value\n                    return Math.round(timeSpent);\n                }\n            } else {\n                return false;\n            }\n        },\n        getIreportgetMetaCompatible: function(mn) {\n            var m = document.getElementsByTagName(\'meta\');\n            for (var i in m) {\n                if (m[i].content == mn) {\n                    return m[i].content;\n                }\n            }\n        },\n    }\n}();\nwminst.Util.loadCustomVariables();',
language:"javascript"},timeout:5e3,delayNext:!0},{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'// JSMD Adapter to provide backward compatibility\nwindow._jsmd = window._jsmd || {\n  init: function() {\n    this.mdata = {\n      business: {\n        cnn: {\n          page: {\n            author: wminst.Util.getCNNAuthor(),\n            branding_content_partner: wminst.Util.getCNNBrandingPartner(),\n            section: [wminst.Util.getCNNSection(0), wminst.Util.getCNNSection(1)]\n          }\n        }\n      }\n    };\n    return this;\n  },\n  send: function() {\n  },\n  trackMetrics: function(action, data, map) {\n    setTimeout(function() {\n      console.log("jsmd adapter trackMetrics action =" + action + " window.trackMetrics = " + typeof window.trackMetrics);\n      window.trackMetrics(action, data);\n    }, 100);\n  },\n  plugin: {\n    gQuery: function(name) {\n      return wminst.Util.getQuery(name);\n    },\n    gCNNVideoCollection: function() {\n      return wminst.getCNNMediaCollection();\n    }\n  }\n};\n',language:"javascript"},timeout:2e3,delayNext:!0},{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'/*! A simple PubSub in JavaScript - v1.0.0 - 2014-01-12\n* https://github.com/bdadam/PubSub\n* The MIT License (MIT)\n* Copyright (c) 2013 Adam Beres-Deak */\n!function(){"use strict";function a(a){if("[object String]"!==Object.prototype.toString.call(a))throw new TypeError("Event is not a string.")}function b(a){if("function"!=typeof a)throw new TypeError("Handler is not a function")}var c={},d={};d.publish=d.pub=function(b){if(a(b),c[b])for(var d={event:b,args:Array.prototype.slice.call(arguments,1)},e=0,f=c[b].length;f>e;e++)c[b][e].apply(d,d.args)},d.subscribe=d.sub=function(d,e){a(d),b(e),(c[d]=c[d]||[]).push(e)},d.unsubscribe=d.unsub=function(){var d,e,f,g,h=Array.prototype.slice.call(arguments);if(h.length>=2){if(d=h[0],e=h[1],a(d),b(e),!c[d])return;for(f=0,g=c[d].length;g>f;f++)c[d][f]===e&&c[d].splice(f,1)}else{e=h[0],b(e);for(d in c)for(f=0,g=c[d].length;g>f;f++)c[d][f]===e&&c[d].splice(f,1)}},"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof module&&module.exports?module.exports=d:window.PubSub=d}();\n\nwindow.trackMetrics = function (action, data) {\n    var realaction = action,\n        realdata = data;\n    if (typeof (action) == "object") {\n        if (action.type != null) {\n            realaction = action.type;\n        }\n        if (action.action != null) {\n            realaction = action.action;\n        }\n        if (action.data != null) {\n            realdata = action.data;\n        }\n    }\n    if (typeof (realdata) == "object") {\n        if (realdata.data != null) {\n            realdata = realdata.data;\n        }\n    }\n    wminst.Util.log("trackMetrics action =", realaction, "data =", realdata);\n    PubSub.publish(realaction, realdata);\n\n    //Handling ComScore Events here\n    window.trackCSMetrics(realaction, realdata);\n};\n\nwindow.trackCSMetrics = function (realaction, realdata) {\n    if ((window.ns_ || {}).StreamingTag) {\n        publishCSEvents(realaction, realdata);\n    } else {\n        wminst.Util.log("trackCSMetrics load comscore streamsense");\n        wminst.Util.loadScript("//s.cdn.turner.com/analytics/comscore/streamsense.5.2.0.160629.min.js", function () {\n            publishCSEvents(realaction, realdata);\n        });\n    }\n\n    function publishCSEvents(realaction, realdata) {\n        try {\n            if (["video-preroll", "cnnvideo-preroll", "cnnvideo-adcreative-start"].includes(realaction)) {\n                PubSub.publish("cs_video-preroll", realdata);\n            } else if (["video-adcomplete", "video-midroll-complete", "cnnvideo-adcomplete", "cnnvideo-midroll-complete"].includes(realaction)) {\n                PubSub.publish("cs_ad-complete", realdata);\n            } else if (["video-start", "video-autostart", "video-live", "cnnvideo-start", "cnnvideo-autostart", "cnnvideo-live", "cnnvideo-autosegment", "cnnvideo-autoepisode", "cnnvideo-episode"].includes(realaction)) {\n                PubSub.publish("cs_video-play", realdata);\n            } else if ((["video-pause", "cnnvideo-pause"].includes(realaction)) && (realdata.video || {}).paused == true) {\n                PubSub.publish("cs_video-pause", realdata);\n            } else if ((["video-pause", "cnnvideo-pause"].includes(realaction)) && (realdata.video || {}).paused == false) {\n                PubSub.publish("cs_video-resume", realdata);\n            } else if (["video-complete", "cnnvideo-complete"].includes(realaction)) {\n                PubSub.publish("cs_video-complete", realdata);\n            }\n        } catch (e) {}\n    }\n}\n',language:"javascript"},timeout:2e3,delayNext:!0},{modulePath:"core/src/lib/actions/customCode.js",settings:{source:"var mediaPlayer = new Array;\nwminst.getCNNMediaCollection = function() {\n    return {\n\n        get: function(i, p) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    return vplayer[j][p];\n                }\n            }\n        },\n        set: function(i, p, v) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    vplayer[j][p] = v;\n                    return true;\n                }\n            }\n        },\n        toggle: function(i, p) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    var v = vplayer[j][p];\n                    vplayer[j][p] = !v;\n                    break;\n                }\n            }\n        },\n        start: function(i, t) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) { //if same video player object exists, remove it\n                if (vplayer[j].containerId == i) {\n                    vplayer.splice(j, 1);\n                }\n            }\n            vplayer.push(new objVplayer(i, t));\n\n            function objVplayer(containerId, videoTitle) {\n                this.containerId = containerId;\n\t\t\t\tthis.videoTitle = videoTitle;\n\t\t\t\tthis.vidStarted = false;\n\t\t\t\tthis.audStarted = false;\n\t\t\t\tthis.hasScrubbed = false;\n\t\t\t\tthis.isAuto = false;\n\t\t\t\tthis.isTen = false;\n\t\t\t\tthis.isTwentyFive = false;\n\t\t\t\tthis.isHalf = false;\n\t\t\t\tthis.isSeventyFive = false;\n\t\t\t\tthis.isBuffering = false;\n\t\t\t\tthis.isPaused = false;\n\t\t\t\tthis.isMidrollStarted = false;\n\t\t\t\tthis.adNumber = 0;\n\t\t\t\tthis.startTime = (new Date).getTime();\n\t\t\t\tthis.currentTime = (new Date).getTime();\n\t\t\t\tthis.timeSpent = 0;\n            }\n        },\n\n        pause: function(i) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    var p = vplayer[j].isPaused;\n                    var b = vplayer[j].isBuffering;\n                    if (!b) { //not buffering\n                        if (p) { //pause -> unpause\n                            vplayer[j].startTime = new Date().getTime();\n                        } else { //unpause -> pause\n                            var playedTime = new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent; //calculate time spent\n                            vplayer[j].timeSpent = playedTime;\n                        }\n                    }\n                    vplayer[j].isPaused = !p;\n                    break;\n                }\n            }\n        },\n        buffer: function(i) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    var p = vplayer[j].isPaused;\n                    var b = vplayer[j].isBuffering;\n                    if (!p) { //not paused\n                        if (b) { //buffer -> unbuffer\n                            vplayer[j].startTime = new Date().getTime();\n                        } else { //unbuffer -> buffer\n                            var playedTime = new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent; //calculate time spent\n                            vplayer[j].timeSpent = playedTime;\n                        }\n                    }\n                    vplayer[j].isBuffering = !b;\n                    break;\n                }\n            }\n        },\n        progress: function(i) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    var playedTime = (new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent) / 1000;\n                    vplayer[j].startTime = new Date().getTime();\n                    vplayer[j].timeSpent = 0;\n                    return Math.round(playedTime);\n                }\n            }\n        },\n        complete: function(i) {\n            var vplayer = mediaPlayer\n            for (var j = vplayer.length - 1; j >= 0; j--) {\n                if (vplayer[j].containerId == i) {\n                    var playedTime = (new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent) / 1000;\n                    return Math.round(playedTime);\n                }\n            }\n        }\n    }\n};\nwminst.capCNNTimeSpent = function(timeSpent, trt) {\n    try { //check video time spent value\n        var timeLimit = 60; //default time limit in sec\n        if (trt && parseFloat(trt) > 0) {\n            timeLimit = parseFloat(trt) * 2;\n        }\n        if (timeSpent > timeLimit) {\n            timeSpent = timeLimit;\n        } else if (timeSpent < 0) {\n            timeSpent = 0;\n        }\n    } catch (err) {\n        timeSpent = 0;\n    }\n    return timeSpent;\n};",language:"javascript"},timeout:2e3,delayNext:!0}]},{id:"RL5aa49af33170452b95d4e8f728ae7653",name:"Prism Manager",events:[{modulePath:"core/src/lib/events/pageBottom.js",settings:{},ruleOrder:50}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isUSRegion()}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'var psmMgrLoader = {\n    loadScript: function(src, callback) {\n        var e = document.createElement(\'script\');\n        e.type = \'text/javascript\';\n        e.async = true;\n        e.src = src;\n        if (callback) {\n            e.addEventListener(\'load\', callback);\n        }\n        var n = document.getElementsByTagName(\'script\')[0];\n        n.parentNode.insertBefore(e, n);\n    },\n\n    loadPsmMgr: function() {\n        var psmMgrEnv = _satellite.environment.stage == "production" ? "release" : "pre";\n\n        try {\n            this.loadScript("https://lightning.cnn.com/cdp/psm/brands/cnnarabic/web/" + psmMgrEnv + "/psm.min.js", this.initPsm );\n        } catch (e) {\n            console.log("psm mgr did not load", e)   \n        }\n\n    }\n}\n\npsmMgrLoader.loadPsmMgr();',language:"javascript"},timeout:2e3,delayNext:!0}]},{id:"RL798bcb6985d04453a5578aa182da5783",name:"comScore Page Tracking - All Pages",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:4}],conditions:[],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'wminst.comScorePageBeacon = function() {\n\t\tvar c_id = "6035748";\n\t\tvar cs_ucfr = wminst.Util.isTagConsented("comscore") ? "1" : "0";\n\t\tvar _comscore = window._comscore = _comscore || [];\n\t\t_comscore.push({ c1: "2", c2: c_id, cs_ucfr: cs_ucfr });\n\t\ttry {\n\t\t\tvar protocol = document.location.protocol == "https:" ? "https://sb" : "http://b";\n\t\t\tvar src = protocol + ".scorecardresearch.com/beacon.js";\n\t\t\tvar mySrc = document.createElement(\'script\');\n\t\t\tmySrc.setAttribute(\'src\',src);\n\t\t\tdocument.head.appendChild(mySrc);\n\t\t} catch (e) {}\n};\nif (!wminst.Util.isDynamicPage() && !wminst.Util.isFavePage() && !wminst.Util.inIFrame()) { \n  wminst.comScorePageBeacon();\n}\n\nPubSub.subscribe("dynamic-page", function(data) {\nwminst.comScorePageBeacon();\n});',language:"javascript"},timeout:2e3,delayNext:!0}]},{id:"RL8bfde38649794d249666f67cde4eb2b2",name:"Adobe Analytics - Base Code - All Pages",events:[{modulePath:"core/src/lib/events/domReady.js",settings:{},ruleOrder:2}],conditions:[],actions:[{modulePath:"adobe-analytics/src/lib/actions/setVariables.js",settings:{customSetup:{source:function(e,t){var n={};n[window.adobe.OptInCategories.ANALYTICS]=!1,n[window.adobe.OptInCategories.ECID]=!1;var r={};r[window.adobe.OptInCategories.ANALYTICS]=!1,r[window.adobe.OptInCategories.ECID]=!1;var i=wminst.Util.isTagConsented("adobe");t.visitor=Visitor.getInstance("7FF852E2556756057F000101@AdobeOrg",{trackingServer:"metrics.cnn.com",trackingServerSecure:"smetrics.cnn.com",doesOptInApply:!0,preOptInApprovals:n,previousPermissions:r,isOptInStorageEnabled:i}),t.trackingServer="metrics.cnn.com",t.trackingServerSecure="smetrics.cnn.com",t.visitorNamespace="cnn",t.currencyCode="USD",t.trackDownloadLinks=!0,t.trackExternalLinks=!0,t.trackInlineStats=!0,t.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls",t.linkInternalFilters="javascript:,cnn",t.linkLeaveQueryString=!1,t.linkTrackVars="None",t.linkTrackEvents="None",t.charSet="UTF-8",t.usePlugins=!0,t.doPlugins=function(e){e.campaign||(e.campaign=e.Util.getQueryParam("cid")),e.eVar43||(e.eVar43=e.Util.getQueryParam("iid")),e.pageURL=window.location.href,e.prop43||(e.prop50=""),e.pageName&&(e.eVar26="D=pageName"),e.channel&&(e.eVar27="D=ch"),e.server&&(e.eVar29="D=server"),e.prop1&&(e.eVar1="D=c1"),e.prop2&&(e.eVar2="D=c2"),e.prop4&&(e.eVar4="D=c4"),e.prop5&&(e.eVar5="D=c5"),e.prop6&&(e.eVar6="D=c6"),e.prop8&&(e.eVar8="D=c8"),e.prop11&&(e.eVar11="D=c11"),e.prop10&&(e.eVar10="D=c10"),e.prop13&&(e.eVar13="D=c13"),e.prop14&&(e.eVar14="D=c14"),e.prop15&&(e.eVar15="D=c15"),e.prop16&&(e.eVar16="D=c16"),e.prop23&&(e.eVar23="D=c23"),e.prop28&&(e.eVar28="D=c28"),e.prop29&&(e.eVar41="D=c29"),e.prop30&&(e.eVar30="D=c30"),e.prop32&&(e.eVar32="D=c32"),e.prop33&&(e.eVar33="D=c33"),e.prop35&&(e.eVar35="D=c35"),e.prop37&&(e.eVar37="D=c37"),e.prop39&&(e.eVar39="D=c39"),e.prop46&&(e.eVar46="D=c46"),e.prop47&&(e.eVar47="D=c47"),e.prop49&&(e.eVar49="D=c49"),e.prop52&&(e.eVar52="D=c52"),e.prop54&&(e.eVar54="D=c54"),e.prop55&&(e.eVar55="D=c55"),e.prop56&&(e.eVar56="D=c56"),e.prop57&&(e.eVar57="D=c57"),e.prop59&&(e.eVar59="D=c59"),e.prop64&&(e.eVar64="D=c64"),e.prop69&&(e.eVar69="D=c69"),e.prop70&&(e.eVar70="D=c70"),e.prop75&&(e.eVar75="D=c75");try{window.optimizely=window.optimizely||[],window.optimizely.push(["activateSiteCatalyst",{sVariable:e}])}catch(e){}try{optimizely.get("custom/adobeIntegrator")&&window.optimizely.get("custom/adobeIntegrator").assignCampaigns(e)}catch(e){}},wminst.Util.isTagConsented("adobe")?window.adobe.optIn.approve(["aa","ecid"],!0):window.adobe.optIn.deny(["aa","ecid"],!0),window.adobe.optIn.complete(),t.getPreviousValue=new Function("v","c","el","var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"),t.getTimeParting=new Function("h","z","var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"),t.apl=new Function("L","v","d","u","var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"),t.manageVars=new Function("c","l","f","var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.split(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(la[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0);return true;}else{return false;}"),t.clearVars=new Function("t","var s=this;s[t]='';"),t.lowercaseVars=new Function("t","var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].indexOf('D=')!=0){s[t]=s[t].toLowerCase();}}"),t.pt=function(e,t,n,r){for(var i,a,o=this,s=e,c=0;s;){if(i=(i=s.indexOf(t))<0?s.length:i,s=s.substring(0,i),a=o[n](s,r))return a;c+=i+t.length,s=e.substring(c,e.length),s=c<e.length?s:""}return""},t.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a")}},trackerProperties:{}},timeout:2e3,delayNext:!0}]},{id:"RL98caa99e3ca04d61a308b49d5aed6655",name:"Adobe Analytics - Page Tracking - All Pages",events:[{modulePath:"core/src/lib/events/domReady.js",settings:{},ruleOrder:3}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isTagConsented("adobe")}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{global:!0,source:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/RC9c9c83806ac4420fbbf710f85ea2c5d9-source.min.js",language:"javascript",isExternal:!0},timeout:2e3,delayNext:!0}]},{id:"RL9e6c280ca8014aa585f02e1281d962f3",name:"Nielsen Page View - All Pages",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:3}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isTagConsented("nielsen")}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'wminst.nielsenPageBeacon = function() {\n    var ci, si, rp, random;\n    ci = "us-204044h";\n    si = escape(window.location.href);\n    rp = escape(document.referrer);\n    random = +(new Date());\n    wminst.Util.sendImagePixel("//secure-us.imrworldwide.com/cgi-bin/m?ci=" + ci + "&cg=0&cc=1&si=" + si + "&rp=" + rp +"&ts=compact&rnd=" + random);\n};\nif (!wminst.Util.isRefreshPage() && !wminst.Util.inIFrame()) {\n  wminst.nielsenPageBeacon();\n}\n\nPubSub.subscribe("dynamic-page", function(data) {\nwminst.nielsenPageBeacon();\n});',language:"javascript"},timeout:2e3,delayNext:!0}]},{id:"RLbb8fa323fe8444b393fe29eb3c9fc20f",name:"Zion Message Bus - All Pages",events:[{modulePath:"core/src/lib/events/domReady.js",settings:{},ruleOrder:4}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isTagConsented("zion")}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:"https://lightning.cnn.com/launch/7be62238e4c3/a8f388df1f30/7e82ce680f36/RC8bafcf46df50490fa4b3143e9aa41973-source.min.js",language:"javascript",isExternal:!0},timeout:2e3,delayNext:!0}]},{id:"RLd1c4c1e0bb37488d9bec684c9ed6ecaa",name:"Nielsen VideoCensus - Non Lightweight Pages",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:4}],conditions:[{modulePath:"core/src/lib/conditions/customCode.js",settings:{source:function(){return wminst.Util.isTagConsented("nielsen")}},timeout:2e3}],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'PubSub.subscribe("video-start", function(data) {\n    wminst.nielsenVideoBeacon("dav0", data);\n});\n\nPubSub.subscribe("video-autostart", function(data) {\n    wminst.nielsenVideoBeacon("dav0", data);\n});\n\nPubSub.subscribe("cnnvideo-start", function(data) {\n    wminst.nielsenVideoBeacon("dav0", data);\n});\n\nPubSub.subscribe("cnnvideo-autostart", function(data) {\n    wminst.nielsenVideoBeacon("dav0", data);\n});\nPubSub.subscribe("cnnvideo-complete", function(data) {\n    wminst.nielsenVideoBeacon("dav2", data);\n});\n\nPubSub.subscribe("video-complete", function(data) {\n    wminst.nielsenVideoBeacon("dav2", data);\n});\nwminst.nielsenVideoBeacon = function(state, data, cg) {\n\tvar v = wminst.Util.getVideoMetadata(data);\n    var ci, c6, tl, random, url;\n    ci = "us-100120";\n    c6 = (v.category && (v.category == "cnnmoney" || v.category == "business")) ? "vc,c02" : "vc,b01";\n    tl = state + "-" + v.id;\n    random = +(new Date());\n    url = "//secure-us.imrworldwide.com/cgi-bin/m?ci=" + ci + "&c6=" + c6 + "&cc=1&tl=" + tl + "&rnd=" + random;\n    wminst.Util.sendImagePixel(url);\n};',language:"javascript"},timeout:2e3,delayNext:!0}]}]};var _satellite=function(){"use strict";function e(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function t(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}function n(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}function r(e){var t={exports:{}};return e(t,t.exports),t.exports}function i(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function a(e){return Boolean(e&&void 0!==e.length)}function o(){}function s(e,t){return function(){e.apply(t,arguments)}}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],m(e,this)}function l(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void d(t.promise,e)}u(t.promise,r)}else(1===e._state?u:d)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void m(s(n,t),e)}e._state=1,e._value=t,f(e)}catch(t){d(e,t)}}function d(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)l(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function m(e,t){var n=!1;try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,d(t,e))}))}catch(e){if(n)return;n=!0,d(t,e)}}function g(e){return!0===Ue(e)&&"[object Object]"===Object.prototype.toString.call(e)}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function v(e){return"string"==typeof e&&-1!==e.indexOf("[")&&-1!==e.indexOf("]")}function y(e){return e.substr(0,e.indexOf("["))}function b(e,t,n){if(e.length&&Be(t)){var r=e[0];if(1!==e.length){var i=e.slice(1);if(!v(r))return b(i,t[r],n);var a=t[r=y(r)];Array.isArray(a)&&a.forEach((function(e){return b(i,e,n)}))}else t.hasOwnProperty(r)&&"string"==typeof t[r]&&(t[r]=n(t[r]))}}if(window.atob){var _=document,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,I=t()?Object.assign:function(t){for(var n,r,i=e(t),a=1;a<arguments.length;a++){for(var o in n=Object(arguments[a]))C.call(n,o)&&(i[o]=n[o]);if(S){r=S(n);for(var s=0;s<r.length;s++)w.call(n,r[s])&&(i[r[s]]=n[r[s]])}}return i},T=I,D=window,A=function(e,t,n,r){var i,a=Boolean(t&&Array.isArray(n)),o=Boolean(a&&e),s=document.createElement("a");if(a){var c=function(){var e=new Error("Unable to find the Library Embed Code for Dynamic Host Resolution.");throw e.code="dynamic_host_resolver_constructor_error",e};if(e&&(/^((https?:)?\/\/).+/.test(e)||c(),/^\/\/.+/.test(e)?s.href=D.location.protocol+e:s.href=e),s.hostname||c(),-1===n.indexOf(s.hostname)){var l=new Error("This library is not authorized for this domain. Please contact your CSM for more information.");throw l.code="dynamic_host_not_allowed",l}}var u=function(){if(null!=i)return i;if(o){var e=s.host;/:80$/.test(e)?e=e.replace(":80",""):/:80\/$/.test(e)?e=e.replace(":80/",""):/:443$/.test(e)?e=e.replace(":443",""):/:443\/$/.test(e)&&(e=e.replace(":443/","")),i=s.protocol+"//"+e}else i="";return i},d=function(e){return o&&"string"==typeof e?[u(),"/"===e.charAt(0)?e.slice(1):e].join("/"):e},f={getTurbineHost:u,decorateWithDynamicHost:d,get isDynamicEnforced(){return a}};return D&&r.onDebugChanged((function(e){e?D.dynamicHostResolver=f:delete D.dynamicHostResolver})),f},k=function(e){var t=[];return e.forEach((function(e){e.events&&e.events.forEach((function(n){t.push({rule:e,event:n})}))})),t.sort((function(e,t){return e.event.ruleOrder-t.event.ruleOrder}))},O="debug",E=function(e,t){var n=function(){return"true"===e.getItem(O)},r=function(t){e.setItem(O,t)},i=[],a=function(e){i.push(e)};return t.outputEnabled=n(),{onDebugChanged:a,getDebugEnabled:n,setDebugEnabled:function(e){n()!==e&&(r(e),t.outputEnabled=e,i.forEach((function(t){t(e)})))}}},M="Module did not export a function.",P=function(e,t,n){return function(r,i,a){a=a||[];var o=e.getModuleExports(r.modulePath);if("function"!=typeof o)throw new Error(M);var s=e.getModuleDefinition(r.modulePath),c=r.settings||{};!r.hasTransformedFilePaths&&s.filePaths&&(n(c,s.filePaths,r.modulePath),r.hasTransformedFilePaths=!0);var l=t(c,i);return o.bind(null,l).apply(null,a)}},N=function(e){return"string"==typeof e?e.replace(/\s+/g," ").trim():e},L={LOG:"log",INFO:"info",DEBUG:"debug",WARN:"warn",ERROR:"error"},x="\ud83d\ude80",j=10===parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1])?"[Launch]":x,R=!1,V=function(e){if(R&&window.console){var t=Array.prototype.slice.call(arguments,1);t.unshift(j),e!==L.DEBUG||window.console[e]||(e=L.INFO),window.console[e].apply(window.console,t)}},F=V.bind(null,L.LOG),U=V.bind(null,L.INFO),B=V.bind(null,L.DEBUG),H=V.bind(null,L.WARN),G=V.bind(null,L.ERROR),q=function(){var e=R;R=!0,V.apply(null,Array.prototype.concat(L.WARN,Array.prototype.slice.call(arguments))),e||(R=!1)},W={log:F,info:U,debug:B,warn:H,error:G,deprecation:q,get outputEnabled(){return R},set outputEnabled(e){R=e},createPrefixedLogger:function(e){var t="["+e+"]";return{log:F.bind(null,t),info:U.bind(null,t),debug:B.bind(null,t),warn:H.bind(null,t),error:G.bind(null,t)}}},Y="com.adobe.reactor.",z=function(e,t){var n=Y+(t||"");return{getItem:function(t){try{return D[e].getItem(n+t)}catch(e){return null}},setItem:function(t,r){try{return D[e].setItem(n+t,r),!0}catch(e){return!1}}}},$="dataElements.",Q=z("sessionStorage",$),J=z("localStorage",$),K={PAGEVIEW:"pageview",SESSION:"session",VISITOR:"visitor"},X={},Z=function(e){var t;try{t=JSON.stringify(e)}catch(e){}return t},ee={setValue:function(e,t,n){var r;switch(t){case K.PAGEVIEW:return void(X[e]=n);case K.SESSION:return void((r=Z(n))&&Q.setItem(e,r));case K.VISITOR:return void((r=Z(n))&&J.setItem(e,r))}},getValue:function(e,t){var n;switch(t){case K.PAGEVIEW:return X.hasOwnProperty(e)?X[e]:null;case K.SESSION:return null===(n=Q.getItem(e))?n:JSON.parse(n);case K.VISITOR:return null===(n=J.getItem(e))?n:JSON.parse(n)}}},te=function(e,t,n,r){return"Failed to execute data element module "+e.modulePath+" for data element "+t+". "+n+(r?"\n"+r:"")},ne=function(e,t,n,r,i){return function(a,o){var s=t(a);if(!s)return r?"":void 0;var c,l,u=s.storageDuration;try{c=e.getModuleExports(s.modulePath),l=e.getModuleDefinition(s.modulePath)}catch(e){return void W.error(te(s,a,e.message,e.stack))}if("function"==typeof c){var d,f=s.settings||{};!s.hasTransformedFilePaths&&l.filePaths&&(i(f,l.filePaths,s.modulePath),s.hasTransformedFilePaths=!0);try{d=c(n(f,o),o)}catch(e){return void W.error(te(s,a,e.message,e.stack))}return u&&(null!=d?ee.setValue(a,u,d):d=ee.getValue(a,u)),null==d&&null!=s.defaultValue&&(d=s.defaultValue),"string"==typeof d&&(s.cleanText&&(d=N(d)),s.forceLowerCase&&(d=d.toLowerCase())),d}W.error(te(s,a,"Module did not export a function."))}},re={text:function(e){return e.textContent},cleanText:function(e){return N(e.textContent)}},ie=function(e,t,n){for(var r,i=e,a=0,o=t.length;a<o;a++){if(null==i)return;var s=t[a];if(n&&"@"===s.charAt(0)){var c=s.slice(1);i=re[c](i)}else if(i.getAttribute&&(r=s.match(/^getAttribute\((.+)\)$/))){var l=r[1];i=i.getAttribute(l)}else i=i[s]}return i},ae=function(e,t,n){return function(r,i){var a;if(t(r))a=n(r,i);else{var o=r.split("."),s=o.shift();"this"===s?i&&(a=ie(i.element,o,!0)):"event"===s?i&&(a=ie(i,o)):"target"===s?i&&(a=ie(i.target,o)):a=ie(e[s],o)}return a}},oe=function(e,t){return function(n){var r=n.split(".")[0];return Boolean(t(n)||"this"===r||"event"===r||"target"===r||e.hasOwnProperty(r))}},se=function(e,t,n){var r={exports:{}};return e.call(r.exports,r,r.exports,t,n),r.exports},ce=function(){var e={},t=function(t){var n=e[t];if(!n)throw new Error("Module "+t+" not found.");return n},n=function(){Object.keys(e).forEach((function(e){try{r(e)}catch(n){var t="Error initializing module "+e+". "+n.message+(n.stack?"\n"+n.stack:"");W.error(t)}}))},r=function(e){var n=t(e);return n.hasOwnProperty("exports")||(n.exports=se(n.definition.script,n.require,n.turbine)),n.exports};return{registerModule:function(t,n,r,i,a){var o={definition:n,extensionName:r,require:i,turbine:a};o.require=i,e[t]=o},hydrateCache:n,getModuleExports:r,getModuleDefinition:function(e){return t(e).definition},getModuleExtensionName:function(e){return t(e).extensionName}}},le=!1,ue=function(e){return function(t,n){var r=e._monitors;r&&(le||(W.warn("The _satellite._monitors API may change at any time and should only be used for debugging."),le=!0),r.forEach((function(e){e[t]&&e[t](n)})))}},de=function(e,t,n){var r,i,a,o,s=[],c=function(r,i,a){if(!e(i))return r;s.push(i);var o=t(i,a);return s.pop(),null==o&&n?"":o};return r=function(e,t){var n=/^%([^%]+)%$/.exec(e);return n?c(e,n[1],t):e.replace(/%(.+?)%/g,(function(e,n){return c(e,n,t)}))},i=function(e,t){for(var n={},r=Object.keys(e),i=0;i<r.length;i++){var a=r[i],s=e[a];n[a]=o(s,t)}return n},a=function(e,t){for(var n=[],r=0,i=e.length;r<i;r++)n.push(o(e[r],t));return n},o=function(e,t){return"string"==typeof e?r(e,t):Array.isArray(e)?a(e,t):"object"==typeof e&&null!==e?i(e,t):e},function(e,t){return s.length>10?(W.error("Data element circular reference detected: "+s.join(" -> ")),e):o(e,t)}},fe=function(e){return function(){if("string"==typeof arguments[0])e[arguments[0]]=arguments[1];else if(arguments[0]){var t=arguments[0];for(var n in t)e[n]=t[n]}}},pe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},me=setTimeout;c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(o);return l(this,new p(e,t,n)),n},c.prototype.finally=i,c.all=function(e){return new c((function(t,n){function r(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){r(e,t)}),n)}i[e]=a,0==--o&&t(i)}catch(e){n(e)}}if(!a(e))return n(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var o=i.length,s=0;s<i.length;s++)r(s,i[s])}))
},c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,n){n(e)}))},c.race=function(e){return new c((function(t,n){if(!a(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,i=e.length;r<i;r++)c.resolve(e[r]).then(t,n)}))},c._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){me(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var ge=n(Object.freeze({__proto__:null,default:c})),he="undefined"!=typeof window&&window.Promise||void 0!==pe&&pe.Promise||ge.default||ge,ve=function(e,t,n){return function(r,i,a,o){return o.then((function(){var o,s=r.delayNext;return new he((function(t,n){var i=e(r,a,[a]);if(!s)return t();var c=r.timeout,l=new he((function(e,t){o=setTimeout((function(){t(new Error("A timeout occurred because the action took longer than "+c/1e3+" seconds to complete. "))}),c)}));he.race([i,l]).then(t,n)})).catch((function(e){return clearTimeout(o),e=t(e),n(r,i,e),he.reject(e)})).then((function(){clearTimeout(o)}))}))}},ye=function(e,t,n,r,i){return function(a,o,s,c){return c.then((function(){var c;return new he((function(t,n){var r=e(a,s,[s]),i=a.timeout,o=new he((function(e,t){c=setTimeout((function(){t(new Error("A timeout occurred because the condition took longer than "+i/1e3+" seconds to complete. "))}),i)}));he.race([r,o]).then(t,n)})).catch((function(e){return clearTimeout(c),e=t(e),r(a,o,e),he.reject(e)})).then((function(e){if(clearTimeout(c),!n(a,e))return i(a,o),he.reject()}))}))}},be=he.resolve(),_e=function(e,t,n){return function(r,i){return r.conditions&&r.conditions.forEach((function(t){be=e(t,r,i,be)})),r.actions&&r.actions.forEach((function(e){be=t(e,r,i,be)})),be=(be=be.then((function(){n(r)}))).catch((function(){}))}},Se=function(e){return Boolean(e&&"object"==typeof e&&"function"==typeof e.then)},Ce=function(e,t,n,r){return function(i,a){var o;if(i.conditions)for(var s=0;s<i.conditions.length;s++){o=i.conditions[s];try{var c=e(o,a,[a]);if(Se(c))throw new Error("Rule component sequencing must be enabled on the property for this condition to function properly.");if(!t(o,c))return n(o,i),!1}catch(e){return r(o,i,e),!1}}return!0}},we=function(e,t){return function(n,r){e(n,r)&&t(n,r)}},Ie=function(e){return function(t){var n=e.getModuleDefinition(t.modulePath);return n&&n.displayName||t.modulePath}},Te=function(e){return function(t){var n=t.rule,r=t.event,i=e.getModuleDefinition(r.modulePath).name;return{$type:e.getModuleExtensionName(r.modulePath)+"."+i,$rule:{id:n.id,name:n.name}}}},De=function(e,t,n,r,i,a){return function(o,s){var c=s.rule,l=s.event;l.settings=l.settings||{};try{var u=i(s);t(l,null,[function(t){var r=n(u,t);o((function(){e(r,c)}))}])}catch(e){a.error(r(l,c,e))}}},Ae=function(e,t,n,r){return function(i,a,o){var s=t(i);n.error(e(s,a.name,o)),r("ruleActionFailed",{rule:a,action:i})}},ke=function(e,t,n,r){return function(i,a,o){var s=t(i);n.error(e(s,a.name,o)),r("ruleConditionFailed",{rule:a,condition:i})}},Oe=function(e,t,n){return function(r,i){var a=e(r);t.log('Condition "'+a+'" for rule "'+i.name+'" was not met.'),n("ruleConditionFailed",{rule:i,condition:r})}},Ee=function(e,t){return function(n){e.log('Rule "'+n.name+'" fired.'),t("ruleCompleted",{rule:n})}},Me=function(e,t,n){return function(r,i){var a;if(r.actions)for(var o=0;o<r.actions.length;o++){a=r.actions[o];try{e(a,i,[i])}catch(e){return void t(a,r,e)}}n(r)}},Pe=function(e,t,n,r){return function(i,a){r("ruleTriggered",{rule:a}),e?n(a,i):t(a,i)}},Ne=function(e,t,n){return'Failed to execute "'+e+'" for "'+t+'" rule. '+n.message+(n.stack?"\n"+n.stack:"")},Le=function(e,t){return t&&!e.negate||!t&&e.negate},xe=[],je=!1,Re=function(e){je?e():xe.push(e)},Ve=function(e,t,n){e(t).forEach((function(e){n(Re,e)})),je=!0,xe.forEach((function(e){e()})),xe=[]},Fe=function(e){if(e||(e=new Error("The extension triggered an error, but no error information was provided.")),!(e instanceof Error)){var t="object"==typeof e?JSON.stringify(e):String(e);e=new Error(t)}return e},Ue=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)},Be=function(e){var t,n;return!1!==g(e)&&("function"==typeof(t=e.constructor)&&(!1!==g(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))},He=function(e,t){return Be(t=t||{})?t=T({},t,e):T(t,e),t.hasOwnProperty("type")||Object.defineProperty(t,"type",{get:function(){return W.deprecation("Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead."),t.$type}}),t},Ge=function(e,t){return function(n,r){var i=e[n];if(i){var a=i.modules;if(a)for(var o=Object.keys(a),s=0;s<o.length;s++){var c=o[s],l=a[c];if(l.shared&&l.name===r)return t.getModuleExports(c)}}}},qe=function(e,t){return function(){return t?e(t):{}}},We=function(e,t,n){return function(r){if(n){var i=r.split(".");i.splice(i.length-1||1,0,"min"),r=i.join(".")}return e(t)+r}},Ye=".js",ze=function(e){return e.substr(0,e.lastIndexOf("/"))},$e=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},Qe=function(e,t){$e(t,Ye)||(t+=Ye);var n=t.split("/"),r=ze(e).split("/");return n.forEach((function(e){e&&"."!==e&&(".."===e?r.length&&r.pop():r.push(e))})),r.join("/")},Je=r((function(e){!function(t){if(e.exports=t(),!!0){var n=window.Cookies,r=window.Cookies=t();r.noConflict=function(){return window.Cookies=n,r}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(r){function i(){}function a(t,n,a){if("undefined"!=typeof document){"number"==typeof(a=e({path:"/"},i.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var o=JSON.stringify(n);/^[\{\[]/.test(o)&&(n=o)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in a)a[c]&&(s+="; "+c,!0!==a[c]&&(s+="="+a[c].split(";")[0]));return document.cookie=t+"="+n+s}}function o(e,n){if("undefined"!=typeof document){for(var i={},a=document.cookie?document.cookie.split("; "):[],o=0;o<a.length;o++){var s=a[o].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(s[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(i[l]=c,e===l)break}catch(e){}}return e?i[e]:i}}return i.set=a,i.get=function(e){return o(e,!1)},i.getJSON=function(e){return o(e,!0)},i.remove=function(t,n){a(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}return n((function(){}))}))})),Ke={get:Je.get,set:Je.set,remove:Je.remove},Xe=function(e,t){return new he((function(n,r){t.onload=function(){n(t)},t.onerror=function(){r(new Error("Failed to load script "+e))}}))},Ze=function(e){var t=document.createElement("script");t.src=e,t.async=!0;var n=Xe(e,t);return document.getElementsByTagName("head")[0].appendChild(t),n},et=function(e,t,n,r){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;var a=/\+/g;e=e.split(t);var o=1e3;r&&"number"==typeof r.maxKeys&&(o=r.maxKeys);var s=e.length;o>0&&s>o&&(s=o);for(var c=0;c<s;++c){var l,u,d,f,p=e[c].replace(a,"%20"),m=p.indexOf(n);m>=0?(l=p.substr(0,m),u=p.substr(m+1)):(l=p,u=""),d=decodeURIComponent(l),f=decodeURIComponent(u),h(i,d)?Array.isArray(i[d])?i[d].push(f):i[d]=[i[d],f]:i[d]=f}return i},tt=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},nt=function(e,t,n,r){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(r){var i=encodeURIComponent(tt(r))+n;return Array.isArray(e[r])?e[r].map((function(e){return i+encodeURIComponent(tt(e))})).join(t):i+encodeURIComponent(tt(e[r]))})).join(t):r?encodeURIComponent(tt(r))+n+encodeURIComponent(tt(e)):""},rt=r((function(e,t){t.decode=t.parse=et,t.encode=t.stringify=nt})),it="@adobe/reactor-",at={cookie:Ke,document:_,"load-script":Ze,"object-assign":T,promise:he,"query-string":{parse:function(e){return"string"==typeof e&&(e=e.trim().replace(/^[?#&]/,"")),rt.parse(e)},stringify:function(e){return rt.stringify(e)}},window:D},ot=function(e){return function(t){if(0===t.indexOf(it)){var n=t.substr(it.length),r=at[n];if(r)return r}if(0===t.indexOf("./")||0===t.indexOf("../"))return e(t);throw new Error('Cannot resolve module "'+t+'".')}},st=function(e,t,n,r,i,a,o){var s=e.extensions,c=e.buildInfo,l=e.environment,u=e.property.settings;if(s){var d=Ge(s,t);Object.keys(s).forEach((function(f){var p=s[f],m=p.settings;Array.isArray(p.filePaths)&&(m=a(m,p.filePaths));var g=qe(r,m);if(p.modules){var h=W.createPrefixedLogger(p.displayName),v=We(o,p.hostedLibFilesBaseUrl,c.minified),y={buildInfo:c,environment:l,property:{name:e.property.name,id:e.property.id},getDataElementValue:i,getExtensionSettings:g,getHostedLibFileUrl:v,getSharedModule:d,logger:h,propertySettings:u,replaceTokens:r,onDebugChanged:n.onDebugChanged,get debugEnabled(){return n.getDebugEnabled()}};Object.keys(p.modules).forEach((function(e){var n=p.modules[e],r=ot((function(n){var r=Qe(e,n);return t.getModuleExports(r)}));t.registerModule(e,n,f,r,y)}))}})),t.hydrateCache()}return t},ct=function(e,t,n,r,i){var a=W.createPrefixedLogger("Custom Script");e.track=function(e){W.log('"'+e+'" does not match any direct call identifiers.')},e.getVisitorId=function(){return null},e.property={name:t.property.name,id:t.property.id},e.company=t.company,e.buildInfo=t.buildInfo,e.environment=t.environment,e.logger=a,e.notify=function(e,t){switch(W.deprecation("_satellite.notify is deprecated. Please use the `_satellite.logger` API."),t){case 3:a.info(e);break;case 4:a.warn(e);break;case 5:a.error(e);break;default:a.log(e)}},e.getVar=r,e.setVar=i,e.setCookie=function(e,t,n){var r="",i={};n&&(r=", { expires: "+n+" }",i.expires=n);var a='_satellite.setCookie is deprecated. Please use _satellite.cookie.set("'+e+'", "'+t+'"'+r+").";W.deprecation(a),Ke.set(e,t,i)},e.readCookie=function(e){return W.deprecation('_satellite.readCookie is deprecated. Please use _satellite.cookie.get("'+e+'").'),Ke.get(e)},e.removeCookie=function(e){W.deprecation('_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("'+e+'").'),Ke.remove(e)},e.cookie=Ke,e.pageBottom=function(){},e.setDebug=n;var o=!1;Object.defineProperty(e,"_container",{get:function(){return o||(W.warn("_satellite._container may change at any time and should only be used for debugging."),o=!0),t}})},lt=function(e,t){return function(n,r,i){return e&&Be(n)&&Object.keys(n).length&&Array.isArray(r)&&r.length?(r.forEach((function(e){Boolean(null!=i&&/^core\/.*actions.*\/customCode\.js$/.test(i))&&"source"===e&&!n.isExternal||b(e.split("."),n,t)})),n):n}},ut=window._satellite;if(ut&&!window.__satelliteLoaded){window.__satelliteLoaded=!0;var dt=ut.container;delete ut.container;var ft=T({},dt.buildInfo);Object.defineProperty(ft,"environment",{get:function(){return W.deprecation("container.buildInfo.environment is deprecated.Please use `container.environment.stage` instead"),dt.environment.stage}}),dt.buildInfo=ft;var pt,mt=E(z("localStorage"),W),gt="";_.currentScript&&_.currentScript.getAttribute("src")&&(gt=_.currentScript.getAttribute("src"));try{pt=A(gt,Boolean(dt.company.dynamicCdnEnabled),dt.company.cdnAllowList,mt)}catch(e){throw W.warn("Please review the following error:"),e}var ht,vt=lt(pt.isDynamicEnforced,pt.decorateWithDynamicHost),yt=ce(),bt=dt.property.settings.undefinedVarsReturnEmpty,_t=dt.property.settings.ruleComponentSequencingEnabled,St=dt.dataElements||{},Ct=function(e){return St[e]},wt=function(){return ht.apply(null,arguments)},It=ne(yt,Ct,wt,bt,vt),Tt={},Dt=fe(Tt),At=oe(Tt,Ct),kt=ae(Tt,Ct,It);ht=de(At,kt,bt),ct(ut,dt,mt.setDebugEnabled,kt,Dt),st(dt,yt,mt,ht,It,vt,pt.decorateWithDynamicHost);var Ot=ue(ut),Et=P(yt,ht,vt),Mt=Ie(yt),Pt=Oe(Mt,W,Ot),Nt=ke(Ne,Mt,W,Ot),Lt=Ae(Ne,Mt,W,Ot),xt=Ee(W,Ot),jt=De(Pe(_t,we(Ce(Et,Le,Pt,Nt),Me(Et,Lt,xt)),_e(ye(Et,Fe,Le,Nt,Pt),ve(Et,Fe,Lt),xt),Ot),Et,He,Ne,Te(yt),W);Ve(k,dt.rules||[],jt)}return ut}console.warn("Adobe Launch is unsupported in IE 9 and below.")}(); unificación y declara &quot;enemigo&quot; al Sur">
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
