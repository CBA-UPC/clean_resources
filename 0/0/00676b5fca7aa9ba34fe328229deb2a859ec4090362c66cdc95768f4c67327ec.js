;(funitrix24.ru"};

;(function () {
(function(){"use strict";if(typeof webPacker==="undefined"){return}var e=[];function t(t){this.name=t;e.push(this)}t.prototype={language:null,languages:[],messages:{},properties:{},setProperties:function(e){this.properties=e||{}},loadResources:function(e){return(e||[]).forEach(function(e){webPacker.resource.load(e,this)},this)},message:function(e){var t=this.messages;if(e in t){return t[e]}var n=this.language||"en";if(t[n]&&t[n][e]){return t[n][e]}n="en";if(t[n]&&t[n][e]){return t[n][e]}return""},getMessages:function(e){var t=e||this.language||"en";var n=this.messages;if(n[t]){return n[t]}t=this.language||"en";if(n[t]){return n[t]}if(n.en){return n.en}return n}};webPacker.getModule=function(e){return this.getModules().filter(function(t){return t.name===e})[0]};webPacker.getModules=function(){return e};webPacker.module=t;webPacker.getAddress=function(){return this.address};webPacker.resource={load:function(e,t){switch(e.type){case"css":this.loadCss(e.content);break;case"js":this.loadJs(e.content||e.src,!e.content);break;case"html":case"layout":if(t){var n=t.messages[t.language]?t.messages[t.language]:t.messages;for(var r in n){if(!n.hasOwnProperty(r)){continue}e.content=e.content.replace(new RegExp("%"+r+"%","g"),n[r])}}this.loadLayout(e.content);break}},loadLayout:function(e){if(!e){return}var t=document.createElement("DIV");t.innerHTML=e;document.body.insertBefore(t,document.body.firstChild)},loadJs:function(e,t,n){if(!e){return}var r=document.createElement("SCRIPT");r.setAttribute("type","text/javascript");r.setAttribute("async","");if(t){r.setAttribute("src",src)}else{if(webPacker.browser.isIE()){r.text=text}else{r.appendChild(document.createTextNode(e))}}this.appendToHead(r,!t&&n)},appendToHead:function(e,t){(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e);if(t){document.head.removeChild(e)}},loadCss:function(e){if(!e){return}var t=document.createElement("STYLE");t.setAttribute("type","text/css");if(t.styleSheet){t.styleSheet.cssText=e}else{t.appendChild(document.createTextNode(e))}this.appendToHead(t)}};webPacker.type={isArray:function(e){return e&&Object.prototype.toString.call(e)==="[object Array]"},isString:function(e){return e===""?true:e?typeof e==="string"||e instanceof String:false},toArray:function(e){return Array.prototype.slice.call(e)}};webPacker.classes={change:function(e,t,n){e?n?this.add(e,t):this.remove(e,t):null},remove:function(e,t){e?e.classList.remove(t):null},add:function(e,t){e?e.classList.add(t):null},has:function(e,t){return e&&e.classList.contains(t)}};webPacker.url={};webPacker.url.parameter={list:null,get:function(e){var t=this.getObject();return t.hasOwnProperty(e)?decodeURIComponent(t[e]):null},has:function(e){var t=this.getObject();return t.hasOwnProperty(e)},getList:function(){if(this.list){return this.list}var e=window.location.search.substr(1);if(e.length<=1){return[]}this.list=e.split("&").map(function(e){var t=e.split("=");return{name:t[0],value:t[1]||""}},this);return this.list},getObject:function(){return this.getList().reduce(function(e,t){e[t.name]=t.value;return e},{})}};webPacker.ready=function(e){document.readyState==="complete"||document.readyState==="loaded"?e():this.addEventListener(window,"DOMContentLoaded",e)};webPacker.addEventListener=function(e,t,n){e=e||window;if(window.addEventListener){e.addEventListener(t,n,false)}else{e.attachEvent("on"+t,n)}};webPacker.event={listeners:[],on:function(e,t,n){this.listeners.filter(function(n){return n[0]===e&&n[1]===t}).forEach(function(e){e[2].apply(this,n)})},listen:function(e,t,n){this.listeners.push([e,t,n])}};webPacker.cookie={setItem:function(e,t,n){try{this.set(e,JSON.stringify(t),n)}catch(e){}},getItem:function(e){try{return JSON.parse(this.get(e))||null}catch(e){return null}},set:function(e,t,n){n=n||3600*24*365*10;var r=new Date((new Date).getTime()+1e3*n);document.cookie=e+"="+t+"; path=/; expires="+r.toUTCString()},get:function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}};webPacker.ls={supported:null,removeItem:function(e){if(!this.isSupported())return;window.localStorage.removeItem(e)},setItem:function(e,t,n){if(!this.isSupported())return;try{if(n&&t&&typeof t==="object"){n=parseInt(n);t.cacheData={time:parseInt(Date.now()/1e3),ttl:isNaN(n)?3600:n}}window.localStorage.setItem(e,JSON.stringify(t))}catch(e){}},getItem:function(e,t){if(!this.isSupported())return null;try{var n=JSON.parse(window.localStorage.getItem(e))||null;if(t&&n&&typeof n==="object"&&n.cacheData){t=parseInt(t);t=t&&!isNaN(t)?t:n.cacheData.ttl;if(parseInt(Date.now()/1e3)>n.cacheData.time+t){n=null;this.removeItem(e)}}if(n&&typeof n==="object"){delete n.cacheData}return n}catch(e){return null}},isSupported:function(){if(this.supported===null){this.supported=false;try{var e="b24crm-x-test";window.localStorage.setItem(e,"x");window.localStorage.removeItem(e);this.supported=true}catch(e){}}return this.supported}};webPacker.browser={isIOS:function(){return/(iPad;)|(iPhone;)/i.test(navigator.userAgent)},isOpera:function(){return navigator.userAgent.toLowerCase().indexOf("opera")!==-1},isIE:function(){return document.attachEvent&&!this.isOpera()},isMobile:function(){return/(ipad|iphone|android|mobile|touch)/i.test(navigator.userAgent)}};webPacker.analytics={trackGa:function(e,t,n){if(window.gtag){if(e==="pageview"){if(window.dataLayer){var r=window.dataLayer.filter(function(e){return e[0]==="config"}).map(function(e){return e[1]});if(r.length>0){window.gtag("config",r[0],{page_path:t})}}}else if(e==="event"){window.gtag("event",n,{event_category:t})}}else if(window.dataLayer){if(e==="pageview"){window.dataLayer.push({event:"VirtualPageview",virtualPageURL:t})}else if(e==="event"){window.dataLayer.push({event:"crm-form",eventCategory:t,eventAction:n})}}else if(typeof window.ga==="function"){if(n){window.ga("send",e,t,n)}else{window.ga("send",e,t)}}},trackYa:function(e){if(!window["Ya"]){return}var t;if(Ya.Metrika&&Ya.Metrika.counters()[0]){t=Ya.Metrika.counters()[0].id}else if(Ya.Metrika2&&Ya.Metrika2.counters()[0]){t=Ya.Metrika2.counters()[0].id}if(t&&window["yaCounter"+t]){window["yaCounter"+t].reachGoal(e)}}}})();
//# sourceMappingURL=https://1csoft.bitrix24.ru/bitrix/js/ui/webpacker/ui.webpacker.map.js


})();

