!function(){ r=window);const s=Date,a=s.now,d={loadScript:convertGoogleSize:isLightHouse:createUniqDiv:((),isMobileUANOW:()=>a.call(s),getDateStr:getUtmFromGoogleCookie:getParameterByName:setCookie:getCookie:generateUniqId:mergegetTopDomain:getTopWindow:copy:contentPageUrl:debug:log:function(){if(this.vpbIsDev||r.hasLocalStorage&&r.get("vpbdebug")>="1"){this.vpbIsDev=!0;const e=Array.prototype.slice.call(arguments,0);r.hasLocalStorage&&r.get("vpbdebug")>="2"&&e.unshift(Math.floor(performance.now())),e.unshift("VPB: "),console.log.apply(console,e)}},error:xhr:deferthrottledebounce:values:keys:each:some:filter:map:findValue:timeDiff:runOnce:;et c=window.vpb||{};window.vpb=c=d.merge(c,{init_time:d.NOW(),VPB_VERSION:"m221",BUILD_VERSION:"EY9n8",SESSION_ID:d.generateUniqId(),aucs:[],eventLog:[],getConfig:getADomain:getRealScriptHost:getMaxRefreshCount:getPublisherId:function(){return c.config.pubId},getSiteId:getDevSuffix:setClientSchain);var u=c;onst f=new g,h=new g(();h.init(),h.onReady((function(){d.log("HB ready")}));const p=new g(();p.init(),p.onReady(();const m=new g(();m.init();const b={},y={adRequest:"AdRequested",adResponse:"AdResponse",adRender:"AdRender",adViewable:"AdViewable",targetingSet:"targetingSet",anchorReady:"anchorReady",anchorClosed:"anchorClosed"},C=Object.values(y),I={onoffemitinit,v=(...e)=>d.debug("[visibility]",...e);var w=new window.IntersectionObserver?IntersectionObserver:null);const S={};r E={getAll:function(){return S},findPlacement:_,createPlacement:R,createDfpPlacement:addWinningAdId:getAdId:getRefreshesMadeCount:;const A={unit:null,entityIdMatch:0,containerIdMatch:0,pathExactMatch:0,pathSoftMatchLevel:0};let B=null,T=null;nst P="data-hbmp-adunit-id";onst D={store:{},setget;var L={head:'<div id="grumi-container"><script type="text/javascript" nonce="!headerNonce!">window.grumi={wver:"1.1.6",wtype:"dfp",key:"{{geoEdgeToken}}",meta:{adup:"%%ADUNIT%%",dest:"%%DEST_URL_ESC%%",w:"%%WIDTH%%",h:"%%HEIGHT%%",li:"%eaid!",adv:"%eadv!",ord:"%ebuy!",cr:"%ecid!",ygIds:"%_ygIds!",aduid:"%epid!",haduid:"%esid!",isAfc:"%_isAfc!",isAmp:"%_isAmp!",isEBDA:"%_isEBDA!",qid:"%qid!",cust_imp:"%cust_imp!",cust1:"%cust1!",cust2:"%cust2!",cust3:"%cust3!",caid:"%caid!",di:"%DEMAND_ID!",dn:"%DEMAND_NAME!",dcid:"%DEMAND_CREATIVE_ID!",pid:"%PUBLISHER_ID!",pn:"%PUBLISHER_NAME!",adElId:"%_adElId!",topUrl:"%%TOPURL%%"},sp:"dfp",cfg:{advs:"%%advs%%",pbGlobal:"%_pbGlobal%"},pbAdId:"%%PATTERN:hb_adid%%",pbAdIdAst:"%%PATTERN:hb_adid_appnexusAst%%",pbBidder:"%%PATTERN:hb_bidder%%",hbPb:"%%PATTERN:hb_pb%%",hbCid:"%_hbcid!",hbAd:"%_hbad!",hbSize:"%%PATTERN:hb_size%%",hbCurrency:"%_hbCurrency!",hbAdomains:"%_hbadomains",site:"%%SITE%%",pimp:"%_pimp%",pl:"%%preloaded%%",isHb:"%_isHb!",to:"%_to%"};<\/script><template style="display: none;" id="template0"><xmp style="display: none;" id="xmp0">',foot:'</xmp></template><script type="text/javascript" nonce="!footerNonce!">!function(n){var e=window.grumi.key,t=window.grumi,o=t&&t.wtype&&"gpt"===t.wtype,r=window.onerror,i=+new Date,a=navigator.userAgent&&navigator.userAgent.match(/(MSIE)|(Trident)|(Edg)/),w=o&&!a,o=t.to,o=parseInt(o,10)||5e3;function u(){var n=function(){for(var n,e=document.getElementsByTagName("template"),t=e.length-1;0<=t;t--)if("template0"===e[t].id){n=e[t];break}return n}();return n.content?n.content.getElementById?n.content.getElementById("xmp0"):n.content.childNodes[0]:n.getElementsByTagName("xmp")[0]}function d(){var n=u();return n&&n.innerHTML}function c(n,e){e=e||!1,window.parent.postMessage&&window.parent.postMessage({evType:n||"",key:t.key,adup:t.meta.adup,html:window.grumi?window.grumi.tag:"",el:t.meta.adElId,refresh:e},"*")}var m=!1;function g(n,e){var t,o;!m&&(m=!0,t="",o=a&&"complete"===document.readyState,window.grumi&&(window.grumi.fsRan=!0,t=window.grumi.tag),o||(t=t||d(),w&&window.document.open(),window.document.write(t),window.document.close()),(e=e||!1)||o)&&c(n,o)}function s(n,t){return function(){var e=setTimeout(function(){var n=document.getElementById(i);n&&null===function(n){if(void 0!==n.nextElementSibling)return n.nextElementSibling;for(var e=n.nextSibling;e&&1!==e.nodeType;)e=e.nextSibling;return e}(n)&&t&&t(),clearTimeout(e)},n)}}s(o,function(){g()})(),s(2e3,function(){c("slwCl")})(),window.grumi.tag=d(),window.grumi.scriptHost=n,window.grumi.pbGlobal=window.grumi.cfg&&window.grumi.cfg.pbGlobal||"pbjs",window.grumi.onerror=r,window.parent&&window.parent.postMessage&&window.parent.postMessage({iw:!0,key:t.key,adup:t.meta.adup,el:t.meta.adElId},"*"),window.grumiInstance=function(){for(var n=window,e=0;e<10;e++){try{if(n.grumiInstance)return n.grumiInstance}catch(n){}n=n.parent}}()||{q:[]};var p=JSON.parse(JSON.stringify(window.grumi));if(grumiInstance.q.push(function(){grumiInstance.createInstance(window,document,p)}),!grumiInstance.loaded){o=document.createElement("script"),n=(o.type="text/javascript",o.src=n+e+"/grumi.js",o.className="rm",o.id=i,w&&(o.async=!0),"_"+ +new Date);window[n]=function(){g("netErr",!0)},window.grumi.start=+new Date;try{window.document.write(o.outerHTML.replace(\'class="rm"\',\'onerror="\'+n+\'();"\'))}catch(n){g()}}window.onerror=function(n){"function"==typeof r&&r.apply(this,arguments),s(0,g)(),window.onerror=r}}(("http"===window.location.protocol.substr(0,4)?window.location.protocol:"https:")+"//rumcdn.geoedge.be/");<\/script></div>'};const O="unknown";var N=new nst V="vpb-strategy";et F="vpb-settings";const W={};onst $=ction(){if(u.config={bidderProps:["id","name","adapter_id","type","bidder","entityId","isMarket","params","noR","fif","minViewWithDfp","overrideId","labels","useFirstBidInRefresh","allow_domains","geoEdgeIndex","allow_sizes"],adunits:[{entityId:26775,name:null,type:"display",code:"antengo/Sellwild_desktop_970x250",divId:"",soft_match:!1,bids:[[14647,"RTB House",1111,"display","rtbhouse_mkp",26775,!0,{publisherId:"f7tRggCNvKnqLxaIp8gJ",region:"prebid-eu",bidfloor:"0.05"},0,0,0,3379574,[],1,"sellwild.com",0],[17435,"MF_NoBid_buyer_all",1559,"display","nobid",26775,!1,{siteId:22527614930},0,0,0,3379720,[],0,0,1],[17544,"MF_Xandr_buyer_all",636,"display","MF_Xandr",26775,!1,{placementId:22013616},0,0,0,3379723,[],0,0,1],[17443,"AdaptAMX_buyer_all",2333,"display","amx",26775,!1,{tagId:"YW50ZW5nby5jb20"},0,0,0,3388059,[],0,0,0],[17860,"Audigent",636,"display","appnexus",26775,!1,{placementId:111111},0,0,0,3388062,[],0,0,0],[20327,"MF_Yahoo_SSP_Buyer_All",2565,"display","yahoossp",26775,!1,{dcn:"8a969c6b017b7b075a9b07c098f00008",pos:"8a969c6b017b7b075a9b07c353b4000a"},0,0,0,4283129,[],0,0,1],[23957,"Media.net",1089,"display","medianet_mkp",26775,!0,{cid:"8CU816538",crid:"336867738"},0,0,0,7155570,[{type:"env",env:"d"}],0,0,0],[23957,"Media.net",1089,"display","medianet_mkp",26775,!0,{cid:"8CU816538",crid:"613261711"},0,0,0,7158131,[{type:"env",env:"m"}],0,0,0]],mediaTypes:{banner:{},slider:{maxAds:3,rotateInterval:5e3,randomPercent:20}}},{entityId:26776,name:null,type:"display",code:"antengo/Sellwild_mobile_300x250",divId:"",soft_match:!1,bids:[[14647,"RTB House",1111,"display","rtbhouse_mkp",26776,!0,{publisherId:"f7tRggCNvKnqLxaIp8gJ",region:"prebid-eu",bidfloor:"0.05"},0,0,0,3379630,[],1,"sellwild.com",0],[17435,"MF_NoBid_buyer_all",1559,"display","nobid",26776,!1,{siteId:22527614930},0,0,0,3379721,[],0,0,1],[17544,"MF_Xandr_buyer_all",636,"display","MF_Xandr",26776,!1,{placementId:22013635},0,0,0,3379724,[],0,0,1],[17443,"AdaptAMX_buyer_all",2333,"display","amx",26776,!1,{tagId:"YW50ZW5nby5jb20"},0,0,0,3388060,[],0,0,0],[20327,"MF_Yahoo_SSP_Buyer_All",2565,"display","yahoossp",26776,!1,{dcn:"8a969c6b017b7b075a9b07c612b0000b",pos:"8a969538017b7b0762da07c707ab0010"},0,0,0,4283130,[],0,0,1],[23957,"Media.net",1089,"display","medianet_mkp",26776,!0,{cid:"8CU816538",crid:"336867738"},0,0,0,7155571,[{type:"env",env:"d"}],0,0,0],[23957,"Media.net",1089,"display","medianet_mkp",26776,!0,{cid:"8CU816538",crid:"613261711"},0,0,0,7158132,[{type:"env",env:"m"}],0,0,0]],mediaTypes:{banner:{},slider:{maxAds:3,rotateInterval:5e3,randomPercent:20}}},{entityId:26777,name:null,type:"display",code:"antengo/Sellwild_mobile_320x50",divId:"",soft_match:!1,bids:[[14647,"RTB House",1111,"display","rtbhouse_mkp",26777,!0,{publisherId:"f7tRggCNvKnqLxaIp8gJ",region:"prebid-eu",bidfloor:"0.05"},0,0,0,3379686,[],1,"sellwild.com",0],[17435,"MF_NoBid_buyer_all",1559,"display","nobid",26777,!1,{siteId:22527614930},0,0,0,3379722,[],0,0,1],[17544,"MF_Xandr_buyer_all",636,"display","MF_Xandr",26777,!1,{placementId:22013679},0,0,0,3379725,[],0,0,1],[17443,"AdaptAMX_buyer_all",2333,"display","amx",26777,!1,{tagId:"YW50ZW5nby5jb20"},0,0,0,3388061,[],0,0,0],[20327,"MF_Yahoo_SSP_Buyer_All",2565,"display","yahoossp",26777,!1,{dcn:"8a969c6b017b7b075a9b07c612b0000b",pos:"8a969c6b017b7b075a9b07c8a486000d"},0,0,0,4283131,[],0,0,1],[9553,"Criteo",803,"display","criteo_mkp",26777,!0,{zoneId:1509547},0,1,0,4738781,[],1,0,0,"320x50"],[23957,"Media.net",1089,"display","medianet_mkp",26777,!0,{cid:"8CU816538",crid:"336867738"},0,0,0,7155572,[{type:"env",env:"d"}],0,0,0,0],[23957,"Media.net",1089,"display","medianet_mkp",26777,!0,{cid:"8CU816538",crid:"613261711"},0,0,0,7158133,[{type:"env",env:"m"}],0,0,0,0]],mediaTypes:{banner:{},slider:{maxAds:3,rotateInterval:5e3,randomPercent:20}}}],cRevision:1706638746053,siteId:11875,isArchived:!1,pubId:324410,networkCode:"102766797",supportLateSRA:1,refreshHBWinnerInterval:2e4,refreshWhenWinnerIs:["any"],buyersInRefresh:["clientbuyer","market"],liToSkipRefresh:[5816282337,5818161062,5821736349,5822965324,5822965327,5822972584,5822972590,5822972593,5822972596,5822972599,5822972602,5822972605,5822972608,5822972614,5822972617,5822972620,5823636851,5823639026,5823639032,5823639035,5823639038,5823639041,5823639044,5823639047,5823639053,5823639056,5823639059,5823639062,5823639068,5823639077,5823639080,5823639083,5823639089,5823639098,5823639101,5926415402,6074156308],lastLiUpdatedAt:1704085141692,DFPHBCreativeIds:[138347061633,138347061636,138347503657,138347503663,138347503669,138347503672,138347503675],enhanceBid:null,bidCeil:null,adunitsFloorSettings:{},ald:!1,networkCurrency:"USD",clientId:323691,bidderAliases:{rtbhouse_mkp:"rtbhouse",MF_Xandr:"appnexus",medianet_mkp:"medianet",criteo_mkp:"criteo"},vmTimeouts:{_site_:2e3},geoEdgeIds:[null,"6e868751-073d-493c-a1d9-c6330f5b2581"],granularity:"high",consentSettings:{gdpr:{cmpApi:"iab",timeout:1e3,allowAuctionWithoutConsent:!0},usp:{cmpApi:"iab",timeout:1e3,allowAuctionWithoutConsent:!0}},schainMkpBidders:["rtbhouse_mkp","medianet_mkp","criteo_mkp"],pubRev:.9,schainclient:{asi:"sellwild.com",sid:"pub-6012757318925181",hp:1},userIdModuleConfigs:[{name:"lotamePanoramaId"},{name:"criteo"},{name:"sharedId",storage:{type:"cookie",name:"_pubcid",expires:365}},{name:"id5Id",params:{partner:692},storage:{type:"html5",name:"id5id",expires:90,refreshInSeconds:28800}}],WLDomain:"player.ads.sellwild.com",domain:"sellwild.com",geoRequired:!1,improvePerformance:0,isUAMFromMkp:!1,syncWarmUps:[],customRefreshInterval:{buyer:{9553:3e4,14647:3e4}},minViewRate:{clientBuyers:60,buyer:{9553:20,14647:15,23957:30}},bidAdjustment:{9553:.9,14647:1,23957:1},bidFloorConfig:{adunit:{26775:.15,26776:.15,26777:.15},buyer:{9553:{min:.03,max:40},14647:{min:.03,max:20},17435:{min:0,max:99},17443:{min:0,max:99},17544:{min:0,max:99},17860:{min:0,max:99},20327:{min:0,max:99},23957:{min:.03,max:99}}},r:{9553:20,14647:20,23957:15},ri:null,sliderPercent:.15,isPbjsDebugReplaced:!1},F+=u.getSiteId(),z(u.config),r.hasLocalStorage){const e=JSON.parse(r.get(F)||"{}");e&&(e.cRevision=e.cRevision||0,e.cRevision>u.config.cRevision?(d.log("Using cached config"),u.config=e,z(u.config)):d.log("Cached config is invalidated"))}$(u.config,!0),j(),d.log("Config version checked"),u.config.isDev||setInterval((,6e4),d.log("Geo Sub (should be called earlier than geoManager.init)"),I.on("geoManager:onGeoData",(),I.on("vpb:changeClientSchain",()}();var J={inited:!1,init:fetchBids:;const X={KEY:"is_vmhbmp",VALUE:"true"},K={};nst te=(();0;onst fe=[];onst pe=[;((),he((),he((),he(();const ye={$$MOBILE:"m",$$TABLET:"t",$$DESKTOP:"d"};const Ce=);e((),he((),he((),he((),he((),he(();const ve=we=new Se={advertiserLevelDataUrl:"https://ald.adtelligent.com:1339/analyse",refreshHandles:{},vpbRuns:0,init:pbjs_getPlacementBids:getAvailableBids:hasBiggerPrice:pickMaxBid:buyerVisibilityFilterpickWinnergetWinningBidByCode:addPlacementIDs:waitingDFPQue:[],renderedAdIDs:{},bidWonEventHandleronBidWoninitPrebid:getRefreshTime:updateCatfishStatestartRefreshSlot:;let Re=[],_e={enabled:!1,useNonSystemUnits:!0,useSystemUnits:!0,screensToWait:2,mobileScaling:1};const Ee=d.throttle((,100);t ke={GEO_FROM_CACHE:0,GEO_FROM_SERVICE:1,GEO_IS_EU:2,GEO_SERVICE_ERROR:3,BUYER_IS_MARKET:4,PAGE_VISIBILITY:5,TCF_API_PRESENT:6,GDPR_APPLIES:7,CONSENT_DATA_AVAILABLE:8,CCPA_PRESENT:9,CCPA_APPLIES:10,CCPA_OPPORTUNITY_OPTOUT:11,CCPA_SALE_OPTOUT:12,CCPA_LSPA:13,SUPPORT_PROMISE:14,FAST_LOAD:16,LOADER_FAST_LOAD:17,BID_IN_SLIDER:18,UNB_AUC:19,CONSENT_DATA_AVAILABLE_GOOGLE:20,GPP_PRESENT:21,LAZY_ENABLED:22,HTML_DETECTED:23};u.isBitSet=var Pe=new window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];const xe=const De=Q("googleBeforeAuction",();I.on("lazyLoad:elementsResolved",(),Ae();const Le={googleNative:{},bidAdIdsToWinSizes:{},findGoogleSlotByElementId:initcleanSlotsHBTargeting:createGoogleSlot:getDFPTargeting:isSlotSkippedByTargeting:getDirectSizes:getDirectSizesNoFluid:lineItemAllowed:isRefreshAllowed:_pushGoogleCmds:isAdsDisabled_findSlotsAndStartRefresh:processSlots_hookGoogle:setWinnerTargetingsetGlobalTargetingsendGAMRequesttrySendGAMRequest;r Ue='<div class="bidmatic-link-plate-button" title="go to bidmatic.io"></div><style>.bidmatic-link-plate-button{height:100%;cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--brand-color:#3793ff;--brand-bg-color-gray:#787878;--brand-bg-color-dark-gray:#353535;font-family:"Nunito Sans Family",Inter,Roboto,Arial,Helvetica,sans-serif;color:var(--brand-color);font-size:10px;font-weight:600}.bidmatic-link-plate-button-logo{height:100%}</style><svg class="bidmatic-link-plate-button-logo bidmatic-logo-colored-inline" viewBox="0 0 240 50" xmlns="http://www.w3.org/2000/svg"><path d="M89.3338 8.5C88.6671 8.5 88.1004 8.73333 87.6671 9.16667C87.2338 9.6 87.0004 10.1667 87.0004 10.8333C87.0004 11.5 87.2338 12.0667 87.6671 12.5C88.1004 12.9667 88.6671 13.1667 89.3338 13.1667C90.0338 13.1667 90.5671 12.9333 91.0338 12.5C91.4671 12.0333 91.7004 11.5 91.7004 10.8333C91.7004 10.1667 91.4671 9.6 91.0338 9.16667C90.5338 8.73333 90.0004 8.5 89.3338 8.5Z" fill="#353535"/><path d="M91.3338 16.6667H87.3338V33.3333H91.3338V16.6667Z" fill="#353535"/><path d="M135.834 16C133.4 16 131.534 16.8333 130.334 18.6667C129.134 16.8333 127.234 16 124.834 16C122.8 16 121.267 16.8333 120.067 18.3333V16.6667H116V33.3333H120.1V23.3333C120.1 22.3333 120.5 21.5 121.2 20.8333C121.9 20.1667 122.7 20 123.7 20C124.7 20 125.5 20.1667 126.2 20.8333C126.867 21.5 127.3 22.3333 127.3 23.3333V33.3333H131.434V23.3333C131.434 22.3333 131.834 21.5 132.534 20.8333C133.234 20.1667 134.034 20 135.034 20C136.034 20 136.867 20.1667 137.534 20.8333C138.2 21.5 138.634 22.3333 138.634 23.3333V33.3333H142.667V22.3333C142.667 20.5667 141.967 18.8667 140.667 17.6667C139.4 16.4667 137.8 16 135.834 16Z" fill="#353535"/><path d="M108 18C106.5 16.8 104.734 16.1667 102.834 16.1667C100.5 16.1667 98.5671 17 97.0004 18.7C95.4338 20.3667 94.6671 22.4667 94.6671 25C94.6671 27.5333 95.4338 29.6333 97.0004 31.3333C98.6004 33 100.534 33.8333 102.834 33.8333C104.734 33.8333 106.5 33.2 108 32V33.3333H112V8.5H108V18ZM106.6 28.4333C105.734 29.3667 104.667 29.8 103.4 29.8C102.1 29.8 101.034 29.3333 100.167 28.4333C99.3004 27.5 98.8671 26.3667 98.8671 25C98.8671 23.6333 99.3004 22.5 100.167 21.5667C101.034 20.6333 102.1 20.2 103.4 20.2C104.667 20.2 105.734 20.6667 106.6 21.5667C107.5 22.5 107.934 23.6667 107.934 25C107.934 26.3333 107.467 27.5 106.6 28.4333Z" fill="#353535"/><path d="M75.8338 16.1667C73.9338 16.1667 72.1671 16.8 70.6671 18V8.5H66.6671V33.3333H70.6671V32C72.1671 33.2 73.9338 33.8333 75.8338 33.8333C78.1338 33.8333 80.0671 33 81.6671 31.3333C83.2338 29.6333 84.0004 27.5333 84.0004 25C84.0004 22.4667 83.2338 20.3667 81.6671 18.7C80.1004 17 78.1671 16.1667 75.8338 16.1667ZM78.5338 28.4333C77.6671 29.3667 76.6004 29.8 75.3004 29.8C74.0338 29.8 72.9671 29.3333 72.1004 28.4333C71.2004 27.5 70.7671 26.3333 70.7671 25C70.7671 23.6667 71.2004 22.5 72.1004 21.5667C72.9671 20.6333 74.0338 20.2 75.3004 20.2C76.6004 20.2 77.6671 20.6667 78.5338 21.5667C79.4004 22.5 79.8338 23.6333 79.8338 25C79.8338 26.3667 79.4004 27.5333 78.5338 28.4333Z" fill="#353535"/><path d="M172.434 13.3333H168.434V16.6667H166V20.1667H168.434V28.3333C168.434 29.8333 169 30.8333 170.1 31.8333C171.234 32.8333 172.5 33.3333 174.1 33.3333H176.7V29.8333H174.6C174 29.8333 173.5 29.5667 173.1 29.1667C172.7 28.7667 172.434 28.0667 172.434 27.5V20.1667H176.667V16.6667H172.4V13.3333H172.434Z" fill="#353535"/><path d="M182 8.5C181.334 8.5 180.767 8.73333 180.334 9.16667C179.9 9.6 179.667 10.1667 179.667 10.8333C179.667 11.5 179.9 12.0667 180.334 12.5C180.767 12.9667 181.334 13.1667 182 13.1667C182.7 13.1667 183.234 12.9333 183.7 12.5C184.134 12.0333 184.367 11.5 184.367 10.8333C184.367 10.1667 184.134 9.6 183.7 9.16667C183.2 8.73333 182.667 8.5 182 8.5Z" fill="#353535"/><path d="M184 16.6667H180V33.3333H184V16.6667Z" fill="#353535"/><path d="M195.834 20.1667C196.767 20.1667 197.567 20.4333 198.334 20.9C199.1 21.3667 199.634 22.0333 200 22.8667L204 21.6667C203.367 19.9667 202.367 18.6667 200.9 17.6667C199.434 16.6667 197.734 16.1667 195.834 16.1667C193.3 16.1667 191.2 16.9667 189.5 18.6667C187.834 20.3333 187 22.4667 187 25C187 27.5333 187.834 29.6333 189.5 31.3333C191.2 33 193.334 33.8333 195.834 33.8333C197.734 33.8333 199.434 33.3333 200.9 32.3333C202.367 31.3333 203.367 30.0333 204 28.3333L200 27.1C199.634 27.9333 199.1 28.6 198.334 29.1C197.567 29.5667 196.767 29.8333 195.834 29.8333C194.5 29.8333 193.4 29.3667 192.5 28.4333C191.6 27.5 191.167 26.3667 191.167 25C191.167 23.6333 191.6 22.5 192.5 21.5667C193.4 20.6333 194.5 20.1667 195.834 20.1667Z" fill="#353535"/><path d="M159 18C157.5 16.8 155.734 16.1667 153.834 16.1667C151.5 16.1667 149.567 17 148 18.7C146.434 20.3667 145.667 22.4667 145.667 25C145.667 27.5333 146.434 29.6333 148 31.3333C149.6 33 151.534 33.8333 153.834 33.8333C155.734 33.8333 157.5 33.2 159 32V33.3333H163V16.6667H159V18ZM157.6 28.4333C156.734 29.3667 155.667 29.8 154.4 29.8C153.1 29.8 152.034 29.3333 151.167 28.4333C150.3 27.5 149.867 26.3667 149.867 25C149.867 23.6333 150.3 22.5 151.167 21.5667C152.034 20.6333 153.1 20.2 154.4 20.2C155.667 20.2 156.734 20.6667 157.6 21.5667C158.5 22.5 158.934 23.6667 158.934 25C158.934 26.3333 158.467 27.5 157.6 28.4333Z" fill="#353535"/><path d="M217.334 8.5C216.668 8.5 216.101 8.73333 215.668 9.16667C215.234 9.6 215.001 10.1667 215.001 10.8333C215.001 11.5 215.234 12.0667 215.668 12.5C216.101 12.9667 216.668 13.1667 217.334 13.1667C218.034 13.1667 218.568 12.9333 219.034 12.5C219.468 12.0333 219.701 11.5 219.701 10.8333C219.701 10.1667 219.468 9.6 219.034 9.16667C218.534 8.73333 218.001 8.5 217.334 8.5Z" fill="#3793FF"/><path d="M219.334 16.6667H215.334V33.3333H219.334V16.6667Z" fill="#3793FF"/><path d="M209.501 28.8333C208.801 28.8333 208.201 29.0667 207.734 29.5333C207.268 30 207.034 30.6 207.034 31.3C207.034 32 207.268 32.6 207.734 33.1C208.201 33.5667 208.801 33.8333 209.501 33.8333C210.234 33.8333 210.834 33.6 211.301 33.1C211.768 32.6333 212.001 32.0333 212.001 31.3C212.001 30.6 211.768 30 211.268 29.5333C210.801 29.0667 210.201 28.8333 209.501 28.8333Z" fill="#3793FF"/><path d="M237.501 18.6667C235.801 16.9667 233.701 16.1667 231.168 16.1667C228.634 16.1667 226.534 16.9667 224.834 18.6667C223.168 20.3333 222.334 22.4667 222.334 25C222.334 27.5333 223.168 29.6333 224.834 31.3333C226.534 33 228.668 33.8333 231.168 33.8333C233.668 33.8333 235.801 33 237.501 31.3333C239.168 29.6333 240.001 27.5333 240.001 25C240.001 22.4667 239.168 20.3333 237.501 18.6667ZM234.501 28.4333C233.601 29.3667 232.501 29.8333 231.168 29.8333C229.834 29.8333 228.734 29.3667 227.834 28.4333C226.934 27.5 226.501 26.3667 226.501 25C226.501 23.6333 226.934 22.5 227.834 21.5667C228.734 20.6333 229.834 20.1667 231.168 20.1667C232.501 20.1667 233.601 20.6333 234.501 21.5667C235.401 22.5 235.834 23.6333 235.834 25C235.834 26.3667 235.401 27.5 234.501 28.4333Z" fill="#3793FF"/><path d="M24.9991 33.6667C27.3658 33.6667 29.2658 32.8667 30.8325 31.2333C32.4325 29.6 33.3325 27.5 33.3325 25C33.3325 22.5 32.4325 20.4333 30.8325 18.8333C29.2658 17.1667 27.3658 16.3333 24.9991 16.3333C22.6658 16.3333 20.5991 17.1667 18.9991 18.8333C17.4325 20.4667 16.6658 22.5333 16.6658 25C16.6658 27.4667 17.4325 29.5 18.9991 31.1667C20.6325 32.8 22.6991 33.6667 24.9991 33.6667Z" fill="#3793FF"/><path d="M39.4991 25C39.4991 20.1333 43.4658 16.1667 48.3325 16.1667C48.3658 16.1667 48.3658 16.1667 48.3991 16.1667C44.8325 6.73333 35.6991 0 24.9991 0C22.0658 0 19.2658 0.5 16.6658 1.43333V16.3333C18.9325 13.7 21.7325 12.3333 25.3325 12.3333C28.7325 12.3333 31.7325 13.6 33.9991 16C36.2991 18.4 37.3325 21.4 37.3325 25C37.3325 28.5667 36.2991 31.5667 33.9991 34C31.6991 36.4 28.6991 37.6667 25.3325 37.6667C21.7325 37.6667 18.9325 36.3 16.6658 33.6667V36.3333H12.6658V3.26667C5.09915 7.56667 -0.000854492 15.6667 -0.000854492 25C-0.000854492 38.8 11.1991 50 24.9991 50C35.6991 50 44.8325 43.2667 48.3991 33.8333C48.3658 33.8333 48.3658 33.8333 48.3325 33.8333C43.4658 33.8333 39.4991 29.8667 39.4991 25Z" fill="#3793FF"/><path d="M50.7658 21.7667C50.3992 21.7667 50.0991 21.8 49.7991 21.9C49.3325 22.0667 48.9658 22.3333 48.6992 22.7667C48.2325 22.0667 47.5325 21.7667 46.6325 21.7667C45.8658 21.7667 45.2991 22.0667 44.8658 22.6333V22H43.3325V28.2667H44.8658V24.5C44.8658 24.1333 44.9991 23.8333 45.2658 23.5667C45.5325 23.3 45.8325 23.2667 46.1992 23.2667C46.5658 23.2667 46.8658 23.3333 47.1325 23.5667C47.3991 23.8333 47.5658 24.1333 47.5658 24.5V28.2667H49.1325V24.5C49.1325 24.1333 49.2658 23.8333 49.5325 23.5667C49.6658 23.4333 49.7991 23.3667 49.9325 23.3333C50.0991 23.3 50.2658 23.2667 50.4658 23.2667C50.8325 23.2667 51.1325 23.3333 51.3991 23.5667C51.6658 23.8333 51.7991 24.1333 51.7991 24.5V28.2667H53.3325V24.1333C53.3325 23.4667 53.0658 22.8333 52.5658 22.3667C52.0991 21.9333 51.4991 21.7667 50.7658 21.7667Z" fill="#3793FF"/></svg> <svg class="bidmatic-link-plate-button-logo bidmatic-logo-wite-inline" viewBox="0 0 240 50" xmlns="http://www.w3.org/2000/svg"><path d="M89.3337 8.5C88.6671 8.5 88.1004 8.73333 87.6671 9.16667C87.2337 9.6 87.0004 10.1667 87.0004 10.8333C87.0004 11.5 87.2337 12.0667 87.6671 12.5C88.1004 12.9667 88.6671 13.1667 89.3337 13.1667C90.0337 13.1667 90.5671 12.9333 91.0338 12.5C91.4671 12.0333 91.7004 11.5 91.7004 10.8333C91.7004 10.1667 91.4671 9.6 91.0338 9.16667C90.5338 8.73333 90.0004 8.5 89.3337 8.5Z" fill="white"/><path d="M91.3337 16.6667H87.3337V33.3333H91.3337V16.6667Z" fill="white"/><path d="M135.834 16C133.4 16 131.534 16.8333 130.334 18.6667C129.134 16.8333 127.234 16 124.834 16C122.8 16 121.267 16.8333 120.067 18.3333V16.6667H116V33.3333H120.1V23.3333C120.1 22.3333 120.5 21.5 121.2 20.8333C121.9 20.1667 122.7 20 123.7 20C124.7 20 125.5 20.1667 126.2 20.8333C126.867 21.5 127.3 22.3333 127.3 23.3333V33.3333H131.434V23.3333C131.434 22.3333 131.834 21.5 132.534 20.8333C133.234 20.1667 134.034 20 135.034 20C136.034 20 136.867 20.1667 137.534 20.8333C138.2 21.5 138.634 22.3333 138.634 23.3333V33.3333H142.667V22.3333C142.667 20.5667 141.967 18.8667 140.667 17.6667C139.4 16.4667 137.8 16 135.834 16Z" fill="white"/><path d="M108 18C106.5 16.8 104.734 16.1667 102.834 16.1667C100.5 16.1667 98.5671 17 97.0004 18.7C95.4337 20.3667 94.6671 22.4667 94.6671 25C94.6671 27.5333 95.4337 29.6333 97.0004 31.3333C98.6004 33 100.534 33.8333 102.834 33.8333C104.734 33.8333 106.5 33.2 108 32V33.3333H112V8.5H108V18ZM106.6 28.4333C105.734 29.3667 104.667 29.8 103.4 29.8C102.1 29.8 101.034 29.3333 100.167 28.4333C99.3004 27.5 98.8671 26.3667 98.8671 25C98.8671 23.6333 99.3004 22.5 100.167 21.5667C101.034 20.6333 102.1 20.2 103.4 20.2C104.667 20.2 105.734 20.6667 106.6 21.5667C107.5 22.5 107.934 23.6667 107.934 25C107.934 26.3333 107.467 27.5 106.6 28.4333Z" fill="white"/><path d="M75.8337 16.1667C73.9338 16.1667 72.1671 16.8 70.6671 18V8.5H66.6671V33.3333H70.6671V32C72.1671 33.2 73.9338 33.8333 75.8337 33.8333C78.1337 33.8333 80.0671 33 81.6671 31.3333C83.2337 29.6333 84.0004 27.5333 84.0004 25C84.0004 22.4667 83.2337 20.3667 81.6671 18.7C80.1004 17 78.1671 16.1667 75.8337 16.1667ZM78.5338 28.4333C77.6671 29.3667 76.6004 29.8 75.3004 29.8C74.0337 29.8 72.9671 29.3333 72.1004 28.4333C71.2004 27.5 70.7671 26.3333 70.7671 25C70.7671 23.6667 71.2004 22.5 72.1004 21.5667C72.9671 20.6333 74.0337 20.2 75.3004 20.2C76.6004 20.2 77.6671 20.6667 78.5338 21.5667C79.4004 22.5 79.8337 23.6333 79.8337 25C79.8337 26.3667 79.4004 27.5333 78.5338 28.4333Z" fill="white"/><path d="M172.434 13.3333H168.434V16.6667H166V20.1667H168.434V28.3333C168.434 29.8333 169 30.8333 170.1 31.8333C171.234 32.8333 172.5 33.3333 174.1 33.3333H176.7V29.8333H174.6C174 29.8333 173.5 29.5667 173.1 29.1667C172.7 28.7667 172.434 28.0667 172.434 27.5V20.1667H176.667V16.6667H172.4V13.3333H172.434Z" fill="white"/><path d="M182 8.5C181.334 8.5 180.767 8.73333 180.334 9.16667C179.9 9.6 179.667 10.1667 179.667 10.8333C179.667 11.5 179.9 12.0667 180.334 12.5C180.767 12.9667 181.334 13.1667 182 13.1667C182.7 13.1667 183.234 12.9333 183.7 12.5C184.134 12.0333 184.367 11.5 184.367 10.8333C184.367 10.1667 184.134 9.6 183.7 9.16667C183.2 8.73333 182.667 8.5 182 8.5Z" fill="white"/><path d="M184 16.6667H180V33.3333H184V16.6667Z" fill="white"/><path d="M195.834 20.1667C196.767 20.1667 197.567 20.4333 198.334 20.9C199.1 21.3667 199.634 22.0333 200 22.8667L204 21.6667C203.367 19.9667 202.367 18.6667 200.9 17.6667C199.434 16.6667 197.734 16.1667 195.834 16.1667C193.3 16.1667 191.2 16.9667 189.5 18.6667C187.834 20.3333 187 22.4667 187 25C187 27.5333 187.834 29.6333 189.5 31.3333C191.2 33 193.334 33.8333 195.834 33.8333C197.734 33.8333 199.434 33.3333 200.9 32.3333C202.367 31.3333 203.367 30.0333 204 28.3333L200 27.1C199.634 27.9333 199.1 28.6 198.334 29.1C197.567 29.5667 196.767 29.8333 195.834 29.8333C194.5 29.8333 193.4 29.3667 192.5 28.4333C191.6 27.5 191.167 26.3667 191.167 25C191.167 23.6333 191.6 22.5 192.5 21.5667C193.4 20.6333 194.5 20.1667 195.834 20.1667Z" fill="white"/><path d="M159 18C157.5 16.8 155.734 16.1667 153.834 16.1667C151.5 16.1667 149.567 17 148 18.7C146.434 20.3667 145.667 22.4667 145.667 25C145.667 27.5333 146.434 29.6333 148 31.3333C149.6 33 151.534 33.8333 153.834 33.8333C155.734 33.8333 157.5 33.2 159 32V33.3333H163V16.6667H159V18ZM157.6 28.4333C156.734 29.3667 155.667 29.8 154.4 29.8C153.1 29.8 152.034 29.3333 151.167 28.4333C150.3 27.5 149.867 26.3667 149.867 25C149.867 23.6333 150.3 22.5 151.167 21.5667C152.034 20.6333 153.1 20.2 154.4 20.2C155.667 20.2 156.734 20.6667 157.6 21.5667C158.5 22.5 158.934 23.6667 158.934 25C158.934 26.3333 158.467 27.5 157.6 28.4333Z" fill="white"/><path d="M217.334 8.5C216.668 8.5 216.101 8.73333 215.668 9.16667C215.234 9.6 215.001 10.1667 215.001 10.8333C215.001 11.5 215.234 12.0667 215.668 12.5C216.101 12.9667 216.668 13.1667 217.334 13.1667C218.034 13.1667 218.568 12.9333 219.034 12.5C219.468 12.0333 219.701 11.5 219.701 10.8333C219.701 10.1667 219.468 9.6 219.034 9.16667C218.534 8.73333 218.001 8.5 217.334 8.5Z" fill="white"/><path d="M219.334 16.6667H215.334V33.3333H219.334V16.6667Z" fill="white"/><path d="M209.501 28.8333C208.801 28.8333 208.201 29.0667 207.734 29.5333C207.268 30 207.034 30.6 207.034 31.3C207.034 32 207.268 32.6 207.734 33.1C208.201 33.5667 208.801 33.8333 209.501 33.8333C210.234 33.8333 210.834 33.6 211.301 33.1C211.768 32.6333 212.001 32.0333 212.001 31.3C212.001 30.6 211.768 30 211.268 29.5333C210.801 29.0667 210.201 28.8333 209.501 28.8333Z" fill="white"/><path d="M237.501 18.6667C235.801 16.9667 233.701 16.1667 231.168 16.1667C228.634 16.1667 226.534 16.9667 224.834 18.6667C223.168 20.3333 222.334 22.4667 222.334 25C222.334 27.5333 223.168 29.6333 224.834 31.3333C226.534 33 228.668 33.8333 231.168 33.8333C233.668 33.8333 235.801 33 237.501 31.3333C239.168 29.6333 240.001 27.5333 240.001 25C240.001 22.4667 239.168 20.3333 237.501 18.6667ZM234.501 28.4333C233.601 29.3667 232.501 29.8333 231.168 29.8333C229.834 29.8333 228.734 29.3667 227.834 28.4333C226.934 27.5 226.501 26.3667 226.501 25C226.501 23.6333 226.934 22.5 227.834 21.5667C228.734 20.6333 229.834 20.1667 231.168 20.1667C232.501 20.1667 233.601 20.6333 234.501 21.5667C235.401 22.5 235.834 23.6333 235.834 25C235.834 26.3667 235.401 27.5 234.501 28.4333Z" fill="white"/><path d="M24.9991 33.6667C27.3658 33.6667 29.2658 32.8667 30.8324 31.2333C32.4324 29.6 33.3325 27.5 33.3325 25C33.3325 22.5 32.4324 20.4333 30.8324 18.8333C29.2658 17.1667 27.3658 16.3333 24.9991 16.3333C22.6658 16.3333 20.5991 17.1667 18.9991 18.8333C17.4324 20.4667 16.6658 22.5333 16.6658 25C16.6658 27.4667 17.4324 29.5 18.9991 31.1667C20.6324 32.8 22.6991 33.6667 24.9991 33.6667Z" fill="white"/><path d="M39.4991 25C39.4991 20.1333 43.4658 16.1667 48.3325 16.1667C48.3658 16.1667 48.3658 16.1667 48.3991 16.1667C44.8325 6.73333 35.6991 0 24.9991 0C22.0658 0 19.2658 0.5 16.6658 1.43333V16.3333C18.9324 13.7 21.7324 12.3333 25.3324 12.3333C28.7324 12.3333 31.7324 13.6 33.9991 16C36.2991 18.4 37.3325 21.4 37.3325 25C37.3325 28.5667 36.2991 31.5667 33.9991 34C31.6991 36.4 28.6991 37.6667 25.3324 37.6667C21.7324 37.6667 18.9324 36.3 16.6658 33.6667V36.3333H12.6658V3.26667C5.09911 7.56667 -0.00088501 15.6667 -0.00088501 25C-0.00088501 38.8 11.1991 50 24.9991 50C35.6991 50 44.8325 43.2667 48.3991 33.8333C48.3658 33.8333 48.3658 33.8333 48.3325 33.8333C43.4658 33.8333 39.4991 29.8667 39.4991 25Z" fill="white"/><path d="M50.7658 21.7667C50.3991 21.7667 50.0991 21.8 49.7991 21.9C49.3324 22.0667 48.9658 22.3333 48.6991 22.7667C48.2325 22.0667 47.5324 21.7667 46.6324 21.7667C45.8658 21.7667 45.2991 22.0667 44.8658 22.6333V22H43.3325V28.2667H44.8658V24.5C44.8658 24.1333 44.9991 23.8333 45.2658 23.5667C45.5325 23.3 45.8325 23.2667 46.1991 23.2667C46.5658 23.2667 46.8658 23.3333 47.1324 23.5667C47.3991 23.8333 47.5658 24.1333 47.5658 24.5V28.2667H49.1324V24.5C49.1324 24.1333 49.2658 23.8333 49.5325 23.5667C49.6658 23.4333 49.7991 23.3667 49.9324 23.3333C50.0991 23.3 50.2658 23.2667 50.4658 23.2667C50.8324 23.2667 51.1325 23.3333 51.3991 23.5667C51.6658 23.8333 51.7991 24.1333 51.7991 24.5V28.2667H53.3325V24.1333C53.3325 23.4667 53.0658 22.8333 52.5658 22.3667C52.0991 21.9333 51.4991 21.7667 50.7658 21.7667Z" fill="white"/></svg>';const He=".bidmatic-link-plate-button",Ve={COLORED_INLINE:"colored-inline",WHITE_INLINE:"white-inline"},ze={[Ve.COLORED_INLINE]:".bidmatic-logo-colored-inline",[Ve.WHITE_INLINE]:".bidmatic-logo-wite-inline"},Fe="https://bidmatic.io",We={utm_source:"branding",utm_medium:"display"},qe=d.runOnce(();ar je='<div class="bidmatic-parallax-wrapper"><div class="bidmatic-parallax-line bidmatic-parallax-line-top"></div><div class="bidmatic-parallax-frame"><div class="bidmatic-parallax-slot"></div></div><div class="bidmatic-parallax-line bidmatic-parallax-line-bottom"></div></div><div class="bidmatic-parallax-link-plate-wrapper"></div><style>.bidmatic-parallax-wrapper{box-sizing:border-box;width:100%;display:flex;flex-direction:column;align-items:center;text-align:center}.bidmatic-parallax-line{min-height:1.3em;width:100%;box-sizing:border-box;background-color:#000;color:#fff;text-transform:uppercase;font-family:Inter,Roboto,Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;text-align:center;overflow-wrap:break-word;word-break:break-word;word-wrap:break-word}.bidmatic-parallax-line-top{display:flex;flex-direction:column;align-items:center;justify-content:center}.bidmatic-parallax-line-bottom{box-sizing:border-box;height:1em;padding:1px;display:flex;flex-direction:row;justify-content:flex-end}.bidmatic-parallax-frame{width:100%;box-sizing:border-box;clip-path:polygon(0 0,100% 0,100% 100%,0 100%);-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);display:flex;justify-content:center;transition-property:height;transition-duration:.3s}.bidmatic-parallax-slot{box-sizing:border-box;position:fixed;top:50%;transform:translateZ(0) translateY(-50%);display:flex;justify-content:center}.bidmatic-parallax-link-plate-wrapper{box-sizing:border-box;width:min-content;height:100%;padding:1px 4px;background-color:#fff}</style>';const Ge=1,Ze={[Ge]:"оголошення"},Ye={en:{[Ge]:"advertisement"},uk:Ze,ru:Ze,be:Ze};conrase(e)}},Xe=Je.get(Ge),Ke=250,Qe={FIXED:"fixed",ADAPTIVE:"adaptive"},et=Qe.FIXED,tt=1,nt=".bidmatic-parallax-wrapper",it=".bidmatic-parallax-line-top",ot=".bidmatic-parallax-line-bottom",rt=".bidmatic-parallax-link-plate-wrapper",st=".bidmatic-parallax-frame",at=".bidmatic-paralpx"`)}))}const lt=dst found")}();const ut={documentHiddenProperty:"",state:!1,s.stported")}};vt,n)}))}};const ft={allowedSync:void 0,gdprApplies:!1,tcStri_tcfapi)},init)}),!ck(t)}))},getVeerests[1],tlies}),t}},ht=1e4;let pt=!1,mt=!1;const bt={};const yt={runhild(t)}},runS",e)}}})},checkSyt=!1),pt),runPreAu())):t()=>e(hed:!0}})}const It={},vt={},wt={byTimeout:1,byLowPerformance:2},St={[wt.byTimeout]:{repeatAmount:2,allowOnRefresh:!0,skipTime:18e4,removeOnBidResponse:!0,gd:e=>e.imeout=!0}},[wt.byLowPerformance]:{repeatAmount:3,allowOnRefresh:!1,skipTime:18e4,removeOnBidResponse:!1,g ${e.id}`,setFlag:e=>{e.prefilteredByLowPerformance=!0}}},Rt=d.values(wt),_t=Rt.length,Et=[];Rth(St[e])}))return!1},Bt="buyersToSkip",Tt="buyersToSkipC)}))}))}},saveToStorage:d.ify(e))}}),1e3),removeOnBtorage()}torage()},ge(),!1)},c At(i,t)},checkBi}on.href)}he(Mt.checkBidderToSkip);const Pt={ELEMENTS:"elements",SYMBOLS:"symbols",DIRECT:"direct"},xt="bdmAd",Dt=[[300,250]],Lt=["body","header","main","aside","footer","article","section","div","ol","ul","p"].join(", "),Ot="before",Nt="after",Ut="append",Ht="STYLE_WRAPPAER_C," "):""}conn",e)}}const $t=dChrn t}window.googletag=window.googletag||{},googletag.cmd=googletare(t,n)}}(window,googletag)}();