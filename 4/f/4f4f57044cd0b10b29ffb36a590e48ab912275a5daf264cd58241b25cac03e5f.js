"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[862],{6875:(t,e,n)=>{n.d(e,{o:()=>T});var r=n(5673),s=n(9557),i=n(7022),a=n(532),o=n(2438);function u(){return""+location}var h=n(6562),c=n(4917),d=n(2053),l=n(8544),f=n(9226);var v=n(8226),p=n(2374);const g=!!navigator.sendBeacon;class y extends s.w{constructor(t){super(t),this.tooManyRequestsDelay=(0,h.Mt)(this.sharedContext.agentIdentifier,"harvest.tooManyRequestsDelay")||60,this.obfuscator=new f.RR(this.sharedContext),this.getScheme=()=>!1===(0,h.Mt)(this.sharedContext.agentIdentifier,"ssl")?"http":"https",this._events={}}sendX(t,e,n){var s=b(t,e);if(!s)return!1;var i={retry:s.method===r.T.xhr};return this.obfuscator.shouldObfuscate()?this.obfuscateAndSend(t,this.createPayload(t,i),e,s,n):this._send(t,this.createPayload(t,i),e,s,n)}send(t,e,n,r,s){var a=this,o=x(),u=x();e.body&&(0,i.D)(e.body,o),e.qs&&(0,i.D)(e.qs,u);var h={body:o(),qs:u()},c=this.obfuscator.shouldObfuscate()?function(){return a.obfuscateAndSend(...arguments)}:function(){return a._send(...arguments)};return c(t,h,n,r,s)}obfuscateAndSend(t,e,n,r,s){var i=this;return function(t,e,n,r){return t&&"object"==typeof t?(n=n||"string",r=r||[],function t(r){for(var i in r)r.hasOwnProperty(i)&&("object"==typeof r[i]?t(r[i]):typeof r[i]!==n||s(i)||(r[i]=e(r[i])));return r}(t)):t;function s(t){for(var e=!1,n=0;n<r.length;n++)if(r[n]===t){e=!0;break}return e}}(e,(function(){return i.obfuscator.obfuscateString(...arguments)}),"string",["e"]),this._send(t,e,n,r,s)}_send(t,e,n,s,i){var u=(0,h.C5)(this.sharedContext.agentIdentifier);if(!u.errorBeacon)return!1;var c=(0,h.OP)(this.sharedContext.agentIdentifier);if(!e.body)return i&&i({sent:!1}),!1;n||(n={});var d=this.getScheme()+"://"+u.errorBeacon+"/"+t+"/1/"+u.licenseKey+this.baseQueryString();e.qs&&(d+=(0,a.j6)(e.qs,c.maxBytes)),s||(s=b(t,n));var f,v=s.method,g=s.useBody,y=d;g&&"events"===t?f=e.body.e:g?f=(0,o.P)(e.body):y=d+(0,a.j6)(e.body,c.maxBytes);var m=v(y,f,n.unload&&p.v6);i&&v===r.T.xhr&&m.addEventListener("load",(function(){var t={sent:!0};429===this.status?(t.retry=!0,t.delay=this.tooManyRequestsDelay):408!==this.status&&500!==this.status&&503!==this.status||(t.retry=!0),n.needResponse&&(t.responseText=this.responseText),i(t)}),(0,l.m$)(!1));return m||v!==r.T.beacon||(m=(v=r.T.img)(d+(0,a.j6)(e.body,c.maxBytes))),m}baseQueryString(){var t=(0,h.OP)(this.sharedContext.agentIdentifier),e=(0,h.C5)(this.sharedContext.agentIdentifier),n=(0,c.f)(u()),r=this.obfuscator.shouldObfuscate()?this.obfuscator.obfuscateString(n):n;return["?a="+e.applicationID,(0,a.wu)("sa",e.sa?""+e.sa:""),(0,a.wu)("v",v.q),m(e),(0,a.wu)("ct",t.customTransaction),"&rst="+(0,d.z)(),"&ck=0","&s="+(t.sessionId||"0"),(0,a.wu)("ref",r),(0,a.wu)("ptid",t.ptid?""+t.ptid:"")].join("")}createPayload(t,e){for(var n=x(),r=x(),s=this._events[t]&&this._events[t]||[],a=0;a<s.length;a++){var o=s[a](e);o&&(o.body&&(0,i.D)(o.body,n),o.qs&&(0,i.D)(o.qs,r))}return{body:n(),qs:r()}}on(t,e){(this._events[t]||(this._events[t]=[])).push(e)}resetListeners(){(0,i.D)(this._events,(t=>{this._events[t]=[]}))}}function b(t,e){var n,s;return(e=e||{}).needResponse?(s=!0,n=r.T.xhr):e.unload&&p.il?(s=g,n=g?r.T.beacon:r.T.img):(s=!0,n=r.T.xhr),{method:n,useBody:s}}function m(t){return t.transactionName?(0,a.wu)("to",t.transactionName):(0,a.wu)("t",t.tNamePlain||"Unnamed Transaction")}function x(){var t={},e=!1;return function(n,r){if(r&&r.length&&(t[n]=r,e=!0),e)return t}}var w=n(2545);class T extends s.w{constructor(t,e,n){super(n),this.endpoint=t,this.opts=e||{},this.started=!1,this.timeoutHandle=null,this.aborted=!1,this.harvest=new y(this.sharedContext),(0,w.L)((()=>{this.aborted||(this.opts.onUnload&&this.opts.onUnload(),this.runHarvest({unload:!0}))}),(0,h.Mt)(this.sharedContext.agentIdentifier,"allow_bfcache"))}startTimer(t,e){this.interval=t,this.started=!0,this.scheduleHarvest(null!=e?e:this.interval)}stopTimer(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.aborted=t,this.started=!1,this.timeoutHandle&&clearTimeout(this.timeoutHandle)}scheduleHarvest(t,e){if(!this.timeoutHandle){var n=this;null==t&&(t=this.interval),this.timeoutHandle=setTimeout((()=>{n.timeoutHandle=null,n.runHarvest(e)}),1e3*t)}}runHarvest(t){if(this.aborted);else{var e=this;if(this.opts.getPayload){var n=b(this.endpoint,t);if(!n)return!1;var s=n.method===r.T.xhr,i=this.opts.getPayload({retry:s});if(i){i="[object Array]"===Object.prototype.toString.call(i)?i:[i];for(var a=0;a<i.length;a++)this.harvest.send(this.endpoint,i[a],t,n,o)}}else{const e=t?.unload?void 0:o;this.harvest.sendX(this.endpoint,t,e)}this.started&&this.scheduleHarvest()}function o(n){n.blocked?e.onHarvestBlocked(t,n):e.onHarvestFinished(t,n)}}onHarvestFinished(t,e){if(this.opts.onFinished&&this.opts.onFinished(e),e.sent&&e.retry){var n=e.delay||this.opts.retryDelay;this.started&&n?(clearTimeout(this.timeoutHandle),this.timeoutHandle=null,this.scheduleHarvest(n,t)):!this.started&&n&&this.scheduleHarvest(n,t)}}}},4917:(t,e,n)=>{n.d(e,{f:()=>i});var r=/([^?#]*)[^#]*(#[^?]*|$).*/,s=/([^?#]*)().*/;function i(t,e){return t.replace(e?r:s,"$1$2")}},532:(t,e,n)=>{n.d(e,{j6:()=>d,nI:()=>c,wu:()=>l});var r=n(7022),s=n(2438),i={"%2C":",","%3A":":","%2F":"/","%40":"@","%24":"$","%3B":";"},a=(0,r.D)(i,(function(t){return t})),o=new RegExp(a.join("|"),"g");function u(t){return i[t]}function h(t){return null==t?"null":encodeURIComponent(t).replace(o,u)}function c(t,e){for(var n=0,r=0;r<t.length;r++)if((n+=t[r].length)>e)return t.slice(0,r).join("");return t.join("")}function d(t,e){var n=0,i="";return(0,r.D)(t,(function(t,r){var a,o,u=[];if("string"==typeof r)a="&"+t+"="+h(r),n+=a.length,i+=a;else if(r.length){for(n+=9,o=0;o<r.length&&(a=h((0,s.P)(r[o])),n+=a.length,!(void 0!==e&&n>=e));o++)u.push(a);i+="&"+t+"=%5B"+u.join(",")+"%5D"}})),i}function l(t,e){return e&&"string"==typeof e?"&"+t+"="+h(e):""}},9548:(t,e,n)=>{n.d(e,{T:()=>s});var r=n(2374);const s={isFileProtocol:function(){let t=Boolean("file:"===(0,r.lW)()?.location?.protocol);t&&(s.supportabilityMetricSent=!0);return t},supportabilityMetricSent:!1}},9226:(t,e,n)=>{n.d(e,{$c:()=>h,Ng:()=>c,RR:()=>u});var r=n(6562),s=n(9557),i=n(9548),a=n(8610),o={regex:/^file:\/\/(.*)/,replacement:"file://OBFUSCATED"};class u extends s.w{constructor(t){super(t)}shouldObfuscate(){return h(this.sharedContext.agentIdentifier).length>0}obfuscateString(t){if(!t||"string"!=typeof t)return t;for(var e=h(this.sharedContext.agentIdentifier),n=t,r=0;r<e.length;r++){var s=e[r].regex,i=e[r].replacement||"*";n=n.replace(s,i)}return n}}function h(t){var e=[],n=(0,r.Mt)(t,"obfuscate")||[];return e=e.concat(n),i.T.isFileProtocol()&&e.push(o),e}function c(t){for(var e=!1,n=!1,r=0;r<t.length;r++){"regex"in t[r]?"string"!=typeof t[r].regex&&t[r].regex.constructor!==RegExp&&((0,a.Z)('An obfuscation replacement rule contains a "regex" value with an invalid type (must be a string or RegExp)'),n=!0):((0,a.Z)('An obfuscation replacement rule was detected missing a "regex" value.'),n=!0);var s=t[r].replacement;s&&"string"!=typeof s&&((0,a.Z)('An obfuscation replacement rule contains a "replacement" value with an invalid type (must be a string)'),e=!0)}return!e&&!n}},5673:(t,e,n)=>{n.d(e,{T:()=>s});var r=n(2374);const s={jsonp:function(t,e){try{if(!r.v6){var n=document.createElement("script");n.type="text/javascript",n.src=t+"&jsonp="+e;var i=document.getElementsByTagName("script")[0];return i.parentNode.insertBefore(n,i),n}try{return importScripts(t+"&jsonp="+e)}catch(n){return s.xhrGet(t+"&jsonp="+e),!1}}catch(t){}},xhrGet:function(t){return s.xhr(t,void 0,!1,"GET")},xhr:function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"POST";var s=new XMLHttpRequest;s.open(r,t,!n);try{"withCredentials"in s&&(s.withCredentials=!0)}catch(t){}return s.setRequestHeader("content-type","text/plain"),s.send(e),s},img:function(t){var e=new Image;return e.src=t,e},beacon:function(t,e){return window.navigator.sendBeacon.bind(navigator)(t,e)}}},5330:(t,e,n)=>{n.d(e,{m:()=>s});var r=n(1509);class s extends r.W{constructor(t,e,n){super(t,e,n)}}}}]);