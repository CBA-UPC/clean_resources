/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports) {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(Mustache); // script, wsh, asp
  }
}(this, );
var MLConfig = (function(){
        var configs= {},
            helper = {},
            playlist = {},
            scripts = {},
            view   = {};
        
        // for playlist.js
        playlist.html = {
            "videoId"                   : "lcVideo",
            "ulClass"                   : "ul.plain.video_list",
            "playerId"                  : "mediaInstanceLc"
        };
        
        // define url variables
        configs.url = {
            "protocol"                  : window.location.protocol,
            "domain"                    : "//cdn.loc.gov",
            "mediaApiUrl"               : "//media.loc.gov/services/v1/media",
            "path"                      : "/loader",
            "projectPath"               : "/loader",
            "shareURL"                  : "/embed" ,
            "embedFile"                 : "/embed-with-loader.php",
            "jquery.min.js"             : "//cdn.loc.gov/js/lib/jquery-1.8.2.min.js",
            "jquery.ui.min.js"          : "//cdn.loc.gov/js/lib/jquery-ui-1.10.2.custom.min.jss",
            "playlist"                  : "//cdn.loc.gov/loader/js/app/template/video-presenter.html"
        };
        
        // define jwplayer variables
        configs.jwplayer = {
            key                         : "75DeRy2BP1VMzbFD19cjf31xKYkaPlOA2wLQGtt86p89pZIJ",
            "basePath"                  : window.location.protocol + configs.url.domain + configs.url.projectPath +
                                          "/js/jwplayer-7.9.3",
            "flashPlayer"               : window.location.protocol + configs.url.domain + configs.url.projectPath +
                                          "/js/jwplayer-7.9.3/jwplayer.flash.swf",
            "aboutText"                 : "Library of Congress (loc.gov)",
            "downloadIcon"              : "//demo.jwplayer.com/interactive-transcript/download.png",
            "downloadText"              : "Download",
            "downloadId"                : "download",
            "trackLabel"                : "English",
            "trackKind"                 : "captions",
            skin                        :  window.location.protocol + 
                                           configs.url.domain + 
                                           configs.url.projectPath +
                                           "/js/jwplayer-7.9.3/skins/glow.css"
        };
        
        // define html class names
        configs.classNames = {
            "codeTag"                   : ".locmedia-player-this",
            "defaultAspectRatio"        : "loc-video-wrapper",
            "alternativeAspectRatio"    : "four-by-three",
            "playlist"                  : "featured-webcasts",
            "oldObjectTag"              : ".loc_wp_flash_dependency",
            "mediaPlayerWrapper"        : "media-player-wrapper-",
            "playlist"                  : "playlist",
            "audioMetadata"             : "audio-metadata-div",
            "videoObject"               : "videoobject",
            "mediaPlayerWrapper"        : "media-player-wrapper-",
            "playlist"                  : "media-player-wrapper-playlist-",            
            "tableDiv"                  : "table-div",
            "audioInfo"                 : "audio-metadata-div",
            "shareAudioPrefix"          : "share-audio-",
            "audioInputPrefix"          : "audio-",
            "audioButtonPrefix"         : "button-",
            "audioButtonLinkPrefix"     : "button-link-",
            "audioShareLinkPrefix"      : "share-link-",
            "audioInfoDiv"              : "audio-info-div",
            "uiDialogTitlebarClose"     : "ui-dialog-titlebar-close",
            "transcriptDiv"             : "transcript-div"
        };
        
        // define default values
        configs.defaults = {
            "aspectRatio"               : "16:9",
            "mediaType"                 : "v",
            "codeTagId"                 : "mediaInstance",
            "newCodeTagId"              : "player",
            "playerMode"                : "html5",
            "playerSize"                : "mediumStandard",
            "playerWidth"               : 692,
            "playerHeight"              : 380,
            "shareDivHeight"            : 110,
            "accessibleLineHeight"      : 26,
            "shareAccessibleBar"        : true,
            "accessibleHeight"          : function(width) {
                if(!configs.defaults.shareAccessibleBar) {
                    return 0;
                } else {
                    var lines = 1;
                    
                    switch(true) {
                        case (width <= 500): lines = 3;
                                  break;                
                        case (width > 500 && width <= 600): lines = 2;
                                  break;
                        case (width > 600): lines = 1;
                                  break; 
                        default: lines = 1;
                                 break;
                    }
                    
                    return configs.defaults.accessibleLineHeight * lines;
                }
                
            },
            "windowWidth"               : 1024,
            "windowHeight"              : 768,
            "audioHeight"               : 32,
            "audioMetadataHeight"       : 130,
            "width"                     : "100%",
            "listbarPosition"           : "left",
            "playlistSize"              : 0,
            "embedFile"                 : "embed-with-loader.php",
            "background"                : "",
            "tabindex"                  : 1,
            "download"                  : "Y",
            "embed"                     : "Y",
            "metadataString"            : "Audio provided by Library of Congress",
            "dialogWidth"               : 500,
            "modal"                     : true,
            "dialogHeight"              : 300,
            "dialogResizable"           : false,
            "closeOnEscape"             : false,
            "playlistCount"             : 0,
            "AccessibleLineHeight"      : 24,
            "loadCss"                   : true,
            "maxMetadataLength"         : 3
        };
        
        // alternative value to default
        configs.alternative = {
            "aspectRatio"               : "4:3",
            "listbarPosition"           : "bottom",
            "listbarSize"               : 235, 
            "layout"                    : "extended",
            "urlParameterForHtmlPlayer" : "html",
            "videoObject"               : "video-object" 
        };
        
        // disabled variables
        configs.no = {
            "playlistPosition"          : "none",
            "playlistSize"              : 0,
            "playlist"                  : '',
            "playlistHeight"            : 0
        };
        
        
        // declare media type 
        configs.media = {
            "audio"                     : "A",
            "audioExtension"            : "mp3",
            "video"                     : "V"
        };
        
        // enable or disable
        configs.enable = {
            "DefaultAspectratio"        : true,
            "autoHeight"                : true,
            "playlist"                  : true
        };
        
        
        // accessible control background
        configs.accessibility = {
            "seek"                      : 10,
            "volume"                    : 10,
            "keyStroke"                 : 13,
            "playText"                  : "Play/Pause",
            "shareButton"               : "ShareVideo",
            "CenterButton"              : "Play Video",
            "closedCaptioning"          : "Closed Captioning",
            "muteButton"                : "mute/unmute",
            "fullScreenButton"          : "Fullscreen",
            "screenReaderClass"         : "screen-reader"
        };
        
        // load images
        configs.image = {
            "shareIcon"                 : configs.url.domain + 
                                          configs.url.projectPath + 
                                          "/img/sharing.png",
            "closeIcon"                 : configs.url.domain + 
                                          configs.url.projectPath + 
                                          "/img/close9.png"
        };
        
        // arrays for helper
        helper.list = {
            nonFlashSupport : [
                'Android', 
                'iPhone'
            ],
            nonHlsSupport : [
                'Ansssdroid'
            ],
            protocols : [
                'rstmp'
            ]    
        };
        
        // strings, separators in helper
        helper.string = {
            'endline'                   : "ENDLINE"
        };
        
        
        // list of protocols
        helper.protocol = {
            "rtmp"                      : "rtmp",
            "http"                      : "http"
        };
        
       
        
        return {
             'configs'  : configs,
             'helper'   : helper,
             'playlist' : playlist,
             'scripts'  : scripts,
             'view'     : view
             
        }
}()); (function($){
    // get the container div inside the html
    // according to documentation on trac
    $.generateJWPlayerElement = function(id, elementId, videoDivClassName) {
        var container,
            element;
        container = $('#' + id).parent();         
        container.children('p').addClass('table-div-accessible');                          
        element = "<div id=" + id + ">";
        element += "<div id='audio-" + elementId + "' \
        		style='display:none'><div class='audio-info-div'>audio</div></div>";
        element += "<div id='" + elementId + "' \
        		class='" + videoDivClassName + "'></div>";        
        element += "</div>";
        container.parent().fadeIn();
        $('#' + id).replaceWith(element);
        //$('body').append('<div id="show-message"></div>');
    };

})(jQuery);(function($){
    // create share iframe string to share by video
    $.shareIframe = function(params) { 
        var iframe = '';

        iframe += '<iframe class="embed-iframe" src="';
        iframe += MLConfig.configs.url.domain + 
                  MLConfig.configs.url.projectPath +
                  MLConfig.configs.url.shareURL + '/';
        iframe += MLConfig.configs.url.embedFile + '?uuid=';
        iframe += params.mediaObjectId + '&size=';
        iframe += params.playerSize + '&name=';
        iframe += params.encrypted + '&type=V&image=';
        iframe += params.image + '" width="';
        iframe += params.embedWidth + '" height="';
        /*jshint multistr: true */
        iframe += params.height + MLConfig.configs.defaults.accessibleHeight(params.embedWidth) + MLConfig.configs.defaults.shareDivHeight + '" \
frameborder="0" scrolling="no"></iframe>';
        
        return iframe;
    };
    
    $.shareDiv = function(params, elementId) {
        var shareFrame = '', shareDiv = '';
        
        if(params.mediaObjectId) {
            if(params.mediaType === 'V') {
                shareFrame = $.shareIframe(params);
            } else {
                shareFrame = $.shareAudio(params.metadata.replace(/\'/g, ''), params);
            }
            
            shareDiv = '<h2 class="share-button" id="h2-share-' + elementId + '" >\
                    <a href="#">\
                    <!--img src="' + MLConfig.configs.image.shareIcon + '" /-->\
                    <span class="screen-reader">Share </span><i></i>\
                </a>\
            </h2>\
            <div id="ml-share-div-' + elementId + '" class="ml-share-div">\
                <div>\
                    <span class="ml-input-label"><label for="ml-share-input-' + elementId + '">Embed Link:</label></span>\
                    <span class="ml-input"><input value=\'' + shareFrame.replace(/'/g, '"') + '\' id="ml-share-input-' + elementId + '" readonly/></span>\
                    <span class="ml-button"><button class="ml-share-button" onclick="$.selectInput(\'ml-share-input-' + elementId + '\')">Select</button></span>\
                </div>\
                <div>\
                    <span class="ml-input-label"><label for="ml-link-input-' + elementId + '">Page Link:</label></span>\
                    <span class="ml-input"><input value="' + params.detailUrl + '"  id="ml-link-input-' + elementId + '" readonly/></span>\
                    <span class="ml-button"><button class="ml-share-button" onclick="$.selectInput(\'ml-link-input-' + elementId + '\')">Select</button></span>\
                </div>\
            </div>';
        }
        return shareDiv;
    }

}(jQuery));(function($){
    // send request to media.loc.gov to get file information
    // using id which is same as media_object_id
    $.getMediaFromApi = function(json){        
        if (json.mediaObjectId) {
            return $.ajax({
                    url         : MLConfig.configs.url.mediaApiUrl,
                    type        : 'GET',
                    dataType    : 'jsonp',
                    contentType : 'text/plain; charset=utf-8',
                    crossDomain :true,                
                    data        : {
                        id          :json.mediaObjectId, 
                        context     :'jsonp'
                    }                     
            });
        } else  {
            return Promise.reject("A mediaObjectId is required!")
        }
        
    };
})(jQuery);(function(t){function z(){for(var a=0;a<g.length;a++)g[a][0](g[a][1]);g=[];m=!1}function n(a,b){g.push([a,b]);m||(m=!0,A(z,0))}unction u(a){var b=a.owner,c=b.state_,b=b.data_,h=a[c];a=a.then;if("function"===typeof h){c=l;try{b=h(b)}catch(d){k(a,d)}}v(a,b)||(c===l&&p(a,b),c===q&&k(a,b))}nction w(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(C,a))}unction y(a){var b=a.then_;a.then_=void 0;for(a=0;a<b.length;a++)u(b[a])}function C(a){a.state_=l;y(a)}unction e(a){if("function"!==
    typeof a)throw new TypeError("Promise constructor takes a function argument");if(!1===this instanceof e)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[];B(a,this)}var f=t.Promise,s=f&&"resolve"in f&&"reject"in f&&"all"in f&&"race"in f&&function(){var a;new f(;return"function"===typeof a}();"undefined"!==typeof exports&&exports?(exports.Promise=s?f:e,exports.Polyfill=e):"function"==
typeof define&&define.amd?define(:s||(t.Promise=e);var r="pending",x="sealed",l="fulfilled",q="rejected",E=function(){},A="undefined"!==typeof setImmediate?setImmediate:setTimeout,g=[],m;e.prototype={constructor:e,state_:r,then_:null,data_:void 0,then:function(a,b){var c={owner:this,then:new this.constructor(E),fulfilled:a,rejected:b};this.state_===l||this.state_===q?n(u,c):this.then_.push(c);return c.then},"catch":;e.all=function(a){if("[object Array]"!==
    Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.all().");return new this(function(b,c){function h(a){e++;return for(var d=[],e=0,f=0,g;f<a.length;f++)(g=a[f])&&"function"===typeof g.then?g.then(h(f),c):d[f]=g;e||b(d)})};e.race=function(a){if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.race().");return new this(function(b,c){for(var e=0,d;e<a.length;e++)(d=a[e])&&"function"===
typeof d.then?d.then(b,c):b(d)})};e.resolve=function(a){return a&&"object"===typeof a&&a.constructor===this?a:new this(};e.reject=)("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);(function($) {
    $.loadPlayer = function() {
        $(MLConfig.configs.classNames.codeTag).each(function(){

            var config,
                elementId,
                code,
                mediaObject,
                id,
                playlist = [];

            // generate an element id
            elementId           = MLConfig.configs.defaults.codeTagId +
                Math.round(Math.random() * (1000 - 100) + 100);
            
            //The media configuration should be in a div with an id that matches the value in the
            //rel attribute of the player anchor tag
            var relationshipId = '#' + $(this).attr('rel');
            code = $.getPageConfigs($(relationshipId));

            config = $.html2Json(code.html());

            id      = $(this).attr('id');
            id      = id.replace(MLConfig.configs.defaults.codeTagId, MLConfig.configs.defaults.newCodeTagId);

            // If there's a playlist then use it
            if (config.playlist) {
                //The API calls to get the media data for each UUID returns a promise
                //We build an array of promises so we can make sure all of them have completed before trying to build
                // the player
                var promiseList = [];
                config.playlist.forEach(
                    function(currentValue, index, array) {
                        if (currentValue.mediaObjectId) {
                            promiseList[index] = $.getMediaFromApi(currentValue);
                        }
                        else {
                            //Handle legacy usage of passing derivativeUrl directly instead of in an array
                            //called derivatives as it's passed in the API
                            if (currentValue.derivativeUrl) {
                                currentValue.derivatives = [];
                                currentValue.derivatives.push({derivativeUrl: currentValue.derivativeUrl});
                                delete currentValue.derivativeUrl;
                                promiseList[index] = Promise.resolve({mediaObject: currentValue});
                            }
                            else {
                                promiseList[index] = Promise.reject("A derivativeUrl is required!")
                            }
                        }
                    });

                //Once all of the API calls have completed we can access their values

                Promise
                    .all(promiseList)
                    .then(
                        function (apiDataArray) {
                            apiDataArray.forEach(
                                function (apiData, index) {
                                    //TODO: It's not ideal to continue to have pageConfig and mediaConfig separate but it's
                                    //easier for now without having to do extensive refactoring. In the long run they
                                    //should be merged into a single config
                                    playlist[index] = {};
                                    playlist[index].pageConfig = config.playlist[index];
                                    playlist[index].mediaConfig = apiData.mediaObject;
                                }
                            );
                            $.createJWHTML5(elementId, playlist[0].mediaConfig, playlist[0].pageConfig, id);
                            $.createPlaylist(elementId, id, playlist);

                        }
                    )
                    .catch(

            }
            else

            // if media_object_id is not provided
            // (player must gets file information from code tag <code>)
            if (!config.mediaObjectId) {
                mediaObject = {
                    "mediaType"         : (config.mediaType) ? 
                                            config.mediaType : MLConfig.configs.defaults.mediaType,
                    "shortName"         : (config.shortName) ? 
                                            config.shortName : '',
                    "aspectRatio"       : (config.aspectRatio) ? 
                                            config.aspectRatio : MLConfig.configs.defaults.aspectRatio,
                    "canDownload"       : (config.canDownload) ? 
                                            config.canDownload : true,
                    "canEmbed"          : (config.canEmbed) ? 
                                            config.canEmbed : true,
                    "detailUrl"         : (config.detailUrl) ? config.detailUrl : false,
                    "metadata"          : (config.metadata) ? config.metadata : false,
                    "ccUrl"             : (config.ccUrl) ? config.ccUrl : '',
                    "descriptionHtml"   : (config.descriptionHtml) ? 
                                            config.descriptionHtml : '',
                    "transcriptUrl"     : (config.transcriptUrl) ? 
                                            config.transcriptUrl : '',
                    "derivatives"       : [{
                        "fqdn"                  : '',
                        "derivativeMediaUrl"    : "",
                        "derivativeUrl"         : 
                            (config.derivatives && config.derivatives[0]) ? 
                                    config.derivatives[0].derivativeUrl : ''
                    }]
                    
                };
                
                $.createJWHTML5(elementId, mediaObject, config, id);
            } else {
                // if media object id is available
                // file information gets from database via media API
                $.getMediaFromApi( config)
                    .done(function(apiData){

                        // if media found
                        // else show error dialog box
                        if (!apiData.error) {
                            $.createJWHTML5(elementId, apiData.mediaObject,  config, id);
                        } else {
                            $.showErrorDialog(apiData);
                        }
                    });
            }
            
        });
    };
})(jQuery);(function($){ 
    // get the url parameters   
    $.getUrlParams = function() {
        var query = window.location.href
                    .substr(window.location.href.indexOf('?') + 1, window.location.href.length);

        if (query.toLowerCase() == MLConfig.configs.alternative.listbarPosition) {
            layout          = MLConfig.configs.alternative.extended;
            listbarSize     = MLConfig.configs.alternative.listbarSize;
            listbarPosition = MLConfig.configs.alternative.listbarPosition;
        }
      
        if (query.toLowerCase() == MLConfig.configs.alternative.urlParameterForHtmlPlayer) {
            return true;
        }
      
        return false;
    };

    // check for mobile device , now is disabled
    $.useHttp = function(url) { 
        var i,devices;

        devices = MLConfig.helper.list.nonFlashSupport;
        if($.getUrlParams()) {
            return true;//return false; //disabled
        }
        if(url.substr(0,4) === 'rtmp') {
            return true;
        }        
        return false;
    };

    // use download url when HLS is not availabel
    $.useDownloadUrl = function() { return false;
        var i,devices;
        devices = MLConfig.helper.list.nonHlsSupport;
        for(i=0; i< devices.length; i++) {          
            if (navigator.userAgent.search(devices[i]) > 0) {
                return true;
            }
        }
        return false;
    };

    // generate download URL from RTMP file
    $.getHttpUrl = function(fqdn, derivativeMediaUrl) {
        var mediaUrl;
        if (undefined === fqdn || '' === fqdn) {
            return '';
        }

        mediaUrl = derivativeMediaUrl.substring(4);
        return '//' + fqdn + "/" + mediaUrl;
    };

    // generate hls live streaming url over http
    $.getHLS = function(rtmp, extension) {
        var url;

        if (rtmp.substr(0,4) === 'http') {
            return rtmp;
        }
        else {
            url = rtmp.replace("rtmp", "http");
            url = url.replace("vod/" + extension + ":", "hls-vod/media/");
            url = url + ".m3u8";
            return url;
        }
    };

    // generate hls live streaming url over http
    $.getHDS = function(rtmp, extension) {
        var url = rtmp.replace("rtmp", "http");
        url = url.replace("vod/" + extension + ":" , "hds-vod/media/");
        url = url + ".f4m";
        return url;
    };
       
    // check protocls those only work with flash
    $.flashProtocols = function(pattern) {
        
        if ($.inArray(pattern.toLowerCase().substr(0,4), MLConfig.helper.list.protocols) > -1) {
            return false;
        } else {
            return false;           
        }
    };
    
    // Get the background URL from backgrounf code
    $.extractUrlFromBackground = function(background){
        var url = background.replace("url(","");
        url = url.replace(") no-repeat 0 0","");
        return url;
    };
    
    //convert Code tag <code> content to a json object
    $.html2Json = 

    // check brower to see if it is IE
    // this is useful for some cases which is not compatible with IE
    $.checkBrowser = function() {

        var userAgent,  // user agent
            appName,    // application name
            browser;    // browser

        userAgent   = navigator.userAgent;
        appName     = navigator.appName;
        
        browser     = '';
        
        if (appName.toLowerCase().indexOf("internet") > 0) {
            browser = "msie";
        } else {
            browser = "other";
        }
        return browser; 
    };
    
    // switch divs for audio sharing divs
    $.switchDivDisplays = function(hideId, fadeId) {
        $("#" + hideId).hide();
        $("#" + fadeId).fadeIn();
    };
    
    // get metadata from <code> tag
    $.getMetadata = function(json, data) {
        var metadataString, // metadata string
            metadata,       // metadata array
            i,              // counter
            metadataMaxLines; // the max number of lines allowable for metadata display
        metadataString = '';
            
        if (json.metadata) {
            
            metadata = json.metadata;
            
            //Limit the metadata to three lines
            metadataMaxLines = (metadata.length > MLConfig.configs.defaults.maxMetadataLength) ?
                MLConfig.configs.defaults.maxMetadataLength :
                metadata.length;

            for(i=0;i<metadataMaxLines;i++) {
                metadataString += metadata[i] + MLConfig.helper.string.endline;
            }
            
        } else { 
            metadataString += (data.shortName) ?  data.shortName  : MLConfig.configs.defaults.metadataString;
        }
        
        return metadataString + "";
    };

    // disable tab if the accessible video controls
    // is collapsed
    $.fn.toggleTabIndex = function() {
        var tabindex = $(this).attr('tabindex');
        if(tabindex == -1) {
            $(this).removeAttr('tabindex');
        } else {
            $(this).attr('tabindex', '-1');
        }        
    };

    
    
    //validate url
    $.urlValidation = 
    
    //get valid url
    $.getValidUrl = function(url) {
      if($.urlValidation(url)) {
          return url;
      } else {
          return window.location.href;
      }
    };
    
    // get parameters either from code or script
    $.getPageConfigs = function(element) {
        var code,
            codeTag,
            scriptTag;
        
        scriptTag  = element.find('script[type="application/json"]');
        codeTag    = element.find('code');
        
        if(codeTag.length) {
            code = codeTag;
        } else if(scriptTag.length) {
            code = scriptTag
        }
        
        return code;
    };
    
    $.selectInput = 
    
    // sitecatalyst
    $.omniture = function(elementId, shortName, mediaType) {
        var eventData = {
            elementId: elementId,
            shortName: shortName
        };

        eventData.mediaType = 'A' == mediaType ? 'audio' : 'video';

        jwplayer(elementId).on('pause', function(event) {handleMediaEvent(event, eventData)}, this);
        jwplayer(elementId).on('buffer', function(event) {handleMediaEvent(event, eventData)}, this);
        jwplayer(elementId).on('idle', function(event) {handleMediaEvent(event, eventData)}, this);
        jwplayer(elementId).on('complete', function(event) {handleMediaEvent(event, eventData)}, this);
        jwplayer(elementId).on('play', function(event) {handleMediaEvent(event, eventData)}, this);
        jwplayer(elementId).on('seeked', function(event) {handleMediaEvent(event, eventData)}, this);
        jwplayer(elementId).on('seeking',  this);
    };

    function handleMediaEvent(event, eventData) {
        if (typeof s != "undefined") {
            var mediaElement = document.getElementById(eventData.elementId);
            var player = jwplayer(mediaElement);
            var mediaName = eventData.shortName;
            var mediaType = eventData.mediaType;
            var mediaPlayerName = "LOC JW Player";
            var mediaOffset = 0;
            var legacyTracking = s_gi('locjukebox');
            
            legacyTracking.trackingServer = s.trackingServer;
            legacyTracking.prop4 = mediaName;

            if (player.getPosition() > 0) {
                mediaOffset = Math.floor(player.getPosition());
            }

            switch (event.type) {
                case 'play':
                    if (mediaOffset == 0) {
                        setTimeout(function() {
                            s.Media.open(mediaName, player.getDuration(), mediaPlayerName);
                            s.Media.play(mediaName, mediaOffset);
                            legacyTracking.prop8 = "[Button Click] - Start " + mediaType;
                            legacyTracking.tl();
                        }, 500);
                    }
                    else {
                        s.Media.play(mediaName, mediaOffset);
                        legacyTracking.prop8 = "[Button Click] - Resume " + mediaType;
                        legacyTracking.tl();
                    }
                    break;

                case 'seeked':
                    s.Media.stop(mediaName, mediaOffset);
                    s.Media.play(mediaName, mediaOffset);
                    legacyTracking.prop8 = "[Scrub] - Specific Point in " + mediaType + " Clip";
                    legacyTracking.tl();
                    break;

                case 'pause':
                    s.Media.stop(mediaName, mediaOffset);
                    legacyTracking.prop8 = "[Button Click] - Pause " + mediaType;
                    legacyTracking.tl();
                case 'seeking':
                    s.Media.stop(mediaName, mediaOffset);
                case 'buffer':
                case 'idle':
                    break;

                case 'complete':
                    s.Media.stop(mediaName, mediaOffset);
                    s.Media.close(mediaName);
                    mediaOffset = 0;
                    legacyTracking.prop8 = "[End Clip] - " + mediaType;
                    legacyTracking.tl();
                    break;
            }
        }
    }
})(jQuery);(function ($){
    //PROVIDING DONWLOD VIDEO BUTTON
    $.addDownloadButton = function (id, 
                                    file, 
                                    download, 
                                    downloadUrl) {
        
        // check if the url is a flash only protocl such as RTMP
        if ($.flashProtocols(file) || !download) {
            
        } else {        
            jwplayer(id).addButton(
                MLConfig.configs.jwplayer.downloadIcon,
                MLConfig.configs.jwplayer.downloadText,           
                function () {
                    var link        = document.createElement('a');
                    link.href       = downloadUrl;
                    link.download   = jwplayer(id).getPlaylistItem()['file'];
                    document.body.appendChild(link);
                    link.click();
                },          
                MLConfig.configs.jwplayer.downloadId
            );
        }
    };
    
    // seek to a certain time after loading the page
    $.seekToTime = function (seekTime, id) {
        jwplayer(id).on('ready', ;
    };   
})(jQuery);(function($){
    $.builtinPlaylist = function(data, windowWidth) {
        // use window width and mediaType to show listbar 
        if (windowWidth > 650 && data.mediaType == 'V') {
            playlistPosition = "right";
        } else {
            playlistPosition = "bottom";
            playlistHeight = MLConfig.configs.defaults.playlistSize;
        }
        
        // generate playlist
        if (json.derivatives) {
            
            if (json.derivatives[1]) {                
            
                var derivativeUrlCount = json.derivatives.length;
                download = false;    
                
                for(var i=0; i< derivativeUrlCount; i++){
                    playlist.push({
                        'file'  : (json.derivatives[i].derivativeUrl) ? json.derivatives[i].derivativeUrl : '',
                        'image' : (json.derivatives[i].background) ? $.extractUrlFromBackground(json.derivatives[i].background) : ((json.background) ? $.extractUrlFromBackground(json.background) : ((data.thumbnailUrl) ? data.thumbnailUrl : '')),
                        'title' : (json.derivatives[i].title) ? replaceHtmlEntites(json.derivatives[i].title) : replaceHtmlEntites(data.shortName),
                        'label' : (json.derivatives[i].title) ? replaceHtmlEntites(json.derivatives[i].title) : replaceHtmlEntites(data.shortName)
                    });
                }
            } else {
                playlistSize = 0;
                playlist = '';
                playlistPosition = "none";
                playlistHeight = 0;
            }
        } else {
            playlistSize = 0;
            playlist = '';
            playlistPosition = "none";
            playlistHeight = 0;
        }

        // disable playelist
        playlistHeight = 0;
    }
})(jQuery);(function($){
    // setup player for video file
    $.startVideoPlayer = function(params) {
        //JW calls having multiple file formats for the same media a playlist,
        // even though it doesn't show up like a playlist
        //Note: Since we're using a playlist construct certain items need to be configured in the playlist as opposed
        // to outside of the playlist e.g. tracks and title
        var playlistSettings = [{
            image       : params.image,
            sources:[
                {file: params.file},
                {file: params.rtmpUrl}
            ],
            tracks      : [{
                file        : params.tracks,
                label       : MLConfig.configs.jwplayer.trackLabel,
                kind        : MLConfig.configs.jwplayer.trackKind,
                "default"   : params.captionsOnByDefault
            }],
            title       : params.title
        }];

        jwplayer(params.divId).setup({
            flashplayer : MLConfig.configs.jwplayer.flashPlayer,
            width       : MLConfig.configs.defaults.width,
            autostart   : params.autostart,
            displaytitle: true,
            controls    : true,
            primary     : MLConfig.configs.defaults.playerMode,
            playlist    : playlistSettings,
            abouttext   : MLConfig.configs.jwplayer.aboutText,
            fallback    : true,                
            aspectratio : params.aspectratio,
            androidhls  : true,
            skin: { name: "glow",
                active: "White",
                inactive: "Grey"}
        });

        jwplayer(params.divId).setCurrentCaptions(params.captionsOnByDefault);

        jwplayer(params.divId).onSetupError(function(event) {
            //Add an error message indicating that they may need to install Flash
            $('#'+params.divId + ' > p')
                .append('<br/>Please ensure you have <a style="color:white" href="https://get.adobe.com/flashplayer">' +
                'Flash Player</a> installed');
        });

    };

    // show video player without sharing option
    $.startVideoPlayerWithNoSharing = function(params) {
        jwplayer(params.divId).setup({
            flashplayer : MLConfig.configs.jwplayer.flashPlayer,
            width       : MLConfig.configs.defaults.width,
            autostart   : params.autostart,                
            displaytitle: true,
            controls    : true,
            primary     : MLConfig.configs.defaults.playerMode,
            playlist    : [{
                image       : params.image,
                sources:[
                    {file: params.file},
                    {file: params.rtmpUrl}
                ],
                tracks      : [{
                    file        : params.tracks,
                    label       : MLConfig.configs.jwplayer.trackLabel,
                    kind        : MLConfig.configs.jwplayer.trackKind,
                    "default"   : params.captionsOnByDefault
                }],
                title       : params.title
            }],
            abouttext   : MLConfig.configs.jwplayer.aboutText,
            fallback    : true,                
            aspectratio : params.aspectratio,
            androidhls  : true,
            skin: { name: "glow",
                    active: "White",
                    inactive: "Grey"}
        });

        jwplayer(params.divId).setCurrentCaptions(params.captionsOnByDefault);
        
    };

    // load video player for loc.gov homepage
    $.startVideoPresenterPlayer = function(params, count) {

        jwplayer(MLConfig.playlist.html.videoId).setup({
            flashplayer : MLConfig.configs.jwplayer.flashPlayer,
            width       : MLConfig.configs.defaults.width ,
            autostart   : params.autostart,             
            displaytitle: true,
            controls    : true,
            primary     : MLConfig.configs.defaults.playerMode,
            playlist    : [{
                image       : params.image,
                sources:[
                    {file: params.file},
                    {file: params.rtmpUrl}
                ],
                tracks      : [{
                    file        : params.tracks,
                    label       : MLConfig.configs.jwplayer.trackLabel,
                    kind        : MLConfig.configs.jwplayer.trackKind,
                    "default"   : params.captionsOnByDefault
                }],
                title       : params.title
            }],
            abouttext   : MLConfig.configs.jwplayer.aboutText,
            fallback    : true,             
            aspectratio : params.aspectratio,
            androidhls  : true,
            analytics: {
                enabled: true
            },
            skin: { name: "glow",
                active: "White",
                inactive: "Grey"}
        });

        jwplayer(MLConfig.playlist.html.videoId).setCurrentCaptions(params.captionsOnByDefault);
    };

    // setup player for audio file
    $.startAudioPlayer = function(params) {
        jwplayer(params.divId).setup({
            flashplayer : MLConfig.configs.jwplayer.flashPlayer,
            file        : params.file,
            width       : MLConfig.configs.defaults.width,
            height      : params.height,
            autostart   : params.autostart,
            title       : params.title,
            displaytitle: false,
            abouttext   : MLConfig.configs.jwplayer.aboutText,
            androidhls  : true,
            analytics: {
                enabled: true
            },
            skin: { name: "glow",
                active: "White",
                inactive: "Grey"}
        });
        
    };


})(jQuery);

(function(){
    // an object to set width, height and aspectratio
        MLConfig.widthHeight = {
        width       : MLConfig.configs.defaults.playerWidth,
        height      : MLConfig.configs.defaults.playerHeight,
        aspectRatio : MLConfig.configs.defaults.aspectRatio,
        playerSize  : MLConfig.configs.defaults.playerSize,
        windowHeight: MLConfig.configs.defaults.windowHeight,
        windowWidth : MLConfig.configs.defaults.windowWidth,
        
        // set aspect ratio
        setAspectRatio: function() {
            if (this.playerSize.toLowerCase().indexOf('wide') > 0) {
                this.aspectRatio    = MLConfig.configs.defaults.aspectRatio;
            } else {
                this.aspectRatio    = MLConfig.configs.alternative.aspectRatio;
            }
        },

        // convert all standard player to wide
        standardToWide: function() {
            var string = this.playerSize.replace(/Standard/ig, '');
            string = string.replace(/Wide/g, '');
            string += "Wide";
            this.playerSize = string;
        },
        
        // set width of player according to trac
        setWidth : function() {      
            
            switch(this.playerSize) {
                case 'small'            :
                case 'smallStandard'    : this.width    = 320;
                                          break;
                
                case 'medium'           :
                case 'mediumStandard'   : this.width    = 540;
                                          break;
                
                case 'large'            :
                case 'largeStandard'    : this.width    = 640;
                                          break;
                
                case 'extraLarge'       :
                case 'extraLargeStandard':this.width    = 960;
                                          break;
                
                case 'smallWide'        : this.width    = 320;
                                          break;
                
                case 'mediumWide'       : this.width    = 512;
                                          break;
                
                
                case 'largeWide'        : this.width    = 768;
                                          break;
                
                case 'extraLargeWide'   : this.width    = 1280;
                                          break;
                                    
                default                 : this.width    = 512;
                                          this.playerSize= 'mediumWide';
                                          break;            
            }
        },
        
        
        // set player width as part of responsive design
        setWidthFromParentElementWidth: function(width, allowed) {
            if (allowed) {
                this.width = width; 
            }       
        },
        
       // set height 
       setHeight: function() {
          
            // if all videos should have aspect ratio = 16:9
            if (MLConfig.configs.enable.DefaultAspectratio) {
                this.height         = (9 * this.width) / 16;   
            } else if (this.aspectRatio == MLConfig.configs.alternative.aspectRatio) {
                this.height         = 0.75 * this.width;
            } else {
                this.height         = (9 * this.width) / 16;
            }
       },
        
        setAudioHeight: 
       
        getWindowWidth: function() {
            this.windowWidth = $(window).width();
        },
        
        getWindowHeight: 
        
    };

})();
    var replaceHtmlEntites = (function() {
    var translate,
        translate_re;
    translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    translate = {
        "nbsp": " ", 
        "amp" : "&", 
        "quot": "\"",
        "lt"  : "<", 
        "gt"  : ">"
    };
    return function(s) {
        return ( s.replace(translate_re,  );
    };
})();(function($){
    
    // add accessibility control bar
    $.addAccessibilityBar = function(
            id,
            elementId,
            mediaConfig, 
            parent, 
            expandAccessibility,
            params){

        var div, videoAudio;
        
        videoAudio = (mediaConfig.mediaType == MLConfig.configs.media.video) ? 'Video' : 'Audio';
        div  = '<div class="loc-video-controller" id="' + elementId + '-switch">\
                    <div class="loc-video-controller-inner" aria-role="menu" aria-label="'+videoAudio+' Controls">\
                    <h2 class="on-off accessible-controls" id="h2-' + elementId + '" >\
                        <a href="#" class="left" id="a-on-off-' + elementId + '">\
                            ' + videoAudio + ' Controls <span class="screen-reader">\
                            for ' + replaceHtmlEntites(mediaConfig.shortName) + '</span> <i></i>\
                    </a>\
                </h2>\
                <ul class="" id="ul-' + elementId + '">\
                    <li><button type="submit" aria-label="Play" \
                        value="submit" class="accessible-button" \
                        tabindex=-1 id=' + elementId + '_play ><span>Play</span></button></li>\
                    <li><button type="submit" aria-label="Pause" value="submit"  \
                        class="accessible-button" tabindex=-1 tabindex=-1 tabindex=-1 \
                        tabindex=-1 tabindex=-1 tabindex=-1 id=' + elementId + '_pause >\
                        <span>Pause</span></button></li>\
                    <li><button type="submit" aria-label="Forward ' + MLConfig.configs.accessibility.seek + ' \
                        seconds"  class="accessible-button" tabindex=-1 tabindex=-1 tabindex=-1 \
                        tabindex=-1 tabindex=-1 value="submit" tabindex=-1 \
                        tabindex=-1 tabindex=-1 tabindex=-1 \
                        tabindex=-1 id=' + elementId + '_fwd >\
                        <span>Forward ' + MLConfig.configs.accessibility.seek + ' \
                        seconds</span></button></li>\
                    <li><button type="submit" aria-label="Rewind\
                        ' + MLConfig.configs.accessibility.seek + ' seconds"  class="accessible-button" \
                        value="submit" tabindex=-1 tabindex=-1 tabindex=-1 tabindex=-1 \
                        id=' + elementId + '_rew ><span>Rewind ' + MLConfig.configs.accessibility.seek + ' \
                        seconds</span></button></li>\
                    <li><button type="submit" aria-label="Replay" \
                        value="submit"  class="accessible-button" tabindex=-1 tabindex=-1 \
                        tabindex=-1 id=' + elementId + '_rewind >\
                        <span>Replay</span></button></li>\
                    <li><button type="submit" aria-label="mute" \
                        value="submit"  class="accessible-button" \
                        tabindex=-1 tabindex=-1 id=' + elementId + '_mute >\
                        <span>Mute</span></button></li>\
                    <li><button type="submit" aria-label="Volume Up"  \
                        class="accessible-button" value="submit" tabindex=-1 \
                        id=' + elementId + '_v_inc ><span>Volume Up</span></button></li>\
                   <li><button type="submit" aria-label="Volume Down"  \
                        class="accessible-button" value="submit" tabindex=-1     \
                        id=' + elementId + '_v_dec ><span>Volume Down</span></button>\
                   </li>\
                   </ul>\
                   ' + $.shareDiv(params, elementId) + '\
               </div></div>';
        
        $("#" + id).prepend(div);
        $.bindEventsToAccessibleBar(elementId, 
                   expandAccessibility);
        
         
    };

    // add new span to each button inside
       // HTML5
    $.fn.addNewSpan = function (bodyContent, updateContent) {
    
    if (updateContent) {
        this.html('').attr("aria-label", bodyContent).attr('tabindex', MLConfig.configs.defaults.tabindex++)
            .append('<span class="' + 
                    MLConfig.configs.accessibility.screenReaderClass + '">' + bodyContent + '</span>');
        } else {
            this.attr("aria-label", 
                      bodyContent).attr('tabindex', MLConfig.configs.defaults.tabindex++)
            .prepend('<span class="' + 
                    MLConfig.configs.accessibility.screenReaderClass + '">' + bodyContent + '</span>');
        }
    };
}(jQuery));(function($){
    // Generate error message from paramete and display it
    // as a jQUery popup
    $.showErrorDialog = function(errorObject) {
        var errorCode,
            errorMessage;

        errorCode    = (errorObject['error'].code) ? errorObject['error'].code : '';
        errorMessage = (errorObject['error'].text) ? errorObject['error'].text : '';
        $('body').append('<div id="error-message" style="display:none"></div>');
        $('#error-message').html(errorCode + " : " + errorMessage);
        $('#error-message').attr("title", errorMessage);
        
    };
}(jQuery));(function($){
    // Share for audio
    
    $.shareAudio = function(metadata, params) {

        var parent,
            audioInfo,
            parentContent,
            id,
            inputId,
            buttonId,
            buttonLinkId,
            shareLinkId,
            totalHeight,
            sharePath,
            windowUrl;

        parent          = $("#" + params.divId).parent().parent();
        audioInfo       = parent.find("." + MLConfig.configs.classNames.audioInfo);
        parentContent   = parent.html();
        id              = MLConfig.configs.classNames.shareAudioPrefix + params.divId;
        inputId         = MLConfig.configs.classNames.audioInputPrefix + params.divId;
        buttonId        = MLConfig.configs.classNames.audioButtonPrefix + params.divId;
        buttonLinkId    = MLConfig.configs.classNames.audioButtonLinkPrefix + params.divId;
        shareLinkId     = MLConfig.configs.classNames.audioShareLinkPrefix + params.divId;
        totalHeight     = parseInt(params.height) + 
                          parseInt(MLConfig.configs.defaults.audioMetadataHeight) + 
                          MLConfig.configs.defaults.accessibleHeight(params.width) + 
                          MLConfig.configs.defaults.shareDivHeight;
        
        /*jshint multistr: true */
        sharePath       = '<iframe src="' + 
        MLConfig.configs.url.domain + 
        MLConfig.configs.url.projectPath +
        MLConfig.configs.url.shareURL + '/' + MLConfig.configs.defaults.embedFile + '\
?uuid=' + params.mediaObjectId + '\
&size=' + params.playerSize + '&metadata=' + metadata + '\
&image=&type=A" \
width="' + params.width + '" \
height="' + totalHeight + '" \
frameborder="0" scrolling="no"></iframe>';
        
        // set the URL for share check if player loads in iFrame
        windowUrl       = (parent === window) ? document : document.referrer;
        windowUrl           = (windowUrl !== '') ? windowUrl : document.URL;
        
        // sharing div var
        divContent      = "<table border=0 class='share-table' style=''>";
        divContent         += '<tr><td colspan=3 style="text-align:right">\
                                <span id="share-close-button" class="share-close-button" style="">';
        divContent         += '<img src="' + MLConfig.configs.image.closeIcon + '" \
                                onclick="$.switchDivDisplays(\'' + id + '\',\'' + 
                                audioInfo.attr('id') + '\')"/></span></td></tr>';
        divContent         += "<tr><td style='width:15%'>Embed Code</td><td>\
                                <input readonly class='share-input' value='" + 
                                sharePath + "'  id='" + inputId + "' style=''></td>";
        divContent         += "</tr>";
        divContent         += "<tr><td>Audio link</td><td>\
                                <input readonly class='share-input' value='" + 
                                params.detailUrl + "'  id='" + shareLinkId + "' ></td>";
        divContent         += "</tr>";
        
        $("<div class='sharing-div' id='" + id + "' style=''>" + 
                divContent + "</div>").insertAfter(audioInfo);
        
        
        // switch display between audioInfo and share div
        // audioInfo.hide();
        // $("#" + id).fadeIn(); 

        return sharePath;
        
    };

    // create audio info
    $.audioInfo = function(pageConfig, mediaConfig, params, elementId) { 
        var audioInfostring,
            shareElement,
            metadata,
            audioInfostring = '',
            shareElement    = "<span style='text-align:right;float:left' \
                                class='share-sharing-icon' >",
            metadataLength;
                                
        shareElement       += "</span>";

        // only media with mediaobject uuid can be shared
        if (params.mediaObjectId) {
            audioInfostring+= shareElement;    
        }
        
        // get metadata and display in audio info div
        if (pageConfig.metadata) {
            
            metadata    = pageConfig.metadata;

            metadataLength = (metadata.length > MLConfig.configs.defaults.maxMetadataLength) ? MLConfig.configs.defaults.maxMetadataLength : metadata.length;

            for(var i=0;i<metadataLength;i++) {
                audioInfostring += "<p>" + metadata[i] + "</p>";
            }
            
            
            
        } else {
            audioInfostring += (mediaConfig.shortName) ? 
                                    mediaConfig.shortName : 
                                    MLConfig.configs.defaults.metadataString;
        }
        
        $("#" + MLConfig.configs.classNames.audioInputPrefix + elementId + " > ." + 
                MLConfig.configs.classNames.audioInfoDiv).html(audioInfostring);        
        return audioInfostring;
    };

}(jQuery));(function($){
    // generating li
    $.generateDescripton = function(params, count) {
        var element = '<li id="anchor-' + count + '">';
        element    += '<a href="javascript:void(0)"  \
            class="video2 video_link" \
            onclick="$.startVideoPresenterPlayer(' + count + ');\
            $.activateLink(' + count + ')">';
        element    += params.title;
        element    += '</a>';
        element    += '<span class="video_description">';
        element    += params.descriptionHtml + "</span>";
        element    += '<a href="javascript:void(0)" \
            class="dialog_link" vid="mediaInstance' + (count + 1) + '" \
            onclick="$.showTranscriptDialog(\'' + params.transcriptUrl + '\', \
            \'' + replaceHtmlEntites(params.title.replace(/"/g,"")) + '\');" >';
        element    += 'Transcript</a>';
        element    += '<span id="vidpres_separator"> | </span>';
        element    += '<a href="' + params.downloadUrl + '" \
        class="download_link" target="_blank">Download</a>';
        element    += '</li>';
        
        return element;   
    };
    
    // activate link after click and de-activate the rest
    $.activateLink = function(count) {
        $('ul.plain.video_list li').each(function(){
            $(this).removeClass('selected');    
        });
        $("#anchor-" + count).addClass('selected');
    };
    
    // show trasncript dialog box
    $.showTranscriptDialog = function(transcriptUrl, title) {
        
       // transcriptUrl = 'http://osidev-ws51.loctest.gov//transcript.html';
        $('body').append('<div id="transcript-div" \
                style="display:none;" class="dialog-div"></div>');
        $('#transcript-div').append('<iframe src="' + transcriptUrl + '"  \
                height="140px" width="100%" style="" ></iframe>');
        $('#transcript-div').attr("title", title);
        
    };
}(jQuery));(function ($) {
      
    // binds events to accessible control bar
    $.bindEventsToAccessibleBar = function (elementId, expand) {
     
        if(expand) {
            $('#ul-' + elementId).toggleClass('on-off');
            $('#ml-share-div-' + elementId).toggleClass('on-off');
            
            $('#h2-' + elementId).hide();
            $('#h2-share-' + elementId).hide();
        }
        // add binding to heading
        $('#h2-' + elementId).bind('keypress', function (e) {  
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                e.preventDefault();          
                $('#ul-' + elementId).toggleClass('on-off');
                $('#h2-' + elementId).toggleClass('on-off');
                // toggle tabindex enabled 
                $('#ul-' + elementId + " li button").each(function() {
                    $(this).toggleTabIndex();
                });
            }
        }).bind('click', function (e) {
            e.preventDefault();  
            $('#ul-' + elementId).toggleClass('on-off');
            $('#h2-' + elementId).toggleClass('on-off');
            // toggle tabindex enabled 
            $('#ul-' + elementId + " li button").each(;
        });

        $('#h2-share-' + elementId).bind('keypress', function (e) {  
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                e.preventDefault();          
                $('#ml-share-div-' + elementId).toggleClass('on-off');
               
            }
        }).bind('click', function (e) {
            e.preventDefault();  
            $('#ml-share-div-' + elementId).toggleClass('on-off');
        });

        // listen to event for buttons

        // Play
        $("#" + elementId + "_play").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) { 
                jwplayer(elementId).play();
                jwplayer(elementId).play();
                var jwState = jwplayer(elementId).getState();
            }
        }).bind('click', function (e) {   
            jwplayer(elementId).play();
        });

        // Pause
        $("#" + elementId + "_pause").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                jwplayer(elementId).pause(true);
            }
        }).bind('click', ;

        // Rewind
        $("#" + elementId + "_rewind").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                jwplayer(elementId).stop();
                jwplayer(elementId).play();
            }
        }).bind('click', function (e) {        
            jwplayer(elementId).stop();
            jwplayer(elementId).play();
        });

        // Mute unmute
        $("#" + elementId + "_mute").bind('keydown', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                jwplayer(elementId).setMute(); 
                jwplayer(elementId).setMute();          
            }
        }).bind('click', function (e) {        
            jwplayer(elementId).setMute();            
        });

        // seek n seconds forward
        $("#" + elementId + "_fwd").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                var position = jwplayer(elementId).getPosition();
                var duration = jwplayer(elementId).getDuration();                
                if(position + MLConfig.configs.accessibility.seek > duration) {               
                    jwplayer(elementId).seek(duration);
                } else {
                    jwplayer(elementId).seek(position + MLConfig.configs.accessibility.seek);
                }
            }
        }).bind('click', function (e) {        
            var position = jwplayer(elementId).getPosition();
            var duration = jwplayer(elementId).getDuration();                          
            if(position + MLConfig.configs.accessibility.seek > duration && position != 0) {               
                jwplayer(elementId).seek(duration);
            } else {
                jwplayer(elementId).seek(position + MLConfig.configs.accessibility.seek);
            }            
        });

        // rewind n seconds 
        $("#" + elementId + "_rew").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                var position = jwplayer(elementId).getPosition();
                jwplayer(elementId).seek(position - MLConfig.configs.accessibility.seek);
            }
        }).bind('click', function (e) {        
            var position = jwplayer(elementId).getPosition();
            jwplayer(elementId).seek(position - MLConfig.configs.accessibility.seek);            
        });


        // increase volume
        $("#" + elementId + "_v_inc").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                var position = jwplayer(elementId).getVolume();
                if(position + MLConfig.configs.accessibility.volume <= 100) {
                    jwplayer(elementId).setVolume(position + MLConfig.configs.accessibility.volume);            
                } else {
                    jwplayer(elementId).setVolume(100); 
                }
            }
        }).bind('click', function (e) {        
            var position = jwplayer(elementId).getVolume();
            if(position + MLConfig.configs.accessibility.volume <= 100) {
                jwplayer(elementId).setVolume(position + MLConfig.configs.accessibility.volume);            
            } else {
                jwplayer(elementId).setVolume(100); 
            }                     
        });

        // decrease volume 
        $("#" + elementId + "_v_dec").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                var position = jwplayer(elementId).getVolume();
                if(position - MLConfig.configs.accessibility.volume >= 0) {
                    jwplayer(elementId).setVolume(position - MLConfig.configs.accessibility.volume);            
                } else {
                    jwplayer(elementId).setVolume(0); 
                }
            }
        }).bind('click', function (e) {        
            var position = jwplayer(elementId).getVolume();
            if(position - MLConfig.configs.accessibility.volume >= 0) {
                    jwplayer(elementId).setVolume(position - MLConfig.configs.accessibility.volume);            
                } else {
                    jwplayer(elementId).setVolume(0); 
                }            
        });
        
        // Full Screen
        $("#" + elementId + "_fullscreen").bind('keypress', function (e) {         
            if (e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                var player = document.getElementById(elementId + "_wrapper").getElementsByTagName('object');
                player[0].className = player[0].className + " fullscreen";            
                $.fn.launchIntoFullscreen(player[0]);
            }
        }).bind('click', function (e) {        
            var player = document.getElementById(elementId + "_wrapper").getElementsByTagName('object');
            player[0].className = player[0].className + " fullscreen";            
            $.fn.launchIntoFullscreen(player[0]);
        });

    };
    
    $.fn.launchIntoFullscreen =    
    // handle enter key as a click
    $.fn.addAccessibility = function (elementId, bodyContent, callJWPlay, updateContent) {
        this.bind('keydown', function (e) {
            if(e.keyCode == MLConfig.configs.accessibility.keyStroke) {
                if (bodyContent != MLConfig.configs.accessibility.playText) {
                    $(this).click();
                }
                if (callJWPlay) {
                    jwplayer(elementId).play();
                }
            }
        }).addNewSpan(bodyContent, updateContent);
    };

    // add accessibility to HTML5 player button
    $.accessibility = function (elementId, data) {
        var id =  elementId + "_dock_share";
   
        $(".jwplayer").attr('tabindex', MLConfig.configs.defaults.tabindex++).focus(function () {
            if (MLConfig.configs.defaults.tabindex == 2) {
                $("#" + id)
                .addAccessibility(elementId, MLConfig.configs.accessibility.shareButton, false, true);
                $(".jwicon")
                .addAccessibility(elementId, MLConfig.configs.accessibility.CenterButton, true, false);
                $(".jwplay button")
                .addAccessibility(elementId, MLConfig.configs.accessibility.playText, false, true);
                $(".jwcc  button")
                .addAccessibility(elementId, MLConfig.configs.accessibility.closedCaptioning, true, true);
                $(".jwmute button")
                .addAccessibility(elementId, MLConfig.configs.accessibility.muteButton, true, true);
                $(".jwfullscreen button")
                .addAccessibility(elementId, MLConfig.configs.accessibility.fullScreenButton, true, true);
      
                MLConfig.configs.defaults.tabindex ++;
            }
        }).attr("aria-label", replaceHtmlEntites(data.shortName.replace(/\'/g, '')));
    };
})(jQuery);// global variables


(function($) {
    
    // main function it calls other functions to load the player and description
    $.locLoader = function(params,  
                           data, 
                           parent) {

        // width = '100%';
        // generate li for each available video

        $(MLConfig.playlist.html.ulClass)
        .append($.generateDescripton(params, MLConfig.configs.defaults.playlistCount));
        //paramsArray[MLConfig.configs.defaults.playlistCount] = params;

        if (MLConfig.configs.defaults.playlistCount === 0) {
            $.activateLink(MLConfig.configs.defaults.playlistCount);

            $("#" + MLConfig.playlist.html.videoId)
            .parent().removeClass('table-cell')
            .removeClass('video');
            $("#" + MLConfig.playlist.html.videoId)
            .parent()
            .parent()
            .attr('id',MLConfig.playlist.html.playerId);
            $.startVideoPresenterPlayer(params, MLConfig.configs.defaults.playlistCount);

        }
        MLConfig.configs.defaults.playlistCount ++;
        
         // stop playback when page loads
        jwplayer(MLConfig.playlist.html.playerId).onReady(function(){ 
            jwplayer(MLConfig.playlist.html.playerId).stop();
            // add accessible bar
            $.addAccessibilityBar(MLConfig.playlist.html.playerId, data, parent);
            
        });
        
        // stop playback when page loads
        jwplayer(MLConfig.playlist.html.videoId).onReady(function(){
            jwplayer(MLConfig.playlist.html.videoId).stop();

            // add accessible bar
             if (MLConfig.configs.defaults.playlistCount === 0) {
                $.addAccessibilityBar(MLConfig.playlist.html.videoId, data, parent);
            }
        });
    };   
    
    // activate link after click and de-activate the rest
    $.activateLink = function(count) {
        $(MLConfig.playlist.html.ulClass + ' li').each(;
        $("#anchor-" + count).addClass('selected');
    };
    
    
})(jQuery);

(function($){

    // prepare information for JW Player
    $.createJWHTML5 = function(elementId, mediaConfig, pageConfig, id) {

        var videoDivClassName,  // class name to add responsive design
            parent,             // parent of code block
            parentHeight,       // parent of code block height
            derivativeUrl,      // the url get from dataabse or from code block
            httpUrl,            // the media url uses http protocol
            download,           // download is allowed or not
            embed,              // embed is allowd 
            downloadUrl,        // download url of downloading file
            seek,               // seek time in seconds
            embedWidth,         // width of embeding iframe
            embedHeight,        // embeding iframe height
            height,             // height of player
            width,              // width of player
            browser,            // browser type that loads the page
            windowUrl,          // get the url to check it is loaded from iframe or not
            params,             // list of parameters are passing to jwplayer setup
            parentClassName,    // parent class name of jwplayer div
            expandAccessibility,// expand accessibility bar 
            ccUrl,              // ccUrl
            detailUrl,          // Detail URL
            captionsOnByDefault = true; //Default to start with closed captions being displayed

        id = ($("#" + id).length) ? 
                id : 
                id = id.replace(MLConfig.configs.defaults.newCodeTagId, MLConfig.configs.defaults.codeTagId);

        //  Force to set aspectratio
        if(MLConfig.configs.enable.DefaultAspectratio) {
            mediaConfig.aspectRatio    = MLConfig.configs.defaults.aspectRatio;
        }
        
        videoDivClassName   = (mediaConfig.aspectRatio == MLConfig.configs.defaults.aspectRatio) ?  
            MLConfig.configs.classNames.defaultAspectRatio : MLConfig.configs.classNames.defaultAspectRatio;

        // get the container div inside the html
        // according to documentation on trac
        $.generateJWPlayerElement(id, elementId, videoDivClassName);
        
        // get the parent element and its dimensions
        parent       = $("#" + elementId).parent();

        parentHeight = parent.height();

        expandAccessibility = (typeof pageConfig.expandAccessibility !== 'undefined') ?
            pageConfig.expandAccessibility : false;
        
        // get the derivative URL
        derivativeUrl       = (pageConfig.derivatives) ? pageConfig.derivatives[0].derivativeUrl : 
            ((mediaConfig.derivatives) ? mediaConfig.derivatives[0].derivativeUrl : '');
        
        // set http url
        // httpUrl uses http protocol rather than rtmp
        httpUrl = $.getHttpUrl(mediaConfig.derivatives[0].fqdn, mediaConfig.derivatives[0].derivativeMediaUrl);
        httpUrl = (httpUrl !== '') ? httpUrl : derivativeUrl;

        // check the file can be downloaded
        download  = mediaConfig.canDownload;
        download  = (download === true || download == MLConfig.configs.defaults.download) ? true : false;
        
        
        // check the file can be embeded
        embed     = mediaConfig.canEmbed;
        embed     = (embed === true || embed == MLConfig.configs.defaults.embed) ? true : false;

        if ("captionsOnByDefault" in pageConfig && false == pageConfig.captionsOnByDefault) {
            captionsOnByDefault = false;
        }
        
        // get download url from code block
        downloadUrl = (pageConfig.downloadUrl && mediaConfig.mediaType == MLConfig.configs.media.video) ? 
                pageConfig.downloadUrl : '';

        // to produce the download url we have to add
        // the extension to the url for audio files
        if (mediaConfig.mediaType == MLConfig.configs.media.audio && 
                httpUrl.indexOf(MLConfig.configs.media.audioExtension) == -1) {
            httpUrl += '.' + MLConfig.configs.media.audioExtension;
        }
        
        //setup seek
        seek  = (pageConfig.seekto) ? pageConfig.seekto : 0;
        
        //     get the player size width from code block
        MLConfig.widthHeight.playerSize  = (pageConfig.playerSize) ? 
                pageConfig.playerSize : MLConfig.configs.defaults.playerSize;
        MLConfig.widthHeight.standardToWide();
        
        // set aspect ratio and width of player
        MLConfig.widthHeight.setAspectRatio();
        MLConfig.widthHeight.setWidth();
        
        embedWidth  = MLConfig.widthHeight.width;
        embedHeight = MLConfig.widthHeight.setHeight();
        // get the width from parent  width        (yes: true, no:false)
        MLConfig.widthHeight.
        setWidthFromParentElementWidth(parent.width(), 
                MLConfig.configs.enable.DefaultAspectratio);
        
        // set height of player according to player width and aspect ratio
        
        
        height = (MLConfig.widthHeight.height <= parentHeight || parentHeight === 0) ? 
                MLConfig.widthHeight.height : parentHeight;
        
        // add custom css to unify view for all different browsers
       // parent.css({"outline" : "none"});
       // $(".largeview").css({"height": ''});
            
        // if browser is IE pass width=100% else auto
        // IE 8 gets error for width=auto
        browser             =  $.checkBrowser();
        width               = MLConfig.configs.defaults.width;
                
        // get download url from code block
        httpUrl             = (downloadUrl !== '') ? downloadUrl : httpUrl;
        
        windowUrl  = (parent === window) ? document : document.referrer;
        windowUrl  = (windowUrl !== '') ? windowUrl : document.URL;

        //If there is a detailUrl in the code block then use it
        if (pageConfig.detailUrl) {
            detailUrl = pageConfig.detailUrl;
        }
        //If there is no detailUrl in the code block then use the one from media services if it's there
        else if (mediaConfig.detailUrl) {
            detailUrl = mediaConfig.detailUrl;
        }
        //If nothing else, then use the current page url
        else {
            detailUrl = windowUrl;
        }

        // make video player if the media type is video or default to video if it's not specified
        mediaConfig.mediaType = "mediaType" in mediaConfig ? mediaConfig.mediaType : "V";

        if (mediaConfig.mediaType.toUpperCase() === MLConfig.configs.media.video) {

            // get the background image url            
            backgroundUrl   = (pageConfig.background) ? 
                $.extractUrlFromBackground(pageConfig.background) : 
                ((mediaConfig.backgroundUrl) ? mediaConfig.backgroundUrl : '');
                
            // In case of availability of Derivative URL and Media Object UUID
            url = httpUrl;

        /*
            // use download URL instead of rtmp (for HTML5 playback) for mobile devices
            if ($.useHttp(url)) {
            // if the device is android
                if($.useDownloadUrl()) {
                    url = httpUrl;
                } else {
                    url = $.getHLS(url, "mp4");
                }
            }
        */
            height = (height >= MLConfig.widthHeight.height) ? height : MLConfig.widthHeight.height;

            backgroundUrl = backgroundUrl ? backgroundUrl : MLConfig.configs.defaults.background;

            ccUrl = (pageConfig.ccUrl) ? pageConfig.ccUrl : ((mediaConfig.ccUrl) ? mediaConfig.ccUrl : '');

            params = {
                "file"                   : url,
                "image"                  : backgroundUrl,
                "width"                  : width,
                "height"                 : height,
                "autostart"              : pageConfig.autoPlay,
                "title"                  : replaceHtmlEntites(mediaConfig.shortName),
                "divId"                  : elementId,
                "aspectratio"            : mediaConfig.aspectRatio,
                "tracks"                 : ccUrl,
                "seek"                   : seek,
                "embed"                  : embed,
                "download"               : download,
                "downloadUrl"            : httpUrl,
                "embedWidth"             : embedWidth,
                "embedHeight"            : height,
                "detailUrl"              : $.getValidUrl(detailUrl),
                "mediaObjectId"          : (pageConfig.mediaObjectId) ? pageConfig.mediaObjectId : false,
                "encrypted"              : '',
                "playerSize"             : MLConfig.widthHeight.playerSize,
                "descriptionHtml"        : (mediaConfig.descriptionHtml) ? mediaConfig.descriptionHtml : '',
                "expandAccessibility"    : expandAccessibility,
                "transcriptUrl"          : (mediaConfig.transcriptUrl) ? mediaConfig.transcriptUrl : '',
                "mediaType"              : 'V',
                "rtmpUrl"                : derivativeUrl,
                "captionsOnByDefault"   : captionsOnByDefault
            };

            //parentClassName = $("#" + elementId).parent().attr('class');
            parentClassName = $("#" + id).parent().attr('class');

            if (!params.mediaObjectId || !embed || embed == 'N') {
               $.startVideoPlayerWithNoSharing(params);
            } else {
               $.startVideoPlayer(params);
            }

        } else if (mediaConfig.mediaType === MLConfig.configs.media.audio) {
            
            url = (pageConfig.derivativeUrl) ? pageConfig.derivativeUrl : mediaConfig.derivatives[0].derivativeUrl;
            MLConfig.widthHeight.setAudioHeight();
            
            // download URL is not same as video
            if ($.useHttp(url)) {
               url = httpUrl;
               //url = $.getHLS(url, "mp3");
            }   

            $("#audio-" + elementId).addClass(MLConfig.configs.classNames.audioMetadata).fadeIn();
            
            
            params = {                    
                "file"                  : url,
                "width"                 : MLConfig.widthHeight.width,
                "height"                : MLConfig.widthHeight.height,
                "autostart"             : pageConfig.autoPlay,
                "title"                 : replaceHtmlEntites(mediaConfig.shortName.replace(/\'/g, '')),
                "divId"                 : elementId,
                "aspectratio"           : mediaConfig.aspectRatio,
                "seek"                  : seek,
                "embed"                 : embed,
                "download"              : download,
                "downloadUrl"           : httpUrl,
                "metadata"              : $.getMetadata(pageConfig,mediaConfig),
                "detailUrl"             : $.getValidUrl(detailUrl),
                "mediaObjectId"         : (pageConfig.mediaObjectId) ? pageConfig.mediaObjectId : false,
                "playerSize"            : MLConfig.widthHeight.playerSize,
                "descriptionHtml"       : (mediaConfig.descriptionHtml) ? mediaConfig.descriptionHtml : '',
                "expandAccessibility"   : expandAccessibility,
                "transcriptUrl"         : (mediaConfig.transcriptUrl) ? mediaConfig.transcriptUrl : '',
                "mediaType"             : 'A'
            };
            
            
            // generate audio meta tag            
            $.audioInfo(pageConfig, mediaConfig, params, elementId);

            $.startAudioPlayer(params);            
            
        }
        
        // do hack to remove videoobject class to have responsive design 
        // and set parent height same as player
        $("." + MLConfig.configs.classNames.videoObject)
        .removeClass(MLConfig.configs.classNames.videoObject)
        .addClass(MLConfig.configs.alternative.videoObject);
        
        
        // set seeking time
        if (seek !== 0) {
            $.seekToTime(seek, elementId);
        }

        // add table-div class to parent div
        // reason is put accessible control 
        // before JWPLAYER in DOM and 
        // after it visually
        parent.addClass(MLConfig.configs.classNames.tableDiv);     

        // add accessibility to JWPLAyer after loading
        jwplayer(elementId).onReady(function() {

            // add accessible bar
            $.addAccessibilityBar(id,
                                  elementId,
                                  mediaConfig, 
                                  parent, 
                                  expandAccessibility,params);

            $.omniture(elementId, mediaConfig.shortName, mediaConfig.mediaType);


            
            jwplayer(elementId).onMeta(;
            
        });

    };
})(jQuery);(function($) {
    $.createPlaylist = function(elementId, id, playlist){
        
        playlist.forEach(function(item, index) {
            item.mediaConfig.videoId = index;
            if ("A" === item.mediaType) {
                item.mediaConfig.isAudio = true;
            }
            else {
                item.mediaConfig.isAudio = false;
            }

            if ("transcriptUrl" in item.mediaConfig) {
                item.mediaConfig.transcriptUrl = item.mediaConfig.transcriptUrl;
            }

            if ("transcriptUrl" in item.pageConfig) {
                item.mediaConfig.transcriptUrl = item.pageConfig.transcriptUrl;
            }
            
            if ("downloadUrl" in item.pageConfig) {
                item.mediaConfig.downloadUrl = item.pageConfig.downloadUrl;
            }

            item.mediaConfig.escapedTitle = item.mediaConfig.shortName.replace(/"/g, '\\"')

        });
        
        var data = {
          elementId : elementId,
          playlist: playlist,
          mediaInstance: id
        };
        
        divId = id;
        playlistId = MLConfig.configs.classNames.playlist + id;        
        playlistMarkup = "<div id='" + playlistId + "'></div>";

        $(playlistMarkup).insertAfter("#" + divId);

        $("#" + playlistId)
            .load(MLConfig.configs.url.playlist,
                function() {
                    html = $("#" + playlistId).html();
                    html = Mustache.render(html, data);
                    $("#"+playlistId).replaceWith(html);
                    $(this).html('');

                    playlist.forEach(function(item, index) {
                        $('#li_' + id + '_' + index).bind('click', function () {
                            $.createJWHTML5(elementId, item.mediaConfig, item.pageConfig, id);
                            jwplayer(elementId).on('ready', 
                        })
                    });
                }
            )


    };
    


})(jQuery);window.jwplayer=function(e){ar n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=var i={},o={0:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=t.p+""+({1:"provider.hlsjs",2:"provider.shaka",3:"provider.cast",4:"provider.html5",5:"provider.flash",6:"provider.airplay",7:"provider.youtube",8:"polyfills.vttrenderer",9:"polyfills.promise",10:"polyfills.intersection-observer",11:"polyfills.base64",12:"vttparser"}[e]||e)+".js",i.appendChild(r)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){var i,o;i=[],o=function(){var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,o=t.slice,r=t.concat,a=n.toString,s=n.hasOwnProperty,l=t.map,u=t.reduce,c=t.forEach,d=t.filter,p=t.every,f=t.some,h=t.indexOf,g=Array.isArray,w=Object.keys,m=i.bind,v=j=v.each=v.forEach=v.map=v.collect=var y="Reduce of empty array with no initial value";v.reduce=v.foldl=v.inject=v.find=v.detect=v.filter=v.select=v.reject=v.compact=v.every=v.all=var b=v.some=v.any=function(t,n,i){n||(n=v.identity);var o=!1;return null==t?o:f&&t.some===f?t.some(n,i):(j(t,function(t,r,a){if(o||(o=n.call(i,t,r,a)))return e}),!!o)};v.size=v.last=v.after=v.before=var x=E=v.groupBy=E(,v.indexBy=E(,v.sortedIndex=var b=v.some=v.any=v.contains=v.include=v.pluck=function(e,t){return v.map(e,v.property(t))},v.where=function(e,t){return v.filter(e,v.matches(t))},v.findWhere=v.max=v.difference=v.without=v.indexOf=var k=function(){};v.bind=v.partial=v.once=v.partial(v.before,2),v.memoize=v.delay=v.defer=v.throttle=v.keys=v.invert=v.defaults=v.extend=v.pick=v.omit=v.clone=v.isArray=g||v.isObject=j(["Arguments","Function","String","Number","Date","RegExp"],,v.isArguments(arguments)||(v.isArguments=,v.isFunction=function(e){return"function"==typeof e},v.isFinite=v.isNaN=v.isBoolean=v.isNull=v.isUndefined=v.has=v.identity=function(e){return e},v.constant=v.property=v.propertyOf=v.matches=v.now=Date.now||v.result=var C=0;return v.uniqueId=v}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1)],o=function(e){var t=[],n=t.slice,i={on:once:off:trigger:triggerSafe:,o=/\s+/,r=a=s=return i}.apply(t,i),!(void 0!==o&&(e.exports=o))},,function(e,t,n){var i,o;i=[n(1)],o=function(e){ar n=function(e){return e.replace(/^\s+|\s+$/g,"")},i=o=r=a=s=l=function(t,n){return e.map(t,function(e){return n+e})},u=return{trim:n,pad:i,xmlAttribute:o,extension:r,hms:a,seconds:s,suffix:u,prefix:l}}.apply(t,i),!(void 0!==o&&(e.exports=o))},,,function(e,t,n){var i,o;i=[n(1)],o=function(e){var t={},n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};return t.utf8ArrayToStr=t.utf16BigEndianArrayToStr=t.syncSafeInt=t.arrayToInt=function(e){for(var t="0x",n=0;n<e.length;n++)t+=e[n].toString(16);return parseInt(t)},t.parseID3=t}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t){"use strict";.__esModule=!0;var i=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,t["default"]=n,e.exports=t["default"]},function(e,t,n){var i,o;i=[],o=function(){return{createId:function(e,t){var n,i=e.kind||"cc";return n=e["default"]||e.defaulttrack?"default":e._id||e.file||i+t},createLabel:}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1),n(2),n(20),n(31),n(130),n(46)],o=function(e,t,i,o,r,a){r u={};return u.loadFile=u.cancelXhr=u.convertToVTTCues=u}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(9),n(167)],o=function(e,t){r o=function(e,n,i){i=i||"all-players";var o="";if("object"==typeof n){var a;for(a in n)break;if(!a)return;var s=document.createElement("div");r(s,n),o="{"+s.style.cssText+"}"}else"string"==typeof n&&(o=n);t.style([[e,e+o]],i)},r=a=s=return{css:o,style:r,clearCss:t.clear,transform:a,hexToRgba:s}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1)],o=function(e){ar n={},i=e.memoize(,o=n.isInt=n.isFlashSupported=n.isFF=t(/gecko\//i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS X/i);var r=n.isEdge=a=n.isIETrident=t(/trident\/.+rv:\s*11/i),s=n.isMSIE=n.isChrome=n.isIE=n.isSafari=var l=n.isIOS=n.isAndroidNative=var u=n.isAndroid=return n.isMobile=n.isIframe=n.flashVersion=n}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,o){var r,a=null!=t?t:{},s=n.helperMissing,l="function",u=e.escapeExpression;return'<div class="jw-display-icon-container jw-display-icon-'+u((r=null!=(r=n.iconName||(null!=t?t.iconName:t))?r:s,typeof r===l?r.call(a,{name:"iconName",hash:{},data:o}):r))+' jw-background-color jw-reset">\n  <div class="jw-icon jw-icon-'+u((r=null!=(r=n.iconName||(null!=t?t.iconName:t))?r:s,typeof r===l?r.call(a,{name:"iconName",hash:{},data:o}):r))+' jw-button-color jw-reset" role="button" tabindex="0" aria-label="'+u((r=null!=(r=n.ariaLabel||(null!=t?t.ariaLabel:t))?r:s,typeof r===l?r.call(a,{name:"ariaLabel",hash:{},data:o}):r))+'"></div>\n</div>\n'},useData:!0})},function(e,t,n){var i,o;i=[n(2),n(39),n(126),n(1),n(3),n(142),n(4),n(5)],o=function(e,t,n,i,o,r,a,s){var l=function(){function r(e,t){var n=i.extend({},t,{type:e}),o=this.mediaModel;switch(e){case"flashThrottle":var r="resume"!==t.state;this.set("flashThrottle",r),this.set("flashBlocked",r);break;case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":return void this.set(e,t[e]);case"mute":return void(this.get("autostartMuted")||this.set(e,t[e]));case a.JWPLAYER_MEDIA_TYPE:return void(o.get("mediaType")!==t.mediaType&&(o.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));case a.JWPLAYER_PLAYER_STATE:return void o.set("state",t.newstate);case a.JWPLAYER_MEDIA_BUFFER:this.set("buffer",t.bufferPercent);case a.JWPLAYER_MEDIA_META:var l=t.duration;i.isNumber(l)&&!i.isNaN(l)&&(o.set("duration",l),this.set("duration",l));break;case a.JWPLAYER_MEDIA_BUFFER_FULL:o.get("playAttempt")?this.playVideo():o.on("change:playAttempt",function(){this.playVideo()},this);break;case a.JWPLAYER_MEDIA_TIME:o.set("position",t.position),this.set("position",t.position),i.isNumber(t.duration)&&(o.set("duration",t.duration),this.set("duration",t.duration));break;case a.JWPLAYER_PROVIDER_CHANGED:this.set("provider",d.getName());break;case a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality,t.levels),o.set("levels",t.levels);break;case a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality,t.levels),this.persistQualityLevel(t.currentQuality,t.levels);break;case a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack,t.tracks),o.set("audioTracks",t.tracks);break;case a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack,t.tracks);break;case"subtitlesTrackChanged":this.persistVideoSubtitleTrack(t.currentTrack,t.tracks);break;case"visualQuality":var u=i.extend({},t);o.set("visualQuality",u);break;case"autoplayFailed":this.set("autostartFailed",!0),o.get("state")===s.PLAYING&&o.set("state",s.PAUSED)}this.mediaController.trigger(e,n)}ar c,d,p=this,f=e.noop;this.mediaController=i.extend({},o),this.mediaModel=new u,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=this.getConfiguration=this.updateProviders=this.setQualityLevel=this.persistQualityLevel=this.setCurrentAudioTrack=this.onMediaContainer=this.changeVideoProvider=this.destroy=this.getVideo=function(){return d},this.setFullscreen=this.chooseProvider=this.setItemIndex=this.setActiveItem=this.setProvider=this.getProviders=function(){return c},this.resetProvider=this.setVolume=this.getMute=this.setMute=this.loadVideo=this.stopVideo=this.playVideo=this.persistCaptionsTrack=this.setVideoSubtitleTrack=this.persistVideoSubtitleTrack=this.setNextUp=this.autoStartOnMobile=,u=l.MediaModel=return i.extend(l.prototype,r),i.extend(u.prototype,r),l}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1),n(35)],o=function(e,t){r o={};return o.getAbsolutePath=o.getScriptPath=e.memoize(,o.parseXML=o.serialize=o.parseDimension=o.timeFormat=o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(62),n(7),n(110),n(2)],o=function(e,t,n,i){var o=r=e.extend({constructor:setup:dragStart:dragEnd:dragMove:function(e){var t,n,r=this.railBounds=this.railBounds?this.railBounds:o(this.elementRail);"horizontal"===this.orientation?(t=e.pageX,n=t<r.left?0:t>r.right?100:100*i.between((t-r.left)/r.width,0,1)):(t=e.pageY,n=t>=r.bottom?0:t<=r.top?100:100*i.between((r.height-(t-r.top))/r.height,0,1));var a=this.limit(n);return this.render(a),this.update(a),!1},tap:limit:update:render:updateBuffer:element:function(){return this.el}});return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(25),n(16),n(1),n(138),n(27)],o=function(e,t,n,i,o){r s=n.find(i,n.matches({name:"flash"})),l=s.supports;s.supports=var u=n.find(i,n.matches({name:"html5"})),c=u.supports;return u.supports=i.push({name:"shaka",supports:a}),i.splice(1,0,{name:"hlsjs",supports:function(n,i){var o=e.isChrome()||e.isFF()||e.isIE(11)&&n.hlsjsdefault,a=e.isAndroid()&&n.hlsjsdefault;if(o&&r()&&(!e.isMobile()||a)&&!n.drm){var s=n&&n.type,l=n&&n.file;if(l.indexOf(".m3u8")>-1||"hls"===s||"m3u8"===s){var u=t(i);return u("hls")}}}}),i}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(139),n(1),n(38)],o=function(e,t){ar o,r=e.registerProvider,a=e.prototype.reorderProviders;return t.extend(e.loaders,{shaka:hlsjs:),t.extend(e.prototype,{reorderProviders:providerSupports:),e}.apply(t,i),!(void 0!==o&&(e.exports=o))},,,,,,function(e,t,n){var i;i=function(){function e(e){if("string"!=typeof e)return!1;var t=r[e.toLowerCase()];return!!t&&e.toLowerCase()}window.VTTCue)return window.VTTCue;var o="auto",r={"":!0,lr:!0,rl:!0},a={start:!0,middle:!0,end:!0,left:!0,right:!0};return i.prototype.getCueAsHTML=i}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},,function(e,t,n){var i,o;i=[n(20),n(48),n(2),n(4),n(3),n(1)],o=function(e,t,n,i,o,r){var a=function(){function a(o){var a=n.tryCatch(function(){var n,a=o.responseXML?o.responseXML.childNodes:null,s="";if(a){for(var c=0;c<a.length&&(s=a[c],8===s.nodeType);c++);"xml"===e.localName(s)&&(s=s.nextSibling),"rss"===e.localName(s)&&(n={playlist:t.parse(s)})}if(!n)try{var d=JSON.parse(o.responseText);if(r.isArray(d))n={playlist:d};else{if(!r.isArray(d.playlist))throw null;n=d}}catch(p){return void l("Not a valid RSS/JSON feed")}u.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)});a instanceof n.Error&&l()}r u=r.extend(this,o);this.load=this.destroy=;return a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(32),n(51),n(1),n(39)],o=function(e,t,n,i){r a=a.filterPlaylist=function(e,t){var i=[],o=t.getProviders(),r=t.get("preload"),a=t.get("feedid");return n.each(e,function(e){e=n.extend({},e),e.allSources=s(e,t),e.sources=l(e.allSources,o),e.sources.length&&(e.file=e.sources[0].file,(e.preload||r)&&(e.preload=e.preload||r),(e.feedid||a)&&(e.feedid=e.feedid||a),i.push(e))}),i};var s=function(e,i){var o=e.sources,a=i.get("androidhls"),s=e.drm||i.get("drm"),l=e.preload||i.get("preload"),u=r(e.withCredentials,i.get("withCredentials")),c=i.get("hlsjsdefault");return n.compact(n.map(o,function(e){if(n.isObject(e)){void 0!==a&&null!==a&&(e.androidhls=a),(e.drm||s)&&(e.drm=e.drm||s),(e.preload||l)&&(e.preload=e.preload||l);var i=r(e.withCredentials,u);return n.isUndefined(i)||(e.withCredentials=i),c&&(e.hlsjsdefault=c),t(e)}}))},l=return a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(9),n(1)],o=function(e,t,n){var i={"default":!1},o=return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},,,,,,,function(e,t,n){var i,o;i=[n(2),n(3),n(1)],o=function(e,t,n){nction r(r,a,u,c){var d,p=!0;if(c=c||"opaque",e.isMSIE()){var f=document.createElement("div");a.appendChild(f),f.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+u+'" name="'+u+'" tabindex="0"><param name="movie" value="'+r+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+c+'"><param name="bgcolor" value="'+l+'"><param name="menu" value="false"></object>';for(var h=a.getElementsByTagName("object"),g=h.length;g--;)h[g].id===u&&(d=h[g])}else d=document.createElement("object"),d.setAttribute("type","application/x-shockwave-flash"),d.setAttribute("data",r),d.setAttribute("width","100%"),d.setAttribute("height","100%"),d.setAttribute("bgcolor",l),d.setAttribute("id",u),d.setAttribute("name",u),i(d,"allowfullscreen","true"),i(d,"allowscriptaccess","always"),i(d,"wmode",c),i(d,"menu","false"),a.appendChild(d,a);return d.className="jw-swf jw-reset",d.style.display="block",d.style.position="absolute",d.style.left=0,d.style.right=0,d.style.top=0,d.style.bottom=0,e.isIE()&&"PointerEvent"in window&&(d.style.pointerEvents="none"),o(d,"on",t.on),o(d,"once",t.once),o(d,"off",t.off),o(d,"trigger",t.trigger),o(d,"_events",{}),o(d,"triggerFlash",function(t){if("setupCommandQueue"===t&&(p=!1),"setup"!==t&&p||!d.__externalCall){for(var i=d.__commandQueue,o=i.length;o--;)i[o][0]===t&&i.splice(o,1);return i.push(Array.prototype.slice.call(arguments)),d}var r=Array.prototype.slice.call(arguments,1),a=e.tryCatch(;return a instanceof e.Error&&(console.error(t,a),"setup"===t)?(a.name="Failed to setup flash",a):d}),o(d,"__commandQueue",[]),d}r l="#000000";return{embed:r,remove:a}}.apply(t,i),!(void 0!==o&&(e.exports=o))},,,,,function(e,t,n){var i,o;i=[n(2),n(165),n(4),n(176),n(1)],o=function(e,t,n,i,o){var r=function(r,a){var s=new t(r,a),l=s.setup;return s.setup=function(){l.call(this),a.on("change:skipButton",this.onSkipButton,this),a.on("change:castAvailable",this.onCastAvailable,this),this.onCastAvailable(a,a.get("castAvailable")),a.on("change:castActive",this.onCastActive,this),this.onCastActive(a,a.get("castActive"))},s.addSkipButton=s.onSkipButton=s.onCastActive=s.onCastAvailable=s};return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},,,,,,function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,o){return'<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'},useData:!0})},,function(e,t,n){"use strict";le=!0,t.checkRevision=r,t.template=a,t.wrapProgram=s,t.resolvePartial=l,t.invokePartial=u,t.noop=c;var f=n(11),h=o(f),g=n(17),w=i(g),m=n(44)},,function(e,t,n){e.exports=n.p+"jw-icons.ttf"},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,o){return'<div class="jw-display jw-reset">\n  <div class="jw-display-container jw-reset">\n    <div class="jw-display-controls jw-reset"></div>\n  </div>\n</div>\n'},useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({1:function(e,t,n,i,o){var r,a,s=null!=t?t:{};return'    <div class="jw-dock-button jw-background-color jw-reset'+(null!=(r=n["if"].call(s,null!=t?t.btnClass:t,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o}))?r:"")+'" button="'+e.escapeExpression((a=null!=(a=n.id||(null!=t?t.id:t))?a:n.helperMissing,"function"==typeof a?a.call(s,{name:"id",hash:{},data:o}):a))+'">\n        <div class="jw-icon jw-dock-image jw-reset" '+(null!=(r=n["if"].call(s,null!=t?t.img:t,{name:"if",hash:{},fn:e.program(4,o,0),inverse:e.noop,data:o}))?r:"")+'></div>\n        <div class="jw-arrow jw-reset"></div>\n'+(null!=(r=n["if"].call(s,null!=t?t.tooltip:t,{name:"if",hash:{},fn:e.program(6,o,0),inverse:e.noop,data:o}))?r:"")+"    </div>\n"},2:4:function(e,t,n,i,o){var r;return"style='background-image: url(\""+e.escapeExpression((r=null!=(r=n.img||(null!=t?t.img:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{name:"img",hash:{},data:o}):r))+"\")'"},6:function(e,t,n,i,o){var r;return'        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">'+e.escapeExpression((r=null!=(r=n.tooltip||(null!=t?t.tooltip:t))?r:n.helperMissing,"function"==typeof r?r.call(null!=t?t:{},{name:"tooltip",hash:{},data:o}):r))+"</span>\n        </div>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,i,o){var r;return'<div class="jw-dock jw-reset">\n'+(null!=(r=n.each.call(null!=t?t:{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?r:"")+"</div>"},useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({1:compiler:[7,">= 4.0.0"],main:useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({1:function(e,t,n,i,o){var r,a,s=null!=t?t:{},l=n.helperMissing,u="function",c=e.escapeExpression;return'        <li class="jw-reset'+(null!=(r=n["if"].call(s,null!=t?t.featured:t,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o}))?r:"")+'">\n            <a href="'+c((a=null!=(a=n.link||(null!=t?t.link:t))?a:l,typeof a===u?a.call(s,{name:"link",hash:{},data:o}):a))+'" class="jw-reset" target="_top">\n'+(null!=(r=n["if"].call(s,null!=t?t.showLogo:t,{name:"if",hash:{},fn:e.program(4,o,0),inverse:e.noop,data:o}))?r:"")+"                "+c((a=null!=(a=n.title||(null!=t?t.title:t))?a:l,typeof a===u?a.call(s,{name:"title",hash:{},data:o}):a))+"\n            </a>\n        </li>\n"},2:function(e,t,n,i,o){return" jw-featured"},4:compiler:[7,">= 4.0.0"],main:useData:!0})},function(e,t,n){var i=n(8);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:useData:!0})},,function(e,t,n){var i,o;i=[n(1)],o=function(e){return function(t,n){var i=["buffer","controls","position","duration","fullscreen","volume","item","stretching","playlist","captions"];e.each(i,;var o=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],r=["setControls","setFullscreen","setVolume","setMute","setCues","setCaptions"];e.each(o,,e.each(r,,t.getPlaylistIndex=t.getItem}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(4),n(5),n(3),n(2),n(64),n(1),n(172),n(114),n(115),n(117),n(26)],o=function(e,t,n,i,o,r,a,s,l,u,c){var d=function(d,p){var f,h=this,g=!1,w={};r.extend(this,n),this.utils=i,this._=r,this.Events=n,this.version=c,this.trigger=this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var m=m(),u(this),this.id=d.id;var v=this._qoe=new o;v.tick("init");var j=return this.getPlugin=this.addPlugin=this.setup=this.qoe=this.getContainer=this.getMeta=this.getItemMeta=this.getPlaylistItem=this.getRenderingMode=this.getMute=this.load=this.play=this.pause=this.createInstream=this.castToggle=this.playAd=this.pauseAd=i.noop,this.remove=this};return d}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(1)],o=function(e,t){ a={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:"uniform",mute:!1,volume:90,width:480,height:270,audioMode:!1,localization:{play:"Play",playback:"Start playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",airplay:"Airplay",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed captions",audioTracks:"Audio tracks",replay:"Replay",buffer:"Loading",more:"More",liveBroadcast:"Live broadcast",loadingAd:"Loading ad",rewind:"Rewind 10s",nextUp:"Next Up",nextUpClose:"Next Up Close",related:"Related"},renderCaptionsNatively:!1},s=return s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(19),n(18)],o=function(e,t,n){var i=function(i,o){function r(e){if(e.tracks.length){for(var t=e.tracks||[],n=0;n<t.length;n++){var i=t[n];v[i._id]||p(i)}var o=f();h(),this.setCaptionsList(o)}}ge:playlistItem",a,this),o.on("change:captionsIndex",d,this),o.on("itemReady",s,this),o.mediaController.on("subtitlesTracks",r,this);var w={},m=[],v={},j={},y=0;this.getCurrentIndex=function(){return o.get("captionsIndex")},this.getCaptionsList=this.setCaptionsList=;return i}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(118),n(123),n(1),n(120),n(121),n(29),n(128),n(50),n(49),n(2),n(74),n(3),n(30),n(5),n(4),n(157)],o=function(e,t,i,o,r,a,s,l,u,c,d,p,f,h,g,w){r j=return j.prototype={play:m("play"),pause:m("pause"),seek:m("seek"),stop:m("stop"),load:m("load"),playlistNext:m("next"),playlistPrev:m("prev"),playlistItem:m("item"),setCurrentCaptions:m("setCurrentCaptions"),setCurrentQuality:m("setCurrentQuality"),setFullscreen:m("setFullscreen"),setup:function(a,p){nction j(){fe.trigger(g.JWPLAYER_READY,{setupTime:0}),fe.triggerAfterReady=fe.trigger;for(var e=0;e<me.length;e++){var t=me[e];de=t.type===g.JWPLAYER_MEDIA_BEFOREPLAY,fe.trigger(t.type,t.args),de=!1}var n=p.getPlugin("related");n&&n.on("nextUp",ce.setNextUp,ce),ie()&&(c.isMobile()&&he().video?y(he().video):R())}unction b(e){window.IntersectionObserver&&(ue=new window.IntersectionObserver(E,{threshold:.5}),ue.observe(e))}unction E(e){if(e&&e.length){var t=he().video,n=e[0],i={reason:"autostart"};n.target===t&&n.intersectionRatio>=.5?fe.play(i):fe.pause(i)}}nction A(e){switch(ce.get("state")===h.ERROR&&ce.set("state",h.IDLE),ce.set("preInstreamState","instream-idle"),M(!0),fe.trigger("destroyPlugin",{}),ie()&&ce.once("itemReady",R),typeof e){case"string":L(e);break;case"object":var t=D(e);t&&Y(0);break;case"number":Y(e)}}ction P(e){var t;if(e&&ce.set("playReason",e.reason),ce.get("state")!==h.ERROR){var n=_();if(i.isString(n))return p.pauseAd(!1);if(ce.get("state")===h.COMPLETE&&(M(!0),Y(0)),!de&&(de=!0,fe.triggerAfterReady(g.JWPLAYER_MEDIA_BEFOREPLAY,{playReason:ce.get("playReason")}),de=!1,le))return le=!1,void(se=null);if(S()){if(0===ce.get("playlist").length)return!1;t=c.tryCatch(function(){ce.loadVideo()})}else ce.get("state")===h.PAUSED&&(t=c.tryCatch(function(){ce.playVideo()}));return!(t instanceof c.Error)||(fe.triggerError(t),se=null,!1)}}on D(e){var t=l(e);return t=l.filterPlaylist(t,ce),ce.set("playlist",t),i.isArray(t)&&0!==t.length?(k(t),!0):(fe.triggerError({message:"Error loading playlist: No playable sources found"}),!1)}tion B(e){he()&&(e=parseInt(e,10)||0,he().setCurrentQuality(e))}function V(){return he()?he().getCurrentQuality():-1}nction H(){return he()?he().getQualityLevels():null}tion Q(){return re.getCurrentIndex()},re,ae,se,le,ue,ce=this._model,de=!1,pe=!1,fe=this,he=function(){return ce.getVideo()},ge=new s;ge.track(ce);var we=new e(a,ge),me=[];ce.setup(we,ge),oe=this._view=new d(p,ce),ae=new o(p,ce,oe,D),ae.on(g.JWPLAYER_READY,m,this),ae.on(g.JWPLAYER_SETUP_ERROR,this.setupError,this),ce.mediaController.on("all",w,this),ce.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE,function(){i.defer(J)}),ce.mediaController.on(g.JWPLAYER_MEDIA_ERROR,this.triggerError,this),ce.on("change:flashBlocked",this),ce.on("change:state",f,this),ce.on("change:castState",,ce.on("change:fullscreen",,ce.on("itemReady",,ce.on("change:playlist",,ce.on("change:volume",function(e,t){fe.trigger(g.JWPLAYER_MEDIA_VOLUME,{volume:t})}),ce.on("change:mute",function(e,t){fe.trigger(g.JWPLAYER_MEDIA_MUTE,{mute:t})}),ce.on("change:controls",,ce.on("change:scrubbing",,ce.on("change:captionsList",,ce.on("change:mediaModel",,re=new r(p,ce),this.triggerAfterReady=this._play=P,this._pause=I,this._seek=O,this._stop=M,this._load=A,this._next=W,this._prev=F,this._item=N,this._setCurrentCaptions=X,this._setCurrentQuality=B,this._setFullscreen=te,this.detachMedia=Z,this.attachMedia=ee,this.getCurrentQuality=V,this.getQualityLevels=H,this.setCurrentAudioTrack=G,this.getCurrentAudioTrack=K,this.getAudioTracks=q,this.getCurrentCaptions=Q,this.getCaptionsList=$,this.getVisualQuality=U,this.getConfig=z,this.getState=T,this.setVolume=ce.setVolume.bind(ce),this.setMute=ce.setMute.bind(ce),this.getProvider=function(){return ce.get("provider")},this.getWidth=function(){return ce.get("containerWidth")},this.getHeight=function(){return ce.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=oe.resize,this.getSafeRegion=oe.getSafeRegion,this.setCues=oe.addCues,this.setCaptions=oe.setCaptions,this.next=ne,this.addButton=this.removeButton=this.checkBeforePlay=function(){return de},this.getItemQoe=function(){return ce._qoeItem},this.setControls=this.playerDestroy=this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=this.createInstream=this.skipAd=this.instreamDestroy=ae.start()},showView:triggerError:setupError:,j}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(125),n(124),n(4),n(5),n(2),n(3),n(1)],o=function(e,t,n,i,o,r,a){ar l={skipoffset:null,tag:null},u=function(e,r,u){h,g,w,m,v,j=s(r),y=new j(e,r),b=0,x={},E=this,k=a.bind(this),C=a.bind(this);this.type="instream",this.init=function(){w=r.getVideo(),m=r.get("position"),v=r.get("playlist")[r.get("item")],y.on("all",d,this),y.on(n.JWPLAYER_MEDIA_TIME,p,this),y.on(n.JWPLAYER_MEDIA_COMPLETE,f,this),y.init(),w.detachMedia(),r.mediaModel.set("state",i.BUFFERING),e.checkBeforePlay()||0===m&&!w.checkComplete()?(m=0,r.set("preInstreamState","instream-preroll")):w&&w.checkComplete()||r.get("state")===i.COMPLETE?r.set("preInstreamState","instream-postroll"):r.set("preInstreamState","instream-midroll");var t=r.get("state");return t!==i.PLAYING&&t!==i.BUFFERING||w.pause(),u.setupInstream(y._adModel),y._adModel.set("state",i.BUFFERING),u.clickHandler().setAlternateClickHandlers(o.noop,null),this.setText(r.get("localization").loadingAd),this};var A=function(e){h&&b+1<h.length?c():(e.type===n.JWPLAYER_MEDIA_COMPLETE&&this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{}),this.destroy())};this.loadItem=this.setupSkipButton=this.applyProviderListeners=this.play=function(){y.instreamPlay()},this.pause=function(){y.instreamPause()},this.addClickHandler=this.skipAd=this.metaHandler=this.destroy=this.getState=this.setText=this.hide=function(){r.set("hideAdsControls",!0)}};return a.extend(u.prototype,r),u}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1),n(3),n(30),n(4),n(5),n(29)],o=function(e,t,n,i,o,r){var a=function(a,s){p,f,h=e.extend(this,t);return a.on(i.JWPLAYER_FULLSCREEN,function(e){this.trigger(i.JWPLAYER_FULLSCREEN,e)},h),this.init=h.load=h.applyProviderListeners=this.instreamDestroy=h.instreamPlay=function(){p.getVideo()&&p.getVideo().play(!0)},h.instreamPause=h};return a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(64),n(1)],o=function(e,t){function n(e){e.mediaController.off(a,e._onPlayAttempt),e.mediaController.off(s,e._triggerFirstFrame),e.mediaController.off(u,e._onTime),document.removeEventListener(p,e._onTabVisible)}function i(e){n(e),e._triggerFirstFrame=t.once(,e._onTime=f(e._triggerFirstFrame),e._onPlayAttempt=e._onTabVisible=function(t){var n=t.target.hidden;n===!0?e._qoeItem.tick(c):n===!1&&e._qoeItem.tick(d)},document.addEventListener(p,e._onTabVisible,!1),e.mediaController.on(a,e._onPlayAttempt),e.mediaController.once(s,e._triggerFirstFrame),e.mediaController.on(u,e._onTime)}ar r="playlistItem",a="playAttempt",s="providerFirstFrame",l="firstFrame",u="time",c="tabHidden",d="tabVisible",p="visibilitychange",f=return{model:o}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(21),n(49),n(15),n(61),n(22),n(1),n(2),n(4)],o=function(e,t,i,o,r,a,s,l){ m(e,t,n){var i="flash"===t.get("primary"),r=s.flashVersion();if(i&&r){var a=n.getContainer(),l=a.parentElement;l||e();var u=document.createElement("div");u.id=t.get("id");var c=""+u.id+"-"+Math.random().toString(16).substr(2),d=t.get("flashloader"),p=t.get("width"),f=t.get("height");s.style(u,{position:"relative",width:p.toString().indexOf("%")>0?p:p+"px",height:f.toString().indexOf("%")>0?f:f+"px"});var h=o.embed(d,u,c,null),g=w=if(Object.defineProperty(h,"embedCallback",{get:function(){return g}}),!h.on)return w();l.replaceChild(u,a);var m=setTimeout(w,3e3)}else e()}eturn{getQueue:u,error:A}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(20),n(9),n(2)],o=function(e,t,n){ar o=t.xmlAttribute,r=e.localName,a=e.textContent,s=e.numChildren,l="media",u=function(e,t){ar d,p,f="tracks",h=[];for(p=0;p<s(e);p++)if(d=e.childNodes[p],d.prefix===l){if(!r(d))continue;switch(r(d).toLowerCase()){case"content":if(o(d,"duration")&&(t.duration=n.seconds(o(d,"duration"))),o(d,"url")){t.sources||(t.sources=[]);var g={file:o(d,"url"),type:o(d,"type"),width:o(d,"width"),label:o(d,"label")},w=i(d);w.length&&(g.mediaTypes=w),t.sources.push(g)}s(d)>0&&(t=u(d,t));break;case"title":t.title=a(d);break;case"description":t.description=a(d);break;case"guid":t.mediaid=a(d);break;case"thumbnail":t.image||(t.image=o(d,"url"));break;case"player":break;case"group":u(d,t);break;case"subtitle":var m={};m.file=o(d,"url"),m.kind="captions",o(d,"lang").length>0&&(m.label=c(o(d,"lang"))),h.push(m)}}for(t.hasOwnProperty(f)||(t[f]=[]),p=0;p<h.length;p++)t[f].push(h[p]);return t};return u}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1)],o=function(e){var t={kind:"captions","default":!1},n=return n}.apply(t,i),!(void 0!==o&&(e.exports=o))},,function(e,t,n){var i,o;i=[n(12),n(38),n(137),n(1),n(140)],o=function(e,t,i,o,r){.loaders={html5:function(e){n.e(4,function(require){var t=n(70);s(t),e(t)})},flash:function(e){n.e(5,function(require){var t=n(57);s(t),e(t)})},youtube:function(e){n.e(7,function(require){var t=n(59);s(t),e(t)})}};var s=a.registerProvider=return o.extend(a.prototype,{load:reorderProviders:providerSupports:required:choose:),a}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(1)],o=function(e){return function(t,n,i){var o=n,r=i,a=0;o>=1280?a=7:o>=960?a=6:o>=800?a=5:o>=640?a=4:o>=540?a=3:o>=420?a=2:o>=320&&(a=1);var s="jw-breakpoint-"+a;return e.replaceClass(t,/jw-breakpoint-\d+/,s),e.toggleClass(t,"jw-orientation-portrait",r>o),a}}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(23),n(5),n(1)],o=function(e,t,i,o){var r=t.style,a={back:!0,fontSize:14,fontFamily:"Arial,sans-serif",fontOpacity:100,color:"#FFF",backgroundColor:"#000",backgroundOpacity:100,edgeStyle:null,windowColor:"#FFF",windowOpacity:0,preprocessor:o.identity},s=function(s){function l(n,i,o,r){if(t.css("#"+n+" .jw-text-track-display",i,n),t.css("#"+n+" .jw-text-track-cue",o,n),u(n,r),t.css("#"+n+" .jw-video::-webkit-media-text-track-display",i,n),t.css("#"+n+" .jw-video::cue",o,n),e.isSafari()&&t.css("#"+n+" .jw-video::cue","{color: "+o.color+" !important;}",n),o.backgroundColor){var a="{background-color: "+o.backgroundColor+" !important;}";t.css("#"+n+" .jw-video::-webkit-media-text-track-display-backdrop",a,n)}}function u(n,i){var o=e.isSafari()?"display":"container";t.css("#"+n+" .jw-video::-webkit-media-text-track-"+o,"{font-size: "+i+"px !important;}",n)} f,h,g,w,m,v,j,y={};w=document.createElement("div"),w.className="jw-captions jw-reset",this.show=function(){w.className="jw-captions jw-captions-enabled jw-reset"},this.hide=function(){w.className="jw-captions jw-reset"},this.populate=this.resize=function(){var e=w.clientWidth,t=Math.pow(e/400,.6);if(t){var n=y.fontSize*t,i=Math.floor(2*n)/2;s.get("renderCaptionsNatively")?u(s.get("id"),i):r(w,{fontSize:i+"px"})}this.renderCues(!0)},this.renderCues=this.selectCues=this.getCurrentCues=this.updateCurrentCues=this.getAlignmentPosition=function(e,t){var n=e.source,i=t.metadata;return n?!(!i||!o.isNumber(i[n]))&&i[n]:e.embedded&&t.duration<0?t.position-t.duration:t.position},this.clear=this.setContainerHeight=this.setup=function(e,n){m=document.createElement("div"),v=document.createElement("span"),m.className="jw-captions-window jw-reset",v.className="jw-captions-text jw-reset",y=o.extend({},a,n);var i=y.fontOpacity,u=y.windowOpacity,d=y.edgeStyle,p=y.backgroundColor,f={},h={color:t.hexToRgba(y.color,i),fontFamily:y.fontFamily,fontStyle:y.fontStyle,fontWeight:y.fontWeight,textDecoration:y.textDecoration};u&&(f.backgroundColor=t.hexToRgba(y.windowColor,u)),c(d,h,i),y.back?h.backgroundColor=t.hexToRgba(p,y.backgroundOpacity):null===d&&c("uniform",h),r(m,f),r(v,h),l(e,f,h,y.fontSize),m.appendChild(v),w.appendChild(m),this.populate(s.get("captionsTrack")),s.set("captions",y)},this.element=function(){return w},s.on("change:playlistItem",this),s.on("change:captionsTrack",this),s.mediaController.on("seek",this),s.mediaController.on("time seek",d,this),s.mediaController.on("subtitlesTrackData",this),s.on("change:state",this),s.on("itemReady",p,this)};return s}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1),n(2),n(31)],o=function(e,t,n){.extend(i.prototype,{align:);var o={loadChapters:chaptersLoaded:chaptersFailed:function(){},addCue:drawCues:function(){var t=this._model.mediaModel.get("duration");if(!t||t<=0)return void this._model.mediaModel.once("change:duration",this.drawCues,this);var n=this;e.each(this.cues,},resetChapters:;return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(37),n(2),n(1),n(7),n(106)],o=function(e,t,n,i,o){var r=e.extend({setup:function(e,r,a){a=a||{},this.iconUI||(this.iconUI=new i(this.el,{useHover:!0,directSelect:!0}),this.toggleValueListener=this.toggleValue.bind(this),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.select.bind(this)),this.reset(),e=n.isArray(e)?e:[],t.toggleClass(this.el,"jw-hidden",e.length<2);var s=e.length>2||2===e.length&&a&&a.toggle===!1,l=!s&&2===e.length;if(t.toggleClass(this.el,"jw-toggle",l||!!a.isToggle),t.toggleClass(this.el,"jw-button-color",!l),this.isActive=s||l,s){t.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);var u=o(e),c=t.createElement(u);this.addContent(c),this.contentUI=new i(this.content).on("click tap",this.selectListener)}else l&&this.iconUI.on("click tap",this.toggleValueListener);this.selectItem(r)},toggleValue:select:selectItem:function(e){if(this.content)for(var n=0;n<this.content.children.length;n++)t.toggleClass(this.content.children[n],"jw-active-option",e===n);t.toggleClass(this.el,"jw-off",0===e)},reset:);return r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(33),n(7),n(1),n(2),n(107)],o=function(e,t,n,i,o){var r=function(e,t,n,i){this._model=e,this._api=t,this._nextButton=n,this._playerElement=i,this.nextUpText=e.get("localization").nextUp,this.nextUpClose=e.get("localization").nextUpClose,this.state="tooltip"};return n.extend(r.prototype,{setup:function(){this.container=document.createElement("div"),this.container.className="jw-nextup-container jw-reset";var e=i.createElement(o());this.addContent(e),this.closeButton=this.content.querySelector(".jw-nextup-close"),this.closeButton.setAttribute("aria-label",this.nextUpClose),this.tooltip=this.content.querySelector(".jw-nextup-tooltip"),this.showNextUp=!1,this.streamType=void 0,this._model.on("change:mediaModel",this.onMediaModel,this),this._model.on("change:streamType",this.onStreamType,this),this._model.on("change:nextUp",this.onNextUp,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this.onMediaModel(this._model,this._model.get("mediaModel")),new t(this.closeButton,{directSelect:!0}).on("click tap",this.hide,this),new t(this.tooltip).on("click tap",this.click,this),new t(this._nextButton.element(),{useHover:!0,directSelect:!0}).on("click tap",this.click,this).on("over",this.show,this).on("out",this.hoverOut,this)},loadThumbnail:click:show:hide:hoverOut:showTilEnd:setNextUpItem:onNextUp:function(e,t){return t?(this.showNextUp=t.showNextUp,this._nextButton.toggle(!0),void this.setNextUpItem(t)):(this._nextButton.toggle(!1),void(this.showNextUp=!1))},onDuration:function(e,t){if(t){var n=i.seconds(e.get("nextupoffset")||-10);n<0&&(n+=t),this.offset=n}},onMediaModel:onElapsed:onStreamType:element:function(){return this.container},addContent:function(e){this.content&&this.removeContent(),this.content=e,this.container.appendChild(e)},removeContent:function(){this.content&&(this.container.removeChild(this.content),this.content=null)}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1),n(2),n(31)],o=function(e,t,n){ar o={loadThumbnails:thumbnailsLoaded:thumbnailsFailed:function(){},chooseThumbnail:loadThumbnail:function(t){var n=this.chooseThumbnail(t),i={display:"block",margin:"0 auto",backgroundPosition:"0 0"},o=n.indexOf("#xywh");if(o>0)try{var r=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);n=r[1],i.backgroundPosition=r[2]*-1+"px "+r[3]*-1+"px",i.width=r[4],i.height=r[5]}catch(a){return}else this.individualImage||(this.individualImage=new Image,this.individualImage.onload=e.bind(this),this.individualImage.src=n);return i.backgroundImage='url("'+n+'")',i},showThumbnail:resetThumbnails:;return o}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(1),n(2),n(22),n(36),n(37),n(148),n(151)],o=function(e,t,n,i,o,r,a){function s(){return{reason:"interaction"}}var l=o.extend({setup:function(){this.text=document.createElement("span"),this.text.className="jw-text jw-reset",this.img=document.createElement("div"),this.img.className="jw-reset",this.resetWidth(),this.textLength=0;var e=document.createElement("div");e.className="jw-time-tip jw-background-color jw-reset",e.appendChild(this.img),e.appendChild(this.text),t.removeClass(this.el,"jw-hidden"),this.addContent(e)},image:update:function(e){this.text.innerHTML=e},getWidth:setWidth:function(e){return e?void(this.containerWidth=e+16):void(this.container&&(this.containerWidth=t.bounds(this.container).width))},resetWidth:),u=i.extend({constructor:setup:limit:update:dragStart:dragEnd:onSeeked:onBuffer:function(e,t){this.updateBuffer(t)},onPosition:function(e,t){this.updateTime(t,e.get("duration"))},onDuration:function(e,t){this.updateTime(e.get("position"),t)},updateTime:onPlaylistItem:performSeek:showTimeTooltip:function(e){var i=this._model.get("duration");if(0!==i){var o=this._model.get("containerWidth"),r=t.bounds(this.elementRail),a=e.pageX?e.pageX-r.left:e.x;a=t.between(a,0,r.width);var s=a/r.width,l=i*s;i<0&&(l=i-l);var u;if(this.activeCue)u=this.activeCue.text;else{var c=!0;u=t.timeFormat(l,c),i<0&&l>n.dvrSeekLimit&&(u="Live")}var d=this.timeTip;d.update(u),this.textLength!==u.length&&(this.textLength=u.length,d.resetWidth()),this.showThumbnail(l),t.addClass(d.el,"jw-open");var p=d.getWidth(),f=r.width/100,h=o-r.width,g=0;p>h&&(g=(p-h)/(200*f));var w=100*Math.min(1-g,Math.max(g,s)).toFixed(3);t.style(d.el,{left:w+"%"})}},hideTimeTooltip:reset:function(){this.resetChapters(),this.resetThumbnails(),this.timeTip.resetWidth(),this.textLength=0}});return e.extend(u.prototype,r,a),u}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(1),n(3),n(22),n(7),n(36),n(152),n(149),n(153),n(66)],o=function(e,t,n,i,o,r,a,s,l,u){nction p(t,n){if(!e.isChrome()||e.isIOS())return u("jw-icon-airplay jw-off",t,n.airplay);var i=document.createElement("button","google-cast-button"),o=document.createElement("div"),r=n.cast;return i.className="jw-button-color jw-icon-inline",o.className="jw-reset jw-icon-cast",o.style.display="none",o.style.cursor="pointer",o.setAttribute("role","button"),o.setAttribute("tabindex","0"),r&&o.setAttribute("aria-label",r),o.appendChild(i),{element:function(){return o},toggle:function(e){e?this.show():this.hide()},show:function(){o.style.display=""},hide:function(){o.style.display="none"},button:i}}function f(){return{reason:"interaction"}}turn t.extend(g.prototype,n,{setup:build:function(){var n,i,o,s=new a(this._model,this._api),g=this._localization.play,w=this._localization.next,m=this._localization.volume,v=this._localization.rewind;this._isMobile||(n=new r("jw-slider-volume","horizontal"),i=new l(this._model,"jw-icon-volume",m)),this._model.get("sdkplatform")||e.isIOS(8)||e.isIOS(9)||(o=u("jw-icon-volume",this._api.setMute,m)),this.elements={alt:c("jw-text-alt","status"),play:u("jw-icon-playback",this._api.play.bind(this,f()),g),rewind:u("jw-icon-rewind",this.rewind.bind(this),v),next:u("jw-icon-next",null,w),elapsed:c("jw-text-elapsed","timer"),countdown:c("jw-text-countdown","timer"),time:s,duration:c("jw-text-duration","timer"),durationLeft:c("jw-text-duration","timer"),hd:d("jw-icon-hd",this._localization.hd),cc:d("jw-icon-cc",this._localization.cc),audiotracks:d("jw-icon-audio-tracks",this._localization.audioTracks),mute:o,volume:n,volumetooltip:i,cast:p(this._api.castToggle,this._localization),fullscreen:u("jw-icon-fullscreen",this._api.setFullscreen,this._localization.fullscreen)},this.layout={left:[this.elements.play,this.elements.rewind,this.elements.elapsed,this.elements.durationLeft,this.elements.countdown],center:[this.elements.time,this.elements.alt],right:[this.elements.duration,this.elements.next,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.mute,this.elements.cast,this.elements.volume,this.elements.volumetooltip,this.elements.fullscreen]},this.menus=t.compact([this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.volumetooltip]),this.layout.left=t.compact(this.layout.left),this.layout.center=t.compact(this.layout.center),this.layout.right=t.compact(this.layout.right),this.el=document.createElement("div"),this.el.className="jw-controlbar jw-background-color jw-reset",this.elements.left=h("left",this.layout.left),this.elements.center=h("center",this.layout.center),this.elements.right=h("right",this.layout.right),this.el.appendChild(this.elements.left),this.el.appendChild(this.elements.center),this.el.appendChild(this.elements.right)},initialize:function(){this.elements.play.show(),this.elements.fullscreen.show(),this.elements.mute&&this.elements.mute.show(),this.onVolume(this._model,this._model.get("volume")),this.onPlaylistItem(),this.onMediaModel(this._model,this._model.get("mediaModel")),this.onCastAvailable(this._model,this._model.get("castAvailable")),this.onCastActive(this._model,this._model.get("castActive")),this.onCaptionsList(this._model,this._model.get("captionsList")),this._model.on("change:volume",this.onVolume,this),this._model.on("change:mute",this.onMute,this),this._model.on("change:playlistItem",this.onPlaylistItem,this),this._model.on("change:mediaModel",this.onMediaModel,this),this._model.on("change:castAvailable",this.onCastAvailable,this),this._model.on("change:castActive",this.onCastActive,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:durationLeft",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this._model.on("change:fullscreen",this.onFullscreen,this),this._model.on("change:captionsList",this.onCaptionsList,this),this._model.on("change:captionsIndex",this.onCaptionsIndex,this),this._model.on("change:streamType",this.onStreamTypeChange,this),this.elements.volume&&this.elements.volume.on("update",function(e){var t=e.percentage;this._api.setVolume(t)},this),this.elements.volumetooltip&&(this.elements.volumetooltip.on("update",this),this.elements.volumetooltip.on("toggleValue",function(){this._api.setMute()},this)),this.elements.cast.button&&new o(this.elements.cast.button).on("click tap",this),this.elements.hd.on("select",function(e){this._model.getVideo().setCurrentQuality(e)},this),this.elements.hd.on("toggleValue",this),this.elements.cc.on("select",this),this.elements.cc.on("toggleValue",this),this.elements.audiotracks.on("select",this),new o(this.elements.duration).on("click tap",this),new o(this.elements.durationLeft).on("click tap",function(){if("DVR"===this._model.get("streamType")){var e=this._model.get("position");this._api.seek(Math.max(i.dvrSeekLimit,e))}},this),new o(this.el).on("click tap drag",function(){this.trigger("userAction")},this),t.each(this.menus,this)},onCaptionsList:onCaptionsIndex:function(e,t){this.elements.cc.selectItem(t)},onPlaylistItem:function(){this.elements.time.updateBuffer(0),this.elements.time.render(0),this.elements.duration.innerHTML="00:00",this.elements.durationLeft.innerHTML="00:00",this.elements.elapsed.innerHTML="00:00",this.elements.countdown.innerHTML="00:00",this.elements.audiotracks.setup()},onMediaModel:onVolume:onMute:renderVolume:onCastAvailable:onCastActive:function(t,n){this.elements.fullscreen.toggle(!n),this.elements.cast.button&&e.toggleClass(this.elements.cast.button,"jw-off",!n)},onElapsed:function(t,n){var i,o,r=t.get("duration");"DVR"===t.get("streamType")?i=o="-"+e.timeFormat(-r):(i=e.timeFormat(n),o=e.timeFormat(r-n)),this.elements.elapsed.innerHTML=i,this.elements.countdown.innerHTML=o},onDuration:function(t,n){var i;i="DVR"===t.get("streamType")?"Live":e.timeFormat(n),this.elements.duration.innerHTML=i,this.elements.durationLeft.innerHTML=i},onFullscreen:element:function(){return this.el},setAltText:addCues:closeMenus:hideComponents:function(){this.closeMenus()},rewind:onStreamTypeChange:function(e){var t=e.get("streamType");this.elements.rewind.toggle("LIVE"!==t),"DVR"===t&&(this.elements.duration.innerHTML="Live",this.elements.durationLeft.innerHTML="Live")}}),g}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(3),n(7),n(102),n(1)],o=function(e,t,n,i,o){var r=function(){this.el=e.createElement(i()),this.container=this.el.querySelector(".jw-display-controls"),this.addButton=;return o.extend(r.prototype,{element:function(){return this.el}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(7),n(2),n(4),n(1),n(3),n(105)],o=function(e,t,n,i,o,r){var a=t.style,s={linktarget:"_blank",margin:8,hide:!1,position:"top-right"},l=function(l){var u,c,d=new Image,p=i.extend({},l.get("logo"));return i.extend(this,o),this.setup=function(o){if(c=i.extend({},s,p),c.hide="true"===c.hide.toString(),u=t.createElement(r()),c.file){c.hide&&t.addClass(u,"jw-hide"),t.addClass(u,"jw-logo-"+(c.position||s.position)),"top-right"===c.position&&(l.on("change:dock",this.topRight,this),l.on("change:controls",this.topRight,this),this.topRight(l)),l.set("logo",c),d.onload=d.src=c.file;var f=new e(u);f.on("click tap",this),o.appendChild(u)}},this.topRight=this.element=function(){return u},this.position=this.destroy=function(){d.onload=null},this};return l}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(3),n(7),n(28),n(1)],o=function(e,t,n,i,o){var r=function(t,o){this.el=e.createElement(i({iconName:"next",ariaLabel:t.get("localization").next})),this.iconUI=new n(this.el).on("click tap",function(){o.next()}),this.el.style.display="none",t.on("change:nextUp",function(e,t){this.el.style.display=t?"":"none"},this)};return o.extend(r.prototype,{element:function(){return this.el}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(3),n(7),n(28),n(1)],o=function(e,t,n,i,o){var r=function(r){o.extend(this,t),this.model=r,this.el=e.createElement(i({iconName:"display",ariaLabel:this.model.get("localization").playback}));var a=this;this.iconUI=new n(this.el).on("click tap",,this.model.on("change:state",};return o.extend(r.prototype,{element:function(){return this.el}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(3),n(7),n(28),n(1)],o=function(e,t,n,i,o){var r=function(t,o){this.el=e.createElement(i({iconName:"rewind",ariaLabel:t.get("localization").playback})),this.iconUI=new n(this.el).on("click tap",};return o.extend(r.prototype,{element:function(){return this.el}}),r}.apply(t,i),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,o;i=[n(2),n(4),n(3),n(22),n(5),n(146),n(147),n(162),n(160),n(159),n(156),n(158),n(154),n(161),n(177),n(164),n(150),n(1),n(108),n(145),n(66),n(155)],o=function(e,t,i,o,r,a,s,l,u,c,d,p,f,h,g,w,m,v,j,y,b,x){var E=e.style,k=e.bounds,C=e.isMobile(),A=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],L=function(L,_){tion I(e){if(!M(e))return!0;switch(_e||ue(),e.keyCode){case 27:L.setFullscreen(!1);break;case 13:case 32:L.play(T());break;case 37:_e||P(-5);break;case 39:_e||P(5);break;case 38:R(10);break;case 40:R(-10);break;case 67:var t=L.getCaptionsList(),n=t.length;if(n){var i=(L.getCurrentCaptions()+1)%n;L.setCurrentCaptions(i)}break;case 77:L.setMute();break;case 70:L.setFullscreen();break;default:if(e.keyCode>=48&&e.keyCode<=59){var o=e.keyCode-48,r=o/10*_.get("duration");L.seek(r,T())}}return/13|32|37|38|39|40/.test(e.keyCode)?(e.preventDefault(),!1):void 0}function S(){tt=!1,e.removeClass(Ee,"jw-no-focus")}nction D(){tt||S(),_e||C||ue()}function Y(){var e=k(Ee),n=Math.round(e.width),i=Math.round(e.height);if($e(Xe),n!==Ae||i!==Le){if(!n||!i)return void(Ae&&Le||W());Ae=n,Le=i,clearTimeout(qe),qe=setTimeout(ne,50),_.set("containerWidth",n),_.set("containerHeight",i);var o=y(Ee,n,i);Z(_.get("height")),F(o,_.get("audioMode")),nt.trigger(t.JWPLAYER_RESIZE,{width:n,height:i})}}function F(t,n){var i=t<2,o=_.get("timeSliderAbove"),r=!n&&o!==!1&&(o||i);e.toggleClass(Ee,"jw-flag-small-player",i),e.toggleClass(Ee,"jw-flag-audio-player",n),e.toggleClass(Ee,"jw-flag-time-slider-above",r)}tion z(){var e=_.get("state");_.get("controls")&&(e===r.IDLE||e===r.COMPLETE||_e&&_e.get("state")===r.PAUSED)&&L.play(T()),e===r.PAUSED?ce():Ke?se():ue()}nction G(){ue()}ction Q(){var n=Ee.getElementsByClassName("jw-overlays")[0];n.addEventListener("mousemove",le),Re=new s(_,Ce,{useHover:!0}),Re.on("click",,Re.on("tap",,Re.on("doubleClick",X),Re.on("move",le),Re.on("over",le),ke.appendChild(be()),Ie=new d(_),Se=new p(_),Se.on(t.JWPLAYER_LOGO_CLICK,U);var i=document.createElement("div");i.className="jw-controls-right jw-reset",Se.setup(i),i.appendChild(Ie.element()),ke.appendChild(i),Ye=new a(_),Ye.setup(Ee.id,_.get("captions")),ke.parentNode.insertBefore(Ye.element(),Oe.element());var o=_.get("height");C&&("string"==typeof o||o>=Ge)?e.addClass(Ee,"jw-flag-touch"):(Fe=new g,Fe.setup(_,Ee,Ee)),Te=new f(L,_),Te.on(t.JWPLAYER_USER_ACTION,le),_.on("change:scrubbing",je),_.autoStartOnMobile()&&(De=b("jw-autostart-mute jw-off",ie,_.get("localization").volume),De.show(),ke.appendChild(De.element()),Te.renderVolume(!0,_.get("volume")),e.addClass(Ee,"jw-flag-autostart"),_.set("autostartMuted",!0),_.on("change:autostartFailed",ie),_.on("change:autostartMuted",ie),_.on("change:mute",ie)),Ne=new m(_,L,Te.elements.next,Ee),Ne.setup(),ke.appendChild(Ne.element()),ke.appendChild(Te.element()),Ee.addEventListener("focus",D),Ee.addEventListener("blur",S),Ee.addEventListener("keydown",I),Ee.onmousedown=N,
Ee.onmouseup=O}unction Z(e){var t=ee(e);if(Te&&!t){var n=_e?_e:_;me(n,n.get("state"))}_.set("audioMode",t)}function ee(e){if(_.get("aspectratio"))return!1;if(v.isString(e)&&e.indexOf("%")>-1)return!1;var t=1*e||null;return t=v.isNumber(t)?t:_.get("containerHeight"),!!t&&te(t)}function te(e){return e&&e<=Ge}function ne(e,t){if(!e||isNaN(Number(e))){if(!Ce)return;e=Ce.clientWidth}if(!t||isNaN(Number(t))){if(!Ce)return;t=Ce.clientHeight}Pe&&Pe.resize(e,t,_.get("stretching"));var n=_.getVideo();if(n){var i=n.resize(e,t,_.get("stretching"));i&&(clearTimeout(qe),qe=setTimeout(ne,250)),_.get("aspectratio")&&ye(),Ye.resize()}}ction ae(t,n){n?(e.addClass(t,"jw-flag-fullscreen"),E(document.body,{"overflow-y":"hidden"}),ue()):(e.removeClass(t,"jw-flag-fullscreen"),E(document.body,{"overflow-y":""})),ne(),W()}nction ue(t){Ke||(e.removeClass(Ee,"jw-flag-user-inactive"),Ye.renderCues(!0)),Ke=!0,clearTimeout(Ue),Ue=setTimeout(se,t||He)}function ce(){_e||_.get("castActive")||_.mediaModel&&"audio"===_.mediaModel.get("mediaType")||(e.toggleClass(Ee,"jw-flag-controls-hidden"),Ye.renderCues(!0))}on me(t,n){We=n,clearTimeout(Ze),n===r.PLAYING?ve(t,n):Ze=setTimeout(33),n!==r.PAUSED&&e.hasClass(Ee,"jw-flag-controls-hidden")&&e.removeClass(Ee,"jw-flag-controls-hidden")}function ve(t,n){switch(e.toggleClass(Ee,"jw-flag-dragging",t.get("scrubbing")),we(),n){case r.PLAYING:ne()}}nction be(){var e=new x,t=new l(_,L),n=xe(),i=new c(_,L);return e.addButton(t),e.addButton(n),e.addButton(i),e.element()}function xe(){var n=new u(_);return n.on("click tap",function(){K({type:t.JWPLAYER_DISPLAY_CLICK}),ue(1e3),L.play(T())}),e.isChrome()&&!e.isMobile()&&n.el.addEventListener("mousedown",,n}var Ee,ke,Ce,Ae,Le,_e,Te,Pe,Re,Me,Ie,Se,Oe,Ne,De,Ye,Fe,We,Je,Be,Ve,ze,Ue=-1,He=C?4e3:2e3,Ge=44,Ke=!1,qe=-1,Xe=-1,Qe=window.requestAnimationFrame||$e=window.cancelAnimationFrame||window.clearTimeout,Ze=-1,et=!1,tt=!1,nt=v.extend(this,i);window.webpackJsonpjwplayer&&n(113),this.model=_,this.api=L,Ee=e.createElement(j({id:_.get("id")})),e.isIE()&&e.addClass(Ee,"jw-ie");var it=_.get("width"),ot=_.get("height");E(Ee,{width:it.toString().indexOf("%")>0?it:it+"px",height:ot.toString().indexOf("%")>0?ot:ot+"px"}),Be=Ee.requestFullscreen||Ee.webkitRequestFullscreen||Ee.webkitRequestFullScreen||Ee.mozRequestFullScreen||Ee.msRequestFullscreen,Ve=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen,et=Be&&Ve,this.onChangeSkin=this.handleColorOverrides=function(){function t(e,t){var n;if(!ze){var i=document.createElement("canvas");i.height=1,i.width=1,ze=i.getContext("2d")}return ze.clearRect(0,0,1,1),ze.fillStyle=e,ze.fillRect(0,0,1,1),n=ze.getImageData(0,0,1,1).data,"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+t+")"}ar i=_.get("id"),o=_.get("skinColorActive"),r=_.get("skinColorInactive"),a=_.get("skinColorBackground");if(o&&(n([".jw-button-color.jw-toggle",".jw-button-color:hover",".jw-button-color.jw-toggle.jw-off:hover",".jw-option:not(.jw-active-option):hover",".jw-nextup-header"],"color",o),n([".jw-option.jw-active-option",".jw-progress"],"background","none "+o)),r&&(n([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-skip .jw-skip-icon",".jw-nextup-body"],"color",r),n([".jw-cue",".jw-knob",".jw-active-option",".jw-nextup-header"],"background","none "+r)),a){if(n([".jw-background-color"],"background","none "+a),_.get("timeSliderAbove")!==!1){var s="transparent linear-gradient(180deg, "+t(a,0)+" 0%, "+t(a,.25)+" 30%, "+t(a,.4)+" 70%, "+t(a,.5)+") 100%";n([".jw-flag-time-slider-above .jw-background-color.jw-controlbar"],"background",s,!0)}n([".jw-flag-time-slider-above .jw-background-color.jw-slider-time"],"background","transparent",!0)}J(o,r,i)},this.setup=function(){this.handleColorOverrides(),_.get("skin-loading")===!0&&(e.addClass(Ee,"jw-flag-skin-loading"),_.once("change:skin-loading",),this.onChangeSkin(_,_.get("skin"),""),_.on("change:skin",this.onChangeSkin,this),Ce=Ee.getElementsByClassName("jw-media")[0],ke=Ee.getElementsByClassName("jw-controls")[0];var n=Ee.getElementsByClassName("jw-preview")[0];Pe=new h(_),Pe.setup(n);var i=Ee.getElementsByClassName("jw-title")[0];Oe=new w(_),Oe.setup(i),Q(),ue(),_.set("mediaContainer",Ce),_.mediaController.on("fullscreenchange",re);for(var o=A.length;o--;)document.addEventListener(A[o],re,!1);window.removeEventListener("resize",W),window.addEventListener("resize",W,!1),C&&(window.removeEventListener("orientationchange",W),window.addEventListener("orientationchange",W,!1)),_.on("change:errorEvent",ge),_.on("change:controls",rt),rt(_,_.get("controls")),_.on("change:state",me),_.on("change:duration",he,this),_.on("change:flashBlocked",q),q(_,_.get("flashBlocked")),L.onPlaylistComplete(de),L.onPlaylistItem(pe),_.on("change:hideAdsControls",,_.get("stretching")&&B(_,_.get("stretching")),_.on("change:stretching",B),me(_,r.IDLE),_.on("change:fullscreen",at),V(Te),V(Se);var a=_.get("aspectratio");if(a){e.addClass(Ee,"jw-flag-aspect-mode");var s=Ee.getElementsByClassName("jw-aspect")[0];E(s,{paddingTop:a})}L.on(t.JWPLAYER_READY,function(){$(_.get("width"),_.get("height")),Y()})};var rt=at=this.resize=this.resizeMedia=ne,this.reset=this.setupInstream=this.setAltText=function(e){Te.setAltText(e)},this.destroyInstream=this.addCues=this.clickHandler=function(){return Re},this.controlsContainer=function(){return ke},this.getContainer=this.element=function(){return Ee},this.getSafeRegion=this.setCaptions=this.destroy=;return L}.apply(t,i),!(void 0!==o&&(e.exports=o))},,function(e,t,n){var i;i=function(require,e,t){function n(e,t){o(t,r(e))}function i(e){var t=c[e];if(t){for(var n=Object.keys(t),i=0;i<n.length;i+=1)for(var o=t[n[i]],r=0;r<o.parts.length;r+=1)o.parts[r]();delete c[e]}}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n],o=(c[e]||{})[i.id];if(o){for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(l(e,i.parts[r]))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(l(e,i.parts[r]));c[e]=c[e]||{},c[e][i.id]={id:i.id,parts:a}}}}function r(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],a=o[1],s=o[2],l={css:a,media:s};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function a(e){f().appendChild(e)}function s(e){var t=document.createElement("style");return t.type="text/css",t.setAttribute("data-jwplayer-id",e),a(t),t}function l(e,t){var n,i,o,r=d[e];r||(r=d[e]={element:s(e),counter:0});var a=r.counter++;return n=r.element,i=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0),i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media)return;i(t=e)}else o()}}function u(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}var c={},d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return document.head||document.getElementsByTagName("head")[0]});t.exports={style:n,clear:i};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},,,,function(e,t,n){var i,o;i=[n(122),n(16),n(175),n(27),n(2),n(1)],o=function(e,t,i,o,r,a){var s=e.prototype.setup;return e.prototype.setup=function(e,r){function l(){var e=p.get("cast");return a.isObject(e)&&h("casting")&&!o.containsDrm(p)}function u(){var e=p.getVideo();l()?(c.apply(this),d.apply(this)):e&&e.video&&(e.video.webkitWirelessVideoPlaybackDisabled=!0)}function c(){n.e(3,function(require){if(window.chrome){var e=n(69);this._castController=new e(this,p),this.castToggle=this._castController.castToggle.bind(this._castController)}}.bind(this))}.apply(this,arguments);var p=this._model,f=p.get("edition"),h=t(f),g=i.setup();e.analytics&&(e.sdkplatform=e.sdkplatform||e.analytics.sdkplatform),this.once("ready",u,this),this.once("ready",g.onReady,this),r.getAdBlock=g.checkAdBlock},e}.apply(t,i),!(void 0!==o&&(e.exports=o))},);// load player + accessible controls
(function($) {
    $(document).ready(function(){
        $.get(MLConfig.configs.jwplayer.basePath + "/jwplayer.js", function() {
            jwplayer.key= MLConfig.configs.jwplayer.key;
            $.loadPlayer();
        });
        
    });
    
})(jQuery);

(function(){
    'use strict';
    var path        = MLConfig.configs.url.path;
    var url         = MLConfig.configs.url.domain;
    var loadCss     = MLConfig.configs.defaults.loadCss;
    var css;
    
    if(loadCss) {
        // list of css files to load
        var cssFiles= [
            {url : url + path + '/css/style.css', media : 'all'}
        ];
      
        css = document.createElement('link');
        css.setAttribute('href', cssFiles[0]['url']);
        css.setAttribute('rel', "stylesheet");
        css.setAttribute('media', cssFiles[0]['media']);
        css.type= 'text/css';

        // add css to head
        document.getElementsByTagName('head')[0].appendChild(css);      
    }

}());
