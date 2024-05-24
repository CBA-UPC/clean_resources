![function(e,t,n){"use strict";var r=this&&this.__assign||t.__esModule=!0;var i=n(1),o=n(2),a=n(3),c=n(4);!function(){unction t(e){if("function"==typeof performance.getEntriesByType){var t=performance.getEntriesByType("paint").filter(function(t){return t.name===e})[0];return t?t.startTime:0}return 0}nction u(e,t){for(var n in e){var r=e[n];void 0===t||"number"!=typeof r&&"string"!=typeof r||(t[n]=r)}}!function(){function f(){var t=l.timing,n="";try{n="function"==typeof l.getEntriesByType?new URL(l.getEntriesByType("navigation")[0].name).pathname:b?new URL(b).pathname:window.location.pathname}catch(e){}var r={referrer:document.referrer||"",eventType:i.EventType.WebVitalsV2,lcp:{value:-1,path:void 0},cls:{value:-1,path:void 0},fid:{value:-1,path:void 0},si:g?g.si:0,versions:{js:"2021.12.0"},pageloadId:v,location:e(),landingPath:n,startTime:l.timeOrigin||(t?t.navigationStart:0)};return g&&(g.version&&(r.versions.fl=g.version),g.icTag&&(r.icTag=g.icTag),r.siteToken=g.token),C&&(r.lcp=C.lcp&&void 0!==C.lcp.value?C.lcp:r.lcp,r.fid=C.fid&&void 0!==C.fid.value?C.fid:r.fid,r.cls=C.cls&&void 0!==C.cls.value?C.cls:r.cls),r}function d(r){var o=l.timing,a=l.memory,c=r||e(),f=document.referrer||"",d=m[2]||m[1]||m[0],p={memory:{},timings:{},resources:[],tempResources:[],referrer:k&&R&&d?d.url:f,documentWriteIntervention:!1,errorCount:0,eventType:i.EventType.Load,firstPaint:0,firstContentfulPaint:0,si:g?g.si:0,startTime:l.timeOrigin||(o?o.navigationStart:0),versions:{fl:g?g.version:"",js:"2021.12.0",timings:1},pageloadId:v,location:c};if(void 0==E){if("function"==typeof l.getEntriesByType){var y=l.getEntriesByType("navigation");y&&Array.isArray(y)&&y.length>0&&(p.timingsV2={},p.versions.timings=2,delete p.timings,u(y[0],p.timingsV2))}1===p.versions.timings&&u(o,p.timings),u(a,p.memory)}if(p.documentWriteIntervention=n(),p.firstPaint=t("first-paint"),p.firstContentfulPaint=t("first-contentful-paint"),p.errorCount=window.__cfErrCount||0,g&&(g.icTag&&(p.icTag=g.icTag),p.siteToken=g.token,R=!0),"function"==typeof l.getEntriesByType){var h=l.getEntriesByType("resource"),w=0,T=0;h.forEach(}return JSON.stringify(p).length>=64e3&&(p.resources=[]),void 0!==E&&(delete p.timings,delete p.memory,delete p.errorCount,delete p.documentWriteIntervention),p}var l=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,p=document.currentScript||("function"==typeof document.querySelector?document.querySelector("script[data-cf-beacon]"):void 0),v=c(),m=[],g=window.__cfBeacon?window.__cfBeacon:{};if(!g||"single"!==g.load){if(p){var y=p.getAttribute("data-cf-beacon");if(y)try{g=r(r({},g),JSON.parse(y))}catch(e){}else{var h=p.getAttribute("src");if(h&&"function"==typeof URLSearchParams){var w=new URLSearchParams(h.replace(/^[^\?]+\??/,"")),T=w.get("token");T&&(g.token=T);var S=w.get("spa");g.spa=null===S||"true"===S}}g&&"multi"!==g.load&&(g.load="single"),window.__cfBeacon=g}if(l&&g&&g.token){var E,b,L=!1,R=!1;document.addEventListener("visibilitychange",function(){k&&0===m.filter(function(e){return e.id===v}).length&&j(),"hidden"===document.visibilityState&&!L&&R&&(L=!0,F(k))});var C={lcp:void 0,cls:void 0,fid:void 0},O=_=P=B=function(e){var t=window.location.pathname;if("CLS"===e.name){C.cls={value:e.value,path:t};var n=O(e.entries);n&&(C.cls.element=P(n.node),C.cls.currentRect=n.currentRect,C.cls.previousRect=n.previousRect)}else if("FID"===e.name){C.fid={value:e.value,path:t};var n=_(e.entries);n&&(C.fid.element=P(n.target),C.fid.name=n.name)}else if("LCP"===e.name){C.lcp={value:e.value,path:t};var n=_(e.entries);n&&(C.lcp.element=P(n.element),C.lcp.size=n.size,C.lcp.url=n.url)}};"function"==typeof PerformanceObserver&&((0,a.getLCP)(B,!0),(0,a.getFID)(B),PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes("layout-shift")&&(0,a.getCLS)(B,!0));var k=g&&(void 0===g.spa||!0===g.spa),A=g.send&&g.send.to?g.send.to:void 0===g.version?"https://cloudflareinsights.com/cdn-cgi/rum":null,j=function(e){var t=function(e,t){n.resources=e,0!=t&&(n.bypassTiming=!0),g&&(1===g.r&&(n.resources=[]),k&&0===t&&(m.push({id:n.pageloadId,url:n.location}),m.length>3&&m.shift()),(0,o.sendObjectBeacon)("",n,function(){},!1,A),void 0!==g.forward&&void 0!==g.forward.url&&(0,o.sendObjectBeacon)("",n,function(){},!1,g.forward.url))},n=d(e);if(n&&g){var r=n.tempResources;if(delete n.tempResources,k&&r&&0===r.length&&t([],0),!r)return;r.forEach(}},F=function(e){var t=f();e||(t.resources=[],delete t.tempResources),g&&(0,o.sendObjectBeacon)("",t,!0,A)},I=function(){R=!0;var e=window.__cfRl&&window.__cfRl.done||window.__cfQR&&window.__cfQR.done;e?e.then(j):j()};"complete"===window.document.readyState?I():window.addEventListener("load",,k&&(b=e(),function(t){var n=t.pushState;if(n){var r=t.pushState=function(i,o,a){return E=e(a),0===m.filter(function(e){return e.id===v}).length&&j(e()),r(),n.apply(t,[i,o,a])},window.addEventListener("popstate",function(t){0===m.filter(.length&&j(E),E=e(),r()})}}(window.history))}}}()}()},function(e,t,n){"use strict";t.__esModule=!0,t.getTTFB=t.getLCP=t.getFID=t.getFCP=t.getCLS=void 0;var r,i,o,a,c=s=u=f=d=l=-1,p=v=m=g=y=!1,h=-1,w=T={passive:!0,capture:!0},S=new Date,E=b=L=R=C=O=new Set,_=P=t.getFCP=g,t.getCLS=w,t.getFID=C,t.getLCP=_,t.getTTFB=P},);