window.stConfig = {"endpointUrl":"https:\/\/a.us.silktide.com\/v1\/events","permittedUrls":["https:\/\/988lifeline.org\/"],"downloadExtensions":["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],"flushTime":30000,"updated":1706722336,"honourDoNotTrack":false,"upm":false,"propertyKey":"36b7995bff5c252991633431c3821f9b"};
(()=>{"use strict";var e={512:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DeadClick=void 0;class s{constructor({doc:e}){this.resolvePromise=null,this.handleMutation=()=>{this.resolve("mutation")},this.doc=e}attach(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.doc.documentElement,s.config)}detach(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}resolve(e){this.resolvePromise&&(this.resolvePromise(e),this.resolvePromise=null,window.clearTimeout(this.promiseTimeout))}monitorEvents(e,t){this.resolve("cancel"),this.resolvePromise=t,this.promiseTimeout=window.setTimeout((()=>{this.resolve("timeout")}),e)}}t.DeadClick=s,s.config={attributes:!0,childList:!0,subtree:!0}},161:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.handleSomethingHappened=()=>{this.timeout&&clearTimeout(this.timeout),this.idle=!1,this.timeout=window.setTimeout(this.handleNothingHappened,this.config.idleTimeout)},this.handleNothingHappened=()=>{this.idle=!0,this.timeout=null},this.config=e,this.timeout=null,this.idle=!1}isIdle(){return this.idle}attach(){this.config.resetEvents.forEach((e=>{document.addEventListener(e,this.handleSomethingHappened,!0)})),this.handleSomethingHappened()}detach(){this.timeout&&clearTimeout(this.timeout),this.config.resetEvents.forEach((e=>{document.removeEventListener(e,this.handleSomethingHappened,!0)}))}}},651:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(930);t.default=class{reset(){this.lastClickTimestamp=void 0,this.lastCssSelector=void 0,this.coords=void 0}handleError(){if(this.lastClickTimestamp&&this.lastCssSelector&&this.coords){if(this.lastClickTimestamp+3e3>=Date.now()){const[e,t]=this.coords,s=document.querySelector(this.lastCssSelector);window.silktide("frustration",{description:"Dead click",selector:this.lastCssSelector,x:e,y:t,type:"deadClick",text:s?s.innerText:""})}this.reset()}}handleClick(e){e.target instanceof Element&&(this.lastClickTimestamp=Date.now(),this.coords=(0,n.getXYPerc)(e.target,e.pageX,e.pageY),this.lastCssSelector=(0,n.getCssSelector)(e.target))}attach(){window.addEventListener("click",this.handleClick),window.addEventListener("error",this.handleError)}detach(){window.removeEventListener("click",this.handleClick),window.removeEventListener("error",this.handleError)}}},812:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.maxScroll=null,this.handleScroll=()=>{const e=this.getMainScroller();e&&this.update(e)};const e=this.getMainScroller();e&&this.reset(e)}get(){return null===this.maxScroll?void 0:this.maxScroll}reset(e){this.maxScroll=e?this.getScrollPercent(e):null}attach(){window.addEventListener("scroll",this.handleScroll)}detach(){window.removeEventListener("scroll",this.handleScroll)}getMainScroller(){return document.scrollingElement||void 0}update(e){if(e){const t=this.getScrollPercent(e);this.maxScroll=Math.max(this.maxScroll||0,t)}else this.maxScroll=null}getScrollPercent(e){if(0===e.scrollHeight)return 100;const t=(e.scrollTop+e.clientHeight)/e.scrollHeight;return Math.round(100*t)}}},948:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(661),i=["Tab","Enter","Space","Escape","PageUp","PageDown","End","Home","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],o=["A","AREA","BUTTON"];t.default=class{constructor(){this.usedMouse=!1,this.usedTouch=!1,this.usedKeyboard=!1,this.handleMouseMove=()=>{"hybrid"!==n.deviceType&&"mouseOnly"!==n.deviceType||(this.usedMouse=!0,this.detachMouseMove())},this.handleTouchEvent=()=>{this.usedTouch=!0,this.detachTouchEvent()},this.handleKeyboardEvent=e=>{i.includes(e.key)&&(document.activeElement&&e.target===document.activeElement&&!o.includes(document.activeElement.tagName)||(this.usedKeyboard=!0,this.detachKeyboardEvent()))}}getUsedMouse(){return this.usedMouse}getUsedTouch(){return this.usedTouch}getUsedKeyboard(){return this.usedKeyboard}attach(){document.addEventListener("mousemove",this.handleMouseMove,{capture:!0}),document.addEventListener("touchstart",this.handleTouchEvent,{capture:!0}),document.addEventListener("touchmove",this.handleTouchEvent,{capture:!0}),document.addEventListener("keydown",this.handleKeyboardEvent,{capture:!0})}detach(){this.detachMouseMove(),this.detachTouchEvent(),this.detachKeyboardEvent()}detachMouseMove(){document.removeEventListener("mousemove",this.handleMouseMove)}detachTouchEvent(){document.removeEventListener("touchstart",this.handleTouchEvent),document.removeEventListener("touchmove",this.handleTouchEvent)}detachKeyboardEvent(){document.removeEventListener("keydown",this.handleKeyboardEvent)}}},25:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.lastTimestamp=null,this.duration=0}get(){return this.duration}startUsing(){this.duration=0,this.lastTimestamp=Date.now()}stopUsing(){this.lastTimestamp&&(this.duration=Math.round((Date.now()-this.lastTimestamp)/1e3),this.lastTimestamp=null)}}},683:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(930),i=["SCRIPT","STYLE"];function o(e){var t;const s=null===(t=e.parentElement)||void 0===t?void 0:t.tagName;if(!s||i.includes(s))return null;const n=e.nodeValue;if(!n)return null;const o=n.trim().replace(/\s\s+/g," ").replace(/\n/g,"");return o.length?o:null}function r(e,t=!1){const s=e.childNodes;let i=[];const{width:a,height:l}=e.getBoundingClientRect();if(a<=32&&l<=32)return i;for(let a=0;a<s.length;a++){const l=s[a],d=o(l),c=t||!(0,n.elemHasFixedParent)(e);if("#text"===l.nodeName&&d&&c&&i.push({textNode:l,parentSelector:l.parentElement?(0,n.getCssSelector)(l.parentElement):"",wordCount:d.split(/\s/g).length}),l.childNodes.length>0){let e;l.nodeType===Node.ELEMENT_NODE&&(e=r(l,t),i=[...i,...e])}}return i}t.default=class{constructor(e){this.readWords=0,this.totalWords=0,this.readElements={},this.debouncedScroll=(0,n.debounce)(this.handleScroll.bind(this),1e3),this.handleObserverIntersection=e=>{this.entries||(this.entries=e),e.forEach((e=>{if(e.isIntersecting){const t=(0,n.getCssSelector)(e.target);t&&(this.readElements[t]=e.target)}}))},this.handleDOMMutation=e=>{var t;for(let s=0;s<e.length;s++){const i=e[s].target;if((0,n.elemHasFixedParent)(i))try{const e=r(i,!0);if(null===(t=this.pageTextNodes)||void 0===t?void 0:t.some((t=>e.map((e=>e.textNode)).includes(t.textNode)))){this.attachIntersectionObserver();break}}catch(e){console.log(e)}}},this.handleLoad=()=>{this.totalWords=this.getTotalWords(),this.mutationObserver=new MutationObserver(this.handleDOMMutation),this.mutationObserver.observe(document.body,{attributes:!0,attributeFilter:["class","style"],subtree:!0}),this.attachIntersectionObserver()},this.doc=e}getAllTextNodes(e){return e.body?r(e.body):[]}getCachedTextNodes(){if(!this.pageTextNodes){const e=this.getAllTextNodes(this.doc);return this.pageTextNodes=e,e}return this.pageTextNodes}getTotalWords(){const e=this.getCachedTextNodes();return this.pageTextNodes=e,e.reduce(((e,t)=>e+t.wordCount),0)}setObserver(e){if(this.intersectionObserver){const t=document.querySelector(e.parentSelector);t&&this.intersectionObserver.observe(t)}}attachIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0,this.pageTextNodes=void 0),this.intersectionObserver=new IntersectionObserver(this.handleObserverIntersection,{rootMargin:"0px",threshold:.2});try{this.pageTextNodes=this.getAllTextNodes(this.doc),this.pageTextNodes.forEach(this.setObserver.bind(this))}catch(e){throw new Error("Failed to set up observers for text nodes")}}attach(){window.addEventListener("scroll",this.debouncedScroll),window.addEventListener("load",this.handleLoad)}detach(){var e,t;window.removeEventListener("scroll",this.debouncedScroll),window.removeEventListener("load",this.handleLoad),null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),null===(t=this.mutationObserver)||void 0===t||t.disconnect()}getReadTextNodes(){const e=[];return Object.values(this.readElements).forEach((t=>{var s;const n=null===(s=this.pageTextNodes)||void 0===s?void 0:s.find((e=>document.querySelector(e.parentSelector)===t));n&&e.push(n)})),e}getReadWords(){return this.getReadTextNodes().reduce(((e,t)=>e+t.wordCount),0)}handleScroll(){this.setTotalWords(this.getTotalWords()),this.setReadToSelector()}setReadWords(e){this.readWords=e}setTotalWords(e){e>this.totalWords&&(this.totalWords=e)}setReadToSelector(){const e=Object.values(this.readElements).sort(((e,t)=>t.getBoundingClientRect().y-e.getBoundingClientRect().y))[0];if(e){const t=(0,n.getCssSelector)(e);t?this.readToSelector=t:console.error("Error: couldnt set lowest selector")}}getReadToSelector(){return this.readToSelector?this.readToSelector:void 0}}},1:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(930),o=s(512),r=n(s(161)),a=n(s(651)),l=n(s(812)),d=n(s(948)),c=n(s(25)),h=n(s(683)),u=s(761),v=["SELECT","TEXTAREA"],m=()=>{},g=["consent","unconsent"];t.default=class{constructor(){this.flushInterval=null,this.maxScroll=new l.default,this.pageDuration=new c.default,this.deadClick=new o.DeadClick({doc:document}),this.jsErrorAfterClick=new a.default,this.initialised=!1,this.readCount=new h.default(document),this.navigationType=new d.default,this.idleTimeout=new r.default({idleTimeout:3e3,resetEvents:["mousedown","mousemove","keypress","scroll","touchstart","click"]}),this.log=m,this.handleSpecialEvent=e=>{var t,s,n,i;switch(e.event){case"consent":"true"!==(null===(t=window.localStorage)||void 0===t?void 0:t.getItem("st-consent"))?(null===(s=window.localStorage)||void 0===s||s.setItem("st-consent","true"),(0,u.doFlush)()):this.removeEvents(window.stEvents,["consent"]);break;case"unconsent":"true"===(null===(n=window.localStorage)||void 0===n?void 0:n.getItem("st-consent"))?(null===(i=window.localStorage)||void 0===i||i.removeItem("st-consent"),(0,u.doFlush)()):this.removeEvents(window.stEvents,["unconsent"])}},this.handleClick=e=>{const t=window.getSelection();if(t&&"Range"===t.type)return;if(e.button>0)return;if(!(e.target instanceof HTMLElement))return;const s=e.target,n=(0,i.getCssSelector)(s),[o,r]=(0,i.getXYPerc)(s,e.pageX,e.pageY),a=(0,i.getHref)(s);return a?(0,i.urlHasDownloadExtension)(a,window.stConfig.downloadExtensions)?(window.silktide("download",{url:a}),void(0,u.doFlush)(!0)):(window.silktide("click",{selector:n,url:a,x:o,y:r}),void(0,u.doFlush)(!0)):"string"==typeof s.getAttribute("data-is-download")&&a?(window.silktide("download",{url:a}),void(0,u.doFlush)(!0)):(a||document.activeElement&&s===document.activeElement&&(window.silktide("click",{selector:n,url:a,x:o,y:r}),(0,u.doFlush)(!1)),void((0,i.elemHasParentTags)(s,["label"])||this.deadClick.monitorEvents(1e3,(e=>{if("focus"===e||"mutation"===e||"cancel"===e)window.silktide("click",{selector:n,x:o,y:r});else if("timeout"===e){const e=(0,i.getNearestMatchingParent)(s,["a","button","input","img","figure","area"]);if(v.includes(s.tagName))return;if(e&&"INPUT"===e.tagName&&"button"!==e.getAttribute("type"))return;window.silktide("frustration",{description:"Dead click",selector:e?(0,i.getCssSelector)(e):n,x:o,y:r,type:"deadClick",text:s.innerText.slice(0,255)})}}))))},this.handleVisibilityChange=()=>{if("hidden"===document.visibilityState)this.stopFlushInterval(),this.idleTimeout.detach(),this.maxScroll.detach(),this.pageDuration.stopUsing(),window.silktide("page_update",{duration:this.pageDuration.get(),maxScroll:this.maxScroll.get(),readWords:this.readCount.getReadWords(),totalWords:this.readCount.getTotalWords(),readToSelector:this.readCount.getReadToSelector(),usedMouse:this.navigationType.getUsedMouse(),usedTouch:this.navigationType.getUsedTouch(),usedKeyboard:this.navigationType.getUsedKeyboard()}),(0,u.doFlush)(!0);else{const e=this.maxScroll.getMainScroller();e&&this.maxScroll.reset(e),this.idleTimeout.attach(),this.maxScroll.attach(),this.pageDuration.startUsing(),this.startFlushInterval()}},this.handleMutation=()=>{this.oldHref!==document.location.href&&(this.oldHref=document.location.href,(0,u.doFlush)(!0))}}initialise(){var e;window.stConfig?(this.log="function"==typeof window.stConfig.log?window.stConfig.log:m,window._phantom||window.__nightmare||window.Cypress||window.navigator.webdriver?this.log("detected automated browser"):"true"!==(null===(e=window.localStorage)||void 0===e?void 0:e.getItem("silktide_analytics_ignore"))?window.stConfig.honourDoNotTrack&&"1"===window.navigator.doNotTrack?this.log("detected do not track request"):(window.stConfig.excludedPaths||[]).some((e=>window.location.pathname.endsWith(e)))?this.log("page excluded"):(window.stEvents||(window.stEvents=[]),window.stEvents.__silktideAnalyticsFlag=!0,this.removeEvents(window.stEvents,g).forEach(this.handleSpecialEvent),window.stEvents.push=e=>(Array.prototype.push.call(window.stEvents,e),g.includes(e.event)&&this.handleSpecialEvent(e),window.stEvents.length),this.startFlushInterval(),this.attach(),this.idleTimeout.attach(),this.maxScroll.attach(),this.readCount.attach(),this.deadClick.attach(),this.jsErrorAfterClick.attach(),this.navigationType.attach(),this.pageDuration.startUsing(),this.initialised=!0):this.log("detected escape hatch")):console.error("Silktide analytics is missing configuration")}destroy(){this.flushInterval&&clearInterval(this.flushInterval),this.detach(),this.idleTimeout.detach(),this.maxScroll.detach(),this.readCount.detach(),this.deadClick.detach(),this.jsErrorAfterClick.detach(),this.navigationType.detach(),this.pageDuration.stopUsing()}attach(){document.addEventListener("click",this.handleClick,{capture:!0}),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.observer=new MutationObserver(this.handleMutation),this.observer.observe(document.documentElement,{childList:!0,subtree:!0})}detach(){var e;document.removeEventListener("click",this.handleClick),document.removeEventListener("visibilitychange",this.handleVisibilityChange),null===(e=this.observer)||void 0===e||e.disconnect()}startFlushInterval(){this.flushInterval=window.setInterval((()=>{(0,u.doFlush)()}),window.stConfig.flushTime||1e4),(0,u.doFlush)()}stopFlushInterval(){this.flushInterval&&window.clearInterval(this.flushInterval)}removeEvents(e,t){const s=[];for(let n=0;n<e.length;n++)t.includes(e[n].event)&&(s.push(Object.assign({},e[n])),e.splice(n,1),n--);return s}}},661:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deviceType=void 0;const s="undefined"!=typeof window?window:{screen:{},navigator:{}},n=(s.matchMedia||(()=>({matches:!1}))).bind(s),i="ontouchstart"in s,o=i||"TouchEvent"in s&&n("(any-pointer: coarse)").matches,r=(s.navigator.maxTouchPoints||0)>0||o,a=s.navigator.userAgent||"",l=n("(pointer: coarse)").matches&&/iPad|Macintosh/.test(a)&&Math.min(s.screen.width||0,s.screen.height||0)>=768,d=(n("(pointer: coarse)").matches||!n("(pointer: fine)").matches&&i)&&!/Windows.*Firefox/.test(a),c=n("(any-pointer: fine)").matches||n("(any-hover: hover)").matches||l||!i;t.deviceType=!r||!c&&d?r?"touchOnly":"mouseOnly":"hybrid"},761:(e,t)=>{function s(){var e;if(!window.stConfig)return null;window.stEvents&&Array.isArray(window.stEvents)&&window.stEvents.__silktideAnalyticsFlag||(console.warn("Silktide analytics detects that `window.stEvents` has been modified. This is not supported. If you must, please do `window.stEvents.length = 0` instead."),window.stEvents=[]);const t=window.stConfig.propertyKey;if(window.stEvents.length>0){const s=window.stEvents.slice(0);window.stEvents.length=0;const n={propertyKey:t,url:window.stConfig.fakeUrl||window.location.href,referrer:0===document.referrer.length?void 0:document.referrer,viewWidth:window.innerWidth,events:s};return!0===window.stConfig.upm&&"true"!==(null===(e=window.localStorage)||void 0===e?void 0:e.getItem("st-consent"))&&(n.upm=!0),n}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.doFlush=t.getFlush=void 0,t.getFlush=s,t.doFlush=function(e=!1){const t=s();if(!t)return;const n=`${window.stConfig.endpointUrl.replace(/\/$/,"")}`;e&&navigator.sendBeacon?navigator.sendBeacon(`${n}/beacon`,JSON.stringify(t)):function(e,t){const s=new XMLHttpRequest;s.open("POST",e,!0),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Accept","application/json"),s.send(JSON.stringify(t)),s.onreadystatechange=()=>{s.readyState}}(n,t)}},920:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(s(1));window.silktideInstance=new i.default,window.silktideInstance.initialise()},930:(e,t)=>{function s(e){if(0==arguments.length)throw new TypeError("`cssEscape` requires an argument.");const t=String(e),s=t.length;let n,i=-1,o="";const r=t.charCodeAt(0);if(1==s&&45==r)return"\\"+t;for(;++i<s;)n=t.charCodeAt(i),o+=0!=n?n>=1&&n<=31||127==n||0==i&&n>=48&&n<=57||1==i&&n>=48&&n<=57&&45==r?"\\"+n.toString(16)+" ":n>=128||45==n||95==n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?t.charAt(i):"\\"+t.charAt(i):"�";return o}Object.defineProperty(t,"__esModule",{value:!0}),t.cssEscape=t.urlHasDownloadExtension=t.debounce=t.getCssSelector=t.getXYPerc=t.getHref=t.elemHasFixedParent=t.getNearestMatchingParent=t.elemHasParentTags=void 0,t.elemHasParentTags=function(e,t){if(!e)return!1;const s=t.map((e=>e.toUpperCase()));let n=e,i=!1;for(;n;){if(s.includes(n.tagName)){i=!0;break}n=n.parentElement}return i},t.getNearestMatchingParent=function(e,t){if(!e)return null;const s=t.map((e=>e.toUpperCase()));let n=e,i=null;for(;n;){if(s.includes(n.tagName)){i=n;break}n=n.parentElement}return i},t.elemHasFixedParent=function(e){if(!e)return!1;let t=e,s=!1;for(;t;){if("fixed"===getComputedStyle(t).position){s=!0;break}t=t.parentElement}return s},t.getHref=function(e){let t=e;for(;t;){if("A"===t.tagName)return t.href;if("AREA"===t.tagName)return t.href;t=t.parentElement}},t.getXYPerc=function(e,t,s){const n=e.getBoundingClientRect(),i=t-n.left-window.scrollX,o=s-n.top-window.scrollY;return[Math.round(i/n.width*100),Math.round(o/n.height*100)]},t.getCssSelector=function(e){const t=[];let n=e;for(;n;){if(n.id){const e="#"+s(n.id);if(1===document.querySelectorAll(e).length){t.unshift(e);break}}if(n&&"tagName"in n&&n.parentElement){const e=Array.from(n.parentElement.children),s="HEAD"===n.tagName||"BODY"===n.tagName||"HTML"===n.tagName,i=e.some((e=>n!==e&&e.tagName===n.tagName)),o=!s&&i;t.unshift(`${n.tagName.toLowerCase()}${o?`:nth-child(${e.indexOf(n)+1})`:""}`)}n=n.parentElement}return t.join(">")},t.debounce=function(e,t=3e3){let s;return(...n)=>{clearTimeout(s),s=setTimeout((()=>{e.apply(this,n)}),t)}},t.urlHasDownloadExtension=function(e,t){try{const s=new URL(e);return t.some((e=>s.pathname.endsWith(`.${e}`)))}catch(e){return!1}},t.cssEscape=s}},t={};!function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}(920)})();5003d6b76 -->
  
    

<div id="ad-header" class="ad-container ad-size-billboard" style="min-height: 70px;"></div>
<script>
wbq.push(function renderAdWidget() {
  var config = {};
  config.widgetId = 'e0f099b5-c080-475f-a611-a445003d6b76';
  window.TMZ.defineAdSlot(
    'ad-header',
    '',
    'billboard',
    {"tile":"header"},
    config
  );
});
</script>


  
<script>
// app_version=3.15.0, device_view=desktop, viewer_country=ES, ajax=false
// benchmark=165ms, etag=a7916e1cf1a1170f3cbc6e4222ae1936, timestamp=1706722523, timestamp_iso=2024-01-31T17:35:23.743068Z
wbq.push(function loadWidget() {
  window.TMZ.dispatch(window.TMZ.actions.loadWidget(
    {"_schema":"pbj:tmz:curator:node:ad-widget:1-0-0","_id":"e0f099b5-c080-475f-a611-a445003d6b76","status":"published","etag":"49e44958bb787acc1722059901434094","created_at":"1555088913165343","updated_at":"1705613194632521","title":"ad :: desktop :: news :: header","show_border":false,"show_header":true,"ad_size":"billboard","dfp_cust_params":{"tile":"header"}},
    {"_schema":"pbj:triniti:common::render-context:1-0-1","cache_enabled":true,"cache_expiry":320,"platform":"web","device_view":"desktop","viewer_country":"ES","promotion_slot":"desktop-categories-header","section":"header","booleans":{"is_staff":false}},
    null,
    []
  ));
});
</script>

    
  <!-- end: tmz:ad-widget:e0f099b5-c080-475f-a611-a445003d6b76 -->
<!-- start: tmz:ad-widget:4ff6fe59-f754-4dd8-8932-cae8721d220f -->
  
    

<script>
wbq.push(function renderAdWidget() {
  var config = {"do_not_write_div":"true"};
  config.widgetId = '4ff6fe59-f754-4dd8-8932-cae8721d220f';
  window.TMZ.defineAdSlot(
    'ad-skin',
    '',
    'skin',
    {"tile":"skin"},
    config
  );
});
</script>


  
<script>
// app_version=3.15.0, device_view=desktop, viewer_country=ES, ajax=false
// benchmark=165ms, etag=a7916e1cf1a1170f3cbc6e4222ae1936, timestamp=1706722523, timestamp_iso=2024-01-31T17:35:23.743068Z
wbq.push(function loadWidget() {
  window.TMZ.dispatch(window.TMZ.actions.loadWidget(
    {"_schema":"pbj:tmz:curator:node:ad-widget:1-0-0","_id":"4ff6fe59-f754-4dd8-8932-cae8721d220f","status":"published","etag":"9d461d9806d8727129af2600e813458a","created_at":"1555093168607216","updated_at":"1608325399184964","title":"ad :: skin","show_border":false,"show_header":true,"ad_size":"skin","dfp_cust_params":{"tile":"skin"},"tags":{"do_not_write_div":"true"}},
    {"_schema":"pbj:triniti:common::render-context:1-0-1","cache_enabled":true,"cache_expiry":320,"platform":"web","device_view":"desktop","viewer_country":"ES","promotion_slot":"desktop-categories-header","section":"header","booleans":{"is_staff":false}},
    null,
    []
  ));
});
</script>

    
  <!-- end: tmz:ad-widget:4ff6fe59-f754-4dd8-8932-cae8721d220f -->
<!-- start: tmz:ad-widget:c2105496-a85f-4f8a-9aa8-f0587ee7da6d -->
  
    

<script>
wbq.push(function renderAdWidget() {
  var config = {"do_not_write_div":"true"};
  config.widgetId = 'c2105496-a85f-4f8a-9aa8-f0587ee7da6d';
  window.TMZ.defineAdSlot(
    'ad-interstitial',
    '',
    'leaderboard',
    {"tile":"interstitial"},
    config
  );
});
</script>


  
<script>
// app_version=3.15.0, device_view=desktop, viewer_country=ES, ajax=false
// benchmark=165ms, etag=a7916e1cf1a1170f3cbc6e4222ae1936, timestamp=1706722523, timestamp_iso=2024-01-31T17:35:23.743068Z
wbq.push(function loadWidget() {
  window.TMZ.dispatch(window.TMZ.actions.loadWidget(
    {"_schema":"pbj:tmz:curator:node:ad-widget:1-0-0","_id":"c2105496-a85f-4f8a-9aa8-f0587ee7da6d","status":"published","etag":"2ed332a593e48cdaf3640eba6d48c8cb","created_at":"1555093321806405","updated_at":"1555274392897474","title":"ad :: interstitial","show_border":false,"show_header":true,"ad_size":"leaderboard","dfp_cust_params":{"tile":"interstitial"},"tags":{"do_not_write_div":"true"}},
    {"_schema":"pbj:triniti:common::render-context:1-0-1","cache_enabled":true,"cache_expiry":320,"platform":"web","device_view":"desktop","viewer_country":"ES","promotion_slot":"desktop-categories-header","section":"header","booleans":{"is_staff":false}},
    null,
    []
  ));
});
</script>

    
  <!-- end: tmz:ad-widget:c2105496-a85f-4f8a-9aa8-f0587ee7da6d -->
<!-- start: tmz:ad-widget:cc1545b2-ab69-4f54-aca0-5b0175b85d78 -->
  
    

<script>
wbq.push(function renderAdWidget() {
  var config = {"do_not_write_div":"true","refresh_interval":"30000"};
  config.widgetId = 'cc1545b2-ab69-4f54-aca0-5b0175b85d78';
  window.TMZ.defineAdSlot(
    'ad-gallery-corner',
    '',
    'medium_rectangle',
    {"tile":"gallery-corner"},
    config
  );
});
</script>


  
<script>
// app_version=3.15.0, device_view=desktop, viewer_country=ES, ajax=false
// benchmark=165ms, etag=a7916e1cf1a1170f3cbc6e4222ae1936, timestamp=1706722523, timestamp_iso=2024-01-31T17:35:23.743068Z
wbq.push(function loadWidget() {
  window.TMZ.dispatch(window.TMZ.actions.loadWidget(
    {"_schema":"pbj:tmz:curator:node:ad-widget:1-0-0","_id":"cc1545b2-ab69-4f54-aca0-5b0175b85d78","status":"published","etag":"1b043a345c977b3640691abd908f897a","created_at":"1555090284143011","updated_at":"1705613192082016","title":"ad :: desktop :: photos :: gallery-corner","show_border":false,"show_header":true,"ad_size":"medium_rectangle","dfp_cust_params":{"tile":"gallery-corner"},"tags":{"do_not_write_div":"true","refresh_interval":"30000"}},
    {"_schema":"pbj:triniti:common::render-context:1-0-1","cache_enabled":true,"cache_expiry":320,"platform":"web","device_view":"desktop","viewer_country":"ES","promotion_slot":"desktop-categories-header","section":"header","booleans":{"is_staff":false}},
    null,
    []
  ));
});
</script>

    
  <!-- end: tmz:ad-widget:cc1545b2-ab69-4f54-aca0-5b0175b85d78 -->

<!-- end: promotion-slot desktop-categories-header -->

      <header id="header" class="header ">
        <a href="#main" class="skip-link visually-hidden visually-hidden-focusable">Skip to main content</a>
        <div class="header__fixed-container">
          <div class="masthead">
            <ul class="masthead-social">
  <li class="masthead-social__item masthead-social__item--facebook">
    <a aria-label="TMZ on Facebook" class="masthead-social__link masthead-social__link--facebook js-track-link" href="https://www.facebook.com/TMZ" target="_blank" rel="noopener noreferrer" data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;facebook&quot;}">
      <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <title>Facebook</title>
        <path d="M9.009 7.652H6.4v4.174h2.609V24h5.043V11.826h3.478l.348-4h-3.826v-2.26c0-1.044.174-1.392 1.218-1.392h2.608V0H14.4c-3.652 0-5.391 1.565-5.391 4.696v2.956z"/>
      </svg>
    </a>
  </li>
  <li class="masthead-social__item masthead-social__item--twitter">
    <a aria-label="TMZ on Twitter" class="masthead-social__link masthead-social__link--twitter js-track-link" href="https://twitter.com/TMZ" target="_blank" rel="noopener noreferrer" data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;twitter&quot;}">
      <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <title>Twitter</title>
        <path d="M24 5.195c-.878.44-1.756.585-2.78.732 1.024-.586 1.756-1.61 2.195-2.634a7.883 7.883 0 0 1-3.074 1.17C19.463 3.585 18.146 3 16.683 3c-3.22 0-5.561 2.927-4.83 5.854-4.097-.147-7.755-2.05-10.097-4.976-1.317 2.195-.732 4.976 1.464 6.44-.879 0-1.61-.294-2.196-.586 0 2.195 1.61 4.39 3.952 4.829-.732.146-1.464.293-2.196.146.586 1.903 2.488 3.366 4.537 3.366-2.049 1.61-4.683 2.342-7.317 2.049 2.195 1.317 4.83 2.195 7.463 2.195 9.074 0 14.342-7.61 13.903-14.341 1.17-1.025 2.049-1.903 2.634-2.78z"/>
      </svg>
    </a>
  </li>
  <li class="masthead-social__item masthead-social__item--youtube">
    <a aria-label="TMZ on Youtube" class="masthead-social__link masthead-social__link--youtube js-track-link" href="https://www.youtube.com/user/TMZ" target="_blank" rel="noopener noreferrer" data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;youtube&quot;}">
      <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
        <title>Youtube</title>
        <path d="M23.39 6.577c.512 1.841.492 5.678.492 5.678s0 3.817-.492 5.658a2.97 2.97 0 0 1-2.105 2.073c-1.869.485-9.344.485-9.344.485s-7.456 0-9.344-.504a2.97 2.97 0 0 1-2.105-2.074C0 16.072 0 12.235 0 12.235s0-3.817.492-5.658a3.03 3.03 0 0 1 2.105-2.093C4.466 4 11.94 4 11.94 4s7.475 0 9.344.504a2.97 2.97 0 0 1 2.105 2.073zM9.56 15.762l6.217-3.527L9.561 8.71v7.053z"/>
      </svg>
    </a>
  </li>
  <li class="masthead-social__item masthead-social__item--instagram">
    <a aria-label="TMZ on Instagram" class="masthead-social__link masthead-social__link--instagram js-track-link" href="https://www.instagram.com/tmz_tv/" target="_blank" rel="noopener noreferrer" data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;instagram&quot;}">
      <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
        <title>Instagram</title>
        <path d="M12 0c3.26 0 3.667.012 4.947.072 1.277.059 2.148.261 2.913.558a5.847 5.847 0 0 1 2.126 1.384A5.89 5.89 0 0 1 23.37 4.14c.296.764.498 1.636.558 2.913C23.985 8.333 24 8.74 24 12s-.012 3.667-.072 4.947c-.059 1.277-.262 2.148-.558 2.913a5.86 5.86 0 0 1-1.384 2.126 5.898 5.898 0 0 1-2.126 1.384c-.765.296-1.636.498-2.913.558-1.28.057-1.687.072-4.947.072s-3.667-.012-4.947-.072c-1.277-.059-2.147-.262-2.913-.558a5.868 5.868 0 0 1-2.126-1.384A5.885 5.885 0 0 1 .63 19.86c-.297-.765-.498-1.636-.558-2.913C.015 15.667 0 15.26 0 12s.012-3.667.072-4.947C.131 5.775.333 4.905.63 4.14a5.855 5.855 0 0 1 1.384-2.126A5.876 5.876 0 0 1 4.14.63C4.905.333 5.775.132 7.053.072 8.333.015 8.74 0 12 0zm4.85 2.231c-1.265-.055-1.647-.071-4.895-.101-3.209 0-3.584.015-4.859.06-1.17.06-1.801.255-2.221.421-.569.209-.96.479-1.379.898-.421.421-.69.811-.9 1.381-.165.42-.359 1.064-.42 2.234-.045 1.275-.061 1.665-.061 4.861 0 3.195.016 3.584.061 4.844.061 1.17.255 1.815.42 2.235.21.556.479.961.9 1.38.419.42.81.675 1.379.899.42.165 1.065.36 2.236.421 1.273.059 1.648.074 4.859.074 3.21 0 3.585-.013 4.859-.07 1.17-.053 1.815-.249 2.235-.413a3.744 3.744 0 0 0 1.38-.896c.42-.422.675-.82.899-1.382.165-.422.36-1.057.421-2.227.059-1.265.074-1.646.074-4.85 0-3.204-.013-3.584-.07-4.85-.053-1.17-.249-1.805-.413-2.227a3.707 3.707 0 0 0-.896-1.381 3.727 3.727 0 0 0-1.382-.896c-.422-.166-1.057-.36-2.227-.415zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 1 1 0-12.324zM12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
      </svg>
    </a>
  </li>
</ul><!--/.masthead-social-->
            
<div class="masthead-tip">
  <a class="masthead-tip__btn masthead-tip__btn--default js-track-link " href="https://www.tmz.com/pages/tips/" data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;got-a-tip&quot;}" aria-label="Got a Tip?">Got <span>A Tip?</span></a>
  <a class="masthead-tip__contact js-track-link" href="https://www.tmz.com/pages/tips/" data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;email-or-call&quot;}">Email Or Call (888) 847-9869</a>
</div><!--/.masthead-tip-->
            <button
  class="masthead__btn masthead__btn--nav js__btn--nav-toggle"
  id="masthead-nav-open-btn"
  type="button"
  data-turbolinks-permanent
  aria-label="Menu"
>
  <svg xmlns="http://www.w3.org/2000/svg" role="img" width="21" height="21" viewBox="0 0 80 80">
    <path fill="#fff" d="M80 22.9H0V9.5h80v13.4zm0 10.3H0v13.5h80V33.2zm0 23.9H0v13.4h80V57.1z"/>
  </svg>
</button>
<button
  class="masthead__btn masthead__btn--search js__btn--search-toggle"
  id="masthead-search-open-btn"
  type="button"
  data-turbolinks-permanent
  aria-label="Search"
