// dont pollute the global namespace (too much)


// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t/9899701#9899701})("docReady", window);


(function() {
	"use strict";

	var astuteBotMessengerLauncher = {
		version: "1.0.0",
		init: undefined,
        destroy: undefined,
        sendMessage: undefined,
        scriptSrc: document.currentScript.src,
        
        init: undefined,
        destroy: undefined,
        sync: undefined,

        defaultOptions: {
            host: {
                getUserInfo: function() {},
                getAstuteBotInfo},
                onMessage}
            },
            state: {
                // agent worksapce state:
                workspace: {
                    selectedView: 'NONE',
                    allowDragging: true,
                    windowAnchor: {
                        x: 'left',
                        y: 'bottom'
                    },
                    agentChatPanel: {
                        splitterSizes: [70, 30]
                    },
                },

                // launcher state:
                launcher: {
                    windowPosition: {
                        dx: 0,
                        dy: 0,
                        width: 1040,
                        height: 480,
                    },
                    restoreSizes: {
                        collapsed: {
                            width: 55,
                            height: 260
                        },
                        expanded: {
                            width: 640,
                            height: 480
                        }
                    },
                    expandCollapseMode: 'collapsed' // collapsed, expanded
                },
            },
            
            
            // custom on screen locations various edges can snap to.  intended to allow the top edge to snap to bottom of astute agent title bar
            snapLocations: { 
                left: [],
                right: [],
                top: [],
                bottom: []
            }
        }
	}, _globals;

    _globals =}());

    var _options = null;
    var _localStorageSettings = {
        key: 'AstuteBotMessengerLauncher',
        version: 1
    }
    var _loadDependenciesPromise = null;

    var _destroyed = false;
    var _frameLoads = [];
    var _needRemoveFullscreenPageStyle = false;

    var _shouldQueueEvents = true;
    var _queuedEvents = [];

    var _minimized = true;
    var _openedBotApp = false;
    
	if (typeof module !== "undefined" && module.exports) {
		module.exports = astuteBotMessengerLauncher;
	} else if (typeof define === "function" && define.amd) {
		defin});
	} else {
		_globals.astuteBotMessengerLauncher = astuteBotMessengerLauncher;
	}

    function loadDependencies() {        
        var scriptUrl = new URL(astuteBotMessengerLauncher.scriptSrc);

        var includeCss = function(url) {
            var cssElement = document.createElement("link");
            cssElement.rel = "stylesheet";
            cssElement.type = "text/css";
            cssElement.href = url;
            var head = document.getElementsByTagName('HEAD')[0];  
            head.appendChild(cssElement); 
        };

        var styleSheets = [
            '/components/Launchers/Messenger/v1.0.0.css'
            //'/ext/jqueryui/jquery-ui.min.css'
        ];
        for (var i = 0; i < styleSheets.length; i++){
            includeCss(scriptUrl.origin  + styleSheets[i]);
        }


        var includeJs = function(url) {
            return new Promise((resolve, reject) => {
                var jsElement = document.createElement("script");
                var body = document.getElementsByTagName('BODY')[0];  
                jsElement.type = "text/javascript";        
                jsElement.src = url;
                jsElement.async = true;
                jsElement.onload }        
                body.appendChild(jsElement);         
            });
        };
                   

        var scripts = [
            //'/ext/theme/js/jquery-3.1.1.min.js',
            //'/ext/jqueryui/jquery-ui.min.js'
            //'/ext/interact/interact.min.js'
        ];
               
        return new Promise((resolve, reject) => {
            var i = 0;

            var loadNext = function() {
                if (i >= scripts.length) {
                    resolve();
                } else {
                    includeJs(scriptUrl.origin  + scripts[i]).then(function() {
                        i++;
                        loadNext();
                    });
                }
            }
            loadNext();
        });
    }

    function waitForAllFramesToBeReady() {
        return new Promise((resolve, reject) => {
            var i = 0;

            var loadNext = function() {
                if (i >= _frameLoads.length) {
                    resolve();
                } else {
                    _frameLoads[i].promise.the});
                }
            }
            loadNext();
        });
    }



    function appendHtml(el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
            var domElement = el.appendChild(div.children[0]);
        }
    }

    function getUpdatedAstuteBotInfo() {
        var scriptUrl = new URL(astuteBotMessengerLauncher.scriptSrc);

        var astuteBotInfo = {
            tld: scriptUrl.hostname,
            origin: scriptUrl.origin
        };

        // strip off www./api. prefix from url to get tld:
        var hostParts = astuteBotInfo.tld.split('.');
        if (hostParts.length == 3) {
            astuteBotInfo.tld = hostParts[1] + '.' + hostParts[2];
        }        

        switch (astuteBotInfo.tld) {
            case 'localhost':
                astuteBotInfo.webBaseUrl = 'http://' + astuteBotInfo.tld + ':52007';
                astuteBotInfo.apiBaseUrl = 'http://' + astuteBotInfo.tld + ':54091/v1/';
                break;

            case 'emplifi.io': // this is kind of a hack since we can't resolve the api using current url
                astuteBotInfo.webBaseUrl = 'https://' + scriptUrl.hostname;
                astuteBotInfo.apiBaseUrl = 'https://' + 'api.astutebot.com' + '/v1/';
                break;

            default:
                astuteBotInfo.webBaseUrl = 'https://www.' + astuteBotInfo.tld;
                astuteBotInfo.apiBaseUrl = 'https://api.' + astuteBotInfo.tld + '/v1/';
                break;
        }
        return astuteBotInfo;
    }


    function getFrameContainer(type) {
        var els = document.getElementsByClassName('AstuteBotMessengerContainer');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el.getAttribute('data-type') == type) return el;
        }
        return null;
    }

    function addIframe(type) {
        // to guarantee things work, we should wait until all frames are loaded/"ready".  so this fn returnsa  promise that is resolved
        // when the component inside the frame fires back a "frame ready" event
        var frameLoad = {
            type: type,
            resolveFn: null,
            promise: null
        };
        frameLoad.promise = new Promis});
        _frameLoads.push(frameLoad);


        // patch in web, api urls from provided host:
        var astuteBotInfo = getUpdatedAstuteBotInfo();

        // add  frame
        {
            var url = 'messengerRuntime' + type;
            var frameName = 'componentFrame' + type;

            // ADA: add a title to iframe
            var frameTitle = '';
            switch (type) {
                case 'Panel': frameTitle = 'Messenger Panel'; break;
                case 'Launcher': frameTitle = 'Messenger Button'; break;
            }

            getFrameContainer(type).innerHTML = 
                '<div class="BorderContainer"><iframe class="ComponentFrame" name="' + frameName + '" title="' + frameTitle + '" frameBorder="0" style="display: none;" allow="geolocation *; microphone *; camera *;"></iframe></div>';

            var method = 'post';
            var path = astuteBotInfo.webBaseUrl + '/components/messenger.aspx';

            var form = document.createElement('form');
            form.setAttribute('method', method);
            form.setAttribute('action', path);
            form.setAttribute('target', frameName);

            var hiddenField = document.createElement('input');
            hiddenField.setAttribute('type', 'hidden');
            hiddenField.setAttribute('name', 'url');
            hiddenField.setAttribute('value', url);
            form.appendChild(hiddenField);

            hiddenField = document.createElement('input');
            hiddenField.setAttribute('type', 'hidden');
            hiddenField.setAttribute('name', 'contextJson');
            hiddenField.setAttribute('value', encodeURIComponent(JSON.stringify(_options)));
            form.appendChild(hiddenField);

            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        
            //document.getElementsByClassName('AstuteBotMessengerContainer')[0].style = "display: block;";
            getFrameContainer(type).getElementsByClassName('ComponentFrame')[0].style = "display: block;"; 
        }

       return frameLoad.promise;
    }


    astuteBotMessengerLauncher.broadcastEvent = function(event) {
        for (var i = 0; i < _frameLoads.length; i++) {
            var frame = getFrameContainer(_frameLoads[i].type).getElementsByClassName('ComponentFrame')[0].contentWindow;
            frame.postMessage(event, '*');
        }
    };    

    astuteBotMessengerLauncher.sendEvent = function(type, event) {
        var frame = getFrameContainer(type).getElementsByClassName('ComponentFrame')[0].contentWindow;
        frame.postMessage(event, '*');        
    };   

    
    function handleEvent(e) {        
        var astuteBotInfo = getUpdatedAstuteBotInfo();

        if (e.origin != astuteBotInfo.webBaseUrl) return;

        if (typeof window.astuteBotMessengerSettings.callbacks != 'undefined' && typeof window.astuteBotMessengerSettings.callbacks.analyticsEvent != 'undefined') {
            // attempt to parse a web chat event
            if (typeof e.data.type == 'undefined' && typeof e.data == 'string') {
                var dataParsed = JSON.parse(e.data);
                if (dataParsed.source != 'AstuteBot.WebChat') return;

                // this is a webchat analtyics event
                window.astuteBotMessengerSettings.callbacks.analyticsEvent(dataParsed);
            }
        }        

        switch (e.data.type) {
            case 'FRAME_READY':
                for (var i = 0; i < _frameLoads.length; i++) {
                    if (_frameLoads[i].type != e.data.frameType) continue;
                    _frameLoads[i].resolveFn();
                }
                break;

            case 'STYLE_FRAME_CONTAINER':
                getFrameContainer(e.data.frameType).style = e.data.styles;
                break;

            case 'SET_PANEL_VISIBILITY':
                if (window.astuteBotMessengerSettings.runtime.messenger.settings.general.fullScreenMobile &&
                    window.astuteBotMessengerSettings.viewSettings.isMobile) {
                    if (e.data.visible) {
                        setMessengerSizeFullscreen();
                        addFullscreenPageStyle();
                    } else {
                        removeFullscreenPageStyle();
                    }
                }                

                astuteBotMessengerLauncher.broadcastEvent(e.data); // broadcast this to all frames
                break;

            case 'MINIMIZE':
                astuteBotMessengerLauncher.broadcastEvent(e.data); // broadcast this to all frames                
                break;

            case 'ATTENTION_STARTED':
                astuteBotMessengerLauncher.broadcastEvent(e.data); // broadcast this to all frames
                break;

            case 'ALL_PANELS_INITIALIZED':
                _shouldQueueEvents = false;
                
                for (var i = 0; i < _queuedEvents.length; i++) {
                    var fullEvent = _queuedEvents[i];
                    astuteBotMessengerLauncher.broadcastEvent(fullEvent);
                }
                _queuedEvents = [];
                var discoveryInfoParam = getUrlVars('discoveryInfo');
                if (discoveryInfoParam) {
                    discoveryPanelSetup(atob(discoveryInfoParam));
                }

                handleResize();
                break;

            case 'HIDDEN':
                _minimized = true;
                break;

            case 'MINIMIZED':
                _minimized = true;
                var newDiscoverabilityPanel = document.getElementsByClassName('DiscoverabilityContainer')[0];
                if (newDiscoverabilityPanel) {
                    closeOverlay(newDiscoverabilityPanel);
                }
                break;

            case 'MAXIMIZED':
                _minimized = false;

                if (!_openedBotApp && window.astuteBotMessengerSettings.runtime.messenger.settings.general.botMode == true) {
                    astuteBotMessenger.sendEvent({ index: 0 }, { type: 'startConversation', initialUserMessage: { type: 'event', content: { type: 0 } } });
                    _openedBotApp = true;
                }
                break;
        }
    }

    function addFullscreenPageStyle() {
        if (document.body.style.overflow != 'hidden') {
            document.body.style.overflow = 'hidden';
            _needRemoveFullscreenPageStyle = true;
        }
    }

    function removeFullscreenPageStyle() {
        if (_needRemoveFullscreenPageStyle) {
            document.body.style.removeProperty('overflow');
            _needRemoveFullscreenPageStyle = false;
            window.removeEventListener('resize', setMessengerSizeFullscreen);
        }
    }

  }

    function setMessengerSizeFullscreen() {
        var doSync = false;

        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (window.astuteBotMessengerSettings.runtime.messenger.settings.dimensions.messengerHeight != windowHeight) {
            window.astuteBotMessengerSettings.runtime.messenger.settings.dimensions.messengerHeight = windowHeight;
            doSync = true;
        }

        var windowWidth = window.innerWidth;
        if (window.astuteBotMessengerSettings.runtime.messenger.settings.dimensions.messengerWidth != windowWidth) {
            window.astuteBotMessengerSettings.runtime.messenger.settings.dimensions.messengerWidth = windowWidth;
            doSync = true;
        }

        window.removeEventListener('resize', setMessengerSizeFullscreen);        

        if (doSync) {
            astuteBotMessengerLauncher.sync('settings');
        }
    }


	astuteBotMessengerLauncher.init = function() {        
        //var channelId = getUrlVars()['channelId'];
        //if (typeof channelId == 'undefined') return;

        _frameLoads = [];
        _destroyed = false;
        _shouldQueueEvents = true;


        window.astuteBotMessenger = {
            sendEvent(target, event) {
                var fullEvent = {
                    type: 'SEND_EVENT',
                    target: target,
                    event: event
                };

                if (_shouldQueueEvents) {
                    _queuedEvents.push(fullEvent);
                } else {
                    astuteBotMessengerLauncher.broadcastEvent(fullEvent);
                }       

                if (_minimized) {
                    var minimizeEvent = {
                        type: 'MINIMIZE',
                    };
                    astuteBotMessengerLauncher.broadcastEvent(minimizeEvent);
                }
            }
        };

        var discoveryInfoParam = getUrlVars('discoveryInfo');
        var settings = window.astuteBotMessengerSettings;
        if (typeof settings == 'undefined') return;
        if (typeof settings.viewOptions == 'undefined') {
            settings.viewOptions = {
                defaultView: discoveryInfoParam ? 'MAXIMIZED' : 'MINIMIZED'
            };
        }
        if (settings.viewSettings == null) {
            settings.viewSettings = {};
        }
        if (settings.viewSettings.isMobile == null) {
            settings.viewSettings.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);            
        }

        if (settings.viewOptions.defaultView != 'MAXIMIZED') {
            _minimized = true;
        }

        
        
        _loadDependenciesPromise = loadDependencies();
        _loadDependenciesPromise.then(function() {
            //$(document).ready(function() {
            //document.addEventListener("DOMContentLoaded", function(event) { 
            docReady(function() {
                console.log(_destroyed);

                _options = settings;

                // try to read from local storage
                var persistedLocalStorageSettingsJson = window.localStorage.getItem(_localStorageSettings.key);
                if (persistedLocalStorageSettingsJson != null) {
                    _localStorageSettings = JSON.parse(persistedLocalStorageSettingsJson);
                }

                // persist userId if needed, otherwise copy persisted one into analytics info
                if (settings != null &&
                    settings.runtime != null &&
                    settings.runtime.analyticsInfo != null) {
                    if (_localStorageSettings.userId == null) {
                        _localStorageSettings.userId = settings.runtime.analyticsInfo.userId;
                        window.localStorage.setItem(_localStorageSettings.key, JSON.stringify(_localStorageSettings));
                    } else {
                        settings.runtime.analyticsInfo.userId = _localStorageSettings.userId;
                    }
                }                

                appendHtml(document.body, '<div class="AstuteBotMessengerContainer" data-type="Panel" style="display: none;"></div>');
                appendHtml(document.body, '<div class="AstuteBotMessengerContainer" data-type="Launcher" style="display: none;"></div>');

                var shouldLoadAttention = settings.runtime.messenger.settings.launcher.showAttention &&
                    settings.runtime.messenger.settings.launcher.attentionMessage != null &&
                    settings.runtime.messenger.settings.launcher.attentionMessage.length > 0;

                if (shouldLoadAttention) {
                    appendHtml(document.body, '<div class="AstuteBotMessengerContainer" data-type="Attention" style="display: none;"></div>');
                }

                window.addEventListener('message', handleEvent);
                window.addEventListener('resize', handleResize);

                // wait for frames to load before load
                addIframe('Launcher');
                addIframe('Panel');

                if (shouldLoadAttention) {
                    addIframe('Attention');
                }

                waitForAllFramesToBeReady().then(function () {
                    astuteBotMessengerLauncher.broadcastEvent({
                        type: 'ALL_FRAMES_READY',
                        settings: JSON.parse(JSON.stringify(settings)) // todo: figure out what non-cloneable garbage is in here
                    });
                });

            });
        });
    };    

    astuteBotMessengerLauncher.destroy = function () {        
        _destroyed = true;
        _loadDependenciesPromise.then(function() {
            window.removeEventListener('message', handleEvent);            

            astuteBotMessengerLauncher.broadcastEvent({
                type: 'DESTROY'
            });      

            // do this async, if we don't let the destroy occur, bad things happen
            setTimeout(function () {
                // clean up DOM
                for (var i = 0; i < _frameLoads.length; i++) {
                    var frame = getFrameContainer(_frameLoads[i].type);
                    if (frame == null) continue;
                    frame.parentNode.removeChild(frame);
                }

                // reset everything back to default
                _frameLoads = [];
                _needRemoveFullscreenPageStyle = false;

                _shouldQueueEvents = true;
                _queuedEvents = [];

                _minimized = true;
                _openedBotApp = false;
            }, 1);            
        });
    };
    
    // called by the preview/test page to update runtime data on the fly
    astuteBotMessengerLauncher.sync = function(changeType) {
        _loadDependenciesPromise.then(function() {
            var settings = window.astuteBotMessengerSettings;

            // todo: figure out whats wrong with appLayout that causes errors if not striped down
            settings.runtime.messenger.appLayout = JSON.parse(JSON.stringify(settings.runtime.messenger.appLayout));

            var windowHeight = window.innerHeight;
            var windowWidth = window.innerWidth;

            astuteBotMessengerLauncher.broadcastEvent({
                type: 'SYNC',
                changeType: changeType,
                state: {
                    runtime: settings.runtime,
                    messengerContext: settings.context,
                    viewSettings: settings.viewSettings,
                    windowSize: {
                        height: windowHeight,
                        width: windowWidth
                    }
                }
            });
        });
    }

    function discoveryPanelSetup(discoveryInfoParam) {
        if (discoveryInfoParam) {
            var discoveryInfo = JSON.parse(discoveryInfoParam)
            var newDiscoverabilityPanel = openDiscoverability(discoveryInfo);


            //Event bindings
            //Close new panel if launcher button is clicked. Closing is handled in minimize event, since accessing iframe gives cors error.

            //Show bot
            var continueChatButton = document.getElementsByClassName('continuechatting')[0];
            if (continueChatButton) {
                continueChatButton.addEventListener('click', function () {
                    closeOverlay(newDiscoverabilityPanel);
                    astuteBotMessenger.sendEvent({ index: 0 }, { type: 'startConversation', initialUserMessage: { type: 'text', content: { speech: discoveryInfo.example, postback: "" } } });
                });
            }
        }
    }

    function openDiscoverability(discoveryInfo) {
        var poweredByHeight = 40;
        //Get styles
        var originalPanel = getFrameContainer('Panel');
        var panelStyle = originalPanel.style;
        var messageStyle = _options.runtime.messenger.settings;
        var textColor = isTooLightYIQ(_options.runtime.messenger.settings.colors.primary) ? '#303030' : '#ffffff';
        var secondaryColor = adjustColor(_options.runtime.messenger.settings.colors.primary, .1)

        //Create main container
        var discoveryPanel = document.createElement('div');
        discoveryPanel.className = 'DiscoverabilityContainer MessengerPanel';
        discoveryPanel.style.marginLeft = "5px";

        //Create content label and add responses
        var discoveryContent = document.createElement('div');
        discoveryContent.className = 'DiscoverabilityContent nano canvas';
        discoveryContent.style.overflowY = "auto";
        //Subtract margin top/bottom(30) and button height/margin(60)
        discoveryContent.style.height = messageStyle.dimensions.messengerHeight - messageStyle.dimensions.titleHeight + messageStyle.dimensions.messengerBorderRadius - poweredByHeight - 30 - 60;
        discoveryContent.style.margin = "10px";
        discoveryContent.style.marginTop = "20px";
        discoveryContent.innerHTML = '<span>' + discoveryInfo.label + '</span><hr/>';
        discoveryInfo.responses.forEach(response => {
            discoveryContent.innerHTML += "<div style=\"word-break:break-all;\">" + response + "</div>"
        });

        //Create continue conversation button
        var buttonContainer = document.createElement('div');
        buttonContainer.style.padding = "0px 12px 12px 12px";
        var switchToMessengerBtn = document.createElement('button');
        switchToMessengerBtn.className = 'canvas_button btn btn-flat btn-primary continuechatting';
        var textContainer = document.createElement('div');
        textContainer.innerHTML = (messageStyle.general.continueConversationLabel != null ? messageStyle.general.continueConversationLabel : "Continue to Conversation");
        switchToMessengerBtn.appendChild(textContainer);

        switchToMessengerBtn.style.backgroundColor = _options.runtime.messenger.settings.colors.primary;
        switchToMessengerBtn.style.color = textColor;
        switchToMessengerBtn.style.borderRadius = "8px";
        switchToMessengerBtn.style.height = "48px";
        switchToMessengerBtn.style.fontSize = "14px";
        switchToMessengerBtn.style.fontWeight = "700";
        switchToMessengerBtn.style.width = "100%";
        switchToMessengerBtn.style.border = "none";
        switchToMessengerBtn.addEventListener('mouseenter'});
        switchToMessengerBtn.addEventListener('mouseleave', e => {
            switchToMessengerBtn.style.background = _options.runtime.messenger.settings.colors.primary;
        });
        buttonContainer.appendChild(switchToMessengerBtn);
        //Build element

        discoveryPanel.append(discoveryContent);
        discoveryPanel.append(buttonContainer);

        discoveryPanel.style.cssText = document.defaultView.getComputedStyle(originalPanel, "").cssText;

        //Style element
        discoveryPanel.style = panelStyle.cssText;
        discoveryPanel.style.boxShadow = '';
        discoveryPanel.style.textAlign = 'center';
        var botVal = parseInt(discoveryPanel.style.bottom, 10);
        discoveryPanel.style.bottom = botVal /*+ messageStyle.dimensions.messengerBorderRadius*/ + poweredByHeight + "px";
        discoveryPanel.style.background = 'linear-gradient(to bottom, #ffffff 97%, #f2f2f2)';
        discoveryPanel.style.height = messageStyle.dimensions.messengerHeight - messageStyle.dimensions.titleHeight + messageStyle.dimensions.messengerBorderRadius - poweredByHeight;
        document.body.appendChild(discoveryPanel);

        addDescriptionContent(discoveryInfo);

        return discoveryPanel;
    }

  }

    //styling
    function adjustColor(rgbcode, brightness) {
        // if color is very light, darken it instead of brightening it
        if (isTooLightYIQ(rgbcode)) {
            brightness = -brightness;
        }

        var r = parseInt(rgbcode.slice(1, 3), 16),
            g = parseInt(rgbcode.slice(3, 5), 16),
            b = parseInt(rgbcode.slice(5, 7), 16),
            HSL = rgbToHsl(r, g, b),
            RGB;

        var new_brightness = HSL[2] + brightness < 1 ? HSL[2] + brightness : HSL[2] - brightness;

        RGB = hslToRgb(HSL[0], HSL[1], new_brightness);
        var _rgbcode = '#'
            + convertToTwoDigitHexCodeFromDecimal(RGB[0])
            + convertToTwoDigitHexCodeFromDecimal(RGB[1])
            + convertToTwoDigitHexCodeFromDecimal(RGB[2]);

        return _rgbcode;
    }

    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l];
    }

    function hslToRgb(h, s, l) {
        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
          }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [r * 255, g * 255, b * 255];
    }

    function convertToTwoDigitHexCodeFromDecimal(decimal) {
        var code = Math.round(decimal).toString(16);

        (code.length > 1) || (code = '0' + code);
        return code;
    }

    function isTooLightYIQ(hexcolor) {
        var r = parseInt(hexcolor.substr(1, 2), 16);
        var g = parseInt(hexcolor.substr(3, 2), 16);
        var b = parseInt(hexcolor.substr(5, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return yiq >= 128;
    }

    var _jsonPageMarkup = {
        "@context": "http://www.schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    function addDescriptionContent(data) {
        //Meta tag
        var link = document.createElement('meta');
        link.setAttribute('name', 'description');
        link.content = data.label;
        document.getElementsByTagName('head')[0].appendChild(link);

        //JSON Markup
        data.responses.forEach(response => {
            var questionEntry = {
                "@type": "Question",
                "name": data.label,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": response
                }
            }
            _jsonPageMarkup.mainEntity.push(questionEntry);
        });
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(_jsonPageMarkup);
        document.head.appendChild(script);

        const canonicalLink = document.createElement('LINK');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', window.location.href);
        document.head.appendChild(canonicalLink);

        //document.getElementById('dynamicJSONLD').innerHTML = JSON.stringify(_jsonPageMarkup);
    }
    

    function getUrlVars(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    }


    astuteBotMessengerLauncher.init();
   
}());
