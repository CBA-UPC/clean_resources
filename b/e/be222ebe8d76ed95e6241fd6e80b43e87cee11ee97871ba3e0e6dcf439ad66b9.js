(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[193],{6368:(t,e,s)=>{"use strict";s.d(e,{e:()=>n});var r=s(2374),i={};function n(t){if(t in i)return i[t];if(0===(t||"").indexOf("data:"))return{protocol:"data"};let e;var s=r._A?.location,n={};if(r.il)e=document.createElement("a"),e.href=t;else try{e=new URL(t,s.href)}catch(t){return n}n.port=e.port;var o=e.href.split("://");!n.port&&o[1]&&(n.port=o[1].split("/")[0].split("@").pop().split(":")[1]),n.port&&"0"!==n.port||(n.port="https"===o[0]?"443":"80"),n.hostname=e.hostname||s.hostname,n.pathname=e.pathname,n.protocol=o[0],"/"!==n.pathname.charAt(0)&&(n.pathname="/"+n.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===s.protocol,h=e.hostname===s.hostname&&e.port===s.port;return n.sameOrigin=a&&(!e.hostname||h),"/"===n.pathname&&(i[t]=n),n}},6408:(t,e,s)=>{"use strict";s.d(e,{W:()=>i});var r=s(2374);function i(){return"function"==typeof r._A?.PerformanceObserver}},1307:(t,e,s)=>{"use strict";s.r(e),s.d(e,{Aggregate:()=>v});var r=s(4045),i=s(6875),n=s(7022),o=s(2438),a=s(6368),h=s(6408),u=s(8683),c=s.n(u),d=s(2919),l=s(2053),m=s(2628),f=s(4329);class g{#t=void 0;#e=!0;#s=[];#r=setTimeout((()=>this.#i()),5e3);#n(){this.#s.forEach((t=>t())),this.#s=[],clearTimeout(this.#r)}#i(){this.#e=!1,this.#s=[]}settle(t){!1!==this.#t&&!1!==this.#e&&(void 0===this.#t?this.#s.push(t):t())}decide(t){this.#t=t,!1===t&&this.#i(),!0===t&&this.#n()}}var p=s(1509);class v extends p.W{static featureName=m.FEATURE_NAME;constructor(t,e){var s;if(super(t,e,m.FEATURE_NAME),s=this,!(0,d.OP)(t).xhrWrappable)return;const o=new g;this.ptid="",this.ignoredEvents={global:{mouseup:!0,mousedown:!0},window:{load:!0,pagehide:!0},xhrOriginMissing:{ignoreAll:!0}},this.toAggregate={typing:[1e3,2e3],scrolling:[100,1e3],mousing:[1e3,2e3],touching:[1e3,2e3]},this.rename={typing:{keydown:!0,keyup:!0,keypress:!0},mousing:{mousemove:!0,mouseenter:!0,mouseleave:!0,mouseover:!0,mouseout:!0},scrolling:{scroll:!0},touching:{touchstart:!0,touchmove:!0,touchend:!0,touchcancel:!0,touchenter:!0,touchleave:!0}},this.trace={},this.nodeCount=0,this.sentTrace=null,this.harvestTimeSeconds=(0,d.Mt)(t,"session_trace.harvestTimeSeconds")||10,this.maxNodesPerHarvest=(0,d.Mt)(t,"session_trace.maxNodesPerHarvest")||1e3,this.laststart=0,(0,r.X)("feat-stn",(()=>{"undefined"!=typeof PerformanceNavigationTiming?this.storeTiming(window.performance?.getEntriesByType("navigation")?.[0]||{}):this.storeTiming(window.performance?.timing);var t=new i.o("resources",{onFinished:function(e){e.sent&&e.responseText&&!this.ptid&&(this.ptid=e.responseText,(0,d.OP)(this.agentIdentifier).ptid=this.ptid,t.startTimer(this.harvestTimeSeconds));e.sent&&e.retry&&this.sentTrace&&((0,n.D)(this.sentTrace,((t,e)=>{this.mergeSTNs(t,e)})),this.sentTrace=null)}.bind(this),retryDelay:this.harvestTimeSeconds},this);t.harvest.on("resources",function(e){if((0,l.z)()>9e5)return t.stopTimer(),void(this.trace={});if(this.ptid&&this.nodeCount<=30)return;return this.takeSTNs(e.retry)}.bind(this)),t.runHarvest({needResponse:!0}),o.decide(!0)}),this.featureName,this.ee),(0,r.X)("block-stn",(()=>{o.decide(!1)}),this.featureName,this.ee),(0,r.X)("bst",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeEvent(...e)))}),this.featureName,this.ee),(0,r.X)("bstTimer",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeTimer(...e)))}),this.featureName,this.ee),(0,r.X)("bstResource",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeResources(...e)))}),this.featureName,this.ee),(0,r.X)("bstHist",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeHist(...e)))}),this.featureName,this.ee),(0,r.X)("bstXhrAgg",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeXhrAgg(...e)))}),this.featureName,this.ee),(0,r.X)("bstApi",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeSTN(...e)))}),this.featureName,this.ee),(0,r.X)("errorAgg",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.storeErrorAgg(...e)))}),this.featureName,this.ee),(0,r.X)("pvtAdded",(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.settle((()=>s.processPVT(...e)))}),this.featureName,this.ee),(0,f.L)(this.agentIdentifier,this.featureName)}processPVT(t,e,s){var r={};r[t]=e,this.storeTiming(r),this.hasFID(t,s)&&this.storeEvent({type:"fid",target:"document"},"document",e,e+s.fid)}storeTiming(t){for(let e in t){const s=t[e],r=e.toLowerCase();if(r.indexOf("size")>=0||r.indexOf("status")>=0)continue;if(!("number"==typeof s&&s>=0))continue;const i=Math.round(t[e]);this.storeSTN({n:e,s:i,e:i,o:"document",t:"timing"})}}storeTimer(t,e,s,r){var i="timer";"requestAnimationFrame"===r&&(i=r);var n={n:r,s:e,e:s,o:"window",t:i};this.storeSTN(n)}storeEvent(t,e,s,r){if(this.shouldIgnoreEvent(t,e))return!1;var i={n:this.evtName(t.type),s,e:r,t:"event"};try{i.o=this.evtOrigin(t.target,e)}catch(t){i.o=this.evtOrigin(null,e)}this.storeSTN(i)}evtName(t){var e=t;return(0,n.D)(this.rename,(function(s,r){t in r&&(e=s)})),e}evtOrigin(t,e){var s="unknown";if(t&&t instanceof XMLHttpRequest){var r=this.ee.context(t).params;if(!(r&&r.status&&r.method&&r.host&&r.pathname))return"xhrOriginMissing";s=r.status+" "+r.method+": "+r.host+r.pathname}else t&&"string"==typeof t.tagName&&(s=t.tagName.toLowerCase(),t.id&&(s+="#"+t.id),t.className&&(s+="."+c()(t.classList).join(".")));return"unknown"===s&&("string"==typeof e?s=e:e===document?s="document":e===window?s="window":e instanceof FileReader&&(s="FileReader")),s}storeHist(t,e,s){var r={n:"history.pushState",s,e:s,o:t,t:e};this.storeSTN(r)}storeResources(t){t&&0!==t.length&&(t.forEach((t=>{var e=(0,a.e)(t.name),s={n:t.initiatorType,s:0|t.fetchStart,e:0|t.responseEnd,o:e.protocol+"://"+e.hostname+":"+e.port+e.pathname,t:t.entryType};s.s<=this.laststart||this.storeSTN(s)})),this.laststart=0|t[t.length-1].fetchStart)}storeErrorAgg(t,e,s,r){if("err"===t){var i={n:"error",s:r.time,e:r.time,o:s.message,t:s.stackHash};this.storeSTN(i)}}storeXhrAgg(t,e,s,r){if("xhr"===t){var i={n:"Ajax",s:r.time,e:r.time+r.duration,o:s.status+" "+s.method+": "+s.host+s.pathname,t:"ajax"};this.storeSTN(i)}}storeSTN(t){if(!(this.nodeCount>=this.maxNodesPerHarvest)){var e=this.trace[t.n];e||(e=this.trace[t.n]=[]),e.push(t),this.nodeCount++}}mergeSTNs(t,e){if(!(this.nodeCount>=this.maxNodesPerHarvest)){var s=this.trace[t];s||(s=this.trace[t]=[]),this.trace[t]=e.concat(s),this.nodeCount+=e.length}}takeSTNs(t){(0,h.W)()||this.storeResources(window.performance.getEntriesByType("resource"));var e=(0,n.D)(this.trace,((t,e)=>t in this.toAggregate?(0,n.D)(e.sort(this.byStart).reduce(this.smearEvtsByOrigin(t),{}),this.val).reduce(this.flatten,[]):e)).reduce(this.flatten,[]);if(0===e.length)return{};t&&(this.sentTrace=this.trace),this.trace={},this.nodeCount=0;var s={qs:{st:""+(0,d.OP)(this.agentIdentifier).offset},body:{res:e}};if(!this.ptid){const{userAttributes:t,atts:e,jsAttributes:i}=(0,d.C5)(this.agentIdentifier);s.qs.ua=t,s.qs.at=e;var r=(0,o.P)(i);s.qs.ja="{}"===r?null:r}return s}byStart(t,e){return t.s-e.s}smearEvtsByOrigin(t){var e=this.toAggregate[t][0],s=this.toAggregate[t][1],r={};return(i,n)=>{var o=i[n.o];o||(o=i[n.o]=[]);var a=r[n.o];return"scrolling"!==t||this.trivial(n)?a&&n.s-a.s<s&&a.e>n.s-e?a.e=n.e:(r[n.o]=n,o.push(n)):(r[n.o]=null,n.n="scroll",o.push(n)),i}}val(t,e){return e}flatten(t,e){return t.concat(e)}hasFID(t,e){return"fi"===t&&!!e&&"number"==typeof e.fid}trivial(t){return!!(t&&"number"==typeof t.e&&"number"==typeof t.s&&t.e-t.s<4)}shouldIgnoreEvent(t,e){var s=this.evtOrigin(t.target,e);return t.type in this.ignoredEvents.global||(!(!this.ignoredEvents[s]||!this.ignoredEvents[s].ignoreAll)||!(!this.ignoredEvents[s]||!(t.type in this.ignoredEvents[s])))}}},2628:(t,e,s)=>{"use strict";s.d(e,{ADD_EVENT_LISTENER:()=>g,BST_RESOURCE:()=>o,BST_TIMER:()=>l,END:()=>u,FEATURE_NAME:()=>i,FN_END:()=>d,FN_START:()=>c,ORIG_EVENT:()=>f,PUSH_STATE:()=>m,RESOURCE:()=>a,RESOURCE_TIMING_BUFFER_FULL:()=>n,START:()=>h});var r=s(2919);const i=s(2325).D.sessionTrace,n="resourcetimingbufferfull",o="bstResource",a="resource",h="-start",u="-end",c="fn"+h,d="fn"+u,l="bstTimer",m="pushState",f=r.Yu.EV,g="addEventListener"},8683:t=>{t.exports=function(t,e,s){e||(e=0),void 0===s&&(s=t?t.length:0);for(var r=-1,i=s-e||0,n=Array(i<0?0:i);++r<i;)n[r]=t[e+r];return n}}}]);