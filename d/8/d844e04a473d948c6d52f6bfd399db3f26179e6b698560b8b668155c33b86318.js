/*! For license information please see 46.41c7ecb5a774a7119bc5.chunk.v7.js.LICENSE.txt */
(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[46],{"+iSp":function(n,e,t){"use strict";(function(n){var r;t.d(e,"a",(function(){return C}));var i="undefined",o="prototype",c="function",a="_dynClass",u="_unknown_",s=Object,f=s.getPrototypeOf,l=s.getOwnPropertyNames,d=function(){var e;return typeof globalThis!==i&&(e=globalThis),e||typeof self===i||(e=self),e||typeof window===i||(e=window),e||typeof n===i||(e=n),e||{}}(),v=d.__dynProto$Gbl||(d.__dynProto$Gbl={o:(r={},r.setInstFuncs=!0,r.useBaseInst=!0,r),n:1e3});function b(n,e){return n&&s.prototype.hasOwnProperty.call(n,e)}function p(n){return n&&(n===s.prototype||n===Array.prototype)}function y(n){return p(n)||n===Function.prototype}function h(n){var e;if(n){if(f)return f(n);var t=n.__proto__||n.prototype||(n.constructor?n.constructor.prototype:null);e=n._dyn__proto__||t,b(n,"_dyn__proto__")||(delete n._dynInstProto,e=n._dyn__proto__=n._dynInstProto||n._dyn__proto__,n._dynInstProto=t)}return e}function O(n,e){var t=[];if(l)t=l(n);else for(var r in n)"string"==typeof r&&b(n,r)&&t.push(r);if(t&&t.length>0)for(var i=0;i<t.length;i++)e(t[i])}function j(n,e,t){return"constructor"!==e&&typeof n[e]===c&&(t||b(n,e))}function g(n){throw new TypeError("DynamicProto: "+n)}function m(n,e){for(var t=n.length-1;t>=0;t--)if(n[t]===e)return!0;return!1}function _(n,e,t,r){var i=null;if(n&&b(t,a)){var o=n._dynInstFuncs||{};if((i=(o[t._dynClass]||{})[e])||g("Missing ["+e+"] "+c),!i._dynInstChk&&!1!==o._dynInstChk){for(var u=!b(n,e),s=h(n),f=[];u&&s&&!y(s)&&!m(f,s);){var l=s[e];if(l){u=l===r;break}f.push(s),s=h(s)}try{u&&(n[e]=i),i._dynInstChk=1}catch(n){o._dynInstChk=!1}}}return i}function k(n,e,t){var r=e[n];return r===t&&(r=h(e)[n]),typeof r!==c&&g("["+n+"] is not a "+c),r}function w(n,e){return b(n,o)?n.name||e||u:((n||{}).constructor||{}).name||e||u}function C(n,e,t,r){b(n,o)||g("theClass is an invalid class definition.");var i=n.prototype;(function(n,e){if(f){for(var t=[],r=h(e);r&&!y(r)&&!m(t,r);){if(r===n)return!0;t.push(r),r=h(r)}return!1}return!0})(i,e)||g("["+w(n)+"] not in hierarchy of ["+w(e)+"]");var c=null;b(i,a)?c=i._dynClass:(c="_dynCls$"+w(n,"_")+"$"+v.n,v.n++,i._dynClass=c);var u=C._dfOpts,s=!!u.useBaseInst;s&&r&&void 0!==r.useBaseInst&&(s=!!r.useBaseInst);var l=function(n){var e={};return O(n,(function(t){!e[t]&&j(n,t,!1)&&(e[t]=n[t])})),e}(e);t(e,function(n,e,t,r){function i(n,e,t){var i=e[t];if(i._isDynProxy&&r){var o=n._dynInstFuncs||{};!1!==o._dynInstChk&&(i=(o[e._dynClass]||{})[t]||i)}return function(){return i.apply(n,arguments)}}var o={};O(t,(function(n){o[n]=i(e,t,n)}));for(var c=h(n),a=[];c&&!y(c)&&!m(a,c);)O(c,(function(n){!o[n]&&j(c,n,!f)&&(o[n]=i(e,c,n))})),a.push(c),c=h(c);return o}(i,e,l,s));var d=!!f&&!!u.setInstFuncs;d&&r&&(d=!!r.setInstFuncs),function(n,e,t,r,i){if(!p(n)){var o=t._dynInstFuncs=t._dynInstFuncs||{},c=o[e]=o[e]||{};!1!==o._dynInstChk&&(o._dynInstChk=!!i),O(t,(function(e){j(t,e,!1)&&t[e]!==r[e]&&(c[e]=t[e],delete t[e],(!b(n,e)||n[e]&&!n[e]._isDynProxy)&&(n[e]=function(n,e){var t=function(){return(_(this,e,n,t)||k(e,n,t)).apply(this,arguments)};return t._isDynProxy=1,t}(n,e)))}))}}(i,c,e,l,!1!==d)}C._dfOpts=v.o}).call(this,t("pCvA"))},"4zqP":"8we3":H2kl:function(n,e,t){"use strict";var r=t("f2uY"),i=t("gpMS"),o=t("uVT5"),c=t("xtQ9"),a=t("bus9"),u=t("e+ll"),s=t("UMqo"),f=t("uGiy"),l=t("I4e3"),d=t("kSKj"),v=t("4umN"),b=t("Coqi");function p(n,e,t){e&&Object(a.k)(e)&&e[f.x]>0&&(e=e.sort((),Object(a.a)(e,(function(n){n[d.n]<500&&Object(a.L)("Channel has invalid priority - "+n[f.q])})),n[f.H]({queue:Object(a.B)(e),chain:Object(v.d)(e,t[f.e],t)}))}var y=t("4ISL"),h=t("r+7v"),O=t("m8Ow"),j=t("Yf3j").a),g=t("BeTY"),m="Plugins must provide initialize method",_="SDK is still unloading...",k={loggingLevelConsole:1};r S=function(){function n(){var e,t,i,u,S,I,T,x,P,E,K,R,M,B,A,q,H,z,D,L,F=0;Object(s.a)(n,this,(function(n){unction U(){return Object(v.a)(G(),e,n)}function N(t){var r=function(n,e,t){var r,i=[],c={};return Object(a.a)(t,(function(e){(Object(a.q)(e)||Object(a.q)(e[f.s]))&&Object(a.L)(m);var t=e[d.n],r=e[f.q];e&&t&&(Object(a.q)(c[t])?c[t]=r:Object(o.d)(n,"Two extensions have same priority #"+t+" - "+c[t]+", "+r)),(!t||t<500)&&i[f.H](e)})),(r={all:t})[d.b]=i,r}(n[f.z],0,P);E=r[d.b],x=null;var i=r.all;if(M=Object(a.B)(function(n,e,t){var r=[];if(n&&Object(a.a)(n,(),e){var i=[];Object(a.a)(e,(),p(r,i,t)}return r}(R,i,n)),K){var c=Object(a.b)(i,K);-1!==c&&i[f.O](c,1),-1!==(c=Object(a.b)(E,K))&&E[f.O](c,1),K._setQueue(M)}else K=function(n,e){unction r(n,e,t,r){var i=n?n[f.x]+1:1;>0&&Object(a.a)(n,(function(n){if(n&&n.queue[f.x]>0){var r=e[f.g](n.chain);r[f.F](o),t(r)}else i--})),o()}var i=!1;return{identifier:"ChannelControllerPlugin",priority:500,initialize:isInitialized:function(){return i},processTelemetry:update:pause:function(){r(n,t(),(function(n){n.iterate((function(n){n.pause&&n.pause()}))}),null)},resume:teardown:getChannel:flush:_setQueue:function(e){n=e}}}(M,n);i[f.H](K),E[f.H](K),n[f.db]=Object(b.d)(i),K[f.s](e,n,i),Object(b.c)(U(),i),n[f.db]=Object(a.B)(Object(b.d)(E||[])).slice(),t&&function(e){var t=Object(v.c)(G(),n);n._updateHook&&!0===n._updateHook(t,e)||t[f.G](e)}(t)}nction X(t,r,i){if(t&&t[f.x]>0){var o=Object(v.d)(t,e,n),c=Object(v.b)(o,n);c[f.F]((function(){var n=!1,e=[];Object(a.a)(P,(),P=e;var r=[];R&&(Object(a.a)(R,(),R=r),i&&i(n)})),c[f.G](r)}else i(!1)}function V(){var t=n[f.z]?n[f.z].queue:[];t&&(Object(a.a)(t,(),t[f.x]=0)}unction $(e){var t=n[f.z];t?Object(o.c)(t,2,73,e):Object(a.L)(e)}s(),n[f.w]=function(){return t},n[f.s]=function(i,o,c,s){B&&Object(a.L)(_),n[f.w]()&&Object(a.L)("Core should not be initialized more than once"),n[f.e]=e=i||{},Object(a.q)(i[f.t])&&Object(a.L)("Please provide instrumentation key"),u=s,n._notificationManager=s,function(){var n=Object(a.g)(e.disableDbgExt);!0===n&&D&&(u[f.I](D),D=null),u&&!D&&!0!==n&&(D=Object(O.b)(e),u[f.a](D))}(),function(){var n=Object(a.g)(e.enablePerfMgr);!n&&I&&(I=null),n&&Object(a.i)(e,d.c,w)}(),function(){Object(a.i)(e,d.k,{}).NotificationManager=u}(),c&&(n[f.z]=c);var l=Object(a.i)(e,d.j,[]);(P=[])[f.H].apply(P,Object(r.b)(Object(r.b)([],o,!1),l,!1)),R=Object(a.i)(e,d.a,[]),N(null),M&&0!==M[f.x]||Object(a.L)("No "+d.a+" available"),t=!0,n.releaseQueue()},n.getTransmissionControls=n.track=n[f.o]=U,n[f.m]=n[f.a]=function(n){u&&u[f.a](n)},n[f.I]=n.getCookieMgr=n.setCookieMgr=function(n){T=n},n[d.l]=n.setPerfMgr=function(n){S=n},n.eventCnt=n.releaseQueue=n.pollInternalLogs=function(n){q=n||null;var t=Object(a.g)(e.diagnosticLogInterval);return t&&t>0||(t=1e4),F&&clearInterval(F),F=setInterval((,t)},n[f.Q]=Object(a.F)(n,(function(){return A}),["addTelemetryInitializer"]),n.unload=function(e,r,i){var o;void 0===e&&(e=!0),t||Object(a.L)("SDK is not initialized"),B&&Object(a.L)(_);var c=((o={reason:50})[f.u]=e,o.flushComplete=!1,o),u=Object(v.b)(G(),n);[f.F]((,n),J(e,l,6,i)||l(!1)},n[f.n]=Q,n.addPlugin=n.evtNamespace=function(){return H},n[f.j]=J,n.getTraceCtx=n.setTraceCtx=Object(a.E)(n,"addUnloadCb",(function(){return z}),"add")}))}return n.__ieDyn=1,n}();ar T=),x=function(n){function e(){var t=n.call(this)||this;return Object(s.a)(e,t,(function(n,e){[f.s]=n.track=)),t}return Object(r.a)(e,n),e.__ieDyn=1,e}(S),P=t("zby0"),E=t("zaii"),K=function(n){function e(){var t=n.call(this)||this;return t.pluginVersionStringArr=[],Object(i.a)(e,t,(function(n,e){n.logger&&n.logger.queue||(n.logger=new o.a({loggingLevelConsole:1})),n.initialize=function(t,r,i,s){Object(c.b)(n,(function(){return"AppInsightsCore.initialize"}),(function(){var c=n.pluginVersionStringArr;if(t){t.endpointUrl||(t.endpointUrl=P.a);var f=t.propertyStorageOverride;!f||f.getProperty&&f.setProperty||Object(a.L)("Invalid property storage override passed."),t.channels&&Object(a.a)(t.channels,(function(n){n&&Object(a.a)(n,(function(n){n.identifier&&n.version&&c.push(n.identifier+"="+n.version)}))}))}n.getWParam=r&&Object(a.a)(r,(function(n){n&&n.identifier&&n.version&&c.push(n.identifier+"="+n.version)})),n.pluginVersionString=c.join(";"),n.pluginVersionStringArr=c;try{e.initialize(t,r,i,s),n.pollInternalLogs("InternalLog")}catch(e){var l=n.logger,d=Object(u.a)(e);-1!==d.indexOf("channels")&&(d+="\n - Channels must be provided through config.channels only!"),Object(o.c)(l,1,514,"SDK Initialization Failed - no telemetry will be sent: "+d)}}),(function(){return{config:t,extensions:r,logger:i,notificationManager:s}}))},n.track=)),t}return Object(r.a)(e,n),e.__ieDyn=1,e}(x);e.a=K},RxRU:function(n,e,t){"use strict";var r=t("f2uY"),i=t("+iSp"),o=t("xtQ9"),c=t("5lU3"),a=t("r+7v"),u=t("zaii"),s=t("bus9"),f=t("e+ll"),l=t("4zqP"),d=t("uVT5"),v=t("Yf3j"),b="REAL_TIME",p="",y="POST",h="drop",O="requeue",j="application/x-json-stream",g="content-type",m="client-version",_="client-id",k="time-delta-to-apply-millis",w="upload-time",C="apikey",S="AuthMsaDeviceTicket",I="AuthXToken";function T(n){var e=(n.ext||{}).intweb;return e&&Object(u.j)(e.msfpc)?e.msfpc:null}ar P=),E=),K=),R=t("ogkr");ar B,A=2e6,q=Math.min(A,65e3),H=/\./,z=function(){function n(e,t,r,c){var a="baseData",f=!!c,l=t,d={};Object(i.a)(n,this,(function(n){function t(n,e,i,o,c,a,v){Object(s.A)(n,(function(n,b){var p=null;if(b||Object(u.j)(b)){var y=i,h=n,O=c,j=e;if(f&&!o&&H.test(n)){var g=n.split("."),m=g.length;if(m>1){O&&(O=O.slice());for(var _=0;_<m-1;_++){var k=g[_];j=j[k]=j[k]||{},y+="."+k,O&&O.push(k)}h=g[m-1]}}if(p=o&&y)||!l||!l.handleField(y,h)?Object(u.l)(h,b,r):l.value(y,h,b,r)){var w=p.value;if(j[h]=w,a&&a(O,h,p),v&&"object"==typeof w&&!Object(s.k)(w)){var C=O;C&&(C=C.slice()).push(h),t(b,w,y+"."+h,o,C,a,v)}}}}))}n.createPayload=n.appendPayload=function(t,r,i){var c=t&&r&&!t.overflow;return c&&Object(o.b)(e,(function(){return"Serializer:appendPayload"}),(function(){for(var e=r.events(),o=t.payloadBlob,c=t.numEvents,a=!1,u=[],f=[],l=t.isBeacon,d=l?65e3:3984588,v=l?q:A,b=0,p=0;b<e.length;){var y=e[b];if(y){if(c>=i){t.overflow=r.split(b);break}var h=n.getEventBlob(y);if(h&&h.length<=v){if(o.length+h.length>d){t.overflow=r.split(b);break}o&&(o+="\n"),o+=h,++p>20&&(o.substr(0,1),p=0),a=!0,c++}else h?u.push(y):f.push(y),e.splice(b,1),b--}b++}if(u&&u.length>0&&t.sizeExceed.push(P.create(r.iKey(),u)),f&&f.length>0&&t.failedEvts.push(P.create(r.iKey(),f)),a){t.batches.push(r),t.payloadBlob=o,t.numEvents=c;var O=r.iKey();-1===Object(s.b)(t.apiKeys,O)&&t.apiKeys.push(O)}}),(),c},n.getEventBlob=function(n){try{return Object(o.b)(e,(function(){return"Serializer.getEventBlob"}),(function(){var e={};e.name=n.name,e.time=n.time,e.ver=n.ver,e.iKey="o:"+Object(u.f)(n.iKey);var r={},i=n.ext;i&&(e.ext=r,Object(s.A)(i,());var o=e.data={};o.baseType=n.baseType;var c=o.baseData={};return t(n.baseData,c,a,!1,[a],(function(n,e,t){D(r,n,e,t)}),!0),t(n.data,o,"data",!1,[],(,!0),JSON.stringify(e)}),()}catch(n){return null}}}))}return n.__ieDyn=1,n}();ar L="&NoResponseBody=true",F=((B={})[1]=O,B[100]=O,B[200]="sent",B[8004]=h,B[8003]=h,B),U={},N={};,!1),Q(m,m),Q(_,"Client-Id"),Q(C,C),Q(k,k),Q(w,w),Q(I,I);var $=function(){function n(e,t,r,c,a){this._responseHandlers=[];var l,v,b,O,S,I,T,x,P,B,A="?cors=true&"+g.toLowerCase()+"="+j,q=new K,H=!1,D=new E,U=!1,Q=0,$=!0,W=[],Y={},Z=[],nn=null,en=!1,tn=!1,rn=!1;Object(i.a)(n,this,(function(n){var i=!0;ction cn(n,e,t){var r=n.urlString;unction c(n,t){an(e,n.status,function(n){var e={};return n.getAllResponseHeaders?e=n.getAllResponseHeaders()):(e=o(e,n,"time-delta-millis"),e=o(e,n,"kill-duration"),e=o(e,n,"kill-duration-seconds")),e}(n),t)}t&&n.disableXhrSync&&(t=!1);var a=Object(u.k)(y,r,i,!0,t,n.timeout);Object(s.A)(n.headers,(),a.onload=a.onerror=function(){c(a)},a.ontimeout=a.send(n.data)} pn(n,t,r,i,c){if(n&&0!==n.length)if(H)gn(n,1,i);else{i=fn(i);try{var a=n,s=0!==i;Object(o.b)(O,(function(){return"HttpManager:_sendBatches"}),(function(o){o&&(n=n.slice(0));for(var a=[],f=null,l=Object(u.g)(),d=b[i]||(s?b[1]:b[0]),v=d&&d._transport,p=P&&(tn||sn(i)||3===v||d._isSync&&2===v);vn(n,i,t);){var y=n.shift();y&&y.count()>0&&(q.isTenantKilled(y.iKey())?a.push(y):(f=f||nn.createPayload(t,r,s,p,c,i),nn.appendPayload(f,y,e)?null!==f.overflow&&(n=[f.overflow].concat(n),f.overflow=null,hn(f,l,Object(u.g)(),c),l=Object(u.g)(),f=null):(hn(f,l,Object(u.g)(),c),l=Object(u.g)(),n=[y].concat(n),f=null)))}f&&hn(f,l,Object(u.g)(),c),n.length>0&&(Z=n.concat(Z)),gn(a,8004,i)}),(,!s)}catch(n){Object(d.c)(v,2,48,"Unexpected Exception sending batch: "+Object(f.a)(n))}}}unction hn(e,t,i,c){if(e&&e.payloadBlob&&e.payloadBlob.length>0){var a=!!n.sendHook,y=b[e.sendType];!sn(e.sendType)&&e.isBeacon&&2===e.sendReason&&(y=b[2]||b[3]||y);var h=rn;(e.isBeacon||3===y._transport)&&(h=!1);var S=function(n,e){var t={url:A,hdrs:{},useHdrs:!1};e?(t.hdrs=Object(u.c)(t.hdrs,Y),t.useHdrs=Object(s.C)(t.hdrs).length>0):Object(s.A)(Y,(),V(t,_,"NO_AUTH",e),V(t,m,u.a,e);var r=p;Object(s.a)(n.apiKeys,(),V(t,C,r,e),V(t,w,Object(s.e)().toString(),e);var i=n);if(Object(u.j)(i)&&(t.url+="&ext.intweb.msfpc="+i),D.shouldAddClockSkewHeaders()&&V(t,k,D.getClockSkewHeaderValue(),e),O.getWParam){var o=O.getWParam();o>=0&&(t.url+="&w="+o)}for(var c=0;c<W.length;c++)t.url+="&"+W[c].name+"="+W[c].value;return t}(e,h);h=h||S.useHdrs;var P=Object(u.g)();Object(o.b)(O,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var b=0;b<e.batches.length;b++)for(var p=e.batches[b].events(),m=0;m<p.length;m++){var _=p[m];if(en){var k=_.timings=_.timings||{};yn(k,"sendEventStart",P),yn(k,"serializationStart",t),yn(k,"serializationCompleted",i)}_.sendAttempt>0?_.sendAttempt++:_.sendAttempt=1}gn(e.batches,1e3+(c||0),e.sendType,!0);var w={data:e.payloadBlob,urlString:S.url,headers:S.hdrs,_thePayload:e,_sendReason:c,timeout:I,disableXhrSync:T,disableFetchKeepAlive:x};h&&(X(w.headers,"cache-control")||(w.headers["cache-control"]="no-cache, no-store"),X(w.headers,g)||(w.headers["content-type"]=j));var C=null;y&&(C=function(t){D.firstRequestSent();var i=function(t,i){!function(e,t,i,o){var c=9e3,a=null,f=!1,d=!1;try{var v=!0;if(typeof e!==R.l){if(t){D.setClockSkew(t["time-delta-millis"]);var b=t["kill-duration"]||t["kill-duration-seconds"];Object(s.a)(q.setKillSwitchTenants(t["kill-tokens"],b),()}if(200==e||204==e)return void(c=200);(!function(n){return!(n>=300&&n<500&&408!=n&&429!=n||501==n||505==n)}(e)||i.numEvents<=0)&&(v=!1),c=9e3+e%1e3}if(v){c=100;var p=i.retryCnt;0===i.sendType&&(p<r?(f=!0,On((,tn,M(p))):(d=!0,tn&&(c=8001)))}}finally{f||(D.setClockSkew(),function(e,t,r,i){try{i&&l._backOffTransmission(),200===t&&(i||e.isSync||l._clearBackOff(),function(n){if(en){var e=Object(u.g)();Object(s.a)(n,()}}(e.batches)),gn(e.batches,t,e.sendType,!0)}finally{0===e.sendType&&(Q--,5!==r&&n.sendQueuedRequests(e.sendType,r))}}(i,c,o,d)),gn(a,8004,i.sendType)}}(t,i,e,c)},o=e.isTeardown||e.isSync;try{y.sendPOST(t,i,o),n.sendListener&&n.sendListener(w,t,o,e.isBeacon)}catch(n){Object(d.d)(v,"Unexpected exception sending payload. Ex:"+Object(f.a)(n)),an(i,0,{})}}),Object(o.b)(O,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(C)if(0===e.sendType&&Q++,a&&!e.isBeacon&&3!==y._transport){var t={data:w.data,urlString:w.urlString,headers:Object(u.c)({},w.headers),timeout:w.timeout,disableXhrSync:w.disableXhrSync,disableFetchKeepAlive:w.disableFetchKeepAlive},r=!1;Object(o.b)(O,(function(){return"HttpManager:_doPayloadSend.sendHook"}),()}else C(w)}))}),(,e.isSync)}e.sizeExceed&&e.sizeExceed.length>0&&gn(e.sizeExceed,8003,e.sendType),e.failedEvts&&e.failedEvts.length>0&&gn(e.failedEvts,8002,e.sendType)}unction jn(e){var t=n._responseHandlers;try{for(var r=0;r<t.length;r++)try{t[r](e)}catch(n){Object(d.c)(v,1,519,"Response handler failed: "+n)}if(e){var i=JSON.parse(e);Object(u.j)(i.webResult)&&Object(u.j)(i.webResult.msfpc)&&S.set("MSFPC",i.webResult.msfpc,31536e3)}}catch(n){}}function gn(n,e,t,r){if(n&&n.length>0&&c){var i=c[function(n){var e=F[n];return Object(u.j)(e)||(e="oth",n>=9e3&&n<=9999?e="rspFail":n>=8e3&&n<=8999?e=h:n>=1e3&&n<=1999&&(e="send")),e}(e)];if(i){var a=0!==t;Object(o.b)(O,(function(){return"HttpManager:_sendBatchesNotification"}),(,(,!a)}}}n.initialize=n._getDbgPlgTargets=n.addQueryStringParameter=n.addHeader=n.canSendRequest=n.sendQueuedRequests=n.isCompletelyIdle=n.setUnloading=n.addBatch=n.teardown=n.pause=n.resume=n.sendSynchronousBatch=))}return n.__ieDyn=1,n}(); nn="eventsDiscarded",en=function(n){function e(){var t,r=n.call(this)||this;r.identifier="PostChannel",r.priority=1011,r.version="3.2.10";var v,p,y,h,O,j,g,m=!1,_=[],k=null,w=!1,C=0,I=500,T=0,x=1e4,E={},K=b,R=null,B=null,A=0,q=0,H={},z=-1,D=!0,L=!1,F=6,U=2;return Object(i.a)(e,r,(function(n,e){function r(n){"beforeunload"!==(n||Object(f.m)().event).type&&p.setUnloading(L=!0),Y(2,2)}function i(n){p.setUnloading(L=!1)}tion V(){t=null,m=!1,_=[],k=null,w=!1,C=0,I=500,T=0,x=1e4,E={},K=b,R=null,B=null,A=0,q=0,v=null,H={},y=void 0,h=0,z=-1,O=null,D=!0,L=!1,F=6,U=2,j=null,g=Z(),p=new $(500,2,1,{requeue:fn,send:bn,sent:pn,drop:yn,rspFail:hn,oth:On},g),sn(),function(){H[4]={batches:[],iKeyMap:{}},H[3]={batches:[],iKeyMap:{}},H[2]={batches:[],iKeyMap:{}},H[1]={batches:[],iKeyMap:{}}}(),jn()}(e,t){var r=[],i=F;L&&(i=U),Object(s.a)(e,(),r.length>0&&dn(nn,r,l.a.NonRetryableStatus),L&&Y(2,2)}tDbgPlgTargets=n.initialize=function(f,l,d){Object(o.b)(l,(,(function(){var o=l;e.initialize(f,l,d);try{j=Object(c.g)(Object(a.b)(n.identifier),l.evtNamespace&&l.evtNamespace());var b=n._getTelCtx();f.extensionConfig[n.identifier]=f.extensionConfig[n.identifier]||{},t=b.getExtCfg(n.identifier),g=Z(t.setTimeoutOverride,t.clearTimeoutOverride),D=!t.disableOptimizeObj&&Object(u.h)(),o),t.eventsLimitInMem>0&&(x=t.eventsLimitInMem),t.immediateEventLimit>0&&(I=t.immediateEventLimit),t.autoFlushEventsLimit>0&&(y=t.autoFlushEventsLimit),Object(s.r)(t.maxEventRetryAttempts)&&(F=t.maxEventRetryAttempts),Object(s.r)(t.maxUnloadEventRetryAttempts)&&(U=t.maxUnloadEventRetryAttempts),jn(),t.httpXHROverride&&t.httpXHROverride.sendPOST&&(v=t.httpXHROverride),Object(u.j)(f.anonCookieName)&&p.addQueryStringParameter("anoncknm",f.anonCookieName),p.sendHook=t.payloadPreprocessor,p.sendListener=t.payloadListener;var h=t.overrideEndpointUrl?t.overrideEndpointUrl:f.endpointUrl;n._notificationManager=l.getNotifyMgr(),p.initialize(h,n.core,n,v,t);var O=f.disablePageUnloadEvents||[];Object(c.d)(r,O,j),Object(c.b)(r,O,j),Object(c.c)(i,f.disablePageShowEvents,j)}catch(e){throw n.setInitialized(!1),e}}),()},n.processTelemetry=n._doTeardown=n.setEventQueueLimits=n.pause=n.resume=n.addResponseHandler=n._loadTransmitProfiles=function(n){!function(){W(),sn(),K=b,X()}(),Object(s.A)(n,(function(n,e){var t=e.length;if(t>=2){var r=t>2?e[2]:0;e.splice(0,t-2),e[1]<0&&(e[0]=-1),e[1]>0&&e[0]>0&&(e[0]=Math.ceil(e[0]/e[1])*e[1]),r>=0&&e[1]>=0&&r>e[1]&&(r=e[1]),e.push(r),E[n]=e}}))},n.flush=n.setMsaAuthTicket=n.hasEvents=G,n._setTransmitProfile=n._backOffTransmission=n._clearBackOff=Object(s.y)(n,"_setTimeoutOverride",(function(){return g.set}),(),Object(s.y)(n,"_clearTimeoutOverride",(,()})),r}return Object(r.a)(e,n),e.__ieDyn=1,e}(v.a);e.a=en},gpMS:function(n,e,t){"use strict";(function(n){var r;t.d(e,"a",(function(){return C}));var i="undefined",o="prototype",c="function",a="_dynClass",u="_unknown_",s=Object,f=s.getPrototypeOf,l=s.getOwnPropertyNames,d=),v=d.__dynProto$Gbl||(d.__dynProto$Gbl={o:(r={},r.setInstFuncs=!0,r.useBaseInst=!0,r),n:1e3});ion j(n,e,t){return"constructor"!==e&&typeof n[e]===c&&(t||b(n,e))}ion C(n,e,t,r){b(n,o)||g("theClass is an invalid class definition.");var i=n.prototype;((i,e)||g("["+w(n)+"] not in hierarchy of ["+w(e)+"]");var c=null;b(i,a)?c=i._dynClass:(c="_dynCls$"+w(n,"_")+"$"+v.n,v.n++,i._dynClass=c);var u=C._dfOpts,s=!!u.useBaseInst;s&&r&&void 0!==r.useBaseInst&&(s=!!r.useBaseInst);var l=e);t(e,i,e,l,s));var d=!!f&&!!u.setInstFuncs;d&&r&&(d=!!r.setInstFuncs),function(n,e,t,r,i){if(!p(n)){var o=t._dynInstFuncs=t._dynInstFuncs||{},c=o[e]=o[e]||{};!1!==o._dynInstChk&&(o._dynInstChk=!!i),O(t,()}}(i,c,e,l,!1!==d)}C._dfOpts=v.o}).call(this,t("pCvA"))},zaii:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"j",(function(){return d})),t.d(e,"f",(function(){return v})),t.d(e,"i",(function(){return b})),t.d(e,"l",(function(){return p})),t.d(e,"d",(function(){return y})),t.d(e,"e",(function(){return h})),t.d(e,"b",(function(){return O})),t.d(e,"c",(function(){return j})),t.d(e,"g",(function(){return g})),t.d(e,"m",(function(){return m})),t.d(e,"h",(function(){return k})),t.d(e,"k",(function(){return w}));var r,i=t("e+ll"),o=t("bus9"),c=(t("4ISL"),t("tx8k")),a=t("ogkr"),u=(t("5lU3"),t("wX3S"),t("I4e3"),t("zby0")),s="1DS-Web-JS-3.2.10",f="withCredentials",l=((r={})[0]=0,r[2]=6,r[1]=1,r[3]=7,r[4098]=6,r[4097]=1,r[4099]=7,r);ction p(n,e,t){if(!e&&!d(e)||"string"!=typeof n)return null;var r=typeof e;if("string"===r||"number"===r||"boolean"===r||Object(o.k)(e))e={value:e};else if("object"!==r||a.e.call(e,"value")){if(Object(o.q)(e.value)||e.value===u.b||!Object(o.t)(e.value)&&!Object(o.r)(e.value)&&!Object(o.l)(e.value)&&!Object(o.k)(e.value))return null}else e={value:t?JSON.stringify(e):e};if(Object(o.k)(e.value)&&!e.value))return null;if(!Object(o.q)(e.kind)){if(Object(o.k)(e.value)||!function(n){return 0===n||n>0&&n<=13||32===n}(e.kind))return null;e.value=e.value.toString()}return e}function y(n,e,t){var r=-1;if(!Object(o.w)(n))if(e>0&&(32===e?r=8192:e<=13&&(r=e<<5)),t))-1===r&&(r=0),r|=t;else{var i=l[_(n)]||-1;-1!==r&&-1!==i?r|=i:6===i&&(r=i)}return r}nction j(n,e,t,r,i){var c={},u=!1,s=0,f=arguments.length,l=Object[a.k],d=arguments;for("[object Boolean]"===l.toString.call(d[0])&&(u=d[0],s++);s<f;s++)n=d[s],Object(o.A)(n,(function(n,e){u&&e&&Object(o.s)(e)?Object(o.k)(e)?(c[n]=c[n]||[],Object(o.a)(e,(function(e,t){c[n][t]=e&&Object(o.s)(e)?j(!0,c[n][t],e):e}))):c[n]=j(!0,c[n],e):c[n]=e}));return c}Boolean(Object(i.f)()),Boolean(Object(i.m)());var g=c.c;ction w(n,e,t,r,i,o){oid 0===r&&(r=!1),void 0===i&&(i=!1);var a=new XMLHttpRequest;return r&&c(a,"Microsoft_ApplicationInsights_BypassAjaxInstrumentation",r),t&&c(a,f,t),a.open(n,e,!i),t&&c(a,f,t),!i&&o&&c(a,"timeout",o),a}},zby0:]);
//# sourceMappingURL=46.41c7ecb5a774a7119bc5.chunk.v7.js.map