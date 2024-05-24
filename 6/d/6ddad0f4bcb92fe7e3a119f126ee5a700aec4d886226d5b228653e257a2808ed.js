/* jshint ignore:start */
/* jshint ignore:start */
/* jQuery */
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!"undefined"!=typeof window?window:this,;


/* jQuery UI */
(function($) {
    $.fn.parallax = function(options) {
        var obj = this,
            settings = $.extend({
                smoothness: '1',
                //axis: 'both', //both, x, y
                //scope: 'global' //global, local, x, y
            }, options);

        if (!helper.isRetina()) {
            /** check if client is scrolling **/
            var scrolling = false,
                scrollTimeout = null;
            $(window).scroll(function() {
                scrolling = true;

                window.clearTimeout(scrollTimeout);
                scrollTimeout = window.setTimeout(function() {
                    scrolling = false;
                }, 500);
            });

            /** do parallax **/
            var mouseX = 0;
            $('body').on('mousemove', function(e) {
                if (!scrolling) {
                    mouseX = (e.pageX - ($(window).width() / 2)) * -1;
 
                    obj.each(function() {
                        var p1 = $(this).find('img:nth-child(1)'),
                            p2 = $(this).find('img:nth-child(2)'),
                            p3 = $(this).find('img:nth-child(3)'),
                            p4 = $(this).find('img:nth-child(4)'),
                            owner = settings.owner ? $(this).closest(settings.owner) : $(this),
                            offestStart = owner.offset().top,
                            offestEnd = offestStart + owner.outerHeight();
                        
                        if (helper.cursorInArea(e, {
                            y: [offestStart, offestEnd]
                        })) {
                            if (p1.length) {
                                p1.css({
                                    left: Math.floor((mouseX / 80) * settings.smoothness)
                                });
                            }
                            if (p2.length) {
                                p2.css({
                                    left: Math.floor((mouseX / 60) * settings.smoothness)
                                });
                            }
                            if (p3.length) {
                                p3.css({
                                    left: Math.floor((mouseX / 40) * settings.smoothness)
                                });
                            }
                            if (p4.length) {
                                p4.css({
                                    left: Math.floor((mouseX / 20) * settings.smoothness)
                                });
                            }
                        }
                    });
                }
            });
        }
 
        return obj;
    };
}(jQuery));
/* jQuery UI */
/*! jQuery UI - v1.11.2 - 2015-01-27
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, resizable.js, effect.js, effect-bounce.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

((function(e){ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:uniqueId:),removeUniqueId:),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(:focusable:tabbable:),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],,e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:e.fn.focus),disableSelection:),enableSelection:zIndex:),e.ui.plugin={add:call:;var s=0,a=Array.prototype.slice;e.cleanData=e.cleanData),e.widget=e.widget.extend=e.widget.bridge=e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:_destroy:e.noop,widget:function(){return this.element},option:_setOptions:_setOption:enable:function(){return this._setOptions({disabled:!1})},disable:_on:_off:_delay:_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:_trigger:,e.each({show:"fadeIn",hide:"fadeOut"},,e.widget;var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:_mouseDestroy:_mouseDown:_mouseMove:_mouseUp:_mouseDistanceMet:_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:_mouseCapture:function(){return!0}}),e.widget("ui.draggable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:_setOption:_destroy:_mouseCapture:_blockFrames:_unblockFrames:_blurActiveElement:_mouseStart:_refreshOffsets:_mouseDrag:_mouseStop:_mouseUp:cancel:_getHandle:_setHandleClassName:_removeHandleClassName:_createHelper:_setPositionRelative:_adjustOffsetFromHelper:_isRootNode:_getParentOffset:_getRelativeOffset:_cacheMargins:_cacheHelperProportions:_setContainment:_convertPositionTo:_generatePosition:_clear:_normalizeRightBottom:_trigger:plugins:{},_uiHash:),e.ui.plugin.add("draggable","connectToSortable",{start:stop:drag:),e.ui.plugin.add("draggable","cursor",{start:stop:),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var a=e(i.helper),n=s.options;a.css("opacity")&&(n._opacity=a.css("opacity")),a.css("opacity",n.opacity)},stop:function(t,i,s){var a=s.options;a._opacity&&e(i.helper).css("opacity",a._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:drag:),e.ui.plugin.add("draggable","snap",{start:drag:),e.ui.plugin.add("draggable","stack",{start:),e.ui.plugin.add("draggable","zIndex",{start:stop:),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:_isNumber:_hasScroll:_create:_destroy:_mouseCapture:_mouseStart:_mouseDrag:_mouseStop:_updatePrevProperties:_applyChanges:_updateVirtualBoundaries:_updateCache:_updateRatio:_respectSize:_getPaddingPlusBorderDimensions:_proportionallyResize:_renderProxy:_change:{e:w:n:s:se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:,_propagate:plugins:{},ui:),e.ui.plugin.add("resizable","animate",{stop:),e.ui.plugin.add("resizable","containment",{start:resize:stop:),e.ui.plugin.add("resizable","alsoResize",{start:resize:stop:),e.ui.plugin.add("resizable","ghost",{start:resize:stop:),e.ui.plugin.add("resizable","grid",{resize:),e.ui.resizable;var o="ui-effects-",r=e;e.effects={effect:{}},r),),),),e.effects,e.effects.effect.bounce=);
/* jQuery easing (for jKit) */
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing},
	easeInQuad},
	easeOutQuad},
	easeInOutQuad},
	easeInCubic},
	easeOutCubic},
	easeInOutCubic},
	easeInQuart},
	easeOutQuart},
	easeInOutQuart},
	easeInQuint},
	easeOutQuint},
	easeInOutQuint},
	easeInSine},
	easeOutSine},
	easeInOutSine},
	easeInExpo},
	easeOutExpo},
	easeInOutExpo},
	easeInCirc},
	easeOutCirc},
	easeInOutCirc},
	easeInElastic},
	easeOutElastic},
	easeInOutElastic},
	easeInBack},
	easeOutBack},
	easeInOutBack},
	easeInBounce},
	easeOutBounce},
	easeInOutBounce}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* jQuery hotkeys (for keyboard shortcuts) */
/*jslint browser: true*/
/*jslint jquery: true*/

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * https://github.com/tzuryby/jquery.hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 *

})(jQuery || this.jQuery || window.jQuery);

/* jQuery fittext (for responsive fontSize) */
(function($) {
    $.fn.fitText = function(options) {
        // Setup options
        var pxBase = parseFloat($('body').css('font-size')),
            settings = $.extend({
                minFontSize: '0.5em',
                maxFontSize: '2em'
            }, options);

        settings.minFontSize = settings.minFontSize.indexOf('em') !== -1 ? pxBase * parseFloat(settings.minFontSize) : parseFloat(settings.minFontSize);
        settings.maxFontSize = settings.maxFontSize.indexOf('em') !== -1 ? pxBase * parseFloat(settings.maxFontSize) : parseFloat(settings.maxFontSize);

        return this.each(function() {
            // Store the object
            var $this = $(this),
                fontSize = parseFloat($this.css('font-size'));

            $(this).css('white-space', 'nowrap');

            // add DOM change listener
            var dsmProgress = false;
            $this.bind('DOMSubtreeModified', function() {
                if (!dsmProgress) {
                    dsmProgress = true;
                    resizer();
                }

                window.setTime  }, 1000);
            });

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function() {
                if ($this.is(':visible')) {
                    // check if text fits into box
                    if ($this.children().length && $this.children(":first").width() > $this.width()) {
                        fontSize -= 0.5;
                        if (fontSize > settings.minFontSize) {
                            $this.css('font-size', fontSize);
                            resizer();
                        } else {
                            fontSize = settings.minFontSize;
                            $this.css('font-size', fontSize);
                        }
                    } else if ($this.children().length && $this.children(":first").width() < $this.width() - 10) {
                        fontSize += 0.5;
                        if (fontSize < settings.maxFontSize) {
                            $this.css('font-size', fontSize);
                            resizer();
                        } else {
                            fontSize = settings.maxFontSize;
                            $this.css('font-size', fontSize);
                        }
                    }
                }
            };

            //init
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);
        });
    };
})( jQuery );

/* jQuery jKit (custom for parallax effects) */
//include "../../lib/jquery.jkit.custom.1.2.16.js"
/* jQuey ScrollTo Plugin */
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.Qturn p});

/* jQuey keyframes Plugin */
(function() {
    var animationSupport = false,
        animationString = 'animation',
        vendorPrefix = prefix = '',
        domPrefixes = ['Webkit', 'Moz', 'O', 'ms', 'Khtml'];

    $(document).ready(function(){
        var style = document.body.style;
        if( style.animationName !== undefined ) { animationSupport = true; }

        if( animationSupport === false ) {
            for( var i = 0; i < domPrefixes.length; i++ ) {
                if( style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                    prefix = domPrefixes[ i ];
                    animationString = prefix + 'Animation';
                    vendorPrefix = '-' + prefix.toLowerCase() + '-';
                    animationSupport = true;
                    break;
                }
            }
        }
    });


    var $createKeyframeStyleTag = function(id, css) {
        if($.keyframe.debug){ console.log(id + " " + css); }
        return $("<style>" + css + "</style>").attr({
            "class": "keyframe-style",
            id: id,
            type: "text/css"
        }).appendTo("head");
    };

    $.keyframe = {
        debug: false,
        getVendorPrefix: function() {
            return vendorPrefix;
        },
        isSupported: function() {
            return animationSupport;
        },
        generate: function(frameData) {
            var frameName = frameData.name || "";
            var css = "@" + vendorPrefix + "keyframes " + frameName + " {";

            for (var key in frameData) {
                if (key !== "name" && key !== "media" && key !== "complete") {
                    css += key + " {";

                    for (var property in frameData[key]) {
                        css += property + ":" + frameData[key][property] + ";";
                    }

                    css += "}";
                }
            }
            if(window.PrefixFree)
                css = PrefixFree.prefixCSS(css + "}");
            else
                css += "}";
            if(frameData.media){
                css = "@media " + frameData.media + "{" + css + "}";
            }

            var $frameStyle = $("style#" + frameData.name);

            if ($frameStyle.length > 0) {
                $frameStyle.html(css);

                var $elems = $("*").filter(function() {
                    return this.style[animationString + "Name"] === frameName;
                });

                $elems.each(function() {
                    var $el = $(this);
                    var options = $el.data("keyframeOptions");
                    $el.resetKeyframe(function() {
                        $el.playKeyframe(options);
                    });
                });
            } else {
                $createKeyframeStyleTag(frameName, css);
            }
        },
        define: function(frameData) {
            if (frameData.length) {
                for (var i = 0; i < frameData.length; i++) {
                    var frame = frameData[i];
                    this.generate(frame);
                }
            } else {
                this.generate(frameData);
            }
        }
    };

    var animationPlayState = "animation-play-state";
    var playStateRunning = "running";

    $.fn.resetKeyframe = function(callback) {
        var $el = $(this).css(vendorPrefix + animationPlayState, playStateRunning).css(vendorPrefix + "animation", "none");

        if (callback) {
            setTimeout(callback, 1);
        }
    };

    $.fn.pauseKeyframe = function() {
        $(this).css(vendorPrefix + animationPlayState, "paused");
    };

    $.fn.resumeKeyframe = function() {
        $(this).css(vendorPrefix + animationPlayState, playStateRunning);
    };

    $.fn.playKeyframe = function(frameOptions, callback) {

        var animObjToStr = function(obj){
            obj = $.extend({
                duration: '0s',
                timingFunction: "ease",
                delay: '0s',
                iterationCount: 1,
                direction: "normal",
                fillMode: "forwards"
            }, obj);
            return [obj.name, obj.duration, obj.timingFunction, obj.delay, obj.iterationCount, obj.direction, obj.fillMode].join(" ");
        };

        var animationcss = "";

        if($.isArray(frameOptions)){
            var frameOptionsStrings = [];
            for(var i = 0; i < frameOptions.length; i++){
                if (typeof frameOptions[i] === 'string') {
                    frameOptionsStrings.push(frameOptions[i]);
                }else{
                    frameOptionsStrings.push(animObjToStr(frameOptions[i]));
                }
            }
            animationcss = frameOptionsStrings.join(", ");
        }else if (typeof frameOptions === 'string') {
            animationcss = frameOptions;
        }else{
            animationcss = animObjToStr(frameOptions);
        }

        var animationkey = vendorPrefix + "animation";
        var pfx = ["webkit", "moz", "MS", "o", ""];

        if(!callback && frameOptions.complete){
            callback = frameOptions.complete;
        }

        var _prefixEvent = function(element, type, callback) {
            for(var i = 0; i < pfx.length; i++){
                if (!pfx[i]) {
                    type = type.toLowerCase();
                }
                var evt = pfx[i] + type;
                element.off(evt).on(evt, callback);
            }
        };

        this.each(function() {
            var $el = $(this).addClass("boostKeyframe").css(vendorPrefix + animationPlayState, playStateRunning).css(animationkey, animationcss).data("keyframeOptions", frameOptions);
            if($.keyframe.debug){
                console.group();
                if(vendorPrefix){ console.log("Vendor Prefix: " + vendorPrefix); }
                console.log("Style Applied: " + animationcss);
                var testCss = $el.css(animationkey);
                console.log("Rendered Style: " + (testCss ? testCss : $el[0].style.animation));
                console.groupEnd();
            }
            if (callback) {
                _prefixEvent($el, 'AnimationIteration', callback);
                _prefixEvent($el, 'AnimationEnd', callback);
            }
        });
        return this;
    };

    $createKeyframeStyleTag("boost-keyframe", " .boostKeyframe{" + vendorPrefix + "transform:scale3d(1,1,1);}");

}).call(this);
/* jBox (notifications) */
function jBox(type,options){this.options={id:null,width:"auto",height:"auto",minWidth:null,maxHeight:null,minWidth:null,maxHeight:null,attach:null,trigger:"click",preventDefault:!1,title:null,content:null,getTitle:null,getContent:null,isolateScroll:!0,ajax:{url:null,data:"",reload:!1,getData:"data-ajax",setContent:!0,spinner:!0},target:null,position:{x:"center",y:"center"},outside:null,offset:0,attributes:{x:"left",y:"top"},adjustPosition:!1,adjustTracker:!1,adjustDistance:5,fixed:!1,reposition:!1,repositionOnOpen:!0,repositionOnContent:!0,pointer:!1,pointTo:"target",fade:180,animation:null,theme:"Default",addClass:"",overlay:!1,zIndex:1e4,delayOpen:0,delayClose:0,closeOnEsc:!1,closeOnClick:!1,closeOnMouseleave:!1,closeButton:!1,constructOnInit:!1,blockScroll:!1,appendTo:jQuery("body"),draggable:null,dragOver:!0,onInit:null,onBeforeInit:null,onAttach:null,onCreated:null,onOpen:null,onClose:null,onCloseComplete:null,confirmButton:"Submit",cancelButton:"Cancel",confirm:null,cancel:null,autoClose:7e3,color:null,stack:!0,audio:!1,volume:100,src:"href",gallery:"data-jbox-image",imageLabel:"title",imageFade:600,imageSize:"contain"},this.defaultOptions={Tooltip:{getContent:"title",trigger:"mouseenter",position:{x:"center",y:"top"},outside:"y",pointer:!0,adjustPosition:!0,reposition:!0},Mouse:{target:"mouse",position:{x:"right",y:"bottom"},offset:15,trigger:"mouseenter",adjustPosition:"flip"},Modal:{target:jQuery(window),fixed:!0,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomOut"},Confirm:{target:jQuery(window),fixed:!0,attach:jQuery("[data-confirm]"),getContent:"data-confirm",content:"Do you really want to do this?",minWidth:320,maxWidth:460,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomOut",preventDefault:!0,_onAttach:function(t){if(!this.options.confirm){var i=t.attr("onclick")?t.attr("onclick"):t.attr("href")?t.attr("target")?'window.open("'+t.attr("href")+'", "'+t.attr("target")+'");':'window.location.href = "'+t.attr("href")+'";':"";t.prop("onclick",null).data("jBox-Confirm-submit",i)}},_onCreated:function(){this.footer=jQuery('<div class="jBox-Confirm-footer"/>'),jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButtonlose()}.bind(this)).appendTo(this.footer),this.submitButton=jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer),this.footer.appendTo(this.container)},_onOpen:function(){this.submitButton.off("click.jBox-Confirm"+this.id).on("click.jBox-Confirm"+this.id,function(){this.options.confirm?this.options.confirm():eval(this.source.data("jBox-Confirm-submit")),this.close()}.bind(this))}},Notice:{target:jQuery(window),fixed:!0,position:{x:20,y:20},attributes:{x:"right",y:"top"},animation:"zoomIn",closeOnClick:"box",_onInit:function(){this.open(),this.options.delayClose=this.options.autoClose,this.options.delayClose&&this.close()},_onCreated:function(){this.options.color&&this.wrapper.addClass("jBox-Notice-color jBox-Notice-"+this.options.color),this.wrapper.data("jBox-Notice-position",this.options.attributes.x+"-"+this.options.attributes.y)},_onOpen:function(){jQuery.each(jQuery(".jBox-Notice"),function(t,i){return i=jQuery(i),i.attr("id")!=this.id&&i.data("jBox-Notice-position")==this.options.attributes.x+"-"+this.options.attributes.y?this.options.stack?void i.css("margin-"+this.options.attributes.y,parseInt(i.css("margin-"+this.options.attributes.y))+this.wrapper.outerHeight()+10):void i.data("jBox").close({ignoreDelay:!0}):void 0}.bind(this)),this.options.audio&&this.audio({url:this.options.audio,valume:this.options.volume})},_onCloseCtroy()}},Image:{target:jQuery(window),fixed:!0,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomOut",width:800,height:533,attach:jQuery("[data-jbox-image]"),preventDefault:!0,_onInit:function(){this.images=this.currentImage={},this.imageZIndex=1,this.attachedElements&&jQuery.each(this.attachedElements,function(t,i){if(i=jQuery(i),!i.data("jBox-image-gallery")){var s=i.attr(this.options.gallery)||"default";!this.images[s]&&(this.images[s]=[]),this.images[s].push({src:i.attr(this.options.src),label:i.attr(this.options.imageLabel)||""}),"title"==this.options.imageLabel&&i.removeAttr("title"),i.data("jBox-image-gallery",s),i.data("jBox-image-id",this.images[s].length-1)}}.bind(this));var t=function(t,i,s,o){if(!jQuery("#jBox-image-"+t+"-"+i).length){{var e=jQuery("<div/>",{id:"jBox-image-"+t+"-"+i,"class":"jBox-image-container"}).css({backgroundImage:"url("+this.images[t][i].src+")",backgroundSize:this.options.imageSize,opacity:o?1:0,zIndex:s?0:this.imageZIndex++}).appendTo(this.content);jQuery("<div/>",{id:"jBox-image-label-"+t+"-"+i,"class":"jBox-image-label"+(o?" active":"")}).html(this.images[t][i].label).appendTo(this.imageLabel)}!o&&!s&&e.animate({opacity:1},this.options.imageFade)}}.bind(this),i=function(t,i){jQuery(".jBox-image-label.active").removeClass("active"),jQuery("#jBox-image-label-"+t+"-"+i).addClass("active")};this.showImage=function(s){if("open"!=s){var o=this.currentImage.gallery,e=this.currentImage.id+(1*("prev"==s)?-1:1);e=e>this.images[o].length-1?0:0>e?this.images[o].length-1:e}else{var o=this.source.data("jBox-image-gallery"),e=this.source.data("jBox-image-id");jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display:this.images[o].length>1?"block":"none"})}if(this.currentImage={gallery:o,id:e},jQuery("#jBox-image-"+o+"-"+e).length)jQuery("#jBox-image-"+o+"-"+e).css({zIndex:this.imageZIndex++,opacity:0}).animate({opacity:1},"open"==s?0:this.options.imageFade),i(o,e);else{this.wrapper.addClass("jBox-loading");{jQuery('<img src="'+this.images[o][e].src+'">').load(function(){t(o,e,!1),i(o,e),this.wrapper.removeClass("jBox-loading")}.bind(this))}}var n=e+1;n=n>this.images[o].length-1?0:0>n?this.images[o].length-1:n,!jQuery("#jBox-image-"+o+"-"+n).length&&jQuery('<img src="'+this.images[o][n].src+'">,n,!0)})}},_onCreated:function(){this.imageLabel=jQuery("<div/>",{id:"jBox-image-label"}).appendTo(this.wrapper),this.wrapper.append(jQuery("<div/>",{"class":"jBox-image-pointer-prev",click:function(){this.showImage("prev")}.bind(this)})).append(jQuery("<div/>",{"class":"jBox-image-pointer-nextnext")}.bind(this)}))},_onOpen:function(){jQuery("body").addClass("jBox-image-open"),jQuery(document).on("keyup.jBox-"+this.id,function(t){37==t.keyCode&&this.showImage("prev"),39==t.keyCode&&this.showImage("next")}.bind(this)),this.showImage("open")},_onClose:function(){jQuery("body").removeClass("jBox-image-open"),jQuery(document).off("keyup.jBox-"+this.id)},_onCloseCty",0)}}},"string"==jQuery.type(type)&&(this.type=type,type=this.defaultOptions[type]?this.defaultOptions[type]:window["jBox"+type+"Options"]),this.options=jQuery.extend(!0,this.options,type,options),this._fireEvent=function(t,i){this.options["_"+t]&&this.options["_"+t].bind(this)(i),this.options[t]&&this.options[t].bind(this)(i)},this._fireEvent("onBeforeInit"),null===this.options.id&&(this.options.id="jBoxID"+jBox._getUniqueID()),this.id=this.options.id,("center"==this.options.position.x&&"x"==this.options.outside||"center"==this.options.position.y&&"y"==this.options.outside)&&(this.options.outside=!1),(!this.options.outside||"xy"==this.options.outside)&&(this.options.pointer=!1),"object"!=jQuery.type(this.options.offset)&&(this.options.offset={x:this.options.offset,y:this.options.offset}),this.options.offset.x||(this.options.offset.x=0),this.options.offset.y||(this.options.offset.y=0),this.options.adjustDistance="object"!=jQuery.type(this.options.adjustDistance)?{top:this.options.adjustDistance,right:this.options.adjustDistance,bottom:this.options.adjustDistance,left:this.options.adjustDistance}:jQuery.extend({top:5,left:5,right:5,bottom:5},this.options.adjustDistance),this.align=this.options.outside&&"xy"!=this.options.outside?this.options.position[this.options.outside]:"center"!=this.options.position.y&&"number"!=jQuery.type(this.options.position.y)?this.options.position.x:"center"!=this.options.position.x&&"number"!=jQuery.type(this.options.position.x)?this.options.position.y:this.options.attributes.x,this.options.outside&&"xy"!=this.options.outside&&(this.outside=this.options.position[this.options.outside]);var userAgent=navigator.userAgent.toLowerCase();return this.IE8=-1!=userAgent.indexOf("msie")&&8==parseInt(userAgent.split("msie")[1]),this.prefix=-1!=userAgent.indexOf("webkit")?"-webkit-":"",this.x"}[t]},thisx"}[t]},thisp"}[t]},this._suppbuteNS},this._createSVG=function(t,i){var s=document.createElementNS("http://www.w3.org/2000/svg",t);return jQuery.each(i,function(t,i){s.setAttribute(i[0],i[1]||"")}),s},this._apild(t)},this._isolateScroll=function(t){t&&jQuery(t).length&&t.on("DOMMouseScroll.jBoxIsolatedScroll mousewheel.jBoxIsolatedScroll",function(i){var s=i.wheelDelta||i.originalEvent&&i.originalEvent.wheelDelta||-i.detail,o=this.scrollTop+t.outerHeight()-this.scrollHeight>=0,e=this.scrollTop<=0;(0>s&&o||s>0&&e)&&i.preventDefault()})},this._create=function(){if(!this.wrapper){if(this.wrapper=jQuery("<div/>",{id:this.id,"class":"jBox-wrapper"+(this.type?" jBox-"+this.type:"")+(this.options.theme?" jBox-"+this.options.theme:"")+(this.options.addClass?" "+this.options.addClass:"")+(this.IE8?" jBox-IE8":"")}).css({position:this.options.fixed?"fixed":"absolute",display:"none",opacity:0,zIndex:this.options.zIndex}).data("jBox",this),this.options.closeOnMouseleave&&this.wrapper.mouseleave(function(t){!this.source||!(t.relatedTarget==this.source[0]||-1!==jQuery.inArray(this.source[0],jQuery(t.relatedTarget).parents("*")))&&this.close()}.bind(this)),"box"==this.options.closeOnClick&&this.wrapper.on("touchendy:!0})}.bind(this)),this.container=jQuery("<div/>",{"class":"jBox-container"}).appendTo(this.wrapper),this.content=jQuery("<div/>",{"class":"jBox-content"}).css({width:this.options.width,height:this.options.height,minWidth:this.options.minWidth,minHeight:this.options.minHeight,maxWidth:this.options.maxWidth,maxHeight:this.options.maxHeight}).appendTo(this.container),this.options.isolateScroll&&this._isolateScroll(this.content),this.options.closeButton){if(this.closeButton=jQuery("<div/>",{"class":"jBox-closeButton jBox-noDrag"}).on("touchend click",function(){this.isOpen&&this.close({ignoreDelay:!0})}.bind(this)),this._supportsSVG()){var t=this._createSVG("svg",[["viewBox","0 0 24 24"]]);this._appendSVG(this._createSVG("path",[["d","M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]]),t),this.closeButton.append(t)}else this.wrapper.addClass("jBox-nosvg");("box"==this.options.closeButton||this.options.closeButton===!0&&!this.options.overlay&&!this.options.title)&&(this.wrapper.addClass("jBox-closeButton-box"),this.closeButton.appendTo(this.container))}if(this.wrapper.appendTo(this.options.appendTo),this.options.pointer){if(this.pointer={position:"target"!=this.options.pointTo?this.options.pointTo:this._getOpp(this.outside),xy:this._getXY("target"!=this.options.pointTo?this.options.pointTo:this.outside),align:"center",offset:0},this.pointer.element=jQuery("<div/>",{"class":"jBox-pointer jBox-pointer-"+this.pointer.position}).appendTo(this.wrapper),this.pointer.dimensions={x:this.pointer.element.outerWidth(),y:this.pointer.element.outerHeight()},"string"==jQuery.type(this.options.pointer)){var i=this.options.pointer.split(":");i[0]&&(this.pointer.align=i[0]),i[1]&&(this.pointer.offset=parseInt(i[1]))}this.pointer.alignAttribute="x"==this.pointer.xy?"bottom"==this.pointer.align?"bottom":"top":"right"==this.pointer.align?"right":"left",this.wrapper.css("padding-"+this.pointer.position,this.pointer.dimensions[this.pointer.xy]),this.pointer.element.css(this.pointer.alignAttribute,"center"==this.pointer.align?"50%":0).css("margin-"+this.pointer.alignAttribute,this.pointer.offset),this.pointer.margin={},this.pointer.margin["margin-"+this.pointer.alignAttribute]=this.pointer.offset,"center"==this.pointer.align&&this.pointer.element.css(this.prefix+"transform","translate("+("y"==this.pointer.xy?this.pointer.dimensions.x*-.5+"px":0)+", "+("x"==this.pointer.xy?this.pointer.dimensions.y*-.5+"px":0)+")"),this.pointer.element.css("x"==this.pointer.xy?"width":"height",parseInt(this.pointer.dimensions[this.pointer.xy])+parseInt(this.container.css("border-"+this.pointer.alignAttribute+"-width"))),this.wrapper.addClass("jBox-pointerPosition-"+this.pointer.position)}if(this.setContent(this.options.content,!0),this.setTitle(this.options.title,!0),this.options.draggable){var s="title"==this.options.draggable?this.titleContainer:this.options.draggable.length>0?this.options.draggable:this.options.draggable.selector?jQuery(this.options.draggable.selector):this.wrapper;s.addClass("jBox-draggable").on("mousedown",function(t){if(2!=t.button&&!jQuery(t.target).hasClass("jBox-noDrag")&&!jQuery(t.target).parents(".jBox-noDrag").length){this.options.dragOver&&this.wrapper.css("zIndex")<=jBox.zIndexMax&&(jBox.zIndexMax+=1,this.wrapper.css("zIndex",jBox.zIndexMax));var i=this.wrapper.outerHeight(),s=this.wrapper.outerWidth(),o=this.wrapper.offset().top+i-t.pageY,e=this.wrapper.offset().left+s-t.pageX;jQuery(document).on("mousemove.jBox-draggable-"+this.id,function(t){this.wrapper.offset({top:t.pageY+o-i,left:t.pageX+e-s})}.bind(this)),t.preventDefault()}}.bind(this)).on("mis.id)}.bind(this)),jBox.zIndexMax=jBox.zIndexMax?Math.max(jBox.zIndexMax,this.options.zIndex):this.options.zIndex}this._fireEvent("onCreated")}},this.options.constructOnInit&&this._create(),this.options.attach&&this.attach(),this._positionMouse=function(t){this.pos={left:t.pageX,top:t.pageY};var i=function(t,i){return"center"==this.options.position[i]?void(this.pos[t]-=Math.ceil(this.dimensions[i]/2)):(this.pos[t]+=t==this.options.position[i]?-1*this.dimensions[i]-this.options.offset[i]:this.options.offset[i],this.pos[t])}.bind(this);this.wrapper.css({left:i("left","x"),top:i("top","y")}),this.targetDimensions={x:0,y:0,left:t.pageX,top:t.pageY},this._adjustPosition()},this._attachEvents=function(){if(this.options.closeOnEsc&&jQuery(document).on("keyup.jBox-"+this.id,function(t){27==t.keyCode&&this.close({ignoreDelay:!0})}.bind(this)),(this.options.closeOnClick===!0||"body"==this.options.closeOnClick)&&jQuery(document).on("touchend.jBox-"+this.id+" click.jBox-"+this.id,function(t){this.blockBodyClick||"body"==this.options.closeOnClick&&(t.target==this.wrapper[0]||this.wrapper.has(t.target).length)||this.close({ignoreDelay:!0})}.bind(this)),(this.options.adjustPosition&&this.options.adjustTracker||this.options.reposition)&&!this.fixed&&this.outside){var t,i=0,s=150,o=function(){var o=(new Date).getTime();t||(o-i>s&&(this.options.reposition&&this.position(),this.options.adjustTracker&&this._adjustPosition(),i=o),t=setTimeout(function(){t=null,i=(new Date).getTime(),this.options.reposition&&this.position(),this.options.adjustTracker&&this._adjustPosition()}.bind(this),s))}.bind(this);this.options.adjustTracker&&"resize"!=this.options.adjustTracker&&jQuery(window).on("scroll.jBox-"+this.id,function(){o()}.bind(this)),(this.options.adjustTracker&&"scroll"!=this.options.adjustTracker||this.options.reposition)&&jQuery(window).on("resize.jBox-"+this.id,function(){o()}.bind(this))}"mouse"==this.options.target&&jQuery("body").on("mousemove.jBox-"+use(t)}.bind(this))},this._detachEvents=function(){this.options.closeOnEsc&&jQuery(document).off("keyup.jBox-"+this.id),(this.options.closeOnClick===!0||"body"==this.options.closeOnClick)&&jQuery(document).off("touchend.jBox-"+this.id+" click.jBox-"+this.id),(this.options.adjustPosition&&this.options.adjustTracker||this.options.reposition)&&(jQuery(window).off("scroll.jBox-"+this.id),jQuery(window).off("resize.jBox-"+this.id)),"mouse"==this.options.target&&jQuery("body").off("mousemove.jBox-"+this.id)},this._addOverlay=function(){this.overlay||(this.overlay=jQuery("#jBox-overlay").length?jQuery("#jBox-overlay").css({zIndex:Math.min(jQuery("#jBox-overlay").css("z-index"),this.options.zIndex-1)}):jQuery("<div/>",{id:"jBox-overlay"}).css({display:"none",opacity:0,zIndex:this.options.zIndex-1}).appendTo(jQuery("body")),("overlay"==this.options.closeButton||this.options.closeButton===!0)&&(jQuery("#jBox-overlay .jBox-closeButton").length>0?jQuery("#jBox-overlay .jBox-closeButton").on("touchend click",function(){this.isOpen&&this.close({ignoreDelay:!0})}.bind(this)):this.overlay.append(this.closeButton)),"overlay"==this.options.closeOnClick&&this.overlay.on("touchendy:!0})}.bind(this)));var t=this.overlay.data("jBox")||{};t["jBox-"+this.id]=!0,this.overlay.data("jBox",t),"block"!=this.overlay.css("display")&&(this.options.fade?this.overlay.stop()&&this.overlay.animate({opacity:1},{queue:!1,duration:this.options.fade,start:function(){this.overlay.css({display:"block"})}.bind(this)}):this.overlay.css({display:"block",opacity:1}))},this._removeOverlay=function(){if(this.overlay){var t=this.overlay.data("jBox");delete t["jBox-"+this.id],this.overlay.data("jBox",t),jQuery.isEmptyObject(t)&&(this.options.fade?this.overlay.stop()&&this.overlay.animate({opacity:0},{queue:!1,duration:this.options.fade,cone"})}.bind(this)}):this.overlay.css({display:"none",opacity:0}))}},this._generateCSS=function(){if(!this.IE8){"object"!=jQuery.type(this.options.animation)&&(this.options.animation={pulse:{open:"pulse",close:"zoomOut"},zoomIn:{open:"zoomIn",close:"zoomIn"},zoomOut:{open:"zoomOut",close:"zoomOut"},move:{open:"move",close:"move"},slide:{open:"slide",close:"slide"},flip:{open:"flip",close:"flip"},tada:{open:"tada",close:"zoomOut"}}[this.options.animation]),this.options.animation.open&&(this.options.animation.open=this.options.animation.open.split(":")),this.options.animation.close&&(this.options.animation.close=this.options.animation.close.split(":")),this.options.animation.openDirection=this.options.animation.open?this.options.animation.open[1]:null,this.options.animation.closeDirection=this.options.animation.close?this.options.animation.close[1]:null,this.options.animation.open&&(this.options.animation.open=this.options.animation.open[0]),this.options.animation.close&&(this.options.animation.close=this.options.animation.close[0]),this.options.animation.open&&(this.options.animation.open+="Open"),this.options.animation.close&&(this.options.animation.close+="Close");var t={pulse:{duration:350,css:[["0%","scale(1)"],["50%","scale(1.1)"],["100%","scale(1)"]]},zoomInOpen:{duration:this.options.fade||180,css:[["0%","scale(0.9)"],["100%","scale(1)"]]},zoomInClose:{duration:this.options.fade||180,css:[["0%","scale(1)"],["100%","scale(0.9)"]]},zoomOutOpen:{duration:this.options.fade||180,css:[["0%","scale(1.1)"],["100%","scale(1)"]]},zoomOutClose:{duration:this.options.fade||180,css:[["0%","scale(1)"],["100%","scale(1.1)"]]},moveOpen:{duration:this.options.fade||180,positions:{top:{"0%":-12},right:{"0%":12},bottom:{"0%":12},left:{"0%":-12}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},moveClose:{duration:this.options.fade||180,timing:"ease-in",positions:{top:{"100%":-12},right:{"100%":12},bottom:{"100%":12},left:{"100%":-12}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},slideOpen:{duration:400,positions:{top:{"0%":-400},right:{"0%":400},bottom:{"0%":400},left:{"0%":-400}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},slideClose:{duration:400,timing:"ease-in",positions:{top:{"100%":-400},right:{"100%":400},bottom:{"100%":400},left:{"100%":-400}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},flipOpen:{duration:600,css:[["0%","perspective(400px) rotateX(90deg)"],["40%","perspective(400px) rotateX(-15deg)"],["70%","perspective(400px) rotateX(15deg)"],["100%","perspective(400px) rotateX(0deg)"]]},flipClose:{duration:this.options.fade||300,css:[["0%","perspective(400px) rotateX(0deg)"],["100%","perspective(400px) rotateX(90deg)"]]},tada:{duration:800,css:[["0%","scale(1)"],["10%, 20%","scale(0.9) rotate(-3deg)"],["30%, 50%, 70%, 90%","scale(1.1) rotate(3deg)"],["40%, 60%, 80%","scale(1.1) rotate(-3deg)"],["100%","scale(1) rotate(0)"]]}};jQuery.each(["pulse","tada"],function(i,s){t[s+"Open"]=t[s+"Close"]=t[s]});var i=function(i,s){return keyframe_css="@"+this.prefix+"keyframes jBox-animation-"+this.options.animation[i]+"-"+i+(s?"-"+s:"")+" {",jQuery.each(t[this.options.animation[i]].css,function(o,e){var n=s?e[1].replace("%XY",this._getXY(s).toUpperCase()):e[1];t[this.options.animation[i]].positions&&(n=n.replace("%V",t[this.options.animation[i]].positions[s][e[0]])),keyframe_css+=e[0]+" {"+this.prefix+"transform:"+n+";}"}.bind(this)),keyframe_css+="}",keyframe_css+=".jBox-animation-"+this.options.animation[i]+"-"+i+(s?"-"+s:"")+" {",keyframe_css+=this.prefix+"animation-duration: "+t[this.options.animation[i]].duration+"ms;",keyframe_css+=this.prefix+"animation-name: jBox-animation-"+this.options.animation[i]+"-"+i+(s?"-"+s:"")+";",keyframe_css+=t[this.options.animation[i]].timing?this.prefix+"animation-timing-function: "+t[this.options.animation[i]].timing+";":"",keyframe_css+="}"}.bind(this),s="";jQuery.each(["open","close"],function(o,e){return this.options.animation[e]&&t[this.options.animation[e]]&&("close"!=e||this.options.fade)?void(t[this.options.animation[e]].positions?jQuery.each(["top","right","bottom",i(e,o)}):s+=i(e)):""}.bind(this)),jQuery("<style/>").append(s).appendTo(jQuery("head"))}},this._blockBos),10)},this.options.animation&&this._generateCSS(),this._animate=function(t){if(!this.IE8){if(t||(t=this.isOpen?"open":"close"),!this.options.fade&&"close"==t)return null;var i=this.options.animation[t+"Direction"]||("center"!=this.align?this.align:this.options.attributes.x);this.flipped&&this._getXY(i)==this._getXY(this.align)&&(i=this._getOpp(i));var s="jBox-animation-"+this.options.animation[t]+"-"+t+" jBox-animation-"+this.options.animation[t]+"-"+t+"-"+i;this.wrapper.addClass(s);var o=1e3*parseFloat(this.wrapper.css(this.prefix+"animation-duration"));"close"==t&&(o=Math.min(o,this.options.fade)),setass(s)}.bind(this),o)}},this._abortAnimation=function(){if(!this.IE8){var t="jBox-animation",i=this.wrapper.attr("class").split(" ")f(t,0)});this.wrapper.attr("class",i.join(" "))}},this._adjustPosition=function(){if(!this.options.adjustPosition)return null;this.positionAdjusted&&(this.wrapper.css(this.pos),this.pointer&&this.wrapper.css("padding",0).css("padding-"+this._getOpp(this.outside),this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-"+this.pointer.position),this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+this._getOpp(this.outside)).css(this.pointer.margin),this.positionAdjusted=!1,this.flipped=!1);var t=jQuery(window),i={x:t.width(),y:t.height(),top:this.options.fixed&&this.target.data("jBox-fixed")?0:t.scrollTop(),left:this.options.fixed&&this.target.data("jBox-fixed")?0:t.scrollLeft()};i.bottom=i.top+i.y,i.right=i.left+i.x;var s=i.top>this.pos.top-(this.options.adjustDistance.top||0),o=i.right<this.pos.left+this.dimensions.x+(this.options.adjustDistance.right||0),e=i.bottom<this.pos.top+this.dimensions.y+(this.options.adjustDistance.bottom||0),n=i.left>this.pos.left-(this.options.adjustDistance.left||0),a=n?"left":o?"right":null,h=s?"top":e?"bottom":null,r=a||h;if(r){"move"==this.options.adjustPosition||a!=this.outside&&h!=this.outside||("mouse"==this.target&&(this.outside="right"),("top"==this.outside||"left"==this.outside?i[this._getXY(this.outside)]-(this.targetDimensions[this._getTL(this.outside)]-i[this._getTL(this.outside)])-this.targetDimensions[this._getXY(this.outside)]+this.options.offset[this._getXY(this.outside)]:this.targetDimensions[this._getTL(this.outside)]-i[this._getTL(this.outside)]-this.options.offset[this._getXY(this.outside)])>this.dimensions[this._getXY(this.outside)]+parseInt(this.options.adjustDistance[this._getOpp(this.outside)])&&(this.wrapper.css(this._getTL(this.outside),this.pos[this._getTL(this.outside)]+(this.dimensions[this._getXY(this.outside)]+this.options.offset[this._getXY(this.outside)]*("top"==this.outside||"left"==this.outside?-2:2)+this.targetDimensions[this._getXY(this.outside)])*("top"==this.outside||"left"==this.outside?1:-1)),this.pointer&&this.wrapper.removeClass("jBox-pointerPosition-"+this.pointer.position).addClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).css("padding",0).css("padding-"+this.outside,this.pointer.dimensions[this._getXY(this.outside)]),this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+this.outside),this.positionAdjusted=!0,this.flipped=!0));var p="x"==this._getXY(this.outside)?h:a;if(this.pointer&&"flip"!=this.options.adjustPosition&&this._getXY(p)==this._getOpp(this._getXY(this.outside))){if("center"==this.pointer.align)var l=this.dimensions[this._getXY(p)]/2-this.pointer.dimensions[this._getOpp(this.pointer.xy)]/2-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))*(p!=this._getTL(p)?-1:1);else var l=p==this.pointer.alignAttribute?parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute)):this.dimensions[this._getXY(p)]-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-this.pointer.dimensions[this._getXY(p)];spaceDiff=p==this._getTL(p)?i[this._getTL(p)]-this.pos[this._getTL(p)]+this.options.adjustDistance[p]:-1*(i[this._getOpp(this._getTL(p))]-this.pos[this._getTL(p)]-this.options.adjustDistance[p]-this.dimensions[this._getXY(p)]),p==this._getOpp(this._getTL(p))&&this.pos[this._getTL(p)]-spaceDiff<i[this._getTL(p)]+this.options.adjustDistance[this._getTL(p)]&&(spaceDiff-=i[this._getTL(p)]+this.options.adjustDistance[this._getTL(p)]-(this.pos[this._getTL(p)]-spaceDiff)),spaceDiff=Math.min(spaceDiff,l),l>=spaceDiff&&spaceDiff>0&&(this.pointer.element.css("margin-"+this.pointer.alignAttribute,parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-spaceDiff*(p!=this.pointer.alignAttribute?-1:1)),this.wrapper.css(this._getTL(p),this.pos[this._getTL(p)]+spaceDiff*(p!=this._getTL(p)?-1:1)),this.positionAdjusted=!0)}}},this._fireEvent("onInit"),this}jBox.prototype.attach=function(t,i){return t||(t=jQuery(this.options.attach.selector||this.options.attach)),i||(i=this.options.trigger),t&&t.length&&jQuery.each(t,function(t,s){s=jQuery(s),s.data("jBox-attached-"+this.id)||("title"==this.options.getContent&&void 0!=s.attr("title")&&s.data("jBox-getContent",s.attr("title")).removeAttr("title"),this.attachedElements||(this.attachedElements=[]),this.attachedElements.push(s[0]),s.on(i+".jBox-attach-"+this.id,function(t){if(this.timer&&clearTimeout(this.timer),"mouseenter"!=i||!this.isOpen||this.source[0]!=s[0]){if(this.isOpen&&this.source&&this.source[0]!=s[0])var o=!0;this.source=s,!this.options.target&&(this.target=s),"click"==i&&this.options.preventDefault&&t.preventDefault(),this["click"!=i||o?"open":"toggle"]()}}.bind(this)),"mouseenter"==this.options.trigger&&s.on("mouseleave",function(t){(!this.options.closeOnMouseleave||t.relatedTarget!=this.wrapper[0]&&!jQuery(t.relatedTarget).parents("#"+this.id).length)&&this.close()}.bind(this)),s.data("jBox-attached-"+this.id,i),this._fireEvent("onAttach",s))}.bind(this)),this},jBox.prototype.detach=function(t){return t||(t=this.attachedElements||[]),t&&t.length&&jQuery.each(t,function(t,i){i=jQuery(i),i.data("jBox-attached-"+this.id)&&(i.off(i.data("jBox-attached-"+this.id)+".jBox-attach-"+this.id),i.data("jBox-attached-"+this.id,null)),this.attachedElements=jQuery.grep(this.attachedE!=i[0]})}.bind(this)),this},jBox.prototype.setTitle=function(t,i){var s=this.wrapper.height(),o=this.wrapper.width();return null==t||void 0==t?this:(!this.wrapper&&this._create(),this.title||(this.titleContainer=jQuery("<div/>",{"class":"jBox-title"}),this.title=jQuery("<div/>").appendTo(this.titleContainer),this.wrapper.addClass("jBox-hasTitle"),("title"==this.options.closeButton||this.options.closeButton===!0&&!this.options.overlay)&&(this.wrapper.addClass("jBox-closeButton-title"),this.closeButton.appendTo(this.titleContainer)),this.titleContainer.insertBefore(this.content)),this.title.html(t),!i&&this.options.repositionOnContent&&(s!=this.wrapper.height()||o!=this.wrapper.width())&&this.position(),this)},jBox.prototype.setContent=function(t,i){if(null==t)return this;!this.wrapper&&this._create();var s=this.wrapper.height(),o=this.wrapper.width(),e=jQuery("body").height(),n=jQuery("body").width();switch(this.content.children("[data-jbox-content-appended]").appendTo("body").css({display:"none"}),jQuery.type(t)){case"string":this.content.html(t);break;case"object":this.content.html(""),t.attr("data-jbox-content-appended",1).appendTo(this.content).css({display:"block"})}var a={x:n-jQuery("body").width(),y:e-jQuery("body").height()};return!i&&this.options.repositionOnContent&&(s!=this.wrapper.height()||o!=this.wrapper.width())&&this.position({adjustOffset:a}),this},jBox.prototype.setDimensions=function(t,i,s){!this.wrapper&&this._create(),this.content.css(t,i),(void 0==s||s)&&this.position()},jBox.prototype.setWidth=function(t,i){this.setDimensions("width",t,i)},jBox.prototype.setHeight=function(t,i){this.setDimensions("height",t,i)},jBox.prototype.position=function(t){if(t||(t={}),this.target=t.target||this.target||this.options.target||jQuery(window),this.dimensions={x:this.wrapper.outerWidth(),y:this.wrapper.outerHeight()},"mouse"!=this.target){if("center"==this.options.position.x&&"center"==this.options.position.y)return this.wrapper.css({left:"50%",top:"50%",marginLeft:this.dimensions.x*-.5+this.options.offset.x,marginTop:this.dimensions.y*-.5+this.options.offset.y}),this;var i=this.target.offset();!this.target.data("jBox-fixed")&&this.target.data("jBox-fixed",this.target[0]==jQuery(window)[0]||"fixed"!=this.target.css("position")&&this.target.parents()tion")}).length<=0?"static":"fixed"),"fixed"==this.target.data("jBox-fixed")&&this.options.fixed&&(i.top=i.top-jQuery(window).scrollTop(),i.left=i.left-jQuery(window).scrollLeft()),this.targetDimensions={x:this.target.outerWidth(),y:this.target.outerHeight(),top:i?i.top:0,left:i?i.left:0},this.pos={};var s=function(t){if(-1==jQuery.inArray(this.options.position[t],["top","right","bottom","left","center"]))return void(this.pos[this.options.attributes[t]]=this.options.position[t]);var i=this.options.attributes[t]="x"==t?"left":"top";return this.pos[i]=this.targetDimensions[i],"center"==this.options.position[t]?void(this.pos[i]+=Math.ceil((this.targetDimensions[t]-this.dimensions[t])/2)):(i!=this.options.position[t]&&(this.pos[i]+=this.targetDimensions[t]-this.dimensions[t]),void((this.options.outside==t||"xy"==this.options.outside)&&(this.pos[i]+=this.dimensions[t]*(i!=this.options.position[t]?1:-1))))
}.bind(this);if(s("x"),s("y"),this.options.pointer&&"number"!=jQuery.type(this.options.position.x)&&"number"!=jQuery.type(this.options.position.y)){var o=0;switch(this.pointer.align){case"center":"center"!=this.options.position[this._getOpp(this.options.outside)]&&(o+=this.dimensions[this._getOpp(this.options.outside)]/2);break;default:switch(this.options.position[this._getOpp(this.options.outside)]){case"center":o+=(this.dimensions[this._getOpp(this.options.outside)]/2-this.pointer.dimensions[this._getOpp(this.options.outside)]/2)*(this.pointer.align==this._getTL(this.pointer.align)?1:-1);break;default:o+=this.pointer.align!=this.options.position[this._getOpp(this.options.outside)]?this.dimensions[this._getOpp(this.options.outside)]*(-1!==jQuery.inArray(this.pointer.align,["top","left"])?1:-1)+this.pointer.dimensions[this._getOpp(this.options.outside)]/2*(-1!==jQuery.inArray(this.pointer.align,["top","left"])?-1:1):this.pointer.dimensions[this._getOpp(this.options.outside)]/2*(-1!==jQuery.inArray(this.pointer.align,["top","left"])?1:-1)}}o*=this.options.position[this._getOpp(this.options.outside)]==this.pointer.alignAttribute?-1:1,o+=this.pointer.offset*(this.pointer.align==this._getOpp(this._getTL(this.pointer.align))?1:-1),this.pos[this._getTL(this._getOpp(this.pointer.xy))]+=o}return t.adjustOffset&&t.adjustOffset.x&&(this.pos[this.options.attributes.x]+=parseInt(t.adjustOffset.x)*("left"==this.options.attributes.x?1:-1)),t.adjustOffset&&t.adjustOffset.y&&(this.pos[this.options.attributes.y]+=parseInt(t.adjustOffset.y)*("top"==this.options.attributes.y?1:-1)),this.pos[this.options.attributes.x]+=this.options.offset.x,this.pos[this.options.attributes.y]+=this.options.offset.y,this.wrapper.css(this.pos),this._adjustPosition(),this}},jBox.prototype.open=function(t){if(t||(t={}),this.isDestroyed)return!1;if(!this.wrapper&&this._create(),this.timer&&clearTimeout(this.timer),this._blockBodyClick(),this.isDisabled)return this;var i=function(){this.source&&this.options.getTitle&&(this.source.attr(this.options.getTitle)&&this.setTitle(this.source.attr(this.options.getTitle)),!0),this.source&&this.options.getContent&&(this.source.data("jBox-getContent")?this.setContent(this.source.data("jBox-getContent"),!0):this.source.attr(this.options.getContent)?this.setContent(this.source.attr(this.options.getContent),!0):null),this._fireEvent("onOpen"),(this.options.ajax&&this.options.ajax.url&&(!this.ajaxLoaded||this.options.ajax.reload)||t.ajax&&t.ajax.url)&&this.ajax(t.ajax||null),(!this.positionedOnOpen||this.options.repositionOnOpen)&&this.position({target:t.target})&&(this.positionedOnOpen=!0),this.isClosing&&this._abortAnimation(),this.isOpen||(this.isOpen=!0,this._attachEvents(),this.options.blockScroll&&jQuery("body").addClass("jBox-blockScroll-"+this.id),this.options.overlay&&this._addOverlay(),this.options.animation&&!this.isClosing&&this._animate("open"),this.options.fade?this.wrapper.stop().animate({opacity:1},{queue:!1,duration:this.options.fadock"})}.bind(this),always:function(){this.isOpening=!1}.bind(this)}):this.wrapper.css({display:"block",opacity:1}))}.bind(this);return!this.options.delayOpen||this.isOpen||this.isClosing||t.ignoreDelay?i():this.timer=setTimeout(i,this.options.delayOpen),this},jBox.prototype.close=function(t){if(t||(t={}),this.isDestroyed)return!1;if(this.timer&&clearTimeout(this.timer),this._blockBodyClick(),this.isDisabled)return this;var i=function(){this._fireEvent("onClose"),this.isOpen&&(this.isOpen=!1,this._detachEvents(),this.options.blockScroll&&jQuery("body").removeClass("jBox-blockScroll-"+this.id),this.options.overlay&&this._removeOverlay(),this.options.animation&&!this.isOpening&&this._animate("close"),this.options.fade?this.wrapper.stop().animate({opacity:0},{queue:!1,duration:this.options.fade,start:function(){this.isClosing=!0}.bind(this),complete:function(){this.wrapper.css({display:"none"}),this.options.onCloseComplete&&this.options.onCloseComplete.bind(this)(),this.options._onCloseComplete&&this.options._onCloseComplete.bind(this)()}.bind(this),always:function(){this.isClosing=!1}.bind(this)}):(this.wrapper.css({display:"none",opacity:0}),this.options._onCloseComplete&&this.options._onCloseComplete.bind(this)()))}.bind(this);return t.ignoreDelay?i():this.timer=setTimeout(i,Math.max(this.options.delayClose,10)),this},jBox.prototype.toggle=function(t){return this[this.isOpen?"close":"open"](t),this},jBox.prototype.disable=function(){return this.isDisabled=!0,this},jBox.prototype1,this},jBox.prototype.ajax=function(t){t||(t={}),this.options.ajax.getData&&!t.data&&this.source&&void 0!=this.source.attr(this.options.ajax.getData)&&(t.data=this.source.attr(this.options.ajax.getData)||"");var i=jQuery.extend(!0,{},this.options.ajax);this.ajaxRequest&&this.ajaxRequest.abort();var s=t.beforeSend||i.beforeSend||function(){},o=t.complete||i.complete||function(){},e=jQuery.extend(!0,i,t);return e.beforeSend=function(){e.spinner&&(this.wrapper.addClass("jBox-loading"),this.spinner=jQuery(e.spinner!==!0?e.spinner:'<div class="jBox-spinner"></div>').appendTo(this.container)),s.bind(this)()}.bind(this),e.complete=function(t){this.wrapper.removeClass("jBox-loading"),this.spinner&&this.spinner.remove(),e.setContent&&this.setContent(t.responseText),this.ajaxLoaded=!0,o.bind(this)(t)}.bind(this),this.ajaxRequest=jQuery.ajax(e),this},jBox.prototype.audio=function(t){if(t||(t={}),jBox._audio||(jBox._audio={}),!t.url||this.IE8)return this;if(!jBox._audio[t.url]){var i=jQuery("<audio/>");jQuery("<source/>",{src:t.url+".mp3"}).appendTo(i),jQuery("<source/>",{src:t.url+".ogg"}).appendTo(i),jBox._audio[t.url]=i[0]}jBox._audio[t.url].volume=Math.min(void 0!=t.volume?t.volume:(void 0!=this.options.volume?this.options.volume:100)/100,1),jBox._audio[t.url].pause();try{jBox._audio[t.url].currentTime=0}catch(s){}return jBox._audio[t.url].play(),this},jBox.prototype.destroy=function(){return this.detach().close({ignoreDelay:!0}),this.wrapper&&this.wrapper.remove(),this.isDestroyed=!0,this},jBox._getUn t++}}(),jQuery.fn.jBox=function(t,i){return t||(t={}),i||(i={}),new jBox(t,jQuery.extend(i,{attach:this}))},Function.prototype.bind||(Function.prototype.bind=function(t){var i=Array.prototype.slice.call(arguments,1),s=this,o=functionts)))};return o.prototype=this.prototype,e.prototype=new o,e});

/* Bootstrap */
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQ0}})})}(jclose)}(jlt()})}(j))})})}(jg,i)})}(jydown)}(jhis)})}(j,this}}(j,this}}(j))})})}(jow")})}(jd)})})}(jQuery);
/* underscore.js */
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT lirn m})}).call(this);

