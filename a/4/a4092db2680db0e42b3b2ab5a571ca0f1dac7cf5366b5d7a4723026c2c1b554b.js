/*! @sentry/browser 7.93.0 (d6e8bf8) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(n){var t=ar e==Object.prototype.toString;nction h(n){return v(n,"ErrorEvent")}function l(n){return v(n,"DOMError")}function d(n){return v(n,"String")}typeof globalThis&&A(globalThis)||"object"==typeof window&&A(window)||"object"==typeof self&&A(self)||"object"==typeof global&&A(global)||)||{};r C=I();r U=["debug","info","warn","error","log","assert","trace"],$={};ar P=function(){var n=!1,t={enable:function(){n=!0},disable:isEnabled:;return U.forEach((),t}(),q=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/; G=Error),X=/\(error: (.*)\)/,z=/captureMessage|captureException/;r V="<anonymous>";ar Z={},Q={};On=I();var Tn=I();=null;ar Un=null;ar Hn,Pn=D;r Wn,Bn=D;tion Yn(n,t,r,e,i){var o,u;void 0===r&&(r=1/0),void 0===e&&(e=1/0),void 0===i&&(o="function"==typeof WeakSet,u=o?new WeakSet:[],i=[);var c,f=a(i,2),s=f[0],v=f[1];if(null==t||["number","boolean","string"].includes(typeof t)&&("number"!=typeof(c=t)||c==c))return t;var h=function(n,t){try{if("domain"===n&&t&&"object"==typeof t&&t.i)return"[Domain]";if("domainEmitter"===n)return"[DomainEmitter]";if("undefined"!=typeof global&&t===global)return"[Global]";if("undefined"!=typeof window&&t===window)return"[Window]";if("undefined"!=typeof document&&t===document)return"[Document]";if(_(t))return"[VueViewModel]";if(t))return"[SyntheticEvent]";if("number"==typeof t&&t!=t)return"[NaN]";if("function"==typeof t)return"[Function: ".concat(K(t),"]");if("symbol"==typeof t)return"[".concat(String(t),"]");if("bigint"==typeof t)return"[BigInt: ".concat(String(t),"]");var r=t);return/^HTML(\w*)Element$/.test(r)?"[HTMLElement: ".concat(r,"]"):"[object ".concat(r,"]")}catch(n){return"**non-serializable** (".concat(n,")")}}(n,t);if(!h.startsWith("[object "))return h;if(t.__sentry_skip_normalization__)return t;var l="number"==typeof t.__sentry_override_normalization_depth__?t.__sentry_override_normalization_depth__:r;if(0===l)return h.replace("object ","");if(s(t))return"[Circular ~]";var d=t;if(d&&"function"==typeof d.toJSON)try{return Yn("",d.toJSON(),l-1,e,i)}catch(n){}var y=Array.isArray(t)?[]:{},p=0,g=cn(t);for(var b in g)if(Object.prototype.hasOwnProperty.call(g,b)){if(p>=e){y[b]="[MaxProperties ~]";break}var w=g[b];y[b]=Yn(b,w,l-1,e,i),p++}return v(t),y}n||(Wn={}));var Zn=);r tt=["fatal","error","warning","log","info","debug"];r it=);!);var ot=/^sentry-/;ar at=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function ct(n,t){var r=n),e=function(n){if(d(n)||Array.isArray(n)){var t={};if(Array.isArray(n))t=n.reduce((,{});else{if(!n)return;t=ut(n)}var r=Object.entries(t).reduce((function(n,t){var r=a(t,2),e=r[0],i=r[1];return e.match(ot)&&(n[e.slice("sentry-".length)]=i),n}),{});return Object.keys(r).length>0?r:void 0}}(t),i=r||{},o=i.traceId,c=i.parentSpanId,f=i.parentSampled,s={traceId:o||dn(),spanId:dn().substring(16),sampled:f};return c&&(s.parentSpanId=c),e&&(s.dsc=e),{traceparentData:r,dynamicSamplingContext:e,propagationContext:s}}={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",statsd:"unknown"};function pt(n){return yt[n]} wt=),_t=),Et=function(){eturn n.prototype.setupOnce=function(){},n.id="BrowserTracing",n}();var jt="production"; WeakMap;ar Lt=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];ction Ht(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(2===n.length){var r=a(n,2),e=r[0],i=r[1];if(!e)return or().withScope(i);var o=or();return o.withScope(()}return or().withScope(n[0])}function Pt(){return or().getClient()}function qt(){return or().getScope()}function Ft(n){var t=Pt(),r=ur(),i=qt(),o=t&&t.getOptions()||{},u=o.release,a=o.environment,c=void 0===a?jt:a,f=(D.navigator||{}).userAgent,s=Ot(e(e({release:u,environment:c,user:r.getUser()},f&&{userAgent:f}),n)),v=r.getSession();return v&&"ok"===v.status&&Tt(v,{status:"exited"}),Wt(),r.setSession(s),i.setSession(s),s}nction Gt(n){void 0===n&&(n=!1),n?Wt():Bt()}unction zt(n){var t=Pt();if(!t)return{};var r=Xt(It(n).trace_id||"",t,qt()),e=n.transaction;if(!e)return r;var i=e&&e._frozenDynamicSamplingContext;if(i)return i;var o=e.metadata,u=o.sampleRate,a=o.source;null!=u&&(r.sample_rate="".concat(u));var c=It(e);return a&&"url"!==a&&(r.transaction=c.description),r.sampled=String(function(n){var t=n.spanContext().traceFlags;return Boolean(1&t)}(e)),t.emit&&t.emit("createDsc",r),r}function Jt(n,t){var r=t.fingerprint,i=t.span,o=t.breadcrumbs,u=t.sdkProcessingMetadata,f=t.propagationContext;!function(n,t){var r=t.extra,i=t.tags,o=t.user,u=t.contexts,a=t.level,c=t.transactionName;r&&Object.keys(r).length&&(n.extra=e(e({},r),n.extra));i&&Object.keys(i).length&&(n.tags=e(e({},i),n.tags));o&&Object.keys(o).length&&(n.user=e(e({},o),n.user));u&&Object.keys(u).length&&(n.contexts=e(e({},u),n.contexts));a&&(n.level=a);c&&(n.transaction=c)}(n,t),i&&function(n,t){n.contexts=e({trace:At(t)},n.contexts);var r=t.transaction;if(r){n.sdkProcessingMetadata=e({dynamicSamplingContext:zt(t)},n.sdkProcessingMetadata);var i=It(r).description;i&&(n.tags=e({transaction:i},n.tags))}}(n,i),n,r),n,o),function(n,t,r){n.sdkProcessingMetadata=e(e(e({},n.sdkProcessingMetadata),t),{propagationContext:r})}(n,u,f)}unction Vt(n,t,r){r&&Object.keys(r).length&&(n[t]=e(e({},n[t]),r))}var Kt,Zt=function(){eturn n.clone=n.prototype.clone=n.prototype.setClient=n.prototype.getClient=function(){return this.q},n.prototype.addScopeListener=function(n){this.j.push(n)},n.prototype.addEventProcessor=function(n){return this.S.push(n),this},n.prototype.setUser=n.prototype.getUser=function(){return this.T},n.prototype.getRequestSession=function(){return this.P},n.prototype.setRequestSession=function(n){return this.P=n,this},n.prototype.setTags=function(n){return this.R=e(e({},this.R),n),this.F(),this},n.prototype.setTag=function(n,t){var r;return this.R=e(e({},this.R),((r={})[n]=t,r)),this.F(),this},n.prototype.setExtras=n.prototype.setExtra=n.prototype.setFingerprint=function(n){return this.H=n,this.F(),this},n.prototype.setLevel=function(n){return this.C=n,this.F(),this},n.prototype.setTransactionName=function(n){return this.U=n,this.F(),this},n.prototype.setContext=n.prototype.setSpan=n.prototype.getSpan=function(){return this.N},n.prototype.getTransaction=n.prototype.setSession=n.prototype.getSession=function(){return this.L},n.prototype.update=n.prototype.clear=n.prototype.addBreadcrumb=n.prototype.getLastBreadcrumb=function(){return this.k[this.k.length-1]},n.prototype.clearBreadcrumbs=n.prototype.addAttachment=n.prototype.getAttachments=function(){return this.getScopeData().attachments},n.prototype.clearAttachments=n.prototype.getScopeData=function(){var n=this;return{breadcrumbs:n.k,attachments:n.O,contexts:n.D,tags:n.R,extra:n.A,user:n.T,level:n.C,fingerprint:n.H||[],eventProcessors:n.S,propagationContext:n.M,sdkProcessingMetadata:n.I,transactionName:n.U,span:n.N}},n.prototype.applyToEvent=n.prototype.setSDKProcessingMetadata=n.prototype.setPropagationContext=n.prototype.getPropagationContext=function(){return this.M},n.prototype.captureException=n.prototype.captureMessage=n.prototype.captureEvent=n.prototype.F=n}();ar nr="7.93.0",tr=parseFloat(nr),rr=function(){eturn n.prototype.isOlderThan=n.prototype.bindClient=n.prototype.pushScope=n.prototype.popScope=n.prototype.withScope=n.prototype.getClient=function(){return this.getStackTop().client},n.prototype.getScope=n.prototype.getIsolationScope=function(){return this.G},n.prototype.getStack=function(){return this.B},n.prototype.getStackTop=n.prototype.captureException=n.prototype.captureMessage=n.prototype.captureEvent=n.prototype.lastEventId=function(){return this.X},n.prototype.addBreadcrumb=n.prototype.setUser=function(n){this.getScope().setUser(n)},n.prototype.setTags=function(n){this.getScope().setTags(n)},n.prototype.setExtras=n.prototype.setTag=function(n,t){this.getScope().setTag(n,t)},n.prototype.setExtra=function(n,t){this.getScope().setExtra(n,t)},n.prototype.setContext=n.prototype.configureScope=n.prototype.run=n.prototype.getIntegration=n.prototype.startTransaction=n.prototype.traceHeaders=n.prototype.captureSession=n.prototype.endSession=n.prototype.startSession=n.prototype.shouldSendDefaultPii=n.prototype.Y=n.prototype.V=n.prototype.J=n}();ction ur(){return or().getIsolationScope()}on lr(n){if(n.startTime){var t=e({},n);return t.startTimestamp="number"==typeof(r=n.startTime)?Dt(r):Array.isArray(r)?r[0]+r[1]/1e9:r instanceof Date?Dt(r.getTime()):it(),delete t.startTime,t}var r;return n}gr=[];nction _r(n,t){return Object.assign((function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e({setupOnce:function(){}},t.apply(void 0,c([],a(n),!1)))}),{id:n})}var Er=/[^a-zA-Z0-9_/.-]+/g,jr=/[^\w\d_:/@.{}[\]$-]+/g;ar xr,kr=function(){eturn n.prototype.captureException=n.prototype.captureMessage=n.prototype.captureEvent=n.prototype.captureSession=n.prototype.getDsn=function(){return this.un},n.prototype.getOptions=function(){return this.Z},n.prototype.getSdkMetadata=function(){return this.Z.K},n.prototype.getTransport=function(){return this.an},n.prototype.flush=n.prototype.close=n.prototype.getEventProcessors=n.prototype.addEventProcessor=function(n){this.S.push(n)},n.prototype.setupIntegrations=function(n){var t,r,e;(n&&!this.nn||this.vn()&&!this.nn)&&(this._integrations=(t=this,r=this.Z.integrations,e={},r.forEach((),e),this.nn=!0)},n.prototype.getIntegrationById=n.prototype.getIntegration=n.prototype.addIntegration=n.prototype.sendEvent=n.prototype.sendSession=n.prototype.recordDroppedEvent=n.prototype.captureAggregateMetrics=n.prototype.on=n.prototype.emit=n.prototype.ln=n.prototype.sn=n.prototype.vn=n.prototype.dn=function(n,t,r,i){var o=this;void 0===i&&(i=ur());var u=this.getOptions(),a=Object.keys(this._integrations);return!t.integrations&&a.length>0&&(t.integrations=a),this.emit("preprocessEvent",n,t),Mt(u,n,t,r,this,i).then((function(n){if(null===n)return n;var t=(n.sdkProcessingMetadata||{}).propagationContext;if(!(n.contexts&&n.contexts.trace)&&t){var i=t,u=i.traceId,a=i.spanId,c=i.parentSpanId,f=i.dsc;n.contexts=e({trace:{trace_id:u,span_id:a,parent_span_id:c}},n.contexts);var s=f||Xt(u,o,r);n.sdkProcessingMetadata=e({dynamicSamplingContext:s},n.sdkProcessingMetadata)}return n}))},n.prototype.fn=n.prototype.yn=function(n,t,r){var i=this,o=this.getOptions(),u=o.sampleRate,a=Tr(n),c=Or(n),f=n.type||"error",s="before send for type `".concat(f,"`");if(c&&"number"==typeof u&&Math.random()>u)return this.recordDroppedEvent("sample_rate","error",n),Kn(new G("Discarding event because it's not included in the random sample (sampling rate = ".concat(u,")"),"log"));var v="replay_event"===f?"replay":f;return this.dn(n,t,r).then(().then(().then(null,()},n.prototype.cn=n.prototype.hn=n.prototype.pn=n}();r Rr=),Ar=),Dr=),Ir=),Mr=((xr={}).c=Rr,xr.g=Ar,xr.d=Dr,xr.s=Ir,xr);var Cr;r Ur="FunctionToString",$r=_r(Ur,(function(){return{name:Ur,setupOnce:function(){Cr=Function.prototype.toString;try{Function.prototype.toString=catch(n){}}}})),Hr=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Pr=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],qr="InboundFilters",Fr=_r(qr,(function(n){return{name:qr,processEvent:}));ar Br="LinkedErrors",Gr=_r(Br,(function(n){void 0===n&&(n={});var t=n.limit||5,r=n.key||"cause";return{name:Br,preprocessEvent:function(n,e,i){var o=i.getOptions();k(bt,o.stackParser,o.maxValueLength,r,t,n,e)}}})),Xr=Object.freeze({__proto__:null,FunctionToString:$r,InboundFilters:Fr,LinkedErrors:Gr}),zr=),Jr="MetricsAggregator";ar Vr={increment:distribution:function(n,t,r){Yr("d",n,t,r)},set:function(n,t,r){Yr("s",n,t,r)},gauge:MetricsAggregator:_r(Jr,(function(){return{name:Jr,setup:}))},Kr=D,Zr=0;=/Minified React error #\d+;/i;function(n){function t(t){var r=this,e=Kr.SENTRY_SDK_SOURCE||"cdn";return t.K=t.K||{},t.K.sdk=t.K.sdk||{name:"sentry.javascript.browser",packages:[{name:"".concat(e,":@sentry/browser"),version:nr}],version:nr},r=n.call(this,t)||this,t.sendClientReports&&Kr.document&&Kr.document.addEventListener("visibilitychange",(),r}return r(t,n),t.prototype.eventFromException=t.prototype.eventFromMessage=t.prototype.captureUserFeedback=t.prototype.dn=t.prototype.Sn=t}(kr),de=void 0;r me="?";ar be=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,we=/\((\S*)(?::(\d+))(?::(\d+))\)/,_e=[30,,Ee=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,je=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Se=[50,,xe=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,ke=[40,,Oe=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,Te=[10,,Re=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,Ae=[20,,De=[_e,Se,ke],Ie=J.apply(void 0,c([],a(De),!1)),Me=Ce="GlobalHandlers",Ne=_r(Ce,(function(n){void 0===n&&(n={});var t=e({onerror:!0,onunhandledrejection:!0},n);return{name:Ce,setupOnce:setup:function(n){t.onerror&&function(n){t=function(t){var r=Ue(),e=r.stackParser,i=r.attachStacktrace;if(Pt()===n&&!Qr()){var o=t.msg,u=t.url,a=t.line,c=t.column,f=t.error,s=void 0===f&&d(o)?o,u,a,c):Le(fe(e,f||o,void 0,i,!1),u,a,c);s.level="error",Ut(s,{originalException:f,mechanism:{handled:!1,type:"onerror"}})}},r="error",nn(r,t),tn(r,Ln);var t,r}(n),t.onunhandledrejection&&function(n){t=r="unhandledrejection",nn(r,t),tn(r,$n);var t,r}(n)}}}));r $e=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],He="TryCatch",Pe=_r(He,();Ge=1024,Xe="Breadcrumbs",ze=_r(Xe,(function(n){void 0===n&&(n={});var t=e({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},n);return{name:Xe,setup:function(n){var r,i;t.console&&(r=n),nn(i="console",r),tn(i,ln)),t.dom&&function(n){nn("dom",n),tn("dom",xn)}(function(n,t){return function(r){if(Pt()===n){var e,i,o,u="object"==typeof t?t.serializeAttribute:void 0,a="object"==typeof t&&"number"==typeof t.maxStringLength?t.maxStringLength:void 0;a&&a>Ge&&(a=Ge),"string"==typeof u&&(u=[u]);try{var c=r.event,f=(o=c)&&o.target?c.target:c;e=N(f,{keyAttrs:u,maxStringLength:a}),i=f)}catch(n){e="<unknown>"}if(0!==e.length){var s={category:"ui.".concat(r.name),message:e};i&&(s.data={"ui.component_name":i}),$t(s,{event:r.event,name:r.name,global:r.global})}}}}(n,t.dom)),t.xhr&&n)),t.fetch&&n)),t.history&&qn(n)),t.sentry&&n.on&&n.on("beforeSendEvent",n))}}}));var Je="LinkedErrors",Ye=_r(Je,(function(n){void 0===n&&(n={});var t=n.limit||5,r=n.key||"cause";return{name:Je,preprocessEvent:})),Ve="HttpContext",Ke=_r(Ve,(function(){return{name:Ve,preprocessEvent:})),Ze="Dedupe",Qe=_r(Ze,(function(){var n;return{name:Ze,processEvent:}));ii=Object.freeze({__proto__:null,GlobalHandlers:Ne,TryCatch:Pe,Breadcrumbs:ze,LinkedErrors:Ye,HttpContext:Ke,Dedupe:Qe}),oi=[new Fr,new $r,new Pe,new ze,new Ne,new Ye,new Qe,new Ke];var ui={};Kr.Sentry&&Kr.Sentry.Integrations&&(ui=Kr.Sentry.Integrations);var ai=e(e(e({},ui),Xr),ii);return ai.Replay=_t,ai.BrowserTracing=Et,n.Breadcrumbs=ze,n.BrowserClient=le,n.BrowserTracing=Et,n.Dedupe=Qe,n.Feedback=wt,n.FunctionToString=$r,n.GlobalHandlers=Ne,n.HttpContext=Ke,n.Hub=rr,n.InboundFilters=Fr,n.Integrations=ai,n.LinkedErrors=Ye,n.Replay=_t,n.SDK_VERSION=nr,n.Scope=Zt,n.TryCatch=Pe,n.WINDOW=Kr,n.addBreadcrumb=$t,n.addEventProcessor=function(n){var t=Pt();t&&t.addEventProcessor&&t.addEventProcessor(n)},n.addGlobalEventProcessor=xt,n.addIntegration=n.addTracingExtensions=function(){},n.captureEvent=Ut,n.captureException=captureException,n.captureMessage=n.captureUserFeedback=n.chromeStackLineParser=_e,n.close=function(n){return i(this,void 0,void 0,(function(){var t;return o(this,(function(r){return(t=Pt())?[2,t.close(n)]:[2,Promise.resolve(!1)]}))}))},n.configureScope=function(n){or().configureScope(n)},n.continueTrace=function(n,t){var r=n.sentryTrace,i=n.baggage,o=qt(),u=ct(r,i),a=u.traceparentData,c=u.dynamicSamplingContext,f=u.propagationContext;o.setPropagationContext(f);var s=e(e({},a),{metadata:vn({dynamicSamplingContext:a&&!c?{}:c})});return t?t(s):s},n.createTransport=Nr,n.createUserFeedbackEnvelope=he,n.defaultIntegrations=oi,n.defaultStackLineParsers=De,n.defaultStackParser=Ie,n.eventFromException=ae,n.eventFromMessage=ce,n.exceptionFromError=re,n.flush=n.forceLoad=n.geckoStackLineParser=Se,n.getActiveSpan=vr,n.getClient=Pt,n.getCurrentHub=or,n.getCurrentScope=qt,n.getHubFromCarrier=ar,n.init=function(n){void 0===n&&(n={}),void 0===n.defaultIntegrations&&(n.defaultIntegrations=oi),void 0===n.release&&("string"==typeof __SENTRY_RELEASE__&&(n.release=__SENTRY_RELEASE__),Kr.SENTRY_RELEASE&&Kr.SENTRY_RELEASE.id&&(n.release=Kr.SENTRY_RELEASE.id)),void 0===n.autoSessionTracking&&(n.autoSessionTracking=!0),void 0===n.sendClientReports&&(n.sendClientReports=!0);var t,r=e(e({},n),{stackParser:(t=n.stackParser||Ie,Array.isArray(t)?J.apply(void 0,c([],a(t),!1)):t),integrations:br(n),transport:n.transport||(Rn()?ye:pe)});!function(n,t){!0===t.debug&&H(();var r=or();r.getScope().update(t.initialScope);var e=new n(t);r.bindClient(e)}(le,r),n.autoSessionTracking&&)},n.lastEventId=n.makeFetchTransport=ye,n.makeMain=ir,n.makeXHRTransport=pe,n.metrics=Vr,n.onLoad=n.opera10StackLineParser=Te,n.opera11StackLineParser=Ae,n.setContext=function(n,t){or().setContext(n,t)},n.setExtra=function(n,t){or().setExtra(n,t)},n.setExtras=function(n){or().setExtras(n)},n.setTag=n.setTags=function(n){or().setTags(n)},n.setUser=n.showReportDialog=n.startInactiveSpan=function(n){if(fr()){var t=lr(n),r=or(),e=n.scope?n.scope.getSpan():vr();return e?e.startChild(t):r.startTransaction(t)}},n.startSpan=function(n,t){var r=lr(n);return Ht(n.scope,(function(n){var e=hr(or(),n.getSpan(),r);return n.setSpan(e),sr((,(function(){!e||e.status&&"ok"!==e.status||e.setStatus("internal_error")}),()}))},n.startSpanManual=function(n,t){var r=lr(n);return Ht(n.scope,(function(n){var e=hr(or(),n.getSpan(),r);eturn n.setSpan(e),sr((,(function(){!e||e.endTimestamp||e.status&&"ok"!==e.status||e.setStatus("internal_error")}))}))},n.startTransaction=n.winjsStackLineParser=ke,n.withScope=Ht,n.wrap="includes"in Array.prototype||(Array.prototype.includes=function(n){return this.indexOf(n)>-1}),"find"in Array.prototype||(Array.prototype.find=,"findIndex"in Array.prototype||(Array.prototype.findIndex=,"includes"in String.prototype||(String.prototype.includes=,"startsWith"in String.prototype||(String.prototype.startsWith=,"endsWith"in String.prototype||(String.prototype.endsWith=,n}({});
//# sourceMappingURL=bundle.es5.min.js.map