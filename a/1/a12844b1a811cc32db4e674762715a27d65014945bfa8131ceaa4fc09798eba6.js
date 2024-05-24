
/* 
   detikVideo Object for Portal-Developers
*/

// Chapter 1: Beginning
if (typeof jQuery !== 'function') {
  var warnJQueryUndefinedStr = 'detikVideo.portal.js needs jQuery 1.1x.x to run properly!';
  console.log(warnJQueryUndefinedStr);  
  alert(warnJQueryUndefinedStr);
  throw new Error(warnJQueryUndefinedStr); // this line will stop the script
};
if ($.type(detikVideo) !== 'object') {
  var warnDetikVideoUndefinedStr = 'detikVideo.portal.js needs detikVideo.core.js to run properly!';
  console.log(warnDetikVideoUndefinedStr);  
  alert(warnDetikVideoUndefinedStr);
  throw new Error(warnDetikVideoUndefinedStr); // this line will stop the script
};

// analytic dataLayer for Google
if (typeof window['dataLayer'] === 'undefined') {
  var dataLayer = [];
};



// Chapter 2: detikVideo Context as ctx

(function(ctx) {

  'use strict';

  ctx.portal = {};
  ctx.portal.portalVersion     = '2.0.6';
  ctx.portal.portalHeaderInfo  = '[detikVideo.portal]';
  ctx.portal.playerName        = 'detikVideo';
  ctx.portal.playerInstance    = null;

  ctx.portalconf = {
    position: '',
    other: ''
  };

  //you can also access ctx.scriptconf.*
  //you can also access ctx.vjsconf.* , etc
  //you can also access player instance with ctx.vars.player as long as it is an object
  //you can also access hlsjs instance with ctx.vars.ctx.portal.hlsjsInstance as long as it is an object
  //you can also access adsManager instance with ctx.vars.imaAdsManager as long as it is an object
  //you can also access adsRenderingSettings instance with ctx.vars.imaAdsRenderingSettings as long as it is an object

  ctx.portal.detikAnalyticImgUrl = 'https://analytic20.detik.com/detikanalytic/video/__dtm.gif';
  ctx.portal.detikAnalyticImgPush = [];
  ctx.portal.detikAnalyticUserAgentStr = '';

  ctx.portal.channel           = '';
  ctx.portal.live              = false;
  ctx.portal.portalEnableGoogleAnalytic = false;
  ctx.portal.portalEnableDetikAnalytic  = false;
  ctx.portal.portalEnableVKAnalytic     = false;
  ctx.portal.enableVjsEventBitrateChange= false;
  ctx.portal.enableVjsEventEndMinusX    = false;
  ctx.portal.endMinusX         = 1; // in seconds
  ctx.portal.hlsjsInstance     = null;

  ctx.portal.title             = '';
  ctx.portal.labelStr          = '';
  ctx.portal.categoryEvent     = {};
  ctx.portal.eventStr          = '';
  ctx.portal.categoryStr       = '';
  ctx.portal.vk_eventStr       = '';
  ctx.portal.vk_categoryStr    = '';
  ctx.portal.programId         = '';
  ctx.portal.videoId           = '';
  ctx.portal.videoUrl          = document.location.href;
  ctx.portal.dtmacStr          = '';
  ctx.portal.dtmacsubStr       = '';
  ctx.portal.dtmaStr           = '';
  ctx.portal.dtmaCookieStr     = null;
  ctx.portal.dtklucStr         = '';
  ctx.portal.publishDate       = null;

  ctx.portal.dtmr              = document.referrer;
  ctx.portal.dtmhn             = '';

  ctx.portal.isFirstPlay       = false;
  ctx.portal.lastCurrentTime   = 0;

  ctx.portal.isPlaying0Sec = false;
  ctx.portal.isPlaying3Sec = false;
  ctx.portal.isPlaying30Sec= false;
  ctx.portal.isPlaying25Percent = false;
  ctx.portal.isPlaying50Percent = false;
  ctx.portal.isPlaying75Percent = false;

  ctx.portal.relatedVideoModalClosedLock = false;
  ctx.portal.relatedVideoModalOpenedLock = false;

  ctx.portal.vjsTimeUpdateLog  = 0;
  ctx.portal.vjsTimeUpdateLogMax = 15;
  ctx.portal.vjsProgressLog    = 0;
  ctx.portal.vjsProgressLogMax   = 15;

  ctx.portal.docReferrer = (window.location !== window.parent.location) ? document.referrer : document.location.href;
  ctx.portal.metaArticleId = '';
  ctx.portal.position = '';
  ctx.portal.metaArticleId2 = null;

  ctx.portal.enablePortalPlayAnalyticWaitingMetaArticleId = false;
  ctx.portal.portalVjsPlayCallbackSIHandler = null;
  ctx.portal.portalVjsPlayCallbackMaxLoop   = 10;
  ctx.portal.portalVjsPlayCallbackNLoop     = 0;
  ctx.portal.portalVjsPlayCallbackSITimeout = 100;

  ctx.portal.enableForceReadingMetaArticleId = true;

  ctx.portal.vjsPlaylistSkipFirstEvent = false;

  ctx.portal.enableLiveUseTickingCounter = false;
  ctx.portal.enableVODUseTickingCounter  = false;
  ctx.portal.tickingCounter              = 0;
  ctx.portal.tickingConversion           = 0.25;
  
  window.addEventListener("message", function(event) {
    if ( event.origin.includes('detik.com') || event.origin.includes('haibunda.com') || event.origin.includes('beautynesia.id') || event.origin.includes('cnnindonesia.com') || event.origin.includes('cnbcindonesia.com') || event.origin.includes('insertlive.com') || event.origin.includes('cxomedia.id') ) {      
      if ((event.data !== null) && (typeof event.data === 'string') && (event.data.indexOf('{') === -1)) {      
        if (ctx.vars.metaArticleIdListenerIsLocked === false) {
          var checkArticleId = event.data;
          var mustIntArticleId = parseInt(checkArticleId);
          if ((isNaN(mustIntArticleId) === false) && (mustIntArticleId > 0)) {
            ctx.portal.metaArticleId2 = mustIntArticleId.toString();
          };
          ctx.plog('message listener catch event data', ctx.portal.metaArticleId2);
        };
      };
    };
  });

  // portal Logging
  ctx.plog = function(txtLog, txtVal) {
    if ($.type(ctx.log) === 'function') {
      ctx.log(ctx.portal.portalHeaderInfo, txtLog, txtVal, false);
    };
  };

  ctx.plogx = function(txtLog, txtVal) {
    if ($.type(ctx.log) === 'function') {
      ctx.log(ctx.portal.portalHeaderInfo, txtLog, txtVal, true);      
    };
  };

  ctx.portalVersion = 

  // ctx.coreRun in detikVideo.core.js will run ctx.portalInit before player and ima initialization
  ctx.portalInit = 

  // ctx.coreRun in detikVideo.core.js will run ctx.portalRun after player and ima adsManager object has been created
  ctx.portalRun = function(player) {
    ctx.plog('portalRun...', null);
    ctx.plogx('portalconf', ctx.portalconf);
    ctx.portal.playerInstance      = player;
    ctx.portalVersion();

    ctx.portal.mediaType         = ctx.features.mediaType;
    if (ctx.portal.mediaType === 'video') {
      ctx.portal.gaEventActionMediaType = 'Video';
    } else if (ctx.portal.mediaType === 'audio') {
      ctx.portal.gaEventActionMediaType = 'Audio';
    };
    ctx.portal.channel           = ctx.scriptconf.channel;
    ctx.portal.live              = ctx.scriptconf.live;
    ctx.portal.loadVjsPlaylist   = ctx.features.loadVjsPlaylist;
    ctx.portal.vjsPlaylistData   = ctx.features.vjsPlaylistData;
    ctx.portalVjsPlaylistFirstReadData();
    ctx.portal.enableLiveUseTickingCounter = ctx.features.enableLiveUseTickingCounter;
    ctx.portal.enableVODUseTickingCounter  = ctx.features.enableVODUseTickingCounter;
    ctx.portal.portalEnableGoogleAnalytic = ctx.features.portalEnableGoogleAnalytic;
    ctx.portal.portalEnableDetikAnalytic  = ctx.features.portalEnableDetikAnalytic;
    ctx.portal.portalEnableVKAnalytic     = ctx.features.portalEnableVKAnalytic;
    ctx.portal.portalEnableManualChannel  = ctx.features.portalEnableManualChannel;
    ctx.portal.manualChannelEvent         = ctx.features.manualChannelEvent;
    ctx.portal.manualChannelCategory      = ctx.features.manualChannelCategory
    
    if ( (typeof ctx.features.detikAnalyticImgUrl === 'string') && (ctx.features.detikAnalyticImgUrl !== '') ) {
      ctx.portal.detikAnalyticImgUrl = ctx.features.detikAnalyticImgUrl;
      ctx.plog('detikAnalyticImgUrl', ctx.portal.detikAnalyticImgUrl);
    };
    if (ctx.features.detikAnalyticSendUserAgent === true) {
      ctx.portal.detikAnalyticUserAgentStr = '&userAgent=' + encodeURIComponent(navigator.userAgent);
    };
    ctx.portal.enableVjsEventBitrateChange= ctx.features.enableVjsEventBitrateChange;
    ctx.portal.enableVjsEventEndMinusX    = ctx.features.enableVjsEventEndMinusX;
    ctx.portal.endMinusX                  = ctx.features.endMinusX;
    ctx.portal.loadDetikSharedDataRequest = ctx.features.loadDetikSharedDataRequest;
    ctx.portal.enableDetikSharedDataRequestPortalJS = ctx.features.enableDetikSharedDataRequestPortalJS;
    ctx.portal.hlsjsInstance = ctx.vars.hlsjsInstance;
    
    ctx.portal.title         = ctx.scriptconf.title; // special variable from detikVideo.core.js
    ctx.portal.labelStr      = ctx.label();

    ctx.portal.categoryEvent = ctx.channelToCategoryEvent(ctx.portal.channel);
    ctx.portal.eventStr      = ctx.portal.categoryEvent.event;
    ctx.portal.categoryStr   = ctx.portal.categoryEvent.category;
    if (typeof ctx.portal.categoryEvent.vk_event === 'string') {
      ctx.portal.vk_eventStr    = ctx.portal.categoryEvent.vk_event;
    };
    if (typeof ctx.portal.categoryEvent.vk_category === 'string') {
      ctx.portal.vk_categoryStr = ctx.portal.categoryEvent.vk_category;
    };

    ctx.portal.dtmacStr      = (typeof dtmac !== 'undefined') ? dtmac : ctx.portal.dtmacStr;
    ctx.portal.dtmacsubStr   = (typeof dtmacsub !== 'undefined') ? dtmacsub : ctx.portal.dtmacsubStr;

    // Manual Channel
    if (ctx.portal.portalEnableManualChannel === true) {
      ctx.portal.eventStr    = ctx.portal.manualChannelEvent;
      ctx.portal.categoryStr = ctx.portal.manualChannelCategory;
    };

    // dtmhn
    if (window.location !== window.parent.location) {
      // embed
      ctx.portal.dtmhn = ctx.portalDtmhnGenerator(document.referrer);
    } else {
      // non-embed
      ctx.portal.dtmhn = ctx.portalDtmhnGenerator(document.location.href);
    };
    
    $.cookie.defaults = { path: '/' };
    
    ctx.portal.publishDate   = (typeof publish_date !== 'undefined') ? publish_date : ctx.portal.publishDate;
    //param for valuklik
    ctx.portal.vk_eventStr   = (typeof vk_event !== 'undefined') ? vk_event : ctx.portal.vk_eventStr;
    ctx.portal.vk_categoryStr= (typeof vk_category !== 'undefined') ? vk_category : ctx.portal.vk_categoryStr;
    ctx.portal.programId     = (typeof program_id !== 'undefined') ? program_id : ctx.portal.programId;
    ctx.portal.videoId       = (typeof video_id !== 'undefined') ? video_id : ctx.portal.videoId;
    ctx.portal.videoUrl      = (typeof video_url !== 'undefined') ? video_url : document.location.href;
    ctx.plog('portalRun ctx.portal.playerName', ctx.portal.playerName);
    ctx.plog('portalRun ctx.portal.labelStr', ctx.portal.labelStr);
    ctx.plog('portalRun ctx.portal.categoryStr', ctx.portal.categoryStr);
    ctx.plog('portalRun ctx.portal.eventStr', ctx.portal.eventStr);
    ctx.plog('portalRun ctx.portal.title', ctx.portal.title);
    ctx.plog('portalRun ctx.portal.channel', ctx.portal.channel);
    ctx.plog('portalRun ctx.portal.live', ctx.portal.live);
    ctx.plog('portalRun ctx.portal.portalEnableGoogleAnalytic', ctx.portal.portalEnableGoogleAnalytic);
    ctx.plog('portalRun ctx.portal.portalEnableDetikAnalytic', ctx.portal.portalEnableDetikAnalytic);
    ctx.plog('portalRun ctx.portal.portalEnableVKAnalytic', ctx.portal.portalEnableVKAnalytic);
    ctx.plog('ctx.portal.vjsTimeUpdateLogMax is maximum console.log for portalVjsTimeUpdateCallback' , ctx.portal.vjsTimeUpdateLogMax);
    ctx.plog('ctx.portal.vjsProgressLogMax   is maximum console.log for portalVjsProgressCallback'   , ctx.portal.vjsProgressLogMax);

    ctx.plog('portalRun player', ctx.portal.playerInstance);
  };

  // hlsjs Customize Callback-Functions

  ctx.portalHlsjsXhrSetupCallback = 

  // vjs Customize Callback-Functions

  ctx.portalVjsLoadStartCallback = function(player) { 
    ctx.plog('portalVjsLoadStartCallback', null);
  };

  ctx.portalVjsProgressCallback = function(player) { 
    if (ctx.portal.vjsProgressLog < ctx.portal.vjsProgressLogMax) {
      ctx.plog('portalVjsProgressCallback', ctx.portal.vjsProgressLog);
      ctx.portal.vjsProgressLog++;
    };
  };

  ctx.portalVjsAbortCallback = function(player) { 
    ctx.plog('portalVjsAbortCallback', null);
  };

  ctx.portalVjsErrorCallback = 

  ctx.portalVjsXhrErrorCallback = 

  ctx.portalVjsEmptiedCallback = function(player) { 
    ctx.plog('portalVjsEmptiedCallback', null);
  };

  ctx.portalVjsStalledCallback = function(player) { 
    ctx.plog('portalVjsStalledCallback', null);
  };

  ctx.portalVjsLoadedMetadataCallback = function(player) {
    // begin Send to GA for Bitrate
    if (($.type(ctx.portal.hlsjsInstance) === 'object') && (ctx.portal.enableVjsEventBitrateChange === true)) {
      var current = ctx.portal.hlsjsInstance.currentLevel;
      var level = null;
      var info = '';
      if (current >= 0) {
        level = ctx.portal.hlsjsInstance.levels[current];
      } else {
        level = ctx.portal.hlsjsInstance.levels[0];
      };
      if (($.type(level) !== 'undefined') && ($.type(level) !== 'null')) {
        info = ctx.portal.live ?
          level.bitrate / 1000 + ' kbps' : 
          level.height + 'p';
      };
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        ctx.plog('portalVjsLoadedMetadataCallback report as Bitrate info', info);
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'Bitrate '+info, 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      };
    };
    // end
    ctx.plog('portalVjsLoadedMetadataCallback', null);
  };

  ctx.portalVjsLoadedDataCallback = function(player) { 
    ctx.plog('portalVjsLoadedDataCallback', null);
  };

  ctx.portalVjsCanPlayCallback = function(player) { 
    ctx.plog('portalVjsCanPlayCallback', null);
  };

  ctx.portalVjsCanPlayThroughCallback = function(player) { 
    ctx.plog('portalVjsCanPlayThroughCallback', null);
  };

  ctx.portalVjsPlayingCallback = function(player) { 
    ctx.plog('portalVjsPlayingCallback', null);
  };

  ctx.portalVjsWaitingCallback = function(player) { 
    ctx.plog('portalVjsWaitingCallback', null);
  };

  ctx.portalVjsSeekingCallback = function(player) { 
    ctx.plog('portalVjsSeekingCallback', null);
  };

  ctx.portalVjsSeekedCallback = function(player) { 
    ctx.plog('portalVjsSeekedCallback', null);
  };

  ctx.portalVjsEndedCallback = function(player) {
    // begin Send to detikAnalytic for Video Finish
    /*if ((ctx.portal.portalEnableDetikAnalytic === true) && 
      (ctx.portal.live === false)) {
      var dataShoot = {};
      dataShoot.videoId     = ctx.portal.videoId;
      dataShoot.videoUrl    = ctx.portal.videoUrl;
      dataShoot.programId   = ctx.portal.programId;
      dataShoot.dtmacStr    = ctx.portal.dtmacStr;
      dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
      dataShoot.publishDate = ctx.portal.publishDate;
      dataShoot.dtmaStr     = ctx.portal.dtmaStr;
      dataShoot.eventAction = 'Video Finish';
      // additional begin
      dataShoot.playfromArticle = ctx.portal.metaArticleId;
      dataShoot.playfromUrl     = ctx.portal.docReferrer;
      dataShoot.eventStr        = ctx.portal.eventStr;
      dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
      dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
      dataShoot.dtkluc          = ctx.portal.dtklucStr;
      dataShoot.dtmr            = ctx.portal.dtmr;
      dataShoot.dtmhn           = ctx.portal.dtmhn;
      // additional end
      ctx.detikAnalyticShooter(dataShoot);
    };*/
    // begin Send to GA for Video Finish
    /*if (ctx.portal.portalEnableGoogleAnalytic === true) {
      if (ctx.portal.labelStr === 'insertlivecom') {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Finish', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
      } else {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Finish', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      };
      ctx.plog('portalVjsEndedCallback report as Video Finish', null);
    };
    if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
      dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play Percentage 100%', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
    };*/
    // end
    ctx.portalResetToPlayAgain();
    ctx.plog('portalVjsEndedCallback', null);
  };

  ctx.portalVjsDurationChangedCallback = function(player) { 
    ctx.plog('portalVjsDurationChangedCallback', null);
  };

  ctx.portalVjsTimeUpdateCallback = function(player) {
    // begin Send to GA for Video Play and Video Resume
    var currentTime = player.currentTime(); 
    if ( ((ctx.portal.live === true) && (ctx.portal.enableLiveUseTickingCounter)) ||
      ((ctx.portal.live !== true) && (ctx.portal.enableVODUseTickingCounter)) ) {
      ctx.portal.tickingCounter++;
      currentTime = ctx.portal.tickingCounter * ctx.portal.tickingConversion;
    };
    var floorCurrentTime = Math.floor(currentTime);
    var lengthOfVideo = player.duration();
    if (ctx.portal.lastCurrentTime !== floorCurrentTime) {
      //it's time to send to GA
      //ctx.plog('portalVjsTimeUpdateCallback floorCurrentTime sent to GA', null);
      if ((floorCurrentTime === 0) && (ctx.portal.isPlaying0Sec === false)) {
        // Send 0 sec
        //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '0 seconds', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        //ctx.plog('portalVjsTimeUpdateCallback report as GA 0 seconds', null);
        //ctx.portal.isPlaying0Sec = true;
      };
      if ((floorCurrentTime === 3) && (ctx.portal.isPlaying3Sec === false)) {
        // begin Send to detikAnalytic for 3 Seconds
        if ((ctx.portal.portalEnableDetikAnalytic === true) && 
          (ctx.portal.live === false)) {
          var dataShoot = {};
          dataShoot.videoId     = ctx.portal.videoId;
          dataShoot.videoUrl    = ctx.portal.videoUrl;
          dataShoot.programId   = ctx.portal.programId;
          dataShoot.dtmacStr    = ctx.portal.dtmacStr;
          dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
          dataShoot.publishDate = ctx.portal.publishDate;
          dataShoot.dtmaStr     = ctx.portal.dtmaStr;
          dataShoot.eventAction = '3 seconds';
          // additional begin
          dataShoot.playfromArticle = ctx.portal.metaArticleId;
          dataShoot.playfromUrl     = ctx.portal.docReferrer;
          dataShoot.eventStr        = ctx.portal.eventStr;
          dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
          dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
          dataShoot.dtkluc          = ctx.portal.dtklucStr;
          dataShoot.dtmr            = ctx.portal.dtmr;
          dataShoot.dtmhn           = ctx.portal.dtmhn;
          // additional end
          ctx.detikAnalyticShooter(dataShoot);
        };
        // Send 3 sec
        if (ctx.portal.portalEnableGoogleAnalytic === true) {
          if (ctx.portal.labelStr === 'insertlivecom') {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '3 seconds', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
          } else {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '3 seconds', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
          }
          ctx.plog('portalVjsTimeUpdateCallback report as GA 3 seconds', null);
        };
        if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
          dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': '3 Seconds Play', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
        };
        ctx.portal.isPlaying3Sec = true;
      };
      if ((floorCurrentTime === 30) && (ctx.portal.isPlaying30Sec === false)) {
        // Send 30 sec
        //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '30 seconds', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsTimeUpdateCallback report as GA 30 seconds', null);
        if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
          dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': '30 Seconds Play', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
        };
        ctx.portal.isPlaying30Sec = true;
      };
      if ( ( floorCurrentTime === Math.floor(lengthOfVideo * (25/100)) ) && (ctx.portal.isPlaying25Percent === false) && (ctx.portal.live !== true) ) {
        // begin Send to detikAnalytic for Video 25%
        if ((ctx.portal.portalEnableDetikAnalytic === true) && 
          (ctx.portal.live === false)) {
          var dataShoot = {};
          dataShoot.videoId     = ctx.portal.videoId;
          dataShoot.videoUrl    = ctx.portal.videoUrl;
          dataShoot.programId   = ctx.portal.programId;
          dataShoot.dtmacStr    = ctx.portal.dtmacStr;
          dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
          dataShoot.publishDate = ctx.portal.publishDate;
          dataShoot.dtmaStr     = ctx.portal.dtmaStr;
          dataShoot.eventAction = '25% played';
          // additional begin
          dataShoot.playfromArticle = ctx.portal.metaArticleId;
          dataShoot.playfromUrl     = ctx.portal.docReferrer;
          dataShoot.eventStr        = ctx.portal.eventStr;
          dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
          dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
          dataShoot.dtkluc          = ctx.portal.dtklucStr;
          dataShoot.dtmr            = ctx.portal.dtmr;
          dataShoot.dtmhn           = ctx.portal.dtmhn;
          // additional end
          ctx.detikAnalyticShooter(dataShoot);
        };
        // Send 25%
        if (ctx.portal.portalEnableGoogleAnalytic === true) {
          if (ctx.portal.labelStr === 'insertlivecom') {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '25% played', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
          } else {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '25% played', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
          };
          ctx.plog('portalVjsTimeUpdateCallback report as GA 25 percent', null);
        };
        if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
          dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play Percentage 25%', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
        };
        ctx.portal.isPlaying25Percent = true;
      };
      if ( ( floorCurrentTime === Math.floor(lengthOfVideo * (50/100)) ) && (ctx.portal.isPlaying50Percent === false) && (ctx.portal.live !== true) ) {
        // begin Send to detikAnalytic for Video 50%
        if ((ctx.portal.portalEnableDetikAnalytic === true) && 
          (ctx.portal.live === false)) {
          var dataShoot = {};
          dataShoot.videoId     = ctx.portal.videoId;
          dataShoot.videoUrl    = ctx.portal.videoUrl;
          dataShoot.programId   = ctx.portal.programId;
          dataShoot.dtmacStr    = ctx.portal.dtmacStr;
          dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
          dataShoot.publishDate = ctx.portal.publishDate;
          dataShoot.dtmaStr     = ctx.portal.dtmaStr;
          dataShoot.eventAction = '50% played';
          // additional begin
          dataShoot.playfromArticle = ctx.portal.metaArticleId;
          dataShoot.playfromUrl     = ctx.portal.docReferrer;
          dataShoot.eventStr        = ctx.portal.eventStr;
          dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
          dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
          dataShoot.dtkluc          = ctx.portal.dtklucStr;
          dataShoot.dtmr            = ctx.portal.dtmr;
          dataShoot.dtmhn           = ctx.portal.dtmhn;
          // additional end
          ctx.detikAnalyticShooter(dataShoot);
        }
        // Send 50%
        if (ctx.portal.portalEnableGoogleAnalytic === true) {
          if (ctx.portal.labelStr === 'insertlivecom') {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '50% played', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
          } else {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '50% played', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
          };
          ctx.plog('portalVjsTimeUpdateCallback report as GA 50 percent', null);
        };
        if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
          dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play Percentage 50%', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
        };
        ctx.portal.isPlaying50Percent = true;
      };
      if ( ( floorCurrentTime === Math.floor(lengthOfVideo * (75/100)) ) && (ctx.portal.isPlaying75Percent === false) && (ctx.portal.live !== true) ) {
        // begin Send to detikAnalytic for Video 75%
        if ((ctx.portal.portalEnableDetikAnalytic === true) && 
          (ctx.portal.live === false)) {
          var dataShoot = {};
          dataShoot.videoId     = ctx.portal.videoId;
          dataShoot.videoUrl    = ctx.portal.videoUrl;
          dataShoot.programId   = ctx.portal.programId;
          dataShoot.dtmacStr    = ctx.portal.dtmacStr;
          dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
          dataShoot.publishDate = ctx.portal.publishDate;
          dataShoot.dtmaStr     = ctx.portal.dtmaStr;
          dataShoot.eventAction = '75% played';
          // additional begin
          dataShoot.playfromArticle = ctx.portal.metaArticleId;
          dataShoot.playfromUrl     = ctx.portal.docReferrer;
          dataShoot.eventStr        = ctx.portal.eventStr;
          dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
          dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
          dataShoot.dtkluc          = ctx.portal.dtklucStr;
          dataShoot.dtmr            = ctx.portal.dtmr;
          dataShoot.dtmhn           = ctx.portal.dtmhn;
          // additional end
          ctx.detikAnalyticShooter(dataShoot);
        };
        // Send 75%
        if (ctx.portal.portalEnableGoogleAnalytic === true) {
          if (ctx.portal.labelStr === 'insertlivecom') {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '75% played', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
          } else {
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : '75% played', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
          };
          ctx.plog('portalVjsTimeUpdateCallback report as GA 75 percent', null);
        };
        if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
          dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play Percentage 75%', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
        };
        ctx.portal.isPlaying75Percent = true;
      };
      if ((ctx.portal.enableVjsEventEndMinusX === true) && (floorCurrentTime === (Math.floor(lengthOfVideo) - ctx.portal.endMinusX))) {
        // reset assumeNoPauseEvent
        ctx.vars.assumeNoPauseEvent = true;
        // begin Send to detikAnalytic for Video Finish - 1
        if ((ctx.portal.portalEnableDetikAnalytic === true) && 
          (ctx.portal.live === false)) {
          var dataShoot = {};
          dataShoot.videoId     = ctx.portal.videoId;
          dataShoot.videoUrl    = ctx.portal.videoUrl;
          dataShoot.programId   = ctx.portal.programId;
          dataShoot.dtmacStr    = ctx.portal.dtmacStr;
          dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
          dataShoot.publishDate = ctx.portal.publishDate;
          dataShoot.dtmaStr     = ctx.portal.dtmaStr;
          //dataShoot.eventAction = 'Video Finish - 1';
          dataShoot.eventAction = 'Video Finish';
          // additional begin
          dataShoot.playfromArticle = ctx.portal.metaArticleId;
          dataShoot.playfromUrl     = ctx.portal.docReferrer;
          dataShoot.eventStr        = ctx.portal.eventStr;
          dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
          dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
          dataShoot.dtkluc          = ctx.portal.dtklucStr;
          dataShoot.dtmr            = ctx.portal.dtmr;
          dataShoot.dtmhn           = ctx.portal.dtmhn;
          // additional end
          ctx.detikAnalyticShooter(dataShoot);
        };
        // begin Send to GA for Video Finish - 1
        if (ctx.portal.portalEnableGoogleAnalytic === true) {
          if (ctx.portal.labelStr === 'insertlivecom') {
            //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Finish - 1', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Finish', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
          } else {
            //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Finish - 1', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
            dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Finish', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
          };
          //ctx.plog('portalVjsEventEndMinusX report as Video Finish - 1', null);
          ctx.plog('portalVjsEventEndMinusX report as Video Finish', null);
        };
        if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
          //dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play Percentage 100% - 1', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
          dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play Percentage 100%', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
        };
      };
      ctx.portal.lastCurrentTime = floorCurrentTime;
    };
    //ctx.plog('portalVjsTimeUpdateCallback currentTime', currentTime);
    //ctx.plog('portalVjsTimeUpdateCallback floorCurrentTime', floorCurrentTime); 
    // end
    if (ctx.portal.vjsTimeUpdateLog < ctx.portal.vjsTimeUpdateLogMax) {
      ctx.plog('portalVjsTimeUpdateCallback', ctx.portal.vjsTimeUpdateLog);
      ctx.portal.vjsTimeUpdateLog++;
    };
  };

  ctx.portalVjsPlayCallback = function(player) {
    if (ctx.portal.enablePortalPlayAnalyticWaitingMetaArticleId === true) {
      // waiting metaArticleId
      if (ctx.portal.isFirstPlay === false) {
        ctx.portal.portalVjsPlayCallbackSIHandler = setInterval(function() {
          if (ctx.portal.portalVjsPlayCallbackNLoop < ctx.portal.portalVjsPlayCallbackMaxLoop) {
            if (ctx.portal.metaArticleId !== '') {
              clearInterval(ctx.portal.portalVjsPlayCallbackSIHandler);
              ctx.plog('portalVjsPlayCallback has got metaArticleId', null);
              ctx.portalVjsPlayCallbackHelper(player);
            } else {
              ctx.plog('portalVjsPlayCallback is waiting metaArticleId', ctx.portal.portalVjsPlayCallbackNLoop);
            };
            ctx.portal.portalVjsPlayCallbackNLoop++;
          } else {
            clearInterval(ctx.portal.portalVjsPlayCallbackSIHandler);
            ctx.plog('portalVjsPlayCallback is nomore waiting metaArticleId', null);
            ctx.portalVjsPlayCallbackHelper(player);
          };
        }, ctx.portal.portalVjsPlayCallbackSITimeout);
      } else {
        ctx.portalVjsPlayCallbackHelper(player);
      };
    } else {
      // no waiting
      ctx.portalVjsPlayCallbackHelper(player);
    };
  };

  ctx.forceReadingMetaArticleId = function() {
    if (ctx.portal.enableForceReadingMetaArticleId === true) {
      try {
        // if metaArticleId is still empty, then 
        // detikVideo.core addEventListener message is failed while catching msg,
        // detikVideo.poral addEventListener message is failed too while catching msg,
        // it occurs because of loading animation of iframe src prevents prevents those addEventListeners to up-n-running immediately.
        // the solution now : we are trying to read Meta Article from parent window 
        if (ctx.portal.metaArticleId === '') {
          if ((window.parent !== null) && (typeof window.parent === 'object')) {
            // hooray , we can access parent now
            var articleId = $('meta[name=articleid]', window.parent.document).attr("content");
            if (typeof articleId === 'string') {
              ctx.portal.docReferrer = document.referrer;
              ctx.portal.metaArticleId = articleId;
              ctx.plog('forceReadingMetaArticleId reads articleId from window.parent', ctx.portal.metaArticleId);
            } else {
              ctx.plog('forceReadingMetaArticleId fails to read articleId from window.parent', null);
            };
          };
        };
      } catch (error) {
      var errMessage = '';
        if (error.hasOwnProperty('name') === true) {
          errMessage = 'Error Name: ' + error.name;
        };
        if (error.hasOwnProperty('message') === true) {
          errMessage = errMessage + ', Error Message: ' + error.message;
        };
        ctx.plog('forceReadingMetaArticleId got an error inside window.parent', errMessage);
      };
    };
  };

  ctx.portalVjsPlayCallbackHelper = function(player) { 
    if (ctx.portal.isFirstPlay === false) {
      // begin --- get __dtma cookie
      ctx.portal.dtmaCookieStr = $.cookie('__dtma');
      if (typeof ctx.portal.dtmaCookieStr !== 'undefined') {
        ctx.portal.dtmaStr     = ctx.portal.dtmaCookieStr;  
      } else {
        ctx.portal.dtmaStr     = (typeof dtma !== 'undefined') ? dtma : ctx.portal.dtmaStr;
      };
      // end   --- get __dtma cookie
      // begin --- get dtklucx
      var dtkluc = $.cookie('dtklucx');
      if (typeof dtkluc !== 'undefined') {
        ctx.portal.dtklucStr   = dtkluc;  
      }
      // end   --- get dtklucx
      // but first we stop all addEventListener message in detikVideo.core and detikVideo.portal to avoid garbage metaArticleId
      ctx.vars.metaArticleIdListenerIsLocked = true;
      // catch metaArticleId if we are in embed
      if (window.location !== window.parent.location) {
        if (ctx.vars.metaArticleId !== null) {
          ctx.portal.metaArticleId  = ctx.vars.metaArticleId; // from detikVideo.core
        } else if (ctx.portal.metaArticleId2 !== null) {
          ctx.portal.metaArticleId  = ctx.portal.metaArticleId2; // from detikVideo.portal
        };
      };
      // forceReadingMetaArticleId
      ctx.forceReadingMetaArticleId();
      // trying read meta article id from detikSharedDataRequest
      if ((ctx.portal.loadDetikSharedDataRequest === true) && (ctx.portal.enableDetikSharedDataRequestPortalJS === true) && ($.type(detikSharedDataRequest) === 'object')) {
        ctx.vars.metaArticleIdListenerIsLocked = true;
        try {
          //ctx.plog('portalVjsPlayCallbackHelper detikSharedDataRequest', detikSharedDataRequest.vars.sharedDataObj);
          var testArticleId = detikSharedDataRequest.getData('articleId');
          if (testArticleId !== '') {
            ctx.portal.metaArticleId = testArticleId;
            ctx.plog('portalVjsPlayCallbackHelper detikSharedDataRequest ctx.portal.metaArticleId', ctx.portal.metaArticleId);
          };
          var testPlayFromUrl = detikSharedDataRequest.getData('url');
          if (testPlayFromUrl !== '') {
            ctx.portal.docReferrer = testPlayFromUrl;
            ctx.plog('portalVjsPlayCallbackHelper detikSharedDataRequest ctx.portal.docReferrer', ctx.portal.docReferrer);
          };
          var testPosition = detikSharedDataRequest.getData('position');
          if (testPosition !== '') {
            ctx.portal.position = testPosition;
            ctx.plog('portalVjsPlayCallbackHelper detikSharedDataRequest ctx.portal.position', ctx.portal.position);
          };
        } catch (ex) {
          ctx.plog('portalVjsPlayCallbackHelper detikSharedDataRequest is error', ex);
        };
      };
      // begin Send to detikAnalytic for Video Play
      if ((ctx.portal.portalEnableDetikAnalytic === true) && 
        (ctx.portal.live === false)) {
        var dataShoot = {};
        dataShoot.videoId     = ctx.portal.videoId;
        dataShoot.videoUrl    = ctx.portal.videoUrl;
        dataShoot.programId   = ctx.portal.programId;
        dataShoot.dtmacStr    = ctx.portal.dtmacStr;
        dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
        dataShoot.publishDate = ctx.portal.publishDate;
        dataShoot.dtmaStr     = ctx.portal.dtmaStr;
        dataShoot.eventAction = 'Video Play';
        // additional begin
        dataShoot.playfromArticle = ctx.portal.metaArticleId;
        dataShoot.playfromUrl     = ctx.portal.docReferrer;
        dataShoot.eventStr        = ctx.portal.eventStr;
        dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
        dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
        dataShoot.dtkluc          = ctx.portal.dtklucStr;
        dataShoot.dtmr            = ctx.portal.dtmr;
        dataShoot.dtmhn           = ctx.portal.dtmhn;
        // additional end
        ctx.detikAnalyticShooter(dataShoot);
      };
      // begin Send to GA for Video Play
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        if (ctx.portal.labelStr === 'insertlivecom') {
          dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Play', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
        } else {
          dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Play', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        };
        ctx.plog('portalVjsPlayCallback report as Video Play', null);
      };
      if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
        dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Play', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
      };
      ctx.portal.isFirstPlay = true;
    } else {
      // begin Send to detikAnalytic for Video Resume
      if ((ctx.portal.portalEnableDetikAnalytic === true) && 
        (ctx.portal.live === false)) {
        var dataShoot = {};
        dataShoot.videoId     = ctx.portal.videoId;
        dataShoot.videoUrl    = ctx.portal.videoUrl;
        dataShoot.programId   = ctx.portal.programId;
        dataShoot.dtmacStr    = ctx.portal.dtmacStr;
        dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
        dataShoot.publishDate = ctx.portal.publishDate;
        dataShoot.dtmaStr     = ctx.portal.dtmaStr;
        dataShoot.eventAction = 'Video Resume';
        // additional begin
        dataShoot.playfromArticle = ctx.portal.metaArticleId;
        dataShoot.playfromUrl     = ctx.portal.docReferrer;
        dataShoot.eventStr        = ctx.portal.eventStr;
        dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
        dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
        dataShoot.dtkluc          = ctx.portal.dtklucStr;
        dataShoot.dtmr            = ctx.portal.dtmr;
        dataShoot.dtmhn           = ctx.portal.dtmhn;
        // additional end
        // EVENT RESUME KE DA DIMATIKAN ATAS PERMINTAAN MAS AMONG
        //ctx.detikAnalyticShooter(dataShoot);
      }
      // begin Send to GA for Video Resume
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        // EVENT RESUME KE GA DIMATIKAN ATAS PERMINTAAN PROMAN
        /*if (ctx.portal.labelStr === 'insertlivecom') {
          dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Resume', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
        } else {
          dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Resume', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        };*/
        ctx.plog('portalVjsPlayCallback report as Video Resume', null);
      };
      if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
        dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Resume', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
      };
    };
    // end
    ctx.plog('portalVjsPlayCallback', null);
  };

  ctx.portalVjsPauseCallback = function(player) {
    // begin Send to detikAnalytic for Video Pause
    if ((ctx.portal.portalEnableDetikAnalytic === true) && 
      (ctx.portal.live === false)) {
      var dataShoot = {};
      dataShoot.videoId     = ctx.portal.videoId;
      dataShoot.videoUrl    = ctx.portal.videoUrl;
      dataShoot.programId   = ctx.portal.programId;
      dataShoot.dtmacStr    = ctx.portal.dtmacStr;
      dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
      dataShoot.publishDate = ctx.portal.publishDate;
      dataShoot.dtmaStr     = ctx.portal.dtmaStr;
      dataShoot.eventAction = 'Video Pause';
      // additional begin
      dataShoot.playfromArticle = ctx.portal.metaArticleId;
      dataShoot.playfromUrl     = ctx.portal.docReferrer;
      dataShoot.eventStr        = ctx.portal.eventStr;
      dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
      dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
      dataShoot.dtkluc          = ctx.portal.dtklucStr;
      dataShoot.dtmr            = ctx.portal.dtmr;
      dataShoot.dtmhn           = ctx.portal.dtmhn;
      // additional end
      // EVENT PAUSE KE DA DIMATIKAN ATAS PERMINTAAN MAS AMONG
      //ctx.detikAnalyticShooter(dataShoot);
    };
    // begin Send to GA for Video Pause
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      // EVENT PAUSE KE GA DIMATIKAN ATAS PERMINTAAN PROMAN
      /*if (ctx.portal.labelStr === 'insertlivecom') {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Pause', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title, 'programid' : ctx.portal.programId, 'videoid' : ctx.portal.videoId});
      } else {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Pause', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      };*/
      ctx.plog('portalVjsPauseCallback report as Video Pause', null);
    };
    if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
      dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Pause', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
    };
    // end
    ctx.plog('portalVjsPauseCallback', null);
  };

  ctx.portalVjsRateChangeCallback = function(player) { 
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      var speed = player.playbackRate();
      if ((speed > 0) && (speed < 1.0)) {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'speed 0.5x', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsRateChangeCallback report as Speed 0.5x', null);
      } else if ((speed > 1.0) && (speed < 2.0)) {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'speed 1.5x', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsRateChangeCallback report as Speed 1.5x', null);
      } else if ((speed > 1.5) && (speed < 2.5)) {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'speed 2x',   'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsRateChangeCallback report as Speed 2x',   null);
      };
    };
    ctx.plog('portalVjsRateChangeCallback', null);
  };

  ctx.portalVjsFullscreenChangeCallback = 

  ctx.portalVjsResizeCallback = function(player) { 
    // begin Send to GA for Video Fullscreen (event Resize lebih stabil ketimbang event Fullscreen)
    var isFullscreen = player.isFullscreen();
    if (isFullscreen === true) {
      // begin Send to detikAnalytic for Video Fullscreen
      if ((ctx.portal.portalEnableDetikAnalytic === true) && 
        (ctx.portal.live === false)) {
        var dataShoot = {};
        dataShoot.videoId     = ctx.portal.videoId;
        dataShoot.videoUrl    = ctx.portal.videoUrl;
        dataShoot.programId   = ctx.portal.programId;
        dataShoot.dtmacStr    = ctx.portal.dtmacStr;
        dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
        dataShoot.publishDate = ctx.portal.publishDate;
        dataShoot.dtmaStr     = ctx.portal.dtmaStr;
        dataShoot.eventAction = 'Video Fullscreen';
        // additional begin
        dataShoot.playfromArticle = ctx.portal.metaArticleId;
        dataShoot.playfromUrl     = ctx.portal.docReferrer;
        dataShoot.eventStr        = ctx.portal.eventStr;
        dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
        dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
        dataShoot.dtkluc          = ctx.portal.dtklucStr;
        dataShoot.dtmr            = ctx.portal.dtmr;
        dataShoot.dtmhn           = ctx.portal.dtmhn;
        // additional end
        // EVENT RESIZE FULLSCREEN KE DA DIMATIKAN ATAS PERMINTAAN MAS AMONG
        //ctx.detikAnalyticShooter(dataShoot);
      };
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        // EVENT RESIZE FULLSCREEN KE GA DIMATIKAN ATAS PERMINTAAN PROMAN
        //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Fullscreen', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsResizeCallback report as Video Fullscreen', null);
      };
      if ((ctx.portal.portalEnableVKAnalytic === true) && (ctx.portal.labelStr === 'cnbcindonesiacom')) {
        dataLayer.push({'event': ctx.portal.vk_eventStr, 'videotype': ctx.portal.vk_categoryStr, 'videoaction': 'Full Screen', 'title': ctx.portal.title, 'programId': ctx.portal.programId, 'videoid': ctx.portal.videoId});
      };
    };
    // end
    ctx.plog('portalVjsResizeCallback', null);
  };

  ctx.portalVjsVolumeChangeCallback = function(player) { 
    // begin Send to GA for Video Mute and Volume
    var isMuted = player.muted();
    if (isMuted === true) {
      // begin Send to detikAnalytic for Video Mute
      if ((ctx.portal.portalEnableDetikAnalytic === true) && 
        (ctx.portal.live === false)) {
        var dataShoot = {};
        dataShoot.videoId     = ctx.portal.videoId;
        dataShoot.videoUrl    = ctx.portal.videoUrl;
        dataShoot.programId   = ctx.portal.programId;
        dataShoot.dtmacStr    = ctx.portal.dtmacStr;
        dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
        dataShoot.publishDate = ctx.portal.publishDate;
        dataShoot.dtmaStr     = ctx.portal.dtmaStr;
        dataShoot.eventAction = 'Video Mute';
        // additional begin
        dataShoot.playfromArticle = ctx.portal.metaArticleId;
        dataShoot.playfromUrl     = ctx.portal.docReferrer;
        dataShoot.eventStr        = ctx.portal.eventStr;
        dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
        dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
        dataShoot.dtkluc          = ctx.portal.dtklucStr;
        dataShoot.dtmr            = ctx.portal.dtmr;
        dataShoot.dtmhn           = ctx.portal.dtmhn;
        // additional end
        // EVENT MUTE KE DA DIMATIKAN ATAS PERMINTAAN MAS AMONG
        //ctx.detikAnalyticShooter(dataShoot);
      };
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        // EVENT MUTE KE GA DIMATIKAN ATAS PERMINTAAN PROMAN
        //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Mute',  'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsVolumeChangeCallback report as Video Mute', null);
      };
    } else {
      // begin Send to detikAnalytic for Video Unmute
      if ((ctx.portal.portalEnableDetikAnalytic === true) && 
        (ctx.portal.live === false)) {
        var dataShoot = {};
        dataShoot.videoId     = ctx.portal.videoId;
        dataShoot.videoUrl    = ctx.portal.videoUrl;
        dataShoot.programId   = ctx.portal.programId;
        dataShoot.dtmacStr    = ctx.portal.dtmacStr;
        dataShoot.dtmacsubStr = ctx.portal.dtmacsubStr;
        dataShoot.publishDate = ctx.portal.publishDate;
        dataShoot.dtmaStr     = ctx.portal.dtmaStr;
        dataShoot.eventAction = 'Video Unmute';
        // additional begin
        dataShoot.playfromArticle = ctx.portal.metaArticleId;
        dataShoot.playfromUrl     = ctx.portal.docReferrer;
        dataShoot.eventStr        = ctx.portal.eventStr;
        dataShoot.gaEventCategory = ctx.portal.playerName+' '+ctx.portal.categoryStr;
        dataShoot.gaEventLabel    = ctx.portal.labelStr+'-'+ctx.portal.title;
        dataShoot.dtkluc          = ctx.portal.dtklucStr;
        dataShoot.dtmr            = ctx.portal.dtmr;
        dataShoot.dtmhn           = ctx.portal.dtmhn;
        // additional end
        // EVENT UNMUTE KE DA DIMATIKAN ATAS PERMINTAAN MAS AMONG
        //ctx.detikAnalyticShooter(dataShoot);
      };
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        // EVENT UNMUTE KE GA DIMATIKAN ATAS PERMINTAAN PROMAN
        //dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Unmute',      'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalVjsVolumeChangeCallback report as Video Unmute', null);
      };
    };
    // end
    ctx.plog('portalVjsVolumeChangeCallback', null);
  };

  ctx.portalResetToPlayAgain = function() {
    ctx.portal.isFirstPlay       = false;
    ctx.portal.lastCurrentTime   = 0;
    ctx.portal.isPlaying0Sec = false;
    ctx.portal.isPlaying3Sec = false;
    ctx.portal.isPlaying30Sec= false;
    ctx.portal.isPlaying25Percent = false;
    ctx.portal.isPlaying50Percent = false;
    ctx.portal.isPlaying75Percent = false;
    ctx.plog('portalResetToPlayAgain', null);
  };

  ctx.portalVjsPlaylistItemCallback = 

  ctx.portalVjsPlaylistEventInternalHandler = function() {
    if (ctx.features.loadVjsPlaylist === true) {
      if (ctx.portal.vjsPlaylistSkipFirstEvent === false) {
        ctx.portal.vjsPlaylistSkipFirstEvent = true;
      } else {
        ctx.portal.isFirstPlay       = false;
        ctx.portal.lastCurrentTime   = 0;
        ctx.portal.isPlaying0Sec = false;
        ctx.portal.isPlaying3Sec = false;
        ctx.portal.isPlaying30Sec= false;
        ctx.portal.isPlaying25Percent = false;
        ctx.portal.isPlaying50Percent = false;
        ctx.portal.isPlaying75Percent = false;
        ctx.portal.vjsTimeUpdateLog  = 0;
        ctx.portal.vjsProgressLog    = 0;
        ctx.clog('portalVjsPlaylistEventInternalHandler is resetting all vars', null);
        // reset videoId, programId and title, imageUrl to poster, videoUrl to sources[0].src
        var videoIndex = 0;
        if ((ctx.portal.playerInstance !== null) && (ctx.portal.playerInstance.playlist.currentItem() >= 0)) {
          videoIndex = ctx.portal.playerInstance.playlist.currentItem();
        };
        if ((ctx.portal.vjsPlaylistData !== null) && (typeof ctx.portal.vjsPlaylistData === 'object') && (Array.isArray(ctx.portal.vjsPlaylistData) === true) && (ctx.portal.vjsPlaylistData.length >= videoIndex)) {
          var dataItem = ctx.portal.vjsPlaylistData[videoIndex];
          if (dataItem.hasOwnProperty('videoId') === true) {
            ctx.portal.videoId = dataItem.videoId;        
          } else {
            ctx.portal.videoId = '';
          };
          if (dataItem.hasOwnProperty('programId') === true) {
            ctx.portal.programId = dataItem.programId;        
          } else {
            ctx.portal.programId = '';
          };
          if (dataItem.hasOwnProperty('title') === true) {
            ctx.portal.title = dataItem.title;        
          } else {
            ctx.portal.title = '';
          };
          ctx.clog('portalVjsPlaylistEventInternalHandler is resetting videoId, programId, title', dataItem);
        };
      };
    };
  };

  ctx.portalVjsPlaylistFirstReadData = function() {
    if (ctx.portal.loadVjsPlaylist === true) {
      // reset videoId, programId and title, imageUrl to poster, videoUrl to sources[0].src
      if ((ctx.portal.vjsPlaylistData !== null) && (typeof ctx.portal.vjsPlaylistData === 'object') && (Array.isArray(ctx.portal.vjsPlaylistData) === true) && (ctx.portal.vjsPlaylistData.length >= 0)) {
        var dataItem = ctx.portal.vjsPlaylistData[0];
        if (dataItem.hasOwnProperty('videoId') === true) {
          ctx.portal.videoId = dataItem.videoId;        
        } else {
          ctx.portal.videoId = '';
        };
        if (dataItem.hasOwnProperty('programId') === true) {
          ctx.portal.programId = dataItem.programId;        
        } else {
          ctx.portal.programId = '';
        };
        if (dataItem.hasOwnProperty('title') === true) {
          ctx.portal.title = dataItem.title;        
        } else {
          ctx.portal.title = '';
        };
        ctx.clog('portalVjsPlaylistFirstReadData is resetting videoId, programId, title', dataItem);
      };
    };
  };

  // IMA and Ads Customize Callback-Functions
  
  ctx.portalOnAdsLog = function(data) {
    //ctx.plog('portalOnAdsLog', null);
  };

  ctx.portalOnAdsReady = function(data) {
    //ctx.plog('portalOnAdsReady', null);
  };

  ctx.portalOnAdsCanceled = function(data) {
    //ctx.plog('portalOnAdsCanceled', null);
  };

  ctx.portalOnAdSkip = function(data) {
    //ctx.plog('portalOnAdSkip', null);
  };

  ctx.portalOnAdsError = function(data) {
    //ctx.plog('portalOnAdsError', null);
  };

  ctx.portalOnAdTimeout = function(data) {
    //ctx.plog('portalOnAdTimeout', null);
  };

  ctx.portalOnAdEnded = function(data) {
    //ctx.plog('portalOnAdEnded', null);
  };

  ctx.portalOnAdsAdStarted = function(data) {
    //ctx.plog('portalOnAdsAdStarted', null);
  };

  ctx.portalOnAdReadyForPostroll = function(data) {
    //ctx.plog('portalOnAdReadyForPostroll', null);
  };

  ctx.portalOnAdNoPreroll = function(data) {
    //ctx.plog('portalOnAdNoPreroll', null);
  };

  ctx.portalOnAdNoPostroll = function(data) {
    //ctx.plog('portalOnAdNoPostroll', null);
  };

  ctx.portalImaAllAdsCompleted = function(event) { 
    //ctx.plog('portalImaAllAdsCompleted', null);
  };

  ctx.portalImaClick = function(event) { 
    //ctx.plog('portalImaClick', null);
  };

  ctx.portalImaComplete = function(event) { 
    //ctx.plog('portalImaComplete', null);
  };

  ctx.portalImaFirstQuartile = function(event) { 
    //ctx.plog('portalImaFirstQuartile', null);
  };

  ctx.portalImaLoaded = function(event) { 
    //ctx.plog('portalImaLoaded', null);
  };

  ctx.portalImaMidPoint = function(event) { 
    //ctx.plog('portalImaMidPoint', null);
  };

  ctx.portalImaPaused = function(event) { 
    //ctx.plog('portalImaPaused', null);
  };

  ctx.portalImaResumed = function(event) { 
    //ctx.plog('portalImaResumed', null);
  };

  ctx.portalImaStarted = function(event) { 
    //ctx.plog('portalImaStarted', null);
  };

  ctx.portalImaThirdQuartile = 

  // portal Ultimate Functions

  ctx.channelToCategoryEvent = function(channel) {
    var result = {
      category: 'VOD',
      event: '20detik'
    };
    if ($.type(channel) === 'string') {
      if (channel === 'breakingnews') {
        result = {
          category: 'breakingnews',
          event: 'livestreaming'
        };
      } else if (channel === 'livestreaming') {
        result = {
          category: 'livestreaming',
          event: 'livestreaming'
        };
      } else if (channel === 'livestreamingpartnership') {
        result = {
          category: 'Livestreaming Partnership',
          event: '20detik-livestreaming partnership'
        };
      } else if (channel === 'vod') {
        result = {
          category: 'VOD',
          event: '20detik'
        };
      } else if (channel === 'breakingnews20d') {
        result = {
          category: 'breakingnews 20detik',
          event: 'breakingnews20detik'
        };
      } else if (channel === 'detikjabarbreakingnews') {
        result = {
          category: 'livestreaming detikjabar-breakingnews',
          event: 'detikjabar-breakingnews livestreaming'
        };
      } else if (channel === 'detikjatengbreakingnews') {
        result = {
          category: 'livestreaming detikjateng-breakingnews',
          event: 'detikjateng-breakingnews livestreaming'
        };
      } else if (channel === 'detikjatimbreakingnews') {
        result = {
          category: 'livestreaming detikjatim-breakingnews',
          event: 'detikjatim-breakingnews livestreaming'
        };
      } else if (channel === 'detikbalibreakingnews') {
        result = {
          category: 'livestreaming detikbali-breakingnews',
          event: 'detikbali-breakingnews livestreaming'
        };
      } else if (channel === 'detiksumutbreakingnews') {
        result = {
          category: 'livestreaming detiksumut-breakingnews',
          event: 'detiksumut-breakingnews livestreaming'
        };
      } else if (channel === 'detiksulselbreakingnews') {
        result = {
          category: 'livestreaming detiksulsel-breakingnews',
          event: 'detiksulsel-breakingnews livestreaming'
        };
      } else if (channel === 'detiksumbagselbreakingnews') {
        result = {
          category: 'livestreaming detiksumbagsel-breakingnews',
          event: 'detiksumbagsel-breakingnews livestreaming'
        };
      } else if (channel === 'detikjogjabreakingnews') {
        result = {
          category: 'livestreaming detikjogja-breakingnews',
          event: 'detikjogja-breakingnews livestreaming'
        };
      } else if (channel === 'livestreaming20d') {
        result = {
          category: 'livestreaming 20detik',
          event: 'livestreaming20detik'
        };
      } else if (channel === '20detikfullhd') {
        result = {
          category: 'Livestreaming FullHD',
          event: 'Livestreaming FullHD'
        };
      } else if (channel === 'fhd-event') {
        result = {
          category: 'Livestreaming FHD-event',
          event: 'FHD-event livestreaming'
        };
      } else if (channel === 'cnnvideo') {
        result = {
          category: 'Video CNN',
          event: 'CNNIndonesia'
        };
      } else if (channel === 'cnnlivestreaming') {
        result = {
          category: 'Livestreaming CNN',
          event: 'CNNIndonesiaLivestreaming'
        };
      } else if (channel === 'cnntvlivestreaming') {
        result = {
          category: 'Livestreaming CNNTV',
          event: 'Livestreaming CNNTV'
        };
      } else if (channel === 'cnnbreakingnews') {
        result = {
          category: 'livestreaming cnn-breakingnews',
          event: 'cnn-breakingnews livestreaming'
        };
      } else if (channel === 'cnbcvideo') {
        ctx.portal.gaEventActionMediaType = 'Video';
        result = {
          category: 'Video CNBC',
          event: 'CNBCIndonesia',
          vk_category: '',
          vk_event: 'videoondemand'
        };
      } else if (channel === 'cnbcaudio') {
        ctx.portal.gaEventActionMediaType = 'Audio';
        result = {
          category: 'Audio CNBC',
          event: 'CNBCIndonesiaAudio',
          vk_category: '',
          vk_event: 'audioondemand'
        };
      } else if (channel === 'cnbclivestreaming') {
        result = {
          category: 'Livestreaming CNBC',
          event: 'CNBCIndonesiaLivestreaming',
          vk_category: 'Livestreaming CNBC',
          vk_event: 'videolivestream'
        };
      } else if (channel === 'cnbcevent') {
        result = {
          category: 'Livestreaming CNBC-event',
          event: 'CNBC-event livestreaming',
          vk_category: 'Livestreaming CNBC-event',
          vk_event: 'videolivestream'
        };
      } else if (channel === 'cnbctv') {
        result = {
          category: 'CNBC TV',
          event: 'CNBCIndonesiaTV',
          vk_category: 'CNBC TV',
          vk_event: 'videolivestream'
        };
      } else if (channel === 'insertlivevideo') {
        result = {
          category: 'Video Insert Live',
          event: 'insertlivevideo'
        };
      } else if (channel === 'insertlivestreaming') {
        result = {
          category: 'Livestreaming Insert Live',
          event: 'insertlivestreaming'
        };
      } else if (channel === 'insertlivebreakingnews') {
        result = {
          category: 'Breaking News Insert Live',
          event: 'insertlivebreakingnews'
        };
      } else if (channel === 'insertliveevent') {
        result = {
          category: 'Event Insert Live',
          event: 'insertlive event'
        };
      } else if (channel === 'videohaibunda') {
        result = {
          category: 'Video Haibunda',
          event: 'videohaibunda'
        };
      } else if (channel === 'beautynesiavideo') {
        result = {
          category: 'Video Beautynesia',
          event: 'videobeautynesia'
        };
      } else if (channel === 'beautynesialivestreaming') {
        result = {
          category: 'Livestreaming Beautynesia',
          event: 'beautynesia livestreaming'
        };
      } else if (channel === 'livestreaminghaibunda') {
        result = {
          category: 'Livestreaming Haibunda',
          event: 'livestreaminghaibunda'
        };
      } else if (channel === 'livetranstv') {
        result = {
          category: 'livetranstv',
          event: 'livetranstv'
        };
      } else if (channel === 'livetrans7') {
        result = {
          category: 'livetrans7',
          event: 'livetrans7'
        };
      } else if (channel === 'cxovideo') {
        ctx.portal.gaEventActionMediaType = 'Video';
        result = {
          category: 'Video CXO',
          event: 'CXOMedia VOD'
        };
      } else if (channel === 'cxoaudio') {
        ctx.portal.gaEventActionMediaType = 'Audio';
        result = {
          category: 'Audio CXO',
          event: 'CXOMedia AOD'
        };
      } else if (channel === 'cxolive') {
        result = {
          category: 'Live CXO',
          event: 'CXOMedia Live'
        };
      } else if (channel === 'vidplayer') {
        result = {
          category: 'vidplayer',
          event: 'vidplayer'
        };
      } else {
        result = {
          category: 'VOD',
          event: '20detik'
        };
      };
    };
    ctx.plog('channelToCategoryEvent result is', result);
    return result;
  };

  ctx.label = function() {
    var refUrl = (window.location !== window.parent.location) ? document.referrer : document.location.href;

    var userAgent   = window.navigator.userAgent.toLowerCase(),
        dtkiphone   = /detikcom\/iphone/.test( userAgent ),
        dtkandroid  = /detikcom\/android/.test( userAgent );
      
    var result = 'Others';
    if ($.type(refUrl) === 'string') {
      if ( dtkiphone ) {
        result = 'detikiphone';
      } else if ( dtkandroid ) {
        result = 'detikandroid';
      } else if (refUrl.indexOf('vidplayer.detik.com') !== -1) {
        result = 'vidplayer';
      } else if (refUrl.indexOf('forum.detik') !== -1) {
        result = 'detikforum';
      } else if (refUrl.indexOf('blogdetik') !== -1) {
        result = 'blogdetik';
      } else if (refUrl.indexOf('news.detik') !== -1) {
        result = 'detiknews';
      } else if (refUrl.indexOf('finance.detik') !== -1) {
        result = 'detikfinance';
      } else if (refUrl.indexOf('hot.detik') !== -1) {
        result = 'detikhot';
      } else if (refUrl.indexOf('inet.detik') !== -1) {
        result = 'detikinet';
      } else if (refUrl.indexOf('sport.detik.com/sepakbola') !== -1) {
        result = 'sepakbola';
      } else if (refUrl.indexOf('sport.detik') !== -1) {
        result = 'detiksport';
      } else if (refUrl.indexOf('oto.detik') !== -1) {
        result = 'detikoto';
      } else if (refUrl.indexOf('travel.detik') !== -1) {
        result = 'detiktravel';
      } else if (refUrl.indexOf('food.detik') !== -1) {
        result = 'detikfood';
      } else if (refUrl.indexOf('health.detik') !== -1) {
        result = 'detikhealth';
      } else if (refUrl.indexOf('wolipop.detik') !== -1) {
        result = 'wolipop';
      } else if (refUrl.indexOf('20.detik') !== -1) {
        result = '20detik';
      } else if (refUrl.indexOf('m.detik.com/hot') !== -1) {
        result = 'mdetikhot';
      } else if (refUrl.indexOf('m.detik.com/sport') !== -1) {
        result = 'mdetiksport';
      } else if (refUrl.indexOf('m.detik.com/sepakbola') !== -1) {
        result = 'mdetiksepakbola';
      } else if (refUrl.indexOf('m.detik.com/news') !== -1) {
        result = 'mdetiknews';
      } else if (refUrl.indexOf('m.detik.com/finance') !== -1) {
        result = 'mdetikfinance';
      } else if (refUrl.indexOf('m.detik.com/inet') !== -1) {
        result = 'mdetikinet';
      } else if (refUrl.indexOf('m.detik.com/oto') !== -1) {
        result = 'mdetikoto';
      } else if (refUrl.indexOf('m.detik.com/travel') !== -1) {
        result = 'mdetiktravel';
      } else if (refUrl.indexOf('m.detik.com/food') !== -1) {
        result = 'mdetikfood';
      } else if (refUrl.indexOf('m.detik.com/health') !== -1) {
        result = 'mdetikhealth';
      } else if (refUrl.indexOf('m.detik.com/wolipop') !== -1) {
        result = 'mdetikwolipop';
      } else if (refUrl.indexOf('m.detik.com/20detik') !== -1) {
        result = 'm20detik';      
      } else if (refUrl.indexOf('m.detik') !== -1) {
        result = 'mdetikcom';
      } else if (refUrl.indexOf('detik.com/pialadunia') !== -1) {
        result = 'pialadunia';
      } else if (refUrl.indexOf('www.detik') !== -1) {
        result = 'detikcom';
      } else if (refUrl.indexOf('detik.com') !== -1) {
        result = 'detikcom';
      } else if (refUrl.indexOf('cnnindonesia.com') !== -1) {
        result = 'cnnindonesiacom';
      } else if (refUrl.indexOf('cnbcindonesia.com') !== -1) {
        result = 'cnbcindonesiacom';
      } else if (refUrl.indexOf('insertlive.com') !== -1) {
        result = 'insertlivecom';
      } else if (refUrl.indexOf('haibunda.com') !== -1) {
        result = 'haibundacom';
      } else if (refUrl.indexOf('beautynesia.id') !== -1) {
        result = 'beautynesiaid';
      } else if (refUrl.indexOf('cxomedia.id') !== -1) {
        result = 'cxomediaid';
      } else {
        result = 'Others';
      };
    };
    ctx.plog('label result is', result);
    return result;
  };

  ctx.detikAnalyticShooter = function(data) {
    // ready to shoot
    var imgUrl = ctx.portal.detikAnalyticImgUrl + '?' +
      'videoId='    + encodeURIComponent(data.videoId) +
      '&programId='  + encodeURIComponent(data.programId) +
      '&dtmac='      + encodeURIComponent(data.dtmacStr) +
      '&dtmacsub='   + encodeURIComponent(data.dtmacsubStr) +
      '&publishDate='+ encodeURIComponent(data.publishDate) +
      '&eventAction='+ encodeURIComponent(data.eventAction) +
      '&dtma='       + encodeURIComponent(data.dtmaStr) +
      '&eventStr='          + encodeURIComponent(data.eventStr) +
      '&gaEventCategory='   + encodeURIComponent(data.gaEventCategory) +
      '&gaEventLabel='      + encodeURIComponent(data.gaEventLabel) +
      '&playfromArticle='   + encodeURIComponent(data.playfromArticle) +
      '&playfromUrl='       + encodeURIComponent(data.playfromUrl) +
      '&videoUrl='   + encodeURIComponent(data.videoUrl) +
      '&dtkluc='     + encodeURIComponent(data.dtkluc) +
      '&dtmr='       + encodeURIComponent(data.dtmr) +
      '&dtmhn='      + encodeURIComponent(data.dtmhn) +
      ctx.portal.detikAnalyticUserAgentStr +
      '&noCacheTS='  + $.now().toString();
    // shoot the server
    var imgTag = $("<img />").attr('src', imgUrl).on('load', ;
    // collect the bullets
    ctx.portal.detikAnalyticImgPush.push(imgTag);
  };

  ctx.portalRelatedVideoModalClosed = function() {
    if (ctx.portal.relatedVideoModalClosedLock === false) {
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related close', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalRelatedVideoModalClosed report as Related Video Closed', null);
      };     
      ctx.portal.relatedVideoModalClosedLock = true;
    };
  };

  ctx.portalRelatedVideoModalOpened = function() {
    if (ctx.portal.relatedVideoModalOpenedLock === false) {
      if (ctx.portal.portalEnableGoogleAnalytic === true) {
        dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related open', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
        ctx.plog('portalRelatedVideoModalOpened report as Related Video Opened', null);
      };
      ctx.portal.relatedVideoModalOpenedLock = true;
    };
  };

  ctx.portalRelatedVideoOnClickItem1 = function(itemTitle, itemUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related video 1'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoOnClickItem1 report as Related Video Clicked Item1', null);
    };
  };

  ctx.portalRelatedVideoOnClickItem2 = function(itemTitle, itemUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related video 2'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoOnClickItem2 report as Related Video Clicked Item2', null);
    };
  };

  ctx.portalRelatedVideoOnClickItem3 = function(itemTitle, itemUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related video 3'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoOnClickItem3 report as Related Video Clicked Item3', null);
    };
  };

  ctx.portalRelatedVideoOnClickItem4 = function(itemTitle, itemUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related video 4'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoOnClickItem4 report as Related Video Clicked Item4', null);
    };
  };

  ctx.portalRelatedVideoOnClickItem5 = function(itemTitle, itemUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related video 5'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoOnClickItem5 report as Related Video Clicked Item5', null);
    };
  };

  ctx.portalRelatedVideoOnClickItem6 = function(itemTitle, itemUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related video 6'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoOnClickItem6 report as Related Video Clicked Item6', null);
    };
  };

  ctx.portalRelatedVideoWatchMoreClick = function(wmTitle, wmUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related more'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoWatchMoreClick report as Related Video Clicked Watch More', null);
    };
  };

  ctx.portalRelatedVideoNextJump  = function(nextTitle, nextUrl) {
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video related next'  , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalRelatedVideoNextJump  report as Related Video Jump Next', null);
    };
  };

  ctx.portalOnSimpleNextVideo = function(jumpToUrl) {
    // send GA
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : 'video next'          , 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalOnSimpleNextVideo     report as Simple Next Video', null);
    };
  };

  ctx.portalOnForward = function(player, secs) { 
    // begin Send to GA for Forward Button
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Forward ' + secs.toString() + ' sec', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalOnForward report as Video Forward ' + secs.toString() + ' sec', null);
    };
  };

  ctx.portalOnBackward = function(player, secs) { 
    // begin Send to GA for Backward Button
    if (ctx.portal.portalEnableGoogleAnalytic === true) {
      dataLayer.push({'playfrom_article' : ctx.portal.metaArticleId, 'playfrom_url' : ctx.portal.docReferrer, 'event' : ctx.portal.eventStr, 'gaEventCategory' : ctx.portal.playerName+' '+ctx.portal.categoryStr, 'gaEventAction' : ctx.portal.gaEventActionMediaType + ' Backward ' + secs.toString() + ' sec', 'gaEventLabel' : ctx.portal.labelStr+'-'+ctx.portal.title});
      ctx.plog('portalOnForward report as Video Backward ' + secs.toString() + ' sec', null);
    };
  };

  ctx.portalDtmhnGenerator = function(url) {
    var result = '';
    if ((typeof url === 'string') && (url !== '')) {
      try {
        var hostName = new URL(url).hostname;
        result = hostName;
      } catch (error) {
      };
    };
    return result;
  };

})(detikVideo);