/* Angular.js */
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y){'use }function R(a){return Rb(a,va.call(arguments}function z(a){return"undefined"===
tc(a)}function D(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ja(a){return"[object Date]"===ma.call(a)}function C(a){return"function"===ta)throw xa("areq",b||"?",d||"required");rurn"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return ]}function rn b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=oe("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=V();this.din this};this.coe(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhlist()};var r=!0;this.debugInfoEnabled=function(a){return x(a)?(r=a,this):r};var s=!0;this.preAssignBindingsEnabled=function(a){return x(a)?(s=a,this):s};var H=10;this.onChangesTtl=function(a){return arguments.length?(H=a,this):
H};var u=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};var p=!0;this.cssClassDirectiveshis):p};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,f,n,M,Jment.createElement("div"),Ea=u,Fa=p,xa=H,da;t.prototype={$normalize:Da,$addClass:function(a){a&&0<a.length&&T.addClass(this.$$element,a)},$remoent,a)},$updaent,c(d)}})},$(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),
Ca="{{"===Aa&&"}}"=/g,Ba)},Ga=/^ngAttr[A-Z]/,Ha=/^(.+)Start$/;ca.$$addBindinng",c)}:w;ca.$$addBindingding")}:w;ca.$$addScoppe",b)}:w;ca.$$addScopecope")}:w;ca.$$createent(c)};return ca}]}function Hb(a,b){this.previousValue=a;this.currentb={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.htturn b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,cte,b)}var l,m;m=c.baseHref();var n=c.url(),r;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");
r=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?jc:rd}else r=Ga(n),m=kc;var s=r.substr(0,Ga(r).lastIndexOf("/")+1);l=new m(r,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var H=/^\s*(javascript|mailto):/i;e.on(!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var u=!0;c.onUrest())});dace=!1});retion Gd(a,b){this.astBuilder=a;this.$fg}]}function Jf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return Id(function(b){a.$evalAsync(bype.hasOwnProperty,Q=function(a){return D(a)?a.toLowerCase():a},wb=function(a){return D(a)?a.toUpperCase():a},Ia,F,za,va=[].slice,pg=[].splice,Wg=[].push,ma=Object.prototype.toString,Bc=Object.getPrototypeOf,xa=G("ng"),$=y.angular||(y.angular={}),Wb,sb=0;Ia=y.document.documentMode;var ia=Number a!==a};w.$inject=[];$a.$inject=[];var I=Array.isArray,ne=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Arraim(\x0.ruame_=f},qe=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],te=function(a){var b=a.currentScript,b=b&&b.getAttribute("src");if(!b)return!0;var d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}}(y.document),we=/[A-Z]/g,Ic=!1,La=3,Ae={full:"1.5.11",major:1,minor:5,dot:11,codeName:"princely-quest"};W.expando="ng339";var jb=W.cache={},bg=1;]]||{}};var Xf=/([:\-_]+(.))/g,Yf=/^moz([A-Z])/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},Yb=G("jqLite"),ag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Xb=/<|&#?\w+;/,Zf=/<([\w:-]+)/,$f=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,pa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pa.optgroup=pa.option;pa.tbody=pa.tfoot=pa.colgroup=pa.caption=pa.thead;pa.th=pa.td;var gg=y.Node.prototype.coa)&16)},Pa=W.prototyped",b))},t")+th+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".spl(a)]=a});var $c={};q("input select option textarea button form details".split(" "),function(a){$c[a]=!0});var gd={ngMinlength:"minlength",ngMaxlength:"maxlength",
ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:$b,removeData:ib,turn!1},cl(a[b])}},function(a,b){W[b]=a});q({data:$b,inheritedData:Eope"])},isolalate")},controller:Xc,injector:function(a){return Eb(a,"$injector")},remute(b)},hasClassyle[bid 0:n a[bturn aalue=HTML=b},em this}});q({removeDat:h(b)}},offn(b,d)},repl;d=b})},cturn b},ces||[]}b[d])}},,d)})()[0])},remove:Fb(a,!0);d=g}}},addClass:Db,removeClass:Cb,togga,b)})}a:null},next:function(a){return a.nextElementSiblin(b):[]},clone:Zb,triggera:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;Sa.prototyid)]tUid)]}turn b}};n Sa}]}],ig=/^([^(]+?)=>/,jg=/^[^(]*\(\s*([^)]*)\)/m,Xg=/,/,Yg=/^\s*(_?)(\S+?)\1\s*$/,hg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=G("$injector");fb.$$aturn c};var de=G("$anima$ge g}}}]},lf=["$pk)}}d)}rn :e}}}]},fa=G("$compile"),ec=new function(){};
Kc.$inject=["$provide","$$sanitizeUriProvider"];Hb.prototype.isFirse===ec};var bd=/^((?:x|data)[:\-_])/i,id=G("$controller"),hd=/^(\S+)(\s+as\s+([\w$]+)h+1}}]},jd="application/json",hc={"Content-Type":jd+";charset=utf-8"},rg=/^\[|^\{(?!\{)/,sg={"[":/]$/,"{":/}$/},qg=/^\)]\}',?\n/,Zg=G("$ht,
a);}},Ha=$.$interpolateMinErr=G("$interpolate");Ha.throwNt",a);};Haing())}a]}}}]},$g=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,ug={http:80,https:443,ftp:21},lb=G("$location"),vg=/^\s*[\\/]{2,}/,ah={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrn this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:sd(":"/"+a})n this},hash:sd("g():""}),n this}};
q([rd this}});var ea=G("$parse"),ud=[].constructor,vd=(!1).constructor,wd=Function.constructor,xd=(0).constructor,yd={}.constructor,zd="".constructor,Ag=ud.prototype,Bg=vd.prototype,Kb=wd.prototype,Cg=xd.prototype,Ad=yd.prototype,Dg=zd.prototype,xg=Kb.call,yg=Kb.apply,zg=Kb.bind,Fg=Ad.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),
function(a){Qb[a]=!0});var bh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':ions=a};mc.prototype={constructortokxOf(a+a):!1},ipeof a},isWhi0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifi$"===a},isIdentifierCnue(a)},
isValidIdentifierCber(a)},code613888},peekMu?a+b:a},isExpOber(a)},thrtext);},rear(a)})},rer:!0})},reate",b)}ions=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression=
"ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal="Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototyturn a},ody:a}},expressionStain()}},filtturn a},
expment()},assturn a},:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logturn a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relturn a},aturn a},multiplturn amary()},
turn a}turn b},parseArturn a},ide.text}},cvalue}},arrayDeclnts:a}}ies:a}},thrdex));},turn b},peens[0b,d,c)},peturn!1},a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};Gd.prototype={turn f},USE:"use",STRICT:"strict",win("")},generateF)+"};"},filte";":""},var";":"in("")},("v")}},getHasOwnPn c[d]}";"),a}ers[a]},ifb)+")+b+")"},a,";"}"))}},not:function(a){return"!("+a+")"},=null"},nonCompute)+'"]'},compute+b+"]"}r(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssign),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStria+")")},ensureSafeAssigntext)"},lazy,f,e)}},laz(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEce(-4)}esc");}turn d},uting]}};Hd.prototype={turn f},d}:d}}},":d}:d}},":d}:d}},":d}:d}},"b:h}:h}},"b:h}:h}},"b:c}:c}},"b:c}:c}},"b:c}:c}},"bin:c}:c}},"bin:c}:c}},"bi:c}:c}},"bi:c}:c}},"b:c}:c}},"b:c}:c}},"bi:c}:c}},"bi:c}:c}},"bi:c}:c}},"bi:c}:c}},"ter:f}:f}:a}:a}},ide:g}:g}},compute:n}:n}},nonCompute:h}:h}},c,f)}}};ast,b)};nc.prototype={constructor:nhecks)}};var Fa=G("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Hg=G("$compile"),aa=y.document.createElement("a"),Ld=ta(y.location.href);Md.$inject=["$document"];Rc.$inject=["$provide"];var Td=22,Sd=".",pc="0";Nd.$inject=["$locale"];
Pd.$inject=["$locale"];var Sg={yyyy:U("FullYear",4,0,!1,!0),yy:U("FullYear",2,0,!0,!0),y:U("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),LLLL:nb("Month",!1,!0),dd:U("Date",2),d:U("Date",1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:nb("Day"),EEE:nb("DayPM0),2))},ww:Vd(2),w:Vd(1),G:qc,GG:qc,GGG:MES[1]}},Rg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Qg=/^-?\d+$/;Od.$inject=["$locale"];var Lg=ha(Q),Mg=ha(wb);Qd.$inject=["$parse"];var Ce=ha({restrict:"E",()})}}}}),xb=k:f}}})})}}}});q(["src","srcset",)})}}}});var Nb={$addControl:w,$$renameControl:function(a,
b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Wd.$inject=["$element","$attrs","$scope","$animate","$interpolate"]}}}}}]},De=
ee(),Pe=ee(!0),Tg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ch=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,dh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Ug=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,fe=/^(\d{4,})-(\d{2})-(\d{2})$/,ge=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
wc=/^(\d{4,})-W(\d\d)$/,he=/^(\d{4,})-(\d\d)$/,ie=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Yd=V();q(["date","datetime-local","month","time","week"],function(a){Yd[a]=!0});var j;sc(c)},date:ob("date",fe,Pb(fe,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ge,Pb(ge,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ie,Pb(ie,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("wrn NaN},"yyyy-Www"),month:ob("month",he,Pb(he,["yyyy","MM"]),"yyyy-MM")te()})},url:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ch.test(d)}st(d)}ender)p",l))},c?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Lc=["$browser","$sniffer","$filter","c)}}}}}],eh=/^(true|false|\d)})}}}},He=["$ca})}}}}],Je=["$interpolate","$ca})}}}}],Ie=["$sce","$parse","$c)})}}}}],ff=ha({restrict:"A",require:"ngModelnge)})}}),Ke=vc("",!0),Me=vc("Odd",0),Le=vc("Even",1),Ne=Va({loak")y:500}}],Qc={},fh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".spl)}}}}]});var Re=["$animate","$c))})}}}],Se=["$templateRequest","$anchorScroll","$a)})}}}}],jf=["$c(b))}}}],Te=Va({priority:450,nit)}gth}}}},rb="ng-valid",ae="ng-invalid",Wa="ng-pristine",Ob="ng-dirty",ce="ng-pending",pb=G("ngModel"),gh=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interrn b})}],df=["$roo})}}}}}],hh=/(\s+|^)default(\s+
!0}]}},Ue=Va({terminal:!0,priority:1E3}),ih=G("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,bf=["$compile","$document",",n)}}}}],Ve=["$locale","$interpolate"c)})}}}],We=["$parse","$animate","$cw})}}}}],Xe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Qe=["$a})})}}})},!0)}),Ze=["$animate","$c})})}}}],$e=Va({transclude:"element",priority:1200,require:"^ngSwitch",multiElement::b})})}}),af=Va({transclude:"element",
priority:1200,require:"^ngSwitch",multiElement:nt:b})}}),kh=G("ngTransclude"),cf=["$ck()}}}}],Ee=["$templatext)}}}],lh={$setViewValue:w,$render:w},mh=["$element","r()})}}}}}},Ge=["$inter,f)})})b)}=f}=f}}}}};y.angular.bootstrap?y.console&&console.log("WARNING: Tried to load angular more than once."):(xe(),ze($),$.module("ngLocale",[],["$per"}})}]),F(y.documentnt,Gc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map


/* Angular-animate.js */
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: }}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map


