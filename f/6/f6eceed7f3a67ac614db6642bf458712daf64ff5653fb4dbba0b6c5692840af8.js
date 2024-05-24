"use strict";
var __awaiter = (this && this.__awaiter) || 
var __generator = (this && this.__generator) || 
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var BootstrapperConstants = (function () {
                function BootstrapperConstants() {
                }
                BootstrapperConstants.Script = "script";
                BootstrapperConstants.Scripts = "/scripts/";
                BootstrapperConstants.WebChatVersionScripts = "/WebChatControl/scripts/";
                BootstrapperConstants.CustomizationVersionScripts = "/v2scripts/";
                BootstrapperConstants.Lib = "/lib/";
                BootstrapperConstants.Head = "head";
                BootstrapperConstants.Body = "body";
                BootstrapperConstants.Meta = "meta";
                BootstrapperConstants.Viewport = "viewport";
                BootstrapperConstants.ViewportMetaContent = "width=device-width, initial-scale=1.0, maximum-scale=1";
                BootstrapperConstants.FormatDetection = "format-detection";
                BootstrapperConstants.FormatDetectionMetaContent = "telephone=no";
                BootstrapperConstants.HostName = "hostname";
                BootstrapperConstants.SRC = "src";
                BootstrapperConstants.ID = "id";
                BootstrapperConstants.Html = "html";
                BootstrapperConstants.Iframe = "iframe";
                BootstrapperConstants.ALLOW = "allow";
                BootstrapperConstants.AllowFullScreen = "allowfullscreen";
                BootstrapperConstants.WebKitAllowFullScreen = "webkitallowfullscreen";
                BootstrapperConstants.MozillaAllowFullScreen = "mozallowfullscreen";
                BootstrapperConstants.DataLcwVersion = "data-lcw-version";
                BootstrapperConstants.ScriptSelector = "script#";
                BootstrapperConstants.MicrosoftOmnichannelLCWidget = "Microsoft_Omnichannel_LCWidget";
                BootstrapperConstants.JavascriptFlag = "text/javascript";
                BootstrapperConstants.InitializerScriptDownloadTriggeredFlag = "isOmniChannelBootstrapperWebChatDownloadTriggered";
                BootstrapperConstants.InitializerScriptPath = "LiveChatWidgetScripts.min.js";
                BootstrapperConstants.LibsScriptPath = "LiveChatWidgetLibs.min.js";
                BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId = "Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window";
                BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageStyleId = "Microsoft_Omnichannel_LCWidget_Chat_Iframe_Style";
                BootstrapperConstants.AllowValues = "microphone *; camera *; geolocation *; autoplay;";
                BootstrapperConstants.DataAppId = "data-app-id";
                BootstrapperConstants.DataOrgUrl = "data-org-url";
                BootstrapperConstants.DataOrgId = "data-org-id";
                BootstrapperConstants.ReconnectId = "oc.reconnectid";
                BootstrapperConstants.DisableTelemetry = "data-disable-telemetry";
                BootstrapperConstants.OpenChatInPopOutWindow = "data-open-in-window";
                BootstrapperConstants.SuggestedActionLayout = "data-suggested-action-layout";
                BootstrapperConstants.HideMinimizeButton = "data-hide-minimize-button";
                BootstrapperConstants.EnableCustomCloseButtonText = "data-custom-close-button-text";
                BootstrapperConstants.URLDelimiter = "&";
                BootstrapperConstants.EndURLSeparator = "?";
                BootstrapperConstants.ChatHTMLPath = "/htmls/chat.html";
                BootstrapperConstants.Equal = "=";
                BootstrapperConstants.Class = "class";
                BootstrapperConstants.Style = "style";
                BootstrapperConstants.Link = "link";
                BootstrapperConstants.Href = "href";
                BootstrapperConstants.Rel = "rel";
                BootstrapperConstants.StyleSheet = "stylesheet";
                BootstrapperConstants.Type = "type";
                BootstrapperConstants.TextCss = "text/css";
                BootstrapperConstants.Title = "title";
                BootstrapperConstants.LiveChatWidgetHideChatButton = "data-hide-chat-button";
                BootstrapperConstants.RenderOnMobileDevice = "data-render-mobile";
                BootstrapperConstants.WidgetFontFamily = "data-font-family-override";
                BootstrapperConstants.WidgetThemeColor = "data-color-override";
                BootstrapperConstants.SDK = "SDK";
                BootstrapperConstants.Return = "return";
                BootstrapperConstants.SPACE = " ";
                BootstrapperConstants.Microsoft = "Microsoft";
                BootstrapperConstants.Dynamic365 = "Dynamic365";
                BootstrapperConstants.Portal = "Portal";
                BootstrapperConstants.User = "User";
                BootstrapperConstants.ScriptBootstrapperPath = "scripts/LiveChatBootstrapper.js";
                BootstrapperConstants.FrameStyleCssPath = "WebChatControl/styles/LiveChatWidgetFrame.css";
                BootstrapperConstants.FrameAutofillStyleCssPath = "WebChatControl/styles/LCWAutofillFrame.min.css";
                BootstrapperConstants.EnableAutofill = "data-enable-lcw-autofill";
                BootstrapperConstants.BypassCache = "data-bypass-cache";
                BootstrapperConstants.PopoutTarget = "Omnichannel Chat";
                BootstrapperConstants.PopoutTab = "popOutTab";
                BootstrapperConstants.Undefined = 'undefined';
                BootstrapperConstants.ContactId = "contactId";
                BootstrapperConstants.EnableNewLineMarkdownSupport = "data-enable-newline";
                BootstrapperConstants.EnableMakrdownMessageFormatting = "data-enable-markdown";
                BootstrapperConstants.EnableSSOMagicCode = "data-enable-sso-magic-code";
                BootstrapperConstants.EnableDisconnectAlert = "data-enable-disconnect-alert";
                BootstrapperConstants.HyperlinkTextOverride = "data-hyperlink-text-override";
                BootstrapperConstants.LcwFcsDetailsPath = "/livechatconnector/v2/lcwfcsdetails/";
                BootstrapperConstants.v2CacheKey = "v2-";
                BootstrapperConstants.pacsCacheKey = "pacs-";
                BootstrapperConstants.pacsUrlCacheKey = "pacsurl-";
                BootstrapperConstants.v2CacheKeyExpiration = 24 * 60 * 60;
                BootstrapperConstants.pacsCacheKeyExpiration = 24 * 60 * 60;
                BootstrapperConstants.VIPCustomerOrgIds = [
                    "4a1f903f-8d71-4bdb-b30d-acdda889ea97",
                    "7f56816c-4499-42b2-9df6-fd5472fe3b42",
                    "3b64663b-f52f-407f-b93a-e5c5d0ccda12",
                    "cc2c3b70-5d2c-42d7-bbf9-68ff3b3a6b2d",
                    "4aee2179-7bd9-ed11-aece-000d3a323213",
                    "e0a2c218-3f41-4a25-9d27-d46fad5f7403",
                    "755b89f5-a567-47f4-b48f-6ba517937172",
                    "89de6b52-b170-43a3-99dd-9e6b788e12be",
                    "cc2a190d-824c-4a3e-9688-057769101233",
                    "5e6eb5b2-fe57-4b0c-a55d-392d0141c62e",
                    "d76ce7ee-a2ca-4e94-b0c8-b9af8529d793",
                    "e2de1d8e-c4ef-467d-be34-ad65773c0992",
                    "48669b43-bf94-42ae-b66d-e2b227244cc1",
                    "a8c967f2-d0c0-4bfc-a40f-6c7f603fb3b8",
                    "2580c9a4-dc2d-4851-9749-68a4c6bbf14f",
                    "660df3dd-8a31-48a3-8bf0-b921fd1ad6cd"
                ];
                return BootstrapperConstants;
            }());
            LiveChatWidget.BootstrapperConstants = BootstrapperConstants;
            var StyleConstants = (function () {
                function StyleConstants() {
                }
                StyleConstants.Transparent = "transparent";
                StyleConstants.BackgroundColor = "background-color";
                StyleConstants.FrameBorder = "frameBorder";
                StyleConstants.AllowTransparency = "allowTransparency";
                StyleConstants.BorderWidth = "border-width";
                StyleConstants.ZIndex = "z-index";
                StyleConstants.Position = "position";
                StyleConstants.Right = "right";
                StyleConstants.Bottom = "bottom";
                StyleConstants.None = "none";
                return StyleConstants;
            }());
            LiveChatWidget.StyleConstants = StyleConstants;
            var DefaultCssValues = ());
            LiveChatWidget.DefaultCssValues = DefaultCssValues;
            var EventConstants = (function () {
                function EventConstants() {
                }
                EventConstants.message = "message";
                EventConstants.keydown = "keydown";
                EventConstants.setContextProvider = "setContextProvider";
                EventConstants.getContextProvider = "getContextProvider";
                EventConstants.removeContextProvider = "removeContextProvider";
                EventConstants.setAuthTokenProvider = "setAuthTokenProvider";
                EventConstants.setAuthCodeProvider = "setAuthCodeProvider";
                EventConstants.getAuthTokenProvider = "getAuthTokenProvider";
                EventConstants.removeAuthTokenProvider = "removeAuthTokenProvider";
                EventConstants.getContactInfoRequest = "getContactInfoRequest";
                EventConstants.getContactInfoResponse = "getContactInfoResponse";
                EventConstants.LcwReady = "lcw:ready";
                EventConstants.getAgentAvailabilityFinished = "lcw:getAgentAvailability";
                EventConstants.LcwStartChat = "lcw:startChat";
                EventConstants.LcwCloseChat = "lcw:closeChat";
                EventConstants.lcwMinimizeChat = "lcw:onMinimize";
                EventConstants.lcwOnMaximize = "lcw:onMaximize";
                EventConstants.lcwOnClose = "lcw:onClose";
                EventConstants.lcwOnPopoutClose = "lcw:onPopoutClose";
                EventConstants.lcwOnMessageReceived = "lcw:onMessageReceived";
                EventConstants.lcwOnHistoryMessageReceived = "lcw:onHistoryMessageReceived";
                EventConstants.lcwOnPopoutMessageReceived = "lcw:onPopoutMessageReceived";
                EventConstants.lcwOnPopoutHistoryMessageReceived = "lcw:onPopoutHistoryMessageReceived";
                EventConstants.lcwOnMessageSent = "lcw:onMessageSent";
                EventConstants.lcwOnPopoutMessageSent = "lcw:onPopoutMessageSent";
                EventConstants.LcwThreadUpdate = "lcw:threadUpdate";
                EventConstants.LcwChatQueued = "lcw:chatQueued";
                EventConstants.LcwChatRetrieved = "lcw:chatRetrieved";
                EventConstants.LcwError = "lcw:error";
                EventConstants.lcwSignInCardReceived = "lcw:signInCardReceived";
                EventConstants.lcwSignInCardReceivedPopOut = "lcw:signInCardReceivedPopOut";
                EventConstants.startChat = "startChat";
                EventConstants.startPopoutChat = "startPopoutChat";
                EventConstants.startPopoutChatResponse = "startPopoutChatResponse";
                EventConstants.closePopoutChatMessage = "closePopoutChatMessage";
                EventConstants.closeChat = "closeChat";
                EventConstants.getAgentAvailability = "getAgentAvailability";
                EventConstants.startProactiveChat = "startProactiveChat";
                EventConstants.CustomEvent = "CustomEvent";
                EventConstants.LcwChangeTitle = "changeTitle";
                EventConstants.audioEnded = "ended";
                EventConstants.audioPlayError = "error";
                EventConstants.LogTelemetry = "logTelemetry";
                EventConstants.setBotAuthTokenProvider = "setBotAuthTokenProvider";
                EventConstants.setFallbackInfoProvider = "setFallbackInfoProvider";
                EventConstants.getFallbackInfoProvider = "getFallbackInfoProvider";
                return EventConstants;
            }());
            LiveChatWidget.EventConstants = EventConstants;
            var IFrameBootstrapperValues = (function () {
                function IFrameBootstrapperValues() {
                }
                IFrameBootstrapperValues.resizeMSLcwIframe = "resizeMSLcwIframe";
                IFrameBootstrapperValues.authTokenRequest = "authTokenRequest";
                IFrameBootstrapperValues.authTokenResponse = "authTokenResponse";
                IFrameBootstrapperValues.initContextParamsRequest = "initContextParamsRequest";
                IFrameBootstrapperValues.initContextParamsResponse = "initContextParamsResponse";
                IFrameBootstrapperValues.portalContactIdRequest = "portalContactIdRequest";
                IFrameBootstrapperValues.portalContactIdResponse = "portalContactIdResponse";
                IFrameBootstrapperValues.closePopoutChatMessage = "closePopoutChatMessage";
                IFrameBootstrapperValues.removeKeyboardEventHandler = "removeKeyboardEventHandler";
                IFrameBootstrapperValues.repositionMSLcwIframe = "repositionMSLcwIframe";
                IFrameBootstrapperValues.webChatPanel = "web_chat_panel";
                IFrameBootstrapperValues.ocAutofillFrame = "oc_autofill_iframe";
                IFrameBootstrapperValues.bottomLeft = "BottomLeft";
                IFrameBootstrapperValues.bottomRight = "BottomRight";
                IFrameBootstrapperValues.hideIframe = "hide_iframe";
                IFrameBootstrapperValues.proactiveChatPanel = "proactive_chat_panel";
                IFrameBootstrapperValues.startChatButton = "start_chat_button";
                IFrameBootstrapperValues.defaultClassName = [IFrameBootstrapperValues.webChatPanel, IFrameBootstrapperValues.hideIframe];
                IFrameBootstrapperValues.handleControlSlash = "handleControlSlash";
                IFrameBootstrapperValues.KEY_SLASH = 191;
                IFrameBootstrapperValues.iFrameTitle = "Microsoft Omnichannel Live Chat Widget";
                IFrameBootstrapperValues.inAppClassName = "inApp";
                IFrameBootstrapperValues.redirectPageRequest = "redirectPageRequest";
                IFrameBootstrapperValues.fallbackInfoProviderRequest = "fallbackInfoProviderRequest";
                IFrameBootstrapperValues.fallbackInfoProviderResponse = "fallbackInfoProviderResponse";
                return IFrameBootstrapperValues;
            }());
            LiveChatWidget.IFrameBootstrapperValues = IFrameBootstrapperValues;
            var BootstrapperTelemetryConstants = (function () {
                function BootstrapperTelemetryConstants() {
                }
                BootstrapperTelemetryConstants.IframeEventListenerError = "IframeEventListenerError";
                BootstrapperTelemetryConstants.AuthClientMethodException = "AuthClientMethodException";
                BootstrapperTelemetryConstants.StartChatMethodException = "StartChatMethodException";
                BootstrapperTelemetryConstants.CloseChatMethodException = "CloseChatMethodException";
                BootstrapperTelemetryConstants.StartProactiveChatMethodException = "StartProactiveChatMethodException";
                BootstrapperTelemetryConstants.SetContextProviderMethodException = "SetContextProviderMethodException";
                BootstrapperTelemetryConstants.SetAuthProviderMethodException = "SetAuthProviderMethodException";
                BootstrapperTelemetryConstants.RemoveContextProviderMethodException = "RemoveContextProviderMethodException";
                BootstrapperTelemetryConstants.RemoveAuthTokenProviderMethodException = "RemoveAuthTokenProviderMethodException";
                BootstrapperTelemetryConstants.GetAgentAvailability = "GetAgentAvailability";
                BootstrapperTelemetryConstants.SetBotAuthProviderMethodException = "SetBotAuthProviderMethodException";
                BootstrapperTelemetryConstants.SetFallbackInfoProviderMethodException = "SetFallbackInfoProviderMethodException";
                return BootstrapperTelemetryConstants;
            }());
            LiveChatWidget.BootstrapperTelemetryConstants = BootstrapperTelemetryConstants;
            var BootstrapperLogLevel;
            ((BootstrapperLogLevel = LiveChatWidget.BootstrapperLogLevel || (LiveChatWidget.BootstrapperLogLevel = {}));
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var _this = this;
            var ClientSdkDelegation = (function () {
                
                ClientSdkDelegation.getInstance = 
                ClientSdkDelegation.prototype.settingUpDelegation = function () {
                    if (!LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK]) {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK] = {};
                    }
                    this.setupStartChatFunc();
                    this.setupCloseChatFunc();
                    this.setupStartProactiveChatFunc();
                    this.initGetContextProviderFunc();
                    this.setupSetContextProviderFunc();
                    this.setupRemoveContextProviderFunc();
                    this.setupGetAgentAvailabilityFunc();
                    this.setupSetAuthTokenProviderFunc();
                    this.setupSetAuthCodeProviderFunc();
                    this.initGetAuthTokenProviderFunc();
                    this.setupRemoveAuthTokenProviderFunc();
                    this.setupSetBotAuthTokenProviderFunc();
                    this.setupSetFallbackInfoProviderFunc();
                    this.setupGetFallbackInfoProviderFunc();
                };
                ClientSdkDelegation.prototype.setupStartChatFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.startChat] = 
                    }
                    catch (e) {
                        console.error("Failed to setup startChat: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.StartChatMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupCloseChatFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.closeChat] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.closeChat
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup closeChat: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.CloseChatMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupGetAgentAvailabilityFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getAgentAvailability] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.getAgentAvailability
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup get Agent availability: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.GetAgentAvailability,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupStartProactiveChatFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.startProactiveChat] = function (notificationConfig, enablePreChat, options) {
                            if (enablePreChat === void 0) { enablePreChat = null; }
                            ClientSdkDelegation.startProactiveChat(LiveChatWidget.EventConstants.startProactiveChat, notificationConfig, enablePreChat, options);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup proactiveChat: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.StartProactiveChatMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.startChat = function (messageName, options) {
                    var message = {
                        messageName: messageName
                    };
                    var inNewWindow = false;
                    if (options != null) {
                        inNewWindow = options.inNewWindow;
                        message.inNewWindow = inNewWindow;
                    }
                    var shouldOpenInNewWindow = inNewWindow && inNewWindow == true;
                    if (!shouldOpenInNewWindow) {
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        return;
                    }
                    if (!LiveChatWidget.LiveChatBootstrapperWebChat.isLCWReady) {
                        return;
                    }
                    var shouldInitPopoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab] == null ||
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab] == undefined;
                    if (!shouldInitPopoutTab) {
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab].focus();
                        return;
                    }
                    var popOutTab = window.open('', LiveChatWidget.BootstrapperConstants.PopoutTarget, "location=no");
                    window[LiveChatWidget.BootstrapperConstants.PopoutTab] = popOutTab;
                    LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    window.addEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandler);
                };
                ClientSdkDelegation.startProactiveChat = function (messageName, notificationConfig, enablePreChat, options) {
                    if (enablePreChat === void 0) { enablePreChat = null; }
                    var message = {
                        messageName: messageName
                    };
                    if (notificationConfig) {
                        message.notificationConfig = notificationConfig;
                    }
                    if (enablePreChat) {
                        message.enablePreChat = enablePreChat;
                    }
                    var inNewWindow = false;
                    if (options != null) {
                        inNewWindow = options.inNewWindow;
                        message.inNewWindow = inNewWindow;
                    }
                    var shouldOpenInNewWindow = inNewWindow && inNewWindow == true;
                    if (!shouldOpenInNewWindow) {
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        return;
                    }
                    if (!LiveChatWidget.LiveChatBootstrapperWebChat.isLCWReady) {
                        return;
                    }
                    var shouldInitPopoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab] == null ||
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab] == undefined;
                    if (!shouldInitPopoutTab) {
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab].focus();
                        return;
                    }
                    LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    window.addEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandlerProactiveChat);
                };
                ClientSdkDelegation.prototype.setupSetContextProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setContextProvider] = function (customerFunction) {
                            var contextVariables = customerFunction();
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setContextProvider,
                                contextVariables: contextVariables
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider] = function () { return customerFunction; };
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setContextProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetContextProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupSetAuthTokenProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setAuthTokenProvider] = function (customerFunction) {
                            customerFunction(function (token) { ClientSdkDelegation.jwtToken = token; });
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setAuthTokenProvider,
                                jwtToken: ClientSdkDelegation.jwtToken,
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getAuthTokenProvider] = function () { return customerFunction; };
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setAuthTokenProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetAuthProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupSetAuthCodeProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setAuthCodeProvider] = function (customerFunction) {
                            customerFunction(function (code) { ClientSdkDelegation.authCode = code; });
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setAuthTokenProvider,
                                jwtToken: ClientSdkDelegation.authCode,
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setAuthCodeProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetAuthProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupRemoveContextProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.removeContextProvider] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.removeContextProvider
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider] = function () { return null; };
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup removeContextProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.RemoveContextProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupRemoveAuthTokenProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.removeAuthTokenProvider] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.removeAuthTokenProvider
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            ClientSdkDelegation.getInstance().initGetAuthTokenProviderFunc();
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup removeAuthTokenProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.RemoveAuthTokenProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.initGetContextProviderFunc = function () {
                    LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider] = function () { return null; };
                };
                ClientSdkDelegation.prototype.initGetAuthTokenProviderFunc = function () {
                    LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getAuthTokenProvider] = function () { return null; };
                };
                ClientSdkDelegation.prototype.setupSetBotAuthTokenProviderFunc = function () {
                    var _this = this;
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setBotAuthTokenProvider] = function (customerFunction) {
                            window.addEventListener(LiveChatWidget.EventConstants.lcwSignInCardReceived, function (event) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var sasUrl, message;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sasUrl = event.detail.sasUrl;
                                            return [4, customerFunction(sasUrl, function (botAuthConfig) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        ClientSdkDelegation.botAuthConfig = botAuthConfig;
                                                        return [2];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            message = {
                                                messageName: LiveChatWidget.EventConstants.setBotAuthTokenProvider,
                                                botAuthConfig: ClientSdkDelegation.botAuthConfig,
                                            };
                                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                                            return [2];
                                    }
                                });
                            }); });
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setupSetBotAuthTokenProviderFunc: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetBotAuthProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupSetFallbackInfoProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setFallbackInfoProvider] = function (customerFunction) {
                            customerFunction(;
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getFallbackInfoProvider] = 
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setFallbackInfoProvider,
                                fallbackInfo: ClientSdkDelegation.fallbackInfo
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setFallbackInfoProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetFallbackInfoProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupGetFallbackInfoProviderFunc = function () {
                    LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getFallbackInfoProvider] = 
                };
                ClientSdkDelegation.popoutMessageHandler = function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var popOutTab, popoutTab, authFunc, message, contextProviderFunction, Constants_1, portalContactId;
                    return __generator(this, function (_a) {
                        if (!event.data) {
                            return [2];
                        }
                        popOutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                        if (event.data.messageName == LiveChatWidget.EventConstants.startPopoutChatResponse) {
                            popOutTab.moveTo(event.data.payload.left, event.data.payload.top);
                            popOutTab.resizeTo(event.data.payload.width, event.data.payload.height);
                            popOutTab.location.href = event.data.payload.popOutUrl;
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.EventConstants.closePopoutChatMessage) {
                            window.removeEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandler);
                            popoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            if (popoutTab && !popoutTab.closed) {
                                popoutTab.close();
                            }
                            window[LiveChatWidget.BootstrapperConstants.PopoutTab] = null;
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.authTokenRequest) {
                            authFunc = LiveChatWidget.AuthToken.getMethodFromString(event.data.functionFullName);
                            try {
                                authFunc(function (token) {
                                    popOutTab.postMessage({
                                        messageName: LiveChatWidget.IFrameBootstrapperValues.authTokenResponse,
                                        authToken: token
                                    }, '*');
                                });
                            }
                            catch (e) {
                                message = {
                                    messageName: LiveChatWidget.EventConstants.LogTelemetry,
                                    event: LiveChatWidget.BootstrapperTelemetryConstants.AuthClientMethodException,
                                    exceptionDetails: e,
                                    logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                                };
                                LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            }
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.initContextParamsRequest) {
                            contextProviderFunction = LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider]();
                            popOutTab.postMessage({
                                messageName: LiveChatWidget.IFrameBootstrapperValues.initContextParamsResponse,
                                payload: {
                                    contextVariables: contextProviderFunction ? contextProviderFunction() : null,
                                    isProactiveChat: 0
                                }
                            }, '*');
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.portalContactIdRequest) {
                            Constants_1 = LiveChatWidget.BootstrapperConstants;
                            portalContactId = typeof window[Constants_1.Microsoft] != Constants_1.Undefined &&
                                typeof window[Constants_1.Microsoft][Constants_1.Dynamic365] != Constants_1.Undefined &&
                                typeof window[Constants_1.Microsoft][Constants_1.Dynamic365][Constants_1.Portal] != Constants_1.Undefined &&
                                typeof window[Constants_1.Microsoft][Constants_1.Dynamic365][Constants_1.Portal][Constants_1.User] != Constants_1.Undefined &&
                                (window[Constants_1.Microsoft][Constants_1.Dynamic365][Constants_1.Portal][Constants_1.User][Constants_1.ContactId]).toString();
                            popOutTab.postMessage({
                                messageName: LiveChatWidget.IFrameBootstrapperValues.portalContactIdResponse,
                                portalContactId: portalContactId
                            }, '*');
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderRequest) {
                            popOutTab.postMessage({
                                messageName: LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderResponse,
                                payload: {
                                    fallbackInfo: ClientSdkDelegation.fallbackInfo
                                }
                            }, '*');
                            return [2];
                        }
                        return [2];
                    });
                }); };
                ClientSdkDelegation.popoutMessageHandlerProactiveChat = function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var popOutTab, popoutTab;
                    return __generator(this, function (_a) {
                        if (!event.data) {
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.EventConstants.startPopoutChatResponse) {
                            popOutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            if (!popOutTab) {
                                window[LiveChatWidget.BootstrapperConstants.PopoutTab] = window.open('', LiveChatWidget.BootstrapperConstants.PopoutTarget, "location=no");
                                popOutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            }
                            popOutTab.moveTo(event.data.payload.left, event.data.payload.top);
                            popOutTab.resizeTo(event.data.payload.width, event.data.payload.height);
                            popOutTab.location.href = event.data.payload.popOutUrl;
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.EventConstants.closePopoutChatMessage) {
                            window.removeEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandler);
                            popoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            if (popoutTab && !popoutTab.closed) {
                                popoutTab.close();
                            }
                            window[LiveChatWidget.BootstrapperConstants.PopoutTab] = null;
                            return [2];
                        }
                        return [2];
                    });
                }); };
                return ClientSdkDelegation;
            }());
            LiveChatWidget.ClientSdkDelegation = ClientSdkDelegation;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var IFrameMessageHandler = (function () {
                function IFrameMessageHandler() {
                }
                IFrameMessageHandler.addIframeEventListener = function () {
                    var _this = this;
                    window.addEventListener(LiveChatWidget.EventConstants.message, function (event) {
                        if (event.data) {
                            try {
                                var customEvent;
                                var data = event.data;
                                switch (data.messageName) {
                                    case LiveChatWidget.IFrameBootstrapperValues.resizeMSLcwIframe:
                                        LiveChatWidget.LiveChatBootstrapperWebChat.resizeMSLcwIframe(data.id, data.className);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.repositionMSLcwIframe:
                                        LiveChatWidget.LiveChatBootstrapperWebChat.repositionMSLcwIframe(data.id, data.position);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.authTokenRequest:
                                        LiveChatWidget.AuthToken.onAuthTokenRequest(data.functionFullName);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.initContextParamsRequest:
                                        IFrameMessageHandler.onInitContextParamsRequest();
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.closePopoutChatMessage:
                                        IFrameMessageHandler.onClosePopOutChatMessage();
                                    case LiveChatWidget.EventConstants.LcwChangeTitle:
                                        IFrameMessageHandler.changeDocumentTitle(data.payload);
                                        break;
                                    case LiveChatWidget.EventConstants.LcwReady:
                                        LiveChatWidget.LiveChatBootstrapperWebChat.isLCWReady = true;
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(data.messageName, data.payload);
                                        window.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.getAgentAvailabilityFinished:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(data.messageName, data.payload);
                                        window.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.LcwStartChat:
                                    case LiveChatWidget.EventConstants.LcwCloseChat:
                                    case LiveChatWidget.EventConstants.LcwThreadUpdate:
                                    case LiveChatWidget.EventConstants.lcwMinimizeChat:
                                    case LiveChatWidget.EventConstants.LcwError:
                                    case LiveChatWidget.EventConstants.lcwOnClose:
                                    case LiveChatWidget.EventConstants.lcwOnMaximize:
                                    case LiveChatWidget.EventConstants.lcwOnMessageReceived:
                                    case LiveChatWidget.EventConstants.lcwOnHistoryMessageReceived:
                                    case LiveChatWidget.EventConstants.lcwOnMessageSent:
                                    case LiveChatWidget.EventConstants.LcwChatQueued:
                                    case LiveChatWidget.EventConstants.LcwChatRetrieved:
                                    case LiveChatWidget.EventConstants.lcwSignInCardReceived:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(data.messageName, data.payload);
                                        window.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwSignInCardReceivedPopOut:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwSignInCardReceived, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.redirectPageRequest:
                                        if (!_this.doesSourceMatchOrigin(event)) {
                                            return;
                                        }
                                        var newUrl = _this.sanitizeUrl(data.newUrl);
                                        window.parent.location.replace(newUrl);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutMessageReceived:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnMessageReceived, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutHistoryMessageReceived:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnHistoryMessageReceived, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutMessageSent:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnMessageSent, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutClose:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnClose, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderRequest:
                                        IFrameMessageHandler.onFallbackInfoRequest();
                                        break;
                                    default:
                                        break;
                                }
                            }
                            catch (e) {
                                var message = {
                                    messageName: LiveChatWidget.EventConstants.LogTelemetry,
                                    event: LiveChatWidget.BootstrapperTelemetryConstants.IframeEventListenerError,
                                    exceptionDetails: e,
                                    logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                                };
                                LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            }
                        }
                    });
                    window.addEventListener(LiveChatWidget.EventConstants.LcwReady, function () {
                        if (window[LiveChatWidget.BootstrapperConstants.Microsoft]
                            && window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365]
                            && window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365][LiveChatWidget.BootstrapperConstants.Portal]
                            && window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365][LiveChatWidget.BootstrapperConstants.Portal][LiveChatWidget.BootstrapperConstants.User]) {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.getContactInfoResponse,
                                contactInfo: window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365][LiveChatWidget.BootstrapperConstants.Portal][LiveChatWidget.BootstrapperConstants.User]
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        }
                    });
                };
                IFrameMessageHandler.onFallbackInfoRequest = function () {
                    var iframeElement = document
                        .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                    if (iframeElement) {
                        var fallbackInfo_1 = null;
                        var infoProvider = LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getFallbackInfoProvider];
                        if (typeof infoProvider === "function") {
                            infoProvider()(;
                        }
                        iframeElement
                            .contentWindow
                            .postMessage({
                            messageName: LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderResponse,
                            payload: { fallbackInfo: fallbackInfo_1 }
                        }, '*');
                    }
                };
                IFrameMessageHandler.changeDocumentTitle = function (messageCount) {
                    var currentTitle = document.title ? document.title : "";
                    var title = !!messageCount && messageCount > 0 ? "(" + messageCount + ") " + currentTitle.replace(/^\(\d*\)/, "") : currentTitle.replace(/^\(\d*\)/, "");
                    window.document.title = title;
                };
                IFrameMessageHandler.onInitContextParamsRequest = function () {
                    var iframeElement = document
                        .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                    if (iframeElement) {
                        iframeElement
                            .contentWindow
                            .postMessage({
                            messageName: LiveChatWidget.IFrameBootstrapperValues.initContextParamsResponse
                        }, '*');
                    }
                };
                IFrameMessageHandler.onClosePopOutChatMessage = function () {
                    var iframeElement = document
                        .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                    if (iframeElement) {
                        iframeElement
                            .contentWindow
                            .postMessage({
                            messageName: LiveChatWidget.IFrameBootstrapperValues.closePopoutChatMessage
                        }, '*');
                    }
                };
                IFrameMessageHandler.doesSourceMatchOrigin = function (event) {
                    var bootScript = document.querySelector(LiveChatWidget.BootstrapperConstants.ScriptSelector + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                    var source = new URL(bootScript.src).origin;
                    return event.origin === source;
                };
                IFrameMessageHandler.sanitizeUrl = 
                return IFrameMessageHandler;
            }());
            LiveChatWidget.IFrameMessageHandler = IFrameMessageHandler;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var AuthToken = (function () {
                function AuthToken() {
                }
                AuthToken.onAuthTokenRequest = function (functionName) {
                    var authFunc = AuthToken.getMethodFromString(functionName);
                    try {
                        authFunc(function (token) {
                            var iframeElement = document
                                .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                            if (iframeElement != null && iframeElement != undefined) {
                                iframeElement
                                    .contentWindow
                                    .postMessage({
                                    messageName: LiveChatWidget.IFrameBootstrapperValues.authTokenResponse,
                                    authToken: token
                                }, '*');
                            }
                        });
                    }
                    catch (e) {
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.AuthClientMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        var errorEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.LcwError, e);
                        window.dispatchEvent(errorEvent);
                    }
                };
                AuthToken.getMethodFromString = function (methodString) {
                    if (methodString) {
                        var scope = window;
                        var scopeSplit = methodString.split('.');
                        for (var i = 0; i < scopeSplit.length - 1; i++) {
                            scope = scope[scopeSplit[i]];
                            if (!scope) {
                                return;
                            }
                        }
                        var theMethodName = scopeSplit[scopeSplit.length - 1];
                        return scope[theMethodName];
                    }
                };
                return AuthToken;
            }());
            LiveChatWidget.AuthToken = AuthToken;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var _this = this;
            var StorageUtility = (function () {
                
                StorageUtility.setLocalStorage = function (key, data, expirationInSeconds) {
                    try {
                        if (localStorage && key != undefined) {
                            var expirationTimestamp = Date.now() + expirationInSeconds * 1000;
                            var localStorageData = {
                                data: data,
                                expiration: expirationTimestamp,
                            };
                            localStorage.setItem(key, JSON.stringify(localStorageData));
                        }
                    }
                    catch (error) {
                        console.log("Error setting local storage.");
                    }
                };
                StorageUtility.getLocalStorage = function (key) {
                    try {
                        if (localStorage === undefined) {
                            console.log("Local storage is disabled in the browser");
                            return undefined;
                        }
                        if (key === undefined || key === null || key.trim().length === 0) {
                            return undefined;
                        }
                        var storedData = localStorage.getItem(key);
                        if (storedData) {
                            var localStorageData = JSON.parse(storedData);
                            if (localStorageData.expiration > Date.now()) {
                                return localStorageData.data;
                            }
                            else {
                                localStorage.removeItem(key);
                            }
                        }
                    }
                    catch (error) {
                        console.log("Error fetching local storage.");
                        return undefined;
                    }
                    return undefined;
                };
                StorageUtility.getLcwFcsDetails = function (orgUrl, orgId) { return __awaiter(_this, void 0, void 0, function () {
                    var path, v2Key, pacsKey, pacsUrlKey, response, data, modernLcwV2Enabled, pacsInfraEnabled, pacsUrl, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(!LiveChatWidget.LiveChatBootstrapperWebChat.isNullOrEmptyString(orgUrl) && !LiveChatWidget.LiveChatBootstrapperWebChat.isNullOrEmptyString(orgId))) return [3, 6];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                path = "" + orgUrl + LiveChatWidget.BootstrapperConstants.LcwFcsDetailsPath + orgId;
                                v2Key = LiveChatWidget.BootstrapperConstants.v2CacheKey + orgId;
                                pacsKey = LiveChatWidget.BootstrapperConstants.pacsCacheKey + orgId;
                                pacsUrlKey = LiveChatWidget.BootstrapperConstants.pacsUrlCacheKey + orgId;
                                return [4, window.fetch(path)];
                            case 2:
                                response = _a.sent();
                                return [4, response.json()];
                            case 3:
                                data = _a.sent();
                                modernLcwV2Enabled = true;
                                pacsInfraEnabled = false;
                                pacsUrl = "";
                                if (data && data.ModernLcwV2Disabled && data.ModernLcwV2Disabled === true) {
                                    modernLcwV2Enabled = false;
                                }
                                if (data && data.PacsInfraEnabled && data.PacsInfraEnabled === true) {
                                    pacsInfraEnabled = true;
                                    pacsUrl = data && data.PacsUrl && data.PacsUrl.length > 0 ? data.PacsUrl : "";
                                }
                                if (localStorage && (response !== undefined && response.statusCode === undefined)) {
                                    StorageUtility.setLocalStorage(v2Key, modernLcwV2Enabled, LiveChatWidget.BootstrapperConstants.v2CacheKeyExpiration);
                                    StorageUtility.setLocalStorage(pacsKey, pacsInfraEnabled, LiveChatWidget.BootstrapperConstants.pacsCacheKeyExpiration);
                                    StorageUtility.setLocalStorage(pacsUrlKey, pacsUrl, LiveChatWidget.BootstrapperConstants.pacsCacheKeyExpiration);
                                }
                                return [2, data];
                            case 4:
                                error_1 = _a.sent();
                                console.log("Error fetching FCS configuration");
                                return [2, undefined];
                            case 5: return [3, 7];
                            case 6: return [2, undefined];
                            case 7: return [2];
                        }
                    });
                }); };
                return StorageUtility;
            }());
            LiveChatWidget.StorageUtility = StorageUtility;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var LiveChatBootstrapperWebChat = (function () {
                function LiveChatBootstrapperWebChat() {
                    var _this = this;
                    this.isLCWV2Enabled = function (bootScript) { return __awaiter(_this, void 0, void 0, function () {
                        var url, orgId, v2Key, isV2EnabledFromCache, lcwFcsResponse, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (bootScript.hasAttribute("v2")) {
                                        return [2, true];
                                    }
                                    if (bootScript.hasAttribute("v1")) {
                                        return [2, false];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    url = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgUrl);
                                    orgId = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgId);
                                    v2Key = LiveChatWidget.BootstrapperConstants.v2CacheKey + orgId;
                                    isV2EnabledFromCache = LiveChatWidget.StorageUtility.getLocalStorage(v2Key);
                                    if (isV2EnabledFromCache != undefined) {
                                        return [2, isV2EnabledFromCache];
                                    }
                                    return [4, LiveChatWidget.StorageUtility.getLcwFcsDetails(url, orgId)];
                                case 2:
                                    lcwFcsResponse = _a.sent();
                                    if (lcwFcsResponse && lcwFcsResponse.ModernLcwV2Disabled && lcwFcsResponse.ModernLcwV2Disabled === true) {
                                        return [2, false];
                                    }
                                    if (orgId && typeof orgId === "string" && LiveChatWidget.BootstrapperConstants.VIPCustomerOrgIds.indexOf(orgId.toLowerCase()) !== -1) {
                                        return [2, false];
                                    }
                                    return [2, true];
                                case 3:
                                    error_2 = _a.sent();
                                    return [2, false];
                                case 4: return [2];
                            }
                        });
                    }); };
                }
                LiveChatBootstrapperWebChat.prototype.loadJSResource = function (path, onload, onerror) {
                    var scriptResource = document.createElement(LiveChatWidget.BootstrapperConstants.Script);
                    scriptResource.src = path;
                    scriptResource.type = LiveChatWidget.BootstrapperConstants.JavascriptFlag;
                    scriptResource.onload = onload;
                    scriptResource.onerror = onerror;
                    try {
                        document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0].appendChild(scriptResource);
                    }
                    catch (_a) {
                        document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Body)[0].appendChild(scriptResource);
                    }
                };
                LiveChatBootstrapperWebChat.attachLcwIframeStyle = function (scriptNode) {
                    var styleElement = document.createElement(LiveChatWidget.BootstrapperConstants.Link);
                    styleElement[LiveChatWidget.BootstrapperConstants.ID] = LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageStyleId;
                    styleElement[LiveChatWidget.BootstrapperConstants.Type] = LiveChatWidget.BootstrapperConstants.TextCss;
                    styleElement[LiveChatWidget.BootstrapperConstants.Rel] = LiveChatWidget.BootstrapperConstants.StyleSheet;
                    var bootScript = document.querySelector("script#" + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                    var enableAutofill = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill);
                    if (!enableAutofill || enableAutofill.trim().length === 0) {
                        enableAutofill = "false";
                    }
                    var isAutofill = enableAutofill.trim().toLowerCase() === "true";
                    var framePath = isAutofill ? LiveChatWidget.BootstrapperConstants.FrameAutofillStyleCssPath : LiveChatWidget.BootstrapperConstants.FrameStyleCssPath;
                    styleElement[LiveChatWidget.BootstrapperConstants.Href] = scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.SRC).replace(LiveChatWidget.BootstrapperConstants.ScriptBootstrapperPath, framePath);
                    var htmlElement = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Html)[0];
                    var headElements = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head);
                    if (!headElements || !headElements[0]) {
                        htmlElement.appendChild(document.createElement(LiveChatWidget.BootstrapperConstants.Head));
                    }
                    var headElement = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0];
                    headElement.appendChild(styleElement);
                };
                LiveChatBootstrapperWebChat.attachLcwIframe = function (scriptNode) {
                    var iframeElement = document.createElement(LiveChatWidget.BootstrapperConstants.Iframe);
                    var servicePageSrc = scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.SRC).replace("scripts/LiveChatBootstrapper.js", "WebChatControl");
                    servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.ChatHTMLPath, LiveChatWidget.BootstrapperConstants.EndURLSeparator, LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.ID, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.ID)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataAppId, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataAppId)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataOrgId, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgId)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataOrgUrl, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgUrl)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.HostName, LiveChatWidget.BootstrapperConstants.Equal, window.location.host);
                    var appendReconnectId = function (urlParameterString) {
                        if (LiveChatBootstrapperWebChat.isNullOrEmptyString(urlParameterString)) {
                            return false;
                        }
                        var urlParameterObject = LiveChatBootstrapperWebChat.getQueryParameters(urlParameterString);
                        if (!urlParameterObject || LiveChatBootstrapperWebChat.isNullOrEmptyString(urlParameterObject[LiveChatWidget.BootstrapperConstants.ReconnectId])) {
                            return false;
                        }
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.ReconnectId, LiveChatWidget.BootstrapperConstants.Equal, urlParameterObject[LiveChatWidget.BootstrapperConstants.ReconnectId]);
                        return true;
                    };
                    var urlParameterStringPrimary = window.location.search.substring(1);
                    var appendPrimaryResult = appendReconnectId(urlParameterStringPrimary);
                    if (!appendPrimaryResult) {
                        try {
                            var urlParameterStringTop = window.top.location.search.substring(1);
                            appendReconnectId(urlParameterStringTop);
                        }
                        catch (_a) {
                        }
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.DisableTelemetry)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DisableTelemetry, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DisableTelemetry));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.LiveChatWidgetHideChatButton)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.LiveChatWidgetHideChatButton, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.LiveChatWidgetHideChatButton));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.OpenChatInPopOutWindow)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.OpenChatInPopOutWindow, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.OpenChatInPopOutWindow));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableNewLineMarkdownSupport)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableNewLineMarkdownSupport, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableNewLineMarkdownSupport));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableMakrdownMessageFormatting)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableMakrdownMessageFormatting, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableMakrdownMessageFormatting));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.SuggestedActionLayout)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.SuggestedActionLayout, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.SuggestedActionLayout));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.DataLcwVersion)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataLcwVersion, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataLcwVersion));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.HideMinimizeButton)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.HideMinimizeButton, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.HideMinimizeButton));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableCustomCloseButtonText)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableCustomCloseButtonText, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableCustomCloseButtonText));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableAutofill, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.BypassCache)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.BypassCache, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.BypassCache));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableDisconnectAlert)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableDisconnectAlert, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableDisconnectAlert));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.WidgetFontFamily)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.WidgetFontFamily, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.WidgetFontFamily));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice));
                        if (scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice.trim().toLowerCase()) === "true") {
                            LiveChatBootstrapperWebChat.renderOnMobileDevice = true;
                        }
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.WidgetThemeColor)) {
                        var widgetColor = scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.WidgetThemeColor);
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.WidgetThemeColor, LiveChatWidget.BootstrapperConstants.Equal, encodeURIComponent(widgetColor));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableSSOMagicCode)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableSSOMagicCode, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableSSOMagicCode));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.HyperlinkTextOverride)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.HyperlinkTextOverride, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.HyperlinkTextOverride));
                    }
                    LiveChatBootstrapperWebChat.iframePosition = LiveChatWidget.IFrameBootstrapperValues.bottomRight;
                    iframeElement[LiveChatWidget.BootstrapperConstants.SRC] = servicePageSrc;
                    iframeElement[LiveChatWidget.BootstrapperConstants.ID] = LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId;
                    (_b = iframeElement.classList).add.apply(_b, LiveChatWidget.IFrameBootstrapperValues.defaultClassName);
                    iframeElement[LiveChatWidget.BootstrapperConstants.Title] = "Live Chat Widget";
                    iframeElement[LiveChatWidget.StyleConstants.BackgroundColor] = LiveChatWidget.DefaultCssValues.IFrameBackgroundColor;
                    iframeElement[LiveChatWidget.StyleConstants.FrameBorder] = LiveChatWidget.DefaultCssValues.FrameBorderWidth;
                    iframeElement[LiveChatWidget.StyleConstants.AllowTransparency] = true;
                    iframeElement[LiveChatWidget.BootstrapperConstants.ALLOW] = LiveChatWidget.BootstrapperConstants.AllowValues;
                    iframeElement.allowFullscreen = true;
                    iframeElement.setAttribute(LiveChatWidget.BootstrapperConstants.AllowFullScreen, "true");
                    iframeElement.setAttribute(LiveChatWidget.BootstrapperConstants.MozillaAllowFullScreen, "true");
                    iframeElement.setAttribute(LiveChatWidget.BootstrapperConstants.WebKitAllowFullScreen, "true");
                    iframeElement.style[LiveChatWidget.StyleConstants.Position] = LiveChatWidget.DefaultCssValues.IFramePosition;
                    iframeElement.style[LiveChatWidget.StyleConstants.BorderWidth] = LiveChatWidget.DefaultCssValues.FrameBorderWidth;
                    iframeElement.style[LiveChatWidget.StyleConstants.ZIndex] = LiveChatWidget.DefaultCssValues.IFrameZIndex;
                    try {
                        var pageBody = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Body)[0];
                        pageBody.appendChild(iframeElement);
                    }
                    catch (e) {
                        window.onload = function () {
                            document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Body)[0].appendChild(iframeElement);
                        };
                    }
                    LiveChatWidget.IFrameMessageHandler.addIframeEventListener();
                    var _b;
                };
                LiveChatBootstrapperWebChat.convertNullToString = function (str) {
                    return this.isNullOrUndefined(str) ? "" : str;
                };
                LiveChatBootstrapperWebChat.resizeMSLcwIframe = function (id, className) {
                    var msLcwIframe = document.getElementById(id);
                    if (!msLcwIframe)
                        return;
                    var classes = [];
                    for (var i = 0; i < msLcwIframe.classList.length; i++) {
                        classes.push(msLcwIframe.classList[i]);
                    }
                    for (var i = 0; i < classes.length; i++) {
                        msLcwIframe.classList.remove(classes[i]);
                    }
                    if (className) {
                        var classArr = className.split(" ");
                        classArr.forEach(;
                    }
                    if (LiveChatBootstrapperWebChat.iframePosition !== null) {
                        msLcwIframe.classList.add(LiveChatBootstrapperWebChat.iframePosition.toString());
                    }
                    var bootScript = document.querySelector("script#" + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                    var enableAutofill = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill);
                    if (!enableAutofill || enableAutofill.trim().length === 0) {
                        enableAutofill = "false";
                    }
                    var isAutofill = enableAutofill.trim().toLowerCase() === "true";
                    if (isAutofill) {
                        msLcwIframe.classList.add(Microsoft.Omnichannel.LiveChatWidget.IFrameBootstrapperValues.ocAutofillFrame);
                    }
                    if (LiveChatBootstrapperWebChat.renderOnMobileDevice) {
                        msLcwIframe.classList.add(LiveChatWidget.IFrameBootstrapperValues.inAppClassName);
                    }
                };
                LiveChatBootstrapperWebChat.repositionMSLcwIframe = function (id, position) {
                    var msLcwIframe = document.getElementById(id);
                    if (!msLcwIframe || !msLcwIframe.classList
                        || position === LiveChatBootstrapperWebChat.iframePosition) {
                        return;
                    }
                    for (var i = 0; i < msLcwIframe.classList.length; i++) {
                        if (msLcwIframe.classList[i] === LiveChatWidget.IFrameBootstrapperValues.bottomLeft || msLcwIframe.classList[i] === LiveChatWidget.IFrameBootstrapperValues.bottomRight) {
                            msLcwIframe.classList.remove(msLcwIframe.classList[i]);
                        }
                    }
                    LiveChatBootstrapperWebChat.iframePosition = position;
                    msLcwIframe.classList.add(position);
                };
                LiveChatBootstrapperWebChat.createCustomEvent = function (eventName, payload) {
                    var eventDetails = (payload) ? {
                        detail: payload
                    } : undefined;
                    var event = null;
                    try {
                        event = new CustomEvent(eventName, eventDetails);
                    }
                    catch (e) {
                        event = document.createEvent(LiveChatWidget.EventConstants.CustomEvent);
                        event.initCustomEvent(eventName, true, true, eventDetails);
                    }
                    return event;
                };
                LiveChatBootstrapperWebChat.prototype.initializeLiveChat = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var bootScript, isV2Enabled, liveChatScriptRoot, target_window, existingIframeElement, self_1, liveChatScriptRoot_1, liveChatInitializerFileNameWithExtension_1, libRoot, liveChatAllLibsPath, libsResourceOnload;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    bootScript = document.querySelector(LiveChatWidget.BootstrapperConstants.ScriptSelector + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                                    return [4, this.isLCWV2Enabled(bootScript)];
                                case 1:
                                    isV2Enabled = _a.sent();
                                    if (isV2Enabled === true || isV2Enabled === "true") {
                                        liveChatScriptRoot = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.SRC);
                                        this.loadJSResource(liveChatScriptRoot.replace(LiveChatWidget.BootstrapperConstants.Scripts, LiveChatWidget.BootstrapperConstants.CustomizationVersionScripts), null, null);
                                        return [2];
                                    }
                                    target_window = window[Microsoft.Omnichannel.LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId];
                                    existingIframeElement = document.getElementById(Microsoft.Omnichannel.LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                                    LiveChatBootstrapperWebChat.appendViewportMeta();
                                    LiveChatBootstrapperWebChat.appendPhoneMeta();
                                    LiveChatBootstrapperWebChat.addKeyboardEventHandler();
                                    if (LiveChatBootstrapperWebChat.shouldRenderChatWidget(target_window, existingIframeElement)) {
                                        if (!window[LiveChatWidget.BootstrapperConstants.InitializerScriptDownloadTriggeredFlag]) {
                                            window[LiveChatWidget.BootstrapperConstants.InitializerScriptDownloadTriggeredFlag] = true;
                                            self_1 = this;
                                            liveChatScriptRoot_1 = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.SRC);
                                            if (liveChatScriptRoot_1.indexOf(LiveChatWidget.BootstrapperConstants.WebChatVersionScripts) === -1) {
                                                liveChatScriptRoot_1 = liveChatScriptRoot_1.replace(LiveChatWidget.BootstrapperConstants.Scripts, LiveChatWidget.BootstrapperConstants.WebChatVersionScripts);
                                            }
                                            liveChatScriptRoot_1 = liveChatScriptRoot_1.substring(0, liveChatScriptRoot_1.lastIndexOf("/") + 1);
                                            liveChatInitializerFileNameWithExtension_1 = LiveChatWidget.BootstrapperConstants.InitializerScriptPath;
                                            libRoot = liveChatScriptRoot_1.trim().replace(LiveChatWidget.BootstrapperConstants.Scripts, LiveChatWidget.BootstrapperConstants.Lib);
                                            liveChatAllLibsPath = libRoot.trim() + LiveChatWidget.BootstrapperConstants.LibsScriptPath;
                                            libsResourceOnload = function () {
                                                var liveChatInitializerPath = liveChatScriptRoot_1.trim() + liveChatInitializerFileNameWithExtension_1;
                                                self_1.loadJSResource(liveChatInitializerPath, null, null);
                                            };
                                            this.loadJSResource(liveChatAllLibsPath, libsResourceOnload, null);
                                        }
                                    }
                                    else if (LiveChatBootstrapperWebChat.shouldAddIframe(target_window, existingIframeElement)) {
                                        LiveChatBootstrapperWebChat.attachLcwIframeStyle(bootScript);
                                        LiveChatBootstrapperWebChat.attachLcwIframe(bootScript);
                                        LiveChatWidget.ClientSdkDelegation.getInstance().settingUpDelegation();
                                    }
                                    return [2];
                            }
                        });
                    });
                };
                LiveChatBootstrapperWebChat.appendViewportMeta = function () {
                    var metas = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Meta);
                    for (var i = 0; i < metas.length; i++) {
                        if (metas[i].name === LiveChatWidget.BootstrapperConstants.Viewport) {
                            return;
                        }
                    }
                    var viewportMeta = document.createElement(LiveChatWidget.BootstrapperConstants.Meta);
                    viewportMeta.name = LiveChatWidget.BootstrapperConstants.Viewport;
                    viewportMeta.content = LiveChatWidget.BootstrapperConstants.ViewportMetaContent;
                    document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0].appendChild(viewportMeta);
                };
                LiveChatBootstrapperWebChat.appendPhoneMeta = function () {
                    var metas = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Meta);
                    for (var i = 0; i < metas.length; i++) {
                        if (metas[i].name === LiveChatWidget.BootstrapperConstants.FormatDetection) {
                            return;
                        }
                    }
                    var phoneMeta = document.createElement(LiveChatWidget.BootstrapperConstants.Meta);
                    phoneMeta.name = LiveChatWidget.BootstrapperConstants.FormatDetection;
                    phoneMeta.content = LiveChatWidget.BootstrapperConstants.FormatDetectionMetaContent;
                    document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0].appendChild(phoneMeta);
                };
                LiveChatBootstrapperWebChat.addKeyboardEventHandler = 
                LiveChatBootstrapperWebChat.handleKeydown = function (e) {
                    if (e.ctrlKey && e.keyCode === LiveChatWidget.IFrameBootstrapperValues.KEY_SLASH) {
                        var message = {
                            messageName: LiveChatWidget.IFrameBootstrapperValues.handleControlSlash
                        };
                        LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                LiveChatBootstrapperWebChat.postIframeMessage = function (message) {
                    var iframes = document.querySelectorAll(LiveChatWidget.BootstrapperConstants.Iframe);
                    for (var i = 0; i < iframes.length; i++) {
                        if (iframes[i].id === LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId) {
                            iframes[i].contentWindow.postMessage(message, "*");
                        }
                    }
                };
                LiveChatBootstrapperWebChat.isNullOrEmptyString = 
                LiveChatBootstrapperWebChat.isNullOrUndefined = 
                LiveChatBootstrapperWebChat.getQueryParameters = function (urlParameterStrings) {
                    var queryParams = {};
                    if (!LiveChatBootstrapperWebChat.isNullOrEmptyString(urlParameterStrings)) {
                        var urlParams = urlParameterStrings.split("?");
                        if (urlParams.length > 1) {
                            urlParameterStrings = urlParams[1];
                        }
                        var urlParameters = urlParameterStrings.split("&");
                        if (urlParameters.length > 0) {
                            urlParameters.forEach(function (urlParameter) {
                                var pair = urlParameter.split("=");
                                if (pair.length === 2) {
                                    queryParams[pair[0]] = pair[1];
                                }
                            });
                        }
                    }
                    return queryParams;
                };
                LiveChatBootstrapperWebChat.renderOnMobileDevice = false;
                LiveChatBootstrapperWebChat.isLCWReady = false;
                LiveChatBootstrapperWebChat.shouldRenderChatWidget = 
                LiveChatBootstrapperWebChat.shouldAddIframe = 
                LiveChatBootstrapperWebChat.getElementFromCache = function (orgId) {
                    try {
                        if (localStorage === undefined) {
                            console.log("Localstorage is dissabled in the browser");
                            return undefined;
                        }
                        if (orgId === undefined || orgId === null || orgId.trim().length === 0)
                            return undefined;
                        var v2Key = "v2-" + orgId;
                        var v2KeyExpiration = "v2-" + orgId + "-expiration";
                        var v2CacheValue = localStorage.getItem(v2Key);
                        if (v2CacheValue !== undefined) {
                            var expired = localStorage.getItem(v2KeyExpiration);
                            if (expired && new Date().getTime() < parseInt(expired)) {
                                return v2CacheValue === "true" ? "true" : "false";
                            }
                        }
                        return undefined;
                    }
                    catch (error) {
                        return undefined;
                    }
                };
                return LiveChatBootstrapperWebChat;
            }());
            LiveChatWidget.LiveChatBootstrapperWebChat = LiveChatBootstrapperWebChat;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
