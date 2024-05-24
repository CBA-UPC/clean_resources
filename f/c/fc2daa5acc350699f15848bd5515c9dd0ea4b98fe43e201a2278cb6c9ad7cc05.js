/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={7472:17:4969:1828:2951:9739:5763:4677:9565:7007:7381:9137:5943:5170:3999:407:5534:1311:9164:9755:1065:function(n){n.exports={DEFAULT_INTERVAL:20}},6214:2135:1417:6574:2647:8791:function(){},8133:function(n,t,i){var e=i(7007),r=i(3509).U,o=t.ActivationCodeError=r("ActivationCodeError"),a=(t.ProjectJSError=r("ProjectJSError"),i(6678)),u=i(2809),c=i(2365),s=i(5943),f=i(7246),l=i(2380),d=i(9495),v=i(6556),h=i(3938),p=i(2230),g=i(336),m=i(1071),_=i(8741),w=i(7528),y=i(9422),b=i(818),E=i(341),I=i(349),A=i(4534),T=i(9753).mM,S=i(3497),R=i(1643),k=(i(4545),i(4436)),N=i(4726),D=i(3813).Promise,C=i(2530),O=i(652),x=(i(3587),i(2972)),P=i(182),M=i(9557),L=i(1148),V=(p=i(2230)).get("stores/session"),F=p.get("stores/audience_data"),U=p.get("stores/action_data"),z=p.get("stores/cleanup"),j=p.get("stores/directive"),G=p.get("stores/global"),B=p.get("stores/group_data"),q=p.get("stores/layer_data"),H=p.get("stores/layer"),Y=p.get("stores/pending_events"),K=p.get("stores/plugins"),$=p.get("stores/rum"),W=p.get("stores/visitor"),X=p.get("stores/view_data"),J=p.get("stores/view"),Q=p.get("stores/visitor_id"),Z=p.get("stores/visitor_bucketing"),nn=p.get("stores/xdomain"),tn=i(407),en=i(1915),rn=i(9152),on=t;alize=t.initGlobalStore=t.initializePlugins=t.activate=function(){try{var n=[];S.log("Activated client"),dn(_.Lifecycle.preActivate);var t=v.now();E.dispatch(u.ACTIVATE,{activationId:String(t),activationTimestamp:t});var i=X.getAll();P.registerViews(i),M.setId(M.getOrGenerateId()),n.push(c.trackPostRedirectDecisionEvent()),E.dispatch(u.MERGE_VARIATION_ID_MAP,{variationIdMap:M.getVariationIdMap()}),E.dispatch(u.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:M.getPreferredLayerMap()}),dn(_.Lifecycle.postVisitorProfileLoad),n.push((p=K.getAllPlugins(_.PluginTypes.visitorProfileProviders),g=W.getVisitorProfile(),M.populateEagerVisitorData(p,g)).then(());var r=cn(),o=h.decideGlobal(r);S.log("Made global decision",r,"->",o),E.dispatch(u.RECORD_GLOBAL_DECISION,o);var a=c.trackClientActivation();a?S.log("Tracked activation event",a):S.log("Not tracking activation event");var f=on.setUpViewActivation(i),d=[];return e.each(f,(),$.getSampleRum()&&E.dispatch(u.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,{viewsInitiallyActivatedCount:d.length}),dn(_.Lifecycle.postViewsActivated),dn(_.Lifecycle.postActivate),s.emitActivatedEvent(),D.all(n).then((,l.emitError)}catch(m){return l.emitError(m),D.reject(m)}var p,g},on.setUpViewActivation=on.activateViewOnCallback=t.onViewsActivated=t.onPageDeactivated=t.initializeApi=t.persistItemsWithId=t.initializeXDomainStorage=t.decideAndExecuteLayerASAP=t.decideLayer=t.getActionsForDecision=,6450:1224:5880:1477:6678:2972:2365:function(n,t,i){var e=i(7007),r=i(2809),o=i(2380),a=i(9830),u=i(6556),c=i(7767),s=i(2230),f=i(1071),l=i(8741),d=i(5615),v=(i(7528),i(9422),i(8296)),h=i(341),p=i(4534),g=i(3497),m=(i(4545),i(3813).Promise),_=i(8065),w=i(652),y=(i(3587),i(6457)),b=i(9137),E=s.get("stores/client_metadata"),I=s.get("stores/global"),A=s.get("stores/session"),T=s.get("stores/view"),S=s.get("stores/plugins"),R=s.get("stores/layer"),k=s.get("stores/layer_data"),N=s.get("stores/observed_redirect"),D=s.get("stores/pending_redirect"),C=s.get("stores/visitor"),O=s.get("stores/directive"),x=s.get("stores/event_data"),P=s.get("stores/visitor_id");kClientActivation=t.trackCustomEvent=t.trackDecisionEvent=t.trackPostRedirectDecisionEvent=function(){if(!O.shouldSendTrackingData()||N.hasTracked())return m.resolve();var n=N.get();if(!n)return m.resolve();var t=M(n,!1),i=y.TrackLayerDecisionTimingFlags.postRedirectPolicy;return t.timing=i,z(i,[y.PostRedirectPolicies.TRACK_IMMEDIATELY],t),z(y.TrackLayerDecisionTimingFlags.postRedirectPolicy,[y.PostRedirectPolicies.TRACK_AFTER_SYNC],t),h.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA),m.resolve()},t.trackClickEvent=t.trackViewActivation=,652:2380:7246:9701:5928:9830:8576:626:2809:8741:5615:9422:8296:6457:9667:61:584:3938:2230:336:6556:7767:1071:9753:3352:7441:4545:1148:5774:7528:1173:818:341:349:4534:6913:4160:1929:7829:4146:8056:3075:3997:3813:5808:1643:function(n,t,i){var e=i(7007),r=i(2380),o=i(8741),a=i(3075),u=i(9753).mM,c=i(3497),s=i(3784),f=i(2230).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var n=f.getEventsString();u.setItem(l,n)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},t.getPendingEvents=t.retryPendingEvents=,4436:7715:2024:3778:749:5282:8536:2362:8897:721:8961:3485:2017:768:8219:7771:4310:3142:9505:9715:9442:9897:9070:3959:863:5203:8673:70:7266:2407:3059:7639:7270:7135:542:8207:7455:6028:8475:395:2169:1284:9243:148:2036:1067:8431:9339:3509:9489:7058:1972:3497:9168:4726:2530:6425:6823:8065:8120:1480:3587:9140:142:2030:3784:182:9557:function(n,t,i){var e=i(7007),r=i(341),o=i(2809),a=i(9830),u=i(626),c=i(9339),s=i(6556),f=i(2230),l=i(8741),d=i(3075),v=i(1972),h=i(9753).mM,p=i(3497),g=i(3813).Promise,m=i(6425),_=i(8741).VisitorStorageKeys,w=i(1148),y=f.get("stores/cookie_options"),b=f.get("stores/global"),E=f.get("stores/layer"),I=f.get("stores/plugins"),A=f.get("stores/rum"),T=f.get("stores/session"),S=f.get("stores/visitor_id"),R=f.get("stores/visitor_bucketing"),k=f.get("stores/visitor"),N=f.get("stores/provider_status");ction x(n,t,i){try{var e=P(n);i||(t=d.stringify(t));try{h.setItem(e,t)}catch(r){throw p.warn("Visitor / Unable to set localStorage key, error was:",r),new Error("Unable to set localStorage")}}catch(r){p.warn("Unable to persist visitor data:",r.message)}}tOrGenerateId=t.getCurrentId=t.hasSomeData=t.setId=function(n){var i,u,s=S.getBucketingId();r.dispatch(o.SET_VISITOR_ID,n),S.getBucketingId()!==s&&(!),t.deleteOldLocalData());try{S.getVisitorIdLocator()||t.maybePersistVisitorId(n)}catch(f){if(p.error("Visitor / Unable to persist visitorId, disabling tracking"),r.dispatch(o.LOAD_DIRECTIVE,{trackingDisabled:!0}),i=f,null!=(u=c.MismatchError)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](i):i instanceof u)throw p.error("Visitor / Cookie not set to correct value:",f),new Error("Cookie mismatch error while persisting visitorId");throw f}t.refreshSession()},t.getVariationIdMap=function(){return C(_.VARIATION_MAP)||{}},t.updateVariationIdMap=t.persistVariationIdMap=t.getPreferredLayerMap=t.updatePreferredLayerMap=t.persistTrackerOptimizelyData=function(n){x(_.TRACKER_OPTIMIZELY,n)},t.refreshSession=t.populateEagerVisitorData=t.populateLazyVisitorData=t.populateVisitorData=t.persistBehaviorEvents=function(n){x(_.EVENTS,n)},t.persistBehaviorEventQueue=t.getPersistedBehaviorEventCount=t.persistLayerStates=t.persistSessionState=t.persistVisitorProfile=t.persistVisitorBucketingStore=t.getUserIdFromKey=t.maybePersistVisitorId=t.getAttribute=function(n){return k.getAttribute(n)},t.getPendingAttributeValue=t.isForeignKey=L,t.checkKeyForVisitorId=t.getIdFromKey=t.getStorageKeyFromKey=t.deleteOldLocalData=t.deleteOldForeignData=t.loadForeignData=t.getNamespace=function(){return b.getNamespace()},t.serializeFieldKey=t.removeLegacySessionStateCookies=,9495:5581:8155:9430:1915:7130:9889:9181:3229:5342:2583:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(3557)),n.registerAudienceMatcher("behavior",i(6023))}},6023:3557:1860:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(2064))}},2064:9030:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(5546)),n.registerAudienceMatcher("first_session",i(8920))}},8920:5546:2902:3005:6341:8142:2124:3881:2552:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},8995:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},2575:933:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(8912)),n.registerAudienceMatcher("campaign",i(2786))}},2786:8912:1866:1955:457:1119:9503:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},7470:1267:9863:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(2995)),n.registerAudienceMatcher("device_type",i(7612))}},7612:2995:2606:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(9531)),n.registerAudienceMatcher("query",i(5449))}},5449:9531:function(n,t,i){var e=i(8431);n.exports={provides:"queryParams",getter:[function(){return e.getQueryParams()}]}},8338:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(8453)),n.registerAudienceMatcher("referrer",i(6373))}},6373:8453:5008:function(n,t,i){n.exports=function(n){n.registerVisitorProfileProvider(i(946)),n.registerAudienceMatcher("source_type",i(4489))}},4489:946:1230:2908:2007:4157:2710:881:723:123:1750:1663:7630:5367:8988:9152:8248:function(){}},__webpack_module_cache__={};_webpack_require__.amdO={},__webpack_require__.g=),__webpack_require__.nmd=var __webpack_exports__={};!function(){try{!function(){var n=window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(9152).initialize();var t=__webpack_require__(4545);t.time("gtagReady");var i=__webpack_require__(3497),e=__webpack_require__(2230);__webpack_require__(5581);var r=e.get("stores/directive");if(!__webpack_require__(3784).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(3999),u=__webpack_require__(336),c=__webpack_require__(1480),s={"accountId": "5090114122", "namespace": "21259101085", "revision": "5935", "anonymizeIP": false, "enableForceParameters": true, "experimental": {"trimPages": false}, "projectId": "21259101085", "layers": [{"changes": [{"id": "f6794d0ab8884dc097eb98b01384512f", "type": "custom_code", "value": function($){window.djab.Test99P=function(){var e,t,i={},a=window.optimizelyEdge,n=a.get("utils"),r=-1<window.location.search.indexOf("qa_param"),c="eVar124",o=function(e,t,i){window.addEventListener(e,function(e){var a=e.target.closest(t);if(null!==a){var n=i.bind(a);n(e)}})};const l=()=>new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});var _=function(e){t=setTimeout(function(){window.optimizelyEdge?(clearTimeout(t),e()):_(e)},50)},d=function(){var e={assignCampaigns:function(e){e[this.evar]=e[this.evar]||[];for(var t=this.campaignArray.length-1;0<=t;t--)e[this.evar].push(this.campaignArray[t]),this.campaignArray.splice(t,1)},campaignArray:[],evar:c,formatActiveExperiments:function(){var e=[],t=window.optimizelyEdge.get("state").getActiveExperiments();for(var i in t)e.push(t[i].id+":"+t[i].variation.id);return e},init:function(){var e=this.formatActiveExperiments();if(e.length){this.campaignArray=e;try{this.trackDelayedCampaigns(window.s)}catch(e){console.warn("Adobe trackDelayedCampaigns error")}}},trackDelayedCampaigns:function(e){e[this.evar]=e[this.evar]||[],e.linkTrackVars+=","+this.evar;for(var t=this.campaignArray.length-1;0<=t;t--)e[this.evar].push(this.campaignArray[t]),this.campaignArray.splice(t,1);e.tl(!0,"o","OptimizelyLayerDecision")}};window.OptimizelyEdgeIntegrators={get:function(t){if("adobe"===t)return e;throw new Error(t+" is not a supported module")}}};const s=()=>{const e=window.optimizelyEdge.get("state").getActiveExperiments();void 0===window.djab_expSent&&(window.djab_expSent=!1);let t=[],i=[];if(window.newrelic,"undefined"!=window.newrelic&&!window.djab_expSent){for(let a in e)t.push(e[a].id),i.push(`${e[a].id}:${e[a].variation.name}`);window.newrelic.setCustomAttribute("experimentID",t.join("-")),window.newrelic.setCustomAttribute("variationID",i.join("-"))}window.djab_expSent=!0};var p=function(e,t){var i={eventName:e,type:"event"};void 0!==t&&(i.tags=t),a.push(i),r&&console.log("%c🏆","font-weight: bold",e,void 0!==t?t:"")};const u=()=>{o("click",'\n      [type="What\'s News"] a,\n      [type="Most Popular News"] a,\n      [type="Recommended For You"] a,\n      [type="Top Stories"] a,\n      [type="Most Popular"] a\n      ',()=>{p("99P_click_aaanf_aside"),p("99P_click_secondary_content"),p("99P_click_article_page"),p("99P_click_right_rail")}),o("click",'[aria-label="Most Popular News"] a',()=>{p("99P_click_most_popular_news"),p("99P_click_secondary_content"),p("99P_click_article_page"),p("99P_click_right_rail")}),o("click",'[aria-label="Most Popular Opinion"] a',()=>{p("99P_click_most_popular_opinion"),p("99P_click_secondary_content"),p("99P_click_article_page"),p("99P_click_right_rail_opinion_article"),p("99P_click_right_rail")}),o("click",'[aria-label="Recommended Videos"] a',()=>{p("99P_click_secondary_content"),p("99P_click_article_page"),p("99P_click_right_rail")}),o("click",'#__next section p a[data-type="link")}),o("click",'#__next [data-inset_type="relatedbyarticletype"] ul li a, #__next [data-inset_type="richtext"] ul li a',()=>{p("99P_click_article_body_inset"),p("99P_click_secondary_content"),p("99P_click_article_page")}),o("click","#__next .automated-series-nav a, #__next .series-nav__inset-container a",()=>{p("99P_click_on_series_nav"),p("99P_click_secondary_content"),p("99P_click_article_page")}),o("click",'#__next [data-skip-label="What to Read Next"] )}),o("click","#__next header a, header button",()=>{p("99P_click_article_page")}),o("click","#__next nav.breadcrumb ul li a, #__next nav.breadcrumb ol li a",()=>{p("99P_click_article_page")}),o("click",'[aria-label="Utility Bar"] button, [aria-label="Utility Bar"] a, .nk-layer-organizer nav[aria-label="Text Size"] ul li button',()=>{p("99P_click_article_page")}),o("click",'.nk-layer-organizer [aria-describedby="Share this article"] button',()=>{p("99P_click_article_page")}),o("click",'[data-inset_type="newsletterinset"] button, [data-inset_type="newsletterinset"] label',()=>{p("99P_click_article_body_inset")}),o("click",'#__next .media-layout[data-type="media"][data-layout="wrap"] a, #__next .media-layout[data-type="media"][data-layout="wrap"] button, #__next .media-layout[data-type="media"][data-layout="wrap"] .audio-scrub-wrapper, #__next .media-layout[data-type="media"][data-layout="wrap"] .audio-volume-slider',()=>{p("99P_click_article_body_inset")}),n.waitForElement('.media-layout[data-type="media"][data-layout="wrap"] .audio-subscribe.hover').then(e=>{const t=e.querySelectorAll("a");for(const e of t)e.addEventListener("click",()=>{p("99P_click_article_body_inset")})}),n.waitForElement('.media-layout[data-type="video"][data-layout="inline"], .media-layout[data-type="inset"][data-inset_type="videobyguid"], .media-layout[data-type="inset"][data-inset_type="youtube"]').then(e=>{e.addEventListener("clic)})}),(document.querySelectorAll('.aside-container span[class*="OpinionLabel"]')||[]).forEach(e=>{e.closest("a").addEventListener("clic"))})},y=e=>{let t;if("string"==typeof e&&(t=document.querySelector(e)),!t)return 0;const i=window.scrollY,{offsetTop:a,offsetHeight:n}=t;if(i<a)return 0;if(i>a+n)return 100;const r=100*(i-a)/n;return Math.round(1e3*r)/1e3},m=()=>{let e=0;const t=()=>{const t=y("article");e<t&&(e=t)};return window.addEventListener("scroll",t),window.addEventListener("beforeunloa)}),t},w=(e,t)=>{const i=document.getElementById(e);if(!i)return;const a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&setTimeo)},1e3)})});a.observe(i)},g=()=>{w("AD_G","99P_ad_viewed"),w("AD_G","99P_ad_viewed_rail"),w("AD_Z","99P_ad_viewed"),w("AD_Z","99P_ad_viewed_rail"),w("AD_L","99P_ad_viewed"),w("wsj-body-AD_RESHORT","99P_ad_viewed"),w("wrapper-wsj-body-AD_RE","99P_ad_viewed")},k=e=>{e&&n.waitForElement(`.aside-container ${e}`).then(e=>{const t=document.querySelector("#AD_Z"),i=t&&t.parentElement.parentElement.parentElement.parentElement,a=document.querySelector(".article-comments"),n=i?Number(window.getComputedStyle(i).marginTop.split("px")[0]):0,r=i&&a?a.offsetTop-i.offsetTop:a.offsetTop-e.offsetTop,c=r+n+e.offsetHeight+60;e.style.minHeight=`${c}px`,i&&(i.style.marginTop=0)})};return i.init=function(t){_(function(){const{djab_preview:i}=l();if(r&&i&&(t=i),e=t,a.push({type:"sendEvents"}),document.body.classList.add("t99p"+e),u(),g(),m(),"0"!==e){const e=document.querySelector("#wrapper-AD_G");e&&e.parentElement&&(e.parentElement.style.minHeight="1050px")}"4"===e?k('div[type="Top Stories"]'):"5"===e?k('div[type="Most Popular"]'):"6"===e&&k('.sticky[type="Recommended For You"]'),d(),window.OptimizelyEdgeIntegrators.get("adobe").init(),s()})},i}();
}, "dependencies": []}, {"id": "496ef1be43fb44cf8f41a21aae4d024b", "type": "append", "selector": "head", "value": "<style>.t99p1 div[aria-label=\"Most Popular Opinion\"] div[type=\"opinion\"],\n.t99p2 div[aria-label=\"Most Popular Opinion\"] div[type=\"opinion\"],\n.t99p3 div[aria-label=\"Most Popular Opinion\"] div[type=\"opinion\"] {\n  content-visibility: hidden;\n  @supports not (content-visibility: hidden) {\n    display: none;\n  }\n}\n\n.t99p1 div[aria-label=\"Most Popular Opinion\"] div[type=\"opinion_new\"],\n.t99p2 div[aria-label=\"Most Popular Opinion\"] div[type=\"opinion_new\"],\n.t99p3 div[aria-label=\"Most Popular Opinion\"] div[type=\"opinion_new\"] {\n  content-visibility: visible;\n  @supports not (content-visibility: visible) {\n    display: block;\n  }\n}\n\n.t99p1 div[aria-label=\"Most Popular News\"],\n.t99p1 div[aria-label=\"Recommended Videos\"],\n.t99p2 div[aria-label=\"Most Popular News\"],\n.t99p2 div[aria-label=\"Recommended Videos\"],\n.t99p3 div[aria-label=\"Most Popular News\"],\n.t99p3 div[aria-label=\"Recommended Videos\"],\n.t99p4 div[aria-label=\"Most Popular News\"],\n.t99p4 div[aria-label=\"Recommended Videos\"],\n.t99p5 div[aria-label=\"Most Popular News\"],\n.t99p5 div[aria-label=\"Recommended Videos\"],\n.t99p6 div[aria-label=\"Most Popular News\"],\n.t99p6 div[aria-label=\"Recommended Videos\"],\n.t99p4 div[aria-label=\"Most Popular Opinion\"],\n.t99p5 div[aria-label=\"Most Popular Opinion\"],\n.t99p6 div[aria-label=\"Most Popular Opinion\"] {\n  display: none !important;\n}\n\n.t99p1 .aside-container div[type=\"What's News\"],\n.t99p2 .aside-container div[type=\"Most Popular News\"],\n.t99p3 .aside-container div[type=\"Recommended For You\"]:not(.sticky),\n.t99p4 .aside-container div[type=\"Top Stories\"],\n.t99p5 .aside-container div[type=\"Most Popular\"],\n.t99p6 .aside-container .sticky[type=\"Recommended For You\"]{\n  content-visibility: visible;\n  @supports not (content-visibility: visible) {\n    display: block;\n  }\n}\n\n.t99p4 article section div[data-layout=\"bleed\"],\n.t99p5 article section div[data-layout=\"bleed\"],\n.t99p6 article section div[data-layout=\"bleed\"],\n.t99p4 article section div[data-layout=\"margin\"],\n.t99p5 article section div[data-layout=\"margin\"],\n.t99p6 article section div[data-layout=\"margin\"],\n.t99p4 article section div[data-layout=\"header\"],\n.t99p5 article section div[data-layout=\"header\"],\n.t99p6 article section div[data-layout=\"header\"],\n.t99p4 article section .paywall .ad-portal,\n.t99p5 article section .paywall .ad-portal,\n.t99p6 article section .paywall .ad-portal {\n  position: relative;\n  z-index: 1;\n}</style>", "dependencies": []}], "id": "25507200206", "name": "(Final) Test #99P - Article Right Rail Design and Content - News", "commitId": "26136721590", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "25446930570", "25042720794"], "audienceName": "[99P] Desktop Users,[99P] QA Param", "changes": null, "id": "25489210197", "integrationSettings": null, "variations": [{"id": "25474900177", "name": "Original", "actions": [{"viewId": "25075070965", "changes": [{"id": "2c7e82e4161545bfbd418cddd516c7ce", "type": "custom_code", "value": function($){window.djab.Test99P.init('0');
}, "dependencies": []}]}]}, {"id": "25491210179", "name": "Variation #1", "actions": [{"viewId": "25075070965", "changes": [{"id": "f471c446596a49c1bea6f688986c3e7f", "type": "custom_code", "value": function($){window.djab.Test99P.init('1');
}, "dependencies": []}]}]}, {"id": "25488440015", "name": "Variation #2", "actions": [{"viewId": "25075070965", "changes": [{"id": "d3bfb2c2efd4486485f19343682dba88", "type": "custom_code", "value": function($){window.djab.Test99P.init('2');
}, "dependencies": []}]}]}, {"id": "25492170037", "name": "Variation #3", "actions": [{"viewId": "25075070965", "changes": [{"id": "a8f183191b5f463da1a9b8e081675c88", "type": "custom_code", "value": function($){window.djab.Test99P.init('3');
}, "dependencies": []}]}]}, {"id": "25483510167", "name": "Variation #4", "actions": [{"viewId": "25075070965", "changes": [{"id": "4a4d95e5e5e94704877b91ec10529387", "type": "custom_code", "value": function($){window.djab.Test99P.init('4');
}, "dependencies": []}]}]}, {"id": "25496540020", "name": "Variation #5", "actions": [{"viewId": "25075070965", "changes": [{"id": "4c5180b7f6b849b78268c9a5b5593d4d", "type": "custom_code", "value": function($){window.djab.Test99P.init('5');
}, "dependencies": []}]}]}, {"id": "25493610166", "name": "Variation #6", "actions": [{"viewId": "25075070965", "changes": [{"id": "1efda75365024d56ad64a22f26ba8c37", "type": "custom_code", "value
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25474900177", "endOfRange": 1429}, {"entityId": "25491210179", "endOfRange": 2858}, {"entityId": "25488440015", "endOfRange": 4287}, {"entityId": "25492170037", "endOfRange": 5716}, {"entityId": "25483510167", "endOfRange": 7145}, {"entityId": "25496540020", "endOfRange": 8574}, {"entityId": "25493610166", "endOfRange": 10000}], "name": "(Final) Test #99P - Article Right Rail Design and Content - News", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25075070965"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "26520600068", "name": "Evan count up timer", "commitId": "26743670473", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "26556660094", "integrationSettings": null, "variations": [{"id": "26565910086", "name": "Original", "actions": [{"viewId": "26595450012", "changes": [{"id": "DA38D853-3F43-4135-93A6-B0723135D02F", "type": "custom_code", "value": function($){const utils = window.optimizelyEdge.get('utils');
setTimeout(() => {
  let ctDelay = false;
  let timerInitialized = false;

  utils.waitForElement('#main').then(() => {
    const timer = `<div class="countup" id="countup" style="display:none;">
          <div class="countup__wrap">
            <div class="countup__days">
                <span class="countup__unit" id="days"></span>
                <span class="countup__label">Days</span>
            </div>

            <div class="countup__hours">
                <span class="countup__unit" id="hours"></span>
                <span class="countup__label">Hours</span>
            </div>
            
            <div class="countup__minutes">
                <span class="countup__unit" id="minutes"></span>
                <span class="countup__label">Mins</span>
            </div>
          </div>
        </div>`;

    function getTimeRemaining(endtime) {
      const t = Date.parse(new Date()) - Date.parse(endtime);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
      };
    }

    function initializeClock(id, endtime) {
      function updateClock() {
        const t = getTimeRemaining(endtime);
        const clock = document.getElementById(id);
        clock.style.display = 'block';
        clock.querySelector('#days').innerHTML = t.days;
        clock.querySelector('#hours').innerHTML = `0${t.hours}`.slice(-2);
        clock.querySelector('#minutes').innerHTML = `0${t.minutes}`.slice(-2);
      }
      updateClock();
      setInterval(updateClock, 1000);
    }

    const createTimer = () => {
      ctDelay = true;
      utils.waitForElement('#main').then((container) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('evan-timer');

        container.insertBefore(newDiv, container.firstChild);

        utils.waitForElement('.evan-timer').then((timerDiv) => {
          timerDiv.innerHTML = timer;
          if (timerInitialized === false) {
            utils.waitForElement('.countup').then(() => {
              const timerDeadline = 'March 29 2023 09:00:00 UTC-0500';
              initializeClock('countup', timerDeadline);
              timerInitialized = true;
            });
          }
          ctDelay = false;
        });
      });
    };

    const root = document.querySelector('#root');
    const rootObserver = new MutationObserver(() => {
      const countUp = document.querySelector('#countup');
      if (countUp === null && ctDelay === false) {
        createTimer();
      }
    });

    rootObserver.observe(root, { subtree: true, childList: true });
    // Forcing to execute the rootObserver
    document.querySelector('#root').appendChild(document.createElement('div'));
  });
}, 1000);
}, "dependencies": []}, {"id": "5CB3687E-FA07-4588-A90D-70F23A3953B4", "type": "append", "selector": "head", "value": "<style>.evan-timer {\n  margin: 20px 0 40px;\n}\n.countup {\n  color: #000;\n  position: relative;\n}\n.countup__wrap {\n  width: 100%;\n  max-width: 227px;\n  margin: 0 auto;\n  display: flex;\n}\n.countup__title {\n  font-family: \"Chronicle Display\", serif;\n  margin: 10px 0 0;\n  font-size: 26px;\n  font-weight: 700;\n  padding-bottom: 12px;\n  line-height: 1;\n  text-align: center;\n}\n.countup.one__day .countup__days {\n  display: none;\n}\n.countup__days {\n  margin-left: auto;\n}\n.countup__minutes {\n  margin-right: auto;\n}\n.countup__days,\n.countup__hours,\n.countup__minutes,\n.countup__seconds {\n  background-color: #ffffff;\n  display: inline-block;\n  padding: 5px;\n  min-width: 50px;\n  box-sizing: border-box;\n  border: 1px solid #000;\n  text-align: center;\n}\n.countup__days,\n.countup__hours {\n  margin-right: 5px;\n}\n.countup__unit {\n  display: block;\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 1;\n  font-family: \"Chronicle Display\", serif;\n}\n.countup__label {\n  font-size: 12px;\n  font-family: \"Whitney SSm\", Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n\n@media screen and (max-width: 414px) {\n  .countup__title {\n    font-size: 16px;\n    padding-bottom: 10px;\n    margin-top: 10px;\n  }\n  .countup__days,\n  .countup__hours,\n  .countup__minutes,\n  .countup__seconds {\n    padding: 3px;\n    width: 45px;\n  }\n  .countup__unit {\n    font-size: 22px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .countup {\n    margin-bottom: 20px !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .countup {\n    margin-bottom: 20px !important;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": "Evan count up timer", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26595450012"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "C949701E-6506-4A4D-BFB4-2D3835E3C987", "type": "custom_code", "value": function($){window.djab.Test102P = (function () {
	var pub = {};
	var optimizely = window.optimizelyEdge;
	var utils = optimizely.get('utils');
	var debug = -1 < window.location.search.indexOf('qa_param');

	var evar = 'eVar126';
	var v, wfo;

	// Utilities
	// ----------------------------------------

	var on = function (type, selector, cb) {
		window.addEventListener(type, function (event) {
			var target = event.target.closest(selector);

			if (null === target) {
				return;
			}

			var callback = cb.bind(target);

			callback(event);
		});
	};

	const getQueryStrings = () =>
		new Proxy(new URLSearchParams(window.location.search), {
			gep)
		});

	// Wait for Optimizely
	// ----------------------------------------

	var waitForOptimizely = function (cb) {
		wfo = setTimeout(function () {
			if (window.optimizelyEdge) {
				clearTimeout(wfo);
				cb();
			} else {
				waitForOptimizely(cb);
			}
		}, 50);
	};

	// Analytics
	// ----------------------------------------

	var setupAdobeAnalytics = function () {
		var adobeIntegratorEdgeIntegrator = {
			assignCampaigns: function (sVariable) {
				sVariable[this.evar] = sVariable[this.evar] || [];

				for (var i = this.campaignArray.length - 1; 0 <= i; i--) {
					sVariable[this.evar].push(this.campaignArray[i]);
					this.campaignArray.splice(i, 1);
				}
			},
			campaignArray: [],
			evar: evar,
			formatActiveExperiments: function () {
				var expList = [];
				var expObj = window.optimizelyEdge.get('state').getActiveExperiments();

				for (var exp in expObj) {
					expList.push(expObj[exp].id + ':' + expObj[exp].variation.id);
				}

				return expList;
			},
			init: function () {
				var activeExperimentsArray = this.formatActiveExperiments();

				if (activeExperimentsArray.length) {
					this.campaignArray = activeExperimentsArray;
					try {
						this.trackDelayedCampaigns(window.s);
					} catch (e) {
						console.warn('Adobe trackDelayedCampaigns error');
					}
				}
			},
			trackDelayedCampaigns: function (sVariable) {
				sVariable[this.evar] = sVariable[this.evar] || [];
				sVariable.linkTrackVars += ',' + this.evar;

				for (var i = this.campaignArray.length - 1; 0 <= i; i--) {
					sVariable[this.evar].push(this.campaignArray[i]);
					this.campaignArray.splice(i, 1);
				}

				sVariable.tl(true, 'o', 'OptimizelyLayerDecision');
			}
		};

		window.OptimizelyEdgeIntegrators = {
			get: function (name) {
				if ('adobe' === name) {
					return adobeIntegratorEdgeIntegrator;
				}

				throw new Error(name + ' is not a supported module');
			}
		};
	};

	const sendNewRelicData = () => {
		const experimentObj = window.optimizelyEdge
			.get('state')
			.getActiveExperiments();
		if (window.djab_expSent === undefined) {
			window.djab_expSent = false;
		}
		let expIDs = [];
		let variations = [];
		if (
			typeof window.newrelic !== 'undefined' &&
			!window.djab_expSent
		) {
			for (let exper in experimentObj) {
				expIDs.push(experimentObj[exper].id);
				variations.push(
					`${experimentObj[exper].id}:${experimentObj[exper].variation.name}`
				);
			}
			window.newrelic.setCustomAttribute('experimentID', expIDs.join('-'));
			window.newrelic.setCustomAttribute('variationID', variations.join('-'));
		}
		window.djab_expSent = true;
	};

	var sendEvent = function (name, tags) {
		var obj = {
			eventName: name,
			type: 'event'
		};

		if (tags !== undefined) {
			obj.tags = tags;
		}

		optimizely.push(obj);

		if (debug) {
			console.log(
				'%c🏆',
				'font-weight: bold',
				name,
				tags !== undefined ? tags : ''
			);
		}
	};

	const events = () => {
		// goal #2 Total Homepage Video Interactions
		on('click', '.video-wrapper .video-volume, .video-wrapper .video-cc, .video-wrapper .video-save-queue', () => {
			sendEvent('102p_total_homepage_video_interactions');
		});
		on('click', '.video-wrapper .video-fullscreen', () => {
			sendEvent('102p_total_homepage_video_interactions');
			sendEvent('102p_total_clicks_to_expand_homepage_video_players');
		});
		on('click', '.video-wrapper button.video-share-b', () => {
			sendEvent('102p_total_homepage_video_interactions');
			sendEvent('102p_total_clicks_to_share_homepage_video_players');
		});
		on('click', '.video-wrapper .video-show-share button', () => {
			sendEvent('102p_total_homepage_video_interactions');
			sendEvent('102p_total_clicks_to_share_homepage_video_players');
		});

		// goal #3 Total Homepage CTR
		try {
			document.querySelector('header').parentElement.addEventListener('click', () => {
				sendEvent('102p_total_homepage_ctr');
			});
		} catch (e) {}

		on('click', '.video-wrapper', (evt) => {
			// Skip if the player in the video center is clicked. That will be handled by another click handler
			if (evt.target.closest('#videocenter-video-player') === null) {
				sendEvent('102p_total_homepage_ctr');
			}
		});

		on('click', '#video-center', () => {
			sendEvent('102p_total_homepage_ctr');
		});

		on('click', '#podcast-2', () => {
			sendEvent('102p_total_homepage_ctr');
		});

		on('click', '#recommended-videos', () => {
			sendEvent('102p_total_homepage_ctr');
			sendEvent('102p_total_clicks_on_homepage_articles');
		});

		// goal #4 Total Clicks on Homepage Articles
		on('click', 'main#main', () => {
			sendEvent('102p_total_clicks_on_homepage_articles');
		});

		on('click', 'article,#most-popular-articles,#most-popular-opinion-articles', (evt) => {
			// Ignore clicks from elements that are covered by another click handler
			if (evt.target.closest('main#main,#video-center,#podcast-2,.video-wrapper,a[href="https://www.wsj.com/tips"]') !== null) return;
			sendEvent('102p_total_clicks_on_homepage_articles');
		});

		// goal #8 Total Clicks on Homepage Opinion Module
		on('click', '#opinion', () => {
			sendEvent('102p_total_clicks_on_homepage_opinion_module');
			sendEvent('102p_total_clicks_on_homepage_articles');
		});

		// goal #9 Total Clicks on Homepage Lead Articles
		on('click', 'div[layout="MEDIUM-TOPPER-SUMMARY"], #top-news, div[layout="Summary"]', (evt) => {
			// Ignore clicks from elements that are covered by another click handler
			if (evt.target.closest('.video-wrapper') !== null) return;
			sendEvent('102p_total_clicks_on_homepage_lead_articles');
		});

		try {
			// title above top summary
			document.querySelector('div[layout="Summary"]').parentElement.previousElementSibling.addEventListener('click', () => {
				sendEvent('102p_total_clicks_on_homepage_lead_articles');
			});
		} catch (e) {}
	};

	pub.init = function (variation) {
		waitForOptimizely(function () {
			const { djab_preview } = getQueryStrings();
			if (debug && djab_preview) {
				variation = djab_preview;
			}
			v = variation;
			document.body.classList.add('102p_' + v);
			optimizely.push({ type: 'sendEvents' });

			//  Init analytics
			setupAdobeAnalytics();
			window.OptimizelyEdgeIntegrators.get('adobe').init();
			sendNewRelicData();

			events();
		});
	};

	return pub;
})();
}, "dependencies": []}], "id": "27170380113", "name": "(Final) #102P - Homepage Video Auto-Play", "commitId": "27183840208", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "27177400146", "integrationSettings": null, "variations": [{"id": "27181800152", "name": "Original", "actions": [{"viewId": "27160500164", "changes": [{"id": "311C5930-777D-46B0-88A9-8F789C36B2E6", "type": "custom_code", "value": function($){window.djab.Test102P.init('0');
}, "dependencies": []}]}]}, {"id": "27177920134", "name": "Variation #1", "actions": [{"viewId": "27160500164", "changes": [{"id": "729D23DD-FB6D-46AD-8E4F-0376DB9A569C", "type": "custom_code", "value": function($){window.djab.Test102P.init('1');
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "27181800152", "endOfRange": 5000}, {"entityId": "27177920134", "endOfRange": 10000}], "name": "(Final) #102P - Homepage Video Auto-Play", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["27160500164"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "6B725B71-ADCA-497C-9F11-66885F561C3D", "type": "custom_code", "value": function($){window.djab.Test103P = (function () {
	var pub = {};
	var optimizely = window.optimizelyEdge;
	var utils = optimizely.get('utils');
	var debug = -1 < window.location.search.indexOf('qa_param');

	var evar = 'eVar126';
	var v, wfo;

	// Utilities
	// ----------------------------------------

	var on = function (type, selector, cb) {
		window.addEventListener(type, function (event) {
			var target = event.target.closest(selector);

			if (null === target) {
				return;
			}

			var callback = cb.bind(target);

			callback(event);
		});
	};

	const getQueryStrings = () =>
		new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop)
		});

	// Wait for Optimizely
	// ----------------------------------------

	var waitForOptimizely = function (cb) {
		wfo = setTimeout(function () {
			if (window.optimizelyEdge) {
				clearTimeout(wfo);
				cb();
			} else {
				waitForOptimizely(cb);
			}
		}, 50);
	};

	// Analytics
	// ----------------------------------------

	var setupAdobeAnalytics = function () {
		var adobeIntegratorEdgeIntegrator = {
			assignCampaigns: function (sVariable) {
				sVariable[this.evar] = sVariable[this.evar] || [];

				for (var i = this.campaignArray.length - 1; 0 <= i; i--) {
					sVariable[this.evar].push(this.campaignArray[i]);
					this.campaignArray.splice(i, 1);
				}
			},
			campaignArray: [],
			evar: evar,
			formatActiveExperiments: function () {
				var expList = [];
				var expObj = window.optimizelyEdge.get('state').getActiveExperiments();

				for (var exp in expObj) {
					expList.push(expObj[exp].id + ':' + expObj[exp].variation.id);
				}

				return expList;
			},
			init: function () {
				var activeExperimentsArray = this.formatActiveExperiments();

				if (activeExperimentsArray.length) {
					this.campaignArray = activeExperimentsArray;
					try {
						this.trackDelayedCampaigns(window.s);
					} catch (e) {
						console.warn('Adobe trackDelayedCampaigns error');
					}
				}
			},
			trackDelayedCampaigns: function (sVariable) {
				sVariable[this.evar] = sVariable[this.evar] || [];
				sVariable.linkTrackVars += ',' + this.evar;

				for (var i = this.campaignArray.length - 1; 0 <= i; i--) {
					sVariable[this.evar].push(this.campaignArray[i]);
					this.campaignArray.splice(i, 1);
				}

				sVariable.tl(true, 'o', 'OptimizelyLayerDecision');
			}
		};

		window.OptimizelyEdgeIntegrators = {
			get: function (name) {
				if ('adobe' === name) {
					return adobeIntegratorEdgeIntegrator;
				}

				throw new Error(name + ' is not a supported module');
			}
		};
	};

	const sendNewRelicData = () => {
		const experimentObj = window.optimizelyEdge
			.get('state')
			.getActiveExperiments();
		if (window.djab_expSent === undefined) {
			window.djab_expSent = false;
		}
		let expIDs = [];
		let variations = [];
		if (
			typeof window.newrelic !== 'undefined' &&
			!window.djab_expSent
		) {
			for (let exper in experimentObj) {
				expIDs.push(experimentObj[exper].id);
				variations.push(
					`${experimentObj[exper].id}:${experimentObj[exper].variation.name}`
				);
			}
			window.newrelic.setCustomAttribute('experimentID', expIDs.join('-'));
			window.newrelic.setCustomAttribute('variationID', variations.join('-'));
		}
		window.djab_expSent = true;
	};

	var sendEvent = function (name, tags) {
		var obj = {
			eventName: name,
			type: 'event'
		};

		if (tags !== undefined) {
			obj.tags = tags;
		}

		optimizely.push(obj);

		if (debug) {
			console.log(
				'%c🏆',
				'font-weight: bold',
				name,
				tags !== undefined ? tags : ''
			);
		}
	};

	const events = () => {
		// goal #2 Total Homepage Video Interactions
		on('click', '.video-wrapper .video-volume, .video-wrapper .video-cc, .video-wrapper .video-save-queue', () => {
			sendEvent('103p_total_homepage_video_interactions');
		});
		on('click', '.video-wrapper .video-fullscreen', () => {
			sendEvent('103p_total_homepage_video_interactions');
			sendEvent('103p_total_clicks_to_expand_homepage_video_players');
		});
		on('click', '.video-wrapper button.video-share-b', () => {
			sendEvent('103p_total_homepage_video_interactions');
			sendEvent('103p_total_clicks_to_share_homepage_video_players');
		});
		on('click', '.video-wrapper .video-show-share button', () => {
			sendEvent('103p_total_homepage_video_interactions');
			sendEvent('103p_total_clicks_to_share_homepage_video_players');
		});

		// goal #3 Total Homepage CTR
		try {
			document.querySelector('header').parentElement.addEventListener('click', () => {
				sendEvent('103p_total_homepage_ctr2');
			});
		} catch (e) {}

		on('click', '.video-wrapper', (evt) => {
			// Skip if the player in the video center is clicked. That will be handled by another click handler
			if (evt.target.closest('#videocenter-video-player') === null) {
				sendEvent('103p_total_homepage_ctr2');
			}
		});

		on('click', '#video-center', () => {
			sendEvent('103p_total_homepage_ctr2');
		});

		on('click', '#podcast-2', () => {
			sendEvent('103p_total_homepage_ctr2');
		});

		on('click', '#recommended-videos', () => {
			sendEvent('103p_total_homepage_ctr2');
			sendEvent('103p_total_clicks_on_homepage_articles');
		});

		// goal #4 Total Clicks on Homepage Articles
		on('click', 'main#main', () => {
			sendEvent('103p_total_clicks_on_homepage_articles');
		});

		on('click', 'article,#most-popular-articles,#most-popular-opinion-articles', (evt) => {
			// Ignore clicks from elements that are covered by another click handler
			if (evt.target.closest('main#main,#video-center,#podcast-2,.video-wrapper,a[href="https://www.wsj.com/tips"]') !== null) return;
			sendEvent('103p_total_clicks_on_homepage_articles');
		});

		// goal #8 Total Clicks on Homepage Opinion Module
		on('click', '#os');
		});

		// goal #9 Total Clicks on Homepage Lead Articles
		on('click', 'div[layout="MEDIUM-TOPPER-SUMMARY"], #top-news, div[layout="Summary"]', (evt) => {
			// Ignore clicks from elements that are covered by another click handler
			if (evt.target.closest('.video-wrapper') !== null) return;
			sendEvent('103p_total_clicks_on_homepage_lead_articles');
		});

		try {
			// title above top summary
			document.querySelector('div[layout="Summary"]').parentElement.previousElementSibling.addEventListener('click', () => {
				sendEvent('103p_total_clicks_on_homepage_lead_articles');
			});
		} catch (e) {}
	};

	pub.init = function (variation) {
		waitForOptimizely(function () {
			const { djab_preview } = getQueryStrings();
			if (debug && djab_preview) {
				variation = djab_preview;
			}
			v = variation;
			document.body.classList.add('103p_' + v);
			optimizely.push({ type: 'sendEvents' });

			//  Init analytics
			setupAdobeAnalytics();
			window.OptimizelyEdgeIntegrators.get('adobe').init();
			sendNewRelicData();

			events();
		});
	};

	return pub;
})();
}, "dependencies": []}], "id": "27195040073", "name": "(Final) #103P - Homepage Video Auto-Play ( Non Subs )", "commitId": "27192990180", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "27171780129", "integrationSettings": null, "variations": [{"id": "27175750167", "name": "Original", "actions": [{"viewId": "27172600129", "changes": [{"id": "A349E427-7895-44E1-A3A6-3B9F44E900DB", "type": "custom_code", "value": function($){window.djab.Test103P.init('0');
}, "dependencies": []}]}]}, {"id": "27176470117", "name": "Variation #1", "actions": [{"viewId": "27172600129", "changes": [{"id": "E72B275B-CF2E-405E-8341-11578EBBB0ED", "type": "custom_code", "value": function($){window.djab.Test103P.init('1');
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "27175750167", "endOfRange": 5000}, {"entityId": "27176470117", "endOfRange": 10000}], "name": "(Final) #103P - Homepage Video Auto-Play ( Non Subs )", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["27172600129"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "25042720794", "name": "[99P] QA Param", "conditions": ["and", ["or", ["or", {"match": "exact", "name": "qa_param", "type": "query", "value": "99p"}]]]}, {"id": "25446930570", "name": "[99P] Desktop Users", "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": {"type": "cookie", "name": "ab_uuid"}, "integrationSettings": [], "views": [{"id": "21536750055", "category": "other", "apiName": "wsj_article_page", "name": "WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21600390365", "category": "other", "apiName": "220A_visits_to_shop", "name": "Visits to Shop", "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https://store.wsj.com/shop/*"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21623080344", "category": "other", "apiName": "220A_wsj_article_w_video_player", "name": "WSJ Article w/ Video Player", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21739050898", "category": "other", "apiName": "21259101085_81p_total_articles_visits", "name": "[81P] Total Articles Visits", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://wsj.com/articles/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21780660263", "category": "other", "apiName": "21259101085_82p_total_articles_visits", "name": "[82P] Total Articles Visits", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://wsj.com/articles/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22020050655", "category": "other", "apiName": "95p_wsj_article_page", "name": "[95P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'management', 'opinion', 'markets', 'politics', 'sports', 'tech', 'us', 'world', 'real estate', 'science', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isTargetedSection;
  let isFOE;
  let isJournalReports;
  let isSuperBundleUser;
  let isExecEditionUser;

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(metaArticleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  //Check for FOE/Journal Reports
  try {
    const metaArticleTypeEle = document.querySelector("meta[name='article.type']");
    if (metaArticleTypeEle) {
      const metaArticleType = metaArticleTypeEle.getAttribute('content');
      isFOE = metaArticleType === 'The Future of Everything';
      if (isFOE) return false;
      isJournalReports = metaArticleType.includes('Journal Reports');
      if (isJournalReports) return false;
    } else {
      isFOE = false;
      isJournalReports = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for BigBundle users (Excluding Exec Edition Users)
  try {
    const metaUserExpEle = document.querySelector("meta[name='user.exp']");
    isExecEditionUser = metaUserExpEle && metaUserExpEle.getAttribute('content') === 'exec_edition';
    if (isExecEditionUser) return false;
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (!metaUserTagsEle) return false;
    const metaUserTags = metaUserTagsEle.getAttribute('content');
    const userTagsCount = metaUserTags.split(',').length === 3;
    isSuperBundleUser =
      userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
    if (!isSuperBundleUser) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (isSuperBundleUser && !isExecEditionUser && isTargetedSection && !isFOE && !isJournalReports) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22063613864", "category": "other", "apiName": "95p_wsj_homepage", "name": "[95P] WSJ HomePage", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.wsj.com/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  let isExecEditionUser;

  // Check for BigBundle users (Excluding Exec Edition Users)
  try {
    const metaUserExpEle = document.querySelector("meta[name='user.exp']");
    isExecEditionUser = metaUserExpEle && metaUserExpEle.getAttribute('content') === 'exec_edition';
    if (isExecEditionUser) return false;
    const userTags = window.utag_data && window.utag_data.user_tags;
    if (!userTags) return false;
    const userTagsCount = userTags.split(',').length === 3;
    isSuperBundleUser = userTagsCount && targetedTags.every(tag => userTags.includes(tag));
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (isSuperBundleUser && !isExecEditionUser) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22083141879", "category": "other", "apiName": "85P_buckets", "name": "[85P] WSJ Articles", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'markets', 'politics', 'opinion', 'sports', 'tech', 'us', 'world', 'real estate', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  let isTargetedSection;
  let isImmersive;

  // Check for Super Bundle Users
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (metaUserTagsEle) {
      const metaUserTags = metaUserTagsEle.getAttribute('content');
      const userTagsCount = metaUserTags.split(',').length === 3;
      isSuperBundleUser =
        userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
      if (isSuperBundleUser) return false;
    } else {
      const metaUserTypeEle = document.querySelector("meta[name='user.type']");
      if (!metaUserTypeEle) return false;
      const metaUserType = metaUserTypeEle.getAttribute('content');
      if (metaUserType !== 'freeRegister') return false;
      isSuperBundleUser = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(metaArticleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for immersive articles
  try {
    if (
      window.utag_data &&
      window.utag_data.page_content_type_detail &&
      window.utag_data.page_content_type_detail !== 'immersive'
    ) {
      isImmersive = false;
    } else {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (!isSuperBundleUser && isTargetedSection && !isImmersive) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "22197131090", "category": "other", "apiName": "88P_buckets", "name": "[88P]WSJ Articles - Bucket Activation", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "22272231143", "category": "other", "apiName": "83P_buckets", "name": "[83P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'markets', 'politics', 'opinion', 'sports', 'tech', 'us', 'world', 'real estate', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  let isExecEditionUser;
  let isTargetedSection;
  let isImmersive;

  // Check for Subscribers (Excluding Super Bundle Users and Exec Edition Users)
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (!metaUserTagsEle) return false;
    const metaUserTags = metaUserTagsEle.getAttribute('content');
    const userTagsCount = metaUserTags.split(',').length === 3;
    isSuperBundleUser =
      userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
    if (isSuperBundleUser) return false;
    const metaUserExpEle = document.querySelector("meta[name='user.exp']");
    isExecEditionUser = metaUserExpEle && metaUserExpEle.getAttribute('content') === 'exec_edition';
    if (isExecEditionUser) return false;

  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(metaArticleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for immersive articles
  try {
    if (
      window.utag_data &&
      window.utag_data.page_content_type_detail &&
      window.utag_data.page_content_type_detail !== 'immersive'
    ) {
      isImmersive = false;
    } else {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (!isSuperBundleUser && !isExecEditionUser && isTargetedSection && !isImmersive) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "22272370492", "category": "other", "apiName": "89P_buckets", "name": "[89P] WSJ site wide", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "22423880308", "category": "other", "apiName": "21259101085_93p_wsj_live_coverage", "name": "[93P] WSJ Live Coverage", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/livecoverage/"}], ["not", ["or", {"match": "regex", "type": "url", "value": "https://www.wsj.com/livecoverage/.*?/card/.*?"}]], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  var isSubscriber;

  // Check for subscriber
  try {
    var userType = window.utag_data && window.utag_data.user_type;
    if (!userType) return false;
    isSubscriber = userType === "subscriber" || userType === 'prosubscriber';
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (isSubscriber) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22442570007", "category": "other", "apiName": "91p_buckets", "name": "[91P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}], ["or", {"type": "custom_code", "value": // Based on this BP(https://docs.google.com/presentation/d/1jpLI4e4f43CYKI2CxubNMc-XLGjfs9f1sW8B-0kaNV8/edit#slide=id.gf472f12f4f_0_36), The test runs on WSJ Standard Article Templates & Immersive Article Templates
// (excluding Super Bundle users, FOE and NOTED templates)


function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'management', 'markets', 'politics', 'sports', 'tech', 'us', 'world', 'real estate', 'science', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  let isTargetedSection;
  let isFOE;

  // Check for Super Bundle Users
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (metaUserTagsEle) {
      const metaUserTags = metaUserTagsEle.getAttribute('content');
      const userTagsCount = metaUserTags.split(',').length === 3;
      isSuperBundleUser =
        userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
      if (isSuperBundleUser) return false;
    } else {
      isSuperBundleUser = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for subscriber
  try {
    const metaUserTypeEle = document.querySelector("meta[name='user.type']");
    if (!metaUserTypeEle) return false;
    const metaUserType = metaUserTypeEle.getAttribute('content');
    if (metaUserType === null || metaUserType === 'nonsubscriber') return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    const section = metaArticleSection.toLowerCase();
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(section);
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  //Check for FOE
  try {
    const metaArticleTypeEle = document.querySelector("meta[name='article.type']");
    if (metaArticleTypeEle) {
      const metaArticleType = metaArticleTypeEle.getAttribute('content');
      isFOE = metaArticleType === 'The Future of Everything';
      if (isFOE) return false;
    } else {
      isFOE = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }


  if (!isSuperBundleUser && isTargetedSection && !isFOE) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22462131059", "category": "other", "apiName": "90p_buckets", "name": "[90P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'management', 'markets', 'politics', 'opinion', 'sports', 'tech', 'us', 'world', 'real estate', 'science', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  let isTargetedSection;
  let isImmersive;

  // Check for Super Bundle Users
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (metaUserTagsEle) {
      const metaUserTags = metaUserTagsEle.getAttribute('content');
      const userTagsCount = metaUserTags.split(',').length === 3;
      isSuperBundleUser =
        userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
      if (isSuperBundleUser) return false;
    } else {
      isSuperBundleUser = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(metaArticleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for immersive articles
  try {
    if (
      window.utag_data &&
      window.utag_data.page_content_type_detail &&
      window.utag_data.page_content_type_detail !== 'immersive'
    ) {
      isImmersive = false;
    } else {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  //Check for FOE
  try {
    const metaArticleTypeEle = document.querySelector("meta[name='article.type']");
    if (metaArticleTypeEle) {
      const metaArticleType = metaArticleTypeEle.getAttribute('content');
      if (metaArticleType === 'The Future of Everything') return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (!isSuperBundleUser && isTargetedSection && !isImmersive) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "22559600177", "category": "other", "apiName": "92p_buckets", "name": "[92P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'markets', 'politics', 'opinion', 'sports', 'tech', 'us', 'world', 'real estate', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  let isTargetedSection;
  let isImmersive;

  // Check for Super Bundle Users
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (!metaUserTagsEle) return false;
    const metaUserTags = metaUserTagsEle.getAttribute('content');
    const userTagsCount = metaUserTags.split(',').length === 3;
    isSuperBundleUser =
      userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
    if (isSuperBundleUser) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(metaArticleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for immersive articles
  try {
    if (
      window.utag_data &&
      window.utag_data.page_content_type_detail &&
      window.utag_data.page_content_type_detail !== 'immersive'
    ) {
      isImmersive = false;
    } else {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (!isSuperBundleUser && isTargetedSection && !isImmersive) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "22599750074", "category": "other", "apiName": "21259101085_wsj_home_page", "name": "[237A] WSJ Homepage, article page, live coverage page", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.wsj.com/"}, {"match": "substring", "type": "url", "value": "wsj.com/livecoverage"}, {"match": "substring", "type": "url", "value": "wsj.com/articles"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22635542434", "category": "other", "apiName": "21259101085_236a_exclude_12u_screens", "name": "[236A] Coverage", "staticConditions": ["and", ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  return !(screen.width <= 1299 && screen.width >= 980);
}
}], ["or", {"match": "simple", "type": "url", "value": "https://www.wsj.com/"}, {"match": "substring", "type": "url", "value": "wsj.com/livecoverage"}, {"match": "substring", "type": "url", "value": "wsj.com/articles"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24298880412", "category": "other", "apiName": "96p_wsj_article_page", "name": "[96P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/sports/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/arts-culture/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/business/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/economy/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/finance/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/health/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/lifestyle/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/personal-finance/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/politics/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/real-estate/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/science/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/style/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/tech/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/us-news/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/world/"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'management', 'markets', 'politics', 'sports', 'tech', 'us', 'world', 'real estate', 'science', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isTargetedSection;
  let isFOE;
  let isSuperBundleUser;
  let isExecEditionUser;

  // Check for targeted sections for organic WSJ articles
  try {
    const metaArticleSection = document.querySelector('meta[name="article.section"]').getAttribute('content');
    const contentSource = document.querySelector('meta[property="og:url"]').getAttribute('content');
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(metaArticleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  //Check for FOE
  try {
    const metaArticleTypeEle = document.querySelector("meta[name='article.type']");
    if (metaArticleTypeEle) {
      const metaArticleType = metaArticleTypeEle.getAttribute('content');
      isFOE = metaArticleType === 'The Future of Everything';
      if (isFOE) return false;
    } else {
      isFOE = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for Subscribers (Excluding Super Bundle, Exec Edition Users)
  try {
    const metaUserExpEle = document.querySelector("meta[name='user.exp']");
    isExecEditionUser = metaUserExpEle && metaUserExpEle.getAttribute('content') === 'exec_edition';
    if (isExecEditionUser) return false;
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (!metaUserTagsEle) return false;
    const metaUserTags = metaUserTagsEle.getAttribute('content');
    const userTagsCount = metaUserTags.split(',').length === 3;
    isSuperBundleUser =
      userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
    if (isSuperBundleUser) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  if (isSuperBundleUser && isExecEditionUser && !isTargetedSection && isFOE) {
    return false;
  } else {
    return true;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "24506970937", "category": "other", "apiName": "100p_wsj_article_page", "name": "[100P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/arts-culture/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/business/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/world/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/economy/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/finance/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/politics/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/tech/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/us-news/"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
*
* Editor now supports ES6 compliant code. Note that adding ES6
* specific code to an experiment will break for users running
* ES5-only browsers as code entered is not transpiled down to ES5.
*/

function jsCondition() {
  const targetedSections = ['arts', 'business', 'world', 'economy', 'markets', 'politics', 'tech', 'us'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSub;
  let isSuperBundleUser;
  let isExecEditionUser;
  let isTargetedSection;
  let isStandard;
  let isFOE;

  const {
    user_exp: userExp,
    user_tags: userTags,
    user_type: userType,
    'meta.article.section': articleSection,
    'meta.article.type': articleType,
    'meta.og:url': contentSource,
    page_content_type_detail: articleTemplate,
  } = window.utag_data || {};

  // Check for Subscriber (excluding free reg)
  try {
    if (userType === 'subscriber' || userType === 'prosubscriber') {
      isSub = true;
    } else {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for Subscribers (Excluding Super Bundle Users and Exec Edition Users)
  try {
    const userTagsCount = userTags.split(',').length === 3;
    isSuperBundleUser =
      userTagsCount && targetedTags.every((tag) => userTags.includes(tag));
    if (isSuperBundleUser) return false;
    isExecEditionUser = userExp === 'exec_edition';
    if (isExecEditionUser) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(articleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for standard articles
  try {
    if (articleTemplate !== 'standard') {
      return false;
    } else {
      isStandard = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  //Check for FOE/Journal Reports
  try {
    isFOE = articleType === 'The Future of Everything';
    if (isFOE) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
  return false;
  }

  if (isSub && !isSuperBundleUser && !isExecEditionUser && isTargetedSection && isStandard && !isFOE) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "25075070965", "category": "other", "apiName": "99p_wsj_article_page", "name": "[99P] WSJ Article Page", "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.wsj.com/articles/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/sports/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/arts-culture/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/business/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/economy/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/finance/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/health/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/lifestyle/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/personal-finance/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/politics/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/real-estate/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/science/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/style/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/tech/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/us-news/"}, {"match": "substring", "type": "url", "value": "https://www.wsj.com/world/"}, {"match": "substring", "type": "url", "value": "https://www.stg.wsj.com/world/"}, {"match": "substring", "type": "url", "value": "www.stg.wsj.com/articles"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function jsCondition() {
  const targetedSections = ['arts', 'business', 'economy', 'health', 'life', 'management', 'markets', 'politics', 'sports', 'tech', 'us', 'world', 'real estate', 'science', 'style news'];
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSub;
  let isSuperBundleUser;
  let isExecEditionUser;
  let isTargetedSection;
  let isImmersive;
  let isFOE;
  let isJournalReports;

  const {
    user_exp: userExp,
    user_tags: userTags,
    user_type: userType,
    'meta.article.section': articleSection,
    'meta.article.type': articleType,
    'meta.og:url': contentSource,
    page_content_type_detail: articleTemplate,
  } = window.utag_data || {};

  // Check for Subscriber (excluding free reg)
  try {
    if (userType === 'subscriber' || userType === 'prosubscriber') {
      isSub = true;
    } else {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for Subscribers (Excluding Super Bundle Users and Exec Edition Users)
  try {
    const userTagsCount = userTags.split(',').length === 3;
    isSuperBundleUser =
      userTagsCount && targetedTags.every((tag) => userTags.includes(tag));
    if (isSuperBundleUser) return false;
    isExecEditionUser = userExp === 'exec_edition';
    if (isExecEditionUser) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for targeted sections for organic WSJ articles
  try {
    if (contentSource.includes('wsj.com/articles')) {
      isTargetedSection = targetedSections.includes(articleSection.toLowerCase());
      if (!isTargetedSection) return false;
    } else {
      isTargetedSection = true;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  // Check for immersive articles
  try {
    if (articleTemplate === 'immersive' || articleTemplate === 'xbrndimmrs') {
      return false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }

  //Check for FOE/Journal Reports
  try {
    isFOE = articleType === 'The Future of Everything';
    if (isFOE) return false;
    isJournalReports = articleType.startsWith('Journal Reports');
    if (isJournalReports) return false;
  } catch (e) {
    console.log('Optimizely Error:', e.message);
  return false;
  }

  if (isSub && !isSuperBundleUser && !isExecEditionUser && isTargetedSection && !isImmersive && !isFOE && !isJournalReports) {
    return true;
  } else {
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "manual"}, {"id": "26595450012", "category": "other", "apiName": "21259101085_url_targeting_for_evan_count_up_timer", "name": "URL Targeting for Evan count up timer", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.wsj.com/news/evan-gershkovich"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27160500164", "category": "other", "apiName": "102p_homepage_video_auto_play", "name": "URL Targeting for (Final) #102P - Homepage Video Auto-Play", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.wsj.com"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  // Check for Super Bundle Users
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (metaUserTagsEle) {
      const metaUserTags = metaUserTagsEle.getAttribute('content');
      const userTagsCount = metaUserTags.split(',').length === 3;
      isSuperBundleUser =
        userTagsCount && targetedTags.every((tag) => metaUserTags.includes(tag));
      if (isSuperBundleUser) return false;
    } else {
      isSuperBundleUser = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }
  if (isSuperBundleUser) {
    return false;
  }
  
  try {
    let userType;
		const el = document.querySelector('meta[name="user.type"]');
    if (el !== null) {
      userType = el.getAttribute('content');
    }
    if (typeof userType === "subscriber" || userType === "prosubscriber") {
			return true;
		} else {
			return false;
		}
  } catch(e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27172600129", "category": "other", "apiName": "21259101085_url_targeting_for_final_103p__homepage_video_autopla", "name": "URL Targeting for (Final) #103P - Homepage Video Auto-Play ( Non Subs )", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.wsj.com"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  const targetedTags = ['BARRONS-SUB', 'MW-SUB', 'WSJ-SUB'];
  let isSuperBundleUser;
  // Check for Super Bundle Users
  try {
    const metaUserTagsEle = document.querySelector("meta[name='user.tags']");
    if (metaUserTagsEle) {
      const metaUserTags = metaUserTagsEle.getAttribute('content');
      const userTagsCount = metaUserTags.split(',').length === 3;
      isSuperBundleUser =
        userTagsCount && targetedTades(tag));
      if (isSuperBundleUser) return false;
    } else {
      isSuperBundleUser = false;
    }
  } catch (e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }
  if (isSuperBundleUser) {
    return false;
  }
  
  try {
    let userType;
		const el = document.querySelector('meta[name="user.type"]');
    if (el !== null) {
      userType = el.getAttribute('content');
    }
    if (typeof userType === 'undefined' || userType === 'nonsubscriber') {
      return true;
    } else {
      return false;
    }
  } catch(e) {
    console.log('Optimizely Error:', e.message);
    return false;
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "21564750588", "viewId": null, "name": "[Article] Roadblock - Total roadblock CTA Clicks", "category": "other", "apiName": "articles_roadblock_button_click", "eventType": "custom", "eventFilter": null}, {"id": "21568740582", "viewId": null, "name": "Click on recommended videos", "category": "other", "apiName": "220A_clicks_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "21594620477", "viewId": null, "name": "Visits Thank you page", "category": "other", "apiName": "220A_visits_thank_you_page", "eventType": "custom", "eventFilter": null}, {"id": "21644890103", "viewId": null, "name": "[80P] Total Clicks on Series Navigation", "category": "other", "apiName": "80p_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "21646170141", "viewId": null, "name": "[80P] Total Clicks on Breadcrumbs ", "category": "other", "apiName": "80p_click_breadcrumbs", "eventType": "custom", "eventFilter": null}, {"id": "21646640010", "viewId": null, "name": "[80P] Total Clicks on Recommended Videos ", "category": "other", "apiName": "80p_click_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "21654470161", "viewId": null, "name": "[80P] Total Clicks on Most Popular Opinion ", "category": "other", "apiName": "80p_click_most_popular_opinion", "eventType": "custom", "eventFilter": null}, {"id": "21656520044", "viewId": null, "name": "[80P] Total Clicks on Article Utility Bar Arrows", "category": "other", "apiName": "80p_click_article_utility_bar_arrows", "eventType": "custom", "eventFilter": null}, {"id": "21660640043", "viewId": null, "name": "[80P] Total Clicks on In-Line Links", "category": "other", "apiName": "80p_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "21662860615", "viewId": null, "name": "[81P] Total Clicks on Further Coverage / Related Content Inset", "category": "other", "apiName": "81P_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "21664390033", "viewId": null, "name": "[80P] Total Clicks on Comments Icon ", "category": "other", "apiName": "80p_click_comments_icon", "eventType": "custom", "eventFilter": null}, {"id": "21668240065", "viewId": null, "name": "[80P] Total Clicks on Article Page", "category": "other", "apiName": "80p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "21669900078", "viewId": null, "name": "[80P] Total Clicks on Save Icon", "category": "other", "apiName": "80p_click_save_icon", "eventType": "custom", "eventFilter": null}, {"id": "21669900083", "viewId": null, "name": "[80P] Total Clicks on Author Links ", "category": "other", "apiName": "80p_click_author_links", "eventType": "custom", "eventFilter": null}, {"id": "21671200155", "viewId": null, "name": "[80P] Total Clicks on the Article Utility Bar", "category": "other", "apiName": "80p_click_article_utility_bar", "eventType": "custom", "eventFilter": null}, {"id": "21671250122", "viewId": null, "name": "[80P] Total Clicks on Share Tools", "category": "other", "apiName": "80p_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "21671340079", "viewId": null, "name": "[80P] Total Clicks on Most Popular News ", "category": "other", "apiName": "80p_click_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "21671450068", "viewId": null, "name": "[80P] Total Clicks on Masthead Navigation", "category": "other", "apiName": "80p_click_masthead_nav", "eventType": "custom", "eventFilter": null}, {"id": "21671520106", "viewId": null, "name": "[80P] Total Clicks on Right Rail", "category": "other", "apiName": "80p_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "21671750063", "viewId": null, "name": "[80P] Total Clicks on Further Coverage / Related Content Inset", "category": "other", "apiName": "80p_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "21672190060", "viewId": null, "name": "[80P] Total Clicks on Text Size Icon ", "category": "other", "apiName": "80p_click_text_resize_icon", "eventType": "custom", "eventFilter": null}, {"id": "21675370100", "viewId": null, "name": "[80P] Total Clicks on Author Follow ", "category": "other", "apiName": "80p_click_author_follow", "eventType": "custom", "eventFilter": null}, {"id": "21675880046", "viewId": null, "name": "[80P] Total Clicks on WTRN Module ", "category": "other", "apiName": "80p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "21678740535", "viewId": null, "name": "[81P] Total Clicks on Most Popular Opinion", "category": "other", "apiName": "81P_click_most_popular_opinion", "eventType": "custom", "eventFilter": null}, {"id": "21683320233", "viewId": null, "name": "[80P] Total Clicks on Secondary Content", "category": "other", "apiName": "80p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "21685300042", "viewId": null, "name": "[80P] Total Clicks on Details Icon in the Utility Bar", "category": "other", "apiName": "80p_click_details_icon", "eventType": "custom", "eventFilter": null}, {"id": "21686670298", "viewId": null, "name": "[81P] Total Article Page CTR", "category": "other", "apiName": "81P_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "21686920475", "viewId": null, "name": "[81P] Total Clicks on Breadcrumbs", "category": "other", "apiName": "81P_click_breadcrumbs", "eventType": "custom", "eventFilter": null}, {"id": "21690302432", "viewId": null, "name": "[229A] Clicks on Podcast Insets", "category": "other", "apiName": "229A_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "21690350581", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 1", "category": "other", "apiName": "81P_wtrn_click_end_0", "eventType": "custom", "eventFilter": null}, {"id": "21694690209", "viewId": null, "name": "[81P] Total Clicks on V3 Row 2", "category": "other", "apiName": "81P_wtrn_click_row_1", "eventType": "custom", "eventFilter": null}, {"id": "21696160573", "viewId": null, "name": "[81P] Total Clicks on Masthead Navigation", "category": "other", "apiName": "81P_click_masthead_nav", "eventType": "custom", "eventFilter": null}, {"id": "21700180732", "viewId": null, "name": "[81P] Total Clicks on Most Popular News", "category": "other", "apiName": "81P_click_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "21703470607", "viewId": null, "name": "[81P] Total Clicks on End of Article (Mansion Global)", "category": "other", "apiName": "81P_wtrn_click_end_mg", "eventType": "custom", "eventFilter": null}, {"id": "21703750793", "viewId": null, "name": "[81P] Total Clicks on Right Rail", "category": "other", "apiName": "81P_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "21705730573", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 6", "category": "other", "apiName": "81P_wtrn_click_end_5", "eventType": "custom", "eventFilter": null}, {"id": "21707500290", "viewId": null, "name": "[81P] Total Clicks on Share Tools", "category": "other", "apiName": "81P_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "21707512578", "viewId": null, "name": "[229A] Clicks on View Membership Options", "category": "other", "apiName": "229A_clicks_membership_options", "eventType": "custom", "eventFilter": null}, {"id": "21708840764", "viewId": null, "name": "[81P] Average Article Scroll Depth", "category": "other", "apiName": "81P_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "21710750294", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 2", "category": "other", "apiName": "81P_wtrn_click_end_1", "eventType": "custom", "eventFilter": null}, {"id": "21711450539", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 7", "category": "other", "apiName": "81P_wtrn_click_end_6", "eventType": "custom", "eventFilter": null}, {"id": "21712840589", "viewId": null, "name": "[81P] Total Clicks on V3 Row 1", "category": "other", "apiName": "81P_wtrn_click_row_0", "eventType": "custom", "eventFilter": null}, {"id": "21713322467", "viewId": null, "name": "[229A] Clicks on \u201cSign In\u201d Hyperlink", "category": "other", "apiName": "229A_clicks_sign_in_link", "eventType": "custom", "eventFilter": null}, {"id": "21715550551", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 5", "category": "other", "apiName": "81P_wtrn_click_end_4", "eventType": "custom", "eventFilter": null}, {"id": "21716890019", "viewId": null, "name": "[81P] Total Clicks on Series Navigation", "category": "other", "apiName": "81P_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "21718602041", "viewId": null, "name": "[229A] Clicks on Subscribe", "category": "other", "apiName": "229A_clicks_subscribe", "eventType": "custom", "eventFilter": null}, {"id": "21719452199", "viewId": null, "name": "[81P] Dianomi Ads Viewed", "category": "other", "apiName": "81P_dianomi_ads_viewed", "eventType": "custom", "eventFilter": null}, {"id": "21720941513", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 8", "category": "other", "apiName": "81P_wtrn_click_end_7", "eventType": "custom", "eventFilter": null}, {"id": "21722120458", "viewId": null, "name": "[81P] Total Clicks on WTRN", "category": "other", "apiName": "81P_wtrn_click", "eventType": "custom", "eventFilter": null}, {"id": "21723590504", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 3", "category": "other", "apiName": "81P_wtrn_click_end_2", "eventType": "custom", "eventFilter": null}, {"id": "21726820963", "viewId": null, "name": "[229A] Total roadblock CTA clicks", "category": "other", "apiName": "229A_clicks_total", "eventType": "custom", "eventFilter": null}, {"id": "21727710685", "viewId": null, "name": "[81P] Total Clicks on In-Line Links", "category": "other", "apiName": "81P_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "21729200356", "viewId": null, "name": "[81P] Total Clicks on Recommended Videos", "category": "other", "apiName": "81P_click_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "21731480755", "viewId": null, "name": "[81P] Total Clicks on V3 Row 4", "category": "other", "apiName": "81P_wtrn_click_row_3", "eventType": "custom", "eventFilter": null}, {"id": "21732781707", "viewId": null, "name": "[229A] Clicks on Share Tools on the article page", "category": "other", "apiName": "229A_clicks_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "21733120603", "viewId": null, "name": "[81P] Total Clicks on End of Article (Market Watch)", "category": "other", "apiName": "81P_wtrn_click_end_mw", "eventType": "custom", "eventFilter": null}, {"id": "21733470786", "viewId": null, "name": "[81P] Total Clicks on End of Article Card 4", "category": "other", "apiName": "81P_wtrn_click_end_3", "eventType": "custom", "eventFilter": null}, {"id": "21739801643", "viewId": null, "name": "[229A] Clicks on Recommended Videos", "category": "other", "apiName": "229A_clicks_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "21740200840", "viewId": null, "name": "[229A] Clicks on Sign In CTA", "category": "other", "apiName": "229A_clicks_sign_in_cta", "eventType": "custom", "eventFilter": null}, {"id": "21740601529", "viewId": null, "name": "[82P] Total Clicks on Breadcrumbs", "category": "other", "apiName": "82P_click_breadcrumbs", "eventType": "custom", "eventFilter": null}, {"id": "21740751383", "viewId": null, "name": "[82P] Total Clicks on Right Rail", "category": "other", "apiName": "82P_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "21743030204", "viewId": null, "name": "[81P] Total Clicks on Secondary Content", "category": "other", "apiName": "81P_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "21745270024", "viewId": null, "name": "[81P] Total Clicks on V3 Row 3", "category": "other", "apiName": "81P_wtrn_click_row_2", "eventType": "custom", "eventFilter": null}, {"id": "21756470819", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 6", "category": "other", "apiName": "82P_wtrn_click_end_5", "eventType": "custom", "eventFilter": null}, {"id": "21756710975", "viewId": null, "name": "[82P] Total Clicks on V3 Row 1", "category": "other", "apiName": "82P_wtrn_click_row_0", "eventType": "custom", "eventFilter": null}, {"id": "21757840698", "viewId": null, "name": "[82P] Dianomi Ads Viewed", "category": "other", "apiName": "82P_dianomi_ads_viewed", "eventType": "custom", "eventFilter": null}, {"id": "21758031333", "viewId": null, "name": "[82P] Total Clicks on In-Line Links", "category": "other", "apiName": "82P_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "21758590285", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 5", "category": "other", "apiName": "82P_wtrn_click_end_4", "eventType": "custom", "eventFilter": null}, {"id": "21758810041", "viewId": null, "name": "[82P] Total Clicks on Further Coverage / Related Content Inset", "category": "other", "apiName": "82P_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "21764023235", "viewId": null, "name": "[220A] Clicks on listen to this article", "category": "other", "apiName": "220a_listen_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21764470945", "viewId": null, "name": "[82P] Total Clicks on Series Navigation", "category": "other", "apiName": "82P_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "21764600637", "viewId": null, "name": "[82P] Total Clicks on Secondary Content", "category": "other", "apiName": "82P_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "21767950973", "viewId": null, "name": "[82P] Total Clicks on V3 Row 4", "category": "other", "apiName": "82P_wtrn_click_row_3", "eventType": "custom", "eventFilter": null}, {"id": "21771240110", "viewId": null, "name": "[229A] Clicks on Video Inset", "category": "other", "apiName": "229A_clicks_article_page", "eventType": "custom", "eventFilter": null}, {"id": "21771870965", "viewId": null, "name": "[82P] Total Clicks on Recommended Videos", "category": "other", "apiName": "82P_click_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "21772810728", "viewId": null, "name": "[82P] Total Clicks on End of Article (Market Watch)", "category": "other", "apiName": "82P_wtrn_click_end_mw", "eventType": "custom", "eventFilter": null}, {"id": "21774840882", "viewId": null, "name": "[82P] Total Clicks on Most Popular News", "category": "other", "apiName": "82P_click_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "21776260722", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 2", "category": "other", "apiName": "82P_wtrn_click_end_1", "eventType": "custom", "eventFilter": null}, {"id": "21777401526", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 8", "category": "other", "apiName": "82P_wtrn_click_end_7", "eventType": "custom", "eventFilter": null}, {"id": "21779600849", "viewId": null, "name": "[82P] Total Clicks on V3 Row 2", "category": "other", "apiName": "82P_wtrn_click_row_1", "eventType": "custom", "eventFilter": null}, {"id": "21781431949", "viewId": null, "name": "[82P] Total Clicks on Share Tools", "category": "other", "apiName": "82P_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "21781440855", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 1", "category": "other", "apiName": "82P_wtrn_click_end_0", "eventType": "custom", "eventFilter": null}, {"id": "21781821555", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 7", "category": "other", "apiName": "82P_wtrn_click_end_6", "eventType": "custom", "eventFilter": null}, {"id": "21781861457", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 3", "category": "other", "apiName": "82P_wtrn_click_end_2", "eventType": "custom", "eventFilter": null}, {"id": "21782360593", "viewId": null, "name": "[82P] Total Clicks on V3 Row 3", "category": "other", "apiName": "82P_wtrn_click_row_2", "eventType": "custom", "eventFilter": null}, {"id": "21785270906", "viewId": null, "name": "[82P] Total Article Page CTR", "category": "other", "apiName": "82P_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "21789133335", "viewId": null, "name": "[220A] Clicks on recommended videos", "category": "other", "apiName": "220a_recommended_video_click", "eventType": "custom", "eventFilter": null}, {"id": "21791301031", "viewId": null, "name": "[82P] Total Clicks on Masthead Navigation", "category": "other", "apiName": "82P_click_masthead_nav", "eventType": "custom", "eventFilter": null}, {"id": "21792010484", "viewId": null, "name": "[82P] Total Clicks on End of Article (Mansion Global)", "category": "other", "apiName": "82P_wtrn_click_end_mg", "eventType": "custom", "eventFilter": null}, {"id": "21797500370", "viewId": null, "name": "[82P] Total Clicks on WTRN", "category": "other", "apiName": "82P_wtrn_click", "eventType": "custom", "eventFilter": null}, {"id": "21798140067", "viewId": null, "name": "[82P] Average Article Scroll Depth", "category": "other", "apiName": "82P_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "21799440180", "viewId": null, "name": "[82P] Total Clicks on Most Popular Opinion", "category": "other", "apiName": "82P_click_most_popular_opinion", "eventType": "custom", "eventFilter": null}, {"id": "21803390393", "viewId": null, "name": "[82P] Total Clicks on End of Article Card 4", "category": "other", "apiName": "82P_wtrn_click_end_3", "eventType": "custom", "eventFilter": null}, {"id": "21822350085", "viewId": null, "name": "[220A] Total Roadblock CTA Clicks", "category": "other", "apiName": "220a_total_roadblock_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21824490074", "viewId": null, "name": "[220A] Clicks on subscribe", "category": "other", "apiName": "220a_subscribe_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21825010283", "viewId": null, "name": "[80P] Average Article Scroll Depth", "category": "other", "apiName": "80p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "21825240422", "viewId": null, "name": "[82P] Total Paywall Hits", "category": "other", "apiName": "82P_paywall_hit", "eventType": "custom", "eventFilter": null}, {"id": "21828370087", "viewId": null, "name": "[220A] Clicks on article video player", "category": "other", "apiName": "220a_article_video_player_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21833030737", "viewId": null, "name": "[82P] Clicks on View Membership Options", "category": "other", "apiName": "82P_click_membership_options", "eventType": "custom", "eventFilter": null}, {"id": "21853800005", "viewId": null, "name": "[220A] Clicks on view membership options", "category": "other", "apiName": "220a_view_membership_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21861520007", "viewId": null, "name": "[220A] Clicks on share toolbar", "category": "other", "apiName": "220a_share_toolbar_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21906822224", "viewId": null, "name": "[87P] Total Clicks on cross-brand article module - article links", "category": "other", "apiName": "87p_click_article_module_article_links", "eventType": "custom", "eventFilter": null}, {"id": "21909691587", "viewId": null, "name": "[87P] Total Clicks on Secondary Content", "category": "other", "apiName": "87p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "21915681729", "viewId": null, "name": "[87P] Total Clicks on Right Rail", "category": "other", "apiName": "87p_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "21921312189", "viewId": null, "name": "[87P] Total Clicks on \u2018Personalize your experience\u2019 (Article Page)", "category": "other", "apiName": "87p_click_article_module_personalize_your_experience", "eventType": "custom", "eventFilter": null}, {"id": "21929152322", "viewId": null, "name": "[87P] Total Clicks on WTRN Module", "category": "other", "apiName": "87p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "21935003768", "viewId": null, "name": "[87P] Total Clicks on entire cross-brand article module", "category": "other", "apiName": "87p_click_entire_article_module", "eventType": "custom", "eventFilter": null}, {"id": "21938051688", "viewId": null, "name": "[87P] Total Clicks on \u2018More Stories\u2019 (Article Page)", "category": "other", "apiName": "87p_click_article_module_more_stories", "eventType": "custom", "eventFilter": null}, {"id": "22012118143", "viewId": null, "name": "[87P] Total Clicks on Opinion Module (HomePage)", "category": "other", "apiName": "87p_click_opinion_hp", "eventType": "custom", "eventFilter": null}, {"id": "22012965486", "viewId": null, "name": "[85P] Total Clicks on AaaNF module", "category": "other", "apiName": "85p_click_aaanf", "eventType": "custom", "eventFilter": null}, {"id": "22013064803", "viewId": null, "name": "[85P] Total clicks on WTRN", "category": "other", "apiName": "85p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "22020884505", "viewId": null, "name": "[87P] Total Clicks on New Market Data Strip (HomePage)", "category": "other", "apiName": "87p_click_market_data_strip", "eventType": "custom", "eventFilter": null}, {"id": "22024947990", "viewId": null, "name": "[85P] Total Ads Viewed", "category": "other", "apiName": "85p_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22029314688", "viewId": null, "name": "[85P] Article Body Scroll Depth", "category": "other", "apiName": "85p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22033657830", "viewId": null, "name": "[85P] Total clicks on Related Content Inset", "category": "other", "apiName": "85p_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "22043386626", "viewId": null, "name": "[85P] Total Clicks on Podcast Player", "category": "other", "apiName": "85p_click_podscast_inset", "eventType": "custom", "eventFilter": null}, {"id": "22051783551", "viewId": null, "name": "[85P] Total Article Page CTR", "category": "other", "apiName": "85p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22056641436", "viewId": null, "name": "[85P] Total Clicks on Share Toolbar", "category": "other", "apiName": "85p_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "22072051297", "viewId": null, "name": "[85P] Total Clicks on Newsletter Inset", "category": "other", "apiName": "85p_click_newsletter_inset", "eventType": "custom", "eventFilter": null}, {"id": "22072051466", "viewId": null, "name": "Playing WSJ videos", "category": "other", "apiName": "WSJarticle_video_playing", "eventType": "custom", "eventFilter": null}, {"id": "22072730316", "viewId": null, "name": "[85P] Total Clicks on Article Body Insets", "category": "other", "apiName": "85p_click_article_body_inset", "eventType": "custom", "eventFilter": null}, {"id": "22078550317", "viewId": null, "name": "[85P] Total clicks on Inline links", "category": "other", "apiName": "85p_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "22079492645", "viewId": null, "name": "[85P] Total clicks on series nav content", "category": "other", "apiName": "85p_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "22080080523", "viewId": null, "name": "[85P] Total Clicks on Secondary Content", "category": "other", "apiName": "85p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "22086240297", "viewId": null, "name": "[85P] Total Clicks on \u201cSee More/Less\u201d Button", "category": "other", "apiName": "85p_click_aaanf_seemore", "eventType": "custom", "eventFilter": null}, {"id": "22095171143", "viewId": null, "name": "[87P] Total Homepage CTR", "category": "other", "apiName": "87p_click_homepage", "eventType": "custom", "eventFilter": null}, {"id": "22096830421", "viewId": null, "name": "[88P] Swipe Previous", "category": "other", "apiName": "88p_swipe_prev", "eventType": "custom", "eventFilter": null}, {"id": "22098270667", "viewId": null, "name": "[88P] Swipe Next", "category": "other", "apiName": "88p_swipe_next", "eventType": "custom", "eventFilter": null}, {"id": "22101171177", "viewId": null, "name": "Clicks on WSJ Video", "category": "other", "apiName": "WSJarticle_video_clicked", "eventType": "custom", "eventFilter": null}, {"id": "22101610160", "viewId": null, "name": "[85P] Total Clicks on Video Player", "category": "other", "apiName": "85p_click_video_inset", "eventType": "custom", "eventFilter": null}, {"id": "22110240662", "viewId": null, "name": "[88P] Previous Recommended Video Clicked", "category": "other", "apiName": "88p_prev_button", "eventType": "custom", "eventFilter": null}, {"id": "22112700444", "viewId": null, "name": "[88P] Next Recommended Video Clicked", "category": "other", "apiName": "88p_next_button", "eventType": "custom", "eventFilter": null}, {"id": "22113940307", "viewId": null, "name": "[88P] Previous Recommended Video Clicked", "category": "other", "apiName": "88p_recommended_video_clicked", "eventType": "custom", "eventFilter": null}, {"id": "22114010729", "viewId": null, "name": "[87P] Total Article Page CTR", "category": "other", "apiName": "87p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22120360821", "viewId": null, "name": "[88P] Go to Video Center", "category": "other", "apiName": "88p_go_to_video_center", "eventType": "custom", "eventFilter": null}, {"id": "22158300313", "viewId": null, "name": "[88P] Total Clicks on Article Body Insets", "category": "other", "apiName": "88p_total_clicks_on_article_body_insets", "eventType": "custom", "eventFilter": null}, {"id": "22158790461", "viewId": null, "name": "[88P] Click Secondary Content", "category": "other", "apiName": "88p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "22159740431", "viewId": null, "name": "[88P] Click Right Rail", "category": "other", "apiName": "88p_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "22159780491", "viewId": null, "name": "[88P] Prev Button Clicked", "category": "other", "apiName": "88p_prev_button_clicked", "eventType": "custom", "eventFilter": null}, {"id": "22159850361", "viewId": null, "name": "[88P] Click to Play Related Video Player", "category": "other", "apiName": "88p_click_play_related_player", "eventType": "custom", "eventFilter": null}, {"id": "22160270114", "viewId": null, "name": "[88P] Total Clicks or Swipes on Next Video ", "category": "other", "apiName": "88p_total_clicks_or_swipes_on_next_video", "eventType": "custom", "eventFilter": null}, {"id": "22160610021", "viewId": null, "name": "[88p] Click WTRN", "category": "other", "apiName": "88p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "22164750556", "viewId": null, "name": "[88p] Click Breadcrumbs", "category": "other", "apiName": "88p_click_breadcrumbs", "eventType": "custom", "eventFilter": null}, {"id": "22166690433", "viewId": null, "name": "[88P] Click Masthead Nav", "category": "other", "apiName": "88p_click_masthead_nav", "eventType": "custom", "eventFilter": null}, {"id": "22172481282", "viewId": null, "name": "[88P] Total Clicks or Swipes on Previous Video", "category": "other", "apiName": "88p_total_clicks_or_swipes_on_prev_video", "eventType": "custom", "eventFilter": null}, {"id": "22176470384", "viewId": null, "name": "[88P] Click Share Tools", "category": "other", "apiName": "88p_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "22177892076", "viewId": null, "name": "[87P] Total Clicks on entire cross-brand module (HomePage)", "category": "other", "apiName": "87p_click_entire_article_module_hp", "eventType": "custom", "eventFilter": null}, {"id": "22177990391", "viewId": null, "name": "[88P] Click Article Page", "category": "other", "apiName": "88p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22179940362", "viewId": null, "name": "[88p] Click Video Play", "category": "other", "apiName": "88p_click_video_play", "eventType": "custom", "eventFilter": null}, {"id": "22179980632", "viewId": null, "name": "[88P] Total Ads Viewed", "category": "other", "apiName": "88p_total_ads_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22182290607", "viewId": null, "name": "[88P] Click Series Nav", "category": "other", "apiName": "88p_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "22186030439", "viewId": null, "name": "[88P] Click to Play Lead Video Player ", "category": "other", "apiName": "88p_click_lead_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22186310313", "viewId": null, "name": "[88P] Total Clicks on Recommended Video Link ", "category": "other", "apiName": "88p_total_clicks_on_recommended_video_link", "eventType": "custom", "eventFilter": null}, {"id": "22187340475", "viewId": null, "name": "[88P] Article Body Scroll Depth", "category": "other", "apiName": "88p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22191750589", "viewId": null, "name": "[88P] Next Button Clicked", "category": "other", "apiName": "88p_next_button_clicked", "eventType": "custom", "eventFilter": null}, {"id": "22191990404", "viewId": null, "name": "[88P] Click Inline Links", "category": "other", "apiName": "88p_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "22201180467", "viewId": null, "name": "[88P] Click Most Popular News", "category": "other", "apiName": "88p_click_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "22203310152", "viewId": null, "name": "[88P] Click on Recommended Video Link", "category": "other", "apiName": "88p_click_recommended_video_link", "eventType": "custom", "eventFilter": null}, {"id": "22207240102", "viewId": null, "name": "[88P] Click Related Content Inset", "category": "other", "apiName": "88p_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "22211430098", "viewId": null, "name": "[88P] Total Clicks on Related Video Player", "category": "other", "apiName": "88p_total_clicks_related_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22220080531", "viewId": null, "name": "[88P] Total Video Clicks from Article Page", "category": "other", "apiName": "88p_total_video_clicks_from_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22250921340", "viewId": null, "name": "[83P] Total Clicks on AaaNF", "category": "other", "apiName": "83p_click_aaanf", "eventType": "custom", "eventFilter": null}, {"id": "22251030127", "viewId": null, "name": "[87P] Total Clicks on \u2018Personalize your experience\u2019 (HomePage)", "category": "other", "apiName": "87p_click_article_module_personalize_your_experience_hp", "eventType": "custom", "eventFilter": null}, {"id": "22252920362", "viewId": null, "name": "[89P] Opt out (Safari Desktop)", "category": "other", "apiName": "89p_opt_out_safari_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22253510037", "viewId": null, "name": "[87P] Total Clicks on cross-brand article module - article links (HomePage)", "category": "other", "apiName": "87p_click_article_module_article_links_hp", "eventType": "custom", "eventFilter": null}, {"id": "22253590009", "viewId": null, "name": "[87P] Total Clicks on \u2018More Stories\u2019 (HomePage)", "category": "other", "apiName": "87p_click_article_module_more_stories_hp", "eventType": "custom", "eventFilter": null}, {"id": "22256480454", "viewId": null, "name": "[89P] Opt out (Chrome Desktop)", "category": "other", "apiName": "89p_opt_out_chrome_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22266590721", "viewId": null, "name": "[87P] Total clicks on Engagement Tile Preview Button", "category": "other", "apiName": "87p_click_engagement_tile_preview_hp", "eventType": "custom", "eventFilter": null}, {"id": "22268290227", "viewId": null, "name": "[89P] Opt in (Chrome Desktop)", "category": "other", "apiName": "89p_opt_in_chrome_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22270901564", "viewId": null, "name": "[83P] Total Clicks on Rail", "category": "other", "apiName": "83p_click_rail", "eventType": "custom", "eventFilter": null}, {"id": "22272790503", "viewId": null, "name": "[89P] Opt out (Edge Desktop)", "category": "other", "apiName": "89p_opt_out_edge_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22273960355", "viewId": null, "name": "[89P] Opt in (Firefox Mobile)", "category": "other", "apiName": "89p_opt_in_firefox_mobile", "eventType": "custom", "eventFilter": null}, {"id": "22274180807", "viewId": null, "name": "[83P] Total Article Engagement", "category": "other", "apiName": "83p_click_article_engagement", "eventType": "custom", "eventFilter": null}, {"id": "22275751190", "viewId": null, "name": "[83P] Total Clicks on Article Body Inset", "category": "other", "apiName": "83p_click_article_body_inset", "eventType": "custom", "eventFilter": null}, {"id": "22277270424", "viewId": null, "name": "[89P] Opt in (Firefox Desktop)", "category": "other", "apiName": "89p_opt_in_firefox_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22277770229", "viewId": null, "name": "[89P] Opt out (Opera Desktop)", "category": "other", "apiName": "89p_opt_out_opera_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22278640089", "viewId": null, "name": "[87P] Total clicks on Engagement Tile Subscribe Button", "category": "other", "apiName": "87p_click_engagement_tile_subscribe_hp", "eventType": "custom", "eventFilter": null}, {"id": "22279212321", "viewId": null, "name": "[83P] Total Clicks on WTRN", "category": "other", "apiName": "83p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "22283370554", "viewId": null, "name": "[89P] Opt in (Chrome Mobile)", "category": "other", "apiName": "89p_opt_in_chrome_mobile", "eventType": "custom", "eventFilter": null}, {"id": "22284070422", "viewId": null, "name": "[89P] Opt in (Opera Desktop)", "category": "other", "apiName": "89p_opt_in_opera_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22284970546", "viewId": null, "name": "[89P] Opt in (Safari Desktop)", "category": "other", "apiName": "89p_opt_in_safari_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22285580525", "viewId": null, "name": "[89P] Opt out (Firefox Mobile)", "category": "other", "apiName": "89p_opt_out_firefox_mobile", "eventType": "custom", "eventFilter": null}, {"id": "22292100091", "viewId": null, "name": "[89P] Opt in (Edge Desktop)", "category": "other", "apiName": "89p_opt_in_edge_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22292290187", "viewId": null, "name": "Total Clicks to Play Related Video", "category": "other", "apiName": "88p_total_clicks_to_play_related_video", "eventType": "custom", "eventFilter": null}, {"id": "22296890460", "viewId": null, "name": "01QA-CustomVideoInitiate", "category": "other", "apiName": "01QA-CustomVideoInitiate", "eventType": "custom", "eventFilter": null}, {"id": "22296961502", "viewId": null, "name": "[83P] Total Clicks on Share Tools", "category": "other", "apiName": "83p_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "22296980468", "viewId": null, "name": "[89P] Opt out (Firefox Desktop)", "category": "other", "apiName": "89p_opt_out_firefox_desktop", "eventType": "custom", "eventFilter": null}, {"id": "22297460324", "viewId": null, "name": "[89P] Opt out (Chrome Mobile)", "category": "other", "apiName": "89p_opt_out_chrome_mobile", "eventType": "custom", "eventFilter": null}, {"id": "22299070452", "viewId": null, "name": "[89P] Opt in (Opera Mobile)", "category": "other", "apiName": "89p_opt_in_opera_mobile", "eventType": "custom", "eventFilter": null}, {"id": "22299190251", "viewId": null, "name": "[89P] Opt out (Opera Mobile)", "category": "other", "apiName": "89p_opt_out_opera_mobile", "eventType": "custom", "eventFilter": null}, {"id": "22309581157", "viewId": null, "name": "[83P] Total Clicks on Related Content Inset", "category": "other", "apiName": "83p_click_related_content", "eventType": "custom", "eventFilter": null}, {"id": "22309744283", "viewId": null, "name": "dj-video-init", "category": "other", "apiName": "dj-video-init", "eventType": "custom", "eventFilter": null}, {"id": "22309810713", "viewId": null, "name": "[83P] Total Clicks on Most Popular News", "category": "other", "apiName": "83p_click_most_pop_news", "eventType": "custom", "eventFilter": null}, {"id": "22318460019", "viewId": null, "name": "[83P] Total Clicks on Newsletter Insets", "category": "other", "apiName": "83p_click_newsletter_inset", "eventType": "custom", "eventFilter": null}, {"id": "22321440553", "viewId": null, "name": "[83P] Total Clicks on Secondary Content", "category": "other", "apiName": "83p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "22323750346", "viewId": null, "name": "[83P] Total Clicks on Series Nav Inset", "category": "other", "apiName": "83p_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "22330070029", "viewId": null, "name": "[83P] Total Clicks on Recommended Videos", "category": "other", "apiName": "83p_click_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "22337020037", "viewId": null, "name": "[83P] Total Clicks on Article Page", "category": "other", "apiName": "83p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22339320252", "viewId": null, "name": "[83P] Total Clicks on Video Inset", "category": "other", "apiName": "83p_click_video_inset", "eventType": "custom", "eventFilter": null}, {"id": "22341250041", "viewId": null, "name": "[83P] Total Clicks on Podcast Insets", "category": "other", "apiName": "83p_click_podscast_inset", "eventType": "custom", "eventFilter": null}, {"id": "22343290008", "viewId": null, "name": "[83P] Total Clicks on Inline-links", "category": "other", "apiName": "83p_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "22347050013", "viewId": null, "name": "[83P] Total Clicks on Most Popular Opinion", "category": "other", "apiName": "83p_click_most_pop_opinion", "eventType": "custom", "eventFilter": null}, {"id": "22368530933", "viewId": null, "name": "[89P] Notification Clicked", "category": "other", "apiName": "89p_notification_clicked", "eventType": "custom", "eventFilter": null}, {"id": "22372663479", "viewId": null, "name": "[90P] Total Article Page CTR ", "category": "other", "apiName": "90p_total_article_page_ctr", "eventType": "custom", "eventFilter": null}, {"id": "22373834339", "viewId": null, "name": "[86P] Total clicks on paywall roadblock \u2018VIEW MEMBERSHIP OPTIONS\u2019 CTA", "category": "other", "apiName": "86p_click_view_membership_options", "eventType": "custom", "eventFilter": null}, {"id": "22376841402", "viewId": null, "name": "[91P] Total Clicks on Right Rail ", "category": "other", "apiName": "91p_total_clicks_on_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "22380003562", "viewId": null, "name": "[86P] Total Clicks on AaaNF \u201cSee More/Less\u201d Button ", "category": "other", "apiName": "86p_click_aaanf_seemore", "eventType": "custom", "eventFilter": null}, {"id": "22382902671", "viewId": null, "name": "[86P] Total Clicks on Secondary Content ", "category": "other", "apiName": "86p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "22383185090", "viewId": null, "name": "[90P] Total Clicks on Video Title for V2 (V2 Only)", "category": "other", "apiName": "90p_total_clicks_video_title_v1", "eventType": "custom", "eventFilter": null}, {"id": "22389131000", "viewId": null, "name": "[83P] Total Ads Viewed", "category": "other", "apiName": "83p_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22389432800", "viewId": null, "name": "[91P] Total Clicks on Related Video Player", "category": "other", "apiName": "91p_total_clicks_on_related_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22389461855", "viewId": null, "name": "dj-video-50percent", "category": "other", "apiName": "dj-video-50percent", "eventType": "custom", "eventFilter": null}, {"id": "22392702829", "viewId": null, "name": "[86P] Total Article Page CTR ", "category": "other", "apiName": "86p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22395950105", "viewId": null, "name": "[83P] Total Ads Viewed Rail", "category": "other", "apiName": "83p_ad_viewed_rail", "eventType": "custom", "eventFilter": null}, {"id": "22399021311", "viewId": null, "name": "[89P] Article traffic driven", "category": "other", "apiName": "89p_article_traffic_driven", "eventType": "custom", "eventFilter": null}, {"id": "22399484927", "viewId": null, "name": "[93P] Total Clicks on Summary/Latest Developments", "category": "other", "apiName": "93p_click_lc_summary", "eventType": "custom", "eventFilter": null}, {"id": "22402923227", "viewId": null, "name": "[93P] Total Number of Live Coverage Cards Viewed", "category": "other", "apiName": "93p_lc_card_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22404630663", "viewId": null, "name": "dj-video-contentstart", "category": "other", "apiName": "dj-video-contentstart", "eventType": "custom", "eventFilter": null}, {"id": "22410550823", "viewId": null, "name": "[91P] Total Clicks on Docked Video Player Exit", "category": "other", "apiName": "91p_total_clicks_on_docked_video_player_exit", "eventType": "custom", "eventFilter": null}, {"id": "22413020061", "viewId": null, "name": "[83P] Article Body Scroll Depth", "category": "other", "apiName": "83p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22414422369", "viewId": null, "name": "[93P] Total Clicks on Live Coverage Cards", "category": "other", "apiName": "93p_click_lc_cards", "eventType": "custom", "eventFilter": null}, {"id": "22422880557", "viewId": null, "name": "[91P] Scroll Depth", "category": "other", "apiName": "91p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22424030927", "viewId": null, "name": "[91P] Total Clicks on Article Body Insets (Guardrail)", "category": "other", "apiName": "91p_total_clicks_on_article_body_insets", "eventType": "custom", "eventFilter": null}, {"id": "22425582987", "viewId": null, "name": "[93P] Total Clicks on View Highlights Toggle", "category": "other", "apiName": "93p_click_view_highlights_toggle", "eventType": "custom", "eventFilter": null}, {"id": "22428262254", "viewId": null, "name": "[90P] Total Ads Viewed Rail ", "category": "other", "apiName": "90p_total_ads_viewed_rail", "eventType": "custom", "eventFilter": null}, {"id": "22431781456", "viewId": null, "name": "[90P] Total Ads Viewed", "category": "other", "apiName": "90p_total_ads_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22431841417", "viewId": null, "name": "[91P] Total Ads Viewed Rail", "category": "other", "apiName": "91p_total_ads_viewed_rail", "eventType": "custom", "eventFilter": null}, {"id": "22432130685", "viewId": null, "name": "dj-video-adcomplete", "category": "other", "apiName": "dj-video-adcomplete", "eventType": "custom", "eventFilter": null}, {"id": "22433990198", "viewId": null, "name": "[86P] Total Clicks on AaaNF Module", "category": "other", "apiName": "86p_click_aaanf", "eventType": "custom", "eventFilter": null}, {"id": "22436230643", "viewId": null, "name": "[91P] Total Clicks on Lead Video Player", "category": "other", "apiName": "91p_total_clicks_on_lead_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22438510549", "viewId": null, "name": "dj-video-25percent", "category": "other", "apiName": "dj-video-25percent", "eventType": "custom", "eventFilter": null}, {"id": "22442100793", "viewId": null, "name": "[90P] Total Clicks on Related Video Player", "category": "other", "apiName": "90p_total_clicks_on_related_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22442230368", "viewId": null, "name": "[91P] Total Article Page CTR", "category": "other", "apiName": "91P_total_article_page_ctr", "eventType": "custom", "eventFilter": null}, {"id": "22444560096", "viewId": null, "name": "dj-video-adstart", "category": "other", "apiName": "dj-video-adstart", "eventType": "custom", "eventFilter": null}, {"id": "22444690193", "viewId": null, "name": "[91P] Total Clicks on Docked Video Player ", "category": "other", "apiName": "91p_total_clicks_on_docked_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22444892319", "viewId": null, "name": "[93P] Total Clicks on Navigation", "category": "other", "apiName": "93p_click_navigation", "eventType": "custom", "eventFilter": null}, {"id": "22445060166", "viewId": null, "name": "[91P] Total Article Page Engagement", "category": "other", "apiName": "91p_total_article_page_engagement", "eventType": "custom", "eventFilter": null}, {"id": "22446380883", "viewId": null, "name": "[86P] Total Clicks on WTRN", "category": "other", "apiName": "86p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "22447021843", "viewId": null, "name": "[90P] Total Clicks on Inline links", "category": "other", "apiName": "90p_total_clicks_on_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "22449601370", "viewId": null, "name": "[90P] Total Clicks on Right Rail", "category": "other", "apiName": "90p_total_clicks_on_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "22449920021", "viewId": null, "name": "dj-video-75percent", "category": "other", "apiName": "dj-video-75percent", "eventType": "custom", "eventFilter": null}, {"id": "22450440117", "viewId": null, "name": "[90P] Total Video Plays from Lead Video Player", "category": "other", "apiName": "90p_total_clicks_on_lead_video_player", "eventType": "custom", "eventFilter": null}, {"id": "22451600464", "viewId": null, "name": "[91P] Total Clicks on Secondary Content ", "category": "other", "apiName": "91p_total_clicks_on_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "22453250945", "viewId": null, "name": "[86P] Total Article Body Scroll Depth", "category": "other", "apiName": "86p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22457480320", "viewId": null, "name": "[91P] Total Clicks on Listen to Article", "category": "other", "apiName": "91p_total_clicks_on_listen_to_article", "eventType": "custom", "eventFilter": null}, {"id": "22457561983", "viewId": null, "name": "[90P] Total Clicks on Most Popular Opinion", "category": "other", "apiName": "90p_total_clicks_most_popular_opinion", "eventType": "custom", "eventFilter": null}, {"id": "22460171142", "viewId": null, "name": "[90P] Total Clicks on Series Nav", "category": "other", "apiName": "90p_total_clicks_on_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "22460541108", "viewId": null, "name": "[90P] Total Clicks on Secondary Content", "category": "other", "apiName": "90p_total_clicks_on_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "22464510065", "viewId": null, "name": "[90P] Total Clicks on WTRN", "category": "other", "apiName": "90p_total_clicks_on_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "22465600082", "viewId": null, "name": "[91P] - Total Ads Viewed", "category": "other", "apiName": "91p_total_ads_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22469140062", "viewId": null, "name": "dj-video-contentcomplete", "category": "other", "apiName": "dj-video-contentcomplete", "eventType": "custom", "eventFilter": null}, {"id": "22469890141", "viewId": null, "name": "[90P] Total Clicks on Most Popular News", "category": "other", "apiName": "90p_total_clicks_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "22471500576", "viewId": null, "name": "[90P] Total Clicks on Related Content Inset", "category": "other", "apiName": "90p_total_clicks_on_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "22479042202", "viewId": null, "name": "[93P] Total Live Coverage Page CTR", "category": "other", "apiName": "93p_click_lc_page", "eventType": "custom", "eventFilter": null}, {"id": "22481400097", "viewId": null, "name": "[90P] Total Video Clicks from the RECOMMENDED/MOST POPULAR VIDEOS Module", "category": "other", "apiName": "90p_total_video_clicks_from_recommended_videos", "eventType": "custom", "eventFilter": null}, {"id": "22484970272", "viewId": null, "name": "[86P] Total Ads Viewed", "category": "other", "apiName": "86p_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22495520019", "viewId": null, "name": "[90P] Article Body Scroll Depth ", "category": "other", "apiName": "90p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22504860501", "viewId": null, "name": "[92P] Clicks on Author", "category": "other", "apiName": "92p_click_author", "eventType": "custom", "eventFilter": null}, {"id": "22515830020", "viewId": null, "name": "[93P] Total Clicks on Inline Links", "category": "other", "apiName": "93p_click_lc_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "22517970163", "viewId": null, "name": "[92P] Article Body Scroll Depth", "category": "other", "apiName": "92p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "22521280414", "viewId": null, "name": "[93P] Total Clicks on Share Tools", "category": "other", "apiName": "93p_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "22523970191", "viewId": null, "name": "[92P] Author Follow", "category": "other", "apiName": "92p_click_author_follow", "eventType": "custom", "eventFilter": null}, {"id": "22526410291", "viewId": null, "name": "[92P] Article Engagement", "category": "other", "apiName": "92p_click_article_engagement", "eventType": "custom", "eventFilter": null}, {"id": "22530120109", "viewId": null, "name": "[92P] Article Page CTR", "category": "other", "apiName": "92p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "22538940184", "viewId": null, "name": "[92P] Author Unfollows", "category": "other", "apiName": "92p_click_author_unfollow", "eventType": "custom", "eventFilter": null}, {"id": "22564511620", "viewId": null, "name": "[236A] Total sign in CTA clicks", "category": "other", "apiName": "236a_total_signin_clicks", "eventType": "custom", "eventFilter": null}, {"id": "22580081069", "viewId": null, "name": "[236A] Total subscribe CTA clicks", "category": "other", "apiName": "236a_total_clicks_subscribe", "eventType": "custom", "eventFilter": null}, {"id": "22591230326", "viewId": null, "name": "[89P] Article Page Views", "category": "other", "apiName": "89p_article_page_visited", "eventType": "custom", "eventFilter": null}, {"id": "22594890728", "viewId": null, "name": "[237A] Total subscribe CTA clicks", "category": "other", "apiName": "237A_subscribe_clicks", "eventType": "custom", "eventFilter": null}, {"id": "22612470549", "viewId": null, "name": "[237A] Total sign in CTA clicks", "category": "other", "apiName": "237A_signin_clicks", "eventType": "custom", "eventFilter": null}, {"id": "22617110429", "viewId": null, "name": "[93P] Unique Number of Footer Viewed", "category": "other", "apiName": "93p_footer_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22635362006", "viewId": null, "name": "[93P] Total Clicks on Headline Section", "category": "other", "apiName": "93p_click_headline_section", "eventType": "custom", "eventFilter": null}, {"id": "22657011817", "viewId": null, "name": "[93P] Total Clicks on Filter Button", "category": "other", "apiName": "93p_click_filter_button", "eventType": "custom", "eventFilter": null}, {"id": "22665670359", "viewId": null, "name": "[93P] Total Clicks on Live Coverage Banner", "category": "other", "apiName": "93p_click_ribbon_banner", "eventType": "custom", "eventFilter": null}, {"id": "22671090250", "viewId": null, "name": "[93P] Total Ads Viewed", "category": "other", "apiName": "93p_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "22793954711", "viewId": null, "name": "[93P] Total Clicks on CTA ", "category": "other", "apiName": "93p_click_cta", "eventType": "custom", "eventFilter": null}, {"id": "22795395507", "viewId": null, "name": "[93P] Total Clicks on VIEW LESS CTA ", "category": "other", "apiName": "93p_click_view_less_cta", "eventType": "custom", "eventFilter": null}, {"id": "23174570908", "viewId": null, "name": "[98P] Total Clicks on MOST POPULAR OPINION Module (V0, V1, V3)", "category": "other", "apiName": "98p_click_most_pop_opinion_v0v1v3", "eventType": "custom", "eventFilter": null}, {"id": "23184041648", "viewId": null, "name": "[98P] Total Clicks on Inline links", "category": "other", "apiName": "98p_click_inline_links", "eventType": "custom", "eventFilter": null}, {"id": "23194510725", "viewId": null, "name": "[98P] Total Clicks on Video Player", "category": "other", "apiName": "98p_click_video_inset", "eventType": "custom", "eventFilter": null}, {"id": "23199731131", "viewId": null, "name": "[98P] Total Clicks on RECOMMENDED VIDEOS Module (V3)", "category": "other", "apiName": "98p_click_recommended_videos_v3", "eventType": "custom", "eventFilter": null}, {"id": "23205660903", "viewId": null, "name": "[98P] Total Clicks on Related Content", "category": "other", "apiName": "98p_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "23207161215", "viewId": null, "name": "[98P] Total Clicks on Podcast Player", "category": "other", "apiName": "98p_click_podscast_inset", "eventType": "custom", "eventFilter": null}, {"id": "23209620644", "viewId": null, "name": "[98P] Total Clicks on AaaNF Module", "category": "other", "apiName": "98p_click_aaanf_article_card", "eventType": "custom", "eventFilter": null}, {"id": "23214800888", "viewId": null, "name": "[98P] Total Clicks on AaaNF Module X CTA", "category": "other", "apiName": "98p_click_aaanf_close", "eventType": "custom", "eventFilter": null}, {"id": "23215140839", "viewId": null, "name": "[98P] Total Clicks on Newsletter Inset ", "category": "other", "apiName": "98p_click_newsletter_inset", "eventType": "custom", "eventFilter": null}, {"id": "23221271218", "viewId": null, "name": "[98P] Total Article Page CTR ", "category": "other", "apiName": "98p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "23232390223", "viewId": null, "name": "[98P] Total Article Engagement", "category": "other", "apiName": "98p_click_article_engagement", "eventType": "custom", "eventFilter": null}, {"id": "23235850719", "viewId": null, "name": "[98P] Total Clicks on Share Toolbar ", "category": "other", "apiName": "98p_click_share_tools", "eventType": "custom", "eventFilter": null}, {"id": "23242400069", "viewId": null, "name": "[98P] Total Clicks on AaaNF Module SEE MORE CTA", "category": "other", "apiName": "98p_click_aaanf_see_more", "eventType": "custom", "eventFilter": null}, {"id": "23242710183", "viewId": null, "name": "[98P] Total Clicks on Article Body Insets", "category": "other", "apiName": "98p_click_article_body_inset", "eventType": "custom", "eventFilter": null}, {"id": "23247840428", "viewId": null, "name": "[98P] Total Clicks on MOST POPULAR NEWS (V0/V3)", "category": "other", "apiName": "98p_click_most_pop_news_v0v3", "eventType": "custom", "eventFilter": null}, {"id": "23252040648", "viewId": null, "name": "[98P] Total Ads Viewed Rail ", "category": "other", "apiName": "98p_ad_viewed_rail", "eventType": "custom", "eventFilter": null}, {"id": "23254620194", "viewId": null, "name": "[98P] Total Right Rail CTR", "category": "other", "apiName": "98p_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "23258180198", "viewId": null, "name": "[98P] Total Clicks on Secondary Content ", "category": "other", "apiName": "98p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "23269110572", "viewId": null, "name": "[98P] Total Clicks on Series Nav", "category": "other", "apiName": "98p_click_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "23271770111", "viewId": null, "name": "[98P] Article Body Scroll Depth ", "category": "other", "apiName": "98p_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "23273380376", "viewId": null, "name": "[98P] Total Ads Viewed", "category": "other", "apiName": "98p_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "23275290246", "viewId": null, "name": "[98P] Total Clicks on WTRN", "category": "other", "apiName": "98p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "23347980389", "viewId": null, "name": "[98P] Total Clicks on Remaining Content in Module Default State (V1 ONLY)", "category": "other", "apiName": "98p_click_aaanf_article_card_default_state_v1_last_three", "eventType": "custom", "eventFilter": null}, {"id": "23350280524", "viewId": null, "name": "[98P] Total Clicks on Any Content in AaaNF Open State", "category": "other", "apiName": "98p_click_aaanf_article_card_open_state", "eventType": "custom", "eventFilter": null}, {"id": "23361730484", "viewId": null, "name": "[98P] Total Clicks on First 3 Content Reccs in Module in Default State (V1, V2, V3)", "category": "other", "apiName": "98p_click_aaanf_article_card_default_state_first_three", "eventType": "custom", "eventFilter": null}, {"id": "23710922098", "viewId": null, "name": "[95P] Total Clicks on \u2018More Stories\u2019", "category": "other", "apiName": "95p_click_article_module_more_stories", "eventType": "custom", "eventFilter": null}, {"id": "23712471569", "viewId": null, "name": "[95P] Total Clicks on \u2018Personalize your experience\u2019 (HP)", "category": "other", "apiName": "95p_click_article_module_personalize_your_experience_hp", "eventType": "custom", "eventFilter": null}, {"id": "23724892309", "viewId": null, "name": "[95P] Total Clicks on Secondary Content", "category": "other", "apiName": "95p_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "23728352485", "viewId": null, "name": "[95P] Total Article CTR", "category": "other", "apiName": "95p_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "23741571538", "viewId": null, "name": "[95P] Total Clicks on \u2018More Stories\u2019 (HP)", "category": "other", "apiName": "95p_click_article_module_more_stories_hp", "eventType": "custom", "eventFilter": null}, {"id": "23741951998", "viewId": null, "name": "[95P] Total Clicks on entire cross-brand homepage module (HP)", "category": "other", "apiName": "95p_click_entire_article_module_hp", "eventType": "custom", "eventFilter": null}, {"id": "23750020799", "viewId": null, "name": "[95P] Total Clicks on cross-brand article module - article links", "category": "other", "apiName": "95p_click_article_module_article_links", "eventType": "custom", "eventFilter": null}, {"id": "23757591649", "viewId": null, "name": "[95P] Total Clicks on Right Rail", "category": "other", "apiName": "95p_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "23772931635", "viewId": null, "name": "[95P] Total Clicks on WTRN module", "category": "other", "apiName": "95p_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "23780130375", "viewId": null, "name": "[95P] Total Clicks on cross-brand homepage module - article links (HP)", "category": "other", "apiName": "95p_click_article_module_article_links_hp", "eventType": "custom", "eventFilter": null}, {"id": "23784440517", "viewId": null, "name": "[95P] Total Homepage CTR", "category": "other", "apiName": "95p_click_homepage", "eventType": "custom", "eventFilter": null}, {"id": "23810490031", "viewId": null, "name": "[95P] Total Clicks on \u2018Personalize your experience\u2019", "category": "other", "apiName": "95p_click_article_module_personalize_your_experience", "eventType": "custom", "eventFilter": null}, {"id": "23813590474", "viewId": null, "name": "[95P] Total Clicks on entire cross-brand article module", "category": "other", "apiName": "95p_click_entire_article_module", "eventType": "custom", "eventFilter": null}, {"id": "23825530018", "viewId": null, "name": "[95P] Total Clicks on Opinion module (HP)", "category": "other", "apiName": "95p_click_opinion_hp", "eventType": "custom", "eventFilter": null}, {"id": "24313770796", "viewId": null, "name": "[96P] Total Clicks on AaaNF Module", "category": "other", "apiName": "96P_click_aaanf", "eventType": "custom", "eventFilter": null}, {"id": "24315780967", "viewId": null, "name": "[96P] Total Clicks on Article (6) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-6", "eventType": "custom", "eventFilter": null}, {"id": "24327221188", "viewId": null, "name": "[96P] Total Clicks on Article (2) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-2", "eventType": "custom", "eventFilter": null}, {"id": "24330400860", "viewId": null, "name": "[96p] Total Article Page CTR", "category": "other", "apiName": "96P_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "24333120586", "viewId": null, "name": "[96P] Total Clicks on Article (4) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-4", "eventType": "custom", "eventFilter": null}, {"id": "24337660718", "viewId": null, "name": "[96P] Total Clicks on AaaNF Module Articles", "category": "other", "apiName": "96P_click_aaanf_article_card", "eventType": "custom", "eventFilter": null}, {"id": "24346540022", "viewId": null, "name": "[96P] Total Article Page Engagement", "category": "other", "apiName": "96P_article_page_engagement", "eventType": "custom", "eventFilter": null}, {"id": "24346800557", "viewId": null, "name": "[96P] Total Clicks on Article (5) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-5", "eventType": "custom", "eventFilter": null}, {"id": "24348590314", "viewId": null, "name": "[96P] Total Clicks on Series Nav", "category": "other", "apiName": "96P_click_on_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "24348650198", "viewId": null, "name": "[96P] Total Clicks on Article (7) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-7", "eventType": "custom", "eventFilter": null}, {"id": "24349520725", "viewId": null, "name": "[96P] Total Clicks on Share ", "category": "other", "apiName": "96P_click_share_tool", "eventType": "custom", "eventFilter": null}, {"id": "24352900077", "viewId": null, "name": "[96P] Total Clicks on Article (9) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-9", "eventType": "custom", "eventFilter": null}, {"id": "24355040652", "viewId": null, "name": "[96P] Total Clicks on Article Body Insets", "category": "other", "apiName": "96P_click_article_body_inset", "eventType": "custom", "eventFilter": null}, {"id": "24360530227", "viewId": null, "name": "[96P] Total Clicks on Inline Links", "category": "other", "apiName": "96P_click_inline_link", "eventType": "custom", "eventFilter": null}, {"id": "24365870199", "viewId": null, "name": "[96P] Total Clicks on Article (8) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-8", "eventType": "custom", "eventFilter": null}, {"id": "24369680368", "viewId": null, "name": "[96P] Total Clicks on Article Body Insets (excluding AaaNF Module)", "category": "other", "apiName": "96P_click_article_body_inset-exl-aaanf", "eventType": "custom", "eventFilter": null}, {"id": "24371190431", "viewId": null, "name": "[96p] Total Clicks on Secondary Content ", "category": "other", "apiName": "96P_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "24371490553", "viewId": null, "name": "[96P] Total Clicks on WTRN Module", "category": "other", "apiName": "96P_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "24372090230", "viewId": null, "name": "[96P] Total Clicks on Article (3) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-3", "eventType": "custom", "eventFilter": null}, {"id": "24381340191", "viewId": null, "name": "[96P] Total Ads Viewed", "category": "other", "apiName": "96P_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "24383180282", "viewId": null, "name": "[96P] Total Clicks on AaaNF Module CTA", "category": "other", "apiName": "96P_click_aaanf_cta", "eventType": "custom", "eventFilter": null}, {"id": "24390960086", "viewId": null, "name": "[96P] Total Clicks on Article (1) of AaaNF Module", "category": "other", "apiName": "96P_click_aaanf_article_card-pos-1", "eventType": "custom", "eventFilter": null}, {"id": "24391120046", "viewId": null, "name": "[96p] Average Article Body Scroll Depth", "category": "other", "apiName": "96P_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "24502591812", "viewId": null, "name": "[100P] Total Ads Viewed", "category": "other", "apiName": "100P_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "24510361092", "viewId": null, "name": "[100P] Total Dianomi Ads Viewed", "category": "other", "apiName": "100P_dianomi_ads_viewed", "eventType": "custom", "eventFilter": null}, {"id": "24513251155", "viewId": null, "name": "[100P] Total Article Page Engagement", "category": "other", "apiName": "100P_article_page_engagement", "eventType": "custom", "eventFilter": null}, {"id": "24538570124", "viewId": null, "name": "[100P] Total Clicks on MOST POPULAR NEWS", "category": "other", "apiName": "100P_click_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "24544710286", "viewId": null, "name": "[100P] Total Clicks on Slot #8 WTRN Module - Mansion Global", "category": "other", "apiName": "100P_click_wtrn_card_7", "eventType": "custom", "eventFilter": null}, {"id": "24545630316", "viewId": null, "name": "[100P] Total Article Page CTR", "category": "other", "apiName": "100P_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "24546540010", "viewId": null, "name": "[100P] Total Right Rail Ads Viewed", "category": "other", "apiName": "100P_ad_viewed_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "24550490035", "viewId": null, "name": "[100P] Total Clicks on the WTRN Module", "category": "other", "apiName": "100P_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "24550820251", "viewId": null, "name": "[100P] Total Ad Views - Slot #3 WTRN Module - Paid Promo", "category": "other", "apiName": "100P_wtrn_paid_promo_viewed", "eventType": "custom", "eventFilter": null}, {"id": "24552110187", "viewId": null, "name": "[100P] Total Clicks on WTRN CTA", "category": "other", "apiName": "100P_click_wtrn_cta", "eventType": "custom", "eventFilter": null}, {"id": "24554350087", "viewId": null, "name": "[100P] Total Clicks on Slot #2 WTRN Module - WSJ", "category": "other", "apiName": "100P_click_wtrn_card_2", "eventType": "custom", "eventFilter": null}, {"id": "24556460179", "viewId": null, "name": "[100P] Total WTRN Modules \u201cViewed\u201d ", "category": "other", "apiName": "100P_wtrn_viewed", "eventType": "custom", "eventFilter": null}, {"id": "24556490179", "viewId": null, "name": "[100P] Total Clicks on Slot #6 WTRN Module - WSJ", "category": "other", "apiName": "100P_click_wtrn_card_5", "eventType": "custom", "eventFilter": null}, {"id": "24558000372", "viewId": null, "name": "[100P] Total Clicks on Slot #5 WTRN Module - WSJ", "category": "other", "apiName": "100P_click_wtrn_card_4", "eventType": "custom", "eventFilter": null}, {"id": "24558450105", "viewId": null, "name": "[100P] Total Clicks on AaaNF Module", "category": "other", "apiName": "100P_click_aaanf", "eventType": "custom", "eventFilter": null}, {"id": "24559670317", "viewId": null, "name": "[100P] Total Clicks on RECOMMENDED VIDEOS", "category": "other", "apiName": "100P_click_recommended_video", "eventType": "custom", "eventFilter": null}, {"id": "24562240175", "viewId": null, "name": "[100P] Total Clicks on Slot #7 WTRN Module - WSJ", "category": "other", "apiName": "100P_click_wtrn_card_6", "eventType": "custom", "eventFilter": null}, {"id": "24566180258", "viewId": null, "name": "[100P] Total Clicks on MOST POPULAR OPINION", "category": "other", "apiName": "100P_click_most_popular_opinion", "eventType": "custom", "eventFilter": null}, {"id": "24569030367", "viewId": null, "name": "[100P] Total Clicks on Slot #9 WTRN Module - MarketWatch", "category": "other", "apiName": "100P_click_wtrn_card_8", "eventType": "custom", "eventFilter": null}, {"id": "24569500010", "viewId": null, "name": "[100P] Total Clicks on Show/Hide Conversation", "category": "other", "apiName": "100P_click_hide_show_conversation", "eventType": "custom", "eventFilter": null}, {"id": "24579120007", "viewId": null, "name": "[100P] Total Clicks on Secondary Content", "category": "other", "apiName": "100P_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "24579150004", "viewId": null, "name": "[100P] Total Clicks on Series Navigation", "category": "other", "apiName": "100P_click_on_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "24585230075", "viewId": null, "name": "[100P] Total Clicks on Slot #4 WTRN Module - WSJ", "category": "other", "apiName": "100P_click_wtrn_card_3", "eventType": "custom", "eventFilter": null}, {"id": "24591350027", "viewId": null, "name": "[100P] Total Clicks on Slot #1 WTRN Module - WSJ", "category": "other", "apiName": "100P_click_wtrn_card_1", "eventType": "custom", "eventFilter": null}, {"id": "24595120004", "viewId": null, "name": "[100P] Total Clicks on Related Content Inset", "category": "other", "apiName": "100P_click_related_content_inset", "eventType": "custom", "eventFilter": null}, {"id": "24633640184", "viewId": null, "name": "[100P] Total Clicks on Right Rail ", "category": "other", "apiName": "100P_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "24727490095", "viewId": null, "name": "[100P] Total Visible Clicks on WTRN Module ", "category": "other", "apiName": "100P_visible_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "24772801349", "viewId": null, "name": "[100P] Total Clicks on the WTRN Module - WSJ Only", "category": "other", "apiName": "100P_click_wtrn_wsj_only", "eventType": "custom", "eventFilter": null}, {"id": "24894750405", "viewId": null, "name": "[100p] Total WTRN Modules \u201cViewed\u201d", "category": "other", "apiName": "100P_total_wtrn_viewed", "eventType": "custom", "eventFilter": null}, {"id": "25130330685", "viewId": null, "name": "[99P] Total Clicks on Secondary Content", "category": "other", "apiName": "99P_click_secondary_content", "eventType": "custom", "eventFilter": null}, {"id": "25136520433", "viewId": null, "name": "[99P] Total Ads Viewed in Rail", "category": "other", "apiName": "99P_ad_viewed_rail", "eventType": "custom", "eventFilter": null}, {"id": "25137950366", "viewId": null, "name": "[99P] Total Clicks on NEW Right Rail Module", "category": "other", "apiName": "99P_click_aaanf_aside", "eventType": "custom", "eventFilter": null}, {"id": "25139730334", "viewId": null, "name": "[99P] Total Clicks on Inline Links", "category": "other", "apiName": "99P_click_inline_link", "eventType": "custom", "eventFilter": null}, {"id": "25144700367", "viewId": null, "name": "[99P] Total Article Page CTR", "category": "other", "apiName": "99P_click_article_page", "eventType": "custom", "eventFilter": null}, {"id": "25145150394", "viewId": null, "name": "[99P] Total Clicks on Opinion Articles in Right Rail", "category": "other", "apiName": "99P_click_right_rail_opinion_article", "eventType": "custom", "eventFilter": null}, {"id": "25151930820", "viewId": null, "name": "[99P] Average Article Body Scroll Depth", "category": "other", "apiName": "99P_scroll_depth", "eventType": "custom", "eventFilter": null}, {"id": "25152150354", "viewId": null, "name": "[99P] Total Clicks on Series Navigation", "category": "other", "apiName": "99P_click_on_series_nav", "eventType": "custom", "eventFilter": null}, {"id": "25154990326", "viewId": null, "name": "[99P] Total Clicks on WTRN", "category": "other", "apiName": "99P_click_wtrn", "eventType": "custom", "eventFilter": null}, {"id": "25155790319", "viewId": null, "name": "[99P] Total Clicks on MOST POPULAR NEWS", "category": "other", "apiName": "99P_click_most_popular_news", "eventType": "custom", "eventFilter": null}, {"id": "25161000430", "viewId": null, "name": "[99P] Total Clicks on Article Body Insets", "category": "other", "apiName": "99P_click_article_body_inset", "eventType": "custom", "eventFilter": null}, {"id": "25161540306", "viewId": null, "name": "[99P] Total Clicks on Right Rail", "category": "other", "apiName": "99P_click_right_rail", "eventType": "custom", "eventFilter": null}, {"id": "25166120014", "viewId": null, "name": "[99P] Total Ads Viewed", "category": "other", "apiName": "99P_ad_viewed", "eventType": "custom", "eventFilter": null}, {"id": "25167180313", "viewId": null, "name": "[99P] Total Clicks on MOST POPULAR OPINION", "category": "other", "apiName": "99P_click_most_popular_opinion", "eventType": "custom", "eventFilter": null}, {"id": "27160530126", "viewId": null, "name": "[102P] - Total Clicks on Homepage Articles", "category": "other", "apiName": "102p_total_clicks_on_homepage_articles", "eventType": "custom", "eventFilter": null}, {"id": "27164770214", "viewId": null, "name": "[102P] - Total Clicks to UNMUTE Video Player", "category": "other", "apiName": "102p_total_clicks_to_unmute_video_player", "eventType": "custom", "eventFilter": null}, {"id": "27166260120", "viewId": null, "name": "[103P] - Total Clicks to PAUSE Homepage Video Players", "category": "other", "apiName": "103p_total_clicks_to_pause_video_player", "eventType": "custom", "eventFilter": null}, {"id": "27166790076", "viewId": null, "name": "[102P] - Total Homepage Video Interactions", "category": "other", "apiName": "102p_total_homepage_video_interactions", "eventType": "custom", "eventFilter": null}, {"id": "27166870065", "viewId": null, "name": "[102P] - Total Homepage CTR", "category": "other", "apiName": "102p_total_homepage_ctr", "eventType": "custom", "eventFilter": null}, {"id": "27168280192", "viewId": null, "name": "[103P] - Total Clicks on Homepage Opinion Module", "category": "other", "apiName": "103p_total_clicks_on_homepage_opinion_module", "eventType": "custom", "eventFilter": null}, {"id": "27169870169", "viewId": null, "name": "[102P] - Total Clicks on Homepage Opinion Module", "category": "other", "apiName": "102p_total_clicks_on_homepage_opinion_module", "eventType": "custom", "eventFilter": null}, {"id": "27173560105", "viewId": null, "name": "[103P] - Total Clicks on Homepage Articles", "category": "other", "apiName": "103p_total_clicks_on_homepage_articles", "eventType": "custom", "eventFilter": null}, {"id": "27176020214", "viewId": null, "name": "[102P] - Total Clicks on Homepage Lead Articles", "category": "other", "apiName": "102p_total_clicks_on_homepage_lead_articles", "eventType": "custom", "eventFilter": null}, {"id": "27177540111", "viewId": null, "name": "[103P] - Total Homepage CTR", "category": "other", "apiName": "103p_total_homepage_ctr2", "eventType": "custom", "eventFilter": null}, {"id": "27182990197", "viewId": null, "name": "[103P] - Total Clicks on Homepage Articles", "category": "other", "apiName": "103p_total_homepage_ctr", "eventType": "custom", "eventFilter": null}, {"id": "27183250131", "viewId": null, "name": "[103P] - Total Clicks to UNMUTE Video Player", "category": "other", "apiName": "103p_total_clicks_to_unmute_video_player", "eventType": "custom", "eventFilter": null}, {"id": "27183360103", "viewId": null, "name": "[103P] - Total Clicks on Homepage Lead Articles", "category": "other", "apiName": "103p_total_clicks_on_homepage_lead_articles", "eventType": "custom", "eventFilter": null}, {"id": "27184090186", "viewId": null, "name": "[102P] - Total Clicks to SHARE Homepage Video Players", "category": "other", "apiName": "102p_total_clicks_to_share_homepage_video_players", "eventType": "custom", "eventFilter": null}, {"id": "27184800108", "viewId": null, "name": "[103P] - Total Clicks to SHARE Homepage Video Players", "category": "other", "apiName": "103p_total_clicks_to_share_homepage_video_players", "eventType": "custom", "eventFilter": null}, {"id": "27185560109", "viewId": null, "name": "[103P] - Total Clicks to EXPAND Homepage Video Players", "category": "other", "apiName": "103p_total_clicks_to_expand_homepage_video_players", "eventType": "custom", "eventFilter": null}, {"id": "27207620090", "viewId": null, "name": "[103P] - Total Homepage Video Interactions", "category": "other", "apiName": "103p_total_homepage_video_interactions", "eventType": "custom", "eventFilter": null}, {"id": "27213650059", "viewId": null, "name": "[102P] - Total Clicks to EXPAND Homepage Video Players", "category": "other", "apiName": "102p_total_clicks_to_expand_homepage_video_players", "eventType": "custom", "eventFilter": null}, {"id": "27223120062", "viewId": null, "name": "[102P] - Total Clicks to PAUSE Homepage Video Players", "category": "other", "apiName": "102p_total_clicks_to_pause_homepage_video_players", "eventType": "custom", "eventFilter": null}], "dimensions": [], "projectJS": function(){// Globally hold events for all experiments
// 5/25/2022
// ----------------------------------------
window.optimizelyEdge = window.optimizelyEdge || [];
window.optimizelyEdge.push({ "type": "holdEvents" });

// Create `window.djab` global object and utils object
// 5/25/2022
// ----------------------------------------

if (undefined === window.djab) {
  window.djab = {};
}

(function() {
  var validate = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < args.length; i++) {
      if (!obj || !obj.hasOwnProperty(args[i])) {
        return false;
      }

      obj = obj[args[i]];
    }

    return obj;
  };

  var getParamete'));
  };

  var getUserABBucket = function() {
    return new Promise(function(resolve, reject) {
      var tick = setInterval(function() {
        try {
          var bucket = validate(window, 'utag_data', 'ab_bucket');

          if (bucket) {
            clearInterval(tick);
            resolve(bucket);
          }
        } catch (error) {}
      }, 200);
    });
  };

  var t });
  };

  // Map of user bucket boundaries and the equivalent Optimizely
  // Page to trigger should a user fall between them
	var optimizelyPageBucketMap = {
    // i.e. '0-10': ['74P_articles_buckets', '75p_articles_buckets'],
    '0-99': ['99p_wsj_article_page'],
    '0-59': ['100p_wsj_article_page'],
  };

  // 1. Get user bucket from Promise
  // 2. Iterate through the above Page Map
  // 3. Check to see if the user falls between the bucket boundary
  // 4. Trigger Optimizely page

  getUserABBucket().then(function(bucket) {
    Object.keys(optimizelyPageBucketMap).map(function(key) {
      var pageApiKeys = optimizelyPageBucketMap[key];
      var boundaries = key.split('-');

      if (
        (bucket >= parseInt(boundaries[0]) &&
        bucket <= parseInt(boundaries[1])) ||
        key === getParameterByKey('djab_bucket_override')
        ) {
					pageApiKeys.forEach(function(pageApiKey) {
          trigger(pageApiKey);
        });
      }
    });
  });
})();
}, "interestGroups": [], "tagGroups": []},f=__webpack_require__(8133),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())i.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())i.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())i.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),i.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),i.log("Main / Disabling in favor of the preview client."),__webpack_require__(8988).setupPreviewGlobal(),__webpack_require__(8988).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync(""));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();v=r.getProjectToken(),h=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",v).replace("__PROJECT_ID__",h).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(8988).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFuntion(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var v,h,p;t.timeEnd("block");var g=t.now();t.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(n){try{__webpack_require__(1915).handleError(n)}catch(t){console.log(t)}}}()})();