(function(f,r){var g=r.BridIframeBurst?f.top:f,n=g.document,d=Brid.Util,m=Brid.event,t=d.createElement,p=(Brid.Player||Brid.OSPlayer).positionType;f.$bp.SlideInView=Brid.Abstract.extend({scrolledOver:!1,inTransition:!1,transitionSpeed:50,transitionTimeout:Brid.Util.isiOSSafari()?250:50,movedFromBanner:!1,closeButtonStyles:{image:"",width:20,height:20},defaultCss:'.brid-slideinview-timer{color:#fff;text-shadow:1px 1px 4px #000}.brid-slideinview-timer{width:20px;font-family:Helvetica,Arial;line-height:20px!important;height:20px;position:fixed;text-align:center;font-size:16px!important}.brid-close-swipe{height:20px;position:absolute;top:-20px;right:40px;color:white;font-size:11px !important; text-shadow: 0 0 5px rgba(0,0,0,0.8);}.brid-swipe-animation{line-height:20px;font-size:11px;opacity:0.5;animation-duration:1s;animation-iteration-count:infinite;} @keyframes brid-anim-first {0% {opacity: 0.5; } 33% {opacity: 1;} } @keyframes brid-anim-sec {34% {opacity: 0.5;} 67% {opacity: 1; } } @keyframes brid-anim-third { 67% {opacity: 0.5;} 100% {opacity: 1;} } .brid-swipe-animation:nth-of-type(1) { animation-name: brid-anim-third;}.brid-swipe-animation:nth-of-type(2) {animation-name: brid-anim-sec;}.brid-swipe-animation:nth-of-type(3) {animation-name: brid-anim-first;}.brid-sticky.brid-avoid-banners{transition:transform 0.05s!important}.brid-slideinview-dummy{pointer-events:none;z-index:2000000}.brid-title-above .brid-sticky {overflow:initial!important;}.brid-title-above .brid-sticky .brid-poster-title {height:30px;margin-top:-30px;background:rgba(0,0,0,0.85);display:block!important;opacity:1!important;border-bottom:2px solid black;border-radius:4px 4px 0 0;}.brid-title-above .brid-sticky .brid-poster-title div{text-shadow:none;line-height:30px;top:0;margin:0;right:30px;padding:0!important}.brid-title-above.brid-onad .brid-sticky .brid-poster-title div{color:transparent;}.brid-title-above.brid-onad .brid-sticky .brid-poster-title div:before{content:"--AD--";color:white;}.brid-fs .brid-sticky{width:100%!important;height:100%!important;margin:0!important;inset:initial!important;padding:0!important;}',
init:function u(a,c){Brid.log("$bp.SlideInView init");a.config.inCms||!a.config.inview||"inslide"===a.config.type||a.config.slide_inview_session&&d.getSessionStorage("sticky_closed")||(u.base.call(this,a,c),a.closed=!1,a.addOnce("ready",this.$f(this._onPlayerReady)),a.add(["play","fullscreenchange","adImpression"],this.$f(this._onScroll)),a.add("anyadFinished",this.$f(this.onAnyadFinished)),a.add("playerresize",this.$f(this.repositionCloseButton)),a.config.sticky_title_above?(a.config.unsticky_btn=
"top-right",a.addClass("brid-title-above")):"top-right-inside"==a.config.unsticky_btn?a.addClass("brid-unsticky-inside-right"):"top-left-inside"==a.config.unsticky_btn&&a.addClass("brid-unsticky-inside-left"),d.isMobilePlatform()&&!d.isTabletPlatform()&&(void 0!=a.config.inview.position_mobile&&(a.config.inview.position=a.config.inview.position_mobile),void 0!=a.config.inview.width_mobile&&(a.config.inview.width=a.config.inview.width_mobile),void 0!=a.config.inview.height_mobile&&(a.config.inview.height=
a.config.inview.height_mobile),void 0!=a.config.inviewTopOffset_mobile?a.config.inviewTopOffset=a.config.inviewTopOffset_mobile:delete a.config.inviewTopOffset,void 0!=a.config.inviewBottomOffset_mobile?a.config.inviewBottomOffset=a.config.inviewBottomOffset_mobile:delete a.config.inviewBottomOffset,void 0!=a.config.inviewLeftOffset_mobile?a.config.inviewLeftOffset=a.config.inviewLeftOffset_mobile:delete a.config.inviewLeftOffset,void 0!=a.config.inviewRightOffset_mobile?a.config.inviewRightOffset=
a.config.inviewRightOffset_mobile:delete a.config.inviewRightOffset),this.defaultCss=this.defaultCss.replace("--AD--",a.config.sticky_title_above_text||(a.config.translate&&a.config.translate.ad?a.config.translate.ad:"Advertisement")),d.createCSS(this.defaultCss,"bridslideinviewclose",a),this.slideInViewPos=a.config.inview.position||0,this.marginPos=3>this.slideInViewPos&&0<this.slideInViewPos?"margin-left":"margin-right",this.isInDefault=!0,a.config.close_button_styles&&(this.closeButtonStyles=d.merge(this.closeButtonStyles,
a.config.close_button_styles)))},destroy:function a(){Brid.log("SlideInView destroy");m.remove(f,"orientationchange",this.$f(this.orientationChange));m.remove(g,"resize",d.throttle(this.$f(this.orientationChange),250,this));m.remove(g,"scroll",this.$f(this._onScroll));this.close&&(this.close.destroy(),this.close=null);this.stickyDummy&&this.stickyDummy.parentNode.removeChild(this.stickyDummy);clearInterval(this.delayedBannerCheckTimeout);a.base.call(this)},_onPlayerReady:function(){m.add(g,"scroll",
this.$f(this._onScroll));this._onScroll()},_onScroll:function(a){if(!(this.manualForced&&!this.player.config.staySticky||this.inTransition||this.player.isFullScreen)){var c=this.player,b=g.pageYOffset||n.body.scrollTop,b=Brid.findPosY(c.el)-b;this.previouslyPaused=c.pausedOnInteraction;this.userScrolled||(this.scrollYs=this.scrollYs||[],-1==this.scrollYs.indexOf(g.scrollY)&&this.scrollYs.push(g.scrollY),1<this.scrollYs.length&&(this.userScrolled=!0,delete this.scrollYs));if(!c.config.stickyWaitsScroll||
this.userScrolled)if(!c.config.staySticky||c.positionType!==p.IN_GLIDE)if(c.isPlayerInView()&&(this.scrolledOver=!0),c.config.autoplayInview&&!c.config.autoplayStickyAdOnly||!a||"play"!==a.type||(this.scrolledOver=!0),!c.config.autoplayStickyAdOnly||c.getAdInProgress()&&!c.waitingForAd||c.positionType!==p.NORMAL)if(this.player.config.avoidBanners&&0<this.bannersGotOnHeight&&this.findBannersOnPage(),Brid.log("SlideInView positionType",c.positionType,"isInView",c.isPlayerInView(),"playing",c.isPlaying,
"adInProgress",c.getAdInProgress(),"scrolledOver",this.scrolledOver,"blurred",c.windowBlurred),c.positionType===p.NORMAL&&!c.isPlayerInView()&&(c.isPlaying||c.waitingForAd||c.getAdInProgress())&&!c.closed&&this.scrolledOver){if(!(c.config.autoplay&&c.config.autoplay_on_ad&&c.waitingForAd||c.config.autoplayStickyAdOnly&&c.waitingForAd||c.isPipActive||"below"==c.config.stickyDirection&&0<b||"above"==c.config.stickyDirection&&b+c.el.offsetHeight<g.innerHeight)){if(Brid.globals.contentExchange.stickyManuallyClosed)return this.manualForced=
!0,m.remove(g,"scroll",this.$f(this._onScroll)),Brid.log("SlideInView : Brid.globals.contentExchange.stickyManuallyClosed was set to true. Some other player on the page was manually closed.",c);a=f.$bp.SlideInView.bridslideinview.players;if(1<=a.top.length+a.bottom.length)return Brid.log("SlideInView : Some other player on the page is in sticky mode! So this one should not be sticky",c);this.show(2>this.slideInViewPos?"bottom":"top",3>this.slideInViewPos&&0<this.slideInViewPos?"left":"right")}}else if(c.positionType===
p.IN_GLIDE&&!c.windowBlurred){if(this.banners&&0<this.banners.length)if(this.movedFromBanner){a=!0;for(b=0;b<this.banners.length;b++)this.checkSameHeight(this.player.playerHolder.el,this.banners[b])&&(a=!1);a&&this.moveFromBannerBack()}else for(b=0;b<this.banners.length;b++)this.checkOverlap(this.player.playerHolder.el,this.banners[b])&&(this.stickyDummy?this._toDefault():this.moveFromBanner(this.calculateMoveOffset(this.player.playerHolder.el,this.banners[b])));c.isPlayerInView(null,c.el)&&this._toDefault()}}},
_toDefault:function(){if(!this.inTransition&&this.player.positionType!==p.NORMAL){var a=this.player;a.trigger("stickyChange",{sticky:!1,interaction:a.closed});a.remove(["adEnd","adError"],this.$f(this.showCloseButton));a.remove("adStart",this.$f(this.addCloseButtonEvents));this.closeButtonInterval&&(clearInterval(this.closeButtonInterval),this.closeButtonInterval=null);this.close&&this.close.el.parentNode&&(this.close.el.parentNode.removeChild(this.close.el),this.close.destroy(),this.close=null);
this.closeTimer&&this.closeTimer.parentNode&&this.closeTimer.parentNode.removeChild(this.closeTimer);this.player.close&&this.player.close.show();Brid.findPosX(a.el);Brid.findPosY(a.el);var c=f.$bp.SlideInView.bridslideinview.players[this.position],b=c.indexOf(a);c.splice(b,1);this.inTransition=!0;c={};c[this.marginPos]="-400px";a.playerHolder.el.style.transition="margin "+this.transitionSpeed+"ms ease-in-out";d.transitionHelper(a.playerHolder.el,c,this.$f(function(){m.remove(f,"orientationchange",
this.$f(this.orientationChange));m.remove(g,"resize",d.throttle(this.$f(this.orientationChange),250,this));a.playerHolder.el.style.opacity=0;a.playerHolder.el.style.top="";a.playerHolder.el.style.left="";a.playerHolder.el.style.right="";a.playerHolder.el.style.bottom="";a.playerHolder.el.style.position="";a.playerHolder.el.style.zIndex="0";a.playerHolder.el.style.marginLeft="";a.playerHolder.el.style.marginRight="";a.playerHolder.el.style.width="";a.playerHolder.el.style.height="";a.playerHolder.el.style.overflow=
"";"Brid.Player"==this.player.name?a.playerHolder.el.style.paddingBottom=parseFloat(a.el.clientWidth)/parseFloat(a.el.clientHeight)*100+"%":d.css(a.playerHolder.el,{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%","will-change":"auto"});this.placeholderPoster&&a.el&&this.placeholderPoster.parentNode==a.el&&a.el.removeChild(this.placeholderPoster);a.bannerMode&&a.anyAdMode&&(a.Advertising.currentAdsManager.anyad.style.top="",a.Advertising.currentAdsManager.anyad.style.left="",a.Advertising.currentAdsManager.anyad.style.right=
"",a.Advertising.currentAdsManager.anyad.style.bottom="",a.Advertising.currentAdsManager.anyad.style.position="",a.Advertising.currentAdsManager.anyad.style.zIndex="0",a.Advertising.currentAdsManager.anyad.style.marginLeft="",a.Advertising.currentAdsManager.anyad.style.marginRight="");a.positionType=p.NORMAL;a.bannerMode&&a.anyAdMode||a.resize();a.config.sticky_title_above_text&&a.titleBar&&(a.titleBar.div.innerHTML=a.currentSource.title||a.currentSource.name||"");a.playerHolder.el.style.clipPath=
"";a.playerHolder.removeClass("brid-sticky");this.moveFromBannerBack();a.playerHolder.el.style.transition="opacity "+this.transitionSpeed+"ms ease-in-out";d.transitionHelper(a.playerHolder.el,{opacity:1},this.$f(function(){this.isInDefault=!0;this.inTransition=!1;if(this.hiddenTimers)for(var b=0;b<this.hiddenTimers.length;b++)"0"!=this.hiddenTimers[b].innerHTML&&(this.hiddenTimers[b].style.display="");this.repositionStack();this._onScroll();a.onScroll();d.isIOS()&&-1<a.tag.src.indexOf(".mp4")&&(setTimeout(function(){a.tag.style.width=
a.el.clientWidth-1+"px"},0),setTimeout(500))}),this.transitionTimeout)}),this.transitionTimeout)}},repositionStack:function(){f.$bp.SlideInView.bridslideinview.players[this.position].map(this.$f(function(a,c){a.SlideInView&&a.SlideInView.repositionInStack(this.position,c)}))},repositionInStack:function(a,c){this.inTransition||this.length==c||(this.length=c,Brid.log("SlideInView repositionInStack",this.player.el.id,"index",c),c=this.calculateSizesAndPositions(),
this.player.playerHolder.el.style.top="top"===a?c.newTop+"px":"auto",this.player.playerHolder.el.style.bottom="bottom"===a?c.newTop+"px":"auto",this.repositionCloseButton())},showCloseButton:function(){var a=parseInt(this.closeButtonTime/1E3);if(this.isInDefault)return!1;0==a?(Brid.log("SlideInView not timer",a),this.player.el&&this.player.el.parentNode&&this.player.el.parentNode.insertBefore(this.close.el,this.player.el.nextSibling)):this.closeButtonInterval||(this.closeButtonInterval=setInterval(this.$f(function(){Brid.log("SlideInView showCloseButton",
this.player.close,this.closeButtonTime,a);this.closeTimer.innerHTML=a;this.closeTimer.style.display=this.player.config.disable_close_timer?"none":"block";a--; -1>=a&&(this.closeTimer&&this.closeTimer.parentNode&&this.closeTimer.parentNode.removeChild(this.closeTimer),clearInterval(this.closeButtonInterval),this.closeButtonInterval=null,this.player.el&&this.player.el.parentNode&&(this.closeButtonShown=!0,this.player.el.parentNode.insertBefore(this.close.el,this.player.el.nextSibling)))}),this.closeButtonTime?
1E3:0))},addCloseButtonEvents:function(){this.player.addOnce(["adEnd","adError"],this.$f(this.showCloseButton));this.close&&this.close.el.parentNode&&this.close.el.parentNode.removeChild(this.close.el)},calculateSizesAndPositions:function(){var a=this.player;Brid.findPosX(a.el);Brid.findPosY(a.el);var c=g.pageYOffset||n.body.scrollTop,b=a.config.inview.width,e=a.config.inview.height,l=Math.min(g.innerWidth,g.outerWidth),q=g.innerHeight,h=!1,k=null;"string"===typeof b&&-1!=b.indexOf("%")&&(b=l*parseFloat(b)/
100,isWIdthInPercentage=!0,h=a.el.clientWidth&&a.el.clientHeight?a.el.clientWidth/a.el.clientHeight:16/9);"string"===typeof e&&-1!=e.indexOf("%")&&(e=q*parseFloat(e)/100);d.isMobilePlatform()&&!d.isTabletPlatform()&&a.config&&g.matchMedia("(orientation: landscape)").matches&&a.config.mobile_width_inview_landscape&&"0"!=a.config.mobile_width_inview_landscape&&(k=l*parseFloat(a.config.mobile_width_inview_landscape)/100);d.isMobilePlatform()&&!d.isTabletPlatform()&&a.config&&g.matchMedia("(orientation: portrait)").matches&&
a.config.mobile_width_inview&&"0"!=a.config.mobile_width_inview&&(k=l*parseFloat(a.config.mobile_width_inview)/100);k&&k<b&&(e*=k/b,b=k);e=h?b/h:e;h=5+("top"===this.position?d.getFixedHeadHeight(a):0);"bottom"==this.position&&void 0!=a.config.inviewBottomOffset&&(h=d.convertToPixels(a.config.inviewBottomOffset,f.innerHeight));"top"==this.position&&void 0!=a.config.inviewTopOffset&&(h=d.convertToPixels(a.config.inviewTopOffset,f.innerHeight));h+=this.length*e;d.isFacebookApp()&&d.isIOS()&&(k=n.documentElement.clientHeight-
q,h="top"===this.position?70>g.pageYOffset?h+g.pageYOffset:h+k:h+k,this.lastScrollTop=c);"top"==this.position&&(c=-1!==(this.player.config.unsticky_btn||"top-right").indexOf("-inside"),a.config.sticky_title_above?h+=30:c||(h+=this.closeButtonStyles.height+5));b=a.bannerMode&&300>b?300:b;e=a.bannerMode&&250>e?250:e;d.isMobilePlatform()&&!d.isTabletPlatform()&&a.config.mobileWidthSticky&&a.config.mobileHeightSticky&&(b=d.convertToPixels(a.config.mobileWidthSticky,l),e=d.convertToPixels(a.config.mobileHeightSticky,
q),Brid.log("SlideInView forcing mobile size",b,e));return{width:b,height:e,newTop:h}},show:function(a,c){var b=this.player;this.position=a;if(!this.inTransition){if(this.stickyDummy&&this.banners&&0<this.banners.length)for(var e=0;e<this.banners.length;e++)if(this.checkOverlap(this.stickyDummy,this.banners[e]))return!1;b.config.staySticky&&(m.remove(g,"scroll",this.$f(this._onScroll)),this.manualForced=!0);-1===f.$bp.SlideInView.bridslideinview.players[a].indexOf(b)&&f.$bp.SlideInView.bridslideinview.players[a].push(b);
this.length=f.$bp.SlideInView.bridslideinview.players[a].length-1;this.length=0>this.length?0:this.length;var l=this.calculateSizesAndPositions();Brid.log("SlideInView show",this.position,c,"pageYOffset",g.pageYOffset,"positions",l);b.trigger("stickyChange",{sticky:!0,interaction:null});this.isInContent=/incontent|invideo/.test(b.config.type||"");this.closeButtonTime=1E3*parseInt(this.isInContent&&b.config.stayinview_seconds?b.config.stayinview_seconds:b.config.slide_inview_seconds);if("custom"!==
b.config.slide_inview_show&&!this.isInContent||this.closeButtonShown)this.closeButtonTime=0;this.close||(this.close=new Brid.Close(b,{name:"Close",styles:this.closeButtonStyles}),this.close.add("close",this.$f(function(){d.setSessionStorage("sticky_closed",!0,b.config);Brid.globals.contentExchange.stickyManuallyClosed=!0;b.closed=!0;this._toDefault()})),this.closeTimer=d.createElement("div",{className:"brid-slideinview-timer"}),0<this.closeButtonTime&&b.el.parentNode.insertBefore(this.closeTimer,
b.el.nextSibling));b.config.avoidBanners&&(this.bannersGotOnHeight=0,this.findBannersOnPage(),this.player.addClass("brid-avoid-banners"),b.config.avoidBannersToDefault&&!this.stickyDummy&&(this.stickyDummy=d.createElement("div",{className:"brid-slideinview-dummy"}),this.stickyDummy.style.position="fixed",this.stickyDummy.style.top="top"===a?l.newTop+"px":"auto",this.stickyDummy.style.bottom="bottom"===a?l.newTop+"px":"auto",this.stickyDummy.style.left="left"===c?d.convertToPixels(void 0!=b.config.inviewLeftOffset?
b.config.inviewLeftOffset:5,f.innerWidth)+"px":"auto",this.stickyDummy.style.right="left"===c?"auto":d.convertToPixels(void 0!=b.config.inviewRightOffset?b.config.inviewRightOffset:5,f.innerWidth)+"px",this.stickyDummy.style.width=l.width+"px",this.stickyDummy.style.height=l.height+"px",this.player.el.parentNode.insertBefore(this.stickyDummy,this.player.el.nextSibling)));this.isInDefault=!1;this.inTransition=!0;d.addClass(b.playerHolder.el,"brid-sticky");b.playerHolder.el.style.transition="opacity "+
this.transitionSpeed+"ms ease-in-out";d.transitionHelper(b.playerHolder.el,{opacity:0},this.$f(function(){var e="Brid.Player"==this.player.name?this.player.config.poster||this.player.currentSource.poster:this.player.config.placeholder?this.player.config.placeholder_img?this.player.config.placeholder_img:"DEFAULT":null;e&&(this.placeholderPoster="DEFAULT"==e?t("div",{innerHTML:"ADVERTISEMENT",className:"brid-unit-placeholder"}):t("img",{src:e,alt:b.currentSource.title||"",style:"width:100%; height: 100%; object-fit: cover;"}),
this.player.el.appendChild(this.placeholderPoster));b.playerHolder.el.style.paddingBottom="";b.playerHolder.el.style.position="fixed";b.playerHolder.el.style.top="top"===a?l.newTop+"px":"auto";b.playerHolder.el.style.bottom="bottom"===a?l.newTop+"px":"auto";b.playerHolder.el.style.width=l.width+"px";b.playerHolder.el.style.height=l.height+"px";b.playerHolder.el.style.zIndex="1000000";b.playerHolder.el.style.opacity=1;b.playerHolder.el.style.overflow="hidden";"left"===c?(b.playerHolder.el.style.marginLeft=
-(parseInt(l.width)+10)+"px",b.playerHolder.el.style.left=d.convertToPixels(void 0!=b.config.inviewLeftOffset?b.config.inviewLeftOffset:5,f.innerWidth)+"px",b.playerHolder.el.style.right="auto"):(b.playerHolder.el.style.marginRight=-(parseInt(l.width)+10)+"px",b.playerHolder.el.style.right=d.convertToPixels(void 0!=b.config.inviewRightOffset?b.config.inviewRightOffset:5,f.innerWidth)+"px",b.playerHolder.el.style.left="auto");b.bannerMode&&b.anyAdMode&&(b.Advertising.currentAdsManager.anyad.style.position=
"fixed",b.Advertising.currentAdsManager.anyad.style.top="top"===a?l.newTop+"px":"auto",b.Advertising.currentAdsManager.anyad.style.bottom="bottom"===a?l.newTop+"px":"auto",b.bannerMode&&b.anyAdMode||(b.Advertising.currentAdsManager.anyad.style.width=l.width+"px",b.Advertising.currentAdsManager.anyad.style.height=l.height+"px"),b.Advertising.currentAdsManager.anyad.style.zIndex="1000000",b.Advertising.currentAdsManager.anyad.style.opacity=1,"left"===c?(b.Advertising.currentAdsManager.anyad.style.marginLeft=
"0px",b.Advertising.currentAdsManager.anyad.style.left=d.convertToPixels(void 0!=b.config.inviewLeftOffset?b.config.inviewLeftOffset:5,f.innerWidth)+"px",b.Advertising.currentAdsManager.anyad.style.right="auto"):(b.Advertising.currentAdsManager.anyad.style.marginRight="0px",b.Advertising.currentAdsManager.anyad.style.right=d.convertToPixels(void 0!=b.config.inviewRightOffset?b.config.inviewRightOffset:5,f.innerWidth)+"px",b.Advertising.currentAdsManager.anyad.style.left="auto"));b.config.sticky_border_radius&&
"0"!==b.config.sticky_border_radius&&0!==b.config.sticky_border_radius&&(e=d.normalizeElementDimension(b.config.sticky_border_radius),b.playerHolder.el.style.clipPath=b.config.sticky_title_above?"inset(-30px 0 0 0 round "+e+")":"inset(0 0 0 0 round "+e+")");b.playerHolder.addClass("brid-sticky");if(!b.resizeObserver)b.onResize();var h=this.getCloseCss();b.playerHolder.el.style.transition="margin "+this.transitionSpeed+"ms ease-in-out";b.playerHolder.el.style.opacity=1;e={};e[this.marginPos]="0px";
d.transitionHelper(b.playerHolder.el,e,this.$f(function(){Brid.log("SlideInView animation complete techName",b.techName,"paused",b.paused(),"previouslyPaused",this.previouslyPaused);m.add(f,"orientationchange",this.$f(this.orientationChange));m.add(g,"resize",d.throttle(this.$f(this.orientationChange),250,this));this.isInDefault=this.inTransition=!1;b.positionType=p.IN_GLIDE;b.config.sticky_title_above_text&&b.titleBar&&(b.titleBar.div.innerHTML=b.config.sticky_title_above_text);this.close.css(h);
d.css(this.closeTimer,h);this.close.addClass("brid-close-banner");"ad_end"!==b.config.slide_inview_show?this.showCloseButton():b.showOnAd()||b.currentSource.monetize?(b.add("adStart",this.$f(this.addCloseButtonEvents)),b.getAdInProgress()?b.addOnce(["adEnd","adError"],this.$f(this.showCloseButton)):this.showCloseButton()):this.showCloseButton();this.repositionStack();this._onScroll()}),this.transitionTimeout);d.isIOS()&&"html5"==b.techName&&!this.previouslyPaused&&b.paused()&&b.play();b.close&&b.close.hide();
e=n.getElementsByClassName("brid-banner-ad-timer");this.hiddenTimers=[];for(var k=0;k<e.length;k++)"none"!=e[k].style.display&&(e[k].style.display="none",this.hiddenTimers.push(e[k]));Brid.log("SlideInView hiddenTimers",this.hiddenTimers)}),this.transitionTimeout)}},resizeAnyAd:function(){var a=this.player,c=2>this.slideInViewPos?"bottom":"top",b=3>this.slideInViewPos&&0<this.slideInViewPos?"left":"right",e=this.calculateSizesAndPositions();a.Advertising.currentAdsManager.anyad.style.position="fixed";
a.Advertising.currentAdsManager.anyad.style.top="top"===c?e.newTop+"px":"auto";a.Advertising.currentAdsManager.anyad.style.bottom="bottom"===c?e.newTop+"px":"auto";a.Advertising.currentAdsManager.anyad.style.width=e.width+"px";a.Advertising.currentAdsManager.anyad.style.height=e.height+"px";a.Advertising.currentAdsManager.anyad.style.zIndex="1000000";a.Advertising.currentAdsManager.anyad.style.opacity=1;"left"===b?(a.Advertising.currentAdsManager.anyad.style.marginLeft="0px",a.Advertising.currentAdsManager.anyad.style.left=
d.convertToPixels(void 0!=a.config.inviewLeftOffset?a.config.inviewLeftOffset:5,f.innerWidth)+"px",a.Advertising.currentAdsManager.anyad.style.right="auto"):(a.Advertising.currentAdsManager.anyad.style.marginRight="0px",a.Advertising.currentAdsManager.anyad.style.right=d.convertToPixels(void 0!=a.config.inviewRightOffset?a.config.inviewRightOffset:5,f.innerWidth)+"px",a.Advertising.currentAdsManager.anyad.style.left="auto")},forceShow:function(){this.manualForced=!0;this.show(2>this.slideInViewPos?
"bottom":"top",3>this.slideInViewPos&&0<this.slideInViewPos?"left":"right")},forceHide:getCloseCss:function(){var a=this.player.bannerMode&&this.player.anyAdMode?this.player.Advertising.currentAdsManager.anyad:this.player.playerHolder.el,c=this.player.config.unsticky_btn||"top-right",b=-1!==c.indexOf("-right"),e=-1!==c.indexOf("-left"),c=-1!==c.indexOf("-inside"),l=1<this.slideInViewPos,g=!this.isPositionedRight(),h=l?void 0!=this.player.config.inviewTopOffset?
d.convertToPixels(this.player.config.inviewTopOffset,f.innerHeight):d.getFixedHeadHeight(this.player)+5:void 0!=this.player.config.inviewBottomOffset?d.convertToPixels(this.player.config.inviewBottomOffset,f.innerHeight):5,h=l?h+this.length*a.offsetHeight:h+a.offsetHeight+5+this.length*a.offsetHeight,k=g?a.offsetWidth-this.closeButtonStyles.width+5:5;e&&(k=g?5:a.offsetWidth-(this.closeButtonStyles.width-5));c&&(h+=l?4:-30,e&&(k+=g?5:-4),b&&(k+=g?-2:3));this.player.config.sticky_title_above&&(k+=g?
-3:3,h+=l?5:0);void 0!=this.player.config.inviewLeftOffset&&g&&(k+=d.convertToPixels(this.player.config.inviewLeftOffset,f.innerWidth)-5);void 0==this.player.config.inviewRightOffset||g||(k+=d.convertToPixels(this.player.config.inviewRightOffset,f.innerWidth)-5);void 0!=this.player.config.closeButtonVerticalOffset&&(h+=d.convertToPixels(this.player.config.closeButtonVerticalOffset,f.innerWidth));void 0!=this.player.config.closeButtonHorizontalOffset&&(k+=d.convertToPixels(this.player.config.closeButtonHorizontalOffset,
f.innerWidth));switch(this.slideInViewPos){case "1":a={position:"fixed",bottom:h+"px",left:k+"px",top:"",right:""};break;case "2":a={position:"fixed",top:h+"px",left:k+"px",bottom:"",right:""};break;case "3":a={position:"fixed",top:h+"px",right:k+"px",bottom:"",left:""};break;default:a={position:"fixed",bottom:h+"px",right:k+"px",top:"",left:""}}c&&(a.transform="scale(0.9)");return a},repositionCloseButton:onAnyadFinished:function(){if("inglide"==
this.player.positionType&&this.player.currentSrc()){var a=this.calculateSizesAndPositions();this.player.el.style.width=a.width+"px";this.player.el.style.height=a.height+"px";this.repositionCloseButton()}},findBannersOnPage:function(a){var c=this.banners?this.banners.length:0;this.player.config.avoidBanners&&(n.body.scrollHeight>this.bannersGotOnHeight||a)&&(this.banners=n.querySelectorAll("div[id^='google_ads_iframe_'] iframe[id], ins[class*='adsbygoogle']"),this.bannersGotOnHeight=n.body.scrollHeight,
Brid.log("SlideInView banners",this.banners,a),c!=this.banners.length&&(Brid.log("SlideInView banners changed, call onScroll"),this._onScroll()),clearInterval(this.delayedBannerCheckTimeout),this.delayedBannerCheckTimeout=setInterval(this.$f(,3E3))},moveFromBanner:function(a){this.movedFromBanner=!0;var c=this.player.playerHolder.el.getBoundingClientRect(),c=(this.isPositionedRight()?Math.abs(a)-(n.documentElement.clientWidth-c.right):Math.abs(c.left+a))/c.width;
this.player.playerHolder.el.style.transform="translateX("+a+"px)";this.close&&(this.close.el.style.transform=this.player.playerHolder.el.style.transform);.5<c&&this.player.isVideoOrAdPlaying()&&(this.player.pause(),this.pausedOnBanner=!0)},moveFromBannerBack:function(){this.movedFromBanner&&(this.movedFromBanner=!1,this.player.playerHolder.el.style.transform="",this.close&&(this.close.el.style.transform=this.player.playerHolder.el.style.transform),this.pausedOnBanner&&(this.pausedOnBanner=!1,this.player.play()))},
checkSameHeight:function(a,c){a=a.getBoundingClientRect();c=c.getBoundingClientRect();return a.top<=c.bottom&&c.top<=a.bottom},checkOverlap:function(a,c){a=a.getBoundingClientRect();c=c.getBoundingClientRect();return a.left<=c.right&&c.left<=a.right&&a.top<=c.bottom&&c.top<=a.bottom},calculateMoveOffset:function(a,c){var b=a.getBoundingClientRect();c=c.getBoundingClientRect();if(this.isPositionedRight())return a=n.documentElement.clientWidth-b.right-parseInt(a.style.right),-(b.left-c.right-10+a);
a=b.left-parseInt(a.style.left);return-(b.right-c.left+10-a)},resizeTempHolder:orientationChange:function(){if(!(this.player.positionType==p.NORMAL||this.player.bannerMode&&this.player.anyAdMode)){var a=this.calculateSizesAndPositions();this.player.playerHolder.el.style.width=a.width+"px";this.player.playerHolder.el.style.height=a.height+"px";this.player.playerHolder.el.style.paddingBottom="";this.repositionCloseButton()}},isPositionedRight:function(){return 3>this.slideInViewPos&&0<
this.slideInViewPos?!1:!0}});f.$bp.SlideInView.bridslideinview=f.$bp.SlideInView.bridslideinview||{players:{top:[],bottom:[]}};f.$bp.plugin("bridslideinview",;m.trigger(r,"bridpluginloaded")})(window,document);
