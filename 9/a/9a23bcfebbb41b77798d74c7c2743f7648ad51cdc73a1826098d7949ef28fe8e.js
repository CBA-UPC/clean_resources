/*! @sentry/tracing & @sentry/browser 6.13.3 (cbb01ba) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(t){var n=ar r,e,o,u,s,a,c,f=ion m(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function y(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function g(t){return"[object String]"===Object.prototype.toString.call(t)}nction T(t){return"undefined"!=typeof Event&&x(t,Event)}r={})),function(t){t.Ok="ok",t.Exited="exited",t.Crashed="crashed",t.Abnormal="abnormal"}(e||(e={})),function(t){t.Ok="ok",t.Errored="errored",t.Crashed="crashed"}(o||(o={})),(u=t.Severity||(t.Severity={})).Fatal="fatal",u.Error="error",u.Warning="warning",u.Log="log",u.Info="info",u.Debug="debug",u.Critical="critical",t.Severity||(t.Severity={})),(s=t.Status||(t.Status={})).Unknown="unknown",s.Skipped="skipped",s.Success="success",s.RateLimit="rate_limit",s.Invalid="invalid",s.Failed="failed",t.Status||(t.Status={})),a||(a={})),c||(c={}));var j=Object.setPrototypeOf||({__proto__:[]}instanceof Array?;var k=Error),D=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,N=);={};e4;var G=q(),W="Sentry Logger ",z=);G.__SENTRY__=G.__SENTRY__||{};var $=G.__SENTRY__.logger||(G.__SENTRY__.logger=new z),K=),V="<anonymous>";ion it(t,n){return"domain"===n&&t&&"object"==typeof t&&t.v?"[Domain]":"domainEmitter"===n?"[DomainEmitter]":"undefined"!=typeof global&&t===global?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":w(i=t)&&"nativeEvent"in i&&"preventDefault"in i&&"stopPropagation"in i?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?"[Function: "+Y(t)+"]":"symbol"==typeof t?"["+String(t)+"]":"bigint"==typeof t?"[BigInt: "+String(t)+"]":t;var i}ht=q(),vt={},dt={};function lt(t){if(!dt[t])switch(dt[t]=!0,t){case"console":!);break;case"dom":!);break;case"xhr":!);break;case"fetch":!);break;case"history":!function(){if(t=q(),n=t.chrome,i=n&&n.app&&n.app.runtime,r="history"in t&&!!t.history.pushState&&!!t.history.replaceState,i||!r)return;var t,n,i,r;var e=ht.onpopstate;t.onpopstate=Q(ht.history,"pushState",o),Q(ht.history,"replaceState",o)}();break;case"error":Et=ht.onerror,ht.onerror=break;case"unhandledrejection":_t=ht.onunhandledrejection,ht.onunhandledrejection=break;default:$.warn("unknown instrumentation type:",t)}}bt,wt,Tt=1e3;ar Et=null;var xt,_t=null;!xt||(xt={}));var Ot=),jt=),kt={nowSeconds:;var Dt=I()?):),Nt=void 0===Dt?kt:{nowSeconds:,It=kt.nowSeconds.bind(kt),Ct=Nt.nowSeconds.bind(Nt),Rt=Ct,Mt=function(){var t=q().performance;if(t&&t.now){var n=t.now(),i=Date.now(),r=t.timeOrigin?Math.abs(t.timeOrigin+n-i):36e5,e=r<36e5,o=t.timing&&t.timing.navigationStart,u="number"==typeof o?Math.abs(o+n-i):36e5;return e||u<36e5?r<=u?t.timeOrigin:o:i}}(),At=function(){eturn t.clone=t.prototype.addScopeListener=function(t){this.N.push(t)},t.prototype.addEventProcessor=t.prototype.setUser=t.prototype.getUser=function(){return this.R},t.prototype.getRequestSession=function(){return this.J},t.prototype.setRequestSession=function(t){return this.J=t,this},t.prototype.setTags=function(t){return this.M=f(f({},this.M),t),this.B(),this},t.prototype.setTag=function(t,n){var i;return this.M=f(f({},this.M),((i={})[t]=n,i)),this.B(),this},t.prototype.setExtras=t.prototype.setExtra=t.prototype.setFingerprint=function(t){return this.H=t,this.B(),this},t.prototype.setLevel=function(t){return this.q=t,this.B(),this},t.prototype.setTransactionName=function(t){return this.U=t,this.B(),this},t.prototype.setTransaction=function(t){return this.setTransactionName(t)},t.prototype.setContext=t.prototype.setSpan=t.prototype.getSpan=function(){return this.F},t.prototype.getTransaction=t.prototype.setSession=t.prototype.getSession=function(){return this.P},t.prototype.update=t.prototype.clear=t.prototype.addBreadcrumb=t.prototype.clearBreadcrumbs=t.prototype.applyToEvent=t.prototype.G=t.prototype.B=t.prototype.X=t}();r Ft=function(){function t(t){this.errors=0,this.sid=F(),this.duration=0,this.status=e.Ok,this.init=!0,this.ignoreDuration=!1;var n=Ct();this.timestamp=n,this.started=n,t&&this.update(t)}return t.prototype.update=t.prototype.close=t.prototype.toJSON=t}(),Pt=4,Ut=function(){eturn t.prototype.isOlderThan=t.prototype.bindClient=t.prototype.pushScope=t.prototype.popScope=t.prototype.withScope=t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=t.prototype.getStack=function(){return this.$},t.prototype.getStackTop=t.prototype.captureException=t.prototype.captureMessage=t.prototype.captureEvent=t.prototype.lastEventId=function(){return this.K},t.prototype.addBreadcrumb=t.prototype.setUser=function(t){var n=this.getScope();n&&n.setUser(t)},t.prototype.setTags=function(t){var n=this.getScope();n&&n.setTags(t)},t.prototype.setExtras=t.prototype.setTag=function(t,n){var i=this.getScope();i&&i.setTag(t,n)},t.prototype.setExtra=function(t,n){var i=this.getScope();i&&i.setExtra(t,n)},t.prototype.setContext=t.prototype.configureScope=t.prototype.run=t.prototype.getIntegration=t.prototype.startSpan=t.prototype.startTransaction=t.prototype.traceHeaders=function(){return this.Y("traceHeaders")},t.prototype.captureSession=t.prototype.endSession=t.prototype.startSession=function(t){var n=this.getStackTop(),i=n.scope,r=n.client,o=r&&r.getOptions()||{},u=o.release,s=o.environment,a=(q().navigator||{}).userAgent,c=new Ft(f(f(f({release:u,environment:s},i&&{user:i.getUser()}),a&&{userAgent:a}),t));if(i){var h=i.getSession&&i.getSession();h&&h.status===e.Ok&&h.update({status:e.Exited}),this.endSession(),i.setSession(c)}return c},t.prototype.Z=t.prototype.V=t.prototype.Y=t}();nction Bt(){var t=Ht();return Xt(t)&&!Gt(t).isOlderThan(Pt)||Wt(t,new Ut),I()?t):Gt(t)}=),Vt=[];unction Qt(t){var n={};return t).forEach(,Object.defineProperty(n,"initialized",{value:!0}),n}var Zt=function(){eturn t.prototype.captureException=t.prototype.captureMessage=t.prototype.captureEvent=t.prototype.captureSession=t.prototype.getDsn=function(){return this.ct},t.prototype.getOptions=function(){return this.at},t.prototype.getTransport=t.prototype.flush=t.prototype.close=t.prototype.setupIntegrations=t.prototype.getIntegration=t.prototype.yt=t.prototype.lt=function(t){this.ht().sendSession(t)},t.prototype.pt=t.prototype.ht=function(){return this.st},t.prototype.dt=t.prototype.gt=t.prototype.Tt=t.prototype.bt=t.prototype.wt=t.prototype.Et=t.prototype.vt=t.prototype.xt=t.prototype.ft=t.prototype._t=t}(),tn=),nn=);sn,an="6.13.3",cn=),fn=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],hn=function(){eturn t.prototype.setupOnce=t.prototype.Dt=t.prototype.Nt=t.prototype.It=t.prototype.Ct=t.prototype.Mt=t.prototype.kt=t.prototype.At=t.prototype.Lt=t.prototype.Rt=t.id="InboundFilters",t}(),vn=Object.freeze({__proto__:null,FunctionToString:cn,InboundFilters:hn}),dn="?",ln=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,pn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i,mn=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,yn=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,gn=/\((\S*)(?::(\d+))(?::(\d+))\)/,bn=/Minified React error #\d+;/i;function wn(t){var n=null,i=0;t&&("number"==typeof t.framesToPop?i=t.framesToPop:bn.test(t.message)&&(i=1));try{if(n=t))return Sn(n,i)}catch(t){}try{if(n=function(t){var n,i;if(!t||!t.stack)return null;for(var r,e,o,u=[],s=t.stack.split("\n"),a=0;a<s.length;++a){if(e=ln.exec(s[a])){var c=e[2]&&0===e[2].indexOf("native");e[2]&&0===e[2].indexOf("eval")&&(r=gn.exec(e[2]))&&(e[2]=r[1],e[3]=r[2],e[4]=r[3]);var f=e[2]&&0===e[2].indexOf("address at ")?e[2].substr("address at ".length):e[2],h=e[1]||dn;n=d(Tn(h,f),2),h=n[0],f=n[1],o={url:f,func:h,args:c?[e[2]]:[],line:e[3]?+e[3]:null,column:e[4]?+e[4]:null}}else if(e=mn.exec(s[a]))o={url:e[2],func:e[1]||dn,args:[],line:+e[3],column:e[4]?+e[4]:null};else{if(!(e=pn.exec(s[a])))continue;e[3]&&e[3].indexOf(" > eval")>-1&&(r=yn.exec(e[3]))?(e[1]=e[1]||"eval",e[3]=r[1],e[4]=r[2],e[5]=""):0!==a||e[5]||void 0===t.columnNumber||(u[0].column=t.columnNumber+1);var f=e[3],h=e[1]||dn;i=d(Tn(h,f),2),h=i[0],f=i[1],o={url:f,func:h,args:e[2]?e[2].split(","):[],line:e[4]?+e[4]:null,column:e[5]?+e[5]:null}}!o.func&&o.line&&(o.func=dn),u.push(o)}if(!u.length)return null;return{message:En(t),name:t.name,stack:u}}(t))return Sn(n,i)}catch(t){}return{message:En(t),name:t&&t.name,stack:[],failed:!0}}var Tn=r xn=50;n,In=q();r Mn={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},An=q(),Ln=function(){eturn n.prototype.sendEvent=n.prototype.close=n.prototype.recordLostEvent=n.prototype.Ht=function(){if(this.options.sendClientReports){var t=this.Ft;if(this.Ft={},Object.keys(t).length){$.log("Flushing outcomes:\n"+JSON.stringify(t,null,2));var n=this.Pt.getEnvelopeEndpointWithUrlEncodedAuth(),i=JSON.stringify({})+"\n"+JSON.stringify({type:"client_report"})+"\n"+JSON.stringify({timestamp:It(),discarded_events:Object.keys(t).map(});try{Rn(n,i)}catch(t){$.error(t)}}else $.log("No outcomes to flush")}},n.prototype.Jt=function(n){var i=n.requestType,r=n.response,e=n.headers,o=n.resolve,u=n.reject,s=t.Status.fromHttpCode(r.status);this.Bt(e)&&$.warn("Too many "+i+" requests, backing off until: "+this.Xt(i)),s!==t.Status.Success?u(r):o({status:s})},n.prototype.Xt=n.prototype.Gt=n.prototype.Bt=n}(),qn=Ln),Fn=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.sendEvent=function(t){return this.zt(un(t,this.Pt),t)},n.prototype.sendSession=n.prototype.zt=n}(Ln),Pn=Object.freeze({__proto__:null,BaseTransport:Ln,FetchTransport:qn,XHRTransport:Fn}),Un=function(n){eturn i(r,n),r.prototype.eventFromException=r.prototype.eventFromMessage=r.prototype.jt=r}(nn),Hn=q(),Jn=0;r Gn=function(){eturn n.prototype.setupOnce=n.prototype.Vt=n.prototype.Yt=n.prototype.Qt=n.prototype.tn=n.prototype.Zt=function(t,n,i,r){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[];var e=isNaN(parseInt(r,10))?void 0:r,o=isNaN(parseInt(i,10))?void 0:i,u=g(n)&&n.length>0?n:);return 0===t.exception.values[0].stacktrace.frames.length&&t.exception.values[0].stacktrace.frames.push({colno:e,filename:u,function:"?",in_app:!0,lineno:o}),t},n.id="GlobalHandlers",n}(),Wn=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],zn=function(){eturn t.prototype.setupOnce=t.prototype.nn=t.prototype.in=t.prototype.en=t.prototype.rn=t.id="TryCatch",t}(),$n=function(){eturn n.prototype.addSentryBreadcrumb=n.prototype.setupOnce=n.prototype.on=n.prototype.un=n.prototype.sn=n.prototype.an=n.prototype.cn=n.id="Breadcrumbs",n}(),Kn="cause",Vn=5,Yn=function(){eturn t.prototype.setupOnce=t.prototype.hn=t.prototype.vn=t.id="LinkedErrors",t}(),Qn=q(),Zn=),ti=),ni=Object.freeze({__proto__:null,GlobalHandlers:Gn,TryCatch:zn,Breadcrumbs:$n,LinkedErrors:Yn,UserAgent:Zn,Dedupe:ti}),ii=function(t){eturn i(n,t),n.prototype.showReportDialog=function(t){void 0===t&&(t={}),q().document&&(this.dt()?f(f({},t),{dsn:t.dsn||this.getDsn()})):$.error("Trying to call showReportDialog with Sentry Client disabled"))},n.prototype.gt=n.prototype.Et=n}(Zt),ri=[new hn,new cn,new zn,new $n,new Gn,new Yn,new ti,new Zn];var ei={},oi=q();oi.Sentry&&oi.Sentry.Integrations&&(ei=oi.Sentry.Integrations);var ui,si=f(f(f({},ei),vn),ni);!ui||(ui={})),ui||(ui={}));var ai=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function ci(t){var n;return void 0===t&&(t=null===(n=Bt().getClient())||void 0===n?void 0:n.getOptions()),!!t&&("tracesSampleRate"in t||"tracesSampler"in t)}nction vi(){var t=fi();t&&($.log("[Tracing] Transaction: "+ui.InternalError+" -> Global error occured"),t.setStatus(ui.InternalError))}var di=),li=function(){eturn t.prototype.child=t.prototype.startChild=t.prototype.setTag=function(t,n){var i;return this.tags=f(f({},this.tags),((i={})[t]=n,i)),this},t.prototype.setData=t.prototype.setStatus=t.prototype.setHttpStatus=t.prototype.isSuccess=t.prototype.finish=t.prototype.toTraceparent=t.prototype.toContext=t.prototype.updateWithContext=t.prototype.getTraceContext=t.prototype.toJSON=t}(),pi=function(t){eturn i(n,t),n.prototype.setName=n.prototype.initSpanRecorder=n.prototype.setMeasurements=n.prototype.setMetadata=n.prototype.finish=function(n){var i,r,e,o,u,s=this;if(void 0===this.endTimestamp){if(this.name||($.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),t.prototype.finish.call(this,n),!0!==this.sampled)return $.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),void(null===(u=null===(e=null===(i=this.Sn.getClient())||void 0===i?void 0:(r=i).getTransport)||void 0===e?void 0:(o=e.call(r)).recordLostEvent)||void 0===u||u.call(o,c.SampleRate,"transaction"));var a=this.spanRecorder?this.spanRecorder.spans.filter(:[];this.En&&a.length>0&&(this.endTimestamp=a.reduce(.endTimestamp);var f={contexts:{trace:this.getTraceContext()},spans:a,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",debug_meta:this.metadata};return Object.keys(this.Tn).length>0&&($.log("[Measurements] Adding measurements to transaction",JSON.stringify(this.Tn,void 0,2)),f.measurements=this.Tn),$.log("[Tracing] Finishing "+this.op+" transaction: "+this.name+"."),this.Sn.captureEvent(f)}},n.prototype.toContext=n.prototype.updateWithContext=n}(li),mi=1e3,yi=di),gi=function(t){function n(n,i,r,e){void 0===r&&(r=mi),void 0===e&&(e=!1);var o=t.call(this,n,i)||this;return o.On=i,o.jn=r,o.kn=e,o.activities={},o.Dn=0,o.Nn=!1,o.In=[],i&&e&&(bi(i),$.log("Setting idle transaction on scope. Span ID: "+o.spanId),i.configureScope(function(t){return t.setSpan(o)})),o.Cn=setTimeout(o.jn),o}return i(n,t),n.prototype.finish=function(n){var i,r,e=this;if(void 0===n&&(n=Rt()),this.Nn=!0,this.activities={},this.spanRecorder){$.log("[Tracing] finishing IdleTransaction",new Date(1e3*n).toISOString(),this.op);try{for(var o=v(this.In),u=o.next();!u.done;u=o.next()){(0,u.value)(this,n)}}catch(t){i={error:t}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}this.spanRecorder.spans=this.spanRecorder.spans.filter(function(t){if(t.spanId===e.spanId)return!0;t.endTimestamp||(t.endTimestamp=n,t.setStatus(ui.Cancelled),$.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)));var i=t.startTimestamp<n;return i||$.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),i}),$.log("[Tracing] flushing IdleTransaction")}else $.log("[Tracing] No active IdleTransaction");return this.kn&&bi(this.On),t.prototype.finish.call(this,n)},n.prototype.registerBeforeFinishCallback=n.prototype.initSpanRecorder=function(t){var n=this;if(!this.spanRecorder){this.spanRecorder=new yi(function(t){n.Nn||n.xn(t)},this.spanId,t),$.log("Starting heartbeat"),this.Rn()}this.spanRecorder.add(this)},n.prototype.xn=function(t){this.Cn&&(clearTimeout(this.Cn),this.Cn=void 0),$.log("[Tracing] pushActivity: "+t),this.activities[t]=!0,$.log("[Tracing] new activities count",Object.keys(this.activities).length)},n.prototype._n=function(t){var n=this;if(this.activities[t]&&($.log("[Tracing] popActivity "+t),delete this.activities[t],$.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){var i=this.jn,r=Rt()+i/1e3;setTimeout(i)}},n.prototype.Mn=function(){if(!this.Nn){var t=Object.keys(this.activities).join("");t===this.An?this.Dn+=1:this.Dn=1,this.An=t,this.Dn>=3?($.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus(ui.DeadlineExceeded),this.setTag("heartbeat","failed"),this.finish()):this.Rn()}},n.prototype.Rn=function(){var t=this;$.log("pinging Heartbeat -> current counter: "+this.Dn),setTimeout(5e3)},n}(pi);nction Ti(t,n,i){return ci(n)?void 0!==t.sampled?(t.setMetadata({transactionSampling:{method:a.Explicit}}),t):("function"==typeof n.tracesSampler?(r=n.tracesSampler(i),t.setMetadata({transactionSampling:{method:a.Sampler,rate:Number(r)}})):void 0!==i.parentSampled?(r=i.parentSampled,t.setMetadata({transactionSampling:{method:a.Inheritance}})):(r=n.tracesSampleRate,t.setMetadata({transactionSampling:{method:a.Rate,rate:Number(r)}})),function(t){if(isNaN(t)||"number"!=typeof t&&"boolean"!=typeof t)return $.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got "+JSON.stringify(t)+" of type "+JSON.stringify(typeof t)+"."),!1;if(t<0||t>1)return $.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got "+t+"."),!1;return!0}(r)?r?(t.sampled=Math.random()<r,t.sampled?($.log("[Tracing] starting "+t.op+" transaction - "+t.name),t):($.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = "+Number(r)+")"),t)):($.log("[Tracing] Discarding transaction because "+("function"==typeof n.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):($.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)):(t.sampled=!1,t);var r}function Si(t,n){var i,r,e=(null===(i=this.getClient())||void 0===i?void 0:i.getOptions())||{},o=new pi(t,this);return(o=Ti(o,e,f({parentSampled:t.parentSampled,transactionContext:t},n))).sampled&&o.initSpanRecorder(null===(r=e.St)||void 0===r?void 0:r.maxSpans),o}function Ei(){var t=Ht();if(t.__SENTRY__){var n={mongodb:function(){return new(C(module,"./integrations/mongo").Mongo)},mongoose:function(){return new(C(module,"./integrations/mongo").Mongo)({mongoose:!0})},mysql:function(){return new(C(module,"./integrations/mysql").Mysql)},pg:function(){return new(C(module,"./integrations/postgres").Postgres)}},i=Object.keys(n).filter(function(t){return!!t)}).map(.filter(;i.length>0&&(t.__SENTRY__.integrations=l(t.__SENTRY__.integrations||[],i))}}function xi(){var t;(t=Ht()).__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=Si),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=wi)),I()&&Ei(),pt({callback:vi,type:"error"}),pt({callback:vi,type:"unhandledrejection"})}var _i=q();var Oi=ji=function(t,n){return{name:t,value:null!=n?n:-1,delta:0,entries:[],id:"v2-"+Date.now()+"-"+(Math.floor(Math.random()*(9e12-1))+1e12)}},ki=Di=Ni=-1,Ii=Ci={},Ri=q(),Mi={Ln:!1},Ai=function(){function t(t){var n,i;this.Tn={},this.qn=0,!I()&&(null===(n=Ri)||void 0===n?void 0:n.performance)&&(null===(i=Ri)||void 0===i?void 0:i.document)&&(Ri.performance.mark&&Ri.performance.mark("sentry-tracing-init"),this.Fn(),this.Pn(t.Ln),this.Un())}return t.prototype.addPerformanceEntries=function(t){var n=this;if(Ri&&Ri.performance&&Ri.performance.getEntries&&Mt){$.log("[Tracing] Adding & adjusting spans using Performance API");var i,r,e,o,u,s=hi(Mt);if(Ri.document&&Ri.document.scripts)for(var a=0;a<Ri.document.scripts.length;a++)if("true"===Ri.document.scripts[a].dataset.entry){i=Ri.document.scripts[a].src;break}if(Ri.performance.getEntries().slice(this.qn).forEach(function(a){var c=hi(a.startTime),f=hi(a.duration);if(!("navigation"===t.op&&s+c<t.startTimestamp))switch(a.entryType){case"navigation":!function(t,n,i){Li({transaction:t,entry:n,event:"unloadEvent",timeOrigin:i}),Li({transaction:t,entry:n,event:"redirect",timeOrigin:i}),Li({transaction:t,entry:n,event:"domContentLoadedEvent",timeOrigin:i}),Li({transaction:t,entry:n,event:"loadEvent",timeOrigin:i}),Li({transaction:t,entry:n,event:"connect",timeOrigin:i}),Li({transaction:t,entry:n,event:"secureConnection",timeOrigin:i,eventEnd:"connectEnd",description:"TLS/SSL"}),Li({transaction:t,entry:n,event:"fetch",timeOrigin:i,eventEnd:"domainLookupStart",description:"cache"}),Li({transaction:t,entry:n,event:"domainLookup",timeOrigin:i,description:"DNS"}),t,n,i)}(t,a,s),o=s+hi(a.responseStart),u=s+hi(a.requestStart);break;case"mark":case"paint":case"measure":var h=t,a,c,f,s);void 0===e&&"sentry-tracing-init"===a.name&&(e=h);var v=Ii(),d=a.startTime<v.firstHiddenTime;"first-paint"===a.name&&d&&($.log("[Measurements] Adding FP"),n.Tn.fp={value:a.startTime},n.Tn["mark.fp"]={value:h}),"first-contentful-paint"===a.name&&d&&($.log("[Measurements] Adding FCP"),n.Tn.fcp={value:a.startTime},n.Tn["mark.fcp"]={value:h});break;case"resource":var l=a.name.replace(Ri.location.origin,""),p=t,a,l,c,f,s);void 0===r&&(i||"").indexOf(l)>-1&&(r=p)}}),void 0!==r&&void 0!==e&&qi(t,{description:"evaluation",endTimestamp:e,op:"script",startTimestamp:r}),this.qn=Math.max(performance.getEntries().length-1,0),this.Hn(t),"pageload"===t.op){var c=hi(Mt);"number"==typeof o&&($.log("[Measurements] Adding TTFB"),this.Tn.ttfb={value:1e3*(o-t.startTimestamp)},"number"==typeof u&&u<=o&&(this.Tn["ttfb.requestTime"]={value:1e3*(o-u)})),["fcp","fp","lcp"].forEach(function(i){if(n.Tn[i]&&!(c>=t.startTimestamp)){var r=n.Tn[i].value,e=c+hi(r),o=Math.abs(1e3*(e-t.startTimestamp)),u=o-r;$.log("[Measurements] Normalized "+i+" from "+r+" to "+o+" ("+u+")"),n.Tn[i].value=o}}),this.Tn["mark.fid"]&&this.Tn.fid&&qi(t,{description:"first input delay",endTimestamp:this.Tn["mark.fid"].value+hi(this.Tn.fid.value),op:"web.vitals",startTimestamp:this.Tn["mark.fid"].value}),"fcp"in this.Tn||delete this.Tn.cls,t.setMeasurements(this.Tn),this.Jn(t)}}},t.prototype.Jn=function(t){this.Bn&&($.log("[Measurements] Adding LCP Data"),this.Bn.element&&t.setTag("lcp.element",_(this.Bn.element)),this.Bn.id&&t.setTag("lcp.id",this.Bn.id),this.Bn.url&&t.setTag("lcp.url",this.Bn.url.trim().slice(0,200)),t.setTag("lcp.size",this.Bn.size)),this.Xn&&this.Xn.sources&&($.log("[Measurements] Adding CLS Data"),this.Xn.sources.forEach()},t.prototype.Fn=function(){var t,n,i,r,e,o,u,s,a=this;t=function(t){var n=t.entries.pop();n&&($.log("[Measurements] Adding CLS"),a.Tn.cls={value:t.value},a.Xn=n)},r=ji("CLS",0),e=0,o=[],(s=ki("layout-shift",u=)&&(i=Oi(t,r,n),Di()},t.prototype.Hn=t.prototype.Pn=function(t){var n=this;!function(t){var i=t.entries.pop();if(i){var r=hi(Mt),e=hi(i.startTime);$.log("[Measurements] Adding LCP"),n.Tn.lcp={value:t.value},n.Tn["mark.lcp"]={value:r+e},n.Bn=i}},t)},t.prototype.Un=function(){var t,n,i,r,e,o,u,s=this;t=function(t){var n=t.entries.pop();if(n){var i=hi(Mt),r=hi(n.startTime);$.log("[Measurements] Adding FID"),s.Tn.fid={value:t.value},s.Tn["mark.fid"]={value:i+r}}},r=Ii(),e=ji("FID"),(u=ki("first-input",o=)&&(i=Oi(t,e,n),Di(!0))},t}();function Li(t){var n=t.transaction,i=t.entry,r=t.event,e=t.timeOrigin,o=t.eventEnd,u=t.description,s=o?i[o]:i[r+"End"],a=i[r+"Start"];a&&s&&qi(n,{op:"browser",description:null!=u?u:r,startTimestamp:e+hi(a),endTimestamp:e+hi(s)})}r Pi={traceFetch:!0,traceXHR:!0,tracingOrigins:["localhost",/^\//]};function Ui(t){var n=f(f({},Pi),t),i=n.traceFetch,r=n.traceXHR,e=n.tracingOrigins,o=n.shouldCreateSpanForRequest,u={},s=a=s;"function"==typeof o&&(a=;var c={};i&&pt({callback:function(t){!function(t,n,i){if(!ci()||!t.fetchData||!n(t.fetchData.url))return;if(t.endTimestamp&&t.fetchData.__span){var r=i[t.fetchData.__span];return void(r&&(t.response?r.setHttpStatus(t.response.status):t.error&&r.setStatus(ui.InternalError),r.finish(),delete i[t.fetchData.__span]))}var e=fi();if(e){var r=e.startChild({data:f(f({},t.fetchData),{type:"fetch"}),description:t.fetchData.method+" "+t.fetchData.url,op:"http.client"});t.fetchData.__span=r.spanId,i[r.spanId]=r;var o=t.args[0]=t.args[0],u=t.args[1]=t.args[1]||{},s=u.headers;x(o,Request)&&(s=o.headers),s?"function"==typeof s.append?s.append("sentry-trace",r.toTraceparent()):s=Array.isArray(s)?l(s,[["sentry-trace",r.toTraceparent()]]):f(f({},s),{"sentry-trace":r.toTraceparent()}):s={"sentry-trace":r.toTraceparent()},u.headers=s}}(t,a,c)},type:"fetch"}),r&&pt({callback:function(t){!function(t,n,i){var r,e;if(!ci()||(null===(r=t.xhr)||void 0===r?void 0:r.__sentry_own_request__)||!((null===(e=t.xhr)||void 0===e?void 0:e.__sentry_xhr__)&&n(t.xhr.__sentry_xhr__.url)))return;var o=t.xhr.__sentry_xhr__;if(t.endTimestamp&&t.xhr.__sentry_xhr_span_id__){var u=i[t.xhr.__sentry_xhr_span_id__];return void(u&&(u.setHttpStatus(o.status_code),u.finish(),delete i[t.xhr.__sentry_xhr_span_id__]))}var s=fi();if(s){var u=s.startChild({data:f(f({},o.data),{type:"xhr",method:o.method,url:o.url}),description:o.method+" "+o.url,op:"http.client"});if(t.xhr.__sentry_xhr_span_id__=u.spanId,i[t.xhr.__sentry_xhr_span_id__]=u,t.xhr.setRequestHeader)try{t.xhr.setRequestHeader("sentry-trace",u.toTraceparent())}catch(t){}}}(t,a,c)},type:"xhr"})}var Hi=q();var Ji=f({idleTimeout:mi,markBackgroundTransactions:!0,maxTransactionDuration:600,routingInstrumentation:function(t,n,i){if(void 0===n&&(n=!0),void 0===i&&(i=!0),Hi&&Hi.location){var r,e=Hi.location.href;n&&(r=t({name:Hi.location.pathname,op:"pageload"})),i&&pt({callback:function(n){var i=n.to,o=n.from;void 0===o&&e&&-1!==e.indexOf(i)?e=void 0:o!==i&&(e=void 0,r&&($.log("[Tracing] Finishing current transaction with op: "+r.op),r.finish()),r=t({name:Hi.location.pathname,op:"navigation"}))},type:"history"})}else $.warn("Could not initialize routing instrumentation due to invalid location")},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0},Pi),Bi=function(){function t(n){this.name=t.id,this.Gn=!1;var i=Pi.tracingOrigins;n&&n.tracingOrigins&&Array.isArray(n.tracingOrigins)&&0!==n.tracingOrigins.length?i=n.tracingOrigins:this.Gn=!0,this.options=f(f(f({},Ji),n),{tracingOrigins:i}),this.Wn=new Ai(f(f({},Mi),this.options.zn))}return t.prototype.setupOnce=function(t,n){var i=this;this.$n=n,this.Gn&&($.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),$.warn("[Tracing] We added a reasonable default for you: "+Pi.tracingOrigins));var r=this.options,e=r.routingInstrumentation,o=r.startTransactionOnLocationChange,u=r.startTransactionOnPageLoad,s=r.markBackgroundTransactions,a=r.traceFetch,c=r.traceXHR,f=r.tracingOrigins,h=r.shouldCreateSpanForRequest;e(u,o),s&&(_i&&_i.document?_i.document.addEventListener("visibilitychange",function(){var t=fi();_i.document.hidden&&t&&($.log("[Tracing] Transaction: "+ui.Cancelled+" -> since tab moved to the background, op: "+t.op),t.status||t.setStatus(ui.Cancelled),t.setTag("visibilitychange","document.hidden"),t.finish())}):$.warn("[Tracing] Could not set up background tab detection due to lack of global document")),Ui({traceFetch:a,traceXHR:c,tracingOrigins:f,shouldCreateSpanForRequest:h})},t.prototype.Kn=function(t){var n=this;if(this.$n){var i=this.options,r=i.beforeNavigate,e=i.idleTimeout,o=i.maxTransactionDuration,u="pageload"===t.op?):void 0,s=f(f(f({},t),u),{trimEnd:!0}),a="function"==typeof r?r(s):s,c=void 0===a?f(f({},s),{sampled:!1}):a;!1===c.sampled&&$.log("[Tracing] Will not send "+c.op+" transaction because of beforeNavigate."),$.log("[Tracing] Starting "+c.op+" transaction on scope");var h=function(t,n,i,r,e){var o,u,s=(null===(o=t.getClient())||void 0===o?void 0:o.getOptions())||{},a=new gi(n,t,i,r);return(a=Ti(a,s,f({parentSampled:n.parentSampled,transactionContext:n},e))).sampled&&a.initSpanRecorder(null===(u=s.St)||void 0===u?void 0:u.maxSpans),a}(this.$n(),c,e,!0,{location:q().location});return h.registerBeforeFinishCallback(,h}$.warn("[Tracing] Did not create "+t.op+" transaction because _getCurrentHub is invalid.")},t.id="BrowserTracing",t}();var Xi={},Gi=q();Gi.Sentry&&Gi.Sentry.Integrations&&(Xi=Gi.Sentry.Integrations);var Wi=f(f(f({},Xi),si),{BrowserTracing:Bi});return xi(),t.BrowserClient=ii,t.Hub=Ut,t.Integrations=Wi,t.SDK_NAME="sentry.javascript.browser",t.SDK_VERSION=an,t.Scope=At,t.Span=li,t.Transports=Pn,t.addBreadcrumb=function(t){zt("addBreadcrumb",t)},t.addExtensionMethods=xi,t.addGlobalEventProcessor=qt,t.captureEvent=t.captureException=captureException,t.captureMessage=t.close=function(t){var n=Bt().getClient();return n?n.close(t):($.warn("Cannot flush events and disable SDK. No client defined."),Ot.resolve(!1))},t.configureScope=function(t){zt("configureScope",t)},t.defaultIntegrations=ri,t.flush=function(t){var n=Bt().getClient();return n?n.flush(t):($.warn("Cannot flush events. No client defined."),Ot.resolve(!1))},t.forceLoad=t.getCurrentHub=Bt,t.getHubFromCarrier=Gt,t.init=function(t){if(void 0===t&&(t={}),void 0===t.defaultIntegrations&&(t.defaultIntegrations=ri),void 0===t.release){var n=q();n.SENTRY_RELEASE&&n.SENTRY_RELEASE.id&&(t.release=n.SENTRY_RELEASE.id)}void 0===t.autoSessionTracking&&(t.autoSessionTracking=!0),void 0===t.sendClientReports&&(t.sendClientReports=!0),ii,t),t.autoSessionTracking&&function(){if(void 0!==q().document){var t=Bt();"function"==typeof t.startSession&&"function"==typeof t.captureSession&&(t.startSession({ignoreDuration:!0}),t.captureSession(),pt({callback:type:"history"}))}else $.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")}()},t.lastEventId=t.onLoad=t.setContext=function(t,n){zt("setContext",t,n)},t.setExtra=function(t,n){zt("setExtra",t,n)},t.setExtras=function(t){zt("setExtras",t)},t.setTag=t.setTags=function(t){zt("setTags",t)},t.setUser=t.showReportDialog=t.startTransaction=t.withScope=$t,t.wrap=t}({});
//# sourceMappingURL=bundle.tracing.min.js.map