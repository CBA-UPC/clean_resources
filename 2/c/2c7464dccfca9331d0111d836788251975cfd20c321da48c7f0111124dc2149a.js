"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6658],{10573:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ue});i(86277);var n=i(50959),a=i(85648),l=(i(70054),i(46758),i(27082),i(54346),i(76464),i(86360),i(9111),i(12960),i(96015)),s=(i(15922),i(54960),i(10783),i(32387),i(79774),i(26177),i(21453),i(44526));i(64278);s.hO.FOLLOWED_ARTISTS,s.hO.BANNED_ARTISTS,s.hO.BAN,s.hO.COLLECTION,s.hO.ENHANCED,s.hO.IGNOREINRECS,s.hO.LISTENLATER,s.hO.SHOW,s.hO.PINNED_YOUR_LIBRARY;i(40270);var o=i(77574);o.z;var r=i(70875);i(12898);r.t;var c=i(87732);c.Z;i(77655),i(16856),i(44971),i(53321),i(11317),i(42929),i(82857);i(64133);var d=i(44574);d.k;i(75930),i(92027),i(65484),i(35174),i(96241),i(97251);i(89746),i(45205),i(70526);i(8413);const u=JSON.parse('{"type":"record","name":"EndVideo","namespace":"com.spotify.Message","doc":"Information about a video played by the client","fields":[{"name":"message_name","type":"string"},{"name":"message_version","type":"int"},{"name":"sequence_number","type":["null","long"],"doc":"Sequence number of message","default":null},{"name":"sequence_id","type":["null","string"],"doc":"Sequence ID the sequence number belongs to. Combined from cache-id and device-id.","default":null},{"name":"video_session_id","type":["null","string"],"doc":"ID of the video playback session","default":null},{"name":"file_id","type":["null","bytes"],"doc":"ID of the video manifest","default":null},{"name":"playback_id","type":["null","bytes"],"doc":"ID of the unique playback","default":null},{"name":"feature_identifier","type":["null","string"],"doc":"The identifier of the feature that started playback","default":null},{"name":"feature_version","type":["null","string"],"doc":"The version of the feature that started playback","default":null},{"name":"view_uri","type":["null","string"],"doc":"The URI of the view that started playback","default":null},{"name":"reason_start","type":["null","string"],"doc":"Why the video was started","default":null},{"name":"reason_end","type":["null","string"],"doc":"Why the video ended (trackdone, trackerror, etc.)","default":null},{"name":"ms_played","type":["null","long"],"doc":"Total milliseconds played, including overlapping time ranges","default":null},{"name":"ms_nominal_played","type":["null","long"],"doc":"Milliseconds played (amount of time that media would have been outputted, if played in 1x speed, nominal time)","default":null},{"name":"ms_total_est","type":["null","long"],"doc":"Duration of the video in milliseconds (constant if VOD, variable if live)","default":null},{"name":"live","type":["null","boolean"],"doc":"Is the video being streamed live?","default":null},{"name":"ms_manifest_latency","type":["null","long"],"doc":"The time it took to fetch the manifest in milliseconds (may be 0 if cached or prefetched)","default":null},{"name":"n_seekback","type":["null","long"],"doc":"Number of times user seeked backwards","default":null},{"name":"ms_seekback","type":["null","long"],"doc":"The total amount of milliseconds jumped when performing seekbacks throughout playback.","default":null},{"name":"n_seekfwd","type":["null","long"],"doc":"Number of times user seeked forwards","default":null},{"name":"ms_seekfwd","type":["null","long"],"doc":"The total amount of milliseconds jumped when performing seek forwards throughout playback.","default":null},{"name":"ms_latency","type":["null","long"],"doc":"Time from initiating video playback to first frame ready to play in milliseconds","default":null},{"name":"ui_latency","type":["null","long"],"doc":"Time from UI interaction to first frame ready to play in milliseconds (may be -1 if not user-initiated)","default":null},{"name":"start_offset_ms","type":["null","long"],"doc":"The offset at which the video started playing in milliseconds","default":null},{"name":"ms_initial_buffering","type":["null","long"],"doc":"Time between first segment load and first frame ready to play in milliseconds","default":null},{"name":"ms_seek_rebuffering","type":["null","long"],"doc":"Total time spent re-buffering from a seek in milliseconds","default":null},{"name":"ms_stalled","type":["null","long"],"doc":"Total time where playback stalled in milliseconds (excluding initial buffering and seek rebuffering)","default":null},{"name":"max_ms_seek_rebuffering","type":["null","long"],"doc":"Maximum time spent re-buffering from a single seek","default":null},{"name":"max_ms_stalled","type":["null","long"],"doc":"Maximum time stalled from a single stall","default":null},{"name":"n_stalls","type":["null","long"],"doc":"Number of times playback was stopped because of empty buffer (excluding initial buffering and seek rebuffering)","default":null},{"name":"shuffle","type":["null","boolean"],"doc":"If playback was initiated while in shuffle mode","default":null},{"name":"max_continous","type":["null","long"],"doc":"Maximum continuous time range played in milliseconds","default":null},{"name":"union_played","type":["null","long"],"doc":"Union of all played time ranges in milliseconds (cannot exceed duration)","default":null},{"name":"play_context","type":["null","string"],"doc":"The context from which this track was played (spotify URI)","default":null},{"name":"audiocodec","type":["null","string"],"doc":"The primarily played audio codec (in RFC6381 notation)","default":null},{"name":"videocodec","type":["null","string"],"doc":"The primarily played video codec (in RFC6381 notation)","default":null},{"name":"play_track","type":["null","string"],"doc":"Spotify URI for the track (ex. spotify:episode:abc)","default":null},{"name":"incognito_mode","type":["null","boolean"],"doc":"Whether playback was initiated in incognito mode","default":null},{"name":"provider","type":["null","string"],"doc":"The playback rule that provided the video, e.g., \\"mft/inject_random_track\\" or \\"queue\\"","default":null},{"name":"referrer","type":["null","string"],"doc":"Either a remote site or a spotify app which initiated the request","default":null},{"name":"referrer_version","type":["null","string"],"doc":"The version of the referrer, where applicable","default":null},{"name":"referrer_vendor","type":["null","string"],"doc":"The vendor of the referrer, where applicable","default":null},{"name":"streaming_rule","type":["null","string"],"doc":"The streaming rule in effect for this track","default":null},{"name":"gaia_dev_id","type":["null","string"],"doc":"Remote control that started the playback. Same as \\"dev-id\\" in \\"Gaia\\" messages sent by that device. \\"none\\" if non-Gaia playback.","default":null},{"name":"start_bitrate","type":["null","long"],"doc":"Bitrate at which playback started (bits/s)","default":null},{"name":"full_screen","type":["null","long"],"doc":"Milliseconds played while video is in a modal or fullscreen state","default":null},{"name":"time_weighted_bitrate","type":["null","long"],"doc":"Average bitrate weighted by the amount of time video played at each bitrate","default":null},{"name":"prefetched_bytes","type":["null","long"],"doc":"Total number of bytes prefetched for the selected content","default":null},{"name":"prefetched_bytes_loaded","type":["null","long"],"doc":"Total number of prefetched bytes played back","default":null},{"name":"key_system","type":["null","string"],"doc":"The DRM key system","default":null},{"name":"ms_key_latency","type":["null","long"],"doc":"The time it took to fetch and install the DRM key in milliseconds.","default":null},{"name":"total_bytes","type":["null","long"],"doc":"The total segment bytes downloaded","default":null},{"name":"local_time_ms","type":["null","long"],"doc":"The local time at which playback was initiated (Unix timestamp in milliseconds)","default":null},{"name":"connection_type_start","type":["null","string"],"doc":"connection type (i.e. wifi, 3G) at the start of the stream","default":null},{"name":"connection_type_end","type":["null","string"],"doc":"connection type (i.e. wifi, 3G) at the end of the stream","default":null},{"name":"ms_played_background","type":["null","long"],"doc":"Milliseconds played in background (audio-only). Always subset of ms-played.","default":null},{"name":"page_instance_id","type":["null","string"],"doc":"ID of the page where the user triggered this video to play.","default":null},{"name":"interaction_id","type":["null","string"],"doc":"ID of the interaction that triggered this video to play.","default":null},{"name":"core_version","type":"long","doc":"The core version this message was sent from in the form of xxxxyyyyzzzzwwwwwww (major, minor, micro, tiny)","default":0},{"name":"ms_played_video","type":["null","long"],"doc":"Milliseconds played with video rendering enabled, in wall-clock time. Always a subset of ms-played.","default":null},{"name":"feature_uuid","type":["null","string"],"doc":"UUID of a feature that uniquely identifies the feature.","default":null},{"name":"media_type","type":["null","string"],"doc":"The media type of content played, e.g. video or audio","default":null},{"name":"decision_id","type":["null","string"],"doc":"Identifier for the decision to add the track to the played context. Used to identify recommendations and join with external datasets containing decision related data.","default":null},{"name":"play_context_decision_id","type":["null","string"],"doc":"Same as decision_id, but for the played context. E.g. a decision that was made to add the card for the played playlist in Home section.","default":null}],"schema_version":17}');var m=i(90586);let p,f=!1;function h(e){if(!f){if(p=i(35529),h.enable=p.enable.bind(p),h.disable=p.disable.bind(p),"undefined"!=typeof window&&window.frameElement){const e=window.frameElement.getAttribute("data-debug");e&&h.enable(e)}const e="undefined"!=typeof __spotify&&__spotify.product_state?__spotify.product_state:{},t=e.debugEnable||e.debugenable;t&&p.enable(t),"undefined"!=typeof __spotify&&__spotify.product_state&&"1"===__spotify.product_state["ta-environment"]&&(p.useColors=()=>!1,p.formatters.o=e=>{try{return JSON.stringify(e)}catch(t){return(0,m.H)("Unable to stringify object",t),""}}),f=!0}return p(e)}var y=i(55872).lW;function v(e,t){let{type:i,name:n}=e;if(Array.isArray(i)){const e=t[n];if(null===e)return;t[n]={};const a=i.filter((e=>"null"!==e))[0];"object"==typeof a?(t[n]={[a.type]:e},v(a,t[n])):t[n][a]="bytes"===a?y.from(e):e}else"bytes"===i&&(t[n]=y.from(t[n]))}function _(e,t){h(`logger:${e.name}`);const i=t.message_name,n=t.message_version,a=Object.assign({},t);if(n!==e.schema_version)throw new Error(`Invalid message version: received Message with message_version ${n} but the Schema requires version ${e.schema_version}`);return{message:i,version:n,fields:e.fields.map((e=>{const t=a[e.name];return void 0===t?e.default:(v(e,a),t)})).slice(2)}}const b=(0,i(30982).v)();(function(e,t){let{name:i,schema_version:n}=e;const a={message_name:i,version:n};b.post("sp://logging/v3/create_pending_message",a).then((e=>{e.sequence_number?e.sequence_id?t(null,e.sequence_number,e.sequence_id):t(new Error("pendingLog: sequence_id not present"),null):t(new Error("pendingLog: sequence_number not present"),null)})).catch((e=>{(0,m.H)("create error",e,a),t(e,null)}))}).bind(null,u),function(e,t,i,n){const a=function(e,t){const i=_(e,Object.assign({},{message_name:e.name,message_version:e.schema_version},t));return i.fields=i.fields.map((e=>"string"==typeof e?e:null===e?"":JSON.stringify(e))),i}(e,i);a.sequence_number=t,b.post("sp://logging/v3/update_pending_message",a).then((()=>{n(null)})).catch((e=>{(0,m.H)("update error",e,a),n(e)}))}.bind(null,u),function(e,t){let{name:i}=e;const n={sequence_number:t,message_name:i};b.post("sp://logging/v3/send_pending_message",n).catch((e=>{(0,m.H)("send error",e,n)}))}.bind(null,u);i(47895);i(17676),i(13188),i(36513),i(65762),i(79935),i(69783);i(65193),i(91014);var g=i(89474);i(28004);g.M;i(93970),i(91837),i(22849),i(17404),i(606),i(21556),i(44501),i(82891);var T=i(63979);T.v;i(55162);i(9464);i(52250),i(65441),i(13263),i(76950);var E=i(16510),A=i(33547);i(59214);E.w;i(80378),i(39301),i(92372),i(70069),i(44227),i(91499),i(68856),i(18004),i(16527),i(10590),i(30751);var P=i(3959),D=i(9590),S=i.n(D);S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());i(48731);S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());D.util.Long!==P.Z&&(D.util.Long=P.Z,D.configure());i(16366);i(51016),i(80066),i(94557),i(57023),i(19139),i(65025),i(71969),i(6521),i(66690),i(86523),i(62924),i(66070);S().util.Long!==P.Z&&(S().util.Long=P.Z,S().configure());i(58465),i(2836);i(31546);i(73516),i(1666);var w=i(29523);i(75516),i(60461);i(85101);A.TP.PODCAST_SUBSCRIPTIONS;i(58959);var k=i(1805);i(3853),i(4128),i(50020);k.CZ.fromPartial({rowId:!0,addTime:!0,track:{link:!0,name:!0,discNumber:!0,trackNumber:!0,length:!0,isLocal:!0,playable:!0,hasLyrics:!1,is19PlusOnly:!1,isAvailableInMetadataCatalogue:!1,isExplicit:!1,isPremiumOnly:!1,locallyPlayable:!1,playableLocalTrack:!1,playableTrackLink:!1,popularity:!1,previewId:!1,trackDescriptors:!1},album:{album:{link:!0,name:!0,covers:!0,copyrights:!1,isPremiumOnly:!1,numDiscs:!1,numTracks:!1,playability:!1,year:!1},artist:{link:!0,name:!0,isVariousArtists:!1,portraits:!1}},artist:{link:!0,name:!0,isVariousArtists:!1,portraits:!1},addedBy:void 0,canAddToCollection:!1,canBan:!1,displayCovers:!1,formatListAttributes:!1,inCollection:!1,isBanned:!1,localFile:!1,offline:!1});i(2334),i(36813),i(85222);var I=i(51165),C=(i(27057),i(5542),i(33103));i(57264),i(27759);C.N;i(81103);(0,i(61930).y)(I.sK);i(76280),i(194);var O=i(95812),N=i(25507);O.M4.UNKNOWN,O.kZ.UNKNOWN,O.M4.UNKNOWN,O.dR.NONE;i(50809);i(23280);i(54487);N.Bc;i(30841);i(4248),i(94755);i(79668);i(16556),i(45134);w.TPH.PODCAST_SUBSCRIPTIONS;i(78024);var L=i(18716);L.n;i(20977),i(18084),i(13545);i(58251),i(91415),i(71854),i(66141),i(57158);i(39525);i(24778),i(88486);var x=i(59374),R=(i(60444),i(93820));R.w;i(88536),i(90638),i(26472);x.bD.NAME,x.bD.ADDED_AT,x.bD.RECENTLY_PLAYED,x.bD.RELEVANCE,x.bD.AVAILABLE_OFFLINE,x.As.ASC,x.As.DESC;x.R0.TEXT,x.pg.CONTAINS;L.n;const U=w.FgV.fromPartial({username:!0,link:!0,name:!0,image:!0,thumbnail:!0,color:!0}),B=(w.LMz.fromPartial({link:!0,name:!0,loaded:!0,totalLength:!0,duration:!0,description:!0,picture:!0,playable:!0,canReportAnnotationAbuse:!0,followers:!0,ownedBySelf:!0,published:!0,formatListType:!0,formatListAttributes:!0,containsSpotifyTracks:!0,containsTracks:!0,containsEpisodes:!0,owner:U,madeFor:U,allows:{insert:!0,remove:!0},numberOfEpisodes:!0,numberOfTracks:!0,collaboratingUsers:{count:!0,limit:5,collaborator:{user:U,numberOfItems:!0,numberOfTracks:!0,numberOfEpisodes:!0,isOwner:!0}},basePermission:!0,userCapabilities:!0,extension:[],lenses:!0,lengthIgnoringTextFilter:!0,numberOfItemsPerLinkType:!0}),w.JoK.fromPartial({hasLyrics:!0,link:!0,name:!0,length:!0,playable:!0,isAvailableInMetadataCatalogue:!0,locallyPlayable:!0,playableLocalTrack:!0,discNumber:!0,trackNumber:!0,isExplicit:!0,previewId:!0,isLocal:!0,isPremiumOnly:!0,playableTrackLink:!0,popularity:!0,is19PlusOnly:!0,trackDescriptors:!0,extension:[w.TPH.VIDEO_ASSOCIATIONS]})),F=w.XKO.fromPartial({link:!0,name:!0,covers:!0}),H=w.XMF.fromPartial({link:!0,name:!0}),z=(w.CZe.fromPartial({track:B,rowId:!0,addTime:!0,formatListAttributes:!0,addedBy:U,album:{album:F,artist:H},artist:H}),w.ZBS.fromPartial({link:!0,length:!0,name:!0,number:!0,isExplicit:!0,type:!0,isMusicAndTalk:!0,publishDate:!0,extension:[w.TPH.PODCAST_SUBSCRIPTIONS],is19PlusOnly:!0,isBookChapter:!0,isPodcastShort:!0})),M=w.inR.fromPartial({link:!0,name:!0,covers:!0,isMusicAndTalk:!0,extension:[],isBook:!0});w.yyI.fromPartial({episode:z,rowId:!0,addTime:!0,formatListAttributes:!0,addedBy:U,show:M,signals:!0,isRecommendation:!0,playedState:{playable:!0,timeLeft:!0}}),w.AkC.fromPartial({uri:!0,collectionState:!0,extensionPolicy:[{linkType:w.UnB.SHOW,extension:w.TPH.SHOW_ACCESS},{linkType:w.UnB.SHOW,extension:w.TPH.COVER_IMAGE},{linkType:w.UnB.SHOW,extension:w.TPH.AUDIOBOOK_SPECIFICS},{linkType:w.UnB.SHOW,extension:w.TPH.PLAYABILITY},{linkType:w.UnB.SHOW,extension:w.TPH.SHOW_V4},{linkType:w.UnB.SHOW,extension:w.TPH.HTML_DESCRIPTION},{linkType:w.UnB.SHOW,extension:w.TPH.PODCAST_RATING},{linkType:w.UnB.SHOW,extension:w.TPH.AUDIOBOOK_GENRE}]});i(73928),i(77861),i(38367);R.w;i(62311),i(25961);var G=i(54513),Z=i(47152);i(91054);Z.Dq.fromPartial({includeCollectionSongs:!0,includeYourEpisodes:!0,artistPolicy:{timestamp:!0,artistPolicy:{link:!0,name:!0,portraits:!0}},albumPolicy:{timestamp:!0,albumPolicy:{link:!0,name:!0,covers:!0},artistsPolicy:{link:!0,name:!0}},showPolicy:{timestamp:!0,showPolicy:{link:!0,name:!0,publisher:!0,covers:!0,extension:[l.TP.AUDIOBOOK_SPECIFICS,l.TP.SHOW_ACCESS]}},playlistPolicy:{timestamp:!0,playlistPolicy:{link:!0,name:!0,description:!0,picture:!0,owner:{link:!0,name:!0}}},trackPolicy:{timestamp:!0,trackPolicy:{link:!0,name:!0,isExplicit:!0,is19PlusOnly:!0},albumPolicy:{link:!0,name:!0,covers:!0},artistsPolicy:{link:!0,name:!0}},episodePolicy:{timestamp:!0,showPolicy:{link:!0,name:!0,publisher:!0,covers:!0,extension:[l.TP.AUDIOBOOK_SPECIFICS]}},collectionTracksPolicy:{link:!0,timestamp:!0}});G.sw;i(46974);var j=i(13199);j.YG.AVAILABLE,j.NK.EQUALS;var Y=function(e){return e.TITLE="TITLE",e}(Y||{});j.YG.AVAILABLE,j.YG.AVAILABLE,j.YG.NAME,Y.TITLE,j.YG.TEXT,j.YG.TEXT,j.YG.ISPLAYED,j.YG.ISPLAYED,j.YG.STARTEDPLAYING,j.YG.STARTEDPLAYING,j.YG.AVAILABLE,j.YG.TEXT,j.YG.NAME,j.YG.ISPLAYED,j.YG.STARTEDPLAYING,Y.TITLE,j.NK.CONTAINS,j.NK.EQUALS,j.NK.NOT_EQUALS,j.NK.GREATER_THAN;var K=function(e){return e.ADDED_AT="ADDED_AT",e.DURATION="DURATION",e.TITLE="TITLE",e}(K||{});j.ay.PUBLISH_DATE,K.ADDED_AT,j.ay.PUBLISH_DATE,K.ADDED_AT,K.DURATION,K.TITLE;i(8693),i(76963);var V=i(84941);V.T;i(35078);l.QS.fromPartial({showPolicy:{showPolicy:{link:!0,name:!0,publisher:!0,covers:!0}},episodePolicy:{link:!0,length:!0,name:!0,manifestId:!0,previewId:!0,previewManifestId:!0,description:!0,publishDate:!0,covers:!0,freezeFrames:!0,language:!0,available:!0,mediaTypeEnum:!0,number:!0,backgroundable:!0,isExplicit:!0,type:!0,isMusicAndTalk:!0,is19PlusOnly:!0,isBookChapter:!0,extension:[l.TP.PODCAST_SUBSCRIPTIONS,l.TP.CONTENT_WARNING]},episodePlayedStatePolicy:{timeLeft:!0,isPlayed:!0,playable:!0,playabilityRestriction:!0,lastPlayedAt:!0},episodeCollectionPolicy:{isFollowingShow:!0,isInListenLater:!0,isNew:!0},episodeSyncPolicy:{offline:!0,syncProgress:!0},progress:!0}),l.VY.fromPartial({showPolicy:{link:!0,name:!0,description:!0,publisher:!0,isExplicit:!0,covers:!0,mediaTypeEnum:!0,copyrights:!0,isMusicAndTalk:!0,isBook:!0,consumptionOrder:!0,extension:[l.TP.AUDIOBOOK_SPECIFICS,l.TP.PODCAST_SUBSCRIPTIONS,l.TP.PODCAST_TOPICS,l.TP.HTML_DESCRIPTION,l.TP.EPISODE_TRANSCRIPTS,l.TP.PODCAST_RATING,l.TP.AUDIOBOOK_PRICE,l.TP.SHOW_ACCESS,l.TP.AUDIOBOOK_RELATIONS,l.TP.PLAYABILITY,l.TP.AUDIOBOOK_GENRE]},showPlayedStatePolicy:{latestPlayedEpisodeLink:!0}});const W=w.ZBS.fromPartial({link:!0,length:!0,name:!0,manifestId:!0,previewId:!0,previewManifestId:!0,description:!0,publishDate:!0,covers:!0,freezeFrames:!0,language:!0,available:!0,mediaTypeEnum:!0,number:!0,backgroundable:!0,isExplicit:!0,type:!0,isMusicAndTalk:!0,is19PlusOnly:!0,isBookChapter:!0,extension:[l.TP.SHOW_ACCESS,l.TP.PODCAST_SEGMENTS,l.TP.PODCAST_SUBSCRIPTIONS,l.TP.HTML_DESCRIPTION,l.TP.CONTENT_WARNING,l.TP.EPISODE_TRANSCRIPTS]});l.QS.fromPartial({episodeCollectionPolicy:{isNew:!0},episodePlayedStatePolicy:{playable:!0,timeLeft:!0,isPlayed:!0},episodePolicy:W}),l.QS.fromPartial({showPolicy:{showPolicy:{link:!0,name:!0,publisher:!0,covers:!0}},episodePolicy:W,episodePlayedStatePolicy:{timeLeft:!0,isPlayed:!0,playable:!0,playabilityRestriction:!0,lastPlayedAt:!0},episodeCollectionPolicy:{isFollowingShow:!0,isInListenLater:!0,isNew:!0},episodeSyncPolicy:{offline:!0,syncProgress:!0},progress:!0});i(44563),i(17600),i(87752),i(44309),i(7387);i(95146),i(91122),i(32781);i(80964),i(69247);i(42784);i(79815),i(1242),i(43337),i(18376),i(58864),i(23345),i(64682),i(11185),i(13082),i(82245);i(27532),i(31402),i(22370);i(50304),i(6167);i(21178);i(61332);async function q(e){return await fetch(`i18n/${e}.json`).then((e=>e.json()))}var $=i(25440),X=i(57044),J=i(69736),Q=i(36879);const ee="SsxBZ9Nwxg30ZcXUcUcJ",te="HVN1FVVriodEnWgn1GZ4",ie="legiK6gOuEtSJvxYKoXc",ne="N6dpLHX_oZBYC1FQy8SA",ae="krXyPxbq59r39DlZdHzv",le="_o0S4kMO8jLyHmiTwjxg",se="yuK7YlDkSnTHzZph5sQq";var oe=i(11527);function re(){const[e,t]=(0,n.useState)(X.ZP.isEnabled());return(0,oe.jsxs)("div",{children:[" ",(0,oe.jsx)(J.x,{as:"h4",variant:"titleSmall",semanticColor:"textBase",children:"Pseudo localization"}),(0,oe.jsxs)("div",{children:[(0,oe.jsxs)(J.x,{variant:"bodyMedium",children:["Perform"," ",(0,oe.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pseudolocalization",children:"pseudolocalization"})," ","against the DOM.",(0,oe.jsx)("br",{})]}),(0,oe.jsx)(J.x,{variant:"bodySmall",children:"In Accented English all Latin letters are replaced by accented Unicode counterparts which don't impair the readability of the content. This allows developers to quickly test if any given string is being correctly displayed in its 'translated' form. Additionally, simple heuristics are used to make certain words longer to better simulate the experience of international users."})]}),(0,oe.jsx)("br",{}),(0,oe.jsxs)("div",{className:se,children:[(0,oe.jsx)(J.x,{as:"label",htmlFor:"pseudo-localization",variant:"bodyMedium",children:"Toggle pseudo-localization"}),(0,oe.jsx)(Q.Z,{id:"pseudo-localization",value:e,onSelected:e=>{e?(t(!0),X.ZP.start()):(t(!1),X.ZP.stop(),window.location.reload())}})]})]})}var ce=i(41785),de=i(57882);const ue=()=>{const{settings:e}=(0,de.r)(),t=(0,ce.D)(e.values),i=(0,n.useMemo)((()=>({localeForTranslation:a.ag.getLocaleForTranslation(),localeForFormatting:a.ag.getLocaleForTranslation(),translations:a.ag.getTranslations()})),[]),[l,s]=(0,n.useState)(null);(0,n.useEffect)((()=>{const e={};return Promise.all(Object.keys($.k1).map((async t=>{e[t]=await q(t)}))).then((()=>{s(e)})),()=>{a.ag.initialize(i)}}),[i]);const[o,r]=(0,n.useState)(null),c=a.ag.get.bind(a.ag);return t?(0,oe.jsxs)("div",{className:ee,children:[(0,oe.jsx)("h1",{className:te,children:"Locales"}),(0,oe.jsx)("h3",{children:"You can use this tool to test if the Desktop client is able to properly render every locale with correct font-family within Desktop UI."}),(0,oe.jsx)(re,{}),l?(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)("div",{className:le,children:[(0,oe.jsx)("p",{children:"Choose a string key from the dropdown to test it"}),(0,oe.jsxs)("select",{onChange:e=>{r(e.target.value)},children:[(0,oe.jsx)("option",{selected:null===o,children:"Select a key"}),Object.keys(l[a.go.en]||{}).map((e=>(0,oe.jsx)("option",{selected:o===e,children:e},e)))]})]}),(0,oe.jsx)("div",{className:ie,children:Object.entries($.k1).map((e=>{let[t,{displayName:i,displayNameEn:n}]=e;return t in l&&a.ag.initialize({localeForTranslation:t,localeForFormatting:t,translations:l[t]}),(0,oe.jsxs)("div",{className:ne,children:[(0,oe.jsxs)("h3",{children:[n," (",t,") (",i,")"]}),o?(0,oe.jsx)("p",{className:ae,children:t in l?c(o):"💥 Can't load dictionary 💥 "}):null]},t)}))})]}):(0,oe.jsx)("p",{children:"Please wait until we fetch all dictionaries"})]}):null}},16095:(e,t,i)=>{i.d(t,{A:()=>l,s:()=>a});var n=i(84469);let a=function(e){return e.UPDATE="update",e.DEVICE_CONNECTED="deviceConnected",e}({});class l extends n.r{}},822:(e,t,i)=>{i.r(t),i.d(t,{PlaybackFiltersCore:()=>F});var n=i(40270),a=(i(46758),i(53321),i(16095)),l=(i(70054),i(51016),i(80066),i(94557),i(57023),i(19139),i(65025),i(71969),i(6521),i(66690),i(86523),i(62924),i(66070),i(27082),i(86277),i(34671)),s=i(85101);const o=e=>(null==e?void 0:e.filterFiles.map((e=>e.id)))??[],r=(e,t)=>({canTuneHeadphones:!(!e||!e.specificEnabled||t.specificRestricted)&&e.specificEnabled.filterFiles.length>0,canTuneStudio:!(!e||!e.externalizationEnabled||t.externalizationRestricted)&&e.externalizationEnabled.filterFiles.length>0});var c=i(24958),d=i(82857);const u=e=>{var t,i;const n=null==e||null===(t=e.item)||void 0===t?void 0:t.type,a=null==e||null===(i=e.item)||void 0===i?void 0:i.mediaType;switch(n){case d.p.CHAPTER:return"audiobook";case d.p.EPISODE:return"audio"===a?"audio_podcast":"unknown";case d.p.TRACK:return"track";default:return"unknown"}},m=(e,t,i,n)=>{var a,l,s,o,r;const d=t.getState();e.send((0,c.f)({specific_enabled:i.specificEnabled,externalization_enabled:i.externalizationEnabled,specific_filter_id:i.specificEnabled?null===(a=n.specificEnabled)||void 0===a?void 0:a.id:null===(l=n.specificDisabled)||void 0===l?void 0:l.id,content_type:u(d),content_uri:null==d||null===(s=d.item)||void 0===s?void 0:s.uri,specific_enabled_revision:null===(o=n.specificEnabled)||void 0===o?void 0:o.revision,format:null===(r=n.externalizationEnabled)||void 0===r?void 0:r.format}))},p=`${s.pd}/better-sound-filters/v1`;function f(){var e;return(null===(e=this._audioObserver.getConnectedDevice())||void 0===e?void 0:e.id)??null}function h(){const e=f.call(this);return this._devicePersister.getDevice(e)}async function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const i=f.call(this);if(null===e)return this._devicePersister.updateDevice(i,{device:void 0}),E.call(this,{specificEnabled:!1,externalizationEnabled:!1});const n=this._devicePersister.getDevice(i);return n?(this._devicePersister.updateDevice(i,{device:e}),null!==n.filterState?E.call(this,n.filterState):E.call(this,{specificEnabled:!1,externalizationEnabled:!1})):(this._devicePersister.addDevice(i,{device:e,filterState:null,predictedState:t}),E.call(this,{specificEnabled:!1,externalizationEnabled:!1}))}async function v(e){const t=f.call(this);return t?(this._devicePersister.updateDevice(t,{filterState:e}),E.call(this,e)):E.call(this,{specificEnabled:!1,externalizationEnabled:!1})}async function _(){if(this._devicesCache.size>0)return this._devicesCache;const e=(await this._inflighGetDevicesCache.create("getDevices",(()=>this._builder.build().withoutMarket().withJsonContentType().withHost(p).withPath("/get-devices/").send()))).body.devices;return this._devicesCache.size!==e.length&&(this._devicesCache.clear(),e.forEach((e=>this._devicesCache.set(e.id,e)))),this._devicesCache}async function b(e){if(!e)return null;const t=this._deviceFiltersCache.get(e);if(t)return t;const i=(await _.call(this)).get(e)??{brand:"",model:""},n=await this._puffin.libraryVersion({}),a=await this._inflighGetFiltersCache.create(`getFiltersForDevice:${i.brand}:${i.model}`,(()=>this._builder.build().withoutMarket().withJsonContentType().withHost(p).withPath(`/map-device-to-filters/?brand=${encodeURIComponent(i.brand)}&model=${encodeURIComponent(i.model)}&format=${n.version}`).send()));await A.call(this,a.body);const l=a.body;return this._deviceFiltersCache.set(e,l),l}async function g(){const{currentState:e}=await D.call(this);await E.call(this,e)}function T(e){return{specificEnabled:e.specificEnabled&&!this._contentRestrictions.specificRestricted,externalizationEnabled:e.externalizationEnabled&&!this._contentRestrictions.externalizationRestricted}}async function E(e){const t=h.call(this);if(null==t||!t.device){try{await this._puffin.disableProcessing({})}finally{this._events.emit(a.s.UPDATE,{})}return}const{specificEnabled:i,externalizationEnabled:n}=T.call(this,e);if(!i&&!n){try{await this._puffin.disableProcessing({})}finally{this._events.emit(a.s.UPDATE,{})}return}const s=await b.call(this,t.device.id);if(!s)throw new Error(`No filters exist for device ${t.device.id}`);const r=o(i?s.specificEnabled:s.specificDisabled),c=o(n?s.externalizationEnabled:s.externalizationDisabled).concat(r||[]).map((e=>{const t=this._filterBytesCache.get(e);if(!t)throw new Error(`Filter ${e} not found!`);return t}));try{await this._puffin.filter(l.Bu.fromPartial({filters:c,isO:i,isV:n}))}finally{m(this._eventSender,this._playerAPI,e,s),this._events.emit(a.s.UPDATE,{})}}async function A(e){var t,i,n,a;const l=(null===(t=e.specificEnabled)||void 0===t?void 0:t.filterFiles)||[],s=(null===(i=e.specificDisabled)||void 0===i?void 0:i.filterFiles)||[],o=(null===(n=e.externalizationEnabled)||void 0===n?void 0:n.filterFiles)||[],r=(null===(a=e.externalizationDisabled)||void 0===a?void 0:a.filterFiles)||[],c=l.concat(s,o,r);await Promise.all(c.map((e=>P.call(this,e))))}async function P(e){if(!this._filterBytesCache.has(e.id)){const t=await fetch(e.url);if(!t.ok)throw new Error(`CDN request for filter ${e.id} failed with status ${t.status}`);const i=await t.arrayBuffer();if(!(i.byteLength>0))throw new Error(`CDN returned null for filter ${e.id}!`);{const t=new Uint8Array(i);this._filterBytesCache.set(e.id,t)}}}async function D(){const e=h.call(this),t=(null==e?void 0:e.filterState)??{specificEnabled:!1,externalizationEnabled:!1},i=(null==e?void 0:e.device)??null,n=await b.call(this,null==i?void 0:i.id),a=r(n,this._contentRestrictions);return{device:i,predictedState:(null==e?void 0:e.predictedState)??null,isOnboarded:null!==e&&null!==e.filterState,currentState:T.call(this,t),contentRestrictions:this._contentRestrictions,toggleTuneHeadphones:e&&a.canTuneHeadphones?()=>v.call(this,{specificEnabled:!t.specificEnabled,externalizationEnabled:t.externalizationEnabled}):null,toggleTuneStudio:e&&a.canTuneStudio?()=>v.call(this,{specificEnabled:t.specificEnabled,externalizationEnabled:!t.externalizationEnabled}):null,setFilterState:e=>v.call(this,e)}}var S=i(44971),w=i(25507);const k={specificRestricted:!1,externalizationRestricted:!1},I="audio.saved-devices";class C{constructor(e){this._localStorageAPI=e}setDevices(e){this._localStorageAPI.setItem(I,e)}getDevices(){const e=this._localStorageAPI.getItem(I);return e instanceof Error?null:e}getDevice(e){if(!e)return null;const t=this.getDevices();return(null==t?void 0:t[e])??null}addDevice(e,t){if(!e)return;const i=this.getDevices();this.setDevices({...i,[e]:t})}updateDevice(e,t){if(!e)return;const i=this.getDevices();null!=i&&i[e]&&this.setDevices({...i,[e]:{...i[e],...t}})}removeDevice(e){if(!e)return;const t=this.getDevices();if(t){const{[e]:i,...n}=t;this.setDevices(n)}}}i(80378),i(45205);let O=function(e){return e[e.unknown=0]="unknown",e[e.car=1]="car",e[e.headphones=2]="headphones",e[e.speaker=3]="speaker",e[e.wearable=4]="wearable",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e}({});function N(e){switch(e){case 0:case"unknown":return O.unknown;case 1:case"car":return O.car;case 2:case"headphones":return O.headphones;case 3:case"speaker":return O.speaker;case 4:case"wearable":return O.wearable;default:return O.UNRECOGNIZED}}const L={fromJSON:e=>({category:x(e.category)?N(e.category):0,company:x(e.company)?String(e.company):"",model:x(e.model)?String(e.model):"",version:x(e.version)?String(e.version):"",interapp:!!x(e.interapp)&&Boolean(e.interapp)}),toJSON(e){const t={};return void 0!==e.category&&(t.category=function(e){switch(e){case O.unknown:return"unknown";case O.car:return"car";case O.headphones:return"headphones";case O.speaker:return"speaker";case O.wearable:return"wearable";case O.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e.category)),void 0!==e.company&&(t.company=e.company),void 0!==e.model&&(t.model=e.model),void 0!==e.version&&(t.version=e.version),void 0!==e.interapp&&(t.interapp=e.interapp),t},create:e=>L.fromPartial(e??{}),fromPartial(e){const t={category:0,company:"",model:"",version:"",interapp:!1};return t.category=e.category??0,t.company=e.company??"",t.model=e.model??"",t.version=e.version??"",t.interapp=e.interapp??!1,t}};function x(e){return null!=e}var R=i(194);const U=`${s.pd}/external-accessory-mapping-serving/v1`;class B{constructor(e,t,i,n,a){this._playbackFiltersApi=e,this._audioObserver=t,this._devicePersister=i,this._events=n,this._builder=a,this._currentAudioDevice=null}async lookupDevice(e){const t=await this._builder.build().withoutMarket().withJsonContentType().withHost(U).withPath(`/lookup/${e}`).send(),{category:i,company:n,model:a}=L.fromJSON(t.body);return i!==O.headphones?null:{brand:n,model:a}}async setAudioDevice(e){const t=(this._devicePersister.getDevices()??{})[null==e?void 0:e.id];if(t)return this._playbackFiltersApi.setCurrentDevice(t.device);const i=await this._playbackFiltersApi.getDevices(),n=Array.from(i.values());let a=n.find((t=>t.deviceName.toLowerCase().includes(e.name.toLowerCase()))),l=null;if(!a&&e.transportType===R.Fl.TRANSPORT_TYPE_BLUETOOTH){const t=await this.lookupDevice(null==e?void 0:e.name);null!==t&&(a=n.find((e=>e.deviceName.toLowerCase().includes(t.model.toLowerCase())&&e.brand.toLowerCase().includes(t.brand.toLowerCase()))),l={predictedBrand:t.brand,predictedModel:t.model})}return this._playbackFiltersApi.setCurrentDevice(a??null,l)}async initializeCurrentDevice(){this._currentAudioDevice&&await this.setAudioDevice(this._currentAudioDevice)}listen(){this._audioObserver.getAudioOutputDevices({},(async e=>{const t=e.devices.find((e=>e.isDefaultDevice))||null;if(!t||t.terminalType!==R.OE.TERMINAL_TYPE_HEADPHONES)return this._currentAudioDevice=null,this._playbackFiltersApi.setCurrentDevice(null),void this._events.emit(a.s.DEVICE_CONNECTED,{deviceFilterState:null,audioDevice:null});if(this._currentAudioDevice=t,await this.initializeCurrentDevice(),t){const e=await this._playbackFiltersApi.getFilterState();e&&this._events.emit(a.s.DEVICE_CONNECTED,{deviceFilterState:e,audioDevice:t})}}))}getConnectedDevice(){return this._currentAudioDevice}}class F{constructor(e,t,i,l,s,o){(0,n.Z)(this,"_devicesCache",new Map),(0,n.Z)(this,"_deviceFiltersCache",new Map),(0,n.Z)(this,"_filterBytesCache",new Map),(0,n.Z)(this,"_inflighGetDevicesCache",new S.tL),(0,n.Z)(this,"_inflighGetFiltersCache",new S.tL),(0,n.Z)(this,"_getDevices",_),(0,n.Z)(this,"_currentDeviceFilterState",D),(0,n.Z)(this,"_setCurrentDevice",y),(0,n.Z)(this,"_updateCurrentFilter",g),this._builder=e,this._puffin=t,this._audioObserverClient=i,this._localStorageAPI=l,this.__eventSender=s,this.__playerAPI=o,this._events=new a.A,this._contentRestrictions=k,this._eventSender=this.__eventSender,this._playerAPI=this.__playerAPI,this._devicePersister=new C(this._localStorageAPI),this._audioObserver=new B(this,this._audioObserverClient,this._devicePersister,this._events,this._builder),this._puffin.subscribeToErrors({},(e=>{})),this._audioObserver.listen(),((e,t)=>{let i={...k};e.getEvents().addListener(w.rg.UPDATE,(e=>{var n,a;let{data:l}=e;const s=null==l||null===(n=l.item)||void 0===n?void 0:n.type,o=null==l||null===(a=l.item)||void 0===a?void 0:a.mediaType,r={...i};switch(s){case d.p.CHAPTER:case d.p.EPISODE:r.specificRestricted="video"===o||"mixed"===o,r.externalizationRestricted=!0;break;case d.p.TRACK:r.specificRestricted=!1,r.externalizationRestricted=!1;break;default:r.specificRestricted=!0,r.externalizationRestricted=!0}i.specificRestricted===r.specificRestricted&&i.externalizationRestricted===r.externalizationRestricted||t(r),i=r}))})(this._playerAPI,(e=>{this._contentRestrictions={...e},this._updateCurrentFilter()}))}async getDevices(){const e=await this._getDevices();return Array.from(e.values())}async getFilterState(){return this._currentDeviceFilterState()}getCurrentAudioDevice(){return this._audioObserver.getConnectedDevice()}async setCurrentDevice(e,t){return this._setCurrentDevice(e,t)}getSavedDevices(){const e=this._devicePersister.getDevices();return null===e?[]:Object.values(e).filter((e=>null!==e.filterState))}async removeCurrentDevice(){var e;await this.setCurrentDevice(null);const t=(null===(e=this._audioObserver.getConnectedDevice())||void 0===e?void 0:e.id)??null;this._devicePersister.removeDevice(t),this._audioObserver.initializeCurrentDevice(),this._events.emit(a.s.UPDATE,{})}getFiltersEvents(){return this._events}}},71854:(e,t,i)=>{i.d(t,{I:()=>o});i(70054);var n=i(95812),a=i(57158);a.R0.TEXT,a.pg.CONTAINS;const l={[a.R0.TEXT]:"text"},s={[a.pg.CONTAINS]:"=^#"};function o(e,t){void 0!==(null==t?void 0:t.value)&&(e.metadata||(e.metadata={}),e.metadata[n.sb.FILTERING_PREDICATE]=function(e){const{field:t,operator:i,value:n}=e;if(t!==a.R0.TEXT||i!==a.pg.CONTAINS)throw new Error("Invalid filter params!");return`${l[t]} ${s[i]} "${n}"`}(t))}},91415:(e,t,i)=>{i.d(t,{R:()=>s});i(70054),i(86277);var n=i(95812),a=i(3853);a.bD.TITLE,a.bD.ADDED_BY,a.bD.ADDED_AT,a.bD.ARTIST,a.bD.ALBUM,a.bD.DURATION;const l={[a.bD.TITLE]:["title","original_index"],[a.bD.ADDED_BY]:["added_by","original_index"],[a.bD.ADDED_AT]:["added_at","album_title","album_artist_name","album_disc_number","album_track_number","original_index"],[a.bD.ARTIST]:["artist_name","album_title","album_disc_number","album_track_number","original_index"],[a.bD.ALBUM]:["album_title","album_disc_number","album_track_number","original_index"],[a.bD.DURATION]:["duration","album_title","album_disc_number","album_track_number","original_index"]};function s(e,t){void 0!==t&&(e.metadata||(e.metadata={}),e.metadata[n.sb.SORTING_CRITERIA]=function(e){const{field:t,order:i}=e,n=l[t];if(void 0===n||i!==a.As.ASC&&i!==a.As.DESC)throw new Error("Invalid sort params!");return n.map(((e,t)=>i?`${e} ${t>0?a.As.ASC:i}`:e)).join(",")}(t))}},13199:(e,t,i)=>{i.d(t,{NK:()=>s,YG:()=>l,ay:()=>n,i5:()=>a});let n=function(e){return e.PUBLISH_DATE="PUBLISH_DATE",e}({}),a=function(e){return e.ASC="ASC",e.DESC="DESC",e}({}),l=function(e){return e.AVAILABLE="AVAILABLE",e.TEXT="TEXT",e.NAME="NAME",e.ISPLAYED="ISPLAYED",e.STARTEDPLAYING="STARTEDPLAYING",e}({}),s=function(e){return e.CONTAINS="CONTAINS",e.EQUALS="EQUALS",e.NOT_EQUALS="NOT_EQUALS",e.GREATER_THAN="GREATER_THAN",e}({})}}]);
//# sourceMappingURL=debug-locales.afcb21d2.js.mapy">
      <p>If you would like to learn more about the IAEA’s work, sign up for our weekly updates containing our most important news, multimedia and more.</p>
      <form action="https://iaea.us6.list-manage.com/subscribe/post?u=958dfcbed8f359a6db0bb9c87&amp;id=623f55c917" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="novalidate">
        <div id="mc_embed_popup_scroll">
        <div class="mc-field-group form-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
          <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" aria-required="true">
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>

        <div class="mc-field-group input-group language-selector">
          <strong>Language </strong>
            <ul>
              <li><input type="checkbox" value="512" name="group[20341][512]" id="mce-group[20341]-20341-0"><label for="mce-group[20341]-20341-0">Arabic (monthly)</label></li>
              <li><input type="checkbox" value="1024" name="group[20341][1024]" id="mce-group[20341]-20341-1"><label for="mce-group[20341]-20341-1">Chinese (monthly)</label></li>
              <li><input type="checkbox" checked="checked" value="2048" name="group[20341][2048]" id="mce-group[20341]-20341-2"><label for="mce-group[20341]-20341-2">English (weekly)</label></li>
              <li><input type="checkbox" value="4096" name="group[20341][4096]" id="mce-group[20341]-20341-3"><label for="mce-group[20341]-20341-3">French (monthly)</label></li>
              <li><input type="checkbox" value="8192" name="group[20341][8192]" id="mce-group[20341]-20341-4"><label for="mce-group[20341]-20341-4">Russian (monthly)</label></li>
              <li><input type="checkbox" value="16384" name="group[20341][16384]" id="mce-group[20341]-20341-5"><label for="mce-group[20341]-20341-5">Spanish (monthly)</label></li>
            </ul>
        </div> 

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_958dfcbed8f359a6db0bb9c87_623f55c917" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary"></div>
        <input type="hidden" name="group[20341][2048]" value="2048">
        </div>
      </form>
    </div>
  </div>
  <!--End mc_embed_popup-->        </div>
      </div>
    </div>
  </section>        </div>
      </div>
    </div>
  </div>
