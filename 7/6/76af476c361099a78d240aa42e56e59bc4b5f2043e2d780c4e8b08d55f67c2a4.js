(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1634:1635:1638:function(e,t,n){"use strict";n.r(t);var r=n(228),o=n(320),i=n(429),s=n(999),a=Object(s.a)(,c=n(827),u=n(755),l=function(e){eturn Object(r.e)(t,e),t.prototype.lift=t.prototype._throwIfClosed=t.prototype.next=function(e){var t=this;Object(u.b)(function(){var n,o;if(t._throwIfClosed(),!t.isStopped){var i=t.observers.slice();try{for(var s=Object(r.i)(i),a=s.next();!a.done;a=s.next()){a.value.next(e)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}}})},t.prototype.error=t.prototype.complete=t.prototype.unsubscribe=Object.defineProperty(t.prototype,"observed",{get:enumerable:!1,configurable:!0}),t.prototype._trySubscribe=t.prototype._subscribe=t.prototype._innerSubscribe=function(e){var t=this.hasError,n=this.isStopped,r=this.observers;return t||n?i.a:(r.push(e),new i.b()},t.prototype._checkFinalizedStatuses=t.prototype.asObservable=t.create=t}(o.a),h=l),f=n(622),d=n(838);function p(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.onUnsubscribe,i=void 0===r?null:r,s=n.onNoSubscribers,a=void 0===s?null:s,c=n.storeInitialValue,u=void 0!==c&&c,l=[],h=e.subscribe(function(e){u&&(t=e),l.forEach(}),f=0;return function(){var e,n=f+=1;return new o.a(function(e){l.push({observer:e,ref:n}),t&&e.next(t)}).pipe((e=function(){l=l.filter(,i&&i(l.length),a&&0===l.length&&(h.unsubscribe(),a())},Object(d.a)())}}var y={},b={dataCachedApis:y},v={};function g(e){return function(t){var n="".concat(e,"_").concat(JSON.stringify(t));return y[n]=!0,console.log({dataCachedApis:y}),n}}function S(e){return function(t){var n="".concat(e,"_").concat(JSON.stringify(t));return delete y[n],console.log({dataCachedApis:y}),n}}Object.keys(b).forEach(function(e){v[e]=e});var k={dataApis:{addStock:g("addStock"),delStock:S("addStock"),addDepth:g("addDepth"),delDepth:S("addDepth"),addIndex:g("addIndex"),delIndex:S("addIndex")}},O={};Object.keys(k).forEach(function(e){O[e]=e});var w=n(34);nction A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ction R(e,t){var n=t.type,r=t.position,o=t.length,i=(t.arrayType,t.value);switch(n){case w.a.STRING:return function(e,t,n){var r=n.position,o=n.length;try{var i=t.toString(),s=i.length;if("number"!=typeof o||0===o)throw new Error("Missing or invalid buffer length specified: ".concat(o));if(o<s)throw new Error("Max string length supported by current array buffer is ".concat(o,'. "').concat(i,'" is too long'));for(var a=r+s,c=r+o,u=0;u<i.length;u+=1)e.setUint8(r+u,i.charCodeAt(u),!0);for(var l=a;l<c;l+=1)e.setUint8(l)}catch(e){}}(e,i,{position:r,length:o});case w.a.ARRAY:return function(e,t){for(var n=t.position,r=t.length,o=t.arrayType,i=t.value,s=t.arrayContentLength,a=Math.min(r,i.length),c=0;c<a;c+=1)D(e,o,i[c],n+c*s)}(e,i);default:return e["set".concat(n)](r,i,!0)}}function T(e,t){var n=t.type,r=t.position,o=t.length,i=t.arrayType;switch(n){case w.a.STRING:return function(e,t){var n=t.position,r=t.length;if("number"!=typeof r||0===r)throw new Error("Missing or invalid buffer length specified: ".concat(r));return String.fromCharCode.apply(null,new Uint8Array(e.buffer.slice(n,n+r))).replace(/[\u0000]/g,"")}(e,{position:r,length:o});case w.a.ARRAY:return function(e,t){for(var n=t.position,r=t.length,o=t.arrayType,i=[],s=Object(w.b)(o),a=0;a<r;a+=1){var c=_(e,o,n+a*s),u=c.payload;i.push(u)}return i}(e,{arrayType:i,position:r,length:o});default:return e["get".concat(n)](r,!0)}}function D(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=j(n);return t.forEach(function(t){var n=t.position,i=C(t,["position"]),s=o.shift();R(e,E({position:n+r},i,{value:s}))}),e}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{payload:t&&t.map(function(t){var r=t.position,o=C(t,["position"]);return T(e,E({},o,{position:r+n}))})}}function P(e,t){var n={};return e.forEach(function(r,o){var i,s,a=r.arrayType,c=r.key;if(c){if(a)i=c,s=t[o].map(;else if("string"==typeof c)i=c,s=t[o];else if("function"==typeof c){var u=c(t,e);i=u.key,s=u.value}n[i]=s}}),n}var M={};function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(e,t){return function(n){for(var r,o,i,s=Uint8Array.from(n),a=new DataView(s.buffer),c=[],u=0,l=a.byteLength;u<l;){var h=_(a,e,u).payload,d=t(h),p=d.messageLength,y=d.responseCode;if(f.e[y])if(l<u+p)console.error("Message length mismatch",{array:n,streamLength:l,currentPosition:u,messageLength:p,responseCode:y,response:c});else{var b=_(a,f.e[y],u).payload,v=P([].concat(x(e),x(f.e[y])),[].concat(x(h),x(b)));c.push((r={},o=f.a[y],i=v,o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r))}else if(console.error("Unrecognised message code ".concat(y)),console.error("Invalid message length ".concat(p)),!p)break;u+=p}return c}}var N={decodeDataStream:H(f.e.DATA_HEADER,,decodeOrderStream:H(f.e.ORDER_HEADER,},K={};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}unction J(e){var t=e.code,n=e.header,r=void 0===n?f.b.HEADER:n,o=e.struct,i=void 0===o?[]:o,s=e.position,a=void 0===s?83:s,c=e.length,u=void 0===c?a:c,l=new DataView(new ArrayBuffer(u));return i.length&&(i[0].position=i[0].position||a),t,Object(w.c)([].concat(z(function(e,t,n){if(!t||!n)return e;var r=m(e),o=r[0],i=r[1],s=r.slice(2);return[E({},o,{value:t}),E({},i,{value:n})].concat(j(s))}(r,t,u)),z(i)))),function(e){return D(l,function(e,t){var n=[];return t.forEach(function(t){void 0!==t.value?R(e,t):n.push(t)}),n}(l,t)),e)}}function U(e){return function(t){return!(!t||"object"!==q(t))&&(t.securityId===e[1]&&t.exchangeId===e[0])}}unction W(e,t){return t.map(}function F(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return function(i,s){return[[],W(i,e),{subscribe:t,unsubscribe:n,filterFn:r(s)},o,s||[]]}}Object.keys(N).forEach(;var G={authenticate:J(f.c.AUTH),addStock:J(f.c.ADD_STOCK),delStock:J(f.c.DEL_STOCK),addDepth:J(f.c.ADD_DEPTH),delDepth:J(f.c.DEL_DEPTH),addIndex:J(f.c.ADD_INDEX),delIndex:J(f.c.DEL_INDEX),heartbeat:J(f.c.HEARTBEAT)},V=[f.f.TRADE,f.f.TOP_BID_ASK,f.f.OHLC,f.f.CIRCUIT_LIMIT,f.f.DEPTH,f.f.P_CLOSE,f.f.HIGH_LOW],Y=[f.f.DEPTH],X=[f.f.INDEX,f.f.HIGH_LOW],Q=[f.f.MARKET_STATUS],Z=[f.f.ORDER],$={stock:F(V,"addStock","delStock",U,!0),depth:F(Y,"addDepth","delDepth",U,!0),index:F(X,"addIndex","delIndex",function(e){return function(t){return!(!t||"object"!==q(t))&&t.securityId===e[0]}},!0),marketStatus:F(Q,null,null),order:F(Z,null,null)},ee=Object(w.d)($);unction ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){ar t,n,r;return t=e,(n=[{key:"triggerEventHandlers",value:function(e,t){this.eventTypes[e]&&this.handlers[e]&&this.handlers[e].forEach(function(n){n({type:e},t))})}},{key:"addEventListener",value:function(e,t){this.eventTypes[e]&&(this.handlers[e]||(this.handlers[e]=[]),this.handlers[e].push(t))}},{key:"removeEventListener",value:function(e,t){this.eventTypes[e]&&this.handlers[e]&&(this.handlers[e]=this.handlers[e].filter(function(e){return e!==t}),this.handlers[e].length||(this.handlers[e]=null))}}])&&ne(t.prototype,n),r&&ne(t,r),e}(),oe=n(756);function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var se=function(){function e(t,n,r,o,i){var s=this,a=n.subscribe,c=n.unsubscribe,u=n.filterFn;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscribe=a,this.unsubscribe=c,this.payload=o,this.onComplete=Object(f.g)(i),this.streams=t.map(function(e){var t,n;return{type:e.type,feed:p((0,e.feed)().pipe((t=u,Object(d.a)()),{onUnsubscribe:s.removeSubscriber.bind(s),storeInitialValue:r})}}),this.subscriberCount=0}var t,n,r;return t=e,(n=[{key:"addSubscriber",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=W(this.streams,e);return this.subscriberCount+=t.filter(.length,t.map(function(e){return e?{type:e.type,feed:e.feed()}:e})}},{key:"removeSubscriber",value:function(){this.subscriberCount>0&&(this.subscriberCount-=1),0===this.subscriberCount&&this.destroySubscriber()}},{key:"destroySubscriber",value:])&&ie(t.prototype,n),r&&ie(t,r),e}(),ae=n(1634);function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var le=function(){function e(t,n){var r=t.url,o=t.options,i=t.decode,s=t.apis,a=t.cachedApisKey,c=n.onOpen,u=n.onClose,l=n.onMessage,h=n.onError,d=n.onLog;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=r,this.options=o,this.connectionAttempts=0,this.active=!1,this.connected=!1,this.reconnecting=!1,this.closing=!1,this.subscriptions={},this.request=G,this.decode=N[i],this.apis=k[s]||{},this.cachedApisKey=b[a]||{},this.hasApis=Object.keys(this.apis).length>0,this.onOpenCallback=Object(f.g)(c),this.onCloseCallback=Object(f.g)(u),this.onMessageCallback=Object(f.g)(l),this.onErrorCallback=Object(f.g)(h),this.onLogCallback=Object(f.g)(d),this.onOpen=this.onOpen.bind(this),this.onClose=this.onClose.bind(this),this.onMessage=this.onMessage.bind(this),this.onError=this.onError.bind(this),this.sendRequest=this.sendRequest.bind(this),this.initializeSocket=this.initializeSocket.bind(this),this.resendRequests=this.resendRequests.bind(this),this.initializeSocket()}var t,n,r;return t=e,(n=[{key:"initializeSocket",value:function(){this.connected||(console.log("Initializing",JSON.stringify({url:this.url})),this.socket=new WebSocket(this.url),this.connectionAttempts+=1,this.active=!0,this.socket.onopen=this.onOpen,this.socket.onclose=this.onClose,this.socket.onmessage=this.onMessage,this.socket.onerror=this.onError)}},{key:"closeSocket",value:function(){try{return this.active=!1,this.closing=!0,this.socket.close(),this.connected=!1,this.connectionAttempts=0,!0}catch(e){return console.error({url:this.url,error:e}),!1}}},{key:"reconnectSocket",value:function(){try{return this.socket.close(),this.connectionAttempts=0,!0}catch(e){return console.error({url:this.url,error:e}),!1}}},{key:"internalSendRequest",value:function(e,t,n){if(!0===this.connected){console.log("Send request",JSON.stringify({type:e,params:t,url:this.url,reconnectFeeds:n}));var r=this.request[e](t);this.socket.send(r)}}},{key:"sendRequest",value:function(e,t){if(console.log({type:e,params:JSON.stringify(t)}),this.active||(this.reconnecting=!0,this.initializeSocket()),e){var n=this.apis[e];n&&n(t),this.internalSendRequest(e,t,!1)}}},{key:"resendRequests",value:function(){var e=this;console.log("Resending active requests"),Object.keys(this.cachedApisKey).forEach(function(t){var n=ce(t.split("_"),2),r=n[0],o=n[1];e.internalSendRequest(r,JSON.parse(o),!0)})}},{key:"onOpen",value:function(e){console.log("Socket open",JSON.stringify({url:this.url,data:e})),this.connected=!0,this.onOpenCallback(JSON.stringify(e),this.connectionAttempts>1),this.reconnecting&&this.resendRequests(),this.reconnecting=!1,this.onLogCallback({status:"Connected"})}},{key:"onClose",value:function(e){this.connected=!1;var t=!1;this.closing&&(this.active=!1),this.active&&this.hasApis&&!Object.keys(this.cachedApisKey).length&&(console.log("Idle disconnection",JSON.stringify({options:this.options,connectionAttempts:this.connectionAttempts,url:this.url,data:e})),this.active=!1,t=!0,this.onLogCallback({status:"Disconnected",disconnectionType:"Idle disconnection"})),this.active&&this.options.reconnect&&this.options.maxReconnectCount>this.connectionAttempts?(console.log("Reconnecting",JSON.stringify({options:this.options,connectionAttempts:this.connectionAttempts,url:this.url,data:e})),this.reconnecting=!0,this.initializeSocket(),this.onLogCallback({status:"Disconnected",disconnectionType:"Reconnection"})):t||(this.closing=!1,console.log("Disconnected",JSON.stringify({options:this.options,connectionAttempts:this.connectionAttempts,url:this.url,data:e})),this.onCloseCallback(e),this.onLogCallback({status:"Disconnected",disconnectionType:"Disconnection"}))}},{key:"onError",value:function(e){console.error({url:this.url,error:e}),this.onErrorCallback(e)}},{key:"onMessage",value:function(e){var t=this;try{if("string"==typeof e.data){this.decode(function(e){for(var t=e.length,n=new Uint8Array(t),r=0;r<t;r+=1)n[r]=e.charCodeAt(r);return n}(e.data)).forEach(function(e){t.onMessageCallback(e)})}else{var n=new FileReader;n.onload=function(e){t.decode(new Uint8Array(e.target.result)).forEach(,n=null},n.readAsArrayBuffer(e.data)}}catch(e){console.error({error:e,url:this.url}),this.onErrorCallback(e,this)}}}])&&ue(t.prototype,n),r&&ue(t,r),e}();function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var fe={SHARED_WORKER:"SHARED_WORKER",NONE:"NONE"},de=null,pe=null,ye=Object(ae.v1)(),be=[];ar ge=function(){function e(t,n){var r,o=this;switch(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),de||(window.SharedWorker?(de=fe.SHARED_WORKER,(pe=new SharedWorker("/stocks/workers/shared-worker.js").port).onmessage=ve,window.addEventListener("beforeunload",function(){pe.postMessage({clientId:ye,method:"closeConnection",url:o.url});try{pe.close()}catch(e){console.log(e)}})):de=fe.NONE),de){case fe.SHARED_WORKER:case fe.WEB_WORKER:this.url=t.url,this.handleMessage=this.handleMessage.bind(this),r=this.handleMessage,be.push(r),this.onOpen=n.onOpen,this.onClose=n.onClose,this.onMessage=n.onMessage,this.onError=n.onError,this.onLog=n.onLog,this.payload=t,pe.postMessage({clientId:ye,method:"initializeSocket",url:this.url,payload:this.payload});break;default:this.socket=new le(t,n),this.closeSocket=this.socket.closeSocket,this.sendRequest=this.socket.sendRequest}console.log({workerType:de,worker:pe,payload:t})}var t,n,r;return t=e,(n=[{key:"sendRequest",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];pe.postMessage({clientId:ye,method:"sendRequest",url:this.url,payload:t})}},{key:"handleMessage",value:function(e){var t=e.data,n=t.method,r=t.url,o=t.payload;if(!r||this.url===r)switch(n){case"onOpen":this.onOpen(o.data);break;case"sendRequest":break;default:"function"==typeof this[n]&&this[n](o)}}},{key:"closeSocket",value:function(){var e;pe.postMessage({clientId:this.clientId,method:"closeSocket"}),e=this.handleMessage,be=be.filter(}},{key:"reconnectSocket",value:function(){pe.postMessage({clientId:ye,method:"reconnect",url:this.url})}}])&&he(t.prototype,n),r&&he(t,r),e}();={destroyKey:"destroyKey",addSubscriber:"addSubscriber",createSourceObservable:"createSourceObservable",newPacket:"newPacket",connected:"connected",reConnected:"reConnected",connectionClosed:"connectionClosed",connectionError:"connectionError",log:"log"},Ce=function(e){function t(e,n,r){var i,s,a,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0;!this,t),s=this,(i=!(a=we(t).call(this,Ae))||"object"!==ke(a)&&"function"!=typeof a?Ee(s):a).url=e,i.options=r,i.subscriptions={},i.handlers={},i.feed=null,i.dataStream={};var h=function(){var e=Object.values(f.f),t={},n=e.map(function(e){var n={type:e};return n.feed=p(new o.a(),n});return{feedMap:t,feedArray:n}}(),d=h.feedMap,y=h.feedArray;return i.feedMap=d,i.feedArray=y,i.decode=n,i.apis=c,i.cachedApisKey=u,i.heartBeatIntervalId=null,i.lastPacketIntervalId=null,i.lastPacketSubject=l,i.authorize=i.authorize.bind(Ee(Ee(i))),i.handleMessage=i.handleMessage.bind(Ee(Ee(i))),i.handleClose=i.handleClose.bind(Ee(Ee(i))),i.handleError=i.handleError.bind(Ee(Ee(i))),i.destroyKey=i.destroyKey.bind(Ee(Ee(i))),i.handleLog=i.handleLog.bind(Ee(Ee(i))),i}var n,r,i;return t,re),n=t,(r=[{key:"initializeStream",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.authSettings,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options;this.authSettings=e,this.options=t,this.triggerEventHandlers(this.eventTypes.createSourceObservable,{url:this.url,started:!0});var n=this.url,r=this.options,o=this.decode,i=this.apis,s=this.cachedApisKey,a=this.authorize,c=this.handleClose,u=this.handleMessage,l=this.handleError,h=this.handleLog;this.feed=new ge({url:n,options:r,decode:o,apis:i,cachedApisKey:s},{onOpen:a,onClose:c,onMessage:u,onError:l,onLog:h})}},{key:"closeSocket",value:function(){var e=Object.keys(this.subscriptions);return e.length?(console.warn("Unsubscribe to existing open subscriptions: ".concat(JSON.stringify(e))),!1):this.feed.closeSocket()}},{key:"reconnectSocket",value:,{key:"authorize",value:function(e,t){var n=this;this.feed.sendRequest("authenticate",this.authSettings),t?this.triggerEventHandlers(this.eventTypes.reConnected,{url:this.url,authSettings:this.authSettings,data:e,isReconnect:t}):this.triggerEventHandlers(this.eventTypes.connected,{url:this.url,authSettings:this.authSettings,data:e,isReconnect:t}),this.heartBeatIntervalId&&window.clearInterval(this.heartBeatIntervalId),this.heartBeatIntervalId=window.setInterval(3e4)}},{key:"handleMessage",value:function(e){var t=this;this.triggerEventHandlers(this.eventTypes.newPacket,{url:this.url,data:e}),e&&"object"===ke(e)&&(Object.entries(e).forEach(function(e){var n=Se(e,2),r=n[0],o=n[1];t.feedMap[r]&&t.feedMap[r].next(o)}),this.lastPacketIntervalId&&window.clearInterval(this.lastPacketIntervalId),this.lastPacketSubject&&(this.lastPacketIntervalId=window.setInterval(5e3)))}},{key:"handleClose",value:function(e){this.triggerEventHandlers(this.eventTypes.connectionClosed,{url:this.url,data:e,options:this.options})}},{key:"handleError",value:function(e){this.triggerEventHandlers(this.eventTypes.connectionError,{url:this.url,error:e})}},{key:"handleLog",value:function(e){this.triggerEventHandlers(this.eventTypes.log,{url:this.url,log:e})}},{key:"getStream",value:function(e,t,n){var r=Se($[e](this.feedArray,t),5),o=r[0],i=r[1],s=r[2],a=r[3],c=r[4],u=Array.isArray(n)?n:o;if(0===u.length)return u;var l="".concat(e,"_").concat(JSON.stringify(c));return this.subscriptions[l]?this.triggerEventHandlers(this.eventTypes.addSubscriber,{url:this.url,key:l,feeds:u,createKey:!1}):(this.subscriptions[l]=new se(i,s,a,c,this.destroyKey(l)),this.feed.sendRequest(s.subscribe,c),this.triggerEventHandlers(this.eventTypes.addSubscriber,{url:this.url,key:l,feeds:u,createKey:!0})),this.subscriptions[l].addSubscriber(u)}},{key:"destroyKey",value:function(e){var t=this;return function(){if(0===t.subscriptions[e].subscriberCount){var n=t.subscriptions[e],r=n.unsubscribe,o=n.payload;t.feed.sendRequest(r,o),t.triggerEventHandlers(t.eventTypes.destroyKey,{url:t.url,key:e}),delete t.subscriptions[e]}}}}])&&Oe(n.prototype,r),i&&Oe(n,i),t}(),je=n(41),Ie=je.a.DATA_BROADCAST,Re=je.a.ORDER_BROADCAST;n.d(t,"lastPacketSubject",function(){return De}),n.d(t,"feeds",function(){return _e}),n.d(t,"RESPONSE_TYPES",,n.d(t,"REQUEST_TYPES",function(){return ee}),n.d(t,"eventTypes",function(){return Ae}),n.d(t,"stockFields",function(){return V}),n.d(t,"depthFields",function(){return Y}),n.d(t,"indexFields",function(){return X}),n.d(t,"orderFields",;var Te={reconnect:!0,maxReconnectCount:20},De=new l,_e={data:new Ce(Ie,K.decodeDataStream,Te,O.dataApis,v.dataCachedApis,De),order:new Ce(Re,K.decodeOrderStream,Te)}}}]);