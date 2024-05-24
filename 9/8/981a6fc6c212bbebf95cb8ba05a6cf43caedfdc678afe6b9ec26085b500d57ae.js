"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[193],{6368:(e,t,s)=>{s.d(t,{e:()=>n});var r=s(2374),i={};function n(e){if(e in i)return i[e];if(0===(e||"").indexOf("data:"))return{protocol:"data"};let t;var s=r._A?.location,n={};if(r.il)t=document.createElement("a"),t.href=e;else try{t=new URL(e,s.href)}catch(e){return n}n.port=t.port;var o=t.href.split("://");!n.port&&o[1]&&(n.port=o[1].split("/")[0].split("@").pop().split(":")[1]),n.port&&"0"!==n.port||(n.port="https"===o[0]?"443":"80"),n.hostname=t.hostname||s.hostname,n.pathname=t.pathname,n.protocol=o[0],"/"!==n.pathname.charAt(0)&&(n.pathname="/"+n.pathname);var a=!t.protocol||":"===t.protocol||t.protocol===s.protocol,h=t.hostname===s.hostname&&t.port===s.port;return n.sameOrigin=a&&(!t.hostname||h),"/"===n.pathname&&(i[e]=n),n}},6408:(e,t,s)=>{s.d(t,{W:()=>i});var r=s(2374);function i(){return"function"==typeof r._A?.PerformanceObserver}},1307:(e,t,s)=>{s.r(t),s.d(t,{Aggregate:()=>v});var r=s(4045),i=s(6875),n=s(7022),o=s(2438),a=s(6368),h=s(6408),u=s(8683),c=s.n(u),d=s(27),m=s(2053),l=s(5330),g=s(2628),f=s(4329);class p{#e=void 0;#t=!0;#s=[];#r=setTimeout((()=>this.#i()),5e3);#n(){this.#s.forEach((e=>e())),this.#s=[],clearTimeout(this.#r)}#i(){this.#t=!1,this.#s=[]}settle(e){!1!==this.#e&&!1!==this.#t&&(void 0===this.#e?this.#s.push(e):e())}decide(e){this.#e=e,!1===e&&this.#i(),!0===e&&this.#n()}}class v extends l.m{static featureName=g.FEATURE_NAME;constructor(e,t){var s;if(super(e,t,g.FEATURE_NAME),s=this,!(0,d.OP)(e).xhrWrappable)return;const o=new p;this.ptid="",this.ignoredEvents={global:{mouseup:!0,mousedown:!0},window:{load:!0,pagehide:!0},xhrOriginMissing:{ignoreAll:!0}},this.toAggregate={typing:[1e3,2e3],scrolling:[100,1e3],mousing:[1e3,2e3],touching:[1e3,2e3]},this.rename={typing:{keydown:!0,keyup:!0,keypress:!0},mousing:{mousemove:!0,mouseenter:!0,mouseleave:!0,mouseover:!0,mouseout:!0},scrolling:{scroll:!0},touching:{touchstart:!0,touchmove:!0,touchend:!0,touchcancel:!0,touchenter:!0,touchleave:!0}},this.trace={},this.nodeCount=0,this.sentTrace=null,this.harvestTimeSeconds=(0,d.Mt)(e,"session_trace.harvestTimeSeconds")||10,this.maxNodesPerHarvest=(0,d.Mt)(e,"session_trace.maxNodesPerHarvest")||1e3,this.laststart=0,(0,r.X)("feat-stn",(()=>{"undefined"!=typeof PerformanceNavigationTiming?this.storeTiming(window.performance?.getEntriesByType("navigation")?.[0]||{}):this.storeTiming(window.performance?.timing);var e=new i.o("resources",{onFinished:function(t){t.sent&&t.responseText&&!this.ptid&&(this.ptid=t.responseText,(0,d.OP)(this.agentIdentifier).ptid=this.ptid,e.startTimer(this.harvestTimeSeconds));t.sent&&t.retry&&this.sentTrace&&((0,n.D)(this.sentTrace,((e,t)=>{this.mergeSTNs(e,t)})),this.sentTrace=null)}.bind(this),retryDelay:this.harvestTimeSeconds},this);e.harvest.on("resources",function(t){if((0,m.z)()>9e5)return e.stopTimer(),void(this.trace={});if(this.ptid&&this.nodeCount<=30)return;return this.takeSTNs(t.retry)}.bind(this)),e.runHarvest({needResponse:!0}),o.decide(!0)}),this.featureName,this.ee),(0,r.X)("block-stn",(()=>{o.decide(!1)}),this.featureName,this.ee),(0,r.X)("bst",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeEvent(...t)))}),this.featureName,this.ee),(0,r.X)("bstTimer",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeTimer(...t)))}),this.featureName,this.ee),(0,r.X)("bstResource",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeResources(...t)))}),this.featureName,this.ee),(0,r.X)("bstHist",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeHist(...t)))}),this.featureName,this.ee),(0,r.X)("bstXhrAgg",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeXhrAgg(...t)))}),this.featureName,this.ee),(0,r.X)("bstApi",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeSTN(...t)))}),this.featureName,this.ee),(0,r.X)("errorAgg",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.storeErrorAgg(...t)))}),this.featureName,this.ee),(0,r.X)("pvtAdded",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.settle((()=>s.processPVT(...t)))}),this.featureName,this.ee),(0,f.L)(this.agentIdentifier,this.featureName)}processPVT(e,t,s){var r={};r[e]=t,this.storeTiming(r),this.hasFID(e,s)&&this.storeEvent({type:"fid",target:"document"},"document",t,t+s.fid)}storeTiming(e){for(let t in e){const s=e[t],r=t.toLowerCase();if(r.indexOf("size")>=0||r.indexOf("status")>=0)continue;if(!("number"==typeof s&&s>=0))continue;const i=Math.round(e[t]);this.storeSTN({n:t,s:i,e:i,o:"document",t:"timing"})}}storeTimer(e,t,s,r){var i="timer";"requestAnimationFrame"===r&&(i=r);var n={n:r,s:t,e:s,o:"window",t:i};this.storeSTN(n)}storeEvent(e,t,s,r){if(this.shouldIgnoreEvent(e,t))return!1;var i={n:this.evtName(e.type),s,e:r,t:"event"};try{i.o=this.evtOrigin(e.target,t)}catch(e){i.o=this.evtOrigin(null,t)}this.storeSTN(i)}evtName(e){var t=e;return(0,n.D)(this.rename,(function(s,r){e in r&&(t=s)})),t}evtOrigin(e,t){var s="unknown";if(e&&e instanceof XMLHttpRequest){var r=this.ee.context(e).params;if(!(r&&r.status&&r.method&&r.host&&r.pathname))return"xhrOriginMissing";s=r.status+" "+r.method+": "+r.host+r.pathname}else e&&"string"==typeof e.tagName&&(s=e.tagName.toLowerCase(),e.id&&(s+="#"+e.id),e.className&&(s+="."+c()(e.classList).join(".")));return"unknown"===s&&("string"==typeof t?s=t:t===document?s="document":t===window?s="window":t instanceof FileReader&&(s="FileReader")),s}storeHist(e,t,s){var r={n:"history.pushState",s,e:s,o:e,t};this.storeSTN(r)}storeResources(e){e&&0!==e.length&&(e.forEach((e=>{var t=(0,a.e)(e.name),s={n:e.initiatorType,s:0|e.fetchStart,e:0|e.responseEnd,o:t.protocol+"://"+t.hostname+":"+t.port+t.pathname,t:e.entryType};s.s<=this.laststart||this.storeSTN(s)})),this.laststart=0|e[e.length-1].fetchStart)}storeErrorAgg(e,t,s,r){if("err"===e){var i={n:"error",s:r.time,e:r.time,o:s.message,t:s.stackHash};this.storeSTN(i)}}storeXhrAgg(e,t,s,r){if("xhr"===e){var i={n:"Ajax",s:r.time,e:r.time+r.duration,o:s.status+" "+s.method+": "+s.host+s.pathname,t:"ajax"};this.storeSTN(i)}}storeSTN(e){if(!(this.nodeCount>=this.maxNodesPerHarvest)){var t=this.trace[e.n];t||(t=this.trace[e.n]=[]),t.push(e),this.nodeCount++}}mergeSTNs(e,t){if(!(this.nodeCount>=this.maxNodesPerHarvest)){var s=this.trace[e];s||(s=this.trace[e]=[]),this.trace[e]=t.concat(s),this.nodeCount+=t.length}}takeSTNs(e){(0,h.W)()||this.storeResources(window.performance.getEntriesByType("resource"));var t=(0,n.D)(this.trace,((e,t)=>e in this.toAggregate?(0,n.D)(t.sort(this.byStart).reduce(this.smearEvtsByOrigin(e),{}),this.val).reduce(this.flatten,[]):t)).reduce(this.flatten,[]);if(0===t.length)return{};e&&(this.sentTrace=this.trace),this.trace={},this.nodeCount=0;var s={qs:{st:""+(0,d.OP)(this.agentIdentifier).offset},body:{res:t}};if(!this.ptid){const{userAttributes:e,atts:t,jsAttributes:i}=(0,d.C5)(this.agentIdentifier);s.qs.ua=e,s.qs.at=t;var r=(0,o.P)(i);s.qs.ja="{}"===r?null:r}return s}byStart(e,t){return e.s-t.s}smearEvtsByOrigin(e){var t=this.toAggregate[e][0],s=this.toAggregate[e][1],r={};return(i,n)=>{var o=i[n.o];o||(o=i[n.o]=[]);var a=r[n.o];return"scrolling"!==e||this.trivial(n)?a&&n.s-a.s<s&&a.e>n.s-t?a.e=n.e:(r[n.o]=n,o.push(n)):(r[n.o]=null,n.n="scroll",o.push(n)),i}}val(e,t){return t}flatten(e,t){return e.concat(t)}hasFID(e,t){return"fi"===e&&!!t&&"number"==typeof t.fid}trivial(e){return!!(e&&"number"==typeof e.e&&"number"==typeof e.s&&e.e-e.s<4)}shouldIgnoreEvent(e,t){var s=this.evtOrigin(e.target,t);return e.type in this.ignoredEvents.global||(!(!this.ignoredEvents[s]||!this.ignoredEvents[s].ignoreAll)||!(!this.ignoredEvents[s]||!(e.type in this.ignoredEvents[s])))}}},2628:(e,t,s)=>{s.r(t),s.d(t,{ADD_EVENT_LISTENER:()=>f,BST_RESOURCE:()=>o,BST_TIMER:()=>m,END:()=>u,FEATURE_NAME:()=>i,FN_END:()=>d,FN_START:()=>c,ORIG_EVENT:()=>g,PUSH_STATE:()=>l,RESOURCE:()=>a,RESOURCE_TIMING_BUFFER_FULL:()=>n,START:()=>h});var r=s(27);const i=s(2325).D.sessionTrace,n="resourcetimingbufferfull",o="bstResource",a="resource",h="-start",u="-end",c="fn"+h,d="fn"+u,m="bstTimer",l="pushState",g=r.Yu.EV,f="addEventListener"}}]);