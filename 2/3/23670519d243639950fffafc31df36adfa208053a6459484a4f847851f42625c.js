/**
 * FrameBridge object stays as a communication handler between Nuance Bootstrap in the parent page and everything within the sand boxed iframe
 * @typedef FrameBridge
 */

var FrameBridge = function () {
    /**
     * site id retrieved from window
     * @type {string}
     */
    var siteID = window.name;

    /**
     * parent page set unique ID for iframe communication
     * @type {string}
     */
    var UUID = getParameterByName("UUID", document.URL);
    var sourceWin;
    var cssName = "chatui";
    const configName = "uiconfig.json";


    window.v3LanderConfig = {};
    var popoutWindow = null;
    var openerWindow = null;
    var uiConfig;

    if (window.parent.opener) {        
        // popout will always contain siteID or else consider it as new window
        const paramSiteID = getParameterByName("siteID", document.URL);
        if (paramSiteID) {
            setOpenerWindow();
            if(openerWindow) {
                siteID = paramSiteID;
                uiConfig = openerWindow.FrameBridge.getUIConfig();
            }
        }
    }

    var tagScriptPath = "/chatskins/launch/inqChatLaunch" + siteID + ".js?chatVersion=sdk";

    var themeObj;

    /**
     * In WebSDK solution persistent chat window will look for the sandboxed iframe as its opener as both shares the same page URL
     * @return {Window | null}
     */
    function setOpenerWindow() {
        var frames = window.parent.opener.frames;
        if (frames.length > 0) {
            for (var fi = 0; fi < frames.length; fi++) {
                try {
                    if (typeof frames[fi].FrameBridge != "undefined") {
                        openerWindow = frames[fi];
                        openerWindow.FrameBridge.setPopoutWindow(window);
                    }
                } catch (e) {

                }
            }

        }


    }

    /**
     * Retrieves the query parameter
     * @param {string} name
     * @param {string} url
     * @return {string|null}
     */
    
    /**
     * Listens to message event from parent window (Nuance Bootstrap)
     */
    
    /**
     * inject the page data sends from Nuance Bootstrap to sandboxed iframe
     * @param {object} obj
     */
    function injectPageDataIfAny(obj) {
        if (obj) {
            Object.keys(obj).forEach(;
        }

    }

    /**
     * insert the css from the nuance theme folder
     * @param {string} path
     */
    function injectStyleSheet(path, filename) {
        var ss = document.styleSheets;
        for (var i = 0, max = ss.length; i < max; i++) {
            if (ss[i].href && ss[i].href.indexOf(filename) !== -1)
                return;
        }

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.type = 'text/css';
        link.href = [path, filename, ".css"].join("");
        document.head.appendChild(link);
    }

    /**
     * inserts the given script src to the dom
     * @param {string} src
     */
    function loadScript(src) {
        var script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }

    /**
     * Retrieve the json ui config for the given theme id
     * @param {string} path
     * @param {function} cb
     */
    
    function getCIAppInstance() {
        var app = window.messagingApp;
        if (app) {
            return app.getCIAppInstance();
        }
        //return window.ciAPPInstance;
    }

    /**
     * Re initialize the ciapp instance so that variables are initialized with new values,
     * This requirement arises when the C2C button is clicked for the second time and any subsequent clicks thereafter.
     */
    function reInitializeCI() {
        var app = window.messagingApp;
        if (app.ciAppInstance) {
            app.getCIAppInstance().onReinitFrame(FrameBridge);
        }
    }

    function log(msg) {
        if (window.Inq) {
            Inq.log("FB:" + msg);
        }
    }

    /**
     * Action request from Bootstrap file is send to appropriate API for processing
     * @param {Message} e
     */

    function bootstrapMSGReceiver(e) {
        try {

            sourceWin = e.source;

            if (sourceWin == window.parent) {
                var data = JSON.parse(e.data);
                injectPageDataIfAny(data.brData);
                log(data.command);
                switch (data.command) {
                    case "StartLoading":
                        if (data.info) {
                            uiConfig = data.info;
                        }
                        if (InqRegistry) {
                            InqRegistry.listeners.forEach(function (listenerName, index) {
                                InqRegistry.listeners[index] = {}
                                InqRegistry.listeners[index][listenerName] = inqRegistryEventHandler.bind(null, listenerName)
                            })
                        }
                        loadScript(tagScriptPath);
                        break;
                    case "LAUNCH_CHAT_RULEID":
                        if (data.info) {
                            FrameBridge.Inq.launchChatNowByPageID(data.info);
                        }
                        break;
                    case "LAUNCH_CHAT_RULENAME":
                        if (data.info) {
                            FrameBridge.Inq.launchChatNow(data.info);
                        }
                        break;
                    case "BLOCK_CHAT_SESSION":
                        FrameBridge.Inq.setChatSuppressedForSession();
                        break;
                    case "REINIT_CHAT":
                        if (data.info) {
                            FrameBridge.Inq.reinitChat(data.info.pageID, data.info.data);
                        }
                        break;
                    case "CUSTOM_EVENT":
                        if (data.info) {
                            FrameBridge.Inq.fireCustomEvent(data.info.eventName, data.info.data);
                        }
                        break;
                    case "SEND_AUTOMATON_MSG":
                        if (data.info) {
                            FrameBridge.Inq.sendAutomatonMessage(data.info.msgType, data.info.msg);
                        }
                        break;
                    case "CLOSE_CHAT":
                        Inq.CHM.closeChat();
                        break;

                    case "GET_CHAT_ID":
                        bootstrapMSGSender(new Message("GET_CHAT_ID", FrameBridge.Inq.API.get("engagementId")));
                        break;
                    case "IS_INITIALIZED":
                        bootstrapMSGSender(new Message("IS_INITIALIZED", FrameBridge.Inq.isInqInitialized()));
                        break;
                    case "AD_BLOCKER_DETECTED":
                        Inq.CHM.setAdblockOn();
                        break;
                    case "DYNAMIC_API_REF": {
                        var osa = String(data.info).split(".");
                        var frameObj = FrameBridge;
                        for (var idx = 0; idx < osa.length; idx++) {
                            var token = osa[idx];
                            if (idx === (osa.length - 1)) {

                                bootstrapMSGSender(new Message("DYNAMIC_API_REF", frameObj[token]()));
                                break;
                            }

                            frameObj = frameObj[token];

                        }
                    }
                        break;
                    case "NEW_PAGE_DATA":
                        FrameBridge.Inq.fireCustomEvent("onNewPageDataEvent", data.brData);
                        break;
                    case "EVENT_GENERATED":
                        var r;
                        if (typeof Inq.BRM.getRuleById !== "undefined") {
                            r = Inq.BRM.getRuleById(data.info.ruleId);
                        } else {
                            //using the obfuscated name, since it is in the cijsf project adding this name temproraly until name is fixed in cijsf code
                            r = Inq.BRM.rb41(data.info.ruleId);
                        }
                        if (r) {
                            r.fireRule(data.info.evtObj, data.info.evtData.delayInMS, data.info.evtData.onlyInFocus);
                        }
                        break;
                    case "C2C_ACTION":

                        FrameBridge.Inq.SDK.onC2CClicked(parseInt(data.info), function (chatData) {
                            bootstrapMSGSender(new Message("C2C_ACTION", chatData));
                        });

                        break;
                    case "CLOSE_CIAPI_CHAT":
                        if (popoutWindow) {
                            popoutWindow.FrameBridge.Inq.SDK.closeChat();
                            setTimeout( 100);

                        } else {
                            FrameBridge.Inq.SDK.closeChat();
                        }
                        //handleCIAPPclose();
                        break;
                    case "SEND_CIAPI_MESSAGE":
                        FrameBridge.Inq.SDK.sendMessage(data.info);
                        break;
                    case "SEND_CIAPI_ACTIVITY":
                        FrameBridge.Inq.SDK.sendActivityMessage(data.info);
                        break;
                    case "REQUEST_CIAPI_TRANSCRIPT":
                        FrameBridge.Inq.SDK.requestEmailTranscript(data.info);
                        break;
                    case "CIAPI_CHAT_DISPLAYED":
                        FrameBridge.Inq.SDK.chatDisplayed({
                            "customerName": data.info && data.info.customerName,
                            "openerScripts": data.info && data.info.openerScripts,
                            "defaultAgentAlias": data.info && data.info.defaultAgentAlias,
                            "previousMessagesCb": function (msgs) {
                                bootstrapMSGSender(new Message("CIAPI_CHAT_PREVIOUS_MSGS", msgs));
                            },
                            "disconnectCb": function () {
                                bootstrapMSGSender(new Message("CIAPI_CHAT_DISCONNECTED"));
                            },
                            "reConnectCb": function () {
                                bootstrapMSGSender(new Message("CIAPI_CHAT_RECONNECTED"));
                            },
                            "failedCb": function () {
                                bootstrapMSGSender(new Message("CIAPI_CHAT_FAILED"));
                            }
                        });
                        break;
                    case "CIAPI_ENGAGED_CHAT":
                        FrameBridge.Inq.SDK.engageChat(data.info, function (res) {
                            bootstrapMSGSender(new Message("CIAPI_ENGAGED_CHAT", res));
                        });
                        break;
                    case "GET_CIAPI_MESSAGES":
                        FrameBridge.Inq.SDK.getMessages(function (msg) {
                            bootstrapMSGSender(new Message("GET_CIAPI_MESSAGES", msg));
                        });

                        break;
                    case "GET_CIAPI_CHAT_STATE":
                        bootstrapMSGSender(new Message("GET_CIAPI_CHAT_STATE", FrameBridge.Inq.SDK.isChatInProgress()));
                        break;
                    case "GET_CIAPI_OPENERS":
                        FrameBridge.Inq.SDK.getOpenerScripts(function (msg) {
                            bootstrapMSGSender(new Message("GET_CIAPI_OPENERS", msg));
                        }, data.info);
                        break;
                    case "SEND_CIAPI_DATAPASS":
                        FrameBridge.Inq.SDK.sendDataPass(data.info);
                        break;
                    case "SEND_CIAPI_VA_LINK":
                        FrameBridge.Inq.SDK.sendVAMessage(data.info);
                        break;
                    case "SEND_CIAPI_RICH_MSG":
                        FrameBridge.Inq.SDK.sendRichContentMessage(data.info.text, data.info.data);
                        break;
                    case "GET_CIAPI_PREV_CONV":
                        FrameBridge.Inq.SDK.getPreviousAsyncTranscript(function (msgs) {
                            bootstrapMSGSender(new Message("GET_CIAPI_PREV_CONV", msgs));
                        });
                        break;
                    case "GET_CIAPI_PREV_CONV_STATE":
                        bootstrapMSGSender(new Message("GET_CIAPI_PREV_CONV_STATE", FrameBridge.Inq.SDK.isLastConversationActive()));
                        break;
                    case "GET_CIAPI_ASYNC_UNREAD":
                        FrameBridge.Inq.SDK.getAsyncUnReadMsgCount(data.info, function (msgs) {
                            bootstrapMSGSender(new Message("GET_CIAPI_ASYNC_UNREAD", msgs));
                        });
                        break;

                    case "UPDATE_CHAT_POSITION":
                        var oPos = {};
                        oPos[RIGHT] = data.info.r;
                        oPos[BOTTOM] = data.info.b;
                        //oPos[WIDTH] = data.info.width;
                        //oPos[HEIGHT] = data.info.height;

                        com.inq.flash.client.control.PersistenceManager.SetValues(oPos);


                        break;

                    case "FRAME_RESTORED":
                        if (getCIAppInstance()) {
                            getCIAppInstance().onResumeFrame();
                        }
                        break;

                    case "IS_MINIMIZED":
                        bootstrapMSGSender(new Message("IS_MINIMIZED", FrameBridge.Inq.SDK.checkIfMinimized()));
                        break;

                    case "UPDATE_LOGO":
                        if (getCIAppInstance()) {
                            getCIAppInstance().updateLogo(data.info);
                        }
                        break;

                    case "UPDATE_TITLE":
                        if (getCIAppInstance()) {
                            getCIAppInstance().updateTitle(data.info);
                        }
                        break;

                    case "ACTIVE_WINDOW": {
                        setActiveWindowId();
                    }
                        break;

                    case "AUTO_ENGAGE": {
                        if (getCIAppInstance()) {
                            getCIAppInstance().autoEngage(data.info);
                        }
                    }
                        break;

                    case "SET_PER_WIN": {
                        setOpenerWindow();
                    }
                        break;

                    case "KEYBOARD_OPEN": {
                        if (getCIAppInstance()) {
                            getCIAppInstance().scrollTranscriptToBottom();
                        }
                    }
                        break;
                    case "FULL_SCREEN": {
                        if (getCIAppInstance()) {
                            getCIAppInstance().toggleFullScreen(data.info);
                        }
                    }
                       break;
                    case "MINIMIZE_FRAME": {
                        if (getCIAppInstance()) {
                            getCIAppInstance().minimize();
                        }
                    }
                        break;
                    case "READY_FOCUS":
                        if (getCIAppInstance()) {
                            // Override or default ready_focus element
                            data.info = data.info || "footerArea.input";
                            getCIAppInstance().setFrameBridgeState("readyFocus", data.info, true);
                        }
                        break;
                    case "CLOSE_WITH_CONFIRM":
                        if (getCIAppInstance()) {
                            getCIAppInstance().closeChat();
                        }
                        break;
                    case "IPC_FRAME_LOADED":
                        Inq.LoadM.bootstrapFrameLoaded(data.info.key);
                        break;   
                    case "IPC_COOKIE_DATA":
                        Inq.LoadM.constructor.handleResponse({
                            data:data.info.cmd,
                            origin: data.info.origin
                        });
                        break;
                }

                e.stopImmediatePropagation();
            } else if (sourceWin == window.opener) {
                var data = JSON.parse(e.data);
                switch (data.command) {
                    case "SET_PER_WIN": {
                        setOpenerWindow();
                    }
                        break;
                }
            }


        } catch (e) {
            log("bootstrapMSGReceiver error: " + e.message);
        }

    }

    /**
     * Listens to the events from Chat Framework and then send it to Bootstrap
     * @param {string} listenerName
     * @param {object} eventData
     */
    function inqRegistryEventHandler(listenerName, eventData) {
        var data = {};
        switch (listenerName) {
            case "onRuleSatisfied":
            case "onServiceEngaged":
            case "onServiceInteracted":
            case "onExposureQualified":
                data["ruleID"] = eventData.rule.getID();
                break;
            case "onServiceInvitation":
            case "onServiceMissed":
                data["ruleID"] = eventData.rule.getID();
                data["serviceType"] = eventData.serviceType;
                break;
            case "onC2CDisplayed":
            case "onC2CReadyForSDK": {

                data["c2cIdx"] = eventData.c2c.idx;
                data["displayState"] = eventData.c2c.newState;

                data["ruleID"] = eventData.rule.getID();
                data["isAsyncEngagement"] = eventData.rule.asyncChat();

                if (eventData.isFocus === true) {
                    data["reDisplay"] = true;
                }
                data["lang"] = eventData.c2c.c2cSpec.chatSpec.lang;
                data["abs"] = eventData.c2c.c2cSpec.abs;
                data["launchable"] = eventData.c2c.launchable;
                data["image"] = eventData.c2c.image;
                data["opID"] = eventData.c2c.c2cSpec.chatSpec.oId;
                data.c2cTheme = eventData.c2c.c2cSpec.c2cTheme;
                data.mediaURL = Inq.urls.mediaSiteURL;
                data.adaCompliant = eventData.c2c.adaCompliant;
                data.chatType = eventData.c2c.chatType;
                data.adaAndroidC2cSupportDomains = eventData.c2c.adaAndroidC2cSupportDomains;
                data.deviceType = Inq.FlashPeer.getDeviceType();
                data.pageElementID = eventData.c2c.pageElementID = (!!eventData.c2c.c2cSpec.peId ? eventData.c2c.c2cSpec.peId : Inq.C2C.c2CPageElementIDs[eventData.c2c.idx]);
                data.ignorePageScrollingOnC2CFocus = eventData.rule.ignorePageScrollingOnC2CFocus;
                data.isPersistentChat = eventData.c2c.c2p;
                if (data.isPersistentChat) {
                    data.chatTheme = eventData.c2c.c2cSpec.chatSpec.chatTheme;
                }
                data.minimized =  FrameBridge.Inq.SDK.checkIfMinimized();
            }
                break;
            case "onC2CStateChanged":
                data["c2cIdx"] = eventData.c2c.idx;
                data["oldState"] = eventData.oldState;
                data["newState"] = eventData.newState;
                data["ruleID"] = eventData.rule.getID();
                data["launchable"] = eventData.c2c.launchable;
                data["chatVisible"] = Inq.CHM && Inq.CHM.chat && Inq.CHM.chat._isVisible;
                data.deviceType = Inq.FlashPeer.getDeviceType();
                break;
            case "onC2CClicked":
                data["ruleID"] = eventData.rule.getID();
                data["serviceType"] = eventData.serviceType;
                data["c2cIdx"] = eventData.c2c.idx;
                data.pageElementID = eventData.c2c.pageElementID;
                data.deviceType = Inq.FlashPeer.getDeviceType();
                break;

            case "onChatRequested":
                data["ruleID"] = eventData.rule.id;
                data["chatType"] = eventData.chatType;
                break;
            case "onChatLaunched":
                data["engageParams"] = Inq.FlashPeer.getEngageParams({});
                data.deviceType = Inq.FlashPeer.getDeviceType();
                break;
            case "onChatShown":
                data["ruleID"] = eventData.rule.getID();
                data.chatID = eventData.chatID;
                data.customerMsgCount = eventData.cMsgCnt;
                data.agentMsgCount = eventData.aMsgCnt;
                data.ruleName = eventData.rule.getName();
                break;
            case "onChatClosed":
                handleCIAPPclose();
                data = eventData;
                break;
            default:
                data = eventData;
        }
        bootstrapMSGSender(new Message("CHAT_EVENT", {"name": listenerName, data: data}));
    }


    /**
     * Holds the message command and data associated with it
     * @param {string} command
     * @param {object|string} info
     * @constructor
     */
    
    Message.prototype.toJSON = function () {
        return {
            "command": this.command,
            "info": this.info,
            "UUID": UUID
        }
    }

    /**
     * send a post message to boot strap
     * @param {object} msObj
     */
    

    if (openerWindow) {
        loadScript(tagScriptPath);
    }

    function handleCIAPPclose() {
        if (getCIAppInstance()) {
            getCIAppInstance().onDestroyFrame();
        }
    }

    function setActiveWindowId() {
        if (Application.application.isConnected()) {
            var fp = com.inq.flash.client.control.FlashPeer;
            if (fp.isMultiChatSupported()) {
                fp.setActiveWindowId();
            }
        }
    };

    return {
        init: 
        getUIConfig: 
        getOpener: function () {
            try {
                if (openerWindow.closed) {
                    setOpenerWindow();
                }

            } catch (e) {
                //window closed
            }

            return openerWindow;
        },

        reguestPageData: function (args) {
            if (Array.isArray(args)) {
                bootstrapMSGSender(new Message("FETCH_PAGE_DATA", args));
            }
        },

        executeFunctionByName: function (funcName, args) {
            bootstrapMSGSender(new Message("EXECUTE_AND_RETURN_FUNC", {
                name: funcName,
                params: Array.isArray(args) ? args : []
            }));
        },

        postFunctionByName: function (funcName, args) {
            bootstrapMSGSender(new Message("CALL_OUT_FUNC", {name: funcName, params: Array.isArray(args) ? args : []}));
        },

        requestDomData: function (args) {
            if (Array.isArray(args)) {
                bootstrapMSGSender(new Message("FETCH_DOM_DATA", args));
            }
        },

        registerDOMEvent: function (trigObj, ruleID) {
            bootstrapMSGSender(new Message("REGISTER_DOM_EVENT", {eventData: trigObj, ruleId: ruleID}));
        },

        postMessageToBootStrap: 

        pushPersistentWindowURL: function (frameSrc, idx, theme) {
            bootstrapMSGSender(new Message("PERSISTENT_URL_ACTION", {src: frameSrc, c2cIdx: idx, theme: theme}));
        },

        closePeristentWindow: function (idx) {
            bootstrapMSGSender(new Message("PERSISTENT_WINDOW_CLOSE", idx));
        },
        positionMessagingWindow: function (pcsID) {

            var theme = themeObj = FrameBridge.Inq.SDK.getThemeInfo();
            
            var path = theme.imagePath;
            injectStyleSheet(path, cssName);
            loadUIConfig(theme.skinPath,  

            function invoke(data) {
                if (data) {
                    uiConfig = data;
                    if (data.topBarConfig && data.topBarConfig.topBarSettings) {
                        var ts = data.topBarConfig.topBarSettings;
                        theme.adjustDragBarHeight = ts.adjustDragBarHeight;
                        theme.adjustDragBarWidth = ts.adjustDragBarWidth;
                        theme.adjustDragBarLeft = ts.adjustDragBarLeft;
                    }
                    theme.dragMode = data.appConfigProps.dragMode;
                }
                if (pcsID) {
                    uiConfig.pcsID = pcsID;
                }
                if (uiConfig.richContentCSSStyle) {
                    injectStyleSheet(path, uiConfig.richContentCSSStyle);
                }
                reInitializeCI();
                
                if (getCIAppInstance().checkAndMinimizeOnNewPageLoad(theme.minimized)) {
                    theme.minimized = {
                        "state": true,
                        "count": 0,
                    };
                }

                uiConfig.skinPath = theme.skinPath;
                getCIAppInstance().onCreateFrame();
                bootstrapMSGSender(new Message("POSITION_IFRAME", theme));
            }

        },
        minimizeFrame: function () {
            log("Minimize Bootstrap");
            bootstrapMSGSender(new Message("MINIMIZE_WINDOW"));
        },
        pushToFrameSet: function (_sUrl, _sTarget) {
            bootstrapMSGSender(new Message("DEEPLINK_COMMAND", {
                url: _sUrl,
                target: _sTarget
            }));
        },

        messageOnMinimized: 
        setPopoutWindow: 
        onVirtualKeyboardOpen: function () {
            bootstrapMSGSender(new Message("VIRTUAL_KEYBOARD_OPEN"));
        },
        onVirtualKeyboardHidden: 
        getSDKInstance: 
        addDrag: 
        isFullScreen: function() {
            return themeObj.deviceType === "Phone";
        },
        isTablet:     }
}();

FrameBridge.init();
