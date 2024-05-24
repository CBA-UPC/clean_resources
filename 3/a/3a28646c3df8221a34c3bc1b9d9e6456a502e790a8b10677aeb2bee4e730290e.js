!function(){function BdashTagUtil(){function matched(e,t,r){var n=encodeCondValue(e),a=encodeCondValue(r);switch(t){case"match":if(n===a)return!0;break;case"include":if(n.indexOf(a)>=0)return!0;break;case"not_include":if(n.indexOf(a)<0)return!0;break;case"start_with":if(0===n.indexOf(a))return!0;break;case"end_with":if(new RegExp(a+"$").test(n))return!0;break;case"regex":if(new RegExp(r).test(e))return!0}return!1}function encodeCondValue(e){try{return encodeURIComponent(decodeURIComponent(e))}catch(t){return e}}function matchAny(e,t,r,n){for(var a=0;a<t.length;a++){var i=t[a];if(matched(e,i[n],i[r]))return!0}return!1}function findHtmlChild(e,t){return e?e.querySelectorAll(t.element)[t.nth-1]:null}function extractAttributeValue(e,t){return e.getAttribute(t.key)}function extractString(e,t){switch(t.extract_type||t.type){case"left":var r=t.extract_length||t.length;return e.slice(0,1*r);case"mid":var n=t.extract_start||t.start,a=t.extract_end||t.end;return e.substring(1*n-1,1*a);case"right":r=t.extract_length||t.length;return e.slice(-1*r);default:return e}}function encodeCookieValue(e){var t=encodeURIComponent(e);return window.BdashRawDeflate&&window.BdashRawDeflate.deflate&&"function"==typeof window.BdashRawDeflate.deflate&&(t=window.BdashRawDeflate.deflate(t),t=DEFLATED_PREFIX+t),t=window.btoa(t)}function decodeCookieValue(e){try{var t=!1;0===e.indexOf("@")&&(t=!0,e=e.slice(1));var r,n=window.atob(e);return 0===n.indexOf(DEFLATED_PREFIX)&&(t=!0,n=n.slice(DEFLATED_PREFIX.length)),t&&window.BdashRawDeflate&&window.BdashRawDeflate.inflate&&"function"==typeof window.BdashRawDeflate.inflate&&(r=window.BdashRawDeflate.inflate(n)),decodeURIComponent(r||n)}catch(a){return e}}function shouldFetchCustomColumnOnPageview(e){var t=e.fetch_conditions;return!t||t.pageview.enabled}function shouldFetchCustomColumnOnClick(e,t){var r=e.fetch_conditions;if(!r)return!0;if(!r.click.enabled)return!1;if("all"===r.click.condition.target)return!0;var n=r.click.condition.element_conditions,a=t&&t.target;if(!a)return!1;for(var i=a.parentElement,o=0;o<n.length;o++){var c=n[o];if(c.child&&c.child.enabled)for(var s=(i&&i.getAttribute(c.element_type)).split(" "),l=0;l<s.length;l++){if(matched(s[l],c.operator,c.value))if(i.querySelectorAll(c.child.tag_name)[c.child.nth-1]==a)return!0}else for(s=a.getAttribute(c.element_type).split(" "),l=0;l<s.length;l++)if(matched(s[l],c.operator,c.value))return!0}return!1}function filterByDomainLevel(e,t){for(var r,n=[],a=[],i=0;i<e.length;i++){var o=e[i];o.domainLevel===t?n.push(o):undefined===r||o.domainLevel<r?(a=[o],r=o.domainLevel):o.domainLevel===r&&a.push(o)}return 0<n.length?n:a}function extractFromHtml(e){if(!e.conditions.length)return"";for(var t={match:"=",include:"*=",start_with:"^=",end_with:"$="},r=0;r<e.conditions.length;r++){var n=e.conditions[r],a=t[n.matching],i="["+n.type+a+'"'+n.name+'"]',o=document.querySelectorAll(i);if(o.length){var c=o[n.nth?n.nth-1:0];if(n.child&&n.child.enabled&&(c=findHtmlChild(c,n.child)),c){if(n.attribute&&n.attribute.enabled)return extractAttributeValue(c,n.attribute)||"";var s=c.outerHTML,l=s.indexOf(">")+1,u=s.lastIndexOf("<");return extractString(s=s.substring(l,u),e.extract)}}}}function extractFromJs(e){return window[e.conditions[0].name]||""}function extractByCustomScript(conditions){var customValue="";return eval(conditions.custom_script),customValue}function extractFromSourceCode(e){switch(e.source_type){case"html":return extractFromHtml(e);case"javascript":return extractFromJs(e);case"others":return extractByCustomScript(e)}return""}function extractFromUrl(e){var t=e.urls&&e.urls[0]||{},r=t.matching;if("regex"===r){var n=new RegExp(t.name),a=location.href.match(n);return a&&a[0]||""}return"extract"===r?extractString(location.href,t):""}function extractFromCookie(e){for(var t=e.name,r=e.values||[],n=this.getCookieValues(t),a=0;a<n.length;a++)if(0===r.length||matchAny(n[a],r,"name","matching"))return n[a]}var DEFLATED_PREFIX="bd4_";this.isObject=function(e){return"[object Object]"===Object.prototype.toString.apply(e)},this.isFunction=function(e){return"[object Function]"===Object.prototype.toString.apply(e)},this.getUnixtimeSec=function(){return Math.floor((new Date).getTime()/1e3)},this.isEncodingCookie=function(e){return["_bdnvf","_bd_prev_page","_bd_prev_page_ex","_bdcid","_bd_reception_request_timestamp"].indexOf(e)>=0},this.restoreCookieValue=function(e,t){return this.isEncodingCookie(e)?decodeCookieValue(t):t},this.getCookieValues=function(e){for(var t=[],r=document.cookie.split(";"),n=new RegExp("^\\s*"+e+"=\\s*(.*)\\s*$"),a=0;a<r.length;a++){var i=r[a].match(n);i&&t.push(this.restoreCookieValue(e,i[1]))}return t},this.getCookieValue=function(e){return this.getCookieValues(e)[0]},this.setCookie=function(e,t,r,n,a){var i=e+"="+(this.isEncodingCookie(e)?encodeCookieValue(t):t)+";";r&&(i+="expires="+new Date((new Date).getTime()+r).toUTCString()+";"),n&&(i+="domain="+n+";"),a&&(i+="path="+(a||"/")+";");var o=document.cookie;if(document.cookie=i,document.cookie!==o)return!0;for(var c=this.getCookieValues(e),s=0;s<c.length;s++)if(t===c[s])return!0;return!1},this.generateCookieStoreValue=function(e,t){return["BD",e,t.split(".").length].join(".")},this.extractValueFromCookie=function(e){var t,r=this.getCookieValues(e);if(r.length>0){for(var n=[],a=document.domain.split("."),i=0;!t&&i<r.length;i++){var o=r[i].match(/^BD\.(.+)\.(\d+)$/);o&&n.push({domainLevel:1*o[2],value:o[1]})}if(0===n.length)t=r[0];else if(1===n.length)t=n[0].value;else{var c=a&&a.length,s=c&&filterByDomainLevel(n,c);t=s&&s[0]&&s[0].value}}return t},this.stringIncludes=function(e,t){return String.prototype.includes=function(e){var t=!1;return-1!==this.indexOf(e)&&(t=!0),t},e.includes(t)},this.isTargetDomain=function(){for(var e=[],t=0;t<e.length;t++){var r=e[t];if(document.domain===r.domain&&!matchAny(location.href,r.exclude_conditions,"url","cond"))return!0}return!1};var customColumns=[];this.getCustomColumns=function(){return customColumns},this.extractValue=function(e,t,r){if(matchAny(location.href,e.page_conditions,"name","matching"))try{if("pageview"===t){if(!shouldFetchCustomColumnOnPageview(e))return null}else if(!shouldFetchCustomColumnOnClick(e,r))return null;var n="",a=e.source_type,i=e.source_conditions||{};switch(a){case"source_code":n=extractFromSourceCode(i);break;case"url":n=extractFromUrl(i);break;case"cookie":n=extractFromCookie.bind(this,i)()}return{key:"customColumn"+e.column_no,value:n,column_type:e.column_type}}catch(o){return null}return null},this.getCustomColumnValues=function(e,t){for(var r=[],n=0;n<customColumns.length;n++){var a=this.extractValue(customColumns[n],e,t);a&&r.push(a)}return r},this.escapeValue=function(e){if("string"!=typeof e)return e;var t=e.replace(/\"/g,'""');return((t=t.trim()).indexOf(",")>=0||t.match(/\t|\n/))&&(t='"'+t+'"'),t}}function checkPreview(){return"preview"!==wn.navigator.loadPurpose}function checkProtocol(){var e=dc.location.protocol;return"http:"===e||"https:"===e}function validateAccountId(e){return/^BD-[A-Z0-9]{6}(-\d+)?$/.test(e.get("accountId"))}var wn=window,dc=document,bdashHost="//tracker.smart-bdash.com/tracking",globalUtil=new BdashTagUtil;if(globalUtil){var Utils={encodeURL:function(e){return"function"==typeof encodeURIComponent?encodeURIComponent(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A"):escape(e)},isString:function(e){return"[object String]"===Object.prototype.toString.apply(e)},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},contains:function(e,t){for(var r=0;r<e.length;r++)if(t===e[r])return!0;return!1},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},addListener:function(e,t,r){e.attachEvent?e.attachEvent("on"+t,r):e.addEventListener&&e.addEventListener(t,r,!1)},removeListner:function(e,t,r){e.detachEvent?e.detachEvent("on"+t,r):e.removeEventLister&&e.removeEventLister(t,r,!1)}},getReferrer=function(){var e=dc.location.search.match(/_bdsr_referrer=([^&#]*)([&#].+)?$/);return e?e[1]:dc.referrer},Beacon=new function(){var e=function(){return"https:"+bdashHost},t=function(t,r){if(!wn.XMLHttpRequest)return!1;var n=new wn.XMLHttpRequest;return n.open("POST",e(),!0),n.setRequestHeader("Content-Type","text/plain"),n.withCredentials=!0,n.onreadystatechange=function(){4===n.readyState&&(r(n.responseText),n=null)},n.send(t),!0},r=function(t,r){if(!wn.XDomainRequest)return!1;var n=new wn.XDomainRequest;return n.open("POST",e()),n.setRequestHeader("Content-Type","text/plain"),n.withCredentials=!0,n.onerror=function(){r()},n.onload=function(){r(n.responseText)},n.send(t),!0};this.send=function(e,n){wn.BdashTagManager.OptinMode&&!wn.BdashTagManager.Optin.tracking||(n=n||function(){},8192>=e.length&&(0>wn.navigator.userAgent.indexOf("Firefox")||[].reduce)&&(t(e,n)||r(e,n)||n()))}},Linker={linkDomains:function(e,t,r){function n(e){return e===dc.location.hostname}function a(e,t){for(var r=0;r<e.length;r++)if(0<=t.indexOf(e[r]))return!0;return!1}function i(e){return e&&e.match(/\.exe$/)}function o(e){return"_bdsid="+e.get("sessionId").replace("-","~")+"."+globalUtil.getUnixtimeSec()}function c(){let e=Linker.getUrlWithoutLinker();return"_bd_prev_page="+encodeURIComponent(e)}function s(e){return"_bdrpf="+e.get("repeaterFlag")[0]}function l(e){return!!Utils.isArray(r)&&a(r,e)}function u(e,t,r){var n=Linker.getUrlWithoutLinker(t),a=o(e),i=c(),l=s(e);e.set("linkerParam",a);var u,d=n.indexOf("/"),h=n.indexOf("?",0>d?0:d),f=n.indexOf("#",0>h?0:h);if(!(n.length+a.length+1<=2048))return n;if(u=a,n.length+u.length+i.length+1<=2048&&(u+="&"+i),n.length+u.length+l.length+1<=2048&&(u+="&"+l),r){n+=(0>f?"#":"&")+u}else{var p=(0>h?"?":"&")+u;n=0>f?n+p:n.substr(0,f)+p+n.substr(f)}return n}function d(e,t,r){if(!t.getAttribute("action"))return!1;var n=t.method.toUpperCase();if("GET"===n){for(var a=t.childNodes||[],i=0;i<a.length;i++)if("_bdsid"===a[i].name)return void a[i].setAttribute("value",e);var o=dc.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","_bdsid"),o.setAttribute("value",e),t.appendChild(o)}else"POST"===n&&t.setAttribute("action",u(e,t.getAttribute("action"),r))}var h=function(r){try{for(var o=r.target||r.srcElement,c=0;o&&o.nodeName&&(!o.nodeName.match(/^(a|area)$/i)||!o.href)&&c<100;c++)o=o.parentNode;o&&/^https?:$/.test(o.protocol)&&!n(o.hostname)&&a(t,o.hostname)&&!i(o.href)&&(o.href=u(e,o.href,l(o.hostname)))}catch(s){}},f=function(r){var i=r.target||r.srcElement;if(i&&i.getAttribute("action")){var o=i.getAttribute("action").match(/^https?:\/\/([^\/:]+)/);o&&!n(o[1])&&a(t,o[1])&&d(e,i,l(o[1]))}};Utils.addListener(dc,"mousedown",h),Utils.addListener(dc,"keyup",h),Utils.addListener(dc,"touchstart",h);for(var p=0;p<dc.forms.length;p++)Utils.addListener(dc.forms[p],"submit",f)},getPrevPageFromLinker:function(){var e=dc.location.href.match(/[?&#]_bd_prev_page=([^&#]*)/);return e?decodeURIComponent(e[1]):null},getUrlWithoutLinker:function(e){var t=e||dc.location.href,r=t.match(/(.*)([?&#])(?:_bdsid=[^&#]*)(?:&?)(.*)/);return r&&3<=r.length&&(t=r[1]+(r[3]?r[2]+r[3]:"")),(r=t.match(/(.*)([?&#])(?:_bd_prev_page=[^&#]*)(?:&?)(.*)/))&&3<=r.length&&(t=r[1]+(r[3]?r[2]+r[3]:"")),(r=t.match(/(.*)([?&#])(?:_bdrpf=[^&#]*)(?:&?)(.*)/))&&3<=r.length&&(t=r[1]+(r[3]?r[2]+r[3]:"")),t},removeIdFromUrl:function(){try{if(!globalUtil.isObject(wn.bdashFlags)||!wn.bdashFlags.removeBdld)return;if(globalUtil.isFunction(history.replaceState)){var e=dc.location.href,t=e.match(/(.*)([?&#])(?:_bd_prev_page=[^&#]*)(?:&?)(.*)/);t&&3<=t.length&&(e=t[1]+(t[3]?t[2]+t[3]:"")),history.replaceState("","",e),TrackController.tracker.set("location",dc.location.href)}}catch(r){}}},Event={getTarget:function(e,t){function r(e){return e.nodeName?e.nodeName.match(/^(a|area|button|img)$/i)?e.nodeName:"INPUT"!==e.nodeName.toUpperCase()||"BUTTON"!==e.type.toUpperCase()&&"SUBMIT"!==e.type.toUpperCase()&&"IMAGE"!==e.type.toUpperCase()?"":"BUTTON":""}var n=e.srcElement||e.target,a={},i=[];if(t>0)for(var o=0;n&&o<t&&(a.ndNm=a.ndNm||r(n),a.id=a.id||n.id,a.nm=a.nm||n.name,a.cls=a.cls||n.className,a.href=a.href||n.href,a.src=a.src||n.src,a.rpi=a.rpi||n.getAttribute("_bd_rpi"),a.riis=a.riis||n.getAttribute("_bd_riis"),!(a.ndNm&&a.id&&a.nm&&a.cls&&a.href&&a.src));o++)n=n.parentElement;else a=n;return a&&a.ndNm&&(i.push("nodeName:"+a.ndNm),a.id&&i.push("id:"+a.id),a.nm&&i.push("name:"+a.nm),a.cls&&i.push("class:"+a.cls),a.href&&i.push("href:"+a.href),a.src&&i.push("src:"+a.src),a.rpi&&i.push("rpi:"+a.rpi),a.riis&&i.push("riis:"+a.riis)),i.join(";")}},QueryParameter=function(e,t){this.name=e,this.value=t},Map=function(){this.keys=[],this.base={},this.hit={}};Map.prototype.newParam=function(e,t,r,n){var a=new QueryParameter(t,r);!Utils.contains(this.keys,e)&&this.keys.push(e),n?this.hit[e]=a:this.base[e]=a},Map.prototype.set=function(e,t,r){r?this.hit[e]=t:this.base[e]=t},Map.prototype.get=function(e){return this.base[e]||this.hit[e]},Map.prototype.clear=function(){this.hit={}},Map.prototype.query=function(){for(var e=[],t=0;t<this.keys.length;t++){var r=this.get(this.keys[t]);r&&r.name&&r.value&&e.push(r.name+"="+Utils.encodeURL(r.value))}return e.join("&")};var Filter=function(){this.list=[]};Filter.prototype.add=function(e){this.list.push(e)},Filter.prototype.exec=function(e){for(var t=0;t<this.list.length;t++)if(!1===this.list[t](e))return!1;return!0};var CallbackStore=function(){this.cb={}};CallbackStore.prototype.add=function(e,t){e&&globalUtil.isFunction(t)&&(this.cb[e]?this.cb[e].push(t):this.cb[e]=[t])},CallbackStore.prototype.exec=function(e){var t=Array.prototype.slice.call(arguments,1);if(this.cb[e]&&Utils.isArray(this.cb[e]))for(var r=0;r<this.cb[e].length;r++)this.cb[e][r].apply(null,t)};var Handler=function(){};Handler.prototype.sendReady=function(){},Handler.prototype.sendEvent=function(e,t,r){e=e||wn.event;var n=Event.getTarget(e,10);if(n)if(r(),n.match(/[;]?rpi:/)){var a=n.match(/rpi:([^;]*)/)[1],i=n.match(/riis:([^;]*)/),o=i&&i[1];t.send({type:"recommend_click",recommendPatternId:a,recommendItemIds:o})}else t.send({type:"click",eventTarget:n,eventAction:e.type})};var Tracker=function(e){this.prm=new Map,this.prm.newParam("hitType","ht",undefined),this.prm.newParam("accountId","ac",e.id),this.prm.newParam("visitorId","vt"),this.prm.newParam("sessionId","ss"),this.prm.newParam("repeaterFlag","rp","1"),this.prm.newParam("newSessionFlag","ns","0"),this.prm.newParam("referrer","rf",getReferrer()),this.prm.newParam("location","ln",dc.location.href),this.prm.newParam("prevLocation","pln",globalUtil.extractValueFromCookie("_bd_prev_page")),this.prm.newParam("pageTitle","pt",dc.title),this.prm.newParam("linkerParam","lp"),this.prm.newParam("linkedDomain","ld",dc.domain||""),this.prm.newParam("anchorDomain","ad",""),this.prm.newParam("tagVersion","v","0.0.2"),this.prm.newParam("sequence","seq",1);var t=new Handler;this.prm.newParam("sendReady",null,t.sendReady),this.prm.newParam("sendEvent",null,t.sendEvent),this.filter=new Filter,this.filter.add(checkPreview),this.filter.add(checkProtocol),this.filter.add(validateAccountId),this.callback=new CallbackStore};Tracker.prototype.get=function(e){var t=this.prm.get(e);return t&&(t.value||"")},Tracker.prototype.set=function(e,t){var r=this.prm.get(e);if(r)r.value=t,this.prm.set(e,r);else for(var n=["customColumn:cc"],a=0;a<n.length;a++){var i=n[a].split(":"),o=new RegExp(i[0]+"(\\d+)").exec(e);o&&this.prm.newParam(o[0],i[1]+o[1],t)}},Tracker.prototype.incrementSequence=function(){var e=this.get("sequence");this.set("sequence",e+1)},Tracker.prototype.send=function(e){var t={pageview:["page:pg"],click:["eventTarget:et","eventAction:ea"],recommend_pageview:["recommendPatternId:rpi","recommendItemIds:riis"],recommend_click:["recommendPatternId:rpi","recommendItemIds:riis"]};if(e.type){this.set("hitType",e.type);for(var r=t[e.type],n=0;n<r.length;n++){var a=r[n].split(":");e.hasOwnProperty(a[0])&&this.prm.newParam(a[0],a[1],e[a[0]],!0)}try{if(this.filter.exec(this)){var i=this;Beacon.send(this.prm.query(),function(e){i.sendCallbackHandler(e)}),this.incrementSequence()}}catch(o){}finally{this.prm.clear()}}},Tracker.prototype.sendCallbackHandler=function(){},Tracker.prototype.storeCurrentPage=function(){for(var e=Linker.getUrlWithoutLinker(),t="_bd_prev_page",r=18e5,n="/",a=dc.domain.split("."),i=a.length-1;i>=0;i--){var o=a.slice(i).join("."),c=globalUtil.generateCookieStoreValue(e,o);if(globalUtil.setCookie(t,c,r,o,n))return!0}return!1},Tracker.prototype.setPrevPageEx=function(e){for(var t="_bd_prev_page_ex",r=18e5,n="/",a=dc.domain.split("."),i=a.length-1;i>=0;i--){var o=a.slice(i).join("."),c=globalUtil.generateCookieStoreValue(e,o);if(globalUtil.setCookie(t,c,r,o,n))return!0}return!1},Tracker.prototype.addDocumentOnClick=function(){var e,t=(e=this,function(t){var r=function(){e.callback.exec("click",t)};e.get("sendEvent")(t,e,r)});Utils.addListener(dc,"click",t)},Tracker.prototype.addDocumentOnMouseDown=function(){var e,t=(e=this,function(t){e.get("sendEvent")(t,e,null)});Utils.addListener(dc,"mousedown",t)},Tracker.prototype.addOnload=function(){var e,t=(e=this,function(t){e.get("sendReady")(t,e)});Utils.addListener(wn,"load",t)},Tracker.prototype.addEvent=function(e){var t,r=(t=this,function(r){e.handler(r,t)});Utils.addListener(e.target,e.event,r)};var TrackController=new function(){this.tracker={},this.libraries=new Map,this.queue=[]};TrackController.create=function(e){this.tracker=new Tracker(e);var t=Linker.getPrevPageFromLinker();t&&(this.tracker.set("prevLocation",t),this.tracker.setPrevPageEx(t)),Linker.removeIdFromUrl();var r=wn.BdashTagManager.Tracker.newSessionFlag;r&&this.tracker.set("newSessionFlag",r),this.tracker.set("visitorId",wn.BdashTagManager.Tracker.vid),this.tracker.set("sessionId",wn.BdashTagManager.Tracker.sid),this.tracker.set("cookieDomain",wn.BdashTagManager.Tracker.cookieDomain);var n=wn.BdashTagManager.Tracker.repeaterFlag;n&&this.tracker.set("repeaterFlag",n),this.tracker.storeCurrentPage(),this.tracker.addOnload(),"disabled"!==e.autoEvent&&this.tracker.addDocumentOnClick();var a=e.domains;if(a&&Utils.isArray(a)){this.tracker.set("linkedDomain",a.join("|"));var i=e.anchor_domains;i&&Utils.isArray(i)?this.tracker.set("anchorDomain",i.join("|")):i=[],Linker.linkDomains(this.tracker,a,i)}if(wn.BdashTagManager.OptinMode&&!wn.BdashTagManager.Optin.tracking){var o=this.tracker;addEventListener("optin",function(){o.send({type:"pageview"})},{once:!0})}},TrackController.execute=function(e,t){if(Utils.isString(e)&&globalUtil.isObject(t))switch(e){case"create":t.id&&TrackController.create(t);break;case"addCallback":t.type&&t.callback&&TrackController.tracker.callback.add(t.type,t.callback);break;case"set":for(var r in t)t.hasOwnProperty(r)&&TrackController.tracker.set(r,t[r]);break;case"send":TrackController.tracker.send(t)}else"call"===e&&globalUtil.isFunction(t)&&t.call(TrackController.tracker);return!0},function(){if(wn.BdashTagManager.Tracker){wn.bdashFlags||(wn.bdashFlags={});var e=wn.bdash4.queue;wn.bdash4=TrackController.execute;for(var t=0;t<e.length;t++)TrackController.execute(e[t][0],e[t][1])}}()}}();  margin: auto;
    font-weight: bold;
    animation: loading-fade 2s cubic-bezier(0.4, 0, 0, 1) forwards;
    opacity: 0;
    position: relative;
    z-index: 1;
}

@keyframes loading-fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
/* ---------------ぱんくず---------------- */
.breadcrumbs {
    background: #f5f5f5;
    font-size: 14px;
    line-height: 28px;
    padding: 11px 0;
}
.breadcrumbs ul {
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    overflow: auto;
    white-space: nowrap;
}
.breadcrumbs li {
    position: relative;
    padding-left: 30px;
}
.breadcrumbs li:first-of-type {
    padding-left: 0;
}
.breadcrumbs li::before {
    position: absolute;
    content: ">";
    left: 10px;
}
.breadcrumbs li:first-of-type::before {
    display: none;
}
.breadcrumbs a {
    color: #101d32;
}

/* ------ section, text ------ */
.sec {
    padding: 30px 0;
}
.sec.small-area {
    padding: 80px 0;
}
.sec.middle-area {
    padding: 100px 0;
}
.sec.big-area {
    padding: 200px 0;
}
.sec.bg-gray,
.bg-gray {
    background: #f5f5f5;
}
.sec.bg-blue,
.bg-blue,
.bg-primary {
    background: #005bac;
    color: #fff;
}
.sec.bg-water,
.bg-water,
.bg-secondary {
    background: #3aafc5;
    color: #fff;
}
.sec.bg-clear,
.bg-clear {
    background: #e5eef7;
}
.bg-blue-green {
    background: #ebf7f9;
}
.bg-body {
    background-color: #fff;
}

.sec-inner {
    width: 80%;
    max-width: 1200px;
    margin: auto;
    margin-top: 20px;
    position: relative;
}
.sec-in-conts {
    margin-top: 100px;
}
.content-block {
    padding-bottom: 50px;
}
.ttl-h2 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.364;
}
.ttl-h2.ver-b {
    line-height: 1.75;
}
.ttl-h2.ver-b span {
    display: inline-block;
    transition: border 0.35s cubic-bezier(0.4, 0, 0, 1);
    border-top: 2px solid #101d32;
    border-bottom: 2px solid #101d32;
}
.ttl-h3,
.ttl-h3 p {
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.475;
}
.ttl-h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.5;
}
.ttl-h5 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.5;
}
.ttl-h6 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.5;
}