/* Angular cookies plugin */
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: et=l})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map


/* Angular local storage plugin */
/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.7.1 - 2017-06-21
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(a,b){var c=b.isDefined,d=b.isUndefined,e=b.isNumber,f=b.isObject,g=b.isArray,h=b.isString,i=b.extend,j=b.toJson;b.module("LocalStorageModule",[]).provider("localStorageService",function(){this.prefix="ls",this.storageType="localStorage",this.cookie={expiry:30,path:"/",secure:!1},this.defaultToCookie=!0,this.notify={setItem:!0,removeItem:!1},this.setPrefix=function(a){return this.prefix=a,this},this.setStora,this},this.setDefaultTa,this},this.setStoragc,this},this.setStorageCookia,this},this.se},this},this.$get=["$rootScope","$window","$document","$parse","$timeout",function(a,b,k,l,m){function n(c){if(c||(c=b.event),s.setItem&&h(c.key)&&w(c.key)){var d=v(cType})})}}var o,p=this,q=p.prefix,r=p.cookie,s=p.notify,t=p.storageType;k?k[0]&&(k=k[0]):k=document,"."!==q.substr(-1)&&(q=q?q+".":""rn"),"")},w=function(a){return 0===a.indexOf(q)},x=function(){try{var c=t in b&&null!==b[t],d=u("__"+Math.round(1e7*Math.random()));return c&&(o=b[t],o.setItem(d,""),o.removeItem(d)),c}catch(b){return p.defaultToCookie&&(t="cookie"),a.$broadcast("LocalStorageModule.notification.error",b.message),!1}},y=x(),z=function(b,c,e){var f=J();try{if(K(e),c=d(c)?null:j(c),!y&&p.defaultToCookie||"cookie"===p.storageType)return y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),s.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:"cookie"}),F(b,c);try{o&&o.setItem(u(b),c),s.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:p.storageType})}catch(d){return a.$broadcast("LocalStorageModule.notification.error",d.message),F(b,c)}return!0}finally{K(f)}},A=function(b,c){var d=J();try{if(K(c),!y&&p.defaultToCookie||"cookie"===p.storageType)return y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),G(b);var e=o?o.getItem(u(b)):null;if(!e||"null"===e)return null;try{return JSON.parse(e)}catch(a){return e}}finally{K(d)}},B=function(){var b=J();try{var c=0;arguments.length>=1&&("localStorage"===arguments[arguments.length-1]||"sessionStorage"===arguments[arguments.length-1])&&(c=1,K(arguments[arguments.length-1]));var d,e;for(d=0;d<arguments.length-c;d++)if(e=arguments[d],!y&&p.defaultToCookie||"cookie"===p.storageType)y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),s.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:e,storageType:"cookie"}),H(e);else try{o.removeItem(u(e)),s.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:e,storageType:p.storageType})}catch(b){a.$broadcast("LocalStorageModule.notification.error",b.message),H(e)}}finally{K(b)}},C=function(b){var c=J();try{if(K(b),!y)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),[];var d=q.length,e=[];for(var f in o)if(f.substr(0,d)===q)try{e.push(f.substr(d))}catch(b){return a.$broadcast("LocalStorageModule.notification.error",b.Description),[]}return e}finally{K(c)}},D=function(b,c){var d=J();try{K(c);var e=q?new RegExp("^"+q):new RegExp,f=b?new RegExp(b):new RegExp;if(!y&&p.defaultToCookie||"cookie"===p.storageType)return y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),I();if(!y&&!p.defaultToCookie)return!1;var g=q.length;for(var h in o)if(e.test(h)&&f.test(h.substr(g)))try{B(h.substr(g))}catch(b){return a.$broadcast("LocalStorageModule.notification.error",b.message),I()}return!0}finally{Ke),!1}}(),F=function(b,c,h,i){if(d(c))return!1;if((g(c)||f(c))&&(c=j(c)),!E)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var l="",m=new Date,n="";if(null===c?(m.setTime(m.getTime()+-864e5),l="; expires="+m.toGMTString(),c=""):e(h)&&0!==h?(m.setTime(m.getTime()+24*h*60*60*1e3),l="; expires="+m.toGMTString()):0!==r.expiry&&(m.setTime(m.getTime()+24*r.expiry*60*60*1e3),l="; expires="+m.toGMTString()),b){var o="; path="+r.path;r.domain&&(n="; domain="+r.domain),"boolean"==typeof i?i===!0&&(n+="; secure"):r.secure===!0&&(n+="; secure"),k.cookie=u(b)+"="+encodeURIComponent(c)+l+o+n}}catch(b){return a.$broadcast("LocalStorageModule.notification.error",b.message),!1}return!0},G=function(b){if(!E)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var c=k.cookie&&k.cookie.split(";")||[],d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(u(b)+"=")){var f=decodeURIComponent(e.substring(q.length+b.length+1,e.length));try{var g=JSON.parse(f);return"number"==typeof g?f:g}catch(a){return f}}}return null},H=function(a){F(a,n;H(e)}},J=function(){retux()),y},L=function(a,b,d,e,g){e=e||b;var h=A(e,g);return null===h&&c(d)?h=d:f(h)&&f(d)&&(h=i(h,d)),l(b).assign(a,h),a.$watch(b,function(a){z(e,a,g)},f(a[b]))};y&&(b.addEventListener?(b.addEventListener("storage",n,!1),a.$on("$destroy",function(){b.removeEventListener("storage",n)})):b.attachEvent&&(b.attachEvent("onstorage",n),a.$on("$dge",n)})));var M=function(a){var c=J();try{K(a);for(var d=0,e=b[t],f=0;f<e.length;f++)0===e.key(f).indexOf(q)&&d++;return d}finally{K(c)}},N=function(a){q=a};return{isSupported:y,getStorageType:J,setStorageType:K,setPrefix:N,set:z,add:z,get:A,keys:C,remove:B,clearAll:D,bind:L,deriveKey:u,underiveKey:v,length:M,defaultToCookie:this.defaultToCookie,cookie:{isSupported:E,set:F,add:F,get:G,remove:H,clearAll:I}}}]})}(window,window.angular);
//# sourceMappingURL=angular-local-storage.min.js.map

/* Angular gettext plugin */
/* jshint ignore:start */
angular.module('gettext', []);

angular.module('gettext').constant('gettext', function (str) {
    /*
     * Does nothing, simply returns the input string.
     *
     * This function serves as a marker for `grunt-angular-gettext` to know that
     * this string should be extracted for translations.
     */
    return str;
});

angular.module('gettext').factory('gettextCatalog', ["gettextPlurals", "$http", "$cacheFactory", "$interpolate", "$rootScope", function (gettextPlurals, $http, $cacheFactory, $interpolate, $rootScope) {
    var catalog;
    var noContext = '$$noContext';

    // IE8 returns UPPER CASE tags, even though the source is lower case.
    // This can causes the (key) string in the DOM to have a different case to
    // the string in the `po` files.
    // IE9, IE10 and IE11 reorders the attributes of tags.
    var test = '<span id="test" title="test" class="tested">test</span>';
    var isHTMLModified = (angular.element('<span>' + test + '</span>').html() !== test);

    var prefixDebug = function (string) {
        if (catalog.debug && catalog.currentLanguage !== catalog.baseLanguage) {
            return catalog.debugPrefix + string;
        } else {
            return string;
        }
    };

    var addTranslatedMarkers = function (string) {
        if (catalog.showTranslatedMarkers) {
            return catalog.translatedMarkerPrefix + string + catalog.translatedMarkerSuffix;
        } else {
            return string;
        }
    ;
    }

    catalog = {
        debug: false,
        debugPrefix: '[MISSING]: ',
        showTranslatedMarkers: false,
        translatedMarkerPrefix: '[',
        translatedMarkerSuffix: ']',
        strings: {},
        baseLanguage: 'en',
        currentLanguage: 'en',
        cache: $cacheFactory('strings'),

        setCurrentLanguage: function (lang) {
            this.currentLanguage = lang;
            broadcastUpdated();
        },

        getCurrentLanguage: function () {
            return this.currentLanguage;
        },

        setStrings: function (language, strings) {
            if (!this.strings[language]) {
                this.strings[language] = {};
            }

            for (var key in strings) {
                var val = strings[key];

                if (isHTMLModified) {
                    // Use the DOM engine to render any HTML in the key (#131).
                    key = angular.element('<span>' + key + '</span>').html();
                }

                if (angular.isString(val) || angular.isArray(val)) {
                    // No context, wrap it in $$noContext.
                    var obj = {};
                    obj[noContext] = val;
                    val = obj;
                }

                // Expand single strings for each context.
                for (var context in val) {
                    var str = val[context];
                    val[context] = angular.isArray(str) ? str : [str];
                }
                this.strings[language][key] = val;
            }

            broadcastUpdated();
        },

        getStringForm: function (string, n, context) {
            var stringTable = this.strings[this.currentLanguage] || {};
            var contexts = stringTable[string] || {};
            var plurals = contexts[context || noContext] || [];
            return plurals[n];
        },

        getString: function (string, scope, context) {
            string = this.getStringForm(string, 0, context) || prefixDebug(string);
            string = scope ? $interpolate(string)(scope) : string;
            return addTranslatedMarkers(string);
        },

        getPlural: function (n, string, stringPlural, scope, context) {
            var form = gettextPlurals(this.currentLanguage, n);
            string = this.getStringForm(string, form, context) || prefixDebug(n === 1 ? string : stringPlural);
            if (scope) {
                scope.$count = n;
                string = $interpolate(string)(scope);
            }
            return addTranslatedMarkers(string);
        },

        loadRemote: function (lang, url) {
            return $http({
                method: 'GET',
                url: url,
                cache: catalog.cache
                  });
        }
    };

    return catalog;
}]);

angular.module('gettext').directive('translate', ["gettextCatalog", "$parse", "$animate", "$compile", "$window", function (gettextCatalog, $parse, $animate, $compile, $window) {
    // Trim polyfill for old browsers (instead of jQuery)
    // Based on AngularJS-v1.2.2 (angular.js#620)
    var trim = (function () {
        if (!String.prototype.trim) {
                 };
        }
             };
    })();

    function assert(condition, missing, found) {
        if (!condition) {
            throw new Error('You should add a ' + missing + ' attribute whenever you add a ' + found + ' attribute.');
        }
    }

    var msie = parseInt((/msie (\d+)/.exec(angular.lowercase($window.navigator.userAgent)) || [])[1], 10);

    return {
        restrict: 'AE',
        terminal: true,
        compile: function compile(element, attrs) {
            // Validate attributes
            assert(!attrs.translatePlural || attrs.translateN, 'translate-n', 'translate-plural');
            assert(!attrs.translateN || attrs.translatePlural, 'translate-plural', 'translate-n');

            var msgid = trim(element.html());
            var translatePlural = attrs.translatePlural;
            var translateContext = attrs.translateContext;

            if (msie <= 8) {
                // Workaround fix relating to angular adding a comment node to
                // anchors. angular/angular.js/#1949 / angular/angular.js/#2013
                if (msgid.slice(-13) === '<!--IE fix-->') {
                    msgid = msgid.slice(0, -13);
                }
            }

            return {
                post: function (scope, element, attrs) {
                    var translateValues = scope.$eval(attrs.translate);
                    var countFn = $parse(attrs.translateN);
                    var pluralScope = null;
                    var linking = true;

                    function update() {
                        translateValues = scope.$eval(attrs.translate);
                        // Fetch correct translated string.
                        var translated;
                        if (translatePlural) {
                            scope = pluralScope || (pluralScope = scope.$new());
                            scope.$count = countFn(scope);
                            translated = gettextCatalog.getPlural(scope.$count, msgid, translatePlural, translateValues || null, translateContext);
                        } else {
                            translated = gettextCatalog.getString(msgid, translateValues || null, translateContext);
                        }

                        var oldContents = element.contents();

                        if (oldContents.length === 0){
                            return;
                        }

                        // Avoid redundant swaps
                        if (translated === trim(oldContents.html())){
                            // Take care of unlinked content
                            if (linking){
                                $compile(oldContents)(scope);
                            }
                            return;
                        }

                        // Swap in the translation
                        var newWrapper = angular.element('<span>' + translated + '</span>');
                        $compile(newWrapper.contents())(scope);
                        var newContents = newWrapper.contents();

                        $animate.enter(newContents, element);
                        $animate.leave(oldContents);
                    }

                    if (attrs.translateN) {
                        scope.$watch(attrs.translateN, update);
                    }

                    if (typeof translateValues !== 'undefined') {
                        scope.$watch(attrs.translate, update);
                    }

                    scope.$on('gettextLanguageChanged', update);

                    update();
                    linking = false;
                }
            }
        }
    };
}]);

angular.module('gettext').filter('translate', ["gettextCatalog", function (gettextCatalog;
    }
    filter.$stateful = true;
    return filter;
}]);

// Do not edit this file, it is autogenerated using genplurals.py!
angular.module("gettext").factory("gettextPlurals", function () {
    return function (langCode, n) {
        switch (langCode) {
            case "ay":  // Aymará
            case "bo":  // Tibetan
            case "cgg": // Chiga
            case "dz":  // Dzongkha
            case "fa":  // Persian
            case "id":  // Indonesian
            case "ja":  // Japanese
            case "jbo": // Lojban
            case "ka":  // Georgian
            case "kk":  // Kazakh
            case "km":  // Khmer
            case "ko":  // Korean
            case "ky":  // Kyrgyz
            case "lo":  // Lao
            case "ms":  // Malay
            case "my":  // Burmese
            case "sah": // Yakut
            case "su":  // Sundanese
            case "th":  // Thai
            case "tt":  // Tatar
            case "ug":  // Uyghur
            case "vi":  // Vietnamese
            case "wo":  // Wolof
            case "zh":  // Chinese
                // 1 form
                return 0;
            case "is":  // Icelandic
                // 2 forms
                return (n%10!=1 || n%100==11) ? 1 : 0;
            case "jv":  // Javanese
                // 2 forms
                return n!=0 ? 1 : 0;
            case "mk":  // Macedonian
                // 2 forms
                return n==1 || n%10==1 ? 0 : 1;
            case "ach": // Acholi
            case "ak":  // Akan
            case "am":  // Amharic
            case "arn": // Mapudungun
            case "br":  // Breton
            case "fil": // Filipino
            case "fr":  // French
            case "gun": // Gun
            case "ln":  // Lingala
            case "mfe": // Mauritian Creole
            case "mg":  // Malagasy
            case "mi":  // Maori
            case "oc":  // Occitan
            case "pt_BR":  // Brazilian Portuguese
            case "tg":  // Tajik
            case "ti":  // Tigrinya
            case "tr":  // Turkish
            case "uz":  // Uzbek
            case "wa":  // Walloon
            case "zh":  // Chinese
                // 2 forms
                return n>1 ? 1 : 0;
            case "lv":  // Latvian
                // 3 forms
                return (n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);
            case "lt":  // Lithuanian
                // 3 forms
                return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2);
            case "be":  // Belarusian
            case "bs":  // Bosnian
            case "hr":  // Croatian
            case "ru":  // Russian
            case "sr":  // Serbian
            case "uk":  // Ukrainian
                // 3 forms
                return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
            case "mnk": // Mandinka
                // 3 forms
                return (n==0 ? 0 : n==1 ? 1 : 2);
            case "ro":  // Romanian
                // 3 forms
                return (n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2);
            case "pl":  // Polish
                // 3 forms
                return (n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
            case "cs":  // Czech
            case "sk":  // Slovak
                // 3 forms
                return (n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
            case "sl":  // Slovenian
                // 4 forms
                return (n%100==1 ? 1 : n%100==2 ? 2 : n%100==3 || n%100==4 ? 3 : 0);
            case "mt":  // Maltese
                // 4 forms
                return (n==1 ? 0 : n==0 || ( n%100>1 && n%100<11) ? 1 : (n%100>10 && n%100<20 ) ? 2 : 3);
            case "gd":  // Scottish Gaelic
                // 4 forms
                return (n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;
            case "cy":  // Welsh
                // 4 forms
                return (n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;
            case "kw":  // Cornish
                // 4 forms
                return (n==1) ? 0 : (n==2) ? 1 : (n == 3) ? 2 : 3;
            case "ga":  // Irish
                // 5 forms
                return n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4;
            case "ar":  // Arabic
                // 6 forms
                return (n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5);
            default: // Everything else
                return n != 1 ? 1 : 0;
        }
    }
});
/* jshint ignore:end */

/* Angular lazy load images plugin */
/*
 * angular-lazy-load
 *
 * Copyright(c) 2014 Paweł Wszoła <wszola.p@gmail.com>
 * MIT Licensed
 *
 */

/**
 * @author Paweł Wszoła (wszola.p@gmail.com)
 *
 */

angular.module('angularLazyImg', []);

angular.module('angularLazyImg').factory('LazyImgMagic', [
  '$window', '$rootScope', 'lazyImgConfig', 'lazyImgHelpers',
  function($window, $rootScope, lazyImgConfig, lazyImgHelpers){
    'use strict';

    var winDimensions, $win, images, isListening, options;
    var checkImagesT, saveWinOffsetT, containers;

    images = [];
    isListening = false;
    options = lazyImgConfig.getOptions();
    $win = angular.element($window);
    winDimensions = lazyImgHelpers.getWinDimensions();
    saveWinOffsetT = lazyImgHelpons();
    }, 60);
    options.container = options.containers || options.container;
    containers = options.container ? [].concat(options.container) : [$win];

    function checkImages(){
      for(var i = images.length - 1; i >= 0; i--){
        var image = images[i];
        if(image && lazyImgHelpers.isElementInView(image.$elem[0], options.offset, winDimensions)){
          loadImage(image);
          images.splice(i, 1);
        }
      }
      if(!images.length){ stopListening(); }
    }

    checkImagesT = lazyImgHelpers.throttle(checkImages, 30);

    function listen(param){
      contaisT);
      });
      $win[param]('resize', checkImagesT);
      $win[param]('resize', saveWinOffsetT);
    }

    function startListening(){
      isListening = true;
    n');
      }, 1)off');
    }

    function removeImage(image){
      var index = images.indexOf(image);
      if(index !== -1) {
        images.splice(index, 1);
      }
    }

    function loadImage(photo){
      var img = new Image();
      img.onerror = function(){
        if(options.errorClass){
          photo.$elem.addClass(options.errorClass);
        }
        if(photo.errorSrc){
          setPhotoSrc(photo.$elem, photo.errorSrc);
        }
        $rootScope.$apply(function () {
          $rootScope.$emit('lazyImg:error', photo);
          options.onError(photo);
        });
      };
      img.onload = function(){
        setPhotoSrc(photo.$elem, photo.src);
        if(options.successClass){
          photo.$elem.addClass(options.successClass);
        }
        $root);
        });
      };
      img.src = photo.src;
    }

    function setPhotoSrc($elem, src){
      if ($elem[0].nodeName.toLowerCase() === 'img') {
        $elem[0].src = src;
      } else {
        $elem.css('background-image', 'url("' + src + '")');
      }
    }

    $elem;
    }

    Photo.prototype.setSource = function(source){
      this.src = source;
      images.unshift(this);
      startListening();
    };

    Photo.prototype.setErrorSource = function(errorSource){
      this.errorSrc = errorSource;
    };

    Photo.prototype.removeImage = function(){
      removeImage(this);
      if(!images.length){ stopListening(); }
    };

    Photo.prototype.checkImages = checkImages;

    Photo.addContainer = function (container) {
      stopListening();
      containers.push(container);
      startListening();
    };

    Photo.removeContainer = function (container) {
      stopListening();
      containers.splice(containers.indexOf(container), 1);
      startListening();
    };

    return Photo;
  }
]);

angular.module('angularLazyImg').provider('lazyImgConfig', function() {
  'use strict';

  this.options = {
    offset       : 100,
    errorClass   : null,
    successClass : null,
    onError      : function(){},
    onSuccess    : function(){}
  };

  this.$get = function() {
    var options = this.options;
    return {
      getOptions: function() {
        return options;
      }
    };
  };

  this.ptions);
  };
});

angular.module('angularLazyImg').factory('lazyImgHelpers', [
  '$window', function($window){
    'use s    };
    }

    function isElementInView(elem, offset, winDimensions) {
      var rect = elem.getBoundingClientRect();
      return (
        // check if any part of element is in view extented by an offset
       (rect.left <= winDimensions.width + offset) &&
       (rect.right >= 0 - offset) &&
       (rect.top <= winDimensions.height + offset) &&
       (rect.bottom >= 0 - offset)
      );
    }

    // http://remysharp.com/2010/07/21/throttling-function-calls/
    function throttle(fn, threshhold, scope) {
      var last, deferTimer;
   }
      };
    }

    return {
      isElementInView: isElementInView,
      getWinDimensions: getWinDimensions,
      throttle: throttle
    };
  }
]);

angular.module('angularLazyImg')
  .directive('lazyImg', [
    '$rootScope', '$log', 'LazyImgMagic', function ($rootScope, $log, LazyImgMagic) {
      'use strict';

      function link(scope, element, attributes) {
        scope.lazyImage = new LazyImgMagic(element);
        scope.lazyImage.setErrorSource(attributes.lazyImgError);
        var deregister = attributes.$observe('lazyImg', function (newSource) {
          if (newSource) {
            deregister();
            scope.lazyImage.setSource(newSource);
          }
        });

        var eventsDeregister = $rootScope.$on('lazyImg:refresh', function () {
          scope.lazyImage.checkImages();
        });

        scope.$on);
        });
      }

      return {
        link: link,
        restrict: 'A'
      };
    }
  ])
  .directive('lazyImgContainer', [
    'LazyImgMagic', function (LazyImgMagic) {
      'use strict';

      function link(scope, element) {
        LazyImgMagic.addContainer(element);
        scope.$on('$destroy', function () {
          LazyImgMagic.removeContainer(element);
        });
      }

      return {
        link: link,
        restrict: 'A'
      };
    }
  ]);

