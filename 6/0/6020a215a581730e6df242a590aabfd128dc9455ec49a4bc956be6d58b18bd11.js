!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="23d64bb6-7f05-4e1e-84fb-670f19f08e03",e._sentryDebugIdIdentifier="sentry-dbid-23d64bb6-7f05-4e1e-84fb-670f19f08e03")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"5a742cc165914f471973e8dd7a0daf21f6a96ed6"},(self.webpackChunkgrindr_web_frontend=self.webpackChunkgrindr_web_frontend||[]).push([[474],{60474:(e,t,n)=>{n.d(t,{F:()=>Ye});var i,r=n(29388);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Verbose=3]="Verbose",e[e.Debug=4]="Debug"}(i||(i={}));var o,s=function(e){return function(){var t=(0,r.pi)({},e.config);return{logger:t.loggerProvider,logLevel:t.logLevel}}},u=function(e,t){var n,i;t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"");try{for(var o=(0,r.XA)(t.split(".")),s=o.next();!s.done;s=o.next()){var u=s.value;if(!(u in e))return;e=e[u]}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return e},a=function(e,t){return function(){var n,i,o={};try{for(var s=(0,r.XA)(t),a=s.next();!a.done;a=s.next()){var c=a.value;o[c]=u(e,c)}}catch(d){n={error:d}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}return o}},c=function(e,t,n,r,o){return void 0===o&&(o=null),function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];var a=n(),c=a.logger,d=a.logLevel;if(d&&d<i.Debug||!d||!c)return e.apply(o,s);var l,f={type:"invoke public method",name:t,args:s,stacktrace:(l=1,void 0===l&&(l=0),((new Error).stack||"").split("\n").slice(2+l).map((function(e){return e.trim()}))),time:{start:(new Date).toISOString()},states:{}};r&&f.states&&(f.states.before=r());var p=e.apply(o,s);return p&&p.promise?p.promise.then((function(){r&&f.states&&(f.states.after=r()),f.time&&(f.time.end=(new Date).toISOString()),c.debug(JSON.stringify(f,null,2))})):(r&&f.states&&(f.states.after=r()),f.time&&(f.time.end=(new Date).toISOString()),c.debug(JSON.stringify(f,null,2))),p}},d=function(e){return{promise:e||Promise.resolve()}};!function(e){e.Unknown="unknown",e.Skipped="skipped",e.Success="success",e.RateLimit="rate_limit",e.PayloadTooLarge="payload_too_large",e.Invalid="invalid",e.Failed="failed",e.Timeout="Timeout",e.SystemError="SystemError"}(o||(o={}));var l=n(45805),f=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=o.Unknown),{event:e,code:t,message:n}},p="Amplitude Logger ",h=function(){function e(){this.logLevel=i.None}return e.prototype.disable=function(){this.logLevel=i.None},e.prototype.enable=function(e){void 0===e&&(e=i.Warn),this.logLevel=e},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.Verbose||console.log("".concat(p,"[Log]: ").concat(e.join(" ")))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.Warn||console.warn("".concat(p,"[Warn]: ").concat(e.join(" ")))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.Error||console.error("".concat(p,"[Error]: ").concat(e.join(" ")))},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.Debug||console.log("".concat(p,"[Debug]: ").concat(e.join(" ")))},e}(),v=function(){return{flushMaxRetries:12,flushQueueSize:200,flushIntervalMillis:1e4,instanceName:"$default_instance",logLevel:i.Warn,loggerProvider:new h,optOut:!1,serverUrl:l.EG,serverZone:"US",useBatch:!1}},g=function(){function e(e){var t,n,i,r;this._optOut=!1;var o=v();this.apiKey=e.apiKey,this.flushIntervalMillis=null!==(t=e.flushIntervalMillis)&&void 0!==t?t:o.flushIntervalMillis,this.flushMaxRetries=e.flushMaxRetries||o.flushMaxRetries,this.flushQueueSize=e.flushQueueSize||o.flushQueueSize,this.instanceName=e.instanceName||o.instanceName,this.loggerProvider=e.loggerProvider||o.loggerProvider,this.logLevel=null!==(n=e.logLevel)&&void 0!==n?n:o.logLevel,this.minIdLength=e.minIdLength,this.plan=e.plan,this.ingestionMetadata=e.ingestionMetadata,this.optOut=null!==(i=e.optOut)&&void 0!==i?i:o.optOut,this.serverUrl=e.serverUrl,this.serverZone=e.serverZone||o.serverZone,this.storageProvider=e.storageProvider,this.transportProvider=e.transportProvider,this.useBatch=null!==(r=e.useBatch)&&void 0!==r?r:o.useBatch,this.loggerProvider.enable(this.logLevel);var s=m(e.serverUrl,e.serverZone,e.useBatch);this.serverZone=s.serverZone,this.serverUrl=s.serverUrl}return Object.defineProperty(e.prototype,"optOut",{get:function(){return this._optOut},set:function(e){this._optOut=e},enumerable:!1,configurable:!0}),e}(),y=function(e,t){return"EU"===e?t?l.RE:l.y_:t?l.h8:l.EG},m=function(e,t,n){if(void 0===e&&(e=""),void 0===t&&(t=v().serverZone),void 0===n&&(n=v().useBatch),e)return{serverUrl:e,serverZone:void 0};var i=["US","EU"].includes(t)?t:v().serverZone;return{serverZone:i,serverUrl:y(i,n)}};function b(e){var t="";try{"body"in e&&(t=JSON.stringify(e.body,null,2))}catch(n){}return t}var _=function(){function e(){this.name="amplitude",this.type="destination",this.retryTimeout=1e3,this.throttleTimeout=3e4,this.storageKey="",this.scheduled=null,this.queue=[]}return e.prototype.setup=function(e){var t;return(0,r.mG)(this,void 0,void 0,(function(){var n,i=this;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.config=e,this.storageKey="".concat(l.f1,"_").concat(this.config.apiKey.substring(0,10)),[4,null===(t=this.config.storageProvider)||void 0===t?void 0:t.get(this.storageKey)];case 1:return n=r.sent(),this.saveEvents(),n&&n.length>0&&Promise.all(n.map((function(e){return i.execute(e)}))).catch(),[2,Promise.resolve(void 0)]}}))}))},e.prototype.execute=function(e){var t=this;return new Promise((function(n){var i={event:e,attempts:0,callback:function(e){return n(e)},timeout:0};t.addToQueue(i)}))},e.prototype.addToQueue=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.filter((function(t){return t.attempts<e.config.flushMaxRetries?(t.attempts+=1,!0):(e.fulfillRequest([t],500,"Event rejected due to exceeded retry count"),!1)})).forEach((function(t){e.queue=e.queue.concat(t),0!==t.timeout?setTimeout((function(){t.timeout=0,e.schedule(0)}),t.timeout):e.schedule(e.config.flushIntervalMillis)})),this.saveEvents()},e.prototype.schedule=function(e){var t=this;this.scheduled||(this.scheduled=setTimeout((function(){t.flush(!0).then((function(){t.queue.length>0&&t.schedule(e)}))}),e))},e.prototype.flush=function(e){return void 0===e&&(e=!1),(0,r.mG)(this,void 0,void 0,(function(){var t,n,i,o=this;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return t=[],n=[],this.queue.forEach((function(e){return 0===e.timeout?t.push(e):n.push(e)})),this.queue=n,this.scheduled&&(clearTimeout(this.scheduled),this.scheduled=null),i=function(e,t){var n=Math.max(t,1);return e.reduce((function(e,t,i){var r=Math.floor(i/n);return e[r]||(e[r]=[]),e[r].push(t),e}),[])}(t,this.config.flushQueueSize),[4,Promise.all(i.map((function(t){return o.send(t,e)})))];case 1:return r.sent(),[2]}}))}))},e.prototype.send=function(e,t){return void 0===t&&(t=!0),(0,r.mG)(this,void 0,void 0,(function(){var n,i,o,s,u;return(0,r.Jh)(this,(function(a){switch(a.label){case 0:if(!this.config.apiKey)return[2,this.fulfillRequest(e,400,"Event rejected due to missing API key")];n={api_key:this.config.apiKey,events:e.map((function(e){var t=e.event;t.extra;return(0,r._T)(t,["extra"])})),options:{min_id_length:this.config.minIdLength},client_upload_time:(new Date).toISOString()},a.label=1;case 1:return a.trys.push([1,3,,4]),i=m(this.config.serverUrl,this.config.serverZone,this.config.useBatch).serverUrl,[4,this.config.transportProvider.send(i,n)];case 2:return null===(o=a.sent())?(this.fulfillRequest(e,0,"Unexpected error occurred"),[2]):t?(this.handleResponse(o,e),[3,4]):("body"in o?this.fulfillRequest(e,o.statusCode,"".concat(o.status,": ").concat(b(o))):this.fulfillRequest(e,o.statusCode,o.status),[2]);case 3:return s=a.sent(),u=(c=s)instanceof Error?c.message:String(c),this.config.loggerProvider.error(u),this.fulfillRequest(e,0,u),[3,4];case 4:return[2]}var c}))}))},e.prototype.handleResponse=function(e,t){var n=e.status;switch(n){case o.Success:this.handleSuccessResponse(e,t);break;case o.Invalid:this.handleInvalidResponse(e,t);break;case o.PayloadTooLarge:this.handlePayloadTooLargeResponse(e,t);break;case o.RateLimit:this.handleRateLimitResponse(e,t);break;default:this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(n,"' provided for ").concat(t.length,' events"}')),this.handleOtherResponse(t)}},e.prototype.handleSuccessResponse=function(e,t){this.fulfillRequest(t,e.statusCode,"Event tracked successfully")},e.prototype.handleInvalidResponse=function(e,t){var n=this;if(e.body.missingField||e.body.error.startsWith("Invalid API key"))this.fulfillRequest(t,e.statusCode,e.body.error);else{var i=(0,r.ev)((0,r.ev)((0,r.ev)((0,r.ev)([],(0,r.CR)(Object.values(e.body.eventsWithInvalidFields)),!1),(0,r.CR)(Object.values(e.body.eventsWithMissingFields)),!1),(0,r.CR)(Object.values(e.body.eventsWithInvalidIdLengths)),!1),(0,r.CR)(e.body.silencedEvents),!1).flat(),o=new Set(i),s=t.filter((function(t,i){if(!o.has(i))return!0;n.fulfillRequest([t],e.statusCode,e.body.error)}));s.length>0&&this.config.loggerProvider.warn(b(e)),this.addToQueue.apply(this,(0,r.ev)([],(0,r.CR)(s),!1))}},e.prototype.handlePayloadTooLargeResponse=function(e,t){1!==t.length?(this.config.loggerProvider.warn(b(e)),this.config.flushQueueSize/=2,this.addToQueue.apply(this,(0,r.ev)([],(0,r.CR)(t),!1))):this.fulfillRequest(t,e.statusCode,e.body.error)},e.prototype.handleRateLimitResponse=function(e,t){var n=this,i=Object.keys(e.body.exceededDailyQuotaUsers),o=Object.keys(e.body.exceededDailyQuotaDevices),s=e.body.throttledEvents,u=new Set(i),a=new Set(o),c=new Set(s),d=t.filter((function(t,i){if(!(t.event.user_id&&u.has(t.event.user_id)||t.event.device_id&&a.has(t.event.device_id)))return c.has(i)&&(t.timeout=n.throttleTimeout),!0;n.fulfillRequest([t],e.statusCode,e.body.error)}));d.length>0&&this.config.loggerProvider.warn(b(e)),this.addToQueue.apply(this,(0,r.ev)([],(0,r.CR)(d),!1))},e.prototype.handleOtherResponse=function(e){var t=this;this.addToQueue.apply(this,(0,r.ev)([],(0,r.CR)(e.map((function(e){return e.timeout=e.attempts*t.retryTimeout,e}))),!1))},e.prototype.fulfillRequest=function(e,t,n){this.saveEvents(),e.forEach((function(e){return e.callback(f(e.event,t,n))}))},e.prototype.saveEvents=function(){if(this.config.storageProvider){var e=Array.from(this.queue.map((function(e){return e.event})));this.config.storageProvider.set(this.storageKey,e)}},e}(),I=function(e){return e?(e^16*Math.random()>>e/4).toString(16):(String(1e7)+String(-1e3)+String(-4e3)+String(-8e3)+String(-1e11)).replace(/[018]/g,I)},w=n(2990),E=n(1739),S=n(63448),T=function(){function e(){this.productId="",this.quantity=1,this.price=0}return e.prototype.setProductId=function(e){return this.productId=e,this},e.prototype.setQuantity=function(e){return e>0&&(this.quantity=e),this},e.prototype.setPrice=function(e){return this.price=e,this},e.prototype.setRevenueType=function(e){return this.revenueType=e,this},e.prototype.setRevenue=function(e){return this.revenue=e,this},e.prototype.setEventProperties=function(e){return(0,S.L)(e)&&(this.properties=e),this},e.prototype.getEventProperties=function(){var e=this.properties?(0,r.pi)({},this.properties):{};return e[E.al.REVENUE_PRODUCT_ID]=this.productId,e[E.al.REVENUE_QUANTITY]=this.quantity,e[E.al.REVENUE_PRICE]=this.price,e[E.al.REVENUE_TYPE]=this.revenueType,e[E.al.REVENUE]=this.revenue,e},e}(),O=function(){function e(e){this.client=e,this.queue=[],this.applying=!1,this.plugins=[]}return e.prototype.register=function(e,t){var n,i,o;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return e.name=null!==(n=e.name)&&void 0!==n?n:I(),e.type=null!==(i=e.type)&&void 0!==i?i:"enrichment",[4,null===(o=e.setup)||void 0===o?void 0:o.call(e,t,this.client)];case 1:return r.sent(),this.plugins.push(e),[2]}}))}))},e.prototype.deregister=function(e){var t;return(0,r.mG)(this,void 0,void 0,(function(){var n,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n=this.plugins.findIndex((function(t){return t.name===e})),i=this.plugins[n],this.plugins.splice(n,1),[4,null===(t=i.teardown)||void 0===t?void 0:t.call(i)];case 1:return r.sent(),[2]}}))}))},e.prototype.reset=function(e){this.applying=!1,this.plugins.map((function(e){var t;return null===(t=e.teardown)||void 0===t?void 0:t.call(e)})),this.plugins=[],this.client=e},e.prototype.push=function(e){var t=this;return new Promise((function(n){t.queue.push([e,n]),t.scheduleApply(0)}))},e.prototype.scheduleApply=function(e){var t=this;this.applying||(this.applying=!0,setTimeout((function(){t.apply(t.queue.shift()).then((function(){t.applying=!1,t.queue.length>0&&t.scheduleApply(0)}))}),e))},e.prototype.apply=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t,n,i,o,s,u,a,c,d,l,p,h,v,g,y,m,b,_,I,w;return(0,r.Jh)(this,(function(E){switch(E.label){case 0:if(!e)return[2];t=(0,r.CR)(e,1),n=t[0],i=(0,r.CR)(e,2),o=i[1],s=this.plugins.filter((function(e){return"before"===e.type})),E.label=1;case 1:E.trys.push([1,6,7,8]),u=(0,r.XA)(s),a=u.next(),E.label=2;case 2:return a.done?[3,5]:(h=a.value).execute?[4,h.execute((0,r.pi)({},n))]:[3,4];case 3:if(null===(v=E.sent()))return o({event:n,code:0,message:""}),[2];n=v,E.label=4;case 4:return a=u.next(),[3,2];case 5:return[3,8];case 6:return c=E.sent(),b={error:c},[3,8];case 7:try{a&&!a.done&&(_=u.return)&&_.call(u)}finally{if(b)throw b.error}return[7];case 8:d=this.plugins.filter((function(e){return"enrichment"===e.type||void 0===e.type})),E.label=9;case 9:E.trys.push([9,14,15,16]),l=(0,r.XA)(d),p=l.next(),E.label=10;case 10:return p.done?[3,13]:(h=p.value).execute?[4,h.execute((0,r.pi)({},n))]:[3,12];case 11:if(null===(v=E.sent()))return o({event:n,code:0,message:""}),[2];n=v,E.label=12;case 12:return p=l.next(),[3,10];case 13:return[3,16];case 14:return g=E.sent(),I={error:g},[3,16];case 15:try{p&&!p.done&&(w=l.return)&&w.call(l)}finally{if(I)throw I.error}return[7];case 16:return y=this.plugins.filter((function(e){return"destination"===e.type})),m=y.map((function(e){var t=(0,r.pi)({},n);return e.execute(t).catch((function(e){return f(t,0,String(e))}))})),Promise.all(m).then((function(e){var t=(0,r.CR)(e,1)[0]||f(n,100,"Event not tracked, no destination plugins on the instance");o(t)})),[2]}}))}))},e.prototype.flush=function(){return(0,r.mG)(this,void 0,void 0,(function(){var e,t,n,i=this;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return e=this.queue,this.queue=[],[4,Promise.all(e.map((function(e){return i.apply(e)})))];case 1:return r.sent(),t=this.plugins.filter((function(e){return"destination"===e.type})),n=t.map((function(e){return e.flush&&e.flush()})),[4,Promise.all(n)];case 2:return r.sent(),[2]}}))}))},e}(),k=function(e,t){return(0,r.pi)((0,r.pi)({},t),{event_type:E.JU.IDENTIFY,user_properties:e.getUserProperties()})},P=function(){function e(e){void 0===e&&(e="$default"),this.initializing=!1,this.q=[],this.dispatchQ=[],this.logEvent=this.track.bind(this),this.timeline=new O(this),this.name=e}return e.prototype._init=function(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return this.config=e,this.timeline.reset(this),[4,this.runQueuedFunctions("q")];case 1:return t.sent(),[2]}}))}))},e.prototype.runQueuedFunctions=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t,n,i,o,s,u;return(0,r.Jh)(this,(function(a){switch(a.label){case 0:t=this[e],this[e]=[],a.label=1;case 1:a.trys.push([1,6,7,8]),n=(0,r.XA)(t),i=n.next(),a.label=2;case 2:return i.done?[3,5]:[4,(0,i.value)()];case 3:a.sent(),a.label=4;case 4:return i=n.next(),[3,2];case 5:return[3,8];case 6:return o=a.sent(),s={error:o},[3,8];case 7:try{i&&!i.done&&(u=n.return)&&u.call(n)}finally{if(s)throw s.error}return[7];case 8:return[2]}}))}))},e.prototype.track=function(e,t,n){var i=function(e,t,n){var i="string"===typeof e?{event_type:e}:e;return(0,r.pi)((0,r.pi)((0,r.pi)({},i),n),t&&{event_properties:t})}(e,t,n);return d(this.dispatch(i))},e.prototype.identify=function(e,t){var n=k(e,t);return d(this.dispatch(n))},e.prototype.groupIdentify=function(e,t,n,i){var o=function(e,t,n,i){var o;return(0,r.pi)((0,r.pi)({},i),{event_type:E.JU.GROUP_IDENTIFY,group_properties:n.getUserProperties(),groups:(o={},o[e]=t,o)})}(e,t,n,i);return d(this.dispatch(o))},e.prototype.setGroup=function(e,t,n){var i=function(e,t,n){var i,o=new w.h;return o.set(e,t),(0,r.pi)((0,r.pi)({},n),{event_type:E.JU.IDENTIFY,user_properties:o.getUserProperties(),groups:(i={},i[e]=t,i)})}(e,t,n);return d(this.dispatch(i))},e.prototype.revenue=function(e,t){var n=function(e,t){return(0,r.pi)((0,r.pi)({},t),{event_type:E.JU.REVENUE,event_properties:e.getEventProperties()})}(e,t);return d(this.dispatch(n))},e.prototype.add=function(e){return this.config?d(this.timeline.register(e,this.config)):(this.q.push(this.add.bind(this,e)),d())},e.prototype.remove=function(e){return this.config?d(this.timeline.deregister(e)):(this.q.push(this.remove.bind(this,e)),d())},e.prototype.dispatchWithCallback=function(e,t){if(!this.config)return t(f(e,0,"Client not initialized"));this.process(e).then(t)},e.prototype.dispatch=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t=this;return(0,r.Jh)(this,(function(n){return this.config?[2,this.process(e)]:[2,new Promise((function(n){t.dispatchQ.push(t.dispatchWithCallback.bind(t,e,n))}))]}))}))},e.prototype.process=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t,n,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),this.config.optOut?[2,f(e,0,"Event skipped due to optOut config")]:[4,this.timeline.push(e)];case 1:return 200===(i=r.sent()).code?this.config.loggerProvider.log(i.message):100===i.code?this.config.loggerProvider.warn(i.message):this.config.loggerProvider.error(i.message),[2,i];case 2:return t=r.sent(),n=String(t),this.config.loggerProvider.error(n),[2,i=f(e,0,n)];case 3:return[2]}}))}))},e.prototype.setOptOut=function(e){this.config?this.config.optOut=Boolean(e):this.q.push(this.setOptOut.bind(this,Boolean(e)))},e.prototype.flush=function(){return d(this.timeline.flush())},e}(),R=n(22946),x=function(e){return void 0===e&&(e="$default_instance"),R.V.getInstance(e)},U=function(){function e(){this.name="identity",this.type="before",this.identityStore=x().identityStore}return e.prototype.execute=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(n){return(t=e.user_properties)&&this.identityStore.editIdentity().updateUserProperties(t).commit(),[2,e]}))}))},e.prototype.setup=function(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return e.instanceName&&(this.identityStore=x(e.instanceName).identityStore),[2]}))}))},e}(),A=function(e,t){return"boolean"===typeof e?e:!1!==(null===e||void 0===e?void 0:e[t])},D=function(e){return A(e,"attribution")},N=function(e){var t,n,i=function(){return!1},r=void 0;return(n=e.defaultTracking,A(n,"pageViews"))&&(i=void 0,t=void 0,e.defaultTracking&&"object"===typeof e.defaultTracking&&e.defaultTracking.pageViews&&"object"===typeof e.defaultTracking.pageViews&&("trackOn"in e.defaultTracking.pageViews&&(i=e.defaultTracking.pageViews.trackOn),"trackHistoryChanges"in e.defaultTracking.pageViews&&(r=e.defaultTracking.pageViews.trackHistoryChanges),"eventType"in e.defaultTracking.pageViews&&e.defaultTracking.pageViews.eventType&&(t=e.defaultTracking.pageViews.eventType))),{trackOn:i,trackHistoryChanges:r,eventType:t}},q=function(e,t){return void 0===t&&(t=Date.now()),Date.now()-t>e},J=function(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=i.name,o=i.args,s=i.resolve,u=e&&e[r];if("function"===typeof u){var a=u.apply(e,o);"function"===typeof s&&s(null===a||void 0===a?void 0:a.promise)}}return e},L=function(e){return e&&void 0!==e._q},C=function(){var e,t,n,i;if("undefined"===typeof navigator)return"";var r=navigator.userLanguage;return null!==(i=null!==(n=null!==(t=null===(e=navigator.languages)||void 0===e?void 0:e[0])&&void 0!==t?t:navigator.language)&&void 0!==n?n:r)&&void 0!==i?i:""},G=function(){function e(){this.name="@amplitude/plugin-context-browser",this.type="before",this.library="amplitude-ts/".concat("2.3.3"),"undefined"!==typeof navigator&&(this.userAgent=navigator.userAgent)}return e.prototype.setup=function(e){return this.config=e,Promise.resolve(void 0)},e.prototype.execute=function(e){var t,n;return(0,r.mG)(this,void 0,void 0,(function(){var i,o,s;return(0,r.Jh)(this,(function(u){return i=(new Date).getTime(),o=null!==(t=this.config.lastEventId)&&void 0!==t?t:-1,s=null!==(n=e.event_id)&&void 0!==n?n:o+1,this.config.lastEventId=s,e.time||(this.config.lastEventTime=i),[2,(0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)({user_id:this.config.userId,device_id:this.config.deviceId,session_id:this.config.sessionId,time:i},this.config.appVersion&&{app_version:this.config.appVersion}),this.config.trackingOptions.platform&&{platform:"Web"}),this.config.trackingOptions.language&&{language:C()}),this.config.trackingOptions.ipAddress&&{ip:"$remote"}),{insert_id:I(),partner_id:this.config.partnerId,plan:this.config.plan}),this.config.ingestionMetadata&&{ingestion_metadata:{source_name:this.config.ingestionMetadata.sourceName,source_version:this.config.ingestionMetadata.sourceVersion}}),e),{event_id:s,library:this.library,user_agent:this.userAgent})]}))}))},e}(),j=function(){function e(){this.memoryStorage=new Map}return e.prototype.isEnabled=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2,!0]}))}))},e.prototype.get=function(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return[2,this.memoryStorage.get(e)]}))}))},e.prototype.getRaw=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return[2,(t=n.sent())?JSON.stringify(t):void 0]}}))}))},e.prototype.set=function(e,t){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return this.memoryStorage.set(e,t),[2]}))}))},e.prototype.remove=function(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return this.memoryStorage.delete(e),[2]}))}))},e.prototype.reset=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return this.memoryStorage.clear(),[2]}))}))},e}(),M=function(e,t,n){return void 0===t&&(t=""),void 0===n&&(n=10),[l.xp,t,e.substring(0,n)].filter(Boolean).join("_")},V=function(){return"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof self?self:"undefined"!==typeof n.g?n.g:void 0},F=function(){var e,t=V();return(null===(e=null===t||void 0===t?void 0:t.location)||void 0===e?void 0:e.search)?t.location.search.substring(1).split("&").filter(Boolean).reduce((function(e,t){var n=t.split("=",2),i=$(n[0]),r=$(n[1]);return r?(e[i]=r,e):e}),{}):{}},$=function(e){void 0===e&&(e="");try{return decodeURIComponent(e)}catch(t){return""}},Q=function(){function e(e){this.options=(0,r.pi)({},e)}return e.prototype.isEnabled=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,n;return(0,r.Jh)(this,(function(i){switch(i.label){case 0:if(!V())return[2,!1];e.testValue=String(Date.now()),t=new e(this.options),n="AMP_TEST",i.label=1;case 1:return i.trys.push([1,4,5,7]),[4,t.set(n,e.testValue)];case 2:return i.sent(),[4,t.get(n)];case 3:return[2,i.sent()===e.testValue];case 4:return i.sent(),[2,!1];case 5:return[4,t.remove(n)];case 6:return i.sent(),[7];case 7:return[2]}}))}))},e.prototype.get=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return[4,this.getRaw(e)];case 1:if(!(t=n.sent()))return[2,void 0];try{try{t=decodeURIComponent(atob(t))}catch(i){}return[2,JSON.parse(t)]}catch(r){return[2,void 0]}return[2]}}))}))},e.prototype.getRaw=function(e){var t,n;return(0,r.mG)(this,void 0,void 0,(function(){var i,o,s;return(0,r.Jh)(this,(function(r){return i=V(),o=null!==(n=null===(t=null===i||void 0===i?void 0:i.document)||void 0===t?void 0:t.cookie.split("; "))&&void 0!==n?n:[],(s=o.find((function(t){return 0===t.indexOf(e+"=")})))?[2,s.substring(e.length+1)]:[2,void 0]}))}))},e.prototype.set=function(e,t){var n;return(0,r.mG)(this,void 0,void 0,(function(){var i,o,s,u,a,c;return(0,r.Jh)(this,(function(r){try{i=null!==(n=this.options.expirationDays)&&void 0!==n?n:0,s=void 0,(o=null!==t?i:-1)&&((u=new Date).setTime(u.getTime()+24*o*60*60*1e3),s=u),a="".concat(e,"=").concat(btoa(encodeURIComponent(JSON.stringify(t)))),s&&(a+="; expires=".concat(s.toUTCString())),a+="; path=/",this.options.domain&&(a+="; domain=".concat(this.options.domain)),this.options.secure&&(a+="; Secure"),this.options.sameSite&&(a+="; SameSite=".concat(this.options.sameSite)),(c=V())&&(c.document.cookie=a)}catch(d){}return[2]}))}))},e.prototype.remove=function(e){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.set(e,null)];case 1:return t.sent(),[2]}}))}))},e.prototype.reset=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2]}))}))},e}(),K=function(){function e(){}return e.prototype.send=function(e,t){return Promise.resolve(null)},e.prototype.buildResponse=function(e){var t,n,i,r,s,u,a,c,d,l,f,p,h,v,g,y,m,b,_,I,w,E;if("object"!==typeof e)return null;var S=e.code||0,T=this.buildStatus(S);switch(T){case o.Success:return{status:T,statusCode:S,body:{eventsIngested:null!==(t=e.events_ingested)&&void 0!==t?t:0,payloadSizeBytes:null!==(n=e.payload_size_bytes)&&void 0!==n?n:0,serverUploadTime:null!==(i=e.server_upload_time)&&void 0!==i?i:0}};case o.Invalid:return{status:T,statusCode:S,body:{error:null!==(r=e.error)&&void 0!==r?r:"",missingField:null!==(s=e.missing_field)&&void 0!==s?s:"",eventsWithInvalidFields:null!==(u=e.events_with_invalid_fields)&&void 0!==u?u:{},eventsWithMissingFields:null!==(a=e.events_with_missing_fields)&&void 0!==a?a:{},eventsWithInvalidIdLengths:null!==(c=e.events_with_invalid_id_lengths)&&void 0!==c?c:{},epsThreshold:null!==(d=e.eps_threshold)&&void 0!==d?d:0,exceededDailyQuotaDevices:null!==(l=e.exceeded_daily_quota_devices)&&void 0!==l?l:{},silencedDevices:null!==(f=e.silenced_devices)&&void 0!==f?f:[],silencedEvents:null!==(p=e.silenced_events)&&void 0!==p?p:[],throttledDevices:null!==(h=e.throttled_devices)&&void 0!==h?h:{},throttledEvents:null!==(v=e.throttled_events)&&void 0!==v?v:[]}};case o.PayloadTooLarge:return{status:T,statusCode:S,body:{error:null!==(g=e.error)&&void 0!==g?g:""}};case o.RateLimit:return{status:T,statusCode:S,body:{error:null!==(y=e.error)&&void 0!==y?y:"",epsThreshold:null!==(m=e.eps_threshold)&&void 0!==m?m:0,throttledDevices:null!==(b=e.throttled_devices)&&void 0!==b?b:{},throttledUsers:null!==(_=e.throttled_users)&&void 0!==_?_:{},exceededDailyQuotaDevices:null!==(I=e.exceeded_daily_quota_devices)&&void 0!==I?I:{},exceededDailyQuotaUsers:null!==(w=e.exceeded_daily_quota_users)&&void 0!==w?w:{},throttledEvents:null!==(E=e.throttled_events)&&void 0!==E?E:[]}};case o.Timeout:default:return{status:T,statusCode:S}}},e.prototype.buildStatus=function(e){return e>=200&&e<300?o.Success:429===e?o.RateLimit:413===e?o.PayloadTooLarge:408===e?o.Timeout:e>=400&&e<500?o.Invalid:e>=500?o.Failed:o.Unknown},e}(),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r.ZT)(t,e),t.prototype.send=function(e,t){return(0,r.mG)(this,void 0,void 0,(function(){var n,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if("undefined"===typeof fetch)throw new Error("FetchTransport is not supported");return n={headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify(t),method:"POST"},[4,fetch(e,n)];case 1:return[4,r.sent().json()];case 2:return i=r.sent(),[2,this.buildResponse(i)]}}))}))},t}(K),Z=function(){function e(e){this.storage=e}return e.prototype.isEnabled=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,n,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(!this.storage)return[2,!1];t=String(Date.now()),n=new e(this.storage),i="AMP_TEST",r.label=1;case 1:return r.trys.push([1,4,5,7]),[4,n.set(i,t)];case 2:return r.sent(),[4,n.get(i)];case 3:return[2,r.sent()===t];case 4:return r.sent(),[2,!1];case 5:return[4,n.remove(i)];case 6:return r.sent(),[7];case 7:return[2]}}))}))},e.prototype.get=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.getRaw(e)];case 1:return(t=n.sent())?[2,JSON.parse(t)]:[2,void 0];case 2:return n.sent(),console.error("[Amplitude] Error: Could not get value from storage"),[2,void 0];case 3:return[2]}}))}))},e.prototype.getRaw=function(e){var t;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return[2,(null===(t=this.storage)||void 0===t?void 0:t.getItem(e))||void 0]}))}))},e.prototype.set=function(e,t){var n;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(i){try{null===(n=this.storage)||void 0===n||n.setItem(e,JSON.stringify(t))}catch(r){}return[2]}))}))},e.prototype.remove=function(e){var t;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){try{null===(t=this.storage)||void 0===t||t.removeItem(e)}catch(i){}return[2]}))}))},e.prototype.reset=function(){var e;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){try{null===(e=this.storage)||void 0===e||e.clear()}catch(n){}return[2]}))}))},e}(),z=1e3,W=function(e){function t(t){var n,i=this;return(i=e.call(this,null===(n=V())||void 0===n?void 0:n.localStorage)||this).loggerProvider=null===t||void 0===t?void 0:t.loggerProvider,i}return(0,r.ZT)(t,e),t.prototype.set=function(t,n){var i;return(0,r.mG)(this,void 0,void 0,(function(){var o;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return Array.isArray(n)&&n.length>z?(o=n.length-z,[4,e.prototype.set.call(this,t,n.slice(0,z))]):[3,2];case 1:return r.sent(),null===(i=this.loggerProvider)||void 0===i||i.error("Failed to save ".concat(o," events because the queue length exceeded ").concat(z,".")),[3,4];case 2:return[4,e.prototype.set.call(this,t,n)];case 3:r.sent(),r.label=4;case 4:return[2]}}))}))},t}(Z),Y=function(e){function t(){var t;return e.call(this,null===(t=V())||void 0===t?void 0:t.sessionStorage)||this}return(0,r.ZT)(t,e),t}(Z),X=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={done:4},t}return(0,r.ZT)(t,e),t.prototype.send=function(e,t){return(0,r.mG)(this,void 0,void 0,(function(){var n=this;return(0,r.Jh)(this,(function(i){return[2,new Promise((function(i,r){"undefined"===typeof XMLHttpRequest&&r(new Error("XHRTransport is not supported."));var o=new XMLHttpRequest;o.open("POST",e,!0),o.onreadystatechange=function(){if(o.readyState===n.state.done)try{var e=o.responseText,t=JSON.parse(e),s=n.buildResponse(t);i(s)}catch(u){r(u)}},o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Accept","*/*"),o.send(JSON.stringify(t))}))]}))}))},t}(K),H=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r.ZT)(t,e),t.prototype.send=function(e,t){return(0,r.mG)(this,void 0,void 0,(function(){var n=this;return(0,r.Jh)(this,(function(i){return[2,new Promise((function(i,r){var o=V();if(!(null===o||void 0===o?void 0:o.navigator.sendBeacon))throw new Error("SendBeaconTransport is not supported");try{var s=JSON.stringify(t);return i(o.navigator.sendBeacon(e,JSON.stringify(t))?n.buildResponse({code:200,events_ingested:t.events.length,payload_size_bytes:s.length,server_upload_time:Date.now()}):n.buildResponse({code:500}))}catch(u){r(u)}}))]}))}))},t}(K),ee=function(e,t,n){return void 0===n&&(n=!0),(0,r.mG)(void 0,void 0,void 0,(function(){var i,o,s,u,a,c,d,f,p;return(0,r.Jh)(this,(function(h){switch(h.label){case 0:return i=function(e){return"".concat(l.xp.toLowerCase(),"_").concat(e.substring(0,6))}(e),[4,t.getRaw(i)];case 1:return(o=h.sent())?n?[4,t.remove(i)]:[3,3]:[2,{optOut:!1}];case 2:h.sent(),h.label=3;case 3:return s=(0,r.CR)(o.split("."),6),u=s[0],a=s[1],c=s[2],d=s[3],f=s[4],p=s[5],[2,{deviceId:u,userId:ne(a),sessionId:te(d),lastEventId:te(p),lastEventTime:te(f),optOut:Boolean(c)}]}}))}))},te=function(e){var t=parseInt(e,32);if(!isNaN(t))return t},ne=function(e){if(atob&&escape&&e)try{return decodeURIComponent(escape(atob(e)))}catch(t){return}},ie="[Amplitude]",re=("".concat(ie," Page Viewed"),"".concat(ie," Form Started")),oe="".concat(ie," Form Submitted"),se="".concat(ie," File Downloaded"),ue="session_start",ae="session_end",ce="".concat(ie," File Extension"),de="".concat(ie," File Name"),le="".concat(ie," Link ID"),fe="".concat(ie," Link Text"),pe="".concat(ie," Link URL"),he="".concat(ie," Form ID"),ve="".concat(ie," Form Name"),ge="".concat(ie," Form Destination"),ye="cookie",me=function(e){function t(t,n,r,o,s,u,a,c,d,l,f,p,v,g,y,m,b,_,I,w,E,S,T,O,k,P,R,x,U){void 0===r&&(r=new j),void 0===o&&(o={domain:"",expiration:365,sameSite:"Lax",secure:!1,upgrade:!0}),void 0===a&&(a=1e3),void 0===c&&(c=5),void 0===d&&(d=30),void 0===l&&(l=ye),void 0===y&&(y=new h),void 0===m&&(m=i.Warn),void 0===_&&(_=!1),void 0===E&&(E=""),void 0===S&&(S="US"),void 0===O&&(O=18e5),void 0===k&&(k=new W({loggerProvider:y})),void 0===P&&(P={ipAddress:!0,language:!0,platform:!0}),void 0===R&&(R="fetch"),void 0===x&&(x=!1);var A=e.call(this,{apiKey:t,storageProvider:k,transportProvider:Ie(R)})||this;return A.apiKey=t,A.appVersion=n,A.cookieOptions=o,A.defaultTracking=s,A.flushIntervalMillis=a,A.flushMaxRetries=c,A.flushQueueSize=d,A.identityStorage=l,A.ingestionMetadata=f,A.instanceName=p,A.loggerProvider=y,A.logLevel=m,A.minIdLength=b,A.partnerId=I,A.plan=w,A.serverUrl=E,A.serverZone=S,A.sessionTimeout=O,A.storageProvider=k,A.trackingOptions=P,A.transport=R,A.useBatch=x,A._optOut=!1,A._cookieStorage=r,A.deviceId=u,A.lastEventId=v,A.lastEventTime=g,A.optOut=_,A.sessionId=T,A.userId=U,A.loggerProvider.enable(A.logLevel),A}return(0,r.ZT)(t,e),Object.defineProperty(t.prototype,"cookieStorage",{get:function(){return this._cookieStorage},set:function(e){this._cookieStorage!==e&&(this._cookieStorage=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"deviceId",{get:function(){return this._deviceId},set:function(e){this._deviceId!==e&&(this._deviceId=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userId",{get:function(){return this._userId},set:function(e){this._userId!==e&&(this._userId=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sessionId",{get:function(){return this._sessionId},set:function(e){this._sessionId!==e&&(this._sessionId=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"optOut",{get:function(){return this._optOut},set:function(e){this._optOut!==e&&(this._optOut=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastEventTime",{get:function(){return this._lastEventTime},set:function(e){this._lastEventTime!==e&&(this._lastEventTime=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastEventId",{get:function(){return this._lastEventId},set:function(e){this._lastEventId!==e&&(this._lastEventId=e,this.updateStorage())},enumerable:!1,configurable:!0}),t.prototype.updateStorage=function(){var e={deviceId:this._deviceId,userId:this._userId,sessionId:this._sessionId,optOut:this._optOut,lastEventTime:this._lastEventTime,lastEventId:this._lastEventId};this.cookieStorage.set(M(this.apiKey),e)},t}(g),be=function(e,t,n){return void 0===t&&(t={}),(0,r.mG)(void 0,void 0,void 0,(function(){var i,o,s,u,a,c,d,l,f,p,h,v,g,y,m,b,_,w,E,S,T,O,k,P,R,x,U,A,D,N,q,J,L,C,G,j,V,$,Q;return(0,r.Jh)(this,(function(K){switch(K.label){case 0:return i=t.identityStorage||ye,b={},i===ye?[3,1]:(s="",[3,5]);case 1:return null===(w=null===(_=t.cookieOptions)||void 0===_?void 0:_.domain)||void 0===w?[3,2]:(u=w,[3,4]);case 2:return[4,we()];case 3:u=K.sent(),K.label=4;case 4:s=u,K.label=5;case 5:return o=r.pi.apply(void 0,[(b.domain=s,b.expiration=365,b.sameSite="Lax",b.secure=!1,b.upgrade=!0,b),t.cookieOptions]),a=_e(t.identityStorage,o),[4,ee(e,a,null===(S=null===(E=t.cookieOptions)||void 0===E?void 0:E.upgrade)||void 0===S||S)];case 6:return c=K.sent(),[4,a.get(M(e))];case 7:return d=K.sent(),l=F(),f=null!==(P=null!==(k=null!==(O=null!==(T=t.deviceId)&&void 0!==T?T:l.deviceId)&&void 0!==O?O:null===d||void 0===d?void 0:d.deviceId)&&void 0!==k?k:c.deviceId)&&void 0!==P?P:I(),p=null!==(R=null===d||void 0===d?void 0:d.lastEventId)&&void 0!==R?R:c.lastEventId,h=null!==(x=null===d||void 0===d?void 0:d.lastEventTime)&&void 0!==x?x:c.lastEventTime,v=null!==(A=null!==(U=t.optOut)&&void 0!==U?U:null===d||void 0===d?void 0:d.optOut)&&void 0!==A?A:c.optOut,g=null!==(D=null===d||void 0===d?void 0:d.sessionId)&&void 0!==D?D:c.sessionId,y=null!==(q=null!==(N=t.userId)&&void 0!==N?N:null===d||void 0===d?void 0:d.userId)&&void 0!==q?q:c.userId,n.previousSessionDeviceId=null!==(J=null===d||void 0===d?void 0:d.deviceId)&&void 0!==J?J:c.deviceId,n.previousSessionUserId=null!==(L=null===d||void 0===d?void 0:d.userId)&&void 0!==L?L:c.userId,m={ipAddress:null===(G=null===(C=t.trackingOptions)||void 0===C?void 0:C.ipAddress)||void 0===G||G,language:null===(V=null===(j=t.trackingOptions)||void 0===j?void 0:j.language)||void 0===V||V,platform:null===(Q=null===($=t.trackingOptions)||void 0===$?void 0:$.platform)||void 0===Q||Q},[2,new me(e,t.appVersion,a,o,t.defaultTracking,f,t.flushIntervalMillis,t.flushMaxRetries,t.flushQueueSize,i,t.ingestionMetadata,t.instanceName,p,h,t.loggerProvider,t.logLevel,t.minIdLength,v,t.partnerId,t.plan,t.serverUrl,t.serverZone,g,t.sessionTimeout,t.storageProvider,m,t.transport,t.useBatch,y)]}}))}))},_e=function(e,t){switch(void 0===e&&(e=ye),void 0===t&&(t={}),e){case"localStorage":return new W;case"sessionStorage":return new Y;case"none":return new j;default:return new Q((0,r.pi)((0,r.pi)({},t),{expirationDays:t.expiration}))}},Ie=function(e){return"xhr"===e?new X:"beacon"===e?new H:new B},we=function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){var t,n,i,o,s,u,a;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return[4,(new Q).isEnabled()];case 1:if(!r.sent()||!e&&"undefined"===typeof location)return[2,""];for(t=null!==e&&void 0!==e?e:location.hostname,n=t.split("."),i=[],o="AMP_TLDTEST",s=n.length-2;s>=0;--s)i.push(n.slice(s).join("."));s=0,r.label=2;case 2:return s<i.length?(u=i[s],[4,(a=new Q({domain:"."+u})).set(o,1)]):[3,7];case 3:return r.sent(),[4,a.get(o)];case 4:return r.sent()?[4,a.remove(o)]:[3,6];case 5:return r.sent(),[2,"."+u];case 6:return s++,[3,2];case 7:return[2,""]}}))}))},Ee="dclid",Se="fbclid",Te="gbraid",Oe="gclid",ke="ko_click_id",Pe="li_fat_id",Re="msclkid",xe="rtd_cid",Ue="ttclid",Ae="twclid",De="wbraid",Ne={utm_campaign:void 0,utm_content:void 0,utm_id:void 0,utm_medium:void 0,utm_source:void 0,utm_term:void 0,referrer:void 0,referring_domain:void 0,dclid:void 0,gbraid:void 0,gclid:void 0,fbclid:void 0,ko_click_id:void 0,li_fat_id:void 0,msclkid:void 0,rtd_cid:void 0,ttclid:void 0,twclid:void 0,wbraid:void 0},qe=function(){function e(){}return e.prototype.parse=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2,(0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)({},Ne),this.getUtmParam()),this.getReferrer()),this.getClickIds())]}))}))},e.prototype.getUtmParam=function(){var e=F();return{utm_campaign:e.utm_campaign,utm_content:e.utm_content,utm_id:e.utm_id,utm_medium:e.utm_medium,utm_source:e.utm_source,utm_term:e.utm_term}},e.prototype.getReferrer=function(){var e,t,n={referrer:void 0,referring_domain:void 0};try{n.referrer=document.referrer||void 0,n.referring_domain=null!==(t=null===(e=n.referrer)||void 0===e?void 0:e.split("/")[2])&&void 0!==t?t:void 0}catch(i){}return n},e.prototype.getClickIds=function(){var e,t=F();return(e={})[Ee]=t[Ee],e[Se]=t[Se],e[Te]=t[Te],e[Oe]=t[Oe],e[ke]=t[ke],e[Pe]=t[Pe],e[Re]=t[Re],e[xe]=t[xe],e[Ue]=t[Ue],e[Ae]=t[Ae],e[De]=t[De],e},e}(),Je=function(e){var t=e.split(".");return t.length<=2?e:t.slice(t.length-2,t.length).join(".")},Le=function(e,t,n,i){void 0===i&&(i=!0);e.referrer;var o=e.referring_domain,s=(0,r._T)(e,["referrer","referring_domain"]),u=t||{},a=(u.referrer,u.referring_domain),c=(0,r._T)(u,["referrer","referring_domain"]);if(Ce(n.excludeReferrers,e.referring_domain))return!1;if(!i&&function(e){return Object.values(e).every((function(e){return!e}))}(e)&&t)return!1;var d=JSON.stringify(s)!==JSON.stringify(c),l=Je(o||"")!==Je(a||"");return!t||d||l},Ce=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=""),e.some((function(e){return e instanceof RegExp?e.test(t):e===t}))},Ge=function(e){var t=e;return t?(t.startsWith(".")&&(t=t.substring(1)),[new RegExp("".concat(t.replace(".","\\."),"$"))]):[]},je=function(e){var t=this;void 0===e&&(e={});var n={name:"@amplitude/plugin-web-attribution-browser",type:"before",setup:function(t,n){var i;return(0,r.mG)(this,void 0,void 0,(function(){var o,s,u,a,c,d,f,p;return(0,r.Jh)(this,(function(h){switch(h.label){case 0:return o=(0,r.pi)({initialEmptyValue:"EMPTY",resetSessionOnNewCampaign:!1,excludeReferrers:Ge(null===(i=t.cookieOptions)||void 0===i?void 0:i.domain)},e),t.loggerProvider.log("Installing @amplitude/plugin-web-attribution-browser."),s=t.cookieStorage,v=t.apiKey,void 0===(g="MKTG")&&(g=""),void 0===y&&(y=10),u=[l.xp,g,v.substring(0,y)].filter(Boolean).join("_"),[4,Promise.all([(new qe).parse(),s.get(u)])];case 1:return a=r.CR.apply(void 0,[h.sent(),2]),c=a[0],d=a[1],f=q(t.sessionTimeout,t.lastEventTime),Le(c,d,o,f)&&(o.resetSessionOnNewCampaign&&(n.setSessionId(Date.now()),t.loggerProvider.log("Created a new session for new campaign.")),t.loggerProvider.log("Tracking attribution."),p=function(e,t){var n=(0,r.pi)((0,r.pi)({},Ne),e),i=Object.entries(n).reduce((function(e,n){var i,o=(0,r.CR)(n,2),s=o[0],u=o[1];return e.setOnce("initial_".concat(s),null!==(i=null!==u&&void 0!==u?u:t.initialEmptyValue)&&void 0!==i?i:"EMPTY"),u?e.set(s,u):e.unset(s)}),new w.h);return k(i)}(c,o),n.track(p),s.set(u,c)),[2]}var v,g,y}))}))},execute:function(e){return(0,r.mG)(t,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return[2,e]}))}))}};return n},Me=function(e){var t={};for(var n in e){var i=e[n];i&&(t[n]=i)}return t},Ve=function(e){var t;void 0===e&&(e={});var n,i=V(),o=void 0,s=function(){return(0,r.mG)(void 0,void 0,void 0,(function(){var t,n,i;return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return n={event_type:null!==(i=e.eventType)&&void 0!==i?i:"[Amplitude] Page Viewed"},t=[{}],[4,Fe()];case 1:return[2,(n.event_properties=r.pi.apply(void 0,[r.pi.apply(void 0,t.concat([o.sent()])),{"[Amplitude] Page Domain":"undefined"!==typeof location&&location.hostname||"","[Amplitude] Page Location":"undefined"!==typeof location&&location.href||"","[Amplitude] Page Path":"undefined"!==typeof location&&location.pathname||"","[Amplitude] Page Title":"undefined"!==typeof document&&document.title||"","[Amplitude] Page URL":"undefined"!==typeof location&&location.href.split("?")[0]||""}]),n)]}}))}))},u=function(){return"undefined"===typeof e.trackOn||"function"===typeof e.trackOn&&e.trackOn()},a="undefined"!==typeof location?location.href:null,c=function(){return(0,r.mG)(void 0,void 0,void 0,(function(){var n,i,c,d;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n=location.href,i=Qe(e.trackHistoryChanges,n,a||"")&&u(),a=n,i?(null===o||void 0===o||o.log("Tracking page view event"),null!==t&&void 0!==t?[3,1]:(void 0,[3,3])):[3,4];case 1:return d=(c=t).track,[4,s()];case 2:d.apply(c,[r.sent()]),r.label=3;case 3:r.label=4;case 4:return[2]}}))}))},d=function(){c()};return{name:"@amplitude/plugin-page-view-tracking-browser",type:"enrichment",setup:function(e,a){return(0,r.mG)(void 0,void 0,void 0,(function(){var l,f;return(0,r.Jh)(this,(function(p){switch(p.label){case 0:return t=a,(o=e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"),i&&(i.addEventListener("popstate",d),n=i.history.pushState,i.history.pushState=new Proxy(i.history.pushState,{apply:function(e,t,n){var i=(0,r.CR)(n,3),o=i[0],s=i[1],u=i[2];e.apply(t,[o,s,u]),c()}})),u()?(o.log("Tracking page view event"),f=(l=t).track,[4,s()]):[3,2];case 1:f.apply(l,[p.sent()]),p.label=2;case 2:return[2]}}))}))},execute:function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(i){switch(i.label){case 0:return"attribution"===e.trackOn&&$e(t)?(null===o||void 0===o||o.log("Enriching campaign event to page view event with campaign parameters"),[4,s()]):[3,2];case 1:n=i.sent(),t.event_type=n.event_type,t.event_properties=(0,r.pi)((0,r.pi)({},t.event_properties),n.event_properties),i.label=2;case 2:return[2,t]}}))}))},teardown:function(){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return i&&(i.removeEventListener("popstate",d),n&&(i.history.pushState=n)),[2]}))}))}}},Fe=function(){return(0,r.mG)(void 0,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return e=Me,[4,(new qe).parse()];case 1:return[2,e.apply(void 0,[t.sent()])]}}))}))},$e=function(e){if("$identify"===e.event_type&&e.user_properties){var t=e.user_properties,n=t[E.h9.SET]||{},i=t[E.h9.UNSET]||{},o=(0,r.ev)((0,r.ev)([],(0,r.CR)(Object.keys(n)),!1),(0,r.CR)(Object.keys(i)),!1);return Object.keys(Ne).every((function(e){return o.includes(e)}))}return!1},Qe=function(e,t,n){return"pathOnly"===e?t.split("?")[0]!==n.split("?")[0]:t!==n},Ke=function(){var e,t=[],n=function(e,n,i){e.addEventListener(n,i),t.push({element:e,type:n,handler:i})};return{name:"@amplitude/plugin-form-interaction-tracking-browser",type:"enrichment",setup:function(t,i){return(0,r.mG)(void 0,void 0,void 0,(function(){var o;return(0,r.Jh)(this,(function(r){return i?("undefined"===typeof document||(o=function(e){var t=!1;n(e,"change",(function(){var n;t||i.track(re,((n={})[he]=e.id,n[ve]=Be(e.name),n[ge]=e.action,n)),t=!0})),n(e,"submit",(function(){var n,r;t||i.track(re,((n={})[he]=e.id,n[ve]=Be(e.name),n[ge]=e.action,n)),i.track(oe,((r={})[he]=e.id,r[ve]=Be(e.name),r[ge]=e.action,r)),t=!1}))},Array.from(document.getElementsByTagName("form")).forEach(o),"undefined"!==typeof MutationObserver&&(e=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){"FORM"===e.nodeName&&o(e),"querySelectorAll"in e&&"function"===typeof e.querySelectorAll&&Array.from(e.querySelectorAll("form")).map(o)}))}))}))).observe(document.body,{subtree:!0,childList:!0})),[2]):(t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."),[2])}))}))},execute:function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return[2,e]}))}))},teardown:function(){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return null===e||void 0===e||e.disconnect(),t.forEach((function(e){var t=e.element,n=e.type,i=e.handler;null===t||void 0===t||t.removeEventListener(n,i)})),t=[],[2]}))}))}}},Be=function(e){if("string"===typeof e)return e},Ze=function(){var e,t=[];return{name:"@amplitude/plugin-file-download-tracking-browser",type:"enrichment",setup:function(n,i){return(0,r.mG)(void 0,void 0,void 0,(function(){var o,s;return(0,r.Jh)(this,(function(r){return i?("undefined"===typeof document||(o=function(e){var n;try{n=new URL(e.href,window.location.href)}catch(r){return}var o=s.exec(n.href),u=null===o||void 0===o?void 0:o[1];u&&function(e,n,i){e.addEventListener(n,i),t.push({element:e,type:n,handler:i})}(e,"click",(function(){var t;u&&i.track(se,((t={})[ce]=u,t[de]=n.pathname,t[le]=e.id,t[fe]=e.text,t[pe]=e.href,t))}))},s=/\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/,Array.from(document.getElementsByTagName("a")).forEach(o),"undefined"!==typeof MutationObserver&&(e=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){"A"===e.nodeName&&o(e),"querySelectorAll"in e&&"function"===typeof e.querySelectorAll&&Array.from(e.querySelectorAll("a")).map(o)}))}))}))).observe(document.body,{subtree:!0,childList:!0})),[2]):(n.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."),[2])}))}))},execute:function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return[2,e]}))}))},teardown:function(){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return null===e||void 0===e||e.disconnect(),t.forEach((function(e){var t=e.element,n=e.type,i=e.handler;null===t||void 0===t||t.removeEventListener(n,i)})),t=[],[2]}))}))}}},ze=!1,We=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r.ZT)(t,e),t.prototype.init=function(e,t,n){var i,o;return void 0===e&&(e=""),arguments.length>2?(i=t,o=n):"string"===typeof t?(i=t,o=void 0):(i=null===t||void 0===t?void 0:t.userId,o=t),d(this._init((0,r.pi)((0,r.pi)({},o),{userId:i,apiKey:e})))},t.prototype._init=function(t){var n,i;return(0,r.mG)(this,void 0,void 0,(function(){var o,s,u,a,c=this;return(0,r.Jh)(this,(function(d){switch(d.label){case 0:return this.initializing?[2]:(this.initializing=!0,[4,be(t.apiKey,t,this)]);case 1:return o=d.sent(),[4,e.prototype._init.call(this,o)];case 2:return d.sent(),this.setSessionId(null!==(i=null!==(n=t.sessionId)&&void 0!==n?n:this.config.sessionId)&&void 0!==i?i:Date.now()),(s=x(t.instanceName)).identityStore.setIdentity({userId:this.config.userId,deviceId:this.config.deviceId}),[4,this.add(new _).promise];case 3:return d.sent(),[4,this.add(new G).promise];case 4:return d.sent(),[4,this.add(new U).promise];case 5:return d.sent(),f=this.config,ze||void 0!==f.defaultTracking||(f.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."),ze=!0),l=this.config.defaultTracking,A(l,"fileDownloads")?[4,this.add(Ze()).promise]:[3,7];case 6:d.sent(),d.label=7;case 7:return function(e){return A(e,"formInteractions")}(this.config.defaultTracking)?[4,this.add(Ke()).promise]:[3,9];case 8:d.sent(),d.label=9;case 9:return D(this.config.defaultTracking)?(u=function(e){return D(e.defaultTracking)&&e.defaultTracking&&"object"===typeof e.defaultTracking&&e.defaultTracking.attribution&&"object"===typeof e.defaultTracking.attribution?(0,r.pi)({},e.defaultTracking.attribution):{}}(this.config),a=je(u),[4,this.add(a).promise]):[3,11];case 10:d.sent(),d.label=11;case 11:return[4,this.add(Ve(N(this.config))).promise];case 12:return d.sent(),this.initializing=!1,[4,this.runQueuedFunctions("dispatchQ")];case 13:return d.sent(),s.eventBridge.setEventReceiver((function(e){c.track(e.eventType,e.eventProperties)})),[2]}var l,f}))}))},t.prototype.getUserId=function(){var e;return null===(e=this.config)||void 0===e?void 0:e.userId},t.prototype.setUserId=function(e){this.config?e===this.config.userId&&void 0!==e||(this.config.userId=e,function(e,t){x(t).identityStore.editIdentity().setUserId(e).commit()}(e,this.config.instanceName)):this.q.push(this.setUserId.bind(this,e))},t.prototype.getDeviceId=function(){var e;return null===(e=this.config)||void 0===e?void 0:e.deviceId},t.prototype.setDeviceId=function(e){this.config?(this.config.deviceId=e,function(e,t){x(t).identityStore.editIdentity().setDeviceId(e).commit()}(e,this.config.instanceName)):this.q.push(this.setDeviceId.bind(this,e))},t.prototype.reset=function(){this.setDeviceId(I()),this.setUserId(void 0)},t.prototype.getSessionId=function(){var e;return null===(e=this.config)||void 0===e?void 0:e.sessionId},t.prototype.setSessionId=function(e){var t;if(this.config){if(e!==this.config.sessionId){var n,i=this.getSessionId(),r=this.config.lastEventTime,o=null!==(t=this.config.lastEventId)&&void 0!==t?t:-1;this.config.sessionId=e,this.config.lastEventTime=void 0,n=this.config.defaultTracking,A(n,"sessions")&&(i&&r&&this.track(ae,void 0,{device_id:this.previousSessionDeviceId,event_id:++o,session_id:i,time:r+1,user_id:this.previousSessionUserId}),this.config.lastEventTime=this.config.sessionId,this.track(ue,void 0,{event_id:++o,session_id:this.config.sessionId,time:this.config.lastEventTime})),this.previousSessionDeviceId=this.config.deviceId,this.previousSessionUserId=this.config.userId}}else this.q.push(this.setSessionId.bind(this,e))},t.prototype.extendSession=function(){this.config?this.config.lastEventTime=Date.now():this.q.push(this.extendSession.bind(this))},t.prototype.setTransport=function(e){this.config?this.config.transportProvider=Ie(e):this.q.push(this.setTransport.bind(this,e))},t.prototype.identify=function(t,n){if(L(t)){var i=t._q;t._q=[],t=J(new w.h,i)}return(null===n||void 0===n?void 0:n.user_id)&&this.setUserId(n.user_id),(null===n||void 0===n?void 0:n.device_id)&&this.setDeviceId(n.device_id),e.prototype.identify.call(this,t,n)},t.prototype.groupIdentify=function(t,n,i,r){if(L(i)){var o=i._q;i._q=[],i=J(new w.h,o)}return e.prototype.groupIdentify.call(this,t,n,i,r)},t.prototype.revenue=function(t,n){if(L(t)){var i=t._q;t._q=[],t=J(new T,i)}return e.prototype.revenue.call(this,t,n)},t.prototype.process=function(t){return(0,r.mG)(this,void 0,void 0,(function(){var n,i;return(0,r.Jh)(this,(function(r){return n=Date.now(),i=q(this.config.sessionTimeout,this.config.lastEventTime),t.event_type===ue||t.event_type===ae||t.session_id&&t.session_id!==this.getSessionId()||!i||this.setSessionId(n),[2,e.prototype.process.call(this,t)]}))}))},t}(P),Ye=function(){var e=new We;return{init:c(e.init.bind(e),"init",s(e),a(e,["config"])),add:c(e.add.bind(e),"add",s(e),a(e,["config.apiKey","timeline.plugins"])),remove:c(e.remove.bind(e),"remove",s(e),a(e,["config.apiKey","timeline.plugins"])),track:c(e.track.bind(e),"track",s(e),a(e,["config.apiKey","timeline.queue.length"])),logEvent:c(e.logEvent.bind(e),"logEvent",s(e),a(e,["config.apiKey","timeline.queue.length"])),identify:c(e.identify.bind(e),"identify",s(e),a(e,["config.apiKey","timeline.queue.length"])),groupIdentify:c(e.groupIdentify.bind(e),"groupIdentify",s(e),a(e,["config.apiKey","timeline.queue.length"])),setGroup:c(e.setGroup.bind(e),"setGroup",s(e),a(e,["config.apiKey","timeline.queue.length"])),revenue:c(e.revenue.bind(e),"revenue",s(e),a(e,["config.apiKey","timeline.queue.length"])),flush:c(e.flush.bind(e),"flush",s(e),a(e,["config.apiKey","timeline.queue.length"])),getUserId:c(e.getUserId.bind(e),"getUserId",s(e),a(e,["config","config.userId"])),setUserId:c(e.setUserId.bind(e),"setUserId",s(e),a(e,["config","config.userId"])),getDeviceId:c(e.getDeviceId.bind(e),"getDeviceId",s(e),a(e,["config","config.deviceId"])),setDeviceId:c(e.setDeviceId.bind(e),"setDeviceId",s(e),a(e,["config","config.deviceId"])),reset:c(e.reset.bind(e),"reset",s(e),a(e,["config","config.userId","config.deviceId"])),getSessionId:c(e.getSessionId.bind(e),"getSessionId",s(e),a(e,["config"])),setSessionId:c(e.setSessionId.bind(e),"setSessionId",s(e),a(e,["config"])),extendSession:c(e.extendSession.bind(e),"extendSession",s(e),a(e,["config"])),setOptOut:c(e.setOptOut.bind(e),"setOptOut",s(e),a(e,["config"])),setTransport:c(e.setTransport.bind(e),"setTransport",s(e),a(e,["config"]))}};Ye()},22946:(e,t,n)=>{n.d(t,{V:()=>d});var i=function(){function e(){}return e.prototype.getApplicationContext=function(){return{versionName:this.versionName,language:r(),platform:"Web",os:void 0,deviceModel:void 0}},e}(),r=function(){return"undefined"!==typeof navigator&&(navigator.languages&&navigator.languages[0]||navigator.language)||""},o=function(){function e(){this.queue=[]}return e.prototype.logEvent=function(e){this.receiver?this.receiver(e):this.queue.length<512&&this.queue.push(e)},e.prototype.setEventReceiver=function(e){this.receiver=e,this.queue.length>0&&(this.queue.forEach((function(t){e(t)})),this.queue=[])},e}(),s=function(){return s=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},u=function(e,t){var n=typeof e;if(n!==typeof t)return!1;for(var i=0,r=["string","number","boolean","undefined"];i<r.length;i++){if(r[i]===n)return e===t}if(null==e&&null==t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;var o=Array.isArray(e),s=Array.isArray(t);if(o!==s)return!1;if(!o||!s){var a=Object.keys(e).sort(),c=Object.keys(t).sort();if(!u(a,c))return!1;var d=!0;return Object.keys(e).forEach((function(n){u(e[n],t[n])||(d=!1)})),d}for(var l=0;l<e.length;l++)if(!u(e[l],t[l]))return!1;return!0};Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]];return i});var a=function(){function e(){this.identity={userProperties:{}},this.listeners=new Set}return e.prototype.editIdentity=function(){var e=this,t=s({},this.identity.userProperties),n=s(s({},this.identity),{userProperties:t});return{setUserId:function(e){return n.userId=e,this},setDeviceId:function(e){return n.deviceId=e,this},setUserProperties:function(e){return n.userProperties=e,this},setOptOut:function(e){return n.optOut=e,this},updateUserProperties:function(e){for(var t=n.userProperties||{},i=0,r=Object.entries(e);i<r.length;i++){var o=r[i],s=o[0],u=o[1];switch(s){case"$set":for(var a=0,c=Object.entries(u);a<c.length;a++){var d=c[a],l=d[0],f=d[1];t[l]=f}break;case"$unset":for(var p=0,h=Object.keys(u);p<h.length;p++){delete t[l=h[p]]}break;case"$clearAll":t={}}}return n.userProperties=t,this},commit:function(){return e.setIdentity(n),this}}},e.prototype.getIdentity=function(){return s({},this.identity)},e.prototype.setIdentity=function(e){var t=s({},this.identity);this.identity=s({},e),u(t,this.identity)||this.listeners.forEach((function(t){t(e)}))},e.prototype.addIdentityListener=function(e){this.listeners.add(e)},e.prototype.removeIdentityListener=function(e){this.listeners.delete(e)},e}(),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof n.g?n.g:self,d=function(){function e(){this.identityStore=new a,this.eventBridge=new o,this.applicationContextProvider=new i}return e.getInstance=function(t){return c.analyticsConnectorInstances||(c.analyticsConnectorInstances={}),c.analyticsConnectorInstances[t]||(c.analyticsConnectorInstances[t]=new e),c.analyticsConnectorInstances[t]},e}()},45805:(e,t,n)=>{n.d(t,{EG:()=>s,RE:()=>c,f1:()=>o,h8:()=>a,q$:()=>i,xp:()=>r,y_:()=>u});var i="-",r="AMP",o="".concat(r,"_unsent"),s="https://api2.amplitude.com/2/httpapi",u="https://api.eu.amplitude.com/2/httpapi",a="https://api2.amplitude.com/batch",c="https://api.eu.amplitude.com/batch"},2990:(e,t,n)=>{n.d(t,{h:()=>u});var i=n(29388),r=n(1739),o=n(45805),s=n(63448),u=function(){function e(){this._propertySet=new Set,this._properties={}}return e.prototype.getUserProperties=function(){return(0,i.pi)({},this._properties)},e.prototype.set=function(e,t){return this._safeSet(r.h9.SET,e,t),this},e.prototype.setOnce=function(e,t){return this._safeSet(r.h9.SET_ONCE,e,t),this},e.prototype.append=function(e,t){return this._safeSet(r.h9.APPEND,e,t),this},e.prototype.prepend=function(e,t){return this._safeSet(r.h9.PREPEND,e,t),this},e.prototype.postInsert=function(e,t){return this._safeSet(r.h9.POSTINSERT,e,t),this},e.prototype.preInsert=function(e,t){return this._safeSet(r.h9.PREINSERT,e,t),this},e.prototype.remove=function(e,t){return this._safeSet(r.h9.REMOVE,e,t),this},e.prototype.add=function(e,t){return this._safeSet(r.h9.ADD,e,t),this},e.prototype.unset=function(e){return this._safeSet(r.h9.UNSET,e,o.q$),this},e.prototype.clearAll=function(){return this._properties={},this._properties[r.h9.CLEAR_ALL]=o.q$,this},e.prototype._safeSet=function(e,t,n){if(this._validate(e,t,n)){var i=this._properties[e];return void 0===i&&(i={},this._properties[e]=i),i[t]=n,this._propertySet.add(t),!0}return!1},e.prototype._validate=function(e,t,n){return void 0===this._properties[r.h9.CLEAR_ALL]&&(!this._propertySet.has(t)&&(e===r.h9.ADD?"number"===typeof n:e===r.h9.UNSET||e===r.h9.REMOVE||(0,s.T)(t,n)))},e}()},63448:(e,t,n)=>{n.d(t,{L:()=>r,T:()=>o});var i=n(29388),r=function(e){if(Object.keys(e).length>1e3)return!1;for(var t in e){var n=e[t];if(!o(t,n))return!1}return!0},o=function(e,t){var n,o;if("string"!==typeof e)return!1;if(Array.isArray(t)){var s=!0;try{for(var u=(0,i.XA)(t),a=u.next();!a.done;a=u.next()){var c=a.value;if(Array.isArray(c))return!1;if("object"===typeof c)s=s&&r(c);else if(!["number","string"].includes(typeof c))return!1;if(!s)return!1}}catch(d){n={error:d}}finally{try{a&&!a.done&&(o=u.return)&&o.call(u)}finally{if(n)throw n.error}}}else{if(null===t||void 0===t)return!1;if("object"===typeof t)return r(t);if(!["number","string","boolean"].includes(typeof t))return!1}return!0}},1739:(e,t,n)=>{var i,r,o;n.d(t,{JU:()=>o,al:()=>r,h9:()=>i}),function(e){e.SET="$set",e.SET_ONCE="$setOnce",e.ADD="$add",e.APPEND="$append",e.PREPEND="$prepend",e.REMOVE="$remove",e.PREINSERT="$preInsert",e.POSTINSERT="$postInsert",e.UNSET="$unset",e.CLEAR_ALL="$clearAll"}(i||(i={})),function(e){e.REVENUE_PRODUCT_ID="$productId",e.REVENUE_QUANTITY="$quantity",e.REVENUE_PRICE="$price",e.REVENUE_TYPE="$revenueType",e.REVENUE="$revenue"}(r||(r={})),function(e){e.IDENTIFY="$identify",e.GROUP_IDENTIFY="$groupidentify",e.REVENUE="revenue_amount"}(o||(o={}))},29388:(e,t,n)=>{n.d(t,{CR:()=>d,Jh:()=>a,XA:()=>c,ZT:()=>r,_T:()=>s,ev:()=>l,mG:()=>u,pi:()=>o});var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)};function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function u(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{a(i.next(e))}catch(t){o(t)}}function u(e){try{a(i.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((i=i.apply(e,t||[])).next())}))}function a(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(s=0)),s;)try{if(n=1,i&&(r=2&u[0]?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,i=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){s.label=u[1];break}if(6===u[0]&&s.label<r[1]){s.label=r[1],r=u;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(u);break}r[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(a){u=[6,a],i=0}finally{n=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}Object.create;function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)s.push(i.value)}catch(u){r={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return s}function l(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create}}]);
//# sourceMappingURL=474.f88e3178.chunk.js.mapevgTableBackgroundAltColor: var(--evgLightColor);
--evgTableSecondaryBackgroundColor: var(--evgLightColor);
--evgTableSecondaryBackgroundAltColor: var(--evgGreyColor);
/* StockChart */
--evgStockChartStockChartMainColor: var(--evgPrimaryColor);
--evgStockChartStockChartMarkerColor: var(--evgAltColor);
--evgStockChartStockChartDividerColor: var(--evgGreyColor);
--evgStockChartStockChartTimelineSelectorColor: var(--evgPrimaryColor);
--evgStockChartFontFamily: IBM Plex Sans Regular, sans-serif;
--evgStockChartFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontColor: var(--evgBodyTextColor);
--evgStockChartFontWeight: normal;
--evgStockChartBackgroundColor: var(--evgLightColor);
/* Pagination */
--evgPaginationFontFamily: IBM Plex Sans Regular, sans-serif;
--evgPaginationFontSizeL: calc(var(--evgRootFontSize) * 1.33);
--evgPaginationFontSizeM: calc(var(--evgRootFontSize) * 1.33);
--evgPaginationFontSizeS: calc(var(--evgRootFontSize) * 1.33);
--evgPaginationFontColor: var(--evgBrand1Color);
--evgPaginationFontAltColor: var(--evgBrand1Color);
--evgPaginationFontHoverColor: var(--evgBrand1Color);
--evgPaginationFontWeight: normal;
--evgPaginationBorderColor: var(--evgBorderColor);
--evgPaginationBorderHoverColor: var(--evgBorderColor);
--evgPaginationBorderActiveColor: var(--evgBorderColor);
--evgPaginationBorderRadius: 5px;
--evgPaginationBackgroundColor: var(--evgSuccessColor);
--evgPaginationBackgroundHoverColor: var(--evgPrimaryColor);
--evgPaginationBackgroundActiveColor: var(--evgPrimaryColor);
/* Input */
--evgInputPlaceholderColor: var(--evgGreyColor);
--evgInputShowPlaceholder: visible;
--evgInputShowLabel: visible;
--evgInputFontFamily: IBM Plex Sans Regular, sans-serif;
--evgInputFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontColor: var(--evgBodyTextColor);
--evgInputFontWeight: normal;
--evgInputFontLineHeight: 1;
--evgInputFontCapitalization: none;
--evgInputSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontColor: var(--evgBodyTextColor);
--evgInputSecondaryFontWeight: normal;
--evgInputSecondaryFontLineHeight: 1;
--evgInputSecondaryFontCapitalization: capitalize;
--evgInputBorderColor: var(--evgBorderColor);
--evgInputBorderFocusColor: var(--evgPrimaryColor);
--evgInputBorderRadius: 0;
--evgInputBackgroundColor: var(--evgLightColor);
/* RadioCheckbox */
--evgRadioCheckboxFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryBorderColor: var(--evgLightColor);
--evgRadioCheckboxSecondaryBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxFontFamily: IBM Plex Sans Regular, sans-serif;
--evgRadioCheckboxFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontColor: var(--evgLightColor);
--evgRadioCheckboxFontWeight: normal;
--evgRadioCheckboxFontLineHeight: 1.2;
--evgRadioCheckboxFontCapitalization: none;
--evgRadioCheckboxBorderColor: var(--evgLightColor);
--evgRadioCheckboxBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxBorderRadius: 0;
}