;(function () {
var module = new webPacker.module('crm.tracking.guest');
module.setProperties({"lifespan":28,"canRegisterOrder":true});
(function(){"use strict";if(typeof webPacker==="undefined"){return}window.b24Tracker=window.b24Tracker||{};if(window.b24Tracker.guest){return}window.b24Tracker.guest={cookieName:"b24_crm_guest_id",returnCookieName:"b24_crm_guest_id_returned",requestUrl:"",isInit:false,init:function(){if(this.isInit){return}this.isInit=true;this.requestUrl=(webPacker.getAddress()+"/").match(/((http|https):\/\/[^\/]+?)\//)[1]+"/pub/guest.php";if(module.properties["lifespan"]){var t=parseInt(module.properties["lifespan"]);if(!isNaN(t)&&t){i.lifespan=t;s.lifespan=t}}e.collect();i.collect();s.collect();n.collect();this.checkReturn();window.b24order=window.b24order||[];window.b24order.forEach(function(e){this.registerOrder(e)},this);window.b24order.push=function(e){this.registerOrder(e)}.bind(this)},checkReturn:function(){if(!this.getGidCookie()||!window.sessionStorage||sessionStorage.getItem(this.returnCookieName)){return}a.query(this.requestUrl,{gid:this.getGidCookie(),a:"event",e:"Return"},this.onAjaxResponse.bind(this));this.markReturned()},storeTrace:function(e,t){t=t||"storeTrace";a.query(this.requestUrl,{a:t,d:{trace:e}})},link:function(e){if(!e||this.getGidCookie()){return}a.query(this.requestUrl,{a:"link",gid:e},this.onAjaxResponse.bind(this))},register:function(){if(this.getGidCookie()){return}a.query(this.requestUrl,{a:"register"},this.onAjaxResponse.bind(this))},onAjaxResponse:function(e){e=e||{};e.data=e.data||{};if(!this.getGidCookie()&&!!e.data.gid){webPacker.ls.setItem(this.cookieName,e.data.gid);this.markReturned()}},getPages:function(){return n.list()},getTags:function(){return i.list()},registerOrder:function(e){if(!module.properties["canRegisterOrder"]){return}this.storeTrace(this.getTraceOrder(e),"registerOrder")},getTraceOrder:function(e){e=e||{};var t=e.id||"";if(!Number.isNaN(t)&&typeof t==="number"){t=t.toString()}if(!t||!webPacker.type.isString(t)||!t.match(/^[\d\w.\-\/\\_#]{1,30}$/i)){if(window.console&&window.console.error){window.console.error("Wrong order id: "+e.id)}}var r=parseFloat(e.sum);if(isNaN(r)||r<0){if(window.console&&window.console.error){window.console.error("Wrong order sum: "+e.sum)}}this.sentOrders=this.sentOrders||[];if(this.sentOrders.indexOf(t)>=0){return}this.sentOrders.push(t);return this.getTrace({channels:[{code:"order",value:t}],order:{id:t,sum:r}})},getTrace:function(t){var r=this.remindTrace(t);e.clear();return r},remindTrace:function(t){return JSON.stringify(e.current(t))},getUtmSource:function(){return this.getTags().utm_source||""},isUtmSourceDetected:function(){return i.isSourceDetected()},getGidCookie:function(){return webPacker.ls.getItem(this.cookieName)},setGid:function(e){this.markReturned();return webPacker.ls.setItem(this.cookieName,e)},markReturned:function(){if(window.sessionStorage){sessionStorage.setItem(this.returnCookieName,"y")}}};var e={maxCount:5,lsKey:"b24_crm_guest_traces",previous:function(){return webPacker.ls.getItem(this.lsKey)||{list:[]}},current:function(e){e=e||{};var r={url:window.location.href,ref:s.getData().ref,device:{isMobile:webPacker.browser.isMobile()},tags:i.getData(),client:t.getData(),pages:{list:n.list()},gid:b24Tracker.guest.getGidCookie()};if(e.previous!==false){r.previous=this.previous()}if(e.channels){r.channels=e.channels}if(e.order){r.order=e.order}return r},clear:function(){webPacker.ls.removeItem(this.lsKey)},collect:function(){if(!i.isSourceDetected()&&!s.detect().newest){return}var e=this.current({previous:false});if(!e.pages.list){return}var t=this.previous();t=t||{};t.list=t.list||[];t.list.push(this.current({previous:false}));if(t.list.length>this.maxCount){t.list.shift()}i.clear();n.clear();webPacker.ls.setItem(this.lsKey,t)}};var t={getData:function(){var e={gaId:this.getGaId(),yaId:this.getYaId()};if(!e.gaId)delete e["gaId"];if(!e.yaId)delete e["yaId"];return e},getGaId:function(){var e;if(typeof window.ga==="function"){ga(function(t){e=t.get("clientId")});if(e){return e}if(ga.getAll&&ga.getAll()[0]){e=ga.getAll()[0].get("clientId")}}if(e){return e}e=(document.cookie||"").match(/_ga=(.+?);/);if(e){e=(e[1]||"").split(".").slice(-2).join(".")}return e?e:null},getYaId:function(){var e;if(window.Ya){var t;if(Ya.Metrika&&Ya.Metrika.counters()[0]){t=Ya.Metrika.counters()[0].id}else if(Ya.Metrika2&&Ya.Metrika2.counters()[0]){t=Ya.Metrika2.counters()[0].id}if(!t){return null}if(window.ym&&typeof window.ym==="object"){ym(t,"getClientID",function(t){e=t})}if(!e&&window["yaCounter"+t]){e=window["yaCounter"+t].getClientID()}}if(!e){e=webPacker.cookie.get("_ym_uid")}return e?e:null}};var r=null;var i={lifespan:28,lsPageKey:"b24_crm_guest_utm",tags:["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],sameTagLifeSpan:3600,list:function(){return this.getData().list||{}},isSourceDetected:function(){if(r===null){var e=this.tags[0];var t=webPacker.url.parameter.get(e);if(t===null||!t){r=false}else if(this.list()[e]!==t){r=true}else{r=this.getTimestamp(true)-this.getTimestamp()>this.sameTagLifeSpan}}return r},getGCLid:function(){return this.getData().gclid||null},getTimestamp:function(e){return(e?null:parseInt(this.getData().ts))||parseInt(Date.now()/1e3)},getData:function(){return(webPacker.ls.isSupported()?webPacker.ls.getItem(this.lsPageKey):webPacker.cookie.getItem(this.lsPageKey))||{}},clear:function(){webPacker.ls.removeItem(this.lsPageKey)},collect:function(){var e=this.getTimestamp();var t=webPacker.url.parameter.getList().filter(function(e){return this.tags.indexOf(e.name)>-1},this);if(t.length>0){t=t.filter(function(e){return e.value.trim().length>0}).reduce(function(e,t){e[t.name]=decodeURIComponent(t.value);return e},{});e=this.getTimestamp(true)}else{t=this.list()}var r=webPacker.url.parameter.getList().filter(function(e){return e.name==="gclid"},this).map(function(e){return e.value});r=r[0]||this.getGCLid();if(this.getTimestamp(true)-e>this.lifespan*3600*24){this.clear();return}var i={ts:e,list:t,gclid:r};webPacker.ls.isSupported()?webPacker.ls.setItem(this.lsPageKey,i):webPacker.cookie.setItem(this.lsPageKey,i)}};var s={lifespan:28,lsKey:"b24_crm_guest_ref",sameRefLifeSpan:3600,detect:function(){var e={detected:false,existed:false,expired:false,newest:false,value:null};var t=document.referrer;if(!t){return e}var r=document.createElement("a");r.href=t;if(!r.hostname){return e}if(r.hostname===window.location.hostname){return e}e.value=t;e.detected=true;if(t!==this.getData().ref){e.newest=true;return e}e.existed=true;if(this.getTs(true)-this.getTs()>this.sameRefLifeSpan){e.expired=true;return e}return false},getTs:function(e){return(e?null:parseInt(this.getData().ts))||parseInt(Date.now()/1e3)},getData:function(){return(webPacker.ls.isSupported()?webPacker.ls.getItem(this.lsKey,this.getTtl()):null)||{}},clear:function(){webPacker.ls.removeItem(this.lsKey)},getTtl:function(){return this.lifespan*3600*24},collect:function(){var e=this.detect();if(!e.detected){return}if(e.expired){this.clear();return}webPacker.ls.setItem(this.lsKey,{ts:this.getTs(),ref:e.value},this.getTtl())}};var n={maxCount:5,lsPageKey:"b24_crm_guest_pages",list:function(){return webPacker.ls.getItem(this.lsPageKey)},clear:function(){webPacker.ls.removeItem(this.lsPageKey)},collect:function(){if(!document.body){return}var e=document.body.querySelector("h1");e=e?e.textContent.trim():"";if(e.length===0){e=document.head.querySelector("title");e=e?e.textContent.trim():""}e=e.substring(0,40);var t=window.location.href;var r=webPacker.ls.getItem(this.lsPageKey);r=r instanceof Array?r:[];var i=-1;r.forEach(function(e,r){if(e[0]===t)i=r});if(i>-1){r=r.slice(0,i).concat(r.slice(i+1))}while(r.length>=this.maxCount){r.shift()}var s=new Date;r.push([t,Math.round(s.getTime()/1e3),e]);webPacker.ls.setItem(this.lsPageKey,r)}};var a={query:function(e,t,r){this.ajax=null;if(window.XMLHttpRequest){this.ajax=new XMLHttpRequest}else if(window.ActiveXObject){this.ajax=new window.ActiveXObject("Microsoft.XMLHTTP")}"withCredentials"in this.ajax?this.post(e,t,r):this.get(e,t)},get:function(e,t){var r=document.createElement("script");r.type="text/javascript";r.src=e+"?"+this.stringify(t);r.async=true;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)},post:function(e,t,r){var i=this.ajax;i.open("POST",e,true);i.setRequestHeader("Content-Type","application/x-www-form-urlencoded");i.withCredentials=true;i.onreadystatechange=function(){if(r&&i.readyState===4&&i.status===200){r.apply(this,[JSON.parse(this.responseText)])}};i.send(this.stringify(t))},stringify:function(e){var t=[];if(Object.prototype.toString.call(e)==="[object Array]"){}else if(typeof e==="object"){for(var r in e){if(!e.hasOwnProperty(r)){continue}var i=e[r];if(typeof i==="object"){i=JSON.stringify(i)}t.push(r+"="+encodeURIComponent(i))}}return t.join("&")},getAjax:function(){if(this.ajax){return this.ajax}if(window.XMLHttpRequest){this.ajax=new XMLHttpRequest}else if(window.ActiveXObject){this.ajax=new window.ActiveXObject("Microsoft.XMLHTTP")}return this.ajax}};window.b24Tracker.guest.init()})();
//# sourceMappingURL=https://1csoft.bitrix24.ru/bitrix/js/crm/tracking/guest/script.map.js


})();

;(function () {
var module = new webPacker.module('crm.tracking.tracker');
(function(){"use strict";if(typeof webPacker==="undefined"){return}function e(e){this.setTypes(e.types);this.setMap(e.map)}e.prototype={searched:null,setTypes:function(e){this.types=e||[];return this},setMap:function(e){this.map=e||[];return this},getFromHref:function(e,t){var r=e.href||"";if(!r){return null}r=r.substr(e.protocol.length||0).trim();return{node:e,values:[{type:t,value:r,cleaned:n.clean(t,r)}]}},isItemValid:function(e){if(!e){return false}if(!e.values){return false}if(e.values.length===0){return false}return!!e.node},getElementsBySelector:function(e,t){return webPacker.type.toArray(e.querySelectorAll(t))},replaceItem:function(e){if(this.map.length===0){return}var t=e.node.href;e.values.forEach(function(r){var i=n.replaceByMap(this.map,t,r.type,r.value,true);t=i.text;e.replaced={from:i.from,to:i.to}},this);if(t){e.node.href=t}this.textEngine.replace(e.node)},replace:function(e){e=e||document.body;this.textEngine=new t({types:this.types,map:this.map});this.search(e).forEach(this.replaceItem,this)},getSearched:function(e){return this.searched||this.search(e)},search:function(e){e=e||document.body;var t=[];this.types.forEach(function(r){var n=this.getElementsBySelector(e,r.selector);t=t.concat(n.map(function(e){return this.getFromHref(e,r.code)},this))},this);var r=t.filter(this.isItemValid,this);if(!this.searched){this.searched=r}return r}};function t(e){this.setTypes(e.types);this.setMap(e.map);this.setEnrich(e.isEnrichTextual)}t.prototype={searched:null,minTextLength:6,setTypes:function(e){this.types=e||[];return this},setMap:function(e){this.map=e||[];return this},setEnrich:function(e){this.isEnrichTextual=e||false;return this},getNodesByChildNodes:function(e){var t=[];if(!e.hasChildNodes()){return t}for(var r=0;r<e.childNodes.length;r++){var n=e.childNodes.item(r);if(n.nodeType===3){if(this.checkTextNode(n)){t.push(n)}}else{var i=this.getNodesByChildNodes(n,this.minTextLength);if(i.length>0){t=t.concat(i)}}}return t},getNodesByXPath:function(e){var t=[],r;var n="descendant-or-self::*[not(self::script|style|noscript)]/text()[string-length(normalize-space()) >= "+this.minTextLength+"]";var i=e.ownerDocument.evaluate(n,e,null,XPathResult.ANY_TYPE,null);while(r=i.iterateNext()){t.push(r)}return t},getNodesByTreeWalker:function(e){var t,r=[];var n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,false);while(t=n.nextNode()){if(this.checkTextNode(t)){r.push(t)}}return r},getNodesByNodeIterator:function(e){var t,r=[];var n=e.ownerDocument.createNodeIterator(e,NodeFilter.SHOW_TEXT,null);while(t=n.nextNode()){if(this.checkTextNode(t)){r.push(t)}}return r},checkTextNode:function(e){switch(e.parentNode.nodeName){case"NOSCRIPT":case"SCRIPT":case"STYLE":return false}var t=(e.textContent||"").trim();return t.length>=this.minTextLength},prepareTextItem:function(e){var t={node:e,values:[]};var r=(e.nodeValue||"").trim();if(!r){return t}this.types.forEach(function(e){t.values=this.parseValues(r,e.regexp).map(function(t){return{type:e.code,value:t,cleaned:n.clean(e.code,t)}}).concat(t.values)},this);return t},parseValues:function(e,t){var r=e.match(t);if(!r||r.length===0){return[]}return r.map(n.trim).filter(n.hasLength)},replaceItem:function(e){var t=e.node.nodeValue;var i=t;e.values.forEach(function(t){var r=n.replaceByMap(this.map,i,t.type,t.value);if(r.text){i=r.text}if(!e.replaced){e.replaced={from:r.from,to:r.to}}},this);if(this.isEnrichTextual){r.enrich(this.map,e,i)}else if(i!==t){e.node.nodeValue=i}},uniqueItemValues:function(e){return n.uniqueArray(e,function(e,t){return e.value===t.value&&e.type===t.type})},replace:function(e){e=e||document.body;if(!e){return}this.search(e).forEach(this.replaceItem,this)},getSearched:function(e,t){return this.searched||this.search(e,t)},search:function(e,t){e=e||document.body;t=t||null;var r=e.ownerDocument.evaluate?this.getNodesByXPath:null;var n=e.ownerDocument.createTreeWalker?this.getNodesByTreeWalker:null;var i=e.ownerDocument.createNodeIterator?this.getNodesByNodeIterator:null;var a=this.getNodesByChildNodes;if(!t){var s=1;switch(s){case 1:t=r||n||i||a;break;case 2:t=n||i||r||a;break;case 0:default:t=n||a;break}}var o=t.apply(this,[e]).map(this.prepareTextItem,this).filter(function(e){var t=e.values.length>0;if(t){e.values=this.uniqueItemValues(e.values)}return t},this);if(!this.searched){this.searched=o}return o}};var r={getMappedValues:function(e,t){var r=[];t.forEach(function(t){r=n.filterMap(e,t.type,t.value).map(function(e){return{type:t.type,cleaned:e.final.cleaned,formatted:e.final.formatted}}).concat(r)},this);return r},getHtmlByType:function(e,t,r){var n=document.createElement("a");n.textContent=t;switch(e){case"phone":n.href="tel:"+r;break;case"email":n.href="mailto:"+r;break}return n.outerHTML},split:function(e,t,r,n){var i=e.split(r).map(function(e){return{text:e,isHtml:false}});var a=this.getHtmlByType(t,r,n);var s=[];for(var o=0;o<i.length;o++){s.push(i[o]);if(o!==i.length-1){s.push({text:a,isHtml:true})}}return s},enrichValue:function(e,t,r,n){var i=[];e.forEach(function(e){if(e.isHtml){i.push(e);return}i=i.concat(this.split(e.text,t,r,n))},this);return i},enrich:function(e,t,r){var n=this.getMappedValues(e,t.values);var i=[{text:r,isHtml:false}];n.forEach(function(e){i=this.enrichValue(i,e.type,e.formatted,e.cleaned)},this);if(i.length<=1){t.node.nodeValue=r}else{var a=document.createElement("DIV");var s=t.node.parentNode;i.forEach(function(e){var r=[];if(e.isHtml){a.innerHTML=e.text;r=r.concat(webPacker.type.toArray(a.childNodes))}else{r.push(document.createTextNode(e.text))}r.forEach(function(e){s.insertBefore(e,t.node)})});s.removeChild(t.node)}}};var n={trim:function(e){return(e||"").trim()},hasLength:function(e){return(e||"").length>0},clean:function(e,t){return e==="phone"?n.cleanPhone(t):n.trim(t)},cleanPhone:function(e){return e.trim().replace(/[^\d+]/gim,"")},filterMap:function(e,t,r){var i=n.clean(t,r);if(!i){return[]}return e.filter(function(e){return e.origin.cleaned===i})},replaceByMap:function(e,t,r,i,a){var s={text:"",from:null,to:null};a=a||false;if(!t){return s}var o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");var c=t;n.filterMap(e,r,i).forEach(function(e){var t=a?e.final.cleaned:e.final.formatted;s.from=i;s.to=t;c=c.replace(new RegExp(o,"g"),t)});s.text=c===t?"":c;return s},uniqueArray:function(e,t){t=t||function(e,t){return e===t};var r=[];e.forEach(function(e){var n=r.some(function(r){return t.apply(this,[e,r])});if(!n){r.push(e)}});return r}};var i={context:null,urlParameters:null,getUtmArray:function(){var e=webPacker.url.parameter.getList().filter(function(e){return e.name==="utm_source"});var t="b24-tracker-utm";if(e.length>0){webPacker.ls.setItem(t,e)}return webPacker.ls.getItem(t)||[]},ready:function(e){/compl|loaded|intera/.test(document.readyState)?e():this.addEventListener(document,"DOMContentLoaded",e)}};var a=new function(){this.items={};this.now=function(){if(window.performance&&window.performance.now){return window.performance.now()}return null};this.start=function(e){if(!this.items[e]){this.items[e]={start:null,end:null,time:null}}this.items[e].start=this.now()};this.end=function(e){if(!this.items[e]){return}var t=this.items[e];t.end=this.now();if(!t.start){return}if(!t.time){t.time=0}t.time+=t.end-t.start};this.dump=function(){for(var e in this.items){if(!this.items.hasOwnProperty(e)){continue}if(!this.items[e]){return}var t=Math.round(this.items[e].time);(console||{}).log("Perf,",e+": ",t,"ms")}}};var s={log:[],resolve:function(e){this.log=[];this.makeGroups(e).forEach(this.hideGroup,this)},makeGroups:function(e){var t=e.map(function(e){return e.parentNode});t=n.uniqueArray(t);return t.map(function(t){return e.filter(function(e){return t!==e&&t===e.parentNode})}).filter(function(e){return e.length>1})},hideGroup:function(e){e.forEach(function(e,t){if(t===0){return}e.style.display="none";this.log.push(e)},this)},dump:function(){(console||{}).log("hidden nodes: ",this.log)}};var o={tracked:[],init:function(){if(!window.b24Tracker||!window.b24Tracker.guest){return}if(webPacker.browser.isMobile()){var e=c.Instance.getElementEngine().search();e.filter(function(e){return e.values[0].type==="phone"}).forEach(function(e){if(!e.node||e.node.isTrackingHandled){return}webPacker.addEventListener(e.node,"click",this.storeTrace.bind(this,e.values[0].value));e.node.isTrackingHandled=true},this)}if(c.Instance.source&&window.b24Tracker.guest.isUtmSourceDetected()){var t=c.Instance.source;if(t.replacement.phone[0]){this.storeTrace(t.replacement.phone[0],true)}}},storeTrace:function(e,t){if(this.tracked.indexOf(e)>=0){return}var r=window.b24Tracker.guest.getTrace({channels:[{code:"call",value:e}]});window.b24Tracker.guest.storeTrace(r);if(!t){this.tracked.push(e)}}};function c(){this.types=[{code:"phone",selector:'a[href^="tel:"], a[href^="callto:"]',regexp:/([+]?([\d][- ()\u00A0]{0,2}){5,15}[\d])/gi,cleaner:n.cleanPhone},{code:"email",selector:'a[href^="mailto:"]',regexp:/([-_.\w\d]+@[-_.\w\d]+\.\w{2,15})/gi,cleaner:n.trim}];this.map=[];this.perf=a;this.duplicates=s;this.enrichText=false;this.replaceText=false;this.resolveDup=false;this.source=null;this.site=null;this.loaded=false}c.Instance=null;c.prototype={load:function(e){if(webPacker.url.parameter.get("b24_tracker_debug_enabled")==="y"){debugger}if(this.loaded){return}this.loaded=true;e=e||{};e.editor=e.editor||{resources:[]};e.b24SiteOnly=u.init(e);if(["complete","loaded","interactive"].indexOf(document.readyState)>-1){this.run(e)}else{webPacker.addEventListener(window,"DOMContentLoaded",this.run.bind(this,e))}},run:function(e){if(!e.enabled){return}a.start("Load");this.configure(e);a.end("Load");this.replace();if(this.map.length>0&&this.source){this.resolveDuplicates()}this.trackClicks()},configure:function(e){this.map=[];var t=e.sites.filter(function(t){if(t.host==="all"){return true}if(e.b24SiteOnly&&!t.b24){return false}var r=document.createElement("a");var n=webPacker.type.isArray(t.host)?t.host:[t.host];n=n.map(function(e){r.href="http://"+e;return r.hostname});return n.indexOf(window.location.hostname)>-1})[0];if(!t){return}this.enrichText=t.enrichText||false;this.replaceText=t.replaceText||false;this.resolveDup=t.resolveDup||false;var r;if(window.b24Tracker&&window.b24Tracker.guest){r=window.b24Tracker.guest.getUtmSource()}else{r=i.getUtmArray().filter(function(e){return e.name==="utm_source"});r=r[0]?r[0].value:""}var n=e.sources.filter(function(e){return e.utm.filter(function(e){return e===r}).length>0})[0];if(t.replacement==="all"){t.replacement=this.search()}var a=this.types;a=a.reduce(function(e,t){e[t.code]=t;return e},{});this.map=t.replacement.filter(function(e){return!!a[e.type]}).map(function(e){var r=a[e.type];var i=e.value;if(n&&n.replacement[e.type]){var s=n.replacement[e.type];var o=[];o=o.length>0?o:s.filter(function(e){return typeof e==="string"||e.host===t.host});o=o.length>0?o:s.filter(function(e){return!e.host});o=o.length>0?o:s;i=o.length>0?typeof o[0]==="string"?o[0]:o[0].value:i}return{origin:{cleaned:r.cleaner(e.value),formatted:[e.value]},final:{cleaned:r.cleaner(i),formatted:i}}},this);this.site=t;this.source=n},getElementEngine:function(){if(!this.elementEngine){this.elementEngine=new e({})}return this.elementEngine.setTypes(this.types).setMap(this.map)},getTextEngine:function(){if(!this.textEngine){this.textEngine=new t({})}return this.textEngine.setTypes(this.types).setMap(this.map).setEnrich(this.enrichText)},replace:function(e){e=e||document.body;var t="Element replace";a.start(t);this.getElementEngine().replace(e);a.end(t);if(this.replaceText){var r="Global text replace";a.start(r);this.getTextEngine().replace(e);a.end(r)}},resolveDuplicates:function(){if(!this.resolveDup){return}this.types.forEach(function(e){var t=document.body.querySelectorAll(e.selector);t=webPacker.type.toArray(t);if(t.length===0){return}this.duplicates.resolve(t)},this)},trackClicks:function(){o.init()},searchNodes:function(e){e=e||document.body;var t=this.getElementEngine().search(e);return this.getTextEngine().search(e).concat(t)},getSearchedNodes:function(e){e=e||document.body;var t=this.getElementEngine().getSearched(e);var r=this.getTextEngine().getSearched(e);r=r.filter(function(e){var r=t.some(function(t){return t.node.contains(e.node)});if(r||!e.node.parentNode){return false}e.node=e.node.parentNode;return true});return t.concat(r)},search:function(e){e=e||document.body;var t=[];this.searchNodes(e).forEach(function(e){e.values.forEach(function(e){var r=t.some(function(t){return t.value===e.value&&t.type===e.type});if(!r){t.push(e)}})});return t}};var u={checkingName:"b24_tracker_checking_origin",debugName:"bx_debug",debug:false,timeout:600,options:{},fields:{list:null,name:"b24_tracker_edit_enabled",get:function(e){this.restore();return this.list[e]?this.list[e]:null},set:function(e,t){this.restore();this.list[e]=t;webPacker.ls.setItem(this.name,this.list);return this},clear:function(){webPacker.ls.removeItem(this.name)},restore:function(){if(this.list!==null){return}this.list=webPacker.ls.getItem(this.name)||{};var e=webPacker.url.parameter.get("utm_source");if(e!==null){this.set("source",e)}this.set("timestamp",this.get("timestamp")||0)}},prolong:function(){this.fields.set("timestamp",Date.now())},stop:function(){this.fields.clear()},isActivated:function(){if(!window.opener){return false}if(webPacker.url.parameter.get(this.fields.name)==="y"){return true}return Date.now()-this.fields.get("timestamp")<this.timeout*1e3},log:function(e){if(this.debug&&window.console&&"log"in console){console.log("b24Tracker[EditorStatus]:",e)}},check:function(){this.debug=webPacker.url.parameter.get(this.debugName)==="y";if(!window.opener){this.log("window.opener is empty");return}var e=webPacker.url.parameter.get(this.checkingName);if(!e){this.log("Origin parameter is empty");return}if(e!==webPacker.getAddress()&&!this.debug){this.log("Origin parameter not equal `"+webPacker.getAddress()+"`");return}var t=JSON.stringify({source:"b24Tracker",action:"init",items:c.Instance.search()});window.opener.postMessage(t,e);this.log("Send to `"+e+"` data "+t)},init:function(e){this.check();if(!e.editor.force&&!this.isActivated()){this.stop();return false}e.editor.resources.forEach(function(e){webPacker.resource.load(e)});this.prolong();return true},onEditorInit:function(){b24Tracker.Editor.Manager.init({status:this,items:c.Instance.getSearchedNodes()})}};if(!window.b24Tracker)window.b24Tracker={};if(window.b24Tracker.Manager)return;b24Tracker.Manager=c;c.Instance=new c;if(!b24Tracker.Editor)b24Tracker.Editor={};b24Tracker.Editor.Status=u})();
//# sourceMappingURL=https://1csoft.bitrix24.ru/bitrix/js/crm/tracking/tracker/script.map.js

window.b24Tracker.Manager.Instance.load({"enabled":true,"sources":[{"code":null,"name":null,"utm":["newsletter"],"replacement":{"email":[],"phone":[]}}],"sites":[{"host":"1csoft.ru","b24":false,"replaceText":true,"enrichText":true,"resolveDup":true,"replacement":[]},{"host":["accelerator.bitrix24.site","import-it.bitrix24.site","virtualoffice.bitrix24.site","kukuy.bitrix24.site","1cs.bitrix24.shop","veeam280421.bitrix24.site","1csoftgift.bitrix24.shop","b24-sx21au.bitrix24.site","fishing.bitrix24.site","finance-rpa.bitrix24.site","fishingforus.bitrix24.site","crmbackup2104.bitrix24.site","movavi200521.bitrix24.site","monitor.bitrix24.site","mslicenses220621.bitrix24.site","m365security.bitrix24.site","azurestartup290621.bitrix24.site","handybackup270721.bitrix24.site","redsoft120821.bitrix24.site","stahanovets260821.bitrix24.site","tegu2511.bitrix24.site","ms365premium.bitrix24.site","msincentives22.bitrix24.site","letter.bitrix24.site","devops.bitrix24.site","finansist250122.bitrix24.site","mspc271021.bitrix24.site","mspowerbi.bitrix24.site","acronis191121.bitrix24.site","importprime301121.bitrix24.site","antikolumbain160222.bitrix24.site","startms0812.bitrix24.site","azure-backup.bitrix24.site","mspc151021.bitrix24.site","technopark-perm.bitrix24.site","techsales190122.bitrix24.site","msazurearc260122.bitrix24.site","ics150222.bitrix24.site","confedential.bitrix24.site","virtual-desktop.bitrix24.site","startms020322.bitrix24.site","research.bitrix24.site","kiberprotekt290322.bitrix24.site","shutle050422.bitrix24.site","redsoft120422.bitrix24.site"],"b24":true,"replaceText":false,"enrichText":false,"resolveDup":false,"replacement":"all"}],"editor":{"resources":[{"type":"js","path":null,"content":"\t(function(w,d,u){\n\t\tvar s=d.createElement(\u0027script\u0027);s.async=true;s.src=u+\u0027?\u0027+(Date.now()\/60000|0);\n\t\tvar h=d.getElementsByTagName(\u0027script\u0027)[0];h.parentNode.insertBefore(s,h);\n\t})(window,document,\u0027https:\/\/cdn-ru.bitrix24.ru\/b11143344\/crm\/tag\/call.tracker.ed.js\u0027);","cache":true}]}});
})();


})();       <span>Система сервисов 1С:Мультибанк</span>
            </span>
        </li>
                </ul>
            </div>
        </div>
    </div>
</div>
                            </div>
            </header>


    <div class="container-fluid main">
        <div class="row">
            <div class="col-xl-7 offset-xl-1 col-lg-9 content static_page">
                <h1>Система сервисов 1С:Мультибанк</h1>

                <p>
 <span itemscope="" itemtype="http://schema.org/ImageObject"> <img alt="Сервис 1С:Мультибанк" src="/upload/static/multibank1.png" class="img-fluid" style="float:left;padding-right:10px; padding-bottom:10px;" itemprop="contentUrl" width="70" height="70">
	<meta itemprop="name" content="Сервис 1С:Мультибанк">
 </span>
&laquo;1С:Мультибанк&raquo; &ndash; это система сервисов, призванных интегрировать функционал систем дистанционного банковского обслуживания (ДБО) и приложений клиент-банк непосредственно в программы &laquo;1С&raquo;.
</p>

<p><strong>Для того чтобы эффективно управлять денежными средствами руководителю нужна информация</strong></p>
<ul>
<li>Сколько денег осталось на счетах в разных банках?</li>
<li>Когда, кому и сколько нужно будет платить в ближайшее время?</li>
<li>Какие и когда ожидаются поступления?</li>
<li>Можно ли получить кредит, и на каких условиях?</li>
<li>Насколько надежны контрагенты?</li>
</ul>
<p>Вся эта информация есть в учетной программе &laquo;1С&raquo;, но, увы, она не может быть доступна в приложении банка &mdash; как минимум потому, что счетов и банков у предприятия обычно несколько. Именно поэтому мы реализовали и объединили возможности управления расчетными счетами и иными банковскими продуктами непосредственно в программах &laquo;1С&raquo;.</p>
<p>Проект &laquo;1С:Мультибанк&raquo; является развитием и объединением уже давно успешно используемых предприятиями и банками технологий. В основе лежит сервис <a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/directbank-pryamoy-obmen-s-bankom/" target="_blank">DirectBank</a>, который поддерживают все крупные российские банки. Также используется технология &laquo;1С:БанкКоннект&raquo;, на базе которой реализованы продукты &laquo;<a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/1s-kredit/" target="_blank">1С:Кредит</a>&raquo;, &laquo;<a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/1s-lizing/" target="_blank">1С:Лизинг</a>&raquo;, &laquo;<a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/servis-1s-finotchetnost/" target="_blank">1С:ФинОтчетность</a>&raquo;, &laquo;<a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/servis-1s-otkrytie-scheta/" target="_blank">1С:Открытие счета</a>&raquo;</p>
<p><strong>В настоящее время с помощью технологий &laquo;1С:Мультибанк&raquo; можно прямо из 1С осуществлять</strong></p>
<ul>
<li>Получение выписок и информации о состоянии расчетных счетов.</li>
<li>Отправку платежных поручений непосредственно из программ &laquo;1С&raquo;.</li>
<li>Подписание платежных поручений в программах &laquo;1С&raquo; с помощью УКЭП, а также, что особенно удобно, с помощью СМС-кода. Банк <a href="https://blanc.ru/" target="_blank">Blanc</a> первым поддержал данную технологию для своих клиентов.</li>
<li>Регулярные платежи, повтор платежей, отзыв платежных поручений.</li>
<li>Зарплатные проекты, реестры выплаты зарплаты.</li>
<li>Валютные переводы.</li>
<li>Отправку заявок на привлечение кредитов &laquo;<a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/1s-kredit/" target="_blank">1С:Кредит</a>&raquo;.</li>
<li>Отправку подписанных документов о финансово-хозяйственной деятельности в банк&nbsp;&laquo;<a href="https://v8.1c.ru/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/servis-1s-finotchetnost/" target="_blank">1С:ФинОтчетность</a>&raquo;.</li>
<li>Регламентированную переписку с банком, в т.ч. с использованием электронных подписей.</li>
<li>Проверку надежности контрагентов, автоматическое заполнение реквизитов контрагентов.</li>
<li>Отправку заявок на открытие расчетного счета прямо из программы &laquo;1С&raquo;&nbsp;&laquo;1С:Открытие счета&raquo;.</li>
</ul>
<p><strong>В ближайшем будущем ожидается появление новых возможностей</strong></p>
<ul>
<li>Информирование клиента о новых продуктах и персональных предложениях банка непосредственно в интерфейсе программ &laquo;1С&raquo;.</li>
<li>Расширение доступной пользователю справочной информации (обменные курсы, ставки по депозитам и т.д.).</li>
<li>Валютообменные операции, документы ВЭД, валютный контроль.</li>
<li>Открытие и управление депозитами.</li>
<li>Управление торговым и интернет-эквайрингом.</li>
<li>Выпуск и управление корпоративными банковскими картами.</li>
<li>Мобильное приложение руководителя.</li>
</ul>
<p>Доступный пользователям функционал зависит от используемого приложения &laquo;1С&raquo;, а также от того, какие именно возможности системы сервисов &laquo;1С:Мультибанк&raquo; поддержал банк, в котором пользователь открыл расчётный счёт.</p>
<p><strong>Преимущества системы сервисов &laquo;1С:Мультибанк&raquo;</strong></p>
<p><u>Для пользователей программ &laquo;1С&raquo;:</u></p>
<ul>
<li>Возможность управления денежными средствами и банковскими продуктами компании без переключения в другие программы, приложения и сервисы.</li>
<li>Единый пользовательский интерфейс для взаимодействия с банками по любым видам операций.</li>
<li>Удобный и простой доступ к банковским продуктам.</li>
</ul>
<p><u>Для банков:</u></p>
<ul>
<li>Привлечение новых клиентов среди миллионов пользователей &laquo;1С&raquo;. Мы периодически рассказываем им о поддержке конкретными банками новых возможностей в программах &laquo;1С&raquo;.</li>
<li>Возможность целевого информирования своих клиентов о новых продуктах и предложениях банка непосредственно в интерфейсе программ &laquo;1С&raquo;.</li>
<li>Повышение конкурентоспособности банка за счет поддержки новых возможностей, недоступных пока клиентам банков-конкурентов.</li>
</ul>
<p>Если у вас есть вопросы по подключению и работе с системой сервисов &laquo;1С:Мультибанк&raquo; &ndash; напишите нам на электронный адрес <a href="mailto:isvp@1c.ru">bank@1c.ru</a>.</p>            </div>
            <aside class="col-lg-3 col-md-12 sidebar offset-top-small">
                <div class="sticky">
                    
                    
                                            <ul class="freinds-menu">
                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/obmen-dannymi-s-internet-magazinom/">Обмен данными с интернет-магазином</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/sistemy-klient-banka/">Системы «Клиент банка»</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/zarplatnye-proekty-bankov/">Зарплатные проекты банков</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/obmen-dannymi-v-byudzhetnykh-resheniyakh/">Обмен данными в бюджетных решениях</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/avtonomnoe-reshenie/">Автономное решение</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/directbank-pryamoy-obmen-s-bankom/">DirectBank (прямой обмен с банком)</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/podklyuchenie-torgovogo-oborudovaniya/">Подключение торгового оборудования</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/sistema-bystrykh-platezhey/">Система быстрых платежей — мгновенный перевод денежных средств от покупателей в программах «1С»</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/platezhnye-dokumenty-s-qr-kodom-v-1s-predpriyatii-8/">Платежные документы с QR-кодом в «1С:Предприятии 8»</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/1c-otchetnost/">1C-Отчетность</a>
                                                                    </li>
                                                                                            <li>
                                                                            <span class="active">Система сервисов 1С:Мультибанк</span>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/1s-kredit/">Сервис 1С:Кредит</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/1s-lizing/">Сервис 1С:Лизинг</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/servis-1s-finotchetnost/">Сервис 1С:ФинОтчетность</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/servis-1s-otkrytie-scheta/">Сервис 1С:Открытие счета</a>
                                                                    </li>
                                                                                            <li>
                                                                            <a href="/tekhnologii/obmen-dannymi-i-integratsiya/realizovannye-resheniya/arkhiv-razrabotok/">Архив разработок</a>
                                                                    </li>
                                                                                    </ul>
                    
                                    </div>
            </aside>
        </div>
    </div>

<footer>
    <div class="container-fluid top">
        <div class="row">
                            <!--noindex-->
                        <div class="col-xl-4 offset-xl-1 col-lg-4 offset-lg-0 col-md-5 col-sm-5">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <ul class="menu">
                                                            <!--'start_frame_cache_footer-auth'-->                                    <li><span class="link" title="/personal/?login=y">Вход для партнеров 1С</span></li>
                                <!--'end_frame_cache_footer-auth'-->                                <li><span class="link" title="/podderzhka-i-obuchenie/uchebnye-versii/distributiv-1s-predpriyatie-8-3-versiya-dlya-obucheniya-programmirovaniyu/">Учебная версия</span></li>
                                <li><span class="link" title="http://1c.ru/rus/firm1c/stdl.htm">Стать партнером</span></li>
                                                    </ul>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <ul class="menu">

                                                            <li><span class="link" title="/policy/">Политика конфиденциальности</span></li>
                                <li><span class="link" title="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%73%69%74%65%5f%76%38%40%31%63%2e%72%75">Замечания по сайту</span></li>
                                <li><span class="link" title="/static/drugie-sayty-1s/">Другие сайты</span></li>
                                                    </ul>
                    </div>
                </div>
            </div>
                            <!--/noindex-->
            
            <div class="col-xl-6 col-lg-8 col-md-7 col-sm-7 last">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 about" itemscope itemtype="http://schema.org/Organization">
                        <meta itemprop="name" content="Фирма 1С">
                        <link itemprop="url" href="https://v8.1c.ru">
                        <meta itemprop="logo" content="https://v8.1c.ru/local/templates/main/img/logo1c.png">
                        <div class="wrap">
                                                            <!--noindex-->
                                <span class="link" title="/">
                                    <svg class="icon-logo_footer"><use xlink:href="/local/templates/main/svg/main.svg#icon__logo"></use></svg>
                                </span>
                                <!--/noindex-->
                                                        <div>
                                <p>
                                    Телефон: <a href="tel:+74957379257" class="phone"><span itemprop="telephone">+7 (495) 737-92-57</span></a>
                                </p>
                                <p>
                                    Email: <span itemprop="email" class="link" title="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%73%69%74%65%5f%76%38%40%31%63%2e%72%75">&#115;&#105;&#116;&#101;&#95;&#118;&#56;&#64;&#49;&#99;&#46;&#114;&#117;</span>
                                </p>
                            </div>
                        </div>
                        <div class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                            <meta itemprop="postalCode" content="127473">
                            Отдел продаж: <span itemprop="addressLocality">г. Москва</span>,
                            <span itemprop="streetAddress">улица Селезнёвская, дом&nbsp;21</span>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                                            </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-10 offset-xl-1 col-lg-12">
                <div class="copy">&copy;&nbsp;2024&nbsp; ООО &laquo;1C&raquo;. Все права на сайт защищены
			<div class="inner_row_copy">© 2011- 2024 ООО «1C-Софт». Исключительное право на технологическую платформу «1С:Предприятие 8» и типовые конфигурации программных продуктов системы «1С:Предприятие 8», представленные на этом сайте, принадлежит ООО «1С-Софт» - 100% дочерней компании  ООО «1С»</div>
		</div>
            </div>
        </div>
    </div>
</footer>
</div>

<div class="left-block">
    <div class="top">
        <div class="icon-icon_arrow_left">
            <svg><use xlink:href="/local/templates/main/svg/main.svg#icon__arrow_left"></use></svg>
        </div>
        <div class="icon-icon_hamburger_gray">
            <svg><use xlink:href="/local/templates/main/svg/main.svg#icon__hamburger_gray"></use></svg>
        </div>
    </div>
    <nav>
        <!--'start_frame_cache_header-location-left-block'-->            <span class="city">
                <span>Россия</span>
            <svg class="city-right-icon"><use xlink:href="/local/templates/main/svg/main.svg#icon__arrow_down_city"></use></svg>
            </span>
                    <!--'end_frame_cache_header-location-left-block'-->        <a class="anchor" href="/static/o-firme-1s/">Фирма 1С</a>
        <span class="search">Поиск</span>
    </nav>
</div>
    <div class="search-block">
    <form action="/search/" data-ajax="/ajax/system/search-right-autocomplete.php" method="get" class="search-wrap">
        <input type="hidden" name="category" value="products" />
        <button type="submit">
            <svg><use xlink:href="/local/templates/main/svg/main.svg#icon__search_gray"></use></svg>
        </button>
        <input type="text" placeholder="Найти" name="q" class="autocomplete" autocomplete="off">
        <button type="button" class="remove">
            <svg><use xlink:href="/local/templates/main/svg/main.svg#icon__cross_white"></use></svg>
        </button>
    </form>
</div>

									<!-- Yandex.Metrika counter -->
<noscript><div><img src="https://mc.yandex.ru/watch/25243685" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<script>
    function gtag(){
        dataLayer.push(arguments)
    };

    var func = function() {
        if (jQuery) { 
            clearInterval(timer);
            loadgtm(window,document,'script','dataLayer','GTM-M695C3H');  
            window.dataLayer = window.dataLayer || [];          
        }
    }
    var timer = setInterval(func, 1000);
</script>
<script>
</script>

<script type="text/javascript" src="/bitrix/js/pull/protobuf/protobuf.js?1631012967274055"></script>
<script type="text/javascript" src="/bitrix/js/pull/protobuf/model.js?163101296770928"></script>
<script type="text/javascript" src="/bitrix/js/rest/client/rest.client.js?164689758917414"></script>
<script type="text/javascript" src="/bitrix/js/pull/client/pull.client.js?166246940670481"></script>
<script type="text/javascript" src="/local/templates/main/additional/composit.js?160553652440181"></script>
<script type="text/javascript">var _ba = _ba || []; _ba.push(["aid", "43692731e55be303f7d65fbbd040764b"]); _ba.push(["host", "v8.1c.ru"]); (function() {var ba = document.createElement("script"); ba.type = "text/javascript"; ba.async = true;ba.src = (document.location.protocol == "https:" ? "https://" : "http://") + "bitrix.info/ba.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ba, s);})();</script>

<script defer src="/local/templates/main/js/chunks/jquery-vendor.7ac5d95c3a94c26d10a1.js"></script>
<script defer src="/local/templates/main/js/chunks/bootstrap-vendor.7ac5d95c3a94c26d10a1.js"></script>
<script defer src="/local/templates/main/js/main.min.7ac5d95c3a94c26d10a1.js"></script>
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "/local/templates/main/metrika-tag.js", "ym");

    ym(25243685, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
</script>
</body>
</html>