>
  <svg role="img" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 80 80">
    <path fill="#fff" d="M80 69 61.8 51c3.3-5.1 5.2-11.2 5.2-17.8C67 14.9 52 0 33.5 0S0 14.9 0 33.3c0 18.3 15 33.3 33.5 33.3 6.3 0 12.1-1.7 17.1-4.7L69 80l11-11zM12.5 33.3c0-11.5 9.4-20.9 21-20.9s21 9.4 21 20.9c0 11.5-9.4 20.9-21 20.9s-21-9.4-21-20.9z"/>
  </svg>
</button><!--/.masthead_buttons -->
            
      <a aria-labelledby="logo-title" class="masthead-logo js-track-link" href="https://www.tmz.com/" data-context="{&quot;section&quot;:&quot;head&quot;,&quot;name&quot;:&quot;tmz-logo&quot;}">
            <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="300" height="122" viewBox="0 0 300 122">
          <title id="logo-title">TMZ</title>
          <path fill="#cf1100" d="M129.91 0a4.11 4.11 0 0 1 0 8.22H97.65l.018.058c-.223 0-14.53-1.408-15.112 11.06v88.607c0 7.106-7.537 13.94-14.643 13.94h-1.702c-7.106 0-14.747-6.834-14.747-13.94V20.273l-.016.002C51.563 6.793 36.54 8.278 36.312 8.278l.018-.057H4.11A4.11 4.11 0 0 1 4.11 0h125.8zm71.72 24.135c7.105 0 12.865 5.761 12.865 12.868v70.771c0 7.106-4.688 13.94-11.793 13.94h-3.082c-7.105 0-12.963-5.707-12.828-13.94l-.014-28.885c.015-4.773-1.35-7.502-5.59-7.502-3.685 0-4.766 2.326-6.095 4.273l-3.01 5.967-17.748 35.18c-2.74 4.907-6.473 5.625-8.676 4.524-.074-.037-.14-.086-.209-.13-1.126-.333-2.495-1.646-4.342-4.394 0 0-18.684-35.19-22.485-41.778-3.802-6.587-12.416-3.778-12.416 4.78v35.807a6.099 6.099 0 1 1-12.195 0v-78.59c0-6.01 2.527-11.42 7.274-14.058 4.653-2.586 15.683-5.183 21.41 5.456l20.358 39.353c1.83 3.2 5.367 9.367 6.442 11.114 1.768 2.874 6.773 9.746 11.123 1.54 3.525-6.65 8.125-15.513 10.841-20.761l13.43-26.896a13.539 13.539 0 0 1 1.722-2.644c2.281-3.599 6.288-5.995 10.864-5.995h4.154zm94.583 89c2.09 0 3.787 1.86 3.787 4.156 0 2.295-1.696 4.155-3.787 4.155h-54.595c-7.053-.026-15.416.293-17.846-2.949-4.44-5.922.5-15.233 2.317-18.867 1.023-2.047 2.257-4.495 3.269-6.503l25.592-55.685.11-1.155v-.078a4.734 4.734 0 0 0-3.839-4.568h-24.63c-2.09 0-3.786-1.86-3.786-4.155s1.696-4.155 3.787-4.155h61.58c2.09 0 3.787 1.86 3.787 4.155 0 .464-.086.902-.214 1.319.005.01.026.02.023.031-.007.023-.04.09-.081.178-.12.33-.279.635-.467.918-1.742 3.364-7.118 13.44-8.497 16.02 0 0-20.588 44.921-22.764 49.573-2.177 4.651-3.917 10.51-3.025 12.59.892 2.082 2.08 4.981 8.694 4.981.44 0 .845.015 1.228.04h29.357z"/>
        </svg>
      </a><!--/.masthead-logo-->
              <!--/.masthead-locale-->
            <div class="masthead-search">
  <form id="masthead-search-form" class="masthead-search__form" action="/search/" method="get">
    <label for="masthead-search__input">
        <span class="visually-hidden">Search</span>
    </label>
    <input id="masthead-search__input" name="q" class="masthead-search__input" placeholder="Search" type="text" autocomplete="off">
    <button class="masthead-search__submit">
      <span class="visually-hidden">Search</span>
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <title>Search</title>
        <path d="M24.001 20.663l-5.64-4.538c1.227-2.216 1.629-4.917.93-7.624l-.014-.053C17.851 2.92 12.714-.118 7.327 1.382 2.003 2.863-1.065 8.307.344 13.775l.014.053c1.426 5.529 6.563 8.566 11.95 7.066a9.935 9.935 0 0 0 3.82-2.03l5.764 4.637 2.11-2.838zM3.908 12.727c-.942-3.649.873-7.103 4.219-8.034 3.376-.939 6.638 1.125 7.585 4.803l.015.054c.94 3.648-.874 7.102-4.22 8.033-3.376.94-6.638-1.126-7.585-4.804l-.014-.052z"/>
      </svg>
    </button>
  </form>
</div>
<!--/.masthead-search-->
            
<div id="masthead-browser-notifications" class="masthead__browser-notifications" role="button">
  <div
    id="browser-notifications-tooltip"
    class="masthead__browser-notifications-tooltip"
    data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;tooltip-link&quot;}"
    aria-hidden="true"
  >
    Turn on browser notifications
  </div>
  <div
    class="masthead__bell-icon js-track-link"
    data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;bell-icon&quot;}"
  >
    <svg role="img" width="100%" height="100%" viewBox="0 0 48 57" xmlns="http://www.w3.org/2000/svg">
       <title>Turn on browser notifications</title>
       <path fill="#fff" d="M24.3 56.7a9.3 9.3 0 009-8.2h-3.8a5.5 5.5 0 01-5.1 4.4 5.6 5.6 0 01-5.4-4.4h-3.8c.6 4.6 4.4 8 9 8.2z"/>
       <path fill="#fff" d="M24 1c4 0 7.3 3 7.7 6.8 6.9 3 11.4 9.8 11.5 17.3v10.3a3 3 0 002.9 3H48v10.1H0v-10h1.9a3 3 0 003-2.8V25.4c0-7.6 4.5-14.5 11.5-17.6A7.7 7.7 0 0124.1 1zm0 3.8a4 4 0 00-3.2 1.8 19 19 0 016.6 0c-.8-1.1-2-1.8-3.3-1.8z"/>
     </svg>
  </div>
</div>

<div id="masthead-browser-notifications-blocked" class="masthead__browser-notifications" role="link">
  <div
    id="browser-notifications-tooltip-blocked"
    class="masthead__browser-notifications-tooltip js-track-link"
    data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;tooltip-link&quot;}"
    aria-hidden="true"
  >
    You have notifications blocked. <span class="masthead__unblock-text">Unblock.</span>
  </div>
  <div
    class="masthead__bell-icon masthead__bell-icon--broken js-track-link"
    data-context="{&quot;section&quot;:&quot;header&quot;,&quot;name&quot;:&quot;broken-bell-icon&quot;}"
  >
    <svg role="img" width="100%" height="100%" viewBox="0 0 49 57" xmlns="http://www.w3.org/2000/svg">
       <title>You have notifications blocked</title>
       <path fill="#fff" d="M2.8 11.4L6 8.3l42.9 42.9-3.1 3zM24.3 56.6a9.3 9.3 0 009-8.2h-3.8a5.5 5.5 0 01-5.1 4.4 5.6 5.6 0 01-5.4-4.4h-3.8c.6 4.6 4.4 8 9 8.2z"/>
       <path fill="#fff" d="M6 18.9c-.8 2.1-1.2 4.3-1.2 6.6v10a3 3 0 01-3 3H0v10h35.5L6 18.9zM24 1c4 0 7.3 3 7.7 6.8 6.9 3 11.4 9.8 11.5 17.3v10.3a3 3 0 002.9 3H48v10h-6.3L8.1 14.8c2-3 5-5.5 8.3-7A7.7 7.7 0 0124.1 1zm0 3.8a4 4 0 00-3.2 1.8 19 19 0 016.6 0c-.8-1.1-2-1.8-3.3-1.8z"/>
     </svg>
  </div>
</div>
          </div><!--/.masthead-->
          
<nav class="nav-desktop js__nav-desktop">
  <ul class="nav-desktop__list">
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmz.com/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;news&quot;,&quot;pos&quot;:1}">news</a></li>
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmz.com/sports/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;sports&quot;,&quot;pos&quot;:2}">Sports</a></li>
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmz.com/hip-hop/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;hip-hop&quot;,&quot;pos&quot;:3}">Hip Hop</a></li>
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmz.com/watch/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;watch&quot;,&quot;pos&quot;:4}">Watch</a></li>
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmz.com/photos/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;photos&quot;,&quot;pos&quot;:5}">Photos</a></li>
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmztour.com/" target="_blank" rel="noopener" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;tours&quot;,&quot;pos&quot;:6}">Tours</a></li>
    <li class="nav-desktop__item"><a class="nav-desktop__link nav-desktop__link--default js-track-link" href="https://www.tmz.com/shop/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;shop&quot;,&quot;pos&quot;:7}">Shop</a></li>
    <li id="nav-showtimes" class="nav-desktop__item nav-desktop__item--showtimes">
      <div class="nav-desktop-showtimes nav-desktop-showtimes--default">
        <form id="showtimes-nav-root"></form>
      </div>
    </li>
  </ul><!--/.nav-desktop__list-->
</nav><!--/.nav-desktop-->
        </div><!--/.header__fixed-container-->
      </header><!--/.header-->
    </div><!--/.header-wrapper-->
    <div id="header-sticky-toggle-observed"></div>

    
<nav class="nav js__nav" id="masthead-nav" aria-hidden="true">
  <div
    class="nav__btn nav__btn--close js__btn--nav-toggle"
    id="nav-close-btn"
    role="button"
    data-turbolinks-permanent
    aria-label="Close"
  >
    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
      <path fill="#fff" d="M10.5 7.6l7-7.1 3 3-7 7 7 7-3 3-7-7-7 7-3-3 7-7-7-7 3-3z"/>
    </svg>
  </div>

  <div
    class="nav__btn nav__btn--search js__btn--search-toggle"
    id="nav-search-open-btn"
    role="button"
    data-turbolinks-permanent
    aria-label="Search"
  >
    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 80 80">
      <path fill="#fff" d="M80 69 61.8 51c3.3-5.1 5.2-11.2 5.2-17.8C67 14.9 52 0 33.5 0S0 14.9 0 33.3c0 18.3 15 33.3 33.5 33.3 6.3 0 12.1-1.7 17.1-4.7L69 80l11-11zM12.5 33.3c0-11.5 9.4-20.9 21-20.9s21 9.4 21 20.9c0 11.5-9.4 20.9-21 20.9s-21-9.4-21-20.9z"/>
    </svg>
  </div>

  <div class="nav__container">
    <a class="nav__tip-btn js__btn--tip-toggle js-track-link" href="https://www.tmz.com/pages/tips/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;tip&quot;,&quot;pos&quot;:1}">
      <strong>Got a tip?</strong>
    </a>

    <ul class="nav__list">
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmz.com/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;news&quot;,&quot;pos&quot;:2}">news</a></li>
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmz.com/sports/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;sports&quot;,&quot;pos&quot;:3}">Sports</a></li>
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmz.com/hip-hop/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;hip-hop&quot;,&quot;pos&quot;:4}">Hip Hop</a></li>
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmz.com/watch/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;watch&quot;,&quot;pos&quot;:5}">Watch</a></li>
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmz.com/photos/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;photos&quot;,&quot;pos&quot;:6}">Photos</a></li>
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmztour.com/" target="_blank" rel="noopener" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;tour&quot;,&quot;pos&quot;:7}">Tours</a></li>
      <li class="nav__item"><a class="nav__link js-track-link" href="https://www.tmz.com/shop/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;shop&quot;,&quot;pos&quot;:8}">Shop</a></li>
      <li class="nav__item nav__item-locale">
                  <a aria-label="En Español" class="nav__link nav__link-locale nav__link-locale--es js-track-link" href="https://www.tmz.com/es/" data-context="{&quot;section&quot;:&quot;nav&quot;,&quot;name&quot;:&quot;espanol&quot;,&quot;pos&quot;:8}">
            En Español
          </a>
              </li>
    </ul>

    <div class="nav__card nav__card--shows">
      <header class="nav__card-section-header nav__card-section-header--shows">
        <h3 class="nav__card-section-title nav__card-section-title--shows">
          shows
        </h3>
      </header>
      <div class="nav__card-item nav__card-item--shows">
        <a class="nav__card-link nav__card-link--shows nav__card-link--shows--tmz ratio js-track-link" href="https://www.tmz.com/watch/tmz-on-tv/" data-context="{&quot;section&quot;:&quot;nav-shows&quot;,&quot;name&quot;:&quot;tmz-on-tv&quot;,&quot;pos&quot;:1}">
          TMZ
        </a>
      </div>
      <div class="nav__card-item nav__card-item--shows">
        <a class="nav__card-link nav__card-link--shows nav__card-link--shows--tmz-live ratio js-track-link" href="https://www.tmz.com/watch/tmz-live/" data-context="{&quot;section&quot;:&quot;nav-shows&quot;,&quot;name&quot;:&quot;tmz-live&quot;,&quot;pos&quot;:2}">
          TMZ Live
        </a>
      </div>
      <div class="nav__card-item nav__card-item--shows">
        <a class="nav__card-link nav__card-link--shows nav__card-link--shows--tmz-sports ratio js-track-link" href="https://www.tmz.com/watch/tmz-sports/" data-context="{&quot;section&quot;:&quot;nav-shows&quot;,&quot;name&quot;:&quot;tmz-sports&quot;,&quot;pos&quot;:3}">
          TMZ Sports
        </a>
      </div>
    </div>

    <div class="nav__card nav__card--app">
      <header class="nav__card-section-header nav__card-section-header--app">
        <h3 class="nav__card-section-title nav__card-section-title--app">
          download the app
        </h3>
      </header>
      <div class="nav__card-item nav__card-item--app">
        <a class="nav__card-link nav__card-link--app nav__card-link--app--app-store-en ratio js-track-link" href="https://apps.apple.com/app/apple-store/id299948601?pt=201436&ct=Mobile%20Menu&mt=8" data-context="{&quot;section&quot;:&quot;nav-app-stores&quot;,&quot;name&quot;:&quot;apple-app-store&quot;,&quot;pos&quot;:1}">
          App Store
        </a>
      </div>
      <div class="nav__card-item nav__card-item--app">
        <a class="nav__card-link nav__card-link--shows nav__card-link--app--google-play-en ratio js-track-link" href="https://play.google.com/store/apps/details?id=com.rhythmnewmedia.tmz&hl=en_US&gl=US&utm_source=Mobile%20Menu" data-context="{&quot;section&quot;:&quot;nav-app-stores&quot;,&quot;name&quot;:&quot;google-play-store&quot;,&quot;pos&quot;:2}">
          Google Play
        </a>
      </div>
    </div>

    <ul class="nav__list nav__list--secondary">
          </ul>
    <footer class="nav__footer pb-8">
      <ul class="nav__footer-list pb-0 mb-0">
        <li class="nav__footer-item">
          <a class="nav__footer-link js__btn--tip-toggle js-track-link" href="https://www.tmz.com/pages/contact-us/" data-context="{&quot;section&quot;:&quot;nav-footer&quot;,&quot;name&quot;:&quot;contact&quot;,&quot;pos&quot;:1}">contact</a>
        </li>
        <li class="nav__footer-item">
          <a class="nav__footer-link js-track-link" href="https://www.linkedin.com/company/tmz/" target="_blank" data-context="{&quot;section&quot;:&quot;nav-footer&quot;,&quot;name&quot;:&quot;careers&quot;,&quot;pos&quot;:2}">careers</a>
        </li>
        <li class="nav__footer-item">
          <a class="nav__footer-link js-track-link" href="https://www.tmz.com/privacy" target="_blank" rel="noopener" data-context="{&quot;section&quot;:&quot;nav-footer&quot;,&quot;name&quot;:&quot;privacy-policy&quot;,&quot;pos&quot;:3}">Privacy Policy (New)</a>
        </li>
        <li class="nav__footer-item">
          <a class="nav__footer-link js-track-link" href="https://www.tmz.com/terms" target="_blank" rel="noopener" data-context="{&quot;section&quot;:&quot;nav-footer&quot;,&quot;name&quot;:&quot;terms-of-use&quot;,&quot;pos&quot;:4}">Terms of Use (New)</a>
        </li>
        <li class="nav__footer-item">
          <a class="nav__footer-link js-track-link" href="https://www.tmz.com/privacy" target="_blank" rel="noopener" data-context="{&quot;section&quot;:&quot;nav-footer&quot;,&quot;name&quot;:&quot;ad-choices&quot;,&quot;pos&quot;:5}">ad choices</a>
        </li>
        <li class="nav__footer-item">
          <a class="nav__footer-link js-track-link" href="https://privacy.tmz.com/main/web/main" target="_blank" rel="noopener" data-context="{&quot;section&quot;:&quot;nav-footer&quot;,&quot;name&quot;:&quot;do-not-sell&quot;,&quot;pos&quot;:6}">Your Privacy Choices</a>
        </li>
      </ul>
      <br />
      <div class="nav__footer-copyright">&copy; 2024 EHM productions, inc. all rights reserved.</div>
    </footer>
  </div><!--/.nav__container-->
</nav>

<script>
wbq.push(function manageHamburgerMenu() {
  var $nav = $('.js__nav');
  var $body = $('body');
  var $navCloseBtn = $('#nav-close-btn');
  var $navToggleBtn = $('.js__btn--nav-toggle');

  function lockNavFocus() {
    $navCloseBtn.focus();
    document.addEventListener('focusin', focusNavCloseBtn);
  }

  function focusNavCloseBtn(event) {
    if (!$.contains(document.getElementById('masthead-nav'), event.target)) {
      $navCloseBtn.focus();
    }
  }

  function unlockNavFocus() {
    document.removeEventListener('focusin', focusNavCloseBtn);
    $navToggleBtn.focus();
  }

  // hamburger menu to toggle mobile nav, full screen hit area beneath
  // mobile nav to act as toggle target
  $navToggleBtn.click(function (event) {
    $nav.toggleClass('nav--is-open');
    if ($nav.hasClass('nav--is-open')) {
      if (DEVICE_VIEW === 'desktop') {
        lockNavFocus();
      }

      window.TMZ.utils.setAccessibilityFocusTrap('masthead-nav');
      $nav.css('visibility', 'visible');
      if (DEVICE_VIEW !== 'desktop') {
         $body.css('overflow', 'hidden');
      }

    } else {
      window.TMZ.utils.removeAccessibilityFocusTrap();
      if (DEVICE_VIEW === 'desktop') {
        unlockNavFocus();
        $navToggleBtn.focus();
      }
      setTimeout(function () {
        $nav.css('visibility', 'hidden');
        if (DEVICE_VIEW !== 'desktop') {
           $body.css('overflow', '');
        }
      }, 300);
    }

    event.preventDefault();
  });
});
</script>
<!--/.nav-->
    <nav id="tip" class="tip js__tip">
  <button id="tip__btn-close" class="tip__btn-close js__btn--tip-toggle" aria-label="Close" type="button">✕</button>
  <ul class="tip__list">
    <li class="tip__item"><a class="tip__link js-track-link" href="tel://18888479869" data-context="{&quot;section&quot;:&quot;tip&quot;,&quot;name&quot;:&quot;call&quot;,&quot;pos&quot;:1}">Give Us<br class="tip__text-break"> a Call</a></li>
    <li class="tip__item"><a class="tip__link js-track-link" href="https://www.tmz.com/pages/tips/" data-context="{&quot;section&quot;:&quot;tip&quot;,&quot;name&quot;:&quot;email&quot;,&quot;pos&quot;:2}">Shoot Us<br class="tip__text-break"> an Email</a></li>
    <li class="tip__item"><a class="tip__link js-track-link" href="sms://+18888479869" data-context="{&quot;section&quot;:&quot;tip&quot;,&quot;name&quot;:&quot;text&quot;,&quot;pos&quot;:3}">Send Us<br class="tip__text-break"> a Text</a></li>
  </ul>
</nav>

<script>
wbq.push(function manageTipMenu() {
  var $tip = $('.js__tip');
  var $body = $('body');
  var $tipCloseBtn = $('#tip__btn-close');
  var $tipToggleBtn = $('.js__btn--tip-toggle');
  var $nav = $('.js__nav');

  function lockTipFocus() {
    $tipCloseBtn.focus();
    document.addEventListener('focusin', focusTipCloseBtn);
  }

  function focusTipCloseBtn(event) {
    if (!$.contains(document.getElementById('tip'), event.target)) {
      $tipCloseBtn.focus();
    }
  }

  function unlockTipFocus() {
    document.removeEventListener('focusin', focusTipCloseBtn);
  }

  // toggle tip full screen mobile menu
  $tipToggleBtn.click(function (event) {
    $tip.toggleClass('tip--is-open');
    if ($tip.hasClass('tip--is-open')) {
      if (DEVICE_VIEW === 'desktop') {
        lockTipFocus();
      }
      window.TMZ.utils.setAccessibilityFocusTrap('tip');
      $tip.css('visibility', 'visible');
      if (DEVICE_VIEW !== 'desktop') {
        $body.css('overflow', 'hidden');
      }
      setTimeout(function() {
        $nav.css('visibility', 'hidden');
      }, 300);

    } else {
      window.TMZ.utils.removeAccessibilityFocusTrap();
      if (DEVICE_VIEW === 'desktop') {
        unlockTipFocus();
        $tipToggleBtn.focus();
      }
      setTimeout(function() {
        $tip.css('visibility', 'hidden');
        if (DEVICE_VIEW !== 'desktop') {
           $body.css('overflow', '');
        }
      }, 300);
    }

    // Hide nav
    if ($nav.hasClass('nav--is-open')) {
      setTimeout(function () {
        $nav.removeClass('nav--is-open');
      }, 300);
    }
    event.preventDefault();
  });
});
</script>
<!--/.tip-->
  
  

      <div id="jumbotron-top" class="jumbotron jumbotron-top">
      <!-- start: promotion-slot desktop-categories-jumbotron-top -->
