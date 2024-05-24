"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[873],{4231:(t,e,i)=>{i.d(e,{R:()=>a,z:()=>r});var n=[];function r(t){if(0===n.length)return!0;if(void 0===t.hostname)return!1;for(var e=0;e<n.length;e++){var i=n[e];if("*"===i.hostname)return!1;if(s(i.hostname,t.hostname)&&o(i.pathname,t.pathname))return!1}return!0}function a(t){if(n=[],t&&t.length)for(var e=0;e<t.length;e++){var i=t[e];0===i.indexOf("http://")?i=i.substring(7):0===i.indexOf("https://")&&(i=i.substring(8));var r=i.indexOf("/");r>0?n.push({hostname:i.substring(0,r),pathname:i.substring(r)}):n.push({hostname:i,pathname:""})}}function s(t,e){return!(t.length>e.length)&&e.indexOf(t)===e.length-t.length}function o(t,e){return 0===t.indexOf("/")&&(t=t.substring(1)),0===e.indexOf("/")&&(e=e.substring(1)),""===t||t===e}},6210:(t,e,i)=>{i.d(e,{e:()=>n});const n={}},7826:(t,e,i)=>{i.d(e,{AG:()=>u,FX:()=>h,n1:()=>d,uR:()=>c});var n=i(7022),r=i(2438),a=i(9226),s=Object.prototype.hasOwnProperty,o=64;function u(t,e,i){return t||0===t||""===t?e(t)+(i?",":""):"!"}function c(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function h(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},i=0;return function(n){if(void 0===n||""===n)return"";var r=new a.RR({agentIdentifier:t});n=String(n),r.shouldObfuscate()&&(n=r.obfuscateString(n));return s.call(e,n)?c(e[n],!0):(e[n]=i++,function(t){return"'"+t.replace(f,"\\$1")}(n))}}function d(t,e){var i=[];return(0,n.D)(t,(function(t,n){if(!(i.length>=o)){var a,s=5;switch(t=e(t),typeof n){case"object":n?a=e((0,r.P)(n)):s=9;break;case"number":s=6,a=n%1?n:n+".";break;case"boolean":s=n?7:8;break;case"undefined":s=9;break;default:a=e(n)}i.push([s,t+(a?","+a:"")])}})),i}var f=/([,\\;])/g},4890:(t,e,i)=>{i.d(e,{uB:()=>p,wu:()=>m,zJ:()=>l});var n="Start",r="End",a="unloadEvent",s="redirect",o="domainLookup",u="onnect",c="request",h="response",d="loadEvent",f="domContentLoadedEvent",l=[];function m(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e)return i.of=t,N(i.of,i,"n",!0),N(e[a+n],i,"u",l),N(e[s+n],i,"r",l),N(e[a+r],i,"ue",l),N(e[s+r],i,"re",l),N(e["fetch"+n],i,"f",l),N(e[o+n],i,"dn",l),N(e[o+r],i,"dne",l),N(e["c"+u+n],i,"c",l),N(e["secureC"+u+"ion"+n],i,"s",l),N(e["c"+u+r],i,"ce",l),N(e[c+n],i,"rq",l),N(e[h+n],i,"rp",l),N(e[h+r],i,"rpe",l),N(e.domLoading,i,"dl",l),N(e.domInteractive,i,"di",l),N(e[f+n],i,"ds",l),N(e[f+r],i,"de",l),N(e.domComplete,i,"dc",l),N(e[d+n],i,"l",l),N(e[d+r],i,"le",l),i}function p(t,e){var i;return N("number"==typeof(i=t.type)?i:{navigate:void 0,reload:1,back_forward:2,prerender:3}[i],e,"ty"),N(t.redirectCount,e,"rc"),e}function N(t,e,i,n){if("number"==typeof t&&t>0){if(n){const i=e?.of>0?e.of:0;t=Math.max(t-i,0)}t=Math.round(t),e[i]=t}l.push(t)}},6368:(t,e,i)=>{i.d(e,{e:()=>a});var n=i(2374),r={};function a(t){if(t in r)return r[t];if(0===(t||"").indexOf("data:"))return{protocol:"data"};let e;var i=n._A?.location,a={};if(n.il)e=document.createElement("a"),e.href=t;else try{e=new URL(t,i.href)}catch(t){return a}a.port=e.port;var s=e.href.split("://");!a.port&&s[1]&&(a.port=s[1].split("/")[0].split("@").pop().split(":")[1]),a.port&&"0"!==a.port||(a.port="https"===s[0]?"443":"80"),a.hostname=e.hostname||i.hostname,a.pathname=e.pathname,a.protocol=s[0],"/"!==a.pathname.charAt(0)&&(a.pathname="/"+a.pathname);var o=!e.protocol||":"===e.protocol||e.protocol===i.protocol,u=e.hostname===i.hostname&&e.port===i.port;return a.sameOrigin=o&&(!e.hostname||u),"/"===a.pathname&&(r[t]=a),a}},9378:(t,e,i)=>{i.r(e),i.d(e,{Aggregate:()=>q});var n=i(4045),r=i(6368),a=i(4231),s=i(7022),o=i(4890),u=i(5526),c=i(6210),h=i(27),d=i(3752),f=0;function l(t,e,i,n){Object.defineProperty(this,"interaction",{value:t,writable:!0}),this.parent=e,this.id=++f,this.type=i,this.children=[],this.end=null,this.jsEnd=this.start=n,this.jsTime=0,this.attrs={},this.cancelled=!1}var m=l.prototype;m.child=function(t,e,i,n){var r=this.interaction;if(r.end||r.nodes>=128)return null;r.onNodeAdded(this);var a=new l(r,this,t,e);return a.attrs.name=i,r.nodes++,n||r.remaining++,a},m.callback=function(t,e){var i=this;i.jsTime+=t,e>i.jsEnd&&(i.jsEnd=e,i.interaction.lastCb=e)},m.cancel=function(){this.cancelled=!0,this.interaction.remaining--},m.finish=function(t){var e=this;if(e.end)return;e.end=t;let i=e.parent;for(;i?.cancelled;)i=i.parent;i&&i.children.push(e),e.parent=null;var n=this.interaction;n.remaining--,n.lastFinish=t,n.checkFinish()};var p=i(2053),N=h.Yu.ST,v=h.Yu.CT,g={};function T(t,e,i,n,r,a){this.agentIdentifier=a,this.ee=d.ee.get(a),g[a]=0,this.id=++g[a],this.eventName=t,this.nodes=0,this.remaining=0,this.finishTimer=null,this.checkingFinish=!1,this.lastCb=this.lastFinish=e,this.handlers=[],this.onFinished=r,this.done=!1;var s=(this.root=new l(this,null,"interaction",e)).attrs;s.trigger=t,s.initialPageURL=(0,h.OP)(a).origin,s.oldRoute=n,s.newURL=s.oldURL=i,s.custom={},s.store={}}var R=T.prototype;R.checkFinish=function(){var t=this;t.remaining>0?t._resetFinishCheck():t.checkingFinish||null===t.root.end&&(t._resetFinishCheck(),t.checkingFinish=!0,t.finishTimer=N((()=>{t.checkingFinish=!1,t.finishTimer=N((()=>{t.finishTimer=null,t.remaining<=0&&t.finish()}),1)}),0))},R.setNewURL=function(t){this.root.attrs.newURL=t},R.setNewRoute=function(t){this.root.attrs.newRoute=t},R.onNodeAdded=function(){this._resetFinishCheck()},R._resetFinishCheck=function(){this.finishTimer&&(v(this.finishTimer),this.finishTimer=null,this.checkingFinish=!1)},R.finish=function(){var t=this,e=t.root;if(null===e.end){var i=Math.max(t.lastCb,t.lastFinish),n=((0,p.z)(),e.attrs.custom);this.onFinished&&this.onFinished(this),(0,s.D)((0,h.C5)(t.agentIdentifier).jsAttributes,(function(t,e){t in n||(n[t]=e)})),e.end=i,t.ee.emit("interaction",[this])}};var E=i(8544),S=i(5330),x=i(6875),I=i(4917),b=i(7826),C=i(9557);class X extends C.w{constructor(t){super(t),this.firstTimestamp=void 0}serializeMultiple(t,e,i){const n=(0,h.C5)(this.sharedContext.agentIdentifier);var r=(0,b.FX)(this.sharedContext.agentIdentifier),a="bel.7";return t.forEach((t=>{a+=";"+this.serializeInteraction(t.root,e,i,t.routeChange,r,n)})),this.firstTimestamp=void 0,a}serializeSingle(t,e,i,n){const r=(0,h.C5)(this.sharedContext.agentIdentifier);var a=(0,b.FX)(this.sharedContext.agentIdentifier),s="bel.7;"+this.serializeInteraction(t,e,i,n,a,r);return this.firstTimestamp=void 0,s}serializeInteraction(t,e,i,n,r,a){e=e||0;var o="initialPageLoad"===t.attrs.trigger,u={interaction:1,ajax:2,customTracer:4},c=!0;const h=(t,d)=>{if("customEnd"===t.type)return d.push([3,(0,b.uR)(t.end-this.firstTimestamp)]);var f=t.type,l=u[f],m=t.start,p=t.children.length,N=0,v=a.atts,g=o&&i.length&&1===l,T=[],R=t.attrs,E=R.metrics,S=R.params,x=a.queueTime,C=a.applicationTime;void 0===this.firstTimestamp?(m+=e,this.firstTimestamp=m):m-=this.firstTimestamp;var X=[(0,b.uR)(m),(0,b.uR)(t.end-t.start),(0,b.uR)(t.jsEnd-t.end),(0,b.uR)(t.jsTime)];switch(l){case 1:X[2]=(0,b.uR)(t.jsEnd-this.firstTimestamp),X.push(r(R.trigger),r((0,I.f)(R.initialPageURL,c)),r((0,I.f)(R.oldURL,c)),r((0,I.f)(R.newURL,c)),r(R.customName),o?"":n?1:2,(0,b.AG)(o&&x,b.uR,!0)+(0,b.AG)(o&&C,b.uR,!0)+(0,b.AG)(R.oldRoute,r,!0)+(0,b.AG)(R.newRoute,r,!0)+r(R.id),r(t.id),(0,b.AG)(R.firstPaint,b.uR,!0)+(0,b.AG)(R.firstContentfulPaint,b.uR,!1));var A=(0,b.n1)(R.custom,r);T=T.concat(A),N=A.length,v&&(p++,T.push("a,"+r(v)));break;case 2:X.push(r(S.method),(0,b.uR)(S.status),r(S.host),r(S.pathname),(0,b.uR)(E.txSize),(0,b.uR)(E.rxSize),R.isFetch?1:R.isJSONP?2:"",r(t.id),(0,b.AG)(t.dt&&t.dt.spanId,r,!0)+(0,b.AG)(t.dt&&t.dt.traceId,r,!0)+(0,b.AG)(t.dt&&t.dt.timestamp,b.uR,!1));break;case 4:var L=R.tracedTime;X.push(r(R.name),(0,b.AG)(L,b.uR,!0)+r(t.id))}for(var O=0;O<t.children.length;O++)h(t.children[O],T);if(X.unshift((0,b.uR)(l),(0,b.uR)(p+=N)),d.push(X),p&&d.push(T.join(";")),g){var F=",",P="b",_=0;(0,s.D)(i.slice(1,21),(function(t,e){void 0!==e?(P+=F+(0,b.uR)(e-_),F=",",_=e):(P+=F+"!",F="")})),d.push(P)}else 1===l&&d.push("");return d};return h(t,[]).join(";")}}var A=i(755),L=i(4329),O=i(2325);const{FEATURE_NAME:F,INTERACTION_EVENTS:P,MAX_TIMER_BUDGET:_,FN_START:w,FN_END:k,CB_START:j,INTERACTION_API:y,REMAINING:U,INTERACTION:D,SPA_NODE:M,JSONP_NODE:z,FETCH_START:H,FETCH_DONE:B,FETCH_BODY:G,JSONP_END:J,originalSetTimeout:Y}=A;class q extends S.m{static featureName=F;constructor(t,e){super(t,e,F),this.state={initialPageURL:(0,h.OP)(t).origin,lastSeenUrl:(0,h.OP)(t).origin,lastSeenRouteName:null,timerMap:{},timerBudget:_,currentNode:null,prevNode:null,nodeOnLastHashUpdate:null,initialPageLoad:null,pageLoaded:!1,childTime:0,depth:0,harvestTimeSeconds:(0,h.Mt)(t,"spa.harvestTimeSeconds")||10,interactionsToHarvest:[],interactionsSent:[]},this.serializer=new X(this);const{state:i,serializer:f}=this;let{blocked:l}=this;const m=d.ee.get(t),p=m.get("mutation"),N=m.get("promise"),v=m.get("history"),g=m.get("events"),R=m.get("timer"),S=m.get("fetch"),I=m.get("jsonp"),b=m.get("xhr"),C=m.get("tracer"),A=new x.o("events",{onFinished:function(t){t.sent&&t.retry&&i.interactionsSent.length>0&&(i.interactionsSent.forEach((function(t){i.interactionsToHarvest.push(t)})),i.interactionsSent=[])},retryDelay:i.harvestTimeSeconds},{agentIdentifier:t});if(A.harvest.on("events",(function(t){if(0===i.interactionsToHarvest.length||l)return{};var e=f.serializeMultiple(i.interactionsToHarvest,0,o.zJ);t.retry&&i.interactionsToHarvest.forEach((function(t){i.interactionsSent.push(t)}));return i.interactionsToHarvest=[],{body:{e}}})),(0,n.X)("block-spa",(()=>{l=!0,A.stopTimer(!0)}),this.featureName,m),function(){if(!1===(0,h.Mt)(t,"spa.enabled"))return!1;return!0}()){i.initialPageLoad=new T("initialPageLoad",0,i.lastSeenUrl,i.lastSeenRouteName,tt,t),i.initialPageLoad.save=!0,i.prevInteraction=i.initialPageLoad,i.currentNode=i.initialPageLoad.root,i.initialPageLoad[U]++,(0,n.X)(w,$,this.featureName,m),(0,n.X)(j,$,this.featureName,N);var q={getCurrentNode:function(){return i.currentNode},setCurrentNode:Z};(0,n.X)("spa-register",(function(t){"function"==typeof t&&t(q)}),O.D.spa,m),(0,n.X)(k,V,this.featureName,m),(0,n.X)("cb-end",V,this.featureName,N),(0,n.X)(w,(function(e,n){var r=e[0],a=r.type,s=r.__nrNode;if(i.pageLoaded||"load"!==a||n!==window||(i.pageLoaded=!0,this.prevNode=i.currentNode=null,i.initialPageLoad&&(s=i.initialPageLoad.root,i.initialPageLoad[U]=0,Y((function(){P.push("popstate")})))),s)Z(s);else if("hashchange"===a)Z(i.nodeOnLastHashUpdate),i.nodeOnLastHashUpdate=null;else if(n instanceof XMLHttpRequest)Z(m.context(n).spaNode);else if(!i.currentNode&&-1!==P.indexOf(a)){var o=new T(a,this[w],i.lastSeenUrl,i.lastSeenRouteName,tt,t);if(i.prevInteraction=o,Z(o.root),"click"===a){var u=function(t){var e=t.tagName.toLowerCase();if(-1!==["a","button","input"].indexOf(e))return t.title||t.value||t.innerText}(r.target);u&&(i.currentNode.attrs.custom.actionText=u)}}r.__nrNode=i.currentNode}),this.featureName,g),(0,n.X)("setTimeout-end",(function(t,e,n){!i.currentNode||i.timerBudget-this.timerDuration<0||(!t||t[0]instanceof Function)&&(i.currentNode[D][U]++,this.timerId=n,i.timerMap[n]=i.currentNode,this.timerBudget=i.timerBudget-50)}),this.featureName,R),(0,n.X)("clearTimeout-start",(function(t){var e=t[0],n=i.timerMap[e];if(n){var r=n[D];r[U]--,r.checkFinish(),delete i.timerMap[e]}}),this.featureName,R),(0,n.X)(w,(function(){i.timerBudget=this.timerBudget||_;var t=this.timerId,e=i.timerMap[t];Z(e),delete i.timerMap[t],e&&e[D][U]--}),this.featureName,R),(0,n.X)(w,(function(){Z(this[M])}),this.featureName,b),(0,n.X)("new-xhr",(function(){if(!i.currentNode&&i.prevInteraction&&!i.prevInteraction.ignored){const t=i.prevInteraction;i.currentNode=t.root,t.root.end=null}i.currentNode&&(this[M]=i.currentNode.child("ajax",null,null,!0))}),this.featureName,b),(0,n.X)("send-xhr-start",(function(){var t=this[M];t&&!this.sent&&(this.sent=!0,t.dt=this.dt,t.jsEnd=t.start=this.startTime,t[D][U]++)}),this.featureName,b),(0,n.X)("xhr-resolved",(function(){var t=this[M];if(t){if(!(0,a.z)(this.params))return void t.cancel();var e=t.attrs;e.params=this.params,e.metrics=this.metrics,t.finish(this.endTime),this.currentNode&&this.currentNode.interaction&&this.currentNode.interaction.checkFinish()}}),this.featureName,m),(0,n.X)("new-jsonp",(function(t){i.currentNode&&((this[z]=i.currentNode.child("ajax",this[H])).start=this["new-jsonp"],this.url=t,this.status=null)}),this.featureName,I),(0,n.X)("cb-start",(function(t){var e=this[z];e&&(Z(e),this.status=200)}),this.featureName,I),(0,n.X)("jsonp-error",(function(){var t=this[z];t&&(Z(t),this.status=0)}),this.featureName,I),(0,n.X)(J,(function(){var t=this[z];if(t){if(null===this.status)return void t.cancel();var e=t.attrs,i=e.params={},n=(0,r.e)(this.url);i.method="GET",i.pathname=n.pathname,i.host=n.hostname+":"+n.port,i.status=this.status,e.metrics={txSize:0,rxSize:0},e.isJSONP=!0,t.jsEnd=this[J],t.jsTime=this[j]?this[J]-this[j]:0,t.finish(t.jsEnd)}}),this.featureName,I),(0,n.X)(H,(function(t,e){if(t){if(!i.currentNode&&i.prevInteraction&&!i.prevInteraction.ignored){const t=i.prevInteraction;i.currentNode=t.root,t.root.end=null}i.currentNode&&(this[M]=i.currentNode.child("ajax",this[H]),e&&this[M]&&(this[M].dt=e))}}),this.featureName,S),(0,n.X)(G+"start",(function(t){i.currentNode&&(this[M]=i.currentNode,i.currentNode[D][U]++)}),this.featureName,S),(0,n.X)(G+"end",(function(t,e,i){var n=this[M];n&&n[D][U]--}),this.featureName,S),(0,n.X)(B,(function(t,e){var i=this[M];if(i){if(t)return void i.cancel();var n=i.attrs;n.params=this.params,n.metrics={txSize:this.txSize,rxSize:this.rxSize},n.isFetch=!0,i.finish(this[B])}}),this.featureName,S),(0,n.X)("newURL",(function(t,e){if(i.currentNode)i.currentNode[D].setNewURL(t);else if(i.prevInteraction&&!i.prevInteraction.ignored){const e=i.prevInteraction;e.setNewURL(t),e.root.end=null,Z(e.root)}i.currentNode&&(i.lastSeenUrl!==t&&(i.currentNode[D].routeChange=!0),e&&(i.nodeOnLastHashUpdate=i.currentNode)),i.lastSeenUrl=t}),this.featureName,v),I.on("dom-start",(function(t){if(i.currentNode){var e=t[0],n=e&&"SCRIPT"===e.nodeName&&""!==e.src,r=i.currentNode.interaction;n&&(r[U]++,e.addEventListener("load",(function(){r[U]--,r.checkFinish()}),(0,E.m$)(!1)),e.addEventListener("error",(function(){r[U]--,r.checkFinish()}),(0,E.m$)(!1)))}})),(0,n.X)(w,(function(){Z(i.prevNode)}),this.featureName,p),(0,n.X)("resolve-start",W,this.featureName,N),(0,n.X)("executor-err",W,this.featureName,N),(0,n.X)("propagate",(function(t,e){!e&&this[M]||(this[M]=i.currentNode)}),this.featureName,N),(0,n.X)(j,(function(){Z((this.getCtx?this.getCtx():this)[M])}),this.featureName,N),(0,n.X)(y+"get",(function(e){var n;n=this.ixn=i?.currentNode?.[D]?i.currentNode[D]:null===i?.prevNode?.end&&"initialPageLoad"!=i?.prevNode?.[D]?.root?.[D]?.eventName?i.prevNode[D]:new T("api",e,i.lastSeenUrl,i.lastSeenRouteName,tt,t),i.currentNode||(n.checkFinish(),i.depth&&Z(n.root))}),this.featureName,m),(0,n.X)(y+"actionText",(function(t,e){var i=this.ixn.root.attrs.custom;e&&(i.actionText=e)}),this.featureName,m),(0,n.X)(y+"setName",(function(t,e,i){var n=this.ixn.root.attrs;e&&(n.customName=e),i&&(n.trigger=i)}),this.featureName,m),(0,n.X)(y+"setAttribute",(function(t,e,i){this.ixn.root.attrs.custom[e]=i}),this.featureName,m),(0,n.X)(y+"end",(function(t){var e=this.ixn,i=Q(e);Z(null),i.child("customEnd",t).finish(t),e.finish()}),this.featureName,m),(0,n.X)(y+"ignore",(function(t){this.ixn.ignored=!0}),this.featureName,m),(0,n.X)(y+"save",(function(t){this.ixn.save=!0}),this.featureName,m),(0,n.X)(y+"tracer",(function(t,e,i){var n=this.ixn,r=Q(n),a=m.context(i);if(!e)return a.inc=++n[U],a[M]=r;a[M]=r.child("customTracer",t,e)}),this.featureName,m),(0,n.X)(w,K,this.featureName,C),(0,n.X)("no-"+w,K,this.featureName,C),(0,n.X)(y+"getContext",(function(t,e){var i=this.ixn.root.attrs.store;setTimeout((function(){e(i)}),0)}),this.featureName,m),(0,n.X)(y+"onEnd",(function(t,e){this.ixn.handlers.push(e)}),this.featureName,m),(0,n.X)("api-routeName",(function(t,e){i.lastSeenRouteName=e,i.currentNode&&i.currentNode[D].setNewRoute(e)}),this.featureName,m),m.on("errorAgg",(function(t,e,n,r){i.currentNode&&(n._interactionId=i.currentNode.interaction.id,i.currentNode.type&&"interaction"!==i.currentNode.type&&(n._interactionNodeId=i.currentNode.id))})),m.on("interaction",(function(t){if(t.ignored||!t.save&&!t.routeChange)return void m.emit("interactionDiscarded",[t]);i.prevInteraction===t&&(i.prevInteraction=null);t.root.attrs.id=(0,u.Rl)(),"initialPageLoad"===t.root.attrs.trigger&&(t.root.attrs.firstPaint=c.e["first-paint"],t.root.attrs.firstContentfulPaint=c.e["first-contentful-paint"]);m.emit("interactionSaved",[t]),i.interactionsToHarvest.push(t),A.scheduleHarvest(0)})),(0,L.L)(this.agentIdentifier,this.featureName)}function $(){i.depth++,this.prevNode=i.currentNode,this.ct=i.childTime,i.childTime=0,i.timerBudget=_}function V(){i.depth--;var t=this.jsTime||0,e=t-i.childTime;i.childTime=this.ct+t,i.currentNode&&(i.currentNode.callback(e,this[k]),this.isTraced&&(i.currentNode.attrs.tracedTime=e)),this.jsTime=i.currentNode?0:e,Z(this.prevNode),this.prevNode=null,i.timerBudget=_}function K(t,e,i){var n=this[M];if(n){var r=n[D],a=this.inc;this.isTraced=!0,a?r[U]--:n&&n.finish(t),i?Z(n):r.checkFinish()}}function Q(t){return i.currentNode&&i.currentNode[D]===t?i.currentNode:t.root}function W(){this.resolved||(this.resolved=!0,this[M]=i.currentNode)}function Z(t){i.pageLoaded||t||!i.initialPageLoad||(t=i.initialPageLoad.root),i.currentNode&&i.currentNode[D].checkFinish(),i.prevNode=i.currentNode,i.currentNode=t&&!t[D].root.end?t:null}function tt(t){t===i.initialPageLoad&&(i.initialPageLoad=null);var e=t.root,n=e.attrs;i.currentNode=e,(0,s.D)(t.handlers,(function(t,e){e(n.store)})),Z(null)}}}},755:(t,e,i)=>{i.r(e),i.d(e,{BODY:()=>S,CB_END:()=>x,CB_START:()=>c,END:()=>E,FEATURE_NAME:()=>r,FETCH:()=>b,FETCH_BODY:()=>v,FETCH_DONE:()=>N,FETCH_START:()=>p,FN_END:()=>u,FN_START:()=>o,INTERACTION:()=>f,INTERACTION_API:()=>h,INTERACTION_EVENTS:()=>a,JSONP_END:()=>g,JSONP_NODE:()=>m,JS_TIME:()=>I,MAX_TIMER_BUDGET:()=>s,REMAINING:()=>d,SPA_NODE:()=>l,START:()=>R,originalSetTimeout:()=>T});var n=i(27);i(2374);const r=i(2325).D.spa,a=["click","submit","keypress","keydown","keyup","change"],s=999,o="fn-start",u="fn-end",c="cb-start",h="api-ixn-",d="remaining",f="interaction",l="spaNode",m="jsonpNode",p="fetch-start",N="fetch-done",v="fetch-body-",g="jsonp-end",T=n.Yu.ST,R="-start",E="-end",S="-body",x="cb"+E,I="jsTime",b="fetch"}}]); <div class="post-box">
                        <div class="img-box"><img class="loadme" data-src="https://static.zaobao.com/s3fs-public/styles/large/public/articles/2024/01/31/49SEU_0.jpg"></div>
          </div>
          <div class="title">30亿元洗钱案被告苏文强 再加控两项罪名</div>
          <span class="datestamp">31/01/2024</span>
        </a>
      </li>
        <li class="post-item col-md-6 col-sm-6">
        <a href="http://www.zaobao.com.sg/realtime/singapore/story20240131-1465416" target="_blank">
          <div class="post-box">
                        <div class="img-box"><img class="loadme" data-src="https://static.zaobao.com/s3fs-public/styles/large/public/articles/2024/01/31/E4B998E5AEA2E9A38EE6B3A2EFBD81_1.jpg"></div>
          </div>
          <div class="title">乘客追上巴士猛敲车门 巴士公司劝乘客别那么做</div>
          <span class="datestamp">31/01/2024</span>
        </a>
      </li>
        <li class="post-item col-md-6 col-sm-6">
        <a href="http://www.zaobao.com.sg/news/singapore/story20240131-1465434" target="_blank">
          <div class="post-box">
                        <div class="img-box"><img class="loadme" data-src="https://static.zaobao.com/s3fs-public/styles/large/public/articles/2024/02/01/IMGcs-generic-TampinesH11UK43MIU.jpg"></div>
          </div>
          <div class="title">涉提交淡滨尼天地项目假文件 四名男子被控</div>
          <span class="datestamp">31/01/2024</span>
        </a>
      </li>
  </ul>
