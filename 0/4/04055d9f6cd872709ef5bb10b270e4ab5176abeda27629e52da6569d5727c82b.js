/*! elementor-pro - v3.18.0 - 06-12-2023 */
(self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[]).push([[819],{2:(e,t,n)=>{"use strict";var s=n(3203);n(4242);var i=s(n(4774)),o=s(n(9575)),r=s(n(6254)),a=s(n(5161)),l=s(n(5039)),c=s(n(9210)),d=s(n(450)),u=s(n(7660));class ElementorProFrontend extends elementorModules.ViewModule{onInit(){super.onInit(),this.config=ElementorProFrontendConfig,this.modules={},this.initOnReadyComponents()}bindEvents(){jQuery(window).on("elementor/frontend/init",this.onElementorFrontendInit.bind(this))}initModules(){let e={motionFX:i.default,sticky:o.default,codeHighlight:r.default,videoPlaylist:a.default,payments:l.default,progressTracker:c.default};elementorProFrontend.trigger("elementor-pro/modules/init:before"),elementorProFrontend.trigger("elementor-pro/modules/init/before"),e=elementorFrontend.hooks.applyFilters("elementor-pro/frontend/handlers",e),jQuery.each(e,((e,t)=>{this.modules[e]=new t})),this.modules.linkActions={addAction:function(){elementorFrontend.utils.urlActions.addAction(...arguments)}}}onElementorFrontendInit(){this.initModules()}initOnReadyComponents(){this.utils={controls:new d.default,DropdownMenuHeightController:u.default}}}window.elementorProFrontend=new ElementorProFrontend},450:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let s;return s="object"==typeof e[t]&&n?e[t][n]:e[t],s}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const s=elementorFrontend.getCurrentDeviceMode(),i=this.getControlValue(e,t,n);if("widescreen"===s){const s=this.getControlValue(e,`${t}_widescreen`,n);return s||0===s?s:i}const o=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let r=s,a=o.indexOf(s),l="";for(;a<=o.length;){if("desktop"===r){l=i;break}const s=`${t}_${r}`,c=this.getControlValue(e,s,n);if(c||0===c){l=c;break}a++,r=o[a]}return l}}},7660:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class DropdownMenuHeightController{constructor(e){this.widgetConfig=e}calculateStickyMenuNavHeight(){this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName,"");const e=this.widgetConfig.elements.$dropdownMenuContainer.offset().top-jQuery(window).scrollTop();return elementorFrontend.elements.$window.height()-e}calculateMenuTabContentHeight(e){return elementorFrontend.elements.$window.height()-e[0].getBoundingClientRect().top}isElementSticky(){return this.widgetConfig.elements.$element.hasClass("elementor-sticky")||this.widgetConfig.elements.$element.parents(".elementor-sticky").length}getMenuHeight(){return this.isElementSticky()?this.calculateStickyMenuNavHeight()+"px":this.widgetConfig.settings.dropdownMenuContainerMaxHeight}setMenuHeight(e){this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName,e)}reassignMobileMenuHeight(){const e=this.isToggleActive()?this.getMenuHeight():0;return this.setMenuHeight(e)}reassignMenuHeight(e){if(!this.isElementSticky()||0===e.length)return;const t=elementorFrontend.elements.$window.height()-e[0].getBoundingClientRect().top;e.height()>t&&(e.css("height",this.calculateMenuTabContentHeight(e)+"px"),e.css("overflow-y","scroll"))}resetMenuHeight(e){this.isElementSticky()&&(e.css("height","initial"),e.css("overflow-y","visible"))}isToggleActive(){const e=this.widgetConfig.elements.$menuToggle;return this.widgetConfig.attributes?.menuToggleState?"true"===e.attr(this.widgetConfig.attributes.menuToggleState):e.hasClass(this.widgetConfig.classes.menuToggleActiveClass)}}},4242:(e,t,n)=>{"use strict";n.p=ElementorProFrontendConfig.urls.assets+"js/"},6254:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("code-highlight",(()=>n.e(714).then(n.bind(n,8604))))}}t.default=_default},4774:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(3515));class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("global",i.default,null)}}t.default=_default},3515:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(5469));class _default extends elementorModules.frontend.handlers.Base{__construct(){super.__construct(...arguments),this.toggle=elementorFrontend.debounce(this.toggle,200)}getDefaultSettings(){return{selectors:{container:".elementor-widget-container"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$container:this.$element.find(e.container)}}bindEvents(){elementorFrontend.elements.$window.on("resize",this.toggle)}unbindEvents(){elementorFrontend.elements.$window.off("resize",this.toggle)}addCSSTransformEvents(){this.getElementSettings("motion_fx_motion_fx_scrolling")&&!this.isTransitionEventAdded&&(this.isTransitionEventAdded=!0,this.elements.$container.on("mouseenter",(()=>{this.elements.$container.css("--e-transform-transition-duration","")})))}initEffects(){this.effects={translateY:{interaction:"scroll",actions:["translateY"]},translateX:{interaction:"scroll",actions:["translateX"]},rotateZ:{interaction:"scroll",actions:["rotateZ"]},scale:{interaction:"scroll",actions:["scale"]},opacity:{interaction:"scroll",actions:["opacity"]},blur:{interaction:"scroll",actions:["blur"]},mouseTrack:{interaction:"mouseMove",actions:["translateXY"]},tilt:{interaction:"mouseMove",actions:["tilt"]}}}prepareOptions(e){const t=this.getElementSettings(),n="motion_fx"===e?"element":"background",s={};jQuery.each(t,((n,i)=>{const o=new RegExp("^"+e+"_(.+?)_effect"),r=n.match(o);if(!r||!i)return;const a={},l=r[1];jQuery.each(t,((t,n)=>{const s=new RegExp(e+"_"+l+"_(.+)"),i=t.match(s);if(!i)return;"effect"!==i[1]&&("object"==typeof n&&(n=Object.keys(n.sizes).length?n.sizes:n.size),a[i[1]]=n)}));const c=this.effects[l],d=c.interaction;s[d]||(s[d]={}),c.actions.forEach((e=>s[d][e]=a))}));let i,o=this.$element;const r=this.getElementType();if("element"===n&&!["section","container"].includes(r)){let e;i=o,e="column"===r?elementorFrontend.config.legacyMode.elementWrappers?".elementor-column-wrap":".elementor-widget-wrap":".elementor-widget-container",o=o.find("> "+e)}const a={type:n,interactions:s,elementSettings:t,$element:o,$dimensionsElement:i,refreshDimensions:this.isEdit,range:t[e+"_range"],classes:{element:"elementor-motion-effects-element",parent:"elementor-motion-effects-parent",backgroundType:"elementor-motion-effects-element-type-background",container:"elementor-motion-effects-container",layer:"elementor-motion-effects-layer",perspective:"elementor-motion-effects-perspective"}};return a.range||"fixed"!==this.getCurrentDeviceSetting("_position")||(a.range="page"),"fixed"===this.getCurrentDeviceSetting("_position")&&(a.isFixedPosition=!0),"background"===n&&"column"===this.getElementType()&&(a.addBackgroundLayerTo=" > .elementor-element-populated"),a}activate(e){const t=this.prepareOptions(e);jQuery.isEmptyObject(t.interactions)||(this[e]=new i.default(t))}deactivate(e){this[e]&&(this[e].destroy(),delete this[e])}toggle(){const e=elementorFrontend.getCurrentDeviceMode(),t=this.getElementSettings();["motion_fx","background_motion_fx"].forEach((n=>{const s=t[n+"_devices"];(!s||-1!==s.indexOf(e))&&(t[n+"_motion_fx_scrolling"]||t[n+"_motion_fx_mouse"])?this[n]?this.refreshInstance(n):this.activate(n):this.deactivate(n)}))}refreshInstance(e){const t=this[e];if(!t)return;const n=this.prepareOptions(e);t.setSettings(n),t.refresh()}onInit(){super.onInit(),this.initEffects(),this.addCSSTransformEvents(),this.toggle()}onElementChange(e){if(/motion_fx_((scrolling)|(mouse)|(devices))$/.test(e))return"motion_fx_motion_fx_scrolling"===e&&this.addCSSTransformEvents(),void this.toggle();const t=e.match(".*?(motion_fx|_transform)");if(t){const e=t[0].match("(_transform)")?"motion_fx":t[0];this.refreshInstance(e),this[e]||this.activate(e)}/^_position/.test(e)&&["motion_fx","background_motion_fx"].forEach((e=>{this.refreshInstance(e)}))}onDestroy(){super.onDestroy(),["motion_fx","background_motion_fx"].forEach((e=>{this.deactivate(e)}))}}t.default=_default},2292:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{getMovePointFromPassedPercents(e,t){return+(t/e*100).toFixed(2)}getEffectValueFromMovePoint(e,t){return e*t/100}getStep(e,t){return"element"===this.getSettings("type")?this.getElementStep(e,t):this.getBackgroundStep(e,t)}getElementStep(e,t){return-(e-50)*t.speed}getBackgroundStep(e,t){const n=this.getSettings("dimensions.movable"+t.axis.toUpperCase());return-this.getEffectValueFromMovePoint(n,e)}getDirectionMovePoint(e,t,n){let s;return e<n.start?"out-in"===t?s=0:"in-out"===t?s=100:(s=this.getMovePointFromPassedPercents(n.start,e),"in-out-in"===t&&(s=100-s)):e<n.end?"in-out-in"===t?s=0:"out-in-out"===t?s=100:(s=this.getMovePointFromPassedPercents(n.end-n.start,e-n.start),"in-out"===t&&(s=100-s)):"in-out"===t?s=0:"out-in"===t?s=100:(s=this.getMovePointFromPassedPercents(100-n.end,100-e),"in-out-in"===t&&(s=100-s)),s}translateX(e,t){e.axis="x",e.unit="px",this.transform("translateX",t,e)}translateY(e,t){e.axis="y",e.unit="px",this.transform("translateY",t,e)}translateXY(e,t,n){this.translateX(e,t),this.translateY(e,n)}tilt(e,t,n){const s={speed:e.speed/10,direction:e.direction};this.rotateX(s,n),this.rotateY(s,100-t)}rotateX(e,t){e.axis="x",e.unit="deg",this.transform("rotateX",t,e)}rotateY(e,t){e.axis="y",e.unit="deg",this.transform("rotateY",t,e)}rotateZ(e,t){e.unit="deg",this.transform("rotateZ",t,e)}scale(e,t){const n=this.getDirectionMovePoint(t,e.direction,e.range);this.updateRulePart("transform","scale",1+e.speed*n/1e3)}transform(e,t,n){n.direction&&(t=100-t),this.updateRulePart("transform",e,this.getStep(t,n)+n.unit)}setCSSTransformVariables(e){this.CSSTransformVariables=[],jQuery.each(e,((e,t)=>{const n=e.match(/_transform_(.+?)_effect/m);if(n&&t){if("perspective"===n[1])return void this.CSSTransformVariables.unshift(n[1]);if(this.CSSTransformVariables.includes(n[1]))return;this.CSSTransformVariables.push(n[1])}}))}opacity(e,t){const n=this.getDirectionMovePoint(t,e.direction,e.range),s=e.level/10,i=1-s+this.getEffectValueFromMovePoint(s,n);this.$element.css({opacity:i,"will-change":"opacity"})}blur(e,t){const n=this.getDirectionMovePoint(t,e.direction,e.range),s=e.level-this.getEffectValueFromMovePoint(e.level,n);this.updateRulePart("filter","blur",s+"px")}updateRulePart(e,t,n){this.rulesVariables[e]||(this.rulesVariables[e]={}),this.rulesVariables[e][t]||(this.rulesVariables[e][t]=!0,this.updateRule(e));const s=`--${t}`;this.$element[0].style.setProperty(s,n)}updateRule(e){let t="";t+=this.concatTransformCSSProperties(e),t+=this.concatTransformMotionEffectCSSProperties(e),this.$element.css(e,t)}concatTransformCSSProperties(e){let t="";return"transform"===e&&jQuery.each(this.CSSTransformVariables,((e,n)=>{const s=n;n.startsWith("flip")&&(n=n.replace("flip","scale"));const i=n.startsWith("rotate")||n.startsWith("skew")?"deg":"px",o=n.startsWith("scale")?1:0+i;t+=`${n}(var(--e-transform-${s}, ${o}))`})),t}concatTransformMotionEffectCSSProperties(e){let t="";return jQuery.each(this.rulesVariables[e],(e=>{t+=`${e}(var(--${e}))`})),t}runAction(e,t,n){t.affectedRange&&(t.affectedRange.start>n&&(n=t.affectedRange.start),t.affectedRange.end<n&&(n=t.affectedRange.end));for(var s=arguments.length,i=new Array(s>3?s-3:0),o=3;o<s;o++)i[o-3]=arguments[o];this[e](t,n,...i)}refresh(){this.rulesVariables={},this.CSSTransformVariables=[],this.$element.css({transform:"",filter:"",opacity:"","will-change":""})}onInit(){this.$element=this.getSettings("$targetElement"),this.refresh()}}t.default=_default},371:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(3231));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),(0,i.default)(this,"onInsideViewport",(()=>{this.run(),this.animationFrameRequest=requestAnimationFrame(this.onInsideViewport)}))}__construct(e){this.motionFX=e.motionFX,this.intersectionObservers||this.setElementInViewportObserver()}setElementInViewportObserver(){this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport?this.onInsideViewport():this.removeAnimationFrameRequest()}});const e="page"===this.motionFX.getSettings("range")?elementorFrontend.elements.$body[0]:this.motionFX.elements.$parent[0];this.intersectionObserver.observe(e)}runCallback(){this.getSettings("callback")(...arguments)}removeIntersectionObserver(){this.intersectionObserver&&this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0])}removeAnimationFrameRequest(){this.animationFrameRequest&&cancelAnimationFrame(this.animationFrameRequest)}destroy(){this.removeAnimationFrameRequest(),this.removeIntersectionObserver()}onInit(){super.onInit()}}t.default=_default},3802:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(371));class MouseMoveInteraction extends i.default{bindEvents(){MouseMoveInteraction.mouseTracked||(elementorFrontend.elements.$window.on("mousemove",MouseMoveInteraction.updateMousePosition),MouseMoveInteraction.mouseTracked=!0)}run(){const e=MouseMoveInteraction.mousePosition,t=this.oldMousePosition;if(t.x===e.x&&t.y===e.y)return;this.oldMousePosition={x:e.x,y:e.y};const n=100/innerWidth*e.x,s=100/innerHeight*e.y;this.runCallback(n,s)}onInit(){this.oldMousePosition={},super.onInit()}}t.default=MouseMoveInteraction,MouseMoveInteraction.mousePosition={},MouseMoveInteraction.updateMousePosition=e=>{MouseMoveInteraction.mousePosition={x:e.clientX,y:e.clientY}}},5931:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(371));class _default extends i.default{run(){if(pageYOffset===this.windowScrollTop)return!1;this.onScrollMovement(),this.windowScrollTop=pageYOffset}onScrollMovement(){this.updateMotionFxDimensions(),this.updateAnimation(),this.resetTransitionVariable()}resetTransitionVariable(){this.motionFX.$element.css("--e-transform-transition-duration","100ms")}updateMotionFxDimensions(){this.motionFX.getSettings().refreshDimensions&&this.motionFX.defineDimensions()}updateAnimation(){let e;e="page"===this.motionFX.getSettings("range")?elementorModules.utils.Scroll.getPageScrollPercentage():this.motionFX.getSettings("isFixedPosition")?elementorModules.utils.Scroll.getPageScrollPercentage({},window.innerHeight):elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent),this.runCallback(e)}}t.default=_default},5469:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(5931)),o=s(n(3802)),r=s(n(2292));class _default extends elementorModules.ViewModule{getDefaultSettings(){return{type:"element",$element:null,$dimensionsElement:null,addBackgroundLayerTo:null,interactions:{},refreshDimensions:!1,range:"viewport",classes:{element:"motion-fx-element",parent:"motion-fx-parent",backgroundType:"motion-fx-element-type-background",container:"motion-fx-container",layer:"motion-fx-layer",perspective:"motion-fx-perspective"}}}bindEvents(){this.defineDimensions=this.defineDimensions.bind(this),elementorFrontend.elements.$window.on("resize elementor-pro/motion-fx/recalc",this.defineDimensions)}unbindEvents(){elementorFrontend.elements.$window.off("resize elementor-pro/motion-fx/recalc",this.defineDimensions)}addBackgroundLayer(){const e=this.getSettings();this.elements.$motionFXContainer=jQuery("<div>",{class:e.classes.container}),this.elements.$motionFXLayer=jQuery("<div>",{class:e.classes.layer}),this.updateBackgroundLayerSize(),this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);(e.addBackgroundLayerTo?this.$element.find(e.addBackgroundLayerTo):this.$element).prepend(this.elements.$motionFXContainer)}removeBackgroundLayer(){this.elements.$motionFXContainer.remove()}updateBackgroundLayerSize(){const e=this.getSettings(),t={x:0,y:0},n=e.interactions.mouseMove,s=e.interactions.scroll;n&&n.translateXY&&(t.x=10*n.translateXY.speed,t.y=10*n.translateXY.speed),s&&(s.translateX&&(t.x=10*s.translateX.speed),s.translateY&&(t.y=10*s.translateY.speed)),this.elements.$motionFXLayer.css({width:100+t.x+"%",height:100+t.y+"%"})}defineDimensions(){const e=this.getSettings("$dimensionsElement")||this.$element,t=e.offset(),n={elementHeight:e.outerHeight(),elementWidth:e.outerWidth(),elementTop:t.top,elementLeft:t.left};n.elementRange=n.elementHeight+innerHeight,this.setSettings("dimensions",n),"background"===this.getSettings("type")&&this.defineBackgroundLayerDimensions()}defineBackgroundLayerDimensions(){const e=this.getSettings("dimensions");e.layerHeight=this.elements.$motionFXLayer.height(),e.layerWidth=this.elements.$motionFXLayer.width(),e.movableX=e.layerWidth-e.elementWidth,e.movableY=e.layerHeight-e.elementHeight,this.setSettings("dimensions",e)}initInteractionsTypes(){this.interactionsTypes={scroll:i.default,mouseMove:o.default}}prepareSpecialActions(){const e=this.getSettings(),t=!(!e.interactions.mouseMove||!e.interactions.mouseMove.tilt);this.elements.$parent.toggleClass(e.classes.perspective,t)}cleanSpecialActions(){const e=this.getSettings();this.elements.$parent.removeClass(e.classes.perspective)}runInteractions(){var e=this;const t=this.getSettings();this.actions.setCSSTransformVariables(t.elementSettings),this.prepareSpecialActions(),jQuery.each(t.interactions,((t,n)=>{this.interactions[t]=new this.interactionsTypes[t]({motionFX:this,callback:function(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];jQuery.each(n,((t,n)=>e.actions.runAction(t,n,...s)))}}),this.interactions[t].run()}))}destroyInteractions(){this.cleanSpecialActions(),jQuery.each(this.interactions,((e,t)=>t.destroy())),this.interactions={}}refresh(){this.actions.setSettings(this.getSettings()),"background"===this.getSettings("type")&&(this.updateBackgroundLayerSize(),this.defineBackgroundLayerDimensions()),this.actions.refresh(),this.destroyInteractions(),this.runInteractions()}destroy(){this.destroyInteractions(),this.actions.refresh();const e=this.getSettings();this.$element.removeClass(e.classes.element),this.elements.$parent.removeClass(e.classes.parent),"background"===e.type&&(this.$element.removeClass(e.classes.backgroundType),this.removeBackgroundLayer())}onInit(){super.onInit();const e=this.getSettings();this.$element=e.$element,this.elements.$parent=this.$element.parent(),this.$element.addClass(e.classes.element),this.elements.$parent=this.$element.parent(),this.elements.$parent.addClass(e.classes.parent),"background"===e.type&&(this.$element.addClass(e.classes.backgroundType),this.addBackgroundLayer()),this.defineDimensions(),e.$targetElement="element"===e.type?this.$element:this.elements.$motionFXLayer,this.interactions={},this.actions=new r.default(e),this.initInteractionsTypes(),this.runInteractions()}}t.default=_default},5039:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("paypal-button",(()=>n.e(256).then(n.bind(n,4452)))),elementorFrontend.elementsHandler.attachHandler("stripe-button",(()=>Promise.all([n.e(699),n.e(156)]).then(n.bind(n,7121))))}}t.default=_default},9210:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("progress-tracker",(()=>n.e(241).then(n.bind(n,2177))))}}t.default=_default},9575:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(2090));class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("section",i.default,null),elementorFrontend.elementsHandler.attachHandler("container",i.default,null),elementorFrontend.elementsHandler.attachHandler("widget",i.default,null)}}t.default=_default},2090:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=elementorModules.frontend.handlers.Base.extend({currentConfig:{},debouncedReactivate:null,bindEvents(){elementorFrontend.addListenerOnce(this.getUniqueHandlerID()+"sticky","resize",this.reactivateOnResize)},unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID()+"sticky","resize",this.reactivateOnResize)},isStickyInstanceActive(){return void 0!==this.$element.data("sticky")},getResponsiveSetting(e){const t=this.getElementSettings();return elementorFrontend.getCurrentDeviceSetting(t,e)},getResponsiveSettingList:e=>["",...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((t=>t?`${e}_${t}`:e)),getConfig(){const e=this.getElementSettings(),t={to:e.sticky,offset:this.getResponsiveSetting("sticky_offset"),effectsOffset:this.getResponsiveSetting("sticky_effects_offset"),classes:{sticky:"elementor-sticky",stickyActive:"elementor-sticky--active elementor-section--handles-inside",stickyEffects:"elementor-sticky--effects",spacer:"elementor-sticky__spacer"},isRTL:elementorFrontend.config.is_rtl,handleScrollbarWidth:elementorFrontend.isEditMode()},n=elementorFrontend.elements.$wpAdminBar,s=this.isContainerElement(this.$element[0])&&!this.isContainerElement(this.$element[0].parentElement);return n.length&&"top"===e.sticky&&"fixed"===n.css("position")&&(t.offset+=n.height()),e.sticky_parent&&!s&&(t.parent=".e-container, .e-container__inner, .e-con, .e-con-inner, .elementor-widget-wrap"),t},activate(){this.currentConfig=this.getConfig(),this.$element.sticky(this.currentConfig)},deactivate(){this.isStickyInstanceActive()&&this.$element.sticky("destroy")},run(e){if(this.getElementSettings("sticky")){var t=elementorFrontend.getCurrentDeviceMode();-1!==this.getElementSettings("sticky_on").indexOf(t)?!0===e?this.reactivate():this.isStickyInstanceActive()||this.activate():this.deactivate()}else this.deactivate()},reactivateOnResize(){clearTimeout(this.debouncedReactivate),this.debouncedReactivate=setTimeout((()=>{const e=this.getConfig();JSON.stringify(e)!==JSON.stringify(this.currentConfig)&&this.run(!0)}),300)},reactivate(){this.deactivate(),this.activate()},onElementChange(e){-1!==["sticky","sticky_on"].indexOf(e)&&this.run(!0);-1!==[...this.getResponsiveSettingList("sticky_offset"),...this.getResponsiveSettingList("sticky_effects_offset"),"sticky_parent"].indexOf(e)&&this.reactivate()},onDeviceModeChange(){setTimeout((()=>this.run(!0)))},onInit(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),elementorFrontend.isEditMode()&&elementor.listenTo(elementor.channels.deviceMode,"change",(()=>this.onDeviceModeChange())),this.run()},onDestroy(){elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this,arguments),this.deactivate()},isContainerElement:e=>["e-container","e-container__inner","e-con","e-con-inner"].some((t=>e?.classList.contains(t)))})},5161:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.hooks.addAction("frontend/element_ready/video-playlist.default",(e=>{n.e(721).then(n.bind(n,1580)).then((t=>{let{default:n}=t;elementorFrontend.elementsHandler.addHandler(n,{$element:e,toggleSelf:!1})}))}))}}t.default=_default},3231:(e,t,n)=>{var s=n(4040);e.exports=function _defineProperty(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6027:(e,t,n)=>{var s=n(7501).default;e.exports=function _toPrimitive(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4040:(e,t,n)=>{var s=n(7501).default,i=n(6027);e.exports=function _toPropertyKey(e){var t=i(e,"string");return"symbol"===s(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},7501:e=>{function _typeof(t){return e.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,_typeof(t)}e.exports=_typeof,e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=2,e(e.s=t)}]);://forbes.cz/wp-includes/js/jquery/jquery.min.js?ver=3.6.3' id='jquery-core-js'></script>
<script type='text/javascript' src='https://forbes.cz/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0' id='jquery-migrate-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/quantcast.min.js?ver=1704490185' id='quantcast-script-js'></script>
<link rel="https://api.w.org/" href="https://forbes.cz/wp-json/" /><link rel="alternate" type="application/json" href="https://forbes.cz/wp-json/wp/v2/pages/13" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://forbes.cz/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://forbes.cz/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 6.2" />
<link rel='shortlink' href='https://forbes.cz/' />
<link rel="alternate" type="application/json+oembed" href="https://forbes.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fforbes.cz%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://forbes.cz/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fforbes.cz%2F&#038;format=xml" />

		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-bold.woff" as="font" type="font/woff" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-light.woff" as="font" type="font/woff2" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-light.woff2" as="font" type="font/woff2" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-regular.woff" as="font" type="font/woff2" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-medium.woff" as="font" type="font/woff2" crossorigin="anonymous">
		<link rel="preload" href="https://assets.forbesmedia.cz/wp-content/themes/frontend/assets/fonts/ubuntu/ubuntu-medium.woff2" as="font" type="font/woff2" crossorigin="anonymous">
		<script async src="https://cdn.performax.cz/yi/adsbypx/px_autoads.js?aab=ulite"></script>
	<link rel="stylesheet" href="https://cdn.performax.cz/yi/adsbypx/px_autoads.css"/>
	<script src="https://cdn.performax.cz/yi/openwrap/openwrap_9695_forbes_cz.js"></script>

	<script type="text/javascript" src="https://c.seznam.cz/js/rc.js"></script>
	<script>
	  var retargetingConf = { rtgId: 42743 };
	  if (window.rc && window.rc.retargetingHit) {
		window.rc.retargetingHit(retargetingConf);
	  }
	</script><link rel="icon" href="https://cz.forbesmedia.cz/uploads/2023/06/cropped-favicon.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6InBuZyJ9" sizes="32x32" />
<link rel="icon" href="https://cz.forbesmedia.cz/uploads/2023/06/cropped-favicon.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6InBuZyJ9" sizes="192x192" />
<link rel="apple-touch-icon" href="https://cz.forbesmedia.cz/uploads/2023/06/cropped-favicon.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6InBuZyJ9" />
<meta name="msapplication-TileImage" content="https://cz.forbesmedia.cz/uploads/2023/06/cropped-favicon.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6InBuZyJ9" />
		<style type="text/css" id="wp-custom-css">
			.home-category-type-b__slider .splide__list {
height: 100%;
}

.navigation__bottom-row {
	position: relative;
}

.navigation .splide__track {
	overflow: visible;
}

.interscroller-ad-block__wrapper {
	clip: rect(0px, 450px, 450px, 0px) !important;
}		</style>
		

	<!-- Google Tag Manager -->
	<script defer>
		(function(w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start': new Date().getTime(),
				event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src =
				'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-PR274Z');
	</script>
	<!-- End Google Tag Manager -->

	<!-- Temporary ads script for CZ -->
	
	<style>
		:root {
			--googlead-text: "▴ Reklama";
			--googlead-text-no-arrow: "reklama";
			--googlead-close-text: "Zavřít reklamu";
		}
	</style>
</head>

<body class="home page-template page-template-page-home page-template-page-home-php page page-id-13">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 0.49803921568627" /><feFuncG type="table" tableValues="0 0.49803921568627" /><feFuncB type="table" tableValues="0 0.49803921568627" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 0.27843137254902" /><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 0" /><feFuncG type="table" tableValues="0 0.64705882352941" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.78039215686275 1" /><feFuncG type="table" tableValues="0 0.94901960784314" /><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.44705882352941 0.4" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.098039215686275 1" /><feFuncG type="table" tableValues="0 0.66274509803922" /><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg>	<script type="text/javascript">
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "e4zgyfj262");
	</script>
	
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PR274Z" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

	<!-- Temporary ads script for CZ -->
	
	
	
<script type="text/javascript">
	var pp_gemius_identifier = '1vBKgasIK50sWBV_C1AZxOVy3w6FxK8FImoUc3RvBFX.M7';
	var pp_gemius_browser_lib_loaded = window['pp_gemius_browser_lib_loaded'] || false;
	var pp_gemius_init_timeout = 2500;
	var pp_gemius_use_cmp = true;

	function gemius_pending(i) {
		window[i] = window[i] || function() {
			var x = window[i + '_pdata'] = window[i + '_pdata'] || [];
			x[x.length] = arguments;
		};
	};

	gemius_pending('gemius_hit');
	gemius_pending('gemius_event');
	gemius_pending('pp_gemius_hit');
	gemius_pending('pp_gemius_event');

	(function(d, t) {
		try {
			var gt = d.createElement(t),
				s = d.getElementsByTagName(t)[0],
				l = 'http' + ((location.protocol == 'https:') ? 's' : '');
			gt.setAttribute('async', 'async');
			gt.setAttribute('defer', 'defer');
			gt.src = l + '://spir.hit.gemius.pl/xgemius.js';
			s.parentNode.insertBefore(gt, s);
		} catch (e) {}
	})(document, 'script');
</script>

	<noscript>
		<div class="noscript">
	</noscript>

	<div class="view-mode loading">

				
			
			
				<!-- Google Ad Manager Branding -->
				<div class="gam-branding">

					<div class="gam-branding__placeholder">
						<div id="gam-branding" class="gam-branding__placeholder-inner"></div>
					</div>

					<div class="gam-branding__ad-container">

						<a href="#" class="gam-branding__top gam-branding__top--a"></a>
						<a href="#" class="gam-branding__top gam-branding__top--b"></a>
						<a href="#" class="gam-branding__top gam-branding__top--c"></a>
						<a href="#" class="gam-branding__left"></a>
						<a href="#" class="gam-branding__right"></a>

					</div>

				</div>

						
				
<section  class="googlead-container googlead-container--leaderboard ">

	<div id="leaderboard-ad" class="googlead h-m--auto h-d--flex h-flex--column h-align-items--center"></div>
	
</section>


			
		
		
<div class="search-modal ">

	<div class="search ">

		<div class="container search__container h-height--full">

			<div class="search__header">

				
<a class="main-logo" href="/">
	
		<img class="main-logo__image h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_gray.svg" alt="">

	
	
		<img class="main-logo__image main-logo__image--dark h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_white.svg" alt="">

	</a>

				<button id="search-closer-btn" class="button-icon" aria-label="Close Search">

					<i class="icon icon--cross h-bgcolor--amber600"></i>

				</button>

			</div>

			<div class="search__body">

				<div class="row">

					<div class="h-col--10 h-col--lg--12 h-offset--1 h-offset--lg--0 h-d--flex h-flex--column">

						<div class="search__text-input-wrapper">

							<input id="search-field" class="search__text-field lead" type="text" placeholder="Vyhledávání" autocomplete="off">

							<button id="search-button" class="search__submit-button button-icon" aria-label="Init Search">

								<i class="icon icon--search h-bgcolor--low"></i>

							</button>

						</div>

					</div>

				</div>

				<div class="row">

					<div class="h-col--10 h-col--lg--12 h-offset--1 h-offset--lg--0 h-d--flex h-flex--column">

						<div id="search-categories-wrapper" class="search__result-categories-wrapper"></div>

					</div>

				</div>

				<div class="row search__results-wrapper">

					<div class="h-col--10 h-col--lg--12 h-offset--1 h-offset--lg--0 h-d--flex h-flex--column">

						<div class="row">

							<div class="h-col--8 h-col--xl--10 h-col--lg--12">

								<div id="search-loading" class="search__loading-wrapper">

									<h4 class="search__loading-text">Vyhledávání...</h4>

								</div>

								<div id="posts-wrapper">

									<div id="author-results" class="search__results"></div>
									<div id="lists-results" class="search__results"></div>
									<div id="search-results" class="search__results"></div>
									<h4 class="search__no-result-text">Nebyly nalezeny žádné výsledky. Zkuste prosím zadat jiné klíčové slovo!</h4>

									<button id="load-more" class="search__load-more button button--medium button-primary" data-loading="Načítání...">Načíst další články...</button>

								</div>

							</div>

							<div class="h-col--4 h-d--xl--none">

								<div class="search__ad-container search__ad-container--desktop googlead-container">

									<div id="search-ad-desktop" class="googlead"></div>

								</div>

							</div>

						</div>

					</div>

				</div>

				<div class="row">

					<div class="h-col--10 h-col--lg--12 h-offset--1 h-offset--lg--0 h-d--flex h-flex--column">

						<div id="before-search" class="search__before-search-wrapper">

							<h4 class="h-text--md--center">

								...nebo si přečtěte rubriky
							</h4>

							
								<div class="search__featured-taxonomies">

									
										
										
											<a href="https://forbes.cz/tag/byznys/" class="search__featured-taxonomy h-mx--20 h-mx--md--16">
												Byznys											</a>

										
									
										
										
											<a href="https://forbes.cz/tag/technologie/" class="search__featured-taxonomy h-mx--20 h-mx--md--16">
												Technologie											</a>

										
									
										
										
											<a href="https://forbes.cz/tag/forbes-life/" class="search__featured-taxonomy h-mx--20 h-mx--md--16">
												Forbes Life											</a>

										
									
								</div>

							
						</div>

					</div>

				</div>

			</div>

		</div>

	</div>

</div>

<header class="navigation">

	<div class="container">

		<div class="navigation__top-row h-py--20 h-d--flex h-justify-content--between">

			
<a class="main-logo" href="/">
	
		<img class="main-logo__image h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_gray.svg" alt="">

	
	
		<img class="main-logo__image main-logo__image--dark h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_white.svg" alt="">

	</a>

			<div class="h-d--flex">

				<div class="navigation__icons h-d--flex h-ml--40 h-ml--lg--25 h-ml--sm--16">

					
						<a class="navigation__subscription-button cta-link-tag h-mr--30 h-mr--lg--20" href="https://predplatne.forbes.cz/">Předplatné</a>

					
					
						
							<button class="navigation__user-button" aria-label="User"></button>

						
					
					<button class="button-icon search-opener-btn" aria-label="Search">
						<i class="icon icon--search h-bgcolor--low"></i>
					</button>

					<button id="handheld-opener-btn" class="button-icon" aria-label="Menu">
						<i class="icon icon--menu h-bgcolor--low"></i>
					</button>

				</div>

			</div>

		</div>

		<div class="navigation__bottom-row h-d--lg--none " aria-label="Splide">

			<div class="navigation__bottom-row-wrapper h-m--0 h-mt--32">

				<ul class="navigation__bottom-row-inner">

					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/tag/byznys/" class="cta-main  h-m--0 h-color--low">
									Byznys								</a>

								
									

	<div class="nav-hover-modal">

		<div class="nav-hover-modal__subcategories-wrapper">

			<div class="nav-hover-modal__subcategories two-columns">

				
					
					<a href="https://forbes.cz/tag/miliardari/" class="nav-hover-modal__subcategory cta-link-tag">Miliardáři</a>

				
					
					<a href="https://forbes.cz/tag/cesky-byznys/" class="nav-hover-modal__subcategory cta-link-tag">Český byznys</a>

				
					
					<a href="https://forbes.cz/tag/svetovy-byznys/" class="nav-hover-modal__subcategory cta-link-tag">Světový byznys</a>

				
					
					<a href="https://forbes.cz/tag/breaking-news/" class="nav-hover-modal__subcategory cta-link-tag">Breaking News</a>

				
					
					<a href="https://forbes.cz/tag/rozhovor/" class="nav-hover-modal__subcategory cta-link-tag">Rozhovor</a>

				
					
					<a href="https://forbes.cz/tag/penize/" class="nav-hover-modal__subcategory cta-link-tag">Peníze</a>

				
					
					<a href="https://forbes.cz/tag/investice/" class="nav-hover-modal__subcategory cta-link-tag">Investice</a>

				
					
					<a href="https://forbes.cz/tag/nemovitosti/" class="nav-hover-modal__subcategory cta-link-tag">Nemovitosti</a>

				
					
					<a href="https://forbes.cz/tag/kryptomeny/" class="nav-hover-modal__subcategory cta-link-tag">Kryptoměny</a>

				
					
					<a href="https://forbes.cz/tag/technologie/" class="nav-hover-modal__subcategory cta-link-tag">Technologie</a>

				
					
					<a href="https://forbes.cz/tag/start-ups/" class="nav-hover-modal__subcategory cta-link-tag">Startupy</a>

				
					
					<a href="https://newslettery.forbes.cz/espresso/" class="nav-hover-modal__subcategory cta-link-tag">Newsletter Espresso</a>

				
					
					<a href="https://newslettery.forbes.cz/cryptoshot/" class="nav-hover-modal__subcategory cta-link-tag">Newsletter Cryptoshot</a>

				
					
					<a href="https://forbes.cz/tag/brandvoice-byznys/" class="nav-hover-modal__subcategory cta-link-tag">BrandVoice Byznys</a>

				
					
					<a href="https://forbes.cz/advoice/" class="nav-hover-modal__subcategory cta-link-tag">AdVoice</a>

				
			</div>

			<div class="nav-hover-modal__archive-link-wrapper">

				<a href="https://forbes.cz/tag/byznys/" class="nav-hover-modal__archive-link cta-link-tag after-icon after-icon--arrow">Zobrazit více</a>

			</div>

		</div>

		
			<div class="nav-hover-modal__magazine-wrapper">

				<span class="nav-hover-modal__magazine-label cta-link-tag">Poslední vydání</span>

				<div class="nav-hover-modal__magazine-inner-wrapper">

					<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/">
						<div class="nav-hover-modal__magazine-container">

							
								<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/f01-cover-2024-bezean-150dpi.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="nav-hover-modal__magazine wp-post-image" alt="Jak žít dobře a&nbsp;dlouho" decoding="async" loading="lazy" />
							
						</div>
					</a>

					<div class="nav-hover-modal__text-container">

						
							<p class="nav-hover-modal__magazine-excerpt">

								Žij dobře a&nbsp;dlouho! Lednový Forbes přichází s&nbsp;návodem, jak na to. Vyzkoušejte 24 tipů, jak si prodloužit život, a&nbsp;seznamte se s&nbsp;výběrem padesáti nejlepších lékařů Česka. Zjistěte, jestli stojí za to nechat se pro prodloužení života zmrazit nebo třeba hladovět. Přečtěte si rozhovor se Sotiriosem Zavalianisem o&nbsp;tom, jak se z&nbsp;kluka z&nbsp;horské řecké vesnice stal jeden z&nbsp;největších podnikatelů [&hellip;]
							</p>

						
						<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/" class="nav-hover-modal__magazine-link cta-link-tag after-icon after-icon--arrow">Zjistěte více!</a>

					</div>

				</div>

			</div>

		
	</div>


								
							</li>

						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/tag/forbes-life/" class="cta-main  h-m--0 h-color--low">
									Life								</a>

								
									

	<div class="nav-hover-modal">

		<div class="nav-hover-modal__subcategories-wrapper">

			<div class="nav-hover-modal__subcategories two-columns">

				
					
					<a href="https://forbes.cz/tag/forbes-cooking/" class="nav-hover-modal__subcategory cta-link-tag">Forbes Cooking</a>

				
					
					<a href="https://forbes.cz/tag/gastronomie/" class="nav-hover-modal__subcategory cta-link-tag">Gastronomie</a>

				
					
					<a href="https://forbes.cz/tag/jidlo/" class="nav-hover-modal__subcategory cta-link-tag">Jídlo</a>

				
					
					<a href="https://forbes.cz/tag/cestovani/" class="nav-hover-modal__subcategory cta-link-tag">Cestování</a>

				
					
					<a href="https://forbes.cz/tag/auta/" class="nav-hover-modal__subcategory cta-link-tag">Auta</a>

				
					
					<a href="https://forbes.cz/tag/kultura/" class="nav-hover-modal__subcategory cta-link-tag">Kultura</a>

				
					
					<a href="https://forbes.cz/tag/umeni/" class="nav-hover-modal__subcategory cta-link-tag">Umění</a>

				
					
					<a href="https://forbes.cz/tag/architektura/" class="nav-hover-modal__subcategory cta-link-tag">Architektura</a>

				
					
					<a href="https://forbes.cz/tag/moda/" class="nav-hover-modal__subcategory cta-link-tag">Móda</a>

				
					
					<a href="https://forbes.cz/lifepdcst/" class="nav-hover-modal__subcategory cta-link-tag">Podcast Forbes Life!</a>

				
					
					<a href="https://newslettery.forbes.cz/cocktail/" class="nav-hover-modal__subcategory cta-link-tag">Newsletter Cocktail</a>

				
					
					<a href="https://forbes.cz/tag/brandvoice-lifestyle/" class="nav-hover-modal__subcategory cta-link-tag">BrandVoice Lifestyle</a>

				
					
					<a href="https://forbes.cz/advoice/" class="nav-hover-modal__subcategory cta-link-tag">AdVoice</a>

				
			</div>

			<div class="nav-hover-modal__archive-link-wrapper">

				<a href="https://forbes.cz/tag/forbes-life/" class="nav-hover-modal__archive-link cta-link-tag after-icon after-icon--arrow">Zobrazit více</a>

			</div>

		</div>

		
			<div class="nav-hover-modal__magazine-wrapper">

				<span class="nav-hover-modal__magazine-label cta-link-tag">Poslední vydání</span>

				<div class="nav-hover-modal__magazine-inner-wrapper">

					<a href="https://forbes.cz/magazin/forbes-life-2023/">
						<div class="nav-hover-modal__magazine-container">

							
								<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/06/000-cover-v5-converted-1.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="nav-hover-modal__magazine wp-post-image" alt="Forbes Life 2023" decoding="async" loading="lazy" />
							
						</div>
					</a>

					<div class="nav-hover-modal__text-container">

						
							<p class="nav-hover-modal__magazine-excerpt">

								Mimořádné vydání magazínu Forbes Life letos bude vaším nejlepším společníkem nejen na pláži. Připravili jsme pro vás výběr nejlepších šéfkuchařů Česka a&nbsp;ve velkém rozhovoru jsme vyzpovídali jednoho z&nbsp;nich – osminásobného obhajitele michelinské hvězdy Oldřicha Sahajdáka. Vypravili jsme se do Itálie za Čechem Ondřejem Sturcem, na jehož gelato chodí i&nbsp;nároční Italové, a&nbsp;do Slovinska za Anou Roš, [&hellip;]
							</p>

						
						<a href="https://forbes.cz/magazin/forbes-life-2023/" class="nav-hover-modal__magazine-link cta-link-tag after-icon after-icon--arrow">Zjistěte více!</a>

					</div>

				</div>

			</div>

		
	</div>


								
							</li>

						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/forbes-zebricky/" class="cta-main  h-m--0 h-color--low">
									Žebříčky								</a>

								
									

	<div class="nav-hover-modal">

		<div class="nav-hover-modal__subcategories-wrapper">

			<div class="nav-hover-modal__subcategories">

				
					
					<a href="https://miliardari.forbes.cz/" class="nav-hover-modal__subcategory cta-link-tag">Nejbohatší Češi</a>

				
					
					<a href="https://nejbohatsilide.forbes.cz/" class="nav-hover-modal__subcategory cta-link-tag">Nejbohatší lidé světa</a>

				
					
					<a href="https://forbes.cz/30pod30/" class="nav-hover-modal__subcategory cta-link-tag">30 pod 30</a>

				
			</div>

			<div class="nav-hover-modal__archive-link-wrapper">

				<a href="https://forbes.cz/forbes-zebricky/" class="nav-hover-modal__archive-link cta-link-tag after-icon after-icon--arrow">Zobrazit více</a>

			</div>

		</div>

		
			<div class="nav-hover-modal__magazine-wrapper">

				<span class="nav-hover-modal__magazine-label cta-link-tag">Poslední vydání</span>

				<div class="nav-hover-modal__magazine-inner-wrapper">

					<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/">
						<div class="nav-hover-modal__magazine-container">

							
								<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/f01-cover-2024-bezean-150dpi.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="nav-hover-modal__magazine wp-post-image" alt="Jak žít dobře a&nbsp;dlouho" decoding="async" loading="lazy" />
							
						</div>
					</a>

					<div class="nav-hover-modal__text-container">

						
							<p class="nav-hover-modal__magazine-excerpt">

								Žij dobře a&nbsp;dlouho! Lednový Forbes přichází s&nbsp;návodem, jak na to. Vyzkoušejte 24 tipů, jak si prodloužit život, a&nbsp;seznamte se s&nbsp;výběrem padesáti nejlepších lékařů Česka. Zjistěte, jestli stojí za to nechat se pro prodloužení života zmrazit nebo třeba hladovět. Přečtěte si rozhovor se Sotiriosem Zavalianisem o&nbsp;tom, jak se z&nbsp;kluka z&nbsp;horské řecké vesnice stal jeden z&nbsp;největších podnikatelů [&hellip;]
							</p>

						
						<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/" class="nav-hover-modal__magazine-link cta-link-tag after-icon after-icon--arrow">Zjistěte více!</a>

					</div>

				</div>

			</div>

		
	</div>


								
							</li>

						
					
						
					
						
					
						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/tag/specialy/" class="cta-main  h-m--0 h-color--low">
									Speciály								</a>

								
									

								
							</li>

						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/komentare/" class="cta-main  h-m--0 h-color--low">
									Názory								</a>

								
									

								
							</li>

						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/tag/jak-byt-lepsi/" class="cta-main  h-m--0 h-color--low">
									Jak být lepší								</a>

								
									

								
							</li>

						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/tag/forbes-woman/" class="cta-main  h-m--0 h-color--low">
									Woman								</a>

								
									

								
							</li>

						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/tag/forbes-podcast/" class="cta-main  h-m--0 h-color--low">
									Podcasty								</a>

								
									

	<div class="nav-hover-modal">

		<div class="nav-hover-modal__subcategories-wrapper">

			<div class="nav-hover-modal__subcategories">

				
					
					<a href="https://forbes.cz/tag/zivot-je-bohaty/" class="nav-hover-modal__subcategory cta-link-tag">Život je bohatý</a>

				
					
					<a href="https://forbes.cz/tag/funny-money/" class="nav-hover-modal__subcategory cta-link-tag">Funny Money</a>

				
					
					<a href="https://forbes.cz/tag/podcast-jak-byt-lepsi/" class="nav-hover-modal__subcategory cta-link-tag">Jak být lepší</a>

				
					
					<a href="https://forbes.cz/tag/podcast-forbes-life/" class="nav-hover-modal__subcategory cta-link-tag">Forbes Life!</a>

				
					
					<a href="https://forbes.cz/tag/podcast-byznys/" class="nav-hover-modal__subcategory cta-link-tag">Byznys</a>

				
					
					<a href="https://forbes.cz/tag/closer/" class="nav-hover-modal__subcategory cta-link-tag">Closer</a>

				
			</div>

			<div class="nav-hover-modal__archive-link-wrapper">

				<a href="https://forbes.cz/tag/forbes-podcast/" class="nav-hover-modal__archive-link cta-link-tag after-icon after-icon--arrow">Zobrazit více</a>

			</div>

		</div>

		
			<div class="nav-hover-modal__magazine-wrapper">

				<span class="nav-hover-modal__magazine-label cta-link-tag">Poslední vydání</span>

				<div class="nav-hover-modal__magazine-inner-wrapper">

					<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/">
						<div class="nav-hover-modal__magazine-container">

							
								<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/f01-cover-2024-bezean-150dpi.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="nav-hover-modal__magazine wp-post-image" alt="Jak žít dobře a&nbsp;dlouho" decoding="async" loading="lazy" />
							
						</div>
					</a>

					<div class="nav-hover-modal__text-container">

						
							<p class="nav-hover-modal__magazine-excerpt">

								Žij dobře a&nbsp;dlouho! Lednový Forbes přichází s&nbsp;návodem, jak na to. Vyzkoušejte 24 tipů, jak si prodloužit život, a&nbsp;seznamte se s&nbsp;výběrem padesáti nejlepších lékařů Česka. Zjistěte, jestli stojí za to nechat se pro prodloužení života zmrazit nebo třeba hladovět. Přečtěte si rozhovor se Sotiriosem Zavalianisem o&nbsp;tom, jak se z&nbsp;kluka z&nbsp;horské řecké vesnice stal jeden z&nbsp;největších podnikatelů [&hellip;]
							</p>

						
						<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/" class="nav-hover-modal__magazine-link cta-link-tag after-icon after-icon--arrow">Zjistěte více!</a>

					</div>

				</div>

			</div>

		
	</div>


								
							</li>

						
					
						
					
						
					
						
					
						
					
						
					
						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/eventy/" class="cta-main  h-m--0 h-color--low">
									Eventy								</a>

								
									

								
							</li>

						
					
						
							<li class="navigation__menu-item">

								<a href="https://forbes.cz/premium/" class="cta-main highlight h-m--0 h-color--low">
									Premium								</a>

								
									

								
							</li>

						
					
				</ul>

			</div>

		</div>

		
			<div class="logged-in-modal">

	<div class="container">

		<div id="mobile-close-button" class="mobile-close-button logged-in-modal__close-button"></div>

		<div class="logged-in-modal__content-wrapper">

		</div>

	</div>

</div>



			<div class="navigation__login-wrapper">

				
<div class="remp-login-form">
	<div id="mobile-close-button" class="mobile-close-button remp-login-form__close-button"></div>
	<form class="paywall-form" action="https://predplatne.forbes.cz/api/v1/users/login/">
		<h3>Předplatné Forbes.cz</h3>
		<div class="paywall-form-control">
			<input type="email" class="paywall-form-input" placeholder="E-mail" name="email">
		</div>
		<div class="paywall-form-control">
			<input type="password" class="paywall-form-input" placeholder="Heslo" name="password">
		</div>
		<div class="paywall-form-login-wrapper">
			<button id="remp-login" class="button view-lifted button-primary button--medium">Přihlásit</button>
			<a href="https://predplatne.forbes.cz/users/users/request-password">Zapomenuté heslo?</a>
		</div>
		nebo
		<div class="paywall-form-registration-wrapper">
			<a class="button view-lifted button-primary button--medium" href="">Přidat se k předplatitelům</a>
		</div>
	</form>
</div>

			</div>

		
	</div>

	<!-- Handheld menu -->
	
<div class="handheld-menu-wrapper">

	<div class="handheld-menu">

		<div class="main-menu h-height--full h-d--flex h-flex--column h-justify-content--between">

			<div class="handheld-menu__container handheld-menu__header h-py--20">

				
<a class="main-logo" href="/">
	
		<img class="main-logo__image h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_gray.svg" alt="">

	
	
		<img class="main-logo__image main-logo__image--dark h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_white.svg" alt="">

	</a>

				<button class="handheld-menu-closer-btn button-icon" aria-label="Close Menu">
					<i class="icon icon--cross h-bgcolor--amber600"></i>
				</button>

			</div>

			<div class="handheld-menu__container handheld-menu__main h-mb--60">

				<section class="handheld-menu__menu h-mb--12">

					<ul class="handheld-menu__menu-item-list">

						
							<a class="navigation__subscription-button navigation__subscription-button--mobile handheld-menu__menu-item cta-link-tag" href="https://predplatne.forbes.cz/">Předplatné</a>

						
						<li class="handheld-menu__menu-item small-screen-search">
							<button class="button-icon search-opener-btn h-d--flex h-align-items--center cta-link-tag h-m--0 h-color--low submenu-opener" aria-label="Search">
								<i class="icon icon--search h-bgcolor--low"></i>
								Vyhledat na Forbesu							</button>
						</li>

						
							<li id="dark-mode-toggle" class="handheld-menu__menu-item handheld-menu__menu-item--dark-mode">

								<div class="h-d--flex h-align-items--center">

									<div class="handheld-menu__night-icon"></div>

									<span class="handheld-menu__night-label cta-link-tag h-m--0 h-color--low">Tmavý režim</span>

								</div>

								<div class="handheld-menu__night-checkbox">

									<div class="handheld-menu__night-checkbox-inner"></div>

								</div>

							</li>

						
						
							<li class="handheld-menu__menu-item">

								
								<a href="" id="546934" class="cta-link-tag h-m--0 h-color--low submenu-opener " >
									
										<div class="handheld-menu__menu-item-icon"></div>

									
									Forbes v zahraničí								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/byznys/" id="327573" class="cta-link-tag h-m--0 h-color--low  " >
									
									Byznys								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/forbes-life/" id="335324" class="cta-link-tag h-m--0 h-color--low  " >
									
									Life								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/forbes-zebricky/" id="477246" class="cta-link-tag h-m--0 h-color--low  " >
									
									Žebříčky								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/specialy/" id="477247" class="cta-link-tag h-m--0 h-color--low  " >
									
									Speciály								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/komentar/" id="335326" class="cta-link-tag h-m--0 h-color--low  " >
									
									Názory								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/jak-byt-lepsi/" id="335325" class="cta-link-tag h-m--0 h-color--low  " >
									
									Jak být lepší								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/forbes-woman/" id="416727" class="cta-link-tag h-m--0 h-color--low  " >
									
									Woman								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/breaking-news/" id="335369" class="cta-link-tag h-m--0 h-color--low  " >
									
									Breaking News								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/podcasty/" id="335330" class="cta-link-tag h-m--0 h-color--low  " >
									
									Podcasty								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://newslettery.forbes.cz/" id="335334" class="cta-link-tag h-m--0 h-color--low  " >
									
									Newslettery								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/premium/" id="335332" class="cta-link-tag h-m--0 h-color--low  " >
									
									Premium								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/brandvoice/" id="335354" class="cta-link-tag h-m--0 h-color--low  " >
									
									BrandVoice								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/tag/advoice/" id="335352" class="cta-link-tag h-m--0 h-color--low  " >
									
									AdVoice								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://predplatne.forbes.cz/products/shop" id="335351" class="cta-link-tag h-m--0 h-color--low  " >
									
									Obchod								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/eventy/" id="335776" class="cta-link-tag h-m--0 h-color--low  " >
									
									Eventy								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://jobs.forbes.cz/" id="424864" class="cta-link-tag h-m--0 h-color--low  " >
									
									Forbes Jobs								</a>

							</li>

						
							<li class="handheld-menu__menu-item">

								
								<a href="https://forbes.cz/inzerce/" id="335348" class="cta-link-tag h-m--0 h-color--low  " >
									
									Inzerce								</a>

							</li>

						
					</ul>

				</section>

				
					<section class="handheld-menu__contact">

						<div class="handheld-menu__menu-item h-py--18">

							<a href="https://forbes.cz/kontakty/" class="cta-link-tag h-m--0 h-color--low">
								Kontakty							</a>

						</div>

						<span class="callout">Revoluční 724/7, 110 00 Praha 1</span>

						<span class="callout"></span>

						<a class="h-fs--16" href="mailto:">
													</a>

						<a class="h-fs--16" href="tel:+420 228 225 093">
							+420 228 225 093						</a>

					</section>

				
			</div>

			<div class="handheld-menu__container handheld-menu__footer h-py--16 h-bgcolor--background-1">

				<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/" class="cta-link-tag h-mb--16">
					Poslední vydání				</a>

				<div class="magazine">

					<a class="magazine__image-wrapper" href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/">
						<img src="https://cz.forbesmedia.cz/uploads/2024/01/f01-cover-2024-bezean-150dpi.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Jak žít dobře a&nbsp;dlouho" class="h-width--full">
					</a>

					<div class="magazine__excerpt h-d--flex h-flex--column">

						<p class="callout h-mb--20">
							Žij dobře a&nbsp;dlouho! Lednový Forbes přichází s&nbsp;návodem, jak na to. Vyzkoušejte 24 tipů, jak si prodloužit život, a&nbsp;seznamte se s&nbsp;výběrem padesáti nejlepších lékařů Česka. Zjistěte, jestli stojí za to nechat se pro prodloužení života zmrazit nebo třeba hladovět. Přečtěte si rozhovor se Sotiriosem Zavalianisem o&nbsp;tom, jak se z&nbsp;kluka z&nbsp;horské řecké vesnice stal jeden z&nbsp;největších podnikatelů [&hellip;]						</p>

						<a href="https://forbes.cz/magazin/jak-zit-dobre-a-dlouho/" class="cta-link-tag h-m--0 after-icon after-icon--arrow">
							ZJISTIT VÍCE						</a>

					</div>

				</div>

			</div>

		</div>

		<div class="submenus">

			
				<div id="submenu-546934" class="submenu">

					<div class="handheld-menu__container handheld-menu__header h-py--20 h-py--md--16">

						<button class="handheld-menu-back-btn button-icon" aria-label="Back">
							<i class="icon icon--arrow-left h-bgcolor--amber600"></i>
						</button>

						<h3 class="cta-main h-my--8">Forbes v zahraničí</h3>

						<button class="handheld-menu-closer-btn button-icon" aria-label="Close Menu">
							<i class="icon icon--cross h-bgcolor--amber600"></i>
						</button>

					</div>

					<div class="handheld-menu__container handheld-menu__main">

						<section class="handheld-menu__menu">

							<ul class="handheld-menu__menu-item-list">

								
									
									<li class="handheld-menu__menu-item handheld-menu__menu-item--country-link">

										
											<a class="handheld-menu__menu-item-container cta-link-tag" href="https://forbes.cz">

												<div class="handheld-menu__menu-item-image-wrapper">


													
														<img width="150" height="100" src="https://cz.forbesmedia.cz/uploads/2023/12/cz.svg" class="handheld-menu__country-link-flag" alt="Vlajka" decoding="async" loading="lazy" />
													
													<span class="handheld-menu__country-link cta-link-tag h-m--0 h-color--low">
														forbes.cz													</span>

												</div>

												<div class="handheld-menu__country-link-icon"></div>

											</a>

										
									</li>

								
									
									<li class="handheld-menu__menu-item handheld-menu__menu-item--country-link">

										
											<a class="handheld-menu__menu-item-container cta-link-tag" href="https://forbes.sk">

												<div class="handheld-menu__menu-item-image-wrapper">


													
														<img width="150" height="150" src="https://cz.forbesmedia.cz/uploads/2023/12/sk.svg" class="handheld-menu__country-link-flag" alt="Vlajka" decoding="async" loading="lazy" />
													
													<span class="handheld-menu__country-link cta-link-tag h-m--0 h-color--low">
														forbes sk													</span>

												</div>

												<div class="handheld-menu__country-link-icon"></div>

											</a>

										
									</li>

								
									
									<li class="handheld-menu__menu-item handheld-menu__menu-item--country-link">

										
											<a class="handheld-menu__menu-item-container cta-link-tag" href="https://forbes.hu">

												<div class="handheld-menu__menu-item-image-wrapper">


													
														<img width="150" height="75" src="https://cz.forbesmedia.cz/uploads/2023/12/hu.svg" class="handheld-menu__country-link-flag" alt="Vlajka" decoding="async" loading="lazy" />
													
													<span class="handheld-menu__country-link cta-link-tag h-m--0 h-color--low">
														forbes hu													</span>

												</div>

												<div class="handheld-menu__country-link-icon"></div>

											</a>

										
									</li>

								
								
									<li class="handheld-menu__menu-item h-mt--14">

										<a href="" class="cta-link-tag h-m--0 after-icon after-icon--arrow">
											Forbes v zahraničí										</a>

									</li>

								
							</ul>

						</section>

					</div>

					<div class="handheld-menu__container handheld-menu__footer"></div>

				</div>

			
		</div>

	</div>

	<div class="handheld-overlay"></div>

</div>

</header>
<main class="page-home h-pt-32 h-pb--8 h-pb--lg--0">

	
	<div class="container">

		
<div class="home-breaking-news type-b h-position--relative">

			<div class="home-breaking-news__background"></div>
	
	

	<div class="breaking-news-slider">

		<div class="breaking-news-slider__title-wrapper">

			
				<a href="https://forbes.cz/tag/breaking-news/" class="breaking-news-slider__title">
					<h4>Breaking News</h4>
				</a>

			
		</div>

		<section id="news-slider" class="breaking-news-slider__news-wrapper splide" aria-label="Breaking News Carousel" data-type="b">

			<div class="splide__track">

				<div class="splide__list">

					
					
						<a href="https://forbes.cz/google-chysta-restrukturalizaci-hodla-zrusit-stovky-pracovnich-mist/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">18:22</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">2 min</span>

								<h4 class="breaking-news-slider__news-title callout">Google chystá restrukturalizaci. Hodlá zrušit stovky pracovních míst</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/prazska-burza-ztracela-nedarilo-se-skupine-cez-ani-bankam/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">17:19</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">2 min</span>

								<h4 class="breaking-news-slider__news-title callout">Pražská burza ztrácela. Nedařilo se skupině ČEZ ani bankám</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/odbyt-lamborghini-loni-vzrostl-o-deset-procent-poprve-prekonal-deset-tisic-vozu/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">15:51</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">1 Min</span>

								<h4 class="breaking-news-slider__news-title callout">Odbyt Lamborghini loni vzrostl o&nbsp;deset procent. Poprvé překonal deset tisíc vozů</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/banka-goldman-sachs-prekonala-odhady-ve-ctvrtleti-zvysila-zisk-o-polovinu/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">15:06</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">2 min</span>

								<h4 class="breaking-news-slider__news-title callout">Banka Goldman Sachs překonala odhady. Ve čtvrtletí zvýšila zisk o polovinu</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/firma-eg-d-loni-ztrojnasobila-pocet-fotovoltaik-pripojila-jich-pres-27-tisic/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">14:36</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">3 min</span>

								<h4 class="breaking-news-slider__news-title callout">Firma EG.D loni ztrojnásobila počet fotovoltaik. Připojila jich přes 27 tisíc</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/zisk-zemedelskych-firem-loni-klesl-o-sedesat-procent-ukazuje-pruzkum/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">13:47</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">3 min</span>

								<h4 class="breaking-news-slider__news-title callout">Zisk zemědělských firem loni klesl o&nbsp;šedesát procent, ukazuje průzkum</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/hubacek-posiluje-ve-zdravotnictvi-jeho-ekorent-koupil-od-jt-cast-medical/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">13:01</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">2 min</span>

								<h4 class="breaking-news-slider__news-title callout">Hubáček posiluje ve zdravotnictví. Jeho Ekorent koupil od J&#038;T část Medical</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/urad-zrusil-vyber-viteze-rekordni-zakazky-na-metro-d-chybi-klicove-doklady/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">12:25</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">3 min</span>

								<h4 class="breaking-news-slider__news-title callout">Úřad zrušil výběr vítěze rekordní zakázky na metro D. Podnik podá rozklad</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/apple-se-stal-nejvetsim-dodavatelem-smartphonu-z-pozice-sesadil-samsung/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">11:36</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">2 min</span>

								<h4 class="breaking-news-slider__news-title callout">Apple se stal největším dodavatelem smartphonů. Z&nbsp;pozice sesadil Samsung</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/trzby-partners-loni-stouply-o-sedmnact-procent-v-breznu-spusti-vlastni-banku/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">11:03</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">3 min</span>

								<h4 class="breaking-news-slider__news-title callout">Tržby Partners loni stouply o&nbsp;sedmnáct procent. V&nbsp;březnu spustí vlastní banku</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/utoky-husiu-dale-komplikuji-namorni-obchod-naklady-na-dopravu-rapidne-rostou/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">10:41</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">5 min</span>

								<h4 class="breaking-news-slider__news-title callout">Útoky Húsíů dále komplikují námořní obchod. Náklady na dopravu rapidně rostou</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/firmy-vodafone-a-microsoft-uzavrely-partnerskou-dohodu-tyka-se-oblasti-ai/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">09:32</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">2 min</span>

								<h4 class="breaking-news-slider__news-title callout">Firmy Vodafone a&nbsp;Microsoft uzavřely partnerskou dohodu. Týká se oblasti AI</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/prazska-burza-prerusila-sedmidenni-rust-ztrata-ale-byla-minimalni/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">07:49</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">1 Min</span>

								<h4 class="breaking-news-slider__news-title callout">Pražská burza přerušila sedmidenní růst. Ztráta ale byla minimální</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/zdrazeni-o-pul-miliardy-euro-za-svou-divizi-chce-atos-po-kretinskem-vice-penez/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">včera</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">1 Min</span>

								<h4 class="breaking-news-slider__news-title callout">Zdražení o&nbsp;půl miliardy euro. Za svou divizi chce Atos po&nbsp;Křetínském více</h4>

							</div>

						</a>

					
						<a href="https://forbes.cz/jarni-probuzeni-wienerberger-obnovi-do-brezna-vyrobu-ve-vsech-zavodech/" class="breaking-news-slider__news-item splide__slide">

							<div>

								<span class="breaking-news-slider__read-time cta-link-tag">včera</span>
								<span class="breaking-news-slider__read-time breaking-news-slider__read-time--home-mobile cta-link-tag">3 min</span>

								<h4 class="breaking-news-slider__news-title callout">Jarní probuzení. Wienerberger obnoví do března výrobu ve všech závodech</h4>

							</div>

						</a>

					
					
				</div>

			</div>

		</section>

	</div>


</div>




<div class="home-daily-cover">

	
		
		<div class="row">

			<div class="col-12 col-lg-8">

				<a class="home-daily-cover__featured home-daily-cover__featured--image" href="https://forbes.cz/nekdy-musite-udelat-tlustou-caru-proc-konci-modni-duo-chatty/">

					<div class="home-daily-cover__image-wrapper">

						
							<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/chatty-portret.webp?r=eyJ3IjoxNTAwLCJxIjo5NSwicyI6ImpwZyJ9" class="home-daily-cover__image wp-post-image" alt="Někdy musíte udělat tlustou čáru. Proč končí módní duo Chatty?" decoding="async" loading="lazy" />
						
						
						
					</div>

				</a>

			</div>

			<div class="col-12 col-lg-4">

				<div class="home-daily-cover__featured home-daily-cover__featured--content">

					<div class="home-daily-cover__content">

						<div class="home-daily-cover__details">

							
							
								<a href="https://forbes.cz/tag/modni-byznys/" class="home-daily-cover__category cta-link-tag">Módní byznys</a>

							
							<span class="home-daily-cover__read-time cta-link-tag">
								3 min čtení							</span>

							<span class="home-daily-cover__read-time home-daily-cover__read-time--home-mobile cta-link-tag">
								3 min							</span>

							

	<div class="article-details daily-cover">

		

		

		
			
				<a href="https://forbes.cz/autor/annanoskova/" class="article-details__author footnote">Anna Nosková</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
	</div>


						</div>

						<a href="https://forbes.cz/nekdy-musite-udelat-tlustou-caru-proc-konci-modni-duo-chatty/">
							<h4 class="home-daily-cover__title">Někdy musíte udělat tlustou čáru. Proč končí módní duo Chatty?</h4>
						</a>

						<a href="https://forbes.cz/nekdy-musite-udelat-tlustou-caru-proc-konci-modni-duo-chatty/">
							<p class="home-daily-cover__excerpt">Oblékaly Karolínu Kurkovou a&nbsp;Jiřího Korna, sbíraly domácí i&nbsp;zahraniční úspěchy. Po&nbsp;roce od otevření butiku na pražském Starém Městě ale ikonická dvojice končí.</p>
						</a>

					</div>

					
						<a href="https://forbes.cz/nekdy-musite-udelat-tlustou-caru-proc-konci-modni-duo-chatty/">
							<p class="home-daily-cover__excerpt home-daily-cover__excerpt--cz">
								Oblékaly Karolínu Kurkovou a&nbsp;Jiřího Korna, sbíraly domácí i&nbsp;zahraniční úspěchy. Po&nbsp;roce od otevření butiku na pražském Starém Městě ale ikonická dvojice končí.</p>
						</a>

					
				</div>

			</div>

		</div>

	
	
		<div class="row">

			<div class="col-12">

				<div class="home-daily-cover__items">

					<div class="items__grid">

						
						
							
								
									<div class="items__item">

										
										
										
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/solary-ceka-boom-vitr-upadek-zelenym-tahounem-bude-necekane-cina/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2022/08/panely.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Soláry čeká boom, vítr úpadek. Zeleným tahounem bude nečekaně Čína" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/energetika/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Energetika			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/janstrouhal/" class="article-details__author footnote">Jan Strouhal</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">4 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/solary-ceka-boom-vitr-upadek-zelenym-tahounem-bude-necekane-cina/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Soláry čeká boom, vítr úpadek. Zeleným tahounem bude nečekaně Čína
					</h4>

				
			</a>

		

		

		
	</div>

</div>

									</div>

									
								
							
						
							
								
									<div class="items__item">

										
										
										
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/probublat-se-k-miliardam-cinsti-bratri-zbohatli-na-cajich-pro-gen-z/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/mixue.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Probublat se k&nbsp;miliardám. Čínští bratři zbohatli na čajích pro gen Z" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/miliardari/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Miliardáři			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/forbes-us/" class="article-details__author footnote">Forbes US</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">4 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/probublat-se-k-miliardam-cinsti-bratri-zbohatli-na-cajich-pro-gen-z/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Probublat se k&nbsp;miliardám. Čínští bratři zbohatli na čajích pro gen Z
					</h4>

				
			</a>

		

		

		
	</div>

</div>

									</div>

									
								
							
						
							
								
									<div class="items__item">

										
										
										
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/hlavne-bez-stresu-miroslav-kral-si-v-klidu-buduje-miliardovou-agenturu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/uvod-12.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Hlavně bez stresu. Miroslav Král si v&nbsp;klidu buduje miliardovou agenturu" loading="lazy">
		</a>

		
		
			<style>
	:root {
		--hover-color: #d89a52	}
</style>


	<div class="badge ">

		
				<a href="/premium" class="badge__content-wrapper" style="background-color: #d97706">

				
				
					<img width="150" height="150" src="https://cz.forbesmedia.cz/uploads/2022/09/premium_badge_white_rgb_for_small_tag.svg" class="badge__icon" alt="" decoding="async" loading="lazy" />
				
				
					<span class="badge__label cta-main">Premium</span>

				

				
				</a>

				

					</div>


		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/marektomanka/" class="article-details__author footnote">Marek Tomanka</a>

			
		

		<span class="article-details__publish-time footnote">1.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">10 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/hlavne-bez-stresu-miroslav-kral-si-v-klidu-buduje-miliardovou-agenturu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Hlavně bez stresu. Miroslav Král si v&nbsp;klidu buduje miliardovou agenturu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

									</div>

									
								
							
						
							
								
									<div class="items__item">

										
										
										
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/od-plavby-kolem-sveta-k-singapurskemu-startupu-cesi-z-meiro-berou-70-milionu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/pavel-bulowski-jana-marle-zizkova-vojtech-kurkaco-founders-01.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Od plavby kolem světa k singapurskému startupu. Češi z Meiro berou sedmdesát milionů" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/start-ups/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Startupy			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/miroslavnemy/" class="article-details__author footnote">Miroslav Němý</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">3 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/od-plavby-kolem-sveta-k-singapurskemu-startupu-cesi-z-meiro-berou-70-milionu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Od plavby kolem světa k singapurskému startupu. Češi z Meiro berou sedmdesát milionů
					</h4>

				
			</a>

		

		

		
	</div>

</div>

									</div>

									
								
							
						
							
								
									<div class="items__item">

										
										
										
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/woods-se-louci-s-nike-podivejte-se-na-dalsi-velke-smlouvy-znacek-a-sportovcu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/titulkkolaz.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Woods se loučí s&nbsp;Nike. Podívejte se na další velké smlouvy značek se sportovci" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/sport/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Sport			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/martinbajtler/" class="article-details__author footnote">Martin Bajtler</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">7 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/woods-se-louci-s-nike-podivejte-se-na-dalsi-velke-smlouvy-znacek-a-sportovcu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Woods se loučí s&nbsp;Nike. Podívejte se na další velké smlouvy značek se sportovci
					</h4>

				
			</a>

		

		

		
	</div>

</div>

									</div>

									
								
							
						
							
								
									<div class="items__item">

										
										
										
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/simulace-v-brne-jak-to-funguje-v-nemocnici-bez-pacientu-za-vic-nez-miliardu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/uvod-11.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Simulace v&nbsp;Brně. Jak to funguje v&nbsp;nemocnici bez pacientů za víc než miliardu?" loading="lazy">
		</a>

		
		
			<style>
	:root {
		--hover-color: #d89a52	}
</style>


	<div class="badge ">

		
				<a href="/premium" class="badge__content-wrapper" style="background-color: #d97706">

				
				
					<img width="150" height="150" src="https://cz.forbesmedia.cz/uploads/2022/09/premium_badge_white_rgb_for_small_tag.svg" class="badge__icon" alt="" decoding="async" loading="lazy" />
				
				
					<span class="badge__label cta-main">Premium</span>

				

				
				</a>

				

					</div>


		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/ondrejkinkor/" class="article-details__author footnote">Ondřej Kinkor</a>

			
		

		<span class="article-details__publish-time footnote">1.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">5 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/simulace-v-brne-jak-to-funguje-v-nemocnici-bez-pacientu-za-vic-nez-miliardu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Simulace v&nbsp;Brně. Jak to funguje v&nbsp;nemocnici bez pacientů za víc než miliardu?
					</h4>

				
			</a>

		

		

		
	</div>

</div>

									</div>

									
								
							
						
					</div>

				</div>

			</div>

		</div>

	
</div>




	<div class="home-podcasts">

		<div class="home-podcasts__bg"></div>

		
			<a href="https://forbes.cz/podcasty/" class="home-podcasts__title">
				<h4>Forbes podcasty</h4>
			</a>

		
		<div id="podcasts-slider" class="home-podcasts__slider splide" data-cz="true">

			<div class="splide__track">

				<div class="splide__list">

					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/ucim-vase-deti-myslet-rika-pedagog-ktery-je-pripravi-na-elitni-skolu/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">Podcast Jak být lepší</span>

		<h5 class="podcast-card__title">Učím vaše děti myslet, říká pedagog, který je připraví na elitní školu</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">32 minut poslechu</span>

			
		</div>

	</div>

</a>

							</div>

						
					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/miliardove-plany-marcela-sourala-chci-pozvednout-rokytnici-rika-v-podcastu/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">Podcasty</span>

		<h5 class="podcast-card__title">Miliardové plány Marcela Sourala. Chci pozvednout Rokytnici, říká v&nbsp;podcastu</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">44 minut poslechu</span>

			
		</div>

	</div>

</a>

							</div>

						
					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/zasadni-je-duvera-rikaji-dancisin-a-raska-o-zachrane-ceske-znacky-kara/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">BrandVoice</span>

		<h5 class="podcast-card__title">Zásadní je důvěra, říkají Dančišin a&nbsp;Raška o&nbsp;záchraně české značky Kara</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">33 minut poslechu</span>

			
		</div>

	</div>

</a>

							</div>

						
					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/proc-je-tato-zena-placena-lepe-nez-sefove-googlu-ci-blackstonu/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">Funny Money</span>

		<h5 class="podcast-card__title">Proč je tato žena placena lépe než šéfové Googlu či&nbsp;Blackstonu?</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">4 minuty poslechu</span>

			
		</div>

	</div>

</a>

							</div>

						
					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/chranena-dilna-strasne-oznaceni-rika-muz-ktery-dava-praci-postizenym/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">Podcast Byznys</span>

		<h5 class="podcast-card__title">Chráněná dílna? Strašné označení, říká muž, který dává práci postiženým</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">27 minut poslechu</span>

			
		</div>

	</div>

</a>

							</div>

						
					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/zacit-brzy-a-ukazat-zajem-studentka-cambridge-radi-kudy-na-nejlepsi-univerzity/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">BrandVoice</span>

		<h5 class="podcast-card__title">Začít brzy a&nbsp;ukázat zájem. Studentka Cambridge radí, kudy na nejlepší univerzity</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">1 hodina poslechu</span>

			
		</div>

	</div>

</a>

							</div>

						
					
						
						
							<div class="home-podcasts__podcast splide__slide">
								
								
								
<a href="https://forbes.cz/rakovino-jdi-do-hajzlu-tri-marketeri-meni-povedomi-o-strasaku-lidstva/" class="podcast-card">

	
	<div class="podcast-card__content-wrapper">

		<span class="podcast-card__category cta-link-tag">Podcast Forbes Life</span>

		<h5 class="podcast-card__title">Rakovino, jdi do hajzlu. Tři marketéři mění povědomí o&nbsp;strašáku lidstva</h5>

		<div class="podcast-card__details">

			


			
				
				<span class="podcast-card__length caption">38 minut</span>

			
		</div>

	</div>

</a>

							</div>

						
					
				</div>

			</div>

		</div>

	</div>





<div class="home-featured-special">

	<a href="https://predplatne.forbes.cz/sales-funnel/sales-funnel-frontend/show?funnel=30pod30&#038;referrer=https%3A%2F%2Fforbes.cz%2Fforbes-hleda-mlade-nominujte-mimoradne-osobnosti-do-30-pod-30%2Farticle_id%3D552109" class="home-featured-special__wrapper">

		
			<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/hp-banner-nominace-1.webp?r=eyJ3IjoyMDQ4LCJxIjo5NSwicyI6InBuZyJ9" class="home-featured-special__background home-featured-special__background--desktop" alt="" decoding="async" loading="lazy" />
		
		
			<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/hp-banner-nominace-1.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6InBuZyJ9" class="home-featured-special__background home-featured-special__background--mobile" alt="" decoding="async" loading="lazy" />
		
		<div class="home-featured-special__text-wrapper">

			
			
			
		</div>

	</a>

</div>




	<div class="home-category-type-a">

		<div class="home-category-type-a__header">
			


	<div class="category-header">

		<a href="https://forbes.cz/tag/byznys/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Byznys</h2>
		</a>

	</div>

		</div>

		<div class="home-category-type-a__featured">

			


	<div class="two-column-featured-articles">

		<div class="row">

			<div class="col-12 col-lg-6 two-column-featured-articles__featured-wrapper">

								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--featured">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/zmeny-v-dovolenych-i-praci-na-dalku-novela-prinesla-vitane-upravy-ale-take-otazniky/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/beranek2.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Změny v&nbsp;dovolených i&nbsp;práci na dálku. Novela přinesla vítané úpravy, ale také otazníky" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/brandvoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				BrandVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/advokatni-kancelar-pokorny-wagner-partneri/" class="article-details__author footnote">Advokátní kancelář Pokorný, Wagner &amp; partneři</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">5 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/zmeny-v-dovolenych-i-praci-na-dalku-novela-prinesla-vitane-upravy-ale-take-otazniky/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h3 class="article-card__title cz">

						Změny v&nbsp;dovolených i&nbsp;práci na dálku. Novela přinesla vítané úpravy, ale také otazníky
					</h3>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
						</div>
						<div class="col-12 col-lg-6 two-column-featured-articles__regular-wrapper">

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/nejsme-magove-rika-sefka-reprodukcni-kliniky-jak-jim-pomaha-ai/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/mudr-katerina-vesela-zdroj-repromeda.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Nejsme mágové, říká šéfka reprodukční kliniky. Jak jim pomáhá AI?" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/rozhovor/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Rozhovor			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/julie-mahlerova/" class="article-details__author footnote">Julie Mahlerová</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/nejsme-magove-rika-sefka-reprodukcni-kliniky-jak-jim-pomaha-ai/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Nejsme mágové, říká šéfka reprodukční kliniky. Jak jim pomáhá AI?
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/na-3d-tiskarnach-tisknou-to-co-jini-nezvladnou-plast-berou-v-oceanech/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/mtf-8959-scaled-1.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Plast berou v&nbsp;oceánech. Na 3D farmě v&nbsp;Xaverově z&nbsp;něj tisknou téměř cokoli" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/cesky-byznys/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Český byznys			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/jana-divinova/" class="article-details__author footnote">Jana Divinová</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/na-3d-tiskarnach-tisknou-to-co-jini-nezvladnou-plast-berou-v-oceanech/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Plast berou v&nbsp;oceánech. Na 3D farmě v&nbsp;Xaverově z&nbsp;něj tisknou téměř cokoli
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/volkswagen-bojuje-o-zivot-cisla-mu-rostou-ale-budou-stacit/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/vw-2.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Volkswagen bojuje o&nbsp;život. Čísla mu rostou, ale budou stačit?" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/auta/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Auta			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/ondrejkinkor/" class="article-details__author footnote">Ondřej Kinkor</a>

			
		

		<span class="article-details__publish-time footnote">15.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/volkswagen-bojuje-o-zivot-cisla-mu-rostou-ale-budou-stacit/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Volkswagen bojuje o&nbsp;život. Čísla mu rostou, ale budou stačit?
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								

			</div>

		</div>

	</div>


		</div>

		<div class="home-category-type-a__articles">

			
			
				<div class="home-category-type-a__articles-grid">

					

	<div class="articles-grid">

		<div class="articles-grid__grid">

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/budnikova-skupina-thein-bobtna-kupuje-benesovskou-slevarnu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/03/thein.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Budníkova skupina Thein bobtná. Kupuje benešovskou slévárnu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/cesky-byznys/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Český byznys			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/janstrouhal/" class="article-details__author footnote">Jan Strouhal</a>

			
		

		<span class="article-details__publish-time footnote">15.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">2 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/budnikova-skupina-thein-bobtna-kupuje-benesovskou-slevarnu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Budníkova skupina Thein bobtná. Kupuje benešovskou slévárnu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/kdo-je-vetsi-apple-a-microsoft-bojuji-o-post-nejhodnotnejsi-firmy-sveta/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/applevsmicrosoft-marketingwars.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Kdo je větší? Apple a&nbsp;Microsoft bojují o&nbsp;post nejhodnotnější firmy světa" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/technologie/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Technologie			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/marektomanka/" class="article-details__author footnote">Marek Tomanka</a>

			
		

		<span class="article-details__publish-time footnote">12.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">4 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/kdo-je-vetsi-apple-a-microsoft-bojuji-o-post-nejhodnotnejsi-firmy-sveta/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Kdo je větší? Apple a&nbsp;Microsoft bojují o&nbsp;post nejhodnotnější firmy světa
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/od-buraku-k-vlastnimu-pivu-zastavce-i-vagonum-varndsdorfsky-kocour-je-rozmlsany/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/titulka.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Od buráků k&nbsp;vlastnímu pivu i&nbsp;zastávce. Varnsdorfský Kocour je rozmlsaný" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/pivo/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Pivo			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/janapsenickova/" class="article-details__author footnote">Jana Pšeničková</a>

			
		

		<span class="article-details__publish-time footnote">12.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">11 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/od-buraku-k-vlastnimu-pivu-zastavce-i-vagonum-varndsdorfsky-kocour-je-rozmlsany/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Od buráků k&nbsp;vlastnímu pivu i&nbsp;zastávce. Varnsdorfský Kocour je rozmlsaný
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
			
			
		</div>

	</div>


				</div>

			
		</div>

		
	</div>





	<div class="home-comments">

		<div class="home-comments__bg"></div>

		<div class="home-comments__header">
			


	<div class="category-header">

		<a href="https://forbes.cz/komentare/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Komentáře a&nbsp;názory</h2>
		</a>

	</div>

		</div>

		
			<div id="comments-slider" class="home-comments__grid splide">

				<div class="splide__track">

					<div class="splide__list">

						
							

	<a href="https://forbes.cz/virtualni-elektrarny-jako-byznys-budoucnosti-o-co-jde-a-jak-ovlivni-energetiku/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/09/1682511135486.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBlZyJ9" class="comment-card__image" alt="Václav Skoblík" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Václav Skoblík</span>

				
				<h4 class="comment-card__title">Virtuální elektrárny jako byznys budoucnosti. O&nbsp;co jde a&nbsp;jak ovlivní energetiku?</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/prerusovany-pust-nebo-omezeni-alkoholu-jak-si-prodluzuje-health-span-tomas-cupr/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2021/10/cupr-profil.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Tomáš Čupr" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Tomáš Čupr</span>

				
				<h4 class="comment-card__title">Přerušovaný půst nebo omezení alkoholu. Jak si prodlužuje health-span Tomáš Čupr?</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/konec-sklarny-kvetna-1794-pomoci-muzeme-i-my/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2018/12/iifogw_ire_ctverec.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Irena Cápová" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Irena Cápová</span>

				
				<h4 class="comment-card__title">Konec sklárny Květná 1794? Pomoci můžeme i&nbsp;my</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/jde-o-ropu-zlato-a-vodu-napeti-mezi-venezuelou-a-guayanou-eskaluje/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/12/pilatova-marketa-1.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBlZyJ9" class="comment-card__image" alt="Markéta Pilátová" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Markéta Pilátová</span>

				
				<h4 class="comment-card__title">Jde o&nbsp;ropu, zlato a&nbsp;vodu. Napětí mezi Venezuelou a&nbsp;Guayanou eskaluje</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/statni-sit-benzinek-vladni-investice-nemaji-strategii-pise-ekonom-dohnal/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/03/1517668917357.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Radim Dohnal" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Radim Dohnal</span>

				
				<h4 class="comment-card__title">Státní síť benzinek? Vládní investice nemají strategii, píše ekonom Dohnal</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/oprava-ceske-spolecnosti-bez-pravdy-a-lasky-to-nejde/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/filip-saiver-new.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Filip Saiver" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Filip Saiver</span>

				
				<h4 class="comment-card__title">Oprava české společnosti? Bez pravdy a&nbsp;lásky to nejde</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/cesko-je-jen-tak-silne-jak-silni-jsou-jeho-lidri-mysli-si-investorka-dana-berova/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/berova-c.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoid2VicCJ9" class="comment-card__image" alt="Dana Bérová" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Dana Bérová</span>

				
				<h4 class="comment-card__title">Česko je jen tak silné, jak silní jsou jeho lídři, myslí si investorka Dana Bérová</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/ozempic-nation-vazne-chceme-hubnout-s-injekcemi-do-bricha/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2018/12/iifogw_ire_ctverec.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Irena Cápová" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Irena Cápová</span>

				
				<h4 class="comment-card__title">Ozempic Nation. Vážně chceme hubnout s&nbsp;injekcemi do břicha?</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/premier-zongluje-nutellami-a-je-to-smutny-pohled/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/11/jh.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Jakub Horák" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Jakub Horák</span>

				
				<h4 class="comment-card__title">Premiér žongluje nutellami. A&nbsp;je to smutný pohled</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/harry-potter-ve-vasi-rezii-kdy-za-nas-zacne-natacet-filmy-ai/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2021/08/wolf.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Karel Wolf" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Karel Wolf</span>

				
				<h4 class="comment-card__title">Harry Potter ve vaší režii. Kdy za nás začne natáčet filmy AI?</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/pohadka-o-levne-elektrine-kdy-od-politiku-uslysime-na-rovinu-co-nas-ceka/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2018/12/ku71k7_2k18_honza_s.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Jan Strouhal" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Jan Strouhal</span>

				
				<h4 class="comment-card__title">Pohádka o&nbsp;levné elektřině. Kdy od politiků uslyšíme, co nás opravdu čeká?</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/tarify-na-import-do-usa-mohou-mit-tragicke-nasledky-mysli-si-steve-forbes/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2018/12/62bno4_steve.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="comment-card__image" alt="Steve Forbes" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Steve Forbes</span>

				
				<h4 class="comment-card__title">Tarify na import do USA? Mohou mít tragické následky, myslí si Steve Forbes</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/nemaly-fuck-up-jak-me-ochutnavani-uzenin-privedlo-k-vegebyznysu-ktery-se-nepovedl/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2018/12/ku71k7_2k18_honza_s.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Jan Strouhal" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Jan Strouhal</span>

				
				<h4 class="comment-card__title">Nemalý fuckup. Jak mě ochutnávání uzenin přivedlo k&nbsp;vegebyznysu, který se nepovedl</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/umelou-inteligenci-nezajima-pravda-ale-data-a-ta-mohou-vest-ke-zlu/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/kaltoun.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="comment-card__image" alt="Jan Kaltoun" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Jan Kaltoun</span>

				
				<h4 class="comment-card__title">Umělou inteligenci nezajímá pravda, ale data. A&nbsp;ta mohou vést ke zlu</h4>

			</div>

		</div>

	</a>


						
							

	<a href="https://forbes.cz/vize-vaclava-dejcmara-zrusme-cesko-na-jeho-troskach-at-povstane-bohemia/" class="comment-card splide__slide">

		<div class="comment-card__wrapper">

			<div class="comment-card__image-wrapper">

				
					<img width="0" src="https://cz.forbesmedia.cz/uploads/2021/05/nemy.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="comment-card__image" alt="Miroslav Němý" decoding="async" loading="lazy" />
				
			</div>

			<div class="comment-card__content-wrapper">

				
					<span class="comment-card__tag cta-link-tag">Miroslav Němý</span>

				
				<h4 class="comment-card__title">Vize Václava Dejčmara: Zrušme Česko, na jeho troskách ať povstane Bohemia</h4>

			</div>

		</div>

	</a>


						
					</div>

				</div>

			</div>

		
	</div>




	<div class="home-category-type-b on-card with-bg">

		

		<div class="home-category-type-b__header">
			


	<div class="category-header">

		<a href="https://forbes.cz/tag/brandvoice/" class="category-header__title-wrapper">
			<h2 class="category-header__title">BrandVoice</h2>
		</a>

	</div>

		</div>

		<div class="home-category-type-b__slider splide" data-type="on-card">

			<div class="splide__track">

				<div class="splide__list">

					
						
							<a href="https://forbes.cz/zmeny-v-dovolenych-i-praci-na-dalku-novela-prinesla-vitane-upravy-ale-take-otazniky/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/beranek2.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">Advokátní kancelář Pokorný, Wagner &amp; partneři</span>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Změny v&nbsp;dovolených i&nbsp;práci na dálku. Novela přinesla vítané úpravy, ale také otazníky										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/kdyz-jste-kralem-udoli-zimni-pohadka-pod-krivanem-odkud-nebudete-chtit-odjet/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/fxp-sk-preview-ziga-koren-231208-0340-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image" alt="Když jste králem údolí. Zimní pohádka pod Kriváňem, odkud nebudete chtít odjet" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">Porsche</span>

			
		

		<span class="article-details__publish-time footnote">15.&nbsp;1.&nbsp;2024</span>


		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Když jste králem údolí. Zimní pohádka pod Kriváňem, odkud nebudete chtít odjet										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/zasadni-je-duvera-rikaji-dancisin-a-raska-o-zachrane-ceske-znacky-kara/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/glatzova.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">Glatzová &amp; Co.</span>

			
		

		<span class="article-details__publish-time footnote">10.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">33 minut poslechu</span>

		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Zásadní je důvěra, říkají Dančišin a&nbsp;Raška o&nbsp;záchraně české značky Kara										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/mel-jsem-jen-zalibu-ve-sportu-rika-majitel-miliardove-fitness-company/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2024/01/gottfried-wurpes.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">The Fitness Company</span>

			
		

		<span class="article-details__publish-time footnote">8.&nbsp;1.&nbsp;2024</span>


		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Měl jsem jen zálibu ve sportu, říká majitel miliardové Fitness Company										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/jasna-trefa-lyzovani-s-vychodem-slunce-a-noc-ve-dvou-tisicich-laka-slovenska-kralovna-hor/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/12/1653446445d8b9042d9a39-edit.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">Porsche</span>

			
		

		<span class="article-details__publish-time footnote">5.&nbsp;1.&nbsp;2024</span>


		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Jasná trefa. Lyžování s východem slunce a&nbsp;noc ve dvou tisících, láká slovenská královna hor										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/zacit-brzy-a-ukazat-zajem-studentka-cambridge-radi-kudy-na-nejlepsi-univerzity/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/12/parklane.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">Park Lane International School</span>

			
		

		<span class="article-details__publish-time footnote">3.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">1 hodina poslechu</span>

		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Začít brzy a&nbsp;ukázat zájem. Studentka Cambridge radí, kudy na nejlepší univerzity										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/chceme-uspet-v-oboru-kde-jsou-karty-rozdany-uz-tricet-let-rika-pulgret-z-artmediz/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/12/pulgret.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">Artmediz</span>

			
		

		<span class="article-details__publish-time footnote">2.&nbsp;1.&nbsp;2024</span>


		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Chceme uspět v&nbsp;oboru, kde jsou karty rozdány už třicet let, říká Pulgret z Artmediz										</h5>

									</div>

								</div>

							</a>

						
					
						
							<a href="https://forbes.cz/chytre-mikrobusy-nabijecky-i-zamky-pet-ceskych-napadu-na-zlepseni-zivota-ve-meste/" class="home-category-type-b__article home-category-type-b__article--on-card splide__slide">

								<div class="home-category-type-b__article-wrapper">

									<div class="home-category-type-b__article-image-wrapper">

										
										<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/12/eit-1.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-category-type-b__article-image wp-post-image" alt="Forbes" decoding="async" loading="lazy" />
									</div>

									<div class="home-category-type-b__article-content-wrapper">

										
											

	<div class="article-details slider">

		

		

		
			
				<span class="article-details__author footnote">EIT Urban Mobility</span>

			
		

		<span class="article-details__publish-time footnote">27.&nbsp;12.&nbsp;2023</span>


		
	</div>


										
										<h5 class="home-category-type-b__article-title">
											Chytré mikrobusy, nabíječky i&nbsp;zámky. Pět českých nápadů na zlepšení života ve městě										</h5>

									</div>

								</div>

							</a>

						
					
				</div>

			</div>

		</div>


	</div>




<div class="home-category-type-c">

	<style>
		.home-category-type-c {
			--section-color: #db2777;
			--section-hover-color: #dd68a1;
		}
	</style>

	<div class="home-category-type-c__header colored">
		


	<div class="category-header">

		<a href="https://forbes.cz/tag/forbes-life/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Forbes Life</h2>
		</a>

	</div>

	</div>

	
		
			<div class="home-category-type-c__featured">

				
<div class="article-card  article-card--featured-large">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/losos-v-lazni-konfitovani-mu-vylepsi-chut-i-texturu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/konfitovany-losos-2-scaled.webp?r=eyJ3IjoyMDQ4LCJxIjo5NSwicyI6ImpwZyJ9" alt="Losos v&nbsp;lázni. Konfitování mu vylepší chuť i&nbsp;texturu" loading="lazy">
		</a>

		
		
			<style>
	:root {
		--hover-color: #ad065a	}
</style>


	<div class="badge ">

		
				<a href="stitek/forbes-cooking" class="badge__content-wrapper" style="background-color: #db2777">

				
				
				
					<span class="badge__label cta-main">Forbes Cooking</span>

				

				
				</a>

				

					</div>


		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		
			<a href="https://forbes.cz/tag/forbes-cooking/" class="article-card__category cta-link-tag h-mr--8 after-icon after-icon--line" data-index="">

				Forbes Cooking
			</a>

		

		
			
				<a href="https://forbes.cz/autor/svatava-vaskova/" class="article-details__author footnote">Svatava Vašková</a>

			
		

		<span class="article-details__publish-time footnote">16.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">2 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/losos-v-lazni-konfitovani-mu-vylepsi-chut-i-texturu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h3 class="article-card__title cz">

						Losos v&nbsp;lázni. Konfitování mu vylepší chuť i&nbsp;texturu
					</h3>

				
			</a>

		

		

		
	</div>

</div>

			</div>

		
	
	<div class="home-category-type-c__regular-articles">

		

	<div class="articles-grid">

		<div class="articles-grid__grid">

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/africky-zar-zahrejte-se-sytou-arasidovou-polevkou/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/arasidova-polevka-s-kapustou-a-cizrnou.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Africký žár. Zahřejte se sytou arašídovou polévkou" loading="lazy">
		</a>

		
		
			<style>
	:root {
		--hover-color: #ad065a	}
</style>


	<div class="badge ">

		
				<a href="stitek/forbes-cooking" class="badge__content-wrapper" style="background-color: #db2777">

				
				
				
					<span class="badge__label cta-main">Forbes Cooking</span>

				

				
				</a>

				

					</div>


		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/katerina-bicikova-harudova/" class="article-details__author footnote">Kateřina Bičíková Harudová</a>

			
		

		<span class="article-details__publish-time footnote">15.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">2 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/africky-zar-zahrejte-se-sytou-arasidovou-polevkou/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Africký žár. Zahřejte se sytou arašídovou polévkou
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/pekelne-dobre-maso-heslo-hell-smoke-zni-burger-je-zakladka-bbq-vysoka/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/dsf8751.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Pekelně dobré maso. Heslo Hell Smoke zní: Burger je základka, BBQ vysoká" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/jidlo/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Jídlo			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/miroslavnemy/" class="article-details__author footnote">Miroslav Němý</a>

			
		

		<span class="article-details__publish-time footnote">14.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">10 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/pekelne-dobre-maso-heslo-hell-smoke-zni-burger-je-zakladka-bbq-vysoka/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Pekelně dobré maso. Heslo Hell Smoke zní: Burger je základka, BBQ vysoká
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/nejocekavanejsi-serialy-roku-mate-mezi-nimi-sveho-favorita/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/the-bear-2010-1458r.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Nejočekávanější seriály roku. Máte mezi nimi svého favorita?" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/serialy/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Seriály			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/jan-jindrich-karasek/" class="article-details__author footnote">Jan Jindřich Karásek</a>

			
		

		<span class="article-details__publish-time footnote">14.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">8 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/nejocekavanejsi-serialy-roku-mate-mezi-nimi-sveho-favorita/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Nejočekávanější seriály roku. Máte mezi nimi svého favorita?
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/chutne-ctivo-skvele-knihy-o-jidle-resi-diktatory-rusko-sultana-i-ekonomii/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/no-revisions-7akbiqfiemw-unsplash2.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Chutné čtivo. Skvělé knihy o jídle řeší diktátory, Rusko, sultána i ekonomii" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/knihy/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Knihy			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/miroslavnemy/" class="article-details__author footnote">Miroslav Němý</a>

			
		

		<span class="article-details__publish-time footnote">14.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">7 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/chutne-ctivo-skvele-knihy-o-jidle-resi-diktatory-rusko-sultana-i-ekonomii/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Chutné čtivo. Skvělé knihy o jídle řeší diktátory, Rusko, sultána i ekonomii
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/dokonala-zmensenina-dortu-cupcakes-s-makem-svezim-grepem/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/makove-cupcakes-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Dokonalá zmenšenina dortu. Cupcakes s&nbsp;mákem &#038; svěžím grepem" loading="lazy">
		</a>

		
		
			<style>
	:root {
		--hover-color: #ad065a	}
</style>


	<div class="badge ">

		
				<a href="stitek/forbes-cooking" class="badge__content-wrapper" style="background-color: #db2777">

				
				
				
					<span class="badge__label cta-main">Forbes Cooking</span>

				

				
				</a>

				

					</div>


		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/marketa-maresova/" class="article-details__author footnote">Markéta Marešová</a>

			
		

		<span class="article-details__publish-time footnote">14.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">3 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/dokonala-zmensenina-dortu-cupcakes-s-makem-svezim-grepem/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Dokonalá zmenšenina dortu. Cupcakes s&nbsp;mákem &#038; svěžím grepem
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
				
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/sul-zeli-i-umami-nejvetsi-kulinarske-trendy-roku-2024-ocima-odborniku/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/0x0.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Sůl, zelí i&nbsp;umami. Největší kulinářské trendy roku 2024 očima odborníků" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/cestovani/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Cestování			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/claudia-alarcon/" class="article-details__author footnote">Claudia Alarcón</a>

			
		

		<span class="article-details__publish-time footnote">13.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">10 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/sul-zeli-i-umami-nejvetsi-kulinarske-trendy-roku-2024-ocima-odborniku/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Sůl, zelí i&nbsp;umami. Největší kulinářské trendy roku 2024 očima odborníků
					</h4>

				
			</a>

		

		

		
	</div>

</div>

			
			
			
		</div>

	</div>


	</div>

</div>



	<div class="home-category-type-b below-card with-bg">

		
			<div class="home-category-type-b__bg"></div>

		

		<div class="home-category-type-b__header">
			


	<div class="category-header">

		<a href="https://forbes.cz/tag/advoice/" class="category-header__title-wrapper">
			<h2 class="category-header__title">AdVoice</h2>
		</a>

	</div>

		</div>

		<div class="home-category-type-b__slider splide" data-type="below-card">

			<div class="splide__track">

				<div class="splide__list">

					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/tri-tituly-po-sobe-tajemstvi-uspechu-nejlepsiho-zamestnavatele-v-cesku/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/11/dsc05231-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Tři tituly po&nbsp;sobě. Tajemství úspěchu nejlepšího zaměstnavatele v Česku" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/japan-tobacco-international/" class="article-details__author footnote">Japan Tobacco International</a>

			
		

		<span class="article-details__publish-time footnote">24.&nbsp;11.&nbsp;2023</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/tri-tituly-po-sobe-tajemstvi-uspechu-nejlepsiho-zamestnavatele-v-cesku/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Tři tituly po&nbsp;sobě. Tajemství úspěchu nejlepšího zaměstnavatele v Česku
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/kanapky-i-do-officu-dark-kitchen-chce-menit-cateringova-pravidla-v-praze/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/happy-birthday-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Kanapky i do officu. Dark Kitchen chce měnit cateringová pravidla v Praze " loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/dark-kitchen/" class="article-details__author footnote">Dark Kitchen</a>

			
		

		<span class="article-details__publish-time footnote">11.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/kanapky-i-do-officu-dark-kitchen-chce-menit-cateringova-pravidla-v-praze/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Kanapky i do officu. Dark Kitchen chce měnit cateringová pravidla v Praze 
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/zraly-syr-a-starene-maso-regionalni-vyrobci-sazeji-na-lokalni-suroviny-i-rucni-praci/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/12/20231120-dsc00644-kopie-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Zralý sýr a&nbsp;stařené maso. Regionální výrobci sázejí na lokální suroviny i&nbsp;ruční práci" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/klasa/" class="article-details__author footnote">Regionální potravina</a>

			
		

		<span class="article-details__publish-time footnote">7.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/zraly-syr-a-starene-maso-regionalni-vyrobci-sazeji-na-lokalni-suroviny-i-rucni-praci/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Zralý sýr a&nbsp;stařené maso. Regionální výrobci sázejí na lokální suroviny i&nbsp;ruční práci
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/seznam-nove-nabizi-printovou-reklamu-s-rozhodovanim-klientum-pomaha-i-seznam-menu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/12/martina-kralikova.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Seznam nově nabízí printovou reklamu. S rozhodováním klientům pomáhá i&nbsp;Seznam Menu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/seznamcz/" class="article-details__author footnote">Seznam.cz</a>

			
		

		<span class="article-details__publish-time footnote">3.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/seznam-nove-nabizi-printovou-reklamu-s-rozhodovanim-klientum-pomaha-i-seznam-menu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Seznam nově nabízí printovou reklamu. S rozhodováním klientům pomáhá i&nbsp;Seznam Menu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/pohoda-jako-vize-pracujeme-tymove-nedelime-se-na-pozice-hlasi-sefove-firmy-goldbeck/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/12/goldbeck-pavel-carny-foto-juraj-hrivnauk-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Pohoda jako vize. Pracujeme týmově, nedělíme se na pozice, hlásí šéfové firmy Goldbeck" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/goldbeck/" class="article-details__author footnote">Goldbeck</a>

			
		

		<span class="article-details__publish-time footnote">29.&nbsp;12.&nbsp;2023</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/pohoda-jako-vize-pracujeme-tymove-nedelime-se-na-pozice-hlasi-sefove-firmy-goldbeck/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Pohoda jako vize. Pracujeme týmově, nedělíme se na pozice, hlásí šéfové firmy Goldbeck
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/silvestrovske-pomazanky-sedne-jim-nejen-cesnek-ale-i-uzene-ryby-prsut-nebo-hroznove-vino/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/12/bistro-sisters-party-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Silvestrovské pomazánky. Sedne jim nejen česnek, ale i&nbsp;uzené ryby, pršut nebo hroznové víno" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/bistro-sisters/" class="article-details__author footnote">Bistro Sisters</a>

			
		

		<span class="article-details__publish-time footnote">27.&nbsp;12.&nbsp;2023</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/silvestrovske-pomazanky-sedne-jim-nejen-cesnek-ale-i-uzene-ryby-prsut-nebo-hroznove-vino/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Silvestrovské pomazánky. Sedne jim nejen česnek, ale i&nbsp;uzené ryby, pršut nebo hroznové víno
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/kancelar-po-ruce-i-v-lese-a-snehu-svatopluk-cech-o-tom-jak-pracuje-v-drsnem-horskem-terenu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/12/cech-thumb-6-edit.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" alt="Kancelář po&nbsp;ruce i&nbsp;v lese a&nbsp;sněhu. Svatopluk Čech o&nbsp;tom, jak pracuje v drsném horském terénu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/samsung/" class="article-details__author footnote">Samsung</a>

			
		

		<span class="article-details__publish-time footnote">21.&nbsp;12.&nbsp;2023</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/kancelar-po-ruce-i-v-lese-a-snehu-svatopluk-cech-o-tom-jak-pracuje-v-drsnem-horskem-terenu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Kancelář po&nbsp;ruce i&nbsp;v lese a&nbsp;sněhu. Svatopluk Čech o&nbsp;tom, jak pracuje v drsném horském terénu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
						
							<div class="home-category-type-b__article home-category-type-b__article--below-card splide__slide">

								
<div class="article-card ">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/e-mailova-komunikace-se-profesionalizuje-muze-za-to-nastup-instantniho-messagingu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2023/12/image0-2-scaled.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBlZyJ9" alt="E-mailová komunikace se profesionalizuje. Může za to nástup instantního messagingu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/advoice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				AdVoice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read slider">

		

		

		
			
				<a href="https://forbes.cz/autor/seznamcz/" class="article-details__author footnote">Seznam.cz</a>

			
		

		<span class="article-details__publish-time footnote">21.&nbsp;12.&nbsp;2023</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/e-mailova-komunikace-se-profesionalizuje-muze-za-to-nastup-instantniho-messagingu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						E-mailová komunikace se profesionalizuje. Může za to nástup instantního messagingu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

							</div>

						
					
				</div>

			</div>

		</div>


	</div>




<div class="home-specials-rankings-b">

	<div class="home-specials-rankings-b__header">

		


	<div class="category-header">

		<a href="https://forbes.cz/specials-and-rankings/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Speciály</h2>
		</a>

	</div>


	</div>

	<div class="home-specials-rankings-b__grid splide">

		<div class="splide__track">

			<div class="splide__list">

				
				
					
						
						<a href="https://odkolebkydoduchodu.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/01/ezgifcom-gif-maker-2.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Od kolébky do důchodu. Jak chránit a zhodnotit svoje peníze? Přečtěte si náš návod</h4>

						</a>

					
						
						<a href="https://forbes.cz/vanoce-s-forbesem-2023/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/12/header2x.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Život je bohatý a Vánoce by měly jít příkladem</h4>

						</a>

					
						
						<a href="https://12pracibudoucnosti.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/09/robot-hand.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">12 prací budoucnosti. Nejžádanější profese a&nbsp;obory v&nbsp;byznysu</h4>

						</a>

					
						
						<a href="https://nabitajizda.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/06/open.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Nabitá jízda. Elektroautem na road trip do vybraných destinací</h4>

						</a>

					
						
						<a href="https://behind-the-business.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/09/visa-2.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Budoucnost placení podle bank i českých firem</h4>

						</a>

					
						
						<a href="https://digiexpedice.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/05/vrchol.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Digitální expedice. Byznysový průvodce na cestě k&nbsp;budoucnosti</h4>

						</a>

					
						
						<a href="https://30inspirativnich.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/12/frame-54.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">30 inspirativních. Jak přemýšlejí o&nbsp;svém byznysu majitelé a&nbsp;manažeři úspěšných českých firem?</h4>

						</a>

					
						
						<a href="https://letatjakoboss.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/11/frame-34.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Létat jako boss. Tipy, triky a&nbsp;prémiové služby pro pohodlnější cestování</h4>

						</a>

					
						
						<a href="https://24hodin.forbes.cz/" class="home-specials-rankings-b__special splide__slide">

							<div class="home-specials-rankings-b__special-image-wrapper">

								<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/12/frame-69.webp?r=eyJ3Ijo3NTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="home-specials-rankings-b__special-image" alt="" decoding="async" loading="lazy" />
							</div>

							<h4 class="home-specials-rankings-b__item-title callout">Andrea, Besky, Miloš a&nbsp;Tadeáš. Jak vypadá typický den mladých talentů?</h4>

						</a>

					
				
			</div>

		</div>

	</div>

</div>



<div class="wp-block-columns is-layout-flex wp-container-3">
<div class="wp-block-column is-layout-flow">

	<div class="home-special-list">

		<div class="home-special-list__header">

			
				
					<a href="https://forbes.cz/lists/youtuberi23/top-10-youtuberu-a-streameru/" class="home-special-list__title after-icon after-icon--arrow">Top 10 youtuberů a&nbsp;streamerů</a>

				

			
		</div>

		<div class="home-special-list__list">

			
				

	
		<a href="https://forbes.cz/lists/youtuberi23/top-10-youtuberu-a-streameru/fizistyle/" class="home-list-item">

		
			
				<div class="home-list-item__image-wrapper">

					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/fizzy.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-list-item__image" alt="1. FIZIstyle" decoding="async" loading="lazy" />
				</div>

			
			<div class="home-list-item__text-wrapper">

				
					<span class="home-list-item__name subtitle">1. FIZIstyle</span>

				
				
				
			</div>

			
		</a>

	


			
				

	
		<a href="https://forbes.cz/lists/youtuberi23/top-10-youtuberu-a-streameru/tary/" class="home-list-item">

		
			
				<div class="home-list-item__image-wrapper">

					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/tary.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-list-item__image" alt="2. Tary" decoding="async" loading="lazy" />
				</div>

			
			<div class="home-list-item__text-wrapper">

				
					<span class="home-list-item__name subtitle">2. Tary</span>

				
				
				
			</div>

			
		</a>

	


			
				

	
		<a href="https://forbes.cz/lists/nejvetsi-rodinne-firmy-2023/mattoni-1873/" class="home-list-item">

		
			
				<div class="home-list-item__image-wrapper">

					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/baxtrix.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-list-item__image" alt="3. Baxtrix" decoding="async" loading="lazy" />
				</div>

			
			<div class="home-list-item__text-wrapper">

				
					<span class="home-list-item__name subtitle">3. Baxtrix</span>

				
				
				
			</div>

			
		</a>

	


			
		</div>

	</div>

</div>



<div class="wp-block-column is-layout-flow">

	<div class="home-special-list">

		<div class="home-special-list__header">

			
				
					<a href="https://forbes.cz/lists/nc23/" class="home-special-list__title after-icon after-icon--arrow">100 nejbohatších Čechů 2023</a>

				

			
		</div>

		<div class="home-special-list__list">

			
				

	
		<a href="https://forbes.cz/lists/nc23/renata-kellnerova/" class="home-list-item">

		
			
				<div class="home-list-item__image-wrapper">

					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/renata-kellnerova.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoid2VicCJ9" class="home-list-item__image" alt="1. Renáta Kellnerová" decoding="async" loading="lazy" />
				</div>

			
			<div class="home-list-item__text-wrapper">

				
					<span class="home-list-item__name subtitle">1. Renáta Kellnerová</span>

				
				
				
			</div>

			
		</a>

	


			
				

	
		<a href="https://forbes.cz/lists/nc23/daniel-kretinsky/" class="home-list-item">

		
			
				<div class="home-list-item__image-wrapper">

					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/daniel-kretinsky-scaled-1.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoid2VicCJ9" class="home-list-item__image" alt="2. Daniel Křetínský" decoding="async" loading="lazy" />
				</div>

			
			<div class="home-list-item__text-wrapper">

				
					<span class="home-list-item__name subtitle">2. Daniel Křetínský</span>

				
				
				
			</div>

			
		</a>

	


			
				

	
		<a href="https://forbes.cz/lists/nc23/karel-komarek/" class="home-list-item">

		
			
				<div class="home-list-item__image-wrapper">

					<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/10/frame-224.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="home-list-item__image" alt="3. Karel Komárek" decoding="async" loading="lazy" />
				</div>

			
			<div class="home-list-item__text-wrapper">

				
					<span class="home-list-item__name subtitle">3. Karel Komárek</span>

				
				
				
			</div>

			
		</a>

	


			
		</div>

	</div>

</div>
</div>




	<div class="home-category-type-d">

		<div class="home-category-type-d__header">
			


	<div class="category-header">

		<a href="https://forbes.cz/tag/technologie/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Technologie</h2>
		</a>

	</div>

		</div>

		


	<div class="two-column-featured-articles">

		<div class="row">

			<div class="col-12 col-lg-6 two-column-featured-articles__featured-wrapper">

								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--featured">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/pruhledna-televize-nebo-kyberfen-co-zaujalo-na-letosnim-veletrhu-ces/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/tv.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Průhledná televize nebo kyberfén. Co zaujalo na letošním veletrhu CES?" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/technologie/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Technologie			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/karelwolf/" class="article-details__author footnote">Karel Wolf</a>

			
		

		<span class="article-details__publish-time footnote">12.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">5 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/pruhledna-televize-nebo-kyberfen-co-zaujalo-na-letosnim-veletrhu-ces/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h3 class="article-card__title cz">

						Průhledná televize nebo kyberfén. Co zaujalo na letošním veletrhu CES?
					</h3>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
						</div>
						<div class="col-12 col-lg-6 two-column-featured-articles__regular-wrapper">

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/mate-kvantovy-pocitac-a-muzeme-ho-videt-jak-vypada-vyvojove-centrum-ibm/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/ibmq.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Máte kvantový počítač? A&nbsp;můžeme ho vidět? Jak vypadá vývojové středisko IBM" loading="lazy">
		</a>

		
		
			<style>
	:root {
		--hover-color: #d89a52	}
</style>


	<div class="badge ">

		
				<a href="/premium" class="badge__content-wrapper" style="background-color: #d97706">

				
				
					<img width="150" height="150" src="https://cz.forbesmedia.cz/uploads/2022/09/premium_badge_white_rgb_for_small_tag.svg" class="badge__icon" alt="" decoding="async" loading="lazy" />
				
				
					<span class="badge__label cta-main">Premium</span>

				

				
				</a>

				

					</div>


		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/karelwolf/" class="article-details__author footnote">Karel Wolf</a>

			
		

		<span class="article-details__publish-time footnote">12.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/mate-kvantovy-pocitac-a-muzeme-ho-videt-jak-vypada-vyvojove-centrum-ibm/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Máte kvantový počítač? A&nbsp;můžeme ho vidět? Jak vypadá vývojové středisko IBM
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/od-tradingu-k-marketingu-miliardari-z-ftmo-kupuji-evisions/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/rsz-ftmo-evisions-02.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Od tradingu k&nbsp;marketingu. Miliardáři z&nbsp;FTMO kupují eVisions" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/investice/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Investice			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/janamertova/" class="article-details__author footnote">Jana Mertová</a>

			
		

		<span class="article-details__publish-time footnote">11.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/od-tradingu-k-marketingu-miliardari-z-ftmo-kupuji-evisions/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Od tradingu k&nbsp;marketingu. Miliardáři z&nbsp;FTMO kupují eVisions
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/uzavrit-kruh-za-palety-z-odpadu-ziskali-cesi-evropskou-cenu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/img-8730-oriznute-1.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZWcifQ%3D%3D" alt="Uzavřít kruh. Za palety z&nbsp;odpadu získali Češi evropskou cenu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/cesky-byznys/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Český byznys			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/janamertova/" class="article-details__author footnote">Jana Mertová</a>

			
		

		<span class="article-details__publish-time footnote">9.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/uzavrit-kruh-za-palety-z-odpadu-ziskali-cesi-evropskou-cenu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Uzavřít kruh. Za palety z&nbsp;odpadu získali Češi evropskou cenu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								

			</div>

		</div>

	</div>


	</div>




<div class="wp-block-columns is-layout-flex wp-container-6">
<div class="wp-block-column is-layout-flow">
<div class="cz-newsletter">

	
		


	<div class="category-header">

		<a href="https://newslettery.forbes.cz/cryptoshot/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Forbes Cryptoshot</h2>
		</a>

	</div>


	
	<div class="cz-newsletter__image-wrapper">

		
			<img width="500" height="146" src="https://cz.forbesmedia.cz/uploads/2022/09/nwsltr_cryptoshot.svg" class="cz-newsletter__image cz-newsletter__image--light" alt="" decoding="async" loading="lazy" />
		
		
			<img width="500" height="146" src="https://cz.forbesmedia.cz/uploads/2022/09/nwsltr_cryptoshot_white.svg" class="cz-newsletter__image cz-newsletter__image--dark" alt="" decoding="async" loading="lazy" />
		
	</div>

	

		<div class="cz-newsletter__description-wrapper">

			<p class="newsletterForm">Každou středu vás provedeme světem haší, eliptických křivek, metaverz i&nbsp;memy psích plemen. Cryptoshot je autorský newsletter Karla Wolfa – uznávaného experta na kryptoměny a&nbsp;blockchain.</p>

		</div>

	
	<div class="cz-newsletter__form-wrapper">

		

	<div id="mc_embed_signup">
		<form action="https://forbes.us9.list-manage.com/subscribe/post?u=5b8c945a2a8bd4124bbe2c1cc&amp;id=c11c749073" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
			<div id="mc_embed_signup_scroll">
				<div class="mc-field-group">
					<div class="mc-field-group-wrapper">
						<input type="email" value="" name="EMAIL" class="required email input" id="mce-EMAIL" placeholder="Váš e-mail" />
						<input type="submit" value="Odebírat" name="subscribe" id="mc-embedded-subscribe" class="button button--medium button-primary" />
					</div>
				</div>
				<div id="mce-responses">
					<div class="response" id="mce-error-response" style="display:none"></div>
					<div class="response" id="mce-success-response" style="display:none"></div>
				</div>
				<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5b8c945a2a8bd4124bbe2c1cc_c11c749073" tabindex="-1" value=""></div>
			</div>
		</form>
	</div>
			<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' defer></script>
		<script type='text/javascript' defer>
			jQuery(document).ready(() => {
				(function($) {
					window.fnames = new Array();
					window.ftypes = new Array();
					fnames[0] = 'EMAIL';
					ftypes[0] = 'email';

					/*
					 * Translated default messages for the $ validation plugin.
					 * Locale: CS
					 */
					$.extend($.validator.messages, {
						required: "Tento údaj je povinný.",
						email: "Prosím, zadejte platný e-mail.",
					});
				}(jQuery));
				var $mcj = jQuery.noConflict(true);
			});
		</script>
		<!--End mc_embed_signup-->
	
	</div>

	<div class="cz-newsletter__other-newsletter-wrapper">

		
			<h4 class="cz-newsletter__other-newsletter-title">Znáte naše další newslettery?</h4>

		
		<div class="cz-newsletter__other-newsletters">

			
				
					<div class="cz-newsletter__other-newsletter">

						
							<a href="https://newslettery.forbes.cz/espresso/">
								<img width="500" height="146" src="https://cz.forbesmedia.cz/uploads/2022/09/nwsltr_espresso.svg" class="cz-newsletter__other-newsletter-image cz-newsletter__other-newsletter-image--light" alt="" decoding="async" loading="lazy" />							</a>

						
						
							<a href="https://newslettery.forbes.cz/espresso/">
								<img width="500" height="146" src="https://cz.forbesmedia.cz/uploads/2022/09/nwsltr_espresso_white.svg" class="cz-newsletter__other-newsletter-image cz-newsletter__other-newsletter-image--dark" alt="" decoding="async" loading="lazy" />							</a>

						
					</div>

				
					<div class="cz-newsletter__other-newsletter">

						
							<a href="https://newslettery.forbes.cz/cocktail/">
								<img width="500" height="146" src="https://cz.forbesmedia.cz/uploads/2022/09/nwsltr_cocktail.svg" class="cz-newsletter__other-newsletter-image cz-newsletter__other-newsletter-image--light" alt="" decoding="async" loading="lazy" />							</a>

						
						
							<a href="https://newslettery.forbes.cz/cocktail/">
								<img width="500" height="146" src="https://cz.forbesmedia.cz/uploads/2022/09/nwsltr_cocktail_white.svg" class="cz-newsletter__other-newsletter-image cz-newsletter__other-newsletter-image--dark" alt="" decoding="async" loading="lazy" />							</a>

						
					</div>

				
			
		</div>

	</div>

	
		<div class="cz-newsletter__consent-wrapper">

			<p>Kliknutím na tlačítko „Odebírat“ souhlasíte se <a href="https://forbes.cz/obchodni-podminky-a-informace-ke-zpracovani-osobnich-udaju/">zpracováním osobních údajů</a>.</p>

		</div>

	
</div>
</div>



<div class="wp-block-column is-layout-flow">
<div class="home-jobs">

	<div class="home-jobs__header">

		


	<div class="category-header">

		<a href="https://jobs.forbes.cz/" class="category-header__title-wrapper">
			<h2 class="category-header__title">K tématu</h2>
		</a>

	</div>


	</div>

	
		<div class="home-jobs__list">

			
				
<a href="https://forbes.cz/premium/" class="job-card">

	<div class="job-card__image-wrapper">

		<img width="150" height="150" src="https://cz.forbesmedia.cz/uploads/2022/09/premium_badge_large_continue_reading_rgb.svg" class="job-card__logo" alt="Vše z tištěného magazínu" decoding="async" loading="lazy" />
	</div>

	<div class="job-card__content-wrapper">

		<h4 class="job-card__position">Články Forbes Premium</h4>

		<div class="job-card__details-wrapper">

			<span class="job-card__company">Vše z&nbsp;tištěného magazínu</span>
			<span class="job-card__location">a další exkluzivní čtení</span>
			<span class="job-card__type">Vyzkoušejte!</span>

		</div>

	</div>

</a>

			
				
<a href="https://predplatne.forbes.cz/forbes/shop/tag?tagCode=knihy" class="job-card">

	<div class="job-card__image-wrapper">

		<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/12/kralovna-vsech-onepage2x.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="job-card__logo" alt="Královna všech" decoding="async" loading="lazy" />
	</div>

	<div class="job-card__content-wrapper">

		<h4 class="job-card__position">Knihy z&nbsp;edice Forbes</h4>

		<div class="job-card__details-wrapper">

			<span class="job-card__company">Královna všech</span>
			<span class="job-card__location">Forbes Cooking</span>
			<span class="job-card__type">a další&#8230;</span>

		</div>

	</div>

</a>

			
				
<a href="https://miliardari.forbes.cz/" class="job-card">

	<div class="job-card__image-wrapper">

		<img width="0" src="https://cz.forbesmedia.cz/uploads/2022/10/kellnerova-1.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoianBnIn0%3D" class="job-card__logo" alt="100 nejbohatších" decoding="async" loading="lazy" />
	</div>

	<div class="job-card__content-wrapper">

		<h4 class="job-card__position">Žebříček českých miliardářů</h4>

		<div class="job-card__details-wrapper">

			<span class="job-card__company">100 nejbohatších</span>
			<span class="job-card__location">Aktualizováno v&nbsp;říjnu 2022</span>
			<span class="job-card__type">Čtěte!</span>

		</div>

	</div>

</a>

			
				
<a href="https://forbes.cz/tag/funny-money/" class="job-card">

	<div class="job-card__image-wrapper">

		<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/05/pdcst-icon.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="job-card__logo" alt="by Zdravko Krstanov" decoding="async" loading="lazy" />
	</div>

	<div class="job-card__content-wrapper">

		<h4 class="job-card__position">Podcast Funny Money</h4>

		<div class="job-card__details-wrapper">

			<span class="job-card__company">by Zdravko Krstanov</span>
			<span class="job-card__location">Každý týden</span>
			<span class="job-card__type">Poslechněte si!</span>

		</div>

	</div>

</a>

			
				
<a href="https://forbes.cz/tag/forbes-cooking/" class="job-card">

	<div class="job-card__image-wrapper">

		<img width="0" src="https://cz.forbesmedia.cz/uploads/2023/05/forbes-cooking-logo-v1.webp?r=eyJ3IjoxNTAsInEiOjk1LCJzIjoicG5nIn0%3D" class="job-card__logo" alt="Recepty" decoding="async" loading="lazy" />
	</div>

	<div class="job-card__content-wrapper">

		<h4 class="job-card__position">Forbes Cooking</h4>

		<div class="job-card__details-wrapper">

			<span class="job-card__company">Recepty</span>
			<span class="job-card__location">the Forbes way</span>
			<span class="job-card__type">Vyzkoušejte!</span>

		</div>

	</div>

</a>

			
		</div>

	
</div>
</div>
</div>







	<div class="home-category-type-d">

		<div class="home-category-type-d__header">
			


	<div class="category-header">

		<a href="https://forbes.cz/tag/jak-byt-lepsi/" class="category-header__title-wrapper">
			<h2 class="category-header__title">Jak být lepší</h2>
		</a>

	</div>

		</div>

		


	<div class="two-column-featured-articles">

		<div class="row">

			<div class="col-12 col-lg-6 two-column-featured-articles__featured-wrapper">

								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--featured">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/wellness-ve-sluchatkach-jak-pomaha-bily-sum/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/noise.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Wellness ve sluchátkách. Jak pomáhá bílý šum?" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/jak-byt-lepsi/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Jak být lepší			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details">

		

		

		
			
				<a href="https://forbes.cz/autor/forbes_espana/" class="article-details__author footnote">Forbes España</a>

			
		

		<span class="article-details__publish-time footnote">12.&nbsp;1.&nbsp;2024</span>


		
			<span class="article-details__read-time footnote">2 min čtení</span>

		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/wellness-ve-sluchatkach-jak-pomaha-bily-sum/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h3 class="article-card__title cz">

						Wellness ve sluchátkách. Jak pomáhá bílý šum?
					</h3>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
						</div>
						<div class="col-12 col-lg-6 two-column-featured-articles__regular-wrapper">

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/nechtejte-po-lidech-co-byste-sami-nedelali-sedm-lekci-miliardare-z-brooklynu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/vultaggio.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Nechtějte po&nbsp;lidech, co byste sami nedělali. Sedm lekcí miliardáře z&nbsp;Brooklynu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/jak-byt-lepsi/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Jak být lepší			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/forbes-us/" class="article-details__author footnote">Forbes US</a>

			
		

		<span class="article-details__publish-time footnote">11.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/nechtejte-po-lidech-co-byste-sami-nedelali-sedm-lekci-miliardare-z-brooklynu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Nechtějte po&nbsp;lidech, co byste sami nedělali. Sedm lekcí miliardáře z&nbsp;Brooklynu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/chystate-se-za-teplem-uzijte-si-cestu-pres-pul-sveta-bez-jet-lagu/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/jetlag2.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Chystáte se za teplem? Užijte si cestu přes půl světa bez jet lagu" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/jak-byt-lepsi/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Jak být lepší			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/zdenka-tomis/" class="article-details__author footnote">Zdenka Tomis</a>

			
		

		<span class="article-details__publish-time footnote">7.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/chystate-se-za-teplem-uzijte-si-cestu-pres-pul-sveta-bez-jet-lagu/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Chystáte se za teplem? Užijte si cestu přes půl světa bez jet lagu
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								
					<div class="two-column-featured-articles__article-wrapper">

					
<div class="article-card  article-card--small">

	<div class="article-card__image-wrapper">

		<a href="https://forbes.cz/jak-se-letos-nezblaznit-nezapominejme-si-delat-drobne-radosti-radi-psycholog/" class="article-card__image">
			<img decoding="async" src="https://cz.forbesmedia.cz/uploads/2024/01/taborsky.webp?r=eyJ3IjoxMDI0LCJxIjo5NSwicyI6ImpwZyJ9" alt="Jak se letos nezbláznit? Nezapomínejme si dělat drobné radosti, radí psycholog" loading="lazy">
		</a>

		
		
			<a href="https://forbes.cz/tag/rozhovor/" class="article-card__category cta-link-tag after-icon after-icon--line">
				Rozhovor			</a>

		
	</div>

	<div class="article-card__content-wrapper">

		
			<div class="article-card__details-wrapper">

				
					

	<div class="article-details hide-read">

		

		

		
			
				<a href="https://forbes.cz/autor/silvie-friedmannova/" class="article-details__author footnote">Silvie Friedmannová</a>

			
		

		<span class="article-details__publish-time footnote">5.&nbsp;1.&nbsp;2024</span>


		
	</div>


				
			</div>

		
		
			<a href="https://forbes.cz/jak-se-letos-nezblaznit-nezapominejme-si-delat-drobne-radosti-radi-psycholog/" class="article-card__title-wrapper h-align-items--start h-text-decoration--none h-color--top">

				
					<h4 class="article-card__title callout cz">

						Jak se letos nezbláznit? Nezapomínejme si dělat drobné radosti, radí psycholog
					</h4>

				
			</a>

		

		

		
	</div>

</div>

					</div>

					
								

			</div>

		</div>

	</div>


	</div>





<div class="home-blog-link">

	<a class="home-blog-link__button button button-primary button--medium" href="https://forbes.cz/blog/">Načíst další</a>

</div>

	</div>
</main>

			<script>
		let body = document.querySelector('body');
		body.setAttribute("data-locale", "cz");
	</script>
	<script>
		(function(win, doc) {
			function mock(fn) {
				return function() {
					this._.push([fn, arguments])
				}
			}
			function load(url) {
				var script = doc.createElement("script");
				script.type = "text/javascript";
				script.async = true;
				script.src = url;
				doc.getElementsByTagName("head")[0].appendChild(script);
			}
			win.remplib = win.remplib || {};
			var mockFuncs = {
				campaign: "init",
				tracker: "init trackEvent trackPageview trackCommerce trackTimespent",
				iota: "init"
			};

			Object.keys(mockFuncs).forEach(function (key) {
				if (!win.remplib[key]) {
					var fn, i, funcs = mockFuncs[key].split(" ");
					win.remplib[key] = {_: []};

					for (i = 0; i < funcs.length; i++) {
						fn = funcs[i];
						win.remplib[key][fn] = mock(fn);
					}
				}
			});

			// change URL to location of BEAM remplib.js
			load("https://beam.remp.forbes.cz/assets/lib/js/remplib.js");
			load("https://campaign.remp.forbes.cz/assets/lib/js/remplib.js");
		})(window, document);

		function getCookie(name) {
		  const value = `; ${document.cookie}`;
		  const parts = value.split(`; ${name}=`);
		  if (parts.length === 2) return parts.pop().split(';').shift();
		}

		// configuration
		var rempConfig = {
			// UUIDv4 based REMP BEAM token of appropriate property
			// (see BEAM Admin -> Properties)
			token: 'c628a435-4822-4a96-b150-5f9fcac25816',

			// optional, identification of logged user
			// userId: String,

			// optional, flag whether user is currently subscribed to the displayed content
			userSubscribed: false,

			// optional, IDs of currently active subscriptions granting user access
			//subscriptionIds: [String, String, String],

			// optional, this is by default generated by remplib.js library and you don't need to override it
			// browserId: String,

			// optional, controls where cookies (UTM parameters of visit) are stored
			cookieDomain: ".forbes.cz",

			// optional, controls which type of storage should be used by default (`local_storage` or `cookie`)
			// default is `local_storage`
			storage: "local_storage",

			// optional, specifies how long to store specific keys in storage (in minutes)
			storageExpiration: {
				// default value (in minutes) for all storage keys if not overriden in `keys`
				"default": 15,
				// specific pairs of key name and life length in minutes
				"keys": {
					"browser_id": 1051200, // 2 years in minutes
					"campaigns": 1051200
				}
			},

			// optional, article details if pageview is on the article
			// article: {
			// 	id: String, // required, ID of article in your CMS
			// 	author_id: String, // optional, name of the author
			// 	category: String, // optional, category/section of the article
			// 	locked: Boolean, // optional, flag whether content was locked at the time of visit for this pageview
			// 	contentType: String, // optional, type of the content, 'article' if not specified or 'feed'
			// 	tags: [String, String, String], // optional, any tags associated with the article
			// 	elementFn: Function // callback returning DOM element containing article content
			// },

			campaign: {
				url: 'https://campaign.remp.forbes.cz',
				showtimeExperiment: true,
				variables: {
					email: {
						value: function() {
							return window.crm_user?.user?.email || null
						}
					},
					token: {
						value: function() {
							return getCookie('n_token') || null
						}
					}
				}
			},

			// required, Tracker API specific options
			tracker: {
				// required, URL location of BEAM Tracker
				url: "https://tracker.beam.remp.forbes.cz",

				// optional time spent measuring (disabled by default)
				// if enabled, tracks time spent on current page
				timeSpent: {
					enabled: true, // if enabled, tracks time spent on the webpage
					interval: 5, // optional, frequency of sending tracked progress in seconds (default value 5; interval is progressive and gets prolonged in time)
				},

				// optional, achieved scroll depth tracking (disabled by default)
				readingProgress: {
					enabled: true, // if enabled, tracks achieved scroll depth
					interval: 5 // optional, frequency of sending tracked progress in seconds (default value 5)
				},

				// optional, allows to specify custom referer medium
				// this value overrides implicit referer medium computed from Referer header by tracker
				//refererMedium: "push_notification"
			}
		};

		if(window.crm_user) {
			rempConfig.userId = String(window.crm_user.user.id)
			rempConfig.subscriptionIds = window.crm_user.subscriptions
				.filter(subcription => subcription.id)
				.map(subscription => String(subscription.id))
			rempConfig.userSubscribed = !window.crm_user.access.includes('free')
		}

		const Article= window.Article
		if(typeof Article !== 'undefined') {
			const tags = Article.tags.map(({ name }) => name)
			rempConfig.article = {
				id: String(Article.id), // required, ID of article in your CMS
				author_id: Article.author[0]?.name, // optional, name of the author
				category: Article.tag, // optional, category/section of the article
				locked: tags.includes('Premium') && !rempConfig.userSubscribed, // optional, flag whether content was locked at the time of visit for this pageview
				contentType: 'article', // optional, type of the content, 'article' if not specified or 'feed'
				tags: tags, // optional, any tags associated with the article
				elementFn: function(){
					return document.querySelector("div.body__content-wrapper")
				} // callback returning DOM element containing article content
			}
		}

		remplib.tracker.init(rempConfig);
		remplib.campaign.init(rempConfig);
	</script>
	<style>
		.serif {
			font-family: serif;
		}

		.sans-serif {
			font-family: sans-serif;
		}

		/* transitions */

		.remp-banner #preview-close.hidden {
			display: none;
		}

		.remp-banner .fade-enter-active, .fade-leave-active {
			transition: opacity .5s
		}
		.remp-banner .fade-enter,
		.remp-banner .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
			opacity: 0
		}

		.remp-banner .bounce-enter-active {
			animation: bounce linear 0.5s;
			animation-iteration-count: 1;
			transform-origin: 50% 50%;
		}
		@keyframes bounce{
			0% { transform: translate(0px,0px) }
			15% { transform: translate(0px,-25px) }
			30% { transform: translate(0px,0px) }
			45% { transform: translate(0px,-15px) }
			60% { transform: translate(0px,0px) }
			75% {  transform: translate(0px,-5px) }
			100% { transform: translate(0px,0px)  }
		}

		.remp-banner .shake-enter-active{
			animation: shake linear 0.5s;
			animation-iteration-count: 1;
			transform-origin: 50% 50%;
		}
		@keyframes shake{
			0% { transform: translate(0px,0px) }
			10% { transform: translate(-10px,0px) }
			20% { transform: translate(10px,0px) }
			30% { transform: translate(-10px,0px) }
			40% { transform: translate(10px,0px) }
			50% { transform: translate(-10px,0px) }
			60% { transform: translate(10px,0px) }
			70% { transform: translate(-10px,0px) }
			80% { transform: translate(10px,0px) }
			90% { transform: translate(-10px,0px) }
			100% { transform: translate(0px,0px) }
		}

		.remp-banner .fade-in-down-enter-active {
			animation: fadeInDown ease 0.5s;
			animation-iteration-count: 1;
			transform-origin: 50% 50%;
			animation-fill-mode:forwards; /*when the spec is finished*/
		}

		@keyframes fadeInDown{
			0% { opacity: 0;  transform: translate(0px,-25px) }
			100% { opacity: 1; transform: translate(0px,0px) }
		}

		.remp-banner-text-input {
			/* Different fonts display accent characters in different ways,
			 * e.g. putting 'ACUTE ACCENT' unicode char as a accent character on the following letter, therefore treating it as a normal letter accent.
			 *
			 * However, we want to show this to user in text inputs (while designing banner), so he/she is aware this might cause problems in some browsers.
			 * Helvetica font displays 'ACUTE ACCENT' unicode character separately from the following letter.
			 */
			font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
		}
	</style><style id='core-block-supports-inline-css' type='text/css'>
.wp-container-3.wp-container-3,.wp-container-6.wp-container-6{flex-wrap:nowrap;}
</style>
<script type='text/javascript' id='common-script-js-extra'>
/* <![CDATA[ */
var ajaxUrlObject = {"url":"https:\/\/forbes.cz\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/common.min.js?ver=1704490185' id='common-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/inc/libraries/slick/slick.min.js?ver=6.2' id='slick-slider-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/inc/libraries/splide/splide.min.js?ver=/var/app/current/wp-content/themes/frontend/inc/libraries/splide/splide.min.js' id='splide-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/inc/libraries/splide/splide-extension-intersection.min.js?ver=/var/app/current/wp-content/themes/frontend/inc/libraries/splide/splide-extension-intersection.min.js' id='splide-extension-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/remp-banner.min.js?ver=/var/app/current/wp-content/themes/frontend/minified-js/remp-banner.min.js' id='remp-banner-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/notifications/scripts.min.js?ver=1704490185' id='notifications-script-js'></script>
<script type='text/javascript' id='auth-script-js-extra'>
/* <![CDATA[ */
var vars = {"translations":{"emailError":"Zadejte pros\u00edm platnou e-mailovou adresu.","passwordError":"Zadejte pros\u00edm platn\u00e9 heslo."},"myAccountPageLink":"https:\/\/forbes.cz\/"};
/* ]]> */
</script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/authentication/scripts.min.js?ver=1704490185' id='auth-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/navigation/script.min.js?ver=1704490185' id='navigation-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/footer/script.min.js?ver=1704490185' id='footer-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/search/script.min.js?ver=1704490185' id='search-form-scripts-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/social-icons/scripts.min.js?ver=1704490185' id='social-icons-scripts-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/onepage-theme-switcher/scripts.min.js?ver=1704490185' id='theme-switcher-script-js'></script>
<script type='text/javascript' src='https://www.googleoptimize.com/optimize.js?id=OPT-K7CT6MS' id='googleoptimize-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/premium-lock/premium-lock.min.js?ver=1704490185' id='remp-premium-lock-js'></script>
<script type='text/javascript' id='cz-ads-js-extra'>
/* <![CDATA[ */
var adsData = {"isArticle":"","currentTags":"[]","currentTopTag":"\"Misc\"","adsLeaderboardDisabled":"","adsBrandingDisabled":"","adsInterscrollerDisabled":"","adsFirstSquareDisabled":"","adsSecondSquareDisabled":"","adsOutstreamDisabled":"","adsSkyscraperDisabled":"","adsSecondarySkyscraperDisabled":"","adsRecommendedDisabled":"","nativeAdLabel":"native ad"};
/* ]]> */
</script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/google/googleads_CZ.min.js?ver=1704490185' id='cz-ads-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/react-app/static/js/main.45f2abf4.js?ver=1.0' id='react-app-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/breaking-news-slider/scripts.min.js?ver=1704490185' id='breaking-news-slider-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/home-page-blocks/podcasts/scripts.min.js?ver=1704490185' id='home-podcasts-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/home-page-blocks/comments/scripts.min.js?ver=1704490185' id='home-comments-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/home-page-blocks/category-type-b/scripts.min.js?ver=1704490185' id='home-type-b-category-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/home-page-blocks/specials-and-rankings-type-b/scripts.min.js?ver=1704490185' id='home-specials-script-js'></script>
<script type='text/javascript' src='https://assets.forbesmedia.cz/wp-content/themes/frontend/minified-js/home-page-blocks/events-carousel/scripts.min.js?ver=1704490185' id='event-carousel-script-js'></script>

		

<div class="footer">

	<div class="container">

		<div class="footer__wrapper h-width--full h-pt--50 h-pt--lg--32">

			<div class="row h-flex--lg--column">

				<div class="col-lg-2 col-12">

					<div class="footer__logo-wrapper h-mb--lg--32">

						
<a class="main-logo" href="/">
	
		<img class="main-logo__image h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_gray.svg" alt="">

	
	
		<img class="main-logo__image main-logo__image--dark h-object-fit--contain h-width--full" src="https://cz.forbesmedia.cz/uploads/2022/09/frbs_logo_main_rgb_white.svg" alt="">

	</a>

					</div>

				</div>

				<div class="col-lg-10 col-12">

					<div class="footer__links-wrapper h-d--flex h-flex--column">

						
							
								<div class="footer__section h-d--flex h-flex--column h-align-items--start h-mb--32 h-mb--sm--16 h-position--relative">

									
										<span class="lead footer__section-title h-width--full h-mb--16">Témata</span>

										<ul class="footer__links-list h-p--0 h-m--0 h-width--full">

											<div class="footer__links-list-wrapper h-d--flex h-d--sm--grid h-flex--wrap h-align-items--center h-justify-content--start">

												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/byznys/">
																Byznys															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/forbes-life/">
																Forbes Life															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/forbes-zebricky/">
																Žebříčky															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/specialy/">
																Speciály															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/komentare/">
																Názory															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/forbes-cooking/">
																Forbes Cooking															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/jak-byt-lepsi/">
																Jak být lepší															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/forbes-woman/">
																Forbes Woman															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/breaking-news/">
																Breaking News															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/brand-voice/">
																BrandVoice															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/advoice/">
																AdVoice															</a>
														</li>

													
												
											</div>

										</ul>

									
								</div>

							
								<div class="footer__section h-d--flex h-flex--column h-align-items--start h-mb--32 h-mb--sm--16 h-position--relative">

									
										<span class="lead footer__section-title h-width--full h-mb--16">Další obsah</span>

										<ul class="footer__links-list h-p--0 h-m--0 h-width--full">

											<div class="footer__links-list-wrapper h-d--flex h-d--sm--grid h-flex--wrap h-align-items--center h-justify-content--start">

												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/premium/">
																Forbes Premium															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/autori/autori-forbesu/">
																Autoři															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://newslettery.forbes.cz/espresso/">
																Newsletter Espresso															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://newslettery.forbes.cz/cocktail/">
																Newsletter Cocktail															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://newslettery.forbes.cz/cryptoshot/">
																Newsletter Cryptoshot															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/tag/forbes-podcast/">
																Podcasty															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://predplatne.forbes.cz/products/shop">
																Obchod															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://predplatne.forbes.cz/forbes/shop/tag?tagCode=knihy">
																Knihy															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://jobs.forbes.cz/">
																Forbes Jobs															</a>
														</li>

													
												
											</div>

										</ul>

									
								</div>

							
								<div class="footer__section h-d--flex h-flex--column h-align-items--start h-mb--32 h-mb--sm--16 h-position--relative">

									
										<span class="lead footer__section-title h-width--full h-mb--16">Informace</span>

										<ul class="footer__links-list h-p--0 h-m--0 h-width--full">

											<div class="footer__links-list-wrapper h-d--flex h-d--sm--grid h-flex--wrap h-align-items--center h-justify-content--start">

												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/eventy/">
																Eventy															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://predplatne.forbes.cz/">
																Předplatné															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/inzerce/">
																Inzerce															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://www.cocuma.cz/company/forbes/">
																Kariéra															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/kontakty/">
																Kontakty															</a>
														</li>

													
												
													
														
														<li class="cta-link-tag h-mb--10 h-mx--10 h-mx--sm--0 h-mb--sm--0">
															<a class="h-text-decoration--none h-color--low h-text--uppercase h-font-family--secondary-font h-fs--14 h-line-height--16 h-fw--400" href="https://forbes.cz/obchodni-podminky-a-informace-ke-zpracovani-osobnich-udaju/">
																VOP a osobní údaje															</a>
														</li>

													
												
											</div>

										</ul>

									
								</div>

							
						
					</div>

					
					<div class="justPhone">
										</div>

				</div>

			</div>

		</div>

	</div>

	<div class="footer__bottom h-width--full">

		<div class="container">

			<div class="footer__bottom-wrapper h-d--flex h-flex--md--column-reverse h-justify-content--between h-align-items--center h-py--20 h-py--md--40">

				
					<span class="footer__copyright-text caption h-color--low h-m--0">Copyright © 2024 MediaRey, SE </span>

				
				
					<div class="footer__social-media-wrapper h-d--flex h-align-items--center">

						
							<a href="https://facebook.com/forbescesko" rel="nofollow" class="social-icon icon--facebook"></a>

						
							<a href="https://twitter.com/forbescesko" rel="nofollow" class="social-icon icon--twitter"></a>

						
							<a href="https://instagram.com/forbescesko" rel="nofollow" class="social-icon icon--instagram"></a>

						
							<a href="https://linkedin.com/company/forbes-%C4%8Desko/" rel="nofollow" class="social-icon icon--linkedin"></a>

						
					</div>

				
			</div>

		</div>

	</div>

</div>

					<div class="googlead--mobile-popup-wrapper googlead-container">
				<div class="mobile-popup-close">
				</div>
				<div id="mobile-popup-ad" class="googlead--mobile-popup-ad googlead"></div>
			</div>
		
		<div id="remp-banner-newsletter" class="remp-banner remp-banner__newsletter banner-placeholder">
		</div>
		<div id="remp-banner-full-width" class="remp-banner remp-banner__full-width banner-placeholder">
		</div>
		<div id="remp-banner-snackbar" class="remp-banner remp-banner__snackbar banner-placeholder">
		</div>
		<div id="remp-banner-overlay-1" class="remp-banner remp-banner__overlay-1 banner-placeholder">
		</div>
		<div id="remp-banner-overlay-2" class="remp-banner remp-banner__overlay-2 banner-placeholder">
		</div>

		<script>
			var apiUrl = 'https://prod.api.cz.forbes-ai.splendex.dev/';
		</script>

		</div>

		<div id="notifications">
	<!-- Notification snackbars are rendered here dynamically from JS script -->
</div>

		

		<noscript></div></noscript>

		

<script>
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'PageTitle': 'Forbes',
		'PageType': 'homepage',
	});



	function containsObject(arr, obj) {
		for (let i = 0; i < arr.length; i++) {
			if (JSON.stringify(arr[i]) === JSON.stringify(obj)) {
				return true;
			}
		}
		return false;
	}

	window.postData = window.postData || {};
	if (!containsObject(window.dataLayer, window.postData)) {
		window.dataLayer.push(window.postData);
	}
</script>

		</body>

		</html>