<!-- end: promotion-slot desktop-categories-jumbotron-top -->
    </div><!--/#jumbotron-top-->
  
      <div class="main-wrapper main-wrapper--categories main-wrapper--has-sidebar">
        <main id="main" class="main">
        <article class="page page--listings">
      <header class="page__header">
        <h1 class="page__header-title">
          <span class="page__title">Music</span>
        </h1>
      </header><!--/.page__header-->
    </article>

                      <!-- start: tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75 -->
  
    <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75" class="curator-widget curator-widget-main curator-blogroll-widget curator-blogroll-widget-main" data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75">
            <section class="blogroll">
    
                                        
                    
      
      <article id="blogroll-b17cbb6f-34f9-477c-8b2f-f9cdfda3043a" class="article article--"
      >
                  <div class="article__channel--hip-hop"></div>
        
                  <div class="article__theme--hip-hop"></div>
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/candace-owens-ice-spice-fart-lyrics-hotnewhiphop/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:1}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Candace Owens</span>
                                  <span class="article__hf2 text-uppercase h1">Ice Spice&#039;s &#039;Fart&#039;</span>
                                  <span class="article__hf3 text-uppercase h1">Is Aiding America&#039;s Downfall</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/candace-owens-ice-spice-fart-lyrics-hotnewhiphop/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fcandace-owens-ice-spice-fart-lyrics-hotnewhiphop%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:1}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/candace-owens-ice-spice-fart-lyrics-hotnewhiphop/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fcandace-owens-ice-spice-fart-lyrics-hotnewhiphop%2F%3Fadid%3Dshare-tw&text=Candace%20Owens%20Says%20Ice%20Spice%20%27Fart%27%20Single%20Sets%20American%20Society%20Back&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:1}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 9:15 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-d7f1299f3afe232ce79ec10d06693a44"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20240131_728bb68d2ae141aaa7b0858b7f26f898"
            data-container-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/72/4by3/2024/01/31/728bb68d2ae141aaa7b0858b7f26f898_md.png"
          loading="lazy"
          alt="Candace Owens Ice Spice"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty Composite</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20240131_728bb68d2ae141aaa7b0858b7f26f898","status":"published","etag":"cb4becbb3504397769afcb88bae7e252","created_at":"1706718776600170","updated_at":"1706718790563292","title":"013124 Candace Owens Ice Spice - getty comp.png","mime_type":"image\/png","file_size":"1440694","file_etag":"535f84a5aded595bf350f7e954cb5361","credit":"Getty Composite","linked_refs":["tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"],"gallery_seq":0,"alt_text":"Candace Owens Ice Spice","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-d7f1299f3afe232ce79ec10d06693a44-->

    <section
              id="cb-1ac3210b5a78bf2f1252d737560d37a6"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/candace-owens/"><strong>Candace Owens</strong></a> is blaming <a href="https://www.tmz.com/people/ice-spice/"><strong>Ice Spice</strong></a> for inducing stupidity in the United States ... a reaction made after her ears got crop-dusted by the superstar rapper's new "Fart" song!!!</p>
      </section><!--/#cb-1ac3210b5a78bf2f1252d737560d37a6-->

    <section
              id="cb-903cea56f9c5984119416388fcdb16bf"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>On the latest episode of <a href="https://podcasts.apple.com/us/podcast/candace-owens/id1556687660" rel="noopener noreferrer" target="_blank"><strong>her podcast</strong></a>, Candace moonlighted as a music journalist tackling Ice's new single and rated the track with a proverbial p-u ... nothing but stink!!!</p>
      </section><!--/#cb-903cea56f9c5984119416388fcdb16bf-->

    <section
              id="cb-0ef55d86bd545d0ccc123da7750278ab"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/43/16by9/2024/01/31/43183881504046bc825368cf86334975_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:143eb9d4-a500-4e92-9c68-7cbc809de7e2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TOUGH CRITIC</span>
        </footer>
                    <span class="media-credit video-block__media-credit">Candace Owens Podcast</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Candace Owens",
        "description": "Candace Owens",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/43/4by3/2024/01/31/43183881504046bc825368cf86334975_xl.jpg",
            "https://imagez.tmz.com/image/43/1by1/2024/01/31/43183881504046bc825368cf86334975_xl.jpg",
            "https://imagez.tmz.com/image/43/16by9/2024/01/31/43183881504046bc825368cf86334975_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-31T17:15:18Z",
                  "duration": "PT1M21S",
                "uploadDate": "2024-01-31T16:30:03Z",
        "dateCreated": "2024-01-31T16:30:03Z",
        "dateModified": "2024-01-31T17:15:25Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/e5/o/2024/01/31/e5b3d63c71064f41a1a50b218ed74dd7.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-31-013124-candace-owens-1768409-051/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-image-holder');
            var footer = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046'), {
                        onObserve: function() {
              document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-143eb9d4-a500-4e92-9c68-7cbc809de7e2-39093046-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-31-013124-candace-owens-1768409-051/',
                  null,
                  'tmz:video:143eb9d4-a500-4e92-9c68-7cbc809de7e2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-0ef55d86bd545d0ccc123da7750278ab-->

    <section
              id="cb-8be367b643b7f6ceca5dde200c57f57f"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Ice keeps it simple on the new track produced by <a href="https://www.tmz.com/2024/01/17/ice-spice-sued-in-ha-mood-copyright-infringement-d-chamberz/"><strong>her longtime producer RIOTUSA</strong></a>, rapping on the chorus ... "Think you the sh**, bitch? You not even the fart/I be goin' hard/I'm breakin' they hearts...Grrah!!!" -- a little too simple for Candace's intellect.</p>
      </section><!--/#cb-8be367b643b7f6ceca5dde200c57f57f-->

    <section
              id="cb-c2dc60a617b5a616de4341acb1fde21e"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-c2dc60a617b5a616de4341acb1fde21e-1310658095-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-c2dc60a617b5a616de4341acb1fde21e-1310658095-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-c2dc60a617b5a616de4341acb1fde21e-1310658095-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-c2dc60a617b5a616de4341acb1fde21e-1310658095-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('Ou7c8Sg9YVg', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-c2dc60a617b5a616de4341acb1fde21e-1310658095-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-c2dc60a617b5a616de4341acb1fde21e-->

    <section
              id="cb-ea34e538fed0767cfc09d2c1e9814ac3"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Candace didn't miss the window to <a href="https://www.tmz.com/2020/09/07/cardi-b-candace-owens-feud-over-politics-wap-and-black-culture/"><strong>throw more shade</strong></a> at <strong>Cardi B</strong> and <strong>Megan Thee Stallion</strong> for making "WAP" back in 2020 ... still an all-time low in her book.</p>
      </section><!--/#cb-ea34e538fed0767cfc09d2c1e9814ac3-->

    <section
              id="cb-7c623fe05891e80914ec7e5356cbf2ed"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The political pundit also hammered <em><strong>HotNewHipHop</strong></em><strong>'s </strong>review of Ice's "Think U The Sh**" -- for its glossy review, where they describe the song as a "bold declaration" to "establish dominance" and something about her "personal prowess."</p>
      </section><!--/#cb-7c623fe05891e80914ec7e5356cbf2ed-->

    <section
              id="cb-af8b6124e56aeacda1cd4267bd42695f"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-51542eb1-8425-4a7a-a1bd-cfd11cfd7979"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2023/02/28/ice-spice-hot-shots-photos/"
        data-node-ref="tmz:gallery:51542eb1-8425-4a7a-a1bd-cfd11cfd7979"
                data-poster-image-ref="tmz:image-asset:image_png_20230228_66c946f070c046a8b3f82d1f33dd7f18"
        data-start-at-poster                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/66/4by3/2023/02/28/66c946f070c046a8b3f82d1f33dd7f18_md.png"
            alt="Ice Spice Hot Shots"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Ice Spice Hot Shots</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
              </a>
    </div>
        </section><!--/#cb-af8b6124e56aeacda1cd4267bd42695f-->

    <section
              id="cb-c1f86691abc77ffc8814b0ab5c907b91"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Plenty of heavy-handed huff ... but one could say the same for CO's declaration Ice's lyrics are ripping apart society's fabric.</p>
      </section><!--/#cb-c1f86691abc77ffc8814b0ab5c907b91-->

    <section
              id="cb-a84aed614b644e8fd16009e9df0fb243"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>It's a fun song for TikTok ... <a rel="noopener noreferrer" target="_blank" href="https://www.tmz.com/2024/01/31/tiktok-universal-music-group-contract-taylor-swift-drake/"><strong>at least for the time being</strong></a>.</p>
      </section><!--/#cb-a84aed614b644e8fd16009e9df0fb243-->

    <section
              id="cb-58e44cf139e380deeccd04d732da5e6f"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Now that Candace is in the business of music reviews, we're looking forward to her recap of <a href="https://www.tmz.com/2024/01/29/nicki-minaj-megan-thee-stallion-big-foot-diss-track-dud-instagram/"><strong>Nicki Minaj's "Big Foot"</strong></a> versus Meg's "Hiss." Gonna be a doozy!!!</p>
      </section><!--/#cb-58e44cf139e380deeccd04d732da5e6f-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/candace-owens-ice-spice-fart-lyrics-hotnewhiphop/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fcandace-owens-ice-spice-fart-lyrics-hotnewhiphop%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:1}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/candace-owens-ice-spice-fart-lyrics-hotnewhiphop/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fcandace-owens-ice-spice-fart-lyrics-hotnewhiphop%2F%3Fadid%3Dshare-tw&text=Candace%20Owens%20Says%20Ice%20Spice%20%27Fart%27%20Single%20Sets%20American%20Society%20Back&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:1}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/29/megan-thee-stallion-hiss-megans-law-nicki-line-blasted-kanka-family-victim/"
                        data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:1}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/44/16by9/2024/01/29/44a55d5cb0ae49f2aa24b34cf3ebdc28_xs.png" loading="lazy" alt="Megan Thee Stallion&#039;s &#039;Megan&#039;s Law&#039; &#039;Hiss&#039; Line Blasted by Kanka Family">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Megan Thee Stallion&#039;s &#039;Megan&#039;s Law&#039; &#039;Hiss&#039; Line Blasted by Kanka Family
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/28/megan-thee-stallion-twerk-victoria-monet-nicki-minaj-feud-bigfoot-hiss-beef/"
                        data-node-ref="tmz:article:b17cbb6f-34f9-477c-8b2f-f9cdfda3043a"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:1}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/32/16by9/2024/01/28/328d8f52a48e4841a73093d7ce3405c9_xs.jpg" loading="lazy" alt="Megan Thee Stallion Twerks on Victoria Monét Amid Nicki Minaj Feud">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Megan Thee Stallion Twerks on Victoria Monét Amid Nicki Minaj Feud
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/ice-spice/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Ice Spice
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/candace-owens/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Candace Owens
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/hip-hop/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Hip Hop
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/politix/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Politix
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/controversial-s-t/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Controversial S#!T
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/fights-and-feuds/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:1}"
                  >
                    Fights &amp; Feuds
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-1" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-1/blogroll.html"></div>
      
              <div id="ad-blogroll1" class="ad-blogroll1"></div>
                                              
                    
      
      <article id="blogroll-7e93660d-e039-4130-971c-53b6b30e5caa" class="article"
      >
                  <div class="article__channel--sports"></div>
        
                  <div class="article__theme--sports"></div>
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/travis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:2}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Travis Kelce</span>
                                  <span class="article__hf2 text-uppercase h1">Thanks For Joining Chiefs Kingdom, Taylor Swift!!!</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/travis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftravis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:2}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">2</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/travis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftravis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom%2F%3Fadid%3Dshare-tw&text=Travis%20Kelce%20Thanks%20Taylor%20Swift%20For%20Joining%20Chiefs%20Kingdom&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:2}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 9:11 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-7545852ecc677bf247a683066b631459"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  canvas-block-is-first "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/a0/16by9/2024/01/31/a00f989e17824c7997a6686bf4ac8179_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:588c7d04-e605-4317-9953-0b78ee1d8725"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">WELCOME TO THE FAM</span>
        </footer>
                    <span class="media-credit video-block__media-credit">New Heights / Wave Sports + Entertainment</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Travis Kelce, Taylor",
        "description": "Travis Kelce, Taylor",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/a0/4by3/2024/01/31/a00f989e17824c7997a6686bf4ac8179_xl.jpg",
            "https://imagez.tmz.com/image/a0/1by1/2024/01/31/a00f989e17824c7997a6686bf4ac8179_xl.jpg",
            "https://imagez.tmz.com/image/a0/16by9/2024/01/31/a00f989e17824c7997a6686bf4ac8179_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-31T17:11:17Z",
                  "duration": "PT0M56S",
                "uploadDate": "2024-01-31T16:04:24Z",
        "dateCreated": "2024-01-31T16:04:24Z",
        "dateModified": "2024-01-31T17:11:24Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/0e/o/2024/01/31/0e0e95025699429e965f60565eb3c640.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-31-013124-travis-jason-kelce-taylor-1768362-492/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-image-holder');
            var footer = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229'), {
                        onObserve: function() {
              document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-588c7d04-e605-4317-9953-0b78ee1d8725-1026119229-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-31-013124-travis-jason-kelce-taylor-1768362-492/',
                  null,
                  'tmz:video:588c7d04-e605-4317-9953-0b78ee1d8725',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-7545852ecc677bf247a683066b631459-->

    <section
              id="cb-366b984da99d9867d1d0518be7be7c7b"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/taylor-swift/"><strong>Taylor Swift</strong></a> got a special shoutout from her boo on Wednesday ... with <a href="https://www.tmz.com/people/travis-kelce/"><strong>Travis Kelce</strong></a> giving a playful "thank you" to the pop superstar for jumping on the Chiefs bandwagon just in time for their Super Bowl run.</p>
      </section><!--/#cb-366b984da99d9867d1d0518be7be7c7b-->

    <section
              id="cb-6f9dce1b50a3805f90dbd6104ebca029"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The "Cruel Summer" crooner has been Kelce's biggest supporter since they first started dating last year ... making numerous appearances at home and away matchups, including every game during the Chiefs' current playoff run.</p>
      </section><!--/#cb-6f9dce1b50a3805f90dbd6104ebca029-->

    <section
              id="cb-5bdf7bc6cfef4e857df7e5d3ed25d7cf"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-343b1deb-6d5c-41dc-877f-072d4e9ed627"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2024/01/29/taylor-swift-travis-kelce-after-chiefs-win/"
        data-node-ref="tmz:gallery:343b1deb-6d5c-41dc-877f-072d4e9ed627"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/6a/4by3/2024/01/29/6a686f28b21c42f9b72ba4f3ef4525a9_md.jpg"
            alt="Taylor Swift Kisses Travis Kelce After Chiefs Win"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Taylor &amp; Travis Kiss After Chiefs Win</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-5bdf7bc6cfef4e857df7e5d3ed25d7cf-->

    <section
              id="cb-f3f26bbdeabad7de1e5686ad0388df0f"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The love hasn't gone unnoticed in the Kelce fam ... with <a href="https://www.tmz.com/people/jason-kelce/"><strong>Jason Kelce</strong></a> jokingly congratulating Swift on reaching the biggest sporting event of the year so early in her fandom.</p>
      </section><!--/#cb-f3f26bbdeabad7de1e5686ad0388df0f-->

    <section
              id="cb-81231549423c5aad00012cf5cb5ecc25"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>"Shout out to the newest members of the Chiefs Kingdom," Jason said on the 'New Heights' podcast. "Taylor Swift who has officially reached the Super Bowl in her rookie year."</p>
      </section><!--/#cb-81231549423c5aad00012cf5cb5ecc25-->

    <section
              id="cb-b0e72ea5f6cce9c04d37320e7f984ea8"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Travis played along ... adding, "Shout out to Tay! Thanks for joining the team!"</p>
      </section><!--/#cb-b0e72ea5f6cce9c04d37320e7f984ea8-->

    <section
              id="cb-9c96387d0176b52e33dcc5189683e651"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-9c96387d0176b52e33dcc5189683e651-1693052510-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-9c96387d0176b52e33dcc5189683e651-1693052510-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-9c96387d0176b52e33dcc5189683e651-1693052510-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-9c96387d0176b52e33dcc5189683e651-1693052510-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('nqbQqLDDNcY', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-9c96387d0176b52e33dcc5189683e651-1693052510-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-9c96387d0176b52e33dcc5189683e651-->

    <section
              id="cb-cbfced5d18e5d1b4491f54b4624ab8ac"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Of course, the Swifties have followed in her footsteps ... tuning in to every Chiefs game to get a glimpse of "mother" catching games from her usual suite seats.</p>
      </section><!--/#cb-cbfced5d18e5d1b4491f54b4624ab8ac-->

    <section
              id="cb-89f598ad029cd0765c45b3092fc90a4d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The Traylor craze has left a huge impact on Kelce's<a href="https://www.tmz.com/2023/09/25/travis-kelce-taylor-swift-jersey-sales-sky-rocket-surge-chiefs-nfl/"><strong> jersey sales</strong></a> and <a href="https://www.tmz.com/2023/10/02/taylor-swift-travis-kelce-nfl-chiefs-ratings-down/"><strong>TV ratings</strong></a> ... further solidifying the defending Super Bowl champs as the must-see game every week.</p>
      </section><!--/#cb-89f598ad029cd0765c45b3092fc90a4d-->

    <section
              id="cb-7d31106b721f8f0e1ac4e867558fd711"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-8c26dce2-d119-4a74-a4b1-aac68bf70ecd"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2024/01/15/taylor-swift-and-travis-kelce-together/"
        data-node-ref="tmz:gallery:8c26dce2-d119-4a74-a4b1-aac68bf70ecd"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/d3/4by3/2024/01/15/d3d242cf1e9c49d5a6f511ba842559cf_md.jpg"
            alt="Taylor Swift And Travis Kelce Together"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Taylor And Travis Together</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty/Twitter/TMZ/Instagram</span>
              </a>
    </div>
        </section><!--/#cb-7d31106b721f8f0e1ac4e867558fd711-->

    <section
              id="cb-2f9f72c4ab8bdb3190bade6c86e36938"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Worth noting -- Swift used to show love for her Philadelphia Eagles ... something Travis mentioned when addressing the musician's interaction with his head coach <a href="https://www.tmz.com/people/andy-reid/"><strong>Andy Reid</strong></a> after Sunday's AFC Championship Game.</p>
      </section><!--/#cb-2f9f72c4ab8bdb3190bade6c86e36938-->

    <section
              id="cb-f6943631f4eac9c9b5e6e001fb137d4d"
        class="canvas-block canvas-block-blogroll canvas-twitter-tweet-block canvas-twitter-tweet-block-blogroll canvas-twitter-tweet-block--default  "
        >
        <div id="cb-f6943631f4eac9c9b5e6e001fb137d4d-619015607-target" class="d-flex justify-content-center">
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Andy Reid finds Taylor Swift in the crowd and points her way. Fun moment between the two. <a href="https://t.co/5TtK5Gso55">pic.twitter.com/5TtK5Gso55</a></p>&mdash; Jeff Darlington (@JeffDarlington) <a href="https://twitter.com/JeffDarlington/status/1751747828773249375?ref_src=twsrc^tfw">January 28, 2024</a>
              <a href="https://twitter.com/JeffDarlington" rel="noopener" target="_blank">@JeffDarlington</a>
          </blockquote>
  </div>

<script id="cb-f6943631f4eac9c9b5e6e001fb137d4d-619015607-rejected" type="text/x-consent-element">
  <p><strong>Twitter Tweet Unavailable</strong></p>
</script>

<script>
wbq.push(function renderTwitterTweetBlock() {
  var response = 'unknown';
  var target = document.getElementById('cb-f6943631f4eac9c9b5e6e001fb137d4d-619015607-target');

  function accept() {
    if (response === 'accepted') {
      return;
    }

    window.TMZ.utils.loadTwitterJs().then(function (twttr) {
      target.innerHTML = '';
      twttr.widgets.createTweet('1751747828773249375', target, {
        cards: '',
        conversation: '',
      });
    }).catch(reject);

    // there is no "accepted" html for twitter block, the above js does it all
    response = 'accepted';
  }

  function reject() {
    if (response === 'rejected') {
      return;
    }

    target.innerHTML = document.getElementById('cb-f6943631f4eac9c9b5e6e001fb137d4d-619015607-rejected').innerHTML;
    response = 'rejected';
  }

  watchConsent(function (canUse) {
    canUse('twitter') ? accept() : reject();
  });
});
</script>
      </section><!--/#cb-f6943631f4eac9c9b5e6e001fb137d4d-->

    <section
              id="cb-d0b8bf43bc9f4f5771d1c91917afe1a6"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>As previously reported, Swift is planning to <a href="https://www.tmz.com/2024/01/29/taylor-swift-will-not-perform-super-bowl-lviii-halftime-show-usher/"><strong>jet from her 'Eras' tour gig</strong></a> overseas to get to Vegas in time for Travis' big night ... and we're sure the broadcast will be sure to make her presence known.</p>
      </section><!--/#cb-d0b8bf43bc9f4f5771d1c91917afe1a6-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/travis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftravis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:2}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/travis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftravis-kelce-thanks-taylor-swift-for-joining-chiefs-kingdom%2F%3Fadid%3Dshare-tw&text=Travis%20Kelce%20Thanks%20Taylor%20Swift%20For%20Joining%20Chiefs%20Kingdom&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:2}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/31/travis-kelce-addresses-justin-tucker-pregame-spat-dont-be-a-fing-d/"
                        data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:2}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/6f/16by9/2024/01/31/6fab99ef5f8d4696ba5fd98196d9ebff_xs.jpg" loading="lazy" alt="Travis Kelce Addresses Justin Tucker Pregame Spat, Don&#039;t Be a &#039;F***ing D***!&#039;">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Travis Kelce Addresses Justin Tucker Pregame Spat, Don&#039;t Be a &#039;F***ing D***!&#039;
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/30/travis-kelce-taylor-swift-skipping-not-attend-grammys-super-bowl/"
                        data-node-ref="tmz:article:7e93660d-e039-4130-971c-53b6b30e5caa"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:2}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/1b/16by9/2024/01/30/1b881bf212a34198bfe448bd2261252b_xs.jpg" loading="lazy" alt="Travis Kelce Will Not Attend Grammys For Taylor Swift&#039;s Big Night">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Travis Kelce Will Not Attend Grammys For Taylor Swift&#039;s Big Night
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/travis-kelce/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Travis Kelce
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/taylor-swift/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Taylor Swift
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/jason-kelce/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Jason Kelce
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/kansas-city-chiefs/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Kansas City Chiefs
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/podcasts/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Podcasts
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/dating/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Dating
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/tmzsports/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    TMZ Sports
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/football/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    Football
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/nfl/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:2}"
                  >
                    NFL
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-2" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-2/blogroll.html"></div>
      
              <div id="ad-blogroll2" class="ad-blogroll2"></div>
                                              
                    
      
      <article id="blogroll-f0974504-7de6-410f-a0ad-31d8b26b9568" class="article"
      >
                  <div class="article__channel--hip-hop"></div>
        
                  <div class="article__theme--hip-hop"></div>
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/tiktok-universal-music-group-contract-taylor-swift-drake/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:3}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">TikTok</span>
                                  <span class="article__hf2 text-titlecase h2">UMG Is Greedy AF ...</span>
                                  <span class="article__hf3 text-uppercase h1">That&#039;s Why They&#039;re Pulling Our Music!!!</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                              <li>
                  <div class="media-swipe media-swipe--blogroll">Breaking News</div>
                </li>
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/tiktok-universal-music-group-contract-taylor-swift-drake/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftiktok-universal-music-group-contract-taylor-swift-drake%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:3}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">28</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/tiktok-universal-music-group-contract-taylor-swift-drake/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftiktok-universal-music-group-contract-taylor-swift-drake%2F%3Fadid%3Dshare-tw&text=TikTok%20Accuses%20Universal%20Music%20Group%20Of%20Corporate%20Greed%20Amid%20Threat%20To%20Pull%20Songs&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:3}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 8:48 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-9ee06b33a0f2ee04e275172f54c0117e"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_96e53c0cf66a4acdab7edd87cfe26ce0"
            data-container-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/96/4by3/2024/01/31/96e53c0cf66a4acdab7edd87cfe26ce0_md.jpg"
          loading="lazy"
          alt="universal music group primary alt"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty Composite</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_96e53c0cf66a4acdab7edd87cfe26ce0","status":"published","etag":"14b6473c433ece5d16ca9ce10070debc","created_at":"1706716743190343","updated_at":"1706716753936889","title":"013124 universal music group primary alt_getty composite.jpg","mime_type":"image\/jpeg","file_size":"505940","file_etag":"3669b2f3b93372764b40c7c8c3de38c3","credit":"Getty Composite","linked_refs":["tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"],"gallery_seq":0,"alt_text":"universal music group primary alt","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-9ee06b33a0f2ee04e275172f54c0117e-->

    <section
              id="cb-f866e1910ad260788f9d7b08bf819bea"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>TikTok and Universal Music Group are in the final hours of an epic standoff that will see all the label’s music removed from the world’s biggest app … and neither side is budging.</p>
      </section><!--/#cb-f866e1910ad260788f9d7b08bf819bea-->

    <section
              id="cb-a632204a4ef89519623e08fb00d4628a"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>UMG let off a lengthy <a href="https://dam.tmz.com/document/d4/o/2024/01/31/d4952b58e9aa43a098ad2fe9f607c5f3.pdf" rel="noopener noreferrer" target="_blank"><strong>statement</strong></a> on Tuesday defending their stance on their waning contract -- which is set to expire at midnight -- accusing TikTok of sitting back and getting filthy rich off their product without "paying its fair share."</p>
      </section><!--/#cb-a632204a4ef89519623e08fb00d4628a-->

    <section
              id="cb-e6acbc832b98ce62e7980c27879c8b99"
        class="canvas-block canvas-block-blogroll canvas-document-block canvas-document-block-blogroll canvas-document-block--default  "
        >
          <div class="document-block flex-column">
    <a
      class="media-link document-block__link js-track-link"
      href="https://dam.tmz.com/document/d4/o/2024/01/31/d4952b58e9aa43a098ad2fe9f607c5f3.pdf"
      data-node-ref="tmz:document-asset:document_pdf_20240131_d4952b58e9aa43a098ad2fe9f607c5f3"
      data-container-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"      target="_blank"
      rel="noopener noreferrer"
    >
            
                  
      <img width="728" height="546" class="img-fluid img-aspect-auto" src="https://imagez.tmz.com/image/a2/4by3/2024/01/31/a2752ab806664962bce00d5058885bab_md.jpg" loading="lazy">
      <div class="media-icon--overlay document-block__media-icon--overlay">
        <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
          <title>Document</title>
          <path fill="#fff" d="M12 22A10 10 0 0 1 2 12 10 10 0 0 1 12 2v.7a9.3 9.3 0 1 0 0 18.6 9.3 9.3 0 0 0 0-18.6V2a10 10 0 0 1 10 10 10 10 0 0 1-10 10zm4-13v8H8V7h6l2 2zm-3-1v2h2l-2-2zm2 3h-3V8H9v8h6v-5z"/>
        </svg>
        <span class="media-icon-label document-block__media-icon-label">Launch Doc</span>
      </div>
              <footer class="media-footer document-block__media-footer">
          <span class="media-launch-text document-block__media-launch-text">UMG Says TikTok Gotta Pay Up</span>
          <span class="media-cta document-block__media-cta">
            Launch Doc
            <span class="media-footer-icon document-block__icon">
              <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>Document</title>
                <path fill="#fff" d="M12 22A10 10 0 0 1 2 12 10 10 0 0 1 12 2v.7a9.3 9.3 0 1 0 0 18.6 9.3 9.3 0 0 0 0-18.6V2a10 10 0 0 1 10 10 10 10 0 0 1-10 10zm4-13v8H8V7h6l2 2zm-3-1v2h2l-2-2zm2 3h-3V8H9v8h6v-5z"/>
              </svg>
            </span>
          </span>
        </footer>
                    <span class="media-credit document-block__media-credit">UMG</span>
          </a>
  </div>
      </section><!--/#cb-e6acbc832b98ce62e7980c27879c8b99-->

    <section
              id="cb-2d78e8ad568abaffbb03ad7b6f713888"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>That's why they're now taking the position of yanking their artists' music off the platform ... basically, they feel TikTok needs to pay more cash to license their tunes.</p>
      </section><!--/#cb-2d78e8ad568abaffbb03ad7b6f713888-->

    <section
              id="cb-75ac0f811cee145b9b41962ae736081c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Universal also argued they’ve applied every potential countermeasure available to ensure their artists are protected from AI impersonation and online security … something they say TikTok has failed to do for the music industry and its fans overall.</p>
      </section><!--/#cb-75ac0f811cee145b9b41962ae736081c-->

    <section
              id="cb-b7de8a14249a21de8e801b53e1be0484"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-6abe1487-7d58-42dc-a91c-e2b0ff3705dd"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2023/06/23/ice-spice-nicki-minaj-barbie-world/"
        data-node-ref="tmz:gallery:6abe1487-7d58-42dc-a91c-e2b0ff3705dd"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/2c/4by3/2023/06/23/2c0c3ba228f64af580e1184f617ecaec_md.jpg"
            alt="Ice Spice &amp; Nicki Minaj Dolled Up For Barbie World"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Barbie World Babes</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
              </a>
    </div>
        </section><!--/#cb-b7de8a14249a21de8e801b53e1be0484-->

    <section
              id="cb-cca8cc10e4a4bf7119afe5fe67efcbeb"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The Big 3 label has a huge roster ... <strong>Taylor Swift</strong>,<strong> Drake</strong>,<strong> Nicki Minaj</strong>,<strong> Ariana Grande</strong>,<strong> Bad Bunny</strong>,<strong> Ice Spice</strong>,<strong> Rosalía</strong> -- and dozens of other superstar names will soon be affected, but UMG says they have a greater responsibility to uphold.</p>
      </section><!--/#cb-cca8cc10e4a4bf7119afe5fe67efcbeb-->

    <section
              id="cb-c3b91a550440ce850bfd1a6b833ff951"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>TikTok snapped back at UMG, pinpointing the issue on classic corporate GREED … they accused UMG of spinning a “false narrative” and noted they have healthy 'artist-first' agreements with every other label and publisher.</p>
      </section><!--/#cb-c3b91a550440ce850bfd1a6b833ff951-->

    <section
              id="cb-7a3f9477ad32fc5efb4ae587a05eddd6"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_d528eb25a2f24cf3995ee9570e0cd087"
            data-container-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/d5/4by3/2024/01/31/d528eb25a2f24cf3995ee9570e0cd087_md.jpg"
          loading="lazy"
          alt=""
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_d528eb25a2f24cf3995ee9570e0cd087","status":"published","etag":"c83c5c6ae22a1d7be9638aef82b39d29","created_at":"1706716820400176","title":"russ twitter rant 1.jpg","mime_type":"image\/jpeg","file_size":"466209","file_etag":"cbe53f299df987821748f996c5031b13","gallery_seq":0,"width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-7a3f9477ad32fc5efb4ae587a05eddd6-->

    <section
              id="cb-a81083e8107b1f769218c371a6180b6c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>UMG has been monitoring its books closely ... earlier in January, <a href="https://variety.com/2024/music/news/universal-music-group-lay-off-hundreds-1235870243/amp/" rel="noopener noreferrer" target="_blank"><strong>Variety reported</strong></a> that UMG was preparing to fire hundreds of employees -- primarily targeting the recorded music division. So, on its face, it appears they're tightening their belt on all fronts.</p>
      </section><!--/#cb-a81083e8107b1f769218c371a6180b6c-->

    <section
              id="cb-9f49ea67eb79e273a30a0ea737e4aea1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Russ, the rapper, has been speaking out on industry politics since going fully independent a couple of years ago and he's weighing in here as well ... saying both parties have too much stake in the game to drop the ball at midnight. He thinks UMG's crusade to protect the artists is simply code language to appease their own bottom line.</p>
      </section><!--/#cb-9f49ea67eb79e273a30a0ea737e4aea1-->

    <section
              id="cb-1e4611d6c73b9d5bd1f53d84c287ab1a"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-72739c3d-dea8-434b-b03b-410fc3c52001"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2023/12/30/taylor-at-arrowhead-where-it-all-began/"
        data-node-ref="tmz:gallery:72739c3d-dea8-434b-b03b-410fc3c52001"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/ba/4by3/2023/12/30/baac10fdeaf848b4837091caaac41f2b_md.jpg"
            alt="Taylor at Arrowhead, Where It All Began"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Taylor Swift Dominates Arrowhead Stadium</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-1e4611d6c73b9d5bd1f53d84c287ab1a-->

    <section
              id="cb-07ba1ba17b10bac8df1fc05e7d54d83c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Both sides should act fast, or risk Swifties and Munchkins soon using TikTok for a different reason ... to post their meltdowns and tantrums for lack of Tay Tay's music.</p>
      </section><!--/#cb-07ba1ba17b10bac8df1fc05e7d54d83c-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/tiktok-universal-music-group-contract-taylor-swift-drake/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftiktok-universal-music-group-contract-taylor-swift-drake%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:3}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/tiktok-universal-music-group-contract-taylor-swift-drake/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftiktok-universal-music-group-contract-taylor-swift-drake%2F%3Fadid%3Dshare-tw&text=TikTok%20Accuses%20Universal%20Music%20Group%20Of%20Corporate%20Greed%20Amid%20Threat%20To%20Pull%20Songs&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:3}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2023/09/14/sexyy-red-billboard-tiktok-chart-skeeyee/"
                        data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:3}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/52/16by9/2023/09/14/52020781d06348fca5a765beaee7f35c_xs.jpg" loading="lazy" alt="Sexyy Red Earns First-Ever No. 1 On Billboard&#039;s New TikTok Chart">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Sexyy Red Earns First-Ever No. 1 On Billboard&#039;s New TikTok Chart
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2023/09/06/ai-drake-the-weeknd-collab-eligible-grammy-recording-academy-ceo/"
                        data-node-ref="tmz:article:f0974504-7de6-410f-a0ad-31d8b26b9568"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:3}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/f9/16by9/2023/09/06/f9e49152debe48b7ad5186fdd34bd3a9_xs.jpg" loading="lazy" alt="AI Drake and The Weeknd No Longer Grammy Eligible, Says Recording Academy CEO">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            AI Drake and The Weeknd No Longer Grammy Eligible, Says Recording Academy CEO
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/money/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:3}"
                  >
                    Money
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/artificial-intelligence/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:3}"
                  >
                    Artificial Intelligence
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/tiktok/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:3}"
                  >
                    TikTok
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/hip-hop/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:3}"
                  >
                    Hip Hop
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:3}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/fights-and-feuds/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:3}"
                  >
                    Fights &amp; Feuds
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-3" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-3/blogroll.html"></div>
      
              <div id="ad-blogroll3" class="ad-blogroll3"></div>
                                              
                    
      
      <article id="blogroll-04259260-032c-4fdd-9c02-09ce8bf0c1c9" class="article"
      >
                  <div class="article__channel--espanol"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/justin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:4}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Justin y Hailey Bieber</span>
                                  <span class="article__hf2 text-uppercase h1">Cariñosos en una cita de noche...</span>
                                  <span class="article__hf3 text-titlecase h2">Somos lindos!!!</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/justin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:4}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">1</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/justin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos%2F%3Fadid%3Dshare-tw&text=Justin%20Bieber%20sube%20una%20foto%20besando%20a%20su%20mujer%20Hailey%20durante%20una%20cita%3A%20%22Somos%20lindos%22&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:4}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 5:30 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-b8e0adaad1649dedfaa779cdadec5b55"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_dcbf9f85d439432a96c48eebdf51531e"
            data-container-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/dc/4by3/2024/01/31/dcbf9f85d439432a96c48eebdf51531e_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_dcbf9f85d439432a96c48eebdf51531e","status":"published","etag":"b640dc43f297c979937091b98cea8ade","created_at":"1706708621853170","updated_at":"1706708762556664","title":"justin and hailey bieber insta 3.jpg","mime_type":"image\/jpeg","file_size":"582341","file_etag":"11176081c57704b9e0c387cc72d5a545","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-b8e0adaad1649dedfaa779cdadec5b55-->

    <section
              id="cb-ef46182c29a821600b9558719f6572a5"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/justin-bieber/"><strong>Justin Bieber</strong></a><strong> </strong>lleva más de 5 años casado y todavía se siente muy enamorado de su esposa <a href="https://www.tmz.com/people/hailey-bieber/"><strong>Hailey</strong></a>, antes de salir de fiesta en un lugar de moda en Beverly Hills.</p>
      </section><!--/#cb-ef46182c29a821600b9558719f6572a5-->

    <section
              id="cb-083e36def05bbc04c4429b430d4ddcf3"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>El cantante le dio un cariñoso beso a Hailey durante una salida al restaurante Funke, y la señora Bieber se acurrucó en el hombro de su marido en otras fotos.</p>
      </section><!--/#cb-083e36def05bbc04c4429b430d4ddcf3-->

    <section
              id="cb-d91e0e77022c3241acc271c0666d42a0"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_8b366708d6e149cc95f69efcc17a605a"
            data-container-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/8b/4by3/2024/01/31/8b366708d6e149cc95f69efcc17a605a_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_8b366708d6e149cc95f69efcc17a605a","status":"published","etag":"7f9a4b3ab0b49aabeab4f177a0e8a9aa","created_at":"1706708622790505","updated_at":"1706708762435132","title":"justin and hailey bieber insta 1.jpg","mime_type":"image\/jpeg","file_size":"516726","file_etag":"f3f7cf133095344a491083bf6499d242","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-d91e0e77022c3241acc271c0666d42a0-->

    <section
              id="cb-5fe456d7be16d56537fd63a4919c38fb"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Justin y Hailey, al igual que muchas otras parejas de alto perfil, han estado plagados de rumores de divorcio en los últimos años, pero su acogedora cita nocturna el pasado fin de semana debería silenciar esos rumores.</p>
      </section><!--/#cb-5fe456d7be16d56537fd63a4919c38fb-->

    <section
              id="cb-4786bbf9d6d84f403f60ae125d1e1252"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ investiga</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2082159760-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-4786bbf9d6d84f403f60ae125d1e1252-->

    <section
              id="cb-44fda14cde32123688e4131c83362e71"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>El cantante de "Yummy" dejó que las fotos hablaran por sí mismas, ni siquiera escribió un comentario, mientras que la fundadora de Rhode Beauty mantuvo vivo el romance en los comentarios, diciendo: "Somos lindos".</p>
      </section><!--/#cb-44fda14cde32123688e4131c83362e71-->

    <section
              id="cb-2dc3086f652d2c8e86531a102d578f1d"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-843ac30e-1745-52ca-9c04-67f4b0e7b73e"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2018/07/08/justin-bieber-and-hailey-baldwin-happy-couple/"
        data-node-ref="tmz:gallery:843ac30e-1745-52ca-9c04-67f4b0e7b73e"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/16/4by3/2020/12/04/16581864861a4680ab7213849067d88c_md.png"
            alt="Justin and Hailey Bieber -- Crazy in Love"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Justin y Hailey -- Enamoradísimos</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
              </a>
    </div>
        </section><!--/#cb-2dc3086f652d2c8e86531a102d578f1d-->

    <section
              id="cb-95f3598998552483a5822b53fb451535"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>La sección de comentarios también estaba a reventar con los fans de la famosa pareja. Muchos decían que son la pareja que todos quieren ser.</p>
      </section><!--/#cb-95f3598998552483a5822b53fb451535-->

    <section
              id="cb-ad2390f20f5493b56dc2d32f5c4fc498"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_c7851fdf70f8486a88d8ba733b75aade"
            data-container-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/c7/4by3/2024/01/31/c7851fdf70f8486a88d8ba733b75aade_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Backgrid</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_c7851fdf70f8486a88d8ba733b75aade","status":"published","etag":"09b5225e6491658b006dc477e11a631b","created_at":"1706708622143824","updated_at":"1706708762526732","title":"justin and hailey bieber bg 1.jpg","mime_type":"image\/jpeg","file_size":"720955","file_etag":"9c64738c48c8dd7030c97903ece14fb3","credit":"Backgrid","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-ad2390f20f5493b56dc2d32f5c4fc498-->

    <section
              id="cb-563ee53700802710b78bdea28fce0441"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>En general, los fans están encantados de ver que su relación va viento en popa. A finales de este año, celebrarán su sexto aniversario. Incluso estaban tomados de la mano como un par de estudiantes de secundaria mientras caminaban afuera del restaurante.</p>
      </section><!--/#cb-563ee53700802710b78bdea28fce0441-->

    <section
              id="cb-7abf334452a638fecedd58197d5958c8"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_eaa2227f04644aa8ae50783342e8d4d0"
            data-container-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/ea/4by3/2024/01/31/eaa2227f04644aa8ae50783342e8d4d0_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_eaa2227f04644aa8ae50783342e8d4d0","status":"published","etag":"c26ac5770d88367ae0cc60e250e17eb0","created_at":"1706708621012004","updated_at":"1706708762590612","title":"justin and hailey bieber insta 2.jpg","mime_type":"image\/jpeg","file_size":"487180","file_etag":"9c9a71d8a41a55e720f9db89f22b08db","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-7abf334452a638fecedd58197d5958c8-->

    <section
              id="cb-00b5076e758d8278ec5beef58628a9a1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>La pareja <a href="https://www.tmz.com/2020/02/12/justin-bieber-talks-marriage-hailey-02-arena-changes/"><strong>ha sido abierta</strong></a> sobre los altos y bajos de su relación desde que se casaron, y Hailey incluso admitió que sus luchas le hicieron darse cuenta de que iba a pelear por su matrimonio "no importa qué".</p>
      </section><!--/#cb-00b5076e758d8278ec5beef58628a9a1-->

    <section
              id="cb-93ad38cd0f33f2c0a81c2eb81d231dbc"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>La fase de luna de miel ha terminado, pero por suerte, ¡a ellos no les llegó ese memo!</p>
      </section><!--/#cb-93ad38cd0f33f2c0a81c2eb81d231dbc-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/justin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:4}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/justin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-sube-una-foto-besando-a-su-mujer-hailey-durante-una-cita-somos-lindos%2F%3Fadid%3Dshare-tw&text=Justin%20Bieber%20sube%20una%20foto%20besando%20a%20su%20mujer%20Hailey%20durante%20una%20cita%3A%20%22Somos%20lindos%22&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:04259260-032c-4fdd-9c02-09ce8bf0c1c9"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:4}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/justin-bieber/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Justin Bieber
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/hailey-bieber/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Hailey Bieber
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/relationships/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Relationships
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/couples/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Couples
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/instagram/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Instagram
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/famous-food/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:4}"
                  >
                    Famous Food
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-4" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-4/blogroll.html"></div>
      
              <div id="ad-blogroll4" class="ad-blogroll4"></div>
                                              
                    
      
      <article id="blogroll-2b87b973-84c2-4fb9-a418-3f38695a29df" class="article"
      >
                  <div class="article__channel--espanol"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/los-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:5}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Círculo íntimo de Trump</span>
                                  <span class="article__hf2 text-uppercase h1">Promete librar una &quot;guerra santa&quot; contra T-Swift</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/los-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Flos-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:5}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">5</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/los-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Flos-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo%2F%3Fadid%3Dshare-tw&text=Los%20asesores%20de%20Trump%20prometen%20librar%20una%20%22guerra%20santa%22%20contra%20Taylor%20Swift%20en%20medio%20de%20sus%20posibles%20respaldos&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:5}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 5:57 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-7b5b939b0c92202cdd6403ac4a827cf6"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_4f3369603d0a473593b78712341bec2a"
            data-container-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/4f/4by3/2024/01/31/4f3369603d0a473593b78712341bec2a_md.jpg"
          loading="lazy"
          alt=""
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_4f3369603d0a473593b78712341bec2a","status":"published","etag":"343a173e8340c71081e5c654dae190be","created_at":"1706708746568787","updated_at":"1706708809221831","title":"donald trump and taylor swift getty 1.jpg","mime_type":"image\/jpeg","file_size":"704574","file_etag":"f17223294c396b5f0e5dd4a51b9dd968","credit":"Getty","linked_refs":["tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"],"gallery_seq":0,"width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-7b5b939b0c92202cdd6403ac4a827cf6-->

    <section
              id="cb-8eaf452e4fe129dec5128e768a7a5f26"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/donald-trump/"><strong>Donald Trump</strong></a> y sus aliados más cercanos están aparentemente preparándose para ir a la batalla contra <a href="https://www.tmz.com/people/taylor-swift/"><strong>Taylor Swift </strong></a>y cualquier demócrata que podría terminar recibiendo su apoyo, esto de acuerdo con un nuevo informe.</p>
      </section><!--/#cb-8eaf452e4fe129dec5128e768a7a5f26-->

    <section
              id="cb-fe6e6caf6eb990211c799b72962fa8b1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.rollingstone.com/politics/politics-features/donald-trump-more-popular-taylor-swift-maga-biden-1234956829/"><strong>Rolling Stone </strong></a>dio a conocer algunos detalles tras bambalinas de lo que se está discutiendo últimamente en el círculo de Trump, en particular en lo que respecta a Taylor Swift y la (probable) posibilidad de que apoye a <a href="https://www.tmz.com/people/joe-biden/"><strong>Joe Biden</strong></a> a medida que nos acercamos a las elecciones del 2024.</p>
      </section><!--/#cb-fe6e6caf6eb990211c799b72962fa8b1-->

    <section
              id="cb-32a1cf4d72b3139bf27a0b8e9d8ec4f1"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-83987b30-0c56-4fa7-bb48-e042687dd155"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2023/03/04/trump-on-the-campaign-trail/"
        data-node-ref="tmz:gallery:83987b30-0c56-4fa7-bb48-e042687dd155"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/53/4by3/2023/03/04/53d1b00064464ff5a63e4bdf967102cc_md.jpg"
            alt="Donald Trump on The Campaign Trail"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Trump en campaña</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-32a1cf4d72b3139bf27a0b8e9d8ec4f1-->

    <section
              id="cb-05e8ca15194f40151d7032382779ece4"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Por lo que están escuchando, Donald Trump y compañía se están quejando de la posibilidad de que Taylor utilice su enorme influencia para apoyar la candidatura de Biden, tanto es así, de hecho, que Rolling Stones informa que algunos en el equipo de Trump están declarándole una "guerra santa" a la cantante, vaya a saber uno qué diablos eso significa.</p>
      </section><!--/#cb-05e8ca15194f40151d7032382779ece4-->

    <section
              id="cb-26c078a83d04f8930c32045137c79534"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>El medio dice que el tema de Taylor ha aparecido bastante en la órbita de Trump en los últimos meses, sobre todo porque se ha vuelto cada vez más popular por <a href="https://www.tmz.com/2024/01/29/travis-kelce-le-dice-claramente-te-quiero-a-taylor-swift-segun-revela-un-nuevo-audio/"><strong>su vínculo con la NFL últimamente</strong></a>. Cuanto más sube en el inconsciente colectivo (zeitgeist), más humo echa Trump y compañía de rabia.</p>
      </section><!--/#cb-26c078a83d04f8930c32045137c79534-->

    <section
              id="cb-4ff7b642163bb6b0ce89a3f401280bae"
        class="canvas-block canvas-block-blogroll canvas-twitter-tweet-block canvas-twitter-tweet-block-blogroll canvas-twitter-tweet-block--default  "
        >
        <div id="cb-4ff7b642163bb6b0ce89a3f401280bae-590375769-target" class="d-flex justify-content-center">
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Taylor — Thanks for your support and for speaking out at this crucial moment in our nation’s history.<br><br>Election Day is right around the corner — are you ready for it? <a href="https://t.co/eoxT07d7QB">https://t.co/eoxT07d7QB</a> <a href="https://t.co/TLHRYSjbTx">https://t.co/TLHRYSjbTx</a></p>&mdash; Joe Biden (@JoeBiden) <a href="https://twitter.com/JoeBiden/status/1313966330861809671?ref_src=twsrc^tfw">October 7, 2020</a>
              <a href="https://twitter.com/JoeBiden" rel="noopener" target="_blank">@JoeBiden</a>
          </blockquote>
  </div>

