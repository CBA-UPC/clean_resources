"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[78],{6817:(e,t,i)=>{i.r(t),i.d(t,{Aggregate:()=>f});var n=i(7022),s=i(2438),r=i(4045),a=i(6875),h=i(4917),o=i(27),c=i(5330),d=i(6486),u=i(4329),v=i(2374);class f extends c.m{static featureName=d.t;constructor(e,t){var i;super(e,t,d.t),i=this,this.eventsPerMinute=240,this.harvestTimeSeconds=(0,o.Mt)(this.agentIdentifier,"page_action.harvestTimeSeconds")||(0,o.Mt)(this.agentIdentifier,"ins.harvestTimeSeconds")||30,this.eventsPerHarvest=this.eventsPerMinute*this.harvestTimeSeconds/60,this.referrerUrl,this.currentEvents,this.events=[],this.att=(0,o.C5)(this.agentIdentifier).jsAttributes,v.il&&document.referrer&&(this.referrerUrl=(0,h.f)(document.referrer)),(0,r.X)("api-addPageAction",(function(){return i.addPageAction(...arguments)}),this.featureName,this.ee);var n=new a.o("ins",{onFinished:function(){return i.onHarvestFinished(...arguments)}},this);n.harvest.on("ins",(function(){return i.onHarvestStarted(...arguments)})),this.ee.on("drain-".concat(this.featureName),(()=>{this.blocked||n.startTimer(this.harvestTimeSeconds,0)})),(0,r.X)("block-ins",(()=>{this.blocked=!0,n.stopTimer(!0)}),this.featureName,this.ee),(0,u.L)(this.agentIdentifier,this.featureName)}onHarvestStarted(e){const{userAttributes:t,atts:i}=(0,o.C5)(this.agentIdentifier);var n={qs:{ua:t,at:i},body:{ins:this.events}};return e.retry&&(this.currentEvents=this.events),this.events=[],n}onHarvestFinished(e){e&&e.sent&&e.retry&&this.currentEvents&&(this.events=this.events.concat(this.currentEvents),this.currentEvents=null)}addPageAction(e,t,i){if(!(this.events.length>=this.eventsPerHarvest||this.blocked)){var r,a,c={};v.il&&window.document.documentElement&&(r=window.document.documentElement.clientWidth,a=window.document.documentElement.clientHeight);var d={timestamp:e+(0,o.OP)(this.agentIdentifier).offset,timeSinceLoad:e/1e3,browserWidth:r,browserHeight:a,referrerUrl:this.referrerUrl,currentUrl:(0,h.f)(""+location),pageUrl:(0,h.f)((0,o.OP)(this.agentIdentifier).origin),eventType:"PageAction"};(0,n.D)(d,u),(0,n.D)((0,o.C5)(this.agentIdentifier).jsAttributes,u),i&&"object"==typeof i&&(0,n.D)(i,u),c.actionName=t||"",this.events.push(c)}function u(e,t){c[e]=t&&"object"==typeof t?(0,s.P)(t):t}}}},6486:(e,t,i)=>{i.d(t,{t:()=>n});const n=i(2325).D.pageAction}}]);