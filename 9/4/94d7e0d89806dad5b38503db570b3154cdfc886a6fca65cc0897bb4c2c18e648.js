"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[244],{6432:(e,r,t)=>{function n(e,r,t){var n=0;for(void 0===t&&(t=e[0],n=1);n<e.length;n++)t=r(t,e[n]);return t}t.d(r,{u:()=>n})},8244:(e,r,t)=>{t.r(r),t.d(r,{Aggregate:()=>j});var n=/([a-z0-9]+)$/i;function a(e){if(e){var r=e.match(n);return r?r[1]:void 0}}var i=t(6621),s=t(6432),o=/^\n+|\n+$/g;function c(e){return function(e){var r;if(e.length>100){var t=e.length-100;r=e.slice(0,50).join("\n"),r+="\n< ...truncated "+t+" lines... >\n",r+=e.slice(-50).join("\n")}else r=e.join("\n");return r}(e).replace(o,"")}var h=!1,u=/function (.+?)\s*\(/,d=/^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i,l=/^\s*(?:(\S*|global code)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i,g=/^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i,f=/^\s*at Function code \(Function code:\d+:\d+\)\s*/i;function m(e){var r=null;try{if(r=function(e){if(!e.stack)return null;var r=(0,s.u)(e.stack.split("\n"),v,{frames:[],stackLines:[],wrapperSeen:!1});return r.frames.length?{mode:"stack",name:e.name||p(e),message:e.message,stackString:c(r.stackLines),frames:r.frames}:null}(e),r)return r}catch(e){h}try{if(r=function(e){if(!("line"in e))return null;var r=e.name||p(e);if(!e.sourceURL)return{mode:"sourceline",name:r,message:e.message,stackString:p(e)+": "+e.message+"\n    in evaluated code",frames:[{func:"evaluated code"}]};var t=r+": "+e.message+"\n    at "+e.sourceURL;e.line&&(t+=":"+e.line,e.column&&(t+=":"+e.column));return{mode:"sourceline",name:r,message:e.message,stackString:t,frames:[{url:e.sourceURL,line:e.line,column:e.column}]}}(e),r)return r}catch(e){h}try{if(r=function(e){var r=e.name||p(e);return r?{mode:"nameonly",name:r,message:e.message,stackString:r+": "+e.message,frames:[]}:null}(e),r)return r}catch(e){h}return{mode:"failed",stackString:"",frames:[]}}function v(e,r){var t,n=function(e){var r=e.match(l);r||(r=e.match(d));if(r)return{url:r[2],func:"Anonymous function"!==r[1]&&"global code"!==r[1]&&r[1]||null,line:+r[3],column:r[4]?+r[4]:null};if(e.match(g)||e.match(f)||"anonymous"===e)return{func:"evaluated code"}}(r);return n?((t=n.func)&&t.indexOf("nrWrapper")>=0?e.wrapperSeen=!0:e.stackLines.push(r),e.wrapperSeen||e.frames.push(n),e):(e.stackLines.push(r),e)}function p(e){var r=u.exec(String(e.constructor));return r&&r.length>1?r[1]:"unknown"}function k(e){var r=0;if(!e||!e.length)return r;for(var t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return r}var S=t(4539),I=t(5569),b=t(5277),_=t(3195),y=t(9599),C=t(5970),P=t(9206),w=t(8438),R=t(8025);class j extends R.W{constructor(e,r){var t;super(e,r),t=this;if((0,C.OP)(this.agentIdentifier).features.err){this.stackReported={},this.pageviewReported={},this.errorCache={},this.currentBody,this.errorOnPage=!1,this.ee.on("interactionSaved",(e=>this.onInteractionSaved(e))),this.ee.on("interactionDiscarded",(e=>this.onInteractionDiscarded(e))),(0,S.X)("err",(function(){return t.storeError(...arguments)}),void 0,this.ee),(0,S.X)("ierr",(function(){return t.storeError(...arguments)}),void 0,this.ee);var n=(0,C.Mt)(this.agentIdentifier,"jserrors.harvestTimeSeconds")||10;this.scheduler=new I.o("jserrors",{onFinished:function(){return t.onHarvestFinished(...arguments)}},this),this.scheduler.harvest.on("jserrors",(function(){return t.onHarvestStarted(...arguments)})),this.scheduler.startTimer(n),this.ee.on("block-err",(()=>{this.blocked=!0,this.scheduler.harvest.stopTimer()}))}}onHarvestStarted(e){var r=this.aggregator.take(["err","ierr"]);e.retry&&(this.currentBody=r);var t={body:r,qs:{}},n=(0,b.P)((0,C.OP)(this.agentIdentifier).releaseIds);return"{}"!==n&&(t.qs.ri=n),r&&r.err&&r.err.length&&!this.errorOnPage&&(t.qs.pve="1",this.errorOnPage=!0),t}onHarvestFinished(e){e.retry&&this.currentBody&&((0,y.D)(this.currentBody,((e,r)=>{for(var t=0;t<r.length;t++){var n=r[t],a=this.getBucketName(n.params,n.custom);this.aggregator.merge(e,a,n.metrics,n.params,n.custom)}})),this.currentBody=null)}nameHash(e){return k(`${e.exceptionClass}_${e.message}_${e.stack_trace||e.browser_stack_hash}`)}getBucketName(e,r){return this.nameHash(e)+":"+k((0,b.P)(r))}canonicalizeURL(e,r){if("string"!=typeof e)return"";var t=(0,i.f)(e);return t===r?"<inline>":t}buildCanonicalStackString(e,r){for(var t="",n=0;n<e.frames.length;n++){var i=e.frames[n],s=a(i.func);t&&(t+="\n"),s&&(t+=s+"@"),"string"==typeof i.url&&(t+=i.url),i.line&&(t+=":"+i.line)}return t}canonicalizeStackURLs(e){for(var r=(0,i.f)((0,C.OP)(this.agentIdentifier).origin),t=0;t<e.frames.length;t++){var n=e.frames[t],a=n.url,s=this.canonicalizeURL(a,r);s&&s!==n.url&&(n.url=s,e.stackString=e.stackString.split(a).join(s))}return e}storeError(e,r,t,n){if(r=r||(0,P.zO)(),t||!(0,C.OP)(this.agentIdentifier).onerror||!(0,C.OP)(this.agentIdentifier).onerror(e)){var a=this.canonicalizeStackURLs(m(e)),i={stackHash:k(this.buildCanonicalStackString(a)),exceptionClass:a.name,request_uri:w.ZP?.location.pathname};a.message&&(i.message=""+a.message);var s,o=k(`${a.name}_${a.message}_${a.stackString}`);this.stackReported[o]?i.browser_stack_hash=k(a.stackString):(this.stackReported[o]=!0,i.stack_trace=(s=a.stackString).length>65530?s.substr(0,65530):s),i.releaseIds=(0,b.P)((0,C.OP)(this.agentIdentifier).releaseIds),this.pageviewReported[o]||(i.pageview=1,this.pageviewReported[o]=!0);var c=t?"ierr":"err",h={time:r};if((0,_.p)("errorAgg",[c,o,i,h],void 0,void 0,this.ee),!this.blocked)if(null!=i._interactionId)this.errorCache[i._interactionId]=this.errorCache[i._interactionId]||[],this.errorCache[i._interactionId].push([c,o,i,h,d,n]);else{var u={},d=(0,C.C5)(this.agentIdentifier).jsAttributes;(0,y.D)(d,g),n&&(0,y.D)(n,g);var l=o+":"+k((0,b.P)(u));this.aggregator.store(c,l,i,h,u)}}function g(e,r){u[e]=r&&"object"==typeof r?(0,b.P)(r):r}}onInteractionSaved(e){this.errorCache[e.id]&&!this.blocked&&(this.errorCache[e.id].forEach((r=>{var t={},n=r[4],a=r[5];(0,y.D)(n,o),(0,y.D)(e.root.attrs.custom,o),(0,y.D)(a,o);var i=r[2];i.browserInteractionId=e.root.attrs.id,delete i._interactionId,i._interactionNodeId&&(i.parentNodeId=i._interactionNodeId.toString(),delete i._interactionNodeId);var s=r[1]+e.root.attrs.id+":"+k((0,b.P)(t));function o(e,r){t[e]=r&&"object"==typeof r?(0,b.P)(r):r}this.aggregator.store(r[0],s,i,r[3],t)})),delete this.errorCache[e.id])}onInteractionDiscarded(e){this.errorCache&&this.errorCache[e.id]&&!this.blocked&&(this.errorCache[e.id].forEach((r=>{var t={},n=r[4],a=r[5];(0,y.D)(n,o),(0,y.D)(e.root.attrs.custom,o),(0,y.D)(a,o);var i=r[2];delete i._interactionId,delete i._interactionNodeId;var s=r[1]+":"+k((0,b.P)(t));function o(e,r){t[e]=r&&"object"==typeof r?(0,b.P)(r):r}this.aggregator.store(r[0],s,r[2],r[3],t)})),delete this.errorCache[e.id])}}}}]);