!this,function(){"use strict";var r=var a==(t.prototype.wrapCallback=t);ar o,s,c,h=(o=Error,r(s=u,c=o),s.prototype=null===c?Object.create(c):(l.prototype=c.prototype,new l),u);r f=(y.prototype.create=y);ar m=/\{\$([^}]+)}/g;r w=(E.prototype.next=E.prototype.error=E.prototype.complete=E.prototype.subscribe=function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"==typeof e&&null!==e)for(var r=0,n=t;r<n.length;r++){var i=n[r];if(i in e&&"function"==typeof e[i])return 1}}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(,this.observers.push(n),o},E.prototype.unsubscribeOne=E.prototype.forEachObserver=E.prototype.sendOne=E.prototype.close=E);r _=(I.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},I.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},I.prototype.setServiceProps=I);ar N="[DEFAULT]",L=(S.prototype.get=S.prototype.getImmediate=S.prototype.getComponent=function(){return this.component},S.prototype.setComponent=S.prototype.clearInstance=S.prototype.delete=function(){return e(this,void 0,void 0,function(){var t;return n(this,})},S.prototype.isComponentSet=S.prototype.getOrInitializeService=S.prototype.normalizeInstanceIdentifier=S);ar R,P=(A.prototype.addComponent=A.prototype.addOrOverwriteComponent=A.prototype.getProvider=A.prototype.getProviders=A);r C,D,F=[];(D=C=C||{})[D.DEBUG=0]="DEBUG",D[D.VERBOSE=1]="VERBOSE",D[D.INFO=2]="INFO",D[D.WARN=3]="WARN",D[D.ERROR=4]="ERROR",D[D.SILENT=5]="SILENT";ar x,H={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},T=C.INFO,z=((R={})[C.DEBUG]="log",R[C.VERBOSE]="log",R[C.INFO]="info",R[C.WARN]="warn",R[C.ERROR]="error",R),B=(Object.defineProperty(V.prototype,"logLevel",{get:function(){return this._logLevel},set:enumerable:!0,configurable:!0}),Object.defineProperty(V.prototype,"logHandler",{get:function(){return this._logHandler},set:enumerable:!0,configurable:!0}),Object.defineProperty(V.prototype,"userLogHandler",{get:set:enumerable:!0,configurable:!0}),V.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,j([this,C.DEBUG],e)),this._logHandler.apply(this,j([this,C.DEBUG],e))},V.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,j([this,C.VERBOSE],e)),this._logHandler.apply(this,j([this,C.VERBOSE],e))},V.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,j([this,C.INFO],e)),this._logHandler.apply(this,j([this,C.INFO],e))},V.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,j([this,C.WARN],e)),this._logHandler.apply(this,j([this,C.WARN],e))},V.prototype.error=V);r M,W=((x={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",x["bad-app-name"]="Illegal App name: '{$appName}",x["duplicate-app"]="Firebase App named '{$appName}' already exists",x["app-deleted"]="Firebase App named '{$appName}' already deleted",x["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",x["invalid-log-argument"]="First argument to `onLog` must be null or a function.",x),G=new f("app","Firebase",W),$="@firebase/app",Y="[DEFAULT]",K=((M={})[$]="fire-core",M["@firebase/analytics"]="fire-analytics",M["@firebase/auth"]="fire-auth",M["@firebase/database"]="fire-rtdb",M["@firebase/functions"]="fire-fn",M["@firebase/installations"]="fire-iid",M["@firebase/messaging"]="fire-fcm",M["@firebase/performance"]="fire-perf",M["@firebase/remote-config"]="fire-rc",M["@firebase/storage"]="fire-gcs",M["@firebase/firestore"]="fire-fst",M["fire-js"]="fire-js",M["firebase-wrapper"]="fire-js-all",M),J=new B("@firebase/app"),Z=(Object.defineProperty(q.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:enumerable:!0,configurable:!0}),Object.defineProperty(q.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(q.prototype,"options",{get:enumerable:!0,configurable:!0}),q.prototype.delete=q.prototype._getService=q.prototype._removeServiceInstance=q.prototype._addComponent=q.prototype._addOrOverwriteComponent=q.prototype.checkDestroyed_=q);.prototype.name&&Z.prototype.options||Z.prototype.delete||console.log("dc");var Q="7.14.1";function X(c){var l={},p=new Map,u={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});if("object"!=typeof t||null===t){t={name:t}}var r=t;void 0===r.name&&(r.name=Y);var n=r.name;if("string"!=typeof n||!n)throw G.create("bad-app-name",{appName:String(n)});if(g(l,n))throw G.create("duplicate-app",{appName:n});var i=new c(e,r,u);return l[n]=i},app:f,registerVersion:setLogLevel:U,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw G.create("invalid-log-argument",{appName:name});!e,t)},apps:null,SDK_VERSION:Q,INTERNAL:{registerComponent:h,removeApp:components:p,useAsService:};unction h(r){var t,e,n=r.name;if(p.has(n))return J.debug("There were multiple attempts to register component "+n+"."),"PUBLIC"===r.type?u[n]:null;if(p.set(n,r),"PUBLIC"===r.type){var i=void 0!==r.serviceProps&&v(i,r.serviceProps),u[n]=i,c.prototype[n]=try{for(var o=d(Object.keys(l)),a=o.next();!a.done;a=o.next()){var s=a.value;l[s]._addComponent(r)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return"PUBLIC"===r.type?u[n]:null}return u.default=u,Object.defineProperty(u,"apps",{get:),f.App=c,u}var ee=),te=(re.prototype.getPlatformInfoString=function(){return this.container.getProviders().map(function(e){if("VERSION"!==(null==(t=e.getComponent())?void 0:t.type))return null;var t,r=e.getImmediate();return r.library+"/"+r.version}).filter(.join(" ")},re);f("object"==typeof self&&self.self===self&&void 0!==self.firebase){J.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var ne=self.firebase.SDK_VERSION;ne&&0<=ne.indexOf("LITE")&&J.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var ie=ee.initializeApp;ee.initializeApp=var oe,ae,se=ee;(oe=se).INTERNAL.registerComponent(new _("platform-logger","PRIVATE")),oe.registerVersion($,"0.6.2",ae),oe.registerVersion("fire-js","");return se.registerVersion("firebase","7.14.1","app"),se});
//# sourceMappingURL=firebase-app.js.map