/* Table */
.evergreen table,
.evergreen .evergreen-table {

    --fontFamily: var(--evgTableFontFamily);
    --headingFontSize: var(--evgTableFontSizeL);
    --headingFontColor: var(--evgTableFontColor);
    --headingFontWeight: var(--evgTableFontWeight);
    --headingLineHeight: var(--evgTableFontLineHeight);
    --headingCapitalization: var(--evgTableFontCapitalization);
    --headerBackgroundColor: var(--evgTableBackgroundColor);

    --categoryFontColor: var(--evgTableSecondaryFontAltColor);
    --categoryBackgroundColor: var(--evgTableBackgroundAltColor);

    --rowFontSize: var(--evgTableSecondaryFontSizeL);
    --rowFontColor: var(--evgTableSecondaryFontColor);
    --rowFontWeight: var(--evgTableSecondaryFontWeight);
    --rowCapitalization: var(--evgTableSecondaryFontCapitalization);
    --rowBackgroundColor: var(--evgTableSecondaryBackgroundColor);
    --rowAltBackgroundColor: var(--evgTableZebra);

    --border: var(--evgTableRowUnderline);
    --borderColor: var(--evgTableBorderColor);
    --borderRadius: var(--evgTableBorderRadius);
}

.evergreen table tbody,
.evergreen table tbody tr,
.evergreen table tr,
.evergreen .evergreen-table tbody,
.evergreen .evergreen-table .evergreen-table-body,
.evergreen .evergreen-table tr,
.evergreen .evergreen-table .evergreen-table-row,
.evergreen .evergreen-table .evergreen-table-row th {
    font-size: var(--rowFontSize);
    font-family: var(--fontFamily);
    font-weight: var(--rowFontWeight);
    color: var(--rowFontColor);
    text-transform: var(--rowCapitalization);
    background-color: var(--rowBackgroundColor);
    border-bottom: var(--border);
    border-color: var(--borderColor);
}

