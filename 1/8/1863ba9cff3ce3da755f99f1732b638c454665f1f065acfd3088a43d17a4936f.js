// For license information, see `https://assets.adobedtm.com/b6239048e5c3/7e3c0cb78756/launch-c44cd1358a69.js`.
window._satellite=window._satellite||{},window._satellite.container={buildInfo:{minified:!0,buildDate:"2023-12-15T15:22:18Z",turbineBuildDate:"2023-02-22T20:37:26Z",turbineVersion:"27.5.0"},environment:{id:"ENb1535eebbf8e4c0b8cd9aeda5e8322f5",stage:"production"},dataElements:{pageLanguage:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){var e=window.location.pathname.split("/")[2];return"en"==e||"zh"==e||"jp"==e||"kr"==e||"pt"==e||"es"==e||"th"==e||"ko"==e||"ar"==e||"ru"==e||"tc"==e?(console.log(e),e):"en"==(e=window.location.pathname.split("/")[1])||"zh"==e?e:"esg"==e?"en":""}}},utmCampaignName:{modulePath:"core/src/lib/dataElements/queryStringParameter.js",settings:{name:"utm_campaign",caseInsensitive:!0}},pageURL:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){return window.location.href}}},"xdm.scroll dev":{modulePath:"adobe-alloy/dist/lib/dataElements/xdmObject/index.js",settings:{data:{web:{webPageDetails:{pageViews:{value:1}}},_experience:{analytics:{customDimensions:{props:{prop12:"%scrollPercentage%"}}}}},sandbox:{name:"dev-01"}}},getTimeParting:{modulePath:"common-web-sdk-plugins/src/lib/dataElements/gettimeparting.js",settings:{timeZone:""}},getNewRepeat:{modulePath:"common-web-sdk-plugins/src/lib/dataElements/getnewrepeat.js",settings:{daysBeforeReset:"365"}},getTimeSinceLastVisit:{modulePath:"common-web-sdk-plugins/src/lib/dataElements/gettimesincelastvisit.js",settings:{}},utmCampaignMedium:{modulePath:"core/src/lib/dataElements/queryStringParameter.js",settings:{name:"utm_medium",caseInsensitive:!0}},getVisitorDuration:{modulePath:"common-web-sdk-plugins/src/lib/dataElements/getvisitduration.js",settings:{}},getPageName:{modulePath:"common-web-sdk-plugins/src/lib/dataElements/getpagename.js",settings:{siteID:"",delimiter:":",hashVarList:"",queryVarList:""}},referrer:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){return document.referrer}}},getPreviousPageName:{modulePath:"common-web-sdk-plugins/src/lib/dataElements/getpreviousvalue.js",settings:{cookieName:"",variableToCheck:"%getPageName%"}},"xdm.content prod":{modulePath:"adobe-alloy/dist/lib/dataElements/xdmObject/index.js",settings:{data:{web:{webPageDetails:{pageViews:{value:1}}},_experience:{analytics:{customDimensions:{eVars:{eVar1:"%getPageName%",eVar2:"%pageURL%",eVar3:"%division%",eVar4:"%pageLanguage%",eVar5:"%getPreviousPageName%",eVar6:"%pageDomain%",eVar7:"%siteSection%",eVar8:"%siteSubSection%",eVar9:"%referrer%",eVar10:"%getTimeParting%",eVar11:"%getNewRepeat%",eVar12:"%getVisitorDuration%",eVar13:"%utmCampaignSource%",eVar14:"%utmCampaignMedium%",eVar15:"%utmCampaignName%",eVar16:"%utmCampaignContent%",eVar17:"%utmCampaignTerm%",eVar18:"D=mid"},props:{prop1:"%pageTitle%",prop2:"%pageURL%",prop3:"%division%",prop4:"%pageLanguage%",prop5:"%pagePath%",prop6:"%pageDomain%",prop7:"%siteSection%",prop8:"%siteSubSection%",prop9:"%referrer%",prop10:"%getTimeParting%",prop11:"%getTimeSinceLastVisit%",prop13:"%utmCampaignSource%",prop14:"%utmCampaignMedium%",prop15:"%utmCampaignName%",prop16:"%utmCampaignContent%",prop17:"%utmCampaignTerm%",prop18:"D=mid"}}}}},sandbox:{name:"prod"}}},"xdm.scroll prod":{modulePath:"adobe-alloy/dist/lib/dataElements/xdmObject/index.js",settings:{data:{web:{webPageDetails:{pageViews:{value:1}}},_experience:{analytics:{customDimensions:{props:{prop12:"%scrollPercentage%"}}}}},sandbox:{name:"prod"}}},pageDomain:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){return window.location.hostname}}},utmCampaignTerm:{modulePath:"core/src/lib/dataElements/queryStringParameter.js",settings:{name:"utm_term",caseInsensitive:!0}},siteSubSection:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){return window.location.href.split("/").at(-1)}}},siteSection:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){var e=window.location.pathname.replaceAll("/",":");return window.location.hostname.split(".com")[0].split(".")[1]+e}}},pagePath:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:},pageTitle:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){return document.title}}},scrollPercentage:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){const e=(window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100,n=Math.min(100,e);let t="";return n>=25&&n<50?t="25%":n>=50&&n<75?t="50%":n>=75&&n<99?t="75%":n>=99&&(t="100%"),t}}},division:{modulePath:"core/src/lib/dataElements/customCode.js",settings:{source:function(){var e=window.location.pathname.split("/")[1];return"en"==e?"corporate":"corporate"==e||"marketintelligence"==e||"esg"==e||"ratings"==e||"commodityinsights"==e||"mobility"==e||"spdji"==e?e:""}}},utmCampaignSource:{modulePath:"core/src/lib/dataElements/queryStringParameter.js",settings:{name:"utm_source",caseInsensitive:!0}},"xdm.content dev":{modulePath:"adobe-alloy/dist/lib/dataElements/xdmObject/index.js",settings:{data:{web:{webPageDetails:{pageViews:{value:1}}},_experience:{analytics:{customDimensions:{eVars:{eVar1:"%getPageName%",eVar2:"%pageURL%",eVar3:"%division%",eVar4:"%pageLanguage%",eVar5:"%getPreviousPageName%",eVar6:"%pageDomain%",eVar7:"%siteSection%",eVar8:"%siteSubSection%",eVar9:"%referrer%",eVar10:"%getTimeParting%",eVar11:"%getNewRepeat%",eVar12:"%getVisitorDuration%",eVar13:"%utmCampaignSource%",eVar14:"%utmCampaignMedium%",eVar15:"%utmCampaignName%",eVar16:"%utmCampaignContent%",eVar17:"%utmCampaignTerm%",eVar18:"D=mid"},props:{prop1:"%pageTitle%",prop2:"%pageURL%",prop3:"%division%",prop4:"%pageLanguage%",prop5:"%pagePath%",prop6:"%pageDomain%",prop7:"%siteSection%",prop8:"%siteSubSection%",prop9:"%referrer%",prop10:"%getTimeParting%",prop11:"%getTimeSinceLastVisit%",prop13:"%utmCampaignSource%",prop14:"%utmCampaignMedium%",prop15:"%utmCampaignName%",prop16:"%utmCampaignContent%",prop17:"%utmCampaignTerm%",prop18:"D=mid"}}}}},sandbox:{name:"dev-01"}}},utmCampaignContent:{modulePath:"core/src/lib/dataElements/queryStringParameter.js",settings:{name:"utm_content",caseInsensitive:!0}}},extensions:{"ags055-time-spent-and-scroll-depth-combined-event":{displayName:"Time and Scroll Event",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP8aa094323e3c4426bb141257fe809514/",modules:{}},"adobe-alloy":{displayName:"Adobe Experience Platform Web SDK",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP028937a43efe4633a77ae8da95a60e2e/",settings:{instances:[{name:"alloy",edgeConfigId:"d986b729-38b4-426b-9927-94ef23aecffe",targetMigrationEnabled:!0,developmentEdgeConfigId:"74f53963-cb88-4e9f-8a32-b55cc90d93a3"}]},modules:{"adobe-alloy/dist/lib/dataElements/xdmObject/index.js":{name:"xdm-object",displayName:"XDM object",script:,"adobe-alloy/dist/lib/actions/sendEvent/index.js":{name:"send-event",displayName:"Send event",script:,"adobe-alloy/dist/lib/instanceManager/index.js":{script:,"adobe-alloy/dist/lib/actions/sendEvent/createSendEvent.js":{script:,"adobe-alloy/dist/lib/index.js":{script:,"adobe-alloy/dist/lib/utils/createGetConfigOverrides.js":{script:,"adobe-alloy/dist/lib/utils/clone.js":{script:,"adobe-alloy/dist/lib/alloy.js":{script:,"adobe-alloy/dist/lib/instanceManager/createInstanceManager.js":{script:,"adobe-alloy/dist/lib/instanceManager/injectWrapOnBeforeEventSend.js":{script:,"adobe-alloy/dist/lib/createEventMergeIdCache.js":{script:,"adobe-alloy/dist/lib/createSendEventCallbackStorage.js":{script:,"adobe-alloy/dist/lib/createVariableStore.js":{script:}},"common-web-sdk-plugins":{displayName:"Common Web SDK Plugins",
hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP72fbeb9839644a1daa8eca9f84e02dcf/",modules:{"common-web-sdk-plugins/src/lib/dataElements/gettimeparting.js":{name:"gettimeparting",displayName:"getTimeParting",script:function(e){"use strict";function n(e){if("-v"===e)return{plugin:"getTimeParting",version:"7.0.0"};e=document.documentMode?void 0:e||"Etc/GMT";var n=(new Date).toLocaleDateString("en-US",{timeZone:e,minute:"numeric",hour:"numeric",weekday:"long",day:"numeric",year:"numeric",month:"long"}),t=/([a-zA-Z]+).*?([a-zA-Z]+).*?([0-9]+).*?([0-9]+)(.*?)([0-9])(.*)/.exec(n);return"year="+t[4]+" | month="+t[2]+" | date="+t[3]+" | day="+t[1]+" | time="+(t[6]+t[7])}e.exports=function(e){return n(e.timeZone)}}},"common-web-sdk-plugins/src/lib/dataElements/getnewrepeat.js":{name:"getnewrepeat",displayName:"getNewRepeat",script:,"common-web-sdk-plugins/src/lib/dataElements/gettimesincelastvisit.js":{name:"gettimesincelastvisit",displayName:"getTimeSinceLastVisit",script:,"common-web-sdk-plugins/src/lib/dataElements/getvisitduration.js":{name:"getvisitduration",displayName:"getVisitDuration",script:function(e,n,t){"use strict";function r(){if(arguments&&"-v"===arguments[0])return{plugin:"getVisitDuration",version:"3.0.0"};var e=(new Date).getTime(),n=o.get("s_dur"),t=0;return(isNaN(n)||e-n>18e5)&&(n=e),t=e-n,o.set("s_dur",n+"",{expires:30}),0===t?"first hit of visit":0===(t=Math.floor(t/6e4))?"less than a minute":1===t?"1 minute":t+" minutes"}const o=t("@adobe/reactor-cookie");e.exports=function(){return r()}}},"common-web-sdk-plugins/src/lib/dataElements/getpagename.js":{name:"getpagename",displayName:"getPageName",script:function(e){"use strict";function n(e,n,t,r){if("-v"===e)return{plugin:"getPageName",version:"5.0.0"};location.href;var o=location.hostname,i=location.pathname.substring(1).split("/"),a=i.length,c=location.search.substring(1).split("&"),u=c.length,s=location.hash.substring(1).split("&"),d=s.length,l=(r=r||"|",e||o);if(n=n||"",t=t||"",1===a&&""===i[0])l=l+r+"home";else for(var f=0;f<a;f++)l=l+r+decodeURIComponent(i[f]);if(n&&(1!==u||""!==c[0])){var p=n.split(","),g=p.length;for(f=0;f<g;f++)for(var m=0;m<u;m++)if(p[f]===c[m].split("=")[0]){l=l+r+decodeURIComponent(c[m]);break}}if(t&&(1!==d||""!==s[0])){var v=t.split(","),h=v.length;for(f=0;f<h;f++)for(m=0;m<d;m++)if(v[f]===s[m].split("=")[0]){l=l+r+decodeURIComponent(s[m]);break}}return l.substring(l.length-r.length)===r?l.substring(0,l.length-r.length):l}e.exports=},"common-web-sdk-plugins/src/lib/dataElements/getpreviousvalue.js":{name:"getpreviousvalue",displayName:"getPreviousValue",script:}},core:{displayName:"Core",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP1fdd2a6ec2ae468fb1d2cac08df65f83/",modules:{"core/src/lib/dataElements/customCode.js":{name:"custom-code",displayName:"Custom Code",script:,"core/src/lib/dataElements/queryStringParameter.js":{name:"query-string-parameter",displayName:"Query String Parameter",script:,"core/src/lib/events/libraryLoaded.js":{name:"library-loaded",displayName:"Library Loaded (Page Top)",script:,"core/src/lib/conditions/cookie.js":{name:"cookie",displayName:"Cookie",script:,"core/src/lib/events/customCode.js":{name:"custom-code",displayName:"Custom Code",script:,"core/src/lib/events/helpers/pageLifecycleEvents.js":{script:,"core/src/lib/helpers/textMatch.js":{script:}}},company:{orgId:"01B1289A641C662C0A495C39@AdobeOrg",dynamicCdnEnabled:!1},property:{name:"SPG Legacy Sites WebSDK(CP/Tridion)",settings:{domains:["spglobal.com"],undefinedVarsReturnEmpty:!1,ruleComponentSequencingEnabled:!0},id:"PR03581f4b9f974c26bf5f4460712d82b8"},rules:[{id:"RL3750ad44f5824961b5ba347dfd4f10c5",name:"all pages - library load - AA Pageview",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:50}],conditions:[{modulePath:"core/src/lib/conditions/cookie.js",settings:{name:"OptanonConsent",cookieValues:[{value:"C0002",valueIsRegex:!0}]},timeout:2e3}],actions:[{modulePath:"adobe-alloy/dist/lib/actions/sendEvent/index.js",settings:{xdm:"%xdm.content prod%",type:"web.webpagedetails.pageViews",instanceName:"alloy",renderDecisions:!0,edgeConfigOverrides:{development:{}}},timeout:2e3,delayNext:!0}]},{id:"RLb5d710977fe444aaa99f2ad915583fcb",name:"all pages - custom event - scroll",events:[{modulePath:"core/src/lib/events/customCode.js",settings:{source:function(e){function n(){const n=window.scrollY+window.innerHeight,a=document.documentElement.scrollHeight,c=.5*a,u=.75*a,s=.99*a;n>=.25*a&&!t?(e(),t=!0):n>=c&&!r?(e(),r=!0):n>=u&&!o?(e(),o=!0):n>=s&&!i&&(e(),i=!0)}let t=!1,r=!1,o=!1,i=!1;window.addEventListener("scroll",n)}},ruleOrder:50}],conditions:[],actions:[{modulePath:"adobe-alloy/dist/lib/actions/sendEvent/index.js",settings:{xdm:"%xdm.scroll dev%",type:"web.webpagedetails.pageViews",instanceName:"alloy",edgeConfigOverrides:{development:{}}},timeout:2e3,delayNext:!0}]}]};var _satellite=);