</section>
<section id="block-system-main" class="block block-system clearfix">

      
  <div class="bootstrap-threecol-stacked" >
      <div class="row">
      <div class="panel-panel top col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="panel-pane pane-entity-field pane-taxonomy-term-field-subsite-banner-image"  >
  
      
  
  <div class="pane-content">
    
  <img typeof="foaf:Image" class="img-responsive" src="https://www.iaea.org/sites/default/files/styles/2016_landing_page_banner_1140x300/public/images/23-02542e_webbanner-food-cn322.jpg?itok=g5PzZ4Qk&amp;c=3f581e8856d4e61990c6178497dc6bab" alt="International Symposium on Food Safety and Control" />  </div>

  
  </div>

    
    
    
          <div class="panel-pane pane-custom hub-page-title-wrapper"><div class="hero-title"><h1>International Symposium on Food Safety and Control</h1><h2>27–31 May 2024, Vienna, Austria</h2></div></div>    
    
    
</div>
    </div>
  
  
  
      <div class="row">
              <div class="panel-panel left microsite-sidebar margin-top-25 col-md-3 col-lg-3"><div class="panel-pane pane-menu-tree pane-menu-hub-pages"  >
  
        <h2 class="pane-title">
      International Symposium on Food Safety and Control 2024    </h2>
    
  
  <div class="pane-content">
    <div class="menu-block-wrapper menu-block-ctools-menu-hub-pages-1 menu-name-menu-hub-pages parent-mlid-0 menu-level-3">
  <ul class="menu nav"><li class="first leaf active-trail active menu-mlid-34967 microsite-home active active"><a href="/events/fsc-symposium-2024" class="active-trail active">Home</a></li>
