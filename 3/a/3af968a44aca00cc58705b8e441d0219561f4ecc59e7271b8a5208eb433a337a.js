/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/*! !webpack amd options */

/*! ../../../../core/Debug */

/*! ../../../../core/FactoryMaker */

/*! ../../../constants/Constants */

/*! ../../../constants/MetricsConstants */

/*! ../../../core/Debug */

/*! ../../../core/EventBus */

/*! ../../../core/FactoryMaker */

/*! ../../../core/Utils */

/*! ../../../core/errors/ErrorsBase */

/*! ../../../core/events/Events */

/*! ../../../dash/controllers/ContentSteeringController */

/*! ../../../externals/cea608-parser */

/*! ../../../externals/xml2json */

/*! ../../../models/CustomParametersModel */

/*! ../../../streaming/constants/Constants */

/*! ../../MediaPlayerEvents */

/*! ../../MetricsReportingEvents */

/*! ../../SwitchRequest */

/*! ../../constants/Constants */

/*! ../../constants/DashConstants */

/*! ../../constants/MetricsConstants */

/*! ../../constants/ProtectionConstants */

/*! ../../core/Debug */

/*! ../../core/EventBus */

/*! ../../core/FactoryMaker */

/*! ../../core/Settings */

/*! ../../core/Utils */

/*! ../../core/errors/Errors */

/*! ../../core/events/Events */

/*! ../../core/events/EventsBase */

/*! ../../dash/DashHandler */

/*! ../../dash/constants/DashConstants */

/*! ../../dash/controllers/SegmentsController */

/*! ../../dash/models/DashManifestModel */

/*! ../../dash/utils/SegmentsUtils */

/*! ../../dash/vo/BaseURL */

/*! ../../dash/vo/UTCTiming */

/*! ../../externals/base64 */

/*! ../../externals/cea608-parser */

/*! ../../streaming/MediaPlayerEvents */

/*! ../../streaming/constants/ConformanceViolationConstants */

/*! ../../streaming/constants/Constants */

/*! ../../streaming/net/HTTPLoader */

/*! ../../streaming/net/SchemeLoaderFactory */

/*! ../../streaming/net/URLLoader */

/*! ../../streaming/net/XHRLoader */

/*! ../../streaming/thumbnail/ThumbnailTracks */

/*! ../../streaming/utils/BoxParser */

/*! ../../streaming/utils/ObjectUtils */

/*! ../../streaming/utils/URLUtils */

/*! ../../streaming/vo/DashJSError */

/*! ../../streaming/vo/metrics/HTTPRequest */

/*! ../../utils/CustomTimeRanges */

/*! ../../utils/HandlerHelpers */

/*! ../../utils/MetricSerialiser */

/*! ../../utils/RNG */

/*! ../../vo/DashJSError */

/*! ../../vo/metrics/HTTPRequest */

/*! ../CommonEncryption */

/*! ../FragmentLoader */

/*! ../ManifestUpdater */

/*! ../MediaPlayerEvents */

/*! ../MetricsReportingEvents */

/*! ../SegmentBaseLoader */

/*! ../SourceBufferSink */

/*! ../Stream */

/*! ../SwitchRequest */

/*! ../WebmSegmentBaseLoader */

/*! ../XlinkLoader */

/*! ../constants/ConformanceViolationConstants */

/*! ../constants/Constants */

/*! ../constants/DashConstants */

/*! ../constants/MetricsConstants */

/*! ../controllers/BlacklistController */

/*! ../controllers/ProtectionKeyController */

/*! ../core/Debug */

/*! ../core/EventBus */

/*! ../core/FactoryMaker */

/*! ../core/Settings */

/*! ../core/Utils */

/*! ../core/Version */

/*! ../core/errors/Errors */

/*! ../core/events/Events */

/*! ../core/events/EventsBase */

/*! ../dash/DashAdapter */

/*! ../dash/DashHandler */

/*! ../dash/DashMetrics */

/*! ../dash/constants/DashConstants */

/*! ../dash/controllers/ContentSteeringController */

/*! ../dash/controllers/RepresentationController */

/*! ../dash/controllers/SegmentBaseController */

/*! ../dash/controllers/SegmentsController */

/*! ../dash/controllers/ServiceDescriptionController */

/*! ../dash/parser/DashParser */

/*! ../dash/utils/TimelineConverter */

/*! ../errors/ProtectionErrors */

/*! ../metrics/MetricsHandlerFactory */

/*! ../metrics/MetricsReportingEvents */

/*! ../models/BaseURLTreeModel */

/*! ../models/CmcdModel */

/*! ../models/CustomParametersModel */

/*! ../models/DashManifestModel */

/*! ../models/FragmentModel */

/*! ../models/LowLatencyThroughputModel */

/*! ../net/XHRLoader */

/*! ../reporting/ReportingFactory */

/*! ../rules/DroppedFramesHistory */

/*! ../rules/RulesContext */

/*! ../rules/SwitchRequest */

/*! ../rules/SwitchRequestHistory */

