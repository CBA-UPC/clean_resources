
            (() => {
                const __PAGEWORKERS_WEBSITE_ID__ = "AEXEHW";
                const __PAGEWORKERS_BASE_TAG_URL__ = "https://tags.pw.adn.cloud/AEXEHW";
                const __PAGEWORKERS_DELIVERY_API_HOST__ = "api.t3be3280.pw.adn.cloud";
                const __PAGEWORKERS_LOGS_API_ENDPOINT__ = "https://logging.pw.adn.cloud/collect";
                (function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var extendStatics=ar __assign=Context,Device,DeviceContextAll,ScopeType,PageEditorActionType,CssInsertStrategy,InjectionWithReplaceStrategy,PageEditorExtractStrategy,TransformationsTypes,ModuleType,Environment;ction(e){e.ALWAYS="always",e.BOTS_ONLY="botsOnly"}(Context||(Context={})),function(e){e.DESKTOP="desktop",e.MOBILE="mobile"}(Device||(Device={})),function(e){e.ALL="all"}(DeviceContextAll||(DeviceContextAll={})),function(e){e.ALL="all",e.MAPPING="mapping",e.PATTERN="pattern"}(ScopeType||(ScopeType={})),function(e){e.TITLE="title",e.H1="h1",e.DESCRIPTION="description",e.CANONICAL="canonical",e.ELEMENT_INNER_HTML="elementInnerHtml"}(PageEditorActionType||(PageEditorActionType={})),function(e){e.PREPEND="prepend",e.APPEND="append",e.INSERT_AFTER="insertAfter",e.INSERT_BEFORE="insertBefore"}(CssInsertStrategy||(CssInsertStrategy={})),InjectionWithReplaceStrategy||(InjectionWithReplaceStrategy={})),function(e){e.GET_ELEMENT_INNER_TEXT="getElementInnerText",e.GET_ELEMENT_INNER_HTML="getElementInnerHtml",e.GET_ELEMENT_ATTRIBUTE="getElementAttribute"}(PageEditorExtractStrategy||(PageEditorExtractStrategy={})),function(e){e.FIELD="field",e.TEMPLATE="template"}(TransformationsTypes||(TransformationsTypes={})),function(e){e.CUSTOM_JS="custom_js",e.PAGE_EDITOR="page_editor",e.REDIRECT="redirect",e.REMOVE_LINKS="remove_links",e.NO_FOLLOW_LINKS="no_follow_links"}(ModuleType||(ModuleType={})),function(e){e.BROWSER="browser",e.DISPATCHER="dispatcher",e.TEST="test"}(Environment||(Environment={}));var isCombinator=OPERATOR_FIELDS;!function(e){e.EQUALS="equals",e.NOT_EQUALS="!equals",e.STARTS_WITH="startsWith",e.NOT_STARTS_WITH="!startsWith",e.ENDS_WITH="endsWith",e.NOT_ENDS_WITH="!endsWith",e.CONTAINS="contains",e.NOT_CONTAINS="!contains",e.REGEX="regex",e.NOT_REGEX="!regex"}(OPERATOR_FIELDS||(OPERATOR_FIELDS={}));var ruleMatches=matchRule=ScopeField;!function(e){e.URL="url",e.PROTOCOL="protocol",e.HOST="host",e.PATH="path",e.QUERY_STRING="query_string"}(ScopeField||(ScopeField={}));var urlMatchRule=ModuleRuntimeErrorType;!ModuleRuntimeErrorType||(ModuleRuntimeErrorType={}));var ModuleRuntimeError=Error);ar BaseModule=function(){eturn e.prototype.run=function(){this.shouldRun()&&(this.runtime.debugLog("[start] Run module "+this.name),this.execute(),this.runtime.debugLog("[end] Run module "+this.name))},e.prototype.shouldRun=function(){return this.runtime.debugLog('Attempting to run module "'+this.name+'"'),this.scopeMatches()?this.contextMatches()?!!this.deviceMatches()||(this.runtime.debugLog("Not running, device doesn't match."),!1):(this.runtime.debugLog("Not running, context doesn't match."),!1):(this.runtime.debugLog("Not running, scope doesn't match.",{scope:this.scope,data:this.data,scopeType:this.scopeType}),!1)},e.prototype.scopeMatches=e.prototype.contextMatches=e.prototype.deviceMatches=e}(),BaseLinksModule=BaseModule),Module$2=BaseModule),_a$3,InjectionStrategy;!function(e){e.PREPEND="prepend",e.APPEND="append",e.INSERT_AFTER="insertAfter",e.INSERT_BEFORE="insertBefore"}(InjectionStrategy||(InjectionStrategy={}));var updateTitle=function(e,t,n){n&&e.getDOM().updateTitle(n)},updateH1=function(e,t,n){n&&(e.getDOM().hasElement("h1")?e.getDOM().updateH1(n):t.notExistsStrategy&&t.notExistsCssSelector&&e.getDOM().createH1(n,t.notExistsCssSelector,t.notExistsStrategy))},updateElementInnerHtml=function(e,t,n){var r=null;try{r=e.getDOM().getElement(t.cssSelector)}catch(e){throw new ModuleRuntimeError(ModuleRuntimeErrorType.INVALID_SELECTOR,"Invalid CSS selector: "+t.cssSelector)}if(!r)throw new ModuleRuntimeError(ModuleRuntimeErrorType.ELEMENT_NOT_FOUND,"Couldn't find element: "+t.cssSelector);if(r&&n)switch(t.cssStrategy){case InjectionWithReplaceStrategy.PREPEND:r.prepend(n);break;case InjectionWithReplaceStrategy.APPEND:r.append(n);break;case InjectionWithReplaceStrategy.INSERT_BEFORE:r.insertBefore(n);break;case InjectionWithReplaceStrategy.INSERT_AFTER:r.insertAfter(n);break;case InjectionWithReplaceStrategy.REPLACE:r.setInnerHtml(n);break;case InjectionWithReplaceStrategy.REPLACE_ELEMENT:r.insertAfter(n),r.remove()}},updateDescription=function(e,t,n){n&&e.getDOM().updateMetaDescription(n)},updateCanonical=function(e,t,n){n&&e.getDOM().updateCanonicalValue(n)},ACTIONS_MAPPING=(_a$3={},_a$3[PageEditorActionType.TITLE]=updateTitle,_a$3[PageEditorActionType.H1]=updateH1,_a$3[PageEditorActionType.ELEMENT_INNER_HTML]=updateElementInnerHtml,_a$3[PageEditorActionType.DESCRIPTION]=updateDescription,_a$3[PageEditorActionType.CANONICAL]=updateCanonical,_a$3),commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},nunjucks={exports:{}},module,factory,_a$2;
