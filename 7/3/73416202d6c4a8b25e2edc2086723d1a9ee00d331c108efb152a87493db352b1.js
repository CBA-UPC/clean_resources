"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[193],{625:(e,t,s)=>{s.d(t,{I:()=>r});var r=0,i=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);i&&(r=+i[1])},9139:(e,t,s)=>{let r;s.d(t,{m:()=>n});const i=new Promise((e=>r=e)),n=Object.freeze({onReplayReady:r,sessionReplayInitialized:i})},2573:(e,t,s)=>{s.d(t,{o:()=>c});var r=s(4247),i=s(1117),n=s(8673),o=s(8310),a=s(5763),h=s(3860);class c extends i.w{constructor(e,t,s){super(s),this.endpoint=e,this.opts=t||{},this.started=!1,this.timeoutHandle=null,this.aborted=!1,this.harvest=new n.M(this.sharedContext),(0,o.L)(this.unload.bind(this),(0,a.Mt)(this.sharedContext.agentIdentifier,"allow_bfcache")),this.sharedContext?.ee.on(h.wO.RESET,(()=>this.runHarvest({forceNoRetry:!0})))}unload(){this.aborted||(this.opts.onUnload&&this.opts.onUnload(),this.runHarvest({unload:!0}))}startTimer(e,t){this.interval=e,this.started=!0,this.scheduleHarvest(null!=t?t:this.interval)}stopTimer(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.aborted=e,this.started=!1,this.timeoutHandle&&clearTimeout(this.timeoutHandle)}scheduleHarvest(e,t){if(!this.timeoutHandle){var s=this;null==e&&(e=this.interval),this.timeoutHandle=setTimeout((()=>{s.timeoutHandle=null,s.runHarvest(t)}),1e3*e)}}runHarvest(e){if(this.aborted)return;var t=this;let s,i=[];if(this.opts.getPayload){if(s=(0,n.q)(this.endpoint,e),!s)return!1;const t=s.method===r.T.xhr;var o=this.opts.getPayload({retry:t});if(!o)return void(this.started&&this.scheduleHarvest());o="[object Array]"===Object.prototype.toString.call(o)?o:[o],i.push(...o)}let a=e=>this.harvest.sendX(e);return i.length?a=this.opts.raw?e=>this.harvest._send(e):e=>this.harvest.send(e):i.push(void 0),i.forEach((t=>{a({endpoint:this.endpoint,payload:t,opts:e,submitMethod:s,cbFinished:h,customUrl:this.opts.customUrl,raw:this.opts.raw})})),void(this.started&&this.scheduleHarvest());function h(s){e?.forceNoRetry&&(s.retry=!1),t.onHarvestFinished(e,s)}}onHarvestFinished(e,t){if(this.opts.onFinished&&this.opts.onFinished(t),t.sent&&t.retry){var s=t.delay||this.opts.retryDelay;this.started&&s?(clearTimeout(this.timeoutHandle),this.timeoutHandle=null,this.scheduleHarvest(s,e)):!this.started&&s&&this.scheduleHarvest(s,e)}}}},8310:(e,t,s)=>{s.d(t,{L:()=>h});var r=s(625),i=s(3239),n=s(7872),o=s(1720),a=s(7956);if(o.v6){o._A.cleanupTasks=[];const e=o._A.close;o._A.close=()=>{for(let e of o._A.cleanupTasks)e();e()}}function h(e,t){if(o.il)if(t)(0,a.N)(e,!0),(0,i.bP)("pagehide",e);else{var s=(0,n.Z)(e);!r.I||navigator.sendBeacon?(0,i.bP)("pagehide",s):(0,i.bP)("beforeunload",s),(0,i.bP)("unload",s)}else o.v6&&o._A.cleanupTasks.push(e)}},7243:(e,t,s)=>{s.d(t,{e:()=>n});var r=s(1720),i={};function n(e){if(e in i)return i[e];if(0===(e||"").indexOf("data:"))return{protocol:"data"};let t;var s=r._A?.location,n={};if(r.il)t=document.createElement("a"),t.href=e;else try{t=new URL(e,s.href)}catch(e){return n}n.port=t.port;var o=t.href.split("://");!n.port&&o[1]&&(n.port=o[1].split("/")[0].split("@").pop().split(":")[1]),n.port&&"0"!==n.port||(n.port="https"===o[0]?"443":"80"),n.hostname=t.hostname||s.hostname,n.pathname=t.pathname,n.protocol=o[0],"/"!==n.pathname.charAt(0)&&(n.pathname="/"+n.pathname);var a=!t.protocol||":"===t.protocol||t.protocol===s.protocol,h=t.hostname===s.hostname&&t.port===s.port;return n.sameOrigin=a&&(!t.hostname||h),"/"===n.pathname&&(i[e]=n),n}},6209:(e,t,s)=>{s.r(t),s.d(t,{Aggregate:()=>v});var r=s(4322),i=s(2573),n=s(7243),o=s(5763),a=s(7894),h=s(3614),c=s(8e3);class u{#e=void 0;#t=[];#s=setTimeout((()=>this.#r()),5e3);#i=!1;#n(){this.#t.forEach((e=>e())),this.#r()}#r(){this.#t=[],clearTimeout(this.#s)}settle(e){!1!==this.#e&&(void 0===this.#e?this.#t.push(e):e())}decide(e){this.#i||(this.#e=e,!1===e&&this.#r(),!0===e&&this.#n())}permanentlyDecide(e){this.#i||(this.decide(e),this.#i=!0)}}var d=s(3860),l=s(8632),p=s(9139);var m=s(2222);const f={global:{mouseup:!0,mousedown:!0},window:{load:!0,pagehide:!0},xhrOriginMissing:{ignoreAll:!0}},g={typing:[1e3,2e3],scrolling:[100,1e3],mousing:[1e3,2e3],touching:[1e3,2e3]};class v extends m.m{static featureName=h.FEATURE_NAME;#o;constructor(e,t,s){var i;if(super(e,t,h.FEATURE_NAME),i=this,this.agentRuntime=(0,o.OP)(e),!this.agentRuntime.xhrWrappable)return;this.resourceObserver=s?.resourceObserver,this.ptid="",this.trace={},this.nodeCount=0,this.sentTrace=null,this.harvestTimeSeconds=(0,o.Mt)(e,"session_trace.harvestTimeSeconds")||10,this.maxNodesPerHarvest=(0,o.Mt)(e,"session_trace.maxNodesPerHarvest")||1e3,this.isStandalone=!1;const n=new u,a=this.agentRuntime.session,m=e=>{switch(e){case d.IK.ERROR:this.startTracing(n,!0);break;case d.IK.FULL:case!0:this.startTracing(n);break;case d.IK.OFF:default:n.decide(!1)}};if(a){let t,s=!1;(0,r.X)("errorAgg",(()=>{s||(s=!0,a.state.sessionTraceMode===d.IK.ERROR&&this.#o&&(a.write({sessionTraceMode:t=d.IK.FULL}),this.trimSTNs(3e4),this.#o.runHarvest({needResponse:!0})))}),this.featureName,this.ee);const i=()=>{a.state.sessionTraceMode!==d.IK.OFF&&a.write({sessionTraceMode:d.IK.OFF}),n.permanentlyDecide(!1),this.#o?.stopTimer(!0),t===d.IK.FULL&&this.#o?.runHarvest(),this.#o=null};this.waitForFlags(["stn","sr"]).then((async r=>{let[n,h]=r;if(h)if(this.ee.on("REPLAY_ABORTED",(()=>i())),this.ee.on(d.wO.RESUME,(()=>{const e=a.state.sessionTraceMode;e===d.IK.OFF?i():e===d.IK.FULL&&this.#o&&!this.#o.started&&this.#o.runHarvest({needResponse:!0}),t=e})),this.ee.on(d.wO.PAUSE,(()=>t=a.state.sessionTraceMode)),a.isNew){const r=await async function(e){try{const t=(0,l.fP)();if((0,o.Mt)(e,"session_replay.enabled")&&"object"==typeof t.initializedAgents[e].features.session_replay)return await t.initializedAgents[e].features.session_replay.onAggregateImported,await p.m.sessionReplayInitialized}catch(e){}return d.IK.OFF}(e);let i;r===d.IK.OFF&&(this.isStandalone=!0),i=!0===n||r===d.IK.ERROR&&s?d.IK.FULL:r,a.write({sessionTraceMode:t=i}),m(i)}else{const e=t=a.state.sessionTraceMode;e===d.IK.OFF&&(this.isStandalone=!0),m(e)}else this.isStandalone=!0,m(n)}))}else this.isStandalone=!0,(0,r.X)("rumresp-stn",(e=>m(e)),this.featureName,this.ee);(0,r.X)("bst",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.storeEvent(...t)))}),this.featureName,this.ee),(0,r.X)("bstResource",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.storeResources(...t)))}),this.featureName,this.ee),(0,r.X)("bstHist",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.storeHist(...t)))}),this.featureName,this.ee),(0,r.X)("bstXhrAgg",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.storeXhrAgg(...t)))}),this.featureName,this.ee),(0,r.X)("bstApi",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.storeSTN(...t)))}),this.featureName,this.ee),(0,r.X)("errorAgg",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.storeErrorAgg(...t)))}),this.featureName,this.ee),(0,r.X)("pvtAdded",(function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return n.settle((()=>i.processPVT(...t)))}),this.featureName,this.ee),(0,c.L)(this.agentIdentifier,this.featureName)}startTracing(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"undefined"!=typeof PerformanceNavigationTiming?this.storeTiming(window.performance.getEntriesByType("navigation")[0]):this.storeTiming(window.performance.timing),this.#o=new i.o("resources",{onFinished:this.#a.bind(this),retryDelay:this.harvestTimeSeconds},this),this.#o.harvest.on("resources",this.#h.bind(this)),!1===t&&this.#o.runHarvest({needResponse:!0}),e.decide(!0)}#a(e){e.sent&&e.responseText&&!this.ptid&&(this.agentRuntime.ptid=this.ptid=e.responseText,this.#o.startTimer(this.harvestTimeSeconds)),e.sent&&e.retry&&this.sentTrace&&(Object.entries(this.sentTrace).forEach((e=>{let[t,s]=e;this.nodeCount>=this.maxNodesPerHarvest||(this.nodeCount+=s.length,this.trace[t]=this.trace[t]?s.concat(this.trace[t]):s)})),this.sentTrace=null)}#h(e){if(this.isStandalone){if((0,a.z)()>6e5)return this.#o.stopTimer(),void(this.trace={});if(this.ptid&&this.nodeCount<=30)return}else{const e=this.agentRuntime.session.state.sessionTraceMode;if(e===d.IK.OFF&&0===Object.keys(this.trace).length)return;if(e===d.IK.ERROR)return}return this.takeSTNs(e.retry)}processPVT(e,t,s){this.storeTiming({[e]:t}),function(e,t){return"fi"===e&&!!t&&"number"==typeof t.fid}(e,s)&&this.storeEvent({type:"fid",target:"document"},"document",t,t+s.fid)}storeTiming(e){if(e)for(let t in e){let s=e[t];const r=t.toLowerCase();r.indexOf("size")>=0||r.indexOf("status")>=0||"number"==typeof s&&s>=0&&(s=Math.round(s),this.storeSTN({n:t,s,e:s,o:"document",t:"timing"}))}}storeEvent(e,t,s,r){if(this.shouldIgnoreEvent(e,t))return;const i={n:this.evtName(e.type),s,e:r,t:"event"};try{i.o=this.evtOrigin(e.target,t)}catch(e){i.o=this.evtOrigin(null,t)}this.storeSTN(i)}shouldIgnoreEvent(e,t){const s=this.evtOrigin(e.target,t);return e.type in f.global||(!(!f[s]||!f[s].ignoreAll)||!(!f[s]||!(e.type in f[s])))}evtName(e){switch(e){case"keydown":case"keyup":case"keypress":return"typing";case"mousemove":case"mouseenter":case"mouseleave":case"mouseover":case"mouseout":return"mousing";case"scroll":return"scrolling";case"touchstart":case"touchmove":case"touchend":case"touchcancel":case"touchenter":case"touchleave":return"touching";default:return e}}evtOrigin(e,t){let s="unknown";if(e&&e instanceof XMLHttpRequest){const t=this.ee.context(e).params;if(!(t&&t.status&&t.method&&t.host&&t.pathname))return"xhrOriginMissing";s=t.status+" "+t.method+": "+t.host+t.pathname}else if(e&&"string"==typeof e.tagName&&(s=e.tagName.toLowerCase(),e.id&&(s+="#"+e.id),e.className))for(let t=0;t<e.classList.length;t++)s+="."+e.classList[t];return"unknown"===s&&("string"==typeof t?s=t:t===document?s="document":t===window?s="window":t instanceof FileReader&&(s="FileReader")),s}storeHist(e,t,s){const r={n:"history.pushState",s,e:s,o:e,t};this.storeSTN(r)}#c=0;storeResources(e){e&&0!==e.length&&(e.forEach((e=>{if((0|e.fetchStart)<=this.#c)return;const t=(0,n.e)(e.name),s={n:e.initiatorType,s:0|e.fetchStart,e:0|e.responseEnd,o:t.protocol+"://"+t.hostname+":"+t.port+t.pathname,t:e.entryType};this.storeSTN(s)})),this.#c=0|e[e.length-1].fetchStart)}storeErrorAgg(e,t,s,r){if("err"!==e)return;const i={n:"error",s:r.time,e:r.time,o:s.message,t:s.stackHash};this.storeSTN(i)}storeXhrAgg(e,t,s,r){if("xhr"!==e)return;const i={n:"Ajax",s:r.time,e:r.time+r.duration,o:s.status+" "+s.method+": "+s.host+s.pathname,t:"ajax"};this.storeSTN(i)}storeSTN(e){if(this.nodeCount>=this.maxNodesPerHarvest){if(this.isStandalone||this.agentRuntime.session.state.sessionTraceMode!==d.IK.ERROR)return;if(0==this.trimSTNs(3e4))return}this.trace[e.n]?this.trace[e.n].push(e):this.trace[e.n]=[e],this.nodeCount++}trimSTNs(e){let t=0;const s=Math.max((0,a.z)()-e,0);return Object.keys(this.trace).forEach((e=>{const r=this.trace[e];let i=r.findIndex((e=>s<=e.e));0!=i&&(i<0?(i=r.length,delete this.trace[e]):r.splice(0,i),this.nodeCount-=i,t+=i)})),t}takeSTNs(e){this.resourceObserver||this.storeResources(window.performance.getEntriesByType("resource"));const t=Object.entries(this.trace).flatMap((e=>{let[t,s]=e;if(!(t in g))return s;const r=this.smearEvtsByOrigin(t),i=s.sort(((e,t)=>e.s-t.s)).reduce(r,{});return Object.values(i).flat()}),this);return 0===t.length?{}:(e&&(this.sentTrace=this.trace),this.trace={},this.nodeCount=0,{qs:{st:String((0,o.OP)(this.agentIdentifier).offset)},body:{res:t}})}smearEvtsByOrigin(e){const t=g[e][0],s=g[e][1],r={};return(i,n)=>{let o=i[n.o];o||(o=i[n.o]=[]);const a=r[n.o];return"scrolling"!==e||function(e){const t=4;return!!(e&&"number"==typeof e.e&&"number"==typeof e.s&&e.e-e.s<t)}(n)?a&&n.s-a.s<s&&a.e>n.s-t?a.e=n.e:(r[n.o]=n,o.push(n)):(r[n.o]=null,n.n="scroll",o.push(n)),i}}}},3614:(e,t,s)=>{s.d(t,{BST_RESOURCE:()=>i,END:()=>a,FEATURE_NAME:()=>r,FN_END:()=>c,FN_START:()=>h,PUSH_STATE:()=>u,RESOURCE:()=>n,START:()=>o});const r=s(3325).D.sessionTrace,i="bstResource",n="resource",o="-start",a="-end",h="fn"+o,c="fn"+a,u="pushState"}}]);