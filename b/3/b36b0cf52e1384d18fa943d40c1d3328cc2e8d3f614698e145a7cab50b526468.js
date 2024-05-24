!function(){"use strict";class i{constructor(e={},t=""){this.pageData=e,this.pathName=t,this.pageData.categoryName=this.pageData.categoryName||this.convertPathForLegacyPages(),this.pageData.pageId=this.pageData.routeId||this.pageData.pageName||this.beautifyPath()}convertPathForLegacyPages(){return"/"===this.pathName?"Homepage":0===this.pathName.indexOf("/tax-tips")?"Articles":this.isProductsAndPricePage()?"Product and Pricing Pages":0===this.pathName.indexOf("/tax-tools")?"Tools":0===this.pathName.indexOf("/taxfreedom")?"TaxFreedom":0===this.pathName.indexOf("/microsite")?"Microsite Pages":0===this.pathName.indexOf("/lp/")?"Campaign Landing Pages":"Other"}isProductsAndPricePage(){return 0<=this.pathName.indexOf("/personal-taxes")||0<=this.pathName.indexOf("/small-business-taxes")}beautifyPath(){return"/"===this.pathName?"homepage":this.pathName.replace(/[^a-zA-Z0-9 ]/g," ")}}const s=e=>{const i={};return e&&-1!==e.indexOf("=")&&e.replace(/([^=&]+)=([^&]*)/gi,,i},t=(e,t)=>{var a=e.srcElement||e.originalTarget||e.target;return!("click"===e.type&&([e={}]=[e],e)&&1<e.detail||(e=a.matches(t),t=a.closest(t),!e&&!t)||!a.parentElement||a.closest("[data-template-id='widget']")||a.closest("[data-template-id='plugin']")||(e?a:t).classList.contains("suppress-default-beacon"))},r=(e,t="handledException",a="error")=>{var i;null!=(i=appVars)&&null!=(i=i.segment)&&i.clientSideLogging&&null!=(i=window)&&i.csLog&&window.csLog(a,{message:e,fileName:"track-star.min.js",messageCode:t,logKey:"error"===a||"fatal"===a?"analyticsHandledException":null})},c=(e,t)=>{let a=e;e instanceof Error?a=e.message:"string"!=typeof e&&(a=JSON.stringify(e)),r(a)},n=e=>{var t;window.coreServiceAdapter&&null!=(t=appVars)&&null!=(t=t.segment)&&t.clientSideLogging&&window.csLog("info",{message:"analytics performance metrics",messageCode:"analyticsMetrics",...e})},o=(e="",t={})=>!!(e&&t.mark instanceof Function)&&(t.mark(e),!0),l=(e,t)=>{if(performance&&performance.measure instanceof Function&&performance.getEntriesByName instanceof Function){var a="".concat(e,"2").concat(t),e=(performance.measure(a,e,t),performance.getEntriesByName(a));if(e.length)return(e[0].duration/1e3).toFixed(2)}return""};class e{constructor(e){this.constants=window.intuit.tracking.ecs.webAnalytics.constants,this.strategy=e,this.logErrorThrottle=0}firePageBeacon(){var e=this.strategy.propertiesInstance.properties,e=(e.type="page",window.coreServiceAdapter.analytics.trackEvent(e),o("trackStarPageBeaconExecuted",performance),l("requestStart","trackStarPageBeaconExecuted"));n({requestStart2trackstarPageBeaconExecuted:e})}trackEvent(t){var e;if(window.analytics||0!==this.logErrorThrottle){if(!(0<this.logErrorThrottle)){const{context:s,propertiesInstance:r,pageData:n,ssf_on:o,ssf_off:l}=this.strategy;if(s&&r){Object.keys(t).map(,null!=(e=appVars.adobeVisitorApi)&&e.ssf&&null!=(e=appVars.adobeVisitorApi)&&null!=(e=e.ssf)&&e.enabled&&s.setContext("ssf",o);var a=s.getContext(window),i=Object.assign({},s.getContext(window),{ssf:l});switch(t.type){case"page":this.page(n.categoryName,n.pageId,t,a);break;case"identify":this.identify(t.userId,t.traits,i);break;default:this.track("".concat(t.object,":").concat(t.action),r.properties,i)}r.resetMutableProperties()}else c("Track event occurred with no instance")}}else c("window.analytics is not defined"),this.logErrorThrottle++,setTimeout(1e3)}setInitConfig(){var e=window.intuit.tracking.ecs.webAnalytics.constants;window.intuit.tracking.ecs.webAnalytics.initConfig={org:e.org.CG,purpose:e.purpose.MKTG,scope:e.scope.TURBOTAX,ecs_version:"4.1"}}init(){o("trackStarInitStart",performance);var e,t,a=l("requestStart","trackStarInitStart");n({requestStart2trackstarInitStart:a}),this.strategy.pageElement=document.querySelector("[data-com-type='page']"),this.strategy.pageData=(a=document.location.pathname,e=document.querySelector("[data-com-type='page']")||{dataset:{}},t=document.body?document.body.dataset:{},(e=new i(e.dataset,a)).pageData.siteId=e.pageData.siteId||t.siteId,e.pageData),this.strategy.uriSearch=window.location.search?window.location.search.substring(1):"",this.strategy.uriParams=s(this.strategy.uriSearch),this.strategy.handleContext(),this.strategy.handleProperties(),this.strategy.updateAllAccountDomainAndRelativeLoginLinks(),this.strategy.retrieveDecibelSessionID().then(.catch(,this.firePageBeacon()}page(e,t,a,i){try{var s={page_category_parameter:e,page_name_parameter:t,...a,options:i};window.intuit.tracking.ecs.webAnalytics.trackPage(s)}catch(e){c(e)}}track(e,t,a){try{var i={event:e,...t,options:a};window.intuit.tracking.ecs.webAnalytics.track(i)}catch(e){c(e)}}identify(e,t,a){try{var i={userId:e,...t,...a};window.intuit.tracking.ecs.webAnalytics.identify(i)}catch(e){console.error(e),c(e)}}fireClickBeacon(e){this.strategy.setPropertiesForContentEngaged(e),window.coreServiceAdapter.analytics.trackEvent(this.strategy.propertiesInstance.properties)}bindClickBeacons(){document.addEventListener("click",e=>{try{t(e,this.strategy.clickSelector)&&this.fireClickBeacon(e)}catch(e){c(e)}},!1)}bindChangeBeacons(){document.addEventListener("change",e=>{try{t(e,this.strategy.changeSelector)&&this.fireClickBeacon(e)}catch(e){c(e)}})}fireScrollBeacon({screen_object_state:e}){this.strategy.propertiesInstance.addProperty("screen_object_state",e),window.coreServiceAdapter.analytics.trackEvent(this.strategy.propertiesInstance.properties)}bindScrollBeacons(){const r=[100,75,50,25],n=new Set;let e=null;document.addEventListener("scroll",()=>{e&&clearTimeout(e),e=setTimeout(()=>{var e=window.scrollY,t=document.body.offsetHeight,a=window.innerHeight,i=Math.round(100*(e/(t-a)));for(const s of r)if(i>=s){n.has(s)||(this.fireScrollBeacon({screen_object_state:"scroll_"+String(s)}),n.add(s));break}},100)})}updateMLData(e){window.appVars.mlData={...e},this.strategy.handleProperties()}}const v=(e={},t="|")=>{return e&&e.dataset&&e.dataset.templateId?"".concat((e.dataset.templateId||"").trim()).concat(t).concat((e.dataset.comVersion||"").trim()).concat(t).concat((e.dataset.autoSel||"").trim()).concat(t).concat((e.dataset.instanceVersion||"").trim()):e&&e.dataset&&e.dataset.comId?(t=e.dataset.comId.trim(),e.dataset.casId?"".concat(t,":").concat(e.dataset.casId.trim()):t):null},_=class a{constructor(e={}){this.win=e.win||{},this.siteId=e.siteId||"",this.immutableContext={},this.timezone="",this.integrations={},this.userDefindedContext={},this.exec()}etIntegration(e,t){this.integrations[e]=t}etTimezone(){this.win.Intl&&this.win.Intl.DateTimeFormat&&(this.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone)}setImmutableContext(){var e={};e.timezone=this.timezone,e.ecs_version="4.1",this.immutableContext=e}getContext(e={}){var t={};return t.browser_pixel_density=e.devicePixelRatio||"",t.integrations=this.integrations,e.navigator&&(t.locale=e.navigator.language),e.screen&&(t.screen_height=e.screen.height,t.screen_width=e.screen.width),Object.assign(t,this.userDefindedContext,this.immutableContext)}}class d{constructor(e={}){this.ivid=e.ivid,this.originalUrl=e.url||"",this.domain=this.originalUrl.split("?")[0],this.adobeVisitorKeyValuePair=e.adobeVisitorKeyValuePair,this.updatedUrl=e.url||"",this.uriParams={},this.urlRegexForParams=/\?(.+)/,this.encodedUriParamString="",this.exec()}exec(){var e=this.originalUrl.split(this.urlRegexForParams)[1];this.uriParams=s(e),this.uriParams.redirect_url&&(this.ivid||this.adobeVisitorKeyValuePair)&&this.addParamsToRedirLink()}decodeUriParams(){var e=Object.keys(this.uriParams);const t={};e.forEach(e=>{t[e]=decodeURIComponent(this.uriParams[e])}),this.uriParams=t}encodeUriParams(){const t=[];Object.keys(this.uriParams).forEach(e=>{t.push("".concat(e,"=").concat(encodeURIComponent(this.uriParams[e])))}),this.encodedUriParamString=t.join("&")}addParamsToRedirLink(){var e="".concat(this.domain,"?");this.decodeUriParams();let t="".concat(this.uriParams.redirect_url);this.adobeVisitorKeyValuePair&&(t+=this.adobeVisitorKeyValuePair),this.ivid&&(t+="&ivid=".concat(this.ivid)),this.uriParams.redirect_url=t,this.encodeUriParams(),e+=this.encodedUriParamString,this.updatedUrl=e}}class p{constructor(e={}){this.immutableProperties={},this.ivid=e.ivid,this.siteId=e.siteId,this.scopeApplicationVersion=e.scopeApplicationVersion||"",this.scopeArea=e.scopeArea||"",this.subScopeArea=e.subScopeArea||null,this.screen=e.screen,this.aamSegmentIds=e.aamSegmentIds,this.personalizationIds=e.personalizationIds,this.mlModelName=e.mlModelName||null,this.mlModelVersion=e.mlModelVersion||null,this.mlModelResponse=e.mlModelResponse||null,this.properties={},this.initImmutableProperties(),this.setDefaultEventProperties()}initImmutableProperties(){var e;this.addImmutableProperty("aam_segment_ids",this.aamSegmentIds),this.addImmutableProperty("event_sender_purpose","mktg"),this.addImmutableProperty("event_sender_name","martech"),this.addImmutableProperty("event_sender_version","1.0.0"),this.addImmutableProperty("ivid",this.ivid),this.addImmutableProperty("ml_model_name",this.mlModelName),this.addImmutableProperty("ml_model_version",this.mlModelVersion),this.addImmutableProperty("ml_model_response",this.mlModelResponse),this.addImmutableProperty("org","cg"),this.addImmutableProperty("personalization_ids",this.personalizationIds),this.addImmutableProperty("platform","web"),this.addImmutableProperty("purpose","mktg"),this.addImmutableProperty("scope",this.siteId),this.addImmutableProperty("scope_application_version",this.scopeApplicationVersion),this.addImmutableProperty("scope_version","turbotax:".concat(this.scopeApplicationVersion)),this.addImmutableProperty("screen",this.screen),this.addImmutableProperty("scope_area",null==(e=this.scopeArea)?void 0:e.toLowerCase()),this.addImmutableProperty("sub_scope_area",this.subScopeArea),this.addImmutableProperty("page_hierarchy","".concat(this.immutableProperties.org,"|").concat(this.immutableProperties.purpose,"|").concat(this.immutableProperties.scope,"|").concat(this.immutableProperties.scope_area,"|").concat(this.immutableProperties.screen))}addImmutableProperty(e,t){return!this.isExistingImmutableProperty(e)&&(null!=t?(this.immutableProperties[e]=t,this.properties[e]=t,!0):void 0)}addProperty(e,t){return!this.isExistingImmutableProperty(e)&&(null!=t?(this.properties[e]=t,!0):void 0)}setDefaultEventPropertiessetMutableProperties(){this.properties=Object.assign({},this.immutableProperties),this.setDefaultEventProperties()}}class h{constructor(){var{appVars:e,Cookies:t,Visitor:a,performance:i}=window;this.appVars=e,this.Cookies=t,this.Visitor=a,this.win=window,this.performance=i,this.IVID=t.get("ivid"),this.super_ivid=t.get("superIvid")||null,this.ivid_b=t.get("ivid_b")||null,this.uriParams={},this.logErrorThrottle=0,this.accountsDomain="accounts.intuit.com",this.relativePathSSO="/sso_login/",this.segmentTimeout=(null==e||null==(a=e.segment)?void 0:a.timeout)||3e3,this.segmentInterval=100,this.scope_application_version="GWP|CMS~3.0",this.clickSelector="a, button",this.changeSelector="input[type='checkbox'], input[type='radio'], select",this.clickAndChangeSelectors="".concat(this.clickSelector,", ").concat(this.changeSelector),this.loggingIsEnabled=!(null==e||!e.segment||null==e||null==(i=e.segment)||!i.clientSideLogging),this.uriSearch="",this.pageElement=null,this.adobeInstance=null,this.pageData={},this.context,this.propertiesInstance,this.ssf_on=0,this.ssf_off=1,this.segmentAnalytics=window.analytics||{},this.appVars.seasonal=e.seasonal||{},this.appVars.article=e.article||{}}retrieveDecibelSessionID(s=20){return new Promise((t,a)=>{var e;const i=setInterval(()=>{var e;s<=0?(clearInterval(i),a("Not able to get Decibel session ID because decibelInsight library was not present")):window.hasOwnProperty("decibelInsight")&&void 0!==decibelInsight("getSessionId")&&(e=decibelInsight("getSessionId"),clearInterval(i),t(e)),s--},null==(e=this.appVars)||null==(e=e.strategy)||null==(e=e.decibel)?void 0:e.timeout)})}handleContext(){this.context=new a({win:{navigator:window.navigator,Intl:window.Intl,location:window.location},siteId:this.pageData.siteId}),this.context.setContext("ivid",this.IVID),this.super_ivid&&this.context.setContext("super_ivid",this.super_ivid),this.context.setContext("ssf",this.ssf_off)}handleImmutableProperties(){var e=(()=>{var t=document.querySelectorAll("[data-com-id]"),a=t.length,i=[];for(let e=0;e<a;e+=1){var s=v(t[e],":");i.push(s)}return i.length?i.join("|"):null})(),t=document.documentElement||{};this.propertiesInstance.addImmutableProperty("application_locale",this.appVars.locale),this.propertiesInstance.addImmutableProperty("browser_encoding",document.characterSet?document.characterSet.toUpperCase():null),this.propertiesInstance.addImmutableProperty("browser_java_enabled",this.win.navigator.javaEnabled?this.win.navigator.javaEnabled():null),this.propertiesInstance.addImmutableProperty("browser_height",t.clientHeight||this.win.innerHeight),this.propertiesInstance.addImmutableProperty("browser_width",t.clientWidth||this.win.innerWidth),this.propertiesInstance.addImmutableProperty("campaign",this.uriParams.cid?encodeURI(this.uriParams.cid):null),this.propertiesInstance.addImmutableProperty("content_id",this.appVars.pageContentId),this.propertiesInstance.addImmutableProperty("component_ids",e),this.propertiesInstance.addImmutableProperty("cms_locator",this.appVars.pageContentId),this.propertiesInstance.addImmutableProperty("experiment_ids",window.Cookies.get((null==(t=this.appVars)||null==(e=t.experience)?void 0:e.cookieName)||"tms")||null),this.propertiesInstance.addImmutableProperty("experiment_ids_experienced",(null==(t=this.appVars)||null==(e=t.clientProfile)?void 0:e.experiment_ids_experienced)||null),this.propertiesInstance.addImmutableProperty("is_amp",document.documentElement.hasAttribute("amp")),this.propertiesInstance.addImmutableProperty("is_ffa",((e="",t)=>{let a=!1;return a="TaxFreedom"===e||t&&0<=t.indexOf("freefile.intuit.com")?!0:a})(this.pageData.categoryName,document.location.href||"")),this.propertiesInstance.addImmutableProperty("super_ivid",this.super_ivid),this.propertiesInstance.addImmutableProperty("ivid_b",this.ivid_b),this.propertiesInstance.addImmutableProperty("keyword",([t={}]=[this.uriParams],t.hasOwnProperty("q")?t.q:"")),this.propertiesInstance.addImmutableProperty("page_experience",this.pageData.experienceAnalyticsName||null),this.propertiesInstance.addImmutableProperty("page_language",document.documentElement.lang),this.propertiesInstance.addImmutableProperty("priority_code",this.Cookies.get("priorityCode")||null),this.propertiesInstance.addImmutableProperty("referrer",document.referrer),this.propertiesInstance.addImmutableProperty("screen_color_depth",this.win.screen.colorDepth),this.propertiesInstance.addImmutableProperty("url",this.win.location.href),this.propertiesInstance.addImmutableProperty("url_host_name",this.win.location.hostname),this.propertiesInstance.addImmutableProperty("url_query_param",this.uriSearch),this.propertiesInstance.addImmutableProperty("personalization_workflow",(null==(e=appVars)||null==(t=e.mlData)?void 0:t.modelPersonalizationWorkflow)||null),this.propertiesInstance.addImmutableProperty("personalization_reward_action_id",(null==(e=appVars)||null==(t=e.mlData)?void 0:t.modelPersonalizationRewardActionId)||null),this.propertiesInstance.addImmutableProperty("personalization_reward_handle",(null==(e=appVars)||null==(t=e.mlData)?void 0:t.modelEventId)||null),this.propertiesInstance.addImmutableProperty("personalization_placement",(null==(e=appVars)||null==(t=e.mlData)?void 0:t.modelPersonalizationPlacement)||null),this.propertiesInstance.addImmutableProperty("personalization_bandits_model",(null==(e=appVars)||null==(t=e.mlData)?void 0:t.modelName)||null)}handleProperties(){if(this.propertiesInstance=new p({siteId:this.pageData.siteId,scopeApplicationVersion:this.scope_application_version,scopeArea:this.pageData.categoryName,subScopeArea:this.pageData.subCategory,screen:this.pageData.pageId?this.pageData.pageId.trim():null,aamSegmentIds:(t=null==(t=this.appVars)||null==(t=t.clientProfile)?void 0:t.aam_incoming_segments)?t.replace(/\|/g,":"):null,personalizationIds:(null==(t=this.appVars)||null==(t=t.clientProfile)?void 0:t.decision_audience)||null,mlModelName:[null==(t=this.appVars)||null==(t=t.mlData)?void 0:t.modelName,null==(t=this.appVars)||null==(t=t.mxs)?void 0:t.modelName].filter(Boolean).join("|"),mlModelVersion:[null==(t=this.appVars)||null==(t=t.mlData)?void 0:t.modelVersion,null==(t=this.appVars)||null==(t=t.mxs)?void 0:t.modelVersion].filter(Boolean).join("|"),mlModelResponse:[null==(t=this.appVars)||null==(t=t.mlData)?void 0:t.modelResponse,Number(null==(t=this.appVars)||null==(t=t.mxs)?void 0:t.modelEvaluation)||null].filter(Boolean).join("|")}),this.handleImmutableProperties(),this.propertiesInstance.addProperty("tax_prep_year",null!=(t=this.appVars)&&null!=(t=t.seasonal)&&t.taxYear?"ty".concat(this.appVars.seasonal.taxYear.substr(-2)):null),this.propertiesInstance.addProperty("event_sender_xref_id",(null==(t=this.appVars)||null==(t=t.mlData)?void 0:t.modelEventId)||null),this.win.navigator&&(this.propertiesInstance.addProperty("browser_cookies_enabled",!!this.win.navigator.cookieEnabled),this.propertiesInstance.addProperty("browser_plugins",(t=>{if(!t)return"";var a=[],i=t.length;for(let e=0;e<i;e+=1){var s=t[e];a.push(s.name)}return a.join("|")})(this.win.navigator.plugins))),this.appVars.pageContentId){let e=null;var t=document.querySelector("[data-primary-category]");t&&(e=t.dataset.primaryCategory),this.propertiesInstance.addProperty("topic_id",this.appVars.pageContentId),this.propertiesInstance.addProperty("topic_name",e),this.propertiesInstance.addProperty("recommended_sku",(t=document.querySelectorAll("[data-legacy-sku]")).length?Array.from(t).map(.filter(Boolean).join("|"):"")}this.propertiesInstance.addProperty("personalization_action",null!=(t=appVars)&&null!=(t=t.mlData)&&t.modelEventId?"viewed":null)}updateAllAccountDomainAndRelativeLoginLinks(){var t=document.querySelectorAll("a[href^='https://".concat(this.accountsDomain,"'], a[href*='").concat(this.relativePathSSO,"']")),a=t.length;for(let e=0;e<a;e+=1){var i=t[e],s=i.getAttribute("href"),s=new d({url:s,ivid:this.IVID,adobeVisitorKeyValuePair:this.adobeInstance?this.adobeInstance.visitorIds:""});i.setAttribute("href",s.updatedUrl)}}setPropertiesForContentEngaged(e){var t=e.srcElement||e.explicitOriginalTarget||e.originalTarget||e.target,t=t.matches(this.clickAndChangeSelectors)?t:t.closest(this.clickAndChangeSelectors),a=([a=""]=[this.Cookies.get("tt_sku_s")],l={sku:null,screen_object_state:null},(a=a.split(","))[0]&&(l.sku=a[0].trim()),a[1]&&(l.screen_object_state=a[1].trim()),l);let i="",s="",r="",n=null,o="";var l="change"===e.type?"selected":"".concat(e.type,"ed");let c,d,p,h=null,m=null,u=a.sku,g=null,I=null,y=null,b=null,P=null;appVars.article&&appVars.article.id&&(u=_(t.closest("[data-legacy-sku]"))||u),t&&(r=t.getAttribute("data-ui-object")||("A"===t.tagName?"link":t.tagName),c=t.closest("[data-com-id]"),d=t.closest("[data-pzn-id]"),p=t.closest("[data-cas-id]")),c&&(i=v(c),s=v(c,":"),h=c.parentElement.closest("[data-com-id]")),p&&(n=p.getAttribute("data-cas-id")),d&&(g=d.getAttribute("data-pzn-id"),I=d.getAttribute("data-pzn-placement"),y=d.getAttribute("data-pzn-model-name"),b=d.getAttribute("data-pzn-model-version"),P=d.getAttribute("data-pzn-model-response"),n=I),!r&&c&&(r=c.tagName),h&&(o=v(h,":")),t&&(m=(e=>{if(!e)return"";if("SELECT"===e.tagName&&0<=e.selectedIndex&&e.options)return e.options[e.selectedIndex]?e.options[e.selectedIndex].text:"";if("SELECT"===e.tagName)return"";if("checkbox"===e.type||"radio"===e.type)return(e.parentElement.textContent||"").trim();let t=(e.textContent||"").trim();return(t=t||(e.getAttribute("aria-label")||"").trim())||""})(t)),this.propertiesInstance.addProperty("object_detail",i),this.propertiesInstance.addProperty("action","engaged"),this.propertiesInstance.addProperty("type","click"),this.propertiesInstance.addProperty("personalization_ids",g),this.propertiesInstance.addProperty("personalization_placement",I),this.propertiesInstance.addProperty("ui_action",l),this.propertiesInstance.addProperty("ui_object",null==(e=r)?void 0:e.toLowerCase()),this.propertiesInstance.addProperty("ui_object_detail","".concat(l," ").concat(m)),this.propertiesInstance.addProperty("ui_access_point",n),this.propertiesInstance.addProperty("sku",null),this.propertiesInstance.addProperty("recommended_sku",u),this.propertiesInstance.addProperty("screen_object_state",a.screen_object_state),this.propertiesInstance.addProperty("event_sender_xref_id",(null==(t=appVars)||null==(e=t.mlData)?void 0:e.modelEventId)||null),this.propertiesInstance.addProperty("personalization_action",l),this.propertiesInstance.addProperty("ml_model_name",y),this.propertiesInstance.addProperty("ml_model_version",b),this.propertiesInstance.addProperty("ml_model_response",P);var a=this.propertiesInstance.properties;this.propertiesInstance.addProperty("action_detail","".concat(a.action,"|").concat(a.object,"|").concat(s,"|").concat(a.ui_action,"|").concat(a.ui_object,"|").concat(a.ui_object_detail,"|").concat(o))}}class m{constructor(e={}){this.segment=e.segment,this.trackMethods=[]}ar u={get:function(e){if(e){e=document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([.$?*|{}()[\]\\\/+^])/g,"\\$1"),"=([^;]*)")));if(e){let t=e[1];if(t&&"string"==typeof t&&t.startsWith('"')&&t.endsWith('"'))try{t=JSON.parse(t)}catch(e){r("cookie is not a json",t)}return t}}}};{var g=window;window.Cookies=u,window.coreServiceAdapter={analytics:new m},u=g.coreServiceAdapter;let t;if(null==(g=g)||null==(g=g.intuit)||null==(g=g.tracking)||null==(g=g.ecs)||null==(g=g.webAnalytics)||!g.constants)r("TrackStar lib is undefined.","handledException","warn");else try{var I=new CustomEvent("BootstrapWebAnalytics",{bubbles:!0,cancelable:!0}),y=new h;t=new e(y),u.analytics.registerListener(t.trackEvent.bind(t)),u.analytics.updateMLData=t.updateMLData.bind(t),t.setInitConfig(),document.dispatchEvent(I),document.addEventListener("DOMContentLoaded",()=>{var e;t.init(),t.bindClickBeacons(),t.bindChangeBeacons(),"true"===(null==(e=window)||null==(e=e.appVars)||null==(e=e.beaconProps)?void 0:e.scrollBeaconEnabled)&&t.bindScrollBeacons()})}catch(e){r(e.message)}}}();