/*! Browser bundle of nunjucks 3.2.3  */
module=nunjucks,"undefined"!=typeof self&&self,factory=,module.exports=factory(),nunjucks.exports.configure({autoescape:!0});var transformField,transformTemplate,TRANSFORMATIONS_MAPPING=(_a$2={},_a$2[TransformationsTypes.FIELD]=transformField,_a$2[TransformationsTypes.TEMPLATE]=transformTemplate,_a$2);function extractInnerHtml(e,t){var n;try{n=e.getDOM().getElement(t.cssSelector)}catch(e){throw new ModuleRuntimeError(ModuleRuntimeErrorType.INVALID_SELECTOR,"Invalid CSS selector: "+t.cssSelector)}return n?n.getInnerHtml():nullr Module$1=function(e){function t(t){var n=t.config,r=n.extracts,i=n.actions,o=__rest(t,["config"]),s=e.call(this,o)||this;return s.urlData=s.data?s.data[s.runtime.getURL()]:{},s.extracts=r||[],s.actions=i,s}return __extends(t,e),t.prototype.execute=function(){var e=this,t=getPageEditorGlobalVariables(this.runtime);this.urlData&&(t=__assign(__assign({},t),this.urlData)),this.extracts.forEach()),this.runtime.debugLog("Variables after extract : "+JSON.stringify(t)),this.actions.forEach((function(n){var r=TRANSFORMATIONS_MAPPING[n.transformationType];if(!r)throw new ModuleRuntimeError(ModuleRuntimeErrorType.INVALID_CONFIG,"Unknown transformation strategy: "+n.transformationType);var i=ACTIONS_MAPPING[n.actionType];if(!i)throw new ModuleRuntimeError(ModuleRuntimeErrorType.INVALID_CONFIG,"Unknown action strategy: "+n.actionType);var o=r(n.transformationConfig,t);void 0!==o&&i(e.runtime,n.actionConfig,o)}))},t}(BaseModule),RedirectType,Platform,Executors,IgnoredParametersStrategy,Step,UserAgentMatchingPredicate,ContextRequester,GoJsKnownVariables,_a$1,_b,Operation,Action,KvType,StreamingTransformer,QualityControlStatus(RedirectType||(RedirectType={})),function(e){e.DOM="dom",e.FRONT="front",e.GOJS="gojs"}(Platform||(Platform={}))(Executors||(Executors={}))(IgnoredParametersStrategy||(IgnoredParametersStrategy={})),function(e){e.RENDERING="rendering",e.PRE_BEAM_RESPONSE="preBeamResponse"}(Step||(Step={})),function(e){e.CONTAINS="contains",e.EQ="eq",e.WILDCARD="wildcard",e.STARTSWITH="startswith"}(UserAgentMatchingPredicate||(UserAgentMatchingPredicate={})),function(e){e.BOT="bot",e.USER="user"}(ContextRequester||(ContextRequester={}))(GoJsKnownVariables||(GoJsKnownVariables={}))(Operation||(Operation={})),function(e){e.ADDED="added",e.CHANGED="changed",e.REMOVED="removed"}(Action||(Action={})),function(e){e.FILE="file",e.STREAMING="streaming"}(KvType||(KvType={}))(StreamingTransformer||(StreamingTransformer={})),_a$1={},_a$1[Operation.LINK]=0,_a$1[Operation.CANONICAL]=1,_a$1[Operation.HREFLANG]=2,_a$1[Operation.TITLE]=3,_a$1[Operation.H1]=4,_a$1[Operation.DESCRIPTION]=5,_a$1[Operation.TEMPORARY_REDIRECT]=6,_a$1[Operation.PERMANENT_REDIRECT]=7,_a$1[Operation.ALTERNATE_TO_MOBILE]=8,_a$1[Operation.OG_DESCRIPTION]=9,_a$1[Operation.ELEMENT]=10,_a$1[Operation.ELEMENT_ATTRIBUTE]=11,_a$1[Operation.PREV]=12,_a$1[Operation.NEXT]=13,_a$1[Operation.HTML_BLOCK]=14,_a$1[Operation.PAGE_NOT_FOUND]=15,_a$1[Operation.PAGE_GONE]=16,_b={},_b[Action.ADDED]=0,_b[Action.CHANGED]=1,_b[Action.REMOVED]=2,Step.RENDERING,Step.PRE_BEAM_RESPONSE(QualityControlStatus||(QualityControlStatus={})),QualityControlStatus.SUCCESS,QualityControlStatus.WARNING,QualityControlStatus.FAIL,QualityControlStatus.ERROR;var PROPERTY_LOGGING_VALUE_MAX_LENGTH=1e3,RedirectBehavior;!function(e){e.HTTP_301="301",e.HTTP_302="302",e.DO_NOTHING="do_nothing"}(RedirectBehavior||(RedirectBehavior={}));var getActionType,Module(BaseLinksModule),DirectAccessBehavior$1,LinksToRemoveType;!function(e){e.NO_INDEX="no_index",e.DO_NOTHING="do_nothing"}(DirectAccessBehavior$1||(DirectAccessBehavior$1={})),function(e){e.BY_URL="by_url",e.BY_SCOPE="by_scope",e.BY_SITECRAWLER_URLS="by_sitecrawler_urls",e.BY_EXTERNAL_SOURCE="external_source"}(LinksToRemoveType||(LinksToRemoveType={}));var RemoveLinksModule(BaseLinksModule),DirectAccessBehavior,LinksToNoFollowType;!function(e){e.NO_INDEX="no_index",e.DO_NOTHING="do_nothing"}(DirectAccessBehavior||(DirectAccessBehavior={})),function(e){e.BY_URL="by_url",e.BY_SCOPE="by_scope",e.BY_SITECRAWLER_URLS="by_sitecrawler_urls",e.BY_EXTERNAL_SOURCE="external_source"}(LinksToNoFollowType||(LinksToNoFollowType={}));var NoFollowLinksModule(BaseLinksModule),_a,BrowserModules=(_a={},_a[ModuleType.CUSTOM_JS]=Module$2,_a[ModuleType.PAGE_EDITOR]=Module$1,_a[ModuleType.REDIRECT]=Module,_a[ModuleType.REMOVE_LINKS]=RemoveLinksModule,_a[ModuleType.NO_FOLLOW_LINKS]=NoFollowLinksModule,_a),LogMessageLevel,PerformanceMeasure;(LogMessageLevel||(LogMessageLevel={}))(PerformanceMeasure||(PerformanceMeasure={}));var Logger(),StatusCodeChangeType;(StatusCodeChangeType||(StatusCodeChangeType={}));var BaseParsedUrl,BaseRuntime()var BaseDOM=function()return e.prototype.hasElement,e.prototype.updateTitle,e.prototype.updateH1,e.prototype.createH1,e.prototype.updateMetaDescription=function(e){var t=this.getElement("meta[name=description]");if(t){var n=t.getAttribute("content");t.setAttribute("content",e),this.runtime.getLogger().recordAction({element:Operation.DESCRIPTION,action:Action.CHANGED,oldValue:""+n,value:""+e})}else this._createHeadIfNotExists(),this.createElement("meta","head",{name:"description",content:e}),this.runtime.getLogger().recordAction({element:Operation.DESCRIPTION,action:Action.ADDED,value:""+e})},e.prototype.updateCanonicalValue,e.prototype._createHeadIfNotExists,e}(),BaseElement=function(){}var BrowserDOM=function(e)return __extends(t,e),t.prototype.createElement,t.prototype.getElement=function(e){var t=this.document.querySelector(e);return t?new BrowserElement(t):null},t.prototype.getAllElements=function(e){var t=this.document.querySelectorAll(e);return Array.from(t).map((function(e){return new BrowserElement(e)}))},t.prototype.waitForPageLoaded,t.prototype.setPermanentRedirect=function(e){this.runtime.isBot()&&(window.location.href=e,this.runtime.getLogger().recordAction({element:Operation.PERMANENT_REDIRECT,action:Action.ADDED,value:e}))},t.prototype.setTemporaryRedirect,t.prototype.waitFor,t}(BaseDOM),BrowserElement=function(e)return __extends(t,e),t.prototype.getTagName,t.prototype.getInnerText,t.prototype.getInnerHtml,t.prototype.setInnerHtml,t.prototype.getAttributeNames=function(){return this.element.getAttributeNames()},t.prototype.getAttribute,t.prototype.setAttribute,t.prototype.removeAttribute,t.prototype.remove,t.prototype.append=function(e){var t=this;e&&htmlToElements(e).forEach((function(e){t.element.append(e)}))},t.prototype.prepend=function(e){var t=this;e&&htmlToElements(e).reverse().forEach((function(e){t.element.prepend(e)}))},t.prototype.insertAfter=function(e){var t=this;if(e){var n=this.element.parentNode;n&&htmlToElements(e).reverse().forEach())}},t.prototype.insertBefore=function(e){var t=this;if(e){var n=this.element.parentNode;if(n)htmlToElements(e).forEach())}},t.prototype.getElement,t.prototype.getAllElements,t.prototype.waitFor,t}(BaseElement),matchWildcard,BOTS_DATA=[{id:1,userAgent:"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",matchMethod:"eq",device:"desktop"},{id:1,userAgent:"Googlebot/2.1 (+http://www.google.com/bot.html)",matchMethod:"eq",device:"desktop"},{id:1,userAgent:"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/* Safari/537.36",matchMethod:"wildcard",device:"desktop"},{id:2,userAgent:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/* Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",matchMethod:"wildcard",device:"mobile"},{id:20,userAgent:"AdsBot-Google (+http://www.google.com/adsbot.html)",matchMethod:"eq",device:"desktop"},{id:21,userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",matchMethod:"eq",device:"mobile"},{id:21,userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",matchMethod:"eq",device:"mobile"},{id:21,userAgent:"Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",matchMethod:"eq",device:"mobile"},{id:22,userAgent:"Mozilla/5.0 (compatible; Google-InspectionTool/1.0)",matchMethod:"eq",device:"desktop"},{id:23,userAgent:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/* Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0)",matchMethod:"wildcard",device:"mobile"},{id:24,userAgent:"GoogleOther",matchMethod:"eq"},{id:24,userAgent:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/* Mobile Safari/537.36 (compatible; GoogleOther)",matchMethod:"wildcard"},{id:3,userAgent:"Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"eq",device:"desktop"},{id:3,userAgent:"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/* Safari/537.36 Edg/*",matchMethod:"wildcard",device:"desktop"},{id:3,userAgent:"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/* Safari/537.36",matchMethod:"wildcard",device:"desktop"},{id:4,userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"eq",device:"mobile"},{id:4,userAgent:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/*Mobile Safari/537.36 Edg/* (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"wildcard",device:"mobile"},{id:4,userAgent:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/* Mobile Safari/537.36 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"wildcard",device:"mobile"},{id:11,userAgent:"Mozilla/5.0 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"eq",device:"desktop"},{id:12,userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"eq",device:"mobile"},{id:12,userAgent:"Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 530) like Gecko (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)",matchMethod:"eq",device:"mobile"},{id:5,userAgent:"Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)",matchMethod:"eq",device:"desktop"},{id:5,userAgent:"Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/*",matchMethod:"wildcard",device:"desktop"},{id:5,userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexBot/3.0; +http://yandex.com/bots)",matchMethod:"eq",device:"desktop"},{id:6,userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexMobileBot/3.0; +http://yandex.com/bots)",matchMethod:"eq",device:"mobile"},{id:7,userAgent:"Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)",matchMethod:"eq",device:"desktop"},{id:18,userAgent:"Mozilla/5.0 (Linux;u;Android 4.2.2;zh-cn;) AppleWebKit/534.46 (KHTML,like Gecko) Version/5.1 Mobile Safari/10600.6.3 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)",matchMethod:"eq",device:"mobile"},{id:8,userAgent:"sw-test-bot",matchMethod:"contains"},{id:8,userAgent:"botify-bot-sw-test",matchMethod:"contains"},{id:16,userAgent:"botify-bot-sw-sitecrawler",matchMethod:"startswith"},{id:17,userAgent:"botify-bot-sw-",matchMethod:"startswith"},{id:13,userAgent:"botify-bot-",matchMethod:"startswith"},{id:9,userAgent:"Mozilla/5.0 (compatible; botify; http://botify.com)",matchMethod:"eq",device:"desktop"},{id:10,userAgent:"Mozilla/5.0 Mobile (compatible; botify; http://botify.com)",matchMethod:"eq",device:"mobile"},{id:15,userAgent:"Mozilla/5.0 (*; *) AppleWebKit/* (KHTML, like Gecko) Version/* Mobile/* Safari/* (Applebot/*)",matchMethod:"wildcard",device:"mobile"},{id:14,userAgent:"Mozilla/5.0 (*; *) AppleWebKit/* (KHTML, like Gecko) Version/* Safari/* (Applebot/*)",matchMethod:"wildcard",device:"desktop"},{id:19,userAgent:"Mozilla/5.0 (compatible; Yeti/*; +http://naver.me/spd)",matchMethod:"wildcard",device:"desktop"},{id:19,userAgent:"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.0 Safari/537.36 (compatible; Yeti/*; +http://naver.me/spd)",matchMethod:"wildcard",device:"desktop"},{id:19,userAgent:"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.0 Safari/537.36 (compatible; Yeti/*; +http://naver.me/spd)",matchMethod:"wildcard",device:"desktop"},{id:19,userAgent:"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebit/53.7.36 (KHTML, like Gecko) Chrome/63.0.3239.0 Safari/537.36 (compatible; Yeti/*; +http://naver.me/spd)",matchMethod:"wildcard",device:"desktop"},{id:19,userAgent:"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebkit/53.7.36 (KHTML, like Gecko) Chrome/63.0.3239.0 Safari/537.36 (compatible; Yeti/*; +http://naver.me/spd)",matchMethod:"wildcard",device:"desktop"}],BotsRegistry(),PW_DISABLE_FLAG="pageworkers.disable",PW_ENABLE_DEBUG_MODE_FLAG="pageworkers.enable_debug_mode",botsRegistry=new BotsRegistry,BrowserRuntime(BaseRuntime),BrowserParsedUrl(BaseParsedUrl),PageWorkers=function(){function e(e){var t=e.runtime,n=e.modules,r=e.websiteId,i=e.generateRequestId,o=e.getConfigsWithoutLinksData,s=e.getConfigsWithLinksData,a=e.uploadLogs;this.requestId=null,this.runtime=t,this.modules=n,this.websiteId=r,this.generateRequestId=i,this.uploadLogs=a,this.logger=this.runtime.getLogger(),this.getConfigsWithoutLinksData=o,this.getConfigsWithLinksData=s}return e.prototype.run=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,r,i,o,s,a;return __generator(this,(function(c){switch(c.label){case 0:if(this.requestId=this.generateRequestId(),this.runtime.startPerformanceMeasurement(PerformanceMeasure.TOTAL),this.runtime.isPageWorkersDisabled())return this.runtime.debugLog('PageWorkers tag is currently disabled because of the "'+PW_DISABLE_FLAG+'" flag.'),[2];e=[],c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this.fetchModulesConfigsWithoutLinksData()];case 2:return t=c.sent(),[3,4];case 3:return n=c.sent(),this.runtime.errorLog("Failed retrieving module configs (without links data)",n),[2];case 4:return[4,this.waitForPageLoaded()];case 5:if(c.sent(),t.some((function(e){return e.shouldResolveDataForAllUrls}))&&(r=this.getConfigsWithLinksData(this.runtime)),i=this.instantiateModules(t).allModules,this.executeModulesOnPage(i,e),!r)return[3,10];o=void 0,c.label=6;case 6:return c.trys.push([6,8,,9]),[4,r];case 7:return o=c.sent(),[3,9];case 8:return s=c.sent(),this.runtime.errorLog("Failed retrieving module configs (with links data)",s),[2];case 9:a=this.instantiateModules(o).linksModules,this.executeLinksModules(a),c.label=10;case 10:return this.runtime.logRedirection(),this.runtime.endPerformanceMeasurement(PerformanceMeasure.TOTAL),this.logPerformanceMeasures(),[4,this.buildAndUploadLogs(e)];case 11:return c.sent(),this.runtime.applyRedirection(),[2]}}))}))},e.prototype.fetchModulesConfigsWithoutLinksData,e.prototype.waitForPageLoaded,e.prototype.instantiateModules=function(e){var t=this,n=[],r=[];return e.forEach((function(e){var i=t.modules[e.type];if(i){var o=new i({runtime:t.runtime,id:e.id,type:e.type,version:e.version,name:e.name,context:e.context,scope:e.scope,scopeType:e.scopeType,device:e.device,config:e.config,data:e.data});o.shouldRun()&&(n.push(o),o instanceof BaseLinksModule&&r.push(o))}else t.runtime.errorLog("No module matching type: "+e.type)})),{allModules:n,linksModules:r}},e.prototype.executeModulesOnPage=function(e,t){var n=this;e.forEach((function(e){var r=null,i=null,o=null;try{n.logger.setCurrentModule(e.id);var s=PerformanceMeasure.EXECUTE_MODULE+" (id="+e.id+" type="+e.type+")";n.runtime.startPerformanceMeasurement(s),e.run(),n.runtime.endPerformanceMeasurement(s);var a=n.runtime.performanceMeasures[s];a.end&&(o=a.end-a.start)}catch(e){e instanceof ModuleRuntimeError?(r=e.type,i=e.details):(r=ModuleRuntimeErrorType.UNKNOWN,i=e.toString()),n.runtime.errorLog("Error while running module: "+e)}finally{n.runtime.getLogger().clearCurrentModule()}t.push({id:e.id,type:e.type,version:e.version,error_type:r,error_message:i,time_execute_ms:o})}))},e.prototype.executeLinksModules,e.prototype.logPerformanceMeasures,e.prototype.buildAndUploadLogs,e}()id={exports:{}};
/*!
    **  Pure-UUID -- Pure JavaScript Based Universally Unique Identifier (UUID)
    **  Copyright (c) 2004-2023 Dr. Ralf S. Engelschall <rse@engelschall.com>
    **
    **  Permission is hereby granted, free of charge, to any person obtaining
    **  a copy of this software and associated documentation files (the
    **  "Software"), to deal in the Software without restriction, including
    **  without limitation the rights to use, copy, modify, merge, publish,
    **  distribute, sublicense, and/or sell copies of the Software, and to
    **  permit persons to whom the Software is furnished to do so, subject to
    **  the following conditions:
    **
    **  The above copyright notice and this permission notice shall be included
    **  in all copies or substantial portions of the Software.
    **
    **  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    **  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    **  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    **  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    **  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    **  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    **  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */(uuid);var UUID=uuid.exportsvar runtime=new BrowserRuntimenew PageWorkers({runtime:runtime,modules:BrowserModules,websiteId:__PAGEWORKERS_WEBSITE_ID__,generateRequestId:generateRequestId,getConfigsWithoutLinksData:fetchAndFormatModuleConfigs,getConfigsWithLinksData,uploadLogs:makeBrowserLogUploader(__PAGEWORKERS_LOGS_API_ENDPOINT__)}).run(),registerDebuggingTools(runtime)})();

            })();
        