!"undefined"==typeof global?this:global,(function(e,t){var n=n||{};n.scope={},n.createTemplateTagFirstArg=n.createTemplateTagFirstArgWithRaw=n.arrayIteratorImpl=n.arrayIterator=n.makeIterator=n.arrayFromIterator=n.arrayFromIterable=n.ASSUME_ES5=!1,n.ASSUME_NO_NATIVE_MAP=!1,n.ASSUME_NO_NATIVE_SET=!1,n.SIMPLE_FROUND_POLYFILL=!1,n.ISOLATE_POLYFILLS=!1,n.FORCE_POLYFILL_PROMISE=!1,n.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1,n.objectCreate=n.ASSUME_ES5||"function"==typeof Object.create?Object.create:n.defineProperty=n.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:n.getGlobal=n.global=n.getGlobal(this),n.IS_SYMBOL_NATIVE="function"==typeof Symbol&&"symbol"==typeof Symbol("x"),n.TRUST_ES6_POLYFILLS=!n.ISOLATE_POLYFILLS||n.IS_SYMBOL_NATIVE,n.polyfills={},n.propertyToPolyfillSymbol={},n.POLYFILL_PREFIX="$jscp$",n.polyfill=n.polyfillUnisolated=n.polyfillIsolated=function(e,t,r,i){var o=e.split(".");e=1===o.length,i=o[0],i=!e&&i in n.polyfills?n.polyfills:n.global;for(var s=0;s<o.length-1;s++){var a=o[s];if(!(a in i))return;i=i[a]}o=o[o.length-1],null!=(t=t(r=n.IS_SYMBOL_NATIVE&&"es6"===r?i[o]:null))&&(e?n.defineProperty(n.polyfills,o,{configurable:!0,writable:!0,value:t}):t!==r&&(void 0===n.propertyToPolyfillSymbol[o]&&(r=1e9*Math.random()>>>0,n.propertyToPolyfillSymbol[o]=n.IS_SYMBOL_NATIVE?n.global.Symbol(o):n.POLYFILL_PREFIX+r+"$"+o),n.defineProperty(i,n.propertyToPolyfillSymbol[o],{configurable:!0,writable:!0,value:t})))},n.getConstructImplementation=function(){if(n.TRUST_ES6_POLYFILLS&&"undefined"!=typeof Reflect&&Reflect.construct){if(function(){function e(){}return new e,Reflect.construct(e,[],(function(){})),new e instanceof e}())return Reflect.construct;var e=Reflect.construct;return return function(e,t,r){return void 0===r&&(r=e),r=n.objectCreate(r.prototype||Object.prototype),Function.prototype.apply.call(e,r,t)||r}},n.construct=n.getConstructImplementation(),n.underscoreProtoCanBeSet=n.setPrototypeOf=n.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:n.underscoreProtoCanBeSet()?null,n.inherits=n.getRestArguments=n.polyfill("Reflect",(,"es6","es3"),n.polyfill("Reflect.construct",(function(e){return n.construct}),"es6","es3"),n.polyfill("Reflect.setPrototypeOf",(,"es6","es5"),n.initSymbol=function(){},n.polyfill("Symbol",(function(e){if(e)return e;var t=t.prototype.toString=function(){return this.$jscomp$symbol$id_};var r="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",i=0,o=return o}),"es6","es3"),n.polyfill("Symbol.iterator",(,"es6","es3"),n.iteratorPrototype=n.iteratorFromArray=n.polyfill("Array.prototype.keys",(,"es6","es3"),n.owns=n.polyfill("Object.values",(function(e){return e||),"es8","es3"),n.checkEs6ConformanceViaProxy=n.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1,n.ES6_CONFORMANCE=n.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&n.checkEs6ConformanceViaProxy(),n.polyfill("WeakMap",(function(e){ction o(e){if(!n.ISOLATE_POLYFILLS){var r=Object[e];r&&(Object[e]=}}if(n.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(e&&n.ES6_CONFORMANCE)return e}else if())return e;var s="$jscomp_hidden_"+Math.random();o("freeze"),o("preventExtensions"),o("seal");var a=0,u=return u.prototype.set=u.prototype.get=u.prototype.has=u.prototype.delete=u}),"es6","es3"),n.MapEntry=function(){},n.polyfill("Map",(function(e){if(n.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(e&&n.ES6_CONFORMANCE)return e}else if())return e;var t=new WeakMap,r=r.prototype.set=r.prototype.delete=r.prototype.clear=r.prototype.has=r.prototype.get=r.prototype.entries=r.prototype.keys=function(){return o(this,(function(e){return e.key}))},r.prototype.values=r.prototype.forEach=r.prototype[Symbol.iterator]=r.prototype.entries;var i=o=s=a=0;return r}),"es6","es3");var r={AdEventType:{IMPRESSION:"impression",LOADED:"loaded",GEOMETRY_CHANGE:"geometryChange",SESSION_START:"sessionStart",SESSION_ERROR:"sessionError",SESSION_FINISH:"sessionFinish",MEDIA:"media",VIDEO:"video",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",PAUSE:"pause",RESUME:"resume",BUFFER_START:"bufferStart",BUFFER_FINISH:"bufferFinish",SKIPPED:"skipped",VOLUME_CHANGE:"volumeChange",PLAYER_STATE_CHANGE:"playerStateChange",AD_USER_INTERACTION:"adUserInteraction",STATE_CHANGE:"stateChange"},MediaEventType:{LOADED:"loaded",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",PAUSE:"pause",RESUME:"resume",BUFFER_START:"bufferStart",BUFFER_FINISH:"bufferFinish",SKIPPED:"skipped",VOLUME_CHANGE:"volumeChange",PLAYER_STATE_CHANGE:"playerStateChange",AD_USER_INTERACTION:"adUserInteraction"},ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",UNSPECIFIED:"unspecified",LOADED:"loaded",BEGIN_TO_RENDER:"beginToRender",ONE_PIXEL:"onePixel",VIEWABLE:"viewable",AUDIBLE:"audible",OTHER:"other"},ErrorType:{GENERIC:"generic",VIDEO:"video",MEDIA:"media"},AdSessionType:{NATIVE:"native",HTML:"html",JAVASCRIPT:"javascript"},EventOwner:{NATIVE:"native",JAVASCRIPT:"javascript",NONE:"none"},AccessMode:{FULL:"full",DOMAIN:"domain",LIMITED:"limited"},AppState:{BACKGROUNDED:"backgrounded",FOREGROUNDED:"foregrounded"},Environment:{APP:"app",WEB:"web"},DeviceCategory:{CTV:"ctv",DESKTOP:"desktop",MOBILE:"mobile",OTHER:"other"},InteractionType:{CLICK:"click",INVITATION_ACCEPT:"invitationAccept"},CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",HTML_DISPLAY:"htmlDisplay",NATIVE_DISPLAY:"nativeDisplay",VIDEO:"video",AUDIO:"audio"},MediaType:{DISPLAY:"display",VIDEO:"video"},Reason:{NOT_FOUND:"notFound",HIDDEN:"hidden",BACKGROUNDED:"backgrounded",VIEWPORT:"viewport",OBSTRUCTED:"obstructed",CLIPPED:"clipped",UNMEASURABLE:"unmeasurable",NO_WINDOW_FOCUS:"noWindowFocus",NO_OUTPUT_DEVICE:"noOutputDevice"},SupportedFeatures:{CONTAINER:"clid",VIDEO:"vlid"},VideoPosition:{PREROLL:"preroll",MIDROLL:"midroll",POSTROLL:"postroll",STANDALONE:"standalone"},VideoPlayerState:{MINIMIZED:"minimized",COLLAPSED:"collapsed",NORMAL:"normal",EXPANDED:"expanded",FULLSCREEN:"fullscreen"},NativeViewKeys:{X:"x",LEFT:"left",Y:"y",TOP:"top",WIDTH:"width",HEIGHT:"height",AD_SESSION_ID:"adSessionId",IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor",CLIPS_TO_BOUNDS:"clipsToBounds",CHILD_VIEWS:"childViews",END_X:"endX",END_Y:"endY",OBSTRUCTIONS:"obstructions",OBSTRUCTION_CLASS:"obstructionClass",OBSTRUCTION_PURPOSE:"obstructionPurpose",OBSTRUCTION_REASON:"obstructionReason",PIXELS:"pixels",HAS_WINDOW_FOCUS:"hasWindowFocus"},MeasurementStateChangeSource:{CONTAINER:"container",CREATIVE:"creative"},ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"},CommunicationType:{NONE:"NONE",DIRECT:"DIRECT",POST_MESSAGE:"POST_MESSAGE"},OmidImplementer:{OMSDK:"omsdk"},MessageMethod:{IDENTIFY_SERVICE_WINDOW:"identifyServiceWindow"}},i="omid_message_guid",o="omid_message_method",s="omid_message_version",a="omid_message_args",u=function(e,t,n,r){this.guid=e,this.method=t,this.version=n,this.args=r};u.isValidSerializedMessage=u.deserialize=u.prototype.serialize=function(){var e={};return e[i]=this.guid,e[o]=this.method,e[s]=this.version,void 0!==this.args&&(e[a]=this.args),e};var d=d.prototype.sendMessage=d.prototype.handleMessage=d.prototype.serialize=function(e){return JSON.stringify(e)},d.prototype.deserialize=d.prototype.isDirectCommunication=d.prototype.isCrossOrigin=function(){};var c={};rtTruthyString=l,c.assertNotNullObject=p,c.assertNumber=f,c.assertNumberBetween=h,c.assertFunction=c.assertPositiveNumber=y("OmidSessionClient.Partner",();var _=_.prototype.toJSON=function(){return{accessMode:this.accessMode,resourceUrl:this.resourceUrl,vendorKey:this.vendorKey,verificationParameters:this.verificationParameters}},y("OmidSessionClient.VerificationScriptResource",_);var S=S.prototype.setVideoElement=function(e){p("Context.videoElement",e),this.videoElement=e},S.prototype.setSlotElement=function(e){p("Context.slotElement",e),this.slotElement=e},S.prototype.setServiceWindow=y("OmidSessionClient.Context",S);var m={};m.omidGlobal=);var v={sessionError:"reportError"},I=Object.keys(r.MediaEventType).map((),O=["impressionOccurred"],g=.prototype.isSupported=g.prototype.sendMessage=var M={};error=T,M.debug=function(){var e=n.getRestArguments.apply(0,arguments);b((,()};var N="1.4.8-iab4174",R={},C=3;unction w(e,t){e=e.split("-")[0].split("."),t=t.split("-")[0].split(".");for(var n=0;n<C;n++){var r=parseInt(e[n],10),i=parseInt(t[n],10);if(r>i)break;if(r<i)return!1}return!0}R.isValidVersion=P,R.versionGreaterOrEqual=w;var D={},L="1.0.3";serializeMessageArgs=F,D.deserializeMessageArgs=x;var V={},U="SessionService.",W="VerificationService.";function j(e){return Y(e,U)}function B(e){return G(e,U)}etPrefixedSessionServiceMethod=j,V.getPrefixedVerificationServiceMethod=function(e){return Y(e,W)},V.getUnprefixedSessionServiceMethod=B,V.getUnprefixedVerificationServiceMethod=k,V.isPrefixedSessionServiceMethod=function(e){return null!=B(e)},V.isPrefixedVerificationServiceMethod=var H={};aluatePageUrl=H.isCrossOrigin=J,H.removeDomElements=function(e){return e.type===r.AdEventType.SESSION_START&&(void 0!==e.data.context.videoElement&&(e.data.context.videoElement="DOM Video Element - Present but not parsed to avoid parse error"),void 0!==e.data.context.slotElement&&(e.data.context.slotElement="DOM Slot Element - Present but not parsed to avoid parse error")),e},H.resolveGlobalContext=$,H.resolveTopWindowContext=K,H.isTopWindowAccessible=var X=n.inherits(X,d),X.prototype.sendMessage=X.prototype.handleExportedMessage=X.prototype.isCrossOrigin=var Q=n.inherits(Q,d),Q.isCompatibleContext=Q.prototype.sendMessage=Q.prototype.isCrossOrigin=var Z={OMID_PRESENT_FRAME_NAME:"omid_v1_present",OMID_PRESENT_FRAME_NAME_WEB:"omid_v1_present_web",OMID_PRESENT_FRAME_NAME_APP:"omid_v1_present_app",getEnvironmentIframeName:;unction ee(e,t){e.document.write('<iframe style="display:none" id="'+t+'" name="'+t+'" sandbox></iframe>')}Z.isOmidPresent=Z.getOmidEnvironment=function(e){for(var t=n.makeIterator(Object.values(r.Environment)),i=t.next();!i.done;i=t.next())if(i=i.value,q(e,Z.getEnvironmentIframeName(i)))return i;return null},Z.declareOmidPresence=Z.appendPresenceIframe_=function(e,t){var n=e.document.createElement("iframe");n.id=t,n.name=t,n.style.display="none",n.sandbox="",e.document.body.appendChild(n)},Z.isMutationObserverAvailable_=Z.registerMutationObserver_=var te={},ne=["omid","v1_SessionServiceCommunication"],re=["omid","v1_VerificationServiceCommunication"],ie=["omidVerificationProperties","serviceWindow"];tartSessionServiceCommunication=ue,te.startVerificationServiceCommunication=var de=function(e,t,n){p("AdSession.context",e),this.adSessionId_=A(),this.context_=e,this.impressionOccurred_=!1;var r=this.context_.serviceWindow||void 0;this.communication_=t||ue($(),r),this.sessionInterface_=n||new g,this.isSessionRunning_=this.hasMediaEvents_=this.hasAdEvents_=!1,this.impressionType_=this.creativeType_=null,this.creativeLoaded_=!1,this.callbackMap_={},this.communication_&&(this.communication_.onMessage=this.handleInternalMessage_.bind(this)),this.setClientInfo_(),this.injectVerificationScripts_(e.verificationScriptResources),this.sendSlotElement_(e.slotElement),this.sendVideoElement_(e.videoElement),this.sendContentUrl_(e.contentUrl),this.watchSessionEvents_()};de.prototype.getAdSessionId=de.prototype.setCreativeType=function(e){if(e===r.CreativeType.DEFINED_BY_JAVASCRIPT)throw Error("Creative type cannot be redefined with value "+r.CreativeType.DEFINED_BY_JAVASCRIPT);if(this.impressionOccurred_)throw Error("Impression has already occurred");if(this.creativeLoaded_)throw Error("Creative has already loaded");if(this.creativeType_&&this.creativeType_!==r.CreativeType.DEFINED_BY_JAVASCRIPT)throw Error("Creative type cannot be redefined");if(void 0===this.creativeType_)throw Error("Native integration is using OMID 1.2 or earlier");this.sendOneWayMessage("setCreativeType",e,this.adSessionId_),this.creativeType_=e},de.prototype.setImpressionType=function(e){if(e===r.ImpressionType.DEFINED_BY_JAVASCRIPT)throw Error("Impression type cannot be redefined with value "+r.ImpressionType.DEFINED_BY_JAVASCRIPT);if(this.impressionOccurred_)throw Error("Impression has already occurred");if(this.creativeLoaded_)throw Error("Creative has already loaded");if(this.impressionType_&&this.impressionType_!==r.ImpressionType.DEFINED_BY_JAVASCRIPT)throw Error("Impression type cannot be redefined");if(void 0===this.impressionType_)throw Error("Native integration is using OMID 1.2 or earlier");this.sendOneWayMessage("setImpressionType",e,this.adSessionId_),this.impressionType_=e},de.prototype.isSupported=de.prototype.isSendingElementsSupported_=de.prototype.registerSessionObserver=de.prototype.start=de.prototype.finish=de.prototype.error=de.prototype.registerAdEvents=function(){if(this.hasAdEvents_)throw Error("AdEvents already registered.");this.hasAdEvents_=!0,this.sendOneWayMessage("registerAdEvents",this.adSessionId_)},de.prototype.registerMediaEvents=function(){if(this.hasMediaEvents_)throw Error("MediaEvents already registered.");this.hasMediaEvents_=!0,this.sendOneWayMessage("registerMediaEvents",this.adSessionId_)},de.prototype.sendOneWayMessage=de.prototype.sendMessage=de.prototype.sendInternalMessage_=function(e,t,n){var r=A();t&&(this.callbackMap_[r]=t),e=new u(r,j(e),N,F(N,n)),this.communication_.sendMessage(e)},de.prototype.handleInternalMessage_=de.prototype.sendInterfaceMessage_=de.prototype.assertSessionRunning=de.prototype.impressionOccurred=function(){if(this.creativeType_===r.CreativeType.DEFINED_BY_JAVASCRIPT)throw Error("Creative type has not been redefined");if(this.impressionType_===r.ImpressionType.DEFINED_BY_JAVASCRIPT)throw Error("Impression type has not been redefined");this.impressionOccurred_=!0},de.prototype.creativeLoaded=de.prototype.setClientInfo_=function(){this.sendOneWayMessage("setClientInfo",N,this.context_.partner.name,this.context_.partner.version,this.adSessionId_)},de.prototype.injectVerificationScripts_=de.prototype.sendSlotElement_=function(e){this.sendElement_(e,"setSlotElement")},de.prototype.sendVideoElement_=de.prototype.sendElement_=de.prototype.sendContentUrl_=de.prototype.setElementBounds=function(e){p("AdSession.elementBounds",e),this.sendOneWayMessage("setElementBounds",e,this.adSessionId_)},de.prototype.watchSessionEvents_=y("OmidSessionClient.AdSession",de);var ce=ce.prototype.toJSON=var le=function(e){p("AdEvents.adSession",e),this.adSessionId_=e.getAdSessionId();try{e.registerAdEvents(),this.adSession=e}catch(e){throw Error("AdSession already has an ad events instance registered")}};le.prototype.impressionOccurred=le.prototype.loaded=function(e){e=void 0===e?null:e,this.adSession.creativeLoaded(),e=e?e.toJSON():null,this.adSession.sendOneWayMessage("loaded",e,this.adSessionId_)},y("OmidSessionClient.AdEvents",le);var pe=function(e){p("MediaEvents.adSession",e),this.adSessionId_=e.getAdSessionId();try{e.registerMediaEvents(),this.adSession=e}catch(e){throw Error("AdSession already has a media events instance registered")}};pe.prototype.start=function(e,t){f("MediaEvents.start.duration",e),h("MediaEvents.start.mediaPlayerVolume",t,0,1),this.adSession.sendOneWayMessage("start",e,t,this.adSessionId_)},pe.prototype.firstQuartile=function(){this.adSession.sendOneWayMessage("firstQuartile",this.adSessionId_)},pe.prototype.midpoint=function(){this.adSession.sendOneWayMessage("midpoint",this.adSessionId_)},pe.prototype.thirdQuartile=function(){this.adSession.sendOneWayMessage("thirdQuartile",this.adSessionId_)},pe.prototype.complete=function(){this.adSession.sendOneWayMessage("complete",this.adSessionId_)},pe.prototype.pause=function(){this.adSession.sendOneWayMessage("pause",this.adSessionId_)},pe.prototype.resume=function(){this.adSession.sendOneWayMessage("resume",this.adSessionId_)},pe.prototype.bufferStart=function(){this.adSession.sendOneWayMessage("bufferStart",this.adSessionId_)},pe.prototype.bufferFinish=function(){this.adSession.sendOneWayMessage("bufferFinish",this.adSessionId_)},pe.prototype.skipped=pe.prototype.volumeChange=function(e){h("MediaEvents.volumeChange.mediaPlayerVolume",e,0,1),this.adSession.sendOneWayMessage("volumeChange",e,this.adSessionId_)},pe.prototype.playerStateChange=function(e){p("MediaEvents.playerStateChange.playerState",e),this.adSession.sendOneWayMessage("playerStateChange",e,this.adSessionId_)},pe.prototype.adUserInteraction=function(e){p("MediaEvents.adUserInteraction.interactionType",e),this.adSession.sendOneWayMessage("adUserInteraction",e,this.adSessionId_)},y("OmidSessionClient.MediaEvents",pe),y("OmidSessionClient.OmidVersion",(),y("OmidSessionClient.listenForServiceWindow",(function(e){var t=$();new Q(t).onMessage=)),y("OmidSessionClient.VastProperties",ce);var fe={VerificationVendorId:{OTHER:1,MOAT:2,DOUBLEVERIFY:3,INTEGRAL_AD_SCIENCE:4,PIXELATE:5,NIELSEN:6,COMSCORE:7,MEETRICS:8,GOOGLE:9}};ar Ee=new Map([[fe.VerificationVendorId.MOAT,[/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]],[fe.VerificationVendorId.DOUBLEVERIFY,[/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/,/^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/,/^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/]],[fe.VerificationVendorId.INTEGRAL_AD_SCIENCE,[/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]],[fe.VerificationVendorId.PIXELATE,[/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/,/^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]],[fe.VerificationVendorId.NIELSEN,[]],[fe.VerificationVendorId.COMSCORE,[/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/,/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/,/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]],[fe.VerificationVendorId.MEETRICS,[/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]],[fe.VerificationVendorId.GOOGLE,[/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/,/^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]]);y("OmidSessionClient.verificationVendorIdForScriptUrl",he),y("OmidSessionClient.VerificationVendorId",fe.VerificationVendorId),fe.verificationVendorIdForScriptUrl=he;var ye={};e.roughlyLessThan=ye.lessThanOrRoughlyEqual=ye.greaterThanOrRoughlyEqual=),"undefined"==typeof exports?void 0:exports);