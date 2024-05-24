!function(r){"use strict";var w=function(e){var t,o,n={},i=e.data("model-cid");return a&&i?(t=elementorFrontend.config.elements.data[i],o=elementorFrontend.config.elements.keys[t.attributes.widgetType||t.attributes.elType],jQuery.each(t.getActiveControls(),):n=e.data("settings")||{},n},a=!1,d=function(t,o,e){r(t).closest(".elementor-widget-wrap").addClass("e-swiper-container"),r(t).closest(".elementor-widget").addClass("e-widget-swiper"),new elementorFrontend.utils.swiper(t,e).then(},p=function(e,t,o,n){"yes"===o.pause_on_hover&&(e.on("mouseover",function(){n.autoplay.stop()}),e.on("mouseout",),a&&t.resize(,i(n,".pp-swiper-slider","swiper")},e=function(e,t){var o=w(e),e=e.find(".pp-swiper-slider"),n=e.attr("data-slider-settings")!==undefined?JSON.parse(e.attr("data-slider-settings")):"";d(e,o,n)},i=function(n,i,a){void 0===a&&(a="swiper");["ppe-tabs-switched","ppe-toggle-switched","ppe-accordion-switched","ppe-popup-opened"].forEach(function(o){void 0!==o&&r(document).on(o,function(e,t){0<(t="ppe-popup-opened"==o?r(".pp-modal-popup-"+t):t).find(i).length&&setTimeout(function(){"swiper"===a?n.update():"gallery"===a&&t.find(".pp-image-gallery").eq(0).isotope("layout")},100)})})},t=function(e,t){var o=e.data("id"),e=e.find(".pp-image-hotspots"),e=JSON.parse(e.attr("data-tooltip-options")),n="pp-tooltip pp-tooltip-"+o,i=e.arrow,a=e.always_open,r=e.trigger,d=e.distance,p=e.animation,c=e.width,o=e.size,s=e.zindex;""!==o&&undefined!==o&&(n+=" pp-tooltip-size-"+o),t(".pp-hot-spot-wrap[data-tooltip]").each(function(){var e=t(this).data("tooltip-position");t(this).pptooltipster({trigger:r,animation:p,minWidth:0,maxWidth:c,ppclass:n,position:e,arrow:"yes"===i,distance:d,interactive:!0,positionTracker:!0,zIndex:s}),"yes"===a&&(t(this).pptooltipster(),t(this).pptooltipster("show"))})},o=function(e,t){var e=e.find(".pp-image-comparison").eq(0),o=e.data("settings");e.twentytwenty({default_offset_pct:o.visible_ratio,orientation:o.orientation,before_label:o.before_label,after_label:o.after_label,move_slider_on_hover:o.slider_on_hover,move_with_handle_only:o.slider_with_handle,click_to_move:o.slider_with_click,no_overlay:o.no_overlay})},n=function(e,n){var t=e.find(".pp-counter").eq(0),o=t.data("target"),i=e.find(".pp-counter-number").data("separator"),e=e.find(".pp-counter-number").data("separator-char"),a=""!==e?"("+e+"ddd).dd":"(,ddd).dd";"undefined"!=typeof elementorFrontend.waypoint&&elementorFrontend.waypoint(t,function(){n(o).each(function(){var e=n(this).data("to"),t=n(this).data("speed"),o=new Odometer({el:this,value:0,duration:t,format:"yes"===i?a:""});o.render(),setInterval(})},{offset:"80%",triggerOnce:!0})},c=function(e,t){var o=0;e.find(".swiper-slide").each(,e.find(".pp-info-box-content-wrap").css("min-height",o)},s=function(t,o){var n=w(t),i=t.find(".pp-info-box-carousel"),e=i.attr("data-slider-settings")!==undefined?JSON.parse(i.attr("data-slider-settings")):"",a=n.equal_height_boxes;i.length&&(o(i).closest(".elementor-widget-wrap").addClass("e-swiper-container"),o(i).closest(".elementor-widget").addClass("e-widget-swiper"),new elementorFrontend.utils.swiper(i,e).then(function(e){"yes"===a&&(c(t,o),e.on("slideChange",),p(i,n,e)}))},l=function(e,t){var o,n=e.data("id"),i=w(e),a=e.find(".pp-instagram-feed").eq(0),r=i.feed_layout;a.length&&("carousel"===r?(a=e.find(".pp-swiper-slider").eq(0),e=JSON.parse(a.attr("data-slider-settings")),d(a,i,e)):"masonry"===r&&(o=t("#pp-instafeed-"+n).imagesLoaded())},f=function(e,t){var o=e.find(".pp-image-scroll-container"),n=o.find(".pp-image-scroll-overlay"),i=o.find(".pp-image-scroll-vertical"),e=w(e),a=o.find(".pp-image-scroll-image img"),r=e.direction_type,d=e.reverse,e=e.trigger_type,p=null;function c(){a.css("transform",("vertical"==r?"translateY":"translateX")+"( -"+p+"px)")}function s(){a.css("transform",("vertical"==r?"translateY":"translateX")+"(0px)")}function l(){p="vertical"==r?a.height()-o.height():a.width()-o.width()}"scroll"==e?(o.addClass("pp-container-scroll"),"vertical"==r?i.addClass("pp-image-scroll-ver"):o.imagesLoaded():("yes"===d&&o.imagesLoaded(,"vertical"==r&&i.removeClass("pp-image-scroll-ver"),o.mouseenter(function(){o.removeClass("pp-container-scroll-instant"),l(),("yes"===d?s:c)()}),o.mouseleave(function(){("yes"===d?c:s)()}))},m=function(e,r){var t=e.find(".pp-accordion-tab-title"),e=w(e),d=e.accordion_type,p=e.toggle_speed;t.each(function(){r(this).hasClass("pp-accordion-tab-active-default")&&(r(this).addClass("pp-accordion-tab-show pp-accordion-tab-active"),r(this).next().slideDown(p))}),t.unbind("click"),t.on("click keypress",function(e){var t,o,n,i,a;e.preventDefault(),1!=e.which&&13!=e.which&&32!=e.which&&e.which!=undefined||(t=(e=r(this)).parent(),o=e.closest(".pp-advanced-accordion"),n=e.closest(".pp-accordion-item"),i=o.find(".pp-accordion-tab-title"),a=o.find(".pp-accordion-tab-content"),r(document).trigger("ppe-accordion-switched",[t]),"accordion"===d?(i.removeClass("pp-accordion-tab-active-default"),a.removeClass("pp-accordion-tab-active-default"),e.hasClass("pp-accordion-tab-show")?(n.removeClass("pp-accordion-item-active"),e.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),e.attr("aria-expanded","false"),e.next().slideUp(p)):(o.find(".pp-accordion-item").removeClass("pp-accordion-item-active"),i.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),a.slideUp(p),e.toggleClass("pp-accordion-tab-show pp-accordion-tab-active"),i.attr("aria-expanded","false"),n.toggleClass("pp-accordion-item-active"),e.hasClass("pp-accordion-tab-title")&&e.attr("aria-expanded","true"),e.next().slideToggle(p))):e.hasClass("pp-accordion-tab-show")?(e.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),e.next().slideUp(p)):(e.addClass("pp-accordion-tab-show pp-accordion-tab-active"),e.next().slideDown(p)))}),u(),r(window).on("hashchange",};function u(){var e;location.hash&&0<r(location.hash).length&&((e=r(location.hash+".pp-accordion-tab-title"))&&0<e.length&&(location.href="#",r("html, body").animate({scrollTop:e.parents(".pp-accordion-item").offset().top-50+"px"},500,))}var h=function(e){var t="pp-tooltip pp-tooltip-"+e.data("id"),o=e.find(".pp-button[data-tooltip]").data("tooltip-position"),n=elementorFrontend.config.breakpoints;window.innerWidth<=n.lg&&window.innerWidth>=n.md&&(o=e.find(".pp-button[data-tooltip]").data("tooltip-position-tablet")),window.innerWidth<n.md&&(o=e.find(".pp-button[data-tooltip]").data("tooltip-position-mobile")),e.find(".pp-button[data-tooltip]").pptooltipster({trigger:"hover",animation:"fade",ppclass:t,side:o,interactive:!0,positionTracker:!0})},g=function(e,t){t(document).ready(},v=function(e,t){var o=e.find(".pp-image-accordion").eq(0),e=w(e),n=e.accordion_action,e=e.disable_body_click,o=o.attr("id"),i=t("#"+o+" .pp-image-accordion-item");"on-hover"===n?i.hover(function(){i.css("flex","1"),i.removeClass("pp-image-accordion-active"),t(this).addClass("pp-image-accordion-active"),i.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),t(this).find(".pp-image-accordion-content-wrap").addClass("pp-image-accordion-content-active"),t(this).css("flex","3")},function(){i.css("flex","1"),i.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),i.removeClass("pp-image-accordion-active")}):"on-click"===n&&(i.click(function(e){e.stopPropagation(),i.css("flex","1"),i.removeClass("pp-image-accordion-active"),t(this).addClass("pp-image-accordion-active"),i.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),t(this).find(".pp-image-accordion-content-wrap").addClass("pp-image-accordion-content-active"),t(this).css("flex","3")}),t("#"+o).click(,"yes"!==e&&t("body").click(function(){i.css("flex","1"),i.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),i.removeClass("pp-image-accordion-active")}))},y=function(e,t){void 0!==e&&e.find("select:not([multiple])").each(function(){var e=t(this);(e.next().hasClass("chosen-container")?e.next():e).wrap("<span class='pp-gf-select-custom'></span>")})},b=function(n,i){var e=n.data("id"),t=n.find(".pp-pricing-table-tooptip[data-tooltip]"),o=w(n),a="pp-tooltip pp-tooltip-"+e,r=o.tooltip_arrow,d=o.tooltip_trigger,p=o.tooltip_animation,e=o.tooltip_size,c=o.tooltip_zindex,s=elementorFrontend.config.breakpoints;""!==e&&undefined!==e&&(a+=" pp-tooltip-size-"+e),t.each(function(){var e=i(this).data("tooltip-position"),t=i(this).data("tooltip-width"),o=i(this).data("tooltip-distance");window.innerWidth<=s.lg&&window.innerWidth>=s.md&&(e=n.find(".pp-pricing-table-tooptip[data-tooltip]").data("tooltip-position-tablet")),window.innerWidth<s.md&&(e=n.find(".pp-pricing-table-tooptip[data-tooltip]").data("tooltip-position-mobile")),i(this).pptooltipster({trigger:d,animation:p,minWidth:t,ppclass:a,side:e,arrow:"yes"===r,distance:o,interactive:!0,positionTracker:!0,zIndex:c})})},_=function(e,p){var t,c,s,o=w(e),n=e.find(".pp-content-reveal-content-wrapper"),i=e.find(".pp-content-reveal-content"),a=e.find(".pp-content-reveal-saparator"),r=e.find(".pp-content-reveal-button-inner"),d=e.find(".pp-content-reveal-buttons-wrapper"),l=i.outerHeight(),f=n.data("scroll-top"),m=n.data("visibility"),u=n.data("content-height"),h=1e3*n.data("speed"),g=n.data("lines"),e=e.find(".pp-content-reveal-content p").css("line-height"),v=i.css("padding-top");"reveal"===o.default_content_state&&a.hide(),"lines"==m?("0"==g?t=n.outerHeight():(t=parseInt(e,10)*g+parseInt(v,10),"unreveal"===o.default_content_state&&n.css("height",t+"px")),m=i.find("> *"),s=c=0,m.each(function(e){if(c<g){n=this,r=window.getComputedStyle(n),(d=document.createElement(n.nodeName)).setAttribute("style","margin:0px;padding:0px;font-family:"+r.fontFamily+";font-size:"+r.fontSize),d.innerHTML="test",r=(d=n.parentNode.appendChild(d)).clientHeight,d.parentNode.removeChild(d);var t=r,o=p(this).outerHeight()/t,n=window.getComputedStyle(this);if(1<o&&isFinite(o)){for(var i=0,a=1,a=1;a<=o;a++)c<g&&(s+=t,c++,i++);i===o&&(s+=parseInt(n.marginTop)+parseInt(n.marginBottom))}else s+=p(this).outerHeight(!0),c++}var n,r,d}),i.outerHeight(!0)-1<=s&&(d.hide(),a.hide())):("unreveal"===o.default_content_state&&n.css("height",u+"px"),t=u),r.on("click",function(){a.slideToggle(h),p(this).toggleClass("pp-content-revealed"),r.hasClass("pp-content-revealed")?n.animate({height:l+"px"},h):(n.animate({height:t+"px"},h),"yes"==f&&p("html, body").animate({scrollTop:n.offset().top-50+"px"}))})},C=function(e){var t,o,n,i,a,r;e.data("pp-wrapper-link")&&(t=e.data("pp-wrapper-link"),o=e.data("id"),n=t.url,i=t.is_external?"_blank":"_self",a=t.nofollow?"nofollow":"",r=document.createElement("a"),e.on("click.onPPWrapperLink",function(){r.id="pp-wrapper-link-"+o,r.href=n,r.target=i,r.rel=a,r.style.display="none",document.body.appendChild(r);var e=document.getElementById(r.id),t=(e.click(),setTimeout()}))};r(window).on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&(a=!0),elementorFrontend.hooks.addAction("frontend/element_ready/pp-image-hotspots.default",t),elementorFrontend.hooks.addAction("frontend/element_ready/pp-image-comparison.default",o),elementorFrontend.hooks.addAction("frontend/element_ready/pp-counter.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/pp-logo-carousel.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/pp-info-box-carousel.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/pp-instafeed.default",l),elementorFrontend.hooks.addAction("frontend/element_ready/pp-team-member-carousel.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/pp-scroll-image.default",f),elementorFrontend.hooks.addAction("frontend/element_ready/pp-advanced-accordion.default",m),elementorFrontend.hooks.addAction("frontend/element_ready/pp-content-ticker.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/pp-buttons.default",h),elementorFrontend.hooks.addAction("frontend/element_ready/pp-twitter-timeline.default",g),elementorFrontend.hooks.addAction("frontend/element_ready/pp-twitter-tweet.default",g),elementorFrontend.hooks.addAction("frontend/element_ready/pp-image-accordion.default",v),elementorFrontend.hooks.addAction("frontend/element_ready/pp-gravity-forms.default",y),elementorFrontend.hooks.addAction("frontend/element_ready/pp-pricing-table.default",b),elementorFrontend.hooks.addAction("frontend/element_ready/pp-content-reveal.default",_),elementorFrontend.hooks.addAction("frontend/element_ready/global",C),a&&parent.document.addEventListener("mousedown",function(e){var t=parent.document.querySelectorAll(".elementor-element--promotion");if(0<t.length)for(var o=0;o<t.length;o++)if(t[o].contains(e.target)){var n,i,a=parent.document.querySelector("#elementor-element--promotion__dialog");0<=t[o].querySelector(".icon > i").classList.toString().indexOf("ppicon")?(a.querySelector(".dialog-buttons-action").style.display="none",null===a.querySelector(".pp-dialog-buttons-action")?(n=document.createElement("a"),i=document.createTextNode("Upgrade to PowerPack Pro"),n.setAttribute("href","https://powerpackelements.com/upgrade/?utm_medium=pp-elements-lite&utm_source=pp-editor-icons&utm_campaign=pp-pro-upgrade"),n.setAttribute("target","_blank"),n.classList.add("dialog-button","dialog-action","dialog-buttons-action","elementor-button","elementor-button-success","pp-dialog-buttons-action"),n.appendChild(i),a.querySelector(".dialog-buttons-action").insertAdjacentHTML("afterend",n.outerHTML)):a.querySelector(".pp-dialog-buttons-action").style.display=""):(a.querySelector(".dialog-buttons-action").style.display="",null!==a.querySelector(".pp-dialog-buttons-action")&&(a.querySelector(".pp-dialog-buttons-action").style.display="none"));break}})})}(jQuery);