<li class="leaf menu-mlid-34961"><a href="/events/fsc-symposium-2024/participation-and-registration">Participation and Registration</a></li>
<li class="leaf menu-mlid-34963"><a href="/events/fsc-symposium-2024/abstracts-and-paper-submissions">Abstracts and Paper Submissions</a></li>
<li class="leaf menu-mlid-34965"><a href="/events/fsc-symposium-2024/logistics-and-faq">Logistics and FAQ</a></li>
<li class="leaf menu-mlid-34964"><a href="/events/fsc-symposium-2024/exhibition-opportunities">Exhibition Opportunities</a></li>
<li class="last leaf menu-mlid-34966"><a href="/events/fsc-symposium-2024/news">News</a></li>
</ul></div>
  </div>

  
  </div>
</div>
        <div class="panel-panel middle margin-top-25 col-md-6 col-lg-6"><div class="panel-pane pane-entity-field pane-node-field-blocks"  >
  
      
  
  <div class="pane-content">
    
<div class="paragraphs-items paragraphs-items-field-blocks paragraphs-items-field-blocks-full paragraphs-items-full">
        <div id=section-1 class="field-blocks">
    <div class="entity entity-paragraphs-item paragraphs-item-text" about="" typeof="">
  <div class="content">
    
  <h2 class="field-title">
    Background and Objectives  </h2>

  <p>Food control systems underpin food safety and quality, which are vital components of food security and are both necessary to safeguard international trade in food commodities. Food control systems are under increasing pressure due to various factors, including the disruptive effects of pandemics, food-borne diseases, and conflicts affecting food production, distribution, and supply chains. Climate change is also influencing patterns of food contamination as profound changes in weather patterns affect the conditions necessary for microbes and pests to thrive, and therefore changing climates impact food-illness, wastage, and losses.</p>
