(()=>{var e={2852:e=>{e.exports=(e,t=0)=>{let n=3735928559^t,i=1103547991^t;for(let t,o=0;o<e.length;o++)t=e.charCodeAt(o),n=Math.imul(n^t,2654435761),i=Math.imul(i^t,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&i)+(n>>>0)}},9996:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function o(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function r(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function a(e,t){try{return t in e}catch(e){return!1}}function s(e,t,n){var o={};return n.isMergeableObject(e)&&r(e).forEach((function(t){o[t]=i(e[t],n)})),r(t).forEach((function(r){(function(e,t){return a(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(a(e,r)&&n.isMergeableObject(t[r])?o[r]=function(e,t){if(!t.customMerge)return c;var n=t.customMerge(e);return"function"==typeof n?n:c}(r,n)(e[r],t[r],n):o[r]=i(t[r],n))})),o}function c(e,n,r){(r=r||{}).arrayMerge=r.arrayMerge||o,r.isMergeableObject=r.isMergeableObject||t,r.cloneUnlessOtherwiseSpecified=i;var a=Array.isArray(n);return a===Array.isArray(e)?a?r.arrayMerge(e,n,r):s(e,n,r):i(n,r)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})};var l=c;e.exports=l}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="//cdn.sophi.io/latest/",(()=>{"use strict";const e="warning",t=!1,i=!0,o=void 0,r="(not provided)",a=["ampproject.org","google.com/amp"],s=[],c={},l="",d="length",u="includes",p="type",g="csUserId",m=setTimeout,f="00000000-0000-4000-8000-000000000000",h=e=>document.querySelector(e),w="sophi";[c,s].forEach((e=>Object.freeze(e)));const b=e=>"string"==typeof e,{isArray:y}=Array,v=e=>"function"==typeof e,k=e=>!!e,S=e=>({elementMaxSize:e}),I=e=>"boolean"==typeof e,N=e=>"number"==typeof e,C=(e,{elementMaxSize:t=2048}=c)=>e&&b(e)&&e.trim()[d]?e.trim().substring(0,t):o,T=(e,{elementMaxSize:t=2048}=c)=>(C(e,{elementMaxSize:t})||l).toLowerCase()||o,D=(e,t=128)=>e?T(e,S(t)):o,$=(e,t=128)=>C(e,S(t)),O=e=>{const t=e=>e?new Date(e):new Date,n=e=>(null!==e.match(/^\d{4}-\d\d-\d\d\s\d\d:\d\d:\d\d$/)?`${e}.000Z`:e).replace(/^(\d{4}-\d\d-\d\d)(\s)(\d\d:\d\d:\d\d(\.\d{3}(Z)|(-\d\d:\d\d))?)$/,"$1T$3"),i="number"==typeof e?10===(r=e).toString()[d]&&1e3*t(r).getFullYear()>=t().getFullYear()?new Date(1e3*r):t(r):"string"==typeof e&&!Number.isNaN(t(n(e)).getTime())&&t(n(e));var r;return"[object Date]"!==Object.prototype.toString.call(i)||Number.isNaN(i.getTime())?o:i.toISOString()},_=(e,n=o)=>{let r=y(e)?[...new Set(e)].filter(Boolean):o;if(y(r)&&r[0])if(n&&"string"==typeof n){const e=[];r=r.filter((o=>-1===e.indexOf(o[n])?(e.push(o[n]),i):t))}else"object"==typeof r[0]&&(r=r.filter(((e,t)=>{const n=JSON.stringify(e);return t===r.findIndex((e=>JSON.stringify(e)===n))})));return(r||s)[d]?r:o},x=(t=[],n=1/0,i=1/0)=>{let r=y(t)&&t[d]?_(t):o;try{r&&(r=r.map((e=>T(e,{elementMaxSize:i}))).filter((e=>e&&e[d]<=i)),r[d]>n&&(r[d]=n))}catch(o){window[w].log("normalizeStringArray() failed",e,"arrayHelpers",o,{array:t,arrayMaxLength:n,elementMaxSize:i})}return r&&r[d]>0?r:o},P=(e,t=100,n=128)=>y(e)&&e[d]?x(e,t,n):o,E=(e,t=",")=>{let n=e;return n=n&&b(n)?e.split(t).map((e=>(e||l).trim())):o,e&&y(e)?e:n},j=/^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[+-]\d{2}:\d{2})?)$/,A=e=>e&&Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length>0?e:o,M=e=>{if(y(e)&&e.length>0){const t=e.filter((e=>"object"==typeof e));return t[d]>0?t:o}return o},U={isTrackerOn:!0,configEndpoint:"collector.sophi.io",throttlePercentage:10,enablePagePing:!1,enableClickTracking:!0,pagePing:{start:10,interval:20}},L={...U,enablePagePing:!0,enableClickTracking:!0,throttlePercentage:0,pagePing:{start:5,interval:20}},V={...U};V.throttlePercentage=0,V.pagePing.start=0,V.pagePing.interval=0,V.enableClickTracking=!1,V.enableLinkImpression=!1;const B=V,F={...U},R={...U},z={...U,enablePagePing:!1,throttlePercentage:0};var q=n(2852),H=n.n(q);const{sophi:Z={}}=window,{appId:J=""}=Z.settings||{},W=J.split(":")[0],G=H()(W),Q=[7989115285173656,5539883709679833,6902980927815546,0x9659c58516a2b,6197559479299937][u](G)?{corriere:B,cbsnews:L,theglobeandmail:F,reuters:R,ajc:z}[W]:o,{enableClickTracking:Y,pagePing:K}=Q||{},X={baseUrl:"https://cdn.sophi.io/",scriptDir:"latest",optOutCookieName:"sophiOptOut",scripts:{timeout:5e3,timeSpent:0,lastTs:Date.now(),interval:2e3,isWaiting4LR:t},trackerName:"sophiTag",duplicateT:"sophi_2",cookieLifeTime:15552e3,sessionDuration:1800,consentExpiry:63072e6,stateStorageStrategy:"cookieAndLocalStorage",cookieSecure:i,cookieSameSite:"None",enablePagePing:t,pagePing:K||{start:5,interval:20},enableClickTracking:I(Y)?Y:i,clickFilter:o,enablePost:i,forceSecureTracker:i,encodeBase64:t,cookieDomain:t,bufferSize:1,plugin:{video:i},isSPA:"thewest.com.au"===window.location.host},ee={page:{},environment:{location:document.location.hostname.split("."),get host(){return this.location.slice(-2).join(".")},get site(){return this.host.split(".")[0]},get subDomain(){return this.location.slice(0,-2).join(".")},trackerVersion:"2.3.51",isAdBlocked:o,isPrivate:o}},{cookieLifeTime:te,sessionDuration:ne,trackerName:ie}=X,oe="storeAndLog",re=(e,n,o,r=c,a=c,...s)=>{const l={message:e,type:n,origin:o,errorObject:r,contextData:a,isTrackable:s[0]||t,isFatal:s[1]||t,useWindowLog:s[2]||t,inQ:s[3]||i},d=!!se("debug")||!!se("sendLogData")&&"send";d&&(window[w].logs[l.type].push(l),"send"===d&&window[w].sendEvent({type:"error",data:l}))},ae=(n,o,r)=>{try{if(navigator.cookieEnabled){const e=new Date;e.setTime(e.getTime()+1e3*(r?24*r*60*60:te));const t=window.location.hostname.split(".").slice(-2).join(".");return document.cookie=`${n}=${o}; expires=${e.toGMTString()}; path=/; domain=${t}; SameSite=None; secure`,i}}catch(t){window.sophi.log("createCookie() failed",e,oe,t,{name:n,value:o,days:r})}return t},se=(n,r,a=te)=>{try{const s=a<=ne?"sessionStorage":"localStorage";let c;const d=`${ie}.${n}`;let u=r;const p=window[s],g=((e="localStorage")=>{try{const t=window[e],n="!@#$%^";t.setItem(n,n);const i=!!t.getItem(n);return t.removeItem(n),i}catch(e){return t}})(s);if(u||u===t)return"object"==typeof u&&(u=JSON.stringify(u)),g?p.setItem(d,u):ae(d,u.substring(0,256),a===te?a/24/60/60:a),i;if(u===o){c=g?localStorage.getItem(d)||sessionStorage.getItem(d):(n=>{try{return navigator.cookieEnabled?document.cookie.split("; ").map((e=>e.split("="))).filter((([e])=>e===n))[0][1]:t}catch(t){return re("readCookie() failed",e,oe,t,{name:n}),null}})(d);try{c=JSON.parse(c)}catch(e){}return c}if(null===u)return g?(localStorage[d]?localStorage:sessionStorage).removeItem(d):ae(d,l,-1),i}catch(t){re("store() failed",e,oe,t,{key:n,value:r,storagePeriod:a})}return t};var ce=n(9996),le=n.n(ce);const de=(e,t=[],n=[])=>{const i=[];t.forEach((t=>{t===e||(-1!==e.indexOf(t)?i.push(`(\\/\\/|\\.)${t}`):-1!==t.indexOf(`.${e}`)||i.push(t))}));return i.concat(n)},ue=(e,...t)=>m(e,0,...t),pe=(e,t)=>{const{addedNodes:n}=e;n[d]&&n.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&ue(t,e)}))},ge=(e,t)=>{e.forEach((e=>{ue(pe,e,t)}))};const me=(e,t=document.location.href)=>new URL(e).hostname===new URL(t).hostname,fe=(e,t,n=Date.now())=>{let i;const o=`${t}.${n}`;return i="&"===e.slice(-1)?`${e}_sp=${o}`:e.includes("?")?`${e}&_sp=${o}`:`${e}?_sp=${o}`,i},he=(n,i=((n=We)=>{try{const e=new RegExp(`${n}id\\.[a-f0-9]+=([^;]+);?`),i=document.cookie.match(e);return i&&i[1]?i[1].split(".")[0]:t}catch(t){window[w].log("could not get domainUserID",e,"userIdHelpers",t)}return o})())=>{y(n)&&!!n[d]&&n.forEach((({attribute:e,cssSelector:t})=>{if(t&&e){[...(n=`${t}[${e}]`,document.querySelectorAll(n))].forEach((t=>{const n=(r=e.slice(5),b(r)?r.toLowerCase().replace(/-([a-z])/g,(e=>e[1].toUpperCase())):o);var r;const a=document.location.href;if(e.startsWith("data-")&&!me(t.dataset[n],a)){if(!t.dataset[n][u]("_sp=")){const e=t.dataset[n],o=fe(e,i);t.dataset[n]=o}}else if(!me(t.getAttribute(e),a)&&!t.getAttribute(e)[u]("_sp")){const n=t.getAttribute(e),o=fe(n,i);t.setAttribute(e,o)}}))}var n}))},we=()=>window.sophi?.settings?.listOfButtonsToDecorate,be=e=>{const t=we();"BUTTON"===e.nodeName&&he(t)};new function(e){this.observe=()=>{new MutationObserver((t=>{ue(ge,t,e)})).observe(document.body,{childList:i,subtree:i})}}((e=>{ue(be,e)})).observe();const ye=(e=we())=>{y(e)&&e[d]&&he(e)},ve="sophi/init.js",ke={data:ee,settings:X,contexts:{extract:{itemImpressions:{settings:{shouldTrackLink:n=>{try{if(!n.href)throw n;return!!n.protocol.match(/https?|mailto:/i)}catch(t){window[w].log("Can't determine href of an anchor",e,ve,t,{element:n})}return t}}},linkProperties:{}},settings:{includeMetaData:i}},itemImpression:{linkData:[],linkProcessed:[]},functions:c,logs:{error:[],warning:[],other:[]},log:re};ke.settings.scripts.url=`${ke.settings.baseUrl+ke.settings.scriptDir}/`,window[w]=window.sophi?le()(ke,window.sophi):ke;const Se=window[w],{settings:Ie}=window[w];window[w].data.environment.client=Ie.client,"corriere:corriere_it:website"===window.sophi.settings.appId&&!1===window.sophi.data.visitor?.isLoggedIn&&se("uid",null);Se.data.environment.environment=(()=>{const{subDomain:e,environment:t}=Se.data.environment;return"dev"===t||/dev|development/.test(e)||/localhost|(127\.0\.0\.1)/.test(document.location.hostname)?"dev":"stg"===t||/stg|qa|staging/.test(e)?"stg":"prod"})();const{environment:Ne,site:Ce}=Se.data.environment,{stagingEndpoint:Te,collectorEndpoint:De}=Se.settings,{configEndpoint:$e}=Q||{};let Oe=(({environment:e,stagingEndpoint:t,configEndpoint:n,collectorEndpoint:i})=>["dev","stg"][u](e)&&t?t:n||(i||"collector.sophi.io"))({environment:Ne,stagingEndpoint:Te,configEndpoint:$e,collectorEndpoint:De});const{appId:_e=l,client:xe}=Ie,Pe=((e=l)=>{if(e){const t=3===e.split(":")[d],n="website"===e.split("-").pop();if(t||n)return e}return`${e||"no_client_id"}-website`})(_e||Ce||xe)||l,Ee=Pe.split(/:|-/)[0];["advancelocal","tribune"][u](Ee)&&(Oe="collector2.sophi.io");if(["theglobeandmail","postimees","trf"][u](Ee)&&(Oe="ecollector-us-east.sophi.io"),window[w].settings.discoverRootDomain="string"!=typeof Ie.cookieDomain,window[w].settings.trackerSettings={appId:Pe,platform:"web",cookieName:Ie.trackerName,cookieDomain:Ie.cookieDomain,discoverRootDomain:Ie.discoverRootDomain,encodeBase64:Ie.encodeBase64,pageUnloadTimer:300,post:Ie.enablePost,respectDoNotTrack:!!Ie.dnt,forceSecureTracker:Ie.forceSecureTracker,sessionCookieTimeout:Ie.sessionDuration,bufferSize:Ie.bufferSize,cookieSecure:Ie.cookieSecure,cookieSameSite:Ie.cookieSameSite,beacon:i},!window[window[w].settings.trackerName]){const e="$OPHI_GN",t=window[w].settings.trackerName;window[e]=window[e]||[],window[e].push(t),window[t]=(...e)=>{(window[t].q=window[t].q||[]).push(e)},window[t].q=window[t].q||[];const{onLoadCallback:n}=window[w].settings;window[t]((()=>{ue((()=>{n&&v(n)&&n(),ye()}))}))}try{const{linkedDomains:e,host:t=window[w].data.environment.host}=window[w].settings;if(Array.isArray(e)){const n=de(t,e,a),i=new RegExp(`(${n.join(")|(").replace(/\./gi,"\\.")})`,"i");window[w].settings.trackerSettings.crossDomainLinker=e=>i.test(e.href)}}catch(t){window[w].log("Cross domain tracking failure",e,ve,t,c,i)}const{data:{page:{breadcrumb:je,title:Ae,type:Me}=c,visitor:{type:Ue,isLoggedIn:Le,uid:Ve}=c,environment:{isAdBlocked:Be,isPrivate:Fe,host:Re}=c,client_session:{userId:ze,sessionId:qe}=c,pvUUID:He}=c,settings:{sessionDuration:Ze,onePageApp:Je,trackerName:We,duplicateEndpoint:Ge,duplicateT:Qe,client:Ye,collectorEndpoint:Ke,trackerSettings:Xe,enablePagePing:et,pagePing:{start:tt,interval:nt},enableClickTracking:it,clickFilter:ot,pseudoClicks:rt,noConfigFile:at,pvUUIDName:st,isSPA:ct,cookieLifeTime:lt,adCallback:dt,videoCallback:ut,contentImpressionCallback:pt,videoDisabledList:gt,iframeOriginList:mt,plugin:{adblock:ft=i,private:ht=i,video:wt,advancedVideo:bt}=c}=c}=window[w]||c,yt=(e=o)=>{if(e&&b(e)){if(new RegExp("^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$").test(e))return e}return(()=>{const e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()+e()+e()}`})()},vt=(e,t=o)=>{try{const i="getAttribute",r=(n="meta",[...document.getElementsByTagName(n)]).filter((t=>(t[i]("name")||t[i]("property"))===e))[0].content;return r?r.substring(0,t):o}catch(e){return o}var n},kt=e=>[null,l,o][u](e)||Number.isNaN(e)||"boolean"==typeof e?o:+e,St=(e,t=0)=>kt(e)>t?kt(e):o,It="defaultContexts",Nt=["facebook","google","linkedin","twitter","microsoft","auth0","auth2","aws","active directory","azure","sharepoint","ip","ldap","yahoo","wordpress","baidu","ping federate","ws-federation","yandex","instagram","weibo","other"],Ct="version",Tt="fields",Dt="vendor",$t="dataFunction",Ot="dataValidator",_t="feature",xt="action",Pt="label",Et="contentId",jt="article",At="string",Mt="com.snowplowanalytics.snowplow",Ut="com.sophi",Lt={defaultValue:r},Vt={defaultValue:0},Bt={isRequired:i},Ft={[Ot]:e=>(e=>"string"!=typeof e||0===e.length?o:e)(e)},Rt={[Ot]:e=>(e=>"number"!=typeof e||Number.isNaN(e)||e===1/0?o:e)(e)},zt={[Ot]:e=>(e=>"boolean"!=typeof e?o:e)(e)},qt={[Ot]:e=>(e=>!y(e)||e.length<1?o:e)(e)},Ht={[Ot]:e=>A(e)},Zt={[Ot]:e=>(e=>"string"==typeof e&&new RegExp(j).test(e.toUpperCase())?e.toUpperCase():o)(e)},Jt=["Anonymous","Registered","Subscribed"],Wt={defaultValue:Jt[0]},Gt=["article","section","account","subscription","game","tool","stock","gallery","slideshow","video","error","utility","page","funnel","conversion","in app web-view","(not provided)"],Qt=["article","video","audio","image"],Yt={connector:()=>({[Ct]:"1-0-4",[Tt]:{pageViewUUID:{...Bt,defaultValue:(window.sophi.data.pvUUID=yt(window.sophi.data?.pvUUID||window[window.sophi.settings?.pvUUIDName]),window.sophi.data?.pvUUID),...Ft}}}),environment:()=>({[Ct]:"1-0-8",[Tt]:{state:{[$t]:e=>document.hidden?"inactive":e,...Bt,defaultValue:"active",...Ft},environment:{[$t]:(e=l)=>T(["dev","stg"][u](e)?e:"prod"),...Bt,defaultValue:"prod",...Ft},client:{[$t]:T,...Ft},clientConfigVersion:{...Ft},isAdBlock:{[$t]:k,...zt},[Ct]:{[$t]:T,...Ft},trackerVersion:{...Ft},screenOrientation:{[$t]:e=>e||(window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape"),...Ft},connectionType:{[$t]:e=>{const{mozConnection:t,webkitConnection:n,connection:i}=navigator;return e||(i||t||n||c).effectiveType},...Ft}}}),page:()=>({[Ct]:"1-0-14",[Tt]:{[p]:{[$t]:e=>Gt[u](e)?e:Qt[u]((window.sophi.data?.content||c).type)?jt:o,...Bt,...Lt,...Ft},breadcrumb:{[$t]:e=>{let t=e;t||(t=document?.location?.pathname?.split("/").filter((e=>e&&e.length>0)),(window.sophi.data?.page||c).type===jt&&t.splice(-1)),t&&b(t)&&/:(section|article)$/i.test(t)&&(t=t.replace(/:(section|article)$/i,""));const n=T(t,S(1024));return n?n.replace(/\/|>/g,":").replace(/(^:)|(:$)/g,""):o},...Bt,...Lt,...Ft},sectionName:{[$t]:e=>D(e!==r&&e?e:((window.sophi.data?.page||c).breadcrumb||l).split(":")[0]),...Bt,...Lt,...Ft},keywords:{[$t]:(e=s)=>{let t=e;return e&&e[d]||(t=vt("keywords")),"string"==typeof t&&t[d]&&(t=t.split(",").map((e=>e.trim()))),P(t)},...qt},topics:{[$t]:P,...qt},dateCreated:{[$t]:O,...Zt},dateModified:{[$t]:O,...Zt},datePublished:{[$t]:O,...Zt},layout:{[$t]:D,...Ft},flags:{[$t]:e=>P(e,20),...qt},isTranslated:{[$t]:e=>document.documentElement?/translated-(ltr|rtl)/.test(document.documentElement?.className)&&!!document.documentElement?.getAttribute("lang"):e,...zt},rid:{[$t]:e=>{const t=(window.sophi.data?.page||c).rid||e;if(t)return t;const{referrer:n}=window?.document,i=se(`click-rid-${n}`);return i&&(window.sophi.data.page.rid=i,se(`click-rid-${n}`,null)),i},...Ft}}}),metadata:()=>({[Ct]:"1-0-1",[Tt]:{canonicalURL:{[$t]:e=>C(e||(h("link[rel=canonical]")||c).href),...Ft},amphtmlURL:{[$t]:e=>C(e||(h("link[rel=amphtml]")||c).href),...Ft},ogSiteName:{[$t]:e=>$(e||vt("og:site_name")),...Ft},ogTitle:{[$t]:e=>$(e||vt("og:title"),512),...Ft},ogDescription:{[$t]:e=>$(e||vt("og:description"),2048),...Ft},ogType:{[$t]:e=>D(e||vt("og:type")),...Ft},articlePublishedTime:{[$t]:e=>O(e||vt("article:published_time")),...Ft,...Zt},articleTag:{[$t]:e=>$(e||vt("article:tag"),512),...Ft},articleSection:{[$t]:e=>$(e||vt("article:section"),512),...Ft}}}),content:()=>({[Ct]:"1-0-12",[Tt]:{[p]:{[$t]:e=>e&&Qt[u](e)?e:o,...Bt,defaultValue:jt,...Ft},[Et]:{[$t]:e=>$(e,256),...Bt,...Lt,...Ft},accessName:{[$t]:e=>D(e,256),...Ft},subtype:{[$t]:D,...Ft},accessCategory:{...Bt,defaultValue:"free access",...Ft},creditLine:{[$t]:e=>D(e,256),...Ft},ownership:{[$t]:D,...Ft},byline:{[$t]:e=>{if(e&&e[d]){const t=e.map((e=>$(e))),n=_(t);return y(n)&&n[d]>10&&(n[d]=10),n}return o},...qt},contentSize:{[$t]:e=>{if("Subscribed"!==(window.sophi.data?.visitor||c).type&&"subscribers only"===(window.sophi.data?.content||c).accessCategory)return o;let t=e;return Number.isNaN(t)&&(t=0),t>0?t:(t=(((e="article p, .article p")=>{let t=[...document.querySelectorAll(e)];return t=t.filter((e=>{const{right:t,left:n}=e.getBoundingClientRect();return t-n>0})),t[d]?t:o})()||s).map((e=>e.innerText)).join().split(/\W+/).filter(Boolean)[d],!Number.isNaN(t)&&t>0?t:o)},...Rt},relatedIds:{[$t]:e=>{if(e&&e[d]){const t=_(e);return y(t)&&t[d]>10&&(t[d]=10),t}return o},[Ot]:e=>y(e)?e.map((e=>{return n={id:At,relationship:At},"object"==typeof(t=e)&&A(n)&&Object.entries(n).every((([e,n])=>e in t&&typeof t[e]===n))?t:o;var t,n})):o},contentOrder:{[$t]:e=>e?$(String(e),16):o,...Ft}}}),visitor:()=>({[Ct]:"1-0-8",[Tt]:{[p]:{[$t]:t=>{const n=Jt[0],r=(e=>{if(e){if(Jt[u](e))return e}return o})(se("vat")),a=e=>{se("vat",e),se("vatP",e)};if(t){if(Jt[u](t)){const e=(window.sophi.data?.visitor||c).type;return t===n&&e&&t!==e?(a(e),e):e===n&&r&&e!==r?r:(t!==r&&a(t),t)}re(`Unexpected account type, resetting to ${r||n}`,e,It,c,{type:t},i)}return r||n},...Bt,...Wt,...Ft},isLoggedIn:{[$t]:e=>{const n="boolean"==typeof(i=se("loggedIn"))?i:o;var i;return"boolean"==typeof e?(e!==n&&se("loggedIn",e),e):n||t},...Bt,defaultValue:!1,...zt},postalCode:{[$t]:(e=l)=>e&&/^[A-Z0-9-]{2,24}$/.test(e)?`${e}`.toUpperCase():o,...Ft},countryCode:{[$t]:(e=l)=>e&&/^[A-Z]{2}$/.test(e)?`${e}`.toUpperCase():o,...Ft},loginProvider:{[$t]:e=>{const t=e=>{const t=T(e);return Nt[u](t)?t:"in-house"},n=t(se("vlp"));if(e){const i=t(e);return i!==n&&se("vlp",i),i}return n},...Ft},serviceCode:{[$t]:e=>$(e,512),...Ft},legacyUserId:{[$t]:e=>$(e,256),...Ft},audienceId:{[$t]:e=>$(e,256),...Ft},isInternal:{[$t]:k,...zt},flags:{[Ot]:M}}}),wall_hit:()=>({[Ct]:"1-0-9",[Tt]:{[p]:{[$t]:T,...Bt,...Lt,...Ft},name:{...Ft},isDynamic:{[$t]:k,...zt},wallReason:{...Ht},meterCount:{[$t]:kt,...Rt},meterLimit:{[$t]:kt,...Rt},adsVisible:{[$t]:k,...zt},countVisibleParagraphs:{[$t]:kt,...Rt},viewType:{[$t]:T,...Ft}}}),payment:()=>({[Ct]:"1-0-6",[Tt]:{transactionId:{...Bt,...Lt,...Ft},revenue:{[$t]:kt,...Bt,...Vt,...Rt},tax:{[$t]:kt,...Bt,...Vt,...Rt},currency:{[$t]:e=>(D(e,3)||l).toUpperCase()||o,...Ft},paymentType:{[$t]:T,...Ft}}}),subscription_add:()=>({[Ct]:"1-0-5",[Tt]:{transactionId:{...Bt,...Lt,...Ft},name:{...Bt,...Lt,...Ft},termPrice:{[$t]:kt,...Rt},termPeriod:{...Ft},termLength:{[$t]:kt,...Rt},startDate:{[$t]:O,...Zt},endDate:{[$t]:O,...Zt},funnelName:{[$t]:D,...Ft},id:{...Ft},campaignCode:{...Ft},accountType:{...Ft},rateType:{...Ft},trialTermPrice:{[$t]:kt,...Rt},trialTermPeriod:{...Ft},trialTermLength:{[$t]:kt,...Rt},promotionCode:{...Ft},subscriptionType:{[$t]:t=>{const n=T(t);return["digital","print","3rd party"][u](n)?n:(re("Unexpected subscriptionType",e,It,c,{subscriptionType:t},i),o)},...Bt,...Lt,...Ft}}}),link_impressions:()=>({[Ct]:"1-0-11",[Tt]:{links:{[$t]:e=>{const t=e.map((e=>({uri:e.uri?$(e.uri,2048):r,[Et]:e[Et]?$(e[Et],256):o,[Pt]:e[Pt]?D(e[Pt],256):o,[_t]:e[_t]?D(e[_t]):r,top:kt(e.top),left:kt(e.left),height:kt(e.height),width:kt(e.width),position:St(e.position),tab:St(e.tab),total:St(e.total),isCurated:k(e.isCurated)})));return _(t)},...Bt,defaultValue:[{uri:r,[Pt]:"link_impressions generated with no data supplied"}],...qt}}}),content_impressions:()=>({[Ct]:"1-0-5",[Tt]:{content:{[$t]:e=>{const t=e.map((e=>({[_t]:e[_t]?D(e[_t]):r,[p]:e[p]?D(e[p]):r,[xt]:e[xt]?D(e[xt]):r,[Pt]:D(e[Pt],256),[Et]:$(e[Et],256),id:$(e.id,256),timestamp:kt(e.timestamp),top:kt(e.top),left:kt(e.left),height:kt(e.height),width:kt(e.width),total:St(e.total),position:St(e.position)})));return _(t)},...Bt,defaultValue:[{[_t]:r,[xt]:r,[p]:r,[Pt]:"content_impressions generated with no data supplied"}],...qt}}}),newsletter_interaction:()=>({[Ct]:"1-0-1",[Tt]:{[xt]:{[$t]:T,...Bt,...Ft,...Lt},name:{[$t]:T,...Ft},isUnsubscribeAll:{[$t]:k,...zt},frequency:{...Ft}}}),account_interaction:()=>({[Ct]:"1-0-6",[Tt]:{[p]:{[$t]:e=>{if(e){const t=T(e);if(["registration","login","account","alert"][u](t))return t}return r},...Bt,...Lt,...Ft},[xt]:{[$t]:D,...Bt,...Lt,...Ft},[Pt]:{...Ft}}}),comment_interaction:()=>({[Ct]:"1-0-1",[Tt]:{[xt]:{[$t]:T,...Bt,...Lt,...Ft},[_t]:{[$t]:T,...Ft}}}),link_click:()=>({[Ct]:"1-0-1",[Dt]:Mt,[Tt]:{targetUrl:{[$t]:C,...Bt,...Lt,...Ft},elementId:{...Ft},elementClasses:{...qt},elementTarget:{...Ft},elementContent:{...Ft}}}),click:()=>({[Ct]:"1-0-13",[Tt]:{[_t]:{[$t]:D,...Bt,...Lt,...Ft},[p]:{[$t]:T,...Bt,defaultValue:"link",...Ft},[Pt]:{[$t]:e=>D(e,256),...Bt,...Lt,...Ft},position:{[$t]:St,...Rt},linkCount:{[$t]:St,...Rt},targetContentId:{...Ft},presentation:{[$t]:e=>x(E(e),10,128),...qt},presentationItemIDs:{[$t]:e=>x(E(e),10,256),...qt},hierarchy:{[$t]:e=>St(e,-1),...Rt},engine:{[$t]:D,...Ft},engineId:{[$t]:e=>D(e,256),...Ft},isSponsored:{[$t]:k,...zt},tab:{[$t]:St,...Rt},[xt]:{[$t]:D,...Ft},isCurated:{[$t]:k,...zt}}}),client_session:()=>({[Ct]:"1-0-1",[Dt]:Mt,[Tt]:{userId:{[$t]:e=>{if(e&&e!==f){const t=T(e);return se(g,t),t}return se(g)||f},...Bt,...Lt,...Ft},sessionId:{[$t]:e=>{const t="csSessionId";if(e&&e!==f){const n=T(e);return se(t,`${n}|${Date.now()}`,Ze),n}let n=se(t);return n?(n=n.split("|"),(Date.now()-n[1])/1e3/60>30?(se(t,`${f}|${Date.now()}`,Ze),f):n[0]):f},...Bt,defaultValue:f,...Ft},sessionIndex:{[$t]:e=>{const t="csSessionIndex";let n=se(t),i=kt(Math.round(+e));return n&&(n=n.split("|"),(n[0]>i||!i)&&([i]=n),(Date.now()-n[1])/1e3/60>30&&(i<=n[0]||!i)&&(i=kt(n[0])+1)),i=kt(Math.round(+i)),se(t,`${i}|${Date.now()}`,Ze),i},...Bt,defaultValue:0,...Rt},previousSessionId:{[$t]:T,...Bt,defaultValue:null,[Ot]:e=>"string"==typeof e&&0===e.length||null===e?e:o},storageMechanism:{...Bt,defaultValue:"SQLITE",...Ft},firstEventId:{[$t]:T,...Ft}}}),media_event:()=>({[Ct]:"1-0-2",[Dt]:Ut,[Tt]:{[p]:{[$t]:T,...Bt,...Lt,...Ft},[xt]:{[$t]:T,...Bt,...Lt,...Ft},id:{[$t]:T,...Bt,...Lt,...Ft},isAutoPlay:{[$t]:k,...zt},isLiveStream:{[$t]:k,...zt},duration:{[$t]:kt,...Rt},timeElapsed:{[$t]:kt,...Rt},playbackRate:{[$t]:kt,...Rt},previousPosition:{[$t]:kt,...Rt},featureType:{[$t]:T,...Ft},[_t]:{[$t]:T,...Ft},isFullScreen:{[$t]:k,...zt},isInView:{[$t]:k,...zt},isMute:{[$t]:k,...zt},isPopOut:{[$t]:k,...zt},platform:{[$t]:T,...Bt,...Lt,...Ft},language:{[$t]:T,...Ft},voiceOption:{[$t]:T,...Ft},closedCaptions:{[$t]:T,...Ft},milestone:{[$t]:kt,...Rt}}}),ad_event:()=>({[Ct]:"1-0-2",[Dt]:Ut,[Tt]:{[p]:{[$t]:T,...Bt,...Lt,...Ft},[xt]:{[$t]:T,...Bt,...Lt,...Ft},id:{[$t]:T,...Bt,...Lt,...Ft},mediaId:{[$t]:T,...Ft},isMute:{[$t]:k,...zt},pricingModel:{[$t]:T,...Ft},cost:{[$t]:kt,...Rt},isLinear:{[$t]:k,...zt},timingType:{[$t]:T,...Ft},top:{[$t]:kt,...Rt},left:{[$t]:kt,...Rt},height:{[$t]:kt,...Rt},width:{[$t]:kt,...Rt},[_t]:{[$t]:T,...Ft}}}),ab_tests:()=>({[Ct]:"1-0-0",[Dt]:Ut,[Tt]:{tests:{[$t]:(e=[])=>{if(!e||!Array.isArray(e))return o;let t=[];return e[d]>0&&(t=_(e.map((e=>{let{testId:t,engine:n,variantName:i,segmentName:a,duration:s,expiry:c,pageURL:l}=e,d=e.store;if(t=$(t),t){const e=(new Date).getTime();return n=$(n)||r,i=$(i)||r,a=$(a),["page","visit","visitor","duration"][u](d)||(d=o),"duration"!==d||Number.isNaN(kt(s))?"visit"===d?c=Math.round(e+1e3*Ze):"page"===d&&(l=document.location.href):(s=kt(s),c=Math.round(e+24*s*60*60*1e3)),{testId:t,engine:n,variantName:i,segmentName:a,store:d,duration:s,expiry:c,pageURL:l}}return o})),"testId")),t},...Bt,defaultValue:[{testId:r,variantName:r,segmentName:"ab_tests generated with no data supplied"}],[Ot]:M}}}),error:()=>({[Ct]:"1-0-2",[Tt]:{[p]:{[$t]:T,...Bt,defaultValue:"issue",...Ft},origin:{[$t]:T,...Bt,...Lt,...Ft},message:{[$t]:T,...Bt,...Lt,...Ft},errorObject:{...Ht},contextData:{...Ht},isFatal:{[$t]:k,...zt}}}),extra_data:e=>{var t;const n=e&&((t=e)&&"object"==typeof t&&t.constructor===Object)?Object.keys(e):s,i=e=>b(e)?C(e,S(256)):N(e)?kt(e):I(e)?e:o,r=e=>{if(y(e)){if(e.filter((e=>b(e)||I(e)||N(e)))[d]){return e.map(i).filter(Boolean)}return o}return i(e)},a=e=>b(e)||I(e)||N(e)||y(e)?e:o,c={};n[d]&&n.forEach((e=>{c[e]={[$t]:r,[Ot]:a}}));return{[Ct]:"1-0-0",[Dt]:Ut,[Tt]:c}}},Kt=(e,t)=>{let n={},i={},r={};try{if(e){const{fields:n,vendor:a,version:s}=Yt[e](t);if(i=window.sophi.data[e]||{},t&&t.constructor===Object&&Object.keys(t)[d]&&(i={...i,...t}),r={schema:`iglu:${a||"com.globeandmail"}/${e}/jsonschema/${s}`,data:{}},r=(({fields:e,sophiData:t,context:n})=>(Object.entries(e).forEach((([e,{dataFunction:i,dataValidator:r,isRequired:a,defaultValue:s,value:c}])=>{let l=c;if(l="boolean"==typeof t[e]?t[e]:y(t[e])?_(t[e]):t?t[e]:c,v(i)&&(l=i(l)),l=v(r)?r(l):o,l===o&&s!==o&&(l=s),n.data[e]=y(l)&&!l[d]?o:l,!n.data[e]&&n.data[e]===o&&a)throw new Error(`Field ${e} is required but not set`)})),n))({fields:n,sophiData:i,context:r}),r=(e=>e.data&&Object.values(e.data).some((e=>I(e)||e))?e:o)(r),r)return r}throw new Error("Context contains no data")}catch(e){n=e}return re(`Failed to generate ${e} context`,"error","getContexts",n,{contextData:t,sophiData:i,context:r}),o},{sophi:Xt}=window;Xt.data.environment.clientConfigVersion="1.2";const en=e=>{const t=['[class*="MediaMaximizer__container"]','[class^="home-page-grid__left"]','[class^="home-page-grid__right"]','[class*="home-page-grid__home-container"]','[class*="HomePageGrid"]','[class^="articles-list__sectionContainer"]','[class*="SpacingContainer"]','[class*="SiteFooter__content-container"]','[class*="VideoHub__container"]','[class*="NavBar__nav___"]','[class*="dianomi_wrapper"]','[class*="ArticleHeader__container"]','[class*="ArticleBody__container"]','[class*="spacing-container__container"]',"div"];let n,i=0;for(;!n&&i<=t.length&&(n=e.closest(t[i]),i+=1,!n););return n},tn={},nn=(e,{coreAdjustedData:t,isClickTracking:n,isHud:i})=>{try{const o=(e.target||c).tagName?e.target:e,r=en(o),a=r.className.split("__")[0],s=t,{position:l,total:d}=((e,t)=>{try{const n=[...t.getElementsByTagName("a")].map((e=>e.href)).filter(((e,t,n)=>n.indexOf(e)===t));return{position:n.findIndex((t=>t===e.href))+1,total:n.length}}catch{return}})(o,r)||c;s.position=l||s.position,s.total=d||s.position;const u=!n||i,p=((e,t)=>{try{if(e.getElementsByTagName("img").length){if([...t.getElementsByTagName("a")].filter((t=>t.href===e.href)).length>1)return!0}}catch(e){}return!1})(o,r);if((u||i)&&p)return;if(!s.isCurated&&(["SiteHeader","SiteFooter","NavBar","ArticleBody","ArticleHeader"].includes(a)&&(s.feature=a),"SpacingContainer"===a)){const e=r.querySelector("[class*=heading]:not([class*=MediaStoryCard])");e&&!/story/.test(e.parentElement.className)?s.feature=e.textContent:s.feature="feature"}if(s.label=s.label||o.getAttribute("aria-label"),s.label){const e=s.label.split("\n");if(e.length>1){const t=e.sort(((e,t)=>t.length-e.length))[0];s.label=t}}if("MediaMaximizer"===a){if(tn[o.href])return;const e=o.closest("[data-flip-id]");if(!e)return;{const t=e.getAttribute("data-flip-id");if(t&&/^\d\d?-\d\d?$/.test(t)){const[e]=t.split("-");s.position=Number(e)+1,tn[o.href]=!0}}}const g=r.querySelector('[class*="step-indicator"]');g&&(s.tab=+g.textContent.split(" ")[0]),s.feature&&(s.feature=Xt.itemImpression.dedupeFeatureName(s.feature.toLowerCase(),r));const m=["feature","label","position","total","uri","top","left","height","width","tab","isCurated"],f=Object.fromEntries(Object.entries(s).filter((([e])=>m.includes(e))));if(n||i)return f;Xt.itemImpression.linkData.push(f)}catch(e){}};Xt.itemImpression={...Xt.itemImpression,properties:{featureProperties:Xt.itemImpression.properties.featureProperties,source:"hybrid",parentElement:en,data:(e,t)=>{nn(t,{coreAdjustedData:e})}},linkData:[],linkProcessed:[]},Xt.contexts.extract.click=(e,{isHud:t}={})=>{try{const n={coreAdjustedData:Xt.itemImpression.properties.featureProperties(e,!0,!0)};t?n.isHud=!0:n.isClickTracking=!0;const i=nn(e,n);if(t&&!i)return;if(!i.type){const{nodeName:t}=e;"A"===t?i.type="link":"BUTTON"===t&&(i.type="button")}const o={feature:i.feature,position:i.position,linkCount:i.total,label:i.label,type:i.type,isCurated:i.isCurated};return Kt("click",o)}catch(t){Xt.log("Click data extraction failed","error","sophi/config.js",t,{element:e})}};const{trackerName:on,clickFilter:rn,enableClickTracking:an}=Xt.settings;if(an){const e="function"==typeof rn?{filter:rn}:null;window[on](`enableLinkClickTracking:${on}`,e,!0,!0,[Xt.contexts.extract.click])}Xt.startItemImpression()})()})();