(function (funcName, baseObj) {
    new Microsoft.Omnichannel.LiveChatWidget.LiveChatBootstrapperWebChat().initializeLiveChat();
})("docReady", window);

// SIG // Begin signature block
// SIG // MIIr5QYJKoZIhvcNAQcCoIIr1jCCK9ICAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Pc9dzO1uLPSTzLVTDSO6ZMoOE6C2fLzoLf9rvL0QkkKg
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGc8wghnLAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCCiEM9bw4r1PrT1Hi+yVRqXbpdQbKZH0zdN7uv3
// SIG // PNx5gTBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAIu6xYZdnqvx
// SIG // j9MqDoyW33vBW16coleFhv21nRZ8tUCMKknXa0DobVtA
// SIG // mjI744zYViVSF8nKQKlmv9NQG9JO4WDPsvfHRZrcpPv/
// SIG // ltVW9EJFrfldiWGsapxUL69KMTlENjB4PDDHIPUgCo/h
// SIG // 3wO83LDlIwu1U2ep+5ZIoMFyMT419136hYAdTj9IbQIy
// SIG // 5MQ+7bfvO/gxkb6ZOSx/mvYsMU0N7qCIgfNgE1/vVQIr
// SIG // hYskWSL3SiRksncVM/yO3j+pUXVWXfBqnsRr5egrWjQG
// SIG // W211F+Jumuino4tI2MgzO3beA0c1yIGVP8mmOe/cbdmL
// SIG // cqhN2aix16osB58rLVkINQOhgheXMIIXkwYKKwYBBAGC
// SIG // NwMDATGCF4Mwghd/BgkqhkiG9w0BBwKgghdwMIIXbAIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBUgYLKoZIhvcNAQkQ
// SIG // AQSgggFBBIIBPTCCATkCAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgNFuy9u97lO89pTcxHRWhvM3s
// SIG // SQBvyQbo9R0wnBKAOeACBmVWyHo0WhgTMjAyMzEyMDEw
// SIG // MDI1MDEuNTgxWjAEgAIB9KCB0aSBzjCByzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9zb2Z0IEFt
// SIG // ZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMeblNoaWVs
// SIG // ZCBUU1MgRVNOOkEwMDAtMDVFMC1EOTQ3MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIR
// SIG // 7TCCByAwggUIoAMCAQICEzMAAAHQdwiq76MXxt0AAQAA
// SIG // AdAwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwHhcNMjMwNTI1MTkxMjE0WhcNMjQw
// SIG // MjAxMTkxMjE0WjCByzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEl
// SIG // MCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0
// SIG // aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkEw
// SIG // MDAtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNlMIICIjANBgkqhkiG9w0B
// SIG // AQEFAAOCAg8AMIICCgKCAgEA3zJX59+X7zNFwFEpiOao
// SIG // htFMT4tuR5EsgYM5N86WDt9dXdThBBc9EKQCtt7NXSRa
// SIG // 4weYA/kjMOc+hMMQuAq11PSmkOFjR6h64Vn7aYKNzJCX
// SIG // sfX65jvTJXVH41BuerCFumFRemI1/va09SQ3Qgx26OZ2
// SIG // YmrDIoBimsBm9h6g+/5I0Ueu0b1Ye0OJ2rQFbuOmX+TC
// SIG // 74kdMTeXDRttMcAcILbWmBJOV5VC2gR+Tp189nlqCMfk
// SIG // owzuwbeQbgAVmPEr5kUHwck9nKaRM047f37NMaeAdXAB
// SIG // 1Q8JRsGbr/UX3N53XcYBaygPDFh2yRdPmllFGCAUfBct
// SIG // oLhVR6B3js3uyLG8r0a2sf//N4GKqPHOWf9f7u5Iy3E4
// SIG // IqYsmfFxEbCxBAieaMdQQS2OgI5m4AMw3TZdi3no/qiG
// SIG // 3Qa/0lLyhAvl8OMYxTDk1FVilnprdpIcJ3VHwTUezc7t
// SIG // c/S9Fr+0wGP7/r+qTYQHqITzAhSXPmpOrjA/Eyks1hY8
// SIG // OWgA5Jg/ZhrgvOsr0ipCCODGss6FHbHk9J35PGNHz47X
// SIG // cNlp3o5esyx7mF8HA2rtjtQzLqInnTVY0xd+1BJmE/qM
// SIG // QvzhV1BjwxELfbc4G0fYPBy7VHxHljrDhA+cYG+a8Mn7
// SIG // yLLOx/3HRxXCIiHM80IGJ7C8hBnqaGQ5CoUjEeXggein
// SIG // L/0CAwEAAaOCAUkwggFFMB0GA1UdDgQWBBQz4QGFktKA
// SIG // PpTrSE34ybcpdJJ0UTAfBgNVHSMEGDAWgBSfpxVdAF5i
// SIG // XYP05dJlpxtTNRnpcjBfBgNVHR8EWDBWMFSgUqBQhk5o
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2Ny
// SIG // bC9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIw
// SIG // MjAxMCgxKS5jcmwwbAYIKwYBBQUHAQEEYDBeMFwGCCsG
// SIG // AQUFBzAChlBodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NlcnRzL01pY3Jvc29mdCUyMFRpbWUtU3Rh
// SIG // bXAlMjBQQ0ElMjAyMDEwKDEpLmNydDAMBgNVHRMBAf8E
// SIG // AjAAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMIMA4GA1Ud
// SIG // DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAgEAl4fn
// SIG // JApGWgNOkjVvqsbUvYB0KeMexvoHYpJ4CiLRK/KLZFyK
// SIG // 5lj2K2q0VgZWPdZahoopR8iJWd4jQVG2jRJmigBjGeWH
// SIG // EuyGVCj2qtY1NJrMpfvKINLfQv2duvmrcd77IR6xULko
// SIG // MEx2Vac7+5PAmJwWKMXYSNbhoah+feZqi77TLMRDf9bK
// SIG // O1Pm91Oiwq8ubsMHM+fo/Do9BlF92/omYPgLNMUzek9E
// SIG // GvATXnPy8HMqmDRGjJFtlQCq5ob1h/Dgg03F4DjZ5wAU
// SIG // BwX1yv3ywGxxRktVzTra+tv4mhwRgJKwhpegYvD38LOn
// SIG // 7PsPrBPa94V/VYNILETKB0bjGol7KxphrLmJy59wME4L
// SIG // jGrcPUfFObybVkpbtQhTuT9CxL0EIjGddrEErEAJDQ07
// SIG // Pa041TY4yFIKGelzzMZXDyA3I8cPG33m+MuMAMTNkUaF
// SIG // nMaZMfuiCH9i/m+4Cx7QcVwlieWzFu1sFAti5bW7q1MA
// SIG // b9EoI6Q7WxKsP7g4FgXqwk/mbctzXPeu4hmkI8mEB+h/
// SIG // 4fV3PLJptp+lY8kkcdrMJ1t4a+kMet1P8WPRy+hTYaxo
// SIG // hRA+2USq58L717zFUFCBJAexlBHjeoXmPIBy7dIy1d8s
// SIG // w4kAPEfKeWBoBgFbfTBMIACTWNYh7x//L84SUmRTZB/L
// SIG // L0c7Tv4t07yq42/GccIwggdxMIIFWaADAgECAhMzAAAA
// SIG // FcXna54Cm0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGI
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNy
// SIG // b3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkg
// SIG // MjAxMDAeFw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMy
// SIG // MjVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGm
// SIG // TOe0ciELeaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YB
// SIG // f2xK4OK9uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMM
// SIG // tY0Tz3cywBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTI
// SIG // cVxRMTegCjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+
// SIG // NSZk2pg7uhp7M62AW36MEBydUv626GIl3GoPz130/o5T
// SIG // z9bshVZN7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi9
// SIG // 47SHJMPgyY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uD
// SIG // RedGbsoy1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tn
// SIG // YN74kpEeHT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/Nme
// SIG // Rd+2ci/bfV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03
// SIG // dJQcNIIP8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5
// SIG // TI4CvEJoLhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy
// SIG // 16cg8ML6EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkL
// SIG // iWHzNgY1GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXps
// SIG // xREdcu+N+VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqP
// SIG // nhZyacaue7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsG
// SIG // AQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqn
// SIG // Uv5kxJq+gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVd
// SIG // AF5iXYP05dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsG
// SIG // AQQBgjdMg30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVw
// SIG // b3NpdG9yeS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwDQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEs
// SIG // H2cBMSRb4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfC
// SIG // cTY/2mRsfNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2Y
// SIG // urYeeNg2LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/
// SIG // SHUB2RjebYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRW
// SIG // qveVtihVJ9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wX
// SIG // sFSFQrP8DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixr
// SIG // e24/LAl4FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoy
// SIG // GtmW9I/2kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8
// SIG // x1RtnWN0SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk
// SIG // 2XPXfx5bRAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pF
// SIG // EUep8beuyOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq7
// SIG // 7EFmPWn9y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGC
// SIG // onsXHRWJjXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1Zyvg
// SIG // DbjmjJnW4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7
// SIG // vzhwRNGQ8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0
// SIG // HVUzWLOhcGbyoYIDUDCCAjgCAQEwgfmhgdGkgc4wgcsx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jv
// SIG // c29mdCBBbWVyaWNhIE9wZXJhdGlvbnMxJzAlBgNVBAsT
// SIG // Hm5TaGllbGQgVFNTIEVTTjpBMDAwLTA1RTAtRDk0NzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaIjCgEBMAcGBSsOAwIaAxUAvLfIU/CilF/dZVOR
// SIG // akT/Qn7vTImggYMwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDANBgkqhkiG9w0BAQsFAAIFAOkTERYw
// SIG // IhgPMjAyMzExMzAxMzQ4MDZaGA8yMDIzMTIwMTEzNDgw
// SIG // NlowdzA9BgorBgEEAYRZCgQBMS8wLTAKAgUA6RMRFgIB
// SIG // ADAKAgEAAgIOCgIB/zAHAgEAAgIUHDAKAgUA6RRilgIB
// SIG // ADA2BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMC
// SIG // oAowCAIBAAIDB6EgoQowCAIBAAIDAYagMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQBsk6Y3SG08h8xPoXILgqUamt1JgRcc
// SIG // /sri3r+4QaLicxiaUDWKlMIRXB7oy1P0o8vLI7KSVSJo
// SIG // qZH34MM9ZNloEObgX+A0V4C5srdYWOX2DL6kpYUjPPl4
// SIG // HLxy8uZGehupjGJ0MTBk9GVR3jzBf+WM1oMZd5O4+wq0
// SIG // Ck6cdSKXKFbt6YpAUqq0ob/FKZ0+BMG8/WjadReKHnh1
// SIG // HHthMPUyT+RYCC61LyqhOQMhLvaPTYGiCFkMttRlevRQ
// SIG // SAyXsENh4cCkxY0inFkVb7GoCCaQd/v/hzxbIokvWFpp
// SIG // WPYc1yvusBGZWo1B3PH7KlDSXgisuunuyPWre3I/d5vW
// SIG // AdxkMYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAAHQdwiq76MXxt0AAQAAAdAw
// SIG // DQYJYIZIAWUDBAIBBQCgggFKMBoGCSqGSIb3DQEJAzEN
// SIG // BgsqhkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQgTrEn
// SIG // XSjTTn1oFLucCF2cld4KP0Rrm8rNygv5l3C2pw0wgfoG
// SIG // CyqGSIb3DQEJEAIvMYHqMIHnMIHkMIG9BCAIlUAGX7TT
// SIG // /zHdRNmMPnwV2vcOn45k2eVgHq600j8J1zCBmDCBgKR+
// SIG // MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB
// SIG // 0HcIqu+jF8bdAAEAAAHQMCIEIF6ELNqSvevDr6RCu1hB
// SIG // VxkMAASkEoJCGBy3s/LkZdccMA0GCSqGSIb3DQEBCwUA
// SIG // BIICADmJmkv5Wi4g5mbSNUHI3XLbbZQJJfbx7Y+Ujkd0
// SIG // QwWu2Nd0ebjZhUEZbwOjv1DopKIMjUPTsl0E0O2Ie3vq
// SIG // tRRg2365fHijALYwAJr0s2jX8JqoAbD4vRBXelQSwHye
// SIG // JLTeusm0UHijChDB14GMccH4wHTK6D5T3vNPx1CXvPSi
// SIG // m+N/j2ng4AwdVPrxHkUk/s/QkZFO2D1HN15pfQo6ZlOT
// SIG // 0hk9Gk8yG4Wft4mUeCUd8BRp/ExWajRFg3JoUp+r0ahe
// SIG // pHKyVsNe7B3xwS0SPMvPugZHEw/4TuJMyNVaUqCU6w1v
// SIG // bvu1CC3sp6yu0+6MOTmcrFVJFiSUvJ+nzpzx/jHaIHAq
// SIG // Q1kkTemZGJsmZBlhtA9+BsaCyPqEOwxfAT2eHo1vKsVR
// SIG // Cwu+4jg1bGZyLedBz2btX+rEuBkZMkeQXUvG8bAV29gS
// SIG // pH5HyEw7NU4E12YCrjLlIQ8bRgGSfo/BJGigCI7kYyhd
// SIG // 9cpzsT+oHZtnMBh32Qx8dGKceBAa0WuU1BHmKeztZHSy
// SIG // 17O5zPs0RLVdmbl7+QoyCvdLfjOUm0Q83z0wHXDUYhDZ
// SIG // Y60S0q8qobb+cWrTZzyfHJoqtXvuxkHspY010H5FElIt
// SIG // 2D/mmrthRDK5Von9/f2tTqprJVH7uTY2ghlz3aManky8
// SIG // PT30CStOhd7CZHEJH9TZS3fx17Mg
// SIG // End signature block