/*! ../rules/ThroughputHistory */

/*! ../rules/abr/ABRRulesCollection */

/*! ../streaming/MediaPlayerEvents */

/*! ../streaming/constants/Constants */

/*! ../streaming/constants/MetricsConstants */

/*! ../streaming/models/MetricsModel */

/*! ../streaming/net/URLLoader */

/*! ../streaming/utils/EBMLParser */

/*! ../streaming/utils/URLUtils */

/*! ../streaming/vo/DashJSError */

/*! ../streaming/vo/FragmentRequest */

/*! ../streaming/vo/metrics/HTTPRequest */

/*! ../streaming/vo/metrics/PlayList */

/*! ../thumbnail/ThumbnailTracks */

/*! ../utils/BaseURLSelector */

/*! ../utils/BoxParser */

/*! ../utils/CustomTimeRanges */

/*! ../utils/InitCache */

/*! ../utils/ListSegmentsGetter */

/*! ../utils/ManifestParsing */

/*! ../utils/ObjectUtils */

/*! ../utils/RequestModifier */

/*! ../utils/SegmentBaseGetter */

/*! ../utils/SegmentsUtils */

/*! ../utils/SupervisorTools */

/*! ../utils/TTMLParser */

/*! ../utils/TemplateSegmentsGetter */

/*! ../utils/TimelineSegmentsGetter */

/*! ../utils/URLUtils */

/*! ../utils/VTTParser */

/*! ../utils/VttCustomRenderingParser */

/*! ../vo/AdaptationSet */

/*! ../vo/BaseURL */

/*! ../vo/BitrateInfo */

/*! ../vo/ClearKeyKeySet */

/*! ../vo/ContentSteering */

/*! ../vo/ContentSteeringRequest */

/*! ../vo/ContentSteeringResponse */

/*! ../vo/DVBErrors */

/*! ../vo/DashJSError */

/*! ../vo/DataChunk */

/*! ../vo/Event */

/*! ../vo/EventStream */

/*! ../vo/FragmentRequest */

/*! ../vo/IsoBox */

/*! ../vo/IsoBoxSearchInfo */

/*! ../vo/KeyMessage */

/*! ../vo/KeyPair */

/*! ../vo/KeySystemAccess */

/*! ../vo/KeySystemConfiguration */

/*! ../vo/LicenseRequest */

/*! ../vo/LicenseResponse */

/*! ../vo/MediaCapability */

/*! ../vo/Metrics */

/*! ../vo/MetricsList */

/*! ../vo/Mpd */

/*! ../vo/NeedKey */

/*! ../vo/PatchOperation */

/*! ../vo/Period */

/*! ../vo/ProducerReferenceTime */

/*! ../vo/Range */

/*! ../vo/Reporting */

/*! ../vo/Representation */

/*! ../vo/SimpleXPath */

/*! ../vo/TextTrackInfo */

/*! ../vo/Thumbnail */

/*! ../vo/ThumbnailTrackInfo */

/*! ../vo/URIFragmentData */

/*! ../vo/UTCTiming */

/*! ../vo/metrics/BufferLevel */

/*! ../vo/metrics/BufferState */

/*! ../vo/metrics/DVRInfo */

/*! ../vo/metrics/DroppedFrames */

/*! ../vo/metrics/HTTPRequest */

/*! ../vo/metrics/ManifestUpdate */

/*! ../vo/metrics/PlayList */

/*! ../vo/metrics/RepresentationSwitch */

/*! ../vo/metrics/RequestsQueue */

/*! ../vo/metrics/SchedulingInfo */

/*! ./ */

/*! ./../../buffer/index.js */

/*! ./../../core/EventBus */

/*! ./../../core/errors/Errors */

/*! ./../../core/events/Events */

/*! ./../../dash/vo/MediaInfo */

/*! ./../../process/browser.js */

/*! ./../../timers-browserify/main.js */

/*! ./../../webpack/buildin/global.js */

/*! ./../CommonEncryption */

/*! ./../core/Debug */

/*! ./../core/EventBus */

/*! ./../core/errors/Errors */

/*! ./../core/events/Events */

/*! ./../drm/KeySystemClearKey */

/*! ./../drm/KeySystemPlayReady */

/*! ./../drm/KeySystemW3CClearKey */

/*! ./../drm/KeySystemWidevine */

/*! ./../process/browser.js */

/*! ./../servers/ClearKey */

/*! ./../servers/DRMToday */

/*! ./../servers/PlayReady */

/*! ./../servers/Widevine */

/*! ./../vo/DashJSError */

/*! ./../vo/Segment */

/*! ./../webpack/buildin/global.js */

/*! ./AbandonRequestsRule */

/*! ./BaseMatcher */

/*! ./BolaRule */

/*! ./CommonProperty */

/*! ./CoreEvents */

/*! ./DefaultURLUtils */

/*! ./DroppedFramesRule */

/*! ./EmbeddedTextHtmlRender */

/*! ./ErrorsBase */

/*! ./EventBus */