/* howler.js (web audio lib) */
/*! howler.js v2.0.3 | (c) 2013-2017, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.pro._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&(o.masterGain.gain.value=e);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&(o.masterGain.gain.value=e?0:o._volume);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}retunull,_((/^x-/,pCodecs(),e},no$/,"")},e},_enableMobileAudio:function(){var e=this||n,o=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),t=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(o||t)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var r=function(){var n=e.ctx.createBufferSource();n.buffer=e._scratchBuffer,n.connect(e.ctx.destination),void 0===n.start?n.noteOn(0):n.start(0),n.onended=function(){n.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchend",r,!0),e}},))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.state="resuming",e.ctx.rt("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};v);n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.mobileAutoEnable&&n._enableMobileAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.lo sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e){e="__default";for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state&&!t._sprite[e])return t._queue.push({event:"play",action:function(){t.play(t._soundById(i._id)?i._id:void 0)}}),i._id;if(r&&!i._paused)return o||setTimeout(function(){t._emit("play",i._id)},0),i._id;t._webAudio&&n._autoResume();var d=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),_=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-d),s=1e3*_/Math.abs(i._rate);i._paused=!1,i._ended=!1,i._sprite=e,i._seek=d,i._start=t._sprite[e][0]/1e3,i._stop=(t._sprite[e][0]+t._sprite[e][1])/1e3,i._loop=!(!i._loop&&!t._sprite[e][2]);var l=i._node;if(t._web,i._id)},0)},f="running"===n.state;if("loaded"===t._state&&f)c();else{var p=f||"loaded"!==t._state?"load":"resume";t.once(p,c,f?i._id:null),t._clearTimer(i._id)}}else{var v=function(){l.currentTime=d,l.muted=i._muted||t._muted||n._muted||l.muted,l.volume=i._volume*n.volume(),l.playbackRate=i._rate,l.play(),s!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),s)),o||t._emit("play",i._id)},m="loaded"===t._state&&(window&&window.ejecta||!l.readyState&&n._navigator.isCocoonJS);if(4===l.readyState||m)v(Event,h,!1)};l.addEventListener(n._canPlayEvent,h,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)return n;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);if(a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node))if(o._webAudio){if(!a._node.bufferSource)return n||o._emit("stop",a._id),o;void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)}else isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause());a&&!n&&o._emit("stop",a._id)}return o},mute:function(e,o){var t=this;if("loaded"!==t._state)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this,u=Math.abs(e-o),i=e>o?"out":"in",d=u/.01,_=d>0?t/d:t;if(_<4&&(d=Math.ceil(d/(4/_)),_=4),"loaded"!==a._state)return a._queue.push({event:"de(e,o,t,r)}}),a;a.volume(e,r);for(var s=a._getSoundIds(r),l=0;l<s.length;l++){var c=a._soundById(s[l]);if(c){if(r||a._stopFade(s[l]),a._webAudio&&!c._muted){var f=n.ctx.currentTime,p=f+t/1e3;c._volume=e,c._node.gain.setValueAtTime(e,f),c._node.gain.linearRampToValueAtTime(o,p)}var v=e;c._interval=setInterval(function(n,t){d>0&&(v+="in"===i?.01:-.01),v=Math.max(0,v),v=Math.min(1,v),v=Math.round(100*v)/100,a._webAudio?(void 0===r&&(a._volume=v),t._volume=v):a.volume(v,n,!0),(o<e&&v<=o||o>e&&v>=o)&&(clearInterval(t._interval),t._interval=null,a.volume(o,n),a._emit("fade",n))}.bind(a,s[l],c),_)}}return a},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o._emit("fade"));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart,i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.value=e:i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state)return t._queue.push({event:".apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),s&&t.play(o,!0),!t._webAudio&&i._node&&(i._node.currentTime=e),t._emit("seek",o)}retur!0;return][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++){o[t]._paused||e.stop(o[t]._id),e._webAudio||(o[t]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1)),delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1)}var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=n:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if(n){for(a=0;a<r.length;a++)if(n===r[a].fn&&o===r[a].id){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var u=Object.keys(t);for(a=0;a<u.length;a++)0===u[a].indexOf("_on")&&Array.isArray(t[u[a]])&&(t[u[a]]=[])}re(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e|l(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t},_loadQueue:function(){var e=this;if(e._queue.length>0){var n=e._queue[0];e.loadQueue()}),n.action()}return e},_ended:function(e){var o=this,t=e._sprite,r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id),o},_clearTimer:function(e){var n=this;return n._endTimers[e]&&(clearTimeout(n._endTimers[e]),delete n._endTimers[e]),nreturn null},_irn new t,1),o--)}}},o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.value=e._rate,o},_cleanBuffer:function(e){var n=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}}return e.bufferSource=nuthis.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._muted=o._muted,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.createe.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._muted=o._muted,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_eistener,!1)},__loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.responseType="arraybuffresponse,e],e.load(.ofaoadQueue())},_=function(){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.value=1,n.masterGain.connect(n.ctx.destination)),n._setup()};"function"==typeof define&&define.amr:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();

/* Neutrinoparticles */
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.def]=a.value)};$jscoal?global:p};$jscomp.global=$jscomp.getGlobal(this);
$jsc,value:f})}};$jscomp.polyfill("Num.pow(2,-52)},"es6-impl","es3");
function NeutrinoString(16)}var f=this;this.equalv3_=function(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[2]==b[2]};this.equalq_=function(a,b){return a[0]==b[0]&&a[1]==b[1]&&a[2]==b[2]&&a[3]==b[3]};this.a=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+,a[1]+b[1]]};this.y=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c};this.z=function(a,b){return[a[0]+b,a[1]+b]};this.c=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];
a[2]=b[2]+c[2]};this.d=function(a,b){return[a[0]+b[0],a[1]+b[1],a[2]+b[2]]};this.C=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c;a[2]=b[2]+c};this.D=function(a,b){return[a[0]+b,a[1]+b,a[2]+b]};this.addq=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3]};this.addq_=function(a,b){return[a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3]]};this.e=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-,a[1]-b[1]]};this.A=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c};this.B=
function(a,b){return[a[0]-b,a[1]-b]};this.nf=function(a,b,c){a[0]=b-c[0];a[1]=b-c[1]};this.of=function(a,b){return[a-b[0],a-b[1]]};this.g=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2]};this.h=function(a,b){return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]};this.E=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c;a[2]=b[2]-c};this.F=function(a,b){return[a[0]-b,a[1]-b,a[2]-b]};this.rf=function(a,b,c){a[0]=b-c[0];a[1]=b-c[1];a[2]=b-c[2]};this.sf=function(a,b){return[a-b[0],a-b[1],a-b[2]]};this.i=function(a,
b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1]};this.j=function(a,b){return[a[0]*b[0],a[1]*b[1]]};this.k=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2]};this.l=function(a,b){return[a[0]*b[0],a[1]*b[1],a[2]*b[2]]};this.m=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1]};this.n=function(a,b){return[a[0]/b[0],a[1]/b[1]]};this.o=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2]};this.p=function(a,b){return[a[0]/b[0],a[1]/b[1],a[2]/b[2]]};this.H=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*
b[2]]+a[3]*b[3]};this.q=function(a,b,c){a[0]=b[0]*c;a[1]=b[]*b,a[1]*b]};this.s=function(a,b,c){a[0]=b[0]/c;a[1]=b[1]/c};this.t=function(a,b){return[a[0]/b,a[1]/b]};this.u=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c};this.v=function(a,b){return[a[0]*b,a[1]*b,a[2]*b]};this.w=function(a,b,c){a[0]=b[0]/c;a[1]=b[1]/c;a[2]=b[2]/c};this.x=function(a,b){return[a[0]/b,a[1]/b,a[2]/b]};this.y=function(a,
b,c){a[0]=b[0]+c;a[1]=b[1]+c};this.z=function(a,b){return[a[0]+b,a[1]+b]};this.A=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c};this.B=function(a,b){return[a[0]-b,a[1]+a[1]*]+a[2]*b[2]};this.I=function(a,b,c){var d=b[0],e=b[1];b=b[2];var f=c[0],m=c[1];c=c[2];a[0]=e*c-b*m;a[1]=b*f-d*c;a[2]=d*m-e*f};this.J=function(a,b){var c=a[0],d=a[1],e=a[2],f=b[0],m=b[1],n=b[2];return[d*n-e*m,e*f-c*n,c*m-+a[1]*a]+a[1]*a[1]};this.M=function(a,b){f.q(a,b,1/f.K(b))};this.N=function(a){return f.r(a,1/f.K(a))};this.O=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])};this.P=function(a){return a[0]*a[0]+a[1]*a[1]+a[2]*a[2]};this.Q=function(a,b){f.u(a,b,1/f.O(b))};this.R=function(a){return f.v(a,1/f.O];a[1]=];a[2]=b[2]};this.U=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=
b[3]};this.V=function(a,b,c){a[0]=b;a[1]=c};this.W=function(a,b,c,d){a[0]=b;a[1]=c;a[n a+(b-a)*c};this.Y=function(a,b,c,d){a[0]=b[0]+(c[0]-b[0])*d;a[1]=b[1]+(c[1]-b[1])*d};this.Z=function(a,b,c){return[a[0]+(b[0]-a[0])*c,a[1]+(b[1]-a[1])*c]};this.ab=function(a,b,c,d){a[0]=b[0]+(c[0]-b[0])*d;a[1]=b[1]+(c[1]-b[1])*d;a[2]=b[2]+(c[2]-b[2])*d};this.bb=function(a,b,c){return[a[0]+(b[0]-a[0])*c,a[1]+(b[1]-a[1])*c,a[2]+(b[2]-a[2])*c]};this.slerpq=function(a,b,c,d){var e=
f.dotq_(b,c),r=[];0>e?(f.negq(r,c),e=-e):f.U(r,c);1-e<Number.EPSILON?(a[0]=f.X(b[0],c[0],d),a[1]=f.X(b[1],c[1],d),a[2]=f.X(b[2],c[2],d),a[3]=f.X(b[3],c[3],d)):(c=f.acos_(e),f.mulqscalar(a,f.addq_(f.mulqscalar_(b,f.sin_((1-d)*c)),f.mulqscalar_(r,f.sin_(d*c))),1/f.sin_(c)))};this.slerpq_=function(a,b,c){var d=[];slerpq(d,a,b,c);return d};this.acos_=function(a){return Math.acos(a)};this.sin_=function(a){return Math.sin(a)};this.cos_=function(a){return Math.cos(a)};this.taus88=function(a){a||(a=0);var b,
c,d;this.seed=function(a){a&=4294967295;b=2>a?a+2:a;c=8>a?a+8:a;d=16>a?a+16:a};this.rand=function(){var a=((b<<13^b)&4294967295)>>>19;b=((b&4294967294)<<12^a)>>>0;a=((c<<2^c)&4294967295)>>>25;c=((c&4294967288)<<4^a)>>>0;a=((d<<3^d)&4294967295)>>>11;d=((d&4294967280)<<17^a)>>>0;return((b^c^d)>>>0)/4294967296};this.seed(a)};this.cb=function(a,b){this.randv2gen(a,b,function(){return Math.random()})};this.randv2gen=function(a,b,c){c=c()*Math.PI*2;a[0]=b*f.cos_(c);a[1]=b*f.sin_(c)};this.db=function(a,
b){this.randv3gen(a,b,function(){return Math.random()})};this.randv3gen=function(a,b,c){var d=c()*Math.PI*2;c=-1+2*c();var e=b*Math.sqrt(1-c*c);a[0]=e*f.cos_(d);a[1]=e*f.sin_(d);a[2]=b*c};this.yb=function(a,b,c,d,e){b+=e()*d[0];c+=e()*d[1];f.V(a,b,c)};this.eb=function(a,b){f.V(-b[0],-b[1])};this.fb=function(a){return[-a[0],-a[1]]};this.gb=function(a,b){f.W(-b[0],-b[1],-b[2])};this.hb=function(a){return[-a[0],-a[1],-a[2]]};this.negq=function(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=-b[3]};this.negq_=
function(a){return[-a[0],-a[1],-a[2],-a[180*MathMath.PI*rn 0>a?-1:1};this.ob=function(a,b,c,d){var e=2*d[0]*d[0],f=2*d[1]*d[1],m=2*d[2]*d[2],n=2*d[0]*d[1],t=2*d[0]*d[2],g=2*d[1]*d[2],k=2*d[3]*d[2],B=2*d[3]*d[1];d=2*d[3]*d[0];a[0]=1-f-m;a[1]=n+k;a[2]=t-B;b[0]=n-k;b[1]=1-e-m;b[2]=g+d;c[0]=t+B;c[1]=g-d;c[2]=1-e-f};this.axes2quat=this.pb=function(a,b,c,d){var e=b[0]+c[1]+d[2];0<e?(e=2*Math.sqrt(e+1),a[3]=
.25*e,a[0]=(c[2]-d[1])/e,a[1]=(d[0]-b[2])/e,a[2]=(b[1]-c[0])/e):b[0]>c[1]&b[0]>d[2]?(e=2*Math.sqrt(1+b[0]-c[1]-d[2]),a[3]=(c[2]-d[1])/e,a[0]=.25*e,a[1]=(b[1]+c[0])/e,a[2]=(d[0]+b[2])/e):c[1]>d[2]?(e=2*Math.sqrt(1+c[1]-b[0]-d[2]),a[3]=(d[0]-b[2])/e,a[0]=(b[1]+c[0])/e,a[1]=.25*e,a[2]=(c[2]+d[1])/e):(e=2*Math.sqrt(1+d[2]-b[0]-c[1]),a[3]=(b[1]-c[0])/e,a[0]=(d[0]+b[2])/e,a[1]=(c[2]+d[1])/e,a[2]=.25*e)};this.axisangle2quat=this.qb=function(a,b,c){c=.5*f.ib(c);var d=Math.sin(c);a[0]=b[0]*d;a[1]=b[1]*d;a[2]=
b[2]*d;a[3]=Math.cos(c)};this.axisangle2quat_=this.axisangle2quat_=function(a,b){var c=.5*f.ib(b),d=Math.sin(c);return[a[0]*d,a[1]*d,a[2]*d,f.cos_(c)]};this.rb=function(a,b,c){var d=b[0],e=b[1],f=b[2];b=c[0];var m=c[1],n=c[2];c=c[3];var t=c*d+m*f-n*e,g=c*e+n*d-b*f,k=c*f+b*e-m*d,d=-b*d-m*e-n*f;a[0]=t*c+d*-b+g*-n-k*-m;a[1]=g*c+d*-m+k*-b-t*-n;a[2]=k*c+d*-n+t*-m-g*-b};this.sb=function(a,b,c){var d=b[0],e=b[1],f=b[2];b=b[3];var m=c[0],n=c[1],t=c[2];c=c[3];a[0]=d*c+b*m+e*t-f*n;a[1]=e*c+b*n+f*m-d*t;a[2]=
f*c+b*t+d*n-e*m;a[3]=b*c-d*m-e*n-f*t};this.mulqscalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c};this.mulqscalar_=function(a,b){return[a[0]*b,a[1]*b,a[2]*b,a[3]*b]};this.tb=function(a,b,c,d,e){var r=f.ib(c);c=Math.cos(r)*d;d*=Math.sin(r);a[0]=b[0]+c*e[0]-d*e[1];a[1]=b[1]+d*e[0]+c*e[1]};this.ub=function(a,b,c,d,e){var r=f.ib(c);c=Math.cos(r)/d;d=Math.sin(r)/d;a[0]=c*e[0]+d*e[1]-b[0]*c-b[1]*d;a[1]=c*e[1]-d*e[0]+b[0]*d-b[1]*c};this.vb=function(a){return 0>a?Math.floor(f.yd-1+a%
f.yd):Math.floor(a%f.yd)};this.ff=function(a){return"#"+p(Math.floor(255*a[0]))+p(Math.floor(255*a[1]))+p(Math.floor(255*a[2]))};this.tf=function(a,b,c,d,e,r){var m=f.f(d,a);a=f.f(e,a);c=f.r(b,c);if(m[0]<-c[0]&&a[0]<-c[0]||m[0]>c[0]&&a[0]>c[0]||m[1]<-c[1]&&a[1]<-c[1]||m[1]>c[1]&&a[1]>c[1])return!1;if(m[0]<=c[0]&&m[0]>=-c[0]&&m[1]<=c[1]&&m[1]>=-c[1])return!0;if(1E-6>r)return!1;if(a[0]<=c[0]&&a[0]>=-c[0]&&a[1]<=c[1]&&a[1]>=-c[1])return!0;d=f.f(e,d);f.s(d,d,r);r=[-d[1],d[0]];d=Math.abs(f.G(r,a));if(Math.abs(f.G(r,
c))>=d){if(b=[-b[1],b[0]],0>=f.G(b,m)*f.G(b,a))return!0}else if(Math.abs(f.G(r,[c[0],-c[1]]))>=d&&(b=[b[1],b[0]],0>=f.G(b,m)*f.G(b,a)))return!0;return!1};this.uf=function(a,b,c,d,e,r,m){var n=f.f(d,a);a=f.f(e,a);c=f.r(b,c);if(1E-6>r||n[0]<-c[0]&&a[0]<-c[0]||n[0]>c[0]&&a[0]>c[0]||n[1]<-c[1]&&a[1]<-c[1]||n[1]>c[1]&&a[1]>c[1])return!1;d=f.f(e,d);f.s(d,d,r);r=[-d[1],d[0]];d=Math.abs(f.G(r,a));if(m){if(Math.abs(f.G(r,c))>=d&&(b=[-b[1],b[0]],0>=f.G(b,n)*f.G(b,a)))return!0}else if(Math.abs(f.G(r,[c[0],-c[1]]))>=
d&&(b=[b[1],b[0]],0>=f.G(b,n)*f.G(b,a)))return!0;return!1};this.wb=function(a,b,c,d){b=3*(c*f.yd+b);d=f.zd[d];a[0]=d.getUint8(b);a[1]=d.getUint8(b+1);a[2]=d.getUint8(b+2)};this.xb=function(a,b){if(null==f.zd)f.W(a,128,128,128);else{var c=b[0]*f.yd,d=b[1]*f.yd,e=b[2]*f.yd,r=Math.floor(c),m=Math.floor(d),n=Math.floor(e),c=c-r,d=d-m,e=e-n,t=f.vb(r),g=f.vb(r+1),k=f.vb(m),B=f.vb(m+1),p=f.vb(n),E=f.vb(n+1),n=[],m=[],r=[],F=[],H=[],J=[],I=[],K=[];f.wb(n,t,k,p);f.wb(m,t,k,E);f.wb(r,t,B,p);f.wb(F,t,B,E);f.wb(H,
g,k,p);f.wb(J,g,k,E);f.wb(I,g,B,p);f.wb(K,g,B,E);t=[];g=[];k=[];B=[];f.ab(t,n,m,e);f.ab(g,r,F,e);f.ab(k,H,J,e);f.ab(B,I,K,e);e=[];n=[];f.ab(e,t,g,d);f.ab(n,k,B,d);f.ab(a,e,n,c)}};this.height=e};thityleIndex=c};is.height=d};this.Camera2D=function(){};this.Camera2D.b){return!0};this.Camera3D=function(a,b){this.Qd=f.r(a,.5);this.z=-(.5*a[0])/Math.tan(f.ib(.5*b))};this.Camera3D.prototype.transform=function(a,b){if(a[2]<this.z)return!1;var c=-this.z/(a[2]-this.z);f.a(a,f.r(f.f(a,this.Qd),c),this.Qd);f.q(b,b,c);return!0};this.zd=null;this.yd=0;this.initializeNoise=function(a,b,c){a||alert("path should be defined");if(null!=this.zd)b();else{if(null==a||void 0==a)a=this.defaultPath;var d=new XMLHttpRequest;d.open("GET",a+"neutrinoparticles.noise.bin",!0);d.responseType=
"arraybuffer";d.ctx=this;d.onreadystatechange=function(){if(4==d.readyState)if(200<=d.status&&300>d.status||304==d.status){var a=d.response,f=d.ctx,m=(new DataView(a,0,4)).getUint32(0,!0);f.zd=[];f.yd=m;for(var n=0;n<m;++n)f.zd[n]=new DataView(a,4+3*m*m*n);b&&b()}else c&&c()};d.send()}};this.NoiseGenerator=function(){for(var a=function(a,b,c,d,e){return.5*(2*b+(-a+c)*e+(2*a-5*b+4*c-d)*e*e+(-a+3*b-3*c+d)*e*e*e)},b=function(b,c,d,e,f){return[a(b[0],c[0],d[0],e[0],f),a(b[1],c[1],d[1],e[1],f),a(b[2],
c[2],d[2]b?b:a>c?c:a},d=[],e=[],r=new f.taus88(120),m=.7,n=64,t,g,k,p,L,E,F,H=0,J=0,I=n>>>1;0<I;I>>>=1)var K=Math.floor(64/I),H=H+K*K;var G=0;this.progress=0;this.step=function(){switch(G){case 0:for(var a=0;64>a;++a)for(var h=d[a]=[],q=0;64>q;++q)for(var v=h[q]=[],l=0;64>l;++l)v[l]=[0,0,0];G=1;this.progress=.01;break;case 1:t=n>>>1;g=Math.floor(64/t);k=g*g;p=Math.max(g-1,1);L=g*g*g;for(a=F=E=0;a<L;++a)e[a]=[],e[a][2]=2*r.rand()-1,e[a][1]=2*r.rand()-1,e[a][0]=
2*r.rand()-1;G=2;break;case 2:for(a=0;a<g;++a)for(var h=E-1>>>0&p,q=E>>>0&p,v=E+1>>>0&p,l=E+2>>>0&p,w=F-1>>>0&p,x=F>>>0&p,u=F+1>>>0&p,C=F+2>>>0&p,D=a-1>>>0&p,y=a>>>0&p,z=a+1>>>0&p,A=a+2>>>0&p,h=[[[e[h*k+w*g+D],e[h*k+w*g+y],e[h*k+w*g+z],e[h*k+w*g+A]],[e[h*k+x*g+D],e[h*k+x*g+y],e[h*k+x*g+z],e[h*k+x*g+A]],[e[h*k+u*g+D],e[h*k+u*g+y],e[h*k+u*g+z],e[h*k+u*g+A]],[e[h*k+C*g+D],e[h*k+C*g+y],e[h*k+C*g+z],e[h*k+C*g+A]]],[[e[q*k+w*g+D],e[q*k+w*g+y],e[q*k+w*g+z],e[q*k+w*g+A]],[e[q*k+x*g+D],e[q*k+x*g+y],e[q*k+
x*g+z],e[q*k+x*g+A]],[e[q*k+u*g+D],e[q*k+u*g+y],e[q*k+u*g+z],e[q*k+u*g+A]],[e[q*k+C*g+D],e[q*k+C*g+y],e[q*k+C*g+z],e[q*k+C*g+A]]],[[e[v*k+w*g+D],e[v*k+w*g+y],e[v*k+w*g+z],e[v*k+w*g+A]],[e[v*k+x*g+D],e[v*k+x*g+y],e[v*k+x*g+z],e[v*k+x*g+A]],[e[v*k+u*g+D],e[v*k+u*g+y],e[v*k+u*g+z],e[v*k+u*g+A]],[e[v*k+C*g+D],e[v*k+C*g+y],e[v*k+C*g+z],e[v*k+C*g+A]]],[[e[l*k+w*g+D],e[l*k+w*g+y],e[l*k+w*g+z],e[l*k+w*g+A]],[e[l*k+x*g+D],e[l*k+x*g+y],e[l*k+x*g+z],e[l*k+x*g+A]],[e[l*k+u*g+D],e[l*k+u*g+y],e[l*k+u*g+z],e[l*
k+u*g+A]],[e[l*k+C*g+D],e[l*k+C*g+y],e[l*k+C*g+z],e[l*k+C*g+A]]]],q=0;q<t;++q)for(l=q/t,v=E*t+q,l=[[b(h[0][0][0],h[1][0][0],h[2][0][0],h[3][0][0],l),b(h[0][0][1],h[1][0][1],h[2][0][1],h[3][0][1],l),b(h[0][0][2],h[1][0][2],h[2][0][2],h[3][0][2],l),b(h[0][0][3],h[1][0][3],h[2][0][3],h[3][0][3],l)],[b(h[0][1][0],h[1][1][0],h[2][1][0],h[3][1][0],l),b(h[0][1][1],h[1][1][1],h[2][1][1],h[3][1][1],l),b(h[0][1][2],h[1][1][2],h[2][1][2],h[3][1][2],l),b(h[0][1][3],h[1][1][3],h[2][1][3],h[3][1][3],l)],[b(h[0][2][0],
h[1][2][0],h[2][2][0],h[3][2][0],l),b(h[0][2][1],h[1][2][1],h[2][2][1],h[3][2][1],l),b(h[0][2][2],h[1][2][2],h[2][2][2],h[3][2][2],l),b(h[0][2][3],h[1][2][3],h[2][2][3],h[3][2][3],l)],[b(h[0][2][0],h[1][3][0],h[2][3][0],h[3][3][0],l),b(h[0][2][1],h[1][3][1],h[2][3][1],h[3][3][1],l),b(h[0][2][2],h[1][3][2],h[2][3][2],h[3][3][2],l),b(h[0][2][3],h[1][3][3],h[2][3][3],h[3][3][3],l)]],w=0;w<t;++w)for(y=w/t,x=F*t+w,u=b(l[0][0],l[1][0],l[2][0],l[3][0],y),C=b(l[0][1],l[1][1],l[2][1],l[3][1],y),D=b(l[0][2],
l[1][2],l[2][2],l[3][2],y),y=b(l[0][3],l[1][3],l[2][3],l[3][3],y),z=0;z<t;++z){var A=a*t+z,B=b(u,C,D,y,z/t),B=f.d(f.v(B,m),d[v][x][A]),B=[c(B[0],-1,1),c(B[1],-1,1),c(B[2],-1,1)];d[v][x][A]=B}J++;this.progress=.01+J/H*.89;F++;F>=g&&(F=0,E++,E>=g&&(E=0,n=t,m=Math.pow(m,1.2),1>=n?(G=3,this.progress=.9):G=1));break;case 3:a=[-1,-1,-1];h=[.5,.7,1];for(q=0;64>q;++q)for(v=d[q],l=0;64>l;++l)for(w=v[l],x=0;64>x;++x)u=w[x],u[0]=f.X(a[0],h[0],.5*u[0]+.5),u[1]=f.X(a[1],h[1],.5*u[1]+.5),u[2]=f.X(a[2],h[2],.5*
u[2]+.5);G=4;this.progress=.95;break;case 4:f.yd=64;f.zd=[];for(a=0;64>a;++a){h=d[a];q=new ArrayBuffer(12288);q=new DataView(q);for(v=0;64>v;++v)for(l=h[v],w=0;64>w;++w)x=l[w],u=3*(64*v+w),q.setUint8(u+0,Math.floor(c(256*(.5*x[0]+.5)-.5,0,255))),q.setUint8(u+1,Math.floor(c(256*(.5*x[1]+.5)-.5,0,255))),q.setUint8(u+2,Math.floor(c(256*(.5*x[2]+.5)-.5,0,255)));f.zd[a]=q}G=5;this.progress=1}return 5==G}};this.cf=document.createElement("canvas");this.cf.width=0;this.cf.height=0;this.bf=this.cf.getContext("2d");
this.af=function(a,b){if(this.cf.width<a||this.cf.height<b)this.cf.width=a,this.cf.height=b,this.bf=this.cf.getContext("2d")};this.effects=[];this.loadEffect=function(a,b,c){if(void 0!=this.effects[a]){var d=this.effects[a];d instanceof Array?d[d.length]=[b,c]:b(d)}else{this.effects[a]=[[b,c]];var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="text";e.ctx=this;e.onreadystatechange=function(){if(4==e.readyState){var b=this.ctx.effects[a];if(200<=e.status&&300>e.status||304==e.status){var c=
eval("(function(ctx) {\n"+e.responseText+"\nreturn new NeutrinoEffect(ctx);\n})(this.ctx);");this.ctx.effects[a](a){a[0](c)})}eln(a){a[1]()})}};e.send()}};this..effects[a]}};

/* deepmerge */
(function() {
    function isMergeableObject(val) {
        var nonNullObject = val && typeof val === 'object'

        return nonNullObject
            && Object.prototype.toString.call(val) !== '[object RegExp]'
            && Object.prototype.toString.call(val) !== '[object Date]] : { valunationation
    }

    function deepmerge(target, source, optionsArgument) {
        var array = Array.isArray(source);
        var options = optionsArgument || { arrayMerge: defaultArrayMerge }
        var arrayMerge = options.arrayMerge || defaultArrayMerge

        if (array) {
            return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
        } else {
            return mergeObject(target, source, optionsArgument)
        }
    }

    dee    })
    };

    window.deepmerge = deepmerge;
})();

/* helpers */
(function(global) {
    "use strict";

    /**
     * Format a number from 40000.40 to 40 000,40

     * @params {Integer} decimals -> Sets the number of decimal points
     * @params {String} decimalSeperator -> Sets the separator for the decimal point
     * @params {String} thousandSeperator -> Sets the thousands separator
     * @params {String} partLength -> Sets the length of every part
     * @return {String} -> returns the formatted number
     */
    Number.prototype.numberFormat = function(decimals, decimalSeperator, thousandSeperator, partLength) {
        decimals = isNaN(decimals = Math.abs(decimals)) ? 0 : decimals;
        decimalSeperator = decimalSeperator === undefined ? "," : decimalSeperator;
        thousandSeperator = thousandSeperator === undefined ? " " : thousandSeperator;
        partLength = partLength === undefined ? 3 : partLength;

        var re = '\\d(?=(\\d{' + (partLength || 3) + '})+' + (decimals > 0 ? '\\D' : '$') + ')',
            num = this.toFixed(Math.max(0, ~~decimals));

        return (decimalSeperator ? num.replace('.', decimalSeperator) : num).replace(new RegExp(re, 'g'), '$&' + (thousandSeperator || ','));
    };

    /**
     * Decode Hex strings
     */
    String.prototype.decodeEscapeSequence = function() {
        return this.replace(/&#x([0-9A-F);
        });
    };

    /**
     * Format a string from 'helloWorld' to 'HELLOWORLD', 'HelloWorld' or 'Helloworld'

     * @params {String} type -> ucAll, ucFirst, ucFirstToLower
     * @return {String} -> returns the capitalizes string
     */
    String.prototype.capitalize = function(type) {
        var string;

        switch (type) {
            case 'ucAll':
                string = this.toUpperCase();
                break;

            case 'ucFirst':
                string = this.charAt(0).toUpperCase() + this.substring(1);
                break;

            case 'ucFirstToLower':
                string = this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
                break;
        }

        return string;
    };

    /**
     * Converts spinal and snake case ('foo-bar' and 'foo_bar') to camel case ('fooBar')
     * @return {String} converted String
     */
    String.prototype.toCamelCase = function() {
        return this.replace(/(\-[a-z0-9]|\_);
        });
    };

    /**
     * Converts camel case ('fooBar') to spinal case ('foo-bar')
     * @return {String} converted String
     */
    String.prototype.toase();
    };

    /**
     * adds left padding funtionality to javascript strings
     */
    String.prototype.lpad = function(pad, length) {
        if (length > this.length) {
            return (new Array(length - this.length + 1).join(pad) + this);
        }
        return this;
    };

    /**
     * adds right padding funtionality to javascript strings
     */
    String.prototype.rpad = function(pad, length) {
        if (length > this.length) {
            return (this + new Array(length - this.length + 1).join(pad));
        }
        return this;
    };

    /**
     * adds cdn and cv tags
     */
    String.prototype.toCV = function() {
        var file = this;

        var key = file;

        if (file.substring(0, 1) !== '/') {
            file = '/' + file;
        }

        if (key.substring(0, 1) === '/') {
            key = key.substring(1);
        }

        if (!/\?__cv=[a-z0-9]{32}/.test(key) && cv.hasOwnProperty(key)) {
            file = file + '?__cv=' + cv[key];
        }

        if (cdn) {
            file = '//' + cdn + file;
        }

        return file;
    };

    global.helper = {
        /**
         * Returns GET parameters from the URL
         *
         * @param {String} key -> The parameter key
         * @return {String} -> returns the parameter value
         */
        getParam: function(key) {
            var query = window.location.search.substring(1),
                vars = query.split("&");

            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] === key) {
                    return pair[1];
                }
            }
            return (false);
        },

        getDomPath: function(el) {
            var rightArrowParents = [];
            $(el).parents().not('html').each(function() {
                var entry = this.tagName.toLowerCase();
                if (this.className) {
                    entry += "." + this.className.replace(/ /g, '.');
                }
                rightArrowParents.push(entry);
            });
            rightArrowParents.reverse();
            return rightArrowParents.join(" > ");
        },

        /**
         * Return the users operation system
         * @return {String}
         */
        getUserOS: function() {
            var os = 'unknown',
                appVersion = navigator.appVersion;

            if (appVersion.indexOf("Win") !== -1) {
                os = 'windows';
            }
            if (appVersion.indexOf("Mac") !== -1) {
                os = 'mac';
            }
            if (appVersion.indexOf("X11") !== -1) {
                os = 'unix';
            }
            if (appVersion.indexOf("Linux") !== -1) {
                os = 'linux';
            }

            return os;
        },

        /**
         * Return the users webbrowser
         * @return {String}
         */
        getUserBrowser: function() {
            var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0, // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
                isFirefox = typeof InstallTrigger !== 'undefined', // Firefox 1.0+
                isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0, // At least Safari 3+: "[object HTMLElementConstructor]"
                isChrome = !!window.chrome && !isOpera, // Chrome 1+
                isIE = /*@cc_on!@*/false || !!document.documentMode, // At least IE6
                browser = 'unknown';

            if (isOpera) {
                browser = 'opera';
            }
            if (isFirefox) {
                browser = 'firefox';
            }
            if (isSafari) {
                browser = 'safari';
            }
            if (isChrome) {
                browser = 'chrome';
            }
            if (isIE) {
                browser = 'ie';
            }

            return browser;
        },

        /**
         * Returns true or false whether the users display is retina or not.
         * @return {Boolean}
         */
        isRetina: function() {
            /*jshint multistr: true */
            var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                (min--moz-device-pixel-ratio: 1.5),\
                (-o-min-device-pixel-ratio: 3/2),\
                (min-resolution: 1.5dppx)";
            /*jshint multistr: false */

            if (window.devicePixelRatio > 1) {
                return true;
            }
            if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
                return true;
            }
            return false;
        },

        /**
         * Returns true or false whether the cursor is inside the given area or not.
         * @param  {Object} e           -> The mouse event
         * @param  {Object} coordinates -> The X and Y coordinates
         * @return {Boolean}            -> Tells you if the mouse is inside the given area
         *
         * Usage:
         * $('body').on('mousemove', function(e) {
         *     console.log(
         *         helper.cursorInArea(e, {
         *             x: [380, 1546], // you can also ask for just one axis
         *             y: [72, 132]
         *         })
         *     );
         * });
         */
        cursorInArea: function(e, coordinates) {
            return (
                (
                    coordinates.x ? (
                        e.pageX >= coordinates.x[0] &&
                        e.pageX <= coordinates.x[1]
                    ) : true
                ) && (
                    coordinates.y ? (
                        e.pageY >= coordinates.y[0] &&
                        e.pageY <= coordinates.y[1]
                    ) : true
                )
            );
        },

        /**
         * Returns true or false whether the element is completly in the view or not
         * @param  {Object} e -> The element (jQuery object)
         * @return {Boolean}  -> Tells you if the element is completly inside the view
         *
         * Usage:
         * $('body').on('mousemove', function(e) {
         *     console.log(
         *         helper.elementInViewport($('#header'))
         *     );
         * });
         *
         * NOTE: This does work for Y-Axis only. But feel free to add some more
         *       code to make it dynamically read X and/or Y.
         */
        elementInViewport: function(el) {
            var top = el.offset().top,
                height = el.outerHeight();

            return (
                top >= window.pageYOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight)
            );
        },

        setModelByArrayValue: function(scope, model, value) {
            model = model.split(/\.(.+)?/);

            if (model.length > 1) {
                this.setModelByArrayValue(scope[model[0]], model[1], value);
            } else {
                scope[model] = value;
            }
        },

       e;
        },

        e);
        },

       );
        }
    };
}(this));

/* jshint ignore:end */

(function(global) {
    "use strict";

    global.ngModules = [
        'LocalStorageModule',
        'gettext',
        'ngCookies',
        'ngAnimate',
        'angularLazyImg',
        'whow.bundle.templates',
        'whow.layout.header',
        'whow.layout.sidebar'
    ];
}(this));

/* jshint ignore:end */

(function(global) {
    "use strict";

    global.ngModules.push(
        // 'whow.xyz-module'
    );

    global.app = angular
    /* Init Angular app with global modules */
    .module('whow', global.ngModules);
}(this));

/* jshint ignore:start */
(function(global) {
    "use strict";

    var initTime = _.now();


    /** Initialize Angular **/
    global.app
    /* Handle uncaught errors */
    .config(function($provide) {
        $provide.decorator("$exceptionHandler", ['$delegate', '$injector', function($delegate, $injector) {
            return function(exception, cause) {
                /* send exceptions to view */
                var $rootScope = $injector.get('$rootScope');
                $rootScope.exceptions = $rootScope.exceptions || [];
                $rootScope.exceptions.push(exception.message);
                $('.app-content').removeClass('hidden');

                /* errorception service handling for angular exceptions */
                //if (
                //    typeof _errs !== 'undefined' &&
                //    exception.message.substring(0, 19) !== '[$rootScope:inprog]' //do not log "[$rootScope:inprog]" (spams in firefox)
                //) {
                //    _errs.push(exception);
                //}

                /* delegate exception */
                $delegate(exception, cause);
            };
        }]);
    })
    /* Init http interceptor */
    .config(['$httpProvider', '$controllerProvider',
        function($httpProvider, $controllerProvider) {
            app.controllerProvider = $controllerProvider;
            $httpProvider.interceptors.push('httpInterceptor');
            $httpProvider.useApplyAsync(true);
        }
    ])
    /* Init global storage */how');
    })
    /* Init controller provider for lazy loading controllers */
    .config(function($controllerProvider, $compileProvider, $filterProvider, $provide) {
        global.app.controller = $controllerProvider.register;
        global.app.directive = $compileProvider.directive;
        global.app.service = $provide.service;
        global.app.factory = $provide.factory;
        global.app.filter = $filterProvider;
    })
    /* performance boost */
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false); //diasble debug mode
        if (
            angular.version.major >= 1 &&
            angular.version.minor >= 5 &&
            angular.version.dot >= 9
        ) {
            $compileProvider.commentDirectivesEnabled(false); //disable comment directives
        }
    }])
    .config(['lazyImgConfigProvider', function(lazyImgConfigProvider){
        if (window.isIframe()) {
            lazyImgConfigProvider.setOptions({
                container: angular.element(document.querySelector('#body-wrapper'))
            });
        }
    }])
    /* set gettext language */
    .run(['gettextCatalog', function (gettextCatalog) {
        gettextCatalog.setCurrentLanguage(locale);
    }]);

    /* Load cv.json and initialize Angular */
    angular.element(document).ready(function() {
        $.ajax({
            url: "cv.json".toCV(),
            cache: true
        }).done(function(response) {
            $.extend(cv, response);
            angular.bootstrap(document, ['whow']);
   );
        });
    });
}(this));

/* jshint ignore:start */
/* Angular globals */
/* jshint ignore:start */
/* Bundle templates */
angular.module('whow.bundle.templates', []);
angular.module('whow.bundle.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('layout/header/templates/header-directive.html',
    "<div class=\"header-root\"\n" +
    "     ng-style=\"{top: headerController.getHeaderOffset(false)+'px'}\">\n" +
    "    <div ng-transclude=\"headerEventMenu\"\n" +
    "         class=\"ng-hide\"></div>\n" +
    "    <div class=\"header-cobrand\"\n" +
    "         ng-if=\"headerController.hasCobrand\"\n" +
    "         ng-transclude=\"headerCobrand\">\n" +
    "    </div>\n" +
    "    <aside class=\"header-partner-logos\"\n" +
    "           ng-if=\"::headerController.hasPartnerLogos\"\n" +
    "           ng-class=\"{'toggled': headerController.isPartnerLogoToggled}\">\n" +
    "        <div class=\"caption\"\n" +
    "             translate>powered by</div>\n" +
    "        <div class=\"logo\"\n" +
    "             ng-transclude=\"headerPartnerLogos\"></div>\n" +
    "    </aside>\n" +
    "    <div class=\"header-top\"\n" +
    "         ng-if=\"headerController.isReady\"\n" +
    "         ng-class=\"{'infoline-open': headerController.isInfolineToggled}\">\n" +
    "        <div class=\"header-wrapper\">\n" +
    "            <div class=\"header-center\"\n" +
    "                 ng-transclude=\"headerLogo\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"header-partner-logos\"\n" +
    "             ng-if=\"::headerController.hasPartnerLogos\">\n" +
    "            <div class=\"caption\"\n" +
    "                 translate>powered by</div>\n" +
    "            <div ng-transclude=\"headerPartnerLogos\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"header-infoline\"\n" +
    "         ng-if=\"headerController.isReady\"\n" +
    "         ng-class=\"{open: headerController.isInfolineToggled}\">\n" +
    "        <div class=\"header-wrapper\">\n" +
    "            <div class=\"header-center\"></div>\n" +
    "            <div class=\"header-addons\"\n" +
    "                 ng-class=\"{faded: headerController.isSubmenuToggled}\"\n" +
    "                 ng-if=\"::!headerController.$s.isGuest\">\n" +
    "                <div class=\"header-addon-panel-left\">\n" +
    "                    &nbsp;\n" +
    "                </div>\n" +
    "                <div class=\"header-addon-panel-right\">\n" +
    "                    <div ng-repeat=\"eventMenu in headerController.eventMenus track by 'name'\"\n" +
    "                         class=\"header-addon-panel header-addon-panel-event-menu header-addon-panel-event-menu-{{::eventMenu.name}}\"\n" +
    "                         ng-if=\"headerController.hasEventMenu && eventMenu.controller.hasEventMenuAddon\">\n" +
    "                        <span bind-jquery-compiled=\"eventMenu.controller.headerEventMenuAddon\"></span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"header-addon-panel header-addon-panel-member-status\"\n" +
    "                         ng-if=\"headerController.showUsergroupBadge\">\n" +
    "                        <span ng-bind=\"::headerController.$s.globalUser.usergroup\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-addon-panel header-addon-panel-premium\"\n" +
    "                         ng-if=\"headerController.$s.globalUser.premium\">\n" +
    "                        <span></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-addon-panel header-addon-panel-shop-bonus\"\n" +
    "                         ng-if=\"headerController.hasShopBonus\">\n" +
    "                        <span>\n" +
    "                            <span translate>Shop Bonus</span>:\n" +
    "                            <span countdown\n" +
    "                                  data-seconds=\"{{ ::headerController.shopBonusCountdown }}\"></span> (+{{ (headerController.$s.activeMultipliers.payment.value\n" +
    "                        - 1) * 100 | numberFormat }}%)\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-addon-panel header-addon-panel-level-turbo\"\n" +
    "                         ng-if=\"headerController.hasLevelTurbo\">\n" +
    "                        <span>\n" +
    "                            <span translate>Level Turbo:</span>\n" +
    "                            <span countdown\n" +
    "                                  data-end=\"{{ headerController.$s.activeMultipliers['xp-booster'].end }}\"></span> ({{ headerController.$s.activeMultipliers['xp-booster'].itemSlug\n" +
    "                        | substring:-2 }})\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"::!headerController.$s.isGuest && !headerController.showStatusbar\"\n" +
    "     statusbar=\"headerController.globalController\"\n" +
    "     ng-class=\"{open: statusbarController.isToggled}\">\n" +
    "</div>\n"
  );


  $templateCache.put('layout/sidebar/templates/sidebar-component.html',
    "<ul class=\"sidebar-area\"\n" +
    "    ng-class=\"{open: sidebarController.settings.open, closing: sidebarController.settings.closing}\">\n" +
    "    <li class=\"sidebar-item settings\"\n" +
    "        ng-if=\"sidebarController.settings.isVisible\"\n" +
    "        ng-mouseenter=\"sidebarController.openSettings()\"\n" +
    "        ng-mouseleave=\"sidebarController.closeSettings()\"\n" +
    "        track=\"{ 'service': 'whow-funnel', 'event': 'settings_opened'}\">\n" +
    "        <div class=\"sidebar-menue-wrapper\"\n" +
    "             ng-style=\"{height: sidebarController.tileHeight + 'px'}\">\n" +
    "            <div class=\"sidebar-menue\">\n" +
    "                <div class=\"tile settings\"\n" +
    "                     ng-class=\"{active: sidebarController.settings.tile === 'settings'}\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <span translate>Language</span>:\n" +
    "                    </div>\n" +
    "                    <div class=\"box forward\"\n" +
    "                         ng-click=\"sidebarController.toggleTile()\">\n" +
    "                        <span class=\"flag sidebar-flag-{{ ::sidebarController.currentLanguage }}\"></span>\n" +
    "                        <span class=\"current-language\"\n" +
    "                              ng-bind=\"::sidebarController.currentLanguage\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"header\">\n" +
    "                        <span translate>Sound</span>:\n" +
    "                    </div>\n" +
    "                    <ul class=\"sound box\">\n" +
    "                        <li ng-click=\"sidebarController.toggleGameSound()\">\n" +
    "                            <div class=\"checkbox\"\n" +
    "                                 ng-class=\"{active: sidebarController.settings.sound.game}\">\n" +
    "                            </div>\n" +
    "                            <span translate>Games</span>\n" +
    "                        </li>\n" +
    "                        <li ng-click=\"sidebarController.togglePortalSound()\">\n" +
    "                            <div class=\"checkbox\"\n" +
    "                                 ng-class=\"{active: sidebarController.settings.sound.notification}\">\n" +
    "                            </div>\n" +
    "                            <span translate>Portal</span>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"tile languages\"\n" +
    "                     ng-class=\"{active: sidebarController.settings.tile === 'languages'}\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <span translate>Language</span>:\n" +
    "                    </div>\n" +
    "                    <ul class=\"languages box\">\n" +
    "                        <li ng-click=\"sidebarController.changeLanguage(locale.code)\"\n" +
    "                            ng-repeat=\"locale in ::sidebarController.locales\">\n" +
    "\n" +
    "                            <a class=\"flag sidebar-flag-{{ ::locale.urlCode }}\"\n" +
    "                               ng-href=\"{{ ::sidebarController.canonical(locale.urlCode) }}\"></a>\n" +
    "                            {{ ::locale.name }}\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"back\"\n" +
    "                         ng-click=\"sidebarController.toggleTile()\">\n" +
    "                        <span translate>Back</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"sidebar-label-wrapper\">\n" +
    "            <div class=\"sidebar-label\"\n" +
    "                 translate>Settings</div>\n" +
    "        </div>\n" +
    "        <div class=\"sidebar-icon\"></div>\n" +
    "    </li>\n" +
    "</ul>\n"
  );

}]);


