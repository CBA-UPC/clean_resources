!{0:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return l}),n.d(e,"q",function(){return d}),n.d(e,"k",function(){return i}),n.d(e,"m",function(){return a}),n.d(e,"j",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"l",function(){return g}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return p}),n.d(e,"h",function(){return b}),n.d(e,"n",function(){return m}),n.d(e,"o",function(){return y}),n.d(e,"p",function(){return S}),n.d(e,"e",;var o=nnads.config,r=nnads.cmd,s=nnads.fn.CMPTool,l=nnads.fn.DOMReady,d=(nnads.fn.checkForMoat,nnads.fn.checkPermutive,nnads.fn.loadScript),i=(nnads.fn.loadJSON,nnads.fn.getBrowserWidth),a=nnads.fn.getHeight,c=nnads.fn.elementInViewport,u=nnads.fn.element50InViewport,g=(nnads.fn.percentageElementInView,nnads.fn.getCookie),f=(nnads.fn.setCookie,nnads.debug.debugAll),p=nnads.debug.debugging,b=nnads.debug.debuggingTest,m=nnads.debug.getflag,y=nnads.debug.info,S=nnads.debug.kdebug,v=nnads.debug.log},60:97:function(t,e,n){"use strict";n.r(e);var l=n(0);tion i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];l.p.apply(void 0,["nndebug=dynamic-blocking",{title:"nn__DYNAMIC-BLOCKING:",style:"font-weight:bold;font-size:13px;color:#ccc0f5;"}].concat(e))}var a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return l.p.apply(void 0,["nndebug=gpt",{title:"nn__GPT:"}].concat(e))},c=window,e=document,u=e.getElementById.bind(e);function g(n,o){var t=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(!t&&AdSlots.config[n])return console.error("WARNING: Adslot config '".concat(n,"' already exists"));AdSlots.config[n]&&!t&&(o.original=Object.keys(AdSlots.config[n]).filter(.reduce(function(t,e){return JSON.stringify(o[e])!==JSON.stringify(AdSlots.config[n][e])&&(t[e]=o[e]),t},{}),o=d(d({},o),AdSlots.config[n])),AdSlots.config[n]=o,a("Slot %c".concat(n,"%c added to config%s"),"font-weight:bold","",t&&AdSlots.config[n]?" (replaced)":"");t=!0;if((void 0!==o.minWidth&&Object(l.k)()<o.minWidth||void 0!==o.maxWidth&&Object(l.k)()>o.maxWidth)&&(t=!1),AdSlots.divCheck&&!o.skipDivCheck&&!u(o.id))return a("%c".concat(o.id,"%c adslot DOES NOT exist on the page"),"font-weight:bold;color:red","color:red"),!1;t&&(o.defined=!0,googletag.cmd.push(function(){if(AdSlots.slots[n]&&(f(n),delete AdSlots.slots[n]),AdSlots.slots[n]=googletag.defineSlot(o.path,o.sizes,o.id).addService(googletag.pubads()),o.targeting)for(var t in o.targeting)AdSlots.slots[n].setTargeting(t,o.targeting[t]);var e;void 0!==o.setCollapseEmptyDiv&&(e=AdSlots.slots[n]).setCollapseEmptyDiv.apply(e,r(Array.isArray(o.setCollapseEmptyDiv)?o.setCollapseEmptyDiv:[o.setCollapseEmptyDiv])),a("Slot Defined:",o)}))}function f(t){var e=[];return void 0!==(t="string"==typeof t?[t]:t)&&t.length?(t.forEach(function(t){AdSlots.slots[t]&&e.push(AdSlots.slots[t])}),a("Destroyed Slots:",t),googletag.destroySlots(e)):(a("All Slots Destroyed"),googletag.destroySlots())}function p(){var t,e=AdSlots.config,n=[];for(t in e){var o=u(e[t].id);o&&Object(l.j)(o)&&n.push(t)}return a("Slots InView:",n),n}function b(){var t,e=AdSlots.config,n=[];for(t in e){var o=u(e[t].id);o&&"none"===c.getComputedStyle(o).display&&n.push(t)}return a("Empty Slots",n),n}function m(t){var t=t.slot,e=t.getSlotElementId(),t=t.getResponseInformation(),n=null==t?void 0:t.campaignId;if(n&&null!=(t=l.d.modules.gpt["dynamic-blocking"])&&t.orderIds&&null!=(t=l.d.modules.gpt["dynamic-blocking"])&&t.orderIds[n]&&0<(null==(t=l.d.modules.gpt["dynamic-blocking"])?void 0:t.orderIds[n].length))for(var o in i("Campaign Matched on (%s)",e,n),c.AdSlots.slots){var r,s="/"+c.AdSlots.slots[o].getAdUnitPath();null!=(r=l.d.modules.gpt["dynamic-blocking"])&&r.orderIds[n].includes(s)&&(googletag.destroySlots([c.AdSlots.slots[o]]),i('Slot "%s" destroyed',e,s))}}c.AdSlots=c.AdSlots||{config:{},slots:{}},c.generateAdSlot=g,c.refreshAdSlots=function(t){AdSlots.meta=AdSlots.meta||{refreshCount:0},AdSlots.meta.refreshCount||(AdSlots.meta.refreshCount=0,nnads.meta.refreshCount=0);var e=AdSlots.meta.refreshCount,n=(0<=AdSlots.meta.refreshCount&&googletag.cmd.push(function(){googletag.pubads().setTargeting("refresh",JSON.stringify(e))}),AdSlots.meta.refreshCount++,nnads.meta.refreshCount++,[]);if("string"==typeof t&&(t=[t]),c.dispatchEvent(new CustomEvent("nn_refresh",{detail:{slots:t}})),void 0===t||!t.length)return a("All Slots Refreshed",Object.keys(AdSlots.slots)),googletag.cmd.push(function(){return Object.values(AdSlots.slots).forEach(,googletag.pubads().refresh(null)});t.forEach(,0===n.length&&console.warn("REFRESH mismatch for ".concat(t.join(", ")," !!! No matching slot(s). failed.")),n&&(n.forEach(,googletag.cmd.push()},c.destroyAdSlots=f,c.excludeAdSlots=function(e){return Object.keys(AdSlots.config).filter(.reduce([])},c.getAdSlotsInView=p,c.AdSlots.getInView=p,c.getEmptyAdSlots=b,c.AdSlots.getEmptySlots=b,c.getSlots=function(){return[].concat(r(b()),r(p()))};var y=window,S=(!1===y.AdSlots.disableScripts.includes("gpt")&&Object(l.q)("https://securepubads.g.doubleclick.net/tag/js/gpt.js",{debug:a}),y.googletag=y.googletag||{cmd:[]},void 0===y.googletag.cmd&&(y.googletag.cmd=[]),y.enableSingleRequest=!0,y.googletag.cmd.push(function(){a("GPT Queue started"),y.googletag.pubads().disableInitialLoad();var t=y.location.pathname.substring(0,40),t=(y.googletag.pubads().setTargeting("url",t),nnads.meta.url=t,Object(l.o)("Ad URL:",t),a("Collapse Empty Divs:","occupy"===y.collapseEmptyDivs?"occupy":!!y.collapseEmptyDivs),"occupy"!==y.collapseEmptyDivs&&y.googletag.pubads().collapseEmptyDivs(!!y.collapseEmptyDivs),l.h&&(y.googletag.pubads().setTargeting("testpage","true"),Object(l.o)("Page Condition:","testpage")),Object(l.n)("nntestads",!0)||y.AdSlots.displayMode),e=("production"!==t&&void 0!==t&&(Object(l.o)("TestMode Enabled:",t),nnads.meta.testads=t,y.googletag.pubads().setTargeting("testads",t)),y.enableSingleRequest&&(a("Single Request Mode = enabled"),y.googletag.pubads().enableSingleRequest()),Object(l.l)("_sharedid"));e&&googletag.cmd.push(function(){googletag.pubads().setPublisherProvidedId(e),googletag.enableServices(),a("ppid values",e)}),y.googletag.enableServices(),y.googletag.pubads().addEventListener("slotRenderEnded",function(t){var e=t.slot.getSlotElementId();y.dispatchEvent(new Event("nn_render_ads")),"nn_skinl"!==e&&"nn_skinr"!==e||document.getElementById(e)&&(document.getElementById(e).style.display="block"),(l.g||"1"===Object(l.l)("nninfo"))&&t.isEmpty&&console.warn("EMPTY Ad Slot (unfilled):",t.slot.getSlotElementId())}),"dynamic-blocking"in l.d.modules.gpt&&(i("Dynamic Blocking Campaign ID:",l.d.modules.gpt["dynamic-blocking"].orderIds),y.googletag.pubads().addEventListener("slotResponseReceived",m))}),window);l.c.push("gpt",function(){googletag.cmd.push(function(){Object(l.b)(function(){!function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],o=l.d.modules.gpt;if(t.length<1)for(var e in o.units)t.push(e);document.body.classList.contains("demopage")&&(o.networkid=o.networkid.split(",")[0]),t.forEach(function(t){var e=o.units[t];if(!e)return console.error('%cWARNING%c "%s" is NOT a valid ad unit id',"font-weight:bold","",t);var n=e.path;n.includes("/")||("stage"!==Object(l.n)("nntestads",!0)&&"nomcm"!==Object(l.n)("nnmode",!0)||(o.networkid=o.networkid.split(",")[0]),e.path="".concat(o.networkid,"/").concat(o.siteid,"/").concat(n)),e.id=t,e.collapseEmptyDivs&&(e.setCollapseEmptyDiv=!0),e.collapseBeforeAdFetch&&(e.setCollapseEmptyDiv=[!0,!0]),e.skipFirstPageLoad?S.AdSlots.config[t]=e:g(t,e)})}(nnads.queuedSlotIds),S.dispatchEvent(new Event("nn_post_setup"))})})})}});