/*! ./EventController */

/*! ./EventsBase */

/*! ./FactoryMaker */

/*! ./FetchLoader */

/*! ./FragmentRequest */

/*! ./InsufficientBufferRule */

/*! ./IsoFile */

/*! ./L2ARule.js */

/*! ./LearningAbrController */

/*! ./LoLpQoEEvaluator */

/*! ./LoLpWeightSelector */

/*! ./ManifestLoader */

/*! ./ManifestUpdater */

/*! ./MapNode */

/*! ./MediaPlayer */

/*! ./MediaPlayerEvents */

/*! ./MediaSourceController */

/*! ./MetricsController */

/*! ./MetricsHandlersController */

/*! ./MetricsReportingEvents */

/*! ./ProtectionEvents */

/*! ./QoeInfo */

/*! ./RangeController */

/*! ./ReportingController */

/*! ./SegmentsUtils */

/*! ./StreamProcessor */

/*! ./SwitchHistoryRule */

/*! ./SwitchRequest */

/*! ./TextSourceBuffer */

/*! ./TextTracks */

/*! ./ThroughputRule */

/*! ./ThumbnailTracks */

/*! ./TimeSyncController */

/*! ./Utils.js */

/*! ./XHRLoader */

/*! ./_stream_duplex */

/*! ./_stream_readable */

/*! ./_stream_transform */

/*! ./_stream_writable */

/*! ./baseUrlResolution/BasicSelector */

/*! ./baseUrlResolution/ContentSteeringSelector */

/*! ./baseUrlResolution/DVBSelector */

/*! ./constants/Constants */

/*! ./constants/DashConstants */

/*! ./constants/MetricsConstants */

/*! ./controllers/AbrController */

/*! ./controllers/BaseURLController */

/*! ./controllers/BlacklistController */

/*! ./controllers/BufferController */

/*! ./controllers/CatchupController */

/*! ./controllers/FragmentController */

/*! ./controllers/GapController */

/*! ./controllers/MediaController */

/*! ./controllers/MetricsCollectionController */

/*! ./controllers/PlaybackController */

/*! ./controllers/ProtectionController */

/*! ./controllers/ProtectionKeyController */

/*! ./controllers/ScheduleController */

/*! ./controllers/StreamController */

/*! ./controllers/XlinkController */

/*! ./defaults.json */

/*! ./doc */

/*! ./errors/ProtectionErrors */

/*! ./events/Events */

/*! ./fields.json */

/*! ./handlers/BufferLevelHandler */

/*! ./handlers/DVBErrorsHandler */

/*! ./handlers/GenericMetricHandler */

/*! ./handlers/HttpListHandler */

/*! ./html */

/*! ./index_mediaplayerOnly */

/*! ./internal/streams/BufferList */

/*! ./internal/streams/destroy */

/*! ./internal/streams/stream */

/*! ./isd */

/*! ./lib */

/*! ./lib/_stream_duplex.js */

/*! ./lib/_stream_passthrough.js */

/*! ./lib/_stream_readable.js */

/*! ./lib/_stream_transform.js */

/*! ./lib/_stream_writable.js */

/*! ./lib/parse */

/*! ./lib/stringify */

/*! ./lolp/LoLpRule.js */

/*! ./many.json */

/*! ./maps/RepresentationBaseValuesMap */

/*! ./maps/SegmentValuesMap */

/*! ./matchers/DateTimeMatcher */

/*! ./matchers/DurationMatcher */

/*! ./matchers/LangMatcher */

/*! ./matchers/NumericMatcher */

/*! ./matchers/StringMatcher */

/*! ./matches.json */

/*! ./metrics/MetricsHandlerFactory */

/*! ./models/CmcdModel */

/*! ./models/CustomParametersModel */

/*! ./models/DashManifestModel */

/*! ./models/FragmentModel */

/*! ./models/ManifestModel */

/*! ./models/MediaPlayerModel */

/*! ./models/PatchManifestModel */

/*! ./models/ProtectionModel_01b */

/*! ./models/ProtectionModel_21Jan2015 */

/*! ./models/ProtectionModel_3Feb2014 */

/*! ./models/URIFragmentModel */

/*! ./models/VideoModel */

/*! ./names */

/*! ./net/SchemeLoaderFactory */

/*! ./net/URLLoader */

/*! ./node_modules/webpack/buildin/global.js */

/*! ./normalize.json */

/*! ./objectiron */

/*! ./readable */

/*! ./regular.json */

/*! ./reporters/DVBReporting */

/*! ./reporting/ReportingFactory */

/*! ./src/core/Debug */

/*! ./src/core/FactoryMaker */

/*! ./src/core/Version */

/*! ./src/streaming/MediaPlayer */

/*! ./src/streaming/MediaPlayerFactory */

/*! ./src/streaming/metrics/MetricsReporting */

/*! ./src/streaming/protection/Protection */

/*! ./src/streaming/utils/Capabilities */

/*! ./styles */

/*! ./text/NotFragmentedTextBufferController */