<script id="cb-4ff7b642163bb6b0ce89a3f401280bae-590375769-rejected" type="text/x-consent-element">
  <p><strong>Twitter Tweet Unavailable</strong></p>
</script>

<script>
wbq.push(function renderTwitterTweetBlock() {
  var response = 'unknown';
  var target = document.getElementById('cb-4ff7b642163bb6b0ce89a3f401280bae-590375769-target');

  function accept() {
    if (response === 'accepted') {
      return;
    }

    window.TMZ.utils.loadTwitterJs().then(function (twttr) {
      target.innerHTML = '';
      twttr.widgets.createTweet('1313966330861809671', target, {
        cards: '',
        conversation: '',
      });
    }).catch(reject);

    // there is no "accepted" html for twitter block, the above js does it all
    response = 'accepted';
  }

  function reject() {
    if (response === 'rejected') {
      return;
    }

    target.innerHTML = document.getElementById('cb-4ff7b642163bb6b0ce89a3f401280bae-590375769-rejected').innerHTML;
    response = 'rejected';
  }

  watchConsent(function (canUse) {
    canUse('twitter') ? accept() : reject();
  });
});
</script>
      </section><!--/#cb-4ff7b642163bb6b0ce89a3f401280bae-->

    <section
              id="cb-4149ce1166c6e0e4d0f4a2b806fe8501"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Rolling Stones incluso afirma que Trump le dijo recientemente a sus confidentes que era "más popular" que Taylor y que tenía una base de fans más leales que ella. El medio continúa diciendo que el expresidente anduvo diciendo que "obviamente" él debería haber sido elegido la <a href="https://www.tmz.com/2023/12/06/taylor-swift-es-nombrada-persona-del-ano-por-la-revista-time/"><strong>Persona del Año de TIME.</strong></a></p>
      </section><!--/#cb-4149ce1166c6e0e4d0f4a2b806fe8501-->

    <section
              id="cb-fb25e959d85b4682255726b64f2c1e29"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Por más descabellado que pueda parecer, ya hay pruebas de que es cierto, especialmente en el frente de la "guerra santa", porque algunos populares sustitutos de Trump han hablado de ello últimamente.</p>
      </section><!--/#cb-fb25e959d85b4682255726b64f2c1e29-->

    <section
              id="cb-7b5833b095ef43d69983446501feb91d"
        class="canvas-block canvas-block-blogroll canvas-twitter-tweet-block canvas-twitter-tweet-block-blogroll canvas-twitter-tweet-block--default  "
        >
        <div id="cb-7b5833b095ef43d69983446501feb91d-1669637766-target" class="d-flex justify-content-center">
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">After expanding some more on his Taylor Swift op theory, Jack Posobiec adds: &quot;We don’t have Taylor Swift on our side, but you know who we have? We have Kid Rock. We have Ted Nugent. We have influencers. We have all these people -- Jon Voight.&quot; <a href="https://t.co/IWIvNtYsdz">pic.twitter.com/IWIvNtYsdz</a></p>&mdash; Justin Baragona (@justinbaragona) <a href="https://twitter.com/justinbaragona/status/1752443496936382767?ref_src=twsrc^tfw">January 30, 2024</a>
              <a href="https://twitter.com/justinbaragona" rel="noopener" target="_blank">@justinbaragona</a>
          </blockquote>
  </div>

<script id="cb-7b5833b095ef43d69983446501feb91d-1669637766-rejected" type="text/x-consent-element">
  <p><strong>Twitter Tweet Unavailable</strong></p>
</script>

<script>
wbq.push(function renderTwitterTweetBlock() {
  var response = 'unknown';
  var target = document.getElementById('cb-7b5833b095ef43d69983446501feb91d-1669637766-target');

  function accept() {
    if (response === 'accepted') {
      return;
    }

    window.TMZ.utils.loadTwitterJs().then(function (twttr) {
      target.innerHTML = '';
      twttr.widgets.createTweet('1752443496936382767', target, {
        cards: '',
        conversation: '',
      });
    }).catch(reject);

    // there is no "accepted" html for twitter block, the above js does it all
    response = 'accepted';
  }

  function reject() {
    if (response === 'rejected') {
      return;
    }

    target.innerHTML = document.getElementById('cb-7b5833b095ef43d69983446501feb91d-1669637766-rejected').innerHTML;
    response = 'rejected';
  }

  watchConsent(function (canUse) {
    canUse('twitter') ? accept() : reject();
  });
});
</script>
      </section><!--/#cb-7b5833b095ef43d69983446501feb91d-->

    <section
              id="cb-aeaae81dfa241fecae42a5025500af02"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>El personaje político <strong>Jack Posobiec</strong> dijo recientemente frente a una multitud de inclinación MAGA (Make America Great Again) que su lado tenía que pelear fuego contra fuego cuando se trata del efecto Taylor, lanzando estrellas en su propio mundo de que presumiblemente podría agitar su base y llevar a las personas a las urnas por Donald Trump.</p>
      </section><!--/#cb-aeaae81dfa241fecae42a5025500af02-->

    <section
              id="cb-b6f7713206a7233d15e0b9f32569c7d5"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Algunas de las estrellas que mencionó son <a href="https://www.tmz.com/people/kid-rock/"><strong>Kid Rock</strong></a>, <a href="https://www.tmz.com/people/ted-nugent/"><strong>Ted Nugent</strong></a> y <a href="https://www.tmz.com/people/jon-voight/"><strong>Jon Voight</strong></a>, por nombrar algunos.</p>
      </section><!--/#cb-b6f7713206a7233d15e0b9f32569c7d5-->

    <section
              id="cb-ee4a6a68e8f2806dd90abf5b26c6a135"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-5ce04af5-269d-4bba-9138-b8ae8ad21fba"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2019/12/13/taylor-swift-moments-through-the-eras-photos/"
        data-node-ref="tmz:gallery:5ce04af5-269d-4bba-9138-b8ae8ad21fba"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/7e/4by3/2023/06/01/7efaaeb75c274ee5b1bf597dff447fa5_md.jpg"
            alt="Taylor Swift Moments -- Through The Eras!"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Taylor Swift y sus eras</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-ee4a6a68e8f2806dd90abf5b26c6a135-->

    <section
              id="cb-34522c30fec73d72be0623c330edb3f7"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>A primera vista, parecería que los partidarios de MAGA se sienten como si estuvieran en una lucha por sus vidas, y de acuerdo todos estos informes, ¡parecería que ven a Tay Tay como el anticristo!</p>
      </section><!--/#cb-34522c30fec73d72be0623c330edb3f7-->

    <section
              id="cb-8585b5f0756581629373d669b193d50f"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Mientras tanto, en realidad, todo lo que Taylor ha hecho, es ir a los partidos de fútbol y animar al equipo de su novio.</p>
      </section><!--/#cb-8585b5f0756581629373d669b193d50f-->

    <section
              id="cb-4786bbf9d6d84f403f60ae125d1e1252"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ investiga</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-294610774-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-4786bbf9d6d84f403f60ae125d1e1252-->

    <section
              id="cb-4a1f3b5ac75f05a9917bb43c77b4aabc"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Eso, en sí mismo, sin embargo, parece haber desatado a los fanáticos de Trump en todo el país, quienes están lanzando un poco de furia sobre la posibilidad de que Taylor se pueda involucrar en política de nuevo este año.</p>
      </section><!--/#cb-4a1f3b5ac75f05a9917bb43c77b4aabc-->

    <section
              id="cb-8a4531d051256c001b67bc64b3d1c654"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Ay, la humanidad ...</p>
      </section><!--/#cb-8a4531d051256c001b67bc64b3d1c654-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/los-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Flos-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:5}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/los-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Flos-ayudantes-de-trump-prometen-librar-una-guerra-santa-contra-taylor-swift-en-medio-de-las-conversaciones-de-apoyo%2F%3Fadid%3Dshare-tw&text=Los%20asesores%20de%20Trump%20prometen%20librar%20una%20%22guerra%20santa%22%20contra%20Taylor%20Swift%20en%20medio%20de%20sus%20posibles%20respaldos&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:2b87b973-84c2-4fb9-a418-3f38695a29df"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:5}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/donald-trump/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:5}"
                  >
                    Donald Trump
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/taylor-swift/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:5}"
                  >
                    Taylor Swift
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/2024-presidential-election/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:5}"
                  >
                    2024 Presidential Election
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/politix/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:5}"
                  >
                    Politix
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:5}"
                  >
                    Music
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-5" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-5/blogroll.html"></div>
      
              <div id="ad-blogroll5" class="ad-blogroll5"></div>
                                              
                    
      
      <article id="blogroll-9b1f46df-496c-4f55-b5ee-3cf23667d577" class="article"
      >
                  <div class="article__channel--relationships"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/justin-bieber-wife-hailey-kissing-couple/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:6}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">JUSTIN &amp; HAILEY BIEBER</span>
                                  <span class="article__hf2 text-uppercase h1">SMOOCHIN&#039; FOR DATE NIGHT ...</span>
                                  <span class="article__hf3 text-none h2">&#039;We&#039;re Cute!!!&#039;</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/justin-bieber-wife-hailey-kissing-couple/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-wife-hailey-kissing-couple%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:6}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">96</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/justin-bieber-wife-hailey-kissing-couple/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-wife-hailey-kissing-couple%2F%3Fadid%3Dshare-tw&text=Justin%20Bieber%20Locks%20Lips%20With%20Wife%20Hailey%20During%20Date%20Night%2C%20%27We%27re%20Cute%27&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:6}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 7:13 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-b8e0adaad1649dedfaa779cdadec5b55"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_dcbf9f85d439432a96c48eebdf51531e"
            data-container-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/dc/4by3/2024/01/31/dcbf9f85d439432a96c48eebdf51531e_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_dcbf9f85d439432a96c48eebdf51531e","status":"published","etag":"b640dc43f297c979937091b98cea8ade","created_at":"1706708621853170","updated_at":"1706708762556664","title":"justin and hailey bieber insta 3.jpg","mime_type":"image\/jpeg","file_size":"582341","file_etag":"11176081c57704b9e0c387cc72d5a545","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-b8e0adaad1649dedfaa779cdadec5b55-->

    <section
              id="cb-474152de472ef867baaf5af97ec2fbbd"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/justin-bieber/"><strong>Justin Bieber</strong></a>'s more than 5 years into this marriage thing, and still feeling real lovey-dovey ahead of a night out at a Bev Hills hot spot with his wife <a href="https://www.tmz.com/people/hailey-bieber/"><strong>Hailey</strong></a>.</p>
      </section><!--/#cb-474152de472ef867baaf5af97ec2fbbd-->

    <section
              id="cb-e64d9cf1457540ce7a750b836ef6477c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The singer passionately locked lips with Hailey during an outing to the much-buzzed-about restaurant Funke, and Mrs. Bieber cuddled up on her husband's shoulder in other pics.</p>
      </section><!--/#cb-e64d9cf1457540ce7a750b836ef6477c-->

    <section
              id="cb-d91e0e77022c3241acc271c0666d42a0"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_8b366708d6e149cc95f69efcc17a605a"
            data-container-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/8b/4by3/2024/01/31/8b366708d6e149cc95f69efcc17a605a_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_8b366708d6e149cc95f69efcc17a605a","status":"published","etag":"7f9a4b3ab0b49aabeab4f177a0e8a9aa","created_at":"1706708622790505","updated_at":"1706708762435132","title":"justin and hailey bieber insta 1.jpg","mime_type":"image\/jpeg","file_size":"516726","file_etag":"f3f7cf133095344a491083bf6499d242","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-d91e0e77022c3241acc271c0666d42a0-->

    <section
              id="cb-fe7d1aded51f99abf69b332799dc4198"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Justin and Hailey, like many high-profiled couples, have been plagued by divorce rumors over the years -- but their cozy date night last weekend should silence that talk.</p>
      </section><!--/#cb-fe7d1aded51f99abf69b332799dc4198-->

    <section
              id="cb-b01b9b7b4bd4f9c7f4e9d132b58670d9"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default canvas-video-block--aside "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-973185061-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-b01b9b7b4bd4f9c7f4e9d132b58670d9-->

    <section
              id="cb-23436429fbfa6e54fad7414eca7df83a"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The "Yummy" hitmaker let the pics do all the talking, opting to go captionless ... while the Rhode Beauty founder kept the romance alive in the comments, writing: "we're cute."</p>
      </section><!--/#cb-23436429fbfa6e54fad7414eca7df83a-->

    <section
              id="cb-75fd2a0c02fdadbf9dda3aa3ace0cd31"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-843ac30e-1745-52ca-9c04-67f4b0e7b73e"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2018/07/08/justin-bieber-and-hailey-baldwin-happy-couple/"
        data-node-ref="tmz:gallery:843ac30e-1745-52ca-9c04-67f4b0e7b73e"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/16/4by3/2020/12/04/16581864861a4680ab7213849067d88c_md.png"
            alt="Justin and Hailey Bieber -- Crazy in Love"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Justin and Hailey -- Crazy in Love</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
              </a>
    </div>
        </section><!--/#cb-75fd2a0c02fdadbf9dda3aa3ace0cd31-->

    <section
              id="cb-a5a261fc8233e1c6b42c9ad0f1aca072"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The comments section was also bursting at the seams with fans branding the pair "couple goals."</p>
      </section><!--/#cb-a5a261fc8233e1c6b42c9ad0f1aca072-->

    <section
              id="cb-ad2390f20f5493b56dc2d32f5c4fc498"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_c7851fdf70f8486a88d8ba733b75aade"
            data-container-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/c7/4by3/2024/01/31/c7851fdf70f8486a88d8ba733b75aade_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Backgrid</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_c7851fdf70f8486a88d8ba733b75aade","status":"published","etag":"09b5225e6491658b006dc477e11a631b","created_at":"1706708622143824","updated_at":"1706708762526732","title":"justin and hailey bieber bg 1.jpg","mime_type":"image\/jpeg","file_size":"720955","file_etag":"9c64738c48c8dd7030c97903ece14fb3","credit":"Backgrid","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-ad2390f20f5493b56dc2d32f5c4fc498-->

    <section
              id="cb-2e91c3ff103f302cf7d0327245c14c20"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>In general, fans are just thrilled to see their relationship is going strong as they'll hit their 6th anniversary later this year. Hell, they were even holding hands like a couple of high school kids as they walked out of the eatery.</p>
      </section><!--/#cb-2e91c3ff103f302cf7d0327245c14c20-->

    <section
              id="cb-7abf334452a638fecedd58197d5958c8"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_eaa2227f04644aa8ae50783342e8d4d0"
            data-container-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/ea/4by3/2024/01/31/eaa2227f04644aa8ae50783342e8d4d0_md.jpg"
          loading="lazy"
          alt="justin and hailey bieber"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_eaa2227f04644aa8ae50783342e8d4d0","status":"published","etag":"c26ac5770d88367ae0cc60e250e17eb0","created_at":"1706708621012004","updated_at":"1706708762590612","title":"justin and hailey bieber insta 2.jpg","mime_type":"image\/jpeg","file_size":"487180","file_etag":"9c9a71d8a41a55e720f9db89f22b08db","linked_refs":["tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"],"gallery_seq":0,"alt_text":"justin and hailey bieber","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-7abf334452a638fecedd58197d5958c8-->

    <section
              id="cb-fd52a92999cedc8daedf561d0718423f"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The couple's <a href="https://www.tmz.com/2020/02/12/justin-bieber-talks-marriage-hailey-02-arena-changes/"><strong>been open</strong></a> about the ups and downs of their relationship since tying the knot -- and Hailey's even admitted their struggles made her realize she'd fight for their marriage "no matter what."</p>
      </section><!--/#cb-fd52a92999cedc8daedf561d0718423f-->

    <section
              id="cb-9ca2a29a0ed5ec3475335b3c4da5e68b"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The honeymoon phase is over, but luckily ... they didn't get that memo!</p>
      </section><!--/#cb-9ca2a29a0ed5ec3475335b3c4da5e68b-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/justin-bieber-wife-hailey-kissing-couple/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-wife-hailey-kissing-couple%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:6}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/justin-bieber-wife-hailey-kissing-couple/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fjustin-bieber-wife-hailey-kissing-couple%2F%3Fadid%3Dshare-tw&text=Justin%20Bieber%20Locks%20Lips%20With%20Wife%20Hailey%20During%20Date%20Night%2C%20%27We%27re%20Cute%27&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:6}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/16/kendall-jenner-hailey-bieber-have-ladies-night-at-lakers-game/"
                        data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:6}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/97/16by9/2024/01/16/975e3a9d2b2b4ed7a0e59a9268996657_xs.jpg" loading="lazy" alt="Kendall Jenner, Hailey Bieber Have Ladies&#039; Night At Lakers Game">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Kendall Jenner, Hailey Bieber Have Ladies&#039; Night At Lakers Game
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2023/12/28/justin-bieber-hits-maple-leafs-game-with-hailey-crowd-erupts/"
                        data-node-ref="tmz:article:9b1f46df-496c-4f55-b5ee-3cf23667d577"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:6}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/6f/16by9/2023/12/28/6f374b822bdb414da30fb5c627412620_xs.png" loading="lazy" alt="Justin Bieber Hits Maple Leafs Game With Hailey, Gets Huge Ovation">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Justin Bieber Hits Maple Leafs Game With Hailey, Gets Huge Ovation
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/justin-bieber/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Justin Bieber
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/hailey-bieber/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Hailey Bieber
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/relationships/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Relationships
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/couples/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Couples
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/instagram/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Instagram
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/famous-food/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:6}"
                  >
                    Famous Food
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-6" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-6/blogroll.html"></div>
      
              <div id="ad-blogroll6" class="ad-blogroll6"></div>
                                              
                    
      
      <article id="blogroll-73fe8707-df67-4965-bcce-f11f419dcf9f" class="article"
      >
                  <div class="article__channel--politics"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/trump-aides-holy-war-taylor-swift-endorsement-biden-election/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:7}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Donald Trump&#039;s Inner Circle</span>
                                  <span class="article__hf2 text-uppercase h1">Vows to Wage &#039;Holy War&#039; on T-Swift ...</span>
                                  <span class="article__hf3 text-none h2">Thinks He&#039;s More Popular?!?</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/trump-aides-holy-war-taylor-swift-endorsement-biden-election/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftrump-aides-holy-war-taylor-swift-endorsement-biden-election%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:7}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">120</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/trump-aides-holy-war-taylor-swift-endorsement-biden-election/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftrump-aides-holy-war-taylor-swift-endorsement-biden-election%2F%3Fadid%3Dshare-tw&text=Trump%20Aides%20Vow%20to%20Wage%20%27Holy%20War%27%20on%20Taylor%20Swift%20Amid%20Endorsement%20Talks&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:7}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 5:57 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-7b5b939b0c92202cdd6403ac4a827cf6"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_4f3369603d0a473593b78712341bec2a"
            data-container-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/4f/4by3/2024/01/31/4f3369603d0a473593b78712341bec2a_md.jpg"
          loading="lazy"
          alt=""
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_4f3369603d0a473593b78712341bec2a","status":"published","etag":"343a173e8340c71081e5c654dae190be","created_at":"1706708746568787","updated_at":"1706708809221831","title":"donald trump and taylor swift getty 1.jpg","mime_type":"image\/jpeg","file_size":"704574","file_etag":"f17223294c396b5f0e5dd4a51b9dd968","credit":"Getty","linked_refs":["tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"],"gallery_seq":0,"width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-7b5b939b0c92202cdd6403ac4a827cf6-->

    <section
              id="cb-bd0b1a9f21fc3c723d0f61efa53ae938"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/donald-trump/"><strong>Donald Trump</strong></a> and his closest aides are apparently ramping up to go to battle with <a href="https://www.tmz.com/people/taylor-swift/"><strong>Taylor Swift</strong></a> and any Democrats she might end up endorsing -- this according to a new report.</p>
      </section><!--/#cb-bd0b1a9f21fc3c723d0f61efa53ae938-->

    <section
              id="cb-134de2f4bf35657b54ee3aa00586af1c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.rollingstone.com/politics/politics-features/donald-trump-more-popular-taylor-swift-maga-biden-1234956829/" rel="noopener noreferrer" target="_blank"><strong>Rolling Stone</strong></a> dished out some alleged behind-the-scenes deets about what's being discussed lately in Trump world -- particularly as it pertains to T-Swift and the (likely) possibility that she'll <a href="https://www.tmz.com/2024/01/29/joe-biden-camp-desperate-taylor-swift-endorsement-2024-election/"><strong>throw her weight</strong></a> behind <a href="https://www.tmz.com/people/joe-biden/"><strong>Joe Biden</strong></a> as we get close to the '24 election.</p>
      </section><!--/#cb-134de2f4bf35657b54ee3aa00586af1c-->

    <section
              id="cb-e2aedec9d880ecce22bf404e77cb8558"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-83987b30-0c56-4fa7-bb48-e042687dd155"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2023/03/04/trump-on-the-campaign-trail/"
        data-node-ref="tmz:gallery:83987b30-0c56-4fa7-bb48-e042687dd155"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/53/4by3/2023/03/04/53d1b00064464ff5a63e4bdf967102cc_md.jpg"
            alt="Donald Trump on The Campaign Trail"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Trump on the Campaign Trail</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-e2aedec9d880ecce22bf404e77cb8558-->

    <section
              id="cb-b32275514d67116d6c22aa400039ec2d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>From what they're hearing ... DT and co. are grousing at the prospect of Taylor using her massive influence to support the Biden ticket -- so much so, in fact, that RS reports some in the Trump camp are declaring a "holy war" against her ... whatever the hell that means.</p>
      </section><!--/#cb-b32275514d67116d6c22aa400039ec2d-->

    <section
              id="cb-c9b7cdaafaa7d82f869b58ee982f06df"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The outlet says that the topic of Taylor has come up in Trump's orbit quite a bit in recent months -- especially as she'd become ever-more popular due to <a href="https://www.tmz.com/2024/01/29/travis-kelce-clearly-tells-taylor-swift-i-love-you-new-audio-reveals-afc-championship-game/"><strong>her NFL tie</strong></a> lately. The more she's surged in the zeitgeist, the more Trump and co. have reportedly fumed with anger.</p>
      </section><!--/#cb-c9b7cdaafaa7d82f869b58ee982f06df-->

    <section
              id="cb-4ff7b642163bb6b0ce89a3f401280bae"
        class="canvas-block canvas-block-blogroll canvas-twitter-tweet-block canvas-twitter-tweet-block-blogroll canvas-twitter-tweet-block--default  "
        >
        <div id="cb-4ff7b642163bb6b0ce89a3f401280bae-236871503-target" class="d-flex justify-content-center">
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Taylor — Thanks for your support and for speaking out at this crucial moment in our nation’s history.<br><br>Election Day is right around the corner — are you ready for it? <a href="https://t.co/eoxT07d7QB">https://t.co/eoxT07d7QB</a> <a href="https://t.co/TLHRYSjbTx">https://t.co/TLHRYSjbTx</a></p>&mdash; Joe Biden (@JoeBiden) <a href="https://twitter.com/JoeBiden/status/1313966330861809671?ref_src=twsrc^tfw">October 7, 2020</a>
              <a href="https://twitter.com/JoeBiden" rel="noopener" target="_blank">@JoeBiden</a>
          </blockquote>
  </div>

<script id="cb-4ff7b642163bb6b0ce89a3f401280bae-236871503-rejected" type="text/x-consent-element">
  <p><strong>Twitter Tweet Unavailable</strong></p>
</script>

<script>
wbq.push(function renderTwitterTweetBlock() {
  var response = 'unknown';
  var target = document.getElementById('cb-4ff7b642163bb6b0ce89a3f401280bae-236871503-target');

  function accept() {
    if (response === 'accepted') {
      return;
    }

    window.TMZ.utils.loadTwitterJs().then(function (twttr) {
      target.innerHTML = '';
      twttr.widgets.createTweet('1313966330861809671', target, {
        cards: '',
        conversation: '',
      });
    }).catch(reject);

    // there is no "accepted" html for twitter block, the above js does it all
    response = 'accepted';
  }

  function reject() {
    if (response === 'rejected') {
      return;
    }

    target.innerHTML = document.getElementById('cb-4ff7b642163bb6b0ce89a3f401280bae-236871503-rejected').innerHTML;
    response = 'rejected';
  }

  watchConsent(function (canUse) {
    canUse('twitter') ? accept() : reject();
  });
});
</script>
      </section><!--/#cb-4ff7b642163bb6b0ce89a3f401280bae-->

    <section
              id="cb-1c041abd544c705f45cb620c90435b06"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>RS even goes so far as to claim that Trump recently told confidants he was "more popular" than Taylor and that he had a more loyal fan base than her as well. The outlet goes on to say Trump was telling people he "obviously" should've been <a href="https://www.tmz.com/2023/12/06/taylor-swift-named-time-magazine-person-year/#:~:text=Taylor%20Swift%20is%20TIME%20Magazine's,and%20away%20winner%20of%202023."><strong>TIME's Person of the Year</strong></a>.</p>
      </section><!--/#cb-1c041abd544c705f45cb620c90435b06-->

    <section
              id="cb-7bc5a5555540bb53c2ff472c2fc26ed7"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>As wild as this might sound, there's already evidence out there that it's true -- especially on the "holy war" front ... 'cause some popular Trump surrogates have talked about it of late.</p>
      </section><!--/#cb-7bc5a5555540bb53c2ff472c2fc26ed7-->

    <section
              id="cb-7b5833b095ef43d69983446501feb91d"
        class="canvas-block canvas-block-blogroll canvas-twitter-tweet-block canvas-twitter-tweet-block-blogroll canvas-twitter-tweet-block--default  "
        >
        <div id="cb-7b5833b095ef43d69983446501feb91d-102727463-target" class="d-flex justify-content-center">
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">After expanding some more on his Taylor Swift op theory, Jack Posobiec adds: &quot;We don’t have Taylor Swift on our side, but you know who we have? We have Kid Rock. We have Ted Nugent. We have influencers. We have all these people -- Jon Voight.&quot; <a href="https://t.co/IWIvNtYsdz">pic.twitter.com/IWIvNtYsdz</a></p>&mdash; Justin Baragona (@justinbaragona) <a href="https://twitter.com/justinbaragona/status/1752443496936382767?ref_src=twsrc^tfw">January 30, 2024</a>
              <a href="https://twitter.com/justinbaragona" rel="noopener" target="_blank">@justinbaragona</a>
          </blockquote>
  </div>

<script id="cb-7b5833b095ef43d69983446501feb91d-102727463-rejected" type="text/x-consent-element">
  <p><strong>Twitter Tweet Unavailable</strong></p>
</script>