/* Shared */
var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var shared;
        (function (shared) {
            angular
                .module("whow.layout.shared", [
                "gettext",
            ]);
        })(shared = layout.shared || (layout.shared = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));

var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var shared;
        (function (shared) {
            var SharedService = (function () {
                function SharedService($window, LocalStorageService) {
                    this.$window = $window;
                    this.LocalStorageService = LocalStorageService;
                }
                Object.defineProperty(SharedService.prototype, "$g", {
                    get: function () {
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedService.prototype, "isGuest", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedService.prototype, "isLoggedin", {
                    get: function () {
                        return (this.globalUser && this.globalUser._id && true);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedService.prototype, "globalUser", {
                    get: function () {
                        return this.$window.user;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedService.prototype, "globalController", {
                    get: function () {
                        if (!this._globalController) {
                            throw "Global Controller not found.";
                        }
                        return this._globalController;
                    },
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedService.prototype, "langUrlCode", {
                    get: function () {
                        return this.$window.langUrlCode || "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedService.prototype, "language", {
                    get: function () {
                        return this.$window.language || "";
                    },
                    enumerable: true,
                    configurable: true
                });
                return SharedService;
            }());
            shared.SharedService = SharedService;
            angular
                .module("whow.layout.shared")
                .service("SharedService", [
                "$window",
                "localStorageService",
                SharedService
            ]);
        })(shared = layout.shared || (layout.shared = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));

var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var shared;
        (function (shared) {
            var PRELOADER_STATES = {
                PENDING: 1,
                LOADING: 2,
                RESOLVED: 3,
                REJECTED: 4
            };
            var SharedPreloader = (function () {
                function SharedPreloader(imageLocations, $q, $rootScope) {
                    this.$rootScope = $rootScope;
                    this.imageLocations = imageLocations;
                    this.imageCount = this.imageLocations.length;
                    this.loadCount = 0;
                    this.errorCount = 0;
                    this.state = PRELOADER_STATES.PENDING;
                    this.deferred = $q.defer();
                    this.promise = this.deferred.promise;
                }
                Object.defineProperty(SharedPreloader.prototype, "isInitiated", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedPreloader.prototype, "isRejected", {
                    get: function () {
                        return this.state === PRELOADER_STATES.REJECTED;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SharedPreloader.prototype, "isResolved", {
                       },
                    enumerable: true,
                    configurable: true
                });
                SharedPreloader.prototype.load = function () {
                    if (this.isInitiated) {
                        return this.promise;
                    }
                    this.state = PRELOADER_STATES.LOADING;
                    for (var i = 0; i < this.imageCount; i++) {
                        this.loadImageLocation(this.imageLocations[i]);
                    }
                    return this.promise;
                };
                SharedPreloader.prototype.handleImageError = function (imageLocation) {
                    this.errorCount++;
                    if (this.isRejected) {
                        return;
                    }
                    this.state = PRELOADER_STATES.REJECTED;
                    this.deferred.reject(imageLocation);
                };
                SharedPreloader.prototype.handleImageLoad = function (imageLocation) {
                    this.loadCount++;
                    if (this.isRejected) {
                        return;
                    }
                    this.deferred.notify({
                        percent: Math.ceil(this.loadCount / this.imageCount * 100),
                        imageLocation: imageLocation
                    });
                    if (this.loadCount === this.imageCount) {
                        this.state = PRELOADER_STATES.RESOLVED;
                        this.deferred.resolve(this.imageLocations);
                    }
                };
                SharedPreloader.prototype.loadImageLocation = function (imageLocation) {
                    var _this = this;
                    angular.element(new Image())
                        .on("load", function (event) {
                        _this.$rootScope.$applyAsync(function () {
                            _this.handleImageLoad(event.target.src);
                        });
                    })
                        .on("error", function (event) {
                        _this.$rootScope           });
                    })
                        .attr("src", imageLocation);
                };
                return SharedPreloader;
            }());
            shared.SharedPreloader = SharedPreloader;
            angular
                .module("whow.layout.shared")
                .factory("SharedPreloaderFactory", [
                "$q",
                "$rootScope",
                function ($q, $rootScope) {
                    return {
                        pre).load(); }
                    };
                }
            ]);
        })(shared = layout.shared || (layout.shared = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));


/* Header */
var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var header;
        (function (header) {
            angular
                .module("whow.layout.header", [
                "gettext",
                "whow.layout.shared"
            ]);
        })(header = layout.header || (layout.header = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));

var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var header;
        (function (header) {
            var headerConfig = function ($provide) {
                $provide.decorator("translateDirective", function ($delegate) {
                    var directive = $delegate[0], oldCompile = directive.compile;
                    directive.compile = function (element, attrs) {
                        var oldCompileResult = oldCompile.call(directive, element, attrs), oldCompilePostFunc = oldCompileResult.post, newPostFunc = function (scope, element, attrs) {
                            oldCompilePostFunc.call(oldCompilePostFunc, scope, element, attrs);
                            if (window.casino) {
                                scope.casino = window.casino.name;
                            }
                        };
                        return {
                            post: newPostFunc
                        };
                    };
                    return $delegate;
                });
            };
            angular
                .module("whow.layout.header")
                .config([
                "$provide",
                headerConfig
            ]);
        })(header = layout.header || (layout.header = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));

var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var header;
        (function (header) {
            var HeaderController = (function () {
                function HeaderController($q, $scope, $rootScope, $element, $transclude, $timeout, $window, SharedService, LocalizationService, SharedPreloaderFactory, NeutrinoService) {
                    var _this = this;
                    this.currentToggle = false;
                    this.textOffsets = {};
                    this._infoLineTempToggle = false;
                    this._partnerLogoTempToggle = false;
                    this._eventMenus = [];
                    this.$scope = $scope;
                    this.$rootScope = $rootScope;
                    this.$element = $element;
                    this.$transclude = $transclude;
                    this.$timeout = $timeout;
                    this.$window = $window;
                    this.SharedService = SharedService;
                    this.NeutrinoService = NeutrinoService;
                    this.LocalizationService = LocalizationService;
                    this._infoLineTempToggle = !this.isAtGamesPage;
                    this._partnerLogoTempToggle = !this.isAtGamesPage;
                    this._offerCountdown = {
                        slug: "ftd_mega_paket_ab",
                        imageSlug: "welcome-offer",
                        timer: (900),
                        startTime: 0,
                        endTime: 0,
                        end: true
                    };
                    $q.all([
                        SharedPreloaderFactory.preloadImages([
                            "/img/" + this.$window.theme + "/layout/header/background.png",
                            "/img/" + this.$window.theme + "/layout/header/background-tile.png"
                        ]),
                        LocalizationService.loadCatalog("league"),
                        LocalizationService.loadCatalog("loyalty")
                          });
                }
                Object.defineProperty(HeaderController.prototype, "$s", {
                    get: function () {
                        return this.SharedService;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "$g", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "showUsergroupBadge", {
                    get: function () {
                        var allowedUsergroups = ['admin'];
                        var usergroup = this.SharedService.globalUser.usergroup;
                        return allowedUsergroups.indexOf(usergroup) >= 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                HeaderController.prototype.init = function () {
                    var _this = this;
                    var $body = $("body");
                    $(window).on("scroll.layout-header", function () {
                        _this.checkScrollPosition();
                    });
                    t           });
                    if (this._infoLineTempToggle || this._partnerLogoTempToggle) {
                        t           }, 3500);
                    }
                    $(window).on("blur.layout-header", function () {
                        if ($(document.activeElement).is("iframe")) {
                            $("body").trigger("click.layout-header");
                        }
                    });
                    $body.on("click.layout-header", function (event) {
                        if (!_this.isToggled(false)) {
                            return;
                        }
                        var isChildOrSelf = $.contains(_this.$element.get(0), $(event.target).get(0)) || $(event.target).is(_this.$element);
                        if (!isChildOrSelf) {
                            _this.$scope.$applyAsync(function () {
                                _this.removeOpenState();
                            });
                        }
                    });
                    if (!this.SharedService.isGuest) {
                        if (this.hasCobrand) {
                            $body.css("padding-top", this.getHeaderOffset(true));
                        }
                        this.$rootScope.$on("countdown.offer-button.done", function () {
                            _this._offerCountdown.end = true;
                        });
                        this.checkOfferHasCountdown();
                    }
                };
                HeaderController.prototype.checkScrollPosition = function () {
                    if ($(window).scrollTop() <= 0) {
                        return;
                    }
                    if (this.isToggled(false) || this._infoLineTempToggle) {
                        this.removeOpenState();
                    }
                    if (this._partnerLogoTempToggle) {
                        this._partnerLogoTempToggle = false;
                    }
                };
                HeaderController.prototype.checkOfferHasCountdown = function () {
                    if (!this.SharedService.globalUser) {
                        return false;
                    }
                    if (this.SharedService.globalUser.isPayUser) {
                        return false;
                    }
                    if (!this.SharedService.globalUser.isFTDUser) {
                        return false;
                    }
                    var now = new Date().getTime() / 1000;
                    this._offerCountdown.startTime = this.SharedService.globalUser.created;
                    this._offerCountdown.endTime = this._offerCountdown.startTime + this._offerCountdown.timer;
                    this._offerCountdown.end = this._offerCountdown.endTime <= now;
                };
                Object.defineProperty(HeaderController.prototype, "isAtGamesPage", {
                    get: function () {
                        return this.$window.params.controller === "Games" && this.$window.params.action === "view";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "isReady", {
                    get: function () {
                        return this._isReady;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "offerCountdown", {
                    get: function () {
                        return this._offerCountdown;
                    },
                    enumerable: true,
                    configurable: true
                });
                HeaderController.prototype.isToggled = function (toggle) {
                    if (!toggle) {
                        return false !== this.currentToggle;
                    }
                    return toggle === this.currentToggle;
                };
                Object.defineProperty(HeaderController.prototype, "isInfolineToggled", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "isPartnerLogoToggled", {
                    get: function () {
                        return this._partnerLogoTempToggle;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "isSubmenuToggled", {
                    get: function () {
                        return this.isToggled(false);
                    },
                    enumerable: true,
                    configurable: true
                });
                HeaderController.prototype.toggleOpenState = function (toggle) {
                    if (this.currentToggle === toggle) {
                        this.removeOpenState();
                    }
                    else {
                        this.currentToggle = toggle;
                    }
                };
                HeaderController.prototype.remov           };
                HeaderController.prototype.getP           };
                HeaderController.prototype.add           };
                Object.defineProperty(HeaderController.prototype, "hasPartnerLogos", {
                    get: function () {
                        return this.$transclude.isSlotFilled("headerPartnerLogos");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeaderController.prototype, "hasCobrand", {
                       },
                    enumerable: true,
                    configurable: true
                });
                HeaderController.prototype.getHeaderOffset = function (includeOwnHeight) {
                    if (!this.hasCobrand) {
                        return 0;
                    }
                    var cobrandHeight = this.$element.find(".header-cobrand").outerHeight();
                    if (true === includeOwnHeight) {
                        return cobrandHeight + this.$element.find(".header-root").outerHeight();
                    }
                    return cobrandHeight;
                };
                return HeaderController;
            }());
            header.HeaderController = HeaderController;
            angular.module("whow.layout.header")
                .directive("header", [
                "SharedService",
                function (SharedService) {
                    return {
                        restrict: "E",
                        scope: true,
                        transclude: {
                            headerLogo: "headerLogo",
                            headerEvent: "?headerEvent",
                            headerEventMenu: "?headerEventMenu",
                            headerCobrand: "?headerCobrand",
                            headerPartnerLogos: "?headerPartnerLogos"
                        },
                        controller: [
                            "$q",
                            "$scope",
                            "$rootScope",
                            "$element",
                            "$transclude",
                            "$timeout",
                            "$window",
                            "SharedService",
                            "LocalizationService",
                            "SharedPreloaderFactory",
                            "NeutrinoService",
                            HeaderController
                        ],
                        controllerAs: "headerController",
                            },
                        templateUrl: "layout/header/templates/header-directive.html"
                    };
                }
            ]);
        })(header = layout.header || (layout.header = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));

var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var header;
        (function (header) {
            angular
                .module("whow.layout.header")
                .directive("headerTextOffset", [
                "$timeout",
                function ($timeout) {
                    return {
                        restrict: "A",
                        require: "^header",
                        link: function (scope, element, attrs, headerController) {
                            var name = attrs["headerTextOffset"], prop = attrs["headerTextOffsetProperty"] || "left", setOffset = function () {
                                var offset = 0, margin;
                                if (prop === "left") {
                                    margin = Number(element.css("margin-left").replace("px", ""));
                                    offset = element.position().left + margin;
                                }
                                else if (prop === "right") {
                                    var $h = element.parents("header").first().find(".header-wrapper").first();
                                    margin = Number(element.css("margin-right").replace("px", ""));
                                    offset = $h.outerWidth() - (margin + element.position().left);
                                }
                                headerController.addTextOffset(name, offset);
                            };
                            if (name) {
                                $timeout(function () {
                                    setOffset();
                                });
                                $(window).           });
                            }
                        }
                    };
                }
            ]);
        })(header = layout.header || (layout.header = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));


/* Sidebar */
var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var sidebar;
        (function (sidebar) {
            angular
                .module("whow.layout.sidebar", [
                "gettext",
                "whow.layout.shared"
            ]);
        })(sidebar = layout.sidebar || (layout.sidebar = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));

var whow;
(function (whow) {
    var layout;
    (function (layout) {
        var sidebar;
        (function (sidebar) {
            var SidebarController = (function () {
                function SidebarController($scope, $element, $window, $timeout, $rootScope, LocalStorageService, $documentService, SharedService) {
                    this.$scope = $scope;
                    this.$element = $element;
                    this.$window = $window;
                    this.$timeout = $timeout;
                    this.$rootScope = $rootScope;
                    this.LocalStorageService = LocalStorageService;
                    this.$documentService = $documentService;
                    this.SharedService = SharedService;
                    this.$document = $documentService[0];
                    this.status = {
                        settings: {},
                        fullscreen: {},
                        video: {},
                        support: {},
                    };
                    this.canonicals = this.$window.casino.canonicals;
                    this.init();
                }
                SidebarController.prototype.init = function () {
                    var _this = this;
                    angular.element(this.$window).           });
                    var sound = this.LocalStorageService.get('sound') || {};
                    if (typeof sound !== 'object') {
                        this.LocalStorageService.remove('sound');
                        sound = {};
                    }
                    this.status.settings = {
                        open: false,
                        closing: false,
                        tile: 'settings',
                        isVisible: true,
                        animation: this.SharedService.globalUser.animations,
                        tileHeight: 0,
                        sound: {
                            game: typeof sound['game'] === 'undefined' ? true : sound['game'],
                            notification: typeof sound['notification'] === 'undefined' ? true : sound['notification'],
                        },
                    };
                    this.status.fullscreen = {
                        active: false,
                        isVisible: this.isFullscreenAllowed,
                    };
                    this.status.video.isVisible = this.SharedService.isLoggedin;
                    this.status.support.isVisible = this.SharedService.isLoggedin;
                };
                SidebarController.prototype.saveSound = function () {
                    var localStorageSound = {
                        boardgame: this.status.settings.sound.notification,
                        calendar: this.status.settings.sound.notification,
                        dailyChallenge: this.status.settings.sound.notification,
                        levelUp: this.status.settings.sound.notification,
                        payment: this.status.settings.sound.notification,
                        fortune: this.status.settings.sound.notification,
                    };
                    angular.extend(localStorageSound, this.status.settings.sound);
                    this.LocalStorageService.set('sound', localStorageSound);
                    this.$rootScope.$broadcast('sound.change', localStorageSound);
                };
                SidebarController.prototype.calcTileHeight = function () {
                    var newHeight = 0;
                    if (this.status.settings.open && !this.status.settings.closing) {
                        var $tile = this.$element.find('.tile.' + this.status.settings.tile);
                        newHeight = $tile.get(0).offsetHeight + 23;
                    }
                    this.status.settings.tileHeight = newHeight;
                };
                Object.defineProperty(SidebarController.prototype, "isFullscreenAllowed", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "checkFullscreen", {
                    get: function () {
                        return ((!this.$document.fullscreenElement &&
                            !this.$document.mozFullScreenElement &&
                            !this.$document.webkitFullscreenElement &&
                            !this.$document.msFullscreenElement) === false);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "fullscreen", {
                    get: function () {
                        return this.status.fullscreen;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "settings", {
                    get: function () {
                        return this.status.settings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "video", {
                    get: function () {
                        return this.status.video;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "support", {
                    get: function () {
                        return this.status.support;
                    },
                    enumerable: true,
                    configurable: true
                });
                SidebarController.prototype.closeSettings = function () {
                    var _this = this;
                    if (this.status.settings.open) {
                        this.status.settings.closing = true;
                        this.calcTileHeight();
                        this.$timeout(function () {
                            if (_this.status.settings.closing === true) {
                                _this.status.settings.tile = 'settings';
                                _this.status.settings.closing = false;
                                _this.status.settings.open = false;
                            }
                        }, 400);
                    }
                };
                SidebarController.prototype.openSettings = function () {
                    if (!this.status.settings.open) {
                        this.status.settings.open = true;
                        this.calcTileHeight();
                    }
                    else if (this.status.settings.closing === true) {
                        this.status.settings.closing = false;
                        this.calcTileHeight();
                    }
                };
                SidebarController.prototype.triggerBonusVideo = function () {
                    this.$rootScope.$broadcast('trigger-bonus-video');
                };
                SidebarController.prototype.trig           };
                SidebarController.prototype.tri           };
                Object.defineProperty(SidebarController.prototype, "currentLanguage", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "locales", {
                       },
                    enumerable: true,
                    configurable: true
                });
                SidebarController.prototype.canonical = function (urlCode) {
                    if (Object.keys(this.$window.casino.canonicals).length === 0) {
                        return '';
                    }
                    return this.$window.casino.canonicals[urlCode] || '';
                };
                Object.defineProperty(SidebarController.prototype, "tileHeight", {
                       },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarController.prototype, "animationLevel", {
                    set: function (level) {
                        this.status.settings.animation = level;
                        this.SharedService.globalUser.animations = this.status.settings.animation;
                    },
                    enumerable: true,
                    configurable: true
                });
                SidebarController.prototype.changeLanguage = function (code) {
                    var path = window.location.pathname;
                    path = path.substring(0, path.indexOf('?'));
                    path = path.substring(0, path.indexOf('#'));
                    this.$window.location.href = path + '?locale=' + code;
                };
                SidebarController.prototype.togglePortalSound = function () {
                    this.status.settings.sound.notification = !this.status.settings.sound.notification;
                    this.saveSound();
                };
                SidebarController.prototype.toggleGameSound = function () {
                    this.status.settings.sound.game = !this.status.settings.sound.game;
                    this.saveSound();
                    if (this.isGamePage) {
                        this.$window.location.reload();
                    }
                };
                Object.defineProperty(SidebarController.prototype, "isGamePage", {
                    get: function () {
                        return this.$window.params.controller === 'Games' && this.$window.params.action === 'view';
                    },
                    enumerable: true,
                    configurable: true
                });
                SidebarController.prototype.toggleFullscreen = function () {
                    if (!this.checkFullscreen) {
                        if (this.$document.documentElement.requestFullscreen) {
                            this.$document.documentElement.requestFullscreen();
                        }
                        else if (this.$document.documentElement.mozRequestFullScreen) {
                            this.$document.documentElement.mozRequestFullScreen();
                        }
                        else if (this.$document.documentElement.webkitRequestFullscreen) {
                            this.$document.documentElement.webkitRequestFullscreen();
                        }
                        else if (this.$document.documentElement.msRequestFullscreen) {
                            this.$document.documentElement.msRequestFullscreen();
                        }
                    }
                    else {
                        if (this.$document.cancelFullScreen) {
                            this.$document.cancelFullScreen();
                        }
                        else if (this.$document.msExitFullscreen) {
                            this.$document.msExitFullscreen();
                        }
                        else if (this.$document.mozCancelFullScreen) {
                            this.$document.mozCancelFullScreen();
                        }
                        else if (this.$document.webkitCancelFullScreen) {
                            this.$document.webkitCancelFullScreen();
                        }
                    }
                };
                SidebarController.prototype.toggleTile = function () {
                    if (this.status.settings.tile !== 'settings') {
                        this.status.settings.tile = 'settings';
                    }
                    else {
                        this.status.settings.tile = 'languages';
                    }
                    this.calcTileHeight();
                };
                Object.defineProperty(SidebarController.prototype, "$s", {
                    get: function () {
                        return this.SharedService;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SidebarController;
            }());
            angular.module('whow.layout.sidebar').component('sidebar', {
                controller: [
                    '$scope',
                    '$element',
                    '$window',
                    '$timeout',
                    '$rootScope',
                    'localStorageService',
                    '$document',
                    'SharedService',
                    SidebarController,
                ],
                controllerAs: 'sidebarController',
                templateUrl: 'layout/sidebar/templates/sidebar-component.html',
            });
        })(sidebar = layout.sidebar || (layout.sidebar = {}));
    })(layout = whow.layout || (whow.layout = {}));
})(whow || (whow = {}));


/* jshint ignore:end */

/* jshint ignore:start */
(function(global) {
    "use strict";

    angular.module('whow').controller('layer', [
        '$scope',
        '$rootScope',
        '$timeout',
        '$http',
        'Config',
        'LayerService',
        'Helper',
        'localStorageService',
        'LocalizationService',
        function($scope,
                 $rootScope,
                 $timeout,
                 $http,
                 Config,
                 Layer,
                 Helper,
                 LocalStorage,
                 Localization) {
            if (window.whowFrame) {
                return;
            }

            /**
             * Signup demo
             */
            $rootScope.$on('trigger-signup-demo', function(event, data) {
                var signupDemoLayer = new Layer({ slug: 'signup-demo' }).create();

                if (typeof data.onHide === 'function') {
                    signupDemoLayer.on('hide', data.onHide);
                }

                signupDemoLayer.show();
            });

            /**
             * Signup
             */
            $rootScope.$on('trigger-signup', function(event, data) {
                new Layer({ slug: 'signup' }).create().show();
            });

            /**
             * Discover more games
             */
            $rootScope.$on('trigger-discover-more-games', function() {
                new Layer({ slug: 'discover-more-games' }).create().show();
            });
        }
    ]);
}(this));

/* jshint ignore:end */

(function(global) {
    "use strict";

    angular
        .module('whow')
        .controller('global', ['$scope', '$rootScope', '$compile', '$controller', '$q', '$sce', '$filter', '$timeout', '$interval', '$http', '$cookies', '$window', 'Config', 'localStorageService', 'Helper', 'LocalizationService', 'SocialService', 'LayerService', 'FunnelTrackingService', 'NeutrinoService',
            function($scope, $rootScope, $compile, $controller, $q, $sce, $filter, $timeout, $interval, $http, $cookies, $window, Config, LocalStorage, Helper, Localization, Social, Layer, FunnelTracking, Neutrino) {

                var isLandingpage = false;

                if(typeof $window.location.pathname !== 'undefined') {
                    isLandingpage = ($window.location.pathname.indexOf('/lp/') === 0);
                }

                /**
                 * Check if browser has focus
                 */
                window.tab = {
                    active: true
                };
                $window.onblur = function() {
                    window.tab.active = false;
                };
                $wind           };

                $scope.showStatusbar = function() {
                    return $window.isIframe();
                };

                /**
                 * Safe $apply
                 */
                $rootScope.$safeApply = function() {
                    var $scope, fn, force = false;
                    if (arguments.length === 1) {
                        var arg = arguments[0];
                        if (typeof arg === 'function') {
                            fn = arg;
                        } else {
                            $scope = arg;
                        }
                    } else {
                        $scope = arguments[0];
                        fn = arguments[1];
                        if (arguments.length === 3) {
                            force = !!arguments[2];
                        }
                    }
                    $scope = $scope || this;
                    fn = fn || function() {};
                    if (force || !$scope.$$phase) {
                        if ($scope.$apply) {
                            $scope.$apply(fn);
                        } else {
                            $scope.apply(fn);
                        }
                    } else {
                        fn();
                    }
                };

                /**
                 * Global updating timestamp
                 */
                $rootScope.now = _.now() / 1000 | 0;
                $interval(function() {
                    $rootScope.now = _.now() / 1000 | 0;
                    server.time++;
                }, 1000);

                /**
                 * App info for preloading
                 */
                $scope.app = {
                    loaded: true,
                    show: function() {
                        /* show app after angular is loaded */
                        $('.app-content').removeClass('hidden');
                    }
                };
                $scope.app.show();

                /**
                 * Load default translations
                 */
                Localization.loadCatalog('default').then(function() {
                    $rootScope.$broadcast('language.default.loaded');
                });

                /**
                 * Set GET params
                 */
                $scope.params = params;

                /**
                 * Windows detection
                 * This is needed to create a workaround for transparent layers and images
                 * in the game, because they would lie behind the Flash game on Windows machines.
                 *
                 * Usage: Add `ng-class="{windows:windows}"` to affected elements and restyle
                 * them in a seperat `&:windows {}` CSS class.
                 */
                $scope.windows = Helper.windowsTransparencyFix();

                /**
                 * Browser detection to change styles
                 * Available isBrowser() types: ie, firefox, chrome, safari, opera, unknown
                 *
                 * Usage:
                 * - <span class="{{browser}}">
                 * - <span ng-class="{ie: isBrowser('ie')}">
                 */
                $scope.browser = Helper.getUserBrowser();
                $scope.isIframe = window.isIframe();
                $scope.bodyWrapperHeight = 'none';

                       });

                var getBodyWrapperHeight = function () {
                    if (!window.isIframe) {
                        return 'none';
                    }

                    var padding = parseInt($('body').css('padding-top'));
                    var windowHeight = $(window).height();

                    return (windowHeight - padding) + 'px';
                };

                $scope           };

                //mobile detection from backend
                $scope.mobile = mobile;

                /**
                 * Social service
                 */
                $rootScope.social = new Social();

                /**
                 * Games list
                 */
                if (typeof games !== 'undefined') {
                    $rootScope.games = games;
                }

                /**
                 * Add layer to $rootScope
                 */
                $rootScope.layer = function(slug) {
                    if (slug) {
                        return new Layer({ slug: slug });
                    }
                };

                /**
                 * Document ready (DOM loaded)
                 */
                $(function() {
                    /** Navigation **/
                    var navCloseTimeout;
                    $('header, nav').on({
                                  },
                        mouseleave: function() {
                            navCloseTimeout = windo           }, 500);
                        }
                    });
                });

                /**
                 * Watch initial data
                 */
                $rootScope.$on('initial.data', function(event, data) {
                    if (data) {
                        for (var key in data) {
                            var item = data[key];

                            switch (key) {
                                case 'raw':
                                    for (var _key in item) {
                                        if (typeof item[_key] !== 'undefined') {
                                            /* initial show of signup modal */
                                            if (item[_key].signupLayer) {
                                                $('#signup-modal').modal();
                                            }
                                            /* fill signup username/email */
                                            if (item[_key].signupData) {
                                                var _data = item[_key];
                                                       });
                                            }
                                            /* funnel track from initial data */
                                            if (item[_key].funnel) {
                                                FunnelTracking.track({
                                                    step: item[_key].funnel
                                                });
                                            }
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                });

                /**
                 * Watch success data
                 */
                $rootScope.$on('success.data', function(event, data) {
                    Helper.message('success', data);
                });

                /**
                 * Watch error data
                 */
                $rootScope.$on('           });

                /**
                 * Track click actions
                 */
                $(document)           });

                /** Include controller components **/
                angular.extend(this, $controller('layer', {$scope: $scope}));
            }
        ]);
}(this));

/* jshint ignore:start */
(function(){
    "use strict";

    angular
        .module('whow')
        /**
         * displays a back-to-top button on the page
         */
        .directive('backToTop', ['$window', function($window) {
            return {
                restrict: 'E',
                link: function(scope, element) {
                    var view = angular.element($window);
                    var offset = 200;
                    var fadeMs = 300;

                    view.scroll(function() {
                        if (view.scrollTop() > offset) {
                            element.fadeIn(fadeMs);
                        } else {
                            element.fadeOut(fadeMs);
                        }
                    });

                    element.on('click', function() {
                        angular.element('html, body').animate({scrollTop: 0}, fadeMs);
                    });
                }
            };
        }]);

})();


var whow;
(function (whow) {
    angular
        .module("whow")
        .directive("neutrino", [
        "NeutrinoService",
        "$window",
        function (NeutrinoService, $window) {
            return {
                restrict: "E",
                scope: false,
                replace: true,
                link: function (scope, element, attrs) {
                    if ($window.user.animations > 1) {
                        element.html('');
                        var anim_1, cleanup_1 = function () {
                            if (anim_1) {
                                NeutrinoService.cleanup([anim_1]);
                            }
                        }, opts = {
                            width: Number(attrs["width"]),
                            height: Number(attrs["height"]),
                            append: element
                        };
                        if (attrs["options"]) {
                            opts = angular.merge(opts, scope.$eval(attrs["options"]));
                        }
                        anim_1 = NeutrinoService.animate(attrs["name"], opts);
                        scope.$on("$destroy", function () {
                            cleanup_1();
                        });
                    }
                    else {
                        var opts = scope.$eval(attrs["options"]);
                        if (typeof opts !== "undefined" && opts.loaded && typeof opts.loaded === 'function') {
                            opts.loaded();
                        }
                    }
                }
            };
        }
    ]);
})(whow || (whow = {}));

var whow;
(function (whow) {
    angular
        .module("whow")
        .directive("bindJquery", [
        "$compile",
        "$parse",
        function ($compile, $parse) {
            return {
                restrict: "A",
                scope: false,
                link: function (scope, element, attrs) {
                    var bindToElement = function () {
                        var $parsed = $parse(attrs["bindJquery"])(scope), $el = $compile($parsed)(scope);
                        element.empty();
                        element.append($el);
                    };
                    attrs.$observe("bindJquery", function () { return bindToElement(); });
                }
            };
        }
    ])
        .directive("bindJqueryCompiled", [
        "Helper",
        "$parse",
        function (Helper, $parse) {
            return {
                restrict: "A",
                scope: false,
                link: function (scope, element, attrs) {
                    var uuid = Helper.uuid(), bindToElement = function () {
                        var $ex = $("[data-uuid=\"" + uuid + "\"]");
                        if ($ex.length > 0) {
                            $ex.remove();
                        }
                        var $el = $parse(attrs["bindJqueryCompiled"])(scope);
                        $el.attr("data-uuid", uuid);
                        element.append($el);
                    };
                    attrs.$observe("bindJqueElement(); });
                }
            };
        }
    ]);
})(whow || (whow = {}));

"use strict";

angular.module("whow").directive("stickyScroll", ["$timeout", function ($timeout) {
  return {
    restrict: "A",
    scope: {
      options: "=?stickyScroll"
    },
    link: function link(scope, element) {
      var eventSuffix = "stickyScroll-" + parseInt(String(_.now()).substring(4)),
          getScrollHeight = function getScrollHeight() {
        if (typeof window.scrollTop !== "undefined") {
          return window.scrollTop;
        } else if (typeof window.pageYOffset !== "undefined") {
          return window.pageYOffset;
        } else {
          return document.documentElement.scrollTop;
        }
      },
          originalCss = {};

      var callback = function callback() {
        var options = scope.options || {
          top: 0,
          bottom: 0,
          boundry: false
        },
            originalOffset = element.offset(),
            targetOffset = originalOffset.top + options.top,
            maxOffset = 0,
            enabled = false;
        originalCss = {
          top: element.css("top")
        };

        if (options.boundry) {
          var boundryContainer = element.parents(options.boundry).first();

          if (boundryContainer) {
            maxOffset = boundryContainer.offset().top + boundryContainer.outerHeight() - element.outerHeight() + options.top;
          }
        }

        $(window).on("scroll.".concat(eventSuffix), function () {
          var h = getScrollHeight();

          if (h > targetOffset) {
            var newTop;

            if (maxOffset && h > maxOffset) {
              newTop = maxOffset - targetOffset + options.bottom - options.top;
            } else {
              newTop = h - targetOffset;
            }

            element.addClass("sticky").css({
              top: newTop
            });
            enabled = true;
          } else {
            if (enabled) {
              element.removeClass("sticky").css(originalCss);
              enabled = false;
            }
          }
        }).trigger("scroll.".concat(eventSuffix));
      };

      e");
      }, function (newValue) {
        $(window).off("scroll.".concat(eventSuffix));
        element.removeClass("sticky").css(originalCss);

        if (newValue) {
          $timeout(callback);
        }
      });
    }
  };
}]);

var whow;
(function (whow) {
    angular
        .module("whow")
        .directive("preload", [
        "$q",
        "$http",
        "$window",
        "Helper",
        "$parse",
        "$compile",
        "$rootScope",
        function ($q, $http, $window, Helper, $parse, $compile, $rootScope) {
            return {
                restrict: "E",
                scope: false,
                priority: 9999,
                terminal: true,
                compile: function (element, attrs) {
                    var $head = $("head");
                    $rootScope.$broadcast("loading:start");
                    var markup = element.html();
                    element.empty();
                    var addCdn = function (file, prefix) {
                        if (file.substring(0, 2) === '//') {
                            return file;
                        }
                        file = (prefix ? prefix : '') + file;
                        file = file.substring(0, 1) !== '/' ? '/' + file : file;
                        return '//' + $window.cdn + file;
                    };
                    var addCV = function (file, prefix) {
                        file = (prefix ? prefix : '') + file;
                        if (file.indexOf('__cv') === -1) {
                            return Helper.getCV(file);
                        }
                        else {
                            return file;
                        }
                    };
                    return function (scope, element) {
                        var styles = $parse(attrs.preloadStyles)(scope) || [], scripts = $parse(attrs.preloadScripts)(scope) || [], imgs = $parse(attrs.preloadImages)(scope) || [], audios = $parse(attrs.preloadAudio)(scope) || [], cancelled = false, loadingPromise = $q.defer();
                        if (angular.isArray(imgs)) {
                            imgs = imgs.map(function (file) { return addCdn(file, "/img/" + $window.theme + "/"); });
                        }
                        else if (angular.isObject(imgs)) {
                            imgs = Object.keys(imgs).map(function (key) { return imgs[key] = addCdn(imgs[key], "/img/" + $window.theme + "/"); });
                        }
                        else {
                            imgs = [];
                        }
                        if (angular.isArray(styles)) {
                            styles = styles.map(function (file) { return addCV(file, "/css/" + $window.theme + "/"); });
                        }
                        else if (angular.isObject(styles)) {
                            styles = Object.keys(styles).map(function (key) { return styles[key] = addCV(styles[key], "/css/" + $window.theme + "/"); });
                        }
                        else {
                            styles = [];
                        }
                        if (angular.isArray(scripts)) {
                            scripts = scripts.map(function (file) { return addCV(file, "/js/"); });
                        }
                        else if (angular.isObject(scripts)) {
                            scripts = Object.keys(scripts).map(function (key) { return scripts[key] = addCV(scripts[key], "/js/"); });
                        }
                        else {
                            scripts = [];
                        }
                        if (angular.isArray(audios)) {
                            audios = audios.map(function (file) { return addCdn(file); });
                        }
                        else if (angular.isObject(audios)) {
                            audios = Object.keysios[key]); });
                        }
                        else {
                            audios = [];
                        }
                        var imgPromises = [];
                        imgs.forEach(function (file) {
                            var promise = $q.defer();
                            angular.element(new Image())
                                .on("load", function (event) {
                                promise.resolve(event);
                            })
                                .on("error", function (event) {
                                promise.reject(event);
                                console.error("Could not preload image \"" + file + "\"");
                            })
                                .attr("src", file);
                            imgPromises.push(promise.promise);
                        });
                        var audioPromises = [];
                        audios.forEach(function (file) {
                            var promise = $q.defer(), audio = new Audio();
                            if (/.+.ogg\?__cv=[a-z0-9]{32}/.test(file) && "" === audio.canPlayType("audio/ogg")) {
                                return;
                            }
                            if (/.+.mp3\?__cv=[a-z0-9]{32}/.test(file) && "" === audio.canPlayType("audio/mp3")) {
                                return;
                            }
                            audio.addEventListener("canplaythrough", function () {
                                if (angular.isFunction(audio.remove)) {
                                    audio.remove();
                                }
                                promise.resolve(file);
                            }, false);
                            audio.addEventListener("error", function () {
                                if (angular.isFunction(audio.remove)) {
                                    audio.remove();
                                }
                                promise.reject(file);
                                console.error("Could not preload audio \"" + file + "\"");
                            }, false);
                            audio.src = file;
                            audio.preload = "auto";
                            audio.volume = 0;
                            element.append(audio);
                            audioPromises.push(promise.promise);
                        });
                        var stylePromises = styles.map(function (file) { return $q(function (resolve, reject) {
                            var id = btoa(file), link = document.createElement('link');
                            if ($head.find("[data-id=\"" + id + "\"]").length === 0) {
                                link.setAttribute('data-id', id);
                                link.href = file;
                                link.rel = 'stylesheet';
                                link.type = 'text/css';
                                link.onload = function () {
                                    resolve();
                                };
                                link.onerror = li           };
                                $head.append(link);
                            }
                            else {
                                resolve();
                            }
                        }); });
                        var scriptPromises = scripts.map(function (file) { return $http.get(file).then(function (response) {
                            if (response.status === 200) {
                                var id = btoa(file);
                                if ($head.find("[data-id=\"" + id + "\"]").length === 0) {
                                    $head.append("<script data-id=\"" + id + "\">" + response.data + "</script>");
                                }
                            }
                            else {
                                console.error("Could not preload script \"" + file + "\"");
                            }
                            return response;
                         }); });
                        $q.all([].concat(audioPromises, stylePromises, scriptPromises, imgPromises)).then(function () {
                            loadingPromise.resolve();
                        });
                        loadingPromise.promise.then(function () {
                            if (!cancelled) {
                                element.append($compile(markup, null, 9999)(scope));
                                if (attrs.preloadNotify) {
                                    scope.$eval(attrs.preloadNotify);
                                }
                                $rootScope.$broadcast("loading:end");
                            }
                            else {
                                console.warn("Preloading canceled.");
                            }
                        }, function () {
                            console.error("some assets were not preloaded!");
                        }).catch(function () {
                            console.error("some assets were not preloaded!");
                        });
                        element.one           });
                    };
                }
            };
        }
    ]);
})(whow || (whow = {}));

/* jshint ignore:end */

(function(global) {
    "use strict";

    /**
     * DIRECTIVES
     *
     * What are directives and how do I use them?
     * Directived can listen to element names, attributes and class names
     * to add events to theme or manipulate the DOM.
     *
     * You can define what your directive will listen on by adding the 'restrict' option.
     * There are three possible values for 'restrict'.
     * 1. A => Listen to attributes of an element (e.g. '<div data-my-directive></div>')
     * 2. C => Listen to CSS class names of an element (e.g. '<div class="my-directive"></div>')
     * 3. E => Listen to the element name (e.g. '<my-directive></my-direcitve>')
     * You can also combine this options like this: 'ACE' or 'AC' etc.
     */

    angular
    .module('whow')
    /**
     * Wrapper directive for inputs of type radio and checkbox
     *
     * Description:
     * Creates a directive with a hidden checkbox or radio button
     * Any input attributes (like value, type or name) are reflected
     * on the hidden input.
     * The directive is transcluding which means that any content put
     * inside the <radio-checkbox> element will also appear
     *
     * Usage:
     * <radio-checkbox type="checkbox" ng-model="isChecked">
     *    <div ng-class="isChecked ? 'icon-checked' : ''"></div>
     *    <p>Accept our Terms and Conditions</p>
     * </radio-checkbox>
     *
     * Attributes:
     * ng-model => the model that the value should be bound to
     * type => the type of the input (radio or checkbox)
     * id => id attribute that is reflected on the hidden input
     * onClick => attribute to override internal onclick handler
     * value => value attribute reflected on the hidden input
     */
    .directive('radioCheckbox', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@?',
                ngModel: '=',
                ngModelOptions: '=?',
                type: '@',
                value: '@?',
                onClick: '&?',
                id: '@?'
            },
            require: "ngModel",
            replace: true,
            transclude: true,
            template:
                '<div class="custom-checkbox-radio" ' +
                'ng-click="onClick()">' +
                '<input type="{{type}}" ' +
                    'ng-attr-name="{{name}}" ' +
                    'ng-attr-id="{{id}}" ' +
                    'ng-attr-value="{{value}}" ' +
                    'ng-model="ngModel"' +
                    'ng-model-options="ngModelOptions || {}">' +
                    '<label ng-attr-for="{{id}}" ng-transclude>' +
                '</label></div>',
            link: function($scope, $elem, $attr, ngModelController) {
                if ($scope.type === undefined) {
                    throw new Error('type of radio-checkbox directive must be defined, can be radio or checkbox');
                }

                if ($attr.onClick === undefined || $attr.onClick === '') {
                    $scope.onClick = function() {
                        if ($scope.type === 'radio') {
                            ngModelController.$setViewValue($scope.value);
                        } else if ($scope.type === 'checkbox') {
                            ngModelController.$setViewValue(!$scope.ngModel);
                        }
                    };
                }
            }
        };
    })

    /**
     * Creates a custom styled selectbox
     *
     * Description:
     * This will create a CSS customizable Dropdown field.
     * We created our own, because we are using our image
     * sprite system and there was no library out there
     * which could fit our needs.
     * Notice: You have to add the value attribute to the options!
     *
     * Tip: You can also write invalid JSON like "{foo:'bar'}"
     *
     * Usage:
     * <select data-custom-select></select>
     *
     * Usage with parameters:
     * <select data-custom-select='{"style":"my-style","label":"What is your gender?"}'>
     *     <option></option>
     *     <option value="male">Male</option>
     *     <option value="female">Female</option>
     * </select>
     *
     * Parameters:
     * style {string} => Defines a style via a CSS class
     * label {string} => Label text if no item is selected. You have to add an empty option.
     */
    .directive('customSelect', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var defaults = {
                        style: 'default'
                    },
                    options = {},
                    select = element,
                    wrapper = $('<div>').addClass('cSelect'),
                    selectedText = $('<div>').addClass('text'),
                    selected = $('<div>').addClass('selected').append(selectedText),
                    list = $('<ul>').addClass('items').hide();

                if (attrs.customSelect) {
                    try {
                        options = scope.$eval(attrs.customSelect);
                    } catch (e) {}
                }

                if (_.isEmpty(options)) {
                    switch (attrs.customSelect) {
                        case 'destroy':
                            element
                                .prev('.cSelect').remove()
                                .end()
                                .show();
                            return;
                    }
                }

                options = $.extend(defaults, options);

                $(wrapper).addClass(options.style).addClass(attrs.class);
                $(selectedText).html(options.label);

                $timeout(function() {
                    $(wrapper).append(selected, list).on('click', function() {
                        $('.cSelect').not(this).find('.items').hide();
                        $(wrapper).find('.items').toggle();
                    });

                    element.find('option').each(function() {
                        if ("" !== $(this).val()) {
                            var icon,
                                _text = $(this).text().replace(/\_\_(\S(.*?\S)?)\_\_/gm, '<span>$1</span>'),
                                text = $('<div>').addClass('text').html(_text),
                                item = $('<li>')
                                    .data('value', $(this).val())
                                    .html(text)
                                    .on('click', function() {
                                        select.find('option').removeAttr('selected').end()
                                            .find("option[value=" + $(this).data('value') + "]").prop('selected', true)
                                            .trigger('change');

                                        $(list).find('li').removeClass('active');
                                        $(this).addClass('active');
                                        $(selectedText).html(_text);

                                        if (icon) {
                                            $(selected).find('.item-icon').remove().end()
                                                .prepend(icon.clone());
                                        }
                                    });

                            if ($(this).data('icon')) {
                                icon = $('<div>').addClass('item-icon ' + $(this).data('icon'));
                                $(item).prepend(icon);
                            }

                            $(list).append(item);

                            if (select.val() === $(this).val()) {
                                $(selectedText).html(_text);

                                if (icon) {
                                    $(wrapper).addClass('icon');
                                    $(selected).prepend(icon.clone());
                                }
                            }
                        }
                    });

                    element.hide().before(wrapper);

                    $('html').on('click', function(e) {
                        if (
                            $(e.target).hasClass('cSelect') ||
                            $(e.target).hasClass('item-icon') ||
                            $(e.target).hasClass('text') ||
                            $(e.target).parent().hasClass('text')
                        ) {
                            return false;
                        }
                        $(list).hide();
                    });

                    scope.$watch(attrs.ngModel, function(value) {
                        if ($(select).val() === value) {
                            $(select).prop("selected", true);
                        }
                        // TODO: Update selected field when <select> changed from outside
                        // console.log($(list), $(list).find('[data-value="' + value + '"]'));
                        // $(list).find('[data-value="' + value + '"]').addClass('active');
                    });
                });
            }
        };
    })
    /**
     * Converts <select> element values to integer
     */
    .directive('convertToNumber', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(val) {
                    return parseInt(val, 10);
                });
                ngModel.$for           });
            }
        };
    })
    /**
     * Adds a countdown
     *
     * Description:
     * Adds a readable time countdown the the element.
     * Can be extended with colors and a progress bar (only possible if you define start and end).
     *
     * Usage:
     * <span countdown data-start="1415177422" data-end="1415183402"></span>
     * <span countdown data-start="1415177422" data-end="1415183402" data-progress="true"></span>
     * <span countdown data-start="1415177422" data-end="1415183402" data-progress="true" data-colors="{background: '#000', 100: '#0f0', 50: '#f00'}"></span>
     *
     * Usage with seconds left as parameter:
     * <span countdown data-seconds="3600"></span>
     *
     * Parameters:
     * start     {integer}     => Start timestamp
     * end       {integer}     => End timestamp
     * progress  {boolean}     => Show progress bar
     * icon      {boolean}     => Show clock icon
     * colors    {JSON object} => Custom colors (key = percent, value = HEX or RGB(A) color code)
     * broadcast {string}      => Broadcast slug
     * options   {object}      => Options
     *
     * Result:
     * <span>01:00:00</span>
     */
    .directive('countdown', ['$rootScope', '$filter', 'Helper', 'LocalizationService', function($rootScope, $filter, Helper, Localization) {
        return {
            restrict: 'A',
            template: '<span class="starts-in">{{ \'Starts in\' | translate }} </span>',
            scope: {
                start: '@',
                end: '@',
                seconds: '@',
                progress: '@',
                icon: '@',
                colors: '@',
                broadcast: '@',
                timedBroadcast: '=?',
                options: '@',
                future: '@'
            },
            link: function(scope, element, attrs) {
                scope.options = scope.options ? scope.options.replace(/\(\((.*?)\)\)/g, "{{$1}}") : scope.options;
                var colors = {
                        background: '#000',
                        100: '#82cd06',
                        50: '#d25c05'
                    },
                    options = scope.$eval(scope.options),
                    wrapper = $('<span>'),
                    startTime = $('<span>'),
                    startIn = $(element).find('.starts-in'),
                    clock = $('<div>').addClass('clock-icon').append('<i>', '<i>'),
                    time = $('<span>'),
                    timestamp = Helper.timestamp(),
                    difference,
                    secondsLeft,
                    secondsGone,
                    secondsLeftStartIn = 0,
                    percent,
                    interval;

                scope.$on           });

                options = $.extend({
                    timeFormat: '[{{d}}d ][{{h}}:][{{M}}:][{{S}}]', // [] is a group (localized), {} is a loca key (d, h, m, s - or uppercase if you want the value to stay when it is zero)
                }, options);

                var timeFormat = options.timeFormat.match(/\[(.*?)\]/g),
                    foundDays = false,
                    foundHours = false;
                for (var i in timeFormat) {
                    timeFormat[i] = timeFormat[i].substring(1, timeFormat[i].length - 1);

                    if (
                        timeFormat[i].indexOf('{{d}}') !== -1 ||
                        timeFormat[i].indexOf('{{D}}') !== -1
                    ) {
                        foundDays = true;
                    }

                    if (
                        timeFormat[i].indexOf('{{h}}') !== -1 ||
                        timeFormat[i].indexOf('{{H}}') !== -1
                    ) {
                        foundHours = true;
                    }
                }

                options.timeFormat = timeFormat;

                if (!foundDays) {
                    options.noDays = true;
                }

                if (!foundHours) {
                    options.noHours = true;
                }

                if (scope.seconds) {
                    secondsLeft = scope.seconds;
                } else {
                    var start = scope.start ? scope.start : parseInt(_.now() / 1000);

                    difference = scope.end - scope.start;
                    secondsLeft = scope.end - timestamp;
                    percent = 100 - (100 / difference) * secondsLeft;
                    colors = scope.colors ? scope.colors : colors;
                }

                $(element).addClass('countdown');
                /* show countdown when there is a positive seconds value */
                if (secondsLeft && secondsLeft >= 0) {
                    /* show countdown "starts in" when start is bigger then now */
                    if (scope.future) {
                        secondsGone = timestamp - scope.seconds;
                        $(startIn).remove();
                    } else {
                        if (scope.start && scope.start > timestamp) {
                            secondsLeftStartIn = scope.start - timestamp;
                            $(startIn).append(startTime);
                            $(time).hide(); //hide time left when displaying "starts in"
                        } else {
                            $(startIn).remove();
                        }
                    }

                    /* add clock icon */
                    if (scope.icon) {
                        $(element).append(clock);
                    }

                    /* init progress bar stuff when enabled */
                    if (percent && scope.progress) {
                        var bar1 = $('<div>').css({
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: '-2px',
                                height: '2px',
                                backgroundColor: colors.background,
                                zIndex: 1
                            }),
                            bar2 = $(bar1).clone().css({
                                zIndex: 2
                            });

                        $(wrapper).css('position', 'relative').append(bar1, bar2);

                        delete colors.background;
                    }

                    /* init countdown */
                    updateCountdown();

                    /* Countdown interval */
                    interval = window.setInterval(function() {
                        updateCountdown();
                        if (scope.future) {
                            secondsGone++;
                        } else {
                            if (secondsLeftStartIn > 0) {
                                secondsLeftStartIn--;
                            }
                            secondsLeft--;
                        }
                    }, 1000);
                }

                /* append time */
                $(wrapper).append(time);
                $(element).append(wrapper);

                function updateCountdown() {
                    /* stop timer when reached 0 */
                    if (secondsLeft < 0) {
                        window.clearInterval(interval);
                        interval = null;

                        if (scope.broadcast) {
                            $rootScope.$broadcast(
                                'countdown.' + scope.broadcast + '.done',
                                angular.element(element).context
                            );
                        }

                        return;
                    }

                    /* show countdown "starts in" when start is bigger then now */
                    if (secondsLeftStartIn > 0) {
                        if ($(bar1).is(":visible") || $(bar2).is(":visible")) {
                            $(bar1).hide();
                            $(bar2).hide();
                        }
                        $(startTime).html($filter('readable')(secondsLeftStartIn, 'time-left-short'));
                    } else if (secondsLeftStartIn <= 0) {
                        if ($(bar1).is(":hidden") || $(bar2).is(":hidden")) {
                            $(bar1).show();
                            $(bar2).show();
                        }
                        $(startIn).remove();

                        if (!scope.broadcasted) {
                            scope.broadcasted = true;
                            $rootScope.$broadcast('countdown.start-in.done', angular.element(element).context);
                        }

                        /* update time */
                        var timeString = readable(scope.future ? secondsGone : secondsLeft, options);
                        $(time).html(timeString).show();

                        if (percent && scope.progress) {
                            var _percent;

                            /* calulate current progress */
                            percent = 100 - (100 / difference) * secondsLeft;

                            /* get color to display */
                            for (_percent in colors) {
                                if (100 - percent <= _percent) {
                                    break;
                                }
                            }
                            /* update clock color */
                            $(clock).css({
                                borderColor: colors[_percent]
                            })
                            .find('i').css({
                                backgroundColor: colors[_percent]
                            });
                            /* update time color */
                            $(time).css({
                                color: colors[_percent]
                            });
                            /* update progress bar */
                            $(bar2).css({
                                left: percent + '%',
                                backgroundColor: colors[_percent]
                            });
                        }
                    }

                    if (scope.timedBroadcast && angular.isObject(scope.timedBroadcast)) {
                        Object.keys(scope.timedBroadcast).forEach(function(b) {
                            var op = scope.timedBroadcast[b][0],
                                comp = Number(scope.timedBroadcast[b][1] || 0),
                                cont = false;

                            switch (op) {
                                case 'eq': cont = (secondsLeft === comp); break;
                                case 'lt': cont = (secondsLeft < comp); break;
                                case 'lte': cont = (secondsLeft <= comp); break;
                                case 'gt': cont = (secondsLeft > comp); break;
                                case 'gte': cont = (secondsLeft >= comp); break;
                                default: cont = false;
                            }

                            if (cont) {
                                $rootScope.$broadcast(b, {
                                    secondsLeft: secondsLeft
                                });
                            }
                        });
                    }
                }

                function readable(seconds, options) {
                    var timeString = '',
                        time = {
                            d: Math.floor(seconds / 86400),
                            h: options.noDays ? Math.floor(seconds / 3600) : Math.floor(seconds % 86400 / 3600),
                            m: options.noHours ? Math.floor(seconds / 60) : Math.floor(seconds % 3600 / 60),
                            s: Math.floor(seconds % 3600 % 60)
                        };

                    for (var i in options.timeFormat) {
                        var tf = options.timeFormat[i],
                            tfChar = tf.match(/{{(.*?)}}/g)[0].substring(2, 3),
                            valInt = time[tfChar.toLowerCase()],
                            val = (tfChar.toLowerCase() !== 'd' && tfChar !== 'h') ? String(valInt).lpad("0", 2) : valInt,
                            locaParams = {};

                        locaParams[tfChar] = val;
                        var valStr = Localization.catalog.getString(tf, locaParams);

                        if (tfChar === tfChar.toUpperCase()) {
                            timeString += valStr;
                        } else {
                            if (
                                valInt !== 0 ||
                                (tfChar === 'h' && time.d !== 0) ||
                                (tfChar === 'm' && (time.d !== 0 || time.h !== 0)) ||
                                (tfChar === 's' && (time.d !== 0 || time.h !== 0 || time.m !== 0))
                            ) {
                                timeString += valStr;
                            }
                        }
                    }

                    return timeString;
                }
                scope.$watchGroup(['start', 'end', 'seconds'], function (newValues) {
                    if (newValues[2]) {
                        secondsLeft = newValues[2];
                    } else {
                        secondsLeft = newValues[1] - Helper.timestamp();
                    }

                    /* Countdown interval */
                    if (!interval && secondsLeft > 0) {
                        interval = window.setInterval(function () {
                            updateCountdown();

                            if (secondsLeftStartIn > 0) {
                                secondsLeftStartIn--;
                            }
                            secondsLeft--;

                        }, 1000);
                    }
                });
            }
        };
    }])
    /**
     * Adds a digit counter
     *
     * Description:
     * Will count a number up or down depending on its start and end values.
     *
     * Usage:
     * <span digit-counter="{start: 100, end: 1000, steps: 7, fps: 30}"></span>
     *
     * Parameters:
     * start {integer} => Start number
     * end   {integer} => End number
     * steps {integer} => Steps to increase/decrease in each cycle
     * breaks {object} => Wait for specified time after a number is reached (key: number, value: milliseconds)
     * fps   {integer} => Frames per second
     */
    .directive('digitCounter', ['$rootScope', '$filter', 'Helper', function($rootScope, $filter, Helper) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var options = _.extend({
                    start: 0,
                    end: 100,
                    steps: 1,
                    breaks: {},
                    fps: 60
                }, scope.$eval(attrs.digitCounter)),
                current = options.start;

                var steps = Math.round(options.steps);

                var startInterval = function () {
                    var interval = window.setInterval(function() {
                        var increasing = true;
                        var decreasing = false;
                        if (options.start < options.end) {
                            current += steps;
                            if (current >= options.end) {
                                window.clearInterval(interval);
                                current = options.end;
                            }
                        } else {
                            current -= steps;
                            if (current <= options.end) {
                                window.clearInterval(interval);
                                current = options.end;
                            }

                            increasing = false;
                            decreasing = false;
                        }
                        $(element).html($filter('numberFormat')(current));

                        for (var breakValue in options.breaks) {
                            if (!options.breaks[breakValue]) {
                                continue;
                            }

                            if ((breakValue <= current && increasing) || (breakValue >= current && decreasing)) {
                                window.clearInterval(interval);
                                window.setTimeout(function () {
                                    startInterval();
                                }, options.breaks[breakValue]);

                                options.breaks[breakValue] = null;

                                return;
                            }
                        }
                    }, 1000 / options.fps);
                };

                startInterval();
            }
        };
    }])
    /**
     * Adds a time ago refresh
     *
     * Description:
     *
     *
     * Usage:
     *
     */
    .directive('timeAgo', function($filter, $interval) {
        return {
            restrict: 'A',
            template: '<span>{{timeago}}</span>',
            scope: {},
            link: function(scope, element, attrs) {
                var interval = $interval(function() {
                    scope.timeago = $filter('readable')(attrs.timeAgo, 'time-ago');
                }, 3000);

                scope.timeago = $filter('readable')(attrs.timeAgo, 'time-ago');
                scope.$on(
                    "$destroy",
                    function handleDestroyEvent() {
                        $interval.cancel(interval);
                    }
                );
            }
        };
    })
    /**
     * Ajax request for forms
     *
     * Description:
     * Submits a form via Ajax to the URL of the forms action parameter
     * and adds a prefix of the API url (default: '/api').
     * Shows error and success messages. If the request was successfull,
     * the 'ajax.complete' and a attribute name generated broadcast will be triggered.
     * The generated broadcast consists the parts 'ajax.ATTRIBUTE-NAME.complete'.
     *
     * Usage:
     * <form ajax></form>
     *
     * Usage with custom broadcast:
     * <form ajax="example"></form>
     *
     * $rootScope.$on('ajax.example.complete', function(event) {
     *     //actions after broadcast was triggered
     * });
     */
    .directive('ajax', function($rootScope, $http, Config, Helper) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if ($(element).prop("tagName") === "FORM") {
                    $(element).on('submit', function(e) {
                        e.preventDefault();

                        var url = $(this).attr('action'),
                            post = {},
                            inputs = $(element).serializeArray();

                        $.           });

                        $http({
                            method: 'POST',
                            url: Config.API_URI + url,
                            data: post
                        }).then(function(response) {
                            response = response.data;

                            if (response.errors) {
                                Helper.message('error', response.errors);
                            }

                            if (response.successes) {
                                Helper.message('success', response.successes);
                            }

                            $rootScope.$broadcast('ajax.complete', response);

                            if (attrs.ajax) {
                                $rootScope.$broadcast('ajax.' + attrs.ajax + '.complete', response);
                            }

                            $(element).find('input[type=submit], .btn-submit').removeClass('disabled');
                        });
                    }).find('input[type=submit], .btn-submit').on('click', function() {
                        $(this).addClass('disabled');
                    });
                }
            }
        };
    })
    /**
     * Adds styled tooltips
     *
     * Description:
     * Adds a styled tooltip from the jBox library to the element.
     * The appearance can be configured via a JSON string which
     * can be added to the 'data-tooltip' attribute.
     * You can see all options on the jBox website:
     * http://stephanwagner.me/jBox/documentation
     *
     * Tip: You can also write invalid JSON like "{foo:'bar'}"
     *
     * Usage:
     * <div title="Your tooltip text" tooltip></div>
     *
     * Usage example with options:
     * <div title="Your tooltip text" tooltip='{"position":{"x":"center","y":"top"},"pointer":"left:25","offset":{"x":-120}}'></div>
     */
    .directive('tooltip', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (attrs.title !== '') {
                    var tt,
                        defaults = {
                            appendTo: 'body',
                            theme: 'whow-tooltip',
                            delayOpen: 250,
                            delayClose: 500
                        },
                        options = attrs.tooltip ? scope.$eval(attrs.tooltip) : {};

                    options = $.extend(defaults, options);
                    options.appendTo = $(options.appendTo);

                    $timeout(function() {
                        tt = $(element).jBox('Tooltip', options);

                        if (attrs.ngModel) {
                            scope.$watch(attrs.ngModel, function(value) {
                                tt.setContent(value);
                            });
                        }
                    });
                }
            }
        };
    })
    /**
     * Track data on click
     *
     * Description:
     * Tracks data given by a JSON when clicking on the element.
     * The first parameter 'service' is the tracking service.
     * The second parameter 'event' is the event name (like a key).
     * The third parameter 'attr' is the data (like the value).
     *
     * Usage:
     * <div track="{ 'service': 'whow-funnel', 'event': 'event-name', 'attr': { 'key': 'value', 'foo': 'bar' } }"></div>
     */
    .directive('track', function(Helper, FunnelTrackingService) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).on('click', function() {
                    var data = scope.$eval(attrs.track);

                    if (data) {
                        var attr = data.attr || {};
                        switch (data.service) {
                            case 'whow-funnel':
                                FunnelTrackingService.track(data.event, attr);
                                break;

                            case 'whow-eventlog':
                                Helper.whowTrack(data.event, attr);
                                break;

                            case 'google':
                                Helper.track(data.event, attr);
                                break;

                            default:
                                Helper.track(data.event, attr);
                                break;
                        }
                    }
                });
            }
        };
    })
    /**
     * Track data with HTML elements
     *
     * Description:
     * Tracks data by HTML elements which could be set depending on
     * backend actions.
     * The first parameter 'event' is the event name (like a key).
     * The second parameter 'attr' is the data (like the value).
     *
     * Tip: You can also write invalid JSON like "{foo:'bar'}"
     *
     * Usage:
     * <track data-event="event-name" data-attr="{key:'value',foo:'bar'}">
     */
    .directive('track', function($timeout, Helper) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                if (window.user && window.user.trackingOptOut === true) {
                    return false;
                }
                var attr = scope.$eval(attrs.attr);

                if (attrs.event && attr) {
                           });
                }
            }
        };
    })
    /**
     * Bounce effect on click
     *
     * Description:
     * Adds a bounce to a element with the class 'bounce'. If a parent
     * element has the class 'click-bounce', it will be the click target
     * and the element with the 'bounce' class will bounce.
     *
     * Usage:
     * <div class="bounce"></div>
     *
     * Usage wit click target:
     * <div class="click-bounce">
     *     <div class="bounce"></div>
     * </div>
     */
    .directive('bounce', function(Helper) {
        return {
            restrict: 'C',
            link: function(scope, element, attrs) {
                var obj = element;

                if ($(element).closest('.click-bounce').length) {
                    obj = $(element).closest('.click-bounce');
                }

                $(obj).on('click', function() {
                    $(element).effect('bounce');
                    // $(element) //CSS animated bounce
                    //     .addClass('animation bounce')
                    //     .delay(500)
                    //     .queue(function() {
                    //         $(element).removeClass('animation bounce');
                    //     });
                });
            }
        };
    })
    /**
     * Sound toggle icon/button
     *
     * Description:
     * Renders a sound toggle button which will switch the sound
     * on and off.
     *
     * Tip: You can also write invalid JSON like "{foo:'bar'}"
     *
     * Usage:
     * <div data-sound-toggle></div>
     */
    .directive('soundToggle', ['$rootScope', 'localStorageService',
        function($rootScope, LocalStorage) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var options = attrs.soundToggle ? scope.$eval(attrs.soundToggle) : {},
                        sound = LocalStorage.get('sound') || {};

                    if (typeof sound !== 'object') {
                        LocalStorage.remove('sound');
                        sound = {};
                    }

                    sound[options.key] = typeof sound[options.key] === 'undefined' ? true : sound[options.key];

                    if (options.css) {
                        $(element).addClass(sound[options.key] ? options.css.on : options.css.off);
                    }

                    $(element)
                        .addClass(sound[options.key] ? 'on' : 'off')
                        .on('click', function() {
                            sound[options.key] = !sound[options.key];
                            sound = $.extend((LocalStorage.get('sound') || {}), sound);
                            LocalStorage.set('sound', sound);

                            $rootScope.$broadcast('sound.change', sound);

                            if (options.css) {
                                $(this).removeClass(options.css.on + ' ' + options.css.off).addClass(sound[options.key] ? options.css.on : options.css.off);
                            }

                            $(this).removeClass('on off').addClass(sound[options.key] ? 'on' : 'off');

                            if (options.key === 'game' && params.controller === 'Games' && params.action === 'view') {
                                location.reload();
                            }
                        });
                }
            };
        }
    ])
    /**
     * Redirect to URL after signup/login
     *
     * Description:
     * You can define a redirect URL when opening a signup/login modal
     * by adding this to the element which triggers the modal open.
     * The user will be redirected to the given URL after successfull
     * signup or login. This happens by adding the URL to the local
     * storage value 'redirectTo'.
     * You can add it to a button (click event) or form (submit event).
     *
     * Usage:
     * <span data-redirect-to="/games/my-game" data-signup-modal>Register and play</span>
     * <form data-redirect-to="/games/my-game"></form>
     */
    .directive('redirectTo', ['localStorageService',
        function(LocalStorage) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $(element).on('click submit', function() {
                        if (!query.redirectTo) { //do not overwrite redirectTo from URL param
                            if (attrs.redirectTo !== '' && attrs.redirectTo !== 'self') {
                                LocalStorage.set('redirectTo', attrs.redirectTo);
                            } else {
                                LocalStorage.set('redirectTo', window.location.href);
                            }
                        }
                    });
                }
            };
        }
    ])
    /**
     * Add brodcast for textareas to pass the data
     *
     * Description:
     * By adding this to a textarea, a brodcast will be added which returns
     * the JSON data inside the texarea as an object to the listener.
     * The brodcast name is generated from the 'data-event-data' attribute.
     * E.g. Attribute 'data-event-data="success"' will create a 'success.data' broadcast.
     *
     * Tip: You can also write invalid JSON like "{foo:'bar'}"
     *
     * Usage:
     * <textarea data-event-data="success">{"foo":"bar"}</textarea>
     *
     * $rootScope.$on('success.data', function(event, data) {
     *     //actions after broadcast was triggered
     *     //data contains the data object
     *     console.log(data);
     * });
     */
    .directive('eventData', function($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (attrs.eventData !== "") {
                    if ($(element).prop("tagName") === "TEXTAREA") {
                        var data = $(element).val();
                        data = data ? scope.$eval(data) : {};
                        $rootScope.$broadcast(attrs.eventData + '.data', data);
                    }
                }
            }
        };
    })
    /**
     * TODO: Please add complete docblock
     */
    .directive('loader', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            template: '<div class="loader {{ ::class }}" ng-if="enabled" ng-show="isLoading"><div><div><div></div></div></div></div>',
            replace: true,
            controller: function($scope, $element) {
                $scope.enabled = true;
                $scope.isLoading = false;
                $scope.isPersistent = false;
                $rootScope.$on('loading:persistent', function(event, persistent) {
                    $scope.isPersistent = persistent;
                });
                $rootScope.$on('loading:start', function() {
                    $scope.isLoading = true;
                });
                $rootScope.$on('l           });
                $rootScope.$on('loading:disabled', function() {
                    $scope.enabled = false;
                });
                $rootScope.$on('loadi           });
            }
        };
    }])
    /**
     * Plays a sprite animation in a canvas element.
     *
     * Description:
     * Will play a sprite image as video/animation
     *
     * Usage:
     * <sprite-animation data-config="{id: 'unique-foobar-animation', img:'/img/sprite.png', width: 320, height: 240, fps: 12, sequence: [1,2,3,4], autoplay: true, loop: true}"></sprite-animation>
     *
     * Parameters:
     * id                   {string}          A unique animation name. This is also used to start/stop a animation.
     * img                  {string}          The path to the sprite image.
     * width                {integer}         Frame width
     * height               {integer}         Frame height
     * fps                  {integer}         Frames per second
     * [frames|sequence]    {integer|array}   You can choose either 'frames' or 'sequence'.
     *                                        'frames' defines the amount of frames so that the player knows when to stop or repeat the animation.
     *                                        'sequence' defines an array of integers with frame positions which will be played in the given order.
     * autoplay             {boolean}         Autoplay sprite animation on page load (Default: false)
     * loop                 {boolean|integer} Loop sprite animation (Default: false) | Set integer value to define where the loop will start
     *
     * Update config data:
     * To update the config data you have to pass the variables in curly brackets "{{foobar}}".
     * Example: {id: 'jackpot-{{game.slug}}', [...] sequence: {{sprite.sequence}}, autoplay: true, loop: true}
     *
     * Start an animation:
     * $rootScope.$broadcast('sprite.animation.start', 'unique-foobar-animation');
     *
     * Stop an animation:
     * $rootScope.$broadcast('sprite.animation.stop', 'unique-foobar-animation');
     */
    .directive('spriteAnimation', ['$rootScope', function($rootScope) {
        return {
            retrict: 'E',
            template: '<canvas>',
            replace: true,
            link: function($scope, $element, $attr) {
                var image = new Image(),
                    canvas = $element[0],
                    ctx = canvas.getContext("2d"),
                    config = $scope.$eval($attr.config),
                    frame = {
                        now: null,
                        delta: null,
                        then: Date.now(),
                        interval: null
                    },
                    currentFrame = 0,
                    sequencePosition = 0,
                    stop = false;

                image.src = config.img;
                canvas.width = config.width;
                canvas.height = config.height;
                config.id = config.id || _.random(1000000, 9999999);
                config.fps = config.fps || 60;
                config.frames = config.frames || 0;
                config.autoplay = config.autoplay || false;
                config.loop = config.loop || false;
                config.clear = config.clear || false;
                frame.interval = 1000 / config.fps;
                canvas.style.visibility = 'hidden';

                var sprite = {
                    render: function(y) {
                        ctx.clearRect(0, 0, config.width, config.height);
                        ctx.drawImage(
                            image,
                            0,
                            y || 0,
                            config.width,
                            config.height,
                            0,
                            0,
                            config.width,
                            config.height
                        );
                    },
                    animation: {
                        run: function() {
                            frame.now = Date.now();
                            frame.delta = frame.now - frame.then;

                            if (frame.delta > frame.interval) {
                                frame.then = frame.now - (frame.delta % frame.interval);

                                if (config.sequence) {
                                    currentFrame = config.sequence[sequencePosition++];

                                    if (sequencePosition > config.sequence.length - 1) {
                                        sequencePosition = 0;
                                        if (!config.loop) {
                                            stop = true;
                                        }
                                    }
                                } else {
                                    currentFrame++;
                                    if (currentFrame > config.frames) {
                                        if (config.loop) {
                                            currentFrame = typeof config.loop === 'boolean' ? 1 : config.loop;
                                        } else {
                                            currentFrame--;
                                            stop = true;
                                        }
                                    }
                                }

                                sprite.render(config.height * (currentFrame - 1));

                                if (stop) {
                                    sprite.animation.stop();
                                    return;
                                }
                            }
                        },
                        start: function() {
                            sprite.render();
                            global.animations['spriteAnimation' + config.id] = sprite.animation.run;
                            canvas.style.visibility = 'visible';
                        },
                        stop: function() {
                            delete global.animations['spriteAnimation' + config.id];
                            if (config.clear) {
                                currentFrame = 0;
                                canvas.style.visibility = 'hidden';
                            }
                        }
                    }
                };

                im           };

                $attr.$obser           });

                $rootScope.$on('sprite.animation.start', function (evt, _id) {
                    if (_id !== config.id) {
                        return;
                    }
                    im           };
                });

                $rootScope.$on('sprite.animation.stop', function (evt, _id) {
                    if (_id !== config.id) {
                        return;
                    }
                    sprite.animation.stop();
                });
            }
        };
    }])
    /**
     * Bind keyCode listeners and execute Angular stuff
     *
     * Description:
     * You can exeute Angular methods or work with models on
     * keyboard input in <input> and <textarea> fields.
     *
     * Tip: You can also write invalid JSON like "{foo:'bar'}"
     *
     * Usage:
     * <input type="text" ng-model="username" on-keycode-down="{27: 'username = \'\''}">
     */
    .directive('onKeycodeDown', ['$rootScope', '$interval', function($rootScope, $interval) {
        return {
            retrict: 'A',
            link: function($scope, $element, $attrs) {
                var actions = $attrs.onKeycodeDown ? $scope.$eval($attrs.onKeycodeDown) : {};

                $element.bind('keydown', function(event) {
                    var keyCode = event.which || event.keyCode;

                    if (typeof actions[keyCode] !== 'undefined') {
                        $scop           });
                    }
                });
            }
        };
    }])
    /**
     * Jackpot text counter
     *
     * Description:
     * Displays a textual Jackpot counter with faked increment value.
     *
     * Usage:
     * <div text-jackpot="{start: 515463, fps: 60, increment: 11}"></div>
     *
     * Parameters:
     * start     {integer} => Start chip amount (optionally - default: 0)
     * end       {integer} => End chip amount (optionally)
     * increment {integer} => Chip increment value (optionally - default: 1)
     * fps       {integer} => Chip increment interval (optionally - default: 60)
     *
     * Special cases:
     * - increment value will be 1% of the end value if increment value is 1 and end value is set
     * - when start is set to -1 and end is null/undefined, the counter will wait until end has a value
     */
    .directive('textJackpot', ['$filter',
        function($filter) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var data, start, end, formatter, increment, fps, frame, id = attrs.id || _.random(100000, 999999);

                    scope.$watch(attrs.textJackpot, function(newValue) {
                        data = newValue;
                        start = data.start || 0;
                        end = data.end || null;
                        increment = typeof data.increment !== 'undefined' ? data.increment : 1;
                        fps = data.fps || 40;
                        frame = {
                            now: null,
                            delta: null,
                            then: Date.now(),
                            interval: 1000 / fps
                        };

                        switch (data.type || 'number') {
                            case 'time':
                                          };
                                break;
                            default:
                                formatter = function (start, end) {
                                    return $filter('numberFormat')(start);
                                };
                                break;
                        }

                        if (end && increment === 1) {
                            increment = Math.ceil((end - start) * 0.01);
                        }

                        if ((end && start < 0) || start >= 0) {
                            element.html(formatter(start, end));

                            delete global.animations['textJackpot' + id];

                            var animation = function() {
                                frame.now = Date.now();
                                frame.delta = frame.now - frame.then;

                                if (frame.delta > frame.interval) {
                                    frame.then = frame.now - (frame.delta % frame.interval);

                                    start += increment;

                                    element.html(formatter(start, end));

                                    if (end && start >= end) {
                                        delete global.animations['textJackpot' + id];
                                        element.html(formatter(start, end));
                                    }
                                }
                            };

                            global.animations['textJackpot' + id] = animation;
                        } else {
                            element.html('0');
                        }
                    });
                }
            };
        }
    ])
    .directive('postCompile', function($compile, $rootScope) {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, element, attrs) {
                var newScope = $rootScope.$new(true);
                var watcher = scope.$watch(attrs.postCompile, function(html) {
                    element.html(html);
                    $compile(element.contents())(newScope);
                });
                element.on           });
            }
        };
    })
    .directive("shortNumber", [
        "$filter",
        "LocalizationService",
        function($filter, LocalizationService) {
            return {
                restrict: "A",
                scope   : {
                    shortNumber         : "=",
                    shortNumberTitleOnly: "=?",
                    shortNumberTitleUnit: "=?"
                },
                link    : function(scope, element) {
                    var val = Number(scope.shortNumber),
                        isEqual = function() {
                            return String($filter("numberFormat")(val)) === String($filter("readable")(val, 'bignum'));
                        },
                        i           },
                        $appendTo = $("body");

                    if (!val) {
                        element.text(0);
                        return;
                    }

                    scope.$on           });

                    if (!isTitleOnly()) {
                        scope.$watch("shortNumber", function(newVal) {
                            val = Number(newVal);
                            element.html(String($filter("readable")(val, 'bignum')));
                        });
                    } else {
                        val = Number(scope.shortNumberTitleOnly);
                        scope.$watch("shortNumbe           });
                    }

                    $(window).on("scroll.shortNumber", function() {
                        element.trigger("mouseleave.shortNumber");
                    });

                    element.on("mouseenter.shortNumber", function(event) {
                        $appendTo.find("#shortNumberFormatter").remove();

                        if (isEqual()) {
                            return;
                        }

                        var $content = $("<span>")
                        .append($("<span>").addClass("value").html(String($filter("numberFormat")(val))));

                        if (scope.shortNumberTitleUnit) {
                            var prefix,
                                unit;

                            try {
                                switch (scope.shortNumberTitleUnit.toLowerCase()) {
                                    case "coins":
                                    case "coin":
                                    case "chips":
                                    case "chip":
                                        prefix = "Chips";
                                        unit = "chips";
                                        break;
                                    case "leaguepoints":
                                    case "leaguepoint":
                                    case "league-points":
                                    case "league-point":
                                        prefix = "League Points";
                                        unit = "league-points";
                                        break;
                                    case "loyaltypoints":
                                    case "loyaltypoint":
                                    case "loyalty-points":
                                    case "loyalty-point":
                                        prefix = "Loyalty Points";
                                        unit = "loyalty-points";
                                        break;
                                }
                            } catch (e) {}

                            if (prefix) {
                                $content
                                .prepend($("<span>")
                                .addClass("prefix").html(LocalizationService.catalog.getString(prefix)));

                                if (unit) {
                                    $content.addClass("unit-"+unit);
                                }
                            }
                        }

                        var $el = $("<div>")
                        .attr("id", "shortNumberFormatter")
                        .append($content)
                        .css({
                            zIndex: parseInt(String(_.now()).substring(4)) + 2
                        });

                        $appendTo.append($el);

                        $el.css({
                            top : event.pageY - 45,
                            left: event.pageX - ($el.outerWidth() / 2)
                        });

                        element.addClass("short-number-help");

                        element.on("mousemove.shortNumber", function(event) {
                            $el.css({
                                top : event.pageY - 45,
                                left: event.pageX - ($el.outerWidth() / 2)
                            });
                        });
                    });

                    element.on("mouseleave.s           });
                }
            };
        }
    ])

    .directive("privacyBlock", [
        "$compile",
        "localStorageService",
        "LocalizationService",
        function($compile, LocalStorageService, LocalizationService) {
            return {
                restrict: "E",
                replace: false,
                link: function(scope, element) {
                    var lsSocialPrivacy = LocalStorageService.get('socialPrivacyAccepted') || null;
                    if (!lsSocialPrivacy) {
                        scope.child = element[0].children[0];
                        scope.child.style.pointerEvents = 'none';

                        scope.jb = new jBox("Tooltip", { // jshint ignore:line
                            attach: element[0],
                            theme: "privacy-block",
                            trigger: "click",
                            width: 300,
                            adjustTracker: true,
                            closeOnClick: "body",
                            animation: "move",
                            position: {
                                x: "center",
                                y: "bottom"
                            },
                            overlay: true,
                            content: '<input type="checkbox" ng-model="checked" value="true"> <label translate="{ target: \'_blank\' }">I have read and accept both the <a href="/terms-and-conditions" target="{{target}}">GTC</a> and <a href="/privacy-statement" target="{{target}}">Privacy Statement</a>.</label>' +
                                     '<div class="btn btn-green btn-sm btn-glow" ng-click="check()" translate>OK</div>',
                            onOpen: function() {
                                $compile(this.wrapper[0])(scope);
                            },
                            zIndex: 9999
                        });
                    }
                },
                controller: function($scope, $element) {
                    $scope.check = function() {
                        if ($scope.checked === true) {
                            LocalStorageService.set('socialPrivacyAccepted', true);
                            $scope.child.style.pointerEvents = 'all';
                            $scope.jb.close();
                            $scope.jb.destroy();
                        } else {
                            $scope.jb.close();
                        }
                    };
                }
            };
        }
    ]);
}(this));