<p>Nuclear techniques play an important role in analytical laboratory services as many of the separation, identification, and quantification methods that are employed fundamentally rely on a nuclear related phenomenon. Some examples are isotope analysis to characterise the origin of food, nuclear spin in nuclear magnetic resonance, ionization for mass spectrometry, and mass spectrometric separation based on the mass differences of nuclei. Nuclear techniques are often used in conjunction with complementary, non-nuclear methods to provide powerful solutions to food safety and control problems. This includes the need to address food safety and quality requirements for market access. Being able to detect chemical and microbiological contaminants and to control food-borne disease are necessary for this purpose, as are capabilities to respond quickly to events that disrupt the food supply, using rapid, field-based testing methods.</p>
<p>Food processing techniques also include nuclear related technologies. For example, pre-packaged fresh fruits or vegetables exposed to a controlled dose of ionizing radiation as a phytosanitary measure to prevent the introduction and spread of viable regulated pests through trade in fresh produce, or the application of food irradiation to maintain food quality, prevent foodborne illness, reduce food losses, and extend product shelf-life.</p>
<p>The integration of nuclear techniques into food control systems can be secured by promoting awareness of the possibilities and comparative advantages of the techniques, and by encouraging dialogue and ensuring good communication between the relevant actors, including research centres, academia, regulatory bodies and industry. Nuclear technologies can also contribute in the framework of global initiatives such as ‘One Health’, and have a role in helping address issues such as antimicrobial resistance and mitigation of the effects of climate change on the food supply.</p>
<p>This symposium will provide a forum for information sharing on cutting edge research and developments in the application of nuclear technologies for food safety and control, networking between the public and private sectors and defining future research needs and directions.</p>
<p>The purpose of the event is to bring together experts and stakeholders in food safety and food control systems to consider the protection of the integrity of the food supply chain and measures to improve its resilience to food security challenges such as the impacts of climate change, foodborne diseases, food fraud, antimicrobial resistance. It also includes methods to address external factors that may disrupt food control systems (e.g. caused by pandemics, conflict or other catastrophic events). Contemporary and novel applications of nuclear and complementary techniques will be presented, and future perspectives and opportunities discussed. The event will provide a forum for networking, facilitate a broad understanding of food safety and food control systems, and promote the peaceful use of nuclear technologies.</p>
  </div>