</section>
</div>

<div class="col-md-4 col-sm-5">
<div id="fb-root"> </div>
<script async="" defer="defer" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v4.0"></script><div class="fb-page" data-adapt-container-width="true" data-height="" data-hide-cover="false" data-href="https://www.facebook.com/shinmindailynewsxinmingribao" data-show-facepile="false" data-small-header="false" data-tabs="timeline" data-width="300">
<blockquote cite="https://www.facebook.com/shinmindailynewsxinmingribao" class="fb-xfbml-parse-ignore"><p><a href="https://www.facebook.com/shinmindailynewsxinmingribao">Shin Min Daily News 新明日报</a></p></blockquote>
</div>
</div>
<style type="text/css">
<!--/*--><![CDATA[/* ><!--*/
body#sm-home #lobby{display:none;}

/*--><!]]>*/
</style><!--link href="https://project.zaobao.com/shinmin50/assets/css/shinmin50-style.css" rel="stylesheet"><div class="col-md-4 col-sm-5">
<div id="event-lineup">
<h1 style="text-align:center">活动日期</h1>
<div id="exTab1">
<ul class="nav nav-pills">
<li class="active"><a data-toggle="tab" href="#1a">7月</a></li>
<li><a data-toggle="tab" href="#2a">10月</a></li>
</ul>
<div class="tab-content clearfix">
<div class="tab-pane active" id="1a">
<h3>新明50展览@邻里购物商场</h3>
<ul>
<li><a href="http://www.shinmin.sg/news/story20170702-1443" target="_blank">7月1日至7日‘新明50年回顾展’ 淡滨尼广场展出</a></li>
<li><a href="http://www.shinmin.sg/news/story20170704-1448" target="_blank">“新明50年回顾展” 淡滨尼广场举行</a></li>
<li><a href="http://www.shinmin.sg/news/story20170710-1458" target="_blank">《新明50年回顾展》首日 逾百人观看 纷拍照留念</a></li>
<li><a href="http://www.shinmin.sg/news/story20170710-1458" target="_blank">‘新明50年回顾展’ 今天起IMM举行</a></li>
<li><a href="http://www.shinmin.sg/news/story20170712-1464" target="_blank">‘新明50年回顾展’ IMM展出</a></li>
<li><a href="http://www.shinmin.sg/news/story20170817-1535" target="_blank">‘“新明50年回顾展”唐城坊展出</a></li>
</ul>
</div>
<div class="tab-pane" id="2a">
<h3>冠军菜</h3>
<ul>
<li><a href="http://www.shinmin.sg/news/story20170912-1583 " target="_blank">新明50金牌名厨冠军宴 邀您共品获奖美馔</a></li>
</ul>
</div>
</div>
</div>
</div>
</div-->
  </div>
				
					   <div id="block-block-module-zb-video" class="block block-block-module">
  <div class="content">
    <section class="row" id="watch-me">
	<div class="owl-carousel video-list-thumbs" id="CarouselVideo">
			</div>
