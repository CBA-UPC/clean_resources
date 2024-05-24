"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[147],{9124:(e,t,r)=>{r.r(t),r.d(t,{Aggregate:()=>x});var i=r(27),s=r(4045),n=r(6875),o=r(5330),c=r(6034),a=r(4329),u=r(2374),h="React",p="Angular",l="AngularJS",d="Backbone",g="Ember",y="Vue",b="Meteor",w="Zepto",S="Jquery";function f(){if(!u.il)return[];var e=[];try{(function(){try{if(window.React||window.ReactDOM||window.ReactRedux)return!0;if(document.querySelector("[data-reactroot], [data-reactid]"))return!0;for(var e=document.querySelectorAll("body > div"),t=0;t<e.length;t++)if(Object.keys(e[t]).indexOf("_reactRootContainer")>=0)return!0;return!1}catch(e){return!1}})()&&e.push(h),function(){try{return!!window.angular||(!!document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]")||!!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))}catch(e){return!1}}()&&e.push(l),function(){try{return!!(window.hasOwnProperty("ng")&&window.ng.hasOwnProperty("coreTokens")&&window.ng.coreTokens.hasOwnProperty("NgZone"))||!!document.querySelectorAll("[ng-version]").length}catch(e){return!1}}()&&e.push(p),window.Backbone&&e.push(d),window.Ember&&e.push(g),window.Vue&&e.push(y),window.Meteor&&e.push(b),window.Zepto&&e.push(w),window.jQuery&&e.push(S)}catch(e){}return e}var m=r(9548),M=r(9226),k=r(1651),R=r(2650),v=r(8544);class x extends o.m{static featureName=c.t9;constructor(e,t){let r;super(e,t,c.t9),(0,s.X)("block-err",(()=>{this.blocked=!0,r&&(r.aborted=!0)}),this.featureName,this.ee),(0,s.X)(c.xS,this.storeSupportabilityMetrics.bind(this),this.featureName,this.ee),(0,s.X)(c.vz,this.storeEventMetrics.bind(this),this.featureName,this.ee),this.singleChecks(),this.eachSessionChecks(),r=new n.o("jserrors",{onUnload:()=>this.unload()},this),r.harvest.on("jserrors",(()=>({body:this.aggregator.take(["cm","sm"])}))),(0,a.L)(this.agentIdentifier,this.featureName)}storeSupportabilityMetrics(e,t){if(this.blocked)return;const r=c.mY,i={name:e};this.aggregator.storeMetric(r,e,i,t)}storeEventMetrics(e,t){if(this.blocked)return;const r=c.gF,i={name:e};this.aggregator.store(r,e,i,t)}singleChecks(){this.storeSupportabilityMetrics("Generic/Version/".concat(k.q4,"/Detected"));const{distMethod:e,loaderType:t}=(0,i.OP)(this.agentIdentifier);t&&this.storeSupportabilityMetrics("Generic/LoaderType/".concat(t,"/Detected")),e&&this.storeSupportabilityMetrics("Generic/DistMethod/".concat(e,"/Detected")),u.il&&(0,R.K)((()=>{f().forEach((e=>{this.storeSupportabilityMetrics("Framework/"+e+"/Detected")}))})),(0,m.V)()&&this.storeSupportabilityMetrics("Generic/FileProtocol/Detected");const r=(0,M.$c)(this.agentIdentifier);r.length>0&&this.storeSupportabilityMetrics("Generic/Obfuscate/Detected"),r.length>0&&!(0,M.Ng)(r)&&this.storeSupportabilityMetrics("Generic/Obfuscate/Invalid")}eachSessionChecks(){u.il&&(0,v.bP)("pageshow",(e=>{e.persisted&&this.storeSupportabilityMetrics("Generic/BFCache/PageRestored")}))}unload(){try{if(this.resourcesSent)return;const e=(0,i.OP)(this.agentIdentifier);this.resourcesSent=!0;const t=["beacon","fetch","xmlhttprequest"],r=["nr-data.net","newrelic.com","nr-local.net","localhost"];function s(e){return t.includes(e.initiatorType)}(performance?.getEntriesByType("resource")||[]).forEach((e=>{var t;t=e,r.some((e=>t.name.indexOf(e)>=0))?s(e)?this.storeSupportabilityMetrics("Generic/Resources/Ajax/Internal"):this.storeSupportabilityMetrics("Generic/Resources/Non-Ajax/Internal"):s(e)?this.storeSupportabilityMetrics("Generic/Resources/Ajax/External"):this.storeSupportabilityMetrics("Generic/Resources/Non-Ajax/External")})),Object.keys(e.bytesSent).forEach((t=>{this.storeSupportabilityMetrics("PageSession/Endpoint/".concat(t.charAt(0).toUpperCase()+t.slice(1),"/BytesSent"),e.bytesSent[t])})),e.ptid&&this.storeSupportabilityMetrics("PageSession/Feature/SessionTrace/DurationMs",Math.round(performance.now()))}catch(n){}}}}}]);
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_Ass52Hs.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_DMs5.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gs6FospT4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gs6VospT4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3_-gs51os.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s6FospT4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s6VospT4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/barlow/v12/7cHqv4kjgoGqM7E3t-4s51os.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlpogwHKFkZgtmSR3NB0oRJfajheK_Zt3Q.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlpogwHKFkZgtmSR3NB0oRJfajhfK_Zt3Q.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlpogwHKFkZgtmSR3NB0oRJfajhRK_Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlprgwHKFkZgtmSR3NB0oRJfajDqDuNd_LV_fg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlprgwHKFkZgtmSR3NB0oRJfajDqDuNc_LV_fg.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Crimson Text';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlprgwHKFkZgtmSR3NB0oRJfajDqDuNS_LU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlp2gwHKFkZgtmSR3NB0oRJfYAhTM_I.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlp2gwHKFkZgtmSR3NB0oRJfYQhTM_I.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlp2gwHKFkZgtmSR3NB0oRJfbwhT.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlppgwHKFkZgtmSR3NB0oRJX1C1GA9NQ5LE.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlppgwHKFkZgtmSR3NB0oRJX1C1GAtNQ5LE.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Crimson Text';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/crimsontext/v19/wlppgwHKFkZgtmSR3NB0oRJX1C1GDNNQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cFrqvyzw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cMrqvyzw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cErqvyzw.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cLrqvyzw.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cHrqvyzw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cGrqvyzw.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBNLg_cIrqs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcFrqvyzw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcMrqvyzw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcErqvyzw.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcLrqvyzw.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcHrqvyzw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcGrqvyzw.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Serif';
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6saw1J5X9T9RW6j9bNfFIMZhhWnFTyNZIQD1-_FXP0RgnaOg9MYBOshPcIrqs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTyscKtq8.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTw8cKtq8.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTy8cKtq8.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTxMcKtq8.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTyMcKtq8.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTyccKtq8.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZ9lCTx8cK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTyscKtq8.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTw8cKtq8.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTy8cKtq8.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTxMcKtq8.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTyMcKtq8.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTyccKtq8.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTx8cK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTyscKtq8.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTw8cKtq8.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTy8cKtq8.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTxMcKtq8.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTyMcKtq8.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTyccKtq8.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 500;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCTx8cK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTyscKtq8.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTw8cKtq8.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTy8cKtq8.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTxMcKtq8.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTyMcKtq8.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTyccKtq8.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1eTx8cK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
