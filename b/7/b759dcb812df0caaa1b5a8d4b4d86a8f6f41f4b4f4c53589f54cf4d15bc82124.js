"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[786],{6210:(e,t,n)=>{n.d(t,{e:()=>r});const r={}},4890:(e,t,n)=>{n.d(t,{uB:()=>h,wu:()=>l,zJ:()=>m});var r="Start",i="End",a="unloadEvent",o="redirect",u="domainLookup",s="onnect",c="request",f="response",d="loadEvent",p="domContentLoadedEvent",m=[];function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},m=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(t)return n.of=e,v(n.of,n,"n",!0),v(t[a+r],n,"u",m),v(t[o+r],n,"r",m),v(t[a+i],n,"ue",m),v(t[o+i],n,"re",m),v(t["fetch"+r],n,"f",m),v(t[u+r],n,"dn",m),v(t[u+i],n,"dne",m),v(t["c"+s+r],n,"c",m),v(t["secureC"+s+"ion"+r],n,"s",m),v(t["c"+s+i],n,"ce",m),v(t[c+r],n,"rq",m),v(t[f+r],n,"rp",m),v(t[f+i],n,"rpe",m),v(t.domLoading,n,"dl",m),v(t.domInteractive,n,"di",m),v(t[p+r],n,"ds",m),v(t[p+i],n,"de",m),v(t.domComplete,n,"dc",m),v(t[d+r],n,"l",m),v(t[d+i],n,"le",m),n}function h(e,t){var n;return v("number"==typeof(n=e.type)?n:{navigate:void 0,reload:1,back_forward:2,prerender:3}[n],t,"ty"),v(e.redirectCount,t,"rc"),t}function v(e,t,n,r){if("number"==typeof e&&e>0){if(r){const n=t?.of>0?t.of:0;e=Math.max(e-n,0)}e=Math.round(e),t[n]=e}m.push(e)}},7039:(e,t,n)=>{n.r(t),n.d(t,{Aggregate:()=>T});var r=n(9252),i=n(2325),a=n(8768),o=n(8085),u=n(7022),s=n(532),c=n(4890),f=n(2438),d=n(6210),p=n(5673),m=n(2919),l=n(6875),h=n(2484);var v=n(2374),g=n(4329),y=n(1509);class T extends y.W{static featureName=h.t9;constructor(e,t){if(super(e,t,h.t9),"undefined"==typeof PerformanceNavigationTiming||a.T)this.sendRum();else{this.alreadySent=!1;const t=(0,m.OP)(e);(0,o.mr)((e=>{let{value:n,entries:a}=e;if(this.alreadySent)return;this.alreadySent=!0,t[h.Dz]=Math.round(n);const o=a[0],u=Math.max(o.responseStart,o.activationStart||0);t[h.OJ]=Math.max(Math.round(o.loadEventEnd-u),0),(0,r.p)("timing",["load",Math.round(o.loadEventEnd)],void 0,i.D.pageViewTiming,this.ee),t[h.qw]=Math.max(Math.round(o.domContentLoadedEventEnd-u),0),this.sendRum()}))}}getScheme(){return!1===(0,m.Mt)(this.agentIdentifier,"ssl")?"http":"https"}sendRum(){const e=(0,m.C5)(this.agentIdentifier);if(!e.beacon)return;e.queueTime&&this.aggregator.store("measures","qt",{value:e.queueTime}),e.applicationTime&&this.aggregator.store("measures","ap",{value:e.applicationTime});const t=(0,m.OP)(this.agentIdentifier);this.aggregator.store("measures","be",{value:v.il?t[h.Dz]:0}),this.aggregator.store("measures","fe",{value:v.il?t[h.OJ]:0}),this.aggregator.store("measures","dc",{value:v.il?t[h.qw]:0});var n=this.aggregator.get("measures"),r=(0,u.D)(n,(function(e,t){return"&"+e+"="+t.params.value})).join(""),a="1",o=[new l.o("page_view_event",{},this).harvest.baseQueryString()];if(o.push(r),o.push((0,s.wu)("tt",e.ttGuid)),o.push((0,s.wu)("us",e.user)),o.push((0,s.wu)("ac",e.account)),o.push((0,s.wu)("pr",e.product)),o.push((0,s.wu)("af",function(e){const t=[];return Object.keys(newrelic.initializedAgents[e].features).forEach((e=>{switch(e){case i.D.ajax:t.push("xhr");break;case i.D.jserrors:t.push("err");break;case i.D.pageAction:t.push("ins");break;case i.D.sessionTrace:t.push("stn");break;case i.D.spa:t.push("spa")}})),t}(this.agentIdentifier).join(","))),v._A.performance)if("undefined"!=typeof PerformanceNavigationTiming){const e=v._A?.performance?.getEntriesByType("navigation")?.[0],n={timing:(0,c.wu)(t.offset,e,{}),navigation:(0,c.uB)(e,{})};o.push((0,s.wu)("perf",(0,f.P)(n)))}else if("undefined"!=typeof PerformanceTiming){const e={timing:(0,c.wu)(t.offset,v._A.performance.timing,{},!0),navigation:(0,c.uB)(v._A.performance.navigation,{})};o.push((0,s.wu)("perf",(0,f.P)(e)))}try{v._A.performance.getEntriesByType("paint").forEach((function(e){!e.startTime||e.startTime<=0||("first-paint"===e.name?o.push((0,s.wu)("fp",String(Math.floor(e.startTime)))):"first-contentful-paint"===e.name&&o.push((0,s.wu)("fcp",String(Math.floor(e.startTime)))),d.e[e.name]=Math.floor(e.startTime))}))}catch(e){}o.push((0,s.wu)("xx",e.extra)),o.push((0,s.wu)("ua",e.userAttributes)),o.push((0,s.wu)("at",e.atts));var y=(0,f.P)(e.jsAttributes);o.push((0,s.wu)("ja","{}"===y?null:y));var T=(0,s.nI)(o,t.maxBytes);t.bytesSent[a]=0,t.queryBytesSent[a]=(t.queryBytesSent[a]||0)+T?.length||0;p.T.jsonp(this.getScheme()+"://"+e.beacon+"/"+"1/"+e.licenseKey+T,"NREUM.setToken")||(0,g.L)(this.agentIdentifier,h.t9)}}},8085:(e,t,n)=>{n.d(t,{Fu:()=>j,NO:()=>Z,Yn:()=>W,a4:()=>L,mr:()=>te,mw:()=>k});var r,i,a,o,u,s=-1,c=function(e){addEventListener("pageshow",(function(t){t.persisted&&(s=t.timeStamp,e(t))}),!0)},f=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=f();return e&&e.activationStart||0},p=function(e,t){var n=f(),r="navigate";return s>=0?r="back-forward-cache":n&&(r=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},m=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},l=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},h=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},v=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},g=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},y=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},w=function(e){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===e.type?e.timeStamp:0,b())},E=function(){addEventListener("visibilitychange",w,!0),addEventListener("prerenderingchange",w,!0)},b=function(){removeEventListener("visibilitychange",w,!0),removeEventListener("prerenderingchange",w,!0)},S=function(){return y<0&&(y=T(),E(),c((function(){setTimeout((function(){y=T(),E()}),0)}))),{get firstHiddenTime(){return y}}},C=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},A=[1800,3e3],L=function(e,t){t=t||{},C((function(){var n,r=S(),i=p("FCP"),a=m("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-d(),0),i.entries.push(e),n(!0)))}))}));a&&(n=l(e,i,A,t.reportAllChanges),c((function(r){i=p("FCP"),n=l(e,i,A,t.reportAllChanges),h((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},M=[.1,.25],k=function(e,t){t=t||{},L(g((function(){var n,r=p("CLS",0),i=0,a=[],o=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=a[0],n=a[a.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,a.push(e)):(i=e.value,a=[e])}})),i>r.value&&(r.value=i,r.entries=a,n())},u=m("layout-shift",o);u&&(n=l(e,r,M,t.reportAllChanges),v((function(){o(u.takeRecords()),n(!0)})),c((function(){i=0,r=p("CLS",0),n=l(e,r,M,t.reportAllChanges),h((function(){return n()}))})),setTimeout(n,0))})))},I={passive:!0,capture:!0},P=new Date,x=function(e,t){r||(r=t,i=e,a=new Date,q(removeEventListener),D())},D=function(){if(i>=0&&i<a-P){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};o.forEach((function(t){t(e)})),o=[]}},B=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){x(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,I),removeEventListener("pointercancel",r,I)};addEventListener("pointerup",n,I),addEventListener("pointercancel",r,I)}(t,e):x(t,e)}},q=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,B,I)}))},R=[100,300],j=function(e,t){t=t||{},C((function(){var n,a=S(),u=p("FID"),s=function(e){e.startTime<a.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),n(!0))},f=function(e){e.forEach(s)},d=m("first-input",f);n=l(e,u,R,t.reportAllChanges),d&&v(g((function(){f(d.takeRecords()),d.disconnect()}))),d&&c((function(){var a;u=p("FID"),n=l(e,u,R,t.reportAllChanges),o=[],i=-1,r=null,q(addEventListener),a=s,o.push(a),D()}))}))},F=0,N=1/0,O=0,_=function(e){e.forEach((function(e){e.interactionId&&(N=Math.min(N,e.interactionId),O=Math.max(O,e.interactionId),F=O?(O-N)/7+1:0)}))},z=function(){return u?F:performance.interactionCount||0},H=function(){"interactionCount"in performance||u||(u=m("event",_,{type:"event",buffered:!0,durationThreshold:0}))},J=[200,500],G=0,K=function(){return z()-G},Q=[],U={},V=function(e){var t=Q[Q.length-1],n=U[e.interactionId];if(n||Q.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};U[r.id]=r,Q.push(r)}Q.sort((function(e,t){return t.latency-e.latency})),Q.splice(10).forEach((function(e){delete U[e.id]}))}},W=function(e,t){t=t||{},C((function(){H();var n,r=p("INP"),i=function(e){e.forEach((function(e){e.interactionId&&V(e),"first-input"===e.entryType&&!Q.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&V(e)}));var t,i=(t=Math.min(Q.length-1,Math.floor(K()/50)),Q[t]);i&&i.latency!==r.value&&(r.value=i.latency,r.entries=i.entries,n())},a=m("event",i,{durationThreshold:t.durationThreshold||40});n=l(e,r,J,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v((function(){i(a.takeRecords()),r.value<0&&K()>0&&(r.value=0,r.entries=[]),n(!0)})),c((function(){Q=[],G=z(),r=p("INP"),n=l(e,r,J,t.reportAllChanges)})))}))},Y=[2500,4e3],X={},Z=function(e,t){t=t||{},C((function(){var n,r=S(),i=p("LCP"),a=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-d(),0),i.entries=[t],n())},o=m("largest-contentful-paint",a);if(o){n=l(e,i,Y,t.reportAllChanges);var u=g((function(){X[i.id]||(a(o.takeRecords()),o.disconnect(),X[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,u,!0)})),v(u),c((function(r){i=p("LCP"),n=l(e,i,Y,t.reportAllChanges),h((function(){i.value=performance.now()-r.timeStamp,X[i.id]=!0,n(!0)}))}))}}))},$=[800,1800],ee=function e(t){document.prerendering?C((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},te=function(e,t){t=t||{};var n=p("TTFB"),r=l(e,n,$,t.reportAllChanges);ee((function(){var i=f();if(i){var a=i.responseStart;if(a<=0||a>performance.now())return;n.value=Math.max(a-d(),0),n.entries=[i],r(!0),c((function(){n=p("TTFB",0),(r=l(e,n,$,t.reportAllChanges))(!0)}))}}))}}}]);