/*! ./text/TextController */

/*! ./thumbnail/ThumbnailController */

/*! ./utils */

/*! ./utils/BoxParser */

/*! ./utils/Capabilities */

/*! ./utils/CapabilitiesFilter */

/*! ./utils/DOMStorage */

/*! ./utils/DVBErrorsTranslator */

/*! ./utils/ErrorHandler */

/*! ./utils/RequestModifier */

/*! ./utils/Round10 */

/*! ./utils/SegmentsUtils */

/*! ./utils/SupervisorTools */

/*! ./utils/URLUtils */

/*! ./vo/DashJSError */

/*! ./vo/Event */

/*! ./vo/HeadRequest */

/*! ./vo/ManifestInfo */

/*! ./vo/MediaInfo */

/*! ./vo/RepresentationInfo */

/*! ./vo/Segment */

/*! ./vo/StreamInfo */

/*! ./vo/TextRequest */

/*! ./vo/metrics/HTTPRequest */

/*! ./vo/metrics/PlayList */

/*! base64-js */

/*! bcp-47 */

/*! bcp-47-match */

/*! bcp-47-normalize */

/*! buffer */

/*! codem-isoboxer */

/*! codem-isoboxer v0.3.6 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */

/*! core-util-is */

/*! es6-promise/auto */

/*! events */

/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, default */

/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, default */

/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, default */

/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */

/*! exports provided: HTTPRequest, HTTPRequestTrace */

/*! exports provided: ManifestUpdate, ManifestUpdateStreamInfo, ManifestUpdateRepresentationInfo */

/*! exports provided: PlayList, PlayListTrace */

/*! exports provided: THUMBNAILS_SCHEME_ID_URIS, default */

/*! exports provided: checkParameterType, checkInteger, checkRange, checkIsVideoOrAudioType */

/*! exports provided: default */

/*! exports provided: default, MediaPlayer, FactoryMaker, Debug */

/*! exports provided: default, MediaPlayer, Protection, MetricsReporting, MediaPlayerFactory, Debug, supportsMediaSource */

/*! exports provided: en-gb-oed, i-ami, i-bnn, i-default, i-enochian, i-hak, i-klingon, i-lux, i-mingo, i-navajo, i-pwn, i-tao, i-tay, i-tsu, sgn-be-fr, sgn-be-nl, sgn-ch-de, art-lojban, cel-gaulish, no-bok, no-nyn, zh-guoyu, zh-hakka, zh-min, zh-min-nan, zh-xiang, default */

/*! exports provided: getVersionString */

/*! exports provided: modifyRequest, default */

/*! exports provided: region, default */

/*! exports provided: supportsMediaSource, default */

/*! exports provided: unescapeDollarsInTemplate, replaceIDForTemplate, replaceTokenForTemplate, getIndexBasedSegment, getTimeBasedSegment */

/*! fast-deep-equal */

/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */

/*! ieee754 */

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

/*! imsc */

/*! inherits */

/*! is-alphabetical */

/*! is-alphanumerical */

/*! is-decimal */

/*! isarray */

/*! no static exports found */

/*! path-browserify */

/*! process-nextick-args */

/*! readable-stream/duplex.js */

/*! readable-stream/passthrough.js */

/*! readable-stream/readable.js */

/*! readable-stream/transform.js */

/*! readable-stream/writable.js */

/*! safe-buffer */

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

/*! sax */

/*! setimmediate */

/*! stream */

/*! string_decoder */

/*! string_decoder/ */

/*! ua-parser-js */

/*! util */

/*! util-deprecate */

/*!******************!*\
  !*** ./index.js ***!
  \******************/

/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/

/*!***************************!*\
  !*** ./src/core/Debug.js ***!
  \***************************/

/*!***************************!*\
  !*** ./src/core/Utils.js ***!
  \***************************/

/*!****************************!*\
  !*** ./src/dash/vo/Mpd.js ***!
  \****************************/

/*!*****************************!*\
  !*** ./externals/base64.js ***!
  \*****************************/

/*!*****************************!*\
  !*** ./src/core/Version.js ***!
  \*****************************/

/*!******************************!*\
  !*** ./src/core/EventBus.js ***!
  \******************************/

/*!******************************!*\
  !*** ./src/core/Settings.js ***!
  \******************************/

/*!******************************!*\
  !*** ./src/dash/vo/Event.js ***!
  \******************************/

/*!*******************************!*\
  !*** ./externals/xml2json.js ***!
  \*******************************/

/*!*******************************!*\
  !*** ./src/dash/vo/Period.js ***!
  \*******************************/

/*!********************************!*\
  !*** ./src/dash/vo/BaseURL.js ***!
  \********************************/

/*!********************************!*\
  !*** ./src/dash/vo/Segment.js ***!
  \********************************/

/*!*********************************!*\
  !*** ./src/dash/DashAdapter.js ***!
  \*********************************/

/*!*********************************!*\
  !*** ./src/dash/DashHandler.js ***!
  \*********************************/

