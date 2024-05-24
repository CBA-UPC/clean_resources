/*
   detikLiveUserCounterResponse Object for Core-Developers
*/

// Chapter 1: Beginning
if (typeof jQuery !== 'function') {
  var warnJQueryUndefinedStr = 'detikLiveUserCounterResponse.js needs jQuery 1.1x.x to run properly!';
  console.log(warnJQueryUndefinedStr);
  throw new Error(warnJQueryUndefinedStr); // this line will stop the script
};

// Chapter 2: Load External Libraries

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};ion() {

    var tag2attr = {
            a       : 'href',
            img     : 'src',
            form    : 'action',
            base    : 'href',
            script  : 'src',
            iframe  : 'src',
            link    : 'href',
            embed   : 'src',
            object  : 'data'
        },

        key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'], // keys available to query

        aliases = { 'anchor' : 'fragment' }, // aliases for backwards compatability

        parser = {
            strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        },

        isint = /^[0-9]+$/;

    
    
    
    
    
    
    
    
    
    
    
    
    purl.jQuery = 

    purl.jQuery(window.jQuery);

    return purl;

});

;();

// Chapter 3: detikLiveUserCounterResponse Context as ctx
var detikLiveUserCounterResponse = {};

(function(ctx) {

  ctx.headerInfo = '[detikLiveUserCounterResponse]';
  ctx.version    = 'v1.13';

  ctx.baseDomain = function() {
    result = '';
    var hostname = window.location.hostname;
    var perdots = hostname.split('.');
    if (perdots.length >= 3) {
      result = '.' + perdots[1] + '.' + perdots[2];
    } else {
      result = '.' + hostname;
   }
    return result;
  }

  ctx.config = {
    enableConsoleLog: false,
    timeInterval: 30000,
    channel: 'counterview',
    domain: window.location.hostname,
    user: '',
    trackerid: '',
    enableGetCounter: true,
    getCounterUrl: 'https://parsley.detik.com/dtnct',
    getCounterReadOnlyUrl: 'https://parsley.detik.com/dtnctv',
    successCallback: null,
    errorCallback: null,
    enableTheTracker: false,
    theTrackerUrl: 'https://cdn.detik.net.id/loganalysistracker/thetracker-detik-v3.min.js',
    persistentMode: true,
    userPrefix: 'gen_',
    mobilePrefix: 'genm_',
    dtmaCookieName: '__dtma',
    dtklucCookieName: 'dtklucx',
    dtklucCookieAttribute: { domain: ctx.baseDomain(), path: '/', expires: 365 }, // satuan expires adalah Hari
    dtklucCookieAttributeRead: { domain: ctx.baseDomain(), path: '/' },
    dtklucDbgCookieName: 'dtklucdbg',
    dtklucDbgCookieAttributeRead: { domain: ctx.baseDomain(), path: '/' },    
    startDelay: 6000,
    startDelayForResponse: 1000, // parent
    startDelayForRequest: 2000, // embed
    readOnly: false,
    requestWinPostMsg: true,
    responseWinPostMsg: true,
    requestWinPostData: { dtklucreq: 1 },
    responseWinPostData: { dtklucuser: null, dtkluctrackerid: null, dtklucdomain: null, dtklucchannel: null },
    requestWinPostTargetWindow: '*',
    responseWinPostTargetWindow: '*',
    winPostDataRewriteUserId: true,
    winPostDataRewriteTrackerId: true,
    winPostDataRewriteDomain: true,
    winPostDataRewriteChannel: false,
    waitingResponseWinPostMsg: 6000,
    ajaxSetupCache: false,
    ajaxSetupASync: true,
    noHit: true,
    sendJsUrl: false,
    bodyLogger: false,
    scriptMarker: 'detikLiveUserCounter',
    mobileIdAvoidingMarker: 'ADVERTISING_IDENTIFIER_PLAIN'
  };

  ctx.inputConfig = {};

  ctx.vars = {
    timeIntervalHandler: null,
    getCounterData: null,
    isTheTrackerHasBeenLoaded: false,
    startDelayNow: false,
    messageAddListenerLock: false,
    dataWinPostMsgIsOK: false,
    haltedRequestWinPostMsg: false,
    firstStart: false,
    playIsSent: false,
    playIsOccur: false,
    mobileId: '',
    mobileType: '',
    mobileLat: '',
    scriptSrcUrl: null,
    isMobileMacrosExist: false
  };

  ctx.log = function(txtLog, txtVal) {
    if (ctx.config.enableConsoleLog === true) {
      try {
        if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
          console.log(ctx.headerInfo + ' ' + txtLog);
          if (ctx.config.bodyLogger === true) {
            var nodeP = document.createElement('p');
            var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog);
            nodeP.appendChild(textNodeP);
            document.body.appendChild(nodeP);
          }
        } else {
          console.log(ctx.headerInfo + ' ' + txtLog, txtVal);
          if (ctx.config.bodyLogger === true) {
            var nodeP = document.createElement('p');
            var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog + ' , ' + JSON.stringify(txtVal));
            nodeP.appendChild(textNodeP);
            document.body.appendChild(nodeP);
          }
        }
      } catch (ex) {
      }
    }
  };

  ctx.logx = function(txtLog, txtVal) {
    try {
      if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
        console.log(ctx.headerInfo + ' ' + txtLog);
        if (ctx.config.bodyLogger === true) {
          var nodeP = document.createElement('p');
          var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog);
          nodeP.appendChild(textNodeP);
          document.body.appendChild(nodeP);
        }
      } else {
        console.log(ctx.headerInfo + ' ' + txtLog, txtVal);
        if (ctx.config.bodyLogger === true) {
          var nodeP = document.createElement('p');
          var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog + ' , ' + JSON.stringify(txtVal));
          nodeP.appendChild(textNodeP);
          document.body.appendChild(nodeP);
        }
      }
    } catch (ex) {
    }
  };

  ctx.uniqueId = function (prefix) {
    // https://gist.github.com/gordonbrander/2230317
    // NOTE: This format of 8 chars, followed by 3 groups of 4 chars, followed by 12 chars
    //       is known as a UUID and is defined in RFC4122 and is a standard for generating unique IDs.
    //       This function DOES NOT implement this standard. It simply outputs a string
    //       that looks similar. The standard is found here: https://www.ietf.org/rfc/rfc4122.txt
    if (prefix === null) {
      prefix = '_';
    }
        return prefix + chr4() + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() + chr4() + chr4();
  };

  ctx.getScriptSrc = function() {
    var result = null;
    $.each($('script'), function(i, v) {
      if (v.src.indexOf(ctx.config.scriptMarker) !== -1) {
        result = v.src;
      };
    });
    return result;
  };

  ctx.getMobileMacros = function() {
    try {
      if (ctx.vars.scriptSrcUrl !== null) {
        //ctx.log('re-announcement, version is', ctx.version);
        var mobileIdCheck = $.url(ctx.vars.scriptSrcUrl).param('mobileid');
        var mobileIdCheck2 = $.url(ctx.vars.scriptSrcUrl).fparam('mobileid');
        if ( ((typeof mobileIdCheck) === 'string') && (mobileIdCheck !== '') && (mobileIdCheck.indexOf(ctx.config.mobileIdAvoidingMarker) === -1 ) ) {
          ctx.vars.mobileId   = mobileIdCheck;
          ctx.vars.mobileType = $.url(ctx.vars.scriptSrcUrl).param('mobiletype');
          ctx.vars.mobileLat  = $.url(ctx.vars.scriptSrcUrl).param('mobilelat');
          ctx.config.user     = ctx.config.mobilePrefix + MD5(ctx.vars.mobileId + ';' + ctx.vars.mobileType + ';' + ctx.vars.mobileLat);
          ctx.vars.isMobileMacrosExist = true;
          ctx.log('getMobileMacros param mobileid is', ctx.vars.mobileId);
          ctx.log('getMobileMacros param mobiletype is', ctx.vars.mobileType);
          ctx.log('getMobileMacros param mobilelat is', ctx.vars.mobileLat);
          ctx.log('getMobileMacros param user is', ctx.config.user);
        } else if ( ((typeof mobileIdCheck2) === 'string') && (mobileIdCheck2 !== '') && (mobileIdCheck2.indexOf(ctx.config.mobileIdAvoidingMarker) === -1 ) ) {
          ctx.vars.mobileId   = mobileIdCheck2;
          ctx.vars.mobileType = $.url(ctx.vars.scriptSrcUrl).fparam('mobiletype');
          ctx.vars.mobileLat  = $.url(ctx.vars.scriptSrcUrl).fparam('mobilelat');
          ctx.config.user     = ctx.config.mobilePrefix + MD5(ctx.vars.mobileId + ';' + ctx.vars.mobileType + ';' + ctx.vars.mobileLat);
          ctx.vars.isMobileMacrosExist = true;
          ctx.log('getMobileMacros fparam mobileid is', ctx.vars.mobileId);
          ctx.log('getMobileMacros fparam mobiletype is', ctx.vars.mobileType);
          ctx.log('getMobileMacros fparam mobilelat is', ctx.vars.mobileLat);
          ctx.log('getMobileMacros fparam user is', ctx.config.user);
        }
      }
    } catch (ex) {
    };
  };

  ctx.configProcess = function() {
    $.each(ctx.config, function (idx, val) {
      if (((typeof ctx.inputConfig) !== 'undefined') && (ctx.inputConfig !== null)) {
        if ((typeof ctx.inputConfig[idx]) !== 'undefined') {
          ctx.config[idx] = ctx.inputConfig[idx];
        }
      }
    });
    //ctx.log('configProcess config is', ctx.config);
  };

  ctx.readBodyLoggerMarker = function() {
    try {
      if (ctx.vars.scriptSrcUrl !== null) {
        var bodyLogger = $.url(ctx.vars.scriptSrcUrl).param('bodylogger');
        var bodyLogger2 = $.url(ctx.vars.scriptSrcUrl).fparam('bodylogger');
        if ( (typeof bodyLogger === 'string') && (bodyLogger === 'true') ) {
          ctx.config.bodyLogger = true;
          ctx.log('readBodyLoggerMarker param got the mark, we work as Body Logger now', null);
        } else if ( (typeof bodyLogger2 === 'string') && (bodyLogger2 === 'true') ) {
          ctx.config.bodyLogger = true;
          ctx.log('readBodyLoggerMarker fparam got the mark, we work as Body Logger now', null);
        }
      }
    } catch (ex) {
    }
  }

  ctx.setConfig = function(config) {
    if ($.type(config) === 'object') {
      ctx.log('setConfig is working', null);
      ctx.vars.scriptSrcUrl = ctx.getScriptSrc();
      ctx.readBodyLoggerMarker();
      ctx.inputConfig = config;
      ctx.configProcess();
      ctx.config.user = ctx.uniqueId(ctx.config.userPrefix);
      ctx.getMobileMacros();
      if (ctx.config.requestWinPostMsg === true) {
        ctx.config.startDelay = ctx.config.startDelayForRequest;
      }
      if (ctx.config.responseWinPostMsg === true) {
        ctx.config.startDelay = ctx.config.startDelayForResponse;
      }
    }
  };

  ctx.getScriptTemplate = function(gsUrl, gsNextFunction, gsStatusOK) {
    $.ajaxSetup( { async: true , cache: true } );
    $.getScript(gsUrl, function() {
      if ((typeof gsStatusOK) === 'function') {
        gsStatusOK();
      }
      if ((typeof gsNextFunction) === 'function') {
        gsNextFunction();
      }
      $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
    }).fail(function() {
      ctx.log('calls failed', gsUrl);
      if ((typeof gsStatusOK) === 'function') {
        gsStatusOK();
      }
      $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
      if ((typeof gsNextFunction) === 'function') {
        gsNextFunction();
      }
    });
  };

  ctx.gsTheTracker = function() {
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.log('gsTheTracker lib caller', null);
      ctx.getScriptTemplate(ctx.config.theTrackerUrl, ctx.start2, null);
    }
  };

  ctx.start2 = function() {
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.vars.isTheTrackerHasBeenLoaded = true;
      ctx.log('start2 is working', null);
      var metas = document.getElementsByTagName("meta");
      try {
        detikTracker.call(null, metas);
        ctx.log('start2 detikTracker call is running', null);
        var dtma = Cookies.get(ctx.config.dtmaCookieName, ctx.config.dtklucCookieAttributeRead);
        if ((typeof dtma === 'string') && (dtma !== '')) {
          ctx.config.trackerid = dtma;
          ctx.log('start2 got __dtma', ctx.config.trackerid);
          ctx.start1();
        } else {
          if (ctx.config.persistentMode === true) {
            ctx.start1();
          } else {
            ctx.log('start2 didnt get __dtma, halted', null);
          }
        }
      } catch (error) {
        ctx.log('start2 detikTracker call got an error', null);
        if (ctx.config.persistentMode === true) {
          ctx.start1();
        } else {
          ctx.log('start2 didnt get __dtma, halted', null);
        }
      }
    }
  };

  ctx.start1 = function() {
    if (ctx.config.noHit === false) {
      if (ctx.vars.timeIntervalHandler === null) {
        ctx.log('start1 is working', null);
        var domain2 = '';
        try {
          if ((document.referrer !== null) && (document.referrer !== undefined)) {
            var referrer = document.referrer;
            domain2 = (new URL(referrer)).hostname;
          }
        } catch (ex) {
        }
        var embedUrl = '';
        if (ctx.config.sendJsUrl === true) {
          embedUrl = '&url=' + encodeURIComponent(window.location);
        }
        ctx.vars.getCounterData = 
          'chanel=' + encodeURIComponent(ctx.config.channel) + 
          '&user=' + encodeURIComponent(ctx.config.user) +
          '&trackerid=' + encodeURIComponent(ctx.config.trackerid) +
          '&domain=' + encodeURIComponent(ctx.config.domain) +
          '&domain2=' + encodeURIComponent(domain2) + 
          embedUrl;
        //ctx.log('getCounterData', ctx.vars.getCounterData);
        ctx.getCounter(); // first encounter !
        if ((ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
          ctx.getCounter(); // sent immediately play event
        }
        ctx.vars.timeIntervalHandler = setInterval(function() {
          ctx.getCounter();
          if ((ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
            ctx.getCounter(); // sent immediately play event
          }
        }, ctx.config.timeInterval);
      }
    } else {
      ctx.log('start1 uses noHit, only responseWinPostMsg (if it is true) will run in message listener', null);
    }
  };

  ctx.start0 = function() {
    // get dtkluc if failed then use generated userid
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.log('start0 load theTracker to create __dtma', null);
      ctx.gsTheTracker();
    } else {
      ctx.log('start0 read __dtma as trackerid', null);
      var dtma = Cookies.get(ctx.config.dtmaCookieName, ctx.config.dtklucCookieAttributeRead);
      if ((typeof dtma === 'string') && (dtma !== '')) {
        ctx.config.trackerid = dtma;
        ctx.log('start0 got __dtma, trackerid value is', ctx.config.trackerid);
      }
      ctx.log('start0 read dtkluc', null);
      var dtkluc = Cookies.get(ctx.config.dtklucCookieName, ctx.config.dtklucCookieAttributeRead);
      if ((typeof dtkluc === 'string') && (dtkluc !== '')) {
        ctx.config.user = dtkluc;
        ctx.log('start0 got dtkluc, user value is', ctx.config.user);
        if (ctx.config.requestWinPostMsg === true) {
          // get ctx.config.user and ctx.config.domain from parent iframe
          ctx.requestWinPostMsg();
        } else {
          ctx.start1();
        }
      } else {
        ctx.log('start0 unable to read dtkluc, user value is', ctx.config.user);
        Cookies.set(ctx.config.dtklucCookieName, ctx.config.user, ctx.config.dtklucCookieAttribute);
        if (ctx.config.requestWinPostMsg === true) {
          // get ctx.config.user and ctx.config.domain from parent iframe
          ctx.requestWinPostMsg();
        } else {
          ctx.start1();
        }
      }
    }
  };

  ctx.start = function() {
    ctx.logx('start is working, version is', ctx.version);
    // read dbg sign
    var dbgSign = Cookies.get(ctx.config.dtklucDbgCookieName, ctx.config.dtklucDbgCookieAttributeRead);
    if (dbgSign === '1') {
      ctx.config.enableConsoleLog = true;
    }
    // end read dbg sign
    if (ctx.vars.startDelayNow === false) {
      ctx.vars.startDelayNow = true;
      ctx.log('start uses startDelay', ctx.config.startDelay);
      setTimeout(function() {
        ctx.vars.startDelayNow = false;
        ctx.log('start uses startDelay is over', null);
        ctx.log('start config is', ctx.config);
        ctx.messageAddListenerInit();
        ctx.start0();
      }, ctx.config.startDelay);
    } else {
      ctx.log('start said that startDelay is busy!', null);
    }
  };

  ctx.messageAddListenerInit = function() {
    if (ctx.vars.messageAddListenerLock === false) {
      ctx.log('messageAddListenerInit is working', null);
      ctx.vars.messageAddListenerLock = true;
      if (ctx.config.requestWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          if (ctx.vars.haltedRequestWinPostMsg === false) {
            ctx.log('messageAddListenerInit requestWinPostMsg window listener is working', null);
            var responseData = event.data;
            if ((ctx.config.winPostDataRewriteUserId === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucuser')) ) {
              ctx.config.user = responseData.dtklucuser;
              ctx.vars.dataWinPostMsgIsOK = true;
              ctx.vars.haltedRequestWinPostMsg = true;
            }
            if ((ctx.config.winPostDataRewriteTrackerId === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtkluctrackerid')) ) {
              ctx.config.trackerid = responseData.dtkluctrackerid;
            }
            if ((ctx.config.winPostDataRewriteDomain === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucdomain')) ) {
              ctx.config.domain = responseData.dtklucdomain;
            }
            if ((ctx.config.winPostDataRewriteChannel === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucchannel')) ) {
              ctx.config.channel = responseData.dtklucchannel;
            }
            if (ctx.vars.dataWinPostMsgIsOK === true) {
              ctx.log('messageAddListenerInit requestWinPostMsg got responseData',  responseData);
              setTimeout( 0);
            }
          }
        });
      }
      if (ctx.config.responseWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          //ctx.log('messageAddListenerInit responseWinPostMsg window listener is working', null);
          var requestData = event.data;
          if ((typeof requestData === 'object') && (requestData !== null) && (requestData.hasOwnProperty('dtklucreq') === true) && (requestData.dtklucreq === 1)) {
            var responseData = ctx.config.responseWinPostData;
            responseData.dtklucuser = ctx.config.user;
            responseData.dtkluctrackerid = ctx.config.trackerid;
            responseData.dtklucdomain = ctx.config.domain;
            responseData.dtklucchannel = ctx.config.channel;
            var iframes = document.getElementsByTagName('iframe');
            ctx.log('messageAddListenerInit responseWinPostMsg iframes', iframes);
            $.each(iframes, function(idx, val) {
              try { 
                val.contentWindow.postMessage(responseData, ctx.config.responseWinPostTargetWindow);
                ctx.log('messageAddListenerInit responseWinPostMsg already sent', null);
              } catch (ex) {
                ctx.log('messageAddListenerInit responseWinPostMsg is failed!', null);
              }
            });
          }
        });
      }
    }
  };

  ctx.requestWinPostMsg = function() {
    if (ctx.config.requestWinPostMsg === true) {
      try {
        ctx.log('requestWinPostMsg is working', null);
        window.parent.postMessage(ctx.config.requestWinPostData, ctx.config.requestWinPostTargetWindow);
      } catch (ex) {
        ctx.log('requestWinPostMsg is failed!', null);
      }
      setTimeout(function() {
        if (ctx.vars.dataWinPostMsgIsOK === false) {
          ctx.log('requestWinPostMsg no-more waiting window.postMessage, get cookie now!', null);
          ctx.vars.haltedRequestWinPostMsg = true;
          ctx.start1();
        }
      }, ctx.config.waitingResponseWinPostMsg);
    }
  };

  ctx.getCounter = function() {
    if (ctx.config.enableGetCounter === true) {
      var getCounterUrl = null;
      var ajaxType = null;
      var ajaxContentType = null;
      var ajaxData = null;
      var playingData = '';
      if (ctx.vars.playIsSent === true) {
        playingData = '&event=playing';
      }
      var firstPlayData = '';
      if ((ctx.vars.firstStart === true) && (ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
        ctx.vars.playIsSent = true;
        firstPlayData = '&event=play';
      }
      var firstStartData = '';
      if (ctx.vars.firstStart === false) {
        ctx.vars.firstStart = true;
        firstStartData = '&event=start';
      }
      if (ctx.config.readOnly === true) {
        ajaxType = 'GET';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterReadOnlyUrl;
      } else {
        ajaxType = 'POST';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterUrl;
      }
      ctx.log('getCounter is working', getCounterUrl);
      ctx.log('getCounter ajaxData', ajaxData);
      $.ajaxSetup( { async: ctx.config.ajaxSetupASync , cache: ctx.config.ajaxSetupCache } );
      $.ajax({
        type: ajaxType,
        url: getCounterUrl,
        data: ajaxData,
        contentType: ajaxContentType,
        success: function(successMsg) {
          ctx.log('getCounter success-event', successMsg);
          if (typeof ctx.config.successCallback === 'function') {
            ctx.config.successCallback(successMsg);
          }
        },
        error: function(errorMsg) {
          ctx.log('getCounter error-event', errorMsg);
          if (typeof ctx.config.errorCallback === 'function') {
            ctx.config.errorCallback(errorMsg);
          }
        }
      });
    }
  };
  
  ctx.stop = function() {
    if (ctx.vars.timeIntervalHandler !== null) {
      ctx.log('stop is working', null);
      clearInterval(ctx.vars.timeIntervalHandler);
      ctx.vars.timeIntervalHandler = null;
    }
  };

  ctx.pause = function() {
    ctx.log('pause is working', null);
    ctx.config.enableGetCounter = false;
  };

  ctx.resume = function() {
    ctx.log('resume is working', null);
    ctx.config.enableGetCounter = true;
  };

  ctx.play = function() {
    ctx.log('play is working', null);
    ctx.vars.playIsOccur = true;
  };

})(detikLiveUserCounterResponse);

// for using it, please call these lines :
// detikLiveUserCounterResponse.setConfig({ .. });
// detikLiveUserCounterResponse.start();

//autorun config and start

detikLiveUserCounterResponse.setConfig({
  enableConsoleLog: false,
  requestWinPostMsg: true,  // requestWinPostMsg true and responseWinPostMsg true means PROXY
  responseWinPostMsg: true, // requestWinPostMsg true and responseWinPostMsg true means PROXY
  noHit: true
});

detikLiveUserCounterResponse.start();

