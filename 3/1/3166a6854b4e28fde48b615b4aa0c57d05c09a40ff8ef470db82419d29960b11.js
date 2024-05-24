/*! © 2024 Aditude, Inc - Prebid - production - Updated: 2024-01-29T17:22:03.345Z, v1.4.0, injection, 5f4b471704f6a7e37419 */
"use strict";(self.tudeChunk=self.tudeChunk||[]).push([[95871],{66219:function(t,e,n){n.r(e);var r=n(16144),o=n(47699),i=n(26196),a=n(56236),c="\n  .".concat(a.d1.replace(":","\\:")," {\n    padding-top: 1.4rem;\n    padding-bottom: 1.4rem;\n    min-height: 190px;\n  }\n  @media (min-width:480px) {\n    .").concat(a.d1.replace(":","\\:")," {\n      min-height: 90px;\n      padding: 1.8rem 0;\n    }\n  }\n"),u={container:"#main",selectors:"#main > *",aggression:"low",label:{enabled:false,customStyle:"\n  .".concat(a.$w.replace(":","\\:")," {\n    height: 16px;\n    padding: 0px;\n    font-family: Arial, sans-serif;\n    margin: auto auto 10px;\n    text-align: center;\n    line-height: 16px;\n    font-weight: normal;\n    color: rgb(159, 159, 159);\n    font-size: 11px;\n    text-transform: uppercase;\n  }\n")},cssStyles:c},s=n(72043);var f={addStyles,getElement:function(t){return document.querySelector(t)},getElements},l=0,h=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return false;var n=document.createElement("div");n.classList.add(a.d1);var r=document.createElement("div");if(r.id=a.Qk+"-"+l,r.classList.add(a.cw),r.style.minHeight=90,l++,e){var o=document.createElement("span");o.textContent+="advertisement",o.classList.add(a.$w),n.appendChild(o)}n.appendChild(r),t.parentNode.insertBefore(n,t.nextSibling),window.tude=window.tude||{},window.tude.cmd=window.tude.cmd||[],window.tude.cmd.push((function(){window.tude.lazyloadDivs([{id:r.id,targeting:{adslotorder:l}}])}))};var d={afterHeader:false,afterImage:true,afterLast:false,afterOther:false,afterParagraph:true,maxAdRatio:.55,maxAds:false,min:480,skip:0,start:200},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(Object.assign({},d),t)},g={high:p({afterOther:true,afterHeader:true,maxAdRatio:.78,min:320,start:100}),medium:p({afterHeader:true,maxAdRatio:.65,min:360,start:150}),low:p({afterImage:false,maxAdRatio:.55,min:480,start:200}),minimal:p({afterImage:false,afterParagraph:true,maxAdRatio:.35,min:530,start:300})},v=n(86917).Promise;function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)var w,b="basicInjection";function x(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return w(this,void 0,void 0,y().mark((function t(){var n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=(0,s.Z)(b)).log.apply(n,e);case 1:case"end":return t.stop()}}),t)})))}(0,s.Z)(b).setLabel("InjectionContent","#FFA500");var E=function(t){var e={container:false,contents:false,components:false,stylesAdded:false,viewport:{height:window.innerHeight,width:window.innerWidth}};if(e.stylesAdded||(f.addStyles(t.cssStyles),t.label.enabled&&f.addStyles(t.label.customStyle),e.stylesAdded=true),function(){var n=f.getElement(t.container);if(!n)return(0,s.Z)(b).warn("Cannot find container for ad injection",t.container),false;e.container={width:n.offsetWidth,height:n.offsetHeight};var r=t.sectionFilter|,o=[];f.getElements(t.selectors).forEach((function(t){var e;r(t)&&o.push({tagName:t.tagName,tagClass:(e=t.tagName,a.Jz.includes(e)?"header":a.ST.includes(e)?"paragraph":a.XD.includes(e)?"image":"other"),height:t.offsetHeight,width:t.offsetWidth,chars:t.innerText.length,words:t.innerText.split(" ").length+1})})),e.contents={count:o.length,height:{avg:n.offsetHeight/o.length},items:o}}(),e.viewport={height:window.innerHeight,width:window.innerWidth},!e.contents)return(0,s.Z)(b).warn("No items found in content to inject ads",t.selectors),false;var n=t.aggressionOptions,r=void 0===n?{}:n,o=Object.assign(Object.assign({},g[t.aggression]),r),i=Math.max(o.min,(1-o.maxAdRatio)*e.viewport.height),c=f.getElements(t.selectors);"function"==typeof o.start&&(o.start=o.start());var u=0,l=o.start>0?-o.start:0;function d(e){return l=0,u++,h(e,t.label.enabled),true}var p=e.contents.items.length;p<1&&(0,s.Z)(b).warn("Ad injection is enabled but could not find the content items to iterate");var v=0;x("Content ad injection profile",o),x("Content ad injection found items",p),e.contents.items.every((function(t,e){if(p===e+1&&!o.afterLast)return false;if(o.maxAds&&u>=o.maxAds)return(0,s.Z)().log("Ad injection reached max ads",o),false;if(t.height,(l+=t.height)>i){if(v<o.skip)return l=0,v++,true;("paragraph"===t.tagClass&&o.afterParagraph||"image"===t.tagClass&&o.afterImage||"header"===t.tagClass&&o.afterHeader||"other"===t.tagClass&&o.afterOther)&&d(c[e])}return true}))},j=new r.Z("AdInjection","1.0.1",u);j.once(i.o.START,(function(t){E(Object.assign(Object.assign({},j.config),t),{})})),(0,o.f)(j)},16144:function(t,e,n){var r=n(47699),o=n(72043)ar c=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(this,t),this.name=e,this.version=n,this.config={},this.defaultConfig=r,this.queue=[],this.ready=false}var e,n,i;return e=t,n=[{key:"trigger",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.config,r=this.queue.filter());r.forEach()),r.length>0&&(this.queue=this.queue.filter((function(e){return e.event!==t&&true===e.once})))}},{key:"on",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(void 0===t)return(0,o.Z)().error(this.name+" plugin set an event handler on an event that is not defined",t),false;this.queue.push((0,r.$)(t,e,n))}},{key:"once",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.once=true,this.on(t,e,n)}},{key:"setConfig",value}],n&&a(e.prototype,n),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:false}),t}();e.Z=c},47699:function(t,e,n){n.d(e,{$:function(){return o},f});var r=function(t){window.tude=window.tude||{},window.tude.cmd=window.tude.cmd||[],window.tude.cmd.push())},o=function(t,e,n){var r=n.once;return{event:t,handler:e,once:void 0!==r&&r}}}}]);