/*!*********************************!*\
  !*** ./src/dash/DashMetrics.js ***!
  \*********************************/

/*!*********************************!*\
  !*** ./src/streaming/Stream.js ***!
  \*********************************/

/*!**********************************!*\
  !*** ./index_mediaplayerOnly.js ***!
  \**********************************/

/*!**********************************!*\
  !*** ./src/core/FactoryMaker.js ***!
  \**********************************/

/*!**********************************!*\
  !*** ./src/dash/vo/MediaInfo.js ***!
  \**********************************/

/*!**********************************!*\
  !*** ./src/dash/vo/UTCTiming.js ***!
  \**********************************/

/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/

/*!***********************************!*\
  !*** ./src/core/errors/Errors.js ***!
  \***********************************/

/*!***********************************!*\
  !*** ./src/core/events/Events.js ***!
  \***********************************/

/*!***********************************!*\
  !*** ./src/dash/utils/Round10.js ***!
  \***********************************/

/*!***********************************!*\
  !*** ./src/dash/vo/StreamInfo.js ***!
  \***********************************/

/*!************************************!*\
  !*** ./externals/cea608-parser.js ***!
  \************************************/

/*!************************************!*\
  !*** ./src/dash/vo/EventStream.js ***!
  \************************************/

/*!************************************!*\
  !*** ./src/dash/vo/SimpleXPath.js ***!
  \************************************/

/*!************************************!*\
  !*** ./src/streaming/vo/IsoBox.js ***!
  \************************************/

/*!*************************************!*\
  !*** ./node_modules/sax/lib/sax.js ***!
  \*************************************/

/*!*************************************!*\
  !*** ./src/dash/vo/ManifestInfo.js ***!
  \*************************************/

/*!**************************************!*\
  !*** ./node_modules/bcp-47/index.js ***!
  \**************************************/

/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/

/*!**************************************!*\
  !*** ./src/dash/vo/AdaptationSet.js ***!
  \**************************************/

/*!**************************************!*\
  !*** ./src/streaming/MediaPlayer.js ***!
  \**************************************/

/*!**************************************!*\
  !*** ./src/streaming/XlinkLoader.js ***!
  \**************************************/

/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/core/errors/ErrorsBase.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/core/events/CoreEvents.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/core/events/EventsBase.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/dash/SegmentBaseLoader.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/dash/parser/DashParser.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/dash/parser/objectiron.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/dash/vo/PatchOperation.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/dash/vo/Representation.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/streaming/vo/DataChunk.js ***!
  \***************************************/

/*!***************************************!*\
  !*** ./src/streaming/vo/Thumbnail.js ***!
  \***************************************/

/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/

/*!****************************************!*\
  !*** ./src/dash/vo/ContentSteering.js ***!
  \****************************************/

/*!****************************************!*\
  !*** ./src/streaming/net/URLLoader.js ***!
  \****************************************/

/*!****************************************!*\
  !*** ./src/streaming/net/XHRLoader.js ***!
  \****************************************/

/*!****************************************!*\
  !*** ./src/streaming/utils/IsoFile.js ***!
  \****************************************/

/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/dash/parser/maps/MapNode.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/dash/utils/SegmentsUtils.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/FragmentLoader.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/ManifestLoader.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/net/HTTPLoader.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/utils/URLUtils.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/vo/BitrateInfo.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/vo/DashJSError.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/vo/HeadRequest.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/vo/MetricsList.js ***!
  \*****************************************/

/*!*****************************************!*\
  !*** ./src/streaming/vo/TextRequest.js ***!
  \*****************************************/

/*!******************************************!*\
  !*** ./node_modules/bcp-47/lib/parse.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./node_modules/es6-promise/auto.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/ManifestUpdater.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/StreamProcessor.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/net/FetchLoader.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/text/TextTracks.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/utils/BoxParser.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/utils/InitCache.js ***!
  \******************************************/

/*!******************************************!*\
  !*** ./src/streaming/utils/VTTParser.js ***!
  \******************************************/

/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/dash/WebmSegmentBaseLoader.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/dash/vo/RepresentationInfo.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/SourceBufferSink.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/metrics/vo/Range.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/models/CmcdModel.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/utils/DOMStorage.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/utils/EBMLParser.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/utils/TTMLParser.js ***!
  \*******************************************/

/*!*******************************************!*\
  !*** ./src/streaming/vo/TextTrackInfo.js ***!
  \*******************************************/

/*!********************************************!*\
  !*** ./node_modules/bcp-47-match/index.js ***!
  \********************************************/

/*!********************************************!*\
  !*** ./src/streaming/MediaPlayerEvents.js ***!
  \********************************************/

/*!********************************************!*\
  !*** ./src/streaming/metrics/utils/RNG.js ***!
  \********************************************/

/*!********************************************!*\
  !*** ./src/streaming/models/VideoModel.js ***!
  \********************************************/

/*!********************************************!*\
  !*** ./src/streaming/rules/abr/L2ARule.js ***!
  \********************************************/

