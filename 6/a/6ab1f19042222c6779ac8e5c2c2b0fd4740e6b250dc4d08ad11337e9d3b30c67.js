(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[589],{KLDM:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("3M/p"),r=n("bgLm"),s=n("USFr"),a="Office.Telemetry.OTelJS.EventThrottled";ar l=function(){function t(t,e){this._sinkName=t,this._telemetrySink=e,this.name="EventThrottler",this._totalEventsInLastInterval=0,this._singleEventInLastInterval={},this._eventThrottleReported={},this._lastIntervalStart=Date.now(),this._maxNamedEventsPerSecond={}}return t.prototype.setSingleEventThrottle=function(t){this._maxSingleEventPerSecond=t},t.prototype.setTotalEventThrottle=t.prototype.setNamedEventThrottle=t.prototype.processEvent=function(t){var e=t.eventName;if(e===a)return!0;var n=!0;return Date.now()-this._lastIntervalStart>1e3&&(this._lastIntervalStart=Date.now(),this._totalEventsInLastInterval=0,this._singleEventInLastInterval={}),this._singleEventInLastInterval[e]=this._singleEventInLastInterval[e]+1||1,e in this._maxNamedEventsPerSecond?n=this.applyThrottle(this._singleEventInLastInterval[e],this._maxNamedEventsPerSecond[e],"MaxNamedEventsPerSecond",e):o(this._maxSingleEventPerSecond)&&(n=this.applyThrottle(this._singleEventInLastInterval[e],this._maxSingleEventPerSecond,"MaxSingleEventsPerSecond",e)),o(this._maxTotalEventsPerSecond)&&(this._totalEventsInLastInterval++,n&&(n=this.applyThrottle(this._totalEventsInLastInterval,this._maxTotalEventsPerSecond,"MaxTotalEventsPerSecond",e))),n},t.prototype.applyThrottle=function(t,e,n,o){return!(t>e&&(t===e+1&&this._telemetrySink&&!this._eventThrottleReported[o]&&(this._eventThrottleReported[o]=!0,this._telemetrySink.sendTelemetryEvent({eventName:a,telemetryProperties:{ariaTenantToken:s.a,nexusTenantToken:1723},eventFlags:{diagnosticLevel:110},dataFields:[Object(i.d)("SinkName",this._sinkName||""),Object(i.d)("ThrottledEvent.Name",o),Object(i.c)(n,e)]})),Object(r.b)(2,1,(),1))},t}()},"uTS/":function(t,e,n){"use strict";n.r(e),n.d(e,"OneDSEndpoint",(function(){return i.a})),n.d(e,"EventThrottler",(function(){return r.a})),n.d(e,"getCorrespondingCCCOEndpoint",(function(){return s.b})),n.d(e,"OneDSHelper",(function(){return s.a})),n.d(e,"OneDSSink",(),n.d(e,"Sampler",(function(){return u})),n.d(e,"OsPlugin",(function(){return v})),n.d(e,"DNMHandler",(function(){return S})),n.d(e,"CustomerContentHandler",();var i=n("svub"),r=n("KLDM"),s=n("h+vv"),a=n("3qFY"),o=n("3M/p"),l=1e3,u=function(){eturn t.prototype.enableWithIdentifier=function(t,e){return!("string"!=typeof e||e.length<4||(this.samplingValue=function(t){return function(t){for(var e=5381,n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n);return e>>>0}(t)%l/l}(e),this.samplingKey=t,0))},t.prototype.enableWithSamplingValue=function(t,e){return!(isNaN(e)||e<0||e>=1||(this.samplingValue=e,this.samplingKey=t,0))},t.prototype.enableWithRandomValue=function(){var t=new Uint32Array(1);return!("object"!=typeof window||!window.crypto||(window.crypto.getRandomValues(t),this.samplingValue=t[0]%l/l,this.samplingKey="Random",0))},t.prototype.setSampleRate=function(t){return t>=0&&t<=1&&(this.sampleRate=t,!0)},t.prototype.getSamplingValue=t.prototype.isMeasuresEnabled=function(){return void 0===this.samplingValue||this.samplingValue<this.sampleRate},t.prototype.processEvent=function(t){var e=t.eventFlags.samplingPolicy;return void 0===this.samplingValue||void 0===e||(1===e?!!this.isMeasuresEnabled()&&(this.addSampleRateField(t,this.sampleRate,this.samplingValue),!0):2!==e&&(this.addSampleRateField(t,1,this.samplingValue),!0))},t.prototype.addSampleRateField=function(t,e,n){t.eventContract||(t.eventContract={name:"",dataFields:[]});var i=t.eventContract.dataFields;i.push(Object(o.b)("Event.SampleRate",e)),i.push(Object(o.b)("Session.SamplingValue",n)),this.samplingKey&&i.push(Object(o.d)("Session.SamplingKey",this.samplingKey)),i.push(Object(o.a)("Session.MeasuresEnabled",this.isMeasuresEnabled()))},t}(),c=n("QjXU");function d(){var t;return Object(c.__awaiter)(this,void 0,void 0,(function(){return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return navigator.userAgent&&navigator.userAgent.indexOf("Windows")>0&&(null===(t=navigator.userAgentData)||void 0===t?void 0:t.getHighEntropyValues)?[4,navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then((function(t){return parseInt(t.platformVersion.split(".")[0],10)>=13})).catch(()]:[3,2];case 1:return[2,e.sent()];case 2:return[2,!1]}}))}))}var h,v=function(t){eturn Object(c.__extends)(e,t),e.prototype.processTelemetry=function(t,e){this._isWindows11&&(t.ext=t.ext||{},t.ext.os=t.ext.os||{},t.ext.os.name="Windows 11");var n=this._getTelCtx(e);this.processNext(t,n)},e.prototype.detectOs=function(){return Object(c.__awaiter)(this,void 0,void 0,(function(){var t;return Object(c.__generator)(this,(function(e){switch(e.label){case 0:return t=this,[4,d()];case 1:return t._isWindows11=e.sent(),[2]}}))}))},e}(n("Yf3j").a),p=n("bgLm"),f=n("aCzR"),m=n("fc9b"),g=n("USFr"),b=((h={})[3]=g.b,h[4]=g.c,h[5]=g.d,h[2]=g.g,h[1]=g.f,h),S=function(){return function(t){var e,n,i=this;this.eventsProcessed=0,this.initialize=function(i,r){var s=Object(c.__assign)(Object(c.__assign)({},r),{endpointUrl:t.endpointUrl,extensionConfig:Object(c.__assign)(Object(c.__assign)({},r.extensionConfig),{PrivacyGuardPlugin:{}}),plugins:[],nonStandardEventHandlers:[]});e=Object(m.a)(s,"67074e509c164bcaaf85b53c0ad0cde2-13c1c869-7901-4e72-b536-9e754e3b7413-6518"),s.disableStatsTracking||Object(m.b)(i,e),n=i},this.shutdown=function(){null==e||e.shutdown()},this.flush=function(t){null==e||e.flush(t)},this.canHandle=this.processEvent=function(t){return i.eventsProcessed++,Object(g.l)((function(){var i=function(t){var e,i=Object(f.c)(t),r=[];if(n.getPreprocessors().forEach((),Object(g.k)(i,r)){var s=Object(g.j)(i);s.setMilliseconds(0),s.setSeconds(0),s.setMinutes(0),2===i.telemetryProperties.dnmInterval&&s.setHours(0);var a={"Event.Name":i.eventName,"Event.Source":"OTelJS","Event.Time":{value:s.toISOString(),propertyType:9}},o=function(t,e){var n={};return e&&e.forEach((),n}(n.getOneDSPersistentDataFields(),null===(e=null==t?void 0:t.telemetryProperties)||void 0===e?void 0:e.dnmAllowedPartA);for(var l in o)a[l]=o[l];if(!Object(g.h)(a,i.dataFields,!0,3))return void Object(p.b)(0,1,();var u=function(t){if(t.telemetryProperties&&t.telemetryProperties.dnmToken)return t.telemetryProperties.dnmToken;Object(p.b)(0,1,(function(){return"Missing DNM Token"}))}(i);if(!u)return;return{iKey:u,name:i.eventName,data:a,time:s.toISOString(),baseType:"custom",ext:{sdk:{seq:0},utc:{eventFlags:2097152}}}}}(t);i&&e&&(null==e||e.track(i))}),g.m)}}}(),_=function(){return function(){var t,e,n=this;this.eventsProcessed=0,this.initialize=function(n,i){var r=Object(s.b)(i.endpointUrl);if(r){var a=Object(c.__assign)(Object(c.__assign)({},i),{endpointUrl:r,extensionConfig:Object(c.__assign)(Object(c.__assign)({},i.extensionConfig),{PrivacyGuardPlugin:{}}),nonStandardEventHandlers:[],plugins:[]});t=Object(m.a)(a,g.e),i.disableStatsTracking||Object(m.b)(n,t),e=n}else Object(p.b)(0,1,()},this.shutdown=this.flush=this.canHandle=this.processEvent=function(i){return n.eventsProcessed++,Object(g.l)((function(){var n=e.getOneDSCustomerContent(i);n&&t&&(null==t||t.track(n))}),g.m)}}}()}}]);
//# sourceMappingURL=oteljs1ds.a1e068a39fb91d55fd72.chunk.v7.js.map