/* jshint ignore:start */
var whow;
(function (whow) {
    angular
        .module("whow")
        .filter("groupBy", ["$parse", function ($parse) {
            return function (list, groupBy) {
                var filtered = [], prevItem = null, groupChanged = false, newFieldName = "group_by_CHANGED";
                angular.forEach(list, function (item) {
                    groupChanged = false;
                    if (prevItem !== null) {
                        var i = void 0, len = groupBy.length;
                        groupBy = angular.isArray(groupBy) ? groupBy : [groupBy];
                        for (i = 0; i < len; i++) {
                            if ($parse(groupBy[i])(prevItem) !== $parse(groupBy[i])(item)) {
                                groupChanged = true;
                            }
                        }
                    }
                    else {
                        groupChanged = true;
                    }
                    item[newFieldName] = groupChanged;
                    filtered.push(item);
                    prevItem = item;
                });
                return filtered;
            };
        }]);
})(whow || (whow = {}));

/* jshint ignore:end */

(function(global) {
    "use strict";

    angular
        .module('whow')
        /**
         * Format a number
         */
        .filter('numberFormat', function() {
            return function(number, decimals, decimalSeperator, thousandSeperator, partLength) {
                return parseFloat(number).numberFormat(decimals, decimalSeperator, thousandSeperator, partLength);
            };
        })
        .filter('numberFormatNoWrap', function() {
            return function(number, decimals, decimalSeperator, thousandSeperator, partLength) {
                if (typeof number !== "number") {
                    return number;
                }
                var val = parseFloat(number).numberFormat(decimals, decimalSeperator, thousandSeperator, partLength);

                val = String(val).replace(" ", "&nbsp;");

                return val;
            };
        })
        .filter('first', function() {
            return function(array) {
                if (!angular.isArray(array)) {
                    return undefined;
                }

                if (array.length === 0) {
                    return undefined;
                }

                return array[0];
            };
        })
        .filter('last', function() {
            return function(array) {
                if (!angular.isArray(array)) {
                    return undefined;
                }

                if (array.length === 0) {
                    return undefined;
                }

                return array[array.length - 1];
            };
        })
        /**
         * Make a number more readable to users
         */
        .filter('readable', ['$filter', 'LocalizationService', '$sce', function($filter, Localization, $sce) {
            return function(number, type, decimals) {
                var ret,
                    str = "{{amount}} ",
                    trimmedVal,
                    div = 1;

                number = parseInt(number);

                switch (type) {
                    case 'bignum':
                        if (number >= Math.pow(10, 15)) {
                            str += "P";
                            div = Math.pow(10, 15);
                        } else if (number >= Math.pow(10, 12) && number < Math.pow(10, 15)) {
                            str += "T";
                            div = Math.pow(10, 12);
                        } else if (number >= Math.pow(10, 9) && number < Math.pow(10, 12)) {
                            str += "G";
                            div = Math.pow(10, 9);
                        } else if (number >= Math.pow(10, 6) && number < Math.pow(10, 9)) {
                            str += "M";
                            div = Math.pow(10, 6);
                        } else {
                            ret = $filter("numberFormat")(number, 0);
                        }

                        if (!ret) {
                            trimmedVal = $filter("numberFormat")((number / div), (undefined === decimals ? 2 : decimals));
                            ret = Localization.catalog.getString(str).replace("{{amount}}", trimmedVal);
                        }
                        break;

                    case 'vbignum':
                        if (number >= Math.pow(10, 15)) {
                            str += "P";
                            div = Math.pow(10, 15);
                        } else if (number >= Math.pow(10, 12) && number < Math.pow(10, 15)) {
                            str += "T";
                            div = Math.pow(10, 12);
                        } else if (number >= Math.pow(10, 9) && number < Math.pow(10, 12)) {
                            str += "G";
                            div = Math.pow(10, 9);
                        } else if (number >= Math.pow(10, 6) && number < Math.pow(10, 9)) {
                            str += "M";
                            div = Math.pow(10, 6);
                        } else if (number >= Math.pow(10, 3) && number < Math.pow(10, 6)) {
                            str += "K";
                            div = Math.pow(10, 3);
                        } else {
                            ret = $filter("numberFormat")(number);
                        }

                        if (!ret && div > 0) {
                            var showNumber = number / div;
                            var checkNumber = showNumber * 10;
                            var precision = 0;
                            if (checkNumber !== Math.round(showNumber) * 10) {
                                if (checkNumber * 10 !== Math.round(checkNumber) * 10) {
                                    precision = 2;
                                } else {
                                    precision = 1;
                                }
                            } else {
                                precision = 0;
                            }

                            trimmedVal = $filter("numberFormat")(showNumber, precision);
                            trimmedVal = "<i>" + trimmedVal + "</i><br>";
                            ret = Localization.catalog.getString(str).replace("{{amount}}", trimmedVal);
                        } else {
                            ret = "<i>" + ret.replace(" ", "") + "</i>";
                        }
                        break;

                    case 'time-ago':
                        var tokens = {
                            31536000: 'year',
                            2592000: 'month',
                            604800: 'week',
                            86400: 'day',
                            3600: 'hour',
                            60: 'minute',
                            1: 'second'
                        }, numberOfUnits;

                        if (number > 946681200) { //Check if we are working with seconds or timestamp (946681200 is the timestamp of 01.01.2000), so this wouldn't work with seconds ofe 30 years
                            number = Math.floor((_.now() / 1000) - number);
                        }

                        for (var unit in tokens) {
                            var text = tokens[unit];

                            if (number === 0) {
                                return 'now';
                            }

                            if (number < unit) {
                                continue;
                            }

                            numberOfUnits = Math.floor(number / unit);
                            text += numberOfUnits > 1 ? 's' : '';

                            ret = numberOfUnits + ' ' + text + ' ago';

                            return ret;
                        }

                        break;

                    case 'time-left':
                        var tl = {
                            days: Math.floor(number / 86400),
                            init: function() {
                                this._days = this.days * 86400;
                                this.hours = Math.floor((number - (this._days)) / 3600);
                                this._hours = this.hours * 3600;
                                this.minutes = Math.floor((number - this._days - this._hours) / 60);
                                this.seconds = Math.floor((number - this._days - this._hours - (this.minutes * 60)));
                                return this;
                            }
                        }.init();

                        ret = '';
                        ret += tl.days ? Localization.catalog.getString('{{days}}d', {days: tl.days}) + ' ' : '';
                        ret += String(tl.hours).lpad('0', 2) + ":" + String(tl.minutes).lpad('0', 2) + ":" + String(tl.seconds).lpad('0', 2);
                        break;

                    case 'time-left-short':
                        var tls = {
                            days: Math.floor(number / 86400),
                            init: function() {
                                this._days = this.days * 86400;
                                this.hours = Math.floor((number - (this._days)) / 3600);
                                this._hours = this.hours * 3600;
                                this.minutes = Math.floor((number - this._days - this._hours) / 60);
                                this.seconds = Math.floor((number - this._days - this._hours - (this.minutes * 60)));
                                return this;
                            }
                        }.init();

                        ret = tls.days ? tls.days + 'd ' : String(tls.hours).lpad('0', 2) + ":" + String(tls.minutes).lpad('0', 2) + ":" + String(tls.seconds).lpad('0', 2);
                        break;

                    case '2date':
                        var date = new Date(number * 1000);

                        ret = String(date.getDate()).lpad('0', 2) + '.' + String(date.getMonth() + 1).lpad('0', 2) + '.' + date.getFullYear();
                        break;
                }
                return $sce.trustAsHtml(ret);
            };
        }])
        /**
         * Capitalize string
         */
        .filter('capitalize', function() {
                 };
        })
        /**
         * Lower string
         */
        .filter('lowercase', function() {
            return function(string) {
                return String(string).toLowerCase();
            };
        })
        /**
         * cv string
         */
        .filter('toCV', function() {
            return function(string) {
                return String(string).toCV();
            };
        })
        /**
         * Parse string to camel case
         */
        .filter('toCamelCase', function() {
            return function(string) {
                return String(string).toCamelCase();
            };
        })
        /**
         * Parse string to spinal case
         */
        .filter('toSpinalCase', function() {
                 };
        })
        /**
         * Left fill a string with a character until it fits a given length
         */
        .filter('lpad', function() {
            return function(string, pad, length) {
                return String(string).lpad(pad, length);
            };
        })
        /**
         * Right fill a string with a character until it fits a given length
         */
        .filter('rpad', function() {
                 };
        })
        /**
         * Checks if a value exists in an array
         */
        .filter('contains', function() {
                 };
        })
        /**
         * Substring filter
         */
        .filter('substring', function() {
            return function(string, start, end) {
                if (start < 0) {
                    return String(string).substring(String(string).length + start);
                }
                if (typeof end === 'number') {
                    end = end < 0 ? String(string).length + end : end;
                    return String(string).substring(start, end);
                }
                return String(string).substring(start);
            };
        })
        /**
         * Parse string to integer
         */
        .filter('parseInt', function() {
                 };
        })
        /**
         * Shorten text to a specific length of characters and append an suffix
         */
        .filter('shorten', function($filter) {
            return function(string, length, suffix) {
                if (!length) {
                    return string;
                }
                suffix = suffix && String(string).length > length ? suffix : '';
                return $filter('limitTo')(String(string), length) + suffix;
            };
        })
        /**
         * Sprintf
         */
        .filter('sprintf', function() {
            function parse(str, args) {
                var i = 0;
                args = [].slice.call(args, 1);

                return str.re           });
            }

            return function(str) {
                return parse(str, arguments);
            };
        })
        /**
        * Replace string with another
        */
        .filter('replace', function() {
                 };
        })
        /**
         * Replace placeholder {{strReplace}} with a value (strWith)
         */
        .filter('varReplace', function() {
                 };
        })
        /**
         * Iterate to a given range (ng-repeat="n in [] | range:5")
         */
        .filter('range', function() {
            return function(input, total) {
                total = parseInt(total);
                for (var i = 0; i < total; i++) {
                    input.push(i);
                }
                return input;
            };
        })
        /**
         * Reverse array
         */
        .filter('reverse', function() {
            return function(items) {
                if (!angular.isArray(items)) {
                    return false;
                }
                return items.slice().reverse();
            };
        })
        /**
         * Unsafe HTML
         */
        .filt};
        })
        /**
         * Convert <br> to \n
         */
        .filter('br2nl', function() {
            return function(html) {
                return html.length ? html.replace(/<br>/g, "\n") : false;
            };
        })
        /**
         * Returns the amount of days of a time in seconds
         */
        .filter('days', function($sce, $filter) {
            return function(number) {
                return number / 86400 | 0;
            };
        })
        /**
         * Return a human readable time period for second amount
         */
        .filter('timePeriod', ['$filter', 'LocalizationService', function($filter, Localization) {
            return function(seconds, secondTotal) {
                secondTotal = (secondTotal >= seconds ? secondTotal : seconds);
                var times = [], i18n = [], values = [];

                if (secondTotal >= (86400 * 2)) {
                    // > 2 days
                    times.push(parseInt(seconds / 86400));
                    times.push(parseInt((seconds % 86400) / (60 * 60)));
                    i18n = ['{{count}} day', '{{count}} hour'];

                } else if (secondTotal >= (3600 * 2)) {
                    // > 2 hours
                    times.push(parseInt(seconds / 3600));
                    times.push(parseInt((seconds % 3600) / 60));
                    i18n = ['{{count}} hour', '{{count}} minute'];

                } else {
                    times.push(parseInt(seconds / 60));
                    i18n = ['{{count}} minute'];
                }

                for(var i = 0; i < times.length; i++) {
                    if (times[i] === 0 && (i + 1) < times.length) {
                        // skip 0 values, if more then one unit
                        continue;
                    }

                    values.push(
                        Localization.catalog.getPlural(
                            times[i],
                            i18n[i],
                            i18n[i] + 's',
                            {count: times[i]}
                        )
                    );
                }

                return values.join(' ');
            };
        }]);
}(this));

