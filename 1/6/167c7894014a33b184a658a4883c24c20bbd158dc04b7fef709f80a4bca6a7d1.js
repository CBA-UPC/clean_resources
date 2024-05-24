"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[873],{1199:(t,e,i)=>{i.d(e,{R:()=>s,z:()=>r});var n=[];function r(t){if(0===n.length)return!0;if(void 0===t.hostname)return!1;for(var e=0;e<n.length;e++){var i=n[e];if("*"===i.hostname)return!1;if(a(i.hostname,t.hostname)&&o(i.pathname,t.pathname))return!1}return!0}function s(t){if(n=[],t&&t.length)for(var e=0;e<t.length;e++){var i=t[e];0===i.indexOf("http://")?i=i.substring(7):0===i.indexOf("https://")&&(i=i.substring(8));var r=i.indexOf("/");r>0?n.push({hostname:i.substring(0,r),pathname:i.substring(r)}):n.push({hostname:i,pathname:""})}}function a(t,e){return!(t.length>e.length)&&e.indexOf(t)===e.length-t.length}function o(t,e){return 0===t.indexOf("/")&&(t=t.substring(1)),0===e.indexOf("/")&&(e=e.substring(1)),""===t||t===e}},2573:(t,e,i)=>{i.d(e,{o:()=>u});var n=i(4247),r=i(1117),s=i(8673),a=i(8310),o=i(5763),h=i(3860);class u extends r.w{constructor(t,e,i){super(i),this.endpoint=t,this.opts=e||{},this.started=!1,this.timeoutHandle=null,this.aborted=!1,this.harvest=new s.M(this.sharedContext),(0,a.L)(this.unload.bind(this),(0,o.Mt)(this.sharedContext.agentIdentifier,"allow_bfcache")),this.sharedContext?.ee.on(h.wO.RESET,(()=>this.runHarvest({forceNoRetry:!0})))}unload(){this.aborted||(this.opts.onUnload&&this.opts.onUnload(),this.runHarvest({unload:!0}))}startTimer(t,e){this.interval=t,this.started=!0,this.scheduleHarvest(null!=e?e:this.interval)}stopTimer(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.aborted=t,this.started=!1,this.timeoutHandle&&clearTimeout(this.timeoutHandle)}scheduleHarvest(t,e){this.timeoutHandle||(null==t&&(t=this.interval),this.timeoutHandle=setTimeout((()=>{this.timeoutHandle=null,this.runHarvest(e)}),1e3*t))}runHarvest(t){if(this.aborted)return;const e=e=>{t?.forceNoRetry&&(e.retry=!1),this.onHarvestFinished(t,e)};let i,r,s=[];if(this.opts.getPayload){if(i=n.qD({isFinalHarvest:t?.unload}),!i)return!1;const e=!t?.unload&&i===n.Be;if(r=this.opts.getPayload({retry:e}),!r)return void(this.started&&this.scheduleHarvest());r="[object Array]"===Object.prototype.toString.call(r)?r:[r],s.push(...r)}let a=t=>this.harvest.sendX(t);s.length?a=this.opts.raw?t=>this.harvest._send(t):t=>this.harvest.send(t):s.push(void 0),s.forEach((n=>{a({endpoint:this.endpoint,payload:n,opts:t,submitMethod:i,cbFinished:e,customUrl:this.opts.customUrl,raw:this.opts.raw})})),this.started&&this.scheduleHarvest()}onHarvestFinished(t,e){if(this.opts.onFinished&&this.opts.onFinished(e),e.sent&&e.retry){const i=e.delay||this.opts.retryDelay;this.started&&i?(clearTimeout(this.timeoutHandle),this.timeoutHandle=null,this.scheduleHarvest(i,t)):!this.started&&i&&this.scheduleHarvest(i,t)}}}},777:(t,e,i)=>{i.d(e,{e:()=>n});const n={}},214:(t,e,i)=>{i.d(e,{AG:()=>h,FX:()=>c,n1:()=>d,uR:()=>u});var n=i(1284),r=i(4351),s=i(6141),a=Object.prototype.hasOwnProperty,o=64;function h(t,e,i){return t||0===t||""===t?e(t)+(i?",":""):"!"}function u(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function c(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},i=0;return function(n){if(void 0===n||""===n)return"";var r=new s.RR({agentIdentifier:t});n=String(n),r.shouldObfuscate()&&(n=r.obfuscateString(n));return a.call(e,n)?u(e[n],!0):(e[n]=i++,function(t){return"'"+t.replace(l,"\\$1")}(n))}}function d(t,e){var i=[];return(0,n.D)(t,(function(t,n){if(!(i.length>=o)){var s,a=5;switch(t=e(t),typeof n){case"object":n?s=e((0,r.P)(n)):a=9;break;case"number":a=6,s=n%1?n:n+".";break;case"boolean":a=n?7:8;break;case"undefined":a=9;break;default:s=e(n)}i.push([a,t+(s?","+s:"")])}})),i}var l=/([,\\;])/g},5998:(t,e,i)=>{i.d(e,{uB:()=>p,wu:()=>m,zJ:()=>f});var n="Start",r="End",s="unloadEvent",a="redirect",o="domainLookup",h="onnect",u="request",c="response",d="loadEvent",l="domContentLoadedEvent",f=[];function m(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e)return i.of=t,N(i.of,i,"n",!0),N(e[s+n],i,"u",f),N(e[a+n],i,"r",f),N(e[s+r],i,"ue",f),N(e[a+r],i,"re",f),N(e["fetch"+n],i,"f",f),N(e[o+n],i,"dn",f),N(e[o+r],i,"dne",f),N(e["c"+h+n],i,"c",f),N(e["secureC"+h+"ion"+n],i,"s",f),N(e["c"+h+r],i,"ce",f),N(e[u+n],i,"rq",f),N(e[c+n],i,"rp",f),N(e[c+r],i,"rpe",f),N(e.domLoading,i,"dl",f),N(e.domInteractive,i,"di",f),N(e[l+n],i,"ds",f),N(e[l+r],i,"de",f),N(e.domComplete,i,"dc",f),N(e[d+n],i,"l",f),N(e[d+r],i,"le",f),i}function p(t,e){var i;return N("number"==typeof(i=t.type)?i:{navigate:void 0,reload:1,back_forward:2,prerender:3}[i],e,"ty"),N(t.redirectCount,e,"rc"),e}function N(t,e,i,n){if("number"==typeof t&&t>0){if(n){const i=e?.of>0?e.of:0;t=Math.max(t-i,0)}t=Math.round(t),e[i]=t}f.push(t)}},8310:(t,e,i)=>{i.d(e,{L:()=>o});var n=i(3239),r=i(7872),s=i(385),a=i(7956);if(s.v6){s._A.cleanupTasks=[];const t=s._A.close;s._A.close=()=>{for(let t of s._A.cleanupTasks)t();t()}}function o(t,e){if(s.il)if(e)(0,a.N)(t,!0),(0,n.bP)("pagehide",t);else{var i=(0,r.Z)(t);!s.IF||navigator.sendBeacon?(0,n.bP)("pagehide",i):(0,n.bP)("beforeunload",i),(0,n.bP)("unload",i)}else s.v6&&s._A.cleanupTasks.push(t)}},7243:(t,e,i)=>{i.d(e,{e:()=>s});var n=i(385),r={};function s(t){if(t in r)return r[t];if(0===(t||"").indexOf("data:"))return{protocol:"data"};let e;var i=n._A?.location,s={};if(n.il)e=document.createElement("a"),e.href=t;else try{e=new URL(t,i.href)}catch(t){return s}s.port=e.port;var a=e.href.split("://");!s.port&&a[1]&&(s.port=a[1].split("/")[0].split("@").pop().split(":")[1]),s.port&&"0"!==s.port||(s.port="https"===a[0]?"443":"80"),s.hostname=e.hostname||i.hostname,s.pathname=e.pathname,s.protocol=a[0],"/"!==s.pathname.charAt(0)&&(s.pathname="/"+s.pathname);var o=!e.protocol||":"===e.protocol||e.protocol===i.protocol,h=e.hostname===i.hostname&&e.port===i.port;return s.sameOrigin=o&&(!e.hostname||h),"/"===s.pathname&&(r[t]=s),s}},2782:(t,e,i)=>{i.r(e),i.d(e,{Aggregate:()=>q});var n=i(4322),r=i(7243),s=i(1199),a=i(1284),o=i(5998),h=i(4402),u=i(777),c=i(5763),d=i(2177),l=0;function f(t,e,i,n){Object.defineProperty(this,"interaction",{value:t,writable:!0}),this.parent=e,this.id=++l,this.type=i,this.children=[],this.end=null,this.jsEnd=this.start=n,this.jsTime=0,this.attrs={},this.cancelled=!1}var m=f.prototype;m.child=function(t,e,i,n){var r=this.interaction;if(r.end||r.nodes>=128)return null;r.onNodeAdded(this);var s=new f(r,this,t,e);return s.attrs.name=i,r.nodes++,n||r.remaining++,s},m.callback=function(t,e){var i=this;i.jsTime+=t,e>i.jsEnd&&(i.jsEnd=e,i.interaction.lastCb=e)},m.cancel=function(){this.cancelled=!0,this.interaction.remaining--},m.finish=function(t){var e=this;if(e.end)return;e.end=t;let i=e.parent;for(;i?.cancelled;)i=i.parent;i&&i.children.push(e),e.parent=null;var n=this.interaction;n.remaining--,n.lastFinish=t,n.checkFinish()};var p=i(7894),N=c.Yu.ST,v=c.Yu.CT,g={};function T(t,e,i,n,r,s){this.agentIdentifier=s,this.ee=d.ee.get(s),g[s]=0,this.id=++g[s],this.eventName=t,this.nodes=0,this.remaining=0,this.finishTimer=null,this.checkingFinish=!1,this.lastCb=this.lastFinish=e,this.handlers=[],this.onFinished=r,this.done=!1;var a=(this.root=new f(this,null,"interaction",e)).attrs;a.trigger=t,a.initialPageURL=(0,c.OP)(s).origin,a.oldRoute=n,a.newURL=a.oldURL=i,a.custom={},a.store={}}var R=T.prototype;R.checkFinish=function(){var t=this;t.remaining>0?t._resetFinishCheck():t.checkingFinish||null===t.root.end&&(t._resetFinishCheck(),t.checkingFinish=!0,t.finishTimer=N((()=>{t.checkingFinish=!1,t.finishTimer=N((()=>{t.finishTimer=null,t.remaining<=0&&t.finish()}),1)}),0))},R.setNewURL=function(t){this.root.attrs.newURL=t},R.setNewRoute=function(t){this.root.attrs.newRoute=t},R.onNodeAdded=function(){this._resetFinishCheck()},R._resetFinishCheck=function(){this.finishTimer&&(v(this.finishTimer),this.finishTimer=null,this.checkingFinish=!1)},R.finish=function(){var t=this,e=t.root;if(null===e.end){var i=Math.max(t.lastCb,t.lastFinish),n=((0,p.z)(),e.attrs.custom);this.onFinished&&this.onFinished(this),(0,a.D)((0,c.C5)(t.agentIdentifier).jsAttributes,(function(t,e){t in n||(n[t]=e)})),e.end=i,t.ee.emit("interaction",[this])}};var E=i(3239),b=i(2573),S=i(4222),x=i(214),I=i(1117);class A extends I.w{constructor(t){super(t),this.firstTimestamp=void 0}serializeMultiple(t,e,i){const n=(0,c.C5)(this.sharedContext.agentIdentifier);var r=(0,x.FX)(this.sharedContext.agentIdentifier),s="bel.7";return t.forEach((t=>{s+=";"+this.serializeInteraction(t.root,e,i,t.routeChange,r,n)})),this.firstTimestamp=void 0,s}serializeSingle(t,e,i,n){const r=(0,c.C5)(this.sharedContext.agentIdentifier);var s=(0,x.FX)(this.sharedContext.agentIdentifier),a="bel.7;"+this.serializeInteraction(t,e,i,n,s,r);return this.firstTimestamp=void 0,a}serializeInteraction(t,e,i,n,r,s){e=e||0;var o="initialPageLoad"===t.attrs.trigger,h={interaction:1,ajax:2,customTracer:4},u=!0;const c=(t,d)=>{if("customEnd"===t.type)return d.push([3,(0,x.uR)(t.end-this.firstTimestamp)]);var l=t.type,f=h[l],m=t.start,p=t.children.length,N=0,v=s.atts,g=o&&i.length&&1===f,T=[],R=t.attrs,E=R.metrics,b=R.params,I=s.queueTime,A=s.applicationTime;void 0===this.firstTimestamp?(m+=e,this.firstTimestamp=m):m-=this.firstTimestamp;var C=[(0,x.uR)(m),(0,x.uR)(t.end-t.start),(0,x.uR)(t.jsEnd-t.end),(0,x.uR)(t.jsTime)];switch(f){case 1:C[2]=(0,x.uR)(t.jsEnd-this.firstTimestamp),C.push(r(R.trigger),r((0,S.f)(R.initialPageURL,u)),r((0,S.f)(R.oldURL,u)),r((0,S.f)(R.newURL,u)),r(R.customName),o?"":n?1:2,(0,x.AG)(o&&I,x.uR,!0)+(0,x.AG)(o&&A,x.uR,!0)+(0,x.AG)(R.oldRoute,r,!0)+(0,x.AG)(R.newRoute,r,!0)+r(R.id),r(t.id),(0,x.AG)(R.firstPaint,x.uR,!0)+(0,x.AG)(R.firstContentfulPaint,x.uR,!1));var F=(0,x.n1)(R.custom,r);T=T.concat(F),N=F.length,v&&(p++,T.push("a,"+r(v)));break;case 2:C.push(r(b.method),(0,x.uR)(b.status),r(b.host),r(b.pathname),(0,x.uR)(E.txSize),(0,x.uR)(E.rxSize),R.isFetch?1:R.isJSONP?2:"",r(t.id),(0,x.AG)(t.dt&&t.dt.spanId,r,!0)+(0,x.AG)(t.dt&&t.dt.traceId,r,!0)+(0,x.AG)(t.dt&&t.dt.timestamp,x.uR,!1));break;case 4:var _=R.tracedTime;C.push(r(R.name),(0,x.AG)(_,x.uR,!0)+r(t.id))}for(var w=0;w<t.children.length;w++)c(t.children[w],T);if(C.unshift((0,x.uR)(f),(0,x.uR)(p+=N)),d.push(C),p&&d.push(T.join(";")),g){var L=",",P="b",X=0;(0,a.D)(i.slice(1,21),(function(t,e){void 0!==e?(P+=L+(0,x.uR)(e-X),L=",",X=e):(P+=L+"!",L="")})),d.push(P)}else 1===f&&d.push("");return d};return c(t,[]).join(";")}}var C=i(7836),F=i(8e3),_=i(3325),w=i(2222);const{FEATURE_NAME:L,INTERACTION_EVENTS:P,MAX_TIMER_BUDGET:X,FN_START:O,FN_END:y,CB_START:k,INTERACTION_API:H,REMAINING:j,INTERACTION:U,SPA_NODE:D,JSONP_NODE:M,FETCH_START:z,FETCH_DONE:B,FETCH_BODY:G,JSONP_END:J,originalSetTimeout:Y}=C;class q extends w.m{static featureName=L;constructor(t,e){super(t,e,L),this.state={initialPageURL:(0,c.OP)(t).origin,lastSeenUrl:(0,c.OP)(t).origin,lastSeenRouteName:null,timerMap:{},timerBudget:X,currentNode:null,prevNode:null,nodeOnLastHashUpdate:null,initialPageLoad:null,pageLoaded:!1,childTime:0,depth:0,harvestTimeSeconds:(0,c.Mt)(t,"spa.harvestTimeSeconds")||10,interactionsToHarvest:[],interactionsSent:[]},this.serializer=new A(this);const{state:i,serializer:l}=this;let{blocked:f}=this;const m=d.ee.get(t),p=m.get("mutation"),N=m.get("promise"),v=m.get("history"),g=m.get("events"),R=m.get("timer"),S=m.get("fetch"),x=m.get("jsonp"),I=m.get("xhr"),C=m.get("tracer"),w=new b.o("events",{onFinished:function(t){t.sent&&t.retry&&i.interactionsSent.length>0&&(i.interactionsSent.forEach((function(t){i.interactionsToHarvest.unshift(t)})),i.interactionsSent=[])},retryDelay:i.harvestTimeSeconds},{agentIdentifier:t,ee:m});if(w.harvest.on("events",(function(t){if(0===i.interactionsToHarvest.length||f)return{};var e=l.serializeMultiple(i.interactionsToHarvest,0,o.zJ);t.retry&&i.interactionsToHarvest.forEach((function(t){i.interactionsSent.push(t)}));return i.interactionsToHarvest=[],{body:{e}}})),(0,n.X)("block-spa",(()=>{f=!0,w.stopTimer(!0)}),this.featureName,m),function(){if(!1===(0,c.Mt)(t,"spa.enabled"))return!1;return!0}()){i.initialPageLoad=new T("initialPageLoad",0,i.lastSeenUrl,i.lastSeenRouteName,tt,t),i.initialPageLoad.save=!0,i.prevInteraction=i.initialPageLoad,i.currentNode=i.initialPageLoad.root,i.initialPageLoad[j]++,(0,n.X)(O,$,this.featureName,m),(0,n.X)(k,$,this.featureName,N);var q={getCurrentNode:function(){return i.currentNode},setCurrentNode:W};(0,n.X)("spa-register",(function(t){"function"==typeof t&&t(q)}),_.D.spa,m),(0,n.X)(y,V,this.featureName,m),(0,n.X)("cb-end",V,this.featureName,N),(0,n.X)(O,(function(e,n){var r=e[0],s=r.type,a=r.__nrNode;if(i.pageLoaded||"load"!==s||n!==window||(i.pageLoaded=!0,this.prevNode=i.currentNode=null,i.initialPageLoad&&(a=i.initialPageLoad.root,i.initialPageLoad[j]=0,Y((function(){P.push("popstate")})))),a)W(a);else if("hashchange"===s)W(i.nodeOnLastHashUpdate),i.nodeOnLastHashUpdate=null;else if(n instanceof XMLHttpRequest)W(m.context(n).spaNode);else if(!i.currentNode&&-1!==P.indexOf(s)){var o=new T(s,this[O],i.lastSeenUrl,i.lastSeenRouteName,tt,t);if(i.prevInteraction=o,W(o.root),"click"===s){var h=function(t){var e=t.tagName.toLowerCase();if(-1!==["a","button","input"].indexOf(e))return t.title||t.value||t.innerText}(r.target);h&&(i.currentNode.attrs.custom.actionText=h)}}r.__nrNode=i.currentNode}),this.featureName,g),(0,n.X)("setTimeout-end",(function(t,e,n){!i.currentNode||i.timerBudget-this.timerDuration<0||(!t||t[0]instanceof Function)&&(i.currentNode[U][j]++,this.timerId=n,i.timerMap[n]=i.currentNode,this.timerBudget=i.timerBudget-50)}),this.featureName,R),(0,n.X)("clearTimeout-start",(function(t){var e=t[0],n=i.timerMap[e];if(n){var r=n[U];r[j]--,r.checkFinish(),delete i.timerMap[e]}}),this.featureName,R),(0,n.X)(O,(function(){i.timerBudget=this.timerBudget||X;var t=this.timerId,e=i.timerMap[t];W(e),delete i.timerMap[t],e&&e[U][j]--}),this.featureName,R),(0,n.X)(O,(function(){W(this[D])}),this.featureName,I),(0,n.X)("new-xhr",(function(){if(!i.currentNode&&i.prevInteraction&&!i.prevInteraction.ignored){const t=i.prevInteraction;i.currentNode=t.root,t.root.end=null}i.currentNode&&(this[D]=i.currentNode.child("ajax",null,null,!0))}),this.featureName,I),(0,n.X)("send-xhr-start",(function(){var t=this[D];t&&!this.sent&&(this.sent=!0,t.dt=this.dt,t.jsEnd=t.start=this.startTime,t[U][j]++)}),this.featureName,I),(0,n.X)("xhr-resolved",(function(){var t=this[D];if(t){if(!(0,s.z)(this.params))return void t.cancel();var e=t.attrs;e.params=this.params,e.metrics=this.metrics,t.finish(this.endTime),this.currentNode&&this.currentNode.interaction&&this.currentNode.interaction.checkFinish()}}),this.featureName,m),(0,n.X)("new-jsonp",(function(t){i.currentNode&&((this[M]=i.currentNode.child("ajax",this[z])).start=this["new-jsonp"],this.url=t,this.status=null)}),this.featureName,x),(0,n.X)("cb-start",(function(t){var e=this[M];e&&(W(e),this.status=200)}),this.featureName,x),(0,n.X)("jsonp-error",(function(){var t=this[M];t&&(W(t),this.status=0)}),this.featureName,x),(0,n.X)(J,(function(){var t=this[M];if(t){if(null===this.status)return void t.cancel();var e=t.attrs,i=e.params={},n=(0,r.e)(this.url);i.method="GET",i.pathname=n.pathname,i.host=n.hostname+":"+n.port,i.status=this.status,e.metrics={txSize:0,rxSize:0},e.isJSONP=!0,t.jsEnd=this[J],t.jsTime=this[k]?this[J]-this[k]:0,t.finish(t.jsEnd)}}),this.featureName,x),(0,n.X)(z,(function(t,e){if(t){if(!i.currentNode&&i.prevInteraction&&!i.prevInteraction.ignored){const t=i.prevInteraction;i.currentNode=t.root,t.root.end=null}i.currentNode&&(this[D]=i.currentNode.child("ajax",this[z]),e&&this[D]&&(this[D].dt=e))}}),this.featureName,S),(0,n.X)(G+"start",(function(t){i.currentNode&&(this[D]=i.currentNode,i.currentNode[U][j]++)}),this.featureName,S),(0,n.X)(G+"end",(function(t,e,i){var n=this[D];n&&n[U][j]--}),this.featureName,S),(0,n.X)(B,(function(t,e){var i=this[D];if(i){if(t)return void i.cancel();var n=i.attrs;n.params=this.params,n.metrics={txSize:this.txSize,rxSize:this.rxSize},n.isFetch=!0,i.finish(this[B])}}),this.featureName,S),(0,n.X)("newURL",(function(t,e){if(i.currentNode)i.currentNode[U].setNewURL(t);else if(i.prevInteraction&&!i.prevInteraction.ignored){const e=i.prevInteraction;e.setNewURL(t),e.root.end=null,W(e.root)}i.currentNode&&(i.lastSeenUrl!==t&&(i.currentNode[U].routeChange=!0),e&&(i.nodeOnLastHashUpdate=i.currentNode)),i.lastSeenUrl=t}),this.featureName,v),x.on("dom-start",(function(t){if(i.currentNode){var e=t[0],n=e&&"SCRIPT"===e.nodeName&&""!==e.src,r=i.currentNode.interaction;n&&(r[j]++,e.addEventListener("load",(function(){r[j]--,r.checkFinish()}),(0,E.m$)(!1)),e.addEventListener("error",(function(){r[j]--,r.checkFinish()}),(0,E.m$)(!1)))}})),(0,n.X)(O,(function(){W(i.prevNode)}),this.featureName,p),(0,n.X)("resolve-start",Q,this.featureName,N),(0,n.X)("executor-err",Q,this.featureName,N),(0,n.X)("propagate",(function(t,e){!e&&this[D]||(this[D]=i.currentNode)}),this.featureName,N),(0,n.X)(k,(function(){W((this.getCtx?this.getCtx():this)[D])}),this.featureName,N),(0,n.X)(H+"get",(function(e){var n;n=this.ixn=i?.currentNode?.[U]?i.currentNode[U]:null===i?.prevNode?.end&&"initialPageLoad"!=i?.prevNode?.[U]?.root?.[U]?.eventName?i.prevNode[U]:new T("api",e,i.lastSeenUrl,i.lastSeenRouteName,tt,t),i.currentNode||(n.checkFinish(),i.depth&&W(n.root))}),this.featureName,m),(0,n.X)(H+"actionText",(function(t,e){var i=this.ixn.root.attrs.custom;e&&(i.actionText=e)}),this.featureName,m),(0,n.X)(H+"setName",(function(t,e,i){var n=this.ixn.root.attrs;e&&(n.customName=e),i&&(n.trigger=i)}),this.featureName,m),(0,n.X)(H+"setAttribute",(function(t,e,i){this.ixn.root.attrs.custom[e]=i}),this.featureName,m),(0,n.X)(H+"end",(function(t){var e=this.ixn,i=K(e);W(null),i.child("customEnd",t).finish(t),e.finish()}),this.featureName,m),(0,n.X)(H+"ignore",(function(t){this.ixn.ignored=!0}),this.featureName,m),(0,n.X)(H+"save",(function(t){this.ixn.save=!0}),this.featureName,m),(0,n.X)(H+"tracer",(function(t,e,i){var n=this.ixn,r=K(n),s=m.context(i);if(!e)return s.inc=++n[j],s[D]=r;s[D]=r.child("customTracer",t,e)}),this.featureName,m),(0,n.X)(O,Z,this.featureName,C),(0,n.X)("no-"+O,Z,this.featureName,C),(0,n.X)(H+"getContext",(function(t,e){var i=this.ixn.root.attrs.store;setTimeout((function(){e(i)}),0)}),this.featureName,m),(0,n.X)(H+"onEnd",(function(t,e){this.ixn.handlers.push(e)}),this.featureName,m),(0,n.X)("api-routeName",(function(t,e){i.lastSeenRouteName=e,i.currentNode&&i.currentNode[U].setNewRoute(e)}),this.featureName,m),m.on("errorAgg",(function(t,e,n,r){i.currentNode&&(n._interactionId=i.currentNode.interaction.id,i.currentNode.type&&"interaction"!==i.currentNode.type&&(n._interactionNodeId=i.currentNode.id))})),m.on("interaction",(function(t){if(t.ignored||!t.save&&!t.routeChange)return void m.emit("interactionDiscarded",[t]);i.prevInteraction===t&&(i.prevInteraction=null);t.root.attrs.id=(0,h.Rl)(),"initialPageLoad"===t.root.attrs.trigger&&(t.root.attrs.firstPaint=u.e["first-paint"],t.root.attrs.firstContentfulPaint=u.e["first-contentful-paint"]);m.emit("interactionSaved",[t]),i.interactionsToHarvest.push(t),w.scheduleHarvest(0)})),(0,F.L)(this.agentIdentifier,this.featureName)}function $(){i.depth++,this.prevNode=i.currentNode,this.ct=i.childTime,i.childTime=0,i.timerBudget=X}function V(){i.depth--;var t=this.jsTime||0,e=t-i.childTime;i.childTime=this.ct+t,i.currentNode&&(i.currentNode.callback(e,this[y]),this.isTraced&&(i.currentNode.attrs.tracedTime=e)),this.jsTime=i.currentNode?0:e,W(this.prevNode),this.prevNode=null,i.timerBudget=X}function Z(t,e,i){var n=this[D];if(n){var r=n[U],s=this.inc;this.isTraced=!0,s?r[j]--:n&&n.finish(t),i?W(n):r.checkFinish()}}function K(t){return i.currentNode&&i.currentNode[U]===t?i.currentNode:t.root}function Q(){this.resolved||(this.resolved=!0,this[D]=i.currentNode)}function W(t){i.pageLoaded||t||!i.initialPageLoad||(t=i.initialPageLoad.root),i.currentNode&&i.currentNode[U].checkFinish(),i.prevNode=i.currentNode,i.currentNode=t&&!t[U].root.end?t:null}function tt(t){t===i.initialPageLoad&&(i.initialPageLoad=null);var e=t.root,n=e.attrs;i.currentNode=e,(0,a.D)(t.handlers,(function(t,e){e(n.store)})),W(null)}}}},7836:(t,e,i)=>{i.d(e,{BODY:()=>b,CB_END:()=>S,CB_START:()=>u,END:()=>E,FEATURE_NAME:()=>r,FETCH:()=>I,FETCH_BODY:()=>v,FETCH_DONE:()=>N,FETCH_START:()=>p,FN_END:()=>h,FN_START:()=>o,INTERACTION:()=>l,INTERACTION_API:()=>c,INTERACTION_EVENTS:()=>s,JSONP_END:()=>g,JSONP_NODE:()=>m,JS_TIME:()=>x,MAX_TIMER_BUDGET:()=>a,REMAINING:()=>d,SPA_NODE:()=>f,START:()=>R,originalSetTimeout:()=>T});var n=i(5763);const r=i(3325).D.spa,s=["click","submit","keypress","keydown","keyup","change"],a=999,o="fn-start",h="fn-end",u="cb-start",c="api-ixn-",d="remaining",l="interaction",f="spaNode",m="jsonpNode",p="fetch-start",N="fetch-done",v="fetch-body-",g="jsonp-end",T=n.Yu.ST,R="-start",E="-end",b="-body",S="cb"+E,x="jsTime",I="fetch"}}]);