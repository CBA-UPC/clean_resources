"use strict";(self.wsp=self.wsp||[]).push([["tramvai-web-performance-rum"],{17070:function(e,t,n){n.r(t),n.d(t,{initClientPerformanceMonitoring:function(){return Ae}});var i,r,a,o,u,c=n(27714),s=n.n(c),f={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{}},d=window,l=d.console,m=d.navigator,v=d.performance,p=function(){return m.deviceMemory},T=g=h="4g",y=!1,E={},S={value:0},k={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},b={value:0},w={value:0},C={},L={isHidden:!1,didChange:!1},B=M=P=D=I=x=F=N=R={RT:[100,200],TBT:[200,600],NTBT:[200,600]},O=A=q=_=H=W=z=j=-1,U=function(){return j},V=G=J=K=Q=X=Y=Z=$=-1,ee=te=ne=function(){addEventListener("visibilitychange",te,!0),addEventListener("prerenderingchange",te,!0)},ie=re=ae=oe={passive:!0,capture:!0},ue=new Date,ce=se=fe=de=le=me=0,ve=1/0,pe=0,Te=ge=he=ye=0,Ee=Se=[],ke={},be=we={},Ce=Le=Be=Me=Pe=function(){!0,f.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},Z((function(){var e,n=[.1,.25],i=J("CLS"),r=-1,a=0,o=[],u=function(e){r>-1&&e)},c=s=K("layout-shift",c);s&&(e=X(u,i,n,t.reportAllChanges),ae((),Q((),V(())}))}(0,t)}(0,f.reportOptions.cls),0,f.reportOptions.fcp),0,f.reportOptions.fid),0,f.reportOptions.lcp),function(e,t){!(function(e){!e),function(e){q(e)}(e)}),t)}(0,f.reportOptions.inp),f.isResourceTiming&&M("resource",Me),f.isElementTiming&&M("element",Be)},De=Ie=0,xe=);const Fe=/bot|google|crawl|spider|facebook|slurp/i,Ne=Re=e=>Oe={CLS:{cumulativeLayoutShift:,FID:{firstInputDelay:Ne},LCP:{largestContentfulPaint:Ne},FCP:{firstContentfulPaint:Ne},TTFB:{timeToFirstByte:Ne},TBT:{totalBlockingTime:Ne},INP:{interactionToNextPaint:Ne},fp:{firstPaintTime:Ne},navigationTiming:{navigationTimingsDomainLookupTime:Re("dnsLookupTime"),navigationTimingsServerResponseTime:Re("timeToFirstByte"),navigationTimingsDownloadDocumentTime:Re("downloadTime"),navigationTimingsFetchTime:Re("fetchTime"),navigationTimingsWorkerTime:Re("workerTime"),navigationTimingsTotalTime:Re("totalTime"),navigationTimingsRedirectTime:Re("redirectTime")},networkInformation:{networkInformationRoundTripTime:Re("rtt"),networkInformationDownloadBandwidth:Re("downlink"),networkInformationEffectiveConnectionTypeV2:("effectiveType",,networkInformationSaveDataV2:};const Ae=({statistClient:e,resolveUrlMask:t})=>{if((n=navigator.userAgent)&&n.match(Fe))return;var n;const i=(({statistClient:e,resolveUrlMask:t})=>{var n;const i=-1!==(null==(n=navigator.userAgent)?void 0:n.indexOf("Mobi"))?"mobile":"desktop";let r={};const a=()=>{const n=null==t?void 0:t();e.send("coretech.web.metrics","performance.rum",{...r,deviceType:i,urlMask:n}),r={}},o=s()(500,a);return(e,t)=>{e&&(r={...r,...e,navigationType:t},"cumulativeLayoutShift"in e||"interactionToNextPaint"in e?a():o())}})({statistClient:e,resolveUrlMask:t});let r=null;return new xe({analyticsTracker:e=>{const{metricName:t,data:n}=e,a=((e,t,n)=>n[e]?((e,t)=>{const n={};for(const i in t)n[i]=t[i](e);return n})(t,n[e]):null)(t,n,Oe);null!==a&&(e.navigationType&&!r&&(r=e.navigationType),i(a,r))}})}}}]);