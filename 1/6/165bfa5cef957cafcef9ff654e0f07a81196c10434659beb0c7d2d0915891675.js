// Avoid `console` errors in browsers that lack a console.
());

// Place any jQuery/helper plugins in here.

/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:;t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(,this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=d=c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;return 0===n?void i():void e.find('img:not([src=""]), iframe').each(},g=p=u=h=v=f=x=m=S=b=w=C=T=P=E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=M=function(t){o.startAuto(),t.preventDefault()},y=z=I=q=A=D=H=W=L=O=F=N=X=Y=V=R=Z=B=U=return o.goToSlide=o.goToNextSlide=o.goToPrevSlide=o.startAuto=o.stopAuto=o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=o.getSlideElement=o.getSlideCount=o.isWorking=o.redrawSlider=o.destroySlider=o.reloadSlider=l(),t(o).data("bxSlider",this),this}}}(jQuery);

(function($) {
    $.fn.swipe = function(params) {
        return this.each(function() {
            var opts = $.extend({
                onSwipe: function(){},
                afterSwipe: function(){},
                beforeSwipe: function(){},
                touchStartElement: document
            }, params);
        
            var $this = $(this);

            // if($this.data("swipe")) {
            //     return;
            // }

            $this.data("swipe", true);

            var result = {
                start: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                },
                dir: ''
            },
            trigger = null,
            direction;

            setEvents();

            function getEventName(name) { // получение кроссбраузерного имени события
                var eventName = "",
                    _this = this;
                        
                if(touchSupport()){
                    return name;
                } else if (msSupport()){
                    switch(name){
                        case "touchstart":
                            eventName = "PointerDown";
                            break;
                        
                        case "touchend":
                            eventName = "PointerUp";
                            break;
                        
                        case "touchmove":
                            eventName = "PointerMove";
                            break;
                        
                        case "touchcancel":
                            eventName = "PointerCancel";
                            break;
                    }
                    
                    if (window.navigator.msPointerEnabled) {
                        return "MS"+eventName;
                    } else if (window.PointerEvent){
                        return eventName.toLowerCase();
                    }
                } else {
                    switch(name){
                        case "touchstart":
                            eventName = "mousedown";
                            break;
                        
                        case "touchend":
                            eventName = "mouseup";
                            break;
                        
                        case "touchmove":
                            eventName = "mousemove";
                            break;
                        
                        case "touchcancel":
                            eventName = "mouseup";
                            break;
                    }
                    
                    return eventName;
                }
            };

           function getCoords(e){ //получение координат
                var coords = {};
                
                if(touchSupport()){
                    coords.x = e.touches[0].pageX;
                    coords.y = e.touches[0].pageY;
                } else {
                    coords.x = e.pageX;
                    coords.y = e.pageY;
                }
                
                return coords;
            };

            function touchSupport() { // проверка на поддержку touch
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            };

            function msSupport() { // проверка на поддержку touch от MS
                return !!(window.navigator.msPointerEnabled || window.PointerEvent);
            };

            function isFirstTouch(e){ // проверка на первое касание
                if(touchSupport()){
                    return !!(e.touches.length === 1);
                } else if(msSupport()){
                    return !!e.isPrimary;
                } else {
                    return true;
                }
            };

            function setEvents(t) { // назначить обработчики для событий
                document.addEventListener(getEventName("touchstart"), function(e){
                    onDown(e);
                }, false);
                
                document.addEventListener(getEventName("touchmove"), function(e){
                    onMove(e);
                }, false);
                
                document.addEventListener(getEventName("touchend"), function                
                document.addEventListener(getEventName("touchcancel"), function(e){
                    onUp(e);
                }, true);
            };

            function onDown(e) {
                if(trigger || !isFirstTouch(e)) {
                    return;
                }

                trigger = true;

                var coords = getCoords(e);

                result.start.x = coords.x;
                result.start.y = coords.y;

                opts.beforeSwipe(e, result);
            }

            function onMove(e) {
                if(trigger) {
                    var coords = getCoords(e);

                    result.offset.x = coords.x - result.start.x;
                    result.offset.y = coords.y - result.start.y;

                    if(!direction) {
                        direction = Math.abs(result.offset.x) < Math.abs(result.offset.y) ? 'vertical' : 'horizontal';
                        result.dir = direction;
                    }

                    opts.onSwipe(e, result);
                }
            }

            function onUp(e) {
                if(trigger) {
                    trigger = false;

                    opts.afterSwipe(e, result);

                    result.offset.x = 0;
                    result.offset.y = 0;
                    result.start.x  = 0;
                    result.start.y  = 0;
                    result.dir      = null;
                    direction       = null;
                }
            }
        });
    }
}(jQuery));