/*!********************************************!*\
  !*** ./src/streaming/utils/ObjectUtils.js ***!
  \********************************************/

/*!*********************************************!*\
  !*** ./src/dash/constants/DashConstants.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/dash/utils/SegmentBaseGetter.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/dash/utils/TimelineConverter.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/MediaPlayerFactory.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/metrics/vo/Metrics.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/rules/RulesContext.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/rules/abr/BolaRule.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/utils/Capabilities.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/utils/ErrorHandler.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/vo/FragmentRequest.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/vo/URIFragmentData.js ***!
  \*********************************************/

/*!*********************************************!*\
  !*** ./src/streaming/vo/metrics/DVRInfo.js ***!
  \*********************************************/

/*!**********************************************!*\
  !*** ./node_modules/bcp-47/lib/regular.json ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./node_modules/bcp-47/lib/stringify.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./node_modules/imsc/src/main/js/doc.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./node_modules/imsc/src/main/js/isd.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/dash/models/DashManifestModel.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/dash/utils/ListSegmentsGetter.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/dash/vo/ProducerReferenceTime.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/streaming/constants/Constants.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/streaming/models/MetricsModel.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/streaming/rules/SwitchRequest.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/streaming/text/TextController.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/streaming/vo/IsoBoxSearchInfo.js ***!
  \**********************************************/

/*!**********************************************!*\
  !*** ./src/streaming/vo/metrics/PlayList.js ***!
  \**********************************************/

/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./node_modules/imsc/src/main/js/html.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./node_modules/imsc/src/main/js/main.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./src/dash/models/PatchManifestModel.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./src/dash/vo/ContentSteeringRequest.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./src/streaming/metrics/vo/DVBErrors.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./src/streaming/metrics/vo/Reporting.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./src/streaming/models/FragmentModel.js ***!
  \***********************************************/

/*!***********************************************!*\
  !*** ./src/streaming/models/ManifestModel.js ***!
  \***********************************************/

/*!************************************************!*\
  !*** ./node_modules/bcp-47-normalize/index.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./node_modules/bcp-47/lib/normalize.json ***!
  \************************************************/

/*!************************************************!*\
  !*** ./node_modules/imsc/src/main/js/names.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./node_modules/imsc/src/main/js/utils.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/dash/parser/maps/CommonProperty.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/dash/vo/ContentSteeringResponse.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/protection/Protection.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/protection/vo/KeyPair.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/protection/vo/NeedKey.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/text/TextSourceBuffer.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/utils/BaseURLSelector.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/utils/DefaultURLUtils.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/utils/RequestModifier.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/utils/SupervisorTools.js ***!
  \************************************************/

/*!************************************************!*\
  !*** ./src/streaming/vo/ThumbnailTrackInfo.js ***!
  \************************************************/

/*!*************************************************!*\
  !*** ./node_modules/imsc/src/main/js/styles.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./node_modules/stream-browserify/index.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/dash/parser/matchers/BaseMatcher.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/dash/parser/matchers/LangMatcher.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/streaming/rules/abr/lolp/QoeInfo.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/streaming/utils/CustomTimeRanges.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/streaming/vo/metrics/BufferLevel.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/streaming/vo/metrics/BufferState.js ***!
  \*************************************************/

/*!*************************************************!*\
  !*** ./src/streaming/vo/metrics/HTTPRequest.js ***!
  \*************************************************/

/*!**************************************************!*\
  !*** ./src/dash/parser/maps/SegmentValuesMap.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/dash/utils/TemplateSegmentsGetter.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/dash/utils/TimelineSegmentsGetter.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/streaming/models/BaseURLTreeModel.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/streaming/models/MediaPlayerModel.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/streaming/models/URIFragmentModel.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/streaming/net/SchemeLoaderFactory.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/streaming/rules/ThroughputHistory.js ***!
  \**************************************************/

/*!**************************************************!*\
  !*** ./src/streaming/rules/abr/lolp/LoLpRule.js ***!
  \**************************************************/

/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./node_modules/readable-stream/transform.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/dash/parser/matchers/StringMatcher.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/streaming/metrics/MetricsReporting.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/streaming/protection/vo/KeyMessage.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/streaming/rules/abr/ThroughputRule.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/streaming/utils/CapabilitiesFilter.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/streaming/vo/metrics/DroppedFrames.js ***!
  \***************************************************/

/*!***************************************************!*\
  !*** ./src/streaming/vo/metrics/RequestsQueue.js ***!
  \***************************************************/

/*!****************************************************!*\
  !*** ./node_modules/bcp-47-normalize/lib/index.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./node_modules/process-nextick-args/index.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/dash/controllers/SegmentsController.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/dash/parser/matchers/NumericMatcher.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/streaming/controllers/AbrController.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/streaming/controllers/GapController.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/streaming/thumbnail/ThumbnailTracks.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/streaming/vo/metrics/ManifestUpdate.js ***!
  \****************************************************/