</section>

<script>
(function(){
	var vidItem = document.querySelectorAll(".video-list-thumbs .item");
	for( var i = 0; i < vidItem.length; i++ ) {
			vidItem[i].style.display = "none";
	}
	setTimeout(function(){
		console.log(vidItem);
		var vidItem = document.querySelectorAll(".video-list-thumbs .item");
		for( var i = 0; i < vidItem.length; i++ ) {
		    vidItem[i].style.display = "inline-block";
		}
		vidItem = null;
	}, 1000);
	vidItem = null;
})()
</script>
  </div>
</div>
				<section class="row" id="sm-assets">
										   <div id="block-block-module-home-epaper" class="block block-block-module">
  <div class="content">
    <div class="col-md-6 col-sm-6 daily-cover" id="daily-cover">
	<!--script type="text/javascript">
	var a2a_config = a2a_config || {};
	a2a_config.onclick = 1;
	</script><script type="text/javascript" src="http://static.addtoany.com/menu/page.js"></script-->
	<div class="owl-carousel" id="ePaper" ng-app="shinmin">
		<div class="item" ><div ng-controller="SharingController" class="addtoany a2a_kit a2a_kit_size_32 a2a_default_style" data-title="星期四" data-image="https://epaper.shinmin.sg/thumbnail.php" data-url="https://epaper.shinmin.sg/" data-description=""><a class="a2a_button_facebook" ng-click="share('facebook')"></a><a class="a2a_button_twitter" ng-click="share('twitter')"></a><a class="a2a_button_email" ng-click="share('email')"></a><a class="a2a_button_whatsapp" ng-click="share('whatsapp')"></a></div><a class="cover-link col-md-7 col-xs-7" href="https://epaper.shinmin.sg/"><img border="0" data-src="https://epaper.shinmin.sg/thumbnail.php" src="https://epaper.shinmin.sg/thumbnail.php" /></a><span class="datestamp col-md-5 col-xs-5">星期四<em>02月01日</em></span>
