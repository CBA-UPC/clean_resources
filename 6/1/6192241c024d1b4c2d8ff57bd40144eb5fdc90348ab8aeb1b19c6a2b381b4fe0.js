/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!"undefined"!=typeof window?window:this,;window.$111 = jQuery;
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),jQuery,window);
/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
*/
((jQuery);
jQuery.fn.selectbox=function(e){var s={className:"jquery-selectbox",animationSpeed:"fast",listboxMaxSize:20,replaceInvisible:!1},t="jquery-custom-selectboxes-replaced",a=!1,i=function(e){var t=e.parents("."+s.className);return e.slideDown(s.animationSpeed,function(){a=!0}),t.addClass("selecthover"),jQuery(document).bind("click",n),e},r=function(e){e.parents("."+s.className);return e.slideUp(s.animationSpeed,function(){a=!1,jQuery(this).parents("."+s.className).removeClass("selecthover")}),jQuery(document).unbind("click",n),e},n=function(e){var i=e.target,n=jQuery("."+s.className+"-list:visible").parent().find("*").andSelf();return jQuery.inArray(i,n)<0&&a&&r(jQuery("."+t+"-list")),!1};return s=jQuery.extend(s,e||{}),this.each(function(){var e=jQuery(this);if(0!=e.filter(":visible").length||s.replaceInvisible){var a=jQuery('<div class="'+s.className+" "+t+'"><div class="'+s.className+'-moreButton" /><div class="'+s.className+"-list "+t+'-list" /><span class="'+s.className+'-currentItem" /></div>');jQuery("option",e).each(function(e,t){var t=jQuery(t),n=jQuery('<span class="'+s.className+"-item value-"+t.val()+" item-"+e+'" id="'+t.val()+'" title="'+t.text()+'">'+t.text()+"</span>");n.click(function(){var e=jQuery(this),t=e.parents("."+s.className),a=e[0].className.split(" ");for(k1 in a)if(/^item-[0-9]+$/.test(a[k1])){a=parseInt(a[k1].replace("item-",""),10);break}var n=e[0].id;t.find("."+s.className+"-currentItem").text(e.text()),t.find("select").val(n).triggerHandler("change");var l=t.find("."+s.className+"-list");l.filter(":visible").length>0?r(l):i(l)}).bind("mouseenter",function(){jQuery(this).addClass("listelementhover")}).bind("mouseleave",function(){jQuery(this).removeClass("listelementhover")}),jQuery("."+s.className+"-list",a).append(n),t.filter(":selected").length>0&&jQuery("."+s.className+"-currentItem",a).text(t.text())}),a.find("."+s.className+"-moreButton,."+s.className+"-currentItem").click(function(){var e=jQuery(this),t=jQuery("."+s.className+"-list").not(e.siblings("."+s.className+"-list"));r(t);var a=e.siblings("."+s.className+"-list");a.filter(":visible").length>0?r(a):i(a)}).bind("mouseenter",function(){jQuery(this).addClass("morebuttonhover")}).bind("mouseleave",function(){jQuery(this).removeClass("morebuttonhover")}),e.hide().replaceWith(a).appendTo(a);var n=a.find("."+s.className+"-list"),l=n.find("."+s.className+"-item").length;l>s.listboxMaxSize&&(l=s.listboxMaxSize),0==l&&(l=1);var c=Math.round(e.width()+5);jQuery.browser.safari&&(c=.94*c),a.css("width",c+"px"),n.css({width:Math.round(c-5)+"px"}),l==s.listboxMaxSize&&n.css({height:l+"em"})}})},jQuery.fn.unselectbox=function(){var e="jquery-custom-selectboxes-replaced";return jQuery(this).each(function(){var s=jQuery(this).filter("."+e);s.replaceWith(s.find("select").show())})};
/*! jQuery UI - v1.11.2 - 2015-01-04
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

((;
jQuery.cookie=function(e,i,n){if("undefined"==typeof i){var o=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),t=0;t<r.length;t++){var p=jQuery.trim(r[t]);if(p.substring(0,e.length+1)==e+"="){o=decodeURIComponent(p.substring(e.length+1));break}}return o}n=n||{},null===i&&(i="",n=$.extend({},n),n.expires=-1);var u="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var s;"number"==typeof n.expires?(s=new Date,s.setTime(s.getTime()+24*n.expires*60*60*1e3)):s=n.expires,u="; expires="+s.toUTCString()}var a=n.path?"; path="+n.path:"",c=n.domain?"; domain="+n.domain:"",m=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(i),u,a,c,m].join("")};
!function(){"use strict";function e(e){function o(o,n){var l,h,k=o==window,m=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(o).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),l=e.extend({},e.blockUI.defaults.css,n.css||{}),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),m=void 0===m?n.message:m,k&&b&&t(window,{fadeOut:0}),m&&"string"!=typeof m&&(m.parentNode||m.jquery)){var g=m.jquery?m[0]:m,v={};e(o).data("blockUI.history",v),v.el=g,v.parent=g.parentNode,v.display=g.style.display,v.position=g.style.position,v.parent&&v.parent.removeChild(g)}e(o).data("blockUI.onUnblock",n.onUnblock);var y,I,w=n.baseZ,U=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+w++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),x=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+w++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+w++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');n.theme&&k?(I='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(w+10)+';display:none;position:fixed">',n.title&&(I+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),I+='<div class="ui-widget-content ui-dialog-content"></div>',I+="</div>"):n.theme?(I='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(w+10)+';display:none;position:absolute">',n.title&&(I+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),I+='<div class="ui-widget-content ui-dialog-content"></div>',I+="</div>"):I=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(w+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(w+10)+';display:none;position:absolute"></div>',y=e(I),m&&(n.theme?(y.css(h),y.addClass("ui-widget-content")):y.css(l)),x.css(n.overlayCSS),x.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&U.css("opacity",0);var S=[U,x,y],C=e(k?"body":o);e.each(S,function(){this.appendTo(C)}),n.theme&&n.draggable&&e.fn.draggable&&y.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var E=f&&(!e.boxModel||e("object,embed",k?null:o).length>0);if(u||E){if(k&&n.allowBodyStretch&&e.boxModel&&e("html,body").css("height","100%"),(u||!e.boxModel)&&!k)var T=a(o,"borderTopWidth"),O=a(o,"borderLeftWidth"),M=T?"(0 - "+T+")":0,B=O?"(0 - "+O+")":0;e.each(S,}if(m&&(n.theme?y.find(".ui-widget-content").append(m):y.append(m),(m.jquery||m.nodeType)&&e(m).show()),(r||n.forceIframe)&&n.showOverlay&&U.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!m?j:c,z=m?j:c;n.showOverlay&&x._fadeIn(n.fadeIn,H),m&&y._fadeIn(n.fadeIn,z)}else n.showOverlay&&x.show(),m&&y.show(),n.onBlock&&n.onBlock();if(i(1,o,n),k?(b=y[0],p=e(":input:enabled:visible",b),n.focusInput&&setTimeout(s,20)):d(y[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(n.timeout);e(o).data("blockUI.timeout",W)}}}function t(o,t){var l=o==window,s=e(o),d=s.data("blockUI.history"),a=s.data("blockUI.timeout");a&&(clearTimeout(a),s.removeData("blockUI.timeout")),t=e.extend({},e.blockUI.defaults,t||{}),i(0,o,t),null===t.onUnblock&&(t.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock"));var c;c=l?e("body").children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),l&&(b=p=null),t.fadeOut?(c.fadeOut(t.fadeOut),setTimeout(function(){n(c,d,t,o)},t.fadeOut)):n(c,d,t,o)}function n(o,t,n,i){o.each(,t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.parent&&t.parent.appendChild(t.el),e(i).removeData("blockUI.history")),"function"==typeof n.onUnblock&&n.onUnblock(i,n)}function i(o,t,n){var i=t==window,s=e(t);if((o||(!i||b)&&(i||s.data("blockUI.isBlocked")))&&(s.data("blockUI.isBlocked",o),n.bindEvents&&(!o||n.showOverlay))){var d="mousedown mouseup keydown keypress";o?e(document).bind(d,n,l):e(document).unbind(d,l)}}function l(o){if(o.keyCode&&9==o.keyCode&&b&&o.data.constrainTabKey){var t=p,n=!o.shiftKey&&o.target===t[t.length-1],i=o.shiftKey&&o.target===t[0];if(n||i)return setTimeout(function(){s(i)},10),!1}var l=o.data;return e(o.target).parents("div."+l.blockMsgClass).length>0?!0:0===e(o.target).parents().children().filter("div.blockUI").length}nction a(o,t){return parseInt(e.css(o,t),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){o(window,e)},e.unblockUI=e.growlUI=function(o,t,n,i){var l=e('<div class="growlUI"></div>');o&&l.append("<h1>"+o+"</h1>"),t&&l.append("<h2>"+t+"</h2>"),void 0===n&&(n=3e3),e.blockUI({message:l,fadeIn:700,fadeOut:1e3,centerY:!1,timeout:n,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})},e.fn.block=function(t){var n=e.extend({},e.blockUI.defaults,t||{});return this.each(,this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative"),this.style.zoom=1,o(this,t)})},e.fn.unblock=e.blockUI.version=2.42,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,onBlock:null,onUnblock:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var b=null,p=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
(function(){var t,i;t=$111,i=t(window),t.fn.stick_in_parent=function(o){var e,s,r,n,l,a,c,p,d,u,f,g,h;for(null==o&&(o={}),h=o.sticky_class,a=o.inner_scrolling,g=o.recalc_every,f=o.parent,d=o.offset_top,p=o.spacer,r=o.bottoming,null==d&&(d=0),null==f&&(f=void 0),null==a&&(a=!0),null==h&&(h="is_stuck"),e=t(document),null==r&&(r=!0),u=n=function(o,s,n,l,c,k,y,m){var v,b,_,w,x,P,V,F,C,z,I,A;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),x=e.height(),V=o.parent(),null!=f&&(V=V.closest(f)),!V.length)throw"failed to find stick parent";if(_=!1,v=!1,I=null!=p?p&&o.closest(p):t("<div />"),I&&I.css("position",o.css("position")),F=function(){var t,i,r;if(!m)return x=e.height(),t=parseInt(V.css("border-top-width"),10),i=parseInt(V.css("padding-top"),10),s=parseInt(V.css("padding-bottom"),10),n=V.offset().top+t+i,l=V.height(),_&&(_=!1,v=!1,null==p&&(o.insertAfter(I),I.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(h),r=!0),c=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-d,k=o.outerHeight(!0),y=o.css("float"),I&&I.css({width:u(o),height:k,display:o.css("display"),"vertical-align":o.css("vertical-align"),"float":y}),r?A():void 0},F(),k!==l)return w=void 0,P=d,z=g,A=function(){var t,u,f,b,C,A;if(!m)return f=!1,null!=z&&(z-=1,0>=z&&(z=g,F(),f=!0)),f||e.height()===x||(F(),f=!0),b=i.scrollTop(),null!=w&&(u=b-w),w=b,_?(r&&(C=b+k+P>l+n,v&&!C&&(v=!1,o.css({position:"fixed",bottom:"",top:P}).trigger("sticky_kit:unbottom"))),c>b&&(_=!1,P=d,null==p&&(("left"===y||"right"===y)&&o.insertAfter(I),I.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(h).trigger("sticky_kit:unstick")),a&&(A=i.height(),k+d>A&&(v||(P-=u,P=Math.max(A-k,P),P=Math.min(d,P),_&&o.css({top:P+"px"}))))):b>c&&(_=!0,t={position:"fixed",top:P},t.width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(h),null==p&&(o.after(I),("left"===y||"right"===y)&&I.append(o)),o.trigger("sticky_kit:stick")),_&&r&&(null==C&&(C=b+k+P>l+n),!v&&C)?(v=!0,"static"===V.css("position")&&V.css({position:"relative"}),o.css({position:"absolute",bottom:s,top:"auto"}).trigger("sticky_kit:bottom")):void 0},C=b=function(){return m=!0,i.off("touchmove",A),i.off("scroll",A),i.off("resize",C),t(document.body).off("sticky_kit:recalc",C),o.off("sticky_kit:detach",b),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),V.position("position",""),_?(null==p&&(("left"===y||"right"===y)&&o.insertAfter(I),I.remove()),o.removeClass(h)):void 0},i.on("touchmove",A),i.on("scroll",A),i.on("resize",C),t(document.body).on("sticky_kit:recalc",C),o.on("sticky_kit:detach",b),setTimeout(A,0)}},l=0,c=this.length;c>l;l++)s=this[l],n(t(s));return this}}).call(this);
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.0
------------------------------------------------------------------------- */

(function($) {
	$.prettyPhoto = {version: '3.0'};

	$.fn.prettyPhoto = function(pp_settings) {
		pp_settings = jQuery.extend({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: false, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'facebook', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details clearfix"> \
											<p class="pp_description"></p> \
											<a class="pp_close" href="#">Close</a> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<ul> \
									{gallery} \
								</ul> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline clearfix">{content}</div>',
			custom_markup: ''
		}, pp_settings);

		// Global variables accessible only by prettyPhoto
		var matchedObjects = this, percentBased = false, correctSizes, pp_open,

		// prettyPhoto container specific
		pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,

		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		pp_slideshow;

		doresize = true, scroll_pos = _get_scroll();

		// Window/Keyboard events
		$(window).unbind('resize').resize(;

		if(pp_settings.keyboard_shortcuts) {
			$(document).unbind('keydown').keydown(function(e){
				if(typeof $pp_pic_holder != 'undefined'){
					if($pp_pic_holder.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.prettyPhoto.changePage('previous');
								break;
							case 39:
								$.prettyPhoto.changePage('next');
								break;
							case 27:
								if(!settings.modal)
								$.prettyPhoto.close();
								break;
						};
						return false;
					};
				};
			});
		}


		/**
		* Initialize prettyPhoto.
		*/
		$.prettyPhoto.initialize = function() {
			settings = pp_settings;

			if($.browser.msie && parseInt($.browser.version) == 6) settings.theme = "light_square"; // Fallback to a supported theme for IE6

			_buildOverlay(this); // Build the overlay {this} being the caller

			if(settings.allow_resize)
				$(window).scroll(function(){ _center_overlay(); });

			_center_overlay();

			set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned

			$.prettyPhoto.open();

			return false;
		}


		/**
		* Opens the prettyPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.prettyPhoto.open = function() {
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = pp_settings;
				if($.browser.msie && $.browser.version == 6) settings.theme = "light_square"; // Fallback to a supported theme for IE6
				_buildOverlay(this); // Build the overlay {this} being the caller
				pp_images = $.makeArray(arguments[0]);
				pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (pp_images.length > 1) ? true : false;
				set_position = 0;
			}

			if($.browser.msie && $.browser.version == 6) $('select').css('visibility','hidden'); // To fix the bug with IE select boxes

			if(settings.hideflash) $('object,embed').css('visibility','hidden'); // Hide the flash

			_checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.

			$('.pp_loaderIcon').show();

			// Fade the content in
			if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

			// Set the description
			$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));

			// Set the title
			(settings.show_title && pp_titles[set_position] != "") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');

			// Get the dimensions
			movie_width = ( parseFloat(grab_param('width',pp_images[set_position])) ) ? grab_param('width',pp_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(grab_param('height',pp_images[set_position])) ) ? grab_param('height',pp_images[set_position]) : settings.default_height.toString();

			// If the size is % based, calculate according to window dimensions
			if(movie_width.indexOf('%') != -1 || movie_height.indexOf('%') != -1){
				movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150);
				movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150);
				percentBased = true;
			}else{
				percentBased = false;
			}

			// Fade the holder
			$pp_pic_holder.fadeIn(function(){
				imgPreloader = "";

				// Inject the proper content
				switch(_getFileType(pp_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position > $(pp_images).size()) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image();
						if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

						$pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup;
						$pp_pic_holder.find('#fullResImage').attr('src',pp_images[set_position]);

						imgPreloader.onload = 

						imgPreloader.onerror = 

						imgPreloader.src = pp_images[set_position];
					break;

					case 'youtube':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						movie = 'http://www.youtube.com/v/'+grab_param('v',pp_images[set_position]);
						if(settings.autoplay) movie += "&autoplay=1";

						toInject = settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;

					case 'vimeo':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						movie_id = pp_images[set_position];
						var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);

						movie = 'http://player.vimeo.com/video/'+ match[2] +'?title=0&amp;byline=0&amp;portrait=0';
						if(settings.autoplay) movie += "&autoplay=1;";

						vimeo_width = correctSizes['width'] + '/embed/?moog_width='+ correctSizes['width'];

						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,movie);
					break;

					case 'quicktime':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						correctSizes['height']+=15; correctSizes['contentHeight']+=15; correctSizes['containerHeight']+=15; // Add space for the control bar

						toInject = settings.quicktime_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;

					case 'flash':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

						filename = pp_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));

						toInject =  settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;

					case 'iframe':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

						toInject = settings.iframe_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,frame_url);
					break;

					case 'custom':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						toInject = settings.custom_markup;
					break;

					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
						myClone = $(pp_images[set_position]).clone().css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline clearfix"></div></div>').appendTo($('body'));
						correctSizes = _fitToViewport($(myClone).width(),$(myClone).height());
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
					break;
				};

				if(!imgPreloader){
					$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;

					// Show content
					_showContent();
				};
			});

			return false;
		};


		/**
		* Change page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changePage = function(direction){
			currentGalleryPage = 0;

			if(direction == 'previous') {
				set_position--;
				if (set_position < 0){
					set_position = 0;
					return;
				};
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(pp_images).size()-1) {
					set_position = 0;
				}
			}else{
				set_position=direction;
			};

			if(!doresize) doresize = true; // Allow the resizing of the images
			$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');

			_hideContent(function(){ $.prettyPhoto.open(); });
		};


		/**
		* Change gallery page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage){
					currentGalleryPage = 0;
				};
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0){
					currentGalleryPage = totalPage;
				};
			}else{
				currentGalleryPage = direction;
			};

			// Slide the pages, if we're on the last page, find out how many items we need to slide. To make sure we don't have an empty space.
			itemsToSlide = (currentGalleryPage == totalPage) ? pp_images.length - ((totalPage) * itemsPerPage) : itemsPerPage;

			$pp_pic_holder.find('.pp_gallery li').each(function(i){
				$(this).animate({
					'left': (i * itemWidth) - ((itemsToSlide * itemWidth) * currentGalleryPage)
				});
			});
		};


		/**
		* Start the slideshow...
		*/
		$.prettyPhoto.startSlideshow = 

		/**
		* Stop the slideshow...
		*/
		$.prettyPhoto.stopSlideshow = 

		/**
		* Closes prettyPhoto.
		*/
		$.prettyPhoto.close = function(){

			clearInterval(pp_slideshow);

			$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');

			$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });

			$pp_overlay.fadeOut(settings.animation_speed, function(){
				if($.browser.msie && $.browser.version == 6) $('select').css('visibility','visible'); // To fix the bug with IE select boxes

				if(settings.hideflash) $('object,embed').css('visibility','visible'); // Show the flash

				$(this).remove(); // No more need for the prettyPhoto markup

				$(window).unbind('scroll');

				settings.callback();

				doresize = true;

				pp_open = false;

				// delete settings;
			});
		};

		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		_showContent = function(){
			$('.pp_loaderIcon').hide();

			$ppt.fadeTo(settings.animation_speed,1);

			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (correctSizes['containerHeight']/2));
			if(projectedTop < 0) projectedTop = 0;

			// Resize the content holder
			$pp_pic_holder.find('.pp_content').animate({'height':correctSizes['contentHeight']},settings.animation_speed);

			// Resize picture the holder
			$pp_pic_holder.animate({
				'top': projectedTop,
				'left': (windowWidth/2) - (correctSizes['containerWidth']/2),
				'width': correctSizes['containerWidth']
			},settings.animation_speed,function(){
				$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(correctSizes['height']).width(correctSizes['width']);

				$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }

				if(correctSizes['resized']) $('a.pp_expand,a.pp_contract').fadeIn(settings.animation_speed); // Fade the resizing link if the image is resized

				if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();

				settings.changepicturecallback(); // Callback!

				pp_open = true;
			});

			_insert_gallery();
		};

		/**
		* Hide the content...DUH!
		*/
		

		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			// If at the end, hide the next link
			if(set_position == setCount-1) {
				$pp_pic_holder.find('a.pp_next').css('visibility','hidden');
				$pp_pic_holder.find('a.pp_next').addClass('disabled').unbind('click');
			}else{
				$pp_pic_holder.find('a.pp_next').css('visibility','visible');
				$pp_pic_holder.find('a.pp_next.disabled').removeClass('disabled').bind('click',function(){
					$.prettyPhoto.changePage('next');
					return false;
				});
			};

			// If at the beginning, hide the previous link
			if(set_position == 0) {
				$pp_pic_holder
					.find('a.pp_previous')
					.css('visibility','hidden')
					.addClass('disabled')
					.unbind('click');
			}else{
				$pp_pic_holder.find('a.pp_previous.disabled')
					.css('visibility','visible')
					.removeClass('disabled')
					.bind('click',;
			};

			(setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
		};

		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);

			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;

			if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;

				while (!fitting){
					if((pp_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 200);
						imageHeight = (height/width) * imageWidth;
					}else if((pp_containerHeight > windowHeight)){
						imageHeight = (windowHeight - 200);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					};

					pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
				};

				_getDimensions(imageWidth,imageHeight);
			};

			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(pp_containerHeight),
				containerWidth:Math.floor(pp_containerWidth) + 40, // 40 behind the side padding
				contentHeight:Math.floor(pp_contentHeight),
				contentWidth:Math.floor(pp_contentWidth),
				resized:resized
			};
		};

		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);

			// Get the details height, to do so, I need to clone it since it's invisible
			$pp_details = $pp_pic_holder.find('.pp_details');
			$pp_details.width(width);
			detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
			$pp_details = $pp_details.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $pp_details.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			if($.browser.msie && $.browser.version==7) detailsHeight+=8;
			$pp_details.remove();

			// Get the container size, to resize the holder to the right dimensions
			pp_contentHeight = height + detailsHeight;
			pp_contentWidth = width;
			pp_containerHeight = pp_contentHeight + $ppt.height() + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
			pp_containerWidth = width;
		}

		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.indexOf('.mov') != -1){
				return 'quicktime';
			}else if(itemSrc.indexOf('.swf') != -1){
				return 'flash';
			}else if(itemSrc.indexOf('iframe') != -1){
				return 'iframe';
			}else if(itemSrc.indexOf('custom') != -1){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			};
		};

		function _center_overlay(){
			if(doresize && typeof $pp_pic_holder != 'undefined') {
				scroll_pos = _get_scroll();

				titleHeight = $ppt.height(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);

				$pp_pic_holder.css({
					'top': projectedTop,
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			};
		};

		

		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();

			if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height());
		};

		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "facebook") ? 58 : 38; // Define the arrow width depending on the theme

				itemsPerPage = Math.floor((correctSizes['containerWidth'] - 100 - navWidth) / itemWidth);
				itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$pp_pic_holder.find('.pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous').hide();
				}else{
					$pp_pic_holder.find('.pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous').show();
				};

				galleryWidth = itemsPerPage * itemWidth + navWidth;

				// Set the proper width to the gallery items
				$pp_pic_holder.find('.pp_gallery')
					.width(galleryWidth)
					.css('margin-left',-(galleryWidth/2));

				$pp_pic_holder
					.find('.pp_gallery ul')
					.width(itemsPerPage * itemWidth)
					.find('li.selected')
					.removeClass('selected');

				goToPage = (Math.floor(set_position/itemsPerPage) <= totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;


				if(itemsPerPage) {
					$pp_pic_holder.find('.pp_gallery').hide().show().removeClass('disabled');
				}else{
					$pp_pic_holder.find('.pp_gallery').hide().addClass('disabled');
				}

				$.prettyPhoto.changeGalleryPage(goToPage);

				$pp_pic_holder
					.find('.pp_gallery ul li:eq('+set_position+')')
					.addClass('selected');
			}else{
				$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
				$pp_pic_holder.find('.pp_gallery').hide();
			}
		}

		function _buildOverlay(caller){
			// Find out if the picture is part of a set
			theRel = $(caller).attr('rel');
			galleryRegExp = /\[(?:.*)\]/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;

			// Put the SRCs, TITLEs, ALTs into an array.
			pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('rel').indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(caller).attr('href'));
			pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('rel').indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(caller).find('img').attr('alt'));
			pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('rel').indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(caller).attr('title'));

			$('body').append(settings.markup); // Inject the markup

			$pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors

			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < pp_images.length; i++) {
					var regex = new RegExp("(.*?)\.(jpg|jpeg|png|gif)$");
					var results = regex.exec( pp_images[i] );
					if(!results){
						classname = 'default';
					}else{
						classname = '';
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + pp_images[i] + "' width='50' alt='' /></a></li>";
				};

				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);

				$pp_pic_holder.find('#pp_full_res').after(toInject);

				$pp_pic_holder.find('.pp_gallery .pp_arrow_next').click(function(){
					$.prettyPhoto.changeGalleryPage('next');
					$.prettyPhoto.stopSlideshow();
					return false;
				});

				$pp_pic_holder.find('.pp_gallery .pp_arrow_previous').click(function(){
					$.prettyPhoto.changeGalleryPage('previous');
					$.prettyPhoto.stopSlideshow();
					return false;
				});

				$pp_pic_holder.find('.pp_content').hover(
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
					},
					;

				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				$pp_pic_holder.find('.pp_gallery ul li').each(function(i){
					$(this).css({
						'position':'absolute',
						'left': i * itemWidth
					});

					$(this).find('a').unbind('click').click(;
				});
			};


			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
				$pp_pic_holder.find('.pp_nav .pp_play').click(function(){
					$.prettyPhoto.startSlideshow();
					return false;
				});
			}

			$pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme

			$pp_overlay
				.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(document).width()
					})
				.bind('click',;

			$('a.pp_close').bind('click',;

			$('a.pp_expand').bind('click',;

			$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
				$.prettyPhoto.changePage('previous');
				$.prettyPhoto.stopSlideshow();
				return false;
			});

			$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',;

			_center_overlay(); // Center it
		};

		return this.unbind('click').click($.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};

	
})(jQuery);
var $110 = jQuery;var $111 = jQuery;var jqEmag = jQuery;
(function ($) {

  $.fn.customScrollbar = function (options, args) {

    var defaultOptions = {
      skin: undefined,
      hScroll: true,
      vScroll: true,
      updateOnWindowResize: false,
      animationSpeed: 300,
      onCustomScroll: undefined,
      swipeSpeed: 1,
      wheelSpeed: 40,
      fixedThumbWidth: undefined,
      fixedThumbHeight: undefined,
      preventDefaultScroll: false,
      attachScrollEvent: true
    };

    var Scrollable = function (element, options) {
      this.$element = $(element);
      this.options = options;
      this.addScrollableClass();
      this.addSkinClass();
      this.addScrollBarComponents();
      if (this.options.vScroll)
        this.vScrollbar = new Scrollbar(this, new VSizing());
      if (this.options.hScroll)
        this.hScrollbar = new Scrollbar(this, new HSizing());
      this.$element.data("scrollable", this);
      this.initKeyboardScrolling();
      this.bindEvents();
      if (this.options.attachScrollEvent) {
        this.bindScroll();
      }
    };

    Scrollable.prototype = {

      addScrollableClass: function () {
        if (!this.$element.hasClass("scrollable")) {
          this.scrollableAdded = true;
          this.$element.addClass("scrollable");
        }
      },

      removeScrollableClass: 

      addSkinClass: function () {
        if (typeof(this.options.skin) == "string" && !this.$element.hasClass(this.options.skin)) {
          this.skinClassAdded = true;
          this.$element.addClass(this.options.skin);
        }
      },

      removeSkinClass: function () {
        if (this.skinClassAdded)
          this.$element.removeClass(this.options.skin);
      },

      addScrollBarComponents: function () {
        this.assignViewPort();
        if (this.$viewPort.length == 0) {
          this.$element.wrapInner("<div class=\"viewport\" />");
          this.assignViewPort();
          this.viewPortAdded = true;
        }
        this.assignOverview();
        if (this.$overview.length == 0) {
          this.$viewPort.wrapInner("<div class=\"overview\" />");
          this.assignOverview();
          this.overviewAdded = true;
        }
        this.addScrollBar("vertical", "prepend");
        this.addScrollBar("horizontal", "append");
      },

      removeScrollbarComponents: function () {
        this.removeScrollbar("vertical");
        this.removeScrollbar("horizontal");
        if (this.overviewAdded)
          this.$element.unwrap();
        if (this.viewPortAdded)
          this.$element.unwrap();
      },

      removeScrollbar: function (orientation) {
        if (this[orientation + "ScrollbarAdded"])
          this.$element.find(".scroll-bar." + orientation).remove();
      },

      assignViewPort: function () {
        this.$viewPort = this.$element.find(".viewport");
      },

      assignOverview: function () {
        this.$overview = this.$viewPort.find(".overview");
      },

      addScrollBar: function (orientation, fun) {
        if (this.$element.find(".scroll-bar." + orientation).length == 0) {
          this.$element[fun]("<div class='scroll-bar " + orientation + "'><div class='thumb'></div></div>");
          this[orientation + "ScrollbarAdded"] = true;
        }
      },

      resize: function (keepPosition) {
        if (this.vScrollbar)
          this.vScrollbar.resize(keepPosition);
        if (this.hScrollbar)
          this.hScrollbar.resize(keepPosition);
      },

      scrollTo: 

      scrollToXY: 

      scrollToX: function (x) {
        if (this.hScrollbar)
          this.hScrollbar.scrollOverviewTo(x, true);
      },

      scrollToY: function (y) {
        if (this.vScrollbar)
          this.vScrollbar.scrollOverviewTo(y, true);
      },

      scrollByX: function (x) {
        if (this.hScrollbar)
          this.scrollToX(this.hScrollbar.overviewPosition() + x);
      },

      scrollByY: function (y) {
        if (this.vScrollbar)
          this.scrollToY(this.vScrollbar.overviewPosition() + y);
      },

      remove: function () {
        this.removeScrollableClass();
        this.removeSkinClass();
        this.removeScrollbarComponents();
        this.$element.data("scrollable", null);
        this.removeKeyboardScrolling();
        if (this.vScrollbar)
          this.vScrollbar.remove();
        if (this.hScrollbar)
          this.hScrollbar.remove();
      },

      setAnimationSpeed: function (speed) {
        this.options.animationSpeed = speed;
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) && (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height()) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width());
      },

      initKeyboardScrolling: function () {
        var _this = this;

        this.elementKeydown = function (event) {
          if (document.activeElement === _this.$element[0]) {
            if (_this.vScrollbar)
              _this.vScrollbar.keyScroll(event);
            if (_this.hScrollbar)
              _this.hScrollbar.keyScroll(event);
          }
        };

        this.$element
          .attr('tabindex', '-1')
          .keydown(this.elementKeydown);
      },

      removeKeyboardScrolling: function () {
        this.$element
          .removeAttr('tabindex')
          .unbind("keydown", this.elementKeydown);
      },

      bindEvents: function () {
        if (this.options.onCustomScroll)
          this.$element.on("customScroll", this.options.onCustomScroll);
      },

      bindScroll: function () {
        this.$element.bind('mousewheel DOMMouseScroll', function (e) {
          var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });
      }

    };

    var Scrollbar = function (scrollable, sizing) {
      this.scrollable = scrollable;
      this.sizing = sizing;
      this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element);
      this.$thumb = this.$scrollBar.find(".thumb");
      this.setScrollPosition(0, 0);
      this.resize();
      this.initMouseMoveScrolling();
      this.initMouseWheelScrolling();
      this.initTouchScrolling();
      this.initMouseClickScrolling();
      this.initWindowResize();
    };

    Scrollbar.prototype = {

      resize: function (keepPosition) {
        this.overviewSize = this.sizing.size(this.scrollable.$overview);
        this.calculateViewPortSize();
        this.sizing.size(this.scrollable.$viewPort, this.viewPortSize);
        this.ratio = this.viewPortSize / this.overviewSize;
        this.sizing.size(this.$scrollBar, this.viewPortSize);
        this.thumbSize = this.calculateThumbSize();
        this.sizing.size(this.$thumb, this.thumbSize);
        this.maxThumbPosition = this.calculateMaxThumbPosition();
        this.maxOverviewPosition = this.calculateMaxOverviewPosition();
        this.enabled = (this.overviewSize > this.viewPortSize);
        if (this.scrollPercent === undefined)
          this.scrollPercent = 0.0;
        if (this.enabled)
          this.rescroll(keepPosition);
        else
          this.setScrollPosition(0, 0);
        this.$scrollBar.toggle(this.enabled);
      },

      calculateViewPortSize: function () {
        var elementSize = this.sizing.size(this.scrollable.$element);
        if (elementSize > 0 && !this.maxSizeUsed) {
          this.viewPortSize = elementSize;
          this.maxSizeUsed = false;
        }
        else {
          var maxSize = this.sizing.maxSize(this.scrollable.$element);
          this.viewPortSize = Math.min(maxSize, this.overviewSize);
          this.maxSizeUsed = true;
        }
      },

      calculateThumbSize: function () {
        var fixedSize = this.sizing.fixedThumbSize(this.scrollable.options);
        var size;
        if (fixedSize)
          size = fixedSize;
        else
          size = this.ratio * this.viewPortSize;
        return Math.max(size, this.sizing.minSize(this.$thumb));
      },

      initMouseMoveScrolling: function () {
        var _this = this;
        this.$thumb.mousedown(function (event) {
          if (_this.enabled)
            _this.startMouseMoveScrolling(event);
        });
        this.documentMouseup = function (event) {
          _this.stopMouseMoveScrolling(event);
        };
        $(document).mouseup(this.documentMouseup);
        this.documentMousemove = function (event) {
          _this.mouseMoveScroll(event);
        };
        $(document).mousemove(this.documentMousemove);
        this.$thumb.click(function (event) {
          event.stopPropagation();
        });
      },

      removeMouseMoveScrolling: function () {
        this.$thumb.unbind();
        $(document).unbind("mouseup", this.documentMouseup);
        $(document).unbind("mousemove", this.documentMousemove);
      },

      initMouseWheelScrolling: function () {
        var _this = this;
        this.scrollable.$element.mousewheel(function (event, delta, deltaX, deltaY) {
          if (_this.enabled) {
            var scrolled = _this.mouseWheelScroll(deltaX, deltaY);
            _this.stopEventConditionally(event, scrolled);
          }
        });
      },

      removeMouseWheelScrolling: function () {
        this.scrollable.$element.unbind("mousewheel");
      },

      initTouchScrolling: function () {
        if (document.addEventListener) {
          var _this = this;
          this.elementTouchstart = 
          this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart);
          this.documentTouchmove = function (event) {
            _this.touchScroll(event);
          };
          this.scrollable.$element[0].addEventListener("touchmove", this.documentTouchmove);
          this.elementTouchend = function (event) {
            _this.stopTouchScrolling(event);
          };
          this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend);
        }
      },

      removeTouchScrolling: function () {
        if (document.addEventListener) {
          this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart);
          document.removeEventListener("touchmove", this.documentTouchmove);
          this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend);
        }
      },

      initMouseClickScrolling: function () {
        var _this = this;
        this.scrollBarClick = function (event) {
          _this.mouseClickScroll(event);
        };
        this.$scrollBar.click(this.scrollBarClick);
      },

      removeMouseClickScrolling: function () {
        this.$scrollBar.unbind("click", this.scrollBarClick);
      },

      initWindowResize: function () {
        if (this.scrollable.options.updateOnWindowResize) {
          var _this = this;
          this.windowResize = function () {
            _this.resize();
          };
          $(window).resize(this.windowResize);
        }
      },

      removeWindowResize: function () {
        $(window).unbind("resize", this.windowResize);
      },

      isKeyScrolling: 

      keyScrollDelta: function (key) {
        for (var scrollingKey in this.sizing.scrollingKeys)
          if (scrollingKey == key)
            return this.sizing.scrollingKeys[key](this.viewPortSize);
        return null;
      },

      startMouseMoveScrolling: function (event) {
        this.mouseMoveScrolling = true;
        $("body").addClass("not-selectable");
        this.setUnselectable($("body"), "on");
        this.setScrollEvent(event);
        event.preventDefault();
      },

      stopMouseMoveScrolling: function (event) {
        this.mouseMoveScrolling = false;
        $("body").removeClass("not-selectable");
        this.setUnselectable($("body"), null);
      },

      setUnselectable: function (element, value) {
        if (element.attr("unselectable") != value) {
          element.attr("unselectable", value);
          element.find(':not(input)').attr('unselectable', value);
        }
      },

      mouseMoveScroll: function (event) {
        if (this.mouseMoveScrolling) {
          var delta = this.sizing.mouseDelta(this.scrollEvent, event);
          this.scrollThumbBy(delta);
          this.setScrollEvent(event);
        }
      },

      startTouchScrolling: function (event) {
        if (event.touches && event.touches.length == 1) {
          this.setScrollEvent(event.touches[0]);
          this.touchScrolling = true;
          event.stopPropagation();
        }
      },

      touchScroll: function (event) {
        if (this.touchScrolling && event.touches && event.touches.length == 1) {
          var delta = -this.sizing.mouseDelta(this.scrollEvent, event.touches[0]) * this.scrollable.options.swipeSpeed;
          var scrolled = this.scrollOverviewBy(delta);
          if (scrolled)
            this.setScrollEvent(event.touches[0]);
          this.stopEventConditionally(event, scrolled);
        }
      },

      stopTouchScrolling: function (event) {
        this.touchScrolling = false;
        event.stopPropagation();
      },

      mouseWheelScroll: function (deltaX, deltaY) {
        var delta = -this.sizing.wheelDelta(deltaX, deltaY) * this.scrollable.options.wheelSpeed;
        if (delta != 0)
          return this.scrollOverviewBy(delta);
      },

      mouseClickScroll: function (event) {
        var delta = this.viewPortSize - 20;
        if (event["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()])
        // mouse click over thumb
          delta = -delta;
        this.scrollOverviewBy(delta);
      },

      keyScroll: function (event) {
        var keyDown = event.which;
        if (this.enabled && this.isKeyScrolling(keyDown)) {
          var scrolled = this.scrollOverviewBy(this.keyScrollDelta(keyDown));
          this.stopEventConditionally(event, scrolled);
        }
      },

      scrollThumbBy: function (delta) {
        var thumbPosition = this.thumbPosition();
        thumbPosition += delta;
        thumbPosition = this.positionOrMax(thumbPosition, this.maxThumbPosition);
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = thumbPosition / this.maxThumbPosition;
        if (oldScrollPercent != this.scrollPercent) {
          var overviewPosition = (thumbPosition * this.maxOverviewPosition) / this.maxThumbPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
          this.triggerCustomScroll(oldScrollPercent);
          return true;
        }
        else
          return false;
      },

      thumbPosition: function () {
        return this.$thumb.position()[this.sizing.offsetComponent()];
      },

      scrollOverviewBy: function (delta) {
        var overviewPosition = this.overviewPosition() + delta;
        return this.scrollOverviewTo(overviewPosition, false);
      },

      overviewPosition: function () {
        return -this.scrollable.$overview.position()[this.sizing.offsetComponent()];
      },

      scrollOverviewTo: function (overviewPosition, animate) {
        overviewPosition = this.positionOrMax(overviewPosition, this.maxOverviewPosition);
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = overviewPosition / this.maxOverviewPosition;
        if (oldScrollPercent != this.scrollPercent) {
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          if (animate)
            this.setScrollPositionWithAnimation(overviewPosition, thumbPosition);
          else
            this.setScrollPosition(overviewPosition, thumbPosition);
          this.triggerCustomScroll(oldScrollPercent);
          return true;
        }
        else
          return false;
      },

      positionOrMax: function (p, max) {
        if (p < 0)
          return 0;
        else if (p > max)
          return max;
        else
          return p;
      },

      triggerCustomScroll: function (oldScrollPercent) {
        this.scrollable.$element.trigger("customScroll", {
            scrollAxis: this.sizing.scrollAxis(),
            direction: this.sizing.scrollDirection(oldScrollPercent, this.scrollPercent),
            scrollPercent: this.scrollPercent * 100
          }
        );
      },

      rescroll: function (keepPosition) {
        if (keepPosition) {
          var overviewPosition = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
          this.scrollPercent = overviewPosition / this.maxOverviewPosition;
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
        }
        else {
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          var overviewPosition = this.scrollPercent * this.maxOverviewPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
        }
      },

      setScrollPosition: function (overviewPosition, thumbPosition) {
        this.$thumb.css(this.sizing.offsetComponent(), thumbPosition + "px");
        this.scrollable.$overview.css(this.sizing.offsetComponent(), -overviewPosition + "px");
      },

      setScrollPositionWithAnimation: function (overviewPosition, thumbPosition) {
        var thumbAnimationOpts = {};
        var overviewAnimationOpts = {};
        thumbAnimationOpts[this.sizing.offsetComponent()] = thumbPosition + "px";
        this.$thumb.animate(thumbAnimationOpts, this.scrollable.options.animationSpeed);
        overviewAnimationOpts[this.sizing.offsetComponent()] = -overviewPosition + "px";
        this.scrollable.$overview.animate(overviewAnimationOpts, this.scrollable.options.animationSpeed);
      },

      calculateMaxThumbPosition: function () {
        return Math.max(0, this.sizing.size(this.$scrollBar) - this.thumbSize);
      },

      calculateMaxOverviewPosition: function () {
        return Math.max(0, this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort));
      },

      setScrollEvent: function (event) {
        var attr = "page" + this.sizing.scrollAxis();
        if (!this.scrollEvent || this.scrollEvent[attr] != event[attr])
          this.scrollEvent = {pageX: event.pageX, pageY: event.pageY};
      },

      scrollToElement: function (element) {
        var $element = $(element);
        if (this.sizing.isInside($element, this.scrollable.$overview) && !this.sizing.isInside($element, this.scrollable.$viewPort)) {
          var elementOffset = $element.offset();
          var overviewOffset = this.scrollable.$overview.offset();
          var viewPortOffset = this.scrollable.$viewPort.offset();
          this.scrollOverviewTo(elementOffset[this.sizing.offsetComponent()] - overviewOffset[this.sizing.offsetComponent()], true);
        }
      },

      remove: 

      stopEventConditionally: function (event, condition) {
        if (condition || this.scrollable.options.preventDefaultScroll) {
          event.preventDefault();
          event.stopPropagation();
        }
      }

    };

    var HSizing = function () {
    };

    HSizing.prototype = {
      size: function ($el, arg) {
        if (arg)
          return $el.width(arg);
        else
          return $el.width();
      },

      minSize: function ($el) {
        return parseInt($el.css("min-width")) || 0;
      },

      maxSize: function ($el) {
        return parseInt($el.css("max-width")) || 0;
      },

      fixedThumbSize: function (options) {
        return options.fixedThumbWidth;
      },

      scrollBar: function ($el) {
        return $el.find(".scroll-bar.horizontal");
      },

      mouseDelta: function (event1, event2) {
        return event2.pageX - event1.pageX;
      },

      offsetComponent: function () {
        return "left";
      },

      wheelDelta: function (deltaX, deltaY) {
        return deltaX;
      },

      scrollAxis: function () {
        return "X";
      },

      scrollDirection: function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "right" : "left";
      },

      scrollingKeys: {
        37: function (viewPortSize) {
          return -10; //arrow left
        },
        39: function (viewPortSize) {
          return 10; //arrow right
        }
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width());
      }

    };

    var VSizing = function () {
    };

    VSizing.prototype = {

      size: function ($el, arg) {
        if (arg)
          return $el.height(arg);
        else
          return $el.height();
      },

      minSize: function ($el) {
        return parseInt($el.css("min-height")) || 0;
      },

      maxSize: function ($el) {
        return parseInt($el.css("max-height")) || 0;
      },

      fixedThumbSize: function (options) {
        return options.fixedThumbHeight;
      },

      scrollBar: function ($el) {
        return $el.find(".scroll-bar.vertical");
      },

      mouseDelta: function (event1, event2) {
        return event2.pageY - event1.pageY;
      },

      offsetComponent: function () {
        return "top";
      },

      wheelDelta: function (deltaX, deltaY) {
        return deltaY;
      },

      scrollAxis: function () {
        return "Y";
      },

      scrollDirection: function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "down" : "up";
      },

      scrollingKeys: {
        38: function (viewPortSize) {
          return -10; //arrow up
        },
        40: function (viewPortSize) {
          return 10; //arrow down
        },
        33: 
        34: 
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height());
      }

    };

    return this.each(function () {
      if (options == undefined)
        options = defaultOptions;
      if (typeof(options) == "string") {
        var scrollable = $(this).data("scrollable");
        if (scrollable)
          scrollable[options](args);
      }
      else if (typeof(options) == "object") {
        options = $.extend(defaultOptions, options);
        new Scrollable($(this), options);
      }
      else
        throw "Invalid type of options";
    });

  }
  ;

})
  (jQuery);

(function ($) {

  var types = ['DOMMouseScroll', 'mousewheel'];

  if ($.event.fixHooks) {
    for (var i = types.length; i;) {
      $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
  }

  $.event.special.mousewheel = {
    setup: 

    teardown: 
  };

  $.fn.extend({
    mousewheel: function (fn) {
      return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function (fn) {
      return this.unbind("mousewheel", fn);
    }
  });


  function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if (orgEvent.wheelDelta) {
      delta = orgEvent.wheelDelta / 120;
    }
    if (orgEvent.detail) {
      delta = -orgEvent.detail / 3;
    }

    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;

    // Gecko
    if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaY = 0;
      deltaX = delta;
    }

    // Webkit
    if (orgEvent.wheelDeltaY !== undefined) {
      deltaY = orgEvent.wheelDeltaY / 120;
    }
    if (orgEvent.wheelDeltaX !== undefined) {
      deltaX = orgEvent.wheelDeltaX / 120;
    }

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

})(jQuery);


(function ($) {
    window.emgMenuFixed = false;
    window.globalSliderIntervalId = 0;

    $.fn.emgMegaMenu = function( options ) {
        /* options params
         * @autoOpen         (bool) - force menu to open
         * @activeItem       (id)   - force an item to open
         * @slider           (bool) - enable or disable slider
         * @fixed            (bool) - enable sticky menu
         * @transitionDelay  (int)  - transition delay for menu items
         */

        if(!options){
            options = {
                autoOpen: false,
                activeItem: false,
                slider: false,
                fixed: false,
                slideTimeOut: 4000,
                transitionDelay: 250
            };
        }

        if(!options.autoOpen){
            options.autoOpen = false;
        }

        if(!options.transitionDelay){
            options.transitionDelay = 250;
        }

        if(!options.activeItem){
            options.activeItem = false;
        }

        if(!options.slider){
            options.slider = false;
        }

        if(!options.fixed){
            options.fixed = false;
        }

        if(!options.slideTimeOut){
            options.slideTimeOut = 4000;
        }

        var currentSlide = -1;

        var transitionDelay = options.transitionDelay;

        var menu = this;

        var mouseLocs = [];

        var MOUSE_LOCS_TRACKED = 3, // number of past mouse locations to track
            DELAY = 250, // ms delay when user appears to be entering submenu
            TOLERANCE = 75; // bigger = more forgivey when entering submenu

        $(document).mousemove(;

        transitionDelay = function(){
            var offset = $(menu).offset(),
                upperLeft = {
                    x: offset.left,
                    y: offset.top - TOLERANCE
                },
                upperRight = {
                    x: offset.left + $(menu).outerWidth(),
                    y: upperLeft.y
                },
                lowerLeft = {
                    x: offset.left,
                    y: offset.top + $(menu).outerHeight() + TOLERANCE
                },
                lowerRight = {
                    x: offset.left + $(menu).outerWidth(),
                    y: lowerLeft.y
                },
                loc = mouseLocs[mouseLocs.length - 1],
                prevLoc = mouseLocs[0];

            
          var decreasingCorner = upperRight,
                increasingCorner = lowerRight;

            var decreasingSlope = slope(loc, decreasingCorner),
                increasingSlope = slope(loc, increasingCorner),
                prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                prevIncreasingSlope = slope(prevLoc, increasingCorner);
            if (decreasingSlope < prevDecreasingSlope &&
                increasingSlope > prevIncreasingSlope) {
                return DELAY;
            }
            return 0;
        };

        menu.slideInterval = function(){
            if(typeof menu.slideIntervalId !== 'undefined'){
                clearInterval(menu.slideIntervalId);
            }
            window.globalSliderIntervalId = menu.slideIntervalId = setInterval(function(){
                $('.emg-slider').hover(
                    function(){
                        $(this).addClass('.sliderHovered');
                    },
                    function(){
                        $(this).removeClass('.sliderHovered');}
                );
                if(!$('.emg-slider').hasClass('.sliderHovered')){
                    menu.nextSlide();
                }
            },options.slideTimeOut);
        };

        menu.nextSlide = function(){
            if(currentSlide == (sliders.length-1)){
                currentSlide = 0;
            }
            else{
                currentSlide++;
            }
            var r = { 'id': sliders[currentSlide] };
            for(var i=1; i <= sliders.length; i++){
              if(!$('#emg-slider-picture'+i).length){
                  $('.emg-slider').append('<div class="emg-slider-picture" id="emg-slider-picture'+i+'"></div>');
              }
            }

            if($('#emg-slider-picture'+sliders[currentSlide]).html() == '' && (typeof window.emgSliderBanners != "undefined")){
                $('#emg-slider-picture'+sliders[currentSlide]).html(window.emgSliderBanners[currentSlide]);
            }
            $('.emg-slider-picture').hide();
            $('#emg-slider-picture'+sliders[currentSlide]).show();
            $('.emg-menu-container .emg-slider .emg-bullet').each(function(){$(this).removeClass('emg-active-bullet');});
            $('.emg-menu-container .emg-slider .emg-bullet').eq(currentSlide).addClass('emg-active-bullet');

        };

        menu.previousSlide = function(){
            if(currentSlide == 0){
                currentSlide = sliders.length-1;
            }
            else{
                currentSlide--;
            }
            var r = { 'id': sliders[currentSlide] };
            for(var i=1; i <= sliders.length; i++){
              if(!$('#emg-slider-picture'+i).length){
                  $('.emg-slider').append('<div class="emg-slider-picture" id="emg-slider-picture'+i+'"></div>');
              }
            }

            if($('#emg-slider-picture'+sliders[currentSlide]).html() == '' && (typeof window.emgSliderBanners != "undefined")){
                $('#emg-slider-picture'+sliders[currentSlide]).html(window.emgSliderBanners[currentSlide]);
            }

            $('.emg-slider-picture').hide();
            $('#emg-slider-picture'+sliders[currentSlide]).show();
            $('.emg-menu-container .emg-slider .emg-bullet').each(function(){$(this).removeClass('emg-active-bullet');});
            $('.emg-menu-container .emg-slider .emg-bullet').eq(currentSlide).addClass('emg-active-bullet');


            menu.slideInterval();
        };

        menu.goToSlide = function( slideNr ){

            if(slideNr < 0 || slideNr > (sliders.length-1) ){
                return false;
            }
            currentSlide = slideNr;

            var r = { 'id': sliders[slideNr] };

            for(var i=1; i <= sliders.length; i++){
              if(!$('#emg-slider-picture'+i).length){
                  $('.emg-slider').append('<div class="emg-slider-picture" id="emg-slider-picture'+i+'"></div>');
              }
            }

            if($('#emg-slider-picture'+sliders[slideNr]).html() == '' && (typeof window.emgSliderBanners != "undefined")){
                $('#emg-slider-picture'+sliders[slideNr]).html(window.emgSliderBanners[slideNr]);
            }

            $('.emg-slider-picture').hide();
            $('#emg-slider-picture'+sliders[slideNr]).show();
            $('.emg-menu-container .emg-slider .emg-bullet').each(function(){$(this).removeClass('emg-active-bullet');});
            $('.emg-menu-container .emg-slider .emg-bullet').eq(slideNr).addClass('emg-active-bullet');


            menu.slideInterval();
        };

        $('nav').hover(
            function(){
              $(this).addClass('open');
            },
            function(){
              $(this).removeClass('open');
              $('nav > ul > li').each(function(){$(this).removeClass('emg-menu-hover-intent')});
            }
        );

        $(window).scroll(function() {
          if ($('#emg-mega-menu:hover').length === 0) {
            clearInterval(window.getActiveMenuItem);
            $('#emg-mega-menu').removeClass('open');
            $('#emg-mega-menu > ul > li').each(function() {
              $(this).removeClass('emg-menu-hover-intent');
            });
            $('#emg-mega-menu > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
          }
        });

        if(options.autoOpen === true){
            this.addClass('emg-forced');
            if($('#'+options.activeItem).length > 0){
                this.find('#' + options.activeItem).addClass('emg-active');
                this.find('#' + options.activeItem).find('.emg-menu-box').addClass('emg-active');
                $('.emg-menu-overlay').css('visibility', 'visible');

                $('nav > ul > li').hover(function(){
                    var d = new Date();
                    var n = d.getTime();
                    window.lastMove = n;
                    window.activeMenuItem = $(this);
                    if(typeof window.getActiveMenuItem != 'undefined'){
                      clearInterval(window.getActiveMenuItem);
                    }
                    window.getActiveMenuItem = setInterval(function(){
                        var d = new Date();
                        var n = d.getTime();
                        if((n - window.lastMove) > transitionDelay()){
                            clearInterval(window.getActiveMenuItem);
                            if( !window.activeMenuItem.hasClass('emg-menu-hover-intent') ){
                                $('nav > ul > li').each(function(){$(this).removeClass('emg-menu-hover-intent')});
                                $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                            }
                            menu.find('#' + options.activeItem).find('.emg-menu-box').removeClass('emg-active');
                            menu.find('#' + options.activeItem).removeClass('emg-active');
                            window.activeMenuItem.not('.not-hover').addClass('emg-menu-hover-intent');
                            try {
                              Emag.DatalayerManager.trackBanners(window.activeMenuItem,'menu');
                            } catch(e) {
                              Emag.DatalayerManager.showErrors(e);
                            }
                            showBanners(window.activeMenuItem);
                            window.activeMenuItem.find('.emg-menu-box').css('visibility', 'visible');
                        }
                    },1);
                },
                function(){
                    clearInterval(window.getActiveMenuItem);
                });
                $('nav').hover(function(){},
                function(){
                    menu.find('#' + options.activeItem).addClass('emg-active');
                    $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                    menu.find('#' + options.activeItem).find('.emg-menu-box').addClass('emg-active');
                    menu.find('#' + options.activeItem).find('.emg-menu-box').css('visibility', 'visible');
                });
            }
            else{
                if(options.slider === true){
                    var sliders = emgSlideObj;
                    $('.emg-menu-overlay').css('visibility', 'visible');
                    $('.emg-menu-container .emg-slider').show();
                    var nrSlides = (parseInt($('.emg-menu-container .emg-slider').attr('data-n')) || 0);
                    var containerBullets = '<div class="emg-bullets">';
                    for(var i = 0; i < nrSlides; i++){
                        containerBullets += '<div class="emg-bullet"></div>';
                    }
                    containerBullets += '</div>';
                    $('.emg-menu-container .emg-slider').append(containerBullets);
                    $('.emg-menu-container .emg-slider .emg-bullet').click(function(){
                        menu.goToSlide($(this).index());
                        $('.emg-menu-container .emg-slider .emg-bullet').each(function(){$(this).removeClass('emg-active-bullet');});
                        $(this).addClass('emg-active-bullet');
                    });

                    var leftArrow  = '<div class="emg-slider-left"><span class="icon-i28-round-left"></span></div>';
                    var rightArrow = '<div class="emg-slider-right"><span class="icon-i29-round-right"></span></div>';
                    if(nrSlides > 0){
                        $('.emg-menu-container .emg-slider').append(leftArrow);
                        $('.emg-menu-container .emg-slider').append(rightArrow);
                        menu.nextSlide();
                        menu.slideInterval();
                        var mX, mY;
                        var elementL  = $('.emg-slider-left');
                        var elementR  = $('.emg-slider-right');

                        function calculateDistance(elem, mouseX, mouseY) {
                            return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
                        }

                        // hides/shows the next/previous arrows based on mousemovement
                        var updateArrowStatus = function(e) {
                            if (typeof e.data === 'object' && e.data && typeof e.data.pageX !== 'undefined' && typeof e.data.pageY !== 'undefined') {
                                mX = e.data.pageX;
                                mY = e.data.pageY;
                            } else {
                                mX = e.pageX;
                                mY = e.pageY;
                            }

                            distanceL = calculateDistance(elementL, mX, mY);
                            if(distanceL < 150){
                                elementL.css('visibility','visible');
                            }
                            else{
                                elementL.css('visibility','hidden');
                            }
                            distanceR = calculateDistance(elementR, mX, mY);
                            if(distanceR < 150){
                                elementR.css('visibility','visible');
                            }
                            else{
                                elementR.css('visibility','hidden');
                            }
                        };
                        var sliderContainer = document.querySelector('.emg-menu-container .emg-slider');
                        if (options.arrowEvent) {
                            sliderContainer.addEventListener(options.arrowEvent, updateArrowStatus);
                        } else {
                            $('.emg-menu-container .emg-slider').mousemove(updateArrowStatus);
                        }

                        $('.emg-menu-container .emg-slider').mouseout(function(evt){
                            var sliderBox = sliderContainer.getBoundingClientRect();
                            if (evt.pageX < sliderBox.left || evt.pageX > sliderBox.right || evt.pageY < sliderBox.top || evt.pageY > sliderBox.bottom) {
                                elementL.css('visibility','hidden');
                                elementR.css('visibility','hidden');
                            }
                        });
                    }
                    $('nav > ul > li').hover(function(){
                        var liElem = $(this);
                        var d = new Date();
                        var n = d.getTime();
                        window.lastMove = n;
                        window.activeMenuItem = $(this);
                        if(typeof window.getActiveMenuItem != 'undefined'){
                          clearInterval(window.getActiveMenuItem);
                        }
                        window.getActiveMenuItem = setInterval(function(){
                            var d = new Date();
                            var n = d.getTime();
                            if((n - window.lastMove) > transitionDelay()){
                                clearInterval(window.getActiveMenuItem);
                                if( !window.activeMenuItem.hasClass('emg-menu-hover-intent') ){
                                    $('nav > ul > li').each(function(){$(this).removeClass('emg-menu-hover-intent')});
                                    $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                                }
                                window.activeMenuItem.not('.not-hover').addClass('emg-menu-hover-intent');
                                try {
                                  Emag.DatalayerManager.trackBanners(window.activeMenuItem,'menu');
                                } catch(e) {
                                  Emag.DatalayerManager.showErrors(e);
                                }
                                showBanners(window.activeMenuItem);
                                window.activeMenuItem.find('.emg-menu-box').css('visibility', 'visible');
                            }
                        },1);
                        $('.emg-menu-overlay').css('visibility', 'visible');

                    },function(){
                        clearInterval(window.getActiveMenuItem);
                    });
                    $('nav').hover(function(){},
                    function(){
                        $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                    });
                }
                else{
                    $('nav > ul > li').hover(function(){
                        var liElem = $(this);
                        var d = new Date();
                        var n = d.getTime();
                        window.lastMove = n;
                        window.activeMenuItem = $(this);
                        if(typeof window.getActiveMenuItem != 'undefined'){
                          clearInterval(window.getActiveMenuItem);
                        }
                        window.getActiveMenuItem = setInterval(function(){
                            var d = new Date();
                            var n = d.getTime();
                            if((n - window.lastMove) > transitionDelay()){
                                clearInterval(window.getActiveMenuItem);
                                if( !window.activeMenuItem.hasClass('emg-menu-hover-intent') ){
                                    $('nav > ul > li').each(function(){$(this).removeClass('emg-menu-hover-intent')});
                                    $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                                }
                                window.activeMenuItem.not('.not-hover').addClass('emg-menu-hover-intent');
                                try {
                                  Emag.DatalayerManager.trackBanners(window.activeMenuItem,'menu');
                                } catch(e) {
                                  Emag.DatalayerManager.showErrors(e);
                                }
                                showBanners(window.activeMenuItem);
                                window.activeMenuItem.find('.emg-menu-box').css('visibility', 'visible');
                            }
                        },1);
                        if(!liElem.hasClass('emg-single-menu')){
                            $('.emg-menu-overlay').css('visibility', 'visible');
                        }
                        else{
                            $('.emg-menu-overlay').css('visibility', 'hidden');
                        }
                    },function(){
                        clearInterval(window.getActiveMenuItem);
                    });
                    $('nav').hover(function(){},
                    function(){
                        $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                        $('.emg-menu-overlay').css('visibility', 'hidden');
                    });
                }
            }
        }
        else{
            if(options.slider === true){
                var sliders = emgSlideObj;
                $('.emg-menu-overlay').css('position', 'relative');
                $('.emg-menu-overlay').css('visibility', 'visible');
                $('.emg-slider').css('margin-left', '0px');
                $('.emg-menu-container .emg-slider').show();
                var nrSlides = (parseInt($('.emg-menu-container .emg-slider').attr('data-n')) || 0);
                var containerBullets = '<div class="emg-bullets">';
                for(var i = 0; i < nrSlides; i++){
                    containerBullets += '<div class="emg-bullet"></div>';
                }
                containerBullets += '</div>';
                $('.emg-menu-container .emg-slider').append(containerBullets);
                $('.emg-menu-container .emg-slider .emg-bullet').click(function(){
                    menu.goToSlide($(this).index());
                    $('.emg-menu-container .emg-slider .emg-bullet').each(function(){$(this).removeClass('emg-active-bullet');});
                    $(this).addClass('emg-active-bullet');
                });

                var leftArrow  = '<div class="emg-slider-left"><span class="icon-i28-round-left"></span></div>';
                var rightArrow = '<div class="emg-slider-right"><span class="icon-i29-round-right"></span></div>';
                if(nrSlides > 0){
                    $('.emg-menu-container .emg-slider').append(leftArrow);
                    $('.emg-menu-container .emg-slider').append(rightArrow);
                    menu.nextSlide();
                    menu.slideInterval();
                    var mX, mY;
                    var elementL  = $('.emg-slider-left');
                    var elementR  = $('.emg-slider-right');

                    function calculateDistance(elem, mouseX, mouseY) {
                        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
                    }

                    $('.emg-menu-container .emg-slider').mousemove(function(e) {
                        mX = e.pageX;
                        mY = e.pageY;
                        distanceL = calculateDistance(elementL, mX, mY);
                        if(distanceL < 150){
                            elementL.css('visibility','visible');
                        }
                        else{
                            elementL.css('visibility','hidden');
                        }
                        distanceR = calculateDistance(elementR, mX, mY);
                        if(distanceR < 150){
                            elementR.css('visibility','visible');
                        }
                        else{
                            elementR.css('visibility','hidden');
                        }
                    });
                    $('.emg-menu-container .emg-slider').mouseout(;
                }
                $('nav > ul > li').hover(function(){
                    var liElem = $(this);
                    var d = new Date();
                    var n = d.getTime();
                    window.lastMove = n;
                    window.activeMenuItem = $(this);
                    if(typeof window.getActiveMenuItem != 'undefined'){
                      clearInterval(window.getActiveMenuItem);
                    }
                    window.getActiveMenuItem = setInterval(function(){
                        var d = new Date();
                        var n = d.getTime();
                        if((n - window.lastMove) > transitionDelay()){
                            clearInterval(window.getActiveMenuItem);
                            if( !window.activeMenuItem.hasClass('emg-menu-hover-intent') ){
                                $('nav > ul > li').each(function(){$(this).removeClass('emg-menu-hover-intent')});
                                $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                            }
                            window.activeMenuItem.not('.not-hover').addClass('emg-menu-hover-intent');
                            try {
                              Emag.DatalayerManager.trackBanners(window.activeMenuItem,'menu');
                            } catch(e) {
                              Emag.DatalayerManager.showErrors(e);
                            }
                            showBanners(window.activeMenuItem);
                            window.activeMenuItem.find('.emg-menu-box').css('visibility', 'visible');
                        }
                    },10);
                    $('.emg-menu-overlay').css('visibility', 'visible');

                },function(){
                    clearInterval(window.getActiveMenuItem);
                });
                $('nav').hover(function(){},
                    ;
            } else {
            $('nav > ul > li').hover(function(){
                var liElem = $(this);
                var d = new Date();
                var n = d.getTime();
                window.lastMove = n;
                window.activeMenuItem = $(this);
                if(typeof window.getActiveMenuItem != 'undefined'){
                  clearInterval(window.getActiveMenuItem);
                }
                window.getActiveMenuItem = setInterval(function(){
                    var d = new Date();
                    var n = d.getTime();
                    if((n - window.lastMove) > transitionDelay()){
                        clearInterval(window.getActiveMenuItem);
                        if( !window.activeMenuItem.hasClass('emg-menu-hover-intent') ){
                            $('nav > ul > li').each(function(){$(this).removeClass('emg-menu-hover-intent')});
                            $('nav > ul > li > .emg-menu-box').each(function(){$(this).css('visibility', 'hidden')});
                        }
                        if(!liElem.hasClass('emg-single-menu')){
                            $('.emg-menu-overlay').css('visibility', 'visible');
                        }
                        else{
                            $('.emg-menu-overlay').css('visibility', 'hidden');
                        }
                        window.activeMenuItem.not('.not-hover').addClass('emg-menu-hover-intent');
                        try {
                          Emag.DatalayerManager.trackBanners(window.activeMenuItem,'menu');
                        } catch(e) {
                          Emag.DatalayerManager.showErrors(e);
                        }
                        showBanners(window.activeMenuItem);
                        window.activeMenuItem.find('.emg-menu-box').css('visibility', 'visible');
                    }
                },1);
            },;
            $('nav').hover(function(){
            },
            function(){
                $('nav > ul > li > .emg-menu-box').each(;
                $('.emg-menu-overlay').css('visibility', 'hidden');
            });
            }
        }

        $('.emg-menu-container .emg-slider .emg-slider-left').click(function(){
            menu.previousSlide();
        });
        $('.emg-menu-container .emg-slider .emg-slider-right').click(function(){
            menu.nextSlide();
            menu.slideInterval();
        });
    };

    $.fn.emgGoTop = function (){

        var goTopBtn = this;
        var goTop = $(goTopBtn).clone(),
          footer = $('#emg-footer'),
          footerHeight = footer.height(),
          emgContainer = $('.emg-container:last');

        goTopBtn.remove();

        $('.emg-container').append(goTop);

        $(window).scroll(function(){
            var scrollPosition = $(this).scrollTop(),
              windowHeight = $(window).height(),
              documentHeight = $(document).height(),
              goTopBtnPosition = goTop.position(),
              emgContainerHeight = emgContainer.height();
            if(scrollPosition > 500){
                goTop.addClass('emg-go-top-active');
            }
            else{
                goTop.removeClass('emg-go-top-active');
            }

            if ( (scrollPosition+goTopBtnPosition.top > emgContainerHeight ) && (scrollPosition + windowHeight > documentHeight - footerHeight) ){
              goTop.addClass('emg-go-top-end');
            } else {
              goTop.removeClass('emg-go-top-end');
            }
        });

        goTop.click(;
    };

    $.fn.emgGallery = function ( options ){
        /* options params
         * @direction     (string) - !OPTIONAL! Values: vertical/horizontal (default horizontal)
         * @preview       (string) - Values: top/bottom/right/left (default top)
         * @zoom          (bool)   - Values: true/false (default false)
         * @modal         (bool)   - Description: open images in a modal window for preview Values: true/false (default true)
         * @thumbs        (string) - Values: rectangular/square (default rectangular)
         */

        var gallery = this;

        var zoomDiv = '<div class="emg-gallery-zoom-container emg-col5"></div>';
        $('body').append(zoomDiv);
        zoomDiv = $('.emg-gallery-zoom-container');

        if(!options){
            options = {
                direction: 'horizontal',
                preview: 'top',
                zoom: false,
                modal: true,
                selectFirst: true,
                thumbs: 'rectangular',
                carousel:
                    {
                        visible: 4,
                        steps: 1
                    }
            };
        }

        if(!options.direction || (options.direction != 'vertical' && options.direction != 'horizontal')){
            options.direction = 'horizontal';
        }

        if(!options.preview || (options.preview != 'top' && options.preview != 'bottom' && options.preview != 'right' && options.preview != 'left')){
            options.preview = 'top';
        }

        if(options.selectFirst !== false){
            options.selectFirst = true;
        }

        if(options.zoom !== false && options.zoom !== true){
            options.zoom = false;
        }

        if(options.modal !== false && options.modal !== true){
            options.modal = true;
        }

        if(options.thumbs != 'rectangular' && options.thumbs != 'square'){
          options.thumbs = 'rectang12';
        }
        else{
            if(options.thumbs == 'rectangular') {options.thumbs = 'rectang12';}
            else {options.thumbs = 'rectang11';}
        }

        if(!options.carousel.visible){
            options.carousel.visible = 4;
        }

        if(!options.carousel.steps){
            options.carousel.steps = 1;
        }

        var thumbHeight = 0;
        var thumbWidth = 0;

        if(options.thumbs == 'rectang12'){
            thumbHeight = 92;
            thumbWidth = 62;
        }
        else{
            thumbHeight = 54;
            thumbWidth = 54;
        }

        gallery.checkDirectionsCompatibility = function(){
            if(options.preview == 'left' || options.preview == 'right'){
                options.direction = 'vertical';
            }
            if(options.preview == 'top' || options.preview == 'bottom'){
                options.direction = 'horizontal';
            }
        };

        gallery.checkAvailableSteps = function(itemsScrolled, direction,popup){
            if(popup === true){
                var itemsLength = (gallery.thumbs.find('li').length/2 > parseInt(gallery.thumbs.find('li').length/2)) ? parseInt(thumbs.find('li').length/2) + 1 : parseInt(gallery.thumbs.find('li').length/2);
                var visible = parseInt($('.emg-popup-gallery .emg-gallery-thumbs-wrapper').innerHeight()/thumbHeight);
            }
            else{
                var itemsLength = gallery.thumbs.find('li').length;
                var visible = options.carousel.visible;
            }

            if(direction == 'forw'){
                if((itemsLength - parseInt(itemsScrolled) - visible) <= 0){
                    return 0;
                }
                else{
                    if((itemsLength - parseInt(itemsScrolled) - visible) > options.carousel.steps){
                        return options.carousel.steps;
                    }
                    else{
                        return itemsLength - parseInt(itemsScrolled) - visible;
                    }
                }
            }
            else if(direction == 'back'){
                if((itemsLength - parseInt(itemsScrolled) - visible) >= 0){
                    if(itemsScrolled >= options.carousel.steps){
                        return  options.carousel.steps;
                    }
                    else{
                        return parseInt(itemsScrolled);
                    }
                }
                else{
                    return 0;
                }
            }
            else{
                return 0;
            }
        };

        gallery._hasReachedEnd = function(itemList, direction, popupFlag) {
          var scrollMargin, itemSize, scrollDirection;

          switch (direction) {
            case 'top':
            case 'bottom':
              scrollMargin = itemList.css('margin-top');
              itemSize = itemList.find('li').first().outerHeight();
              scrollDirection = (direction == 'bottom') ? 'forw' : 'back';
            break;
            case 'left':
            case 'right':
              scrollMargin = itemList.css('margin-left');
              itemSize = itemList.find('li').first().outerWidth();
              scrollDirection = (direction == 'bottom') ? 'forw' : 'back';
            break;
          }

          scrollMargin = parseInt(scrollMargin.replace('px', ''));
          var itemsScrolled = Math.abs(scrollMargin / itemSize);
          var steps = gallery.checkAvailableSteps(itemsScrolled, scrollDirection, popupFlag);

          if (direction == 'top' || direction == 'left') {
            if (steps <= 0)
              return true;
          } else {
            if (itemsScrolled > (itemList.find('li').length - options.carousel.visible))
              return true;
          }

          return false;
        };

        gallery.bottomScroll = function(object){
            if(object){thumbsC = object;}
            else{thumbsC = gallery.thumbs;}
            if(window.animationRunning === true){
                return false;
            }
            var itemList = thumbsC.find('ul');
            var itemSize = thumbsC.find('li').first().outerHeight();
            var topMargin = itemList.css('margin-top');
            topMargin = parseInt(topMargin.replace('px',''));
            if(topMargin/itemSize < 0){itemR = topMargin/itemSize * -1; }
            else{itemR = topMargin/itemSize};
            var popupFlag;
            if(object){popupFlag = true;}else{popupFlag = false;}
            var steps = gallery.checkAvailableSteps(itemR,'forw',popupFlag);
            var scrollSize = steps * itemSize + (steps * 10);

            if(itemR > (itemList.find('li').length-options.carousel.visible)){
                return false;
            }

            window.animationRunning = true;
            thumbsC.find('.emg-gallery-nav-top').removeClass('disabled');

            itemList.animate({
                marginTop: topMargin-scrollSize + 'px'
            }, 300, function() {
                window.animationRunning = false;

                if (gallery._hasReachedEnd(itemList, 'bottom', popupFlag)) {
                  thumbsC.find('.emg-gallery-nav-bottom').addClass('disabled');
                }
            });
        };

        gallery.topScroll = function(object){
            if(object){thumbsC = object;}
            else{thumbsC = gallery.thumbs;}
            if(window.animationRunning === true){
                return false;
            }
            var itemList = thumbsC.find('ul');
            var itemSize = thumbsC.find('li').first().outerHeight();
            var topMargin = itemList.css('margin-top');
            topMargin = parseInt(topMargin.replace('px',''));
            if(topMargin/itemSize < 0){itemR = topMargin/itemSize * -1; }
            else{itemR = topMargin/itemSize};
            var popupFlag;
            if(object){popupFlag = true;}else{popupFlag = false;}
            var steps = gallery.checkAvailableSteps(itemR,'back',popupFlag);
            var scrollSize = steps * itemSize + (steps * 10);
            if(steps <= 0){
                return false;
            }
            window.animationRunning = true;
            thumbsC.find('.emg-gallery-nav-bottom').removeClass('disabled');

            itemList.animate({
                marginTop: topMargin+scrollSize + 'px'
            }, 300, function() {
                window.animationRunning = false;

                if (gallery._hasReachedEnd(itemList, 'top', popupFlag)) {
                  thumbsC.find('.emg-gallery-nav-top').addClass('disabled');
                }
            });
        };

        gallery.leftScroll = function(){
            if(window.animationRunning === true){
                return false;
            }
            var itemList = gallery.thumbs.find('ul');
            var itemSize = gallery.thumbs.find('li').first().outerWidth();
            var leftMargin = itemList.css('margin-left');
            leftMargin = parseInt(leftMargin.replace('px',''));
            if(leftMargin/itemSize < 0){itemR = leftMargin/itemSize * -1; }
            else{itemR = leftMargin/itemSize};
            var steps = gallery.checkAvailableSteps(itemR,'back');
            var scrollSize = steps * itemSize  + (steps * 10);
            if(steps <= 0){
                return false;
            }

            window.animationRunning = true;
            gallery.thumbs.find('.emg-gallery-nav-right').removeClass('disabled');

            itemList.animate({
                marginLeft: leftMargin+scrollSize + 'px'
            }, 300, function() {
                window.animationRunning = false;

                if (gallery._hasReachedEnd(itemList, 'left')) {
                  gallery.thumbs.find('.emg-gallery-nav-left').addClass('disabled');
                }
            });
        };

        gallery.rightScroll = function(stepCustom){
            if(window.animationRunning === true){
                return false;
            }
            var itemList = gallery.thumbs.find('ul');
            var itemSize = gallery.thumbs.find('li').first().outerWidth();
            var leftMargin = itemList.css('margin-left');
            leftMargin = parseInt(leftMargin.replace('px',''));
            if(leftMargin/itemSize < 0){itemR = leftMargin/itemSize * -1; }
            else{itemR = leftMargin/itemSize};
            var steps = gallery.checkAvailableSteps(itemR,'forw');
            if(stepCustom){steps = stepCustom;}
            var scrollSize = steps * itemSize + (steps * 10);
            if(itemR > (itemList.find('li').length-options.carousel.visible)){
                return false;
            }

            window.animationRunning = true;
            gallery.thumbs.find('.emg-gallery-nav-left').removeClass('disabled');

            itemList.animate({
                marginLeft: leftMargin-scrollSize + 'px'
            }, 300, function() {
                window.animationRunning = false;

                if (gallery._hasReachedEnd(itemList, 'right')) {
                  gallery.thumbs.find('.emg-gallery-nav-right').addClass('disabled');
                }
            });
        };

        gallery.bindNavEvents = function(){
            if(options.direction == 'vertical'){
                gallery.find('.emg-gallery-nav-top').click(function(){gallery.topScroll()});
                gallery.find('.emg-gallery-nav-bottom').click(function(){gallery.bottomScroll()});
            }
            else{
                $('.emg-gallery-nav-left').click(function(){gallery.leftScroll()});
                $('.emg-gallery-nav-right').click(function(){gallery.rightScroll()});
            }
        };

        gallery.addNavArrows = function(){
            var arrowTop = '<div class="emg-gallery-nav-top disabled"><span class="icon-i22-up"></span></div>';
            var arrowBottom= '<div class="emg-gallery-nav-bottom"><span class="icon-i23-down"></span></div>';
            var arrowLeft = '<div class="emg-gallery-nav-left"><span class="icon-i20-left"></span></div>';
            var arrowRight = '<div class="emg-gallery-nav-right"><span class="icon-i21-right"></span></div>';

            var items = gallery.thumbs.find('li').length;

            if(options.direction == 'vertical' && items > options.carousel.visible){
                gallery.thumbs.find('.emg-gallery-thumbs-wrapper').before(arrowTop);
                gallery.thumbs.find('.emg-gallery-thumbs-wrapper').after(arrowBottom);
            }
            else if(items > options.carousel.visible){
                gallery.thumbs.find('.emg-gallery-thumbs-wrapper').before(arrowLeft);
                gallery.thumbs.find('.emg-gallery-thumbs-wrapper').after(arrowRight);
            }
            gallery.bindNavEvents();
        };

        gallery.getVisibleItems = function(){
            if(options.direction == 'vertical'){
                var itemSize = thumbHeight;
                var margin = (options.carousel.visible * 5);
                if(options.thumbs == 'rectang11'){
                  margin = (options.carousel.visible * 2);
                }
                var parentSize = itemSize * options.carousel.visible + margin;
                gallery.thumbs.find('.emg-gallery-thumbs-wrapper').css('height',parentSize + 13 +'px');
                gallery.thumbs.find('.emg-gallery-thumbs').css('max-height',parentSize + 2 +'px');
            }
            else{
                var itemSize = thumbWidth;
                var itemHeight = gallery.thumbs.find('li').first().outerHeight();
                var parentSize = itemSize * options.carousel.visible;
                var heightAdd = 28;
                if(options.thumbs == 'rectang11'){
                  heightAdd = 20;
                }
                gallery.thumbs.css('max-height', thumbHeight + heightAdd + 'px');
                var margin = options.carousel.visible * 8;
                gallery.thumbs.find('.emg-gallery-thumbs-wrapper').css('width',parentSize + margin + 2 +'px');
//                gallery.thumbs.css('max-width',parentSize+87+'px');
            }
        };

        gallery.createZoomContainer = function(){
            var top = gallery.offset().top;
            var left = gallery.offset().left + gallery.outerWidth() + 20;
            zoomDiv.css('top', top + 'px');
            zoomDiv.css('left',left + 'px');
            window.repositionZoomContainer = true;
            $(window).scroll(function(){
                if(window.emgMenuFixed && window.repositionZoomContainer){
                    window.repositionZoomContainer = false;
                    var top = gallery.offset().top;
                    zoomDiv.css('top',top + 'px');
                }
                else{
                    var top = gallery.offset().top;
                    zoomDiv.css('top',top + 'px');
                }
            });
        };

        gallery.showZoomArea = function(obj, objTop, objLeft){
            var activePic = gallery.find('.emg-gallery-active');
            if(options.thumbs == 'rectang11'){
                var hRap = parseInt(objTop/activePic.outerWidth()*100*1.46);
                var vRap = parseInt(objLeft/activePic.outerHeight()*100*1.8);
            }
            else{
                var hRap = parseInt(objTop/activePic.outerWidth()*100/1.20);
                var vRap = parseInt(objLeft/activePic.outerHeight()*100*2.15);
            }


            zoomDiv.css('background', 'url(\''+activePic.find('img').data('bigimage')+'\') no-repeat ' + vRap + '% ' + hRap + '%' );
            if(options.thumbs == 'rectang11'){
                zoomDiv.css('height', $('.emg-product-details-box').outerHeight() - 25 + 'px');
            }
        };

        gallery.bindZoomEvents = function(){
            window.overZoom = false;
            gallery.hover(function(){},function(){if(!window.overZoom){$(this).find('.emg-gallery-zoom-rectangle').remove();}});
            gallery.bigPics.find('li').each(function(){
                if($(this).hasClass('emg-gallery-active')){
                    $(this).find('img').unbind('mousemove');
                    window.startZoomEvent = false;
                    var timeout;
                    $(this).find('img').mouseenter(function(e){
                        $('.emg-gallery .emg-gallery-big-pics li a').css('cursor', 'pointer');
                        timeout = setTimeout(200);
                    });
                    $(this).find('img').mouseleave(function(){
                        clearTimeout(timeout);
                        window.startZoomEvent = false;
                        $('.emg-gallery .emg-gallery-big-pics li a').css('cursor', 'pointer');
                    });
                    $(this).find('img').mousemove(function(e){
                        gallery.createZoomContainer();
                        var left = e.clientX - $(this).offset().left;
                        var top = e.clientY - $(this).offset().top;
                        var zoomContainer = $(this).closest('li').find('.emg-gallery-zoom-rectangle');
                        if(zoomContainer.length == 0){
                            $(this).closest('li').append('<div class="emg-gallery-zoom-rectangle"><span class="icon-i51-zoom-in"></span></div>');
                            if(options.thumbs == 'rectang11'){
                                $('.emg-gallery-zoom-rectangle').css('width', '130px');
                            }
                        }
                        if(!window.startZoomEvent) return false;
                        var divHeight = zoomContainer.outerHeight();
                        var divWidth = zoomContainer.outerWidth();
                        top = top - divHeight/2 + $(window).scrollTop();
                        left = left - divWidth/2 + $(window).scrollLeft();
                        if(left <= 0){left = 0;}
                        if(top <= 0){top = 0;}
                        if(left >= ($(this).width() - divWidth)){left = $(this).width() - divWidth;}
                        if(top >= ($(this).height() - divHeight)){top = $(this).height() - divHeight;}

                        zoomContainer.css('top', top + 'px');
                        zoomContainer.css('left', left + 'px');
                        var targetImg = $(this);
                        zoomContainer.hover(function(){window.overZoom = true;},function(){window.overZoom = false;});
                        zoomContainer.unbind('mousemove');
                        zoomContainer.mousemove(function(e){

                            var currentTop = $(this).css('top');
                            currentTop = parseInt(currentTop.replace('px',''));
                            var currentLeft = $(this).css('left');
                            currentLeft = parseInt(currentLeft.replace('px',''));
                            var newTop = e.clientY - $(this).offset().top + currentTop - $(this).outerHeight()/2 + $(window).scrollTop();
                            var newLeft = e.clientX - $(this).offset().left + currentLeft  - $(this).outerHeight()/2 + $(window).scrollLeft();
                            if(newLeft < 0) {newLeft = 0;}
                            if(newTop < 0) {newTop = 0;}
                            if(newLeft >= (targetImg.width() - divWidth)){newLeft = targetImg.width() - divWidth;}
                            if(newTop >= (targetImg.height() - divHeight)){newTop = targetImg.height() - divHeight;}
                            $(this).css('top', newTop + 'px');
                            $(this).css('left', newLeft + 'px');
                            zoomDiv.show();
                            gallery.showZoomArea($(this),newTop,newLeft);
                        });
                        zoomContainer.mouseleave(function(){$(this).remove();zoomDiv.hide();
                          $('.emg-product-box-gifts').show();});
                    });
                }
            });
        };

        gallery.bindPopupActions = function(bigP, thumbsP){

            thumbsP.find('li').click(function(){
                var index = $(this).index();
                bigP.find('.emg-gallery-active').removeClass('emg-gallery-active');
                bigP.find('li:eq('+index+')').addClass('emg-gallery-active');
                thumbsP.find('.emg-gallery-thumb-selected').removeClass();
                thumbsP.find('li:eq('+index+')').addClass('emg-gallery-thumb-selected');
                bigP.find('a').each(function(){
                    $(this).closest('li').unbind('mousemove');
                    $(this).removeClass('emg-gallery-zoom-active');
                    $(this).css('cursor','zoom-in');
                    $(this).css('position','static');
                    $(this).find('img').css('height', $('.emg-gallery-popup').innerHeight() - 50);
                });
            });

            bigP.find('a').click(function(e){
                if(!$(this).hasClass('emg-gallery-zoom-active')){
                    $(this).find('img').css('cursor','zoom-out');
                    $(this).addClass('emg-gallery-zoom-active');
                    $(this).closest('li').css('width', $(this).closest('li').outerWidth()*90/100 + 'px');
                    $(this).css('outline', 'none');
                    $(this).parent().css('position','relative');
                    $(this).find('img').css('height','auto');
                    $(this).css('position','absolute');
                    var diffY = e.clientY - $(this).parent().offset().top + $(window).scrollTop();
                    var diffYProc = diffY/$(this).parent().innerHeight()*100;
                    var rapY = $(this).find('img').innerHeight()/$(this).closest('li').innerHeight();
                    var left = ($(this).closest('li').outerWidth() - $(this).find('img').outerWidth())/2;

                    $(this).css('left', left + 'px');
                    $(this).css('top','-' + diffYProc*rapY + '%');
                    $(this).closest('li').mousemove(function(e){
                        var diffY = e.clientY - $(this).offset().top + $(window).scrollTop();
                        var diffYProc = diffY/$(this).innerHeight()*100;
                        var diffX = e.clientX - $(this).offset().left + $(window).scrollLeft();
                        var diffXProc = diffX/$(this).innerWidth()*100;
                        var rapX = $(this).find('img').innerWidth()/$(this).innerWidth();
                        var rapY = $(this).find('img').innerHeight()/$(this).innerHeight();


                        var leftZoom = diffXProc*rapX;
                        var topZoom = diffYProc*rapY;

                        if((leftZoom * $(this).innerWidth() / 100) <= ($(this).find('img').innerWidth() - $(this).innerWidth())){
                            $(this).find('a').css('left','-' + leftZoom + '%');
                        }
                        if((topZoom * $(this).innerHeight() / 100) <= ($(this).find('img').innerHeight() - $(this).innerHeight())){
                            $(this).find('a').css('top','-' + topZoom + '%');
                        }
                    });
                }
                else{
                    $(this).closest('li').css('width', $(this).closest('li').outerWidth()*111/100 + 'px');
                    $(this).closest('li').unbind('mousemove');
                    $(this).removeClass('emg-gallery-zoom-active');
                    $(this).css('cursor','zoom-in');
                    $(this).css('position','static');
                    $(this).find('img').css('height', $('.emg-gallery-popup').innerHeight() - 50);
                }
                return false;
            });

        };

        gallery.preparePopupGallery = function(){

            var galleryContent = $('<div class="emg-popup-gallery"></div>');
            var bigPicsPopup = gallery.bigPics.clone();
            var thumbsPopup = gallery.thumbs.clone();
            thumbsPopup.find('ul').css('margin-top','0px');
            var aspectRatio = '2-3';
            if(options.thumbs == 'rectang11'){
              aspectRatio = '1-1';
            }

            var items = thumbsPopup.find('li').length;
            var maxHeight = $('.emg-gallery-popup').innerHeight() - thumbHeight*2 + 10;
            if(((parseInt(items/2)-1) * thumbHeight) > maxHeight){
                thumbsPopup.find('.emg-gallery-nav-top').show();
                thumbsPopup.find('.emg-gallery-nav-bottom').show();
                thumbsPopup.find('.emg-gallery-nav-top').click(function(){gallery.topScroll(thumbsPopup);});
                thumbsPopup.find('.emg-gallery-nav-bottom').click(function(){gallery.bottomScroll(thumbsPopup);});
            }
            else{
                thumbsPopup.find('.emg-gallery-nav-top').hide();
                thumbsPopup.find('.emg-gallery-nav-bottom').hide();
            }

            bigPicsPopup.find('li').each(function(){
                $(this).css('height',$('.emg-gallery-popup').innerHeight() - 50);
                $(this).css('width',$('.emg-gallery-popup').innerWidth() * 85 /100);
                $(this).find('img').css('height', $('.emg-gallery-popup').innerHeight() - 50);
                $(this).find('img').attr('src',$(this).find('img').data('bigimage'));
            });

            $(window).resize(function(){
                bigPicsPopup.find('li').each(function(){
                    $(this).css('height',$('.emg-gallery-popup').innerHeight() - 50);
                    $(this).css('width',$('.emg-gallery-popup').innerWidth() * 85 /100);
                    $(this).find('img').css('height', $('.emg-gallery-popup').innerHeight() - 50);
                    $(this).find('img').attr('src',$(this).find('img').data('bigimage'));
                });
            });

            galleryContent.append(bigPicsPopup);
            var $divC = $('<div class="emg-gallery emg-gallery-' + aspectRatio + '"></div>');
            $divC.append(thumbsPopup);
            galleryContent.append($divC);
            thumbsPopup.find('.emg-gallery-thumbs-wrapper').css('height', maxHeight + 'px');
            gallery.bindPopupActions(bigPicsPopup,thumbsPopup);

            return galleryContent;

        };

        gallery.showPopUp = function(index){
            if(!options.modal) return false;
            var overlay = $('<div class="emg-gallery-popup-overlay"></div>');
            if($('.emg-gallery-popup-overlay').length > 0) return false;
            $('body').append(overlay);

            var popup = $('<div class="emg-gallery-popup"></div>');
            if($('.emg-gallery-popup').length > 0) return false;
            $('body').append(popup);
            var closeBtn = $('<div class="emg-gallery-popup-close"><a style="font-size:20px;">&times;</a></div>');
            popup.append(closeBtn);
            closeBtn.click(;
            window.popupHover = false;

            popup.hover(function(){window.popupHover = true;},function(){window.popupHover = false;});
            overlay.click(;

            var popupGallery = gallery.preparePopupGallery();
            popup.append(popupGallery);
        };

        gallery.init = function(){
            gallery.checkDirectionsCompatibility();
            gallery.bigPics = gallery.find('.emg-gallery-big-pics');

            if(gallery.find('.emg-gallery-thumbs').is('ul') && ((options.preview == 'bottom' && !gallery.find('ul').first().hasClass('emg-gallery-big-pics')) || (options.preview == 'top') || (options.preview == 'left') || (options.preview == 'right'))){
                var thumbsList = gallery.find('.emg-gallery-thumbs').html();
                thumb = $('<div class="emg-gallery-thumbs"><div class="emg-gallery-thumbs-wrapper"><ul>'+thumbsList+'</ul></div><div class="emg-clear"></div></div>');
                gallery.find('.emg-gallery-thumbs').replaceWith(thumb);
                gallery.thumbs = gallery.find('.emg-gallery-thumbs');

                gallery.addNavArrows();
                gallery.getVisibleItems();
            }
            else{
                gallery.thumbs = gallery.find('.emg-gallery-thumbs');
            }


            if(options.selectFirst){
                gallery.bigPics.children().first().addClass('emg-gallery-active');
            }
            if(options.selectFirst){
                gallery.thumbs.find('li').first().addClass('emg-gallery-thumb-selected');
            }
            if(gallery.thumbs.find('.emg-gallery-thumb-active-product').length > 0){
                gallery.thumbs.find('.emg-gallery-thumb-active-product').each(function(){
                  var index = $(this).index() + 1;
                  if(index > options.carousel.visible){
                    gallery.rightScroll(index - options.carousel.visible);
                  }
                });
            }

            gallery.thumbs.find('li').hover(function(){
                var index = $(this).index();
                gallery.changePic(index);
            });
            gallery.thumbs.find('li').click(;
        };

        gallery.checkVerticalAlign = function(){
            if(options.preview == 'bottom' && options.direction == 'horizontal'){
                tempBP = gallery.bigPics.html();
                tempTh = gallery.thumbs.html();
                gallery.bigPics.removeClass('emg-gallery-big-pics').addClass('emg-gallery-thumbs');
                gallery.thumbs.removeClass('emg-gallery-thumbs').addClass('emg-gallery-big-pics');

                if(!gallery.thumbs.is(':empty')){
                    gallery.bigPics.html(tempTh);
                    gallery.thumbs.html(tempBP);
                }

            }
            gallery.init()
        };

        gallery.setDirections = function(){
            gallery.checkVerticalAlign();
            var thumbClass = options.thumbs + ' emg-gallery-thumbs-' + options.direction + '-' + options.preview;
            var picsClass = 'emg-gallery-pics-' + options.direction + '-' + options.preview;

            gallery.bigPics.addClass(picsClass);
            gallery.thumbs.addClass(thumbClass);
            if(options.zoom === true){
                gallery.bindZoomEvents();
            }
            else{
                gallery.bigPics.find('a').css('cursor','pointer');
            }
        };

        gallery.changePic = function(index){
            gallery.bigPics.find('.emg-gallery-active').removeClass('emg-gallery-active');
            gallery.bigPics.find('li:eq('+index+')').addClass('emg-gallery-active');
            gallery.thumbs.find('.emg-gallery-thumb-selected').removeClass('emg-gallery-thumb-selected');
            gallery.thumbs.find('li:eq('+index+')').addClass('emg-gallery-thumb-selected');
            if(options.zoom === true){
                gallery.bindZoomEvents();
            }
            else{
                gallery.bigPics.find('a').css('cursor','pointer');
            }
        };

        gallery.init();
        gallery.setDirections();

    };

    $.fn.emgCarousel = function( options ){
        /* options params
         * @visible     (int) - number of items to show
         * @step        (int) - number of items to scroll
         * @speed       (int) - speed of animation (ms)
         * @autoStart   (bool)- autostart scroll
         * @timeOut (int) - time interval between carousel scroll (ms)
         * @cssLeftArrow (string) -
         */


         var carousel = this;
         this.idx = 0;

         var default_options = {
                visible: 1,
                step: 1,
                speed: 500,
                autoStart: false,
                timeOut: 4000,
                offset: 'false',
                cssLeftArrow: '',
                cssRightArrow: '',
                ignoreMargins: false
            };

         options = options || {};
         for (var opt in default_options) {
            if (default_options.hasOwnProperty(opt) && !options.hasOwnProperty(opt)) {
                options[opt] = default_options[opt];
            }
        }

         carousel.previous = function(){

            var marginL = carousel.find('.emg-carousel-visible').css('margin-left');
            var marginR = carousel.find('.emg-carousel-visible').css('margin-right');
            var marginO = (parseInt(marginL.replace('px','')) || 0) + (parseInt(marginR.replace('px','')) || 0);

            var width = (carousel.find('.emg-carousel-visible').width() - marginO)/options.visible;

            carousel.find('figure').css('width',width + 'px');

            var marginL = carousel.find('figure').css('margin-left');
            var marginR = carousel.find('figure').css('margin-right');
            var margin = options.ignoreMargins ? 0 : (parseInt(marginL.replace('px','')) || 0) + (parseInt(marginR.replace('px','')) || 0);
            var initialItems = carousel.find('figure').length - parseInt(parseInt(options.visible) || 0);
            var btnLeft = carousel.find('.emg-carousel-left');

            if(btnLeft.hasClass('emg-carousel-disabled')) return false;
            this.idx--;

            if (options.onChange && $.isFunction(options.onChange)) {
              options.onChange.apply(carousel, [this.idx, 'previous']);
            }

            if(max >= initialItems) return false;
            if(max < 0) max = 0;
            max += options.step;

            var margLeft = carousel.find('.emg-carousel-overlay').css('margin-left');
            margLeft = (parseInt(margLeft.replace('px','')) || 0);

            btnLeft.addClass('emg-carousel-disabled');
             var steps = 0;
             if(max >= initialItems){
                 if( max == initialItems){
                     steps = options.step;
                 }
                 else{
                     steps = options.step - ( max - initialItems);
                     max = initialItems;
                 }
             }
             else{
                 steps = options.step;
             }

            carousel.find('.emg-carousel-overlay').animate({
                marginLeft: margLeft  + (margin + width) * steps + 'px'
            }, options.speed, function() {
                if(max != initialItems){
                    btnLeft.removeClass('emg-carousel-disabled');
                }
            });

         };

         carousel.next = function(){

            var marginL = carousel.find('.emg-carousel-visible').css('margin-left');
            var marginR = carousel.find('.emg-carousel-visible').css('margin-right');
            var marginO = (parseInt(marginL.replace('px','')) || 0) + (parseInt(marginR.replace('px','')) || 0);
            var width = (carousel.find('.emg-carousel-visible').width() - marginO)/options.visible;

            carousel.find('figure').css('width',width + 'px');

            var marginL = carousel.find('figure').css('margin-left');
            var marginR = carousel.find('figure').css('margin-right');
            var margin = options.ignoreMargins ? 0 : (parseInt(marginL.replace('px','')) || 0) + (parseInt(marginR.replace('px','')) || 0);
            var btnRight = carousel.find('.emg-carousel-right');

            if(btnRight.hasClass('emg-carousel-disabled')) return false;
            this.idx++;

            if(max <= 0) {
                this.idx = 0;

                if (options.onChange && $.isFunction(options.onChange)) {
                  options.onChange.apply(carousel, [this.idx, 'next']);
                }

                btnRight.addClass('emg-carousel-disabled');
                carousel.find('.emg-carousel-overlay').animate({
                    marginLeft: '0px'
                }, options.speed, ;
                max = carousel.find('figure').length - (parseInt(options.visible) || 0);
                return false;
            }

            if (options.onChange && $.isFunction(options.onChange)) {
              options.onChange.apply(carousel, [this.idx, 'next']);
            }

            max -= options.step;
            carousel.find('.emg-carousel-left').removeClass('emg-carousel-disabled');
            var margLeft = carousel.find('.emg-carousel-overlay').css('margin-left');
            margLeft = (parseInt(margLeft.replace('px','')) || 0);

            btnRight.addClass('emg-carousel-disabled');

            var steps = 0;
            if(max <= 0){
                if( max == 0){
                    steps = options.step;
                }
                else{
                    steps = options.step + max;
                }
            }
             else{
                steps = options.step;
            }

            carousel.find('.emg-carousel-overlay').animate({
                marginLeft: margLeft  - (margin + width) * steps + 'px'
            }, options.speed, function() {
                btnRight.removeClass('emg-carousel-disabled');
            });
         };

          var marginL = carousel.find('.emg-carousel-visible').css('margin-left') || "";
          var marginR = carousel.find('.emg-carousel-visible').css('margin-right') || "";
          var marginO = (parseInt(marginL.replace('px','')) || 0) + (parseInt(marginR.replace('px','')) || 0);
          var width = (carousel.find('.emg-carousel-visible').width() - marginO)/options.visible;
          carousel.find('figure').css('width',width + 'px');

         if(parseInt(options.visible) >= carousel.find('figure').length){
            if (options.offset) {
              carousel.find('.emg-carousel-visible').css('margin-left', options.offset + 'px');
            }

            return true;
         }
         else{
            carousel.append('<div class="emg-carousel-left emg-carousel-disabled"><span class="icon-i28-round-left '+options.cssLeftArrow+'"></span></div><div class="emg-carousel-right"><span class="icon-i29-round-right '+options.cssRightArrow+'"></span></div>');

            var max = carousel.find('figure').length - (parseInt(options.visible) || 0);

            carousel.find('.emg-carousel-right').bind('mousedown', function(){
                if(autoSlide){clearInterval(autoSlide);}
            });
            carousel.find('.emg-carousel-left').bind('mousedown', ;

            carousel.find('.emg-carousel-right').bind('click',function(){
                carousel.next();
            });

            carousel.find('.emg-carousel-left').bind('click',function(){
                carousel.previous();
            });

            if(options.autoStart){
                var autoSlide = setInterval(function(){carousel.next();},options.timeOut);
            }

         }

    };

    $.fn.emgTabbed = function( options ){
        /* options params
         * @isHistory    (bool) - if set true will try to generate carousels from tabs content
         */
        if(!options){
            options = {
                isHistory: false
            };
        }

        if(!options.isHistory){
            options.isHistory = false;
        }

        var tabArea = this;
        var firstTab = '';
        tabArea.find('.emg-tabs').find('.emg-tab').each(function(){
            if(!$(this).hasClass('emg-tabs-title')){
                firstTab = $(this).find('a');
                return false;
            }
        });

        var tabId = firstTab.attr('data-t');
        tabId = tabId.replace('#','');
        tabArea.find('.emg-tabs-content').find('#'+tabId).addClass('emg-tab-active');
        firstTab.parent().addClass('emg-tab-active');

        var makeCarouselWhenTabClick = function(tabId){
            var tabContainer = $('#'+tabId);

            if(tabContainer.length > 0){
                tabContainer.find('figure').each(function(){
                    var widthFigure = $(this).width();
                    if(widthFigure < 1){
                        tabContainer.emgCarousel(
                            {
                                visible: 5,
                                step: 5,
                                speed: 500,
                                autoStart: false,
                                timeOut: 3000
                            }
                        );
                        return false;
                    }
                });
            }
        };

        if(options.isHistory){
            $('#' + tabId).emgCarousel(
                {
                    visible: 5,
                    step: 5,
                    speed: 500,
                    autoStart: false,
                    timeOut: 3000
                }
            );
            tabArea.find('.emg-tabs-content').addClass('emg-arrow-top-history-1');
        }
        tabArea.find('.emg-tabs').find('.emg-tab').click(function(){
            if(!$(this).hasClass('emg-tab-active') && !$(this).hasClass('emg-tabs-title')){
                tabArea.find('.emg-tabs-content').find('.emg-tab-active').removeClass('emg-tab-active');
                tabArea.find('.emg-tabs-content').find('.emg-carousel').removeClass('emg-tab-active');

                tabArea.find('.emg-tabs').find('.emg-tab').removeClass('emg-tab-active');
                var tabId = $(this).find('a').attr('data-t');
                tabId = tabId.replace('#','');
                var hash = window.location.hash.replace('#','');
                if(hash != ''){
                    window.location.hash = '';
                }
                tabArea.find('.emg-tabs-content').find('#'+tabId).addClass('emg-tab-active');
                $(this).addClass('emg-tab-active');
                makeCarouselWhenTabClick(tabId);
                showBanners($('#'+tabId));

                if(options.isHistory){
                    var prodId = $(this).find('a').data('pid');
                    if($('#history-tab' + prodId).find('figure').length == 0){
                        var preloader_src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDBhZmY1Ij4KICA8cGF0aCBvcGFjaXR5PSIuMjUiIGQ9Ik0xNiAwIEExNiAxNiAwIDAgMCAxNiAzMiBBMTYgMTYgMCAwIDAgMTYgMCBNMTYgNCBBMTIgMTIgMCAwIDEgMTYgMjggQTEyIDEyIDAgMCAxIDE2IDQiLz4KICA8cGF0aCBkPSJNMTYgMCBBMTYgMTYgMCAwIDEgMzIgMTYgTDI4IDE2IEExMiAxMiAwIDAgMCAxNiA0eiI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxNiAxNiIgdG89IjM2MCAxNiAxNiIgZHVyPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg==";
                        $('#history-tab' + prodId).html('<img width="15" src="' + preloader_src +'" style="margin-left:60px;margin-top: 95px;">');
                        $.ajax({
                            url: '/box_user_history_item',
                            data: {'pid': prodId},
                            type: 'GET',
                            cache: true,
                            success: function(data){
                                $('#history-tab' + prodId).html(data);
                                $('#history-tab' + prodId).emgCarousel(
                                    {
                                        visible: 5,
                                        step: 5,
                                        speed: 500,
                                        autoStart: false,
                                        timeOut: 3000
                                    }
                                );
                            }
                        });
                    }
                    tabArea.find('.emg-tabs-content').removeClass(function (index, css) {
                        return (css.match (/(^|\s)emg-arrow-top-history-\S+/g) || []).join(' ');
                    });
                    tabArea.find('.emg-tabs-content').addClass('emg-arrow-top-history-' + ((parseInt($(this).index()) || 0)+1));
                }
            }
        });

        tabArea.find('.emg-tabs').find('.emg-tab').find('a').click(function(){
            if(!$(this).parent().hasClass('emg-tab-active') && !$(this).parent().hasClass('emg-tabs-title')){
                tabArea.find('.emg-tabs-content').find('.emg-tab-active').removeClass('emg-tab-active');
                tabArea.find('.emg-tabs-content').find('.emg-carousel').removeClass('emg-tab-active');

                tabArea.find('.emg-tabs').find('.emg-tab').removeClass('emg-tab-active');
                var tabId = $(this).attr('data-t');
                tabId = tabId.replace('#','');
                tabArea.find('.emg-tabs-content').find('#'+tabId).addClass('emg-tab-active');
                $(this).parent().addClass('emg-tab-active');
                makeCarouselWhenTabClick(tabId);
                showBanners($('#'+tabId));

                if(options.isHistory){
                    var prodId = $(this).data('pid');
                    if($('#history-tab' + prodId).find('figure').length == 0){
                        var preloader_src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDBhZmY1Ij4KICA8cGF0aCBvcGFjaXR5PSIuMjUiIGQ9Ik0xNiAwIEExNiAxNiAwIDAgMCAxNiAzMiBBMTYgMTYgMCAwIDAgMTYgMCBNMTYgNCBBMTIgMTIgMCAwIDEgMTYgMjggQTEyIDEyIDAgMCAxIDE2IDQiLz4KICA8cGF0aCBkPSJNMTYgMCBBMTYgMTYgMCAwIDEgMzIgMTYgTDI4IDE2IEExMiAxMiAwIDAgMCAxNiA0eiI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxNiAxNiIgdG89IjM2MCAxNiAxNiIgZHVyPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg==";
                        $('#history-tab' + prodId).html('<img width="15" src="' + preloader_src + '" style="margin-left:60px;margin-top: 95px;">');
                        $.ajax({
                            url: '/box_user_history_item',
                            data: {'pid': prodId},
                            type: 'GET',
                            cache: true,
                            success: function(data){
                                $('#history-tab' + prodId).html(data);
                                $('#history-tab' + prodId).emgCarousel(
                                    {
                                        visible: 5,
                                        step: 5,
                                        speed: 500,
                                        autoStart: false,
                                        timeOut: 3000
                                    }
                                );
                            }
                        });
                    }
                    tabArea.find('.emg-tabs-content').removeClass(function (index, css) {
                        return (css.match (/(^|\s)emg-arrow-top-history-\S+/g) || []).join(' ');
                    });
                    tabArea.find('.emg-tabs-content').addClass('emg-arrow-top-history-' + ((parseInt($(this).parent().index()) || 0)+1));
                }
            }
        });

    };

    $.fn.emgBubbleTip = function( options ){
        if (options === 'destroy') {
          this.off('hover');

          return this;
        }

        //TO DO direction  right, left and top

        /* options params
         * @width                 (int)           - bubble tip container width
         * @direction             (string)        - position of bubble tip relative to element (top,right,bottom,left) - default 'bottom'
         * @trigger               (string)        - event that will show the bubble tip (click,hover,instant) - default 'hover'
         * @instantTriggerTimeout (int)           - if trigger == instant, this is how long the popup will be displayed on the page;
         *                                          if instantTriggerTimeout == 0, timeout will be disabled (the tooltip is always visible)
         * @showOnHover           (bool)          - choose if bubble stays visible when hovering over it
         * @align                 (string)        - horizontally align (left,right,center) - default center (valid only for top and bottom)
         * @relativeTo            (string)        - id of element to which bubble will be relative - default false (relative to 'this')
         * @offset                (int)           - offset (you can specify a margin between target element and bubbletip)
         * contentSource          (string|object) - 'html': corresponding helper element ($('#' + bubble.attr('id') + '-emgBubble'))
         *                                          'title': self-attribute
         *                                          '$('.some-element')': a jquery selector containing the bubble content
         * callback               (func)          - callback after bubble is shown
         * keepFixed              (bool)          - css position fixed
         * hOffset                (int)           - horizontal offset
         * additionalClass        (string)        - custom class
         * additionalInfo         (bool)          - ???
         * hideOnMouseOut         (bool)          - hide bubble container when hovering out
         * beforeCallback         (func)          - callback before bubble is shown; if callback returns false, bubble is not shown
         */

        var defaults = {
           width: 300,
           direction: 'bottom',
           trigger: 'hover',
           showOnHover: true,
           align: 'center',
           relativeTo: false,
           offset: 0,
           contentSource: 'html',
           displayDelay: 0,
           keepFixed: false,
           hOffset: 0,
           additionalClass: '',
           additionalInfo: '',
           instantTriggerTimeout: 5000,
           hideOnMouseOut: true,
           hideMouseOutTimeout: 50
        };

        options = $.extend({}, defaults, options);
        this.options = options;

        if($.inArray(options.direction, ['top', 'bottom', 'left', 'right']) == -1) {
          options.direction = 'bottom';
        }

        if($.inArray(options.align, ['center', 'left', 'right', 'top-left']) == -1) {
          options.direction = 'center';
        }

        var bubble = this;

        window.bubbleActive = false;


        if(!bubble.length) return false;
        window.emgInsideBox = false;
        var bubbleHtml;
        if (typeof options.contentSource == 'object') {
            bubbleHtml = options.contentSource.html();
        } else if (options.contentSource == 'title') {
            bubbleHtml = $(bubble).data('title');
        } else {
            bubbleHtml = $('#' + bubble.attr('id') + '-emgBubble').html();
            $('#' + bubble.attr('id') + '-emgBubble').remove();
        }

        var bubbleTop = 0;
        var bubbleLeft = 0;

        var bubbleId = 'emg-bubble-' + Math.floor(Math.random() * 100001);
        var additionalClass = options.additionalClass;

        bubble.hover(
            function(){
                window.bubbleActive = true;
            },
            function(){
              if (options.hideOnMouseOut) {
                window.bubbleActive = false;
                setTimeout(function(){
                    if(!window.bubbleActive){
                        $('#' + bubbleId).remove();
                        // if($('#emg-fluid-overlay').data('statuson')) {
                        //   emgFluidOverlayShow('close');
                        // }
                    }}, options.hideMouseOutTimeout);
              }
            }
        );

        // get position of element
        var p;
        if(options.relativeTo) {p = $('#' + options.relativeTo).offset();}
        else {p = bubble.offset();}

        //generate bubbletip position and width
        var bubbleCssProperties = 'width: ' + options.width + 'px;';
        var emgArrowPosition = 'emg-arrow-top-bubble';
        var elemWidth = 0;
        var elemLeft = 0;
        var padding = '';

      this.setTrigger = function(newTrigger){
        //console.log(newTrigger + ' set for ',this);
        bubble.off( "mouseenter" );
        bubble.off( "click" );
        if(newTrigger == 'hover'){
            bubble.hover(function(e){
              if(options.beforeCallback){
                  options.beforeCallback.call(bubble,e, this.options);
              }

              // get position of element
              var p;
              if(options.relativeTo) {p = $('#' + options.relativeTo).offset();}
              else {p = bubble.offset();}

              //generate bubbletip position and width
              var bubbleCssProperties = 'width: ' + options.width + 'px;';
              var emgArrowPosition = 'emg-arrow-top-bubble';
              var elemWidth = 0;
              var elemLeft = 0;
              var padding = '';

              switch (options.direction){
                  case 'top':
                    break;
                  case 'bottom':
                      var bubHeight;
                      if(options.relativeTo){
                          bubbleTop = $('#' + options.relativeTo).offset().top;
                          bubHeight = $('#' + options.relativeTo).height();
                      }
                      else {
                          bubbleTop = p.top;
                          bubHeight = bubble.height();
                      }
                      if(bubble.is('a')){if(!$(this).attr('data-mt')){bubbleTop += bubble.height() + 5;options.offset += 10;$(this).attr('data-mt',bubbleTop);}else{bubbleTop = $(this).attr('data-mt');}}
                      padding = 'margin-top:' +  (parseInt(bubHeight + options.offset) || 0) + 'px;';

                      break;
                  case 'left':
                      var bubWidth;
                      if (options.relativeTo) {
                          bubbleLeft = $('#' + options.relativeTo).offset().left;
                          bubWidth = $('#' + options.relativeTo).width();
                      } else {
                          bubbleTop = p.top - (bubble.height());
                          bubWidth = bubble.width();
                      }
                      padding = 'margin-left:' +  (parseInt(bubWidth + options.offset) || 0) + 'px;';
                      break;
                  case 'right':
                      break;
                  default:
                      break;
              }

              switch (options.align){
                  case 'center':
                      emgArrowPosition = 'emg-arrow-top-bubble';
                      if(options.relativeTo){elemWidth = $('#' + options.relativeTo).width()/2; elemLeft = $('#' + options.relativeTo).offset().left;}
                      else {elemWidth = bubble.width()/2; elemLeft = p.left;}
                      bubbleLeft = elemLeft - (options.width/2) + elemWidth;
                      if(options.hOffset) {
                          elemLeft = elemLeft + parseInt(options.hOffset);
                          bubbleLeft = bubbleLeft + parseInt(options.hOffset);
                      }
                      break;
                  case 'top-left':
                      emgArrowPosition = 'emg-arrow-top-bubble-left';
                      bubbleLeft = p.left;
                      break;
                  case 'left':
                      emgArrowPosition = 'emg-arrow-left-bubble';
                      bubbleLeft = p.left;
                      break;
                  case 'right':
                      emgArrowPosition = 'emg-arrow-top-bubble-right';
                      if(options.relativeTo){
                          elemWidth = $('#' + options.relativeTo).width();
                          var paddingR = $('#' + options.relativeTo).css('padding-right');
                          paddingR = parseFloat(paddingR.replace('px',''));
                          var paddingL = $('#' + options.relativeTo).css('padding-left');
                          paddingL = parseFloat(paddingL.replace('px',''));
                          elemLeft = $('#' + options.relativeTo).offset().left;
                      }
                      else {
                          elemWidth = bubble.width();
                          var paddingR = bubble.css('padding-right');
                          paddingR = parseFloat(paddingR.replace('px',''));
                          var paddingL = bubble.css('padding-left');
                          paddingL = parseFloat(paddingL.replace('px',''));
                          elemLeft = p.left;
                      }

                      if(options.hOffset) {
                          elemLeft = elemLeft + parseInt(options.hOffset);
                          bubbleLeft = bubbleLeft + parseInt(options.hOffset);
                      }

                      bubbleLeft = elemLeft - (options.width - elemWidth) + paddingR + paddingL;
                      break;
                  default:
                      break;
              }
              $('.emg-bubble-tip').each(function(){$(this).remove();});
              var bubbleTopFinal = bubbleTop;
              if(window.emgMenuFixed && !$(this).is('a')){var bubbleTopFinal = bubbleTop + 3;}
              //if(window.emgMenuFixed && $(this).is('a')){var bubbleTopFinal = bubbleTop - 70;}
              if(!window.emgMenuFixed) {var bubbleTopFinal = bubbleTop;}
              if(!window.emgMenuFixed && $(this).is('a')){bubbleTopFinal = bubbleTopFinal;}
              if($(this).is('a')){bubbleTopFinal -= 30;}
              var bubbleCssPropertiesFinal = bubbleCssProperties + 'top: ' + bubbleTopFinal + 'px;left: ' + bubbleLeft + 'px;' + padding;

              var bubbleContainer = '<div style="' + bubbleCssPropertiesFinal + '" id="' + bubbleId + '" class="emg-bubble-tip ' + additionalClass + '"><div class="emg-box emg-arrow ' + emgArrowPosition + '" >' + bubbleHtml + '</div></div>';

              $('body').append(bubbleContainer);
              if($('#' + bubbleId).outerWidth() < 150){
                $('#' + bubbleId).find('.emg-arrow-top-bubble').addClass('emg-arrow-top-small-bubble').removeClass('emg-arrow-top-bubble');
              }
              $('.emg-mini-cart-items').customScrollbar({preventDefaultScroll:true});
              $(window).scroll(function(){
                  if(window.emgMenuFixed && !bubble.is('a')){
                      if($(window).scrollTop() > 0){
                          $('#' + bubbleId).css('position', 'fixed');
                          $('#' + bubbleId).css('top', '6px');
                      }
                  }
                  if(!window.emgMenuFixed){
                      $('#' + bubbleId).remove();
                      // if($('#emg-fluid-overlay').data('statuson')) {
                      //   emgFluidOverlayShow('close');
                      // }
                  }
              });

              $('#' + bubbleId).hover(function(){
                  if (!options.showOnHover) {
                    $('#' + bubbleId).remove();
                    return;
                  }
                  window.bubbleActive = true;
              },function(){
                  window.bubbleActive = false;
                  setTimeout(function(){
                      if(!window.bubbleActive){
                          $('#' + bubbleId).remove();
                          // if($('#emg-fluid-overlay').data('statuson')) {
                          //   emgFluidOverlayShow('close');
                          // }
                      }},'100');
              });

              if(options.callback){
                  options.callback();
              }
          },
          function(){
          });
        }else if(newTrigger == 'instant') {
            if(options.beforeCallback){
              options.beforeCallback.call(bubble, this.options);
            }

            displayToolTip = true;

            if(options.additionalInfo) {
                var productPageViewNumber;

                if(localStorage && localStorage.getItem('productPageViews')) {

                  productPageViewNumber = parseInt(localStorage.getItem('productPageViews'));

                  if(productPageViewNumber > 2) {
                      displayToolTip = false;
                      localStorage.setItem('productPageViews', productPageViewNumber);

                  } else {
                      productPageViewNumber++;
                      localStorage.setItem('productPageViews', productPageViewNumber);

                  }

                } else {
                  localStorage.setItem('productPageViews', 1);
                }
            }

            if(displayToolTip) {
                // get position of element
                var p;
                if(options.relativeTo) {p = $('#' + options.relativeTo).offset();}
                else {p = bubble.offset();}

                //generate bubbletip position and width
                var bubbleCssProperties = 'width: ' + options.width + 'px;';
                var emgArrowPosition = 'emg-arrow-top-bubble';
                var elemWidth = 0;
                var elemLeft = 0;
                var padding = '';
                var arrowPosition = 'top';


                switch (options.direction){
                        case 'top':
                          var bubHeight;
                          if(options.relativeTo){
                            bubHeight = $('#' + options.relativeTo).height();
                            bubbleTop = $('#' + options.relativeTo).offset().top - bubHeight - options.offset;
                          }
                          else {
                            bubHeight = bubble.height();
                            bubbleTop = p.top - bubHeight - options.offset;
                          }
                          if(bubble.is('a')){if(!$(this).attr('data-mt')){bubbleTop += bubble.height() + 5;options.offset += 10;$(this).attr('data-mt',bubbleTop);}else{bubbleTop = $(this).attr('data-mt');}}
                          padding = 'margin-bottom:' +  (parseInt(bubHeight + options.offset) || 0) + 'px;';
                          arrowPosition = 'bottom';

                          break;
                        case 'bottom':
                            var bubHeight;
                            if(options.relativeTo){
                                bubbleTop = $('#' + options.relativeTo).offset().top;
                                bubHeight = $('#' + options.relativeTo).height();
                            }
                            else {
                                bubbleTop = p.top;
                                bubHeight = bubble.height();
                            }
                            if(bubble.is('a')){if(!$(this).attr('data-mt')){bubbleTop += bubble.height() + 5;options.offset += 10;$(this).attr('data-mt',bubbleTop);}else{bubbleTop = $(this).attr('data-mt');}}
                            padding = 'margin-top:' +  (parseInt(bubHeight + options.offset) || 0) + 'px;';

                            break;
                        case 'left':
                            break;
                        case 'right':
                            break;
                        default:
                            break;
                    }

                    switch (options.align){
                        case 'center':
                            emgArrowPosition = 'emg-arrow-' + arrowPosition + '-bubble';
                            if(options.relativeTo){elemWidth = $('#' + options.relativeTo).width()/2; elemLeft = $('#' + options.relativeTo).offset().left;}
                            else {elemWidth = bubble.width()/2; elemLeft = p.left;}
                            bubbleLeft = elemLeft - (options.width/2) + elemWidth;
                            if(options.hOffset) {
                                elemLeft = elemLeft + parseInt(options.hOffset);
                                bubbleLeft = bubbleLeft + parseInt(options.hOffset);
                            }
                            break;
                        case 'top-left':
                            emgArrowPosition = 'emg-arrow-top-bubble-left';
                            bubbleLeft = p.left;
                            break;
                        case 'left':
                            emgArrowPosition = 'emg-arrow-left-bubble';
                            bubbleLeft = p.left;
                            break;
                        case 'right':
                            emgArrowPosition = 'emg-arrow-top-bubble-right';
                            if(options.relativeTo){
                                elemWidth = $('#' + options.relativeTo).width();
                                var paddingR = $('#' + options.relativeTo).css('padding-right');
                                paddingR = parseFloat(paddingR.replace('px',''));
                                var paddingL = $('#' + options.relativeTo).css('padding-left');
                                paddingL = parseFloat(paddingL.replace('px',''));
                                elemLeft = $('#' + options.relativeTo).offset().left;
                            }
                            else {
                                elemWidth = bubble.width();
                                var paddingR = bubble.css('padding-right');
                                paddingR = parseFloat(paddingR.replace('px',''));
                                var paddingL = bubble.css('padding-left');
                                paddingL = parseFloat(paddingL.replace('px',''));
                                elemLeft = p.left;
                            }

                            bubbleLeft = elemLeft - (options.width - elemWidth) + paddingR + paddingL;
                            break;
                        default:
                            break;
                    }
                var bubbleTopFinal = bubbleTop;
                if(window.emgMenuFixed && !$(this).is('a')){var bubbleTopFinal = bubbleTop + 3;}
                //if(window.emgMenuFixed && $(this).is('a')){var bubbleTopFinal = bubbleTop - 70;}
                if(!window.emgMenuFixed) {var bubbleTopFinal = bubbleTop;}
                if(!window.emgMenuFixed && $(this).is('a')){bubbleTopFinal = bubbleTopFinal;}
                if($(this).is('a')){bubbleTopFinal -= 30;}
                var bubbleCssPropertiesFinal = bubbleCssProperties + 'top: ' + bubbleTopFinal + 'px;left: ' + bubbleLeft + 'px;' + padding;

                var bubbleContainer = '<div style="' + bubbleCssPropertiesFinal + '" id="' + bubbleId + '" class="emg-bubble-tip ' + additionalClass + '"><div class="emg-box emg-arrow ' + emgArrowPosition + '" >' + bubbleHtml + '</div></div>';

                $('body').append(bubbleContainer);

                if (options.instantTriggerTimeout){
                  setTimeout( options.instantTriggerTimeout);
                }
            }

            } else {
            bubble.click(function(e){
              // get position of element
              var p;
              if(options.relativeTo) {p = $('#' + options.relativeTo).offset();}
              else {p = bubble.offset();}

              //generate bubbletip position and width
              var bubbleCssProperties = 'width: ' + options.width + 'px;';
              var emgArrowPosition = 'emg-arrow-top-bubble';
              var elemWidth = 0;
              var elemLeft = 0;
              var padding = '';

              switch (options.direction){
                  case 'top':
                      break;
                  case 'bottom':
                      var bubHeight;
                      if(options.relativeTo){
                          bubbleTop = $('#' + options.relativeTo).offset().top;
                          bubHeight = $('#' + options.relativeTo).height();
                      }
                      else {
                          bubbleTop = p.top;
                          bubHeight = bubble.height();
                      }
                      if(bubble.is('a')){bubbleTop += bubble.height() + 5;options.offset += 10}
                      padding = 'margin-top:' +  (parseInt(bubHeight + options.offset) || 0) + 'px;';

                      break;
                  case 'left':
                      break;
                  case 'right':
                      break;
                  default:
                      break;
              }

              switch (options.align){
                  case 'center':
                      emgArrowPosition = 'emg-arrow-top-bubble';
                      if(options.relativeTo){elemWidth = $('#' + options.relativeTo).width()/2; elemLeft = $('#' + options.relativeTo).offset().left;}
                      else {elemWidth = bubble.width()/2; elemLeft = p.left;}
                      bubbleLeft = elemLeft - (options.width/2) + elemWidth;
                      break;
                  case 'left':
                      emgArrowPosition = 'emg-arrow-top-bubble-left';
                      bubbleLeft = p.left;
                      break;
                  case 'right':
                      emgArrowPosition = 'emg-arrow-top-bubble-right';
                      if(options.relativeTo){
                          elemWidth = $('#' + options.relativeTo).width();
                          var paddingR = $('#' + options.relativeTo).css('padding-right');
                          paddingR = parseFloat(paddingR.replace('px',''));
                          var paddingL = $('#' + options.relativeTo).css('padding-left');
                          paddingL = parseFloat(paddingL.replace('px',''));
                          elemLeft = $('#' + options.relativeTo).offset().left;
                      }
                      else {
                          elemWidth = bubble.width();
                          var paddingR = bubble.css('padding-right');
                          paddingR = parseFloat(paddingR.replace('px',''));
                          var paddingL = bubble.css('padding-left');
                          paddingL = parseFloat(paddingL.replace('px',''));
                          elemLeft = p.left;
                      }

                      bubbleLeft = elemLeft - (options.width - elemWidth) + paddingR + paddingL;
                      break;
                  default:
                      break;
              }

              $('.emg-bubble-tip').each(function(){$(this).remove();});
              window.emgInsideBox = false;
              if(window.emgMenuFixed && !$(this).is('a')){var bubbleTopFinal = bubbleTop;}
              if(window.emgMenuFixed && $(this).is('a')){var bubbleTopFinal = bubbleTop - 90;}
              if(!window.emgMenuFixed) {var bubbleTopFinal = bubbleTop;}
              var bubbleCssPropertiesFinal = bubbleCssProperties + 'top: ' + bubbleTopFinal + 'px;left: ' + bubbleLeft + 'px;' + padding;
              var bubbleContainer = '<div style="' + bubbleCssPropertiesFinal + '" id="' + bubbleId + '" class="emg-bubble-tip ' + additionalClass + '"><div class="emg-box emg-arrow ' + emgArrowPosition + '">' + bubbleHtml + '</div></div>';
              $('body').append(bubbleContainer);
              $('.emg-mini-cart-items').customScrollbar({preventDefaultScroll:true});
              $('.emg-mini-menu-category > li').click(function(){
                  var categoryHtml = $(this).html();
                  categoryHtml = categoryHtml.replace('<span>›</span>','');
                  $('#searchbox-dropdown-categories').html(categoryHtml);
                  $('#emg-input-autosuggest').attr('data-c', $(this).attr('data-c'));
                  window.autoSuggestDept = $(this).attr('data-c');
                  $('#' + bubbleId).remove();
              });
              $(window).scroll(function(){
                  var bubHeight;
                  if(options.relativeTo){
                    bubbleTop = $('#' + options.relativeTo).offset().top;
                  }
                  else {
                    bubbleTop = p.top;
                  }
                  if(bubble.is('a')){bubbleTop += bubble.height() + 5;options.offset += 10}
                  var bubbleTopFinal = bubbleTop;
                  //if(window.emgMenuFixed && $(this).is('a')){bubbleTopFinal = bubbleTop - 90;}
                  $('#' + bubbleId).css('top', bubbleTopFinal + 'px');
                  if(options.keepFixed) {
                    $('#' + bubbleId).css('top', bubbleTopFinal - $(window).scrollTop() + 'px');
                    $('#' + bubbleId).css('position', 'fixed');
                  }
              });

              $(this).hover(function() {
                window.emgInsideBox = false;
              }, function() {
                window.emgInsideBox = true;
              });


              $('#' + bubbleId).hove}, function() {
                if (options.hideOnMouseOut) {
                  $('#' + bubbleId).remove();
                  window.bubbleActive = false;
                  window.emgInsideBox = true;
                }
              });

              if(options.callback){
                  options.callback();
              }

            });
            }
      }.bind(this);

      this.setTrigger(this.options.trigger);
    };

    /**
     * options params
     *
     * @moreText  (string) - string to show on show more behaviour
     * @lessText  (string) - string to show on show less behaviour
     */
    $.fn.emgToggler = function( params ) {
        //set options to default values if no params are passed
        var options = {
            moreText: '<span class="emg-char-plus"></span> show more',
            lessText: '<span class="emg-char-minus"></span> show less'
        };
        $.extend(options, params);

        var toggleTrigger = this;
        var toggleTarget = toggleTrigger.parent().find('.emg-hidden-items');

        toggleTrigger.click(function(event) {
            event.preventDefault();
            if (toggleTarget.is(':visible')) {
                toggleTarget.hide();
                toggleTrigger.html(options.moreText);
            } else {
                toggleTarget.show();
                toggleTrigger.html(options.lessText);
            }
        });
    };


  /**
   * @clickZoneSelector         css class for the zone destined to be used as a button/select, default .emg-custom-select-click-zone
   * @onStateSelector            css class for the zone destined to be showed in the 'on'  state, default .emg-hidden-items
   * @offStateSelector          css class for the zone destined to be showed in the 'off' state, default .emg-custom-select-off
   * @scrollSelector            css class for a custom scrollbar, optional, default .emg-custom-select-scrollable
   * @autoCloseOtherInstances
   * @addInstanceToBeClosed
   */
  $.emgSimpleSelectBoxes = [];
  $.fn.emgSimpleSelectBox = function( params ) {
    //set options to default values if no params are passed
    var options = {
      clickZoneSelector: '.emg-custom-select-click-zone',
      onStateSelector: '.emg-hidden-items',
      offStateSelector: '.emg-custom-select-off',
      scrollSelector: '.emg-custom-select-scrollable',
      autoCloseOtherInstances: true,
      addInstanceToBeClosed: true
    };
    $.extend(options, params);

    var toggleContainer = this;
    var toggleTrigger = toggleContainer.find(options.clickZoneSelector);
    var toggleTarget = toggleContainer.parent().find(options.onStateSelector);
    var offButton = toggleContainer.find(options.offStateSelector);
    var scrollList = toggleContainer.find(options.scrollSelector);
    var currentObject = {
      id: $(this).attr('id'),
      options: options
    };

    toggleTrigger.click(function(event) {
      event.preventDefault();
      //the event is destined for multiple calls
      // so the line below must be used
      event.stopPropagation();

      //turn 'off' other instances
      if (options.autoCloseOtherInstances) {
        $.each($.emgSimpleSelectBoxes, function(index, boxOptions) {
          if (boxOptions.id == currentObject.id) {
            return true;
          }
          boxContainer = $('#'+boxOptions.id);
          boxToggleTarget = boxContainer.parent().find(boxOptions.options.onStateSelector);
          boxOffButton = boxContainer.find(boxOptions.options.offStateSelector);
          if (boxToggleTarget.is(':visible')) {
            boxToggleTarget.hide();
            boxOffButton.show();
          }
        });

        $.emgSimpleSelectBoxes = [];
      }

      if (toggleTarget.is(':visible')) {
        toggleTarget.hide();
        offButton.show();
      } else {
        toggleTarget.show();
        offButton.hide();

        //instantiate another plugin
        if (typeof (scrollList) != 'undefined') {
          scrollList.customScrollbar({
            skin: 'emg-filter-skin',
            updateOnWindowResize: true,
            animationSpeed: 100,
            swipeSpeed: 1,
            wheelSpeed: 10
          });
        }

        //store 'on' instances for further use
        if (options.addInstanceToBeClosed) {
          $.emgSimpleSelectBoxes.push(currentObject);
        }
      }


    });

    //turn 'off' other instances
    $('html').click(function() {
      toggleTarget.hide();
      offButton.show();
      //reset 'on' instances container
      if (options.autoCloseOtherInstances) {
        $.emgSimpleSelectBoxes = [];
      }
    });
  }
}( jQuery ));

function microtime(get_as_float) {
    var unixtime_ms = new Date().getTime();
    var sec = parseInt(unixtime_ms / 1000);
    return get_as_float ? (unixtime_ms/1000) : (unixtime_ms - (sec * 1000))/1000 + ' ' + sec;
}

function abonare_newsletter(){
    err = false;
    if ($('#emg_nl_name').val() == ''){
        $('#emg_nl_name').addClass('emg_input_error');
        $('#emg_nl_name').parent().children('span').addClass('emg_icon_error');
        err = true;
    }
    else{
        $('#emg_nl_name').removeClass('emg_input_error');
        $('#emg_nl_name').parent().children('span').removeClass('emg_icon_error');
    }

    if ($('#emg_nl_email').val() == ''){
        $('#emg_nl_email').addClass('emg_input_error');
        $('#emg_nl_email').parent().children('span').addClass('emg_icon_error');
        err = true;
    }
    else{
        $('#emg_nl_email').removeClass('emg_input_error');
        $('#emg_nl_email').parent().children('span').removeClass('emg_icon_error');
    }

    if (!err){
        params = {'fn_name': $('#emg_nl_name').val(),'fn_email': $('#emg_nl_email').val()};
        $.ajax({
            type: "POST",
            url: "/newsletter/%3F",
            cache: false,
            data: params,
            dataType: 'html',
            success: function(html){
                var ret = $.parseJSON( html );

                if(ret.captcha){
                    eval(ret.recaptcha);
                }

                if(ret.message){
                    alert(ret.message);
                }
            }
        });
    }
    return false;
}


/**
 * Used for HeaderCart
 */
function emgSetHeaderCart(data,qty) {
    $('#emg-mini-cart-products').html(data);
    if(parseInt(qty) > 0){
        var nrItems = parseInt(qty)-1;
        $('#my_card .jewel').html(nrItems);
        if(nrItems < 1){
            $('#my_card .jewel').hide();
            $('#emg-minicart-footer-area').hide();
        }
        else{
            $('#my_card .jewel').show();
            $('#emg-minicart-footer-area').show();
        }
    }
    $('.emg-mini-cart-items').customScrollbar({preventDefaultScroll:true});
}
/**
 * Used for HeaderCart
 */
var cart_loaded = false;
var cart_data;
function emgLoadHeaderCart(load,qty){

    if(load != false) load = true;
    if(load){
        $('#emg-mini-cart-products').html('<img src="//s0emagst.akamaized.net/layout/all/images/preloader.gif" style="margin-left:80px;margin-top: 15px;">');
    }
    if (cart_loaded){
        emgSetHeaderCart(cart_data,qty);
        return;
    }
    $.ajax({
        url: '/shopping/header-cart?act=load',
        type: 'GET',
        cache: true,
        success: function(data){
            cart_loaded = true;
            cart_data = data;
            emgSetHeaderCart(data,qty);
        }
    });
}
/**
 * Used for HeaderCart
 */
function emgRemoveHeaderCart(lineId, itemId, uId, quantity, elem) {
    var options = {
        lineId:lineId,
        itemId:itemId,
        uId:uId,
        act:'remove',
        q:quantity,
        ref:'del-cart'
    };

    var urlProtocolPart = "shopping/header-cart";
    var cartUpdatePath = SITE_LINK_PROTOCOL + urlProtocolPart + "?" + $.param(options);
    var parent = elem.parent().parent().next().attr('id');

    $.ajax({
        url:cartUpdatePath,
        type: "POST",
        success:function (data) {
            try {
                Emag.DatalayerManager.pushData(Emag.DatalayerManager.processStringHtmlJson(data));
            } catch(err) {
                Emag.DatalayerManager.showErrors(err);
            }

            dlScript = $('<div />').html(data).find('script');
            eval(dlScript.html());
            cart_loaded = false;
            emgLoadHeaderCart(false,$('.emg-cart-bubble').html());
        }
    });
}

/**
 * Used for notifications
 * @param type
 * @returns {{id: string, icon: string}|{id: string, icon: string}|{id: string, icon: string}|{id: string, icon: string}|{id: string, icon: string}}
 */
function getTypeInfo(type) {
    switch(type) {
        case '1': // success
            var data = {"id":"notificationSuccessContainer", "icon": "success.png"};
            break;
        case '3': // warning
            var data = {"id":"notificationWarningContainer", "icon": "warning.png"};
            break;
        case '4': // info
            var data= {"id":"notificationInfoContainer", "icon": "info.png"};
            break;
        case '5': // persistent error
            var data= {"id":"notificationPErrorContainer", "icon": "perror.png"};
            break;
        default: // eroare
            var data = {"id":"notificationErrorContainer", "icon": "error.png"};
            break;
    }
    return data;
}

/**
 * Get CSS class GUI info
 *
 * @param string type
 * @returns string
 */
function getCssClassGuiInfo(type) {
    var data = "";
    switch (type) {
        case "1": // success
            data = "success";
            break;
        case "3": // warning
            data = "warning";
            break;
        case "4": // info
            data = "primary";
            break;
        case "5": // persistent error
            data = "danger";
            break;
        default: // eroare
            data = "danger";
            break;
    }

    return data;
}

/**
 * Used for notifications
 * @param notifications
 */}

/**
 * Used for notifications
 *
 * @param key
 * @param valueContainer
 */
function writeNotificationType(key, valueContainer) {
    if (key == "input") {
        return;
    }

    var message = "";
    jqEmag.each(valueContainer, function (elem, value) {
        elem = elem.toString();
        if (elem) {
            message = message +
                '<div class="gui-info-box -' + getCssClassGuiInfo(key) + '" style="margin-top: 5px; padding: 7px;">' +
                '<div class="gui-info-header"></div>' +
                '<p class="gui-info-message" style="margin-top: 8px; text-align: left;">' + value + '</p>' +
                '</div>';
        }
    });

    if (message != "") {
        var typeInfo = getTypeInfo(key);
        var typeId = "#" + typeInfo.id;

        message = '<div style="padding: 10px 0;">' +
            message +
            '</div>';

        jqEmag(typeId).append(message);
        jqEmag(typeId).show();
    }
}

/**
 * Update url with style
 *
 * This function is useful on updating hrefs containing
 * hashtags, other params or the same param
 *
 * @param key
 * @param value
 * @param url
 * @returns {*}
 * @constructor
 */
function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            var hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?',
                hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}

(function($) {
    $.expr[":"].onScreen = function(elem) {
        var $window = $(window);
        var viewport_top = $window.scrollTop();
        var viewport_height = $window.height();
        var viewport_bottom = viewport_top + viewport_height;
        var $elem = $(elem);
        var top = $elem.offset().top;
        var height = $elem.height();
        var bottom = top + height;

        return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
})(jQuery);

function showBanners(elem){
    elem.find('img').eac});
}

function focusSearchFieldHeader() {
    var searchInput =$111("#emg-input-autosuggest");
    var parentElementID = searchInput.parent().attr("id");
    var detectPageType =  window.location.pathname.split("/");

    if( detectPageType.length > 0 && $.inArray("info", detectPageType) > 0 )
    {
        return false;
    }

    searchInput.on("focus", function() {
        $( "#" + parentElementID).addClass("emg-search-suggest-focus");
    });

    searchInput.on("blur"});

    // if( $("#emg-input-autosuggest").val() === "" ) {
    //     searchInput.focus();
    // }

    // if is supermarket change data-c for autosuggest fix
    if( detectPageType.length > 0 && $.inArray("supermarket", detectPageType) > 0 )
    {
        $('#emg-input-autosuggest').attr('data-c', 'supermarket');
    }
}

function addToWishlist(prod_id,wl_name,wl_id,follow){
    $.ajax({
        type: "POST",
        url: "/add-to-wishlist",
        data: {prod_id:prod_id, wl_name:wl_name, wl_id:wl_id},
        success: function(msg){
            if(msg != ""){
                var msg_tmp = msg.split("|");
                if(msg_tmp[0] == 1 && follow == 1){

                    $.cookie('freshWishlistProduct', prod_id, {expires: 1, path: '/'});

                    url = '';
                    if(document.location.pathname.indexOf('supermarket')>0)
                        url += '/supermarket';

                    if(msg_tmp[1] == 0){
                        url += '/wishlists';
                    } else {
                        url += '/wishlist/'+msg_tmp[1];
                    }

                    window.location = url;
                }
            }
        }
    });
}

/**
 * Reset input initial value
 * (should be deprecated and replaced with placeholders, but it's needed for backwards compatibility)
 *
 * @param df_val
 * @param obj
 * @param header
 */
function reset_input(df_val,obj, header){
  if (typeof header != 'undefined') {
    if($(obj).val() == ""){
      $(obj).css({"font-weight":"bold", "color":"#9E9E9F"});
    } else {
      $(obj).css({"font-weight":"normal", "color":"#000"});
    }
  }
  var val = $(obj).val();
  if(df_val == val){
    $(obj).val("");
  }
  if(val == ''){
    $(obj).val(df_val);
  }
}

/**
 * Used on listing pages
 *
 * @param categoryId
 */
function addComparedProducts(categoryId) {
  var productList = '';
  if (page_type == "search") {
      productList = jQuery.parseJSON($.cookie('compara_produse_search'));
      $( ".compara-produs .compara" ).each(function(index, element) {
          if ($(element).data('category') != categoryId) {
              $(element).attr('disabled', true);
              $(element).next().css( "color", "#BEC3C8" );
          }

          if (!productList) {
              $(element).attr('disabled', false);
              $(element).next().css( "color", "#1258a1" );
          }
      });
  } else {
      productList = jQuery.parseJSON($.cookie('compara_produse'));
  }

  if ( productList && productList[categoryId] ) {
    $("#box-compara_items").html("");
    var item = productList[categoryId];
    if ( !productIdToCompare ) {
      $(".compara:checkbox").attr('checked', false);
    }
    $.each(item, function(key, index) {
      $("#box-compara_items").append('<div class="produs-comparat"><div class="sterge-produs-comparat" data-category="'+categoryId+'" onclick="compara(' + key + ',' + categoryId + ', this);"></div><img src="' + index.replace('+',' ').replace('+',' ') + '" /></div>');
      if ( !productIdToCompare ) {
        $('#p' + key).attr('checked', true);
      }
    });
    if ( productIdToCompare !== 'undefined' ) {
      if ( item[productIdToCompare] ) {
        $('#compare-checkbox[value=' + productIdToCompare + ']').attr('checked', true);
      } else {
        $('#compare-checkbox[value=' + productIdToCompare + ']').attr('checked', false);
      }
    }
    $('#box-compara').css('display', 'block');
  } else {
    if ( productIdToCompare ) {
      $('#compare-checkbox[value=' + productIdToCompare + ']').attr('checked', false);
    } else {
      $(".compara:checkbox").attr('checked', false);
    }
    $('#box-compara').css('display', 'none');
    $("#box-compara_items").html("");
  }
}

(function($){
  $.fn.maxlength = function(options){
    var t = $(this);
    t.each(function(){
      options = $.extend(
          {},
          {
            counterContainer: false,
            text: '%left characters left', // %length %maxlength %left
            callbackUpdateCounter: function(){},
            callbackUpdateLength: function(){}
          },
          options
      );
      var t = $(this),
          data = {
            options: options,
            field: t,
            counter: $('<div class="maxlength"></div>'),
            maxLength: parseInt(t.attr("maxlength"), 10),
            lastLength: null,
            updateCounter: function(){
              var length = this.field.val().length,
                  text = this.options.text.replace(/\B%(length|maxlength|left)\b/g, $.proxy(function(match, p){
                    return (p == 'length')? length : (p == 'maxlength')? this.maxLength : (this.maxLength - length);
                  }, this));
              this.counter.html(text);
              this.options.callbackUpdateCounter();
              if(length != this.lastLength){
                this.updateLength(length);
              }
            },
            updateLength: function(length){
              this.field.trigger("update.maxlength", [
                this.field,
                this.lastLength,
                length,
                this.maxLength,
                this.maxLength - length
              ]);
              this.lastLength = length;
              this.options.callbackUpdateLength();
            }
          };
      if(data.maxLength){
        data.field
            .data("maxlength", data)
            .bind({
              "keyup change"},
              "cut paste drop": function(e){
                setTimeout($.prox}, this), 1);
              }
            });
        if(options.counterContainer){
          options.counterContainer.append(data.counter);
        } else {
          data.field.after(data.counter);
        }
        data.updateCounter();
      }
    });
    return t;
  };
})(jQuery);

//Wishlist
/*
 * scrollTo - 1/0 if you need to scroll to element (used when you was redirected back on a page)
 * prodId   - product id
 * callback - callback after product was added to wishlist
 */
function emgAddToWishlist(scrollTo, prodId, family, callback){
  $.ajax({
    'url': '/site_wishlist_fashion/' + prodId + '/' + family + '/',
    'success': function(data) {
      if(scrollTo != 0) {
        scrollToElement('#emg-prod-listing-' + prodId, 0, -200);
      }
      if(callback){callback(data);}
    }
  });
}

function scrollToElement(selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 1000;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $(selector);
  offset = element.offset();
  offsetTop = offset.top + verticalOffset;
  $('html, body').animate({
    scrollTop: offsetTop
  }, time);
}


function searchSort(element) {
    var url = '/' + $(element).data('url');
    if (typeof $(element).data('url') === 'undefined') {
        url = $(element).val();
    }
    if (typeof History !== "undefined" && History.enabled) {
        if (filter_ajax_running) return false;
        if (typeof url !== "undefined") {
            History.pushState({state: url}, "", url);
            return false;
        }
    } else {
        window.location.href = url;
    }
}

function setViewType(id, url) {
  $.cookie("view_type", id, {expires: 365, path: '/'});
  window.location = url;
}

(function($) {

  var emgModal = function (element, options) {
    this.init(element, options);
  };

  emgModal.prototype = {

    constructor: emgModal,

    init: function (element, options) {
        this.options = options;
        this.$element = $(element).clone();
        this.$element.data('emgModal', this);
        $(element).hide();

        this.appendModal();
        this.buildModal();
        this.bindActions();
        this.options.callback();
        this.destroyed = false;
    },
    setPosition: function(){
        // jquery 1.4.4 workaround
        var h = $.fn.jquery == '1.4.4' ? $(window).height() : $(window).outerHeight();

        if(h > this.$element.outerHeight()){
          var height = h + 'px';
          this.top = (h - this.$element.outerHeight())/2;
        }
        else{
          this.$element.css('margin-bottom', this.top + 'px');
          var height = this.$element.outerHeight() + this.top*2 + 'px';
        }

        this.$element.css('top',this.top + 'px');
        this.$overlay.find('.emg-modal-backdrop').css('height', height);
    },
    appendModal: function(){
        var $content = $('<div class="emg-modal-content"></div>');
        var $close   = $('<div class="emg-modal-close"><span class="icon-i17-close"></span></div>');

        if (!this.options.canClose) {
          $close.hide();
        }

        this.$close = $close;

        $content.append(this.$element.html());
        this.$element.html($content).append($close);

        this.top = 50;
        this.position = 'relative';
    },
    buildModal: function(){
        this.$overlay = $('<div class="emg-modal-overlay fade in"></div>');
        $('body').append(this.$overlay);
        var left = ($('body').outerWidth() - this.$element.outerWidth())/2 + 'px';

        this.$overlay.append(this.$element);

        // jquery 1.4.4 workaround
        var h = $.fn.jquery == '1.4.4' ? $(window).height() : $(window).outerHeight();

        if(h > this.$element.outerHeight()){
          var height = h + 'px';
          this.top = (h - this.$element.outerHeight())/2;
        }
        else{
          this.$element.css('margin-bottom', this.top + 'px');
          var height = this.$element.outerHeight() + this.top*2 + 'px';
        }
        this.$element.addClass('emg-modal');
        this.$overlay.append('<div class="emg-modal-backdrop fade in"></div>');
        this.$overlay.find('.emg-modal-backdrop').css('height', height);
        this.$overlay.css('overflow-y', 'scroll');
        var bodyWidthBefore = $('body').outerWidth();
        $('body').css('overflow','hidden');
        var bodyWidthAfter = $('body').outerWidth();
        $('body').css('margin-right', bodyWidthAfter - bodyWidthBefore + 'px');

        this.$element.css('top',this.top + 'px').css('position', this.position);
    },
    bindActions: function(){
      var that = this;
      this.$element.hover(function(){window.modalPromoBundle = true;});
      this.$overlay.click(function(e){
        if (!window.modalPromoBundle && (!$.contains(that.$element[0], e.target) && e.target != that.$element[0]) && that.options.canClose && that.options.canCloseOnOverlay) {
          that.hide();
        }
      });
      this.$element.find('.emg-modal-close').clic});
      $(window).resize(function(){
        that.setPosition();
      });
    },
    open: function(args){
        this.$element.show();
        this.$overlay.show();

        if (args && args.callback) args.callback();
    },
    hide: function(){
        $(document).find('.emg-bubble-tip').eac});
        this.options.onClose();
        this.$element.hide();
        this.$overlay.hide();
        this.destroy();
        $('body').css('overflow','auto').css('margin-right','0px');
    },
    //Disable closing
    disableClosing: function() {
      this.options.canClose = false;
      this.$close.hide();
    },
    //Enable closing
    enableClosing},
    //Disable overlay closing
    disableClosingOnOverlay: function() {
      this.options.canCloseOnOverlay = false;
    },
    //Enable overlay closing
    enableClosingOnOverlay},
    destroy: function(){
      var e = $.Event('destroy');

      this.$element.trigger(e);

      if (e.isDefaultPrevented()) return;

      // jquery 1.4.4 workaround
      if ($.fn.jquery == '1.4.4') {
        this.$element.unbind('.emgModal').removeData('emgModal');
      } else {
        this.$element.off('.emgModal').removeData('emgModal');
      }

      // this.$element.off('.emgModal').removeData('emgModal');
      this.destroyed = true;
      this.$overlay.remove();
      this.$element.remove();
    }

  };

  $.fn.emgModal = function (option, args) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('emgModal'),
          options = $.extend({}, $.fn.emgModal.defaults, $this.data(), typeof option == 'object' && option);

      if (typeof data == 'undefined' || data.destroyed !== false) {
        $this.data('emgModal', (data = new emgModal(this, options)));
      }
      if (typeof option == 'string') {
        data[option].apply(data, [].concat(args));
      }
      else if (options.show) data.show()
    })
  };

  $.fn.emgModal.Constructor = emgModal;

  $.fn.emgModal.defaults = {
    //Close on esc key press
    keyboard: true,
    //Show overlay to disable background actions
    overlay: true,
    //Can Close
    canClose: true,
    //Close on overlay click
    canCloseOnOverlay: true,
    //callback
    callback: function(){},
    //On close callback
    onClose: function(){}
  };
})(jQuery);
function addToWishlistFashionPostLogin(data){
  if($('#emg-add-to-wishlist-'+data.post.pid).length > 0){
    $emgAddToWish = $('#emg-add-to-wishlist-'+data.post.pid).data('emgAddToWishlist');
  }else if($('#emg-product-listing-wishlist-'+data.post.pid)){
    $emgAddToWish = $('#emg-product-listing-wishlist-'+data.post.pid).data('emgAddToWishlist');
  }
  $emgAddToWish.addToWishlist($emgAddToWish.options.scrollTo,$emgAddToWish.options.product,$emgAddToWish.options.family,function(data){
    if(data != false && $emgAddToWish.options.activeHeaderBubble){
      $emgAddToWish.showHeaderBubble(data);
    }
    if($emgAddToWish.options.activeHeaderBubble){
      $emgAddToWish.showElementBubble(data);
    }
    if($emgAddToWish.options.pageType == 'product' || $emgAddToWish.options.pageType == 'family' || $emgAddToWish.options.pageType == 'modal'){
      $emgAddToWish.productPageButtonChange();
    }
    else if($emgAddToWish.options.pageType == 'listing'){
      $emgAddToWish.listingPageButtonChange();
    }
  })

}
(function($) {

  var emgAddToWishlist = function (element, options) {
    this.init(element, options);
  };

  emgAddToWishlist.prototype = {

    constructor: emgAddToWishlist,

    init: function (element, options) {
      this.options = options;
      if(this.options.delegate_selector == 'undefined'){
        console.warn('emgAddtoWIshlist.init() - Delegate selector invalid.');
        return false;
      }
      if(this.options.pageType != 'product' && this.options.pageType != 'family' && this.options.pageType != 'listing' && this.options.pageType != 'modal'){
        console.warn('emgAddtoWIshlist.init() - Page type invalid or undefined.');
        return false;
      }
      this.$element = $(element);
      this.authenticated = this.$element.data('loggedin');
      this.saved = this.$element.data('saved');
      this.pageType = this.options.pageType;
      this.productId = this.$element.data('product');
      this.bubbleMessage = this.options.bubbleMessage;
      this.bubbleMessageSeeNow = this.options.bubbleMessageSeeNow;
      this.scrollTo = this.options.scrollTo;
      this.activeHeaderBubble = this.options.activeHeaderBubble;
      if(this.authenticated == 1){this.scrollTo = false;}
      if(this.options.activeElementBubble){
        if(this.activeHeaderBubble){
          this.activeElementBubble = false;
        }
        else{
          this.activeElementBubble = true;
        }
      }
      this.family = this.$element.data('family');
      if(this.saved){return false;}
      this.bindActions();
    },
    bindActions: function(){
      var that = this;
      $(document).delegate(this.options.delegate_selector,'click',function() {
          that.addToWishlist(that.scrollTo,that.productId,that.family,function(data){
            if(data != false && that.activeHeaderBubble){
              that.showHeaderBubble(data);
            }
            if(that.activeElementBubble){
              that.showElementBubble(data);
            }
            if(that.pageType == 'product' || that.pageType == 'family' || that.pageType == 'modal'){
              that.productPageButtonChange();
              that.listingProductUpdate(that.productId);
            }
            else if(that.pageType == 'listing'){
              that.listingPageButtonChange();
            }
          });
      });
    },
    listingProductUpdate: function(prodId){
      var $listingElement = $('#emg-product-listing-wishlist-' + prodId);
      $listingElement.parent().css('margin-top','-62px');
      $listingElement.find('.emg-product-hover-fav').addClass('emg-product-hover-fav-added');
      $listingElement.find('.emg-product-hover-text-saved').text($listingElement.find('.emg-product-hover-text-saved').data('saved'));
      setTimeou},1000);
    },
    productPageButtonChange: function(){
      this.$element.find('.icon-i50-fav').addClass('icon-bold-i50-fav').addClass('emg-red').removeClass('icon-i50-fav');
      this.$element.find('.emg-btn-data-saved').text(this.$element.find('.emg-btn-data-saved').data('saved'));
      this.$element.find('.emg-btn-data-saved').addClass('emg-gray');
    },
    showElementBubble: function(data){
      var that = this;
      $('body').append('<div class="emg-bubble-tip-content" id="'+ this.$element.attr('id') + '-emgBubble"><div style="padding:10px;font-size:12px;text-align:center;">'+this.bubbleMessage+ ' <a href="'+data.url+'">'+data.title+'</a>' +'</div></div>');
      var offset = -5;
      if(this.pageType == 'modal') offset = 0;
      this.$element.emgBubbleTip({width: 140, offset: offset});
      setTimeout(function(){
        that.$element.mouseenter();
      },300);
      setTimeout(function(){
        that.$element.mouseleave();
        that.$element.unbind('mouseenter');
        that.$element.parent().removeAttr('style');
      },5000);
    },
    listingPageButtonChange: function(){
      this.$element.parent().css('margin-top','-62px');
      this.$element.find('.emg-product-hover-fav').addClass('emg-product-hover-fav-added');
      this.$element.find('.emg-product-hover-text-saved').text(this.$element.find('.emg-product-hover-text-saved').data('saved'));
    },
    showHeaderBubble: function(data){
      $('body').append('<div class="emg-bubble-tip-content" id="emg-favorites-top-emgBubble"><div style="display:inline-block;vertical-align:middle;width: 35px;padding-left: 5px;"><span style="font-size: 30px;" class="icon-bold-i50-fav emg-red"></span></div><div style="margin-left:7px;vertical-align:middle;display:inline-block;width:190px;padding:10px 0px;font-size:12px;text-align:left;">' + this.bubbleMessage + ' <a href="'+data.url+'">' + data.title + '</a></div></div>');
      $('#emg-favorites-top').emgBubbleTip({width: 240, offset: 3,align: 'center'});
      setTimeout(function(){$('#emg-favorites-top').mouseenter();$('#emg-favorites-top').mouseleave(function(){$(this).unbind('mouseenter');});},300);
      setTimeout(function(){$('#emg-favorites-top').mouseleave();$('#emg-favorites-top').unbind('mouseenter');},10000);
    },
    addToWishlist: function(scrollTo, prodId, family, callback){
      $.ajax({
        'url': '/site_wishlist_fashion/' + prodId + '/' + family + '/',
        'success': function(data) {
          if(typeof data.login != 'undefined'){
            window.location.href = data.login;
          }else {
            if (scrollTo != 'false' && scrollTo != false) {
              scrollToElement('#emg-prod-listing-' + prodId, 0, -200);
            }
            if (callback) {
              callback(data);
            }
          }
        }
      });
    }
  };
  $.fn.emgAddToWishlist = function (option, args) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('emgModal'),
          options = $.extend({}, $.fn.emgAddToWishlist.defaults, $this.data(), typeof option == 'object' && option);

      if (typeof data == 'undefined' || data.destroyed !== false) {
        $this.data('emgAddToWishlist', (data = new emgAddToWishlist(this, options)));
      }
      if (typeof option == 'string') {
        data[option].apply(data, [].concat(args));
      }
      else if (options.show) data.show()
    })
  };

  $.fn.emgAddToWishlist.Constructor = emgAddToWishlist;

  $.fn.emgAddToWishlist.defaults = {
    //Url where user will be redirected after login
    url: window.location.href,
    //Scroll to element after redirect
    scrollTo: false,
    //Selector for delegate click action
    delegate_selector: 'undefined',
    //Show bubble notification on header user area
    activeHeaderBubble: false,
    //Page type for diferent actions after add product
    pageType: false,
    //Show bubble on element delegated for click action
    activeElementBubble: true,
    //Succces message showed in bubble
    bubbleMessage: '',
    bubbleMessageSeeNow: ''
  };
})(jQuery);

/**
 *
 * @param url
 */
function set_price_filter(url){
    var min = Number($('#price_min').val());
    var max = Number($('#price_max').val());

    if ((min == 0 && max == 0) || (min > max && max != 0) || min < 0 || max <= 0 ) {
        return false;
    }

    var url_parts = url.split("/");

    for (var i = 0; i < url_parts.length; i ++) {
        if (url_parts[i].indexOf("pret,") >= 0) {
            url_parts[i] = 'pret,intre-' + min + '-si-' + max;
        } else if ((url_parts[i].indexOf("price,") >= 0)) {
            url_parts[i] = 'price,between-' + min + '-and-' + max;
        }
    }

    url = url_parts.join('/');

    window.location = '/'+url;
}

function getConfig(currency){
  var prodList = checkProducts();
  if(prodList) {
    $size = $(this);
    $.ajax({
      'url': '/bundle_popup_filter/',
      'data': {products: prodList},
      'type': 'POST',
      'success': function (data) {
        if (data) {
          $('.emg-modal #promo_conf_bundle_popup').val(data.package_config);
          $('.emg-modal #gift_conf_bundle_popup').val(data.gift_config);
          $('.emg-modal #promo_conf_bundle_popup').closest('form').removeAttr('onSubmit');
          var pret = data.price.toFixed(2);
          var price = pret.toString();
          price = price.split('.');
          var price1 = price[0];
          var price2 = price[1];
          $('.emg-modal #emg-bundle-final-price').show();
          $('.emg-modal #emg-bundle-final-price .emg-price').html('<span class="money-int">'+price1+'</span><sup class="money-decimal">'+price2+'</sup> <span class="money-currency">'+currency+'</span>');
          $('.emg-modal #emg-btn-not-allowed-bundle').find('.emg-button').removeClass('emg-btn-not-allowed');
          $('.emg-modal #emg-btn-not-allowed-bundle').unbind('click');

          if(!$('.emg-modal .emg-button.emg-big-button').hasClass('emg-btn-not-allowed') && $('.emg-modal .emg-button.emg-big-button').data('emgAddToCartBtn')) {
            $('.emg-modal .emg-button.emg-big-button').not('.emg-btn-not-allowed').emgAddToCartBtn();
          }
        }
      }
    });
  }
}

function checkProducts(){
  var prodList = [];
  var i = 0;
  $('.emg-modal .emg-display-type-3').each(function(){
    if(!$(this).val()){
      prodList = false;
      return;
    }
    else{
      prodList[i] = $(this).val();
      i++;
    }
  });
  return prodList;
}

(function ($) {
  var ajax_fired = false;
  var old_category_slug = '';

  function trendingSearchesEvent(event)
  {
    if (!EM.siteModules.trending_searches){ return; }
    if (event == 'show') {
      var links_container = '#trending-search-container .trending-links .links';
      var category_slug = '0';

      if( $('#emg-input-autosuggest').attr('data-c') !== 0 ) {
        category_slug = $('#emg-input-autosuggest').attr('data-c');
      }

      if( category_slug != old_category_slug ) {
        ajax_fired = false;
        $(links_container).empty();
      }

      if ($(links_container).is(':empty') && !ajax_fired && $('#emg-input-autosuggest').val() === '') {
          $.ajax({
              url: '/search-tools/trending',
              type: 'GET',
              dataType: 'json',
              data: {category: category_slug},
              success: function(response) {
                if (response.status !== undefined && response.status == 'ok' && response.data !== undefined) {
                  if (response.department.toLowerCase() === 'emag') {
                    var trending_text = $('#trending-search-container').children().eq(0);
                    trending_text.html(trending_text.html().replace(/(\s)in(\s<)/, '$1pe$2'));
                    trending_text = null;
                  }

                  $('#trending-search-container').find('.department-name').text(response.department);
                  for (var i = 0; i < response.data.length; i++) {
                    var url = '/search/' + encodeURIComponent(response.data[i].fraze) + '?ref=trending';
                    if (response.department=='Supermarket') { url = '/supermarket' + url; }
                    var title = (response.data[i].label != '') ? response.data[i].label : response.data[i].fraze;

                    $('<a>').addClass('gtm-trending-link').attr('href', url).text(title).appendTo(links_container);
                  }
                  $('#trending-search-container').show();
                  emgFluidOverlayShow('open', '#emg-search-box');
                }
              }
          });

          old_category_slug = category_slug; // define first ajax category slug
          ajax_fired = true;
      } else {
        if ($('#emg-input-autosuggest').val() === '') {
            $('#trending-search-container').show();
        }
        emgFluidOverlayShow('open', '#emg-search-box');
      }
    } else if (event == 'hide') {
      $('#trending-search-container').hide();
      // remove overlay
      if (!$("#suggestLayer").is(':visible') &&
          !$("#trending-search-container").is(':visible')) {
          if ($('#emg-input-autosuggest').val() === '') {
            $('#emg-input-autosuggest').blur();
            if($('#emg-fluid-overlay').data('statuson')) {
              emgFluidOverlayShow('close');
            }
          }
      }
    } else {
      console.error('event "' + event + '" is not defined');
    }
  }

  // jquery compatibility mode
  function bindEvent(event, element, callback) {
    var domObj = $('#emg-search-box');

    if ($.fn.on !==  undefined) {
      domObj.on(event, element, callback);
    } else {
      domObj.live(event, element, callback);
    }
  }

  $(document).ready(function() {
    try {
      Emag.DatalayerManager.trackBanners($('.emg-widget'),'widget');
    } catch(e) {
        if (Emag && Emag.DatalayerManager){
            Emag.DatalayerManager.showErrors(e);
        }
    }

    // on page load focus search header input and add border & shadow if value is empty
    focusSearchFieldHeader();

    // fix for sticky filters, recalculate on each window resize
    $111(window).on('resize'});

    // fix for custom filters loop
    $('#emg-pagination-sort-by-items').find('.emg-custom-select-list li a').click(function(e){
      searchSort($(this));
      e.stopPropagation();
      e.preventDefault();
    });

    if( $('#trending-search-container').length ) {
      bindEvent('click', '#emg-input-autosuggest', function() {
        trendingSearchesEvent('show');
      });
      bindEvent('keyup', '#trending-search-container', function() {
        trendingSearchesEvent('hide');
      });
      bindEvent('keyup', '#emg-input-autosuggest', function() {
        if ($.trim( $(this).val() ) != '') {
          trendingSearchesEvent('hide');
        }
      });
    }
  });
})
  (jQuery);

/**
 * Displays the data parameter in a modal window
 * Used for the addToCart modal shown in products, categories and search
 *
 * The options parameter should hold:
 * {
 *      'width': '[width]px'
 *  }
 *
 *
 * @param {string} data - the HTML to be displayed
 * @param {object} options - see above
 * @returns nothing
 */
function showDataInPopup(data, options) {
    var options = options || {
        'width': '930px'
    };
    $.blockUI({
        'message': data,
        'onUnblock'},
        'onBlock': function()
        {
            $('body').css({
                'overflow': 'hidden'
            });
            $('.blockUI.blockMsg.blockPage').css({
                '-webkit-box-shadow': '0px 1px 11px 4px rgb(48, 48, 48)',
                '-moz-box-shadow': '0px 1px 11px 4px rgb(48, 48, 48)',
                'box-shadow': '0px 1px 11px 4px rgb(48, 48, 48)'
            });
            $('.blockOverlay').clic});
        },
        'css': {
            'cursor': 'arrow',
            'textAlign': 'left',
            'border': '2px solid #FAFAFA',
            'backgroundColor': '#FAFAFA',
            'zIndex':9998,
            'top': '50%',
            'left': '50%',
            'transform' : 'translate(-50%, -50%)',
            'width': options.width,
            'borderRadius':'7px'
        },
        'overlayCSS':  {
            'cursor': 'auto',
            'backgroundColor':'#000',
            'opacity': 0.7,
            'zIndex':9998
        }
    });
}

var Base64 = {

    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    encode},


    decode},

    _utf8_encode},

    _utf8_decode}

};

function showAccessoriesModal(item) {
    var product = item.attr('p');

    if (product === undefined) {
        return;
    }

    var refs = { 'ref' : 'seeallproducts_widget' };
    var url = '/ajax-product-categories-accessories/'+product;
    if(item.parents('.blockUI.blockMsg.blockPage').length > 0){
      refs.ref = 'seeallproducts_modal';
    }
    url = appendQueryString(url,refs);

    showDataInPopup("<div class='emgwidget-product-loader'></div>",'864px');
    $('.blockUI.blockMsg.blockPage').addClass('blank-modal');

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'text',
        success: function(data) {
            $('.blockUI.blockMsg.blockPage').html(data);
            $('.blockUI.blockMsg.blockPage').removeClass('blank-modal').css('width','864px');
        },
        error : function() {
            $.unblockUI();
        }
    });
}

// add to cart button
(function($) {
  $.fn.emgAddToCartBtn = function(options, args) {
    var defaultOnClickAction = function(e) {
      var inst = $(this).data("emgAddToCartBtn");
      var area = '';
      if (inst.inProgress)
        return;

      inst.inProgress = true;

      if ($(this).attr('resealed-id')) {
        $($(this).attr('resealed-id') + ' button').trigger('click');
        return;
      }

      var form = $(this).closest('form');

      // hide existing modal instance
      if ($('.emg-modal').length) {
        $('.emg-modal').emgModal('hide');
      }

      url = form.attr('action').replace('/addtocart', '/newaddtocart');
      var call = form.find('[name="answer"]');
      var callType = 'text';
      if (call.length || is_supermarket) {
          area = $(this).parents('.emgwidget-product');
          area.addClass('emgwidget-product-loader');
          callType = 'json';
      }

      if(form.length > 0 && (form.hasClass('spi-buy') || (typeof form.attr('id') !== 'undefined' && (form.attr('id') === 'addToCartForm' || form.attr('id').lastIndexOf('form_',0) === 0 )))){
        var getData = {
          'extra_warranty' : $('input[type="checkbox"][rel="extra_warranty"]:checked').length,
          'has_warranties' :  $('input[type="checkbox"][rel="extra_warranty"]').length > 0 ? 1 : 0,
          'has_accessories' : $('#scroll_to_pac').length > 0 && $('#scroll_to_pac').is(":visible") ? 1 : 0
        };
        url = appendQueryString(url, getData);
      }
      if (callType === 'text') {
        showDataInPopup("<div class='emgwidget-product-loader'></div>",'930px');
        $('.blockUI.blockMsg.blockPage').addClass('blank-modal');
      } else {
        $('.-cart-modal').addClass('cart-loader');
      }
      $.ajax({
        url: url,
        type: 'POST',
        dataType: callType,
        data: form.serialize(),
        success: function(data) {
            cart_loaded = false;
          var isJson = false;
          if (callType === 'text') {
            try {
              data = $.parseJSON(data);
              isJson = true;
            } catch (e) {
              isJson = false;
            }
            if (isJson) {
              $.unblockUI();
              $('.emg-cart-bubble').html(data.products_count);
              $('.emg-cart-bubble').css('display', 'inline');
              showProductAddedHeaderTooltip(null, data, 0);
              $('.blockUI.blockMsg.blockPage').removeClass('blank-modal').css('width', '930px');
            } else {
              $('.blockUI.blockMsg.blockPage').html(data);
              $('.blockUI.blockMsg.blockPage').removeClass('blank-modal').css('width', '930px');
            }
            try {
              Emag.DatalayerManager.pushData(Emag.DatalayerManager.processStringHtmlJson(data));
            } catch (e) {
            }
          } else if(is_supermarket) {
              $('.emg-cart-bubble').html(data.products_count);
              showProductAddedHeaderTooltip(null,data,0);
              area.removeClass('emgwidget-product-loader');
            } else {
                $('.emg-cart-bubble').html(data.products_count);
                area.removeClass('emgwidget-product-loader');
                if (data.error) {
                    area.addClass('emgwidget-product-error');
                    area.find('.emgwidget-product-error-text').html(data.title);
                } else {
                    area.addClass('emgwidget-product-added');
                    setTimeout(function(){
                        area.removeClass('emgwidget-product-added');
                        area.find('form button').hide();
                        area.find('form .emgwidget-added-text').show();
                    }, 2000);
                }
                try {
                  $(document).trigger("product-added", [data]);
                }catch(e){}
            }
            if(callType != 'text'){
              dataJsonPopup = Base64.encode(JSON.stringify(data));
              try{
                Emag.DatalayerManager.pushData(data.datalayer);
              }catch(e){}
            }
        },
        'error' : function() {
            $.unblockUI();
        },
        complete: function(data) {
          inst.inProgress = false;
		  $('.-cart-modal').removeClass('cart-loader');
        }
      });
    };

    var defaults = {
      url: null,
      type: 'ajax',
      onClick: defaultOnClickAction,
      onAjaxSuccess: function() {},
      onAjaxError: function() {}
    };

    var onClickHandler = function(e) {
      e.preventDefault();
      e.data.options.onClick.call(this, e, e.data.options);
    };

    var AddToCartBtn = function(element, options) {
      this.$element = $(element);
      this.options = options;
      this.$element.data('emgAddToCartBtn', this);
      this.bindEvents();
      this.inProgress = false;

      return this;
    };

    AddToCartBtn.prototype = {
      bindEvents: function() {
        this.$element.bind('click.emgAddtoCart', {
          options: this.options
        }, onClickHandler);
      },
      remove},
      trigger}
    };

    return this.each(function() {
      if (options == undefined) options = defaults;

      // check for existing button instance
      var inst = $(this).data("emgAddToCartBtn");
      if (inst) {
        if (typeof options == "string") {
          try {
            inst[options](args);
          } catch (err) {
            throw "Invalid type of options provided";
          }
        } else
          throw "An instance of the plugin already exists";

        return;
      }

      if (typeof options == "string") {
        inst = new AddToCartBtn($(this), defaults);
        try {
          inst[options](args);
        } catch (err) {
          throw "Invalid type of options provided";
        }
      } else if (typeof options == 'object') {
        options = $.extend({}, defaults, options);
        inst = new AddToCartBtn($(this), options);
      } else
        throw "Invalid type of options provided";
    });
  }
}(jQuery));

(function ($) {
    $.postLogin = function () {
        if (typeof $.cookie('postlogin') != 'undefined' && $.cookie('postlogin')) {
            $.ajax({
                url: '/user/post-login-action-ajax',
                dataType: 'json',
                success: function (response) {
                    if (!response.error) {
                        try {
                            window[response.func](response.request);
                            $.cookie("postlogin", null, { path: '/',expires : -1, domain: response.domain });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            });
        }
    }
})(jQuery);

function setAddtoCartButtons() {

    var selectors = '.aleg-pachet, .ecredit-page .add-to-cart, .emgwidget-btn-add';
    if(typeof add_directly_to_cart_only_www == "undefined" || !add_directly_to_cart_only_www){
      selectors += ",.emg-button ";
    }
    var ignoredClasses = [
      '.emg-product-hover-quickview',
      '.emg-promo-details-btn',
      '.emg-btn-not-allowed',
      '.emg-btn-follow-link'
    ];

    // $(selectors).not(ignoredClasses.join(',')).emgAddToCartBtn();

    $(document).delegate(selectors, 'click', function(e) {
      if ($(this).attr('class').match(ignoredClasses.join('|').replace(/\./g, '')) || $(this).data('emgAddToCartBtn'))
        return;

      // only continue if the current element has the p attribute defined
      if (!$(this).is('[p]'))
        return;

      e.preventDefault();
      $(this).emgAddToCartBtn('trigger');
    });
}

$(function() {
  setAddtoCartButtons();
});

/**
 * Append a query string to an url
 * @param url
 * @param queryVars
 * @returns {string}
 */
function appendQueryString(url, queryVars) {
  var firstSeperator = (url.indexOf('?')==-1 ? '?' : '&');
  var queryStringParts = new Array();
  for(var key in queryVars) {
    queryStringParts.push(key + '=' + queryVars[key]);
  }
  var queryString = queryStringParts.join('&');
  return url + firstSeperator + queryString;
}
/**
 * Add product to history list widget
 *
 * @param  {int} prodId
 * @param  {array} prodFamilyIds
 *
 */
function productAddToHistoryList(prodId, prodFamilyIds) {
  prodFamilyIds = prodFamilyIds || [];

  // init history list, if it's empty
  var productHistoryCookie = jQuery.parseJSON($.cookie('product_history'));
  if (typeof productHistoryCookie === 'undefined' || !productHistoryCookie) {
    var productHistoryCookie = [];
  }

  for (var i = 0; i < productHistoryCookie.length; i++) {
    // current product or product family already in the list, remove it
    if ($.inArray(productHistoryCookie[i], prodFamilyIds) !== -1 || productHistoryCookie[i] == prodId) {
      productHistoryCookie.splice(i, 1);
      continue;
    }
  }

  // add current product to the top of the list
  if (productHistoryCookie.length >= 11) {
    productHistoryCookie.pop();
  }
  productHistoryCookie.unshift(prodId);

  // order ids for cache purpose
  var productHistoryCache = JSON.parse(JSON.stringify(productHistoryCookie));
  productHistoryCache.sor});

  // set cookies
  $.cookie("product_history", JSON.stringify(productHistoryCookie), {
    path: '/',
    expires: 365
  });

  $.cookie("product_history_cache", JSON.stringify(productHistoryCache), {
    path: '/',
    expires: 365
  });
}

(function($) {

    var emgBestDeals };

    emgBestDeals.prototype = {

        constructor: emgBestDeals,

        init: function (element, options) {
            this.options = options;
            this.$element = $(element);
            this.$figure = this.$element.find('.best-deals-carousel').find('figure');
            this.$items = this.$figure.length;
            this.$container = this.$element.find('.best-deals-carousel');
            this.$miniCarouselContainer = this.$element.find('.emg-best-deals-minicarousel');
            this.$miniCarouselParent = this.$element.find('.emg-best-deals-minicarousel-container');
            this.$miniCarouselFigure = this.$miniCarouselContainer.find('figure');
            this.$itemWidth = this.$figure.outerWidth() + parseInt(this.$figure.css('margin-left')) + parseInt(this.$figure.css('margin-right'));
            this.$miniItemWidth = this.$miniCarouselFigure.outerWidth();
            this.setNav();
        },
        setNav: function(){
            var items = this.$figure.length;
            if(items > 0){
                this.$element.append('<span class="emg-arrow-left"><span class="icon-i28-round-left"></span></span>');
                this.$element.append('<span class="emg-arrow-right"><span class="icon-i29-round-right"></span></span>');

                var activeItem = 1;
                this.$container.html('<figure>' + this.$container.find('figure:eq(' + ( this.$items + activeItem - 2 ) + ')').html() + '</figure>' + this.$container.html());
                this.$miniCarouselContainer.html('<figure data-item="'+this.$miniCarouselContainer.find('figure:eq(' + ( this.$items + activeItem - 2 ) + ')').data('item')+'">' + this.$miniCarouselContainer.find('figure:eq(' + ( this.$items + activeItem - 2 ) + ')').html() + '</figure>' + this.$miniCarouselContainer.html());

                this.$container.css('margin-left', -this.$itemWidth + 'px');
                this.$miniCarouselContainer.css('margin-left', -this.$miniItemWidth + 'px');

                this.$container = this.$element.find('.best-deals-carousel');
                this.$miniCarouselContainer = this.$element.find('.emg-best-deals-minicarousel');
                this.$figure = this.$container.find('figure');
                this.$miniCarouselFigure = this.$miniCarouselContainer.find('figure');

                this.$left = this.$element.find('.emg-arrow-left');
                this.$right = this.$element.find('.emg-arrow-right');
                this.attachNavEvents();
            }
        },
        attachNavEvents: function() {
            var that = this;
            this.$left.click(function() {
                that.scrollLeft();
            });
            this.$right.click(function() {
                that.scrollRight();
            });
            this.$miniCarouselFigure.click(function() {
                if($(this).hasClass('minicarousel-active')){
                    return false;
                }
                that.scrollTo($(this).index());
            });
        },
        scrollLeft: function() {
            var that = this;
            if(this.$left.hasClass('emg-arrow-disabled')){
                return false;
            }
            this.$left.addClass('emg-arrow-disabled');
            this.$right.removeClass('emg-arrow-disabled');
            var itemWidth = this.$itemWidth;
            var currentMargin = parseInt(this.$container.css('margin-left'));
            this.minicarouselScrollLeft();
            this.$container.animate({marginLeft: currentMargin + itemWidth + 'px'}, 300,function(){
                that.$left.removeClass('emg-arrow-disabled');
                var itemActive = (parseInt(that.$container.css('margin-left')) - 2*itemWidth) / itemWidth * -1;
                that.circularCarouselLeft(itemActive);
            });

        },
        scrollRight: function() {
            var that = this;
            if(this.$right.hasClass('emg-arrow-disabled')){
                return false;
            }
            this.$right.addClass('emg-arrow-disabled');
            this.$left.removeClass('emg-arrow-disabled');
            var itemWidth = this.$itemWidth;
            var currentMargin = parseInt(this.$container.css('margin-left'));
            this.minicarouselScrollRight();
            this.$container.animate({marginLeft: currentMargin - itemWidth + 'px'}, 300,function(){
                that.$right.removeClass('emg-arrow-disabled');
                var itemActive = (parseInt(that.$container.css('margin-left')) - 2*itemWidth) / itemWidth * -1;
                that.circularCarouselRight(itemActive);
            });
        },
        minicarouselScrollRight: function() {
            var itemWidth = this.$itemWidth;
            var itemActive = (parseInt(this.$container.css('margin-left')) - 2*itemWidth) / itemWidth * -1;
            this.$miniCarouselContainer.find('figure').removeClass('minicarousel-active');
            var miniCarouselIndex = itemActive-1;

            this.$miniCarouselContainer.find('figure:eq('+miniCarouselIndex+')').addClass('minicarousel-active');
            this.$miniCarouselParent.removeClass(function (index, css) {
                return (css.match (/(^|\s)emg-arrow-best-deals-\S+/g) || []).join(' ');
            }).addClass('emg-arrow-best-deals-'+this.getNextArrowPosition(itemActive));
            var newMiniCarouselPosition = this.getMiniCarouselPosition(miniCarouselIndex,'right');
            this.$miniCarouselContainer.animate({marginLeft: newMiniCarouselPosition + 'px'}, 300);

            var itemNr = this.$miniCarouselContainer.find('.minicarousel-active').data('item');
            $('.best-deals-current').html(itemNr);
        },
        minicarouselScrollLeft: function() {
            var itemWidth = this.$itemWidth;
            var itemActive = parseInt(this.$container.css('margin-left')) / itemWidth * -1;
            var miniCarouselIndex = itemActive-1;

            this.$miniCarouselContainer.find('figure').removeClass('minicarousel-active');
            this.$miniCarouselContainer.find('figure:eq('+miniCarouselIndex+')').addClass('minicarousel-active');
            this.$miniCarouselParent.removeClass(function (index, css) {
                return (css.match (/(^|\s)emg-arrow-best-deals-\S+/g) || []).join(' ');
            }).addClass('emg-arrow-best-deals-'+this.getNextArrowPosition(itemActive));
            var newMiniCarouselPosition = this.getMiniCarouselPosition(miniCarouselIndex,'left');
            this.$miniCarouselContainer.animate({marginLeft: newMiniCarouselPosition + 'px'}, 300);

            var itemNr = this.$miniCarouselContainer.find('.minicarousel-active').data('item');
            $('.best-deals-current').html(itemNr);

        },
        circularCarouselRight: function(activeItem) {
            activeItem--;
            if(activeItem < this.$items) { return false; }
            if(activeItem - this.$items < 3) {
                var newItemIndex = this.$figure.length - this.$items;
                this.$container.find('.emg-clear').remove();
                this.$miniCarouselContainer.find('.emg-clear').remove();
                this.$container.append('<figure>' + this.$container.find('figure:eq(' + newItemIndex + ')').html() + '</figure>').append('<div class="emg-clear"></div>');
                this.$miniCarouselContainer.append('<figure data-item="'+this.$miniCarouselContainer.find('figure:eq(' + newItemIndex + ')').data('item')+'">' + this.$miniCarouselContainer.find('figure:eq(' + newItemIndex + ')').html() + '</figure>').append('<div class="emg-clear"></div>');
            }
            else{
                var itemWidth = this.$itemWidth;
                this.$container.css('margin-left',- 2 * itemWidth + 'px');
                var miniCarouselIndex = activeItem - this.$items - 1;
                this.$miniCarouselContainer.css('margin-left', '0px');
                this.$miniCarouselFigure.removeClass('minicarousel-active');
                this.$miniCarouselFigure.eq(2).addClass('minicarousel-active');
                this.$container.find('figure:gt('+(this.$items-1)+')').remove();
                this.$miniCarouselContainer.find('figure:gt('+(this.$items-1)+')').remove();
                var newItemIndex = this.$figure.length - this.$items;
            }

            this.resetEvents();
        },
        circularCarouselLeft: function(activeItem) {
            if(activeItem > 2) { return false; }

            if(this.$figure.length < this.$items + 3) {
                this.$container.html('<figure>' + this.$container.find('figure:eq(' + ( this.$items + activeItem - 3 ) + ')').html() + '</figure>' + this.$container.html());
                this.$miniCarouselContainer.html('<figure data-item="'+this.$miniCarouselContainer.find('figure:eq(' + ( this.$items + activeItem - 3 ) + ')').data('item')+'">' + this.$miniCarouselContainer.find('figure:eq(' + ( this.$items + activeItem - 3 ) + ')').html() + '</figure>' + this.$miniCarouselContainer.html());
                this.$container.css('margin-left', parseInt(this.$container.css('margin-left')) - this.$itemWidth + 'px');
                this.$miniCarouselContainer.css('margin-left', parseInt(this.$miniCarouselContainer.css('margin-left')) - this.$miniItemWidth + 'px');
            }
            else{
                this.$container.css('margin-left', - (this.$itemWidth * (this.$items-3) ) + 'px');
                this.$miniCarouselContainer.css('margin-left', - (this.$miniItemWidth * (this.$items-3) ) + 'px');
                this.$container.find('figure:lt(3)').remove();
                this.$miniCarouselContainer.find('figure:lt(3)').remove();
                this.$miniCarouselFigure.removeClass('minicarousel-active');
                this.$miniCarouselContainer.find('figure:eq('+(this.$items-3)+')').addClass('minicarousel-active');
            }

            this.resetEvents();
        },
        getNextArrowPosition: function(itemActive) {
            var itemWidth = this.$miniCarouselFigure.outerWidth();
            var margin = parseInt(this.$miniCarouselContainer.css('margin-left'));
            var position = margin / itemWidth + itemActive;

            return (position >= 3) ? 3 : ((position > 0) ? position : 1);
        },
        getMiniCarouselPosition: function(activeIndex,direction) {
            var itemWidth = this.$miniCarouselFigure.outerWidth();
            var margin = parseInt(this.$miniCarouselContainer.css('margin-left'));
            if(direction == 'right') {
                if((margin / itemWidth) + activeIndex >= 3){
                    margin -= itemWidth;
                }
            }
            if(direction == 'left') {
                if((margin / itemWidth ) + activeIndex < 0){
                    margin += itemWidth;
                }
            }
            return margin;
        },
        scrollTo: function(index) {
            var position  =  this.$miniCarouselContainer.find('figure:eq('+index+')').attr('data-item');
            $('.best-deals-current').html(position);
            var itemWidth = this.$itemWidth;
            this.$container.animate({marginLeft: - (itemWidth*index) + 'px'}, 300);

            this.$miniCarouselFigure.removeClass('minicarousel-active');
            this.$miniCarouselContainer.find('figure:eq('+index+')').addClass('minicarousel-active');

            var itemW = this.$miniCarouselFigure.outerWidth();
            var m = parseInt(this.$miniCarouselContainer.css('margin-left'));
            var position = m / itemW + index + 1;

            this.$miniCarouselParent.removeClas}).addClass('emg-arrow-best-deals-'+position);

            if(position < 3 && this.$right.hasClass('emg-arrow-disabled')) {
                this.$right.removeClass('emg-arrow-disabled');
            }
            if(position > 1 && this.$left.hasClass('emg-arrow-disabled')) {
                this.$left.removeClass('emg-arrow-disabled');
            }
        },
        resetEvents: function() {
            this.$container = this.$element.find('.best-deals-carousel');
            this.$miniCarouselContainer = this.$element.find('.emg-best-deals-minicarousel');
            this.$figure = this.$container.find('figure');
            this.$miniCarouselFigure = this.$miniCarouselContainer.find('figure');
            this.attachNavEvents();
        }
    };

    $.fn.emgBestDeals = function (option, args) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('emgBestDeals'),
                options = $.extend({}, $.fn.emgBestDeals.defaults, $this.data(), typeof option == 'object' && option);

            if (typeof data == 'undefined' || data.destroyed !== false) {
                $this.data('emgBestDeals', (data = new emgBestDeals(this, options)));
            }
            if (typeof option == 'string') {
                data[option].apply(data, [].concat(args));
            }
            else if (options.show) data.show()
        })
    };

    $.fn.emgBestDeals.Constructor = emgBestDeals;

    $.fn.emgBestDeals.defaults = {
        callback: function(){},
        onInit: function(){}
    };
})(jQuery);

function showProductAddedHeaderTooltip(elem, data, pid) {
    var html = "";

    switch(data.type) {
        case "product":
            html = '<span class="image-container"><img src="' + data.main.image + '" /></span>';
            html += '<p class="product-title">' + data.main.name + '</p>';
            break;
        case "bundle":
            if(data.bundle.length == 1) {
                html = '<span class="image-container"><img src="' + data.main.image + '" /></span>';
                html += '<p class="product-title">' + data.main.name + '</p>';
                html += '<div class="emg-clear"></div>';
                html += '<div class="add-pachet">+</div>';
                html += '<span class="image-container"><img src="' + data.bundle[0].image + '" /></span>';
                html += '<p class="product-title">' + data.bundle[0].name + '</p>';
            }
            break;
        case "bundle_first":
            html = '<div class="image-container-b">';
            html += '<div class="bubble-image-stanga"><img src="' + data.main.image + '" /></div>';
            html += '<div class="bubble-image-plus">+</div>';

            html += '<div class="bubble-image-dreapta"><img src="' + data.bundle_first[0].image + '" /></div>';
            html += '</div>';
            html += '<p class="product-title product-title-special"><b>' + data.bundle_first.name + ' </b>' + data.main.name + '<span class="bubble-text-plus">+</span>';
            html += data.bundle_first[0].name + '</p>';

            break;
    }

    // save tooltip element
    window.headerTooltipSupermarket = window.headerTooltipSupermarket || {};

    if (!window.headerTooltipSupermarket.el || !window.headerTooltipSupermarket.el.length) {
        window.headerTooltipSupermarket.el = $('.emg-bubble-supermarket');
    } else {
        window.headerTooltipSupermarket.el.appendTo('body');
    }

    window.headerTooltipSupermarket.el.find('.emg-bubble-content').html(html);
    window.headerTooltipSupermarket.el.find('div.gui-info-box span').html(data.title);

    var removeTooltip };

    $('#emg-user-box').emgBubbleTip({
        align: 'right',
        width: 260,
        callback: function() {
            clearTimeout(window.headerTooltipSupermarket.timeout);
            window.headerTooltipSupermarket.timeout = setTimeout(removeTooltip, 3000);

            $('#emg-user-box').one('mouseenter', removeTooltip);
            $('.emg-bubble-supermarket-inner').mouseleave(removeTooltip);
        }
    });

    $('#emg-user-box').trigger('mouseenter');
}

//Lazy load images
//To apply on an image just put class "lazy", width,height and data-src attribute
//src attribute must be empty or a small spinner
$(document).ready(function(){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
              , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
      , addEventListener = function(evt, fn){
        window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
      , _has }
      ;

  function loadImage (el, i) {
    var img = new Image()
        , src = el.getAttribute('data-src');
    img.onload = function () {
      if (!!el.parent)
        el.parent.replaceChild(img, el);
      else
        el.src = src;

      images[i] = null;
    };
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
    rect.top    >= 0
    && rect.left   >= 0
    && rect.top-100 <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  var images = []
      , query = $q('img.lazy')
      , processScroll = function(){
        for (var i = 0; i < images.length; i++) {
          if (images[i] != null && elementInViewport(images[i])) {
            loadImage(images[i], i);
          }
        }
      }
      ;
  // Array.prototype.slice.call is not callable under our lovely IE8
  for (var i = 0; i < query.length; i++) {
    images.push(query[i]);
  }
  processScroll();
  addEventListener('scroll',processScroll);

  $('#search-asp,.asp-link').hide();

    $('body').on('click', '#scroll_to_pac, .emgwidget-title a', function() {
        showAccessoriesModal($(this));
    });
});

// To be moved in gui-validation-rules-ro.js after we find a mimification solution- Isac Flavius
function validateAge(cnp) {
    var ok = true;
    var d = new Date();
    var curr_year = d.getFullYear();

    var tip = cnp.substr(0,1);
    var an = cnp.substr(1,2);
    if (tip <= 2) {
        an = 1900+parseInt(an);
    }
    else {
        an = 2000+parseInt(an);
    }
    if (curr_year - an > 69) {
        ok = false;
    }
    return ok;
}

var emgOverTimer = 0;
function emgFluidOverlayShow(action, currentElement) {
  var $overlay = $('#emg-fluid-overlay');
  if (action == 'open') {
    $('.emg-fluid-centered-header').css('will-change','initial');
    $overlay.data('statuson', true);
    window.clearTimeout(emgOverTimer);
    emgOverTimer = setTimeout(function () {
      emgOverTimer = 0;
      $(currentElement).addClass('emg-fluid-bring-front');
      $overlay.addClass('emg-fluid-anim-overlay');
    }, 0);

  } else if (action == 'close') {
    window.clearTimeout(emgOverTimer);
    emgOverTimer = 0;
    $overlay.removeClass('emg-fluid-anim-overlay');
    $overlay.data('statuson', false);
    $('.emg-fluid-header').find('.emg-fluid-bring-front').removeClass('emg-fluid-bring-front');
    $('#trending-search-container').hide();
    if (typeof closeSearchWeekCampaign == 'function') {
      closeSearchWeekCampaign();
    }
    $('.emg-fluid-centered-header').css('will-change','transform');
  }
}

function emgFluidFloatingMenuHandler () {
  try {
    var currentFromTop = $(window).scrollTop();
    var fluidHeaderItem = $('.emg-fluid-header');
    var productsMenu = $('#emg-mega-menu');

    if (currentFromTop < 0) { return; }

    fluidHeaderItem.toggleClass('emg-fluid-floating', currentFromTop >= fluidScollDistance);

    if (currentFromTop >= fluidScollDistance) {
      if(typeof fluid_a == 'undefined' || fluid_a == 0) {
        // $('#emg-mega-menu').remove;
        $('.emg-fluid-menu-hamburger-button').append(productsMenu);
        $('.emg-fluid-sub-menu').css('visibility', 'hidden');
        $('header').removeClass('emg-auto-open');
        $('.emg-fluid-header-wrapper').addClass('emg-fluid-anim-header');
        fluid_a = 1;
        fluid_b = 0;
      }
    } else {
      if(typeof fluid_b == 'undefined' || fluid_b == 0) {
        // $('#emg-mega-menu').remove;
        $('.emg-fluid-top-menu').append(productsMenu);
        $('.emg-fluid-sub-menu').css('visibility', 'visible');
        if (fluidAutoOpen) {
          $('header').addClass('emg-auto-open');
        }
        $('.emg-fluid-header-wrapper').removeClass('emg-fluid-anim-header');
        fluid_a = 0;
        fluid_b = 1;
      }
    }
  }catch(e){}
}

function clearSearchInput(e) {
  $('.typeahead.emg-input').remove();
  $('#suggestLayer').hide();
  $('#emg-input-autosuggest').val('');
}

function hideListItems($element) {
    $element.prev('.hidden-items').hide();
    $element.text($element.data('show-more-text'));
}

function showListItems($element) {
    $element.prev('.hidden-items').show();
    $element.text($element.data('show-less-text'));
}


function loadRecaptcha(callback){
    var onload = (callback && typeof window[callback] === 'function') ? 'onload=' + callback + '&render=explicit&' : '';
    $.getScript("https://www.google.com/recaptcha/api.js?"+onload+"hl=" + $("html").attr('lang'));
}
};

$(document).ready(function(){

  // keep search query in input even after redirect
  if ($.cookie("unprocessed_fraze")) {
    $('#emg-input-autosuggest').val(decodeURIComponent($.cookie("unprocessed_fraze").replace(/\+/g,  " ")));
    $.cookie("unprocessed_fraze", null, { path: '/', domain: cookie_domain });
  }

  if(!$('.emg-slider').length) {
    // Megamenu js -START-
    $('#emg-mega-menu').emgMegaMenu(
        {
          autoOpen: $('header.emg-auto-open').length ? true : false,
          activeItem: false,
          slider: false,
          fixed: $('.emg-sticky-menu-fixed').length ? true : false,
          transitionDelay: 150
        }
    );
  }
  // Megamenu js -END-

  $('#emg-fluid-overlay').click(function() {
    emgFluidOverlayShow('close');
  });

  $('.emg-fluid-x-close').on('click', clearSearchInput);

  $(window).on("scroll", function() {
    emgFluidFloatingMenuHandler ();
  });

  var footer = document.getElementById('emg-footer'),
      smsAjaxRunning = false;

  var smsWidget = $('.sms-widget');

  smsWidget.each(function (index, value) {
    var smsForm = value.querySelector('.sms-widget-inputs'),
        smsInput = value.querySelector('.phone-input'),
        smsSendBtn = value.querySelector('.send-sms-btn'),
        smsMessage = value.querySelector('.sms-success-message'),
        recaptchaContent = $('#sms_recaptch_content');
    window.recaptchaSmsWidget = false;

    window.showSmsRecaptcha = function(){
      var recaptchaContent = $('#sms_recaptch_content');
      $('.sms-widget.recaptcha').show();
      recaptchaContent.show();
      if(recaptchaSmsWidget === false) {
        recaptchaSmsWidget = grecaptcha.render(recaptchaContent[0], {
          'sitekey': recaptchaContent.data('site-key'),
          'theme': "light",
          'hl': $('html').attr('lang')
        });
      }else{
        grecaptcha.reset(recaptchaSmsWidget)
      }
    }

    if (smsInput && smsSendBtn && smsMessage && smsForm && window.send_sms_token) {
      var $smsForm = $(smsForm);

      $smsForm.on('submit', function (e) {
        e.preventDefault();
        $smsForm.find('.gui-input-explain').remove();
        if (!$smsForm.guiValidate() || smsAjaxRunning) {
          return false;
        }
        smsAjaxRunning = true;
        var postData = {
          phone: smsInput.value,
          action_token: send_sms_token.attr('value'),
        };
        if(recaptchaSmsWidget !== false){
          postData.captcha_response = grecaptcha.getResponse(recaptchaSmsWidget);
        }
        if (recaptchaContent){
          postData.sentFrom = recaptchaContent.data("sent-from")
        }
        $.ajax({
          url: '/send-sms',
          data: postData,
          type: 'POST',
          cache: false,
          dataType: 'json',
          success: function (data) {
            if(data.error){
              $smsForm.addClass('-error');
              $smsForm.find('.gui-input-validation').addClass('invalid');
              if($smsForm.find('.gui-input-explain').length == 0){
                $('<span>',{'class' : 'gui-input-explain'}).insertAfter($smsForm.find('.gui-input-validation'));
              }
              if(data.captcha){
                if(typeof grecaptcha != "undefined"){
                  showSmsRecaptcha();
                }else{
                  loadRecaptcha("showSmsRecaptcha");
                }
              }
              $smsForm.find('.gui-input-explain').text(data.message);
            }else {
              $(smsInput).hide();
              $(smsSendBtn).hide();
              $('.sms-widget.recaptcha').hide();
              $('.sms-success-message').addClass(data.cssClass);
              $('.sms-success-message .gui-info-header').text(data.message);
              $(smsMessage).show();
              recaptchaContent.hide();
            }
            smsAjaxRunning = false;
          },
          error}
        });
        return false;
      });
    }
  });

    $('.toggle-hidden-items').on("click",function(event) {
        event.preventDefault();
        if ($(this).prev('.hidden-items').is(':visible')) {
            hideListItems($(this));
        }
        else {
            showListItems($(this));
        }
    });
  try{
    fetchNotifications();
  }catch(e){};
});

$(window).load(function(){
    $.postLogin();
})
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    //document.cookie = name+"="+value+"; path=/";
    document.cookie = name + "=" + value + expires + "; path=/";
}
}
}

$.fn.inViewport = function(callback) {
    if (callback === undefined) {
        callback = {};
    }

    var win = $(window);
    var in_view = false;

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    $(this).each(function(){
        var bounds = $(this).offset();
        bounds.right = bounds.left + $(this).outerWidth();
        bounds.bottom = bounds.top + $(this).outerHeight();

        in_view = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

        if (in_view) {
            if ($.isFunction(callback)) {
                callback.apply(this);
            }
        }
    });

    return $(this);
};
if($.type(Emag) === "undefined") {
    var Emag = {};
}

if($.type(Emag.Search) === "undefined") {
    Emag.Search = {};
}

var typeahead_flag = false;
var assets_version = '0';

(function(){
    var scripts = document.getElementsByTagName("script");
    var src = scripts[scripts.length-1].src;

    if (src.indexOf('?v=') !== -1) {
        var v = src.match(/\?v=([\w\.]*)&?/);
        if (v) {
            assets_version = v[1];
        }
    }
})();

Emag.Search = {
    _config: {
        search_url_prefix: ''
    },
    init: function() {
        var self = this;

        if ($.type(search_url_prefix) != 'undefined') {
            this._config.search_url_prefix = search_url_prefix;
        }

        $(function($) {
            $('#emg-category-menu-icon').bind('click'});

            $('#search-global').bind('submit', function (event) {

                if (typeahead_flag) {
                    return false;
                }
                if ($('#emg-input-autosuggest').val() == $('#emg-input-autosuggest').attr('placeholder')){
                    $('#emg-input-autosuggest').val('');
                }

                var search_val = $('#emg-input-autosuggest').val().trim();

                if (search_val.length <= 1) {
                    return false;
                }

                self.search();
            });
        });
    },
    search: function() {
        var searchKeyword = this._stripCharacters($('#emg-input-autosuggest').val());

        if(searchKeyword.length == 0) {
            searchKeyword = 'listall';
        } else if (searchKeyword.length == 1) {
            return false;
        }

        var searchCategory = $('#emg-input-autosuggest').attr('data-c');

        if(searchCategory == 'supermarket') {
            this._config.search_url_prefix = '/supermarket';
        } else if (searchCategory == 'info') {
            this._config.search_url_prefix = '/info';
        } else {
            this._config.search_url_prefix = '';
        }

        var searchSplit = searchKeyword.split(" ");

        searchSplit.forEach(function(value, index) {

        if($.trim(value).match(/p[0-9]+/)) {
            searchSplit[index] = value.toUpperCase();
        }
        });

        localStorage.setItem('PHSearchBoxSearchedFor', searchKeyword);
        searchKeyword = searchSplit.join(" ");

        window.location = this._config.search_url_prefix + '/search/' + encodeURIComponent(searchKeyword) + '?ref=effective_search';
    },
    _stripCharacters: function(query) {
        query = query.replace(/%/g, ' ');
        query = query.replace(/\//g, ' ');
        query = query.replace(/\\/g, ' ');
        query = $.trim(query);

        return query;
    }
};

if($.type(Emag.Search.Suggest) === "undefined") {
    Emag.Search.Suggest = {};
}

if($.type(Emag.Search.Suggest.Config) === "undefined") {
    Emag.Search.Suggest.Config = {};
}

Emag.Search.Suggest.Exceptions = {
    NoConfigException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"The instance config is missing.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"The instance config is missing.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    },
    InvalidEngineException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"The instance engine is invalid.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"The instance engine is invalid.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    },
    NoPreloadSectionException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"The preload section was not specified.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"The preload section was not specified.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    },
    NoEngineException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"The instance engine was not specified.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"The instance engine was not specified.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    },
    InvalidLocaleException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"The instance locale is invalid.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"The instance locale is invalid.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    },
    NoLocaleException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"The instance locale was not specified.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"The instance locale was not specified.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    },
    AjaxException: function(message){
        this.name			= "Script Error";
        this.level			= "Show Stopper";
        this.message		= ($.type(message) != 'undefined')?message:"An error occured while loading file.";
        this.htmlMessage	= ($.type(message) != 'undefined')?message:"An error occured while loading file.";
        this.toString		= function(){
            return this.name + ": " + this.message;
        };

        return this;
    }
};

Emag.Search.Suggest.Box = {
    _instance: null,
    _cookies: {},
    _engine: 'solr',
    _defaultEngine: 'solr',
    _allowedEngines: [ 'solr' ],
    instanceName: 'Emag.Search.Suggest.Box._instance',
    visitorId: null,
    sessionId: null,
    _locale: null,
    _defaultLocale: 'ro',
    _allowedLocales: [ 'ro', 'en', 'bg', 'hu' ],
    _translations: window.translation_config || {},
    _config: {
        parameters: {
            formName		 : "search-global",
            queryParamName   : "emg-input-autosuggest",
            divLayerName	 : "suggestLayer",
            divLoaderName    : "suggestLoader"
        }
    },
    debug: false,
    _abOption: null,
    setABOption},
    getABOption: function() {
        return this._abOption;
    },
    getLocale: function() {
        return this._locale;
    },
    setLocale: function(locale) {
        this._locale = locale.toLowerCase();
    },
    getEngine: function() {
        return this._engine;
    },
    setEngine},
    _processCookies: function() {
        var cookieKey 		= 'Emag.Search.Suggest.Box._cookies';

        try {
            this._cookies	= ($.parseJSON($.cookie(cookieKey)) != null)?$.parseJSON($.cookie(cookieKey)):{};
        } catch(e) {
        }

        if($.type(this._cookies.debug) != 'undefined') {
            this.debug		= (this._cookies.debug == 'true');
        }

        if($.type(this._cookies.locale) != 'undefined') {
            this._locale	= this._cookies.locale.toLowerCase();
        }

        if($.type(this._cookies.engine) != 'undefined') {
            this._engine	= this._cookies.engine.toLowerCase();
        }

        if(this.debug === true) {
            console.debug('_processCookies');
        }
    },
    setup: function(options) {
        var self = this;

        var options			= options || {};
        options.locale		= options.locale || this._defaultLocale;
        options.engine		= options.engine || this._defaultEngine;

        try {
            if(options.locale != null) {
                if( $.inArray(this._allowedLocales, options.locale) ) {
                    this._locale = options.locale.toLowerCase();
                } else {
                    throw Emag.Search.Suggest.Exceptions.InvalidLocaleException();
                }
            } else {
                throw Emag.Search.Suggest.Exceptions.NoLocaleException();
            }
        } catch(e) {
            console.error(e.message);
        }

        try {
            if(options.engine != null) {
                if( $.inArray(this._allowedEngines, options.engine) ) {
                    this._engine = options.engine.toLowerCase();
                } else {
                    throw Emag.Search.Suggest.Exceptions.InvalidEngineException();
                }
            } else {
                throw Emag.Search.Suggest.Exceptions.NoEngineException();
            }
        } catch(e) {
            console.error(e.message);
        }

        this._processCookies();

        self._loadWorkflow();
    },
    _loadWorkflow: function() {
        var self = this;

        if(this.debug === true) {
            console.debug('_loadWorkflow');
        }

        switch(this._engine) {
            case 'solr':
                $.extend(true, Emag.Search.Suggest.Config, self._config);

                $.when(self._loadEngine()).done(function(instance) {
                    self._instance = instance;

                    $.when(self._ping()).done(function() {
                        $.when(self._init())
                            .always(function(){
                                self._exit();
                            });
                    });
                });
                break;
        }
    },
    _loadEngine: function() {
        var self = this;

        if(this.debug === true) {
            console.debug('_loadEngine');
        }

        var deferred = $.Deferred();

        try {
            switch(this._engine) {
                case 'solr':
                    $.ajax({
                        url: '/js/emag/search/suggest/engines/solr.js?v='+assets_version,
                        type: 'GET',
                        dataType: 'script',
                        cache: true
                    })
                        .don}).fail(function(jqxhr, settings, exception) {
                            deferred.reject();

                            throw Emag.Search.Suggest.Exceptions.AjaxException(exception);
                        });
                    break;
                default:
                    throw Emag.Search.Suggest.Exceptions.InvalidEngineException();
                    break;
            }
        } catch(e) {
            console.error(e.message);
        }

        return deferred.promise();

    },
    _init: function() {
        if(this.debug === true) {
            console.debug('_init');
        }

        try {
            switch(this._engine) {
                case 'solr':
                    this._solr();
                    break;
                default:
                    throw Emag.Search.Suggest.Exceptions.InvalidEngineException();
                    break;
            }
        } catch(e) {
            console.error(e.message);
        }
    },
    _ping: function() {
        if(this.debug === true) {
            console.debug('_ping');
        }

        this._instance.config(this._config);

        return this._instance.ping();
    },
    _solr: function() {
        var self = this;

        if(this.debug === true) {
            console.debug('_solr');
        }

        $('<div id="suggestLoader" class="emg-autosuggest-loader"></div>').appendTo($('#emg-search-suggest'));
        $('<div id="suggestLayer"></div>').insertAfter($('#emg-search-suggest'));

        try {
            if ($.type(search_url_prefix) != 'undefined') {
                this._config.search_url_prefix = search_url_prefix;
            }

            this._config.debug = this.debug;

            var formName            = this._config.parameters.formName;
            var queryParamName      = this._config.parameters.queryParamName;
            var divLayername        = this._config.parameters.divLayerName;
            var divLoaderName       = this._config.parameters.divLoaderName;

            this._instance.config(this._config);

            this._instance.init(formName, queryParamName, divLayername, divLoaderName, this._translations);
        } catch(e) {
            console.log(e.message);
        }
    },
    _exit: function() {
        if(this.debug === true) {
            console.debug('_exit');

            console.debug(this);
        }
    }
};

if($.type(Emag.Search.Debug) === "undefined") {
    Emag.Search.Debug = {};
}

Emag.Search.Debug.Tool = {
    init: function() {
        $('.product-holder-grid, figure.emg-listing-products').each(function() {
            $(this).css('position', 'relative');

            if ($(this).attr('data-id')) {
                var id = $(this).attr('data-id');
                $("<div class='debug-overlay'></div>").appendTo($(this));
                var debugInfo = debugProducts[id]['debug'];
                var image = debugProducts[id]['image'];
                var name = debugProducts[id]['name'];
                var link = debugProducts[id]['link'];

                $('.debug-overlay', this).html('<div style="position: relative;"><div class="debug-product-name"><img src="'+image+'" style="width: 25px; float: left; margin-right: 5px; border: 1px solid #ccc;"><a href="'+link+'" target="_blank">'+name+'</a></div>');

                for (var k in debugInfo) {
                    if (k && debugInfo[k]) {
                        data = k.split(':');
                        $('.debug-overlay', this).append('<div style="margin-top: 3px;"><b>'+data[0]+(typeof data[1]!="undefined"?'</b><br>'+data[1]:'')+(data[0]=="boost_functions()"&&debugProducts[id]['function_boost']?"</b>^"+parseFloat(debugProducts[id]['function_boost']).toFixed(2):'')+': <br><progress value="'+debugInfo[k].toFixed(2)+'" max="100" style="width: 85px;"></progress></b>&nbsp;&nbsp;'+debugInfo[k].toFixed(2)+'%</div>');
                    }
                }

                for (var key in debugProducts[id]) {
                    if (key.indexOf('popularity') != -1) {
                        $('.debug-overlay', this).append('<div style="margin-top: 3px;"><b>' + key + ': </b>'+parseFloat(debugProducts[id][key]).toFixed(2)+'</div>');
                    }
                }

                if (debugProducts[id]['category_clicks']) {
                    $('.debug-overlay', this).append('<div style="margin-top: 3px;"><b>category clicks: </b>'+debugProducts[id]['category_clicks']+'</div>');
                }

                if (debugProducts[id]['product_clicks']) {
                    $('.debug-overlay', this).append('<div style="margin-top: 3px;"><b>product clicks: </b>'+debugProducts[id]['product_clicks']+'</div>');
                }

                $('.debug-overlay', this).append('<div style="font-size: 12px; margin-top: 3px;"><b>score: '+parseFloat(debugProducts[id]['score']).toFixed(2)+'</b></div>');
                $('.debug-overlay', this).append('<div style="font-size: 12px; margin-top: 3px;"><b>rating: '+parseFloat(debugProducts[id]['rating']).toFixed(2)+'</b></div>');
                $('.debug-overlay', this).append('<div style="font-size: 12px; margin-top: 3px;"><b>reviews_rank: '+parseFloat(debugProducts[id]['reviews_rank']).toFixed(2)+'</b></div>');
                $('.debug-overlay', this).append('<div style="font-size: 12px; margin-top: 3px;"><b>family_name: </b>'+ debugProducts[id]['family_name']+'</div>');

                if (debugProducts[id]['boost_function']) {
                    var div = $('<div style="margin-top: 5px; border-top: 1px solid #cccccc;"/>');

                    for(var f in debugProducts[id]['boost_function']) {
                        div.append('<div style="font-size: 11px; line-height: 18px;"><i>' + debugProducts[id]['boost_function'][f]['name'] + '(' + debugProducts[id]['boost_function'][f]['key'] + ')</i>^'+debugProducts[id]['boost_function'][f]['boost']+'</div>');
                    }

                    $('.debug-overlay', this).append(div);
                }

                $('.debug-overlay', this).append('</div>');
            }
        });
    }
};

Emag.Utils = {
    _cookies: {},
    debug: false,
    init: function() {
        this._processCookies();
    },
    _processCookies: function() {
        var cookieKey       = 'Emag.Utils._cookies';

        try {
            this._cookies   = ($.parseJSON($.cookie(cookieKey)) != null)?$.parseJSON($.cookie(cookieKey)):{};
        } catch(e) {
        }

        if($.type(this._cookies.debug) != 'undefined') {
            this.debug      = (this._cookies.debug == 'true');
        }

        if(this.debug === true) {
            console.debug('Emag.Utils._processCookies');
        }
    }
};

Emag.Utils.Exceptions = {
    AjaxException: function(message){
        this.name           = "Script Error";
        this.level          = "Show Stopper";
        this.message        = ($.type(message) != 'undefined')?message:"An error occured while loading file.";
        this.htmlMessage    = ($.type(message) != 'undefined')?message:"An error occured while loading file.";
        this.toString       };

        return this;
    }
};

var dataLayer = window.dataLayer || []; // datalayer object
var inView = []; // used in Emag.DatalayerManager
var gtm_loaded = false; // small fix for gtm loaded clicks

Emag.DatalayerManager = {

    includedTwig: false, // Used for mobile, do not include the file 2 times
    debug: false, // used for debug

    /* add default data for datalayer - examples : UID, timestamp, city, userId*/
    pushDefaultData: function (data) {
        dataLayer.push(data);
        this.includedTwig = true;
    },

    pushData: function (data) {
        dataLayer.push(data);
    },

    push: function (data) {
        dataLayer.push(data);
    },

    processStringHtmlJson: function (response) {
        var data = '';
        try {
            if (typeof response.responseText !== 'undefined') {
                data = $(response.responseText);
            } else {
                data = $(response);
            }

            return $.parseJSON(data[0].getAttribute('data-datalayer'));
        } catch (error) {
            this.showErrors(error);
        }
    },

    showErrors},

    callServiceClick: function (serviceId, mainProductId, price) {
        var self = this;
        $.ajax({
            type: 'POST',
            url: '/ajax-services/datalayer-ajax-services',
            async: true,
            data: {'service_id': serviceId, 'main_product': mainProductId, 'price': price},
            success},
            error: function (error) {
                self.showErrors(error);
            }
        });
    },

    /* Tracking homepage banners */
    trackBanners: function (elem, place) {
        var container = elem;
        var self = this;

        if (place != 'widget') {
            container.find('.emg-banner-mainmenu').each(function () {
                var catId = $(this).find('img').data('cid');
                var banId = $(this).find('img').data('bid');
                if ($(this).closest('li').hasClass('emg-menu-hover-intent')) {
                    if ($.cookie('home_banner_' + catId + '_' + banId) != '1') {
                        self.push({
                            'event': 'bannerView',
                            'promoId': 'Homepage Banners',
                            'promoName': 'Menu',
                            'promoDeptId': catId,
                            'promoBannerId': banId
                        });
                        var date = new Date();
                        var minutes = 15;
                        date.setTime(date.getTime() + (minutes * 60 * 1000));
                        $.cookie('home_banner_' + catId + '_' + banId, '1', {expires: date, path: '/'});
                    }
                }
            });
        }
        else {
            container.each(function () {
                var catId = $(this).find('img').data('cid');
                if (parseInt(catId) > 0) {
                    if ($.cookie('home_depts_' + catId) != '1') {
                        self.push({
                            'event': 'bannerView',
                            'promoId': 'Homepage departments',
                            'promoName': null,
                            'promoDeptId': catId,
                            'promoBannerId': null
                        });
                        var date = new Date();
                        var minutes = 15;
                        date.setTime(date.getTime() + (minutes * 60 * 1000));
                        $.cookie('home_depts_' + catId, '1', {expires: date});
                    }
                }
            });
            container.find('img:onScreen').each(function () {
                var catId = $(this).data('cid');
                var banId = $(this).data('bid');
                if (parseInt(catId) > 0 && parseInt(banId) > 0) {
                    if ($.cookie('home_banner_' + catId + '_' + banId) != '1') {
                        self.push({
                            'event': 'bannerView',
                            'promoId': 'Homepage Banners',
                            'promoName': 'Widget',
                            'promoDeptId': catId,
                            'promoBannerId': banId
                        });
                        var date = new Date();
                        var minutes = 15;
                        date.setTime(date.getTime() + (minutes * 60 * 1000));
                        $.cookie('home_banner_' + catId + '_' + banId, '1', {expires: date});
                    }
                }
            });
            $(window).scroll(function () {
                $('.emg-widget img[data-cid]').filter(":onScreen").each(function () {
                    var catId = $(this).data('cid');
                    var banId = $(this).data('bid');
                    if (parseInt(catId) > 0 && parseInt(banId) > 0) {
                        if ($.cookie('home_banner_' + catId + '_' + banId) != '1') {
                            self.push({
                                'event': 'bannerView',
                                'promoId': 'Homepage Banners',
                                'promoName': 'Widget',
                                'promoDeptId': catId,
                                'promoBannerId': banId
                            });
                            var date = new Date();
                            var minutes = 15;
                            date.setTime(date.getTime() + (minutes * 60 * 1000));
                            $.cookie('home_banner_' + catId + '_' + banId, '1', {expires: date});
                        }
                    }
                });
            });
        }
    },

    trackInViewItems: function (event) {
        var temp = [];
        var self = this;

        $('.emg-dep').inViewport(function () {
            var name = $(this).find('h3:first-child').text().replace(/[,\s]/g, '_');

            if (event == 'scroll') {
                temp.push(name);

                if (inView.indexOf(name) != -1) {
                    return false;
                }
            }

            self.push({
                'ecommerce': {
                    'promoView': {
                        'promotions': [
                            {
                                'name': 'Widget_' + name
                            }
                        ]
                    }
                }
            });

            var childs = $(this).find('.emg-carousel-overlay').children();

            if (childs.length > 0) {
                // calculate current product in view index
                var marginL = childs.eq(0).css('margin-left');
                var marginR = childs.eq(0).css('margin-right');
                var margin = (parseInt(marginL.replace('px', '')) || 0) + (parseInt(marginR.replace('px', '')) || 0);
                var offset = Math.abs(parseInt($(this).find('.emg-carousel-overlay').css('margin-left').replace('px', '')));
                var index = offset / (childs.eq(0).width() + margin);

                var product = childs.eq(index).find('.gtm-product-details');
                var total = childs.length;
                var position = total - childs.eq(index).nextAll().length;

                self.push({
                    'ecommerce': {
                        'impressions': [{
                            'id': product.val(),
                            'category': product.data('category'),
                            'position': position + '/' + total,
                            'list': 'Widget_' + name
                        }]
                    }
                });
            }

            inView.push(name);

            if (event == 'scroll') {
                for (var j = inView.length - 1; j >= 0; j--) {
                    if (temp.indexOf(inView[j]) == -1) {
                        inView.splice(j, 1);
                    }
                }
            }
        });
    },


    /**
     * Push into datalayer and create cookie for payment method
     * @param selectedPaymentMethod
     * @param pushReady
     */
    pushPaymentMethod: function (selectedPaymentMethod, pushReady) {
        this.push({mp: selectedPaymentMethod});
        createCookie("mp", selectedPaymentMethod, 1);
    },

    /**
     * traking product click depending by device
     * @param device | mobile|desktop
     */
    trackDevice: function (device) {
        $(document).ready(function () {
            if (device == 'mobile') {
                $('.product-list .product-container').bind('click tap', function () {
                    var _this = $(this);
                    try {
                        localStorage.setItem('DLProductClick', _this.children('.dl_info').val());
                    } catch (err) {
                    }
                });
            } else if (device == 'desktop') {
                $('#products-holder').on('click', 'a', function () {
                    var form = $(this).closest('form');
                    var dl_info = form.find('.dl_info');
                    try {
                        localStorage.setItem('DLProductClick', dl_info.val());
                    } catch (err) {
                    }
                });
            }
        });
    },

    /**
     * tracking product click on listing fashion
     */
    trackFashionListing: function () {
        $(document).ready(function () {
            $('.emg-center-container').children('figure').find('a').each(function () {
                if ($(this).hasClass('emg-product-title') || $(this).hasClass('emg-listing-products-image-link')) {
                    $(this).mouseup(function () {
                        var _this = $(this);
                        try {
                            var productClickLocalStorage = JSON.parse(_this.parents('figure').children('.dl_info').val());
                            localStorage.setItem('DLProductClick', JSON.stringify(productClickLocalStorage));
                        } catch (err) {
                        }
                    });
                }
            });
        });
    }
};

if(typeof Emag === "undefined") {
    var Emag = {};
}

if(typeof Emag.Site === "undefined") {
    Emag.Site = {};
}

Emag.Site.Modules = {
    _enabled: [],
    _disabled: [],
    register: function(name) {
        var position = this._disabled.indexOf(name);

        if(position != -1) {
            this._disabled.splice(position, 1);
        }

        this._enabled.push(name);
    },
    unregister: function(name) {
        var position = this._enabled.indexOf(name);

        if(position != -1) {
            this._enabled.splice(position, 1);
        }

        this._disabled.push(name);
    },
    getEnabled: function() {
        return this._enabled;
    },
    getDisabled: function() {
        return this._disabled;
    }
};
function validateCNP(e){if("n/a"==e)return!0;if(13!=e.length||!e.match(/^\d+$/))return!1;var t=e.split("");e=new Array;for(var n=0;n<t.length;n++)e.push(parseInt(t[n]));var i=[2,7,9,1,4,6,3,5,8,2,7,9],a=[0,1,2,3,4,5,6,7,8,9,10,11],s=new Array;for(n=0;n<a.length;n++)s.push(i[a[n]]*e[a[n]]);var r=0;for(n=0;n<s.length;n++)r+=s[n];return(s=r%11)<10&&s==e[12]||10==s&&1==e[12]}function validateTelephoneRO(e){var t=e.replace(/^(\+4|004)/gi,"");return{match:/^([0-9]{10})$/.test(t),sanitizedValue:t}}function validateTelephonePL(e){var t=e.replace(/^(\+48|0048)/gi,"");return{match:/^([0-9]{9})$/.test(t),sanitizedValue:t}}function validateTelephoneBG(e){var t=e.replace(/^(\+359|00359)/gi,"");return{match:/^([0-9]{10})$/.test(t),sanitizedValue:t}}function validateTelephoneHU(e){var t=e.replace(/^(\+36|0036)/gi,"");return{match:/^([0-9]{6,20})$/.test(t),sanitizedValue:t}}!function(e){var t;t=function(e){var t=function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t=e.fn.select2.amd;var n,i,a,s;return t&&t.requirejs||(t?i=t:t={},function(e){var t,s,r,o,d={},l={},u={},c={},h=Object.prototype.hasOwnProperty,_=[].slice,p=/\.js$require:function(e){return y(e)},export},modul}},},n=i=},s.confi},n._defined=d,(}).amd={jQuery:!0}}(),t.requirejs=n,t.require=i,t.define=a),t.define("almond",function(){}),t.define("jquery",[}),t.define("select2/utils",["jquery"],function(e){var t={}t.Exten},t.Decorat};var };return i.prototype.o},i.prototype.trigge},i.prototype.invok},t.Observable=i,t.generateChar},t.bin},t._convertDat},t.hasScrol},t.escapeMarku},t.appendMan},t}),t.define("select2/results",["jquery","./utils"],function(e,t}return t.Extend(n,t.Observable),n.prototype.rende},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessag},n.prototype.appen},n.prototype.position=function(e,t){t.find(".select2-results").append(e)},n.prototype.sor},n.prototype.setClasse},n.prototype.showLoadin},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.optio},n.prototype.bind=function(t,n){var i=this,a=t.id+"-results";this.$results.attr("id",a),t.on("results:all}),t.on("results:append}),t.on("query",function(e){i.showLoading(e)}),t.on("select",function(){t.isOpen()&&i.setClasses()}),t.on("unselect}),t.on("open}),t.on("close}),t.on("results:toggle}),t.on("results:select}),t.on("results:previous}),t.on("results:next}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){i.displayMessage(e)}),e.fn.mousewheel&&this.$results.on("mousewheel}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(t){var n=e(this),a=n.data("data");"true"!==n.attr("aria-selected")?i.trigger("select",{originalEvent:t,data:a}):i.options.get("multiple")?i.trigger("unselect",{originalEvent:t,data:a}):i.trigger("close")}),this.$results.on("mouseenter",".select2-results__option[aria-selected]})},n.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},n.prototype.destroy=function(){this.$results.remove()},n.prototype.ensureHighlightVisibl},n.prototype.templat},n}),t.define("select2/keys",[}),t.define("select2/selection/base",["jquery","../utils","../keys"],function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,t.Observable),i.prototype.rende},i.prototype.bind=function(e,t){var i=this,a=(e.id,e.id+"-results");this.container=e,this.$selection.on("focus",function(e){i.trigger("focus",e)}),this.$selection.on("blur",function(e){i.trigger("blur",e)}),this.$selection.on("keydown}),e.on("results:focus}),e.on("selection:update",function(e){i.update(e.data)}),e.on("open}),e.on("close}),e.on("enable}),e.on("disable})},i.prototype._attachCloseHandle},i.prototype._detachCloseHandle},i.prototype.positio},i.prototype.destro},i.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},i}),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i}return n.Extend(a,t),a.prototype.render=function(){var e=a.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},a.prototype.bin},a.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},a.prototype.display=function(e){var t=this.options.get("templateSelection");return this.options.get("escapeMarkup")(t(e))},a.prototype.selectionContainer=function(){return e("<span></span>")},a.prototype.updat},a}),t.define("select2/selection/multiple",["jquery","./base","../utils"],function(e,t,n}return n.Extend(i,t),i.prototype.rende},i.prototype.bind=function(t,n){var a=this;i.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){a.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove})},i.prototype.clea},i.prototype.displa},i.prototype.selectionContaine},i.prototype.updat},i}),t.define("select2/selection/placeholder",["../utils"}),t.define("select2/selection/allowClear",["jquery","../keys"],function(e,t){function n(){}return n.prototype.bin},n.prototype._handleClea},n.prototype._handleKeyboardClea},n.prototype.updat},n}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,n){function i(e,t,n){e.call(this,t,n)}return i.prototype.rende},i.prototype.bind=function(e,t,i){var a=this;e.call(this,t,i),t.on("open}),t.on("close}),t.on("enable",function(){a.$search.prop("disabled",!1)}),t.on("disable}),this.$selection.on("focusin",".select2-search--inline",function(e){a.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline}),this.$selection.on("keydown",".select2-search--inline}),this.$selection.on("input",".select2-search--inline}),this.$selection.on("keyup.search input",".select2-search--inline",function(e){a.handleSearch(e)})},i.prototype.createPlaceholde},i.prototype.updat},i.prototype.handleSearc},i.prototype.searchRemoveChoic},i.prototype.resizeSearc},i}),t.define("select2/selection/eventRelay",["jquery"}),t.define("select2/translation",["jquery","require"}),t.define("select2/diacritics",["ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ"::"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","":"y","ẏ":"y","ÿ2/data/base",["../utinction(e,t){},t.p="-"+n.id.toString()tils","jquery"],fu").each(function(){var rototype.select=funhis.$element.val(("select",function(e){n.sel{var s=a.item(t),r=aprototype.addOptions=function(e){t.appendMany(this.$element,e)},i.prototype.option=n")).textContent?t.textContent=e.text:tdata",a),i},i.prototype.item=function(e){var t={};if(null!=(t=n.data(e[0],"data")))return te.text(),disprop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var i=e.children("option"),a=[],s=0;s<i.length;s++){var r=n(i[s]),o=this.item(r);a.push(o)}t.children=a}return(t=this._normalizeItem(t)).element=e[0],n.data(e[0],"data",t),t},i.prototype._normalizeItem=function(e){n.isPlainObject(e)||(e={id:e,text:e});return null!=(e=n.ext,{selected:!1,disabled:!1},e)},i.prototype.matct){var n=t.get("data")||[];i.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n))}return t.Extend(i,e),i.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,n){return n.value==e.id.r d=0;d<e.length;d++){var l=this._normalizeItem(e[d]);if(n.inArray(l.id,s)>=0){var u=a.filter(o(l)),c=this.item(u),h=(n.extend(!0,{},c,l),this.option(c));u.replaceWith(h)}else{var _=this.option(l);if(l.children){var p=this.convertToOptions(l.children);t.appendMany(_,p)}r.push(_)}}return r},i}),t.define("selecer__.constructor.call(thET"},this.ajaxOptions)(a,e);i.options.get("de.error&&(s&&s.results&&n.i,t(s)},function(){});i._request=s}"function"==typ,void n(a))}if(s)return!0;var u=i.createTag(t);ement.find("option[data-select2-tag]").each(function(e,t,n){var i=this;t.term=t.term||"";var a=thi.substr(0,o);a(d(e.extend({},n,{term:u}))),r=r.substr(o+1)||"",oion(){function e(e,t,n){this.minimumInputLength=n.essage",{message:"inp:{minimum:this.minim}):e.call(this,t,n)},e}),t.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInp/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLengunction(e,t,n){var i=thisll!=a?a.length:0;i.maximumSelectionLength>0&&s>=i.maximumSelectionLength?i.},e}),t.defineion n(e,t){this.$elet2-results"></span></span>'troy=function(){this.$ddefine("select2/dropdown/search",["jquery","../utilch.on("keydown",function(e){a.trigger("keypress",e),a._ceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;i>=0;i--){var a=t[ioll",["jquery"],functio{a.lastParams=e,a.loa!1)+50>=a.$loadingMis.loading=!0;var t=e.extetrigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="option load-more" role="treeitem},t}),t.n(e,t,n){this.$dropdownParenn)}return n.prototype.bind=function(e,t,n()}),t.on("results:append",fuon",{x:e(this).scrollLeft(),own()})},n.prototype._deta"+n.id;this.$container.parents().filter(t.hasScroll).off(i)s.$dropdown.outerHeight(!1),d=t.scrollTop(),l=elect2-dropdown--"+a),this.$container.removeClth,e.width="auto"),this.$dropdoresults)<this.minimumResultsForSearch)&&e.call(this,t)},e}),t.define("select2/dropdown/selectOnClose",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(){i._handleSelectOnClose()})},e.prototype._handleSelectOnClose=function(){var e=this.getHighlightedResults();e.length<1||this.trigger("select",{data:e.data("data")})},e}),t.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvenr("close")},e}),t.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),t.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(e,t,n,i,a,s,r,o,d,l,u,c,h,_,p,m,f,y,g,M,v,L,Y,w,T,b,D,k,S){function x(){this.reset()}return x.prototype.apply=function(c){if(null==(c=e.extend({},this.defaults,c)).dataAdapter){if(null!=c.ajax?c.dataAdapter=p:null!=c.data?c.dataAdapter=_:c.dataAdapter=h,c.minimumInputLength>0&&(c.dataAdapter=l.Decorate(c.dataAdapter,y)),c.maximumInputLength>0&&(c.dataAdapter=l.Decorate(c.dataAdapter,g)),c.maximumSelectionLength>0&&(c.dataAdapter=l.Decorate(c.dataAdapter,M)),c.tags&&(c.dataAdapter=l.Decorate(c.dataAdapter,m)),null==c.tokenSeparators&&null==c.tokenizer||(c.dataAdapter=l.Decorate(c.dataAdapter,f)),null!=c.query){var S=t(c.amdBase+"compat/query");c.dataAdapter=l.Decorate(c.dataAdapter,S)}if(null!=c.initSelection){var x=t(c.amdBase+"compat/initSelection");c.dataAdapter=l.Decorate(c.dataAdapter,x)}}if(null==c.resultsAdapter&&(c.resultsAdapter=n,null!=c.ajax&&(c.resultsAdapter=l.Decorate(c.resultsAdapter,w)),null!=c.placeholder&&(c.resultsAdapter=l.Decorate(c.resultsAdapter,Y)),c.selectOnClose&&(c.resultsAdapter=l.Decorate(c.resultsAdapter,D))),null==c.dropdownAdapter){if(c.multiple)c.dropdownAdapter=v;else{var C=l.Decorate(v,L);c.dropdownAdapter=C}if(0!==c.minimumResultsForSearch&&(c.dropdownAdapter=l.Decorate(c.dropdownAdapter,b)),c.closeOnSelect&&(c.dropdownAdapter=l.Decorate(c.dropdownAdapter,k)),null!=c.dropdownCssClass||null!=c.dropdownCss||null!=c.adaptDropdownCssClass){var $=t(c.amdBase+"compat/dropdc.language.push(y{z=this.defaults.amdLanguageBase+z,W=u.loadPath(z)}catch(e){c.debug&&window.coe=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(e.prop("dir")?this.options.dions","./utils","./keys"],function(e,t,n,i){var a=functioper__.constructor.call(this)ew s(e,this.options);var ris.results.render(),this.ropdownEvents(),this._registerReype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"g"!=typeof s)return null;for(var r=s.split(";"),o=0,d=r.length;o<d;o+=1){var l=r[o].replace(/\s/g,"").match(n);if(null!==l&&l.length>=1)return l[1ter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},a.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this._sync=n.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var i=wMutationObserver;:!1})):this.$element[0].egisterDataEvents=function(){var e=this;this.dataAdapter.on("*",function(t,n){e.trigger(t,n)})},a.prototype._registerSelectionEvents=function(){var t=this,n=["toggle"];this.selection.on("toggle",function(){t.toggleDropdown()}),this.selection.on("*",function(i,a){-1===e.inArray(i,n)&&t.trigger(i,a)})},a.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",function(t,n){e.trigger(t,n)})},a.prototype._registerResultsEvents=function(){var e=this;this.results.oe",function(){e.$concontainer.addClass("select2ontainer--focus")er.query(t,functio),this.on("query:apts:append",{data:n,tDefault()):n!==ie(),this.triggersOpen()?this.close()no longer be set usmoved in later Select2 versions. Use $element.ver?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},a.prototype.render=function(){var t=e('<span cla&&r.push(this)}),(a=e.trim(n.attr("class")))&&e((a=".addClass(s),a},i}),t.define("select2/compat/droct2 is no longer supported and may stop workin._currentData.length;s++){var r=thispe.unselect=function(e,t){var n=this;t.selected=var i=[],a=0;a<this._currentData.length;a++){var s=this._currentData[a],r=this.matches(t,s);null!==r&&i.push(r)}n({results:i})},t.prototype.addOptions=function(t,n){var i=e.map(n,function(t){return e.data(t[0],"data")});this._currentData.push.apply(this._currentData,i)},t}),t.define("select2/compat/matcher",["jquery"],function(e){return function(t){return function(n,i){var a=e.extend(!0,{},i);if(null==n.term||""===e.trim(n.term))return a;if(i.childrof a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e})ion(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),t.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusicall(arguments,1),c=0,h=0,_=0,p=0,m=0;if((i=e.event.fix(r)).type="mousewheel","detail"in r&&(_=-1*r.detail),"wheelDelta"in r&&(_=r.wheelDelta),"wheelDeltaY"in r&&(_=r.wheelDeltaY),"wheelDeltaX"in r&&(h=-1*r.wheelDeltaX),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(h=-1*_,_=0),c=0===_?h:_,"deltaY"in r&&(c=_=-1*r.deltaY),"deltaX"in r&&(h=r.deltaX,0===_&&(c=-1*h)),0!==_||0!==h){if(1===r.deltaMode){var f=e.data(this,"mousewheel-line-height");c*=f,_*=f,h*=f}else if(2===r.deltaMode){var y=e.data(this,"mousewheel-page-height");c*=y,_*=y,h*=y}if(a=Math.max(Math.abs(_),Math.abs(h)),(!n||a<n)&&(n=a,u(r,a)&&(n/=40)),u(r,a)&&(c/=40,h/=40,_/=40),c=Math[c>=1?"floor":"ceil"](c/n),h=Math[h>=1?"floor":"ceil"](h/n),_=Math[_>=1?"floor":"ceil"](_/n),o.settings.normalizeOffset&&this.getBoundingClientRect){var g=this.getBoundingClientRect();p=i.clientX-g.left,m=i.clientY-g.top}return i.deltaX=h,i.deltaY=_,i.deltaFactor=n,i.offsetX=p,i.offsetY=m,i.deltaMode=0,d.unshift(i,c,h,_),t&&clearTimeout(t),t=setTimeout(l,200),(e.event.dispatch||e.event.handle).apply(this,d)}}function l(){n=null}function u(e,t){return o.settings.adjustOldDeltas&& e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof t.define&&t.define.amd?t.define("jquery.mousewhfine,require:t.require}}(),n=t.require("jquery.select2");return e.fn.select2.amd=t,n},"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(e)}("undefined"!=typeof $111?$111:jQuery),function(e){e.fn.customScrollbar=function(t,n){var i={skin:void 0,hScroll:!0,vScroll:!0,updateOnWindowResize:!1,animationSpeed:300,onCustomScroll:void 0,swipeSpeed:1,wheelSpeed:40,fixedThumbWidth:void 0,fixedThumbHeight:void 0,preventDefaultScroll:!1},a=function(t,n){this.$element=e(t),this.options=n,this.addScrollableClass(),this.addSkinClass(),this.addScrollBarComponents(),this.options.vScroll&&(this.vScrollbar=new s(this,new o)),this.options.hScroll&&(this.hScrollbar=new s(this,new r)),this.$element.data("scrollable",this),this.initKeyboardScrollition(){this.$element.hasClass("scrollable")||(this.scrollableAdded=!0,this.$element.addClass("scrollable"))},removeScrollableClass:function(){this.scrollableAdded&&this.$element.removeClass("scrollable")},addSkinClass:function(){"string"!=typeof this.options.skin||this.$element.hasClass(this.options.sked&&this.$eComponents:function(){this.assignViewPort(),0==this.$viewPort.length&&(this.$element.wrapAdded=!0),this.assignOverview(),0==this.$overview.length&&(this.$viewPort.wrapInner('<div class="overview" />'),this.assignOverview(),this.overviewAdded=!0),this.addScrollBar("vertical","prepend"),this.addScrollBar("horizontal","append")},removeScrollbarComponents:function(){this.removeScrollbar("vertical"),this.removeScrollbar("horizontal"),this.overviewAdded&&this.$element.unwrap(),this.viewPortAdded&&this.$element.unwrap()},removeScrollbar:function(e){th".scroll-bar."+e).remove()},assignViewPort:function(){this.$viewPort=this.$element.find(".viewport")},assignOverview:function(){this.$overview=this.$viewPort.find(".overview")},addScrollBar:function(e,t){0==this.$element.find(".scroll-bar."+e).length&&(this.$element[t]("<div class='scroll-bar "+e+"'><div class='thumb'></div></div>"),this[e+"ScrollbarAdded"]=!0)},resize:function(e){this.vScrollbar&&this.vScrollbar.resize(e),this.hScrollbar&&this.hScrollbar.resizrollbar&&thToX:function(e){this.hScrollbar&&this.hScrollbar.scrollOverviewTo(e,!0)},scrollToY:function(e){this.vScrollbar&&this.vScrollbar.scrollOverviewTo(e,!0)},scrollByX:function(e){this.hScrollbar&&this.scrollToX(this.hScrollbar.overviewPosition()+e)},scrollByY:function(e){this.vScrollbar&&this.scrollToY(this.vScrollbar.overviewPosition()+e)},remove:function(){this.removeScrollableClass(),this.removeSkinClass(),this.removeScrollbarComponents(),this.$element.data("scrollable",null),this.removeKeyboardScrolling(),this.vScrollbar&&this.vScrollbar.remove(),this.hScrollbar&&this.hScrollbar.remove()},setAnimationSpeed:function(e){this.options.animationSpeed=e},isInside:function(t,n){var i=e(t),a=e(n),s=i.offset(),r=a.offset();return s.top>=r.top&&s.left>=r.left&&s.top+i.height()<=r.top+a.height()&&s.left+i.width()<=r.left+a.width()},initKeyboardScrolling:function(){var e=this;this.elementKeydown=function(t){document.activeElement===e.$element[0]&&(e.vScrollbar&&e.vScrollbar.keyScroll(t),e.hScrollbar&&e.hScrollbar.keyScroll(t))},this.$element.attr("tabindex","-1").keydown(this.elementKeydown)},removeKeyboardScrolling:function(){this.$element.removeAttr("tabindex").unbind("keydown",this.elementKeydown)},bindEvents:function(){this.options.onCustomScroll&&this.$element.on("customScroll",this.options.onCustomScroll)}};var s=function(e,t){this.scrollable=e,this.sizing=t,this.$scrollBar=this.sizing.scrollBar(this.scrollable.$element),this.$thumb=this.$scrollBar.find(".thumb"),this.setScrollPosition(0,0),this.resize(),this.initMouseMoveScrolling(),this.initMouseWheelScrolling(),this.initTouchScrolling(),this.initMouseClickScrolling(),this.initWindowResize()};s.prototype={resize:function(e){this.overviewSize=this.sizing.size(this.scrollable.$overview),this.calculateViewPortSize(),this.sizing.size(this.scrollable.$vieio=this.viewPortSize/this.overviewSize,this.sizing.size(this.$scrollBar,this.viewPortSize),this.thumbSize=this.calculateThumbSize(),this.sizing.size(this.$thumb,this.thumbSize),this.maxThumbPosition=this.calculateMaxThumbPosition(),this.maxOverviewPosition=this.calculateMaxOverviewPosition(),this.enabled=this.overviewSize>this.viewPortSize,void 0===this.scrollPercent&.setScrollPosition(0,0),this.$scrollBar.toggle(this.enabled)},calculateViewPortSize:function();if(e>0&&!this.maxSizeUsed)this.viewPortSize=e,this.maxSizeUsed=!1;else{var t=this.sizing.maxSize(this.scrollable.$element);this.viewPortSize=Math.min(t,this.overviewSize),this.maxSizeUsed=!0}},calculateThumbSize:function(){var e,t=this.sizing.fixedThumbSize(this.scrollable.options);return e=t||this.ratio*this.viewPortSize,Math.max(e,this.sizing.minSize(this.$thumb))},initMouseMoveScrolling:function(){var t=this;this.$thumb.mousedown(function(e){t.enabled&&t.startMouseMoveScrolling(e)}),this.documentMouseup=function(e){t.stopMouseMoveScrolling(e)},e(document).mouseup(this.documentMouseup),this.documentMousemove=function(e){t.mouseMoveScroll(e)},e(document).mousemove(this.documentMousemove),this.$thumb.cl})},removeMouseMoveScrolling:function(){this.$thumb.unbind(),e(documenusemove",this.documentMousemove)},initMouseWheelScrolling:function(){var e=this;this.scrollable.$element.mi,a){if(e.enabled){var s=e.mouseWheelScroll(i,a);e.stopEvion(){this.scrorolling:functiolable.$element[0].addEventListener("touchstart",this.elementTouchstart),this.documentTouchmove=function(t){e.touchScroll(t)},this.scrollable.$element[0].addEventListener("touchmove",this.documentTouchmove),this.elementTouchend=function(t){e.stopTouchScrolling(t)},this.scrollable.$element[0].addEventListener("touchend",this.elementTouchend)}},removeTouchScrolling:function(){document.addEventListener&&(this.scrollable.$element[0].removeEventListener("touchstart",this.elementTouchstart),document.removeEventListener("touchmove",this.documentTouchmove),this.scrollable.$element[0].removeEventListener("touchend",this.elementTouchend))},initMouseClickScrolling:function(){var e=this;this.scrollBarClick=function(t){e.mouseClickScroll(t)},this.$scrollBar.click(this.scrollBarClick)},removeMouseClickScrolling:function(){this.$scrollBar.unbind("click",this.scrollBarClick)},initWindowResize:function(){if(this.scrollable.options.updateOnWindowResize){var t=this;this.windowResize=function(){t.resize()},e(window).resize(this.windowResize)}},rhis.windowResize)},isKeyScrolling:function(e){return null!=this.keyScrollDelta(e)},keyScrollDelta:function(e){for(var t in this.sizing.scrollingKeys)if(t==e)return this.sizing.scrollingKeys[e](this.viewPortSize);return null},startMouseMoveScrolling:function(t){this.mouseMoveScrolling=!0,e("body").addClass("not-selectable"),this.setUnselectable(e("body"),"on"),this.setScrollEvent(t),t.preventDefault()},stopMouseMoveScrolling:function(t){this.mouseMoveScrolling=!1,e("body").removeClass("not-selectable"),this.setUnselectable(e("body"),null)},setUnselectable:function(e,t){e.attr("unselectable")!=t&&(e.attr("unselectable",t),e.find(":not(input)").attr("unselectable",t))},mouseMoveScroll:function(e){if(this.mouseMoveScrolling){var t=this.sizing.mouseDelta(this.scrollEvent,e);this.scrollThumbBy(t),this.setScrollEvent(e)}}tScrollEvent(e.touches[0]),this.touchScrolling=!0,e.stopPropagation())},touchScroll:function(e){if(this.touchScroltouches[0])*this.scrollable.options.swipeSpeed,n=this.scrollOverviewBy(t);n&&this.setScrollEvent(e.touches[0]),this.stopEventConditionally(e,n)}},stopTouchScrolling:function(e){this.touchScrolling=!1,e.stopPropagation()},mouseWheelScroll:function(e,t){var n=-this.sizing.wheelDelta(e,t)*this.scrollable.options.wheelSpeed;if(0!=n)return this.scrollOverviewBar t=this.viewPortSize-20;e["page"+this.sizing.scrollAxis()]<this.$thumb.offset()[this.sizing.offsetComponent()]&&(t=-t),this.scrollOverviewBy(t)},keyScroll:function(e){var t=e.which;if(this.enabled&&this.isKeyScrolling(t)){var n=this.scrollOverviewBy(this.keyScrollDelta(t));this.stopEventConditionally(e,n)}},scrollThumbBy:function(e){var t=this.thumbPosition();t+=e,t=this.positionOrMax(t,this.maxThumbPosition);var n=this.scrollPercent;if(this.scrollPercent=t/this.maxThumbPosition,n!=this.scrollPercent){var i=t*this.maxOverviewPosition/this.maxThumbPosition;return this.setScrollPosition(i,t),this.triggerCustomScroll(n),!0}return!1},thumbPosition:function(){return this.$thumb.position()[this.sizing.offsetComponent()]},scrollOverviewBy:function(e){var t=this.overviewPosition()+e;return this.scrollOverviewTo(t,!1)},overviewPosition:function(){return-this.scrollable.$overview.position()[this.sizing.offsetComponent()]},scrollOverviewTo:function(e,t){e=this.positionOrMax(e,this.maxOverviewPosition);var n=this.scrollPercent;if(this.scrollPercent=e/this.maxOverviewPosition,n!=this.scrollPercent){var i=this.scrollPercent*this.maxThumbPosition;return t?this.setScrollPositionWithAnimation(e,i):this.setScrollPosition(e,i),this.triggerCustomScroll(n),!0}return!1},positionOrMax:function(e,t){return e<0?0:e>t?t:e},triggerCustomScroll:function(e){this.scrollable.$element.trigger("customScroll",{scrollAxis:this.sizing.scrollAxis(),direction:this.sizing.scrollDirection(e,this.scrollPercent),scrollPercent:100*this.scrollPercent})},rescroll:function(e){if(e){var t=this.positionOrMax(this.overviewPosition(),this.maxOverviewPosition);this.scrollPercent=t/this.maxOverviewPosition;var n=this.scrollPercent*this.maxThumbPosition;this.setScrollPe,t){this.$thumb.css(this.sizing.offsetComponent(),t+"px"),this.scrollable.$overview.css(this.sizing.offsetComponent(),-e+"px")},setScrollPositionWithAnimation:function(e,t){var n={},i={};n[this.sizing.offsetComponent()]=t+"px",this.$thumb.animate(n,this.scrollable.options.animationSpeed),i[this.sizing.offsetComponent()]=-e+"px",this.scrollable.$ions.animarn Math.maxhis.thumbSize)},calculateMaxOverviewPosition:functiois.sizing.sverview)-this.sitScrollEvent:functs.s.scrollEvent&&this.scrollEvent[t]==e[t]||(this.scrollEvent={pageX:e.pageX,pageY:e.pageY})},scrollToElement:function(t){var n=e(t);if(tInside(n,this.scrollable.able.$viewPort)){var i=n.offset(),a=this.scrollable.$overview.offset(iewTo(i[this.sizing.offsetComponent()]-a[this.sizing.offsetComponent()],!0)}},remove:function(){this.removeMouseMoveScrolling(),this.removeMouseWheelScrolling(),this.removeTouchScrolling(),this.removeMouseClickScrolling(),this.removeWindowResize()},stopEventConditionally:function(e,t){(t||this.scrollable.options.preventDefaultScroll)&&(e.preventDefault(),e.stopPropagation())}};var r=function(){};r.prototype={size:function(e,t){return t?e.width(t):e.width()},minSize:function(e){return parseInt(e.css("min-width"))||0},maxSize:function(e){return parseInt(e.css("max-width"))||0},fixedThumbSize:function(e){return e.fixedThumbWidth},scrollBar:function(e){return e.find(".scroll-bar.horizontal")},mouseDelta:function(e,t){return t.pageX-e.pageX},offsetComponent:function(){return"left"},wheelDelta:function(e,t){return e},scrollAxis:function(){return"X"},scrollDirection:function(e,t){return e<t?"right":"left"},scrollingKeys:{37:function(e){return-10},39:function(e){return 10}},isInside:function(t,n){var i=e(t),a=e(n),s=i.offset(),r=a.offset();return s.left>=r.left&&s.left+i.width()<=r.left+a.width()}};var o=function(){};return o.prototype={size:function(e,t){return t?e.height(t):e.height()},minSize:function(e){return parseInt(e.css("min-height"))||0},maxSize:function(e){return parseInt(e.css("max-height"))||0},fixedThumbSize:function(e){return e.fixedThumbHeight},scrollBarnction(){:"up"},scrollingKeys:{38:function(e){return-10},40:function(e){return 10},33:function(e){return-(e-20)},34:function(e){return e-20}},isInside:function(t,n){var i=e(t),a=e(n),s=i.offset(),r=a.offset();return s.top>=r.top&&s.top+i.height()<=r.top+a.height()}},this.each(function(){if(null==tthiTraFAULTS={loadingText:"loadinglass(!this.$element.hasClass("active"));e&&this.$element.toggleClass("active")};var i=e.fn.button;e.fn.button=t,e.fn.button.Constrget);i.hasClass(""focus",/^focus(in)?$/.tes),a=i.data("bs.carousel"),s=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),r="string"==typeof t?t:s.slide;a||i.data("bs.carousel",a=new n(this,s).$element.on("keydproxy(this.cycle,this))};n.VERSION="3.3.1",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5eunction(e){if(!/inval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?vm")[d]()}if(s.hasClass("active"))return this.sliding=!1;var u=s[0],c=e.Event("slide.bs.carousel",{relatedTarget:u,direction:o});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicator([t,usel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var a=function(n){var i,a=e(this),s=e(a.""));if(s.hasClast="#'+t.id+'"]'),.length&&(n.call(a,his.$element.removeClasing").addClass("collapse in")[r]("").camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",e.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][d])}}}},i.prototype.hide=function(){if(!this.traent[n](this.$element[n]())[0].is)}}},i.prototype.toggle=function(){this[this.$element.=function(){return e(this.options.parclick.bs.collapse.da n(t){var n=t.attr("data-target");='[data-toggle="dropdown"]',s=function(t){e(t).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.1",s.prototype.toggle=function(i){var a=e(this);if(!a.is(".disabled, :disabled")){var s=n(a),r=s.hasClass("open");if(t(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",t);var o={relatedTarget:this};if(s.trigger(i=e.Event("show.bs.dropdown",o)),i.isDefaultPrevented())return;a.trigt:this.bodyIsOverflowing&&!e?this.e.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},n.d()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")}null,this.init("tooltip",e,t)};oltip" role="toolt];if("click"==r)this.options,{trigg$element.trigger(n);var i=es.$element);var u=this.ger?e(this.options.contaileft":"left"==o&&.offsetWidth,s=i[0].o0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.leftleft":"top",50*(1-e/t)+"%").css(tion i(){"in"!=a.hoverState&&s.detach{var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},t.prototype.hasContent=fus.$element)[0],ie.extend({},a,{width:a.right-a.left,height:a.bottom-a.top}));var s=i?{top:0,left:0}:t.offset(),r={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},o=i?{width:e(window).width(),heightnd({},a,r,o,s)},t.p/2-i/2,left:t.left+tptions.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(e)){var o=t.top-s-r.scroll,d=t.top+s-r.scroll+i;o<r.top?a.top=r.top-o:d>r.top+r.height&&(a.top=r.top+r.height-d)}else{var l=t.left-s,u=t.left+s+n;l<r.left?a.left=r.left-l:u>r.width&&(a.left=r.left+r.width-u)}return a},t.prototype.getTitle=function(){var e=this.$element,t=this.options;return e.attr("data-original-titlecall(e[0]):t.title)},t.prototype.getUID=function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},t.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enab.toggle=function(t){var})};var n=e.fn.tooltip;ar i=e(this),a=i.data("ta("bs.tooltip",a==t,e.fn.tooltip.";var t=function(e,t){this.init("popover",e,t)};if(!e.fn.tool</div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.prototype=e.),s=/^#./.test(a)&&e(a);retui.tarpe.process=function(){var e,t=this.$scrollElement.scrollTop()-menu").length&&(i=i.n.VERSION="3.3.1",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:notr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var a=n.find(".active:last a"),s=e.Event("hide.bs.tab",{relatedTart("li).attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(t[0].offseTransitionEnd(n.TRANSITION_D(document).on("click.bs.tab.data-api",'oggle="pill"]',a)}(e),functhis.$element.offset(),r=this.$target.height();if(null!=n&&"top"==this.affixe.affixed)return nullset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var e=this.$target.scrollTop(),t=this.$element.offset();return this.pinnedOffset=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,a=i.top,s=i.bottom,r=e("body").height();"object"!=typeof i&&(s=a=i),"function"==typeof a&&(a=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element));var o=this.getState(r,t,a,s);if(this.affixed!=o){null!=this.unpin&&this.$element.css("top","");var d="affix"+(o?"-"+o:""),l=e.Event(d+".bs.affix");if(this.$element.trigger(l),l.isDefaultPrevented())return;this.affixed=o,this.unpin="bottom"==o?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(d).trigger(d.replace("affix","affixed")+".bs.affix")}"bottom"==o&&this.$element.offset({top:r-t-s})}};var i=e.fn.affix;e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var n=e(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})}(e)}("undefined"!=typeof $111?$111:jQuery),function(e){var t,n,i,a="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,s=Math.round,r=Object.prototype.hasOwnProperty,o=0,d=1,l=2,u=3,c=4,h=5,_=6,p={},m=[],f="undefined"!=typeof module&&module&&module.exports,y=/^\/?Date\((\-?\d+)/i,g=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,M=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,v=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,L=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Y=/\d\d?/,w=/\6}/,D=/\d+/,k=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,S=/Z|[\+\-]\d\d:?\d\d/gi,x=/T/i,C=/[\+\-]?\d+/,$=/[\+\-]?\d+(\.\d{1,3})?/,j=/\d/,P=/\d\d/,E=/\d{3}/,A=/\d{4}/,O=/[+-]?\d{6}/,z=/[+-]?\d+/,W=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],I=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\\d\d/],["HH",/(T| )\d\d/]],F=/([\+\-]|\d\d)/gi,U=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,H}),N={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},q={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:",d:26,M:11},G="DDD w W M D d".split(M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return ththis.date()},DDD:function(){return this.dayOfYear()},d{ris,:function(){return this.isoWeek()},YY:function(){return ce(this.year()%100,2)},YYYY:function(){return ce(this.year(),4)},YYYYY:function(){return ce(this.year(),5)},YYYYYY:function(){var e=this.year();return(e>=0?"+":"-")+ce(Math.abs(e),6)},gg:function(){returhis.isoWeekYear()%100,2)},GGGG:func()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){retate(+e._d),!1===X&&(X=!0,t.updateOffset(this),X=!1)}function oe(e){0,s=n.month||0,r=n.week||0,o=n.day||0,d=n.hour||0,l=n.minute||0,u=n.second||0,c=n.millisecond||0;this._milliseconds=+c+1e3*u+6e4*l+36e5*d,this._days=+o+7*r,this._montion pe(e,n,i,a){var s=n._milliseconds,r=n._days,o=n._months;a=null==a||a,s&&e._d.setTime(+e._d+s*i),r&&Ge(e,"Date",Be(e,"Date")+r*i),o&&Re(e,Be(e,"Month")+o*i),a&&t.updateOffset(e,r||o)}function me(e){return"[object Array]"===Object.prototype.toString.call(e)}function fe(e){return"[object Date]"===Object.prototype.toStr||0!==e._a[_])?u:e._a[c]<0||e._a[c]>59?c:e._a[h]<0||e._a[h]>59?h:e._a[_]<0||e._a[_]>999?_:-1,e._pf._overflowDayOfYear&&(t<o||t>l)&&(t=l),e._pf.overflow=t)}function ke(t){return null==t._isValid&&(t._isValid=!isNaN(t._d.getTime())&&t._pf.overflow<0&&!t._pf.empty&&!t._pf.invalidMonth&&!t._pf.nullInput&&!t._pf.invalidFormat&&!t._pf.userInvalidated,t._strict&&(t._isValid=t._isValid&&0===t._pf.charsLeftOver&&0===t._pf.unusedTokens.length&&t._pf.bigHour===e)),t._isValid}function Se(e){return e?e.toLowerCase().replace("_","-"):e}function xe(e){var n=null;if(!p[e]&&f)try{n=t.locale(),require("./locale/"+e),t.locale(n)}catch(e){}return p[e]}function Ce(e,n){var i,a;return n._isUTC?(i=n.clone(),a=(t.isMoment(e)||fe(e)?+e:+t(e))-+i,i._d.setTime(+i._d+a),t.updateOffset(i,!1),i):t(e).local()}function $e(e,t){return e.,n,i,a=e.match(v);for(t=0,n=a.length;t<n;t++)V[a[t]]?a[t]=V[a[t]]ace(match(S)||[],n=((t[t.length-1]||[])+"").match(F)||["-",0,0],i=60*n[1]+Le(n[2]);return"+"===n[0]?i:-i}function Ae(e,n,i){var a,s=i._a;switch(e){case"Q":null!=n&&(s[d]=3*(Le(n)-1));break;case"M":case"MM":null!=n&&(s[d]=Le(n)-1);break;case"MMM":case"MMMM":null!=(a=i._locale.monthsParse(n,e,i._strict))?s[d]=a:i._pf.invalidMonth=n;break;case"D":case"DD":null!=n&&(s[l]=Le(n));break;case"Do":null!=n&&(s[l]=Le(parseInt(n.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=n&&(i._dayOfYear=Le(n));break;case"YY":s[o]=t.parseTwoDigitYear(n);breH":s[u]=Le(n);break;case"m":case"mm":s[c]=Le(n);break;case"s":case"ss":s[h]=Le(n);break;case"S":case"SS":case"SSS":case"SSSS":s[_]=Le(1e3*("0."+n));break;case"x":i._d=new Date(Le(n));break;case"X":i._d=new Date(1e3*parseFloat(n));break;case"Z":case"ZZ":i._useUTC=!0,i._tzm=Ee(n);break;case"dd":case"ddd":case"dddd":null!=(a=i._locale.weekdaysParse(n))?(i._w=i._w||{},i._w.d=a):i._pf.invalidWeekday=n;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),n&&(i._w=i._w||{},i._w[e]=Le(n));break;case"gg":case"GG":i._w=i._w||{},i._w[e]=t.parseTwoDigitYear(n)}}function Oe(e){var n,i,a,s,r,d,l;null!=(n=e._w).GG||null!=n.W||null!=n.E?(r=1,d=4,i=Q(n.GG,e._a[o],Ue(t(),1,4).year),a=Q(n.W,1),s=Q(n.E,1)):(r=e._locale._week.dow,d=e._locale._week.doy,i=Q(n.gg,e._a[o],Ue(t(),r,d).year),a=Q(n.w,1),null!=n.d?(s=n.d)<r&&++a:s=null!=n.e?n.e+r:r),l=function(e,t,n,i,a){var s,r=Fe(e,0,1).getUTCDay();return{year:(s=7*(t-1)+((n=null!=n?n:a)-a)+(a-(r=0===r?7:r)+(r>i?7:0)-(r<a?7:0))+1)>0?e:e-1,dayOfYear:s>0?s:Te(e-1)+s}}(i,a,s,d,r),e._a[o]=l.year,e._dayOfYear=l.dayOfYear}function ze(e){var t,n,i,a,s=[];if(!e._d){for(i=function(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),edInput.push(_),!0===n._pf.bigHour&&n._a[u]<=12&&(n._pf.bigHour=e),n._a[u]=(d=n._locale,l=n._a[u],null==(c=n._meridiem)?l:null!=d.meridiemHour?d.meridiemHour(l,c):null!=d.isPM?((h=d.isPM(c))&&l<12&&(l+=12),h||12!==l||(l=0),l):l),ze(n),De(n)}else He(n)}function He(e){var t,n,i=e._i,a=W.exec(i);if(a){for(e._pf.iso=!0,t=0,n=H.length;t<n;t++)if(H[t][1].exec(i)){e._f=H[t][0]+(a[6]||" ");break}for(t=0,n=I.length;t<n;t++)if(I[t][1].exec(i)){e._f+=I[t][0];break}i.match(S)&&(e._f+="Z"),We(e)}else e._isValid=!1}function Ie(n){var i,a=n._i;a===e?n._d=new Date:fe(a)?n._d=new Date(+a):null!==(i=y.exec(a))?n._d=new Date(+i[1]):"string"==typeof a?function(e){He(e),!1===e._isValid&&(delete e._isValid,t.createFromInputFallback(e))}(n):me(a)?(n._a=function(e,ton(e){var t;e._d||(t=Me(e._i),e._a=[t.year,Date.UTC.apply(null,arguments));return e<1970&&t.setUTCFullYear(e),t}function Ue(e,n,i){var a,s=i-n,r=i-e.day();return r>s&&(r-=7),r<s-7&&(r+=7),a=t(e).add(r,"d"),{week:Math.ceil(a.dayOfYear()/7),year:a.year()}}function Ne(n){var i,a=n._i,s=n._f;return n._locale=n._locale||t.localeData(n._l),null===a||s=))}function qe(e,n){var i,a;if(1===n.length&&me(n[0])&&(n=n[0]),!n.length)return t();for(i=n[0],a=1;a<n.length;++a)n[a][e](i)&&(i=n[a]);return i}for(V.DDDD=ie(V.DDD,3),de(se.prototype,{set:function(e){var t,n;for(n in e)"function"==typeof(t=e[n])?this[n]=t:this["_"+n]=t;this._ordinalParseLenient=new RegExp(thimonths:"Januar;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(s=t.utc([2e3,a]),i&&!this._lon"+thiarse[a]=new RegExp(r.replace(".",""),"i")),i&&"MMMM"===n&&this._longMonthsParse[a].test(e))return a;if(i&&"MMM"===n&&this._shortMonthsParse[a].test(e))return a;if(!i&&this._monthsParse[a].test(e))return a}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_FraysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysM<7;n++)if(tekdaysMie(".",""),"i")),this._weekdaysParse[n].test(e))return n},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,functio LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t,n){var i=this._calendar[e];return"function"==typeof i?i.apply(t,[n]):i},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mmd days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:n"==ty){returUe(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),(t=function(t,n,i,a){var s;return"boolean"==typeof i&&(a=i,i=e),(s={})._isAMomentObjkens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1},Ne(s)}).suppressDeprecationWarnings=!1,t.createFromInputFallback=ne("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),t.min=function(){return qe("isBefore",[].slice.call(arguments,0))},t.max=)},t.utc=function(t,n,i,a){var s;return"boolean"==typeof i&&(a=i,ieUTC=!0,s.nvalidMonth:nultion(e,n){var i,a,s,r,o,d,p,m=e,f=null;return t.isDuration(e)?m={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(mn m||"to"in).millisecond),(m={}).ms=(r=p).milliseconds,(i=void 0!==n?t.defineLocale(e,turn null!==n?(n.abbr=e,p[e]||(p[e]=new se),p[e].set(n),t.lomoment.locallocaleData=function(e._locale._abbr),!e)return t._locale;if(!me(e)){if(n=xe(e))return n;e=[e]}r){for(e[s+1]))a,n,!0)(e){return enthsParsreturn e._d["get"+(e._isUTC?"UTC":"")+t]()}functi{return null!s,n),this)0*e/146097}function Ke(e){return 146097*e/400}funclid=funseZone=function(){return t.apply(null,arguments).parseZone()},t.parseTwoDigitYear=function(e){return Le(e)+(Le(e)>68?1900:2e3)},t.isDate=fe,de(t.fn=re.prototype,{clone:function(){return t(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=t(this).utc();return 0<e.year()&&e.year()<=9999?"function"==typ.SSS[Z]"]")},toArs._a):t(thifunctical:ction(e,t,n){var i,a,s=Ce(e,tt?i/1eturn t.duration({to:this,from:e}).locale(this.locale()).humanize(!n)},fromNow:function(e){return this.from(t(),e)},calendar:function(e){var n=e||t(),i=Ce(n,this).startOf("eData().car())},i_d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){if("string"==typeof e)if(isNaN(e)){if("numInt(e,10);return e}(e,this.localeData()),this.add(e-t,"d")):t},month:Je("Month",!0),startOf:function(e){swinth":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.secony(1),"quartond"))?+(i=t.isMoment(e)?+e:+t(e),+this.clone().endOf(n)<(e,n)&&this.isBefore(t,n)},isSame:function(e,n){var i;retut(e)?e:t(et.min instead. https:ull,argumentated, use is?this:moment/moOffset:functEe(e)s._isUTCration(egeInProgresreturn!this._is._isUTC},isUn thn(){ this._his.utcOffset()-e)%60==0},daysInMonth:function(){return Ye(this.year(),this.month())},dayOfYear:function(e){var n=s((t(this).startOf("day")-t(this).startOrter:function(e){return null==e?Math.ceil((this.month()+1)/Ue(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=Ue(this,1,4).year;return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=Ue(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return we(this.year(n){),t.fnllisecon.hours=Je("Hours",!0),t.fn.date=Je("Date",!0),t.fn.dates=ne("dates accessor is deprecated. Use date instead.",Je("Date",!0)),t.fn.year=Je("FullYear",!0),t.fn.years=ne("years accessor is deprecated. Use year instead.",Je("FullYear",!0)),t.fn.days=t.fn.day,t.fn.months=t.fn.month,t.fn.weeks=t.fn.week,t.fn.isoWeeks=t.fn.isoWeek,t.fn.quarters=t.fn.quarter,t.fn.toJSON=t.fn.toISOString,tle:function(){var e,t,n,i=this._milliseconds,a=this._days,s=this._months,r=this._data,o=0;r.milliseconue(s/12),_monabs.as("h")),u=s(r.as("d")),c=s(r.as("M")),h=s(r.as("y")),(_=o<B.s&&["s",o]||1===d&&["m"]||d<B.m&&["mm",d]||1===l&&["h"]||l<B.h&&["hh",l]||1===u&&["d"]||u<B.d&&["dd",u]||1===c&&["M"]||c<B.Me(),this},subtract:function(e,n){var i=t.duration(liseconds,this._days-=i._days,this._months-=i._months,this._bubble(),this},get:fun),"month"===e?n:n/12;switch(t=this._days+Math.round(Ke(this._months/12)),e){case"week":return t/7+this._milliseconds/6048e5;case"day":return t+this._milliseconds/864e5;case"hour":return 24*t+this._milliseconds/36e5;case"minute":return 24*t*60+this._milliseconds/6e4;case"second":return 24*t*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*t*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+e)}},lang:t.fn.lang,locale:t.fn.locale,toIsoString:ne("toIsoString() is depring()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),i=Math.abs(this.hours()),a=Math.abs(this.minutes()),s=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(i||a||s?"T":"")+(i?i+"H":"")+(a?a+"M":"")+(s?s+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),t.duration..toLowerCase());function Xe(e){"undefined"==typeof ender&&(n=a.moment,a.moment=e?ne("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",t):t)}t.duration.fn.asMilliseconds=function(){return this.as("ms")},t.duration.fn.asSeconds=function(){return this.as("s")},t.duration.fn.asMinutes=function(){return this.as("m")},t.duration.fn.asHours=function(){return this.as("h")},t.duration.fn.asDays=function(){return this.as("d")},t.duration.fn.asWeeks=function(){return this.as("weeks")},t.duration.fn.asMonths=function(){return this.as("M")},t.duration.fn.asYears=function(){return this.as("y")},t.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===Le(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),function(e){e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})}(t),function(e){var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خD MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقا�d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}(t),function(e){e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})}(t),function(e){var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},i=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},a={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},s=function(e){return function(t,n,s,r){var o=i(t),d=a[e][i(t)];return 2===o&&(d=d[n?0:1]),d.replace(/%d/i,t)}},r=["كانون الثاني يناير","شباط فبراير","آذار مايس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:s("s"),m:s("m"),mm:s("m"),h:s("h"),hh:s("h"),d:s("d"),dd:s("d"),M:s("M"),MM:s("M"),y:s("y"),yy:s("y")},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}(t),function(e){var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nnths:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var n=e%10,i=e%100-n,a=e>=100?100:null;return e+(t[n]||t[i]||t[a])},week:{dow:1,doy:7}})}(t),function(e){function t(e,t,n){var i,a,s={mm:t?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:t?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===n?t?"хвіліна":"хвіліну":"h"===n?t?"гадзіна":"гадзіну":e+" "+(i=+e,a=s[n].split("_"),i%10==1&&i%100!=11?a[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?a[1]:a[2])}e.defineLocale("be",{months:function(e,t){var n={nominative:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),accusative:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")},i=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative";return n[i][e.month()]},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:function(e,t){var n={nominative:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),accusative:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")},i=/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(t)?"accusative":"nominative";return n[i][e.day()]},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:t,mm:t,h:t,hh:t,d:"дзень",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}(t),function(e){var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","�্রিল_মে_জুন_জুল্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),weekdaysMin:"রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কএক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/রাত|শকাল|দুপুর|বিকেল|রাত/,isPM:function(e){return/^(দুপুর|বিকেল|রাত)$/.test(e)},meridiem:function(e,t,n){return e<4?"রাত":e<10?"শকাল":e<17?"দুপুর":e<20?"বিকেল":"রাত"},week:{dow:0,doy:6}})}(t),function(e){var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཽ�་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),week��ིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,isPM:function(e){return/^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e)},meridiem:function(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}})}(t),function(t){function n(t,n,i){return t+" "+function(t,n){return 2===n?function(t){var n={m:"v",b:"v",d:"z"};return n[t.charAt(0)]===e?t:n[t.charAt(0)]+t.substring(1)}(t):t}({mm:"munutenn",MM:"miz",dd:"devezh"}[i],t)}t.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un:n,M:"ur miz",MM:n,y:"ur bloaz",yy:function(e){switch(function e(t){return t>9?e(t%10):t}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var t=1===e?"añ":"vet";return e+t},week:{dow:1,doy:4}})}(t),function(e){function t(e,t,n){var i=e+" ";switch(n){case"m":return t?"jedna minuta":"jedne minute";case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return i+=1===e?"dan":"dana";case"MM":return i+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"jelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}})}(t),function(e){var t="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),n="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");function i(e){return e>1&&e<5&&1!=~~(e/10)}function a(e,t,n,a){var s=e+" ";switch(n){case"s":return t||a?"pár sekund":"pár sekundami";c:s+"dny";case"M":return t||a?"měsíc":"měsícem";case"MM":return t||a?s+(i(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return t||a?"rok":"rokem";case"yy":return t||a?s+(i(e)?"roky":"let"):s+"lety"}}e.defineLocale("cs",{months:t,monthsShort:n,monthsParse:function(e,t){var n,i=[];for(n=0;n<12;n++)i[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return i}(t,n),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("cv",{months:"кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),monthsShort:"кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),weekdays:"вырс�_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кç_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",LLL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",LLLL:"dddd, YYYY [çулхи] MMMM [�нер] LT [сехетре]",nextWeek:"[Çитес] dddd LT [сехетре]",lastWeek:"[Иртнĕ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var t=/сехет$/i.exec(e)?"рен":/çул$/i.exec(e)?"тан":"ран";return e+t},past:"%s каялла",s:"пĕр-ик çеккунт",m:"пĕр минут",mm:"%d минут",h:"пĕр сехет",hh:"%d сехет",d:"пĕр кун",dd:"%d кун",M:"пĕр уйăх",MM:"%d уйăх",y:"пĕр çул",yy:"%d çул"},ordinalParse:/\d{1,2}-мĕш/,ordinal:"%d-мĕш",week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var t=e,n="";return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][t]),e+n},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd [d.] D. MMMM YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){function t(e,t,n,i){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){function t(e,t,n,i){var a={m:["eine Minute","einer Minute"],h:["eine Stunde"M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_�PM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var n=this._calendarEl[e],i=t&&t.hours();return"function"==typeof n&&(n=n.apply(t)),n.replace("{}",i%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}})}(t),function(e){e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December""_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})}(t),function(e){var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,i){return/-MMM-/.test(i)?n[e.month()]:t[e.month()]},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(t),function(e){function t(e,t,n,i){var a={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?a[n][2]?a[n][2]:a[n][1]:i?a[n][0]:a[n][1]}e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("eu",{months:"urtarriina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(t),function(e){var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiemParse:/قبل از ظهر|بعد از ction(e,t,n){return e<12?"قبل ا� ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})}(t),function(e){var t="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),n=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",t[7],t[8],t[9]];function i(e,i,a,s){var r="";switch(a){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"m":return s?"minuutin":"minuutti";case"mm":r=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":r=s?"tunnin":"tuntia";break;case"d":return s?"päivän":"päivä";case"dd":r=s?"p�auden":"kuuoden":"vuosi";case"yy":r=s?"vuoden":"vuotta"}return r=function(e,i){return e<10?i?n[e]:t[e]:e}(e,s)+" "+r}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShoin minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")}})}(t),function(e){e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}})}(t),function(e){var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimbt:functios:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Format:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},samegundos":"en "+e},past:"hai %s",s:"uns segundos",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY LT",LLLL:"dddd, D [ב]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"�_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12"रात"},week:{dow:0,doy:6}})}(e"m":return t?"jedna minuta":"jedne minute";case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return i+=1===e?"dan":"dana";case"MM":return i+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("hr",{months:"sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(t),function(e){var t="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,t,n,i){var a=e;switch(n){case"s":return i||t?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(i||t?" perc":" perce");case"mm":return a+(i||t?" perc":" perce");case"h":return"egy"+(i||t?" óra":" órája");case"hh":return a+(i||t?" óra":" órája");case"d":return"egy"+(i||t?" nap":" napja");case"dd":return a+(i||t?" nap":" napja");case"M":return"egy"+(i||t?" hónap":" hónapja");cas�ve")u",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_autek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return i.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return i.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("hy-am",{months:function(e,t){var n={nominative:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),accusative:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")},i=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative";return n[i][e.month()]},monthsShort:function(e,t){return"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_")[e.month()]},weekdays:function(e,t){return"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_")[e.day()]},weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".sp",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}})}(t),function(e){e.def("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"MinSen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kek:{dow:1,doy:7}})}(t),function(e){function t(e){return e%100==11||e%10!=1}function n(e,n,i,a){var s=e+" ";switch(i){case"s":return n||a?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?s+(n||a?"mínútur":"mínútum"):n?s+"mínúta":s+"mínútu";case"hh":return t(e)?s+(n||a?"klukkustundir":"klukkustundum"):s+"klukkustund";case"d":return n?"dagur":a?"dag":"degi";case"dd":return t(e)?n?s+"dagar":s+(a?"daga":"dögum"):n?s+"dagur":s+(a?"dag":"degi");case"M":return n?"mánuður":a?"mánuð":"mánuði";case"MM":return t(e)?n?s+"mánuðir":s+(a?"mánuði":"mánuðum"):n?s+"mánuður":s+(a?"mánuð":"mánuði");case"y":return n||a?"ár":"ári";case"yy":return t(e)?s+(n||a?"ár":"árum"):s+(n||a?"ár":"ári")}}e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"kdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"LTs秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,n){return �]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}(t),function(e){e.defineLocale("ka",{months:function(e,t){var n={nominative:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),accusative:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},i=/D[oD] *MMMM?/.test(t)?"accusative":"nominative";return n[i][e.month()]},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:function(e,t){var n={nominative:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),accusative:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")},i=/(წინა|შემდეგ)/.test(t)?"accusative":"nominative";return n[i][e.day()]},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წ",h:"ს� თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("km",{months:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដ��ត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[ថ្ងៃនៈ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,n){return e<12?"오전":"오후"}})}(t),function(e){function t(e,t,n,i){var a={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?a[n][0]:a[n][1]}function n(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10,i=e/10;return n(0===t?i:t)}if(e<1e4){for(;e>=10;)e/=10;return n(e)}return n(e/=1e3)}e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:funcast:function(e){return n(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},ordinalParse:/\d{1m:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},n="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");function i(e,t,n,i){return t?s(n)[0]:i?s(n)[1]:s(n)[2]}function a(e){return e%10==0||e>10&&e<20}function s(e){return t[e].split("_")}function r(e,t,n,r){var o=e+" ";return 1===e?o+i(0,t,n[0],r):t?o+(a(e)?s(n)[1]:s(n)[0]):r?o+s(n)[1]:o+(a(e)?s(n)[1]:s(n)[2])}e.defineLocale("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:function(e,t){var i=-1===t.indexOf("dddd HH:mm"),a=n[e.day()];return i?a:a.substring(0,a.length-2)+"į"},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",laslse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function(e,t,n,i){return t?"kelios sekundės":i?"kelių sekundžių":"kelias sekundes"},m:i,mm:r,h:i,hh:r,d:i,dd:r,M:i,MM:r,y:i,yy:r},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})}(t),function(e){var t={mm:"minūti_minūtes_minūte_minūtes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mēnesi_mēnešus_mēnesis_mēneši",yy:"gadu_gadus_gads_gadi"};function n(e,n,i){return e+" "+function(e,t,n){var i=e.split("_");return n?t%10==1&&11!==t?i[2]:i[3]:t%10==1&&11!==t?i[0]:i[1]}(t[i],e,n)}e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[R�oy:4}})}(t),function(e){e.�т_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".е во] LT",nextWeek:"dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Во изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Во изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[�"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%dത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,isPM:function(e){return/^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e)},meridiem:function(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}})}(t),function(e){var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%s नंतर",past:"%s पूर्वी",s:"सेकंद",m:"एक मिनिट",mm:"%d मिनिटे",h:"एक तास",hh:"%d तास",d:"एक दिवस",dd:"%d दिवस",M:"एक महिना",MM:"%d महिने",y:"एक वर्ष",yy:"%d वर्षे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात्री"===t?e<4?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0},meridiem:function(e,t,n){return eember_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini�ီ_ဖေဖော်ဝါရီ_မတ်_ဧပ�ာက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေးt("_"),longDateFormat:{LT:"HH:mm]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"�ion(e){return t[e]})},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tirs_ons_tors_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"H.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett min{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_ज�अक्टो._नोभे._डिसे.".split("_"),weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आइ._सो._मङ्_बु._बि._शु._श.".split("_"),longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,meridiemHour:function(e,t){return 12===e&&(e=0),"राती"===t?e<3?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"बेलुका"===t||"साँझ"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"राती":e<10?"बिहान":e<15?"दिउँसो":e<18?"बेलुका":e<20?"साँझ":"राती"},calendar:{sameDay:"[आज] LT",nextDay:"[भोली] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडी",s:"केही समय",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:1,doy:7}})}(t),function(e){var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,i){return/-MMM-/.test(i)?n[e.month()]:t[e.month()]},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{futureéén minuen",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:�ande] dddd [klokka] LT",sameEl{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function i(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function a(e,t,n){var a=e+" ";switch(n){case"m":return t?"minuta":"minutę";case"mm":return a+(i(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return a+(i(e)?"godziny":"godzin");case"MM":return a+(i(e)?"miesiące":"miesięcy");case"yy":return a+(i(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,i){return/D MMMM/.test(i)?n[e.month()]:t[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutrowitch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [às] LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Aman[às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0:"em %s",pastmês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"})}(t),function(e){e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMMHoje às]",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(t),function(e){function t(e,t,n){var i=" ";return(e%100>=20||e>=100&&e%100==0)&&(i=" de "),e+i+{mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"}[n]}e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}})}(t),function(e){function t(e,t,n){var i,a,s={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===n?t?"минута":"минуту":e+" "+(i=+e,a=s[n].split("_"),i%10==1&&i%100!=11?a[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?a[1]:a[2])}e.defineLocale("ru",{months:function(e,t){var n={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},i=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative";return n[i][e.month()]},monthsShort:function(e,t){var n={nominative:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"я�?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t)?"accusative":"nominative";return n[i][e.month()]},weekdays:function(e,t){var n={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},i=/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t)?"accusative":"nominative";return n[i][e.day()]},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:7}})}(t),function(e){var t="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");fuurn t||a?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":a?"minútu":"minútou";case"mm":return t||a?s+(i(e)?"minúty":"minút"):s+"minútami";case"h":return t?"hodina":a?"hodinu":"hodinou";case"hh":return t||a?s+(i(e)?"hodiny":"hodín"):s+"hodinami";case"d":return t||a?"deň":"dňom";case"dd":return t||a?s+(i(e)?"dni":"dní"):s+"dňami";case"M":return t||a?"mesiac":"mesiacom";case"MM":return t||a?s+(i(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return t||a?"rok":"rokom";case"yy":return t||a?s+(i(e)?"roky":"rokov"):s+"rokmi"}}e.defineLocale("sk",{months:t,monthsShort:n,monthsParse:function(e,t){var n,i=[];for(n=0;n<12;n++)i[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return i}(t,n),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v (this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"iveTime:{a,y:a,yy:a},ordinalParse:/\d{1,2}\./,ono minuto";case"mm":return i+=1===e?"minuta":2===e?"minuti":3===e||4===e?"minute":"minut";case"h":return t?"ena ura":"eno uro";case"hh":return i+=1===e?"ura":2===e?"uri":3===e||4===e?"ure":"ur";case"dd":return i+=1===e?"dan":"dni";case"MM":return i+=1===e?"mesec":2===e?"meseca":3===e||4===e?"mesece":"mesecev";case"yy":return i+=1===e?"leto":2===e?"leti":3===e||4===e?"leta":"let"}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"%s nazaj",s:"nekaj sekund",m:t,mm:t,h:t,hh:t,d:"en dan",dd:t,M:"en mesec",MM:t,y:"eno leto",yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%�едан� сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"]rammatica+" "+t.coјун","јул","август","септембар","октобар","новембар","децембар"],monthsShort:["јан.","феб.","мар.","апр.","мај","јун","јул","авг.","сеп.","окт.","нов.","дец."],weekdays:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],weekdaysShort:["нед.","пон.","уто.","сре.","чет.","пет.","суб."],weekdaysMin:["не","по","ут","ср","че","пе","су"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";c[прошог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","о секунди",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,dute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,i){var a=t.words[i];return 1===i.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};e.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","če","pe","su"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:rtranslate,h:t.translate,hh:t.translate,d:"dan":"godinu",yy:t.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"dddd LT",lastWeek:"[Förra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"e":1===t?"a":2===t?"a":"e";return e+n},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,doy:6}})}(t),function(e){e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),longDateFormat:{LT:"H นาฬิกา m นาที",LTS:"LT s วินาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา LT",LLLL:"วันddddที่ D MMMM YYYY เวลา LT"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}(t),function(e){e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_MiLTy:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"ng minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(t),function(e){var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(i e+"'ıncı";var n=e%10,i=e%100-n,a=e>=100?100:null;return e+(t[n]||t[i]||t[a])},week:{dow:1,doy:7}})}(t),function(e){e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameE��ⵙⵉ�eekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})}(t),function(e){function t(e,t,n){var i,a;return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+(i=+e,на_хвилини_хвилин",hh:"година_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[n].split("_"),i%10==1&&i%100!=11?a[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?a[1]:a[2])}function n(e){return function(){return e+"о"+(11===thiнь_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},i=/D[oD]? *MMMM?/.test(t)?"accusative":"nominative";return n[i][e.month()]},mрв_лип_�неділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},i=/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative";return n[i][e.day()]},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split(":"dddd, D MstWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return n("[Минулої] dddd [").call(this);cativeTime:{futu%s тому,yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"веч�t){cas:ret}(t),�варь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_ПайLL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:кин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:����("YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calenda",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二�split("_""),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年M=t?e:"�整]":"[).startOf("week"),n=this.unix()-t.unix()>=604800?"[下]":"[本]",0===this.minutes()?n+"dddAh点整":n+"dddAh点mm"},lastWeek:function(){var t,n;return t=e().startOf("week"),n=this.unix()<t.unix()?"[上]":"[本]",0===this.minutes()urn e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}(t),function(e){e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七��四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YiemParse:/早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var i=100*e+t;return i<900?"早上":i<1130?"上午":i<1230?"中午":i<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d分鐘",h:"一小時",hh:"%d小時",d:"一天",dd:"%d天",M:"一個月",MM:"%d個月",y:"一年",yy:"%d年"}})}(t),t.locale("en"),f?module.exports=t:"function"==typeof define&&define.amd?(define(function(e,i,s){return s.config&&s.config()&&!0===s.config().noGlobal&&(a.moment=n),t}),Xe(!0)):Xe()}.call(this),function(e){!function(t){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],t);else if("object"==typeof exports)t(require("jquery"),require("moment"));else{if(void 0===e)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";t(e,moment)}}(function(e,t){"use strict";if(!t)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var n=function(n,i){var a,s,r,o,d,l,u,c={},h=t().startOf("d"),_,Y=["defaulape:27,27:"es");case"d":){return("datepicker").append((c=e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action","previous").append(e("<span>").addClass(i.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",i.calendarWeeks?"6":"5")).append(e("<th>").addClass("next").attr("data-action","next").append(e("<span>").addClass(i.iconle-condensed").appeddClass("timepicker-addClass("btn")."data-action","showMinutes"))),r.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1"}).addClass("btn").attr("data-action","decrementMinutes").append(e("<span>").addClass(i.icons.down))))),b("s")&&(b("m")&&(n.append(eabindex:"-1"}).end(e("<a>").attr({href:"#",tabindex:"-1"}).addClass("btn").attr("data-action","decrementSeconds").append(e("<span>").addClass(i.icons.down))))),s||(n.append(e("<td>").addClass("separator")),a.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr("data-action","togglePeriod"))),r.append(e("<td>").addClass("separator"))),e("<divpicker").apondensedd"),y=e("<li>").addClass("picker-switch"+(i.collapse?" accordion-toggle":"")).append((t=[],i.showTodayButton&&t.push(e("<td>").append(e("<a>").attr("data-action","today").append(e("<span>").addClass(i.icons.today)))),!i.sideBySide&&k()&&D()&&t.push(e("<td>").append(e("<a>").attr("data-action","togglePicker").append(e("<span>").addClass(i.icons.time)))),i.showClear&&t.push(e("<tpan>").addClass(i.icons.close)))),e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))));return i.inline&&_.removeClass("dropdown-menu"),s&&_.addClass("usetwentyfour"),i.sideBySide&&k()&&D()?(_.addClass("timepicker-sbs"),_.append(e("<div>").addClass("row").append(p.addClass("col-sm-6")).append(m.addClass("col-sm-6"))),_.append(y),_):("top"===i.toolbarPlacement&&f.append(y),k()&&f.append(e("<li>").addClass(i.collapse&&D()?"collapse in":"").append(p)),"default"===i.toolbarPlacement&&f.append(y),D()&&f.append(e("<li>").addClass(i.collapse&&k()?"collapse":"").append(m)),"bottos=(m||n).offset(),r=i.widgetPositioning.vertical,o=i.widgetPositioning.horizontal;if(i.widgetParent)t=i.widgetParent.append(f);else if(n.is("input"))t=n.parent().append(f);else{if(i.inline)return void(t=n.append(f));t=n,n.children().first().after(f)}if("auto"===r&&(r=s.top+1.5*f.height()>=e(window).height()+e(window).scrollTop()&&f.height()"top").removeClass("bottom"):f.addClass("bottom").removeClass("top"),"right"===o?f.addClass("pull-right"):f.removeClass("pull-right"),"relative"!==t.css("position")&&(t=t.parents().filter(function(){return"relative"===e(this).css("position")}).first()),0===t.length)throw new Error("datetimepicker component should be placed within a relative positioned container");f.css({top:"top"===r?"auto":a.top+n.outerHeight(),bottom:"top"===r?a.top+n.outerHeight():"auto",left:"left"===o?t.css("padding-left"):"auto",right:"left"===o?"auto":t.width()-n.outerWidth()})},C=function(e){"dp.change"===e.type&&(e.date&&e.date.isSame(e.oldDate)||!e.date&&!e.oldDate)||n.trigger(e)},$=function(e){f&&(e&&(d=Math.max(y,Math.min(2,d+e))),f.find(".datepicker > div").hide().filter(".datepicker-"+g[d].clsName).show())},j=function(e,t){return!!e.isValid()&&((!i.disabledDates||(n=e,!0!==i.disabledDates[n.format("YYYY-MM-DD")])||"M"===t)&&(!(i.enabledDates&&!function(e){return!0===i.enabledDates[e.format("YYYY-MM-DD")]}(e)&&"M"!==t)&&((!i.minDate||!e.isBefore(i.minDate,t))&&((!i.maxDate||!e.isAfter(i.maxDate,t))&&("d"!==t||-1===i.daysOfWeekDisabled.indexOf(e.day()))))));var n},P=function(){var n,a,s,r=f.find(".datepicker-days"),o=r.find("th"),d=[];if(k()){for(r.find(".disabled").removeClass("disabled"),o.eq(1).text(_.format(i.dayViewHeaderFormat)),j(_.clone().subtract(1,"M"),"M")||o.eq(0).addClass("disabled"),j(_.clone().add(1,"M"),"M")||o.eq(2).addClass("disabled"),n=_.clone().startOf("M").startOf("week");!_.clone().endOf("M").endOf("w").isBefore(n,"d");)0===n.weekday()&&(a=e("<tr>"),i.calendarWeeks&&a.append('<td class="cw">'+n.week()+"</td>"),d.push(a)),s="",n.isBefore(_,"M")&&(s+=" old"),n.isAfter(_,"M")&&(s+=" new"),n.isSame(h,"d")&&!p&&(s+=" active"),j(n,"d")||(s+=" disabled"),n.isSame(t(),"d")&&(s+=" today"),0!==n.day()&&6!==n.day()||(s+=" weekend"),a.append('<td data-action="selectDay" class="day'+s+'">'+n.date()+"</td>"),n.add(1,"d");var l,u,c;r.find("tbody").empty().append(d),l=f.find(".datepicker-months"),u=l.find("th"),c=l.find("tbody").find("span"),l.find(".disabled").removeClass("dine.addClaass("active"),h.isSame(_,"y")&&c.eq(h.month()).addClass("active"),c.each(function(t){j(_.clone().month(t),"M")||e(this).addClass("disabled")}),function(){var e=f.find(".datepicker-years"),t=e.find("th"),n=_.clone().subtract(5,"y"),a=_.clone().add(6,"y"),s="";for(e.find(".disabled").removeClass("disabled"),i.minDate&&i.minDate.isAfter(n,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(n.year()+"-"+a.year()),i.maxDate&&i.maxDate.isBefore(a,"y")&&t.eq(2).addClass("disabled");!n.isAfter(a,"y");)s+='<span data-action="selectYear" class="year'+(n.isSame(h,"y")?" active":"")+(j(n,"y")?"":" disabled")+'">'+n.year()+"</span>",n.add(1,"y");e.find("td").html(s)}()}},E=function(){var t=f.find(".timepicker span[data-time-component]");s||f.find(".timepicker [data-action=togglePeriod]").text(h.format("A")),t.filter("[data-time-component=hours]").text(h.format(s?"HH":"hh")),t.filter("[data-time-component=minutes]").text(h.format("mm")),t.filter("[data-time-component=seconds]").text(h.format("ss")),function(){var t=f.find(".timepicker-hours table"),n=_.clone().startOf("d"),i=[],a=e("<tr>");for(_.hour()>11&&!s&&n.hour(12);n.isSame(_,"d")&&(s||_.hour()<12&&n.hour()<12||_.hour()>11);)n.hour()%4==0&&(a=e("<tr>"),i.push(a)),a.append('<td data-action="selectHour" class="hour'+(j(n,"h")?"":" disabled")+'">'+n.format(s?"HH":"hh")+"</td>"),n.add(1,"h");t.empty().append(i)}(),function(){for(var t=f.find(".timepicker-minutes table"),n=_.clone().startOf("h"),a=[],s=e("<tr>"),r=1===i.stepping?5:i.stepping;_.isSame(n,"h");)n.minute()%(4*r)==0&&(s=e("<tr>"),a.push(s)),s.append('<td data-action="selectMinute" class="minute'+(j(n,"m")?"":" disabled")+'">'+n.format("mm")+"</td>"),n.add(r,"m");t.empty().append(a)}(),function(){for(var t=f.find(".timepicker-seconds table"),n=_.clone().startOf("m"),i=[],a=e("<tr>");_.isSame(n,"m");)n.second()%20==0&&(a=e("<tr>"),i.push(a)),a.append('<td data-action="selectSecond" class="second'+(j(n,"s")?"":" disabled")+'">'+n.format("ss")+"</td>"),n.add(5,"s");t.empty().append(i)}()},A=function(){f&&(P(),E())},O=function(e){var t=p?null:h;if(!e)return p=!0,a.val(""),n.data("date",""),C({type:"dp.change",date:null,oldDate:t}),void A();e=e.clone().locale(i.locale),1!==i.stepping&&e.minutes(Math.round(e.minutes()/i.stepping)*i.stepping%60).seconds(0),j(e)?(_=(h=e).clone(),a.val(h.format(r)),n.data("date",h.format(r)),A(),p=!1,C({type:"dp.change",date:h.clone(),oldDate:t})):(i.keepInvalid||a.val(p?"":h.format(r)),C({type:"dp.error",date:e}))},z=function(){var t=!1;return f?(f.find(".collapse").each(function(){var n=e(this).data("collapse");return!n||!n.transitioning||(t=!0,!1)}),t?c:(m&&m.hasClass("btn")&&m.toggleClass("active"),f.hide(),e(window).off("resize",x),f.off("click","[data-action]"),f.off("mousedown",!1),f.remove(),f=!1,C({type:"dp.hide",date:h.clone()}),c)):c},W=function(){O(null)},H={next:function(){_.add(g[d].navStep,g[d].navFnc),P()},previous:function(){_.subtract(g[d].navStep,g[d].navFnc),P()},pickerSwitch:function(){$(1)},selectMonth:function(t){var n=e(t.target).closest("tbody").find("span").index(e(t.target));_.month(n),d===y?(O(h.clone().year(_.year()).month(_.month())),i.inline||z()):($(-1),P())},selectYear:function(t){var n=parseInt(e(t.target).text(),10)||0;_.year(n),d===y?(O(h.clone().year(_.year())),i.inline||z()):($(-1),P())},selectDay:function(t){var n=_.clone();e(t.target).is(".old")&&n.subtract(1,"M"),e(t.target).is(".new")&&n.add(1,"M"),O(n.date(parseInt(e(t.target).text(),10))),D()||i.keepOpen||i.inline||z()},incrementHours:function(){O(h.clone().add(1,"h"))},incrementMinutes:function(){O(h.clone().add(i.stepping,"m"))},incrementSeconds:function(){O(h.clone().add(1,"s"))},decrementHours:function(){O(h.clone().subtract(1,"h"))},decrementMinutes:function(){O(h.clone().subtract(i.stepping,"m"))},decrementSeconds:function(){O(h.clone().subtract(1,"s"))},togglePeriod:function(){O(h.clone().add(h.hours()>=12?-12:12,"h"))},togglePicker:function(t){var n,a=e(t.target),s=a.closest("ul"),r=s.find(".in"),o=s.find(".collapse:not(.in)");if(r&&r.length){if((n=r.data("collapse"))&&n.transitioning)return;r.collapse?(r.collapse("hide"),o.collapse("show")):(r.removeClass("in"),o.addClass("in")),a.is("span")?a.toggleClass(i.icons.time+" "+i.icons.date):a.find("span").toggleClass(i.icons.time+" "+i.icons.date)}},showPicker:function(){f.find(".timepicker > div:not(.timepicker-picker)").hide(),f.find(".timepicker .timepicker-picker").show()},showHours:function(){f.find(".timepi").hide(),f.find(".timepicker .timepicker-hours").show()},showMinutes:function(){f.find(".timepicker .timepicker-picker").hide(),f.find(".tishowSeconds:function(){f.find(".timepicker .timepicker-picker").hide(),f.find(".timepicker .timepicker-seconds").show()},selectHour:function(t){var n=parseInt(e(t.targ||(h.hours()>=12?12!==n&&(n+=12):12===n&&(n=0)),O(h.clone().hours(n)),H.showPicker.call(c)},selectMinute:function(t){O(h.clone().minutes(parseInt(e(t.target).text(),10))),H.showPicker.call(c)},selectSecond:function(t){O(h.clone().seconds(parseInt(e(t.target).text(),10))),H.showPicker.call(c)},clear:W,today:function(){O(t())},close:z},I=function(t){return!e(t.currentTarget).is(".disabled")&&(H[e(t.currentTarget).data("action")].apply(c,arguments),!1)},F=function(){var n;return a.prop("disabled")||!i.ignoreReadonly&&a.prop("readonly")||f?c:(i.useCurrent&&p&&(a.is("input")&&0===a.val().trim().length||i.inline)&&(n=t(),"string"==typeof i.useCurrent&&(n={year:function(e){return e.monseconds(0).minutes(0)},month:function(e){return e.datrn e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}}[i.useCurrent](n)),O(n)),f=S(),function(){var t=e("<tr>"),n=_.clone().startOf("w");for(!0===i.calendarWeeks&&t.append(e("<th>").addClass("cw").text("#"));n.isBefore(_.clone().endOf("w"));)t.append(e("<th>").addClass("dow").text(n.format("dd"))),n.add(1,"d");f.find(".datepicker-days thead").append(t)}(),function(){for(var t=[],n=_.clone().startOf("y").hour(12);n.isSame(_,"y");)t.push(e("<span>").attr("data-action","selectMonth").addClass("month").text(n.format("MMM"))),n.add(1,"M");f.find(".datepicker-months td").empty().append(t)}(),f.find(".timepicker-hours").hide(),f.find(".timepicker-minutes").hide(),f.find(".timepicker-seconds").hide(),A(),$(),e(window).on("resize",x),f.on("click","[data-action]",I),f.on("mousedown",!1),m&&m.hasClass("btn")&&m.toggleClass("active"),f.show(),x(),a.is(":focus")||a.focus(),C({type:"dp.show"}),c)},U=function(){return f?z():F()},N=function(e){return(e=t.isMoment(e)||e instanceof Date?t(e):t(e,o,i.useStrict)).locale(i.locale),e},q=function(e){var t,n,a,s,r=null,o=[],d={},l=e.which;for(t in T[l]="p",T)T.hasOwnProperty(t)&&"p"===T[t]&&(o.push(t),parseInt(t,10)!==l&&(d[t]=!0));for(t in i.keyBinds)if(i.keyBinds.hasOwnProperty(t)&&"function"==typeof i.keyBinds[t]&&(a=t.split(" ")).length===o.length&&w[l]===a[a.length-1]){for(s=!0,n=a.length-2;n>=0;n--)if(!(w[a[n]]in d)){s=!reventDefault())},R=function(e){T[e.which]="r",e.stopPropagation(),e.preventDefault()},B=function(t){var n=e(t.target).val().trim(),i=n?N(n):null;return O(i),t.stopImmediatePropagation(),!1},G=function(t){var n={};return e.each(t,function(){var e=N(this);e.isValid()&&(n[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(n).length&&n},J=function(){var e=i.format||"L LT";r=e.replace(/(\[[^\[]*\])|(\\)?(LTS|Lce(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return h.localeData().longDateFormat(e)||e})}),(o=i.extraFormats?i.extraFormats.slice():[]).indexOf(e)<0&&o.indexOf(r)<0&&o.push(r),s=r.toLowerCase().indexOf("a")<1&&r.indexOf("h")<1,b("y")&&(y=2),b("M")&&(y=1),b("d")&&(y=0),d=Math.max(y,d),p||O(h)};if(c.destroy=function(){z(),a.off({change:B,blur:z,keydown:q,keyup:R}),n.is("input")?a.off({focus:F}):m&&(m.off("click",U),m.off("mousedown",!1)),n.removeData("DateTimePicker"),n.removeData("date")},c.toggle=U,c.show=F,c.hide=z,c.disable=function(){return z(),m&&m.hasClass("btn")&&m.addClass("disabled"),a.prop("disabled",!0),c},c.enable=function(){return m&&m.hasClass("btn")&&m.removeClass("disabled"),a.prop("disabled",!1),c},c.ignoreReadonly=function(e){if(0===arguments.length)return i.ignoreReadonly;if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");return i.ignoreReadonly=e,c},c.options=function(t){if(0===arguments.length)return e.extend(!0,{},i);if(!(t instanceof Object))throw new TypeError("options() options parameter should be an object");return e.extend(!0,i,t),e.each(i,function(e,t){if(void 0===c[e])throw new TypeError("option "+e+" is not recognized!");c[e](t)}),c},c();if(!(null===e||"string"==typeof e||t.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return O(null===e?null:N(e)),c},c.format=function(e){if(0===arguments.length)return i.format;if("string"!=typeof e&&("boolean"!=typeof e||!1!==e))throw new TypeError("format() expects a sting or boolean:false parameter "+e);return i.format=e,r&&J(),c},c.dayViewHeaderFormat=function(e){if(0===arguments.length)return i.dayViewHeaderFormat;if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return i.dayViewHeaderFormat=e,c},c.extraFormats=function(e){if(0===arguments.length)return i.extraFormats;if(!1!==e&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return i.extraFormats=e,o&&J(),c},c.disabledDates=function(t){if(0===argumern i.disabledDates=!1,A(),c;if(!(t instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return i.disabledDates=G(t),i.enabledDates=!1,A(),c},c.enabledDates=function(t){if(0===arguments.length)return i.enabledDates?e.extend({},i.enabledDates):i.enabledDates;if(!t)return i.enabledDates=!1,A(),c;if(!(t instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return i.enabledDates=G(t),i.disabledDates=!1,A(),c},c.daysOfWeekDisabled=function(e){if(0===arguments.length)return i.daysOfWeekDisabled.splice(0);if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");return i.daysOfWeekDisabled=e.reduce(function(e,t){return(t=parseInt(t,10))>6||t<0||isNaN(t)?e:(-1===e.indexOf(t)&&e.push(t),e)},[]).sort(),A(),c},c.maxDate=function(e){if(0===arguments.length)return i.maxDate?i.maxDate.clone():i.maxDate;if("boolean"==typeof e&&!1===e)return i.maxDate=!1,A(),c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=t()));var n=N(e);if(!n.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e);if(i.minDate&&n.isBefore(i.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+n.format(r));return i.maxDate=n,i.maxDate.isBefore(e)&&O(i.maxDate),_.isAfter(n)&&(_=n.clone()),A(),c},c.minDate=function(e){if(0===arguments.length)return i.minDate?i.minDate.clone():i.minDate;if("boolean"==typeof e&&!1===e)return i.minDate=!1,A(),c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=t()));var n=N(e);if(!n.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e);if(i.maxDate&&n.isAfter(i.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+n.format(r));return i.minDate=n,i.minDate.isAfter(e)&&O(i.minDate),_.isBefore(n)&&(_=n.clone()),A(),c},c.defaultDate=function(e){if(0===arguments.length)return i.defaultDate?i.defaultDate.clone():i.defaultDate;if(!e)return i.defaultDate=!1,c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=t()));var n=N(e);if(!n.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e);if(!j(n))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return i.defaultDate=n,i.defaultDate&&""===a.val().trim()&&void 0===a.attr("placeholder")&&O(i.defaultDate),c},c.locale=function(e){if(0===arguments.length)return i.locale;if(!t.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!");return i.locale=e,h.locale(i.locale),_.locale(i.locale),r&&J(),f&&(z(),F()),c},c.stepping=function(e){return 0===arguments.length?i.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),i.stepping=e,c)},c.useCurrent=function(e){var t=["year","month","day","hour","minute"];if(0===arguments.length)return i.useCurrent;if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof e&&-1===t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "));return i.useCurrent=e,c},c.collapse=function(e){if(0===arguments.length)return i.collapse;if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter");return i.collapse===e?c:(i.collapse=e,f&&(z(),F()),c)},c.icons=function(t){if(0===arguments.length)return e.extend({},i.icons);if(!(t instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return e.extend(i.icons,t),f&&(z(),F()),c},c.useStrict=function(e){if(0===arguments.length)return i.useStrict;if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter");return i.useStrict=e,c},c.sideBySide=function(e){if(0===arguments.length)return i.sideBySide;if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter");return i.sideBySide=e,f&&(z(),F()),c},c.viewMode=function(e){if(0===arguments.length)return i.viewMode;if("string"!=typeof e)throw new TypeError("viewMode() expects a string parametede() parameter must be one of ("+M.join(", ")+") value");return i.viewMode=e,d=Math.max(M.indexOf(e),y),$(),c},c.toolbarPlacement=function(e){if(0===arguments.length)return i.toolbarPlacement;if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===Y.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of ("+Y.join(", ")+") value");return i.toolbarPlacement=e,f&&(z(),F()),c},c.widgetPositioning=function(t){if(0===arguments.length)return e.extend({},i.widgetPositioning);if("[object Object]"!=={}.toString.call(t))throw new TypeError("widgetPositioning() expects an object variable");if(t.horizontal){if("string"!=typeof t.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(t.horizontal=t.horizontal.toLowerCase(),-1===L.indexOf(t.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+L.join(", ")+")");i.widgetPositioning.horizontal=t.horizontal}if(t.vertical){if("string"!=typeof t.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(t.vertical=t.vertical.toLowerCase(),-1===v.indexOf(t.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+v.join(", ")+")");i.widgetPositioning.vertical=t.vertical}return A(),c},c.calendarWeeks=function(e){if(0===arguments.length)return i.calendarWeeks;if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return i.calendarWeeks=e,A(),c},c.showTodayButton=function(e){if(0===arguments.length)return i.showTodayButton;if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");return i.showTodayButton=e,f&&(z(),F()),c},c.showClear=function(e){if(0===arguments.length)return i.showClear;if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter");return i.showClear=e,f&&(z(),F()),c},c.widgetParent=function(t){if(0===arguments.length)return i.widgetParent;if("string"==typeof t&&(t=e(t)),null!==t&&"string"!=typeof t&&!(t instanceof e))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return i.widgetParent=t,f&&(z(),F()),c},c.keepOpen=function(e){if(0===arguments.length)return i.keepOpen;if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter");return i.keepOpen=e,c},c.inline=function(e){if(0===arguments.length)return i.inline;if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter");return i.inline=e,c},c.clear=function(){return W(),c},c.keyBinds=function(e){return i.keyBinds=e,c},c.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter");return i.debug=e,c},c.showClose=function(e){if(0===arguments.length)return i.showClose;if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter");return i.showClose=e,c},c.keepInvalid=function(e){if(0===arguments.length)return i.keepInvalid;if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");return i.keepInvalid=e,c},c.datepickerInput=function(e){if(0===arguments.length)return i.datepickerInput;if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter");return i.datepickerInput=e,c},n.is("input"))a=n;else if(0===(a=n.find(i.datepickerInput)).size())a=n.find("input");else if(!a.is("input"))throw new Error('CSS class "'+i.datepickerInput+'" cannot be applied to non input element');if(n.hasClass("input-group")&&(m=0===n.find(".datepickerbutton").size()?n.find('[class^="input-group-"]'):n.find(".datepickerbutton")),!i.inline&&!a.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return e.extend(!0,i,(u={},(l=n.is("input")||i.inline?n.data():n.find("input").data()).dateOptions&&l.dateOptions instanceof Object&&(u=e.extend(!0,u,l.dateOptions)),e.each(i,function(e){var t="date"+e.charAt(0).toUpperCase()+e.slice(1);void 0!==l[t]&&(u[e]=l[t])}),u)),c.options(i),J(),a.on({change:B,blur:i.debug?"":z,keydown:q,keyup:R}),n.is("input")?a.on({focus:F}):m&&(m.on("click",U),m.on("mousedown",!1)),a.prop("disabled")&&c.disable(),a.is("input")&&0!==a.val().trim().length?O(N(a.val().trim())):i.defaultDate&&void 0===a.attr("placeholder")&&O(i.defaultDate),i.inline&&F(),c};e.fn.datetimepicker=function(t){return this.each(function(){var i=e(this);i.data("DateTimePicker")||(t=e.extend(!0,{},e.fn.datetimepicker.defaults,t),i.data("DateTimePicker",n(i,t)))})},e.fn.datetimepicker.defaults={format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:t.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:[],calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")?this.date(n.clone().subtract(7,"d")):this.date(n.clone().add(1,"m"))}},down:function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")?this.date(n.clone().add(7,"d")):this.date(n.clone().subtract(1,"m"))}else this.show()},"control up":function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")?this.date(n.clone().subtract(1,"y")):this.date(n.clone().add(1,"h"))}},"control down":function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")?this.date(n.clone().add(1,"y")):this.date(n.clone().subtract(1,"h"))}},left:function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")&&this.date(n.clone().subtract(1,"d"))}},right:function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")&&this.date(n.clone().add(1,"d"))}},pageUp:function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")&&this.date(n.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var n=this.date()||t();e.find(".datepicker").is(":visible")&&this.date(n.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(t())},delete:function(){this.clear()}},debug:!1}})}("undefined"!=typeof $111?$111:jQuery),function(e){e.fn.validateInput=function(t,n){var i=e(this);if(0==i.length)return!0;if(i.attr("disabled"))return!0;var a=i.attr("id")?i.attr("id"):i.attr("name"),s=i.data("locale");if(void 0!==t&&null!=t&&a==t)return!0;var r=i.attr("data-validate").trim(" ");if(""==r)return!0;if("skip"==(r=-1==r.indexOf(" ")?[r]:r.split(" "))[0])return!0;for(var o,d=!1,l=null,u=i.val().trim(" "),c=i.attr("name"),h=0;h<r.length&&!d;h++){var _=r[h];switch(_){case"required":i.is(":radio")||i.is(":checkbox")?d=e('[name="'+c+'"]:checked').length<=0:""!=u&&0!=u&&u||(d=!0);break;case"required_by":""!=(p=e("#"+r[h+1])).val().trim(" ")&&(""!=u&&0!=u&&u||(d=!0)),h++;break;case"match":var p;""!=(p=e("#"+r[h+1])).val().trim(" ")&&u!=p.val().trim(" ")&&(d=!0),h++;break;case"neq":u==r[h+1]&&(d=!0),h++;break;case"number":d=null!=u.match(/[^0-9]/gi);break;case"alpha":d=null===u.match(/^[a-z\u00C0-\u024F\u1E00-\u1EFF\u0400-\u04FF -]+$/gi);break;case"float":d=null!=u.match(/[^0-9\.]/gi);break;case"telephone":if(s){if(u=u.replace(/[\-\.\,\s\(\)\#\:]/gi,""),"function"==typeof window["validateTelephone"+s.toUpperCase()]){var m=window["validateTelephone"+s.toUpperCase()](u);u=m.sanitizedValue,i.val(u),d=!m.match}}else""!=u&&(u=u.replace(/[\+\-\.\,\s\(\)\#\:]/gi,""),d=null!=u.match(/[^0-9]/gi)||10!=u.length);break;case"email":""!=u&&null==u.match(/^[a-zA-Z0-9+\_\-]+([\.\_\-][a-zA-Z0-9+]+)*@([a-zA-Z0-9\-]+[\.])+[a-zA-Z0-9/-]{2,24}$/gi)&&(d=!0);break;case"no_url":d=""!=u&&null!=u.match(/(https?:\/\/)?www\.[-\w\d@:%._\+~#=]{1,256}\.[\w\d()]{1,6}\b([-\w\d()@:%_\+.~#?&\/\/=]*)/);break;case"no_emoji":d=""!=u&&null!=u.match(/\p{So}/u);break;case"length":d=!(u.length==r[h+1]),h++;break;case"min_val":fVal=parseFloat(u),fMinVal=parseFloat(r[h+1]),d=fVal<fMinVal,h++;break;case"max_val":fVal=parseFloat(u),fMaxVal=parseFloat(r[h+1]),d=fVal>fMaxVal,h++;break;case"min_length":d=!(u.length>=r[h+1]),h++;break;case"max_length":d=!(u.length<=r[h+1]),h++;break;case"check_min":d=e('[name="'+c+'"]:checked').length<r[h+1],h++;break;case"check_max":d=e('[name="'+c+'"]:checked').length>r[h+1],h++;break;case"check_only":d=e('[name="'+c+'"]:checked').length!=r[h+1],h++;break;case"distinct":var f=r[h+1],y="data-gui-distinct-error";try{e(f).each(function(){""==u||e(this).val()!=u||e(this).is(i)||e(this).attr(y)||(d=!0,i.attr(y,!0))}),d||(i.removeAttr(y),e(f).each(function(){e(this).attr(y)&&!e(this).is(i)&&(e(this).removeAttr(y),e(this).validateInput())}))}catch(e){console.warn('GUI: Could not validate distinct using selector "'+f+'". Please check data-validate syntax!')}h++;break;default:"function"==typeof window[_]&&(d=!window[_](u))}d&&(o=_.toLowerCase(),l=i.data("validation-error-"+o)?i.data("validation-error-"+o):i.data("validation-error")?i.data("validation-error"):null)}e(this).trigger("validate",[i,u,!d,l]);var g=e('[data-validate*="required_by '+a+'"]'),M=g.attr("id")?g.attr("id"):g.attr("name");return!d&&g.length&&a!=M&&g.validateInput(a,n),!d},e.fn.guiValidate=function(t){var n=e.extend({scrollToError:!0},t),i=!1;if(e(this).find("[data-validate]").each(function(){e(this).validateInput()||(i=!0)}),i&&n.scrollToError){var a=e(".gui-form-control.-error").first();a.offset().top<e(window).scrollTop()&&e("html, body").animate({scrollTop:a.offset().top-60},"slow"),a.find("input, textarea").first().focus()}return!i},e.fn.clearValidationErrors=function(){return e(this).find(".gui-form-control").removeClass("-error").removeClass("server-error").find(".gui-input-validation").remove(),e(this).find(".gui-input-explain.-is-error").remove(),e(this)},e.fn.enableValidation=function(){return e(this).find("[data-validate]").each(function(){var t=e(this).attr("data-validate");-1!=t.indexOf("skip")&&(t=t.replace("skip ","")),e(this).attr("data-validate",t)}),e(this)},e.fn.disableValidation=function(){return e(this).find("[data-validate]").each(function(){var t=e(this).attr("data-validate");-1==t.indexOf("skip")&&(t="skip "+t),e(this).attr("data-validate",t)}),e(this).clearValidationErrors(),e(this)},e.fn.validateBlock=function(t,n){function i(i){var a=e(i.attr("data-block-validation-option"));i.is(":checked")?(a.enableValidation(),"function"==typeof t&&t(a)):(a.disableValidation(),"function"==typeof n&&n(a))}e(this).find("input[data-block-validation-option]").each(function(){i(e(this)),e(this).on("change",function(){if("radio"==e(this).attr("type")){var t=e(this).attr("name");e('input[name="'+t+'"]').each(function(){i(e(this))})}else i(e(this))})})}}("undefined"!=typeof $111?$111:jQuery),function(e){e.fn.guiNotification=function(t){if(this.length>1)return this.each(function(){e(this).guiNotification(t)}),this;var n=e.extend({selfClosing:5e3},t),i=null,a=e(this),s=function(){clearInterval(i),a.slideUp("normal",function(){a.remove()})};if(a.on("click",".gui-info-close",function(){s()}),0!=n.selfClosing&&a.hasClass("-selfclosing")){var r=e('<span class="gui-info-close -timer"></span>').html(parseInt(n.selfClosing/1e3));a.prepend(r),i=setInterval(function(){r.text(parseInt(r.text())-1),0==parseInt(r.text())&&s()},1e3)}return e(this)}}("undefined"!=typeof $111?$111:jQuery),function(e){e.fn.guiAccordion=function(t){var n=e.extend({closeOther:!0},t);function i(e){e.trigger("beforeClose"),e.find(".gui-accordion-item-content").slideUp(400,function(){e.removeClass("-opened"),e.trigger("afterClose")})}function a(t){var n=t.closest(".gui-accordion"),a=n.data("guiAccordionSettings");t.trigger("beforeOpen"),a.closeOther&&n.find(".gui-accordion-item.-opened").not(t).each(function(t,n){i(e(n))}),t.find(".gui-accordion-item-content").slideDown(400,function(){t.addClass("-opened"),t.trigger("afterOpen")})}return this._init=function(){e(this).each(function(){var t=e(this);t.data("guiAccordion")||(t.data("guiAccordionSettings",n),t.on("click",".gui-accordion-item-head",function(){var t=e(this).parent();t.hasClass("-opened")?i(t):a(t)}),t.data("guiAccordion",!0))})},this._init(),this.close=function(t){if(!isNaN(t))return e(this).each(function(){var n=e(this).find(".gui-accordion-item").eq(t);1==n.length&&i(n)}),this},this.open=function(t){if(!isNaN(t))return e(this).each(function(){var n=e(this).find(".gui-accordion-item").eq(t);1==n.length&&a(n)}),this},this}}("undefined"!=typeof $111?$111:jQuery),function(e){e.fn.guiTabs=function(t){return this.activeTab="",this._init=function(){var t=this;e(this).each(function(){var n=e(this);n.data("guiTabs")||(n.on("click",".gui-tabs-button",function(i){return i.preventDefault(),t.setActive(n,e(this)),!1}),t.setActive(n,n.find(".gui-tabs-button.-active")),n.data("guiTabs",!0))})},this.setActive=function(e,t){var n=t.data("target");t.hasClass("-disabled")||this.activeTab==n||(e.trigger("beforeOpen",[t]),e.find(".-active").removeClass("-active"),e.find(n).addClass("-active"),t.addClass("-active"),e.trigger("afterOpen",[t]))},this.open=function(t){var n=this;e(this).each(function(){n.setActive(e(this),e(this).find(".gui-tabs-button").eq(t))})},this.disable=function(t){e(this).each(function(){e(this).find(".gui-tabs-button").eq(t).addClass("-disabled")})},this.enable=function(t){e(this).each(function(){e(this).find(".gui-tabs-button").eq(t).removeClass("-disabled")})},this._init(),this}}("undefined"!=typeof $111?$111:jQuery),function(e){window.GUI={select2SearchField:!1,initSelect2:function(t){"function"==typeof e.fn.select2.defaults.set&&e.fn.select2.defaults.set("theme","gui");var n=e("body");void 0===t&&(t=n);t.find(".select2").select2({width:"resolve",minimumResultsForSearch:10,allowClear:!0});this.select2SearchField||(n.on("keyup",".select2-search__field",function(){e(".select2-dropdown .select2-results").customScrollbar("resize",!1)}),this.select2SearchField=!0)},notificationsSelfClosing:5e3,initNotifications:function(t){void 0===t&&(t=e("body")),t.find(".gui-info-box").guiNotification({selfClosing:parseInt(this.notificationsSelfClosing)})},initAccordion:function(t){void 0===t&&(t=e("body")),t.find(".gui-accordion").each(function(){var t=void 0!==e(this).data("close-others");e(this).guiAccordion({closeOther:t})})},datePickerOptions:{locale:"en",format:"DD-MM-YYYY",viewMode:"days",inline:!1,sideBySide:!1},initDatePicker:function(t){void 0===t&&(t=e("body")),void 0!==e("html").attr("lang")&&(GUI.datePickerOptions.locale=e("html").attr("lang")),t.find(".gui-datepicker").each(function(){var t=e.extend({},GUI.datePickerOptions);e(this).data("dateformat")&&(t.format=e(this).data("dateformat")),e(this).data("datemode")&&(t.viewMode=e(this).data("datemode")),e(this).hasClass("-inline")&&(t.inline=!0),e(this).hasClass("-side-by-side")&&(t.sideBySide=!0),e(this).datetimepicker(t)})},initTabs:function(t){void 0===t&&(t=e("body")),t.find(".gui-tabs").guiTabs()},initValidation:function(t){void 0===t&&(t=e(document)),t.find('[type="radio"][data-validate],[type="checkbox"][data-validate]').each(function(){var t=e(this).attr("name");e('[name="'+t+'"]').on("change",function(){e('[name="'+t+'"][data-validate]').validateInput()})}),t.on("blur select2:close","[data-validate]:not(:checkbox):not(:radio):not(.disable-blur-validation)",function(){e(this).validateInput()}),t.on("validate","[data-validate]",function(t,n,i,a,s){var r=n,o=i,d=r.closest(".gui-form-control");d.find(".gui-input-validation").remove();var l=r.is(":checkbox")||r.is(":radio")||r.is("select");if(d.find(".gui-input-explain.-is-error").remove(),a)d.removeClass("-error"),r.hasClass("do-not-show-checkmark")||(l?r.parent().append('<span class="gui-input-validation -valid"></span>'):r.after('<span class="gui-input-validation -valid"></span>')),l||r.val(o);else{d.addClass("-error");var u=e('<span class="gui-input-validation -invalid"></span>');l?r.parent().append(u):r.after(u),0==d.find(".gui-input-explain").length&&s&&u.after('<span class="gui-input-explain -is-error">'+s+"</span>")}}),t.on("click","[data-block-validation] button",function(t){t.preventDefault(),e(this).closest("[data-block-validation]").guiValidate()}),t.find("[data-block-validation]").validateBlock(function(e){e.slideDown()},function(e){e.slideUp()})},init:function(){e("body").hasClass("ie7_body")&&(this.datePickerOptions.debug=!0,this.datePickerOptions.keepOpen=!1,e(document).click(function(t){var n=e(t.target);n.hasClass("gui-datepicker")||!(n.parents(".bootstrap-datetimepicker-widget").length<1)||n.hasClass("datetimepickerInput")||n.hasClass("datepickerIcon")||n.hasClass("clockpickerIcon")||e(".bootstrap-datetimepicker-widget").length>0&&e(".gui-datepicker").each(function(){e(this).data("DateTimePicker").inline()||e(this).data("DateTimePicker").hide()})}),e(".gui-datepicker").on("dp.show",function(){e(".gui-datepicker").not(e(this)).each(function(){e(this).data("DateTimePicker").inline()||e(this).data("DateTimePicker").hide()})})),this.initSelect2(),this.initAccordion(),this.initDatePicker(),this.initNotifications(),this.initTabs(),this.initValidation()}},GUI.init(),e(document).trigger("gui-init")}("undefined"!=typeof $111?$111:jQuery);
var eCookie = {
    C: {},
    
    /**
    *   Parses all the currently active cookies in the cookies property.
    */
    fetch: function() {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            try {
                var cookie = cookies[i].split('=');
                this.C[decodeURIComponent(cookie[0]).trim()] = decodeURIComponent(cookie[1]).replace(/\+/g, ' ');
            } catch (e) {}
        }
    },
    
    delete: function(name) {
        // removing the cookie from the root and the current scope
        this.set({
            'name': name,
            'value': '',
            'expires': -1,
            'path': '/'
        });
        this.set({
            'name': name,
            'value': '',
            'expires': -1
        });
    },
    
    /**
    *   Sets the value of a cookie.
    *   @param {Object} data  holds the information needed to set the cookie in key-value pairs as follows:
    *   <ul>
    *       <li>name</li>
    *       <li>value</li>
    *       <li>expires - UTC string or Date</li>
    *       <li>expiresIn - the number of miliseconds relative to Date.now() to which to set the expire date</li>
    *       <li>domain</li>
    *       <li>path</li>
    *   </ul>
    */
    set: function(data) {
        if (!('name' in data) || !('value' in data)) {
            return false;
        }
        
        var cookie = encodeURIComponent(data.name) + '=' + encodeURIComponent(data.value) + '; ';
        
        var expires = '';
        if ('expiresIn' in data && typeof data.expiresIn == 'number') {
            expires = new Date(Date.now() + data.expiresIn).toUTCString();
        } else if ('expires' in data) {
            expires = (typeof data.expires == 'Date' ? data.expires.toUTCString() : data.expires);
        }
        
        if (expires.length) {
            cookie = cookie + 'expires=' + expires + '; ';
        }

        if('domain' in data){
            cookie = cookie + 'domain=' + data.domain + '; ';
        }

        if ('path' in data) {
            cookie = cookie + 'path=' + data.path + '; ';
        }
        
        document.cookie = cookie;
    },
    
    /**
    *   Retrieves the value of a cookie.
    *   @param {String} name
    *   @param {boolean} resetCache  whether the cached cookie values should be refreshed; the argument is irrelevant if no cache has been built yet
    */
    get: function(name, resetCache) {
        if (!this.C.length || (typeof resetCache != 'undefined' && resetCache)) {
            this.fetch();
        }
        
        if (name in this.C) {
            return this.C[name];
        }
    }
};

/*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

document.addEventListener("DOMContentLoaded", function () {
    window.send_sms_token = window.send_sms_token || (EM.send_sms_token ? $(EM.send_sms_token) : undefined);
    var footer = document.getElementById("emg-footer"),
        smsAjaxRunning = false;

    var smsWidget = $(".sms-widget, .sms-widget-v2");

    smsWidget.each(function (index, value) {
        var smsForm = value.querySelector(".sms-widget-inputs"),
            smsInput = value.querySelector(".phone-input"),
            smsSendBtn = value.querySelector(".send-sms-btn"),
            smsMessage = value.querySelector(".sms-success-message"),
            recaptchaContent = $("#sms_recaptch_content");

        window.recaptchaSmsWidget = false;

        window.showSmsRecaptcha = function () {
            var recaptchaContent = $("#sms_recaptch_content");
            $(".sms-widget.recaptcha, .sms-widget-v2.recaptcha").show();
            recaptchaContent.show();
            if (recaptchaSmsWidget === false) {
                recaptchaSmsWidget = grecaptcha.render(recaptchaContent[0], {
                    sitekey: recaptchaContent.data("site-key"),
                    theme: "light",
                    hl: $("html").attr("lang")
                });
            } else {
                grecaptcha.reset(recaptchaSmsWidget);
            }
        };

        if (
            smsInput &&
            smsSendBtn &&
            smsMessage &&
            smsForm &&
            window.send_sms_token
        ) {
            var $smsForm = $(smsForm);

            $smsForm.on("submit", function (e) {
                e.preventDefault();
                $smsForm.find(".gui-input-explain").remove();
                if (!$smsForm.guiValidate() || smsAjaxRunning) {
                    return false;
                }
                smsAjaxRunning = true;
                var postData = {
                    phone: smsInput.value,
                    action_token: send_sms_token.attr("value")
                };
                if (recaptchaSmsWidget !== false) {
                    postData.captcha_response = grecaptcha.getResponse(
                        recaptchaSmsWidget
                    );
                }
                if (recaptchaContent){
                    postData.sentFrom = recaptchaContent.data("sent-from")
                }
                $.ajax({
                    url: "/mobile-app-send-sms",
                    data: postData,
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    success: function (data) {
                        if (data.error) {
                            $smsForm.addClass("-error");
                            $smsForm.find(".gui-input-validation").addClass("invalid");
                            if ($smsForm.find(".gui-input-explain").length == 0) {
                                $("<span>", { class: "gui-input-explain" }).insertAfter(
                                    $smsForm.find(".gui-input-validation")
                                );
                            }
                            if (data.captcha) {
                                if (typeof grecaptcha != "undefined") {
                                    showSmsRecaptcha();
                                } else {
                                    loadRecaptcha("showSmsRecaptcha");
                                }
                            }
                            $smsForm.find(".gui-input-explain").text(data.message);
                        } else {
                            $(smsInput).hide();
                            $(smsSendBtn).hide();
                            $(".sms-widget.recaptcha, .sms-widget-v2.recaptcha").hide();
                            $(".sms-success-message").addClass(data.cssClass);
                            $(".sms-success-message .gui-info-header").text(data.message);
                            $(smsMessage).show();
                            recaptchaContent.hide();
                        }
                        smsAjaxRunning = false;
                    },
                    error: function (data) {
                        smsAjaxRunning = false;
                    }
                });
                return false;
            });
        }
    });
});