(function() {
    "use strict";

    angular
    .module('whow')
    /**
     * Global config
     */
    .facto    };
    })
    /**
     * Helpers
     */
    .factory('Helper', ['$rootScope', '$timeout', function($rootScope, $timeout) {
        var _helper = {
                 },

                },

            protocol: 'https:' === document.location.protocol ? 'https' : 'http',
            /**
             * Returns the current unix timestamp in seconds
             * FYI: For milliseconds just use _.now()
             */
                     },
            /**
             * Log into Whow Event Log
             * @param {mixed} multiple arguments allowed
             */
            whowTrack: {
                log: function() {
                    if (
                        window.WhowEventLog &&
                        typeof window.WhowEventLog.track === 'function' &&
                        casino.env === 'production'
                    ) {
                        window.WhowEventLog.track(arguments);
                    }
                },
                set: function (key, value) {
                    if (window.WhowEventLog && typeof window.WhowEventLog.track === 'function') {
                        window.WhowEventLog.context[key] = value;
                    }
                }
            },
            /**
             * Track events
             * @param {String} event  Event name/title
             * @param {Object} attr   Additional data
             */
            track: function(event, attr) {
                if (
                    typeof analytics !== "undefined" &&
                    casino.env === 'production'
                ) {
                    return analytics.track(event, attr);
                }
            },
            /**
             * Track JS exceptions and errors
             * @param {Object} data   Data
             */
            jsException: function(data) {
                return this.track('js-error', data);
            },
            /**
             * Show / hide a loading indicator during ajax requests
             */
            ajax: {
                loader: {
                    persistent: function(persistent) {
                        $rootScope.$broadcast('loading:persistent', persistent);
                    },

                    show: function() {
                        $rootScope.$broadcast('loading:start');
                    },

                    remove: function() {
                        $rootScope.$broadcast('loading:end');
                    },

                    enable: function() {
                        $rootScope.$broadcast('loading:enabled');
                    },

                           }
                }
            },
            /**
             * Show message via jBox plugin
             *
             * @param {String} type  [error|success]
             * @param {Array}  data  An array with the messages
             *
             * Usage:
             * Helper.message('error', [{message: "Request failed!"}]);
             * Helper.message('error', [{title: "Error",message: "Request failed!"},{...}]);
             */
            message: function(type, data, settings) {
                if (data && data.length) {
                    var colorMap = {
                            default: 'black',
                            info: 'blue',
                            success: 'green',
                            warning: 'yellow',
                            error: 'red'
                        },
                        delayClose = {
                            default: 7000,
                            info: 7000,
                            success: 7000,
                            warning: 10000,
                            error: 10000
                        },
                        timeout = 0,
                        zi = parseInt(String(_.now()).substring(4));

                    $.each(data, function(i, item) {
                        window.setTimeout(function() {
                            new jBox('Notice', angular.extend({ // jshint ignore:line
                                animation: 'move',
                                position: {
                                    x: 'center',
                                    y: 'center'
                                },
                                title: item.title,
                                content: item.message,
                                color: colorMap[type],
                                autoClose: 0,
                                zIndex: zi
                            }, settings));
                        }, timeout);
                        timeout += 800;
                    });
                }
            },
            /**
             * Show success or error messages from response
             *
             * @param {Object} response
             */
            showSuccessError: function(response) {
                var type = response.successes && response.successes.length ? ['success', 'successes'] : ['error', 'errors'];
                if (response[type[1]]) {
                    var messages = response[type[1]];
                    for (var m in messages) {
                        this.message(type[0], [{
                            message: messages[m].message
                        }]);
                    }
                }
            },
            /**
             * User related stuff
             */
            user: {
                /**
                 * Update chips value in header
                 * @param {Integer} chips
                 * @param {Object}  options
                 */
                updateChips: function(chips, options) {
                    if (typeof chips !== "number" || !$rootScope.user) {
                        return;
                    }

                    if (!$rootScope.user.wallet) {
                        return;
                    }

                    options = _.extend({
                        animation: true
                    }, options);

                    if (options.animation) {
                        $rootScope.user.wallet.updateChips = Number(chips);
                    } else {
                        $rootScope.user.wallet.chips = Number(chips);
                    }
                },

                updateLevel: function(level) {
                    if (!level) {
                        return;
                    }
                    $rootScope.user.level = Number(level);
                },

                /**
                 * update user level progress bar
                 * @param {float} progress
                 */
                updateProgressBar: function(progress) {
                    if (typeof progress !== "number") {
                        return;
                    }

                    $rootScope.user.levelProgress.progress = Number(progress);

                    $('#levelProgressBar')
                    .css('width', progress * 100 + '%')
                    .addClass('pulse')
                    .delay(1000)
                         });
                },
            },
            /**
             * Get user OS
             */
            getUserOS: function() {
                return helper.getUserOS();
            },
            /**
             * Get user browser
             */
            getUserBrowser: function() {
                return helper.getUserBrowser();
            },
            /**
             * Check if email address is vaild
             */
            validEmail: function(email) {
                return helper.validEmail(email);
            },
            /**
             * Check if windows and in game
             */
            windowsTransparencyFix: function() {
                return helper.getUserOS() === 'windows' && params.controller === 'Games' && params.action === 'view';
            },
            /**
             * Deep object compare
             *
             * Adds a `type` to the object with value 'created', 'updated' or 'deleted'
             */
            deepObjectDiff: {
                CREATED: 'created',
                UPDATED: 'updated',
                DELETED: 'deleted',
                //UNCHANGED: 'unchanged',
                map: function(obj1, obj2, options) {
                    options = options || {};

                    if (this.isFunction(obj1) || this.isFunction(obj2)) {
                        throw 'Invalid argument. Function given, object expected.';
                    }

                    if (this.isValue(obj1) || this.isValue(obj2)) {
                        if (options.data) {
                            return {
                                type: this.compareValues(obj1, obj2) || null,
                                data: obj1 || obj2
                            };
                        } else {
                            return this.compareValues(obj1, obj2) || null;
                        }
                    }

                    var diff = {};
                    for (var key1 in obj1) {
                        if (this.isFunction(obj1[key1])) {
                            continue;
                        }

                        var value2;
                        if ('undefined' !== typeof(obj2[key1])) {
                            value2 = obj2[key1];
                        }

                        diff[key1] = this.map(obj1[key1], value2, options);
                    }

                    for (var key2 in obj2) {
                        if (this.isFunction(obj2[key2]) || ('undefined' !== typeof(diff[key2]))) {
                            continue;
                        }

                        diff[key2] = this.map(undefined, obj2[key2], options);
                    }

                    return diff;
                },
                compareValues: function(value1, value2) {
                    // if (value1 === value2) {
                    //     return this.UNCHANGED;
                    // }
                    if ('undefined' === typeof(value1)) {
                        return this.CREATED;
                    }
                    if ('undefined' === typeof(value2)) {
                        return this.DELETED;
                    }
                    if (value1 !== value2) {
                        return this.UPDATED;
                    }
                },
                isFunction: function(obj) {
                    return {}.toString.apply(obj) === '[object Function]';
                },
                isArray: function(obj) {
                    return {}.toString.apply(obj) === '[object Array]';
                },
                        },
                       }
            },
            queryStringToObject: function(objString) {
                return JSON.parse('{"' + decodeURI(objString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
            }
        };
        return _helper;
    }])
    /**
     * Layer service
     *
     * Methods:
     * .on([string] event, [function] callback) Adds an on [show|hide] event like .show()|.hide()
     * .off([string] event)                     Removes the [show|hide] event
     * .options([object])                       Add layer specific options
     * .add([object])                           Add data in form of an object to the layer
     * .removeData()                            Remove the whole data from the layer
     * .data([string] dataKey)                  Get data by object key
     * .show([function] callback)               Add a show callback - same like .on('show', function() {})
     * .hide([function] callback)               Add a hide callback - same like .on('hide', function() {})
     * .isVisible()                             Check if the layer is visible or not (returns boolean)
     *
     * Options:
     * backdrop.closeOnClick    [boolean]       Define if the layer can be closed via a backdrop click
     */
    .factory('LayerFactory', ['$rootScope', '$http', '$compile', '$sce', '$q', 'Helper', 'localStorageService', '$timeout', '$window', function($rootScope, $http, $compile, $sce, $q, Helper, LocalStorage, $timeout, $window) {
        if (typeof $rootScope.layerData === 'undefined') {
            $rootScope.layerData = {};
        }

        this.payload = {};
        this.queue = [];
        this.layerOpen = null;
        var _this = this,
            Layer = function(params) {
                if (params.slug) {
                    var storage = LocalStorage.get('layer') || { disabled: [] },
                        payload = _this.payload,
                        queue = _this.queue,
                             },
                        setItemIdForCurrentSlug = function() {
                            if (itemId === null) {
                                angular.forEach(payload[cslug], function(value, key) {
                                    if (value !== null && itemId === null) {
                                        itemId = key;
                                    }
                                });
                            }
                        },
                        isDuplicate = function() {
                            angular.forEach(payload[cslug], function(value, key) {
                                try {
                                    if (itemId !== key &&
                                        value !== null &&
                                        payload.hasOwnProperty(cslug) && payload[cslug].hasOwnProperty(itemId) &&
                                        (JSON.stringify(value.data) === JSON.stringify(payload[cslug][itemId].data)) &&
                                        (JSON.stringify(value.events) === JSON.stringify(payload[cslug][itemId].events)) &&
                                        (JSON.stringify(value.options) === JSON.stringify(payload[cslug][itemId].options))) {
                                        return true;
                                    }
                                } catch(e) {
                                    return false;
                                }
                            });
                            return false;
                        },
                        itemId = params.id || null,
                        url = params.url || null,
                        slug = params.slug,
                        directive = params.directive,
                        cslug = slug.toCamelCase(),
                        triggerEvents = function(e) {
                            if (payload[cslug] && payload[cslug][itemId] && typeof payload[cslug][itemId].events[e] !== 'undefined') {
                                var events = payload[cslug][itemId].events[e];

                                if (events.length) {
                                    angular.for           });
                                }
                            }
                        },
                        layerToggleShortcut = function(e) {
                            if (e.ctrlKey && e.altKey && e.keyCode === 76) {
                                var index = storage.disabled.indexOf(slug);
                                if (index === -1) {
                                    storage.disabled.push(slug);
                                    Helper.message('info', [{
                                        message: "Layer '" + slug + "' is disabled."
                                    }], {
                                        autoClose: 2000
                                    });
                                } else {
                                    storage.disabled.splice(index, 1);
                                    Helper.message('info', [{
                                        message: "Layer '" + slug + "' is enabled."
                                    }], {
                                        autoClose: 2000
                                    });
                                }
                                LocalStorage.set('layer', storage);
                            }
                        },
                        functions = {
                            create: function() {
                                itemId = guid();
                                if (typeof payload[cslug] === 'undefined') {
                                    payload[cslug] = {};
                                }

                                payload[cslug][itemId] = {
                                    data: {},
                                    events: {},
                                    options: {
                                        cache: {
                                            css: true,
                                            js: true,
                                            html: true
                                        },
                                        backdrop: {
                                            show: true,
                                            closeOnClick: false
                                        }
                                    }
                                };

                                return functions;
                            },
                            on: function(event, callback) {
                                if(!payload[cslug] || !payload[cslug][itemId]){
                                    return;
                                }
                                if (payload[cslug] && payload[cslug][itemId] && typeof payload[cslug][itemId].events[event] === 'undefined') {
                                    payload[cslug][itemId].events[event] = [];
                                }

                                var i = payload[cslug][itemId].events[event].length ? payload[cslug][itemId].events[event].length : 0;
                                payload[cslug][itemId].events[event][i] = callback;
                                return functions;
                            },
                            off: function(event) {
                                if (payload[cslug] && payload[cslug][itemId] && typeof payload[cslug][itemId].events[event] !== 'undefined') {
                                    delete payload[ cslug ][ itemId ].events[ event ];
                                }
                                return functions;
                            },
                            options: function(_options) {
                                payload[cslug][itemId].options = $.extend(payload[cslug][itemId].options, _options);
                                return functions;
                            },
                            add: function(_data) {
                                payload[cslug][itemId].data = $.extend(payload[cslug][itemId].data, _data);
                                $rootScope.$safeApply(); //sometimes the data isn't applied - so lets do it!
                                return functions;
                            },
                            removeData: function() {
                                payload[cslug][itemId].data = null;
                                return functions;
                            },
                            data: function(key) {
                                if (payload[cslug][itemId] !== null && typeof payload[cslug][itemId] !== 'undefined') {
                                    if (key && payload[cslug][itemId].data && typeof payload[cslug][itemId].data[key] !== 'undefined') {
                                        return payload[cslug][itemId].data[key];
                                    } else {
                                        return payload[cslug][itemId].data;
                                    }
                                } else {
                                    return {};
                                }
                            },
                            show: function(startCallback, endCallback) {
                                if (typeof $rootScope.layerData === 'undefined') {
                                    $rootScope.layerData = {};
                                }

                                if (itemId !== null &&
                                    payload[cslug][itemId] !== null &&
                                    typeof payload[cslug][itemId].events !== 'undefined' &&
                                    typeof payload[cslug][itemId].events.beforeShow !== 'undefined') {
                                    var events = payload[cslug][itemId].events.beforeShow;

                                    if (events.length) {
                                        angular.forEach(events, function(event) {
                                            if (typeof event === 'function') {
                                                var eventReturn = event();

                                                if (typeof eventReturn === 'object') {
                                                    if (typeof eventReturn.then === 'function') {
                                                        even           });
                                                    }
                                                }
                                            }
                                        });
                                    }
                                } else {
                                    functions._show(startCallback, endCallback);
                                }
                            },
                            getId: function(){
                                return itemId;
                            },
                            _show: function(startCallback, endCallback) {
                                if (itemId === null ||
                                    storage.disabled && storage.disabled.indexOf(slug) !== -1 ||
                                    isDuplicate()) {
                                    return;
                                }

                                /** put layer into queue, if another layer is already opened **/
                                if (_this.layerOpen) {
                                    queue.push({
                                        slug: slug,
                                        url: url,
                                        id: itemId,
                                        startCallback: startCallback,
                                        endCallback: endCallback,
                                        directive: directive
                                    });
                                    return;
                                }
                                _this.layerOpen = slug;

                                var $this = this,
                                    hiddenOnMobileClass = ($window.user && $window.user._id ? ' hidden-sm hidden-xs ' : ' '),
                                    zi = parseInt(String(_.now()).substring(4)),
                                    css = $('<link class="whow-layer-' + slug + '-style" rel="stylesheet" type="text/css">'),
                                    js = $('<script class="whow-layer-' + slug + '-script">'),
                                    layer = $('<div>').addClass('whow-layer ' + hiddenOnMobileClass + slug).css({
                                        zIndex: zi + 1
                                    }),
                                    backdrop = $('<div>').addClass('whow-layer-backdrop ' + hiddenOnMobileClass).css({
                                        zIndex: zi
                                    });

                                if (casino.env !== 'production') {
                                    $(window).on('keyup', layerToggleShortcut);
                                }

                                if (typeof startCallback === 'function') {
                                    startCallback();
                                }

                                triggerEvents('show');

                                if (payload[cslug] && payload[cslug][itemId]) {
                                    payload[cslug][itemId].visible = true;

                                    if (payload[cslug][itemId].options.backdrop.closeOnClick) {
                                        backdrop.on('click', function() {
                                            $this.hide();
                                        });
                                    }
                                }

                                var ajaxHtml, ajaxCss, ajaxJs,
                                    loading = [];
                                if (directive) {
                                    layer = $('<'+directive+'>').addClass('whow-layer ' + hiddenOnMobileClass + slug).css({
                                        zIndex: zi + 1
                                    });

                                    layer.attr({
                                        payload: angular.toJson(payload[cslug][itemId].data),
                                        itemid: itemId,
                                        slug: slug
                                    });

                                    $('body').append(layer);
                                    if (payload[cslug][itemId].options.backdrop.show) {
                                        $('body').append(backdrop);
                                    }

                                    $timeout(function() {
                                        $(layer).addClass('transition-in');
                                        $(backdrop).addClass('transition-in');
                                    }, 100).then(function() {
                                        $compile(layer)($rootScope);

                                        if (typeof endCallback === 'function') {
                                            endCallback();
                                        }
                                    });
                                } else if (payload[cslug][itemId] !== null) {
                                    if (url) {
                                        ajaxHtml = $http.get(url, {
                                            cache: payload[cslug][itemId].options.cache.html
                                        }).error(function(data, status, headers, config) {
                                            if (status === 404) {
                                                Helper.message('error', [{
                                                    message: 'Layer "' + slug + '" not found!'
                                                }]);
                                                console.error('Dude! The Layer "' + slug + '" was not found and the request returned a 404. You should check you templates or if this is a offer, check the style value in outputData.');
                                            }
                                        });

                                        loading.push(ajaxHtml);
                                    } else {
                                        ajaxCss = $http.get(('/css/' + theme + '/layer/' + slug + '.css').toCV(), {
                                            cache: payload[cslug][itemId].options.cache.css
                                        });
                                        ajaxJs = $http.get(('/js/_ng/controllers/layer/' + slug + '.js').toCV(), {
                                            cache: payload[cslug][itemId].options.cache.js
                                        });
                                        ajaxHtml = $http.get('/layer/' + slug, {
                                            cache: payload[cslug][itemId].options.cache.html
                                        }).error(function(data, status, headers, config) {
                                            if (status === 404) {
                                                Helper.message('error', [{
                                                    message: 'Layer "' + slug + '" not found!'
                                                }]);
                                                console.error('Dude! The Layer "' + slug + '" was not found and the request returned a 404. You should check you templates or if this is a offer, check the style value in outputData.');
                                            }
                                        });

                                        loading.push(ajaxCss);
                                        loading.push(ajaxJs);
                                        loading.push(ajaxHtml);
                                    }

                                    $q.all(loading).then(function (response) {
                                        var layerResponse;
                                        if (response.length > 1) { //if we have JS, CSS and HTML
                                            if (response[2].data) {
                                                layerResponse = response[2].data; //HTML
                                            }
                                        } else { //only HTML
                                            if (response[0].data) {
                                                layerResponse = response[0].data; //HTML
                                            }
                                        }

                                        if (layerResponse) { //should allways have HTML data
                                            if (typeof $rootScope.layerData === 'undefined') {
                                                $rootScope.layerData = {};
                                            }
                                            $rootScope.layerData[cslug] = layerResponse;
                                            layer.attr({
                                                'post-compile': 'layerData.' + cslug,
                                                'slug': slug
                                            });

                                            if (response.length > 1) {
                                                css.attr('href', ('/css/' + theme + '/layer/' + slug + '.css').toCV()); //CSS is preloaded, but we append the file to add CV tag
                                                js.html(response[1].data); //JS

                                                $('body').append(css, js);

                                                $timeout(function() {
                                                    $('body').append(layer);
                                                    if (payload[cslug][itemId].options.backdrop.show) {
                                                        $('body').append(backdrop);
                                                    }
                                                }, 50); //add a little daley, attach CSS a little bit earlier to the DOM then the HTML
                                            } else {
                                                $('body').append(layer);
                                                if (payload[cslug][itemId].options.backdrop.show) {
                                                    $('body').append(backdrop);
                                                }
                                            }

                                                   }, 100).then(function() {
                                                $compile(layer)($rootScope);

                                                if (typeof endCallback === 'function') {
                                                    endCallback();
                                                }
                                            });
                                        } else {
                                            window.location.href = '/'; //user seems to be logged out, so redirect him to home
                                            return;
                                        }

                                        loading = [];
                                    });
                                }
                            },
                            _showNext: function() {
                                if (queue.length) {
                                    var layer = queue.shift();
                                    slug = layer.slug;
                                    url = layer.url;
                                    directive = layer.directive;
                                    itemId = layer.id;
                                    cslug = slug.toCamelCase();
                                    functions.show(layer.startCallback, layer.endCallback);
                                } else {
                                    return;
                                }
                            },
                            getOptions: function() {
                                if (itemId === null) {
                                    return {};
                                }

                                if (payload[cslug][itemId] !== null &&
                                    typeof payload[cslug][itemId].options !== 'undefined') {
                                    return payload[cslug][itemId].options;
                                }

                                return {};
                            },
                            hide: function(callback) {
                                if (itemId === null) {
                                    return;
                                }

                                if (payload[cslug][itemId] !== null &&
                                    typeof payload[cslug][itemId].options !== 'undefined' &&
                                    typeof payload[cslug][itemId].options.onClose === 'function') {
                                    payload[cslug][itemId].options.onClose();
                                }

                                if (casino.env !== 'production') {
                                    $(window).off('keyup', layerToggleShortcut);
                                }

                                if (typeof callback === 'function') {
                                    callback();
                                }

                                triggerEvents('hide');

                                /* temp vars */
                                var _slug = slug,
                                    _cslug = cslug,
                                    _itemId = itemId,
                                    $layerContainer = $('.whow-layer.' + _slug),
                                    self = this;

                                /* out transition */
                                $layerContainer.addClass('transition-out');
                                $layerContainer.next('.whow-layer-backdrop').addClass('transition-out');

                                var transitionTime = 0;
                                if (payload[_cslug] && payload[_cslug][_itemId] && payload[_cslug][_itemId].options &&
                                    payload[_cslug][_itemId].options.transition) {
                                    transitionTime = payload[_cslug][_itemId].options.transition;
                                }
                                $timeout(function() {
                                    if (payload[_cslug] && payload[_cslug][itemId]) {
                                        payload[_cslug][itemId].visible = false;
                                    }

                                    if (typeof $rootScope.layerData !== 'undefined') {
                                        $rootScope.layerData[_cslug] = null;
                                    }

                                    if($layerContainer.next('.whow-layer-backdrop').hasClass('whow-layer-backdrop')) {
                                        $layerContainer.next('.whow-layer-backdrop').remove();
                                    } else {
                                        $layerContainer.prev('.whow-layer-backdrop').remove();
                                    }

                                    $layerContainer.remove();
                                    $('.whow-layer-' + _slug + '-style').remove();
                                    $('.whow-layer-' + _slug + '-script').remove();

                                    $rootScope.layerData[_cslug] = null;
                                }, transitionTime).then(function() {
                                    /* remove on/off events */
                                    self.off('show');
                                    self.off('hide');

                                    if (itemId !== null) {
                                        payload[_cslug][itemId] = null;
                                    }
                                    _this.layerOpen = null;

                                    functions._showNext();
                                });
                            },
                                     }
                        };
                    setItemIdForCurrentSlug();
                    return functions;
                }
            };

        return Layer;
    }])
    /**
     * Intercept Ajax http calls and add some logic to all of them
     */
    .factory('httpInterceptor', ['$q', 'Helper', function($q, Helper) {
        return {
            request: function(config) {
                Helper.ajax.loader.show();
                return config;
            },
            response: function(response) {
                Helper.ajax.loader.remove();
                return response;
            },
            requestError: function(rejection) {
                return $q.reject(rejection);
            },
            responseError: function(rejection) {
                return $q.reject(rejection);
            }
        };
    }]);
}());

