/*! elementor-pro - v3.17.0 - 01-11-2023 */
"use strict";(self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[]).push([[121],{2219:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class galleryHandler extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:".elementor-gallery__container",galleryTitles:".elementor-gallery-title",galleryImages:".e-gallery-image",galleryItemOverlay:".elementor-gallery-item__overlay",galleryItemContent:".elementor-gallery-item__content"},classes:{activeTitle:"elementor-item-active"}}}getDefaultElements(){const{selectors:e}=this.getSettings(),t={$container:this.$element.find(e.container),$titles:this.$element.find(e.galleryTitles)};return t.$items=t.$container.children(),t.$images=t.$items.children(e.galleryImages),t.$itemsOverlay=t.$items.children(e.galleryItemOverlay),t.$itemsContent=t.$items.children(e.galleryItemContent),t.$itemsContentElements=t.$itemsContent.children(),t}getGallerySettings(){const e=this.getElementSettings(),t=elementorFrontend.config.responsive.activeBreakpoints,n=Object.keys(t),i={},a=elementorFrontend.getDeviceSetting("desktop",e,"ideal_row_height");return n.forEach((n=>{if("widescreen"!==n){const a=elementorFrontend.getDeviceSetting(n,e,"ideal_row_height");i[t[n].value]={horizontalGap:elementorFrontend.getDeviceSetting(n,e,"gap").size,verticalGap:elementorFrontend.getDeviceSetting(n,e,"gap").size,columns:elementorFrontend.getDeviceSetting(n,e,"columns"),idealRowHeight:a?.size}}})),{type:e.gallery_layout,idealRowHeight:a?.size,container:this.elements.$container,columns:e.columns,aspectRatio:e.aspect_ratio,lastRow:"normal",horizontalGap:elementorFrontend.getDeviceSetting("desktop",e,"gap").size,verticalGap:elementorFrontend.getDeviceSetting("desktop",e,"gap").size,animationDuration:e.content_animation_duration,breakpoints:i,rtl:elementorFrontend.config.is_rtl,lazyLoad:"yes"===e.lazyload}}initGallery(){this.gallery=new EGallery(this.getGallerySettings()),this.toggleAllAnimationsClasses()}removeAnimationClasses(e){e.removeClass(((e,t)=>(t.match(/elementor-animated-item-\S+/g)||[]).join(" ")))}toggleOverlayHoverAnimation(){this.removeAnimationClasses(this.elements.$itemsOverlay);const e=this.getElementSettings("background_overlay_hover_animation");e&&this.elements.$itemsOverlay.addClass("elementor-animated-item--"+e)}toggleOverlayContentAnimation(){this.removeAnimationClasses(this.elements.$itemsContentElements);const e=this.getElementSettings("content_hover_animation");e&&this.elements.$itemsContentElements.addClass("elementor-animated-item--"+e)}toggleOverlayContentSequencedAnimation(){this.elements.$itemsContent.toggleClass("elementor-gallery--sequenced-animation","yes"===this.getElementSettings("content_sequenced_animation"))}toggleImageHoverAnimation(){const e=this.getElementSettings("image_hover_animation");this.removeAnimationClasses(this.elements.$images),e&&this.elements.$images.addClass("elementor-animated-item--"+e)}toggleAllAnimationsClasses(){const e=this.getElementSettings(),t=e.background_overlay_hover_animation||e.content_hover_animation||e.image_hover_animation;this.elements.$items.toggleClass("elementor-animated-content",!!t),this.toggleImageHoverAnimation(),this.toggleOverlayHoverAnimation(),this.toggleOverlayContentAnimation(),this.toggleOverlayContentSequencedAnimation()}toggleAnimationClasses(e){"content_sequenced_animation"===e&&this.toggleOverlayContentSequencedAnimation(),"background_overlay_hover_animation"===e&&this.toggleOverlayHoverAnimation(),"content_hover_animation"===e&&this.toggleOverlayContentAnimation(),"image_hover_animation"===e&&this.toggleImageHoverAnimation()}setGalleryTags(e){this.gallery.setSettings("tags","all"===e?[]:[""+e])}bindEvents(){this.elements.$titles.on("click",this.galleriesNavigationListener.bind(this)).on("keyup",(e=>{13!==e.keyCode&&32!==e.keyCode||e.currentTarget.click()}))}galleriesNavigationListener(e){const t=this.getSettings("classes"),n=jQuery(e.target);this.elements.$titles.removeClass(t.activeTitle),n.addClass(t.activeTitle),this.setGalleryTags(n.data("gallery-index"));setTimeout((()=>this.setLightboxGalleryIndex(n.data("gallery-index"))),1e3)}setLightboxGalleryIndex(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";if("all"===e)return this.elements.$items.attr("data-elementor-lightbox-slideshow","all_"+this.getID());this.elements.$items.not(".e-gallery-item--hidden").attr("data-elementor-lightbox-slideshow",e+"_"+this.getID())}onInit(){super.onInit(...arguments),elementorFrontend.isEditMode()&&1<=this.$element.find(".elementor-widget-empty-icon").length&&this.$element.addClass("elementor-widget-empty"),this.elements.$container.length&&(this.initGallery(),this.elements.$titles.first().trigger("click"))}getSettingsDictionary(){if(this.settingsDictionary)return this.settingsDictionary;const e=elementorFrontend.config.responsive.activeBreakpoints,t=Object.keys(e),n={columns:["columns"],gap:["horizontalGap","verticalGap"],ideal_row_height:["idealRowHeight"]};return t.forEach((t=>{"widescreen"!==t&&(n["columns_"+t]=["breakpoints."+e[t].value+".columns"],n["gap_"+t]=["breakpoints."+e[t].value+".horizontalGap","breakpoints."+e[t].value+".verticalGap"],n["ideal_row_height_"+t]=["breakpoints."+e[t].value+".idealRowHeight"])})),n.aspect_ratio=["aspectRatio"],this.settingsDictionary=n,this.settingsDictionary}onElementChange(e){if(-1!==["background_overlay_hover_animation","content_hover_animation","image_hover_animation","content_sequenced_animation"].indexOf(e))return void this.toggleAnimationClasses(e);const t=this.getSettingsDictionary()[e];if(t){const e=this.getGallerySettings();t.forEach((t=>{this.gallery.setSettings(t,this.getItems(e,t))}))}}onDestroy(){super.onDestroy(),this.gallery&&this.gallery.destroy()}}t.default=galleryHandler}}]);