/*! @sentry/browser & @sentry/tracing 7.52.1 (d0932ca0a) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(t){var n=function(){function t(n){this.name=t.id,console.error("You are using new Replay() even though this bundle does not include replay.")}return t.prototype.setupOnce=function(){},t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.flush=function(){},t.id="Replay",t}(),r=ar e= c=Object.prototype.toString;nction h(t){return f(t,"ErrorEvent")}function v(t){return f(t,"DOMError")}function d(t){return f(t,"String")}object"==typeof globalThis&&w(globalThis)||"object"==typeof window&&w(window)||"object"==typeof self&&w(self)||"object"==typeof global&&w(global)||)||{};r S=E();r O=Error),x=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/; I,L=["debug","info","warn","error","log","assert","trace"];n F(t){return t.__sentry_original__}ble:function(){},disable:function(){}},L.forEach(();var J=/\(error: (.*)\)/;unction Y(t){if(!t.length)return[];var n=t.slice(0,50),r=n[n.length-1].function;r&&/sentryWrapped/.test(r)&&n.pop(),n.reverse();var i=n[n.length-1].function;return i&&/captureMessage|captureException/.test(i)&&n.pop(),n.map(()}var V="<anonymous>";ar Z=E();var tt=E();r it,et=E(),ot={},ut={};function at(t){if(!ut[t])switch(ut[t]=!0,t){case"console":!);break;case"dom":!);break;case"xhr":!function(){if(!("XMLHttpRequest"in et))return;var t=XMLHttpRequest.prototype;U(t,"open",(function(t){return function(){for(var n=this,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var e=r[1],o=this.__sentry_xhr_v2__={method:d(r[0])?r[0].toUpperCase():r[0],url:r[1],request_headers:{}};d(e)&&"POST"===o.method&&e.match(/sentry_key/)&&(this.__sentry_own_request__=!0);var a=return"onreadystatechange"in this&&"function"==typeof this.onreadystatechange?U(this,"onreadystatechange",():this.addEventListener("readystatechange",a),U(this,"setRequestHeader",(function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=u(n,2),e=i[0],o=i[1],a=this.__sentry_xhr_v2__;return a&&(a.request_headers[e.toLowerCase()]=o),t.apply(this,n)}})),t.apply(this,r)}})),U(t,"send",(function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=this.__sentry_xhr_v2__;return i&&void 0!==n[0]&&(i.body=n[0]),st("xhr",{args:n,startTimestamp:Date.now(),xhr:this}),t.apply(this,n)}}))}();break;case"fetch":!function(){if(!))return;U(et,"fetch",(function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=vt(n),o={args:n,fetchData:{method:i.method,url:i.url},startTimestamp:Date.now()};return st("fetch",e({},o)),t.apply(et,n).then((,()}}))}();break;case"history":!);break;case"error":yt=et.onerror,et.onerror=et.onerror.__SENTRY_INSTRUMENTED__=!0;break;case"unhandledrejection":gt=et.onunhandledrejection,et.onunhandledrejection=et.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0;break;default:return}}t,lt;ar yt=null;var mt,gt=null;n kt(t,n,r){void 0===n&&(n=100),void 0===r&&(r=1/0);try{return xt("",t,n,r)}catch(t){return{ERROR:"**non-serializable** ("+t+")"}}}unction xt(t,n,r,i,e){var o,a;void 0===r&&(r=1/0),void 0===i&&(i=1/0),void 0===e&&(o="function"==typeof WeakSet,a=o?new WeakSet:[],e=[);var c=u(e,2),s=c[0],f=c[1];if(null==n||["number","boolean","string"].includes(typeof n)&&!g(n))return n;var h=function(t,n){try{if("domain"===t&&n&&"object"==typeof n&&n.t)return"[Domain]";if("domainEmitter"===t)return"[DomainEmitter]";if("undefined"!=typeof global&&n===global)return"[Global]";if("undefined"!=typeof window&&n===window)return"[Window]";if("undefined"!=typeof document&&n===document)return"[Document]";if(p(i=n)&&"nativeEvent"in i&&"preventDefault"in i&&"stopPropagation"in i)return"[SyntheticEvent]";if("number"==typeof n&&n!=n)return"[NaN]";if("function"==typeof n)return"[Function: "+Q(n)+"]";if("symbol"==typeof n)return"["+String(n)+"]";if("bigint"==typeof n)return"[BigInt: "+String(n)+"]";var r=n);return/^HTML(\w*)Element$/.test(r)?"[HTMLElement: "+r+"]":"[object "+r+"]"}catch(t){return"**non-serializable** ("+t+")"}var i}(t,n);if(!h.startsWith("[object "))return h;if(n.__sentry_skip_normalization__)return n;var v="number"==typeof n.__sentry_override_normalization_depth__?n.__sentry_override_normalization_depth__:r;if(0===v)return h.replace("object ","");if(s(n))return"[Circular ~]";var d=n;if(d&&"function"==typeof d.toJSON)try{return xt("",d.toJSON(),v-1,i,e)}catch(t){}var l=Array.isArray(n)?[]:{},y=0,m=B(n);for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){if(y>=i){l[b]="[MaxProperties ~]";break}var w=m[b];l[b]=xt(b,w,v-1,i,e),y++}return f(n),l}t||(mt={}));var Ct=);r At=["fatal","error","warning","log","info","debug"];var Mt=E(),Nt={nowSeconds:;var Ht=),Ut=void 0===Ht?Nt:{nowSeconds:,qt=Nt.nowSeconds.bind(Nt),Pt=Ut.nowSeconds.bind(Ut),Ft=),Bt=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor"}; Zt="baggage",tn="sentry-",nn=/^sentry-/;r on="production";r cn=function(){eturn t.clone=t.prototype.addScopeListener=function(t){this.g.push(t)},t.prototype.addEventProcessor=function(t){return this._.push(t),this},t.prototype.setUser=t.prototype.getUser=function(){return this.j},t.prototype.getRequestSession=function(){return this.N},t.prototype.setRequestSession=function(t){return this.N=t,this},t.prototype.setTags=function(t){return this.k=e(e({},this.k),t),this.H(),this},t.prototype.setTag=function(t,n){var r;return this.k=e(e({},this.k),((r={})[t]=n,r)),this.H(),this},t.prototype.setExtras=t.prototype.setExtra=t.prototype.setFingerprint=function(t){return this.M=t,this.H(),this},t.prototype.setLevel=function(t){return this.C=t,this.H(),this},t.prototype.setTransactionName=function(t){return this.A=t,this.H(),this},t.prototype.setContext=t.prototype.setSpan=t.prototype.getSpan=function(){return this.I},t.prototype.getTransaction=t.prototype.setSession=t.prototype.getSession=function(){return this.L},t.prototype.update=t.prototype.clear=t.prototype.addBreadcrumb=t.prototype.getLastBreadcrumb=function(){return this.T[this.T.length-1]},t.prototype.clearBreadcrumbs=t.prototype.addAttachment=t.prototype.getAttachments=function(){return this.S},t.prototype.clearAttachments=t.prototype.applyToEvent=function(t,n){if(void 0===n&&(n={}),this.O&&Object.keys(this.O).length&&(t.extra=e(e({},this.O),t.extra)),this.k&&Object.keys(this.k).length&&(t.tags=e(e({},this.k),t.tags)),this.j&&Object.keys(this.j).length&&(t.user=e(e({},this.j),t.user)),this.R&&Object.keys(this.R).length&&(t.contexts=e(e({},this.R),t.contexts)),this.C&&(t.level=this.C),this.A&&(t.transaction=this.A),this.I){t.contexts=e({trace:this.I.getTraceContext()},t.contexts);var r=this.I.transaction;if(r){t.sdkProcessingMetadata=e({dynamicSamplingContext:r.getDynamicSamplingContext()},t.sdkProcessingMetadata);var i=r.name;i&&(t.tags=e({transaction:i},t.tags))}}return this.U(t),t.breadcrumbs=a(t.breadcrumbs||[],this.T),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,t.sdkProcessingMetadata=e(e({},t.sdkProcessingMetadata),this.D),this.q(a(sn(),this._),t,n)},t.prototype.setSDKProcessingMetadata=t.prototype.q=t.prototype.H=t.prototype.U=t}();unction fn(t){sn().push(t)}var hn=function(){function t(t,n,r){void 0===n&&(n=new cn),void 0===r&&(r=4),this.P=r,this.F=[{scope:n}],t&&this.bindClient(t)}return t.prototype.isOlderThan=t.prototype.bindClient=t.prototype.pushScope=t.prototype.popScope=t.prototype.withScope=t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=t.prototype.getStack=function(){return this.F},t.prototype.getStackTop=t.prototype.captureException=t.prototype.captureMessage=t.prototype.captureEvent=t.prototype.lastEventId=function(){return this.B},t.prototype.addBreadcrumb=function(t,n){var r=this.getStackTop(),i=r.scope,o=r.client;if(o){var u=o.getOptions&&o.getOptions()||{},a=u.beforeBreadcrumb,c=void 0===a?null:a,s=u.maxBreadcrumbs,f=void 0===s?100:s;if(!(f<=0)){var h=qt(),v=e({timestamp:h},t),d=c?():v;null!==d&&(o.emit&&o.emit("beforeAddBreadcrumb",d,n),i.addBreadcrumb(d,f))}}},t.prototype.setUser=function(t){this.getScope().setUser(t)},t.prototype.setTags=function(t){this.getScope().setTags(t)},t.prototype.setExtras=t.prototype.setTag=function(t,n){this.getScope().setTag(t,n)},t.prototype.setExtra=function(t,n){this.getScope().setExtra(t,n)},t.prototype.setContext=t.prototype.configureScope=t.prototype.run=t.prototype.getIntegration=t.prototype.startTransaction=t.prototype.traceHeaders=t.prototype.captureSession=t.prototype.endSession=t.prototype.startSession=t.prototype.shouldSendDefaultPii=t.prototype.G=t.prototype.X=t.prototype.W=t}();nction ln(){var t=vn();if(t.__SENTRY__&&t.__SENTRY__.acs){var n=t.__SENTRY__.acs.getCurrentHub();if(n)return n}return function(t){void 0===t&&(t=vn());n=t,n&&n.__SENTRY__&&n.__SENTRY__.hub&&!pn(t).isOlderThan(4)||yn(t,new hn);var n;return pn(t)}(t)}bn=!1;n.tag="sentry_tracingErrorCallback";var _n=),En=);var Tn=function(t){eturn i(n,t),Object.defineProperty(n.prototype,"name",{get:set:enumerable:!0,configurable:!0}),n.prototype.setName=n.prototype.initSpanRecorder=n.prototype.setContext=n.prototype.setMeasurement=n.prototype.setMetadata=n.prototype.finish=function(n){var r=this;if(void 0===this.endTimestamp){this.name||(this.name="<unlabeled transaction>"),t.prototype.finish.call(this,n);var i=this.V.getClient();if(i&&i.emit&&i.emit("finishTransaction",this),!0===this.sampled){var o=this.spanRecorder?this.spanRecorder.spans.filter(():[];this.tt&&o.length>0&&(this.endTimestamp=o.reduce(().endTimestamp);var u=this.metadata,a=e({contexts:e(e({},this.R),{trace:this.getTraceContext()}),spans:o,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:e(e({},u),{dynamicSamplingContext:this.getDynamicSamplingContext()})},u.source&&{transaction_info:{source:u.source}});return Object.keys(this.K).length>0&&(a.measurements=this.K),this.V.captureEvent(a)}i&&i.recordDroppedEvent("sample_rate","transaction")}},n.prototype.toContext=n.prototype.updateWithContext=n.prototype.getDynamicSamplingContext=function(){if(this.Y)return this.Y;var t=this.V||ln(),n=t&&t.getClient();if(!n)return{};var r=n.getOptions()||{},i=r.environment,e=r.release,o=(n.getDsn()||{}).publicKey,u=this.metadata.sampleRate,a=void 0!==u?u.toString():void 0,c=(t.getScope().getUser()||{}).segment,s=this.metadata.source,f=s&&"url"!==s?this.name:void 0,h=z({environment:i||on,release:e,transaction:f,user_segment:c,public_key:o,trace_id:this.traceId,sample_rate:a});return n.emit&&n.emit("createDsc",h),h},n.prototype.setHub=function(t){this.V=t},n}(En),Sn={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3},jn=["heartbeatFailed","idleTimeout","documentHidden","finalTimeout","externalFinish","cancelled"],kn=_n),On=function(t){function n(n,r,i,e,o,u){void 0===i&&(i=Sn.idleTimeout),void 0===e&&(e=Sn.finalTimeout),void 0===o&&(o=Sn.heartbeatInterval),void 0===u&&(u=!1);var a=t.call(this,n,r)||this;return a.it=r,a.et=i,a.ot=e,a.ut=o,a.ct=u,a.activities={},a.st=0,a.ft=!1,a.ht=!1,a.vt=[],a.dt=jn[4],u&&r.configureScope((),a.lt(),setTimeout((,a.ot),a}return i(n,t),n.prototype.finish=function(n){var r,i,e=this;if(void 0===n&&(n=Pt()),this.ft=!0,this.activities={},"ui.action.click"===this.op&&this.setTag("finishReason",this.dt),this.spanRecorder){try{for(var u=o(this.vt),a=u.next();!a.done;a=u.next()){(0,a.value)(this,n)}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}this.spanRecorder.spans=this.spanRecorder.spans.filter(()}if(this.ct){var c=this.it.getScope();c.getTransaction()===this&&c.setSpan(void 0)}return t.prototype.finish.call(this,n)},n.prototype.registerBeforeFinishCallback=n.prototype.initSpanRecorder=n.prototype.cancelIdleTimeout=function(t,n){var r=(void 0===n?{restartOnChildSpanChange:!0}:n).restartOnChildSpanChange;this.ht=!1===r,this.gt&&(clearTimeout(this.gt),this.gt=void 0,0===Object.keys(this.activities).length&&this.ht&&(this.dt=jn[5],this.finish(t)))},n.prototype.setFinishReason=n.prototype.lt=n.prototype.nt=n.prototype.rt=n.prototype.bt=n.prototype.yt=n}(Tn);unction Rn(t,n,r){return mn(n)?void 0!==t.sampled?(t.setMetadata({sampleRate:Number(t.sampled)}),t):("function"==typeof n.tracesSampler?(i=n.tracesSampler(r),t.setMetadata({sampleRate:Number(i)})):void 0!==r.parentSampled?i=r.parentSampled:void 0!==n.tracesSampleRate?(i=n.tracesSampleRate,t.setMetadata({sampleRate:Number(i)})):(i=1,t.setMetadata({sampleRate:i})),i)&&i?(t.sampled=Math.random()<i,t.sampled,t):(t.sampled=!1,t)):(t.sampled=!1,t);var i} Hn(t,n,r,i){var o=Vt(r),u=t.type&&"replay_event"!==t.type?t.type:"event";!t,r&&r.sdk);var c=function(t,n,r,i){var o=t.sdkProcessingMetadata&&t.sdkProcessingMetadata.dynamicSamplingContext;return e(e(e({event_id:t.event_id,sent_at:(new Date).toISOString()},n&&{sdk:n}),!!r&&{dsn:R(i)}),o&&{trace:z(e({},o))})}(t,o,i,n);return delete t.sdkProcessingMetadata,Xt(c,[[{type:u},t]])}var Un=[];function qn(t){var n=t.defaultIntegrations||[],r=t.integrations;n.forEach(();var i=Array.isArray(r)?a(n,r):"function"==typeof r?jt(r(n)):n),e=i,();if(-1!==e){var o=u(i.splice(e,1),1)[0];i.push(o)}return i}unction Fn(t,n,r,i){var o=t.normalizeDepth,u=void 0===o?3:o,c=t.normalizeMaxBreadth,s=void 0===c?1e3:c,f=e(e({},n),{event_id:n.event_id||r.event_id||bt(),timestamp:n.timestamp||qt()}),h=r.integrations||t.integrations.map((function(t){return t.name}));!f,t),f,h),void 0===n.type&&function(t,n){var r,i=_._sentryDebugIds;if(!i)return;var e=Bn.get(n);e?r=e:(r=new Map,Bn.set(n,r));var o=Object.keys(i).reduce((,{}),u=new Set;try{t.exception.values.forEach(()}catch(t){}t.debug_meta=t.debug_meta||{},t.debug_meta.images=t.debug_meta.images||[];var a=t.debug_meta.images;u.forEach(()}(f,t.stackParser);var v=i;r.captureContext&&(v=cn.clone(v).update(r.captureContext));var d=Rt(f);if(v){if(v.getAttachments){var l=a(r.attachments||[],v.getAttachments());l.length&&(r.attachments=l)}d=v.applyToEvent(f,r)}return d.then(()}var Bn=new WeakMap;var Xn=function(){function t(t){if(this._integrations={},this.Et=!1,this.Tt=0,this.St={},this.jt={},this.kt=t,t.dsn){this.Ot=C(t.dsn);var n=Nn(this.Ot,t);this.xt=t.transport(e(e({recordDroppedEvent:this.recordDroppedEvent.bind(this)},t.transportOptions),{url:n}))}}return t.prototype.captureException=t.prototype.captureMessage=t.prototype.captureEvent=t.prototype.captureSession=t.prototype.getDsn=function(){return this.Ot},t.prototype.getOptions=function(){return this.kt},t.prototype.getSdkMetadata=t.prototype.getTransport=function(){return this.xt},t.prototype.flush=t.prototype.close=t.prototype.setupIntegrations=t.prototype.getIntegrationById=t.prototype.getIntegration=t.prototype.addIntegration=t.prototype.sendEvent=function(t,n){var r,i,e=this;if(void 0===n&&(n={}),this.Ot){var u=Hn(t,this.Ot,this.kt._t,this.kt.tunnel);try{for(var a=o(n.attachments||[]),c=a.next();!c.done;c=a.next()){u=$t(u,Jt(c.value,this.kt.transportOptions&&this.kt.transportOptions.textEncoder))}}catch(t){r={error:t}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}var s=this.Lt(u);s&&s.then((,null)}},t.prototype.sendSession=t.prototype.recordDroppedEvent=t.prototype.on=t.prototype.emit=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];this.jt[t]&&this.jt[t].forEach(()},t.prototype.At=t.prototype.It=t.prototype.Ct=t.prototype.Mt=t.prototype.Dt=t.prototype.Nt=t.prototype.Rt=t.prototype.Lt=function(t){if(this.xt&&this.Ot)return this.emit("beforeEnvelope",t),this.xt.send(t).then(null,()},t.prototype.Ht=t}();Jn,Kn="7.52.1",Yn=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){Jn=Function.prototype.toString;try{Function.prototype.toString=catch(t){}},t.id="FunctionToString",t}(),Vn=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Qn=function(){eturn t.prototype.setupOnce=function(n,r){var i=function(n){var i=r();if(i){var e=i.getIntegration(t);if(e){var o=i.getClient(),u=o?o.getOptions():{},c=function(t,n){void 0===t&&(t={});void 0===n&&(n={});return{allowUrls:a(t.allowUrls||[],n.allowUrls||[]),denyUrls:a(t.denyUrls||[],n.denyUrls||[]),ignoreErrors:a(t.ignoreErrors||[],n.ignoreErrors||[],Vn),ignoreTransactions:a(t.ignoreTransactions||[],n.ignoreTransactions||[]),ignoreInternal:void 0===t.ignoreInternal||t.ignoreInternal}}(e.kt,u);return function(t,n){if(n.ignoreInternal&&t))return!0;if(function(t,n){if(t.type||!n||!n.length)return!1;return function(t){if(t.message)return[t.message];if(t.exception){var n=t.exception.values;try{var r=n&&n[n.length-1]||{},i=r.type,e=void 0===i?"":i,o=r.value,u=void 0===o?"":o;return[""+u,e+": "+u]}catch(t){return[]}}return[]}(t).some((function(t){return H(t,n)}))}(t,n.ignoreErrors))return!0;if(t,n.ignoreTransactions))return!0;if(t,n.denyUrls))return!0;if(!t,n.allowUrls))return!0;return!1}(n,c)?null:n}}return n};i.id=this.name,n(i)},t.id="InboundFilters",t}();ar tr=Object.freeze({__proto__:null,FunctionToString:Yn,InboundFilters:Qn}),nr=_;var rr=ir=er=or=ur=ar=cr=-1,sr=fr={};pr,yr,mr=0,gr={};function br(){var t,n,r,i,e,o,u,a=lr();if(a&&Ft){a.mark&&nr.performance.mark("sentry-tracing-init"),t=r=sr(),i=or("FID"),e=u=ur("first-input",o=,n=rr(t,i),u&&ar((,!0);var c=(function(t){var n=t.entries.pop();n&&(gr.cls={value:t.value,unit:""},yr=n)})),s=();return return function(){}}r Er=["localhost",/^\/(?!\/)/],Tr={traceFetch:!0,traceXHR:!0,tracingOrigins:Er,tracePropagationTargets:Er};function Sr(t){var n=e({traceFetch:Tr.traceFetch,traceXHR:Tr.traceXHR},t),r=n.traceFetch,i=n.traceXHR,o=n.tracePropagationTargets,u=n.tracingOrigins,c=n.shouldCreateSpanForRequest,s="function"==typeof c?c:f=h={};r&&ct("fetch",(function(t){!function(t,n,r,i){if(!mn()||!t.fetchData||!n(t.fetchData.url))return;if(t.endTimestamp){var o=t.fetchData.__span;if(!o)return;return void((l=i[o])&&(t.response?l.setHttpStatus(t.response.status):t.error&&l.setStatus("internal_error"),l.finish(),delete i[o]))}var u=t.response&&t.response.headers&&t.response.headers.get("content-length"),c=ln().getScope(),s=c&&c.getSpan(),f=s&&s.transaction;if(s&&f){var h=t.fetchData,v=h.method,d=h.url,l=s.startChild({data:e(e({url:d,type:"fetch"},u?{"http.response_content_length":u}:{}),{"http.method":v}),description:v+" "+d,op:"http.client"});t.fetchData.__span=l.spanId,i[l.spanId]=l;var p=t.args[0];t.args[1]=t.args[1]||{};var y=t.args[1];r(t.fetchData.url)&&(y.headers=p,f.getDynamicSamplingContext(),l,y))}}(t,s,f,h)})),i&&ct("xhr",(function(t){!function(t,n,r,i){var o=t.xhr,u=o&&o.__sentry_xhr_v2__;if(!mn()||o&&o.__sentry_own_request__||!(o&&u&&n(u.url)))return;if(t.endTimestamp){var a=o.__sentry_xhr_span_id__;if(!a)return;return void((h=i[a])&&(h.setHttpStatus(u.status_code),h.finish(),delete i[a]))}var c=ln().getScope(),s=c&&c.getSpan(),f=s&&s.transaction;if(s&&f){var h=s.startChild({data:e(e({},u.data),{type:"xhr","http.method":u.method,url:u.url}),description:u.method+" "+u.url,op:"http.client"});if(o.__sentry_xhr_span_id__=h.spanId,i[o.__sentry_xhr_span_id__]=h,o.setRequestHeader&&r(u.url))try{o.setRequestHeader("sentry-trace",h.toTraceparent());var v=rn(f.getDynamicSamplingContext());v&&o.setRequestHeader(Zt,v)}catch(t){}}}(t,s,f,h)}))}var jr=e(e(e({},Sn),{markBackgroundTransactions:!0,routingInstrumentation:function(t,n,r){if(void 0===n&&(n=!0),void 0===r&&(r=!0),nr&&nr.location){var i,e=nr.location.href;n&&(i=t({name:nr.location.pathname,startTimestamp:Ft?Ft/1e3:void 0,op:"pageload",metadata:{source:"url"}})),r&&ct("history",()}},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{}}),Tr),kr=function(){function t(t){this.name="BrowserTracing",In(),this.options=e(e({},jr),t),void 0!==this.options._experiments.enableLongTask&&(this.options.enableLongTask=this.options._experiments.enableLongTask),t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins),this.Ut=br(),this.options.enableLongTask&&ur("longtask",(),this.options._experiments.enableInteractions&&ur("event",(function(t){var n,r;try{for(var i=o(t),e=i.next();!e.done;e=i.next()){var u=e.value,a=gn();if(!a)return;if("click"===u.name){var c=dr(Ft+u.startTime),s=dr(u.duration);a.startChild({description:j(u.target),op:"ui.interaction."+u.name,startTimestamp:c,endTimestamp:c+s})}}}catch(t){n={error:t}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}),{durationThreshold:0})}return t.prototype.setupOnce=function(t,n){var r=this;this.qt=n;var i=this.options,e=i.routingInstrumentation,o=i.startTransactionOnLocationChange,u=i.startTransactionOnPageLoad,a=i.markBackgroundTransactions,c=i.traceFetch,s=i.traceXHR,f=i.tracePropagationTargets,h=i.shouldCreateSpanForRequest,v=i._experiments;e((,u,o),a&&nr&&nr.document&&nr.document.addEventListener("visibilitychange",(),v.enableInteractions&&this.Ft(),Sr({traceFetch:c,traceXHR:s,tracePropagationTargets:f,shouldCreateSpanForRequest:h})},t.prototype.Pt=function(t){var n=this;if(this.qt){var r=this.options,i=r.beforeNavigate,o=r.idleTimeout,a=r.finalTimeout,c=r.heartbeatInterval,s="pageload"===t.op,f=s?Or("sentry-trace"):null,h=s?Or("baggage"):null,v=f?f):void 0,l=h?h):void 0,p=e(e(e({},t),v),{metadata:e(e({},t.metadata),{dynamicSamplingContext:v&&!l?{}:l}),trimEnd:!0}),y="function"==typeof i?i(p):p,m=void 0===y?e(e({},p),{sampled:!1}):y;m.metadata=m.name!==p.name?e(e({},m.metadata),{source:"custom"}):m.metadata,this.Bt=m.name,this.Xt=m.metadata&&m.metadata.source;var g=Cn(this.qt(),m,o,a,!0,{location:nr.location},c);return g.registerBeforeFinishCallback((),g}},t.prototype.Ft=t}();r Rr=_,Dr=0;=/Minified React error #\d+;/i;r=1024,$r="Breadcrumbs",Wr=function(){eturn t.prototype.setupOnce=function(){this.options.console&&ct("console",zr),this.options.dom&&ct("dom",function(t){function n(n){var r,i,e="object"==typeof t?t.serializeAttribute:void 0,o="object"==typeof t&&"number"==typeof t.maxStringLength?t.maxStringLength:void 0;o&&o>Xr&&(o=Xr),"string"==typeof e&&(e=[e]);try{var u=n.event;r=(i=u)&&i.target?j(u.target,{keyAttrs:e,maxStringLength:o}):j(u,{keyAttrs:e,maxStringLength:o})}catch(t){r="<unknown>"}0!==r.length&&ln().addBreadcrumb({category:"ui."+n.name,message:r},{event:n.event,name:n.name,global:n.global})}return n}(this.options.dom)),this.options.xhr&&ct("xhr",Gr),this.options.fetch&&ct("fetch",Jr),this.options.history&&ct("history",Kr)},t.prototype.addSentryBreadcrumb=t.id=$r,t}();nction Jr(t){var n=t.startTimestamp,r=t.endTimestamp;if(r&&(!t.fetchData.url.match(/sentry_key/)||"POST"!==t.fetchData.method))if(t.error){var i=t.fetchData,o={data:t.error,input:t.args,startTimestamp:n,endTimestamp:r};ln().addBreadcrumb({category:"fetch",data:i,level:"error",type:"http"},o)}else{i=e(e({},t.fetchData),{status_code:t.response&&t.response.status}),o={input:t.args,response:t.response,startTimestamp:n,endTimestamp:r};ln().addBreadcrumb({category:"fetch",data:i,type:"http"},o)}}r Vr=function(t){eturn i(n,t),n.prototype.eventFromException=n.prototype.eventFromMessage=n.prototype.sendEvent=n.prototype.captureUserFeedback=n.prototype.Mt=n.prototype.$t=n}(Xn),Qr=void 0;r ni="?";ar ii=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,ei=/\((\S*)(?::(\d+))(?::(\d+))\)/,oi=[30,,ui=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,ai=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,ci=[50,,si=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,fi=[40,,hi=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,vi=[10,,di=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,li=[20,,pi=[oi,ci,fi],yi=K.apply(void 0,a(pi)),mi=gi=);i=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],ji=);Di=);ar Ii=),Li=);Ui=Object.freeze({__proto__:null,GlobalHandlers:gi,TryCatch:ji,Breadcrumbs:Wr,LinkedErrors:Di,HttpContext:Ii,Dedupe:Li}),qi=[new Qn,new Yn,new ji,new Wr,new gi,new Di,new Li,new Ii];ar Fi={};Rr.Sentry&&Rr.Sentry.Integrations&&(Fi=Rr.Sentry.Integrations);var Bi=e(e(e({},Fi),tr),Ui);return Bi.Replay=n,Bi.BrowserTracing=kr,xr(),t.Breadcrumbs=Wr,t.BrowserClient=Vr,t.BrowserTracing=kr,t.Dedupe=Li,t.FunctionToString=Yn,t.GlobalHandlers=gi,t.HttpContext=Ii,t.Hub=hn,t.InboundFilters=Qn,t.Integrations=Bi,t.LinkedErrors=Di,t.Replay=n,t.SDK_VERSION=Kn,t.Scope=cn,t.Span=En,t.TryCatch=ji,t.WINDOW=Rr,t.addBreadcrumb=function(t){ln().addBreadcrumb(t)},t.addExtensionMethods=xr,t.addGlobalEventProcessor=fn,t.captureEvent=t.captureException=captureException,t.captureMessage=t.captureUserFeedback=t.chromeStackLineParser=oi,t.close=function(t){var n=ln().getClient();return n?n.close(t):Rt(!1)},t.configureScope=function(t){ln().configureScope(t)},t.createTransport=zn,t.createUserFeedbackEnvelope=Yr,t.defaultIntegrations=qi,t.defaultStackLineParsers=pi,t.defaultStackParser=yi,t.eventFromException=qr,t.eventFromMessage=Pr,t.flush=t.forceLoad=t.geckoStackLineParser=ci,t.getCurrentHub=ln,t.getHubFromCarrier=pn,t.init=function(t){void 0===t&&(t={}),void 0===t.defaultIntegrations&&(t.defaultIntegrations=qi),void 0===t.release&&("string"==typeof __SENTRY_RELEASE__&&(t.release=__SENTRY_RELEASE__),Rr.SENTRY_RELEASE&&Rr.SENTRY_RELEASE.id&&(t.release=Rr.SENTRY_RELEASE.id)),void 0===t.autoSessionTracking&&(t.autoSessionTracking=!0),void 0===t.sendClientReports&&(t.sendClientReports=!0);var n,r=e(e({},t),{stackParser:(n=t.stackParser||yi,Array.isArray(n)?K.apply(void 0,a(n)):n),integrations:qn(t),transport:t.transport||(nt()?Zr:ti)});!Vr,r),t.autoSessionTracking&&)},t.lastEventId=t.makeFetchTransport=Zr,t.makeMain=dn,t.makeXHRTransport=ti,t.onLoad=t.opera10StackLineParser=vi,t.opera11StackLineParser=li,t.setContext=function(t,n){ln().setContext(t,n)},t.setExtra=function(t,n){ln().setExtra(t,n)},t.setExtras=function(t){ln().setExtras(t)},t.setTag=t.setTags=function(t){ln().setTags(t)},t.setUser=t.showReportDialog=t.startTransaction=t.winjsStackLineParser=fi,t.withScope=Ln,t.wrap="includes"in Array.prototype||(Array.prototype.includes=function(t){return this.indexOf(t)>-1}),"find"in Array.prototype||(Array.prototype.find=,"findIndex"in Array.prototype||(Array.prototype.findIndex=,"includes"in String.prototype||(String.prototype.includes=,"startsWith"in String.prototype||(String.prototype.startsWith=,"endsWith"in String.prototype||(String.prototype.endsWith=,t}({});