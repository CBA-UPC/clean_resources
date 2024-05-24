(function(p){var u=window.AmazonUIPageJS||window.P,w=u._namespace||u.attributeErrors,h=w?w("QTipsWebLibrary",""):u;h.guardFatal?h.guardFatal(p)(h,window):h.execute(function(){p(h,window)})})(function(p,u,w){(();(();(();(function(){p.register("QTipsStyles",function(){return"#qtips{position:absolute;overflow:initial}.qtips-background{position:fixed;z-index:90000;padding:10px;opacity:1;border-radius:3px;-webkit-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-o-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-background:after{position:absolute;display:block;width:0;content:'';border-style:solid;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-arrow-topleft:after,.qtips-arrow-topmiddle:after,.qtips-arrow-topright:after{top:-8px;border-width:0 8px 9px}.qtips-arrow-bottomleft:after,.qtips-arrow-topleft:after{left:14px}.qtips-arrow-bottomright:after,.qtips-arrow-topright:after{right:14px}.qtips-arrow-bottomleft:after,.qtips-arrow-bottommiddle:after,.qtips-arrow-bottomright:after{bottom:-8px;border-width:9px 8px 0;-webkit-box-shadow:0 0 0 -2px rgba(17,17,17,.25);-moz-box-shadow:0 0 0 -2px rgba(17,17,17,.25);box-shadow:0 0 0 -2px rgba(17,17,17,.25);-o-box-shadow:0 0 0 -2px rgba(17,17,17,.25)}.qtips-arrow-left:after{left:-12px; border-width:0 8px 9px;transform:rotate(270deg)}.qtips-arrow-right:after{border-width:0 8px 9px;transform:rotate(90deg)}.qtips-textholder{width:100%;height:100%}.slate-image-video-loader {background: #ffffff;border-radius: 50%;position: absolute;opacity: 0.7;}.slate-image-play-button {margin: auto;position: absolute;border-style: solid;border-color: transparent transparent transparent #ada6a6;} .sa-highlighter-background { z-index: 90000; padding: 10px; width: 10px; height: 10px; background-color: transparent; border-radius: 50%; position: absolute; animation: ring 1.5s linear infinite; }.sa-highlighter-topleft, .sa-highlighter-topmiddle, .sa-highlighter-topright { top: -50px; }.sa-highlighter-topleft, .sa-highlighter-bottomleft { left: 8px; }.sa-highlighter-bottomright, .sa-highlighter-topright { right: 8px; }.sa-highlighter-bottomleft, .sa-highlighter-bottommiddle, .sa-highlighter-bottomright { bottom: -50px; } @keyframes ring { from {opacity: 1;} to {opacity: 0; transform: scale(3);}}"})})();
(();(();
(function(){p.when("A","jQuery","QTipsMetrics","QTipsConstants","QTips","SAEndPointsConfig","NestedShoppingAidHelper","ShoppingAidsGenericUtils","LogImpressionManager","SAFeature","SparkleConfig","SAMetricConstants","ShoppingAidsFilters","ContextAwareSubstitutor","ShoppingAidsSparklesStyles","SparkleConstants").register("ShoppingAidsSparkles",function(h,b,a,e,f,d,c,m,k,g,t,q,r,x,l,n){var E=d.logImpressionEndPoint,P=!1,p=0,C=0,I=0,D=0,z=u.innerHeight,L=w,A=w,Y=w,v={logImpression:logInteraction:logCounter:nestedJsonParser:detectUserScroll:_contextAwareModelTransformer:executeContextAwareSubstitution:injectStyleToDom:,ba={create:,aa={create:function(c,d){function g(){!1===W&&(M.parentNode.removeChild(M),K.parentNode.removeChild(K),W=!0)}function f(){!1===V&&(H.parentNode.removeChild(H),M.parentNode.removeChild(M),V=!0)}n B(e,l){C({signal:"statechange",state:e})&&(document.body.appendChild(F),setTimeout(function(){F.classList.add("sparkle-open");
d.getMetricsIntersectionObserver();var e=u.scrollY;"Android"===A&&l?(b(u).bind("scroll",h.throttle(v.detectUserScroll,100)),20>=e&&(document.getElementsByClassName("sparkle-container")[0].style.bottom=t.andoridBottomPadding_SubnavPresent)):"iPhone"===A&&Y&&(document.getElementsByClassName("sparkle-container")[0].style.bottom=Y+"px");a.incrementCounter(q.SPARKLE_BOTTOM_PADDING_PREFIX+L+"_"+A+"_bottomNav_"+!!Y+"_Subnav"+l);P=!0;c.getAuiEventCallback()&&(e=c.getAuiEventCallback(),m.detachTrigger(e.event,
e.callback));I=Date.now();D=u.scrollY;d.sparkleShown(c,C);if(c.getSparkleType()!==n.sparkleTypes.static||c.getSparkleType()===n.sparkleTypes.static&&(!c.getTypeOfStaticSparkle()||"1"===c.getTypeOfStaticSparkle().toString()||"2"===c.getTypeOfStaticSparkle().toString()||"3"===c.getTypeOfStaticSparkle().toString()||"4"===c.getTypeOfStaticSparkle().toString())){e=document.getElementsByClassName("sparkle-container")[0];var g=e.getElementsByClassName("sparkle-content")[0].getElementsByClassName("sparkle-description-container")[0].getElementsByClassName("sparkle-description")[0];
c.getBackGroundColor()!==w&&(e.style.background=c.getBackGroundColor());c.getBorderColor()!==w&&(e.style.borderColor=c.getBorderColor());c.getBorderStyle()!==w&&(e.style.borderStyle=c.getBorderStyle());c.getDescriptionColor()!==w&&(g.style.color=c.getDescriptionColor())}},n.timer.animationDelay))}var y=!1,z=!1;c.getSparkleType()!==n.sparkleTypes.static||!c.getTypeOfStaticSparkle()||"5"!==c.getTypeOfStaticSparkle().toString()&&"6"!==c.getTypeOfStaticSparkle().toString()&&"7"!==c.getTypeOfStaticSparkle().toString()&&
"8"!==c.getTypeOfStaticSparkle().toString()||z?y||(z=!1,y=!0,"rtl"===document.dir?v.injectStyleToDom(l.defaultStyleRTLCSS):v.injectStyleToDom(l.defaultStyleCSS)):(z=!0,y=!1,"rtl"===document.dir?v.injectStyleToDom(l.newStyleRTLCSS):v.injectStyleToDom(l.newStyleCSS));var F=document.createElement("div");F.classList.add("sparkle-container");F.setAttribute(e.view.saDOMNameAttribute,c.getIdentifier());var R=document.createElement("div");R.classList.add("sparkle-content");var T=document.createElement("div");
T.classList.add("sparkle-image-container");y=document.createElement("img");y.classList.add("sparkle-image-loader");y.src=n.spinnerUrl;var G=document.createElement("img");G.classList.add("sparkle-image");G.alt=n.defaultAltText;T.appendChild(y);T.appendChild(G);var M=document.createElement("div");M.classList.add("sparkle-linkText-container");var J=document.createElement("a");J.classList.add("sparkle-linkText");J.href="#";M.appendChild(J);var K=document.createElement("div");K.classList.add("sparkle-text-container");
var S=document.createElement("a");S.classList.add("sparkle-text");S.href="#";K.appendChild(S);y=document.createElement("div");y.classList.add("sparkle-description-container");var N=document.createElement("a");N.classList.add("sparkle-description");N.innerText=" ";y.appendChild(N);var H=document.createElement("div");H.classList.add("sparkle-text-container");var O=document.createElement("p");O.classList.add("sparkle-text");O.innerText=" ";H.appendChild(O);R.appendChild(T);R.appendChild(K);R.appendChild(H);
R.appendChild(y);y=document.createElement("div");y.classList.add("sparkle-close");y.innerHTML="✕";F.appendChild(R);F.appendChild(M);F.appendChild(y);var V=!1,W=!1,X=!1,U=!1,Z;M.addEventListener("click",function(a){a.preventDefault();E(!0);d.sparkleClicked(c,Z)});K.addEventListener("click});y.addEventListener("click});return{display:function(a){if("Android"===A){var c=t.shouldAddPaddingForPage(L);B(a,c)}else B(a)},
isSparkleDisplayin}}},removeSparkleFromVie}};d={models:{},dismissWithI},ini},invokeOnDemandSparkl},createModel},getNextEligibl},rende},sparkleShow},sparkleClicke},sparkleClose},sparkleComplet},getMetricsIntersectionObserve},_isSparkleAT},_scrollDepthMetricLogge}};return{init:d.init.bind(d),invokeOnDemandSparkle:d.invokeOnDemandSparkle.bind(d),dismissWithId:d.dismissWithId.bind(d)}})})()})()})()})()})()})()})();})()})()})();})()})()})()})()})()})();})()})()})()})();})()})()})();(function(){p.when("A").register("SAFeature",function(h){return{clientSideCaching:!0,backoff:!1,featureAttribution:!0,saAnchorGroupFeatureFlag:!0}})})()})()})()})();})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})();(function(){p.register("SparkleConfig",function(){return{pagesWithSubnav:{gateway:1,detailpage:1,search:1,browse:0,deals:0,event:0,yourorder:0,
cart:1,foundIt:0,thankYou:0},shouldAddPaddingForPag},elementPresentOnPage:"ElementPresentOnPage",elementNotPresentOnPage:"ElementNotPresentOnPage",elementIdInvalid:"ElementIdInvalid",subnavElementId:"glow_sub_nav_bar_view",andoridBottomPadding_SubnavPresent:"46px"}})})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()})()});
/* ******** */
(function(b){var h=window.AmazonUIPageJS||window.P,k=h._namespace||h.attributeErrors,g=k?k("SABottomSheetLibrary",""):h;g.guardFatal?g.guardFatal(b)(g,window):g.execute(function(){b(g,window)})}});
/* ******** */
(function(a){var c=window.AmazonUIPageJS||window.P,d=c._namespace||c.attributeErrors,b=d?d("SAPartnerAssets",""):c;b.guardFatal?b.guardFatal(a)(b,window):b.execute(function(){a(b,window)})}});
/* ******** */})(function(n,t,h){(function(){n.when("A","StatefulSAEligiblityHelper","MultiPageSAOrchestrator","SA_BottomSheet","SA_MemoryManager","QTips","QTipsMetrics","QTipsConstants","ShoppingAidsSparkles","ShoppingAidsFilters","SAFeature","SAEndPointsConfig","ShoppingAidsFetcher","LogImpressionManager","ShoppingAidsGenericUtils",
"SAHotspot","SAAudiospot","SAHighlighter","PageResolver","LocalStorageInterface","LoPResolver","SAPAttributionHandler","AnchorBasedSAUtils").register("QTipsHandler",function(h,e,a,f,b,c,q,C,r,g,l,u,y,v,p,d,w,A,x,D,z,B,E){return{page:"",storageKey:"identifier",schedulingKey:"schedulingType",shoppingAidsType:"shoppingAidsType",contextAwareIndex:"contextAwareIndex",sourceName:"ShoppingAidsMWeb_",platform:p.platformCheck(),SupportedMarketplace:p.isSupportedMarketplace(),init:function(){var b=this;if("Unsupported"===
b.platform||!b.SupportedMarketplace)return q.incrementCounter(this.sourceName+"assetsNotSupported"),0;if("Desktop"===b.platform){if(!p.isDesktopPageRequestSupported())return q.incrementCounter("Desktop_IneligibleRequest_AssetsNotSupported"),0;q.incrementCounter("Desktop_EligibleRequest_AssetsLoaded")}else q.incrementCounter(this.sourceName+"assetsLoaded");if(!D.isLocalStorageExposed())return 0;c.utils.cleanUpCachingInstrumentation();c.utils.savePreviousLoP();c.utils.saveCurrentLoP();if(this.page=
x.pageAdapter()){l.featureAttribution&&B.featureAttributionBootUp(this.page);var };l.clientSideCaching?y.fetchShoppingAids(b.page,d):(y.cleanUpSACache(),b.fetch(b.page,d))}else q.incrementCounter(this.sourceName+"pageTypeMismatch")},_getParameterByNam},fetc},displayOnDemandToolTip:function(a){c.collection.add(a);c.view.setDismissalCallback(this.logImpression.bind(this));c.view.setTerminationCallback(this.terminateQTip.bind(this));c.view.setPageType(this.page);c.utils.isDefined(c.view.setCountLogger)&&c.view.setCountLogger(this.logCounter.bind(this));c.view.dismissAndRender()},_displa},_displayAudiospot},_displayHotspots:function(a){d.collection.create(a);d.view.setRenderCompleteCallback(this.logImpression.bind(this));d.view.postHotspotRender()},_displayHighlighter},logCounte},logImpression:function(a){var b=a[this.storageKey],g=this.sourceName+b+"_"+this.page,d=this.sourceName+"logSA_",c=a[this.schedulingKey],k=a[this.contextAwareIndex],e=a.userEvent,f=a[this.shoppingAidsType]||"tool_tip",z=E.getAidAnchorElement(a,f);if(null!==a.onDemand&&a.onDemand){var m=a.successResponse;f="tool_tip:childSA";m&&"function"===typeof m&&
m()}if(l.clientSideCaching&&l.featureAttribution&&"tool_tip"===f)k=v.buildOptionalParameter().withContextAwareIndex(k).withUserEvent(e).withShoppingAidsAnchorGroup(z).withSuccessCallback(B.enableFeatureAttribution.bind(B,a)).build(),v.handle(b,c,f,this.page,k);else if(l.clientSideCaching)k=v.buildOptionalParameter().withContextAwareIndex(k).withUserEvent(e).withShoppingAidsAnchorGroup(z).build(),v.handle(b,c,f,this.page,k);else{a=u.logImpressionEndPoint;b={pageType:this.page,shoppingAidsType:f,id:b,
schedulingType:c};p.isDefined(k)&&(b.contextAwareIndex=k);if(p.isDefined(e))switch(b.userEvent=e,e){case C.userEvent.optOut:g+="_optOut";break;case C.userEvent.complete:g+="_complete"}h.ajax(a,{method:"GET",contentType:"application/json; charset\x3dutf-8",timeout:6E4,params:b,succes},erro}})}},terminateQTi},fireRead}}});n.when("QTipsHandler","ready").execut})})()})()})()})()})()})()})()})()})()});
/* ******** */