/*!****************************************************!*\
  !*** ./src/streaming/vo/metrics/SchedulingInfo.js ***!
  \****************************************************/

/*!*****************************************************!*\
  !*** ./node_modules/bcp-47-normalize/lib/many.json ***!
  \*****************************************************/

/*!*****************************************************!*\
  !*** ./node_modules/readable-stream/passthrough.js ***!
  \*****************************************************/

/*!*****************************************************!*\
  !*** ./src/dash/parser/matchers/DateTimeMatcher.js ***!
  \*****************************************************/

/*!*****************************************************!*\
  !*** ./src/dash/parser/matchers/DurationMatcher.js ***!
  \*****************************************************/

/*!*****************************************************!*\
  !*** ./src/streaming/constants/MetricsConstants.js ***!
  \*****************************************************/

/*!*****************************************************!*\
  !*** ./src/streaming/rules/DroppedFramesHistory.js ***!
  \*****************************************************/

/*!*****************************************************!*\
  !*** ./src/streaming/rules/SwitchRequestHistory.js ***!
  \*****************************************************/

/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/controllers/EventController.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/controllers/MediaController.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/controllers/XlinkController.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/protection/CommonEncryption.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/protection/ProtectionEvents.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/protection/servers/ClearKey.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/protection/servers/DRMToday.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/protection/servers/Widevine.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/rules/abr/DroppedFramesRule.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/rules/abr/SwitchHistoryRule.js ***!
  \******************************************************/

/*!******************************************************!*\
  !*** ./src/streaming/text/EmbeddedTextHtmlRender.js ***!
  \******************************************************/

/*!*******************************************************!*\
  !*** ./node_modules/bcp-47-normalize/lib/fields.json ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./node_modules/codem-isoboxer/dist/iso_boxer.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/dash/controllers/SegmentBaseController.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/controllers/BufferController.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/controllers/StreamController.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/metrics/utils/HandlerHelpers.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/models/CustomParametersModel.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/protection/servers/PlayReady.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/protection/vo/ClearKeyKeySet.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/protection/vo/LicenseRequest.js ***!
  \*******************************************************/

/*!*******************************************************!*\
  !*** ./src/streaming/rules/abr/ABRRulesCollection.js ***!
  \*******************************************************/

/*!********************************************************!*\
  !*** ./node_modules/bcp-47-normalize/lib/matches.json ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./node_modules/readable-stream/duplex-browser.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/constants/ProtectionConstants.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/controllers/BaseURLController.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/controllers/CatchupController.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/metrics/utils/ManifestParsing.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/protection/vo/KeySystemAccess.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/protection/vo/LicenseResponse.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/protection/vo/MediaCapability.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/rules/abr/AbandonRequestsRule.js ***!
  \********************************************************/

/*!********************************************************!*\
  !*** ./src/streaming/thumbnail/ThumbnailController.js ***!
  \********************************************************/

/*!*********************************************************!*\
  !*** ./node_modules/bcp-47-normalize/lib/defaults.json ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/controllers/FragmentController.js ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/controllers/PlaybackController.js ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/controllers/ScheduleController.js ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/controllers/TimeSyncController.js ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/metrics/MetricsReportingEvents.js ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/metrics/utils/MetricSerialiser.js ***!
  \*********************************************************/

/*!*********************************************************!*\
  !*** ./src/streaming/utils/VttCustomRenderingParser.js ***!
  \*********************************************************/

/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/readable-browser.js ***!
  \**********************************************************/

/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/writable-browser.js ***!
  \**********************************************************/

/*!**********************************************************!*\
  !*** ./src/dash/controllers/RepresentationController.js ***!
  \**********************************************************/

/*!**********************************************************!*\
  !*** ./src/streaming/controllers/BlacklistController.js ***!
  \**********************************************************/

/*!**********************************************************!*\
  !*** ./src/streaming/rules/abr/lolp/LoLpQoEEvaluator.js ***!
  \**********************************************************/

/*!**********************************************************!*\
  !*** ./src/streaming/vo/metrics/RepresentationSwitch.js ***!
  \**********************************************************/

/*!***********************************************************!*\
  !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
  \***********************************************************/

/*!***********************************************************!*\
  !*** ./src/dash/controllers/ContentSteeringController.js ***!
  \***********************************************************/

/*!***********************************************************!*\
  !*** ./src/streaming/models/LowLatencyThroughputModel.js ***!
  \***********************************************************/

/*!***********************************************************!*\
  !*** ./src/streaming/protection/drm/KeySystemClearKey.js ***!
  \***********************************************************/

/*!***********************************************************!*\
  !*** ./src/streaming/protection/drm/KeySystemWidevine.js ***!
  \***********************************************************/

/*!***********************************************************!*\
  !*** ./src/streaming/rules/abr/InsufficientBufferRule.js ***!
  \***********************************************************/

/*!************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_duplex.js ***!
  \************************************************************/

/*!************************************************************!*\
  !*** ./src/streaming/controllers/MediaSourceController.js ***!
  \************************************************************/

