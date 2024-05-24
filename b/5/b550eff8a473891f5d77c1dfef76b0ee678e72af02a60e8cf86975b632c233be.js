;/*FB_PKG_DELIM*/

__d("LiveClockWWWTypedLogger",["Banzai","GeneratedLoggerUtils"],(,66);
__d("LiveClockQuery_facebookRelayOperation",[],(,null);
__d("LiveClockQuery.graphql",["LiveClockQuery_facebookRelayOperation"],(,null);
__d("dispatchCustomEvent",[],(,null);
__d("LiveClock",["LiveClockQuery.graphql","LiveClockWWWTypedLogger","RelayFBEnvironment","RelayModern","asyncToGeneratorRuntime","promiseDone"],(,98);
__d("XRlAbrController",["XController"],(,null);
__d("RlAbrUtils",["AsyncRequest","Promise","XRlAbrController"],(,98);
__d("RlAlgebra",["Random"],(,98);
__d("XVideoDataAsyncController",["XController"],(,null);
__d("VideoDataAsyncControllerUri",["XVideoDataAsyncController"],(,98);
__d("ActorURIConfig",[],(,66);
__d("ActorURI",["ActorURIConfig","URI"],(,98);
__d("ErrorMetadata",["fb-error"],(,98);
__d("VideoPlayerMetaData",["ActorURI","AsyncRequest","ErrorMetadata","ErrorSerializer","FBLogger","Promise","TimeSlice","VideoData","VideoDataAsyncControllerUri","asyncToGeneratorRuntime","clearTimeout","err","getErrorSafe","isHTML5VideoImplementationUnavailable","setTimeout"],(,98);
__d("VideoPushParametersHelper",["ShakaConstants","URI","VideoPlayerShakaGlobalConfig"],(,98);
__d("getBufferedAheadOf",[],(,66);
__d("AbrEvaluationSignal",["EventEmitter","EventListener","SubscriptionsHandler","getBufferedAheadOf"],(,98);
__d("concatArrayBuffer",[],(,66);
__d("extractCEA608",["JSResource"],(,98);
__d("BufferReplacementHelper",[],(,66);
__d("BufferVelocity",[],(,66);
__d("ByteRange",["oz-player/manifests/OzByteRange"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("oz-player/manifests/OzByteRange")}),98);
__d("DeferredBuffer",["oz-player/networks/OzDeferredBuffer"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("oz-player/networks/OzDeferredBuffer")}),98);
__d("ProducerInterruptedError",["oz-player/networks/OzProducerInterruptedError"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("oz-player/networks/OzProducerInterruptedError")}),98);
__d("ReadableStream",[],(function(a,b,c,d,e,f){a=self.ReadableStream;f["default"]=a}),66);
__d("WritableStream",[],(,66);
__d("pipeErrorTo",[],(,66);
__d("FixedSizeTransform",["invariant","Deferred","DeferredBuffer","MaybeNativePromise","ProducerInterruptedError","ReadableStream","WritableStream","pipeErrorTo"],(,98);
__d("PausableRangeStream",["oz-player/networks/OzPausableRangeStream"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("oz-player/networks/OzPausableRangeStream")}),98);
__d("ChunkableContinuousRangeStream",["ByteRange","Deferred","FixedSizeTransform","MaybeNativePromise","PausableRangeStream","ReadableStream","WritableStream"],(,98);
__d("VideoPriorityCalculator",[],(,66);
__d("ContinuousPausableStreamTask",["Deferred","MaybeNativePromise","VideoPriorityCalculator","clearInterval","setInterval"],(,98);
__d("RlAbrModel",["RlAbrUtils","RlAlgebra","ShakaConstants","asyncToGeneratorRuntime"],(,98);
__d("FirstLoadedVideoPriorityAdjuster",["EventListener","SubscriptionsHandler"],(,98);
__d("UnitConstants",[],(,66);
__d("LocalBitrateHelper",["UnitConstants"],(,98);
__d("ShakaSegmentReferenceHelper",["BinarySearch","FBLogger"],(,98);
__d("MultipleSegmentsProvider",["invariant","ShakaSegmentReferenceHelper","VideoPlayerShakaGlobalConfig","emptyFunction"],(,98);
__d("NetworkStatusDetector",["EventEmitter","clearInterval","setIntervalAcrossTransitions"],(,98);
__d("VideoSegmentInfoHelper",["URI","VideoAkamaiRequestHelper","VideoDashPrefetchCache","XHRRequest","getCrossOriginTransport"],(,null);
__d("SegmentsUpdateHelper",["ODS","ShakaConstants","VideoSegmentInfoHelper"],(,98);
__d("TrackedPromise",["Promise"],(,66);
__d("VideoSegmentPromiseBuffer",[],(,66);
__d("VideoClientEdgeCooperation",["clearTimeout","gkx","setTimeoutAcrossTransitions"],(,98);
__d("NetworkRequestPipelineStats",[],(,66);
__d("VideoPlayerResourceTimer",[],(,66);
__d("getXHRRequestHandlerHelper",[],(,66);
__d("NetworkRequestPipeline",["EventEmitter","NetworkRequestPipelineStats","VideoPlayerResourceTimer","clearTimeout","getXHRRequestHandlerHelper","performanceNow","setTimeoutAcrossTransitions"],(,98);
__d("PriorityRequestQueue",["invariant","EventEmitter"],(,null);
__d("VideoPipelineProvider",["NetworkRequestPipeline","PriorityRequestQueue","ShakaConstants"],(,null);
__d("VideoSegmentRequestQueue",[],(,66);
__d("createVideoResponsePromise",["Promise","ShakaConstants","VideoPlayerShakaError","getXHRRequestHandlerHelper","performanceNow"],(,98);
__d("VideoSegmentRequestPipeline",["ShakaConstants","SubscriptionsHandler","VideoClientEdgeCooperation","VideoPipelineProvider","VideoPlayerResourceTimer","VideoPlayerShakaError","VideoPriorityCalculator","VideoSegmentInfoHelper","VideoSegmentRequestQueue","createVideoResponsePromise","getXHRRequestHandlerHelper","performanceNow"],(,98);
__d("SegmentRequestManager",["invariant","BinarySearch","SegmentsUpdateHelper","ShakaConstants","TrackedPromise","VideoPriorityCalculator","VideoSegmentInfoHelper","VideoSegmentPromiseBuffer","VideoSegmentRequestPipeline"],(,98);
__d("ShakaTimelineSegmentIndexUtils",["BinarySearch"],(,98);
__d("VideoPlayerBitrateEstimator",[],(,66);
__d("VideoPlayerShakaBandwidthUtils",[],(,66);
__d("RoundRobinPriorityTaskQueue",["oz-player/scheduling/OzRoundRobinPriorityTaskQueue"],(function(a,b,c,d,e,f,g){g["default"]=c("oz-player/scheduling/OzRoundRobinPriorityTaskQueue")}),98);
__d("SequentialTaskScheduler",["oz-player/scheduling/OzSequentialTaskScheduler"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("oz-player/scheduling/OzSequentialTaskScheduler")}),98);
__d("VideoStreamingTaskQueueProvider",["RoundRobinPriorityTaskQueue","SequentialTaskScheduler","ShakaConstants","VideoPriorityCalculator"],(,98);
__d("getBandwidthPenaltyFactorForScheduledVideoCount",[],(,66);
__d("getNeuralBandwidthEstimate",[],(,66);
__d("VideoPlayerLocalBandwidthEstimator",["EventEmitter","EventListener","ShakaConstants","SubscriptionsHandler","VideoPlayerShakaBandwidthUtils","VideoStreamingTaskQueueProvider","getBandwidthPenaltyFactorForScheduledVideoCount","getNeuralBandwidthEstimate","guid","requireWeak"],(,98);
__d("crc16",[],(,66);
__d("VideoPushTracker",["URI","crc16"],(,98);
__d("FetchStreamStateTracker",["invariant"],(,98);
__d("NetworkErrorTransformStream",["ReadableStream","WritableStream","pipeErrorTo"],(,98);
__d("StreamBandwidthReporter",["EventEmitter","ReadableStream","ShakaConstants","WritableStream","performanceNow","pipeErrorTo"],(,98);
__d("StreamFetchRequestLogger",["PausableRangeStream","ReadableStream","VideoPlayerResourceTimer","WritableStream","performanceNow","pipeErrorTo"],(,98);
__d("VideoPriorityUpdater",["EventEmitter","ShakaConstants","VideoPriorityCalculator"],(,98);
__d("createErrorStream",["oz-player/networks/OzCreateErrorStream"],(,98);
__d("VideoSegmentStreamByFetch",["invariant","VideoAkamaiRequestHelper","VideoClientEdgeCooperation","VideoSegmentInfoHelper","createErrorStream"],(,98);
__d("VideoStreamingManager",["ChunkableContinuousRangeStream","ContinuousPausableStreamTask","EventEmitter","FetchStreamStateTracker","FixedSizeTransform","MaybeNativePromise","NetworkErrorTransformStream","PausableRangeStream","ReadableStream","ShakaConstants","StreamBandwidthReporter","StreamFetchRequestLogger","SubscriptionsHandler","VideoPriorityCalculator","VideoPriorityUpdater","VideoSegmentStreamByFetch","VideoStreamingTaskQueueProvider","WritableStream","performanceNow"],(,98);
__d("ViewportPriorityAdjuster",["Event","SubscriptionsHandler","getElementPosition","getViewportDimensions","throttle"],(,98);
__d("canUseFetchStream",[],(,66);
__d("getSeekRangeGapsFromShakaReferences",[],(,66);
__d("logLongAkamaiRequest",["CurrentUser","FBLogger"],(,98);
__d("maybeConvertHiveErrorToShakaNetError",[],(,66);
__d("mergeSeekRangeGaps",[],(,66);
__d("getBandwidthUpgradeTargetFactor",[],(,66);
__d("getVideoTracksWithoutSmoothPlayback",["Promise"],(,66);
__d("CustomAbrManager",["invariant","AbrEvaluationSignal","RlAbrModel","RlAbrUtils","Shaka","ShakaConstants","SubscriptionsHandler","VideoClientEdgeCooperation","VideoDashPrefetchCache","VideoPlaybackQuality","VideoPlayerConnectionQuality","VideoPlayerLocalBandwidthEstimator","VideoQualityClasses","asyncToGeneratorRuntime","getBandwidthUpgradeTargetFactor","getBufferedAheadOf","getVideoTracksWithoutSmoothPlayback"],(,98);
__d("LowLatencyPlayheadManager",["clearInterval","setIntervalAcrossTransitions"],(,98);
__d("LowLatencyShakaTimingProvider",["Shaka"],(,66);
__d("PerformanceResourceBuffer",["EventEmitter","ODS"],(,null);
__d("TaggedTimeRanges",["oz-player/utils/OzTaggedTimeRanges"],(,98);
__d("SkywalkerHelpers",[],(,66);
__d("SkywalkerManager",["Bootloader","Promise","SkywalkerHelpers","TransportSelectingClientSingleton","TransportSelectingClientUtils","gkx","nullthrows","promiseDone","regeneratorRuntime","requireDeferred"],(,98);
__d("VideoPlayerLiveStreamState",["EventEmitter","SkywalkerManager"],(,98);
__d("getVideoPlayerShakaSeekableRanges",[],(,66);
__d("VideoPlayerHTML5Shaka",["invariant","CustomAbrManager","EventEmitter","EventListener","FBLogger","LiveClock","LowLatencyPlayheadManager","LowLatencyShakaTimingProvider","P2PPlaybackSessionLogger","PerformanceResourceBuffer","Promise","Shaka","ShakaConstants","SubscriptionsHandler","TaggedTimeRanges","TimeRanges","URI","VideoDashPrefetchCache","VideoPlayerConnectionQuality","VideoPlayerLiveStreamState","VideoPlayerMemLeakExperiments","VideoPlayerMetaData","VideoPlayerPlayLogger","VideoPlayerQualitiesArray","VideoPlayerShakaBandwidthEstimator","VideoPlayerShakaPerformanceLogger","VideoPriorityCalculator","VideoStreamingTaskQueueProvider","asyncToGeneratorRuntime","clearInterval","dangerouslyOverrideMediaElementEndedProperty","dispatchCustomEvent","dispatchEvent","getVideoPlayerShakaSeekableRanges","nullthrows","qex","throttle"],(,98);
/**
 * License: https://www.facebook.com/legal/license/KtedQ-9_l2p/
 */
__d("stream-helpers",["ManagedError","Promise"],(,null);
/**
 * License: https://www.facebook.com/legal/license/KtedQ-9_l2p/
 */
__d("stream-queue-with-sizes",["stream-helpers"],(,null);
/**
 * License: https://www.facebook.com/legal/license/5AQLfddX66n/
 */
__d("stream-utils",["stream-helpers"],(,null);
/**
 * License: https://www.facebook.com/legal/license/boriBhOe8AA/
 */
__d("WritableStreamPolyfill",["MaybeNativePromise","stream-helpers","stream-queue-with-sizes","stream-utils"],(,null);
/**
 * License: https://www.facebook.com/legal/license/boriBhOe8AA/
 */
__d("ReadableStreamPolyfill",["MaybeNativePromise","WritableStreamPolyfill","stream-helpers","stream-queue-with-sizes","stream-utils"],(,null);