.information-ttl:before {
    content: "information";
}
.information-ttl.ttl-h4.text-secondary:before {
    display: inline-block;
    padding-right: 20px;
    padding-left: 20px;
    background: #3aafc5;
    font-size: 20px;
    color: #fff;
}

.sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
}

.d-inline {
    display: inline !important;
}
.d-inline-block {
    display: inline-block !important;
}
.d-block {
    display: block !important;
}
.d-grid {
    display: grid !important;
}
.d-flex {
    display: flex !important;
}
.d-none {
    display: none !important;
}
@media (max-width: 1400px) {
    .d-xxl-block {
        display: block !important;
    }
    .d-xxl-none {
        display: none !important;
    }
}
@media (max-width: 1200px) {
    .d-xl-block {
        display: block !important;
    }
    .d-xl-none {
        display: none !important;
    }
}
@media (max-width: 992px) {
    .d-lg-block {
        display: block !important;
    }
    .d-lg-none {
        display: none !important;
    }
}

@media (max-width: 576px) {
    .d-sm-block {
        display: block !important;
    }
    .d-sm-none {
        display: none !important;
    }
}
.gap-0 {
    gap: 0 !important;
}

.gap-1 {
    gap: 0.25rem !important;
}

.gap-2 {
    gap: 0.5rem !important;
}

.gap-3 {
    gap: 1rem !important;
}

.gap-4 {
    gap: 1.5rem !important;
}

.gap-5 {
    gap: 3rem !important;
}
.align-items-center {
    align-items: center !important;
}
.justify-content-center {
    justify-content: center !important;
}
.justify-content-around {
    justify-content: space-around !important;
}
.justify-content-evenly {
    justify-content: space-evenly !important;
}
.justify-content-between {
    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
}
.flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
}
.flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
}
zr .flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
}
@media (max-width: 768px) {
    .d-md-block {
        display: block !important;
    }
    .d-md-none {
        display: none !important;
    }
    .text-md-start {
        text-align: left !important;
    }

    .text-md-end {
        text-align: right !important;
    }

    .text-md-center {
        text-align: center !important;
    }
    .gap-md-0 {
        gap: 0 !important;
    }

    .gap-md-1 {
        gap: 0.25rem !important;
    }

    .gap-md-2 {
        gap: 0.5rem !important;
    }

    .gap-md-3 {
        gap: 1rem !important;
    }

    .gap-md-4 {
        gap: 1.5rem !important;
    }

    .gap-md-5 {
        gap: 3rem !important;
    }
}
@media (max-width: 576px) {
    .gap-sm-0 {
        gap: 0 !important;
    }

    .gap-sm-1 {
        gap: 0.25rem !important;
    }

    .gap-sm-2 {
        gap: 0.5rem !important;
    }

    .gap-sm-3 {
        gap: 1rem !important;
    }

    .gap-sm-4 {
        gap: 1.5rem !important;
    }

    .gap-sm-5 {
        gap: 3rem !important;
    }
    .align-content-sm-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-sm-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
}
.order-1 {
    order: 1 !important;
}
@media (max-width: 768px) {
    .flex-md-column {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
}
@media (max-width: 576px) {
    .flex-sm-column {
        flex-direction: column !important;
    }
    .order-md-0 {
        order: 0 !important;
    }
}

.rounded {
    border-radius: 10px !important;
}
.rounded-3 {
    border-radius: 8px !important;
}

.border {
    border: 1px solid #000 !important;
}
.border-3 {
    border-width: 4px !important;
}
.border-4 {
    border-width: 4px !important;
}
.border-primary {
    border-color: #005bac !important;
}
.border-secondary {
    border-color: #3aafc5 !important;
}

.text-gray {
    color: #7d7d7d;
}
.text-primary {
    color: #005bac !important;
}
.text-secondary {
    color: #3aafc5 !important;
}
.text-danger {
    color: #d8563b !important;
}
.text-warning {
    color: #f8e977 !important;
}
.text-nowrap {
    white-space: nowrap !important;
}
.text-decoration-underline {
    text-decoration: underline !important;
}
.text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important;
}

.img-fluid {
    width: 100%;
    max-width: 100%;
    height: auto;
}

.fs-18 {
    font-size: 18px !important;
}
.fs-20 {
    font-size: 20px !important;
}
.fs-22 {
    font-size: 22px !important;
}
.fs-24 {
    font-size: 24px !important;
}
.fs-25 {
    font-size: 25px !important;
}
.fs-26 {
    font-size: 26px !important;
}
.fs-28 {
    font-size: 28px !important;
}
.fs-30 {
    font-size: 30px !important;
}
.fs-30 {
    font-size: 30px !important;
}
.fs-34 {
    font-size: 34px !important;
}
.fs-45 {
    font-size: 45px !important;
}
.fs-48 {
    font-size: 48px !important;
}
@media (max-width: 768px) {
    .fs-md-10 {
        font-size: 10px !important;
    }
    .fs-md-16 {
        font-size: 16px !important;
    }
    .fs-md-18 {
        font-size: 18px !important;
    }
    .fs-md-24 {
        font-size: 24px !important;
    }
}

.fw-bold {
    font-weight: bold !important;
}
.lh-1 {
    line-height: 1 !important;
}

.lh-sm {
    line-height: 1.25 !important;
}

.lh-md {
    line-height: 1.5 !important;
}
.lh-base {
    line-height: 1.75 !important;
}
.lh-base li {
    line-height: inherit !important;
}
.align-middle {
    vertical-align: middle !important;
}
.badge-text {
    display: inline-block;
    padding-right: 4px;
    padding-left: 4px;
}

.sec-inner p {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.8px;
}
.m-auto {
    margin: auto !important;
}
.py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

.py-1 {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}

.py-2 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
}

.py-3 {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
}

.py-4 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
}

.py-5 {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
}
.my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
}
.my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
.my-1 {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}
.my-2 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
}
.my-3 {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
}
.my-4 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
}
.my-5 {
    margin-top: 50px !important;
    margin-bottom: 50px !important;
}
.mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.m-auto {
    margin: 0 auto !important;
}
.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
}
.my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
}
.my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
.my-1 {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}
.my-2 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
}
.my-3 {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
}
.my-4 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
}
.my-5 {
    margin-top: 50px !important;
    margin-bottom: 50px !important;
}

.m-0 {
    margin: 0 !important;
}
.mx-1 {
    margin-right: 10px !important;
    margin-left: 10px !important;
}

.mx-2 {
    margin-right: 20px !important;
    margin-left: 20px !important;
}

.mx-3 {
    margin-right: 30px !important;
    margin-left: 30px !important;
}

.mx-4 {
    margin-right: 40px !important;
    margin-left: 40px !important;
}

.mx-5 {
    margin-right: 50px !important;
    margin-left: 50px !important;
}
.mt-0 {
    margin-top: 0 !important;
}
.mt-1,
.mgt-1 {
    margin-top: 10px !important;
}
.mt-15 {
    margin-top: 15px !important;
}
@media (max-width: 768px) {
    .mt-md-15 {
        margin-top: 15px !important;
    }
    .mt-md-2 {
        margin-top: 20px !important;
    }
}

.mt-2 {
    margin-top: 20px !important;
}
.mt-3 {
    margin-top: 30px !important;
}
.mt-4 {
    margin-top: 40px !important;
}
.mt-5 {
    margin-top: 50px !important;
}
.mt-6 {
    margin-top: 60px !important;
}
.mt-7 {
    margin-top: 70px !important;
}
@media (min-width: 992px) {
    .mgt-md-0 {
        /* TODO */
        margin-top: 0 !important;
    }
    .mgt-lg-0 {
        margin-top: 0 !important;
    }
    .m-lg-0 {
        margin: 0 !important;
    }

    .m-lg-1 {
        margin: 0.25rem !important;
    }

    .m-lg-2 {
        margin: 0.5rem !important;
    }

    .m-lg-3 {
        margin: 1rem !important;
    }

    .m-lg-4 {
        margin: 1.5rem !important;
    }

    .m-lg-5 {
        margin: 3rem !important;
    }

    .m-lg-auto {
        margin: auto !important;
    }

    .mx-lg-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-lg-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-lg-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-lg-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-lg-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-lg-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-lg-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-lg-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-lg-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-lg-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-lg-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-lg-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-lg-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-lg-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-lg-0 {
        margin-top: 0 !important;
    }

    .mt-lg-1 {
        margin-top: 0.25rem !important;
    }

    .mt-lg-2 {
        margin-top: 0.5rem !important;
    }

    .mt-lg-3 {
        margin-top: 1rem !important;
    }

    .mt-lg-4 {
        margin-top: 1.5rem !important;
    }

    .mt-lg-5 {
        margin-top: 3rem !important;
    }

    .mt-lg-auto {
        margin-top: auto !important;
    }

    .me-lg-0 {
        margin-right: 0 !important;
    }

    .me-lg-1 {
        margin-right: 0.25rem !important;
    }

    .me-lg-2 {
        margin-right: 0.5rem !important;
    }

    .me-lg-3 {
        margin-right: 1rem !important;
    }

    .me-lg-4 {
        margin-right: 1.5rem !important;
    }

    .me-lg-5 {
        margin-right: 3rem !important;
    }

    .me-lg-auto {
        margin-right: auto !important;
    }

    .mb-lg-0 {
        margin-bottom: 0 !important;
    }

    .mb-lg-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-lg-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-lg-3 {
        margin-bottom: 1rem !important;
    }

    .mb-lg-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-lg-5 {
        margin-bottom: 3rem !important;
    }

    .mb-lg-auto {
        margin-bottom: auto !important;
    }

    .ms-lg-0 {
        margin-left: 0 !important;
    }

    .ms-lg-1 {
        margin-left: 0.25rem !important;
    }

    .ms-lg-2 {
        margin-left: 0.5rem !important;
    }

    .ms-lg-3 {
        margin-left: 1rem !important;
    }

    .ms-lg-4 {
        margin-left: 1.5rem !important;
    }

    .ms-lg-5 {
        margin-left: 3rem !important;
    }

    .ms-lg-auto {
        margin-left: auto !important;
    }
}

.mb-0,
.mgb-del {
    margin-bottom: 0 !important;
}
@media (min-width: 769px) {
    .mgb-md-del {
        margin-bottom: 0 !important;
    }
}
.mb-1,
.mgb-1 {
    margin-bottom: 10px !important;
}
.mb-15,
.mgb-15 {
    margin-bottom: 15px !important;
}
.mb-2 {
    margin-bottom: 20px !important;
}
.mb-3,
.mgb-add {
    margin-bottom: 30px !important;
}
.mb-4 {
    margin-bottom: 40px !important;
}
.mb-5,
.mgb-add-l {
    margin-bottom: 50px !important;
}
.mb-6 {
    margin-bottom: 60px !important;
}
@media (max-width: 768px) {
    .mb-md-1 {
        margin-bottom: 10px !important;
    }
}

.ms-1 {
    margin-left: 10px !important;
}
.ms-2 {
    margin-left: 20px !important;
}
@media (max-width: 768px) {
    .ms-md-0 {
        margin-left: 0 !important;
    }
    .mb-md-1 {
        margin-bottom: 10px !important;
    }
    .mb-md-2 {
        margin-bottom: 20px !important;
    }
    .mb-md-3 {
        margin-bottom: 30px !important;
    }
    .mb-md-4 {
        margin-bottom: 40px !important;
    }
    .mb-md-5 {
        margin-bottom: 50px !important;
    }
}

.me-0 {
    margin-right: 0 !important;
}

.me-1 {
    margin-right: 10px !important;
}

.me-2 {
    margin-right: 20px !important;
}

.me-3 {
    margin-right: 30px !important;
}

.me-4 {
    margin-right: 40px !important;
}

.me-5 {
    margin-right: 50px !important;
}

.me-auto {
    margin-right: auto !important;
}
@media (max-width: 768px) {
    .me-md-1 {
        margin-right: 10px !important;
    }
    .me-md-2 {
        margin-right: 20px !important;
    }
}
@media (max-width: 576px) {
    .m-sm-0 {
        margin: 0 !important;
    }

    .m-sm-1 {
        margin: 0.25rem !important;
    }

    .m-sm-2 {
        margin: 0.5rem !important;
    }

    .m-sm-3 {
        margin: 1rem !important;
    }

    .m-sm-4 {
        margin: 1.5rem !important;
    }

    .m-sm-5 {
        margin: 3rem !important;
    }

    .m-sm-auto {
        margin: auto !important;
    }

    .mx-sm-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-sm-1 {
        margin-right: 0.25rem !important;
        margin-left: 0.25rem !important;
    }

    .mx-sm-2 {
        margin-right: 0.5rem !important;
        margin-left: 0.5rem !important;
    }

    .mx-sm-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important;
    }

    .mx-sm-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important;
    }

    .mx-sm-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important;
    }

    .mx-sm-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-sm-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-sm-1 {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
    }

    .my-sm-2 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .my-sm-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
    }

    .my-sm-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
    }

    .my-sm-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }

    .my-sm-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-sm-0 {
        margin-top: 0 !important;
    }

    .mt-sm-1 {
        margin-top: 0.25rem !important;
    }

    .mt-sm-2 {
        margin-top: 0.5rem !important;
    }

    .mt-sm-3 {
        margin-top: 1rem !important;
    }

    .mt-sm-4 {
        margin-top: 1.5rem !important;
    }

    .mt-sm-5 {
        margin-top: 3rem !important;
    }

    .mt-sm-auto {
        margin-top: auto !important;
    }

    .me-sm-0 {
        margin-right: 0 !important;
    }

    .me-sm-1 {
        margin-right: 0.25rem !important;
    }

    .me-sm-2 {
        margin-right: 0.5rem !important;
    }

    .me-sm-3 {
        margin-right: 1rem !important;
    }

    .me-sm-4 {
        margin-right: 1.5rem !important;
    }

    .me-sm-5 {
        margin-right: 3rem !important;
    }

    .me-sm-auto {
        margin-right: auto !important;
    }

    .mb-sm-0 {
        margin-bottom: 0 !important;
    }

    .mb-sm-1 {
        margin-bottom: 0.25rem !important;
    }

    .mb-sm-2 {
        margin-bottom: 0.5rem !important;
    }

    .mb-sm-3 {
        margin-bottom: 1rem !important;
    }

    .mb-sm-4 {
        margin-bottom: 1.5rem !important;
    }

    .mb-sm-5 {
        margin-bottom: 3rem !important;
    }

    .mb-sm-auto {
        margin-bottom: auto !important;
    }

    .ms-sm-0 {
        margin-left: 0 !important;
    }

    .ms-sm-1 {
        margin-left: 0.25rem !important;
    }

    .ms-sm-2 {
        margin-left: 0.5rem !important;
    }

    .ms-sm-3 {
        margin-left: 1rem !important;
    }

    .ms-sm-4 {
        margin-left: 1.5rem !important;
    }

    .ms-sm-5 {
        margin-left: 3rem !important;
    }

    .ms-sm-auto {
        margin-left: auto !important;
    }

    .text-sm-center {
        text-align: center !important;
    }
    .text-sm-left {
        text-align: left !important;
    }
}
.pt-0 {
    padding-top: 0 !important;
}
.pt-1 {
    padding-top: 10px !important;
}
.pt-2 {
    padding-top: 20px !important;
}
.pt-3 {
    padding-top: 30px !important;
}
.pt-4 {
    padding-top: 40px !important;
}
.pt-5 {
    padding-top: 50px !important;
}
.pb-0 {
    padding-bottom: 0 !important;
}
.pb-1 {
    padding-bottom: 10px !important;
}
.pb-2 {
    padding-bottom: 20px !important;
}
.pb-3 {
    padding-bottom: 30px !important;
}
.pb-4 {
    padding-bottom: 40px !important;
}
.pb-5 {
    padding-bottom: 50px !important;
}
.ps-1 {
    padding-left: 0.25rem !important;
}

.ps-2 {
    padding-left: 0.5rem !important;
}

.ps-3 {
    padding-left: 1rem !important;
}

.ps-4 {
    padding-left: 1.5rem !important;
}