/*!************************************************************!*\
  !*** ./src/streaming/metrics/utils/DVBErrorsTranslator.js ***!
  \************************************************************/

/*!************************************************************!*\
  !*** ./src/streaming/protection/drm/KeySystemPlayReady.js ***!
  \************************************************************/

/*!************************************************************!*\
  !*** ./src/streaming/rules/abr/lolp/LoLpWeightSelector.js ***!
  \************************************************************/

/*!*************************************************************!*\
  !*** ./src/dash/parser/maps/RepresentationBaseValuesMap.js ***!
  \*************************************************************/

/*!*************************************************************!*\
  !*** ./src/streaming/metrics/reporting/ReportingFactory.js ***!
  \*************************************************************/

/*!*************************************************************!*\
  !*** ./src/streaming/protection/errors/ProtectionErrors.js ***!
  \*************************************************************/

/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_readable.js ***!
  \**************************************************************/

/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_writable.js ***!
  \**************************************************************/

/*!**************************************************************!*\
  !*** ./src/dash/controllers/ServiceDescriptionController.js ***!
  \**************************************************************/

/*!**************************************************************!*\
  !*** ./src/streaming/metrics/controllers/RangeController.js ***!
  \**************************************************************/

/*!**************************************************************!*\
  !*** ./src/streaming/protection/drm/KeySystemW3CClearKey.js ***!
  \**************************************************************/

/*!**************************************************************!*\
  !*** ./src/streaming/utils/baseUrlResolution/DVBSelector.js ***!
  \**************************************************************/

/*!***************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_transform.js ***!
  \***************************************************************/

/*!***************************************************************!*\
  !*** ./src/streaming/protection/vo/KeySystemConfiguration.js ***!
  \***************************************************************/

/*!***************************************************************!*\
  !*** ./src/streaming/rules/abr/lolp/LearningAbrController.js ***!
  \***************************************************************/

/*!****************************************************************!*\
  !*** ./src/streaming/metrics/controllers/MetricsController.js ***!
  \****************************************************************/

/*!****************************************************************!*\
  !*** ./src/streaming/metrics/metrics/MetricsHandlerFactory.js ***!
  \****************************************************************/

/*!****************************************************************!*\
  !*** ./src/streaming/protection/models/ProtectionModel_01b.js ***!
  \****************************************************************/

/*!****************************************************************!*\
  !*** ./src/streaming/utils/baseUrlResolution/BasicSelector.js ***!
  \****************************************************************/

/*!*****************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*****************************************************************/

/*!*****************************************************************!*\
  !*** ./src/streaming/text/NotFragmentedTextBufferController.js ***!
  \*****************************************************************/

/*!******************************************************************!*\
  !*** ./src/streaming/constants/ConformanceViolationConstants.js ***!
  \******************************************************************/

/*!******************************************************************!*\
  !*** ./src/streaming/metrics/controllers/ReportingController.js ***!
  \******************************************************************/

/*!*******************************************************************!*\
  !*** ./src/streaming/metrics/metrics/handlers/HttpListHandler.js ***!
  \*******************************************************************/

/*!*******************************************************************!*\
  !*** ./src/streaming/metrics/reporting/reporters/DVBReporting.js ***!
  \*******************************************************************/

/*!********************************************************************!*\
  !*** ./src/streaming/metrics/metrics/handlers/DVBErrorsHandler.js ***!
  \********************************************************************/

/*!*********************************************************************!*\
  !*** ./src/streaming/protection/models/ProtectionModel_3Feb2014.js ***!
  \*********************************************************************/

/*!**********************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \**********************************************************************/

/*!**********************************************************************!*\
  !*** ./src/streaming/metrics/metrics/handlers/BufferLevelHandler.js ***!
  \**********************************************************************/

/*!**********************************************************************!*\
  !*** ./src/streaming/protection/controllers/ProtectionController.js ***!
  \**********************************************************************/

/*!**********************************************************************!*\
  !*** ./src/streaming/protection/models/ProtectionModel_21Jan2015.js ***!
  \**********************************************************************/

/*!************************************************************************!*\
  !*** ./node_modules/readable-stream/node_modules/safe-buffer/index.js ***!
  \************************************************************************/

/*!************************************************************************!*\
  !*** ./src/streaming/metrics/controllers/MetricsHandlersController.js ***!
  \************************************************************************/

/*!************************************************************************!*\
  !*** ./src/streaming/metrics/metrics/handlers/GenericMetricHandler.js ***!
  \************************************************************************/

/*!*************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
  \*************************************************************************/

/*!*************************************************************************!*\
  !*** ./src/streaming/protection/controllers/ProtectionKeyController.js ***!
  \*************************************************************************/

/*!**************************************************************************!*\
  !*** ./src/streaming/metrics/controllers/MetricsCollectionController.js ***!
  \**************************************************************************/

/*!**************************************************************************!*\
  !*** ./src/streaming/utils/baseUrlResolution/ContentSteeringSelector.js ***!
  \**************************************************************************/

/*!*****************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*****************************************************************************/