<script>
wbq.push(function renderTwitterTweetBlock() {
  var response = 'unknown';
  var target = document.getElementById('cb-7b5833b095ef43d69983446501feb91d-102727463-target');

  function accept() {
    if (response === 'accepted') {
      return;
    }

    window.TMZ.utils.loadTwitterJs().then(function (twttr) {
      target.innerHTML = '';
      twttr.widgets.createTweet('1752443496936382767', target, {
        cards: '',
        conversation: '',
      });
    }).catch(reject);

    // there is no "accepted" html for twitter block, the above js does it all
    response = 'accepted';
  }

  function reject() {
    if (response === 'rejected') {
      return;
    }

    target.innerHTML = document.getElementById('cb-7b5833b095ef43d69983446501feb91d-102727463-rejected').innerHTML;
    response = 'rejected';
  }

  watchConsent(function (canUse) {
    canUse('twitter') ? accept() : reject();
  });
});
</script>
      </section><!--/#cb-7b5833b095ef43d69983446501feb91d-->

    <section
              id="cb-3fe92280ac17296b701e7fe5dbb1c652"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Political persona <strong>Jack Posobiec </strong>recently told a MAGA-leaning crowd at an event that their side had to fight fire with fire when it comes to the Taylor effect ... throwing out stars in their own world who could presumably rile up their base and get people to the polls for DT.</p>
      </section><!--/#cb-3fe92280ac17296b701e7fe5dbb1c652-->

    <section
              id="cb-de3719dafa1f80edf6c4f569de0f6c4a"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Some of the A-listers he mentioned ... <a href="https://www.tmz.com/people/kid-rock/"><strong>Kid Rock</strong></a>, <a href="https://www.tmz.com/people/ted-nugent/"><strong>Ted Nugent</strong></a> and <a href="https://www.tmz.com/people/jon-voight/"><strong>Jon Voight</strong></a>, to name a few.</p>
      </section><!--/#cb-de3719dafa1f80edf6c4f569de0f6c4a-->

    <section
              id="cb-d15d7d94f24a9d360bc6b6858ab1bd92"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-5ce04af5-269d-4bba-9138-b8ae8ad21fba"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2019/12/13/taylor-swift-moments-through-the-eras-photos/"
        data-node-ref="tmz:gallery:5ce04af5-269d-4bba-9138-b8ae8ad21fba"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/7e/4by3/2023/06/01/7efaaeb75c274ee5b1bf597dff447fa5_md.jpg"
            alt="Taylor Swift Moments -- Through The Eras!"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Swift Through The Eras!</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-d15d7d94f24a9d360bc6b6858ab1bd92-->

    <section
              id="cb-e150c97c604c47da0ec42ca1a4c830e0"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>On its face, it would seem MAGA supporters feel like they're in a fight for their lives here -- and based on all these reports ... it would seem they see Tay Tay as the anti-Christ!</p>
      </section><!--/#cb-e150c97c604c47da0ec42ca1a4c830e0-->

    <section
              id="cb-afb6cf2facffa05723e34958ac1217ee"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Meanwhile, in reality, all Taylor has done, really, is ... just go to football games and cheer.</p>
      </section><!--/#cb-afb6cf2facffa05723e34958ac1217ee-->

    <section
              id="cb-b01b9b7b4bd4f9c7f4e9d132b58670d9"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default canvas-video-block--aside "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-237965474-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-b01b9b7b4bd4f9c7f4e9d132b58670d9-->

    <section
              id="cb-9375339f3e4d4c5263bd9ebafaf138ff"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>That, in and of itself though, has apparently triggered Trumpers around the country -- who are throwing a bit of hissy fit over the prospect she might get political again this year.</p>
      </section><!--/#cb-9375339f3e4d4c5263bd9ebafaf138ff-->

    <section
              id="cb-0edafd09bea8040630d9dcf13d89c4a4"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Oh, the humanity ...</p>
      </section><!--/#cb-0edafd09bea8040630d9dcf13d89c4a4-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/trump-aides-holy-war-taylor-swift-endorsement-biden-election/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftrump-aides-holy-war-taylor-swift-endorsement-biden-election%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:7}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/trump-aides-holy-war-taylor-swift-endorsement-biden-election/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Ftrump-aides-holy-war-taylor-swift-endorsement-biden-election%2F%3Fadid%3Dshare-tw&text=Trump%20Aides%20Vow%20to%20Wage%20%27Holy%20War%27%20on%20Taylor%20Swift%20Amid%20Endorsement%20Talks&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:7}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/29/snoop-dogg-apparently-likes-donald-trump-now/"
                        data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:7}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/c6/16by9/2024/01/29/c675f2227ec74842ab2674e48482b9a4_xs.jpg" loading="lazy" alt="Snoop Dogg Has &#039;Nothing But Love and Respect&#039; for Donald Trump Now">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Snoop Dogg Has &#039;Nothing But Love and Respect&#039; for Donald Trump Now
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/30/taylor-swift-searchable-twitter-x-artificial-intelligence-ai-graphic-photos/"
                        data-node-ref="tmz:article:73fe8707-df67-4965-bcce-f11f419dcf9f"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:7}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/13/16by9/2024/01/30/1316a3f9219d49ad93e59f70df2d669b_xs.jpg" loading="lazy" alt="Taylor Swift&#039;s Name Searchable Again on X After AI Sex Photos Fiasco">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Taylor Swift&#039;s Name Searchable Again on X After AI Sex Photos Fiasco
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/donald-trump/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    Donald Trump
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/taylor-swift/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    Taylor Swift
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/joe-biden/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    Joe Biden
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/tmzsports/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    TMZ Sports
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/2024-presidential-election/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    2024 Presidential Election
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/politix/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    Politix
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:7}"
                  >
                    Music
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-7" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-7/blogroll.html"></div>
      
              <div id="ad-blogroll7" class="ad-blogroll7"></div>
                                              
                    
      
      <article id="blogroll-4191fa62-8aec-41c7-8906-6baca20603ed" class="article"
      >
                  <div class="article__channel--music"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/nsync-no-new-music-justin-timberlake-tease-new-album-vocals/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:8}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">*NSYNC</span>
                                  <span class="article__hf2 text-uppercase h1">Justin&#039;s Tease Isn&#039;t New Group Music</span>
                                  <span class="article__hf3 text-none h2">... Just New Backup Vocals</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                              <li>
                  <div class="media-swipe media-swipe--blogroll">Exclusive</div>
                </li>
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/nsync-no-new-music-justin-timberlake-tease-new-album-vocals/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-new-music-justin-timberlake-tease-new-album-vocals%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:8}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">166</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/nsync-no-new-music-justin-timberlake-tease-new-album-vocals/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-new-music-justin-timberlake-tease-new-album-vocals%2F%3Fadid%3Dshare-tw&text=%2ANSYNC%20Doesn%27t%20Have%20New%20Music%20Despite%20Justin%20Timberlake%20Teaser&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:8}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 1:00 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-b6887965f40c291b31f7b6757eda0e73"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20240130_00ed2c39c0c549fe8767e7636d515b69"
            data-container-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/00/4by3/2024/01/30/00ed2c39c0c549fe8767e7636d515b69_md.png"
          loading="lazy"
          alt="justin timberlake left, lance bass, joey fatone, jc chasez and chris kilpatrick"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20240130_00ed2c39c0c549fe8767e7636d515b69","status":"published","etag":"0402b4422a76d4735f1979d87171ac86","created_at":"1706636152816934","updated_at":"1706636162280334","title":"013024 justin timberlake left, lance bass, joey fatone, jc chasez and chris kilpatrick -getty .png","mime_type":"image\/png","file_size":"1767618","file_etag":"251c5222568411cc995ce62ae7e37a77","credit":"Getty","linked_refs":["tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"],"gallery_seq":0,"alt_text":"justin timberlake left, lance bass, joey fatone, jc chasez and chris kilpatrick","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-b6887965f40c291b31f7b6757eda0e73-->

    <section
              id="cb-c127968d64389d52e9e9b6dbda2ae2c4"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/justin-timberlake/"><strong>Justin Timberlake</strong></a><strong> </strong>saying he's been in the studio with his boy bandmates isn't what it seems ... there's no new *NSYNC music on the way, but they did lend their voices to JT's album.</p>
      </section><!--/#cb-c127968d64389d52e9e9b6dbda2ae2c4-->

    <section
              id="cb-5f7ce7b6fd12bfe470d90a65c8aa92b0"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Here's the deal ... Justin gave *NSYNC fans the ultimate tease this week when he told <a href="https://www.tmz.com/people/kelly-clarkson/"><strong>Kelly Clarkson</strong></a> he was cooking something up with the boy band, leading lotsa folks to believe new tracks and potentially a tour was coming, building on their recent reunion.</p>
      </section><!--/#cb-5f7ce7b6fd12bfe470d90a65c8aa92b0-->

    <section
              id="cb-3720bedae0f40066bd384ce767781db1"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20231228_8ac4bbcb8c404e90b0e7ca480bde76d5"
            data-container-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/8a/4by3/2023/12/28/8ac4bbcb8c404e90b0e7ca480bde76d5_md.png"
          loading="lazy"
          alt="NSYNC"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20231228_8ac4bbcb8c404e90b0e7ca480bde76d5","status":"published","etag":"8f4cb624706a11ec002787ea12fec5e6","created_at":"1703782053080986","updated_at":"1706635714592929","title":"122823 NSYNC - getty .png","mime_type":"image\/png","file_size":"1824883","file_etag":"34ab3e7900c5a46f001a19ee3a94dc09","credit":"Getty","linked_refs":["tmz:article:45b817d4-8ec2-47c4-97e6-54d83a76e89b","tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"],"gallery_seq":0,"alt_text":"NSYNC","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-3720bedae0f40066bd384ce767781db1-->

    <section
              id="cb-1ff346e8e2ed22dba37370cf6e5f6e84"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>But our sources at RCA Records are pumping the brakes, telling us ... Justin's tease was referencing *NSYNC members recording background vocals for his <a href="https://www.tmz.com/2024/01/19/justin-timberlake-wants-rights-everything-i-thought-it-was-teases-new-music/" rel="noopener noreferrer" target="_blank" title="https://www.tmz.com/2024/01/19/justin-timberlake-wants-rights-everything-i-thought-it-was-teases-new-music/"><strong>his upcoming album</strong></a>, "Everything I Thought I Was."</p>
      </section><!--/#cb-1ff346e8e2ed22dba37370cf6e5f6e84-->

    <section
              id="cb-b01b9b7b4bd4f9c7f4e9d132b58670d9"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default canvas-video-block--aside "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-412687371-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-b01b9b7b4bd4f9c7f4e9d132b58670d9-->

    <section
              id="cb-ccee4186e05a92885f2521d0940e3c04"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>We're told when Justin, <a href="https://www.tmz.com/people/lance-bass/"><strong>Lance Bass</strong></a>, <a href="https://www.tmz.com/people/joey-fatone/"><strong>Joey Fatone</strong></a>, <a href="https://www.tmz.com/people/jc-chasez/"><strong>JC Chasez</strong></a> and <a href="https://www.tmz.com/people/chris-kirkpatrick/"><strong>Chris Kirkpatrick</strong></a> got together last year to record "Better Place" for 'Trolls Band Together,' they also used their time together in the studio to lay down vocals for JT's new offering.</p>
      </section><!--/#cb-ccee4186e05a92885f2521d0940e3c04-->

    <section
              id="cb-1ebf241e72a8b1161346ec3427ad7149"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-1ebf241e72a8b1161346ec3427ad7149-2052392696-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-1ebf241e72a8b1161346ec3427ad7149-2052392696-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-1ebf241e72a8b1161346ec3427ad7149-2052392696-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-1ebf241e72a8b1161346ec3427ad7149-2052392696-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('NLPYqswxJQs', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-1ebf241e72a8b1161346ec3427ad7149-2052392696-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-1ebf241e72a8b1161346ec3427ad7149-->

    <section
              id="cb-5ffa590c5b56f0fa74aeb89c569d806e"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>So, JT's just hyping that collab ... background vocals for that one track, which we guess some might consider a reunion of sorts.</p>
      </section><!--/#cb-5ffa590c5b56f0fa74aeb89c569d806e-->

    <section
              id="cb-15e05e2127d151fffef0e40ba6c2a3af"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>We're also told RCA Records honchos are adamant that when/IF *NSYNC does make a comeback, it needs to be the band's own sound and not Justin's which would also include JC singing half the leads with JT just like with all the hit *NSYNC records.</p>
      </section><!--/#cb-15e05e2127d151fffef0e40ba6c2a3af-->

    <section
              id="cb-880e3cea46adf74fc4b3bd72fdac11a0"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Unfortunately for *NSYNC fans, that isn't imminent ... we're told Justin is full steam ahead with his upcoming world tour and there are no plans for his old band members to join him on stage.</p>
      </section><!--/#cb-880e3cea46adf74fc4b3bd72fdac11a0-->

    <section
              id="cb-817c4c2409418dcfebebcc20e6d37403"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20231228_bb6eefcf7b1e404bb6262cbb053946bd"
            data-container-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/bb/4by3/2023/12/28/bb6eefcf7b1e404bb6262cbb053946bd_md.png"
          loading="lazy"
          alt="NSYNC"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20231228_bb6eefcf7b1e404bb6262cbb053946bd","status":"published","etag":"64c70ba525ce21f8de9516159860d248","created_at":"1703782053393468","updated_at":"1706635714558573","title":"122823 NSYNC 2 - getty .png","mime_type":"image\/png","file_size":"1785232","file_etag":"b055cc7c3008d5dae06536058ecad3db","credit":"Getty","linked_refs":["tmz:article:45b817d4-8ec2-47c4-97e6-54d83a76e89b","tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"],"gallery_seq":0,"alt_text":"NSYNC","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-817c4c2409418dcfebebcc20e6d37403-->

    <section
              id="cb-82887edca642b159ae1d35cadfc837b8"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Of course, there's no doubt fans are clamoring for an *NSYNC reunion album and tour ... and that could become a factor in the future. Right now, our sources say RCA is concerned with Justin's<a href="https://www.tmz.com/2024/01/28/justin-timberlake-saturday-night-live-performance-sanctified-selfish/"><strong> first single stumbling</strong></a> out of the gate.</p>
      </section><!--/#cb-82887edca642b159ae1d35cadfc837b8-->

    <section
              id="cb-a19e9155a9f420ec0d26116166d60999"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-e3622766-0dc9-4af1-9696-1742641007ae"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2019/11/01/nsync-old-school-shots/"
        data-node-ref="tmz:gallery:e3622766-0dc9-4af1-9696-1742641007ae"
                data-poster-image-ref="tmz:image-asset:image_jpg_20191101_d178cae10b1d49f19ad0b446c0214e06"
        data-start-at-poster="false"                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/d1/4by3/2019/11/01/d178cae10b1d49f19ad0b446c0214e06_md.jpg"
            alt="NSYNC -- Old School Looks"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">NSYNC Pop Shots</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-a19e9155a9f420ec0d26116166d60999-->

    <section
              id="cb-98f6b21942209aa827c3cdc20bc057b7"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>We're told RCA is nervous fans are upset they're not getting a true *NSYNC song, and that might be why Justin's "Selfish" isn't performing as well as hoped.</p>
      </section><!--/#cb-98f6b21942209aa827c3cdc20bc057b7-->

    <section
              id="cb-c3ae66d79a013ccb074d554fb5b46b75"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The good news is our sources say RCA wants a full band comeback as much as fans do -- but, it's just not in the cards right now.</p>
      </section><!--/#cb-c3ae66d79a013ccb074d554fb5b46b75-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/nsync-no-new-music-justin-timberlake-tease-new-album-vocals/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-new-music-justin-timberlake-tease-new-album-vocals%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:8}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/nsync-no-new-music-justin-timberlake-tease-new-album-vocals/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-new-music-justin-timberlake-tease-new-album-vocals%2F%3Fadid%3Dshare-tw&text=%2ANSYNC%20Doesn%27t%20Have%20New%20Music%20Despite%20Justin%20Timberlake%20Teaser&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:8}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/29/britney-spears-apologizes-justin-timberlake-memoir-praises-new-music/"
                        data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:8}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/b7/16by9/2024/01/29/b795c16548e94437b317d6ba79bf6692_xs.jpg" loading="lazy" alt="Britney Spears Apologizes to Justin Timberlake, Praises New Music">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Britney Spears Apologizes to Justin Timberlake, Praises New Music
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/27/justin-timberlake-album-classic-1500-nothin-larrance-dopson-timbaland/"
                        data-node-ref="tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:8}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/1c/16by9/2024/01/24/1cb11397e0f84678866d5b82b4551dca_xs.jpg" loading="lazy" alt="Justin Timberlake&#039;s New Album Is A Classic Says 1500 or Nothin&#039;s Larrance Dopson">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Justin Timberlake&#039;s New Album Is A Classic Says 1500 or Nothin&#039;s Larrance Dopson
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/justin-timberlake/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Justin Timberlake
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/joey-fatone/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Joey Fatone
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/lance-bass/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Lance Bass
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/chris-kirkpatrick/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Chris Kirkpatrick
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/kelly-clarkson/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Kelly Clarkson
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/jc-chasez/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    JC Chasez
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/snl/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    SNL
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/exclusive/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Exclusive
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/nsync/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:8}"
                  >
                    &#039;NSYNC
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-8" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-8/blogroll.html"></div>
      
              <div id="ad-blogroll8" class="ad-blogroll8"></div>
                                              
                    
      
      <article id="blogroll-a498028f-ec4d-4440-b39e-a14d803e64f2" class="article"
      >
                  <div class="article__channel--espanol"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/nsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:9}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">*NSYNC</span>
                                  <span class="article__hf2 text-uppercase h1">no tiene nueva música</span>
                                  <span class="article__hf3 text-none h2">a pesar del teaser de Justin Timberlake</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                              <li>
                  <div class="media-swipe media-swipe--blogroll">Exclusivo</div>
                </li>
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/nsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:9}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">1</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/nsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake%2F%3Fadid%3Dshare-tw&text=%2ANSYNC%20no%20tiene%20nueva%20m%C3%BAsica%20a%20pesar%20del%20teaser%20de%20Justin%20Timberlake&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:9}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 1:00 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-b6887965f40c291b31f7b6757eda0e73"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20240130_00ed2c39c0c549fe8767e7636d515b69"
            data-container-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/00/4by3/2024/01/30/00ed2c39c0c549fe8767e7636d515b69_md.png"
          loading="lazy"
          alt="justin timberlake left, lance bass, joey fatone, jc chasez and chris kilpatrick"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20240130_00ed2c39c0c549fe8767e7636d515b69","status":"published","etag":"0402b4422a76d4735f1979d87171ac86","created_at":"1706636152816934","updated_at":"1706636162280334","title":"013024 justin timberlake left, lance bass, joey fatone, jc chasez and chris kilpatrick -getty .png","mime_type":"image\/png","file_size":"1767618","file_etag":"251c5222568411cc995ce62ae7e37a77","credit":"Getty","linked_refs":["tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"],"gallery_seq":0,"alt_text":"justin timberlake left, lance bass, joey fatone, jc chasez and chris kilpatrick","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-b6887965f40c291b31f7b6757eda0e73-->

    <section
              id="cb-e45b503691b687dcb36505ed6cf99f69"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/justin-timberlake/"><strong>Justin Timberlake </strong></a>dice que ha estado en el estudio con sus compañeros de banda, pero no es lo que parece... ya que no hay nueva música de *NSYNC en camino. Lo que sí hicieron fue prestar sus voces para el álbum de Justin.</p>
      </section><!--/#cb-e45b503691b687dcb36505ed6cf99f69-->

    <section
              id="cb-9c6a713098c9a27685d2356db0131a53"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Justin le dio a los fans de *NSYNC falsas esperanzas esta semana cuando le dijo a<a href="https://www.tmz.com/people/kelly-clarkson/"><strong> Kelly Clarkson</strong></a> que estaba cocinando algo con la boy band, llevando a mucha gente a creer que había nuevas canciones y una gira.</p>
      </section><!--/#cb-9c6a713098c9a27685d2356db0131a53-->

    <section
              id="cb-3720bedae0f40066bd384ce767781db1"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20231228_8ac4bbcb8c404e90b0e7ca480bde76d5"
            data-container-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/8a/4by3/2023/12/28/8ac4bbcb8c404e90b0e7ca480bde76d5_md.png"
          loading="lazy"
          alt="NSYNC"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20231228_8ac4bbcb8c404e90b0e7ca480bde76d5","status":"published","etag":"8f4cb624706a11ec002787ea12fec5e6","created_at":"1703782053080986","updated_at":"1706635714592929","title":"122823 NSYNC - getty .png","mime_type":"image\/png","file_size":"1824883","file_etag":"34ab3e7900c5a46f001a19ee3a94dc09","credit":"Getty","linked_refs":["tmz:article:45b817d4-8ec2-47c4-97e6-54d83a76e89b","tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"],"gallery_seq":0,"alt_text":"NSYNC","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-3720bedae0f40066bd384ce767781db1-->

    <section
              id="cb-804638bf31b65d69f45a2993f75c2960"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Sin embargo, nuestras fuentes en RCA Records están siendo realistas, y nos dicen que todo el asunto se trata de los miembros de *NSYNC grabando voces de fondo para el<a href="https://www.tmz.com/2024/01/19/justin-timberlake-wants-rights-everything-i-thought-it-was-teases-new-music/"><strong> próximo álbum</strong></a> de Justin, "Everything I Thought I Was".</p>
      </section><!--/#cb-804638bf31b65d69f45a2993f75c2960-->

    <section
              id="cb-72be473cbca630a87855779b201e3647"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">tmz investiga</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-165073183-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-72be473cbca630a87855779b201e3647-->

    <section
              id="cb-613dde5a9bf1446220aa3434b2c6f956"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Nos dicen que cuando Justin, <a href="https://www.tmz.com/people/lance-bass/"><strong>Lance Bass,</strong></a> <a href="https://tmz.com/people/joey-fatone/"><strong>Joey Fatone</strong></a>, <a href="https://www.tmz.com/people/jc-chasez/"><strong>JC Chasez</strong></a> y <a href="https://www.tmz.com/people/chris-kirkpatrick/"><strong>Chris Kirkpatrick</strong></a> se reunieron el año pasado para grabar "Better Place" para "Trolls Band Together", también utilizaron su tiempo juntos en el estudio para ponerle voces a la nueva canción de JT.</p>
      </section><!--/#cb-613dde5a9bf1446220aa3434b2c6f956-->

    <section
              id="cb-1ebf241e72a8b1161346ec3427ad7149"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-1ebf241e72a8b1161346ec3427ad7149-200575178-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-1ebf241e72a8b1161346ec3427ad7149-200575178-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-1ebf241e72a8b1161346ec3427ad7149-200575178-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-1ebf241e72a8b1161346ec3427ad7149-200575178-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('NLPYqswxJQs', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-1ebf241e72a8b1161346ec3427ad7149-200575178-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-1ebf241e72a8b1161346ec3427ad7149-->

    <section
              id="cb-2017258b53c262872b8b4a7c290139ce"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Por lo tanto, JT está promocionando esa colaboració. Son simplemente voces de fondo para esa pista, que suponemos que algunos podrían considerar una especie de reunión.</p>
      </section><!--/#cb-2017258b53c262872b8b4a7c290139ce-->

    <section
              id="cb-9692aad64be1ee6167d1b96c7fe1e6bd"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>También nos han dicho que los jefes de RCA Records son inflexibles respecto a SI *NSYNC hacen un regreso, tiene que ser el propio sonido de la banda y no el de Justin, que también incluiría a JC cantando la mitad de las pistas con JT al igual que en todos los discos exitosos de *NSYNC.</p>
      </section><!--/#cb-9692aad64be1ee6167d1b96c7fe1e6bd-->

    <section
              id="cb-4c314d17267ef25bf4e8c5943086ff5d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Desafortunadamente para los fans de *NSYNC, eso no es inminente. Nos informan que Justin está a todo vapor con su próxima gira mundial y no hay planes para que sus antiguos miembros de la banda se unan con él en el escenario.</p>
      </section><!--/#cb-4c314d17267ef25bf4e8c5943086ff5d-->

    <section
              id="cb-817c4c2409418dcfebebcc20e6d37403"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20231228_bb6eefcf7b1e404bb6262cbb053946bd"
            data-container-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/bb/4by3/2023/12/28/bb6eefcf7b1e404bb6262cbb053946bd_md.png"
          loading="lazy"
          alt="NSYNC"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20231228_bb6eefcf7b1e404bb6262cbb053946bd","status":"published","etag":"64c70ba525ce21f8de9516159860d248","created_at":"1703782053393468","updated_at":"1706635714558573","title":"122823 NSYNC 2 - getty .png","mime_type":"image\/png","file_size":"1785232","file_etag":"b055cc7c3008d5dae06536058ecad3db","credit":"Getty","linked_refs":["tmz:article:45b817d4-8ec2-47c4-97e6-54d83a76e89b","tmz:article:4191fa62-8aec-41c7-8906-6baca20603ed"],"gallery_seq":0,"alt_text":"NSYNC","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-817c4c2409418dcfebebcc20e6d37403-->

    <section
              id="cb-ac00a9c6b6401eefacbd2c49cb59832d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Por supuesto, no hay duda de que los fans están clamando por un álbum de reunión de *NSYNC y una gira. En este momento, nuestras fuentes dicen que RCA está preocupado con <a href="https://www.tmz.com/2024/01/28/justin-timberlake-saturday-night-live-performance-sanctified-selfish/"><strong>el primer single de Justin</strong></a> tropezar fuera de la puerta.</p>
      </section><!--/#cb-ac00a9c6b6401eefacbd2c49cb59832d-->

    <section
              id="cb-abf0a588b05508cea3d99dd0ebed0b89"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-e3622766-0dc9-4af1-9696-1742641007ae"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2019/11/01/nsync-old-school-shots/"
        data-node-ref="tmz:gallery:e3622766-0dc9-4af1-9696-1742641007ae"
                data-poster-image-ref="tmz:image-asset:image_jpg_20191101_d178cae10b1d49f19ad0b446c0214e06"
        data-start-at-poster                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="482"
            class="img-fluid gallery-block__img-fluid img-aspect-o"
            src="https://imagez.tmz.com/image/d1/o/2019/11/01/d178cae10b1d49f19ad0b446c0214e06_md.jpg"
            alt="NSYNC -- Old School Looks"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
        
                  <span class="media-credit gallery-block__media-credit">Getty</span>
              </a>
    </div>
        </section><!--/#cb-abf0a588b05508cea3d99dd0ebed0b89-->

    <section
              id="cb-e273c2c9da4f32a73fdbbeb8da0b4fb8"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Nos dicen que RCA está nerviosa porque los fans están molestos porque no están recibiendo una verdadera canción de *NSYNC, y que podría ser la razón por la que "Selfish" de Justin no está funcionando tan bien como se esperaba.</p>
      </section><!--/#cb-e273c2c9da4f32a73fdbbeb8da0b4fb8-->

    <section
              id="cb-ab3d246c88736248ff03fa1fc45bf899"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>La buena noticia es que nuestras fuentes dicen que RCA quiere un regreso de la banda completa tanto como los fans, pero simplemente no está en las cartas en este momento.</p>
      </section><!--/#cb-ab3d246c88736248ff03fa1fc45bf899-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/nsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:9}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/nsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fnsync-no-tiene-nueva-musica-a-pesar-del-teaser-de-justin-timberlake%2F%3Fadid%3Dshare-tw&text=%2ANSYNC%20no%20tiene%20nueva%20m%C3%BAsica%20a%20pesar%20del%20teaser%20de%20Justin%20Timberlake&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:a498028f-ec4d-4440-b39e-a14d803e64f2"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:9}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/justin-timberlake/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Justin Timberlake
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/joey-fatone/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Joey Fatone
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/lance-bass/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Lance Bass
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/chris-kirkpatrick/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Chris Kirkpatrick
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/kelly-clarkson/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Kelly Clarkson
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/jc-chasez/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    JC Chasez
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/snl/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    SNL
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/exclusive/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Exclusive
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/nsync/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:9}"
                  >
                    &#039;NSYNC
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-9" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-9/blogroll.html"></div>
      
              <div id="ad-blogroll9" class="ad-blogroll9"></div>
                                              
                    
      
      <article id="blogroll-b32a9e90-fd91-4029-b2b1-ff9bebf0a57b" class="article"
      >
                  <div class="article__channel--reporting"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/31/murray-the-magician-tropicana-closing-hurts-las-vegas-entertainers/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:10}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Murray The Magician</span>
                                  <span class="article__hf2 text-uppercase h1">Tropicana Closure a Big Blow</span>
                                  <span class="article__hf3 text-none h2">For Vegas Entertainers!!!</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                              <li>
                  <div class="media-swipe media-swipe--blogroll">Exclusive</div>
                </li>
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/31/murray-the-magician-tropicana-closing-hurts-las-vegas-entertainers/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fmurray-the-magician-tropicana-closing-hurts-las-vegas-entertainers%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:10}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">192</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/31/murray-the-magician-tropicana-closing-hurts-las-vegas-entertainers/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fmurray-the-magician-tropicana-closing-hurts-las-vegas-entertainers%2F%3Fadid%3Dshare-tw&text=Murray%20the%20Magician%20Says%20Tropicana%20Closure%20Hurts%20Las%20Vegas%20Entertainers&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:10}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/31/2024 12:45 AM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-05754e4cbfc00188e8d367a1090871fe"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20240130_e21bcc966d5b454aafa7a1eeadcbfdd0"
            data-container-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/e2/4by3/2024/01/30/e21bcc966d5b454aafa7a1eeadcbfdd0_md.png"
          loading="lazy"
          alt="murray the magician The Tropicana Las Vegas"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">TMZ/Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20240130_e21bcc966d5b454aafa7a1eeadcbfdd0","status":"published","etag":"c7849afa8993e72a821a7b9ae2a21889","created_at":"1706655892458625","updated_at":"1706655915616919","title":"013024 murray the magician  new - getty.-tmz.png","mime_type":"image\/png","file_size":"1191531","file_etag":"8d1e1e1f8505f89ec8d46495a27887b1","credit":"TMZ\/Getty","linked_refs":["tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"],"gallery_seq":0,"alt_text":"murray the magician The Tropicana Las Vegas","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-05754e4cbfc00188e8d367a1090871fe-->

    <section
              id="cb-60af53cfd09f64a8872186628069cf56"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>One of the most famous casino resorts in Las Vegas is closing, and one of its longtime headliners says it spells trouble for Sin City entertainers.</p>
      </section><!--/#cb-60af53cfd09f64a8872186628069cf56-->

    <section
              id="cb-2474a8e1fa5ff5b4031e4fbe49d5bbc1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The Tropicana announced this week it's shuttering in April, and will ultimately be demolished to make way for a new baseball stadium being built for the Las Vegas Athletics, the MLB team relocating from Oakland.</p>
      </section><!--/#cb-2474a8e1fa5ff5b4031e4fbe49d5bbc1-->

    <section
              id="cb-065dc7cee4299173447b90b9c39de407"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/10/16by9/2024/01/29/104c1cac70c34979b985c1e31b3b6751_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:c37c4eda-b8e9-4386-8608-8661df4b6d58"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">Waiting For Other Shoe To Drop</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ.com</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Murray the Magician Says Tropicana Closure Hurts Las Vegas Entertainers",
        "description": "One of the most famous casino resorts in Las Vegas is closing, and one of its longtime headliners says it spells trouble for Sin City entertainers.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/10/4by3/2024/01/29/104c1cac70c34979b985c1e31b3b6751_xl.jpg",
            "https://imagez.tmz.com/image/10/1by1/2024/01/29/104c1cac70c34979b985c1e31b3b6751_xl.jpg",
            "https://imagez.tmz.com/image/10/16by9/2024/01/29/104c1cac70c34979b985c1e31b3b6751_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-31T08:45:17Z",
                  "duration": "PT2M13S",
                "uploadDate": "2024-01-29T23:11:07Z",
        "dateCreated": "2024-01-29T23:11:07Z",
        "dateModified": "2024-01-31T08:45:24Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/8b/o/2024/01/29/8b2e6bd567144145a1ca63036997e75a.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-29-012924-murray-the-magician-1767407-320/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-image-holder');
            var footer = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080'), {
                        onObserve: function() {
              document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-c37c4eda-b8e9-4386-8608-8661df4b6d58-461148080-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-29-012924-murray-the-magician-1767407-320/',
                  null,
                  'tmz:video:c37c4eda-b8e9-4386-8608-8661df4b6d58',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-065dc7cee4299173447b90b9c39de407-->

    <section
              id="cb-5d22ed4a9d615734e67d2bc4629e2051"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><strong>Murray The Magician</strong>, who has a residency at the Tropicana, tells TMZ ... the impending closure could create major problems for performers who've been doing their thing at the property.</p>
      </section><!--/#cb-5d22ed4a9d615734e67d2bc4629e2051-->

    <section
              id="cb-64162b85c071830ede744cd8c6f3b9cc"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>As the 'AGT' alum explains, the Las Vegas Strip is hypercompetitive for entertainers -- there are more than 70 shows a night on the 2.5-mile stretch, with only so much wealth to go around ... and the Tropicana closing eliminates 2 venues.</p>
      </section><!--/#cb-64162b85c071830ede744cd8c6f3b9cc-->

    <section
              id="cb-19897a82001adae3a22800aa74a7ea3e"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>So, some acts are going to be left out in the cold.</p>
      </section><!--/#cb-19897a82001adae3a22800aa74a7ea3e-->

    <section
              id="cb-fff11eba9f7ebda61ebe1c4c840e1b65"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_png_20240130_88e598b4668d473a9f36afb8114273b0"
            data-container-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/88/4by3/2024/01/30/88e598b4668d473a9f36afb8114273b0_md.png"
          loading="lazy"
          alt="The Tropicana Las Vegas"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_png_20240130_88e598b4668d473a9f36afb8114273b0","status":"published","etag":"07cb7addfcce8d99ad392d1ac3de62b0","created_at":"1706655893807031","updated_at":"1706655902108121","title":"013024 The Tropicana Las Vegas sub - getty .png","mime_type":"image\/png","file_size":"1710678","file_etag":"2722121558b4685365e030dcd111546f","credit":"Getty","linked_refs":["tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"],"gallery_seq":0,"alt_text":"The Tropicana Las Vegas","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-fff11eba9f7ebda61ebe1c4c840e1b65-->

    <section
              id="cb-c5a931952fc2a33f585ebfa6bc8a6d39"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>There's a historical layer to this too ... the Tropicana's been a launching pad for so many Vegas performers, and Murray says the property changed the way folks are entertained in Sin City.</p>
      </section><!--/#cb-c5a931952fc2a33f585ebfa6bc8a6d39-->

    <section
              id="cb-b01b9b7b4bd4f9c7f4e9d132b58670d9"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default canvas-video-block--aside "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-2027090417-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-b01b9b7b4bd4f9c7f4e9d132b58670d9-->

    <section
              id="cb-152591d8ee858be953849dc693f0048c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><strong>Siegfried </strong>and <strong>Roy </strong>got their start at the Tropicana, and Murray says without them there would be no Cirque du Soleil. The Tropicana also hosted the Folies Bergere for nearly half a century, and it's where <a href="https://www.tmz.com/people/gladys-knight/"><strong>Gladys Knight</strong></a> and <a href="https://www.tmz.com/people/wayne-newton/"><strong>Wayne Newton</strong></a> once had residencies.</p>
      </section><!--/#cb-152591d8ee858be953849dc693f0048c-->

    <section
              id="cb-623a0578858a49049b6cd6e928c5f6d9"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Murray does his show at the Laugh Factory at the Tropicana, and the property also hosts tribute shows for <a href="https://www.tmz.com/people/michael-jackson/"><strong>Michael Jackson</strong></a> and <a href="https://www.tmz.com/people/prince/"><strong>Prince</strong></a>.</p>
      </section><!--/#cb-623a0578858a49049b6cd6e928c5f6d9-->

    <section
              id="cb-0e220b4987efb7f4e412a39989c4b29d"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-0e220b4987efb7f4e412a39989c4b29d-556040391-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-0e220b4987efb7f4e412a39989c4b29d-556040391-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-0e220b4987efb7f4e412a39989c4b29d-556040391-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-0e220b4987efb7f4e412a39989c4b29d-556040391-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('psih2UN0Sag', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-0e220b4987efb7f4e412a39989c4b29d-556040391-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-0e220b4987efb7f4e412a39989c4b29d-->

    <section
              id="cb-484349fb04808aa8f5edb7b45a1781fe"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>For what it's worth, there are reports the "MJ Live" and "Purple Reign" tribute shows are relocating to new spots in Vegas -- and, likewise, Murray says he's sticking with the Laugh Factory, which is finishing a deal to move on the Strip.</p>
      </section><!--/#cb-484349fb04808aa8f5edb7b45a1781fe-->

    <section
              id="cb-fd9e8ac27acd492713c3e8e2b62fde68"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>But, if deals fall though, Murray says it could be tough sledding.</p>
      </section><!--/#cb-fd9e8ac27acd492713c3e8e2b62fde68-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/31/murray-the-magician-tropicana-closing-hurts-las-vegas-entertainers/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fmurray-the-magician-tropicana-closing-hurts-las-vegas-entertainers%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:10}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/31/murray-the-magician-tropicana-closing-hurts-las-vegas-entertainers/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F31%2Fmurray-the-magician-tropicana-closing-hurts-las-vegas-entertainers%2F%3Fadid%3Dshare-tw&text=Murray%20the%20Magician%20Says%20Tropicana%20Closure%20Hurts%20Las%20Vegas%20Entertainers&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:10}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/25/fontainebleau-las-vegas-hotel-ripped-bad-nachos-circa-oyo/"
                        data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:10}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/cb/16by9/2024/01/25/cb6e870ce4e34b81b896ab191a9218fd_xs.jpg" loading="lazy" alt="Fontainebleau Las Vegas Ripped For Weak Nachos, Hotels Pile On">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Fontainebleau Las Vegas Ripped For Weak Nachos, Hotels Pile On
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/19/michael-jackson-estate-legal-beef-mj-live-tribute-show-tropicana-las-vegas/"
                        data-node-ref="tmz:article:b32a9e90-fd91-4029-b2b1-ff9bebf0a57b"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:10}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/ed/16by9/2024/01/19/edb8d809762e4da8863efe1ba15dec4e_xs.jpg" loading="lazy" alt="Michael Jackson Estate Has Legal Beef With &#039;MJ Live&#039; Las Vegas Tribute Show">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Michael Jackson Estate Has Legal Beef With &#039;MJ Live&#039; Las Vegas Tribute Show
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/gladys-knight/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Gladys Knight
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/wayne-newton/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Wayne Newton
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/michael-jackson/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Michael Jackson
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/prince/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Prince
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/las-vegas-raiders/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Las Vegas Raiders
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/exclusive/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Exclusive
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:10}"
                  >
                    Music
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-10" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-10/blogroll.html"></div>
      
              <div id="ad-blogroll10" class="ad-blogroll10"></div>
                                              
                    
      
      <article id="blogroll-123f47a9-7799-4118-9771-7a41e6710f29" class="article"
      >
                  <div class="article__channel--relationships"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/30/dua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:11}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Dua Lipa</span>
                                  <span class="article__hf2 text-uppercase h1">One Kiss Isn&#039;t Enough ...</span>
                                  <span class="article__hf3 text-titlecase h2">Makeout Sesh With Callum</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/30/dua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fdua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:11}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">67</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/30/dua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fdua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont%2F%3Fadid%3Dshare-tw&text=Dua%20Lipa%20and%20Callum%20Turner%20Pack%20On%20PDA%20During%20Shopping%2C%20Coffee%20Date&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:11}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/30/2024 6:34 PM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-a044909f8802a03f5ce8581c0e38430d"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_1add0ec79a8a4ba48bc321da4763ac0c"
            data-container-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/1a/4by3/2024/01/31/1add0ec79a8a4ba48bc321da4763ac0c_md.jpg"
          loading="lazy"
          alt="dua lipa kissing callum turner kissing"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Backgrid</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_1add0ec79a8a4ba48bc321da4763ac0c","status":"published","etag":"d3e5cc05b7cb48774c5ecc287721e01e","created_at":"1706666953914023","updated_at":"1706666969060388","title":"0130 dua lipa kissing callum turner kissing backgrid 2.jpg","mime_type":"image\/jpeg","file_size":"551364","file_etag":"500b454193cd146740aa2c36ac2783af","credit":"Backgrid","linked_refs":["tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"],"gallery_seq":0,"alt_text":"dua lipa kissing callum turner kissing","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-a044909f8802a03f5ce8581c0e38430d-->

    <section
              id="cb-87e8dfbaaaccbd9c0bf5f1ec5273a6f4"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/dua-lipa/"><strong>Dua Lipa</strong></a> and <a href="https://www.tmz.com/people/callum-turner/"><strong>Callum Turner</strong></a> look smitten ... packing on the PDA while out shopping and grabbing coffee.</p>
      </section><!--/#cb-87e8dfbaaaccbd9c0bf5f1ec5273a6f4-->

    <section
              id="cb-18b7a7dd68ae1fdbce36934a9bb81b9b"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The "One Kiss" singer and her British actor boyfriend were all over each other Tuesday in Los Angeles' Larchmont Village.</p>
      </section><!--/#cb-18b7a7dd68ae1fdbce36934a9bb81b9b-->

    <section
              id="cb-df1c64155360e5db27534e8634662461"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_e216fa22204545cead2aa59778f7a094"
            data-container-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/e2/4by3/2024/01/31/e216fa22204545cead2aa59778f7a094_md.jpg"
          loading="lazy"
          alt="dua lipa kissing callum turner kissing"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Backgrid</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_e216fa22204545cead2aa59778f7a094","status":"published","etag":"3e19b66a16c0f70db81f3259ce20e12a","created_at":"1706666956641233","updated_at":"1706666971882355","title":"0130 dua lipa kissing callum turner kissing backgrid.jpg","mime_type":"image\/jpeg","file_size":"474886","file_etag":"cf7bd8e2b9de3466995c03fbab6e0765","credit":"Backgrid","linked_refs":["tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"],"gallery_seq":0,"alt_text":"dua lipa kissing callum turner kissing","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-df1c64155360e5db27534e8634662461-->

    <section
              id="cb-eb6feffd1d6bf00c759fba489cb6f022"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Dua and Callum were kissing, hugging and smiling as they picked up some java and did a little bit of shopping.</p>
      </section><!--/#cb-eb6feffd1d6bf00c759fba489cb6f022-->

    <section
              id="cb-b01b9b7b4bd4f9c7f4e9d132b58670d9"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default canvas-video-block--aside "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1510901146-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-b01b9b7b4bd4f9c7f4e9d132b58670d9-->

    <section
              id="cb-9d5afbc36f19221cc5c33975e1325aa8"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>As you can see, they look like a super happy couple in the very early stages of a romance ... which is exactly where they are.</p>
      </section><!--/#cb-9d5afbc36f19221cc5c33975e1325aa8-->

    <section
              id="cb-010c735fa5907044988bdf6d9dd83cd0"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_8b29c8e57d7048329ae42c4e509e3022"
            data-container-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/8b/4by3/2024/01/31/8b29c8e57d7048329ae42c4e509e3022_md.jpg"
          loading="lazy"
          alt="dua lipa kissing callum turner kissing"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Backgrid</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_8b29c8e57d7048329ae42c4e509e3022","status":"published","etag":"0a349725ec2528312132cc8adcd0f752","created_at":"1706666955472764","updated_at":"1706666964009901","title":"0130 dua lipa kissing callum turner kissing backgrid 4.jpg","mime_type":"image\/jpeg","file_size":"427376","file_etag":"0d7f125ca48b46e2d023287fd29fc38b","credit":"Backgrid","linked_refs":["tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"],"gallery_seq":0,"alt_text":"dua lipa kissing callum turner kissing","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-010c735fa5907044988bdf6d9dd83cd0-->

    <section
              id="cb-e693096d9a819531910b780e2ec92467"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Ever the gentleman, Callum kept an arm around Dua's shoulder and he ever carried their shopping bags. It's 2024 and chivalry is very much alive, even in L.A.</p>
      </section><!--/#cb-e693096d9a819531910b780e2ec92467-->

    <section
              id="cb-97d40ef77b3c99452133711e0e2de234"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_121521edf80f4b2ab0d4d7282d5f273f"
            data-container-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/12/4by3/2024/01/31/121521edf80f4b2ab0d4d7282d5f273f_md.jpg"
          loading="lazy"
          alt="dua lipa kissing callum turner kissing"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Backgrid</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_121521edf80f4b2ab0d4d7282d5f273f","status":"published","etag":"8069e23bd69b2e0379085c465358e789","created_at":"1706666954057463","updated_at":"1706666966598990","title":"0130 dua lipa kissing callum turner kissing backgrid 3.jpg","mime_type":"image\/jpeg","file_size":"471503","file_etag":"7d780b378f84ab57f07947f65f69f4ea","credit":"Backgrid","linked_refs":["tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"],"gallery_seq":0,"alt_text":"dua lipa kissing callum turner kissing","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-97d40ef77b3c99452133711e0e2de234-->

    <section
              id="cb-44b466b331ff9339795c62343de407c6"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>This PDA sesh is the second time we've seen Dua and Callum making out this month ... last time, <a href="https://www.tmz.com/2024/01/17/dua-lipa-kisses-callum-turner-pda-sushi-park-date-night/"><strong>they were kissing</strong></a> outside a super popular West Hollywood sushi spot as they made their relationship official.</p>
      </section><!--/#cb-44b466b331ff9339795c62343de407c6-->

    <section
              id="cb-bb933c481456c38356286e0d3d25e409"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-0958f3ea-6ea6-44de-a0ca-0af43ce5757e"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2024/01/17/dua-lipa-callum-turner-pda-kissing-sushi-photos/"
        data-node-ref="tmz:gallery:0958f3ea-6ea6-44de-a0ca-0af43ce5757e"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/f9/4by3/2024/01/31/f9945eb34efd4a54a95163bd3b06b400_md.jpg"
            alt="Dua Lipa Kisses Callum Turner During Sushi Date Night"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">PDA Pics</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
                  <span class="media-credit gallery-block__media-credit">Backgrid</span>
              </a>
    </div>
        </section><!--/#cb-bb933c481456c38356286e0d3d25e409-->

    <section
              id="cb-4266698eb2824cbbf8adc09af079856b"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Safe to say Dua and Callum are off to a hot start.</p>
      </section><!--/#cb-4266698eb2824cbbf8adc09af079856b-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/30/dua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fdua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:11}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/30/dua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fdua-lipa-callum-turner-pda-making-out-date-shopping-coffee-larchmont%2F%3Fadid%3Dshare-tw&text=Dua%20Lipa%20and%20Callum%20Turner%20Pack%20On%20PDA%20During%20Shopping%2C%20Coffee%20Date&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:11}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/15/dua-lipa-confirms-relationship-couple-callum-turner-slow-dance/"
                        data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:11}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/28/16by9/2024/01/15/28aca3da28074c4caf3b47751039ead1_xs.jpg" loading="lazy" alt="Dua Lipa Seems to Confirm Relationship with Callum Turner After Slow Dance">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Dua Lipa Seems to Confirm Relationship with Callum Turner After Slow Dance
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/11/dua-lipa-slow-dance-mystery-man-masters-of-the-air-premiere-party-callum-turner/"
                        data-node-ref="tmz:article:123f47a9-7799-4118-9771-7a41e6710f29"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:11}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/b3/16by9/2024/01/11/b3dd9289c0f34e30a98eb081f13076e9_xs.jpg" loading="lazy" alt="Dua Lipa Slow Dances With Mystery Man at &#039;Masters of the Air&#039; Premiere Party">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Dua Lipa Slow Dances With Mystery Man at &#039;Masters of the Air&#039; Premiere Party
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/callum-turner/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    Callum Turner
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/dua-lipa/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    Dua Lipa
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/tv/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    TV
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/relationships/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    Relationships
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/movies/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    Movies
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/couples/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    Couples
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:11}"
                  >
                    Music
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-11" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-11/blogroll.html"></div>
      
              <div id="ad-blogroll11" class="ad-blogroll11"></div>
                                              
                    
      
      <article id="blogroll-8abf859a-67b2-4c62-b989-c5d53b935872" class="article"
      >
                  <div class="article__channel--espanol"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/30/la-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:12}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">El nuevo tatuaje Chrisean Rock</span>
                                  <span class="article__hf2 text-uppercase h1">es 100% real</span>
                                  <span class="article__hf3 text-none h2">Según la tienda de tatuajes</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                              <li>
                  <div class="media-swipe media-swipe--blogroll">Exclusivo</div>
                </li>
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/30/la-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fla-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:12}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">14</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/30/la-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fla-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes%2F%3Fadid%3Dshare-tw&text=El%20nuevo%20tatuaje%20de%20Blueface%20de%20Chrisean%20Rock%20es%20100%25%20real&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:12}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/30/2024 5:54 PM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-067e9390f0f1fd98fa0bd9beb089035d"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  canvas-block-is-first "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/1d/16by9/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:ac0e6b58-41da-4427-88ae-5dcf18aa9f9c"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">uno por blue</span>
        </footer>
                    <span class="media-credit video-block__media-credit">Lakimii Tattoo Shop</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Chrisean Rock's New Blueface Ink 100% Real, Says Tattoo Shop",
        "description": "Chrisean Rock showed off some fresh ink last week that bared the mug of her on-and-off boyfriend, Blueface, and while some thought it wasn't real ... we're being told otherwise.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/1d/4by3/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_xl.jpg",
            "https://imagez.tmz.com/image/1d/1by1/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_xl.jpg",
            "https://imagez.tmz.com/image/1d/16by9/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-31T01:15:36Z",
                  "duration": "PT0M25S",
                "uploadDate": "2024-01-30T23:02:58Z",
        "dateCreated": "2024-01-30T23:02:58Z",
        "dateModified": "2024-01-31T01:20:21Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/c3/o/2024/01/30/c38e23920ba845b692b75be03b15d4f5.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-30-013024-chrisean-1768226-890/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-image-holder');
            var footer = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832'), {
                        onObserve: function() {
              document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-485780832-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-30-013024-chrisean-1768226-890/',
                  null,
                  'tmz:video:ac0e6b58-41da-4427-88ae-5dcf18aa9f9c',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-067e9390f0f1fd98fa0bd9beb089035d-->

    <section
              id="cb-ecaa49f7c716453cf6eecfffd0c97030"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/chrisean-rock/"><strong>Chrisean Rock</strong></a> mostró un poco de tinta fresca la semana pasada, revelando la cara de su novio,<a href="https://www.tmz.com/people/blueface/"><strong> Blueface</strong></a>, y mientras algunos pensaban que no era real... nos dicen todo lo contrario.</p>
      </section><!--/#cb-ecaa49f7c716453cf6eecfffd0c97030-->

    <section
              id="cb-4213b3c0abf5d6c0df5c88a37d27fc11"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>El propietario de la tienda de tatuajes Lakimii -donde Chrisean se hizo este trabajo- nos dice que la estrella de la realidad se acercó para este nuevo tatuaje el sábado pasado y mientras que normalmente tienen una política contra la aguja en la cara de alguien, hicieron una excepción para Chrisean.</p>
      </section><!--/#cb-4213b3c0abf5d6c0df5c88a37d27fc11-->

    <section
              id="cb-854fa4b4db1522f632c9ffc2eec84039"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240130_86a9d3a05b9e481bbd8e764509dbd94d"
            data-container-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/86/4by3/2024/01/30/86a9d3a05b9e481bbd8e764509dbd94d_md.jpg"
          loading="lazy"
          alt="Chrisean face tattoo"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Lakimii Tattoo Shop</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240130_86a9d3a05b9e481bbd8e764509dbd94d","status":"published","etag":"f84ce20767ab0e035aaab5647872ae4b","created_at":"1706656071107793","updated_at":"1706656078014469","title":"0130-Chrisean-Face-Tattoo-1.jpg","mime_type":"image\/jpeg","file_size":"664389","file_etag":"9d1bafea2bed1b9bbbc4ae0d1d49f2ed","credit":"Lakimii Tattoo Shop","linked_refs":["tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"],"gallery_seq":0,"alt_text":"Chrisean face tattoo","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-854fa4b4db1522f632c9ffc2eec84039-->

    <section
              id="cb-aa71676871553830470477ceaf9e4f96"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Nos dicen que este trabajo tomó alrededor de 4 horas en total para completar, lo cual es evidente en lo detallado y elaborado que es. No se sabe si le cobraron o no, pero el propietario, Timo, nos dice que ya le han hecho tatuajes en el pasado, así que están familiarizados con ella como cliente.</p>
      </section><!--/#cb-aa71676871553830470477ceaf9e4f96-->

    <section
              id="cb-56fa63a5cf4970641a18befc9ffb89ba"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>De todos modos, puedes echarle un vistazo al tatuaje con más detalle aquí. Mientras que ha habido algunos creen que es falso, Timo insiste en que es real.</p>
      </section><!--/#cb-56fa63a5cf4970641a18befc9ffb89ba-->

    <section
              id="cb-3673481054f27278aca15c01c8b39e86"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240130_1e46f5873e434d1f966fbd488c128213"
            data-container-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/1e/4by3/2024/01/30/1e46f5873e434d1f966fbd488c128213_md.jpg"
          loading="lazy"
          alt="chisean rock blueface tattoo"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Lakimii Tattoo Shop</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240130_1e46f5873e434d1f966fbd488c128213","status":"published","etag":"aef211b539989a7e85b881996db6d2bb","created_at":"1706655188243276","updated_at":"1706655979464489","title":"0130 chisean rock blueface tattoo.jpg","mime_type":"image\/jpeg","file_size":"515671","file_etag":"5d3a0148801c30163fda14d99228b58d","credit":"Lakimii Tattoo Shop","linked_refs":["tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"],"gallery_seq":0,"alt_text":"chisean rock blueface tattoo","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-3673481054f27278aca15c01c8b39e86-->

    <section
              id="cb-dd2d61df43ba2953fd18e9063c992dc1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Ciertamente se pueden ver sus poros abiertos y la tinta llenándolos. Además, su cabeza está ligeramente afeitada alrededor de la zona en cuestión, lo que es un signo revelador de que está a punto de hacerse un tatuaje.</p>
      </section><!--/#cb-dd2d61df43ba2953fd18e9063c992dc1-->

    <section
              id="cb-05ca5bafcef5e3e7f7e1296d11d01b8f"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Hay un puñado de personas que todavía son escépticos acerca del tatuaje, pero por lo que parece, Chrisean parece haber sido atacada de nuevo, esto después de volver a dedicarse a Blueface, que <a href="https://www.tmz.com/2024/01/15/blueface-not-scheduled-release-released-jail-summer-probation-violation/"><strong>está actualmente entre las rejas</strong></a> por una violación de libertad condicional en Los Ángeles.</p>
      </section><!--/#cb-05ca5bafcef5e3e7f7e1296d11d01b8f-->

    <section
              id="cb-ebad67862d0c8c22cccdad489a5af8b0"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-ec7a020a-2af5-4dad-a8ab-999ce37a8ab0"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2020/02/18/celebrity-face-tattoos-guess-who/"
        data-node-ref="tmz:gallery:ec7a020a-2af5-4dad-a8ab-999ce37a8ab0"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/34/4by3/2020/02/17/3420aa19d286452aa11e969ab651b7f3_md.jpg"
            alt="Celebrity Face Tattoos -- Guess Who!"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">¡adivina a quién va dedicado!</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
              </a>
    </div>
        </section><!--/#cb-ebad67862d0c8c22cccdad489a5af8b0-->

    <section
              id="cb-bdfa20ae7e9fa14a2feff61a59744edd"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Ella ciertamente está esperando a que sea puesto en libertad y sabemos que Lakimii también está emocionado. Nos dicen que el negocio está en auge para ellos desde el trabajo de tinta que hicieron para ella.</p>
      </section><!--/#cb-bdfa20ae7e9fa14a2feff61a59744edd-->

    <section
              id="cb-c39568fcedbe9884001174c3d432f82a"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Y escucha esto, nos han dicho que el propio Blue también tiene planes de venir a entintarse, aunque no se sabe cuándo exactamente podría suceder.</p>
      </section><!--/#cb-c39568fcedbe9884001174c3d432f82a-->

    <section
              id="cb-72be473cbca630a87855779b201e3647"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">tmz investiga</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-1660148599-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-72be473cbca630a87855779b201e3647-->

    <section
              id="cb-d38e39a393d266438e367d2a42b61db5"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Como dicen... la pareja que se tatúa junta, permanece junta... o algo así.</p>
      </section><!--/#cb-d38e39a393d266438e367d2a42b61db5-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/30/la-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fla-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:12}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/30/la-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fla-nueva-tinta-blueface-de-chrisean-rock-es-100-percent-real-segun-la-tienda-de-tatuajes%2F%3Fadid%3Dshare-tw&text=El%20nuevo%20tatuaje%20de%20Blueface%20de%20Chrisean%20Rock%20es%20100%25%20real&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:8abf859a-67b2-4c62-b989-c5d53b935872"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:12}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/chrisean-rock/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    Chrisean Rock
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/blueface/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    Blueface
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/you-might-want-to-rethink/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    You Might Want to Rethink
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/exclusive/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    Exclusive
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/controversial-s-t/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    Controversial S#!T
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/tattoo/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:12}"
                  >
                    Tattoo
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-12" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-12/blogroll.html"></div>
      
              <div id="ad-blogroll12" class="ad-blogroll12"></div>
                                              
                    
      
      <article id="blogroll-05005a27-703f-416a-8d13-bb860df9b4d0" class="article"
      >
                  <div class="article__channel--music"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/30/beach-boys-brian-wilson-wife-melinda-dead-dies/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:13}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Beach Boys&#039; Brian Wilson</span>
                                  <span class="article__hf2 text-uppercase h1">Wife Melinda Dead at 77</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/30/beach-boys-brian-wilson-wife-melinda-dead-dies/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fbeach-boys-brian-wilson-wife-melinda-dead-dies%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:13}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">591</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/30/beach-boys-brian-wilson-wife-melinda-dead-dies/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fbeach-boys-brian-wilson-wife-melinda-dead-dies%2F%3Fadid%3Dshare-tw&text=Beach%20Boys%20Frontman%20Brian%20Wilson%27s%20Wife%20Melinda%20Dead%20at%2077&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:13}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/30/2024 5:50 PM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-31c54d5cd51fe876fd7e48811517622d"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  canvas-block-is-first "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_e7cbebe8253945b48a8d0e0627bb6f6a"
            data-container-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/e7/4by3/2024/01/31/e7cbebe8253945b48a8d0e0627bb6f6a_md.jpg"
          loading="lazy"
          alt="brain wilson Melinda Ledbetter"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_e7cbebe8253945b48a8d0e0627bb6f6a","status":"published","etag":"a69d6f7a627e8ce3b9a157405638c885","created_at":"1706663379762928","updated_at":"1706664159261077","title":"0130 brain wilson Melinda Ledbetter getty.jpg","mime_type":"image\/jpeg","file_size":"994545","file_etag":"dcafa55ac0c3c717efdaf9bafa210c30","credit":"Getty","linked_refs":["tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"],"gallery_seq":0,"alt_text":"brain wilson Melinda Ledbetter","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-31c54d5cd51fe876fd7e48811517622d-->

    <section
              id="cb-c17c67549583fc41e2e34cbaffd8ec3c"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Beach Boys frontman <a href="https://www.tmz.com/people/brian-wilson/"><strong>Brian Wilson</strong></a> says his heart is broken ... because his wife of 28 years has tragically died.</p>
      </section><!--/#cb-c17c67549583fc41e2e34cbaffd8ec3c-->

    <section
              id="cb-0036b10baa446dbb3a4a47c18e49e95a"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Brian just announced the death of his spouse, <strong>Melinda Kae Ledbetter Wilson</strong> ... and their kids say she died peacefully Monday at home. An official cause of death is unknown... and the exact circumstances surrounding her death haven't been revealed either.</p>
      </section><!--/#cb-0036b10baa446dbb3a4a47c18e49e95a-->

    <section
              id="cb-f143faa66a29a487104bd187cef6d26e"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_fa6b5ac27a43440f90c7480249a62a39"
            data-container-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/fa/4by3/2024/01/31/fa6b5ac27a43440f90c7480249a62a39_md.jpg"
          loading="lazy"
          alt="brain wilson Melinda Ledbetter"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_fa6b5ac27a43440f90c7480249a62a39","status":"published","etag":"bd87dd888691393760ce96d9c9da698a","created_at":"1706663497499580","updated_at":"1706664159230906","title":"0130 brain wilson Melinda Ledbetter getty 2.jpg","mime_type":"image\/jpeg","file_size":"707791","file_etag":"14ce9fbb975fdf9d23ceea00e088c796","credit":"Getty","linked_refs":["tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"],"gallery_seq":0,"alt_text":"brain wilson Melinda Ledbetter","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-f143faa66a29a487104bd187cef6d26e-->

    <section
              id="cb-1418a9a574c086c803767608bff8edc9"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>In a heartfelt Instagram post, Brian says ... "Melinda was more than my wife. She was my savior. She gave me the emotional security I needed to have a career."</p>
      </section><!--/#cb-1418a9a574c086c803767608bff8edc9-->

    <section
              id="cb-d63d5b13d85b1a91358201f9cea7a54b"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Brian continues ... "She encouraged me to make the music that was closest to my heart. She was my anchor. She was everything for us."</p>
      </section><!--/#cb-d63d5b13d85b1a91358201f9cea7a54b-->

    <section
              id="cb-e7e52856c7d41490a8bc116f8615c195"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The couple adopted five children together and Brian says they are all in tears and are lost.</p>
      </section><!--/#cb-e7e52856c7d41490a8bc116f8615c195-->

    <section
              id="cb-97a54fb51ad5f92ded6d1fa5da0e25af"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240131_66298e78a0544b698efca78b4e27f903"
            data-container-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/66/4by3/2024/01/31/66298e78a0544b698efca78b4e27f903_md.jpg"
          loading="lazy"
          alt="brain wilson Melinda Ledbetter wedding"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Getty</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240131_66298e78a0544b698efca78b4e27f903","status":"published","etag":"a582a04751a7ae4735f5dc8df413a45f","created_at":"1706664148827070","updated_at":"1706664154107138","title":"0130 brain wilson Melinda Ledbetter wedding getty.jpg","mime_type":"image\/jpeg","file_size":"660769","file_etag":"ef36f49183e112634cca48790de282f3","credit":"Getty","linked_refs":["tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"],"gallery_seq":0,"alt_text":"brain wilson Melinda Ledbetter wedding","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-97a54fb51ad5f92ded6d1fa5da0e25af-->

    <section
              id="cb-43758873a11768593203f214afe23bb1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Brian and Melinda first met way back in 1986 when she sold him a Cadillac ... dating on and off for a couple years until rekindling their romance in 1992 and getting hitched in 1995 at Wayfarers Chapel in Rancho Palos Verdes, CA.</p>
      </section><!--/#cb-43758873a11768593203f214afe23bb1-->

    <section
              id="cb-bbf6c8ea4b1af0b0b8ad82b454be5f71"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Their relationship even inspired a biopic ... 2014's "Love &amp; Mercy" starring <a href="https://www.tmz.com/people/john-cusack/"><strong>John Cusack</strong></a> as Brian and<strong> </strong><a href="https://www.tmz.com/people/elizabeth-banks/"><strong>Elizabeth Banks</strong></a><strong> </strong>as Melinda.</p>
      </section><!--/#cb-bbf6c8ea4b1af0b0b8ad82b454be5f71-->

    <section
              id="cb-e37cd67a8e77a852fe86da452da5902c"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-e37cd67a8e77a852fe86da452da5902c-1951372597-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-e37cd67a8e77a852fe86da452da5902c-1951372597-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-e37cd67a8e77a852fe86da452da5902c-1951372597-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-e37cd67a8e77a852fe86da452da5902c-1951372597-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('lioWzrpCtGQ', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-e37cd67a8e77a852fe86da452da5902c-1951372597-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-e37cd67a8e77a852fe86da452da5902c-->

    <section
              id="cb-140084fb606b539d1d0362e3aca7f89d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Briana and Melinda's kids are remembering her as "a force of nature and one of the strongest women you could come by. She was not only a model, our fathers savior, and a mother, she was a woman empowered by her spirit with a mission to better everyone she touched."</p>
      </section><!--/#cb-140084fb606b539d1d0362e3aca7f89d-->

    <section
              id="cb-f4236adab7f8ea047741ae20dd8b516f"
        class="canvas-block canvas-block-blogroll canvas-instagram-media-block canvas-instagram-media-block-blogroll canvas-instagram-media-block--default  "
        >
        <div id="cb-f4236adab7f8ea047741ae20dd8b516f-816471459-target" class="d-flex justify-content-center">
  <p>Waiting for your permission to load the Instagram Media.</p>
</div>

<script id="cb-f4236adab7f8ea047741ae20dd8b516f-816471459-accepted" type="text/x-consent-element">
  <blockquote class="instagram-media"
    data-instgrm-captioned    data-instgrm-permalink="https://www.instagram.com/p/C2vSn-zO_32/"
    data-instgrm-version="14"
    style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
  >
    <div style="padding:16px;">
        <a href="https://www.instagram.com/p/C2vSn-zO_32/"
            style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
            target="_blank">
            <div style=" display: flex; flex-direction: row; align-items: center;">
                <div
                    style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;">
                </div>
                <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                    <div
                        style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;">
                    </div>
                    <div
                        style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;">
                    </div>
                </div>
            </div>
            <div style="padding: 19% 0;"></div>
            <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"
                    xmlns:xlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                                <path
                                    d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div style="padding-top: 8px;">
                <div
                    style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
                    View this post on Instagram</div>
            </div>
            <div style="padding: 12.5% 0;"></div>
            <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                <div>
                    <div
                        style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);">
                    </div>
                    <div
                        style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;">
                    </div>
                    <div
                        style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);">
                    </div>
                </div>
                <div style="margin-left: 8px;">
                    <div
                        style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;">
                    </div>
                    <div
                        style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)">
                    </div>
                </div>
                <div style="margin-left: auto;">
                    <div
                        style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);">
                    </div>
                    <div
                        style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);">
                    </div>
                    <div
                        style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);">
                    </div>
                </div>
            </div>
            <div
                style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                <div
                    style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;">
                </div>
                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;">
                </div>
            </div>
        </a>
    </div>
