;/*FB_PKG_DELIM*/

__d("PlatformDialog",["cx","CSS","DOMEvent","DOMEventListener"],(,null);
__d("ArbiterFrame",[],(,null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(,null);
__d("WebPixelRatio",["SiteData"],(,98);
__d("PixelRatioConst",[],(,66);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run","WebPixelRatio"],(,98);
__d("Queue",[],(,66);
__d("resolveWindow",[],(,66);
__d("ObservableMixin",[],(,null);
__d("ManagedError",[],(,66);
__d("AssertionError",["ManagedError"],(,98);
__d("Assert",["AssertionError","sprintf"],(,98);
__d("Type",["Assert"],(,null);
__d("sdk.Model",["ObservableMixin","Type"],(,98);
__d("sdk.Runtime",["JSSDKRuntimeConfig","sdk.Model"],(,98);
__d("UrlMap",["invariant","UrlMapConfig","sdk.Runtime"],(,98);
__d("sdk.Scribe",["QueryString","UrlMap","sdk.Runtime"],(,98);
__d("XD",["Arbiter","DOM","DOMDimensions","Log","PHPQuerySerializer","Queue","URI","isFacebookURI","isInIframe","resolveWindow","sdk.Scribe"],(,98);
__d("Plugin",["Arbiter","ArbiterFrame"],(,null);
__d("UnverifiedXD",["XD"],(,98);
__d("getOffsetParent",["Style"],(,null);
__d("PluginResize",["Locale","Log","UnverifiedXD","getOffsetParent","getStyleProperty"],(,null);
__d("StrSet",[],(,66);
__d("PlatformVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(,66);
__d("PlatformWidgetEndpoint",["PlatformVersioning"],(,null);
__d("PluginReturn",["invariant","Arbiter","Log","PlatformDialog","PlatformWidgetEndpoint","Plugin","URI"],(,null);
__d("SecurePostMessage",["invariant"],(,null);
__d("PluginXDReady",["Arbiter","Log","SecurePostMessage","UnverifiedXD"],(,98);
__d("TransportSelectingClientSingletonConditional",["cr:5800"],(,98);
__d("RDFDRequireDeferredReference",["RequireDeferredReference"],(,98);
__d("requireDeferredForDisplay",["RDFDRequireDeferredReference"],(,98);
__d("Qe2JsExposureFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1837559");b=d("FalcoLoggerInternal").create("qe2_js_exposure",a);e=b;g["default"]=e}),98);
__d("QE2Logger",["Qe2JsExposureFalcoEvent"],(,98);
__d("FbtLogging",["QE2Logger","cr:1094907","cr:1290"],(,98);
__d("IntlQtEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(,98);
__d("FalcoAppUniverse",["$InternalEnum"],(,66);
__d("FalcoLoggerTransports",["AnalyticsCoreData","Banzai","ExecutionEnvironment","FBLogger","FalcoAppUniverse","FalcoUtils","ODS","PersistedQueue","Queue","WebSession","performanceAbsoluteNow","promiseDone","requireDeferredForDisplay","uuidv4"],(,98);