/**
 * Swiper 5.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transition,t){"object"==typeof exports&&={}),void 0===s&&(s={}),Object.keys(s).forEach((function(a){void 0===i[a]?i[a]=s[a]:e(s[a])&&e(i[a])&&Object.keys(s[a]).length>0&&t(i[a],s[a])}))}var i="undefined"!=typeof document?document:{},s={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:funct(){return nulltion(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};t(i,s);var a="undefined"!=typeof window?window:{};t(a,{document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",orocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:urn this},addEventListener:function(){},removeEventListener:function(){},getComputedn(){return{tion(){re)for(n=0;n<e.length;n+=1)s.push(e[n]);return new plit(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=is[s]&&void t(" "(var s=0;s<[s][a]){if(i.dota-"+e);ret{"senerom7proxyo,!0,!0),h.dets=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWid.offset||0,is[0]turn returis}eturn t[sdeType&[n].appestancentSibling).is(e)?new r([this[0].nextElementSibling]):new r([]):this[0].nextElementSibling?new r([this[0].nextElementSibling]):new r([]):new r([])},nextAll:function(e){var t=[],ntSiblinhis[0];<this.lets:funct&t.pu)),t)},fir(var st.push(this.length{var r=n(e[i]);for(s=0;s<ngth+=1}return a},sty=n.fn[e]|eys(e]=null}catchr.m41:16===i.l).length,=s[1]?vle&&(d.isObject(i[l])&&d.isObject(a[l])?d.extend(i[l],a[l]):!d.isObject(i[l])&&d.isObject(a[l])?(i[l]={},d.extend(i[l],a[l])):i[l]=a[l])}}return i}},h={touch:!!("ontouchstart"in a||a.DocumentTouch&&i instanceof a.DocumentTouch),pointerEvents:!!a.Pointe{var e=!1;try{var t=Object.definePr&&(e={});var t=this;t.params=e,t.eventsListeners;var a=i?"unshifttion a(){for(varntsListeners[e].lventsListeners&&r.eventsListeseModulesParams=functioe];t[e]="functionon&&Object.keys(unctio]=arguments[i+1];var s=this;return Array.isArrat"),10),t=t-pGridLengthChange"lides.eq(this.activ,updateSlidesOffset:flides.push(o),tess(e),r&&!o&&this.e"+i.slideClass+"."xChange"),(this.inithis.clickedIndex=n(ite,s=this.trathis.maxTrans(e-this.minTrranslate",thansitionend",n.onTransoWrapperTransitiTransitionStarideResetTransitiener("transiid 0===e&&lidesPerGrturn void 0this.slideTo(d,];o-d<=(this.snapGriswiper-slide-index=p].clonelideTo(e,0,!es;e.children("."+t.sle.cursor="move",e?"grabbing":"grab"}},unsetGrabCursor:function(){h e&&"length"igth;r+=1)i.append(o[cr=Math.max(r,0);+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},A=(w=a.navigator.platform,y=a.navigator.userAgent,x={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!a.cordova&&!a.phonegap),phonegap:!(!a.cordova&&!a.phonegap),electron:!1},E=a.screen.width,T=a.screen.height,S=y.match(/(Android);?[\s\/]+([\d.]+)?/),C=y.match(/(iPad).*OS\s([\d_]+)/),M=y.match(/(iPod)(.*OS\s([\d_]+))?/),P=!C&&y.match(/(iPhone\sOS|iOS)\s([\d_]+)/),z=y.indexOf("MSIE ")>=0||y.indexOf("Trident/")>=0,k=y.indexOf("Edge/")>=0,$=y.indexOf("Gecko/")>=0&&y.indexOf("Firefox/")>=0,L="Win32"===w,I=y.toLowerCase().indexOf("electron")>=0,D="MacIntel"===w,!C&&D&&h.touch&&(1024===E&&1366===T||834===E&&1194===T||834===E&&1112===T||768===E&&1024===T)&&(C=y.match(/(Version)\/([\d.]+)/),D=!1),x.ie=z,x.edge=k,x.firefox=$,S&&!L&&(x.os="android",x.osVersion=S[2],x.android=!0,x.androidChrome=y.toLowerCase().indexOf("chrome")>=0),(C||P||M)&&(x.os="ios",x.ios=!0),P&&!M&&(x.osVersion=P[2].replace(/_/g,"."),x.iphone=!0),C&&(x.osVersion=C[2].replace(/_/g,"."),x.ipad=!0),M&&(x.osVersion=M[3]?M[3].replace(/_/g,"."):null,x.ipod=!0),x.ios&&x.osVersion&&y.indexOf("Version/")>=0&&"10"===x.osVersion.split(".")[0]&&(x.osVersion=y.toLowerCase().split("version/")[1].split(" ")[0]),x.webView=!(!(P||C||M)||!y.match(/.*AppleWebKit(?!.*Safari)/i)&&!a.navigator.standalone)||a.matchMedia&&a.matchMedia("(display-mode: standalone)").matches,x.webview=x.webView,x.standalone=x.webView,x.desktop=!(x.ios||x.ante-te())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var Y=!1;function F(){}var W={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrappedateOnWindowRMode&&a.removeEventListener(Breakpoint=n,ueturn parseInt(e.value,10)-parLocked,t!==this.isLoc"android"),A.i.push(t.containerMon d(){o&&o()}nr s=e.imaction(){return q},i.defaults.get=function(){return W},i.Class.get=function(){return e},i.$.get=function(){return n},Object.defineProperties(t,i),t}(p),K={name:"device",prEdge/g),isSafari:function(){var e=a.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isWebView:/(iPhoneed&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:funcnction(){a.removeEventListener("resize",this.resize.resizeHands||t.ach(e[t]this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((fdren:!1},create:function(){d.extend(this,{observer:{init:J.init.bind(this),attach:J.attach.bind(thisort((functiide-index="'==typeof e&&"ex");i&&t.at.slides.splice(e)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}}Slide.bind(this"virtual");var e={watchSlidesProgress:!0};d.extend(this.params,e),d.extend(this.originalP:((o||lslidePred.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(n(i).off("k0}},create:function(){d.extend(this,{keyboard:{enabled:!1,enable:se.enable.bind(this),disable:se.disable.bind(this),handle:se.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destromplementat),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=80=a<1?-1imateSlider(y)ginning&&!thision<0){this.mour"!==this.paEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"add,thisNextClicis.params.nationRenrFillefault()fierClass+e.type),Timeout(this.s.opacity=0,:a,divider:r,moveDie.type||"touchmolate()+(this),a.transitDefault?e.imeout=d.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=e.$el[0],n=!(!h.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};h.touch?(r.addEventListener(t.start,this.scrollbar.onDragStart,n),r.addEventListener(t.move,this.scrollbar.onDragMove,n),r.addEventListener(t.end,this.scrollbar.onDragEnd,o)):(r.addEventListener(s.start,this.scrol,thisss="'+this.params.scrollbar.dragClass+'"></div>'),s.append(a)),d.extend(ll==d)s.trans], [data-swipe-swiper-parallax-scale]").each(ouches[0].pageXEl.attr("data-sw1,.5)),i.scaltion(this.par,s.touchesStCurrent.x,acurrentY=Math.ma$imageWcurWrapte3d(0,rEl.on(tl.off(this.touchE.loadt.children("."+i.se.length-1,this.interpo.spline||(thidex(),e.update.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!== j&&t!==a&&r(a)}},ue={makeElFocusable:function(e){return e.attn(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){returturn e.attr11y.notn&&i.is("."+this.le(i))),t&&t.lengn(s);.paginatpagination0,e.pathtory.setHistoryPopSte)},setHistorPathValues:a.historl,s))}},slugife.slugify(r.attr(.attr("dt("hathis.slihis.hashNpeed,!on(){(this.tionEnd),this.$wraMath.max(1-Mat(function(){if(!a&|_.isWebView?-bottom, .swiper-slath.max(-a,0))(function(){if(!r&e.opacity=g>0?s.transitis.swiperCreat).indexEl.children('[data-swiper-slide-index="'+(this.realIndex+c)+'"]').addClass(p);else for(var u=0;u<h;u+=1)t.slides.eq(this.realIndex+u).addClass(p)}}},Ee=[K,U,Z,Q,eeer:re.aniunction(led&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){d.extend(this,{navigation:{init:ne.init.bind(this)nNextClick:ne.onNextClick.bind(this),onPrevClick:ne.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.upda,this):this.emit("navigationHide",this),s&&s.toggleClass(this.params.navigation.hiddenClass),a&&a.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustosite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progres{pagination:{init:oe.init.bind(this),render:oe.render.bind(this),update:oe.update.bind(this),destroy:oe.destroy.s.pagination.renion(){(this.params.(){this.params.loop||gination.render(),this.pagination.update())},snapGriiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{sctart:le.oisTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.on(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransitionxtend(this,{par(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.paramthis.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slivoid 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoomom.disable.enabled&&thisd&&this.para&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStarer-lazy-preloadnSlidmages&&params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},ress.lazy.enablednitialImageL&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){thisl,getInterpolateFunction:ce.getInterpolateFunction.bind(this),setTranslate:ce.setTranslate.bind(this),setTransition:ce.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controllerhis.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slms.a11y.nue).forEach((function(t){e.a11y[t]=ue[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},detHistory.bind(this),setHistoryPopState:ve.setHistoryPopState.bind(this),scrollToSlide:ve.scrollToSlide.bind(this),destroy:ve.destroy.bind(this)}})},on:{initbled&&this.hiveIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHisation:{initialized:!1,init:fe.init.bind(this),destroy:fe.destroy.bind(this),setHash:fe.setHais.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNaviialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{oveEventLit:function(){this.parreTransitionStar.stop())}.autopla},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}esPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}SlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}esPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffhadows:!0}},crelow"),this.clress=!0,this.oams.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,mreate:function(mbClick:xe.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumis.thumbs.update()},observer(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===j.use&&(j.use=j.Class.use,j.installModule=j.Class.installModule),j.use(Ee),j}));
//# sourceMappingURL=swiper.min.js.map