.evergreen table tbody tr:nth-child(even),
.evergreen table tr:nth-child(even),
.evergreen .evergreen-table tbody tr:nth-child(even),
.evergreen .evergreen-table .evergreen-table-body tr:nth-child(even),
.evergreen .evergreen-table tr:nth-child(even),
.evergreen .evergreen-table .evergreen-table-row:nth-child(even) {
    background-color: var(--rowAltBackgroundColor);
}

.evergreen .evergreen-table tbody td.evergreen-table-category,
.evergreen .evergreen-table tbody th.evergreen-table-category,
.evergreen .evergreen-table .evergreen-table-category {
    color: var(--categoryFontColor);
    background-color: var(--categoryBackgroundColor);
}

.evergreen .evergreen-table thead,
.evergreen .evergreen-table .evergreen-table-header,
.evergreen .evergreen-table thead tr {
    --fontSize: var(--headingFontSize);
    --fontColor: var(--headingFontColor);
    --fontWeight: var(--headingFontWeight);
    --lineHeight: var(--headingLineHeight);
    --capitalization: var(--headingCapitalization);
    --backgroundColor: var(--headerBackgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
    background-color: var(--headerBackgroundColor);
}

.evergreen .evergreen-table-arrow {
    --fontSize: var(--evgTableFontSizeL);
    --fontColor: var(--evgTableFontColor);
    --fontWeight: var(--evgTableFontWeight);
    --lineHeight: var(--evgTableFontLineHeight);

    font-size: var(--fontSize);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
}

.evergreen .evergreen-table thead tr th {
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
}

.evergreen .evergreen-table tbody a,
.evergreen .evergreen-table tbody .evergreen-link {
    --fontFamily: var(--evgHyperlinkFontFamily);
    --fontColor: var(--evgHyperlinkFontColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --fontStyle: var(--evgHyperlinkFontStyle);
    --lineHeight: var(--evgHyperlinkFontLineHeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);

    font-family: var(--fontFamily);
    font-style: var(--fontStyle);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-table tbody a:hover,
.evergreen .evergreen-table tbody .evergreen-link:hover {

    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}


.evergreen .evergreen-table tbody a:focus,
.evergreen .evergreen-table tbody .evergreen-link:focus,
.evergreen .evergreen-table tbody a:focus-visible,
.evergreen .evergreen-table tbody .evergreen-link:focus-visible {

    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}


/** Responsive Tablet **/
@media (min-width: 481px) and (max-width: 1024px){

    .evergreen .evergreen-table tbody,
    .evergreen .evergreen-table .evergreen-table-body,
    .evergreen .evergreen-table tr {
        font-size: var(--evgTableSecondaryFontSizeM);
    }

    .evergreen .evergreen-table-arrow {
        font-size: var(--evgTableFontSizeM);
    }

    .evergreen .evergreen-table thead,
    .evergreen .evergreen-table .evergreen-table-header,
    .evergreen .evergreen-table thead tr,
    .evergreen .evergreen-table thead tr th {
        font-size: var(--evgTableFontSizeM);
    }
}

/** Responsive Mobile **/
@media (max-width: 480px){

    .evergreen table tbody,
    .evergreen table tbody tr,
    .evergreen .evergreen-table tbody,
    .evergreen .evergreen-table .evergreen-table-body,
    .evergreen .evergreen-table tr {
        font-size: var(--evgTableSecondaryFontSizeS);
    }

    .evergreen table thead,
    .evergreen table thead tr,
    .evergreen .evergreen-table thead,
    .evergreen .evergreen-table .evergreen-table-header,
    .evergreen .evergreen-table thead tr,
    .evergreen .evergreen-table thead tr th {
        font-size: var(--evgTableFontSizeS);
    }

    .evergreen .evergreen-table-arrow {
        font-size: var(--evgTableFontSizeS);
    }
}:root {
/*** COMMITTEE COMPOSITION ***/
/* Body */
--evgBodyFontColor: var(--evgBodyTextColor);
/* Hyperlink */
--evgHyperlinkFontFamily: IBM Plex Sans Regular, sans-serif;
--evgHyperlinkFontSizeL: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeM: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeS: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontColor: var(--evgBrand1Color);
--evgHyperlinkFontHoverColor: var(--evgBrand1Color);
--evgHyperlinkFontFocusColor: var(--evgBrand1Color);
--evgHyperlinkFontWeight: normal;
--evgHyperlinkFontStyle: normal;
--evgHyperlinkFontLineHeight: 1.3;
--evgHyperlinkFontCapitalization: uppercase;
--evgHyperlinkDecorationTextDecoration: none;
--evgHyperlinkDecorationTextDecorationHover: underline solid;
--evgHyperlinkDecorationTextDecorationFocus: none;
--evgHyperlinkDecorationTextDecorationColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationHoverColor: var(--evgBrand1Color);
--evgHyperlinkDecorationTextDecorationFocusColor: var(--evgInheritColor);
/* Button */
--evgButtonFontFamily: IBM Plex Sans Bold, serif;
--evgButtonFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgButtonFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgButtonFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgButtonFontColor: var(--evgBrand1Color);
--evgButtonFontHoverColor: var(--evgBrand1Color);
--evgButtonFontFocusColor: var(--evgBrand1Color);
--evgButtonFontWeight: bold;
--evgButtonFontStyle: normal;
--evgButtonFontLineHeight: 2.3;
--evgButtonFontCapitalization: uppercase;
--evgButtonBorderColor: var(--evgPrimaryColor);
--evgButtonBorderHoverColor: var(--evgAltColor);
--evgButtonBorderFocusColor: var(--evgPrimaryColor);
--evgButtonBorderRadius: 50px;
--evgButtonBackgroundColor: var(--evgPrimaryColor);
--evgButtonBackgroundHoverColor: var(--evgAltColor);
--evgButtonBackgroundFocusColor: var(--evgPrimaryColor);
--evgButtonPaddingItemPadding: initial;
--evgButtonPaddingVerticalPadding: 6px;
--evgButtonDecorationTextDecoration: none;
--evgButtonDecorationTextDecorationHover: none;
--evgButtonDecorationTextDecorationFocus: none;
--evgButtonDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationFocusColor: var(--evgLightColor);
/* ButtonAlt */
--evgButtonAltFontFamily: IBM Plex Sans Bold, serif;
--evgButtonAltFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontColor: var(--evgBrand1Color);
--evgButtonAltFontHoverColor: var(--evgBrand1Color);
--evgButtonAltFontFocusColor: var(--evgBrand1Color);
--evgButtonAltFontWeight: bold;
--evgButtonAltFontStyle: normal;
--evgButtonAltFontLineHeight: 1.3;
--evgButtonAltFontCapitalization: uppercase;
--evgButtonAltBorderColor: var(--evgAltColor);
--evgButtonAltBorderHoverColor: var(--evgPrimaryColor);
--evgButtonAltBorderFocusColor: var(--evgAltColor);
--evgButtonAltBorderRadius: 50px;
--evgButtonAltBackgroundColor: var(--evgAltColor);
--evgButtonAltBackgroundHoverColor: var(--evgPrimaryColor);
--evgButtonAltBackgroundFocusColor: var(--evgAltColor);
--evgButtonAltPaddingItemPadding: initial;
--evgButtonAltPaddingVerticalPadding: 20px;
--evgButtonAltDecorationTextDecoration: none;
--evgButtonAltDecorationTextDecorationHover: none;
--evgButtonAltDecorationTextDecorationFocus: none;
--evgButtonAltDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationFocusColor: var(--evgLightColor);
/* Dropdown */
--evgDropdownFontFamily: IBM Plex Sans Regular, sans-serif;
--evgDropdownFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgDropdownFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgDropdownFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgDropdownFontColor: var(--evgBrand1Color);
--evgDropdownFontFocusColor: var(--evgBrand1Color);
--evgDropdownFontWeight: normal;
--evgDropdownFontLineHeight: 1.3;
--evgDropdownFontCapitalization: none;
--evgDropdownBorderColor: var(--evgBorderColor);
--evgDropdownBorderFocusColor: var(--evgBorderColor);
--evgDropdownBorderRadius: 100px;
--evgDropdownBackgroundColor: var(--evgDarkenColor);
--evgDropdownBackgroundFocusColor: var(--evgDarkenColor);
/* Accordion */
--evgAccordionContentFontColor: var(--evgBodyTextColor);
--evgAccordionContentBackgroundColor: var(--evgSuccessColor);
--evgAccordionFontFamily: IBM Plex Sans Bold, serif;
--evgAccordionFontSizeL: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeM: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeS: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontColor: var(--evgBrand1Color);
--evgAccordionFontAltColor: var(--evgBrand1Color);
--evgAccordionFontFocusColor: var(--evgBrand1Color);
--evgAccordionFontWeight: bold;
--evgAccordionFontStyle: normal;
--evgAccordionFontLineHeight: 1.5;
--evgAccordionFontCapitalization: none;
--evgAccordionSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontColor: var(--evgBrand1Color);
--evgAccordionSecondaryFontAltColor: var(--evgBrand1Color);
--evgAccordionSecondaryFontWeight: bold;
--evgAccordionSecondaryFontStyle: normal;
--evgAccordionSecondaryFontLineHeight: 1.3;
--evgAccordionSecondaryFontCapitalization: none;
--evgAccordionSecondaryFontActiveColor: brand1;
--evgAccordionBorderColor: var(--evgBorderColor);
--evgAccordionBorderHoverColor: var(--evgBorderColor);
--evgAccordionBorderFocusColor: var(--evgBorderColor);
--evgAccordionBorderActiveColor: var(--evgBorderColor);
--evgAccordionBorderRadius: 0px;
--evgAccordionBackgroundColor: var(--evgLightColor);
--evgAccordionBackgroundHoverColor: var(--evgLightColor);
--evgAccordionBackgroundFocusColor: var(--evgLightColor);
--evgAccordionBackgroundActiveColor: var(--evgLightColor);
--evgAccordionPaddingItemPadding: 20px;
/* Tabs */
--evgTabsFontFamily: IBM Plex Sans Regular, sans-serif;
--evgTabsFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontColor: var(--evgLightColor);
--evgTabsFontAltColor: var(--evgPrimaryColor);
--evgTabsFontHoverColor: var(--evgPrimaryColor);
--evgTabsFontWeight: normal;
--evgTabsFontLineHeight: 1.3;
--evgTabsFontCapitalization: none;
--evgTabsBorderRadius: 0;
--evgTabsBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundHoverColor: var(--evgLightColor);
--evgTabsSecondaryBackgroundActiveColor: var(--evgLightColor);
/* List */
--evgListBulletStyle: disc;
--evgListBulletColor: var(--evgPrimaryColor);
--evgListFontFamily: IBM Plex Sans Regular, sans-serif;
--evgListFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgListFontColor: var(--evgBodyTextColor);
--evgListFontWeight: normal;
--evgListFontStyle: normal;
--evgListFontLineHeight: 1.5;
--evgListFontCapitalization: none;
--evgListDecorationTextDecoration: none;
--evgListDecorationTextDecorationHover: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationFocus: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationColor: var(--evgInheritColor);
/* Table */
--evgTableZebra: initial;
--evgTableRowUnderline: initial;
--evgTableFontFamily: IBM Plex Sans Regular, sans-serif;
--evgTableFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontColor: var(--evgLightColor);
--evgTableFontWeight: normal;
--evgTableFontLineHeight: 1;
--evgTableFontCapitalization: none;
--evgTableSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontColor: var(--evgBodyTextColor);
--evgTableSecondaryFontAltColor: var(--evgBodyTextColor);
--evgTableSecondaryFontWeight: normal;
--evgTableSecondaryFontCapitalization: none;
--evgTableBorderColor: var(--evgBodyTextColor);
--evgTableBorderRadius: initial;
--evgTableBackgroundColor: var(--evgPrimaryColor);
--evgTableBackgroundAltColor: var(--evgLightColor);
--evgTableSecondaryBackgroundColor: var(--evgLightColor);
--evgTableSecondaryBackgroundAltColor: var(--evgGreyColor);
/* StockChart */
--evgStockChartStockChartMainColor: var(--evgPrimaryColor);
--evgStockChartStockChartMarkerColor: var(--evgAltColor);
--evgStockChartStockChartDividerColor: var(--evgGreyColor);
--evgStockChartStockChartTimelineSelectorColor: var(--evgPrimaryColor);
--evgStockChartFontFamily: IBM Plex Sans Regular, sans-serif;
--evgStockChartFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontColor: var(--evgBodyTextColor);
--evgStockChartFontWeight: normal;
--evgStockChartBackgroundColor: var(--evgLightColor);
/* Pagination */
--evgPaginationFontFamily: IBM Plex Sans Regular, sans-serif;
--evgPaginationFontSizeL: calc(var(--evgRootFontSize) * 1.33);
--evgPaginationFontSizeM: calc(var(--evgRootFontSize) * 1.33);
--evgPaginationFontSizeS: calc(var(--evgRootFontSize) * 1.33);
--evgPaginationFontColor: var(--evgBrand1Color);
--evgPaginationFontAltColor: var(--evgBrand1Color);
--evgPaginationFontHoverColor: var(--evgBrand1Color);
--evgPaginationFontWeight: normal;
--evgPaginationBorderColor: var(--evgBorderColor);
--evgPaginationBorderHoverColor: var(--evgBorderColor);
--evgPaginationBorderActiveColor: var(--evgBorderColor);
--evgPaginationBorderRadius: 5px;
--evgPaginationBackgroundColor: var(--evgSuccessColor);
--evgPaginationBackgroundHoverColor: var(--evgPrimaryColor);
--evgPaginationBackgroundActiveColor: var(--evgPrimaryColor);
/* Input */
--evgInputPlaceholderColor: var(--evgGreyColor);
--evgInputShowPlaceholder: visible;
--evgInputShowLabel: visible;
--evgInputFontFamily: IBM Plex Sans Regular, sans-serif;
--evgInputFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontColor: var(--evgBodyTextColor);
--evgInputFontWeight: normal;
--evgInputFontLineHeight: 1;
--evgInputFontCapitalization: none;
--evgInputSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontColor: var(--evgBodyTextColor);
--evgInputSecondaryFontWeight: normal;
--evgInputSecondaryFontLineHeight: 1;
--evgInputSecondaryFontCapitalization: capitalize;
--evgInputBorderColor: var(--evgBorderColor);
--evgInputBorderFocusColor: var(--evgPrimaryColor);
--evgInputBorderRadius: 0;
--evgInputBackgroundColor: var(--evgLightColor);
/* RadioCheckbox */
--evgRadioCheckboxFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryBorderColor: var(--evgLightColor);
--evgRadioCheckboxSecondaryBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxFontFamily: IBM Plex Sans Regular, sans-serif;
--evgRadioCheckboxFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontColor: var(--evgLightColor);
--evgRadioCheckboxFontWeight: normal;
--evgRadioCheckboxFontLineHeight: 1.2;
--evgRadioCheckboxFontCapitalization: none;
--evgRadioCheckboxBorderColor: var(--evgLightColor);
--evgRadioCheckboxBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxBorderRadius: 0;
}

/* Committee */
.evergreen .evergreen-committee-composition {
    --backgroundColor: var(--evgModuleBackgroundColor);

    --fontFamily: var(--evgTableFontFamily);
    --headingFontColor: var(--evgTableFontColor);
    --headingFontWeight: var(--evgTableFontWeight);
    --headingLineHeight: var(--evgTableFontLineHeight);
    --headingCapitalization: var(--evgTableFontCapitalization);
    --headerBackgroundColor: var(--evgTableBackgroundColor);

    --categoryFontColor: var(--evgTableSecondaryFontAltColor);
    --categoryBackgroundColor: var(--evgTableBackgroundAltColor);

    --cellFontColor: var(--evgTableSecondaryFontColor);
    --cellFontWeight: var(--evgTableSecondaryFontWeight);
    --cellCapitalization: var(--evgTableSecondaryFontCapitalization);
    --rowBackgroundColor: var(--evgTableSecondaryBackgroundColor);
    --rowAltBackgroundColor: var(--evgTableZebra);

    --border: var(--evgTableRowUnderline);
    --borderColor: var(--evgTableBorderColor);
    --borderRadius: var(--evgTableBorderRadius);
}

.evergreen .evergreen-committee-composition .evergreen-committee-composition-table {
    table-layout: fixed;
}

.evergreen .evergreen-committee-composition thead,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-header,
.evergreen .evergreen-committee-composition thead tr {
    --fontSize: var(--headingFontSize);
    --fontColor: var(--headingFontColor);
    --fontWeight: var(--headingFontWeight);
    --lineHeight: var(--headingLineHeight);
    --capitalization: var(--headingCapitalization);
    --backgroundColor: var(--headerBackgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
    background-color: var(--headerBackgroundColor);
}

.evergreen .evergreen-committee-composition tbody .evergreen-committee-composition-row,
.evergreen .evergreen-committee-composition tbody .evergreen-committee-composition-row {
    font-family: var(--fontFamily);
    font-size: var(--cellFontSize);
    font-weight: var(--cellFontWeight);
    color: var(--cellFontColor);
    text-transform: var(--cellCapitalization);
    background-color: var(--rowBackgroundColor);
    border-bottom: var(--border);
    border-color: var(--borderColor);
}

.evergreen table tbody tr:nth-child(even),
.evergreen table tr:nth-child(even),
.evergreen .evergreen-committee-composition tbody tr:nth-child(even),
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr:nth-child(even),
.evergreen .evergreen-committee-composition tr:nth-child(even),
.evergreen .evergreen-committee-composition .evergreen-committee-composition-row:nth-child(even) {
    background-color: var(--rowAltBackgroundColor);
}


.evergreen .evergreen-committee-composition thead tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th,
.evergreen .evergreen-committee-composition tbody tr td,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
    width: 305px;
    padding: 20px 15px;
    overflow-wrap: break-word;
    text-align: center;
}

.evergreen .evergreen-committee-composition thead tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th {
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
}

.evergreen .evergreen-committee-composition tbody tr td,
.evergreen .evergreen-committee-composition tbody tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
    font-family: var(--fontFamily);
    font-size: var(--cellFontSize);
    font-weight: var(--cellFontWeight);
    color: var(--cellFontColor);
    text-transform: var(--cellCapitalization);
}

.evergreen .evergreen-committee-composition .committee-membership-options {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 15px;
    padding: 20px 15px;
    row-gap: 20px;
    column-gap: 30px;
}

.evergreen .evergreen-committee-composition .committee-membership-options li {
    font-family: var(--fontFamily);
    font-size: var(--cellFontSize);
    font-weight: var(--cellFontWeight);
    color: var(--cellFontColor);
    text-transform: var(--cellCapitalization);
    list-style: none;
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon {
    font-size: var(--cellFontSize);
    font-color: var(--iconColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.member {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--evgModuleBackgroundColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.comittee-chair {
    --iconColor: var(--evgPrimaryColor);
    --iconFilledColor: var(--evgPrimaryColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.board-chair {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--cellFontColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.lead-independent-director {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--cellFontColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.independent-director {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--evgModuleBackgroundColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.financial-expert {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--evgModuleBackgroundColor);
}

/** Responsive Desktop **/
@media (min-width: 1025px) {
    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition
    .evergreen-committee-composition-header tr th {
        font-size: var(--evgTableSecondaryFontSizeL);
    }

    .evergreen .evergreen-committee-composition {
        --cellFontSize: var(--evgTableSecondaryFontSizeL);
    }
}

/** Responsive Tablet **/
@media (max-width: 1024px){
    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th,
    .evergreen .evergreen-committee-composition tbody tr td,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
        width: 246px;
    }
}

@media (min-width: 481px) and (max-width: 1024px){
    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition
    .evergreen-committee-composition-header tr th {
        font-size: var(--evgTableSecondaryFontSizeM);
    }

    .evergreen .evergreen-committee-composition {
        --cellFontSize: var(--evgTableSecondaryFontSizeM);
    }

    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th,
    .evergreen .evergreen-committee-composition tbody tr td,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
        width: 246px;
    }

    .evergreen .evergreen-committee-composition tbody,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body,
    .evergreen .evergreen-committee-composition tr {
        font-size: var(--evgTableSecondaryFontSizeM);
    }

    .evergreen .evergreen-committee-composition thead,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header,
    .evergreen .evergreen-committee-composition thead tr,
    .evergreen .evergreen-committee-composition thead tr th {
        font-size: var(--evgTableFontSizeM);
    }
}

/** Responsive Mobile **/
@media (max-width: 480px){
    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition
    .evergreen-committee-composition-header tr th {
        font-size: var(--evgTableSecondaryFontSizeS);
    }

    .evergreen .evergreen-committee-composition {
        --cellFontSize: var(--evgTableSecondaryFontSizeS);
    }

    .evergreen .evergreen-committee-composition table tbody,
    .evergreen .evergreen-committee-composition table tbody tr,
    .evergreen .evergreen-committee-composition tbody,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body,
    .evergreen .evergreen-committee-composition tr {
        font-size: var(--evgTableSecondaryFontSizeS);
    }

    .evergreen .evergreen-committee-composition table thead,
    .evergreen .evergreen-committee-composition table thead tr,
    .evergreen .evergreen-committee-composition thead,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header,
    .evergreen .evergreen-committee-composition thead tr,
    .evergreen .evergreen-committee-composition thead tr th {
        font-size: var(--evgTableFontSizeS);
    }
}
/***** EVERGREEN STYLES *****/
.evergreen,
.evergreen-layout {
    --fontSize: var(--evgBodyFontSizeL);
    --fontFamily: var(--evgBodyFontFamily);
    --fontColor: var(--evgBodyFontColor);
    --fontWeight: var(--evgBodyFontWeight);
    --lineHeight: var(--evgBodyLineHeight);
    --capitalization: var(--evgBodyCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen-layout .evergreen-layout-header {
    position: relative;
    padding-top: 60px;
}

.evergreen {
    padding: 50px 0;
}

.evergreen.evergreen-no-padding {
    padding: 0;
}

.evergreen p {
    --fontSize: var(--evgBodyFontSizeL);
    --fontFamily: var(--evgBodyFontFamily);
    --fontColor: var(--evgBodyFontColor);
    --fontWeight: var(--evgBodyFontWeight);
    --lineHeight: var(--evgBodyLineHeight);
    --capitalization: var(--evgBodyCapitalization);
}

.evergreen h1 {
    --fontSize: var(--evgH1FontSizeL);
    --fontFamily: var(--evgH1FontFamily);
    --fontColor: var(--evgH1FontColor);
    --fontWeight: var(--evgH1FontWeight);
    --lineHeight: var(--evgH1LineHeight);
    --capitalization: var(--evgH1Capitalization);
}

.evergreen h2 {
    --fontSize: var(--evgH2FontSizeL);
    --fontFamily: var(--evgH2FontFamily);
    --fontColor: var(--evgH2FontColor);
    --fontWeight: var(--evgH2FontWeight);
    --lineHeight: var(--evgH2LineHeight);
    --capitalization: var(--evgH2Capitalization);
}

.evergreen h3 {
    --fontSize: var(--evgH3FontSizeL);
    --fontFamily: var(--evgH3FontFamily);
    --fontColor: var(--evgH3FontColor);
    --fontWeight: var(--evgH3FontWeight);
    --lineHeight: var(--evgH3LineHeight);
    --capitalization: var(--evgH3Capitalization);
}

.evergreen h4 {
    --fontSize: var(--evgH4FontSizeL);
    --fontFamily: var(--evgH4FontFamily);
    --fontColor: var(--evgH4FontColor);
    --fontWeight: var(--evgH4FontWeight);
    --lineHeight: var(--evgH4LineHeight);
    --capitalization: var(--evgH4Capitalization);
}

.evergreen h5 {
    --fontSize: var(--evgH5FontSizeL);
    --fontFamily: var(--evgH5FontFamily);
    --fontColor: var(--evgH5FontColor);
    --fontWeight: var(--evgH5FontWeight);
    --lineHeight: var(--evgH5LineHeight);
    --capitalization: var(--evgH5Capitalization);
}

.evergreen p,
.evergreen h1,
.evergreen h2,
.evergreen h3,
.evergreen h4,
.evergreen h5 {
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen h1,
.evergreen h2,
.evergreen h3,
.evergreen h4,
.evergreen h5 {
    border-bottom: none;
}

.evergreen-container--outer {
    --padding: var(--evgPaddingContainerPadding);

    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--padding);
    padding-right: var(--padding);
}

.evergreen *:focus,
.evergreen *:focus-visible {
    outline-width: 2px;
    outline-style: dotted;
    outline-color: inherit;
    outline-offset: 2px;
}

.evergreen-error {
    --fontColor: var(--evgErrorColor);

    color: var(--fontColor);
}

/* Footer */
.evergreen-layout .evergreen-pane.evergreen-pane--footer {
    --primaryColor: var(--evgFooterPrimaryColor);

    background-color: var(--primaryColor);
}

.evergreen-layout .evergreen-pane.evergreen-pane--sub-footer {
    --secondaryColor: var(--evgFooterSecondaryColor);

    background-color: var(--secondaryColor);
}

.evergreen .evergreen-checkbox label,
.evergreen .evergreen-radio label {
    --fontFamily: var(--evgRadioCheckboxFontFamily);
    --fontSize: var(--evgRadioCheckboxFontSizeL);
    --fontColor: var(--evgRadioCheckboxFontColor);
    --fontWeight: var(--evgRadioCheckboxFontWeight);
    --lineHeight: var(--evgRadioCheckboxFontLineHeight);
    --capitalization: var(--evgRadioCheckboxFontCapitalization);

    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-checkbox input[type="checkbox"] + label::before {
    --fillColor: var(--evgRadioCheckboxFillColor);
    --borderColor: var(--evgRadioCheckboxBorderColor);
    --borderRadius: var(--evgRadioCheckboxBorderRadius);

    background-color: var(--fillColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
}

.evergreen .evergreen-checkbox input[type="checkbox"]:checked + label::before {
    --fillColor: var(--evgRadioCheckboxFillActiveColor);
    --borderColor: var(--evgRadioCheckboxBorderActiveColor);
    --borderRadius: var(--evgRadioCheckboxBorderRadius);

    background-color: var(--fillColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
}

.evergreen .evergreen-radio input[type="radio"],
.evergreen .evergreen-radio input[type="checkbox"] {
    --fillColor: var(--evgRadioCheckboxSecondaryFillColor);
    --borderColor: var(--evgRadioCheckboxSecondaryBorderColor);

    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    appearance: none;
    margin: 0 10px 0 0;
    vertical-align: middle;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    border-radius: 100%;
    background-color: var(--fillColor);
    border-color: var(--borderColor);
}

.evergreen .evergreen-radio input[type="radio"]:checked {
    --fillColor: var(--evgRadioCheckboxSecondaryFillActiveColor);
    --borderColor: var(--evgRadioCheckboxSecondaryBorderActiveColor);

    background-color: var(--fillColor);
    border-color: var(--borderColor);
}

/* Hyperlink */
.evergreen .evergreen-link,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]),
.evergreen a.evergreen-rss-link {
    --fontSize: var(--evgHyperlinkFontSizeL);
    --fontFamily: var(--evgHyperlinkFontFamily);
    --fontColor: var(--evgHyperlinkFontColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --fontStyle: var(--evgHyperlinkFontStyle);
    --lineHeight: var(--evgHyperlinkFontLineHeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-style: var(--fontStyle);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);

    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen a.evergreen-rss-link {
    --fontSize: var(--evgModuleNameFontSizeL);
    --fontFamily: var(--evgModuleNameFontFamily);
    --fontWeight: var(--evgModuleNameFontWeight);
    --lineHeight: var(--evgModuleNameFontLineHeight);
    --alignment: var(--evgModuleNameFontAlignment);
}

.evergreen .evergreen-link:hover,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]):hover,
.evergreen a.evergreen-rss-link:hover {
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-link:focus,
.evergreen .evergreen-link:focus-visible,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]):focus,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]):focus-visible,
.evergreen a.evergreen-rss-link:focus,
.evergreen a.evergreen-rss-link:focus-visible {
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);

}

/* Shared/Default Button Props */
.evergreen [class*="evergreen-button"],
.evergreen [class*="evergreen-link--button"],
.evergreen [class^="button"] {
    --fontSize: var(--evgButtonFontSizeL);
    --fontFamily: var(--evgButtonFontFamily);
    --fontColor: var(--evgButtonFontColor);
    --fontWeight: var(--evgButtonFontWeight);
    --lineHeight: var(--evgButtonFontLineHeight);
    --capitalization: var(--evgButtonFontCapitalization);

    --fontStyle: var(--evgButtonFontStyle);
    --textDecoration: var(--evgButtonDecorationTextDecoration);
    --textDecorationColor: var(--evgButtonDecorationTextDecorationColor);

    --borderRadius: var(--evgButtonBorderRadius);
    --borderColor: var(--evgButtonBorderColor);

    --backgroundColor: var(--evgButtonBackgroundColor);

    --topBottomPadding: var(--evgButtonPaddingVerticalPadding);
}

.evergreen [class*="evergreen-button"]:hover,
.evergreen [class*="evergreen-link--button"]:hover,
.evergreen [class^="button"]:hover {
    --fontColor: var(--evgButtonFontHoverColor);
    --borderColor: var(--evgButtonBorderHoverColor);
    --backgroundColor: var(--evgButtonBackgroundHoverColor);
    --textDecoration: var(--evgButtonDecorationTextDecorationHover);
    --textDecorationColor: var(--evgButtonDecorationTextDecorationHoverColor);

    color: var(--fontColor);
}

.evergreen [class*="evergreen-button"]:focus,
.evergreen [class*="evergreen-link--button"]:focus,
.evergreen [class^="button"]:focus,
.evergreen [class*="evergreen-button"]:focus-visible,
.evergreen [class*="evergreen-link--button"]:focus-visible,
.evergreen [class^="button"]:focus-visible {
    --fontColor: var(--evgButtonFontFocusColor);
    --borderColor: var(--evgButtonBorderFocusColor);
    --backgroundColor: var(--evgButtonBackgroundFocusColor);
    --textDecoration: var(--evgButtonDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgButtonDecorationTextDecorationFocusColor);

    color: var(--fontColor);
}

/* Alt Button */
.evergreen .button--alt,
.evergreen .evergreen-button--alt,
.evergreen a.evergreen-link--button--alt,
.evergreen a.evergreen-link--button-alt {
    --fontSize: var(--evgButtonAltFontSizeL);
    --fontFamily: var(--evgButtonAltFontFamily);
    --fontColor: var(--evgButtonAltFontColor);
    --fontWeight: var(--evgButtonAltFontWeight);
    --lineHeight: var(--evgButtonAltFontLineHeight);
    --capitalization: var(--evgButtonAltFontCapitalization);

    --fontStyle: var(--evgButtonAltFontStyle);
    --textDecoration: var(--evgButtonAltDecorationTextDecoration);
    --textDecorationColor: var(--evgButtonAltDecorationTextDecorationColor);

    --borderRadius: var(--evgButtonAltBorderRadius);
    --borderColor: var(--evgButtonAltBorderColor);

    --backgroundColor: var(--evgButtonAltBackgroundColor);

    --topBottomPadding: var(--evgButtonAltPaddingVerticalPadding);
}

.evergreen .button--alt:hover,
.evergreen .evergreen-button--alt:hover,
.evergreen a.evergreen-link--button--alt:hover,
.evergreen a.evergreen-link--button-alt:hover {
    --fontColor: var(--evgButtonAltFontHoverColor);
    --borderColor: var(--evgButtonAltBorderHoverColor);
    --backgroundColor: var(--evgButtonAltBackgroundHoverColor);
    --textDecoration: var(--evgButtonAltDecorationTextDecorationHover);
    --textDecorationColor: var(--evgButtonAltDecorationTextDecorationHoverColor);

    color: var(--fontColor);
}

.evergreen [class*="evergreen-button--alt"]:focus,
.evergreen [class*="evergreen-link--button--alt"]:focus,
.evergreen [class*="button--alt"]:focus,
.evergreen [class*="evergreen-button--alt"]:focus-visible,
.evergreen [class*="evergreen-link--button--alt"]:focus-visible,
.evergreen [class*="button--alt"]:focus-visible {
    --fontColor: var(--evgButtonAltFontFocusColor);
    --borderColor: var(--evgButtonAltBorderFocusColor);
    --backgroundColor: var(--evgButtonAltBackgroundFocusColor);
    --textDecoration: var(--evgButtonAltDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgButtonAltDecorationTextDecorationFocusColor);

    color: var(--fontColor);
}

/* Button Prop application */
.evergreen [class*="evergreen-button"],
.evergreen [class*="evergreen-link--button"],
.evergreen [class^="button"] {
    padding: var(--topBottomPadding) 20px;
    font-style: var(--fontStyle);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
    border-radius: var(--borderRadius);
    background-color: var(--backgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    display: inline-block;
    text-align: center;
    min-width: 165px;
    max-width: 100%;
    border: 1px solid var(--borderColor);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

/* HOVER */
.evergreen [class*="evergreen-button"]:hover,
.evergreen [class*="evergreen-link--button"]:hover,
.evergreen [class*="button"]:hover {
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

/* FOCUS */
.evergreen [class*="evergreen-button"]:focus,
.evergreen [class*="evergreen-link--button"]:focus,
.evergreen [class*="button"]:focus,
.evergreen [class*="evergreen-button"]:focus-visible,
.evergreen [class*="evergreen-link--button"]:focus-visible,
.evergreen [class*="button"]:focus-visible {
    outline-color: var(--borderColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

/* Dropdown */
.evergreen .evergreen-dropdown-wrapper {
    --fontSize: var(--evgDropdownFontSizeL);
    --fontFamily: var(--evgDropdownFontFamily);
    --fontColor: var(--evgDropdownFontColor);
    --fontWeight: var(--evgDropdownFontWeight);
    --fontStyle: var(--evgDropdownFontStyle);
    --capitalization: var(--evgDropdownCapitalization);
    --borderRadius: var(--evgDropdownBorderRadius);
    --borderColor: var(--evgDropdownBorderColor);
    --backgroundColor: var(--evgDropdownBackgroundColor);
}

.evergreen .evergreen-dropdown {
    font-style: var(--fontStyle);
    border-radius: var(--borderRadius);
    border-color: var(--borderColor);
    background-color: var(--backgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 8px 32px 8px 8px;
    appearance: none;
    min-width: 90px;
}

.evergreen .evergreen-dropdown:focus,
.evergreen .evergreen-dropdown:focus-visible {
    --fontColor: var(--evgDropdownFontFocusColor);
    --borderColor: var(--evgDropdownBorderFocusColor);
    --backgroundColor: var(--evgDropdownBackgroundFocusColor);

    outline-color: var(--borderColor);
}

/* Accordion */
.evergreen .evergreen-accordion {
    --fontFamily: var(--evgAccordionFontFamily);

    --detailFontColor: var(--evgAccordionContentFontColor);
    --detailBackgroundColor: var(--evgAccordionContentBackgroundColor);

    --headingFontSize: var(--evgAccordionFontSizeL);
    --headingFontColor: var(--evgAccordionFontColor);
    --headingFontActiveColor: var(--evgAccordionFontAltColor);
    --headingFontFocusColor: var(--evgAccordionFontFocusColor);
    --headingFontWeight: var(--evgAccordionFontWeight);
    --headingFontStyle: var(--evgAccordionFontStyle);
    --headingFontLineHeight: var(--evgAccordionFontLineHeight);
    --headingFontCapitalization: var(--evgAccordionFontCapitalization);

    --headingPadding: var(--evgAccordionPaddingItemPadding);

    --subtitleFontSize: var(--evgAccordionSecondaryFontSizeL);
    --subtitleFontColor: var(--evgAccordionSecondaryFontColor);
    --subtitleFontWeight: var(--evgAccordionSecondaryFontWeight);
    --subtitleFontStyle: var(--evgAccordionSecondaryFontStyle);
    --subtitleFontLineHeight: var(--evgAccordionSecondaryFontLineHeight);
    --subtitleFontCapitalization: var(--evgAccordionSecondaryFontCapitalization);
    --subtitleFontActiveColor: var(--evgAccordionSecondaryFontAltColor);

    --borderColor: var(--evgAccordionBorderColor);
    --borderColorHover: var(--evgAccordionBorderHoverColor);
    --borderColorFocus: var(--evgAccordionBorderFocusColor);
    --borderColorActive: var(--evgAccordionBorderActiveColor);
    --borderRadius: var(--evgAccordionBorderRadius);

    --backgroundColor: var(--evgAccordionBackgroundColor);
    --backgroundColorFocus: var(--evgAccordionBackgroundFocusColor);
    --backgroundColorActive: var(--evgAccordionBackgroundActiveColor);

    padding: 0;
    border-top: 1px solid var(--borderColor);
    background-color: var(--backgroundColor);
    border-radius: var(--borderRadius);
}

.evergreen .evergreen-accordion:last-child {
    border-bottom: 1px solid var(--borderColor);
}

.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within {
    --borderColor: var(--borderColorFocus);
    --backgroundColor: var(--backgroundColorFocus);
}

.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within + .evergreen-accordion {
    --borderTopColor: var(--borderColorFocus);
}

.evergreen .evergreen-accordion:last-child:not(.evergreen-accordion--active):focus-within {
    --borderBottomColor: var(--borderColorFocus);
}

.evergreen .evergreen-accordion--active {
    --borderColor: var(--borderColorActive);
    --backgroundColor: var(--backgroundColorActive);
}

.evergreen .evergreen-accordion--active + .evergreen-accordion:not(.evergreen-accordion--active),
.evergreen .evergreen-accordion--active + .evergreen-accordion:focus-within:not(.evergreen-accordion--active) {
    --borderTopColor: var(--borderColorActive);
}

.evergreen .evergreen-accordion--active.evergreen-accordion:last-child:focus-within {
    --borderBottomColor: var(--borderColorActive);
}

.evergreen .evergreen-accordion .evergreen-accordion-header button.accordion-toggle {
    all: inherit;
    display: flex;
    width: 100%;
    padding: var(--headingPadding) 0;
}

.evergreen .evergreen-accordion h4.evergreen-accordion-header,
.evergreen .evergreen-accordion .evergreen-accordion-header button.accordion-toggle {
    --fontSize: var(--headingFontSize);
    --fontFamily: var(--evgAccordionFontFamily);
    --fontColor: var(--headingFontColor);
    --fontWeight: var(--headingFontWeight);
    --fontStyle: var(--headingFontStyle);
    --lineHeight: var(--headingFontLineHeight);
    --capitalization: var(--headingFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    font-style: var(--fontStyle);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within h4.evergreen-accordion-header,
.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within .evergreen-accordion-header button.accordion-toggle {
    --fontColor: var(--headingFontFocusColor);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion--active h4.evergreen-accordion-header,
.evergreen .evergreen-accordion--active .evergreen-accordion-header button.accordion-toggle {
    --fontColor: var(--headingFontActiveColor);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion .evergreen-accordion-header button.accordion-toggle .evergreen-accordion-subtitle {
    --fontSize: var(--subtitleFontSize);
    --fontColor: var(--subtitleFontColor);
    --fontWeight: var(--subtitleFontWeight);
    --fontStyle: var(--subtitleFontStyle);
    --lineHeight: var(--subtitleFontLineHeight);
    --capitalization: var(--subtitleFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    font-style: var(--fontStyle);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-accordion--active .evergreen-accordion-header button.accordion-toggle .evergreen-accordion-subtitle {
    --fontColor: var(--subtitleFontActiveColor);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion-content {
    --fontColor: var(--detailFontColor);
    --fontSize: var(--evgBodyFontSizeL);
    --backgroundColor: var(--detailBackgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    background-color: var(--backgroundColor);
}

.evergreen .evergreen-accordion-content-text,
.evergreen .evergreen-accordion-content-text p {
    font-size: var(--fontSize);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion-content-text p a,
.evergreen .evergreen-accordion-content-text a:not([class*="evergreen-link--button"]) {
    --fontColor: var(--evgHyperlinkFontColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
    font-weight: var(--fontWeight);
    text-transform: var(--capitalization);

    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen .evergreen-accordion-content-text p a:hover,
.evergreen .evergreen-accordion-content-text a:not([class*="evergreen-link--button"]):hover {
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-accordion-content-text p a:focus,
.evergreen .evergreen-accordion-content-text a:not([class*="evergreen-link--button"]):focus {
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

/* Carousel */
.evergreen .evergreen-carousel-slider-item-text {
    --fontColor: var(--evgBodyFontColor);
    --fontSize: var(--evgBodyFontSizeL);

    color: var(--fontColor);
    font-size: var(--fontSize);
}

.evergreen .evergreen-carousel-display-item-header-text {
    --fontColor: var(--evgBodyFontColor);
    --fontSize: var(--evgH3FontSizeL);

    color: var(--fontColor);
    font-size: var(--fontSize);
}

.evergreen .evergreen-carousel-display-item-subtitle-text,
.evergreen .evergreen-carousel-display-item-text,
.evergreen .evergreen-carousel-display-item-text p {
    --fontColor: var(--evgBodyFontColor);
    --fontSize: var(--evgBodyFontSizeL);

    color: var(--fontColor);
    font-size: var(--fontSize);
}

.evergreen .evergreen-carousel-arrow,
.evergreen .evergreen-carousel-display-item-text a,
.evergreen .evergreen-carousel-display-item-text p a {
    --fontColor: var(--evgHyperlinkFontColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
    font-weight: var(--fontWeight);
    text-transform: var(--capitalization);
    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen .evergreen-carousel-arrow:hover,
.evergreen .evergreen-carousel-display-item-text a:hover,
.evergreen .evergreen-carousel-display-item-text p a:hover {
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-carousel-arrow:focus,
.evergreen .evergreen-carousel-display-item-text a:focus,
.evergreen .evergreen-carousel-display-item-text p a:focus {
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);
    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}


/* Tabs */
.evergreen .evergreen-tabs {
    --fontSize: var(--evgTabsFontSizeL);
    --fontFamily: var(--evgTabsFontFamily);
    --fontColor: var(--evgTabsFontColor);
    --fontColorHover: var(--evgTabsFontHoverColor);
    --fontColorActive: var(--evgTabsFontAltColor);
    --fontWeight: var(--evgTabsFontWeight);
    --lineHeight: var(--evgTabsFontLineHeight);
    --capitalization: var(--evgTabsFontCapitalization);
    --backgroundColor: var(--evgTabsBackgroundColor);
    --itemBackgroundColor: var(--evgTabsSecondaryBackgroundColor);
    --itemBackgroundColorHover: var(--evgTabsSecondaryBackgroundHoverColor);
    --itemBackgroundColorActive: var(--evgTabsSecondaryBackgroundActiveColor);
    --borderRadius: var(--evgTabsBorderRadius);

    margin-bottom: 16px;
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-tabs ul {
    background-color: var(--backgroundColor);
    border: 0 none;
    padding: 10px 15px 0;
    list-style: none;
    display: flex;
    column-gap: 3px;
    margin: 0;
    flex-wrap: wrap;
}

.evergreen .evergreen-tabs li {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-wrap: anywhere;
}

.evergreen .evergreen-tabs ul li a {
    --fontSize: var(--evgTabsFontSizeL);
    --fontFamily: var(--evgTabsFontFamily);
    --fontColor: var(--evgTabsFontColor);
    --fontColorHover: var(--evgTabsFontHoverColor);
    --fontColorActive: var(--evgTabsFontAltColor);
    --fontWeight: var(--evgTabsFontWeight);
    --lineHeight: var(--evgTabsFontLineHeight);
    --capitalization: var(--evgTabsFontCapitalization);
    --backgroundColor: var(--itemBackgroundColor);

    color: var(--fontColor);
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
    background: var(--backgroundColor);
    display: inline-block;
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
    padding: 10px 15px 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.evergreen .evergreen-tabs ul li a:not(.evergreen--selected):hover {
    --fontColor: var(--fontColorHover);
    --backgroundColor: var(--itemBackgroundColorHover);

    color: var(--fontColor);
    background-color: var(--backgroundColor);
}

.evergreen .evergreen-tabs ul li a.evergreen--selected,
.evergreen .evergreen-tabs ul li a.evergreen-active {
    --fontColor: var(--fontColorActive);
    --backgroundColor: var(--itemBackgroundColorActive);
    pointer-events: none;
    cursor: default;

    color: var(--fontColor);
    background-color: var(--backgroundColor);
}

/* List */
.evergreen ul,
.evergreen ol {
    --bulletStyle: var(--evgListBulletStyle);
    --bulletcolor: var(--evgListBulletColor);
    --fontFamily: var(--evgListFontFamily);
    --fontSize: var(--evgListFontSizeL);
    --fontColor: var(--evgListFontColor);
    --fontWeight: var(--evgListFontWeight);
    --fontStyle: var(--evgListFontStyle);
    --lineHeight: var(--evgListFontLineHeight);
    --capitalization: var(--evgListFontCapitalization);
    --textDecoration: var(--evgListDecorationTextDecoration);
    --textDecorationColor: var(--evgListDecorationTextDecorationColor);
}

.evergreen ul li,
.evergreen ol li {
    color: var(--fontColor);
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--fontWeight);
    font-style: var(--fontStyle);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen ul li {
    list-style: var(--bulletStyle);
}

.evergreen ul li::marker,
.evergreen ol li::marker {
    color: var(--bulletcolor);
}

/* Pager */
.evergreen .evergreen-pager,
.evergreen .evergreen-pager .evergreen-pager-list,
.evergreen .evergreen-pager .evergreen-pager-list-item {
  --fontFamily: var(--evgPaginationFontFamily);
  --fontSize: var(--evgPaginationFontSizeL);
  --fontColor: var(--evgPaginationFontColor);
  --fontAltColor: var(--evgPaginationFontAltColor);
  --fontHoverColor: var(--evgPaginationFontHoverColor);
  --fontWeight: var(--evgPaginationFontWeight);
  --borderColor: var(--evgPaginationBorderColor);
  --borderHoverColor: var(--evgPaginationBorderHoverColor);
  --borderActiveColor: var(--evgPaginationBorderActiveColor);
  --borderRadius: var(--evgPaginationBorderRadius);
  --backgroundColor: var(--evgPaginationBackgroundColor);
  --backgroundHoverColor: var(--evgPaginationBackgroundHoverColor);
  --backgroundActiveColor: var(--evgPaginationBackgroundActiveColor);
}

.evergreen .evergreen-pager-button {
    background-color: var(--backgroundColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius, 0);
    color: var(--fontColor);
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    font-weight: var(--fontWeight);
    text-decoration: none;
}

.evergreen .evergreen-pager-button:not(.js--disabled):hover,
.evergreen .evergreen-pager-button:not(.evergreen-pager-button--disabled):hover {
    background-color: var(--backgroundHoverColor);
    border-color: var(--borderHoverColor);
    color: var(--fontHoverColor);
}

.evergreen .evergreen-pager-button.js--active,
.evergreen .evergreen-pager-button.evergreen-pager-button--active {
    background-color: var(--backgroundActiveColor);
    border-color: var(--borderActiveColor);
    color: var(--fontAltColor);
}

/* Input */
.evergreen .evergreen-input,
.evergreen input {
  --fontFamily: var(--evgInputFontFamily);
  --fontColor: var(--evgInputFontColor);
  --fontSize: var(--evgInputFontSizeL);
  --placeholderFontColor: var(--evgInputPlaceholderColor);
  --fontWeight: var(--evgInputFontWeight);
  --lineHeight: var(--evgInputFontLineHeight);
  --capitalization: var(--evgInputFontCapitalization);
  --borderColor: var(--evgInputBorderColor);
  --borderFocusColor: var(--evgInputBorderFocusColor);
  --borderRadius: var(--evgInputBorderRadius);
  --backgroundColor: var(--evgInputBackgroundColor);

  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--fontColor);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
  text-transform: var(--capitalization);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
  background-color: var(--backgroundColor);

  transition: all 0.3s ease-in-out;

}

.evergreen .evergreen-input:focus,
.evergreen input:focus {
  border-color: var(--borderFocusColor);
  outline-color: var(--borderFocusColor);
}

.evergreen .evergreen-input::placeholder,
.evergreen input::placeholder {
  color: var(--placeholderFontColor);
  visibility: var(--evgInputShowPlaceholder);
}

/* Label */
.evergreen .evergreen-label,
.evergreen label,
.evergreen legend {
  --fontFamily: var(--evgInputFontFamily);
  --fontSize : var(--evgInputSecondaryFontSizeL);
  --fontColor: var(--evgInputSecondaryFontColor);
  --fontWeight: var(--evgInputSecondaryFontWeight);
  --lineHeight: var(--evgInputSecondaryFontLineHeight);
  --capitalization: var(--evgInputSecondaryFontCapitalization);

  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--fontColor);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
  text-transform: var(--capitalization);
  visibility: var(--evgInputShowLabel);
}


/* Module Specific Styling */
.evergreen {
    background-color: var(--evgModuleBackgroundColor);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
}

.evergreen .evergreen-title,
.evergreen .evergreen-title .ModuleTitle {
    --fontSize: var(--evgModuleNameFontSizeL);
    --fontColor: var(--evgModuleNameFontColor);
    --fontFamily: var(--evgModuleNameFontFamily);
    --fontWeight: var(--evgModuleNameFontWeight);
    --capitalization: var(--evgModuleNameFontCapitalization);
    --lineHeight: var(--evgModuleNameFontLineHeight);
    --alignment: var(--evgModuleNameFontAlignment);
}

.evergreen .evergreen-title, .evergreen .evergreen-title .ModuleTitle {
    margin: 0;
    overflow-wrap: anywhere;

    color: var(--fontColor);
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--fontWeight);
    text-transform: var(--capitalization);
    line-height: var(--lineHeight);
    text-align: var(--alignment);
}

.evergreen .evergreen-item {
    --backgroundColor: var(--evgModuleBackgroundItemBackgroundColor);
    --padding: var(--evgPaddingItemPadding);
    --borderBottom: var(--evgModuleItemUnderline);
    --borderBottomColor: var(--evgModuleItemUnderlineColor);

    background-color: var(--backgroundColor);
    padding: 30px var(--padding) 10px var(--padding);
    border-bottom: var(--borderBottom);
    border-bottom-color: var(--borderBottomColor);
}

.evergreen .evergreen-item-container tbody,
.evergreen .evergreen-item-container tr,
.evergreen .evergreen-item-container tr:nth-child(even) {
    --backgroundColor: var(--evgModuleBackgroundItemBackgroundColor);

    background-color: var(--backgroundColor);
    border: none;
    border-collapse: collapse;
}

.evergreen .evergreen-item tr,
.evergreen .evergreen-item tr:nth-child(even) {
    --borderBottom: var(--evgModuleItemUnderline);
    --borderBottomColor: var(--evgModuleItemUnderlineColor);

    border-bottom: var(--borderBottom);
    border-bottom-color: var(--borderBottomColor);
}

.evergreen .evergreen-item-container.evergreen-item-one-column tbody {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 16px;
}

.evergreen .evergreen-item-container.evergreen-item-two-column tbody {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.evergreen .evergreen-item-title,
.evergreen a.evergreen-item-title,
.evergreen .evergreen-item-detail-title {
    --fontSize: var(--evgModuleItemTitleFontSizeL);
    --fontFamily: var(--evgModuleItemTitleFontFamily);
    --fontWeight: var(--evgModuleItemTitleFontWeight);
    --lineHeight: var(--evgModuleItemTitleFontLineHeight);
    --capitalization: var(--evgModuleItemTitleFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-item-subtitle {
    --fontSize: var(--evgModuleItemSubtitleFontSizeL);
    --fontColor: var(--evgModuleItemSubtitleFontColor);
    --fontFamily: var(--evgModuleItemSubtitleFontFamily);
    --fontWeight: var(--evgModuleItemSubtitleFontWeight);
    --lineHeight: var(--evgModuleItemSubtitleFontLineHeight);
    --capitalization: var(--evgModuleItemSubtitleFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-item-title:not(:hover):not(:focus),
.evergreen a.evergreen-item-title:not(:hover):not(:focus),
.evergreen .evergreen-item-detail-title {
    --fontColor: var(--evgModuleItemTitleFontColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen a.evergreen-item-title:hover {
    --fontColor: var(--evgModuleItemTitleFontHoverColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen a.evergreen-item-title:focus,
.evergreen a.evergreen-item-title:focus-visible {
    --fontColor: var(--evgModuleItemTitleFontFocusColor);
    color: var(--fontColor);
}

.evergreen .evergreen-item-date-time {
    --fontSize: var(--evgDateTimeFontSizeL);
    --fontColor: var(--evgDateTimeFontColor);
    --fontFamily: var(--evgDateTimeFontFamily);
    --fontWeight: var(--evgDateTimeFontWeight);
    --capitalization: var(--evgDateTimeFontCapitalization);
    --lineHeight: var(--evgDateTimeFontLineHeight);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

/** Responsive Tablet **/
@media only screen and (max-width: 1024px) and (min-width: 481px) {
    .evergreen {
        font-size: var(--evgBodyFontSizeM);
    }

    /* Text Editor */
    .evergreen p {
        font-size: var(--evgBodyFontSizeM);
    }

    .evergreen h1 {
        font-size: var(--evgH1FontSizeM);
        font-family: var(--evgH1FontFamily);
    }

    .evergreen h2 {
        font-size: var(--evgH2FontSizeM);
        font-family: var(--evgH2FontFamily);
    }

    .evergreen h3 {
        font-size: var(--evgH3FontSizeM);
        font-family: var(--evgH3FontFamily);
    }

    .evergreen h4 {
        font-size: var(--evgH4FontSizeM);
        font-family: var(--evgH4FontFamily);
    }

    .evergreen h5 {
        font-size: var(--evgH5FontSizeM);
        font-family: var(--evgH5FontFamily);
    }

/* TODO: Text editor buttons have Link Font Weight applied to them. */

    /* Hyperlink */
    .evergreen .evergreen-link,
    .evergreen.evergreen-text-editor a:not([class*="evergreen-button"]) {
        font-size: var(--evgLinkFontSizeM);
    }

    /* Default Button */
    .evergreen .button, .evergreen .evergreen-button {
        font-size: var(--evgButtonFontSizeM);
    }

    /* Alt Button */
    .evergreen .button--alt, .evergreen .evergreen-button--alt {
        font-size: var(--evgButtonAltFontSizeM)
    }

    /* Dropdown */
    .evergreen .evergreen-dropdown {
        font-size: var(--evgDropdownFontSizeM);
    }

    /* Accordion */
    .evergreen .evergreen-accordion-header,
    .evergreen .evergreen-accordion button,
    .evergreen .evergreen-accordion button .evergreen-accordion-title,
    .evergreen .evergreen-accordion button .accordion-toggle-icon {
        font-size: var(--evgAccordionFontSizeM);
    }

    .evergreen .evergreen-accordion button .evergreen-accordion-subtitle {
        font-size: var(--evgAccordionSubtitleFontSizeM);
    }

    .evergreen .evergreen-accordion-content h3 {
        font-size: var(--evgH3FontSizeM);
    }

    .evergreen .evergreen-accordion-content-text,
    .evergreen .evergreen-accordion-content-text p {
        font-size: var(--evgBodyFontSizeM);
    }

    /* Carousel */
    .evergreen .evergreen-carousel-display-item-subtitle-text,
    .evergreen .evergreen-carousel-display-item-text,
    .evergreen .evergreen-carousel-slider-item-text {
        font-size: var(--evgBodyFontSizeM);
    }

    .evergreen .evergreen-carousel-display-item-header-text {
        font-size: var(--evgH3FontSizeM);
    }

    /* Tabs */
    .evergreen .evergreen-tabs {
        font-size: var(--evgTabsFontSizeM);
    }

    /* Module Styling */
    .evergreen .evergreen-title, .evergreen .evergreen-title .ModuleTitle {
        font-size: var(--evgModuleNameFontSizeM);
    }

    .evergreen .evergreen-item-title,
    .evergreen a.evergreen-item-title,
    .evergreen .evergreen-item-detail-title {
        font-size: var(--evgModuleItemTitleFontSizeM);
    }

    .evergreen .evergreen-item-subtitle {
        font-size: var(--evgModuleItemSubtitleFontSizeM);
    }

    .evergreen .evergreen-item-date-time {
        font-size: var(--evgDateTimeFontSizeM);
    }

    /* Pager */
    .evergreen .evergreen-pager,
    .evergreen .evergreen-pager .evergreen-pager-list,
    .evergreen .evergreen-pager .evergreen-pager-list-item {
        --fontSize: var(--evgPaginationFontSizeM);
        font-size: var(--fontSize);
    }

    /* List */
    .evergreen ul,
    .evergreen ol {
        --fontSize: var(--evgListFontSizeM);
    }

    /* Input */
    .evergreen .evergreen-input,
    .evergreen input {
      --fontSize: var(--evgInputFontSizeM);
      font-size: var(--fontSize);
    }

    /* Label */
    .evergreen .evergreen-label,
    .evergreen label,
    .evergreen legend {
      --fontSize: var(--evgInputSecondaryFontSizeM);
      font-size: var(--fontSize);
    }
}

/** Responsive Mobile **/
@media only screen and (max-width: 480px) {
    .evergreen {
        font-size: var(--evgBodyFontSizeS);
    }

    /* Text Editor */
    .evergreen p {
        font-size: var(--evgBodyFontSizeS);
    }

    .evergreen h1 {
        font-size: var(--evgH1FontSizeS);
        font-family: var(--evgH1FontFamily);
    }

    .evergreen h2 {
        font-size: var(--evgH2FontSizeS);
        font-family: var(--evgH2FontFamily);
    }

    .evergreen h3 {
        font-size: var(--evgH3FontSizeS);
        font-family: var(--evgH3FontFamily);
    }

    .evergreen h4 {
        font-size: var(--evgH4FontSizeS);
        font-family: var(--evgH4FontFamily);
    }

    .evergreen h5 {
        font-size: var(--evgH5FontSizeS);
        font-family: var(--evgH5FontFamily);
    }

    /* Hyperlink */
    .evergreen .evergreen-link,
    .evergreen.evergreen-text-editor a:not([class*="evergreen-button"]) {
        font-size: var(--evgLinkFontSizeS);
    }

    /* Default Button */
    .evergreen .button,
    .evergreen .evergreen-button {
        font-size: var(--evgButtonFontSizeS);
    }

    /* Alt Button */
    .evergreen .button--alt,
    .evergreen .evergreen-button--alt {
        font-size: var(--evgButtonAltFontSizeS)
    }

    /* Dropdown */
    .evergreen .evergreen-dropdown {
        font-size: var(--evgDropdownFontSizeS);
    }

    /* Accordion */
    .evergreen .evergreen-accordion-header,
    .evergreen .evergreen-accordion button,
    .evergreen .evergreen-accordion button .evergreen-accordion-title,
    .evergreen .evergreen-accordion button .accordion-toggle-icon {
        font-size: var(--evgAccordionFontSizeS);
    }

    .evergreen .evergreen-accordion button .evergreen-accordion-subtitle {
        font-size: var(--evgAccordionSubtitleFontSizeS);
    }

    .evergreen .evergreen-accordion-content h3 {
        font-size: var(--evgH3FontSizeS);
    }

    .evergreen .evergreen-accordion-content-text,
    .evergreen-accordion-content-text p {
        font-size: var(--evgBodyFontSizeS);
    }

    /* Carousel */
    .evergreen .evergreen-carousel-display-item-subtitle-text,
    .evergreen .evergreen-carousel-display-item-text,
    .evergreen .evergreen-carousel-slider-item-text {
        font-size: var(--evgBodyFontSizeS);
    }

    .evergreen .evergreen-carousel-display-item-header-text {
        font-size: var(--evgH3FontSizeS);
    }

    /* Tabs */
    .evergreen .evergreen-tabs {
        font-size: var(--evgTabsFontSizeS);
    }

    /* Module Styling */
    .evergreen .evergreen-title,
    .evergreen .evergreen-title .ModuleTitle {
        font-size: var(--evgModuleNameFontSizeS);
    }

    .evergreen .evergreen-item-title,
    .evergreen a.evergreen-item-title,
    .evergreen .evergreen-item-detail-title {
        font-size: var(--evgModuleItemTitleFontSizeS);
    }

    .evergreen .evergreen-item-subtitle {
        font-size: var(--evgModuleItemSubtitleFontSizeS);
    }

    .evergreen .evergreen-item-date-time {
        font-size: var(--evgDateTimeFontSizeS);
    }

    /* Pager */
    .evergreen .evergreen-pager,
    .evergreen .evergreen-pager .evergreen-pager-list,
    .evergreen .evergreen-pager .evergreen-pager-list-item {
        --fontSize: var(--evgPaginationFontSizeS);
        font-size: var(--fontSize);
    }

    /* List */
    .evergreen ul,
    .evergreen ol {
        --fontSize: var(--evgListFontSizeS);
    }

    /* Input */
    .evergreen .evergreen-input,
    .evergreen input {
      --fontSize: var(--evgInputFontSizeS);
      font-size: var(--fontSize);
    }

    /* Label */
    .evergreen .evergreen-label,
    .evergreen label,
    .evergreen legend {
      --fontSize: var(--evgInputSecondaryFontSizeS);
      font-size: var(--fontSize);
    }
}