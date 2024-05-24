/*! 20240206-32_b5-PR-67157-DEV-148769-trecs-ms3-item-dispatch-trcresponsehandled-event-b054a61d422 */

(()=>{class t{constructor(t,e,i,s){this.trcManager=e,this.placementData=s,this.contentElement=i,this.isMobile="PHON"===TRC.platform_code,this.disableFloatingUnit=!1,this.widgetItems=[],this.timer={start:null,remaining:null,timerId:null},this.shouldCarousel=this.checkIfShouldCarousel(),this.closeBtn=t.unit.closeBtn,this.closeBtnWrapper=t.unit.closeBtnWrapper,this.state={feedInViewport:!1,floatingUnitIsVisible:!1,visibleItemIndex:0,CarouselIterations:0,isCarouseling:!1,floatingUnitFirstShown:!1,feedFirstEntered:!1},this.config=this.getFloatingUnitConfigs(t),TRC.CustomModulesManager.runHook("floating-unit-init",null,this,t),this.renderFloatingUnit(),this.observeHideFloatingUnitElem(),this.listenToVideoSlider(),this.shouldHandleReadMore()&&this.handleReadMore(),this.listenToTrcReset(),this.listenToDocumentVisibilityChange()}shouldHandleReadMore(){return!this.config||!TRC.util.isDefined(this.config.shouldHandleReadMore)||this.config.shouldHandleReadMore}shouldHideUnitIfReadMoreVisible(){return this.config.shouldHandleReadMore&&TRC.readMoreVisible}checkIfShouldCarousel(){return!0}listenToDocumentVisibilityChange(){TRC.dom.on(document,"visibilitychange",this.handleTabVisibilityChange.bind(this))}removeClickOverlay(){this.floatingUnitElement.className.indexOf(t.CSS_CLASSES.DISABLED_CLICKS)>-1&&TRC.Timeout.set(()=>{TRC.dom.removeClass(this.floatingUnitElement,t.CSS_CLASSES.DISABLED_CLICKS)},this.config.enableItemClickAfterNumOfMilliseconds)}renderFloatingUnit(){this.setCSS(),this.floatingUnitElement=this.createFloatingUnitHtml(),TRC.dom.removeClass(this.contentElement,"tbl-hidden"),this.floatingUnitElement.appendChild(this.contentElement),document.body.appendChild(this.floatingUnitElement),t.waitFor(()=>this.isWidgetWithItems(),()=>this.showFloatingUnit())}listenToVideoSlider(){this.isVideoSliderActive=!!document.querySelector(t.ACTIVE_VIDEO),this.isVideoSliderActive&&this.onVideoSlider(!0),TRC.listen("videoSliderOn",this.onVideoSlider.trcBind(this,!0)),TRC.listen("videoSliderOff",this.onVideoSlider.trcBind(this,!1))}handleReadMore(){TRC.readMoreVisible?this.listenToReadMoreClick():this.listenToReadMoreRender()}listenToReadMoreRender(){this.readMoreListener=TRC.listen("readMoreRendered",this.onReadMoreRender.trcBind(this))}listenToReadMoreClick(){this.readMoreClickListener||(this.readMoreClickListener=TRC.listen("readMoreClicked",this.showFloatingUnit.trcBind(this),!0))}listenToTrcReset(){TRC.listen("trcReset",this.onTrcReset.trcBind(this))}onVideoSlider(t){this.isVideoSliderActive=t,this.isVideoSliderActive?this.hideFloatingUnit(!0):this.showFloatingUnit()}onReadMoreRender(){this.readMoreListener.remove(),this.listenToReadMoreClick(),this.hideFloatingUnit()}onTrcReset(){TRC.FloatingUnitGenerator&&TRC.FloatingUnitGenerator.isFloatingUnitOn&&(TRC.FloatingUnitGenerator.isFloatingUnitOn=!1),this.floatingUnitElement&&this.floatingUnitElement.parentNode&&this.floatingUnitElement.parentNode.removeChild(this.floatingUnitElement)}startTimeout(t){this.timer.timerId||(this.timer.remaining=t||this.config.hideAfter),this.timer.start=new Date,this.timer.timerId=TRC.Timeout.set(()=>this.hideFloatingUnit(),this.timer.remaining)}pauseTimeout(){this.timer.remaining-=new Date-this.timer.start,TRC.Timeout.clear(this.timer.timerId)}resumeCarouselTimers(){this.timer.timerId?this.startTimeout():this.shouldCarousel&&this.playCarousel()}handleTabVisibilityChange(){"hidden"===document.visibilityState?this.stopCarousel():this.resumeCarouselTimers()}setVisibleItemIndex(){++this.state.visibleItemIndex===this.widgetItems.length&&(this.state.visibleItemIndex=0),this.state.visibleItemIndex+1===this.widgetItems.length&&this.state.CarouselIterations++}shouldShowNextItem(){this.config.maxCarouselIterations===t.INFINITE_CAROUSEL_ITERATIONS||this.state.CarouselIterations<this.config.maxCarouselIterations?this.showNextItem():this.state.floatingUnitIsVisible?this.timer.timerId||this.startTimeout():this.stopCarousel()}playCarousel(){!this.state.isCarouseling&&this.widgetItems.length>0&&this.shouldCarousel&&(this.state.isCarouseling=!0,this.carouselItemsIterationInterval=t.startTimer(this.shouldShowNextItem.bind(this),this.config.carouselItemsDisplayInMilliseconds))}stopCarousel(){this.state.isCarouseling&&(this.state.isCarouseling=!1,t.stopTimer(this.carouselItemsIterationInterval))}isWidgetWithItems(){return this.floatingUnitElement.getElementsByClassName("videoCube").length}handleCloseBtnClick(t){t.preventDefault(),this.disableFloatingUnit=!0,this.hideFloatingUnit()}handleFloatingUnitHover(){this.timer.timerId?this.pauseTimeout():this.stopCarousel()}createCloseButtonElement(){return t.createNewElement("div",null,this.closeBtnWrapper,this.getCloseButtonMarkup(),[{click:this.handleCloseBtnClick.bind(this)}])}showNextItem(){const e=this.widgetItems[this.state.visibleItemIndex];this.setVisibleItemIndex();const i=this.widgetItems[this.state.visibleItemIndex];i.style.zIndex=parseInt(e.style.zIndex,10)+1,this.disableClicks(),TRC.dom.addClass(i,`${t.CSS_CLASSES.SHOW}`),e&&TRC.dom.removeClass(e,t.CSS_CLASSES.SHOW)}disableClicks(){-1===this.floatingUnitElement.className.indexOf(t.CSS_CLASSES.DISABLED_CLICKS)&&(TRC.dom.addClass(this.floatingUnitElement,`${t.CSS_CLASSES.DISABLED_CLICKS}`),this.removeClickOverlay())}hideFloatingUnit(t=!1){this.state.floatingUnitIsVisible&&(TRC.dom.removeClass(this.floatingUnitElement,"in-viewport"),this.state.floatingUnitIsVisible=!1,this.stopCarousel(),t||TRC.intersections.unobserve(this.observerId))}observeHideFloatingUnitElem(){const e=t=>{const e={targetElement:document.querySelector(t),onEnter:()=>this.onEnterHideFloatingUnitElement(),onExit:t=>this.onExitHideFloatingUnitElement(t)};this.observerId=TRC.intersections.observe(e)};this.config.hideFloatingUnitElemSelectorWidget&&t.waitFor(()=>document.querySelector(this.config.hideFloatingUnitElemSelectorWidget),()=>e(this.config.hideFloatingUnitElemSelectorWidget)),"none"!==this.config.hideFloatingUnitElemSelectorFeed&&t.waitFor(()=>document.querySelector(this.config.hideFloatingUnitElemSelectorFeed),()=>e(this.config.hideFloatingUnitElemSelectorFeed))}getCloseButtonMarkup(){return`<div class="${this.closeBtn}">\n               <svg width="10px" height="10px" viewBox="0 0 10 10">\n                 <defs></defs>\n                 <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">\n                   <g id="icons" transform="translate(-23.000000, -130.000000)">\n                      <polygon id="Desktop-Close-initial" points="33 131.208868 31.7911325 130 28 133.791132 24.2088675 130 23 131.208868 26.7911325 135 23 138.791132 24.2088675 140 28 136.208868 31.7911325 140 33 138.791132 29.2088675 135"></polygon>\n                   </g>\n                 </g>\n               </svg>\n             </div>`}onExitHideFloatingUnitElement(t){this.shouldDisableFloatingUnitBelowFeed(t)||(this.state.feedInViewport=!1,this.state.feedFirstEntered&&this.showFloatingUnit())}shouldDisableFloatingUnitBelowFeed(t){return!this.trcManager.global["disable-display-floating-unit-below-feed"]&&t.boundingClientRect.y<0}getFloatingUnitConfigs(){}createFloatingUnitElement(){}createFloatingUnitHtml(){}showFloatingUnit(){}setCSS(){}onEnterHideFloatingUnitElement(){this.state.feedInViewport=!0,this.state.feedFirstEntered=!0,this.hideFloatingUnit(!0)}static startTimer(t,e){return TRC.Interval.set(t,e)}static stopTimer(t){t&&TRC.Interval.clear(t)}static createNewElement(t,e,i,s,n,o){if(!t)return!1;const l=document.createElement(t);return l.id=e||"",l.className=i||"",l.innerHTML=s||"",o&&o.forEach(t=>{const e=Object.keys(t)[0],i=t[e];l.setAttribute(e,i)}),n&&n.forEach(t=>{const e=Object.keys(t)[0],i=t[e];TRC.dom.on(l,e,i)}),l}static waitFor(e,i,s,n=50,o=100,l=0){if(!e()&&l<o)return++l,void setTimeout(()=>{t.waitFor(e,i,s,n,o,l)},n);l<o?i():s&&s()}}t.CSS_CLASSES={SHOW:"tbl-floating-unit-show-item",DISABLED_CLICKS:"tbl-floating-unit-disabled-clicks"},t.INFINITE_CAROUSEL_ITERATIONS="infinity",t.ACTIVE_VIDEO="#_cm-css-reset._cm-ad-active",TRC.FloatingUnit=t})();YjLeTY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9E4kDNxMZdWfMOD5Vvl4jL.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeSxf6TF0.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeQhf6TF0.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeShf6TF0.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeRRf6TF0.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeSRf6TF0.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeSBf6TF0.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSxf6TF0.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eQhf6TF0.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eShf6TF0.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eRRf6TF0.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSRf6TF0.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf6TF0.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://gfonts.jifo.co/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxC7mw9c.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRzS7mw9c.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxi7mw9c.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxC7mw9c.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRzS7mw9c.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxi7mw9c.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url(https://gfonts.jifo.co/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtE6F15M.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWvU6F15M.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtU6F15M.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWuk6F15M.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWu06F15M.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWxU6F15M.woff2) format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115, U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqW106F15M.woff2) format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F10C, U+1F110-1F16C, U+1F170-1F190, U+1F19B-1F1AC, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F579, U+1F57B-1F594, U+1F597-1F5A3, U+1F5A5-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CB, U+1F6CD-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8B1, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA74, U+1FA78-1FA7A, U+1FA80-1FA86, U+1FA90-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtk6F15M.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWt06F15M.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWuU6F.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtE6F15M.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWvU6F15M.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtU6F15M.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWuk6F15M.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWu06F15M.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWxU6F15M.woff2) format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115, U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqW106F15M.woff2) format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F10C, U+1F110-1F16C, U+1F170-1F190, U+1F19B-1F1AC, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F579, U+1F57B-1F594, U+1F597-1F5A3, U+1F5A5-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CB, U+1F6CD-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8B1, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA74, U+1FA78-1FA7A, U+1FA80-1FA86, U+1FA90-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtk6F15M.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWt06F15M.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWuU6F.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTVOmu1aB.woff2) format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115, U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTUGmu1aB.woff2) format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F10C, U+1F110-1F16C, U+1F170-1F190, U+1F19B-1F1AC, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F579, U+1F57B-1F594, U+1F597-1F5A3, U+1F5A5-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CB, U+1F6CD-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8B1, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA74, U+1FA78-1FA7A, U+1FA80-1FA86, U+1FA90-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* math */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTVOmu1aB.woff2) format('woff2');
  unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115, U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
}
/* symbols */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTUGmu1aB.woff2) format('woff2');
  unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F10C, U+1F110-1F16C, U+1F170-1F190, U+1F19B-1F1AC, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F579, U+1F57B-1F594, U+1F597-1F5A3, U+1F5A5-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CB, U+1F6CD-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8B1, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA74, U+1FA78-1FA7A, U+1FA80-1FA86, U+1FA90-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6, U+1FB00-1FBFF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  src: url(https://gfonts.jifo.co/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
e+cremación&forceKeyA=Cremación+De+Cuerpos&forceKeyB=Empresas+De+Servicios+Funerarios+Y+Cremación&forceKeyC=Costo+De+Una+Cremación+De+{City}+En+2024&forceKeyD=Costo+De+La+Cremación+España&forceKeyE=Precio+medio+de+la+cremación+funeraria+para+personas+mayores&forceKeyF=Paquetes+funerarios+con+cremación+2024&forceKeyG=Servicios+Funerarios+De+Cremación+En+España&forceKeyH=2024+Lista+De+Precios+Cremación+{City}&subid=ch0002#tblciGiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSDCkWMohdK8yf6K8rOPAQ","uic":"true","duration":"0","sig":"94b325df61c32ee2cefa63d0645c504483223ec3ca4e","item-id":"~~V1~~-4546313973661001116~~8K9ko596IKDrLHJsFcFd2Cjd03ZgMG8GcKrJP3pcTqlw6cLzOYgYTH58zK8cIqqSW7jw3p5geVYW0t44z6eJnw3k4Thh40qKgdVK-XcFVtrM1Kay2unK4e7Ts7KvwUZOCGAKehhO_yZv7VCChglyGvmDIhCreX2gYPy11UC2511jY_vJujClyqWEf7KKKAEb","tblci":"GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSDCkWMohdK8yf6K8rOPAQ","uploader":"","is-syndicated":"true","publisher":"mmosworld-finance-rsoc-sc","id":"~~V1~~-4546313973661001116~~8K9ko596IKDrLHJsFcFd2Cjd03ZgMG8GcKrJP3pcTqlw6cLzOYgYTH58zK8cIqqSW7jw3p5geVYW0t44z6eJnw3k4Thh40qKgdVK-XcFVtrM1Kay2unK4e7Ts7KvwUZOCGAKehhO_yZv7VCChglyGvmDIhCreX2gYPy11UC2511jY_vJujClyqWEf7KKKAEb","views":"0","thrf":"true"},{"thumbnail":"http://cdn.taboola.com/libtrc/static/thumbnails/55ca43bb529cac23dc4edefea1b3eea8.jpg","all-thumbnails":"http://cdn.taboola.com/libtrc/static/thumbnails/55ca43bb529cac23dc4edefea1b3eea8.jpg!-#@1032x687","tat":"TABOOLA","origin":"default","thumb-size":"1032x687","description":"El juego de estrategia Supremacy 1914 simula escenarios históricos alternativos.","placement-label":"taboola-below-article-thumbnail_1 | Card 8","title":"¿Y si el Kaiser ya se hubiera expandido así en 1914?El juego simula escenarios históricos","type":"text","published-date":"1672825602","branding-text":"Juego de Estrategia Histórica","url":"https://www.supremacy1914.com?L=3&r=95053&placement=henneonetwork-heraldo_1390278&c=3599225217&tblci=GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCnpEso6o3toIWBgM3DAQ#tblciGiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCnpEso6o3toIWBgM3DAQ","uic":"true","duration":"0","sig":"dd5644ece8bc50f3e66e69253b5917184e5a69b2b3ec","item-id":"~~V1~~3545990108067526968~~eEwFMBLH9WoElchEhvy79bZ5rgZGLr6dzGaygkv-qilyNpbgedRdYuhjTdtdbeHkW7jw3p5geVYW0t44z6eJn2mAIx41d-2jzmQsRgmivf10Vo7KS_I6OhaN1QTmPVPxPHkKIZSyXLLfeYV-VJPJAU2Znx5m5ka9e6OQHfibk8hjY_vJujClyqWEf7KKKAEb","tblci":"GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCnpEso6o3toIWBgM3DAQ","uploader":"","cta-text":"Juega ahora","is-syndicated":"true","publisher":"bytrolabsgmbh-supremacy1914-sc","id":"~~V1~~3545990108067526968~~eEwFMBLH9WoElchEhvy79bZ5rgZGLr6dzGaygkv-qilyNpbgedRdYuhjTdtdbeHkW7jw3p5geVYW0t44z6eJn2mAIx41d-2jzmQsRgmivf10Vo7KS_I6OhaN1QTmPVPxPHkKIZSyXLLfeYV-VJPJAU2Znx5m5ka9e6OQHfibk8hjY_vJujClyqWEf7KKKAEb","views":"0","thrf":"true"}],"fpl":"taboola-below-article-thumbnail_1","cpad":"0px","fb":"1","dlt":"1"},{"ri":"0b162a853a0976f2750c6b19a2d9ded9","uuip":"Feed - taboola-below-article-thumbnail_1","uip":"taboola-below-article-thumbnail_1 | Card 9","po":"'attribution-text': 'por Taboola','disclosure-link-text-hybrid': 'Enlaces Promovidos','disclosure-link-text-sponsored': 'Patrocinado','organic-static-text': 'MÁS POPULARES'","ppb":"CIwD","m":"exchange-thumbs-feed-01-c","v":[{"thumbnail":"https://imagenes.heraldo.es/files/og_thumbnail/uploads/imagenes/2024/02/05/captura.jpeg","all-thumbnails":"https://imagenes.heraldo.es/files/og_thumbnail/uploads/imagenes/2024/02/05/captura.jpeg!-#@1200x630","tat":"TABOOLA","origin":"default","thumb-size":"1200x630","description":"El certamen gastronómico más esperado del año en la provincia de Zaragoza arrancó el pasado jueves 1 de febrero y, en estos primeros días, ha registrado una gran participación.","placement-label":"taboola-below-article-thumbnail_1 | Card 9","title":"El mejor plan gastronómico para Zaragoza y provincia","type":"video","published-date":"1707393180","branding-text":"","url":"https://www.heraldo.es/branded/ya-estan-aqui-los-premios-horeca-zaragoza/?utm_source=taboola&utm_medium=exchange&tblci=GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCBiGEoivScsdvdvaMZ#tblciGiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCBiGEoivScsdvdvaMZ","uic":"true","duration":"0","sig":"b8489fe3dcabbb1bc78bed5b7135f63bf93ab76602d0","is-in-network":"true","item-id":"~~V1~~6370974423776944725~~q8PUbuRiZQhcNdruQuZDC8F91l4iX1AlmULpdecIxlWbMHXUSCu2KKcNrcUNDbCMQE6R2dT0qxLpACbXlOalFcmX-NlQu3d9xL-SMl6UIgXffknJSmgNBa64uLX4M24KE1t0c4jyhhSYNTFKMVjaBQ","tblci":"GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCBiGEoivScsdvdvaMZ","uploader":"","publisher":"alayansmedia-henneoexchange","id":"~~V1~~6370974423776944725~~q8PUbuRiZQhcNdruQuZDC8F91l4iX1AlmULpdecIxlWbMHXUSCu2KKcNrcUNDbCMQE6R2dT0qxLpACbXlOalFcmX-NlQu3d9xL-SMl6UIgXffknJSmgNBa64uLX4M24KE1t0c4jyhhSYNTFKMVjaBQ","views":"0","thrf":"true"},{"thumbnail":"https://imagenes.heraldo.es/files/image_486_v1/uploads/imagenes/2024/02/01/david-flores-de-vox-este-jueves-en-el-pleno-del-ayuntamiento-de-zaragoza.jpeg","tat":"TABOOLA","origin":"default","description":"Afirma que produce &#34;más dióxido de carbono&#34; por el esfuerzo físico y carga contra el &#34;timo climático&#34; y la &#34;cansina&#34; Agenda 2030.","placement-label":"taboola-below-article-thumbnail_1 | Card 9","title":"Un concejal de Vox en Zaragoza asegura que un ciclista &#34;contamina más que un peatón&#34;","type":"video","published-date":"1706818962","branding-text":"heraldo.es","url":"https://www.heraldo.es/noticias/aragon/zaragoza/2024/02/01/un-concejal-de-vox-en-zaragoza-asegura-que-un-ciclista-contamina-mas-que-un-peaton-1708018.html?utm_source=taboola&utm_medium=exchange&tblci=GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCBiGEo5uePoa71zNQZ#tblciGiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCBiGEo5uePoa71zNQZ","uic":"true","duration":"0","sig":"22e952526180a34faa3fd9248dedf4f2f3647671c11a","is-in-network":"true","item-id":"~~V1~~8472166439825625542~~7kTbQF2MU27xZTcFBKZAI8F91l4iX1AlmULpdecIxlV15eBQbaHe6mamBsOkoQLsrKbXEEwQl0xw5DKXhNSSb8KMnuiCo3dasICd7ucQEHDffknJSmgNBa64uLX4M24KE1t0c4jyhhSYNTFKMVjaBQ","tblci":"GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCBiGEo5uePoa71zNQZ","uploader":"","publisher":"alayansmedia-henneoexchange","id":"~~V1~~8472166439825625542~~7kTbQF2MU27xZTcFBKZAI8F91l4iX1AlmULpdecIxlV15eBQbaHe6mamBsOkoQLsrKbXEEwQl0xw5DKXhNSSb8KMnuiCo3dasICd7ucQEHDffknJSmgNBa64uLX4M24KE1t0c4jyhhSYNTFKMVjaBQ","views":"0","thrf":"true"}],"fpl":"taboola-below-article-thumbnail_1","cpad":"0px","fb":"1","dlt":"1"},{"ri":"04f76f318e4eaec83857e9639a9c76ab","uuip":"Feed - taboola-below-article-thumbnail_1","uip":"taboola-below-article-thumbnail_1 | Card 10","po":"'attribution-text': 'por Taboola','disclosure-link-text-hybrid': 'Enlaces Promovidos','disclosure-link-text-sponsored': 'Patrocinado','organic-static-text': 'MÁS POPULARES'","ppb":"CAQ","m":"thumbs-feed-01","v":[{"ecpaPercentile":"0.95","thumbnail":"http://cdn.taboola.com/libtrc/static/thumbnails/086329c7d72ccdde0b530102c2e61f83.jpg","all-thumbnails":"http://cdn.taboola.com/libtrc/static/thumbnails/086329c7d72ccdde0b530102c2e61f83.jpg!-#@1200x800","tat":"TABOOLA","thumb-size":"1200x800","description":"","placement-label":"taboola-below-article-thumbnail_1 | Card 10","title":"BMW iX1: Solicita una oferta.","type":"text","published-date":"1705496546","branding-text":"BMW – 100% ELECTRIC","url":"https://www.bmw.es/es/coches-bmw/bmw-i/iX1/2022/caracteristicas.html?tl=dis-tab-2rbmb-flgt-miy-u11e-natt-.-.-.-25bfa6b0c78c&clc=1a1zA01gn1c01bV0%0A&utm_source=taboola&utm_medium=referral&tblci=GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCt4F8o3LiJ24LbxODvAQ#tblciGiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCt4F8o3LiJ24LbxODvAQ","uic":"true","duration":"0","sig":"2cf7a4bf6c416d32aba50db73a112f770e6ebba2593d","item-id":"~~V1~~1633697092414695722~~ftoNu3HFooR8bze_H8iIGMHpLIvqzm6bUUZmB-sOpC9AAKUb7UoTA_K0dcl8gfzG4ezDIaDx1f7q__HlIl2EH8FjEhQKDGU6hzy8lhkFjGj04NiLlIkCdscJlynvusRufe3jmgHZXC04GgECm-uojQ","tblci":"GiAHetbxI3WyGwSPZrjEejrHlwOFU2VmRZ8y6ddW7E6meSCt4F8o3LiJ24LbxODvAQ","uploader":"","is-syndicated":"true","publisher":"mediaplusenginegmbhcokg-bmwspain-sc","id":"~~V1~~1633697092414695722~~ftoNu3HFooR8bze_H8iIGMHpLIvqzm6bUUZmB-sOpC9AAKUb7UoTA_K0dcl8gfzG4ezDIaDx1f7q__HlIl2EH8FjEhQKDGU6hzy8lhkFjGj04NiLlIkCdscJlynvusRufe3jmgHZXC04GgECm-uojQ","views":"0","thrf":"true"}],"fpl":"taboola-below-article-thumbnail_1","cpad":"0px","fb":"1","dlt":"1"}],"tslt":{"p-video-overlay":{"cancel":"Cancelar","goto":"Ir a"},"read-more":{"DEFAULT_CAPTION":"Leer%20M%C3%A1s"},"next-up":{"BTN_TEXT":"Lee el siguiente artículo"},"vignette":{"openBtn":"Descubre más","closeBtn":"Cerrar","sponsored":"Patrocinado"},"time-ago":{"yesterday":"Ayer","hours":"Hace {0} horas","hour":"Hace 1 hora","minutes":"Hace {0} minutos","now":"Ahora","today":"Hoy","days":"Hace {0} dias"},"explore-more":{"POPUP_TEXT":"Echa un vistazo a este contenido antes de irte","TITLE_TEXT":"Sigue leyendo"},"userx":{"popover.content.questionnaire.options.uninteresting":"No es relevante","popover.content.questionnaire.options.racy":"Vulgar","undoBtn.label":"Deshacer","popover.title.scRemoved":"Enlace patrocinado removido","popover.content.questionnaire.options.repetitive":"Repetitivo","popover.title.thankYou":"Gracias","popover.title.removed":"Removido","popover.content.questionnaire.options.offensive":"Ofensivo","popover.content.questionnaire.options.misleading":"Engañoso","removeBtn.title":"Quitar este anuncio","popover.content.questionnaire.tellUsWhy":"¿Dinos por qué?","popover.content.questionnaire.options.other":"Otro","popover.content.approval":"Trataremos de no mostrarte este contenido de nuevo."}},"dcga":{"pubConfigOverride":{"border-color":"black","font-weight":"bold","inherit-title-color":"true","module-name":"cta-lazy-module","enable-call-to-action-creative-component":"true","disable-cta-on-custom-module":"true"}},"voil":"1"}})