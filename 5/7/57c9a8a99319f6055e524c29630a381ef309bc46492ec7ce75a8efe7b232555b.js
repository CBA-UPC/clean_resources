/*! @sentry/browser 6.13.3 (cbb01ba) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(t){var n=ar i,e,o,u,s,c,a,f=tion p(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function y(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function m(t){return"[object String]"===Object.prototype.toString.call(t)}nction g(t){return"undefined"!=typeof Event&&j(t,Event)}i={})),function(t){t.Ok="ok",t.Exited="exited",t.Crashed="crashed",t.Abnormal="abnormal"}(e||(e={})),function(t){t.Ok="ok",t.Errored="errored",t.Crashed="crashed"}(o||(o={})),(u=t.Severity||(t.Severity={})).Fatal="fatal",u.Error="error",u.Warning="warning",u.Log="log",u.Info="info",u.Debug="debug",u.Critical="critical",t.Severity||(t.Severity={})),(s=t.Status||(t.Status={})).Unknown="unknown",s.Skipped="skipped",s.Success="success",s.RateLimit="rate_limit",s.Invalid="invalid",s.Failed="failed",t.Status||(t.Status={})),c||(c={})),a||(a={}));var S=Object.setPrototypeOf||({__proto__:[]}instanceof Array?;var O=Error),D=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,T=);M={};e4;var X=A(),B="Sentry Logger ",W=);X.__SENTRY__=X.__SENTRY__||{};var $=X.__SENTRY__.logger||(X.__SENTRY__.logger=new W),G=),K="<anonymous>";ion tt(t,n){return"domain"===n&&t&&"object"==typeof t&&t.v?"[Domain]":"domainEmitter"===n?"[DomainEmitter]":"undefined"!=typeof global&&t===global?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":w(r=t)&&"nativeEvent"in r&&"preventDefault"in r&&"stopPropagation"in r?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?"[Function: "+z(t)+"]":"symbol"==typeof t?"["+String(t)+"]":"bigint"==typeof t?"[BigInt: "+String(t)+"]":t;var r}at=A(),ft={},ht={};function vt(t){if(!ht[t])switch(ht[t]=!0,t){case"console":!);break;case"dom":!);break;case"xhr":!);break;case"fetch":!);break;case"history":!function(){if(t=A(),n=t.chrome,r=n&&n.app&&n.app.runtime,i="history"in t&&!!t.history.pushState&&!!t.history.replaceState,r||!i)return;var t,n,r,i;var e=at.onpopstate;t.onpopstate=V(at.history,"pushState",o),V(at.history,"replaceState",o)}();break;case"error":Et=at.onerror,at.onerror=break;case"unhandledrejection":jt=at.onunhandledrejection,at.onunhandledrejection=break;default:$.warn("unknown instrumentation type:",t)}}mt,bt,wt=1e3;ar Et=null;var xt,jt=null;!xt||(xt={}));var _t=),kt=),St={nowSeconds:;var Ot=N()?):),Dt=void 0===Ot?St:{nowSeconds:,Tt=St.nowSeconds.bind(St),Nt=Dt.nowSeconds.bind(Dt),Rt=(function(){var t=A().performance;if(t&&t.now){var n=t.now(),r=Date.now(),i=t.timeOrigin?Math.abs(t.timeOrigin+n-r):36e5,e=i<36e5,o=t.timing&&t.timing.navigationStart,u="number"==typeof o?Math.abs(o+n-r):36e5;(e||u<36e5)&&(i<=u&&t.timeOrigin)}}(),function(){eturn t.clone=t.prototype.addScopeListener=t.prototype.addEventProcessor=t.prototype.setUser=t.prototype.getUser=function(){return this.C},t.prototype.getRequestSession=function(){return this.J},t.prototype.setRequestSession=t.prototype.setTags=function(t){return this.M=f(f({},this.M),t),this.X(),this},t.prototype.setTag=function(t,n){var r;return this.M=f(f({},this.M),((r={})[t]=n,r)),this.X(),this},t.prototype.setExtras=t.prototype.setExtra=t.prototype.setFingerprint=function(t){return this.P=t,this.X(),this},t.prototype.setLevel=function(t){return this.L=t,this.X(),this},t.prototype.setTransactionName=function(t){return this.F=t,this.X(),this},t.prototype.setTransaction=t.prototype.setContext=t.prototype.setSpan=t.prototype.getSpan=function(){return this.U},t.prototype.getTransaction=t.prototype.setSession=t.prototype.getSession=function(){return this.H},t.prototype.update=t.prototype.clear=t.prototype.addBreadcrumb=t.prototype.clearBreadcrumbs=t.prototype.applyToEvent=t.prototype.W=t.prototype.X=t.prototype.B=t}());r Mt=function(){function t(t){this.errors=0,this.sid=q(),this.duration=0,this.status=e.Ok,this.init=!0,this.ignoreDuration=!1;var n=Nt();this.timestamp=n,this.started=n,t&&this.update(t)}return t.prototype.update=t.prototype.close=t.prototype.toJSON=t}(),At=4,qt=function(){eturn t.prototype.isOlderThan=t.prototype.bindClient=t.prototype.pushScope=t.prototype.popScope=t.prototype.withScope=t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=t.prototype.getStack=function(){return this.G},t.prototype.getStackTop=t.prototype.captureException=t.prototype.captureMessage=t.prototype.captureEvent=t.prototype.lastEventId=function(){return this.K},t.prototype.addBreadcrumb=t.prototype.setUser=function(t){var n=this.getScope();n&&n.setUser(t)},t.prototype.setTags=function(t){var n=this.getScope();n&&n.setTags(t)},t.prototype.setExtras=t.prototype.setTag=function(t,n){var r=this.getScope();r&&r.setTag(t,n)},t.prototype.setExtra=function(t,n){var r=this.getScope();r&&r.setExtra(t,n)},t.prototype.setContext=t.prototype.configureScope=t.prototype.run=t.prototype.getIntegration=t.prototype.startSpan=t.prototype.startTransaction=t.prototype.traceHeaders=function(){return this.Y("traceHeaders")},t.prototype.captureSession=t.prototype.endSession=t.prototype.startSession=function(t){var n=this.getStackTop(),r=n.scope,i=n.client,o=i&&i.getOptions()||{},u=o.release,s=o.environment,c=(A().navigator||{}).userAgent,a=new Mt(f(f(f({release:u,environment:s},r&&{user:r.getUser()}),c&&{userAgent:c}),t));if(r){var h=r.getSession&&r.getSession();h&&h.status===e.Ok&&h.update({status:e.Exited}),this.endSession(),r.setSession(a)}return a},t.prototype.Z=t.prototype.V=t.prototype.Y=t}();nction Ht(){var t=Lt();return Ft(t)&&!Pt(t).isOlderThan(At)||Jt(t,new qt),N()?t):Pt(t)}=),$t=[];unction Kt(t){var n={};return t).forEach(,Object.defineProperty(n,"initialized",{value:!0}),n}var zt=function(){eturn t.prototype.captureException=t.prototype.captureMessage=t.prototype.captureEvent=t.prototype.captureSession=t.prototype.getDsn=function(){return this.at},t.prototype.getOptions=function(){return this.ct},t.prototype.getTransport=t.prototype.flush=t.prototype.close=t.prototype.setupIntegrations=t.prototype.getIntegration=t.prototype.yt=t.prototype.dt=function(t){this.ht().sendSession(t)},t.prototype.pt=t.prototype.ht=function(){return this.st},t.prototype.lt=t.prototype.bt=t.prototype.Et=t.prototype.wt=t.prototype.gt=t.prototype.jt=t.prototype.vt=t.prototype._t=t.prototype.ft=t.prototype.kt=t}(),Vt=),Qt=);ction nn(t,n){var r=Yt(n),i=t.type||"event",e="transaction"===i||n.forceEnvelope(),o=t.debug_meta||{},u=o.transactionSampling,s=o,["transactionSampling"]),c=u||{},a=c.method,h=c.rate;0===Object.keys(s).length?delete t.debug_meta:t.debug_meta=s;var v={body:JSON.stringify(r?Zt(t,n.metadata.sdk):t),type:i,url:e?n.getEnvelopeEndpointWithUrlEncodedAuth():n.getStoreEndpointWithUrlEncodedAuth()};if(e){var l=JSON.stringify(f(f({event_id:t.event_id,sent_at:(new Date).toISOString()},r&&{sdk:r}),n.forceEnvelope()&&{dsn:n.getDsn().toString()}))+"\n"+JSON.stringify({type:i,sample_rates:[{id:a,rate:h}]})+"\n"+v.body;v.body=l}return v}var rn,en="6.13.3",on=),un=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],sn=function(){eturn t.prototype.setupOnce=t.prototype.Dt=t.prototype.Tt=t.prototype.Nt=t.prototype.Rt=t.prototype.Ct=t.prototype._mergeOptions=t.prototype.Mt=t.prototype.At=t.prototype.It=t.id="InboundFilters",t}(),cn=Object.freeze({__proto__:null,FunctionToString:on,InboundFilters:sn}),an="?",fn=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,hn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i,vn=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,ln=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,dn=/\((\S*)(?::(\d+))(?::(\d+))\)/,pn=/Minified React error #\d+;/i;function yn(t){var n=null,r=0;t&&("number"==typeof t.framesToPop?r=t.framesToPop:pn.test(t.message)&&(r=1));try{if(n=t))return bn(n,r)}catch(t){}try{if(n=function(t){var n,r;if(!t||!t.stack)return null;for(var i,e,o,u=[],s=t.stack.split("\n"),c=0;c<s.length;++c){if(e=fn.exec(s[c])){var a=e[2]&&0===e[2].indexOf("native");e[2]&&0===e[2].indexOf("eval")&&(i=dn.exec(e[2]))&&(e[2]=i[1],e[3]=i[2],e[4]=i[3]);var f=e[2]&&0===e[2].indexOf("address at ")?e[2].substr("address at ".length):e[2],h=e[1]||an;n=v(mn(h,f),2),h=n[0],f=n[1],o={url:f,func:h,args:a?[e[2]]:[],line:e[3]?+e[3]:null,column:e[4]?+e[4]:null}}else if(e=vn.exec(s[c]))o={url:e[2],func:e[1]||an,args:[],line:+e[3],column:e[4]?+e[4]:null};else{if(!(e=hn.exec(s[c])))continue;e[3]&&e[3].indexOf(" > eval")>-1&&(i=ln.exec(e[3]))?(e[1]=e[1]||"eval",e[3]=i[1],e[4]=i[2],e[5]=""):0!==c||e[5]||void 0===t.columnNumber||(u[0].column=t.columnNumber+1);var f=e[3],h=e[1]||an;r=v(mn(h,f),2),h=r[0],f=r[1],o={url:f,func:h,args:e[2]?e[2].split(","):[],line:e[4]?+e[4]:null,column:e[5]?+e[5]:null}}!o.func&&o.line&&(o.func=an),u.push(o)}if(!u.length)return null;return{message:wn(t),name:t.name,stack:u}}(t))return bn(n,r)}catch(t){}return{message:wn(t),name:t&&t.name,stack:[],failed:!0}}var mn=r gn=50;Tn=A();r In={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},Cn=A(),Mn=function(){eturn n.prototype.sendEvent=n.prototype.close=n.prototype.recordLostEvent=n.prototype.Ft=function(){if(this.options.sendClientReports){var t=this.Lt;if(this.Lt={},Object.keys(t).length){$.log("Flushing outcomes:\n"+JSON.stringify(t,null,2));var n=this.Ut.getEnvelopeEndpointWithUrlEncodedAuth(),r=JSON.stringify({})+"\n"+JSON.stringify({type:"client_report"})+"\n"+JSON.stringify({timestamp:Tt(),discarded_events:Object.keys(t).map(});try{Rn(n,r)}catch(t){$.error(t)}}else $.log("No outcomes to flush")}},n.prototype.Pt=function(n){var r=n.requestType,i=n.response,e=n.headers,o=n.resolve,u=n.reject,s=t.Status.fromHttpCode(i.status);this.Jt(e)&&$.warn("Too many "+r+" requests, backing off until: "+this.Xt(r)),s!==t.Status.Success?u(i):o({status:s})},n.prototype.Xt=n.prototype.Bt=n.prototype.Jt=n}(),An=Mn),qn=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.sendEvent=function(t){return this.$t(nn(t,this.Ut),t)},n.prototype.sendSession=n.prototype.$t=n}(Mn),Ln=Object.freeze({__proto__:null,BaseTransport:Mn,FetchTransport:An,XHRTransport:qn}),Un=function(n){eturn r(i,n),i.prototype.eventFromException=i.prototype.eventFromMessage=i.prototype.Ot=i}(Qt),Hn=A(),Fn=0; Bn=function(){eturn n.prototype.setupOnce=n.prototype.zt=n.prototype.Vt=n.prototype.Qt=n.prototype.Zt=n.prototype.Yt=function(t,n,r,i){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[];var e=isNaN(parseInt(i,10))?void 0:i,o=isNaN(parseInt(r,10))?void 0:r,u=m(n)&&n.length>0?n:);return 0===t.exception.values[0].stacktrace.frames.length&&t.exception.values[0].stacktrace.frames.push({colno:e,filename:u,function:"?",in_app:!0,lineno:o}),t},n.id="GlobalHandlers",n}(),Wn=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],$n=function(){eturn t.prototype.setupOnce=t.prototype.tn=t.prototype.nn=t.prototype.in=t.prototype.rn=t.id="TryCatch",t}(),Gn=function(){eturn n.prototype.addSentryBreadcrumb=n.prototype.setupOnce=n.prototype.en=n.prototype.on=n.prototype.un=n.prototype.sn=n.prototype.cn=n.id="Breadcrumbs",n}(),Kn="cause",zn=5,Vn=function(){eturn t.prototype.setupOnce=t.prototype.fn=t.prototype.hn=t.id="LinkedErrors",t}(),Qn=A(),Yn=),Zn=),tr=Object.freeze({__proto__:null,GlobalHandlers:Bn,TryCatch:$n,Breadcrumbs:Gn,LinkedErrors:Vn,UserAgent:Yn,Dedupe:Zn}),nr=function(t){eturn r(n,t),n.prototype.showReportDialog=n.prototype.bt=n.prototype.jt=n}(zt),rr=[new sn,new on,new $n,new Gn,new Bn,new Vn,new Zn,new Yn];var ir={},er=A();er.Sentry&&er.Sentry.Integrations&&(ir=er.Sentry.Integrations);var or=f(f(f({},ir),cn),tr);return t.BrowserClient=nr,t.Hub=qt,t.Integrations=or,t.SDK_NAME="sentry.javascript.browser",t.SDK_VERSION=en,t.Scope=Rt,t.Transports=Ln,t.addBreadcrumb=function(t){Xt("addBreadcrumb",t)},t.addGlobalEventProcessor=Ct,t.captureEvent=t.captureException=captureException,t.captureMessage=t.close=function(t){var n=Ht().getClient();return n?n.close(t):($.warn("Cannot flush events and disable SDK. No client defined."),_t.resolve(!1))},t.configureScope=function(t){Xt("configureScope",t)},t.defaultIntegrations=rr,t.eventFromException=_n,t.eventFromMessage=kn,t.flush=function(t){var n=Ht().getClient();return n?n.flush(t):($.warn("Cannot flush events. No client defined."),_t.resolve(!1))},t.forceLoad=t.getCurrentHub=Ht,t.getHubFromCarrier=Pt,t.init=function(t){if(void 0===t&&(t={}),void 0===t.defaultIntegrations&&(t.defaultIntegrations=rr),void 0===t.release){var n=A();n.SENTRY_RELEASE&&n.SENTRY_RELEASE.id&&(t.release=n.SENTRY_RELEASE.id)}void 0===t.autoSessionTracking&&(t.autoSessionTracking=!0),void 0===t.sendClientReports&&(t.sendClientReports=!0),nr,t),t.autoSessionTracking&&function(){if(void 0!==A().document){var t=Ht();"function"==typeof t.startSession&&"function"==typeof t.captureSession&&(t.startSession({ignoreDuration:!0}),t.captureSession(),lt({callback:type:"history"}))}else $.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")}()},t.injectReportDialog=Xn,t.lastEventId=t.makeMain=Ut,t.onLoad=t.setContext=function(t,n){Xt("setContext",t,n)},t.setExtra=function(t,n){Xt("setExtra",t,n)},t.setExtras=function(t){Xt("setExtras",t)},t.setTag=t.setTags=function(t){Xt("setTags",t)},t.setUser=t.showReportDialog=t.startTransaction=t.withScope=Bt,t.wrap=t}({});
//# sourceMappingURL=bundle.min.js.map