"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[785],{7826:(e,t,i)=>{i.d(t,{AG:()=>l,FX:()=>c,n1:()=>o,uR:()=>h});var s=i(7022),n=i(2438),r=i(9226),a=Object.prototype.hasOwnProperty;ction o(e,t){var i=[];return(0,s.D)(e,(function(e,s){if(!(i.length>=64)){var r,a=5;switch(e=t(e),typeof s){case"object":s?r=t((0,n.P)(s)):a=9;break;case"number":a=6,r=s%1?s:s+".";break;case"boolean":a=s?7:8;break;case"undefined":a=9;break;default:r=t(s)}i.push([a,e+(r?","+r:"")])}})),i}var d=/([,\\;])/g},8785:(e,t,i)=>{i.r(t),i.d(t,{Aggregate:);var s,n,r,a=i(7826),l=(i(2053),i(7022)),h=i(8343),c=i(4045),o=i(4917),d=i(9252),u=i(6562),p=i(5330),m=i(6382),g=i(4329),f=i(2325),v=i(2374);class S extends p.m{constructor(e,t){var i;if(super(e,t,m.t),i=this,v.il){this.timings=[],this.timingsSent=[],this.lcpRecorded=!1,this.lcp=null,this.clsSupported=!1,this.cls=0,this.clsSession={value:0,firstEntryTime:0,lastEntryTime:0},this.curSessEndRecorded=!1;try{this.clsSupported=PerformanceObserver.supportedEntryTypes.includes("layout-shift")}catch(e){}var s=(0,u.Mt)(this.agentIdentifier,"page_view_timing.maxLCPTimeSeconds")||60,n=(0,u.Mt)(this.agentIdentifier,"page_view_timing.initialHarvestSeconds")||10,r=(0,u.Mt)(this.agentIdentifier,"page_view_timing.harvestTimeSeconds")||30;this.scheduler=new h.o("events",{onFinished:function(){return i.onHarvestFinished(...arguments)},getPayload:function(){return i.prepareHarvest(...arguments)},onUnload:,this),(0,c.X)("timing",(function(){return i.processTiming(...arguments)}),this.featureName,this.ee),(0,c.X)("lcp",(function(){return i.updateLatestLcp(...arguments)}),this.featureName,this.ee),(0,c.X)("cls",(function(){return i.updateClsScore(...arguments)}),this.featureName,this.ee),(0,c.X)("docHidden",(e=>this.endCurrentSession(e)),this.featureName,this.ee),(0,c.X)("winPagehide",(,this.featureName,this.ee),setTimeout((,1e3*s),this.ee.on(`drain-${this.featureName}`,(),(0,g.L)(this.agentIdentifier,this.featureName)}}stFinished(e){if(e.retry&&this.timingsSent.length>0){for(var t=0;t<this.timingsSent.length;t++)this.timings.push(this.timingsSent[t]);this.timingsSent=[]}}appendGlobalCustomAttributes(e){var t=e.attrs||{},i=(0,u.C5)(this.agentIdentifier).jsAttributes||{},s=["size","eid","cls","type","fid","elTag","elUrl","net-type","net-etype","net-rtt","net-dlink"];(0,l.D)(i,(function(e,i){s.indexOf(e)<0&&(t[e]=i)}))}prepareHarvest(e){if(0!==this.timings.length){var t=this.getPayload(this.timings);if(e.retry)for(var i=0;i<this.timings.length;i++)this.timingsSent.push(this.timings[i]);return this.timings=[],{body:{e:t}}}}getPayload(e){for(var t=(0,a.FX)(this.agentIdentifier),i="bel.6;",s=0;s<e.length;s++){var n=e[s];i+="e,",i+=t(n.name)+",",i+=(0,a.AG)(n.value,a.uR,!1)+",",this.appendGlobalCustomAttributes(n);var r=(0,a.n1)(n.attrs,t);r&&r.length>0&&(i+=(0,a.uR)(r.length)+";"+r.join(";")),s+1<e.length&&(i+=";")}return i}}s=S,n="featureName",r=m.t,n in s?Object.defineProperty(s,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[n]=r}}]);