</blockquote>
</script>

<script id="cb-f4236adab7f8ea047741ae20dd8b516f-816471459-rejected" type="text/x-consent-element">
  <p><strong>Instagram Media Unavailable</strong></p>
</script>

<script>
wbq.push(function renderInstagramMediaBlock() {
  var response = 'unknown';
  var target = document.getElementById('cb-f4236adab7f8ea047741ae20dd8b516f-816471459-target');

  function accept() {
    if (response === 'accepted') {
      return;
    }

    target.innerHTML = document.getElementById('cb-f4236adab7f8ea047741ae20dd8b516f-816471459-accepted').innerHTML;
    window.TMZ.utils.loadInstagramJs().then(function (instgrm) {
      instgrm.Embeds.process();
      setTimeout(function () {
        // only apply to the target, not the entire document
        $('#cb-f4236adab7f8ea047741ae20dd8b516f-816471459-target .instagram-media-rendered').addClass('ratio');
      }, 1000);
    }).catch(reject);

    response = 'accepted';
  }

  function reject() {
    if (response === 'rejected') {
      return;
    }

    target.innerHTML = document.getElementById('cb-f4236adab7f8ea047741ae20dd8b516f-816471459-rejected').innerHTML;
    response = 'rejected';
  }

  watchConsent(function (canUse) {
    canUse('instagram') ? accept() : reject();
  });
});
</script>
      </section><!--/#cb-f4236adab7f8ea047741ae20dd8b516f-->

    <section
              id="cb-5bae196847b0454a4addcb3361b744a9"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>They say she taught them lasting lessons, like ... "How to take care of the person next to you with out expecting anything in return, how to find beauty in the darkest of places, and how to live life as your truest self with honesty and pride."</p>
      </section><!--/#cb-5bae196847b0454a4addcb3361b744a9-->

    <section
              id="cb-b01b9b7b4bd4f9c7f4e9d132b58670d9"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default canvas-video-block--aside "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-424893832-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-b01b9b7b4bd4f9c7f4e9d132b58670d9-->

    <section
              id="cb-007bde05e6df37cc75b01feaeb6322cb"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Melinda was 77.</p>
      </section><!--/#cb-007bde05e6df37cc75b01feaeb6322cb-->

    <section
              id="cb-5952bcce218791c4e1a1c3dc2322aaa4"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>RIP</p>
      </section><!--/#cb-5952bcce218791c4e1a1c3dc2322aaa4-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/30/beach-boys-brian-wilson-wife-melinda-dead-dies/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fbeach-boys-brian-wilson-wife-melinda-dead-dies%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:13}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/30/beach-boys-brian-wilson-wife-melinda-dead-dies/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fbeach-boys-brian-wilson-wife-melinda-dead-dies%2F%3Fadid%3Dshare-tw&text=Beach%20Boys%20Frontman%20Brian%20Wilson%27s%20Wife%20Melinda%20Dead%20at%2077&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:13}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/26/harry-connick-sr-dead-dies/"
                        data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:13}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/da/16by9/2024/01/26/da8bb8a82ba74a188bec2a338036dee4_xs.jpg" loading="lazy" alt="Harry Connick Jr.&#039;s Father Dies at 97 in Louisiana">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Harry Connick Jr.&#039;s Father Dies at 97 in Louisiana
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/25/model-masuimi-max-dead-dies-maxim-playboy/"
                        data-node-ref="tmz:article:05005a27-703f-416a-8d13-bb860df9b4d0"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:13}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/69/16by9/2024/01/25/6906a2a6faec4dd4b09197596b396f22_xs.jpg" loading="lazy" alt="Playboy, Maxim Model Masuimi Max Dead at 45">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Playboy, Maxim Model Masuimi Max Dead at 45
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/brian-wilson/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    Brian Wilson
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/john-cusack/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    John Cusack
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/elizabeth-banks/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    Elizabeth Banks
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/rip/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    RIP
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/movies/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    Movies
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/celebrity-death/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    Celebrity Death
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:13}"
                  >
                    Music
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-13" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-13/blogroll.html"></div>
      
              <div id="ad-blogroll13" class="ad-blogroll13"></div>
                                              
                    
      
      <article id="blogroll-942653c1-31dd-4a3c-b666-fb08e813aa8c" class="article"
      >
                  <div class="article__channel--hip-hop"></div>
        
                  <div class="article__theme--hip-hop"></div>
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/30/trippie-redd-denies-devil-worship-instagram-satan-love-scars/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:14}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Trippie Redd</span>
                                  <span class="article__hf2 text-uppercase h1">I&#039;m No F***** Devil Worshipper ...</span>
                                  <span class="article__hf3 text-none h2">Where You Getting That?!?</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/30/trippie-redd-denies-devil-worship-instagram-satan-love-scars/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Ftrippie-redd-denies-devil-worship-instagram-satan-love-scars%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:14}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/30/trippie-redd-denies-devil-worship-instagram-satan-love-scars/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Ftrippie-redd-denies-devil-worship-instagram-satan-love-scars%2F%3Fadid%3Dshare-tw&text=Trippie%20Redd%20Denies%20Devil%20Worship%2C%20Unsure%20Where%20Allegations%20Started&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:14}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/30/2024 5:41 PM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-08ecfd721d5cee548cd355ee059973da"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  canvas-block-is-first "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/2d/16by9/2024/01/30/2db608017aa44598bc35ff11ac2f9d2a_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:6f89dbd7-21e8-4661-9651-209e8f2d0113"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">JUST A LIFESTYLE!!!</span>
        </footer>
                </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Trippie Redd Denies Devil Worship, Unsure Where Allegations Started",
        "description": "Trippie Redd is distancing himself from all things demonic ... this after YEARS of, in his eyes, unfounded accusations he's a pawn of Satan!!!",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/2d/4by3/2024/01/30/2db608017aa44598bc35ff11ac2f9d2a_xl.jpg",
            "https://imagez.tmz.com/image/2d/1by1/2024/01/30/2db608017aa44598bc35ff11ac2f9d2a_xl.jpg",
            "https://imagez.tmz.com/image/2d/16by9/2024/01/30/2db608017aa44598bc35ff11ac2f9d2a_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-31T01:41:08Z",
                  "duration": "PT1M54S",
                "uploadDate": "2024-01-30T23:05:13Z",
        "dateCreated": "2024-01-30T23:05:13Z",
        "dateModified": "2024-01-31T02:32:38Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/85/o/2024/01/30/85ec30eaa92d426e9b8ebcdcb4a55ebd.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-30-013024-trippie-redd-v2-1768228-934/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-image-holder');
            var footer = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601'), {
                        onObserve: function() {
              document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-6f89dbd7-21e8-4661-9651-209e8f2d0113-244226601-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-30-013024-trippie-redd-v2-1768228-934/',
                  null,
                  'tmz:video:6f89dbd7-21e8-4661-9651-209e8f2d0113',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-08ecfd721d5cee548cd355ee059973da-->

    <section
              id="cb-b034af58a12825e87b1b16ee36b58cc9"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/trippie-redd/"><strong>Trippie Redd</strong></a> is distancing himself from all things demonic ... this after YEARS of, in his eyes, unfounded accusations he's a pawn of Satan!!!</p>
      </section><!--/#cb-b034af58a12825e87b1b16ee36b58cc9-->

    <section
              id="cb-ea712d3741a09db7361b43da86e148ef"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>An incensed Trippie launched into a tirade Tuesday, laying into anyone who wanted to attach any antichrist connotation to his name.</p>
      </section><!--/#cb-ea712d3741a09db7361b43da86e148ef-->

    <section
              id="cb-f0c41089e6743fed83c7a777c47e3bf0"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>In the posted video, Trippie fumed, "Stop saying I worship the f****** devil!!! I can't wear all black? I've been wearing all black -- that's my thing!!!"</p>
      </section><!--/#cb-f0c41089e6743fed83c7a777c47e3bf0-->

    <section
              id="cb-81d5fa6806333a3e2e7733e1d14e87de"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-81d5fa6806333a3e2e7733e1d14e87de-1103666862-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-81d5fa6806333a3e2e7733e1d14e87de-1103666862-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-81d5fa6806333a3e2e7733e1d14e87de-1103666862-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-81d5fa6806333a3e2e7733e1d14e87de-1103666862-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('A7q3bgoEQEY', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-81d5fa6806333a3e2e7733e1d14e87de-1103666862-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-81d5fa6806333a3e2e7733e1d14e87de-->

    <section
              id="cb-3f80121a43e5469ccad432bbae1c8ede"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Now, according to him, he's just a Goth guy from Ohio who likes black cats and furniture ... born to be the "sad-boy." He also explained his many face tattoos are simply the type of art he prefers.</p>
      </section><!--/#cb-3f80121a43e5469ccad432bbae1c8ede-->

    <section
              id="cb-398113e6cbb183ebbfbdaa73cf216e63"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Trippie was adamant he had no idea where fans were getting the satanic sticks and stones -- but it's kinda hard to deny the <a href="https://www.tmz.com/2023/06/19/trippie-redd-xxxtentacion-fuck-love-lyrics-diamond-bad-vibes/"><strong>Diamond-selling rapper</strong></a> has leaned into the occult throughout his career ... like the time he adopted '666' for his brand.</p>
      </section><!--/#cb-398113e6cbb183ebbfbdaa73cf216e63-->

    <section
              id="cb-cdbaae358fd684588b6a6d7fb52e9601"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-cdbaae358fd684588b6a6d7fb52e9601-72583619-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-cdbaae358fd684588b6a6d7fb52e9601-72583619-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-cdbaae358fd684588b6a6d7fb52e9601-72583619-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-cdbaae358fd684588b6a6d7fb52e9601-72583619-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('wm4NCHcw0Yk', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-cdbaae358fd684588b6a6d7fb52e9601-72583619-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-cdbaae358fd684588b6a6d7fb52e9601-->

    <section
              id="cb-8f239ad98c8f16b6ef851b4f90ca458d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Or when he released his "Demon Time" music video where he twists his hair into devil horns, and he and <strong>Ski Mask the Slump God</strong> killed people outside a seedy motel.</p>
      </section><!--/#cb-8f239ad98c8f16b6ef851b4f90ca458d-->

    <section
              id="cb-76c88f72dafe9677078160ad453827ed"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--hip-hop  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240130_a249d25c54934c19b72d63edd7287c97"
            data-container-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/a2/4by3/2024/01/30/a249d25c54934c19b72d63edd7287c97_md.jpg"
          loading="lazy"
          alt="meek mill trippie redd comments"
        >
                </div>
                                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240130_a249d25c54934c19b72d63edd7287c97","status":"published","etag":"228fca519e394920eabb9af86f2e08bb","created_at":"1706655580328676","updated_at":"1706655584173785","title":"013024 meek mill trippie redd comments_instagram.jpg","mime_type":"image\/jpeg","file_size":"407381","file_etag":"2dfb5e8d3f0478ef53c537b999bd40a2","gallery_seq":0,"alt_text":"meek mill trippie redd comments","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-76c88f72dafe9677078160ad453827ed-->

    <section
              id="cb-0f238ea7336d55898e707f5e3b40680d"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Even his peers took notice ... <a href="https://www.tmz.com/people/meek-mill/"><strong>Meek Mill</strong></a> publicly roasted Trippie for allegedly having a dark soul and being a snitch a few months ago.</p>
      </section><!--/#cb-0f238ea7336d55898e707f5e3b40680d-->

    <section
              id="cb-4289458b4ae314ad34b0885c2ac97323"
        class="canvas-block canvas-block-blogroll canvas-youtube-video-block canvas-youtube-video-block-blogroll canvas-youtube-video-block--default  "
        >
          <div id="cb-4289458b4ae314ad34b0885c2ac97323-2140967502-target" class="d-flex justify-content-center"></div>

  
  <script id="cb-4289458b4ae314ad34b0885c2ac97323-2140967502-failed" type="text/x-consent-element">
    <p><strong>Unable to render YouTube Video.</strong></p>
  </script>

  <script>
    wbq.push(function renderYoutubeVideoBlock() {
      var $target = $('#cb-4289458b4ae314ad34b0885c2ac97323-2140967502-target');
      var targetWidth = $target.width();

      function initPlayer(onReady) {
          new YT.Player('cb-4289458b4ae314ad34b0885c2ac97323-2140967502-target', {
            height: targetWidth / (16 / 9),
            host: 'https://www.youtube-nocookie.com',
            width: targetWidth,
            events: {
              'onReady': onReady,
            },
            playerVars: {
              'enablejsapi': 1,
              'origin': window.location.origin,
            },
          });
      }

      function cueVideo(e) {
        e.target.cueVideoById('4yz-UEcatBY', 0);
      }

      function fail() {
        $target.html(document.getElementById('cb-4289458b4ae314ad34b0885c2ac97323-2140967502-failed').innerHTML);
      }

      function styleIframe(e) {
        var iframe = e.target.getIframe();
        iframe.classList.add('ratio');
        if (!iframe.getAttribute('width')) {
          iframe.setAttribute('width', targetWidth);
        }
        if (!iframe.getAttribute('height')) {
          iframe.setAttribute('height', targetWidth / (16 / 9));
        }
      }

              window.TMZ.utils.loadYouTubeJs()
          .then(function initYouTubeBlock() {
            initPlayer(function onReady(e) {
              styleIframe(e);
              cueVideo(e);
                          });
          }).catch(fail);
          });
  </script>
      </section><!--/#cb-4289458b4ae314ad34b0885c2ac97323-->

    <section
              id="cb-9d7cecde4da7c3442bf597713784830b"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>And, that was after <strong>DJ Akademiks</strong>' fiery rant aimed at Trippie, <a href="https://www.tmz.com/people/playboi-carti/"><strong>Playboi Carti</strong></a>, and <a href="https://www.tmz.com/people/lil-uzi-vert/"><strong>Lil Uzi Vert</strong></a> for still pushing for shock value tactics after their fans had grown up.</p>
      </section><!--/#cb-9d7cecde4da7c3442bf597713784830b-->

    <section
              id="cb-a6b5a1a4583bd5eea794d2d5338f56e3"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Wherever it all started, Trippie's looking to clear it up once and for all. See ya in church!!!</p>
      </section><!--/#cb-a6b5a1a4583bd5eea794d2d5338f56e3-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/30/trippie-redd-denies-devil-worship-instagram-satan-love-scars/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Ftrippie-redd-denies-devil-worship-instagram-satan-love-scars%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:14}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/30/trippie-redd-denies-devil-worship-instagram-satan-love-scars/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Ftrippie-redd-denies-devil-worship-instagram-satan-love-scars%2F%3Fadid%3Dshare-tw&text=Trippie%20Redd%20Denies%20Devil%20Worship%2C%20Unsure%20Where%20Allegations%20Started&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:14}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2023/08/09/trippie-redd-cheating-sky-morales-instagram-girlfriend/"
                        data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:14}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/35/16by9/2023/08/09/35e4f5ad53b549dd83bdfd96e1ccc6a1_xs.png" loading="lazy" alt="Trippie Redd Admits Cheating on GF Skye Morales in Public Apology">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Trippie Redd Admits Cheating on GF Skye Morales in Public Apology
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2023/06/21/trippie-redd-heart-chains-diamonds-vvs-alex-moss-birthday/"
                        data-node-ref="tmz:article:942653c1-31dd-4a3c-b666-fb08e813aa8c"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:14}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/79/16by9/2023/06/20/795264fa4c6f4a698009cce9ae61d3a8_xs.png" loading="lazy" alt="Trippie Redd Gets $150K Birthday Chains Delivered by Jet Ski to Yacht">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Trippie Redd Gets $150K Birthday Chains Delivered by Jet Ski to Yacht
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/trippie-redd/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:14}"
                  >
                    Trippie redd
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/religion-spirituality/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:14}"
                  >
                    Religion/ Spirituality
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/hip-hop/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:14}"
                  >
                    Hip Hop
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:14}"
                  >
                    Music
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-14" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-14/blogroll.html"></div>
      
              <div id="ad-blogroll14" class="ad-blogroll14"></div>
                                              
                    
      
      <article id="blogroll-658ff4f5-62d2-49c9-8af9-50970798ff0e" class="article"
      >
                  <div class="article__channel--reporting"></div>
        
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/30/chrisean-rock-blueface-tattoo-real-ink-shop-lakimii/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:15}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">Chrisean Rock</span>
                                  <span class="article__hf2 text-none h2">New Blueface Ink ...</span>
                                  <span class="article__hf3 text-uppercase h1">Is 100% Real, So Says Tattoo Shop</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                              <li>
                  <div class="media-swipe media-swipe--blogroll">Exclusive</div>
                </li>
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/30/chrisean-rock-blueface-tattoo-real-ink-shop-lakimii/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fchrisean-rock-blueface-tattoo-real-ink-shop-lakimii%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:15}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">717</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/30/chrisean-rock-blueface-tattoo-real-ink-shop-lakimii/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fchrisean-rock-blueface-tattoo-real-ink-shop-lakimii%2F%3Fadid%3Dshare-tw&text=Chrisean%20Rock%27s%20New%20Blueface%20Ink%20100%25%20Real%2C%20Says%20Tattoo%20Shop&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:15}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/30/2024 5:15 PM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-27a1b570908cd313d0a25f7f0cb97fd1"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  canvas-block-is-first "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/1d/16by9/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:ac0e6b58-41da-4427-88ae-5dcf18aa9f9c"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">Tattoo For Blue</span>
        </footer>
                    <span class="media-credit video-block__media-credit">Lakimii Tattoo Shop</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Chrisean Rock's New Blueface Ink 100% Real, Says Tattoo Shop",
        "description": "Chrisean Rock showed off some fresh ink last week that bared the mug of her on-and-off boyfriend, Blueface, and while some thought it wasn't real ... we're being told otherwise.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/1d/4by3/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_xl.jpg",
            "https://imagez.tmz.com/image/1d/1by1/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_xl.jpg",
            "https://imagez.tmz.com/image/1d/16by9/2024/01/30/1d8f1a8c153c4b3b946e3521322d0b7a_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-31T01:15:36Z",
                  "duration": "PT0M25S",
                "uploadDate": "2024-01-30T23:02:58Z",
        "dateCreated": "2024-01-30T23:02:58Z",
        "dateModified": "2024-01-31T01:20:21Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/c3/o/2024/01/30/c38e23920ba845b692b75be03b15d4f5.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-30-013024-chrisean-1768226-890/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-image-holder');
            var footer = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264'), {
                        onObserve: function() {
              document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-ac0e6b58-41da-4427-88ae-5dcf18aa9f9c-2017274264-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-30-013024-chrisean-1768226-890/',
                  null,
                  'tmz:video:ac0e6b58-41da-4427-88ae-5dcf18aa9f9c',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-27a1b570908cd313d0a25f7f0cb97fd1-->

    <section
              id="cb-93bc1c71508766a10a59cd59537591c9"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/chrisean-rock/"><strong>Chrisean Rock</strong></a> showed off some fresh ink last week that bared the mug of her on-and-off boyfriend, <a href="https://www.tmz.com/people/blueface/"><strong>Blueface</strong></a>, and while some thought it wasn't real ... we're being told otherwise.</p>
      </section><!--/#cb-93bc1c71508766a10a59cd59537591c9-->

    <section
              id="cb-ebc12921ef7c8652c1350b9f6a2b7094"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>The owner of the Lakimii Tattoo Shop in WeHo -- where Chrisean got this job done -- tells us the reality star came by for this new face tat last Saturday ... and while they normally have a policy against needling up someone's face, they made an exception for Chrisean.</p>
      </section><!--/#cb-ebc12921ef7c8652c1350b9f6a2b7094-->

    <section
              id="cb-854fa4b4db1522f632c9ffc2eec84039"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240130_86a9d3a05b9e481bbd8e764509dbd94d"
            data-container-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/86/4by3/2024/01/30/86a9d3a05b9e481bbd8e764509dbd94d_md.jpg"
          loading="lazy"
          alt="Chrisean face tattoo"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Lakimii Tattoo Shop</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240130_86a9d3a05b9e481bbd8e764509dbd94d","status":"published","etag":"f84ce20767ab0e035aaab5647872ae4b","created_at":"1706656071107793","updated_at":"1706656078014469","title":"0130-Chrisean-Face-Tattoo-1.jpg","mime_type":"image\/jpeg","file_size":"664389","file_etag":"9d1bafea2bed1b9bbbc4ae0d1d49f2ed","credit":"Lakimii Tattoo Shop","linked_refs":["tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"],"gallery_seq":0,"alt_text":"Chrisean face tattoo","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-854fa4b4db1522f632c9ffc2eec84039-->

    <section
              id="cb-b6ca52b0b707c1ab06763cf3e9d5edfa"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>We're told this work took about 4 hours in total to complete ... which is evident in how detailed and elaborate it is. No word on whether they charged her or not -- but the owner, <strong>Timo</strong>, tells us they've done tats for her in the past ... so they're familiar with her as a client.</p>
      </section><!--/#cb-b6ca52b0b707c1ab06763cf3e9d5edfa-->

    <section
              id="cb-bcd54fa09015c10cb0cd76bb1081b3e3"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Anyway ... you can take a look at the tattoo in more detail here. While there've been some who've believed this may have been a henna thing ... Timo insists it's the real McCoy.</p>
      </section><!--/#cb-bcd54fa09015c10cb0cd76bb1081b3e3-->

    <section
              id="cb-3673481054f27278aca15c01c8b39e86"
        class="canvas-block canvas-block-blogroll canvas-image-block canvas-image-block-blogroll canvas-image-block--default  "
        >
                              
          <div class="image-block">
                  <a
            class="js-click-image js-track-link image-lightbox-preview"
            data-node-ref="tmz:image-asset:image_jpg_20240130_1e46f5873e434d1f966fbd488c128213"
            data-container-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"            data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;image&quot;}"
          >
          <div class="img-wrapper">
            <div class="magnify-icon icon icon-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs/><path d="M10.5 0a9.5 9.5 0 016.91 16.02L23 21.76a1 1 0 11-1.44 1.4l-5.66-5.84A9.5 9.5 0 1110.5 0zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 3a1 1 0 011 1v2.5H14a1 1 0 010 2h-2.5V13a1 1 0 01-2 0v-2.5H7a1 1 0 010-2h2.5V6a1 1 0 011-1z"/></svg>
            </div>
                        <img
          width="728" height="546"
          class="img-fluid image-block__img-fluid img-aspect-auto"
          src="https://imagez.tmz.com/image/1e/4by3/2024/01/30/1e46f5873e434d1f966fbd488c128213_md.jpg"
          loading="lazy"
          alt="chisean rock blueface tattoo"
        >
                </div>
                                  <div class="image-block__card-footer">
                                      <span class="media-credit image-block__media-credit">Lakimii Tattoo Shop</span>
                      </div>
                  </a>
      </div>
        <script>
      wbq.push(function preloadImage() {
        window.TMZ.dispatch(window.TMZ.actions.loadNode({"_schema":"pbj:tmz:dam:node:image-asset:1-0-0","_id":"image_jpg_20240130_1e46f5873e434d1f966fbd488c128213","status":"published","etag":"aef211b539989a7e85b881996db6d2bb","created_at":"1706655188243276","updated_at":"1706655979464489","title":"0130 chisean rock blueface tattoo.jpg","mime_type":"image\/jpeg","file_size":"515671","file_etag":"5d3a0148801c30163fda14d99228b58d","credit":"Lakimii Tattoo Shop","linked_refs":["tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"],"gallery_seq":0,"alt_text":"chisean rock blueface tattoo","width":1200,"height":900}));
      });
    </script>
        </section><!--/#cb-3673481054f27278aca15c01c8b39e86-->

    <section
              id="cb-5289d9bdcfe817035c89198135d748db"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>It certainly looks like it could be based on what we're seeing -- you can see her pores opened up, and the ink filling them. Plus, her head is slightly shaved around the area in question -- which is a telltale sign that a tattoo is about to take place.</p>
      </section><!--/#cb-5289d9bdcfe817035c89198135d748db-->

    <section
              id="cb-df46fbd74fb3b2dca3d9d60bfd69532e"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>There's a handful of folks who are <em>still</em> skeptical about whether this is fake -- but from the looks of it, Chrisean appears to have gotten blasted again ... this after re-devoting herself to Blueface, who's <a href="https://www.tmz.com/2024/01/15/blueface-not-scheduled-release-released-jail-summer-probation-violation/"><strong>currently behind bars</strong></a> on a probation violation in L.A.</p>
      </section><!--/#cb-df46fbd74fb3b2dca3d9d60bfd69532e-->

    <section
              id="cb-de14ba4aa271d24f71c3ad110f764348"
        class="canvas-block canvas-block-blogroll canvas-gallery-block canvas-gallery-block-blogroll canvas-gallery-block--default  "
        >
                                        
    <div class="gallery-block">
      <a
        id="gallery-link-ec7a020a-2af5-4dad-a8ab-999ce37a8ab0"
        class="media-link gallery-block__link js-track-link js-click-gallery"
        href="https://www.tmz.com/photos/2020/02/18/celebrity-face-tattoos-guess-who/"
        data-node-ref="tmz:gallery:ec7a020a-2af5-4dad-a8ab-999ce37a8ab0"
                data-context="{&quot;name&quot;:&quot;gallery-block&quot;,&quot;section&quot;:&quot;blogroll&quot;}"        data-container-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"        data-gallery-layout="carousel"
      >
                  <img
            width="728" height="546"
            class="img-fluid gallery-block__img-fluid img-aspect-4by3"
            src="https://imagez.tmz.com/image/34/4by3/2020/02/17/3420aa19d286452aa11e969ab651b7f3_md.jpg"
            alt="Celebrity Face Tattoos -- Guess Who!"
            loading="lazy"
          >
        
        <div class="media-icon--overlay gallery-block__media-icon--overlay">
          <svg role="img" aria-hidden="true" class="icon-shadow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <title>Gallery</title>
            <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
          </svg>
          <span class="media-icon-label gallery-block__media-icon-label">Launch Gallery</span>
        </div>
                  <footer class="media-footer gallery-block__media-footer">
            <span class="media-launch-text gallery-block__media-launch-text">Guess Whose Tattoo!</span>
            <span class="media-cta gallery-block__media-cta">
              Launch Gallery
              <span class="media-footer-icon gallery-block__icon">
                <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Gallery</title>
                  <path fill="#fff" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2v.7c-5.1 0-9.3 4.15-9.3 9.3 0 5.1 4.15 9.3 9.3 9.3s9.3-4.15 9.3-9.3c0-5.1-4.15-9.3-9.3-9.3V2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2-12h6v6h-6v-6zm4-1H9v5H8V8h6v1z"/>
                </svg>
              </span>
            </span>
          </footer>
        
              </a>
    </div>
        </section><!--/#cb-de14ba4aa271d24f71c3ad110f764348-->

    <section
              id="cb-534b258f6f000f85522f87bfca06d9d2"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>She certainly seems happy waiting for him to be released ... and we know Lakimii is also stoked. They tell us business has booming for them ever since the ink job they did for her.</p>
      </section><!--/#cb-534b258f6f000f85522f87bfca06d9d2-->

    <section
              id="cb-97b31451586c7ee40b06282777ea7947"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>And get this ... we're told Blue himself apparently has plans to come and get some fresh ink as well. No word on when exactly that might happen -- he could be locked up for a while.</p>
      </section><!--/#cb-97b31451586c7ee40b06282777ea7947-->

    <section
              id="cb-5fd1851f44f432b55a0fb05769a203bd"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">TMZ INVESTIGATES</span>
        </footer>
                    <span class="media-credit video-block__media-credit">TMZ Studios</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "TMZ Investigates | Killing A Movie Star: Grave Injustice",
        "description": "A young Hollywood star is strangled to death by her jilted boyfriend. TMZ explores the shocking travesty of justice that followed and how missteps have allowed a killer to terrorize again.",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/d0/4by3/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/1by1/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg",
            "https://imagez.tmz.com/image/d0/16by9/2024/01/26/d0aebdab77f243eb97989b9ad0fe4541_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-27T08:20:05Z",
                  "duration": "PT0M22S",
                "uploadDate": "2024-01-26T14:53:24Z",
        "dateCreated": "2024-01-26T14:53:24Z",
        "dateModified": "2024-01-30T14:12:10Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/5b/o/2024/01/30/5bf94ca4106b48839b15fecf7aee382d.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-26-012624-grave-injustice-monday-1765330-065/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-image-holder');
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789'), {
                        onObserve: function() {
              document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-bfbb8420-92d2-413a-be36-79bf3c87bdb2-193838789-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-26-012624-grave-injustice-monday-1765330-065/',
                  null,
                  'tmz:video:bfbb8420-92d2-413a-be36-79bf3c87bdb2',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-5fd1851f44f432b55a0fb05769a203bd-->

    <section
              id="cb-318748bf7a58984fb0db0424b2d19884"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  canvas-block-is-last "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>As they say ... the couple that tats together, stays together. Something like that, anyway.</p>
      </section><!--/#cb-318748bf7a58984fb0db0424b2d19884-->

        </div><!--/.article__blocks-->

                  <div class="row">
            <div class="col-12">
              <ul class="social social--blogroll">
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--facebook js-track-link"
                    href="https://www.tmz.com/2024/01/30/chrisean-rock-blueface-tattoo-real-ink-shop-lakimii/"
                    onclick="window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fchrisean-rock-blueface-tattoo-real-ink-shop-lakimii%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-footer&quot;,&quot;pos&quot;:15}"
                  >
                    <span role="img" aria-label="Facebook" aria-hidden="true" class="icon icon-lg icon-facebook--white social__icon--facebook"></span>
                    Share<span class="social__hide-sm"> on Facebook</span>
                  </a>
                </li>
                <li class="social__item social__item--3items">
                  <a
                    class="btn social__btn social__btn--twitter js-track-link"
                    href="https://www.tmz.com/2024/01/30/chrisean-rock-blueface-tattoo-real-ink-shop-lakimii/"
                    onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fchrisean-rock-blueface-tattoo-real-ink-shop-lakimii%2F%3Fadid%3Dshare-tw&text=Chrisean%20Rock%27s%20New%20Blueface%20Ink%20100%25%20Real%2C%20Says%20Tattoo%20Shop&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                    data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
                    data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-footer&quot;,&quot;pos&quot;:15}"
                  >
                    <span  role="img" aria-label="Twitter" aria-hidden="true" class="icon icon-lg icon-twitter--white social__icon--twitter"></span>
                    TWEET<span class="social__hide-sm"> This</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

                      <section class="related-articles">
              <header class="card-section-header related-articles__card-section-header">
                <h3 class="card-section-title related-articles__card-section-title">
                  related articles
                </h3>
              </header>

              <div class="row related-articles__row">
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/26/chrisean-rock-blueface-moves-into-house-baby-jaidyn-alexis/"
                        data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:15}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/5e/16by9/2024/01/26/5e8dc5d7300b40fa8382e3ad18fd5280_xs.jpg" loading="lazy" alt="Chrisean Rock Repledges Allegiance to Blueface, Moves Back into His House">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Chrisean Rock Repledges Allegiance to Blueface, Moves Back into His House
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                                  <div class="col related-articles__col">
                    <article class="related-articles__card">
                      <a
                        class="related-articles__card-link js-track-link"
                        href="https://www.tmz.com/2024/01/17/chrisean-rock-guns-drawn-dating-show-set/"
                        data-node-ref="tmz:article:658ff4f5-62d2-49c9-8af9-50970798ff0e"
                        data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                        data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;related-article&quot;,&quot;pos&quot;:15}"
                      >
                        <div class="related-articles__card-img ratio">
                          <div class="ratio-item">
                                                                                                                                                    <img width="300" height="169" class="img-fluid" src="https://imagez.tmz.com/image/72/16by9/2024/01/17/722f183dede640aeab0442453960e66b_xs.jpg" loading="lazy" alt="Chrisean Rock Shoot Ends After Guns Drawn On Set, Pistol-Whipping">
                                                      </div>
                        </div>
                        <div class="related-articles__card-body">
                          <h4 class="related-articles__card-title">
                            Chrisean Rock Shoot Ends After Guns Drawn On Set, Pistol-Whipping
                          </h4>
                        </div>
                      </a>
                    </article>
                  </div>
                              </div>
            </section>
          
                      <section class="tag-cloud">
              <ul class="tag-cloud__list-group">
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/chrisean-rock/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Chrisean Rock
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/people/blueface/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Blueface
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/you-might-want-to-rethink/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    You Might Want to Rethink
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/hip-hop/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Hip Hop
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/exclusive/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Exclusive
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/controversial-s-t/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Controversial S#!T
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/music/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Music
                  </a>
                                  <a
                    class="tag-cloud__list-group-item js-track-link"
                    href="https://www.tmz.com/categories/tattoo/"
                    data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;tag-cloud&quot;,&quot;pos&quot;:15}"
                  >
                    Tattoo
                  </a>
                              </ul>
            </section><!--/.tag-cloud-->
                        </article>

              <div id="widget-6e1492e1-2a2b-576b-b7c0-e440a4965d75-after-15" class="js-html-import-lazy" data-url="/_/promotion/categories-blogroll-after-15/blogroll.html"></div>
      
              <div id="ad-blogroll15" class="ad-blogroll15"></div>
                                              
                    
      
      <article id="blogroll-82c19738-7fbf-4687-9327-a73c9a7145e2" class="article"
      >
                  <div class="article__channel--hip-hop"></div>
        
                  <div class="article__theme--hip-hop"></div>
        
        <header class="article__header">
          <a
            href="https://www.tmz.com/2024/01/30/glorilla-instagram-baby-mama-hookah/"
            class="article__header-link js-track-link"
            data-node-ref="tmz:article:82c19738-7fbf-4687-9327-a73c9a7145e2"
            data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
            data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;headline&quot;,&quot;pos&quot;:16}"
          >
                          <h2 class="article__header-title">
                                  <span class="article__hf1 text-uppercase h3">GloRilla</span>
                                  <span class="article__hf2 text-none h2">Baby Mamas &amp; Hookah-Smoking Dudes ...</span>
                                  <span class="article__hf3 text-uppercase h1">Make the World Trash 👎🏽</span>
                              </h2>
                      </a>

          <h5 class="article__published-at">
            <ul class="social social--sm">
                            <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--facebook js-track-link"
                  href="https://www.tmz.com/2024/01/30/glorilla-instagram-baby-mama-hookah/"
                  onclick="window.open('http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fglorilla-instagram-baby-mama-hookah%2F%3Fadid%3Dshare-fb', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:82c19738-7fbf-4687-9327-a73c9a7145e2"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;facebook-header&quot;,&quot;pos&quot;:16}"
                  aria-label="Share on Facebook"
                >
                  <span role="img" aria-label="Facebook" class="icon icon-facebook--white social__icon--facebook"></span>
                                      <span class="social__count">11</span>
                    <span class="visually-hidden">shares</span>
                                  </a>
              </li>
              <li class="social-item">
                <a
                  class="btn social__btn social__btn--sm social__btn--twitter js-track-link"
                  href="https://www.tmz.com/2024/01/30/glorilla-instagram-baby-mama-hookah/"
                  onclick="window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tmz.com%2F2024%2F01%2F30%2Fglorilla-instagram-baby-mama-hookah%2F%3Fadid%3Dshare-tw&text=GloRilla%20Calls%20For%20End%20of%20Baby%20Mamas%20and%20Men%20Who%20Smoke%20Hookah&via=TMZ&related=HarveyLevinTMZ', '_blank', 'status=0,width=575,height=450');return false;"
                  data-node-ref="tmz:article:82c19738-7fbf-4687-9327-a73c9a7145e2"
                  data-widget-ref="tmz:blogroll-widget:6e1492e1-2a2b-576b-b7c0-e440a4965d75"
                  data-context="{&quot;section&quot;:&quot;main&quot;,&quot;name&quot;:&quot;twitter-header&quot;,&quot;pos&quot;:16}"
                  aria-label="Share on Twitter"
                >
                  <span role="img" aria-label="Twitter" class="icon icon-sd icon-twitter--white"></span>
                </a>
              </li>
            </ul><!--/.social-->

                                          1/30/2024 3:39 PM PT
                                    </h5><!--/.article__posted-date-->
        </header>

        <div class="article__blocks">
          
          
    <section
              id="cb-36418acbeef58e66bd6773d38bfbb733"
        class="canvas-block canvas-block-blogroll canvas-video-block canvas-video-block-blogroll canvas-video-block--default  canvas-block-is-first "
        >
                                    
              
    <div class="video-block">
      <div class="ratio ratio-16x9">
        <div id="video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-progress-spinner" class="ratio-item video-block__backdrop below">
          <div class="spinner video-block__spinner"></div>
        </div>
        <div id="video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-image-holder" class="ratio ratio-item video-block__image-holder">
          <button class="ratio-item icon-video--shadow video-block__icon" id="video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-play-btn">
            <span class="visually-hidden">Play video content</span>
          </button>
                                        <img
            width="728" height="410"
            class="img-fluid"
            src="https://imagez.tmz.com/image/0a/16by9/2024/01/30/0a85d3add25f4ba992d4586f203f6f56_md.jpg"
            loading="lazy"
          >
                  </div>
        <div class="ratio-item ratio-item--jwplayer invisible">
          <div
            id="jwplayer-video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891"
            class="video-portal"
            data-autoplay="false"
            data-muted="false"
            data-node-ref="tmz:video:46d405b4-7342-4292-aac1-b90dbb25bd8e"
          >
          </div>
        </div>
      </div>
              <footer id="video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-footer" class="media-footer video-block__media-footer">
          <span class="media-launch-text video-block__media-launch-text">B******s Be Real Deal Dumb</span>
        </footer>
                    <span class="media-credit video-block__media-credit">Instagram / @glorillapimp</span>
          </div>

          <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "GloRilla Calls For End Of Baby Mamas and Men Who Smoke Hookah",
        "description": "GloRilla has a few hot takes that may ruffle some feathers ... the CMG rapper thinks society could do without so many baby mothers and even fewer guys who love to puff on hookah -- they're not thug enough!!!",
                  "thumbnailUrl": [
            "https://imagez.tmz.com/image/0a/4by3/2024/01/30/0a85d3add25f4ba992d4586f203f6f56_xl.jpg",
            "https://imagez.tmz.com/image/0a/1by1/2024/01/30/0a85d3add25f4ba992d4586f203f6f56_xl.jpg",
            "https://imagez.tmz.com/image/0a/16by9/2024/01/30/0a85d3add25f4ba992d4586f203f6f56_xl.jpg"
          ],
                "inLanguage": "en-US",
        "datePublished": "2024-01-30T23:39:58Z",
                  "duration": "PT1M55S",
                "uploadDate": "2024-01-30T20:40:28Z",
        "dateCreated": "2024-01-30T20:40:28Z",
        "dateModified": "2024-01-30T23:40:05Z",
                "width": "560",
        "height": "315",
                  "contentUrl": "https://ovp.tmz.com/video/e6/o/2024/01/30/e625764896dc4f7597dd3552afb77094.mp4",
                          "embedUrl": "https://share.tmz.com/videos/2024-01-30-013024-glorilla-1768091-432/",
                "author": {
          "@type": "Person",
          "name": "TMZ Staff"
        },
                "publisher": {
          "@type": "Organization",
          "name": "TMZ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.tmz.com/tmz-web/img/tmz-logo-red-147x60-v1.png",
            "height": 60,
            "width": 147
          }
        }
      }
      </script>
    
    <script>
      wbq.push(function renderVideoBlock() {
        var page = window.TMZ.select(window.TMZ.selectors.getPage);
        // there is a weird bug with iPhone 6+ on iOS 9.3.4 where the spinner gets revealed even after its
        // event listener has been removed, so for now this stupid flag can correct for that.
        var isResolved = false;
        if (!page.isTurbolinksPreview) {
          function displayPlayer(player) {
            if (player.id === 'jwplayer-video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-player') {
              player.getContainer().closest('.ratio-item--jwplayer').classList.remove('invisible');
              return;
            }
            // a fallback video
            player.closest('.ratio-item--jwplayer').classList.remove('invisible');
          }
          function fadeImageHolderAndFooter() {
            var imageHolder = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-image-holder');
            var footer = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-footer');
            hideSpinner();
            if (imageHolder) {
              imageHolder.addEventListener('transitionend', removeImageHolder, { once: true });
              imageHolder.classList.add('video-block__image-holder-fade');
            }

            if (footer && !footer.classList.contains('hidden')) {
              footer.addEventListener('transitionend', removeFooter, { once: true });
              footer.classList.add('video-block__media-footer-fade');
            }
          }
          function removeImageHolder() {
            var imageHolder = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-image-holder');
            if (imageHolder) {
              imageHolder.remove();
            }
          }
          function removeFooter() {
            var footer = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-footer');
            if (footer) {
              footer.classList.add('hidden');
            }
          }
          function hideSpinner() {
            var spinner = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-progress-spinner');
            spinner.classList.add('below');
            spinner.classList.remove('above');
          }
          function revealSpinner() {
            if (isResolved) {
              return;
            }
            var spinner = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-progress-spinner');
            spinner.classList.add('above');
            spinner.classList.remove('below');
          }

          window.TMZ.videos.observe(document.getElementById('jwplayer-video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891'), {
                        onObserve: function() {
              document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-play-btn').addEventListener('mousemove', revealSpinner, { once: true });
            },
            onResolve: function(player) {
              isResolved = true;
              var playButton = document.getElementById('video-player-46d405b4-7342-4292-aac1-b90dbb25bd8e-1117448891-play-btn');
              playButton.removeEventListener('mousemove', revealSpinner);
              playButton.addEventListener('click', function() {
                displayPlayer(player);
                player.play();
                removeImageHolder();
                removeFooter();
                window.TMZ.dispatch(window.TMZ.actions.clickLink(
                  'https://www.tmz.com/watch/2024-01-30-013024-glorilla-1768091-432/',
                  null,
                  'tmz:video:46d405b4-7342-4292-aac1-b90dbb25bd8e',
                  null,
                  {
                    section: 'blogroll',
                    name: 'video',
                    action: 'click'
                  }
                ));
              }, { once: true });
              hideSpinner();
            }
                      });
        }
      });
    </script>
        </section><!--/#cb-36418acbeef58e66bd6773d38bfbb733-->

    <section
              id="cb-b370ba67a73b4e5b6b72a7ed5afb0148"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p><a href="https://www.tmz.com/people/glorilla/"><strong>GloRilla</strong></a> has a few hot takes that will definitely ruffle some feathers ... especially if you're a guy who enjoys puffing on hookah, or a woman who's raising a kid. She said it, not us!</p>
      </section><!--/#cb-b370ba67a73b4e5b6b72a7ed5afb0148-->

    <section
              id="cb-6ceefa903569cd2e260c3ea2e7d278d1"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>Big Glo laid out her gripes on Tuesday, claiming every woman she knows who's a "baby mama" is a few sandwiches short of a picnic ... to put it kindly.</p>
      </section><!--/#cb-6ceefa903569cd2e260c3ea2e7d278d1-->

    <section
              id="cb-318a5395ec7d5791d99e4b121f5d8929"
        class="canvas-block canvas-block-blogroll canvas-text-block canvas-text-block-blogroll canvas-text-block--default  "
    data-context="{&quot;section&quot;:&quot;blogroll&quot;,&quot;name&quot;:&quot;text_block&quot;}"    >
          <p>She actually called 'em dumb bitches.</p>
      </section><!--/#cb-318a5395ec7d5791d99e4b121f5d8929-->

    <section
              id="cb-b09a092d03b65f217d9d4adfd93d3783"
        class="canvas-block canvas-block-blogroll canvas-instagram-media-block canvas-instagram-media-block-blogroll canvas-instagram-media-block--default  "
        >
        <div id="cb-b09a092d03b65f217d9d4adfd93d3783-1072567451-target" class="d-flex justify-content-center">
  <p>Waiting for your permission to load the Instagram Media.</p>