</div>
  </div>
                <div id=section-2 class="field-blocks">
    <div class="entity entity-paragraphs-item paragraphs-item-text" about="" typeof="">
  <div class="content">
    
  <h2 class="field-title">
    Main Topics  </h2>

  <p>The Symposium will address the following topics:</p>
<p>1. Food authenticity and fighting food fraud</p>
<ul>
<li>Methods and systems to support food authenticity and combat food fraud</li>
<li>Isotopic and elemental analysis for food authenticity and verification of production and geographical origin</li>
<li>Field-deployable methods to check food authenticity at the point of contact</li>
<li>Promotion of food authenticity for food safety and to improve nutrition</li>
</ul>
<p>2. Food and phytosanitary irradiation</p>
<ul>
<li>Food irradiation to maintain and extend food quality, minimise pathogens in food and food packaging</li>
<li>Phytosanitary applications of food irradiation to meet pest quarantine requirements</li>
<li>Advances in machine source irradiation using electron beam and X rays including soft beam (keV) technologies</li>
<li>Dosimetry and dose modelling for process control</li>
</ul>
<p>3. Chemical residues and contaminants in food and feed</p>
<ul>
<li>Detection and control of chemical residues and contaminants in food and feed to protect human and animal health</li>
<li>Contributing to antimicrobial resistance knowledge and control through antimicrobial residue monitoring</li>
<li>Building resilience to climate change - laboratory capability to identify and respond to changing contamination patterns</li>
</ul>
<p>4. Preparing for and responding to emergencies and incidents affecting the food supply</p>
<ul>
<li>Rapid, field-deployable screening tests for food contaminants</li>
<li>Methodology to help trace contaminated products to origin</li>
<li>Laboratory networks for fast response and communication</li>
<li>Food irradiation for long-life emergency rations (for responders and those affected)</li>
</ul>
<p>5. Detection and characterization of pathogens in food</p>
<ul>
<li>Nuclear and related techniques for the detection of pathogens in food</li>
<li>Contributing to antimicrobial resistance knowledge and control through the detection and characterization of antimicrobial resistant organisms</li>
</ul>
<p>6. Standard setting and risk assessment</p>
<ul>
<li>Procedures and engagement with Codex Alimentarius</li>
<li>Irradiation dosimetry and generic treatments</li>
<li>Risk-based food safety and control</li>
<li>Labs and networks using nuclear-related methods to meet food safety/quality equivalence standards for trade</li>
</ul>
<p>7. One Health</p>
<ul>
<li>Holistic approaches to human, animal and environmental health</li>
</ul>
  </div>