.ps-5 {
    padding-left: 3rem !important;
}
.pb-0,
.pdb-del {
    padding-bottom: 0 !important;
}
.p-1 {
    box-sizing: border-box;
    padding: 10px !important;
}
.p-3 {
    box-sizing: border-box;
    padding: 30px !important;
}
.p-3.border-3 {
    padding: 27px !important;
}
.p-3.border-4 {
    padding: 26px !important;
}
.p-4 {
    box-sizing: border-box;
    padding: 40px !important;
}
.p-4.border-3 {
    padding: 37px !important;
}
.p-4.border-4 {
    padding: 36px !important;
}
.p-0 {
    padding: 0 !important;
}

.p-1 {
    padding: 0.25rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

.p-3 {
    padding: 1rem !important;
}

.p-4 {
    padding: 1.5rem !important;
}

.p-5 {
    padding: 3rem !important;
}

.px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
}

.px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
}

.px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
}

.px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
}

.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
}

.px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
}

@media (max-width: 768px) {
    .mt-md-15 {
        margin-top: 15px !important;
    }

    .m-md-0 {
        margin: 0 !important;
    }

    .m-md-1 {
        margin: 10px !important;
    }

    .m-md-2 {
        margin: 20px !important;
    }

    .m-md-3 {
        margin: 30px !important;
    }

    .m-md-4 {
        margin: 40px !important;
    }

    .m-md-5 {
        margin: 50px !important;
    }

    .m-md-auto {
        margin: auto !important;
    }

    .mx-md-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .mx-md-1 {
        margin-right: 10px !important;
        margin-left: 10px !important;
    }

    .mx-md-2 {
        margin-right: 20px !important;
        margin-left: 20px !important;
    }

    .mx-md-3 {
        margin-right: 30px !important;
        margin-left: 30px !important;
    }

    .mx-md-4 {
        margin-right: 40px !important;
        margin-left: 40px !important;
    }

    .mx-md-5 {
        margin-right: 50px !important;
        margin-left: 50px !important;
    }

    .mx-md-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    .my-md-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .my-md-1 {
        margin-top: 10px !important;
        margin-bottom: 10px !important;
    }

    .my-md-2 {
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    }

    .my-md-3 {
        margin-top: 30px !important;
        margin-bottom: 30px !important;
    }

    .my-md-4 {
        margin-top: 40px !important;
        margin-bottom: 40px !important;
    }

    .my-md-5 {
        margin-top: 50px !important;
        margin-bottom: 50px !important;
    }

    .my-md-auto {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    .mt-md-0 {
        margin-top: 0 !important;
    }

    .mt-md-1 {
        margin-top: 10px !important;
    }

    .mt-md-2 {
        margin-top: 20px !important;
    }

    .mt-md-3 {
        margin-top: 30px !important;
    }

    .mt-md-4 {
        margin-top: 40px !important;
    }

    .mt-md-5 {
        margin-top: 50px !important;
    }

    .mt-md-auto {
        margin-top: auto !important;
    }

    .me-md-0 {
        margin-right: 0 !important;
    }

    .me-md-1 {
        margin-right: 10px !important;
    }

    .me-md-2 {
        margin-right: 20px !important;
    }

    .me-md-3 {
        margin-right: 30px !important;
    }

    .me-md-4 {
        margin-right: 40px !important;
    }

    .me-md-5 {
        margin-right: 50px !important;
    }

    .me-md-auto {
        margin-right: auto !important;
    }

    .mb-md-0 {
        margin-bottom: 0 !important;
    }

    .mb-md-1 {
        margin-bottom: 10px !important;
    }

    .mb-md-2 {
        margin-bottom: 20px !important;
    }

    .mb-md-3 {
        margin-bottom: 30px !important;
    }

    .mb-md-4 {
        margin-bottom: 40px !important;
    }

    .mb-md-5 {
        margin-bottom: 50px !important;
    }

    .mb-md-auto {
        margin-bottom: auto !important;
    }

    .ms-md-0 {
        margin-left: 0 !important;
    }

    .ms-md-1 {
        margin-left: 10px !important;
    }

    .ms-md-2 {
        margin-left: 20px !important;
    }

    .ms-md-3 {
        margin-left: 30px !important;
    }

    .ms-md-4 {
        margin-left: 40px !important;
    }

    .ms-md-5 {
        margin-left: 50px !important;
    }

    .ms-md-auto {
        margin-left: auto !important;
    }

    .p-md-0 {
        padding: 0 !important;
    }

    .p-md-1 {
        padding: 10px !important;
    }

    .p-md-2 {
        padding: 20px !important;
    }

    .p-md-3 {
        padding: 30px !important;
    }

    .p-md-4 {
        padding: 40px !important;
    }

    .p-md-5 {
        padding: 50px !important;
    }

    .px-md-0 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .px-md-1 {
        padding-right: 10px !important;
        padding-left: 10px !important;
    }

    .px-md-2 {
        padding-right: 20px !important;
        padding-left: 20px !important;
    }

    .px-md-3 {
        padding-right: 30px !important;
        padding-left: 30px !important;
    }

    .px-md-4 {
        padding-right: 40px !important;
        padding-left: 40px !important;
    }

    .px-md-5 {
        padding-right: 50px !important;
        padding-left: 50px !important;
    }

    .py-md-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .py-md-1 {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }

    .py-md-2 {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
    }

    .py-md-3 {
        padding-top: 30px !important;
        padding-bottom: 30px !important;
    }

    .py-md-4 {
        padding-top: 40px !important;
        padding-bottom: 40px !important;
    }

    .py-md-5 {
        padding-top: 50px !important;
        padding-bottom: 50px !important;
    }

    .pt-md-0 {
        padding-top: 0 !important;
    }

    .pt-md-1 {
        padding-top: 10px !important;
    }

    .pt-md-2 {
        padding-top: 20px !important;
    }

    .pt-md-3 {
        padding-top: 30px !important;
    }

    .pt-md-4 {
        padding-top: 40px !important;
    }

    .pt-md-5 {
        padding-top: 50px !important;
    }

    .pe-md-0 {
        padding-right: 0 !important;
    }

    .pe-md-1 {
        padding-right: 10px !important;
    }

    .pe-md-2 {
        padding-right: 20px !important;
    }

    .pe-md-3 {
        padding-right: 30px !important;
    }

    .pe-md-4 {
        padding-right: 40px !important;
    }

    .pe-md-5 {
        padding-right: 50px !important;
    }

    .pb-md-0 {
        padding-bottom: 0 !important;
    }

    .pb-md-1 {
        padding-bottom: 10px !important;
    }

    .pb-md-2 {
        padding-bottom: 20px !important;
    }

    .pb-md-3 {
        padding-bottom: 30px !important;
    }

    .pb-md-4 {
        padding-bottom: 40px !important;
    }

    .pb-md-5 {
        padding-bottom: 50px !important;
    }

    .ps-md-0 {
        padding-left: 0 !important;
    }

    .ps-md-1 {
        padding-left: 10px !important;
    }

    .ps-md-2 {
        padding-left: 20px !important;
    }

    .ps-md-3 {
        padding-left: 30px !important;
    }

    .ps-md-4 {
        padding-left: 40px !important;
    }

    .ps-md-5 {
        padding-left: 50px !important;
    }
}

.w-20 {
    width: 20% !important;
}
.w-40 {
    width: 40% !important;
}
.w-50 {
    width: 50% !important;
}
.w-60 {
    width: 60% !important;
}
.w-80 {
    width: 80% !important;
}
.w-90 {
    width: 90% !important;
}
.w-100 {
    width: 100% !important;
}
.mw-100 {
  max-width: 100%;
}
.h-100 {
    height: 100% !important;
}

.text-start {
    text-align: left !important;
}
.text-end {
    text-align: right !important;
}

.sec-inner p img {
    width: 100%;
}
strong,
.bold {
    font-weight: bold;
}
.thin {
    font-family: "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
}
em {
    font-style: italic;
}
.red {
    color: #d8563b;
}
small {
    font-size: 0.75em;
}
.small {
    font-size: 0.75em !important;
}
.marker-yellow {
    background: #fffa81;
}

.blank,
.pdf,
.link-arrow {
    color: #005bac;
}
.link-arrow {
    display: inline-block;
}
.blank,
.pdf {
    position: relative;
    padding-right: 25px !important;
}
.link-arrow {
    position: relative;
    padding-left: 18px;
    text-decoration: underline;
}
.link-arrow.borderess {
    text-decoration: none;
}
.blank::after,
.pdf::after,
.link-arrow::before {
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-left: 3px;
}
.blank::after {
    content: "\f35d";
}
.pdf::after {
    content: "\f1c1";
}
.link-arrow::before {
    content: "\f054";
    left: 3px;
    margin-left: 0;
    top: 0;
}

.link-arrow-down:after {
    margin-left: 3px;
    position: relative;
    top: 0;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #005bac;
    transition: 0.35s;
}
.link-arrow-down:hover::after {
    top: 3px;
}

.sec-inner .intro-txt {
    margin-bottom: 80px;
}

.blue-font {
    color: #005bac;
}

.comment {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.6px;
    color: #333;
}
.sec-inner .comment {
    font-size: 12px;
    line-height: 1.5;
}

ol.comment {
    counter-reset: comment-number;
    padding-left: 1.5rem;
}
ol.comment li {
    counter-increment: comment-number;
}
ol.comment li::marker {
    content: "※" counter(comment-number) "  ";
}

ul.notes,
ul.comment,
ol.comment-num,
ul.list,
ol.num-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
ol.comment-num,
ol.num-list {
    counter-reset: number;
    margin: 0;
    padding: 0;
}
ul.notes li,
ul.comment li,
ol.comment-num li {
    position: relative;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.6px;
}
ul.comment li {
    padding-left: 18px;
}
ol.comment-num li {
    padding-left: 30px;
}
ol.comment-num.text-center li {
    width: fit-content;
    margin: 0 auto;
}
ul.comment.text-center li {
    width: fit-content;
    margin: 0 auto;
}
ul.list li,
ol.num-list li {
    position: relative;
    padding-left: 20px;
    line-height: 28px;
}
ul.list li .list li,
ol.num-list li .num-list li {
    padding-left: 35px;
}
ul.list li .list li::before,
ol.num-list li .num-list li::before {
    left: 15px;
}

ul.comment li::before,
ol.comment-num li::before,
ul.list li::before,
ol.num-list li::before {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
}
ul.comment li::before {
    content: "※";
}
ol.comment-num li::before {
    counter-increment: number;
    content: "※" counter(number);
}
ul.list li::before {
    content: "・";
    color: #005bac;
}
ul.list li .list li::before {
    color: #81d6ff;
}
ol.num-list li::before {
    counter-increment: number;
    content: counter(number) ".";
    color: #005bac;
}
ol.num-list li .num-list li::before {
    color: #81d6ff;
}

ul.out-side,
ol.out-side {
    margin-bottom: 20px;
}

.list-row {
    display: flex;
    flex-wrap: wrap;
}
.list-row li {
    box-sizing: border-box;
}
.list-row .col-xl-4 {
    width: 33.3%;
}
@media screen and (max-width: 992px) {
    .list-row .col-lg-6 {
        width: 50%;
    }
}
@media screen and (max-width: 576px) {
    .list-row .col-12 {
        width: auto;
    }
}

/* Notes */
.note-box {
    width: calc(100% - 60px);
    border-radius: 8px;
    padding: 30px;
    margin: 40px auto;
    background: #fff;
}
.note-box.flow-caption {
    margin-bottom: 80px;
    margin-top: 0;
}
.note-box.flow-caption.map-fig {
    margin-bottom: 120px;
}
.note-box p {
    margin-bottom: 20px;
}
.note-box.on-shadow {
    box-shadow: 0 0 10px rgba(59, 188, 206, 0.34);
}
.note-box.bg-gray {
    background: #f5f5f5;
}
.note-box.warning-box {
    border: 1px solid #d8563b;
}
.note-box.bg-secondaryblue {
    background-color: #ebf7f9;
}
.note-box .info-ttl,
.note-box .flag-ttl,
.note-box .warning-ttl {
    color: #005bac;
    font-weight: bold;
    position: relative;
    padding-left: 25px;
}
.note-box .info-ttl.l-font,
.note-box .flag-ttl.l-font,
.note-box .warning-ttl.l-font {
    padding-left: 35px;
}
.note-box .info-ttl::before,
.note-box .flag-ttl::before,
.note-box .warning-ttl::before {
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    left: 0;
}
.note-box .info-ttl::before {
    content: "\f05a";
}
.note-box .flag-ttl::before {
    content: "\f024";
}
.note-box .warning-ttl::before {
    content: "\f071";
}
.note-box .ttl span {
    margin-left: 50px;
}
.note-box .ttl span:first-of-type {
    margin-left: 0;
}
.note-box .warning-ttl {
    color: #d8563b;
}
.note-box .l-font {
    font-size: 24px;
}

.warning-box .link-arrow {
    color: #d8563b;
}

.mg-8 {
    margin-top: 80px;
}

/* flex */
.col-flex {
    display: flex;
    width: 100%;
    flex-flow: wrap;
    margin-top: 40px;
    /* margin-bottom: 50px; */
    margin-bottom: 60px;
}
.col-flex .fig {
    order: 1;
}
.col-flex .txt {
    order: 2;
    padding-left: 30px;
    padding-right: 0;
}
.col-flex:nth-of-type(2n) .fig {
    order: 2;
}
.col-flex:nth-of-type(2n) .txt {
    order: 1;
    padding-left: 0;
    padding-right: 30px;
}
.col-flex .flex-left {
    order: 1;
    padding-left: 0;
    padding-right: 30px;
}
.col-flex .flex-right {
    order: 2;
    padding-left: 30px;
    padding-right: 0;
}
.col-flex .half {
    width: 50%;
}
.col-flex .half-left {
    width: calc(50% - 80px);
    padding-right: 80px;
}
.col-flex .fig img {
    width: 100%;
}
.col-flex .w-3 {
    width: calc(25% - 15px);
}
.col-flex .w-4 {
    width: calc(35% - 15px);
}
.col-flex .w-5 {
    width: calc(50% - 15px);
}
.col-flex .w-6 {
    width: calc(65% - 15px);
}
.col-flex .w-7 {
    width: calc(75% - 15px);
}

.col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 33.33333333%;
}
.row-flex {
    display: flex;
    width: 100%;
    flex-flow: wrap;
}
.row-flex.two-side,
.row-flex.three-side,
.row-flex.four-side {
    width: calc(100% + 35px);
    margin-left: -17.5px;
}
.row-flex.two-side .conts {
    width: calc((100% / 2) - 35px);
    padding: 0 17.5px 30px;
}
.row-flex.three-side .conts {
    width: calc((100% / 3) - 35px);
    padding: 0 17.5px 30px;
}
.row-flex.four-side .conts {
    width: calc((100% / 4) - 35px);
    padding: 0 17.5px 30px;
}
.row-flex .conts p {
    margin-bottom: 20px;
}
.row-flex .conts p img {
    width: 100%;
}
.row-flex .conts p img.half {
    width: 50%;
}

@media screen and (max-width: 576px) {
    .col-sm-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 100%;
    }
    .mx-sm-0 {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .mt-sm-2 {
        margin-top: 20px !important;
    }
    .mt-sm-3 {
        margin-top: 30px !important;
    }
}
/* ボタン */
.btn-white {
    border: 2px solid #005bac;
    border-radius: 4px;
    background: #f8f8f2;
    color: #005bac;
    display: block;
    text-align: center;
    font-weight: bold;
}
.btn-blue {
    border: 2px solid #005bac;
    border-radius: 4px;
    background: #005bac;
    color: #fff;
    display: block;
    text-align: center;
    font-weight: bold;
}
.btn-blue.head-cv,
.btn-white.head-cv {
    padding: 6px 1px;
    min-width: 94px;
    letter-spacing: 0.8px;
}

