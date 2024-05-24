!{1:[function(t,e,i){"use strict";var o=i.__esModule=!0,i.createMediaQueriesForCustomButton=i.createMediaQueriesForDefaultButton=i.createCssRulesForCustomButton=i.createCssRulesForDefaultButton=void 0;var s=t("./css-helper");i.createCssRulesForDefaultButton=function(t,e){var i,n,r;n=e,r=0,e=function(t,e){t*=36/54;switch(e){case"pushpin":case"thumb-tack":return.7*t;default:return t}}((i=t).height,n),t={height:i.height+"px !important",width:i.width+"px !important"},i=o(o({},t),{"font-size":e+"px"}),n=function(t,e){switch(e){case"circle":return{"margin-top":-.5*t+"px","margin-left":-.5*t*(55/64)+"px"};case"plain":return{"margin-top":-.46875*t+"px","margin-left":-.5*t*(51/73)+"px"};case"thumb-tack":return{"margin-top":-29.5/64*t+"px","margin-left":-.5*t*(41/64)+"px"};case"pushpin":case"pinterest2":return{"margin-top":-.5*t+"px","margin-left":-.5*t+"px"}}}(e,n),s.addMediaQueryRule("a.pinit-button",r,t),s.addMediaQueryRule("a.pinit-button span",r,i),s.addMediaQueryRule("a.pinit-button span:before",r,n)};i.createCssRulesForCustomButton=function(t){var e,i;i=0,t={height:(e=t).height+"px !important",width:e.width+"px !important"},e=o(o({},t),{"background-size":e.width+"px "+e.height+"px !important"}),s.addMediaQueryRule("a.pinit-button",i,t),s.addMediaQueryRule("a.pinit-button span",i,e)}},{"./css-helper":2}],2:[function(t,e,i){"use strict";var n,r;i.__esModule=!0,i.calculateSizeForBreakpoint=i.addMediaQueryRule=i.addCssRule=i.getCurrentBreakpoint=i.BreakpointsList=i.Breakpoints=void 0,(r=n=i.Breakpoints||(i.Breakpoints={}))[r.xsm=0]="xsm",r[r.sm=576]="sm",r[r.md=768]="md",r[r.lg=992]="lg",r[r.xlg=1200]="xlg",i.BreakpointsList=Object.keys(n).filter(.map(,i.getCurrentBreakpoint=function(){for(var t=window.innerWidth,e=i.BreakpointsList.length-1;0<=e;e--)if(t>=i.BreakpointsList[e])return i.BreakpointsList[e];return n.xsm};function o(t,e){return t+" {"+("string"==typeof e?e:Object.keys(e).map(function(t){return t+":"+("content"===t?"'"+e[t]+"'":e[t])}).join(";"))+"}"}function s(t){var e=document.createElement("style");(e=document.head.appendChild(e).sheet).insertRule(t,e.cssRules.length)}var a=((r={})[n.xsm]={width:50,height:50},r[n.sm]={width:60,height:60},r[n.md]={width:80,height:80},r[n.lg]={width:110,height:110},r[n.xlg]={width:1e3,height:1e3},r);i.addCssRule=i.addMediaQueryRule=function(t,e,i){i=o(t,i),i=0<e?"@media (min-width: "+e+"px){ "+i+" }":i;s(i)};i.calculateSizeForBreakpoint=function(t,e){var i,n=a[e],i=(i=t,e=n,n=Math.min(1,e.width/i.width),i=Math.min(1,e.height/i.height),Math.min(n,i));return{height:t.height*i,width:t.width*i}}},{}],3:[function(t,e,i){"use strict";i.__esModule=!0;var n=(r.prototype.getDescription=function(t,e){for(var i="",n=0;n<e.length&&!i;n++)i=this.desc_funcs[e[n]](t);return i||""},r);function r(t){var t=(void 0===t?{}:t).siteTitle,e=void 0===t?"":t;this.desc_funcs={img_title:function(t){return t.attr("title")||t.attr("data-jpibfi-title")},img_alt:post_title:function(t){return t.attr("data-jpibfi-post-title")},post_excerpt:function(t){return t.attr("data-jpibfi-post-excerpt")},img_description:function(t){return t.attr("data-jpibfi-description")},img_caption:function(t){return t.attr("data-jpibfi-caption")},site_title:data_pin_description:}i.default=n},{}],4:[function(t,e,i){"use strict";var n,r;i.__esModule=!0,i.getWidestImageUrlFromSrcset=void 0,(r=n=n||{})[r.Width=0]="Width",r[r.PixelDensity=1]="PixelDensity";var o=/(.+)\s+(\d{1,4})w\s*/i,s=/(.*)\s+(\d{1,3}(\.\d{0,2})?)x\s*/i,a=1,u=2;i.getWidestImageUrlFromSrcset=function(t){var e=t.prop?t.prop("srcset"):t.attr("srcset");if(e&&0!==e.length)try{var i=e.split(","),i=function(t,e){if(e!==n.PixelDensity){t=t.map(function(t){return o.exec(t)}).filter(function(t){return!!t}).map(function(t){return{url:t[a].trim(),width:Number(t[u])}});if(0!==t.length)return t.reduce(t[0])}}(i,function(t){if(0!==t.length)return t.some(function(t){return null!==o.exec(t)})?n.Width:t.some(?n.PixelDensity:void 0}(i));return void 0!==i?i.url:void 0}catch(t){return void(console&&console.error&&console.error(t))}}},{}],5:[function(t,e,i){"use strict";i.__esModule=!0;var n=(r.prototype.getFlag=r.prototype.getQueryParams=r.prototype.log=function(t){this.getFlag("print")&&console.log(this.pluginName+" debug: "+t)},r.prototype.setFlag=function(t,e){void 0===e&&(e=!0),this.flags[t]=e},r.prototype.simplelogObject=function(e){var t;this.getFlag("print")&&(t=Object.keys(e).filter(function(t){return e.hasOwnPrototype(t)}).map(.join(),this.log(t))},r);function r(i){var n=this;this.flags={},this.pluginName=i;var t="undefined"!=typeof console&&void 0!==console.log,e="undefined"!=typeof JSON&&"function"==typeof JSON.stringify;t?(this.logString=this.logObject=e?:(this.logString=function(){},this.logObject=;var r=this.getQueryParams(document.location.search);Object.keys(r).forEach(function(t){var e=t.replace(i+"_","");n.setFlag(e,r[t])})}i.default=n},{}],6:[function(t,e,i){"use strict";i.__esModule=!0;var n=t("./link-generator"),t=(r.prototype.createButton=function(t){t=this.linkGenerator.generate(t);if(t)return this.$element.clone(!1).attr("href",t).click(function(t){t.preventDefault(),t.stopPropagation(),"#"!==t.currentTarget.href.slice(-1)&&window.open(t.currentTarget.href,"mw"+t.timeStamp,"left=20,top=20,width=600,height=500,toolbar=1,resizable=0")})},r.prototype.getSize=r);function r(t,e){this.$=t,this.settings=e,this.linkGenerator=new n.default(e),this.$element=this.$("<a />",{target:"_blank",class:"pinit-button "+e.pin_image});t="default"===e.pin_image?"jpibfi-icon-"+e.pin_image_icon:"";this.$element.html('<span class="'+t+'"></span>'),"default"===e.pin_image&&this.$element.addClass("jpibfi-button-"+e.pin_image_button)}i.default=t},{"./link-generator":9}],7:[function(t,e,i){"use strict";i.__esModule=!0;var n=(r.prototype.createClassList=function(t){return void 0===t&&(t=""),t.split(";").filter(},r.prototype.imageEligible=function(e){return this.imageSizeIsOk(e)&&(0===this.enabledClasses.length||this.enabledClasses.some(function(t){return e.hasClass(t)||0<e.parents("."+t).length}))&&!this.disabledClasses.some(function(t){return e.hasClass(t)||0<e.parents("."+t).length})},r.prototype.imageSizeIsOk=function(t){var e=t[0].clientWidth,t=t[0].clientHeight;return e>=this.minWidth&&t>=this.minHeight},r.prototype.updateSizeConstraints=function(){this.minWidth=window.outerWidth<768?this.settings.min_image_width_small:this.settings.min_image_width,this.minHeight=window.outerWidth<768?this.settings.min_image_height_small:this.settings.min_image_height},r);function r(t){var e=this;this.settings=t,this.disabledClasses=this.createClassList(t.disabled_classes),this.enabledClasses=this.createClassList(t.enabled_classes),this.updateSizeConstraints(),window.addEventListener("resize",!1)}i.default=n},{}],8:[function(t,e,i){"use strict";i.__esModule=!0;var n=t("./show-on-hover-strategy"),t=(r.prototype.init=function(){this.showStrategy=this.getStrategy(),this.showStrategy.start()},r.prototype.getStrategy=r);.default=t},{"./show-on-hover-strategy":11}],9:[function(t,e,r){"use strict";r.__esModule=!0,r.getExtension=void 0;var i=t("../common/description-helper");t("../common/srcset-helper");r.getExtension=function(t){void 0===t&&(t="");t=t.replace(/^https?\:\/\/[^\/?#]+(?:[\/?#]|$)/i,"").split(".");return 1===t.length?"":t[t.length-1].replace(/\?.*/i,"").toLowerCase()};n.prototype.getDescription=n.prototype.getImage=function(t,e){var i=t.attr("data-pin-media")||t.attr("data-jpibfi-src")||t.prop("src");if(i){if(!e)return i;t=r.getExtension(i);return e.extension===t?e.href:i}},n.prototype.getUrl=function(t,e){return t.attr("data-pin-url")?t.attr("data-pin-url"):this.pinLinkedUrl&&e&&(i=e.href,n=(window.location&&window.location.hostname||"").replace("www.",""),0<=i.indexOf(n))&&(n=e.extension,-1!==["","html","php"].indexOf(n))?e.href:t.attr("data-jpibfi-post-url")||window.location.href;var i,n},n.prototype.generate=function(t){var e=t.closest("a[href]"),i=void 0;1===e.length&&(i={extension:r.getExtension(e.prop("href")),href:e.prop("href")});var n=this.getImage(t,i);if(void 0!==n){e=encodeURIComponent(n),n=encodeURIComponent(this.getDescription(t));return"https://pinterest.com/pin/create/bookmarklet/?is_video=false&url="+encodeURIComponent(this.getUrl(t,i))+"&media="+e+"&description="+n}},t=n;function n(t){this.descriptionHelper=new i.default({siteTitle:t.siteTitle}),this.description_option=t.description_option,this.supportSrcset=t.support_srcset,this.pinLinkedUrl=t.pin_linked_url}r.default=t},{"../common/description-helper":3,"../common/srcset-helper":4}],10:[function(t,e,i){"use strict";i.__esModule=!0;function n(t,e,i,n){return t.top+n.top}function r(t,e,i,n){return t.left+n.left}function o(t,e,i,n){return e.top-i.height-n.bottom}function s(t,e,i,n){return e.left-n.right-i.width}function a(t,e,i){return t.top+((e.top-t.top)/2-i.height/2)}function u(t,e,i){return t.left+((e.left-t.left)/2-i.width/2)}var c=(l.prototype.calculate=function(t,e,i,n){return{top:this.topF(t,e,i,n),left:this.leftF(t,e,i,n)}},l);ar p=(h.prototype.calculatePosition=function(t,e,i){return this.positionCalculator.calculate(t,e,i,this.margins)},h);function h(t,e){this.margins=e,this.positionCalculator=function(t){switch(t){case"top-left":return new c(n,r);case"top-right":return new c(n,s);case"bottom-left":return new c(o,r);case"bottom-right":return new c(o,s);default:return new c(a,u)}}(t)}i.default=p},{}],11:[function(t,e,i){"use strict";var n,r=(n=;i.__esModule=!0;var o,t=t("./show-strategy"),r=(o=t.default,r(s,o),s.prototype.init=s.prototype.start=function(){var e=this;this.init();function a(t){return e.$("a.pinit-button["+e.indexerAttr+'="'+t+'"]')}var u="data-jpibfi-timeout",c=0,l=this;l.$(document).delegate(this.settings.image_selector,"mouseenter",function(){var t=l.$(this);if(l.imageFilter.imageEligible(t)){var e=t.attr(l.indexerAttr);e||(e=c++,t.attr(l.indexerAttr,e));var i=a(e);if(0===i.length){var n=l.buttonGenerator.createButton(t);if(!n)return;t.addClass("pinit-hover");var r=l.buttonGenerator.getSize(),o=t.offset(),s={top:o.top+t[0].clientHeight,left:o.left+t[0].clientWidth},r=l.positioner.calculatePosition(o,s,r);t.after(n),n.attr(l.indexerAttr,e).css("visibility","hidden").show().offset(r).css("visibility","visible").hover(function(){return n.attr(u,setTimeout(function(){t.removeClass("pinit-hover"),n.remove()},100))})}else clearTimeout(i.attr(u))}}),l.$(document).delegate(this.settings.image_selector,"mouseleave",function(){var t,e,i;l.logger.getFlag("prevent_hide")||(e=(t=l.$(this)).attr(l.indexerAttr))&&(i=a(e)).attr(u,setTimeout(100))})},s);.default=r},{"./show-strategy":12}],12:[function(t,e,i){"use strict";i.__esModule=!0;var o=t("./image-filter"),s=t("./button-generator"),a=t("./positioner"),u=t("../common/css-generator"),t=(n.prototype.addContainers=function(){var t=this.$(".jpibfi"),e=t.closest("div, article");(e=e.length?e:t.parent()).addClass("jpibfi_container")},n);function n(t,e,i){this.$=t,this.settings=e,this.logger=i,this.imageFilter=new o.default(e),this.buttonGenerator=new s.default(t,e);var n={left:e.button_margin_left,top:e.button_margin_top,right:e.button_margin_right,bottom:e.button_margin_bottom};this.positioner=new a.default(e.button_position,n),this.indexerAttr="data-jpibfi-indexer";var r=this.settings,i=r.pin_image,t=r.pin_image_icon,e=r.pinImageHeight,n=r.pinImageWidth,e=(r.scale_pin_image,{width:n,height:e});switch(i){case"custom":case"old_default":(0,u.createCssRulesForCustomButton)(e);break;case"default":(0,u.createCssRulesForDefaultButton)(e,t)}}i.default=t},{"../common/css-generator":1,"./button-generator":6,"./image-filter":7,"./positioner":10}],13:[function(t,e,i){"use strict";i.__esModule=!0;var n,r=t("./settings"),o=t("./debugger"),s=t("./hover");(n=window.jQuery)(document).ready(function(){var t=window.jpibfi_options,e=new r.default(n.extend({pageUrl:document.URL,pageTitle:document.title,pageDescription:n('meta[name="description"]').attr("content")||""},t.hover)),t=new o.default("jpibfi");window.jpibfi_debugger=t,new s.default(n,e,t).init()})},{"./debugger":5,"./hover":8,"./settings":14}],14:[function(t,e,i){"use strict";i.__esModule=!0;function n(e){var i=this;Object.keys(e).forEach(,this.isTouchDevice="ontouchstart"in window||{}.hasOwnProperty.call(navigator,"maxTouchPoints")}i.default=n},{}]},{},[13]);