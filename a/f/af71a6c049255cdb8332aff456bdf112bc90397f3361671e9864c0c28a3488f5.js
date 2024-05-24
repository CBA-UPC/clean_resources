/*! 20240201-1_b10-PR-66972-DEV-154051-trecs-ms2-finite-feed-will-be-infinite-once-it-s-requested-with--ac433493195 */

(()=>{const e="tbl-exm-history",t=80,i=10,o=2147483647,s="b4fa4ea0877d7ba760a995ab7c3bb98a";class r{constructor(e,t){TRC.util.addSupportForGoogleFonts(),this.trcManager=e,this.mixpanelEnabled=this.shouldEnableMixPanel(),this.mixpanelEnabled&&TRC.Mixpanel.loadMixpanelScript(s),this.sendEvent("AVAILABLE"),this.enableIosWebviewFix=TRC.util.isTrue(e.global["enable-ios-back-fix"]),this.timeToStopWaitingForLoad=+e.global["tbl-stop-waiting-loading"]||60,this.useSafariIOSOverride=this.isSafariIOSOverride(),this.stopWaitingForLoad=!1,this.feedIsVisible=!1,this.referrer=this.trcManager.getReferrer(),this.isGoogleTraffic=this.wasReferredFromGoogle(),this.url=window.location.href,this.enableExploreMoreNewDisplay=TRC.util.isTrue(e.global["enable-explore-more-new-display"]),this.enableIgnoreHistory=TRC.util.isTrue(e.global["enable-explore-more-ignore-history"]),this.otherModulesHaveBeenLoaded=TRC.FooterOverlay||TRC.FeedView||TRC.TaboolaVignette,this.isDesktop=!TRC.Device.isTouchDevice,TRC.ExploreMorePlacement=t.exm.placement,this.listenToModulesLoad(),this.setOptions(t),this.setCSS(),TRC.dispatch("ExploreMoreReady",this),this.googleTrafficActivationFeatureEnabled&&this.isGoogleTraffic?this.googleTrafficInitWrapper():this.iosWebviewHashAndGesture(),TRC.MetricsManager.sendMetricsEvent(TRC,e,{name:"ExploreMore",value:"1",type:"counter"},null),this.sendEventsForSpaExperiment("available")}shouldEnableMixPanel(){const{MIXPANEL_PERCENT:e}=r.GLOBAL_ATTRIBUTES,{isPercentEnabled:t}=TRC.util,{global:i}=this.trcManager;return t(i,e)}sendMixPanelEvent(e,t={}){this.mixpanelEnabled&&TRC.Mixpanel.isMixPanelLoaded()&&TRC.Mixpanel.sendMixpanelEvent(e,t)}sendEvent(e,t={}){const i=t.target?`${e} - ${t.target}`:e,o=TRC.util.merge({},t);delete o.target,this.sendMixPanelEvent(i,o);const{isPercentEnabled:s}=TRC.util,{SUPPLY_FEATURE_PERCENT:n}=r.GLOBAL_ATTRIBUTES,{global:a}=this.trcManager;if(s(a,n)){const{msg:i=""}=t,o=TRC.util.merge({},t);delete o.msg;const s=Object.keys(o).map(e=>`${e}: ${o[e]}`).join(", ");TRC.util.sendSupplyFeature(r.SUPPLY_FEATURE_TYPE,e,i,s)}}sendEventsForSpaExperiment(e){this.trcManager.sendAbTestEvent("explore-more",`explore-more-${e}`),TRC.ModuleLoader.load("spa-detector",TRC.SpaDetector,function(){const t=TRC.SpaDetector.detectSpa().isSpa;t&&this.trcManager.sendAbTestEvent("explore-more",`explore-more-${e}-spa`)}.trcBind(this))}iosWebviewHashAndGesture(){if(this.enableIosWebviewFix){if(this.navigation=r.initNavigator(),this.hashNeeded=r.isHashNeeded(),r.isGestureNeeded()||this.useSafariIOSOverride)return this.inspectGesture();if(this.hashNeeded)return this.waitForLoadToEnd()}this.init()}static initNavigator(){if(window.performance&&window.performance.getEntriesByType){const e=performance.getEntriesByType("navigation");if(e&&e.length>0)return e[0]}if(window.performance&&window.performance.timing)return window.performance.timing}waitForLoadToEnd(e=!0){let t;if(e&&(t=TRC.Timeout.set(()=>this.stopWaitingForLoad=!0,1e3*this.timeToStopWaitingForLoad)),this.stopWaitingForLoad)return this.init();0===this.navigation.loadEventEnd?TRC.Timeout.set(()=>this.waitForLoadToEnd(!1)):(TRC.Timeout.clear(t),this.init())}inspectGesture(){const e=()=>{this.waitForLoadToEnd(),TRC.dom.off(window,"touchend",e),TRC.dom.off(window,"mousedown",e)};TRC.dom.on(window,"touchend",e),TRC.dom.on(window,"mousedown",e)}static isHashNeeded(){const e=navigator.userAgent.toLowerCase();return e.indexOf("apple")>-1&&e.indexOf("iphone")>-1&&e.indexOf("webkit")>-1&&(navigator.userAgent.indexOf("FBAN")>-1||navigator.userAgent.indexOf("FBAV")>-1)&&-1===e.indexOf("safari")&&-1===e.indexOf("firefox")&&-1===e.indexOf("chrome")&&!location.hash}static isGestureNeeded(){const e=navigator.userAgent.toLowerCase();return 1===history.length&&e.indexOf("apple")>-1&&e.indexOf("macintosh")>-1&&e.indexOf("webkit")>-1&&e.indexOf("chrome")>-1}setOptions(t){const{exm:i,drp:o}=t;let s=null;const{global:n}=this.trcManager;this.titleText=r.getTranslatedTextBySiteLanguage(i.title,"TITLE_TEXT"),this.css=i.css||"",this.headerSelector=i.headerSelector||"header",this.enableHideHeaderFeature=TRC.util.isEnabledByDefault(n["explore-more-enable-hide-all-but-header"])&&!this.isDesktop,this.enablePositionCorrection=TRC.util.isEnabledByDefault(n["explore-more-enable-position-correction"])&&!this.isDesktop,this.enableMissingPubHeaderEvent=TRC.util.isTrue(n["explore-more-enable-missing-header-event"]),this.publisherHeaderHeight=0,this.zIndexChanged=!1,this.hideAllButHeader=!1,this.styleToHideAllButHeader="",this.siteHeader=this.enforceMaxHeight(this.headerSelector),this.enableHideHeaderFeature&&this.siteHeader&&(this.styleToHideAllButHeader=this.createStyleToHideAllButHeader(),this.hideAllButHeader=!!this.styleToHideAllButHeader),this.shouldNotCopyPublisherHeaderHtml=i.shouldNotCopyPublisherHeaderHtml||!1,this.feedContainer=i.container?document.getElementById(i.container):null,this.feedContainerWidth=`${i.feedContainerWidth||"85"}%`,this.historyLengthOnInit=0,this.currentHistoryLength=0,o&&o["explore-more"]&&(s=__trcUnJSONify(o["explore-more"]));const a=n["enable-explore-more-state-check"],l=n["set-explore-more-state-check-interval-time"];if(i.addStateCheck=a||i.addStateCheck,i.stateCheckIntervalTime=l||i.stateCheckIntervalTime,this.stateCheck={enable:i.addStateCheck||!1,IntervalTime:i.stateCheckIntervalTime||200,intervalId:0},this.enableExploreMoreVideo=s&&s["enable-explore-more-video"]||n["enable-explore-more-video"],this.disableExploreMoreVideoReset=s&&s["disable-explore-more-video-reset"]||n["disable-explore-more-video-reset"],this.disableHistoryCheck=s&&s["disable-explore-more-history-check"]||n["disable-explore-more-history-check"],!this.disableHistoryCheck){if(window.sessionStorage){const t=sessionStorage.getItem(e);this.sessionHistory=t?__trcUnJSONify(t):{}}r.updateReloadState()}this.googleTrafficActivationFeatureEnabled=r.isGoogleTrafficFeatureEnabled(s),this.googleTrafficActivationFeatureEnabled&&this.isGoogleTraffic&&(s=s||{},this.googleModeActivateByClick=TRC.util.isTrue(s.googleModeActivateByClick),this.googleModeActivateByTimer=void 0===s.googleModeActivateByTimer||TRC.util.isTrue(s.googleModeActivateByTimer),this.googleModeActivationTimerLength=1e3*parseInt(s.googleModeActivationTimerLengthInSeconds,10)||1e3*parseInt(n["explore-more-google-timer"],10)||2e4)}static updateReloadState(){const e={count:0};if(history.state)if(void 0===history.state.count){const{state:t}=history;let i={};e.count++,i=TRC.util.merge(i,t,e),history.replaceState(i,"")}else{const{state:e}=history;e.count++,history.replaceState(e,"")}else e.count++,history.replaceState(e,"")}static getTranslatedTextBySiteLanguage(e,t){return e||(TRC.translationManager.getLabel({feature:"explore-more",label:t})||e)}googleTrafficInitWrapper(){this.googleModeActivateByClick&&this.activateClickListener(),this.googleModeActivateByTimer&&this.startTimer()}startTimer(){this.activationTimer=TRC.Timeout.set(this.timeoutHandler.trcBind(this),this.googleModeActivationTimerLength)}activateExploreMoreAndTurnOffListeners(){this.clearGoogleTrafficTriggers(),this.init()}clickHandler(){this.activateExploreMoreAndTurnOffListeners()}timeoutHandler(){this.activateExploreMoreAndTurnOffListeners()}activateClickListener(){this.boundClickHandler=this.clickHandler.trcBind(this),TRC.dom.on(window,"click",this.boundClickHandler)}clearGoogleTrafficTriggers(){this.googleModeActivateByClick&&TRC.dom.off(window,"click",this.boundClickHandler),this.googleModeActivateByTimer&&TRC.Timeout.clear(this.activationTimer)}static isGoogleTrafficFeatureEnabled(e){return null===e||void 0===e.googleTrafficActivationFeatureEnabled||TRC.util.isTrue(e.googleTrafficActivationFeatureEnabled)}wasReferredFromGoogle(){const e=this.getHostname(),t=/^(.+\.|(.+)?\/)?google\./;return null!==e.match(t)}getHostname(){let e=this.referrer.indexOf("//")>-1?this.referrer.split("/")[2]:this.referrer.split("/")[0];return[e]=e.split(":"),[e]=e.split("?"),e}getGoogleFont(){const e="unset",{global:t}=this.trcManager||{};if(!t)return e;const i=t["google-fonts"];return Array.isArray(i)&&i.length>0?i[0]:e}setCSS(){const{headerSelector:e,feedContainerWidth:t}=this,i=this.getGoogleFont();TRC.dom.injectStyle(`#tbl-explore-more-container { display: none; position: relative; margin-top: 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } #tbl-explore-more-container.tbl-new-display { background-color: #ffffff; z-index: 2147483647; width: 100%; box-sizing: border-box; } #tbl-explore-more-container.tbl-new-display.tbl-explore-more-show-container { display: block !important; } #tbl-explore-more-container .tbl-explore-more-site-header { z-index: 2147483647; left: 0; right: 0; } #tbl-explore-more-container .tbl-feed-header { display: none; } #tbl-explore-more-container #tbl-explore-more-title { font-family: ${i}; font-weight: bold; font-size: 22px; padding: 10px 0; color: #222222; } #tbl-explore-more-container.tbl-exm-desktop .trc_multi_widget_container { padding-bottom: 22px; } #tbl-explore-more-container.tbl-exm-desktop #tbl-explore-more-title { width: 100%; } #tbl-explore-more-container.tbl-exm-desktop .tbl-title-and-pop-wrp { position: relative; } #tbl-explore-more-container.tbl-exm-desktop .tbl-title-and-pop-wrp, #tbl-explore-more-container.tbl-exm-desktop .tbl-feed-card, #tbl-explore-more-container.tbl-exm-desktop .tbl-loading-cards-placeholder { width: ${t}; max-width: 1000px; min-width: 800px; margin-right: auto; margin-left: auto; clear: both; }body.tbl-show-explore-more.tbl-explore-more-show-original-header > *:not(#tbl-explore-more-container):not(${e}):not(.trc_popover_aug_container) { display: none; }body.tbl-show-explore-more.tbl-explore-more-hide-original-header > *:not(#tbl-explore-more-container):not([id='_cm-css-reset']):not(.trc_popover_aug_container) { display: none; }body.tbl-show-explore-more.tbl-explore-more-hide-original-header > *:not([id='_cm-css-reset']):not(.trc_popover_aug_container) { display: none; }body.tbl-show-explore-more .tbl-stories-container { display: none; }body.tbl-show-explore-more #tbl-explore-more-container { display: block; }body.tbl-show-explore-more.tbl-explore-more-body-fixed { position: fixed; top: 0; width: 100vw; height: 100vh; } ${this.css} ${this.styleToHideAllButHeader}`,null),this.feedContainer&&TRC.dom.removeClass(this.feedContainer,"tbl-invisible")}shouldAddToHistory(){const{state:e}=history;if(e&&e.tblShouldDisplayFeed&&"number"==typeof e.count&&e.count>0)return!1;const t=this.sessionHistory&&this.sessionHistory[this.url],i=!e||void 0===e.feedViewEventName;return this.disableHistoryCheck||!t&&i}static checkHistoryState(){history.state&&"feed-view-init"===history.state.feedViewEventName&&history.go(-1)}init(){this.feedContainer?(this.shouldAddToHistory()?this.addNewHistoryEntries():r.checkHistoryState(),this.listenToPopState(),this.createAndInjectNewHtml(),this.handleFeedContainerAndPublisherHeaderStyle()):__trcWarn("ExploreMoreModule: TryingToInitializeExploreMoreExperienceButNoFeedFound")}createAndInjectNewHtml(){this.isDesktop&&this.exploreMoreOnDesktop(),this.feedContainer.insertAdjacentHTML("afterbegin",this.createNewElements())}exploreMoreOnDesktop(){TRC.dom.addClass(this.feedContainer,"tbl-exm-desktop")}handleFeedContainerAndPublisherHeaderStyle(){if(this.shouldNotCopyPublisherHeaderHtml)return;const e=this.getSiteHeaderStyle();if(e&&"fixed"!==e.position&&"absolute"!==e.position){const e=getComputedStyle(this.feedContainer).paddingLeft,t=this.feedContainer.querySelector(this.headerSelector);t&&(t.style=`margin-left: -${e}; margin-right: -${e};`)}}createNewElements(){let e=`<div id="tbl-explore-more-title">${this.titleText}</div>`;const t=this.shouldCreateHeaderPlaceholder()?this.createHeaderPlaceholderElement():"",i=this.hideAllButHeader?"":this.tryGetPublisherHeaderHtml();return this.isDesktop&&(e=`<div class="tbl-title-and-pop-wrp">${e}</div>`),`${i} ${t} ${e}`}tryGetPublisherHeaderHtml(){return this.siteHeader&&this.siteHeader.outerHTML?(TRC.dom.addClass(this.siteHeader,r.CSS_CLASSES.SITE_HEADER),this.siteHeader.outerHTML):""}getSiteHeaderStyle(){return void 0!==this.siteHeaderStyle?this.siteHeaderStyle:this.siteHeaderStyle=this.siteHeader&&getComputedStyle(this.siteHeader)}createHeaderPlaceholderElement(){const e=this.getHeaderAbsoluteHeight(this.siteHeader),t=`width: ${this.getSiteHeaderStyle().width}; height: ${e}`;return`<div class="${r.CSS_CLASSES.HEADER_PLACEHOLDER}" style="${t}"></div>`}shouldCreateHeaderPlaceholder(){return this.siteHeader&&"fixed"===this.getSiteHeaderStyle().position}shouldDisplayFeed(){return this.enableIgnoreHistory?!this.feedIsVisible:history.state&&history.state.tblShouldDisplayFeed&&!this.feedIsVisible}shouldHideFeed(){return this.enableIgnoreHistory?this.feedIsVisible:history.state&&history.state.tblOriginalState&&this.feedIsVisible}setHistoryModified(t){window.sessionStorage&&(this.sessionHistory[this.url]=t,sessionStorage.setItem(e,JSON.stringify(this.sessionHistory)))}markOriginalState(){const e={tblOriginalState:!0};this.originalPublisherHistoryState?this.originalPublisherHistoryState.tblOriginalState=!0:this.originalPublisherHistoryState=e}addNewHistoryEntries(){this.historyLengthOnInit=history.length,this.hashNeeded&&this.enableIosWebviewFix&&(location.hash=r.generateUniqueId());const{DISPLAY_FEED_PAGE:e}=r.HISTORY_STATE;if(this.originalPublisherHistoryState=history.state,r.isFacebookAndroid()?history.pushState(e,""):history.replaceState(e,""),this.markOriginalState(),this.useSafariIOSOverride){const e=this.trcManager.global["use-ios-safari-override-timeout-config"]||10;setTimeout(()=>{history.pushState(this.originalPublisherHistoryState,"")},e)}else history.pushState(this.originalPublisherHistoryState,"");this.setHistoryModified(!0),this.sendEvent("CLICKABLE",{msg:"back button enabled, history changed.",tblOriginalState:history.state.tblOriginalState})}static generateUniqueId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}listenToPopState(){TRC.dom.on(window,"popstate",this.handlePopstateEvent.trcBind(this)),r.isPageLoading()&&this.stateCheck.enable&&this.startStateIntervalCheck(this.handlePopstateEvent.trcBind(this))}handleBeforeUnload(){this.duration=`${((new Date).getTime()-this.duration)/1e3} sec`,this.sendEvent("INTERACTION",{msg:"explore more page view duration.",duration:this.duration}),this.setHistoryModified(!1)}static isPageLoading(){return"complete"!==document.readyState}static isFacebookAndroid(e){const t=e||navigator.userAgent||navigator.vendor||window.opera;return(t.indexOf("FBAN")>-1||t.indexOf("FBAV")>-1)&&t.indexOf("Android")>-1}startStateIntervalCheck(e){this.stateCheck.intervalId=TRC.Interval.set(()=>{r.isPageLoading()||(this.stateCheck.enable=!1,TRC.Interval.clear(this.stateCheck.intervalId)),history.state&&history.state.tblShouldDisplayFeed&&this.stateCheck.enable&&(e(),TRC.Interval.clear(this.stateCheck.intervalId))},this.stateCheck.IntervalTime)}handlePopstateEvent(){this.enableIgnoreHistory&&this.isResetingHistory||(this.stateCheck.enable=!1,this.shouldDisplayFeed()?(this.displayFeed(),TRC.dom.on(window,"beforeunload",this.handleBeforeUnload.trcBind(this))):this.shouldHideFeed()&&this.hideFeed(),this.sendEvent("CLICKED",{msg:"back/forward button clicked.",target:"back/forward"}),setTimeout(()=>{this.isResetingHistory=!1},200))}getExploreMoreClassBody(){const e=this.hideAllButHeader?r.CSS_CLASSES.SHOW_ORIGINAL_HEADER_HIDE_ALL:r.CSS_CLASSES.HIDE_ORIGINAL_HEADER;return`${r.CSS_CLASSES.SHOW} ${e}`}addExploreMoreClassToElements(){r.addClassToElements([document.body],this.getExploreMoreClassBody())}showExploreMoreContainer(){this.sendABTestEventsForNewDisplay(`show explore more`),TRC.dom.addClass(this.feedContainer,r.CSS_CLASSES.SHOW_EM_CONTAINER),this.setMarginToShowPublisherHeader(),this.toggleBodyElementPositionFixed({action:"addClass"}),this.changeEMZIndex()}hideExploreMoreContainer(){this.sendABTestEventsForNewDisplay(`hide explore more`),TRC.dom.removeClass(this.feedContainer,r.CSS_CLASSES.SHOW_EM_CONTAINER),this.toggleBodyElementPositionFixed({action:"removeClass"})}addResetClassToElements(){this.siteHeader||r.addClassToElements([document.body,document.documentElement],r.CSS_CLASSES.RESET_BODY_STYLE)}removeExploreMoreClassFromBody(){const e=this.getExploreMoreClassBody().split(" ");this.siteHeader||e.push(r.CSS_CLASSES.RESET_BODY_STYLE),e.forEach(e=>TRC.dom.removeClass(document.body,e))}static removeResetClassFromHtml(){TRC.dom.removeClass(document.documentElement,r.CSS_CLASSES.RESET_BODY_STYLE)}static addClassToElements(e,t){e.forEach(e=>{TRC.dom.addClass(e,t)})}static initScrollTop(){TRC.Timeout.set(()=>{r.resetScrollBehavior(document.body),r.resetScrollBehavior(document.documentElement)},0)}hideFeed(){TRC.dispatch("ExploreMoreHide"),this.removeExploreMoreClassFromBody(),r.removeResetClassFromHtml(),this.enableExploreMoreNewDisplay?this.hideExploreMoreContainer():r.initScrollTop(),this.feedIsVisible=!1,this.retrieveHistory()}displayFeed(){if(this.feedContainer){if(this.feedIsVisible=!0,this.resetHistory(),TRC.dispatch("ExploreMoreLoaded",this),this.disableExploreMoreVideoReset||TRC.dispatch("videoReset"),this.enableExploreMoreVideo){const e={eventName:"exploreMore",containerSelector:`#${this.feedContainer.id}`,placement:TRC.ExploreMorePlacement};TRC.dispatch("feedContainerChanged",e)}this.addExploreMoreClassToElements(),this.addResetClassToElements(),r.initScrollTop(),r.hideDfpIfExist(),this.enableExploreMoreNewDisplay?this.showExploreMoreContainer():this.hideAllButHeader&&this.enablePositionCorrection&&this.initPositionCorrection(),this.sendEvent("VISIBLE",{msg:"explore more is visible now."}),this.handleItemObserver(),this.handleItemClick(),this.duration=(new Date).getTime(),this.sendEventsForSpaExperiment("rendered"),TRC.Timeout.set(()=>{this.shouldSendABTestEventsForNoPubHeader()},100)}else this.trcManager.sendAbTestEvent("noFeedToShow","noFeedToShow")}handleItemClick(){TRC.dom.on(this.feedContainer,"click",e=>{const t=(e=e||event).target||e.srcElement;t&&TRC.dom.closest(t,".videoCube[data-item-id]")&&this.sendEvent("CLICKED",{msg:"clicked on explore more item.",target:"item"})})}static observeItemInViewPort(e,t,i){const o={targetElement:t,threshold:1,onEnter:()=>{TRC.intersections.unobserve(s),e(i)}},s=TRC.intersections.observe(o)}handleItemObserver(){const e=this.trcManager.global["explore-more-enable-observing-scroll-item"];if(TRC.util.isTrue(e))return;const t=this.trcManager.global["explore-more-observe-scroll-item-index"]||4,i=this.feedContainer.querySelector(`[data-card-index="${t}"]`),o=e=>{this.sendEvent("SCROLLED",{msg:`user scrolled to card ${e}`})};if(i)return void r.observeItemInViewPort(o,i,t);if(!window.MutationObserver)return;const s=e=>{r.observeItemInViewPort(o,e,t)};this.observeItemAdded(s,t)}observeItemAdded(e,t){const i=new MutationObserver(o=>{o.forEach(o=>{o.addedNodes.forEach(o=>{o.dataset.cardIndex===t.toString()&&(i.disconnect(),e(o))})})});i.observe(this.feedContainer,{subtree:!1,childList:!0})}static shouldSkipPlacement(e,t,i){return e.fpl&&t.trc.f[e.fpl]&&t.trc.f[e.fpl].exm&&!i.feeds[e.fpl]}static shouldSkipPushedRequest(e){return TRC.ExploreMorePlacement=TRC.ExploreMorePlacement||"Explore More",TRC.ExploreMore.exploreMoreIsVisible()&&!e[TRC.ExploreMorePlacement]}static exploreMoreIsVisible(){return document.body.className.indexOf(r.CSS_CLASSES.SHOW)>-1}static hideDfpIfExist(){const e=document.querySelector(".adsbygoogle-noablate[data-anchor-status]");e&&(e.style.display="none",r.resetBodyPaddingAndMargin())}static resetBodyPaddingAndMargin(){const e=window.getComputedStyle(document.body);"0px"!==e.paddingTop&&(document.body.style.paddingTop="0px"),"0px"!==e.marginTop&&(document.body.style.marginTop="0px")}enforceMaxHeight(e){if(!e)return null;const i=document.querySelector(e);if(!i)return null;const o=this.getHeaderAbsoluteHeight(i);return this.enableHideHeaderFeature&&o>t?null:(this.trcManager.sendAbTestEvent("explore-more","header found"),i)}createStyleToHideAllButHeader(){const e="tbl-explore-more-container",t="tbl-feed-view-container",i="trc_popover_aug_container",o=`:not(#${e}):not(#${t}):not([id='_cm-css-reset']):not(.${i})`,{SHOW:s,SHOW_ORIGINAL_HEADER_HIDE_ALL:n}=r.CSS_CLASSES;return this.createStyleToHideAllButOneElement({extraBodyClass:`.${s}.${n}`,excludeAlso:o})}createStyleToHideAllButOneElement({extraBodyClass:e,excludeAlso:t}){let i=this.headerSelector,o="";const s=`body${e}`,n=e=>{if("body"===e.localName)return o+=`${s} > *${t}:not(${i}){display: none}`;const a=r.getElementSelector(e);return a?(i&&(o+=`${s} ${a} > *:not(${i}){display: none} `),i=a,n(e.parentElement)):""};return n(this.siteHeader.parentElement)}static getElementSelector(e){return e.id?`#${e.id}`:e.classList[0]?`.${e.classList[0]}`:null}getHeaderAbsoluteHeight(e){if(e){const t=this.siteHeader?this.getSiteHeaderStyle():window.getComputedStyle(e),i=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.height),s=Math.ceil(o+i);return 0===s?this.getHeaderAbsoluteHeight(e.firstElementChild):(this.publisherHeaderHeight=s,s)}return t+1}initPositionCorrection(){TRC.Timeout.set(()=>{this.checkIfHeaderIsHidingFeedAndFix(),this.addNegativeMarginIfFeedPushedDown()},10)}checkIfHeaderIsHidingFeedAndFix(){if(this.siteHeader){const e=this.getHeaderAbsoluteHeight(this.siteHeader,!0),t=r.checkElementDistanceFromTop(this.siteHeader),i=e+t,s=r.checkElementDistanceFromTop(this.feedContainer);if(this.sendABTestEventsForNewDisplay(`header is hiding feed => diff = ${i-s}`),i!==s){const e=i-s;this.feedContainer.style.marginTop=`${e}px`,this.enableExploreMoreNewDisplay||(this.feedContainer.style.zIndex=o.toString())}}}static resetScrollBehavior(e){const{scrollBehavior:t}=getComputedStyle(e);e.style.scrollBehavior="auto",e.scrollTop=0,e.scrollBehavior=t}addNegativeMarginIfFeedPushedDown(){if(!this.siteHeader){const e=r.checkElementDistanceFromTop(this.feedContainer);this.sendABTestEventsForNewDisplay(`Feed is pushed down => distance from top = ${e}`),e>0&&(this.feedContainer.style.marginTop=`-${e}px`)}}static checkElementDistanceFromTop(e){try{return e="string"==typeof e?document.querySelector(e):e,window.pageYOffset+e.getBoundingClientRect().top}catch(e){__trcWarn("checkElementDistanceFromTop: element did not found")}}listenToModulesLoad(){if(this.enableExploreMoreNewDisplay){if(!this.otherModulesHaveBeenLoaded){const{FEED_VIEW_LOADED:e,FOOTER_OVERLAY_LOADED:t,VIGNETTE_LOADED:i}=r.MODULES_LISTENER;this.feedViewListener=TRC.listen(e,this.handleModuleLoad.trcBind(this,e)),this.footerOverlayListener=TRC.listen(t,this.handleModuleLoad.trcBind(this,t)),this.vignetteListener=TRC.listen(i,this.handleModuleLoad.trcBind(this,i))}const{FEED_VIEW_ACTIVE:e,FOOTER_OVERLAY_ACTIVE:t}=r.MODULES_LISTENER;TRC.listen(e,this.handleOverlayModuleLoad.trcBind(this)),TRC.listen(t,this.handleOverlayModuleLoad.trcBind(this))}}handleModuleLoad(e){this.sendABTestEventsForNewDisplay(`footerOverlay Or feedView dispatch event => event name = ${e}`),this.whenOtherModulesLoaded(),this.feedViewListener.remove(),this.footerOverlayListener.remove(),this.vignetteListener.remove()}handleOverlayModuleLoad({data:e}){this.toggleBodyElementPositionFixed({action:e?"removeClass":"addClass"})}whenOtherModulesLoaded(){this.otherModulesHaveBeenLoaded||(this.otherModulesHaveBeenLoaded=!0,this.feedIsVisible&&this.changeEMZIndex())}changeEMZIndex(){this.otherModulesHaveBeenLoaded&&!this.zIndexChanged&&(this.feedContainer.style.zIndex=(o-1).toString(),this.sendABTestEventsForNewDisplay(`EM z-index changed => EM z-index = ${this.feedContainer.style.zIndex}`),this.zIndexChanged=!0)}setMarginToShowPublisherHeader(){this.hideAllButHeader&&(this.feedContainer.style.marginTop=`${this.publisherHeaderHeight}px`)}toggleBodyElementPositionFixed({action:e}){this.siteHeader&&TRC.dom[e](document.body,r.CSS_CLASSES.BODY_ELEMENT_FIXED)}sendABTestEventsForNewDisplay(e){this.enableExploreMoreNewDisplay&&this.trcManager.sendAbTestEvent("explore-more-display",e)}shouldSendABTestEventsForNoPubHeader(){if(this.enableMissingPubHeaderEvent&&!this.shouldNotCopyPublisherHeaderHtml)if(this.siteHeader)if(this.hideAllButHeader)!r.isElementBelowHeader(this.feedContainer)&&this.sendABTestEventForNoPubHeader();else{const e=this.feedContainer.querySelector("#tbl-explore-more-title"),t=e||this.feedContainer.querySelector('[data-card-index="1"]');t&&!r.isElementBelowHeader(t)&&this.sendABTestEventForNoPubHeader()}else this.sendABTestEventForNoPubHeader()}sendABTestEventForNoPubHeader(){const e="explore-more-display",t={msg:"missing publishers header"};this.trcManager.sendAbTestEvent(e,t.msg),this.sendMixPanelEvent(e,t)}static isElementBelowHeader(e){return r.checkElementDistanceFromTop(e)>i}resetHistory(){if(this.enableIgnoreHistory){const e=history.length-this.historyLengthOnInit-1;e>0&&(this.isResetingHistory=!0,window.history.go(-1*e),this.currentHistoryLength=e)}}retrieveHistory(){this.enableIgnoreHistory&&(this.isResetingHistory=!0,window.history.go(this.currentHistoryLength))}isSafariIOSOverride(){return e.call(this)&&t();function e(){return this.trcManager.global["use-ios-safari-override"]}function t(){const{userAgent:e}=navigator;return/Version\/16/i.test(e)&&/Safari/i.test(e)&&/iPhone/i.test(e)}}}r.SUPPLY_FEATURE_TYPE="EXPLORE_MORE",r.GLOBAL_ATTRIBUTES={MIXPANEL_PERCENT:"explore-more-mixpanel-percent",SUPPLY_FEATURE_PERCENT:"explore-more-supply-feature-percent"},r.CSS_CLASSES={SHOW:"tbl-show-explore-more",HEADER_PLACEHOLDER:"tbl-explore-more-fixed-header-placeholder",SHOW_ORIGINAL_HEADER:"tbl-explore-more-show-original-header",HIDE_ORIGINAL_HEADER:"tbl-explore-more-hide-original-header",SITE_HEADER:"tbl-explore-more-site-header",SHOW_ORIGINAL_HEADER_HIDE_ALL:"tbl-explore-more-show-original-header-hide-all",RESET_BODY_STYLE:"tbl-explore-more-reset-body-style",SHOW_EM_CONTAINER:"tbl-explore-more-show-container",BODY_ELEMENT_FIXED:"tbl-explore-more-body-fixed"},r.MODULES_LISTENER={FEED_VIEW_LOADED:"feed-view-loaded",FEED_VIEW_ACTIVE:"feed-view-active",FOOTER_OVERLAY_LOADED:"footer-overlay-loaded",FOOTER_OVERLAY_ACTIVE:"footer-overlay-active",VIGNETTE_LOADED:"vignette-loaded"},r.HISTORY_STATE={ORIGINAL_PAGE:{tblPreExploreMoreExperience:!0},DISPLAY_FEED_PAGE:{tblShouldDisplayFeed:!0}},r.MESSAGES={TITLE_TEXT:"Keep on reading"},TRC._translationQueue=TRC._translationQueue||[],TRC._translationQueue.push({"explore-more":r.MESSAGES}),TRC.ExploreMore=r})();ditions: [{\\n    key: 'isDisableSticky',\\n    val: true\\n  }],\\n  settings: {\\n    'stickyCard.isActive': false,\\n  }\\n});\\ncmTag.set(\\\"unitType\\\", \\\"WIDGET_ITEM\\\");\\n\\ncmTag.set('player.settings.queue_size', 10);\\ncmTag.set('player.settings.max_ready_vpaid', 12);\\ncmTag.set('predictors.time.isActive', true);\\ncmTag.set('maxNonRvVimpsInQueue', 12);\\ncmTag.set('predictors.time.predictPoints', 0);\\ncmTag.set('predictors.time.lengthInSeconds', 3);\\ncmTag.set('predictors.time.repeat', 20);\\ncmTag.set('predictors.playerReady.isActive', true);\\ncmTag.set('predictors.playerReady.predictPoint', [0, 0]);\\ncmTag.set('predictors.playerReady.isStartWF', true);\\ncmTag.set('closeButton.hasCloseButton', false);\\ncmTag.set('predictors.time.cookieSync.isActive', false);\\ncmTag.set('activateCookieSync', false);\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'isMobile',\\n    val: false\\n  }],\\n  settings: {\\n    'noaop': 5\\n  }\\n});\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'isMobile',\\n    val: true\\n  }],\\n  settings: {\\n    'noaop': 3\\n  }\\n});\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'unitType',\\n    val: 'WIDGET_ITEM'\\n  }],\\n  settings: {\\n    'predictors.time.lengthInSeconds': 10,\\n    'player.settings.cleanAdOnImp': false\\n  }\\n});\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'isMobile',\\n    val: false\\n  }, {\\n    key: 'unitType',\\n    val: 'WIDGET_ITEM'\\n  }],\\n  settings: {\\n    'isGetRv1OnlyForEligible.delayPrediction': true,\\n    'predictors.fullEligibility.maxPPS': 1,\\n    'predictors.intersection.isActive': true\\n  }\\n});\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: \\\"ep\\\",\\n    val: \\\"1\\\"\\n  }],\\n  settings: {\\n    isMultiAd: false,\\n    volume: \\\"onHover\\\",\\n    isSoundOnHover: true,\\n    \\\"components.CloseButtonView.hasCloseButton\\\": false,\\n    \\\"onOutOfView\\\": \\\"pause\\\",\\n    \\\"originId\\\": 15,\\n    \\\"preroll.pubId\\\": 133128,\\n    \\\"preroll.pubTagId\\\": 779408,\\n    \\\"midroll.pubId\\\": 133128,\\n    \\\"midroll.pubTagId\\\": 779408,\\n    \\\"postroll.pubId\\\": 133128,\\n    \\\"postroll.pubTagId\\\": 779408,\\n    \\\"pubId\\\": 133128,\\n    \\\"pubTagId\\\": 779408,\\n    \\\"player.settings.mprdct\\\": 0,\\n    \\\"player.settings.encwfrs\\\": false,\\n    \\\"player.settings.cmbopps\\\": false,\\n    \\\"abTest\\\": \\\"ep1_vA\\\"\\n  }\\n});\\n  cmTag.set(\\\"adMaxPlaySeconds\\\", 210);\\ncmTag.set(\\\"multiUnitManager.isActive\\\", true);\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'country',\\n    val: 'IL'\\n  }],\\n  settings: {\\n    'stickyCard.isActive': false,\\n    'player.settings.optpwov': 0,\\n    'isPWOV': false,\\n    'onOutOfView': 'pause'\\n  }\\n});\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'forceSelectorToBody',\\n    val: true\\n  }],\\n  settings: {\\n    'videoContainerSelector': 'body'\\n  }\\n});\\n\\ncmTag.set('pixels.startWithABT.isFire', true);\\n cmTag.push('abTest', 'eidc_vA');\\n\\n\\n\\n\\n\\n// Roll out level 4 on amp - minimze heavy ad interventions  \\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'frameType',\\n    val: 3\\n  }],\\n  settings: {\\n    'pubId': 383725,\\n    'pubTagId': 2077655,\\n    'preroll.pubId': 383725,\\n    'preroll.pubTagId': 2077655,\\n    'midroll.pubId': 383725,\\n    'midroll.pubTagId': 2077655,\\n    'postroll.pubId': 383725,\\n    'postroll.pubTagId': 2077655,\\n    'preset.level': 4\\n  }\\n});\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\ncmTag.set('pixels.startWithABT.isFire', true);\\n cmTag.push('abTest', 'agqp4c_vC');\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n  \\n\\n\\n\\n\\n  \\n\\n\\n\\n\\n\\n\\n\\n\\n\\ncmTag.push('abTest', 'adxsub-out_vA');\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'withAdx',\\n    val: true\\n  }],\\n  settings: {\\n    'abTest': 'adxsub_vA',\\n    'pixels.startWithABT.isFire': true\\n  }\\n});\\n\\ncmTag.push('abTest', 'adxsub-out_vB');\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'withAdx',\\n    val: false\\n  }],\\n  settings: {\\n    'abTest': 'adxsub_vB',\\n    'pixels.startWithABT.isFire': true\\n  }\\n});\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n  \\n  // exco\\n\\n\\n\\n\\n\\n\\n//aniview\\n\\n\\n\\n\\n\\n\\n// aniview prebid as vpaid\\n\\n\\n\\n\\n\\n  \\n  \\n\\n  \\n  \\n  \\n  \\n\\n\\n\\n\\n\\n\\n\\n\\n\\n  cmTag.setByCondition({\\n  conditions: [{\\n    func: function(config) {\\n      return config.get('countryIsoCode') === 'kor' || config.get('countryIsoCode') === 'jpn' || (config.get('countryIsoCode') === 'isr' && config.get('taboolaNetworkId') !== 1386266);\\n    }\\n  }],\\n  settings: {\\n    'components.contentVideo.isActive': false,\\n    'displayFiller.betweenAds': 'none',\\n    'displayFiller.beforeAd': 'none',\\n    'displayFiller.onTimeout': 'none',\\n    'player.settings.iscntntactv': false\\n  }\\n});\\n\\n  cmTag.set(\\\"player.settings.volume\\\", 0);\\ncmTag.setMacros({\\n  dast: \\\"V8GNcCLAYo8olD6-E3hRBQ5BOH1sNvCikAAABgYIDgAEmtTAvXxLFYa1aDjVu0W7jWCsdktpYMF5uRcbCYWRyWISCplWnhmjgWa81qsHGLdgvXWuGYzNaS4WIzMg4WM4vDMgUWzTQZFJTT02N2GURF19tidzjNnjdQQ9Pp8Lnu9brf764y-ywPm9Pjt6uNf5Xn8PKYHh7X2e_5S1xm51v5lrhMf7fa9bKcXm6N3-yw-C0Pk9_ycCvMbpHD8ha7rm_N6y1xWVxuzcutsntcL7vp8nBLnC67HQAAAAA8-P___4cAAAAAEAEAAABAAgAAAACFgAr_FgQuAAAAAGD4____1wCAzCFBHJaPy-y3O_wBAAAAAAQAAAAACYCBhPUSACrF0yf-_________2MM0GfeyPj___-_YdAD4MEHwIMQAACArCGAeLCX7Gaac0QKpIswAgAAADA5JbhxZJJOULGo8v__328F4AoAQEAj3ndgRxbdQYm3MAAAAAJjFuhh8fvNDrvG73aZ_________38z_2f-0QiVFH6kAVoo_FDzCwgAsOYXEACAjboBAHgTACfoELRiMFgdAhrtRrMDAAAAcOf___9fD8j4RobZZDPcODzDycI2sm1cJtNwZVosbMaVx-LaHuHGZ4YEehutPhbNNBkUlNPTY3YZREXX22J3OM2e-6FoyXK33K1Gk8VotFxudsPNaLA_ArQaoIkYLJeTyWKyW41Wo81wN5oNFijgJoiiJavlcrnabFar3WgxG2yWw80GUbRqNRttBsPVbDLb7VbDwXA5GiGKlix3y91qNFmMRsvlZjfcjAZDBDPG0cTmci7XmtHIsBZtbJu1xGNcrUXL0cYwcywnzplvLXp9TB-Lw7RY2LZIMEBuL5KnRTpRzGwmm2M53NgctoXNuBgslhOLybIwDWeOlW23nIglmpNFOpFd9h3fyDCbbIYbh2c4WdhGto3LZBquTIuFzbjyWFz7jnE0sbmcy7VmNDKsRRvbZi3xGFdr0XK0Mcwcy4lz5luLXh_Tx-IwLRa2fWM32C0my-FytG_sBrvFZLmcLPcdOsN39TkbRbeUwaNyVm_hxNjmNChcBov3qF6dZ0djwW_2HZ0yr1da1Bn9fr_f7_f7_X6_36D1HMwGhW-1-YlvmanD-E2dDGKDQRFLBBfpRGV23Z22l-XzMLtVZp_lYXN6_BaxRGm6SCd6lefw8pgeHtfZ7_lLXGbnW_mWuEx_t9r1spxebo3f7LD4LQ-T3_JwK8xukcPyFruub83rLXFZXG7Ny62ye1wvu-nycEucLrtFLBGcLtKJ6GU8XdR_1BCj3Vy4mSs2g7lkt0oAAAAAAAAAAJZgmukmAAAAAE4GsVwuRrt1OpDhYLNYrZYLACLmQNePeK9Pybo_xK6Jt6X3LkkdgmKNPVZRZtfdaXtZPg-zW2X2WR42p8dvZQAQK-rMNvuMINZqtawBAAAIYAMAABjgphtvAUJx_____-MAAAAEyKEHAABAsA_ICmj0WqEnjl9BrBabzf4BqBBrtVrdbqzVagUsiMVktZzA____f4IAAAAAAAA7HQ!\\\",\\n  dataCenter: \\\"am\\\",\\n  clickUrl: \\\"\\\",\\n  referrer: \\\"https%3A%2F%2Fwww.elgrafico.mx\\\",\\n  cipid: \\\"66361655\\\",\\n  cmDast: \\\"V8GNcCLAYo8olD6-E3hRBQ5BOH1sNvCikAAABgYIDgAEmtTAvXxLFYa1aDjVu0W7jWCsdktpYMF5uRcbCYWRyWISCplWnhmjgWa81qsHGLdgvXWuGYzNaS4WIzMg4WM4vDMgUWzTQZFJTT02N2GURF19tidzjNnjdQQ9Pp8Lnu9brf764y-ywPm9Pjt6uNf5Xn8PKYHh7X2e_5S1xm51v5lrhMf7fa9bKcXm6N3-yw-C0Pk9_ycCvMbpHD8ha7rm_N6y1xWVxuzcutsntcL7vp8nBLnC67HQAAAAA8-P___4cAAAAAEAEAAABAAgAAAACFgAr_FgQuAAAAAGD4____1wCAzCFBHJaPy-y3O_wBAAAAAAQAAAAACYCBhPUSACrF0yf-_________2MM0GfeyPj___-_YdAD4MEHwIMQAACArCGAeLCX7Gaac0QKpIswAgAAADA5JbhxZJJOULGo8v__328F4AoAQEAj3ndgRxbdQYm3MAAAAAJjFuhh8fvNDrvG73aZ_________38z_2f-0QiVFH6kAVoo_FDzCwgAsOYXEACAjboBAHgTACfoELRiMFgdAhrtRrMDAAAAcOf___9fD8j4RobZZDPcODzDycI2sm1cJtNwZVosbMaVx-LaHuHGZ4YEehutPhbNNBkUlNPTY3YZREXX22J3OM2e-6FoyXK33K1Gk8VotFxudsPNaLA_ArQaoIkYLJeTyWKyW41Wo81wN5oNFijgJoiiJavlcrnabFar3WgxG2yWw80GUbRqNRttBsPVbDLb7VbDwXA5GiGKlix3y91qNFmMRsvlZjfcjAZDBDPG0cTmci7XmtHIsBZtbJu1xGNcrUXL0cYwcywnzplvLXp9TB-Lw7RY2LZIMEBuL5KnRTpRzGwmm2M53NgctoXNuBgslhOLybIwDWeOlW23nIglmpNFOpFd9h3fyDCbbIYbh2c4WdhGto3LZBquTIuFzbjyWFz7jnE0sbmcy7VmNDKsRRvbZi3xGFdr0XK0Mcwcy4lz5luLXh_Tx-IwLRa2fWM32C0my-FytG_sBrvFZLmcLPcdOsN39TkbRbeUwaNyVm_hxNjmNChcBov3qF6dZ0djwW_2HZ0yr1da1Bn9fr_f7_f7_X6_36D1HMwGhW-1-YlvmanD-E2dDGKDQRFLBBfpRGV23Z22l-XzMLtVZp_lYXN6_BaxRGm6SCd6lefw8pgeHtfZ7_lLXGbnW_mWuEx_t9r1spxebo3f7LD4LQ-T3_JwK8xukcPyFruub83rLXFZXG7Ny62ye1wvu-nycEucLrtFLBGcLtKJ6GU8XdR_1BCj3Vy4mSs2g7lkt0oAAAAAAAAAAJZgmukmAAAAAE4GsVwuRrt1OpDhYLNYrZYLACLmQNePeK9Pybo_xK6Jt6X3LkkdgmKNPVZRZtfdaXtZPg-zW2X2WR42p8dvZQAQK-rMNvuMINZqtawBAAAIYAMAABjgphtvAUJx_____-MAAAAEyKEHAABAsA_ICmj0WqEnjl9BrBabzf4BqBBrtVrdbqzVagUsiMVktZzA____f4IAAAAAAAA7HQ!\\\",\\n  tagId: \\\"e22lLINE_ITEM_ID_WILL_BE_HERE_ON_SERVINGc\\\",\\n  creativeId: \\\"-1\\\",\\n  baseReportD: \\\"taboola.com\\\",\\n  redId: \\\"5e4a5b11-350c-47a5-a126-2813d801fba2\\\",\\n  dtagid: \\\"2803155\\\",\\n  dpubid: \\\"199147\\\",\\n  vertical: \\\"source\\\",\\n  placement: \\\"Mid Article Thumbnails\\\",\\n  lineItemId: \\\"-1\\\",\\n  oppsDataCenter: \\\"am\\\",\\n  taboolaNetworkId: \\\"1059818\\\"\\n});\"}]}","position":"item","shouldGetVideoWaterfall":"false"}}],"lzr":{"Mid Article Thumbnails":{"enable":"true","rootMargin":"2500px","minCards":"3","fullLazyBatch":"true","maxBatch":"1"}},"dcga":{"pubConfigOverride":{"border-color":"black","font-weight":"bold","inherit-title-color":"true","module-name":"cta-lazy-module","enable-call-to-action-creative-component":"true","disable-cta-on-custom-module":"true","global":{"image-cropping-with-c-fill":"0"}}},"voil":"1","jst":["https://cdn.taboola.com/scripts/cds-pips.js"]}}