.btn-blue-aslink {
    background: #005bac;
    border-radius: 80px;
    /* box-shadow: 0 3px 2px rgba(13,13,13,0.21); */
    box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.3);
    font-size: 24px;
    text-align: center;
    color: #fff;
    padding: 28px 35px;
    box-sizing: border-box;
    max-width: 450px;
    line-height: 1;
    display: block;
    position: relative;
}
.btn-blue-aslink:hover {
    box-shadow: none;
}
.btn-blue-aslink::before {
    position: absolute;
    content: "";
    left: 35px;
    width: 27px;
    height: 27px;
}
.btn-blue-aslink.ic-rq::before {
    background: url("../img/icon/icon-rq.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-dl::before {
    background: url("../img/icon/icon-dl.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-cv::before {
    background: url("../img/icon/icon-cv.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-txt::before {
    background: url("../img/icon/icon-txt.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-api::before {
    background: url("../img/icon/icon-api.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-img::before {
    background: url("../img/icon/icon-img.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-sec::before {
    background: url("../img/icon/icon-sec.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-con::before {
    background: url("../img/icon/icon-con.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-addimage::before {
    background: url("../img/icon/ic-addimage.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-fixedwf::before {
    background: url("../img/icon/ic-fixedwf.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-scan::before {
    background: url("../img/icon/ic-scan.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-sms::before {
    background: url("../img/icon/ic-sms.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-payment::before {
    background: url("../img/icon/ic-payment_white.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-facetoface::before {
    background: url("../img/icon/ic-facetoface_white.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-api::before {
    background: url("../img/icon/ic-api.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-sf-coop::before {
    background: url("../img/icon/ic-sf-coop.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-kt-coop::before {
    background: url("../img/icon/ic-kt-coop.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-onetime::before {
    background: url("../img/icon/ic-onetime.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-ip-use::before {
    background: url("../img/icon/ic-ip-use.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-client::before {
    background: url("../img/icon/ic-client.png") no-repeat;
    background-size: contain;
}
.btn-blue-aslink.ic-ad::before {
    background: url("../img/icon/ic-ad.png") no-repeat;
    background-size: contain;
}

/* ボタン基本系 */
.btn-through {
    background-color: #005bac;
    color: #fff;
    border-radius: 60px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    min-width: 240px;
    padding: 15px;
    box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.3);
    box-sizing: border-box;
}
.btn-through.white-border {
    background-color: #fff;
    color: #005bac;
    /* box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.30); */
}
.btn-through.w-back {
    background-color: #fff;
    border: 2px solid #005bac;
    color: #005bac;
}
.btn-through.middle-size {
    /* padding: 32px; */
    padding: 27px;
}

@media screen and (min-width: 769px) {
    .btn-through:hover {
        box-shadow: none;
    }
}

.sec-more-btn {
    max-width: 295px;
    margin: auto;
}

/* 画像 */
.img-fluid {
    max-width: 100%;
    height: auto;
}
.img-thumbnail {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.4);
}

/* flow-explain */
.flow-explain {
    padding: 50px 0;
    position: relative;
}
.flow-explain::before {
    position: absolute;
    content: "";
    width: 87%;
    max-width: 1000px;
    /* height: 100%; */
    height: calc(100% - 40px);
    left: 6.5%;
    border-radius: 8px;
    background: #e5eef7;
}
.flow-explain.gray-back::before {
    background: #f5f5f5;
}
.flow-explain .content {
    position: relative;
}
.flow-explain .content:last-of-type {
    margin-bottom: 0;
}
.flow-explain .steps {
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    background: #005bac;
    letter-spacing: 0.8px;
    line-height: 1.75;
    padding: 8px 22px;
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
    margin-top: 10px;
}
.flow-explain .triangle-bottom {
    border-top: 30px solid #005bac;
    border-right: 40px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 40px solid transparent;
    display: inline-block;
    margin-top: 20px;
}
.flow-explain img.rds {
    border-radius: 20px;
}

.w-note {
    padding: 15px;
    width: calc(100% - 30px);
    /* box-shadow: 0 2px 4px rgba(0,0,0,0.34); */
    box-shadow: 0 0 10px rgba(59, 188, 206, 0.34);
    border-radius: 8px;
    margin: 40px auto;
    background: #fff;
}

.function {
    margin-bottom: 100px;
}
.function .cards {
    border-radius: 4px;
    overflow: hidden;
    /* margin: 100px auto;  */
    margin: 40px 0;
    box-shadow: 0 0 0 rgba(59, 188, 206, 0.34);
    transition: box-shadow 0.35s cubic-bezier(0.4, 0, 0, 1);
    position: relative;
}
.function .cards:hover,
.function .cards.hover-on {
    /* box-shadow: 0 13px 21px rgba(0,0,0,0.34); */
    box-shadow: 0 5px 21px rgba(59, 188, 206, 0.34);
    transition: box-shadow 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.function .upper-conts {
    width: calc(100% - 60px);
    padding: 30px;
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
}
.function .upper-conts p {
    margin-bottom: 0;
}
.function .upper-conts:hover {
    cursor: pointer;
}
.function .upper-conts::after {
    /* content: "\f0fe";     */
    content: "\f067";
    font-size: 24px;
    right: -2px;
    top: -2px;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    /* color: #005bac; */
    background: #005bac;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.function .cards .open .upper-conts::after {
    /* content: "\f146";     */
    content: "\f068";
}
.function .lower-conts {
    /* display: none; */
    padding: 30px;
    position: relative;
}
.function .cards span.close-cards {
    display: none;
}
.function .cards.hover-on span.close-cards {
    position: absolute;
    content: "\f068";
    font-size: 24px;
    right: -2px;
    bottom: -2px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    /* color: #005bac; */
    background: #005bac;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
.function .cards.hover-on span.close-cards:hover {
    cursor: pointer;
}

.q-and-a {
    margin-bottom: 50px;
}
.q-and-a .cards {
    margin-bottom: 80px;
}
.q-and-a .cards .upper-conts {
    display: flex;
    padding: 50px 40px;
    border-radius: 4px;
    border: 1px solid #005bac;
    position: relative;
}
.q-and-a .cards .upper-conts:hover {
    cursor: pointer;
}
.q-and-a .cards .upper-conts::after {
    /* content: "\f0fe"; */
    content: "\f067";
    font-size: 24px;
    right: 19px;
    top: 20px;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #005bac;
}
.q-and-a .cards .open .upper-conts::after {
    /* content: "\f146"; */
    content: "\f068";
}
.q-and-a .cards .open .upper-conts {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.q-and-a .lower-conts {
    background: #f5f5f5;
    padding: 50px 40px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    /* display: none; */
}
.q-and-a .lower-conts p.only-qa {
    margin-top: 20px;
    margin-bottom: 0;
    padding-left: 105px;
}
.q-and-a.case .lower-conts p.only-case {
    padding-left: 222px;
}
.cards .upper-conts {
    background: #fff;
}
.q-and-a .cards .lower-conts,
.function .cards .lower-conts {
    display: none;
    /* z-index: -1;
    position: relative;     */
    transition: max-height 0.75s ease;
    /* max-height: 0; */
}
.q-and-a .cards .open + .lower-conts,
.function .cards .open + .lower-conts {
    transition: max-height 0.75s ease;
    /* max-height: 2000px; */
}

.q-and-a .cards .lower-conts .c-ttl {
    margin-bottom: 15px;
}
.q-and-a .cards .c-ttl {
    font-size: 34px;
    line-height: 50px;
    letter-spacing: 1.7px;
    font-weight: bold;
}
.q-and-a .cards .c-ttl .subj {
    display: inline-block;
}
.q-and-a .cards .c-ttl .icon {
    display: inline-block;
    padding-left: 70px;
    padding-right: 80px;
    text-align: center;
    position: relative;
    vertical-align: top;
}
.q-and-a .cards .c-ttl .icon::before {
    content: "\f630";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    left: 0;
    color: #005bac;
}
.q-and-a .cards .c-ttl .icon.qa-q,
.q-and-a .cards .c-ttl .icon.qa-a {
    padding-left: 0;
    padding-right: 30px;
    width: 75px;
    height: 75px;
}
.q-and-a .cards .c-ttl .icon.qa-q::before,
.q-and-a .cards .c-ttl .icon.qa-a::before {
    font-size: 50px;
    position: absolute;
    font-family: DINNextLTPro-Bold, "Noto Sans CJK JP", "Noto Sans JP", sans-serif !important;
    top: 0;
    left: 35px;
    transform: translateX(-50%);
}
.q-and-a .cards .c-ttl .icon.qa-q::before {
    content: "Q";
    color: #005bac;
}
.q-and-a .cards .c-ttl .icon.qa-a::before {
    content: "A";
    color: #e04139;
}

.acc-tab .cards {
    margin-top: 20px;
    border: 1px solid #005bac;
    border-radius: 10px;
    box-sizing: border-box;
    overflow: hidden;
}
.acc-tab .cards .item {
    padding: 20px 25px;
    padding-right: 48px;
    box-sizing: border-box;
    position: relative;
    transition: 0.5s;
    background-color: #fff;
}
.acc-tab .cards .item::after {
    position: absolute;
    top: calc(50% - 10px);
    font-size: 20px;
    right: 25px;
    color: #7d7d7d;
    font-weight: bold;
}
.acc-tab .cards .item::after {
    content: "+";
}
.acc-tab .cards .item.open::after {
    content: "－";
}

.acc-tab .cards .lower-conts {
    background-color: #fff;
    padding: 25px;
    box-sizing: border-box;
    display: none;
}

/* category */
.category {
    display: flex;
    flex-flow: wrap;
    margin: 50px auto;
}
.category .card {
    width: calc(100% / 3 - 20px);
    padding: 10px;
    min-width: 335px;
}
.category .card .inner-card {
    background: #fff;
    height: calc(100% - 60px);
    padding: 30px;
    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16); */
    box-shadow: 0 0 10px rgba(59, 188, 206, 0.34);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}
.inner-card .option-badge {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.6px;
    color: #fff;
    background: #005bac;
    padding: 2px 6px;
}
.inner-card .option-badge.secondary {
    background-color: #3aafc5;
}
.inner-card .c-ttl {
    position: relative;
}
.inner-card .c-ttl::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    left: 0;
}
.inner-card .c-ttl.iconin {
    padding-left: 70px;
}

.inner-card .c-ttl.ic-01::before {
    background-image: url(../img/icon/ic-01.png);
}
.inner-card .c-ttl.ic-02::before {
    background-image: url(../img/icon/ic-02.png);
}
.inner-card .c-ttl.ic-03::before {
    background-image: url(../img/icon/ic-03.png);
}
.inner-card .c-ttl.ic-04::before {
    background-image: url(../img/icon/ic-04.png);
}
.inner-card .c-ttl.ic-05::before {
    background-image: url(../img/icon/ic-05.png);
}
.inner-card .c-ttl.ic-06::before {
    background-image: url(../img/icon/ic-06.png);
}
.inner-card .c-ttl.ic-07::before {
    background-image: url(../img/icon/ic-07.png);
}
.inner-card .c-ttl.ic-08::before {
    background-image: url(../img/icon/ic-08.png);
}
.inner-card .c-ttl.ic-09::before {
    background-image: url(../img/icon/ic-09.png);
}
.inner-card .c-ttl.ic-10::before {
    background-image: url(../img/icon/ic-10.png);
}
.inner-card .c-ttl.ic-11::before {
    background-image: url(../img/icon/ic-11.png);
}
.inner-card .c-ttl.ic-12::before {
    background-image: url(../img/icon/ic-12.png);
}
.inner-card .c-ttl.ic-13::before {
    background-image: url(../img/icon/ic-13.png);
}
.inner-card .c-ttl.ic-14::before {
    background-image: url(../img/icon/ic-14.png);
}
.inner-card .c-ttl.ic-14b::before {
    background-image: url(../img/icon/ic-14_b.png);
}
.inner-card .c-ttl.ic-15::before {
    background-image: url(../img/icon/ic-15.png);
}
.inner-card .c-ttl.ic-16::before {
    background-image: url(../img/icon/ic-16.png);
}
.inner-card .c-ttl.ic-17::before {
    background-image: url(../img/icon/ic-17.png);
}
.inner-card .c-ttl.ic-18::before {
    background-image: url(../img/icon/ic-18.png);
}
.inner-card .c-ttl.ic-19::before {
    background-image: url(../img/icon/ic-19.png);
}
.inner-card .c-ttl.ic-20::before {
    background-image: url(../img/icon/ic-20.png);
}
.inner-card .c-ttl.ic-21::before {
    background-image: url(../img/icon/ic-21.png);
}
.inner-card .c-ttl.ic-22::before {
    background-image: url(../img/icon/ic-22.png);
}
.inner-card .c-ttl.ic-23::before {
    background-image: url(../img/icon/ic-23.png);
}
.inner-card .c-ttl.ic-24::before {
    background-image: url(../img/icon/ic-24.png);
}
.inner-card .c-ttl.ic-25::before {
    background-image: url(../img/icon/ic-25.png);
}
.inner-card .c-ttl.ic-26::before {
    background-image: url(../img/icon/ic-26.png);
}
.inner-card .c-ttl.ic-27::before {
    background-image: url(../img/icon/ic-27.png);
}
.inner-card .c-ttl.ic-28::before {
    background-image: url(../img/icon/ic-28.png);
}
.inner-card .c-ttl.ic-29::before {
    background-image: url(../img/icon/ic-29.png);
}
.inner-card .c-ttl.ic-30::before {
    background-image: url(../img/icon/ic-30.png);
}
.inner-card .c-ttl.ic-31::before {
    background-image: url(../img/icon/ic-31.png);
}
.inner-card .c-ttl.ic-32::before {
    background-image: url(../img/icon/ic-32.png);
}
.inner-card .c-ttl.ic-33::before {
    background-image: url(../img/icon/ic-33.png);
}
.inner-card .c-ttl.ic-34::before {
    background-image: url(../img/icon/ic-34.png);
}
.inner-card .c-ttl.ic-35::before {
    background-image: url(../img/icon/ic-payment.png);
}
.inner-card .c-ttl.ic-36::before {
    background-image: url(../img/icon/ic-36.png);
}
.inner-card .c-ttl.ic-37::before {
    background-image: url(../img/icon/ic-37.png);
}
.inner-card .c-ttl.ic-38::before {
    background-image: url(../img/icon/ic-38.png);
}
.inner-card .c-ttl.ic-39::before {
    background-image: url(../img/icon/ic-39.png);
}
.inner-card .c-ttl.ic-40::before {
    background-image: url(../img/icon/ic-40.png);
}
.inner-card .c-ttl.ic-41::before {
    background-image: url(../img/icon/ic-41.png);
}
.inner-card .c-ttl.ic-42::before {
    background-image: url(../img/icon/ic-42.png);
}
.inner-card .c-ttl.ic-43::before {
    background-image: url(../img/icon/ic-43.png);
}
.inner-card .c-ttl.ic-44::before {
    background-image: url(../img/icon/ic-facetoface.png);
}
.inner-card .c-ttl.ic-45::before {
    background-image: url(../img/icon/ic-45.png);
}
.inner-card .c-ttl.ic-46::before {
    background-image: url(../img/icon/ic-46.png);
}
.inner-card .c-ttl.ic-47::before {
    background-image: url(../img/icon/ic-47.png);
}

.inner-card p {
    margin-bottom: 0;
}

/* navigation-label */
.nav-label {
    display: flex;
    flex-flow: wrap;
    /* margin-bottom: 60px; 
     width: 80%;
    max-width: 1150px; */
    background: #fff;
    /* top: 0;
    position: absolute; */
    width: 100%;
}
.nav-label.fix {
    position: fixed;
    top: 87px;
    width: 80%;
    max-width: 1150px;
    z-index: 2;
    left: 50%;
    background: rgba(255, 255, 255, 0);
    transform: translateX(-50%);
}
.nav-label.fix::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: calc(-50vw + 50%);
    width: 100vw;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8);
    border-top: 1px solid #cdcdcd;
}
.nav-label.centering {
    justify-content: center;
}
.nav-label li {
    /* width: 20%;
    min-width: 240px; */
    width: calc(20% - 21px);
    min-width: 205px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
    position: relative;
    margin: 20px 0;
    letter-spacing: 0.9px;
    font-weight: bold;
}
.nav-label li::after {
    position: absolute;
    content: "\f054";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #005bac;
    bottom: 0;
    left: calc(50% - 10px);
    transition: 0.35s cubic-bezier(0.4, 0, 0, 1);
    transform: rotate(90deg);
}
.nav-label li:hover::after {
    bottom: -5px;
    transition: 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.nav-label.fix li {
    padding-bottom: 0;
}
.nav-label.fix li::after {
    display: none;
}
.nav-label a {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    width: 100%;
    /* display: inline-block; */
}

/* table */
table {
    width: 100%;
    margin: 40px auto;
}
table thead th {
    vertical-align: middle;
    background: #ccdeee;
    font-weight: bold;
    border-top: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
}
table tbody {
    -webkit-text-size-adjust: 100%;
}
table tbody th {
    vertical-align: middle;
    background: #f5f5f5;
    font-weight: bold;
    border-bottom: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
}
table tbody tr.or-back th {
    background: #e5eef7;
}

table tbody .emp-font {
    color: red;
    font-weight: bold;
}
table tbody .emp-font.large-f {
    font-size: 20px;
    /* font-weight: bold;
    font-weight:bold; */
}

table td {
    background: #fff;
}
table th,
table td {
    vertical-align: middle;
    padding: 18px;
    border-bottom: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
    text-align: center;
    line-height: 1.25;
}
table tbody.no-head {
    border-top: 1px solid #cdcdcd;
}
table tbody.td-left td {
    text-align: left;
}
table tbody.td-top td {
    vertical-align: top;
    text-align: left;
}
table tbody.td-lh-base td {
    line-height: 1.75;
}
table thead th:last-of-type,
table th,
table td:last-of-type {
    border-right: 0;
}
table thead th.non-last,
table th.non-last,
table td.non-last {
    border-right: 1px solid #cdcdcd;
}
table.zebra-table tr.or th,
table.zebra-table tr.or td {
    background: #e5eef7;
}
table.zebra-table tr.or-th th {
    background: #e5eef7;
}
table th.non-bold {
    font-family: "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
}

.table-lh-inherit th,
.table-lh-inherit td {
    line-height: inherit;
}

/* テーブルヘッダー固定 */
.scroll-over {
    overflow-x: auto;
}
table.sticky-table {
    width: 1100px;
    display: block;
}
table.sticky-table thead {
    display: block;
    width: 100%;
    /* height: 100px; */
}
table.sticky-table tbody {
    height: 70vh;
    display: block;
    width: 100%;
    overflow: auto;
}
table.sticky-table th,
table.sticky-table td {
    width: 143px;
}

table.price-table thead th:first-of-type {
    opacity: 0;
    border-top: 0;
}
table.price-table thead th.buz {
    background: #005bac;
    color: #fff;
    font-size: 0.9rem;
}
table.price-table thead th.std {
    background: #1e9ad6;
    color: #fff;
}
table.price-table thead th.fre {
    background: #7d7d7d;
    color: #fff;
}
table.price-table .price {
    font-size: 30px;
    font-weight: bold;
    font-family: "DINNextLTPro-Medium", "Noto Sans CJK JP", "Noto Sans JP", sans-serif !important;
    letter-spacing: 0.5px;
}
table.price-table .price.norm-fonts {
    font-weight: bold;
}
table.price-table .middle-txts {
    font-size: 14px;
}
table.price-table .middle-txts .price {
    font-size: 20px;
}

/* 事例 */
.storie-card {
    display: block;
    width: calc(100% - 40px);
    margin: auto;
    border-radius: 20px;
    overflow: hidden;
    /* border:1px solid #c0bfbf; */
    box-sizing: border-box;
    box-shadow: 0px 0px 24px 0px rgba(59, 188, 206, 0.19);
    /* margin-bottom: 3px; */
    transition: 0.35s;
}
.storie-card:hover {
    box-shadow: none;
    opacity: 0.7;
}
.storie-card .upper-card {
    position: relative;
}
.storie-card .upper-card .fig {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: 270px;
    /* height: calc(21.875vw * 0.746); */
    /* height: calc(27vw * 0.746); */
    height: 18.75vw;
}
.cspage-flex .storie-card .upper-card .fig {
    height: 240px;
}
.storie-card .upper-card .fig img {
    height: 105%;
    width: auto;
}

.job-badge {
    padding: 7.5px;
    min-width: 86px;
    font-weight: bold;
    letter-spacing: 0;
    position: absolute;
    bottom: 0;
    text-align: center;

    display: none;
}
.job-badge.black {
    background: #1a1a1a;
    color: #fff;
}

.storie-card .lower-card {
    background: #fff;
    padding: 25px 30px;
    display: flex;
    align-items: center;
    min-height: 180px;
    flex-flow: wrap;
}
.storie-card .lower-card .cs-intro {
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0;
    margin-bottom: auto;
    width: 100%;
}
.storie-card .lower-card .logo {
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
.storie-card .lower-card .logo img {
    max-width: 65%;
    width: auto;
    max-height: 70px;
    height: auto;
    margin: auto;
}
.carousel-area .slick-prev,
.carousel-area .slick-next {
    z-index: 1;
    font-size: 0;
    top: calc(50% - 30px);

    width: 60px;
    height: 60px;
    background-color: #005bac;
    border-radius: 30px;
}
.carousel-area .slick-prev:hover,
.carousel-area .slick-prev:focus,
.carousel-area .slick-next:hover,
.carousel-area .slick-next:focus {
    opacity: 0.8;
    background-color: #005bac;
}
.carousel-area .slick-prev {
    left: 120px;
}
.carousel-area .slick-next {
    right: 120px;
}
.carousel-area .slick-prev::before,
.carousel-area .slick-next::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 26px;
    left: 24.5px;
    top: 17px;
}
.carousel-area .slick-prev::before {
    background: url(../img/carsl-bf-arrow.png) no-repeat;
    background-size: contain;
}
.carousel-area .slick-next::before {
    background: url(../img/carsl-nx-arrow.png) no-repeat;
    background-size: contain;
}
.carousel-area .slick-track {
    margin-top: -24px;
    margin-bottom: 16px;
}
.carousel-area .slick-slide {
    padding-top: 24px;
    padding-bottom: 24px;
}
.carousel-area .slick-slide .storie-card {
    position: relative;
}
.carousel-area .slick-slide .storie-card::before {
    /* content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.85;
    border-radius: 20px;
    top: 0;
    left: 0;
    visibility: visible;
    transition: 0.35s;
    z-index: 1; */
}
.carousel-area .slick-slide.slick-active .storie-card::before {
    opacity: 0;
    visibility: hidden;
    transition: 0.35s;
}
@media screen and (min-width: 900px) and (max-width: 1349px) {
    .carousel-area .slick-slide {
        transform: translateX(-100%);
    }
}

.second-inner.cs-logo-area,
.cs-logo-area {
    margin-bottom: 50px;
}

.carousel-area.slick-dotted.slick-slider {
    margin-bottom: 70px;
}
.carousel-area .slick-dots {
    bottom: 0;
}
.carousel-area .slick-dots li {
    margin: 0 7px;
    width: 12px;
    height: 12px;
}
.carousel-area .slick-dots li button {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
}
.carousel-area .slick-dots li button:before {
    content: "";
    opacity: 1;
    left: 0;
    top: 0;
    width: 12px;
    height: 12px;
    background-color: #cdcdcd;
    border-radius: 12px;
}
.carousel-area .slick-dots li.slick-active button:before {
    background: #005bac;
}
/* 事例 */

/* news */
.news-row {
    display: flex;
}
.news-row dt {
    min-width: 295px;
    line-height: 1.5;
    padding: 5px 0;
}
.news-row dd {
    line-height: 1.5;
}
/* .news-link a{
    color: #353535;
} */
.news-badge {
    /*お知らせ、セミナー*/
    border: 2px solid #575858;
    color: #575858;
    background: #fff;
    margin: auto 12px;
    padding: 3px 6px;
    font-size: 14px;
}
.news-badge.release {
    /*プレスリリース*/
    color: #005bac;
    border: 2px solid #005bac;
}
.news-badge.obstacle {
    /*障害*/
    border: 2px solid #d8563b;
    color: #d8563b;
}

.fadein {
    /* opacity: 0;
    transition:opacity 1.5s cubic-bezier(0.4,0,0,1); */
}
.fadein.on {
    /* opacity: 1;
    transition:opacity 1.5s cubic-bezier(0.4,0,0,1); */
}

/*<<< ----- main ----- */

.foot-conts {
    padding: 70px 0;
    background: #ededed;
}
.foot-conts.m-pd {
    padding: 70px 0;
}
.foot-conts .ftc-inner {
    display: flex;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.foot-conts .btn-blue-aslink {
    /*width: calc(30.4% - 170px);*/
    width: 31%;
    max-width: 366px;
}
.foot-conts .btn-blue-aslink:not(:last-of-type) {
    margin-right: 4%;
}
/*
.foot-conts .btn-blue-aslink:nth-last-of-type(2n){
  margin-left: auto;
  margin-right: auto;
}*/

/* ----- footer ----- >>>*/
.footer {
    display: flex;
    flex-direction: column;
}
.footer .conversion-menu,
.footer .summarize-menu,
.footer .foot-map,
.footer .cp-right-area {
    order: -1;
}

/* .site-map-sp */
.site-map-sp {
    display: none;
}
@media screen and (max-width: 768px) {
    .site-map-sp {
        display: block;
        /* position: fixed;
    top: 83px;
    transition: transform 0.7s;
    width: 100%;
    background: #fff;
    height: calc(100vh - 83px);
    overflow-y: scroll;
    transform: translateY(calc(-101% - 83px)); */
    }
    .site-map-sp.active {
        /* transition: transform 0.7s;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
    transform: translateY(0); */
    }
    .site-map-sp .page-links {
        background: #005bac;
    }
    .site-map-sp .page-links span,
    .site-map-sp .page-links a {
        color: #ffffff;
    }
    .site-map-sp .page-links li {
        font-size: 14px;
        letter-spacing: 0;
        display: block;
        position: relative;
        border-bottom: 1px solid #e8e8e8;
    }
    .site-map-sp .page-links .hv-inner li {
        font-size: 12px;
    }
    .site-map-sp .ic-calling::before {
        color: #005bac;
    }
    .site-map-sp .page-links li a.blank::after {
        margin-left: 8px;
        font-size: 10px;
        line-height: 1.6;
    }
    .site-map-sp .page-links li.linker .inbox {
        display: none;
    }
    .site-map-sp .page-links li.linker ul {
        background-color: #f5f5f5;
        border-top: 1px solid #e8e8e8;
        /* padding: 7.5px 4%; */
    }
    .site-map-sp .page-links li.linker .bg-body {
        background: #fff;
    }
    .site-map-sp .page-links li.linker ul.hv-inner {
        border: 0;
    }
    .site-map-sp .page-links li.linker ul li.genre {
        margin-bottom: 5px;
        margin-top: 10px;
    }
    .site-map-sp .page-links li.linker ul li.genre span {
        padding-bottom: 10px;
        display: block;
        border-bottom: 1px solid #ced9f3;
    }
    .site-map-sp .page-links li.linker ul li {
        border-bottom: 0;
    }
    .site-map-sp .page-links li.linker ul li a {
        padding: 17.5px 6%;
        padding-left: 25px;
        display: block;
        color: #101d32;
        border-bottom: 1px solid #e8e8e8;
    }
    .site-map-sp .page-links li.linker ul li a::after {
        color: #005bac;
    }
    .site-map-sp .page-links li.linker ul li .nlk {
        position: relative;
    }
    .site-map-sp .page-links li.linker ul li .nlk.nlk-second {
        font-size: 12px;
        margin-left: 2%;
    }
    .site-map-sp .page-links li.linker ul li .nlk.nlk-second::after {
        font-size: 9px;
    }
    .site-map-sp .page-links li.linker ul li.ttl-ver2 {
        padding: 20px 15px 16px 15px;
        color: #3aafc5;
    }
    .site-map-sp .page-links li.linker ul li:not(.ttl-ver2):after {
        position: absolute;
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 12px;
        right: 5%;
        top: 18px;
        color: #005bac;
    }
    .site-map-sp .page-links li.linker ul li.linker-second:after {
        font-size: 8px;
    }
    .site-map-sp .page-links li.linker ul li a.non-ic {
        padding-left: 0;
    }
    .site-map-spv .page-links li.linker ul li .nlk.non-ic::before {
        display: none;
    }
    .site-map-sp .page-links li.linker ul li .nlk .spn {
        font-size: 12px;
        display: inline-block;
        padding-top: 10px;
    }
    .site-map-sp .page-links a.blk {
        display: block;
    }
    .site-map-sp .page-links .addpdng {
        padding: 17.5px 15px;
        box-sizing: border-box;
    }
    .site-map-sp .page-links li .ttl {
        position: relative;
        width: 100%;
        display: block;
    }
    .site-map-sp .page-links li .ttl::before {
        position: absolute;
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        right: 5%;
        top: 16.5px;
        transform: rotate(90deg);
        transition: transform 0.35s ease;
    }
    .site-map-sp .page-links li .ttl.active::before {
        transform: rotate(-90deg);
        transition: transform 0.35s ease;
    }
    .site-map-sp .sp-nav-controll {
        padding: 25px 4% 10px;
        text-align: center;
    }
    .site-map-sp .sp-nav-controll .link-out {
        font-size: 21px;
        padding: 10px;
        padding-left: 31px;
    }
    .site-map-sp .sp-nav-controll .link-out a {
        color: #005bac;
    }
    .site-map-sp .sp-nav-controll .link-out a::before {
        top: 10px;
        left: -31px;
    }
    .site-map-sp .sp-nav-controll .btn {
        margin: 20px 0;
        text-align: center;
    }

    .site-map-sp .page-links .ic-video::before,
    .site-map-sp .page-links .ic-login::before,
    .site-map-sp .page-links .ic-requ::before {
        font-size: 10px;
        margin-right: 4px;
    }
}

/* .foot-map */
.foot-map {
    display: flex;
    margin: 100px auto 70px;
    width: 80%;
    max-width: 1200px;
}
.foot-map .f-logo-side {
    display: flex;
    flex-direction: column;
    margin-right: 60px;
    width: 273px;
    text-align: center;
}
.foot-map .f-logo-side > * {
    width: 100%;
}
.foot-map-logo img {
    width: auto;
    height: auto;
}
.foot-map .esp-list {
    margin-top: 30px;
}
.foot-map .esp-list .esp-link {
    display: block;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #f5f5f5;
    width: 100%;
    padding: 10px;
    font-size: 14px;
}
.foot-map .esp-list .esp-link:hover {
    background-color: #e5eef7;
    opacity: 1;
}
.foot-map-list-banner {
    display: flex;
    /*
  flex-direction: column;
  */
    flex-wrap: wrap;
    align-items: center;
    margin-top: 45px;
}
.foot-map-list-banner-item {
    margin: 5px 0;
}
.foot-map-list-banner-iso27001,
.foot-map-list-banner-iso27017 {
    width: auto;
    height: 150px;
}
.foot-map-list-banner-soc2 {
    width: auto;
    height: 112px;
}
.foot-map-list-banner-webtrust {
    border: 1px solid #ccc;
    width: auto;
    height: 66px;
}

.foot-map .site-map {
    display: flex;
    flex-flow: wrap;
    justify-content: flex-end;
    margin-right: -15px;
    margin-left: auto;
    margin-left: -15px;
}
.foot-map .site-map-sp {
    display: none;
}
.foot-map .site-map > ul {
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 30px;
    width: calc(100% / 3 - 30px);
}
.foot-map .site-map li a {
    line-height: 1.5;
}
.foot-map .site-map li.ttl {
    margin-bottom: 20px;
    border-bottom: 1px solid #101d32;
    padding-bottom: 5px;
    font-size: 18px;
    line-height: 1.5;
}
.foot-map .site-map li {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
}
.foot-map .site-map .a-link .u-line {
    color: #101d32;
}
.foot-map .site-map .inner-list {
    margin-right: 0;
    min-width: 0;
}
.foot-map .site-map .inner-list li {
    margin-bottom: 10px;
    font-size: 14px;
}
.foot-map .site-map .inner-list li.inner-ttl {
    font-weight: bold;
    font-size: 16px;
}
@media (max-width: 1200px) {
    .foot-map {
        flex-direction: column;
    }
    .foot-map .f-logo-side {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        margin: -10px -15px;
        width: auto;
    }
    .foot-map .f-logo-side > * {
        margin: 10px 15px;
        width: 238px;
    }
    .foot-map-list-banner {
        flex-direction: row;
        justify-content: center;
        margin-left: auto !important;
        margin-right: auto !important;
        width: auto !important;
    }
    .foot-map-list-banner-item {
        margin: 5px;
    }
    .foot-map-list-banner-iso27001,
    .foot-map-list-banner-iso27017,
    .foot-map-list-banner-soc2 {
        height: 68px;
    }
    .foot-map .site-map {
        margin-top: 40px;
    }
}

@media (max-width: 1000px) {
    .foot-map .site-map .inner-list li.inner-ttl {
        font-size: 14px;
    }
    .foot-map .site-map .inner-list li {
        font-size: 10px;
    }
}
@media (max-width: 768px) {
    .foot-map .f-logo-side {
        justify-content: center;
        align-items: center;
    }
    .foot-map .esp-list,
    .foot-map .site-map {
        display: none;
    }
    .foot-map .site-map-sp {
        display: block;
    }
    .foot-map-logo img {
        width: 170px;
    }
}

/* .cp-right-area */
.cp-right-area {
    border-top: 1px solid #cdcdcd;
}
.cprght-inner {
    display: flex;
    align-items: center;
    margin: 30px auto;
    width: 80%;
    max-width: 1200px;
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
    flex-direction: column;
}
.cprght-inner .copy {
    white-space: nowrap;
    margin-top: 30px;
}
.cprght-inner ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: -6px;
    margin-left: auto;
    margin-right: auto;
}
.cprght-inner ul li {
    margin-bottom: 6px;
}
.cprght-inner ul li a {
    display: block;
}
.cprght-inner ul li {
    position: relative;
    padding: 0 10px;
}
.cprght-inner ul li::after {
    content: "|";
    position: absolute;
    top: 0;
    right: -3px;
    color: #cdcdcd;
}
.cprght-inner ul li:last-child {
    padding-right: 0;
}
.cprght-inner ul li:last-child::after {
    display: none;
}
.sns-area {
    width: 98px;
}
.sns-area .sns-linker {
    padding: 0 5px;
}
.sns-area .sns-linker img {
    width: 24px;
    height: auto;
    aspect-ratio: 1/1;
}
.sns-area .sns-linker:last-of-type {
    padding-right: 0;
}

/* .footer-siteseal */
.footer-siteseal {
    background: #f5f5f5;
    padding-top: 25px;
    padding-bottom: 25px;
}
.footer-siteseal-list {
    display: flex;
    justify-content: center;
}
.footer-siteseal-list-item {
    margin: 5px;
    background: #fff;
}
.footer-siteseal #csi_siteseal_tag {
    display: block;
    background: #fff;
    width: 115px;
    height: 57px;
}

/* .footer-license */
.footer-license {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 12px;
}

/* .footer-brand */
.footer-brand {
    margin: 20px auto 0;
    width: 80%;
    max-width: 1200px;
    text-align: center;
}
.footer-brand-title {
    margin-top: 25px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
}
.footer-brand-list {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}
.footer-brand-list-item {
    margin: 10px;
}
@media (max-width: 768px) {
    .footer-brand {
        width: auto;
    }
}

/* .gmoGroupFooter */
.gmoGroupFooter {
    margin-top: 20px;
    border: none;
}
.gmoGroupFooter_inner {
    margin-right: auto;
    margin-left: auto;
    width: 80% !important;
    max-width: 1200px !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
}

/* ページトップボタン */
#page_top {
    display: none;
    width: 50px;
    height: 50px;
    position: fixed;
    right: 10px;
    bottom: 30px;
    /* background: #1d2b39; */
    border-radius: 50%;
    z-index: 6000;
    transition: opacity 0.5s cubic-bezier(0, 0, 0, 0.4);
}
#page_top a {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    text-decoration: none;
    background: url(../img/ptop-arrow.png) no-repeat;
    transition: opacity 0.5s cubic-bezier(0, 0, 0, 0.4);
}
#page_top:hover {
    cursor: pointer;
    transition: opacity 0.5s cubic-bezier(0, 0, 0, 0.4);
    opacity: 0.85;
}

/* オンライン商談バナー */
#bnr_online {
    display: none;
    position: fixed;
    z-index: 100000000;
    /* right: 6px;
    bottom: 4px; */
    right: 15px;
    bottom: 13px;
    /* bottom: 93px; 80 + 13 */
}
#bnr_online .bnr-main {
}
#bnr_online .bnr-main .closer {
    width: 20px;
    height: 20px;
    background-image: url(../img/bnr/bnr_online_close.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
    margin: 0 0 3px auto;
}
#bnr_online .bnr-main .closer:hover {
    cursor: pointer;
}
#bnr_online .bnr-main .bnr-card {
    width: 300px;
    display: block;
    line-height: 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 142, 172, 0.3);
}
#bnr_online .opner {
    display: block;
    width: 300px;
    line-height: 0;
    box-shadow: 0px 3px 5px 0px rgba(0, 142, 172, 0.25);
}
#bnr_online .bnr-main .bnr-card img,
#bnr_online .opner img {
    width: 100%;
}
#bnr_online .bnr-main.s-off,
#bnr_online .opner.s-off {
    display: none;
}

.view_timer {
    display: none;
}
/*<<< ----- footer ----- */

/* ----- all ----- >>>*/
.flex {
    display: flex;
    align-items: center;
}
/*<<< ----- all ----- */

@media (min-width: 1430px) {
    .nav-label li {
        border-right: none;
    }
    .nav-label li:first-of-type {
        border-left: none;
    }
}
/* @media (min-width: 1401px) {
  .header-allside.fix .header-inside {
    width: 1050px;
  }
} */
@media (max-width: 1400px) {
    /* .header-allside.fix .header-right-side .hed-pc .cv-headbtn {
    width: 80px;
    font-size: 12px;
  }
  .header-allside.fix .header-right-side {
    margin-left: 0;
  }
  .header-allside.fix .header-right-side .fixcv li {
    padding-right: 10px;
    padding-left: 10px;
  }
  .header-allside.fix .header-right-side .fixcv li a {
    font-size: 12px;
    padding: 0;
  }
  .header-allside.fix .header-right-side .fixcv li a::before {
    display: none;
  }
  .header-allside.fix .header-right-side .fixcv {
    justify-content: center;
  }
  .header-allside .h-conts {
    width: calc(100% - 427px);
  } */
    /* .header-allside.fix .h-conts {
    width: calc(100% - 527px);
  } */
}

main#cases {
    padding-top: 61px !important;
}
@media (max-width: 950px) {
    main#cases {
        padding-top: 55px !important;
    }
}
@media (max-width: 1350px) {
    .btn-blue-aslink {
        font-size: 16px;
        padding: 28px 55px;
    }
    .btn-blue-aslink::before {
        width: 15px;
        height: 15px;
        left: 20px;
    }
}
@media (max-width: 1200px) {
    .hd-upperct .contacts {
        font-size: 10px;
    }
    .header-allside .h-conts li {
        font-size: 12px;
    }
    .balloon-cmt {
        position: absolute;
        top: -20px;
        left: -33.5px;
        width: 95px;
    }
}
@media (max-width: 1050px) {
    .header-allside .h-conts li {
        font-size: 10px;
    }
    .header-allside.fix .header-right-side .fixcv li {
        padding-right: 7.5px;
        padding-left: 7.5px;
    }
    .header-allside.fix .header-right-side .fixcv li a {
        font-size: 11px;
    }
}
@media (min-width: 950px) {
    .header-left-side .sp-oldname {
        display: none;
    }
    .header-allside .header-inside .page-linker .leadtxt {
        color: #3aafc5;
        border-bottom: none !important;
    }
}

@media (min-width: 951px) and (max-width: 1100px) {
    .header-allside .header-inside .middle-down {
        width: 100%;
    }
    .header-allside .header-inside .page-linker .leadtxt,
    .header-allside .header-inside .page-linker .nlk {
        font-size: 14px;
    }
    .header-allside .header-inside .ud-ttl-link {
        margin-top: 0;
        right: 110px;
    }
}

@media (max-width: 950px) {
    .foot-conts .btn-blue-aslink::before {
        display: none;
    }
    .btn-blue-aslink {
        padding: 20px 40px;
    }
    .hed-pc {
        display: none;
    }
    .hed-sp {
        display: block;
    }

    /* ----- header ----- >>>*/
    .header-allside {
        position: fixed;
        padding: 12.5px 4%;
        box-sizing: border-box;
    }
    .header-right-side {
        margin-right: 0;
    }
    .hd-upperct {
        display: none;
    }
    .header-allside .h-conts {
        display: none;
    }
    .header-left-side {
        margin-left: 0;
        position: relative;
    }
    .header-left-side .sp-oldname {
        position: absolute;
        right: -4%;
        bottom: 0;
        transform: translateX(100%);
        font-size: 10px;
        color: #7d7d7d;
        line-height: 1;
    }
    .h-logo {
        line-height: 0;
    }
    .h-logo img,
    .fix .h-logo img {
        width: 126px;
        height: 30px;
    }
    .header-right-side {
        display: flex;
        align-items: center;
        margin-left: auto;
    }
    .header-allside.fix .header-right-side {
        margin-left: auto;
    }
    .header-right-side .fixcv,
    .header-allside.fix .header-right-side .fixcv {
        display: none;
    }
    .sp-burger {
        width: 18px;
    }
    .line-one,
    .line-two,
    .line-three {
        width: 100%;
        height: 2px;
        display: block;
        background: #005bac;
        border-radius: 10px;
        transition: 0.35s cubic-bezier(0.4, 0, 0, 1);
    }
    .sp-burger.active .line-one {
        transform: rotate(45deg);
        transform-origin: left top 0;
    }
    .sp-burger.active .line-two {
        opacity: 0;
    }
    .sp-burger.active .line-three {
        transform: rotate(-45deg);
        transform-origin: left top 0;
        width: 100%;
        margin-top: -1px;
        margin-left: -1px;
    }
    .line-two {
        margin: 5px 0;
    }
    .line-three {
        width: 60%;
    }
    /*<<< ----- header ----- */
    /* ------ sp-nav ------ >>>*/
    .sp-nav {
        display: block;
        position: fixed;
        top: 83px;
        transition: transform 0.7s;
        width: 100%;
        background: #fff;
        height: calc(100vh - 83px);
        overflow-y: scroll;
        transform: translateY(calc(-101% - 83px));
    }
    .sp-nav.active {
        transition: transform 0.7s;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
        transform: translateY(0);
    }
    .sp-nav .page-links {
        background: #fff;
    }
    .sp-nav .page-links li {
        font-size: 14px;
        letter-spacing: 0;
        display: block;
        position: relative;
        border-bottom: 1px solid #e8e8e8;
    }
    .sp-nav .page-links .hv-inner li {
        font-size: 12px;
    }
    .sp-nav .ic-calling::before {
        color: #005bac;
    }
    .sp-nav .page-links li a.blank::after {
        margin-left: 8px;
        font-size: 10px;
        line-height: 1.6;
    }
    .sp-nav .page-links li.linker .inbox {
        display: none;
    }
    .sp-nav .page-links li.linker ul {
        background-color: #f5f5f5;
        border-top: 1px solid #e8e8e8;
        /* padding: 7.5px 4%; */
    }
    .sp-nav .page-links li.linker .bg-body {
        background: #fff;
    }
    .sp-nav .page-links li.linker ul.hv-inner {
        border: 0;
    }
    .sp-nav .page-links li.linker ul li.genre {
        margin-bottom: 5px;
        margin-top: 10px;
    }
    .sp-nav .page-links li.linker ul li.genre span {
        padding-bottom: 10px;
        display: block;
        border-bottom: 1px solid #ced9f3;
    }
    .sp-nav .page-links li.linker ul li {
        border-bottom: 0;
    }
    .sp-nav .page-links li.linker ul li a {
        padding: 17.5px 6%;
        display: block;
        color: #101d32;
        border-bottom: 1px solid #e8e8e8;
    }
    .sp-nav .page-links li.linker ul li a::after {
        color: #005bac;
    }
    .sp-nav .page-links li.linker ul li .nlk {
        position: relative;
    }
    .sp-nav .page-links li.linker ul li .nlk.nlk-second {
        font-size: 12px;
        margin-left: 2%;
    }
    .sp-nav .page-links li.linker ul li.li-second::after {
        font-size: 8px;
    }
    .sp-nav .page-links li.linker ul li.ttl-ver2 {
        padding: 20px 4% 16px 4%;
        color: #3aafc5;
    }
    .sp-nav .page-links li.linker ul li::after {
        position: absolute;
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 12px;
        right: 5%;
        top: 18px;
        color: #005bac;
    }
    .sp-nav .page-links li.linker ul li a.non-ic {
        padding-left: 0;
    }
    .sp-nav .page-links li.linker ul li .nlk.non-ic::before {
        display: none;
    }
    .sp-nav .page-links li.linker ul li .nlk .spn {
        font-size: 12px;
        display: inline-block;
        padding-top: 10px;
    }
    .sp-nav .page-links a.blk {
        display: block;
    }
    .sp-nav .page-links .addpdng {
        padding: 18px 4%;
        box-sizing: border-box;
    }
    .sp-nav .page-links li .ttl {
        position: relative;
        width: 100%;
        display: block;
    }
    .sp-nav .page-links li .ttl::before {
        position: absolute;
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        right: 34px;
        top: 16.5px;
        color: #005bac;
        transform: rotate(90deg);
        transition: transform 0.35s ease;
    }
    .sp-nav .page-links li .ttl.active::before {
        transform: rotate(-90deg);
        transition: transform 0.35s ease;
    }
    .sp-nav .sp-nav-controll {
        padding: 25px 4% 10px;
        text-align: center;
    }
    .sp-nav .sp-nav-controll .link-out {
        font-size: 21px;
        padding: 10px;
        padding-left: 31px;
    }
    .sp-nav .sp-nav-controll .link-out a {
        color: #005bac;
    }
    .sp-nav .sp-nav-controll .link-out a::before {
        top: 10px;
        left: -31px;
    }
    .sp-nav .sp-nav-controll .btn {
        margin: 20px 0;
        text-align: center;
    }
    /*<<< ------ sp-nav ------ */
    .kv-area {
        margin-top: 0;
        padding-top: 56px;
    }
    hr.non-kv {
        margin-top: 0;
        padding-top: 56px;
    }
    .nav-label.fix {
        top: 84px;
    }

    /* online-banner */
    #bnr_online .bnr-main .closer {
        width: 24px;
        height: 24px;
    }
    #bnr_online .bnr-main .bnr-card,
    #bnr_online .opner {
        width: 180px;
    }
}

@media (max-width: 768px) {
    body {
        padding-top: 0;
    }
    .pc {
        display: none;
    }

    /* header */
    .sp-nav {
        top: 55px;
        height: calc(100vh - 55px);
        transform: translateY(calc(-101% - 55px));
    }
    .sp-nav.active {
        transform: translateY(0);
    }
    .header-allside.fix {
        top: 0;
    }
    /* header */

    /* ----- main ----- >>>*/

    /* news */
    .news-row {
        display: block;
    }
    .news-row dt,
    .news-row dd {
        width: 100%;
        min-width: unset;
    }
    .news-row dt {
        margin-bottom: 15px;
    }

    /* -------------- KV ---------------- */
    .kv-area {
        height: 120px;
    }
    .kv-area::before {
        background: url("../img/normal-kvback_sp_v4.png") no-repeat;
        background-size: cover;
        background-position: center;
        height: 120px;
    }
    .kv-area .ttl-h1 {
        font-size: 30px;
        line-height: 1.4;
    }
    /* -------------- breadcrumbs ---------------- */
    .breadcrumbs ul,
    .sec-inner {
        width: 92%;
    }
    .breadcrumbs {
        font-size: 12px;
    }
    .breadcrumbs li {
        line-height: 1.5;
    }
    /* -------------- section,text ---------------- */
    .sec-in-conts {
        margin-top: 50px;
    }
    .sec-inner .intro-txt {
        margin-bottom: 50px;
    }

    /* font */
    .ttl-h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .ttl-h3 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    .ttl-h4 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .sec.small-area {
        padding: 40px 0;
    }
    .sec.middle-area {
        padding: 50px 0;
    }
    .sec.big-area {
        padding: 100px 0;
    }
    .sec-inner p {
        margin-bottom: 20px;
        font-size: 14px;
    }

    ul.notes li,
    ul.comment li,
    ol.comment-num li {
        font-size: 10.5px;
        line-height: 15px;
        letter-spacing: 0.5px;
    }
    ul.list li,
    ol.num-list li {
        font-size: 14px;
        line-height: 1.75;
        letter-spacing: 0.8px;
    }
    ul.list li .list li,
    ol.num-list li .num-list li {
        padding-left: 31px;
    }
    ul.list li .list li::before,
    ol.num-list li .num-list li::before {
        left: 12px;
    }
    .note-box {
        width: calc(100% - 40px);
        padding: 20px;
        margin: 20px auto;
    }
    .note-box p {
        margin-bottom: 10px;
    }
    .note-box .l-font {
        font-size: 20px;
    }
    .note-box .ttl span {
        margin-left: 0;
    }

    /* flex */
    .col-flex,
    .row-flex {
        display: block;
    }

    .col-flex .w-3,
    .col-flex .w-4,
    .col-flex .w-5,
    .col-flex .w-6,
    .col-flex .w-7 {
        width: 100%;
    }
    .col-flex .txt,
    .col-flex:nth-of-type(2n) .txt,
    .col-flex .flex-left,
    .col-flex .flex-right {
        padding: 0;
    }
    .col-flex .half,
    .col-flex .half-left {
        width: 100%;
        padding: 0;
    }
    .row-flex.two-side,
    .row-flex.three-side,
    .row-flex.four-side {
        width: 100%;
        margin: auto;
    }
    .row-flex.two-side .conts,
    .row-flex.three-side .conts,
    .row-flex.four-side .conts {
        width: 100%;
        padding: 0;
        padding-bottom: 50px;
    }
    .nav-label.fix {
        width: 92%;
        top: 55px;
    }
    .nav-label.centering {
        justify-content: initial;
    }
    .nav-label li {
        width: calc(100% / 2 - 22px);
        font-size: 12px;
        min-width: unset;
        margin: 10px 0;
        border-left: 0;
    }
    .nav-label li:nth-of-type(2n) {
        border-right: 0;
    }
    .nav-label.sp-mini li {
        font-size: 11px;
    }
    .function .upper-conts::after,
    .function .cards .open + .lower-conts::after {
        /* font-size: 24px; */
        font-size: 12px;
        width: 30px;
        height: 30px;
    }
    .q-and-a .cards .c-ttl .icon.qa-q,
    .q-and-a .cards .c-ttl .icon.qa-a,
    .q-and-a .cards .c-ttl .icon.qa-q::before,
    .q-and-a .cards .c-ttl .icon.qa-a::before {
        width: 30px;
        height: 30px;
        padding-bottom: 0;
    }
    .q-and-a .cards .c-ttl .icon.qa-q,
    .q-and-a .cards .c-ttl .icon.qa-a {
        padding-right: 0;
    }
    .q-and-a .cards .c-ttl .icon.qa-q::before,
    .q-and-a .cards .c-ttl .icon.qa-a::before {
        font-size: 30px;
        left: 10px;
        top: 2px;
    }
    .q-and-a .cards .c-ttl .icon.qa-q + .subj,
    .q-and-a .cards .c-ttl .icon.qa-a + .subj {
        display: initial;
    }
    .q-and-a .cards .upper-conts,
    .q-and-a .lower-conts {
        padding: 30px 20px;
    }
    .q-and-a.case .lower-conts p.only-case,
    .q-and-a .lower-conts p.only-qa {
        padding-left: 0;
    }
    .q-and-a .cards .upper-conts::after {
        font-size: 16px;
        right: 8px;
        top: 10px;
    }
    .q-and-a .cards .c-ttl {
        font-size: 20px;
        line-height: 32px;
    }
    .q-and-a .cards .c-ttl .icon {
        padding-left: 40px;
        padding-right: 0;
        padding-bottom: 15px;
    }
    .category .card {
        width: calc(100% - 20px);
        padding: 10px;
        min-width: unset;
    }
    .sp-table-line {
        overflow-x: scroll;
        position: relative;
    }
    .flow-explain .steps {
        font-size: 14px;
        padding: 5px 15px;
        margin-top: 3px;
        margin-right: 15px;
    }
    .flow-explain .ttl-h3 {
        margin-bottom: 30px;
    }
    .w-note {
        margin: 20px auto;
    }
    .flow-explain .triangle-bottom {
        border-top: 15px solid #005bac;
        border-right: 20px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 20px solid transparent;
        margin-top: 10px;
    }
    .flow-explain img.rds {
        border-radius: 10px;
    }

    /* 事例 */
    .sec-case {
        padding: 60px 0 45px;
    }
    .cs-logo-area {
        width: 90%;
        margin-bottom: 30px;
    }
    .carousel-area .slick-track {
        margin-top: -12px;
        margin-bottom: 20px;
    }
    .carousel-area .slick-slide {
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .storie-card {
        width: calc(100% - 30px);
        border-radius: 15px;
        box-shadow: 0px 0px 12px 0px rgba(59, 188, 206, 0.19);
    }
    .carousel-area .slick-slide .storie-card::before {
        border-radius: 15px;
    }
    .storie-card .upper-card .fig,
    .cspage-flex .storie-card .upper-card .fig {
        height: 53.34vw;
        min-height: 200px;
        max-height: 250px;
        align-items: center;
    }
    .storie-card .lower-card {
        padding: 15px 20px;
        min-height: 135px;
    }
    .storie-card .lower-card .cs-intro {
        font-size: 14px;
        line-height: 1.45;
    }
    .storie-card .lower-card .logo img {
        max-height: 35px;
    }
    .carousel-area .slick-prev::before,
    .carousel-area .slick-next::before {
        width: 7px;
        height: 17px;
        left: 16.5px;
        top: 11.5px;
    }
    .carousel-area .slick-prev,
    .carousel-area .slick-next {
        width: 40px;
        height: 40px;
        top: calc(50% - 20px);
    }
    .carousel-area .slick-prev {
        left: 4%;
    }
    .carousel-area .slick-next {
        right: 4%;
    }
    .carousel-area .slick-prev:hover,
    .carousel-area .slick-prev:focus,
    .carousel-area .slick-next:hover,
    .carousel-area .slick-next:focus {
        opacity: 1;
    }
    /* 事例 */

    .btn-through {
        font-size: 14px;
    }
    .btn-through.middle-size {
        padding: 23px 25px;
    }

    table th,
    table td {
        font-size: 14px;
    }
    .table-dl {
        font-size: 14px;
    }

    /*<<< ----- main ----- */

    /* ----- footer ----- >>>*/
    .group_foot_area {
        display: none;
    }
    .foot-conts {
        padding: 50px 0 30px;
        margin-bottom: 50px;
    }
    .foot-conts.m-pd {
        padding: 70px 0;
        margin-bottom: 0;
    }
    .foot-conts .ftc-inner {
        display: block;
        width: 89.3%;
    }
    .foot-conts .btn-blue-aslink::before {
        display: block;
        width: 25px;
        height: 25px;
        left: 23.5px;
    }
    .foot-conts .btn-blue-aslink {
        width: calc(100% - 144px);
        display: block;
        margin-bottom: 20px;
        padding: 25px 72px;
        font-size: 21px;
        line-height: 1.5;
        box-sizing: content-box;
    }
    .foot-map {
        display: block;
        text-align: center;
        width: 89.3%;
        margin: 30px auto 20px;
    }
    .foot-map .cp-right {
        font-size: 14px;
        margin-top: 28px;
    }
    .sns-area {
        text-align: center;
        margin: 25px auto;
        width: 89.3%;
    }
    .sns-area .sns-linker {
        padding: 0px 7.5px;
    }
    .sns-area .sns-linker img {
        width: 30px;
    }
    /* .cp-right-area{
        font-size: 16px;
        width: 89.3%;
    }     */
    .brand-area {
        display: block;
        text-align: center;
        width: 89.3%;
        margin-bottom: 0;
        margin-top: 30px;
    }
    .brand-area p {
        font-size: 14px;
        line-height: 18px;
        margin: 13px auto 25px;
    }
    .brand-area ul {
        justify-content: center;
    }
    .brand-area ul li {
        padding-left: 0;
        padding-bottom: 25px;
    }
    .brand-area ul li.ba-n2 img,
    .brand-area ul li.ba-n4 img {
        max-width: calc(100% - 20px);
        height: auto;
    }

    .partner-cvarea,
    .partner-cvarea_second {
        display: block;
        height: initial;
        width: 100%;
        padding: 47px 0;
    }
    .partner-cvarea .left-cz,
    .partner-cvarea_second .left-cz {
        width: 89.3%;
        margin: 0 auto;
        padding: 0 0 37px;
        text-align: center;
    }
    .partner-cvarea .ttl-h4,
    .partner-cvarea_second .ttl-h4 {
        font-size: 22px;
    }
    .partner-cvarea p,
    .partner-cvarea_second p {
        font-size: 16px;
        letter-spacing: 0.8px;
    }
    .partner-cvarea .btn-through,
    .partner-cvarea_second .btn-through {
        width: calc(80% - 62px);
        max-width: 238px;
        margin: auto;
        display: block;
    }

    #page_top {
        display: none;
    }
    /*<<< ----- footer ----- */
}

/*<<< ----- tablelayout ----- */

.table-dl {
    display: table;
    border-top: 1px solid #cdcdcd;
    width: 100%;
}
.table-dl:last-of-type {
    border-bottom: 1px solid #cdcdcd;
}
.table-dl dt {
    display: table-cell;
    font-weight: bold;
    background: #f5f5f5;
    padding: 18px 0;
    text-align: center;
    width: 34%;
    max-width: 400px;
    border-right: 1px solid #cdcdcd;
}
.table-dl dd {
    display: table-cell;
    padding: 18px 0 18px 40px;
    line-height: 1.75;
}

/* top　バッジ */
.badge-exptxt {
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 10px 0;
}
.badge-exptxt p {
    text-align: right;
    font-size: 10px;
    color: #fff;
    max-width: 1200px;
    margin: auto;
    width: 83.3%;
}
.one-badge {
    position: absolute;
    bottom: 50px;
    width: 100%;
    z-index: -1;
    right: 0;
}
.one-badge p {
    text-align: right;
    max-width: 1200px;
    margin: auto;
    width: 83.3%;
}
.sp-badge {
    margin-top: 50px;
}
.one-badge p img,
.sp-badge img {
    width: 400px;
    max-width: 100%;
}
.sp-badge {
    display: none;
}
@media screen and (max-width: 1200px) {
    .one-badge {
        display: none;
    }
    .sp-badge {
        display: block;
    }
}
@media (max-width: 768px) {
    .badge-exptxt {
        width: calc(100% - 40px);
        padding: 10px 20px;
    }
    .badge-exptxt p {
        font-size: 9px;
        width: 100%;
        text-align: center;
    }
    .sp-badge img {
        width: 100%;
        max-width: 400px;
    }
}

/* テレワーク支援　topのKV変更 */
.kv-infobox {
    opacity: 0;
    max-width: 500px;
    background: rgba(245, 245, 245, 0.7);
    padding: 20px;
    animation: loading-fade 1s cubic-bezier(0.4, 0, 0, 1) forwards 1.5s;
    position: relative;
    z-index: 2;
}
.kv-infobox .ttl {
    font-size: 1.25em;
    font-weight: bold;
    color: #005bac;
}
.kv-infobox .txt {
    color: #555;
    letter-spacing: 1.25px;
    line-height: 30px;
    margin-bottom: 20px;
}
.kv-infobox .txt .bold {
    font-weight: bold;
}
.kv-infobox .l-exp {
    font-size: 22px;
    text-align: center;
    width: 45%;
}
.kv-infobox .r-exp {
    min-width: 50%;
}

.table-box .ttl-h4 {
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    line-height: 1.25;
}
.table-box .ttl-h4 .mini {
    font-size: 16px;
}
.top.note-box {
    max-width: 1015px;
}

/* .sns-sec{

} */
.ttl-h2.ss-ttl {
    font-size: 36px;
    margin-bottom: 20px;
}
.ss-exp {
    font-size: 20px;
}
.sns-link-icons {
    text-align: center;
}
.sns-link-icons a {
    margin-left: 20px;
    margin-right: 20px;
}
.sns-link-icons a img {
    width: 100%;
    max-width: 80px;
}

/* webinar */
.webinar-intr {
    position: relative;
    padding: 120px 25px 40px;
    width: calc(100% - 50px);
    background: url(../img/seminar/webseminar_bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr.qa-back {
    background: url(../img/seminar/qaseminar_bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr.utili-back {
    background: url(../img/seminar/utiliseminar_bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr.utili-back-upgrade {
    background: url(../img/seminar/utiliseminar02_bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr.experience-back {
    background: url(../img/seminar/experience-back.png) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr.lawyer-back {
    background: url(../img/seminar/lawyer-back.png) no-repeat;
    background-position: 75% center;
    background-size: cover;
}
.webinar-intr.tutor-back {
    background: url(../img/seminar/tutor-back.png) no-repeat;
    background-position: 75% center;
    background-size: cover;
}
.webinar-intr.gvm-back {
    background: url(../img/seminar/gvm-back.png) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr.tenpoints-back {
    background: url(../img/seminar/tenpoints-back.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}
.webinar-intr .ttl-h2-mini {
    font-size: 34px;
}
.webinar-intr::before,
.webinar-intr::after {
    content: "";
    position: absolute;
}
.webinar-intr::before {
    background: url(../img/seminar/webseminar.png) no-repeat;
    background-size: contain;
    left: 0;
    top: 0;
    width: 280px;
    height: 59px;
}
.webinar-intr.experience-back::before {
    background: url(../img/seminar/handson.png) no-repeat;
    background-size: contain;
    left: 0;
    top: 0;
    width: 249px;
    height: 59px;
}
.webinar-intr.lawyer-back::before,
.webinar-intr.tutor-back::before,
.webinar-intr.normal-webinar::before {
    background: url(../img/seminar/webseminar-normal.png) no-repeat;
    background-size: contain;
    left: 0;
    top: 0;
    width: 210px;
    height: 59px;
}
.webinar-intr.non-bef::before {
    display: none;
}
.webinar-intr::after {
    background: url(../img/seminar/free.png) no-repeat;
    background-size: contain;
    top: 25px;
    right: 25px;
    width: 86.5px;
    height: 86.5px;
}
.webinar-intr .semina-blue-badge {
    left: 0;
    top: 0;
    width: 249px;
    height: 59px;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    letter-spacing: 0.25px;
    background-color: #005bac;
}
.webinar-intr .ttl-h2 {
    margin-bottom: 40px;
}
.webinar-intr .ttl-h2 span {
    background: #fff;
    margin: 3px;
    display: inline-block;
    padding: 8px 20px 3px;
}
.webinar-intr .ttl-h2 span.fir-grade {
    color: #009933;
}
.webinar-intr .ttl-h2 span.up-grade {
    color: #0078cc;
}
.webinar-intr .int-txt {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
}

/* modal */
/* .movie-obj{
    width: 54%;
} */
.movie-obj .thumb {
    border-radius: 15px;
    display: flex;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.34);
    transition: box-shadow 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.movie-obj .thumb:hover {
    cursor: pointer;
    box-shadow: 5.657px 5.657px 18px 0px rgba(53, 53, 53, 0.5);
    transition: box-shadow 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.movie-obj .thumb img {
    width: 100%;
}
.md-zindx.comeon {
    z-index: 1000000000;
}
.md-conts {
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    display: none;
}
.md-conts .md-back {
    background: #005bac;
    opacity: 0.9;
    position: fixed;
    width: 100vw;
    height: 100vh;
}
.md-conts .md-close {
    width: 45px;
    height: 45px;
    position: absolute;
    right: -55px;
    top: 4px;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.md-conts .md-close::before,
.md-conts .md-close::after {
    position: absolute;
    content: "";
    background: #fff;
    width: 100%;
    height: 0;
    border: 2.5px solid #fff;
    border-radius: 20px;
    left: 0;
    top: 24px;
}
.md-conts .md-close:hover {
    transform: scale(1.25);
    transition: all 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.md-conts .md-close::before {
    transform: rotate(45deg);
}
.md-conts .md-close::after {
    transform: rotate(135deg);
}
.md-switch .md-conts .md-body {
    position: absolute;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -50%);
    width: 70vw;
    max-height: 90vh;
    max-width: 1400px;
}
.md-switch.md-active .md-conts .md-body {
}

/* top-only */
.md-switch .md-conts .md-body .md-mv {
    overflow: hidden;

    border-radius: 15px;
    /* border: 3px solid #005bac; */
    border: 3px solid #fff;
    box-shadow: 0px 8px 18px 0px rgba(53, 53, 53, 0.5);
    box-sizing: border-box;
    width: 100%;
    height: 0;
    margin-bottom: 30px;

    /* animation: rechangeheight 0.5s forwards; */
}
.md-switch.md-active .md-conts .md-body .md-mv {
    /* height: 100%; */
    /* height: 39.375vw; */
    max-height: calc(90vh - 120px);
    animation: changeheight 0.5s forwards 0.45s;
}

.md-switch .md-conts .md-body .cta-area {
    width: calc(90% - 80px);
    margin: auto;
}
.md-switch .md-conts .md-body .cta-area .intro-text {
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
}

/* 2020.10.28 add float banner */
.float-banner {
    position: fixed;
    display: block;
    top: 410px;
    left: 0;
    z-index: 3;
    animation: 1.5s opening;
}
.float-banner a:hover {
    opacity: 1;
}
.float-banner img {
    max-width: 56px;
}
.float-banner .close {
    display: block;
    position: absolute;
    width: 13px;
    height: 13px;
    top: 0;
    right: 0;
    background: #fff;
    cursor: default;
}
.close::before,
.close::after {
    content: "";
    position: absolute;
    background: #333;
    height: 9px;
    width: 1.5px;
    top: 2px;
    left: 50%;
    border-radius: 2px;
}
.close::before {
    transform: translateX(-50%) rotate(45deg);
}
.close::after {
    transform: translateX(-50%) rotate(-45deg);
}

@keyframes opening {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes changeheight {
    0% {
        height: 0;
    }
    100% {
        height: 39.375vw;
    }
}
@keyframes spchangeheight {
    0% {
        height: 0;
    }
    100% {
        height: calc(47.8125vw + 3px);
    }
}

@media screen and (max-width: 768px) {
    .kv .exp {
        padding-bottom: 50px !important;
    }
    .del430-zero {
        margin-bottom: 70px;
    }
    .del430 {
        margin-bottom: 96px;
    }
    .top.note-box {
        margin-left: 20px;
        margin-right: 20px;
        width: calc(100% - 80px);
    }
    .top.note-box p {
        font-size: 14px;
        line-height: 1.75;
        letter-spacing: 0.8px;
    }
    .ttl-h2.ss-ttl {
        font-size: 24px;
        letter-spacing: 0;
    }

    /* webinar */
    .webinar-intr::before {
        left: 0;
        top: 0;
        width: 200px;
        height: 43px;
    }
    .webinar-intr::after {
        top: 10px;
        right: 10px;
        width: 50px;
        height: 50px;
    }
    .webinar-intr .ttl-h2 {
        font-size: 22px;
    }
    .webinar-intr .int-txt {
        font-size: 16px;
    }
    .webinar-intr .ttl-h2-mini {
        font-size: 18px;
    }

    .md-conts .md-close {
        width: 30px;
        top: -40px;
        right: 4px;
    }
    .md-conts .md-close::before,
    .md-conts .md-close::after {
        top: 13px;
    }
    .md-switch .md-conts .md-body {
        width: 85vw;
    }
    .md-switch .md-conts .md-body .md-mv {
        margin-bottom: 30px;
        border-radius: 10px;
    }
    .md-switch.md-active .md-conts .md-body .md-mv {
        animation: spchangeheight 0.5s forwards 0.45s;
    }
    .md-switch .md-conts .md-body .cta-area {
        width: 100%;
        margin: auto;
    }
    .float-banner {
        display: none;
    }
}

/* ----- 2020.12.1 plan name renewal ----- */

/* function section */
/* 機能面 */
.func-section {
    padding: 100px 0;
    background: url(../img/top_neo/bg-sec2_v2.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.nblue {
    color: #005bac;
}
.func-dfp {
    font-size: 18px;
    line-height: 1.75;
    letter-spacing: 0.75px;
}
.func-h3 {
    font-weight: bold;
    line-height: 1.75;
    font-size: 36px;
    margin-bottom: 30px;
}
.func-section .flex-inner {
    max-width: 1200px;
    width: 80%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.func-section .flex-inner .fig-board {
    background-color: #fff;
    width: calc(50% - 30px);
    margin: 0 15px;
    padding: 40px;
    border-radius: 14px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    min-width: 480px;
    display: flex;
    align-items: center;
}
.func-section .flex-inner .fig-board img {
    width: 100%;
}
.func-section .flex-inner .r-side {
    order: 2;
    width: 50%;
    box-sizing: border-box;
    padding-left: 50px;
    line-height: 1.75;
}

.mdbody {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    z-index: 100000000;
    transition: 0.5s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.mdbody.open {
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
}
.md-mgnyfg {
    position: relative;
}
.md-mgnyfg .sw {
    /* position: relative; */
    line-height: 0;
}
.md-mgnyfg .sw::before {
    content: "";
    position: absolute;
    background: url(../img/mgnyfg.png) no-repeat;
    background-size: contain;
    background-position: center;
    width: 90px;
    height: 90px;
    right: 0;
    bottom: 0;
}
.md-mgnyfg .sw:hover {
    cursor: zoom-in;
}
.mdbody::before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
}
.md-mgnyfg .fig-area {
    background: #fff;
    position: absolute;
    padding: 50px;
    border-radius: 14px;
    box-sizing: border-box;
    width: 60vw;
    max-width: 1100px;
    min-height: 550px;
    height: 80vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
}
.mdbody img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
@media (max-width: 1241px) {
    .func-section {
        background: url(../img/top_neo/bg-sec2_sp_v2.png) no-repeat;
        background-size: cover;
        background-position: center;
    }
    .func-section .flex-inner {
        display: block;
    }
    .func-section .flex-inner .fig-board {
        margin: auto;
    }
    .func-section .flex-inner .r-side {
        padding: 0;
        width: 100%;
        margin-bottom: 70px;
    }
}
@media (max-width: 768px) {
    .func-section {
        padding: 50px 0 100px;
    }
    .func-section .flex-inner {
        width: 90%;
    }
    .func-section .flex-inner .fig-board {
        min-width: 0;
        width: 100%;
    }
    .md-mgnyfg .sw:hover {
        cursor: inherit;
    }
    .mdbody {
        display: none;
    }
    .md-mgnyfg .sw::before {
        display: none;
    }
}

/* new price table style */
.pricetable-section {
    padding: 90px 0;
    background-color: #f5f5f5;
}
.pricetable-section .pt-inner {
    max-width: 1020px;
    width: 70.805%;
    margin: auto;
}
.pricetable-section .plan-ttl {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.75;
    margin-bottom: 30px;
}

.pricetable-section .p-over-flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 40px;
}
.pricetable-section .acc-side {
    /* min-width: 630px; */
    /* width: calc((100% / 1.5) - 10px);    
    min-width: 789.5px; */
    width: 100%;
}
.pricetable-section .acc-side .inner-flex {
    display: flex;
    margin-bottom: 10px;
    flex-flow: row wrap;
}
.pricetable-section .acc-side .acc-toggle {
    height: 50px;
    position: relative;
    transition: 0.5s;
    /* width: 160px; */
    width: 420px;
    display: inline-block;
}
.pricetable-section .acc-side .acc-toggle::after {
    position: absolute;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    top: 16px;
    /* right: 22px; */
    right: 80px;
    transition: 0.35s;
}
.pricetable-section .acc-side .acc-toggle.open::after {
    right: 160px;
    top: 16px;
    transform: rotate(180deg);
}
.pricetable-section .acc-side .acc-toggle.f-toggle,
.pricetable-section .acc-side .acc-toggle.s-toggle {
    display: none;
}
.pricetable-section .acc-side .acc-toggle span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.5s;
}
.pricetable-section .acc-side .acc-toggle span.on {
    opacity: 1;
    transition: 0.5s;
}
.pricetable-section .acc-side .acc-hides {
    display: none;
}

.pricetable-section .neo-price-table {
    /* min-width: 300px; */
    width: 380px;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 0px 24px 0px rgba(59, 188, 206, 0.19);
    letter-spacing: 0;
}
.pricetable-section .neo-price-table .ttl-tab {
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px;
    box-sizing: border-box;
}
.pricetable-section .neo-price-table.free .ttl-tab {
    background-color: #7d7d7d;
}
.pricetable-section .neo-price-table.paid .ttl-tab {
    background-color: #005bac;
}
.pricetable-section .neo-price-table .ttl-tab p {
    margin-bottom: 0;
}
.pricetable-section .neo-price-table .ttl-tab span.sub {
    font-family: "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
    padding-top: 10px;
    display: inline-block;
    margin: 0;
    font-size: 0.7em;
}
.pricetable-section .neo-price-table.free {
    margin-right: 50px;
    background: #f5f5f5;
}
.pricetable-section .neo-price-table.free.open {
    background: #fff;
}
.pricetable-section .neo-price-table.paid {
    width: calc(100% - 430px);
}
.pricetable-section .neo-price-table.custom {
    margin-left: 30px;
    margin-bottom: 40px;
}
.pricetable-section .comment {
    margin-bottom: 15px;
    color: #7d7d7d;
}
.pricetable-section .comment li {
    font-size: 14px;
    line-height: 2;
    letter-spacing: 0;
}
.pricetable-section .table-container {
    box-sizing: border-box;
    padding: 15px 30px;
    background-color: #fff;
}
.pricetable-section .acc-hides .table-container {
    border-top: 1px solid #cdcdcd;
}
.pricetable-section .table-container.gray {
    background-color: #f5f5f5;
}
.pricetable-section .table-container .td-txt {
    display: flex;
}
.pricetable-section .table-container .td-txt.n-mgb {
    margin-bottom: 10px;
}
.pricetable-section .table-container .td-txt .l-side {
    margin-right: auto;
    min-width: 80px;
    padding-right: 25px;
}
.pricetable-section .table-container .td-txt .l-side.trans-left {
    padding-right: 13px;
    min-width: 0;
}
.pricetable-section .table-container .disclist,
.pricetable-section .table-container .n-disc li {
    position: relative;
    padding-left: 15px;
}
.pricetable-section .table-container .disclist::before,
.pricetable-section .table-container .n-disc li::before {
    content: "・";
    position: absolute;
    left: 0;
}
.pricetable-section .table-container .td-txt .trans-right {
    min-width: 112px;
}
.pricetable-section .table-container .td-txt .e-tl {
    width: 95px;
    padding-right: 20px;
}
.pricetable-section .table-container .td-txt .inner-notetxt {
    font-size: 0.75em;
    display: inline-block;
    padding-top: 10px;
    line-height: 1.25;
}

.pricetable-section .table-container.cost-table {
    display: flex;
    justify-content: center;
    min-height: 266px;
    padding: 25px;
    padding-bottom: 35px;
}
.pricetable-section .table-container.cost-table .cost-inner {
    width: 100%;
}
.pricetable-section .table-container.cost-table .cost-inner .nontax {
    font-size: 12px;
    margin-bottom: 30px;
    color: #7d7d7d;
}
.btn-blue-aslink.esp-btn {
    padding: 28px 65px 28px 28px;
    font-size: 16px;
    font-weight: bold;
    max-width: 270px;
    box-sizing: border-box;
    margin: auto auto 15px;
}
.pricetable-section .pf-cost {
    font-size: 48px;
    margin-bottom: -10px;
}
.pricetable-section .pf-large {
    font-size: 24px;
}
.pricetable-section .pf-middle {
    font-size: 18px;
}
.pricetable-section .pf-small {
    font-size: 14px;
    line-height: 1.75;
}
.pricetable-section .pfw-bold {
    font-weight: bold;
}
.pricetable-section .neo-price-table .more-tgl {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.price-tip {
    position: relative;
}
.price-tip .t-icon {
    transition: 0.35s;
    color: #269cb2;
    border: 2px solid #269cb2;
    border-radius: 20px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 12px;
}
.price-tip .t-txt {
    position: absolute;
    opacity: 0;
    transition: 0.35s;
    padding: 6px 10px;
    background-color: #d8eff3;
    box-shadow: 0 3px 6px rgba(0, 142, 172, 0.1);
    font-size: 12px;
    border-radius: 8px;
    border: 1px solid #b9dee7;
    width: 280px;
    box-sizing: border-box;
    right: -20px;
    bottom: calc(100% + 11px);
    z-index: -1;
    visibility: hidden;
    text-align: left;
}
.price-tip .t-txt::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #b9dee7 transparent transparent transparent;
    right: 17px;
    top: 100%;
}
.price-tip .t-txt::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 9px 0 9px;
    border-color: #d8eff3 transparent transparent transparent;
    right: 18px;
    top: 100%;
}

.price-tip:hover .t-icon {
    background-color: #d8eff3;
    transition: 0.35s;
    cursor: default;
}
.price-tip:hover .t-txt {
    opacity: 1;
    visibility: visible;
    transition: 0.35s;
    z-index: 1;
}

@media screen and (min-width: 769px) {
    .price-tip .t-txt {
        right: -20px;
        bottom: 50%;
        transform: translate(100%, 50%);
        width: 115px;
    }
    .price-tip .t-txt::before {
        right: calc(100% - 5px);
        top: calc(50% - 5px);
        transform: rotate(90deg);
    }
    .price-tip .t-txt::after {
        right: calc(100% - 5px);
        top: calc(50% - 5px);
        transform: rotate(90deg);
    }
}
@media screen and (min-width: 1000px) {
    .price-tip .t-txt {
        width: 150px;
    }
}

.op-pack-catalog .pack {
    display: flex;
    flex-flow: row wrap;
    background-color: #fff;
    padding: 18px 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    justify-content: center;
}
.op-pack-catalog .pack .l-pk {
    width: 330px;
    margin-right: auto;
    line-height: 1.75;
    letter-spacing: 0;
    box-sizing: border-box;
}
.op-pack-catalog .pack .r-pk {
    width: 115px;
    padding-top: 5px;
}
.op-pack-catalog .pack .esp-btn {
    display: inline-block;
    padding: 7px 12px;
    font-size: 15px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 25px;
    background-color: #fff;
    border: 2px solid #3aafc5;
    color: #3aafc5;
}

/* .op-pack-catalog .pack .pk-ttl{
    margin-bottom: 5px;
} */
.op-pack-catalog .pack .pk-prctg {
    margin-bottom: 10px;
}
.op-pack-catalog .pack .pk-prctg .esp-txt {
    font-size: 0.5em;
}
.op-pack-catalog .pack .pk-expr {
    font-size: 14px;
    color: #7d7d7d;
}

.pricetable-section .table-container.blank-box span {
    height: 426px;
    display: inline-block;
}
.pricetable-section .table-container .td-txt.mh-alpha {
    min-height: 73.5px;
}
.pricetable-section .table-container .td-txt.mh-beta {
    min-height: 93px;
}
.pricetable-section .table-container .td-txt.mh-gamma {
    min-height: 42px;
}

@media (max-width: 1457px) {
    .pricetable-section .neo-price-table.custom {
        margin-left: 0;
    }
}
@media screen and (max-width: 1168px) {
    .pricetable-section .neo-price-table.paid {
        width: 100%;
        min-width: 0;
        margin-bottom: 30px;
    }
    .pricetable-section .neo-price-table.free {
        background-color: #fff;
        margin-right: 0;
        margin-bottom: 90px;
        width: 100%;
    }
    .pricetable-section .table-container.blank-box {
        display: none;
    }
    .pricetable-section .acc-side {
        min-width: 0;
    }
    .pricetable-section .acc-side .inner-flex {
        justify-content: center;
    }
    .pricetable-section .acc-side .acc-toggle.all-toggle {
        display: none;
    }
    .pricetable-section .acc-side .acc-toggle.f-toggle,
    .pricetable-section .acc-side .acc-toggle.s-toggle {
        display: block;
    }
    .pricetable-section .table-container.free-crown {
        display: none;
    }
    .pricetable-section .table-container .td-txt.mh-alpha,
    .pricetable-section .table-container .td-txt.mh-beta,
    .pricetable-section .table-container .td-txt.mh-gamma {
        min-height: 0;
    }
    .pricetable-section .table-container.cost-table {
        min-height: 0;
    }
}
@media (max-width: 966px) {
    .op-pack-catalog .pack .l-pk {
        width: 100%;
        margin-bottom: 10px;
    }
}
@media (max-width: 768px) {
    .pricetable-section {
        padding: 45px 0;
    }
    .pricetable-section .pt-inner {
        width: 90%;
    }
    .pricetable-section .plan-ttl {
        font-size: 36px;
    }
    .pricetable-section .neo-price-table .ttl-tab span.sub {
        font-size: 12px;
        padding-top: 7px;
    }
    .pricetable-section .acc-side {
        width: 100%;
    }
    .pricetable-section .table-container {
        padding: 15px 20px 5px;
        font-size: 14px;
    }
    .pricetable-section .acc-hides .table-container {
        padding: 5px 20px;
    }
    .pricetable-section .table-container.cost-table {
        min-height: 0;
        padding: 20px;
    }
    .pricetable-section .neo-price-table.free .table-container.cost-table .nontax {
        margin-bottom: 0;
    }
    .pricetable-section .table-container.cost-table .cost-inner .nontax {
        font-size: 11px;
        margin-bottom: 20px;
    }
    .pricetable-section .table-container.cost-table .cost-inner .pf-small {
        font-size: 14px;
    }
    .pricetable-section .table-container .td-txt .l-side {
        min-width: 65px;
        margin-bottom: 10px;
    }
    .pricetable-section .table-container .td-txt.n-mgb {
        margin-bottom: 0;
    }
    .pricetable-section .table-container .td-txt .text-right {
        margin-left: auto;
        margin-bottom: 10px;
    }
    .pricetable-section .table-container .td-txt .text-right .secondline {
        display: inline-block;
        padding-top: 5px;
    }
    .pricetable-section .table-container .td-txt .e-tl {
        width: 95px;
        padding-right: 20px;
    }
    .pricetable-section .neo-price-table .ttl-tab {
        min-height: 60px;
        font-size: 18px;
    }
    .pricetable-section .pf-middle,
    .pricetable-section .pf-large {
        font-size: 16px;
    }
    .pricetable-section .pf-small,
    .pricetable-section .sppf-small {
        font-size: 11px;
    }
    .pricetable-section .pf-cost {
        font-size: 40px;
    }
    .pricetable-section .table-container .td-txt {
        flex-flow: row wrap;
        min-height: 0 !important;
    }
    .pricetable-section .table-container .td-txt .l-side.trans-left {
        padding-right: 7px;
    }
    .pricetable-section .table-container .td-txt .trans-right {
        min-width: 101px;
    }
    .pricetable-section .comment li {
        font-size: 12px;
        line-height: 1.375;
    }
    .pricetable-section .acc-side .acc-toggle.f-toggle,
    .pricetable-section .acc-side .acc-toggle.s-toggle {
        margin: auto;
        width: 100%;
    }
    .pricetable-section .acc-side .acc-toggle.s-toggle.open {
        background-color: #fff;
    }
    .pricetable-section .neo-price-table.paid {
        background-color: #f5f5f5;
    }
    .pricetable-section .neo-price-table .more-tgl {
        border-top: 1px solid #cdcdcd;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
    }
    .pricetable-section .acc-side .acc-toggle::after {
        right: calc(50% - 110px);
        top: 20px;
    }
    .pricetable-section .acc-side .acc-toggle.open::after {
        right: calc(50% - 38px);
        top: 18px;
    }
    .op-pack-catalog .pack {
        padding: 15px 20px;
    }
    .op-pack-catalog .pack .esp-btn {
        font-size: 14px;
    }
    .op-pack-catalog .pack .pk-expr {
        font-size: 12px;
        line-height: 1.375;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .op-pack-catalog .pack .pk-prctg {
        text-align: right;
        margin-bottom: 0;
    }
    .op-pack-catalog .pack .pk-prctg .pf-small,
    .op-pack-catalog .pack .pk-prctg .esp-txt {
        font-size: 14px;
    }
    .op-pack-catalog .pack .r-pk {
        padding-top: 0;
        width: 150px;
    }
    .op-pack-catalog .pack .esp-btn {
        padding: 13.5px;
    }
}

/* new price table style */
.qa-section {
    padding: 90px 0 100px;
    background-color: #e5eef7;
}
.qa-section .qa-inner {
    max-width: 1200px;
    width: 80%;
    margin: auto;
}
.qa-section .qa-ttl {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.75;
    margin-bottom: 30px;
}
.qa-section .qa-accs .shadow-cover {
    border-radius: 10px;
    box-shadow: 0px 0px 24px 0px rgba(59, 188, 206, 0.19);
    overflow: hidden;
    margin-top: 20px;
}
.qa-section .qa-accs .q-tab {
    background-color: #fcfdff;
    padding: 25px 65px;
    transition: 0.5s;
    line-height: 1.75;
    font-size: 16px;
    position: relative;
}
.qa-section .qa-accs .a-tab {
    display: none;
    font-size: 16px;
}
.qa-section .qa-accs .a-tab .inn {
    background-color: #fcfdff;
    padding: 25px;
    padding-left: 65px;
    position: relative;
    line-height: 1.75;
}

.qa-section .qa-accs .q-tab::before {
    content: "Q";
    color: #005bac;
}
.qa-section .qa-accs .a-tab .inn::before {
    content: "A";
    color: #e04139;
}

.qa-section .qa-accs .q-tab::before,
.qa-section .qa-accs .a-tab .inn::before {
    font-size: 28px;
    position: absolute;
    font-family: "DINNextLTPro-Bold", "Noto Sans CJK JP", "Noto Sans JP", sans-serif !important;
    top: 17px;
    left: 35px;
    transform: translateX(-50%);
}
.qa-section .qa-accs .q-tab::after {
    position: absolute;
    top: 22px;
    font-size: 20px;
    right: 40px;
    transform: translateX(50%);
    color: #7d7d7d;
    font-weight: bold;
}
.qa-section .qa-accs .q-tab::after {
    content: "+";
}
.qa-section .qa-accs .q-tab.on::after {
    content: "－";
}
@media (min-width: 768px) {
    .pricetable-section .acc-side .acc-toggle:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: 0.5s;
    }
    .pricetable-section .acc-side .acc-toggle:hover::after {
        top: 18px;
        transition: 0.35s;
    }
    .pricetable-section .acc-side .acc-toggle.open:hover::after {
        top: 12px;
        transition: 0.35s;
    }
    .qa-section .qa-accs .q-tab:hover,
    .acc-tab .cards .item:hover {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: none;
        transition: 0.5s;
        cursor: pointer;
    }
    .acc-tab .cards .item:hover {
        background: rgb(59 188 206 / 7%);
    }
}
@media (max-width: 768px) {
    .qa-section {
        padding: 45px 0 50px;
    }
    .qa-section .qa-inner {
        width: 90%;
    }
    .qa-section .qa-ttl {
        font-size: 36px;
    }
    .qa-section .qa-accs .shadow-cover {
        box-shadow: 0px 0px 12px 0px rgba(59, 188, 206, 0.19);
    }
    .qa-section .qa-accs .q-tab,
    .qa-section .qa-accs .a-tab .inn {
        font-size: 14px;
        padding: 15px 40px;
    }
    .acc-tab .cards .item {
        padding: 15px 40px 15px 15px;
    }
    .acc-tab .cards .lower-conts {
        padding: 15px;
    }
    .qa-section .qa-accs .q-tab {
        padding-right: 60px;
    }
    .qa-section .qa-accs .q-tab::after {
        top: 9px;
        right: 20px;
        transform: translate(0);
    }
    .qa-section .qa-accs .q-tab::before,
    .qa-section .qa-accs .a-tab .inn::before {
        top: 9px;
        font-size: 24px;
        left: 20px;
        transform: translate(0);
    }
}

/* request-list */
.request-list {
    margin-bottom: 0;
}
.request-list .w-5 {
    margin: 40px;
    margin-bottom: 0;
    width: calc(50% - 40px * 2);
}
.request-list .fig {
    margin-top: 2em;
    margin-bottom: 2em;
    text-align: center;
}
.request-list .fig .img-vertical {
    max-width: 326px;
}
@media screen and (max-width: 768px) {
    .request-list .w-5 {
        margin-right: 0;
        margin-left: 0;
        width: 100%;
    }
}

/* row-card */
.row-card {
    box-sizing: border-box;
    flex-flow: row-reverse nowrap;
    background: #fff;
    padding: 40px;
}
.row-card:nth-of-type(2n) .fig,
.row-card:nth-of-type(2n) .txt {
    order: 0;
}
.row-card:nth-of-type(2n) .txt {
    padding-right: 0;
}
.row-card *:last-child {
    margin-bottom: 0;
}
.row-card .fig {
    flex: 0 0 auto;
    margin-right: auto;
    margin-left: auto;
    width: 320px;
}
.row-card .txt {
    margin-right: 80px;
    padding-left: 0;
}
@media screen and (max-width: 768px) {
    .row-card {
        padding: 5%;
    }
    .row-card .fig {
        width: 100%;
        margin-bottom: 20px;
    }
    .row-card .txt {
        margin-right: 0;
    }
}

/* renew class */
.nwhite {
    color: #fff;
}
.a-link {
    color: #101d32;
    position: relative;
    /* padding: 8px 0; */
    padding: 2px;
    display: inline-block;
}
.a-link.nblue {
    color: #005bac;
}
.a-link.nwhite {
    color: #fff;
}
.a-link.l-arrow {
    padding-left: 15px;
}
.a-link.l-arrow::before {
    position: absolute;
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    left: 0;
    top: 2px;
    transition: 0.35s;
}
.a-link .u-line {
    padding-bottom: 2px;
    transition: background-size 0.35s;
    background: linear-gradient(#101d32, #101d32) 0 100%/0 1px no-repeat;
}
.a-link.nblue .u-line {
    padding-bottom: 2px;
    transition: background-size 0.35s;
    background: linear-gradient(#005bac, #005bac) 0 100%/0 1px no-repeat;
}
.a-link.nwhite .u-line {
    padding-bottom: 2px;
    transition: background-size 0.35s;
    background: linear-gradient(#fff, #fff) 0 100%/0 1px no-repeat;
}

.btn-primary {
    display: inline-block;
    color: #fff;
    background-color: #005bac;
    padding: 27px 25px;
    border-radius: 60px;
    box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.3);
    transition: 0.35s;
    min-width: 280px;
    box-sizing: border-box;
}
.btn-primary.ver2 {
    background-color: #fff;
    /* box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.30); */
    color: #005bac;
}
.btn-primary.ver3 {
    background-color: #fff;
    border: 2px solid #005bac;
    color: #005bac;
}
.btn-secondary {
    display: inline-block;
    color: #fff;
    background-color: #3aafc5;
    padding: 27px 25px;
    border-radius: 60px;
    box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.3);
    transition: 0.35s;
    min-width: 280px;
    box-sizing: border-box;
}
.btn-secondary.ver2 {
    background-color: #fff;
    /* box-shadow: 0px 5px 10px 0px rgba(0, 142, 172, 0.30); */
    color: #3aafc5;
}
.btn-secondary.ver3 {
    background-color: #fff;
    border: 2px solid #3aafc5;
    color: #3aafc5;
}
.btn-red-primary {
    display: inline-block;
    color: #fff;
    background-color: #d8562b;
    padding: 27px 25px;
    border-radius: 60px;
    box-shadow: 0px 5px 10px 0px rgba(173, 69, 34, 0.25);
    transition: 0.35s;
    min-width: 280px;
    box-sizing: border-box;
}
.btn-red-primary.ver2 {
    background-color: #fff;
    color: #d8562b;
}
.btn-red-primary.ver3 {
    background-color: #fff;
    border: 2px solid #d8562b;
    color: #d8562b;
}

.btn-primary.short,
.btn-secondary.short,
.btn-red-primary.short {
    padding: 15px;
}
.btn-primary .new,
.btn-secondary .new,
.btn-red-primary .new {
    background-color: #ffeb00;
    font-size: 10px;
    vertical-align: top;
    display: inline-block;
    padding: 3px 5px;
    margin-top: 2px;
    margin-right: 5px;
}
.btn-primary .new {
    color: #005bac;
}
.btn-secondary .new {
    color: #3aafc5;
}
.btn-red-primary .new {
    color: #d8562b;
}
.n2blue {
    color: #3aafc5;
}

.no2-inner {
    max-width: 1020px;
    width: 70.805%;
    margin-left: auto;
    margin-right: auto;
}
.top-inner .no2-inner {
    width: 85%;
}

.conversion-menu {
    background-color: #fff;
    /* background: url(../img/conversion_bg.jpg)no-repeat;
    background-size: cover;
    background-position: center; */
    border-top: 2px solid #3aafc5;
    border-bottom: 2px solid #3aafc5;
    position: relative;
    padding: 80px 0;
}
.conversion-menu::before {
    content: "";
    position: absolute;
    width: 102px;
    height: 70px;
    background: url(../img/motif.png) no-repeat;
    background-size: contain;
    top: -35px;
    left: calc(50% - 51px);
}
.conversion-menu .cvbtn-list {
    font-size: 20px;
}
@media screen and (max-width: 1200px) and (min-width: 580px) {
    .conversion-menu .cvbtn-list a {
        font-size: 14px;
        min-width: 200px;
        padding: 23px 25px;
    }
}
.cvsec-ttl {
    font-size: 28px;
    margin-bottom: 30px;
    line-height: 1.75;
}

.summarize-menu {
    background-color: #e5eef7;
    padding: 45px 0;
}
.summarize-menu .menulists {
    display: flex;
    justify-content: center;
    width: calc(100% + 30px);
    margin-left: -15px;
}
.summarize-menu .menulists li {
    margin: 15px;
    width: calc(25% - 30px);
}
.summarize-menu .menulists .sm-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    background-color: #d4e1ef;
    border-radius: 20px;
    font-size: 20px;
    height: 130px;
}

.swipe-guide {
    position: absolute;
    width: 130px;
    top: 100px;
    left: calc(50% - 65px);
    height: 90px;
    border-radius: 10px;
    text-align: center;
    background: rgba(34, 45, 65, 0.7);
    overflow: hidden;
    opacity: 1;
    transition: 0.35s;
}
.swipeguide-cover.off .swipe-guide {
    opacity: 0;
    transition: 0.35s;
}
.swipe-guide .fig {
    text-align: center;
    width: 100%;
    position: relative;
    display: inline-block;
    margin-top: 11px;
}
.swipe-guide .fig img {
    width: 50px;
    /* transform: translateX(0); */
}
.swipe-guide.on .fig {
    position: relative;
    animation: swipe 2s forwards;
    animation-iteration-count: 2;
    height: 51px;
}
.swipe-guide.on .fig::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 52px;
    background: url(../img/icon/guide-finger.png) no-repeat;
    background-size: contain;
    background-position: center;
    top: 0;
    left: calc(50% - 25px);
}
.swipe-guide .txt {
    font-size: 11px;
    color: #fff;
}

@keyframes swipe {
    0% {
        transform: translateX(0);
    }
    30% {
        transform: translateX(-30px);
    }
    70% {
        transform: translateX(30px);
    }
    100% {
        transform: translateX(0);
    }
}

.sec-inner.mbnon {
    margin-top: 0;
}
.zero,
.sec-inner .zero {
    margin-bottom: 0;
}
.ten,
.sec-inner .ten {
    margin-bottom: 10px;
}
.twenty,
.sec-inner .twenty {
    margin-bottom: 20px;
}
.thirty,
.sec-inner .thirty {
    margin-bottom: 30px;
}
.fourty,
.sec-inner .fourty {
    margin-bottom: 40px;
}
.fifty,
.sec-inner .fifty {
    margin-bottom: 50px;
}
.sixty,
.sec-inner .sixty {
    margin-bottom: 60px;
}

/* cta */
.cta-cv-area {
    position: relative;
    border-radius: 20px;
    /* background: url(../img/conversion_bg.jpg)no-repeat;
    background-size: cover;
    background-position: center; */
    background-color: #fff;
    border: 2px solid #3aafc5;
    padding: 50px 25px;
    box-sizing: border-box;
    margin-top: 0;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.add-mg6 .cta-cv-area {
    margin: 60px auto;
}
.cta-cv-area:before {
    content: "";
    position: absolute;
    width: 102px;
    height: 70px;
    background: url(../img/motif.png) no-repeat;
    background-size: contain;
    top: -35px;
    left: calc(50% - 51px);
}
.cta-cv-area .l-side,
.cta-cv-area .r-side {
    margin: 10px 45px;
}
.cta-cv-area p {
    margin-bottom: 0;
    font-size: 20px;
}
.cta-cv-area p.cap {
    margin-bottom: 15px;
    font-size: 22px;
}
.cta-cv-area a {
    min-width: 360px;
}

.cta-cv-area .row-flex.three-side {
    justify-content: center;
    margin-top: 10px;
    margin-bottom: -20px;
    max-width: 945px;
}
.cta-cv-area .row-flex.three-side .conts {
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 0;
}
.cta-cv-area .row-flex.three-side .cap {
    font-size: 18px;
}
.cta-cv-area .row-flex.three-side a {
    min-width: 280px;
}
@media screen and (max-width: 1230px) {
    .cta-cv-area .row-flex.three-side a {
        min-width: auto;
        width: 100%;
    }
}
@media screen and (max-width: 1100px) {
    .cta-cv-area .row-flex.three-side .conts {
        width: calc((100% / 2) - 35px);
    }
}

/* アプリ訴求エリア */
.app-cv-area {
    position: relative;
    overflow: hidden;
}
.app-cv-area::before,
.app-cv-area::after {
    position: absolute;
    content: "";
}
.app-cv-area::before {
    background: url(../img/appbg-left.png) no-repeat;
    background-size: auto 100%;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    z-index: 0;
}
.app-cv-area::after {
    background: url(../img/appbg-right.png) no-repeat 100% center;
    background-size: auto 100%;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 50%;
    z-index: 0;
}

.app-cv-area .ap-inner {
    display: flex;
    position: relative;
    z-index: 1;

    max-width: 1200px;
    width: 80%;
    margin: auto;
    padding: 60px 0;
    align-items: center;
}
.app-cv-area .ap-inner .ttl {
    font-size: 28px;
    line-height: 1.28;
    margin-bottom: 20px;
}
.app-cv-area .ap-inner .exp {
    line-height: 1.75;
    margin-bottom: 40px;
}
.app-cv-area .ap-inner .l-side {
    width: 26%;
}
.app-cv-area .ap-inner .l-side img {
    width: 100%;
    max-width: 320px;
}
.app-cv-area .ap-inner .m-side {
    width: 74%;
    box-sizing: border-box;
    /* padding-left: 40px;
    padding-right: 185px; */
    padding-left: 3.3%;
    /* padding-right: 15.4%; */
}
.app-cv-area .app-pic {
    width: 26.5%;
    position: absolute;
    transform: translateX(24%);
    right: 0;
    bottom: 0;
    text-align: right;
    line-height: 0;
}
.app-cv-area .app-pic img {
    width: 100%;
    max-width: 317px;
}
.app-cv-area .ap-inner .btn-primary {
    width: 100%;
    max-width: 330px;
}
@media screen and (min-width: 950px) {
    .app-cv-area .ap-inner .m-side .sp-fig {
        display: none;
    }
}
@media screen and (max-width: 950px) {
    .app-cv-area::before {
        width: 100%;
        background-size: cover;
    }
    .app-cv-area::after {
        width: 100%;
        opacity: 0.5;
        background-size: cover;
    }
    .app-cv-area .l-side {
        display: none;
    }
    .app-cv-area .ap-inner .m-side {
        width: 100%;
        padding: 0;
    }
    .app-cv-area .ap-inner .m-side .sp-fig {
        margin-bottom: 30px;
    }
    .app-cv-area .ap-inner .m-side .sp-fig img {
        width: 70%;
        max-width: 200px;
    }
}

/* online cta */
.oc-sec {
    margin-bottom: 90px;
}
.online-cta-area {
    background-color: #ebf7f9;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    /* padding: 20px 0; */
    padding: 20px 55px;
    flex-flow: row wrap;
}
.online-cta-area.transfer-custom {
    background: #f5f5f5;
}
.online-cta-area.realestate-dx-custom {
    padding: 35px 55px 5px;
    display: block;
    z-index: 1;
}
.online-cta-area.realestate-dx-custom .btn-block {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.online-cta-area.realestate-dx-custom .btn-block .blk {
    margin: 30px 20px;
}
.online-cta-area.realestate-dx-custom .btn-block .blk .txt {
    margin-bottom: 10px;
}
.online-cta-area::after {
    content: "";
    position: absolute;
    /* width: 46%; */
    width: 37.5%;
    max-width: 450px;
    height: 100%;
    right: 0;
    top: 0%;
    background: url(../img/online_cta.png) no-repeat;
    background-position: 0 center;
    background-size: cover;
}
.online-cta-area.seminer-cta::after {
    background: url(../img/seminar_cta.png) no-repeat;
    background-position: 0 center;
    background-size: cover;
    max-width: 490px;
}
.online-cta-area.volumediscounts-cta::after {
    background: url(../img/volumediscounts_cta.png) no-repeat;
    background-position: 0 center;
    background-size: cover;
    max-width: 490px;
    width: 42%;
}
.online-cta-area.transfer-custom::after {
    background: url(../img/transfer_cta.png) no-repeat;
    background-position: 0 center;
    background-size: cover;
}
.online-cta-area.realestate-dx-custom::after {
    background: url(../img/realestate-dx_cta.png) no-repeat;
    background-position: 0 center;
    background-size: contain;
    width: 30%;
    max-width: 328px;
}
.online-cta-area .left-side {
    /* width: calc(100% - 400px); */
    /* width: calc(100% - 280px); */
    width: calc(62.5% + 55px);
    padding-right: 55px;
    margin-right: auto;
    min-width: 500px;
    /* padding: 10px 55px; */
    box-sizing: border-box;
    position: relative;
    z-index: 1;
}
.online-cta-area.realestate-dx-custom .left-side {
    width: calc(64.5% + 55px);
}
.online-cta-area .right-side {
    /* padding: 10px 60px; */
    padding: 20px 0;
    width: 285px;
    position: relative;
    z-index: 1;
}
.online-cta-area .right-side a {
    padding: 25px 20px;
}
.online-cta-area.seminer-cta .right-side {
    width: 300px;
}
.online-cta-area.volumediscounts-cta .right-side {
    width: auto;
}
@media screen and (max-width: 950px) {
    .online-cta-area::after {
        display: none;
    }
    .online-cta-area .left-side {
        min-width: 0;
    }
    .online-cta-area .left-side,
    .online-cta-area .right-side,
    .online-cta-area.seminer-cta .right-side,
    .online-cta-area.volumediscounts-cta .right-side,
    .online-cta-area.realestate-dx-custom .left-side {
        width: 100%;
    }
    .online-cta-area.realestate-dx-custom .left-side {
        padding-right: 0;
        padding-left: 0;
    }
    .online-cta-area .right-side {
        text-align: center;
    }
    .online-cta-area.realestate-dx-custom .btn-block {
        margin: 20px auto 17.5px;
    }
    .online-cta-area.realestate-dx-custom .btn-block .blk {
        margin: 12.5px 9px;
    }
}
@media screen and (max-width: 768px) {
    .oc-sec {
        width: 90%;
        margin: auto;
        margin-bottom: 45px;
    }
    .online-cta-area {
        padding: 25px 0;
    }
    .online-cta-area.realestate-dx-custom {
        padding: 25px 25px 5px;
    }
    .online-cta-area .left-side {
        margin-bottom: 25px;
    }
    .online-cta-area .left-side,
    .online-cta-area .right-side {
        padding: 0 25px;
    }
    .online-cta-area .right-side {
        margin-bottom: 10px;
    }
}

@media screen and (min-width: 769px) {
    .a-link:hover {
        opacity: 1;
    }
    .a-link.l-arrow:hover::before {
        left: 5px;
        transition: 0.35s;
    }
    .a-link:hover .u-line {
        background-size: 100% 1px;
        transition: background-size 0.35s;
    }
    .btn-primary:hover,
    .btn-secondary:hover,
    .btn-red-primary:hover {
        opacity: 0.8;
        box-shadow: none;
        transition: 0.35s;
    }
    .summarize-menu .menulists .sm-menu:hover {
        background-color: rgba(255, 255, 255, 0.502);
        opacity: 1;
    }
    .cprght-inner .copy.sp {
        display: none;
    }
    .sp {
        display: none;
    }
    .swipe-guide {
        display: none;
    }
    .sec-inner.pc-medium {
        width: 60%;
        max-width: 800px;
    }
}
@media screen and (max-width: 768px) {
    .conversion-menu .sec-inner,
    .summarize-menu .sec-inner {
        margin-top: 0;
    }

    .btn-primary,
    .btn-secondary,
    .btn-red-primary {
        font-size: 14px;
        min-width: 240px;
        padding: 23px 25px;
    }

    /* cv */
    .conversion-menu {
        padding: 50px 0 40px;
        /* background: url(../img/conversion_bg_sp.jpg)no-repeat;
        background-size: cover;
        background-position: center; */
    }
    .conversion-menu::before {
        width: 51px;
        height: 35px;
        top: -17.5px;
        left: calc(50% - 25.5px);
    }
    .cvsec-ttl {
        font-size: 20px;
    }

    .summarize-menu {
        padding: 22.5px 0;
    }
    .summarize-menu .menulists {
        width: calc(100% + 25px);
        margin-left: -12.5px;
        flex-flow: row wrap;
    }
    .summarize-menu .menulists li {
        width: calc(50% - 25px);
        margin: 7.5px 12.5px;
    }
    .summarize-menu .menulists .sm-menu {
        font-size: 14px;
        height: 50px;
        border-radius: 10px;
    }
    /* footer */
    .cp-right-area::before {
        width: 92%;
        left: 4%;
        top: 100%;
    }
    .cprght-inner {
        display: block;
        width: 92%;
        padding: 0;
        /*
        padding-bottom: 30px;
        */
    }
    .cprght-inner ul {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        justify-content: center;
    }
    .cprght-inner ul li {
        padding: 0 15px;
    }
    .cprght-inner ul li:first-of-type {
        padding-left: 0;
    }
    .cprght-inner .copy {
        justify-content: center;
    }
    .cprght-inner .copy.pc {
        display: none;
    }

    .cta-cv-area {
        padding: 17.5px 0;
        /* background: url(../img/conversion_bg_sp.jpg)no-repeat;
        background-size: cover;
        background-position: center; */
    }
    .cta-cv-area:before {
        width: 51px;
        height: 35px;
        top: -12.5px;
        left: calc(50% - 25.5px);
    }
    .cta-cv-area p.cap,
    .cta-cv-area .row-flex.three-side .cap {
        font-size: 16px;
        margin-bottom: 8px;
    }
    .cta-cv-area .l-side,
    .cta-cv-area .r-side {
        margin: 12.5px auto;
        width: 72%;
        min-width: 245px;
    }
    .cta-cv-area a {
        min-width: 0;
        max-width: 300px;
        width: 100%;
        line-height: 1;
    }
    .cta-cv-area .row-flex.three-side {
        margin-bottom: -10px;
    }
    .cta-cv-area .row-flex.three-side .conts {
        width: 72%;
    }
    .app-cv-area .ap-inner {
        width: 92%;
        padding: 50px 0;
        max-width: 500px;
    }
    .app-cv-area .ap-inner .ttl {
        font-size: 20px;
    }
    .app-cv-area .ap-inner .exp {
        margin-bottom: 20px;
        font-size: 14px;
    }
    .app-cv-area .ap-inner .m-side {
        padding: 0;
    }
    .app-cv-area .ap-inner .btn-primary {
        width: auto;
        min-width: 160px;
    }
    .app-cv-area .app-pic {
        width: 44%;
        max-width: 200px;
        transform: none;
        /* right: -4%; */
        right: -18%;
    }
}

/* お客さま一覧帯 */
.customer-belt {
    display: flex;
    overflow: hidden;
    height: 170px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.customer-belt img {
    /* height: 50%; */
    animation: flowing 50s linear infinite;
    transform: translateX(0); /*初期位置*/
}
@keyframes flowing {
    100% {
        transform: translateX(-200%);
    }
}
@media (max-width: 768px) {
    .customer-belt {
        height: 93px;
    }
}

/* micro-copy */
.free-plan-btn-wrap {
    position: relative;
    margin-top: 80px;
}

.micro-copy {
    position: absolute;
    transform: translate(3%, -150%);
    -webkit-transform: translate(3%, -150%);
    -ms-transform: translate(3%, -150%);
}
.micro-copy-num {
    font-size: 20px;
    font-weight: bold;
}
.micro-copy::before,
.micro-copy::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 25px;
    background-color: #101d32;
    top: 0px;
}
.micro-copy::before {
    left: -10px;
    transform: rotate(-20deg);
}
.micro-copy::after {
    right: -10px;
    transform: rotate(20deg);
}
.line-through {
    text-decoration: line-through;
}
.color-orange {
    color: #d8562b;
}
.position-static {
    position: static !important;
}

.position-relative {
    position: relative !important;
}

.position-absolute {
    position: absolute !important;
}

.position-fixed {
    position: fixed !important;
}

.position-sticky {
    position: sticky !important;
}
.align-items-start {
    -webkit-box-align: start !important;
    -ms-flex-align: start !important;
    align-items: flex-start !important;
}

.align-items-end {
    -webkit-box-align: end !important;
    -ms-flex-align: end !important;
    align-items: flex-end !important;
}

.align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
}

.align-items-baseline {
    -webkit-box-align: baseline !important;
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
}

.align-items-stretch {
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
}
@media (max-width: 768px) {
    .micro-copy {
        position: absolute;
        transform: translate(0, -150%);
        -webkit-transform: translate(0, -150%);
        -ms-transform: translate(0, -150%);
    }
}

/* スクロールに合わせたheader箇所の挙動用 */

#head-subnav.fix {
    position: fixed;
    /* top: 29px; */
    width: 100%;
}
.header-allside.fix {
    top: 61px;
}

@media screen and (min-width: 951px) {
    /* pcのみスクロールに合わせて非表示の挙動を実装 */
    .header .hidden {
        transform: translate(0, calc(-100% - 33px)) !important;
        transition: 0.3s;
    }

    .header .activeHeader {
        transition: 0.5s;
    }

    .nav-label.fix {
        top: 120px;
    }

    .nav-label.hidden {
        transform: translate(-50%, calc(-100% - 94px));
    }

    .nav-label.activeHeader {
        transition: 0.5s;
    }
}

@media screen and (max-width: 1200px) {
    .header-allside.fix {
        top: 59px !important;
    }
    .nav-label.fix {
        top: 118px;
    }
}
@media screen and (max-width: 950px) {
    #header-op {
        display: none;
    }
    .header-allside.fix {
        top: 29px !important;
    }
    .nav-label.fix {
        top: 84px;
    }
}
@media screen and (max-width: 768px) {
    .header-allside.fix {
        top: 0px !important;
    }
    .nav-label.fix {
        top: 55px;
    }
}
@media screen and (max-width: 576px) {
    .justify-content-sm-center {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
}
@media (min-width: 1200px) {
    .flex-xl-row {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }

    .flex-xl-column {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }

    .flex-xl-row-reverse {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }

    .flex-xl-column-reverse {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
}