/* jshint ignore:start */
(function(){
    "use strict";

    angular.module('whow')
    .service('LocalizationService', ['$q', 'gettextCatalog', function($q, gettextCatalog){
        return {
            loadCatalog: function(file, cb) {
                var filePath = l18nPath + file + '.json';
                return $q(function(resolve) {
                    gettextCatalog.loadRemote(locale, filePath.toCV()).then(function(data) {
                        resolve(data);

                        if (typeof cb !== 'undefined') {
                            cb();
                        }
                    });
                });
            },
            catalog: gettextCatalog
        };
    }]);
})();

(function() {
    "use strict";

    angular
        .module('whow')
        .service('LoginService', ['$http', 'Config', '$q', function($http, Config, $q) {
            /**
             * Return the correct controller, depending on the argumet type
             *
             * @param args
             * @returns {string}
             */           }

            /**
             * POST login data
             *
             * @param post
             * @returns {angular.IPromise<T>}
             */
            this.submit = function(post) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: Config.API_URI + '/users/login',
                    data: post
                      });
                return deferred.promise;
            };

            /**
             * POST Facebook login data
             *
             * @param args
             * @param ageCheck
             * @param authResponse
             * @returns {angular.IPromise<T>}
             */
            this.facebook = function(args, ageCheck, authResponse) {
                return $http({
                    method: 'POST',
                    url: Config.API_URI + '/' + getController(args) +'/facebook',
                    data: {
                        response: authResponse,
                        signup: {
                            screen: location.hostname + location.pathname //whow tracking (cfigge)
                        },
                        mobileCode: args.mobileCode || null, //code from mobile to merge mobile account to web (optionally)
                        age: ageCheck
                    }
                });
            };
        }]);
}());

(function () {
    "use strict";

    angular
        .module('whow')
        .service('FacebookService', ['$q', '$http', 'Helper', 'Config', 'localStorageService', 'LoginService', function ($q, $http, Helper, Config, LocalStorage, Login) {
            /**
             * Handle blocked users
             *
             * @param response
             */
            function handleLoginError(response) {
                if (response.error.message === 'blocked') {
                    window.setTimeout(function () {
                        window.location = response.error.redirect.replace(/\\/g, "");
                    }, 500);
                } else {
                    Helper.message('error', [{
                        message: response.error.message
                    }]);

                    var domAgeCheck = angular.element(document).find(".whow-layer.login .form-wrapper .login-agecheck.hidden");
                    if (domAgeCheck.length === 1) {
                        domAgeCheck.removeClass("hidden");
                    }
                }
            }
            /**
             * Handle login success
             */
            function handleLoginSuccess() {
                var redirectTo = LocalStorage.get('redirectTo') || '/';
                var queryString = window.location.search;

                redirectTo += queryString;

                /* globals query */
                if (typeof query.isFacebookCanvas !== 'undefined') {
                    Helper.whowTrack.log('js_fbcanvas', 'canvas', true);
                    window.location = '/lpa/facebook-canvas?isFacebookCanvas';
                } else {
                    Helper.whowTrack.log('js_fbcanvas', 'canvas', false);

                    if (window.location.href === redirectTo) {
                        window.location.reload();
                    } else {
                        if (queryString) {
                            window.location = redirectTo + '&s=fb';
                        } else {
                            window.location = redirectTo + '?s=fb'; //s=fb tells the next page that user registered via facebook
                        }
                    }
                }
            }
            /**
             * Display a success message
             *
             * @param response
             */
            function displaySuccess(response) {
                Helper.message('success', [{
                    message: response.success.message
                }]);
            }

            /**
             * Check if a user is blocked
             *
             * @param response
             * @returns {boolean}
             */
            function isErrorResponse(response) {
                return typeof response.error !== 'undefined' && typeof response.error.message !== 'undefined';
            }

            /**
             * Check whether the response is "successful"
             *
             * @param response
             * @returns {boolean}
             */
            function isSuccessResponse(response) {
                return typeof response.success !== 'undefined' && typeof response.success.message !== 'undefined';
            }

            /**
             * Perform a facebook login
             *
             * @param args
             * @param ageCheck
             * @param SocialService
             */
            this.login = function (args, ageCheck, SocialService) {
                var deferred = $q.defer();

                if (typeof args.type === 'undefined') {
                    args.type = 'facebook-login';
                }

                try {
                    /* globals FB */
                    FB.login(function (loginResponse) {
                        if (loginResponse.authResponse) {
                            Login.facebook(args, ageCheck, loginResponse.authResponse).then(function (response) {
                                response = response.data;
                                if (isErrorResponse(response)) {
                                    handleLoginError(response);
                                    deferred.reject(response);
                                } else if (isSuccessResponse(response)) {
                                    displaySuccess(response);
                                    deferred.resolve(response);
                                } else {
                                    // actual success case
                                    Helper.whowTrack.set('uid', response.user._id); //set userId to WhowEventLog for tracking (Helper.whowTrack('js_fbcanvas', 'canvas', true))

                                    handleLoginSuccess();

                                    deferred.resolve(response);
                                }
                            });
                        } else {
                            deferred.reject(loginResponse);
                        }
                    }, {
                        'scope': 'public_profile,email',
                        'auth_type': args.scope ? 'rerequest' : null
                    });
                } catch (e) {
                    deferred.reject(e);
                } finally {
                    return deferred.promise;
                }
            };
        }]);
})();

(function() {
    "use strict";
    /**
     * See https://developers.google.com/identity
     */
    angular
        .module('whow')
        .service('GoogleService', ['LoginService', function(Login) {
            /**
             * Google OAuth login URL
             */
            var OAUTH_LOGIN_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
            var OAUTH_REDIRECT_PATH = '/login/google';

            /**
             * Query string parameters for the Google login OAuth URL.
             */
            var OAUTH_QUERY_DATA = {
                client_id: window.casino && window.casino.googleSso && window.casino.googleSso.clientId ? window.casino.googleSso.clientId : null, // jshint ignore:line
                redirect_uri: window.location.protocol + '//' + window.location.host + OAUTH_REDIRECT_PATH, // jshint ignore:line
                response_type: 'code', // jshint ignore:line
                access_type: 'offline', // jshint ignore:line
                prompt: 'consent',
                scope: 'email+profile',
            };

            /**
             * Build a query string from the Google login parameters
             *
             * @returns {string}
             */
            function buildQueryString() {
                return Object.keys(OAUTH_QUERY_DATA)
                       })
                    .join('&');
            }

            /**
             * OAUTH Login to Google
             */
            this.login = function() {
                window.location = OAUTH_LOGIN_URL + '?' + buildQueryString();
            };
        }]);
})();

/* jshint ignore:end */

(function(global) {
    "use strict";

    angular
        .module('whow')
    /**
     * Global service for social calls
     */
    .service('SocialService', [
        '$rootScope', '$q', '$http', 'Config', 'Helper', 'LocalizationService',
        'localStorageService', 'LayerService',
        'FacebookService', 'GoogleService',
        function(
            $rootScope, $q, $http, Config, Helper, Localization, LocalStorage, Layer,
            Facebook, Google
        ) {
            var $this = this;

            /**
             * Login to a social service/platform
             *
             * @param  {string} service The service/platform (e.g. facebook)
             * @param {object} args, currently only "{type: 'connect'} valid
             */
            this.login = function(service, args) {
                var deferred = $q.defer();

                args = args || {};

                var ageCheck = true;
                if (typeof hasAgeCheck !== 'undefined') {
                    ageCheck = angular.element(document).find(".age-check .custom-checkbox-radio input.ng-not-empty").length === 1;
                }

                switch (service) {
                    case 'facebook':
                        return Facebook.login(args, ageCheck, $this);
                    case 'google':
                        return Google.login(args);
                    default:
                        var errMsg = '"' + service + '" is no registered social <i>login</i> service!';
                        Helper.message('error', [{
                            message: errMsg
                        }]);
                        deferred.reject();
                        break;
                }

                return deferred.promise;
            };

            return function() {
                return $this;
            };
        }
    ])
    /**
     * Layer service
     */
    .service('LayerService', ['LayerFactory', function(LayerFactory) {
        // this.layer = {};
        //
        // var $this = this;
        //
  ];
        };
    }])
    /**
     * Image service
     */
    .service('ImageService', ['$q', function($q) {
        this.preload = function(url) {
            var deffered = $q.defer(),
                image = new Image();

            image.src = url;

            if (image.complete) {
                deffered.resolve();
            } else {
                image.addEventListener('load', function() {
                    deffered.resolve();
                });

                image.addEventListener('error', function() {
                    deffered.reject();
                });
            }

            return deffered.promise;
        };
    }])
    /**
     * FunnelTracking service
     */
    .service('FunnelTrackingService', ['$rootScope', '$q', '$http', 'Config', function($rootScope, $q, $http, Config) {
        this.track = function(event, attr) {
            attr = attr || {};
            return $q(function(resolve, reject) {
                $rootScope.$broadcast('loading:disabled');
                $http({
                    method: 'POST',
                    url: Config.API_URI + '/trackings/funnel',
                    data: {
                        steps: event,
                        params: attr
                    }
                }).then(function(response) {
                    $rootScope.$broadcast('loading:enabled');
                    resolve(response.data);
                });
            });
        };
    }])
    /**
     * Neutrinoparticles Service
     */
    .service('NeutrinoService', [function() {
        this.options = {
            width: 400,
            height: 300,
            append: 'body', //append, prepend, after, before
            duration: null
        };

        this.animations = [];

        this.neutrino = new NeutrinoParticles();

        this.animate = function(animation, options) {
            var $this = this,
                animationKey = animation + '-' + _.random(1000000, 9999999);
            $.ajax({
                method: 'GET',
                url: ('/js/animations/neutrinoparticles/' + animation + '.min.js').toCV(),
                dataType: 'script',
                cache: true
            }).done(function() {
                var effectModel;

                if (typeof options.textures !== 'undefined') { //if one of these options is set, add the argument to the animation function
                    effectModel = new window["NeutrinoPart_" + animation.toCamelCase()]($this.neutrino, options);
                } else {
                    effectModel = new window["NeutrinoPart_" + animation.toCamelCase()]($this.neutrino);
                }

                $this.animations[animationKey] = {
                    options: $.extend({}, $this.options, options),
                    canvas: $('<canvas>'),
                    effect: effectModel.createCanvas2DInstance(
                        [0, 0, 0] // position of the effect
                    )
                };

                $this.animations[animationKey].canvas.attr({
                    id: $this.animations[animationKey].options.id || 'neutrino-' + animationKey,
                    class: 'neutrino-' + animation,
                    width: $this.animations[animationKey].options.width,
                    height: $this.animations[animationKey].options.height
                });

                /* add css/style to the canvas */
                if ($this.animations[animationKey].options.style) {
                    $this.animations[animationKey].canvas.css($this.animations[animationKey].options.style);
                }

                if ($this.animations[animationKey].options.prepend) {
                    $($this.animations[animationKey].canvas).prependTo($this.animations[animationKey].options.prepend);
                } else if ($this.animations[animationKey].options.after) {
                    $($this.animations[animationKey].options.after).after($this.animations[animationKey].canvas);
                } else if ($this.animations[animationKey].options.before) {
                    $($this.animations[animationKey].options.before).before($this.animations[animationKey].canvas);
                } else {
                    $($this.animations[animationKey].canvas).appendTo($this.animations[animationKey].options.append);
                }

                $this.preloadAnimation(animation, animationKey, options.loaded);
            });

            return animationKey;
        };

        this.preloadAnimation = function(animation, animationKey, loadedCallback) {
            var effect = this.animations[animationKey].effect,
                imagesToLoad = effect.model.textures.length,
                imageDescs = [],
                $this = this;

            for (var imageIndex = 0; imageIndex < effect.model.textures.length; ++imageIndex) {
                var image = new Image();

                image.onload = (function() {
                    var savedImageIndex = imageIndex,
                        savedImage = image;

                    return function() {
                        // assign image description to image path
                        imageDescs[savedImageIndex] = new $this.neutrino.ImageDesc(
                            savedImage, // image
                            0, // X displace inside image
                            0, // Y displace inside image
                            savedImage.width, // width of sub-image to use
                            savedImage.height // height of sub-image to use
                        );

                        if (--imagesToLoad === 0) {
                            effect.textureDescs = imageDescs; // send image descriptions to the effect
                            $this.draw(animationKey);

                            if (typeof loadedCallback === 'function') {
                                loadedCallback();
                            }
                        }
                    };
                })();

                image.src = ('/img/default/animations/neutrinoparticles/' + animation + '/' + effect.model.textures[imageIndex]).toCV();
            }
        };

        /*----------------- Animation DB-------------------*/
        this.animateDb = function(animation, options, images, jsContent) {
            eval.call(null, jsContent);

            var $this = this,
                animationKey = animation + '-' + _.random(1000000, 9999999);

            var effectModel;

            if (typeof options.textures !== 'undefined') { //if one of these options is set, add the argument to the animation function
                effectModel = new window[animation.toCamelCase()]($this.neutrino, options);
            } else {
                effectModel = new window[animation.toCamelCase()]($this.neutrino);
            }

            $this.animations[animationKey] = {
                options: $.extend({}, $this.options, options),
                canvas: $('<canvas>'),
                effect: effectModel.createCanvas2DInstance(
                    [0, 0, 0] // position of the effect
                )
            };

            $this.animations[animationKey].canvas.attr({
                id: $this.animations[animationKey].options.id || 'neutrino-' + animationKey,
                class: 'neutrino-' + animation,
                width: $this.animations[animationKey].options.width,
                height: $this.animations[animationKey].options.height
            });

            /* add css/style to the canvas */
            if ($this.animations[animationKey].options.style) {
                $this.animations[animationKey].canvas.css($this.animations[animationKey].options.style);
            }

            if ($this.animations[animationKey].options.prepend) {
                $($this.animations[animationKey].canvas).prependTo($this.animations[animationKey].options.prepend);
            } else if ($this.animations[animationKey].options.after) {
                $($this.animations[animationKey].options.after).after($this.animations[animationKey].canvas);
            } else if ($this.animations[animationKey].options.before) {
                $($this.animations[animationKey].options.before).before($this.animations[animationKey].canvas);
            } else {
                $($this.animations[animationKey].canvas).appendTo($this.animations[animationKey].options.append);
            }

            $this.preloadAnimationDb(animation, animationKey, images, options.loaded);

            return animationKey;
        };

        this.preloadAnimationDb = function(animation, animationKey, images, loadedCallback) {
            var effect = this.animations[animationKey].effect,
                imagesToLoad = Object.keys(images).length,
                imageDescs = [],
                $this = this;

            for (var imageIndex = 0; imageIndex < imagesToLoad; ++imageIndex) {
                var image = new Image();

                image.onload = (function() {
                    var savedImageIndex = imageIndex,
                        savedImage = image;

                    return function() {
                        // assign image description to image path
                        imageDescs[savedImageIndex] = new $this.neutrino.ImageDesc(
                            savedImage, // image
                            0, // X displace inside image
                            0, // Y displace inside image
                            savedImage.width, // width of sub-image to use
                            savedImage.height // height of sub-image to use
                        );

                        if (--imagesToLoad === 0) {
                            effect.textureDescs = imageDescs; // send image descriptions to the effect
                            $this.draw(animationKey);

                            if (typeof loadedCallback === 'function') {
                                loadedCallback();
                            }
                        }
                    };
                })();

                image.src = images[effect.model.textures[imageIndex]];
            }
        };
        /*-----------------End Animation Db------------------*/

        this.draw = function(animation) {
            var $this = this,
                effect = this.animations[animation].effect,
                canvas = this.animations[animation].canvas[0],
                context = canvas.getContext('2d'),
                start = Date.now(),
                fps = 60,
                frame = {
                    now: null,
                    delta: null,
                    then: Date.now(),
                    interval: 1000 / fps
                };

            var ani = function() {
                requestAnimationFrame(ani);

                frame.now = Date.now();
                frame.delta = (frame.now - frame.then) / 1000;
                frame.then = frame.now;

                // if (frame.delta > frame.interval) {
                //     frame.then = frame.now - (frame.delta % frame.interval);

                    // update the effect
                    effect.update(
                        frame.delta > 1.0 ? 1.0 : frame.delta, // time from previous frame in seconds
                        [0, 0, 0] // new position of the effect
                    );

                    context.clearRect(0, 0, canvas.width, canvas.height);
                    effect.draw(context);

                    if ($this.animations[animation] &&
                        $this.animations[animation].options &&
                        $this.animations[animation].options.duration &&
                        start + $this.animations[animation].options.duration < Date.now()) {
                        if (typeof $this.animations[animation].options.complete === 'function') {
                            $this.animations[animation].options.complete();
                        }

                        delete global.animations['neutrino-' + animation];
                        delete $this.animations[animation];

                        $(canvas).remove();
                    }
                // }
            };

            if(typeof(global.animations) === 'undefined'){
                global.animations = [];
            }

            global.animations['neutrino-' + animation] = ani();
        };

        /**
         * Cleanup objects
         */
        this.cleanup = function(animations) {
            var $this = this;

            animations = animations || [];

            if (angular.isArray(animations)) {
                animations.forEach(function(animation) {
                    if ($this.animations[animation]) {
                        if ($this.animations[animation].canvas && $this.animations[animation].canvas[0]) {
                            $($this.animations[animation].canvas[0]).remove();
                        }
                        delete $this.animations[animation];
                    }

                    delete global.animations['neutrino-' + animation];
                });
            }
        };
    }]);
}(this));

/* jshint ignore:end */

/* jshint ignore:end */
