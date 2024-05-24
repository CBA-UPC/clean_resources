/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function(){var u=new Date().getTime();var z=null;var O=false;var B=10;var I=false;var a=true;var w=null;var E=1000*60*60*3;var q=document;var C=window;var h=0;var l=0;var A=false;var r=function(){return""};var G=[];ar d=true;ction b(){return"function"===typeof jwplayer}r f={AUDIO:"Audio",VIDEO:"Video"};var F={getLocation:setLocation:function(Q){this.location=Q},makeUrlAbsolute:;var N={getCurrentTime:roundTimeToSeconds:isNumber:isArray:indexOfArray:getTimeScriptLoaded:generateUniqueId:trim:getQueryParameter:isDocumentOffScreen:roundUp:;var m={getAttribute:setAttribute:isMediaIgnored:getMediaResource:getMediaTitle:hasCssClass:getFirstParentWithClass:isFullscreen:;piwikTrackers=[];j.prototype.disable=function(){this.disabled=true};j.prototype.reset=function(){this.id=N.generateUniqueId();this.mediaTitle=null;this.timeToInitialPlay=null;this.width=null;this.height=null;this.fullscreen=false;this.timeout=null;this.watchedTime=0;this.lastTimeCheck=null;this.isPlaying=false;this.isPaused=false;this.mediaProgressInSeconds=0;this.mediaLengthInSeconds=0;this.disabled=false;this.numPlaysSameMedia=0;this.numPlaysSameMediaOffScreen=0;this.viewedSegments=[];this.trackedSegments=[]};j.prototype.setResource=function(Q){this.resource=Q};j.prototype.getResource=function(){return this.resource};j.prototype.makeRequestUrlFromParams=j.prototype.trackEvent=function(W){if(this.disabled){return}if(!z){z=N.getCurrentTime()}else{if((N.getCurrentTime()-z)>E){this.disable();return}}var Q=P();var R="Media"+this.type;var T=this.mediaTitle||this.resource;var U=this.makeRequestUrlFromParams({e_c:R,e_a:W,e_n:T,e_v:parseInt(Math.round(this.mediaProgressInSeconds),10),ca:"1"});if(Q&&Q.length){var S=0,V;for(S;S<Q.length;S++){V=Q[S];if(V&&V.MediaAnalytics&&V.MediaAnalytics.isTrackEventsEnabled()){if("function"===typeof V.queueRequest&&"function"===typeof V.disableQueueRequest){V.queueRequest(U)}else{V.trackRequest(U)}}}}else{if(typeof C._paq==="undefined"){C._paq=[]}C._paq.push(["trackRequest",U]);e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")}e("trackEvent",R,T,W)};j.prototype.trackProgress=function(U,W,V,R,S,Y,ah,Z,ae,aa,X,Q,ac){if(this.disabled){return}if(!z){z=N.getCurrentTime()}else{if((N.getCurrentTime()-z)>E){this.disable();return}}if(this.isPlaying&&!Y){Y=1
}var ag={ma_id:U,ma_ti:W!==null?W:"",ma_pn:V,ma_mt:R,ma_re:S,ma_st:parseInt(Math.floor(Y),10),ma_ps:parseInt(ah,10),ma_le:Z,ma_ttp:ae!==null?ae:"",ma_w:aa?aa:"",ma_h:X?X:"",ma_fs:Q?"1":"0",ma_se:ac.join(","),ca:"1"};var ab=this.makeRequestUrlFromParams(ag);var af=P();if(af&&af.length){var ad=0,T;for(ad;ad<af.length;ad++){T=af[ad];if(T&&T.MediaAnalytics&&T.MediaAnalytics.isTrackProgressEnabled()){if("function"===typeof T.queueRequest&&"function"===typeof T.disableQueueRequest){T.queueRequest(ab)}else{T.trackRequest(ab)}}}}else{if(typeof C._paq==="undefined"){C._paq=[]}C._paq.push(["trackRequest",ab]);e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")}if(O){e("trackProgress",n().stringify(ag))}};j.prototype.setFullscreen=j.prototype.setWidth=function(Q){if(N.isNumber(Q)){this.width=parseInt(Q,10)}};j.prototype.setHeight=j.prototype.setMediaTitle=function(Q){this.mediaTitle=Q};j.prototype.getMediaTitle=function(){return this.mediaTitle};j.prototype.setMediaProgressInSeconds=j.prototype.getMediaProgressInSeconds=function(){return this.mediaProgressInSeconds};j.prototype.setMediaTotalLengthInSeconds=j.prototype.getMediaTotalLengthInSeconds=function(){return this.mediaLengthInSeconds};j.prototype.play=j.prototype.startWatchedTime=j.prototype.stopWatchedTime=j.prototype.seekStart=function(){if(this.isPlaying){this.stopWatchedTime()}};j.prototype.seekFinish=j.prototype.pause=j.prototype.finish=j.prototype.trackUpdate=j.prototype.update=var c={players:{},registerPlayer:removePlayer:getPlayer:getPlayers:scanForMedia:;var M=function(ac,S){if(!ac){return}if(!C.addEventListener){return}if(ac.hasPlayerInstance){return}ac.hasPlayerInstance=true;var ah=f.VIDEO===S;var V=F.makeUrlAbsolute(ac.currentSrc);
var Q=m.getMediaResource(ac,V);var W="html5"+S.toLowerCase();if(typeof paella==="object"&&typeof paella.opencast==="object"){W="paella-opencast"}else{if(m.getFirstParentWithClass(ac,"video-js",1)){W="video.js"}else{if(m.hasCssClass(ac,"jw-video")){W="jwplayer"}else{if(m.getFirstParentWithClass(ac,"flowplayer",3)){W="flowplayer"}}}}var U=new j(W,S,Q);G.push(U);c,U);X();ai();R();Y();var T=false;var aa=false;var ab=null;if(ac.currentSrc){ab=ac.currentSrc}function ae(ao,at){if(b()&&!at.getMediaTitle()){var aq=m.getFirstParentWithClass(ao,"jwplayer",3);if(!aq){aq=m.getFirstParentWithClass(ao,"jwplayer-video",3);if(aq&&"undefined"!==typeof aq.children&&aq.children&&aq.children.length&&aq.children[0]){aq=aq.children[0]}}if(aq){try{var au=jwplayer(aq);if(au&&au.getPlaylistItem){var av=au.getPlaylistItem();if(av&&av.matomoTitle){at.setMediaTitle(av.matomoTitle)}else{if(av&&av.piwikTitle){at.setMediaTitle(av.piwikTitle)}else{if(av&&av.title){at.setMediaTitle(av.title)}}}}}catch(ap){e(ap)}}}if(k()&&!at.getMediaTitle()){var am=m.getFirstParentWithClass(ao,"flowplayer",4);if(am){var au=flowplayer(am);if(au&&au.video&&au.video.matomoTitle){at.setMediaTitle(au.video.matomoTitle)}else{if(au&&au.video&&au.video.piwikTitle){at.setMediaTitle(au.video.piwikTitle)}else{if(au&&au.video&&au.video.title){at.setMediaTitle(au.video.title)
}}}}}if(!at.getMediaTitle()){var an=q.getElementById("engage_basic_description_title");if(an&&an.innerText){var ar=N.trim(an.innerText);if(ar){at.setMediaTitle(ar)}}else{if(typeof paella==="object"&&typeof paella.opencast==="object"&&typeof paella.opencast._episode==="object"&&paella.opencast._episode.dcTitle){var ar=N.trim(paella.opencast._episode.dcTitle);if(ar){at.setMediaTitle(ar)}}}}o(ao,at)}ag=null;if(ac.loop){ag=0}var Z=0;var aj=false;if(ac.loop&&ac.autoplay&&ac.muted){aj=true}ac.addEventListener("playing",true);ac.addEventListener("durationchange",R,true);ac.addEventListener("loadedmetadata",af,true);ac.addEventListener("loadeddata",af,true);ac.addEventListener("pause",true);ac.addEventListener("seeking",function(){if(ac.seeking){Y();var am=parseInt(U.getMediaProgressInSeconds(),10);if((ag===null||ag!==am)&&Z<25){ag=am;U.trackEvent("seek");Z++}}},true);ac.addEventListener("ended",true);ac.addEventListener("timeupdate",true);ac.addEventListener("seeking",function(){U.seekStart()},true);ac.addEventListener("seeked",true);if(ah){ac.addEventListener("resize",af,true);C.addEventListener("resize",false)}U.timeout=setTimeout(1500)};M.scanForMedia=var J=function(S,Z){if(!S||!C.addEventListener){return}if(S.hasPlayerInstance||!b()){return}var aa=m.getFirstParentWithClass(S,"jwplayer",3);if(!aa){return}var ae=jwplayer(aa);if(!ae||!ae.getItem||"undefined"===(typeof ae.getItem())){return}S.hasPlayerInstance=true; ad=ab(ae);var Q=F.makeUrlAbsolute(ad);var T=m.getMediaResource(S,Q);
var ac=new j("jwplayer",Z,T);ac.setMediaTitle(R(ae));ac.setWidth(ae.getWidth());ac.setHeight(ae.getHeight());ac.setFullscreen(ae.getFullscreen());G.push(ac);var U=ae.getDuration();if(U){ac.setMediaTotalLengthInSeconds(U)}var V=false,X=ad;var af=null,W=0;ae.on("play",true);ae.on("playlistItem",true);ae.on("pause",true);ae.on("complete",function(){ac.finish()},true);ae.on("time",true);ae.on("seek",true);ae.on("seeked",function(){var ag=ae.getPosition();if(ag){ac.setMediaProgressInSeconds(ag)}var ai=ae.getDuration();if(ai){ac.setMediaTotalLengthInSeconds(ai)}ac.seekFinish();var ah=parseInt(ac.getMediaProgressInSeconds(),10);
if((af===null||af!==ah)&&W<25){af=ah;ac.trackEvent("seek");W++}},true);ae.on("resize",function(){ac.setWidth(ae.getWidth());ac.setHeight(ae.getHeight());ac.setFullscreen(ae.getFullscreen())},true);ae.on("fullscreen",false);ac.trackUpdate()};J.scanForMedia=var p=function(T,W){if(!T){return}if(!C.addEventListener){return}if(T.playerInstance){return}T.playerInstance=true;var Q=m.getAttribute(T,"src");var S=m.getMediaResource(T,null);var Z=new j("vimeo",W,S);Z.setWidth(T.clientWidth);Z.setHeight(T.clientHeight);Z.setFullscreen(m.isFullscreen(T));G.push(Z);C.addEventListener("resize",function(){Z.setWidth(T.clientWidth);Z.setHeight(T.clientHeight);Z.setFullscreen(m.isFullscreen(T))},false);
var Y=m.getMediaTitle(T);var U=!m.getAttribute(T,"data-piwik-title")&&!m.getAttribute(T,"data-matomo-title");if(Y){Z.setMediaTitle(Y)}T.matomoNumSeekEvents=0;T.matomoSeekLastTime=null;var R=function(ac){if(!(/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/).test(ac.origin)){return false}if(!ac||!ac.data){return}if(T.contentWindow&&ac.source&&T.contentWindow!==ac.source){return}var ad=ac.data;if("string"===typeof ad){ad=n().parse(ac.data)}if(("event" in ad&&ad.event==="ready")||("method" in ad&&ad.method==="ping")){if(V==="*"){V=ac.origin}if(!T.isVimeoReady){T.isVimeoReady=true;X("addEventListener","play");X("addEventListener","pause");X("addEventListener","finish");X("addEventListener","seek");X("addEventListener","seeked");X("addEventListener","playProgress");X("getVideoTitle")}return}if("method" in ad){e("vimeoMethod",ad.method);switch(ad.method){case"getVideoTitle":if(ad.value&&U){Z.setMediaTitle(ad.value)}else{if(U){o(T,Z)}}U=true;Z.trackUpdate();break;case"getPaused":if(ad.value){Z.pause()
}}return}if("event" in ad){var aa=ad.event;e("vimeoEvent",aa);if(ad&&ad.data){ad=ad.data}if(Z&&ad&&ad.seconds){if(Z.getMediaProgressInSeconds()===ad.seconds&&(aa==="playProgress"||aa==="timeupdate")){return}Z.setMediaProgressInSeconds(ad.seconds)}if(Z&&ad&&ad.duration){Z.setMediaTotalLengthInSeconds(ad.duration)}switch(aa){case"play":Z.play();break;case"timeupdate":case"playProgress":if(Z._isSeeking){Z._isSeeking=false;Z.seekFinish()}Z.update();break;case"seek":Z.seekStart();Z._isSeeking=true;break;case"seeked":var ab=parseInt(Z.getMediaProgressInSeconds(),10);if((T.matomoSeekLastTime===null||T.matomoSeekLastTime!==ab)&&T.matomoNumSeekEvents<25){T.matomoSeekLastTime=ab;Z.trackEvent("seek");T.matomoNumSeekEvents++}break;case"pause":if(ad&&ad.seconds&&ad&&ad.duration&&ad.seconds===ad.duration){e("ignoring pause event because video is finished");break}setTimeout(700);break;case"finish":Z.finish();break}}};C.addEventListener("message",R,true);var V="*";Z._isSeeking=false;
("ping")};p.scanForMedia=var t=t.scanForMedia=var D=D.scanForMedia=c.registerPlayer("html5",M);c.registerPlayer("vimeo",p);c.registerPlayer("youtube",t);c.registerPlayer("jwplayer",J);c.registerPlayer("soundcloud",D);function y(Q){if("undefined"!==typeof Q.MediaAnalytics){return}Q.MediaAnalytics={enableEvents:true,enableProgress:true,disableTrackEvents:function(){this.enableEvents=false},enableTrackEvents:function(){this.enableEvents=true},isTrackEventsEnabled:function(){return a&&this.enableEvents},disableTrackProgress:function(){this.enableProgress=false},enableTrackProgress:isTrackProgressEnabled:;
/*!!! mediaTrackerReadyHook */
;Piwik.trigger("MediaAnalytics.TrackerInitialized",[Q])}ar x=false;var i=false;nction L(){if("object"===typeof C&&"object"===typeof C.Piwik&&"object"===typeof C.Piwik.MediaAnalytics){return}if("object"===typeof C&&!C.Piwik){return}Piwik.MediaAnalytics={utils:N,url:F,element:m,players:c,MediaTracker:j,mediaType:f,scanForMedia:setPingInterval:removePlayer:function(S){c.removePlayer(S)},addPlayer:disableMediaAnalytics:function(){a=false},enableMediaAnalytics:function(){a=true},setMatomoTrackers:setPiwikTrackers:setMediaTitleFallback:getMatomoTrackers:function(){return P()},getPiwikTrackers:isMediaAnalyticsEnabled:setMaxTrackingTime:enableDebugMode:function(){O=true}};Piwik.addPlugin("MediaAnalytics",{unload:);if(C.Piwik.initialized){var Q=Piwik.getAsyncTrackers();var R=0;for(R;R<Q.length;R++){y(Q[R])}Piwik.on("TrackerSetup",y);
Piwik.retryMissedPluginCalls();v();K();Piwik.on("TrackerAdded",K)}else{Piwik.on("TrackerSetup",y);Piwik.on("MatomoInitialized",}}if("object"===typeof C.Piwik){L()}else{if("object"!==typeof C.matomoPluginAsyncInit){C.matomoPluginAsyncInit=[]}C.matomoPluginAsyncInit.push(L)}})();