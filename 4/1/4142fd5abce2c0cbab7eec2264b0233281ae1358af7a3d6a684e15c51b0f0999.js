(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4863],{6156:63845:function(e,t,r){"use strict";r.d(t,{Z:);var i,n,s,a=r(6156),o=r(7513),l=r(28262); p={name:"resize",create:on:{init:destroy:};ar v={attach:init:destroy:,h={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:on:{init:function(e){e.observer.init()},destroy:};function m(e){var t=this,r=(0,a.Me)(),i=(0,a.Jj)(),n=t.touchEventsData,s=t.params,d=t.touches;if(t.enabled&&(!t.animating||!s.preventInteractionOnTransition)){var u=e;u.originalEvent&&(u=u.originalEvent);var c=(0,o.Z)(u.target);if("wrapper"!==s.touchEventsTarget||c.closest(t.wrapperEl).length)if(n.isTouchEvent="touchstart"===u.type,n.isTouchEvent||!("which"in u)||3!==u.which)if(!(!n.isTouchEvent&&"button"in u&&u.button>0))if(!n.isTouched||!n.isMoved)if(!!s.noSwipingClass&&""!==s.noSwipingClass&&u.target&&u.target.shadowRoot&&e.path&&e.path[0]&&(c=(0,o.Z)(e.path[0])),s.noSwiping&&c.closest(s.noSwipingSelector?s.noSwipingSelector:"."+s.noSwipingClass)[0])t.allowClick=!0;else if(!s.swipeHandler||c.closest(s.swipeHandler)[0]){d.currentX="touchstart"===u.type?u.targetTouches[0].pageX:u.pageX,d.currentY="touchstart"===u.type?u.targetTouches[0].pageY:u.pageY;var p=d.currentX,f=d.currentY,v=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,h=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(v&&(p<=h||p>=i.innerWidth-h)){if("prevent"!==v)return;e.preventDefault()}if((0,l.l7)(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=p,d.startY=f,n.touchStartTime=(0,l.zO)(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==u.type){var m=!0;c.is(n.focusableElements)&&(m=!1),r.activeElement&&(0,o.Z)(r.activeElement).is(n.focusableElements)&&r.activeElement!==c[0]&&r.activeElement.blur();var g=m&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!g||c[0].isContentEditable||u.preventDefault()}t.emit("touchStart",u)}}}=!1;ar x={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};ar M={modular:{useParams:useModules:,eventsEmitter:{on:once:onAny:offAny:off:emit:,update:{updateSize:updateSlides:function(){var e=this;r i=e.params,n=e.$wrapperEl,s=e.size,a=e.rtlTranslate,o=e.wrongRTL,d=e.virtual&&i.virtual.enabled,u=d?e.virtual.slides.length:e.slides.length,c=n.children("."+e.params.slideClass),p=d?e.virtual.slides.length:c.length,f=[],v=[],h=[],m=i.slidesOffsetBefore;"function"===typeof m&&(m=i.slidesOffsetBefore.call(e));var g=i.slidesOffsetAfter;"function"===typeof g&&(g=i.slidesOffsetAfter.call(e));var w=e.snapGrid.length,b=e.slidesGrid.length,S=i.spaceBetween,T=-m,y=0,E=0;if("undefined"!==typeof s){var x,C;"string"===typeof S&&S.indexOf("%")>=0&&(S=parseFloat(S.replace("%",""))/100*s),e.virtualSize=-S,a?c.css({marginLeft:"",marginTop:""}):c.css({marginRight:"",marginBottom:""}),i.slidesPerColumn>1&&(x=Math.floor(p/i.slidesPerColumn)===p/e.params.slidesPerColumn?p:Math.ceil(p/i.slidesPerColumn)*i.slidesPerColumn,"auto"!==i.slidesPerView&&"row"===i.slidesPerColumnFill&&(x=Math.max(x,i.slidesPerView*i.slidesPerColumn)));for(var M,P,O,k=i.slidesPerColumn,L=x/k,z=Math.floor(p/i.slidesPerColumn),_=0;_<p;_+=1){C=0;var A=c.eq(_);if(i.slidesPerColumn>1){var I=void 0,D=void 0,N=void 0;if("row"===i.slidesPerColumnFill&&i.slidesPerGroup>1){var j=Math.floor(_/(i.slidesPerGroup*i.slidesPerColumn)),B=_-i.slidesPerColumn*i.slidesPerGroup*j,G=0===j?i.slidesPerGroup:Math.min(Math.ceil((p-j*k*i.slidesPerGroup)/k),i.slidesPerGroup);I=(D=B-(N=Math.floor(B/G))*G+j*i.slidesPerGroup)+N*x/k,A.css({"-webkit-box-ordinal-group":I,"-moz-box-ordinal-group":I,"-ms-flex-order":I,"-webkit-order":I,order:I})}else"column"===i.slidesPerColumnFill?(N=_-(D=Math.floor(_/k))*k,(D>z||D===z&&N===k-1)&&(N+=1)>=k&&(N=0,D+=1)):D=_-(N=Math.floor(_/L))*L;A.css(t("margin-top"),0!==N?i.spaceBetween&&i.spaceBetween+"px":"")}if("none"!==A.css("display")){if("auto"===i.slidesPerView){var R=getComputedStyle(A[0]),V=A[0].style.transform,H=A[0].style.webkitTransform;if(V&&(A[0].style.transform="none"),H&&(A[0].style.webkitTransform="none"),i.roundLengths)C=e.isHorizontal()?A.outerWidth(!0):A.outerHeight(!0);else{var W=r(R,"width"),F=r(R,"padding-left"),Y=r(R,"padding-right"),$=r(R,"margin-left"),X=r(R,"margin-right"),Z=R.getPropertyValue("box-sizing");if(Z&&"border-box"===Z)C=W+$+X;else{var q=A[0],J=q.clientWidth;C=W+F+Y+$+X+(q.offsetWidth-J)}}V&&(A[0].style.transform=V),H&&(A[0].style.webkitTransform=H),i.roundLengths&&(C=Math.floor(C))}else C=(s-(i.slidesPerView-1)*S)/i.slidesPerView,i.roundLengths&&(C=Math.floor(C)),c[_]&&(c[_].style[t("width")]=C+"px");c[_]&&(c[_].swiperSlideSize=C),h.push(C),i.centeredSlides?(T=T+C/2+y/2+S,0===y&&0!==_&&(T=T-s/2-S),0===_&&(T=T-s/2-S),Math.abs(T)<.001&&(T=0),i.roundLengths&&(T=Math.floor(T)),E%i.slidesPerGroup===0&&f.push(T),v.push(T)):(i.roundLengths&&(T=Math.floor(T)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&f.push(T),v.push(T),T=T+C+S),e.virtualSize+=C+S,y=C,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+g,a&&o&&("slide"===i.effect||"coverflow"===i.effect)&&n.css({width:e.virtualSize+i.spaceBetween+"px"}),i.setWrapperSize)n.css(((P={})[t("width")]=e.virtualSize+i.spaceBetween+"px",P));if(i.slidesPerColumn>1)if(e.virtualSize=(C+i.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/i.slidesPerColumn)-i.spaceBetween,n.css(((O={})[t("width")]=e.virtualSize+i.spaceBetween+"px",O)),i.centeredSlides){M=[];for(var K=0;K<f.length;K+=1){var U=f[K];i.roundLengths&&(U=Math.floor(U)),f[K]<e.virtualSize+f[0]&&M.push(U)}f=M}if(!i.centeredSlides){M=[];for(var Q=0;Q<f.length;Q+=1){var ee=f[Q];i.roundLengths&&(ee=Math.floor(ee)),f[Q]<=e.virtualSize-s&&M.push(ee)}f=M,Math.floor(e.virtualSize-s)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-s)}if(0===f.length&&(f=[0]),0!==i.spaceBetween){var te,re=e.isHorizontal()&&a?"marginLeft":t("marginRight");c.filter(().css(((te={})[re]=S+"px",te))}if(i.centeredSlides&&i.centeredSlidesBounds){var ie=0;h.forEach((function(e){ie+=e+(i.spaceBetween?i.spaceBetween:0)}));var ne=(ie-=i.spaceBetween)-s;f=f.map(()}if(i.centerInsufficientSlides){var se=0;if(h.forEach((),(se-=i.spaceBetween)<s){var ae=(s-se)/2;f.forEach((),v.forEach(()}}(0,l.l7)(e,{slides:c,snapGrid:f,slidesGrid:v,slidesSizesGrid:h}),p!==u&&e.emit("slidesLengthChange"),f.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==b&&e.emit("slidesGridLengthChange"),(i.watchSlidesProgress||i.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:updateSlidesOffset:updateSlidesProgress:updateProgress:updateSlidesClasses:updateActiveIndex:updateClickedSlide:,translate:{getTranslate:setTranslate:minTranslate:maxTranslate:translateTo:,transition:{setTransition:transitionStart:transitionEnd:,slide:{slideTo:slideToLoop:slideNext:slidePrev:slideReset:slideToClosest:slideToClickedSlide:,loop:{loopCreate:loopFix:loopDestroy:,grabCursor:{setGrabCursor:unsetGrabCursor:,manipulation:{appendSlide:prependSlide:addSlide:removeSlide:removeAllSlides:,events:{attachEvents:detachEvents:,breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,r=e.initialized,i=e.loopedSlides,n=void 0===i?0:i,s=e.params,a=e.$el,o=s.breakpoints;if(o&&(!o||0!==Object.keys(o).length)){var d=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(d&&e.currentBreakpoint!==d){var u=d in o?o[d]:void 0;u&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach(();var c=u||e.originalParams,p=s.slidesPerColumn>1,f=c.slidesPerColumn>1,v=s.enabled;p&&!f?(a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!p&&f&&(a.addClass(s.containerModifierClass+"multirow"),"column"===c.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"),e.emitContainerClasses());var h=c.direction&&c.direction!==s.direction,m=s.loop&&(c.slidesPerView!==s.slidesPerView||h);h&&r&&e.changeDirection(),(0,l.l7)(e.params,c);var g=e.params.enabled;(0,l.l7)(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!g?e.disable():!v&&g&&e.enable(),e.currentBreakpoint=d,e.emit("_beforeBreakpoint",c),m&&r&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-n+e.loopedSlides,0,!1)),e.emit("breakpoint",c)}}},getBreakpoint:,checkOverflow:{checkOverflow:,classes:{addClasses:removeClasses:,images:{loadImage:preloadImages:},P={},O=);Object.keys(M).forEach((),O.use([p,h]);var k=O},24224:function(e,t,r){"use strict";var i=r(6156),n=r(7513),s=r(28262);var a={lastScrollTime:(0,s.zO)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:normalize:handleMouseEnter:function(){this.enabled&&(this.mouseEntered=!0)},handleMouseLeave:handle:animateSlider:releaseScroll:enable:disable:;t.Z={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:on:{init:destroy:}},24002:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var i=r(67294),n=r(61077),s=r(77254),a=["tag","children","className","swiper","zoom","virtualIndex"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var l=(0,i.forwardRef)(();l.displayName="SwiperSlide"},64519:function(e,t,r){"use strict";r.d(t,{t:function(){return v}});var i=r(67294),n=r(63845),s=r(61077),a=["init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_freeModeMomentum","_freeModeMomentumRatio","_freeModeMomentumBounce","_freeModeMomentumBounceRatio","_freeModeMomentumVelocityRatio","_freeModeSticky","_freeModeMinimumVelocity","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","_slidesPerColumn","_slidesPerColumnFill","_slidesPerGroup","_slidesPerGroupSkip","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_watchSlidesVisibility","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];c=r(77254),p=["className","tag","wrapperTag","children","onSwiper"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var v=(0,i.forwardRef)(();v.displayName="Swiper"},77254:61077:7513:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var i=r(6156);=l(Array));n=d.prototype;var f="resize scroll".split(" ");("click"),v("blur"),v("focus"),v("focusin"),v("focusout"),v("keyup"),v("keydown"),v("keypress"),v("submit"),v("change"),v("mousedown"),v("mousemove"),v("mouseup"),v("mouseenter"),v("mouseleave"),v("mouseout"),v("mouseover"),v("touchstart"),v("touchend"),v("touchmove"),v("resize"),v("scroll");var h={addClass:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=u(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:hasClass:toggleClass:attr:removeAttr:transform:transition:on:off:trigger:transitionEnd:outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:styles:offset:css:each:html:text:is:index:eq:append:prepend:next:nextAll:function(e){var t=[],r=this[0];if(!r)return p([]);for(;r.nextElementSibling;){var i=r.nextElementSibling;e?p(i).is(e)&&t.push(i):t.push(i),r=i}return p(t)},prev:prevAll:parent:parents:closest:find:children:filter:remove:;Object.keys(h).forEach(();var m=p},28262:function(e,t,r){"use strict";r.d(t,{cP:function(){return n},Y3:function(){return s},zO:function(){return a},R6:function(){return o},l7:function(){return d},cR:function(){return u},Wc:function(){return c},Up:function(){return p}});var i=r(6156);ion d(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],r="undefined"!==typeof window?window.HTMLElement:void 0,i=1;i<arguments.length;i+=1){var n=i<0||arguments.length<=i?void 0:arguments[i];if(void 0!==n&&null!==n&&!(r&&n instanceof r))for(var s=Object.keys(Object(n)).filter((),a=0,o=s.length;a<o;a+=1){var u=s[a],c=Object.getOwnPropertyDescriptor(n,u);void 0!==c&&c.enumerable&&(l(e[u])&&l(n[u])?n[u].__swiper__?e[u]=n[u]:d(e[u],n[u]):!l(e[u])&&l(n[u])?(e[u]={},n[u].__swiper__?e[u]=n[u]:d(e[u],n[u])):e[u]=n[u])}}return e});