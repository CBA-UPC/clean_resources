/***************************************
 * @preserve
 * Copyright (c) 2021 Verint Systems, Inc. All rights reserved.
 * ForeSee Web SDK: Utils Library
 * Version: 19.14.9
 * Built: September 03, 2021, 12:56:52 CDT
 ***************************************/
_fsDefine(["fs",_fsNormalizeUrl("$fs.compress.js"),"exports"],function(e,t,i){var n=window,r=n.document,s=!!n.sessionStorage,o=r.getElementsByTagName("head"),a=(n.localStorage,n.sessionStorage);o=o&&o.length>0?o[0]:r.body;try{s&&(a.setItem("_",""),a.removeItem("_"))}catch(Oe){s=!1}var c=function(t,i){var n,r,s,o;for(e.isNodeList(t)||e.isArray(t)||(t=[t]),i=i.trim().split(" "),n=0,r=t.length;n<r;n++)if(o=t[n],e.isElement(o))for(s=0;s<i.length;s++)o.classList.add(i[s])},l=u=f=d={},h={},p=[],g=m=d.Bind=m;var v=d.BindOnce=v;._runActualUnBind=d.Unbind=y;var b=!1,_=r.addEventListener?(n.addEventListener("beforeunload",_,!0),n.addEventListener("pagehide",_,!0),r.addEventListener("unload",_,!0)):r.attachEvent&&n.attachEvent("onunload",_);var S=w=["shift","meta","alt","escape","control","apps","capslock"],k=),C=new k;if(history&&history.pushState){n.addEventListener("popstate",;var I=history.pushState;history.pushState=var x=),O= D=ar M=N=);N.initialize=function(e){e.call(N)};var P=window,A={TRIGGER:"funcxm",FEEDBACK:"funfbk",REPLAY:"funrep",BEHAVIOR:"fs_behavioral_data"},R={StorageInstances:{}},j=V=j(),U=["_4c_s_","_4c_mc_","_4c_es_"],F=H={CK:"COOKIE",MC:"MICROCOOKIE",CL:"COOKIELESS",DS:"DOMSTORAGE",CK_Hybrid:"HYBRID",MC_Hybrid:"MICRO_HYBRID"},K=W=function(){function t(t){var i=this,n=e.getVendorConfig("fs");this.pers=(n.storage||"").toUpperCase(),e.ext(this,{isReady:!1,defaultExpire:7776e6,ready:new k,onCommit:new k,onSync:new k,_readyState:new k,maxExpire:-1,timeOffset:0,_keyEvents:{},_updateTimeout:6e4,_data:{when:0,keys:{}},isStale:!1,lock:null,lastMaint:j(),lastSave:j(),lastSync:j(),isSyncing:!1,_setAfterSync:{}},!1),this.browser=t,m(window,"unload",}var i=t.prototype;return i.selectCookieDomain=i.upgradeOldStorage=i.setUpdateInterval=i.stopUpdateInterval=i._fireChangeEvents=i.save=i._maint=i.set=function(t,i,n,r,s){var o=this;this._readyState.subscribe(function(){o._data.keys||(o._data.keys={});var a=o._data.keys[t],c=j(),l=null;if(n)if("number"==typeof n)l=n,o.maxExpire>0&&o.maxExpire<n&&(l=n=o.maxExpire),n=c+n;else if(n instanceof Date){if(n=n.getTime()+n,o.maxExpire>0)n-c>o.maxExpire&&(l=n=o.maxExpire,n=c+n)}if(a){var u={};u[t]={v:i,x:n||a.x,t:c},o._fireChangeEvents(u),a.v="cp"==t?e.ext(a.v,i):"ckcpps"==t?e.ext(a.v,i):i,a.x=n||a.x,l&&(a.ttl=l),a.t=c,a.d&&(a.d=0)}else{var f={};f[t]={v:i,x:n||o.defaultExpire+c,t:c},l&&(f[t].ttl=l),o._fireChangeEvents(f),o._data.keys[t]=f[t]}o.isStale=!0,s&&o.onCommit.subscribe(s,!0,!1),o._data.keys[t].v&&"object"==typeof o._data.keys[t].v?o._setAfterSync[t]=e.ext({},o._data.keys[t]):o._setAfterSync[t]=o._data.keys[t],o._maint(),o.save(!!r)},!0,!0)},i.setValuesAfterSync=function(){for(var e in this._setAfterSync)Object.prototype.hasOwnProperty.call(this._setAfterSync,e)&&(this._data.keys[e]=this._setAfterSync[e],delete this._setAfterSync[e])},i.get=i.all=i.erase=i._delete=function(e){delete this._data.keys[e],delete this._setAfterSync[e]},i.reset=i.setMaxKeyExpiration=i.getMaxKeyExpiration=i.watchForChanges=i.dispose=t}(),J=z=G=);nitialize=G.isSupported=var Y=G);Y.isSupported=var Q=Z=);var ee=te={},ie=0,ne={_id:"",has:intervals:{uid:"",mcid:""},sgi:uid:mcid:beacon:,re={has:intervals:{uid:""},uid:,se={GA:re,OM:ne},oe=);ar ce,le=ue=fe=),de=function(t){function i(i,n,r,s){var o;o=t.call(this,i,n)||this;var a=e.getVendorConfig("fs");return o.brainUrl=s||a.brainUrl,o.siteKey=r||a.siteKey,o.disableMicrocookieSyncInterval=a.disableMicrocookieSyncInterval,n&&(o.uid=n),e.ext($(o),{_serverFails:0,cThreshold:600},!1),i.ready.subscribe(function(){o._initialize()},!0,!0),o}q(i,t);var n=i.prototype;return n._initialize=n._initializeMicrostorage=n._initializeCookieless=n._initialSync=n._sync=function(t){var i,n=this;this.isSyncing||(this._serverFails>5||(this.isSyncing=!0,t=t||function(){},this.ajax.send({method:"GET",url:this.brainUrl+"/state/"+this.siteKey+"/"+this.uid,success:function(r){n.lastSync=j(),i=JSON.parse(r),n.timeOffset=le(i._asof_)?j()-i._asof_:0,n._fireChangeEvents(i.keys),n.mergeBrainData(n._data,i),n.setValuesAfterSync(),n.syncWithGeneralStorage(),n.isSyncing=!1,n._commit(),e.nextTick(,t()},failure:function(){n.lastSync=j(),n.isSyncing=!1,n._serverFails++,n._readyState.fire(n),n.setValuesAfterSync(),n._commit()}})))},n._commit=function(){var t=this;clearTimeout(this.lock),this.lock=null,this.lastSave=this._data.when=j(),this.browser.supportsLocalStorage&&this.pers===H.MC_Hybrid&&(G.prototype.setItem(e.key4CMicroStorage,this.uid),this.ckie&&this.ckie.setBrainId(this.uid)),this.ckie&&!this.ckie.getByNestedCookieName(e.key4CMicroStorage)&&this.ckie.setBrainId(this.uid),this._serverFails>5||(this.ajax.send({method:"POST",url:this.brainUrl+"/state/"+this.siteKey+"/"+this.uid,data:this._data,contentType:"application/json",success:function(e){t._lastSync=j();var i=JSON.parse(e);t.timeOffset=le(i._asof_)?j()-i._asof_:0,t._fireChangeEvents(i.keys),t.mergeBrainData(t._data,i),t.setValuesAfterSync(),t.syncWithGeneralStorage(),t.onCommit.fire(t._data),t._readyState.fire(t)},failure:),this.isStale=!1)},n._delete=function(e){this._data.keys[e].d=1,this._data.keys[e].t=j(),this._data.keys[e].x=j()+this._updateInterval,delete this._setAfterSync[e]},n.reset=n.syncWithGeneralStorage=n.mergeBrainData=i}(W),he=pe={VISIT_EXPIRY_DESKTOP:18e5,VISIT_EXPIRY_MOBILE:3e5,POPUP_EXPIRY:72e5},ge=);pe.applyEventsDefault=pe._send=pe.validateEventObject=var me=ve=var ye={};var be=),_e=),Se=),we=function(i){(n,i);var r=n.prototype;return r._sync=function(i){var n,r,s=this;if(!this.isSyncing)if(this.isSyncing=!0,i=i||function(){},this.pers==H.CK||this.pers==H.CK_Hybrid){if(!(n=this.ckie.getByNestedCookieName(e.key4CStorage))&&this.pers==H.CK_Hybrid&&this.browser.supportsLocalStorage){var o=localStorage.getItem(e.key4CStorageLegacy);o&&(this.ckie.set(e.key4CStorage,o),n=o)}if(n)return this.pers==H.CK_Hybrid&&this.browser.supportsLocalStorage&&G.prototype.setItem(e.key4CStorageLegacy,n),n=t.decompress(n),this._lastSync=j(),r=JSON.parse(n),this._fireChangeEvents(r.keys),r.keys=r.keys||{},this._data=r,this.setValuesAfterSync(),this.onSync.fire(this),this.isSyncing=!1,this._commit(),void e.nextTick(i);this.isSyncing=!1,this._commit(),e.nextTick(i)}else if(this.pers==H.DS){if(n=localStorage.getItem(e.key4CStorageLegacy)){if(n=t.decompress(n),this.lastSync=j(),(r=JSON.parse(n)).keys=r.keys||{},this._fireChangeEvents(r.keys),this._data=r,this.setValuesAfterSync(),e.nextTick(function(){s.onSync.fire(s)}),j()-this._data.when<3e5)return this.isSyncing=!1,this._commit(),void e.nextTick(i);this.lastSync=j(),this._data={when:j(),keys:{}}}this.isSyncing=!1,this._commit(),e.nextTick(i)}},r._commit=n}(W),ke=window.name,Ce=);Ce.initialize=function(e){e.apply(Ce)},Ce.isSupported=function(){return!0};var Ie=function(){ar i=t.prototype;return i.calcReplayPoolStatus=i.browserCheck=i.featureCheck=i.platformCheck=i.checkDeviceBlacklist=i._match=i.runAllTests=i.doesPassCriteria=i.getFittingDisplay=i.incrementGeneralPageViewCount=i.getMeasureIdForDefinition=i.getShortSurveyOptions=i.getPageViewCountForDefinition=i.incrementPageViewCountForDefinition=i.evalLoyaltySampling=function(t,i){var n=this.getPageViewCountForDefinition(t),r=t[i]||t.criteria,s=this.stg.get("pl"),o=e.isDefined(s)&&1!=s?r.sp.outreplaypool||0:r.sp.reg||0,a=100*Math.random();return n>=r.lf&&a<=o},t}(),xe=);return i.APPID=A,i.AjaxTransport=N,i.Async=oe,i.Bind=m,i.BindOnce=v,i.Browser=Q,i.CPPS=Se,i.Cookie=fe,i.DOMContains=f,i.DomStorage=G,i.FSEvent=k,i.INT=se,i.ImageTransport=be,i.Journey=ge,i.ModalIFrame=x,i.RecordCriteria=xe,i.SeshStorage=Y,i.TemplateFetcher=_e,i.TriggerCriteria=Ie,i.Unbind=y,i.WindowStorage=Ce,i._preventUnloadFor=i.addClass=c,i.b64DecodeUnicode=i.checkFeedbackTopicAllowed=i.checkIfStorageIsEnabled=z,i.checkRegexOption=T,i.compile=i.debounce=i.decodeHTMLEntities=i.findMatchingDefFromList=i.findSurveyDefinition=i.generateGUID=i.getBrainStorage=he,i.getBrowserInstance=Z,i.getGeneralStorage=i.getHashParm=i.getKeyCode=S,i.getRootDomain=M,i.getScreenResolution=i.getScroll=i.getSize=i.hasClass=u,i.hash=i.imgInfo=i.initBehavioralData=i.isControlKey=i.isTrackerAlive=ve,i.loadCSS=i.now=j,i.pageNavEvent=C,i.preventDefault=i.products=ye,i.registerProduct=i.removeClass=l,i.retrieveNestedVariable=me,i.sendWithoutWaiting=i.setScroll=i.setStorageIsEnabled=i.startTime=V,i.storageTypes=H,i.testAgainstSearch=D,i.testSameDomain=i.toggleClass=i});