</div>
  </div>
          <div id=section-3 class="field-blocks">
    <div class="entity entity-paragraphs-item paragraphs-item-text" about="" typeof="">
  <div class="content">
    
  <h2 class="field-title">
    Outcomes  </h2>

  <ul>
<li>Improved recognition of the role of nuclear and related techniques in the field of food safety and control</li>
</ul>
<ul>
<li>Increased appreciation and uptake of nuclear and related techniques to tackle key issues affecting food safety and quality to contribute to food security</li>
</ul>
<ul>
<li>Improved collaboration and networking between food safety and quality stakeholders, including national and inter-governmental organizations, NGOs, academia and the private sector</li>
</ul>
<ul>
<li>Enhanced resilience to issues impacting food safety in Member States (e.g. disruption to food control systems caused by external events such as pandemics, climate change, conflict or any other event that might affect food production, supply and distribution)</li>
</ul>
<ul>
<li>Identification of future research directions and targets for the effective integration of nuclear technologies into food safety and control systems.</li>
</ul>
  </div>
</div>
  </div>
          <div id=section-4 class="field-blocks">
    <div class="entity entity-paragraphs-item paragraphs-item-text" about="" typeof="">
  <div class="content">
    
  <h2 class="field-title">
    Audience  </h2>

  <p>Participation is solicited from scientists, researchers, laboratory analysts, policymakers, regulators, food producers and others concerned with food safety and control systems and maintaining the integrity of the food supply chain.</p>
  </div>
