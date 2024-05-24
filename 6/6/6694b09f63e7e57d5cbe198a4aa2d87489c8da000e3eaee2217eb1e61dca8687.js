(function(){/*

 Perfect Market Widget Platform Library
 Copyright (C) 2011 Perfect Market, Inc.
 All Rights Reserved

 NO PERMISSION IS GRANTED TO COPY OR USE CODE EXCEPT AS IS 
 NECESSARY TO DISPLAY ADS IN THE NORMAL COURSE OF BROWSING A WEB SITE

 CONFIDENTIAL COPYRIGHTED AND PATENTED MATERIAL
 US PATENTS  7,610,279  7,644,072 7,617,200 and 7,627,565
 OTHER PATENTS PENDING

 DO NOT DECOMPILE OR REVERSE ENGINEER
*/
ideoElem=
TBVideoEvents=
TBOptimizationAutoPlayInfoFromXPathAndURL=
window.TBOptimizationAutoPlayInfoFromXPathAndURL=TBOptimizationAutoPlayInfoFromXPathAndURL;var _pmk=_pmk||{};window._pmk=_pmk;
TBWidgetVideoPlayer=
TBGenericVideoModule=TBOtherPlayer=o();
TBOtherPlayer.prototype=new TBGenericVideoModule("TBOtherPlayer",[{n:"//iframe[contains(@src, 'youtube.com/embed')]",C:"iframe",si:"msn",Ua:"iframe"},{n:"//div[contains(@class, 'fb-video')]//iframe",C:"iframe"},{n:"//video[contains(@class, 'jw-video')]",C:"div",si:"msn",ta:[{n:'//div[contains(@class, "-playlist-")]/a[contains(@class, "playlist-item")]/*',C:"div"},{n:'//div[contains(@class, "jwplayer")]',C:"div"},{n:'//div[contains(@class, "jw-controlbar")]',C:"div"},{n:'//div[contains(@class, "jw-controls-right")]',
C:"div"}]},{n:"//span[contains(@class, 'jwmain')]//video/../..",C:"div",ta:[{n:"//div[contains(@class, 'jwdisplay') and contains(@id, 'js-mediaplayer') and not(contains(@id, '_button'))]",C:"div"}]},{n:"//object[contains(@data, 'jwplayer')]",C:"object",Ua:"jwPlayer",ta:[{n:'//div[contains(@class, "jw-controlbar")]',C:"object"},{n:'//div[contains(@class, "jw-controls-right")]',C:"object"}]},{n:"//object[contains(@id, 'js-mediaplayer/')]",C:"object",Ua:"jwPlayer"},{n:"//iframe[contains(@src, '/pdkplayer')]",
C:"iframe"},{n:"//div[contains(concat(' ', @class, ' '), ' videoPlayButton ')]",C:"sb",Ca:"player-sb",jb:[{xpath:"//div[contains(@class, 'tpRow')]//div[contains(@class, 'tpPlay')]",attr:"div",controlsXPaths:[{xpath:"//div[contains(concat(' ', @class, ' '), ' tpScrubber ')]",attr:"div"},{xpath:"//div[contains(concat(' ', @class, ' '), ' tpMute ')]",attr:"div"},{xpath:"//div[contains(concat(' ', @class, ' '), ' tpFullScreen ')]",attr:"div"}]},{xpath:"//div[contains(concat(' ', @class, ' '), ' tpPlayer ')]//object",
attr:"object"}]},{n:"//div[contains(concat(' ', @class, ' '), ' tpPlayer ')]//object",C:"object"},{n:'//div[contains(@id, "ndn-video-player")]',C:"div"},{n:'//div[contains(@id, "ndn-widget-embed") and contains(@class, "ndn_videoPlayer_largeView")]',C:"div"}]);TBVideoMetaData=
TBVideo=window.TBVideo=TBVideo;
TBVideoDetectionYoutubeAPI=window.TBVideoDetectionYoutubeAPI=TBVideoDetectionYoutubeAPI;
TBOptimizationTouchAndClickEventTracker=window.TBOptimizationTouchAndClickEventTracker=TBOptimizationTouchAndClickEventTracker;_pmk=_pmk||{};window._pmk=_pmk;
TBWidgetStorage=window.TBWidgetStorage=TBWidgetStorage;
PMFileLoader={yd:null,rc:null,w:load:Mi:;
PMPage={Wi:!1,bd:null,data:{},type:"",Sd:{},F:{},ek:null,ej:null,Aa:nb:xg:ya:nj:qg:rg:pg:sg:vf:Ch:vg:wg:Da:xf:aj:Ig:Jh:Xg:ig:Vf:zf:zi:Gg:Wh:gg:fg:Yf:la:function(a){if(null!==a){var b=pmglb.ca().getElementsByTagName("meta");if(null!=b)for(var c=0;c<b.length;c++)if(b[c]&&b[c].getAttribute("property")&&b[c].getAttribute("property").toLowerCase()==a.toLowerCase())return b[c].content}return null},Fc:ug:ng:tg:xa:
ii:ci:ei:pi:Lg:Og:function(){pmglb.page.ga();var a=pmglb.url().canonical,b=pmglb.f.g();if(!pmglb.empty(b.oa))for(var c in b.oa)if(RegExp(b.oa[c],"i").test(a))return c;return null},Ng:fc:kd:ga:Mg:$h:F:{Jd:"tags",data:[],w:Da:Pa:getData:domain:{pb:function(){var a=pmglb.K.canonical,b=pmglb.page.F.Pa(),c="",d="";!pmglb.empty(b)&&!pmglb.empty(b.domain)&&!pmglb.empty(b.domain["page url"])&&!pmglb.empty(a)&&(d=b.domain["page url"],pmglb.empty(d)||(a=RegExp(d,"i").exec(a),pmglb.empty(a)||(c=a.slice(1).join(" "))));return!pmglb.empty(c)?c:""}},Wa:{pb:,gd:{pb:zg:Ag:,xa:,jk:update:w:;
PMTemplate={Wf:"_tb_t",qk:"pmtn",P:null,qd:null,A:null,w:ni:function(){pmglb.f.qd=pmglb.f.g().qd},Te:function(){pmglb.f.A=pmglb.f.g().A},ec:g:lj:get:oj:;_pmk=_pmk||{};window._pmk=_pmk;var _gaq=_gaq||[];
PMTracking=window.PMTracking=PMTracking;
PMUniversalGA=PMMdotLabs=
PMComScore=_pmk=_pmk||{};window._pmk=_pmk;
PMPublisher=_pmk=_pmk||{};window._pmk=_pmk;
TBOptimization=window.TBOptimization=TBOptimization;_pmk=_pmk||{};window._pmk=_pmk;JSON=window.JSON||{};JSON2=window.Ti||{};if("undefined"===typeof JSON2||null===JSON2||!JSON2)JSON2=JSON;
PMGlobal=
Object.keys=Object.keys||);
window.pmws_getlocation_done=pmglb=window.Bh||null;pmdebug=window.Wj||null;pmws=window.pmws||null;pmad=window._tb_pmad||null;if(null==pmglb){pmglb=new PMGlobal;window.Bh=pmglb;if(!window.console&&"1"==pmglb.wa("_tb_u"))window.console=new pmglb.w()}else if(typeof window._tb_optol!==pmglb.b&&null!==window._tb_optol){var x=window._tb_optol;delete window._tb_optol;x&&pmglb.ec()}var JSON2;JSON2||(JSON2={});
(();})();