</div>

<script id="cb-b09a092d03b65f217d9d4adfd93d3783-1072567451-accepted" type="text/x-consent-element">
  <blockquote class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/C2s6kmwp3SQ/"
    data-instgrm-version="14"
    style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
  >
    <div style="padding:16px;">
        <a href="https://www.instagram.com/p/C2s6kmwp3SQ/"
            style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
            target="_blank">
            <div style=" display: flex; flex-direction: row; align-items: center;">
                <div
                    style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;">
                </div>
                <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                    <div
                        style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;">
                    </div>
                    <div
                        style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;">
                    </div>
                </div>
            </div>
            <div style="padding: 19% 0;"></div>
            <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"
                    xmlns:xlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                                <path
                                    d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,edia.org\/w\/index.php?title=Joeski_Love&action=edit&redlink=1\">Joeski Love<\/a> and bring R&B icon <a title=\"Keith Sweat\" href=\"http:\/\/en.wikipedia.org\/wiki\/Keith_Sweat\">Keith Sweat<\/a> to ultimate fame), it was when he and a new team of DJs known as The Get Fresh Crew (Barry Bee and Chill Will) along with a newcomer named MC Ricky D (who would later achieve fame as <a title=\"Slick Rick\" href=\"http:\/\/en.wikipedia.org\/wiki\/Slick_Rick\">Slick Rick<\/a>) came to fledgling New Jersey-based Hip-Hop label <a class=\"new\" title=\"Reality Records (page does not exist)\" href=\"http:\/\/en.wikipedia.org\/w\/index.php?title=Reality_Records&action=edit&redlink=1\">Reality\/Danya Records<\/a> the following year and recorded \"<a title=\"The Show (Doug E. Fresh song)\" href=\"http:\/\/en.wikipedia.org\/wiki\/The_Show_%28Doug_E._Fresh_song%29\">The Show<\/a>\" (which borrowed the melody of the <em><a title=\"Inspector Gadget\" href=\"http:\/\/en.wikipedia.org\/wiki\/Inspector_Gadget\">Inspector Gadget<\/a><\/em> theme),<sup id=\"cite_ref-1\" class=\"reference\"><a href=\"http:\/\/en.wikipedia.org\/wiki\/index.html?curid=1608056#cite_note-1\"><span>[<\/span>2<span>]<\/span><\/a><\/sup> and \"<a title=\"La Di Da Di\" href=\"http:\/\/en.wikipedia.org\/wiki\/La_Di_Da_Di\">La Di Da Di<\/a>\", a tune that was completely voiced by MC Ricky D and backed by Doug E's beat box for the entire duration of the song. It was when both of these songs were released on a single (particularly 12\" single) that broke him (and Slick Rick) into stardom. Both \"The Show\" and \"La-Di-Da-Di\" are considered two of the all-time greatest early <a title=\"Hip hop music\" href=\"http:\/\/en.wikipedia.org\/wiki\/Hip_hop_music\">hip hop<\/a> classics, and, as such make up one of the first and only Hip-Hop singles to have two hit songs on the same disc. \"Doin OPP\"<\/p>","bio_source":"custom","imdb_url":"https:\/\/www.imdb.com\/name\/nm0933077\/","is_celebrity":true,"tags":{"cf_slug":"doug-e-fresh","cf_element":"person","cf_guid":"684a0159-4c86-4dc7-b4ea-641498a6dd87"},"slug":"doug-e-fresh","ads_enabled":true,"is_unlisted":false,"order_date":"2011-08-26T22:58:00.000000Z"},"tmz:article:36a0c354-f727-4533-91a2-feb53924b6db":{"_schema":"pbj:tmz:news:node:article:1-0-2","_id":"36a0c354-f727-4533-91a2-feb53924b6db","status":"published","etag":"8e61ad97d912127b9ba087ef5dd3f9bc","created_at":"1696346398669094","updated_at":"1696351583125249","title":"Donald Glover Sees Positives in AI, Has Faith in Humanity","is_homepage_news":false,"allow_comments":true,"image_ref":"tmz:image-asset:image_png_20231003_c275dd6a5abc4b4485c6cf93a1079d3e","word_count":245,"amp_enabled":true,"smartnews_enabled":true,"apple_news_enabled":true,"apple_news_id":"31a571d2-0647-4a5d-a89c-a93d70b7005d","apple_news_revision":"AAAAAAAAAAD\/\/\/\/\/\/\/\/\/\/w==","apple_news_share_url":"https:\/\/apple.news\/AMaVx0gZHSl2onKk9cLcAXQ","apple_news_updated_at":1696351583,"facebook_instant_articles_enabled":true,"twitter_publish_enabled":true,"show_related_articles":false,"related_article_refs":["tmz:article:12dc3a57-d10c-471d-8be9-768a65632ac3","tmz:article:a0a7b206-69ed-4589-9ca5-584dc57d32da"],"is_locked":false,"published_at":"2023-10-03T16:45:59.995933Z","slug":"2023\/10\/03\/donald-glover-ai-childish-gambino","ads_enabled":true,"meta_description":"Most artists have been scoffing at the use of artificial intelligence, but not Donald Glover -- he thinks there's plenty of upside to the technology ... with some fine-tuning of course.","is_unlisted":false,"theme":"hip-hop","order_date":"2023-10-03T16:45:59.995933Z","hf":["Donald Glover","Confident Humanity Will Nail AI Tech","... EVENTUALLY"],"hf_sizes":[3,1,2],"hf_styles":["uppercase","uppercase","none"],"primary_person_refs":["tmz:person:229556a9-ee96-59cd-8303-05e647c5c40b"],"person_refs":["tmz:person:229556a9-ee96-59cd-8303-05e647c5c40b"],"category_refs":["tmz:category:458f3b95-7bdd-4087-a0fc-698c12bf1d8a","tmz:category:a2dc668f-3f68-5da1-917f-98394326c8b6","tmz:category:b59d9b77-1bf2-5c92-a0f1-a338eefda513"],"channel_ref":"tmz:channel:e0262df9-7a50-447c-9203-654e61c6e9b4"},"tmz:article:be3390df-2d35-4878-8e6f-f8e3c206f810":{"_schema":"pbj:tmz:news:node:article:1-0-2","_id":"be3390df-2d35-4878-8e6f-f8e3c206f810","status":"published","etag":"39b1b804dd978eff30221c26e0321db2","created_at":"1692910847972981","updated_at":"1693664981707785","title":"AI Model Labeled Racist Over Generated Images of People From All 50 States","is_homepage_news":true,"allow_comments":true,"image_ref":"tmz:image-asset:image_jpg_20230824_2790c75d3d214818851a576e5758ea00","classification":"super-hero","word_count":236,"amp_enabled":true,"smartnews_enabled":true,"apple_news_enabled":true,"apple_news_id":"0b279feb-97ad-4439-869f-24e0b6dea3d5","apple_news_revision":"AAAAAAAAAAAAAAAAAAAAAA==","apple_news_share_url":"https:\/\/apple.news\/ACyef65etRDmGnyTgtt6j1Q","apple_news_updated_at":1693664981,"facebook_instant_articles_enabled":true,"twitter_publish_enabled":true,"show_related_articles":true,"related_article_refs":["tmz:article:e328a147-795f-40e9-8526-831c1678746e","tmz:article:79a0816c-92f8-4deb-8f11-944222923d66"],"is_locked":false,"published_at":"2023-09-02T08:00:45.000000Z","slug":"2023\/09\/02\/artificial-intelligence-model-labeled-racist-over-generated-images-people-all-50-states","ads_enabled":true,"meta_description":"An advanced AI model is being labeled racist over what it thinks people from all 50 states look like.","is_unlisted":false,"swipe":"Exclusive","order_date":"2023-09-02T08:00:45.000000Z","hf":["Artificial Intelligence","Social Media Says It's Racist ...","After AI-Generated Images Of People From All 50 States"],"hf_sizes":[3,1,2],"hf_styles":["uppercase","uppercase","titlecase"],"category_refs":["tmz:category:58e23b74-c8fe-556e-a53e-e3f2267e9c17","tmz:category:a8cec5c7-c90a-50c4-8d89-f7208f2ecd92","tmz:category:a9131c2e-3b11-5dae-9213-37fa5921ba5f","tmz:category:ab1e465e-2501-5000-b60c-070cf89def04"],"channel_ref":"tmz:channel:140198d5-2b8e-4b61-824f-99781210fe4f"},"tmz:channel:5f94dd32-5044-4efe-92de-726dc8e015e8":{"_schema":"pbj:tmz:taxonomy:node:channel:1-0-0","_id":"5f94dd32-5044-4efe-92de-726dc8e015e8","status":"published","etag":"21c3a08fd15ebe3cef5f7861953e3af1","created_at":"1665599167636267","title":"Real Estate","slug":"real-estate","ads_enabled":true,"is_unlisted":false,"order_date":"2022-10-12T18:26:07.636267Z"},"tmz:category:4641ddc4-2999-5a5a-91f2-b3a5d429ed1f":{"_schema":"pbj:tmz:taxonomy:node:category:1-0-0","_id":"4641ddc4-2999-5a5a-91f2-b3a5d429ed1f","status":"published","etag":"66bef62eea81fec32324dcc0cd7b342c","created_at":"1301420577000000","title":"Reality TV","tags":{"cf_slug":"reality-tv","cf_element":"category","cf_guid":"dc4f2fbc-257e-4d5f-8b4e-44d21d880f98"},"slug":"reality-tv","ads_enabled":true,"is_unlisted":false,"order_date":"2011-03-29T17:42:00.000000Z"},"tmz:category:f722be19-207a-56ae-93bb-66e074be1930":{"_schema":"pbj:tmz:taxonomy:node:category:1-0-0","_id":"f722be19-207a-56ae-93bb-66e074be1930","status":"published","etag":"57abd484bf599005a30006fff08c6e0a","created_at":"1271216656000000","title":"Celebrity Homes","tags":{"cf_slug":"celebrity-homes","cf_element":"category","cf_guid":"9176c26e-cdec-49fb-ba1e-d79de649b640"},"slug":"celebrity-homes","ads_enabled":true,"is_unlisted":false,"order_date":"2010-04-14T03:44:00.000000Z"},"tmz:article:9b753c12-e6f1-4624-969e-ed3ea555d261":{"_schema":"pbj:tmz:news:node:article:1-0-2","_id":"9b753c12-e6f1-4624-969e-ed3ea555d261","status":"published","etag":"0a4aa482c73be6d1ce3996a32fb50458","created_at":"1687444336182044","updated_at":"1687677916875403","title":"'Million Dollar Listing' Josh Altman Says Jay-Z, Beyonc\u00e9's New Mansion Is a Flex","is_homepage_news":true,"allow_comments":true,"image_ref":"tmz:image-asset:image_jpg_20230622_fd43b378118f47ae940821938cb6d14a","word_count":268,"amp_enabled":true,"smartnews_enabled":true,"apple_news_enabled":true,"apple_news_id":"94d3c1a2-c52c-4f94-9a54-38fd5677b1cc","apple_news_revision":"AAAAAAAAAAD\/\/\/\/\/\/\/\/\/\/w==","apple_news_share_url":"https:\/\/apple.news\/AlNPBosUsT5SaVDj9VnexzA","apple_news_updated_at":1687677916,"facebook_instant_articles_enabled":true,"twitter_publish_enabled":true,"show_related_articles":false,"related_article_refs":["tmz:article:9879617f-4d1c-48b3-b059-c0fa56a46a7f","tmz:article:8be1dc60-90c7-4aaf-b57b-129eec4a35c4"],"is_locked":false,"published_at":"2023-06-25T07:25:00.000000Z","slug":"2023\/06\/25\/million-dollar-listing-josh-altman-jay-z-beyonce-malibu-mansion","ads_enabled":true,"meta_description":"\"Million Dollar Listing\" star Josh Altman says Jay-Z and Beyonc\u00e9's $200 million Malibu mansion is a flex.","is_unlisted":false,"swipe":"Exclusive","order_date":"2023-06-25T07:25:00.000000Z","hf":["Josh Altman","Jay-Z & Bey's $200M Home's a Flex","... Pocket Change For Them"],"hf_sizes":[3,1,2],"hf_styles":["uppercase","uppercase","none"],"primary_person_refs":["tmz:person:25631cea-ae6c-58ea-8274-bd3f0e2f7c48","tmz:person:80a79ca2-b3cd-553f-95ed-9797170fafd7","tmz:person:bd50f833-bdf0-5d23-8432-bf42725bfc66"],"person_refs":["tmz:person:25631cea-ae6c-58ea-8274-bd3f0e2f7c48","tmz:person:80a79ca2-b3cd-553f-95ed-9797170fafd7","tmz:person:bd50f833-bdf0-5d23-8432-bf42725bfc66"],"category_refs":["tmz:category:29a47d36-126f-53f7-a578-d8bc03229365","tmz:category:350f1b7d-3fba-53e0-b6a8-e94dae3e9c02","tmz:category:4641ddc4-2999-5a5a-91f2-b3a5d429ed1f","tmz:category:956fef4a-e982-5332-8c38-336979363fa1","tmz:category:a9131c2e-3b11-5dae-9213-37fa5921ba5f","tmz:category:b59d9b77-1bf2-5c92-a0f1-a338eefda513","tmz:category:f722be19-207a-56ae-93bb-66e074be1930"],"channel_ref":"tmz:channel:5f94dd32-5044-4efe-92de-726dc8e015e8"},"tmz:category:7611008b-2991-572c-b1c3-4ed43792efaf":{"_schema":"pbj:tmz:taxonomy:node:category:1-0-0","_id":"7611008b-2991-572c-b1c3-4ed43792efaf","status":"published","etag":"93e219bd4b194443d9f60c9ceeb4e302","created_at":"1311700082000000","title":"Breaking News","tags":{"cf_slug":"breaking-news","cf_element":"category","cf_guid":"77342641-3612-4da0-b5d0-c3806b4e7045"},"slug":"breaking-news","ads_enabled":true,"is_unlisted":false,"order_date":"2011-07-26T17:07:00.000000Z"},"tmz:category:a9db25a6-a811-5cbb-a702-50185eb8db55":{"_schema":"pbj:tmz:taxonomy:node:category:1-0-0","_id":"a9db25a6-a811-5cbb-a702-50185eb8db55","status":"published","etag":"fdf284410539a46ed7cd2ad3e991ef2f","created_at":"1268536493000000","title":"Grammy Awards","tags":{"cf_slug":"grammy-awards","cf_element":"category","cf_guid":"5360e0d0-5800-4454-805e-3d26a8073f82"},"slug":"grammy-awards","ads_enabled":true,"seo_title":"2013 Grammys: Grammy Awards News, Pictures, & Videos","is_unlisted":false,"order_date":"2010-03-14T03:14:00.000000Z"},"tmz:person:08df9cf9-9db8-5524-baa4-593933163a11":{"_schema":"pbj:tmz:people:node:person:1-0-0","_id":"08df9cf9-9db8-5524-baa4-593933163a11","status":"published","etag":"cf6020535d07fb2cccebdbd29b670977","created_at":"1440778334000000","title":"The Weeknd","image_ref":"tmz:image-asset:image_jpg_20180817_87bc7147f29e581389d23d64f2c1c873","bio":"<p>The Weeknd, whose real name is Abel Tesfaye, is a recording artist. He was born on February 16, 1990 and was raised as an only child by his mom, Samra, and his grandmother in Toronto. His dad, Makkonen, was absent for most of his life. His mom emigrated from Ethiopia in the 1980s and The Weeknd remains close to his roots. Growing up, he went to Ethiopian Orthodox church and lists Amharis as his first language. The musician never completed high school. The Weeknd credits fellow Canadian and friend Drake for helping to launch his career. He draws musical inspiration from Michael Jackson and has a special affinity for \u201cDirty Diana.\u201d In 2011, he released three mixtapes, which became his first album, titled \u201cTrilogy.\u201d The Weeknd\u2019s next album was \u201cKiss Land,\u201d but it was the one that followed, \u201cStarboy,\u201d that broke all sorts of Spotify records in 2016. He also worked with pop producer Max Martin to re-write the Arianna Grande hit \u201cLove Me Harder\u201d and sang \u201cEarned It\u201d from the \u201c50 Shades of Grey\u201d soundtrack. He was once known for his outrageous hairstyle, but has since opted for a more mainstream look. The Weeknd often finds himself in the tabloids for his love life. He dated model Bella Hadid for 18 months until they split in November 2016. He began seeing singer\/actress Selena Gomez soon after. They were first spotted together in January 2017.<\/p>","bio_source":"custom","is_celebrity":true,"tags":{"cf_slug":"the-weeknd","cf_element":"person","cf_guid":"933608f8-1c1f-464e-a5c6-d02b9cdc21d4"},"slug":"the-weeknd","ads_enabled":true,"is_unlisted":false,"order_date":"2015-08-28T16:12:00.000000Z"},"tmz:person:eaa652ca-86d6-5bb1-926e-ab0f8f2df485":{"_schema":"pbj:tmz:people:node:person:1-0-0","_id":"eaa652ca-86d6-5bb1-926e-ab0f8f2df485","status":"published","etag":"a0c39311fde69276d32d29f09cd068a2","created_at":"1289072578000000","updated_at":"1657810380932018","title":"Drake","image_ref":"tmz:image-asset:image_jpg_20141213_9a99341acc8f51b89ffc16ed96fb9688","bio":"<p>Drake is a GRAMMY winning recording artist who hails from Canada. He was born Aubrey \u201cDrake\u201d Graham on October 24, 1986 in Toronto to Sandi and Dennis Graham. He was raised in Canada by his Jewish mother, but would visit his father in Memphis. Drake inherited the musical gene from his dad, who was a drummer for Jerry Lee Lewis, and his uncle, Larry Graham, who played bass for Prince. Some of Drake\u2019s most popular songs include \u201cHotline Bling,\u201d \u201cStarted From the Bottom,\u201d and \u201cOne Dance.\u201d He got his big break on screen as the star of the series \u201cDegrassi: The Next Generation\u201d from 2001-2009. Drake was plastered in the tabloids during his on-off romance with Rihanna and was rumored to have been dating Jennifer Lopez for a short period. In a separate business venture, he collaborated with Brent Hocking on an alcohol brand called Virginia Black Whiskey.<\/p>","bio_source":"custom","is_celebrity":true,"tags":{"cf_slug":"drake","cf_element":"person","cf_guid":"399ea56a-6aa0-4f27-8cba-d828c17f7db8"},"slug":"drake","ads_enabled":true,"seo_title":"Drake | TMZ","meta_description":"See the latest Drake news, videos and photo galleries on TMZ.","is_unlisted":false,"order_date":"2010-11-06T19:42:00.000000Z"},"tmz:article:79a0816c-92f8-4deb-8f11-944222923d66":{"_schema":"pbj:tmz:news:node:article:1-0-2","_id":"79a0816c-92f8-4deb-8f11-944222923d66","status":"published","etag":"a23dd9fbe43e20d8d5d39d5b0d77a68d","created_at":"1684349396476682","updated_at":"1684358342845221","title":"AI Expert Gary Marcus Says Tech Threatens Our Whole Democracy","is_homepage_news":true,"allow_comments":true,"image_ref":"tmz:image-asset:image_jpg_20230517_308c4e70d7da4d09a1828f0e1aab48a3","word_count":228,"amp_enabled":true,"smartnews_enabled":true,"apple_news_enabled":true,"apple_news_id":"fe6b0a23-9a77-4b12-939c-20d9f9557135","apple_news_revision":"AAAAAAAAAAAAAAAAAAAAAA==","apple_news_share_url":"https:\/\/apple.news\/A_msKI5p3SxKTnCDZ-VVxNQ","apple_news_updated_at":1684358342,"facebook_instant_articles_enabled":true,"twitter_publish_enabled":true,"show_related_articles":false,"related_article_refs":["tmz:article:b6ae376c-ff51-4b73-a433-b59ce84734eb","tmz:article:d5eb1040-bf8a-4bea-9a24-2dbf66c589d4"],"is_locked":false,"published_at":"2023-05-17T21:13:20.174564Z","slug":"2023\/05\/17\/artificial-intelligence-democracy-threat-risk-senate-testimony-a-i-expert-gary-marcus-warning","ads_enabled":true,"meta_description":"Artificial Intelligence poses some serious risks and could potentially threaten the very fabric of our democracy ... so says AI expert Gary Marcus, who is urging Congress to implement strong guard rails.","is_unlisted":false,"swipe":"Exclusive","order_date":"2023-05-17T18:50:20.174000Z","hf":["Artificial Intelligence","Existential Threat to U.S. Democracy","... Expert Urges Action!!!"],"hf_sizes":[3,1,2],"hf_styles":["uppercase","uppercase","none"],"person_refs":["tmz:person:32140bdd-8b68-5852-9044-ad064e9b7377","tmz:person:92f298d7-a846-52b3-a1de-a09e98a3ce71"],"category_refs":["tmz:category:8039c933-eed5-5161-ac99-600e2cfc053f","tmz:category:a2dc668f-3f68-5da1-917f-98394326c8b6","tmz:category:a9131c2e-3b11-5dae-9213-37fa5921ba5f","tmz:category:c3b76712-e496-52c1-a879-e7b65e3d811b"],"channel_ref":"tmz:channel:8504c744-620a-4e21-8a01-0fb89531dabe"},"tmz:article:d5eb1040-bf8a-4bea-9a24-2dbf66c589d4":{"_schema":"pbj:tmz:news:node:article:1-0-2","_id":"d5eb1040-bf8a-4bea-9a24-2dbf66c589d4","status":"published","etag":"04d0ed4df00e64ca7328529b1ba923e0","created_at":"1682086042268465","updated_at":"1682320835316121","title":"Khalid Not Here for AI-Generated Music, Despite Uptick in Songs","is_homepage_news":true,"allow_comments":true,"image_ref":"tmz:image-asset:image_jpg_20230421_31e1e7a6442b42c2b6b6d0d305c6ff19","word_count":237,"amp_enabled":true,"smartnews_enabled":true,"apple_news_enabled":true,"apple_news_id":"9ae26d96-5c4f-419f-b860-bb84557c617c","apple_news_revision":"AAAAAAAAAAD\/\/\/\/\/\/\/\/\/\/w==","apple_news_share_url":"https:\/\/apple.news\/AmuJtllxPQZ-4YLuEVXxhfA","apple_news_updated_at":1682320835,"facebook_instant_articles_enabled":true,"twitter_publish_enabled":true,"show_related_articles":false,"related_article_refs":["tmz:article:00c93280-e3b1-4645-9e7e-3333da54907d","tmz:article:4def4783-a687-4dca-b2ad-06936d094ab2"],"is_locked":false,"published_at":"2023-04-24T07:20:18.000000Z","slug":"2023\/04\/24\/khalid-ai-generated-music-songs-artificial-intelligence","ads_enabled":true,"meta_description":"Khalid is not a fan of AI infiltrating the music world ... and while he thinks the tech could be a helpful tool, he draws the line when it comes to mimicking artists.","is_unlisted":false,"swipe":"Exclusive","order_date":"2023-04-24T07:20:18.000000Z","hf":["Khalid","Screw AI-Generated Music!!!","Real Artists Good As We Are"],"hf_sizes":[3,1,2],"hf_styles":["uppercase","uppercase","none"],"primary_person_refs":["tmz:person:8a48d090-77b1-5c79-ae36-56978da057fd"],"person_refs":["tmz:person:8a48d090-77b1-5c79-ae36-56978da057fd","tmz:person:eaa652ca-86d6-5bb1-926e-ab0f8f2df485"],"category_refs":["tmz:category:458f3b95-7bdd-4087-a0fc-698c12bf1d8a","tmz:category:a9131c2e-3b11-5dae-9213-37fa5921ba5f","tmz:category:ab1e465e-2501-5000-b60c-070cf89def04","tmz:category:b59d9b77-1bf2-5c92-a0f1-a338eefda513"],"channel_ref":"tmz:channel:adeac3b7-a078-4cce-a2f7-358a89de60e8"}}
  ));
});
</script>

    
  <!-- end: tmz:blogroll-widget:84ae3cf6-1581-5e45-be4a-4d96cde579b1 -->
      </main>
              <div class="search-screen js__search-screen" id="search-screen" aria-hidden="true">
  <div class="search-screen__header">
    <button
      class="search-screen__btn search-screen__btn--close js__btn--search-toggle"
      id="search-screen-close-btn"
      type="button"
      data-turbolinks-permanent
      aria-label="Close"
    >
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
        <path fill="#fff" d="M10.5 7.6l7-7.1 3 3-7 7 7 7-3 3-7-7-7 7-3-3 7-7-7-7 3-3z"/>
      </svg>
    </button>
    <form class="search-screen__form" action="/search/" id="search-form" method="get">
      <div class="search-screen__input__container">
        <label>
          <span class="visually-hidden">Search</span>
          <input name="q" class="search-screen__input" placeholder="Search TMZ" type="text" autocomplete="off">
        </label>
      </div>
      <button type="submit" class="search-screen__submit" aria-label="Search">
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <path fill="#fff" d="M24.001 20.663l-5.64-4.538c1.227-2.216 1.629-4.917.93-7.624l-.014-.053C17.851 2.92 12.714-.118 7.327 1.382 2.003 2.863-1.065 8.307.344 13.775l.014.053c1.426 5.529 6.563 8.566 11.95 7.066a9.935 9.935 0 0 0 3.82-2.03l5.764 4.637 2.11-2.838zM3.908 12.727c-.942-3.649.873-7.103 4.219-8.034 3.376-.939 6.638 1.125 7.585 4.803l.015.054c.94 3.648-.874 7.102-4.22 8.033-3.376.94-6.638-1.126-7.585-4.804l-.014-.052z"/>
        </svg>
      </button>
    </form>
  </div>
    </div>

