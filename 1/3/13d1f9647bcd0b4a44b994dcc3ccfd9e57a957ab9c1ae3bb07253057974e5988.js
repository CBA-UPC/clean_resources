(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:function(a){},getPreloadProperties:function(){return[]},getContent:function(){},onEvent:function(){},importLibraries:);(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,t){this.blueConicClient=e,this.context=t,this.profile=this.blueConicClient.profile.getProfile();var i=this.context.getParameters();if(i.leadIdProperty&&0!==i.leadIdProperty.length){var s=i.leadIdProperty[0];this._instanceName=i.endpoint[0].replace("https://","").split(".")[0],this.MARKETO_COOKIE=s+"_cookie",this.MARKETO_LEAD_ID_TIMESTAMP=s+"_timestamp",this.MARKETO_GET_LEAD_ID=s+"_get_leadid",this.MARKETO_ANONYMOUS=s+"_anonymous",this._preloadProperties=[this.MARKETO_COOKIE,this.MARKETO_LEAD_ID_TIMESTAMP,this.MARKETO_GET_LEAD_ID,this.MARKETO_ANONYMOUS]}else this._preloadProperties=[]},getPreloadProperties:function(){return this._preloadProperties},onLoad:function(){if(!this.profile.getValue(this.MARKETO_COOKIE)||!this.profile.getValue(this.MARKETO_LEAD_ID_TIMESTAMP)&&!this.profile.getValue(this.MARKETO_GET_LEAD_ID)){var e=this.blueConicClient.util.cookie.getCookie("_mkto_trk");-1===this.profile.getValues(this.MARKETO_ANONYMOUS).indexOf(e)&&e&&-1!==e.toLowerCase().indexOf(this._instanceName.toLowerCase())&&(this.profile.setValue(this.MARKETO_COOKIE,e),this.profile.setValue(this.MARKETO_GET_LEAD_ID,"yes"),this.blueConicClient.profile.updateProfile())}}});var a = [];var i='connection_marketo';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.6.0/'}]);})();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,t){this.blueConicClient=e,this.context=t,this.parameters=this.context.getParameters(),this.internalProperty="_CMH_"+this.context.getInteractionId(),this.eventSubscribed=!1,this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,(function(){this.onLoad()}))},getPreloadProperties:function(){return this.context.getParameters().adminProperties.concat(this.internalProperty).concat(this.parameters.extraViewProperties)},onLoad:function(){"ON_EVENT"!==(this.parameters.startMetering?this.parameters.startMetering[0]:"PAGEVIEW")||this.eventSubscribed?this._execute():(this.eventSubscribed=!0,this.blueConicClient.event.subscribe("contentMeterStartMetering",this,(function(e,t){this._execute(t&&t.url||"")})))},_execute:function(e){var t=window._bcp.contentMeter.contentMeterService,n=this.blueConicClient.profile.getProfile(),i=this._getConfig(n,this.internalProperty,e);this._registerEvents(i);var r=t.execute(i);null!==r&&(t.setProfileProperties({counters:i.counters,profile:n,meterResult:r,extraViewsHistory:i.extraViewsHistory,internalProperty:this.internalProperty,blueConicClient:this.blueConicClient}),r.limitReached&&r.exceedInfo.length>0&&this.blueConicClient.profile.getProfile().timeline.createEvent("contentmeter_limit_reached",new Date,t.getTimelineEventData(r.exceedInfo,"WEB")),this.blueConicClient.profile.updateProfile(this,(function(){r.granted||this.blueConicClient.createEvent("contentMeterExceeded"),r.counterUpdated&&this.blueConicClient.createEvent("contentMeterUpdated"),this.blueConicClient.createEvent("contentMeterFinished")})))},_registerEvents:function(e){e.extraViews.filter(().forEach((function(t){this.blueConicClient.event.subscribe(t.event,this,(function(){window._bcp.contentMeter.contentMeterService.executeEventRule(t,e),this.blueConicClient.profile.updateProfile()}))}),this)},_getConfig:function(e,t,n){var i=window._bcp.contentMeter.contentMeterService.getConfig(this.parameters,e,t,this.blueConicClient);return i.metadataService=window._bcp.contentMeter.metadataService,i.articleUrl=n||i.metadataService.getMetatagContent("og:url")||document.location.href,i}});var a = [];var i='listener_content_meter';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.4.0/frontend/src/node_modules/@blueconic/content-meter/src/MetadataService.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.4.0/frontend/src/node_modules/@blueconic/content-meter/src/ContentMeterService.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.4.0/'}]);})();(();(();(();(();(();(();(();(();(();(();(();(();})(blueConicClient);