</div>	</div>
	<div class="btns" id="login-epaper"><a class="btn-login" href="https://epaper.shinmin.sg">登录</a> <a class="btn-subscribe" href="https://subscribe.sph.com.sg/publications-sm/?utm_campaign=sm_subscription&utm_medium=sph-publication&utm_source=sm&utm_content=subscribebutton-epapersection" target="_blank">订阅</a></div>
</div>
  </div>
</div>
			
										   <div id="block-block-module-sm-hsing-yun-quote-home" class="block block-block-module">
  <div class="content">
    <div class="ds-1col col-md-6 col-sm-6 hsing-yun clearfix"><h2>星云大师点智慧</h2></div>  </div>
</div>
					</section>
				<div class="row" id="lobby">
			<div class="col-md-12" id="content-plate">
																												
														   <div id="block-system-main" class="block block-system">
  <div class="content">
      </div>
</div>
				
				
							</div>
					</div>
	</div>
</div>
	   <div id="block-block-2" class="block block-block">
  <div class="content">
    <footer>
	<div class="row" id="mode-contact">
		<ul class="mode-contact-detail clearfix">
			<li class="col-md-3 col-sm-3 col-xs-3"><a href="tel:18008227288"><i class="fa fa-phone"></i><span>24-Hr Hotline<em>1800-8227288 / 91918727</em></span></a></li>
			<li class="col-md-3 col-sm-3 col-xs-3"><a href="mailto:shinmin@sph.com.sg" target="_blank"><i class="fa fa-envelope-o"></i><span>Email<em>shinmin@sph.com.sg</em></span></a></li>
			<li class="col-md-3 col-sm-3 col-xs-3"><a href="sms:91918727?body=我要爆料" target="_blank"><i class="fa fa-paperclip"></i><span>SMS / Whatsapp<em>91918727</em></span></a></li>
			<li class="col-md-3 col-sm-3 col-xs-3"><a href="https://www.facebook.com/ShinMinDailyNewsXinMingRiBao" target="_blank"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
		</ul>
      
      
      <ul class="mode-sitemap clearfix">  
       <li class="col-md-7 col-sm-7 col-xs-12 text-left">
        <b>广告及商业企划咨询</b><br>
