"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[898],{4231:(t,e,n)=>{n.d(e,{R:()=>a,z:()=>i});var r=[];function i(t){if(0===r.length)return!0;if(void 0===t.hostname)return!1;for(var e=0;e<r.length;e++){var n=r[e];if("*"===n.hostname)return!1;if(s(n.hostname,t.hostname)&&o(n.pathname,t.pathname))return!1}return!0}function a(t){if(r=[],t&&t.length)for(var e=0;e<t.length;e++){var n=t[e];0===n.indexOf("http://")?n=n.substring(7):0===n.indexOf("https://")&&(n=n.substring(8));var i=n.indexOf("/");i>0?r.push({hostname:n.substring(0,i),pathname:n.substring(i)}):r.push({hostname:n,pathname:""})}}function s(t,e){return!(t.length>e.length)&&e.indexOf(t)===e.length-t.length}function o(t,e){return 0===t.indexOf("/")&&(t=t.substring(1)),0===e.indexOf("/")&&(e=e.substring(1)),""===t||t===e}},7826:(t,e,n)=>{n.d(e,{AG:()=>u,FX:()=>d,n1:()=>c,uR:()=>h});var r=n(7022),i=n(2438),a=n(9226),s=Object.prototype.hasOwnProperty,o=64;function u(t,e,n){return t||0===t||""===t?e(t)+(n?",":""):"!"}function h(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function d(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},n=0;return function(r){if(void 0===r||""===r)return"";var i=new a.RR({agentIdentifier:t});r=String(r),i.shouldObfuscate()&&(r=i.obfuscateString(r));return s.call(e,r)?h(e[r],!0):(e[r]=n++,function(t){return"'"+t.replace(f,"\\$1")}(r))}}function c(t,e){var n=[];return(0,r.D)(t,(function(t,r){if(!(n.length>=o)){var a,s=5;switch(t=e(t),typeof r){case"object":r?a=e((0,i.P)(r)):s=9;break;case"number":s=6,a=r%1?r:r+".";break;case"boolean":s=r?7:8;break;case"undefined":s=9;break;default:a=e(r)}n.push([s,t+(a?","+a:"")])}})),n}var f=/([,\\;])/g},960:(t,e,n)=>{n.r(e),n.d(e,{Aggregate:()=>v});var r,i,a,s=n(4045),o=n(2438),u=n(7826),h=n(9252),d=n(6562),c=n(6668),f=n(4231),l=n(5330),p=n(8675),g=n(4329),m=n(2325);class v extends l.m{constructor(t,e){super(t,e,p.t);let n,r=[],i={},a=[];const l=this.ee,v=(0,d.Mt)(t,"ajax.harvestTimeSeconds")||10,b=(0,d.Mt)(t,"ajax.maxPayloadSize")||1e6;function y(n,a,s,u,c){var p;if(a.time=s,p=n.cat?(0,o.P)([n.status,n.cat]):(0,o.P)([n.status,n.host,n.pathname]),(0,h.p)("bstXhrAgg",["xhr",p,n,a],void 0,m.D.sessionTrace,l),e.store("xhr",p,n,a),R())if((0,f.z)(n)){var g=this,v={method:n.method,status:n.status,domain:n.host,path:n.pathname,requestSize:a.txSize,responseSize:a.rxSize,type:c,startTime:s,endTime:u,callbackDuration:a.cbTime};if(g.dt&&(v.spanId=g.dt.spanId,v.traceId=g.dt.traceId,v.spanTimestamp=g.dt.timestamp),this.spaNode){var b=this.spaNode.interaction.id;i[b]=i[b]||[],i[b].push(v)}else r.push(v)}else n.hostname===(0,d.C5)(t).errorBeacon?(0,h.p)("record-supportability",["Ajax/Events/Excluded/Agent"],void 0,m.D.metrics,l):(0,h.p)("record-supportability",["Ajax/Events/Excluded/App"],void 0,m.D.metrics,l)}function S(t){if(t=t||{},0===r.length)return null;for(var e=x(r,t.maxPayloadSize||b),n=[],i=0;i<e.length;i++)n.push({body:{e:e[i]}});return t.retry&&(a=r.slice()),r=[],n}function x(t,e,n){n=n||1;for(var r=[],i=function(t,e){e=e||t.length;for(var n=[],r=0,i=t.length;r<i;r+=e)n.push(new j(t.slice(r,r+e)));return n}(t,t.length/n),a=!1,s=0;s<i.length;s++){var o=i[s];if(o.tooBig(e)){if(1!==o.events.length){a=!0;break}}else r.push(o.payload)}return a?x(t,e,++n):r}function j(e){this.addString=(0,u.FX)(t),this.events=e,this.payload="bel.7;";for(var n=0;n<e.length;n++){var r=e[n],i=[(0,u.uR)(r.startTime),(0,u.uR)(r.endTime-r.startTime),(0,u.uR)(0),(0,u.uR)(0),this.addString(r.method),(0,u.uR)(r.status),this.addString(r.domain),this.addString(r.path),(0,u.uR)(r.requestSize),(0,u.uR)(r.responseSize),"fetch"===r.type?1:"",this.addString(0),(0,u.AG)(r.spanId,this.addString,!0)+(0,u.AG)(r.traceId,this.addString,!0)+(0,u.AG)(r.spanTimestamp,u.uR,!1)],a="2,",s=(0,u.n1)((0,d.C5)(t).jsAttributes||{},this.addString);i.unshift((0,u.uR)(s.length)),a+=i.join(","),s&&s.length>0&&(a+=";"+s.join(";")),n+1<e.length&&(a+=";"),this.payload+=a}this.tooBig=function(t){return t=t||b,2*this.payload.length>t}}function R(){return!1!==(0,d.Mt)(t,"ajax.enabled")}this.storeXhr=y,this.prepareHarvest=S,this.getStoredEvents=function(){return{ajaxEvents:r,spaAjaxEvents:i}},l.on("interactionSaved",(t=>{i[t.id]&&delete i[t.id]})),l.on("interactionDiscarded",(t=>{i[t.id]&&R()&&(i[t.id].forEach((function(t){r.push(t)})),delete i[t.id])})),R()&&(0,f.R)((0,d.Mt)(t,"ajax.deny_list")),(0,s.X)("xhr",y,this.featureName,this.ee),R()&&(n=new c.o("events",{onFinished:function(t){t.retry&&a.length>0&&R()&&(r=r.concat(a),a=[])},getPayload:S},this),l.on("drain-".concat(this.featureName),(()=>{n.startTimer(v)}))),(0,g.L)(this.agentIdentifier,this.featureName)}}r=v,i="featureName",a=p.t,(i=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a},8675:(t,e,n)=>{n.d(e,{t:()=>r});const r=n(2325).D.ajax}}]);n-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-before:var(--swiper-centered-offset-before);margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border-radius:50%;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-top:4px solid transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s linear infinite}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}#nprogress{pointer-events:none}#nprogress .bar{background:var(--color-theme);position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;transform:rotate(3deg) translateY(-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border-bottom:2px solid transparent;border-right:2px solid transparent;border-top:2px solid transparent;border-top-color:var(--color-theme);border-left:2px solid transparent;border-left-color:var(--color-theme);border-radius:50%;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}