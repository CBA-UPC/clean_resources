;/*FB_PKG_DELIM*/

__d("MessagingTag",[],(,null);
__d("PresenceViewerCapabilities",["ArbiterMixin","PresenceConfig"],(,98);
__d("OnUseEffectMount.react",["react"],(,98);
__d("OnUseEffectUnmount.react",["react"],(,98);
__d("createTooltipPortal",["ReactDOM","react"],(,98);
__d("Tooltip.react",["Arbiter","OnUseEffectMount.react","OnUseEffectUnmount.react","ReactDOM","SubscriptionsHandler","TooltipData","createTooltipPortal","ifRequired","killswitch","react"],(,98);
__d("ImageWwwCssDependency",[],(,66);
__d("WorkplaceChatHelper",["ChannelConstants","CurrentUser","PresenceViewerCapabilities"],(,98);
__d("coerceImageishSprited",[],(,66);
__d("coerceImageishURL",[],(,66);
__d("compareString",[],(,66);
__d("getImageSourceURLFromImageish",[],(,66);
__d("memoizeWithArgs",[],(,66);
__d("CoreMonitorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1985308");b=d("FalcoLoggerInternal").create("core_monitor",a);e=b;g["default"]=e}),98);
__d("monitorCodeUse",["invariant","CoreMonitorFalcoEvent","ErrorNormalizeUtils","ScriptPath","SiteData","gkx","react"],(,null);
__d("padNumber",[],(,66);
__d("warnUnsupportedProp",["warning"],(,98);
__d("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",[],(,66);
__d("AbstractTextField.react",["cx","DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE","Keys","joinClasses","react"],(,null);
__d("VisualCompletionConstants",[],(,66);
__d("VisualCompletionAttributes",["VisualCompletionConstants"],(,98);
__d("CometVisualCompletionAttributes",["VisualCompletionAttributes"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("VisualCompletionAttributes")}),98);
__d("ImageCore.react",["CometVisualCompletionAttributes","URI","coerceImageishSprited","coerceImageishURL","getImageSourceURLFromImageish","joinClasses","react","warnUnsupportedProp"],(,98);
__d("Image.react",["ImageCore.react"],(,98);
__d("DateStrings",["fbt"],(,98);
__d("keyMirror",["unrecoverableViolation"],(,98);
__d("PeriodUnit",["invariant","DateConsts","keyMirror"],(,98);
__d("SharedDateUtils",[],(,66);
__d("ISODateString",[],(,66);
__d("parseISODate",["ISODateString"],(,98);
__d("DateTime",["invariant","DateConsts","Instant","PeriodUnit","SharedDateUtils","Timezone","memoizeWithArgs","monitorCodeUse","parseISODate"],(,98);
__d("BinarySearch",["unrecoverableViolation"],(,98);
__d("IntlDateStringsTypedLoggerLite",["generateLiteTypedLogger"],(,null);
__d("IntlDateFormatsCLDRWidthEnum",[],(,66);
__d("RegionDatetimePatterns",[],(,66);
__d("flipObject",[],(,66);
__d("getCLDRLocalizedFormat",["CLDRDateFormatConfig","FBLogger","IntlDateFormatsCLDRWidthEnum","RegionDatetimePatterns","flipObject","unrecoverableViolation"],(,null);
__d("intlGetDateNumerics",[],(,66);
__d("intlRenderJSDateSymbol",["DateStrings","padNumber","unrecoverableViolation"],(,98);
__d("intlRenderCLDRDate",["CLDRDateFormatConfig","intlRenderJSDateSymbol","unrecoverableViolation"],(,null);
__d("formatDate",["CLDRDateFormatConfig","CLDRDateRenderingClientRollout","DateFormatConfig","FBLogger","IntlDateStringsTypedLoggerLite","IsInternSite","Random","getCLDRLocalizedFormat","intlGetDateNumerics","intlRenderCLDRDate","intlRenderJSDateSymbol","unrecoverableViolation"],(,98);
__d("Instant",["invariant","BinarySearch","DateConsts","Timezone","formatDate","parseISODate"],(,98);
__d("LazyTimezoneDatabase",["invariant","Instant","TimezoneRulesModuleParser","compareString","nullthrows"],(,98);
__d("LocalDate",["invariant","DateConsts","DateTime","Instant","PeriodUnit","SharedDateUtils","Timezone"],(,98);
__d("RulesTimezoneTransitionProvider",["DateConsts","LazyTimezoneDatabase","TimezoneDatabaseUtil"],(,98);
__d("EnvironmentTimezoneDecisionTree",["cr:4067"],(function(a,b,c,d,e,f){e.exports=b("cr:4067")}),null);
__d("TimezoneUtil",["BinarySearch","DateConsts"],(,98);
__d("FormatExtractionTimezoneTransitionProvider",["TimezoneUtil","memoize","requireWeak"],(,98);
__d("TimezoneNamesData",["cr:4141"],(function(a,b,c,d,e,f){e.exports=b("cr:4141")}),null);
__d("TimezoneRulesFrom2009",["cr:6057"],(,null);
__d("Timezone",["invariant","DateConsts","EnvironmentTimezoneDecisionTree","FormatExtractionTimezoneTransitionProvider","RulesTimezoneTransitionProvider","TimezoneNamesData","TimezoneRulesFrom2009","TimezoneUtil","memoize","nullthrows","warning"],(,98);
__d("TimezoneDatabaseUtil",["invariant","BinarySearch","Instant","LocalDate","Timezone","nullthrows"],(,98);
__d("TimezoneDatabase",[],(,66);
__d("TimezoneRulesModuleParser",["Instant","TimezoneDatabase","TimezoneDatabaseUtil"],(,98);
__d("EnvironmentTimezoneDecisionTree-tz2023c",[],(,null);
__d("TimezoneNamesData-tz2023c",[],(,null);
__d("TimezoneRulesFrom2009-tz2023c",[],(,null);
__d("isBarcelonaURI",[],(,66);
__d("isClickIDBlacklistSVDomainURI",["ClickIDDomainBlacklistSVConfig"],(,null);
__d("isEnterpriseURI",[],(,66);
__d("isFacebookSVDomainURI",["FBDomainsSVConfig"],(,null);
__d("isFbDotComURI",[],(,66);
__d("isRoomsURI",[],(,66);
__d("isSecureOculusDotComURI",[],(,66);
__d("isTrustedCMSContentURI",[],(,66);
__d("isWhatsAppURI",[],(,66);
__d("isTrustedDestination",["LinkshimHandlerConfig","isBarcelonaURI","isBulletinDotComURI","isEnterpriseURI","isFacebookURI","isInstagramURI","isInternalFBURI","isMetaDotComURI","isOculusDotComURI","isRoomsURI","isSecureOculusDotComURI","isTrustedCMSContentURI","isWhatsAppURI","isWorkplaceDotComURI"],(,98);
__d("forEachObject",[],(,66);
__d("Dispatcher_DEPRECATED",["invariant","FBLogger","monitorCodeUse"],(,98);
__d("ExplicitRegistrationDispatcherUtils",["emptyFunction","setImmediate"],(,null);
__d("ExplicitRegistrationDispatcher",["Dispatcher_DEPRECATED","ExplicitRegistrationDispatcherUtils","setImmediate"],(,98);
__d("asset",[],(,null);
__d("processRelaySRPayload",["HasteResponse","ifRequireable"],(,98);
__d("idx",[],(,66);
__d("RealtimeFrameworksCounterFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(,98);
__d("GraphQLSubscriptionsTypedLogger",["Banzai","GeneratedLoggerUtils"],(,66);
__d("DTSGParser",["CSRFGuard","cr:8959","cr:8960"],(,98);
__d("JSResource",["JSResourceReferenceImpl"],(,98);
__d("MercuryIDs",["gkx"],(,null);
__d("relay-runtime/handlers/connection/ConnectionInterface",[],(,null);
__d("relay-runtime/util/RelayFeatureFlags",[],(,null);
__d("relay-runtime/util/StringInterner",[],(,null);
__d("relay-runtime/store/ClientID",["relay-runtime/util/RelayFeatureFlags","relay-runtime/util/StringInterner"],(,null);
__d("relay-runtime/util/RelayConcreteNode",[],(,null);
__d("relay-runtime/util/RelayDefaultHandleKey",[],(,null);
__d("relay-runtime/util/getRelayHandleKey",["invariant","relay-runtime/util/RelayDefaultHandleKey"],(,null);
__d("relay-runtime/util/stableCopy",[],(,null);
__d("relay-runtime/store/RelayStoreUtils",["invariant","relay-runtime/util/RelayConcreteNode","relay-runtime/util/getRelayHandleKey","relay-runtime/util/stableCopy"],(,null);
__d("relay-runtime/handlers/connection/ConnectionHandler",["invariant","relay-runtime/handlers/connection/ConnectionInterface","relay-runtime/store/ClientID","relay-runtime/store/RelayStoreUtils","relay-runtime/util/getRelayHandleKey","warning"],(,null);
__d("relay-runtime/handlers/connection/MutationHandlers",["invariant","relay-runtime/handlers/connection/ConnectionHandler","relay-runtime/handlers/connection/ConnectionInterface","warning"],(,null);
__d("relay-runtime/handlers/RelayDefaultHandlerProvider",["invariant","relay-runtime/handlers/connection/ConnectionHandler","relay-runtime/handlers/connection/MutationHandlers"],(,null);
__d("relay-runtime/mutations/RelayDeclarativeMutationConfig",["relay-runtime/handlers/connection/ConnectionHandler","warning"],(,null);
__d("relay-runtime/query/GraphQLTag",["invariant","relay-runtime/util/RelayConcreteNode","warning"],(,null);
__d("relay-runtime/store/RelayConcreteVariables",["invariant","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/store/RelayModernSelector",["invariant","areEqual","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayStoreUtils","warning"],(,null);
__d("relay-runtime/util/deepFreeze",[],(,null);
__d("relay-runtime/util/getRequestIdentifier",["invariant","relay-runtime/util/stableCopy"],(,null);
__d("relay-runtime/store/RelayModernOperationDescriptor",["relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayModernSelector","relay-runtime/store/RelayStoreUtils","relay-runtime/util/deepFreeze","relay-runtime/util/getRequestIdentifier"],(,null);
__d("relay-runtime/store/isRelayModernEnvironment",[],(,null);
__d("relay-runtime/mutations/applyOptimisticMutation",["invariant","relay-runtime/mutations/RelayDeclarativeMutationConfig","relay-runtime/query/GraphQLTag","relay-runtime/store/RelayModernOperationDescriptor","relay-runtime/store/isRelayModernEnvironment"],(,null);
__d("relay-runtime/mutations/commitLocalUpdate",[],(,null);
__d("relay-runtime/mutations/validateMutation",["relay-runtime/util/RelayConcreteNode","warning"],(,null);
__d("relay-runtime/mutations/commitMutation",["invariant","relay-runtime/mutations/RelayDeclarativeMutationConfig","relay-runtime/mutations/validateMutation","relay-runtime/query/GraphQLTag","relay-runtime/store/ClientID","relay-runtime/store/RelayModernOperationDescriptor","relay-runtime/store/isRelayModernEnvironment","warning"],(,null);
__d("relay-runtime/util/isPromise",[],(,null);
__d("relay-runtime/network/RelayObservable",["Promise","relay-runtime/util/isPromise"],(,null);
__d("relay-runtime/network/ConvertToExecuteFunction",["relay-runtime/network/RelayObservable"],(,null);
__d("relay-runtime/util/withProvidedVariables",["areEqual","warning"],(,null);
__d("relay-runtime/network/RelayNetwork",["invariant","relay-runtime/network/ConvertToExecuteFunction","relay-runtime/util/withProvidedVariables"],(,null);
__d("relay-runtime/network/RelayQueryResponseCache",["invariant","relay-runtime/util/stableCopy"],(,null);
__d("relay-runtime/query/PreloadableQueryRegistry",[],(,null);
__d("relay-runtime/util/RelayReplaySubject",["invariant","relay-runtime/network/RelayObservable"],(,null);
__d("relay-runtime/query/fetchQueryInternal",["invariant","Promise","relay-runtime/network/RelayObservable","relay-runtime/util/RelayReplaySubject"],(,null);
__d("relay-runtime/store/RelayErrorTrie",["relay-runtime/util/RelayFeatureFlags"],(,null);
__d("relay-runtime/util/handlePotentialSnapshotErrors",["relay-runtime/store/RelayErrorTrie","relay-runtime/util/RelayFeatureFlags"],(,34);
__d("relay-runtime/query/fetchQuery",["invariant","relay-runtime/network/RelayObservable","relay-runtime/query/GraphQLTag","relay-runtime/query/fetchQueryInternal","relay-runtime/store/RelayModernOperationDescriptor","relay-runtime/util/handlePotentialSnapshotErrors"],(,null);
__d("relay-runtime/query/fetchQuery_DEPRECATED",["relay-runtime/query/GraphQLTag","relay-runtime/store/RelayModernOperationDescriptor"],(,null);
__d("relay-runtime/multi-actor-environment/ActorIdentifier",["invariant"],(,null);
__d("relay-runtime/util/generateID",[],(,null);
__d("relay-runtime/network/wrapNetworkWithLogObserver",["relay-runtime/util/generateID"],(,null);
__d("relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel",[],(,null);
__d("relay-runtime/store/RelayModernRecord",["invariant","areEqual","relay-runtime/store/ClientID","relay-runtime/store/RelayStoreUtils","relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel","relay-runtime/util/deepFreeze","warning"],(,null);
__d("relay-runtime/store/RelayRecordState",[],(,null);
__d("relay-runtime/store/RelayRecordSource",["relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayRecordState"],(,null);
__d("relay-runtime/util/RelayError",[],(,null);
__d("relay-runtime/util/getOperation",["relay-runtime/util/RelayConcreteNode"],(,null);
__d("relay-runtime/util/withDuration",[],(,null);
__d("relay-runtime/store/OperationExecutor",["invariant","Promise","relay-runtime/network/RelayObservable","relay-runtime/store/ClientID","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayModernSelector","relay-runtime/store/RelayRecordSource","relay-runtime/store/RelayStoreUtils","relay-runtime/util/RelayError","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/generateID","relay-runtime/util/getOperation","relay-runtime/util/stableCopy","relay-runtime/util/withDuration","warning"],(,null);
__d("relay-runtime/store/RelayOperationTracker",["invariant","Promise"],(,null);
__d("relay-runtime/mutations/RelayRecordSourceMutator",["invariant","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayRecordState"],(,null);
__d("relay-runtime/mutations/RelayRecordProxy",["invariant","relay-runtime/store/ClientID","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/mutations/createUpdatableProxy",["relay-runtime/store/RelayStoreUtils","relay-runtime/util/RelayConcreteNode"],(,null);
__d("relay-runtime/mutations/readUpdatableFragment",["invariant","relay-runtime/mutations/createUpdatableProxy","relay-runtime/query/GraphQLTag","relay-runtime/store/RelayModernSelector","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/mutations/readUpdatableQuery",["relay-runtime/mutations/createUpdatableProxy","relay-runtime/query/GraphQLTag"],(,null);
__d("relay-runtime/mutations/RelayRecordSourceProxy",["invariant","relay-runtime/mutations/RelayRecordProxy","relay-runtime/mutations/readUpdatableFragment","relay-runtime/mutations/readUpdatableQuery","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayRecordState","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/mutations/RelayRecordSourceSelectorProxy",["invariant","relay-runtime/mutations/readUpdatableFragment","relay-runtime/mutations/readUpdatableQuery","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/util/recycleNodesInto",[],(,null);
__d("relay-runtime/util/shallowFreeze",[],(,null);
__d("relay-runtime/store/ResolverCache",["invariant","relay-runtime/store/ClientID","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayStoreUtils","relay-runtime/util/RelayConcreteNode","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/recycleNodesInto","relay-runtime/util/shallowFreeze","warning"],(,null);
__d("relay-runtime/store/ResolverFragments",["invariant","relay-runtime/query/GraphQLTag","relay-runtime/store/RelayModernSelector"],(,null);
__d("relay-runtime/store/TypeID",[],(,null);
__d("relay-runtime/store/RelayReader",["invariant","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayStoreUtils","relay-runtime/store/ResolverCache","relay-runtime/store/ResolverFragments","relay-runtime/store/TypeID","relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel","relay-runtime/util/RelayConcreteNode","relay-runtime/util/RelayFeatureFlags"],(,null);
__d("relay-runtime/store/RelayPublishQueue",["invariant","relay-runtime/mutations/RelayRecordSourceMutator","relay-runtime/mutations/RelayRecordSourceProxy","relay-runtime/mutations/RelayRecordSourceSelectorProxy","relay-runtime/store/RelayReader","relay-runtime/store/RelayRecordSource","relay-runtime/util/deepFreeze","warning"],(,null);
__d("relay-runtime/store/StoreInspector",[],(,null);
__d("relay-runtime/store/ViewerPattern",["relay-runtime/store/ClientID","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/store/defaultGetDataID",["relay-runtime/store/ViewerPattern"],(,null);
__d("relay-runtime/store/defaultRelayFieldLogger",[],(,null);
__d("relay-runtime/multi-actor-environment/ActorUtils",["relay-runtime/multi-actor-environment/ActorIdentifier"],(,null);
__d("relay-runtime/store/RelayResponseNormalizer",["invariant","areEqual","relay-runtime/multi-actor-environment/ActorUtils","relay-runtime/store/ClientID","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayErrorTrie","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayModernSelector","relay-runtime/store/RelayStoreUtils","relay-runtime/store/TypeID","relay-runtime/util/RelayConcreteNode","warning"],(,null);
__d("relay-runtime/store/normalizeResponse",["relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayRecordSource","relay-runtime/store/RelayResponseNormalizer"],(,34);
__d("relay-runtime/util/registerEnvironmentWithDevTools",[],(,null);
__d("relay-runtime/store/RelayModernEnvironment",["invariant","relay-runtime/handlers/RelayDefaultHandlerProvider","relay-runtime/multi-actor-environment/ActorIdentifier","relay-runtime/network/RelayObservable","relay-runtime/network/wrapNetworkWithLogObserver","relay-runtime/store/OperationExecutor","relay-runtime/store/RelayOperationTracker","relay-runtime/store/RelayPublishQueue","relay-runtime/store/RelayRecordSource","relay-runtime/store/StoreInspector","relay-runtime/store/defaultGetDataID","relay-runtime/store/defaultRelayFieldLogger","relay-runtime/store/normalizeResponse","relay-runtime/util/registerEnvironmentWithDevTools"],(,null);
__d("relay-runtime/store/cloneRelayHandleSourceField",["invariant","areEqual","relay-runtime/store/RelayStoreUtils","relay-runtime/util/RelayConcreteNode"],(,null);
__d("relay-runtime/store/cloneRelayScalarHandleSourceField",["invariant","areEqual","relay-runtime/store/RelayStoreUtils","relay-runtime/util/RelayConcreteNode"],(,null);
__d("relay-runtime/store/DataChecker",["invariant","relay-runtime/mutations/RelayRecordSourceMutator","relay-runtime/mutations/RelayRecordSourceProxy","relay-runtime/store/ClientID","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayRecordState","relay-runtime/store/RelayStoreUtils","relay-runtime/store/TypeID","relay-runtime/store/cloneRelayHandleSourceField","relay-runtime/store/cloneRelayScalarHandleSourceField","relay-runtime/util/RelayConcreteNode","relay-runtime/util/getOperation"],(,null);
__d("relay-runtime/store/RelayOptimisticRecordSource",["invariant","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayRecordSource"],(,null);
__d("relay-runtime/store/experimental-live-resolvers/getOutputTypeRecordIDs",["invariant","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/store/RelayReferenceMarker",["invariant","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayStoreUtils","relay-runtime/store/TypeID","relay-runtime/store/cloneRelayHandleSourceField","relay-runtime/store/experimental-live-resolvers/getOutputTypeRecordIDs","relay-runtime/util/RelayConcreteNode","relay-runtime/util/getOperation"],(,null);
__d("relay-runtime/store/hasOverlappingIDs",[],(,null);
__d("relay-runtime/store/hasSignificantOverlappingIDs",["relay-runtime/store/RelayStoreUtils","relay-runtime/store/ViewerPattern"],(,null);
__d("relay-runtime/store/RelayStoreSubscriptions",["relay-runtime/store/RelayReader","relay-runtime/store/hasOverlappingIDs","relay-runtime/store/hasSignificantOverlappingIDs","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/deepFreeze","relay-runtime/util/recycleNodesInto"],(,null);
__d("relay-runtime/util/resolveImmediate",["Promise"],(,null);
__d("relay-runtime/store/RelayModernStore",["invariant","regeneratorRuntime","relay-runtime/multi-actor-environment/ActorIdentifier","relay-runtime/store/DataChecker","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayOptimisticRecordSource","relay-runtime/store/RelayReader","relay-runtime/store/RelayReferenceMarker","relay-runtime/store/RelayStoreSubscriptions","relay-runtime/store/RelayStoreUtils","relay-runtime/store/ResolverCache","relay-runtime/store/defaultGetDataID","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/deepFreeze","relay-runtime/util/resolveImmediate"],(,null);
__d("relay-runtime/util/getPendingOperationsForFragment",["relay-runtime/query/fetchQueryInternal"],(,null);
__d("relay-runtime/util/isScalarAndEqual",[],(,null);
__d("relay-runtime/store/RelayModernFragmentSpecResolver",["invariant","areEqual","relay-runtime/store/RelayModernOperationDescriptor","relay-runtime/store/RelayModernSelector","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/getPendingOperationsForFragment","relay-runtime/util/handlePotentialSnapshotErrors","relay-runtime/util/isScalarAndEqual","relay-runtime/util/recycleNodesInto","warning"],(,null);
__d("relay-runtime/store/createFragmentSpecResolver",["relay-runtime/store/RelayModernFragmentSpecResolver","warning"],(,null);
__d("relay-runtime/store/createRelayContext",["invariant"],(,null);
__d("relay-runtime/store/readInlineData",["invariant","relay-runtime/query/GraphQLTag","relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/subscription/requestSubscription",["relay-runtime/mutations/RelayDeclarativeMutationConfig","relay-runtime/query/GraphQLTag","relay-runtime/store/RelayModernOperationDescriptor","relay-runtime/store/RelayModernSelector","warning"],(,null);
__d("relay-runtime/util/RelayProfiler",[],(,null);
__d("relay-runtime/util/createPayloadFor3DField",["relay-runtime/store/RelayStoreUtils"],(,null);
__d("relay-runtime/util/isEmptyObject",[],(,null);
__d("relay-runtime/util/getFragmentIdentifier",["relay-runtime/store/RelayModernSelector","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/StringInterner","relay-runtime/util/isEmptyObject","relay-runtime/util/stableCopy"],(,null);
__d("relay-runtime/util/getRefetchMetadata",["invariant"],(,null);
__d("relay-runtime/util/getPaginationMetadata",["invariant","relay-runtime/util/getRefetchMetadata"],(,null);
__d("relay-runtime/util/getPaginationVariables",["invariant","warning"],(,null);
__d("relay-runtime/util/getValueAtPath",["invariant"],(,null);
__d("relay-runtime",["Promise","relay-runtime/handlers/RelayDefaultHandlerProvider","relay-runtime/handlers/connection/ConnectionHandler","relay-runtime/handlers/connection/ConnectionInterface","relay-runtime/handlers/connection/MutationHandlers","relay-runtime/mutations/RelayDeclarativeMutationConfig","relay-runtime/mutations/applyOptimisticMutation","relay-runtime/mutations/commitLocalUpdate","relay-runtime/mutations/commitMutation","relay-runtime/network/RelayNetwork","relay-runtime/network/RelayObservable","relay-runtime/network/RelayQueryResponseCache","relay-runtime/query/GraphQLTag","relay-runtime/query/PreloadableQueryRegistry","relay-runtime/query/fetchQuery","relay-runtime/query/fetchQueryInternal","relay-runtime/query/fetchQuery_DEPRECATED","relay-runtime/store/ClientID","relay-runtime/store/RelayConcreteVariables","relay-runtime/store/RelayModernEnvironment","relay-runtime/store/RelayModernOperationDescriptor","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayModernSelector","relay-runtime/store/RelayModernStore","relay-runtime/store/RelayOperationTracker","relay-runtime/store/RelayRecordSource","relay-runtime/store/RelayStoreUtils","relay-runtime/store/ResolverFragments","relay-runtime/store/ViewerPattern","relay-runtime/store/createFragmentSpecResolver","relay-runtime/store/createRelayContext","relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel","relay-runtime/store/isRelayModernEnvironment","relay-runtime/store/normalizeResponse","relay-runtime/store/readInlineData","relay-runtime/subscription/requestSubscription","relay-runtime/util/RelayConcreteNode","relay-runtime/util/RelayDefaultHandleKey","relay-runtime/util/RelayError","relay-runtime/util/RelayFeatureFlags","relay-runtime/util/RelayProfiler","relay-runtime/util/RelayReplaySubject","relay-runtime/util/createPayloadFor3DField","relay-runtime/util/deepFreeze","relay-runtime/util/getFragmentIdentifier","relay-runtime/util/getPaginationMetadata","relay-runtime/util/getPaginationVariables","relay-runtime/util/getPendingOperationsForFragment","relay-runtime/util/getRefetchMetadata","relay-runtime/util/getRelayHandleKey","relay-runtime/util/getRequestIdentifier","relay-runtime/util/getValueAtPath","relay-runtime/util/handlePotentialSnapshotErrors","relay-runtime/util/isPromise","relay-runtime/util/isScalarAndEqual","relay-runtime/util/recycleNodesInto","relay-runtime/util/stableCopy","relay-runtime/util/withProvidedVariables"],(,null);
__d("react-relay/ReactRelayContext",["react","relay-runtime"],(,null);
__d("react-relay/relay-hooks/useRelayEnvironment",["invariant","react","react-relay/ReactRelayContext"],(,null);
__d("RelayFBEnvironmentActorID",["invariant","react-relay/relay-hooks/useRelayEnvironment"],(,null);
__d("RelayFBConsoleLog",["cr:1121434"],(,98);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE"],(,null);
__d("RelayFBGCScheduler",["JSScheduler"],(,98);
__d("BizKitNotificationsThinClientConnectionHandler",["relay-runtime","unrecoverableViolation","warning"],(,98);
__d("RelayFBConnectionHandler_UNSTABLE",["invariant","relay-runtime/mutations/RelayRecordProxy","relay-runtime/mutations/RelayRecordSourceProxy","relay-runtime/mutations/RelayRecordSourceSelectorProxy","relay-runtime/store/RelayModernRecord","relay-runtime/util/getRelayHandleKey"],(,null);
__d("UFI2CommentsConnectionHandler",["ODS","RelayFBConnectionHandler_UNSTABLE","gkx","relay-runtime","warning"],(,98);
__d("RelayFBHandlerProvider",["BizKitNotificationsThinClientConnectionHandler","UFI2CommentsConnectionHandler","relay-runtime"],(,98);
__d("RelayFBModuleLoader",["invariant","replaceTransportMarkers"],(,98);
__d("RelayFBOperationLoader",["Promise","RelayFBModuleLoader"],(,98);
__d("RelayFBScheduler",["ReactDOMComet"],(,98);
__d("RelayFieldLogger",["FBLogger","err","fb-error"],(,98);
__d("isPromise",["Promise"],(,66);
__d("processRelayPrefetchURIsPayload",["ExecutionEnvironment"],(,98);
__d("withLive",["invariant"],(,null);
__d("withLiveClientPolling",["invariant","LiveQueryWebClientPollingSwitchList"],(,98);
__d("createRelayFBNetwork",["ErrorGuard","Promise","cr:1110430","cr:8959","gkx","isPromise","killswitch","processRelayPrefetchURIsPayload","processRelaySRPayload","relay-runtime","withLive","withLiveClientPolling"],(,98);
__d("RelayAPIConfig",["RelayAPIConfigDefaults","URI"],(,null);
__d("createChunkedResponseParser",["invariant"],(,98);
__d("createRelayChunkedResponseParser",["invariant"],(,null);
__d("getRelayAPIRequestHandler",["cr:696703"],(,98);
__d("RelayAPIRequest",["invariant","NetworkStatus","URI","XHRHttpError","XHRRequest","createChunkedResponseParser","createRelayChunkedResponseParser","forEachObject","getRelayAPIRequestHandler","getSameOriginTransport","warning"],(,null);
__d("RelayDiskCacheConfig",[],(,66);
__d("RelayFBJsonParser",["cr:267","gkx"],(,98);
__d("RelayRuntime",["relay-runtime"],(,null);
__d("RelayGraphQLRequestUtils",["CSRFGuard","RelayFBJsonParser","RelayRuntime","XHRHttpError"],(,null);
__d("RelayAsyncStreamPool",["invariant"],(,98);
__d("stableStringify",[],(,66);
__d("stableStringifyPrefetchedRelayVariablesWithActor",["stableStringify"],(,98);
__d("RelayPrefetchedStreamCache",["ExecutionEnvironment","FBLogger","RelayAsyncStreamPool","clearImmediate","setImmediateAcrossTransitions","stableStringifyPrefetchedRelayVariablesWithActor"],(,98);
__d("RelayPrefetchedResponseProvider",["RelayGraphQLRequestUtils","RelayPrefetchedStreamCache","RelayRuntime"],(,null);
__d("RelayWWWInitialRolloutResolver",[],(,66);
__d("getAnalyticsTags",["relay-runtime","requireWeak"],(,98);
__d("createRelayFBNetworkFetch",["invariant","DTSGParser","RelayAPIConfig","RelayAPIRequest","RelayDiskCacheConfig","RelayGraphQLRequestUtils","RelayPrefetchedResponseProvider","RelayRuntime","RelayWWWInitialRolloutResolver","getAnalyticsTags","getAsyncParams","getCrossOriginTransport","getSameOriginTransport","nullthrows"],(,null);
__d("str2rstr",[],(,66);
__d("md5",["str2rstr"],(,98);
__d("RelayRTIUtils",["ChannelClientID","GraphQLSubscriptionsTypedLogger","Random","RealtimeFrameworksCounterFalcoEvent","gkx"],(,98);
__d("RealtimeGraphQLRequest",["invariant","RequestStreamCommonRequestStreamCommonTypes","TransportSelectingClientSingleton","nullthrows","regeneratorRuntime"],(,98);
__d("makeGraphQLSubscriptionRequest",["RealtimeGraphQLRequest"],(,98);
__d("RelayRTIGraphQLSubscriber",["invariant","CurrentUser","Random","RelayRTIUtils","RelayRuntime","err","gkx","makeGraphQLSubscriptionRequest","promiseDone","uuidv4"],(,98);
__d("RelayFBSubscribeFunction",["RelayRTIGraphQLSubscriber"],(,98);
__d("createRelayFBSubscribeFunction",["RelayFBSubscribeFunction"],(,null);
__d("getRelayFBMissingFieldHandlers",["relay-runtime"],(,null);
__d("liveQueryFetchWithWWWInitialWrapper",["JSResource","RelayRuntime","promiseDone"],(,98);
__d("relayFBGetDataID",["relay-runtime"],(,null);
__d("RelayFBEnvironmentDefinitions",["RelayFBConsoleLog","RelayFBEnvironmentActorID","RelayFBGCScheduler","RelayFBHandlerProvider","RelayFBOperationLoader","RelayFBScheduler","RelayFieldLogger","createRelayFBNetwork","createRelayFBNetworkFetch","createRelayFBSubscribeFunction","getRelayFBMissingFieldHandlers","liveQueryFetchWithWWWInitialWrapper","relay-runtime","relayFBGetDataID"],(,null);
__d("configureRelayForFB",["relay-runtime"],(,null);
__d("RelayFBMutations",["RelayAPIConfig","warning"],(,null);
__d("RelayMutationQueue",["relay-runtime"],(,null);
__d("enqueueMutation",["RelayMutationQueue"],(,null);
__d("RelayFBSubscription",["ClientIDs","warning"],(,null);
__d("react-relay/ReactRelayContainerUtils",[],(,null);
__d("react-relay/isRelayEnvironment",[],(,null);
__d("react-relay/RelayContext",["invariant","react-relay/isRelayEnvironment"],(,null);
__d("react-relay/ReactRelayQueryRendererContext",["react"],(,null);
__d("react-relay/assertFragmentMap",["invariant"],(,null);
__d("react-relay/buildReactRelayContainer",["invariant","react","react-relay/ReactRelayContainerUtils","react-relay/ReactRelayContext","react-relay/ReactRelayQueryRendererContext","react-relay/assertFragmentMap","relay-runtime"],(,null);
__d("react-relay/ReactRelayFragmentContainer",["areEqual","react","react-relay/ReactRelayContainerUtils","react-relay/RelayContext","react-relay/buildReactRelayContainer","relay-runtime"],(,null);
__d("react-relay/ReactRelayLocalQueryRenderer",["areEqual","react","react-relay/ReactRelayContext","react-relay/ReactRelayQueryRendererContext","relay-runtime"],(,null);
__d("react-relay/ReactRelayQueryFetcher",["invariant","relay-runtime"],(,null);
__d("react-relay/getRootVariablesForFragments",["relay-runtime"],(,null);
__d("react-relay/ReactRelayPaginationContainer",["invariant","areEqual","react","react-relay/ReactRelayContainerUtils","react-relay/ReactRelayContext","react-relay/ReactRelayQueryFetcher","react-relay/RelayContext","react-relay/buildReactRelayContainer","react-relay/getRootVariablesForFragments","relay-runtime","warning"],(,null);
__d("react-relay/ReactRelayQueryRenderer",["areEqual","react","react-relay/ReactRelayContext","react-relay/ReactRelayQueryFetcher","react-relay/ReactRelayQueryRendererContext","relay-runtime"],(,null);
__d("react-relay/ReactRelayRefetchContainer",["areEqual","react","react-relay/ReactRelayContainerUtils","react-relay/ReactRelayContext","react-relay/ReactRelayQueryFetcher","react-relay/RelayContext","react-relay/buildReactRelayContainer","react-relay/getRootVariablesForFragments","relay-runtime","warning"],(,null);
__d("react-relay/relay-hooks/HooksImplementation",["warning"],(,null);
__d("react-relay/relay-hooks/LRUCache",["invariant"],(,null);
__d("react-relay/relay-hooks/SuspenseResource",["warning"],(,null);
__d("react-relay/relay-hooks/QueryResource",["invariant","Promise","react-relay/relay-hooks/LRUCache","react-relay/relay-hooks/SuspenseResource","relay-runtime","warning"],(,null);
__d("react-relay/relay-hooks/experimental/readFragmentInternal_EXPERIMENTAL",["invariant","react-relay/relay-hooks/QueryResource","relay-runtime","warning"],(,null);
__d("react-relay/relay-hooks/loadQuery",["invariant","react","relay-runtime","warning"],(,null);
__d("react-relay/relay-hooks/useUnsafeRef_DEPRECATED",["react"],(,null);
__d("react-relay/relay-hooks/useFetchTrackingRef",["react","react-relay/relay-hooks/useUnsafeRef_DEPRECATED"],(,null);
__d("react-relay/relay-hooks/useIsMountedRef",["react"],(,null);
__d("react-relay/relay-hooks/useIsOperationNodeActive",["invariant","react","react-relay/relay-hooks/useRelayEnvironment","relay-runtime"],(,null);
__d("react-relay/relay-hooks/useLoadMoreFunction",["invariant","react","react-relay/relay-hooks/useFetchTrackingRef","react-relay/relay-hooks/useIsMountedRef","react-relay/relay-hooks/useIsOperationNodeActive","react-relay/relay-hooks/useRelayEnvironment","relay-runtime","warning"],(,null);
__d("react-relay/relay-hooks/useQueryLoader",["react","react-relay/relay-hooks/loadQuery","react-relay/relay-hooks/useIsMountedRef","react-relay/relay-hooks/useRelayEnvironment","relay-runtime"],(,null);
__d("react-relay/relay-hooks/useStaticFragmentNodeWarning",["react-relay/relay-hooks/useUnsafeRef_DEPRECATED","warning"],(,null);
__d("RelayFBEnvironmentFactory",["RelayFBEnvironmentDefinitions"],(,null);
__d("RelayFBDefaultEnvironment",["RelayFBEnvironmentFactory"],(,98);
__d("RelayFBEnvironment",["cr:1385201"],(,98);
__d("RelayFBInjectedHooksImplementation",["react-relay/relay-hooks/HooksImplementation","react-relay/relay-hooks/legacy/useFragment","react-relay/relay-hooks/legacy/useFragmentNode","react-relay/relay-hooks/legacy/usePaginationFragment","react-relay/relay-hooks/legacy/useRefetchableFragment"],(,98);
__d("configureRelayFeatureFlagsForWWW",["gkx","relay-runtime"],(,98);
__d("configureRelayForWWW",["FBLogger","configureRelayFeatureFlagsForWWW","configureRelayForFB","cr:8465","relay-runtime"],(,98);
__d("RelayModern",["RelayFBEnvironmentDefinitions","RelayFBMutations","RelayFBSubscription","configureRelayForWWW","enqueueMutation","react-relay/ReactRelayContext","react-relay/ReactRelayFragmentContainer","react-relay/ReactRelayLocalQueryRenderer","react-relay/ReactRelayPaginationContainer","react-relay/ReactRelayQueryRenderer","react-relay/ReactRelayRefetchContainer","relay-runtime"],(,null);
__d("mergeRefs",["recoverableViolation"],(,98);