!function(){"use strict";ar n={824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={pixelVersion:"142417161",windowkey:"xeiog5asiia8yf9xc1jkbn",pixelArr:"_megoaa",keyPixelParam:"_megoaa_gqddkg5",keyPixelPv:"_megoaa_a766v7tf0ym",keyCv:"_megoaa_f4g7wujdwog",keyAcidFromLP:"_megoaa_v1sudthdlpq",keyCpidFromLP:"_megoaa_cc4d76fdaf5",keyVals:"_mg_jlisnwrs4il",keyAcTr:"_mg_e14zcvjgpba",keyCpTr:"_mg_cc4d76fdaf5",url:{postbackTrack:"https://trace.mediago.io/api/bidder/postback",reachTrack:"https://trace.mediago.io/api/bidder/postback",conversionTrack:"https://trace.mediago.io/api/bidder/track/pixel/conversion",gtmCvTrack:"https://trace.mediago.io/cv/pixel/v2/conversion",pageviewTrack:"https://trace.mediago.io/api/bidder/track/pixel/pageview",track:"//sync.mediago.io/api/track?tn=9220dd482c2a49631b4e66cca9f5f0ee&winloss=1",oldval:"https://trace.mediago.io/api/html/val",val:"https://d2cli4kgl5uxre.cloudfront.net/js/h/val.html",setval:"https://d2cli4kgl5uxre.cloudfront.net/js/h/setval.html",funnel:"https://trace.mediago.io/api/log/track",commonLog:"https://trace.mediago.io/ju/log/c"},path:{postbackTrack:"/api/bidder/postback",conversionTrack:"/api/bidder/track/pixel/conversion",gtmCvTrack:"/cv/pixel/v2/conversion",commonLog:"/ju/log/c",cs:"/ju/cs/eplist",pageviewTrack:"/api/bidder/track/pixel/pageview",val:"/api/html/val",timeCost:"/api/log/click/time_cost",chooseApi:"/cv/choose"},domain:{testDomain:"https://testbysimin.mediago.io",globalDomain:"https://gtrace.mediago.io",discovery_js:"https://trace.popin.cc",mediago_us:"https://trace.mediago.io"},conversionTypeMap:{view_content:1,app_install:2,complete_registration:3,add_to_cart:4,add_payment_info:5,search:6,start_checkout:7,purchase:8,add_to_wishlist:9,lead:10,click_button:12},CV_DATA_RESOURCE:{URL:"URL",REFERER:"RF",COOKIE:"CK",STORAGE:"ST",IFRAME_ACID:"IF_ACID",IFRAME_LAST_CLICK:"IF_L_C",ACTDIFF:"ACTDIFF"},IFRAME_DATA_RESOUCE:{URL_TRACKINGID:"UT",URL_ACID:"UA",LAST_CLICK_STORAGE:"LCS",LAST_CLICK_COOKIE:"LCC",LP_URL:"LU"},THIRD_PARTY_PIXEL_PLATFORM:{GTM:"gtm",SHOPLINE:"em_shopline",SHOPLAZZA:"em_shoplazza"}}},868:function(e,t){function s(e){for(var t,i=1;i<arguments.length;i++)for(var n in t=arguments[i])e[n]=t[n];return e}t.Z=void 0;var l={read:function(e){return e.replace(/%3B/g,";")},write:,i=function t(a,o){function c(e,t,i){if("undefined"!=typeof document){"number"==typeof(i=s({},o,i)).expires&&(i.expires=new Date(Date.now()+i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=l.write(e).replace(/=/g,"%3D"),t=a.write(t+"",e);var n,r="";for(n in i)i[n]&&(r+="; "+n,!0!==i[n])&&(r+="="+i[n].split(";")[0]);return document.cookie=e+"="+t+r}}function d(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],i={},n=0;n<t.length;n++){var r=(o=t[n].split("=")).slice(1).join("="),o=l.read(o[0]).replace(/%3D/g,"=");if(i[o]=a.read(r,o),e===o)break}return e?i[e]:i}}return Object.create({set:c,get:d,available:function(){try{var e="dv0qai26lg6v2y6kl7yyc36brextd"+Math.random().toString(36).slice(2),t=Math.random().toString(36).slice(2);if(c(e,t,s({},{expires:1e3})),d(e)!==t)throw new Error("set and get not the same");return!0}catch(t){return!1}},secondLevelDomainAvailable:function(e){for(var t,i=e.split("."),n="dv0qai26lg6v2y6kl7yyc36brextd"+Math.random().toString(36).slice(2),r=Math.random().toString(36).slice(2),o=0;o<=i.length-2;o++)if(c(n,r,s({},{expires:1e3,Domain:t="."+i.slice(-2-o).join(".")})),d(n)===r)return t;return!1},remove:withAttributes:withConverter:,{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(a)}})}(l,{expires:31536e6,path:"/",sameSite:"None;",Secure:!0});t.Z=i},925:function(e,t){function n(){this.elements=[],this.size=this.isEmpty=this.clear=this.put=function(e,t){1==this.containsKey(e)&&this.containsValue(t)&&1!=this.remove(e)||this.elements.push({key:e,value:t})},this.set=function(e,t){1==this.containsKey(e)&&this.containsValue(t)&&1!=this.remove(e)||this.elements.push({key:e,value:t})},this.remove=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements.splice(i,1),!0}catch(e){t=!1}return t},this.delete=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements.splice(i,1),!0}catch(e){t=!1}return t},this.get=function(e){try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements[i].value}catch(e){return null}},this.setValue=function(e,t){var n=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements[i].value=t,!0}catch(t){n=!1}return n},this.element=this.containsKey=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].key==e&&(t=!0)}catch(e){t=!1}return t},this.has=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].key==e&&(t=!0)}catch(e){t=!1}return t},this.containsValue=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].value==e&&(t=!0)}catch(e){t=!1}return t},this.keys=function(){var e=[];for(i=0;i<this.elements.length;i++)e.push(this.elements[i].key);return e},this.values=function(){var e=[];for(i=0;i<this.elements.length;i++)e.push(this.elements[i].value);return e},this.forEach=function(e,t){t=t||window;for(var i=[],n=0;n<this.elements.length;n++)"function"==typeof e&&(e.call(t,this.elements[n].value,this.elements[n].key,this.elements),i.push(this.elements[n].value));return i}}function r(){try{this.events=new Map}catch(e){this.events=new n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;function o(e){return{callback:e,once:!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1]}}r.prototype.addListener=function(e,t){var i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],n=this.events.get(e);n?"function"==typeof n.callback?this.events.set(e,[n,o(t,i)]):n.push(o(t,i)):this.events.set(e,o(t,i))},r.prototype.removeListener=function(e,t){var i=this.events.get(e);if(i){if(!Array.isArray(this.events)){if(i.callback!==t.callback)return;this.events.delete(e)}for(var n=0;n<i.length;n++)i[n].callback===t.callback&&(i.splice(n,1),n--,1===i.length&&this.events.set(e,i[0]))}},r.prototype.once=r.prototype.emit=function(t){for(var i=this,e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this.events.get(t);if(o)return Array.isArray(o)?o.forEach(function(e){e.callback.apply(i,n),e.once&&i.removeListener(t,e)}):(o.callback.apply(this,n),o.once&&this.events.delete(t)),!0},r.prototype.removeAllListeners=t.default=r},955:function(e,t,i){function o(){return(o=Object.assign||function(e){for(var t,i=1;i<arguments.length;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function a(e){var t=e.uuid,i=e.trackingid,n=e.apidomain,r={};/mediago\.io/.test(T)?r.Domain="mediago.io":/popin\.cc/.test(T)?r.Domain="popin.cc":(e=f.secondLevelDomainAvailable(T),r.Domain=e||"."+T),r.sameSite="None;",r.Secure=!0,d(t,r),i&&f.set(y,i,r),n&&f.set(h,n,o({},r,{Expires:""}))}function c(){var e=f.get(n);return 0!==e&&"0"!==e}function d(e,t){return A&&e?c()?void f.set(v,e,t):void l(t):void 0}function s(e){return O&&e?c()?void p.set(_,e):void l():void 0}function l(){O&&p.remove(_),A&&(f.remove(v,{domain:".mediago.io",path:"/"}),f.remove(v,{domain:"cdn.mediago.io",path:"/"}))}function u(){var e=A?f.get(r):"",t=sessionStorage?sessionStorage.getItem(r):"";if(e)return e;if(t)return t;t=m();return function(e){if(e){var t={sameSite:"None;",Secure:!0,Expires:""};A&&f.set(r,e,t),sessionStorage&&sessionStorage.setItem(r,e)}}(t),t}t.getMediaGoUid=t.URL_KEY_TRACKINGID=t.URL_KEY_TOKEN=t.URL_KEY_MGUID=t.URL_KEY_DATA_RESOURCE=t.URL_KEY_CONFIG_RESOURCE=t.URL_KEY_COMPANYID=t.URL_KEY_APIDOMAIN=t.URL_KEY_ACCOUNTID=t.LS_KEY_MGUID=t.COOKIE_KEY_TRACKINGID=void 0,t.getSessionUid=u,t.setMguidCookie=d,t.setMguidStorage=s;var m=i(631),p=i(314).Z,f=i(868).Z,g=i(367).getUrlParams,i=i(367).getDomain,v="__mguid_";var n="optout";var h="__mgap_";var y="__mgtkd_";t.COOKIE_KEY_TRACKINGID=y;var r="__mgSsd_";var _="mguid";t.LS_KEY_MGUID=_;var w="uy3ubftvh0u6o8";var k="zsmoi87pih9";var E="a0v5la7bquf89";t.URL_KEY_MGUID=E;var R="uy3ubftvh0u6o8";t.URL_KEY_TRACKINGID=R;var I="zsmoi87pih9";t.URL_KEY_APIDOMAIN=I;var b="trackingid";t.URL_KEY_ACCOUNTID="xnfrr0ncac",t.URL_KEY_COMPANYID="cc4d76fdaf5",t.URL_KEY_TOKEN="lzzgnpz8d",t.URL_KEY_DATA_RESOURCE="REFUQV9S",t.URL_KEY_CONFIG_RESOURCE="Q09ORklH";var A=f.available(),O=p.available(),T=i();t.getMediaGoUid=function(){var e=(o=r="",i=window.location.href,t=g(i),i=t[I]||"",(t=t[R]||t[b])?r=t:O&&(n=p.get(w),A&&(t=f.get(y),n&&n===t?r=n:!n&&t?r=t:n&&t!==n&&(r=n))),i?o=i:O&&(n=p.get(k),A&&(i=f.get(h),n&&n===i?o=n:!n&&i?o=i:n&&i!==n&&(o=n))),A&&a({apidomain:o,trackingid:r}),O&&(o&&p.set(k,o),r&&p.set(w,r)),{trackingid:r,apidomain:o}),t=e.trackingid,i=e.apidomain,n="",r=g(window.location.href)[E],o=u();if(r)n=r;else if(O){e=O?c()?p.get(_)||"":(l(),""):void 0;if(A){r=A?c()?f.get(v):(l(),""):"";if(e&&e===r)return{mguid:e,trackingid:t,sessionUid:o};!e&&r?s(n=r):e&&r!==e?a({uuid:n=e}):(s(n=g(window.location.href)[E]||m()),a({uuid:n}))}else e?n=e:s(n=g(window.location.href)[E]||m());return{mguid:n,trackingid:t,apidomain:i,sessionUid:o}}return a({uuid:n}),s(n),{mguid:n,trackingid:t,apidomain:i,sessionUid:o}}},314:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Z=void 0;t.Z={available:function(){try{var e=window.localStorage,t="__storage_test__"+Math.random().toString(36).slice(2);return e.setItem(t,t),e.removeItem(t),!0}catch(t){return!1}},set:function(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:void 0;"object"===n(t)&&(t=JSON.stringify(t)),e=o(e),localStorage.setItem(e,t),void 0===i?localStorage.removeItem(r(e)):(i=i+(new Date).getTime(),localStorage.setItem(r(e),""+i))},get:function(e){var t,i=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],n=r(e=o(e));if(i)try{t=JSON.parse(localStorage.getItem(e))}catch(i){t=localStorage.getItem(e)}else t=localStorage.getItem(e);return 0!=(n=+localStorage.getItem(n))&&n<(new Date).getTime()&&(localStorage.removeItem(e),localStorage.removeItem(r(e))),t},remove:},418:function(e,t,i){unction r(){return(r=Object.assign||function(e){for(var t,i=1;i<arguments.length;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function o(e){var t=e.tn,i=e.trackingid,e=e.mguid;g={tn:t||f,trackingid:i||"",mguid:e||""}}function a(e){try{e=r(g,e);var t=m("")+s.default.path.commonLog,i=l(e,t);u(i)}catch(e){throw e}}function c(e,t){a({app:v.TEMPLATE_ERROR,ext:JSON.stringify({type:e,msg:t})})}Object.defineProperty(t,"__esModule",{value:!0}),t.VIMP_EVT=t.REPORT_EVENT=t.REAL_VIMP_STATUS=t.ERROR_TYPE=void 0,t.reportCommonData=a,t.reportError=c,t.reportPixelError=function(e){a({app:v.PIXEL_ERROR,ext:JSON.stringify({type:h.PIXEL,msg:e})})},t.setCommonReportData=function(e){try{for(var t=0;t<e.length;t++)for(var i,n=(n=e[t])?n.split(";;;"):[],r=0;r<n.length;r++)if((i=p(n[t])).trackingid){o({tn:i.tn,trackingid:i.trackingid});break}}catch(e){throw e}},t.setCommonReportDataSimple=o;var d=n(i(925)),s=n(i(824)),l=i(367).getUrlStr,u=i(163).track,m=i(163).getApiDomain,p=i(367).getUrlParams,f="f9f2b1ef23fe2759c2cad0953029a94b",g={},v={RENDER_ELAPSED_TIME:"renderElapsedTime",VIMP_LOG:"vimpLog",VIMP_OVER_DURA:"VIMP_DURA",VIMP_OVER_TIME:"VIMP_OVER_TIME",TEMPLATE_ERROR:"ERR-TEMPLATE",PIXEL_ERROR:"ERR-PIXEL",JUMP_ERROR:"ERR-JUMP",DISPLAY_NONE:"DISPLAY_NONE",MEDIA_INFO:"MEDIA_INFO",JUMP:"Jump"};t.REPORT_EVENT=v,t.VIMP_EVT={REAL_VIMP:"REAL_VIMP",API_UN_SUP:"API_UN_SUP"};var h={DOM:"DOM",JS:"JS",CSS:"CSS",NET:"NET",PIXEL:"PIXEL"};t.ERROR_TYPE=h,t.REAL_VIMP_STATUS={UN_VIMP:0,VIMP:1,VIMP_OVER:2};try{window.megoaaEvent=null,window.megoaaEvent=new d.default,window.megoaaEvent.addListener("report",}catch(e){c(h.JS,"event module init err")}},163:function(e,t,i){unction r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length?arguments[2]:void 0,n=v.domain.globalDomain,n=(v.path.chooseApi,h({acid:e,cpid:t,dpid:0},n+v.path.chooseApi));d(n,function(e){l=1==e?1:2,i&&i(l)},function(){l=2,i&&i(l)})}function f(e){return(e=e&&e.indexOf("http")<0?"https://"+e:e)||v.domain.globalDomain}function g(e){window.navigator.sendBeacon?window.navigator.sendBeacon(e):c(e)}function o(e){var t=e.tn,i=e.mguid,n=e.sspuid,r=e.accountid,o=e.conversionName,a=e.conversionPrice,c=e.trackingid,d=e.adid,s=e.pixelid,l=e.dataResource,u=e.configResource,m=e.lpUrl,p=e.test,e=f(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"gtrace.mediago.io")+v.path.conversionTrack;g(h({tn:t||"",spd:n||"",mgd:i||"",ptd:d||"",tkd:c||"",acd:r||"",cvn:o||"",cvp:a||"",pxd:s||"",v:v.pixelVersion,dr:l||"",cr:u||"",lp:m||"",test:p||0},e))}function a(e){var t=f("gtrace.mediago.io")+v.path.gtmCvTrack+"?pixelV=".concat(v.pixelVersion);s(t,{tn:e.tn||"",spd:e.sspuid||"",mgd:e.mguid||"",ptd:e.adid||"",tkd:e.trackingid||"",acd:e.accountid||"",cpid:e.companyId||"",pxd:e.pixelid||"",cvn:e.conversionName||"",cval:e.value||"",ctype:+e.ctype||0,imtcv:e.imtcv||!1,v:v.pixelVersion,cr:e.configResource||"",lp:e.lpUrl||"",cur:e.currency?e.currency+"":"USD",list:e.list,qword:e.qword||"",ptype:0===e.ptype||"0"===e.ptype?0:+e.ptype||99,category:e.category?e.category+"":"",prid:e.prid?e.prid+"":"",orid:e.orid?e.orid+"":"",csid:e.csid?e.csid+"":"",seid:e.seid?e.seid+"":"",plid:0,ext:{id_source:e.dataResource||""},test:e.test})}Object.defineProperty(t,"__esModule",{value:!0}),t.getApiDomain=f,t.initCvApiFromS=r,t.track=g,t.trackConversion=o,t.trackCvApiByServer=function t(i){2!=l?1!=l?r(i.accountid,i.companyId,function(e){1!=e&&2!=e&&(e=2),t(i)}):a(n({},i,{value:i.value||i.conversionPrice})):o(i)},t.trackEcCv=a,t.trackLog=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.url&&delete e.url;e=h(e,v.url.track);c(e)},t.trackPageview=function(e){var t=e.tn,i=e.mguid,n=e.sspuid,r=e.accountid,o=e.companyId,a=e.trackingid,c=e.adid,e=(e.test,f(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"gtrace.mediago.io")+v.path.pageviewTrack);g(h({tn:t||"",spd:n||"",mgd:i||"",ptd:c||"",tkd:a||"",acd:r||"",cpid:o||"",v:v.pixelVersion},e))},t.trackReach=function(e){var t=e.tn,i=e.mguid,n=e.trackingid,e=e.ext,e=h({app:"LandingPage",tn:t,trackingid:n||"",mguid:i||"",ext:e},v.url.commonLog);c(e)},t.trackTimeLog=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.url&&delete e.url;var t=f(""),t=h(e,t+v.path.timeCost);window.navigator.sendBeacon?window.navigator.sendBeacon(t):d(t)};var v=i(824).default,i=i(367),h=i.getUrlStr,c=i.trackByImage,d=i.getReq,s=i.postReq,l=((0,i.getUrlParams)(window.location.href).mediago_test,0)},367:function(e,t,i){unction a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if("object"!==o(e))return t;var i=function(e){for(var t,i=[],n=0,r=Object.keys(e);n<r.length;n++)t=r[n],i.push("".concat(t,"=").concat(e[t]));return i}(e).join("&"),n=t.indexOf("#"),r=t,e="";return-1!==n&&(r=t.slice(0,n),e=t.slice(n)),i&&(r&&-1!==r.indexOf("?")?r+="&"+i:r+="?"+i),r+e}function n(e,t,i,n,r){var t=1<arguments.length&&void 0!==t?t:"POST",i=2<arguments.length?i:void 0,o=3<arguments.length?n:void 0,a=4<arguments.length?r:void 0,c=window.XMLHttpRequest?new XMLHttpRequest:window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):void 0;c&&(c.onerror=function(){a&&a()},c.ontimeout=o&&(c.onreadystatechange=),"withCredentials"in c?(c.withCredentials=!0,c.open(t,e,!0),"POST"==t?(c.setRequestHeader("Content-Type","application/json"),c.send(JSON.stringify(i))):c.send()):window.XDomainRequest&&void 0!==window.XDomainRequest?((c=new window.XDomainRequest).withCredentials=!0,c.open(t,e),c.send(JSON.stringify(i))):c=null}function r(e,t){var i=e.acid,n=e.cpid,r=e.conversionType,o=e.name,e="";return o?e="cvn_".concat(o):r&&(e="cvt_".concat(r)),[d,i||"cp_".concat(n),t,e].join("_")}Object.defineProperty(t,"__esModule",{value:!0}),t.ArrayFrom=function(t){if(Array.from)return Array.from(t);var i=null;try{i=Array.prototype.slice.call(t,0)}catch(e){for(var i=[],n=0;n<t.length;n++)i[n]=t[n]}return i},t.addIframe=void 0,t.appendStyleText=function(){},t.checkCvReported=function(e,t){e=r(e,t);return!(!(!l||s.get(e))||!t)},t.getBrowser=function(){return navigator.userAgent||navigator.vendor||window.opera,-1==(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?-1==navigator.userAgent.indexOf("Chrome")?-1==navigator.userAgent.indexOf("Safari")?-1==navigator.userAgent.indexOf("Firefox")?-1!=navigator.userAgent.indexOf("MSIE")||1==!!document.documentMode?"IE":"unknown":"Firefox":"Safari":"Chrome":"Opera"},t.getConnectionType=function(){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;return e?{cType:e.type||"",cEffectiveType:e.effectiveType||"",cDownlinkMax:e.downlinkMax||""}:{}},t.getCvTrackedKey=r,t.getDiscoveryParam=function(t,e){var i={};try{var n="",r=[];Object.keys(t).forEach(;for(var o=0,a=r[e[0]].length;o<a;o++)e.forEach(function(e){o<r[e].length&&(n+=r[e].charAt(o))});i=JSON.parse(atob(decodeURIComponent(n)))}catch(t){i={}}return i},t.getDomain=function(e){var t="";return(t=e?t:window.location.hostname||window.document.domain||"")||(e=(e=e||window.document.location.href).split("/"))&&e[2]&&(t=e[2]),t},t.getPerformanceTiming=function(){var e=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance;if(e){var t=e.timing,i={};return i.t=t,i.timeOrigin=e.timeOrigin,i.loadPage=t.loadEventEnd-t.navigationStart,i.domReady=t.domComplete-t.responseEnd,i.redirect=t.redirectEnd-t.redirectStart,i.lookupDomain=t.domainLookupEnd-t.domainLookupStart,i.ttfb=t.responseStart-t.navigationStart,i.request=t.responseEnd-t.requestStart,i.loadEvent=t.loadEventEnd-t.loadEventStart,i.appcache=t.domainLookupStart-t.fetchStart,i.unloadEvent=t.unloadEventEnd-t.unloadEventStart,i.connect=t.connectEnd-t.connectStart,i}},t.getPlatform=function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad/.test(e)&&!window.MSStream?"iOS iPad":/iPhone/.test(e)&&!window.MSStream?"iOS iPhone":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS iPod":"PC"},t.getProperty=function(e){for(var t=e,i=arguments.length,n=Array(1<i?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o,a=0,c=n;a<c.length;a++){if(o=c[a],!t||!t[o])return"";t=t[o]}return t},t.getReq=function(e,t,i){n(e,"GET",{},t,i)},t.getUrlParams=function(e){e=/^[^?]*\?(.*)$/.exec(e);if(e&&e[1]){e=e[1];return(e=0<=e.indexOf("#")?e.split("#")[0]:e).split("&").reduce(function(e,t){var i,n,t=t.split("=");if(t&&t[0]&&t[1]&&(i=t[0],n=t[1]),void 0===e[i]){if("null"==n||null==n)return e;if("string"==typeof n&&0<=n.indexOf("%"))return e;e[i]=decodeURIComponent(n)}return e},{})}return{}},t.getUrlStr=a,t.isIE=function(){var e=navigator.userAgent,t=-1<e.indexOf("compatible")&&-1<e.indexOf("MSIE"),i=-1<e.indexOf("Edge")&&!t,n=-1<e.indexOf("Trident")&&-1<e.indexOf("rv:11.0");if(t){/MSIE (\d+\.\d+);/.test(e);parseFloat(RegExp.$1);return!0}return!i&&!!n},t.isMobileAndTablet=t.jsonP=function(e){if(e&&e.url){var t=document.getElementsByTagName("head")[0],i=document.createElement("script"),n=e.data||{},r=e.url,o=e.callback,a="mmgg_".concat((new Date).getTime().toString(),"_").concat(Math.floor(900*Math.random()+100));n.mcb=a;var c,d=[];for(c in n)d.push(encodeURIComponent(c)+"="+encodeURIComponent(n[c]));r=0<r.indexOf("?")?r+"&":r+"?",r+=d.join("&"),i.src=r,window[a]=function(e){o&&o(e),t.removeChild(i),delete window[a]},i.onerror=function(){o&&o({error:"error"}),t.removeChild(i),window[a]&&delete window[a]},i.type="text/javascript",t.appendChild(i)}},t.post=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},n=new XMLHttpRequest;n.onreadystatechange=n.open("POST",e,!0),n.send(t)},t.postReq=function(e,t,i){window.navigator.sendBeacon?window.navigator.sendBeacon(e,JSON.stringify(t)):n(e,"POST",t,i)},t.trackByImage=function(e){var t=new Image;t.src=e,t.style.display="none",t.style.visibility="hidden",t.width=0,t.height=0,document.body.appendChild(t)};var c,d=i(824).default.keyCv,s=i(314).Z,l=s.available(),i=(c=document.getElementsByTagName("body")[0]||document.documentElement,function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=document.createElement("iframe");n&&r.setAttribute("sandbox",n),r.style.display="none",r.src=a(t,e),r.onload=c.appendChild(r)});t.addIframe=i},631:function(e){e.exports=},r={};!function(){ion b(e,t){if(e){var i=s(),n=i.mguid,r=i.trackingid,o=i.apiDomain,a=i.sessionUid,i={};return i.mguid=n,i.sessionUid=a,i.sspuid=e.uid,i.trackingid=e.trackingid||e.token||r,i.tn=e.tn||ee,i.accountid=e.acid,i.cpid=e.cpid,i.adid=e.offerid,i.configResource=e.configResource,i.apiDomain=e.apd||o,i.dataResource=t,i}return{}}function t(){var t,e,i,n;w||(w=!0,window._mediago_pixel_status=!0,(i=document.referrer)&&(/\/api\/bidder\/track\?tn=/.test(i)||/\/ju\/ic\?.*tn=.*trackingid=.*/.test(i))?(e=j.getUrlParams(i))&&e.trackingid&&e.tn&&(Z=!0,e.apd=j.getDomain(i),e.cpid=se||"",H=b(e,G.REFERER)):i&&/\/popin_redirect\/redirect\?/.test(i)?(t=j.getUrlParams(i))&&t.token&&(Z=!0,t.apd="trace.popin.cc",t.cpid=se||"",H=b(t,G.REFERER),setTimeout(function(){var e;j.addIframe("https://d2cli4kgl5uxre.cloudfront.net/js/h/setval.html",(r(e={},C,t.apd),r(e,U,ae||H.trackingid),r(e,L,H.mguid),r(e,"uid",H.sspuid),e))},0)):(n=V?Y.get(q.keyPixelParam,!0):{})&&n.trackingid&&n.tn?(n.apd=n.apiDomain,H=b(n,n.dataResource)):ae&&(H=b({trackingid:ae,token:ae,tn:le,acid:de,cpid:se,configResource:me,apd:ce},ue)),V&&H.trackingid&&(Y.set(q.keyPixelParam,H,$),Y.set(q.keyPixelPv,1,$),H.accountid&&Y.set(q.keyAcidFromLP,H.accountid),H.cpid&&Y.set(q.keyCpidFromLP,H.cpid)),u&&H.trackingid&&(e={},i=j.getDomain(),n=l.secondLevelDomainAvailable(i),e.Domain=n||"."+i,l.set(a,H.trackingid,e)),function e(){o(),setTimeout(function(){e()},500)}())}function d(){for(var e=document.referrer,t=[/\/api\/bidder\/track\?tn=/,/\/ju\/ic\?.*tn=.*trackingid=.*/,/\/popin_redirect\/redirect\?/],i=0;i<t.length;i++)if(t[i].test(e))return 1}function o(){try{if(W||Z&&H){ae&&H.trackingid!==ae&&(H={trackingid:ae,accountid:de||"",companyId:se||"",mguid:oe||H.mguid||"",apiDomain:ce||"",tn:le||"",configResource:z.LP_URL});for(var e=q.pixelArr;window[e]&&window[e].length;){var t,i=window[e].shift(),n=ae||H.trackingid||pe;if(i&&i.type)){i.params=i.params||{};var r=i.acid?i.acid===(de||H.accountid)?ue||H.dataResource:G.ACTDIFF:i.cpid===(se||H.companyId)?ue||H.dataResource:G.ACTDIFF,o={tn:le||H.tn||ee,sspuid:H.sspuid,mguid:oe||H.mguid,accountid:i.acid||"",companyId:i.cpid||"",ctype:q.conversionTypeMap[i.conversionType],imtcv:!!i.importantInTotalConversion,trackingid:n,adid:H.adid,dataResource:r,configResource:me||H.configResource||"",lpUrl:encodeURIComponent(location.href),list:i.params&&i.params.list?i.params.list.map(function(e){return{id:(e.id||e.item_id)+"",item_id:(e.id||e.item_id)+"",price:e.price+"",quantity:+e.quantity||1}}):[],currency:i.params.currency,value:i.params.value+"",qword:i.params.query,ptype:i.params.pageType,category:i.params.category,prid:i.params.productId,orid:i.params.orderId,csid:i.params.customerId,seid:S(),test:re||0};B(o),i.acid&&O(i.acid)}else if(i&&"event"===i.type&&i.cpid){if(i.params=i.params||{},j.checkCvReported(i,n))return;var a,c=i.cpid===(se||H.companyId)?ue||H.dataResource:G.ACTDIFF,d={tn:le||H.tn||ee,sspuid:H.sspuid,mguid:oe||H.mguid,companyId:i.cpid||"",pixelid:i.pxd,conversionName:encodeURIComponent(i.name),trackingid:n,adid:H.adid,dataResource:c,configResource:me||H.configResource||"",lpUrl:encodeURIComponent(location.href),currency:i.params.currency,value:i.params.value+"",seid:S(),test:re||0};B(d),i.acid&&O(i.acid),V&&(a=j.getCvTrackedKey(i,n),Y.set(a,1,$))}else if(i&&"event"===i.type)if("pageview"===i.name)V&&!Y.get(q.keyPixelPv)||("a.popin.cc"===(t=ce||H.apiDomain||te)&&(t="trace.popin.cc"),J({tn:le||H.tn||ee,sspuid:H.sspuid,mguid:oe||H.mguid,accountid:i.acid||de||H.accountid||Y.get(q.keyAcidFromLP),companyId:i.cpid||se||H.companyId||Y.get(q.keyCpidFromLP),trackingid:n,adid:H.adid,test:re||0},t));else{if(j.checkCvReported(i,n))return;var s=i.acid===(de||H.accountid)?ue||H.dataResource:G.ACTDIFF,l={tn:le||H.tn||ee,sspuid:H.sspuid,mguid:oe||H.mguid,accountid:i.acid||de||H.accountid,pixelid:i.pxd,conversionName:encodeURIComponent(i.name),trackingid:n,adid:H.adid,dataResource:s,configResource:me||H.configResource||"",lpUrl:encodeURIComponent(location.href),test:re||0},u=+i.conversion_price;u&&(l.conversionPrice=u);var m,p=ce||H.apiDomain||te;"a.popin.cc"===p&&(p="trace.popin.cc"),i.name&&X(l,p),i.acid&&O(i.acid),V&&(m=j.getCvTrackedKey(i,n),Y.set(m,1,$))}else i&&"nextjump"===i.type&&function(e,t){var i,n=e.URL_KEY_MGUID,r=e.URL_KEY_TRACKINGID,o=e.URL_KEY_APIDOMAIN,a=e.URL_KEY_ACCOUNTID,c=e.URL_KEY_TOKEN,d=e.mguid,s=e.trackingid,l=e.apidomain,u=e.acid,m=e.tn,p=e.dataResource,f=e.configResource,g=t.link,e=t.tagAttr;r&&s&&f!=z.LAST_CLICK_STORAGE&&f!=z.LAST_CLICK_COOKIE&&(t=[],e&&(t=[].concat(I(t),I(Array.apply(null,document.querySelectorAll("*[".concat(e,"]")))))),g&&(g=g.filter(,e=Array.apply(null,document.getElementsByTagName("a")).reduce(function(e,t){for(var i in g){var n=g[i],i=t.getAttribute("href");if(i&&-1!==i.indexOf(n)){e.push(t);break}}return e},[]),t=[].concat(I(t),I(e))),i={},n&&d&&(i[n]=d),o&&l&&(i[o]=l),r&&s&&(i[r]=s),a&&u&&(i[a]=u),c&&m&&(i[c]=m),N&&p&&(i[N]=p),K&&f&&(i[K]=f),t.length&&t.map(function(e){var t=e.getAttribute("href");t&&e.setAttribute("href",j.getUrlStr(i,t))}))}({URL_KEY_MGUID:L,URL_KEY_TRACKINGID:U,URL_KEY_APIDOMAIN:C,URL_KEY_ACCOUNTID:D,URL_KEY_TOKEN:M,mguid:oe||H.mguid,trackingid:ae||H.trackingid||pe,apidomain:ce||H.apiDomain,acid:i.acid||de||H.accountid,companyId:i.cpid||se||H.companyId,cpid:i.cpid||se||H.companyId,tn:le||H.tn,dataResource:ue||H.dataResource||"",configResource:me||H.configResource||""},i)}}else if(!ie&&V){var f=q.pixelArr,g=de||"",v=se||"",g=Y.get(q.keyAcidFromLP),v=Y.get(q.keyCpidFromLP);if(g||v||window[f]){var h=[],y=[];if(window[f])for(var _,w=window[f].length-1;0<w;w--)(_=window[f][w]).acid?(g=_.acid,h.push(g)):_.cpid&&(v=_.cpid,h.push(v),y.push(v));var k={};k[L]=oe||"",k.trackingid=ae||pe||"",Q?k.trackingid||1==h.length?(1==y.length?k.cpid=y[0]:k.acid=h[0],j.addIframe(q.url.val,k,A(k.acid,k.cpid,h),"allow-scripts allow-same-origin")):k.trackingid||1!=y.length?j.addIframe(q.url.val,{},A(g,v,h),"allow-scripts allow-same-origin"):(k.cpid=y[0],j.addIframe(q.url.val,k,A("",k.cpid,h),"allow-scripts allow-same-origin")):(E=g,R=h,window.addEventListener("message",function(e){if("https://d2cli4kgl5uxre.cloudfront.net"===e.origin)try{var t,i=JSON.parse(e.data);i&&(t=i[F],x(t),P(t,{}),H=b(i,G.IFRAME)),H&&(Z=!V||(R.indexOf(H.accountid)<0&&(H.dataResource=G.ACTDIFF),(H=E&&R.indexOf(H.accountid)<0?Y.get(q.keyPixelParam,!0):H)?(Y.set(q.keyPixelParam,H,$),Y.set(q.keyPixelPv,1,$),!0):(H={},!(W=!0))))}catch(e){(0,T.reportPixelError)("addMessageListener error:"+e.message),W=!0}},!1),j.addIframe(q.url.val,{postM:1},"allow-scripts allow-same-origin")),ie=!0}}}catch(e){(0,T.reportPixelError)("checkPixelArr error:"+e.message)}var E,R}function A(c,d,s){return function o(a){return function(e){try{if(1===a){var t,i;if(a++,n=e&&e.contentWindow&&e.contentWindow.name){try{var n,r=(n=JSON.parse(n))[F];x(r),P(r,{})}catch(e){(0,T.reportPixelError)("iframe val parse error:"+e.message)}H=b(n,G.IFRAME)}H&&(Z=!V||(t=s.indexOf(H.accountid)<0,i=s.indexOf(H.cpid)<0,t&&i&&(H.dataResource=G.ACTDIFF,c&&d&&(H=Y.get(q.keyPixelParam,!0))),H?(Y.set(q.keyPixelParam,H,$),Y.set(q.keyPixelPv,1,$),!0):(H={},!(W=!0))))}else 0===a&&(a=1,setTimeout(function(){try{!ne&&!R&&e&&e.contentWindow&&e.contentWindow.location.replace(Q)}catch(e){(0,T.reportPixelError)("iframe origin jump error:"+e.message)}j.isIE()?setTimeout(function(){o(a)()},2e3):setTimeout(3e3)},50))}catch(e){W=!0,(0,T.reportPixelError)("getIframeData error:"+e.message)}}}(0)}function g(e){if("string"==typeof e&&""!=e&&(!location.href||e.split("?")[0]!==location.href.split("?")[0])){if(e.indexOf("//")<0&&e.indexOf("base64")<0)return 1;e.split("//")[0]||(e=window.document.location.protocol+e);var t=window.location.host,i=window.document.location.protocol+"//"+t,t=i.length;return e&&1<e.length-t&&e.slice(0,t)===i}}function O(e){try{if(!e&&!d())return;e=e||H.acid||de;var t=ce||H.apiDomain||te,t=p(t),i=encodeURIComponent(location.origin||"https://".concat(location.host)),n="".concat(t).concat(q.path.cs);j.jsonP({url:n,data:{acid:e,dm:i},callback:function(e){try{if(!e||!e.data)return;(e.data.list||[]).forEach(}catch(e){(0,T.reportPixelError)("cookieSync error:"+e.message)}}})}catch(e){(0,T.reportPixelError)("cookieSync 跨域 error:"+e.message)}}var T=he(418),s=he(955).getMediaGoUid,S=he(955).getSessionUid,P=he(955).setMguidCookie,x=he(955).setMguidStorage,C=he(955).URL_KEY_APIDOMAIN,U=he(955).URL_KEY_TRACKINGID,L=he(955).URL_KEY_MGUID,D=he(955).URL_KEY_ACCOUNTID,e=he(955).URL_KEY_COMPANYID,M=he(955).URL_KEY_TOKEN,N=he(955).URL_KEY_DATA_RESOURCE,K=he(955).URL_KEY_CONFIG_RESOURCE,a=he(955).COOKIE_KEY_TRACKINGID,F=he(955).LS_KEY_MGUID,j=he(367),Y=he(314).Z,V=Y.available(),l=he(868).Z,u=l.available(),q=he(824).default,G=q.CV_DATA_RESOURCE,z=q.IFRAME_DATA_RESOUCE,i=he(163),J=i.trackPageview,m=i.trackReach,B=i.trackEcCv,p=i.getApiDomain,v=i.initCvApiFromS,X=i.trackCvApiByServer,Z=!1,H={},W=!1,$=2592e6,Q=function(){var e=window.location.host;if("www.gu-ecom.com"===e)return window.document.location.protocol+"//"+e;if(document.images){var t,i=f(j.ArrayFrom(document.images));try{for(i.s();!(t=i.n()).done;){var n=t.value.src;if(g(n))return n}}catch(e){i.e(e)}finally{i.f()}}if(document.styleSheets){var r,o=f(j.ArrayFrom(document.styleSheets));try{for(o.s();!(r=o.n()).done;){var a=r.value.href;if(g(a))return a}}catch(e){o.e(e)}finally{o.f()}}if(document.scripts){var c,d=f(j.ArrayFrom(document.scripts));try{for(d.s();!(c=d.n()).done;){var s=c.value.src;if(g(s))return s}}catch(e){d.e(e)}finally{d.f()}}if(document.links){var l,u=f(j.ArrayFrom(document.links));try{for(u.s();!(l=u.n()).done;){var m=l.value;if("A"!=m.tagName&&"A"!=m.nodeName){var p=m.href;if(g(p))return p}}}catch(e){u.e(e)}finally{u.f()}}return""}(),ee="f9f2b1ef23fe2759c2cad0953029a94b",te="gtrace.mediago.io",h=["popinpm1","popinpm2","popinpm3","popinpm4"],y=["ebisOther1","ebisOther2","ebisOther3","ebisOther4","ebisOther5"],_=j.getDiscoveryParam,ie=!1,w=!1,k=j.getUrlParams(window.location.href),i=Object.keys(k);0<=i.indexOf(h[0])?(h=_(k,h),k[U]=k[U]||h.token):0<=i.indexOf(y[0])&&(y=_(k,y),k[U]=k[U]||y.token);var E,R,ne,re=+k.mediago_test||0,oe=k[L]||"",ae=k[U]||"",ce=k[C]||"",de=k[D]||"",se=k[e]||"",le=k[M]||"",ue=k[N]||(ae?G.URL:""),me=k[K]||"",pe=u&&l.get(a);v(de){}),(0,T.setCommonReportDataSimple)({tn:le||ee,trackingid:ae});try{E=(self.frameElement&&"IFRAME"==self.frameElement.tagName||(window.frames||[]).length!=(parent.frames||[]).length||self!=top)&&parent&&parent.location&&parent.location.href,R=E&&location&&location.href&&E.split("?")[0]===location.href.split("?")[0],ne=top!=window&&parent!=window&&top!=parent}catch(e){(0,T.reportPixelError)("get href error:"+e.message)}var fe,ge,ve=(new Date).getTime();(function(){try{if(["21180"].indexOf(de)<0||m({tn:le||params.tn||ee,mguid:oe||params.mguid,trackingid:ae||params.trackingid,ext:JSON.stringify({name:"utmSource",acid:de,lpUrl:encodeURIComponent(location.href),pixelLoadedTime:ve,curTime:(new Date).getTime(),pageNaviTime:performance.timing.navigationStart,performanceT:performance.now()})}),!d())return;var e=j.getUrlParams(document.referrer);t=e,m({tn:le||t.tn||ee,mguid:oe||t.mguid,trackingid:ae||t.trackingid,ext:JSON.stringify({name:"reach",acid:de,cpid:se,lpUrl:encodeURIComponent(location.href),pixelLoadedTime:ve,curTime:(new Date).getTime(),pageNaviTime:performance.timing.navigationStart,performanceT:performance.now(),offset:(new Date).getTimezoneOffset()/60,timeZone:Intl&&Intl.DateTimeFormat&&Intl.DateTimeFormat().resolvedOptions&&Intl.DateTimeFormat().resolvedOptions().timeZone})}),n=e,r=window.performance.timing.domLoading,function t(i){setTimeout(function(){m({tn:le||n.tn||ee,mguid:oe||n.mguid,trackingid:ae||n.trackingid,ext:JSON.stringify({pageT:(new Date).getTime()-r,timeInterval:i,pixelLoadedTime:ve,startTime:performance.timing.domLoading,curTime:(new Date).getTime(),pageNaviTime:performance.timing.navigationStart,performanceT:performance.now(),offset:(new Date).getTimezoneOffset()/60,timeZone:Intl&&Intl.DateTimeFormat&&Intl.DateTimeFormat().resolvedOptions&&Intl.DateTimeFormat().resolvedOptions().timeZone})});var e=o[++a];e&&t(e)},1e3*i)}((o=[1,3,5,10,15,30,60,60,60,60])[a=0])}catch(e){(0,T.reportPixelError)("reportCommonData error:"+e.message)}var n,r,o,a,t})(),fe=function(){t()},ge=window.onload,window.onload="function"==typeof window.onl()}:fe,function e(){-1!==["complete","interactive"].indexOf(window.document.readyState)&&t(),w||setTime()},500)}(),O()}()}();