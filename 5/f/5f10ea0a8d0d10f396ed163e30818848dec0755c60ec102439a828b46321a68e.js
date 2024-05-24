var pianoAnalytics=function(j){"use strict";var H={site:"",collectDomain:"",path:"event",visitorStorageMode:"fixed",storageLifetimeVisitor:395,storageLifetimeUser:395,storageLifetimePrivacy:395,privacyDefaultMode:"optin",sendEventWhenOptout:!0,isVisitorClientSide:!0,enableCallbacks:!0,cookieDomain:"",cookieSecure:!0,cookiePath:"/",cookieSameSite:"lax",encodeStorageBase64:!1,addEventURL:"withoutQS",clickAutoManagement:!0,enableUTMTracking:!0,campaignPrefix:["at_"],storageVisitor:"pa_vid",storageUser:"pa_user",version:"6.14.0",minHeartbeat:5,minBufferingHeartbeat:1,queueVarName:"_paq",globalVarName:"pa",enableAutomaticPageRefresh:!0,allowHighEntropyClientHints:!0,sendEmptyProperties:!0,enableExtendedOptout:!1,privacy:{storageKey:"pa_privacy",legacyKeys:{pa_vid:!0,pa_privacy:!0,atuserid:!0},storageKeys:{pa_user:!0},modes:{optin:{name:"optin",properties:{include:{visitor_privacy_consent:!0,visitor_privacy_mode:"optin"},allowed:{"*":{"*":!0}},forbidden:{"*":{}}},storage:{allowed:{"*":!0},forbidden:{}},events:{allowed:{"*":!0},forbidden:{}}},optout:{name:"optout",visitorId:"OPT-OUT",properties:{include:{visitor_privacy_consent:!1,visitor_privacy_mode:"optout"},allowed:{"*":{}},forbidden:{"*":{}}},storage:{allowed:{pa_vid:!0,pa_privacy:!0},forbidden:{}},events:{allowed:{"*":!0},forbidden:{}}},"no-consent":{name:"no-consent",visitorId:"no-consent",properties:{include:{visitor_privacy_consent:!1,visitor_privacy_mode:"no-consent"},allowed:{"*":{}},forbidden:{"*":{}}},storage:{allowed:{},forbidden:{"*":!0}},events:{allowed:{"*":!0},forbidden:{}}},"no-storage":{name:"no-storage",visitorId:"no-storage",properties:{include:{visitor_privacy_consent:!1,visitor_privacy_mode:"no-storage"},allowed:{"*":{"*":!0}},forbidden:{"*":{}}},storage:{allowed:{},forbidden:{"*":!0}},events:{allowed:{"*":!0},forbidden:{}}},exempt:{name:"exempt",properties:{include:{visitor_privacy_consent:!1,visitor_privacy_mode:"exempt"},allowed:{"*":{app_crash:!0,app_crash_class:!0,app_crash_screen:!0,app_version:!0,browser:!0,browser_cookie_acceptance:!0,browser_group:!0,browser_version:!0,click:!0,click_chapter1:!0,click_chapter2:!0,click_chapter3:!0,click_full_name:!0,connection_monitor:!0,connection_organisation:!0,cookie_creation_date:!0,date:!0,date_day:!0,date_daynumber:!0,date_month:!0,date_monthnumber:!0,date_week:!0,date_year:!0,date_yearofweek:!0,device_brand:!0,device_display_height:!0,device_display_width:!0,device_name:!0,device_name_tech:!0,device_screen_diagonal:!0,device_screen_height:!0,device_screen_width:!0,device_type:!0,event_collection_platform:!0,event_collection_version:!0,event_hour:!0,event_id:!0,event_minute:!0,event_position:!0,event_second:!0,event_time:!0,event_time_utc:!0,event_url:!0,event_url_domain:!0,event_url_full:!0,exclusion_cause:!0,exclusion_type:!0,geo_city:!0,geo_continent:!0,geo_country:!0,geo_metro:!0,geo_region:!0,goal_type:!0,hit_time_utc:!0,os:!0,os_group:!0,os_version:!0,os_version_name:!0,page:!0,page_chapter1:!0,page_chapter2:!0,page_chapter3:!0,page_duration:!0,page_full_name:!0,page_position:!0,page_title_html:!0,page_url:!0,pageview_id:!0,previous_url:!0,privacy_status:!0,site:!0,site_env:!0,site_id:!0,site_platform:!0,src:!0,src_detail:!0,src_direct_access:!0,src_organic:!0,src_organic_detail:!0,src_portal_domain:!0,src_portal_site:!0,src_portal_site_id:!0,src_portal_url:!0,src_referrer_site_domain:!0,src_referrer_site_url:!0,src_referrer_url:!0,src_se:!0,src_se_category:!0,src_se_country:!0,src_type:!0,src_url:!0,src_url_domain:!0,src_webmail:!0}},forbidden:{"*":{}}},storage:{allowed:{pa_vid:!0,pa_privacy:!0,atuserid:!0},forbidden:{}},events:{allowed:{"click.exit":!0,"click.navigation":!0,"click.download":!0,"click.action":!0,"page.display":!0},forbidden:{}}},"*":{properties:{allowed:{"*":{connection_type:!0,device_timestamp_utc:!0,visitor_privacy_consent:!0,visitor_privacy_mode:!0,"ch_ua*":!0}},forbidden:{"*":{}}},storage:{allowed:{},forbidden:{}},events:{allowed:{},forbidden:{}}}}}};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n,r,o,i,a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return r=!(n=!0),{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){r=!0,o=e},f:function(){try{n||null==a.return||a.return()}finally{if(r)throw o}}};if(Array.isArray(e)||(a=function(e,t){var n;if(e)return"string"==typeof e?U(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}(e))||t&&e&&"number"==typeof e.length)return a&&(e=a),i=0,{s:t=function(){},n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var S=function e(t,n){if("object"!==c(t)||null===t||t instanceof Date)return t;var r,o=new t.constructor;for(r in t)!Object.prototype.hasOwnProperty.call(t,r)||void 0===r||n&&void 0===t[r]||(o[r]=e(t[r]));return o};var B,R={post:function(e,t){var n=!1;!(n=window.navigator&&"function"==typeof window.navigator.sendBeacon?window.navigator.sendBeacon(e,t):n)&&window.fetch&&window.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain;charset=UTF-8"}})}},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",V={encodeURIComponent:window.encodeURIComponent,utf8:{encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):t=127<r&&r<2048?(t+=String.fromCharCode(r>>6|192))+String.fromCharCode(63&r|128):(t=(t+=String.fromCharCode(r>>12|224))+String.fromCharCode(r>>6&63|128))+String.fromCharCode(63&r|128)}return t},decode:function(e){var t,n,r,o="",i=0;for(t=0;i<e.length;)(r=e.charCodeAt(i))<128?(o+=String.fromCharCode(r),i++):191<r&&r<224?(t=e.charCodeAt(i+1),o+=String.fromCharCode((31&r)<<6|63&t),i+=2):(t=e.charCodeAt(i+1),n=e.charCodeAt(i+2),o+=String.fromCharCode((15&r)<<12|(63&t)<<6|63&n),i+=3);return o}},base64:{encode:function(e){var t,n,r,o,i,a,s="",u=0;for(e=V.utf8.encode(e);u<e.length;)r=(t=e.charCodeAt(u++))>>2,o=(3&t)<<4|(t=e.charCodeAt(u++))>>4,i=(15&t)<<2|(n=e.charCodeAt(u++))>>6,a=63&n,isNaN(t)?i=a=64:isNaN(n)&&(a=64),s=s+l.charAt(r)+l.charAt(o)+l.charAt(i)+l.charAt(a);return s},decode:function(e){var t,n,r,o,i,a,s="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<e.length;)r=l.indexOf(e.charAt(u++)),t=(15&(o=l.indexOf(e.charAt(u++))))<<4|(i=l.indexOf(e.charAt(u++)))>>2,n=(3&i)<<6|(a=l.indexOf(e.charAt(u++))),s+=String.fromCharCode(r<<2|o>>4),64!=i&&(s+=String.fromCharCode(t)),64!=a&&(s+=String.fromCharCode(n));return s=V.utf8.decode(s)}}},K=(B=window.crypto||window.msCrypto,{v4:function(){try{if(null!==B&&"object"===c(B))return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^B.getRandomValues(new Uint32Array(1))[0]&15>>e/4).toString(16)})}catch(e){console.error(e)}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}});function Y(e){var n=e;function r(e,t){null!==t&&""!==t&&void 0!==t&&(n[e]=t)}return{setConfiguration:r,setConfigurations:function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r(t,e[t])},getConfiguration:function(e){return void 0!==n[e]?S(n[e]):null},cloneData:function(){return S(n)},deleteProperty:function(e){delete n[e]}}}function q(t){var n=[];return{push:function(e){n.push(e),1===n.length&&t[e[0]].apply(t,e.slice(1))},next:function(){var e;n.shift(),0<n.length&&t[(e=n[0])[0]].apply(t,e.slice(1))}}}function F(i,e,t){this.properties=S(i._properties),this.addEventsProperty=function(e,t){if(i._privacy.call("isPropAllowed",e)){var n,r=b(this.events);try{for(r.s();!(n=r.n()).done;){var o=n.value;this.isPropertyAbsentForEvent(e,o)&&(o.data[e]=t)}}catch(e){r.e(e)}finally{r.f()}}},this.hasProperty=function(e){return Object.prototype.hasOwnProperty.call(this.properties,e)},this.getConfiguration=t.getConfiguration,this.setConfiguration=t.setConfiguration,this.options=e.options||{},this.visitorId=null,this.build={url:"",data:{}},this.events=e.events||[],this.isPropertyAbsentForEvent=function(e,t){if(void 0!==t.data[e])return!1;if(this.hasProperty(e)){if(void 0===this.properties[e].options.events)return!1;var n,r=b(this.properties[e].options.events);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(t.name===o||"*"===o.charAt(o.length-1)&&0===t.name.indexOf(o.substring(0,o.length-1)))return!1}}catch(e){r.e(e)}finally{r.f()}}return!0}}function w(e,t,n,r){!1!==r&&0<n.length&&"function"==typeof n[0]?n[0](e,t,n.slice(1)):e._queue.next()}function W(e,t,n){var r=t.getConfiguration("collectDomain"),o=r.startsWith("https://")||r.startsWith("http://")?"":"https://",o="".concat(o).concat(r,"/").concat(t.getConfiguration("path")),r="?s=".concat(t.getConfiguration("site")).concat(t.visitorId?"&idclient="+t.visitorId:"");t.build.url=o+r,t.build.data={events:t.events},w(e,t,n)}function J(e,t,n,r,o){var i,a=function(e,t,n){for(var r={},o=new RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?","g"),i=o.exec(t);null!==i;)0===i[1].indexOf(e)&&(r[n+i[1].substring(e.length)]=window.decodeURIComponent(i[2])),i=o.exec(t);return r}(r,n,o),s=!1;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&!t.properties[i]&&t.addEventsProperty(i,a[i],{persistent:!0}),s=!0;return s}function z(e,t,n){var r,o=document.location.href,i=b(t.getConfiguration("campaignPrefix"));try{for(i.s();!(r=i.n()).done;)if(J(0,t,o,r.value,"src_"))break}catch(e){i.e(e)}finally{i.f()}t.getConfiguration("enableUTMTracking")&&J(0,t,o,"utm_","utm_"),w(e,t,n)}function X(e){return 0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),Q(e)}var $,G,Z=function(e){function t(e){e&&r.setDate(r.getDate()+e)}var n,r=new Date;return e instanceof Date?r=e:"number"==typeof e?t(e):(n=e.days,e=e.minutes,t(n),e&&r.setMinutes(r.getMinutes()+e)),r},Q=function(t){t=t.replace(/\+/g," ").replace(/^\s+|\s+$/g,"");try{return decodeURIComponent(t)}catch(e){return t}},m=($="_cookie_test",G="https:"===document.location.protocol,{set:te,get:re,getNames:function(){var t=[];return ne(function(e){t.push(e)}),t},remove:oe,getTopLevelDomain:function(e){void 0===e&&(e=[]);var t=window.location.hostname.split("."),n=(new Date).getTime().toString(36)+Math.round(2147483647*Math.random()).toString(36),r=new Date;r.setSeconds(r.getSeconds()+30);for(var o=0;o<t.length;o++)try{var i=t.slice(-(o+1)).join(".");if(!e.includes(i)){te($,n,{expires:r,path:"/",domain:i,secure:G});var a=re($)===n;if(oe($,{path:"/",domain:i}),a)return i}}catch(e){}},__private__:{_generateCookieString:ee}});function ee(e,t,n){var r=(n=void 0===n?{}:n).path,o=n.domain,i=n.expires,a=n.secure,s=n.samesite,u=n.raw,n=n.priority;return(u?e:encodeURIComponent(e))+"="+(u?t:encodeURIComponent(t))+(i?"; expires=".concat(Z(i).toUTCString()):"")+(r?"; path=".concat(r):"")+(o?"; domain=".concat(o):"")+(a?"; secure":"")+(s?"boolean"==typeof s?"; sameSite":"; sameSite=".concat(s):"")+(n?"; priority=".concat(n):"")}function te(e,t,n,r){void 0===t||void 0!==r&&encodeURI(t).split(/%(?:u[\dA-F]{2})?[\dA-F]{2}|./).length-1>r||(document.cookie=ee(e,t,n))}function ne(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e(Q(r[0]),r[1]||""))return}}function re(n){var r=null,o={};return ne(function(e,t){if(n)return e===n&&(r=X(t),1);o[e]=X(t)}),n?r:o}function oe(e,t){te(e,"",Object.assign({},t,{expires:-1}))}t="_ls_ttl",ie=function(){try{var e=window.localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return null}},ae=function(e){try{Object.keys(e).length?window.localStorage.setItem(t,JSON.stringify(e)):window.localStorage.removeItem(t)}catch(e){}},ue();var t,ie,ae,se={get:function(e){var t;ue();try{return null!=(t=window.localStorage.getItem(e))?t:null}catch(e){return null}},set:function(e,t,n){if(r=e,n=(n=void 0===n?{}:n).expires,o=ie(),void 0===n?(null!=o&&o[r]&&(delete o[r],ae(o)),!0):(n=Z(n).getTime())>Date.now()&&((o=o||{})[r]=n.toString(36),ae(o),!0))try{window.localStorage.setItem(e,t)}catch(e){}var r,o},getNames:ce,remove:function(e){try{window.localStorage.removeItem(e)}catch(e){}ue()},expires:ue,__protected__:{get ttlName(){return t}}};function ue(){var n=ce(),r=ie(),o={};r&&(Object.keys(r).forEach(function(e){if(n.includes(e)){var t=r[e]?parseInt(r[e],36):null;if(!(t=t)||t>Date.now())o[e]=r[e];else try{window.localStorage.removeItem(e)}catch(e){}}}),JSON.stringify(r)!==JSON.stringify(o))&&ae(o)}function ce(){try{return Object.keys(window.localStorage)}catch(e){return[]}}function n(t,e){return{cookieName:e=void 0===e?"_pctx":e,readonly:!1,init:function(e){return null!=(e=null!=e?e:t)?e:null},refresh:function(e){return e},update:function(e){return e},set:function(e){return e},get:function(e){return e}}}function e(e){return y(y({},n(e)),{cookieName:null})}function le(e){return null==e}function de(){var t={};return{add:function(e){t[e]=!0},values:function(){return d(t)}}}function fe(n,r){var o,i=NaN,a=NaN;return function(e){var t=null==r?void 0:r();return e===a&&i===t||(i=t,o=n(a=e)),o}}function pe(n){var r;return function(e){var t=n();t!==r&&e(r=t)}}function ve(e){return _(e,function(e){return"CX"!==(null==e?void 0:e.type)})}function ge(e,t){return t({protect:!0}),v()}function he(n,r,o){var e=je().reduce(function(e,t){t=t.id;return e[t]=o(null==n?void 0:n[t],null==r?void 0:r[t],t),e},{});return De(e,r)?r:e}function me(e,t){return he(e,t,function(e,t,n){return e||t||Qe()[n]})}function ye(){return g().consent_modifiers||null}function _e(){return!!g().requireConsent}function be(e,t,n){return"".concat(e.join(", ")," ").concat(1<e.length?n:t)}var we,Ce,ke={get:function(e){try{return window.sessionStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{window.sessionStorage.setItem(e,t)}catch(e){}},getNames:function(){try{return Object.keys(window.sessionStorage)}catch(e){return[]}},remove:function(e){try{window.sessionStorage.removeItem(e)}catch(e){}}},y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Pe=n("anon"),d=function(e){return e?Object.keys(e):[]},p=function(e){return Array.isArray(e)},Oe=function(e){return!le(e)},a=function(e){return"object"===c(e)},f=function(e){return"string"==typeof e},v=function(){for(var e=(new Date).getTime().toString(36);e.length<16;)e+=Math.round(2147483647*Math.random()).toString(36);return e.substr(0,16)},_=function(n,t){return n&&d(n).filter(function(e){return t(n[e])}).reduce(function(e,t){return y(y({},e),((e={})[t]=n[t],e))},{})},Ae=function(o,i){return a(o)?d(o).reduce(function(e,t){var n=o[t],r=i[t],r=r&&r(n);return void 0!==r&&(e[t]=r),e},{}):o},Ee=function(e){return"true"===e||!0===e},o=function t(e,n){try{return e()}catch(e){return n?t(n):null}},xe=function(e,t){return void 0===t&&(t=!1),o(function(){return JSON.parse(e)},function(){return t?JSON.parse(window.atob(e)):null})||null},Se=function(e,t){void 0===t&&(t=!1);var n=JSON.stringify(e);return o(function(){return t?window.btoa(n):n})||n},De=function(t,n){var e,r;return t===n||(t&&n?(e=d(t),r=d(n),e.length===r.length&&!e.some(function(e){return t[e]!==n[e]})):null)},Me=y(y({},n(null)),{init:function(e){return ve(e||null)},refresh:ve,set:function(e,t){return null===e?null:_(y(y({},t),e),function(e){return null!==e})}}),Ie="pdl",g=function(){return window[Ie]||{}},Ne=y(y({},e()),{init:function(e,t){return t({protect:!0}),g().pageViewId||v()},refresh:ge,update:ge,set:function(e,t,n){return n({protect:!0}),e}}),Te=y(y({},n(null,"_pcid")),{init:function(e,t){return t({protect:!0}),e||v()},update:function(e,t){return t({protect:!0}),v()},set:function(e,t,n){return n({protect:!0}),e}}),i=["PA","DMP","COMPOSER","ID","VX","ESP","SOCIAL_FLOW","DL"].map(function(e,t){return{name:e,id:t}}),h=i.reduce(function(e,t,n){t=t.name;return y(y({},e),((e={})[t]=n,e[t.toLowerCase()]=n,e))},{}),Le=(h["social flow"]=h.SOCIAL_FLOW,h["Social Flow"]=h.SOCIAL_FLOW,pe(function(){var e;return null==(e=At(g().consent))?void 0:e.products})),je=(we=i,function(){return Le(function(t){we=t?i.filter(function(e){return t.includes(e.name)||"DL"===e.name}):i}),we}),He=function(e){var t=Number(e);return Number.isNaN(t)?null!=(e=h[e.toLowerCase()])?e:null:t<i.length?t:null},Ue=function(r,o){return d(r).reduce(function(e,t){var n=i[Number(t)].name,t=r[t];return e[n]=o?o(t,n):t,e},{})},Be="opt-in",Re="essential",Ve="opt-out",Ke="custom",Ye=[Be,Re,Ve],qe=Ye.concat(Ke),Fe=qe.reduce(function(e,t,n){return y(y({},e),((e={})[n]=t,e))},{}),We=[Be,Ke,Re,Ve],Je=function(e,t){e=We.indexOf(e),t=We.indexOf(t);return We[Math.max(e,t)]},ze=function(e){return qe.includes(e)},Xe=function(e){return Ye.includes(e)},$e={AD:["DMP","SOCIAL_FLOW"],CP:["COMPOSER"],AM:["PA"],PR:["ESP","VX","ID"],DL:["DL"]},Ge=d($e).reduce(function(t,n){return $e[n].forEach(function(e){e=h[e];t[e]=n}),t},{}),Ze=pe(function(){var e;return null==(e=At(g().consent))?void 0:e.defaultPurposes}),Qe=(Ce=y({},Ge),function(){return Ze(function(n){Ce=y({},Ge),n&&d(n).forEach(function(e){var t=h[e];Ce[t]=null==(t=n[e])?void 0:t.substring(0,32)})}),Ce}),r=y(y({},n(null,"_pprv")),{init:function(e){return C()?me(e||null,null):null},set:function(e,t){return C()?null==e?t:me(d(r=e).reduce(function(e,t){var n=He(t),t=ot(r[t]);return null!==n&&t!==tt&&n!==h.DL&&t&&(e[n]=t),e},{}),t):null;var r}}),C=function(){return"v2"===g().requireConsent},et=function(e,t){return e===Ke&&!(null!=(e=ye())&&e[t])},tt="DL",nt=["AD","AM","CP","PR",tt].reduce(function(e,t){return y(y({},e),((e={})[t]=t,e[t.toLowerCase()]=t,e))},{}),rt=function(e){return nt[(null==e?void 0:e.toLowerCase())||""]||null},ot=function(e){return rt(e)||(null==e?void 0:e.substring(0,32))},it="Consent v2 is disabled",at='the "DL" purpose is reserved',st=function(e){return'"'.concat(e,'" can not be applied for the dl product')},ut=function(e){return"".concat(e," is unknown consent mode")},ct=function(e){return be(e,"does","do")+"n't have modifier in the pdl. Custom mode can't be applied"},lt="Unknown purpose. Provide a product or define within pdl config",dt=function(e){return"Custom purpose: "+be(e,"is","are")+" unknown"};function ft(s,e,t,n,r){function o(e,t){return t=ot(t),nt[t]||Object.values(s||{}).includes(t)?f(e,t):d(lt)}var i,a,u,c,l,d=function(e){return{error:e}},f=function(r,o,i){var e,a=[];return ze(r)?(e=je().reduce(function(e,t){var n=t.id,t=t.name;return(!o||(null==s?void 0:s[n])===o||null!=i&&i.includes(n))&&(et(r,t)?a.push(t):e[n]={mode:r}),e},{}),a.length?d(ct(a)):Object.keys(e).length?{consent:e}:null):d(ut(r))};return C()?r?(i=n,r=r,c=ot(a=t),r=p(r)?r:[r],(l=r.map(He).filter(Oe)).length?c!==tt&&l.includes(h.DL)?{error:st(c)}:c===tt&&l.some(function(e){return e!==h.DL})?d(at):null!=(u=f(i,c,l))&&u.error?u:(l=l.reduce(function(e,t){return e[t]=c,e},{}),{consent:(null==u?void 0:u.consent)||null,purposes:l}):rt(a)?o(i,a):d(dt(r))):n?o(n,t):f(t):d(it)}function pt(t,n){return function(e){return n(t+e)}}function vt(e,t){void 0===t&&(t=kt);var n=h[e.toLowerCase()];return void 0!==n?i[n].name:(t('"'.concat(e,'" is not found')),null)}function gt(o,a){var e,s;return void 0===a&&(a=kt),o?(e={},o.products&&(p(o.products)?e.products=o.products.reduce(function(e,t){t=vt(t,pt("consent.products: ",a));return t&&e.push(t),e},[]):a("consent.products: should be an array")),o.defaultPreset&&(e.defaultPreset=d(o.defaultPreset).reduce(function(e,t){var n=vt(t,pt("consent.defaultPreset: ",a)),r=Pt(o.defaultPreset[t]);return r||a("consent.defaultPreset: "+Ct(t,Ye)),n&&r&&(e[n]=r),e},{})),(s=o.defaultPurposes)&&(e.defaultPurposes=d(s).reduce(function(e,t){var n=pt("consent.defaultPurposes: ",a),r=vt(t,n),o=s[t],i=ot(o);return i===tt||"DL"===r?n('"'.concat(t,": ").concat(o,'" - invalid config')):r&&i&&(e[r]=i),e},{})),e):null}function ht(e){return e.reduce(function(e,t,n){return y(y({},e),((e={})[n]={mode:Fe[t]},e))},{})}function mt(e,t){return he(e,t,function(e,t,n){e=(null==e?void 0:e.mode)||(null==t?void 0:t.mode)||Mt()[0].preset[n].mode;return e!==(null==t?void 0:t.mode)?{mode:e}:t})}function yt(e){var t=Number(e);return Number.isNaN(t)?String(e):t}function _t(e){return p(e)?e:e.split(",").map(function(e){return e.trim().replace(/^['"](.+)['"]$/,"$1")})}function s(e){return e}var u,bt=function(o,e){var i;return o?(i=Ue(e||Ge),je().reduce(function(e,t){var t=t.name,n=i[t],r=(null==(r=o[t])?void 0:r.mode)||Be;return e[n]?(e[n].mode=Je(e[n].mode,r),e[n].products.push(t)):e[n]={mode:r,products:[t]},e},{})):null},wt=["include","exclude","obfuscate"],Ct=function(e,t){return'"'.concat(e,'" should be one of ').concat(t.join(", "))},kt=function(){},Pt=function(e){return Xe(e)?e:null},Ot=function(e,i){void 0===i&&(i=kt);var t=e.source,e=e.patches||[];return Pt(t)||(i(Ct("source",Ye)),t=Be),p(e)||(i('"patches" should be an array'),e=[]),{source:t,patches:e=e.reduce(function(e,t,n){var r,o;return!a(t)||p(t)?i("patch[".concat(n,"]: should be type of {action, item, with?}")):(r=t.action,o=t.item,wt.includes(r)?o&&a(o)&&o.key&&o.type?e.push(t):i("patch[".concat(n,']: "item" should be type of {key, type}')):i("patch[".concat(n,"]: ")+Ct("action",wt))),e},[])}},At=fe(gt),Et=function(o,i){return void 0===i&&(i=kt),d(o||{}).reduce(function(e,t){var n=null==o?void 0:o[t],r=vt((null==n?void 0:n.source)||"",i);return e[t]=y(y({},n),{source:r}),e},{})},xt=[[0,0,0,0,0,0,0,0],[0,0,2,2,2,2,2,0],[1,2,2,2,2,2,2,1],[0,2,0,2,2,2,0,0],[1,2,2,2,2,2,1,1],[2,0,0,2,2,2,2,0],[2,0,2,2,2,2,2,0],[2,2,2,2,2,2,0,2],[2,2,0,0,0,0,2,0],[2,2,1,2,1,2,2,1],[2,2,1,1,2,2,2,1]],St=xt.map(function(e,t){return{id:t,preset:ht(e)}}),Dt=pe(function(){var e;return null==(e=At(g().consent))?void 0:e.defaultPreset}),Mt=(u=St,function(){return Dt(function(n){u=St.slice(),n&&(u[0]={id:0,preset:y({},u[0].preset)},d(n).forEach(function(e){var t=n[e],e=h[e];u[0].preset[e]={mode:t}}))}),u}),It=y(y({},n(null,"_pprv")),{init:function(e){return _e()&&e?mt(e,null):null},set:function(e,t){var n,r,o;return _e()?null!=e&&(n="number"==typeof e?(null==(n=Mt()[e])?void 0:n.preset)||null:p(e)?(o=null,e.forEach(function(e){var n=xt[e];!o&&n?o=n:o&&n&&(o=o.map(function(e,t){return Math.min(e,n[t])}))}),o&&ht(o)):d(r=e).reduce(function(e,t){var n=r[t],t=He(t);return null!==t&&(n=ze(n.mode)?n.mode:null)&&((e=e||{})[t]={mode:n}),e},null))?mt(n,t):t:null},get:fe(function(e){return e&&Ue(e,function(e,t){var n,e=y({},e);return e.mode===Ke&&(e.modifier=(null==(n=ye())?void 0:n[t])||null),e})},ye)}),Nt=y(y({},e()),{init:Mt,set:Mt}),Tt=y(y({},e()),{init:je,set:je}),Lt=y(y({},e(null)),{readonly:!0,set:function(){return null},get:ye}),jt={id:s,type:s,zone:s,createdAt:yt,modifiedAt:yt,authors:_t,section:s,tags:_t,keywords:_t,title:s,description:s,isNative:Ee},Ht=function(e){return"first"===e},Ut=function(e){return"last"===e};function Bt(e,t){return void 0===e&&(e="meta"),Ht(t)?document.querySelector(e):(e=document.querySelectorAll(e),Ut(t)?e[e.length-1]:Array.from(e))}function Rt(e){var r=e.getContent||function(e){return e.content};if(e.selector)return(t=Bt(e.selector,e.take||"first"))&&r(t)||null;var o=Yt.find(e.attr||["name"],e.hasContent),t=e.names||[],i=!("all"===e.take),a=Ut(e.take);if(o)for(var n=0,s=t;n<s.length;n++){var u=function(e){var t,n=[],e=o[e];if(e){if(i)return t=e[a?e.length-1:0],{value:r(t)||""};e.forEach(function(e){n=n.concat(r(e)||"")})}if(n.length)return{value:n}}(s[n]);if("object"===c(u))return u.value}return null}function Vt(e){var t=e.replace(/DAY/g,"(0?[1-9]|[12][0-9]|3[01])").replace(/MONTHLONG/g,"("+d(Jt).join("|")+")").replace(/MONTH/g,"(0?[1-9]|1[012])").replace(/YEAR2/g,"([0-9][0-9])").replace(/YEAR/g,"(197[1-9]|19[8-9][0-9]|20[0-9][0-9])").replace(/TIME/g,"([0-9][0-9]):([0-9][0-9]):([0-9][0-9])(?:\\.[0-9][0-9][0-9])?([zZ]|[+-][0-9][0-9](?::?[0-9][0-9])?)?"),e=e.replace(/.*?([YMD])(EAR|ONTH|AY).*?/g,"$1").substring(0,3);return[new RegExp(t),e]}function k(e){return e&&parseInt(e,10)||0}Kt=null;var Kt,Yt={refresh:function(){(Kt=Bt()||null)&&setTimeout(function(){Kt=null},0)},find:function(a,s){return void 0===s&&(s=!1),Kt?Kt.reduce(function(e,t){for(var n=0,r=a;n<r.length;n++){var o=r[n],o=(("name"===o?t.name:t.getAttribute(o))||"").trim().toLowerCase(),i=t.content;if(o&&(!s||i)){e[o]||(e[o]=[]),e[o].push(t);break}}return e},{}):null}},qt=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t],r=Rt(r);if(r)return r}},P=function(e,t,n){var r,o=jt[t];!Boolean(e[t])&&o&&(o=(r=("function"==typeof n?n:function(){return(p(n)?qt:Rt)(n)})())&&o(r))&&(e[t]=o)},Ft=function(e){return{attr:["property"],names:[e]}},Wt=function(e){return{names:[e]}},Jt={januar:"01",january:"01",jan:"01",februar:"02",february:"02",feb:"02",mars:"03",march:"03",mar:"03",april:"04",apr:"04",mai:"05",may:"05",juni:"06",june:"06",jun:"06",juli:"07",july:"07",jul:"07",august:"08",aug:"08",september:"09",sept:"09",sep:"09",oktober:"10",october:"10",okt:"10",oct:"10",november:"11",nov:"11",desember:"12",december:"12",dec:"12",des:"12"},zt=["\\bDAY\\.MONTH\\.YEAR\\b","\\bDAY\\.?\\s{0,3}MONTHLONG\\.?\\s{1,3}YEAR\\b","\\bYEAR-MONTH-DAY(?:[tT]|\\b)","\\bMONTHLONG\\.?\\s{0,3}DAY(?:st|nd|rd|th)?,?\\s{1,3}YEAR\\b","\\bDAY(?:st|nd|rd|th|\\.)?\\s{0,3}MONTHLONG\\.?,?\\s{1,3}YEAR\\b","\\bYEAR[/年]MONTH[/月]DAY(?=\\b|日)","\\bDAY\\.MONTH\\.YEAR2\\b","\\bDAY/MONTH/YEAR\\b"].map(Vt),Xt=Vt("YEAR-MONTH-DAY[tT]TIME")[0];function $t(e,t,n,r,o,i,a){e=new Date(Date.UTC(k(e),k(t)-1,k(n),k(r),k(o),k(i))),t=(a||"").match(/^([+-][0-9][0-9])(?::?([0-9][0-9])?)$/),t&&(e=new Date(e.getTime()-36e5*Number(t[1])-6e4*(Number(t[2])||0))),n=Date.now()-e.getTime();return 0<n||-n<1728e5?e.toISOString():null}var Gt=function(e){return e.replace(/<\/?[^>?]*\/?>/g," ").replace(/\s+/g," ").trim()};function Zt(e){return Gt((e=void 0===e?"":e).replace(/,(?=\s*(jr|sr)(\.?)\b)/g," "))}function Qt(e){return y(y({},e),{take:"last"})}function O(e){return y(y({},e),{take:"last",hasContent:!0,getContent:function(e){return Gt(e.content||"")}})}function en(e){P(e,"createdAt",function(){var e=qt(un);if(!e)return null;var t=e.toLowerCase(),e=(t=t.toLowerCase()).match(Xt);if(e)return $t(e[1],e[2],e[3],e[4],e[5],e[6],e[7]);for(var n=0,r=zt;n<r.length;n++){var o=r[n],i=t.match(o[0]);if(i)return $t(2===(i="DMY"===o[1]?["",i[3],i[2],i[1]]:"MDY"===o[1]?["",i[3],i[1],i[2]]:i)[1].length?(k(i[1])<60?"20":"19")+i[1]:i[1],i[2].length<=2?i[2]:Jt[i[2]],i[3])}}),P(e,"modifiedAt",cn),P(e,"authors",ln),P(e,"keywords",function(){var e=qt(dn);return e&&e.length<=1024?e:null}),P(e,"title",pn),P(e,"description",fn)}function tn(){var e,t=Array.from(document.querySelectorAll("meta[property^=content]")).reduce(function(e,t){var n=null==(n=null==t?void 0:t.getAttribute("property"))?void 0:n.split(":").pop(),r=jt[n];return r&&t&&(e[n]=r((null==t?void 0:t.getAttribute("content"))||"")),e},{});return Yt.refresh(),P(e=t,"type",Ft("og:type")),P(e,"section",Wt("section")),P(e,"id",Wt("id")),P(e,"authors",Wt("author")),en(t),t}function nn(e){return e.getTime().toString(36)}function rn(e){return e?o(function(){return new Date(parseInt(e,36))}):null}function on(e,t,n){return void 0===n&&(n=!1),{cookieName:e,consent:t=void 0===t?_n:t,encode:function(e){return Se(e,n)},decode:function(e){return xe(e,!0)}}}function an(e){function r(e){return y(y({},f),_(e||{},Oe))}function n(e,t){var n=e&&t;!v()&&n&&g(),v()&&!n&&h(),v()&&n&&!c&&g(),a=e,l=t}var o=e.cookieName,t=e.consent,i=m.get(o),a=!!i,s=a,u=mn(i,e),c=!!u.fixedAt,l=a,d=null,f=y({},hn),p=null,v=function(){return a&&l},g=function(e){var t,e=r(e),n=d||(p?u.encode(p,e):"");n||(t=m.get(o),n=(t=u.decode(t||""))?u.encode(t,e):""),n&&(c=!0,m.set(o,n,u.bindOptions(e)),s=!0)},h=function(e){v()&&(s&&m.remove(o,r(e)),s=!1)};return u.onChange(function(){v()&&(c=!1,g())}),{get cookieName(){return o},get cookieEnabled(){return v()},get fixedAt(){return u.fixedAt},get consent(){return t},set:function(e,t){p=e,v()&&g(t)},get:function(){return u.decode(m.get(o)||"")},remove:h,setCookieOptions:function(e){f=r(e),v()&&g()},setCookieEnabled:function(e,t){void 0===t&&(t=null),d=e?t:null,n(e,l)},lazyActive:function(){n(a,!0)},setFixedMode:function(e){u.setMode(e)}}}var sn,un=[Qt({attr:["name","property","itemprop"],names:["cxenseparse:publishtime","cxenseparse:recs:publishtime","article:published_time","date","dc.date","dc.date.created","dc.terms.issued","pub_date","article.published","datepublished","og:article:published_time"]}),Qt({selector:"time.published[datetime],time[pubdate][datetime]",getContent:function(e){return e.getAttribute("datetime")}}),Qt({selector:"time[datetime]",getContent:function(e){return e.getAttribute("datetime")}})],cn={selector:'meta[property="article:modified_time"]'},ln=[{attr:["property","name"],names:["cxenseparse:author","og:article:author","article:author","og:book:author","book:author","author","dc.creator","article.author"],take:"all",getContent:function(e){var t=e.getAttribute("data-separator"),e=e.content;return t?Zt(e).split(t):Zt((t=void 0===(t=e)?"":t).replace(/\n+/,";").replace(/(\<|&lt;)br(\>|&gt;)/,";").replace(/\b(and|und|og)\b/g,";")).split(/[,;]/)}}],dn=[O({names:["cxenseparse:keywords"]}),O({attr:["property","name"],names:["news_keywords"]}),O({names:["keywords"]})],fn=[O({names:["cxenseparse:description"]}),O({attr:["property"],names:["og:description"]}),O({names:["description"]})],pn=[{names:["cxenseparse:title"]},Qt({attr:["property","name"],names:["og:title"]})],vn=y(y({},e(null)),{init:tn,refresh:function(e){var t=tn();return null!=e&&e._fixed_&&null!=e&&e._fixed_.forEach(function(e){delete t[e]}),y(y({},e),t)},set:function(n,e){var t,r;return null===n?{}:(t=new Set(e&&e._fixed_),(r=function(e,t){d(_(n,e)).forEach(t)})(Oe,function(e){t.add(e)}),r(le,function(e){t.delete(e)}),_(y(y(y({},e),n),{_fixed_:Array.from(t.values())}),Oe))},get:fe(function(e){var t=y({},e);return delete t._fixed_,e&&t})}),gn=y(y({},n(null,"_pcus")),{init:function(e){return(e=void 0===e?null:e)&&_(e,function(e){return a(e)&&Array.isArray(e.segments)})}}),Ne={pageViewId:Ne,browserId:Te,users:Me,userStatus:Pe,siteId:n(),consent:It,consentPresets:Nt,products:Tt,consentModifiers:Lt,purposes:r,content:vn,userSegments:gn},hn={path:"/",expires:395,samesite:"lax",secure:"https:"===window.location.protocol,domain:m.getTopLevelDomain(["pantheon.io","go-vip.net","go-vip.co"])},mn=function(e,t){function n(e){return a=a||function(e){var t=new Date;if(e instanceof Date)t=e;else{if("number"!=typeof e)return null;t.setDate(t.getDate()+e)}return t}(e.expires)}var r=t.encode,o=t.decode,i=!1,a=null,s=null,u=null;(t=null==(t=o(e||""))?void 0:t._t)&&(t=t.split("|"),a=rn(t[0]),s=rn(t[1]),i=!!a);return{get fixedAt(){return i?[s,a]:null},onChange:function(e){u=e},setMode:function(e){var t=i;(i=e)!==t&&(s=a=null)!=u&&u(i)},bindOptions:function(e){return i&&(a=n(e))?y(y({},e),{expires:a}):e},decode:function(e){e=o(e);return null!=e&&e._t&&delete e._t,e},encode:function(e,t){return i?(a=n(t))&&(e._t=nn(a)+"|"+nn(s=s||new Date)):delete e._t,r(e)}}},yn="essential",_n="optional",bn="mandatory",wn=String.fromCharCode,Cn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",kn={};(sn=sn||{}).URI="URI";function Pn(){function r(r,o,i){void 0===i&&(i=!1);var a=[];return d(o).forEach(function(e){var t=o[e],n=!u.has(e)||u.get(e)===r||i;t&&n?u.set(e,r):!t&&n?u.delete(e):a.push(e)}),0<a.length?a:null}var i=zn(),a={},s=null,o=new Map,u=new Map,c=[];return function(e,t){var n=v();return o.set(n,e),t&&i.register(t),a=y(y({},i.get()),a),{getInitCookieData:function(){return a},getCachedData:function(){return s||Gn},setProtectionData:function(e){return r(n,e)},setProtectionDataUnsafe:function(e){return r(n,e,!0)},updateData:function(e){return n={},r={},d(t=e).forEach(function(e){u.has(e)?n[e]=(null==s?void 0:s[e])||null:r[e]=t[e]}),e=s||a,o=y(y({},s),r),De(o,e)||(i.set(o,e),s=o,c.forEach(function(e){return(0,e[1])(r)})),0<d(n).length?n:null;var t,n,r,o},onUpdateData:function(e){c.push([n,e])},terminate:function(){var t;t=n,c=c.filter(function(e){return e[0]!==t}),o.delete(n)},setCookieOptions:function(){return null},setCookieEnabled:function(){return null},get registeredCookiesWrapper(){return i.wrappers}}}}function On(t){return d(t).filter(Qn).map(function(e){return er(e,t[e])})}function An(e,t){switch(e){case Be:return!0;case Re:return t===yn||t===bn;case Ve:return t===bn;default:return!0}}function En(e){function t(e){return o(function(){return window.localStorage.getItem(e)})}var n=t(e),r=o(function(){return parseInt(xe(t("_ls_ttl"))[e],36)});return r&&r<=Date.now()?null:n}function xn(e){var t=e&&e.length;return 16===t||36===t?e:null}function Sn(o){var e,i=y(y({},ir),Et(null==(e=g())?void 0:e.migration));d(i).forEach(function(e){var t=o.params.get(e),n=i[e]===ir[e],r=null==(r=i[e])?void 0:r.source,r=r&&(null==(r=or[r])?void 0:r[e])||[];t&&r.length&&(r=rr(r))&&(t.readonly=!1,o.updateValues(e,r,!0),t.readonly=!n)})}function Dn(){function n(e){return Ae(e,{path:String,domain:String,secure:Ee,expires:function(e){return e instanceof Date?e:Number(e)},samesite:function(e){return f(e)?e:Ee(e)}})}var r=y({},window[Ie]);return null!=r&&r.cookies&&(r.cookies=d(r.cookies).reduce(function(e,t){return e[t]=n(r.cookies[t]),e},{})),null!=r&&r.cookieDefault&&(r.cookieDefault=n(r.cookieDefault)),r}function Mn(n){function e(e){return e||(null==(e=n.get("consent"))?void 0:e.DL)||null}function r(e,t){var r=ur(t),o=null==(t=n.getConnection())?void 0:t.registeredCookiesWrapper;o&&(t=d(o).map(function(e){return o[e].cookieName}),i(t,e).forEach(function(e){var t=e.name,n=e.allowed,e=e.data,n=n&&!r[t];o[t].setCookieEnabled(n,e||null)}))}var t=d(Jn).reduce(function(e,t){return e[t]=Jn[t].consent,e},{}),i=nr({items:t,type:"cookie",getConsent:e}),o=e(),a=(null==(t=n.get("consent"))?void 0:t.PA)||null;n.addChangeListener("consent",function(e){var t=(null==e?void 0:e.DL)||null,n=(null==e?void 0:e.PA)||null;(null==o?void 0:o.mode)===(null===t?void 0:t.mode)&&(null==a?void 0:a.mode)===(null===n?void 0:n.mode)||(a=n,r(o=t,e))}),r(o,n.get("consent"))}function In(n){function t(o){var i,e,t=bt(o,n.get("purposes"));t&&o&&(i=!1,e=d(t).reduce(function(n,e){var r=t[e].mode;return t[e].products.forEach(function(e){var t;r!==(null==(t=o[e])?void 0:t.mode)&&(et(r,e)?a[e]||(a[e]=!0,cr(e,r,1)):(n[e]={mode:r},i=!0,cr(e,r,2)))}),n},{}),i)&&n.updateValues({consent:e})}var r=null,a={};n.addChangeListener("consent",function(e){C()&&(r&&(clearTimeout(r),r=null),r=setTimeout(function(){t(e),r=null},200))}),C()&&t(n.get("consent"))}var Nn,Tn,Ln,jn,Hn,Un,A,Bn,E,x,D,Rn,M,I,Vn,Kn,Yn,qn,N,Fn={URI:{prefix:"{u}",compress:function(e){if(null==e)return"";var t=e,n=6,r=function(e){return Cn.charAt(e)};if(null==t)return"";for(var o,i,a,s,u={},c={},l="",d=2,f=3,p=2,v=[],g=0,h=0,m=0;m<t.length;m+=1)if(a=t.charAt(m),Object.prototype.hasOwnProperty.call(u,a)||(u[a]=f++,c[a]=!0),s=l+a,Object.prototype.hasOwnProperty.call(u,s))l=s;else{if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(o=0;o<p;o++)g<<=1,h==n-1?(h=0,v.push(r(g)),g=0):h++;for(i=l.charCodeAt(0),o=0;o<8;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1}else{for(i=1,o=0;o<p;o++)g=g<<1|i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i=0;for(i=l.charCodeAt(0),o=0;o<16;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1}0==--d&&(d=Math.pow(2,p),p++),delete c[l]}else for(i=u[l],o=0;o<p;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1;0==--d&&(d=Math.pow(2,p),p++),u[s]=f++,l=String(a)}if(""!==l){if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(o=0;o<p;o++)g<<=1,h==n-1?(h=0,v.push(r(g)),g=0):h++;for(i=l.charCodeAt(0),o=0;o<8;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1}else{for(i=1,o=0;o<p;o++)g=g<<1|i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i=0;for(i=l.charCodeAt(0),o=0;o<16;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1}0==--d&&(d=Math.pow(2,p),p++),delete c[l]}else for(i=u[l],o=0;o<p;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1;0==--d&&(d=Math.pow(2,p),p++)}for(i=2,o=0;o<p;o++)g=g<<1|1&i,h==n-1?(h=0,v.push(r(g)),g=0):h++,i>>=1;for(;;){if(g<<=1,h==n-1){v.push(r(g));break}h++}return v.join("")},decompress:function(r){if(null==r)return"";if(""==r)return null;for(var e,t,n,o,i,a,s=(r=r.replace(/ /g,"+")).length,u=32,c=function(e){var t=Cn,e=r.charAt(e);if(!kn[t]){kn[t]={};for(var n=0;n<t.length;n++)kn[t][t.charAt(n)]=n}return kn[t][e]},l=[],d=4,f=4,p=3,v="",g=[],h={val:c(0),position:u,index:1},m=0;m<3;m+=1)l[m]=m;for(t=0,o=Math.pow(2,2),i=1;i!=o;)n=h.val&h.position,h.position>>=1,0==h.position&&(h.position=u,h.val=c(h.index++)),t|=(0<n?1:0)*i,i<<=1;switch(t){case 0:for(t=0,o=Math.pow(2,8),i=1;i!=o;)n=h.val&h.position,h.position>>=1,0==h.position&&(h.position=u,h.val=c(h.index++)),t|=(0<n?1:0)*i,i<<=1;a=wn(t);break;case 1:for(t=0,o=Math.pow(2,16),i=1;i!=o;)n=h.val&h.position,h.position>>=1,0==h.position&&(h.position=u,h.val=c(h.index++)),t|=(0<n?1:0)*i,i<<=1;a=wn(t);break;case 2:return""}for(e=l[3]=a,g.push(a);;){if(s<h.index)return"";for(t=0,o=Math.pow(2,p),i=1;i!=o;)n=h.val&h.position,h.position>>=1,0==h.position&&(h.position=u,h.val=c(h.index++)),t|=(0<n?1:0)*i,i<<=1;switch(a=t){case 0:for(t=0,o=Math.pow(2,8),i=1;i!=o;)n=h.val&h.position,h.position>>=1,0==h.position&&(h.position=u,h.val=c(h.index++)),t|=(0<n?1:0)*i,i<<=1;l[f++]=wn(t),a=f-1,d--;break;case 1:for(t=0,o=Math.pow(2,16),i=1;i!=o;)n=h.val&h.position,h.position>>=1,0==h.position&&(h.position=u,h.val=c(h.index++)),t|=(0<n?1:0)*i,i<<=1;l[f++]=wn(t),a=f-1,d--;break;case 2:return g.join("")}if(0==d&&(d=Math.pow(2,p),p++),l[a])v=l[a];else{if(a!==f)return null;v=e+e.charAt(0)}g.push(v),l[f++]=e+v.charAt(0),e=v,0==--d&&(d=Math.pow(2,p),p++)}}}},Wn=d(Fn).reduce(function(e,t){return e[Fn[t].prefix]=Fn[t],e},{}),Te={cookieName:"_pctx",consent:bn,encode:function(e,t){void 0===t&&(t=sn.URI);e=JSON.stringify(e),e=Fn[t].compress(e);return Fn[t].prefix+e},decode:function(e){e=function(e){var t=e.slice(0,3),e=e.slice(3);if(!Wn[t])return null;t=Wn[t].decompress(e);if(!t)return null;try{return JSON.parse(t)}catch(e){return null}}(e||"");return a(e)?e:null}},Jn={_pprv:on("_pprv",bn,!!(null==(Me=null==(Me=g().cookies)?void 0:Me._pprv)||!Me.jsonOnly)),_pcid:on("_pcid",yn),_pcus:on("_pcus",_n,!0),_pctx:Te},Pe=d(Nn=Jn).reduce(function(e,t){return e[t]=an(Nn[t]),e},{}),zn=function(){var a=null,s=null;return{register:function(e){return a=y(y({},e.fields),a),s=y(y({},e.cookieByName),s)},get wrappers(){return s},get:function(){var t={};return s&&d(s).forEach(function(e){t=y(y({},t),s[e].get())}),t},set:function(r,o){void 0===o&&(o=null);var i={};d(r).forEach(function(e){var t=r[e],n=null==a?void 0:a[e];n&&(i[n]||(i[n]={wrapper:null==s?void 0:s[n],data:{},update:!1,remove:!0}),i[n].data[e]=t,i[n].remove=i[n].remove&&null===t,o&&(i[n].update||t===o[e])||(i[n].update=!0))}),d(i).forEach(function(e){var t=i[e],n=t.wrapper,r=t.update,t=t.remove;t&&n.remove(),r&&!t&&n.set(i[e].data)})}}},Xn="__pctx_connection__",$n="uvm42pas28m",Gn={},Zn=(void 0===Tn&&(Tn=!1),function(e,t){var n=Pn();try{Object.defineProperty(window,Xn,{configurable:Tn,set:function(e){var t=e();t===$n?e(n):"mrlqf5trgho"===t&&(n=Pn())}})}catch(e){}return window[Xn]=function(e){return e&&(n=e),$n},n(e,t)}),Qn=function(e){return e.includes("*")},er=function(e,t){return[new RegExp("^"+e.replace(/\*/g,".*")+"$"),t]},tr=function(e,t){for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o[0].test(e))return o[1]}return null},nr=function(c){function l(e){return t[e]||tr(e,n)||_n}var t=Object.assign({},c.items),n=On(t);return function(e,t){var o,i,n,r=g().requireConsent,a=!p(e),s=a?[e]:e,e=(n=t||c.getConsent())?n.mode===Ke?(o=function(e,t,n){t=t&&Ot(t,n);if(!t)return null;for(var r=[],o={},i=0,a=t.patches;i<a.length;i++){var s=a[i],u=s.action,c=s.with,s=s.item;s.type===e&&(o[s.key]=u={action:u,data:void 0===c?null:c},Qn(s.key))&&r.push(er(s.key,u))}return{source:t.source,getModifier:function(e){return o[e]||tr(e,r)}}}(c.type,n.modifier,c.log))?(i=o.source,s.map(function(e){var t=o.getModifier(e),n=(n=null==t?void 0:t.action,r=null==t?void 0:t.data,"obfuscate"===n?r:null),r={name:e,allowed:null!=t&&t.action?function(e){switch(e){case"include":return!0;case"exclude":return!1;case"obfuscate":return!0}}(t.action):An(i,l(e))};return null!==n&&(r.data=n),r})):u():s.map(function(e){return{name:e,allowed:An(n.mode,l(e))}}):u();function u(){return s.map(function(e){return{name:e,allowed:!r}})}return a?e[0]:e}},It=Object.freeze({__proto__:null,createCheckConsentWrapper:nr,createMask:er,getByMask:tr,isMask:Qn,itemsToMask:On}),rr=(Ln={pa_vid:function(e){return xn(xe(e||"",!0)||e)},atuserid:function(e){return xn((null==(e=xe(e||"",!0))?void 0:e.val)||"")}},function(e){for(var t=0,n=e;t<n.length;t++){var r=function(e){try{var t=e.ls?En(e.ls)||null:(n=m.get(e),Ln[e]&&n?Ln[e](n):n);if(t)return{value:t}}catch(e){}var n}(n[t]);if("object"===c(r))return r.value}return null}),Nt=[{ls:"_cX_P"},"cX_P"],or={PA:{browserId:["pa_vid","atuserid"].concat(Nt)},DMP:{browserId:Nt}},ir={browserId:{source:"DMP"}},Tt="@@Data-layer/",ar=Tt+"update_value",sr=Tt+"refresh_value",ur=function(e){e=e,n=g(),t=1===(t=(null==(t=n.consent)?void 0:t.products)||[]).length&&"PA"===t[0],e="opt-out"===(null==(e=null==e?void 0:e.PA)?void 0:e.mode);var t,n=!!n.requireConsent&&t&&e;return{_pprv:!g().requireConsent,_pctx:n,_pcid:n,_pcus:n}},cr=function(e,t,n){n=1===n?"can not be":"was";console.warn('[DL]: Consent v2: the "'.concat(e,'" has a conflicted consent mode, ')+"mode ".concat(n,' changed to "').concat(t,'"'))},T=(Hn=function(e){Mn(e),Sn(e),In(e)},Lt=Lt=Pe,Bn={fields:d(Un=jn=Ne).reduce(function(e,t){var n=Un[t].cookieName;return null!==n&&(e[t]=n),e},{}),cookieByName:Lt},E=Zn("data-layer",Bn),x=!1,D=new Map,Rn=new Set,M=new Map,I=function(){if(E)return E;throw new Error("DataLayer can't be connected")},Vn=function(e){var t=I().registeredCookiesWrapper;t&&e(t)},Kn=function(e){Vn(function(t){e.forEach(function(e){e=t[e];e&&e.lazyActive()})})},Yn=function(){function t(r){return d(o).reduce(function(e,t){var n=o[t];return void 0!==n[r]&&(e[t]=n[r]),e},{})}var o={};return{add:function(e,t){o[e]=t},call:function(){var e;e=t("protect"),0<d(e).length&&I().setProtectionData(e),e=t("protectUnsafe"),0<d(e).length&&I().setProtectionDataUnsafe(e)}}},qn=function(o,i){return d(o).reduce(function(e,t){var n=M.get(t),r=o[t];return n&&(e[t]=i?i(n,r):n.get(r)),e},{})},N=function(e,t,n){void 0===n&&(n=!1);var r,i=e,a=de(),s=(f(e)&&((r={})[e]=t,i=r),Yn()),u=Yn(),i=d(i).reduce(function(e,t){var n=i[t],r=M.get(t),o=t;return null!=r&&r.readonly||(r&&r.cookieName&&a.add(r.cookieName),r&&n!==A[t]&&(n===sr?(e[t]=r.refresh(A[t],function(e){u.add(o,e)}),e[t]!==A[t]&&s.add(o,{protectUnsafe:!1})):e[t]=n===ar?r.update(A[t],function(e){u.add(o,e)}):r.set(n,A[t],function(e){u.add(o,e)}))),e},{}),e=(Kn(a.values()),s.call(),I().updateData(i));return e&&n&&(t=d(e).reduce(function(e,t){return y(y({},e),((e={})[t]=!1,e))},{}),I().setProtectionDataUnsafe(t),I().updateData(i)),u.call(),e&&qn(e)},{init:function(e){var a,s,o,i,u,c;void 0===e&&(e={}),x||(E=E||Zn("data-layer",Bn),a=y(y({},e),Dn()),s=a.cookieDefault,Vn(function(i){d(i).forEach(function(e){var t,n,r=i[e].cookieName,o=null==(o=a.cookies)?void 0:o[r],r="fixed"===(null==(r=a.cookies)?void 0:r.storageMode);null!=(n=(t=i[e]).setFixedMode)&&n.call(t,r),(s||o)&&i[e].setCookieOptions(y(y({},s),o))})}),x=!0,d(jn).forEach(function(e){var t=jn[e];D.set(e,new Set),M.set(e,t)}),o=!1,i=I().getInitCookieData(),u=I().getCachedData(),c=Yn(),e=d(jn).reduce(function(e,t){var n=t,r=jn[t];return e[t]=(null==u?void 0:u[n])||r.init(null==i?void 0:i[n],function(e){c.add(n,e)}),null!=u&&u[n]||(o=!0),e},{}),A=e,o&&I().updateData(e),c.call(),I().onUpdateData(fr),null!=Hn&&Hn(dr()))},set:vr,get:pr,update:function(e){return gr(e)},refresh:function(){var n,e;return!I().setProtectionData(((e={})["@@Data-layer/refresh_locked_key"]=!0,e))&&(n=[],M.forEach(function(e,t){return n.push(t)}),e=n.reduce(function(e,t){return e[t]=sr,e},{}),N(e),!0)},protect:function(e,t){return hr(e,t)},addChangeListener:mr,removeChangeListener:function(t){Rn.delete(t),D.forEach(function(e){return e.delete(t)})},terminate:function(){null!=E&&E.terminate(),D.clear(),Rn.clear(),E=null,x=!1,A={}},updateMigration:function(){x&&Sn(dr())},get isReady(){return x},utils:{validateModifier:Ot,validateConsent:gt,checkConsent:It,setConsent:function(e,t,n){if(pr("consent"),e=ft(pr("purposes"),0,e,t,n)){if(e.error)return e.error;vr({consent:e.consent,purposes:e.purposes})}return null},getConsent:function(){var e=pr(["consent","purposes"]),t=e.consent,e=e.purposes;return bt(t,e)},notAcquiredConsent:C()?d($e).reduce(function(e,t){return e[t]={mode:"not-acquired",products:$e[t]},e},{}):null},get cookies(){return lr()},get cookieEnabled(){return lr()},setUnsafe:function(e,t){N(e,t,!0)},protectUnsafe:function(e,t){return hr(e,t,!0)},updateUnsafe:function(e){return gr(e,!0)},setCookieEnabled:function(r){Vn(function(n){var e=d(r);e.length?e.forEach(function(e){var t=n[e];t&&t.setCookieEnabled(r[e])}):d(n).forEach(function(e){n[e].setCookieEnabled(r)})})}});function lr(){var e=null;return Vn(function(o){e=d(o).reduce(function(e,t){var n=o[t].cookieEnabled,r=o[t].fixedAt||null;return e[o[t].cookieName]=n?{enabled:n,fixedAt:r}:null,e},{})}),e}function dr(){return{params:M,getConnection:I,addChangeListener:mr,get:pr,updateValues:N}}function fr(r){var o=!1;d(r).forEach(function(e){var t,n=M.get(e);n&&(t=r[e],A[e]!==t)&&(A[e]=t,o=!0,null!=(e=D.get(e)))&&e.forEach(function(e){return e(n.get(t))})}),o&&Rn.forEach(function(e){return e(qn(A))})}function pr(e){var n=de(),t=f(e),r=void 0===e?A:t?((r={})[e]=A[e],r):e.reduce(function(e,t){return M.has(t)&&(e[t]=A[t]),e},{});return r=qn(r,function(e,t){return e.cookieName&&n.add(e.cookieName),e.get(t)}),Kn(n.values()),t?r[e]:r}function vr(e,t){return N(e,t,!1)}function gr(e,t){void 0===t&&(t=!1);var n=e;return p(e)||(n=[e]),N(n.reduce(function(e,t){return e[t]=ar,e},{}),void 0,t)}function hr(e,t,n){var r,n=(n=void 0===n?!1:n)?I().setProtectionDataUnsafe:I().setProtectionData,o=e;return f(e)&&((r={})[e]=t,o=r),n(o)}function mr(e,t){var n;f(e)?null!=(n=D.get(e))&&n.add(t):Rn.add(e)}function yr(t,n,r){n.addEventsProperty("event_collection_platform","js"),n.addEventsProperty("event_collection_version",n.getConfiguration("version"));var e,o=new Date,i=(n.addEventsProperty("device_timestamp_utc",o.getTime()),n.addEventsProperty("device_local_hour",o.getTime()),n.addEventsProperty("device_hour",o.getHours()),"isManualPageRefresh"),a="pageview_id",s="_isNotFirstPageView",u=b(n.events);try{for(u.s();!(e=u.n()).done;){var c=e.value;"page.display"===c.name&&(null===t.getConfiguration(i)&&t.getConfiguration(s)&&t.setConfiguration(i,!1),t.getConfiguration("enableAutomaticPageRefresh")&&!1===t.getConfiguration(i)&&t.getConfiguration(s)&&T.refresh(),t.getConfiguration(s)||t.setConfiguration(s,!0)),t._privacy.call("isPropAllowed",a)&&n.isPropertyAbsentForEvent(a,c)&&(c.data[a]=T.get("pageViewId"))}}catch(e){u.e(e)}finally{u.f()}try{var l=new Date(new Date(T.cookies._pcid.fixedAt[0]).setUTCHours(0,0,0,0)).toISOString();n.addEventsProperty("cookie_creation_date",l)}catch(e){}var d,f,p=T.get("content");for(d in p)Object.prototype.hasOwnProperty.call(p,d)&&(f="createdAt"===d||"tags"===d?{createdAt:"content_publication_date",tags:"tags_array"}[d]:"content_".concat(d).replace(/[\w]([A-Z])/g,function(e){return e[0]+"_"+e[1]}).toLowerCase(),n.addEventsProperty(f,p[d]));n.addEventsProperty("has_access",T.get("userStatus")),n.addEventsProperty("device_screen_width",window.screen.width),n.addEventsProperty("device_screen_height",window.screen.height),n.addEventsProperty("device_display_width",window.innerWidth||document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:""),n.addEventsProperty("device_display_height",window.innerHeight||document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:"");var v,o=function(e,t){var n,r=b(t);try{for(r.s();!(n=r.n()).done;){var o,i=n.value;if(-1<e.indexOf(i))return[(o=e.split(i))[0],o.slice(1).join(i)]}}catch(e){r.e(e)}finally{r.f()}return["",""]}(window.navigator?window.navigator.language||window.navigator.userLanguage:"",["-","_"]),l=(n.addEventsProperty("browser_language",o[0]),n.addEventsProperty("browser_language_local",o[1]),n.addEventsProperty("previous_url",document.referrer||""),document.title&&n.addEventsProperty("page_title_html",document.title),"true"===n.getConfiguration("addEventURL").toString());!l&&"withoutQS"!==n.getConfiguration("addEventURL")||n.addEventsProperty("event_url_full",l?window.location.href.split("#")[0]:"".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname));try{t.getConfiguration("allowHighEntropyClientHints")?window.navigator.userAgentData.getHighEntropyValues(["architecture","bitness","brands","mobile","model","platform","platformVersion","uaFullVersion","fullVersionList"]).then(function(e){br(n,e)}).finally(function(){w(t,n,r)}):(v={brands:window.navigator.userAgentData.brands,platform:window.navigator.userAgentData.platform,mobile:window.navigator.userAgentData.mobile},br(n,v),w(t,n,r))}catch(e){w(t,n,r)}}function _r(e){return void 0!==e}function br(e,t){var n=[{metric:"brands",property:"ch_ua"},{metric:"architecture",property:"ch_ua_arch"},{metric:"bitness",property:"ch_ua_bitness"},{metric:"fullVersionList",property:"ch_ua_full_version_list"},{metric:"mobile",property:"ch_ua_mobile"},{metric:"model",property:"ch_ua_model"},{metric:"platform",property:"ch_ua_platform"},{metric:"platformVersion",property:"ch_ua_platform_version"},{metric:"uaFullVersion",property:"ch_ua_full_version"}];if(_r(t))for(var r=0;r<n.length;r++)_r(t[n[r].metric])&&e.addEventsProperty(n[r].property,t[n[r].metric])}function wr(t,n,r){function e(e){w(t,n,r,e)}n.options&&n.options.onBeforeBuild?n.options.onBeforeBuild(t,n,e):e()}function Cr(t,n,r){function e(e){w(t,n,r,e)}n.options&&n.options.onBeforeSend?n.options.onBeforeSend(t,n,e):e()}function kr(e,t,n){e._privacy.call("filterEvents",t.events),e._privacy.call("filterProps",t.properties);for(var r=t.events,o=0;o<r.length;o++){e._privacy.call("filterProps",r[o].data,r[o].name);var i,a=e._privacy.call("getModeMetadata")||{};for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&t.addEventsProperty(i,a[i])}w(e,t,n)}function Pr(e,t,n){var r,o=[];for(r in t.properties)if(Object.prototype.hasOwnProperty.call(t.properties,r)){var i,a=!1,s=b(t.events);try{for(s.s();!(i=s.n()).done;){var u=i.value,c=!1,l=t.properties[r].options.events;if(l)if(-1<l.indexOf(u.name))c=!0;else{var d,f=b(l);try{for(f.s();!(d=f.n()).done;){var p=d.value;if("*"===p.charAt(p.length-1)&&0===u.name.indexOf(p.substring(0,p.length-1))){c=!0;break}}}catch(e){f.e(e)}finally{f.f()}}else c=!0;c&&void 0===u.data[r]&&(u.data[r]=t.properties[r].value,a=!0)}}catch(e){s.e(e)}finally{s.f()}a&&!t.properties[r].options.persistent&&o.push(r)}for(var v=0,g=o;v<g.length;v++)delete e._properties[g[v]];if(!t.getConfiguration("sendEmptyProperties")){var h,m=b(t.events);try{for(m.s();!(h=m.n()).done;){var y,_=h.value;for(y in _.data)!Object.prototype.hasOwnProperty.call(_.data,y)||""!==_.data[y]&&void 0!==_.data[y]||delete _.data[y]}}catch(e){m.e(e)}finally{m.f()}}w(e,t,n)}function Or(e,t,n){(e._privacy.call("getMode")!==e._privacy.modeEnum.OPTOUT||e._privacy.call("getMode")===e._privacy.modeEnum.OPTOUT&&t.getConfiguration("sendEventWhenOptout"))&&0<t.build.data.events.length&&R.post(t.build.url,JSON.stringify(t.build.data)),w(e,t,n)}function Ar(n,r,o){void 0!==r.properties.user_id?w(n,r,o):n.getUser(function(e){var t;null!==e&&(r.addEventsProperty("user_id",e.id,t={persistent:!0}),r.addEventsProperty("user_category",e.category,t),r.addEventsProperty("user_recognition",!0,t)),w(n,r,o)})}function Er(n,r,o){n._storage.getItem(r.getConfiguration("storageVisitor"),function(e){var t;r.getConfiguration("isVisitorClientSide")&&(r.visitorId=r.getConfiguration("visitorId")||T.get("browserId"),r.getConfiguration("isLegacyPrivacy")||"opt-out"!==n.consent.getMode()||(r.visitorId="OPT-OUT"),t="OPT-OUT"!==r.visitorId&&"no-consent"!==r.visitorId&&"no-storage"!==r.visitorId&&r.visitorId!==r.getConfiguration("visitorId"),r.visitorId!==T.get("browserId"))&&t&&(r.visitorId=r.visitorId+"-NO"),w(n,r,o)})}function xr(o,e,t){function n(e){null!=(e=i(Tr(t.dataLayer,t.items,o.getNames),e))&&e.forEach(function(e){e.allowed?e.data&&o.set(e.name,e.data):o.remove(e.name)})}var r=Mr(t),i=Nr(t.dataLayer,{items:t.items,type:e,getConsent:r});return e=void 0===t.checkConsentOnInit&&t.enableAutoRemove,t.enableAutoRemove&&Ir(t,n),e&&n(r()),Object.assign({},o,{set:function(e,t,n){var r=i(e);null!=r&&r.allowed&&(r=null!=(r=r.data)?r:t,o.set.apply(null,n?[e,r,n]:[e,r]))},check:i})}function Sr(e,t){return{check:Nr(t.dataLayer,{items:t.items,type:e,getConsent:Mr(t)})}}var Dr=function(o){this.setItem=function(e,t,n,r){e="".concat(e,"=").concat(o.getConfiguration("encodeStorageBase64")?V.base64.encode(JSON.stringify(t)):encodeURIComponent(JSON.stringify(t))),e=(e=(e=(e=(e+=";path=".concat(o.getConfiguration("cookiePath")))+";domain=".concat(o.getConfiguration("cookieDomain")))+(o.getConfiguration("cookieSecure")?";secure":""))+";samesite=".concat(o.getConfiguration("cookieSameSite")))+(n?";expires=".concat(n.toUTCString()):"");document.cookie=e,r&&r()},this.getItem=function(t,e){var n=null,t=new RegExp("(?:^| )".concat(t,"=([^;]+)")).exec(document.cookie)||null;if(t)try{n=JSON.parse(decodeURIComponent(t[1]))}catch(e){n=JSON.parse(V.base64.decode(t[1]))}e&&e(n)},this.deleteItem=function(e,t){var n=new Date;n.setTime(n.getTime()-1e3),this.setItem(e,"",n,t)}},Mr=function(t){return function(){var e=t.dataLayer.get("consent");return e&&e[t.productName]||null}},Ir=function(t,n){function e(e){(e=(null==e?void 0:e[t.productName])||null)!==r&&n(r=e)}var r=null;return t.dataLayer.addChangeListener("consent",e),function(){t.dataLayer.removeChangeListener(e)}},Nr=function(e,t){return e.utils.checkConsent.createCheckConsentWrapper(t)},Tr=function(e,t,n){var r=e.utils.checkConsent,o=r.itemsToMask(t),i=Object.keys(t).filter(function(e){return!r.isMask(e)});return n().filter(function(e){return i.includes(e)||r.getByMask(e,o)})},Lr={createLocalStorage:function(e){t=e.dataLayer,o=se.__protected__.ttlName,r=Nr((t={dataLayer:t,productName:"DL"}).dataLayer,{items:((n={})[o]="mandatory",n),type:"localStorage",getConsent:Mr(t)}),i=function(){var e=r(o);return e.allowed&&!e.data},a=!0,Ir(t,u),u();var t,n,r,o,i,a,s=function(){return a};function u(){(a=i())||se.remove(o)}var c=xr(se,"localStorage",e);return Object.assign({},c,{set:function(e,t,n){var r=n;return null!=n&&n.expires&&!s()&&delete(r=Object.assign({},n)).expires,c.set(e,t,r)}})},createProperty:function(e){return Sr("property",e)},createCookie:function(a){function e(e){null!=(e=i(Tr(a.dataLayer,l,m.getNames),e))&&e.forEach(function(e){function t(){return u[e.name]||s.getByMask(e.name,c)||r}e.allowed?e.data&&m.set(e.name,e.data,t()):m.remove(e.name,t())})}var t,s=a.dataLayer.utils.checkConsent,n=Mr(a),u={},c=[],l={},r={},i=(Object.keys(a.items).forEach(function(e){var t,n,r,o,i=a.items[e];i.type?(t=i.type,n=i.domain,r=i.path,o={},l[e]=t,n&&(o.domain=n),r&&(o.path=r),s.isMask(e)?c.push(s.createMask(e,o)):u[e]=o):l[e]=i}),Nr(a.dataLayer,{items:l,type:"cookie",getConsent:n}));t=!(void 0!==a.checkConsentOnInit||!a.enableAutoRemove),a.enableAutoRemove&&(r=a.enableAutoRemove,Ir(a,e)),t&&e(n());return Object.assign({},m,{check:i,set:function(e,t,n,r){var o=i(e);null!=o&&o.allowed&&m.set(e,null!=(e=o.data)?e:t,n,r)}})},createSessionStorage:function(e){return xr(ke,"sessionStorage",e)},createEvent:function(e){return Sr("event",e)}},jr={"*":"optional",pa_vid:"mandatory",pa_privacy:"mandatory",atuserid:"essential"},Hr={"click.exit":"mandatory","click.navigation":"mandatory","click.download":"mandatory","click.action":"mandatory","page.display":"mandatory"},Ur={"*":"optional",connection_type:"mandatory",device_timestamp_utc:"mandatory",visitor_privacy_consent:"mandatory",visitor_privacy_mode:"mandatory",ch_ua:"mandatory",ch_ua_arch:"mandatory",ch_ua_bitness:"mandatory",ch_ua_full_version:"mandatory",ch_ua_full_version_list:"mandatory",ch_ua_mobile:"mandatory",ch_ua_model:"mandatory",ch_ua_platform:"mandatory",ch_ua_platform_version:"mandatory",app_crash:"essential",app_crash_class:"essential",app_crash_screen:"essential",app_version:"essential",browser:"essential",browser_cookie_acceptance:"essential",browser_group:"essential",browser_version:"essential",click:"essential",click_chapter1:"essential",click_chapter2:"essential",click_chapter3:"essential",click_full_name:"essential",connection_monitor:"essential",connection_organisation:"essential",cookie_creation_date:"essential",date:"essential",date_day:"essential",date_daynumber:"essential",date_month:"essential",date_monthnumber:"essential",date_week:"essential",date_year:"essential",date_yearofweek:"essential",device_brand:"essential",device_display_height:"essential",device_display_width:"essential",device_name:"essential",device_name_tech:"essential",device_screen_diagonal:"essential",device_screen_height:"essential",device_screen_width:"essential",device_type:"essential",event_collection_platform:"essential",event_collection_version:"essential",event_hour:"essential",event_id:"essential",event_minute:"essential",event_position:"essential",event_second:"essential",event_time:"essential",event_time_utc:"essential",event_url:"essential",event_url_domain:"essential",event_url_full:"essential",exclusion_cause:"essential",exclusion_type:"essential",geo_city:"essential",geo_continent:"essential",geo_country:"essential",geo_metro:"essential",geo_region:"essential",goal_type:"essential",hit_time_utc:"essential",os:"essential",os_group:"essential",os_version:"essential",os_version_name:"essential",page:"essential",page_chapter1:"essential",page_chapter2:"essential",page_chapter3:"essential",page_duration:"essential",page_full_name:"essential",page_position:"essential",page_title_html:"essential",page_url:"essential",pageview_id:"essential",previous_url:"essential",privacy_status:"essential",site:"essential",site_env:"essential",site_id:"essential",site_platform:"essential",src:"essential",src_detail:"essential",src_direct_access:"essential",src_organic:"essential",src_organic_detail:"essential",src_portal_domain:"essential",src_portal_site:"essential",src_portal_site_id:"essential",src_portal_url:"essential",src_referrer_site_domain:"essential",src_referrer_site_url:"essential",src_referrer_url:"essential",src_se:"essential",src_se_category:"essential",src_se_country:"essential",src_type:"essential",src_url:"essential",src_url_domain:"essential",src_webmail:"essential"};function Br(e,t){var n;return n=t,window.pdl&&window.pdl.consent_items&&window.pdl.consent_items.PA&&window.pdl.consent_items.PA[n]&&Object.assign(e,window.pdl.consent_items.PA[t]),e}function Rr(o){function r(){return"v2"===window.pdl.requireConsent}this.storageKeys=["pa_vid","pa_user","pa_privacy","atuserid"],this.propertyConsent={},this.eventConsent={},this.storageConsent={},this.consentItems={propertyItems:{},eventItems:{},cookieItems:{}},this.modeMetadata={"opt-in":{visitor_privacy_consent:!0,visitor_privacy_mode:"optin"},"opt-out":{visitor_privacy_consent:!1,visitor_privacy_mode:!0===o.getConfiguration("enableExtendedOptout")?"extended-optout":"optout"},essential:{visitor_privacy_consent:!1,visitor_privacy_mode:"exempt"},custom:{visitor_privacy_consent:!1,visitor_privacy_mode:"custom"}};this.init=function(){this.consentItems={propertyItems:Br(Ur,"properties"),eventItems:Br(Hr,"events"),cookieItems:Br(jr,"storages")},this.propertyConsent=Lr.createProperty({dataLayer:T,productName:"PA",items:this.consentItems.propertyItems}),this.eventConsent=Lr.createEvent({dataLayer:T,productName:"PA",items:this.consentItems.eventItems}),this.storageConsent=Lr.createCookie({dataLayer:T,productName:"PA",items:this.consentItems.cookieItems}),o.getConfiguration("isLegacyPrivacy")||(this.initMode(),this.filterKeys())},this.initMode=function(){null===T.get("consent")&&(window.pdl.consent&&window.pdl.consent.defaultPreset?T.set("consent",0):this.setMode("opt-in"))},this.setMode=function(e){T.set("consent",{PA:{mode:e}}),this.filterKeys()},this.setPresets=function(e){T.set("consent",e),this.filterKeys()},this.getMode=function(){var e="opt-in",t=T.get("consent");return e=t&&t.PA&&t.PA.mode?T.get("consent").PA.mode:e},this.setCustomModeMetadata=function(e,t){this.modeMetadata.custom.visitor_privacy_mode=t||"custom",this.modeMetadata.custom.visitor_privacy_consent=e},this.setAllPurposes=function(e){if(r())return T.utils.setConsent(e)},this.setByPurpose=function(e,t,n){r()&&T.utils.setConsent(e,t,n)},this.getByPurpose=function(){return T.utils.getConsent()},this.getModeMetadata=function(){return this.modeMetadata[this.getMode()]||{}},this.getConsentItems=function(){return this.consentItems},this.isPropAllowed=function(e){return!0===o.getConfiguration("enableExtendedOptout")&&"opt-out"===this.getMode()||this.propertyConsent.check(e).allowed}.bind(this),this.isEventAllowed=function(e){return!0===o.getConfiguration("enableExtendedOptout")&&"opt-out"===this.getMode()||this.eventConsent.check(e).allowed}.bind(this),this.isKeyAllowed=function(e){return this.storageConsent.check(e).allowed}.bind(this),this.filterProps=function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&!this.isPropAllowed(t)&&delete e[t]},this.filterEvents=function(e){for(var t=e.length-1;0<=t;t--)this.isEventAllowed(e[t].name)||e.splice(t,1)},this.filterKeys=function(){var e,t=b(this.storageKeys);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.isKeyAllowed(n)||o._storage.deleteItem(n)}}catch(e){t.e(e)}finally{t.f()}},this.setItem=function(e,t,n,r){this.isKeyAllowed(e)?o._storage.setItem(e,t,n,r):r&&r()},this.dl=T,this.init()}function Vr(n,e,t,r){var o,i=t?null:n,a=e||[],s=!1,u=!1,c=!1;if(0<a.length){for(var l=0;l<a.length;l++)d(a[l],i);f()}function d(e,t){try{(function e(t,n,r,o){var i=t[n[0]];return void 0===i||(1===n.length?(i.apply(o||t,r),!1):e(i,n.slice(1),r,o))})(n,e[0].split("."),e.slice(1),t)?u=!0:s=!0}catch(e){u=!0}}function f(){u&&s&&!c&&(console.error("Piano Analytics SDK - window.".concat(r,' is used for Piano Analytics integration and somewhere else. Please check "queueVarName" configuration if needed.')),c=!0)}t&&(o=window[r].push.bind(window[r]),window[r].push=function(e){d(e),f(),o(e)})}function Kr(o){function n(e,t,n,r){return n=u(t[n].events[e],r),t=u(t["*"].events[e],r),n||t}function r(e,t,n,r,o){var i,o=o?(i=c(t[n].properties,e,r,o),c(t["*"].properties,e,r,o)):(i=l(t[n].properties,e,r),l(t["*"].properties,e,r));return i||o}function i(e,t,n,r){return n=d(t[n].storage,e,r),t=d(t["*"].storage,e,r),n||t}var a=o.getConfiguration("privacy"),s=(this.currentMode="",this.modes=a.modes,this._storageKeys=Object.assign(a.legacyKeys,a.storageKeys),this.init=function(){o.getConfiguration("isLegacyPrivacy")&&(window._pac=window._pac||{privacy:[]},Vr(this,window._pac.privacy),o._storage.getItem(a.storageKey,function(e){this.setMode(e&&this.modes[e]?e:o.getConfiguration("privacyDefaultMode"))}.bind(this)))},this.setMode=function(t){t!==this.currentMode&&this.modes[t]&&(this.currentMode=t,o._storage.getItem(a.storageKey,function(e){"optout"===t||"no-consent"===t||"no-storage"===t?o.setConfiguration("visitorId",this.modes[t].visitorId):"OPT-OUT"!==o.getConfiguration("visitorId")&&"no-consent"!==o.getConfiguration("visitorId")&&"no-storage"!==o.getConfiguration("visitorId")||o.cfg.deleteProperty("visitorId"),this.filterProps(o._properties),this.filterKeys(),e!==t&&((e=new Date).setTime(e.getTime()+24*o.getConfiguration("storageLifetimePrivacy")*60*60*1e3),this.setItem(a.storageKey,t,e))}.bind(this)))},this.createMode=function(e,t){var n;this.modes[e]||((n=S(this.modes.exempt)).name=e,n.properties.include.visitor_privacy_mode=e,n.properties.include.visitor_privacy_consent=t,this.modes[e]=n)},this.getMode=function(){return this.currentMode},function(e,t,n,r,o,i){var a=["*"],s=["*"],u="properties",c=r?"forbidden":"allowed";t&&(a="string"==typeof t?[t]:t),n&&(s="string"==typeof n?[n]:n),o&&(u="storage"),i&&(u="events");for(var l=0;l<a.length;l++)if(void 0!==this.modes[a[l]])for(var d=this.modes[a[l]],f=0;f<s.length;f++){var p=d[u][c];void 0!==p[s[f]]||o||i||(p[s[f]]={});for(var v=0;v<e.length;v++)o||i?p[e[v]]=!0:p[s[f]][e[v]]=!0}}.bind(this)),u=(this.include={properties:function(e,t,n){s(e,t,n)},property:function(e,t,n){s([e],t,n)},storageKeys:function(e,t){s(e,t,null,!1,!0)},storageKey:function(e,t){s([e],t,null,!1,!0)},events:function(e,t){s(e,t,null,!1,!1,!0)},event:function(e,t){s([e],t,null,!1,!1,!0)}},this.exclude={properties:function(e,t,n){s(e,t,n,!0)},property:function(e,t,n){s([e],t,n,!0)},storageKeys:function(e,t){s(e,t,null,!0,!0)},storageKey:function(e,t){s([e],t,null,!0,!0)},events:function(e,t){s(e,t,null,!0,!1,!0)},event:function(e,t){s([e],t,null,!0,!1,!0)}},function(e,t){if(e[t])return!0;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&"*"===n.charAt(n.length-1)&&0===t.indexOf(n.substring(0,n.length-1)))return!0;return!1}),c=(this.isEventAllowed=function(e){var t=n("forbidden",this.modes,this.currentMode,e),e=n("allowed",this.modes,this.currentMode,e);return!t&&e},function(e,t,n,r){var o,i=e[t];if(i[r]&&i[r][n]||i["*"][n])return!0;for(o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&"*"===o.charAt(o.length-1)&&0===r.indexOf(o.substring(0,o.length-1))||o===r)for(var a in i[o])if(Object.prototype.hasOwnProperty.call(i[o],a)&&("*"===a.charAt(a.length-1)&&0===n.indexOf(a.substring(0,a.length-1))||n===a))return!0;return!1}),l=function(e,t,n){if("forbidden"===t&&e[t]["*"][n])return!0;for(var r in e[t])if(Object.prototype.hasOwnProperty.call(e[t],r)){if(e[t][r][n])return!0;for(var o in e[t][r])if("*"===o.charAt(o.length-1)&&0===n.indexOf(o.substring(0,o.length-1)))return!0}return!1},d=(this.isPropAllowed=function(e,t){var n=r("forbidden",this.modes,this.currentMode,e,t),e=r("allowed",this.modes,this.currentMode,e,t);return!n&&e},function(e,t,n){var r,o=e[t];if(o[n])return!0;for(r in o)if(Object.prototype.hasOwnProperty.call(o,r)&&"*"===r.charAt(r.length-1)&&0===n.indexOf(r.substring(0,r.length-1)))return!0;return!1});this.isKeyAllowed=function(e){var t=i("forbidden",this.modes,this.currentMode,e),e=i("allowed",this.modes,this.currentMode,e);return!t&&e},this.setItem=function(e,t,n,r){this.isKeyAllowed(e)?o._storage.setItem(e,t,n,r):r&&r()},this.filterProps=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&!this.isPropAllowed(n,t||void 0)&&delete e[n]},this.filterKeys=function(){for(var e in this._storageKeys)Object.prototype.hasOwnProperty.call(this._storageKeys,e)&&!this.isKeyAllowed(e)&&o._storage.deleteItem(e)},this.filterEvents=function(e){for(var t=e.length-1;0<=t;t--)this.isEventAllowed(e[t].name)||e.splice(t,1)},this.getModeMetadata=function(){return this.modes[this.getMode()].properties.include},this.init()}function Yr(i){this.modeEnum={OPTOUT:i.getConfiguration("isLegacyPrivacy")?"optout":"opt-out"},this.call=function(e){for(var t=i.getConfiguration("isLegacyPrivacy")?"privacy":"consent",n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return i[t][e].apply(i[t],r)}}function qr(o){var i=o.getConfiguration("storageUser");this.setUser=function(e,t,n){var r={id:e,category:t};o.setProperties({user_id:e,user_category:t,user_recognition:!1},{persistent:!0}),!1!==n&&((e=new Date).setTime(e.getTime()+24*o.getConfiguration("storageLifetimeUser")*60*60*1e3),o._privacy.call("setItem",i,r,e))},this.getUser=function(n){o._storage.getItem(i,function(e){var t=e;!e&&o._properties.user_id&&(t={id:o._properties.user_id.value,category:o._properties.user_category.value}),n&&n(t)})},this.deleteUser=function(e){o.deleteProperty("user_id"),o.deleteProperty("user_category"),o.deleteProperty("user_recognition"),o._storage.deleteItem(i,function(){e&&e()})}}function Fr(w){function C(){this.debugError={trigger:"AvInsights:Media:setContentValues:Error",level:"ERROR",messageObject:"Not an object"},this.processHeartbeatValue=function(e,t){e=parseInt(e,10);return e?Math.max(e,t):0},this.value2Number=function(e){var t=0;return isNaN(Number(e))||(t=Number(e)),Math.max(t,0)}}var k={minHeartbeat:w.getConfiguration("minHeartbeat"),minBufferingHeartbeat:w.getConfiguration("minBufferingHeartbeat")},P="_ATVALUE",O="_ATPREFIX";function A(e,t){var n,e=e.length<2||":"!==e[1]?(n="",e):e.length<4||":"!==e[3]?(n=e.substring(0,1),e.substring(2,e.length)):(n=e.substring(0,3),e.substring(4,e.length));return t&&(n=n.toLowerCase(),e=e.toLowerCase()),{prefix:n,key:e}}function E(e){return null!==e&&"object"===c(e)&&!(e instanceof Array)}function x(e,t,n,r,o){var i,a,s,u="",c="",l="",d=0;for(s in e)if(Object.prototype.hasOwnProperty.call(e,s))if(u=(i=A(s,o)).prefix||r||"",c=(t?t+"_":"")+i.key,E(e[s]))x(e[s],c,n,u,o);else{for(a=c.split("_"),l="",d=0;d<a.length;d++)u=(i=A(a[d],o)).prefix||u,l+=i.key+(d<a.length-1?"_":"");n[c=l||c]=n[c]||{},n[c][P]=e[s],n[c][O]=u}}w.avInsights={},w.avInsights.Media=function(e,t,n){function r(e){e?f.delayBufferingConfiguration=S(f.delayBufferingConfigurationBackup):f.delayConfiguration=S(f.delayConfigurationBackup)}function o(e,t){if(t){h(e);var n,r={};for(n in E(t)?r=t:isNaN(t)?r=JSON.parse(t):r[0]=t,r)Object.prototype.hasOwnProperty.call(r,n)&&(e?f.delayBufferingConfiguration.push({delay:d.processHeartbeatValue(n,0),number:0,timeout:-1,refresh:d.processHeartbeatValue(r[n],k.minBufferingHeartbeat)}):f.delayConfiguration.push({delay:d.processHeartbeatValue(n,0),number:0,timeout:-1,refresh:d.processHeartbeatValue(r[n],k.minHeartbeat)}));m(e),g(e)}}function i(e,t,n,r){var o=S(v),t=(o.av_session_id={},o.av_session_id[P]=f.sessionId,o.av_session_id[O]="",t&&(_(o),f.previousEvent=e),E(r)&&x(r,null,o,null,!0),b(o));w.sendEvent(e,t,n)}function a(){var e=this,t=0,n=0;e.getEventDuration=function(){var e=(new Date).getTime()-t-n;return n+=e,e},e.initBaseTime=function(){0===t&&(t=(new Date).getTime())},e.resetProperties=function(){n=t=0},e.initHeartbeatTimer=function(e,t){var n=t?f.delayBufferingConfiguration:f.delayConfiguration;0<n.length&&(y(t),clearTimeout(n[0].timeout),n[0].timeout=setTimeout(function(){0===n[0].number&&n.splice(0,1),e&&e()},1e3*n[0].refresh))},e.stopHeartbeatTimer=function(e){for(var t=e?f.delayBufferingConfiguration:f.delayConfiguration,n=0;n<t.length;n++)clearTimeout(t[n].timeout),t[n].timeout=-1}}function s(e,t,n,r,o){p.initBaseTime(),f.eventDuration=p.getEventDuration(),f.previousCursorPosition=f.currentCursorPosition,f.currentCursorPosition=e?f.previousCursorPosition+Math.floor(f.playbackSpeed*f.eventDuration):n,t&&p.initHeartbeatTimer(function(){s(!0,!0)},!1),i("av.heartbeat",!0,r,o)}function u(e,t,n){p.initBaseTime(),f.eventDuration=p.getEventDuration(),e&&p.initHeartbeatTimer(function(){u(!0)},!0),i("av.buffer.heartbeat",!0,t,n)}function c(e,t,n){p.initBaseTime(),f.eventDuration=p.getEventDuration(),f.previousCursorPosition=f.currentCursorPosition,e&&p.initHeartbeatTimer(function(){c(!0)},!0),i("av.rebuffer.heartbeat",!0,t,n)}var l=this,d=new C,f=null,p=null,v=null,g=function(e){e?f.delayBufferingConfigurationBackup=S(f.delayBufferingConfiguration):f.delayConfigurationBackup=S(f.delayConfiguration)},h=function(e){e?(f.delayBufferingConfiguration=[],f.delayBufferingConfigurationBackup=[]):(f.delayConfiguration=[],f.delayConfigurationBackup=[])},m=function(e){(e?f.delayBufferingConfiguration:f.delayConfiguration).sort(function(e,t){return e.delay<t.delay?-1:e.delay>t.delay?1:0})},y=function(e){var t,e=e?f.delayBufferingConfiguration:f.delayConfiguration;void 0===(t=void 0!==e[1]?e[1].delay:t)?e[0].number=1:0<e[0].number?e[0].number--:"number"==typeof t&&(e[0].number=Math.floor(60*(t-e[0].delay)/e[0].refresh)-1)},_=function(e){e.av_previous_position={},e.av_previous_position[P]=f.previousCursorPosition,e.av_previous_position[O]="",e.av_position={},e.av_position[P]=f.currentCursorPosition,e.av_position[O]="",e.av_duration={},e.av_duration[P]=f.eventDuration,e.av_duration[O]="",e.av_previous_event={},e.av_previous_event[P]=f.previousEvent,e.av_previous_event[O]=""},b=function(e){var t,n={};for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(Object.prototype.hasOwnProperty.call(e[t],P)?n[e[t][O]?"".concat(e[t][O],":").concat(t):t]=e[t][P]:n[t]=e[t]);return n};l.set=function(e,t){e=A(e,!0);v[e.key]=v[e.key]||{},v[e.key][P]=t,v[e.key][O]=e.prefix},l.get=function(e){var t=null,e=A(e,!0);return t=void 0!==v[e.key]?v[e.key][P]:t},l.del=function(e){e=A(e,!0);void 0!==v[e.key]&&delete v[e.key]},l.setProps=function(e){E(e)&&x(e,null,v,null,!0)},l.getProps=function(){var e,t=null;for(e in v)Object.prototype.hasOwnProperty.call(v,e)&&((t=t||{})[e]=v[e][P]);return t},l.delProps=function(){v={}};l.setPlaybackSpeed=function(e){e=d.value2Number(e)||f.playbackSpeed;e!==f.playbackSpeed&&(p.stopHeartbeatTimer(!1),f.isPlaying&&(s(!0,!1),p.initHeartbeatTimer(function(){s(!0,!0)},!1)),f.playbackSpeed=e)},l.getSessionID=function(){return f.sessionId},l.track=function(e,t,n,r){var o=t||{};switch(e){case"av.heartbeat":l.heartbeat(o.av_position,n,r);break;case"av.buffer.heartbeat":l.bufferHeartbeat(n,r);break;case"av.rebuffer.heartbeat":l.rebufferHeartbeat(n,r);break;case"av.play":l.play(o.av_position,n,r);break;case"av.buffer.start":l.bufferStart(o.av_position,n,r);break;case"av.start":l.playbackStart(o.av_position,n,r);break;case"av.resume":l.playbackResumed(o.av_position,n,r);break;case"av.pause":l.playbackPaused(o.av_position,n,r);break;case"av.stop":l.playbackStopped(o.av_position,n,r);break;case"av.backward":l.seekBackward(o.av_previous_position,o.av_position,n,r);break;case"av.forward":l.seekForward(o.av_previous_position,o.av_position,n,r);break;case"av.seek.start":l.seekStart(o.av_previous_position,n,r);break;case"av.error":l.error(o.av_player_error,n,r);break;default:i(e,!1,n,r)}},l.heartbeat=function(e,t,n){var r,o=!0;null!=e&&0<=e&&(o=!1,r=d.value2Number(e)),s(o,!1,r,t,n)},l.bufferHeartbeat=function(e,t){u(!1,e,t)},l.rebufferHeartbeat=function(e,t){c(!1,e,t)},l.play=function(e,t,n){p.initBaseTime();e=d.value2Number(e);f.eventDuration=0,f.previousCursorPosition=e,f.currentCursorPosition=e,f.isPlaying=!1,f.isPlaybackActivated=!1,p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0),i("av.play",!0,t,n)},l.bufferStart=function(e,t,n){p.initBaseTime();e=d.value2Number(e);f.eventDuration=p.getEventDuration(),f.previousCursorPosition=f.currentCursorPosition,f.currentCursorPosition=e,p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0),f.isPlaybackActivated?(p.initHeartbeatTimer(function(){c(!0)},!0),i("av.rebuffer.start",!0,t,n)):(p.initHeartbeatTimer(function(){u(!0)},!0),i("av.buffer.start",!0,t,n))},l.playbackStart=function(e,t,n){p.initBaseTime();e=d.value2Number(e);f.eventDuration=p.getEventDuration(),f.previousCursorPosition=e,f.currentCursorPosition=e,f.isPlaying=!0,f.isPlaybackActivated=!0,p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0),p.initHeartbeatTimer(function(){s(!0,!0)},!1),i("av.start",!0,t,n)},l.playbackResumed=function(e,t,n){p.initBaseTime();e=d.value2Number(e);f.eventDuration=p.getEventDuration(),f.previousCursorPosition=f.currentCursorPosition,f.currentCursorPosition=e,f.isPlaying=!0,f.isPlaybackActivated=!0,p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0),p.initHeartbeatTimer(function(){s(!0,!0)},!1),i("av.resume",!0,t,n)},l.playbackPaused=function(e,t,n){p.initBaseTime();e=d.value2Number(e);f.eventDuration=p.getEventDuration(),f.previousCursorPosition=f.currentCursorPosition,f.currentCursorPosition=e,f.isPlaying=!1,f.isPlaybackActivated=!0,p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0),i("av.pause",!0,t,n)},l.playbackStopped=function(e,t,n){p.initBaseTime();e=d.value2Number(e);f.eventDuration=p.getEventDuration(),f.previousCursorPosition=f.currentCursorPosition,f.currentCursorPosition=e,f.isPlaying=!1,f.isPlaybackActivated=!1,p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0),p.resetProperties(),r(!1),r(!0),i("av.stop",!0,t,n),f.previousCursorPosition=0,f.currentCursorPosition=0,f.eventDuration=0,f.previousEvent="",f.sessionId=K.v4()},l.seek=function(e,t,n,r){e=d.value2Number(e),t=d.value2Number(t);t<e?l.seekBackward(e,t,n,r):l.seekForward(e,t,n,r)},l.seekBackward=function(e,t,n,r){l.seekStart(e,null,r),f.eventDuration=0,f.previousCursorPosition=d.value2Number(e),f.currentCursorPosition=d.value2Number(t),i("av.backward",!0,n,r)},l.seekForward=function(e,t,n,r){l.seekStart(e,null,r),f.eventDuration=0,f.previousCursorPosition=d.value2Number(e),f.currentCursorPosition=d.value2Number(t),i("av.forward",!0,n,r)},l.seekStart=function(e,t,n){e=d.value2Number(e);f.previousCursorPosition=f.currentCursorPosition,f.currentCursorPosition=e,f.isPlaying?f.eventDuration=p.getEventDuration():f.eventDuration=0,i("av.seek.start",!0,t,n)},l.adClick=function(e,t){i("av.ad.click",!1,e,t)},l.adSkip=function(e,t){i("av.ad.skip",!1,e,t)},l.error=function(e,t,n){var r={};(r=E(n)?n:r).av_player_error=String(e),i("av.error",!1,t,r)},l.display=function(e,t){i("av.display",!1,e,t)},l.close=function(e,t){i("av.close",!1,e,t)},l.volume=function(e,t){i("av.volume",!1,e,t)},l.subtitleOn=function(e,t){i("av.subtitle.on",!1,e,t)},l.subtitleOff=function(e,t){i("av.subtitle.off",!1,e,t)},l.fullscreenOn=function(e,t){i("av.fullscreen.on",!1,e,t)},l.fullscreenOff=function(e,t){i("av.fullscreen.off",!1,e,t)},l.quality=function(e,t){i("av.quality",!1,e,t)},l.speed=function(e,t){i("av.speed",!1,e,t)},l.share=function(e,t){i("av.share",!1,e,t)},o(!(f={previousCursorPosition:0,currentCursorPosition:0,eventDuration:0,playbackSpeed:1,previousEvent:"",isPlaybackActivated:!1,isPlaying:!1,sessionId:"",delayConfiguration:[],delayConfigurationBackup:[],delayBufferingConfiguration:[],delayBufferingConfigurationBackup:[]}),e),o(!0,t),f.sessionId=n||K.v4(),p=new a,e=window,t="pagehide",n=function(){p.stopHeartbeatTimer(!1),p.stopHeartbeatTimer(!0)},e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n),v={}}}function L(e){var t,n=this;for(t in n.cfg=new Y(S(e)||H),n.setConfiguration=n.cfg.setConfiguration,n.setConfigurations=n.cfg.setConfigurations,n.getConfiguration=n.cfg.getConfiguration,window._pac=window._pac||{privacy:[]},window._pac)Object.prototype.hasOwnProperty.call(window._pac,t)&&"privacy"!==t&&n.setConfiguration(t,window._pac[t]);this._storage=new Dr(this),this._queue=new q(this),this._properties={},this._sendEvent=Wr;var r,e=this;e.setConfiguration("isLegacyPrivacy",!0),void 0===window.pdl?window.pdl={migration:{browserId:{source:"PA"}},cookies:{storageMode:"fixed"}}:(window.pdl.requireConsent&&e.setConfiguration("isLegacyPrivacy",!1),void 0===window.pdl.cookies?window.pdl.cookies={storageMode:"fixed"}:window.pdl.cookies&&void 0===window.pdl.cookies.storageMode&&(window.pdl.cookies.storageMode="fixed")),T.init({cookieDefault:{domain:e.getConfiguration("cookieDomain"),secure:e.getConfiguration("cookieSecure"),path:e.getConfiguration("cookiePath"),samesite:e.getConfiguration("cookieSameSite")},cookies:{_pcid:{expires:e.getConfiguration("storageLifetimeVisitor")}}}),e.privacy=new Kr(e),e.consent=new Rr(e),e._privacy=new Yr(e),this.user=new qr(this),Fr(this),r=(e=this).getConfiguration("queueVarName"),window[r]=window[r]||[],Vr(e,window[r],!0,r)}function Wr(e,t){for(var n=[kr,Er,Ar,z,yr,Pr,wr,W,Cr,Or],r=0;r<e.length;r++){var o={name:"",data:{}};if("string"==typeof e[r])o.name=e[r];else{if(void 0!==e[r].data)continue;o.name=e[r].name}e[r]=o}var i,t={events:S(e),options:S(t)};0<n.length&&"function"==typeof n[0]&&(i=new Y(this.cfg.cloneData()),n[0](this,new F(this,t,i),n.slice(1)))}L.prototype.setProperty=function(e,t,n){this._privacy.call("isPropAllowed",e)&&(this._properties[e]={value:t,options:n||{}})},L.prototype.setProperties=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.setProperty(n,e[n],t)},L.prototype.deleteProperty=function(e){delete this._properties[e]},L.prototype.sendEvent=function(e,t,n){this._queue.push(["_sendEvent",[{name:e,data:t}],n])},L.prototype.sendEvents=function(e,t){this._queue.push(["_sendEvent",e,t])},L.prototype.getVisitorId=function(e){var t,n=this.getConfiguration("visitorId")||null;if(n=n||T.get("browserId"),(t=e)&&t(n),void 0===e)return n},L.prototype.setVisitorId=function(e){this.setConfiguration("visitorId",e);var t=new Date;t.setTime(t.getTime()+24*this.getConfiguration("storageLifetimeVisitor")*60*60*1e3),this._privacy.call("setItem",this.getConfiguration("storageVisitor"),e,t,function(){T.updateMigration()})},L.prototype.setUser=function(e,t,n){this.user.setUser(e,t,n)},L.prototype.getUser=function(e){this.user.getUser(e)},L.prototype.deleteUser=function(){this.user.deleteUser()},(L.prototype.PA=L).prototype.refresh=function(){null===this.getConfiguration("isManualPageRefresh")&&this.setConfiguration("isManualPageRefresh",!0),this.getConfiguration("isManualPageRefresh")&&T.refresh()},L.prototype.setContentProperty=function(e,t){var n={};"content_publication_date"===e||"tags_array"===e?n[{content_publication_date:"createdAt",tags_array:"tags"}[e]]=t:n[e]=t,T.set("content",n)},L.prototype.setContentProperties=function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.setContentProperty(t,e[t])};r=new L(H),window&&!window[r.getConfiguration("globalVarName")]&&(window[r.getConfiguration("globalVarName")]=r);vn=r;return j.pianoAnalytics=vn,Object.defineProperty(j,"__esModule",{value:!0}),j}({});
.29c-0.61-0.22-1.44-0.08-2.45-0.39c-1.3-0.4-2.71-1.17-4.22-0.69
		c-0.51,0.16-0.71-0.33-1.08-0.2c-0.03,0.1-0.06,0.2-0.1,0.29c-0.29,0.13-0.84-0.15-0.98-0.1c-0.25-0.15-0.2-0.21-0.2-0.59
		c-0.38-0.11-0.67,0.03-0.98-0.2c-0.65,0-0.7,0.2-0.69,0.59c-0.55-0.08-1.33-0.07-1.86-0.1c0.19-0.33,0.26-0.22,0.59-0.2
		c-0.15-0.44-0.05-0.51,0.2-0.79c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.56-0.68-1.83-0.37-2.36-0.78c-0.25,0.01-0.36,0.01-0.49,0.1
		c-0.11,0.16-0.11,0.48-0.1,0.78c-0.16-0.21-0.2-0.51-0.2-0.88c-0.19-0.1-0.27-0.14-0.39-0.29c-0.33,0.03-0.66,0.07-0.98,0.1
		c-0.02,0.23-0.02,0.28-0.1,0.39c-0.15,0.26-0.42,0-0.59,0.49h-0.29c0.06-0.17,0.02-0.1,0.1-0.2c-0.08-0.34-0.14-0.27-0.29-0.49
		c-0.43,0.03-0.4,0.09-0.69,0.2c0.03,0.16,0.07,0.33,0.1,0.49c-0.28-0.24-0.33-0.16-0.59-0.39c-0.09,0.14-0.1,0.32-0.1,0.59
		c-0.13-0.13-0.26-0.26-0.39-0.39h-0.2c0.05,0.51,0.33,0.61,0.69,0.78v0.2c-0.47-0.11-0.92-0.29-1.27-0.2
		c-0.04,0.01-0.62,0.44-0.88,0.59c0.1,0.13,0.2,0.26,0.29,0.39c0.2-0.04,0.19-0.02,0.29-0.1h0.29c-0.12,0.26-0.19,0.2-0.29,0.49
		c-0.28-0.09-0.71-0.07-0.88-0.1c-0.03,0.03-0.07,0.07-0.1,0.1c0.03,0.35,0.01,0.33,0.2,0.49v0.2c-0.46-0.1-0.41-0.26-0.98-0.29
		c0.04,0.4-0.02,0.37,0.29,0.49v0.29c-0.31-0.15-0.21-0.26-0.39,0.1h-0.2c0.08-0.3,0.19-0.38,0.1-0.59v-0.39
		c-0.08,0.06-0.13,0.26-0.2,0.29c-0.06-0.06-0.13-0.13-0.2-0.2c-0.41-0.06-0.87,0.25-1.18,0.39c-0.04,0.26,0.13,0.57,0,0.88
		c-0.13,0.29-0.24-0.07-0.3,0.59c-0.63,0.05-0.61,0.32-0.98,0.59c0,0.29-0.01,0.54,0.1,0.69c0.12,0.22,0.17,0.2,0.39,0.29
		c-0.04,0.2-0.02,0.19-0.1,0.29v0.2c-0.19-0.11-0.41-0.48-0.49-0.69c-0.26,0.09-0.26,0.1-0.39,0.29c-0.14-0.22-0.13-0.6-0.29-0.79
		v-0.1c-0.27,0.23-0.49,0.59-0.59,0.98c-0.3-0.01-0.27-0.07-0.39,0c-0.34,0.13-0.36,0.36-0.59,0.59c0.02,0.45,0.01,0.42,0.3,0.59
		c-0.09,0.52-0.42,0.58-0.98,0.59c-0.17,0.39-0.39,0.62-0.69,0.88v0.49c0.46-0.25,0.84-0.74,1.28-0.98
		c0.53-0.29,0.83-0.04,1.27-0.39h0.2c-0.07,0.52-0.35,0.84-0.69,1.08c0.03,0.39,0.18,0.52,0.2,0.59c-0.03,0.57-0.12,0.32-0.29,0.49
		c-0.71,0.56-0.8,1.86-1.77,2.16c0.06,0.31,0.02,0.24,0.2,0.39v0.2h-0.39c-0.01,0.66-0.12,1.21-0.59,1.47
		c-0.02,0.88,0.12,0.58,0.49,0.88c0.09,0.15,0.02,0.69,0,0.98c-0.43,0.06-0.49,0.11-0.59,0.49c-0.31-0.06-0.29-0.09-0.49-0.2
		c-0.15,0.15-0.4,0.29-0.59,0.39c0.04,0.2,0.02,0.19,0.1,0.29v0.2c0.37-0.04,0.37-0.08,0.59-0.2c0.03,0.03,0.07,0.07,0.1,0.1
		c-0.18,0.43-0.61,0.57-0.88,0.88c-0.06,0.2-0.13,0.39-0.2,0.59c-0.36,0.49-0.88,1.14-1.08,1.77h-0.1
		c-0.24-0.36-0.62-0.47-0.88-0.79h-0.2c-0.1,0.28-0.13,0.75-0.29,0.98c-0.12,0.25-0.26,0.15-0.59,0.2c-0.07,0.35-0.16,0.46,0.1,0.69
		c-0.46,0.62-1.58,0.86-2.06,1.18c-0.33,0.22-0.35,0.67-0.59,0.98c-0.14,0.19-0.94,0.59-1.18,0.79c-0.17,0.28-0.29,0.85-0.59,1.27
		c0.01,0.44-0.04,0.46,0.29,0.59c-0.07,0.38-0.06,0.38-0.39,0.49c-0.07,2.15,0.83,3.9,0.69,5.98c0.12,0.24,0.49,0.26,0.59,0.49
		c0.03,0.36,0.07,0.72,0.1,1.08c0.2,0.53,1.15,1.16,1.77,1.28c0.18,0.88,0.83,0.49,1.57,0.59c1.56,0.22,2.73-2.05,3.63-2.94
		c0.03-0.02,1.05-0.37,1.28-0.39c0-0.27,0-0.45-0.1-0.59v-0.49h0.1c0.2,0.77,0.75,1.15,1.08,1.77c0.21,0.4,0.2,0.87,0.2,1.18
		c0.21,0.37,0.61,0.86,0.78,1.27c0.12,0.28,0.04,0.55,0.2,0.79c0.63,0.97,1.75,1.78,2.26,2.84h0.39v0.49
		c-0.23,0.02-0.28,0.02-0.39,0.1c-0.12,0.08,0.08,0.18,0.2,0.29c-0.11,0.08-0.16,0.08-0.39,0.1c0.06,0.22,0.07,0.26,0.19,0.39
		c-0.09,0.15-1.63,0.77-1.96,0.78c-0.06,0.33-0.11,0.41-0.29,0.59c-0.13,0.09-0.24,0.09-0.49,0.1c0.19,0.54,0.48,0.96,0.49,1.77
		c0.17-0.06,0.1-0.02,0.2-0.1c0.68,0,0.71,0.15,1.08,0.39c-0.09,0.24-0.11,0.15-0.2,0.39c-0.24-0.14-0.12,0.02-0.2-0.29
		c-0.28,0.11-0.61,0.18-0.98,0.2c-0.06,0.17-0.02,0.1-0.1,0.2c0.06,0.48,0.69,0.96,1.18,0.88c0.07-0.01,0.28-0.36,0.59-0.2
		c0.04,0.02,0.1,0.24,0.19,0.29c0.12-0.42,0.18-1.25,0.88-1.37c-0.13-0.24-0.33-0.27-0.49-0.49c-0.05-0.22,0.36-0.36,0.2-0.79
		c-0.09-0.24-0.22,0.08-0.29-0.49c0.4,0,0.51,0.01,0.69-0.2h0.1c-0.11-0.23-0.09-0.18-0.29-0.29v-0.59c0.03,0.03,0.06,0.07,0.1,0.1
		c0.24,0.11,0.28,0.25,0.49,0.39c-0.01,0.46-0.02,0.71-0.2,0.88v0.2c0.37-0.07,0.81,0.1,1.18,0c0.62-0.17,0.61-0.33,1.47-0.29
		c0.14-0.83-0.3-1.17,0.1-1.86h0.49c0.02-0.23,0.02-0.28,0.1-0.39c0.22-0.16,1.12-0.25,1.47,0c0.23-0.03,0.24-0.05,0.39-0.1
		c0.14-0.57,0.36-1.09,0.39-1.77c0.25,0.15,0.37,0.83,0.39,1.18h0.2c0.02-0.56,0.16-2.18,0.39-2.55v-0.98h-0.2
		c-0.1,0.52-0.2,1.05-0.29,1.57c-0.17,0.06-0.1,0.02-0.2,0.1c-0.17-0.31,0.15-0.48,0-0.88c-0.33-0.92,0.16-3.06-0.29-4.32
		c0.48-0.23,0.73-0.56,1.37-0.59c0.17-0.61,0.92-0.59,1.18-1.08c0.3-0.55-0.12-1.33,0.39-1.67c-0.04-0.23-1.74-2.18-1.96-2.26v-0.1
		c-0.31,0.16-0.12,0.06-0.1,0.39c-0.43-0.27-1.03-0.67-1.47-0.49c-0.51-0.58-0.68-1.58-0.98-2.35c0.25-0.06,0.05-0.03,0.29,0
		c0.03-0.7-0.11-0.48-0.29-0.98c0.1-0.48,0.11-0.86-0.1-1.28c0.33-0.29,1.68-2.85,1.67-3.04c0.2-0.32,0.37-0.1,0.69-0.29
		c0.23-0.15,0.04-0.36,0.2-0.59c0.14-0.19,0.54-0.16,0.69-0.39c0.38-0.61,0.11-1.35,0.69-1.77c-0.05-0.58-0.46-0.87-0.78-1.18
		c0.08-0.52,0.32-1.09,0.59-1.47c0.15-0.24,0.16-0.23,0.39-0.1c0.31-0.38,0.3-0.86,0.78-1.08c0.33-0.2,0.34-0.02,0.59,0.2
		c0.15,0.13,0.09-0.17,0.1-0.2c0.1,0.03,0.2,0.07,0.29,0.1c0.06-0.16,0.08-0.23,0.1-0.49c0.52,0.17,0.95,0.26,1.47,0.49
		c0.15,0.4,0.23,0.89,0.49,1.18c-0.06,0.17-0.02,0.1-0.1,0.2v0.1c-0.29-0.11-0.27-0.14-0.39-0.39h-0.39
		c0.1,0.28,0.17,0.35,0.39,0.49c-0.16,0.32-0.05,0.76-0.29,1.28c-0.22,0.48-0.55,0.75-0.59,1.47c-0.44,0.09-0.27,0.12-0.69,0.1
		c-0.12,0.65-0.22,1.27-0.59,1.67c-0.14,0.21-0.63,0.29-0.88,0.1h-0.2c0.08,0.6,0.49,0.74,0.2,1.08c0.09,0.47,0.33,1.28,0.59,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39v0.39c0.22,0.53,0.66,0.92,0.79,1.37c-0.03,0.13-0.07,0.26-0.1,0.39c0.06,0.03,0.13,0.07,0.2,0.1
		c0.28,0.81-0.32,1.27,0.2,1.77c-0.1,0.25-0.32,0.56-0.49,0.78c-0.13,0.08-0.52-0.04-0.88,0.1c-0.22,0.08-0.53,0.3-0.88,0.49
		c0.12,1.2,1.53,0.77,2.06,1.28h0.1c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c0.23,0.14,0.44,0.27,0.59,0.49c0.55-0.18,0.83-0.13,1.47-0.1
		c0.38-0.24,0.37-0.22,0.98-0.2c0.04-0.2,0.03-0.19,0.1-0.29c0.17-0.08,0.96,0.06,1.47-0.2c0.1-0.05,0.53-0.56,0.59-0.59
		c0.19-0.11,0.43,0.13,0.49,0.1c0.19-0.1,0.14-0.46,0.29-0.59c0.29-0.24,0.74-0.08,1.08-0.29c0.59-0.36,1.17-0.82,1.67-1.27
		c0.25,0.23,1.67-0.48,1.86-0.98c0.26,0.13,0.36,0.44,0.49,0.69c0.7,0.03,0.95,0.18,1.77,0c0.1,0.08,0.02,0.04,0.2,0.1
		c0.03,0.16,0.07,0.33,0.1,0.49c-0.3-0.01-0.52-0.03-0.59,0c-0.54,0.38,0.19,0.69-0.79,0.59c-0.07,0.24-0.07,0.25,0,0.49
		c-0.31-0.06-0.24-0.02-0.39-0.2h-0.2c0.06,0.5,0.36,0.66,0.2,0.98v0.2c-0.85,0.03-2.29,0.36-2.85,0c-0.48,0.01-0.58,0.09-0.88,0.2
		v0.29c-0.46-0.01-0.62,0.17-0.78,0.1c-0.21,0.08-0.2,0.1-0.2,0.1c-0.2,0.36-0.75,0.35-1.08,0.59c-0.58,0.41-0.36,0.99-0.98,1.28
		c0.22,0.31,0.3,0.12,0.49,0.29c0.18,0.15,0.16,0.49,0.3,0.69c0.36,0.51,0.95,0.72,1.57,0.98c0.07-0.07,0.13-0.13,0.2-0.2v-0.29h0.3
		c0.06,1.45,0.73,2.12,0.78,3.34c-0.28,0.27-0.43,0.58-0.78,0.79c-0.55,0.3-0.88-0.61-1.18-0.88c-0.45-0.42-1.13-0.22-1.27-0.98
		c-0.45,0.15-0.94,0.49-1.28,0.78c-0.35,0.5-0.54,3.4-0.2,4.12c0.36,0.75,1.28,2.24,0.49,3.24c-0.2,0.58-0.7,0.6-1.28,0.78
		c0.13,0.46,0.28,0.88-0.1,1.28c-0.21,0.58-0.71,0.48-1.18,0.78c-0.8-0.1-0.98-0.7-1.28-1.27c-0.97,0.02-3.04,0.9-3.43,1.37
		c-0.18,0.22-0.17,0.61-0.39,0.79c-0.9,0.69-2.34,0.61-3.04,1.47c-0.52-0.04-1.03-0.36-1.18-0.78c-0.3,0.1-0.37,0.21-0.69,0.29
		c-0.03-0.03-0.06-0.06-0.1-0.1c0.04-0.2,0.03-0.19,0.1-0.29c0.2-0.11,0.18-0.05,0.39,0v-0.1c0.09-0.27-0.2-0.38-0.1-0.79
		c-0.25-0.09-0.45-0.07-0.59-0.29c-0.48,0.09-0.68,0.44-0.88,0.79c-0.23-0.02-0.28-0.02-0.39-0.1c-0.65,0.13-0.54,0.7-0.98,0.98
		c-0.3,0.19-0.58,0-0.79,0.1c-0.5,0.24-0.34,0.59-1.27,0.59c0.08-0.49,0.28-1.02,0.49-1.37c-0.07-0.07-0.13-0.13-0.2-0.2h-0.39v0.39
		c-0.07,0.06-0.13,0.13-0.2,0.2c-0.59-0.01-0.97-0.2-1.18-0.29c-0.44-0.21-0.52-0.8-0.49-1.47c-0.26-0.13-0.33-0.24-0.69-0.29
		c0.03-0.13,0.07-0.26,0.1-0.39c0.54,0.15,0.42,0.51,1.08,0.59c-0.1,0.08-0.02,0.04-0.2,0.1c0.14,0.39,0.3,0.44,0.69,0.29
		c0.07,0.12,0.11,0.2,0.2,0.29c0.03,0.03,0.06,0.06,0.1,0.1c0.08-0.21,0.16-0.52,0.29-0.69c-0.02-0.88-0.34-1.21-0.59-1.86
		c-0.26-0.06-0.72-0.11-1.27-0.1c0.06-0.22,0.07-0.26,0.2-0.39c0.03-0.03,0.07-0.07,0.1-0.1v0.1h0.29
		c-0.14-0.38-0.02-0.76-0.29-1.08c0.21-0.13,0.43-0.02,0.59-0.1c1.35-0.49,0.09-1.54-0.49-1.86c-0.04-0.64,0.1-0.74,0.2-1.28
		c0.1-0.58-0.39-0.99-0.2-1.37v-0.2c-0.97,0.29-1.38,0.79-1.77,1.67c-0.52,0.19-1.06,0.05-1.57,0.39c-1.4,1.09-0.08,3.34-0.59,4.22
		c0.03,0.55,0.35,0.77,0.69,0.98c-0.01,1.09-0.47,2.37,0.3,3.24c-0.12,0.7-0.45,1.02-0.79,1.47c-1.31,0.09-2.46,0.72-3.24,0.98
		c-0.83,0.28-1.65,0.05-2.35,0.59c-1.13,0.76-0.74,3.06-1.67,4.02c-0.82,0.84-1.84,1.4-2.75,2.16c-0.25,0.21-0.27,0.63-0.59,0.78
		c-0.67,0.33-1.59,0.18-2.06,0.69c-0.38,0.61-0.02,1.79-0.39,2.36c-0.81,1.21-2.91,0.33-3.24,2.45c-0.52,0.09-1.8-0.06-2.26-0.39
		c-0.4-0.24-0.1-0.43-0.29-0.79c-0.14-0.1-0.97-0.15-1.37-0.2c0.07,0.58,0.61,2.35,0.29,2.84c-0.06,0.17-0.02,0.1-0.1,0.2
		c-0.55,0.35-1.49,0.01-1.86,0.39c-0.41-0.13-0.68-0.44-0.78-0.88c-0.8-0.04-3.07,0.3-3.92,0.79c0.02,0.71,0.26,0.91,0.59,1.28
		c-0.2,0.11-0.18,0.15-0.49,0.2c0.12,0.26,0.4,0.65,0.59,0.88c0.33,0.18,0.49-0.11,0.88,0c0.08,0.02,0.7,0.31,0.78,0.39
		c0.03,0.13,0.07,0.26,0.1,0.39c0.4,0.31,0.5-0.08,0.69,0.49c0.44-0.12,0.74-0.1,1.08,0.1c0.37,0.23,0.6,1.84,0.59,2.45
		c0.96,0.19,1.52,1.91,1.77,2.94c0.43,1.81,0.07,5.04-0.88,6.67c-0.13,0.36-0.26,0.72-0.39,1.08c-0.25,0.21-0.65,0.18-0.88,0.39
		c-0.83-0.04-1.07-0.44-1.67-0.59c-0.49-0.12-0.58,0.29-0.98,0.2c-0.23-0.05-0.48-0.42-0.69-0.49c-0.93-0.31-1.52,0.45-2.45,0.2
		c-0.58-0.16-1.32-0.6-1.86-0.79H142c-0.1-0.13-0.2-0.26-0.29-0.39c-0.29,0.07-0.59,0.13-0.88,0.2c-1.1-0.11-2.54-0.26-3.24-1.08
		c-0.66,0.06-1.14,0.1-1.67,0.49c-0.22,0.16-0.31,0.46-0.59,0.59c-0.35,0.16-0.45-0.14-0.88,0c-0.33,0.11-0.69,0.5-0.98,0.69
		c0,0.76,0.25,0.59,0.39,1.18c0.02,0.1-0.21,0.53-0.1,0.78h0.2c0.11,0.23-0.09,2.83-0.2,3.34c0.03,0.56,0.07,1.11,0.1,1.67
		c-0.11,0.32-0.48,0.85-0.59,1.18c-0.38,1.09-0.49,2.08-1.08,2.94c-0.16,0.24-0.66,0.44-0.78,0.69v0.69
		c-0.1,0.3-0.37,1.04-0.59,1.28c0.06,0.52,0.2,0.68,0.69,0.78v0.59c0.26,0.03,0.52,0.07,0.78,0.1c0,1.16-0.26,3.74-0.98,4.32
		c0.03,0.03,0.07,0.06,0.1,0.1c0.21,0.09,0.26-0.05,0.49-0.1c0.79-0.18,1.78,0.38,2.06,0.78c0.55-0.15,1.27-0.78,2.16-0.49
		c0.38,0.13,0.57,0.49,1.08,0.59c0.01,0.96,0.69,2.46,1.18,2.94c0.34,0.34,0.88,0.39,1.18,0.78c0.77-0.17,0.62-0.76,1.08-1.18
		c0.38-0.34,1.02,0.02,1.57-0.2c0.25-0.1,0.5-0.5,0.79-0.59c0.64-0.2,1.46,0.06,2.06,0.19c0.42-0.03,0.85-0.06,1.28-0.1
		c0.13,0.03,0.5,0.27,0.59,0.29c0.44,0.1,0.85-0.3,1.28-0.39c0.13,0.13,0.26,0.26,0.39,0.39h0.2c0.16-0.27,0.43-0.45,0.59-0.69
		c0.27-0.4,0.28-0.92,0.59-1.28c0.27-0.32,0.73-0.32,0.98-0.69c0.64,0.08,0.9,0.08,1.57,0c0.01-0.94,0.29-1.18,0.39-1.86h0.29v-0.29
		c0.56-0.56,1.16-1.06,1.86-1.47c-0.14-0.61-0.84-0.7-1.08-1.57c-0.03-0.33-0.07-0.65-0.1-0.98c0.14-0.6,1.79-2.92,2.26-3.24
		c0.37-0.26,0.67-0.17,0.88-0.59c0.1-0.19-0.03-0.48-0.1-0.79c0.42-0.27,1.05-0.62,1.57-0.79c0.57-0.19,1.2,0,1.67-0.29
		c0.16-0.23,0.33-0.46,0.49-0.69c0.31-0.21,0.66-0.19,0.98-0.39c0.39-0.25,0.77-0.64,1.18-0.88c-0.03-0.36-0.06-0.72-0.1-1.08
		c0.1-0.03,0.2-0.07,0.29-0.1c0.06-0.13-0.42-1.18-0.49-1.28c-0.02-1.88,1.14-1.95,2.16-2.75c0.84,0.11,1.22,0.49,1.86,0.69
		c0.16,0.15,0.71-0.47,1.28-0.2c0.03,0.1,0.06,0.2,0.1,0.29c0.33,0.07,0.65,0.13,0.98,0.2c0.03,0.1,0.07,0.2,0.1,0.29
		c0.61,0.28,1.45-0.34,2.06-0.39c0.21-0.94,1.26-1.73,2.06-2.06c0.46-0.19,0.91-0.12,1.28-0.39c0.25-0.19,0.12-0.5,0.29-0.78
		c0.22-0.38,0.8-0.72,1.08-1.08c1.49,0.06,2.38,0.87,3.53,1.37c0.05,0.18,0.21,1.21,0.29,1.37c0.11,0.22,0.56,0.43,0.68,0.69
		c0.17,0.35,0.01,0.89,0.1,1.08c0.18,0.1,0.2-0.1,0.39,0c0.18,0.09,0.06,0.35,0.19,0.49c0.16,0.03,0.33,0.06,0.49,0.1
		c0.21,0.14,0.35,0.44,0.59,0.59c-0.02,0.23-0.02,0.28-0.1,0.39c0.25,0.33,0.62-0.05,1.08,0.2c0.35,0.19,0.4,0.75,0.69,0.98
		c0.23,0.06,0.46,0.13,0.69,0.2c0.17,0.11,0.17,0.33,0.29,0.49c0.2,0.25,0.52,0.3,0.79,0.49c0.14,0.11,0.17,0.38,0.29,0.49
		c0.45,0.39,0.85,0.08,1.27,0.69c0.41-0.14,0.6-0.44,0.98-0.1c1.16-0.01,1.04,0.53,1.57,1.08c0.05,0.13,0.04,0.07,0.1,0.1
		c0.63-0.03,0.76,0,0.79,0.59c0.2-0.04,0.45-0.09,0.59-0.2c1.41,0.05,0.57,0.73,0.98,1.28c0.13,0.18,0.83,0.27,1.08,0.59
		c0.26-0.09,0.26-0.1,0.39-0.29c1.09,0.21,1.53,2.86,2.26,3.63c-0.06,0.57-0.41,0.67-0.79,0.88c0.12,0.38,0.29,0.69,0,1.08
		c-0.28,0.56-0.28-0.01-0.79,0.2c-0.25,0.1-0.61,0.62-0.88,0.69c-0.2,0.05-0.68-0.2-0.98,0c-0.03,0.1-0.06,0.2-0.1,0.29
		c-0.12,0.1-0.68,0.36-0.78,0.39c-0.54,0.17-0.69-0.29-1.28,0.2c-0.97-0.05-1.07-0.58-1.96-0.49c-0.07,0.16-0.13,0.33-0.2,0.49
		c-0.43,0.02-1.93,0.1-1.38,0.98c0.35,0.95,1.14,0.39,1.96,0.79c0.46,0.22,1.05,0.76,1.57,0.98c0.37,0.16,0.95-0.08,1.37,0.1
		c0.36,0.15,0.45,0.72,0.79,0.88c0.35,0.17,1.05,0,1.37,0.2c0.12-0.07,0.45-1.13,0.49-1.28c0.12-0.42-0.48-0.78-0.59-1.08
		c-0.27-0.75,0.66-2.26,0.88-2.65c0.03-0.03,0.07-0.06,0.1-0.1c0.1,0.14,0.16,0.49,0.2,0.69c0.28,0.01,0.14,0.07,0.29,0h0.69
		c0.03-0.06,0.07-0.13,0.1-0.2c0.13-0.36,0.26-0.72,0.39-1.08c0.2-0.16,0.39-0.33,0.59-0.49c0.2-0.5-0.22-0.87,0-1.28
		c0.23-0.61,0.86-0.33,1.18-0.79c0.05-0.11-0.04-0.76-0.2-0.98c-0.03-0.72-0.74-1-1.47-0.98c-0.08-0.18-0.14-0.26-0.2-0.49
		c-0.27-0.65,0.59-1.89,0.79-2.45c0.39,0.1,0.79,0.42,1.18,0.49c0.12,0.02,0.51-0.19,0.78-0.1c0.47,0.16,0.83,0.89,1.08,1.28
		c0.25,0.01,0.36,0.01,0.49,0.1h0.1c0.05-0.36-0.02-0.59,0.2-0.88c-0.11-1.32-3.06-2.56-4.22-2.94c-0.82-0.27-1.94-0.22-2.26-0.98
		c-0.07-0.15,0.03-0.58,0.2-0.78c-0.07-0.37-0.14-0.35-0.29-0.59c-2.54,0.08-2.46,0.65-4.22-0.88c-0.27-0.23-0.67-0.31-0.88-0.59
		c-0.59-0.78-1.02-2.98-1.76-3.43c-0.34-0.21-0.62-0.1-0.98-0.29c-0.5-0.27-0.51-0.65-1.37-0.69c-0.21-0.42-0.47-0.95-0.79-1.28
		c0.05-1.17,0.69-1.54-0.1-2.26c0.01-0.38,0.02-0.5,0.2-0.69c0.26-0.64,1.44-0.94,2.16-0.88c0.07,0.9,0.51,2.04,1.18,2.35v0.1
		c0.32-0.15,0.56-0.64,0.59-1.08c0.13,0.03,0.26,0.06,0.39,0.1c-0.07-0.39-0.18-0.4-0.2-0.88h0.29c0.11,0.24,0.23,0.35,0.1,0.59
		c-0.04,0.35,0.05,0.26-0.2,0.29c-0.03,0.47-0.08,0.9,0.2,1.27v0.2c0.12-0.07,0.2-0.11,0.29-0.2c0.07-0.11-0.13-0.58-0.2-0.88
		c0.07-0.07,0.13-0.13,0.2-0.2v-0.1c0.23,0.09,0.16,0.04,0.3,0.2c0.21,0.11,0.08,0.65,0.29,0.98c0.27,0.42,0.86,1.09,1.28,1.37v0.2
		c-0.21-0.09-0.26-0.15-0.39-0.29h-0.49c0.23,0.65,0.93,0.92,1.37,1.37c0.1-0.19,0.03-0.11,0-0.39c0.2,0.03,0.39,0.07,0.59,0.1
		c0.1,0.22,0.16,0.28,0.2,0.59c0.08-0.1,0.04-0.02,0.1-0.2c0.34,0.05,0.93,0.57,1.18,0.78c0.34-0.11,0.2,0.02,0.2-0.29
		c0.17-0.06,0.1-0.02,0.2-0.1h0.49c-0.09,0.26-0.1,0.26-0.3,0.39c0.1,0.1,0.2,0.2,0.3,0.29c-0.09,0.31,0.05,0.15-0.2,0.29
		c0.2,0.14,0.67,0.16,0.79,0.1c0.01-0.13,0.02-0.14-0.2-0.29c0.16-0.15,0.49-0.29,0.69-0.39c0.26,0.29,0.62,0.5,0.98,0.69
		c-0.25,0.29-1.06,0.5-1.57,0.49v0.2c0.62-0.01,1.15-0.36,1.57-0.29c0.41,0.06,1.02,0.45,1.37,0.59c0.91,0.35,1.87,0.59,2.65,1.08
		c0.34,0.21,0.49,0.66,0.78,0.88c0.24,0.18,0.75,0.27,0.98,0.39c-0.01,1.04,0.21,1.52,0.29,2.45c0.03,0.31-0.26,0.93-0.1,1.37
		c0.17,0.16,0.33,0.33,0.49,0.49c-0.21,0.23-0.04,0.1-0.29,0.1v0.2c0.48,0.44,1.37,0.66,1.76,1.18c0.03,0.2,0.07,0.39,0.1,0.59
		c0.31,0.52,1.51,1.56,2.16,1.77c0.09,0.46-0.13,1.15,0,1.37v0.2h0.2c0.06-0.06,0.13-0.13,0.2-0.2c0.07-0.1-0.01-0.22,0.1-0.39
		c0.03-0.03,0.07-0.07,0.1-0.1c0.06,0.16,0.08,0.23,0.1,0.49h0.29c0.14,0.32,0.3,0.53,0.39,0.88c0.42,0,0.83-0.02,1.08-0.2h0.39
		c-0.07,0.23-0.1,0.22-0.2,0.39h-0.49c-0.05,0.62-0.27,0.76-0.49,1.18c0.64,0.37,1.17,0.89,1.77,1.28c-0.09,1.32,0.05,1.5,0.79,1.96
		c0.32-0.19,0.1-0.54,0.2-0.69c0.1-0.1,0.2-0.2,0.3-0.29c0.35,0.59,0.71,0.79,0.98,1.57c0.17,0.06,0.1,0.02,0.2,0.1h0.1
		c-0.07-0.35-0.12-0.77,0.1-1.08v-0.2c0.54,0.06,1.05,0.56,1.37,0.88h0.1c-0.16-0.8-0.79-2.27-1.47-2.75v-0.49
		c0.23-0.03,0.24-0.05,0.39-0.1c0.14,0.19,0.33,0.4,0.49,0.59c0.01,0.02,0.53-0.47,0.79-0.59v-0.39c-0.53-0.09-0.22-0.13-0.69,0
		c-0.15-0.25-0.29-0.66-0.59-0.78c0.09-0.27,0.17-0.29,0.29-0.49c0.33,0.04,0.88-0.11,1.18,0c0.34,0.13,0.5,0.5,0.98,0.59
		c-0.05-0.58-0.47-1.13-0.29-1.47v-0.2c0.36,0.08,0.48,0.17,0.59,0.49c0.2-0.03,0.39-0.06,0.59-0.1c0.03-0.03,0.07-0.07,0.1-0.1
		v-0.39c-1.23,0-0.92-0.77-1.47-1.37c-0.76-0.4-1.4,0.31-1.96-0.79c-0.4,0.04-0.58,0.19-0.79,0.1c-0.11-0.06,0.33-0.39,0.49-0.49
		c-0.08-0.43-1.97-2.31-2.35-2.55v-1.27c0.66,0.08,1.36,0.55,1.96,0.1c0.47-0.03,0.57-0.11,0.69-0.49c0.17-0.31-0.07-0.64-0.39-0.78
		v-0.39c0.93,0.03,1.11-0.27,1.37-0.88c0.89,0.05,1.12-0.32,1.86-0.49c0.43-0.1,0.58,0.17,0.88,0c0.77-0.03,0.95,0.09,1.18,0.59
		c0.49-0.03,1-0.14,1.27-0.39h0.1c-0.15,0.37-0.47,0.86-0.79,1.08c0.09,0.83,0.15,2.42,0.39,2.85c0.17,0.1,1.21-0.47,1.47-0.69h0.3
		c-0.05,0.21-0.09,0.35-0.2,0.49c-0.15,0.24-0.04,0.16-0.39,0.2c0.17,0.45,0.59,0.36,0.78,0.69c0.09,0.16,0.02,0.38,0.1,0.49
		c0.19,0.09,0.07,0.04,0.29,0c0.03,0.03,0.07,0.06,0.1,0.1c-0.05,0.39-0.06,0.47-0.39,0.59c-0.02,0.35-0.01,0.46,0.29,0.69
		c-0.06,0.17-0.02,0.1-0.1,0.2c-0.12-0.1-0.39-0.11-0.59-0.39c-0.2,0.04-0.19,0.02-0.29,0.1c-0.08,0.15,0.08,0.43,0.29,0.59
		c-0.08,0.38,0,0.32-0.39,0.39c0.15,0.4,0.51,0.44,0.88,0.59c0.06-0.12,0.11-0.2,0.2-0.29c0.08-0.03,0.89,0.27,1.47,0.29
		c0.1,0.5,0.03,0.76-0.1,1.18c0.2,0.19,0.3,0.48,0.49,0.69c0.18,0.12,0.62,0.21,0.79,0.29v0.29c-0.2,0.04-0.19,0.02-0.29,0.1h-0.2
		c0.01,0.25,0.01,0.36,0.1,0.49c0.11,0.14,1.65-0.6,2.06-0.69c0.03,0.03,0.07,0.07,0.1,0.1c-0.1,0.1-0.2,0.2-0.29,0.29
		c0.02,0.33,0.05,0.68,0.2,0.88v0.2h0.1c0.29-0.49,0.45-0.81,0.98-1.08c0.43,0.14,0.61,0.61,0.98,0.1c0.39,0.2,0.38,0.65,0.69,0.88
		c0.28,0.22,0.98,0.22,1.38,0.29c0.46-0.42,1-0.98,1.67-0.88c0.03-0.03,0.07-0.06,0.1-0.1c-0.02-0.52,0.03-1.08-0.2-1.37
		c0.01-0.25,0.01-0.36,0.1-0.49c1.28-1.03,3.76,0.02,4.51,0.78c1.38-0.01,2.06-0.83,2.94-1.37v-0.29h0.29
		c0.35-1.01,0.5-1.39,0.98-2.16c0.62,0.06,1.48,0.16,2.06-0.1c0.18-0.47,0.38-0.92,0.49-1.37c0.56,0.06,0.43,0.18,0.69,0.49
		c-0.06,0.43-0.25,0.89-0.49,1.18c0.1,0.56,0.43,0.53,0.59,0.88v1.77c0.09,0.14,0.48,0.14,0.59,0.29c0.28,0.41,0.07,1.08,0.29,1.57
		c0.11,0.26,0.38,0.45,0.49,0.78c0.08,0.24-0.21,0.54-0.29,0.88c-0.07,0.28,0.07,0.66,0.1,0.78c0.12,0.58-0.09,1.65-0.2,2.16
		c-0.46,2.12,0.58,4.69-0.29,6.97c-0.2,0.52-0.77,0.76-1.08,1.18c-1.17,0.05-1.85,0.54-2.65,0.79c-0.8,0.24-1.51-0.58-2.36-0.29
		c-0.13,0.13-0.26,0.26-0.39,0.39c-0.29,0.03-0.59,0.06-0.88,0.1c-0.4,0.16-0.84,0.58-1.18,0.79c-0.23,0.07-0.46,0.13-0.69,0.2
		c-0.2,0.18-0.21,0.57-0.39,0.79c-0.64,0.76-1.31,1.61-1.86,2.45c-0.57,0.09-1.09-0.08-1.67-0.2c-0.69-0.14-1.11,0.54-1.77,0.29
		v-0.2c-0.44-0.15-0.69,0.42-1.28,0.2c-0.07-0.1-0.13-0.2-0.2-0.29c-0.25-0.09-1.57,0.08-1.67,0.1c-1.58,0.3-2.37-0.04-3.34,0.88
		c-0.82-0.06-0.8-0.78-1.28-1.18c-0.32-0.2-1.13,0.21-1.47,0.29c-0.69,0.18-0.96-0.08-1.47-0.2c-0.54-0.12-0.75,0.29-1.18,0.2
		c-0.01,0-0.28-0.18-0.29-0.2c-0.42-0.14-0.63-0.58-0.69-1.08c-0.74-0.01-1.33-0.17-1.86-0.29c-0.3-0.07-1.82,0.09-2.06,0.2
		c-0.2,0.23-0.39,0.46-0.59,0.69c-0.23,0.03-0.46,0.06-0.69,0.1c-0.36,0.14-0.96,0.62-1.28,0.88c-0.69,0.58-0.87,1.58-1.47,2.26
		c0,1.06,0.39,1.98,0.98,2.45c-0.02,2.25-1.13,2.29-2.06,3.43c-1.56-0.01-1.94-0.8-2.94-1.18c-0.74-0.28-1.39-0.1-2.16-0.39
		c-0.03-0.07-0.06-0.13-0.1-0.2c-1.47-0.52-3.26,0.35-4.51-0.29c-1.14-0.59-1.36-2.11-1.96-3.04c-0.69-0.03-1.37-0.07-2.06-0.1
		c-0.2-0.09-0.43-0.41-0.69-0.49c-0.67-0.21-1.66-0.23-2.26-0.39c-0.93-0.26-1.27,0.69-2.06,0.59c-0.86-0.11-1.58-0.29-2.16-0.69
		c-0.2-0.23-0.39-0.46-0.59-0.69h-0.79l-0.79-0.69c-0.22-0.28-0.01-0.62-0.2-0.98c-0.05-0.11-0.31-0.2-0.39-0.3
		c-0.52,0.04-0.57,0.19-0.88,0.39v0.39c-0.42-0.02-0.37-0.03-0.69,0c-0.11-0.12-0.25-0.21-0.39-0.29c-0.06-0.22-0.07-0.26-0.2-0.39
		c0-1.26,0.46-1.57,1.08-2.16c0.1-0.1,0.41-0.09,0.49-0.2c0.38-0.5,0.32-1.3,0.78-1.77c-0.08-0.41-0.28-0.34-0.39-0.59
		c-0.11-0.26,0.02-0.6-0.1-0.79c-0.34-0.77-1.3-0.62-1.47-1.67c-0.09-0.16-0.02-0.25,0-0.59c0.2-0.16,0.64-0.39,0.79-0.59
		c0.32-0.45,0.24-0.95,0.69-1.27c-0.05-0.21-0.09-0.36-0.2-0.49c-0.03-0.07-0.07-0.13-0.1-0.2c-0.39,0.13-1.05,0.66-1.28,0.98
		c-0.56-0.11-0.8-0.59-0.78-1.28c-1.17-0.3-2.14-0.42-3.14,0.29c-0.16,0.23-0.33,0.46-0.49,0.69c-0.73,0.4-1.68-0.04-2.26,0.49
		c-0.52-0.05-1.25-0.38-1.57-0.69c-0.65,0.12-0.17,0.13-0.49,0.49c-0.42,0.47-1.53-0.04-1.77-0.39c-0.5,0.03-0.5,0.11-0.79,0.29
		v0.29c-0.2,0.04-1.48,0.28-1.67,0.39c-0.13,0.16-0.26,0.33-0.39,0.49h-0.78c-0.03-0.13-0.07-0.26-0.1-0.39
		c-0.38-0.34-1.06-0.39-1.77-0.39h-1.86c-0.11,0.04-0.35,0.35-0.49,0.39c-0.56-0.03-1.11-0.07-1.67-0.1
		c-0.24,0.09-0.53,0.59-0.78,0.69c-0.31,0.12-0.57-0.09-0.79-0.1c-0.5-0.01-1.33,0.24-1.86,0.29c-0.24,0.02-0.53-0.19-0.88-0.1
		c-1.39,0.36-2.86,1.12-3.53,2.26c-0.45-0.01-0.5-0.03-0.69-0.29c-0.53,0.07-0.4,0.25-0.69,0.39c-0.52,0.25-1.09-0.05-1.57,0.29
		c-0.28,0.2-0.18,0.62-0.39,0.88c-0.04,0.06-1.93,0.9-2.06,0.88c-0.21-0.04-0.87-0.39-0.88-0.39c-0.39-0.07-0.46,0.35-0.88,0
		c-0.42-0.14-0.57-0.35-0.59-0.88c-0.4,0.15-0.69,0.53-1.18,0.59c-0.37,0.05-0.69-0.32-0.98-0.39c-1.62,1-4.01-0.49-3.92-2.45
		c-0.37,0.01-0.75,0.04-0.98,0.2c-1.2,0.04-0.87,0.88-1.27,1.67c-0.52,1.01-1.16,2.26-1.86,3.14c-0.79,0.98-2.28,1.66-3.63,2.06
		c-0.64,0.19-0.95,0.11-1.47,0.39c-0.5,0.27-0.89,1.11-1.37,1.47c-0.21,0.16-0.67,0.26-0.78,0.49c-0.29,0.57-0.07,1.21-0.39,1.67
		c-0.36,0.52-1.25,0.95-1.57,1.67c-0.08,0.18-0.36,2.5-0.29,2.65c0.07,0.16,0.42,0.38,0.49,0.59c0.21,0.66-0.26,1.44-0.49,1.77
		c-0.14,0.2-0.39,0.24-0.59,0.39c-0.29,0.36-0.59,0.72-0.88,1.08c-0.32,0.18-0.58,0.2-0.88,0.39c-0.16,0.2-0.33,0.39-0.49,0.59
		c-0.39,0.17-0.61-0.13-1.08,0.1c-0.65,0.32-1.13,1.16-1.77,1.47c-0.95,0.46-2.56-0.12-3.43,0.39c-0.79,0.4-1.33,1.69-1.77,2.45
		c-0.17,0.3-0.13,0.6-0.39,0.78c-0.62,0.44-1.71,0.37-2.26,0.88c-0.13,0.12-1.4,2.51-1.47,2.75c-0.2,0.6,0,1.12-0.29,1.57
		c-0.2,0.3-1.71,1.31-2.06,1.47c-0.2,0.03-0.39,0.07-0.59,0.1l-0.59,0.88v0.59c-0.21,0.47-1,0.82-1.27,1.27
		c-0.25,0.41-0.14,1.27-0.49,1.57h-0.39c-0.2,0.12-0.78,0.78-0.88,0.98c-0.4,0.77-0.12,1.96-0.59,2.65
		c0.04,0.69,0.28,0.79,0.69,1.08c0,0.6-0.14,0.85-0.49,1.08c0,1.46,0.17,2.38,0.88,3.34c0.29,0.4,0.65,0.22,0.88,0.98
		c0.32,1.06,0.39,3.43,0,4.22c-0.31,0.62-0.96,1.37-1.18,2.06l-0.2,0.88c0.02,0.14,0.21,0.69,0.1,0.98
		c-0.43,1.11-1.37,1.74-2.55,2.16c0.19,0.21,0.22,0.04,0.49,0.2c0.48,0.28,1.02,1.59,1.18,2.16c0.13,0.49-0.21,1.34-0.29,1.77
		c0.03,0.43,0.07,0.85,0.1,1.27c-0.16,0.74-0.56,1.95-0.2,2.65c0.2,0.37,0.67,0.72,0.88,1.08c0.37,0.62,0.42,1.17,0.98,1.57
		c0.36,0.26,0.9,0.24,1.28,0.49c0.7,0.46,1.32,1.34,1.77,2.06c1.65,0,1.08,0.67,1.86,1.27c0.37,0.29,0.8,0.41,1.18,0.69
		c0.37,0.27,0.55,0.77,0.88,1.08c0.17,0.15,0.46,0.1,0.59,0.29c0.32,0.46,0.02,1.32,0.29,1.86c0.06,0.13,0.64,0.8,0.78,0.98
		c0,0.3-0.03,0.5-0.1,0.69c-0.48-0.03-0.82-0.14-1.08-0.39h-0.39c0.36,0.6,1.42,1.27,2.06,1.57c0.25,0.12,0.49,0.04,0.69,0.2
		c0.24,0.19,0.42,0.63,0.69,0.79c0.74,0.43,1.68,0.42,2.35,0.88c0.12,0.08,0.89,0.68,0.98,0.78c0.11,0.13,0.08,0.38,0.2,0.49
		c0.31,0.29,0.83,0.34,1.18,0.59c0.2,0.26,0.39,0.52,0.59,0.79c0.36,0.25,0.7,0.28,0.98,0.59c0.1,0.16,0.2,0.33,0.29,0.49
		c0.3,0.21,0.72,0.15,0.98,0.39c1.21,1.12,2.5,2.13,3.92,3.04c0.68,0.43,1.4,0.5,2.16,0.88c0.37,0.19,0.81,0.56,1.28,0.69
		c0.72,0.19,1.46-0.27,1.96-0.39h1.18c0.88-0.2,2.77-0.5,4.12-0.2c0.59,0.13,2.21,0.25,2.65,0.2c0.13-0.02,0.59-0.19,0.88-0.1
		c0.18,0.06,0.48,0.33,0.69,0.39c0.85,0.25,1.28,0.09,1.96,0.29c0.46,0.14,3.19,1.11,3.34,1.08c0.3-0.06,0.92-0.31,1.18-0.39
		c0.39-0.03,0.79-0.06,1.18-0.1c0.07-0.02,0.32-0.28,0.39-0.29c0.58-0.11,1.08,0.17,1.86-0.1c1.6-0.55,1.98-0.93,4.02-0.69
		c0.29-0.29,0.59-0.59,0.88-0.88c0.76-0.3,1.57,0,2.45-0.2c1.14-0.26,4.51-0.44,5.79-0.2C166.27,267.28,166.89,267.32,167.51,267.35
		z M214.9,167.38c0.1,0.07,0.2,0.13,0.29,0.2v0.1h-0.39C214.83,167.57,214.87,167.48,214.9,167.38z M213.72,167.08v0.1
		c-0.38-0.08-0.35-0.1-0.49-0.39C213.44,166.88,213.56,166.97,213.72,167.08z M212.84,166.59h0.29v0.2
		c-0.48,0.02-0.43-0.06-0.98-0.1v-0.1c0.17-0.06,0.1-0.02,0.2-0.1C212.6,166.51,212.71,166.51,212.84,166.59z M212.05,164.93
		c0.23,0.07,0.22,0.1,0.39,0.2c-0.07,0.32-0.1,0.23-0.2,0.49c-0.23-0.07-0.22-0.1-0.39-0.2
		C211.91,165.1,211.94,165.13,212.05,164.93z M211.27,168.16c0.1,0.07,0.2,0.13,0.29,0.2c0,0,0.99,0.2,1.37,0.2
		c0.03,0.03,0.07,0.06,0.1,0.1c-0.21,0.34-0.4,0.16-0.49,0.69c-0.61-0.28-1.29-0.22-1.77-0.59c-0.08-0.1-0.04-0.02-0.1-0.2
		C210.92,168.45,211.14,168.4,211.27,168.16z M208.13,98.8c-0.36-0.03-0.57-0.16-0.69-0.1c-0.25,0.02-0.33,0.04-0.49,0.1
		c-0.04,0.38,0.03,0.52,0.2,0.88h-0.1c-0.17,0.13-0.17,0.01-0.29,0.1c-0.46-0.13-0.71-0.64-0.98-0.98c-0.25-0.32-0.7-0.31-0.98-0.59
		c-0.03-0.13-0.07-0.26-0.1-0.39c-0.23-0.31-0.71-0.51-1.08-0.69c0.01-0.82,0.14-0.85,0.2-1.57c0.33-0.07,0.65-0.13,0.98-0.2
		c0.29,0.07,0.52,0.5,0.79,0.59c0.56,0.2,0.96,0.03,1.37,0.29h0.1c0.38,0.32,0.61,0.73,1.08,0.98v0.39h-0.29
		c0.12,0.36,0.3,0.59,0.39,0.98C208.15,98.71,208.19,98.63,208.13,98.8z M211.56,95.37v0.1c-0.21-0.04-0.22-0.01-0.59,0
		c-0.02-0.23-0.02-0.28-0.1-0.39c-0.31-0.89-1.53-0.83-2.36-1.18c-0.15-0.42-0.11-0.58-0.49-0.78c0.16-0.26-0.02-0.1,0.29-0.1
		c-0.22-0.33-0.52-0.68-0.78-0.98v-0.1c0.54,0.18,1.27,0.83,1.57,1.27h0.1c-0.04-0.46-0.08-0.43-0.39-0.59
		c0.12-0.26,0.19-0.2,0.3-0.49c-0.54-0.5-0.84-0.71-1.87-0.69v-0.2c0.03-0.03,0.07-0.06,0.1-0.1c0.6-0.01,1.14,0.03,1.47,0.29
		c0.63,0.24,0.33,0.69,0.69,1.18c0.37,0.51,1.22,0.72,1.77,1.08c0.22,0.15,0.26,0.52,0.49,0.69
		C211.65,94.88,211.38,94.98,211.56,95.37z M232.26,135.2c0.41-0.54,0.08-1.09,0.98-1.18c0.07-0.3,0.16-0.44,0.2-0.78
		c0.2-0.04,0.19-0.02,0.29-0.1c0.58,0.11,0.41,0.31,0.69,0.69c0.19,0.26,0.53,0.3,0.79,0.49c0.54,0.41,0.57,1.04,0.59,1.77
		c0.01,0.37,0.15,0.53,0,0.79c-0.07,0.23-0.1,0.22-0.2,0.39c-0.97,0.03-2.28,0.61-2.75,0.29c-1.05,0.02-0.95-0.32-1.37-0.88
		C231.45,135.2,231.8,135.81,232.26,135.2z M219.8,159.04h0.2C219.91,159.21,219.97,159.15,219.8,159.04z M225,156.88
		c-1,0.47-0.52,0.69-0.98,1.27c-0.37,0.27-1.81,0.26-2.06,0.1h-0.19c-0.06,0.36-0.04,0.39,0,0.78c-0.68-0.05-1.23-0.41-1.47,0.2
		h-0.2c0.07-0.75,0.47-0.69,0.69-1.18c0.12-0.26,0.05-0.58,0.2-0.79c0.22-0.3,0.94-0.63,1.28-0.79v-0.1
		c0.42,0.03,0.85,0.06,1.27,0.1c0.17-0.04,0.37-0.34,0.59-0.29c0.21,0.04,0.49,0.33,0.88,0.39V156.88z M244.53,147.95
		c-0.55,0.23-0.89,1.01-1.47,1.28c-0.75,0.34-1.01-0.08-1.47,0c-0.1,0.1-0.2,0.2-0.29,0.29c-0.66,0.26-1.4-0.19-1.86-0.29
		c-0.12,0.15-0.25,0.35-0.39,0.49c-0.1,0.08-0.02,0.04-0.2,0.1c-0.43-0.35-0.7-0.48-0.98-0.98c-0.64,0.08-0.78,0.6-1.18,0.59
		c-0.53-0.03-0.51-0.17-0.88-0.29c-0.03-0.16-0.07-0.33-0.1-0.49c-0.16-0.03-0.33-0.07-0.49-0.1c-0.06,0.2-0.13,0.39-0.2,0.59
		c-0.63,0.16-1.38,0.5-1.96,0.69c-0.42,0.13-0.73,0-1.08,0.2c-0.23,0.13-0.3,0.51-0.49,0.69c-0.35,0.32-0.89,0.4-1.18,0.78
		c-0.23,0.31-0.27,0.67-0.49,0.98c-0.33,0.33-0.66,0.65-0.98,0.98c-0.16,0.31-0.01,0.47-0.2,0.69c-0.43,0.73-1.7,0.18-2.06,0.39
		c-1.38,0.82-3.58,1.04-5-0.1c-0.31-0.25-0.17-0.63-0.39-0.98c-0.11-0.17-1.22-1-1.47-1.08c0.07-0.3,0.13-0.58,0.29-0.78h0.2
		c0.21-0.43-0.54-1.49-0.1-2.16c0.15-0.38,0.36-0.32,0.69-0.29c0.05-0.15,0.07-0.16,0.1-0.39c0.16-0.4-0.45-1.91-0.59-2.45
		c-0.1-0.4,0.22-0.8,0.29-1.08c0.03-0.26,0.06-0.52,0.1-0.79c0.14-0.17,0.89-0.3,1.08-0.39c0-0.36,0.13-0.86,0.1-1.08
		c-0.08-0.55-0.71-1.05-0.49-1.77c0.07-0.23,0.38-0.48,0.49-0.69c0.35-0.69,0.4-1.5,0.39-2.55c0.38-0.19,0.83-0.3,1.08-0.49
		c0.51,0.16,0.86,0.53,1.08,0.98c0.55,0,1.52,0.1,1.86-0.1c0.37-0.04,0.36-0.08,0.59-0.2v-0.29c0.42,0.03,0.85,0.07,1.28,0.1
		c-0.28,0.88-0.89,1.66-1.47,2.26c0.09,0.32-0.05,0.15,0.2,0.29c0.32,0.12,0.33-0.35,0.88-0.2c0.27,0.08,0.46,0.36,0.69,0.29
		c0.18-0.05,0.1-0.03,0.2-0.1c0.41,0.08,0.41,0.21,0.69,0.39c0.02,0.71,0.13,0.85,0.1,1.47c0.3,0.06,0.67,0.13,0.88,0.29
		c0.41-0.15,0.83-0.6,0.98-0.98c0.08-0.2-0.13-0.42-0.1-0.49c0.1-0.23,0.45-0.45,0.59-0.69c0.2-0.03,0.39-0.07,0.59-0.1
		c0.05-0.54,0.28-0.8,0.49-1.18c0.31,0.06,0.24,0.02,0.39,0.2c0.63-0.08,0.78-0.44,1.37-0.59v-0.29c0.29-0.03,1.03-0.23,1.18-0.2
		c0.41,0.09,0.59,0.69,0.98,0.79c0.43,0.1,0.44-0.35,0.78-0.29c0.24,0.04,0.66,0.42,0.88,0.49c0.46,0.06,0.92,0.13,1.37,0.2
		c1.26,0.48,2.46,1.34,3.73,1.86c0.73,0.3,1.24-0.11,1.77,0c0.59,0.12,1.99,1.48,2.26,1.96c1.2,2.15-0.71,3-1.18,4.41
		C245.77,147.82,245.15,147.89,244.53,147.95z"/>
</g>
    <g id="Globe_Light_Bottom">

		<radialGradient id="SVGID_9_" cx="169.7521" cy="161.9013" r="152.8291" fx="151.7262" fy="167.1149"
                        gradientTransform="matrix(0.342 0.9397 -0.9397 0.342 271.5075 -48.0146)"
                        gradientUnits="userSpaceOnUse">
		<stop offset="0.9" style="stop-color:#008AF7;stop-opacity:0"/>
            <stop offset="1" style="stop-color:#0096F7;stop-opacity:0.4"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_9_)" d="M218.55,303.26C145,330.04,63.66,292.11,36.89,218.55
		C10.12,145,48.05,63.66,121.6,36.89c73.56-26.77,154.89,11.16,181.66,84.71C330.04,195.16,292.11,276.49,218.55,303.26z"/>
</g>
    <g id="Kont_Left">
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#008CFA" d="M30.85,187v-0.2c0.08,0.1,0.03,0.03,0.1,0.2H30.85z M28.69,175.32
		c-0.22-1.02,0.03-3.71-0.34-4.67c0.15,38.25,15.45,72.93,40.22,98.34c-0.1-0.3-0.21-0.58-0.34-0.76c-0.41-0.55-0.64-1.34-1.18-1.77
		v-0.1c0.22,0.06,0.26,0.07,0.39,0.2c0.57-0.09,0.43-0.41,0.79-0.69c0.09-0.11,0.25-0.01,0.39,0.1c0.64-0.04,0.78-0.33,1.18-0.59
		c-0.08-1.81-0.96-2.77-1.67-3.92c-0.5-0.82-0.73-1.7-1.28-2.45c-0.53-0.74-1.43-1.31-2.16-1.86c-0.63-0.48-1.09-1.23-1.57-1.86
		c-0.23-0.16-0.46-0.33-0.69-0.49c-0.48-0.58-0.74-1.23-1.18-1.86c-0.46-0.68-1.2-1.28-1.67-1.96c-0.65-0.95-1.19-1.83-1.86-2.75
		c-1.14-1.54-2.96-2.56-4.12-4.12c-0.56-0.75-1.01-1.51-1.57-2.26c-0.3-0.4-0.8-0.75-1.08-1.18c-0.58-0.89-0.81-1.95-1.37-2.85
		c-1.4-2.24-3.17-4.38-4.51-6.67c-0.42-0.71-0.48-1.45-0.79-2.25c-0.25-0.66-0.72-1.44-0.98-2.06c-0.33-0.78-0.37-1.48-0.69-2.26
		c-0.58-1.4-1.45-2.76-2.06-4.22c-0.41-0.99-0.34-2.08-0.69-3.14c-0.42-1.29-1.07-2.43-1.57-3.63c-1.03-2.51-1.65-6.05-3.14-8.04
		c-0.17-0.26-0.01-0.13-0.29-0.1c-1.04-2.22-1.46-4.98-2.16-7.55c-0.21-0.79-0.08-1.35-0.29-2.16c-0.25-0.96-0.54-2.09-0.78-3.04
		c-0.1-0.82-0.2-1.63-0.29-2.45c-0.14-0.52-0.36-1.1-0.39-1.77c0.07,0.08,0.13,0.22,0.2,0.3v0.1h0.1c-0.07-0.62-0.13-1.24-0.2-1.86
		c-0.1,0.15-0.1,0.4-0.1,0.69c-0.03-0.03-0.07-0.07-0.1-0.1c-0.55-0.5-0.15-1.37-0.29-2.06c-0.24-1.19-0.58-2.25-0.69-3.53
		c-0.12,0.18-0.11,0.56-0.1,0.88h-0.1c-0.38-1.65-0.51-3.83-0.88-5.49C28.65,176.75,28.8,175.84,28.69,175.32z"/>
</g>
    <g id="Kont_Main_Kopie">
	<radialGradient id="SVGID_10_" cx="30.8873" cy="186.9008" r="0.0988" gradientUnits="userSpaceOnUse">
		<stop offset="0" style="stop-color:#0CCFFF"/>
        <stop offset="0.1842" style="stop-color:#0BC2FB"/>
        <stop offset="0.5257" style="stop-color:#079FF0"/>
        <stop offset="0.6568" style="stop-color:#0690EB"/>
        <stop offset="0.9001" style="stop-color:#004B96"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_10_)"
              d="M30.95,187c-0.06-0.17-0.02-0.09-0.1-0.2v0.2H30.95z"/>

        <radialGradient id="SVGID_11_" cx="92.9938" cy="272.6319" r="265.3621" fx="93.1629" fy="85.9785"
                        gradientTransform="matrix(-0.7998 -0.6002 0.6544 -0.872 -11.0242 566.1816)"
                        gradientUnits="userSpaceOnUse">
		<stop offset="0.7484" style="stop-color:#3DCFFF;stop-opacity:0"/>
            <stop offset="0.7965" style="stop-color:#39CFFF;stop-opacity:0.3213"/>
            <stop offset="0.8403" style="stop-color:#2ECEFF;stop-opacity:0.6133"/>
            <stop offset="0.8683" style="stop-color:#23CDFF;stop-opacity:0.8"/>
            <stop offset="0.9988" style="stop-color:#00CAFF"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_11_)" d="M189.59,32.68c0.37,0.41,1.2,0.37,1.57,0.79h0.78
		C191.52,32.83,190.67,32.64,189.59,32.68z M196.16,33.66v0.1c0.22,0.17,0.21,0.24,0.59,0.29c-0.13,0.16-0.06,0.11-0.29,0.2
		c0.46,0.33,0.86,0.03,1.57,0v-0.1c-0.57-0.19-0.94-0.55-1.67-0.59C196.26,33.64,196.33,33.6,196.16,33.66z M193.71,33.76
		c-0.59-0.15-1.2,0.1-1.57-0.1h-0.2c0.22,0.32,0.49,0.35,0.79,0.59h0.1c-0.03,0.07-0.06,0.13-0.1,0.2c0.03,0.03,0.07,0.07,0.1,0.1
		H194v0.49c0.27,0.03,0.69,0.07,0.88,0.2c0.61,0.02,1.67,0.13,1.96-0.2h0.1c-0.03-0.1-0.07-0.2-0.1-0.29
		c-0.65-0.23-1.45-0.16-2.06-0.49C194.52,34.1,194.07,33.85,193.71,33.76z M199.2,42.59c-0.91-0.13-1.78-0.26-2.45,0.29h-0.2
		c0.36,0.38,1.2,0.66,1.86,0.69c-0.36,0.24-1.75,0.1-2.16-0.2h-1.08v0.2c0.15,0.05,0.16,0.07,0.39,0.1
		c-0.82,0.56-1.81-0.21-2.35-0.1c-0.29,0.06-0.95,0.25-1.37,0.29c1.03,0.86,2.85,0.76,3.83,1.47h0.69c-0.05-0.15-0.07-0.16-0.1-0.39
		c-0.31-0.15-0.53-0.27-0.98-0.29v-0.1c0.67,0.01,0.9,0.31,1.37,0.49c0.46-0.19,1.41-0.37,1.76-0.39c0.01-0.43,0.08-0.21,0.2-0.69
		c0.79-0.02,1.36-0.18,1.86,0.2h0.29C200.52,43.67,199.56,43.08,199.2,42.59z M201.36,53.28c-0.46-0.01-0.76-0.01-0.98,0.2h-0.2
		c0.11,0.58,0.55,1.4,0.79,1.67c-0.03,0.03-0.07,0.07-0.1,0.1c-0.12,0-0.05,0.06-0.2-0.1h-0.2c0.1,0.19,0.13,0.27,0.29,0.39
		c-0.03,0.03-0.06,0.07-0.1,0.1c-0.13,0.09-0.24,0.09-0.49,0.1c0.1,0.08,0.02,0.04,0.2,0.1c-0.13,0.09-0.24,0.09-0.49,0.1
		c0.06,0.31,0.02,0.24,0.19,0.39c-0.14,0.24-0.12,0.18-0.49,0.2c0.1,0.29,0.2,0.59,0.3,0.88c0.1,0.03,0.19,0.07,0.29,0.1
		c0.25,0.55-0.25,0.59,0.2,0.98c-0.17,0.24-0.09,0.18-0.2,0.49c0.23,0.16,0.29,0.43,0.49,0.59c0.54,0.41,1.2,0.62,1.57,1.18
		c0.2,0.3,0.2,1.13,0.39,1.37c0.22,0.28,0.79,0.25,0.98,0.59c0.15,0.27,0.39,1.37,0.39,1.37c0.2,0.06,0.39,0.13,0.59,0.2
		c0.26,0.26,0.52,0.52,0.78,0.78c-0.14,0.24,0.02,0.11-0.29,0.2c0.26,1.43,2.38,1.05,3.24,1.67c0.24-0.14,0.11,0.02,0.2-0.29
		c0.13,0.13,0.26,0.26,0.39,0.39c0.59-0.03,1.18-0.07,1.77-0.1v-0.2c0.37-0.25,1.08-0.44,1.37-0.39c-0.09-0.45-0.29-0.48-0.49-0.79
		c-4.05,0.11-6.07-3.19-7.65-5.89c-0.18-0.12,0.01-0.05,0.1-0.2c-0.46-0.31-0.38-0.71-0.69-1.18c-0.23-0.2-0.46-0.39-0.69-0.59
		c-0.1-0.19-0.23-3.02-0.2-3.53C202.09,53.9,201.71,53.58,201.36,53.28z M212.84,55.34h0.1c-0.12-0.49-0.78-0.69-1.37-0.69
		c-0.09,0.33-0.05,0.31,0.1,0.59C212.15,55.23,212.62,55.21,212.84,55.34z M208.91,70.84c-0.12,0.22-0.23,0.38-0.29,0.69
		c0.16,0.15,0.16,0.31,0.29,0.49c0.24,0.33,0.69,0.5,0.98,0.78c0.48-0.04,0.75-0.17,1.08-0.1v-0.2c0.14-0.27-0.16-0.98-0.39-1.37
		C210.02,71.01,209.62,70.84,208.91,70.84z M194.79,106.75c-0.19,0.09-0.07,0.04-0.29,0v0.1c-0.1,0.12,0.02,0.12-0.1,0.29
		c0.12,0.52,0.41,0.38,0.69,0.69c0.07,0.12-0.02,0.27-0.1,0.49c0.07,0.03,0.13,0.06,0.2,0.1v0.1h0.1c0.04-0.22,0.08-0.71,0.2-0.88
		c0.12,0,0.05-0.06,0.2,0.1c0.07-0.11,0.06-0.09,0.1-0.29c0.48-0.12,0.9-0.76,1.08-1.18c-0.21-0.19-0.81-0.98-0.98-1.08
		c-0.28-0.16-0.48-0.02-0.69-0.2h-0.2c-0.11,0.51-0.08,0.9,0.29,1.18C195.17,106.46,195.01,106.58,194.79,106.75z M160.45,126.56
		c-0.33-0.05-1.9-1.12-2.55-0.39h-0.29c0.13-0.36,0.57-0.75,0.29-1.18c0.08-0.34,0.14-0.26,0.29-0.49c0.31,0.06,0.29,0.09,0.49,0.2
		l0.2-0.29h0.1c-0.21-0.59-0.7-0.59-1.08-0.98c-0.27-0.28-0.18-0.62-0.39-0.98c-0.15-0.25-0.47-0.11-0.69-0.29
		c-0.17-0.15-0.16-0.49-0.29-0.69c-0.26-0.37-1.1-0.83-1.47-1.08c0-1.97-0.66-3.54-2.16-4.02c0.09-1.26,0.68-1.42,1.18-2.16
		c0.4-0.59,0.41-1.36,0.98-1.77c0-0.37,0.01-0.64-0.2-0.78c-0.41-0.29-2.89-0.14-3.24,0c-0.03-0.03-0.07-0.07-0.1-0.1
		c0.05-0.29,0.14-0.67,0.29-0.88c0.18-0.47,0.94-0.85,1.37-1.08c0.08-0.4,0.13-0.66,0.1-0.98c0.26-0.13,0.34-0.26,0.69-0.49
		c-0.02-0.23-0.02-0.28-0.1-0.39v-0.29c0.13,0.1,0.26,0.2,0.39,0.29c0.12-0.42-0.2-0.33,0.2-0.59v-0.1
		c-0.16,0.03-0.33,0.06-0.49,0.1c-0.05-0.15-0.07-0.16-0.1-0.39h-0.2c-0.1,0.34-0.04,0.55-0.69,0.59c-0.07,0.26-0.13,0.52-0.2,0.78
		c0.13,0.13,0.26,0.26,0.39,0.39c-0.55,0.63-2.37,0.39-3.04,0.1c-0.37,0.58-0.72,1.34-1.18,1.86c-0.2,0.1-0.39,0.2-0.59,0.29
		c-0.12,0.16-0.09,0.53-0.2,0.69c-0.09,0.06-0.2,0.03-0.39,0.1c-0.08-0.18-0.14-0.26-0.2-0.49c-0.38,0.13-0.68,0.38-0.98,0.59
		c0.08,0.65,0.74,1.26,1.18,1.57c-0.14,0.59-0.51,0.84-0.98,1.08v0.79h-0.29v0.2h1.08c-0.02,0.23-0.02,0.28-0.1,0.39
		c-0.24,0.54-0.82,0.66-1.37,0.88c-0.06,0.17-0.02,0.1-0.1,0.2c0.09,0.36,0.18,0.27,0.29,0.59c0.17-0.06,0.1-0.02,0.2-0.1
		c0.53-0.07,0.5-0.31,0.79-0.59c0.1,0.03,0.04-0.03,0.1,0.1c0.03,0.07-0.09,1-0.29,1.18v0.49c0.16-0.03,0.33-0.07,0.49-0.1
		c0.04-0.28,0.06-0.42,0.2-0.59v-0.1c0.32,0.14,0.22,0.25,0.69,0.29v-0.88h0.2c0.14,0.26,0.28,0.41,0.49,0.59
		c-0.17,0.83-0.87,1.13-1.18,1.77c-0.1,0.2,0.07,0.61,0.29,0.78c0.06,0.17,0.02,0.1,0.1,0.2c0.05-0.12,0.12-0.3,0.2-0.39
		c0.1-0.08,0.02-0.04,0.2-0.1c0.16,0.16,0.33,0.33,0.49,0.49c0.18,0.23,0.14-0.16,0.29-0.2c0.4-0.09,0.45,0.46,1.08-0.2h0.2
		c-0.04,0.41-0.05,0.42-0.3,0.59c0.04,0.78,0.34,1.03,0.49,1.57c0.23,0.83,0.1,1.55,0,2.16c-0.03,0.03-0.07,0.07-0.1,0.1
		c-1.07,0.23-1.49-0.01-2.45-0.39c-0.16,0.16-0.33,0.33-0.49,0.49c0.11,0.19,0.41,0.38,0.59,0.49c-0.05,0.54-0.29,0.53-0.69,0.69
		c-0.06,0.17-0.02,0.09-0.1,0.2v0.29c0.28,0.03,0.43,0.08,0.69-0.1c0.2,0.04,0.19,0.02,0.29,0.1c0.26,0.32,0.19,0.89-0.1,1.18
		c-0.32,0.62-1.53,0.87-2.26,0.78c-0.16,0.23-0.33,0.46-0.49,0.69c0.14,0.24-0.02,0.12,0.29,0.2v0.39c0.34,0.08,0.27,0.14,0.49,0.29
		c0.23,0.14,0.96-0.12,1.28-0.2c0.16,0.34,0.29,0.59,0.59,0.78c-0.03,0.2-0.06,0.39-0.1,0.59c-0.44,0.23-0.48,0.48-1.18,0.49
		c-0.32,1.48-1.36,2.05-2.55,2.65v0.39c0.56-0.05,0.65-0.14,0.88,0.29c0.62-0.14,0.75-0.77,1.37-0.98c0.47-0.27,1.28,0.3,1.86,0.49
		c0.31-0.52,1.92-2.56,2.45-0.88c0.58,0.09,1.26,0.16,1.67-0.3c0.62,0.06,0.5,0.28,0.88,0.49c0.29,0.11,0.51-0.2,0.59-0.59
		c0.53-0.03,1.9-0.14,2.16,0.29c0.4,0,0.82-0.01,1.08-0.1v-0.39c1.19-0.03,1.4-0.77,2.26-1.08c0.16-0.61,0.38-1.48,0.39-2.16h-0.29
		C160.13,128.41,160.6,127.71,160.45,126.56z M144.95,113.32h0.1c0.16-0.24,0.42-0.29,0.59-0.49c0.33-0.39,0.3-1.46,0.69-1.86
		c0.78-0.82,1.51-0.47,1.86-2.06c-0.1-0.03-0.2-0.07-0.29-0.1c-0.34,0.35-1.03,0.56-1.47,0.79c-0.07,0.41-0.01,0.75-0.2,0.98
		c-0.16,0.3-0.55,0.46-0.88,0.59c0.13,0.52,0.11,1.45-0.39,1.86V113.32z M190.67,108.91c-1.3,0.43-0.93,0.96-1.67,1.57
		c0.16,0.66,0.48,1.12,0.49,1.86h0.29c0.17-0.49,0.28-1.22,0.69-1.47c-0.31-0.91-0.2-1.01,0.29-1.86
		C190.73,108.97,190.7,108.94,190.67,108.91z M137.49,129.12c1.51,0.09,4.23-0.57,4.91-1.57c0.7,0.04,1.32,0.04,1.86,0.2
		c0.21-0.26,0.19-0.56,0.39-0.88c0.49-0.49,0.98-0.98,1.47-1.47c-0.07-0.37-0.17-0.41-0.39-0.59c-0.05-2.51,0.15-2.79,1.67-3.73
		c-0.04-1.31-0.71-1.82-0.98-2.94c-0.43,0.05-0.82,0.16-1.18,0.29c-0.23-0.23-0.46-0.46-0.69-0.69c-0.24,0.08-0.24,0.23-0.39,0.29
		c-0.55,0.24-1.19-0.07-1.67,0.2c-0.62,0.35-0.31,0.85-1.08,1.18c0.08,0.41,0.16,0.36,0.49,0.49c-0.1,0.49-0.35,0.46-0.59,0.79
		c-0.63,0.01-1.12-0.03-1.47-0.29c-0.68-0.01-0.91,0.07-1.28,0.29c-0.02,0.38-0.11,0.58,0,0.79c0.01,0.64-0.11,0.76-0.49,0.98
		c0.02,0.79,0.44,1.47,0.88,1.86c-0.03,1.06-0.55,0.64-0.98,1.18c-0.23,0.29-0.08,0.67-0.39,0.88c-0.26,0.18-0.66,0.11-0.88,0.29
		c-0.07,0.11-0.06,0.09-0.1,0.29c0.2,0.04,0.19,0.02,0.29,0.1c0.03,0.03,0.07,0.06,0.1,0.1h-0.1c-0.11,0.23-0.19,0.27-0.39,0.39
		c0.08,0.47,0.25,0.52,0.2,0.88C137.17,128.61,137.3,128.65,137.49,129.12z M148.97,121.07c-0.17,0.33-0.41,0.67-0.69,0.88v0.2
		c0.59-0.02,0.64-0.17,0.98-0.39C149.27,121.3,149.31,121.21,148.97,121.07z M194,154.72h-0.2
		C193.96,154.84,193.88,154.88,194,154.72z M175.85,159.63c0.07,0.77,0.26,2.06,0.79,2.35c-0.07,0.1-0.13,0.2-0.2,0.29
		c0.35,0.28,0.73,0.61,1.28,0.69c0.03-0.5,0.23-0.66,0.29-0.98c-0.03-0.29-0.07-0.59-0.1-0.88c0.05-0.15,0.36-0.44,0.39-0.59
		c0.08-0.39-0.35-2.41-0.49-2.85c-0.03-0.03-0.07-0.07-0.1-0.1c-0.21,0.28-0.16,0.55-0.1,0.88c-0.45,0.16-0.91,0.23-1.27,0.49
		C176.12,159.1,176.06,159.45,175.85,159.63z M220.49,163.85c0.03-0.03,0.07-0.07,0.1-0.1c-0.3-0.22-0.61-0.53-0.79-0.88h-0.39
		c-0.21,0.26-0.49,0.51-0.79,0.69c0.03,0.1,0.07,0.2,0.1,0.29c0.49,0.1,0.98,0.2,1.47,0.29
		C220.29,164.04,220.39,163.94,220.49,163.85z M175.17,165.71h0.29c0.13,0.26,0.4,0.65,0.49,0.88c0.2,0.54-0.29,0.81-0.2,1.18
		c0.02,0.07,0.29,0.18,0.29,0.2c0.1,0.21-0.04,0.98-0.1,1.08c-0.03,1.15,0.05,1.61,0.69,2.06c0.12,0.1,0.12-0.02,0.29,0.1
		c0.54-0.09,0.7-0.33,0.69-0.98c0.42-0.11,0.58-0.27,0.88,0.1h0.39c0.21-1.06,0.16-2.53,0-3.53c-0.1-0.59,0.57-0.67,0.39-1.27
		c-0.11-0.37-0.37-0.54-0.39-1.18h-0.29v-0.39c-0.17-0.16-0.29-0.36-0.39-0.59c-1.17,0.05-0.97,0.69-1.57,1.18
		c-0.42,0.34-0.98,0.21-1.47,0.29C175.1,165.2,175.13,165.27,175.17,165.71z M219.71,166.79c0.03,0.03,0.07,0.07,0.1,0.1
		c0.07-0.07,0.13-0.13,0.2-0.2c0.03-0.45-0.04-0.57-0.1-1.08c-0.03-0.03-0.07-0.06-0.1-0.1h-0.39c-0.1,0.08-0.03,0.04-0.2,0.1
		c0.09,0.42,0.28,0.25,0.39,0.49C219.81,166.54,219.38,166.47,219.71,166.79z M165.45,168.36c0.11-0.09,0.01-0.25-0.1-0.39
		c-0.19-0.25-0.33-0.29-0.78-0.29c-0.11,0.07-0.09,0.06-0.29,0.1c0.06,0.17,0.02,0.1,0.1,0.2
		C164.43,168.1,165.23,168.45,165.45,168.36z M161.33,169.34c0.35,0.62,0.52,0.47,0.88,0.88c0.6-0.1,0.95-0.73,1.08-1.27
		c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.28-0.42-0.49-0.04-0.78-0.69h-0.49c-0.43,0.41-1.02,0.59-1.37,1.08
		c-0.03,0.03-0.06,0.07-0.1,0.1c0.23,0.09,0.16,0.04,0.29,0.2C161.07,169.48,161.15,169.42,161.33,169.34z M237.27,171.4
		c-0.26,0.23-0.21,0.45-0.59,0.59c0.08,0.44,0.27,0.5,0.39,0.88c0.65,0.07,1.06-0.05,1.47,0.1c0.26-0.66,0.92-0.74,1.18-1.28
		c0.12-0.24-0.1-0.54,0.1-0.69c0.02-0.01,0.65-0.19,0.69-0.2c-0.11-0.29-0.25-0.35-0.49-0.49c0.09-0.68,0.94-1.37,0.69-1.86
		c-0.58,0.95-1.55,2.04-2.84,1.96c-0.06,0.22,0.05,0.54-0.1,0.79C237.66,171.27,237.37,171.33,237.27,171.4z M206.85,168.85
		c-0.07,0.07-0.13,0.13-0.2,0.2v0.29h-0.29v0.59c0.27,0.03,0.69,0.07,0.88,0.2h0.2c-0.07-0.63-0.25-0.76-0.39-1.28H206.85z
		 M207.64,171.3c0.32-0.09,0.15,0.05,0.3-0.2h0.1c-0.14-0.29-0.44-0.42-0.79-0.49C207.3,171.12,207.39,171.04,207.64,171.3z
		 M158.59,171.11c-0.07-0.36,0.01-0.27-0.29-0.39c-0.16,0.17-0.4,0.36-0.59,0.49v0.29c0.17,0.06,0.1,0.02,0.2,0.1
		C158.29,171.5,158.3,171.3,158.59,171.11z M225.69,172.77c0.41-0.34,0.58-1.13,0.69-1.77c-0.1-0.03-0.2-0.07-0.29-0.1
		c-0.37,0.41-1.04,1.11-0.49,1.86c0.03,0.03,0.07,0.07,0.1,0.1V172.77z M217.84,176.8c-0.21-0.22-0.37-0.24-0.49-0.59
		c-0.59,0.14-1.04,0.5-1.47,0.79c0.01,0.28,0.04,0.42,0.1,0.59c0.6-0.06,1.9-0.47,2.35-0.2c0.55-0.02,0.67-0.04,0.79,0.39
		c0.56-0.04,2.83-0.82,3.24-1.08c0.1-0.03,0.2-0.07,0.29-0.1c0-0.29,0-0.54-0.1-0.69c-0.21,0.04-0.72,0.51-1.18,0.59
		c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c-0.43,0.05-0.43,0.2-0.69,0.29c-0.56-0.09-1.57-0.19-2.16,0.1
		C218.22,176.51,218.17,176.7,217.84,176.8z M167.51,267.35c1.85,0.68,2.33,3.16,3.83,4.22c1.65,1.17,4.88-0.04,6.77-0.49
		c0.86-0.21,2.37,0.11,2.75-0.1h0.39c0.23,0.12,0.28,0.71,0.49,0.88c0.23,0.07,0.46,0.13,0.69,0.2v0.2c0.45-0.04,0.78-0.1,0.98-0.39
		c0.2,0.04,0.19,0.02,0.29,0.1c0.06,0.15,0.12,0.04,0,0.2c-0.01,0.75,0.35,1.03,0.88,1.18c0.02,0.82-0.22,1.21-0.39,1.96
		c-0.07,0.3,0.12,0.73,0.1,0.88c-0.01,0.11-1.21,1.36-1.37,1.47c0.12,0.32,0.26,0.3,0.39,0.59c0.15,0.39-0.35,0.37-0.49,0.69
		c-0.34,0.77,0.27,1.16-0.2,1.67c-0.17,0.52-0.96,1.02-1.57,0.79c-0.03,0.03-0.06,0.07-0.1,0.1c0.15,0.94,1.09,1.15,1.57,1.76
		c0.12,0.16-0.01,0.38,0.1,0.59c0.1,0.18,1.81,1.27,2.06,1.37c0.33,0.07,0.66,0.13,0.98,0.2c0.7,0.31,1.28,0.88,1.86,1.28
		c0.74,0.5,1.72,0.5,2.45,0.98c0.96,0.64,0.8,1.59,1.77,2.06c-0.06,0.17-0.02,0.09-0.1,0.2c0.07,0.65,2.3,2.7,2.84,3.04
		c-0.03,0.72-0.71,0.93-1.18,1.18c0.07,0.1,0.13,0.2,0.2,0.29h0.29c0.06,0.54,0.29,0.56,0.29,0.88c0.46,0.2,0.64,0.51,1.18,0.59
		c0.44,2.58-1.88,2.6-3.43,3.73c-0.19,0.14-0.15,0.4-0.29,0.59c-0.12,0.15-0.47,0.15-0.59,0.29c-0.23,0.28,0.1,0.48-0.1,0.79
		c-0.24,0.38-1.3,1.16-1.77,1.37c0.44,0.87-0.07,0.46-0.2,1.08c0.03,0.29,0.07,0.59,0.1,0.88c0.57,0.28,1.31,0.4,1.96,0.69
		c1.31,0.57,2.27,1.51,4.02,1.67c0.03,0.03,0.07,0.07,0.1,0.1c-0.11,0.22-0.14,0.15-0.29,0.29c-0.07,0.17,0.19,0.21-0.1,0.49
		c0.14,0.28,0.35,0.33,0.69,0.39c-0.1,0.17-0.13,0.16-0.2,0.39c0.15,0.13,0.21,0.18,0.29,0.39c0.49,0.06,0.99,0.13,1.48,0.21
		c23.26-4.47,44.5-14.62,62.21-28.95c0.36-1.63,0.68-3.28,0.76-3.54c0.07-0.23-0.12-0.27-0.1-0.39c0.04-0.25,2.07-4.05,2.26-4.22
		c-0.02-0.25-0.04-0.33-0.1-0.49c-0.49,0.05-0.56,0.17-1.08,0.2c0-0.65-0.06-1.09,0-1.37c0.2-0.94,1.11-1.53,1.18-2.84
		c-0.49-0.01-0.57-0.05-0.78-0.29c-0.37-0.48,0.41-1.84,0.78-2.55c0.28-0.52,0.86-0.97,1.18-1.47c0.44-0.7,0.61-1.47,1.08-2.16
		c0.68-1.01,1.52-2.06,2.26-3.04c0.36-0.48,0.93-0.88,1.27-1.37c1.98-2.82,3.52-5.83,5.5-8.63c1.05-1.49,2.14-3.04,3.24-4.51
		c0.56-0.75,1.36-1.45,1.86-2.26c2.19-3.49,3.93-7.26,5.59-11.28c0.45-1.08,0.5-2.31,0.88-3.43c0.81-2.37,1.76-4.86,2.45-7.36v-1.96
		c0.11-0.38,0.63-0.71,0.49-1.28c-0.17-0.68-0.54-1.88-0.1-2.55v-0.39c-1.3,0.3-0.86,0.7-1.37,1.67c-0.32,0.61-1.01,1.03-1.37,1.57
		c-0.07,0.2-0.13,0.39-0.2,0.59c-0.33,0.49-0.85,0.75-1.37,1.08c-0.51,0.32-0.66,1.15-1.08,1.57c-0.29,0.29-0.6,0.27-0.98,0.49
		c-0.62,0.35-1.19,2.16-1.77,2.75c-0.31,0.31-1.05,0.2-1.37,0.49c-0.41,0.37-0.99,1.56-1.37,2.06c-0.29,0.38-0.85,0.62-1.18,0.98
		c-0.86-0.02-1.1-0.3-1.67-0.49c-0.04-0.21-0.09-0.62-0.2-0.79c-0.25-0.1-1.08,0.28-1.28,0.59h-0.2c0.11-0.58,0.77-1.26,1.18-1.57
		c0-1.25-0.52-1.25-0.88-2.06c-0.62,0.04-0.91,0.07-1.38,0.2c-0.1-0.23-0.19-0.46-0.29-0.69c-0.94-0.32-1.91-0.16-2.26-1.18
		c-0.75-0.06-0.79,0.06-1.47-0.2c-0.13,0.03-0.55,0.13-0.69,0.1c-0.74-0.18-1.8-0.65-2.65-0.78c-0.29-1.56-1.41-4.39-2.55-5
		c-0.35-0.19-0.68-0.08-0.98-0.29c-0.42-0.29-0.22-0.58-0.78-0.79c-0.24-0.17-0.67-0.2-1.08-0.2c-0.06-0.63-0.35-0.66-0.49-1.08
		c-0.33-1-0.05-2.06-0.49-2.75v-1.27c-0.13-0.31-0.44-0.19-0.69-0.39c-0.2-0.16-0.73-1.45-0.79-1.86c-0.83-0.33-1.43-0.44-1.86-1.18
		c-0.41,0.08-0.47,0.23-0.79,0.39c-0.14-0.19-0.38-0.36-0.59-0.49c0.03-0.2,0.07-0.39,0.1-0.59c-0.43-0.18-0.47-0.34-0.79-0.59
		c0-0.46-0.04-1.03-0.1-1.18c-0.06-1.1-0.74-0.82-1.27-1.37c-0.16-0.17-0.16-0.49-0.3-0.69c-0.32-0.45-0.86-0.84-1.18-1.27
		c-0.75-1.04-1.79-1.88-2.45-2.94c-0.07-0.3-0.13-0.59-0.2-0.88c-0.07-0.15-0.39-0.27-0.49-0.39c-0.03-0.2-0.07-0.39-0.1-0.59
		c-0.16-0.1-0.33-0.2-0.49-0.29c-0.25-0.36-0.24-0.84-0.49-1.18c-0.39-0.53-1.65-0.96-2.16-1.47c-0.6-0.6-1.01-1.63-1.47-2.35h-0.3
		v-0.49c0.16,0.05,2.04,1.19,2.16,1.37c0.2,0.31,0.06,0.88,0.29,1.18c0.22,0.29,0.75,0.3,1.08,0.49c0.12,0.07,0.1,0.31,0.2,0.39
		c0.4,0.36,1.23,0.6,1.77,0.59c0.05-0.43,0.36-0.89,0.2-1.47c-0.06-0.19-0.28-0.37-0.2-0.78c0.05-0.23,0.24-0.8,0.2-1.08
		c-0.13-0.86-0.38-1.84,0.1-2.45v-0.1c0.42,0.54,0.43,3.86,0.2,4.51c0.06,0.03,0.13,0.07,0.2,0.1c0.03,0.03,0.07,0.07,0.1,0.1
		c0.12-0.22,0.26-0.3,0.39-0.49c0.7,0.08,1.41,0.27,1.77,0.69c0.19,0.22,0.16,0.52,0.39,0.69c0.14,0.1,0.4,0.05,0.49,0.2
		c0.11,0.17-0.05,0.37,0.1,0.49c0.2,0.07,0.39,0.13,0.59,0.2c0.49,0.35,1.36,1.25,1.57,1.86c0.2,0.03,0.39,0.07,0.59,0.1
		c0,0.27,0,0.45,0.1,0.59c0.19,0.32,0.3,0.09,0.59,0.29v0.1c0.24,0.24,0.59,0.62,0.79,0.88h0.29c0.05,0.32,0.17,0.62,0,0.88
		c0.06,0.24,0.95,1.19,1.18,1.28c0.38,0.17,1.56-0.06,2.16,0.39c0.27,0.21,2.17,2.66,2.26,2.94c-0.03,0.56-0.07,1.11-0.1,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39c0.26,0.39,0.08,0.78,0.3,1.27c0.31,0.71,1.25,1.12,1.67,1.77c4.21,0,3.18,3.81,6.67,4.51
		c0.06,0.27,0.24,0.5,0.29,0.69c0.18,0.61-0.29,1.11,0,1.67c0.13,0.1,0.26,0.2,0.39,0.29c0.06,0.29,0.13,0.59,0.2,0.88
		c0.1,0.07,0.2,0.13,0.29,0.2c0.19,0.48-0.25,0.86,0,1.28c0.2,0.53,0.43,0.21,0.79,0.49c0.28,0.34,0.18,0.84,0.39,1.28
		c0.18,0.36,0.65,0.83,0.79,1.17c0.2,0.53-0.23,0.84,0,1.38c0.19,0.45,0.7,0.5,0.49,1.18c0.44-0.1,0.23-0.25,0.49-0.39
		c0.26-0.03,0.52-0.07,0.78-0.1c0.49-0.29,0.69-0.88,1.08-1.28c0.25-0.25,0.68-0.29,0.88-0.59c0.55-0.84,0.79-2.16,1.47-2.84
		c0.49-0.5,1.24-0.71,1.67-1.28c0.69-0.92,1.19-1.87,1.86-2.85c0.43-0.36,0.85-0.72,1.28-1.08c0.68-0.99,0.79-2.39,1.47-3.34
		c0.33-0.33,0.66-0.65,0.98-0.98c0.25-0.35,0.24-0.79,0.49-1.18c0.28-0.42,0.89-0.75,1.18-1.18c0.34-0.5,0.4-1.03,0.69-1.57
		c0.15-0.3,0.6-0.73,0.69-1.08c0.06-0.25-0.17-0.62-0.2-0.79c-0.09-0.47,0.12-1.31,0.29-1.67c0.41-0.84,1.1-1.6,1.57-2.35
		c0.26-0.42,0.24-0.84,0.49-1.28c0.36-0.62,1.18-0.88,1.47-1.57c0.35-0.83-0.2-1.78,0.2-2.65c0.23-0.5,0.98-0.96,1.18-1.47
		c0.07-0.88,0.13-1.77,0.2-2.65c0.21-0.76,0.9-1.29,1.08-1.96c0.23-0.89-1.34-3.68,0.1-4.02v-0.29h0.29c0.03-0.03,0.07-0.07,0.1-0.1
		c0-0.37,0.14-0.96,0.1-1.18c-0.07-0.37-0.46-0.63-0.39-1.18c0.1-0.78,0.83-3.98,0-4.91v-0.1c-0.07,0.07-0.13,0.13-0.2,0.2
		c-0.65-0.07-1.35-0.74-1.67-1.18c-0.51,0.04-1.64,0.7-1.96,1.08c-1.76-0.04-2.22-1.77-2.75-3.04c-0.25-0.61-0.02-1.32-0.39-1.76
		c-0.03-0.03-0.06-0.07-0.1-0.1c-0.21,0.55,0,1.33-0.2,2.06c-0.33,1.25-0.36,2.94-0.79,4.22c-0.12,0.36-0.47,0.7-0.59,1.08
		c-0.27,0.06-0.51,0.1-0.88,0.1c-0.12,0.32-0.15,0.59-0.39,0.79c-0.31,0.15-0.57-0.24-0.98-0.1c-0.22,0.08-0.23,0.39-0.39,0.49
		c-0.36,0.22-0.66-0.14-0.98,0.29c-0.65-0.13-0.91-1.46-1.18-1.96c-0.36-0.1-0.72-0.2-1.08-0.29c-0.69-0.1-1.37,0.63-2.06,0.2
		c-0.51-0.21-0.55-0.9-0.88-1.28c-0.3-0.2-0.67-0.05-1.08-0.2c-0.33-0.12-1.74-1.34-1.86-1.67c-0.25-0.35,0-3.49,0.2-3.92
		c0.16-0.36,0.53-0.47,0.69-0.88c0.21,0.05,0.35,0.09,0.49,0.2c0.5,0.34,0.5,0.94,0.88,1.37c0.22,0.33,0.63,0.1,0.98,0.29
		c0.8,0.44,1.08,1.74,1.86,2.26c0.54,0.54,1.02-0.37,1.28-0.78c0.08-0.07,0.22-0.13,0.29-0.2c0.51,0.1,0.41,0.45,0.78,0.59h0.88
		c0.12,0.06,0.15,0.34,0.2,0.49c0.55-0.09,0.81-0.16,1.47-0.2c0.12-0.3,0.25-0.62,0.39-0.88c0.2,0.04,0.19,0.02,0.29,0.1
		c0.65-0.19,0.5-0.69,1.28-0.59c0.37-0.95,0.86-2.36,0.98-3.63c0.03-0.03,0.06-0.07,0.1-0.1h0.39c0.04,0.02,1.43,2.23,1.47,2.35
		c0.47-0.07,1.5-0.56,1.67-0.78c0.13-0.17,0.2-0.5,0.39-0.59c0.16,0.03,0.33,0.07,0.49,0.1c0.13-0.26,0.26-0.52,0.39-0.79
		c0.35-0.3,0.71-0.5,1.08-0.78c0.18-0.14,0.22-0.45,0.39-0.59c0.42-0.34,1.07-0.33,1.37-0.79c0.07-0.23,0.13-0.46,0.2-0.69
		c0.06-0.09,0.34-0.18,0.39-0.29c0.03-0.33,0.07-0.65,0.1-0.98c0.57-0.93,1.61-1.82,2.06-2.85c0.36-0.82,0.39-1.75,0.88-2.45v-0.2
		h0.2c0.27,0.29,0.43,0.35,0.49,0.88c0.26-0.12,0.2-0.19,0.49-0.29c0.4,0.89,0.75,1.31,1.57,1.77c0.09,0.05,0.32,0.03,0.49-0.1
		c0.79,0.17,0.49,1.21,1.08,1.57c0.5,0.3,1.08-0.09,1.57,0.59c0.23-0.02,0.28-0.02,0.39-0.1c0.45-0.18,0.35-0.52,0.59-0.88
		c0.08,0.02,0.11-0.02,0.2,0.29c0.24-0.11,0.36-0.28,0.49-0.49c0.62,0.18,0.28,0.61,0.49,1.18c0.08,0.22,0.39,0.46,0.49,0.69
		c0.34,0.79,0.35,1.54,0.69,2.35c0.32,0.78,0.42,1.85,0.79,2.75c1.26,3.13,2.3,6.6,2.65,10.69h0.08c0.19-2.97,0.29-5.96,0.29-8.98
		c0-78.28-63.46-141.73-141.73-141.73c-0.56,0-1.12,0.01-1.67,0.02c0.7,0.43,2.23-0.1,3.13,0.09c0.97,0.21,2.14-0.04,3.24,0.2
		c2.14,0.46,4.64,0.42,6.87,0.39c-0.1,0.07-0.09,0.06-0.29,0.1c0.56,0.39,1.54,0.02,2.35,0.2c1.86,0.29,3.73,0.59,5.59,0.88
		c-0.14,0.09-0.32,0.1-0.59,0.1c0.03,0.03,0.07,0.07,0.1,0.1c1.14,0.83,3.82,0.39,5,1.18c0.26,0.16,0.26,0.51,0.49,0.69
		c0.56,0.16,1.11,0.33,1.67,0.49c0.86,0.36,1.95,1.11,2.85,1.37c0.16-0.03,0.33-0.07,0.49-0.1c0.46,0.09,0.96,0.37,1.47,0.49h1.08
		c1.13,0.4,2.19,0.85,3.33,1.28c-0.11,0.08-0.16,0.08-0.39,0.1c0.03,0.03,0.07,0.07,0.1,0.1c0.79,0.57,2.42,0.15,3.24,0.69h0.2
		c-0.03,0.23-0.05,0.24-0.1,0.39c-1.07,0.05-2.53-0.71-3.92-0.29c-0.23,0.07-0.28,0.22-0.59,0.29c0.15,0.29,0.58,0.46,0.88,0.59
		c-0.13,0.16-0.06,0.11-0.3,0.2c0.47,1.24,2.01,0.35,3.04,0.78c0.32,0.14,0.81,0.52,1.18,0.69c-0.27,0.27-0.37,0.23-0.88,0.39
		c0.31,0.8,1.2,1.21,1.77,1.77c-0.03,0.03-0.07,0.06-0.1,0.1c-0.61-0.04-1.51-0.4-1.86-0.2h-0.2c0.07,0.07,0.13,0.13,0.2,0.2v0.1
		c-0.19-0.02-2.7-0.7-2.84-0.78c-0.63-0.02-1.42-0.13-1.47,0.2c-0.74,0-0.59,0.07-0.88,0.29c0.37,0.51,0.75,0.81,1.37,1.08v0.2
		c-0.55-0.14-1.44-0.52-2.06-0.1c-0.43,0.06-0.34,0.12-0.59,0.29c0.51,1.11,2.74,1.1,3.83,1.67v0.39h0.49
		c0.27,0.29,0.67,0.65,0.98,0.88v0.1c-0.28-0.08-0.34-0.1-0.49-0.29h-0.29c0.1,0.28,0.17,0.35,0.39,0.49
		c-0.1,0.08-0.03,0.04-0.2,0.1c0.13,0.17,0.37,0.23,0.49,0.39v0.29c0.29,0.1,0.59,0.2,0.88,0.29c0.35,0.31,0.33,0.86,0.59,1.28
		c0.36,0.23,0.72,0.46,1.08,0.69c-0.07,0.07-0.13,0.13-0.2,0.2c0.26,0.25,0.61,0.35,0.88,0.59c-0.03,0.06-0.07,0.13-0.1,0.2
		c0.1,0.1,0.2,0.2,0.29,0.29c0.06-0.03,0.13-0.07,0.2-0.1c0.32,0.07,0.28,0.24,0.39,0.49c0.2-0.04,0.19-0.02,0.29-0.1
		c0,0,0.39-0.02,0.2-0.1c-0.03-0.03-0.06-0.07-0.1-0.1c0.71,0.09,1.25,0.83,1.77,1.18c-0.01,0.44-0.04,1.21-0.1,1.37
		c0.17,0.29,2.76,1.07,3.24,1.18c0.36-0.37,1.23-0.52,1.77-0.1h0.2c-0.02,0.25-0.04,0.33-0.1,0.49c-0.46-0.03-0.92-0.07-1.37-0.1
		c-0.34,0.1-1.07,0.44-1.37,0.29c-0.24,0.12-0.15,0.17-0.39,0.29c0.07,0.27,0.14,0.42,0.29,0.59v0.1c-0.42,0.01-1.11,0.07-1.37-0.1
		c-0.35,0-0.66,0.02-0.88,0.1c0.06,0.17,0.02,0.1,0.1,0.2c0.47,0.3,1.76,0.21,2.35,0.59c0.58,0.36,0.51,1.32,1.18,1.57v0.2
		c-1-0.28-1.59-1.07-2.45-1.47c-0.73-0.33-0.77,0.27-1.47,0.1c-0.54-0.13-0.92-0.4-1.77-0.39c0.05,0.78,0.44,0.55,0.88,0.88
		c0.2,0.15,0.33,0.72,0.69,0.98c0.37,0.27,0.79,0.33,1.18,0.59c0.32,0.21,1.04,0.67,1.28,0.98c0.44,0.59,0.49,1.33,1.08,1.77
		c0.34,0.25,0.86,0.56,1.28,0.69c0.26,0.03,0.52,0.07,0.79,0.1c0.32,0.17,0.59,0.59,0.88,0.78c0.32,0.21,0.69,0.26,0.98,0.49
		c0.48-0.04,0.4-0.01,0.39-0.29c0.43,0.01,2.06,0.21,2.35,0.39c0.2,0.2,0.39,0.39,0.59,0.59v0.3c-0.61-0.03-0.87-0.17-1.37-0.3
		c-0.1-0.02-4.02,0.34-4.41,0.49c-0.43,0.16-0.92,0.59-1.37,0.78c-0.35,0.15-1.57-0.15-1.77-0.29h-0.69c0.07,0.2,0.13,0.39,0.2,0.59
		c0.58,0.23,1.33,0.31,1.86,0.39c0.23-0.03,0.46-0.07,0.69-0.1c0.79,0.21,1.49,0.85,2.16,1.18c-0.25,0.37-0.9,0.03-1.28,0.29
		c-0.31,0.22-0.45,0.81-0.59,1.18c-0.5,0.09-1.41,0.37-1.86,0.29c-0.29,0.29-0.59,0.59-0.88,0.88c-0.41,0.79,0.16,1.49-0.79,1.77
		c0.03,0.69,0.27,1.57-0.1,2.06c-0.2,0.13-0.72,0.06-0.79,0.1c-0.31,0.15-0.24,0.48-0.19,0.98c-0.03,0.03-0.07,0.07-0.1,0.1
		c-0.9-0.16-1.4-1.18-2.36-1.18c-1.09,0-1.59,0.58-2.84,0.59c0.33,0.37,0.93,0.21,1.37,0.49c0.77,0.49,0.89,1.57,1.47,2.26
		c0.35,0.42,0.8,0.08,1.28,0.39c0.6,0.39,0.64,1.2,1.08,1.77v0.1c-0.42-0.04-0.61-0.26-0.88-0.29c-0.28-0.04-0.46,0.26-0.59,0.29
		c-0.23-0.03-0.46-0.07-0.69-0.1c-0.11,0.36,0.17,0.78,0,1.28c-0.17,0.16-0.33,0.33-0.49,0.49c-0.23,0.51,0.07,0.76-0.29,1.08
		c0.08,0.86,1.18,1.32,1.77,1.67c-0.07,0.27-0.12,0.73-0.2,0.88c-0.36,0.17-2.71-0.12-3.04-0.39c-0.29,0-0.54,0-0.69,0.1
		c-0.09,0.22,0.12,0.48-0.2,0.69c0.27,0.58,1.12,0.68,1.57,1.08c0.41-0.06,0.48-0.18,0.78-0.29c0.23,0.26,0.47,0.51,0.79,0.69
		c-0.03,0.38-0.11,0.57-0.3,0.79c-0.16,0.15-0.16-0.09-0.39-0.1c-0.23,0.07-0.46,0.13-0.69,0.2c-0.52-0.1-0.96-0.62-1.37-0.78
		c-0.43-0.18-0.68,0.19-0.69,0.2c-0.34,0.13-0.53-0.16-0.88-0.2c-0.04-1.43-0.77-1.03-1.37-1.77c-0.19-0.09-0.31-0.66-0.2-0.88
		c-0.13-0.71-0.88-0.73-1.47-0.98c-0.76-0.32-1.91-0.81-2.84-1.18c-0.05-0.12-0.12-0.3-0.2-0.39v-0.1c1.05,0.67,3.99,0.86,5.49,0.49
		c0.86-0.21,1.53,0.3,2.26-0.1c0.52-0.29,0.79-0.94,1.18-1.37c0.01-0.75,0.03-1.46-0.29-1.86c-0.22-0.3-0.24-0.1-0.59-0.29
		c-0.26-0.29-0.52-0.59-0.79-0.88c-0.4-0.26-0.98-0.11-1.47-0.29c-0.61-0.22-1.44-0.08-2.45-0.39c-1.3-0.4-2.71-1.17-4.22-0.69
		c-0.51,0.16-0.71-0.33-1.08-0.2c-0.03,0.1-0.06,0.2-0.1,0.29c-0.29,0.13-0.84-0.15-0.98-0.1c-0.25-0.15-0.2-0.21-0.2-0.59
		c-0.38-0.11-0.67,0.03-0.98-0.2c-0.65,0-0.7,0.2-0.69,0.59c-0.55-0.08-1.33-0.07-1.86-0.1c0.19-0.33,0.26-0.22,0.59-0.2
		c-0.15-0.44-0.05-0.51,0.2-0.79c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.56-0.68-1.83-0.37-2.36-0.78c-0.25,0.01-0.36,0.01-0.49,0.1
		c-0.11,0.16-0.11,0.48-0.1,0.78c-0.16-0.21-0.2-0.51-0.2-0.88c-0.19-0.1-0.27-0.14-0.39-0.29c-0.33,0.03-0.66,0.07-0.98,0.1
		c-0.02,0.23-0.02,0.28-0.1,0.39c-0.15,0.26-0.42,0-0.59,0.49h-0.29c0.06-0.17,0.02-0.1,0.1-0.2c-0.08-0.34-0.14-0.27-0.29-0.49
		c-0.43,0.03-0.4,0.09-0.69,0.2c0.03,0.16,0.07,0.33,0.1,0.49c-0.28-0.24-0.33-0.16-0.59-0.39c-0.09,0.14-0.1,0.32-0.1,0.59
		c-0.13-0.13-0.26-0.26-0.39-0.39h-0.2c0.05,0.51,0.33,0.61,0.69,0.78v0.2c-0.47-0.11-0.92-0.29-1.27-0.2
		c-0.04,0.01-0.62,0.44-0.88,0.59c0.1,0.13,0.2,0.26,0.29,0.39c0.2-0.04,0.19-0.02,0.29-0.1h0.29c-0.12,0.26-0.19,0.2-0.29,0.49
		c-0.28-0.09-0.71-0.07-0.88-0.1c-0.03,0.03-0.07,0.07-0.1,0.1c0.03,0.35,0.01,0.33,0.2,0.49v0.2c-0.46-0.1-0.41-0.26-0.98-0.29
		c0.04,0.4-0.02,0.37,0.29,0.49v0.29c-0.31-0.15-0.21-0.26-0.39,0.1h-0.2c0.08-0.3,0.19-0.38,0.1-0.59v-0.39
		c-0.08,0.06-0.13,0.26-0.2,0.29c-0.06-0.06-0.13-0.13-0.2-0.2c-0.41-0.06-0.87,0.25-1.18,0.39c-0.04,0.26,0.13,0.57,0,0.88
		c-0.13,0.29-0.24-0.07-0.3,0.59c-0.63,0.05-0.61,0.32-0.98,0.59c0,0.29-0.01,0.54,0.1,0.69c0.12,0.22,0.17,0.2,0.39,0.29
		c-0.04,0.2-0.02,0.19-0.1,0.29v0.2c-0.19-0.11-0.41-0.48-0.49-0.69c-0.26,0.09-0.26,0.1-0.39,0.29c-0.14-0.22-0.13-0.6-0.29-0.79
		v-0.1c-0.27,0.23-0.49,0.59-0.59,0.98c-0.3-0.01-0.27-0.07-0.39,0c-0.34,0.13-0.36,0.36-0.59,0.59c0.02,0.45,0.01,0.42,0.3,0.59
		c-0.09,0.52-0.42,0.58-0.98,0.59c-0.17,0.39-0.39,0.62-0.69,0.88v0.49c0.46-0.25,0.84-0.74,1.28-0.98
		c0.53-0.29,0.83-0.04,1.27-0.39h0.2c-0.07,0.52-0.35,0.84-0.69,1.08c0.03,0.39,0.18,0.52,0.2,0.59c-0.03,0.57-0.12,0.32-0.29,0.49
		c-0.71,0.56-0.8,1.86-1.77,2.16c0.06,0.31,0.02,0.24,0.2,0.39v0.2h-0.39c-0.01,0.66-0.12,1.21-0.59,1.47
		c-0.02,0.88,0.12,0.58,0.49,0.88c0.09,0.15,0.02,0.69,0,0.98c-0.43,0.06-0.49,0.11-0.59,0.49c-0.31-0.06-0.29-0.09-0.49-0.2
		c-0.15,0.15-0.4,0.29-0.59,0.39c0.04,0.2,0.02,0.19,0.1,0.29v0.2c0.37-0.04,0.37-0.08,0.59-0.2c0.03,0.03,0.07,0.07,0.1,0.1
		c-0.18,0.43-0.61,0.57-0.88,0.88c-0.06,0.2-0.13,0.39-0.2,0.59c-0.36,0.49-0.88,1.14-1.08,1.77h-0.1
		c-0.24-0.36-0.62-0.47-0.88-0.79h-0.2c-0.1,0.28-0.13,0.75-0.29,0.98c-0.12,0.25-0.26,0.15-0.59,0.2c-0.07,0.35-0.16,0.46,0.1,0.69
		c-0.46,0.62-1.58,0.86-2.06,1.18c-0.33,0.22-0.35,0.67-0.59,0.98c-0.14,0.19-0.94,0.59-1.18,0.79c-0.17,0.28-0.29,0.85-0.59,1.27
		c0.01,0.44-0.04,0.46,0.29,0.59c-0.07,0.38-0.06,0.38-0.39,0.49c-0.07,2.15,0.83,3.9,0.69,5.98c0.12,0.24,0.49,0.26,0.59,0.49
		c0.03,0.36,0.07,0.72,0.1,1.08c0.2,0.53,1.15,1.16,1.77,1.28c0.18,0.88,0.83,0.49,1.57,0.59c1.56,0.22,2.73-2.05,3.63-2.94
		c0.03-0.02,1.05-0.37,1.28-0.39c0-0.27,0-0.45-0.1-0.59v-0.49h0.1c0.2,0.77,0.75,1.15,1.08,1.77c0.21,0.4,0.2,0.87,0.2,1.18
		c0.21,0.37,0.61,0.86,0.78,1.27c0.12,0.28,0.04,0.55,0.2,0.79c0.63,0.97,1.75,1.78,2.26,2.84h0.39v0.49
		c-0.23,0.02-0.28,0.02-0.39,0.1c-0.12,0.08,0.08,0.18,0.2,0.29c-0.11,0.08-0.16,0.08-0.39,0.1c0.06,0.22,0.07,0.26,0.19,0.39
		c-0.09,0.15-1.63,0.77-1.96,0.78c-0.06,0.33-0.11,0.41-0.29,0.59c-0.13,0.09-0.24,0.09-0.49,0.1c0.19,0.54,0.48,0.96,0.49,1.77
		c0.17-0.06,0.1-0.02,0.2-0.1c0.68,0,0.71,0.15,1.08,0.39c-0.09,0.24-0.11,0.15-0.2,0.39c-0.24-0.14-0.12,0.02-0.2-0.29
		c-0.28,0.11-0.61,0.18-0.98,0.2c-0.06,0.17-0.02,0.1-0.1,0.2c0.06,0.48,0.69,0.96,1.18,0.88c0.07-0.01,0.28-0.36,0.59-0.2
		c0.04,0.02,0.1,0.24,0.19,0.29c0.12-0.42,0.18-1.25,0.88-1.37c-0.13-0.24-0.33-0.27-0.49-0.49c-0.05-0.22,0.36-0.36,0.2-0.79
		c-0.09-0.24-0.22,0.08-0.29-0.49c0.4,0,0.51,0.01,0.69-0.2h0.1c-0.11-0.23-0.09-0.18-0.29-0.29v-0.59c0.03,0.03,0.06,0.07,0.1,0.1
		c0.24,0.11,0.28,0.25,0.49,0.39c-0.01,0.46-0.02,0.71-0.2,0.88v0.2c0.37-0.07,0.81,0.1,1.18,0c0.62-0.17,0.61-0.33,1.47-0.29
		c0.14-0.83-0.3-1.17,0.1-1.86h0.49c0.02-0.23,0.02-0.28,0.1-0.39c0.22-0.16,1.12-0.25,1.47,0c0.23-0.03,0.24-0.05,0.39-0.1
		c0.14-0.57,0.36-1.09,0.39-1.77c0.25,0.15,0.37,0.83,0.39,1.18h0.2c0.02-0.56,0.16-2.18,0.39-2.55v-0.98h-0.2
		c-0.1,0.52-0.2,1.05-0.29,1.57c-0.17,0.06-0.1,0.02-0.2,0.1c-0.17-0.31,0.15-0.48,0-0.88c-0.33-0.92,0.16-3.06-0.29-4.32
		c0.48-0.23,0.73-0.56,1.37-0.59c0.17-0.61,0.92-0.59,1.18-1.08c0.3-0.55-0.12-1.33,0.39-1.67c-0.04-0.23-1.74-2.18-1.96-2.26v-0.1
		c-0.31,0.16-0.12,0.06-0.1,0.39c-0.43-0.27-1.03-0.67-1.47-0.49c-0.51-0.58-0.68-1.58-0.98-2.35c0.25-0.06,0.05-0.03,0.29,0
		c0.03-0.7-0.11-0.48-0.29-0.98c0.1-0.48,0.11-0.86-0.1-1.28c0.33-0.29,1.68-2.85,1.67-3.04c0.2-0.32,0.37-0.1,0.69-0.29
		c0.23-0.15,0.04-0.36,0.2-0.59c0.14-0.19,0.54-0.16,0.69-0.39c0.38-0.61,0.11-1.35,0.69-1.77c-0.05-0.58-0.46-0.87-0.78-1.18
		c0.08-0.52,0.32-1.09,0.59-1.47c0.15-0.24,0.16-0.23,0.39-0.1c0.31-0.38,0.3-0.86,0.78-1.08c0.33-0.2,0.34-0.02,0.59,0.2
		c0.15,0.13,0.09-0.17,0.1-0.2c0.1,0.03,0.2,0.07,0.29,0.1c0.06-0.16,0.08-0.23,0.1-0.49c0.52,0.17,0.95,0.26,1.47,0.49
		c0.15,0.4,0.23,0.89,0.49,1.18c-0.06,0.17-0.02,0.1-0.1,0.2v0.1c-0.29-0.11-0.27-0.14-0.39-0.39h-0.39
		c0.1,0.28,0.17,0.35,0.39,0.49c-0.16,0.32-0.05,0.76-0.29,1.28c-0.22,0.48-0.55,0.75-0.59,1.47c-0.44,0.09-0.27,0.12-0.69,0.1
		c-0.12,0.65-0.22,1.27-0.59,1.67c-0.14,0.21-0.63,0.29-0.88,0.1h-0.2c0.08,0.6,0.49,0.74,0.2,1.08c0.09,0.47,0.33,1.28,0.59,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39v0.39c0.22,0.53,0.66,0.92,0.79,1.37c-0.03,0.13-0.07,0.26-0.1,0.39c0.06,0.03,0.13,0.07,0.2,0.1
		c0.28,0.81-0.32,1.27,0.2,1.77c-0.1,0.25-0.32,0.56-0.49,0.78c-0.13,0.08-0.52-0.04-0.88,0.1c-0.22,0.08-0.53,0.3-0.88,0.49
		c0.12,1.2,1.53,0.77,2.06,1.28h0.1c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c0.23,0.14,0.44,0.27,0.59,0.49c0.55-0.18,0.83-0.13,1.47-0.1
		c0.38-0.24,0.37-0.22,0.98-0.2c0.04-0.2,0.03-0.19,0.1-0.29c0.17-0.08,0.96,0.06,1.47-0.2c0.1-0.05,0.53-0.56,0.59-0.59
		c0.19-0.11,0.43,0.13,0.49,0.1c0.19-0.1,0.14-0.46,0.29-0.59c0.29-0.24,0.74-0.08,1.08-0.29c0.59-0.36,1.17-0.82,1.67-1.27
		c0.25,0.23,1.67-0.48,1.86-0.98c0.26,0.13,0.36,0.44,0.49,0.69c0.7,0.03,0.95,0.18,1.77,0c0.1,0.08,0.02,0.04,0.2,0.1
		c0.03,0.16,0.07,0.33,0.1,0.49c-0.3-0.01-0.52-0.03-0.59,0c-0.54,0.38,0.19,0.69-0.79,0.59c-0.07,0.24-0.07,0.25,0,0.49
		c-0.31-0.06-0.24-0.02-0.39-0.2h-0.2c0.06,0.5,0.36,0.66,0.2,0.98v0.2c-0.85,0.03-2.29,0.36-2.85,0c-0.48,0.01-0.58,0.09-0.88,0.2
		v0.29c-0.46-0.01-0.62,0.17-0.78,0.1c-0.21,0.08-0.2,0.1-0.2,0.1c-0.2,0.36-0.75,0.35-1.08,0.59c-0.58,0.41-0.36,0.99-0.98,1.28
		c0.22,0.31,0.3,0.12,0.49,0.29c0.18,0.15,0.16,0.49,0.3,0.69c0.36,0.51,0.95,0.72,1.57,0.98c0.07-0.07,0.13-0.13,0.2-0.2v-0.29h0.3
		c0.06,1.45,0.73,2.12,0.78,3.34c-0.28,0.27-0.43,0.58-0.78,0.79c-0.55,0.3-0.88-0.61-1.18-0.88c-0.45-0.42-1.13-0.22-1.27-0.98
		c-0.45,0.15-0.94,0.49-1.28,0.78c-0.35,0.5-0.54,3.4-0.2,4.12c0.36,0.75,1.28,2.24,0.49,3.24c-0.2,0.58-0.7,0.6-1.28,0.78
		c0.13,0.46,0.28,0.88-0.1,1.28c-0.21,0.58-0.71,0.48-1.18,0.78c-0.8-0.1-0.98-0.7-1.28-1.27c-0.97,0.02-3.04,0.9-3.43,1.37
		c-0.18,0.22-0.17,0.61-0.39,0.79c-0.9,0.69-2.34,0.61-3.04,1.47c-0.52-0.04-1.03-0.36-1.18-0.78c-0.3,0.1-0.37,0.21-0.69,0.29
		c-0.03-0.03-0.06-0.06-0.1-0.1c0.04-0.2,0.03-0.19,0.1-0.29c0.2-0.11,0.18-0.05,0.39,0v-0.1c0.09-0.27-0.2-0.38-0.1-0.79
		c-0.25-0.09-0.45-0.07-0.59-0.29c-0.48,0.09-0.68,0.44-0.88,0.79c-0.23-0.02-0.28-0.02-0.39-0.1c-0.65,0.13-0.54,0.7-0.98,0.98
		c-0.3,0.19-0.58,0-0.79,0.1c-0.5,0.24-0.34,0.59-1.27,0.59c0.08-0.49,0.28-1.02,0.49-1.37c-0.07-0.07-0.13-0.13-0.2-0.2h-0.39v0.39
		c-0.07,0.06-0.13,0.13-0.2,0.2c-0.59-0.01-0.97-0.2-1.18-0.29c-0.44-0.21-0.52-0.8-0.49-1.47c-0.26-0.13-0.33-0.24-0.69-0.29
		c0.03-0.13,0.07-0.26,0.1-0.39c0.54,0.15,0.42,0.51,1.08,0.59c-0.1,0.08-0.02,0.04-0.2,0.1c0.14,0.39,0.3,0.44,0.69,0.29
		c0.07,0.12,0.11,0.2,0.2,0.29c0.03,0.03,0.06,0.06,0.1,0.1c0.08-0.21,0.16-0.52,0.29-0.69c-0.02-0.88-0.34-1.21-0.59-1.86
		c-0.26-0.06-0.72-0.11-1.27-0.1c0.06-0.22,0.07-0.26,0.2-0.39c0.03-0.03,0.07-0.07,0.1-0.1v0.1h0.29
		c-0.14-0.38-0.02-0.76-0.29-1.08c0.21-0.13,0.43-0.02,0.59-0.1c1.35-0.49,0.09-1.54-0.49-1.86c-0.04-0.64,0.1-0.74,0.2-1.28
		c0.1-0.58-0.39-0.99-0.2-1.37v-0.2c-0.97,0.29-1.38,0.79-1.77,1.67c-0.52,0.19-1.06,0.05-1.57,0.39c-1.4,1.09-0.08,3.34-0.59,4.22
		c0.03,0.55,0.35,0.77,0.69,0.98c-0.01,1.09-0.47,2.37,0.3,3.24c-0.12,0.7-0.45,1.02-0.79,1.47c-1.31,0.09-2.46,0.72-3.24,0.98
		c-0.83,0.28-1.65,0.05-2.35,0.59c-1.13,0.76-0.74,3.06-1.67,4.02c-0.82,0.84-1.84,1.4-2.75,2.16c-0.25,0.21-0.27,0.63-0.59,0.78
		c-0.67,0.33-1.59,0.18-2.06,0.69c-0.38,0.61-0.02,1.79-0.39,2.36c-0.81,1.21-2.91,0.33-3.24,2.45c-0.52,0.09-1.8-0.06-2.26-0.39
		c-0.4-0.24-0.1-0.43-0.29-0.79c-0.14-0.1-0.97-0.15-1.37-0.2c0.07,0.58,0.61,2.35,0.29,2.84c-0.06,0.17-0.02,0.1-0.1,0.2
		c-0.55,0.35-1.49,0.01-1.86,0.39c-0.41-0.13-0.68-0.44-0.78-0.88c-0.8-0.04-3.07,0.3-3.92,0.79c0.02,0.71,0.26,0.91,0.59,1.28
		c-0.2,0.11-0.18,0.15-0.49,0.2c0.12,0.26,0.4,0.65,0.59,0.88c0.33,0.18,0.49-0.11,0.88,0c0.08,0.02,0.7,0.31,0.78,0.39
		c0.03,0.13,0.07,0.26,0.1,0.39c0.4,0.31,0.5-0.08,0.69,0.49c0.44-0.12,0.74-0.1,1.08,0.1c0.37,0.23,0.6,1.84,0.59,2.45
		c0.96,0.19,1.52,1.91,1.77,2.94c0.43,1.81,0.07,5.04-0.88,6.67c-0.13,0.36-0.26,0.72-0.39,1.08c-0.25,0.21-0.65,0.18-0.88,0.39
		c-0.83-0.04-1.07-0.44-1.67-0.59c-0.49-0.12-0.58,0.29-0.98,0.2c-0.23-0.05-0.48-0.42-0.69-0.49c-0.93-0.31-1.52,0.45-2.45,0.2
		c-0.58-0.16-1.32-0.6-1.86-0.79H142c-0.1-0.13-0.2-0.26-0.29-0.39c-0.29,0.07-0.59,0.13-0.88,0.2c-1.1-0.11-2.54-0.26-3.24-1.08
		c-0.66,0.06-1.14,0.1-1.67,0.49c-0.22,0.16-0.31,0.46-0.59,0.59c-0.35,0.16-0.45-0.14-0.88,0c-0.33,0.11-0.69,0.5-0.98,0.69
		c0,0.76,0.25,0.59,0.39,1.18c0.02,0.1-0.21,0.53-0.1,0.78h0.2c0.11,0.23-0.09,2.83-0.2,3.34c0.03,0.56,0.07,1.11,0.1,1.67
		c-0.11,0.32-0.48,0.85-0.59,1.18c-0.38,1.09-0.49,2.08-1.08,2.94c-0.16,0.24-0.66,0.44-0.78,0.69v0.69
		c-0.1,0.3-0.37,1.04-0.59,1.28c0.06,0.52,0.2,0.68,0.69,0.78v0.59c0.26,0.03,0.52,0.07,0.78,0.1c0,1.16-0.26,3.74-0.98,4.32
		c0.03,0.03,0.07,0.06,0.1,0.1c0.21,0.09,0.26-0.05,0.49-0.1c0.79-0.18,1.78,0.38,2.06,0.78c0.55-0.15,1.27-0.78,2.16-0.49
		c0.38,0.13,0.57,0.49,1.08,0.59c0.01,0.96,0.69,2.46,1.18,2.94c0.34,0.34,0.88,0.39,1.18,0.78c0.77-0.17,0.62-0.76,1.08-1.18
		c0.38-0.34,1.02,0.02,1.57-0.2c0.25-0.1,0.5-0.5,0.79-0.59c0.64-0.2,1.46,0.06,2.06,0.19c0.42-0.03,0.85-0.06,1.28-0.1
		c0.13,0.03,0.5,0.27,0.59,0.29c0.44,0.1,0.85-0.3,1.28-0.39c0.13,0.13,0.26,0.26,0.39,0.39h0.2c0.16-0.27,0.43-0.45,0.59-0.69
		c0.27-0.4,0.28-0.92,0.59-1.28c0.27-0.32,0.73-0.32,0.98-0.69c0.64,0.08,0.9,0.08,1.57,0c0.01-0.94,0.29-1.18,0.39-1.86h0.29v-0.29
		c0.56-0.56,1.16-1.06,1.86-1.47c-0.14-0.61-0.84-0.7-1.08-1.57c-0.03-0.33-0.07-0.65-0.1-0.98c0.14-0.6,1.79-2.92,2.26-3.24
		c0.37-0.26,0.67-0.17,0.88-0.59c0.1-0.19-0.03-0.48-0.1-0.79c0.42-0.27,1.05-0.62,1.57-0.79c0.57-0.19,1.2,0,1.67-0.29
		c0.16-0.23,0.33-0.46,0.49-0.69c0.31-0.21,0.66-0.19,0.98-0.39c0.39-0.25,0.77-0.64,1.18-0.88c-0.03-0.36-0.06-0.72-0.1-1.08
		c0.1-0.03,0.2-0.07,0.29-0.1c0.06-0.13-0.42-1.18-0.49-1.28c-0.02-1.88,1.14-1.95,2.16-2.75c0.84,0.11,1.22,0.49,1.86,0.69
		c0.16,0.15,0.71-0.47,1.28-0.2c0.03,0.1,0.06,0.2,0.1,0.29c0.33,0.07,0.65,0.13,0.98,0.2c0.03,0.1,0.07,0.2,0.1,0.29
		c0.61,0.28,1.45-0.34,2.06-0.39c0.21-0.94,1.26-1.73,2.06-2.06c0.46-0.19,0.91-0.12,1.28-0.39c0.25-0.19,0.12-0.5,0.29-0.78
		c0.22-0.38,0.8-0.72,1.08-1.08c1.49,0.06,2.38,0.87,3.53,1.37c0.05,0.18,0.21,1.21,0.29,1.37c0.11,0.22,0.56,0.43,0.68,0.69
		c0.17,0.35,0.01,0.89,0.1,1.08c0.18,0.1,0.2-0.1,0.39,0c0.18,0.09,0.06,0.35,0.19,0.49c0.16,0.03,0.33,0.06,0.49,0.1
		c0.21,0.14,0.35,0.44,0.59,0.59c-0.02,0.23-0.02,0.28-0.1,0.39c0.25,0.33,0.62-0.05,1.08,0.2c0.35,0.19,0.4,0.75,0.69,0.98
		c0.23,0.06,0.46,0.13,0.69,0.2c0.17,0.11,0.17,0.33,0.29,0.49c0.2,0.25,0.52,0.3,0.79,0.49c0.14,0.11,0.17,0.38,0.29,0.49
		c0.45,0.39,0.85,0.08,1.27,0.69c0.41-0.14,0.6-0.44,0.98-0.1c1.16-0.01,1.04,0.53,1.57,1.08c0.05,0.13,0.04,0.07,0.1,0.1
		c0.63-0.03,0.76,0,0.79,0.59c0.2-0.04,0.45-0.09,0.59-0.2c1.41,0.05,0.57,0.73,0.98,1.28c0.13,0.18,0.83,0.27,1.08,0.59
		c0.26-0.09,0.26-0.1,0.39-0.29c1.09,0.21,1.53,2.86,2.26,3.63c-0.06,0.57-0.41,0.67-0.79,0.88c0.12,0.38,0.29,0.69,0,1.08
		c-0.28,0.56-0.28-0.01-0.79,0.2c-0.25,0.1-0.61,0.62-0.88,0.69c-0.2,0.05-0.68-0.2-0.98,0c-0.03,0.1-0.06,0.2-0.1,0.29
		c-0.12,0.1-0.68,0.36-0.78,0.39c-0.54,0.17-0.69-0.29-1.28,0.2c-0.97-0.05-1.07-0.58-1.96-0.49c-0.07,0.16-0.13,0.33-0.2,0.49
		c-0.43,0.02-1.93,0.1-1.38,0.98c0.35,0.95,1.14,0.39,1.96,0.79c0.46,0.22,1.05,0.76,1.57,0.98c0.37,0.16,0.95-0.08,1.37,0.1
		c0.36,0.15,0.45,0.72,0.79,0.88c0.35,0.17,1.05,0,1.37,0.2c0.12-0.07,0.45-1.13,0.49-1.28c0.12-0.42-0.48-0.78-0.59-1.08
		c-0.27-0.75,0.66-2.26,0.88-2.65c0.03-0.03,0.07-0.06,0.1-0.1c0.1,0.14,0.16,0.49,0.2,0.69c0.28,0.01,0.14,0.07,0.29,0h0.69
		c0.03-0.06,0.07-0.13,0.1-0.2c0.13-0.36,0.26-0.72,0.39-1.08c0.2-0.16,0.39-0.33,0.59-0.49c0.2-0.5-0.22-0.87,0-1.28
		c0.23-0.61,0.86-0.33,1.18-0.79c0.05-0.11-0.04-0.76-0.2-0.98c-0.03-0.72-0.74-1-1.47-0.98c-0.08-0.18-0.14-0.26-0.2-0.49
		c-0.27-0.65,0.59-1.89,0.79-2.45c0.39,0.1,0.79,0.42,1.18,0.49c0.12,0.02,0.51-0.19,0.78-0.1c0.47,0.16,0.83,0.89,1.08,1.28
		c0.25,0.01,0.36,0.01,0.49,0.1h0.1c0.05-0.36-0.02-0.59,0.2-0.88c-0.11-1.32-3.06-2.56-4.22-2.94c-0.82-0.27-1.94-0.22-2.26-0.98
		c-0.07-0.15,0.03-0.58,0.2-0.78c-0.07-0.37-0.14-0.35-0.29-0.59c-2.54,0.08-2.46,0.65-4.22-0.88c-0.27-0.23-0.67-0.31-0.88-0.59
		c-0.59-0.78-1.02-2.98-1.76-3.43c-0.34-0.21-0.62-0.1-0.98-0.29c-0.5-0.27-0.51-0.65-1.37-0.69c-0.21-0.42-0.47-0.95-0.79-1.28
		c0.05-1.17,0.69-1.54-0.1-2.26c0.01-0.38,0.02-0.5,0.2-0.69c0.26-0.64,1.44-0.94,2.16-0.88c0.07,0.9,0.51,2.04,1.18,2.35v0.1
		c0.32-0.15,0.56-0.64,0.59-1.08c0.13,0.03,0.26,0.06,0.39,0.1c-0.07-0.39-0.18-0.4-0.2-0.88h0.29c0.11,0.24,0.23,0.35,0.1,0.59
		c-0.04,0.35,0.05,0.26-0.2,0.29c-0.03,0.47-0.08,0.9,0.2,1.27v0.2c0.12-0.07,0.2-0.11,0.29-0.2c0.07-0.11-0.13-0.58-0.2-0.88
		c0.07-0.07,0.13-0.13,0.2-0.2v-0.1c0.23,0.09,0.16,0.04,0.3,0.2c0.21,0.11,0.08,0.65,0.29,0.98c0.27,0.42,0.86,1.09,1.28,1.37v0.2
		c-0.21-0.09-0.26-0.15-0.39-0.29h-0.49c0.23,0.65,0.93,0.92,1.37,1.37c0.1-0.19,0.03-0.11,0-0.39c0.2,0.03,0.39,0.07,0.59,0.1
		c0.1,0.22,0.16,0.28,0.2,0.59c0.08-0.1,0.04-0.02,0.1-0.2c0.34,0.05,0.93,0.57,1.18,0.78c0.34-0.11,0.2,0.02,0.2-0.29
		c0.17-0.06,0.1-0.02,0.2-0.1h0.49c-0.09,0.26-0.1,0.26-0.3,0.39c0.1,0.1,0.2,0.2,0.3,0.29c-0.09,0.31,0.05,0.15-0.2,0.29
		c0.2,0.14,0.67,0.16,0.79,0.1c0.01-0.13,0.02-0.14-0.2-0.29c0.16-0.15,0.49-0.29,0.69-0.39c0.26,0.29,0.62,0.5,0.98,0.69
		c-0.25,0.29-1.06,0.5-1.57,0.49v0.2c0.62-0.01,1.15-0.36,1.57-0.29c0.41,0.06,1.02,0.45,1.37,0.59c0.91,0.35,1.87,0.59,2.65,1.08
		c0.34,0.21,0.49,0.66,0.78,0.88c0.24,0.18,0.75,0.27,0.98,0.39c-0.01,1.04,0.21,1.52,0.29,2.45c0.03,0.31-0.26,0.93-0.1,1.37
		c0.17,0.16,0.33,0.33,0.49,0.49c-0.21,0.23-0.04,0.1-0.29,0.1v0.2c0.48,0.44,1.37,0.66,1.76,1.18c0.03,0.2,0.07,0.39,0.1,0.59
		c0.31,0.52,1.51,1.56,2.16,1.77c0.09,0.46-0.13,1.15,0,1.37v0.2h0.2c0.06-0.06,0.13-0.13,0.2-0.2c0.07-0.1-0.01-0.22,0.1-0.39
		c0.03-0.03,0.07-0.07,0.1-0.1c0.06,0.16,0.08,0.23,0.1,0.49h0.29c0.14,0.32,0.3,0.53,0.39,0.88c0.42,0,0.83-0.02,1.08-0.2h0.39
		c-0.07,0.23-0.1,0.22-0.2,0.39h-0.49c-0.05,0.62-0.27,0.76-0.49,1.18c0.64,0.37,1.17,0.89,1.77,1.28c-0.09,1.32,0.05,1.5,0.79,1.96
		c0.32-0.19,0.1-0.54,0.2-0.69c0.1-0.1,0.2-0.2,0.3-0.29c0.35,0.59,0.71,0.79,0.98,1.57c0.17,0.06,0.1,0.02,0.2,0.1h0.1
		c-0.07-0.35-0.12-0.77,0.1-1.08v-0.2c0.54,0.06,1.05,0.56,1.37,0.88h0.1c-0.16-0.8-0.79-2.27-1.47-2.75v-0.49
		c0.23-0.03,0.24-0.05,0.39-0.1c0.14,0.19,0.33,0.4,0.49,0.59c0.01,0.02,0.53-0.47,0.79-0.59v-0.39c-0.53-0.09-0.22-0.13-0.69,0
		c-0.15-0.25-0.29-0.66-0.59-0.78c0.09-0.27,0.17-0.29,0.29-0.49c0.33,0.04,0.88-0.11,1.18,0c0.34,0.13,0.5,0.5,0.98,0.59
		c-0.05-0.58-0.47-1.13-0.29-1.47v-0.2c0.36,0.08,0.48,0.17,0.59,0.49c0.2-0.03,0.39-0.06,0.59-0.1c0.03-0.03,0.07-0.07,0.1-0.1
		v-0.39c-1.23,0-0.92-0.77-1.47-1.37c-0.76-0.4-1.4,0.31-1.96-0.79c-0.4,0.04-0.58,0.19-0.79,0.1c-0.11-0.06,0.33-0.39,0.49-0.49
		c-0.08-0.43-1.97-2.31-2.35-2.55v-1.27c0.66,0.08,1.36,0.55,1.96,0.1c0.47-0.03,0.57-0.11,0.69-0.49c0.17-0.31-0.07-0.64-0.39-0.78
		v-0.39c0.93,0.03,1.11-0.27,1.37-0.88c0.89,0.05,1.12-0.32,1.86-0.49c0.43-0.1,0.58,0.17,0.88,0c0.77-0.03,0.95,0.09,1.18,0.59
		c0.49-0.03,1-0.14,1.27-0.39h0.1c-0.15,0.37-0.47,0.86-0.79,1.08c0.09,0.83,0.15,2.42,0.39,2.85c0.17,0.1,1.21-0.47,1.47-0.69h0.3
		c-0.05,0.21-0.09,0.35-0.2,0.49c-0.15,0.24-0.04,0.16-0.39,0.2c0.17,0.45,0.59,0.36,0.78,0.69c0.09,0.16,0.02,0.38,0.1,0.49
		c0.19,0.09,0.07,0.04,0.29,0c0.03,0.03,0.07,0.06,0.1,0.1c-0.05,0.39-0.06,0.47-0.39,0.59c-0.02,0.35-0.01,0.46,0.29,0.69
		c-0.06,0.17-0.02,0.1-0.1,0.2c-0.12-0.1-0.39-0.11-0.59-0.39c-0.2,0.04-0.19,0.02-0.29,0.1c-0.08,0.15,0.08,0.43,0.29,0.59
		c-0.08,0.38,0,0.32-0.39,0.39c0.15,0.4,0.51,0.44,0.88,0.59c0.06-0.12,0.11-0.2,0.2-0.29c0.08-0.03,0.89,0.27,1.47,0.29
		c0.1,0.5,0.03,0.76-0.1,1.18c0.2,0.19,0.3,0.48,0.49,0.69c0.18,0.12,0.62,0.21,0.79,0.29v0.29c-0.2,0.04-0.19,0.02-0.29,0.1h-0.2
		c0.01,0.25,0.01,0.36,0.1,0.49c0.11,0.14,1.65-0.6,2.06-0.69c0.03,0.03,0.07,0.07,0.1,0.1c-0.1,0.1-0.2,0.2-0.29,0.29
		c0.02,0.33,0.05,0.68,0.2,0.88v0.2h0.1c0.29-0.49,0.45-0.81,0.98-1.08c0.43,0.14,0.61,0.61,0.98,0.1c0.39,0.2,0.38,0.65,0.69,0.88
		c0.28,0.22,0.98,0.22,1.38,0.29c0.46-0.42,1-0.98,1.67-0.88c0.03-0.03,0.07-0.06,0.1-0.1c-0.02-0.52,0.03-1.08-0.2-1.37
		c0.01-0.25,0.01-0.36,0.1-0.49c1.28-1.03,3.76,0.02,4.51,0.78c1.38-0.01,2.06-0.83,2.94-1.37v-0.29h0.29
		c0.35-1.01,0.5-1.39,0.98-2.16c0.62,0.06,1.48,0.16,2.06-0.1c0.18-0.47,0.38-0.92,0.49-1.37c0.56,0.06,0.43,0.18,0.69,0.49
		c-0.06,0.43-0.25,0.89-0.49,1.18c0.1,0.56,0.43,0.53,0.59,0.88v1.77c0.09,0.14,0.48,0.14,0.59,0.29c0.28,0.41,0.07,1.08,0.29,1.57
		c0.11,0.26,0.38,0.45,0.49,0.78c0.08,0.24-0.21,0.54-0.29,0.88c-0.07,0.28,0.07,0.66,0.1,0.78c0.12,0.58-0.09,1.65-0.2,2.16
		c-0.46,2.12,0.58,4.69-0.29,6.97c-0.2,0.52-0.77,0.76-1.08,1.18c-1.17,0.05-1.85,0.54-2.65,0.79c-0.8,0.24-1.51-0.58-2.36-0.29
		c-0.13,0.13-0.26,0.26-0.39,0.39c-0.29,0.03-0.59,0.06-0.88,0.1c-0.4,0.16-0.84,0.58-1.18,0.79c-0.23,0.07-0.46,0.13-0.69,0.2
		c-0.2,0.18-0.21,0.57-0.39,0.79c-0.64,0.76-1.31,1.61-1.86,2.45c-0.57,0.09-1.09-0.08-1.67-0.2c-0.69-0.14-1.11,0.54-1.77,0.29
		v-0.2c-0.44-0.15-0.69,0.42-1.28,0.2c-0.07-0.1-0.13-0.2-0.2-0.29c-0.25-0.09-1.57,0.08-1.67,0.1c-1.58,0.3-2.37-0.04-3.34,0.88
		c-0.82-0.06-0.8-0.78-1.28-1.18c-0.32-0.2-1.13,0.21-1.47,0.29c-0.69,0.18-0.96-0.08-1.47-0.2c-0.54-0.12-0.75,0.29-1.18,0.2
		c-0.01,0-0.28-0.18-0.29-0.2c-0.42-0.14-0.63-0.58-0.69-1.08c-0.74-0.01-1.33-0.17-1.86-0.29c-0.3-0.07-1.82,0.09-2.06,0.2
		c-0.2,0.23-0.39,0.46-0.59,0.69c-0.23,0.03-0.46,0.06-0.69,0.1c-0.36,0.14-0.96,0.62-1.28,0.88c-0.69,0.58-0.87,1.58-1.47,2.26
		c0,1.06,0.39,1.98,0.98,2.45c-0.02,2.25-1.13,2.29-2.06,3.43c-1.56-0.01-1.94-0.8-2.94-1.18c-0.74-0.28-1.39-0.1-2.16-0.39
		c-0.03-0.07-0.06-0.13-0.1-0.2c-1.47-0.52-3.26,0.35-4.51-0.29c-1.14-0.59-1.36-2.11-1.96-3.04c-0.69-0.03-1.37-0.07-2.06-0.1
		c-0.2-0.09-0.43-0.41-0.69-0.49c-0.67-0.21-1.66-0.23-2.26-0.39c-0.93-0.26-1.27,0.69-2.06,0.59c-0.86-0.11-1.58-0.29-2.16-0.69
		c-0.2-0.23-0.39-0.46-0.59-0.69h-0.79l-0.79-0.69c-0.22-0.28-0.01-0.62-0.2-0.98c-0.05-0.11-0.31-0.2-0.39-0.3
		c-0.52,0.04-0.57,0.19-0.88,0.39v0.39c-0.42-0.02-0.37-0.03-0.69,0c-0.11-0.12-0.25-0.21-0.39-0.29c-0.06-0.22-0.07-0.26-0.2-0.39
		c0-1.26,0.46-1.57,1.08-2.16c0.1-0.1,0.41-0.09,0.49-0.2c0.38-0.5,0.32-1.3,0.78-1.77c-0.08-0.41-0.28-0.34-0.39-0.59
		c-0.11-0.26,0.02-0.6-0.1-0.79c-0.34-0.77-1.3-0.62-1.47-1.67c-0.09-0.16-0.02-0.25,0-0.59c0.2-0.16,0.64-0.39,0.79-0.59
		c0.32-0.45,0.24-0.95,0.69-1.27c-0.05-0.21-0.09-0.36-0.2-0.49c-0.03-0.07-0.07-0.13-0.1-0.2c-0.39,0.13-1.05,0.66-1.28,0.98
		c-0.56-0.11-0.8-0.59-0.78-1.28c-1.17-0.3-2.14-0.42-3.14,0.29c-0.16,0.23-0.33,0.46-0.49,0.69c-0.73,0.4-1.68-0.04-2.26,0.49
		c-0.52-0.05-1.25-0.38-1.57-0.69c-0.65,0.12-0.17,0.13-0.49,0.49c-0.42,0.47-1.53-0.04-1.77-0.39c-0.5,0.03-0.5,0.11-0.79,0.29
		v0.29c-0.2,0.04-1.48,0.28-1.67,0.39c-0.13,0.16-0.26,0.33-0.39,0.49h-0.78c-0.03-0.13-0.07-0.26-0.1-0.39
		c-0.38-0.34-1.06-0.39-1.77-0.39h-1.86c-0.11,0.04-0.35,0.35-0.49,0.39c-0.56-0.03-1.11-0.07-1.67-0.1
		c-0.24,0.09-0.53,0.59-0.78,0.69c-0.31,0.12-0.57-0.09-0.79-0.1c-0.5-0.01-1.33,0.24-1.86,0.29c-0.24,0.02-0.53-0.19-0.88-0.1
		c-1.39,0.36-2.86,1.12-3.53,2.26c-0.45-0.01-0.5-0.03-0.69-0.29c-0.53,0.07-0.4,0.25-0.69,0.39c-0.52,0.25-1.09-0.05-1.57,0.29
		c-0.28,0.2-0.18,0.62-0.39,0.88c-0.04,0.06-1.93,0.9-2.06,0.88c-0.21-0.04-0.87-0.39-0.88-0.39c-0.39-0.07-0.46,0.35-0.88,0
		c-0.42-0.14-0.57-0.35-0.59-0.88c-0.4,0.15-0.69,0.53-1.18,0.59c-0.37,0.05-0.69-0.32-0.98-0.39c-1.62,1-4.01-0.49-3.92-2.45
		c-0.37,0.01-0.75,0.04-0.98,0.2c-1.2,0.04-0.87,0.88-1.27,1.67c-0.52,1.01-1.16,2.26-1.86,3.14c-0.79,0.98-2.28,1.66-3.63,2.06
		c-0.64,0.19-0.95,0.11-1.47,0.39c-0.5,0.27-0.89,1.11-1.37,1.47c-0.21,0.16-0.67,0.26-0.78,0.49c-0.29,0.57-0.07,1.21-0.39,1.67
		c-0.36,0.52-1.25,0.95-1.57,1.67c-0.08,0.18-0.36,2.5-0.29,2.65c0.07,0.16,0.42,0.38,0.49,0.59c0.21,0.66-0.26,1.44-0.49,1.77
		c-0.14,0.2-0.39,0.24-0.59,0.39c-0.29,0.36-0.59,0.72-0.88,1.08c-0.32,0.18-0.58,0.2-0.88,0.39c-0.16,0.2-0.33,0.39-0.49,0.59
		c-0.39,0.17-0.61-0.13-1.08,0.1c-0.65,0.32-1.13,1.16-1.77,1.47c-0.95,0.46-2.56-0.12-3.43,0.39c-0.79,0.4-1.33,1.69-1.77,2.45
		c-0.17,0.3-0.13,0.6-0.39,0.78c-0.62,0.44-1.71,0.37-2.26,0.88c-0.13,0.12-1.4,2.51-1.47,2.75c-0.2,0.6,0,1.12-0.29,1.57
		c-0.2,0.3-1.71,1.31-2.06,1.47c-0.2,0.03-0.39,0.07-0.59,0.1l-0.59,0.88v0.59c-0.21,0.47-1,0.82-1.27,1.27
		c-0.25,0.41-0.14,1.27-0.49,1.57h-0.39c-0.2,0.12-0.78,0.78-0.88,0.98c-0.4,0.77-0.12,1.96-0.59,2.65
		c0.04,0.69,0.28,0.79,0.69,1.08c0,0.6-0.14,0.85-0.49,1.08c0,1.46,0.17,2.38,0.88,3.34c0.29,0.4,0.65,0.22,0.88,0.98
		c0.32,1.06,0.39,3.43,0,4.22c-0.31,0.62-0.96,1.37-1.18,2.06l-0.2,0.88c0.02,0.14,0.21,0.69,0.1,0.98
		c-0.43,1.11-1.37,1.74-2.55,2.16c0.19,0.21,0.22,0.04,0.49,0.2c0.48,0.28,1.02,1.59,1.18,2.16c0.13,0.49-0.21,1.34-0.29,1.77
		c0.03,0.43,0.07,0.85,0.1,1.27c-0.16,0.74-0.56,1.95-0.2,2.65c0.2,0.37,0.67,0.72,0.88,1.08c0.37,0.62,0.42,1.17,0.98,1.57
		c0.36,0.26,0.9,0.24,1.28,0.49c0.7,0.46,1.32,1.34,1.77,2.06c1.65,0,1.08,0.67,1.86,1.27c0.37,0.29,0.8,0.41,1.18,0.69
		c0.37,0.27,0.55,0.77,0.88,1.08c0.17,0.15,0.46,0.1,0.59,0.29c0.32,0.46,0.02,1.32,0.29,1.86c0.06,0.13,0.64,0.8,0.78,0.98
		c0,0.3-0.03,0.5-0.1,0.69c-0.48-0.03-0.82-0.14-1.08-0.39h-0.39c0.36,0.6,1.42,1.27,2.06,1.57c0.25,0.12,0.49,0.04,0.69,0.2
		c0.24,0.19,0.42,0.63,0.69,0.79c0.74,0.43,1.68,0.42,2.35,0.88c0.12,0.08,0.89,0.68,0.98,0.78c0.11,0.13,0.08,0.38,0.2,0.49
		c0.31,0.29,0.83,0.34,1.18,0.59c0.2,0.26,0.39,0.52,0.59,0.79c0.36,0.25,0.7,0.28,0.98,0.59c0.1,0.16,0.2,0.33,0.29,0.49
		c0.3,0.21,0.72,0.15,0.98,0.39c1.21,1.12,2.5,2.13,3.92,3.04c0.68,0.43,1.4,0.5,2.16,0.88c0.37,0.19,0.81,0.56,1.28,0.69
		c0.72,0.19,1.46-0.27,1.96-0.39h1.18c0.88-0.2,2.77-0.5,4.12-0.2c0.59,0.13,2.21,0.25,2.65,0.2c0.13-0.02,0.59-0.19,0.88-0.1
		c0.18,0.06,0.48,0.33,0.69,0.39c0.85,0.25,1.28,0.09,1.96,0.29c0.46,0.14,3.19,1.11,3.34,1.08c0.3-0.06,0.92-0.31,1.18-0.39
		c0.39-0.03,0.79-0.06,1.18-0.1c0.07-0.02,0.32-0.28,0.39-0.29c0.58-0.11,1.08,0.17,1.86-0.1c1.6-0.55,1.98-0.93,4.02-0.69
		c0.29-0.29,0.59-0.59,0.88-0.88c0.76-0.3,1.57,0,2.45-0.2c1.14-0.26,4.51-0.44,5.79-0.2C166.27,267.28,166.89,267.32,167.51,267.35
		z M214.9,167.38c0.1,0.07,0.2,0.13,0.29,0.2v0.1h-0.39C214.83,167.57,214.87,167.48,214.9,167.38z M213.72,167.08v0.1
		c-0.38-0.08-0.35-0.1-0.49-0.39C213.44,166.88,213.56,166.97,213.72,167.08z M212.84,166.59h0.29v0.2
		c-0.48,0.02-0.43-0.06-0.98-0.1v-0.1c0.17-0.06,0.1-0.02,0.2-0.1C212.6,166.51,212.71,166.51,212.84,166.59z M212.05,164.93
		c0.23,0.07,0.22,0.1,0.39,0.2c-0.07,0.32-0.1,0.23-0.2,0.49c-0.23-0.07-0.22-0.1-0.39-0.2
		C211.91,165.1,211.94,165.13,212.05,164.93z M211.27,168.16c0.1,0.07,0.2,0.13,0.29,0.2c0,0,0.99,0.2,1.37,0.2
		c0.03,0.03,0.07,0.06,0.1,0.1c-0.21,0.34-0.4,0.16-0.49,0.69c-0.61-0.28-1.29-0.22-1.77-0.59c-0.08-0.1-0.04-0.02-0.1-0.2
		C210.92,168.45,211.14,168.4,211.27,168.16z M208.13,98.8c-0.36-0.03-0.57-0.16-0.69-0.1c-0.25,0.02-0.33,0.04-0.49,0.1
		c-0.04,0.38,0.03,0.52,0.2,0.88h-0.1c-0.17,0.13-0.17,0.01-0.29,0.1c-0.46-0.13-0.71-0.64-0.98-0.98c-0.25-0.32-0.7-0.31-0.98-0.59
		c-0.03-0.13-0.07-0.26-0.1-0.39c-0.23-0.31-0.71-0.51-1.08-0.69c0.01-0.82,0.14-0.85,0.2-1.57c0.33-0.07,0.65-0.13,0.98-0.2
		c0.29,0.07,0.52,0.5,0.79,0.59c0.56,0.2,0.96,0.03,1.37,0.29h0.1c0.38,0.32,0.61,0.73,1.08,0.98v0.39h-0.29
		c0.12,0.36,0.3,0.59,0.39,0.98C208.15,98.71,208.19,98.63,208.13,98.8z M211.56,95.37v0.1c-0.21-0.04-0.22-0.01-0.59,0
		c-0.02-0.23-0.02-0.28-0.1-0.39c-0.31-0.89-1.53-0.83-2.36-1.18c-0.15-0.42-0.11-0.58-0.49-0.78c0.16-0.26-0.02-0.1,0.29-0.1
		c-0.22-0.33-0.52-0.68-0.78-0.98v-0.1c0.54,0.18,1.27,0.83,1.57,1.27h0.1c-0.04-0.46-0.08-0.43-0.39-0.59
		c0.12-0.26,0.19-0.2,0.3-0.49c-0.54-0.5-0.84-0.71-1.87-0.69v-0.2c0.03-0.03,0.07-0.06,0.1-0.1c0.6-0.01,1.14,0.03,1.47,0.29
		c0.63,0.24,0.33,0.69,0.69,1.18c0.37,0.51,1.22,0.72,1.77,1.08c0.22,0.15,0.26,0.52,0.49,0.69
		C211.65,94.88,211.38,94.98,211.56,95.37z M232.26,135.2c0.41-0.54,0.08-1.09,0.98-1.18c0.07-0.3,0.16-0.44,0.2-0.78
		c0.2-0.04,0.19-0.02,0.29-0.1c0.58,0.11,0.41,0.31,0.69,0.69c0.19,0.26,0.53,0.3,0.79,0.49c0.54,0.41,0.57,1.04,0.59,1.77
		c0.01,0.37,0.15,0.53,0,0.79c-0.07,0.23-0.1,0.22-0.2,0.39c-0.97,0.03-2.28,0.61-2.75,0.29c-1.05,0.02-0.95-0.32-1.37-0.88
		C231.45,135.2,231.8,135.81,232.26,135.2z M219.8,159.04h0.2C219.91,159.21,219.97,159.15,219.8,159.04z M225,156.88
		c-1,0.47-0.52,0.69-0.98,1.27c-0.37,0.27-1.81,0.26-2.06,0.1h-0.19c-0.06,0.36-0.04,0.39,0,0.78c-0.68-0.05-1.23-0.41-1.47,0.2
		h-0.2c0.07-0.75,0.47-0.69,0.69-1.18c0.12-0.26,0.05-0.58,0.2-0.79c0.22-0.3,0.94-0.63,1.28-0.79v-0.1
		c0.42,0.03,0.85,0.06,1.27,0.1c0.17-0.04,0.37-0.34,0.59-0.29c0.21,0.04,0.49,0.33,0.88,0.39V156.88z M244.53,147.95
		c-0.55,0.23-0.89,1.01-1.47,1.28c-0.75,0.34-1.01-0.08-1.47,0c-0.1,0.1-0.2,0.2-0.29,0.29c-0.66,0.26-1.4-0.19-1.86-0.29
		c-0.12,0.15-0.25,0.35-0.39,0.49c-0.1,0.08-0.02,0.04-0.2,0.1c-0.43-0.35-0.7-0.48-0.98-0.98c-0.64,0.08-0.78,0.6-1.18,0.59
		c-0.53-0.03-0.51-0.17-0.88-0.29c-0.03-0.16-0.07-0.33-0.1-0.49c-0.16-0.03-0.33-0.07-0.49-0.1c-0.06,0.2-0.13,0.39-0.2,0.59
		c-0.63,0.16-1.38,0.5-1.96,0.69c-0.42,0.13-0.73,0-1.08,0.2c-0.23,0.13-0.3,0.51-0.49,0.69c-0.35,0.32-0.89,0.4-1.18,0.78
		c-0.23,0.31-0.27,0.67-0.49,0.98c-0.33,0.33-0.66,0.65-0.98,0.98c-0.16,0.31-0.01,0.47-0.2,0.69c-0.43,0.73-1.7,0.18-2.06,0.39
		c-1.38,0.82-3.58,1.04-5-0.1c-0.31-0.25-0.17-0.63-0.39-0.98c-0.11-0.17-1.22-1-1.47-1.08c0.07-0.3,0.13-0.58,0.29-0.78h0.2
		c0.21-0.43-0.54-1.49-0.1-2.16c0.15-0.38,0.36-0.32,0.69-0.29c0.05-0.15,0.07-0.16,0.1-0.39c0.16-0.4-0.45-1.91-0.59-2.45
		c-0.1-0.4,0.22-0.8,0.29-1.08c0.03-0.26,0.06-0.52,0.1-0.79c0.14-0.17,0.89-0.3,1.08-0.39c0-0.36,0.13-0.86,0.1-1.08
		c-0.08-0.55-0.71-1.05-0.49-1.77c0.07-0.23,0.38-0.48,0.49-0.69c0.35-0.69,0.4-1.5,0.39-2.55c0.38-0.19,0.83-0.3,1.08-0.49
		c0.51,0.16,0.86,0.53,1.08,0.98c0.55,0,1.52,0.1,1.86-0.1c0.37-0.04,0.36-0.08,0.59-0.2v-0.29c0.42,0.03,0.85,0.07,1.28,0.1
		c-0.28,0.88-0.89,1.66-1.47,2.26c0.09,0.32-0.05,0.15,0.2,0.29c0.32,0.12,0.33-0.35,0.88-0.2c0.27,0.08,0.46,0.36,0.69,0.29
		c0.18-0.05,0.1-0.03,0.2-0.1c0.41,0.08,0.41,0.21,0.69,0.39c0.02,0.71,0.13,0.85,0.1,1.47c0.3,0.06,0.67,0.13,0.88,0.29
		c0.41-0.15,0.83-0.6,0.98-0.98c0.08-0.2-0.13-0.42-0.1-0.49c0.1-0.23,0.45-0.45,0.59-0.69c0.2-0.03,0.39-0.07,0.59-0.1
		c0.05-0.54,0.28-0.8,0.49-1.18c0.31,0.06,0.24,0.02,0.39,0.2c0.63-0.08,0.78-0.44,1.37-0.59v-0.29c0.29-0.03,1.03-0.23,1.18-0.2
		c0.41,0.09,0.59,0.69,0.98,0.79c0.43,0.1,0.44-0.35,0.78-0.29c0.24,0.04,0.66,0.42,0.88,0.49c0.46,0.06,0.92,0.13,1.37,0.2
		c1.26,0.48,2.46,1.34,3.73,1.86c0.73,0.3,1.24-0.11,1.77,0c0.59,0.12,1.99,1.48,2.26,1.96c1.2,2.15-0.71,3-1.18,4.41
		C245.77,147.82,245.15,147.89,244.53,147.95z"/>
</g>
    <g id="Highlight">
	<radialGradient id="SVGID_12_" cx="30.8873" cy="186.9008" r="0.0988" gradientUnits="userSpaceOnUse">
		<stop offset="0" style="stop-color:#0CCFFF"/>
        <stop offset="0.1842" style="stop-color:#0BC2FB"/>
        <stop offset="0.5257" style="stop-color:#079FF0"/>
        <stop offset="0.6568" style="stop-color:#0690EB"/>
        <stop offset="0.9001" style="stop-color:#004B96"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_12_)"
              d="M30.95,187c-0.06-0.17-0.02-0.09-0.1-0.2v0.2H30.95z"/>

        <radialGradient id="SVGID_13_" cx="223.6629" cy="61.2979" r="114.1351" fx="224.2568" fy="57.4986"
                        gradientTransform="matrix(-0.5086 0.861 -2.2072 -1.3037 472.704 -51.3703)"
                        gradientUnits="userSpaceOnUse">
		<stop offset="0" style="stop-color:#9BFFFF"/>
            <stop offset="0.0442" style="stop-color:#95FDFF;stop-opacity:0.8535"/>
            <stop offset="0.1033" style="stop-color:#84F7FF;stop-opacity:0.6577"/>
            <stop offset="0.1707" style="stop-color:#68EEFF;stop-opacity:0.434"/>
            <stop offset="0.2439" style="stop-color:#42E2FF;stop-opacity:0.1916"/>
            <stop offset="0.3017" style="stop-color:#1ED6FF;stop-opacity:0"/>
            <stop offset="0.8163" style="stop-color:#1ED6FF;stop-opacity:0"/>
            <stop offset="0.8417" style="stop-color:#1ED6FF;stop-opacity:0"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_13_)" d="M189.59,32.68c0.37,0.41,1.2,0.37,1.57,0.79h0.78
		C191.52,32.83,190.67,32.64,189.59,32.68z M196.16,33.66v0.1c0.22,0.17,0.21,0.24,0.59,0.29c-0.13,0.16-0.06,0.11-0.29,0.2
		c0.46,0.33,0.86,0.03,1.57,0v-0.1c-0.57-0.19-0.94-0.55-1.67-0.59C196.26,33.64,196.33,33.6,196.16,33.66z M193.71,33.76
		c-0.59-0.15-1.2,0.1-1.57-0.1h-0.2c0.22,0.32,0.49,0.35,0.79,0.59h0.1c-0.03,0.07-0.06,0.13-0.1,0.2c0.03,0.03,0.07,0.07,0.1,0.1
		H194v0.49c0.27,0.03,0.69,0.07,0.88,0.2c0.61,0.02,1.67,0.13,1.96-0.2h0.1c-0.03-0.1-0.07-0.2-0.1-0.29
		c-0.65-0.23-1.45-0.16-2.06-0.49C194.52,34.1,194.07,33.85,193.71,33.76z M199.2,42.59c-0.91-0.13-1.78-0.26-2.45,0.29h-0.2
		c0.36,0.38,1.2,0.66,1.86,0.69c-0.36,0.24-1.75,0.1-2.16-0.2h-1.08v0.2c0.15,0.05,0.16,0.07,0.39,0.1
		c-0.82,0.56-1.81-0.21-2.35-0.1c-0.29,0.06-0.95,0.25-1.37,0.29c1.03,0.86,2.85,0.76,3.83,1.47h0.69c-0.05-0.15-0.07-0.16-0.1-0.39
		c-0.31-0.15-0.53-0.27-0.98-0.29v-0.1c0.67,0.01,0.9,0.31,1.37,0.49c0.46-0.19,1.41-0.37,1.76-0.39c0.01-0.43,0.08-0.21,0.2-0.69
		c0.79-0.02,1.36-0.18,1.86,0.2h0.29C200.52,43.67,199.56,43.08,199.2,42.59z M201.36,53.28c-0.46-0.01-0.76-0.01-0.98,0.2h-0.2
		c0.11,0.58,0.55,1.4,0.79,1.67c-0.03,0.03-0.07,0.07-0.1,0.1c-0.12,0-0.05,0.06-0.2-0.1h-0.2c0.1,0.19,0.13,0.27,0.29,0.39
		c-0.03,0.03-0.06,0.07-0.1,0.1c-0.13,0.09-0.24,0.09-0.49,0.1c0.1,0.08,0.02,0.04,0.2,0.1c-0.13,0.09-0.24,0.09-0.49,0.1
		c0.06,0.31,0.02,0.24,0.19,0.39c-0.14,0.24-0.12,0.18-0.49,0.2c0.1,0.29,0.2,0.59,0.3,0.88c0.1,0.03,0.19,0.07,0.29,0.1
		c0.25,0.55-0.25,0.59,0.2,0.98c-0.17,0.24-0.09,0.18-0.2,0.49c0.23,0.16,0.29,0.43,0.49,0.59c0.54,0.41,1.2,0.62,1.57,1.18
		c0.2,0.3,0.2,1.13,0.39,1.37c0.22,0.28,0.79,0.25,0.98,0.59c0.15,0.27,0.39,1.37,0.39,1.37c0.2,0.06,0.39,0.13,0.59,0.2
		c0.26,0.26,0.52,0.52,0.78,0.78c-0.14,0.24,0.02,0.11-0.29,0.2c0.26,1.43,2.38,1.05,3.24,1.67c0.24-0.14,0.11,0.02,0.2-0.29
		c0.13,0.13,0.26,0.26,0.39,0.39c0.59-0.03,1.18-0.07,1.77-0.1v-0.2c0.37-0.25,1.08-0.44,1.37-0.39c-0.09-0.45-0.29-0.48-0.49-0.79
		c-4.05,0.11-6.07-3.19-7.65-5.89c-0.18-0.12,0.01-0.05,0.1-0.2c-0.46-0.31-0.38-0.71-0.69-1.18c-0.23-0.2-0.46-0.39-0.69-0.59
		c-0.1-0.19-0.23-3.02-0.2-3.53C202.09,53.9,201.71,53.58,201.36,53.28z M212.84,55.34h0.1c-0.12-0.49-0.78-0.69-1.37-0.69
		c-0.09,0.33-0.05,0.31,0.1,0.59C212.15,55.23,212.62,55.21,212.84,55.34z M208.91,70.84c-0.12,0.22-0.23,0.38-0.29,0.69
		c0.16,0.15,0.16,0.31,0.29,0.49c0.24,0.33,0.69,0.5,0.98,0.78c0.48-0.04,0.75-0.17,1.08-0.1v-0.2c0.14-0.27-0.16-0.98-0.39-1.37
		C210.02,71.01,209.62,70.84,208.91,70.84z M194.79,106.75c-0.19,0.09-0.07,0.04-0.29,0v0.1c-0.1,0.12,0.02,0.12-0.1,0.29
		c0.12,0.52,0.41,0.38,0.69,0.69c0.07,0.12-0.02,0.27-0.1,0.49c0.07,0.03,0.13,0.06,0.2,0.1v0.1h0.1c0.04-0.22,0.08-0.71,0.2-0.88
		c0.12,0,0.05-0.06,0.2,0.1c0.07-0.11,0.06-0.09,0.1-0.29c0.48-0.12,0.9-0.76,1.08-1.18c-0.21-0.19-0.81-0.98-0.98-1.08
		c-0.28-0.16-0.48-0.02-0.69-0.2h-0.2c-0.11,0.51-0.08,0.9,0.29,1.18C195.17,106.46,195.01,106.58,194.79,106.75z M160.45,126.56
		c-0.33-0.05-1.9-1.12-2.55-0.39h-0.29c0.13-0.36,0.57-0.75,0.29-1.18c0.08-0.34,0.14-0.26,0.29-0.49c0.31,0.06,0.29,0.09,0.49,0.2
		l0.2-0.29h0.1c-0.21-0.59-0.7-0.59-1.08-0.98c-0.27-0.28-0.18-0.62-0.39-0.98c-0.15-0.25-0.47-0.11-0.69-0.29
		c-0.17-0.15-0.16-0.49-0.29-0.69c-0.26-0.37-1.1-0.83-1.47-1.08c0-1.97-0.66-3.54-2.16-4.02c0.09-1.26,0.68-1.42,1.18-2.16
		c0.4-0.59,0.41-1.36,0.98-1.77c0-0.37,0.01-0.64-0.2-0.78c-0.41-0.29-2.89-0.14-3.24,0c-0.03-0.03-0.07-0.07-0.1-0.1
		c0.05-0.29,0.14-0.67,0.29-0.88c0.18-0.47,0.94-0.85,1.37-1.08c0.08-0.4,0.13-0.66,0.1-0.98c0.26-0.13,0.34-0.26,0.69-0.49
		c-0.02-0.23-0.02-0.28-0.1-0.39v-0.29c0.13,0.1,0.26,0.2,0.39,0.29c0.12-0.42-0.2-0.33,0.2-0.59v-0.1
		c-0.16,0.03-0.33,0.06-0.49,0.1c-0.05-0.15-0.07-0.16-0.1-0.39h-0.2c-0.1,0.34-0.04,0.55-0.69,0.59c-0.07,0.26-0.13,0.52-0.2,0.78
		c0.13,0.13,0.26,0.26,0.39,0.39c-0.55,0.63-2.37,0.39-3.04,0.1c-0.37,0.58-0.72,1.34-1.18,1.86c-0.2,0.1-0.39,0.2-0.59,0.29
		c-0.12,0.16-0.09,0.53-0.2,0.69c-0.09,0.06-0.2,0.03-0.39,0.1c-0.08-0.18-0.14-0.26-0.2-0.49c-0.38,0.13-0.68,0.38-0.98,0.59
		c0.08,0.65,0.74,1.26,1.18,1.57c-0.14,0.59-0.51,0.84-0.98,1.08v0.79h-0.29v0.2h1.08c-0.02,0.23-0.02,0.28-0.1,0.39
		c-0.24,0.54-0.82,0.66-1.37,0.88c-0.06,0.17-0.02,0.1-0.1,0.2c0.09,0.36,0.18,0.27,0.29,0.59c0.17-0.06,0.1-0.02,0.2-0.1
		c0.53-0.07,0.5-0.31,0.79-0.59c0.1,0.03,0.04-0.03,0.1,0.1c0.03,0.07-0.09,1-0.29,1.18v0.49c0.16-0.03,0.33-0.07,0.49-0.1
		c0.04-0.28,0.06-0.42,0.2-0.59v-0.1c0.32,0.14,0.22,0.25,0.69,0.29v-0.88h0.2c0.14,0.26,0.28,0.41,0.49,0.59
		c-0.17,0.83-0.87,1.13-1.18,1.77c-0.1,0.2,0.07,0.61,0.29,0.78c0.06,0.17,0.02,0.1,0.1,0.2c0.05-0.12,0.12-0.3,0.2-0.39
		c0.1-0.08,0.02-0.04,0.2-0.1c0.16,0.16,0.33,0.33,0.49,0.49c0.18,0.23,0.14-0.16,0.29-0.2c0.4-0.09,0.45,0.46,1.08-0.2h0.2
		c-0.04,0.41-0.05,0.42-0.3,0.59c0.04,0.78,0.34,1.03,0.49,1.57c0.23,0.83,0.1,1.55,0,2.16c-0.03,0.03-0.07,0.07-0.1,0.1
		c-1.07,0.23-1.49-0.01-2.45-0.39c-0.16,0.16-0.33,0.33-0.49,0.49c0.11,0.19,0.41,0.38,0.59,0.49c-0.05,0.54-0.29,0.53-0.69,0.69
		c-0.06,0.17-0.02,0.09-0.1,0.2v0.29c0.28,0.03,0.43,0.08,0.69-0.1c0.2,0.04,0.19,0.02,0.29,0.1c0.26,0.32,0.19,0.89-0.1,1.18
		c-0.32,0.62-1.53,0.87-2.26,0.78c-0.16,0.23-0.33,0.46-0.49,0.69c0.14,0.24-0.02,0.12,0.29,0.2v0.39c0.34,0.08,0.27,0.14,0.49,0.29
		c0.23,0.14,0.96-0.12,1.28-0.2c0.16,0.34,0.29,0.59,0.59,0.78c-0.03,0.2-0.06,0.39-0.1,0.59c-0.44,0.23-0.48,0.48-1.18,0.49
		c-0.32,1.48-1.36,2.05-2.55,2.65v0.39c0.56-0.05,0.65-0.14,0.88,0.29c0.62-0.14,0.75-0.77,1.37-0.98c0.47-0.27,1.28,0.3,1.86,0.49
		c0.31-0.52,1.92-2.56,2.45-0.88c0.58,0.09,1.26,0.16,1.67-0.3c0.62,0.06,0.5,0.28,0.88,0.49c0.29,0.11,0.51-0.2,0.59-0.59
		c0.53-0.03,1.9-0.14,2.16,0.29c0.4,0,0.82-0.01,1.08-0.1v-0.39c1.19-0.03,1.4-0.77,2.26-1.08c0.16-0.61,0.38-1.48,0.39-2.16h-0.29
		C160.13,128.41,160.6,127.71,160.45,126.56z M144.95,113.32h0.1c0.16-0.24,0.42-0.29,0.59-0.49c0.33-0.39,0.3-1.46,0.69-1.86
		c0.78-0.82,1.51-0.47,1.86-2.06c-0.1-0.03-0.2-0.07-0.29-0.1c-0.34,0.35-1.03,0.56-1.47,0.79c-0.07,0.41-0.01,0.75-0.2,0.98
		c-0.16,0.3-0.55,0.46-0.88,0.59c0.13,0.52,0.11,1.45-0.39,1.86V113.32z M190.67,108.91c-1.3,0.43-0.93,0.96-1.67,1.57
		c0.16,0.66,0.48,1.12,0.49,1.86h0.29c0.17-0.49,0.28-1.22,0.69-1.47c-0.31-0.91-0.2-1.01,0.29-1.86
		C190.73,108.97,190.7,108.94,190.67,108.91z M137.49,129.12c1.51,0.09,4.23-0.57,4.91-1.57c0.7,0.04,1.32,0.04,1.86,0.2
		c0.21-0.26,0.19-0.56,0.39-0.88c0.49-0.49,0.98-0.98,1.47-1.47c-0.07-0.37-0.17-0.41-0.39-0.59c-0.05-2.51,0.15-2.79,1.67-3.73
		c-0.04-1.31-0.71-1.82-0.98-2.94c-0.43,0.05-0.82,0.16-1.18,0.29c-0.23-0.23-0.46-0.46-0.69-0.69c-0.24,0.08-0.24,0.23-0.39,0.29
		c-0.55,0.24-1.19-0.07-1.67,0.2c-0.62,0.35-0.31,0.85-1.08,1.18c0.08,0.41,0.16,0.36,0.49,0.49c-0.1,0.49-0.35,0.46-0.59,0.79
		c-0.63,0.01-1.12-0.03-1.47-0.29c-0.68-0.01-0.91,0.07-1.28,0.29c-0.02,0.38-0.11,0.58,0,0.79c0.01,0.64-0.11,0.76-0.49,0.98
		c0.02,0.79,0.44,1.47,0.88,1.86c-0.03,1.06-0.55,0.64-0.98,1.18c-0.23,0.29-0.08,0.67-0.39,0.88c-0.26,0.18-0.66,0.11-0.88,0.29
		c-0.07,0.11-0.06,0.09-0.1,0.29c0.2,0.04,0.19,0.02,0.29,0.1c0.03,0.03,0.07,0.06,0.1,0.1h-0.1c-0.11,0.23-0.19,0.27-0.39,0.39
		c0.08,0.47,0.25,0.52,0.2,0.88C137.17,128.61,137.3,128.65,137.49,129.12z M148.97,121.07c-0.17,0.33-0.41,0.67-0.69,0.88v0.2
		c0.59-0.02,0.64-0.17,0.98-0.39C149.27,121.3,149.31,121.21,148.97,121.07z M194,154.72h-0.2
		C193.96,154.84,193.88,154.88,194,154.72z M175.85,159.63c0.07,0.77,0.26,2.06,0.79,2.35c-0.07,0.1-0.13,0.2-0.2,0.29
		c0.35,0.28,0.73,0.61,1.28,0.69c0.03-0.5,0.23-0.66,0.29-0.98c-0.03-0.29-0.07-0.59-0.1-0.88c0.05-0.15,0.36-0.44,0.39-0.59
		c0.08-0.39-0.35-2.41-0.49-2.85c-0.03-0.03-0.07-0.07-0.1-0.1c-0.21,0.28-0.16,0.55-0.1,0.88c-0.45,0.16-0.91,0.23-1.27,0.49
		C176.12,159.1,176.06,159.45,175.85,159.63z M220.49,163.85c0.03-0.03,0.07-0.07,0.1-0.1c-0.3-0.22-0.61-0.53-0.79-0.88h-0.39
		c-0.21,0.26-0.49,0.51-0.79,0.69c0.03,0.1,0.07,0.2,0.1,0.29c0.49,0.1,0.98,0.2,1.47,0.29
		C220.29,164.04,220.39,163.94,220.49,163.85z M175.17,165.71h0.29c0.13,0.26,0.4,0.65,0.49,0.88c0.2,0.54-0.29,0.81-0.2,1.18
		c0.02,0.07,0.29,0.18,0.29,0.2c0.1,0.21-0.04,0.98-0.1,1.08c-0.03,1.15,0.05,1.61,0.69,2.06c0.12,0.1,0.12-0.02,0.29,0.1
		c0.54-0.09,0.7-0.33,0.69-0.98c0.42-0.11,0.58-0.27,0.88,0.1h0.39c0.21-1.06,0.16-2.53,0-3.53c-0.1-0.59,0.57-0.67,0.39-1.27
		c-0.11-0.37-0.37-0.54-0.39-1.18h-0.29v-0.39c-0.17-0.16-0.29-0.36-0.39-0.59c-1.17,0.05-0.97,0.69-1.57,1.18
		c-0.42,0.34-0.98,0.21-1.47,0.29C175.1,165.2,175.13,165.27,175.17,165.71z M219.71,166.79c0.03,0.03,0.07,0.07,0.1,0.1
		c0.07-0.07,0.13-0.13,0.2-0.2c0.03-0.45-0.04-0.57-0.1-1.08c-0.03-0.03-0.07-0.06-0.1-0.1h-0.39c-0.1,0.08-0.03,0.04-0.2,0.1
		c0.09,0.42,0.28,0.25,0.39,0.49C219.81,166.54,219.38,166.47,219.71,166.79z M165.45,168.36c0.11-0.09,0.01-0.25-0.1-0.39
		c-0.19-0.25-0.33-0.29-0.78-0.29c-0.11,0.07-0.09,0.06-0.29,0.1c0.06,0.17,0.02,0.1,0.1,0.2
		C164.43,168.1,165.23,168.45,165.45,168.36z M161.33,169.34c0.35,0.62,0.52,0.47,0.88,0.88c0.6-0.1,0.95-0.73,1.08-1.27
		c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.28-0.42-0.49-0.04-0.78-0.69h-0.49c-0.43,0.41-1.02,0.59-1.37,1.08
		c-0.03,0.03-0.06,0.07-0.1,0.1c0.23,0.09,0.16,0.04,0.29,0.2C161.07,169.48,161.15,169.42,161.33,169.34z M237.27,171.4
		c-0.26,0.23-0.21,0.45-0.59,0.59c0.08,0.44,0.27,0.5,0.39,0.88c0.65,0.07,1.06-0.05,1.47,0.1c0.26-0.66,0.92-0.74,1.18-1.28
		c0.12-0.24-0.1-0.54,0.1-0.69c0.02-0.01,0.65-0.19,0.69-0.2c-0.11-0.29-0.25-0.35-0.49-0.49c0.09-0.68,0.94-1.37,0.69-1.86
		c-0.58,0.95-1.55,2.04-2.84,1.96c-0.06,0.22,0.05,0.54-0.1,0.79C237.66,171.27,237.37,171.33,237.27,171.4z M206.85,168.85
		c-0.07,0.07-0.13,0.13-0.2,0.2v0.29h-0.29v0.59c0.27,0.03,0.69,0.07,0.88,0.2h0.2c-0.07-0.63-0.25-0.76-0.39-1.28H206.85z
		 M207.64,171.3c0.32-0.09,0.15,0.05,0.3-0.2h0.1c-0.14-0.29-0.44-0.42-0.79-0.49C207.3,171.12,207.39,171.04,207.64,171.3z
		 M158.59,171.11c-0.07-0.36,0.01-0.27-0.29-0.39c-0.16,0.17-0.4,0.36-0.59,0.49v0.29c0.17,0.06,0.1,0.02,0.2,0.1
		C158.29,171.5,158.3,171.3,158.59,171.11z M225.69,172.77c0.41-0.34,0.58-1.13,0.69-1.77c-0.1-0.03-0.2-0.07-0.29-0.1
		c-0.37,0.41-1.04,1.11-0.49,1.86c0.03,0.03,0.07,0.07,0.1,0.1V172.77z M217.84,176.8c-0.21-0.22-0.37-0.24-0.49-0.59
		c-0.59,0.14-1.04,0.5-1.47,0.79c0.01,0.28,0.04,0.42,0.1,0.59c0.6-0.06,1.9-0.47,2.35-0.2c0.55-0.02,0.67-0.04,0.79,0.39
		c0.56-0.04,2.83-0.82,3.24-1.08c0.1-0.03,0.2-0.07,0.29-0.1c0-0.29,0-0.54-0.1-0.69c-0.21,0.04-0.72,0.51-1.18,0.59
		c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c-0.43,0.05-0.43,0.2-0.69,0.29c-0.56-0.09-1.57-0.19-2.16,0.1
		C218.22,176.51,218.17,176.7,217.84,176.8z M167.51,267.35c1.85,0.68,2.33,3.16,3.83,4.22c1.65,1.17,4.88-0.04,6.77-0.49
		c0.86-0.21,2.37,0.11,2.75-0.1h0.39c0.23,0.12,0.28,0.71,0.49,0.88c0.23,0.07,0.46,0.13,0.69,0.2v0.2c0.45-0.04,0.78-0.1,0.98-0.39
		c0.2,0.04,0.19,0.02,0.29,0.1c0.06,0.15,0.12,0.04,0,0.2c-0.01,0.75,0.35,1.03,0.88,1.18c0.02,0.82-0.22,1.21-0.39,1.96
		c-0.07,0.3,0.12,0.73,0.1,0.88c-0.01,0.11-1.21,1.36-1.37,1.47c0.12,0.32,0.26,0.3,0.39,0.59c0.15,0.39-0.35,0.37-0.49,0.69
		c-0.34,0.77,0.27,1.16-0.2,1.67c-0.17,0.52-0.96,1.02-1.57,0.79c-0.03,0.03-0.06,0.07-0.1,0.1c0.15,0.94,1.09,1.15,1.57,1.76
		c0.12,0.16-0.01,0.38,0.1,0.59c0.1,0.18,1.81,1.27,2.06,1.37c0.33,0.07,0.66,0.13,0.98,0.2c0.7,0.31,1.28,0.88,1.86,1.28
		c0.74,0.5,1.72,0.5,2.45,0.98c0.96,0.64,0.8,1.59,1.77,2.06c-0.06,0.17-0.02,0.09-0.1,0.2c0.07,0.65,2.3,2.7,2.84,3.04
		c-0.03,0.72-0.71,0.93-1.18,1.18c0.07,0.1,0.13,0.2,0.2,0.29h0.29c0.06,0.54,0.29,0.56,0.29,0.88c0.46,0.2,0.64,0.51,1.18,0.59
		c0.44,2.58-1.88,2.6-3.43,3.73c-0.19,0.14-0.15,0.4-0.29,0.59c-0.12,0.15-0.47,0.15-0.59,0.29c-0.23,0.28,0.1,0.48-0.1,0.79
		c-0.24,0.38-1.3,1.16-1.77,1.37c0.44,0.87-0.07,0.46-0.2,1.08c0.03,0.29,0.07,0.59,0.1,0.88c0.57,0.28,1.31,0.4,1.96,0.69
		c1.31,0.57,2.27,1.51,4.02,1.67c0.03,0.03,0.07,0.07,0.1,0.1c-0.11,0.22-0.14,0.15-0.29,0.29c-0.07,0.17,0.19,0.21-0.1,0.49
		c0.14,0.28,0.35,0.33,0.69,0.39c-0.1,0.17-0.13,0.16-0.2,0.39c0.15,0.13,0.21,0.18,0.29,0.39c0.49,0.06,0.99,0.13,1.48,0.21
		c23.26-4.47,44.5-14.62,62.21-28.95c0.36-1.63,0.68-3.28,0.76-3.54c0.07-0.23-0.12-0.27-0.1-0.39c0.04-0.25,2.07-4.05,2.26-4.22
		c-0.02-0.25-0.04-0.33-0.1-0.49c-0.49,0.05-0.56,0.17-1.08,0.2c0-0.65-0.06-1.09,0-1.37c0.2-0.94,1.11-1.53,1.18-2.84
		c-0.49-0.01-0.57-0.05-0.78-0.29c-0.37-0.48,0.41-1.84,0.78-2.55c0.28-0.52,0.86-0.97,1.18-1.47c0.44-0.7,0.61-1.47,1.08-2.16
		c0.68-1.01,1.52-2.06,2.26-3.04c0.36-0.48,0.93-0.88,1.27-1.37c1.98-2.82,3.52-5.83,5.5-8.63c1.05-1.49,2.14-3.04,3.24-4.51
		c0.56-0.75,1.36-1.45,1.86-2.26c2.19-3.49,3.93-7.26,5.59-11.28c0.45-1.08,0.5-2.31,0.88-3.43c0.81-2.37,1.76-4.86,2.45-7.36v-1.96
		c0.11-0.38,0.63-0.71,0.49-1.28c-0.17-0.68-0.54-1.88-0.1-2.55v-0.39c-1.3,0.3-0.86,0.7-1.37,1.67c-0.32,0.61-1.01,1.03-1.37,1.57
		c-0.07,0.2-0.13,0.39-0.2,0.59c-0.33,0.49-0.85,0.75-1.37,1.08c-0.51,0.32-0.66,1.15-1.08,1.57c-0.29,0.29-0.6,0.27-0.98,0.49
		c-0.62,0.35-1.19,2.16-1.77,2.75c-0.31,0.31-1.05,0.2-1.37,0.49c-0.41,0.37-0.99,1.56-1.37,2.06c-0.29,0.38-0.85,0.62-1.18,0.98
		c-0.86-0.02-1.1-0.3-1.67-0.49c-0.04-0.21-0.09-0.62-0.2-0.79c-0.25-0.1-1.08,0.28-1.28,0.59h-0.2c0.11-0.58,0.77-1.26,1.18-1.57
		c0-1.25-0.52-1.25-0.88-2.06c-0.62,0.04-0.91,0.07-1.38,0.2c-0.1-0.23-0.19-0.46-0.29-0.69c-0.94-0.32-1.91-0.16-2.26-1.18
		c-0.75-0.06-0.79,0.06-1.47-0.2c-0.13,0.03-0.55,0.13-0.69,0.1c-0.74-0.18-1.8-0.65-2.65-0.78c-0.29-1.56-1.41-4.39-2.55-5
		c-0.35-0.19-0.68-0.08-0.98-0.29c-0.42-0.29-0.22-0.58-0.78-0.79c-0.24-0.17-0.67-0.2-1.08-0.2c-0.06-0.63-0.35-0.66-0.49-1.08
		c-0.33-1-0.05-2.06-0.49-2.75v-1.27c-0.13-0.31-0.44-0.19-0.69-0.39c-0.2-0.16-0.73-1.45-0.79-1.86c-0.83-0.33-1.43-0.44-1.86-1.18
		c-0.41,0.08-0.47,0.23-0.79,0.39c-0.14-0.19-0.38-0.36-0.59-0.49c0.03-0.2,0.07-0.39,0.1-0.59c-0.43-0.18-0.47-0.34-0.79-0.59
		c0-0.46-0.04-1.03-0.1-1.18c-0.06-1.1-0.74-0.82-1.27-1.37c-0.16-0.17-0.16-0.49-0.3-0.69c-0.32-0.45-0.86-0.84-1.18-1.27
		c-0.75-1.04-1.79-1.88-2.45-2.94c-0.07-0.3-0.13-0.59-0.2-0.88c-0.07-0.15-0.39-0.27-0.49-0.39c-0.03-0.2-0.07-0.39-0.1-0.59
		c-0.16-0.1-0.33-0.2-0.49-0.29c-0.25-0.36-0.24-0.84-0.49-1.18c-0.39-0.53-1.65-0.96-2.16-1.47c-0.6-0.6-1.01-1.63-1.47-2.35h-0.3
		v-0.49c0.16,0.05,2.04,1.19,2.16,1.37c0.2,0.31,0.06,0.88,0.29,1.18c0.22,0.29,0.75,0.3,1.08,0.49c0.12,0.07,0.1,0.31,0.2,0.39
		c0.4,0.36,1.23,0.6,1.77,0.59c0.05-0.43,0.36-0.89,0.2-1.47c-0.06-0.19-0.28-0.37-0.2-0.78c0.05-0.23,0.24-0.8,0.2-1.08
		c-0.13-0.86-0.38-1.84,0.1-2.45v-0.1c0.42,0.54,0.43,3.86,0.2,4.51c0.06,0.03,0.13,0.07,0.2,0.1c0.03,0.03,0.07,0.07,0.1,0.1
		c0.12-0.22,0.26-0.3,0.39-0.49c0.7,0.08,1.41,0.27,1.77,0.69c0.19,0.22,0.16,0.52,0.39,0.69c0.14,0.1,0.4,0.05,0.49,0.2
		c0.11,0.17-0.05,0.37,0.1,0.49c0.2,0.07,0.39,0.13,0.59,0.2c0.49,0.35,1.36,1.25,1.57,1.86c0.2,0.03,0.39,0.07,0.59,0.1
		c0,0.27,0,0.45,0.1,0.59c0.19,0.32,0.3,0.09,0.59,0.29v0.1c0.24,0.24,0.59,0.62,0.79,0.88h0.29c0.05,0.32,0.17,0.62,0,0.88
		c0.06,0.24,0.95,1.19,1.18,1.28c0.38,0.17,1.56-0.06,2.16,0.39c0.27,0.21,2.17,2.66,2.26,2.94c-0.03,0.56-0.07,1.11-0.1,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39c0.26,0.39,0.08,0.78,0.3,1.27c0.31,0.71,1.25,1.12,1.67,1.77c4.21,0,3.18,3.81,6.67,4.51
		c0.06,0.27,0.24,0.5,0.29,0.69c0.18,0.61-0.29,1.11,0,1.67c0.13,0.1,0.26,0.2,0.39,0.29c0.06,0.29,0.13,0.59,0.2,0.88
		c0.1,0.07,0.2,0.13,0.29,0.2c0.19,0.48-0.25,0.86,0,1.28c0.2,0.53,0.43,0.21,0.79,0.49c0.28,0.34,0.18,0.84,0.39,1.28
		c0.18,0.36,0.65,0.83,0.79,1.17c0.2,0.53-0.23,0.84,0,1.38c0.19,0.45,0.7,0.5,0.49,1.18c0.44-0.1,0.23-0.25,0.49-0.39
		c0.26-0.03,0.52-0.07,0.78-0.1c0.49-0.29,0.69-0.88,1.08-1.28c0.25-0.25,0.68-0.29,0.88-0.59c0.55-0.84,0.79-2.16,1.47-2.84
		c0.49-0.5,1.24-0.71,1.67-1.28c0.69-0.92,1.19-1.87,1.86-2.85c0.43-0.36,0.85-0.72,1.28-1.08c0.68-0.99,0.79-2.39,1.47-3.34
		c0.33-0.33,0.66-0.65,0.98-0.98c0.25-0.35,0.24-0.79,0.49-1.18c0.28-0.42,0.89-0.75,1.18-1.18c0.34-0.5,0.4-1.03,0.69-1.57
		c0.15-0.3,0.6-0.73,0.69-1.08c0.06-0.25-0.17-0.62-0.2-0.79c-0.09-0.47,0.12-1.31,0.29-1.67c0.41-0.84,1.1-1.6,1.57-2.35
		c0.26-0.42,0.24-0.84,0.49-1.28c0.36-0.62,1.18-0.88,1.47-1.57c0.35-0.83-0.2-1.78,0.2-2.65c0.23-0.5,0.98-0.96,1.18-1.47
		c0.07-0.88,0.13-1.77,0.2-2.65c0.21-0.76,0.9-1.29,1.08-1.96c0.23-0.89-1.34-3.68,0.1-4.02v-0.29h0.29c0.03-0.03,0.07-0.07,0.1-0.1
		c0-0.37,0.14-0.96,0.1-1.18c-0.07-0.37-0.46-0.63-0.39-1.18c0.1-0.78,0.83-3.98,0-4.91v-0.1c-0.07,0.07-0.13,0.13-0.2,0.2
		c-0.65-0.07-1.35-0.74-1.67-1.18c-0.51,0.04-1.64,0.7-1.96,1.08c-1.76-0.04-2.22-1.77-2.75-3.04c-0.25-0.61-0.02-1.32-0.39-1.76
		c-0.03-0.03-0.06-0.07-0.1-0.1c-0.21,0.55,0,1.33-0.2,2.06c-0.33,1.25-0.36,2.94-0.79,4.22c-0.12,0.36-0.47,0.7-0.59,1.08
		c-0.27,0.06-0.51,0.1-0.88,0.1c-0.12,0.32-0.15,0.59-0.39,0.79c-0.31,0.15-0.57-0.24-0.98-0.1c-0.22,0.08-0.23,0.39-0.39,0.49
		c-0.36,0.22-0.66-0.14-0.98,0.29c-0.65-0.13-0.91-1.46-1.18-1.96c-0.36-0.1-0.72-0.2-1.08-0.29c-0.69-0.1-1.37,0.63-2.06,0.2
		c-0.51-0.21-0.55-0.9-0.88-1.28c-0.3-0.2-0.67-0.05-1.08-0.2c-0.33-0.12-1.74-1.34-1.86-1.67c-0.25-0.35,0-3.49,0.2-3.92
		c0.16-0.36,0.53-0.47,0.69-0.88c0.21,0.05,0.35,0.09,0.49,0.2c0.5,0.34,0.5,0.94,0.88,1.37c0.22,0.33,0.63,0.1,0.98,0.29
		c0.8,0.44,1.08,1.74,1.86,2.26c0.54,0.54,1.02-0.37,1.28-0.78c0.08-0.07,0.22-0.13,0.29-0.2c0.51,0.1,0.41,0.45,0.78,0.59h0.88
		c0.12,0.06,0.15,0.34,0.2,0.49c0.55-0.09,0.81-0.16,1.47-0.2c0.12-0.3,0.25-0.62,0.39-0.88c0.2,0.04,0.19,0.02,0.29,0.1
		c0.65-0.19,0.5-0.69,1.28-0.59c0.37-0.95,0.86-2.36,0.98-3.63c0.03-0.03,0.06-0.07,0.1-0.1h0.39c0.04,0.02,1.43,2.23,1.47,2.35
		c0.47-0.07,1.5-0.56,1.67-0.78c0.13-0.17,0.2-0.5,0.39-0.59c0.16,0.03,0.33,0.07,0.49,0.1c0.13-0.26,0.26-0.52,0.39-0.79
		c0.35-0.3,0.71-0.5,1.08-0.78c0.18-0.14,0.22-0.45,0.39-0.59c0.42-0.34,1.07-0.33,1.37-0.79c0.07-0.23,0.13-0.46,0.2-0.69
		c0.06-0.09,0.34-0.18,0.39-0.29c0.03-0.33,0.07-0.65,0.1-0.98c0.57-0.93,1.61-1.82,2.06-2.85c0.36-0.82,0.39-1.75,0.88-2.45v-0.2
		h0.2c0.27,0.29,0.43,0.35,0.49,0.88c0.26-0.12,0.2-0.19,0.49-0.29c0.4,0.89,0.75,1.31,1.57,1.77c0.09,0.05,0.32,0.03,0.49-0.1
		c0.79,0.17,0.49,1.21,1.08,1.57c0.5,0.3,1.08-0.09,1.57,0.59c0.23-0.02,0.28-0.02,0.39-0.1c0.45-0.18,0.35-0.52,0.59-0.88
		c0.08,0.02,0.11-0.02,0.2,0.29c0.24-0.11,0.36-0.28,0.49-0.49c0.62,0.18,0.28,0.61,0.49,1.18c0.08,0.22,0.39,0.46,0.49,0.69
		c0.34,0.79,0.35,1.54,0.69,2.35c0.32,0.78,0.42,1.85,0.79,2.75c1.26,3.13,2.3,6.6,2.65,10.69h0.08c0.19-2.97,0.29-5.96,0.29-8.98
		c0-78.28-63.46-141.73-141.73-141.73c-0.56,0-1.12,0.01-1.67,0.02c0.7,0.43,2.23-0.1,3.13,0.09c0.97,0.21,2.14-0.04,3.24,0.2
		c2.14,0.46,4.64,0.42,6.87,0.39c-0.1,0.07-0.09,0.06-0.29,0.1c0.56,0.39,1.54,0.02,2.35,0.2c1.86,0.29,3.73,0.59,5.59,0.88
		c-0.14,0.09-0.32,0.1-0.59,0.1c0.03,0.03,0.07,0.07,0.1,0.1c1.14,0.83,3.82,0.39,5,1.18c0.26,0.16,0.26,0.51,0.49,0.69
		c0.56,0.16,1.11,0.33,1.67,0.49c0.86,0.36,1.95,1.11,2.85,1.37c0.16-0.03,0.33-0.07,0.49-0.1c0.46,0.09,0.96,0.37,1.47,0.49h1.08
		c1.13,0.4,2.19,0.85,3.33,1.28c-0.11,0.08-0.16,0.08-0.39,0.1c0.03,0.03,0.07,0.07,0.1,0.1c0.79,0.57,2.42,0.15,3.24,0.69h0.2
		c-0.03,0.23-0.05,0.24-0.1,0.39c-1.07,0.05-2.53-0.71-3.92-0.29c-0.23,0.07-0.28,0.22-0.59,0.29c0.15,0.29,0.58,0.46,0.88,0.59
		c-0.13,0.16-0.06,0.11-0.3,0.2c0.47,1.24,2.01,0.35,3.04,0.78c0.32,0.14,0.81,0.52,1.18,0.69c-0.27,0.27-0.37,0.23-0.88,0.39
		c0.31,0.8,1.2,1.21,1.77,1.77c-0.03,0.03-0.07,0.06-0.1,0.1c-0.61-0.04-1.51-0.4-1.86-0.2h-0.2c0.07,0.07,0.13,0.13,0.2,0.2v0.1
		c-0.19-0.02-2.7-0.7-2.84-0.78c-0.63-0.02-1.42-0.13-1.47,0.2c-0.74,0-0.59,0.07-0.88,0.29c0.37,0.51,0.75,0.81,1.37,1.08v0.2
		c-0.55-0.14-1.44-0.52-2.06-0.1c-0.43,0.06-0.34,0.12-0.59,0.29c0.51,1.11,2.74,1.1,3.83,1.67v0.39h0.49
		c0.27,0.29,0.67,0.65,0.98,0.88v0.1c-0.28-0.08-0.34-0.1-0.49-0.29h-0.29c0.1,0.28,0.17,0.35,0.39,0.49
		c-0.1,0.08-0.03,0.04-0.2,0.1c0.13,0.17,0.37,0.23,0.49,0.39v0.29c0.29,0.1,0.59,0.2,0.88,0.29c0.35,0.31,0.33,0.86,0.59,1.28
		c0.36,0.23,0.72,0.46,1.08,0.69c-0.07,0.07-0.13,0.13-0.2,0.2c0.26,0.25,0.61,0.35,0.88,0.59c-0.03,0.06-0.07,0.13-0.1,0.2
		c0.1,0.1,0.2,0.2,0.29,0.29c0.06-0.03,0.13-0.07,0.2-0.1c0.32,0.07,0.28,0.24,0.39,0.49c0.2-0.04,0.19-0.02,0.29-0.1
		c0,0,0.39-0.02,0.2-0.1c-0.03-0.03-0.06-0.07-0.1-0.1c0.71,0.09,1.25,0.83,1.77,1.18c-0.01,0.44-0.04,1.21-0.1,1.37
		c0.17,0.29,2.76,1.07,3.24,1.18c0.36-0.37,1.23-0.52,1.77-0.1h0.2c-0.02,0.25-0.04,0.33-0.1,0.49c-0.46-0.03-0.92-0.07-1.37-0.1
		c-0.34,0.1-1.07,0.44-1.37,0.29c-0.24,0.12-0.15,0.17-0.39,0.29c0.07,0.27,0.14,0.42,0.29,0.59v0.1c-0.42,0.01-1.11,0.07-1.37-0.1
		c-0.35,0-0.66,0.02-0.88,0.1c0.06,0.17,0.02,0.1,0.1,0.2c0.47,0.3,1.76,0.21,2.35,0.59c0.58,0.36,0.51,1.32,1.18,1.57v0.2
		c-1-0.28-1.59-1.07-2.45-1.47c-0.73-0.33-0.77,0.27-1.47,0.1c-0.54-0.13-0.92-0.4-1.77-0.39c0.05,0.78,0.44,0.55,0.88,0.88
		c0.2,0.15,0.33,0.72,0.69,0.98c0.37,0.27,0.79,0.33,1.18,0.59c0.32,0.21,1.04,0.67,1.28,0.98c0.44,0.59,0.49,1.33,1.08,1.77
		c0.34,0.25,0.86,0.56,1.28,0.69c0.26,0.03,0.52,0.07,0.79,0.1c0.32,0.17,0.59,0.59,0.88,0.78c0.32,0.21,0.69,0.26,0.98,0.49
		c0.48-0.04,0.4-0.01,0.39-0.29c0.43,0.01,2.06,0.21,2.35,0.39c0.2,0.2,0.39,0.39,0.59,0.59v0.3c-0.61-0.03-0.87-0.17-1.37-0.3
		c-0.1-0.02-4.02,0.34-4.41,0.49c-0.43,0.16-0.92,0.59-1.37,0.78c-0.35,0.15-1.57-0.15-1.77-0.29h-0.69c0.07,0.2,0.13,0.39,0.2,0.59
		c0.58,0.23,1.33,0.31,1.86,0.39c0.23-0.03,0.46-0.07,0.69-0.1c0.79,0.21,1.49,0.85,2.16,1.18c-0.25,0.37-0.9,0.03-1.28,0.29
		c-0.31,0.22-0.45,0.81-0.59,1.18c-0.5,0.09-1.41,0.37-1.86,0.29c-0.29,0.29-0.59,0.59-0.88,0.88c-0.41,0.79,0.16,1.49-0.79,1.77
		c0.03,0.69,0.27,1.57-0.1,2.06c-0.2,0.13-0.72,0.06-0.79,0.1c-0.31,0.15-0.24,0.48-0.19,0.98c-0.03,0.03-0.07,0.07-0.1,0.1
		c-0.9-0.16-1.4-1.18-2.36-1.18c-1.09,0-1.59,0.58-2.84,0.59c0.33,0.37,0.93,0.21,1.37,0.49c0.77,0.49,0.89,1.57,1.47,2.26
		c0.35,0.42,0.8,0.08,1.28,0.39c0.6,0.39,0.64,1.2,1.08,1.77v0.1c-0.42-0.04-0.61-0.26-0.88-0.29c-0.28-0.04-0.46,0.26-0.59,0.29
		c-0.23-0.03-0.46-0.07-0.69-0.1c-0.11,0.36,0.17,0.78,0,1.28c-0.17,0.16-0.33,0.33-0.49,0.49c-0.23,0.51,0.07,0.76-0.29,1.08
		c0.08,0.86,1.18,1.32,1.77,1.67c-0.07,0.27-0.12,0.73-0.2,0.88c-0.36,0.17-2.71-0.12-3.04-0.39c-0.29,0-0.54,0-0.69,0.1
		c-0.09,0.22,0.12,0.48-0.2,0.69c0.27,0.58,1.12,0.68,1.57,1.08c0.41-0.06,0.48-0.18,0.78-0.29c0.23,0.26,0.47,0.51,0.79,0.69
		c-0.03,0.38-0.11,0.57-0.3,0.79c-0.16,0.15-0.16-0.09-0.39-0.1c-0.23,0.07-0.46,0.13-0.69,0.2c-0.52-0.1-0.96-0.62-1.37-0.78
		c-0.43-0.18-0.68,0.19-0.69,0.2c-0.34,0.13-0.53-0.16-0.88-0.2c-0.04-1.43-0.77-1.03-1.37-1.77c-0.19-0.09-0.31-0.66-0.2-0.88
		c-0.13-0.71-0.88-0.73-1.47-0.98c-0.76-0.32-1.91-0.81-2.84-1.18c-0.05-0.12-0.12-0.3-0.2-0.39v-0.1c1.05,0.67,3.99,0.86,5.49,0.49
		c0.86-0.21,1.53,0.3,2.26-0.1c0.52-0.29,0.79-0.94,1.18-1.37c0.01-0.75,0.03-1.46-0.29-1.86c-0.22-0.3-0.24-0.1-0.59-0.29
		c-0.26-0.29-0.52-0.59-0.79-0.88c-0.4-0.26-0.98-0.11-1.47-0.29c-0.61-0.22-1.44-0.08-2.45-0.39c-1.3-0.4-2.71-1.17-4.22-0.69
		c-0.51,0.16-0.71-0.33-1.08-0.2c-0.03,0.1-0.06,0.2-0.1,0.29c-0.29,0.13-0.84-0.15-0.98-0.1c-0.25-0.15-0.2-0.21-0.2-0.59
		c-0.38-0.11-0.67,0.03-0.98-0.2c-0.65,0-0.7,0.2-0.69,0.59c-0.55-0.08-1.33-0.07-1.86-0.1c0.19-0.33,0.26-0.22,0.59-0.2
		c-0.15-0.44-0.05-0.51,0.2-0.79c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.56-0.68-1.83-0.37-2.36-0.78c-0.25,0.01-0.36,0.01-0.49,0.1
		c-0.11,0.16-0.11,0.48-0.1,0.78c-0.16-0.21-0.2-0.51-0.2-0.88c-0.19-0.1-0.27-0.14-0.39-0.29c-0.33,0.03-0.66,0.07-0.98,0.1
		c-0.02,0.23-0.02,0.28-0.1,0.39c-0.15,0.26-0.42,0-0.59,0.49h-0.29c0.06-0.17,0.02-0.1,0.1-0.2c-0.08-0.34-0.14-0.27-0.29-0.49
		c-0.43,0.03-0.4,0.09-0.69,0.2c0.03,0.16,0.07,0.33,0.1,0.49c-0.28-0.24-0.33-0.16-0.59-0.39c-0.09,0.14-0.1,0.32-0.1,0.59
		c-0.13-0.13-0.26-0.26-0.39-0.39h-0.2c0.05,0.51,0.33,0.61,0.69,0.78v0.2c-0.47-0.11-0.92-0.29-1.27-0.2
		c-0.04,0.01-0.62,0.44-0.88,0.59c0.1,0.13,0.2,0.26,0.29,0.39c0.2-0.04,0.19-0.02,0.29-0.1h0.29c-0.12,0.26-0.19,0.2-0.29,0.49
		c-0.28-0.09-0.71-0.07-0.88-0.1c-0.03,0.03-0.07,0.07-0.1,0.1c0.03,0.35,0.01,0.33,0.2,0.49v0.2c-0.46-0.1-0.41-0.26-0.98-0.29
		c0.04,0.4-0.02,0.37,0.29,0.49v0.29c-0.31-0.15-0.21-0.26-0.39,0.1h-0.2c0.08-0.3,0.19-0.38,0.1-0.59v-0.39
		c-0.08,0.06-0.13,0.26-0.2,0.29c-0.06-0.06-0.13-0.13-0.2-0.2c-0.41-0.06-0.87,0.25-1.18,0.39c-0.04,0.26,0.13,0.57,0,0.88
		c-0.13,0.29-0.24-0.07-0.3,0.59c-0.63,0.05-0.61,0.32-0.98,0.59c0,0.29-0.01,0.54,0.1,0.69c0.12,0.22,0.17,0.2,0.39,0.29
		c-0.04,0.2-0.02,0.19-0.1,0.29v0.2c-0.19-0.11-0.41-0.48-0.49-0.69c-0.26,0.09-0.26,0.1-0.39,0.29c-0.14-0.22-0.13-0.6-0.29-0.79
		v-0.1c-0.27,0.23-0.49,0.59-0.59,0.98c-0.3-0.01-0.27-0.07-0.39,0c-0.34,0.13-0.36,0.36-0.59,0.59c0.02,0.45,0.01,0.42,0.3,0.59
		c-0.09,0.52-0.42,0.58-0.98,0.59c-0.17,0.39-0.39,0.62-0.69,0.88v0.49c0.46-0.25,0.84-0.74,1.28-0.98
		c0.53-0.29,0.83-0.04,1.27-0.39h0.2c-0.07,0.52-0.35,0.84-0.69,1.08c0.03,0.39,0.18,0.52,0.2,0.59c-0.03,0.57-0.12,0.32-0.29,0.49
		c-0.71,0.56-0.8,1.86-1.77,2.16c0.06,0.31,0.02,0.24,0.2,0.39v0.2h-0.39c-0.01,0.66-0.12,1.21-0.59,1.47
		c-0.02,0.88,0.12,0.58,0.49,0.88c0.09,0.15,0.02,0.69,0,0.98c-0.43,0.06-0.49,0.11-0.59,0.49c-0.31-0.06-0.29-0.09-0.49-0.2
		c-0.15,0.15-0.4,0.29-0.59,0.39c0.04,0.2,0.02,0.19,0.1,0.29v0.2c0.37-0.04,0.37-0.08,0.59-0.2c0.03,0.03,0.07,0.07,0.1,0.1
		c-0.18,0.43-0.61,0.57-0.88,0.88c-0.06,0.2-0.13,0.39-0.2,0.59c-0.36,0.49-0.88,1.14-1.08,1.77h-0.1
		c-0.24-0.36-0.62-0.47-0.88-0.79h-0.2c-0.1,0.28-0.13,0.75-0.29,0.98c-0.12,0.25-0.26,0.15-0.59,0.2c-0.07,0.35-0.16,0.46,0.1,0.69
		c-0.46,0.62-1.58,0.86-2.06,1.18c-0.33,0.22-0.35,0.67-0.59,0.98c-0.14,0.19-0.94,0.59-1.18,0.79c-0.17,0.28-0.29,0.85-0.59,1.27
		c0.01,0.44-0.04,0.46,0.29,0.59c-0.07,0.38-0.06,0.38-0.39,0.49c-0.07,2.15,0.83,3.9,0.69,5.98c0.12,0.24,0.49,0.26,0.59,0.49
		c0.03,0.36,0.07,0.72,0.1,1.08c0.2,0.53,1.15,1.16,1.77,1.28c0.18,0.88,0.83,0.49,1.57,0.59c1.56,0.22,2.73-2.05,3.63-2.94
		c0.03-0.02,1.05-0.37,1.28-0.39c0-0.27,0-0.45-0.1-0.59v-0.49h0.1c0.2,0.77,0.75,1.15,1.08,1.77c0.21,0.4,0.2,0.87,0.2,1.18
		c0.21,0.37,0.61,0.86,0.78,1.27c0.12,0.28,0.04,0.55,0.2,0.79c0.63,0.97,1.75,1.78,2.26,2.84h0.39v0.49
		c-0.23,0.02-0.28,0.02-0.39,0.1c-0.12,0.08,0.08,0.18,0.2,0.29c-0.11,0.08-0.16,0.08-0.39,0.1c0.06,0.22,0.07,0.26,0.19,0.39
		c-0.09,0.15-1.63,0.77-1.96,0.78c-0.06,0.33-0.11,0.41-0.29,0.59c-0.13,0.09-0.24,0.09-0.49,0.1c0.19,0.54,0.48,0.96,0.49,1.77
		c0.17-0.06,0.1-0.02,0.2-0.1c0.68,0,0.71,0.15,1.08,0.39c-0.09,0.24-0.11,0.15-0.2,0.39c-0.24-0.14-0.12,0.02-0.2-0.29
		c-0.28,0.11-0.61,0.18-0.98,0.2c-0.06,0.17-0.02,0.1-0.1,0.2c0.06,0.48,0.69,0.96,1.18,0.88c0.07-0.01,0.28-0.36,0.59-0.2
		c0.04,0.02,0.1,0.24,0.19,0.29c0.12-0.42,0.18-1.25,0.88-1.37c-0.13-0.24-0.33-0.27-0.49-0.49c-0.05-0.22,0.36-0.36,0.2-0.79
		c-0.09-0.24-0.22,0.08-0.29-0.49c0.4,0,0.51,0.01,0.69-0.2h0.1c-0.11-0.23-0.09-0.18-0.29-0.29v-0.59c0.03,0.03,0.06,0.07,0.1,0.1
		c0.24,0.11,0.28,0.25,0.49,0.39c-0.01,0.46-0.02,0.71-0.2,0.88v0.2c0.37-0.07,0.81,0.1,1.18,0c0.62-0.17,0.61-0.33,1.47-0.29
		c0.14-0.83-0.3-1.17,0.1-1.86h0.49c0.02-0.23,0.02-0.28,0.1-0.39c0.22-0.16,1.12-0.25,1.47,0c0.23-0.03,0.24-0.05,0.39-0.1
		c0.14-0.57,0.36-1.09,0.39-1.77c0.25,0.15,0.37,0.83,0.39,1.18h0.2c0.02-0.56,0.16-2.18,0.39-2.55v-0.98h-0.2
		c-0.1,0.52-0.2,1.05-0.29,1.57c-0.17,0.06-0.1,0.02-0.2,0.1c-0.17-0.31,0.15-0.48,0-0.88c-0.33-0.92,0.16-3.06-0.29-4.32
		c0.48-0.23,0.73-0.56,1.37-0.59c0.17-0.61,0.92-0.59,1.18-1.08c0.3-0.55-0.12-1.33,0.39-1.67c-0.04-0.23-1.74-2.18-1.96-2.26v-0.1
		c-0.31,0.16-0.12,0.06-0.1,0.39c-0.43-0.27-1.03-0.67-1.47-0.49c-0.51-0.58-0.68-1.58-0.98-2.35c0.25-0.06,0.05-0.03,0.29,0
		c0.03-0.7-0.11-0.48-0.29-0.98c0.1-0.48,0.11-0.86-0.1-1.28c0.33-0.29,1.68-2.85,1.67-3.04c0.2-0.32,0.37-0.1,0.69-0.29
		c0.23-0.15,0.04-0.36,0.2-0.59c0.14-0.19,0.54-0.16,0.69-0.39c0.38-0.61,0.11-1.35,0.69-1.77c-0.05-0.58-0.46-0.87-0.78-1.18
		c0.08-0.52,0.32-1.09,0.59-1.47c0.15-0.24,0.16-0.23,0.39-0.1c0.31-0.38,0.3-0.86,0.78-1.08c0.33-0.2,0.34-0.02,0.59,0.2
		c0.15,0.13,0.09-0.17,0.1-0.2c0.1,0.03,0.2,0.07,0.29,0.1c0.06-0.16,0.08-0.23,0.1-0.49c0.52,0.17,0.95,0.26,1.47,0.49
		c0.15,0.4,0.23,0.89,0.49,1.18c-0.06,0.17-0.02,0.1-0.1,0.2v0.1c-0.29-0.11-0.27-0.14-0.39-0.39h-0.39
		c0.1,0.28,0.17,0.35,0.39,0.49c-0.16,0.32-0.05,0.76-0.29,1.28c-0.22,0.48-0.55,0.75-0.59,1.47c-0.44,0.09-0.27,0.12-0.69,0.1
		c-0.12,0.65-0.22,1.27-0.59,1.67c-0.14,0.21-0.63,0.29-0.88,0.1h-0.2c0.08,0.6,0.49,0.74,0.2,1.08c0.09,0.47,0.33,1.28,0.59,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39v0.39c0.22,0.53,0.66,0.92,0.79,1.37c-0.03,0.13-0.07,0.26-0.1,0.39c0.06,0.03,0.13,0.07,0.2,0.1
		c0.28,0.81-0.32,1.27,0.2,1.77c-0.1,0.25-0.32,0.56-0.49,0.78c-0.13,0.08-0.52-0.04-0.88,0.1c-0.22,0.08-0.53,0.3-0.88,0.49
		c0.12,1.2,1.53,0.77,2.06,1.28h0.1c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c0.23,0.14,0.44,0.27,0.59,0.49c0.55-0.18,0.83-0.13,1.47-0.1
		c0.38-0.24,0.37-0.22,0.98-0.2c0.04-0.2,0.03-0.19,0.1-0.29c0.17-0.08,0.96,0.06,1.47-0.2c0.1-0.05,0.53-0.56,0.59-0.59
		c0.19-0.11,0.43,0.13,0.49,0.1c0.19-0.1,0.14-0.46,0.29-0.59c0.29-0.24,0.74-0.08,1.08-0.29c0.59-0.36,1.17-0.82,1.67-1.27
		c0.25,0.23,1.67-0.48,1.86-0.98c0.26,0.13,0.36,0.44,0.49,0.69c0.7,0.03,0.95,0.18,1.77,0c0.1,0.08,0.02,0.04,0.2,0.1
		c0.03,0.16,0.07,0.33,0.1,0.49c-0.3-0.01-0.52-0.03-0.59,0c-0.54,0.38,0.19,0.69-0.79,0.59c-0.07,0.24-0.07,0.25,0,0.49
		c-0.31-0.06-0.24-0.02-0.39-0.2h-0.2c0.06,0.5,0.36,0.66,0.2,0.98v0.2c-0.85,0.03-2.29,0.36-2.85,0c-0.48,0.01-0.58,0.09-0.88,0.2
		v0.29c-0.46-0.01-0.62,0.17-0.78,0.1c-0.21,0.08-0.2,0.1-0.2,0.1c-0.2,0.36-0.75,0.35-1.08,0.59c-0.58,0.41-0.36,0.99-0.98,1.28
		c0.22,0.31,0.3,0.12,0.49,0.29c0.18,0.15,0.16,0.49,0.3,0.69c0.36,0.51,0.95,0.72,1.57,0.98c0.07-0.07,0.13-0.13,0.2-0.2v-0.29h0.3
		c0.06,1.45,0.73,2.12,0.78,3.34c-0.28,0.27-0.43,0.58-0.78,0.79c-0.55,0.3-0.88-0.61-1.18-0.88c-0.45-0.42-1.13-0.22-1.27-0.98
		c-0.45,0.15-0.94,0.49-1.28,0.78c-0.35,0.5-0.54,3.4-0.2,4.12c0.36,0.75,1.28,2.24,0.49,3.24c-0.2,0.58-0.7,0.6-1.28,0.78
		c0.13,0.46,0.28,0.88-0.1,1.28c-0.21,0.58-0.71,0.48-1.18,0.78c-0.8-0.1-0.98-0.7-1.28-1.27c-0.97,0.02-3.04,0.9-3.43,1.37
		c-0.18,0.22-0.17,0.61-0.39,0.79c-0.9,0.69-2.34,0.61-3.04,1.47c-0.52-0.04-1.03-0.36-1.18-0.78c-0.3,0.1-0.37,0.21-0.69,0.29
		c-0.03-0.03-0.06-0.06-0.1-0.1c0.04-0.2,0.03-0.19,0.1-0.29c0.2-0.11,0.18-0.05,0.39,0v-0.1c0.09-0.27-0.2-0.38-0.1-0.79
		c-0.25-0.09-0.45-0.07-0.59-0.29c-0.48,0.09-0.68,0.44-0.88,0.79c-0.23-0.02-0.28-0.02-0.39-0.1c-0.65,0.13-0.54,0.7-0.98,0.98
		c-0.3,0.19-0.58,0-0.79,0.1c-0.5,0.24-0.34,0.59-1.27,0.59c0.08-0.49,0.28-1.02,0.49-1.37c-0.07-0.07-0.13-0.13-0.2-0.2h-0.39v0.39
		c-0.07,0.06-0.13,0.13-0.2,0.2c-0.59-0.01-0.97-0.2-1.18-0.29c-0.44-0.21-0.52-0.8-0.49-1.47c-0.26-0.13-0.33-0.24-0.69-0.29
		c0.03-0.13,0.07-0.26,0.1-0.39c0.54,0.15,0.42,0.51,1.08,0.59c-0.1,0.08-0.02,0.04-0.2,0.1c0.14,0.39,0.3,0.44,0.69,0.29
		c0.07,0.12,0.11,0.2,0.2,0.29c0.03,0.03,0.06,0.06,0.1,0.1c0.08-0.21,0.16-0.52,0.29-0.69c-0.02-0.88-0.34-1.21-0.59-1.86
		c-0.26-0.06-0.72-0.11-1.27-0.1c0.06-0.22,0.07-0.26,0.2-0.39c0.03-0.03,0.07-0.07,0.1-0.1v0.1h0.29
		c-0.14-0.38-0.02-0.76-0.29-1.08c0.21-0.13,0.43-0.02,0.59-0.1c1.35-0.49,0.09-1.54-0.49-1.86c-0.04-0.64,0.1-0.74,0.2-1.28
		c0.1-0.58-0.39-0.99-0.2-1.37v-0.2c-0.97,0.29-1.38,0.79-1.77,1.67c-0.52,0.19-1.06,0.05-1.57,0.39c-1.4,1.09-0.08,3.34-0.59,4.22
		c0.03,0.55,0.35,0.77,0.69,0.98c-0.01,1.09-0.47,2.37,0.3,3.24c-0.12,0.7-0.45,1.02-0.79,1.47c-1.31,0.09-2.46,0.72-3.24,0.98
		c-0.83,0.28-1.65,0.05-2.35,0.59c-1.13,0.76-0.74,3.06-1.67,4.02c-0.82,0.84-1.84,1.4-2.75,2.16c-0.25,0.21-0.27,0.63-0.59,0.78
		c-0.67,0.33-1.59,0.18-2.06,0.69c-0.38,0.61-0.02,1.79-0.39,2.36c-0.81,1.21-2.91,0.33-3.24,2.45c-0.52,0.09-1.8-0.06-2.26-0.39
		c-0.4-0.24-0.1-0.43-0.29-0.79c-0.14-0.1-0.97-0.15-1.37-0.2c0.07,0.58,0.61,2.35,0.29,2.84c-0.06,0.17-0.02,0.1-0.1,0.2
		c-0.55,0.35-1.49,0.01-1.86,0.39c-0.41-0.13-0.68-0.44-0.78-0.88c-0.8-0.04-3.07,0.3-3.92,0.79c0.02,0.71,0.26,0.91,0.59,1.28
		c-0.2,0.11-0.18,0.15-0.49,0.2c0.12,0.26,0.4,0.65,0.59,0.88c0.33,0.18,0.49-0.11,0.88,0c0.08,0.02,0.7,0.31,0.78,0.39
		c0.03,0.13,0.07,0.26,0.1,0.39c0.4,0.31,0.5-0.08,0.69,0.49c0.44-0.12,0.74-0.1,1.08,0.1c0.37,0.23,0.6,1.84,0.59,2.45
		c0.96,0.19,1.52,1.91,1.77,2.94c0.43,1.81,0.07,5.04-0.88,6.67c-0.13,0.36-0.26,0.72-0.39,1.08c-0.25,0.21-0.65,0.18-0.88,0.39
		c-0.83-0.04-1.07-0.44-1.67-0.59c-0.49-0.12-0.58,0.29-0.98,0.2c-0.23-0.05-0.48-0.42-0.69-0.49c-0.93-0.31-1.52,0.45-2.45,0.2
		c-0.58-0.16-1.32-0.6-1.86-0.79H142c-0.1-0.13-0.2-0.26-0.29-0.39c-0.29,0.07-0.59,0.13-0.88,0.2c-1.1-0.11-2.54-0.26-3.24-1.08
		c-0.66,0.06-1.14,0.1-1.67,0.49c-0.22,0.16-0.31,0.46-0.59,0.59c-0.35,0.16-0.45-0.14-0.88,0c-0.33,0.11-0.69,0.5-0.98,0.69
		c0,0.76,0.25,0.59,0.39,1.18c0.02,0.1-0.21,0.53-0.1,0.78h0.2c0.11,0.23-0.09,2.83-0.2,3.34c0.03,0.56,0.07,1.11,0.1,1.67
		c-0.11,0.32-0.48,0.85-0.59,1.18c-0.38,1.09-0.49,2.08-1.08,2.94c-0.16,0.24-0.66,0.44-0.78,0.69v0.69
		c-0.1,0.3-0.37,1.04-0.59,1.28c0.06,0.52,0.2,0.68,0.69,0.78v0.59c0.26,0.03,0.52,0.07,0.78,0.1c0,1.16-0.26,3.74-0.98,4.32
		c0.03,0.03,0.07,0.06,0.1,0.1c0.21,0.09,0.26-0.05,0.49-0.1c0.79-0.18,1.78,0.38,2.06,0.78c0.55-0.15,1.27-0.78,2.16-0.49
		c0.38,0.13,0.57,0.49,1.08,0.59c0.01,0.96,0.69,2.46,1.18,2.94c0.34,0.34,0.88,0.39,1.18,0.78c0.77-0.17,0.62-0.76,1.08-1.18
		c0.38-0.34,1.02,0.02,1.57-0.2c0.25-0.1,0.5-0.5,0.79-0.59c0.64-0.2,1.46,0.06,2.06,0.19c0.42-0.03,0.85-0.06,1.28-0.1
		c0.13,0.03,0.5,0.27,0.59,0.29c0.44,0.1,0.85-0.3,1.28-0.39c0.13,0.13,0.26,0.26,0.39,0.39h0.2c0.16-0.27,0.43-0.45,0.59-0.69
		c0.27-0.4,0.28-0.92,0.59-1.28c0.27-0.32,0.73-0.32,0.98-0.69c0.64,0.08,0.9,0.08,1.57,0c0.01-0.94,0.29-1.18,0.39-1.86h0.29v-0.29
		c0.56-0.56,1.16-1.06,1.86-1.47c-0.14-0.61-0.84-0.7-1.08-1.57c-0.03-0.33-0.07-0.65-0.1-0.98c0.14-0.6,1.79-2.92,2.26-3.24
		c0.37-0.26,0.67-0.17,0.88-0.59c0.1-0.19-0.03-0.48-0.1-0.79c0.42-0.27,1.05-0.62,1.57-0.79c0.57-0.19,1.2,0,1.67-0.29
		c0.16-0.23,0.33-0.46,0.49-0.69c0.31-0.21,0.66-0.19,0.98-0.39c0.39-0.25,0.77-0.64,1.18-0.88c-0.03-0.36-0.06-0.72-0.1-1.08
		c0.1-0.03,0.2-0.07,0.29-0.1c0.06-0.13-0.42-1.18-0.49-1.28c-0.02-1.88,1.14-1.95,2.16-2.75c0.84,0.11,1.22,0.49,1.86,0.69
		c0.16,0.15,0.71-0.47,1.28-0.2c0.03,0.1,0.06,0.2,0.1,0.29c0.33,0.07,0.65,0.13,0.98,0.2c0.03,0.1,0.07,0.2,0.1,0.29
		c0.61,0.28,1.45-0.34,2.06-0.39c0.21-0.94,1.26-1.73,2.06-2.06c0.46-0.19,0.91-0.12,1.28-0.39c0.25-0.19,0.12-0.5,0.29-0.78
		c0.22-0.38,0.8-0.72,1.08-1.08c1.49,0.06,2.38,0.87,3.53,1.37c0.05,0.18,0.21,1.21,0.29,1.37c0.11,0.22,0.56,0.43,0.68,0.69
		c0.17,0.35,0.01,0.89,0.1,1.08c0.18,0.1,0.2-0.1,0.39,0c0.18,0.09,0.06,0.35,0.19,0.49c0.16,0.03,0.33,0.06,0.49,0.1
		c0.21,0.14,0.35,0.44,0.59,0.59c-0.02,0.23-0.02,0.28-0.1,0.39c0.25,0.33,0.62-0.05,1.08,0.2c0.35,0.19,0.4,0.75,0.69,0.98
		c0.23,0.06,0.46,0.13,0.69,0.2c0.17,0.11,0.17,0.33,0.29,0.49c0.2,0.25,0.52,0.3,0.79,0.49c0.14,0.11,0.17,0.38,0.29,0.49
		c0.45,0.39,0.85,0.08,1.27,0.69c0.41-0.14,0.6-0.44,0.98-0.1c1.16-0.01,1.04,0.53,1.57,1.08c0.05,0.13,0.04,0.07,0.1,0.1
		c0.63-0.03,0.76,0,0.79,0.59c0.2-0.04,0.45-0.09,0.59-0.2c1.41,0.05,0.57,0.73,0.98,1.28c0.13,0.18,0.83,0.27,1.08,0.59
		c0.26-0.09,0.26-0.1,0.39-0.29c1.09,0.21,1.53,2.86,2.26,3.63c-0.06,0.57-0.41,0.67-0.79,0.88c0.12,0.38,0.29,0.69,0,1.08
		c-0.28,0.56-0.28-0.01-0.79,0.2c-0.25,0.1-0.61,0.62-0.88,0.69c-0.2,0.05-0.68-0.2-0.98,0c-0.03,0.1-0.06,0.2-0.1,0.29
		c-0.12,0.1-0.68,0.36-0.78,0.39c-0.54,0.17-0.69-0.29-1.28,0.2c-0.97-0.05-1.07-0.58-1.96-0.49c-0.07,0.16-0.13,0.33-0.2,0.49
		c-0.43,0.02-1.93,0.1-1.38,0.98c0.35,0.95,1.14,0.39,1.96,0.79c0.46,0.22,1.05,0.76,1.57,0.98c0.37,0.16,0.95-0.08,1.37,0.1
		c0.36,0.15,0.45,0.72,0.79,0.88c0.35,0.17,1.05,0,1.37,0.2c0.12-0.07,0.45-1.13,0.49-1.28c0.12-0.42-0.48-0.78-0.59-1.08
		c-0.27-0.75,0.66-2.26,0.88-2.65c0.03-0.03,0.07-0.06,0.1-0.1c0.1,0.14,0.16,0.49,0.2,0.69c0.28,0.01,0.14,0.07,0.29,0h0.69
		c0.03-0.06,0.07-0.13,0.1-0.2c0.13-0.36,0.26-0.72,0.39-1.08c0.2-0.16,0.39-0.33,0.59-0.49c0.2-0.5-0.22-0.87,0-1.28
		c0.23-0.61,0.86-0.33,1.18-0.79c0.05-0.11-0.04-0.76-0.2-0.98c-0.03-0.72-0.74-1-1.47-0.98c-0.08-0.18-0.14-0.26-0.2-0.49
		c-0.27-0.65,0.59-1.89,0.79-2.45c0.39,0.1,0.79,0.42,1.18,0.49c0.12,0.02,0.51-0.19,0.78-0.1c0.47,0.16,0.83,0.89,1.08,1.28
		c0.25,0.01,0.36,0.01,0.49,0.1h0.1c0.05-0.36-0.02-0.59,0.2-0.88c-0.11-1.32-3.06-2.56-4.22-2.94c-0.82-0.27-1.94-0.22-2.26-0.98
		c-0.07-0.15,0.03-0.58,0.2-0.78c-0.07-0.37-0.14-0.35-0.29-0.59c-2.54,0.08-2.46,0.65-4.22-0.88c-0.27-0.23-0.67-0.31-0.88-0.59
		c-0.59-0.78-1.02-2.98-1.76-3.43c-0.34-0.21-0.62-0.1-0.98-0.29c-0.5-0.27-0.51-0.65-1.37-0.69c-0.21-0.42-0.47-0.95-0.79-1.28
		c0.05-1.17,0.69-1.54-0.1-2.26c0.01-0.38,0.02-0.5,0.2-0.69c0.26-0.64,1.44-0.94,2.16-0.88c0.07,0.9,0.51,2.04,1.18,2.35v0.1
		c0.32-0.15,0.56-0.64,0.59-1.08c0.13,0.03,0.26,0.06,0.39,0.1c-0.07-0.39-0.18-0.4-0.2-0.88h0.29c0.11,0.24,0.23,0.35,0.1,0.59
		c-0.04,0.35,0.05,0.26-0.2,0.29c-0.03,0.47-0.08,0.9,0.2,1.27v0.2c0.12-0.07,0.2-0.11,0.29-0.2c0.07-0.11-0.13-0.58-0.2-0.88
		c0.07-0.07,0.13-0.13,0.2-0.2v-0.1c0.23,0.09,0.16,0.04,0.3,0.2c0.21,0.11,0.08,0.65,0.29,0.98c0.27,0.42,0.86,1.09,1.28,1.37v0.2
		c-0.21-0.09-0.26-0.15-0.39-0.29h-0.49c0.23,0.65,0.93,0.92,1.37,1.37c0.1-0.19,0.03-0.11,0-0.39c0.2,0.03,0.39,0.07,0.59,0.1
		c0.1,0.22,0.16,0.28,0.2,0.59c0.08-0.1,0.04-0.02,0.1-0.2c0.34,0.05,0.93,0.57,1.18,0.78c0.34-0.11,0.2,0.02,0.2-0.29
		c0.17-0.06,0.1-0.02,0.2-0.1h0.49c-0.09,0.26-0.1,0.26-0.3,0.39c0.1,0.1,0.2,0.2,0.3,0.29c-0.09,0.31,0.05,0.15-0.2,0.29
		c0.2,0.14,0.67,0.16,0.79,0.1c0.01-0.13,0.02-0.14-0.2-0.29c0.16-0.15,0.49-0.29,0.69-0.39c0.26,0.29,0.62,0.5,0.98,0.69
		c-0.25,0.29-1.06,0.5-1.57,0.49v0.2c0.62-0.01,1.15-0.36,1.57-0.29c0.41,0.06,1.02,0.45,1.37,0.59c0.91,0.35,1.87,0.59,2.65,1.08
		c0.34,0.21,0.49,0.66,0.78,0.88c0.24,0.18,0.75,0.27,0.98,0.39c-0.01,1.04,0.21,1.52,0.29,2.45c0.03,0.31-0.26,0.93-0.1,1.37
		c0.17,0.16,0.33,0.33,0.49,0.49c-0.21,0.23-0.04,0.1-0.29,0.1v0.2c0.48,0.44,1.37,0.66,1.76,1.18c0.03,0.2,0.07,0.39,0.1,0.59
		c0.31,0.52,1.51,1.56,2.16,1.77c0.09,0.46-0.13,1.15,0,1.37v0.2h0.2c0.06-0.06,0.13-0.13,0.2-0.2c0.07-0.1-0.01-0.22,0.1-0.39
		c0.03-0.03,0.07-0.07,0.1-0.1c0.06,0.16,0.08,0.23,0.1,0.49h0.29c0.14,0.32,0.3,0.53,0.39,0.88c0.42,0,0.83-0.02,1.08-0.2h0.39
		c-0.07,0.23-0.1,0.22-0.2,0.39h-0.49c-0.05,0.62-0.27,0.76-0.49,1.18c0.64,0.37,1.17,0.89,1.77,1.28c-0.09,1.32,0.05,1.5,0.79,1.96
		c0.32-0.19,0.1-0.54,0.2-0.69c0.1-0.1,0.2-0.2,0.3-0.29c0.35,0.59,0.71,0.79,0.98,1.57c0.17,0.06,0.1,0.02,0.2,0.1h0.1
		c-0.07-0.35-0.12-0.77,0.1-1.08v-0.2c0.54,0.06,1.05,0.56,1.37,0.88h0.1c-0.16-0.8-0.79-2.27-1.47-2.75v-0.49
		c0.23-0.03,0.24-0.05,0.39-0.1c0.14,0.19,0.33,0.4,0.49,0.59c0.01,0.02,0.53-0.47,0.79-0.59v-0.39c-0.53-0.09-0.22-0.13-0.69,0
		c-0.15-0.25-0.29-0.66-0.59-0.78c0.09-0.27,0.17-0.29,0.29-0.49c0.33,0.04,0.88-0.11,1.18,0c0.34,0.13,0.5,0.5,0.98,0.59
		c-0.05-0.58-0.47-1.13-0.29-1.47v-0.2c0.36,0.08,0.48,0.17,0.59,0.49c0.2-0.03,0.39-0.06,0.59-0.1c0.03-0.03,0.07-0.07,0.1-0.1
		v-0.39c-1.23,0-0.92-0.77-1.47-1.37c-0.76-0.4-1.4,0.31-1.96-0.79c-0.4,0.04-0.58,0.19-0.79,0.1c-0.11-0.06,0.33-0.39,0.49-0.49
		c-0.08-0.43-1.97-2.31-2.35-2.55v-1.27c0.66,0.08,1.36,0.55,1.96,0.1c0.47-0.03,0.57-0.11,0.69-0.49c0.17-0.31-0.07-0.64-0.39-0.78
		v-0.39c0.93,0.03,1.11-0.27,1.37-0.88c0.89,0.05,1.12-0.32,1.86-0.49c0.43-0.1,0.58,0.17,0.88,0c0.77-0.03,0.95,0.09,1.18,0.59
		c0.49-0.03,1-0.14,1.27-0.39h0.1c-0.15,0.37-0.47,0.86-0.79,1.08c0.09,0.83,0.15,2.42,0.39,2.85c0.17,0.1,1.21-0.47,1.47-0.69h0.3
		c-0.05,0.21-0.09,0.35-0.2,0.49c-0.15,0.24-0.04,0.16-0.39,0.2c0.17,0.45,0.59,0.36,0.78,0.69c0.09,0.16,0.02,0.38,0.1,0.49
		c0.19,0.09,0.07,0.04,0.29,0c0.03,0.03,0.07,0.06,0.1,0.1c-0.05,0.39-0.06,0.47-0.39,0.59c-0.02,0.35-0.01,0.46,0.29,0.69
		c-0.06,0.17-0.02,0.1-0.1,0.2c-0.12-0.1-0.39-0.11-0.59-0.39c-0.2,0.04-0.19,0.02-0.29,0.1c-0.08,0.15,0.08,0.43,0.29,0.59
		c-0.08,0.38,0,0.32-0.39,0.39c0.15,0.4,0.51,0.44,0.88,0.59c0.06-0.12,0.11-0.2,0.2-0.29c0.08-0.03,0.89,0.27,1.47,0.29
		c0.1,0.5,0.03,0.76-0.1,1.18c0.2,0.19,0.3,0.48,0.49,0.69c0.18,0.12,0.62,0.21,0.79,0.29v0.29c-0.2,0.04-0.19,0.02-0.29,0.1h-0.2
		c0.01,0.25,0.01,0.36,0.1,0.49c0.11,0.14,1.65-0.6,2.06-0.69c0.03,0.03,0.07,0.07,0.1,0.1c-0.1,0.1-0.2,0.2-0.29,0.29
		c0.02,0.33,0.05,0.68,0.2,0.88v0.2h0.1c0.29-0.49,0.45-0.81,0.98-1.08c0.43,0.14,0.61,0.61,0.98,0.1c0.39,0.2,0.38,0.65,0.69,0.88
		c0.28,0.22,0.98,0.22,1.38,0.29c0.46-0.42,1-0.98,1.67-0.88c0.03-0.03,0.07-0.06,0.1-0.1c-0.02-0.52,0.03-1.08-0.2-1.37
		c0.01-0.25,0.01-0.36,0.1-0.49c1.28-1.03,3.76,0.02,4.51,0.78c1.38-0.01,2.06-0.83,2.94-1.37v-0.29h0.29
		c0.35-1.01,0.5-1.39,0.98-2.16c0.62,0.06,1.48,0.16,2.06-0.1c0.18-0.47,0.38-0.92,0.49-1.37c0.56,0.06,0.43,0.18,0.69,0.49
		c-0.06,0.43-0.25,0.89-0.49,1.18c0.1,0.56,0.43,0.53,0.59,0.88v1.77c0.09,0.14,0.48,0.14,0.59,0.29c0.28,0.41,0.07,1.08,0.29,1.57
		c0.11,0.26,0.38,0.45,0.49,0.78c0.08,0.24-0.21,0.54-0.29,0.88c-0.07,0.28,0.07,0.66,0.1,0.78c0.12,0.58-0.09,1.65-0.2,2.16
		c-0.46,2.12,0.58,4.69-0.29,6.97c-0.2,0.52-0.77,0.76-1.08,1.18c-1.17,0.05-1.85,0.54-2.65,0.79c-0.8,0.24-1.51-0.58-2.36-0.29
		c-0.13,0.13-0.26,0.26-0.39,0.39c-0.29,0.03-0.59,0.06-0.88,0.1c-0.4,0.16-0.84,0.58-1.18,0.79c-0.23,0.07-0.46,0.13-0.69,0.2
		c-0.2,0.18-0.21,0.57-0.39,0.79c-0.64,0.76-1.31,1.61-1.86,2.45c-0.57,0.09-1.09-0.08-1.67-0.2c-0.69-0.14-1.11,0.54-1.77,0.29
		v-0.2c-0.44-0.15-0.69,0.42-1.28,0.2c-0.07-0.1-0.13-0.2-0.2-0.29c-0.25-0.09-1.57,0.08-1.67,0.1c-1.58,0.3-2.37-0.04-3.34,0.88
		c-0.82-0.06-0.8-0.78-1.28-1.18c-0.32-0.2-1.13,0.21-1.47,0.29c-0.69,0.18-0.96-0.08-1.47-0.2c-0.54-0.12-0.75,0.29-1.18,0.2
		c-0.01,0-0.28-0.18-0.29-0.2c-0.42-0.14-0.63-0.58-0.69-1.08c-0.74-0.01-1.33-0.17-1.86-0.29c-0.3-0.07-1.82,0.09-2.06,0.2
		c-0.2,0.23-0.39,0.46-0.59,0.69c-0.23,0.03-0.46,0.06-0.69,0.1c-0.36,0.14-0.96,0.62-1.28,0.88c-0.69,0.58-0.87,1.58-1.47,2.26
		c0,1.06,0.39,1.98,0.98,2.45c-0.02,2.25-1.13,2.29-2.06,3.43c-1.56-0.01-1.94-0.8-2.94-1.18c-0.74-0.28-1.39-0.1-2.16-0.39
		c-0.03-0.07-0.06-0.13-0.1-0.2c-1.47-0.52-3.26,0.35-4.51-0.29c-1.14-0.59-1.36-2.11-1.96-3.04c-0.69-0.03-1.37-0.07-2.06-0.1
		c-0.2-0.09-0.43-0.41-0.69-0.49c-0.67-0.21-1.66-0.23-2.26-0.39c-0.93-0.26-1.27,0.69-2.06,0.59c-0.86-0.11-1.58-0.29-2.16-0.69
		c-0.2-0.23-0.39-0.46-0.59-0.69h-0.79l-0.79-0.69c-0.22-0.28-0.01-0.62-0.2-0.98c-0.05-0.11-0.31-0.2-0.39-0.3
		c-0.52,0.04-0.57,0.19-0.88,0.39v0.39c-0.42-0.02-0.37-0.03-0.69,0c-0.11-0.12-0.25-0.21-0.39-0.29c-0.06-0.22-0.07-0.26-0.2-0.39
		c0-1.26,0.46-1.57,1.08-2.16c0.1-0.1,0.41-0.09,0.49-0.2c0.38-0.5,0.32-1.3,0.78-1.77c-0.08-0.41-0.28-0.34-0.39-0.59
		c-0.11-0.26,0.02-0.6-0.1-0.79c-0.34-0.77-1.3-0.62-1.47-1.67c-0.09-0.16-0.02-0.25,0-0.59c0.2-0.16,0.64-0.39,0.79-0.59
		c0.32-0.45,0.24-0.95,0.69-1.27c-0.05-0.21-0.09-0.36-0.2-0.49c-0.03-0.07-0.07-0.13-0.1-0.2c-0.39,0.13-1.05,0.66-1.28,0.98
		c-0.56-0.11-0.8-0.59-0.78-1.28c-1.17-0.3-2.14-0.42-3.14,0.29c-0.16,0.23-0.33,0.46-0.49,0.69c-0.73,0.4-1.68-0.04-2.26,0.49
		c-0.52-0.05-1.25-0.38-1.57-0.69c-0.65,0.12-0.17,0.13-0.49,0.49c-0.42,0.47-1.53-0.04-1.77-0.39c-0.5,0.03-0.5,0.11-0.79,0.29
		v0.29c-0.2,0.04-1.48,0.28-1.67,0.39c-0.13,0.16-0.26,0.33-0.39,0.49h-0.78c-0.03-0.13-0.07-0.26-0.1-0.39
		c-0.38-0.34-1.06-0.39-1.77-0.39h-1.86c-0.11,0.04-0.35,0.35-0.49,0.39c-0.56-0.03-1.11-0.07-1.67-0.1
		c-0.24,0.09-0.53,0.59-0.78,0.69c-0.31,0.12-0.57-0.09-0.79-0.1c-0.5-0.01-1.33,0.24-1.86,0.29c-0.24,0.02-0.53-0.19-0.88-0.1
		c-1.39,0.36-2.86,1.12-3.53,2.26c-0.45-0.01-0.5-0.03-0.69-0.29c-0.53,0.07-0.4,0.25-0.69,0.39c-0.52,0.25-1.09-0.05-1.57,0.29
		c-0.28,0.2-0.18,0.62-0.39,0.88c-0.04,0.06-1.93,0.9-2.06,0.88c-0.21-0.04-0.87-0.39-0.88-0.39c-0.39-0.07-0.46,0.35-0.88,0
		c-0.42-0.14-0.57-0.35-0.59-0.88c-0.4,0.15-0.69,0.53-1.18,0.59c-0.37,0.05-0.69-0.32-0.98-0.39c-1.62,1-4.01-0.49-3.92-2.45
		c-0.37,0.01-0.75,0.04-0.98,0.2c-1.2,0.04-0.87,0.88-1.27,1.67c-0.52,1.01-1.16,2.26-1.86,3.14c-0.79,0.98-2.28,1.66-3.63,2.06
		c-0.64,0.19-0.95,0.11-1.47,0.39c-0.5,0.27-0.89,1.11-1.37,1.47c-0.21,0.16-0.67,0.26-0.78,0.49c-0.29,0.57-0.07,1.21-0.39,1.67
		c-0.36,0.52-1.25,0.95-1.57,1.67c-0.08,0.18-0.36,2.5-0.29,2.65c0.07,0.16,0.42,0.38,0.49,0.59c0.21,0.66-0.26,1.44-0.49,1.77
		c-0.14,0.2-0.39,0.24-0.59,0.39c-0.29,0.36-0.59,0.72-0.88,1.08c-0.32,0.18-0.58,0.2-0.88,0.39c-0.16,0.2-0.33,0.39-0.49,0.59
		c-0.39,0.17-0.61-0.13-1.08,0.1c-0.65,0.32-1.13,1.16-1.77,1.47c-0.95,0.46-2.56-0.12-3.43,0.39c-0.79,0.4-1.33,1.69-1.77,2.45
		c-0.17,0.3-0.13,0.6-0.39,0.78c-0.62,0.44-1.71,0.37-2.26,0.88c-0.13,0.12-1.4,2.51-1.47,2.75c-0.2,0.6,0,1.12-0.29,1.57
		c-0.2,0.3-1.71,1.31-2.06,1.47c-0.2,0.03-0.39,0.07-0.59,0.1l-0.59,0.88v0.59c-0.21,0.47-1,0.82-1.27,1.27
		c-0.25,0.41-0.14,1.27-0.49,1.57h-0.39c-0.2,0.12-0.78,0.78-0.88,0.98c-0.4,0.77-0.12,1.96-0.59,2.65
		c0.04,0.69,0.28,0.79,0.69,1.08c0,0.6-0.14,0.85-0.49,1.08c0,1.46,0.17,2.38,0.88,3.34c0.29,0.4,0.65,0.22,0.88,0.98
		c0.32,1.06,0.39,3.43,0,4.22c-0.31,0.62-0.96,1.37-1.18,2.06l-0.2,0.88c0.02,0.14,0.21,0.69,0.1,0.98
		c-0.43,1.11-1.37,1.74-2.55,2.16c0.19,0.21,0.22,0.04,0.49,0.2c0.48,0.28,1.02,1.59,1.18,2.16c0.13,0.49-0.21,1.34-0.29,1.77
		c0.03,0.43,0.07,0.85,0.1,1.27c-0.16,0.74-0.56,1.95-0.2,2.65c0.2,0.37,0.67,0.72,0.88,1.08c0.37,0.62,0.42,1.17,0.98,1.57
		c0.36,0.26,0.9,0.24,1.28,0.49c0.7,0.46,1.32,1.34,1.77,2.06c1.65,0,1.08,0.67,1.86,1.27c0.37,0.29,0.8,0.41,1.18,0.69
		c0.37,0.27,0.55,0.77,0.88,1.08c0.17,0.15,0.46,0.1,0.59,0.29c0.32,0.46,0.02,1.32,0.29,1.86c0.06,0.13,0.64,0.8,0.78,0.98
		c0,0.3-0.03,0.5-0.1,0.69c-0.48-0.03-0.82-0.14-1.08-0.39h-0.39c0.36,0.6,1.42,1.27,2.06,1.57c0.25,0.12,0.49,0.04,0.69,0.2
		c0.24,0.19,0.42,0.63,0.69,0.79c0.74,0.43,1.68,0.42,2.35,0.88c0.12,0.08,0.89,0.68,0.98,0.78c0.11,0.13,0.08,0.38,0.2,0.49
		c0.31,0.29,0.83,0.34,1.18,0.59c0.2,0.26,0.39,0.52,0.59,0.79c0.36,0.25,0.7,0.28,0.98,0.59c0.1,0.16,0.2,0.33,0.29,0.49
		c0.3,0.21,0.72,0.15,0.98,0.39c1.21,1.12,2.5,2.13,3.92,3.04c0.68,0.43,1.4,0.5,2.16,0.88c0.37,0.19,0.81,0.56,1.28,0.69
		c0.72,0.19,1.46-0.27,1.96-0.39h1.18c0.88-0.2,2.77-0.5,4.12-0.2c0.59,0.13,2.21,0.25,2.65,0.2c0.13-0.02,0.59-0.19,0.88-0.1
		c0.18,0.06,0.48,0.33,0.69,0.39c0.85,0.25,1.28,0.09,1.96,0.29c0.46,0.14,3.19,1.11,3.34,1.08c0.3-0.06,0.92-0.31,1.18-0.39
		c0.39-0.03,0.79-0.06,1.18-0.1c0.07-0.02,0.32-0.28,0.39-0.29c0.58-0.11,1.08,0.17,1.86-0.1c1.6-0.55,1.98-0.93,4.02-0.69
		c0.29-0.29,0.59-0.59,0.88-0.88c0.76-0.3,1.57,0,2.45-0.2c1.14-0.26,4.51-0.44,5.79-0.2C166.27,267.28,166.89,267.32,167.51,267.35
		z M214.9,167.38c0.1,0.07,0.2,0.13,0.29,0.2v0.1h-0.39C214.83,167.57,214.87,167.48,214.9,167.38z M213.72,167.08v0.1
		c-0.38-0.08-0.35-0.1-0.49-0.39C213.44,166.88,213.56,166.97,213.72,167.08z M212.84,166.59h0.29v0.2
		c-0.48,0.02-0.43-0.06-0.98-0.1v-0.1c0.17-0.06,0.1-0.02,0.2-0.1C212.6,166.51,212.71,166.51,212.84,166.59z M212.05,164.93
		c0.23,0.07,0.22,0.1,0.39,0.2c-0.07,0.32-0.1,0.23-0.2,0.49c-0.23-0.07-0.22-0.1-0.39-0.2
		C211.91,165.1,211.94,165.13,212.05,164.93z M211.27,168.16c0.1,0.07,0.2,0.13,0.29,0.2c0,0,0.99,0.2,1.37,0.2
		c0.03,0.03,0.07,0.06,0.1,0.1c-0.21,0.34-0.4,0.16-0.49,0.69c-0.61-0.28-1.29-0.22-1.77-0.59c-0.08-0.1-0.04-0.02-0.1-0.2
		C210.92,168.45,211.14,168.4,211.27,168.16z M208.13,98.8c-0.36-0.03-0.57-0.16-0.69-0.1c-0.25,0.02-0.33,0.04-0.49,0.1
		c-0.04,0.38,0.03,0.52,0.2,0.88h-0.1c-0.17,0.13-0.17,0.01-0.29,0.1c-0.46-0.13-0.71-0.64-0.98-0.98c-0.25-0.32-0.7-0.31-0.98-0.59
		c-0.03-0.13-0.07-0.26-0.1-0.39c-0.23-0.31-0.71-0.51-1.08-0.69c0.01-0.82,0.14-0.85,0.2-1.57c0.33-0.07,0.65-0.13,0.98-0.2
		c0.29,0.07,0.52,0.5,0.79,0.59c0.56,0.2,0.96,0.03,1.37,0.29h0.1c0.38,0.32,0.61,0.73,1.08,0.98v0.39h-0.29
		c0.12,0.36,0.3,0.59,0.39,0.98C208.15,98.71,208.19,98.63,208.13,98.8z M211.56,95.37v0.1c-0.21-0.04-0.22-0.01-0.59,0
		c-0.02-0.23-0.02-0.28-0.1-0.39c-0.31-0.89-1.53-0.83-2.36-1.18c-0.15-0.42-0.11-0.58-0.49-0.78c0.16-0.26-0.02-0.1,0.29-0.1
		c-0.22-0.33-0.52-0.68-0.78-0.98v-0.1c0.54,0.18,1.27,0.83,1.57,1.27h0.1c-0.04-0.46-0.08-0.43-0.39-0.59
		c0.12-0.26,0.19-0.2,0.3-0.49c-0.54-0.5-0.84-0.71-1.87-0.69v-0.2c0.03-0.03,0.07-0.06,0.1-0.1c0.6-0.01,1.14,0.03,1.47,0.29
		c0.63,0.24,0.33,0.69,0.69,1.18c0.37,0.51,1.22,0.72,1.77,1.08c0.22,0.15,0.26,0.52,0.49,0.69
		C211.65,94.88,211.38,94.98,211.56,95.37z M232.26,135.2c0.41-0.54,0.08-1.09,0.98-1.18c0.07-0.3,0.16-0.44,0.2-0.78
		c0.2-0.04,0.19-0.02,0.29-0.1c0.58,0.11,0.41,0.31,0.69,0.69c0.19,0.26,0.53,0.3,0.79,0.49c0.54,0.41,0.57,1.04,0.59,1.77
		c0.01,0.37,0.15,0.53,0,0.79c-0.07,0.23-0.1,0.22-0.2,0.39c-0.97,0.03-2.28,0.61-2.75,0.29c-1.05,0.02-0.95-0.32-1.37-0.88
		C231.45,135.2,231.8,135.81,232.26,135.2z M219.8,159.04h0.2C219.91,159.21,219.97,159.15,219.8,159.04z M225,156.88
		c-1,0.47-0.52,0.69-0.98,1.27c-0.37,0.27-1.81,0.26-2.06,0.1h-0.19c-0.06,0.36-0.04,0.39,0,0.78c-0.68-0.05-1.23-0.41-1.47,0.2
		h-0.2c0.07-0.75,0.47-0.69,0.69-1.18c0.12-0.26,0.05-0.58,0.2-0.79c0.22-0.3,0.94-0.63,1.28-0.79v-0.1
		c0.42,0.03,0.85,0.06,1.27,0.1c0.17-0.04,0.37-0.34,0.59-0.29c0.21,0.04,0.49,0.33,0.88,0.39V156.88z M244.53,147.95
		c-0.55,0.23-0.89,1.01-1.47,1.28c-0.75,0.34-1.01-0.08-1.47,0c-0.1,0.1-0.2,0.2-0.29,0.29c-0.66,0.26-1.4-0.19-1.86-0.29
		c-0.12,0.15-0.25,0.35-0.39,0.49c-0.1,0.08-0.02,0.04-0.2,0.1c-0.43-0.35-0.7-0.48-0.98-0.98c-0.64,0.08-0.78,0.6-1.18,0.59
		c-0.53-0.03-0.51-0.17-0.88-0.29c-0.03-0.16-0.07-0.33-0.1-0.49c-0.16-0.03-0.33-0.07-0.49-0.1c-0.06,0.2-0.13,0.39-0.2,0.59
		c-0.63,0.16-1.38,0.5-1.96,0.69c-0.42,0.13-0.73,0-1.08,0.2c-0.23,0.13-0.3,0.51-0.49,0.69c-0.35,0.32-0.89,0.4-1.18,0.78
		c-0.23,0.31-0.27,0.67-0.49,0.98c-0.33,0.33-0.66,0.65-0.98,0.98c-0.16,0.31-0.01,0.47-0.2,0.69c-0.43,0.73-1.7,0.18-2.06,0.39
		c-1.38,0.82-3.58,1.04-5-0.1c-0.31-0.25-0.17-0.63-0.39-0.98c-0.11-0.17-1.22-1-1.47-1.08c0.07-0.3,0.13-0.58,0.29-0.78h0.2
		c0.21-0.43-0.54-1.49-0.1-2.16c0.15-0.38,0.36-0.32,0.69-0.29c0.05-0.15,0.07-0.16,0.1-0.39c0.16-0.4-0.45-1.91-0.59-2.45
		c-0.1-0.4,0.22-0.8,0.29-1.08c0.03-0.26,0.06-0.52,0.1-0.79c0.14-0.17,0.89-0.3,1.08-0.39c0-0.36,0.13-0.86,0.1-1.08
		c-0.08-0.55-0.71-1.05-0.49-1.77c0.07-0.23,0.38-0.48,0.49-0.69c0.35-0.69,0.4-1.5,0.39-2.55c0.38-0.19,0.83-0.3,1.08-0.49
		c0.51,0.16,0.86,0.53,1.08,0.98c0.55,0,1.52,0.1,1.86-0.1c0.37-0.04,0.36-0.08,0.59-0.2v-0.29c0.42,0.03,0.85,0.07,1.28,0.1
		c-0.28,0.88-0.89,1.66-1.47,2.26c0.09,0.32-0.05,0.15,0.2,0.29c0.32,0.12,0.33-0.35,0.88-0.2c0.27,0.08,0.46,0.36,0.69,0.29
		c0.18-0.05,0.1-0.03,0.2-0.1c0.41,0.08,0.41,0.21,0.69,0.39c0.02,0.71,0.13,0.85,0.1,1.47c0.3,0.06,0.67,0.13,0.88,0.29
		c0.41-0.15,0.83-0.6,0.98-0.98c0.08-0.2-0.13-0.42-0.1-0.49c0.1-0.23,0.45-0.45,0.59-0.69c0.2-0.03,0.39-0.07,0.59-0.1
		c0.05-0.54,0.28-0.8,0.49-1.18c0.31,0.06,0.24,0.02,0.39,0.2c0.63-0.08,0.78-0.44,1.37-0.59v-0.29c0.29-0.03,1.03-0.23,1.18-0.2
		c0.41,0.09,0.59,0.69,0.98,0.79c0.43,0.1,0.44-0.35,0.78-0.29c0.24,0.04,0.66,0.42,0.88,0.49c0.46,0.06,0.92,0.13,1.37,0.2
		c1.26,0.48,2.46,1.34,3.73,1.86c0.73,0.3,1.24-0.11,1.77,0c0.59,0.12,1.99,1.48,2.26,1.96c1.2,2.15-0.71,3-1.18,4.41
		C245.77,147.82,245.15,147.89,244.53,147.95z"/>
</g>
<g id="Trademark">
	<g opacity="0.9">
        <g>
			<g>
				<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M202.51,202.88V122l-81.3,29.18v20.1l26.92-9.73v60.78
					L202.51,202.88z M170.07,101.22c-38.07,0-68.92,30.86-68.92,68.93c0,38.07,30.85,68.94,68.92,68.94
					c38.07,0,68.94-30.87,68.94-68.94C239.01,132.08,208.14,101.22,170.07,101.22z M170.07,89.38c44.63,0,80.8,36.17,80.8,80.78
					c0,44.61-36.17,80.79-80.8,80.79c-44.61,0-80.78-36.19-80.78-80.79C89.29,125.54,125.46,89.38,170.07,89.38z"/>
			</g>
		</g>
	</g>
</g>
</svg>

        </div>
        <div class="header__logo__wortmarke header__logo__wortmarke-ts">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 692 140" aria-hidden="true" role="img">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="#33322F" d="M101.9,71.9c0,11-7.6,22.3-19,22.3c-6.5,0-10.7-3.8-10.7-9.7
	c0-6.3,5.4-13.8,29.8-13.8v1.2H101.9z M200.7,113.1c0-12.7-8.5-20-23.7-20h-13c-8.5,0-12-1.5-12-5.5c0-2.3,1.4-4.5,4.5-5.8
	c2.4,0.4,5.9,0.8,8.9,0.8c20,0,30.5-11,30.5-26.1c0-5.9-2.3-10.9-5.9-13.7h11.9v-10h-23.8c-3.7-0.8-6.9-1.3-11-1.3
	c-19.6,0-30.8,12.3-30.8,27.1c0,8.9,3.4,16.1,10.3,20c-4.9,2.3-7.9,6.8-7.9,11.7c0,4.7,2.7,8.3,6.9,10.3
	c-6.2,3.2-11.6,9.9-11.6,18.2c0,13.4,11.4,20.6,29.5,20.6C185.4,139.5,200.7,127.9,200.7,113.1z M183.3,57.4
	c0,10.3-6.8,16.1-17.4,16.1c-11,0-17.4-5.6-17.4-16.1c0-9.4,6.6-16.4,17.8-16.4C177.1,41,183.3,47.1,183.3,57.4z M188.1,114.7
	c0,8.6-8.3,14.7-22.7,14.7c-11,0-18.9-4.5-18.9-12.8c0-5.4,3.5-10,9-12.8h17.9C183.3,103.7,188.1,107.9,188.1,114.7z M272.9,61
	c0-16.1-8.3-29.5-28.1-29.5c-19.9,0-31.3,15.7-31.3,36.7c0,24.7,11.6,36,33.2,36c8.7,0,16.9-1.6,23.7-4.4l-1.1-10.3
	c-5.6,2.7-13.3,4.4-20.5,4.4c-15,0-22.7-8-22.1-26.8h45.9C272.7,64.7,272.9,62.7,272.9,61z M259.9,58.1h-32.7
	c1.4-10.3,7.9-17.2,17.1-17.2C254.1,40.9,260.2,47.8,259.9,58.1z M333.7,81.9c0-23.6-32.7-15.2-32.7-30.6c0-6.1,4.7-10,14-10
	c4.7,0,9.7,0.8,14.1,2.3l0.3-10.6c-4.2-0.8-9.2-1.4-13.4-1.4c-18.3,0-28.1,9.2-28.1,21c0,24.7,32.6,15.1,32.6,30.8
	c0,6.5-6.3,10.7-15.7,10.7c-5.4,0-11-1-15.4-2.4L289,103c4.4,0.9,9.6,1.3,14.8,1.3C322.4,104.2,333.7,94.6,333.7,81.9z M395.6,80.8
	c0-22-26.2-19.3-26.2-28.1c0-3.2,2.5-5.4,8-5.4c4.2,0,8.8,0.6,12.4,1.7l0.4-16.8c-4-0.6-8.3-1.1-12.3-1.1c-20.7,0-31,10.7-31,23.4
	c0,23.3,25.8,17.8,25.8,28.1c0,3.3-3.4,5.5-8.9,5.5c-5.1,0-10.4-1-14.7-2.2l-0.4,17.5c4.5,0.6,9.6,1.1,14.5,1.1
	C382.9,104.5,395.6,95.3,395.6,80.8z M456.2,101.4l-1.7-18.2c-3.4,1.7-7.8,2.5-11.9,2.5c-9.7,0-14.5-6.6-14.5-17.4
	c0-11.6,4.9-18.6,14.8-18.6c3.8,0,7.5,0.9,11,2l2.3-18.6c-4.4-1.1-9-1.8-13.5-1.8c-25.7,0-37,17.6-37,38.8
	c0,22.6,10.9,34.3,32.2,34.3C444.6,104.4,451.4,103.2,456.2,101.4z M533.5,102.9V53.4c0-12.1-5.1-22.2-20.7-22.2
	c-10.4,0-18.1,4.5-22.2,11.1c0.7-4.4,1-10.3,1-14.4V0h-21.5v103h21.5V69.1c0-10.4,6.4-19.8,14-19.8c4.9,0,6.5,3.4,6.5,9v44.6
	C512.1,102.9,533.5,102.9,533.5,102.9z M609.5,102.9c-0.4-5.5-0.6-11.6-0.6-16.6V56.1C608.9,40,602.1,31,578,31
	c-8.8,0-18.2,1.8-25.4,4.1l1.7,17.8c5.8-3.1,14.3-5.1,20.5-5.1c9.3,0,12.5,2.8,12.5,8.6v2.7c-22.3,0-39.5,8.5-39.5,26.2
	c0,11.3,7.1,19.2,20.5,19.2c9.7,0,18.1-4.8,21.4-12.1c-0.4,3.5-0.4,7.2-0.4,10.6h20.2V102.9z M587.4,74.7c0,6.9-4.9,13.4-12.1,13.4
	c-4.5,0-7.1-2.5-7.1-6.1c0-5.1,3.7-9.3,19.2-9.3L587.4,74.7L587.4,74.7z M690.6,102.9V32.8H669v34c0,10.3-6.2,19.6-13.8,19.6
	c-4.9,0-6.5-3.4-6.5-9V32.8h-21.6v49.5c0,12.1,5.2,22.2,20.9,22.2c11.1,0,18.9-5.4,23.1-12.6c-0.4,3.4-0.6,8.5-0.6,11
	C670.5,102.9,690.6,102.9,690.6,102.9z M46.7,102.7V92c-2.8,0.7-6.4,1.3-9.6,1.3c-7.9,0-10-3.1-10-14.7V42.7h19.6v-9.9H27.1V6.6
	l-12.7,3.5v22.7H0v9.9h14.4v40.4c0,15.1,4.4,21,18.8,21C37.6,104.1,42.7,103.5,46.7,102.7z M114.9,102.9c-0.1-6.1-0.3-13.5-0.3-20.2
	V54.8c0-14-5.8-23.4-26-23.4c-9.3,0-17.8,2.3-24.5,5.1l1.3,10.9c6.1-3.7,14.5-5.8,21.2-5.8c11.6,0,15.4,5.2,15.4,15v5.2
	c-26.5,0-42.2,9.7-42.2,25.1c0,11.1,7.9,17.4,19.5,17.4s20.5-6.6,23.8-15.2c-0.4,4-0.4,9-0.4,14h12.2V102.9z"/>
</svg>

        </div>
    </div>
</a>


        
    
        <div id="jaas9d6sjkhd7" class="v-instance"
             data-v="{&quot;url&quot;:&quot;/json/headerapp&quot;}"
             data-v-type="HeaderApp">
        </div>
    


    </div>

    <button class="burger-button-animated" aria-haspopup="menu" aria-label="Menü öffnen" aria-expanded="false" aria-controls="burgernav" id="hauptnavigation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="icon icon--burger-menu" aria-hidden="true" role="img">
    <path class="firstline" d="M1.5,9.02h32c0.83,0,1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5h-32C0.67,6.02,0,6.69,0,7.52S0.67,9.02,1.5,9.02z"/>
    <path class="secondline" d="M33.5,16.02h-32c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5h32c0.83,0,1.5-0.67,1.5-1.5S34.33,16.02,33.5,16.02z"/>
    <path class="thirdline" d="M33.5,26.02h-32c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5h32c0.83,0,1.5-0.67,1.5-1.5S34.33,26.02,33.5,26.02z"/>
</svg>

    </button>

    
        
            
            
                
    
    <div class="header__horiz">
    <nav class="horizontal-nav" aria-label="Weitere Links und Brotkrümelpfad" id="navigation">
        <ul class="swipe article-breadcrumb" data-ts_component="breadcrumb-nav">
            <li class="home__icon anchored ">
                <a class="home mobile-view" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.18 89.59" class="icon icon--home" role="img" aria-hidden="true"><title>Startseite</title><path d="M94.67,44.62,49.11.62a2.29,2.29,0,0,0-3.06,0L.49,44.62C-.64,45.71.29,47.4,2,47.4H14.69V88a1.8,1.8,0,0,0,1.94,1.65H35.48A1.78,1.78,0,0,0,37.42,88V61.92a1.8,1.8,0,0,1,1.94-1.62H55.84a1.8,1.8,0,0,1,1.94,1.62V88a1.8,1.8,0,0,0,1.89,1.64H78.52A1.8,1.8,0,0,0,80.46,88V86.2h0V47.41H93.14C94.84,47.41,95.84,45.72,94.67,44.62Z" transform="translate(0 -0.03)"/></svg>

                    <span>Startseite</span>
                </a>
            </li>

            <li>
                <a href="/faktenfinder">Faktenfinder</a>
            </li>
            <li class="article-breadcrumb__title">
                <span class="article-breadcrumb__title--inside">Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder</span>
            </li>
        </ul>
    </nav>
    </div>

            
        
    


    

</header>

        
    <div class="burger-navi-holder">
        <div class="burger-navi" data-js_component="burgernavi-component" >
            <div class="burger-navi-menu">
                
<div class="burger-navi-search">
    <form class="searchfield searchfield--fullwidth " data-js_component="searchfield" role="search" data-config='{"baseUrl":"/suche"}' method="GET">
        <label>Suchbegriff</label>
        <input name="searchText" class="searchfield__input" type="text" placeholder="Suche">
        <button class="searchfield__reset hidden-s hidden-m" type="reset" title="Suchfeld-Eingabe löschen"></button>
        <input class="searchfield__submit" type="submit" title="Suche starten" value="">
        <span class="searchfield__icon">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" class="icon icon--search" role="img">
    <title>Suche</title>
    <path d="M37,72.5C18,72.5,2.5,57,2.5,38S18,3.5,37,3.5S71.5,19,71.5,38S56,72.5,37,72.5z M37,8.5
	C20.7,8.5,7.5,21.7,7.5,38c0,16.3,13.2,29.5,29.5,29.5c16.3,0,29.5-13.2,29.5-29.5C66.5,21.7,53.3,8.5,37,8.5z"/>
    <path d="M61.9,67.3l27.8,27.5l5-4.9L67,62.4"/>
</svg>

        </span>
    </form>
</div>

                

    
        <nav class="burger-navi-nav" aria-label="Hauptnavigation" id="burgernav">
            <ul class="burger-panel">
                
    
    
        
            
                
    
    <li>
        <a href="/inland" class="burger-panel__pagelink" title="Menüpunkt Inland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Inland</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-0" aria-controls="burgernav-0-0" >
                <span data-nosnippet class="visually-hidden">Untermenü Inland einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland" class="burger-panel__pagelink" title="Menüpunkt Ausland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Ausland</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-1" aria-controls="burgernav-0-1" >
                <span data-nosnippet class="visually-hidden">Untermenü Ausland einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft" class="burger-panel__pagelink" title="Menüpunkt Wirtschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wirtschaft</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-2" aria-controls="burgernav-0-2" >
                <span data-nosnippet class="visually-hidden">Untermenü Wirtschaft einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen" class="burger-panel__pagelink" title="Menüpunkt Wissen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wissen</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-3" aria-controls="burgernav-0-3" >
                <span data-nosnippet class="visually-hidden">Untermenü Wissen einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/faktenfinder" class="burger-panel__pagelink" title="Menüpunkt Faktenfinder aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Faktenfinder</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-4" aria-controls="burgernav-0-4" >
                <span data-nosnippet class="visually-hidden">Untermenü Faktenfinder einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/investigativ" class="burger-panel__pagelink" title="Menüpunkt Investigativ aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Investigativ</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahl" class="burger-panel__pagelink" title="Menüpunkt Wahlen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wahlen</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-6" aria-controls="burgernav-0-6" >
                <span data-nosnippet class="visually-hidden">Untermenü Wahlen einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter" class="burger-panel__pagelink" title="Menüpunkt Wetter aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wetter</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-7" aria-controls="burgernav-0-7" >
                <span data-nosnippet class="visually-hidden">Untermenü Wetter einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/livestreams" class="burger-panel__pagelink" title="Menüpunkt tagesschau24 LIVE aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau24 LIVE</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia" class="burger-panel__pagelink" title="Menüpunkt Videos &amp; Audios aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Videos &amp; Audios</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-9" aria-controls="burgernav-0-9" >
                <span data-nosnippet class="visually-hidden">Untermenü Videos &amp; Audios einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="" class="burger-panel__pagelink" title="Menüpunkt Mehr aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mehr</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-10" aria-controls="burgernav-0-10" >
                <span data-nosnippet class="visually-hidden">Untermenü Mehr einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
    

                
    <li>
        <a href="javascript:void(0)" class="burger-panel__pagelink burger-panel__submenulink burger-panel__submenulink--fullwidth" data-rel="sub_settings" role="button" aria-expanded="false" aria-controls="burgernav-settings" title="Zu den Einstellungen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true"></span>
            <span data-nosnippet class="burger-panel__pagelink-text">Einstellungen</span> <span data-nosnippet class="visually-hidden">einblenden</span>
            <span class="burger-panel__arrow--right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

            </span>
        </a>
    </li>


            </ul>
        </nav>

        <nav class="burger-navi-nav__sublevel" aria-label="Subnavigationen 2. Ebene">
            
                
                    
                        <ul class="burger-panel sub0-0" id="burgernav-0-0" aria-label="Untermenü Inland" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Inland ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Inland</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/inland" class="burger-panel__pagelink" title="Menüpunkt Startseite Inland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Inland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/innenpolitik" class="burger-panel__pagelink" title="Menüpunkt Innenpolitik aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Innenpolitik</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/gesellschaft" class="burger-panel__pagelink" title="Menüpunkt Gesellschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Gesellschaft</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional" class="burger-panel__pagelink" title="Menüpunkt Regional aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Regional</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-0-3" aria-controls="burgernav-0-0-3" >
                <span data-nosnippet class="visually-hidden">Untermenü Regional einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/deutschlandtrend" class="burger-panel__pagelink" title="Menüpunkt DeutschlandTrend aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">DeutschlandTrend</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahl" class="burger-panel__pagelink" title="Menüpunkt Wahlen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wahlen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/mittendrin" class="burger-panel__pagelink" title="Menüpunkt Mittendrin aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mittendrin</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-1" id="burgernav-0-1" aria-label="Untermenü Ausland" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Ausland ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Ausland</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/ausland" class="burger-panel__pagelink" title="Menüpunkt Startseite Ausland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Ausland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/europa" class="burger-panel__pagelink" title="Menüpunkt Europa aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Europa</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/amerika" class="burger-panel__pagelink" title="Menüpunkt Amerika aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Amerika</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/afrika" class="burger-panel__pagelink" title="Menüpunkt Afrika aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Afrika</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/asien" class="burger-panel__pagelink" title="Menüpunkt Asien aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Asien</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/ozeanien" class="burger-panel__pagelink" title="Menüpunkt Ozeanien aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Ozeanien</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/korrespondenten" class="burger-panel__pagelink" title="Menüpunkt Studios und Korrespondenten aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Studios und Korrespondenten</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-2" id="burgernav-0-2" aria-label="Untermenü Wirtschaft" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wirtschaft ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wirtschaft</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wirtschaft" class="burger-panel__pagelink" title="Menüpunkt Startseite Wirtschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wirtschaft</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wirtschaft/boersenkurse/" class="burger-panel__pagelink" title="Menüpunkt Börsenkurse aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Börsenkurse</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/verbraucher" class="burger-panel__pagelink" title="Menüpunkt Verbraucher aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Verbraucher</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/unternehmen" class="burger-panel__pagelink" title="Menüpunkt Unternehmen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Unternehmen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/konjunktur" class="burger-panel__pagelink" title="Menüpunkt Konjunktur aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Konjunktur</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/arbeitsmarkt" class="burger-panel__pagelink" title="Menüpunkt Arbeitsmarkt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Arbeitsmarkt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/finanzen" class="burger-panel__pagelink" title="Menüpunkt Finanzen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Finanzen</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-2-6" aria-controls="burgernav-0-2-6" >
                <span data-nosnippet class="visually-hidden">Untermenü Finanzen einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/weltwirtschaft" class="burger-panel__pagelink" title="Menüpunkt Weltwirtschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Weltwirtschaft</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/energie" class="burger-panel__pagelink" title="Menüpunkt Energie aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Energie</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/digitales" class="burger-panel__pagelink" title="Menüpunkt Digitales aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Digitales</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-3" id="burgernav-0-3" aria-label="Untermenü Wissen" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wissen ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wissen</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wissen" class="burger-panel__pagelink" title="Menüpunkt Startseite Wissen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wissen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/gesundheit" class="burger-panel__pagelink" title="Menüpunkt Gesundheit aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Gesundheit</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/klima" class="burger-panel__pagelink" title="Menüpunkt Klima &amp; Umwelt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Klima &amp; Umwelt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/forschung" class="burger-panel__pagelink" title="Menüpunkt Forschung aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Forschung</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/technologie" class="burger-panel__pagelink" title="Menüpunkt Technologie aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Technologie</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-4" id="burgernav-0-4" aria-label="Untermenü Faktenfinder" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Faktenfinder ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Faktenfinder</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/faktenfinder/kontext" class="burger-panel__pagelink" title="Menüpunkt Kontext aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Kontext</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                
                    
                        <ul class="burger-panel sub0-6" id="burgernav-0-6" aria-label="Untermenü Wahlen" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wahlen ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wahlen</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wahl" class="burger-panel__pagelink" title="Menüpunkt Startseite Wahlergebnisse aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wahlergebnisse</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wahl/uebersicht-der-wahlen.shtml" class="burger-panel__pagelink" title="Menüpunkt Übersicht der Wahlen seit 1946 aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Übersicht der Wahlen seit 1946</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente" class="burger-panel__pagelink" title="Menüpunkt Länderparlamente aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Länderparlamente</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-6-2" aria-controls="burgernav-0-6-2" >
                <span data-nosnippet class="visually-hidden">Untermenü Länderparlamente einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/bundestag" class="burger-panel__pagelink" title="Menüpunkt Bundestagswahl aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bundestagswahl</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/europaeisches_parlament" class="burger-panel__pagelink" title="Menüpunkt Europäisches Parlament aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Europäisches Parlament</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/chronologie" class="burger-panel__pagelink" title="Menüpunkt Chronologie aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Chronologie</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/wahltermine" class="burger-panel__pagelink" title="Menüpunkt Wahltermine aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wahltermine</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-7" id="burgernav-0-7" aria-label="Untermenü Wetter" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wetter ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wetter</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wetter" class="burger-panel__pagelink" title="Menüpunkt Startseite Wetter aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wetter</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wetter/deutschland/wettervorhersage-deutschland-100.html" class="burger-panel__pagelink" title="Menüpunkt Deutschland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Deutschland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/europa-welt" class="burger-panel__pagelink" title="Menüpunkt Europa &amp; Welt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Europa &amp; Welt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wetter/unwetter/" class="burger-panel__pagelink" title="Menüpunkt Unwetter aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Unwetter</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland" class="burger-panel__pagelink" title="Menüpunkt Regenradar aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Regenradar</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-7-4" aria-controls="burgernav-0-7-4" >
                <span data-nosnippet class="visually-hidden">Untermenü Regenradar einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/wetterthema" class="burger-panel__pagelink" title="Menüpunkt Wetterthema aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wetterthema</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                
                    
                        <ul class="burger-panel sub0-9" id="burgernav-0-9" aria-label="Untermenü Videos &amp; Audios" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Videos &amp; Audios ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Videos &amp; Audios</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/multimedia" class="burger-panel__pagelink" title="Menüpunkt Startseite Videos &amp; Audios aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Videos &amp; Audios</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/livestreams" class="burger-panel__pagelink" title="Menüpunkt Livestream aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Livestream</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesschau_in_100_sekunden" class="burger-panel__pagelink" title="Menüpunkt tagesschau in 100 Sekunden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau in 100 Sekunden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/letzte_sendung" class="burger-panel__pagelink" title="Menüpunkt Letzte Sendung aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Letzte Sendung</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesschau_20_uhr" class="burger-panel__pagelink" title="Menüpunkt tagesschau 20 Uhr aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau 20 Uhr</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesschau_mit_gebaerdensprache" class="burger-panel__pagelink" title="Menüpunkt tagesschau 20 Uhr (Gebärdensprache) aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau 20 Uhr (Gebärdensprache)</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesthemen" class="burger-panel__pagelink" title="Menüpunkt tagesthemen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesthemen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/archiv/sendungen" class="burger-panel__pagelink" title="Menüpunkt Sendungsarchiv aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sendungsarchiv</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/podcast" class="burger-panel__pagelink" title="Menüpunkt Podcasts aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Podcasts</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/bilder" class="burger-panel__pagelink" title="Menüpunkt Bilder aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bilder</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-10" id="burgernav-0-10" aria-label="Untermenü Mehr" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Mehr ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Mehr</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="https://meta.tagesschau.de" class="burger-panel__pagelink" title="Menüpunkt Ihre Meinung aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Ihre Meinung</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/kontakt" class="burger-panel__pagelink" title="Menüpunkt Kontakt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Kontakt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/korrekturen" class="burger-panel__pagelink" title="Menüpunkt Korrekturen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Korrekturen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/impressum" class="burger-panel__pagelink" title="Menüpunkt Impressum aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Impressum</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/datenschutz" class="burger-panel__pagelink" title="Menüpunkt Datenschutz aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Datenschutz</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/infoservices" class="burger-panel__pagelink" title="Menüpunkt Wo Sie uns sonst noch finden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wo Sie uns sonst noch finden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ueber-uns" class="burger-panel__pagelink" title="Menüpunkt Über uns aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Über uns</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/mehr/spendenkonten" class="burger-panel__pagelink" title="Menüpunkt Spendenkonten aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Spendenkonten</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/archiv" class="burger-panel__pagelink" title="Menüpunkt Archiv aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Archiv</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/archiv/allemeldungen" class="burger-panel__pagelink" title="Menüpunkt 7-Tage-Überblick aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">7-Tage-Überblick</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/thema" class="burger-panel__pagelink" title="Menüpunkt Themen-Überblick aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Themen-Überblick</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
            
            
    <ul class="burger-panel sub_settings burger-panel__settings" aria-label="Einstellungen" id="burgernav-settings" >
        <li>
            <a href="#" class="burger-panel__closelink" role="button" >
                <span data-nosnippet class="visually-hidden">Untermenü Einstellungen ausblenden</span>
                <span class="burger-panel__arrow--left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                        </span>
                <span data-nosnippet class="burger-panel__closelink-text">Einstellungen</span>
            </a>
        </li>
        <li class="settings__box__outer">
            <div data-ts_component="settings__box" class="columns twelve settings__box active">
                <div data-ts_component="header__navigation__list--more" class="header__navigation__list--more header__navigation--settings">
                    <form class="form--settings">
                        <fieldset class="basic-settings">
                            <legend class="hidden">Anzeige Fußballticker</legend>
                            <span class="v-instance" data-v='
                             {
                                 "service_name": "fussball",
                                 "embed_type": "opt-in",
                                 "display_type": "switch",
                                 "service_label": "Fußballticker in Kopfzeile zeigen:",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="basic-settings">
                            <legend class="hidden">Statistische Analysen („AGF-Zählpixel“ der Firma Nielsen</legend>
                            <span class="v-instance" data-v='
                                 {
                                     "service_name": "optOutTracking",
                                     "embed_type": "opt-in",
                                     "display_type": "switch",
                                     "service_label": "Widerspruch: Es sollen keine Daten für statistische Analysen übermittelt werden.",
                                     "service_long_label": ""
                                 }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="basic-settings basic-settings--darkmode">
                            <legend class="hidden">Darkmode Einstellungen</legend>
                            <span class="v-instance" data-v='
                             {
                                 "service_name": "darkmode",
                                 "embed_type": "opt-in",
                                 "display_type": "switch",
                                 "service_label": "Darkmode aktivieren:",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="basic-settings">
                            <legend class="hidden">Video-Preview Einstellungen</legend>
                            <span class="v-instance" data-v='
                             {
                                 "service_name": "disablesparkpreview",
                                 "embed_type": "opt-in",
                                 "display_type": "switch",
                                 "service_label": "Video-Vorschau deaktivieren:",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="thirdparty-settings">
                            <legend class="hidden">Auswahl externer Anbieter</legend>
                            <label class="form-label">Externe Anbieter: <span>&nbsp;Inhalte zeigen von</span></label>
                            <ul class="settings__list-wrapper">
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "twitter",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "X",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "youtube",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "Youtube",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "twentythreedegrees",
                                 "embed_type": "opt-out",
                                 "display_type": "checkbox",
                                 "service_label": "23degrees",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "facebook",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "Facebook",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "instagram",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "Instagram",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "messengerpeople",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "MessengerPeople",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                            </ul>
                        </fieldset>
                    </form>
                    <div class="columns twelve m-six m-offset-six l-offset-none l-twelve">
                        <a class="btn btn--text btn--tongue btn--fullwidth" href="/datenschutz"  role="button">
                            <span class="btn__label">Datenschutzerklärung</span>
                            <span class="btn__label--alternative"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>


        </nav>

        <nav class="burger-navi-nav__sublevel" aria-label="Subnavigationen 3. Ebene">
            
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-0-3" id="burgernav-0-0-3" aria-label="Untermenü Regional" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Regional ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Regional</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/inland/regional/badenwuerttemberg" class="burger-panel__pagelink" title="Menüpunkt Baden-Württemberg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Baden-Württemberg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/bayern" class="burger-panel__pagelink" title="Menüpunkt Bayern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bayern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/berlin" class="burger-panel__pagelink" title="Menüpunkt Berlin aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Berlin</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/brandenburg" class="burger-panel__pagelink" title="Menüpunkt Brandenburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Brandenburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/bremen" class="burger-panel__pagelink" title="Menüpunkt Bremen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bremen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/hamburg" class="burger-panel__pagelink" title="Menüpunkt Hamburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hamburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/hessen" class="burger-panel__pagelink" title="Menüpunkt Hessen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hessen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/mecklenburgvorpommern" class="burger-panel__pagelink" title="Menüpunkt Mecklenburg-Vorpommern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mecklenburg-Vorpommern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/niedersachsen" class="burger-panel__pagelink" title="Menüpunkt Niedersachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Niedersachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/nordrheinwestfalen" class="burger-panel__pagelink" title="Menüpunkt Nordrhein-Westfalen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Nordrhein-Westfalen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/rheinlandpfalz" class="burger-panel__pagelink" title="Menüpunkt Rheinland-Pfalz aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Rheinland-Pfalz</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/saarland" class="burger-panel__pagelink" title="Menüpunkt Saarland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Saarland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/sachsen" class="burger-panel__pagelink" title="Menüpunkt Sachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/sachsenanhalt" class="burger-panel__pagelink" title="Menüpunkt Sachsen-Anhalt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen-Anhalt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/schleswigholstein" class="burger-panel__pagelink" title="Menüpunkt Schleswig-Holstein aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Schleswig-Holstein</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/thueringen" class="burger-panel__pagelink" title="Menüpunkt Thüringen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Thüringen</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-2-6" id="burgernav-0-2-6" aria-label="Untermenü Finanzen" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Finanzen ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Finanzen</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/wirtschaft/finanzen/marktberichte" class="burger-panel__pagelink" title="Menüpunkt Marktberichte aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Marktberichte</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                        
                    
                
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-6-2" id="burgernav-0-6-2" aria-label="Untermenü Länderparlamente" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Länderparlamente ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Länderparlamente</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/baden-wuerttemberg" class="burger-panel__pagelink" title="Menüpunkt Baden-Württemberg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Baden-Württemberg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/bayern" class="burger-panel__pagelink" title="Menüpunkt Bayern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bayern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/berlin" class="burger-panel__pagelink" title="Menüpunkt Berlin aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Berlin</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/brandenburg" class="burger-panel__pagelink" title="Menüpunkt Brandenburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Brandenburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/bremen" class="burger-panel__pagelink" title="Menüpunkt Bremen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bremen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/hamburg" class="burger-panel__pagelink" title="Menüpunkt Hamburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hamburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/hessen" class="burger-panel__pagelink" title="Menüpunkt Hessen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hessen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/mecklenburg-vorpommern" class="burger-panel__pagelink" title="Menüpunkt Mecklenburg-Vorpommern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mecklenburg-Vorpommern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/niedersachsen" class="burger-panel__pagelink" title="Menüpunkt Niedersachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Niedersachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/nordrhein-westfalen" class="burger-panel__pagelink" title="Menüpunkt Nordrhein-Westfalen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Nordrhein-Westfalen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/rheinland-pfalz" class="burger-panel__pagelink" title="Menüpunkt Rheinland-Pfalz aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Rheinland-Pfalz</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/saarland" class="burger-panel__pagelink" title="Menüpunkt Saarland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Saarland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/sachsen" class="burger-panel__pagelink" title="Menüpunkt Sachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/sachsen-anhalt" class="burger-panel__pagelink" title="Menüpunkt Sachsen-Anhalt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen-Anhalt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/schleswig-holstein" class="burger-panel__pagelink" title="Menüpunkt Schleswig-Holstein aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Schleswig-Holstein</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/thueringen" class="burger-panel__pagelink" title="Menüpunkt Thüringen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Thüringen</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-7-4" id="burgernav-0-7-4" aria-label="Untermenü Regenradar" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Regenradar ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Regenradar</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/norden" class="burger-panel__pagelink" title="Menüpunkt Norden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Norden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/osten" class="burger-panel__pagelink" title="Menüpunkt Osten aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Osten</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/sueden" class="burger-panel__pagelink" title="Menüpunkt Süden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Süden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/westen" class="burger-panel__pagelink" title="Menüpunkt Westen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Westen</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                        
                    
                
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
            
        </nav>
    






            </div>
            
    <div class="bigfive">
        <ul class="bigfive__list" aria-label="Menü ARD-Angebote">
            <li>
                <a class="bigfive__link" href="//www.sportschau.de" title="Zur Sportschau.de" >
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_sportschau.png" alt="Sportschau Logo" />
                    <span class="bigfive__text">Sportschau</span>
                </a>
            </li>
            <li>
                <a class="bigfive__link" href="//www.ardmediathek.de" title="Zur ARD-Mediathek">
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_mediathek.png" alt="Mediathek Logo" />
                    <span class="bigfive__text">Mediathek</span>
                </a>
            </li>
            <li>
                <a class="bigfive__link" href="//www.ardaudiothek.de" title="Zur ARD-Audiothek" >
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_audiothek.png" alt="Audiothek Logo" />
                    <span class="bigfive__text">Audiothek</span>
                </a>
            </li>
            <li>
                <a class="bigfive__link" href="//www.kika.de" title="Zu KiKa.de">
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_kika.png" alt="KiKA Logo" />
                    <span class="bigfive__text">KiKA</span>
                </a>
            </li>
        </ul>
    </div>


        </div>
    </div>



        <main class="content-wrapper content-wrapper--show-cuts" aria-label="Inhalt">
            <div class="layout-container">
                <div class="layout-content" id="content">
                    <article class="container content-wrapper__group">
                        
    
    

    <div class="seitenkopf">
        
            
                
                    
                
                <div class="seitenkopf__media columns twelve m-twelve">
                    
                    
                    

    <div class="ts-picture__wrapper">
        <picture class="ts-picture ts-picture--topbanner">
            <source type="image/webp" media="(max-width: 420px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBxuyw/16x9-640/hamburg-demo-114.webp"/>
            <source type="image/webp" media="(max-width: 767px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBxvls/16x9-768/hamburg-demo-114.webp"/>
            <source type="image/webp" media="(max-width:  1023px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBx3ic/20x9-960/hamburg-demo-114.webp"/>
            <source type="image/webp" media="(min-width: 1024px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBx2rU/20x9-1280/hamburg-demo-114.webp"/>
            <source type="image/jpeg" media="(max-width: 420px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBxuyw/16x9-640/hamburg-demo-114.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBxvls/16x9-768/hamburg-demo-114.jpg"/>
            <source type="image/jpeg" media="(max-width:  1023px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBx3ic/20x9-960/hamburg-demo-114.jpg"/>
            <source type="image/jpeg" media="(min-width: 1024px)" srcset="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBx2rU/20x9-1280/hamburg-demo-114.jpg"/>
            <img class="ts-image" src="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBx2rU/20x9-1280/hamburg-demo-114.jpg" alt="Der Jungfernstieg und die anliegenden Bereiche sind mit Demonstranten gefüllt." title="Der Jungfernstieg und die anliegenden Bereiche sind mit Demonstranten gefüllt. | dpa"/>
        </picture>
        <noscript>
            <img class="ts-image" src="https://images.tagesschau.de/image/3051f0a9-566f-43f2-9d25-57d2f8e454a6/AAABjTDOI-o/AAABibBx2rU/20x9-1280/hamburg-demo-114.jpg" alt="Der Jungfernstieg und die anliegenden Bereiche sind mit Demonstranten gefüllt." title="Der Jungfernstieg und die anliegenden Bereiche sind mit Demonstranten gefüllt. | dpa"/>
        </noscript>
    </div>

                </div>
            
        

        
            
                
            
        
        <div class="seitenkopf__data columns twelve  m-ten  m-offset-one l-eight l-offset-two">
            <div class="seitenkopf__title">
                <div class="seitenkopf__label">
                <span class="label label--small">
                    <strong>faktenfinder</strong>
                </span>
                </div>
                <h1 class="seitenkopf__headline">
                    <span class="seitenkopf__topline">Massenproteste gegen rechts</span>
                    <span class="seitenkopf__headline--text">Falsche Behauptungen über Demo-Bilder</span>
                </h1>
                <p class="metatextline">Stand: 22.01.2024 11:53 Uhr</p>
            </div>
        </div>
    </div>


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz columns twelve  m-ten  m-offset-one l-eight l-offset-two">
        <strong>In zahlreichen Städten sind am Wochenende Menschen auf die Straße gegangen, um gegen Rechtsextremismus zu demonstrieren. Einige behaupten jedoch, Bilder von den Menschenmassen seien manipuliert - zu Unrecht.</strong>
    </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    

    
        <div class="copytext-element-wrapper columns twelve">
            <div class="columns twelve m-ten  m-offset-one l-eight l-offset-two">
                <div class="authorline">
                    <div class="authorline__inner">
                        
                            <div class="authorline__img-wrapper">
                                
                                
                                        <a class="authorline__link" href="/korrespondenten/pascal-siggelkow-101.html">
                                            <img class="authorline__img"
                                                 alt="Pascal Siggelkow, SWR"
                                                 src="https://images.tagesschau.de/image/2761a1b3-ee71-4953-8955-51ae869aab2e/AAABhyepock/AAABibBxx9M/1x1-144/siggelkow-pascal-101.jpg"/>
                                        </a>
                                
                            </div>
                        
                        <div class="authorline__author">Von <a
                                    class="authorline__link"
                                    href="/korrespondenten/pascal-siggelkow-101.html">Pascal Siggelkow</a>, ARD-faktenfinder
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
"Bestellte Massen demonstrieren gegen die AfD. Doch bei den in den Medien veröffentlichten Bildern fallen inzwischen zahlreiche Fälle von Bildmanipulationen auf. Warum haben sie das nötig?" Diese Sätze schrieb Björn Höcke, Fraktionsvorsitzender der AfD in Thüringen, auf dem Kurzmitteilungsdienst X. Dazu teilte er ein Bild, auf dem ein Foto von der Demo gegen rechts in Hamburg zu sehen ist. Darauf steht zudem: "Die Demonstration in Hamburg war laut ZDF so überfüllt, daß die Menschen sogar in der Alster stehen mußten...[sic]"</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Höcke bezog sich mit seinem Post auf zwei im Netz kursierende Bilder, die vor allem in rechten Kreisen verbreitet wurden. Sie sollten vermeintlich belegen, dass die Bilder von der <a href="/inland/demo-hamburg-126.html" title="Wieder demonstrieren Zehntausende gegen Rechtsextremismus">Kundgebung in Hamburg</a> von den Medien manipuliert worden seien, um die Teilnehmerzahl höher aussehen zu lassen, als sie eigentlich war. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Auf dem ersten Bild, gepostet vom Hamburger Senat, ist eine Luftaufnahme der Demo auf dem Hamburger Jungfernstieg zu sehen. Die Menschen stehen auf der Reesendammbrücke, die die Binnenalster von der Kleinen Alster trennt. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            <div>
    
    
        
        
            <div class="copytext__embed copytext__embed--socialmedia copytext__embed--twitter columns twelve  m-ten  m-offset-one l-eight l-offset-two">
                <div class="v-instance" data-v="{
  &quot;embed_url&quot; : &quot;https://twitter.com/Senat_Hamburg/status/1748360331812892708&quot;,
  &quot;embed_id&quot; : &quot;1748360331812892708&quot;,
  &quot;service_name&quot; : &quot;twitter&quot;,
  &quot;service_label&quot; : &quot;X&quot;,
  &quot;service_privacyText&quot; : &quot;&quot;,
  &quot;disclaimer_url&quot; : &quot;//www.tagesschau.de/datenschutz&quot;,
  &quot;embed_type&quot; : &quot;opt-in&quot;
}" data-v-type="ExternalEmbed">
                </div>
            </div>
        
    
</div>
        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Das zweite Bild ist ebenfalls eine Luftaufnahme der Szenerie - aus einer etwas anderen Perspektive. Auf diesem Bild wird der Eindruck erweckt, die Menschen würden plötzlich zum Teil dort stehen, wo auf dem ersten Bild bereits das Wasser der Kleinen Alster beginnt. Für Höcke und viele andere im Netz steht fest: Das zweite Bild wurde manipuliert, damit die Menschenmasse noch größer wirkt. Doch das ist falsch.</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Aufgenommen wurde das Bild von einem Fotografen der Nachrichtenagentur dpa. Daher wurde es auch von einigen Medien verwendet, die auf das Bildmaterial der dpa zurückgreifen. Die dpa teilte dazu bereits am Wochenende unter dem Post von Höcke mit, dass es sich um ein Original-Foto handele, "an dem selbstverständlich nichts manipuliert wurde".</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            <div>
    
    
        
        
            <div class="copytext__embed copytext__embed--socialmedia copytext__embed--twitter columns twelve  m-ten  m-offset-one l-eight l-offset-two">
                <div class="v-instance" data-v="{
  &quot;embed_url&quot; : &quot;https://twitter.com/dpa/status/1748793509920829692&quot;,
  &quot;embed_id&quot; : &quot;1748793509920829692&quot;,
  &quot;service_name&quot; : &quot;twitter&quot;,
  &quot;service_label&quot; : &quot;X&quot;,
  &quot;service_privacyText&quot; : &quot;&quot;,
  &quot;disclaimer_url&quot; : &quot;//www.tagesschau.de/datenschutz&quot;,
  &quot;embed_type&quot; : &quot;opt-in&quot;
}" data-v-type="ExternalEmbed">
                </div>
            </div>
        
    
</div>
        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Dass das Bild im Vergleich zu dem anderen geteilten Foto den Eindruck erwecken könnte, die Menschen stünden auf dem Wasser, liegt vielmehr an dem Perspektivunterschied. Das erste Bild ist zum einen von weiter oben aufgenommen worden. Dadurch bietet das Bild einen besseren Blick auf die Brücke und das Wasser auf beiden Seiten. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Das zweite Bild wurde hingegen von weiter unten aufgenommen, zudem aus einem leicht anderen Winkel. Das lässt sich gut anhand markanter Gebäude im Hintergrund wie dem Fernsehturm erkennen. Aus dieser Perspektive ist das Wasser der Kleinen Alster durch die Menschen im Vordergrund nicht mehr zu sehen. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            <div>
    
    
        
        
            <div class="copytext__embed copytext__embed--socialmedia copytext__embed--twitter columns twelve  m-ten  m-offset-one l-eight l-offset-two">
                <div class="v-instance" data-v="{
  &quot;embed_url&quot; : &quot;https://twitter.com/mbutscher/status/1748936221462561063&quot;,
  &quot;embed_id&quot; : &quot;1748936221462561063&quot;,
  &quot;service_name&quot; : &quot;twitter&quot;,
  &quot;service_label&quot; : &quot;X&quot;,
  &quot;service_privacyText&quot; : &quot;&quot;,
  &quot;disclaimer_url&quot; : &quot;//www.tagesschau.de/datenschutz&quot;,
  &quot;embed_type&quot; : &quot;opt-in&quot;
}" data-v-type="ExternalEmbed">
                </div>
            </div>
        
    
</div>
        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Hinweise auf eine gezielte Manipulation des Bildes gibt es hingegen nicht. Zudem bestätigen zahlreiche weitere Aufnahmen von der Demonstration, dass der Jungfernstieg und die anliegenden Straßen komplett voll waren. Aufgrund der zu vielen Teilnehmer wurde die Versammlung schließlich von der Polizei aus Sicherheitsgründen aufgelöst.</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    

        
    

    

    
        
        
        
        
        
            <div class="copytext-element-wrapper columns twelve copytext-element-wrapper--overlap  ">
    
    
    
    <div class="copytext-element-wrapper__divider columns twelve m-ten m-offset-one l-eight l-offset-two">
        <span class="divider"></span>
    </div>
    <div class="columns twelve l-nine l-offset-one">
        
            <div class="teaser-absatz columns">
                
                    <div class="teaser-absatz__media columns four m-three">
                        
                            
                                
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.jpg" alt="Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus" title="Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus | dpa"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128.jpg" alt="Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus" title="Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus | dpa"/>
        </noscript>
    </div>

                                
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus&quot;,&quot;playerType&quot;:&quot;video&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_absatz&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxx9M/1x1-144/demo-hamburg-128&quot;},{&quot;minWidth&quot;:144,&quot;value&quot;:&quot;https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBxyuw/1x1-256/demo-hamburg-128&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBx0AU/1x1-432/demo-hamburg-128&quot;},{&quot;minWidth&quot;:432,&quot;value&quot;:&quot;https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBx0zc/1x1-640/demo-hamburg-128&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/03b1fdc3-b25d-4332-acda-9d12ed7ea102/AAABjSLdhK4/AAABibBx1ms/1x1-840/demo-hamburg-128&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus&quot;,&quot;av_content_id&quot;:&quot;video-1296410&quot;,&quot;av_content_duration&quot;:197000,&quot;av_content_type&quot;:&quot;Video&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesthemen&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-19T21:56:12Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-19T21:45:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296410.html&quot;}},&quot;trackingAgf@all&quot;:{&quot;appId&quot;:&quot;PE6FF1BB7-FE88-4674-B083-2772ADAD55E9&quot;,&quot;playerID&quot;:&quot;video-1296410&quot;,&quot;clipData&quot;:{&quot;type&quot;:&quot;content&quot;,&quot;assetid&quot;:&quot;video-1296410_0&quot;,&quot;program&quot;:&quot;tagesthemen&quot;,&quot;title&quot;:&quot;Das Erste_tagesthemen_Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus_2024.01.19 21:56:12&quot;,&quot;length&quot;:&quot;197&quot;,&quot;nol_c0&quot;:&quot;p0,0&quot;,&quot;nol_c2&quot;:&quot;p2,N&quot;,&quot;nol_c5&quot;:&quot;p5,https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296410.html&quot;,&quot;nol_c7&quot;:&quot;p7,video-1296410&quot;,&quot;nol_c8&quot;:&quot;p8,197&quot;,&quot;nol_c9&quot;:&quot;p9,tagesthemen_Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus_2024.01.19 21:56:12&quot;,&quot;nol_c10&quot;:&quot;p10,Das Erste&quot;,&quot;nol_c12&quot;:&quot;p12,Content&quot;,&quot;nol_c15&quot;:&quot;p15,X005256162&quot;,&quot;nol_c16&quot;:&quot;p16,ARD_Information&quot;,&quot;nol_c18&quot;:&quot;p18,N&quot;,&quot;nol_c20&quot;:&quot;p20,&quot;},&quot;sfcode&quot;:&quot;eu&quot;,&quot;prod&quot;:&quot;vc&quot;,&quot;apn&quot;:&quot;ardplayer&quot;,&quot;agfMetaDataSDK&quot;:{&quot;censuscategory&quot;:&quot;Das Erste_tagesthemen_Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus_2024.01.19 21:56:12&quot;,&quot;livestream&quot;:&quot;no&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;subtitles&quot;:[{&quot;kind&quot;:&quot;normal&quot;,&quot;languageCode&quot;:&quot;de&quot;,&quot;sources&quot;:[{&quot;kind&quot;:&quot;ebutt&quot;,&quot;url&quot;:&quot;/multimedia/sendung/tagesthemen/ut-79976.xml&quot;}]}],&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0119/TV-20240119-2151-0800.webs.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:480,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0119/TV-20240119-2151-0800.webm.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:640,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0119/TV-20240119-2151-0800.webl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:960,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0119/TV-20240119-2151-0800.webxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1280,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0119/TV-20240119-2151-0800.webxxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1920,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://adaptive.tagesschau.de/i/video/2024/0119/TV-20240119-2151-0800,.webm.h264.mp4,.webxxl.h264.mp4,.webxl.h264.mp4,.webl.h264.mp4,.webs.h264.mp4,.csmil/master.m3u8&quot;,&quot;mimeType&quot;:&quot;application/vnd.apple.mpegurl&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:false}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus | dpa&quot;,&quot;alt&quot;:&quot;Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus | dpa&quot;,&quot;alt&quot;:&quot;Bis zu 100.000 Menschen demonstrierten in Hamburg gegen Rechtsextremismus&quot;}],&quot;title&quot;:&quot;Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296410.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Bundesweit demonstrieren Zehntausende gegen Rechtsextremismus (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296410~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayerInlinePlay">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    

                            
                        
                    </div>
                    <div class="teaser-absatz__teaserinfo columns eight m-nine" role="complementary" aria-label="Kasten" >
                        <a class="teaser-absatz__link"
                           href="/inland/demo-hamburg-126.html">
                            <div class="teaser-absatz__teaserheadline">
                                <p class="teaser-absatz__topline-container">
                                    
                                    
                                        <span class="teaser-absatz__date">19.01.2024</span>
                                    
                                </p>
                                <h3 class="teaser-absatz__headline-wrapper">
                                    <span class="teaser-absatz__topline">Mehr Teilnehmende als erwartet</span>
                                    <span class="teaser-absatz__headline">Bundesweit demonstrieren wieder Zehntausende gegen rechts</span>
                                </h3>
                            </div>
                            <div class="teaser-absatz__shorttext-container">
                                <p class="teaser-absatz__shorttext">Die größte Demonstration gab es in Hamburg.
                                    <span class="link-extend ">mehr</span>
                                </p>
                            </div>
                        </a>
                    </div>
                
            </div>
        
    </div>
    <div class="copytext-element-wrapper__divider columns twelve m-ten m-offset-one l-eight l-offset-two">
        <span class="divider"></span>
    </div>
</div>
        
    

    


                        
                            
    
    
    

    
        
            
    
    
    <h2 id="Fehlendes-Eis-kein-Hinweis-auf-Manipulation" class="meldung__subhead columns twelve  m-ten  m-offset-one l-eight l-offset-two liveblog--anchor">Fehlendes Eis kein Hinweis auf Manipulation</h2>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Auch ein weiterer Vorwurf der Bildmanipulation dreht sich um die Demo in Hamburg. Auch dieser wurde vor allem von rechten Kreisen verbreitet. Wieder sind zwei Luftaufnahmen zu sehen: Eine mit deutlich weniger Menschen als auf der anderen. Dabei sind auf dem Bild in der Binnenalster einige Eisschollen zu sehen, auf dem anderen nicht. Auch das zeige aus Sicht einiger User, dass das Bild mit den Menschenmassen manipuliert sei. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Dabei gibt es auch hier einen Erklärungsansatz. Der Unterschied der Menschenanzahl deutet darauf hin, dass das eine Bild mit einigem zeitlichen Abstand zum anderen aufgenommen wurde. Somit ist es möglich, dass beispielsweise die Eisschollen in der Zwischenzeit schlicht von der Strömung weggetrieben worden sind. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Die Hamburger Wasserschutzpolizei, die während der Kundgebung auf der Binnenalster unterwegs war, teilt auf Anfrage von <em>tagesschau.de</em> mit, dass es keine größeren Eisschollen auf dem Wasser gab und es nicht zu Beeinträchtigungen dadurch kam.</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Auch hier spricht aber vor allem gegen eine Manipulation, dass es viele weitere Bilder und Videos gibt, die ebenfalls die Menschenmassen zeigen. </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    

        
    

    

    
        
        
        
        
        
            <div class="copytext-element-wrapper columns twelve copytext-element-wrapper--overlap  ">
    
    
    
    <div class="copytext-element-wrapper__divider columns twelve m-ten m-offset-one l-eight l-offset-two">
        <span class="divider"></span>
    </div>
    <div class="columns twelve l-nine l-offset-one">
        
            <div class="teaser-absatz columns">
                
                    <div class="teaser-absatz__media columns four m-three">
                        
                            
                                
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.jpg" alt="Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus." title="Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus. | AFP"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100.jpg" alt="Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus." title="Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus. | AFP"/>
        </noscript>
    </div>

                                
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Zehntausende protestieren erneut gegen rechts&quot;,&quot;playerType&quot;:&quot;video&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_absatz&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxx9M/1x1-144/frankfurt-ffm-demo-100&quot;},{&quot;minWidth&quot;:144,&quot;value&quot;:&quot;https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBxyuw/1x1-256/frankfurt-ffm-demo-100&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBx0AU/1x1-432/frankfurt-ffm-demo-100&quot;},{&quot;minWidth&quot;:432,&quot;value&quot;:&quot;https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBx0zc/1x1-640/frankfurt-ffm-demo-100&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/fa18599e-50f5-4388-baf4-74416c6bd19a/AAABjScc29w/AAABibBx1ms/1x1-840/frankfurt-ffm-demo-100&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Zehntausende protestieren erneut gegen rechts&quot;,&quot;av_content_id&quot;:&quot;video-1296636&quot;,&quot;av_content_duration&quot;:32000,&quot;av_content_type&quot;:&quot;Video&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesschau&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-20T17:09:44Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-20T17:00:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/video/video-1296636.html&quot;}},&quot;trackingAgf@all&quot;:{&quot;appId&quot;:&quot;PE6FF1BB7-FE88-4674-B083-2772ADAD55E9&quot;,&quot;playerID&quot;:&quot;video-1296636&quot;,&quot;clipData&quot;:{&quot;type&quot;:&quot;content&quot;,&quot;assetid&quot;:&quot;video-1296636_0&quot;,&quot;program&quot;:&quot;tagesschau&quot;,&quot;title&quot;:&quot;Das Erste_tagesschau_Zehntausende protestieren erneut gegen rechts_2024.01.20 17:09:44&quot;,&quot;length&quot;:&quot;32&quot;,&quot;nol_c0&quot;:&quot;p0,0&quot;,&quot;nol_c2&quot;:&quot;p2,N&quot;,&quot;nol_c5&quot;:&quot;p5,https://www.tagesschau.de/multimedia/video/video-1296636.html&quot;,&quot;nol_c7&quot;:&quot;p7,video-1296636&quot;,&quot;nol_c8&quot;:&quot;p8,32&quot;,&quot;nol_c9&quot;:&quot;p9,tagesschau_Zehntausende protestieren erneut gegen rechts_2024.01.20 17:09:44&quot;,&quot;nol_c10&quot;:&quot;p10,Das Erste&quot;,&quot;nol_c12&quot;:&quot;p12,Content&quot;,&quot;nol_c15&quot;:&quot;p15,X005426789&quot;,&quot;nol_c16&quot;:&quot;p16,ARD_Information&quot;,&quot;nol_c18&quot;:&quot;p18,N&quot;,&quot;nol_c20&quot;:&quot;p20,&quot;},&quot;sfcode&quot;:&quot;eu&quot;,&quot;prod&quot;:&quot;vc&quot;,&quot;apn&quot;:&quot;ardplayer&quot;,&quot;agfMetaDataSDK&quot;:{&quot;censuscategory&quot;:&quot;Das Erste_tagesschau_Zehntausende protestieren erneut gegen rechts_2024.01.20 17:09:44&quot;,&quot;livestream&quot;:&quot;no&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0120/TV-20240120-1705-0100.webs.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:480,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0120/TV-20240120-1705-0100.webm.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:640,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0120/TV-20240120-1705-0100.webl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:960,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0120/TV-20240120-1705-0100.webxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1280,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0120/TV-20240120-1705-0100.webxxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1920,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://adaptive.tagesschau.de/i/video/2024/0120/TV-20240120-1705-0100,.webm.h264.mp4,.webxxl.h264.mp4,.webxl.h264.mp4,.webl.h264.mp4,.webs.h264.mp4,.csmil/master.m3u8&quot;,&quot;mimeType&quot;:&quot;application/vnd.apple.mpegurl&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:false}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus. | AFP&quot;,&quot;alt&quot;:&quot;Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus.&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus. | AFP&quot;,&quot;alt&quot;:&quot;Menschen demonstrieren in Frankfurt am Main gegen Rechtsextremismus.&quot;}],&quot;title&quot;:&quot;Zehntausende protestieren erneut gegen rechts&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/video/video-1296636.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Zehntausende protestieren erneut gegen rechts | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Zehntausende protestieren erneut gegen rechts | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Zehntausende protestieren erneut gegen rechts (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/video/video-1296636~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayerInlinePlay">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    

                            
                        
                    </div>
                    <div class="teaser-absatz__teaserinfo columns eight m-nine" role="complementary" aria-label="Kasten" >
                        <a class="teaser-absatz__link"
                           href="/inland/gesellschaft/demonstrationen-gegen-rechts-100.html">
                            <div class="teaser-absatz__teaserheadline">
                                <p class="teaser-absatz__topline-container">
                                    
                                    
                                        <span class="teaser-absatz__date">20.01.2024</span>
                                    
                                </p>
                                <h3 class="teaser-absatz__headline-wrapper">
                                    <span class="teaser-absatz__topline">Gegen Rechtsextremismus</span>
                                    <span class="teaser-absatz__headline">Wieder demonstrieren Zehntausende Menschen</span>
                                </h3>
                            </div>
                            <div class="teaser-absatz__shorttext-container">
                                <p class="teaser-absatz__shorttext">Das Treffen rechter und rechtsextremer Gruppen in Potsdam empört viele Menschen.
                                    <span class="link-extend ">mehr</span>
                                </p>
                            </div>
                        </a>
                    </div>
                
            </div>
        
    </div>
    <div class="copytext-element-wrapper__divider columns twelve m-ten m-offset-one l-eight l-offset-two">
        <span class="divider"></span>
    </div>
</div>
        
    

    


                        
                            
    
    
    

    
        
            
    
    
    <h2 id="Bild-von-Demo-in-Koeln-nicht-KI-generiert" class="meldung__subhead columns twelve  m-ten  m-offset-one l-eight l-offset-two liveblog--anchor">Bild von Demo in Köln nicht KI-generiert</h2>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Nicht nur zu der Demonstration in Hamburg gibt es falsche Manipulationsvorwürfe, auch nach der Kundgebung <a href="/inland/regional/nordrheinwestfalen/demo-rechtsextremismus-koeln-100.html" title="Zehntausende demonstrieren in Köln gegen Rechtsextremismus">vergangene Woche in Köln</a> gab es solche Posts in den sozialen Netzwerken. Vor allem eine Luftaufnahme vom Heumarkt rückte dabei in den Fokus. Das Bild zeigt, wie der Platz voll mit Menschen ist. Einige rechte Accounts behaupteten jedoch, dass das Foto mit Künstlicher Intelligenz generiert worden sei. Auch das ist falsch.</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
Der Urheber des Bildes hat auf seinem Instagramkanal gleich mehrere Drohnenaufnahmen gepostet, darunter auch ein Video. Sie alle zeigen den Heumarkt von verschiedenen Perspektiven. Auf allen diesen Aufnahmen sind Menschenmassen zu sehen. Zudem deckt sich das auch mit weiterem Bildmaterial von Nachrichtenagenturen und anderen Nutzern in den sozialen Netzwerken. Nach Polizeiangaben hatten etwa 30.000 Menschen an der Demonstration teilgenommen.</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            <div>
    
    
        
        
            <div class="copytext__embed copytext__embed--socialmedia copytext__embed--twitter columns twelve  m-ten  m-offset-one l-eight l-offset-two">
                <div class="v-instance" data-v="{
  &quot;embed_url&quot; : &quot;https://twitter.com/StefanLeifert/status/1747615650111992006&quot;,
  &quot;embed_id&quot; : &quot;1747615650111992006&quot;,
  &quot;service_name&quot; : &quot;twitter&quot;,
  &quot;service_label&quot; : &quot;X&quot;,
  &quot;service_privacyText&quot; : &quot;&quot;,
  &quot;disclaimer_url&quot; : &quot;//www.tagesschau.de/datenschutz&quot;,
  &quot;embed_type&quot; : &quot;opt-in&quot;
}" data-v-type="ExternalEmbed">
                </div>
            </div>
        
    
</div>
        
    

    

    

    


                        
                        


                        <div class="meldungsfooter columns twelve m-ten m-offset-one l-eight l-offset-two">
    

    
         <ul class="taglist">
        
            <li class="taglist__element">
                <a class="tag-btn tag-btn--light-grey" href="/thema/rechtsextremismus">Rechtsextremismus</a>
            </li>
        
            <li class="taglist__element">
                <a class="tag-btn tag-btn--light-grey" href="/thema/demonstration">Demonstration</a>
            </li>
        
    </ul>
    

    <div class="sendungsbezug">
         <p><span class="sendungsbezug--title">Dieses Thema im Programm: </span>Über dieses Thema berichtete tagesschau24 am 22. Januar 2024 um 09:00 Uhr.</p>
    </div>

    

    <nav class="socialbuttons" aria-label="Social-Media-Links, E-Mail und Drucken-Funktion">

    <ul class="socialbuttons__list">

        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="http://www.facebook.de" onclick="window.open(&quot;https:\/\/www.facebook.com\/sharer.php?u=https:\/\/www.tagesschau.de\/faktenfinder\/demonstrationen-rechtsextremismus-bilder-100.html\u0026t=Falsche%20Behauptungen%20%C3%BCber%20Demo-Bilder\u0026desc=&quot;); return false;">
                <span class="socialbuttons__icon"><svg version="1.1" class="icon icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><title>Facebook</title>
<path d="M24 0C10.75 0 0 10.75 0 24C0 37.25 10.75 48 24 48C37.25 48 48 37.25 48 24C48 10.75 37.25 0 24 0ZM31 15.39H28.8C26.61 15.39 25.94 16.72 25.94 18.08V21.31H30.8L30.03 26.28H25.94V36.84H20.46V26.28H16V21.31H20.46V17.52C20.46 13.22 23.07 10.84 27.08 10.84C28.99 10.84 31 11.18 31 11.18V15.4V15.39Z" fill="#1C76ED"/>
<path d="M20.46 17.5201V21.3101H16V26.2801H20.46V36.8401H25.94V26.2801H30.03L30.8 21.3101H25.94V18.0801C25.94 16.7301 26.61 15.3901 28.8 15.3901H31V11.1701C31 11.1701 28.99 10.8301 27.08 10.8301C23.07 10.8301 20.46 13.2101 20.46 17.5101V17.5201Z" fill="white"/>
</svg>
</span>
                <span class="socialbuttons__subline">Facebook</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="http://www.twitter.de" onclick="window.open(&quot;https:\/\/twitter.com\/intent\/tweet?text=Falsche%20Behauptungen%20%C3%BCber%20Demo-Bilder\u0026url=https:\/\/www.tagesschau.de\/faktenfinder\/demonstrationen-rechtsextremismus-bilder-100.html&quot;); return false;">
                <span class="socialbuttons__icon"><svg version="1.1" class="icon icon--x-social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><title>X</title>
<path d="M41.8 7.9C37.41 3.05 31.06 0 24 0C10.75 0 0 10.75 0 24C0 30.06 2.25 35.6 5.96 39.82C10.36 44.83 16.81 48 24 48C37.25 48 48 37.25 48 24C48 17.8 45.65 12.16 41.8 7.9ZM28.86 36.53L22.31 27.01L14.11 36.53H12L21.37 25.63L12 12H19.14L25.34 21.02L33.1 12H35.21L26.28 22.38L36 36.53H28.86Z" fill="black"/>
<path d="M24.22 22.3201L18.13 13.6001H14.88L22.43 24.4001L23.38 25.7601L29.85 35.0101H33.09L25.17 23.6701L24.22 22.3201Z" fill="black"/>
<path d="M35.21 12H33.1L25.34 21.02L19.14 12H12L21.37 25.63L12 36.53H14.11L22.31 27.01L28.86 36.53H36L26.28 22.38L35.21 12ZM33.09 35.01H29.84L23.37 25.76L22.42 24.41L14.87 13.61H18.12L24.21 22.33L25.16 23.68L33.08 35.01H33.09Z" fill="white"/>
</svg>
</span>
                <span class="socialbuttons__subline">X</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="http://www.whatsapp.com" onclick="window.open(&quot;https:\/\/api.whatsapp.com\/send?text=https:\/\/www.tagesschau.de\/faktenfinder\/demonstrationen-rechtsextremismus-bilder-100.html&quot;); return false" >
                <span class="socialbuttons__icon"><svg version="1.1" class="icon icon--whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><title>Whatsapp</title>
<path d="M24 13.5898C18.27 13.5898 13.59 18.2598 13.59 23.9998C13.59 25.8198 14.08 27.6298 15 29.2198L15.55 30.1698L15.27 31.2198L14.69 33.3098L16.78 32.7298L17.83 32.4498L18.78 32.9998C20.37 33.9298 22.17 34.4098 24 34.4098C29.73 34.4098 34.41 29.7398 34.41 23.9998C34.41 18.2598 29.74 13.5898 24 13.5898ZM30.75 28.4498C30.46 29.1898 29.09 29.8698 28.42 29.9698C26.96 30.1598 24.28 29.1598 24.3 29.1898C20.84 27.7998 18.59 24.5798 18.41 24.3698C18.23 24.1598 17 22.6398 17 21.0598C17 19.4798 17.89 18.7098 18.2 18.3898C18.51 18.0698 18.89 17.9898 19.12 17.9898C19.35 17.9898 19.58 17.9898 19.78 17.9898C19.99 18.0098 20.27 17.9198 20.55 18.5398C20.84 19.1798 21.53 20.7398 21.62 20.9098C21.7 21.0698 21.77 21.2598 21.65 21.4698C20.99 22.6898 20.28 22.6498 20.64 23.2098C21.98 25.3398 23.3 26.0698 25.33 27.0098C25.66 27.1698 25.87 27.1498 26.07 26.9298C26.28 26.7098 26.94 25.9898 27.17 25.6698C27.4 25.3398 27.63 25.3998 27.94 25.5098C28.26 25.6198 29.96 26.3798 30.3 26.5398C30.64 26.6898 30.87 26.7698 30.96 26.9198C31.04 27.0598 31.04 27.6898 30.76 28.4398L30.75 28.4498Z" fill="#00D856"/>
<path d="M41.8 7.9C37.41 3.05 31.06 0 24 0C10.75 0 0 10.75 0 24C0 30.06 2.25 35.6 5.96 39.82C10.36 44.83 16.81 48 24 48C37.25 48 48 37.25 48 24C48 17.8 45.65 12.16 41.8 7.9ZM24 37C21.62 37 19.4 36.36 17.48 35.23L11 37L12.77 30.52C11.66 28.6 11 26.38 11 24C11 16.82 16.82 11 24 11C31.18 11 37 16.82 37 24C37 31.18 31.18 37 24 37Z" fill="#00D856"/>
<path d="M24 11C16.82 11 11 16.82 11 24C11 26.38 11.65 28.6 12.77 30.52L11 37L17.48 35.23C19.4 36.35 21.62 37 24 37C31.18 37 37 31.18 37 24C37 16.82 31.18 11 24 11ZM24 34.41C22.18 34.41 20.37 33.92 18.78 33L17.83 32.45L16.78 32.73L14.69 33.31L15.27 31.22L15.55 30.17L15 29.22C14.07 27.63 13.59 25.83 13.59 24C13.59 18.27 18.26 13.59 24 13.59C29.74 13.59 34.41 18.26 34.41 24C34.41 29.74 29.74 34.41 24 34.41Z" fill="white"/>
<path d="M30.29 26.5598C29.95 26.3998 28.25 25.6298 27.93 25.5298C27.62 25.4198 27.39 25.3698 27.16 25.6898C26.93 26.0098 26.27 26.7198 26.06 26.9498C25.86 27.1598 25.65 27.1898 25.32 27.0298C23.29 26.0898 21.97 25.3598 20.63 23.2298C20.27 22.6698 20.98 22.7098 21.64 21.4898C21.75 21.2798 21.69 21.0898 21.61 20.9298C21.53 20.7698 20.84 19.1998 20.54 18.5598C20.26 17.9398 19.98 18.0298 19.77 18.0098C19.57 18.0098 19.34 18.0098 19.11 18.0098C18.88 18.0098 18.5 18.0898 18.19 18.4098C17.88 18.7298 16.99 19.4998 16.99 21.0798C16.99 22.6598 18.22 24.1698 18.4 24.3898C18.58 24.5998 20.83 27.8198 24.29 29.2098C24.28 29.1798 26.96 30.1898 28.41 29.9898C29.08 29.8898 30.45 29.2198 30.74 28.4698C31.02 27.7298 31.02 27.0898 30.94 26.9498C30.86 26.7998 30.63 26.7298 30.28 26.5698L30.29 26.5598Z" fill="white"/>
</svg>
</span>
                <span class="socialbuttons__subline">WhatsApp</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="mailto:?subject=Link-Tipp:%20Massenproteste%20gegen%20rechts:%20Falsche%20Behauptungen%20%C3%BCber%20Demo-Bilder%20(tagesschau.de)&amp;body=Link-Tipp:%20Massenproteste%20gegen%20rechts:%20Falsche%20Behauptungen%20%C3%BCber%20Demo-Bilder%20(tagesschau.de)%0Ahttps://www.tagesschau.de/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html%0A%0A">
                <span class="socialbuttons__icon--functional"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="icon icon--mail" role="img"><title>Mail</title>
	<path d="M43.9,7.2H2.3l20.1,15.9c0.9,0.7,2.2,0.7,3-0.1L43.9,7.2z"/>
	<path d="M13.7,22.3L0,11.5v25.8C0,37.2,13.7,22.3,13.7,22.3z"/>
	<path d="M48,10L34,22l14,15.2V10z"/>
	<path d="M30.4,25.1l-4.8,4.1c-0.9,0.7-2.2,0.8-3,0.1l-5.1-4L3.2,40.8h41.5C44.7,40.8,30.4,25.1,30.4,25.1z"/>
</svg>
</span>
                <span class="socialbuttons__subline">Mail</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="JavaScript:window.print();">
                <span class="socialbuttons__icon--functional"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="icon icon--print" role="img"><title>Drucken</title>
<path d="M42.6453 18.4824H5.33547C2.39904 18.4824 0 20.8815 0 23.8563V34.5848C0 36.0818 1.18992 37.2525 2.66773 37.2525H8.0032V42.6264C8.0032 45.582 10.4022 48.0002 13.3387 48.0002H34.6613C37.5978 48.0002 39.9968 45.582 39.9968 42.6264V37.2525H45.3323C46.8101 37.2525 48 36.0434 48 34.5848V23.8563C48 20.9007 45.6201 18.4824 42.6645 18.4824H42.6453ZM34.6421 37.2525V42.6264H13.3195V34.5848H34.6421V37.2525ZM37.2907 29.2109C35.8129 29.2109 34.6421 28.0018 34.6421 26.5432C34.6421 25.0846 35.8321 23.8755 37.2907 23.8755C38.7493 23.8755 39.9584 25.0846 39.9584 26.5432C39.9584 28.0018 38.7685 29.2109 37.2907 29.2109Z"/>
<path d="M33.433 0.0191923H12.9164C9.86485 0.0191923 7.36985 2.22631 7.36985 4.93243V14.7589H12.9164V4.93243H31.1299L35.0452 8.40624V14.7589H40.5918V6.35266L33.433 0V0.0191923Z"/>
</svg>
</span>
                <span class="socialbuttons__subline">Drucken</span>
            </a>
        </li>
    </ul>
</nav>
</div>

                    </article>

                    <aside class="container">
                        
    
    
        
        
            <div class="columns twelve content-wrapper__group cuts--uppercut">
                <div class="trenner">
    

    
        <div class="trenner__text">
            
            <div class="trenner__text__headline">
                <h2>Mehr zum Thema</h2>
            </div>
        </div>
    
</div>

                <div class="columns twelve">
                    <ul class="list columns twelve">
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.jpg" alt="Teilnehmer einer Demonstration in München." title="Teilnehmer einer Demonstration in München. | AFP"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126.jpg" alt="Teilnehmer einer Demonstration in München." title="Teilnehmer einer Demonstration in München. | AFP"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Hunderttausende auf den Straßen - was bleibt von den Demos?&quot;,&quot;playerType&quot;:&quot;video&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxx9M/1x1-144/demo-muenchen-126&quot;},{&quot;minWidth&quot;:144,&quot;value&quot;:&quot;https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBxyuw/1x1-256/demo-muenchen-126&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBx0AU/1x1-432/demo-muenchen-126&quot;},{&quot;minWidth&quot;:432,&quot;value&quot;:&quot;https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBx0zc/1x1-640/demo-muenchen-126&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/7a692e2f-7f1a-405a-a786-551c99bfa0af/AAABjTFDUes/AAABibBx1ms/1x1-840/demo-muenchen-126&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Hunderttausende auf den Straßen - was bleibt von den Demos?&quot;,&quot;av_content_id&quot;:&quot;video-1297406&quot;,&quot;av_content_duration&quot;:163000,&quot;av_content_type&quot;:&quot;Video&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesthemen&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-22T22:30:15Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-22T21:45:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1297406.html&quot;}},&quot;trackingAgf@all&quot;:{&quot;appId&quot;:&quot;PE6FF1BB7-FE88-4674-B083-2772ADAD55E9&quot;,&quot;playerID&quot;:&quot;video-1297406&quot;,&quot;clipData&quot;:{&quot;type&quot;:&quot;content&quot;,&quot;assetid&quot;:&quot;video-1297406_0&quot;,&quot;program&quot;:&quot;tagesthemen&quot;,&quot;title&quot;:&quot;Das Erste_tagesthemen_Hunderttausende auf den Straßen - was bleibt von den Demos?_2024.01.22 22:30:15&quot;,&quot;length&quot;:&quot;163&quot;,&quot;nol_c0&quot;:&quot;p0,0&quot;,&quot;nol_c2&quot;:&quot;p2,N&quot;,&quot;nol_c5&quot;:&quot;p5,https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1297406.html&quot;,&quot;nol_c7&quot;:&quot;p7,video-1297406&quot;,&quot;nol_c8&quot;:&quot;p8,163&quot;,&quot;nol_c9&quot;:&quot;p9,tagesthemen_Hunderttausende auf den Straßen - was bleibt von den Demos?_2024.01.22 22:30:15&quot;,&quot;nol_c10&quot;:&quot;p10,Das Erste&quot;,&quot;nol_c12&quot;:&quot;p12,Content&quot;,&quot;nol_c15&quot;:&quot;p15,X005256271&quot;,&quot;nol_c16&quot;:&quot;p16,ARD_Information&quot;,&quot;nol_c18&quot;:&quot;p18,N&quot;,&quot;nol_c20&quot;:&quot;p20,&quot;},&quot;sfcode&quot;:&quot;eu&quot;,&quot;prod&quot;:&quot;vc&quot;,&quot;apn&quot;:&quot;ardplayer&quot;,&quot;agfMetaDataSDK&quot;:{&quot;censuscategory&quot;:&quot;Das Erste_tagesthemen_Hunderttausende auf den Straßen - was bleibt von den Demos?_2024.01.22 22:30:15&quot;,&quot;livestream&quot;:&quot;no&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;subtitles&quot;:[{&quot;kind&quot;:&quot;normal&quot;,&quot;languageCode&quot;:&quot;de&quot;,&quot;sources&quot;:[{&quot;kind&quot;:&quot;ebutt&quot;,&quot;url&quot;:&quot;/multimedia/sendung/tagesthemen/ut-80080.xml&quot;}]}],&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0122/TV-20240122-2153-5600.webs.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:480,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0122/TV-20240122-2153-5600.webm.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:640,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0122/TV-20240122-2153-5600.webl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:960,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0122/TV-20240122-2153-5600.webxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1280,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0122/TV-20240122-2153-5600.webxxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1920,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://adaptive.tagesschau.de/i/video/2024/0122/TV-20240122-2153-5600,.webm.h264.mp4,.webxxl.h264.mp4,.webxl.h264.mp4,.webl.h264.mp4,.webs.h264.mp4,.csmil/master.m3u8&quot;,&quot;mimeType&quot;:&quot;application/vnd.apple.mpegurl&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:false}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Teilnehmer einer Demonstration in München. | AFP&quot;,&quot;alt&quot;:&quot;Teilnehmer einer Demonstration in München.&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Teilnehmer einer Demonstration in München. | AFP&quot;,&quot;alt&quot;:&quot;Teilnehmer einer Demonstration in München.&quot;}],&quot;title&quot;:&quot;Hunderttausende auf den Straßen - was bleibt von den Demos?&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1297406.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Hunderttausende auf den Straßen - was bleibt von den Demos? | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Hunderttausende auf den Straßen - was bleibt von den Demos? | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Hunderttausende auf den Straßen - was bleibt von den Demos? (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1297406~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayerInlinePlay">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        <a class="teaser-xs__link" href="/inland/gesellschaft/demonstrationen-radikalisierung-afd-100.html">

            <p class="teaser-xs__topline-container">
                        
                        
                <span class="label label--small">
                            <strong>interview</strong>
                        </span>
                <span class="teaser-xs__date">22.01.2024 • 19:47 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Demonstrationen gegen rechts</span>
                <span class="teaser-xs__headline"> "Fast jeder kennt jemanden, der bei Protesten war"
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.jpg" alt="Bielefeld: Ein Schild mit der Aufschrift &quot;Hass ist keine Meinung&quot; ist bei der Demonstration &quot;Demokratie verteidigen&quot; zu sehen. " title="Bielefeld: Ein Schild mit der Aufschrift &quot;Hass ist keine Meinung&quot; ist bei der Demonstration &quot;Demokratie verteidigen&quot; zu sehen.  | dpa"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxyuw/1x1-256/plakat-gegen-hass-demo-100.jpg" alt="Bielefeld: Ein Schild mit der Aufschrift &quot;Hass ist keine Meinung&quot; ist bei der Demonstration &quot;Demokratie verteidigen&quot; zu sehen. " title="Bielefeld: Ein Schild mit der Aufschrift &quot;Hass ist keine Meinung&quot; ist bei der Demonstration &quot;Demokratie verteidigen&quot; zu sehen.  | dpa"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Politische Reaktionen auf Proteste gegen rechts in Deutschland&quot;,&quot;playerType&quot;:&quot;audio&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxsX4/16x9-256/plakat-gegen-hass-demo-100&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxtLY/16x9-384/plakat-gegen-hass-demo-100&quot;},{&quot;minWidth&quot;:384,&quot;value&quot;:&quot;https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxt-Y/16x9-512/plakat-gegen-hass-demo-100&quot;},{&quot;minWidth&quot;:512,&quot;value&quot;:&quot;https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxuyw/16x9-640/plakat-gegen-hass-demo-100&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxwXw/16x9-960/plakat-gegen-hass-demo-100&quot;},{&quot;minWidth&quot;:960,&quot;value&quot;:&quot;https://images.tagesschau.de/image/eb49b352-6cf8-4354-be5a-b23ac2dd82b4/AAABjSYlJcE/AAABibBxqrQ/16x9-1280/plakat-gegen-hass-demo-100&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Politische Reaktionen auf Proteste gegen rechts in Deutschland&quot;,&quot;av_content_id&quot;:&quot;audio-181252&quot;,&quot;av_content_duration&quot;:66000,&quot;av_content_type&quot;:&quot;Audio&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesschau&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-20T13:43:28Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-20T13:42:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/audio/audio-181252.html&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/audio/2024/0120/AU-20240120-1342-2400.mp3&quot;,&quot;mimeType&quot;:&quot;audio/mpeg&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/audio/2024/0120/AU-20240120-1342-2400.hi.mp3&quot;,&quot;mimeType&quot;:&quot;audio/mpeg&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:true}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;audio&quot;,&quot;title&quot;:&quot;Bielefeld: Ein Schild mit der Aufschrift \&quot;Hass ist keine Meinung\&quot; ist bei der Demonstration \&quot;Demokratie verteidigen\&quot; zu sehen.  | dpa&quot;,&quot;alt&quot;:&quot;Bielefeld: Ein Schild mit der Aufschrift \&quot;Hass ist keine Meinung\&quot; ist bei der Demonstration \&quot;Demokratie verteidigen\&quot; zu sehen. &quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;audio&quot;,&quot;title&quot;:&quot;Bielefeld: Ein Schild mit der Aufschrift \&quot;Hass ist keine Meinung\&quot; ist bei der Demonstration \&quot;Demokratie verteidigen\&quot; zu sehen.  | dpa&quot;,&quot;alt&quot;:&quot;Bielefeld: Ein Schild mit der Aufschrift \&quot;Hass ist keine Meinung\&quot; ist bei der Demonstration \&quot;Demokratie verteidigen\&quot; zu sehen. &quot;}],&quot;title&quot;:&quot;Politische Reaktionen auf Proteste gegen rechts in Deutschland&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/audio/audio-181252.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Politische Reaktionen auf Proteste gegen rechts in Deutschland | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Politische Reaktionen auf Proteste gegen rechts in Deutschland | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Politische Reaktionen auf Proteste gegen rechts in Deutschland (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/audio/audio-181252~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayer">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        <a class="teaser-xs__link" href="/inland/reaktionen-demos-rechts-100.html">

            <p class="teaser-xs__topline-container">
                        
                        
                
                            
                        
                <span class="teaser-xs__date">20.01.2024 • 16:03 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Bundesweite Kundgebungen</span>
                <span class="teaser-xs__headline"> Breite Unterstützung für Demos gegen rechts
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.jpg" alt="Menschen demonstrieren in Hamburg gegen Rechtsextremismus" title="Menschen demonstrieren in Hamburg gegen Rechtsextremismus | REUTERS"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxyuw/1x1-256/afd-demo-122.jpg" alt="Menschen demonstrieren in Hamburg gegen Rechtsextremismus" title="Menschen demonstrieren in Hamburg gegen Rechtsextremismus | REUTERS"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Demokratie in Gefahr?&quot;,&quot;playerType&quot;:&quot;audio&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxsX4/16x9-256/afd-demo-122&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxtLY/16x9-384/afd-demo-122&quot;},{&quot;minWidth&quot;:384,&quot;value&quot;:&quot;https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxt-Y/16x9-512/afd-demo-122&quot;},{&quot;minWidth&quot;:512,&quot;value&quot;:&quot;https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxuyw/16x9-640/afd-demo-122&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxwXw/16x9-960/afd-demo-122&quot;},{&quot;minWidth&quot;:960,&quot;value&quot;:&quot;https://images.tagesschau.de/image/90606409-8ba1-4cb5-85cf-ffb9aac65945/AAABjSKOZFU/AAABibBxqrQ/16x9-1280/afd-demo-122&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Demokratie in Gefahr?&quot;,&quot;av_content_id&quot;:&quot;audio-181192&quot;,&quot;av_content_duration&quot;:183000,&quot;av_content_type&quot;:&quot;Audio&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesschau&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-19T16:20:00Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-19T16:16:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/audio/audio-181192.html&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/audio/2024/0119/AU-20240119-1615-5200.mp3&quot;,&quot;mimeType&quot;:&quot;audio/mpeg&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/audio/2024/0119/AU-20240119-1615-5200.hi.mp3&quot;,&quot;mimeType&quot;:&quot;audio/mpeg&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:true}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;audio&quot;,&quot;title&quot;:&quot;Menschen demonstrieren in Hamburg gegen Rechtsextremismus | REUTERS&quot;,&quot;alt&quot;:&quot;Menschen demonstrieren in Hamburg gegen Rechtsextremismus&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;audio&quot;,&quot;title&quot;:&quot;Menschen demonstrieren in Hamburg gegen Rechtsextremismus | REUTERS&quot;,&quot;alt&quot;:&quot;Menschen demonstrieren in Hamburg gegen Rechtsextremismus&quot;}],&quot;title&quot;:&quot;Demokratie in Gefahr?&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/audio/audio-181192.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Demokratie in Gefahr? | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Demokratie in Gefahr? | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Demokratie in Gefahr? (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/audio/audio-181192~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayer">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        <a class="teaser-xs__link" href="/inland/gesellschaft/proteste-gegen-rechts-102.html">

            <p class="teaser-xs__topline-container">
                        
                        
                
                            
                        
                <span class="teaser-xs__date">19.01.2024 • 17:11 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Proteste gegen rechts</span>
                <span class="teaser-xs__headline"> "Die Sorge ist groß"
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    <a class="teaser-xs__link" href="/inland/scholz-gegen-rechtsextremismus-100.html">

        
        
            <div class="teaser-xs__media columns four">
                <div class="teaser-xs__image">
                    
                    
    
    <div class="ts-picture__wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.jpg" alt="Olaf Scholz" title="Olaf Scholz | dpa"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/88d451eb-6e71-4757-8413-c84f74f3bf01/AAABjRP2tqU/AAABibBxyuw/1x1-256/scholz-1296.jpg" alt="Olaf Scholz" title="Olaf Scholz | dpa"/>
        </noscript>
    </div>


                </div>
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        

            <p class="teaser-xs__topline-container">
                        
                        
                
                            
                        
                <span class="teaser-xs__date">19.01.2024 • 15:48 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Scholz in Videopodcast</span>
                <span class="teaser-xs__headline"> <span class="hyphenate">"Rechtsextremisten </span>greifen unsere Demokratie an"
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        
        </div>
        </div>
    </a>
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.jpg" alt="Demonstration &quot;Zeichen gegen Rechts · Kein Platz für Nazis&quot;: Demonstrierenden mit Schildern, auf denen &quot;EKELHAfD&quot; und &quot;Höcke = Nazi&quot; steht" title="Demonstration &quot;Zeichen gegen Rechts · Kein Platz für Nazis&quot;: Demonstrierenden mit Schildern, auf denen &quot;EKELHAfD&quot; und &quot;Höcke = Nazi&quot; steht | dpa"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100.jpg" alt="Demonstration &quot;Zeichen gegen Rechts · Kein Platz für Nazis&quot;: Demonstrierenden mit Schildern, auf denen &quot;EKELHAfD&quot; und &quot;Höcke = Nazi&quot; steht" title="Demonstration &quot;Zeichen gegen Rechts · Kein Platz für Nazis&quot;: Demonstrierenden mit Schildern, auf denen &quot;EKELHAfD&quot; und &quot;Höcke = Nazi&quot; steht | dpa"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen&quot;,&quot;playerType&quot;:&quot;video&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxx9M/1x1-144/demonstration-gegen-rechts-mainz-100&quot;},{&quot;minWidth&quot;:144,&quot;value&quot;:&quot;https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBxyuw/1x1-256/demonstration-gegen-rechts-mainz-100&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBx0AU/1x1-432/demonstration-gegen-rechts-mainz-100&quot;},{&quot;minWidth&quot;:432,&quot;value&quot;:&quot;https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBx0zc/1x1-640/demonstration-gegen-rechts-mainz-100&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/6c81bce3-6648-4c9f-8b43-e6851c50302b/AAABjSDvpUs/AAABibBx1ms/1x1-840/demonstration-gegen-rechts-mainz-100&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen&quot;,&quot;av_content_id&quot;:&quot;video-1296012&quot;,&quot;av_content_duration&quot;:180000,&quot;av_content_type&quot;:&quot;Video&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesthemen&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-18T22:24:01Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-18T22:15:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296012.html&quot;}},&quot;trackingAgf@all&quot;:{&quot;appId&quot;:&quot;PE6FF1BB7-FE88-4674-B083-2772ADAD55E9&quot;,&quot;playerID&quot;:&quot;video-1296012&quot;,&quot;clipData&quot;:{&quot;type&quot;:&quot;content&quot;,&quot;assetid&quot;:&quot;video-1296012_0&quot;,&quot;program&quot;:&quot;tagesthemen&quot;,&quot;title&quot;:&quot;Das Erste_tagesthemen_Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen_2024.01.18 22:24:01&quot;,&quot;length&quot;:&quot;180&quot;,&quot;nol_c0&quot;:&quot;p0,0&quot;,&quot;nol_c2&quot;:&quot;p2,N&quot;,&quot;nol_c5&quot;:&quot;p5,https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296012.html&quot;,&quot;nol_c7&quot;:&quot;p7,video-1296012&quot;,&quot;nol_c8&quot;:&quot;p8,180&quot;,&quot;nol_c9&quot;:&quot;p9,tagesthemen_Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen_2024.01.18 22:24:01&quot;,&quot;nol_c10&quot;:&quot;p10,Das Erste&quot;,&quot;nol_c12&quot;:&quot;p12,Content&quot;,&quot;nol_c15&quot;:&quot;p15,X005256127&quot;,&quot;nol_c16&quot;:&quot;p16,ARD_Information&quot;,&quot;nol_c18&quot;:&quot;p18,N&quot;,&quot;nol_c20&quot;:&quot;p20,&quot;},&quot;sfcode&quot;:&quot;eu&quot;,&quot;prod&quot;:&quot;vc&quot;,&quot;apn&quot;:&quot;ardplayer&quot;,&quot;agfMetaDataSDK&quot;:{&quot;censuscategory&quot;:&quot;Das Erste_tagesthemen_Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen_2024.01.18 22:24:01&quot;,&quot;livestream&quot;:&quot;no&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;subtitles&quot;:[{&quot;kind&quot;:&quot;normal&quot;,&quot;languageCode&quot;:&quot;de&quot;,&quot;sources&quot;:[{&quot;kind&quot;:&quot;ebutt&quot;,&quot;url&quot;:&quot;/multimedia/sendung/tagesthemen/ut-79950.xml&quot;}]}],&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0118/TV-20240118-2220-3500.webs.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:480,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0118/TV-20240118-2220-3500.webm.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:640,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0118/TV-20240118-2220-3500.webl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:960,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0118/TV-20240118-2220-3500.webxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1280,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0118/TV-20240118-2220-3500.webxxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1920,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://adaptive.tagesschau.de/i/video/2024/0118/TV-20240118-2220-3500,.webm.h264.mp4,.webxxl.h264.mp4,.webxl.h264.mp4,.webl.h264.mp4,.webs.h264.mp4,.csmil/master.m3u8&quot;,&quot;mimeType&quot;:&quot;application/vnd.apple.mpegurl&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:false}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Demonstration \&quot;Zeichen gegen Rechts · Kein Platz für Nazis\&quot;: Demonstrierenden mit Schildern, auf denen \&quot;EKELHAfD\&quot; und \&quot;Höcke = Nazi\&quot; steht | dpa&quot;,&quot;alt&quot;:&quot;Demonstration \&quot;Zeichen gegen Rechts · Kein Platz für Nazis\&quot;: Demonstrierenden mit Schildern, auf denen \&quot;EKELHAfD\&quot; und \&quot;Höcke = Nazi\&quot; steht&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Demonstration \&quot;Zeichen gegen Rechts · Kein Platz für Nazis\&quot;: Demonstrierenden mit Schildern, auf denen \&quot;EKELHAfD\&quot; und \&quot;Höcke = Nazi\&quot; steht | dpa&quot;,&quot;alt&quot;:&quot;Demonstration \&quot;Zeichen gegen Rechts · Kein Platz für Nazis\&quot;: Demonstrierenden mit Schildern, auf denen \&quot;EKELHAfD\&quot; und \&quot;Höcke = Nazi\&quot; steht&quot;}],&quot;title&quot;:&quot;Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296012.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Proteste auf den Straßen und Aussprache im Bundestag zu rechtsextremen Massenausweisungsplänen (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1296012~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayerInlinePlay">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline">
        
        

        <a class="teaser-xs__link" href="/inland/proteste-afd-102.html">

            <p class="teaser-xs__topline-container">
                        
                        
                
                            
                        
                <span class="teaser-xs__date">19.01.2024 • 10:30 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Proteste gegen rechts</span>
                <span class="teaser-xs__headline"> Wieder Tausende auf den Straßen
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                    </ul>
                </div>
            </div>
        
    
        
        
    
        
        
            <div class="columns twelve content-wrapper__group cuts--uppercut">
                <div class="trenner">
    

    
        <div class="trenner__text">
            
            <div class="trenner__text__headline">
                <h2>Mehr von Pascal Siggelkow</h2>
            </div>
        </div>
    
</div>

                <div class="columns twelve">
                    <ul class="list columns twelve">
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.jpg" alt="Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil." title="Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil. | REUTERS"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186.jpg" alt="Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil." title="Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil. | REUTERS"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;In vielen Städten werden weitere Demonstrationen gegen rechts erwartet&quot;,&quot;playerType&quot;:&quot;video&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxx9M/1x1-144/demo-berlin-186&quot;},{&quot;minWidth&quot;:144,&quot;value&quot;:&quot;https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBxyuw/1x1-256/demo-berlin-186&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBx0AU/1x1-432/demo-berlin-186&quot;},{&quot;minWidth&quot;:432,&quot;value&quot;:&quot;https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBx0zc/1x1-640/demo-berlin-186&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/1fa0a636-cf35-4bbb-91b2-6068009c6a5d/AAABjSyZgeY/AAABibBx1ms/1x1-840/demo-berlin-186&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;In vielen Städten werden weitere Demonstrationen gegen rechts erwartet&quot;,&quot;av_content_id&quot;:&quot;video-1296770&quot;,&quot;av_content_duration&quot;:19000,&quot;av_content_type&quot;:&quot;Video&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesschau24&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-21T09:04:28Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-21T09:00:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/video/video-1296770.html&quot;}},&quot;trackingAgf@all&quot;:{&quot;appId&quot;:&quot;PE6FF1BB7-FE88-4674-B083-2772ADAD55E9&quot;,&quot;playerID&quot;:&quot;video-1296770&quot;,&quot;clipData&quot;:{&quot;type&quot;:&quot;content&quot;,&quot;assetid&quot;:&quot;video-1296770_0&quot;,&quot;program&quot;:&quot;tagesschau24&quot;,&quot;title&quot;:&quot;Tagesschau24_tagesschau24_In vielen Städten werden weitere Demonstrationen gegen rechts erwartet_2024.01.21 09:04:28&quot;,&quot;length&quot;:&quot;19&quot;,&quot;nol_c0&quot;:&quot;p0,0&quot;,&quot;nol_c2&quot;:&quot;p2,N&quot;,&quot;nol_c5&quot;:&quot;p5,https://www.tagesschau.de/multimedia/video/video-1296770.html&quot;,&quot;nol_c7&quot;:&quot;p7,video-1296770&quot;,&quot;nol_c8&quot;:&quot;p8,19&quot;,&quot;nol_c9&quot;:&quot;p9,tagesschau24_In vielen Städten werden weitere Demonstrationen gegen rechts erwartet_2024.01.21 09:04:28&quot;,&quot;nol_c10&quot;:&quot;p10,Tagesschau24&quot;,&quot;nol_c12&quot;:&quot;p12,Content&quot;,&quot;nol_c16&quot;:&quot;p16,ARD_Information&quot;,&quot;nol_c18&quot;:&quot;p18,N&quot;,&quot;nol_c20&quot;:&quot;p20,&quot;},&quot;sfcode&quot;:&quot;eu&quot;,&quot;prod&quot;:&quot;vc&quot;,&quot;apn&quot;:&quot;ardplayer&quot;,&quot;agfMetaDataSDK&quot;:{&quot;censuscategory&quot;:&quot;Tagesschau24_tagesschau24_In vielen Städten werden weitere Demonstrationen gegen rechts erwartet_2024.01.21 09:04:28&quot;,&quot;livestream&quot;:&quot;no&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0121/TV-20240121-0901-5700.webs.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:480,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0121/TV-20240121-0901-5700.webm.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:640,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0121/TV-20240121-0901-5700.webl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:960,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0121/TV-20240121-0901-5700.webxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1280,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0121/TV-20240121-0901-5700.webxxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1920,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://adaptive.tagesschau.de/i/video/2024/0121/TV-20240121-0901-5700,.webm.h264.mp4,.webxxl.h264.mp4,.webxl.h264.mp4,.webl.h264.mp4,.webs.h264.mp4,.csmil/master.m3u8&quot;,&quot;mimeType&quot;:&quot;application/vnd.apple.mpegurl&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:false}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil. | REUTERS&quot;,&quot;alt&quot;:&quot;Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil.&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil. | REUTERS&quot;,&quot;alt&quot;:&quot;Menschen nehmen an einer Demonstration unter dem Motto #ZusammenGegenRechts vor dem Bundstag teil.&quot;}],&quot;title&quot;:&quot;In vielen Städten werden weitere Demonstrationen gegen rechts erwartet&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/video/video-1296770.html&quot;,&quot;body&quot;:&quot;Link-Tipp: In vielen Städten werden weitere Demonstrationen gegen rechts erwartet | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: In vielen Städten werden weitere Demonstrationen gegen rechts erwartet | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: In vielen Städten werden weitere Demonstrationen gegen rechts erwartet (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/video/video-1296770~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayerInlinePlay">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        <a class="teaser-xs__link" href="/faktenfinder/kontext/demonstrationen-teilnehmer-100.html">

            <p class="teaser-xs__topline-container">
                        
                        
                <span class="label label--small">
                            <strong>Kontext</strong>
                        </span>
                <span class="teaser-xs__date">27.01.2024 • 11:14 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Kundgebungen und Demonstrationen</span>
                <span class="teaser-xs__headline"> Warum die <span class="hyphenate">Teilnehmerzahlen </span>oft <span class="hyphenate">auseinandergehen</span>
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.jpg" alt="Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen." title="Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen. | picture alliance/dpa"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104.jpg" alt="Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen." title="Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen. | picture alliance/dpa"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht&quot;,&quot;playerType&quot;:&quot;video&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxx9M/1x1-144/sexualisierte-gewalt-kinder-104&quot;},{&quot;minWidth&quot;:144,&quot;value&quot;:&quot;https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBxyuw/1x1-256/sexualisierte-gewalt-kinder-104&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBx0AU/1x1-432/sexualisierte-gewalt-kinder-104&quot;},{&quot;minWidth&quot;:432,&quot;value&quot;:&quot;https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBx0zc/1x1-640/sexualisierte-gewalt-kinder-104&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/16a9d1ec-c714-4220-995e-a757247492ef/AAABjRHcGaQ/AAABibBx1ms/1x1-840/sexualisierte-gewalt-kinder-104&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht&quot;,&quot;av_content_id&quot;:&quot;video-1295042&quot;,&quot;av_content_duration&quot;:420000,&quot;av_content_type&quot;:&quot;Video&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesschau24&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-16T15:09:53Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-16T14:00:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/video/video-1295042.html&quot;}},&quot;trackingAgf@all&quot;:{&quot;appId&quot;:&quot;PE6FF1BB7-FE88-4674-B083-2772ADAD55E9&quot;,&quot;playerID&quot;:&quot;video-1295042&quot;,&quot;clipData&quot;:{&quot;type&quot;:&quot;content&quot;,&quot;assetid&quot;:&quot;video-1295042_0&quot;,&quot;program&quot;:&quot;tagesschau24&quot;,&quot;title&quot;:&quot;Tagesschau24_tagesschau24_Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht_2024.01.16 15:09:53&quot;,&quot;length&quot;:&quot;420&quot;,&quot;nol_c0&quot;:&quot;p0,0&quot;,&quot;nol_c2&quot;:&quot;p2,N&quot;,&quot;nol_c5&quot;:&quot;p5,https://www.tagesschau.de/multimedia/video/video-1295042.html&quot;,&quot;nol_c7&quot;:&quot;p7,video-1295042&quot;,&quot;nol_c8&quot;:&quot;p8,420&quot;,&quot;nol_c9&quot;:&quot;p9,tagesschau24_Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht_2024.01.16 15:09:53&quot;,&quot;nol_c10&quot;:&quot;p10,Tagesschau24&quot;,&quot;nol_c12&quot;:&quot;p12,Content&quot;,&quot;nol_c16&quot;:&quot;p16,ARD_Information&quot;,&quot;nol_c18&quot;:&quot;p18,N&quot;,&quot;nol_c20&quot;:&quot;p20,&quot;},&quot;sfcode&quot;:&quot;eu&quot;,&quot;prod&quot;:&quot;vc&quot;,&quot;apn&quot;:&quot;ardplayer&quot;,&quot;agfMetaDataSDK&quot;:{&quot;censuscategory&quot;:&quot;Tagesschau24_tagesschau24_Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht_2024.01.16 15:09:53&quot;,&quot;livestream&quot;:&quot;no&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0116/TV-20240116-1458-2700.webs.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:480,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0116/TV-20240116-1458-2700.webm.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:640,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0116/TV-20240116-1458-2700.webl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:960,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0116/TV-20240116-1458-2700.webxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1280,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/video/2024/0116/TV-20240116-1458-2700.webxxl.h264.mp4&quot;,&quot;mimeType&quot;:&quot;video/mp4&quot;,&quot;maxHResolutionPx&quot;:1920,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://adaptive.tagesschau.de/i/video/2024/0116/TV-20240116-1458-2700,.webm.h264.mp4,.webxxl.h264.mp4,.webxl.h264.mp4,.webl.h264.mp4,.webs.h264.mp4,.csmil/master.m3u8&quot;,&quot;mimeType&quot;:&quot;application/vnd.apple.mpegurl&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:false}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen. | picture alliance/dpa&quot;,&quot;alt&quot;:&quot;Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen.&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;preview&quot;,&quot;title&quot;:&quot;Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen. | picture alliance/dpa&quot;,&quot;alt&quot;:&quot;Ermittlerinnen sitzen vor Monitoren mit unkenntlich gemachten Fotografien, die teilweise sexuellen Missbrauch zeigen.&quot;}],&quot;title&quot;:&quot;Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/video/video-1295042.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Professorin Barbara Kavemann, Unabh. Kommission zur Aufarbeitung sexuellen Kindesmissbrauchs, zum vorgelegten Kommissions-Bericht (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/video/video-1295042~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayerInlinePlay">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        <a class="teaser-xs__link" href="/faktenfinder/buschmann-kinderpornografie-100.html">

            <p class="teaser-xs__topline-container">
                        
                        
                <span class="label label--small">
                            <strong>faktenfinder</strong>
                        </span>
                <span class="teaser-xs__date">16.01.2024 • 14:53 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Kinderpornografie</span>
                <span class="teaser-xs__headline"> Viel Aufregung um geplante <span class="hyphenate">Gesetzesänderung</span>
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    

        
        
            <div class="teaser-xs__media columns four">
                
                    
                        
    
    <div class="ts-picture__poster-wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.jpg" alt="Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli." title="Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli. | dpa"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxyuw/1x1-256/globuli-103.jpg" alt="Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli." title="Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli. | dpa"/>
        </noscript>
    </div>

                    
                    
    
        
    
    
    

    <div class="v-instance" data-v="{&quot;mediadescription&quot;:&quot;Kommentar: Lauterbach will Homöopathie als Kassenleistung streichen – gut so!&quot;,&quot;playerType&quot;:&quot;audio&quot;,&quot;ratio&quot;:&quot;1x1&quot;,&quot;buttonType&quot;:&quot;cornered&quot;,&quot;context&quot;:&quot;teaser_xs&quot;,&quot;pc&quot;:{&quot;web&quot;:{&quot;baseUrl&quot;:&quot;/resources/assets/js/vendor/ardplayer/&quot;,&quot;isForcedAutoPlay&quot;:false,&quot;isEnablePostMessage&quot;:false,&quot;isForcedVideoView&quot;:true,&quot;disableBackButtonTitle&quot;:true,&quot;disablePosterTitle&quot;:true,&quot;disablePosterImage&quot;:true},&quot;generic&quot;:{&quot;imageTemplateConfig&quot;:{&quot;size&quot;:[{&quot;minWidth&quot;:0,&quot;value&quot;:&quot;https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxsX4/16x9-256/globuli-103&quot;},{&quot;minWidth&quot;:256,&quot;value&quot;:&quot;https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxtLY/16x9-384/globuli-103&quot;},{&quot;minWidth&quot;:384,&quot;value&quot;:&quot;https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxt-Y/16x9-512/globuli-103&quot;},{&quot;minWidth&quot;:512,&quot;value&quot;:&quot;https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxuyw/16x9-640/globuli-103&quot;},{&quot;minWidth&quot;:640,&quot;value&quot;:&quot;https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxwXw/16x9-960/globuli-103&quot;},{&quot;minWidth&quot;:960,&quot;value&quot;:&quot;https://images.tagesschau.de/image/95d0df2b-0bd9-47b5-916e-e171ecddda43/AAABjQ1eJy8/AAABibBxqrQ/16x9-1280/globuli-103&quot;}]},&quot;isAutoplay&quot;:false},&quot;pluginData&quot;:{&quot;trackingPiano@all&quot;:{&quot;config&quot;:{&quot;dimensionTransform&quot;:{&quot;av_autoplay&quot;:&quot;av_auto_mode&quot;}},&quot;avContent&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false,&quot;av_content&quot;:&quot;Kommentar: Lauterbach will Homöopathie als Kassenleistung streichen – gut so!&quot;,&quot;av_content_id&quot;:&quot;audio-180826&quot;,&quot;av_content_duration&quot;:170000,&quot;av_content_type&quot;:&quot;Audio&quot;,&quot;av_broadcasting_type&quot;:&quot;Clip&quot;,&quot;av_show&quot;:&quot;tagesschau&quot;,&quot;av_sign_language&quot;:false,&quot;av_player&quot;:&quot;ARD Player&quot;,&quot;d:av_publication_date&quot;:&quot;2024-01-15T10:45:25Z&quot;,&quot;av_full_show&quot;:false,&quot;av_web_only&quot;:false,&quot;d:av_original_air_time&quot;:&quot;2024-01-11T16:42:00Z&quot;,&quot;av_gsea&quot;:&quot;tagesschau&quot;,&quot;av_url&quot;:&quot;https://www.tagesschau.de/multimedia/audio/audio-180826.html&quot;}},&quot;jumpmarks@all&quot;:{}}},&quot;mc&quot;:{&quot;streams&quot;:[{&quot;media&quot;:[{&quot;url&quot;:&quot;https://media.tagesschau.de/audio/2024/0115/AU-20240115-1041-4300.mp3&quot;,&quot;mimeType&quot;:&quot;audio/mpeg&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]},{&quot;url&quot;:&quot;https://media.tagesschau.de/audio/2024/0115/AU-20240115-1041-4300.hi.mp3&quot;,&quot;mimeType&quot;:&quot;audio/mpeg&quot;,&quot;audios&quot;:[{&quot;kind&quot;:&quot;standard&quot;,&quot;languageCode&quot;:&quot;de&quot;}]}],&quot;kind&quot;:&quot;main&quot;,&quot;isAudioOnly&quot;:true}],&quot;meta&quot;:{&quot;images&quot;:[{&quot;url&quot;:&quot;{size}.webp&quot;,&quot;kind&quot;:&quot;audio&quot;,&quot;title&quot;:&quot;Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli. | dpa&quot;,&quot;alt&quot;:&quot;Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli.&quot;},{&quot;url&quot;:&quot;{size}.jpg&quot;,&quot;kind&quot;:&quot;audio&quot;,&quot;title&quot;:&quot;Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli. | dpa&quot;,&quot;alt&quot;:&quot;Der Hals einer Arzneiflasche und homöopathisches Arzneimittel in Form von kleinen Kügelchen, sogenannten Globuli.&quot;}],&quot;title&quot;:&quot;Kommentar: Lauterbach will Homöopathie als Kassenleistung streichen – gut so!&quot;},&quot;pluginData&quot;:{&quot;sharing@web&quot;:{&quot;link&quot;:&quot;https://www.tagesschau.de/multimedia/audio/audio-180826.html&quot;,&quot;body&quot;:&quot;Link-Tipp: Kommentar: Lauterbach will Homöopathie als Kassenleistung streichen – gut so! | tagesschau.de (tagesschau.de) $link&quot;,&quot;subject&quot;:&quot;Link-Tipp: Kommentar: Lauterbach will Homöopathie als Kassenleistung streichen – gut so! | tagesschau.de (tagesschau.de)&quot;,&quot;disableSubclipping&quot;:true,&quot;services&quot;:[&quot;facebook&quot;,{&quot;id&quot;:&quot;whatsapp&quot;,&quot;title&quot;:&quot;Auf Whatsapp teilen&quot;,&quot;class&quot;:&quot;whatsappSpecial&quot;,&quot;target&quot;:&quot;https://api.whatsapp.com/send?text=$text$&quot;,&quot;targetParams&quot;:{&quot;text&quot;:&quot;Link-Tipp: Kommentar: Lauterbach will Homöopathie als Kassenleistung streichen – gut so! (tagesschau.de) $link$&quot;}},&quot;fb-messenger&quot;,&quot;twitter&quot;,&quot;telegram&quot;,&quot;threema&quot;,&quot;url&quot;,&quot;embed&quot;],&quot;embedCode&quot;:&quot;&lt;iframe src=\&quot;https://www.tagesschau.de/multimedia/audio/audio-180826~player.html$params$\&quot; width=\&quot;512\&quot; height=\&quot;288\&quot; allowfullscreen frameBorder=\&quot;0\&quot; scrolling=\&quot;no\&quot;&gt;&lt;/iframe&gt;&quot;,&quot;params&quot;:&quot;?startTime=$start$&amp;endTime=$ende$&quot;,&quot;legal&quot;:&quot;Durch die Einbettung von ARD-Videos auf Ihrer Webseite stimmen Sie den &lt;a href=\&quot;https://www.ardmediathek.de/ard/nutzungsbedingungen\&quot; target=\&quot;_blank\&quot;&gt;ARD Nutzungsbedingungen&lt;/a&gt; zu.&quot;,&quot;embedDialogTitle&quot;:&quot;Inhalt einbetten&quot;},&quot;download@web&quot;:{&quot;isEnabled&quot;:true},&quot;trackingSAND@all&quot;:{&quot;SANDEnabled&quot;:true,&quot;SANDDebug&quot;:false,&quot;mcdnType&quot;:&quot;DNS&quot;,&quot;reporting&quot;:[{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-topic:publish&quot;],&quot;metrics&quot;:[&quot;RepSwitch&quot;,&quot;BufferLevel&quot;,&quot;Playback&quot;,&quot;Misc&quot;,&quot;LiveEdgeDelay&quot;,&quot;ErrorMetric&quot;,&quot;StartupTime&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;},{&quot;limiter&quot;:{&quot;endpoint&quot;:&quot;https://sand.ard.de/auth/sand-token.json?apiKey=tagesschau24&quot;},&quot;endpoints&quot;:[&quot;https://sand-hub.ard.de/v1/projects/deo-mpm-prod-359708/topics/sand-beacon:publish&quot;],&quot;metrics&quot;:[&quot;Beacon&quot;],&quot;schemeIdUri&quot;:&quot;urn:mpeg:dash:sand:channel:gcp:xhr:2021&quot;}],&quot;configuration&quot;:{&quot;customerID&quot;:&quot;tagesschau24&quot;,&quot;enableHeaderReporting&quot;:true,&quot;payloadTypeEnums&quot;:[&quot;text/xml&quot;,&quot;text/json&quot;],&quot;payloadType&quot;:&quot;text/json&quot;,&quot;defaults&quot;:{&quot;metricInterval&quot;:15000,&quot;reportingInterval&quot;:15000,&quot;miscInterval&quot;:60000,&quot;headInterval&quot;:30000,&quot;errorTimeout&quot;:60000},&quot;adaptiveInterval&quot;:{&quot;init&quot;:60000,&quot;metricInterval&quot;:30000,&quot;reportingInterval&quot;:30000,&quot;threshold&quot;:{&quot;bufferLevelFactor&quot;:0.66,&quot;liveEdgeDelayFactor&quot;:0.66,&quot;memoryUsageFactor&quot;:0.66}}}}}}}"
         data-v-type="MediaPlayer">
        <div class="mediaplayer mediaplayer--1x1"></div>
    </div>


    


                
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline">
        
        

        <a class="teaser-xs__link" href="/faktenfinder/homoeopathie-148.html">

            <p class="teaser-xs__topline-container">
                        
                        
                <span class="label label--small">
                            <strong>faktenfinder</strong>
                        </span>
                <span class="teaser-xs__date">15.01.2024 • 10:08 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">Streichung als Kassenleistung </span>
                <span class="teaser-xs__headline"> Welche Rolle spielt Homöopathie in Deutschland?
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        </a>
        </div>
        </div>
    
</li>
                        
                    </ul>
                </div>
            </div>
        
    

                    </aside>

                    <div class="columns twelve content-wrapper__group">
                    
                        
    <ul class="buttongroup">
        <li class="buttongroup__item">
            
    
        
        <a class="btn btn--text btn--tongue btn--fullwidth" href="https://meta.tagesschau.de/id/170727/massenproteste-gegen-rechts-falsche-behauptungen-ueber-demo-bilder"  role="button}">
            <span class="btn__label">Kommentare zur Meldung <span class="btn__label--count">(207)</span></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

        </a>
    


        </li>
        <li class="buttongroup__item">
            
        
            
                <a href="/" class="btn btn--text btn--light-grey btn--fullwidth" >
                    <span class="btn__label">Zur Startseite</span>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.18 89.59" class="icon icon--home" role="img" aria-hidden="true"><title>Startseite</title><path d="M94.67,44.62,49.11.62a2.29,2.29,0,0,0-3.06,0L.49,44.62C-.64,45.71.29,47.4,2,47.4H14.69V88a1.8,1.8,0,0,0,1.94,1.65H35.48A1.78,1.78,0,0,0,37.42,88V61.92a1.8,1.8,0,0,1,1.94-1.62H55.84a1.8,1.8,0,0,1,1.94,1.62V88a1.8,1.8,0,0,0,1.89,1.64H78.52A1.8,1.8,0,0,0,80.46,88V86.2h0V47.41H93.14C94.84,47.41,95.84,45.72,94.67,44.62Z" transform="translate(0 -0.03)"/></svg>

                    
                </a>
            
        
    
        </li>
    </ul>


                    
                    
                    </div>
                </div>
            </div>
        </main>

        

    <div class="back-to-top hide" data-ts_component="back-to-top">
        <a href="#ts_header" class="btn btn--icon btn--tongue" aria-label="Zum Anfang der Seite springen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

        </a>
    </div>

    <footer class="footer" id="ts_footer">
        <nav class="footer__navigation" id="footer">
            
            <div class="columns twelve">
                <dl class="expanderbox footer__navigation__descriptionlist">
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-1" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-1">
            Service
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-1" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="/archiv/allemeldungen">7-Tage-Überblick</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://meta.tagesschau.de">Ihre Meinung</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/infoservices">Wo Sie uns sonst noch finden</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-2" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-2">
            tagesschau.de
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-2" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="/inland">Inland</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/ausland">Ausland</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/wirtschaft">Wirtschaft</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/wissen">Wissen</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/investigativ">Investigativ</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/faktenfinder">faktenfinder</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/wetter">Wetter  </a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/multimedia">Videos und Audios</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/multimedia/livestreams/livestream1">tagesschau24 im Livestream</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-3" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-3">
            ARD Angebote
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-3" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.sportschau.de/">Sportschau</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.ardmediathek.de">Mediathek</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.ardaudiothek.de/">Audiothek</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.kika.de/index.html">KiKA</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-4" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-4">
            Rundfunkanstalten
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-4" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.br.de/index.html">Bayerischer Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.hessenschau.de/index.html">Hessischer Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.mdr.de/nachrichten/index.html">Mitteldeutscher Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.ndr.de/">Norddeutscher Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.butenunbinnen.de/">Radio Bremen</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.rbb24.de/">Rundfunk Berlin-Brandenburg</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.sr.de/sr/home/index.html">Saarländischer Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.swr.de/">Südwestrundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www1.wdr.de/index.html">Westdeutscher Rundfunk</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                    
                </dl>
            </div>

            <div class="columns twelve">
                
                    
                
                    
                
                    
                
                    
                
                    
                        
    <ul class="footer__navigation__bottom">
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="/impressum">Impressum</a>
        </li>
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="/kontakt">Kontakt</a>
        </li>
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="/datenschutz">Datenschutzerklärung</a>
        </li>
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="https://www.tagesschau.de/">Bildrechte</a>
        </li>
    </ul>

                    
                
            </div>

            
    <div id="imageRightsRenderer"
         class="v-instance"
         data-v-type="ImageRights"
         data-v="{&quot;imageVariants&quot;:{&quot;teaserimage_list_s&quot;:&quot;16x9-256&quot;,&quot;teaserimage_list_m&quot;:&quot;16x9-768&quot;,&quot;teaserimage_list_l&quot;:&quot;16x9-960&quot;}}"
    >
    </div>




            <div class="footer__logo">
                <div class="footer__logo__icon">
                    <a href="https://www.ard.de" aria-label="Zum Online-Portal der ARD">
                        <svg class="icon icon icon--ard-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375.35 150" role="img" aria-hidden="true">
<path  d="M321.31,96.8v-27l-12,4.4v-9l36.1-13v36Zm10.4-65.6a44,44,0,0,0-36,18.7l6.4,4.4a36,36,0,0,1,29.5-15.5c19.8,0,35.5,16.2,35.5,36.1s-15.7,36.1-35.5,36.1a35.86,35.86,0,0,1-29.4-15.5l-6.5,4.5a43.31,43.31,0,0,0,35.7,18.7,43.75,43.75,0,0,0,.3-87.5m-55.5,23.6c13,0,19.8,6.9,19.8,19.9,0,13.4-7.3,20.4-21.1,20.4-3.6,0-7.2-.1-10.3-.2H263V55h.2c1.1,0,2.2,0,3.6-.1,2.3-.1,5.1-.1,9.4-.1m-.5,33.4c8.1,0,11.8-4.2,11.8-13.2s-3.9-13.4-11.8-13.4c-1.8,0-3.5,0-4.6.1V88a31.74,31.74,0,0,0,4.6.2M221.81,95h-8.9l-2.6-8.2h-15.1l-2.6,8.2h-8.1l13.7-40h10v.1Zm-13.7-15-3.9-12.2c-.6-2.1-1.1-3.8-1.5-5.3a44.44,44.44,0,0,1-1.5,5.2L197.31,80Zm49.6,15h-9.6l-9-15.3h-4.5V95h-8V55h.2c.7,0,1.8,0,3.2-.1,2.8-.1,6.6-.1,10.8-.1,9.5,0,14.5,4.2,14.5,12.2a11.32,11.32,0,0,1-8.1,11.3c.6.8,1.3,1.9,1.9,2.9Zm-23.1-22h5.5c4.5,0,6.8-1.9,6.8-5.7s-2.1-5.7-6.6-5.7c-3,0-5.1.1-5.7.1V73ZM26.91,74.6h-2.7l-3.6,13.8c-.3,1.3-.5,2.5-.7,3.8h0c-.2-1.3-.6-2.8-.9-4.1l-3.9-13.5h-2.8L8.51,87.9a32.9,32.9,0,0,0-.9,4.3h-.1c-.2-1.4-.5-2.7-.9-4.4L3.11,74.6h-3L5.51,95H9l3.8-13.4a28.37,28.37,0,0,0,.6-3.1h.1a23.76,23.76,0,0,0,.7,3.1L18,95h3.5Zm5.6.6a1.8,1.8,0,1,0-1.8,1.8A1.79,1.79,0,0,0,32.51,75.2ZM32,95V80h-2.7V95Zm11.8-15.3c-3-.3-4.5,1.8-5.2,3.8h-.1a23.8,23.8,0,0,0,.3-3.6h-2.6v15h2.7v-6c0-4.8,1.5-7.1,4.7-6.6Zm15.7.3a13.58,13.58,0,0,0-2.9-.3c-3.9,0-5.9,1.9-5.9,4.3,0,5.2,7,3.5,7,6.8,0,1.4-1.1,2.2-3.2,2.2a12.17,12.17,0,0,1-3.5-.6l-.2,2.4a18.7,18.7,0,0,0,3.5.4c4,0,6.2-2.1,6.2-4.6,0-5.2-7.1-3.6-7.1-6.9,0-1.2,1-2,2.9-2a9.93,9.93,0,0,1,3,.5Zm7.3-4.8A1.8,1.8,0,1,0,65,77,1.79,1.79,0,0,0,66.81,75.2ZM66.41,95V80h-2.7V95Zm16.5,0V84.6c0-2.8-1.2-4.9-4.5-4.9a5.56,5.56,0,0,0-5.3,3.4H73a17.2,17.2,0,0,0,.2-3.2h-2.6v15h2.7V87.7c0-3.4,1.8-5.9,4.3-5.9,2,0,2.6,1.3,2.6,3.4V95Zm15.9,0V73h-2.7v7a22.86,22.86,0,0,0-2.5-.2c-4.9,0-7.8,3.2-7.8,8.4,0,4.4,1.8,7.1,5.5,7.1a5.12,5.12,0,0,0,5-3.4h.1a15.64,15.64,0,0,0-.2,3h2.6Zm-2.7-7.9c0,3.1-1.6,5.9-4.1,5.9-2.3,0-3.3-1.8-3.3-5.1,0-4.3,1.9-6,4.7-6a12.41,12.41,0,0,1,2.7.3Zm24.3,7.9V73h-2.7v7a22.86,22.86,0,0,0-2.5-.2c-4.9,0-7.8,3.2-7.8,8.4,0,4.4,1.8,7.1,5.5,7.1a5.12,5.12,0,0,0,5-3.4h.1a15.64,15.64,0,0,0-.2,3h2.6Zm-2.7-7.9c0,3.1-1.6,5.9-4.1,5.9-2.3,0-3.3-1.8-3.3-5.1,0-4.3,1.9-6,4.7-6a12.41,12.41,0,0,1,2.7.3Zm17.5,5.2a14.14,14.14,0,0,1-4.4.8c-3.2,0-4.7-1.7-4.6-5.4H136a16.18,16.18,0,0,0,.1-1.8c0-3.4-1.8-6.2-5.9-6.2-4.3,0-6.8,3.4-6.8,7.9,0,5.3,2.5,7.7,7.1,7.7a14.4,14.4,0,0,0,5.1-.9Zm-9.1-6.5c.3-2.6,1.8-4,3.7-4,2.1,0,3.4,1.4,3.4,4Zm16.1-10.6a1.8,1.8,0,1,0-1.8,1.8A1.79,1.79,0,0,0,142.21,75.2Zm-.4,19.8V80h-2.7V95Zm16.5,0V84.6c0-2.8-1.2-4.9-4.5-4.9a5.56,5.56,0,0,0-5.3,3.4h-.1a17.2,17.2,0,0,0,.2-3.2H146v15h2.7V87.7c0-3.4,1.8-5.9,4.3-5.9,2,0,2.6,1.3,2.6,3.4V95Zm11.9-15a13.58,13.58,0,0,0-2.9-.3c-3.9,0-5.9,1.9-5.9,4.3,0,5.2,7,3.5,7,6.8,0,1.4-1.1,2.2-3.2,2.2a12.17,12.17,0,0,1-3.5-.6l-.2,2.4a18.7,18.7,0,0,0,3.5.4c4,0,6.2-2.1,6.2-4.6,0-5.2-7.1-3.6-7.1-6.9,0-1.2,1-2,2.9-2a9.93,9.93,0,0,1,3,.5Zm7.3,13.4a1.9,1.9,0,1,0-1.9,1.9A1.9,1.9,0,0,0,177.51,93.4Z"/></svg>

                    </a>
                </div>
            </div>
        </nav>
    </footer>
    <div class="endline">
        <div class="endline__copyright">© ARD-aktuell / tagesschau.de</div>
    </div>

    
    
        
            
                <div data-config="{&quot;trackingService&quot;:&quot;ati-piano&quot;,&quot;trackingData&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-22T11:53:52Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:10,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;faktenfinder&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Massenproteste gegen rechts: Falsche Behauptungen über Demo-Bilder&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Rechtsextremismus|Demonstration|Manipulationsvorwürfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;demonstrationen-rechtsextremismus-bilder-100&quot;,&quot;content_url_path&quot;:&quot;/faktenfinder/demonstrationen-rechtsextremismus-bilder-100.html&quot;,&quot;content_import_id&quot;:&quot;0d6ee4c8-6275-4175-ad88-af535127a489&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false}}" data-js_component="tracking-component"></div>
            
        
    

    
        
            <script async crossorigin="anonymous" src="//player.h-cdn.com/loader.js?customer=ard_de"></script>
        
    


    </div>
</body>
</html>