</div>
  </div>
      
</div>

  </div>

  
  </div>
<div class="panel-pane pane-views-panes pane-topics-landing-page-topics-related-publications"  >
  
        <h2 class="pane-title">
      Publications    </h2>
    
  
  <div class="pane-content">
    <div class="view view-topics-landing-page view-id-topics_landing_page view-display-id-topics_related_publications view-dom-id-53be52b627b15586e1403ce092ae7716">
        
  
  
      <div class="view-content">
      
<div id="views-bootstrap-grid-1" class="views-bootstrap-grid-plugin-style">
  <div class="row">
                      <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="grid">
              <div class="media">
  <a class="pull-left" href="#"><img typeof="foaf:Image" class="img-responsive" src="https://www.iaea.org/sites/default/files/styles/portrait_thumbnail_100x140/public/23/12/te-2008cov.png?itok=DMzlL1sx" width="100" height="140" /></a>
  <div class="media-body">
    <span class="dateline-published"><span class="date-display-single" property="dc:date" datatype="xsd:dateTime" content="2022-09-22T00:00:00+02:00">22 September 2022</span></span>
    <h4><a href="/publications/15188/development-of-electron-beam-and-x-ray-applications-for-food-irradiation">Development of Electron Beam and X Ray Applications for Food Irradiation</a></h4>    <p> </p>
    <p>   </p>
  </div>
</div>
            </div>
          </div>                  <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="grid">
              <div class="media">
  <a class="pull-left" href="#"><img typeof="foaf:Image" class="img-responsive" src="https://www.iaea.org/sites/default/files/styles/portrait_thumbnail_100x140/public/23/12/te-2011cov.png?itok=JzzEepgj" width="100" height="140" /></a>
  <div class="media-body">
    <span class="dateline-published"><span class="date-display-single" property="dc:date" datatype="xsd:dateTime" content="2022-09-19T00:00:00+02:00">19 September 2022</span></span>
    <h4><a href="/publications/15200/exposure-due-to-radionuclides-in-food-other-than-during-a-nuclear-or-radiological-emergency">Exposure Due to Radionuclides in Food Other Than During a Nuclear or Radiological Emergency</a></h4>    <p> </p>
    <p>   </p>
  </div>
</div>
            </div>
          </div><div class="clearfix visible-md visible-lg"></div>                  <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="grid">
              <div class="media">
  <a class="pull-left" href="#"><img typeof="foaf:Image" class="img-responsive" src="https://www.iaea.org/sites/default/files/styles/portrait_thumbnail_100x140/public/23/12/te-2002cov.png?itok=eAkEFWQ7" width="100" height="140" /></a>
  <div class="media-body">
    <span class="dateline-published"><span class="date-display-single" property="dc:date" datatype="xsd:dateTime" content="2022-06-24T00:00:00+02:00">24 June 2022</span></span>
    <h4><a href="/publications/14892/accessible-technologies-for-the-verification-of-origin-of-dairy-products-as-an-example-control-system-to-enhance-global-trade-and-food-safety">Accessible Technologies for the Verification of Origin of Dairy Products as an Example Control System to Enhance Global Trade and Food Safety</a></h4>    <p> </p>
    <p>   </p>
  </div>
</div>
            </div>
          </div>                  <div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="grid">
              <div class="media">
  <a class="pull-left" href="#"><img typeof="foaf:Image" class="img-responsive" src="https://www.iaea.org/sites/default/files/styles/portrait_thumbnail_100x140/public/23/12/te1800cov.png?itok=6-Vz6hzh" width="100" height="140" /></a>
  <div class="media-body">
    <span class="dateline-published"><span class="date-display-single" property="dc:date" datatype="xsd:dateTime" content="2016-08-26T00:00:00+02:00">26 August 2016</span></span>
    <h4><a href="/publications/11066/development-of-radiometric-and-allied-analytical-methods-and-strategies-to-strengthen-national-residue-control-programmes-for-antibiotic-and-anthelmintic-veterinary-drug-residues">Development of Radiometric and Allied Analytical Methods and Strategies to Strengthen National Residue Control Programmes for Antibiotic and Anthelmintic Veterinary Drug Residues</a></h4>    <p> </p>
    <p>   </p>
  </div>
</div>
            </div>
          </div><div class="clearfix visible-md visible-lg"></div>                  </div>

  </div>
    </div>
  
  
  
  
  
  
      <div class="text-right">
      <a href="/publications/search/7277" class="btn btn-default btn-xs">More publications&nbsp;&rarr;</a>
    </div>
  </div>
  </div>

  
  </div>
</div>
        <div class="panel-panel right margin-top-25 col-md-3 col-lg-3"><div class="panel-pane pane-entity-field pane-node-field-sidebar-resources"  >
  
      
  
  <div class="pane-content">
    
<div class="paragraphs-items paragraphs-items-field-sidebar-resources paragraphs-items-field-sidebar-resources-full paragraphs-items-full">
  
  <div class="entity entity-paragraphs-item paragraphs-item-image" about="" typeof="">
    <figure>
      
  <img typeof="foaf:Image" class="img-responsive" src="https://www.iaea.org/sites/default/files/generic-banner-video-stream.jpg" width="750" height="290" />        </figure>
</div>
  <div class="entity entity-paragraphs-item paragraphs-item-link-list" about="" typeof="">
  <div class="content">
    
  <h2 class="field-title">
    Related Resources  </h2>

<div class="paragraphs-items paragraphs-items-field-blocks paragraphs-items-field-blocks-full paragraphs-items-full">
  <ul class="related-resources field-blocks">
    <li>
  <a href="https://www.iaea.org/sites/default/files/23/06/cn-322_announcement_and_call_for_papers.pdf" class="resource-type resource-type-pdf">Announcement and Call for Papers</a></li>
    <li>
  <a href="https://www.iaea.org/sites/default/files/23/06/cn-322_poster.pdf" class="resource-type resource-type-pdf">Symposium Poster</a></li>
    <li>
  <a href="https://www.iaea.org/sites/default/files/23/06/cn-322_website_flyer.pdf" class="resource-type resource-type-pdf">Symposium Flyer</a></li>
    <li>
  <a href="https://www.iaea.org/services/key-programmes/atoms4food" class="resource-type resource-type-html-link">Atoms4Food</a></li>
    <li>
  <a href="https://www.iaea.org/newscenter/news/crp-success-story-enhancing-food-safety-through-improved-testing-for-mixed-contaminants-and-residues" class="resource-type resource-type-html-link">CRP Success story: Enhancing food safety | IAEA</a></li>
  </ul>
</div>

  </div>
</div>
  <div class="entity entity-paragraphs-item paragraphs-item-text" about="" typeof="">
  <div class="content">
    
  <h2 class="field-title">
    Conference App  </h2>

  <a href="https://itunes.apple.com/us/app/iaea-conferences-and-meetings/id1033279470?mt=8"><img alt="Download on the App Store" src="/sites/default/files/app-store-badge.svg" width="125"></a> <a href="https://play.google.com/store/apps/details?id=com.superevent.iaea&hl=en"><img alt='Get it on Google Play' src="/sites/default/files/google-play-badge.svg" width="125"/></a>  </div>
</div>
</div>

  </div>

  
  </div>
</div>
          </div>
  
  
  
  
  
  
</div>

</section>
  </div>
      </div>
    </div>
  </div>