我们欢迎您通过以下方式与我们联络：</li>
<li class="col-md-5 col-sm-5 col-xs-12  text-left">
电话: (65) 6319 6319 <br>
广告询问: <a style="text-decoration: underline !important;" href="https://www.sph.com.sg/zh-hans/contact-us/?ctopic=%E5%B9%BF%E5%91%8A&csubject=%E4%B8%80%E8%88%AC%E5%B9%BF%E5%91%8A%E8%AF%A2%E9%97%AE" target="_blank">填写表格</a></li>
</ul>
        
        
        
		<ul class="mode-sitemap clearfix">
			<li class="col-md-6 col-sm-6 col-xs-12"><a href="/">首页</a><a href="/news">资讯</a><a href="/hsing-yun-quote">星云大师点智慧</a><a href="/horse-racing">赛马</a></li>
			<li class="col-md-6 col-sm-6 col-xs-12" id="login-footer"><a href="#">登录</a><a href="https://subscribe.sph.com.sg/publications-sm/?utm_campaign=sm_subscription&utm_medium=sph-publication&utm_source=sm&utm_content=subscribelink-footer">订阅</a></li>
		</ul>

		<div class="mode-cmg">
			<h3>新报业媒体华文媒体集团联合数码平台</h3>
			<ul class="cmg-pubs">
				<li class="col-md-6 col-xs-6"><a href="http://www.zaobao.sg" target="_blank"><img src="/sites/shinmin.sg/themes/SM2015/assets/imgs/zb-logo-2023.svg" border="0" class="logo-zaobao" /></a></li>
				<li class="col-md-6 col-xs-6"><a href="http://www.shinmin.sg" target="_blank"><img src="/sites/shinmin.sg/themes/SM2015/assets/imgs/credit-shinmin.svg" border="0" class="logo-shinmin" /></a></li>
			<ul>
		</div>
	</div>

	<div id="sph">
		<ul class="corporate">
			<li><a href="http://sph.com.sg/legal/website_tnc.html" target="_blank">Conditions of Access</a></li>
			<li><a href="http://www.sph.com.sg/legal/sph_privacy.html" target="_blank">Privacy Policy</a></li>
			<li><a href="http://sph.com.sg/legal/pdpa.html" target="_blank">Personal Data Protection</a></li>
		</ul>
		<aside>
			<span>MCI (P) 044/10/2023<br>新报业媒体有限公司版权所有（公司登记号：202120748H）</span>
		</aside>
	</div>
</footer>

<div id="search">
	<button type="button" class="close"><span class="fa fa-spin">×</span></button>
	<form action="/sitesearch" method="get" accept-charset="utf-8" >
		<input type="search" name="key" class="wildcard" placeholder="想找些什么?" />
		<button type="submit" class="btn btn-primary">搜索</button>
	</form>
</div>

<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/wow.min.js"></script>
<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/tooltip-viewport.js"></script>
<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/tooltipster/scripts.js"></script>
<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/tooltipster/jquery.tooltipster.js"></script>
<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/owl-carousel/owl.carousel.js"></script>
<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/jquery.lazy.min.js"></script>
<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/global.js?v=1.1.8"></script>
  </div>
</div>

  
    	<script type="text/javascript" src="/sites/shinmin.sg/themes/SM2015/assets/js/angular/app.js?4" ></script>
</body>
</html>