<script>
wbq.push(function manageSearchScreen() {
  var $search = $('.js__search-screen');
  var $searchCloseBtn = $('#search-screen-close-btn');
  var $searchToggleBtn = $('.js__btn--search-toggle');
  var $mastheadSearchOpenBtn = $('#masthead-search-open-btn');
  var $nav = $('.js__nav');

  function lockSearchFocus() {
    $searchCloseBtn.focus();
    document.addEventListener('focusin', focusSearchCloseBtn);
  }

  function focusSearchCloseBtn(event) {
    if (!$.contains(document.getElementById('search-screen'), event.target)) {
      $searchCloseBtn.focus();
    }
  }

  function unlockSearchFocus() {
    document.removeEventListener('focusin', focusSearchCloseBtn);
    $mastheadSearchOpenBtn.focus();
  }

  // close X used to dismiss mobile search overlay
  $searchToggleBtn.click(function (event) {
    // Toggle search screen visibility
    $search.toggleClass('search-screen--is-open');

    if ($search.hasClass('search-screen--is-open')) {
      if (window.DEVICE_VIEW === 'desktop') {
        lockSearchFocus();
      }
      window.TMZ.utils.setAccessibilityFocusTrap('search-screen');
      $search.css('visibility', 'visible');
      setTimeout(function() {
        $nav.css('visibility', 'hidden');
      }, 300);
    } else {
      window.TMZ.utils.removeAccessibilityFocusTrap();
      if (window.DEVICE_VIEW === 'desktop') {
        unlockSearchFocus();
        $mastheadSearchOpenBtn.focus();
      }
      setTimeout(function() {
        $search.css('visibility', 'hidden');
      }, 300);
    }

    // Hide nav
    if ($nav.hasClass('nav--is-open')) {
      setTimeout(function () {
        $nav.removeClass('nav--is-open');
      }, 300);
    }
    event.preventDefault();
  });
});
</script>
<!--/.search-screen-->
                    <aside id="sidebar" class="sidebar">
        </aside><!--/#sidebar-->
        <script>
          wbq.push(function renderSidebar() {
            if (!document.documentElement.hasAttribute('data-turbolinks-preview')) {
              window.TMZ.dispatch(window.TMZ.actions.renderSidebar('categories-sidebar'));
            }
          });
        </script>
          </div>
    
<div id="browser-notifications-prompt" class="browser-notifications-prompt">
  <div
    id="browser-notifications-prompt-close-btn"
    class="browser-notifications-prompt__close-btn js-track-link"
    data-context="{&quot;section&quot;:&quot;browser-notifications-prompt&quot;,&quot;name&quot;:&quot;close-btn&quot;}"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 21 21"><path fill="#9b9b9b" d="M10.5 7.6l7-7.1 3 3-7 7 7 7-3 3-7-7-7 7-3-3 7-7-7-7 3-3z"/></svg>
  </div>
  <h3 class="browser-notifications-prompt__section-title">
    Old news is old news! <br class="browser-notifications-prompt__break-tag">Be First!
  </h3>
  <div class="browser-notifications-prompt__content">
    Get TMZ breaking news sent right to your browser!
  </div>
  <div class="browser-notifications-prompt__wrapper">
    <div
      id="browser-notifications-prompt-subscribe"
      class="browser-notifications-prompt__subscribe-btn browser-notifications-prompt__link-text js-track-link"
      data-context="{&quot;section&quot;:&quot;browser-notifications-prompt&quot;,&quot;name&quot;:&quot;subscribe-btn&quot;}"
    >
      Subscribe
    </div>
    <div
      id="browser-notifications-prompt-reject"
      class="browser-notifications-prompt__link-text js-track-link"
      data-context="{&quot;section&quot;:&quot;browser-notifications-prompt&quot;,&quot;name&quot;:&quot;maybe-later-btn&quot;}"
    >
      Maybe Later
    </div>
  </div>
</div>
  
      <div id="jumbotron-bottom" class="jumbotron jumbotron-bottom js-html-import-lazy" data-url="/_/promotion/categories-jumbotron-bottom/jumbotron.html">
    </div><!--/#jumbotron-bottom-->
  
        <div id="ad-footer"></div>
    
<footer class="footer">
  <div class="row footer__row">
    <div class="col footer__col footer__col--about">
      <h2 class="footer__header">about tmz</h2>
      <ul class="footer__list-group">
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/pages/about/" data-context="{&quot;section&quot;:&quot;footer-about&quot;,&quot;name&quot;:&quot;about-tmz&quot;,&quot;pos&quot;:1}">About TMZ.com</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/privacy" rel="noopener" target="_blank" data-context="{&quot;section&quot;:&quot;footer-about&quot;,&quot;name&quot;:&quot;privacy-policy&quot;,&quot;pos&quot;:2}">Privacy Policy (New)</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/terms" rel="noopener" target="_blank" data-context="{&quot;section&quot;:&quot;footer-about&quot;,&quot;name&quot;:&quot;terms-of-use&quot;,&quot;pos&quot;:3}">Terms of Use (New)</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/privacy" rel="noopener" target="_blank" data-context="{&quot;section&quot;:&quot;footer-about&quot;,&quot;name&quot;:&quot;ad-choices&quot;,&quot;pos&quot;:4}">Ad Choices</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://privacy.tmz.com/main/web/main" data-context="{&quot;section&quot;:&quot;footer-about&quot;,&quot;name&quot;:&quot;do-not-sell&quot;,&quot;pos&quot;:5}">Your Privacy Choices</a></li>
      </ul>
    </div>
    <div class="col footer__col footer__col--contact">
      <h2 class="footer__header">contact tmz</h2>
      <ul class="footer__list-group">
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/pages/contact-us/" data-context="{&quot;section&quot;:&quot;footer-contact&quot;,&quot;name&quot;:&quot;contact-us&quot;,&quot;pos&quot;:1}">Contact Us</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/pages/tips/" data-context="{&quot;section&quot;:&quot;footer-contact&quot;,&quot;name&quot;:&quot;send-a-hot-tip&quot;,&quot;pos&quot;:2}">Send a Hot Tip</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.linkedin.com/company/tmz/" data-context="{&quot;section&quot;:&quot;footer-contact&quot;,&quot;name&quot;:&quot;careers&quot;,&quot;pos&quot;:3}">Careers</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/pages/advertise/" data-context="{&quot;section&quot;:&quot;footer-contact&quot;,&quot;name&quot;:&quot;advertising-inquiries&quot;,&quot;pos&quot;:4}">Advertising Inquiries</a></li>
        <li><a class="footer__list-group-item js-track-link" href="https://www.tmz.com/pages/media-inquiries/" data-context="{&quot;section&quot;:&quot;footer-contact&quot;,&quot;name&quot;:&quot;media-inquiries&quot;,&quot;pos&quot;:5}">Media Inquiries</a></li>
      </ul>
    </div>
    <div class="col footer__col footer__col--subscribe">
      <h2 class="footer__header">subscribe</h2>
      <p>Yes! Send me email updates and offers from TMZ and its Affiliates. By subscribing, I agree to the <a class="js-track-link" href="https://www.tmz.com/privacy" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-subscribe&quot;,&quot;name&quot;:&quot;privacy-policy&quot;}">Privacy Policy</a> and <a class="js-track-link" href="https://www.tmz.com/terms" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-subscribe&quot;,&quot;name&quot;:&quot;privacy-policy&quot;}">Terms of Use</a></p>
      <form id="newsletter-subscription-form" class="footer-subscribe">
        <div class="footer-form--bottom">
          <label for="newsletter-subscription-email" class="visually-hidden">Subscribe to TMZ newsletter</label>
          <input type="email" id="newsletter-subscription-email" class="footer-subscribe__input quicksub-email" name="email" value="" placeholder="Email Address" autocomplete="off" required>
          <button
            id="newsletter-subscription-button"
            class="footer-subscribe__button js-track-link"
            data-context="{&quot;section&quot;:&quot;footer&quot;,&quot;name&quot;:&quot;subscribe&quot;}"
            type="submit"
            >Subscribe</button>
        </div>
      </form>
      <h2 class="footer__header">follow</h2>
      <ul class="footer-social__list-group">
        <li><a class="footer-social__list-group-item icon-facebook--white footer-social__list-group-item--facebook js-track-link" href="https://www.facebook.com/TMZ" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-social&quot;,&quot;name&quot;:&quot;facebook&quot;,&quot;pos&quot;:1}" aria-label="TMZ on Facebook"></a></li>
        <li><a class="footer-social__list-group-item icon-twitter--white footer-social__list-group-item--twitter js-track-link" href="https://twitter.com/tmz" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-social&quot;,&quot;name&quot;:&quot;twitter&quot;,&quot;pos&quot;:2}" aria-label="TMZ on Twitter"></a></li>
        <li><a class="footer-social__list-group-item icon-youtube--white footer-social__list-group-item--youtube js-track-link" href="https://www.youtube.com/user/TMZ" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-social&quot;,&quot;name&quot;:&quot;youtube&quot;,&quot;pos&quot;:3}" aria-label="TMZ on YouTube"></a></li>
        <li><a class="footer-social__list-group-item icon-instagram--white footer-social__list-group-item--instagram js-track-link" href="https://instagram.com/tmz_tv/" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-social&quot;,&quot;name&quot;:&quot;instagram&quot;,&quot;pos&quot;:4}" aria-label="TMZ on Instagram"></a></li>
      </ul>
    </div>
    <div class="col footer__col footer__col--apps">
      <h2 class="footer__header">TMZ apps</h2>
      <ul class="footer-apps">
        <li class="footer-apps__item"><a class="footer-apps__link footer-apps__link--ios footer-apps__link--ios-en js-track-link" href="https://itunes.apple.com/app/apple-store/id299948601?pt=201436&amp;ct=Footer%20Link&amp;mt=8" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-apps&quot;,&quot;name&quot;:&quot;ios&quot;,&quot;pos&quot;:1}">Download the TMZ App on the Apple App Store</a></li>
        <li class="footer-apps__item"><a class="footer-apps__link footer-apps__link--google footer-apps__link--google-en js-track-link" href="https://play.google.com/store/apps/details?id=com.rhythmnewmedia.tmz&amp;referrer=utm_source%3Dtmzfooter%26utm_medium%3Dnative%26utm_campaign%3Dfooter%26anid%3Dadmob" rel="noopener noreferrer" target="_blank" data-context="{&quot;section&quot;:&quot;footer-apps&quot;,&quot;name&quot;:&quot;android&quot;,&quot;pos&quot;:2}">Download the TMZ App on the Google Play Store</a></li>
      </ul>
    </div>
    <div class="col footer__col footer__col--copyright">
      <span class="footer__copyright">&copy; 2024 EHM productions, inc. all rights reserved.</span>
      <div class="thirtymilezone">
        <img width="229" height="21" class="img-fluid" src="https://static.tmz.com/tmz-web/img/thirtymilezone.svg" alt="Thirty Mile Zone" loading="lazy">
      </div>
    </div>
  </div>
</footer><!--/.footer-->

<script id="newsletter-subscription-success" type="text">
  <p class="thanks">Thank you!<br> You have successfully signed up.</p>
</script>


<script>
  wbq.push(function renderSubscribeToNewsletterModal() {
    function renderThankYou() {
      document.getElementById('newsletter-subscription-form').innerHTML = document.getElementById('newsletter-subscription-success').innerHTML;
    }

    $('#newsletter-subscription-form').on('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.TMZ.utils.isValidEmail($('#newsletter-subscription-email').val())) {
        window.TMZ.dispatch(window.TMZ.actions.subscribeToNewsletter($('#newsletter-subscription-email').val(), false));
        document.addEventListener(window.TMZ.constants.actionTypes.SUBSCRIBE_TO_NEWSLETTER_ACCEPTED, renderThankYou);
      } else {
        alert('Please enter a valid email.');
      }
    });
  });
</script>
  
  

<div id="ad-adhesion"></div>
<div id="ad-interstitial"></div>
<div id="ad-skin"></div>

<script>
wbq.push(function renderPage() {
  var isTurbolinksPreview = document.documentElement.hasAttribute('data-turbolinks-preview');
  window.TMZ.dispatch(window.TMZ.actions.renderPage(isTurbolinksPreview));
});
</script>

</body>
</html>
