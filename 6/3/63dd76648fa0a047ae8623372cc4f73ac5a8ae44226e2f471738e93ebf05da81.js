var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=$jscomp.createTemplateTagFirstArgWithRaw=namespace("SAP.sapdx.analytics");
SAP.sapdx.analytics.ResourceContext=function(){var a={CTX_GATED:"gated",CTX_RESTRICTED:"restricted",CTX_TRIAL:"trial",CTX_FREE:"free",CTX_UNDEFINED:"undefined",CTX_NGDS_OPT_OUT:"NGDS opt-out"},b=[a.CTX_GATED,a.CTX_RESTRICTED,a.CTX_TRIAL,a.CTX_FREE,a.CTX_UNDEFINED,a.CTX_NGDS_OPT_OUT],c=a.CTX_UNDEFINED,d=function(){var h=localStorage.getItem("optout_domains");h=h?!!Number(JSON.parse(h)["Functional Cookies"].domains["ngds.sap.com"]):!h;var k=document.cookie.match("(notice_preferences)\x3d([^;]+)"),m=
!0;k&&k[2]&&(m=1<=k[2].charAt(0));return m&&h},f=function(h){h!==c&&(c=h,sessionStorage.setItem("rfContext",c))},l=function(h,k){var m=!1;Array.isArray(h)&&Array.isArray(k)&&(m=0<h.filter(.length);return m};return{GATED:function(){f(a.CTX_GATED)},TRIAL:function(){f(a.CTX_TRIAL)},FREE:RESTRICTED:function(){d()?f(a.CTX_RESTRICTED):f(a.CTX_NGDS_OPT_OUT)},CONST:a,getContext:isEnabledNGDSCookies:d,mergeIntoDatalayerObject:function(h,
k){if(c===a.CTX_UNDEFINED){var m=sessionStorage.getItem("rfContext");m&&(m+="",-1!==b.indexOf(m)&&(c=m))}m="downloadAttempt downloadSuccess pdfPreview accessExternalContent videoStart video25 video50 video75 videoComplete restrictedAssetPopup restrictedAssetBlock".split(" ").slice();k&&"object"===typeof k&&k.allowWithEvent&&"string"===typeof k.allowWithEvent&&m.push(k.allowWithEvent);h&&"object"===typeof h&&h.events&&"object"===typeof h.events&&l(Object.keys(h.events),m)&&(h.asset||(h.asset={}),h.asset.restriction||
(h.asset.restriction={}),h.asset.restriction.type=c!==a.CTX_TRIAL?c:a.CTX_GATED)}}}();namespace("SAP.sapdx.analytics");
SAP.sapdx.analytics.assetPage=function(){var a;return{setPath:function(b){var c=SAP.sapdx.gating.analytics.isIdsReferrer(document.referrer),d=$.deparam.querystring(location.href)||{},f=d.gated_asset_path&&$.deparam.querystring(d.gated_asset_path)||{},l=d["rc-url"]&&$.deparam.querystring(d["rc-url"])||{};f=d.ut||f.ut||!1;if(d=d.analytic_asset_path||l.analytic_asset_path)a=d,localStorage.assetPagePath=a;else{a||(a=localStorage.assetPagePath||"");l=SAP.sapdx.login.analytics.loginStatusAfterLoadPage||
sessionStorage.getItem("loginStatus");d=c&&(!a||"logN"===l);l=c&&"logY"===l;var h=f&&!document.referrer;l&&sessionStorage.removeItem("initial_page");if(d||h||l||!c&&!f)a=SAP.sapdx.gating.analytics.getReferrer(b),localStorage.assetPagePath=a}},getPath:function(){a||(a=localStorage.assetPagePath||"");return a}}}();namespace("SAP.sapdx.analytics.launch");
(function(){SAP.sapdx.analytics.launch.applyAnalyticsWhenReady=function(a){if(window.SAP.analytic_loaded)a();else $(document).on("analytic_loaded",a)}})();namespace("SAP.sapdx.analytics.datalayer");
(function(){function a(){w||window.addEventListener("message",function(g){try{"submit_preferences"===JSON.parse(g.data).message&&v.length&&sessionStorage.setItem("dataLayerDeferred",JSON.stringify(v))}catch(e){}})}function b(g,e){SAP.analytic_blocked||window.NO_ANALYTICS_CALL&&!window.ANALYTIC_SESSION_OBJECT?t.length&&e.events&&f(Object.keys(e.events)):SAP.analytic_loaded&&SAP.dataLayerEventCatcherInitialized?l(g,e):p.push({eventName:g,eventObject:e})}function c(){SAP.analytic_blocked||window.NO_ANALYTICS_CALL&&
!window.ANALYTIC_SESSION_OBJECT?t.length&&(p.filter(.forEach(,p=[]):SAP.analytic_loaded&&SAP.dataLayerEventCatcherInitialized&&SAP.sapdx.analytics.datalayer.pageview&&SAP.sapdx.analytics.datalayer.pageview.wasTriggered&&(p.forEach(,p=[],d())}function d(){r&&r.length&&$(document).ready(function(){SAP.sapdx.Authentication.subscribe({logic:function(){r.forEach(;r=[]},plugin:SAP.sapdx.Observer.Plugin.onlyOnce()})})}function f(g){t=t.map(.filter(function(e){return 1===e.length?(setTimeout(e[0],0),!1):!0})}function l(g,e){$(document).trigger(g,e);t.length&&e.events&&setTimeout(q)}function h(g,e){return g.events&&Object.keys(g.events).some(function(n){return e.includes(n)})}function k(g){var e=sessionStorage.getItem("s_isOriginalReferrerUsed")||0,
n=sessionStorage.getItem("referrerBeforeRedirect"),u=sessionStorage.getItem("referrerBeforeTrustArcReload");return null!==n&&null!==u?(sessionStorage.removeItem("referrerBeforeRedirect"),sessionStorage.removeItem("referrerBeforeTrustArcReload"),n||"no referrer"):e?g:null!==n?(sessionStorage.setItem("s_isOriginalReferrerUsed","1"),n||"no referrer"):null!==u?(sessionStorage.setItem("s_isOriginalReferrerUsed","1"),u||"no referrer"):g}function m(g){var e=location.href.replace(/(?:(?:&?amp;)+)/gi,"\x26").replace(/([?&])email=[^&#]*/i,
.replace("?\x26","?");e=g||e||location.href;return window.linkClicked?e:g||document.referrer||"no referrer"}var p=[],t=[],q=1500,v=[],r=sessionStorage.getItem("dataLayerDeferred"),w=document.cookie.match(/notice_gdpr_prefs=/);if(r){sessionStorage.removeItem("dataLayerDeferred");try{r=JSON.parse(r)}catch(g){r=[]}}$(document).ready(function(){q=$(".pageAnalytics").data("callbackDelay")||q});$(document).one("dataLayerEventCatcherInitialized",function(){c()});$(document).one("pageViewTriggered",
;$(document).one("analytic_blocked",;document.addEventListener("dataLayerPostCallback",;SAP.sapdx.analytics.datalayer.addCallback=SAP.sapdx.analytics.datalayer.triggerEvent=function(g,e,n){var u=Object.keys(e.events).some(;n&&e.events&&SAP.sapdx.analytics.datalayer.addCallback(n,Object.keys(e.events));var y,x;u&&!(null==(y=SAP.sapdx.analytics.datalayer)?
0:null==(x=y.pageview)?0:x.wasTriggered)?SAP.sapdx.analytics.datalayer.sccPendingEvents?SAP.sapdx.analytics.datalayer.sccPendingEvents.push(e):SAP.sapdx.analytics.datalayer.sccPendingEvents=[e]:(SAP.sapdx.analytics.datalayer.applyGlobalAnalyticsVariables(g,e),SAP.sapdx.login.analytics.userDetails(e),b(g,e))};SAP.sapdx.analytics.datalayer.triggerDeferredEvent=function(g,e){w||v.push({name:g,object:e});SAP.sapdx.analytics.datalayer.triggerEvent(g,e)};SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects=
function(g,e){if(e.events)for(var n in e.events)g.events[n]=e.events[n];return Object.assign(e,g)};SAP.sapdx.analytics.datalayer.applyGlobalAnalyticsVariables=function(g,e){if("trackData"===g){e.page=e.page||{};var n=n||{};h(e,["pageView"])&&(n=e.page);e.asset&&e.asset.ID&&(e.asset.ID=e.asset.ID.substring(0,256));h(e,["pageView","downloadAttempt"])&&document.dispatchEvent(new CustomEvent("triggerAccountProfilingCountingActivitiesFlow",{detail:e}));e.page.name=e.page.name||n.name||$(".pageAnalytics").data("everyPageAnalyticsPageName");
e.page.section=e.page.section||n.section||$(".pageAnalytics").data("pageSection");e.page.language=e.page.language||n.language||$("html").attr("lang").toLowerCase();e.page.country=e.page.country||n.country||$(".pageAnalytics").data("countryCode");e.page.url=e.page.url||n.url||window.location.href;g=e.page.referrer||n.referrer||SAP.sapdx.gating.analytics.getReferrerForEveryPageTracking();g=k(g);h(e,["pageView","registration"])||(g=e.page.url||n.url||window.location.href);n=g;g=e.page.url;g=(g=g.includes("external-widget")&&
$.deparam.querystring(g)["external-site"])&&!h(e,["formView","formSubmit"])?atob(g):n;if(g=m(g))e.page.referrer="no referrer"===g?"":g}}})();
$(function(){function a(){if(!$(".proxy-page").length)try{var b=sessionStorage.getItem("dataLayerObject")?JSON.parse(sessionStorage.getItem("dataLayerObject")):null;b&&(window.ANALYTIC_SESSION_OBJECT=!0,SAP.sapdx.analytics.datalayer.triggerEvent("trackData",b),sessionStorage.removeItem("dataLayerObject"),window.ANALYTIC_SESSION_OBJECT=!1)}catch(c){console.warn(c)}}SAP.sapdx.Authentication.subscribeFirst({logic:function(){SAP.sapdx.analytics.launch.applyAnalyticsWhenReady(a)},plugin:SAP.sapdx.Observer.Plugin.onlyOnce()})});
namespace("SAP.sapdx.gating.analytics");SAP.sapdx.gating.analytics.isIdsReferrer=function(a){if(!a)return!1;var b=(document.querySelector("div.assetAnalytics")||{}).dataset;if(!b||!b.sapAccountDomains)return!1;var c=a.split(/[?#]/)[0].toLowerCase();return b.sapAccountDomains.slice(1,-1).split(",").some(};SAP.sapdx.gating.analytics.getRefererAfterLoginFlow=function(a){return a?SAP.sapdx.gating.analytics.isNotSAPReferrer(a)?location.href:a:location.href};
SAP.sapdx.gating.analytics.getReferrerForEveryPageTracking=function(){return SAP.sapdx.gating.analytics.getReferrerForInterimPages(document.referrer||SAP.documentReferrerBackup||"")||""};SAP.sapdx.gating.analytics.getReferrerForInterimPages=function(a){eturn a&&-1!==a.indexOf(".proxy.html")||b(a)?b(parent.location.href)?"":parent.location.href:a};
SAP.sapdx.gating.analytics.getReferrer=function(a,b){b&&(SAP.sapdx.gating.analytics.isNotSAPReferrer=b);b=location.href;var c=SAP.sapdx.gating.analytics.isIdsReferrer(document.referrer),d=sessionStorage.getItem("initial_page"),f=$.deparam.querystring()||{};try{a?b=SAP.sapdx.gating.analytics.getOpenedByClickReferrer(b):c?b=SAP.sapdx.gating.analytics.getRefererAfterLoginFlow(d):f["external-site"]?b=atob(f["external-site"]):window.location.href.includes("/embed/")?b=!!SAP.sapdx.gating.analytics.isNotSAPReferrer&&
!SAP.sapdx.gating.analytics.isNotSAPReferrer(document.referrer)&&document.referrer||b:parent.document.referrer&&SAP.sapdx.gating.analytics.isNotSAPReferrer&&(b=SAP.sapdx.gating.analytics.isNotSAPReferrer(parent.document.referrer)&&parent.location.href||parent.document.referrer||b),b||(b=parent.location.href)}catch(l){console.error("Warning: can't get referrer: "+l)}return b};
SAP.sapdx.gating.analytics.isNotSAPReferrer=function(a){try{a=a||document.referrer;if(!a)return!0;if(~a.indexOf(window.location.host.toLowerCase()))return!1;var b=$(".assetAnalytics").data("sapAccountDomains"),c=$(".assetAnalytics").data("sapGlobalDomains");if(!b||!c)throw"ERROR: Cannot fetch lists of sap domains for external referrer";var d=b.slice(1,-1).split(",").concat(c.slice(1,-1).split(","));for(b=0;b<d.length;b++)if(~a.indexOf(d[b].trim().toLowerCase()))return!1;return!0}catch(f){window.console&&
console.error(f)}};SAP.sapdx.gating.analytics.getKey=SAP.sapdx.gating.analytics.getBrokenParam=function(a,b){if(b&&b.passingVars)return b.passingVars[a];b=SAP.sapdx.gating.analytics.getKey(new RegExp(".*"+a),$.deparam.querystring());if(1===b.length)return $.deparam.querystring()[b];if(1<b.length)return a=SAP.sapdx.gating.analytics.getKey(new RegExp("(?:^|;)"+a+"$"),$.deparam.querystring()),$.deparam.querystring()[a]};
SAP.sapdx.gating.analytics.getOpenedByClickReferrer=function(a){return SAP.wcm.form.external?SAP.sapdx.gating.analytics.getBrokenParam("external-referer")||a:window.location.href};SAP.sapdx.gating.analytics.isLightbox=
SAP.sapdx.gating.analytics.isInGatingFlowForAsset=function(a){var b=SAP.wcm.form.gating.cookies.getCookie("user-in-gating-flow");b&&(document.cookie='user-in-gating-flow\x3d""; path\x3d/; domain\x3d'+document.domain+"; secure");return a&&a===b};
SAP.sapdx.gating.analytics.isAssetOrTrialFlow=function(a){var b=/assetdetail([0-9\/]+)([A-z0-9-]+)(.gate|.rc.*).html/;a=decodeURIComponent(a);var c=/registration\/trial.([A-z0-9-]+).html/.test(a);c&&SAP.sapdx.analytics.ResourceContext.TRIAL();return/(\/(documents|docs\/download)([0-9\/]+))([A-z0-9-]+)/.test(a)||c||b.test(a)};
SAP.sapdx.gating.analytics.setAnalyticsGatedAsset=function(a){var b={assetId:a.assetId,crmCode:a.crmCode||"Non CRM Code Value",digitalLibraryID:a.digitalLibraryID||"No Digital Library ID",externalPath:a.external_path};a.detailpageUrl&&(b.detailpageUrl=a.detailpageUrl);sessionStorage.setItem("analyticsGatedAsset",JSON.stringify(b))};
SAP.sapdx.gating.analytics.isGatedExternalLink=function(){var a=sessionStorage.getItem("analyticsGatedAsset")&&JSON.parse(sessionStorage.getItem("analyticsGatedAsset"));return!!(a&&a.externalPath&&a.assetId&&a.assetId===$.deparam.querystring().assetId)};SAP.sapdx.gating.analytics.fillDataLayerParams=function(a,b){a&&a.asset&&(a.asset.ID=b.externalPath,a.asset.digitalLibraryID=b.digitalLibraryID)};
SAP.sapdx.gating.analytics.login=function(a,b,c){SAP.sapdx.login.analytics.updateStatusLogin();var d=$.deparam.querystring(a.location.href),f=d.gated_resource_path||d.gated_asset_path||d.trial||d.restricted,l=SAP.sapdx.gating.analytics.isAssetOrTrialFlow(f),h=SAP.sapdx.gating.analytics.extractItemId(f);d=function(g){return SAP.sapdx.gating.analytics.isAssetOrTrialFlow(f)?null:g["pdf-asset"]||g.video||SAP.sapdx.gating.analytics.extractItemId(a.location.href)}(d);var k=sessionStorage.getItem("dl_useractivating")&&
!0;k&&(sessionStorage.removeItem("dl_useractivating"),sessionStorage.removeItem("dl_formName"));var m={events:{login:!0},asset:{},form:{}},p=a.SAP.sapdx.gating.trials&&a.SAP.sapdx.gating.trials.dl_formName||sessionStorage.dl_formName||a.getFormEngineFieldValue&&a.getFormEngineFieldValue("formname");p&&(m.form.name=p);k&&(m.events.emailActivation=!0);p=sessionStorage.getItem("analyticsGatedAsset")&&JSON.parse(sessionStorage.getItem("analyticsGatedAsset"));if(h&&l||d||c&&c.assetId)m.asset.ID=h||d||
c.assetId,m.asset.page=SAP.sapdx.analytics.assetPage.getPath();(function(g){var e=-1!==window.location.href.indexOf("/registration/protected/no-authorization"),n=document.cookie.match("(gated-asset-id)\x3d([^;]+)"),u=n&&n[2];!g.asset.ID&&u&&e&&(g.asset.ID=n[2])})(m);(function(g,e,n){var u=g.asset.ID||!!e&&(e.externalPath||e.assetId)||"";u?(g.asset.ID=u,g.asset.digitalLibraryID=e&&e.digitalLibraryID?e.digitalLibraryID:"No Digital Library ID",g.asset.page=SAP.sapdx.analytics.assetPage.getPath()):n&&
n.digitalLibraryID&&g.asset.ID&&(g.asset.digitalLibraryID=n.digitalLibraryID,g.asset.page=SAP.sapdx.analytics.assetPage.getPath())})(m,p,c);(function(g,e,n){e&&g.asset.ID?g.asset.crmCode=e.crmCode?e.crmCode:SAP.sapdx.gating.assets.links.core.constants.CRM_CODE_DEFAULT_VALUE:n&&g.asset.ID&&(g.asset.crmCode=n.crmCode?n.crmCode:SAP.sapdx.gating.assets.links.core.constants.CRM_CODE_DEFAULT_VALUE)})(m,p,c);SAP.sapdx.gating.analytics.softwareDownloadIDTrial(a.location.href,m);SAP.sapdx.gating.analytics.trialFlowWithBlockedThirdPartyCookie(a.location.href,
b,k);SAP.sapdx.restricting.analytics.fillDataLayerAccountFinalizationRCParams(m);var t,q,v,r,w;null==(t=window.SAP)||null==(q=t.sapdx)||null==(v=q.analytics)||null==(r=v.tierEvent)||null==(w=r.addTierEventDataToAnalyticsObject)||w.call(r,m,c);m.asset.ID&&SAP.sapdx.analytics.ResourceContext.mergeIntoDatalayerObject(m,{allowWithEvent:"login"});if(k&&b||b)return sessionStorage.removeItem("dl_formName"),m;a.SAP.sapdx.gating.trials.dl_formName="";sessionStorage.removeItem("dl_formName");SAP.sapdx.analytics.datalayer.triggerEvent("trackData",
m)};SAP.sapdx.gating.analytics.softwareDownloadIDTrial=function(a,b){var c=a&&$.deparam.querystring(a),d=c&&c.gated_resource_path&&$.deparam.querystring(c.gated_resource_path).id,f=c&&c.trial&&$.deparam.querystring(c.trial).id;c=c&&(d||f||c.id);/.*(trial\.[-0-9a-z])+.*/.test(unescape(a))&&b.asset&&c&&(b.asset.softwareDownloadID=c)};
SAP.sapdx.gating.analytics.trialFlowWithBlockedThirdPartyCookie=function(a,b,c){var d=a&&$.deparam.querystring(a);!d.trial||c||"undefined"===typeof b||d.trialFlow||history.replaceState(null,null,$.param.querystring(a,{trialFlow:!0}))};
SAP.sapdx.gating.analytics.fillAdditionalDataToParametersAndSendAnalytics=function(a,b){a.events={};a.events.SMCInteraction=!0;a.SMC={};a.SMC.interactionID=b.TransactionID;a.SMC.interactionType=b.IA_TYPE||"No Interaction Type Value";a.SMC.itemsOfInterest=SAP.sapdx.gating.analytics.parseIOI(b.INTEREST_ITEM);a.SMC.interactionReason=b.IA_REASON||"No IA_Reason Value";a.SMC.crmCode=b.AnalyticsCampaignCode||"No CRM Code";SAP.sapdx.analytics.ResourceContext.mergeIntoDatalayerObject(a,{allowWithEvent:"SMCInteraction"});
SAP.sapdx.analytics.datalayer.triggerEvent("trackData",a)};SAP.sapdx.gating.analytics.parseIOI=function(a){return a?a.split("|").filter(function(b,c){if(3>c)return b}):["No Item of Interest Value"]};
SAP.sapdx.gating.analytics.afterHybrisAsset=function(a,b,c){var d={asset:{}};a=$.deparam.querystring(a);a.assetId&&(d.asset.ID=a.assetId,d.asset.page=SAP.sapdx.analytics.assetPage.getPath(),d.asset.crmCode=c&&c.crmCode?c.crmCode:SAP.sapdx.gating.assets.links.core.constants.CRM_CODE_DEFAULT_VALUE);a=sessionStorage.getItem("analyticsGatedAsset")&&JSON.parse(sessionStorage.getItem("analyticsGatedAsset"));sessionStorage.removeItem("analyticsGatedAsset");d.asset.digitalLibraryID=a?a.digitalLibraryID:c&&
c.digitalLibraryID?c.digitalLibraryID:"No Digital Library ID";SAP.sapdx.gating.analytics.fillAdditionalDataToParametersAndSendAnalytics(d,b)};
SAP.sapdx.gating.analytics.afterHybrisExternalPage=function(a,b,c){a={asset:{ID:b.ASSET_URL,crmCode:c.crmCode||SAP.sapdx.gating.assets.links.core.constants.CRM_CODE_DEFAULT_VALUE,digitalLibraryID:c.digitalLibraryID||SAP.sapdx.gating.assets.links.core.constants.NO_DIGITAL_LIBRARY_ID,page:SAP.sapdx.analytics.assetPage.getPath()}};sessionStorage.removeItem("analyticsGatedAsset");SAP.sapdx.gating.analytics.fillAdditionalDataToParametersAndSendAnalytics(a,b)};
SAP.sapdx.gating.analytics.substractItemIdFromSrc=function(){var a=/(\/|trial\.)([A-z0-9-]+)(\.gate)?(\.html.*|\.pdf)/,b=$(".popup-container iframe")[0];b=b?b.src:void 0;return a.test(b)?b.match(a)[2]:""};
SAP.sapdx.gating.analytics.extractItemId=function(a){var b=/(.*\/(documents|docs\/download)([0-9\/]+)\/)([A-z0-9-]+)/,c=/registration\/trial.([A-z0-9-]+).html/,d=/assetdetail([0-9\/]+)\/([A-z0-9-]+)(.gate|.rc.*).html/;a=decodeURIComponent(a);return b.test(a)?a.match(b)[4]:c.test(a)?a.match(c)[1]:d.test(a)?a.match(d)[2]:""};namespace("SAP.sapdx.restricting.analytics");
SAP.sapdx.restricting.analytics.fillDataLayerAccountFinalizationRCParams=function(a){var b=$.deparam.querystring()["rc-url"];a&&b&&(SAP.sapdx.analytics.assetPage.setPath(!1),SAP.sapdx.analytics.ResourceContext.RESTRICTED(),b=-1!==b.indexOf("?")&&$.deparam.querystring(b)||{},a.asset=a.asset||{},a.asset.ID=b["rc-assetid"]||"",a.asset.digitalLibraryID=b["rc-dglid"]||"No Digital Library ID",a.asset.ID&&(a.asset.page=SAP.sapdx.analytics.assetPage.getPath(),a.asset.crmCode=b["rc-crmcode"]||"Non CRM Code Value"))};
$(function(){function a(){var b=document.cookie.match("gated-asset-id\x3d([^;]+)"),c=document.cookie.match("(user-in-gating-flow)\x3d([^;]+)");if(b&&b[1]){if('""'!==b[1]&&(!c||b[1]!==c[2])){SAP.sapdx.analytics.ResourceContext.GATED();SAP.sapdx.analytics.assetPage.setPath(!1);c=document.createElement("div");c.setAttribute("data-asset-id",b[1]);c.setAttribute("data-sap-digital-id","No Digital Library ID");b={isOpenedByClick:!1};var d=sessionStorage.getItem("analyticsGatedAsset")&&JSON.parse(sessionStorage.getItem("analyticsGatedAsset")),
f=getCookie("crm_code");b.crmCode=d&&d.crmCode?d.crmCode:f;SAP.sapdx.analytics.datalayer.gating.triggerAnalytic($(c),b,{typeAsset:"noAuthorization"})}c=new Date;c.setDate(c.getDate()-1);document.cookie="gated-asset-id\x3d; expires\x3d"+c.toUTCString()+"; path\x3d/; domain\x3d"+document.domain;document.cookie="user-in-gating-flow\x3d; expires\x3d"+c.toUTCString()+"; path\x3d/; domain\x3d"+document.domain;document.cookie="crm_code\x3d; expires\x3d"+c.toUTCString()+"; path\x3d/; domain\x3d"+document.domain}}
-1!==location.pathname.indexOf("registration")&&SAP.sapdx.Authentication.subscribe({logic:plugin:SAP.sapdx.Observer.Plugin.onlyOnce()})});namespace("SAP.sapdx.analytics.datalayer.pageview");
$(document).ready(function(){function a(){SAP.sapdx.analytics.datalayer.pageview.wasTriggered=!0;document.dispatchEvent(new Event("pageViewTriggered"))}document.addEventListener("click",function(b){var c=window;b=(b=b.srcElement||b.target)&&b.tagName&&("A"===b.tagName.toUpperCase()||"BUTTON"===b.tagName.toUpperCase()||"SPAN"===b.tagName.toUpperCase()||"INPUT"===b.tagName.toUpperCase()||"IMAGE"===b.tagName.toUpperCase()||"SHAPE"===b.tagName.toUpperCase()||"SUBMIT"===b.tagName.toUpperCase()||"IMG"===
b.tagName.toUpperCase());c.linkClicked=b});SAP.sapdx.analytics.datalayer.pageview.trackPageView=function(b){var c=$("html").data().excludeAnalytics;if(window.location.pathname.includes("external-widget")||c)return a(),!1;c=$(".pageAnalytics");var d=c.data("countryCode"),f=c.data("pageSection"),l=c.data("everyPageAnalyticsPageName"),h=c.data("pageTemplate");c=c.data("events");var k=SAP.sapdx.gating.analytics.getReferrerForEveryPageTracking(),m=SAP.sapdx.analytics.cookies.parseAnalyticUrlId(CQ.shared.HTTP.getParameter(window.location.href,
"url_id")),p=($("html").attr("lang")||"undefined").toLowerCase(),t=[];b&&b.page&&b.page.language&&(p=b.page.language);b&&b.page&&b.page.referrer&&(k=b.page.forceRewriteReferrer?b.page.referrer:k||b.page.referrer);var q={events:{pageView:!0},page:{name:l,template:h,section:f,language:p,country:d,url:window.location.href}};d=SAP.sapdx.analytics.pageViewExtra;var v=SAP.sapdx.analytics.datalayer.sccPendingEvents;f=sessionStorage.getItem("pageViewExtra");d&&(q=SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects(q,
JSON.parse(d)));f&&(sessionStorage.removeItem("pageViewExtra"),q=SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects(q,JSON.parse(f)));f=!!sessionStorage.getItem("isNotFirstPageHeroLoad");l=sessionStorage.getItem("viewedHeroSpaceProductCategory");!f&&l?q=SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects(q,JSON.parse(l)):sessionStorage.setItem("SendHeroSpaceAnalytics",JSON.stringify(!0));b&&(q=SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects(q,b));k&&(q.page.referrer=k);m&&(q.events.campaign=
!0,q.campaign={internal:m});var r,w,g,e,n;null==(r=window.SAP)||null==(w=r.sapdx)||null==(g=w.analytics)||null==(e=g.tierEvent)||null==(n=e.addTierEventDataToAnalyticsObject)||n.call(e,q);b=$.deparam.querystring(window.location.href);b.gating_flow||b.trialFlow||b.eventFlow||!SAP.sapdx.login.analytics.updateStatusLogin()?localStorage.removeItem("loginAfterEmailAtStart"):(SAP.sapdx.restricting.links.core.isAfterEmailAtStartFlow()&&localStorage.setItem("loginAfterEmailAtStart","true"),b["rc-url"]&&b.analytic_asset_path&&
SAP.sapdx.analytics.assetPage.setPath(!1),b.gating_external_flow&&b.gated_resource_path&&b.analytic_asset_path?(SAP.sapdx.analytics.assetPage.setPath(!1),SAP.sapdx.analytics.ResourceContext.GATED(),r=$.deparam.querystring(b.gated_resource_path).gl,SAP.sapdx.gating.analytics.setAnalyticsGatedAsset({external_path:r}),r=SAP.sapdx.gating.analytics.login(window,!0,{gatingExternalFlow:!0})):r=SAP.sapdx.gating.analytics.login(window,!0),q=SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects(q,r));var u,
y;b.blockedEvent&&(null==(u=window.SAP.sapdx.analytics)?0:null==(y=u.tierEvent)?0:y.addTierEventErrorAnalytics)&&t.push(window.SAP.sapdx.analytics.tierEvent.addTierEventErrorAnalytics);null==c||c.split(",").forEach(;SAP.sapdx.analytics.ResourceContext.mergeIntoDatalayerObject(q,d?{allowWithEvent:"pageView"}:null);t.reduce(Promise.resolve(q)).then(function(){SAP.sapdx.analytics.datalayer.triggerEvent("trackData",q);a();sessionStorage.setItem("isNotFirstPageHeroLoad",
JSON.stringify(!0));null==v||v.forEach(;addEventListener("beforeunload",})}});namespace("SAP.sapdx.analytics.datalayer.gating");
(function(){SAP.sapdx.analytics.datalayer.gating.triggerAnalytic=function(a,b,c,d){a=$(a);var f={events:{},asset:{}},l=SAP.sapdx.Authentication;f.asset.page=SAP.sapdx.analytics.assetPage.getPath();var h=a.data("asset-id"),k=a.data("crm-code"),m=a.data("analytics-assetid")||a.data("analyticsassetid");!h&&m&&(h=m.split("|")[0]);b.isFromGatedFlow||b.isRestrictingTYP||SAP.sapdx.analytics.emailAtStart.checkEmailAtStartFlow()||(f.events.downloadAttempt=!0);b.detailpageUrl&&f.events.downloadAttempt&&(f.asset.detailpageUrl=
b.detailpageUrl);h?f.asset.ID=h:!h&&a[0]&&(f.asset.name=a[0].href);"pdf"===(c.typeAsset?c.typeAsset:"pdf")&&(f.events.pdfPreview=!0,f.page={url:$.param.querystring(a[0].baseURI,{"pdf-asset":f.asset.ID,page:1})});(a=a.data("sap-digital-id"))&&f.asset.ID&&(f.asset.digitalLibraryID=a);c&&c.url_id&&!b.isFromGatedFlow&&!b.isRestrictingTYP&&(f.events.campaign=!0,f.campaign={},f.campaign.internal=c.url_id,SAP.sapdx.analytics.cookies.checkAndSetCookie("url_id",c.url_id));f.asset.ID&&(f.asset.crmCode=k?k:
b&&b.crmCode?b.crmCode:"Non CRM Code Value");b.pageView=d;document.dispatchEvent(new CustomEvent("rcAnalytics.setRestrictedAssetTokenConsumption",{detail:{analyticsParameters:f,options:b,callback:function(p,t){t&&t.pageView?l.subscribe({logic:plugin:SAP.sapdx.Observer.Plugin.onlyOnce()}):(SAP.sapdx.analytics.ResourceContext.mergeIntoDatalayerObject(p),SAP.sapdx.analytics.datalayer.triggerEvent("trackData",p))}}}))}})();
$(function(){$(document).on("click","a",function(){var a=$(this).attr("href");if(a&&!$(this).attr("data-logon-link")){var b=!!this.host&&this.host!==window.location.host,c=!this.host&&!a.startsWith("tel:");if(b||a.startsWith("tel:")){b=SAP.sapdx.analytics.datalayer;var d=b.triggerEvent,f={events:{exit:!0},exit:{link:a}};a.startsWith("tel:")&&(f.events.phoneNumber=!0);d.call(b,"trackData",f)}c&&SAP.sapdx.analytics.datalayer.triggerEvent("trackData",{events:{activityMap:!0}})}})});
$(function(){function a(){var b=$(this),c=b.data("shareTrackingAnalytics").toUpperCase()||"SHARE",d=b.data("shareChannel")||"";var f=b.attr("data-share-url");var l=b.attr("href")||f||location.href;var h="mailto"===d&&l.match(/mailto:.*?[&?]body=/);if("FOLLOW"===c)l=b.attr("href");else{h&&(l=$.deparam.querystring(b.attr("href")).body);h&&f&&(l=f);b:{b=["shareId","sharedId","pdf-asset","video"];f=$.deparam.querystring(l);for(h=0;h<b.length;h++)if(f[b[h]]){b=f[b[h]];break b}b=void 0}b||(b=l,b.match(/youtube/i)?
(f=$.deparam.querystring(b).v,b=$.param.querystring(b.split("?")[0],""!==f&&{v:f})):b=void 0);l=b||l.split("?")[0]}SAP.sapdx.analytics.datalayer.triggerEvent("trackData",{events:{socialInteraction:!0},social:{type:c,platform:"mailto"===d?"email":d,target:l}})}$(document).on("click","a[data-share-tracking-analytics]",a);$(document).on("keydown","a[data-share-tracking-analytics]",});namespace("SAP.sapdx.login.analytics");
SAP.sapdx.login.analytics.constants={login:"logY",logout:"logN",profile:{relationshipToSAP:"relationship",industryCrm:"industry",department:"department",jobFunction:"jobFunction",IDS:"IDS",UID:"UID"},defaultUserValue:{login:"UID/IDS Data Not Available",logout:"visitor"}};
SAP.sapdx.login.analytics.userDetails=function(a){var b=SAP.sapdx.login.analytics.constants,c=SAP.sapdx.Authentication.isAuthenticated()?b.login:b.logout,d=SAP.sapdx.login.analytics.getActualUserDetails(c);a.user=a.user||{};a.user.loginStatus=c;SAP.sapdx.login.analytics.setCookieParameterToAnalyticsData("marketoLeadID","LeadID",a.user);SAP.sapdx.Authentication.isAuthenticated()?(a.user.role=d&&d.type||b.defaultUserValue.login,Object.entries(b.profile).forEach(function(f){var l=f[0];a.user[f[1]]=d&&
d[l]||b.defaultUserValue.login})):a.user.role=b.defaultUserValue.logout;return a};
SAP.sapdx.login.analytics.updateStatusLogin=function(){var a=SAP.sapdx.login.analytics,b=a.getSessionStorageItem("loginStatus",!1);a.loginStatusAfterLoadPage=a.loginStatusAfterLoadPage||b;var c=SAP.sapdx.Authentication.isAuthenticated(),d=c?a.constants.login:a.constants.logout,f=a.getSessionStorageItem("profile",!0);c&&!b&&SAP.sapdx.gating.analytics.isIdsReferrer(document.referrer)&&(b=localStorage.getItem("loginStatus"));localStorage.setItem("loginStatus",d);sessionStorage.setItem("loginStatus",
d);d===a.constants.logout&&f&&sessionStorage.removeItem("profile");if(a=d===a.constants.login&&b===a.constants.logout)b=new XMLHttpRequest,b.open("GET","/bin/sapdx/profile/updatevisit",!1),b.send();return a};SAP.sapdx.login.analytics.getUserDataByParam=
SAP.sapdx.login.analytics.getActualUserDetails=function(a){var b=SAP.sapdx.login.analytics,c=b.getSessionStorageItem("profile",!0);if(!c&&a===b.constants.login||c&&c.IDS!==b.getUserDataByParam("IDS"))b.requestProfileParameters(),c=b.getSessionStorageItem("profile",!0);return c};SAP.sapdx.login.analytics.getSessionStorageItem=function(a,b){a=sessionStorage.getItem(a);return b?a?JSON.parse(a):null:a};
SAP.sapdx.login.analytics.requestProfileParameters=function(){var a=new XMLHttpRequest;a.open("GET","/bin/sapdx/user/profile.json",!1);a.onload=function(){if(200===a.status){var b=a.responseText;b&&sessionStorage.setItem("profile",b)}};a.send()};SAP.sapdx.login.analytics.setCookieParameterToAnalyticsData=function(a,b,c){(b=getCookie&&getCookie(b))&&(c[a]=b)};
$(window).on("load",function(){var a=".csv .bin .jar .rar .exe .zip .wav .mp3 .mov .mpg .avi .wmv .pdf .doc .docx .xls .xlsx .ppt .pptx .xml".split(" ").map(.join(", "),b=/^([a-z0-9]+-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+)\|/,c=/docs\/download\/agreements/,d=/docs\/download\/investors/,f=/docs\/download\/engage/,l=/bin\/sapdxc\/proxy\.inmsl\.attachment\./;$(document).on("click.downloadLink",a,function(h){h=$(h.currentTarget);var k=
h.attr("href"),m="download-link"===h.attr("id")||"_blank"===h.attr("target")||l.test(k);if(k&&(!k||-1===k.indexOf(".pdf")||m)){m=h.attr("data-analytics-assetid")||"";var p=b.test(m)&&b.exec(m)[1]||k.replace(/((f|ht)tps?:\/\/)/,"");var t=k.startsWith("//")?"https:":k.startsWith("/")?location.origin:"";p&&SAP.sapdx.analytics.assetPage.setPath(!0);p={events:{downloadSuccess:!0},asset:{page:SAP.sapdx.gating.analytics.getReferrer(!0),ID:p,detailpageUrl:t.concat(k)}};p.asset.digitalLibraryID=h.attr("data-sap-digital-id")||
"No Digital Library ID";m&&h.hasClass("download")||(p.events.downloadAttempt=!0);(c.test(k)||d.test(k)||f.test(k)||l.test(k))&&SAP.sapdx.analytics.ResourceContext.FREE();SAP.sapdx.analytics.ResourceContext.mergeIntoDatalayerObject(p);SAP.sapdx.analytics.datalayer.triggerEvent("trackData",p)}})});
(function(){var a=function(){var c=$(this),d=c.is("g")?c.attr("data-title")||c.parents("svg").find("title").text():c.attr("data-title"),f=c.attr("data-name"),l=c.attr("data-destination-url")||"javascript:void(0);";c=c.is("g")?c.attr("data-infographic-name")||"Infographic":c.attr("data-infographic-name");c=$('\x3cdiv data-activity-map-region\x3d"'+c+'" /\x3e');d=$('\x3ca href\x3d"'+l+'" onclick\x3d"event.preventDefault()" data-activity-map-title\x3d"'+d+"|"+f+'" /\x3e');d[0].host&&d[0].host===window.location.host||
(c.append(d),$($(".interactiveInfographic")[0]).append(c),d[0].click(),c.remove())},b=function(c){(new MutationObserver(function(d){d.forEach(function(f){f.addedNodes.forEach(function(l){var h=$(l);h.is('[data-tracking\x3d"true"]')&&l.addEventListener("click",a,!0);h.find('[data-tracking\x3d"true"]').each(function(){this.addEventListener("click",a,!0)})})})})).observe(c,{childList:!0,subtree:!0})};$(document).ready(})();
$(function(){function a(){l.subscribeFirst({logic:function(){f=!0;window.AnalyticsDataLayer=b;SAP.sapdx.analytics.datalayer.pageview.trackPageView(b);var k=new CustomEvent("sap_load_analytics_ready",{bubbles:!0,cancelable:!0,detail:{}});document.dispatchEvent(k)},context:null,plugin:SAP.sapdx.Observer.Plugin.onlyOnce()})}var b,c=0,d,f=!1,l=SAP.sapdx.Authentication;if(!$(".proxy-page").length){var h=$.deparam.querystring(window.location.href);if(d=$("[data-delayed-load-analytics]").length||h.restrictingTYP?
1:0)$(document).on("onloadDelayedTracking",function(k,m){c++;k=m||k.detail;b=b?SAP.sapdx.analytics.datalayer.mergeAnalyticsDataObjects(b,k):k;if(c===d&&!f)if(window.SAP.analytic_loaded)a();else $(document).on("analytic_loaded",a)});else l.subscribe({logic:plugin:SAP.sapdx.Observer.Plugin.onlyOnce()})}});
$(function(){if(sessionStorage.initAnalytics){var a=JSON.parse(sessionStorage.initAnalytics);delete sessionStorage.initAnalytics}if(a){var b=function(c){$.each(a||{},};window.s?b(window.s):(window.sap||(window.sap={}),b(window.sap))}});