/*! @sentry/browser 5.15.5 (2accf045) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(n){var t=ar e= c,a,s,f;!c||(c={})),(a=n.Severity||(n.Severity={})).Fatal="fatal",a.Error="error",a.Warning="warning",a.Log="log",a.Info="info",a.Debug="debug",a.Critical="critical",n.Severity||(n.Severity={})),s||(s={})),s||(s={})),(f=n.Status||(n.Status={})).Unknown="unknown",f.Skipped="skipped",f.Success="success",f.RateLimit="rate_limit",f.Invalid="invalid",f.Failed="failed",n.Status||(n.Status={}));var h=Object.setPrototypeOf||({__proto__:[]}instanceof Array?;var v=Error);unction d(n){return"[object ErrorEvent]"===Object.prototype.toString.call(n)}function p(n){return"[object DOMError]"===Object.prototype.toString.call(n)}function y(n){return"[object String]"===Object.prototype.toString.call(n)}nction w(n){return"undefined"!=typeof Event&&x(n,Event)}};e.now(),L=0,H={now:timeOrigin:q},P=);ar W=6e4;ar B="<anonymous>";ar G=T(),J="Sentry Logger ",z=);G.__SENTRY__=G.__SENTRY__||{};var V,K=G.__SENTRY__.logger||(G.__SENTRY__.logger=new z),Q=);}));var cn=function(){eturn n.prototype.toString=n.resolve=n.reject=n.all=n.prototype.then=n.prototype.catch=n.prototype.finally=n}(),an=); vn,ln=T(),dn={},pn={};function yn(n){if(!pn[n])switch(pn[n]=!0,n){case"console":!);break;case"dom":!);break;case"xhr":!function(){if(!("XMLHttpRequest"in ln))return;var n=XMLHttpRequest.prototype;Y(n,"open",,Y(n,"send",}();break;case"fetch":!function(){if(!))return;Y(ln,"fetch",}();break;case"history":!);break;case"error":On=ln.onerror,ln.onerror=break;case"unhandledrejection":Tn=ln.onunhandledrejection,ln.onunhandledrejection=break;default:K.warn("unknown instrumentation type:",n)}}En,xn,jn=1e3,kn=0;r On=null;var Tn=null;var Dn=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,Rn=),Nn=function(){eturn n.prototype.addScopeListener=n.prototype.addEventProcessor=n.prototype.q=n.prototype.L=n.prototype.setUser=n.prototype.setTags=function(n){return this.M=e({},this.M,n),this.q(),this},n.prototype.setTag=function(n,t){var r;return this.M=e({},this.M,((r={})[n]=t,r)),this.q(),this},n.prototype.setExtras=n.prototype.setExtra=function(n,t){var r;return this.A=e({},this.A,((r={})[n]=t,r)),this.q(),this},n.prototype.setFingerprint=function(n){return this.H=n,this.q(),this},n.prototype.setLevel=function(n){return this.P=n,this.q(),this},n.prototype.setTransaction=n.prototype.setContext=n.prototype.setSpan=n.prototype.getSpan=function(){return this.W},n.clone=n.prototype.clear=n.prototype.addBreadcrumb=n.prototype.clearBreadcrumbs=n.prototype.X=n.prototype.applyToEvent=n}();r Mn=3,An=function(){eturn n.prototype.G=n.prototype.isOlderThan=n.prototype.bindClient=n.prototype.pushScope=n.prototype.popScope=n.prototype.withScope=n.prototype.getClient=function(){return this.getStackTop().client},n.prototype.getScope=n.prototype.getStack=function(){return this.$},n.prototype.getStackTop=n.prototype.captureException=n.prototype.captureMessage=n.prototype.captureEvent=n.prototype.lastEventId=function(){return this.J},n.prototype.addBreadcrumb=n.prototype.setUser=function(n){var t=this.getStackTop();t.scope&&t.scope.setUser(n)},n.prototype.setTags=function(n){var t=this.getStackTop();t.scope&&t.scope.setTags(n)},n.prototype.setExtras=n.prototype.setTag=function(n,t){var r=this.getStackTop();r.scope&&r.scope.setTag(n,t)},n.prototype.setExtra=function(n,t){var r=this.getStackTop();r.scope&&r.scope.setExtra(n,t)},n.prototype.setContext=n.prototype.configureScope=n.prototype.run=n.prototype.getIntegration=n.prototype.startSpan=n.prototype.traceHeaders=n.prototype.V=n}();nction Ln(){var n=Un();return Hn(n)&&!Pn(n).isOlderThan(Mn)||Fn(n,new An),S()?n):Pn(n)}=),$n=[];ar Jn,zn=function(){eturn n.prototype.captureException=n.prototype.captureMessage=n.prototype.captureEvent=n.prototype.getDsn=function(){return this.en},n.prototype.getOptions=function(){return this.rn},n.prototype.flush=n.prototype.close=n.prototype.setupIntegrations=n.prototype.getIntegration=n.prototype.un=n.prototype.in=function(){return this.tn},n.prototype.cn=n.prototype.an=function(n,t,r){var i=this,o=this.getOptions(),u=o.environment,c=o.release,a=o.dist,s=o.maxValueLength,f=void 0===s?250:s,h=o.normalizeDepth,v=void 0===h?3:h,l=e({},n);void 0===l.environment&&void 0!==u&&(l.environment=u),void 0===l.release&&void 0!==c&&(l.release=c),void 0===l.dist&&void 0!==a&&(l.dist=a),l.message&&(l.message=j(l.message,f));var d=l.exception&&l.exception.values&&l.exception.values[0];d&&d.value&&(d.value=j(d.value,f));var p=l.request;p&&p.url&&(p.url=j(p.url,f)),void 0===l.event_id&&(l.event_id=r&&r.event_id?r.event_id:D()),this.sn(l.sdk);var y=cn.resolve(l);return t&&(y=t.applyToEvent(l,r)),y.then(},n.prototype.fn=n.prototype.sn=n.prototype.on=function(n,t,r){var e=this,i=this.getOptions(),o=i.beforeSend,u=i.sampleRate;return this.cn()?"number"==typeof u&&Math.random()>u?cn.reject("This event has been sampled, will not send event."):new cn(function(i,u){e.an(n,r,t).then(function(n){if(null!==n){var r=n;if(t&&t.data&&!0===t.data.__sentry__||!o)return e.in().sendEvent(r),void i(r);var c=o(n,t);if(void 0===c)K.error("`beforeSend` method has to return `null` or a valid event.");else if(E(c))e.hn(c,i,u);else{if(null===(r=c))return K.log("`beforeSend` returned `null`, will not send event."),void i(null);e.in().sendEvent(r),i(r)}}else u("An event processor returned null, will not send event.")}).then(null,}):cn.reject("SDK not enabled, will not send event.")},n.prototype.hn=n}(),Vn=),Kn=);var Qn=),Yn=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Zn=function(){eturn n.prototype.setupOnce=n.prototype.pn=n.prototype.yn=n.prototype.mn=n.prototype.bn=n.prototype.gn=n.prototype.dn=n.prototype.En=n.prototype.wn=n.id="InboundFilters",n}(),nt=Object.freeze({FunctionToString:Qn,InboundFilters:Zn}),tt="?",rt=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,et=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,it=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,ot=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,ut=/\((\S*)(?::(\d+))(?::(\d+))\)/; ft=50;t=),mt=T(),bt=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n.xn=new Date(Date.now()),n}return r(e,t),e.prototype.sendEvent=function(t){var r=this;if(new Date(Date.now())<this.xn)return Promise.reject({event:t,reason:"Transport locked till "+this.xn+" due to too many requests.",status:429});var e={body:JSON.stringify(t),method:"POST",referrerPolicy:hn()?"origin":""};return void 0!==this.options.headers&&(e.headers=this.options.headers),this._.add(new cn(function(t,i){mt.fetch(r.url,e).then(function(e){var o=n.Status.fromHttpCode(e.status);if(o!==n.Status.Success){if(o===n.Status.RateLimit){var u=Date.now();r.xn=new Date(u+X(u,e.headers.get("Retry-After"))),K.warn("Too many requests, backing off till: "+r.xn)}i(e)}else t({status:o})}).catch(i)}))},e}(yt),wt=function(t){eturn r(e,t),e.prototype.sendEvent=function(t){var r=this;return new Date(Date.now())<this.xn?Promise.reject({event:t,reason:"Transport locked till "+this.xn+" due to too many requests.",status:429}):this._.add(new cn(function(e,i){var o=new XMLHttpRequest;for(var u in o.onreadystatechange=function(){if(4===o.readyState){var t=n.Status.fromHttpCode(o.status);if(t!==n.Status.Success){if(t===n.Status.RateLimit){var u=Date.now();r.xn=new Date(u+X(u,o.getResponseHeader("Retry-After"))),K.warn("Too many requests, backing off till: "+r.xn)}i(o)}else e({status:t})}},o.open("POST",r.url),r.options.headers)r.options.headers.hasOwnProperty(u)&&o.setRequestHeader(u,r.options.headers[u]);o.send(JSON.stringify(t))}))},e}(yt),gt=Object.freeze({BaseTransport:yt,FetchTransport:bt,XHRTransport:wt}),Et=function(t){eturn r(i,t),i.prototype.ln=i.prototype.eventFromException=function(t,r){var e=dt(t,r&&r.syntheticException||void 0,{attachStacktrace:this.rn.attachStacktrace});return M(e,{handled:!0,type:"generic"}),e.level=n.Severity.Error,r&&r.event_id&&(e.event_id=r.event_id),cn.resolve(e)},i.prototype.eventFromMessage=function(t,r,e){void 0===r&&(r=n.Severity.Info);var i=pt(t,e&&e.syntheticException||void 0,{attachStacktrace:this.rn.attachStacktrace});return i.level=r,e&&e.event_id&&(i.event_id=e.event_id),cn.resolve(i)},i}(Kn),xt="sentry.javascript.browser",jt=zn),kt=0;unction St(n,t,r){if(void 0===t&&(t={}),"function"!=typeof n)return n;try{if(n.__sentry__)return n;if(n.__sentry_wrapped__)return n.__sentry_wrapped__}catch(t){return n}var sentryWrapped=function(){var i=Array.prototype.slice.call(arguments);try{r&&"function"==typeof r&&r.apply(this,arguments);var o=i.map(;return n.handleEvent?n.handleEvent.apply(this,o):n.apply(this,o)}catch(n){throw kt+=1,setTimeout(,Xn(function(r){r.addEventProcessor(function(n){var r=e({},n);return t.mechanism&&(C(r,void 0,void 0),M(r,t.mechanism)),r.extra=e({},r.extra,{arguments:i}),r}),captureException(n)}),n}};try{for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(sentryWrapped[i]=n[i])}catch(n){}n.prototype=n.prototype||{},sentryWrapped.prototype=n.prototype,Object.defineProperty(n,"__sentry_wrapped__",{enumerable:!1,value:sentryWrapped}),Object.defineProperties(sentryWrapped,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:n}});try{Object.getOwnPropertyDescriptor(sentryWrapped,"name").configurable&&Object.defineProperty(sentryWrapped,"name",{get:)}catch(n){}return sentryWrapped}var Ot=),Tt=function(){eturn n.prototype.Nn=n.prototype.In=n.prototype.Cn=n.prototype.Mn=n.prototype.setupOnce=n.id="TryCatch",n}(),Dt=function(){eturn t.prototype.An=t.prototype.Un=t.prototype.qn=t.prototype.Ln=function(t){if(t.endTimestamp){var r=Ln().getClient(),i=r&&r.getDsn();if(this.rn.sentry&&i){var o=new Bn(i).getStoreEndpoint();if(o&&-1!==t.fetchData.url.indexOf(o)&&"POST"===t.fetchData.method&&t.args[1]&&t.args[1].body)return void Rt(t.args[1].body)}t.error?Ln().addBreadcrumb({category:"fetch",data:e({},t.fetchData,{status_code:t.response.status}),level:n.Severity.Error,type:"http"},{data:t.error,input:t.args}):Ln().addBreadcrumb({category:"fetch",data:e({},t.fetchData,{status_code:t.response.status}),type:"http"},{input:t.args,response:t.response})}},t.prototype.Hn=t.prototype.setupOnce=t.id="Breadcrumbs",t}();function Rt(t){try{var r=JSON.parse(t);Ln().addBreadcrumb({category:"sentry."+("transaction"===r.type?"transaction":"event"),event_id:r.event_id,level:r.level||n.Severity.fromString("error"),message:N(r)},{event:r})}catch(n){K.error("Error while adding sentry type breadcrumb")}}var Nt="cause",It=5,Ct=),Mt=T(),At=),Ut=Object.freeze({GlobalHandlers:Ot,TryCatch:Tt,Breadcrumbs:Dt,LinkedErrors:Ct,UserAgent:At}),qt=[new Zn,new Qn,new Tt,new Dt,new Ot,new Ct,new At];var Lt={},Ht=T();Ht.Sentry&&Ht.Sentry.Integrations&&(Lt=Ht.Sentry.Integrations);var Pt=e({},Lt,nt,Ut);return n.BrowserClient=jt,n.Hub=An,n.Integrations=Pt,n.SDK_NAME=xt,n.SDK_VERSION="5.15.5",n.Scope=Nn,n.Transports=gt,n.addBreadcrumb=function(n){Wn("addBreadcrumb",n)},n.addGlobalEventProcessor=Cn,n.captureEvent=n.captureException=captureException,n.captureMessage=n.close=function(n){var t=Ln().getClient();return t?t.close(n):cn.reject(!1)},n.configureScope=function(n){Wn("configureScope",n)},n.defaultIntegrations=qt,n.flush=n.forceLoad=n.getCurrentHub=Ln,n.getHubFromCarrier=Pn,n.init=function(n){if(void 0===n&&(n={}),void 0===n.defaultIntegrations&&(n.defaultIntegrations=qt),void 0===n.release){var t=T();t.SENTRY_RELEASE&&t.SENTRY_RELEASE.id&&(n.release=t.SENTRY_RELEASE.id)}!jt,n)},n.lastEventId=n.onLoad=n.setContext=function(n,t){Wn("setContext",n,t)},n.setExtra=function(n,t){Wn("setExtra",n,t)},n.setExtras=function(n){Wn("setExtras",n)},n.setTag=n.setTags=function(n){Wn("setTags",n)},n.setUser=n.showReportDialog=n.withScope=Xn,n.wrap=n}({});
//# sourceMappingURL=bundle.min.js.map