</div>





  <div class="section section-doormat">
    <div class="container">
      <div class="row">
          <div class="region region-doormat">
    <section id="block-block-13" class="block block-block">

      
    <div class="col-md-2"><!-- col 1 -->
    <h4 class="block-title">More on the IAEA</h4>
	<ol class="field-resourcesblock-resources list-unstyled">
	  <li><a href="/contact" class="resource-type resource-type-html-link">Contact</a></li>
          <li><a href="/about/privacy-policy" class="resource-type resource-type-html-link">Privacy Policy</a></li>
	  <li><a href="/about/logo-usage-guidelines" class="resource-type resource-type-html-link">Logo Usage Guidelines</a></li>
	</ol>
    </div>
  </div><!-- /col 1 -->

  <div class="col-md-2"><!-- col 2 -->
    <h4 class="block-title">Scientific resources</h4>
	<ol class="field-resourcesblock-resources list-unstyled">
	  <li><a href="/resources/databases/nucleus" class="resource-type resource-type-html-link">NUCLEUS</a></li>
	  <li><a href="/resources/databases/international-nuclear-information-system-inis" class="resource-type resource-type-html-link">International Nuclear Information System (INIS)</a></li>
	  <li><a href="/resources/databases/power-reactor-information-system-pris" class="resource-type resource-type-html-link">Power Reactor Information System (PRIS)</a></li>
	  <li><a href="/resources/databases/nuclear-data-services" class="resource-type resource-type-html-link">Nuclear Data Services (NDS)</a></li>
	</ol>
  </div><!-- /col 2 -->

  <div class="col-md-2"><!-- col 3 -->
    <h4 class="block-title">Resources</h4>
	<ol class="field-resourcesblock-resources list-unstyled">
	  <li><a href="/about/employment" class="resource-type resource-type-html-link">Employment</a></li>
	  <li><a href="/about/employment/gender-at-the-iaea" class="resource-type resource-type-html-link">Gender at the IAEA</a></li>
	  <li><a href="/press" class="resource-type resource-type-html-link">Press</a></li>
	</ol>
  </div><!-- /col 13 -->

  <div class="col-md-2"><!-- col 4 -->
    <h4 class="block-title">Documents</h4>
	<ol class="field-resourcesblock-resources list-unstyled">
	  <li><a href="/publications/documents/infcircs/" class="resource-type resource-type-html-link">Information Circulars</a></li>
	  <li><a href="/resources/general-interest-material/treaties" class="resource-type resource-type-html-link">Treaties</a></li>
	  <li><a href="/resources/safety-standards" class="resource-type resource-type-html-link">Standards and guides</a></li>
	  <li><a href="/topics/additional-protocol" class="resource-type resource-type-html-link">Safeguards and Additional Protocol</a></li>
	</ol>
  </div><!-- /col 4 -->
</section>
<section id="block-block-14" class="block block-block">

      
  <!-- col 5 -->
<div class="col-md-4">
  <h4 class="block-title">Stay in touch</h4>
  <div class="social-media-links">
    <div class="row">
      <div class="col-md-12 hidden-lg hidden-md hidden-sm text-left">
        <a href="https://www.facebook.com/iaeaorg" title="Facebook"><i class="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
        <a href="https://twitter.com/iaeaorg" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" class="x-twitter">
                    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg></a>
        <a href="https://www.instagram.com/iaeaorg/" title="Instagram"><i class="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
        <a href="http://www.youtube.com/user/IAEAvideo" title="YouTube"><i class="fa fa-3x fa-fw fa-youtube text-inverse"></i></a>
        <a href="https://www.linkedin.com/company/iaea" title="LinkedIn"><i class="fa fa-3x fa-fw fa-linkedin text-inverse"></i></a>
        <a href="https://www.flickr.com/photos/iaea_imagebank/collections" title="Flickr"><i class="fa fa-3x fa-fw fa-flickr text-inverse"></i></a>
        <a href="https://open.spotify.com/show/2kGwobWoSTEE5eX0JgGxIK" title="Spotify"><i class="fa fa-3x fa-fw fa-spotify text-inverse"></i></a>
        <a href="https://podcasts.apple.com/us/podcast/nuclear-explained/id1604870670" title="Apple Podcast"><i class="fa fa-3x fa-fw fa-apple text-inverse"></i></a>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaWFlYS5vcmcvcG9kY2FzdHMvbnVjbGVhcmV4cGxhaW5lZC54bWw" title="Google Podcast"><i class="fa fa-3x fa-fw fa-google text-inverse"></i></a>
        <a href="/feeds" title="RSS Feeds"><i class="fa fa-3x fa-fw fa-rss text-inverse"></i></a>
        <a href="/contact" title="Contact IAEA"><i class="fa fa-3x fa-fw fa-envelope text-inverse"></i></a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 hidden-xs text-left">
        <a href="https://www.facebook.com/iaeaorg" title="Facebook"><i class="fa fa-2x fa-fw fa-facebook text-inverse"></i></a>
        <a href="https://twitter.com/iaeaorg" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" class="x-twitter">
                    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg></a>
        <a href="https://www.instagram.com/iaeaorg/" title="Instagram"><i class="fa fa-2x fa-fw fa-instagram text-inverse"></i></a>
        <a href="http://www.youtube.com/user/IAEAvideo" title="YouTube"><i class="fa fa-2x fa-fw fa-youtube text-inverse"></i></a>
        <a href="https://www.linkedin.com/company/iaea" title="LinkedIn"><i class="fa fa-2x fa-fw fa-linkedin text-inverse"></i></a>
        <a href="https://www.flickr.com/photos/iaea_imagebank/collections" title="Flickr"><i class="fa fa-2x fa-fw fa-flickr text-inverse"></i></a>
        <a href="https://open.spotify.com/show/2kGwobWoSTEE5eX0JgGxIK" title="Spotify"><i class="fa fa-2x fa-fw fa-spotify text-inverse"></i></a>
        <a href="https://podcasts.apple.com/us/podcast/nuclear-explained/id1604870670" title="Apple Podcast"><i class="fa fa-2x fa-fw fa-apple text-inverse"></i></a>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaWFlYS5vcmcvcG9kY2FzdHMvbnVjbGVhcmV4cGxhaW5lZC54bWw" title="Google Podcast"><i class="fa fa-2x fa-fw fa-google text-inverse"></i></a>
        <a href="/feeds" title="RSS Feeds"><i class="fa fa-2x fa-fw fa-rss text-inverse"></i></a>
        <a href="/contact" title="Contact IAEA"><i class="fa fa-2x fa-fw fa-envelope text-inverse"></i></a>
      </div>
    </div>
  </div>
</div>
<!-- /col 5 -->
</section>
<section id="block-block-12" class="block block-block">

      
  <div class="col-md-4"><!-- col 6 -->
<h4 class="margin-top-50">Newsletter</h4>
<!-- Begin MailChimp Signup Form -->
<style>
 .region-doormat #mc_embed_signup input.mce_inline_error {
 border-color: #ff5454;
 }

 .region-doormat #mc_embed_signup div.mce_inline_error {
 color: #ff5454;
 background-color: #555;
 padding: 10px 0 0 0;
 }
</style>
<div id="mc_embed_signup">
<form action="https://iaea.us6.list-manage.com/subscribe/post?u=958dfcbed8f359a6db0bb9c87&amp;id=623f55c917" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
<div id="mc_embed_signup_scroll" style="overflow: hidden; position: relative;">
<div class="mc-field-group">
<div class="input-group">
<input type="email" value="" name="EMAIL" class="required email form-control" placeholder="Email address" id="mce-EMAIL">
<span class="input-group-btn">
<button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary">Subscribe</button>
</span>
</div>
</div>
<div id="mce-responses" class="clear">
<div class="response" id="mce-error-response" style="display:none"></div>
<div class="response" id="mce-success-response" style="display:none"></div>
</div>
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_958dfcbed8f359a6db0bb9c87_623f55c917" tabindex="-1" value="">
                    <input type="hidden" name="group[20341][2048]" value="2048">
                </div>
</div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script type='text/javascript'>(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text'; }(jQuery)); var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
</div><!-- /col 6 -->

</section>
  </div>
      </div>
    </div>
  </div>

<footer class="section section-footer ">
        <div class="region region-footer">
    <section id="block-block-7" class="block block-block clearfix">

      
  <div class="container">
  <div class="row">
    <div class="col-sm-6">
      <h4>International Atomic Energy Agency</h4>
      <p>Vienna International Centre, PO Box 100
        <br>A-1400 Vienna, Austria
        <br>Telephone: +43 (1) 2600-0, Facsimile +43 (1) 2600-7</p>
    </div>
    <div class="col-sm-6">
    </div>
  </div>
  <div class="row bottom-line">
    <div class="col-md-6">
      <p>
        <i class="fa fa-fw fa-envelope"></i>
        <a href="/contact/official-mail">Official Email</a>
      </p>
    </div>
    <div class="col-md-6">
      <p class="pull-right">&copy; 1998–2023 IAEA, All rights reserved.
        <a href="/about/terms-of-use">Terms of Use</a>
      </p>
    </div>
  </div>
</div>
</section>
  </div>
  </footer>
  <script type="text/javascript" src="/sites/default/files/advagg_js/js__GM3GJPR36rRIz0TRkjC5OQwrioSyN9aoYRivDhCO_AM__qAl84FcCv2jyN22yFGS5Oc85cjd9zKX6p_cFNLGhe-M__QcFV4hc4sJpEEGYwqJ9kFoowTMnwpDsNw0DcDoPHSG8.js" async="async"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--

      google.load('search', '1');
      google.setOnLoadCallback( function() {
        var searchBlockField = jQuery('#search-block-form input[name="search_block_form"]');
        google.search.CustomSearchControl.attachAutoCompletion('004828748078731094376:m_jpm98tdns', searchBlockField.get(0), 'search-block-form');
      });
//--><!]]>
</script>
<script type="text/javascript" src="/sites/default/files/advagg_js/js__i11V-7AETPhfL9YzRpXBpECwVkYyQ_ahu2eHxES_mK0__S79mhsO6q7fWONLNt9XSEZx-JmiQeAEtuPkuVxIEjpY__QcFV4hc4sJpEEGYwqJ9kFoowTMnwpDsNw0DcDoPHSG8.js"></script>
    <a href="#" class="btn btn-default btn-sm go-top"><i class="fa fa-chevron-up fa-fw"></i></a>
<script>(function(){var js = "window['__CF$cv$params']={r:'852ab68cb9f1bafa',t:'MTcwNzQ2NzAzNS42NDcwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>
