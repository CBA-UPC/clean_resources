!{"+lRy":function(t,e){},0:"1rHU":function(t,e){},"8flT":function(t,e){},"9BVN":function(t,e){},"9KS6":function(t,e){},Vxt0:function(t,e,i){"use strict";i.r(e);var n=i("v0t8"),o=i("YzXI");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}nction u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function l(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}var c=function(){function t(){var e=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.adPositions=ADPOSITIONS||[],0!==this.adPositions.length)if(this.keyValues=pageKeyValues||{},this.bodyId=BODY_ID||"",this.slotNames={},this.addUnitBase=ADD_UNIT_BASE||"",this.stickyContainer=document.getElementById("sticky-banner")||null,this.FAILSAFE_TIMEOUT="undefined"!=typeof FAILSAFE_TIMEOUT?FAILSAFE_TIMEOUT:1800,this.TIMEOUT_PREBID="undefined"!=typeof TIMEOUT_PREBID?TIMEOUT_PREBID:1e3,this.BIDDER_TIMEOUT="undefined"!=typeof BIDDER_TIMEOUT?BIDDER_TIMEOUT:1e3,window.googletag=window.googletag||{},googletag.cmd=googletag.cmd||[],window.pbjs=window.pbjs||{},pbjs.que=pbjs.que||[],"ES"===window.didomiCountry){var i=window.didomiEventListeners.push({event:"integrations.consentpassedtodfp",listener:),window.didomiOnReady.push((function(t){t.getUserConsentStatusForPurpose("create_ads_profile")&&t.getUserConsentStatusForPurpose("create_content_profile")&&i({consentStatus:!0})}))}else this.init()}var e,i,r;return e=t,(i=[{key:"init",value:function(){var t=this;this.createApsTag(),this.initialLoadGam(),this.setPrebidConfig(),this.stickyAd();var e=this.createDfpAdUnit();googletag.cmd.push((function(){e.forEach((function(e){t.slotNames[e.code]=googletag.defineSlot(e.code,e.sizes,e.divId).addService(googletag.pubads())})),googletag.enableServices()})),this.initializeInterstitial(),"eltiempo"!==this.getSiteByDomain()&&this.initializeOutOfPage(),this.eventListener();var i=document.querySelectorAll(".mods-box-body, #div-gpt-ad-tk");googletag.cmd.push((),document.addEventListener("modsBoxBodyEvent",()}},{key:"handleIntersection",value:function(t){var e,i=this;apstag.init({pubID:"3469",adServer:"googletag"});var n=[];t.forEach((function(t){e=t.id;var o=i.createPrebidAdUnit().find((function(t){return t.slotID===e}));n.push(o)})),this.executeParallelAuctionAlongsidePrebid(n)}},{key:"executeParallelAuctionAlongsidePrebid",value:function(t){var e=this,i=Object.fromEntries(Object.entries(this.slotNames).filter((function(e){var i=s(e,1)[0];return t.some(()}))),n={adServerRequestSent:!1,aps:!1,prebid:!1},o=r=function(){!0!==n.adServerRequestSent&&(n.adServerRequestSent=!0,googletag.cmd.push((function(){googletag.pubads().refresh(t.map((),{changeCorrelator:!1})})))};apstag.fetchBids({slots:t},(function(){googletag.cmd.push((function(){apstag.setDisplayBids(),n.aps=!0,o()}))})),pbjs.que.push((function(){t.forEach((function(t){return pbjs.aliasBidder("engagefront","engagefront_".concat(t.adPosition))})),pbjs.addAdUnits(t),pbjs.requestBids({adUnitCodes:t.map((),timeout:e.TIMEOUT_PREBID,bidsBackHandler:)})),window.setTimeout((,this.FAILSAFE_TIMEOUT)}},{key:"initialLoadGam",value:function(){var t=this;googletag.cmd.push((function(){googletag.pubads().disableInitialLoad(),googletag.pubads().enableVideoAds(),googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.pubads().setTargeting("device_platform",t.getDeviceType()),Object.keys(t.keyValues).forEach((function(e){null!==t.keyValues[e]&&googletag.pubads().setTargeting(e,t.keyValues[e].toString())})),"eltiempo"===t.getSiteByDomain()&&googletag.pubads().setPublisherProvidedId(o.EltId.getUserId().replace(/-/gi,""))}))}},{key:"initializeInterstitial",value:function(){var t=this;googletag.cmd.push((function(){var e=googletag.defineOutOfPageSlot("".concat(t.addUnitBase,"interstitial"),"div-gpt-ad-ist").addService(googletag.pubads());googletag.pubads().refresh([e])}))}},{key:"initializeOutOfPage",value:function(){var t=this;googletag.cmd.push((function(){var e=googletag.defineOutOfPageSlot("".concat(t.addUnitBase,"outofpage"),"div-gpt-ad-pts",googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());googletag.pubads().refresh([e])}))}},{key:"createPrebidAdUnit",value:function(){var t=this,e=this.getDeviceType(),i=n[this.getSiteByDomain()],r={skin:"11",interstitial:"22",sticky:"33"};return this.adPositions.map((function(n){var s,a,u,l,c,d,f,p=null===(s=n[0])||void 0===s?void 0:s.adUnit,y=null===(a=n[0])||void 0===a?void 0:a.adPosition,m=null===(u=n[0])||void 0===u?void 0:u.adDiv,g=null===(l=n[0])||void 0===l?void 0:l.prebidSizes[e],v=null==g?void 0:g.map((function(t){return[t[0],t[1]]})),b=r[y]||y,k=[null!=i&&i.appnexus?{bidder:"appnexus",params:{placementId:null==i?void 0:i.appnexus[e][y]}}:null,null!=i&&i.richaudience?{bidder:"richaudience",params:{pid:null==i?void 0:i.richaudience[e][y],supplyType:"site",keywords:Object.keys(t.keyValues).map(().join(";")}}:null,null!=i&&i.ix?{bidder:"ix",params:{siteId:null==i?void 0:i.ix[e][y],size:v}}:null,null!=i&&i.rubicon?{bidder:"rubicon",params:{accountId:17682,siteId:null==i?void 0:i.rubicon.siteId[e],zoneId:null==i?void 0:i.rubicon.zoneId[e][y],position:null==i?void 0:i.rubicon.position[y]}}:null,null!=i&&i.smartadserver?{bidder:"smartadserver",params:{domain:"https://prg.smartadserver.com",siteId:null==i||null===(c=i.smartadserver)||void 0===c?void 0:c.siteId,pageId:null==i||null===(d=i.smartadserver)||void 0===d?void 0:d.pageId,formatId:null==i?void 0:i.smartadserver[e][y]}}:null,null!=i&&i.criteo?{bidder:"criteo",params:{networkId:795,publisherSubId:p}}:null,null!=i&&i.optidigital?{bidder:"optidigital",params:{publisherId:"p222",placementId:y}}:null,null!=i&&i.ogury&&"mobile"===e?{bidder:"ogury",params:{assetKey:null==i||null===(f=i.ogury)||void 0===f?void 0:f.assetKey,adUnitId:null==i?void 0:i.ogury.mobile[y]}}:null,{bidder:"engagefront_".concat(y),params:{tagid:"1".concat(b),userId:o.EltId.getUserId()}}].filter((function(t){var e,n=null==t?void 0:t.bidder,o=null==i||null===(e=i[n])||void 0===e?void 0:e.slots;return!(o&&!1===o[y]&&t.bidder!=="engagefront_".concat(y))}));return{slotID:m,adPosition:y,slotName:p,sizes:v,code:p,mediaTypes:{banner:{sizes:v}},bids:k.filter(()}})).filter(()}},{key:"createDfpAdUnit",value:function(){var t=this.getDeviceType();return this.adPositions.map((function(e){var i,n,o,r=null===(i=e[0])||void 0===i?void 0:i.adUnit,s=null===(n=e[0])||void 0===n?void 0:n.adDiv,a=null===(o=e[0])||void 0===o?void 0:o.dfpSizes[t];return{code:r,divId:s,sizes:null==a?void 0:a.map(()}}))}},{key:"setPrebidConfig",value:function(){var t=this;pbjs.que.push((function(){pbjs.setConfig({enableSendAllBids:!0,priceGranularity:"high",bidderTimeout:t.BIDDER_TIMEOUT,consentManagement:{gdpr:{cmpApi:"iab",timeout:8e3,defaultGdprScope:!0}},userSync:{filterSettings:{iframe:{bidders:"*",filter:"include"}}}})})),this.getBidCpmAdjustment()}},{key:"getBidCpmAdjustment",value:function(){pbjs.bidderSettings={appnexus:{adjustBidCpm:function(t){return.9*t},storageAllowed:!0},rubicon:{adjustBidCpm:,criteo:{storageAllowed:!0},ix:{storageAllowed:!0}}}},{key:"getSiteByDomain",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"simple",e=window.location.hostname,i=e.split("."),n=i.length>2?i.slice(1).join("."):e;return"full"===t?n:i.length>1?i[1]:i[0]}},{key:"getDeviceType",value:function(){var t=window.innerWidth;return t<768?"mobile":t<992?"tablet":"desktop"}},{key:"eventListener",value:function(){var t=this;googletag.cmd.push((function(){googletag.pubads().addEventListener("slotRenderEnded",(function(e){if("div-gpt-ad-tk"===e.slot.getSlotElementId()&&(e.isEmpty||(document.body.classList.add("takeover"),document.body.classList.remove("bg_general"))),"div-box-two"===e.slot.getSlotElementId()&&!e.isEmpty&&!isMobile.any){var i=document.getElementById(e.slot.getSlotElementId()),n=i.parentNode.parentNode.clientHeight;i.style.position="sticky",i.style.height="auto",i.style.top="60",i.parentElement.dataset.height=n,i.parentElement.setAttribute("id","divBoxTwo"),document.dispatchEvent(new Event("eventHeight"))}e.isEmpty||!e.size||["div-gpt-ad-tk","div-gpt-ad-ist","div-box-one","div-box-one-ct","div-box-sticky","div-box-one-ct-test"].includes(e.slot.getSlotElementId())||document.getElementById(e.slot.getSlotElementId()).parentElement.removeAttribute("style");var o={event:e.isEmpty?"elt-ads-empty":"elt-ads-loaded",device:t.getDeviceType(),"ad-unit-path":e.slot.getAdUnitPath(),"ad-div-id":e.slot.getSlotElementId(),"targeting-map":e.slot.getTargetingMap(),"key-values":t.keyValues};window.dataLayer.push(o)}))}))}},{key:"stickyAd",value:function(){var t=this;if(this.stickyContainer){this.stickyClose();var e=this.stickyContainer.querySelectorAll("#div-box-sticky"),i="city"===this.bodyId&&"mobile"===this.getDeviceType(),n="city"===this.bodyId?"#city_table_row_2, #meteograma, #table_marine":"#div-box-one, #div-box-one-ct, #div-box-one-ct-test",o=document.querySelector("mobile"===this.getDeviceType()?n:"#container-div-box-one, #container-div-box-one-ct, #container-div-box-one-ct-test");if(o){var r=!1,s=!1;new IntersectionObserver((function(n){n.forEach((function(n){if(i?n.isIntersecting:!n.isIntersecting){var o;if(s&&(null===(o=t.stickyContainer)||void 0===o||o.classList.add("sticky-banner-visible")),googletag.cmd.push((function(){googletag.pubads().addEventListener("slotRenderEnded",(function(e){"div-box-sticky"===e.slot.getSlotElementId()&&(e.isEmpty?(t.stickyContainer.hidden=!0,window.dataLayer.push({event:"elt-sticky-empty"})):(s=!0,setTimeout((,300),window.dataLayer.push({event:"elt-sticky-visible",banner_size:e.size?e.size[1]:null})))}))})),r)return;t.handleIntersection(e),r=!0}else if("mobile"!==t.getDeviceType()){var a;null===(a=t.stickyContainer)||void 0===a||a.classList.remove("sticky-banner-visible")}}))}),{root:null,rootMargin:"24px 0px 0px 0px",threshold:0}).observe(o)}}}},{key:"stickyClose",value:function(){var t=this;document.getElementById("sticky-close").addEventListener("click",(function(e){window.dataLayer.push({event:"elt-sticky-close"}),e.preventDefault(),t.stickyContainer.remove()}))}},{key:"createApsTag",value:function(){if(!window.apstag){window.apstag={init:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return apstag._Q.push(["i",e])},fetchBids:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return apstag._Q.push(["f",e])},setDisplayBids:function(){},targetingKeys:_Q:[]};var t=document.createElement("script");t.async=!0,t.src="//c.amazon-adsystem.com/aax2/apstag.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}}])&&u(e.prototype,i),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=c,new c},YzXI:function(t,e,i){"use strict";var n;i.r(e),i.d(e,"EltId",();var o=new Uint8Array(16);ar s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=u=[],l=0;l<256;++l)u.push((l+256).toString(16).substr(1));var c=var d=f=i("p46w"),p=i.n(f); v=function(){ar e,i,n;return e=t,n=[{key:"checkEltId",value:function(){var e={expires:365,domain:COOKIE_DOMAIN_VISITOR,SameSite:"Strict",secure:!0};if(Didomi.getUserConsentStatusForPurpose("cookies")&&Didomi.getUserConsentStatusForPurpose("create_ads_profile")){if(void 0===t.getUserId()){var i=d();p.a.set("guid",i,e)}}else p.a.remove("guid",e)}},{key:"getUserId",value:],(i=[{key:"Init",value:function(){window.didomiOnReady.push((function(e){void 0===e.getUserConsentStatusForPurpose("cookies")?e.on("consent.changed",():t.checkEltId()}))}}])&&m(e.prototype,i),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},jT1M:function(t,e){},mpmq:function(t,e){},naBO:function(t,e){},p46w:"v+RE":v0t8:);