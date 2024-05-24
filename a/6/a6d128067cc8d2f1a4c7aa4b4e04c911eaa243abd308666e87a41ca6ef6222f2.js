/*1.0*/
/*
    json2.js
    2012-10-08
    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/
/*jslint evil: true, regexp: true */
/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/
// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
if(typeof JSON!=="object"){JSON={}}(function(){"use strict";typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","   ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;if(typeof JSON.stringify!=="function"){JSON.stringify=if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){ar j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})()
;
/*1.0*/
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;window.Modernizr=this,this.document),this,document),Modernizr.load=
/*1.0*/
/*! jQuery v1.7.2 jquery.com | jquery.org/license */

()(window);
/*1.0*/
// Tell jQuery to not use $ for its shortcut. Hopefully, one day, many years from now, we can remove this.
jQuery.noConflict();
/*1.0*/
/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position,a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top}},a.offset.setOffset||(a.offset.setOffset,a.fn.offset)()})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create,destroy,_mouseCapture,_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag,_mouseStop,_mouseUp,cancel,_getHandle,_createHelper,_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins,_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment,_convertPositionTo,_generatePosition,_clear,_trigger,plugins:{},_uiHash}),a.extend(a.ui.draggable,{version:"1.8.20"}),a.ui.plugin.add("draggable","connectToSortable",{start,stop,drag}),a.ui.plugin.add("draggable","cursor",{start,stop}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start,drag}),a.ui.plugin.add("draggable","snap",{start,drag}),a.ui.plugin.add("draggable","stack",{start}),a.ui.plugin.add("draggable","zIndex",{start,stop})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create,destroy,_setOption,_mouseCapture,_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag,_mouseStop,cancel,serialize,toArray,_intersectsWith,_intersectsWithPointer,_intersectsWithSides,_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection,refresh,_connectWith,_getItemsAsjQuery,_removeCurrentsFromItems,_refreshItems,refreshPositions,_createPlaceholder,_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.items[i][this.containers[d].floating?"left":"top"];Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i])}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper,_adjustOffsetFromHelper,_getParentOffset,_getRelativeOffset,_cacheMargins,_cacheHelperProportions,_setContainment,_convertPositionTo,_generatePosition,_rearrange,_clear,_trigger,_uiHash}),a.extend(a.ui.sortable,{version:"1.8.20"})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b)cts={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"]);var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass,a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass,_toggleClass:a.fn.toggleClass,toggleClass,switchClass}),a.extend(a.effects,{version:"1.8.20",save,restore,setMode,getBaseline,createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"]),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper,setTransition}),a.fn.extend({effect,_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide,__toggle:a.fn.toggle,toggle,cssUnit}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing,easeInQuad,easeOutQuad,easeInOutQuad,easeInCubic,easeOutCubic,easeInOutCubic,easeInQuart,easeOutQuart,easeInOutQuart,easeInQuint,easeOutQuint,easeInOutQuint,easeInSine,easeOutSine,easeInOutSine,easeInExpo,easeOutExpo,easeInOutExpo,easeInCirc,easeOutCirc,easeInOutCirc,easeInElastic,easeOutElastic,easeInOutElastic,easeInBack,easeOutBack,easeInOutBack,easeInBounce,easeOutBounce,easeInOutBounce})}(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.blind.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.bounce.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.clip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.drop.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.explode.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fold.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.highlight.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.pulsate.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.scale.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
)(jQuery);;
/*1.0*/
//     Underscore.js 1.4.3
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
).call(this);
/*1.0*/
!function(e,n){"use strict";function r(e,n){var r,t,u=e.toLowerCase();for(n=[].concat(n),r=0;n.length>r;r+=1)if(t=n[r]){if(t.test&&t.test(e))return!0;if(t.toLowerCase()===u)return!0}}var t=n.prototype.trim,u=n.prototype.trimRight,i=n.prototype.trimLeft,l=function(e){return 1*e||0},o,a=[].slice,c=function(e){return null==e?"\\s":e.source?e.source:"["+g.escapeRegExp(e)+"]"},s={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"},f={};for(var p in s)f[s[p]]=p;f["'"]="#39";var h=function()var r=o,t;return t.format=function(t,u){var i,l,o,a,c,s,f,p=1,g=t.length,d="",m=[];for(l=0;g>l;l++)if(d=e(t[l]),"string"===d)m.push(t[l]);else if("array"===d){if(a=t[l],a[2])for(i=u[p],o=0;a[2].length>o;o++){if(!i.hasOwnProperty(a[2][o]))throw new Error(h('[_.sprintf] property "%s" does not exist',a[2][o]));i=i[a[2][o]]}else i=a[1]?u[a[1]]:u[p++];if(/[^s]/.test(a[8])&&"number"!=e(i))throw new Error(h("[_.sprintf] expecting number but found %s",e(i)));switch(a[8]){case"b":i=i.toString(2);break;case"c":i=n.fromCharCode(i);break;case"d":i=parseInt(i,10);break;case"e":i=a[7]?i.toExponential(a[7]):i.toExponential();break;case"f":i=a[7]?parseFloat(i).toFixed(a[7]):parseFloat(i);break;case"o":i=i.toString(8);break;case"s":i=(i=n(i))&&a[7]?i.substring(0,a[7]):i;break;case"u":i=Math.abs(i);break;case"x":i=i.toString(16);break;case"X":i=i.toString(16).toUpperCase()}i=/[def]/.test(a[8])&&a[3]&&i>=0?"+"+i:i,s=a[4]?"0"==a[4]?"0":a[4].charAt(1):" ",f=a[6]-n(i).length,c=a[6]?r(s,f):"",m.push(a[5]?i+c:c+i)}return m.join("")},t.cache={},t.parse,t}(),g={VERSION:"2.3.0",isBlank:function(e){return null==e&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return null==e?"":n(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=null==e?"":n(e),e.charAt(0).toUpperCase()+e.slice(1)},chop,clean,count:function(e,r){if(null==e||null==r)return 0;e=n(e),r=n(r);for(var t=0,u=0,i=r.length;;){if(u=e.indexOf(r,u),-1===u)break;t++,u+=i}return t},chars:function(e){return null==e?[]:n(e).split("")},swapCase,escapeHTML,unescapeHTML,escapeRegExp,splice,insert,include:function(e,r){return""===r?!0:null==e?!1:-1!==n(e).indexOf(r)},join:function(){var e=a.call(arguments),n=e.shift();return null==n&&(n=""),e.join(n)},lines,reverse,startsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(0,r.length)===r)},endsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(e.length-r.length)===r)},succ:function(e){return null==e?"":(e=n(e),e.slice(0,-1)+n.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":(e=n(e).toLowerCase(),e.replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()}))},camelize,underscored:function(e){return g.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize,classify,humanize,trim,ltrim,rtrim,truncate:function(e,r,t){return null==e?"":(e=n(e),t=t||"...",r=~~r,e.length>r?e.slice(0,r)+t:e)},prune:function(e,r,t){if(null==e)return"";if(e=n(e),r=~~r,t=null!=t?n(t):"...",r>=e.length)return e;var u,i=e.slice(0,r+1).replace(/.(?=\W*\w*$)/g,u);return i=i.slice(i.length-2).match(/\w\w/)?i.replace(/\s*\S+$/,""):g.rtrim(i.slice(0,i.length-1)),(i+t).length>e.length?e:e.slice(0,i.length)+t},words,pad,lpad,rpad:function(e,n,r){return g.pad(e,n,r,"right")},lrpad,sprintf:h,vsprintf,toNumber:function(e,n){return e?(e=g.trim(e),e.match(/^-?\d+(?:\.\d+)?$/)?l(l(e).toFixed(~~n)):0/0):0},numberFormat,strRight:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.indexOf(r):-1;return~t?e.slice(t+r.length,e.length):e},strRightBack:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.lastIndexOf(r):-1;return~t?e.slice(t+r.length,e.length):e},strLeft:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.indexOf(r):-1;return~t?e.slice(0,t):e},strLeftBack:function(e,n){if(null==e)return"";e+="",n=null!=n?""+n:n;var r=e.lastIndexOf(n);return~r?e.slice(0,r):e},toSentence:function(e,n,r,t){n=n||", ",r=r||" and ";var u=e.slice(),i=u.pop();return e.length>2&&t&&(r=g.rtrim(n)+r),u.length?u.join(n)+r+i:i},toSentenceSerial,slugify:function(e){if(null==e)return"";var r="ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",t="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",u=new RegExp(c(r),"g");return e=n(e).toLowerCase().replace(u,function(e){var n=r.indexOf(e);return t.charAt(n)||"-"}),g.dasheriz:functtion(e,nlength-1|reverse)$/)&&(e[n]=this[n]);return e},repeat:function(e,r,t){if(null==e)return"";if(r=~~r,null==t)return o(n(e),r);for(var u=[];r>0;u[--r]=e);return u.join(t)},naturalCmp:function(e,r){if(e==r)return 0;if(!e)return-1;if(!r)return 1;for(var t=/(\.\d+)|(\d+)|(\D+)/g,u=n(e).toLowerCase().match(t),i=n(r).toLowerCase().match(t),l=Math.min(u.length,i.length),o=0;l>o;o++){var a=u[o],c=i[o];if(a!==c){var s=parseInt(a,10);if(!isNaN(s)){var f=parseInt(c,10);if(!isNaN(f)&&s-f)return s-f}return c>a?-1:1}}return u.length===i.length?ut)+1:l+o,t=i[o],i[o]=u;return i.pop()},toBoolean:function(e,n,t){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=g.trim(e),r(e,n||["true","1"])?!0:r(e,t||["false","0"])?!1:void 0)}};g.strip=g.trim,g.lstrip=g.ltrim,g.rstrip=g.rtrim,g.center=g.lrpad,g.rjust=g.lpad,g.ljust=g.rpad,g.contains=g.include,g.q=g.quote,g.toBool=g.toBoolean,"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(module.exports=g),exports._s=g),"function"==typeof define&&defrscore.string",[],function(){return g}),e._=e._||{},e._.string=e._.str=g}(this,String);
/*1.0*/
// Backbone.js 0.9.10

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and dorty or function must be specified');}}).call(this);
/*1.0*/
// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v1.0.3
//
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com



/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */

// Backbone.BabySitter
// -------------------
// v0.0.5
//
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/babysitterjs/backbone.babysitter

// Backbone.ChildViewContainer
// ---------------------------
//
// Provide a container to store, retrieve and
// shut down child views.

Backbone.ChildViewContainer = (function(Backbone, _){
  
  // Container Constructor
  // ---------------------

  var Container = function(initialViews){
    this._views = {};
    this._indexByModel = {};
    this._indexByCollection = {};
    this._indexByCustom = {};
    this._updateLength();

    this._addInitialViews(initialViews);
  };

  // Container Methods
  // -----------------

  _.extend(Container.prototype, {

    // Add a view to this container. Stores the view
    // by `cid` and makes it searchable by the model
    // and/or collection of the view. Optionally specify
    // a custom key to store an retrieve the view.
    add: function(view, customIndex){
      var viewCid = view.cid;

      // store the view
      this._views[viewCid] = view;

      // index it by model
      if (view.model){
        this._indexByModel[view.model.cid] = viewCid;
      }

      // index it by collection
      if (view.collection){
        this._indexByCollection[view.collection.cid] = viewCid;
      }

      // index by custom
      if (customIndex){
        this._indexByCustom[customIndex] = viewCid;
      }

      this._updateLength();
    },

    // Find a view by the model that was attached to
    // it. Uses the model's `cid` to find it, and
    // retrieves the view by it's `cid` from the result
    findByModel: function(model){
      var viewCid = this._indexByModel[model.cid];
      return this.findByCid(viewCid);
    },

    // Find a view by the collection that was attached to
    // it. Uses the collection's `cid` to find it, and
    // retrieves the view by it's `cid` from the result
    findByCollection: function(col){
      var viewCid = this._indexByCollection[col.cid];
      return this.findByCid(viewCid);
    },

    // Find a view  return this.findByCid(viewCid);
    },

    // Find by index. This is not guaranteed to be arn _.values(this._views)[index];
    },

    // retrieve a view by it's `cid` directly
    findByCid: function(cid){
      return this._views[cid];
    },

    // Remove a view
    remove: function(view){
      var viewCid = view.cid;

      // delete model index
      if (view.model){
        delete this._indexByModel[view.model.cid];
      }

      // delete collection index
      if (view.collection){
        delete this._indexByCollection[view.collection.cid];
      }

      // delete custom index
      var cust;

      for (var key in this._indexByCustom){
        if (this._indexByCustom.hasOwnProperty(key)){
          if (this._indexByCustom[key] === viewCid){
            cust = key;
            break;
          }
        }
      }

      if (cust){
        delete this._indexByCustom[cust];
      }

      // remove the view from the container
      delete this._views[viewCid];

      // update the length
      this._updateLength();
    },

    // Call a method on every view in the container,
    // passing parameters to the call method one at a
    // time, like `function.call`.
    call: function(method, args){
      args = Array.prototype.slice.call(arguments, 1);
      this.apply(method, args);
    },

    // Apply a method on every view in the container,
    // passing parameters to the call method one at a
    // time, like `function.apply`.
    apply: function(method, args){
      var view;

      // fix for IE < 9
      args = args || [];

      _.each(this._views, function(view, key){
        if (_.isFunction(view[method])){
          view[method].apply(view, args);
        }
      });

    },

    // Update the `.length` attribute on this container
    _updateLength: function(){
      this.length = _.size(this._views);
    },

    // set up an initial list of views
    _addInitialViews: function(views){
      if (!views){ return; }

      var view, i,
          length = views.length;

      for (i=0; i<length; i++){
        view = views[i];
        this.add(view);
      }
    }
  });

  // Borrowing this code from Backbone.Collection:
  // http://backbonejs.org/docs/backbone.html#section-106
  //
  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 
    'select', 'reject', 'every', 'all', 'some', 'any', 'include', 
    'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 
    'last', 'without', 'isEmpty', 'pluck'];

  _.each(methods, function(method) {
    Container.prototype[method] = function() {
      var views = _.values(this._views);
      var args = [views].concat(_.toArray(arguments));
      return _[method].apply(_, args);
    };
  });

  // return the public API
  return Container;
})(Backbone, _);

// Backbone.Wreqr (Backbone.Marionette)
// ----------------------------------
// v0.2.0
//
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionett;
})(Backbone, _);


  return Wreqr;
})(Backbone, Backbone.Marionette, _);

var Marionette = (function(global, Backbone, _){
  "use strict";

  // Define and export the Marionette namespace
  var Marionette = {};
  Backbone.Marionette = Marionette;

  // Get the DOM manipulator for later use
  Marionette.$ = Backbone.$;

// Helpers
// -------

// For slicing `arguments` in functions
var protoSlice = Array.prototype.slice;
function slice(argsme = name || 'Error';
  throw error;
}

// Marionette.extend
// -----------------

// Borrow the Backbone `extend` method so we can use it as needed
Marionette.extend = Backbone.Model.extend;

// Marionette.getOption
// --------------------

// Retrieve an object, function or other value from a target
// object or its `options`, with `options` taket[optionName];
  }

  return value;
};

// Trigger an event and a corresponding method name. Examples:
//
// `this.triggerMethod("foo")` will trigger the "foo" event and
// call the "onFoo" method. 
//
// `this.triggerMethod("foo:bar") will trigger the "foo:bar" event and
// call the "onFooBar" method.
Marionette.triggerMethod = (function(){
  
  // split the event name on the :
  var splitter = /(^|:)(\w)/gi;

  // take the event section ("section1:section2:section3")
    return eventName.toUpperCase();
  }

  // actual triggerMethod name
  var triggerMethod = function(event) {
    // get the method name from the event name
    var methodName = 'on' + event.replace(splitter, getEventName);
    var method = this[methodName];

    // trigger the event
    this.trigger.apply(this, arguments);

    // call the onMethodName if it exists
    if (_.isFunction(method)) {
      // pass all arguments, except the event name
      return method.apply(this, _.tail(arguments));
    }
  };

  return triggerMethod;
})();

// DOMRefresh
// ----------
//
// Monitor a view's state, and after it has been rendered and shown
// in the DOM, trigger a "dom:refresh" event every time it is
// re-rendered.

Marionette.MonitorDOMRefresh = (function(){
  // track when the view has been rendered
  function handleShow(view){
    view._isShown = true;
    triggerDOMRefresh(view);
  }

  // track when the view has been shown in the DOM,
  // using a Marionette.Region (or true;
    triggerDOMRefresh(view);
  }

  // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
  function triggerDOMRefresh(view){
    if (view._isShown && view._isRendered){
      if (_.isFunction(view.triggerMethod)){
        view.triggerMethod("dom:refresh");
      }
    
      handleRender(view);
    });
  };
})();


// Marionette.bindEntityEvents & unbindEntityEvents
// ---------------------------
//
// These methods are used to bind/unbind a backbone "entity" (collection/model) 
// to methods on a target object. 
//
// The first parameter, `target`, must have a `listenTo` method from the
// EventBinder object.
//
// The second parameter is the entity (Backbone.Model or Backbone.Collection)
// to bind the events from.
//
// The third parameter is a hash of { "event:name": "eventHandler" }
// configuration. Multiple handlers can be separated by a space. A
// function can be supplied instead of a string handler name. 

(function(Marionette){
  "use strict";

  // Bind the event to handlers specified as a string of
  // handler names on the target object
  function bindFromStrings(target, entity, evt, methods){
    var methodNames = methods.split(/\s+/);

    _.each(methodNames,function(methodName) {

      var method = target[methodName];
      if(!method) {
        throwError("Method '"+ methodName +"' was configured as an event handler, but does not exist.");
      }

      target.listenTo(entity, evt, method, target);
    });
  }

  // Bind the event to a supplied callback function
  function bindToFunction(target, entity, evt, method){
      target.listenTo(entity, evt, method, target);
  }

  // Bind the event to handlers specified as a string of
  // handler names on the target object
  function unbindFromStrings(target, entity, evt, methods){
    var methodNames = methodsng(entity, evt, method, target);
    });
  }

  // Bind the ening(entity, evt, method, target);
 y, evt, methods);
      }

    });
  }
 
  // Export Public API
  Marionette.bindEntityEvents = function(target, entity, bindings){
    iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
 indToFunction, unbindFromStrings);
  };

})(Marionette);


// Callbacks
// ---------

// A simple way of managing a collection of callbacks
// and executing them at a later point in time, using jQuery's
// `De.Deferred();
  this._callbacks = [];
};

_.extend(Marionette.Callbacks.prototype, {

  // Add a callback to be executed. Callbacks added here are
  // guaranteed to execute, even if they are added after thck.call(context, options);
    });
  },

  // Run all registered callbacks with the context specified. 
  // Additional callbacks can be added after this has been run 
  // aeferred.resolve(context, options);
  },

  // Resets the list of callbacks to be run, allowing the same list
  // to be run multiple times - wheneve.add(cb.cb, cb.ctx);
    }, this);
  }
});


// Marionette Controller
// ---------------------
//
// A multi-purpose object to use as a controller for
// modules and routers, and as a mediator for workflow
// and coordination of other objects, vi  this.initialize(this.options);
  }
};

Marionette.Controller.extend = Marionette.extend;

// Controller Methods
// --------------

// Ensure it can trigger events with Backbone.Events
_.extend(Marionette.Controller.ethod("close");
    this.unbind();
  }
});

// Region 
// ------
//
// Manage the visual regions of your composite application. See
// http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/

Marionette.Region = function(options){
  this.options = options || {};

  this.el = Marionette.getOption(this, "el");

  if (!this.el){
    var err = new Error("An 'el' must be specified for a region.");
    err.name = "NoElError";
    throw err;
  }

  if (this.initialize){
    var args = Array.prototype.slice.apply(arguments);
    this.initialize.apply(this, args);
  }
};


// Region Type methods
// -------------------

_.extend(Marionette.Region, {

  // Build an instance of a region by passing in a configuration object
  // and a default region type to use if none is specified in the config.
  //
  // The config object should either be a string as a jQuery DOM selector,
  // a Region type directly, or an object literal that specifies both
  // a selector and regionType:
  //
  // ```js
  // {
  //   selector: "#foo",
  //   regionType: MyCustomRegion
  // }
  // ```
  //
  buildRegion: function(regionConfig, defaultRegionType){
    var regionIsString = (typeof regionConfig === "string");
    var regionSelectorIsString = (typeof regionConfig.selector === "string");
    var regionTypeIsUndefined = (typeof regionConfig.regionType === "undefined");
    var regionIsType = (typeof regionConfig === "function");

    if (!regionIsType && !regionIsString && !regionSelectorIsString) {
      throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
    }

    var selector, RegionType;
   
    // get the selector for the region
    
    if (regionIsString) {
      selector = regionConfig;
    } 

    if (regionConfig.selector) {
      selector = regionConfig.selector;
    }

    // get the type for the region
    
    if (regionIsType){
      RegionType = regionConfig;
    }

    if (!regionIsType && regionTypeIsUndefined) {
      RegionType = defaultRegionType;
    }

    if (regionConfig.regionType) {
      RegionType = regionConfig.regionType;
    }
    
    // build the region instance
    var region = new RegionType({
      el: selector
    });

    // override the `getEl` function if we have a parentEl
    // this must be overridden to ensure the selector is found
    // on the first use of the region. if we try to assign the
    // region's `el` to `parentEl.find(selector)` in the object
    // literal to build the region, the element will not be
    // guaranteed to be in the DOM already, and will cause problems
    if (regionCeturn parentEl.find(selector);
      };
    }

    return region;
  }

});

// Region Instance Methods
// -----------------------

_.extend(Marionette.Region.prototype, Backbone.Events, {

  // Displays a backbone view instance inside of the region.
  // Handles calling the `render` method for you. Reads content
  // directly from the `el` attribute. Also calls an optional
  // `onShow` and `close` method on your view, just after showing
  // or just before closing the view, respectively.
  show: function(view){

    this.ensureEl();

    var isViewClosed = view.isClosed || _.isUndefined(view.$el);

    var isDifferentView = view !== this.currentView;

    if (isDifferentView) {
      this.close();
    }

    view.render();

    if (isDifferentView || isViewClosed) {
      this.open(view);
    }
    
    this.currentView = view;

    Marionette.triggerMethod.call(this, "show", view);
    Marionette.triggerMethods.$el = this.getEl(this.el);
    }
  },

  // Override this method to change how the region finds the
  // DOM element that it manages. Return a jQuery selector object.
  getEl: function(selector){
    return Marionette.$(selector);
  },

  // Override this method to change how the new view is
  // appended to the `$e this.$el.empty().append(view.el);
  },

  // Close the current view, if there is one. If there is no
  // current view, it does nothing and returns immediately.
  close: function(){
    var view = this.currentView;
    if (!view || view.isClosed){ return; }

    // call 'close' or 'remove', depending on which is found
    if (view.close) { view.close(); }
    else if (view.remove) { view.remove(); }

    Marionette.triggerMethod.call(this, "close");

    delete this.currentView;
  },

  // Attach an existing view to the region. This 
  // will not call `render` or `onShow` for the new view, 
  // and will not replace the current HTML for the `el`
  // of the region.
  attachView: function(view){
    this.currentView = view;
  },

  // Reset the region by closing any existing view and
  // clearing out the cached `$el`. The next time a view
  // is shown via this region, the region will re-query the
  this.close();
    delete this.$el;
  }
});

// Copy the `extend` function used by Backbone's classes
Marionette.Region.extend = Marionette.extend;

// Marionette.RegionManager
// ------------------------
//
// Manage one or more related `Marionette.Region` objects.
Marionette.RegionManager = (function(Marionette){

  var RegionManager = Marionettconstructor.call(this, options);
    },

    // Add multiple regions using an object literal, where
    // each key becomes the region name, and each value is
    // the region definition.
    addRegions: function(regionDefinitions, defaults){
      var regions = {};

      _.each(regionDefinitions, function(definition, name){
        if (typeof definition === "string"){
          definition = { selector: definition };
        }

        if (definition.selector){
          definition = _.defaults({}, definition, defaults);
        }

        var region = this.addRegion(name, definition);
        regions[name] = region;
      }, this);

      return regions;
    },

    // Add an individual region to the region manager,
    // and rete, region);
      return region;
    },     return this._regions[name];
    },

    // Rem     this._remove(name, region);
    },

    // Close all regions in the region manager, ande(name, region);
      }, this);
    },

    // Close all regions in the region manager, but
    // region.close();
      }, this);
    },

    // Close all regions and shut down the region
    // manager entirely
    close: function(){
      this.removeRegions();
      var args = Array.prototype.slice.call(arguments);
      Marionette.Controller.prototype.close.apply(this, args);
    },

    // internregion;
      this._setLength();
    },

    // internal ("region:remove", name, region);
    },

    // set the number o.length = _.size(this._regions);
    }

  });

  // Borrowing this code from Backbone.Collection:
  // http://backbonejs.org/docs/backbone.html#section-106
  //
  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 
    'select', 'reject', 'every', 'all', 'some', 'any', 'include', 
    'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 
    'last', 'without', 'n _[method].apply(_, args);
    };
  });

  return RegionManager;
})(Marionette);


// Template Cache
// --------------

// Manage templates stored in `<script>` blocks,
// caching them for faster access.
Marionette.TemplateCache = function(templateId){
  this.templateId = templateId;
};

// TemplateCache object-level methods. Manage the template
// caches from these method calls instead of creating 
// your own TemplateCache instances
_.extend(Marionette.TemplateCache, {
  templateCaches: {},

  // Get the specified template by id. Either
  // retrieves the cached version,
    return cachedTemplate.load();
  },

  // Clear templates from the cache. If no arguments
  // are specified, clears all templates:
  // `clear()`
  //
  // If arguments are specified, clears each of the 
  // specified templates from the cache:
  // `clear("#t1", "#t2", "...")`
  clear: function(){
    var i;
    var args = slice(arguments);
    var length = args.length;

    if (length > 0){
      for(i=0; i<length; i++){
        delete this.templateCaches[args[i]];
      }
    } else {
      this.templateCaches = {};
    }
  }
});

// TemplateCache instance methods, allowing each
// template cache object to manage its own state
// and know whether or not it has been loaded
_.extend(Marionette.TemplateCache.prototype, {

  // Intern
    return this.compiledTemplate;
  },

  // Load a template from the DOM, by default. Override
  // this method to provide your own template retrieval
  // For asynchronous loading with AMD/RequireJS, consider
  // using a template-loader plugin as described here: 
  // https://github.com/marionettejs/backbone.marionette/wiki/Using-marror");
    }

    return template;
  },

  // Pre-compile the template before caching it. Override
  // this method if you do not need to pre-compile a template
  // (JST / RequireJS for example) or if you want to change
  // the template engine used (Handebars, etc).
  compileTemplate: function(rawTemplate){
    return _.template(rawTemplate);
  }
});


// Renderer
// --------

// Render a template with data by passing in the template
// selector and the data to render.
Marionette.Renderer = {

  // Render a template with data. The `template` parameter is
  // passed to the `TemplateCache` object to retrieve the
  // template function. Override this method to provide your own
  // custom rendering and template handling for all of Marionette.
  render: function(template, data){

    if (!template) {
      var error = new Error("Cannot render the template since it's false, null or undefined.");
      error.name = "TemplateNotFoundError";
      throw error;
    }

    var templateFunc;
    if (typeof template === "function"){
      templateFunc = template;
    } else {
      templateFunc = Marionette.TemplateCache.get(template);
    }

    return templateFunc(data);
  }
};



// Marionette.View
// ---------------

// The core view type that other Marionette views extend from.
Marionette.View = Backbone.View.extend({

  constructor: function(){
    _.bindAll(this, "render");

    var args = Array.prototype.slice.apply(arguments);
    Backbone.View.prototype.constructor.apply(this, args);

    Marionette.MonitorDOMRefresh(this);
    this.listenTo(this, "show", this.onShowCalled, this);
  },

  // import the "triggerMethod" to trigger events with corresponding
  // methods if the method exists 
  triggerMethod: Marionette.triggerMethod,

  // Get the template for this view
  // instance. You can set a `template` attribute in the view
  // definition or pass a `template: "whatever"` parameter in
  // to the constructor options.
  getTemplate: function(){
    return Marionette.getOption(this, "template");
  },

  // Mix in template helper methods. Looks for a
  // `templateHelpers` attribute, which can either be an
  // object literal, or a function that returns an object
  // literal. All methods and attributes from this object
  // are copies to the object passed in.
  mixinTemplateHelpers: function(target){
    target = target || {};
    var templateHelpers = this.templateHelpers;
    if (_.isFunction(templateHelpers)){
      templateHelpers = templateHelpers.call(this);
    }
    return _.extend(target, templateHelpers);
  },

  // Configure `triggers` to forward DOM events to view
  // events. `triggers: {"click .foo": "do:foo"}`
  configureTriggers: function(){
    if (!this.triggers) { return; }

    var triggerEvents = {};

    // Allow `triggers` to be configured as a function
    var triggers = _.result(this, "triggers");

    // Configure the triggers, prevent default
    // action and stop propagation of DOM events
    _.each(triggers, function(value, key){

      // build the event handler function for the DOM event
      triggerEvents[key] = function(e){

        // stop the event in its tracks
        if (e && e.preventDefault){ e.preventDefault(); }
        if (e && e.stopPropagation){ e.stopPropagation(); }

        // build the args for the event
        var args = {
          view: this,
          model: this.model,
          collection: this.collection
        };

        // trigger the event
        this.triggerMethod(value, args);
      };

    }, this);

    return triggerEvents;
  },

  // Overriding Backbone.View's delegateEvents to handle 
  // the `triggers`, `modelEvents`, and `collectionEOption(this, "collectionEvents"));
  },

  // internal method to delegate DOM events and triggers
  _delegateDOMEvents: function(events){
    events = events || this.events;
    if (_.isFunction(events)){ events = events.call(this); }

    var combinedEvents = {};
    var triggers = this.configureTriggers();
    _.extend(combinedEvents, events, triggers);

    Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
  },

  // Overriding Backbone.View's undelegateEvents to handle unbinding
  // the `triggers`, `modelEvents`, and `collecOption(this, "collectionEvents"));
  },

  // Internal method, handles the `show` event.
  onShowCalled: function(){},

  // Default `close` implementation, for removing a view from the
  // DOM and unbinding it. Regions will call this method
  // for you. You can specify an `onClose` method in your view to
  // add custom code that is called after the view is closed.
  close: function(){
    if (this.isClosed) { return; }

    // allow the close to be stopped by returning `false`
    // from the `onBeforeClose` method
    var shouldClose = this.triggerMethod("before:close");
    if (shouldClose === false){
      return;
    }

    // mark as closed before doing the actual close, to
    // prevent infinite loops within "close" event handlers
    // that are trying to close other views
    this.isClosed = true;
    this.triggerMethod("close");

    // unbind UI elements
    this.unbindUIElements();

    // remove the view from the DOM
    this.remove();
  },

  // This method binds the elements specified in the "ui" hash inside the view's code with
  // the associat = this.$(selector);
    }, this);
  },

  // This method unbinds the elements specified in the "ui" hash
  unbindUIElements: function(){
    if (!this.ui){ return; }

    // delete all of the exme){
      delete this.ui[name];
    }, this);

    // reset the ui element to the original bindings configuration
    this.ui = this._uiBindings;
    delete this._uiBindings;
  }
});

// Item View
// ---------

// A single item view implementation that contains code for rendering
// with underscore.js templates, serializing the view's model or collection,
// and calling several methods on extended views, such as `onRender`.
Marionette.ItemView =  Marionette.View.extend({

  // Serialize the model or collection for the view. If a model is
  // found, `.toJSON()` is called. If a collection is found, `.toJSON()`
  // is also called, but is used to populate an `items` array in the
  // resulting data. If both are found, defaults to the model.
  // You can override the `serializeData` method in your own view
  // definition, to provide custom serialization oJSON() };
    }

    return data;
  },

  // Render the view, defaulting to underscore.js templates.
  // You can override this in your view definition to provide
  // a very specific rendering for your view. In general, though,
  // you should override the `Marionette.Renderer` object to
  // change hendered", this);

    return this;
  },

  // Override the default close event to add a few
  // more events that are triggered.
  close: function(){
    if (this.isClosed){ return; }

    this.triggerMethod('item:before:close');

    Marionette.View.prototype.close.apply(this, slice(arguments));

    this.triggerMethod('item:closed');
  }
});

// Collection View
// ---------------

// A view that iterates over a Backbone.Collection
// and renders an individual ItemView for each model.
Marionette.CollectionView = Marionette.View.extend({
  // used as the prefix for item view events
  // that are forwarded through the collectionview
  itemViewEventPrefix: "itemview",

  // constructor
  constructor: function(options){
    this._initChildViewStorage();

    Marionette.View.prototype.constructor.apply(this, slice(arguments));

    this._initialEvents();
  },

  // Configured the initial events that the collection view
  // binds to. Override this method to prevent the initial
  // events, or to add your own initial events.
  _initialEvents: function(){
    if (this.collection){
      this.listenTo(this.collection, "add", this.addChildView, this);
      this.listenTo(this.collection, "remove", this.removeItemView, this);
      this.listenTo(this.collection, "reset", this.render, this);
    }
  },

  // Handle a child item addItemView(item, ItemView, index);
  },

  // Override from `Marionette.View` to guarantee the `onShow` method
  // of ethod.call(child, "show");
    });
  },

  // Internal method to trigger the before render callbacks
  // and events
  triggerBeforeRender: function(){
    this.triggerMethod("before:render", this);
    this.triggerMethod("collection:before:render", this);
  },

  // Internal method to trigger the rendered callbathod("collection:rendered", this);
  },

  // Render the collection of items. Override this method to
  // provide your own implementation of a render function friggerRendered();
    return this;
  },

  // Internal method. Separated so that CompositeView can have
  // more control over events being triggered, around the rendering
  // process
  _renderChildren: function(){
    this.closeEmptyView();
    this.closeChildren();

    if (this.collection && this.collection.length > 0) {
      this.showCollection();
    } else {
      this.showEmptyView();
    }
  },

  // Internal method to loop through each item in the
  // collectm, ItemView, index);
    }, this);
  },

  // Internal method to show an empty view in place of
  // a collection of item views, when the collection is
  // empty
  showEmptyView: function(){
    var EmptyView = Marionette.getOption(this, "emptyView");

    if (EmptyView && !this._showingEmptyView){
      this._showingEmptyView = true;
      var model = new Backbone.Model();
      this.addItemView(model, EmptyView, 0);
    }
  },

  // Internal method to close an existing emptyView instance
  // if one exists. Called when a collection view has been
  // rendered empty, and then an item is addelete this._showingEmptyView;
    }
  },

  // Retrieve the itemView type, either from `this.options.itemView`
  // or from the `itemView` in the object definition. The "options"ror");
    }

    return itemView;
  },

  // Render the child item's view and add it to the
  // HTML for the collection view.
  addItemView: function(item, ItemView, index){
    // get the itemViewOptions if any were specified
    var itemViewOptions = Marionette.getOption(this, "itemViewOptions");
    if (_.isFunction(itemViewOptions)){
      itemViewOptions = itemViewOptions.call(this, item, index);
    }

    // build the view 
    var view = this.buildItemView(item, ItemView, itemViewOptions);
    
    // set up the child view event forwarding
    this.addChildViewEventForwarding(view);

    // this view is about to be added
    this.triggerMethod("before:item:added", view);

    // Store the child view itself so we can properly
    // remove and/or close it later
    this.children.add(view);

    // Render it and show it
    this.renderItemView(view, index);

    // call the "show" method if the collection view
    // has already been shown
    if (this._isShown){
      Marionette.triggerMethod.call(view, "show");
    }

    // this view was added
    this.triggerMethod("after:item:added", view);
  },

  // Set up the child view event forwarding. Uses an "itemview:"
  // prefix in front of all forwarded events.
  addChildViewEventForwarding: function(view){
    var prefix = Marionette.getOption(this, "itemViewEventPrefix");

    // Forward all child item view events through the parent,
    // prepending "itemview:" to the event name
    this.listenTo(view, "all", function(){
      var args = slice(arguments);
      args[0] = prefix + ":" + args[0];
      args.splice(1, 0, view);

      Marionette.triggerMethod.apply(this, args);
    }, this);
  },

  // his.appendHtml(this, view, index);
  },

  // Build an `itemView` for every mod return new ItemViewType(options);
  },

  // get the child view by item it View(view);
    this.checkEmpty();
  },

  // Remove the chiliggerMethod("item:removed", view);
  },

  // helper to show the empty view if the collection is empty
  checkEmpty: function() {
    // check if we're empty now, and if we are, show the
    // empty view
    if (!this.collection || this.collection.length === 0){
      this.showEmptyView();
    }
  },

  // Append the HTML to the collection's `el`.
  // Override this method to do something otctionView.$el.append(itemView.el);
  },

  // Internal method to set up the `children` object for
  // storing all of thnew Backbone.ChildViewContainer();
  },

  // Handle cleanup and other closing needs for
  // the collection of views.
  close: function(){
    if (this.isClosed){ return; }

    this.triggerMethod("collection:before:close");
    this.closeChildren();
    this.triggerMethod("collection:closed");

    Marionette.View.prototype.close.apply(this, slice(arguments));
  },

  // Close the child views that this collection view
  // is   }, this);
    this.checkEmpty();
  }
});


// Composite View
// --------------

// Used for rendering a branch-leaf, hierarchical structure.
// Extends directly from CollectionView and also renders an
// an item view as `modelView`, for the top leaf
Marionette.CompositeView = Marionette.CollectionView.extend({

  // Configured the initial events that the composite view
  // binds to. Override this method to prevent the initial
  // events, or to add your own initial events.
  _initialEvents: function(){
    if (this.collection){
      this.listenTo(this.collection, "add", this.addChildView, this);
      this.listenTo(this.collection, "remove", this.removeItemView, this);
      this.listenTo(this.collection, "reset", this._renderChildren, this);
    }
  },

  // Retrieve the `itemView` to be used when rendering each of
  // the items in the collection. The default is to return
  // `this.itemView` or Marionette.CompositeView if no `itemViewror");
    }

    return itemView;
  },

  // Serialize the collection for the view. 
  // You can override the `serializeData` method in your own view
  // definition, to provide custom serialization .toJSON();
    }

    return data;
  },

  // Renders the model once, and the collection once. Calling
  // this again will tell the model's view to re-render itself
  // but the coriggerRendered();
    return this;
  },

  _renderChildren: function(){
    if (this.isRendered){
      Marionette.CollectionView.prototype._renderChildren.call(this);
      this.triggerMethod("composite:collection:rendered");
    }
  },

  // Render an individual model, if we have one, as
  // part of a composite view (branch / leaf). For exe.Renderer.render(template, data);
  },

  // Appends the `el` of itemView instances to the specified
  // `itemViewContainer` (a jQuery selector). Override this method to
  // provide custom logic of how the child item view instances have their
  // HTML appended to the composite view instance.
  appendHtml: function(cv, iv, index){
    var $container = this.getItemViewContainer(cv);
    $container.append(iv.el);
  },

  // Internal method to ensure an `$itemViewContainer` exists, for the
  // `appendHtml` method to use.
  getItemViewContainer: function(containerView){
    if ("$itemViewContainer" in containerView){
      return containerView.$itemViewContainer;
    }

    var container;
    if (containerView.itemViewContainer){

      var selector = _.result(containerView, "itemViewContainer");
      container = containerView.$(selector);
      if (container.length <= 0) {
        throwError("The specified `itemViewContainer` was not found: " + containerView.itemViewContainer, "ItemViewContainerMissingError");
      }

    } else {
      container = containerView.$el;
    }

    containerView.$itemViewContainer = container;
    return container;
  },

  // Internal method to reset the `$itemViewContaineete this.$itemViewContainer;
    }
  }
});


// Layout
// ------

// Used for managing application layouts, nested layouts and
// multiple regions within an application or sub-application.
//
// A specialized view type that renders an area of HTML and then
// attaches `Region` instances to the specified `regions`.
// Used for composite view management and sub-application areas.
Marionette.Layout = Marionette.ItemView.extend({
  regionType: Marionette.Region,
  
  // Ensure the regions are available when the `initialize`ette.ItemView.call(this, options);
  },

  // Layout's render will use the existing region objects the
  // first time it is called. Subsequent calls will close the
  // views that the regions are showing and then reset the `el`
  // for the regions to the newly rendered DOM elements.
  render: function(){

    if (this._firstRender){
      // if this is the first render, don't do anything to
      // reset the regions
      this._firstRender = false;
    } else if (this.isClosed){
      // a previously closed layout means we need to 
      // completely re-initialize the regions
      this._initializeRegions();
    } else {
      // If this is not the first render call, then we need to 
      // re-initializing the `el` for each region
      this._reInitializeRegions();
    }

    var args = Array.prototype.slice.apply(arguments);
    var result = Marionette.ItemView.prototype.render.apply(this, args);

    return result;
  },

  // Handle closing regions, and then close the view itself.
  close: function () {
    if (this.isClosed){ return; }
    this.regionManager.close();
    var args = Array.prototype.slice.apply(arguments);
    Marionette.ItemView.prototype.close.apply(this, args);
  },

  // Add a single regiorn this.addRegions(regions)[name];
  },

  // Add multiple regions as a {name: definition, name2: def2} object literal
  addRegions: function(regions){
    this.regions = _.extend(this.regions || {}, regions);
    return this._buildRegions(regions);
  },

  // Remove a single region from the Layout, by name
  removeRegion: function(name){
    return this.regionManager.removeRegion(name);
  },

  // internal method to build regions
  _buildRegions: function(regions){
    var that = this;rentEl: function(){ return that.$el; }
    };

    return this.regionManager.addRegions(regions, defaults);
  },

  // Internal method to initialize the regions that have been defined in a
  // `regions` attribute   }

    this.addRegions(regions);
  },

  // Internal method to re-initialize all of the regions by updating the `el` that
  //on){
      region.reset();
    });
  },

  // Internal method to initialize the region manager
  // and aon:remove", name, region);
    });
  }
});


// AppRouter
// ---------

// Reduce the boilerplate code of handling route events
// and then calling a single method on another object.
// Have your routers configured to call the method on
// your object, directly.
//
// Configure an AppRouter with `appRoutes`.
//
// App routers can only take one `controller` object. 
// It is recommended that you divide your controller
// objects in to smaller pieces of related functionality
// and have multiple routers / controllers, instead of
// just one giant router and controller.
//
// You can also add standard routes to an AppRouter.

Marionette.AppRouter = Backbone.Router.extend({

  constructor: function(options){
    Backbone.Router.prototype.constructor.apply(this, slice(arguments));

    this.options = options;

    if (this.appRoutes){
      var controller = Marionette.getOption(this, "controller");
      this.processAppRoutes(controller, this.appRoutes);
    }
  },

  // Internal method to process the `appRoutes` for the
  // router, and turn them in to routes that trigger the
  // specified method on the specified `controller`.
  processAppRoutes: function(controller, appRoutes) {
    var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes

    _.each(routeNames, function(route) {
      var methodName = appRoutes[route];
      var method = controller[methodName];

      if (!method) {
        throw new Error("Method '" + methodName + "' was not found on the controller");
      }

      this.route(route, methodName, _.bind(method, controller));
    }, this);
  }
});


// Application
// -----------

// Contain and manage the composite application as a whole.
// Stores and starts up `Region` objects, includes an
// event aggregator erMethod = Marionette.triggerMethod;
};

_.extend(Marionette.Application.prototype, Backbone.Events, {
  // Command execution, facilitated by Backbone.Wreqr.Commands
  execute: function(){
    var args = Array.prototype.slice.apply(arguments);
    this.commands.execute.apply(this.commands, args);
  },

  // Request/response, facilitated by Backbone.Wreqr.RequestResponse
  request: function(){
    var args = Array.prototype.slice.apply(arguments);
    return this.reqres.request.apply(this.reqres, args);
  },

  // Add an initializer that is either run at when the `start`
  // method is called, or run immediately if added after `start`
  // has already been called.
  addInitializer: function(initializer){
    this._initCallbacks.add(initializer);
  },

  // kick off all of the application's processes.
  // initializes all of the regions that have been added
  // to the app, and runs alls.triggerMethod("start", options);
  },

  // Add regions to your app. 
  // Accepts a hash of named strings or Region objects
  // addRegions({something: "#someRegion"})
  // addRegions({something: Region.extend(regionManager.addRegions(regions);
  },

  // Removes a region from your app.
  // Accepts the regions name
  // removeRegion('myRegion')
  removeRegion: function(region) {
    this._regionManager.removeRegion(region);
  },

  // Create a module, attached to the application
  module: function(moduleNames, moduleDefinition){
    // slice the args, and add this application object as the
    // first argument of the array
    var args = slice(arguments);
    args.unshift(this);

    // see the Marionette.Module object for more information
    return Marionette.Module.create.apply(Marionette.Module, args);
  },

  // Internal method to set up th{
      delete this[name];
    });
  }
});

// Copy the `extend` function used by Backbone's classes
Marionette.Application.extend = Marionette.extend;

// Module
// ------

// A simple module system, used to create privacy and encapsulation in
// Marionette applications
Marionette.Module = function(moduleName, app){
  this.moduleName = moduleName;

  // store sub-modules
  this.submodules = {};

  this._setupInitializersAndFinalizers();

  // store the configuration for this module
  this.app = app;
  this.startWithParent = true;

  this.triggerMethod = Marionette.triggerMethod;
};

// Extend the Module prototype with events / listenTo, so that the module
// can be used as an event aggregator or pub/sub.
_.extend(Marionette.Module.prototype, Backbone.Events, {

  // Initializer for a specific module. Initializers are run when the
  // module's `start` method is called.
  addInitializer: function(callback){
    this._initializerCallbacks.add(callback);
  },

  // Finalizers are run when a module is stopped. They are used to teardown
  // and finalize any variables, references, events and other code that the
  // module had set up.
  addFinalizer: function(callback){
    this._finalizerCallbacks.add(callback);
  },

  // Start the module, ans.triggerMethod("start", options);
  },

  // Stop this module by running its finalizers and then stop all of
  // t.triggerMethod.call(this, "stop");
  },

  // Configure the module with a definition function and any custom args
  // that are to be passed in to thion(moduleDefinition, customArgs);
  },

  // Internal method: run the module definition function with the correct

    definition.apply(this, args);
  },

  // Internal method: set up new copies of initializers and finalizers.
  // Calling this method will wipe out all existing initializers and
  // finalizeacks = new Marionette.Callbacks();
  }
});

// Type methods to create modules
_.extend(Marionette.Module, {

  // Create a module, hanging off the app parameter as the parent object.
  create: function(app, moduleNames, moduleDefinition){
    var module = app;

    // get the custom args passed in after the module definition and
    // get rid of the module name and definition function
    var customArgs = slice(arguments);
    customArgs.splice(0, 3);

    // split the module names and get the length
    moduleNames = moduleNames.split(".");
    var length = moduleNames.length;

    // store the module definition for the last module in the chain
    var moduleDefinitions = [];
    moduleDefinitions[length-1] = moduleDefinition;

    // Loop through all the parts of the module definition
    _.each(moduleNames, function(moduleName, i){
      var parentModule = module;
      module = this._getModule(parentModule, moduleName, app);
      this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
    }, this);

    // Return the last module in the definition chain
    return module;
  },

  _getModule: function(parentModule, moduleName, app, def, args){
    // Get an existing module of this name if we have one
    var module = parentModule[moduleName];

    if (!module){
      // Create a new module if we don't have one
      module = new Marionette.Module(moduleName, app);
      parentModule[moduleName] = module;
      // store the module on the parent
      parentModule.submodules[moduleName] = module;
    }

    return module;
  },

  _addModuleDefinition: function(parentModule, module, def, args){
    var fn; 
    var startWithParent;

    if (_.isFunction(def)){
      // if a function is supplied for the module definition
      fn = def;
      startWithParent = true;

    } else if (_.isObject(def)){
      // if an object is supplied
      fn = def.define;
      startWithParent = def.startWithParent;
      
    } else {
      // if nothing is supplied
      startWithParent = true;
    }

    // add module definition if needed
    if (fn){
      module.addDefinition(fn, args);
    }

    // `and` the two together, ensuring a single `false` will prevent it
    // from starting with the parent
    module.startWithParent = module.startWithParent && startWithParent;

    // setup auto-start if needed
    if (module.startWithParent && !module.startWithParentIsConfigured){

      // only configure this once
      module.startWithParentIsConfigured = true;

      // add the module initializer codule.start(options);
        }
      });

    }

  }
});



  return Marionette;
})(this, Backbone, _);
/*1.0*/
/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 noexpandtab: */
/**
 * Backbone-relational.js 0.7.1
 * (c) 2011-2013 Paul Uithol and contributors (https://github.com/PaulUithol/Backbone-relational/graphs/contributors)
 * 
 * Backbone-relational may be freely distributed under the MIT license; see the accompanying LICENSE.txt.
 * For details and documentation: https://github.com/PaulUithol/Backbone-relational.
 * Depends on Backbone (and thus on Underscore as well): https://github.com/documentcloud/backbone.
 */

( function( undefined ) {
	"use strict";
	
	/**
	 * CommonJS shim
	 **/
	var _, Backbone, exports;
	if ( typeof window === 'undefined' ) {
		_ = require( 'underscore' );
		Backbone = require( 'backbone' );
		exports = module.exports = Backbone;
	}
	else {
		_ = window._;
		Backbone = window.Backbone;
		exports = window;
	}

	Backbone.Relational = {
		showWarnings: true
	};

	/**
	 * Semaphore mixin; can be used as both binary and counting.
	 **/
	Backbone.Semaphore = {
		_permitsAvailable: se {
				this._se {
				this._p{
			return this._permitsUs		this._permitsAvailable = amount;
		}
	};
	
	/**
	 * A BlockingQueue that accumulates items while blocked (via 'block'),
	 * and processes them when unblocked (via 'unblock').
	 * Process can also be called manually (via 'pro = function() {
		this._queue = [];
	};
	_.extend( Backbone.BlockingQueue.prototype, Backbone.);
			}
			else {
				func();
			}
		},
		
		process: function() {
			while ( this._queue && this._queue.length ) {
				this._queue.shift()();
			}
		},
		
		block: function() {ked() ) {
				this.process();
			}
		},
		
		isBlocked: function() {
			return this.isLocked();
		}
	});
	/**
	 * Global event queue. Accumulates external events ('add:<key>', 'remove:<key>' and 'update:<key>')
	 * until the top-level object is fully initialized (see 'Backbone.RelationalModel').
	 */
	Backbone.Relational.eventQueue = new Backbone.BlockingQueue();
	
	/**
	 * Backbone.Store keeps track of all created (and destruction of) Backbone.RelationalModel.
	 * Handles lookup for relations.
	 */
	Backbone.Store = function() {
		this._collections = [];
		this._reverseRelations = [];
		this._subModels = [];
		this._modelScopes = [ exports ];
	};
	_.extend( Backbone.Store.prototype, Backbone.Events, {
		addModelScope: function( scope ) {
			this._modelScopes.push( scope );
		},

		/**
		 * Add a set of subModelTypes to the store, that can be used to resolve the '_superModel'
		 * for a model later in 'setupSuperModel'.
		 *
		 * @param {Backbone.RelationalModel} subModelTypes
		 * @param {Backbone.RelationalModel	'subModels': subModelTypes
			});
		},

		/**
		 * Check if the given modelType is registered as another model's subModel. If so, add it to the super model's
		 * '_subModels', and set the modelType's '_superModel', '_subModelTypeName', and '_subModelTypeAttribute'.
		 *
		 * @param {Backbone.RelationalModel} modelType
		 */
		setupSuperModel: function( modelTypeeturn true;
					}
				}, this );
			}, this );
		},
		
		/**
		 * Add a reverse relation. Is added to the 'relations' property on model's prototype, and to
		 * existing instances of 'model' in the store as well.
		 * @param {Object} relation
		 * @param {Backbone.RelationalModel} relation.model
		 * @param {String} relation.type
		 * @param {String} relation.key
		 * @param {String|Object} relation.relatedModel
		 */
		addReverseRelation: function( relation ) {
			var exists rn val === rel[ key ];
						});
				});
			
			if ( !exists && relation.model && relation.type ) {
				this._reverseRelations.push( relation );
				
				var addRelation = function( model, relation ) {
					if ( !model.prototype.relations ) {
						model.prototype.relations = [];
					}
					model.prototype.relations.push( relation );
				elation( subModel, relation );
						}, this );
				};
				
				addRelation( relation.model, relation );
				
				this.retroFitRelation( relation );
			}
		},
		
		/**
		 * Add a 'relation' to all existing instances of 'relation.model' in the store
		 * @param {Object} relation
		 */
		retroFitRelation: function( relation ) {
			var coll = this.getCollerelation.type( model, relation );
			}, this);
		},
		
		/**
		 * Find the Store's collection for a certain type of model.
		 * @param {Backbone.RelationalModel} model
		 * @return {Backbone.Collection} A collection if found (or applicable for 'model'), or null
		 */
		getCollection: function( model ) {
			if ( model instanceof Backbone.RelationalModel ) {
				model = model.constructor;
			}
			
			var rootModel = model;
			while ( rootModel._superModel ) {
				rootModel = rootModel._superModel;
			}
			
			v				return c.model === rootModel;
			});
			
			if ( !coll ) {
				coll = this._createCollection( rootModel );
			}
			
			return coll;
		},
		
		/**
		 * Find a type on the global object by name. Splits name on dots.
		 * @param {String} name
		 * @return {Object}
		 */
		getObjectByName: function( name ) {
			var parts = name.split( '.' ),
				type = nullscope ) {
					return true;
				}
			}, this );

			ret( coll );
			}
			
			return coll;
		},

		/**
		 * Find the attribute that is to be used as the `id` on a given object
		 * @param type
		 * @param {String|Number|Object|Backbone.RelationalModel} item
		 * @return {String|Number}
		 */
		resolveIdForItem: function( type, item ) {
			var id = _.isString( item ) || _.isNumber( item ) ? item : null;

			if ( id === null ) {
				if ( item instanceof Backbone.RelationalModel ) {
					id = item.id;
				}
				else if ( _.isObject( item ) ) {
					id = item[ type.prototype.idAttribute ];
				}
			}

			// Make all falsy values `null` (except for 0, which could be an id.. see '/issues/179')
			if ( !id && id !== 0 ) {
				id = null;
			}

			return id;
		},

		/**
		 *
		 * @param type
		 * @param {String|Number|Object|Backbone.RelationalModel} item
		 */
		find: function( type, item ) {
			var id = this.resolveIdForItem( type, item );
			var coll = this.getCollection( type );
			
			// Because the found object could be of any of the type's superModel
			// types, only return it if it's actually of the type asked for.
			if ( coll ) {
				var obj = coll.get( id );

				if ( obj instanceof type ) {
					return obj;
				}
			}

			return null;
		},
		
		/**
		 * Add a 'model' to it's appropriate collection. Retain the original contents of 'model.collection'.
		 * @param {Backbone.RelationalModel} model
		 */
		register: function( model ) {
			var coll = this.getCollection( model );

			if ( coll ) {
				if ( coll.get( model ) ) {
					if ( Backbone.Relational.showWarnings && typeof console !== 'undefined' ) {
						console.warn( 'Duplicate id! Old RelationalModel:%o, New RelationalModel:%o', coll.get( model ), model );
					}
					throw new Error( "Cannot instantiate more than one Backbone.RelationalModel with the same id per type!" );
				}

				var modelColl = model.collection;
				coll.add( model );
				model.bind( 'destroy', this.unregister, this );
				model.collection = modelColl;
			}
		},
		
		/**
		 * Explicitly update a model's id in it's store collection
		 * @param {Backbone.RelationalModel} model
		 */
		update: function( model ) {
			var coll = this.getCollection( model );
			coll._onModelEvent( 'change:' + model.idAttribute, model, coll );
		},
		
		/**
		 * Remove a 'model' from the store.
		 * @param {Backbone.RelationalModel} model
		 */
		unregister: function( model ) {
			model.unbind( 'destroy', this.unregister );
			var coll = this.getCollection( model );
			coll && coll.remove( model );
		}
	});
	Backbone.Relational.store = new Backbone.Store();
	
	/**
	 * The main Relation class, from which 'HasOne' and 'HasMany' inherit. Internally, 'relational:<key>' events
	 * are used to regulate addition and removal of models from relations.
	 *
	 * @param {Backbone.RelationalModel} instance
	 * @param {Object} options
	 * @param {string} options.key
	 * @param {Backbone.RelationalModel.constructor} options.relatedModel
	 * @param {Boolean|String} [options.includeInJSON=true] Serialize the given attribute for related model(s)' in toJSON, or just their ids.
	 * @param {Boolean} [options.createModels=true] Create objects from the contents of keys if the object is not found in Backbone.store.
	 * @param {Object} [options.reverseRelation] Specify a bi-directional relation. If provided, Relation will reciprocate
	 *    the relation to the 'relatedModel'. Required and optional properties match 'options', except that it also needs
	 *    {Backbone.Relation|String} type ('HasOne' or 'HasMany').
	 */
	Backbone.Relation = function( instance, options ) {
		this.instance = instance;
		// Make sure 'options' is sane, and fill with defaults from subclasses and this object's prototype
		options = _.isObject( options ) ? options : {};
		this.reverseRelation = _.defaults( options.reverseRelation || {}, this.options.reverseRelation );
		this.reverseRelation.type = !_.isString( this.reverseRelation.type ) ? this.reverseRelation.type :
			Backbone[ this.reverseRelation.type ] || Backbone.Relational.store.getObjectByName( this.reverseRelation.type );
		this.model = options.model || this.instance.constructor;
		this.options = _.defaults( options, this.options, Backbone.Relation.prototype.options );
		
		this.key = this.options.key;
		this.keySource = this.options.keySource || this.key;
		this.keyDestination = this.options.keyDestination || this.keySource || this.key;

		// 'exports' should be the global object where 'relatedModel' can be found on if given as a string.
		this.relatedModel = this.options.relatedModel;
		if ( _.isString( this.relatedModel ) ) {
			this.relatedModel = Backbone.Relational.store.getObjectByName( this.relatedModel );
		}

		if ( !this.checkPreconditions() ) {
			return;
		}

		if ( instance ) {
			var contentKey = this.keySource;
			if ( contentKey !== this.key && typeof this.instance.get( this.key ) === 'object' ) {
				contentKey = this.key;
			}

			this.keyContents = this.instance.get( contentKey );

			// Explicitly clear 'keySource', to prevent a leaky abstraction if 'keySource' differs from 'key'.
			if ( this.keySource !== this.key ) {
				this.instance.unset( this.keySource, { silent: true } );
			}

			// Add this Relation to instance._relations
			this.instance._relations.push( this );
		}

		// Add the reverse relation on 'relatedModel' to the store's reverseRelations
		if ( !this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key ) {
			Backbone.Relational.store.addReverseRelation( _.defaults( {
					isAutoRelation: true,
					model: this.relatedModel,
					relatedModel: this.model,
					reverseRelation: this.options // current relation is the 'reverseRelation' for it's own reverseRelation
				},
				this.reverseRelation // Take further properties from this.reverseRelation (type, key, etc.)
			) );
		}

		_.bindAll( this, '_modelRemovedFromCollection', '_relatedModelAdded', '_relatedModelRemoved' );

		if ( instance ) {
			this.initialize();

			if ( options.autoFetch ) {
				this.instance.fetchRelated( options.key, _.isObject( options.autoFetch ) ? options.autoFetch : {} );
			}

			// When a model in the store is destroyed, check if it is 'this.instance'.
			Backbone.Relational.store.getCollection( this.instance )
				.bind( 'relational:remove', this._modelRemovedFromCollection );

			// When 'relatedModel' are created or destroyed, check if it affects this relation.
			Backbone.Relational.store.getCollection( this.relatedModel )
				.bind( 'relational:add', this._relatedModelAdded )
				.bind( 'relational:remove', this._relatedModelRemoved );
		}
	};
	// Fix inheritance :\
	Backbone.Relation.extend = Backbone.Model.extend;
	// Set up all inheritable **Backbone.Relation** properties and methods.
	_.extend( Backbone.Relation.prototype, Backbone.Events, Backbone.Semaphore, {
		options: {
			createModels: true,
			includeInJSON: true,
			isAutoRelation: false,
			autoFetch: false
		},
		
		instance: null,
		key: null,
		keyContents: null,
		relatedModel: null,
		reverseRelation: null,
		related: null,
		
		_relatedModelAdded: function( model, coll, options ) {
			// Allow 'model' to set up it's relations, before calling 'tryAddRelated'
			// (which can result in a call to 'addRelated' on a relation of 'model')
			var dit = this;
			model.queue( function() {
				dit.tryAddRelated( model, options );
s.removeRelated( model, options );
		},
		
		_modelRemovedFromCollection: function( model ) {
			if ( model === this.instance ) {
				this.destroy();
			}
		},
		
		/**
		 * Check several pre-conditions.
		 * @return {Boolean} True if pre-conditions are satisfied, false if they're not.
		 */
		checkPreconditions: function() {
			var i = this.instance,
				k = this.key,
				m = this.model,
				rm = this.relatedModel,
				warn = Backbone.Relational.showWarnings && typeof console !== 'undefined';

			if ( !m || !k || !rm ) {
				warn && console.warn( 'Relation=%o; no model, key or relatedModel (%o, %o, %o)', this, m, k, rm );
				return false;
			}
			// Check if the type in 'model' inherits from Backbone.RelationalModel
			if ( !( m.prototype instanceof Backbone.RelationalModel ) ) {
				warn && console.warn( 'Relation=%o; model does not inherit from Backbone.RelationalModel (%o)', this, i );
				return false;
			}
			// Check if the type in 'relatedModel' inherits from Backbone.RelationalModel
			if ( !( rm.prototype instanceof Backbone.RelationalModel ) ) {
				warn && console.warn( 'Relation=%o; relatedModel does not inherit from Backbone.RelationalModel (%o)', this, rm );
				return false;
			}
			// Check if this is not a HasMany, and the reverse relation is HasMany as well
			if ( this instanceof Backbone.HasMany && this.reverseRelation.type === Backbone.HasMany ) {
				warn && console.warn( 'Relation=%o; relation is a HasMany, and the reverseRelation is HasMany as well.', this );
				return false;
			}

			// Check if we're not attempting to create a duplicate relationship
			if ( i && i._relations.length ) {
				var exists = _.any( i._relations || [], function( rel ) {
						var hasReverseRelation = this.reverseRelation.key && rel.reverseRelation.key;
						return rel.relatedModel === rm && rel.key === k &&
							( !hasReverseRelation || this.reverseRelation.key === rel.reverseRelation.key );
					}, this );

				if ( exists ) {
					warn && console.warn( 'Relation=%o between instance=%o.%s and relatedModel=%o.%s already exists',
						this, i, k, rm, this.reverseRelation.key );
					return false;
				}
			}

			return true;
		},

		/**
		 * Set the related model(s) for this relation
		 * @param {Backbone.Model|Backbone.Collection} related
		 * @param {Object} [options]
		 */
		setRelated: function( related, options ) {
			this.related = related;

			this.instance.acquire();
			this.instance.attributes[ this.key ] = related;
			this.instance.release();
		},
		
		/**
		 * Determine if a relation (on a different RelationalModel) is the reverse
		 * relation of the current one.
		 * @param {Backbone.Relation} relation
		 * @return {Boolean}
		 */
		_isReverseRelation: function( relation ) {
			if ( relation.instance instanceof this.relatedModel && this.reverseRelation.key === relation.key &&
					this.key === relation.reverseRelation.key ) {
				return true;
			}
			return false;
		},
		
		/**
		 * Get the reverse relations (pointing back to 'this.key' on 'this.instance') for the currently related model(s).
		 * @param {Backbone.RelationalModel} [model] Get the reverse relations for a specific model.
		 *    If not specified, 'this.related' is used.
		 * @return {Backbone.Re);
			
			return reverseRelations;
		},
		
		/**
		 * Rename options.silent to options.silentChange, so events propagate properly.
		 * (for example in HasMany, from 'addRelated'->'handleAddition')
		 * @param {Object} [options]
		 * @return {Object}
		 */
		sanitizeOptions: function( options ) {
			options = options ? _.clone( options ) : {};
			if ( options.silent ) {
				options.silentChange = true;
				delete options.silent;
			}
			return options;
		},

		/**
		 * Rename options.silentChange to options.silent, so events are silenced as intended in Backbone's
		 * original functions.
		 * @param {Object} [options]
		 * @return {Object}
		 */
		unsanitizeOptions: function( options ) {
			options = options ? _.clone( options ) : {};
			if ( options.silentChange ) {
				options.silent = true;
				delete options.silentChange;
			}
			return options;
		},
		
		// Cleanup. Get reverse relation, call removeRelated on each.
		destroy: function() {
			Backbone.Relational.store.getCollection( this.instance )
				.unbind( 'relational:remove', this._modelRemovedFromCollection );
			
			Backbone.Relational.store.getCollection( this.relatedModel )
				.unbind( 'relational:add', this._relatedModelAdded )
				.unbind( 'relational:remove', this._relatedModelRemoved );
			
			_.each( this.getReverseRelations() || [], function( relation ) {
					relation.removeRelated( this.instance );
				}, this );
		}
	});
	
	Backbone.HasOne = Backbone.Relation.extend({
		options: {
			reverseRelation: { type: 'HasMany' }
		},
		
		initialize: function() {
			_.bindAll( this, 'onChange' );

			this.instance.bind( 'relational:change:' + this.key, this.onChange );

			var model = this.findRelated( { silent: true } );
			this.setRelated( model );

			// Notify new 'related' object of the new relation.
			_.eion.addRelated( this.instance );
				}, this );
		},
		
		findRelated: function( options ) {
			var item = this.keyContents;
			var model = null;
			
			if ( item instanceof this.relatedModel ) {
				model = item;
			}
			else if ( item || item === 0 ) { // since 0 can be a valid `id` as well
				model = this.relatedModel.findOrCreate( item, { create: this.options.createModels } );
			}
			
			return model;
		},
		
		/**
		 * If the key is changed, notify old & new reverse relations and initialize the new relation
		 */
		onChange: function( model, attr, options ) {
			// Don't accept recursive calls to onChange (like onChange->findRelated->findOrCreate->initializeRelations->addRelated->onChange)
			if ( this.isLocked() ) {
				return;
			}
			this.acquire();
			options = this.sanitizeOptions( options );
			
			// 'options._related' is set by 'addRelated'/'removeRelated'. If it is set, the change
			// is the result of a call from a relation. If it's not, the change is the result of 
			// a 'set' call on this.instance.
			var changed = _.isUndefined( options._related );
			var oldRelated = changed ? this.related : options._related;
			
			if ( changed ) {	
				this.keyContents = attr;
				
				// Set new 'related'
				if ( attr instanceof this.relatedModel ) {
					this.related = attr;
				}
				else if ( attr ) {
					var related = this.findRelated( options );
					this.setRelated( related );
				}
				else {
					this.setRelated( null );
				}
			}
			
			// Notify old 'related' object of the terminated relation
			if ( oldRelated && this.related !== oldRelated ) {
				_.each( this.getReverseRelations( oldRelated ) || [], function( relation ) {
						relation.removeRelated( this.instance, options );
					}, this );
			}
			
			// Notify new 'related' object of the new relation. Note we do re-apply even if this.related is oldRelated;
			// that can be necessary for bi-directional relations if 'this.instance' was created after 'this.related'.
			// In that case, 'this.instance' will already know 'this.related', but the reverse might not exist yet.
			_.each( this.getReverseRelations() || [], function( relation ) {
					relation.addRelated( this.instance, options );
				}, this);
			
			// Fire the 'update:<key>' event if 'related' was updated
			if ( !options.silentChange && this.related !== oldRelated ) {
				var dit = this;
				Backbone.Relational.eventQueue.add( function() {
					dit.instance.trigger( 'update:' + dit.key, dit.instance, dit.related, options );
				});
			}
			this.release();
		},
		
		/**
		 * If a new 'this.relatedModel' appears in the 'store', try to match it to the last set 'keyContents'
		 */
		tryAddRelated: function( model, options ) {
			if ( this.related ) {
				return;
			}
			options = this.sanitizeOptions( options );
			
			var item = this.keyContents;
			if ( item || item === 0 ) { // since 0 can be a valid `id` as well
				var id = Backbone.Relational.store.resolveIdForItem( this.relatedModel, item );
				if ( !_.isNull( id ) && model.id === id ) {
					this.addRelated( model, options );
				}
			}
		},
		
		addRelated: function( model, options ) {
			if ( model !== this.related ) {
				var oldRelated = this.related || null;
				this.setRelated( model );
				this.onChange( this.instance, model, { _related: oldRelated } );
			}
		},
		
		removeRelated: function( model, options ) {
			if ( !this.related ) {
				return;
			}
			
			if ( model === this.related ) {
				var oldRelated = this.related || null;
				this.setRelated( null );
				this.onChange( this.instance, model, { _related: oldRelated } );
			}
		}
	});
	
	Backbone.HasMany = Backbone.Relation.extend({
		collectionType: null,
		
		options: {
			reverseRelation: { type: 'HasOne' },
			collectionType: Backbone.Collection,
			collectionKey: true,
			collectionOptions: {}
		},
		
		initialize: function() {
			_.bindAll( this, 'onChange', 'handleAddition', 'handleRemoval', 'handleReset' );
			this.instance.bind( 'relational:change:' + this.key, this.onChange );
			
			// Handle a custom 'collectionType'
			this.collectionType = this.options.collectionType;
			if ( _.isString( this.collectionType ) ) {
				this.collectionType = Backbone.Relational.store.getObjectByName( this.collectionType );
			}
			if ( !this.collectionType.prototype instanceof Backbone.Collection ){
				throw new Error( 'collectionType must inherit from Backbone.Collection' );
			}

			// Handle cases where a model/relation is created with a collection passed straight into 'attributes'
			if ( this.keyContents instanceof Backbone.Collection ) {
				this.setRelated( this._prepareCollection( this.keyContents ) );
			}
			else {
				this.setRelated( this._prepareCollection() );
			}

			this.findRelated( { silent: true } );
		},
		
		_getCollectionOptions: function() {
			return _.isFunction( this.options.collectionOptions ) ?
				this.options.collectionOptions( this.instance ) :
				this.options.collectionOptions;
		},

		/**
		 * Bind events and setup collectionKeys for a collection that is to be used as the backing store for a HasMany.
		 * If no 'collection' is supplied, a new collection will be created of the specified 'collectionType' option.
		 * @param {Backbone.Collection} [collection]
		 */
		_prepareCollection: function( collection ) {
			if ( this.related ) {
				this.related
					.unbind( 'relational:add', this.handleAddition )
					.unbind( 'relational:remove', this.handleRemoval )
					.unbind( 'relational:reset', this.handleReset )
			}

			if ( !collection || !( collection instanceof Backbone.Collection ) ) {
				collection = new this.collectionType( [], this._getCollectionOptions() );
			}

			collection.model = this.relatedModel;
			
			if ( this.options.collectionKey ) {
				var key = this.options.collectionKey === true ? this.options.reverseRelation.key : this.options.collectionKey;
				
				if ( collection[ key ] && collection[ key ] !== this.instance ) {
					if ( Backbone.Relational.showWarnings && typeof console !== 'undefined' ) {
						console.warn( 'Relation=%o; collectionKey=%s already exists on collection=%o', this, key, this.options.collectionKey );
					}
				}
				else if ( key ) {
					collection[ key ] = this.instance;
				}
			}
			
			collection
				.bind( 'relational:add', this.handleAddition )
				.bind( 'relational:remove', this.handleRemoval )
				.bind( 'relational:reset', this.handleReset );
			
			return collection;
		},
		
		findRelated: function( options ) {
			if ( this.keyContents ) {
				var models = [];

				if ( this.keyContents instanceof Backbone.Collection ) {
					models = this.keyContents.models;
				}
				else {
					// Handle cases the an API/user supplies just an Object/id instead of an Array
					this.keyContents = _.isArray( this.keyContents ) ? this.keyContents : [ this.keyContents ];

					// Try to find instances of the appropriate 'relatedModel' in the store
					_.each( this.keyContents || [], function( item ) {
							var model = null;
							if ( item instanceof this.relatedModel ) {
								model = item;
							}
							else if ( item || item === 0 ) { // since 0 can be a valid `id` as well
								model = this.relatedModel.findOrCreate( item, { create: this.options.createModels } );
							}

							if ( model && !this.related.get( model ) ) {
								models.push( model );
							}
						}, this );
				}

				// Add all found 'models' in on go, so 'add' will only be called once (and thus 'sort', etc.)
				if ( models.length ) {
					options = this.unsanitizeOptions( options );
					this.related.add( models, options );
				}
			}
		},
		
		/**
		 * If the key is changed, notify old & new reverse relations and initialize the new relation
		 */
		onChange: function( model, attr, options ) {
			options = this.sanitizeOptions( options );
			this.keyContents = attr;
			
			// Replace 'this.related' by 'attr' if it is a Backbone.Collection
			if ( attr instanceof Backbone.Collection ) {
				this._prepareCollection( attr );
				this.related = attr;
			}
			// Otherwise, 'attr' should be an array of related object ids.
			// Re-use the current 'this.related' if it is a Backbone.Collection, and remove any current entries.
			// Otherwise, create a new collection.
			else {
				var oldIds = {}, newIds = {};

				if (!_.isArray( attr ) && attr !== undefined) {
					att	newIds[ attributes.id ] = true;
				});

				var coll = this.related;
				if ( coll instanceof Backbone.Collection ) {
					// Make sure to operate on a copy since we're removing while iterating
					_.each( coll.models.slice(0) , function( model ) {
						// When fetch is called with the 'keepNewModels' option, we don't want to remove
						// client-created new models when the fetch is completed.
						if ( !options.keepNewModels || !model.isNew() ) {
							oldIds[ model.id ] = true;
							coll.remove( model, { silent: (model.id in newIds) } );
						}
					});
				} else {
					coll = this._prepareCollection();
				}

				_.each( attr, function( attributes ) {
          //silently create new models, to avoid 'add' events on the collection due to the reverseRelationship
					var model = this.relatedModel.findOrCreate( attributes, { create: this.options.createModels, silent: true } );
					if (model) {
						coll.add( model, { silent: (model.id in oldIds)} );
					}
				}, this);

				this.setRelated( coll );

			}
			
			var dit = this;
			Backbone.Relational.eventQueue.add( function() {
				!options.silentChange && dit.instance.trigger( 'update:' + dit.key, dit.instance, dit.related, options );
			});
		},
		
		tryAddRelated: function( model, options ) {
			options = this.sanitizeOptions( options );
			if ( !this.related.get( model ) ) {
				// Check if this new model was specified in 'this.keyContents'
				var item = _.any( this.keyContents || [], function( item ) {
						var id = Backbone.Relational.store.resolveIdForItem( this.relatedModel, item );
						return !_.isNull( id ) && id === model.id;
					}, this );
				
				if ( item ) {
					this.related.add( model, options );
				}
			}
		},
		
		/**
		 * When a model is added to a 'HasMany', trigger 'add' on 'this.instance' and notify reverse relations.
		 * (should be 'HasOne', must set 'this.instance' as their related).
		 */
		handleAddition: function( model, coll, options ) {
			//console.debug('handleAddition called; args=%o', arguments);
			// Make sure the model is in fact a valid model before continuing.
			// (it can be invalid as a result of failing validation in Backbone.Collection._prepareModel)
			if ( !( model instanceof Backbone.Model ) ) {
				return;
			}
			
			options = this.sanitizeOptions( options );
			
			_.each( this.getReverseRelations( model ) || [], function( relation ) {
					relation.addRelated( this.instance, options );
				}, this );

			// Only trigger 'add' once the newly added model is initialized (so, has it's relations set up)
			var dit = this;
			Backbone.Relational.eventQueue.add( function() {
				!options.silentChange && dit.instance.trigger( 'add:' + dit.key, model, dit.related, options );
			});
		},
		
		/**
		 * When a model is removed from a 'HasMany', trigger 'remove' on 'this.instance' and notify reverse relations.
		 * (should be 'HasOne', which should be nullified)
		 */
		handleRemoval: function( model, coll, options ) {
			//console.debug('handleRemoval called; args=%o', arguments);
			if ( !( model instanceof Backbone.Model ) ) {
				return;
			}

			options = this.sanitizeOptions( options );
			
			_.each( thlated( this.instance, options );
				}, this );
			
			var dit = this;
			Backbone.Relational.eventQueue.add( function() {
				!options.silentChange && dit.instance.trigger( 'remove:' + dit.key, model, dit.related, options );
			});
		},

		handleReset: function( coll, options ) {
			options = this.sanitizeOptions( options );

			var dit = this;
			Backbone.Relational.eventQueue.add( function() {
				!options.silentChange && dit.instance.trigger( 'reset:' + dit.key, dit.related, options );
			});
		},
		
		addRelated: function( model, options ) {
			var dit = this;
			options = this.unsanitizeOptions( options );
			model.queue( function() { // Queued to avoid errors for adding 'model' to the 'this.related' set twice
				if ( dit.related && !dit.related.get( model ) ) {
					dit.related.add( model, options );
				}
			});
		},
		
		removeRelated: function( model, options ) {
			options = this.unsanitizeOptions( options );
			if ( this.related.get( model ) ) {
				this.related.remove( model, options );
			}
		}
	});
	
	/**
	 * A type of Backbone.Model that also maintains relations to other models and collections.
	 * New events when compared to the original:
	 *  - 'add:<key>' (model, related collection, options)
	 *  - 'remove:<key>' (model, related collection, options)
	 *  - 'update:<key>' (model, related model or collection, options)
	 */
	Backbone.RelationalModel = Backbone.Model.extend({
		relations: null, // Relation descriptions on the prototype
		_relations: null, // Relation instances
		_isInitialized: false,
		_deferProcessing: false,
		_queue: null,
		
		subModelTypeAttribute: 'type',
		subModelTypes: null,
		
		constructor: function( attributes, options ) {
			// Nasty hack, for cases like 'model.get( <HasMany key> ).add( item )'.
			// Defer 'processQueue', so that when 'Relation.createModels' is used we:
			// a) Survive 'Backbone.Collection.add'; this takes care we won't error on "can't add model to a set twice"
			//    (by creating a model from properties, having the model add itself to the collection via one of
			//    it's relations, then trying to add it to the collection).
			// b) Trigger 'HasMany' collection events only after the model is really fully set up.
			// Example that triggers both a and b: "p.get('jobs').add( { company: c, person: p } )".
			var dit = this;
			if ( options && options.collection ) {
				this._deferProcessing = true;
				
				var processQueue = function( model ) {
					if ( model === dit ) {
						dit._deferProcessing = false;
						dit.processQueue();
						options.collection.unbind( 'relational:add', processQueue );
					}
				};
				options.collection.bind( 'relational:add', processQueue );
				
				// So we do process the queue eventually, regardless of whether this model really gets added to 'options.collection'.
				_.defer( function() {
					processQueue( dit );
				});
			}
			
			this._queue = new Backbone.BlockingQueue();
			this._queue.block();
			Backbone.Relational.eventQueue.block();
			
			Backbone.Model.apply( this, arguments );
			
			// Try to run the global queue holding external events
			Backbone.Relational.eventQueue.unblock();
		},
		
		/**
		 * Override 'trigger' to queue 'change' and 'change:*' events
		 */
		trigger: function( eventName ) {
			if ( eventName.length > 5 && 'change' === eventName.substr( 0, 6 ) ) {
				var dit = this, args = arguments;
	ype.trigger.apply( dit, args );
					});
			}
			else {
				Backbone.Model.prototype.trigger.apply( this, arguments );
			}
			
			return this;
		},
		
		/**
		 * Initialize Relations present in this.relations; determine the type (HasOne/HasMany), then creates a new instance.
		 * Invoked in the first call so 'set' (which is made from the Backbone.Model constructor).
		 */
		initializeRelations: function() {
			this.acquire(); // Setting up relations often also involve calls to 'set', and we only want to enter this function once
			this._relations = [];
			
			_.each( this.relations || [], function( rel ) {
					var type = !_.isString( rel.type ) ? rel.type :	Backbone[ rel.type ] || Backbone.Relational.store.getObjectByName( rel.type );
					if ( type && type.prototype instanceof Backbone.Relation ) {
						new type( this, rel ); // Also pushes the new Relation into _relations
					}
					else {
						Backbone.Relational.showWarnings && typeof console !== 'undefined' && console.warn( 'Relation=%o; missing or invalid type!', rel );
					}
				}, this );
			
			this._isInitialized = true;
			this.release();
			this.processQueue();
		},

		/**
		 * When new values are set, notify this model's relations (also if options.silent is set).
		 * (Relation.setRelated locks this model before calling 'set' on it to prevent loops)
		 */
		updateRelations: function( options ) {
			if ( this._isInitialized && !this.isLocked() ) {
				_.each( this._relations || [], function( rel ) {
					// Update from data in `rel.keySource` if set, or `rel.key` otherwise
					var val = this.attributes[ rel.keySource ] || this.attributes[ rel.key ];
					if ( rel.related !== val ) {
						this.trigger( 'relational:change:' + rel.key, this, val, options || {} );
					}
				}, this );
			}
		},
		
		/**
		 * Either add to the queue (if we're not initialized yet), or execute right away.
		 */
		queue: function( func ) {
			this._queue.add( func );
		},
		
		/**
		  {
				this._queue.unblock();
			}
		},
		
		/**
		 * Get a specific relation.
		 * @param key {string} The relation key to look for.
		 * @return {Backbone.Relation} An instance of 'Backbone.Relation', if a relation was found for 'key', or null.
		 */
		getRelation: function( key ) {
			return _.detect( this._relations, function( rel ) {
				if ( rel.key === key ) {
					return true;
				}
			}, this );
		},
		
		/**
		 * Get all of the created relations.
		 * @return {Backbone.Relation[]}
		 */
		getRelations: function() {
			return this._relations;
		},
		
		/**
		 * Retrieve related objects.
		 * @param key {string} The relation key to fetch models for.
		 * @param [options] {Object} Options for 'Backbone.Model.fetch' and 'Backbone.sync'.
		 * @param [update=false] {boolean} Whether to force a fetch from the server (updating existing models).
		 * @return {jQuery.when[]} An array of request objects
		 */
		fetchRelated: function( key, options, update ) {
			options || ( options = {} );
			var setUrl,
				requests = [],
				rel = this.getRelation( key ),
				keyContents = rel && rel.keyContents,
				toFetch = keyContents && _.select( _.isArray( keyContents ) ? keyContents : [ keyContents ], function( item ) {
					var id = Backbone.Relational.store.resolveIdForItem( rel.relatedModel, item );
					return !_.isNull( id ) && ( update || !Backbone.Relational.store.find( rel.relatedModel, id ) );
				}, this );
			
			if ( toFetch && toFetch.length ) {
				// Create a model for each entry in 'keyContents' that is to be fetched
				var models = _.map( toFetch, function( item ) {
					var model;

					if ( _.isObject( item ) ) {
						model = rel.relatedModel.findOrCreate( item );
					}
					else {
						var attrs = {};
						attrs[ rel.relatedModel.prototype.idAttribute ] = item;
						model = rel.relatedModel.findOrCreate( attrs );
					}

					return model;
				}, this );
				
				// Try if the 'collection' can provide a url to fetch a set of models in one request.
				if ( rel.related instanceof Backbone.Collection && _.isFunction( rel.related.url ) ) {
					setUrl = rel.related.url( models );
				}
				
				// An assumption is that when 'Backbone.Collection.url' is a function, it can handle building of set urls.
				// To make sure it can, test if the url we got by supplying a list of models to fetch is different from
				// the one supplied for the default fetch action (without args to 'url').
				if ( setUrl && setUrl !== rel.related.url() ) {
					var opts = _.defaults(
						{
							error: function() {
								var args = arerror.apply( model, args );
									});
							},
							url: setUrl
						},
						options,
						{ add: true }
					);

					requests = [ rel.related.fetch( opts ) ];
				}
				else {
					requests = _.map( models || [], function( model ) {
						var opts = _.defaults(
							{
								error: function() {
									model.trigger( 'destroy', model, model.collection, options );
									options.error && options.error.apply( model, arguments );
								}
							},
							options
						);
						return model.fetch( opts );
					}, this );
				}
			}
			
			return requests;
		},


		get: function(attr){
			var get = Backbone.Model.prototype.get;
			var originalResult = get.call( this, attr );
			var splits = attr.split(".");

			// use default get if dotNotation not enabled or not required because no dot is in the argument
			if( !this.dotNotation || splits.length === 1 ) {
				return originalResult;
			}

			// go throw all splits and return the final result
			var result = _.reduce(splits, function(model, split){
					if( !(model instanceof Backbone.Model) ) {
						throw new Error( "attribute must be instanceof Backbone.Model. Is: " + model + ", currentSplit: " + split );
					}

					return get.call(model, split);
				}, this);
			
			if( originalResult !== undefined && result !== undefined ){
				throw new Error( "ambiguous result for '" + attr + "'. direct result: " + originalResult + ", dotNotation: " + result );
			}

			return originalResult || result;
		},

		
		set: function( key, value, options ) {
			Backbone.Relational.eventQueue.block();
			
			// Duplicate backbone's behavior to allow separate key/value parameters, instead of a single 'attributes' object
			var attributes;
			if ( _.isObject( key ) || key == null ) {
				attributes = key;
				options = value;
			}
			else {
				attributes = {};
				attributes[ key ] = value;
			}
			
			var result = Backbone.Model.prototype.set.apply( this, arguments );
			
			// Ideal place to set up relations :)
			if ( !this._isInitialized && !this.isLocked() ) {
				this.constructor.initializeModelHierarchy();

				Backbone.Relational.store.register( this );

				this.initializeRelations();
			}
			// Update the 'idAttribute' in Backbone.store if; we don't want it to miss an 'id' update due to {silent:true}
			else if ( attributes && this.idAttribute in attributes ) {
				Backbone.Relational.store.update( this );
			}
			
			if ( attributes ) {
				this.updateRelations( options );
			}
			
			// Try to run the global queue holding external events
			Backbone.Relational.eventQueue.unblock();
			
			return result;
		},
		
		unset: function( attribute, options ) {
			Backbone.Relational.eventQueue.block();
			
			var result = Backbone.Model.prototype.unset.apply( this, arguments );
			this.updateRelations( options );
			
			// Try to run the global queue holding external events
			Backbone.Relational.eventQueue.unblock();
			
			return result;
		},
		
		clear: function( options ) {
			Backbone.Relational.eventQueue.block();
			
			var result = Backbone.Model.prototype.clear.apply( this, arguments );
			this.updateRelations( options );
			
			// Try to run the global queue holding external events
			Backbone.Relational.eventQueue.unblock();
			
			return result;
		},

		clone: function() {
			var attributes = _.clone( this.attributes );
			if ( !_.isUndefined( attributes[ this.idAttribute ] ) ) {
				attributes[ this.idAttribute ] = null;
			}
			delete attributes[ rel.key ];
				});

			return new this.constructor( attributes );
		},
		
		/**
		 * Convert relations to JSON, omits them when required
		 */
		toJSON: function(options) {
			// If this Model has already been fully serialized in this branch once, return to avoid loops
			if ( this.isLocked() ) {
				return this.id;
			}
			
			this.acquire();
			var json = Backbone.Model.prototype.toJSON.call( this, options );
			
			if ( this.constructor._superModel && !( this.constructor._subModelTypeAttribute in json ) ) {
				json[ this.constructor._subModelTypeAttribute ] = this.constructor._subModelTypeValue;
			}
			
			_.each( this._relations || [], function( rel ) {
					var value = json[ rel.key ];

					if ( rel.options.includeInJSON === true) {
						if ( value && _.isFunction( value.toJSON ) ) {
							json[ rel.keyDestination ] = value.toJSON( options );
						}
						else {
							json[ rel.keyDestination ] = null;
						}
					}
					else if ( _.isString( rel.options.includeInJSON ) ) {
						if ( value instanceof Backbone.Collection ) {
							json[ rel.keyDestination ] = value.pluck( rel.options.includeInJSON );
						}
						else if ( value instanceof Backbone.Model ) {
							json[ rel.keyDestination ] = value.get( rel.options.includeInJSON );
						}	
						else {
							json[ rel.keyDestination ] = null;
						}
					}
					else if ( _.isArray( rel.options.includeInJSON ) ) {
						if ( value instanceof Backbone.Collection ) {
							var valueSub = [];
							value.each( function( model ) {
								var curJson = {};
								_.each( rel.options.includeInJSON, function( key ) {
									curJson[ key ] = model.get( key );
								});
								valueSub.push( curJson );
							});
							json[ rel.keyDestination ] = valueSub;
						}
						else if ( value instanceof Backbone.Model ) {
							var valueSub = {};
			ub[ key ] = value.get( key );
							});
							json[ rel.keyDestination ] = valueSub;
						}
						else {
							json[ rel.keyDestination ] = null;
						}
					}
					else {
						delete json[ rel.key ];
					}

					if ( rel.keyDestination !== rel.key ) {
						delete json[ rel.key ];
					}
				});
			
			this.release();
			return json;
		}
	},
	{
		setup: function( superModel ) {
			// We don't want to share a relations array with a parent, as this will cause problems with
			// reverse relations.
			this.prototype.relations = ( this.prototype.relations || [] ).slice( 0 );

			this._subModels = {};
			this._superModel = null;

			// If this model has 'subModelTypes' itself, remember them in the store
			if ( this.prototype.hasOwnProperty( 'subModelTypes' ) ) {
				Backbone.Relational.store.addSubModels( this.prototype.subModelTypes, this );
			}
			// The 'subModelTypes' property should not be inherited, so reset it.
			else {
				this.prototype.subModelTypes = null;
			}

			// Initialize all reverseRelations that belong to this new model.
			_.each( this.prototype.relations || [], function( rel ) {
					if ( !rel.model ) {
						rel.model = this;
					}

					if ( rel.reverseRelation && rel.model === this ) {				
						var preInitialize = true;
						if ( _.isString( rel.relatedModel ) ) {
							/**
							 * The related model might not be defined for two reasons
							 *  1. it never gets defined, e.g. a typo
							 *  2. it is related to itself
							 * In neither of these cases do we need to pre-initialize reverse relations.
							 */
							var relatedModel = Backbone.Relational.store.getObjectByName( rel.relatedModel );
							preInitialize = relatedModel && ( relatedModel.prototype instanceof Backbone.RelationalModel );
						}

						var type = !_.isString( rel.type ) ? rel.type : Backbone[ rel.type ] || Backbone.Relational.store.getObjectByName( rel.type );
						if ( preInitialize && type && type.prototype instanceof Backbone.Relation ) {
							new type( null, rel );
						}
					}
				}, this );
			
			return this;
		},

		/**
		 * Create a 'Backbone.Model' instance based on 'attributes'.
		 * @param {Object} attributes
		 * @param {Object} [options]
		 * @return {Backbone.Model}
		 */
		build: function( attributes, options ) {
			var model = this;

			// 'build' is a possible entrypoint; it's possible no model hierarchy has been determined yet.
			this.initializeModelHierarchy();

			// Determine what type of (sub)model should be built if applicable.
			// Lookup the proper subModelType in 'this._subModels'.
			if ( this._subModels && this.prototype.subModelTypeAttribute in attributes ) {
				var subModelTypeAttribute = attributes[ this.prototype.subModelTypeAttribute ];
				var subModelType = this._subModels[ subModelTypeAttribute ];
				if ( subModelType ) {
					model = subModelType;
				}
			}
			
			return new model( attributes, options );
		},

		initializeModelHierarchy: function() {
			// If we're here for the first time, try to determine if this modelType has a 'superModel'.
			if ( _.isUndefined( this._superModel ) || _.isNull( this._superModel ) ) {
				Backbone.Relational.store.setupSuperModel( this );

				// If a superModel has been found, copy relations from the _superModel if they haven't been
				// inherited automatically (due to a redefinition of 'relations').
				// Otherwise, make sure we don't get here again for this type by making '_superModel' false so we fail
				// the isUndefined/isNull check next time.
				if ( this._superModel ) {
					//
					if ( this._superModel.prototype.relations ) {
						var supermodelRelationsExist = _.any( this.prototype.relations || [], function( rel ) {
							return rel.model && rel.model !== this;
						}, this );

						if ( !supermodelRelationsExist ) {
							this.prototype.relations = this._superModel.prototype.relations.concat( this.prototype.relations );
						}
					}
				}
				else {
					this._superModel = false;
				}
			}

			// If we came here through 'build' for a model that has 'subModelTypes', and not all of them have been resolved yet, try to resolve each.
			if ( this.prototype.subModelTypes && _.keys( this.prototype.subModelTypes ).length !== _.keys( this._subModels ).length ) {
				_.eacType.initializeModelHierarchy();
				});
			}
		},

		/**
		 * Find an instance of `this` type in 'Backbone.Relational.store'.
		 * - If `attributes` is a string or a number, `findOrCreate` will just query the `store` and return a model if found.
		 * - If `attributes` is an object and is found in the store, the model will be updated with `attributes` unless `options.update` is `false`. 
		 *   Otherwise, a new model is created with `attributes` (unless `options.create` is explicitly set to `false`).
		 * @param {Object|String|Number} attributes Either a model's id, or the attributes used to create or update a model.
		 * @param {Object} [options]
		 * @param {Boolean} [options.create=true]
		 * @param {Boolean} [options.update=true]
		 * @return {Backbone.RelationalModel}
		 */
		findOrCreate: function( attributes, options ) {
			options || ( options = {} );
			var parsedAttributes = (_.isObject( attributes ) && this.prototype.parse) ? this.prototype.parse( attributes ) : attributes;
			// Try to find an instance of 'this' model type in the store
			var model = Backbone.Relational.store.find( this, parsedAttributes );

			// If we found an instance, update it with the data in 'item' (unless 'options.update' is false).
			// If not, create an instance (unless 'options.create' is false).
			if ( _.isObject( attributes ) ) {
				if ( model && options.update !== false ) {
					model.set( parsedAttributes, options );
				}
				else if ( !model && options.create !== false ) {
					model = this.build( attributes, options );
				}
			}

			return model;
		}
	});
	_.extend( Backbone.RelationalModel.prototype, Backbone.Semaphore );
	
	/**
	 * Override Backbone.Collection._prepareModel, so objects will be built using the correct type
	 * if the collection.model has subModels.
	 */
	Backbone.Collection.prototype.__prepareModel = Backbone.Collection.prototype._prepareModel;
	Backbone.Collection.prototype._prepareModel = function ( attrs, options ) {
		var model;
		
		if ( attrs instanceof Backbone.Model ) {
			if ( !attrs.collection ) {
				attrs.collection = this;
			}
			model = attrs;
		}
		else {
			options || (options = {});
			options.collection = this;
			
			if ( typeof this.model.findOrCreate !== 'undefined' ) {
				model = this.model.findOrCreate( attrs, options );
			}
			else {
				model = new this.model( attrs, options );
			}
			
			if ( !model._validate( attrs, options ) ) {
				model = false;
			}
		}
		
		return model;
	};

	
	/**
	 * Override Backbone.Collection.add, so objects fetched from the server multiple times will
	 * update the existing Model. Also, trigger 'relational:add'.
	 */
	var add = Backbone.Collection.prototype.__add = Backbone.Collection.prototype.add;
	Backbone.Collection.prototype.add = function( models, options ) {
		options || (options = {});
		if ( !_.isArray( models ) ) {
			models = [ models ];
		}

		var modelsToAdd = [];

		//console.debug( 'calling add on coll=%o; model=%o, options=%o', this, models, options );
		_.each( models || [], function( model ) {
			if ( !( model instanceof Backbone.Model ) ) {
				// `_prepareModel` attempts to find `model` in Backbone.store through `findOrCreate`,
				// and sets the new properties on it if is found. Otherwise, a new model is instantiated.
				model = Backbone.Collection.prototype._prepareModel.call( this, model, options );
			}

				if ( model instanceof Backbone.Model && !this.get( model ) ) {
					modelsToAdd.push( model );
				}
			}, this );

		// Add 'models' in a single batch, so the original add will only be called once (and thus 'sort', etc).
		if ( modelsToAdd.length ) {
			add.call( this, modelsToAdd, optnal:add', model, this, options );
			}, this );
		}
		
		return this;
	};
	
	/**
	 * Override 'Backbone.Collection.remove' to trigger 'relational:remove'.
	 */
	var remove = Backbone.Collection.prototype.__remove = Backbone.Collection.prototype.remove;
	Backbone.Collection.prototype.remove = function( models, options ) {
		options || (options = {});
		if ( !_.isArray( models ) ) {
			models = [ models ];
		}
		else {
			models = models.slice( 0 );
		}

		//console.debug('calling remove on coll=%o; models=%o, options=%o', this, models, options );
		_.each( models || [], function( model ) {
				model = this.get( model );

				if ( model instanceof Backbone.Model ) {
					remove.call( this, model, options );
					this.trigger('relational:remove', model, this, options);
				}
			}, this );
		
		return this;
	};

	/**
	 * Override 'Backbone.Collection.reset' to trigger 'relational:reset'.
	 */
	var reset = Backbone.Collection.prototype.__reset = Backbone.Collection.prototype.reset;
	Backbone.Collection.prototype.reset = function( models, options ) {
		reset.call( this, models, options );
		this.trigger( 'relational:reset', this, options );

		return this;
	};

	/**
	 * Override 'Backbone.Collection.sort' to trigger 'relational:reset'.
	 */
	var sort = Backbone.Collection.prototype.__sort = Backbone.Collection.prototype.sort;
	Backbone.Collection.prototype.sort = function( options ) {
		sort.call( this, options );
		this.trigger( 'relational:reset', this, options );

		return this;
	};
	
	/**
	 * Override 'Backbone.Collection.trigger' so 'add', 'remove' and 'reset' events are queued until relations
	 * are ready.
	 */
	var trigger = Backbone.Collection.prototype.__trigger = Backbone.Collection.prototype.trigger;
	Backbone.Collection.prototype.trigger = function( eventName ) {
		if ( eventName === 'add' || eventName === 'remove' || eventName === 'reset' ) {
			var dit = this, args = arguments;
			
			if (eventName === 'add') {
				args = _.toArray( args );
				// the fourth argument in case of a regular add is the option object.
				// we need to clone it, as it could be modified while we wait on the eventQueue to be unblocked
				if (_.isObject( args[3] ) ) {
					args[3] = _.clone( args[3] );
				}
			}
			
					trigger.apply( dit, args );
				});
		}
		else {
			trigger.apply( this, arguments );
		}
		
		return this;
	};

	// Override .extend() to automatically call .setuild.setup( this );

		return child;
	};
})();
/*1.0*/
/*
  backbone.paginator 2.0.0
  http://github.com/backbone-paginator/backbone.paginator

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/

!function(a){if("object"==typeof exports)module.exports=a(require("underscore"),require("backbone"));else if("function"==typeof define&&define.amd)define(["underscore","backbone"],a);else if("undefined"!=typeof _&&"undefined"!=typeof Backbone){var b=Backbone.PageableCollection,c=a(_,Backbone);eturn Backbone.PageableCollec` must be a finite integer");return b}function d(a){for(var b,c,d,e,f={},g=decodeURIComponent,h=a.split("&"),i=0,j=h.length;j>i;i++){var k=h[i];b=k.split("="),c=b[0],d=b[1]||!0,c=g(c),d=g(d),e=f[c],row a}finally{e.callback=f}}}else c()}var f=a.extend,g=a.omit,h=a.clone,i=a.each,j=a.pick,k=a.contains,l=a.isEmpty,m=a.pairs,n=a.invert,o=a.isArray,p=a.isFunction,q=a.isObject,r=a.keys,s=a.isUndefined,t=a.result,u=Math.ceil,v=Math.floor,w=Math.max,x=b.Collection.prototype,y=/[\s'"]/g,z=/[<>\s'"]/g,A=b.PageableCollection=b.Collection.extend({state:{firstPage:1,lastPage:null,currentPage:null,pageSize:25,totalPages:null,totalRecords:null,sortKey:null,order:-1},mode:"server",queryParams:{currentPage:"page",pageSize:"per_page",totalPages:"total_pages",totalRecords:"total_entries",sortKey:"sort_by",order:"order",directions:{"-1":"asc",1:"desc"}},constructor:function(a,b){x.constructor.apply(this,arguments),b=b||{};var c=this.mode=b.mode||this.mode||B.mode,d=f({},B.queryParams,this.queryParams,b.queryParams||{});d.directions=f({},B.queryParams.directions,this.queryParams.directions,d.directions||{}),this.queryParams=d;var e=this.state=f({},B.state,this.state,b.state||{});e.currentPage=null==e.currentPage?e.firstPage:e.currentPage,o(a)||(a=a?[a]:[]),a=a.slice(),"server"==c||null!=e.totalRecords||l(a)||(e.totalRecords=a.length),this.switchMode(c,f({fetch:!1,resetState:!1,models:a},b));var g=b.comparator;if(e.sortKey&&!g&&this.setSorting(e.sortKey,e.order,b),"server"!=c){var i=this.fullCollection;g&&b.full&&(this.comparator=null,i.comparator=g),b.full&&i.sort(),a&&!l(a)&&(this.reset(a,f({silent:!0},b)),this.getPage(e.currentPage),a.splice.apply(a,[0,a.length].concat(this.models)))}this._initState=h(this.state)},_makeFullCollection:function(a,c){var d,e,f,g=["url","model","sync","comparator"],h=this.constructor.prototype,i={};for(d=0,e=g.length;e>d;d++)f=g[d],s(h[f])||(i[f]=h[f]);var j=new(b.Collection.extend(i))(a,c);for(d=0,e=g.length;e>d;d++)f=g[d],this[f]!==h[f]&&(j[f]=this[f]);return j},_makeCollectionEventHandler:function(a,b){return funcn(c){var d=k[c];a.off(c,d),b.off(c,d)});var l=h(a.state),m=l.firstPage,n=0===m?l.currentPage:l.currentPage-1,o=l.pageSize,p=n*o,q=p+o;if("add"==c){var t,v,w,x,j=j||{};if(g==b)v=b.indexOf(d),v>=p&&q>v&&(x=a,t=w=v-p);else{t=a.indexOf(d),v=p+t,x=b;var w=s(j.at)?v:j.at+p}if(j.onRemove||(++l.totalRecords,delete j.onRemove),a.state=a._checkState(l),x){x.add(d,f({},j||{},{at:w}));var y=t>=o?d:!s(j.at)&&q>w&&a.length>o?a.at(o):null;y&&e(g,c,function(){a.remove(y,{onAdd:!0})})}}if("remove"==c)if(j.onAdd)delete j.onAdd;else{if(--l.totalRecords){var z=l.totalPages=u(l.totalRecords/o);l.lastPage=0===m?z-1:z||m,l.currentPage>z&&(l.currentPage=l.lastPage)}else l.totalRecords=null,l.totalPages=null;a.state=a._checkState(l);var A,B=j.index;g==a?((A=b.at(q))&&e(a,c,function(){a.push(A,{onRemove:!0})}),b.remov,c,function(){a.push(A,{onRemove:!0})}),a.remove(d))}if("reset"==c)if(j=g,g=d,g==a&&null==j.from&&null==j.to){var C=b.models.slice(0,p),D=b.models.slice(p+a.models.length);b.reset(C.concat(a.models).concat(D),j)}else g==b&&((l.totalRecords=b.models.length)||(l.totalRecords=null,l.totalPages=null),"client"==a.mode&&(l.lastPage=l.currentPage=l.firstPage),a.state=a._checkState(l),a.reset(b.models.slice(p,q),f({},j,{parse:!1})));"sort"==c&&(j=g,g=d,g===b&&a.reset(b.models.a._events[c]||[];b.unshift(b.pop())})})}},_checkState:function(a){var b=this.mode,d=this.links,e=a.totalRecords,f=a.pageSize,g=a.currentPage,h=a.firstPage,i=a.totalPages;if(null!=e&&null!=f&&null!=g&&null!=h&&("infinite"==b?d:!0)){if(e=c(e,"totalRecords"),f=c(f,"pageSize"),g=c(g,"currentPage"),h=c(h,"firstPage"),1>f)throw new RangeError("`pageSize` must be >= 1");if(i=a.totalPages=u(e/f),0>h||h>1)throw new RangeError("`firstPage must be 0 or 1`");if(a.lastPage=0===h?w(0,i-1):i||h,"infinite"==b){if(!d[g+""])throw new RangeError("No link found for page "+g)}else if(h>g||i>0&&(h?g>i:g>=i))throw new RangeError("`currentPage` must be firstPage <= currentPage "+(h?">":">=")+" totalPages if "+h+"-based. Got "+g+".")}return a},setPageSize:function(a,b){a=c(a,"pageSize"),b=b||{first:!1};var d=this.state,e=u(d.totalRecords/a),h=e?w(d.firstPage,v(e*d.currentPage/d.totalPages)):d.firstPage;return d=this.state=this._checkState(f({},d,{pageSize:a,currentPage:b.first?d.firstPage:h,totalPages:e})),this.getPage(d.currentPage,g(b,["first"]))},switchMode:function(b,c){if(!k(["server","client","infinite"],b))throw new TypeError('`mode` must be one of "server", "client" or "infinite"');c=c||{fetch:!0,resetState:!0};var d=this.state=c.resetState?h(this._initState):this._checkState(f({},this.state));this.mode=b;var e,j=this,l=this.fullCollection,m=this._handlers=this._handlers||{};if(ction(a){e=m[a],j.off(a,e),l.off(a,e)}),delete this._handlers,this._fullComparator=l.comparator,delete this.fullCollection);else{l=this._makeFullCollection(c.models||[],c),l.pageableCollection=this,this.fullCollection=l;var n=this._makeCollectionEventHandler(thi=e=a.bind(n,{},b),j.on(b,e),l.on(b,e)}),l.comparator=this._fullComparator}if("infinite"==b)for(var o=this.links={},p=d.firstPage,q=u(d.totalRecords/d.pageSize),s=0===p?w(0,q-1):q||p,t=d.firstPage;s>=t;t++)o[t]=this.url;else this.links&&delete this.links;return c.fetch?this.fetch(g(c,"fetch","resetState")):this},hasPreviousPage:function(){var a=this.state,b=a.currentPage;return"infinite"!=this.mode?b>a.firstPage:!!this.links[b-1]},hasNextPage:function(){var a=this.state,b=this.state.currentPage;return"infinite"!=this.mode?b<a.lastPage:!!this.links[b+1]},getFirstPage:function(a){return this.getPage("first",a)},getPreviousPage:function(a){return this.getPage("prev",a)},getNextPage:function(a){retution(a){return this.getPage("last",a)},getPage:function(a,b){var d=this.mode,e=this.fullCollection;b=b||{fetch:!1};var h=this.state,i=h.firstPage,j=h.currentPage,k=h.lastPage,m=h.pageSize,n=a;switch(a){case"first":n=i;break;case"prev":n=j-1;break;case"next":n=j+1;break;case"last":n=k;break;default:n=c(a,"index")}this.state=this._checkState(f({},h,{currentPage:n})),b.from=j,b.to=n;var o=(0===i?n:n-1)*m,p=e&&e.length?e.models.slice(o,o+m):[];return"client"!=d&&("infinite"!=d||l(p))||b.fetch?("infinite"==d&&(b.url=this.links[n]),this.fetch(g(b,"fetch"))):(this.reset(p,g(b,"fetch")),this)},getPageByOffset:function(a,b){if(0>a)throw new RangeError("`offset must be > 0`");a=c(a);var d=v(a/this.state.pageSize);return 0!==this.state.firstPage&&d++,d>this.state.lastPage&&(d=this.s}return(x.sel"==f&&k(e,g)&&(c[g]=d)})})}return c},parse:function(a,b){var c=this.parseState(a,h(this.queryParams),h(this.state),b);return c&&(this.state=this._checkState(f({},this.state,c))),this.parseRecords(a,b)},parseState:function(b,c,d){if(b&&2===b.length&&q(b[0])&&o(b[1])){var e=h(dg=f[d];s(g)||a.isNull(g)||(e[c]=f[d])}),f.order&&(e.order=1*n(c.directions)[f.order]),e}},parseRecords:function(a){return a&&2===a.length&&q(a[0])&&o(a[1])?a[1]:a},fetch:function(a){a=a||{};var b=this._checkState(this.state),c=this.mode;"infinite"!=c||a.url||(a.url=this.links[b.currentPage]);var e=a.data||{},i=t(a,"url")||t(this,"url")||"",k=i.indexOf("?");-1!=k&&(f(e,d(i.slice(k+1))),i=i.slice(0,k)),a.url=i,a.data=e;var l,n,o,q,u="client"==this.mode?j(this.queryParams,"sortKey","order"):g(j(this.queryParams,r(B.queryParams)),"directions"),v=m(u),w=h(this);for(l=0;l<v.length;l++)n=v[l],o=n[0],q=n[1],q=p(q)?q.call(w):q,null!=b[o]&&null!=q&&(e[q]=b[o]);if(b.sortKey&&b.order){var y=p(u.order)?u.order.call(w):u.order;e[y]=this.queryParams.directions[b.order+""]}else b.sortKey||delete e[u.order];var z=m(g(this.queryParams,r(B.queryParams)));for(l=0;l<z.length;l++)n=z[l],q=n[1],q=p(q)?q.call(w):q,null!=q&&(e[n[0]]=q);if("server"!=c){var A=this,C=this.fullC),A.trigger("reset",A,e)),D&&D(b,d,e)},x.fetch.call(this,f({},a,{silent:!0}))}return x.fetch.call(this,a)},_makeComparator:function(a,b,c){var d=this.state;return a=a||d.sortKey,b=b||d.order,a&&b?(c||(c=function(a,b){return a.get(b)}),function(d,e){var f,g=c(d,a),h=c(e,a);return 1===b&&(f=g,g=h,h=f),g===h?0:h>g?-1:1}):void 0},setSorting:function(a,b,c){var d=this.state;d.sortKey=a,d.order=b=b||d.order;var e=this.fullCollection,g=!1,h=!1;a||(g=h=!0);var i=this.mode;c=f({side:"client"==i?i:"server",full:!0},c);var j=this._makeComparator(a,b,c.sortValue),k=c.full,l=c.side;return"client"==l?k?(e&&(e.comparator=j),g=!0):(this.comparator=j,h=!0):"server"!=l||k||(this.comparator=j),g&&(this.comparator=null),h&&e&&(e.comparator=null),this}}),B=A.prototype;return A});
/*1.0*/
/*! backbone.paginator - v0.7.0 - 3/25/2013
* http://github.com/addyosmani/backbone.paginator
* Copyright (c) 2013 Addy Osmani; Licensed MIT */
/*globals Backbone:true, _:true, jQuery:true*/

Backbone.Paginator = (function ( Backbone, _, $ ) {
  "use strict";

  var Paginator = {};
  Paginator.version = "0.7.0";

  // @name: clientPager
  //
  // @tagline: Paginator for client-side data
  //
  // @description:
  // This paginator is responsible for providing pagination
  // and sort capabilities for a single payload of data
  // we wish to paginate by the UI for easier browsering.
  //
  Paginator.clientPager = Backbone.Collection.extend({

    // DEFAULTS FOR SORTING & FILTERING
    useDiacriticsPlugin: true, // use diacritics plugin if available
    useLevenshteinPlugin: true, // use levenshtein plugin if available
    sortColumn: "",
    sortDirection: "desc",
    lastSortColumn: "",
    fieldFilterRules: [],
    lastFieldFilterRules: [],
    filterFields: "",
    filterExpression: "",
    lastFilterExpression: "",

    //DEFAULT PAGINATOR UI VALUES
    defaults_ui: {
      firstPage: 0,
      currentPage: 1,
      perPage: 5,
      totalPages: 10,
      pagesInRange: 4
    },

    // Default values used when sorting and/or filtering.
    initialize: function(){
      //LISTEN FOR ADD & REMOVE EVENTS THEN REMOVE MODELS FROM ORGINAL MODELS
      this.on('add', this.addModel, this);
      this.on('remove', this.removeModel, this);

      // SET DEFAULT VALUES (ALLOWS YOU TO POPULATE PAGINATOR MAUNALLY)
      this.setDefaults();
    },


    setDefaults: function() {
      // SET DEFAULT UI SETTINGS
      var options = _.defaults(this.paginator_ui, this.defaults_ui);

      //UPDATE GLOBAL UI SETTINGS
      _.defaults    this.origModels.push(model);
    },

    removeModel: function(model) {
      var index = _.indexOf(this.origModels, model);

      this.origModels.splice(index, 1);
    },

    sync: function ( method, model, options ) {
      var self = this;

      // SET DEFAULT VALUES
      this.setDefaults();

      // Some values could be functions, let's make sure
      // to change their scope too and run them
      var queryAttributes = {};
      _.each(_.result(self, "server_api"), function(value, key){
        if( _.isFunction(value) ) {
          value = _.bind(value, self);
          value = value();
        }
        queryAttributes[key] = value;
      });

      var queryOptions = _.clone(self.paginator_core);
      _.each(queryOptions, function(value, key){
        if( _.isFunction(value) ) {
          value = _.bind(value, self);
          value = value();
        }
        queryOptions[key] = value;
      });

      // Create default values if no others are specified
      queryOptions = _.defaults(queryOptions, {
        timeout: 25000,
        cache: false,
        type: 'GET',
        dataType: 'jsonp'
      });

      queryOptions = _.extend(queryOptions, {
        data: decodeURIComponent($.param(queryAttributes)),
        processData: false,
        url: _.result(queryOptions, 'url')
      }, options);

      var bbVer = Backbone.VERSION.split('.');
      var promiseSuccessFormat = !(parseInt(bbVer[0], 10) === 0 &&
                                   parseInt(bbVer[1], 10) === 9 &&
                                   parseInt(bbVer[2], 10) === 10);

      var success = queryOptions.success;
      queryOptions.success = function ( resp, status, xhr ) {
        if ( success ) {
          // This is to keep compatibility with Backbone 0.9.10
          if (promiseSuccessFormat) {
            success( resp, status, xhr );
          } else {
            success( model, resp, queryOptions );
          }
        }
        if ( model && model.trigger ) {
          model.trigger( 'sync', model, resp, queryOptions );
        }
      };

      var error = queryOptions.error;
      queryOptions.error = function ( xhr ) {
        if ( error ) {
          error( model, xhr, queryOptions );
        }
        if ( model && model.trigger ) {
          model.trigger( 'error', model, xhr, queryOptions );
        }
      };

      var xhr = queryOptions.xhr = $.ajax( queryOptions );
      if ( model && model.trigger ) {
        model.trigger('request', model, xhr, queryOptions);
      }
      return xhr;
    },

    nextPage: function (options) {
      if(this.currentPage < this.information.totalPages) {
        this.currentPage = ++this.currentPage;
        this.pager(options);
      }
    },

    previousPage: function (options) {
      if(this.currentPage > 1) {
        this.currentPage = --this.currentPage;
        this.pager(options);
      }
    },

    goTo: function ( page, options ) {
      if(page !== undefined){
        this.currentPage = parseInt(page, 10);
        this.pager(options);
      }
    },

    howManyPer: function ( perPage ) {
      if(perPage !== undefined){
        var lastPerPage = this.perPage;
        this.perPage = parseInt(perPage, 10);
        this.currentPage = Math.ceil( ( lastPerPage * ( this.currentPage - 1 ) + 1 ) / perPage);
        this.pager();
      }
    },


    // setSort is used to sort the current model. After
    // passing 'column', which is the model's field you want
    // to filter and 'direction', which is the direction
    // desired for the ordering ('asc' or 'desc'), pager()
    // and info() will be called automatically.
    setSort: function ( column, direction ) {
      if(column !== undefined && direction !== undefined){
        this.lastSortColumn = this.sortColumn;
        this.sortColumn = column;
        this.sortDirection = direction;
        this.pager();
        this.info();
      }
    },

    // setFieldFilter is used to filter each value of each model
    // according to `rules` that you pass as argument.
    // Example: You have a collection of books with 'release year' and 'author'.
    // You can filter only the books that were released between 1999 and 2003
    // And then you can add another `rule` that will filter those books only to
    // authors who's name start with 'A'.
    setFieldFilter: function ( fieldFilterRules ) {
      if( !_.isEmpty( fieldFilterRules ) ) {
        this.lastFieldFilterRules = this.fieldFilterRules;
        this.fieldFilterRules = fieldFilterRules;
        this.pager();
        this.info();
        // if all the filters are removed, we should save the last filter
        // and then let the list reset to it's original state.
      } else {
        this.lastFieldFilterRules = this.fieldFilterRules;
        this.fieldFilterRules = '';
        this.pager();
        this.info();
      }
    },

    // doFakeFieldFilter can be used to get the number of models that will remain
    // after calling setFieldFilter with a filter rule(s)
    doFakeFieldFilter: function ( rules ) {
      if( !_.isEmpty( rules ) ) {
        var testModels = this.origModels;
        if (testModels === undefined) {
          testModels = this.models;
        }

        testModels = this._fieldFilter(testModels, rules);

        // To comply with current behavior, also filter by any previously defined setFilter rules.
        if ( this.filterExpression !== "" ) {
          testModels = this._filter(testModels, this.filterFields, this.filterExpression);
        }

        // Return size
        return testModels.length;
      }

    },

    // setFilter is used to filter the current model. After
    // passing 'fields', which can be a string referring to
    // the model's field, an array of strings representing
    // each of the model's fields or an object with the name
    // of the model's field(s) and comparing options (see docs)
    // you wish to filter by and
    // 'filter', which is the word or words you wish to
    // filter by, pager() and info() will be called automatically.
    setFilter: function ( fields, filter ) {
      if( fields !== undefined && filter !== undefined ){
        this.filterFields = fields;
        this.lastFilterExpression = this.filterExpression;
        this.filterExpression = filter;
        this.pager();
        this.info();
      }
    },

    // doFakeFilter can be used to get the number of models that will
    // remain after calling setFilter with a `fields` and `filter` args.
    doFakeFilter: function ( fields, filter ) {
      if( fields !== undefined && filter !== undefined ){
        var testModels = this.origModels;
        if (testModels === undefined) {
          testModels = this.models;
        }

        // To comply with current behavior, first filter by any previously defined setFieldFilter rules.
        if ( !_.isEmpty( this.fieldFilterRules ) ) {
          testModels = this._fieldFilter(testModels, this.fieldFilterRules);
        }

        testModels = this._filter(testModels, fields, filter);

        // Return size
        return testModels.length;
      }
    },


    // pager is used to sort, filter and show the data
    // you expect the library to display.
    pager: function (options) {
      var self = this,
      disp = this.perPage,
      start = (self.currentPage - 1) * disp,
      stop = start + disp;
      // Saving the original models collection is important
      // as we could need to sort or filter, and we don't want
      // to loose the data we fetched from the server.
      if (self.origModels === undefined) {
        self.origModels = self.models;
      }

      self.models = self.origModels.slice();

      // Check if sorting was set using setSort.
      if ( this.sortColumn !== "" ) {
        self.models = self._sort(self.models, this.sortColumn, this.sortDirection);
      }

      // Check if field-filtering was set using setFieldFilter
      if ( !_.isEmpty( this.fieldFilterRules ) ) {
        self.models = self._fieldFilter(self.models, this.fieldFilterRules);
      }

      // Check if filtering was set using setFilter.
      if ( this.filterExpression !== "" ) {
        self.models = self._filter(self.models, this.filterFields, this.filterExpression);
      }

      // If the sorting or the filtering was changed go to the first page
      if ( this.lastSortColumn !== this.sortColumn || this.lastFilterExpression !== this.filterExpression || !_.isEqual(this.fieldFilterRules, this.lastFieldFilterRules) ) {
        start = 0;
        stop = start + disp;
        self.currentPage = 1;

        this.lastSortColumn = this.sortColumn;
        this.lastFieldFilterRules = this.fieldFilterRules;
        this.lastFilterExpression = this.filterExpression;
      }

      // We need to save the sorted and filtered models collection
      // because we'll use that sorted and filtered collection in info().
      self.sortedAndFilteredModels = self.models.slice();
      self.info();
      self.reset(self.models.slice(start, stop));

      // This is somewhat of a hack to get all the nextPage, prevPage, and goTo methods
      // to work with a success callback (as in the requestPager). Realistically there is no failure case here,
      // but maybe we could catch exception and trigger a failure callback?
      _.result(options, 'success');
    },

    // The actual place where the collection is sorted.
    // Check setSort for arguments explicacion.
    _sort: function ( models, sort, direction ) {
      models = models.sort(function (a, b) {
        var ac = a.get(sort),
        bc = b.get(sort);

        if ( _.isUndefined(ac) || _.isUndefined(bc) || ac === null || bc === null ) {
          return 0;
        } else {
          /* Make sure that both ac and bc are lowercase strings.
           * .toString() first so we don't have to worry if ac or bc
           * have other String-only methods.
           */
          ac = ac.toString().toLowerCase();
          bc = bc.toString().toLowerCase();
        }

        if (direction === 'desc') {

          // We need to know if there aren't any non-number characters
          // and that there are numbers-only characters and maybe a dot
          // if we have a float.
          // Oh, also a '-' for negative numbers!
          if((!ac.match(/[^\-\d\.]/) && ac.match(/-?[\d\.]+/)) &&
               (!bc.match(/[^\-\d\.]/) && bc.match(/-?[\d\.]+/))){

            if( (ac - 0) < (bc - 0) ) {
              return 1;
            }
            if( (ac - 0) > (bc - 0) ) {
              return -1;
            }
          } else {
            if (ac < bc) {
              return 1;
            }
            if (ac > bc) {
              return -1;
            }
          }

        } else {

          //Same as the regexp check in the 'if' part.
          if((!ac.match(/[^\-\d\.]/) && ac.match(/-?[\d\.]+/)) &&
             (!bc.match(/[^\-\d\.]/) && bc.match(/-?[\d\.]+/))){
            if( (ac - 0) < (bc - 0) ) {
              return -1;
            }
            if( (ac - 0) > (bc - 0) ) {
              return 1;
            }
          } else {
            if (ac < bc) {
              return -1;
            }
            if (ac > bc) {
              return 1;
            }
          }

        }

        if (a.cid && b.cid){
          var aId = a.cid,
          bId = b.cid;

          if (aId < bId) {
            return -1;
          }
          if (aId > bId) {
            return 1;
          }
        }

        return 0;
      });

      return models;
    },

    // The actual place where the collection is field-filtered.
    // Check setFieldFilter for arguments explicacion.
    _fieldFilter: function( models, rules ) {

      // Check if there are any rules
      if ( _.isEmpty(rules) ) {
        return models;
      }

      var filteredModels = [];

      // Iterate over each rule
      _.each(models, function(model){

        var should_push = true;

        // Apply each rule to each model in the collection
        _.each(rules, function(rule){

          // Don't go inside the switch if we're already sure that the model won't be included in the results
          if( !should_push ){
            return false;
          }

          should_push = false;

          // The field's value will be passed to a custom function, which should
          // return true (if model should be included) or false (model should be ignored)
          if(rule.type === "function"){
model.get(rule.field) );
            });
            if( f() ){
              should_push = true;
            }

            // The field's value is required to be non-empty
          }else if(rule.type === "required"){
            if( !_.isEmpty( model.get(rule.field).toString() ) ) {
              should_push = true;
            }

            // The field's value is required to be greater tan N (numbers only)
          }else if(rule.type === "min"){
            if( !_.isNaN( Number( model.get(rule.field) ) ) &&
               !_.isNaN( Number( rule.value ) ) &&
                 Number( model.get(rule.field) ) >= Number( rule.value ) ) {
              should_push = true;
            }

            // The field's value is required to be smaller tan N (numbers only)
          }else if(rule.type === "max"){
            if( !_.isNaN( Number( model.get(rule.field) ) ) &&
               !_.isNaN( Number( rule.value ) ) &&
                 Number( model.get(rule.field) ) <= Number( rule.value ) ) {
              should_push = true;
            }

            // The field's value is required to be between N and M (numbers only)
          }else if(rule.type === "range"){
            if( !_.isNaN( Number( model.get(rule.field) ) ) &&
               _.isObject( rule.value ) &&
                 !_.isNaN( Number( rule.value.min ) ) &&
                   !_.isNaN( Number( rule.value.max ) ) &&
                     Number( model.get(rule.field) ) >= Number( rule.value.min ) &&
                       Number( model.get(rule.field) ) <= Number( rule.value.max ) ) {
              should_push = true;
            }

            // The field's value is required to be more than N chars long
          }else if(rule.type === "minLength"){
            if( model.get(rule.field).toString().length >= rule.value ) {
              should_push = true;
            }

            // The field's value is required to be no more than N chars long
          }else if(rule.type === "maxLength"){
            if( model.get(rule.field).toString().length <= rule.value ) {
              should_push = true;
            }

            // The field's value is required to be more than N chars long and no more than M chars long
          }else if(rule.type === "rangeLength"){
            if( _.isObject( rule.value ) &&
               !_.isNaN( Number( rule.value.min ) ) &&
                 !_.isNaN( Number( rule.value.max ) ) &&
                   model.get(rule.field).toString().length >= rule.value.min &&
                     model.get(rule.field).toString().length <= rule.value.max ) {
              should_push = true;
            }

            // The field's value is required to be equal to one of the values in rules.value
          }else if(rule.type === "oneOf"){
            if( _.isArray( rule.value ) &&
               _.include( rule.value, model.get(rule.field) ) ) {
              should_push = true;
            }

            // The field's value is required to be equal to the value in rules.value
          }else if(rule.type === "equalTo"){
            if( rule.value === model.get(rule.field) ) {
              should_push = true;
            }

          }else if(rule.type === "containsAllOf"){
            if( _.isArray( rule.value ) &&
                _.isArray(model.get(rule.field)) &&
                _.intersection( rule.value, model.get(rule.field)).length === rule.value.length) {
              should_push = true;
            }

              // The field's value is required to match the regular expression
          }else if(rule.type === "pattern"){
            if( model.get(rule.field).toString().match(rule.value) ) {
              should_push = true;
            }

            //Unknown type
          }else{
            should_push = false;
          }

        });

        if( should_push ){
          filteredModels.push(model);
        }

      });

      return filteredModels;
    },

    // The actual place where the collection is filtered.
    // Check setFilter for arguments explicacion.
    _filter: function ( models, fields, filter ) {

      //  For example, if you had a data model containing cars like { color: '', description: '', hp: '' },
      //  your fields was set to ['color', 'description', 'hp'] and your filter was set
      //  to "Black Mustang 300", the word "Black" will match all the cars that have black color, then
      //  "Mustang" in the description and then the HP in the 'hp' field.
      //  NOTE: "Black Musta 300" will return the same as "Black Mustang 300"

      // We accept fields to be a string, an array or an object
      // but if string or array is passed we need to convert it
      // to an object.

      var self = this;

      var obj_fields = {};

      if( _.isString( fields ) ) {
        obj_fields[fields] = {cmp_method: 'regexp'};
      }else if( _.isArrad] = {cmp_method: 'regexp'};
        });
      }else{
        _.each(fields, function( cmp_opts, field ) {
          obj_fields[field] = _.defaults(cmp_opts, { cmp_method: 'regexp' });
        });
      }

      fields = obj_fields;

      //Remove diacritic characters if diacritic plugin is loaded
      if( _.has(Backbone.Paginator, 'removeDiacritics') && self.useDiacriticsPlugin ){
        filter = Backbone.Paginator.removeDiacritics(filter);
      }

      // 'filter' can be only a string.
      // If 'filter' is string we need to convert it to
      // a regular expression.
      // For example, if 'filter' is 'black dog' we need
      // to find every single word, remove duplicated ones (if any)
      // and transform the result to '(black|dog)'
      if( filter === '' || !_.isString(filter) ) {
        return models;
      } else {
        vaent) { return element.toLowerCase(); });
        var pattern = "(" + _.uniq(words).join("|") + ")";
        var regexp = new RegExp(pattern, "igm");
      }

      var filteredModels = [];

      // We need to iterate over each model
      _.each( models, function( model ) {

        var matchesPerModel = [];

        // and over each field of each model
        _.each( fields, function( cmp_opts, field ) {

          var value = model.get( field );

          if( value ) {

            // The regular expression we created earlier let's us detect if a
            // given string contains each and all of the words in the regular expression
            // or not, but in both cases match() will return an array containing all
            // the words it matched.
            var matchesPerField = [];

            if( _.has(Backbone.Paginator, 'removeDiacritics') && self.useDiacriticsPlugin ){
              value = Backbone.Paginator.removeDiacritics(value.toString());
            }else{
              value = value.toString();
            }

            // Levenshtein cmp
            if( cmp_opts.cmp_method === 'levenshtein' && _.has(Backbone.Paginator, 'levenshtein') && self.useLevenshteinPlugin ) {
              var distance = Backbone.Paginator.levenshtein(value, filter);

              _.defaults(cmp_opts, { max_distance: 0 });

              if( distance <= cmp_opts.max_distance ) {
                matchesPerField = _.uniq(words);
              }

              // Default (RegExp) cmp
            }else{
              matchesPerField = value.match( regexp );
            }

            maoString().toLowerCase();
            })hesPerModel.push(match);
            });

          }

        });

        // We just need to check if the returned array contains all the words in our
        // regex, and if it does, it means that we have a match, so we should save it.
        matchesPerModel = _.uniq( _.without(matchesPerModel, "") );

        if(  _.isEmpty( _.difference(words, matchesPerModel) ) ) {
          filteredModels.push(model);
        }

      });

      return filteredModels;
    },

    // You shouldn't need to call info() as this method is used to
    // calculate internal data as first/prev/next/last page...
    info: function () {
      var self = this,
      info = {},
      totalRecords = (self.sortedAndFilteredModels) ? self.sortedAndFilteredModels.length : self.length,
      totalPages = Math.ceil(totalRecords / self.perPage);

      info = {
        totalUnfilteredRecords: self.origModels.length,
        totalRecords: totalRecords,
        currentPage: self.currentPage,
        perPage: this.perPage,
        totalPages: totalPages,
        lastPage: totalPages,
        previous: false,
        next: false,
        startRecord: totalRecords === 0 ? 0 : (self.currentPage - 1) * this.perPage + 1,
        endRecord: Math.min(totalRecords, self.currentPage * this.perPage)
      };

      if (self.currentPage > 1) {
        info.previous = self.currentPage - 1;
      }

      if (self.currentPage < info.totalPages) {
        info.next = self.currentPage + 1;
      }

      info.pageSet = self.setPagination(info);

      self.information = info;
      return info;
    },


    // setPagination also is an internal function that shouldn't be called directly.
    // It will create an array containing the pages right before and right after the
    // actual page.
    setPagination: function ( info ) {

      var pages = [], i = 0, l = 0;

      // How many adjacent pages should be shown on each side?
      var ADJACENTx2 = this.pagesInRange * 2,
      LASTPAGE = Math.ceil(info.totalRecords / info.perPage);

      if (LASTPAGE > 1) {

        // not enough pages to bother breaking it up
        if (LASTPAGE <= (1 + ADJACENTx2)) {
          for (i = 1, l = LASTPAGE; i <= l; i++) {
            pages.push(i);
          }
        }

        // enough pages to hide some
        else {

          //close to beginning; only hide later pages
          if (info.currentPage <=  (this.pagesInRange + 1)) {
            for (i = 1, l = 2 + ADJACENTx2; i < l; i++) {
              pages.push(i);
            }
          }

          // in middle; hide some front and some back
          else if (LASTPAGE - this.pagesInRange > info.currentPage && info.currentPage > this.pagesInRange) {
            for (i = info.currentPage - this.pagesInRange; i <= info.currentPage + this.pagesInRange; i++) {
              pages.push(i);
            }
          }

          // close to end; only hide early pages
          else {
            for (i = LASTPAGE - ADJACENTx2; i <= LASTPAGE; i++) {
              pages.push(i);
            }
          }
        }

      }

      return pages;

    },

    bootstrap: function(options) {
      _.extend(this, options);
      this.goTo(1);
      this.info();
      return this;
    }

  });

  // function aliasing
  Paginator.clientPager.prototype.prevPage = Paginator.clientPager.prototype.previousPage;

  // @name: requestPager
  //
  // Paginator for server-side data being requested from a backend/API
  //
  // @description:
  // This paginator is responsible for providing pagination
  // and sort capabilities for requests to a server-side
  // data service (e.g an API)
  //
  Paginator.requestPager = Backbone.Collection.extend({

    sync: function ( method, model, options ) {

      var self = this;

      self.setDefaults();

      // Some values could be functions, let's make sure
      // to change their scope too and run them
      var queryAttributes = {};
      _.each(_.result(self, "server_api"), function(value, key){
        if( _.isFunction(value) ) {
          value = _.bind(value, self);
          value = value();
        }
        queryAttributes[key] = value;
      });

      var queryOptions = _.clone(self.paginator_core);
      _.each(queryOptions, function(value, key){
        if( _.isFunction(value) ) {
          value = _.bind(value, self);
          value = value();
        }
        queryOptions[key] = value;
      });

      // Create default values if no others are specified
      queryOptions = _.defaults(queryOptions, {
        timeout: 25000,
        cache: false,
        type: 'GET',
        dataType: 'jsonp'
      });

      // Allows the passing in of {data: {foo: 'bar'}} at request time to overwrite server_api defaults
      if( options.data ){
        options.data = decodeURIComponent($.param(_.extend(queryAttributes,options.data)));
      }else{
        options.data = decodeURIComponent($.param(queryAttributes));
      }

      queryOptions = _.extend(queryOptions, {
        data: decodeURIComponent($.param(queryAttributes)),
        processData: false,
        url: _.result(queryOptions, 'url')
      }, options);

      var bbVer = Backbone.VERSION.split('.');
      var promiseSuccessFormat = !(parseInt(bbVer[0], 10) === 0 &&
                                   parseInt(bbVer[1], 10) === 9 &&
                                   parseInt(bbVer[2], 10) === 10);

      var success = queryOptions.success;
      queryOptions.success = function ( resp, status, xhr ) {

        if ( success ) {
          // This is to keep compatibility with Backbone 0.9.10
          if (promiseSuccessFormat) {
            success( resp, status, xhr );
          } else {
            success( model, resp, queryOptions );
          }
        }
        if ( model && model.trigger ) {
          model.trigger( 'sync', model, resp, queryOptions );
        }
      };

      var error = queryOptions.error;
      queryOptions.error = function ( xhr ) {
        if ( error ) {
          error( model, xhr, queryOptions );
        }
        if ( model && model.trigger ) {
          model.trigger( 'error', model, xhr, queryOptions );
        }
      };

      var xhr = queryOptions.xhr = $.ajax( queryOptions );
      if ( model && model.trigger ) {
        model.trigger('request', model, xhr, queryOptions);
      }
      return xhr;
    },

    setDefaults: function() {
      var self = this;

      // Create default values if no others are specified
      _.defaults(self.paginator_ui, {
        firstPage: 0,
        currentPage: 1,
        perPage: 5,
        totalPages: 10,
        pagesInRange: 4
      });

      // Change scope of 'paginator_ui' object values
      _.each(self.paginator_ui, function(value, key) {
        if (_.isUndefined(self[key])) {
          self[key] = self.paginator_ui[key];
        }
      });
    },

    requestNextPage: function ( options ) {
      if ( this.currentPage !== undefined ) {
        this.currentPage += 1;
        return this.pager( options );
      } else {
        var response = new $.Deferred();
        response.reject();
        return response.promise();
      }
    },

    requestPreviousPage: function ( options ) {
      if ( this.currentPage !== undefined ) {
        this.currentPage -= 1;
        return this.pager( options );
      } else {
        var response = new $.Deferred();
        response.reject();
        return response.promise();
      }
    },

    updateOrder: function ( column ) {
      if (column !== undefined) {
        this.sortField = column;
        this.pager();
      }

    },

    goTo: function ( page, options ) {
      if ( page !== undefined ) {
        this.currentPage = parseInt(page, 10);
        return this.pager( options );
      } else {
        var response = new $.Deferred();
        response.reject();
        return response.promise();
      }
    },

    howManyPer: function ( count ) {
      if( count !== undefined ){
        this.currentPage = this.firstPage;
        this.perPage = count;
        this.pager();
      }
    },

    info: function () {

      var info = {
        // If parse() method is implemented and totalRecords is set to the length
        // of the records returned, make it available. Else, default it to 0
        totalRecords: this.totalRecords || 0,

        currentPage: this.currentPage,
        firstPage: this.firstPage,
        totalPages: Math.ceil(this.totalRecords / this.perPage),
        lastPage: this.totalPages, // should use totalPages in template
        perPage: this.perPage,
        previous:false,
        next:false
      };

      if (this.currentPage > 1) {
        info.previous = this.currentPage - 1;
      }

      if (this.currentPage < info.totalPages) {
        info.next = this.currentPage + 1;
      }

      // left around for backwards compatibility
      info.hasNext = info.next;
      info.hasPrevious = info.next;

      info.pageSet = this.setPagination(info);

      this.information = info;
      return info;
    },

    setPagination: function ( info ) {

      var pages = [], i = 0, l = 0;

      // How many adjacent pages should be shown on each side?
      var ADJACENTx2 = this.pagesInRange * 2,
      LASTPAGE = Math.ceil(info.totalRecords / info.perPage);

      if (LASTPAGE > 1) {

        // not enough pages to bother breaking it up
        if (LASTPAGE <= (1 + ADJACENTx2)) {
          for (i = 1, l = LASTPAGE; i <= l; i++) {
            pages.push(i);
          }
        }

        // enough pages to hide some
        else {

          //close to beginning; only hide later pages
          if (info.currentPage <=  (this.pagesInRange + 1)) {
            for (i = 1, l = 2 + ADJACENTx2; i < l; i++) {
              pages.push(i);
            }
          }

          // in middle; hide some front and some back
          else if (LASTPAGE - this.pagesInRange > info.currentPage && info.currentPage > this.pagesInRange) {
            for (i = info.currentPage - this.pagesInRange; i <= info.currentPage + this.pagesInRange; i++) {
              pages.push(i);
            }
          }

          // close to end; only hide early pages
          else {
            for (i = LASTPAGE - ADJACENTx2; i <= LASTPAGE; i++) {
              pages.push(i);
            }
          }
        }

      }

      return pages;

    },

    // fetches the latest results from the server
    pager: function ( options ) {
      if ( !_.isObject(options) ) {
        options = {};
      }
      return this.fetch( options );
    },

    url: function(){
      // Expose url parameter enclosed in this.paginator_core.url to properly
      // extend Collection and allow Collection CRUD
      if(this.paginator_core !== undefined && this.paginator_core.url !== undefined){
        return this.paginator_core.url;
      } else {
        return null;
      }
    },

    bootstrap: function(options) {
      _.extend(this, options);
      this.setDefaults();
      this.info();
      return this;
    }
  });

  // function aliasing
  Paginator.requestPager.prototype.nextPage = Paginator.requestPager.prototype.requestNextPage;
  Paginator.requestPager.prototype.prevPage = Paginator.requestPager.prototype.requestPreviousPage;

  return Paginator;

}( Backbone, _, jQuery ));
/*1.0*/
/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@ = root.Handlebars || factory();
  }
}(this, function () {
// handle = SafeString;
  return __exports__;
})();

// ndContextPath;
  return __exports__;
})(__module4__);

// hand_ = Exception;
  return __exports__;
})();

//= createFrame;
  return __exports__;
})(__module3__, __module5__);

// haturn data;
  }
  return __exports__;
})(__module3__, __module5__, __module2__);

// ha = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* istanbul ignore next */
  /* Jison generated parser */
  var handlebars parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"CONTENT":12,"COMMENT":13,"openRawBlock":14,"END_RAW_BLOCK":15,"OPEN_RAW_BLOCK":16,"sexpr":17,"CLOSE_RAW_BLOCK":18,"openBlock":19,"block_option0":20,"closeBlock":21,"openInverse":22,"block_option1":23,"OPEN_BLOCK":24,"CLOSE":25,"OPEN_INVERSE":26,"inverseAndProgram":27,"INVERSE":28,"OPEN_ENDBLOCK":29,"path":30,"OPEN":31,"OPEN_UNESCAPED":32,"CLOSE_UNESCAPED":33,"OPEN_PARTIAL":34,"partialName":35,"param":36,"partial_option0":37,"partial_option1":38,"sexpr_repetition0":39,"sexpr_option0":40,"dataName":41,"STRING":42,"NUMBER":43,"BOOLEAN":44,"OPEN_SEXPR":45,"CLOSE_SEXPR":46,"hash":47,"hash_repetition_plus0":48,"hashSegment":49,"ID":50,"EQUALS":51,"DATA":52,"pathSegments":53,"SEP":54,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},
  productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],
  defaultActions: {4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,1ash) {
         }
      }
      return true;
  }
  };
  /* Jison generated lexer */
  var lexer = (function(ow new Erroret = 0;
 slice(1);      }
= true;
is.unput(thisubstr(-20).replac'...':'')).replapcomingI: this.return thonditionStacurn this.conditionditionStackthis.conditio        this.begin(condition);
      }});
  lexer;
  case 38:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,38],"inclusive":true}};
  retur  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/ctStripped;
  }
  return __exports__;
})(__module5__);

// handlebaparse = parse;
  return __exports__;
})(__module9__, __module7__, __module10__, __module3__);

// handlebars/compiler/compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;
  var isArray = __dependency2__.isArray;

  var slice = [].slice;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype =    }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;
      this.stringParams = options.stringParams;
      this.trackIds = options.trackIds;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true,
        'lookup': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return thi   return this[b;
      });

      re); }
      }
 }

      th }
      this.o');
      this.ntent', content.  this.opcode('append'nvokeAmbiguous', naopcode('resolvePoss.original, ids.ambiguou id.falsy, i, data.id.depth, data.id.parts);
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    NUMBER: function(number) {
      this.opcode('pushLiteral'pcode('pushLiteral', bool.bool);
    },

    comment: funcgs: slice.call(adepths.list.push(dept
      else { retuis.pushParam(para       this.accept(val);
      );
     r().compile(environment, options);
  }
a, depths);
    };
    return ret}
      }
      return true;
    }
  }
  return __exports__;
})(__module5__, __module3__);

// handlebars/compiler/javacriptCompiler;
  return __exports__;
})(__module2__, __module5__) = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module11__, __module12__);

  return __module0__;
}));
/*1.0*/
// moment.jne&&d,WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
/*1.0*/
// jquery.pjax.js
// copyright chris wanstrath
// https://githu(this).attr("data-pjax")||o),a(e,i)})}function a(e,a,r){r=d(a,r);var o=e.currentTarget;if("A"!==o.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||location.protocol!==o.protocol||location.host!==o.host||o.hash&&o.href.replace(o.hash,"")===location.href.replace(location.hash,"")||o.href===location.href+"#")){var i={url:o.href,container:t(o).attr("data-pjax"),target:o,fragment:null};n(t.extend({},i,r)),e.preventDefault()}}function r(e,a,r){r=d(a,r);var o=e.currentTarget;if("FORM"!==o.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var i={type:o.method,url:o.action,data:t(o).serializeArray(),container:t(o).attr("data-pjax"),target:o,fragment:null};n(t.extend({},i,r)),e.preventDefault()}function n(e){function a(e,a){var n=t.Event(e,{relatedTarget:r});return l.trigger(n,a),!n.isDefaultPrevented()}if(e=t.extend(!0,{},t.ajaxSettings,n.defaults,e),e.pushstateMandatory&&!t.support.pjax)return p(e);t.isFunction(e.url)&&(e.url=e.url());var r=e.target,o=c(e.url).hash,l=e.context=f(e.container);e.data||(e.data={}),e.data._pjax=l.selector;var d;e.beforeSend=function(t,r){"GET"!==r.type&&(r.timeout=0),t.setRequestHeader("X-PJAX","true"),t.setRequestHeader("X-PJAX-Container",l.selector);return a("pjax:beforeSex:timeout",[t,e])&&t.abort("timeout")},r.timeout),r.timeout=0),void(e.reqomplete"ET"==e.type&&"abort"!==r&&l&&i(o.url)},e.success=function(r,p,u){var d=m(r,u,e);if(!d.contents)return void i(d.url);if(n.state={id:e.id||s(),url:d.url,title:d.title,container:l.selector,fragment:e.fragment,timeout:e.timeout},t.support.pjax&&(e.push||e.replace)&&window.history.replaceState(n.state,d.title,d.url),d.title&&(document.title=d.title),l.html(d.contents),"number"==typeof e.scrollTo&&t(window).scrollTop(e.scrollTo),(e.replace||e.push)&&("undefined"!=typeof GoogleAnalytics&&"function"==typeof GoogleAnalytics.trackPageview?GoogleAnalytics.trackPageview():window._gaq&&_gaq.push(["_trackPageview"])),""!==o){var f=c(d.url);f.hash=o,n.state.url=f.href,t.support.pjax&&window.history.replaceState(n.state,d.title,f.href);var h=t(f.hash);h.length&&t(window).scrollTop(h.offset().top)}a("pjax:success",[r,p,u,e])},n.state||(n.state={id:s(),url:window.location.href,title:document.title,container:l.selector,fragment:e.fragment,timeout:e.timeout},t.support.pjax&&window.history.replaceState(n.state,document.title));var h=n.xhr;h&&h.readyState<4&&(h.onreadystatechange=t.noop,h.abort()),n.options=e;var h=n.xhr=t.ajax(e);return h.readyState>0&&(e.push&&!e.replace&&(x(n.state.id,l.clone().contents()),t.support.pjax&&window.history.pushState(null,"",u(e.requestUrl))),a("pjax:stallTo:!1};return n(t.extend(r,d(e,a)))}function i(e){t.support.pjax&&(window.history.replaceState(null,"","#"),window.location.replace(e))}function l(e){var a=e.state;if(a&&a.container){var r=t(a.container);if(r.length){var o=y[a.id];if(!n.state)return void(n.state=a);var l=n.state.id<a.id?"forward":"back";j(l,n.state.id,r.clone().contents());var p=t.Event("pjax:popstate",{state:a,direction:l});r.trigger(p);var s={id:a.id,url:a.url,container:r,push:!1,fragment:a.fragment,timeout:a.timeout,scrollTo:!1};o?(r.trigger("pjax:start",[null,s]),a.title&&(document.title=a.title),r.html(o),n.state=a,r.trigger("pjax:end",[null,s])):n(s),r[0].offsetHeight}else i(location.href)}}function p(e){var a=t.isFunction(e.url)?e.url():e.url,r=e.type?e.type.toUpperCase():"GET",n=t("<form>",{method:"GET"===r?"GET":"POST",action:a,style:"display:none"});"GET"!==r&&"POST"!==r&&n.append(t("<input>",{type:"hidden",name:"_method",value:r.toLowerCase()}));var o=e.data;if("string"==typeof o)t.each(o.split("&"),function(e,a){var r=a.split("=");n.append(t("<input>",{type:"hidden",name:r[0],value:r[1]}))});else if("object"==typeof o)for(key in o)n.append(t("<input>",{type:"hidden",name:key,value:o[key]}));var i=type:"hidden",name:r[0],value:r[1]}))})er&&(a.container=f(a.container)),a}function f(e){if(e=t(e),e.length){if(""!==e.selector&&e.context===document)return e;if(e.attr("id"))return t("#"+e.attr("id"));throw"cant get selector for pjax container!"}th,e){return t.filter(e).add(t.find(e))}function m(e,a,r){var n={};if(n.url=u(a.getResponseHeader("X-PJAX-URL")||r.requestUrl),/<html/i.test(e))var o=t(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),i=t(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);else var o=i=t(e);if(0===i.length)return n;if(n.title=h(o,"title").last().text(),r.fragment){if("body"===r.fragment)var l=i;else var l=h(i,r.fragment).first();l.length&&(n.contents=l.contents(),n.title||(n.title=l.attr("title")||l.data("title")))}else/<html/i.test(e)||(n.contents=i);return n.contents&&(n.contents=n.contents.not("title"),n.contents.find("title").remove()),n.title&&(n.title=t.trim(n.title)),n}function x(t,e){for(y[t]=e,b.push(t);w.length;)delete y[w.shift()];for(;b.length>n.defaults.maxCacheLength;)delete y[b.shift()]}function j(t,e,a){var r,n;y[e]=a,"forward"===t?(r=b,n=w):(r=w,n=b),r.push(e),(e=n.pop())&&delete y[e]}function v(){t.fn.pjax=e,t.pjax=n,t.pjax.enable=t.noop,t.pjax.disable=g,t.pjax.click=a,t.pjax.submit=r,t.pjax.reload=o,t.pjax.defaults={timeout:5e3,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,pushstateMandatory},t(window).unbind("popstate.pjax",l)}var y={},w=[],b=[];t.inArray("state",t.event.props)<0&&t.event.props.push("state"),t.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),v()}(jQuery),jQuery.pjax.defaults||(jQuery.pjax.defaults={}),jQuery.pjax.defaults.timeout=5e3;
/*1.0*/
/*!
 * jQuery Form Plugin
 * version: 3.24 (26-DEC-2012)
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
/*global ActiveXObjestError){window.opera.postError(t)}}var t={};t.fileapi=e("<input type='file'/>").get(0).files!==undefined;t.formdata=window.FormData!==undefined;e.fn.ajaxSubmit=function(n){function T(t){var n=e.param(t).split("&");var r=n.length;var i={};var s,o;for(s=0;s<r;s++){n[s]=n[s].replace(/\+/g," ");o=n[s].split("=");i[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return i}function N(t){var i=new FormData;for(var s=0;s<t.length;s++){i.append(t[s].name,t[s].value)}if(n.extraData){var o=T(n.extraData);for(var u in o)if(o.hasOwnProperty(u))i.append(u,o[u])}n.data=null;var a=e.extend(true,{},e.ajaxSettings,n,{contentType:false,processData:false,cache:false,type:)}n.uploadProgress(e,r,i,t)}}return e}}a.datn(e,t){t.data=i;if(f)f.call(thie.contentDoc(x);if(b)clearTimeout(b);b=undefined}}var t=u.attr("target"),n=u.attr("action");s.setAttribute("target",h);if(!r){s.setAttribute("method","POST")}if(n!=f.url){s.setAttribute("action",f.url)}if(!f.skipEncodingOverride&&(!r||/post/i.test(r))){u.attr({encoding:"multipart/form-data",enctype:"multipart/f){b=setTimeout(function(){y=true;_(S)},f.timeout)}var a=[];try{if(f.extraData){for(var l in f.extraData){if(f.extraData.hasOwnProperty(l)){if(e.isPlainObject(f.extraData[l])&&f.extraData[l].hasOwnProperty("name")&&f.extraData[l].hasOwnProperty("value")){a.push(e('<input type="hidden" name="'+f.extraData[l].name+'">').val(f.extraData[l].value).appendTo(s)[0])}else{a.push(e('<input type="hidden" name="'+l+'">').val(f.extraData[l]).appendTo(s)[0])}}}}if(!f.iframeTarget){p.appendTo("body");if(d.attachEvent)d.attachEvent("onload",_);else d.addEventListener("load",_,false)}setTimeout(o,15);s.submit()}finally{s.setAttribute("action",n);if(t){s.setAttribute("target",t)}elset)p.remove();v.responseXML=null},100)}var s=u[0],o,a,f,c,h,p,d,v,m,g,y,b;var w=!!e.fn.prop;var E=e.Deferred();if(e("[name=submit],[id=submit]",s).length){alert('Error: Form elements must not have name or id of "submit".');E.reject();return E}if(t){for(a=0;a<l.length;a++){o=e(l[a]);if(w)o.prop("disabled",false);else o.removeAttr("disabled")}}f=e.extend(true,{},e.ajaxSettings,n);f.context=f.context||f;h="jqFormIO"+(new Date).getTime();if(f.iframeTarget){p=e(f.iframeTarget);g=p.attr("name");if(!g)p.attr("name",h);else h=g}else{p=e('<iframe name="'+h+'" src="'+f.iframeSrc+'" />');p.css({position:"absolute",top:"-1000px",left:"-1000px"})}d=p[0];v={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function()mplete)f.complete.call(f.context,v,n)}};c=f.global;if(c&&0===e.active++){e.event.trigger("ajaxStart")}if(c){e.event.trigger("ajaxSend",[v,f])}if(f.beforeSend&&f.beforeSend.call(f.context,v,f)===false){if(f.global){e.active--}E.reject();return E}if(v.aborted){E.reject();return E}m=s.clk;if(m){g=m.name;if(g&&!m.disabled){f.extraData=f.extraData||{};f.extraData[g]=m.value;if(m.type=="image"){f.extraData[g+".x"]=s.clk_x;f.extraData[g+".y"]=s.clk_y}}}var S=1;var x=2;var N=e("meta[name=csrf-token]").attr("content");var C=e("meta[name=csrf-param]").attr("content");if(C&&N){f.extraData=f.extraData||{};f.extraData[C]=N}if(f.forceSync){k()}else{setTimeout(lement.nodeName!="pn(e){rcript")>=0){e.globalEval(o)}}return o};return E}if(!this.length){i("ajaxSubmit: skipping submit process - no element selected");return this}var r,s,o,u=this;if(typeof n=="function"){n={success:n}}r=this.attr("method");s=this.attr("action");o=typeof s==="string"?e.trim(s):"";o=o||window.location.href||"";if(o){o=(o.match(/^([^#]+)/)||[])[1]}n=e.extend(true,{url:o,success:e.ajaxSettings.success,type:r||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},n);var a={};this.trigger("form-pre-serialize",[this,n,a]);if(a.veto){i("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(n.beforeSerialize&&n.beforeSerialize(this,n)===false){i("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var f=n.traditional;if(f===undefined){f=e.ajaxSettings.traditional}var l=[];var c,h=this.formToArray(n.semantic,l);if(n.data){n.extraData=n.data;c=e.param(n.data,f)}if(n.beforeSubmit&&n.beforeSubmit(h,this,n)===false){i("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[h,this,n,a]);if(a.veto){i("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var p=e.param(h,f);if(c){p=p?p+"&"+c:c}if(n.type.toUpperCase()=="GET"){n.url+=(n.url.indexOf("?")>=0?"&":"?")+p;n.data=null}else{n.data=p}var d=[];if(n.resetForm){d.push(function(){nction(){u.clearForm(n.includeHidden)})}if(!n.dataType&&n.target";e(n.target)[r](t).each(v,arguments)})}else if(;s<o;s++){d[s].apply(i,[e,t,r||u,u])}};var m=e('input[type=file]:enabled[value!=""]',this);var g=m.length>0;var y="multipart/form-data";var b=u.attr("enctype")==y||u.attr("encoding")==y;var w=t.fileapi&&t.formdata;i("fileAPI :"+w);var E=(g||b)&&!w;var S;if(n.iframe!==false&&(n.iframe||E)){if(n.et(n.closeKeepAlive,function(){S=C(h)})}else{S=C(h)}}else if((g||b)&&w){S=N(h)}else{S=e.ajax(n)}u.removeData("jqxhr").data("jqxhr",S);for(var x=0;x<l.length;x++)l[x]=null;this.trigger("form-submit-notifyn",t,n).bind("click.form-plugin",t,r)};e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-pluginname:f+".y",value:s){return e.param(this.name,value:i}))e.merge(n,o)u.push(p)}}retulect,textarea",this).clearFields(t)})};e.fn.clearFields=e.fn.clearInputs=function(t){var n=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,i=this.tagName.toLowerCase();if(n.test(r)||i=="textarea"){this.value=""}else if(r=="checkbox"||r=="radio"){this.checked=false}else if(i=="select"){this.selectedIndex=-1}else if(r=="file"){if(e.browser.msie){e(this).replaceWith(e(this).clone())}else{e(this).val("")}}else if(t){if(t===true&&/hidden/.test(r)||typeof t=="string"&&e(this).!this.reset.is.each(functi").selected(false)}this.selected=t}})};e.fn.ajaxSubmit.debug=false})(jQuery)
;
/*1.0*/
/*! http://mths.be/placeholder v2{return t.activeElement}catch(e){}}var r="placeholder"in t.createElement("input");var i="placeholder"in t.createElement("textarea");var s=n.fn;var o=n.valHooks;var u=n.propHooks;var =s.placeholder=function(){return this};l.inpu.trigger("blur.placeholder");r&t.h||(e.value=t)}else{e.value=t}return r}};f={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.attr("placeholder")},set:function(e,t){if(e!=d()){h.call(e);e.setAttribute("placeholder",t);p.call(e)}return e}};if(!r){o.input=a;u.value=a;u.placeholder=f}if(!i){o.etTimeout(function(){e.each(p)},10)})}der").each(function(){this.value=""})})}})(this,document,jQuery)

jQuery(function(){
  if(!Modernizr.input.placeholder){
    jQuery('input[placeholder], textarea[placeholder]').placeholder();
  }
});
/*1.0*/
// Modified from jQuery Mobile "touch.js"
// Maybe doesn't belong here in the "vendor" directory since it is only part of jQuery Mobile and has been modified

(function( $, window, undefined ) {
	var $document = $( document );

	// add new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"tap taphold " +
		"swipe swipeleft swiperight " +
		"s) {
			$.attrFn[ name ] = true;
		}
	});

	var supportTouch = Modernizr.touch,
		scrollEvent = "touchmove scroll",
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = suppoent );
		event.type = originalType;
	}

	// also handles scrollstop
	$.event.special.scrolvent, false );
				}, 50 );
			});
		}
	};

	// also handles taphold
	$.event.special.tap ial.tap.tapholdThreshold );
			});
		}
	};

	// also handles swipeleft, swiperight
	$.event.special.swipe = {
		scrollSupressionThreshold: 30, // More than this horizontal displacement, and we will suppress scrolling.

		durationThreshold: 1000, // More time than this, and it isn't a swipe.

		horizontalDistanceThreshold: 30,  // Swipe horizontal displacement must be more than this.

		verticalDistanceThreshold: 75,  // Swipe vertical displace	origin: $[ data.pageX, dat"swipeleft" stop = undefined;
					});
			});
		}
	};
	$.each({
		scrollstop: "scrollstart",
		taphold: "tap",
		swipeled( sourceEvent, $.noop );
			}
		};
	});

})( jQuery, this );
/*1.0*/
var I18n=I18n||{};I18n.defaultLocale="en";I18n.fallbacks=false;I18n.defaultSeparator=".";I18n.locale=null;I18n.PLACEHOLDER=/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm;I18n.isValidNode=function(e,t,n){return e[t]!==null&&e[t]!==n};I18n.lookup=function(e,t){var t=t||{},n=e,r=this.prepareOptions(I18n.translations),i=r[t.locale||I18n.currentLocale()],t=this.prepareOptions(t),s;if(!i){return}if(typeof e=="object"){e=e.join(this.defaultSeparator)}if(t.scope){e=t.scope.toString()+this.defaultSeparator+e}e=e.split(this.defaultSeparator);while(e.length>0){s=e.shift();i=i[s];if(!i){if(I18n.fallbacks&&!t.fallback){i=I18n.lookup(n,this.prepareOptions({locale:I18n.defaultLocale,fallback:true},t))}break}}if(!i&&this.isValidNode(t,"defaultValue")){i=t.defaultValue}return i};I18n.prepareOptions=function(){var e={},t,n=arguments.length;for(var r=0;r<n;r++){t=arguments[r];if(!t){continue}for(var i in t){if(!this.isValidNode(e,i)){e[i]=t[i]}}}return e};I18n.interpolate=function(e,t){t=this.prepareOptions(t);var n=e.match(this.PLACEHOLDER),r,i,s;if(!n){return e}for(var o=0;r=n[o];o++){s=r.replace(this.PLACEHOLDER,"$1");i=t[s];if(!this.isValidNode(t,s)){i="[missing "+r+" value]"}regex=new RegExp(r.replace(/\{/gm,"\\{").replace(/\}/gm,"\\}"));e=e.replace(regex,i)}return e};I18n.translate=function(e,t){t=this.prepareOptions(t);var n=this.lookup(e,t);try{if(typeof n=="object"){if(typeof t.count=="number"){return this.pluralize(t.count,e,t)}else{return n}}else{return this.interpolate(n,t)}}catch(r){return this.missingTranslation(e)}};I18n.localize=function(e,t){switch(e){case"currency":return this.toCurrency(t);case"number":e=this.lookup("number.format");return this.toNumber(t,e);case"percentage":return this.toPercentage(t);default:if(e.match(/^(date|time)/)){return this.toTime(e,t)}else{return t.toString()}}};I18n.parseDate=function(e){var t,n;if(typeof e=="object"){return e}t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?(Z|\+0000)?/);if(t){for(var r=1;r<=6;r++){t[r]=parseInt(t[r],10)||0}t[2]-=1;if(t[7]){n=new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6]))}else{n=new Date(t[1],t[2],t[3],t[4],t[5],t[6])}}else if(typeof e=="number"){n=new Date;n.setTime(e)}else if(e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/)){n=new Date;n.setTime(Date.parse(e))}else{n=new Date;n.setTime(Date.parse(e))}return n};I18n.toTime=function(e,t){var n=this.parseDate(t),r=this.lookup(e);if(n.toString().match(/invalid/i)){return n.toString()}if(!r){return n.toString()}return this.strftime(n,r)};I18n.strftime=function(e,t){var n=this.lookup("date");if(!n){return e.toString()}n.meridian=n.meridian||["AM","PM"];var r=e.getDay(),i=e.getDate(),s=e.getFullYear(),o=e.getMonth()+1,u=e.getHours(),a=u,f=u>11?1:0,l=e.getSeconds(),c=e.getMinutes(),h=e.getTimezoneOffset(),p=Math.floor(Math.abs(h/60)),d=Math.abs(h)-p*60,v=(h>0?"-":"+")+(p.toString().length<2?"0"+p:p)+(d.toString().length<2?"0"+d:d);if(a>12){a=a-12}else if(a===0){a=12}var m=function(e){var t="0"+e.toString();return t.substr(t.length-2)};var g=t;g=g.replace("%a",n.abbr_day_names[r]);g=g.replace("%A",n.day_names[r]);g=g.replace("%b",n.abbr_month_names[o]);g=g.replace("%B",n.month_names[o]);g=g.replace("%d",m(i));g=g.replace("%e",i);g=g.replace("%-d",i);g=g.replace("%H",m(u));g=g.replace("%-H",u);g=g.replace("%I",m(a));g=g.replace("%-I",a);g=g.replace("%m",m(o));g=g.replace("%-m",o);g=g.replace("%M",m(c));g=g.replace("%-M",c);g=g.replace("%p",n.meridian[f]);g=g.replace("%S",m(l));g=g.replace("%-S",l);g=g.replace("%w",r);g=g.replace("%y",m(s));g=g.replace("%-y",m(s).replace(/^0+/,""));g=g.replace("%Y",s);g=g.replace("%z",v);return g};I18n.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),{precision:3,separator:".",delimiter:",",strip_insignificant_zeros:false});var n=e<0,r=Math.abs(e).toFixed(t.precision).toString(),i=r.split("."),s,o=[],u;e=i[0];s=i[1];while(e.length>0){o.unshift(e.substr(Math.max(0,e.length-3),3));e=e.substr(0,e.length-3)}u=o.join(t.delimiter);if(t.precision>0){u+=t.separator+i[1]}if(n){u="-"+u}if(t.strip_insignificant_zeros){var a={separator:new RegExp(t.separator.replace(/\./,"\\.")+"$"),zeros:/0+$/};u=u.replace(a.zeros,"").replace(a.separator,"")}return u};I18n.toCurrency=function(e,t){t=this.prepareOptions(t,this.lookup("number.currency.format"),this.lookup("number.format"),{unit:"$",precision:2,format:"%u%n",delimiter:",",separator:"."});e=this.toNumber(e,t);e=t.format.replace("%u",t.unit).replace("%n",e);return e};I18n.toHumanSize=function(e,t){var n=1024,r=e,i=0,s,o;while(r>=n&&i<4){r=r/n;i+=1}if(i===0){s=this.t("number.human.storage_units.units.byte",{count:r});o=0}else{s=this.t("number.human.storage_units.units."+[null,"kb","mb","gb","tb"][i]);o=r-Math.floor(r)===0?0:1}t=this.prepareOptions(t,{precision:o,format:"%n%u",delimiter:""});e=this.toNumber(r,t);e=t.format.replace("%u",s).replace("%n",e);return e};I18n.toPercentage=function(e,t){t=this.prepareOptions(t,this.lookup("number.percentage.format"),this.lookup("number.format"),{precision:3,separator:".",delimiter:""});e=this.toNumber(e,t);return e+"%"};I18n.pluralize=function(e,t,n){var r;try{r=this.lookup(t,n)}catch(i){}if(!r){return this.missingTranslation(t)}var s;n=this.prepareOptions(n);n.count=e.toString();switch(Math.abs(e)){case 0:s=this.isValidNode(r,"zero")?r.zero:this.isValidNode(r,"none")?r.none:this.isValidNode(r,"other")?r.other:this.missingTranslation(t,"zero");break;case 1:s=this.isValidNode(r,"one")?r.one:this.missingTranslation(t,"one");break;default:s=this.isValidNode(r,"other")?r.other:this.missingTranslation(t,"other")}return this.interpolate(s,n)};I18n.missingTranslation=function(){var e='[missing "'+this.currentLocale(),t=arguments.length;for(var n=0;n<t;n++){e+="."+arguments[n]}e+='" traneturn I18n.locale||I18n.defaultLocale};I18n.t=I18n.translate;I18n.l=I18n.localize;I18n.p=I18n.pluralize
;
/*1.0*/
/**
 * jQuery alterClass plugin
 *
 * Remove element classes with wildcard matching. Optionally add classes:
 *   $( '#foo' ).alterClass( 'foo-* bar-*', 'foobar' )
 *
 * Copyright (c) 2011 Pete Boere (the-echoplex.net)
 * Free under terms of the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ( $ ) {
	
$.fn.alterClass = function ( removals, additions ) {
	
	var self = this;
	
	if ( removals.indexOf( '*' ) === -1 ) {
		// Use native jQuery methods if there is no wildcard matching
		self.removeClass( removals );
		return !additions ? self : self.addClass( additions );
	}

	var patt = new RegExp( '\\s' + 
			removals.
				replace( /\*/g, '[A-Za-z0-9-_]+' ).
				split( ' ' ).
				join( '\\s|\\s' ) + 
			'\\s', 'g' );

	self.each( function ( i, it ) {
		var cn = ' ' + it.className + ' ';
		while ( patt.test( cn ) ) {
			cn = cn.replace( patt, ' ' );
		}
		it.className = $.trim( cn );
	});

	return !additions ? self : self.addClass( additions );
};

})( jQuery );
/*1.0*/
/*
Copyright 2012 Igor Vaynberg

Version: @@ver@@ Timestamp: @@timestamp@@

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/

(function(e){if(typeof e.fn.t.call(n[0],r,n)!==false);return this}})}pse(false);r.select()}}},0)}function x(e){(u)}u.text(t.val());return u.width()}function C(t,n,r){var i,s=[],o;i=t.attr("clasndexOf("select2-")===0){s.push(this)}})}i=n.attr("class");if(i){i=""+i;e(i.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){o=r(this);if(o){s.push(this)}}})}t.attr("class",s.join(" "))}function k(e,t,n,r){var i=e.toUpperCase().indexOf(t.toUpperCase()),s=t.length;if(i<0){n.push(r(e));return}n.push(r(e.substring(0,i)));n.push("<span class='select2-match'>");n.push(r(e.substring(i,i+s)));n.push("</span>");n.push(r(e.substring(i+s,e.length)))}function L(t){var n,r=0,i=null,s=t.quietMillis||100,o=t.url,u=this;return function(a){window.clearTimeout(n);n=window.setTimeout(function(){r+=1;var n=r,s=t.data,f=o,l=t.transport||e.ajax,c=t.type||"GET",h={};s=s?s.call(u,a.term,a.page,a.context):null;f=typeof f==="function"?f.call(u,a.term,a.page,a.context):f;if(null!==i){i.abort()}if(t.params){if(e.isFunction(t.params)){e.extend(h,t.params.call(u))}else{e.extend(h,t.params)}}e.extend(h,{url:f,dataType:t.dataType,data:s,type:c,cache:false,success:function(e){if(n<r){return}var i=t.results(e,a.page);a.callback(i)},error:function(e,i,s){if(n<r){return}t.error(e,i,s);a.callback({resud:this,text:this})}});i.callback(o)}}function M(t,n){if(e.isFunction(t))return true;if(!t)return false;throw new Error("formatterName+=D(t.children)}else{n++}});return n}function P(e,n,r,i){var s=e,o=false,u,a,f,l,c;if(!i.createSearchChoice||!i.tokenSeparators||i.tokenSeparators.length<1)return t;while(true){a=-1;for(f=0,l=i.tokenSeparators.length;f<l;f++){c=i.tokenSeparators[f];a=e.indexOf(c);if(a>=0)break}if(a<0)break;u=e.substring(0,a);e=e.substring(a+c.length);if(u.length>0){u=i.createSearchChoice(u,n);if(u!==t&&u!==null&&i.id(u)!==t&&i.id(u)!==null){o=false;for(f=0,l=n.length;f<l;f++){if(d(i.id(u),i.id(n[f]))){o=truetype=e.extend(r.prototype,n);return r}if(window.Select2!==t){return}var n,r,i,s,o,u,a,f,l,n={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:3:case n.DOif(e.metaKey)rwhich?e.which:e;return e>=112&&e<=123}},c="<div class='select2-measvar e=1;return functi",function(e){a={xturn function(){e.apply(t,arguments)}},init:function(n){var r,i,s=".select2-results",u;this.opts=n=this.prepareOpts(n);this.id=n.id;if(n.element.data("select2")!==t&&n.element.data("select2")!==null){this.destroy()}this.enabled=true;this.container=this.createContainer();this.containerId="s2id_"+(n.element.attr("id")||"autogen"+o());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.aon(){return n.element.closest("body")});C(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.css(_(n.containerCss));this.container.addClass(_(n.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabindex");this.opts.element.data("select2",this).bind("focus.select2",function(){e(this).select2("focus")}).attr("tabindex","-1").before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(_(n.dropdownCssClass));this.dropdown.data("select2",this);this.results=r=this.container.find(s);this.search=i=this.container.find("input.select2-input");this.resultsPage=0;this.context=null;this.initContainer();y(this.results);this.dropdown.delegate(s,"mousemove-filtered touchstart touchmove touchend",this.bind(this.highlightUnderEvent));E(80,this.results);this.dropdown.delegate(s,"scroll-debounced",this.bind(this.loadMoreIfNeeded));e(this.container).delegate(".select2-input","change",function(e){e.stopPropagation()});e(this.dropdown).delegate(".select2-input","change",function(e){e.stopPropagation()});if(e.fn.mousewheel){r.mousewheel(function(e,t,n,i){var s=r.scrollTop(),o;if(i>0&&s-i<=0){r.scrollTop(0);x(e)}else if(i<0&&r.get(0).scrollHeight-r.scrollTop()+i<=r.height()){r.scrollTop(r.get(0).scrollHeight-r.height());x(e)}})}g(i);i.bind("keyup-change input paste",this.bind(this.updateResults));i.bind("focus",function(){i.addClass("select2-focused")});i.bind("blur",function(){i.removeClass("select2-focused")});this.derEvent(t);this.selectHighlighted(t)}}));this.dropdown.bind("click mouseup mousedown",function(e){e.stopPropagation()});if(e.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource()}if(n.element.is(":disabled")||n.element.is("[readonly='readonly']"))this.disable();l=l||p()},destroy:function(){var e=this.opts.element.data("select2");if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null}if(e!==t){e.container.remove();e.dropdown.remove();e.opts.element.removeClass("select2-offscreen").removeData("select2").unbind(".select2").attr({tabindex:this.elementTabIndex}).show()}},optionToData:function(e){if(e.is("option")){return{id:e.attr("value"),text:e.text(),element:e.get(),css:e.attr("class"),disabled:d(e.attr("disabled"),"disabled"),locked:d(e.attr("locked"),"locked")}}else if(e.is("optgroup")){return{text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")}}},prepareOpts:function(n){var r,i,s,o,u=this;r=n.element;if(r.get(0).tagName.toLowerCase()==="select"){this.select=i=n.element}if(i){e.each(["id","multiple","ajax","query","createSearchen attached to a <select> element.")}})}n=e.extend({},{populateResults:functim.data("select2-data",h);i.append(m)}};o(i,r,0)}},e.fn.select2.defaults,n);if(typeof n.id!=="function"){s=n.id;n.id=function(e){return e[s]}}if(e.isArray(n.element.data("select2Tags"))){if("tags"in n){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+n.element.attr("id")}n.tags=n.element.data("select2Tags")}if(i){n.query=this.bind(function(n){var i={r);if(r.children.length>0){t.push(r)}}};o=r.children();if(this.getPlaceholder()!==t&&o.length>0){a=o[0];if}o.each2(function(e,t){f(t,i.results)});n.callback(i)});n.id=function(e){return e.id};n.formatResultCssClass=function(e){return e.css}}else{if(!("query"in n)){if("ajax"in n){o=n.element.data("ajax-url");if(o&&o.length>0){n.ajax.url=o}n.query=L.call(n.element,n.ajax)}else if("data"in n){n.query=A(n.data)}else if("tags"in n){n.query=O(n.tags);if(n.createhoice=function(e){return{id:e,text:e}}}if(n.initSelection===t){n.initSelection=function(t,r){var i=[];e(v(t.val(),n.separator)).each(function(){var t=this,r=this,s=n.tags;if(e.isFunction(s))s=s();e(s).each(function(){if(d(this.id,t)){r=this.text;return false}});i.push({id:t,text:r})});r(i)}}}}}if(typeof n.query!=="function"){throw"query function not defined for Select2 "+n.element.attr("id")}return n},monitorSource:function(){var e=this.opts.elemegered")!==true){this.initSelection()}}));t=this.bind(function(){var e,t,n=this;e=this.opts.element.attr("disabled")!=="disabled";t=this.opts.element.attr("readonly")==="readonly";e=e&&!t;if(this.enabled!==e){if(e){this.enable()}else{this.disable()}}C(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.addClass(_(this.opts.containerCssClass));C(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(_(this.opts.dropdownCssClass))});e.bind("propertychange.select2 DOMAttrModified.select2",t);if(typeof WebKitMutationObserver!=="undefined"){if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null}this.propertyObserver=new WebKitMutationObserver(function(e){e.forEach(t)});this.propertyObserver.observe(e.get(0),{attributegger(n);returnblurOnChange)this.opts.element.blur()},enable:function(){if(this.enabled)return;this.enabled=true;this.container.removeClass("select2-container-disabled");this.opts.element.removeAttr("disabled")},disable:function(){if(!this.enabled)return;this.close();this.enabled=false;this.container.addClass("select2-container-disabled");this.opts.element.attr("disabled","disabled")},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t=this.dropdown,n=this.container.offset(),r=this.container.outerHeight(false),i=this.container.outerWidth(false),s=t.outerHeight(false),o=e(window).scrollLeft()+e(window).width(),u=e(window).scrollTop()+e(window).height(),a=n.top+r,f=n.left,c=a+s<=u,h=n.top-s>=this.body().scrollTop(),p=t.outerWidth(false),d=f+p<=o,v=t.hasClass("select2-drop-above"),m,g,y,b;if(this.opts.dropdownAutoWidth){b=e(".select2-results",t)[0];t.addClass("select2-drop-auto-width");t.css("width","");p=t.outerWidth(false)+(b.scrollHeight===b.clientHeight?0:l.width);p>i?i=p:p=i;d=f+p<=o}else{this.container.removeClass("select2-drop-auto-width")}if(this.body().css("position")!=="static"){m=this.body().offset();a-=m.top;f-=m.left}if(v){g=true;if(!h&&c)g=false}else{g=false;if(!c&&h)g=true}if(!d){f=n.left+i-p}if(g){a=n.top-s;this.container.addClass("select2-drop-above");t.addClass("select2-drop-above")}else{this.container.removeClass("select2-drop-above");t.removeClass("select2-drop-above")}y=e.extend({top:a,left:f,width:i},_(this.opts.dropdownCss));t.css(y)},shouldOpen:function(){var t;if(this.opened())return false;t=e.Event("opening");this.opts.element.trigger(t);return!t.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return false;window.setTimeout(this.bind(this.openient.scrollHeight,e(window).height())}}var t=this.containerId,n="scroll."+t,r="resize."+t,i="orientationchange."+t,s;this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.clearDropdownAlignmentPreference();if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body())}s=e("#select2-drop-mask");if(s.length==0){s=e(document.createElement("div"));s.attr("id","select2-drop-mask").attr("class","select2-drop-mask");s.hide();s.appendTo(this.body());s.bind("mousedown touchstart",function(t){var n=e("#select2-drop"),r;if(n.length>0){r=n.data("select2");if(r.opts.selectOnBlur){r.selectHighlighted({noFocus:true})}r.close()}})}if(this.dropdown.prev()[0]!==s[0]){this.dropdown.before(s)}e("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");s.css(u());s.show();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();var o=this;this.container.parents().add(window).each(function(){e(this).bind(r+" "+n+" "+i,function(t){e("#select2-drop-mask").css(u());o.positionDropdown()})})},close:function(){if(!this.opened())return;var t=this.containerId,n="scroll."+t,r="resize."+t,i="orientationchange."+t;thie(this).unbind(n).unbind(r).unbind(i)});this.clearDropdownAlignmentPreference();e("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open");this.results.empty();this.clearSearch();this.search.removeClass("select2-active small-spinner");this.opts.element.trigger(e.Event("close"))},clearSearcurn _(this.opts.maximum"none"){t.scrollTop(t.scrollTop()+u)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):nselected")){this.highlight(r);break}}},highlight:function(t){var n=this.findHighlightableChoices(),r,i;if(arguments.length===0){return h(n.filter(".select2-highlighted")[0],n.get())}if(t>=n.length)t=n.length-1;if(t<0)t=0;this.results.find(".select2-highlighted").removeClass("select2-highlighted");r=e(n[t]);r.addClass("select2-highlighted");this.ensureHighlightVisible();i=r.data("select2-data");if(i){this.opts.element.trigger({type:"highlight",val:this.id(his.findHighlightableChoices().length},highlightUnderEvent:function(t){var n=e(t.target).closest(".select2-result-selectable");if(n.length>0&&!n.is(".select2-highlighted")){var r=this.findHighlightableChoices();this.highlight(r.index(n))}else if(n.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted")}},loadMoreIfNeeded:function(){var e=this.results,t=e.find("li.select2-more-results"),n,r=-1,i=this.resultsPage+1,s=this,o=this.search.val(),u=this.context;if(t.length===0)return;n=t.offset().top-e.offset().top-e.height();if(n<=this.opts.loadMorePadding){t.addClass("select2-active small-spinner");this.opts.query({element:this.opts.element,term:o,page:i,context:u,matcher:this.opts.matcher,callback:this.bind(function(n){if(!s.opened())return;s.opts.populateResults.call(this,e,n.results,{term:o,page:i,context:u});s.postprocessResults(n,false,false);if(n.more===true){t.detach().appendTo(e).text(s.opts.formatLoadMore(i+1));window.setTimeout(function(){s.loadMoreIfNeeded()},10)}else{t.remove()}s.positionDropdown();s.resultsPage=i;s.context=n.context})})}},tokenize:function(){},updateResults:function(n){function c(){i.scrollTop(0);r.removeClass("select2-active small-spinner"ropdown()}function h(e){i.html(e);c()}var r=this.search,i=this.results,s=this.opts,o,u=this,a,f=r.val(),l=e.data(this.container,"select2-last-term");if(n!==true&&l&&d(f,l))return;e.data(this.container,"select2-last-term",f);if(n!==true&&(this.showSearchInput===false||!this.opened())){return}var p=this.getMaximumSelectionSize();if(p>=1){o=this.data();if(e.isArray(o)&&o.length>=p&&M(s.formatSelectionTooBig,"formatSelectionTooBig")){h("<li class='select2-selection-limit'>"+s.formatSelectionTooBig(p)+"</li>");return}}if(r.val().length<s.minimumInputLength){if(M(s.formatInputTooShort,"formatInputTooShort")){h("<li class='select2-no-results'>"+s.formatInputTooShort(r.val(),s.minimumInputLength)+"</li>")}else{h("")}return}if(s.maximumInputLength&&r.val().length>s.maximumInputLength){if(M(s.formatInputTooLong,"formatInputTooLong")){h("<li class='select2-no-results'>"+s.formatInputTooLong(r.val(),s.maximumInputLength)+"</li>")}else{h("")}return}if(s.formatSearching&&this.findHighlightableChoices().length===0){h("<li class='select2-searching'>"+s.formatSearching()+"</li>")}r.addClass("select2-active small-spinner");a=this.tokenize();if(a!=t&&a!=null){r.val(a)}this.resultsPage=1;s.query({element:s.element,term:r.val(),page:this.resultsPage,context:null,matcher:s.matcher,callback:this.bind(function(o){var a;if(!this.opened()){this.search.removeClass("select2-active small-spinner");return}this.context=o.context===t?null:o.context;if(this.opts.createSearchChoice&&r.val()!==""){a=this.opts.createSearchChoice.call(null,r.val(),o.results);if(a!==t&&a!==null&&u.id(a)!==t&&nction(){return d(u.id(this),u.id(a))}).length===0){o.results.unshift(a)}}}if(o.error){h("<li class='select2-no-results'> Sorry, an error occurred.</li>");return}else if(o.results.length===0&&M(s.formatNoMatches,"formatNoMatches")){h("<li class='select2-no-results'>"+s.formatNoMatches(r.val())+"</li>");return}i.empty();u.opts.populateResults.call(this,i,o.results,{term:r.val(),page:this.resultsPage,context:null});if(o.more===true&&M(s.formatLoadMore,"formatLoadMore")){i.append("<li class='select2-more-results'>"+u.opts.escapeMarkup(s.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){u.loadMoreIfNeeded()},10)}this.postprocessResults(o,n);c();this.opts.element.trigger({type:"loaded",data:o})})})eClass("selefocusSearch:function(){S(this.search)},selectHighlighted:function(e){var t=this.highlight(),n=this.results.find(".select2-highlighted"),r=n.closest(".select2-result").data("select2-data");if(r){this.highlight("placeholder")||this.opts.placeholder},initContainerWidth:function(){function n(){var n,r,i,s,o;if(this.opts.width==="off"){return null}else if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}else if(this.opts.width==="copy"||this.opts.width==="resolve"){n=this.opts.element.attr("style");if(n!==t){r=n.split(";");for(s=0,o=r.length;s<o;s=s+1){i=r[s].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);if(i!==null&&i.length>=1)return i[1]}}n=this.opts.element.css("width");if(n&&n.length>0)return n;if(this.opts.width==="resolve"){return this.opts.element.outerWidth(false)===0?"auto":this.opts.element.outerWidth(false)+"px"}return null}else if(e.isFunction(this.opts.width)){return this.opts.width()}else{return this.opts.width}}var r=n.call(this);if(r!==null){this.container.css   </ul>","</div>"].join(""));return t},disable:function(){if(!this.enabled)return;this.parent.disable.apply(this,arguments);this.focusser.attr("disabled","disabled")},enable:function(){if(this.enabled)return;this.parent.enable.apply(this,arguments);this.focusser.removeAttr("disabled")},opening:function(){this.parent.opening.apply(this,arguments);if(this.showSearchInput!==false){this.search.val(this.focusser.val())}this.search.focus();this.focusser.attr("disabled","disabled").val("");this.updateResults(true);this.opts.element.trigger(e.Event("open"))},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus()}},isFocused:function(){return this.container.hasClAttr("disabled");this.focusser.focus()},initContainer:function(){var t,r=this.container,i=this.dropdown,s=false;this.showSearch(this.opts.minimumResultsForSearch>=0);this.selection=t=r.find(".select2-choice");this.focusser=r.find(".select2-focusser");this.focusser.attr("id","s2id_autogen"+o());e("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id"));this.focusser.attr("tabindex",this.elementTabIndex);this.search.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN){x(e);return}switch(e.which){case n.UP:case n.DOWN:this.moveHighlight(e.which===n.UP?-1:1);x(e);return;case n.TAB:case n.ENTER:this.selectHighlighted();x(e);return;case n.ESC:this.cancel(e);x(e);returd(function(){this.search.focus()}),0)}}));this.focusser.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.ESC){return}if(this.opts.openOnEnter===false&&e.which===n.ENTER){x(e);return}if(e.which==n.DOWN||e.which==n.UP||e.which==n.ENTER&&this.opts.openOnEnter){this.open();x(e);return}if(e.which==n.DELETE||e.which==n.BACKSPACE){if(this.opts.allowClear){this.clear()}x(e);return}}));g(this.focusser);this.focusser.bind("keyup-change input",this.bind(function(e){e.stopPropagation();if(this.opened())return;this.open()}));t.delegate("abbr","mousedown",this.bind(function(e){if(!this.enabled)return;this.clear();T(e);this.close();this.selection.focus()}));t.bind("mousedown",this.bind(function(e){s=true;if(this.opened()){this.close()}else if(this.enabled){this.open()}x(e);s=false}));i.bind("mousedown",this.bind(function(){this.search.focus()}));t.bind("focus",this.bind(function(e){x(e)}));this.focusser.bind("focus",this.bind(function(){this.container.addClass("select2-contmoveClass("select2-container-active")}}));this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.setPlaceholder()},clear:function(e){var t=this.selection.data("select2-data");if(t){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder();if(e!==false){this.opts.element.trigger({type:"removed",val:this.id(t),choice:t});this.triggerChange({removed:t})}}},initSelection:function(){var e;if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);this.close();this.setPlaceholder()}else{var n=this;this.opts.initSelection.call(null,this.opts.element,function(e){if(e!==t&&e!==null){n.updateSelection(e);n.close();n.setPlaceholder()}})}},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),n=this;if(t.element.get(0).tagName.tofind(":selected");t(n.optionToData(r))}}else if("datasFunction(r)?e.noop:function(){r(s)}})}}return t},getPlaceholder:function(){if(this.select){if(this.select.find("option").first().text()!==""){return t}}return this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var e=this.getPlaceholder();if(this.opts.element.val()===""&&e!==t){if(this.select&&this.select.find("option:first").text()!=="")return;this.selection.find("span").html(this.opts.escapeMarkup(e));this.selection.addClass("select2-default");this.container.removeClass("select2-allowclear");this.selection.find("abbr").hide()}},postprocessResults:function(e,t,n){var r=0,i=this,s=truopts.element.val())){r=e;return false}});if(n!==false){this.highlight(r)}if(t===true){var o=this.opts.minimumResultsForSearch;s=o<0?false:D(e.results)>=o;this.showSearch(s)}},showSearch:function(t){this.showSearchInput=t;this.dropdown.find(".select2-search")[t?"removeClass":"addClass"]("select2-search-hidden");e(this.dropdown,this.container)[t?"addClass":"removeClass"]("select2-with-searchbox")},onSelect:function(e,t){if(!this.triggerSelect(e)){return}var n=this.opts.element.val(),r=this.data();this.opts.element.val(this.id(e));this.updateSelection(e);this.opts.element.trigger({type:"selected",val:this.id(e),choice:e});this.close();if(!t||!t.noFocus)this.selection.focus();if(!d(n,this.id(e))){this.triggerChange({added:e,removed:r})}},updateSelection:function(e){var n=this.selection.find("span"),r;this.selection.data("select2-data",e);n.empty();r=this.opts.formatSelection(e,n);if(r!==t){n.append(this.opts.escapeMarkup(r))}this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==t){this.container.addClass("select2-allowclear");this.selection.find("abbr").show()}},val:function(){var e,n=false,r=null,i=this,s=this.data();if(arguments.length===0){return this.opts.element.val()}e=arguments[0];if(arguments.length>1){n=arguments[1]}if(this.select){thi(e,t){r=i.optionToData(t);return false});this.updateSelection(r);this.setPlaceholder();if(n){this.triggerChange({added:r,removed:s})}}else{if(this.opts.initSelection===t){throw new Error("cannot call val() if initSelection() is not defined")}if(!e&&e!==0){this.clear(n);return}this.opts.element.val(e);th{i.triggerChangs.search.val("");this.focusser.val("")},data:function(e,n){var r;if(arguments.length===0){r=this.selection.data("select2-data");if(r==t)r=null;return r}else{if(!e||e===""){this.clear(n)}else{r=this.data();this.opts.element.val(!e?"":this.id(e));this.updateSelection(e);if(n){this.triggerChange({added:e,r   </ul>","</div>"].join(""));return t},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),n=this;if(t.element.get(0).tagName.toLowerCase()==="select"){t.initSelection=function(unction(e,t){r.push(n.optionToData(t))});t(r)}}else if("data"in t){t.initSelection=t.initSelection||function(n,r){var i=v(n.val()(o))}).length;if(u){s.push(o)}rete.isFunction(r)?e.noop:function(){r(s)}})}}return t},initContainer:function(){var t=".select2-choices",r;this.searchContainer=this.container.find(".select2-search-field");this.selection=r=this.container.find(t);this.search.attr("id","s2id_autogen"+o());e("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id"));this.search.bind("input paste",this.bind(function(){if(!this.enabled)return;if(!this.opened()){this.open()}}));this.search.attr("tabindex",this.elementTabIndex);this.search.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===n.BACKSPACE&&this.search.val()===""){this.close();var t,i=r.find(".select2-search-choice-focus");if(i.length>0){this.unselect(i.first());this.search.width(10);x(e);return}t=r.find(".select2-search-choice:not(.select2-locked)");if(t.length>0){t.last().addClass("select2-search-choice-focus")}}else{r.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")}if(this.opened()){switch(e.which){case n.UP:case n.DOWN:this.moveHighlight(e.which===n.UP?-1:1);x(e);return;case n.ENTER:case n.TAB:this.selectHighlighted();x(e);return;case n.ESC:this.cancel(e);x(e);return}}if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.BACKSPACE||e.which===n.ESC){return}if(e.which===n.ENTER){if(this.opts.openOnEnter===false){return}else if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey){return}}this.open();if(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN){x(e)}if(e.which===n.ENTER){x(e)}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(e){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");if(!this.opened())this.clearSearch();e.stopImmediatePropagation()}));this.container.delegate(t,"mousedown",this.bind(function(t){if(!this.enabled)return;if(e(t.target).closest(".select2-search-choice").length>0){return}this.clearPlaceholder();this.open();this.focusSearch();t.preventDefault()}));this.container.delegate(t,"focus",this.bind(function(){if(!this.enabled)return;this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder()}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.clearSearch()},enable:function(){if(this.enabled)return;this.parent.enable.apply(this,arguments);this.search.removeAttr("disabled")},disable:function(){if(!this.enabled)return;this.parent.disable.apply(this,arguments);this.searction(e);n.c))}else{this.searal("").r.opts.his.paion(){this.close();this.search.focus()},isFocused:function(){return this.search.hasCldChoice(this)});i.postprocessResults()},tokenize:function(){var e=this.search.val();e=this.opts.tokenizer(e,this.data(),this.bind(this.onSelect),this.opts);if(e!=null&&e!=t){this.search.val(e);if(e.length>0){this.open()}}},onSelect:function(e,t){if(!this.triggerSelect(e)){return}this.addSelectedChoice(e);this.opts.element.trigger({type:"selected",val:this.id(e),choice:e});if(this.select||!this.opts.closeOnSelect)this.postprocessResults();if(this.opts.closeOnSelect){this.close();this.search.width(10)}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true)}this.positionDropdown()}else{this.close();this.search.width(10)}}this.triggerChange({added:e});if(!ttion(){this.close();this.focusSearch()},addSelectedChoice:function(n){var r=!n.locked,i=e("<li class='select2-search-choice'>"+"    <div></div>"+"    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>"+"</li>"),s=e("<li class='select2-search-choice select2-locked'>"+"<div></div>"+"</li>");var o=r?i:s,u=this.id(n),a=this.getVal(),f;f=this.opts.formatSelection(n,o.find("div"));if(f!=t){o.find("div").replaceWith("<div>"+this.opts.escapeMarkup(f)+"</div>")}if(r){o.find(".select2-search-choice-close").bind("mousedown",x).bind("click dblclick",this.bind(function(t){if(!this.enabled)return;e(t.target).closest(".select2-socus");this.close();this.focusSearch()})).dequeue();x(t)})).bind("focus",this.bind(function(){if(!this.enabled)return;this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active")}))}o.data("select2-data",n);o.insertBefore(this.searchContainer);a.push(u);this.setVal(a)},unselect:function(e){var t=this.getVal(),n,r;e=e.closest(".select2-search-choice");if(e.length===0){throw"Invalid argument: "+e+". Must be .select2-search-choice"}n=e.data("select2-data");if(!n){return}r=h(this.id(n),t);if(r>=0){t.splice(r,1);this.setVal(t);if(this.select)this.postprocessResults()}e.remove();this.opts.element.trigger({type:"removed",val:this.id(n),choice:n});this.triggerChange({removed:n})},postprocessResults:function(){var e=this.getVal(),t=this.results.find(".select2-result"),n=this.results.find(".selectctable").h===0){t.addClass("select2-selected")}});if(this.highlight()= this.selection.width()-m(this.search)},resizeSearch:function(){var e,t,n,r,i,s=m(this.search);e=N(this.search)+10;t=this.search.offset().left;n=this.selection.width();r=this.selection.offset().left;i=n-(t-r)-s;if(i<e){i=n-s}if(i<40){i=n-s}ifval();rh===0?"":n.join(this.opts.separator))}},buildChangeDetails:function(e,t){var t=t.slice(0),e=e.slice(0);for(var n=0;n<t.length;n++){for(var r=0;r<e.length;r++){if(d(this.opts.id(t[n]),this.opts.id(e[r]))){t.splice(n,1);n--;e.splice(r,1);r--}}}return{added:t,removed:e}},val:function(n,r){var i,s=this,o;if(arguments.length===0){return this.getVal()}i=this.data();if(!i.length)i=[];if(!n&&n!==0){this.opts.element.val("");this.updateSelection([]);this.clearSearch();if(r){this.triggerChange({added:this.data(),removed:i})}return}this.setVal(n);if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection));if(r){this.triggerChange(this.buildChangeDetails(i,this.data()))}}else{if(this.opts.initSelection===t){throw new Error("val() cannot be called if initSelection() is not defined")}this.opts.initSelection(this.opts.element,function(t){var n=e(t).map(s.id);s.setVal(n);s.updateSelection(t);s.clearSearch();if(r){s.triggerChange(this.buildChangeDetails(i,this.datah.width(0)});ths.buildChangeDetails(s,this.data()))}}}});e.fn.select2=function(){var n=Array.prototype.slice.call(arguments,0),r,o,u,a,f=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","disable","positionDropdown","data"];this.each(function(){if(n.length===0||typeof n[0]==="object"){r=n.length===0?{}:e.extend({},n[0]);r.element=e(this);if(r.element.get(0).tagName.toLowerCase()==="select"){a=r.element.attr("multiple")}else{a=r.multiple||false;if("tags"in r){r.multiple=a=true}}o=a?new s:new i;o.init(r)}else if(typeof n[0]==="string"){if(h(n[0],f)<0){throw"Unknown method: "+n[0]}u=t;o=e(this).data("select2");if(o===t)return;if(n[0]==="container"){u=o.container}else{u=o[n[0]].apply(o,n.slice(1))}if(u!==t){return false}}else{throw"Invalid arguments to select2 plugin: "+n}});return u===t?this:u};e.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClk(e.text,n.term,ection:funct},sortResults:function(e,t,n){return e},formatResultCssClass:function(e){return t},formatNoMatches:function(){returner "+n+" more chara delete "+n+" characte only select "+e+" item"+(e==1?"":"s")},formatLoadMore:function(e){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSizase().indexOf((""+e).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:P,escapeMarkup:function(e){var t={'\\': '&#92;','&': '&amp;','<': '&lt;','>': '&gt;','"': '&quot;',"'": '&apos;',"/": '&#47;'};<>"'\/\\]/g,function(e){return t[e[0]]})},blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:funcopdownCssClass:function(e){return null}};window.Select2={query:{ajax:L,local:A,tags:O},util:{debounce:b,markMatch:k},"class":{"abstract":r,single:i,multi:s}}})(jQuery)
;
/*1.0*/












//Used for HelpDesk UI gem











;
/*1.0*/
(f $.isFunction(val) ? val() : val;
    }
  });
})(jQuery);
/*1.0*/
/* 
 * Copyright (c) 2006-16 Spiceworks, Inc.  All Rights Reserved.  https://www.spiceworks.com
 */


String.prototype.titleize = function() {
  var val = this.split(/(?=[\_])/);
  val = _.map(val, function(p) {
    p = p.replace('_', '');
    return p.charAt(0).toUpperCase() + p.slice(1);
  }).join('');
  val = val.arAt(0).toUpperCase() + p.slice(1);
  }).jefined' ? args[number] : match;
  });
ce(new RegExp('\r?\n', 'g'), '<br>');
};

Date.prototype.elapsed = function() {
  var minutes = Math.floor((new Date() - this) / 1000 / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var weeks = Math.floor(days / 7);
  if (weeks > 3) {
    return "{0}/{1}/{2}".format(this.getMonth() + 1, this.getDate(), this.getFullYear());
  }
  else if (days > 6) {
    return "{0} week{1} ago".format(weeks, weeks > 1 ? "s" : "");
  }
  else if (hours > 23) {
    return "{0} day{1} ago".format(days, days > 1 ? "s" : "");
  }
  else if (minutes > 59) {
    return "{0} hour{1} ago".format(hours, hours > 1 ? "s" : "");
  }
  else {
    return "{0} minute{1} ago".format(minutes, minutes != 1 ? "s" : "");
  }
};

// >=IE10 no longer supports conditional comments so we have to manually add
// the 'ie' class to html for that browser
// See: http://jsfiddle.net/evildonald/jLuF5/

jQuery(function(){
  var ie10Styles = [
    'msTouchAction', 'msWrapFlow', 'msWrapMargin',
    'msWrapThrough', 'msOverflowStyle', 'msScrollChaining',
    'msScrollLimit', 'msScrollLimitXMin', 'msScrollLimitYMin',
    'msScrollLimitXMax', 'msScrollLimitYMax', 'msScrollRails',
    'msScrollSnapPointsX', 'msScrollSnapPointsY', 'msScrollSnapType',
    'msScrollSnapX', 'msScrollSnapY', 'msScrollTranslation',
    'msFlexbox', 'msFlex', 'msFlexOrder'];

  var ie11Styles = ['msTextCombineHorizontal'];

  /*
   * Test all IE only CSS properties
   */
  var body = document.body;
  var style = body.style;
  var ieVersion = null;
  var i, property;

  for (i = 0; i < ie10Styles.length; i++) {
    property = ie10Styles[i];

    if (style[property] != undefined) {
      ieVersion = "ie10";
      break; //short circuit the loop
    }
  }

  for (i = 0; i < ie11Styles.length; i++) {
    property = ie11Styles[i];

    if (style[property] != undefined) {
      ieVersion = "ie11";
      break; //short circuit the loop
    }
  }

  //Update DOM to know about IE-ness
  if (ieVersion) {
    jQuery('html').removeClass('no-ie').addClass('ie').addClass(ieVersion);
  }

  //Legacy support for <= IE9
  if (document.attachEvent && !jQuery('html').hasClass('ie')) {
    jQuery('html').removeClass('no-ie').addClass('ie');
  }
});


/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = {

  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  /At(enc4);

    }
    return output;
  },

  /_decode(output);
    return output;
  },

  // private met;
      }
    }
    return utftext;
  },

  // private met3;
      }
    }
    return string;
  }
}
;
/*1.0*/
/*
Copyright (C) 2012 Dmitriy Likhten

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(functifaultFilter = function() {return true;};
  /**
   * This represents a filtered collection. You can either pass a filter or
   * invoke setFilter(filter) to give a filter. The filter is identical to
   * that which is used for _.select(array, filter)
   *
   * false filter indicates no filtering.
   *
   * do not modify this collection directly via #add/#remove, modify the
   * underlying origModel.
   */
  Backbone.FilteredCollection = Backbone.Collection.extend({
    collectionFilter: null
    ,defaultFilter: defaultFilter

    ,initialize: function(models, data) {
      if (models) throw "models cannot be set directly, unfortunately first argument is the models.";
      this.collection = data.collection;
      this.setFilter(data.collectionFilter);

      this.collection.on("add",     this.addModel, this);
      this.collection.on("remove",  this.removeModel, this);
      this.collection.on("reset",   this.resetCollection, this);
      this.collection.on("change",  this._mtions);
      this._mapping = [];
    }

    /* THESE INTERFERE WITH EVENT BUBBLING WITH NESTED COLLECTIONS. */
    // ,add: function() {
    //   // throw "Do not invoke directly";
    // }
    // 
    // ,remove: function() {
    //   // throw "Do not invoke directly";
    // }
    // 
    // ,reset: function() {
    //   // throw "Do not invoke directly";
    // }

  ,_modelChanged: function(model){
    if (this.collectionFilter(model)){
      // Model passed filter

      if (this.indexOf(model) < 0){
        // Model not found, add it

        var index = this.collection.indexOf(model);
        this._forceAddModel(model, {index:index});
      }
    } else {
      // Model did not pass filter
      if (this.indexOf(model) > -1){
        var index = this.collection.indexOf(model);
        this._forceRemoveModel(model, {index:index});
      }
    }
  }

    ,resetCollection: function() {
      this._mapping = [];
      this._reset();
      this.setFilter(undefined, {silent: true});
      this.trigger("reset", this);
    }

    ,removeModel: function(model, colleciton, options) {
      var at = this._mapping.indexOf(options.index);
      if (at > -1) {
        this._forceRemoveModel(model, _.extend({index: at}, options));
      }
    }

    ,_forceRemoveModel: function(model, options) {
      this._mapping.splice(options.index, 1);
      Backbone.Collection.prototype.remove.call(this, model, {silent: options.silent});
    }

    ,addModel: function(model, collection, options) {
      if (this.collectionFilter(model)) {
        this._forceAddModel(model, options);
      }
    }

    ,_forceAddModel: function(model, options) {
      var desiredIndex = options.index;
      // determine where to add, look at mapping and find first object with the index
      // great than the one that we are given
      var addToIndex = _.sex) {
        return origIndex;
      });

      // add it there
      Backbone.Collection.prototype.add.call(this, model, {at: addToIndex, silent: options.silent});
      this._mapping.splice(addToIndex, 0, desiredIndex);
    }

    ,setFilter: function(newFilter, options) {
      if (newFilter === false) { newFilter = this.defaultFilter } // false = clear out filter
      this.collectionFilter = newFilter || this.collectionFilter || this.defaultFilter;
      options || (options = {});

      // this assumes that the original collection was unmodified
      // without the use of add/remove/reset events. If it was, a
      // reset event must be thrown, or this object's .resetCollection
      // method must be invoked, or this will most likely fall out-of-sync

      // why HashMap lookup when you can get it off the stack
      var filter = this.collectionFilter;
      var mapping = this._mapping;

      // this is the option object to pass, it will be mutated on each
      // iteration
      var passthroughOption = _.extend({}, options);
      this.collection.each(function(model, index) {
        var foundIndex = mapping.indexOf(index);
        passthroughOption.index = foundIndex == -1 ? this.length : foundIndex;

        if (filter(model, index)) {
          // if already added, no touchy
          if (foundIndex == -1) {
            this._forceAddModel(model, passthroughOption);
          }
        }
        else {
          if (foundIndex > -1) {
            this._forceRemoveModel(model, passthroughOption);
          }
        }
      }, this);
    }
  });
})(_, Backbone);
/*1.0*/
(function($) {
   var proxy = function(source, eventName) {
    var _self = this;
    source.on(eventName, function(e) {
      var args = Array.prototype.slice.apply(arguments)
      args.unshift(eventName);
      _self.trigger.apply(_self, args);
    });
  };

  Backbone.View.prototype.proxyEvent = proxy;
  Backbone.Model.prototype.proxyEvent = proxy;
  Backbone.Collection.prototype.proxyEvent = proxy;
  Backbone.Router.prototype.proxyEvent = proxy;

  var forward = function(target, eventName) {
    var _self = this;
    _self.on(eventName, function(e) {
      var args = Array.prototype.slice.apply(arguments)
      args.unshift(eventName);
      target.trigger.apply(target, args);
    });
  };

  Backbone.View.prototype.forwardEvent = forward;
  Backbone.Model.prototype.forwardEvent = forward;
  Backbone.Collection.prototype.forwardEvent = forward;
  Backbone.Router.prototype.forwardEvent = forward;
})(jQuery);
/*1.0*/
/*
 * Copyright (c) 2006-16 Spiceworks, Inc.  All Rights Reserved.  https://www.spiceworks.com
 */


(function($){

  //***************************************************************************
  // We want to use query parameters as a means to pass along complex viewstate data
  // i.e. deep links to certain tabs, etc. but we need to strip any query params from 
  // the fragments before the router attempts to parameterize it.  Interested parties 
  // can query the Backbone.History.ViewState methods to get any params off of query strings.
  //
  // Additionally we are now using query params as part of "viewstate" for a given url
  // we are poping any query params off of the url fragment before the fragment is passed 
  // to the router for parameterization.  The ViewState mechanisms in Backbone.History 
  // provide you with a structured access to items in the query params.
  // Author: georger@spiceworks.com
  //***************************************************************************
  Backbone.Router.prototype._extractParameters = 
    function(route, fragment) {
      var f = (Backbone.history.queryParamsEnabled())? fragment.split('?')[0] : fragment;
      var params = route.exec(f).codeURIComponent(param) : null;
      });
      return map;
    }


  //***************************************************************************
  // We are generally using the Router/History navigate event to change the 
  // history state in the browser url but we do not typically trigger events with 
  // that (to prevent circular eventing problems) so instead we're hijacking 
  // navigate and inserting our own 'navigate' event that we broadcast  on the 
  // $UI.app.vent bus (see: sw.backbone.app.js) so that we can know when to rotate ads, etc.
  //
  // Additionally we are now using query params as part of "viewstate" for a given url
  // we are popping any query params off of the url fragment before the fragment is passed 
  // to the router for parameterization.  The ViewState mechanism in Backbone.History 
  // provides you with a structured access to items in the query params.
  // Author: georger@spiceworks.com
  //***************************************************************************
  Backbone.History.prototype.__navigate__ = Backbone.History.prototype.navigate;
  Backbone.History.prototype.__getFragment__ = Backbone.History.prototype.getFragment;
  Backbone.History.prototype.__loadUrl__ = Backbone.History.prototype.loadUrl;

  _.extend(Backbone.History.prototype, {
    query: '',
    _query_enabled: false,
    _viewState: {},
    ctx: null,


    navigate: function(fragment, options){
      // Spiceworks override of the navigate event to interlace our own navigate event
      // in doing so, we attempt to preserve any query parameters that might be on the 
      // current fragment as we use them to provide complex viewstate.
      // To support this, we are adding additional option support to the navigate options:
      // viewstate: {
      //   key: 'key',    // the key for storing the viewstate
      //   value: value,  // the value for the state 
      // } 
      if(this.queryParamsEnabled()){
        if(options && options.viewstate){
          // push any viewstate option into the hash and onto the query string
          var current_state = this._viewState[options.viewstate.key] || {};
          var new_state = {value: options.viewstate.value, persist: true};
          this._viewState[options.viewstate.key] = _.extend(current_state, new_state);
          this.query = this._serializeViewStateFragment();
        }

        fragment += (this.query != '')? ('?' + this.query) : '';
      }

      // invoke the original navigate method
      this.__navigate__(fragment, options);
      this.trigger('navigate', fragment);
    },

    getFragment: function(fragment, forcePushState) {
      var query = this.query = this.getQueryString(fragment, forcePushState);
      if(this.query != ''){
        this._pullSyncViewState();
      }
      return this.__getFragment__(fragment, forcePushState);
    },
     
    loadUrl: function(fragmentOverride) {
      var query = this.query = this.getQueryString(fragmentOverride);
      if(this.query != ''){
        this._pullSyncViewState(true);
      }
      return this.__loadUrl__(fragmentOverride);
    },

    getQueryString: function(fragment, forcePushState){
      var trailingSlash = /\/$/;

      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      fragment = fragment.replace(/^[#\/]|\s+$/g, '');
      var split_fragment = fragment.split('?');
      return (split_fragment.length > 1)? split_fragment[1] : '';
    },

    testRoute: function(route){
      // Given an Backbone route expression, tests it against the current 
      // Backbone.History fragment and returns the result
      var rx = Backbone.Router.prototype._routeToRegExp(route);
      var f = this.getFragment();
      return rx.test(f);
    },     

    //***************************************************************************
    // ViewState Methods
    //***************************************************************************
    enableQueryParams: function(){
      this._query_enabled = true;
    },

    disableQueryParams: function(){
      this._query_enabled =      return this._query_enabled;
    },

    pushViewState: function(key, state, parameterize){
      // pushes the supplied state object into the hash for the current key
      // object merges function in a last-in-wins basis
      var _parameterize = parameterize || false;
      var current_state = this._viewState[key] || {};
      if(current_state.persist && current_state.persist == true){
        // force anything that is currently in the query string to remain
        _parameterize = true;
      }
      var new_state = {value: state, persist: _parameterize};
      this._viewState[key] = _.extend(current_state, new_state);
      if(_parameterize){ this._pushSyncViewState(); }
    },

    getViewState: function(key){
      // returns the viewstate value for the given key and   
      // returns an empty object if the key is unset
      var u;
      return (_.has(this._viewState, key)) ? this._viewState[key].value : u;
    },

    deleteViewState: function(key){
      // deletes the state for the given key
      this._viewState = _.omit(this._viewState, key);
      this._pushSyncViewState();
  constructor.prototype._viewState;
    },

    _pullSyncViewState: function(override){  
      // Pulls any viewstate properties from the query parameters and merges it into 
      // the current viewstate
      if(!this.queryParamsEnabled()){return;}
      var queryState = this._deserializeViewStateFragment(this.query);
      if(override){
        var keys = [];
        for(var p in this._viewState){
          if(this._viewState[p].persist == true){
            keys.push(p);
          }
        }
        if(keys.length > 0){
          this._viewState = _.omit(this._viewState, keys)
        }
      }
      this._viewState = _.extend(this._viewState, queryState);
    },

    _pushSyncViewState: function(){
      // Replaces the query param portion of the url with the newly serialized 
      // viewstate
      if(!this.queryParamsEnabled()){return;}
      var new_state = this._serializeViewStateFragment();
      var fragment = this.getFragment().split('?')[0] + '?' + new_state;
      // use the original navigate method and don't trigger events
      this.__navigate__(fragment, {trigger:false, replaState
      this._view
      return (this.query != '');
    },

    _serializeViewStateFragment: function(){
      // converts a complex object graph into a query parameter friendly string
      // and appends it to the url
      // the format is:  ? followed by the URI encoded JSON representation of the viewstate
      var persisted_state = {};
      for(var prop in this._viewState){
        if(this._viewState[prop]['persist']){
          persisted_state[prop] = this._viewState[prop].value;
        }
      }
      var json_string = JSON.stringify(persisted_state);
      var encoded = Base64.encode(json_string);
      return encodeURI(encoded);
    },

    _deserializeViewStateFragment: function(query){
      // converts the serialized viewstate into the full object graph
      var json = Base64.decode(query);
      var obj = {};
      try {
        obj = JSON.parse(json);
      } catch (e) {
        obj = {};
      }
      for(var prop in obj){
        obj[prop] = {value: obj[prop], persist: true};
      }
      return _.extend({}, obj);
    }
  });






  //*********************************************************
  //*********************************************************
  // TODO: GPR
  // Remove all code below this comment and refactor any dependencies to use the Marionette framework
  // rather than the homegrown versions.
  //*********************************************************
  //*********************************************************
  function iterateAndCallShow(views) {
    views.toArray().each(function(view) {
      if (view.childViews.toArray().length > 0) {
        iterateAndCallShow(view.childViews);
      }
      if (view.onShow) {
        view.onShow();
      }
    });
  }

  // ****************************************************
  // extend router with view swap/cleanup
  // ****************************************************
  _.extend(Backbone.Router.prototype, {
    swap: function(newView) {
      if (this.currentView && this.currentView.dispose) {
        this.currentView.dispose();
      }
      this.currentView = newView;
      this.currentView.render();
      $(this.el).empty().append(this.currentView.el);
      if (this.currentView.onShow) {
        this.currentView.onShow();
      }

      iterateAndCallShow(this.currentView.childViews);
    }
  });



  // ****************************************************
  // extend view with self and child view cleanup
  // ****************************************************
  var _super = Backbone.View;
  Backbone.View = function(options) {
    this.bindings = [];
    this.childViews = _([]);
    _super.apply(this, [options]);
  };
  _.extend(Backbone.View.prototype, _super.prototype, {
    bindTo: function (source, event, callback) {
      source.on(event, callback, this);
      this.bindings.push({ source: source, event: event, callback: callback });
    },
    unbindAll: funding.event, binding.callback);
      });
      this.bindings = [];
    },
    renderChildView: function(view) {
      view.render();
      this.childViews.push(view);
      view.parentView = this;
    },
    triggerShow: function() {
      iterateAndCallShow(this.childViews);

       if (this.onShow) {
         this.onShow();
       }
    },
    appendChildView: function(view, options) {
      _.defaults(options || (options = {}), {
        container: this.$el,
        empty: false,
        method: "append"
      }); var container = $(options.container);

      this.renderChildView(view);
      if(options.empty) { container.empty(); }
      container[options.method].apply(container, [view.el]);

      return view; // so we can call trigger show afterwards if we want
    },
    disposeChildViews: function() {
         view.dispose();
        }
   ew.removeChildView(thithis.childView     this.removeFromParentView();
    },
    scrollToElement: function($el) {
      var offset = $el.first().offset();
      if (offset) {
        $(window).scrollTop(offset.top);
      }
    }
  });
  Backbone.View.extend = _super.extend;
})(jQuery);


/*1.0*/



(function(Marionette){
  //Copy prototype val of proxy event for controllers!
  Marionette.Controller.prototype.proxyEvent = Backbone.Router.prototype.proxyEvent;

  Marionette.Mixins = Marionette.Mixins || {};
}(Marionette));
/*1.0*/
(function(mixins){

  /**
   * This essentially copies the current version of Marionette's bootstrap for a communication channel.
   *
   * This will allow your module (or really any object) to have a communication chanel directly on it.
   */
  mixins.PrivateMessagingBuses = function(module) {
    module.vent = new Backbone.Wreqr.EventAggregator();
    module.commands = new Backbone.Wreqr.Commands();
    module.reqres = new Backbone.Wreqr.RequestResponse();

    // Command execution, facilitated by Backbone.Wreqr.Commands
    module.execute = function () {
      var args = Array.prototype.slice.apply(arguments);
      this.commands.execute.apply(this.commands, args);
    };

    // Request/response, facilitated by Backbone.Wrerequest.apply(this.reqres, args);
    };
  };

}(Marionette.Mixins));
/*1.0*/
/* The moment-strftime plugin does not include a couple of the really nice */
/* formats supported by Ruby (%e and %l). This is a copy of moment-strftime */
/* with those formats added. Hopefully, in the future moment-strftime will add */
/* these and we can just include it without modification. */

((function(){var a,b;typeof require!="undefined"&&require!==null?a=require("moment"):a=this.moment,b={a:"ddd",A:"dddd",b:"MMM",B:"MMMM",d:"DD",e:"D",H:"HH",I:"hh",j:"DDDD",l:"h",m:"MM",M:"mm",p:"A",S:"ss",Z:"z",w:"d",y:"YY",Y:"YYYY","%":"%"},a.fn.strftime=function(a){var c,d,e;d=a;for(c in b)e=b[c],d=d.replace("%"+c,e);return this.format(d)},typeof module!="undefined"&&module!==null?module.exports=a:this.moment=a})).call(this);
/*1.0*/







;
/*1.0*/
// jQuery _explicitly_ (no $) and only where you can't
// use something else b/c it breaks Ember fastboot!
!function() {
  "use strict";

  window.$UI = window.$UI || {};
  window.$UI_ENV = window.$UI_ENV || {};

  // We can't use $.extend b/c we don't want to rely on jQuery b/c Ember fastboot
  if( !window.$UI_ENV.environment ) {
    // Deprecation warnings will be shown when in 'development'
    window.$UI_ENV.environment = 'development';
  }

  if( !window.$UI_ENV.linkTo ) {
    // Override this for spcial URL handling like the Desktop->Community linking
    window.$UI_ENV.linkTo = function (text, url, options) {
      options = options || {};
      return '<a href="' + url + '" class="' + (options['class'] || '') +
        (options['target'] ? ('" target="' + options['target']) : '') +
        '">' + text + '</a>';
    }
  }

  if( !window.$UI_ENV.deprecationNotices ) {
    // flags to turn off deprecation notices
    window.$UI_ENV.deprecationNotices = {
      messagePanelCSS: true, // message-panel class
    };
  }

  // example usage:
  // $UI.deprecated_css_check('.some-class', '.some-class will be removed in 3.0 of the Toolkit', 'flagName');
  window.$UI.deprecated_css_check = function(selector, msg, flag, route) {
    if($UI_ENV.deprecationNotices[flag] === false) {
      return;
    }

    if($UI_ENV.environment == 'development') {
      msg = 'UI TOOLKIT DEPRECATION: ' + msg;
      msg = route ? 'ROUTE ' + route.toUpperCase() + ': ' + msg : msg;
      msg += flag ? '\nTo turn off this deprecation notice, set ' + flag + ' on $UI_ENV.deprecationNotices to false.' : '';
      if( typeof window.jQuery === 'func          console.warn(item);
        });
      }
    }
  };

  if( window.document ) {
    documehe Toolkit.', 'messagePanelCSS');
    });
  }
}();
/*1.0*/
$UI.DOMESTIC_NAV_VERSION = "4.9.2";
/*1.0*/
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  var CLEAR_NOTIFICATIONS_PATH = '/api/v3/notifications/clear_unread';
  var GALA_EVENT_DEFAULTS = {
    version: '1-0'
  };
  var GOOGLE_ANALYTICS_EVENT_DEFAULTS = {
    label: null,
    value: 0,
    nonInteraction: false
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //  General (Global & Mobile) Navbar functionality
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  $UI._BaseNavbar = {
    enableMenuFade: function(elements) {
      elements.off( 'closed.nav-dropdown closed.nav-drawer' );
      elements.on( 'closed.nav-dropdown closed.nav-drawer', function() {
        $(this).parent().removeClass('u-faded-in')

        $(this).find('[data-content="nav-dropdown"]').removeClass('u-faded-in');
        $(this).find('[data-content="nav-drawer"]').removeClass('u-faded-in');
      });

      elements.off( 'opened.nav-dropdown opened.nav-drawer' );
      elements.on( 'opened.nav-dropdown opened.nav-drawer', function() {
        var reflow = $('body').offset().left; // force reflow
        $(this).find('[data-content="nav-dropdown"],[data-content="nav-drawer"]').addClass('u-faded-in');
      });
    },

    // shared between footer & global nav
    analyticsForClick: function(e) {
      var $target = $(e.currentTarget);
      var href = $target.attr('href');

      if(!href || href === 'javascript:void(0);') return;

      var $parent = $target.closest('[data-content]');
      var source = $target.closest('footer').length ? 'Footer' : 'Nav';
      var linkText = null;
      var linkDesc = null;
      var gaLabel, menuName, linkIndex, $desc, $links;

      if($parent.length) {
        // menu item clicked
        menuName = $parent.siblings('[data-menu-name]').data('menu-name') || $parent.siblings('[data-toggle]').text().trim();
        $desc = $target.siblings('.drawer_desc');
        linkDesc = $desc.data('desc') || $desc.text().trim() || null;
      } else {
        // menu trigger clicked
        $parent = $target.closest('ul,div');
        menuName = $parent.attr('class').split(' ').pop();
      }

      linkText = $target.data('text') || $target.data('menu-name') || $target.text().trim();

      $links = $parent.prop('tagName') === 'UL' ? $parent.find('li > a[href]:visible') : $parent.find('a[href]:visible');
      linkIndex = $links.index($target);
      gaLabel = [menuName, linkText, linkIndex];

      $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
        category: source,
        action: 'click',
        label: gaLabel.join(' | '),
        nonInteraction: false
      });

      $UI._BaseNavbar.triggerGalaEvent({
        source: source,
        name: 'com.spiceworks.events.menu.Click',
        data: {
          menuName: menuName,
          linkPosition: linkIndex,
          linkURL: $target.attr('href'),
          linkText: linkText,
          linkDesc: linkDesc
        }
      });
    },

    triggerGoogleAnalyticsEvent: function(options) {
      var eventOpts = _.defaults(options, GOOGLE_ANALYTICS_EVENT_DEFAULTS);
      $(document).trigger('navigation-analytics:event:google-analytics', eventOpts);
    },

    triggerGalaEvent: function(options) {
      var eventOpts = _.defaults(options, GALA_EVENT_DEFAULTS);
      $(document).trigger('navigation-analytics:event:gala', eventOpts);
    }
  };

  $UI._NavigationNavbar = function(params) {
    this.guestTemplate = _.template('<a href="#" class="global-nav_login-link" data-action="nav-login" data-modal-name="login" data-target="#" data-toggle="modal">Log in</a><a href="#" data-action="nav-join" data-modal-name="join" data-target="#" data-toggle="modal" class="global-nav_join-button">Join</a>');

    this.menuTemplate = _.template('<div class="global-nav_dropdown sui-u-fadeable" data-content="nav-dropdown"></div>');
    this.triggerTemplate = _.template('<a href="javascript:void(0);" class="global-nav_menu-trigger" data-toggle="nav-dropdown" <% if (typeof(menuName) !== "undefined") { %> data-menu-name="<%- menuName %>" <% } %>></a>');

    this.drawerTemplate = _.template('<div class="global-nav_drawer-content sui-u-fadeable" data-content="nav-drawer"></div>');
    this.drawerTriggerTemplate = _.template('<a href="javascript:void(0);" class="global-nav_drawer-trigger" data-toggle="nav-drawer" <% if (typeof(menuName) !== "undefined") { %> data-menu-name="<%- menuName %>" <% } %> ></a>');

    this.iconTemplate = _.template('<i class="global-nav-icon <%- icon_class %>"></i>');
    this.statBubbleTemplate = _.template('<div class="global-nav_status-indicator" count="<%- count %>"></div>');

    this.params = params;
  };

  $UI._NavigationNavbar.prototype = {

    /////////  Community Notifications  ////////////////////////
    initCommunityNotifications: function(user_info) {
      this.$communityNotifMenu = this.$el.find('[data-menu-type="community-notifications"]');

      if( !user_info || user_info.guest ) {
        this.$communityNotifMenu.empty();
        return;
      }
      this.renderCommunityNotifications({}); this.addSourceToNotifications();
    },

    renderCommunityNotifications: function(params) {
      var unread_count = params.unread_count || 0;
      var inbox_unread_count = params.inbox_unread_count || 0;
      var elements = params.elements || [];

      this.notificationsLatestEventTime = params.latest_event_time || (new Date().toISOString());

      if (this.$communityNotifMenu && this.$communityNotifMenu.length === 1) {
        this.$communityNotifMenu.empty();
        this.$communityNotifMenu.data('navDrawer', '');

        var headerTemplate = _.template('<div class="community-notifications_header"><i class="global-nav-icon drawer_close--mobile community-notifications_mobile-toggle" data-dismiss="nav-drawer"></i><h5 class="community-notifications_title">Notifications</h5></div>');
        var inboxUnreadCount = _.template('<a count="<%- inbox_unread_count %>" href="<%- communityURL %>/messages/inbox?source=navbar-community-notifications" class="community-notifications_inbox-count">Messages (<%- inbox_unread_count %>)</a>');
        var listTemplate = _.template('<ul class="community-notifications_items-list"><%= listElementsHtmlSafe %></ul>');
        var footerTemplate = _.template('<div class="community-notifications_footer"><a class="community-notifications_footer-link" href="<%- communityURL %>/notifications?source=navbar-community-notifications">See all notifications</a></div>');

        var iconTemplate = _.template('<i class="global-nav-icon global-nav-icon-event-<%- type %>"></i>');
        var descTemplate = _.template('<p class="community-notifications_item-desc"><%= html_safe_content %><span class="community-notifications_item-time" data-js-postprocess="timestamp" data-timestamp-format="from_now" datetime="<%- timestamp %>" title="<%- timestamp_title %>"><%- timestamp_ago %></span></p>');

        var contents = '';

        _.each(elements, function(element){
          contents += '<li class="community-notifications_item">' +
                      iconTemplate({ type: element.type }) +
                      descTemplate({ html_safe_content: element.description, timestamp: element.timestamp, timestamp_ago: moment(element.timestamp).fromNow(), timestamp_title: moment(element.timestamp).utc().format('MMM d, YYYY [at] h:mm A') })
        });

        this.$communityNotifMenu.prepend(
          $( this.drawerTemplate() ).append(
            $( headerTemplate() ).append( inboxUnreadCount({ communityURL: this.params.communityURL, inbox_unread_count: inbox_unread_count }) ),
            listTemplate({ listElementsHtmlSafe: contents }),
            footerTemplate({ communityURL: this.params.communityURL })
          )
        );

        var mobileTitle = $('<div class="community-notifications_trigger-text">Notifications</div>');

        this.$communityNotifMenu.prepend(
          $( this.drawerTriggerTemplate({ menuName: 'Notifications' }) ).append(
            this.iconTemplate({ icon_class: 'global-nav-icon-notifications' }),
            this.statBubbleTemplate({ count: unread_count }),
            mobileTitle
          )
        );
      }
    },

    setupCommunityNotificationsDrawer: function() {
      var _globalNav = this;

      this.$communityNotifMenu.on('opened.nav-drawer', function () {
        var countEl = $(this).find('> a [count]');
        var unread_count = countEl.attr('count');
        if (unread_count !== '0') {
          countEl.attr('count', '0');
          $.ajax({
            context: this,
            url: _globalNav.params.notificationServiceURL + CLEAR_NOTIFICATIONS_PATH,
            type: "POST",
            dataType: "json",
            xhrFields: { withCredentials: true },
        icationsLatestEventTr('count', unread_count);
            }
          });
        }
      });
    },

    // Since the contents of each notification is specified from the apps as HTML
    // we don't have direct control over the 'src' params on any links. So after
    // rendering we just fix them up.
    addSourceToNotifications: function() {
      var source_param = 'source=navbar-community-notifications';

      this.$communityNotifMenu.find('[data-content="nav-dropdown"] > ul a').each( function(index, el) {
        var href = $(el).attr('href');
        $(el).attr( 'href', href + (href.match(/\?/) ? '&' : '?') + source_param );
 trigger('hidden.bs.nav-dropdown')
    },

    performLogout: function() {
      $.ajax({
        context: this,
        url: this.params.idServiceURL + '/sign_out.json',
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        timeout: 3000,
        success: function() {
          if (this.params.afterLogout) {
            this.params.afterLogout();
          } else {
            window.location.reload(false);
          }
        },
        error: function (jqXHR, textStatus) {
          console.warn('Navbar: logging out:', textStatus);
        }
      });
    },

    handleLogout: function(e){
      var self = this;
      if (this.params.onLogout) {
        this.param      self.performLogout();
          })
        );
      } else {
        self.performLogout();
      }
    },

    handleLogin: function(event){
      event.preventDefault();
      if (this.params.onLogin) {
        this.params.onLogin();
      }
    },

    handleJoin: function(event){
      event.preventDefault();
      if (this.params.onJoin) {
        this.params.onJoin();
      }
    },

    handleGoogleAnalyticsEvent: function(e, options ) {
      if(!this.params.include_google_analytics_events) return;

      if (typeof this.params.sendGoogleAnalyticsEvent === 'function') {
        this.params.sendGoogleAnalyticsEvent(options);
      } else if(window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: options.category,
          eventAction: options.action,
          eventLabel: options.label,
          eventValue: options.value !== 'undefined' ? options.value : 0,
          nonInteraction: options.nonInteraction !== 'undefined' ? options.nonInteraction : false
        });
      }
    },

    handleGalaEvent: function(e, options) {
      if(!this.params.include_gala_events) return;

      if(typeof this.params.sendGalaEvent === 'function') {
        this.params.sendGalaEvent(options);
      } else if(window.gala) {
        this.getGalaChannel(options.source).send(options.name, options.version, options.data);
      }
    },

    getGalaChannel: function(channelName) {
      if(!this.galaChannels) {
        this.galaChannels = {}
      }

      if(!this.galaChannels[channelName]) {
        this.galaChannels[channelName] = window.gala.requestChannel(channelName, null, $UI.NAV_VERSION);
      }

      return this.galaChannels[channelName];
    }

  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Gala Events
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // $(function() {
  //   $(document).on( 'navigation-analytics:event', function( domEvent, action, data ) {
  //     if(typeof gala === 'function') {
  //       gala("send", "com.spiceworks.navbar." + action, "1-0", data);
  //     }
  //   });
  // });

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // App Interfaces
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // Community
  ////////////////

  // var CommunityInterface = function(params) {
  //   this.rootUrl = params.isRunningOnCommunity ? '' : 'http://community.spiceworks.com';
  //
  //   this.submitSearchAutocomplete = function(query) {
  //     return $.ajax({
  //       url: '/api/v1/teleport/search',
  //       data: { q: query },
  //       headers: { Accept: 'text/javascript, text/html, application/xml, text/xml, */*' }
  //     });
  //   };
  //
  //   this.fullSearchPath = function(query) {
  //     return this.rootUrl + '/search?query=' + encodeURIComponent(query);
  //   };
  // };

  // Desktop
  ////////////////

  // var DesktopInterface = function(params) {
  //   this.rootUrl = params.rootUrl;
  //
  //   this.submitSearchAutocomplete = function(query) {
  //    return $.ajax({
  //       url: '/search',
  //       data: { query: query, group_results: 1, limit: 20 },
  //       dataType: 'json'
  //     });
  //   };
  //
  //   this.fullSearchPath = function(query) {
  //     return this.rootUrl + '/search?query=' + encodeURIComponent(query);
  //   }
  // };
  //
  // $(function() {
  //   $UI.appInterfaces = new function() {
  //     var isRunningOnCommunity = window.Application && window.Application.name && window.Application.name.toLowerCase() === 'community';
  //
  //     this.apps = {
  //       community: new CommunityInterface({ isRunningOnCommunity: isRunningOnCommunity })
  //     }
  //
  //     if( !isRunningOnCommunity || (typeof(User) !== 'undefined' && User.desktop_url) ) {
  //       var rootUrl = (typeof(User) !== 'undefined' && User.desktop_url) ? User.desktop_url : '';
  //       this.apps.desktop = new DesktopInterface({ rootUrl: rootUrl });
  //     }
  //
  //     this.localAppName = isRunningOnCommunity ? 'community' : 'desktop';
  //   };
  // });

}( window.jQuery );
}

;
/*1.0*/
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  var globalNavHeight = 60;

  var GLOBAL_PLACEHOLDER_SELECTOR = '[data-placeholder="global-nav"]';
  var MOBILE_PLACEHOLDER_SELECTOR = '[data-placeholder="mobile-nav"]';

  var GLOBAL_PLACEHOLDER = '<script data-placeholder="global-nav"></script>';
  var MOBILE_PLACEHOLDER = '<script data-placeholder="mobile-nav"></script>';

  var HEADER_SELECTOR = '[data-navbar="site-navigation"]';
  var HEADER_TEMPLATE = '<header class="site-navigation sui-opt-in" data-navbar="site-navigation">' +
                          GLOBAL_PLACEHOLDER + MOBILE_PLACEHOLDER +
                        '</header>';

  var NAVBAR_CONFIG_PATH = '/api/public/v1/navigation/navbar';

  var GET_NOTIFICATIONS_PATH = '/api/v3/notifications/summarized_recent';


  /**
   The Navbar (handles configuration & rendering of the navbars).  Please use the `create` method instead of using `new`.
   You can pass configuration params to `create`.

   Here's the list of allowed parameters:
   'idServiceURL',
   'notificationServiceURL',
   'communityURL',
   'configFilter',
   'onLogin',
   'onJoin',
   'onLogout',
   'afterLogout',
   'include_google_analytics_events',
   'include_gala_events',
   'sendGalaEvent',
   'sendGoogleAnalyticsEvent',
   'transparent',

   For example:

   ```
   $UI.Navbar.create({
     idServiceURL: 'http://localhost:3010',
     navigationServiceURL: 'http://localhost:8080',
     notificationServiceURL: 'http://localhost:8080',
     communityURL: 'http://localhost:8080',
     configFilter: function(config, status) {
       //config: is this is the configuration hash returned from the navbar service
       if(status == 'success' && config.user_info.guest) {
          config.user_info.login_join = false;
          config.search = false;
        }
       return config;
     }
   });
   ```

   @class SuiNavigation.$UI.Navbar
   @constructor
   @param {Object} params Configuration parameters
   */
  $UI.Navbar = function(params) {
    params = params || {};
    this.$element = $(HEADER_SELECTOR);
    this.params = _.pick(params, [
      'navigationServiceURL',
      'idServiceURL',
      'notificationServiceURL',
      'communityURL',
      'configFilter',
      'onLogin',
      'onJoin',
      'onLogout',
      'afterLogout',
      'include_google_analytics_events',
      'include_gala_events',
      'sendGoogleAnalyticsEvent',
      'sendGalaEvent',
      'transparent'
    ]);

    this.globalNavbar = new $UI._GlobalNavbar( this._globalParams() );
    this.mobileNav = new $UI._MobileNav( this._mobileParams() );
  };

  /**
   Create an instance of the Navbar.

   @method create
   @static
   @param {Object} [params] Configuration parameters (defined below)

   @param {String} [ params.idServiceURL = '']
   @param {String} [ params.navigationServiceURL = '']
   @param {String} [ params.notificationServiceURL = '']
   @param {String} [ params.communityURL = '']
   @param {Function} [ params.configFilter = undefined] A function to optionally change the navbar configuration returned by the navbar service
   @param {Boolean} [ params.checkTerms = undefined] Replaced by OneTrust
   @param {Function} [ params.onLogin = undefined]
   @param {Function} [ params.onJoin = undefined]
   @param {Function} [ params.onLogout = undefined]
   @param {Function} [ params.afterLogout = undefined]
   @param {Function} [ params.sendGalaEvent = undefined] A function to call to send events to Gala. Gets passed options object w/ name (string) and data (object) properties. If not supplied, navbar will attempt to send events via default method. If false, navbar will not send events.
   @param {Function} [ params.sendGoogleAnalyticsEvent = undefined] A function to call to send events to Google Analytics. Gets passed an options object w/ category (String), action (String), label (String), value, and nonInteraction (Boolean) properties. If not supplied, navbar will attempt to send events via default method. If false, navbar will not send events.
   @param {Boolean} [ params.transparent = false] When true, navbar will have transparent background and white text.
   @param {String} [ params.termsRecordUrl = ''] Replaced by OneTrust
   **/

  $UI.Navbar.create = function(params) {
    var nav = new $UI.Navbar(params);
    nav.fetchConfig();
    return nav;
  };

  $UI.Navbar.prototype = {

    fetchConfig: function() {
      $UI.Navbar.User = { guest: true };
      var configFilter = this.params.configFilter;
      var navigationServiceURL = this.params.navigationServiceURL;

      if(typeof(navigationServiceURL) !== 'undefined' && navigationServiceURL.length > 0) {

        var url = navigationServiceURL + NAVBAR_CONFIG_PATH + '?community_url=' + encodeURIComponent(this.params.communityURL);

        $.ajax({
          context: this,
          url: url,
          type: "GET",
          dataType: "json",
          xhrFields: {withCredentials: true},
          timeout: 4000,
          success: function (data, textStatus) {
            $UI.Navbar.User = data.user_info;
            this._render(configFilter ? configFilter(data,textStatus) : data);
          },
          error: function (jqXHR, textStatus) {
            this._render(configFilter ? configFilter({},textStatus) : {});
          }
        });
      }
      else {
        console.error('Navbar: navigationServiceURL not set. The Navbar requires this parameter to retrieve its configuration. Here are the params used to configure the Navbar: ', this.params)
      }

    },

    _render: function(p) {
      this.params = _.defaults({}, p || {}, this.params );

      this.$element = $(HEADER_SELECTOR);

      // If there is currently no site-navigation element in the dom
      // let's create one right after the body tag
      if( this.$element.length == 0 ) {
        this.$element = $(HEADER_TEMPLATE);
        $('body').prepend(HEADER_TEMPLATE);
      }

      if( !this.globalPlaceholder && this.$element.find(GLOBAL_PLACEHOLDER_SELECTOR).length == 0 ) {
        // Can't use jQuery here b/c in versions < 1.9 it won't prepend script tags
        this.$element[0].innerHTML = GLOBAL_PLACEHOLDER + this.$element[0].innerHTML;
      }

      if( !this.mobilePlaceholder && this.$element.find(MOBILE_PLACEHOLDER_SELECTOR).length == 0 ) {
        // Can't use jQuery here b/c in versions < 1.9 it won't append script tags
        this.$element[0].innerHTML += MOBILE_PLACEHOLDER;
      }

      // These are just used for caching so we don't have to `find()` everytime we render
      this.globalPlaceholder   = this.$element.find(GLOBAL_PLACEHOLDER_SELECTOR).length;
      this.mobilePlaceholder   = this.$element.find(MOBILE_PLACEHOLDER_SELECTOR).length;

      this.fetchCommunityNotifications(this.params.refresh_community_notifications, this.params.user_info);

      this._renderGlobalNav();
      this._renderMobileNav();
    },

    /////////  Community Notifications  ////////////////////////
    fetchCommunityNotifications: function(refresh,user_info) {
      if (this.refreshFunction) {
        window.clearTimeout(this.refreshFunction);
        this.refreshFunction = null;
      }

      if( !user_info || user_info.guest ) {
        return;
      }

      if(refresh) {
        this.getCommunityNotifications(refresh);
      }
    },

    getCommunityNotifications: function(refresh, fetch_interval_ms) {

      if(!this.params.user_info || this.params.user_info.guest) {
        return;
      }

      if(typeof(this.params.notificationServiceURL) !== 'undefined' && this.params.notificationServiceURL.length > 0) {
        var url = this.params.notificationServiceURL + GET_NOTIFICATIONS_PATH +
          (typeof(fetch_interval_ms) !== 'undefined' ? '?refresh=1' : '');

        $.ajax({
          context: this,
          url: url,
          type: "GET",
          dataType: "json",
          xhrFields: { withCredentials: true },
          timeout: 3000,
          success: function (data) {
            this.populateCommunityNotifications(data);
          },
          error: function (jqXHR, textStatus) {
            console.warn('Navbar: refresh community notifications:', textStatus);
            this.populateCommunityNotifications({});
          },
          complete: function () {
            if (refresh) {
              var frequency = 60 * 60 * 1000; // every 60 minutes
              this.refrns(refresh, frequency);
              }, this), frequency);
            }
          }
        });
      } else {
        console.warn('Navbar: notificationServiceURL not set. The Navbar requires this parameter to retrieve its notifications.');
      }

    },

    populateCommunityNotifications: function(data){
      if (this.globalNavbar) {
        this.globalNavbar.populateNotificationsMenu(data);
      }
      if(this.mobileNav) {
        this.mobileNav.populateNotificationsMenu(datalNavbar.hideMobileNav();
      }
    },

    _fromFeedApp: function() {
      return window.navigator && window.navigator.userAgent.indexOf('Spiceworks Feed') >= 0;
    },

    _renderGlobalNav: function() {
      var placeholder = this.$element.find( GLOBAL_PLACEHOLDER_SELECTOR );
      this.globalNavbar._render( placeholder, this._globalParams() );
    },

    _renderMobileNav: function() {
      var placeholder = this.$element.find( MOBILE_PLACEHOLDER_SELECTOR );
      this.mobileNav.render( placeholder, this._mobileParams() );
    },

    _globalParams: function() {
      return {
        idServiceURL: this.params.idServiceURL,
        navigationServiceURL: this.params.navigationServiceURL,
        communityURL: this.params.communityURL,
        notificationServiceURL: this.params.notificationServiceURL,

        //callbacks params
        onLogin: this.params.onLogin,
        onJoin: this.params.onJoin,
        onLogout: this.params.onLogout,
        afterLogout: this.params.afterLogout,

        include_google_analytics_events: this.params.include_google_analytics_events,
        include_gala_events: this.params.include_gala_events,
        sendGoogleAnalyticsEvent: this.params.sendGoogleAnalyticsEvent,
        sendGalaEvent: this.params.sendGalaEvent,

        search: this.params.search,
        logo_path: this.params.logo_path,
        refresh_community_notifications: this.params.refresh_community_notifications,
        community_notifications: this.params.community_notifications,
        community_messages: this.params.community_messages,
        app_alerts: this.params.app_alerts,
        user_info: this.params.user_info,
        user_menus: this.params.user_menus,
        navigation_menus: this.params.navigation_menus,
        transparent: this.params.transparent
      };
    },

    _mobileParams: function() {
      return {
        idServiceURL: this.params.idServiceURL,
        communityURL: this.params.communityURL,
        notificationServiceURL: this.params.notificationServiceURL,
        onLogin: this.params.onLogin,
        onJoin: this.params.onJoin,
        onLogout: this.params.onLogout,
        afterLogout: this.params.afterLogout,
        include_gala_events: this.params.include_gala_events,
        include_google_analytics_events: this.params.include_google_analytics_events,
        sendGoogleAnalyticsEvent: this.params.sendGoogleAnalyticsEvent,
        sendGalaEvent: this.params.sendGalaEvent,
        refresh_community_notifications: this.params.refresh_community_notifications,
        community_notifications: this.params.community_notifications,
        user_info: this.params.user_info,
        user_menus: this.params.user_menus,
        navigation_menus: this.params.navigation_menus,
        transparent: this.params.transparent,
      };
    },
  };

}( window.jQuery );
}
;
/*1.0*/
;
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  /* DROPDOWN CLASS DEFINITION
   * ========================= */

    var selector = '[data-toggle="nav-dropdown"]',
        NavDropdown = function ( element ) {
          this.$element = $(element).parent();
          this.init('dropdown', element);
        };

    NavDropdown.prototype = {

      constructor: NavDropdown,

      init: function(type, element) {
        this.type = type;

        var eventsIn = 'mouseover.nav-' + this.type + '.data-api focusin.nav-' + this.type + '.data-api';
        var eventsOut = 'mouseout.nav-' + this.type + '.data-api focusout.nav-' + this.type + '.data-api';
        var clickEvent = 'click.nav-' + this.type + '.data-api';

        this.$element.on(eventsIn, $.proxy(function(e) {
          if(this.isMobile() || this.isDisabled()) return;

          if(e.type === 'mouseover' && !this.isFocused) {
            this.isHovering = true;
            this.toggle(e);
          } else if(e.type === 'focusin' && !this.isHovering && e.relatedTarget) {
            // only fire if previously focused element is present (if it's not, we're probably coming from another tab, meaning the user didn't select element via keyboard and drawer should not open)
            this.isFocused = true;
            this.toggle(e);
          }
        }, this));

        this.$element.on(eventsOut, $.proxy(function(e) {
          if(this.isMobile() || this.isDisabled()) return;

          if(e.type === 'mouseout') {
            this.isHovering = false;
            this.toggle(e);
          } else if(e.type === 'focusout') {
            this.isFocused = false;
            this.toggle(e);
          }
        }, this));

        this.$element.on(clickEvent, 'a,[data-dismiss]', $.proxy(function(e) {
          if(this.isMobile() && $(e.currentTarget).is('[data-toggle],[data-dismiss]') && !this.isDisabled()) {
            e.preventDefault();
            this.isFocused = !this.$element.hasClass('is-open');
            this.toggle(e);
          } else {
            $UI._BaseNavbar.analyticsForClick(e);
          }
        }, this));

        $(document).off('keyup.dismiss.nav-dropdown');
        $(document).on('keyup.dismiss.nav-dropdown', closeOnEscape );
      },

      trigger: function() {
        if(!this.$trigger) {
          this.$trigger = this.$element.find('[data-toggle="nav-' + this.type + '"]');
        }

        return this.$trigger;
      },

      content: function() {
        if(!this.$content) {
          this.$content = this.$element.find('[data-content="nav-' + this.type + '"]');
        }

        return this.$content;
      },

      toggle: function ( e ) {
        if (e.type === 'mouseover' || e.type === 'focusin') {
          return _.delay($.proxy(this.open, this), 170, e);
        } else if (e.type === 'mouseout') {
          return _.delay($.proxy(this.close, this), 170, e);
        } else if (e.type === 'focusout') {
          return this.close(e);
        } else {
          var isOpen = this.isOpened || this.$element.hasClass('is-open');
          return this[!isOpen ? 'open' : 'close'](e)
        }
      },

      open: function(e) {
        if(this.isFocused || this.isHovering && !this.$element.hasClass('is-open')) {
          var relatedTarget = { relatedTarget: this };
          this.$element.addClass('is-open')
                       .trigger('opened.nav-dropdown', relatedTarget);
          this.triggerAnalytics('Opened', this.trigger(), e)
        }
      },

      close: function(e) {
        if(!this.isFocused && !this.isHovering && !$.contains(this.$element[0], e.relatedTarget)) {

          this.$element.removeClass('is-open')
                       .trigger('closed.nav-' + this.type);

          this.triggerAnalytics('Closed', this.trigger(), e);
        }
      },

      closeAll: function() {
        $(selector).each( function() {
          var $this = $(this);
          var $parent = $this.parent();
          var dropdown = $this.data().navDropdown;

          if($parent.hasClass('is-open')) {
            dropdown.isHovering = false;
            dropdown.isFocused = false;

            $this.trigger('closed.nav-' + this.type);
            NavDropdown.prototype.triggerAnalytics('Closed', $(this));

            _.delay($.proxy(function() {
              $parent.removeClass('is-open');
            }, this), 150);
          }
        });
      },

      triggerAnalytics: function(action, trigger, e) {
        var $trigger = trigger ? $(trigger) : this.trigger();
        var source = $trigger.closest('footer').length ? 'Footer' : 'Nav';
        var menuName = $trigger.data('menu-name') || $trigger.text();
        var galaData;

        if(!menuName) {
          menuName = $trigger.attr('alt') || $trigger.find('img').attr('alt');
        }

        galaData = {
          menuName: menuName
        };

        switch (action) {
          case 'Opened':
            $UI._BaseNavbar.triggerGalaEvent({
              source: source,
              name: 'com.spiceworks.events.menu.View',
              data: galaData
            });

            var gaLabel = [menuName]

            if(menuName === 'Notifications') {
              var countEl = $trigger.find('.global-nav_status-indicator');
              var unread_count = countEl.attr('count');
              gaLabel.push(unread_count);
            }

            gaLabel = gaLabel.join(' | ');

            if(e && e.type === 'click') {
              // mobile
              $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
                category: source,
                action:'show',
                label: gaLabel
              });
            } else {
              $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
                // desktop
                category: source,
                action: 'hover',
                label: gaLabel,
                nonInteraction: true
              });
            }
            break;
          case 'Closed':
            $UI._BaseNavbar.triggerGalaEvent({
              source: source,
              name: 'com.spiceworks.events.menu.Hide',
              data: galaData
            });

            if(e && e.type === 'click') {
              // mobile
              $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
                category: source,
                action: 'hide',
                label: menuName
              });
            }
            break;
          default:
        }
      },

      isMobile: function() {
        return window.innerWhis.trigger().attr('disabled');
      }
    }

    function closeOnEscape(event) {
      if( event.which == 27 ) {
        NavDropdown.prototype.closeAll();
      }
    }

   /* DROPDOWN PLUGIN DEFINITION
    * ========================== */

   $.fn.navDropdown = function ( option ) {
     return this.each(function () {
       var $this = $(this),
           data = $this.data('navDropdown');
       if (!data) $this.data('navDropdown', (data = new NavDropdown(this)));
     });
   }

  $.fn.navDropdown.Constructor = NavDropdown;

}( window.jQuery );
}
;
/*1.0*/
;
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  /* DRAWER CLASS DEFINITION
   * ====================== */

  var selector = '[data-el="nav-drawer"]',
      delay = 200,
      NavDrawer = function(element) {
        this.$element = $(element);
        this.$element.find('[data-dismiss="nav-drawer"]').on( 'click', $.proxy(this.close, this) );
        this.init('drawer', element);
      };

  NavDrawer.prototype = $.extend({}, $.fn.navDropdown.Constructor.prototype, {

    constructor: NavDrawer,

    open: function (e) {
      e && e.preventDefault();

      // return if drawer is already open, or if drawer is not currently focused or hovered
      if (this.isOpened || (!this.isFocused && !this.isHovering)) return;

      this.isOpened = true;

      if(!this.contentHeight) {
        this.contentHeight = this.content().height();
      }

      this.$element.addClass('is-open')
                   .trigger('opened.nav-drawer', this );

      this.triggerAnalytics('Opened', this.trigger(), e);

      if(this.isMobile()) {
        this.$element.parent().css('min-height', this.contentHeight)
                              .addClass('drawer-open');
      }
    },

    close: function ( e ) {
      e && e.preventDefault();

      if ((!this.isOpened) || this.isFocused || this.isHovering || ($.contains(this.$element[0], e.relatedTarget) && !this.isMobile())) return;
      this.isOpened = false;

      // allow time for menu fade animation
      _.delay($.proxy(function() {
        this.$element.removeClass('is-open');
      }, this), 150);

      this.$element.trigger('closed.nav-drawer', this)
                   .parent().css('min-height', '')
                   .removeClass('drawer-open');

      this.triggerAnalytics('Closed', this.trigger(), e);
    }
  });

  /* DRAWER PLUGIN DEFINITION
   * ======================= */

  $.fn.navDrawer = function ( option ) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('navDrawer');

      if (!data) $this.data('navDrawer', (data = new NavDrawer(this)));
    })
  }

  $.fn.navDrawer.Constructor = NavDrawer

}( window.jQuery );
}
;
/*1.0*/
;
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict";

  var navContainerTemplate = '<div class="nav-fluid-container" role="banner">';
  var globalBrandTemplate = '<a class="global-nav_brand" href="/">Home</a><span class="global-nav_print-logo"></span>';
  var globalMenusTemplate = '<ul class="global-nav_widgets">'
  var searchPlaceholderTemplate = '<div class="global-search-menu global-nav_menu" data-menu-type="search"></div>';
  var navigationMenusWrapper = '<div class="global-nav_wrapper"></div>'
  var notificationsMenuTemplate = '<li class="global-nav_menu--widget global-nav_menu--community-notifications" data-menu-type="community-notifications" data-el="nav-drawer"></li>'
  var messagesTemplate = '<li class="global-nav_menu--widget" data-menu-type="community-messages"></li>'
  var alertsTemplate = '<li class="global-nav_menu--alerts global-nav_menu--widget" data-menu-type="alerts"></li>'
  var userMenuTemplate = '<li class="global-nav_menu--user global-nav_menu--widget" data-menu-type="user" data-el="nav-dropdown"></li>'
  var guestUserMenuTemplate = '<li class="global-nav_menu--guest global-nav_menu--widget" data-menu-type="guest-user"></li>'
  var mobileNavToggle = '<a href="#" class="global-nav_mobile-toggle" data-toggle="mobile-nav"></a>'

  var global_contents_template = navContainerTemplate + globalBrandTemplate + searchPlaceholderTemplate + navigationMenusWrapper + globalMenusTemplate + notificationsMenuTemplate + messagesTemplate + alertsTemplate + userMenuTemplate + guestUserMenuTemplate + '</ul>' + mobileNavToggle  + '</div>' + '</div>';
  var global_template = '<nav class="global-nav" data-navbar="global" role="navigation" aria-label="spiceworks">' + global_contents_template + '</nav>';

  var GlobalNavbar = function(params) {
    this.params = params;
    this.mobileNavShown = false;

    $(document).on( 'mobile-nav:hide', $.proxy( this.hideMobileNav, this ) );

    _.extend(this, new $UI._NavigationNavbar(params), $UI._NavigationNavbar.prototype);
  };

  var GLOBAL_NAV_SELECTOR = '[data-navbar="global"]';

  var INBOX_PATH = '/messages/inbox?source=navbar';

  GlobalNavbar.prototype = {

    _render: function($placeholderEl, params) {
      this.$placeholderEl = $placeholderEl;
      this.params = _.defaults({}, params || {}, this.params );

      this.$el = $(GLOBAL_NAV_SELECTOR);

      if( this.$el.length == 0 ) {
        // If there was no nav element, add it
        this.$el = $(global_template);
        $(this.$placeholderEl).after( this.$el );
      }
      else if( this.$el.find('.global-nav_widgets').length == 0 ) {
        // If there was a placeholder only (wrapper & logo) replace it
        this.$el.html(global_contents_template);
      }

      this.$el.toggleClass('global-nav--transparent', params.transparent || false);

      this.mobileNavToggle = this.$el.find('[data-toggle="mobile-nav"]');
      this.mobileNavToggle.off( 'click.mobile-nav-toggle');
      this.mobileNavToggle.on( 'click.mobile-nav-toggle', $.proxy( this.toggleMobileNav, this ) );



      this.initLogo(params.logo_path);
      this.initSearch(params.search);
      this.initCommunityNotifications(params.user_info);
      this.initCommunityMessages(params.community_messages, params.user_info);
      this.initAppAlerts(params.app_alerts, params.user_info);
      this.initUserMenu(params.user_info, params.user_menus);
      this.initNavigationMenus(params.navigation_menus);
      this.initEvents();

      $UI._BaseNavbar.enableMenuFade(this.$el.find('[data-el="nav-dropdown"]'));
      $UI._BaseNavbar.enableMenuFade(this.$el.find('[data-el="nav-drawer"]'));

      $('.global-nav [data-el="nav-drawer"]').navDrawer();
      $('.global-nav [data-toggle="nav-dropdown"]').navDropdown();
    }, // _render()

    initLogo: function(logo_path) {
      if( logo_path ) {
        $('a.global-nav_brand').attr('href', logo_path);
      }
    },

    initAppAlerts: function(params) {
      var alertsMenu = this.$el.find('[data-menu-type="alerts"]');

      alertsMenu.empty();

      if( !params || !this.params.user_info || this.params.user_info.guest ) {
        return;
      }

      alertsMenu.prepend(
        $( this.triggerTemplate({ menuName: 'Alerts' }) ).append(
          this.iconTemplate({ icon_class: 'global-nav-icon-alerts' }),
          this.statBubbleTemplate({ count: params.count })
        ),
        $( this.menuTemplate() ).append( params.content )
      );
    },

    /////////  Events  ////////////////////////
    initEvents: function() {
      if(this.params.include_google_analytics_events) {
        this.$el.find('.global-nav_brand').on('click.nav.data-api', $.proxy($UI._BaseNavbar.analyticsForClick, this));

        $(document).off('navigation-analytics:event:google-analytics')
          .on('navigation-analytics:event:google-analytics', $.proxy(this.handleGoogleAnalyticsEvent, this));
      }

      if(this.params.include_gala_events) {
     [e].cmd=s[e].cmd||[]).push(arguments);};s[e].cmd=s[e].cmd||[];s[e){(rc.cmd=rc.cmd||[]).push(arguments);};rc.send=function(unction(n,v,g){rc('setContext',n,v,g);};rc.bindEvent=function(q,n,f){var es=document.querySelectorAll(q);var se=function(me){rc('playEvent',me.target,f,me.type)};for(var i=0;i<es.length;++i){var e=es[i];e.addEventLme){rc.playEvent(me.targenction(q,f){rc.bindEvent(q,'click',f);};rc.cmd=rc.cmd||[];s[e]('registerChannel',n,d,v,rc);return rc;};s[e].setCollectorUrl=function(collectorUrl){gala('setCollectorize){gala('setBufferSize',bufferSize);};var x=p.createElement(i);x.async=1;x.src=c;var y=p.getElementsByTagName(i)[0];y.parentNode.insertBefore(x,y);}}(window,document,'script','//gala.spiceworks.com/gala.js','gala'));

        $(document).off('navigation-analytics:event:gala')
          .on('navigation-analytics:event:gala', $.proxy(this.handleGalaEvent, this));
      }
    },

    /////////  Search Menu  ////////////////////////
    initSearch: function(params) {
      this.$searchMenu = this.$el.find('[data-menu-type="search"]');

      if( !params ) {
        this.$searchMenu.empty();
        return;
      }
      if (typeof params.url == 'undefined') {
        params.url = this.params.communityURL;
      }

      if( !this.globalSearch ) {
        this.globalSearch = new $UI.GlobalSearch(this.$searchMenu, params);
      } else {
        this.globalSearch.init(this.$searchMenu, params);
      }
    },


    /////////  Community Messages Menu  ////////////////////////
    initCommunityMessages: function(params, user_info) {
      var communityMessagesMenu = this.$el.find('[data-menu-type="community-messages"]'),
          inboxTemplate = _.template('<a href="<%- url %>" data-menu-type="message-count"></a>');

      communityMessagesMenu.empty();

      if( !params || !user_info || user_info.guest) {
        return;
      }

      communityMessagesMenu.prepend(
        $( inboxTemplate({ url: params.url || (params.communityURL + INBOX_PATH) }) ).append(
          this.iconTemplate({ icon_class: 'global-nav-icon-message' }),
          this.statBubbleTemplate({ count: params.count })
        )
      );
    },


    /////////  User Menu  ////////////////////////
    initUserMenu: function(user_info, user_menus) {
      var guestMenu = this.$el.find('[data-menu-type="guest-user"]');
      var userMenu = this.$el.find('[data-menu-type="user"]');

      guestMenu.empty();
      userMenu.empty();

      if( !user_info ) {
        return;
      }

      if( user_info.guest ) {
        if (user_info.login_join !== false) {
          guestMenu.prepend(this.guestTemplate());
          guestMenu.find('a[data-toggle="modal"][data-modal-name="login"]').on("click",$.proxy( this.handleLogin, this ));
          guestMenu.find('a[data-toggle="modal"][data-modal-name="join"]').on("click",$.proxy( this.handleJoin, this ));
        }
      }
      else {
        var imgTemplate = _.template('<img alt="Profile" class="global-nav_avatar--small" src="<%- avatar %>">');

        var menu_item_template = _.template('<li class="user-menu_entry-wrapper"><a class="user-menu_entry user-menu_entry--<%- type %>" data-menu-type="<%- type %>" data-el="nav-dropdown" <% if (typeof(href) !== "undefined") { %> href="<%- href %>" <% } if (typeof(target) !== "undefined") { %> target="<%- target %>" <% } %> data-text="<%- title %>"><%- title %></a></li>');

        var items = '';
        _.each( user_menus, function (element) {
          items += menu_item_template({
            type: element.type,
            href: element.href,
            title: element.title,
            target: element.target
          });
        });

        if( items !== '' ) {
          userMenu.prepend(
            $( this.menuTemplate() ).append( '<ul>' + items + '</ul>' )
          );
        }

        userMenu.prepend(
          $( this.triggerTemplate({ menuName: 'Profile' }) ).append(
            imgTemplate({ avatar: user_info.avatar })
          )
        );

        userMenu.find('[data-menu-type="logout"]').on("click",$.proxy( this.handleLogout, this ));
      }
    },

    /////////  Navigation Menus  ////////////////////////
    initNavigationMenus: function(navigation_menus) {
      var navigationMenusWrapper = this.$el.find('.global-nav_wrapper');
      navigationMenusWrapper.empty();
      if( navigation_menus ) {
        // add CSS links
        if (navigation_menus.css_assets && navigation_menus.css_assets.length) {
          $.each(navigation_menus.css_assets, function( index, asset ){
            $("<link rel='stylesheet' type='text/css' href='" + asset + "'>").appendTo("head");
          });
        }
        // add CSS styles
        if (navigation_menus.css && navigation_menus.css.length) {
          $('<style type="text/css">' + navigation_menus.css + '</style>').appendTo("head");
        }
        // add HTML
        if (navigation_menus.html && navigation_menus.html.length) {
          navigationMenusWrapper.html(navigation_menus.html);
        }
        // load JS assets
        if (navigation_menus.js_assets) {
      url: asset
            });
          });
        }
        // add JS code
        if (navigation_menus.js) {
          $("<script type='text/javascript'>" + navigation_menus.js + "</script>").appendTo("head");
        }
      }
    },

    toggleMobileNav: function(event) {
      event && event.preventDefault() && event.stopPropagation();

      $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
        action: this.mobileNavShown ? 'hide' : 'show',
        category: 'Nav',
        label: 'Mobile Nav'
      });

      $UI._BaseNavbar.triggerGalaEvent({
        source: 'Nav',
        name: this.mobileNavShown ? 'com.spiceworks.events.menu.Hide' : 'com.spiceworks.events.menu.View',
        data: {
          menuName: 'Mobile Nav'
        }
      });

      this.mobileNavShown ? this.hideMobileNav() : this.showMobileNav();
    },

    showMobileNav: function() {
      $(document).trigger('global-search.deactivate');
      $('body').addClass( 'mobile-nav-open' );
      this.mobileNavShown = true;
    },

    hideMobileNav: function() {
      $('body').removeClass( 'mobile-nav-open' );
      this.mobileNavShown = false;
    }
  };

  $UI._GlobalNavbar = GlobalNavbar;

}( window.jQuery );
};
/*1.0*/
;
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  var MOBILE_SELECTOR = '[data-navbar="mobile"]';

  $UI._MobileNav = function(params) {
    // lodash 3.10.1 only extends an object's own properties, so we need to extend the prototype as well
    _.extend( this, new $UI._NavigationNavbar(params), $UI._NavigationNavbar.prototype );
  };

  $UI._MobileNav.prototype = {
    render: function($placeholderEl, params) {
      this.$placeholderEl = $placeholderEl;
      this.params = _.defaults({}, params || {}, this.params );

      this.$el = $(MOBILE_SELECTOR);
      if(this.$el.length === 0) {
        this.$el = $('<nav class="mobile-nav sui-opt-in" data-navbar="mobile"></nav>');
        this.$placeholderEl.after( this.$el );
      } else {
        this.$el.empty();
      }

      this.$el.append($('<div class="mobile-nav_inner"></div>'));
      this.$innerEl = this.$el.find('.mobile-nav_inner');
      this.$innerEl.append('<div class="mobile-nav_wrapper">');
      this.$wrapper = this.$el.find('.mobile-nav_wrapper');

      this.renderNavigationMenus(params.navigation_menus);
      this.renderUserMenu(params.user_info, params.user_menus);
      this.initCommunityNotifications(params.user_info);

      this.$el.find('[data-el="nav-drawer"]').navDrawer();
      $UI._BaseNavbar.enableMenuFade(this.$el.find('[data-el="nav-drawer"]'));

    },

    renderNavigationMenus: function(main_menus) {
      this.$wrapper.empty();
      if( main_menus && main_menus.html && main_menus.html.length ) {
        this.$wrapper.html( main_menus.html );
      }
    },

    renderUserMenu: function(user_info, user_menus) {
      if( !user_info ) {
        return;
      }

      var userMenu = $('<ul class="global-nav_menu global-nav_menu--user" data-menu-type="user"></ul>');
      var guestUserMenu = $('<li class="global-nav_menu--guest global-nav_menu" data-menu-type="guest-user"></li>');

      var userMenuItemTemplate = _.template('<li class="user-menu_entry-wrapper"><a class="user-menu_entry user-menu_entry--<%- type %>" data-menu-type="<%- type %>" data-el="nav-dropdown" href="<%- href %>" <% if (typeof(target) !== "undefined") { %> target="<%- target %>" <% } %>><% if (typeof(icon) !== "undefined") { %><i class="global-nav-icon user-menu-entry_icon <%- icon %>-icon"></i><% } if (typeof(avatar) !== "undefined") { %><img alt="" class="global-nav_avatar--small" height="40" src="<%- avatar %>" style="height:40px; width:40px;" width="40"><% } %><%- title %></a></li>');

      var menuHtmlSafe = '';

      if( user_info.guest) {
        if (user_info.login_info !== false) {
          this.$innerEl.append(
            guestUserMenu.append(
              _.template('<%= guestMenuHtmlSafe %>')({ guestMenuHtmlSafe: this.guestTemplate() })
            )
          );
          guestUserMenu.find('a[data-toggle="modal"][data-modal-name="login"]').on("click",$.proxy( this.handleLogin, this ));
          guestUserMenu.find('a[data-toggle="modal"][data-modal-name="join"]').on("click",$.proxy( this.handleJoin, this ));
        }

        return;
      }

      var notificationsPlaceholder = $('<li class="global-nav_drawer user-menu_entry-wrapper global-nav_menu--community-notifications" data-menu-type="community-notifications" data-el="nav-drawer"></li>');
      userMenu.append(notificationsPlaceholder);

      _.each(user_menus, function(menu) {
        menuHtmlSafe = userMenuItemTemplate({
          type: menu.type,
          href: menu.href,
          title: menu.title,
          target: menu.target,
          icon: menu.icon,
          avatar: menu.type === 'my_profile' ? user_info.avatar : undefined
        });

        userMenu.append( _.template('<%= menuHtmlSafe %>')({menuHtmlSafe: menuHtmlSafe}) );
      });

      this.$innerEl.append(userMenu);

      userMenu.find('[data-menu-type="logout"]').on("click",$.proxy( this.handleLogout, this ));
      userMenu.find('a[href]').on('click.mobile-nav.data-api', $.proxy($UI._BaseNavbar.analyticsForClick, this));
    }
  };

}( window.jQuery );
};
/*1.0*/
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  var KEYCODES = { DOWN: 40, UP: 38, ENTER: 13, TAB: 9 };

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Nav Search
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  $UI.GlobalSearch = function(element, options) {
    $(document).on( 'global-search:activate', $.proxy( this.activate, this ) );
    $(document).on( 'global-search:deactivate', $.proxy( this.deactivate, this ) );
    $(document).on( 'click.global-search', $.proxy( this.hideOnClickOut, this ) );
    this.init(element,options);
  }

  $UI.GlobalSearch.defaults = {
    autocomplete_min_length: 2,
    next_letter_wait_timeout: 300
  };

  $UI.GlobalSearch.prototype = {

    init: function(element, options) {
      // Don't want to do a lot of work here since most page loads won't see search get used
      this.$el = element;
      this.options = typeof options === 'object' ? options : {};
      this.options = _.defaults( this.options, $UI.GlobalSearch.defaults );

      this.searchShown = false;

      var searchControls = this.$el.find('.global-search_controls');

      if(searchControls.length == 0) {
        var searchControls = '<div class="global-search_controls" role="search" id="aria-global-search"><i class="global-search_mobile-toggle global-nav-icon global-search-icon" role="presentation"></i><form class="global-search_form"><i class="global-nav-icon global-search-icon" role="presentation"></i><input class="global-search_input" type="text" autocomplete="off" aria-label="Search the Spiceworks Website"/></form></div>';
        this.$el.prepend(searchControls);
      }

      this.$el.off('focusin.global-search');
      this.$el.on('focusin.global-search', $.proxy( this.toggleActiveState, this));

      //i tag is not focusable and therefore cannot bubble focus to $searchMenu, so add click handler
      this.$el.find('.global-search-icon').off('click.global-search');
      this.$el.find('.global-search-icon').on('click.global-search', $.proxy(this.toggleActiveState, this));

      this.autocompleteMinLength = this.options.autocomplete_min_length;
      this.loadTemplates();

      this.render();

      if(!this.isMobile() && this.options.autofocus) {
        this.activate();
      }

      this.debouncedAutocomplete = _.debounce( $.proxy( this.autocomplete, this, this.query ),
                                              this.options.next_letter  return window.innerWidth < 960;
    },

    toggleSearch: function(event) {
      event && event.preventDefault() && event.stopPropagation();

      if(this.searchShown) {
        this.deactivate();
      } else {
        $(document).trigger('mobile-nav:hide');
        this.activate();
      }
    },

    activate: function() {
      this.searchShown = true;
      $('body').addClass( 'global-search-open' );

      this.$el.on( 'input.global-search.query', $.proxy( this.autocompleteIfLongEnough, this ) );

      $(document).on( 'keydown.global-search.navigation', $.proxy( this.handleKeyDown, this ) );

      $(document).trigger( 'global-search.activated' );

      this.$el.find('.global-search_full-search-link').on('click', $.proxy(this.analyticsForFullSearch, this));

      this.$el.on( 'click.global-search.analytics-capture', '.global-search_result-link', $.proxy(this.analyticsForAutocompleteSelect, this));

      this.$el.addClass('is-active');

      this.$input.focus();
    },

    deactivate: function() {
      if( this.$el && this.$el.is(':visible') ) {
        this.searchShown = false;
        $('body').removeClass( 'global-search-open' );

        this.$el.off( 'keyup.global-search.query' );
        $(document).off( 'keydown.global-search.navigation' );
        this.$el.off( 'click.global-search.analytics-capture' );

        this.$input.val('');
        this.$input.blur();
        this.query = this.lastAutocompleteQuery = null;
        this.$resultsEl.hide();
        this.$el.removeClass('is-active');
      }
    },

    toggleActiveState: function(event) {
      //can only click on search icon when search is deactivated, so event will always be activate
      if(event.type === 'click') {
        this.activate();
        return;
      }

      var target = event.target;

      //if search is already focused and element to be focused is within search element, return
      if($.contains(this.$el[0], target) && this.$el.hasClass('is-active')) {
        return;
      }

      var action = event.type === 'focusin' ? 'activate' : 'deactivate';
      this[action]();
    },

    render: function() {
      this.spinnerSize = this.options.spinner_size || 8;

      // Cleanup of event handlers for when re-rendering (harmless first time through)
      this.$el.find('form').off( 'submit.global-search.full-search' );

      var templateData = {
        selected_app_icon: 'global-nav-icon-notifications_small',
        placeholder: 'Search the community'
      };

      this.$el.html( this.controlsTemplate( templateData ) );

      this.$input = this.$el.find('input[type="text"]');

      this.$spinnerEl = this.$el.find('.global-search_spinner');
      for(var i = 0; i < this.spinnerSize; i++){
        this.$spinnerEl.append($(this.spinnerTemplate()));
      }

      this.$resultsEl = $( this.resultsTemplate() );
      this.$suggestionsEl = this.$resultsEl.find('[data-content="search-suggestions"]');
      this.$el.append( this.$resultsEl );

      var iconNames = { community: 'global-nav-icon-notifications', desktop: 'apps-menu-icon' };
      var humanNames = { community: 'Community', desktop: 'Apps' };

      this.$el.find('.global-search-icon').on('click', $.proxy(this.toggleSearch, this));

      this.$el.find('form').on( 'submit.global-search.full-search', $.proxy( this.submitFullSearch, this ) );

      this.$el.find('[data-toggle="nav-dropdown"]').navDropdown();
    },

    loadTemplates: function() {
      var oldTemplateSettings = _.templateSettings;
      _.templateSettings = { evaluate: /\{\{(.+?)\}\}/g, interpolate: /\{\{=(.+?)\}\}/g, escape: /\{\{-(.+?)\}\}/g };

      this.controlsTemplate       = _.template('<div class="global-search_controls" role="search"><i class="global-search_mobile-toggle global-nav-icon global-search-icon" role="presentation"></i><form class="global-search_form"><i class="global-nav-icon global-search-icon" role="presentation"></i><input class="global-search_input" type="text" autocomplete="off" placeholder="Find answers, products, resources" aria-label="Search the Spiceworks Website"/><div class="global-search_spinner sui-spinner sui-u-fadeable"></div></form></div>');
      this.spinnerTemplate      = _.template('<div class="sui-spinner_inner"></div>');
      this.appSelectionTemplate = _.template('<li><a href="#" data-name="{{- internal_name }}"><i class="global-nav-icon {{- icon_name }}"></i><span>{{- name }}</span></a></li>');
      this.resultsTemplate      = _.template('<div class="global-search_results"><div class="global-search_result" data-content="exact-search-result" data-result-type="full-search" data-text=""><a href="" class="global-search_full-search-link">Search <span class="global-search_result-name"></span><span class="global-search_result-prompt">Press Enter</span></a></div><div data-content="search-suggestions"></div><div class="global-search_groups sui-u-collapsible sui-u-collapsed"></div></div>');

      this.groupTemplate        = _.template('<div class="global-search_group sui-u-fadeable u-faded-almost-out"><span class="global-search_group-name" data-group-name="{{- name }}">{{- name }}</span><ul class="global-search_group-results"></ul></div>');
      this.resultTemplate       = _.template('<li class="global-search_result"><a class="global-search_result-link" href="{{- path }}">{{ if (result_icon) { }}<i class="global-nav-icon {{- result_icon}}"></i>{{ } }}<span class="global-search_result-name" data-result-name="{{- name}}">{{- name }}</span><span class="global-search_result-excerpt">{{= excerpt }}</span></a></li>');
      this.suggestionTemplate   = _.template('<div class="global-search_result" data-result-type="full-search" data-text="{{- text }}"><a href="{{- url }}" class="global-search_full-search-link"><span class="global-search_result-name">\'{{- text }}\'</span></a></div>');

      _.templateSettings = oldTemplateSettings;
    },

    hideOnClickOut: function(event) {
      if( $(event.target).closest('.global-search_controls').length === 0 ) {
        this.deactivate();
      }
    },

    autocompleteIfLongEnough: function() {
      this.query = this.$input.val();

      if( this.query.length >= this.autocompleteMinLength ) {
        if( this.query !== this.lastAutocompleteQuery ) { // get an event on navigation (up/down) keys so don't autocomplete for those
          this.lastAutocompleteQuery = this.query;
          this.autocompleteXhr && this.autocompleteXhr.abort(); // helps prevent a race condition with fading results in/out

          this.showAutocompletePanel();

          this.debouncedAutocomplete();
        }
      }
      else {
        this.hideAutocompletePanel();
        this.$spinnerEl && this.$spinnerEl.removeClass('u-faded-in');
        this.lastAutocompleteQuery = null;
      }
    },

    showAutocompletePanel: function() {
      if( !this.$el.is(':visible') ) {
        return; // Just in case they closed search in the meantime
      }

      this.$resultsEl.show(); // in case it was hidden by clearing the text field
      this.fadeOutResults();

      var exactResult = this.$resultsEl.find('[data-content="exact-search-result"]');

      exactResult.attr('data-text', this.query);
      exactResult.find('a').attr('href', this.fullSearchPath(this.query) );
      exactResult.find('.global-search_result-name').text("'" + this.query + "'");
      this.selectFullSearchResult();
    },

    fullSearchPath: function(query) {
      return (this.options.url || '')  + '/search?query=' + encodeURIComponent(quer + '/api/v3/search/autocomplete';
    },

    hideAutocompletePanel: function() {
      if( this.$resultsEl ) {
        this.$resultsEl.hide();
        this.$resultsEl.find('.global-search_groups').addClass('sui-u-collapsed');
      }
      if( this.$suggestionsEl ) {
        this.$suggestionsEl.html('');
      }
    },

    autocomplete: function() {
      this.$spinnerEl.addClass('u-faded-in');

      this.autocompleteXhr = this.submitSearchAutocomplete(this.query);
      this.autocompleteXhr.done( $.proxy( this.showAutocompleteResults, this ) );
      this.autocompleteXhr.error( $.proxy( this.showAutocompleteError, this ) );
    },

    submitSearchAutocomplete: function(query) {
      var config = {
          url: this.autocompleteSearchPath(query),
          timeout: 3000,
          dataType: "json",
          xhrFields: {withCredentials: true},
          headers: { Accept: 'text/javascript, text/html, application/xml, text/xml, */*' }
        },
        data = { q: query };

      _.extend(config, this.options.autocomplete_request_config || {});

      if(this.options.autocomplete_request_config) {
        _.extend(data, this.options.autocomplete_request_config.data || {});
      }

      config.data = data;

      $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
        category: 'NavSearch',
        action: 'keydown',
        label: 'Autocomplete - ' + query
      });

      $UI._BaseNavbar.triggerGalaEvent({
        source: 'Nav',
        name: 'com.spiceworks.events.searchbox.ViewAutocomplete',
        data: {
          searchQuery: query
        }
      });

      return $.ajax( config sultGroups( json.result_groups );
    },

    insertSuggestions: function(suggestions) {
      suggestions = suggestions || [];

      this.$suggestionsEl.html('');
      _.each( suggestions || [], _.bind( function(suggestion) {
        this.$suggestionsEl.append( this.suggestionTemplate({ text: suggestion, url: this.fullSearchPath(suggestion) }) );
      }, this ) );
    },

    insertResultGroups: function(result_groups) {
      result_groups = result_groups || [];

      var groups = this.$resultsEl.find('.global-search_groups');

      groups.find('.global-search_group').remove();

      var _this = this;
      _.each( result_groups, function( group ) {
        var groupEl = $( _this.groupTemplate({ name: group.name || '' }) );

        groups.append( groupEl );
        var groupResults = groupEl.find('.global-search_group-results');

        _.each( group.results || [], function( result ) {
          var data = _.extend( { name: '', excerpt: '', path: '#', result_icon: ''}, result );
          if(data.result_icon) {
            data.result_icon = ' global-nav-icon-' + data.result_icon;
          }
          groupResults.append( _this.resultTemplate( data ) );
        });
      });

      var reflow = $('body').offset().left; // force reflow
      this.fadeInResults();
      this.$spinnerEl.removeClass('u-faded-in');

      if( result_groups.length ) {
        groups.removeClass('sui-u-collapsed');
      }
      else {
        groups.addClass('sui-u-collapsed'); // Hide the groups list if there are no results
   nnerEl.removeClass('u-faded-in');
    },

    fadeOutResults: function() {
        this.$resultsEl.find('.global-search_group').removeClass('u-faded-in').addClass('u-faded-almost-out').addClass('u-faded-in');
    },

    handleKeyDown: function(e) {
      if( !this.$resultsEl || !this.$resultsEl.is(':visible') ) {
        return; // Just in case they closed search in the meantime
      }

      if(e.keyCode === KEYCODES.ENTER && e.target !== this.$input[0]) {
        // Ignore ENTER in input field b/c that will do a submit
        this.navigateToSelectedResult();
      }

      var focused = $(document.activeElement),
          results = this.resultElements(),
          index = results.index(focused),
          newIndex,
          newSelection;

      if(index < 0) {
        index = results.index(this.$resultsEl.find('.is-selected'));
      }

      newIndex = this.handleKeyboardNav(e, index, results.length);

      if(newIndex >= 0) {
        results.removeClass('is-selected');
        $(results[newIndex]).focus();
        this.selectNewResult();
      }
    },

    selectNewResult: function() {
      var newSelection = $(document.activeElement).parent();
      if( newSelection.attr('data-result-type') === 'full-search' ) {
        this.$input.val( newSelection.attr('data-text') )
        this.query = this.lastAutocompleteQuery = newSelection.attr('data-text');
      }
    },

    handleKeyboardNav: function(event, index, length) {
      var key = event.keyCode;

      // support keyboard navigation via arrow keys
      if((key === KEYCODES.UP)) {
        event.preventDefault();
        return index - 1 < 0 ? length - 1 : index - 1;
      } else if((key === KEYCODES.DOWN)) {
        event.preventDefault();
        return index + 1 === length ? 0 : index + 1;
      }
    },

    resultElements: function() {
      return this.$resultsEl.find('a');
    },

    selectFullSearchResult: function() {
      if( this.$resultsEl ) {
        var results = this.resultElements();
        if( results.length > 0 ) {
          results.removeClass('is-selected');
          $(results[0]).addClass('is-selected');
        }
      }
    },

    // autocomplete click
    navigateToSelectedResult: function() {
      this.analyticsForAutocompleteSelect();

      window.location = result.attr('href');
    },

    // press enter in search box or click/select first result('press enter')
    submitFullSearch: function(event) {
      if( this.query ) {
        this.analyticsForFullSearch();
        window.location = this.fullSearchPath(this.query);
        return false;
      }
    },

    analyticsForFullSearch: function() {
      $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
        category: 'NavSearch',
        action: 'click',
        label: 'Full Search - ' + this.query
      });

      $UI._BaseNavbar.triggerGalaEvent({
        source: 'Nav',
        name: 'com.spiceworks.events.searchbox.Search',
        data: {
          searchQuery: this.query
        }
      });
    },

    analyticsForAutocompleteSelect: function(e) {
      var $result = e ? $(e.currentTarget) : document.activeElement;
      var $group = $result.parents('.global-search_group');
      var type = $group.find('.global-search_group-name').data('group-name');
      var name = $result.find('.global-search_result-name').data('result-name');

      var label = ['Search Item Selected', this.query, type, name].join(' - ');

      $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
        category: 'NavSearch',
        action: 'click',
        label: label
      });

      $UI._BaseNavbar.triggerGalaEvent({
        source: 'Nav',
        name: 'com.spiceworks.events.searchbox.ClickAutocomplete',
        data: {
          searchQuery: this.query,
          itemType: type,
          itemName: name
        }
      });
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Hotkey watcher (for Search only right now)
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // "state machine" for detecting keystroke combination (tab + q)
  var waitingForOldSearchKey = false;

  var oldSearchModifierKey = 9; // TAB
  var oldSearchKey = 81; // 'Q'
  var escapeKey = 27;

  var searchKey = 191; // The forward slash '/'

  // event listener for triggering the dialog
  $(document).keydown(function(event) {
    var keyCode = event.keyCode;
    var $target = $(event.target);

    if( $target.is('input') || $target.is('textarea') || $target.attr('contentEditable') ) {
      return;
    }

    if( keyCode === searchKey ) {
      event.preventDefault();
      $(document).scrollTop(0)
      $(document).trigger( 'global-search:activate');
      waitingForOldSearchKey = false;
    }
    if( keyCode === oldSearchModifierKey) {
      waitingForOldSearchKey = true;
    }
    else {
      if( keyCode === oldSearchKey && waitingForOldSearchKey ) {
        event.preventDefault();
        $(document).trigger( 'global-search:activate');
      }
      waitingForOldSearchKey = false;
    }
  });

  // if they let go of the modifier while waiting for the search key just cancel everything
  $(document).keyup(function(event) {
    if( waitingForOldSearchKey && event.keyCode === oldSearchModifierKey ) {
      waitingForOldSearchKey = false;
    }
  });

  // handle everything key-wise inside the dialog...
  $(document).keydown(function(event) {
    var key = event.keyCode;

    if(key === escapeKey || key === KEYCODES.TAB) {
      $(document).trigger( 'global-search:deactivate');
    }
  });

}( window.jQuery );
}
;
/*1.0*/
// Rails composition file









;
/*1.0*/
;
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  /* CLASS DEFINITION
   * ========================= */

    var dropSelector = '[data-toggle="domestic-nav-menu"]',
        DomesticNavMenu = function ( element ) {
          var $trigger = $(element);
          var $dropdown = $trigger.parent();

          this.debouncedHide = _.debounce($.proxy(this.hide, this), 300);
          this.debouncedShow = _.debounce($.proxy(this.show, this), 300);

          $dropdown.on('focusin.domestic-nav-menu.domestic-nav', $.proxy(function(e) {
            if(!this.isHovering) {
              this.isFocused = true;
              this.toggle(e);
            }
          }, this));

          $dropdown.on('focusout.domestic-nav-menu', $.proxy(function(e) {
            this.isFocused = false;
            this.toggle(e);
          }, this));

          $dropdown.on(is.toggle(e);
            }
          }, this));

          $dropdown.on(            this.toggle(e);
          }, this));

          $(document).on('keyup.dismiss.domestic-nav-menu', $.proxy(hideOnEscape, this) );
        };

    DomesticNavMenu.prototype = {

      constructor: DomesticNavMenu,

      toggle: function ( e ) {
        var $this = $(e.target),
            $parent = $this.closest('.domestic-nav_menu--dropdown');

        this.$element = $parent;

        if(e.type === 'mouseenter' || e.type === 'focusin') {
          this.debouncedShow(e)
        } else if(e.type === 'mouseleave' || e.type === 'focusout') {
          this.debouncedHide(e);
        }
      },

      show: function(e) {
        if((this.isFocused || this.isHovering) && !this.$element.parent().hasClass('is-open')) {
          var relatedTarget = { relatedTarget: this };

          this.$element.addClass('is-open')
                       .trigger('shown.domestic-nav-menu', relatedTarget);

          this.handleShowEvent();
        }
      },

      handleShowEvent: function() {
        var elementText = this.$element.children('a').data('text');

        $(document).trigger('gala-analytics:send:event', {
          source: 'Domestic',
          name: 'com.spiceworks.events.menu.View',
          version: '1-0',
          data: {
            menuName: elementText
          }
        });
      },

      hide: function(e) {
        var $this = this.$element,
            $parent = $this.parents('.domestic-nav_menu--dropdown');

        if(!this.isFocused && !this.isHovering && !$.contains($this[0], e.relatedTarget)) {
          DomesticNavMenu.prototype.clearMenus($this);

          if($parent.length && !$.contains($parent[0], e.relatedTarget)) {
            DomesticNavMenu.prototype.clearMenus($parent);
          }
        }
      },

      clearMenus: function($currentDropdown) {
        $(dropSelector).each( function() {
          var $parent = $(this).parent(),
              dropdown = $(this).data().domesticNavMenu

          if($currentDropdown && !dropdown.isHovering && !dropdown.isFocused) {
            if($parent.length !== 0 && !$.contains($parent[0], $currentDropdown[0]) && $parent.hasClass('is-open')) {
              var relatedTarget = { relatedTarget: this }
              $parent.removeClass('is-open').trigger('hidden.domestic-nav-menu', relatedTarget);

              $(document).trigger('gala-analytics:send:event', {
                source: 'Domestic',
                name: 'com.spiceworks.events.menu.Hide',
                version: '1-0',
                data: {
                  menuName: $(this).data('text')
                }
              });
            }
          }
        });
      }
    }

    function hideOnEscape(event) {
      if( event.which == 27 ) {
        this.isFocused = false;
        this.isHovering = false;
        DomesticNavMenu.prototype.clearMenus(this.$element);
      }
    }

   /* DROPDOWN PLUGIN DEFINITION
    * ========================== */

   $.fn.domesticNavMenu = function ( option ) {
     return this.each(function () {
       var $this = $(this),
           data = $this.data('domesticNavMenu');

       if (!data) $this.data('domesticNavMenu', (data = new DomesticNavMenu(this)));
     });
   }

  $.fn.domesticNavMenu.Constructor = DomesticNavMenu;

}( window.jQuery );
}
;
/*1.0*/
;
if(typeof window.jQuery === 'function') {
  !function($) {
    var DOMESTIC_PLACEHOLDER_SELECTOR = '[data-placeholder="domestic-nav"]';
    var DOMESTIC_PLACEHOLDER = '<script data-placeholder="domestic-nav"></script>';
    var DOMESTIC_NAV_SELECTOR = '[data-navbar="domestic"]';

    var HEADER_SELECTOR = '[data-navbar="domestic-navigation"]';
    var HEADER_TEMPLATE = '<header class="site-navigation sui-opt-in" data-navbar="domestic-navigation">' +
                            DOMESTIC_PLACEHOLDER
                          '</header>';

    var AUXILIARY_DROPDOWN_TEMPLATE = "<ul role='menu' aria-label='Topic types' class='domestic-nav_menu-content topic-bttn_options-dropdown sui-u-fadeable u-faded-in'> \
      <li role='none' class='topic-bttn_option'> \
        <a role='menuitem' tabindex='-1' href='/topic/new?active=question' rel='nofollow'>Ask a Question</a> \
      </li> \
      <li role='none' class='topic-bttn_option'> \
          <a role='menuitem' tabindex='-1' href='/topic/new?active=discussion' rel='nofollow'>Start a Discussion</a> \
      </li> \
      <li role='none' class='topic-bttn_option'> \
          <a role='menuitem' tabindex='-1' href='/topic/new?active=recommendation' rel='nofollow'>Get Recommendations</a> \
      </li> \
      <li role='none' class='topic-bttn_option'> \
        <a role='menuitem' tabindex='-1' href='/topic/new?active=poll' rel='nofollow'>Start a Poll</a> \
      </li> \
    </ul>";

    var GROUPS_API_PATH = '/api/v3/groups';

    var domestic_template = '<nav class="domestic-nav" data-navbar="domestic" role="navigation" aria-labelledby="aria-domestic-nav"></nav>';
    var navShownBodyClass = 'community--domestic-nav-shown';

  /**
   The Domestic Navbar (handles configuration & rendering of the domestic navbar).  Please use the `create` method instead of using `new`. You can pass configuration params to `create` or `render` and any passed to `create` will have the ones passed to `render` merged in on each render. So, for convenience, you can pass any unchanging params to `create` and only pass params to `render` which do change.  For example:

   ```
   var myNavbar = $UI.DomesticNavbar.create({
     communityUrl: 'https://community.spiceworks.com',
     title: { text: 'Community', url: 'https://community.spiceworks.com' },
     navigationMenus: myNavMenus,
     auxiliaryMenus: myAuxNavMenus,
     urlFor: mySpecialUrlForFunction,
     onRoute: myRoutingFunction
     isActiveMenu: myActiveMenuComputingFunction
   });
   ```

   and later

   ```
   myNavbar.render({
     navigationMenus: myUpdatedNavMenus
   });
   ```

   In a server-side context (e.g. Rails) where you render the navbar once per page load, you probably just want to make both calls at once:

   ```
   $UI.DomesticNavbar.create().render({
     //  options
   });
   ```

   @class Community.$UI.DomesticNavbar
   @constructor
   @param {Object} params Configuration parameters
   */
    $UI.DomesticNavbar = function(params) {

      if (params && params.communityUrl) {
        this.communityUrl = params.communityUrl;
      } else {
        this.communityUrl = 'https://community.spiceworks.com';
      }

      this.setDefaults();

      params = _.defaults(params || {}, this.DEFAULTS);
      this.params = params;
      this.urlFor = params.urlFor;
      this.isActiveMenu = params.isActiveMenu || this.isActiveMenu;
      this.onRoute = params.onRoute;

      this.template = _.template('<div class="nav-fluid-container"></div>');
      this.titleTemplate = _.template('<a href="<%- url %>" class="domestic-nav_title" data-text=<%- text %>><%- text %></a>');

      this.menusTemplate = '<ul class="domestic-nav_menus"></ul>';
      this.auxiliaryMenusTemplate = '<ul class="domestic-nav_menus--auxiliary" role="menubar"></ul>';

      this.menuTemplate = _.template('<li class="domestic-nav_menu <%- menuClasses %>"></li>');
      this.menuTriggerTemplate = _.template('<a class="domestic-nav_menu-trigger" <% if (typeof(url) !== "undefined") { %>href="<%- url %>"<% } else { %> href="javascript:void(0)"<% } %> data-toggle="domestic-nav-menu" role="button" <% if (typeof(text) !== "undefined") { %> data-text="<%- text %>" title="<%- text %>"<% } %>></a>');
      this.menuLinkTemplate  = _.template('<a <% if( typeof(dropdown) != "undefined" ) { %>role="menuitem" aria-expanded="false" aria-haspopup="true" tabindex="0"<% } %> class="domestic-nav_<%- type %> <% if (typeof(linkClass) !== "undefined") { %> <%- linkClass %> <% } %>" href="<%- url %>" <% if (typeof(target) !== "undefined") { %> target="<%- target %>" <% } %><% if (typeof(rel) !== "undefined") { %> rel="<%- rel %>" <% } if(typeof linkText !== "undefined") { %> data-text="<%- linkText %>" <% } %> ></a>');
      this.menuIconTemplate  = _.template('<% if( typeof(icon) != "undefined" ) { %><i class="sui-icon sui-icon-<%- icon %> sui-icon--<%- color %> sui-icon--16"></i><% } %>');
      this.menuTextTemplate  = _.template('<% if( typeof(html_safe_content) != "undefined" ) { %><%= html_safe_content %><% } else { %><%- text %><% } %>');
      this.menuContentTemplate = _.template('<ul class="domestic-nav_menu-content sui-u-fadeable u-faded-in <% if( typeof(className) !== "undefined") { %><%- className %> <% } %>" data-content="domestic-nav-menu"></ul>');

      this.groupsHeaderTemplate = _.template('<div class="groups-category"><% if (typeof(category) !== "undefined") { %> Popular <%- category %> Forums <% } %></div>');
      this.groupsLinkTemplate = _.template('<% if (typeof(category) !== "undefined") { %><a class="groups-category_link" href="<%- url %>">All <%- category %> forums</a> <% } %>');

      this.timestampPlaceholderTemplate = _.template('<div class="domestic-nav_timestamp"></div>');
      this.timestampTemplate = _.template('Latest activity <span data-js-postprocess="timestamp" data-timestamp-format="from_now" datetime="<%- timestamp %>" title="<%- timestamp_title %>"><%- timestamp_ago %></span>');
    };

  /**
   Create an instance of the Navbar.

   @method create
   @static
   @param {Object} params Configuration parameters (same as those passed to `render`, see that method for full docsn new $UI.DomesticNavbar(params);
    };

    $UI.DomesticNavbar.prototype = {
      /**
        @method render

        @param {Object} [params] Configuration parameters (defined below)

        @param {String} [ params.title = {}] App title. Should be in form `{ text: 'Community', url: 'http://community.spiceworks.com' }`

        @param {Boolean} [params.includeDefaultMenus = true] When true, will include the default menus(My Feed, Discussion Groups, Answer Questions, Subscribed, Brand Tools or More depending on user role).

        @param {Object} [params.userInfo = {}] When `includeDefaultMenus` is true, `userInfo` will be used to determine whether to show Brand Tools or More menu.
        @param {Boolean} [params.userInfo.isVendor] When true, user gets Brand Tools menu by default.
        @param {Boolean} [params.userInfo.isMarketer] When true, user gets Brand Tools menu by default.
        @param {Boolean} [params.userInfo.isModerator] When true, user gets More menu consisting of Moderator Leaderboard and Moderation Dashboard by default.
        @param {Boolean} [params.userInfo.canViewAlerts] When true, if user is also moderator, they get My Alerts in More menu by default.
        @param {Boolean} [params.userInfo.canViewSocialHub] When true, if user is also moderator, they get SocialHub in More menu by default.

        @param {Object[]} [ params.navigationMenus = []] Array of menus. Each can have: text, handler, routeName, or url attributes. For example: {text: 'Other Stuff', url: 'http://www.google.com', handler: "default", routeName: 'other'}
        @param {Object[]} [ params.auxiliaryMenus = []] Array of auxiliary menus. Each can have: text, handler, routeName, or url attributes. For example: {text: 'Other Stuff', url: 'http://www.google.com', handler: "default", routeName: 'other'}

        @param {Function(menuItem)} [params.urlFor] Define a function that determines the URL to use as the `href` attribute on each navigation menu entry if no `url` attribute was set. The menu entry object definition passed to render is passed to this function so that you can use any attributes you set on that object in determining the correct URL. If no `url` attribute was set and you do not define this function, the `href` will be set to '#'.

        @param {Function(menuItem,event)} [params.onRoute] Define a function that determines what to do when a navigation menu entry is clicked. The menu entry object definition passed to render is passed to this function so that you can use any attributes you set on that object in determining what action to take. The (click) event object is also passed for your use you are responsible for calling `preventDefault()` or `stopPropagation()` if necessary. If you do not define this function no JavaScript action will be taken and the browser will try to perform the default action.

        @param {Function(menuItem)} [params.isActiveMenu] Define a function that determines if a given navigation menu entry should be marked active. Called each time the navigation menus are (re)rendered. Returning a truthy marks an entry active. The menu entry object definition passed to render is passed to this function so that you can use any attributes you set on that object in determining whether it should appear active. If you do not define this method then the `active` attribute on the menu entry object will be used (set to a truthy means the entry is active, set to a falsey value or not set at all means the entry is not active).
      */
      render: function(params) {
        params = _.defaults({}, params || {}, this.params);
        this.params = params;
        this.$element = $(HEADER_SELECTOR);

        // If there is currently no site-navigation element in the dom
        // let's create one right after the body tag
        if( this.$element.length == 0 ) {
          this.$element = $(HEADER_TEMPLATE);
          $('body').prepend(HEADER_TEMPLATE);
        }

        if( !this.domesticPlaceholder && this.$element.find(DOMESTIC_PLACEHOLDER_SELECTOR).length == 0 ) {
          // Can't use jQuery here b/c in versions < 1.9 it won't append script tags
          this.$element[0].innerHTML += DOMESTIC_PLACEHOLDER;
        }

        // These are just used for caching so we don't have to `find()` everytime we render
        this.domesticPlaceholder = this.$element.find(DOMESTIC_PLACEHOLDER_SELECTOR).length;

        var showMyself = params.title || params.navigationMenus || params.auxiliaryMenus;

        this.$placeholderEl = this.$element.find( DOMESTIC_PLACEHOLDER_SELECTOR );
        this.$el = $(DOMESTIC_NAV_SELECTOR);

        $('body').removeClass(navShownBodyClass);

        if( !showMyself ) {
          this.$el.remove();
          return;
        }

        if( this.$el.length == 0 ) {
          // there is currently no domestic-nav element in the dom.
          // Let's create one inside the site-navigation header
          this.$el = $(domestic_template);
          $(this.$placeholderEl).after( this.$el );
        }

        this.title = params.title;

        this.menus = params.navigationMenus || [];
        this.auxiliaryMenus = params.auxiliaryMenus || [];

        if(params.includeDefaultMenus) {
          Array.prototype.push.apply(this.menus, this.DEFAULT_NAVIGATION_MENUS)

          var user = params.userInfo || {};
          if(user.isVendor || user.isMarketer) {
            this.menus.push({ text: 'Brand Tools', items: [this.PREDEFINED_MENUS.SOCIAL_HUB, this.PREDEFINED_MENUS.MY_ALERTS] });
          } else {

            if(user.canViewCollections) {
              this.menus.push({ text: 'Collections', url: '/profile/collections' });
            } else {
              this.menus.push({ text: 'Meetups', url: '/spicecorps' });
            }

            var items = [];

            if(user.canViewCollections) {
              items.push({ text: 'Meetups', url: '/spicecorps' });
            }

            if(user.isModerator) {
              items.push(this.PREDEFINED_MENUS.MODERATION_DASHBOARD, this.PREDEFINED_MENUS.MODERATOR_LEADERBOARD);
            }

            if(user.canViewSocialHub) {
              items.push(this.PREDEFINED_MENUS.SOCIAL_HUB);
            }

            if(user.canViewAlerts) {
              items.push(this.PREDEFINED_MENUS.MY_ALERTS);
            }

            if(items.length) {
              this.menus.push({
                text: 'More',
                items: items
              });
            }
          }

          this.auxiliaryMenus.push(user.isGuest ? this.PREDEFINED_MENUS.GUEST_AUX_MENU : this.PREDEFINED_MENUS.LOGGED_IN_AUX_MENU);
        }

        var html = $( this.template() );

        if(this.title) {
          html.append(
            this.titleTemplate({
              text: this.title.text || '',
              url: this.title.url || ''
            })
          );
        }

        if( this.menus && this.menus.length ) {
          var menus = $( this.menusTemplate );
          $.fn.append.apply( menus, this._menuListHtml(this.menus) );
          html.append(menus);
        }

        if( this.auxiliaryMenus && this.auxiliaryMenus.length ) {
          var auxiliaryMenus = $( this.auxiliaryMenusTemplate );
          $.fn.append.apply( auxiliaryMenus, this._menuListHtml(this.auxiliaryMenus) );
          html.append( auxiliaryMenus );
        }

        this.$el.html( html );

        this.$el.find('[data-toggle="domestic-nav-menu"]').domesticNavMenu();

        $('body').addClass(navShownBodyClass);

        this.initEvents();
      },

      setDefaults: function() {
        this.DEFAULTS = {
          includeDefaultMenus: true,
          title: { text: 'Community', url: this.urlFromPath('/start') }
        };

        this.DEFAULT_NAVIGATION_MENUS = [
          { text: 'My Feed',
            handler: 'login_required',
            url: '/my-feed'
          },
          { text: 'Categories', classNames: 'spec-categories', url: '/group',
            items: [
              { text: 'Cloud', url: '/cloud', handler: 'default', type: 'groupCategory', items: [
                { text: 'G Suite', url: '/cloud/g-suite', id: 195 },
                { text: 'General SaaS & Cloud Computing', url: '/cloud/general', id: 259 },
                { text: 'Microsoft Azure', url: '/cloud/microsoft-azure', id: 818 },
                { text: 'Microsoft Office 365', url: '/cloud/office-365', id: 453 },
                { text: 'Web Hosting', url: '/cloud/web-hosting', id: 287 }
              ] },
              { text: 'Collaboration', url: '/collaboration', handler: 'default', type: 'groupCategory', items: [
                { text: 'Email', url: '/collaboration/email', id: 240 },
                { text: 'Microsoft Exchange', url: '/collaboration/microsoft-exchange', id: 23 },
                { text: 'Team Collaboration', url: '/collaboration/team-collaboration', id: 1430 },
                { text: 'Video Conferencing', url: '/collaboration/video-conferencing', id: 279 },
                { text: 'VoIP', url: '/collaboration/voip', id: 36 }
              ] },
              { text: 'Databases', url: '/databases', handler: 'default', type: 'groupCategory', items: [
                { text: 'Crystal Reports', url: '/databases/crystal-reports', id: 234 },
                { text: 'General Databases', url: '/databases/general', id: 202 },
                { text: 'Microsoft SQL Server', url: '/databases/microsoft-sql-server', id: 26 },
                { text: 'MySQL', url: '/databases/mysql', id: 24 },
                { text: 'Oracle', url: '/databases/oracle', id: 191 }
              ] },
              { text: 'DevOps', url: '/devops', handler: 'default', type: 'groupCategory', items: [
                { text: 'Docker & Containers', url: '/devops/docker-containers', id: 1137 },
                { text: 'General DevOps', url: '/devops/general', id: 747 }
              ] },
              { text: 'Hardware', url: '/hardware', handler: 'default', type: 'groupCategory', items: [
                { text: 'Apple', url: '/hardware/apple', id: 32 },
                { text: 'Dell Hardware', url: '/hardware/dell', id: 28 },
                { text: 'General Hardware', url: '/hardware/general', id: 341 },
                { text: 'HP Hardware', url: '/hardware/hp', id: 29 },
                { text: 'Printers, Copiers, Scanners & Faxes', url: '/hardware/printers-copiers-scanners-faxes', id: 371 },
              ] },
              { text: 'Linux', url: '/linux', handler: 'default', type: 'groupCategory', items: [
                { text: 'BSD', url: '/linux/bsd', id: 247 },
                { text: 'Debian GNU/Linux', url: '/linux/debian', id: 263 },
                { text: 'General Linux', url: '/linux/general', id: 180 },
                { text: 'Ubuntu', url: '/linux/ubuntu', id: 242 }
              ] },
              { text: 'Mobile', url: '/mobile', handler: 'default', type: 'groupCategory', items: [
                { text: 'Android', url: '/mobile/android', id: 419 },
                { text: 'iPhone & iPad', url: '/mobile/iphone-and-ipad', id: 420 },
                { text: 'MDM & BYOD', url: '/mobile/mdm_byod', id: 563 },
                { text: 'Mobile Computing', url: '/mobile/general', id: 186 },
                { text: 'Tablets', url: '/mobile/tablets', id: 484 }
              ] },
              { text: 'Networking', url: '/networking', handler: 'default', type: 'groupCategory', items: [
                { text: 'Cisco', url: '/networking/cisco', id: 35 },
                { text: 'DNS', url: '/networking/dns', id: 205 },
                { text: 'General Networking', url: '/networking/general', id: 184 },
                { text: 'SonicWALL', url: '/networking/sonicwall', id: 262 },
                { text: 'Wireless', url: '/networking/wireless', id: 229 }
              ] },
              { text: 'Security', url: '/security', handler: 'default', type: 'groupCategory', items: [
                { text: 'Antivirus', url: '/security/antivirus', id: 206 },
                { text: 'Firewalls', url: '/security/firewall', id: 193 },
                { text: 'General IT Security', url: '/security/general', id: 183 },
                { text: 'Physical Security', url: '/security/physical-security', id: 578 },
                { text: 'Web Content Filtering', url: '/security/web-content-filtering', id: 393 }
              ] },
              { text: 'Software', url: '/software', handler: 'default', type: 'groupCategory', items: [
                { text: 'General Software', url: '/software/general', id: 20 },
                { text: 'Microsoft Licensing', url: '/software/microsoft-licensing', id: 197 },
                { text: 'Microsoft Office', url: '/software/microsoft-office', id: 268 },
                { text: 'Software Deployment & Patching', url: '/software/software-deployment-patching', id: 237 },
                { text: 'Web Browser', url: '/software/web-browser', id: 584 }
              ] },
              { text: 'Storage & Backup', url: '/storage', handler: 'default', type: 'groupCategory', items: [
                { text: 'Data Backup', url: '/storage/backup', id: 203 },
                { text: 'Data Recovery', url: '/storage/data-recovery', id: 521 },
                { text: 'Data Storage', url: '/storage/general', id: 192 },
                { text: 'Disaster Recovery Planning', url: '/storage/disaster-recovery-planning', id: 218 },
                { text: 'File Sharing', url: '/storage/file-sharing', id: 550 }
              ] },
              { text: 'Virtualization', url: '/virtualization', handler: 'default', type: 'groupCategory', items: [
                { text: 'Desktop Virtualization', url: '/virtualization/desktop-virtualization', id: 466 },
                { text: 'Hyperconvergence', url: '/virtualization/hyperconvergence', id: 820 },
                { text: 'VMware', url: '/virtualization/vmware', id: 398 },
                { text: 'Virtualization', url: '/virtualization/general', id: 27 }
              ], },
              { text: 'Windows', url: '/windows', handler: 'default', type: 'groupCategory', items: [
                { text: 'Active Directory & GPO', url: '/windows/active-directory-gpo', id: 182 },
                { text: 'General Windows', url: '/windows/general', id: 185 },
                { text: 'Microsoft Remote Desktop Services', url: '/windows/remote-desktop-services', id: 692 },
                { text: 'Windows 10', url: '/windows/windows-10', id: 761 },
                { text: 'Windows Server', url: '/windows/microsoft-windows-server', id: 200 }
              ], },
              { text: 'User Groups', url: '/user-groups', handler: 'default', type: 'groupCategory', items: [
                { text: '1-Man Show', url: '/user-groups/1-man-show', id: 883 },
                { text: 'DIY and Lifehacks', url: '/user-groups/diy-and-lifehacks', id: 897 },
                { text: 'HelpDeskHell', url: '/user-groups/helpdeskhell', id: 886 },
                { text: 'HomeLabs', url: '/user-groups/homelabs', id: 1009 },
                { text: 'Space', url: '/user-groups/space', id: 877 }
              ], },
              { text: 'Water Cooler', html: 'Water Cooler', url: '/fun', handler: 'default', type: 'groupCategory', items: [
                { text: 'Contests', url: '/fun/contests', id: 490 },
                { text: 'Cooking with Spice', url: '/fun/cooking-with-spice', id: 394 },
                { text: 'Gaming', url: '/fun/gaming', id: 219 },
                { text: 'Movies & TV Shows', url: '/fun/movies-tv-shows', id: 367 },
                { text: 'Water Cooler', url: '/fun/general', id: 274 }
              ] },
              { type: "divider" },
              { html: "More &#xbb;", handler: 'default', url: '/group' }
            ]
          },
          { text: 'Answer Questions', handler: 'login_required', from: 'answer', url: '/unanswered' },
          { text: 'Subscribed', handler: 'login_required', url: '/profile/subscribed_topics' }
        ];

        this.PREDEFINED_MENUS = {
          SOCIAL_HUB: { text: 'SocialHub', handler: 'login_required', url: '/socialhub' },
          MY_ALERTS: { text: 'My Alerts', handler: 'login_required', url: '/alerts/' },
          MODERATION_DASHBOARD: { text: 'Moderation Dashboard', handler: 'login_required', url: '/moderation' },
          MODERATOR_LEADERBOARD: { text: 'Moderator Leaderboard', handler: 'login_required', url: '/moderator' },
          GUEST_AUX_MENU: {
            text: 'Ask Question',
            icon: 'edit',
            iconColor: 'white',
            url: '/topic/new',
            from: 'ask',
            handler: 'login_required',
            rel: 'nofollow',
            classNames: 'domestic-nav_topic-bttn sui-bttn sui-bttn--small'
          },
          LOGGED_IN_AUX_MENU: {
            text: 'New topic',
            icon: 'edit',
            iconColor: 'white',
            url: '/topic/new',
            from: 'ask',
            handler: 'login_required',
            rel: 'nofollow',
            classNames: 'domestic-nav_topic-bttn sui-bttn sui-bttn--small',
            dropdown: AUXILIARY_DROPDOWN_TEMPLATE
          }
        }
      },

      initEvents: function() {
        this.$el.off('click', 'a[href]');
        this.$el.on('click', 'a[href]', function(e) {
          var $this = $(e.currentTarget);
          var $parentMenu = $this.parents('.domestic-nav_menu-content');
          var linkText = null;
          var galaOpts, menuName;

          linkText = $this.data('text') || $this.data('menu-name') || $this.text().trim();

          $(document).trigger('google-analytics:send:event', ['CommunityNav', 'click', linkText]);

          if($parentMenu.length) {
            // menu item clicked
            menuName = $this.data('text');
          } else {
            // top-level menu clicked
            $parentMenu = $this.closest('ul,div');
            menuName = $parentMenu.attr('class').trim();
          }

          galaOpts = {
            source_version: $UI.DOMESTIC_NAV_VERSION,
            source: 'Domestic',
            version: '1-0',
            name: 'com.spiceworks.events.menu.Click',
            data: {
              menuName: menuName,
              linkPosition: $parentMenu.find('a[href]:visible').index($this),
              linkText: linkText,
              linkURL: e.target.href
            }
          }

          $(document).trigger('gala-analytics:send:event', galaOpts);
        });

        if ( this.params.userInfo && !this.params.userInfo.isGuest ) {
          var $topicButtonContainer = this.$el.find('.domestic-nav_topic-bttn');
          $topicButtonContainer.hover(function() {
            $topicButtonContner.removeClass('is-open');
          });

          $topicButtonCon    event.preventDefault();
          });
        }
      },

      urlFromPath: function(path) {
        return path && this.communityUrl + path;
      },

      enableMenuFade: function(elements) {
        elements.off( 'hidden.domestic-nav-menu' );
        e').removeClass('u-faded-in');
        });

        elements.off( 'shown.domestic-nav-menu' );
        elements.on( 'shown.domestic-nav-menu', function() {
          var reflow = $('body').offset().left; // force reflow
          $(this).find('[data-content="domestic-nav-menu"]').addClass('u-faded-in');
        });
      },

      routeChanged: function() {
        this.render();
      },

      _urlFor: function(menuItem) {
        return ((typeof this.urlFor === 'function') && this.urlFor(menuItem)) || '#';
      },

      _menuListHtml: function(items) {
        return _.map( items || [], $.proxy( this._menuHtml, this ) )
      },

      _menuHtml: function(menu) {
        menu = _.clone(menu);

        if( menu.items ) {
          return this._menuDropdownHtml(menu)
        } else {
          return this._menuLinkHtml(menu)
        }
      },

      _menuDropdownHtml: function(menu) {
        menu.classNames = (menu.classNames || '');

        menu.classNames += (this._itemIsActive(menu) ? ' active' : '') + (menu.type === 'groupCategory' ? ' domestic-nav_menu--group' : '') + ' domestic-nav_menu--dropdown';

       var $menuDropdown = $( this.menuTemplate({ menuClasses: menu.classNames }) ).append(
         $( this.menuTriggerTemplate({ text: menu.text, url: this.urlFromPath(menu.url) }) ).append(
           this.menuIconTemplate({ icon: menu.icon, color: menu.iconColor }),
           this.menuTextTemplate({ text: menu.text, html_safe_content: menu.html })
         ),
         this.menuContentTemplate()
       );

       $.fn.append.apply( $menuDropdownmenuLinkHtml(item);
         }
       }, this ) ));

       if(menu.type === 'groupCategory') {
         $menuDropdown.find('ul')
           .prepend( this.groupsHeaderTemplate({ category: menu.text }) )
           .append( this.groupsLinkTemplate({ category: menu.text, url: this.urlFromPath(menu.url + '/groups') }) );

         $menuDropdown.on( 'shown.domestic-nav-menu', $.proxy( this._loadGroupActivity, this, menu, $menuDropdown ) );
       }

       return $menuDropdown;
      },

      _menuLinkHtml: function(menu) {
        menu.classNames = (menu.classNames || '');

        menu.url = menu.url || this._urlFor(menu);
        menu.classNames += (this._itemIsActive(menu) ? ' active' : '');

        var $menuLink = $( this.menuTemplate({ menuClasses: menu.classNames }) ).append(
          $( this.menuLinkTemplate({
            url: this.urlFromPath(menu.url),
            target: menu.target,
            rel: menu.rel,
            linkClass: menu.class,
            linkText: menu.text,
            type: menu.type || 'link',
            dropdown: menu.dropdown })
          ).append(
            this.menuIconTemplate({ icon: menu.icon, color: menu.iconColor }),
            this.menuTextTemplate({ html_safe_content: menu.html, text: menu.text }),
            this.timestampPlaceholderTemplate({})
          )
        ).append(menu.dropdown);

        $menuLink.find('a').on( 'click', $.proxy( this._menuClicked, this, menu ) );

        return $menuLink;
      },

      _loadGroupActivity: function(groupCategory, $menu, e) {
        if(groupCategory.rendered) {
          return;
        }

                 return group.id
            }),
            params = $.param({
              'with': ['last_post_created_at'],
              'filter': { 'id': groupIDs }
            });

        $.ajax({
          context: this,
          url: this.communityUrl + GROUPS_API_PATH + '?' + params,
          dataType: "json",
          xhrFields: { withCredentials: true },
          timeout: 3000,
          success: function (data) {
            groupCategory.rendered = true;
            this._renderGroupDetails(data, groupCategory.itemsps activity:', textStatus);
          }
        });
      },

      _renderGroupDetails: function(data, groups, $menu) {
        var timestampTemplate = this.timestampTemplate,
            groupData,
            postId,
            post,
            postDate,
            renderedGroupName;

        $menu.find('li').each(function(i, groupEl)rn item.id == groups[i].id;
          });

          if(!groupData) {
            return;
          }
          postDate = groupData.attributes.last_post_created_at || groupData.attributes.updated_at;
          if(!postDate) {
            return;
          }
          $(groupEl).find('.domestic-nav_timestamp').html(
            timestampTemplate({ timestamp: postDate, timestamp_ago: moment(postDate).fromNow(), timestamp_title: moment(postDate).utc().format('MMM D, YYYY [at] h:mm A') })
          );
        });
      },

      _menuClicked: function(menuItem, event) {
        var options = { from: menuItem.from, destination: menuItem.url },
            trackingOptions = { label: 'Domestic Nav ' + menuItem.text };

        if( menuItem.handler == 'login_required' && this.params.userInfo.isGuest) {
          // if the user is a guest and the action requires a login
          if (typeof JoinAndLogin === 'object') {
            // if we do have the ShowAndJoin code loaded, then
            // replace the referer url so user will get redirected there after successful login
            event.preventDefault();
            //display modal login dialog.
            if(typeof JoinAndLogin.trackAndShowForm === 'function') {
              JoinAndLogin.trackAndShowForm('login', trackingOptions, options)
            }
            else {
              JoinAndLogin.showLogin(options);
            }
            return;
          }
        } else if( menuItem.handler == 'join_required' && this.params.userInfo.isGuest) {
          if (typeof JoinAndLogin === 'object') {
            // if we do have the ShowAndJoin code loaded, then
            // replace the referer url so user will get redirected there after successful login
            event.preventDefault();
            //display modal join dialog.
            if(typeof JoinAndLogin.trackAndShowForm === 'function') {
              JoinAndLogin.trackAndShowForm('join', trackingOptions, options)
            }
            else {
              JoinAndLogin.showJoin(options);
            }
            return;
          }
        } else if( typeof menuItem.handler === 'function' ) {
          event.preventDefault();
          menuItem.handler(this);
        }
        if( typeof this.onRoute === 'function' ) {
          this.onRoute(menuItem, event);
        }
      },

      isActiveMenu: function(menuItem) {
        var path = window.location.pathname;
        var activeMenu = this.params.activeMenu;

        switch (menuItem.text) {
          case 'My Feed':
            return /my-feed/.test(path);
            break;
          case 'Answer Questions':
            return /unanswered/.test(path);
            break;
          case 'Subscribed':
            return /subscribed/.test(path);
            break;
          case 'Collections':
            return /collections/.test(path);
            break;
          case 'Meetups':
            return /spicecorps/.test(path);
            break;
          case 'More':
            return /alerts|moderation|moderator/.test(path);
            break;
          case 'Brand Tools':
            return /alerts|socialhub/.test(path);
            break;
          case 'Categories':
            return activeMenu === 'discover' || (activeMenu === 'resources' && !/spicecorps/.test(path)) || /launch\/see_all/.test(path);
            break;
          default:
            return null;
        }
      },

      _itemIsActive: function(menuItem) {
        var isActive = (typeof this.isActiveMenu === 'function') && this.isActiveMenu(menuItem);
        return ( isActive === null ) ? menuItem.active : isActive;
      }
    };
  }( window.jQuery );
}
;
/*1.0*/
;
if(typeof window.jQuery === 'function') {
  !function($
  ) {

  /**
    Creates a floating mobile-only button that's fixed to the lower right corner of the screen. Accepts a URL and an icon object with the properties name, color, and size.

    @class Community.$UI.DomesticMobileButton
    @constructor
    @param {Object} params Configuration parameters
    @param {String} params.url URL this button should link to
    @param {Object} params.icon Parameters for this button's icon
    @param {String} params.icon.name Icon name
    @param {String} params.icon.color Icon color - options are white, blue, or gray
    @param {Integer} params.icon.size Icon size in pixels - options are 16, 24, or 36
  */
    $UI.DomesticMobileButton = function(params) {
      this.iconTemplate = _.template('<i class="sui-icon <% if(typeof(name) !== "undefined") { %>sui-icon-<%- name %><% } %> <% if(typeof(color) !== "undefined") { %>sui-icon--<%- color %><% } %><% if(typeof(size) !== "undefined") { %> sui-icon--<%- size %><% } %>"></i>');

      this.init(params);
    };

    $UI.DomesticMobileButton.prototype = {
      /**
        @method init
      */
      init: function(params) {
        if (params && params.communityUrl) {
          this.communityUrl = params.communityUrl;
        } else {
          this.communityUrl = 'https://community.spiceworks.com';
        }

        this.DEFAULTS = {
          url: this.urlFromPath('/topic/new'),
          icon: {
            name: 'edit',
            color: 'white',
            size: 24
          }
        };

        this.params = _.defaults(params || {}, this.DEFAULTS);
        this.params.icon = _.defaults(params.icon || {}, this.DEFAULTS.icon);
      },

      render: function(params) {
        params = _.defaults({}, params || {}, this.params);
        params.icon = _.defaults(params.icon || {}, this.params.icon);
        this.params = params;

        this.$element = $('.domestic-nav_bttn--mobile');
        this.$element.attr('href', this.params.url)
                .html( $( this.iconTemplate(this.params.icon) ) );

        this.$element.on('click', $.proxy(function(e) {
          $(document).trigger('google-analytics:send:event', ['CommunityNav', 'click', 'domestic-nav_bttn--mobile']);

          $(document).trigger('gala-analytics:send:event', {
            source_version: $UI.DOMESTIC_NAV_VERSION,
            source: 'Domestic',
            version: '1-0',
            name: 'com.spiceworks.events.menu.Click',
            data: {
              menuName: 'domestic-nav_bttn--mobile',
              linkPosition: 0,
              linkText: null,
              linkURL: e.target.href
            }
          });
        eturn this.communityUrl + path;
      }
    };
  }( window.jQuery );
}
;
/*1.0*/
// Rails composition file





;
/*1.0*/
if(typeof window.jQuery === 'function') {
!function($) {

  "use strict"

  var FOOTER_SELECTOR = '[data-footer="site-footer"]';
  var FOOTER_TEMPLATE = '<footer class="site-footer" data-footer="site-footer">' +
                        '</header>';
  var FOOTER_CONFIG_PATH = '/api/public/v1/navigation/footer';

  /**
   The Footer (handles configuration & rendering of the footer).  Please use the `create` method instead of using `new`.
   You can pass configuration params to `create`.

   Here's the list of allowed parameters:
   'idServiceURL',
   'communityURL',
   'configFilter',

   For example:

   ```
   $UI.Footer.create({
     idServiceURL: 'http://localhost:3010',
     communityURL: 'http://localhost:8080',
     configFilter: function(config) {
       //config: is this is the configuration hash returned from the footer service
       if(config.user_info.guest) {
          config.user_info.login_join = false;
          config.search = false;
        }
       return config;
     }
   });
   ```

   @class SuiNavigation.$UI.Footer
   @constructor
   @param {Object} params Configuration parameters
   */
  $UI.Footer = function(params) {
    params = params || {};
    this.$element = $(FOOTER_SELECTOR);
    this.params = _.pick(params, [
      'navigationServiceURL',
      'idServiceURL',
      'communityURL',
      'configFilter',
    ]);

    this.footer = new $UI._GlobalFooter( this._globalParams() );
  };

  /**
   Create an instance of the Footer.

   @method create
   @static
   @param {Object} [params] Configuration parameters (defined below)

   @param {String} [ params.navigationServiceURL = '']
   @param {String} [ params.communityURL = '']
   @param {Function} [ params.configFilter = undefined] A function to optionally change the footer configuration returned by th(params) {
   this.paramr.fetchConfig();
    return footer;
  };

  $UI.Footer.prototype = {
    fetchConfig: function() {
      var configFilter = this.params.configFilter;
      var navigationServiceURL = this.params.navigationServiceURL;

      if(typeof(navigationServiceURL) !== 'undefined' && navigationServiceURL.length > 0) {

        var url = navigationServiceURL + FOOTER_CONFIG_PATH + '?community_url=' + encodeURIComponent(this.params.communityURL);

        $.ajax({
          context: this,
          url: url,
          type: "GET",
          dataType: "json",
          xhrFields: {withCredentials: true},
          timeout: 3000,
          success: function (data, textStatus) {
            this._render(configFilter ? configFilter(data,textStatus) : data);
          },
          error: function (jqXHR, textStatus) {
            this._render(configFilter ? configFilter({},textStatus) : {});
          }
        });
      }
      else {
        console.error('Footer: navigationServiceURL not set. The Footer requires this parameter to retrieve its configuration. Here are the params used to configure the Footer: ', this.params)
      }
    },

    _render: function(p) {
      var $window = $(window);

      this.params = _.defaults({}, p || {}, this.params );

      this.$element = $(FOOTER_SELECTOR);

      // create footer element if not already present in the DOM
      if( this.$element.length === 0 ) {
        this.$element = $(FOOTER_TEMPLATE);
        $('body').append(FOOTER_TEMPLATE);
      }

      this.initContent(this.params.content);

      this.$element.find('[data-toggle="nav-dropdown"]').navDropdown();
      this.$element.find('.site-footer--auxiliary .site-footer_link').on('click.footer.data-api', $.proxy($UI._BaseNavbar.analyticsForClick, this));

      this.handleWindowResize();

      $window.on('resize.footer', $.proxy(this.handleWindowResize, this));

      $window.on('scroll.footer', $.proxy(function() {
        var y = window.scrollY;
        var footerPosition = this.$element.offset().top;
        var windowHeight = $(window).height();

        if((y + windowHeight) > footerPosition) {
          $UI._BaseNavbar.triggerGoogleAnalyticsEvent({
            category: 'Footer',
            action: 'show'
          });

          $UI._BaseNavbar.triggerGalaEvent({
            source: 'Footer',
            name: 'com.spiceworks.events.menu.View',
            data: {
              menuName: 'Footer'
            }
          });
          $(window).off('scroll.footer')
        }
      },this));
    },

    handleWindowResize: function() {
      this.$element.find('[data-toggle="nav-dropdown"]').attr('disabled', !(window.innerWidth < 960));
    },

    initContent: function(content) {
      this.$element.empty();

      if(content) {
        // add CSS links
        if (content.css_assets && content.css_assets.length)t + "'>").appendTo("head");
          });
        }
        // add CSS styles
        if (content.css && content.css.length) {
          $('<style type="text/css">' + content.css + '</style>').appendTo("head");
        }
        // add HTML
        if (content.html && content.html.length) {
          this.$element.html(content.html);
        }
      }
    }
  };

}( window.jQuery );
}
;
/*1.0*/
// Rails composition file



;
/*1.0*/
/* ==========================================================
 * bootstrap-affix.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



;if(
      $spy.affix(data)
    })
  })


}(window.jQuery);
}
;
/*1.0*/
/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



 ;if(ort.transition = transitionEnd()
  })
}(window.jQuery);
}
;
/*1.0*/
/* =============================================================
 * bootstrap-collapse.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


;if(typeof window.jQuery === 'function') {
!function( $ ){

  "use strict"; // jshint ;_;

  var Collapse = function ( element, options ) {
  	this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options["parent"]) {
      this.$parent = $(this.options["parent"])
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

   urn hasWidth ? 'width' : 'height'
    },

    show: function () {
      var dimension = this.dimension(),
        scroll = $.camelCase(['scroll', dimension].join('-')),
        actives = this.$parent && this.$parent.find('.in'),
        hasData

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', 'show', 'shown')
      this.$element[dimension](this.$element[0][scroll])

    },

    hide: function () {
      var dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', 'hide', 'hidden')
      this.$element[dimension](0)
    },

    reset: function ( size ) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element.addClass('collapse')
    },

    transition: function ( method, startEvent, completeEvent ) {
      var that = this,
        complete = function () {
          if (startEvent == 'show') {that.reset();}
          that.$element.trigger(completeEvent)
        }

      this.$element.trigger(startEvent)[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) asClass('in') ? 'hide' : 'show']()
  	}

  }

  /* COLLAPSIBLE PLUGIN DEFINITION
  * ============================== */

  $.fn.collapse = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse

  $.fn.reveal = $.fn.collapse; // alias to reveal

 /* COLLAPSIBLE DA $(target).collapse(option)
    });
  })

}( window.jQuery )
}
;
/*1.0*/
!function( $ ){
  function getScrollbarPadding() {
    var totalWidth = window.innerWidth,
        documentWidth = document.body.clientWidth,
        scrollbarPresent = documentWidth < totalWidth,
        scrollDiv,
        scrollbarWidth,
        actualPadding,
        calculatedPadding;

    if(scrollbarPresent) {
      scrollDiv = document.createElement('div');
      scrollDiv.className = 'sui-modal_scrollbar-measure';
      document.body.appendChild(scrollDiv);
      scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);

      actualPadding = document.body.style.paddingRight; // returns actual value ('' if not set)
      calculatedPadding = $('body').css('padding-right'); // returns calculated value (0 if not set)

      return calculatedPadding + scrollbarWidth;
    }
  }

  window.$UI.getScrollbarPadding = getScrollbarPadding;
}( window.jQuery );
/*1.0*/
if(typeof window.jQuery === 'function') {
!function( $ ){

  "use strict"

 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss =n('click', dismiss, this.close)
      }

  Alert.prototype = {

    constructor: Alert

  , close: function ( e ) {
      var $this = $(this)
        , selector = $this.attr('data-target')
        , $parent

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      $parent = $(selector)
      $parent.trigger('close')

      e && e.preventDefault()

      $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())
      $parent.trigger('closed')
      }

      $.support.transition && $parent.hasClass('fade') ?
        $parent.on($.support.transition.end, removeElement) :
        removeElement()
    }

  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  $.fn.alert = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALi', dismiss, Alert.prototype.close)
  })

}( window.jQuery )
}
;
/*1.0*/
/* ============================================================
 * bootstrap-button.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function( $ ){

  "use strict"

 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  /**
    Create stateful buttons.

    @class SuiCoreComponents.Button
    @constructor
    @param {Object} element Button element
    @param {Object} [options] Optional configurations
    @param {String} [options.loadingText = 'loading...'] Text to display when button ({}, $.fn.button.defaults, options)
  }

  Button.prototype = {

      constructor: Button

      /**
        Set button state - swaps text to any text state defined in data or options object.

        @method setState
        @param {String} state State to(d).removeAttr(d)
        }, 0)
      }

      /**
        Toggles push state of button.

      .$element.toggleClass('active')
      }

  }


 /* BUTTON PLUGIN DEFINITION
  * =====ption) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON DATA-API
  * =============== */

  $(function () {
    $('body').on('click.but        $btn.button('toggle')
        })
  })

}( window.jQuery )
;
/*1.0*/
!function( $ ){

  "use strict"

 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var dropSelector = '[data-togremoveClass('open');
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown,

    toggle: function ( e ) {
      var $this = $(this),
          selector = $this.attr('data-target'),
          $parent,
          isActive,
          contentRect,
          contentPosition,
          contentLeftPosition;

      if (!selector) {
        selector = $this.attr('href');
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
      }

      $parent = $(selector);
      $parent.length || ($parent = $this.parent());

      isActive = $parent.hasClass('is-open');

      Dropdown.prototype.clearMenus();

      if (!isActive){
        this.$element = $parent;
        this.$contentElement = $parent.find('.sui-dropdown_content');

        var relatedTarget = { relatedTarget: this }
        $parent.trigger( 'sui_dropdown:show', relatedTarget );

        $this.toggleClass('active');

        $parent.toggleClass('is-open').toggleClass('is-closed');

        this.$contentElement.addClass('sui-dropdown_content--bottom');

        if( $parent.find('[data-toggle="sui_dropdown"]').hasClass('sui-bttn--small') ) {
          this.$contentElement.css({ top: '42px' });
        }
        else if( $parent.find('[data-toggle="sui_dropdown"]').hasClass('sui-bttn') ) {
          this.$contentElement.css({ top: '52px' });
        }
        else if( $parent.parents('.section-navbar').length ) {
          this.$contentElement.css({ top: '38px' });
        }
        else {
          this.$contentElement.css({ top: '26px' });
        }

        this.$contentElement.toggleClass('is-hidden');
        this.$contentElement.toggleClass('is-shown');

        contentRect = this.$contentElement[0].getBoundingClientRect(),
        contentPosition = this.$contentElement.offset(),
        contentLeftPosition = contentPosition.left + contentRect.width;

        if(contentLeftPosition >= window.innerWidth) {
          this.$contentElement.addClass('sui-dropdown_content--align-right');
        } else if(contentPosition.left < 0) {
          this.$contentElement.addClass('sui-dropdown_content--align-left');
        }

        $parent.trigger('sui_dropdown:shown', relatedTarget)
      }

      return false;
    },

    clearMenus: function() {
      $(dropSelector).each( function() {
        var relatedTarget = { relatedTarget: this }
        var $contentElement = $(this).parent().find('.sui-dropdown_content');

        $(this).removeClass('active');
        $(this).parent().removeClass('is-open').addClass('is-closed');
        $contentElement.removeClass('is-shown').addClass('is-hidden');
        $(this).trigger('sui_dropdown:hidden', relatedTarget)
      });
    }

  }


  /* DROPDOWN PLUGIN DEFINITION
   * =============') data[option].call($this);
    })
  }

  $.fn.sui_dropdown.Constructor = Dropdown;


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html').on('click.sui_dropdown.data-api', Dropdown.prototype.clearMenus);
    $('body').on('click.sui_dropdown.data-api', dropSelector, Dropdown.prototype.toggle);
  })

}( window.jQuery );
/*1.0*/
/* ============================================================
* sui-loadmask.js v1.4.0
* ============================================================
* Copyright © 2006-15 Spiceworks, Inc.  All Rights Reserved.  http://www.spiceworks.com
* ============================================================ */


!function( $ ) {

  "use strict"

  /* SuiLoadMask PUBLIC CLASS DEFINITION
  * =============================== */

  /**
    Create a loadmask.

    @class SuiCoreComponents.SuiLoadMask
    @constructor
    @param {Object} element Element to apply loadmask to
    @param {Object} [options] Optional configurations
    @param {String | Integer} [options.spinnerSize = 100px] Size of loading spinner
    @param {String} [options.spinnerClass] Class to add to spinner element
  */
  var SuiLoadMask = function ( element, options ) {
    this.init('suiLoadMask', element, options)
  };

  SuiLoadMask.prototype = {

    constructor: SuiLoadMask,

    init: function ( type, element, options ) {
      this.type = type;
      this.$element = $(element);
      this.options = this.getOptions(options);

      this.maskDiv = $('<div class="sui-loadmask">');
      this.spinnerDiv = $('<div class="sui-spinner">');

      for (var i=0; i < 8; i++) {
        this.spinnerDiv.append($('<div class="sui-spinner_inner">'));
      }

      if(this.options.spinnerSize) {
        this.spinnerDiv.width(this.options.spinnerSize);
        this.spinnerDiv.height(this.options.spinnerSize);
      }

      if(this.options.spinnerClass) {
        this.spinnerDiv.addClass(this.options.spinnerClass);
      }
    },

    /**
      Get a loadmask's options, and optionally supply additonal configurations.
      Options set via data attributes will override the passed options.

      @method getOptions
      @param {Object} [options] Additional options to set on loadmask
      @return {Object} Returns loadmask's options set
    */
    getOptions: function ( options ) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())
      return options;
    },

    /**
      Make loadmask visible.

      @method show
    */
    show: function () {
      this.maskElement();
    },

    /**
      Remove loadmask from vin () {
      this.unmaskElement();
    },

    maskElement: function(){
      var elemHeight, elemWidth, spinnerHeight, spinnerWidth, minDimension;

      if(this.isMasked()) {
        this.unmaskElement();
      }

      if(this.$element.css("position") == "static") {
        this.$element.addClass("sui-loadmask--masked-relative");
      }
      this.$element.addClass("sui-loadmask--masked");

      this.$element.append(this.maskDiv);
      this.$element.append(this.spinnerDiv);

      elemHeight = this.$element.outerHeight();
      elemWidth = this.$element.outerWidth();
      spinnerHeight = this.spinnerDiv.height();
      spinnerWidth = this.spinnerDiv.width();

      this.maskDiv.width(elemWidth);
      this.maskDiv.height(elemHeight);

      //if parent element is rectangular & spinner dimensions are set to percentage, spinner will be oblong instead of circular
      if(spinnerHeight != spinnerWidth){
        minDimension = Math.min(spinnerHeight, spinnerWidth);

        this.spinnerDiv.height(minDimension);
        this.spinnerDiv.width(minDimension);
        spinnerHeight = minDimension;
        spinnerWidth = minDimension;
      }

      //calculate center position
      this.spinnerDiv.css("top", Math.round(elemHeight / 2 - spinnerHeight / 2)+"px");
      this.spinnerDiv.css("left", Math.round(elemWidth / 2 - spinnerWidth / 2)+"px");

      this.maskDiv.css('z-index', this.options.mask_z_index);
      this.spinnerDiv.css('z-index', this.options.img_z_index);
      this.maskDiv.show();
      this.spinnerDiv.show();
    },

    unmaskElement: function(){
      this.maskDiv.detach();
      this.spinnerDiv.detach();
      this.$element.removeClass("sui-loadmask--masked");
      this.$element.removeClass("sui-loadmask--masked-relative");
    },

    /**
      Check if element is currently masked.

      @method isMasked
      @returns {Boolean} Returns true if element .hasClass("sui-loadmask--masked");
    }
  };


  /* SuiLoadMask PLUGIN DEFINITION
  * ============ 'string') {data[option]()}
    })
  };

  $.fn.suiLoadMask.Constructor = SuiLoadMask;

  $.fn.suiLoadMask.defaults = {
    mask_z_index: 1,
    img_z_index:2
  };

}( window.jQuery )
;
/*1.0*/
/* =========================================================
 * bootstrap-modal.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */



!function( $ ){

  "use strict"

  /* MODAL CLASS DEFINITION
   * ====================== */
  /**
   Create a modal.

   @class SuiCoreComponents.Modal
   @constructor
   @param {Object} content Modal element
   @param {Object} [options] Optional configurations
   @param {Boolean} [options.closeable = true] When true, modal can be closed by pressing the escape or clicking outside
   @param {Boolean} [options.show = true] When true, show modal immediately after activation
   @param {Boolean} [options.destroyOnHide = false] When true, modal is automatically destroyed when hidden
   */
  var Modal = function ( content, options ) {
    this.options = options
    this.$element = $(content);
    this.$element.find('[data-dismiss="modal"]').on( 'click', $.proxy(this.hide, this) );

    this.$element.on( 'click', $.proxy(hideOnOverlayClick, this) );
    $(document).on('keyup.dismiss.sui_modal', $.proxy(hideOnEscapeKey, this) );

    this.options.closeable = this.options.closeable || this.$element.data('closeable');
    this.options.size = this.options.size || this.$element.data('size');
  }

  Modal.prototype = {

    constructor: Modal,

    /**
     Toggle a modal's visibilty.

     @method toggle
     @return Returns modal's s!this.isShown ? 'show' : 'hide']()
    },

    /**
     Make a modal visible.

     @method show
     */
    show: function () {
      if (this.isShown) return

      this.isShown = true

      /**
       Fires when show() is called on a modal.

       @event show
       */
      this.$element.trigger('sui_modal:show');

      $('body').addClass('sui-u-no-scroll');

      this.adjustForScrollbar();

      this.$element.show();

      setTimeout( _.bind( function() { // Allow reflow
        this.position();
        $(window).off('resize.sui_modal-reposition');
        $(window).on('resize.sui_modal-reposition', _.debounce( $.proxy( this.position, this), 100 ) );

        this.$element.removeClass('is-hidden');
        this.$element.addClass('is-shown u-faded-in');

        /**
         Fires after a modal has been made visible to the user (waits for CSS transitions to complete).

         @event shown
         */
        this.$element.one($.support.transition.end, $.proxy( this.$element.trigger, this.$element, 'sui_modal:shown' ) )
                     .emulateTransitionEnd(200);
      },       return this.$contentElement;
    },

    /**
     Position a modal in the middle of the window.
     Called automatically when a modal is shown, but useful for recentering a modal if necessary.

     @method position
     */
    position: function(){
      var $contentElement = this.contentElement(),
          winHeight = window.innerHeight,
          outerHeight = $contentElement.outerHeight();

      $contentElement.css("left", (window.innerWidth - $contentElement.outerWidth())/2 + "px");
      // keep the title of long modals visible

      // align in the center of the screen
      if( this.options.size === 'mega' ) {
        $contentElement.css("top", '');
      }
      else {
        $contentElement.css("top", (window.innerHeight - $contentElement.outerHeight()) / 2);
      }
    },

    adjustForScrollbar: function() {
      var scrollbarPadding = $UI.getScrollbarPadding();

      if(scrollbarPadding !== 'undefined') {
        this.cachedBodyPaddingRight = document.body.style.paddingRight;
        $('body').css('padding-right', scrollbarPadding + 'px');
      }
    },

    resetBodyPadding: function() {
      if (this.cachedBodyPaddingRight !== 'undefined') {
        $('body').css('padding-right', this.cachedBodyPaddingRight);
        this.cachedBodyPaddingRight = null;
      }
    },

    /**
     Remove a modal from view.

     @method hide
     @param {Object} e Event
     */
    hide: function ( e ) {
      e && e.preventDefault()

      if (!this.isShown) return

      var that = this
      this.isShown = false

      /**
       Fires when hide() is called on a modal, before the CSS transition if any.

       @event hide
       */
       this.$element.trigger('sui_modal:hide');

       this.$element.addClass('is-hidden');
       this.$element.removeClass('is-shown u-faded-in');
       $('body').removeClass('sui-u-no-scroll');

       this.resetBodyPadding();

       this.$element.one($.support.transition.end, _.bind( function() {
         this.$element.hide();

         /**
          Fires when modal is finished hiding, after the CSS transition.

          @event hidden
          */
         this.$element.trigger('sui_modal:hidden');

         if( this.options.destroyOnHide ) {
           this.destroy();
         }
       }, this )).emulateTransitionEnd(200);
    },

    /**
     Destroy a modal.

 () {
      this.$element.remove();
    }

  }


  /* MODAL PRIVATE METHODS
   * ===================== */

   function hideOnOverlayClick(event) {
     if( this.options.closeable && $(event.target).attr('data-modal-el') === 'overlay' ) {
       this.hide(event);
     }
   }

   function hideOnEscapeKey(event) {
     if( this.options.closeable && event.which == 27 ) {
        this.hide(event);
      }
   }

  /* MODAL PLUGIN DEFINITION
   * ======if (options.show) data.show()
    })
  }

  $.fn.sui_modal.defaults = {
    closeable: true,
    show: true,
    destroyOnHide: false
  }

  $.fn.sui_modal.Constructor = Modal

  /* MO    $target.sui_modal(option)
    })
  })

}( window.jQuery );
/*1.0*/
/* ========================================================
 * bootstrap-tab.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function( $ ){
  "use strict"; // jshint ;_;

 /* TAB CLASS DEFINITION
  * ==================== */
  /**
    Add quick, dynamic tab and pill functionality for transitioning through local content.

    You can activate a tab or pill navigation without writing any JavaScript by specifying data-toggle="tab" or data-toggle="pill" on an element. Expected markup for the tab control is an unordered list, with each list item containing a link with data-toggle specified and either href or data-target targeting a container node in the DOM. Container node should have the class 'tab-content' and each individual tab inside the container should have the class 'tab-pane' and a unique id.

    @class SuiCoreComponents.Tab
    @constructor
    @param {Object} element Tab element
    @example
        <ul class="nav nav-tabs" id="myTab">
          <li class="active"><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#messages">Messages</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active" id="home">...</div>
          <div class="tab-pane" id="profile">...</div>
          <div class="tab-pane" id="messages">...</div>
          <div class="tab-pane" id="settings">.t ) {
    this.element = $(element);
  }

  Tab.prototype = {
    constructor: Tab,

    /**
      Make tab visible. Fires 'show' event on tab before it is shown and 'shown' event after it is shown.

      @method show
    */
    show: function () {
      var $this = this.element,
          $ul = $this.closest('ul:not(.dropdown-menu)'),
          selector = $this.attr('data-target'),
          previous,
          $target;

      if (!selector) {
        selector = $this.attr('href');
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return;

      previous = $ul.find('.active a').last()[0];

      /**
        Fires on tab show, just before the new tab is shown.

        @event show
        @param {Object} relatedTarget Previous active tab, if available
      */
      $this.trigger({
        type: 'show',
        relatedTarget: previous
      });

      $target = $(selector);

      this.activate($this.parent('li'), $ul);

      /**
        Fires on tab show, after the tab has been shown.

        @event shown
        @param {Object} relatedTarget Previous active tab, if available
      */
      atedTarget: previous
        });
      });
    },

    /**
      Make passed tab the active tab.

      @method activate
      @async
      @param {Object} element Tab element
      @param {Object} container Parent container of tab element
      @param {Function} callback Callback function to be completed aft

      $active.removeClass('in');
    }
  }


 /* TAB PLUGIN DEFINITION
   == 'string') data[option]();
    })
  }

  $.fn.tab.Constructor = Tab;


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[daault();
      $(this).tab('show');
    })

    $('a[data-content-source="pjax"]').on( 'shown', function() {
      var url = $(this).attr('href');
      var container = $( $(this).attr('data-target') );

      $.pjax({url: url, container: container, scrollTo: false, pushstateMandatory: false });
    })

  })

}( window.jQuery )
;
/*1.0*/
!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var tipselector = 'a[rel~=sui_tooltip], button[rel~=sui_tooltip]',

  /**
    Create a tooltip.

    @class SuiCoreComponents.sui_tooltip
    @constructor
    @param {Object} element Tooltip element
    @param {Object} [options] Optional configurations
    @param {Boolean} [options.animation = false] When true, applies a CSS fade transition to the tooltip
    @param {Boolean} [options.html = false] Insert html into the tooltip. If false, jQuery's text method will be used to insert content into the dom. Use text if you're worried about XSS attacks.
    @param {String} [options.placement = 'top'] How to position the tooltip relative to it's element- top|bottom|left|right
    @param {String} [options.selector = false] If a selector is provided, tooltip objects will be delegated to specified targets
    @param {String|Function} [options.title = ''] Default title value if title tag isn't present
    @param {String} [options.trigger = 'hover'] How tooltip is triggered - hover|focus|manual
    @param {Number|Object} [options.delay = 0] Delay showing and hiding the tooltip in milliseconds. If a number is supplied, delay is applied to both hide/show. Object structure is delay: {show: 500, hide: 100}
    @param {String | false} [options.container = 'body'] Appends tooltip to a specific element
    @param {String | false} [options.class = false] Custom class to add to tooltip when shown
    @param {String} [options.template] Template to use when creating tooltip. Defaults to '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  */
  Tooltip = function (element, options) {
    this.init('sui_tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip,

    init: function (type, element, options) {
      var eventIn,
          eventOut,
          triggers,
          trigger,
          i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          $(document).on('click', _.bind(function(event) {

            if( this.$element[0] === event.target ) {
              event.preventDefault();
              this.toggle();
            }
            else {
              var parents = $(event.target).parents('[data-component="sui-popover"]');
              var noParentsMe = _.every( parents, _.bind(function(parent) { parent !== this.$tip[0]; }, this) );

              if( noParentsMe ) {
                this.hide();
              }
            }
          }, this ));
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    },

    /**
      Get a tooltip's options and optionally supply additional configurations.
      Passed options will override options set via data attributes.

      @method getOptions
      @param {Object} [options] Additional options to set on tooltip
      @return {Object} Returns tool   }
      }

      return options
    },

    /**
      Handles transitions and delay before showing tooltip.
      Fires when a tooltip is hovered over or gains focus.

      @method enter
      @param {Object} e Triggering event
    */
    enter: function (e) {
      var defaults = $.fn[this.type].defaults,
          options = {},
          self

    ] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in' && $.contains(document, self.$element[0])) self.show()
      }, self.options.delay.show)
    },

    /**
      Handles transitions and delay before hiding tooltip.
      Fires when mouse leaves tooltip area or tooltip loses focus.

      @method leave
      @param {Obje
      }, self.options.delay.hide)
    },

    /**
      Make a tooltip visible.

      @method show
    */
    show: function () {
      var $tip,
          pos,
          actualWidth,
          actualHeight,
          placement,
          tp;

      if (this.hasContent() && this.enabled) {
        /**
          Fires when show() is called on a tooltip

          @event show
        */
        this.$element.trigger('sui_tooltip:show')

        $tip = this.tip()
        this.setContent()

        if ( this.options['class'] ) {
          $tip.addClass(this.options['class']);
        }

        if ( this.options.id ) {
          $tip.attr('id', this.options.id );
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0 })
          .addClass('is-shown')
          .removeClass('is-hidden');

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        var arrowDiff = 5; // Height of arrow for top/bottom, Width for left/right

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height + arrowDiff, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight - arrowDiff, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - arrowDiff}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + arrowDiff}
            break
        }

        this.applyPlacement(tp, placement, 'sui-tooltit.trigger('sui_tooltip:shown')
        }, this ), 0 );
      }
    },

    /**
      Position a tooltip with offset and placement.
      Called automatically when a tooltip is shown.

      @method applyPlacement
      @param {Object} offset Coordinates for tooltip in relation to document. Uses format {top: 5, left: 10}
      @param {String} placement How to position tooltip in relation to it's element - top|bottom|left|right
    */
    applyPlacement: function(offset, placement, cssModule){
      var $tip = this.tip(),
          width = $tip[0].offsetWidth,
          height = $tip[0].offsetHeight,
          actualWidth,
          actualHeight,
          delta,
          replace

      $tip
        .offset(offset)
        .addClass('in');

      $tip.addClass( cssModule ? (cssModule + '--' + placement) : placement );

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          offset.left = 0
          $tip.offset(offset)
        }
      }

      if (replace) $tip.offset(offset)
    },

    /**
      Set the content of a tooltip to it's title.

      @method setContent
    */
    setContent: function () {
      var $tip = this.tip(),
          title = this.getTitle()

      $tip[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    },

    /**
      Hide a tooltip.

      @method hide
      @return {Object} Returns this
    */
    hide: function () {
      var $tip = this.tip();

      /**
        Triggers when hide() is called on a tooltip.

        @event tooltip:hide
      */
      this.$element.trigger('sui_tooltip:hide')

      $tip.removeClass('u-faded-in');

      $tip.one($.support.transition.end, _.bind( function() {
        $tip.addClass('is-hidden');
        $tip.removeClass('is-shown');

        /**
          Fires when a tooltip has been removed from view.

          @event tooltip:hidden
        */
        this.$element.trigger('sui_tooltip:hidden')
      }, this )).emulateTransitionEnd(200);

) || '').attr('title', '')
      }
    },

    /**
    Check if a tooltip has content.

    @method hasContent
    @return Returns th () {
      return this.getTitle()
    },

    /**
      Get the coordinates and dimensions of tooltip's element.
      Used to help calculate the position of the tooltip.

      @method getPosition
      @return {Object} Returns element's width, het
      }, this.$element.offset())
    },

    /**
      Get the title of a tooltip.

      @method getTitle
      @return Returns ]) :  o.title)

      return title
    },

    /**
      Get the tooltip element.

      @method tip
      @return Returns the existing tooltip element, or if one does not exist, creates one frs.$tip || $(this.options.template)
    },

    /**
      Check if tooltip has a parentNode, and if not, hide the tooltip.

          this.options = null
      }
    },

    /**
      Enable a tooltip.

      @method enable
    */
    enable: function () {
      this.enabled = true
    },

    /**
      Disable a tooltip.

 on () {
      this.enabled = false
    },

    /**
      Toggle a tooltip's enabled state.

      @method      this.enabled = !this.enabled
    },

    /**
      Toggle the visibilty of a tooltip.

      @method toggle
      @param {Object} [e] Optihown') ? self.hide() : self.show()
    },

    /**
      Destroy a tooltip.

      @method destroy
    */
    destroy: function () {
      this.hide();
      this.$element.off('.' + this.type).removeData(this.type);
    },

    /**
      Remove a tooltip from the DOM.

      @method clear
    */
    clear: function(){
      var that = this, $tip = this.tip();
      $tip.remove();
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = == 'string') data[option]();
    })
  }

  $.fn.sui_tooltip.Constructor = Tooltip;

  $.fn.sui_tooltip.defaults = {
    selector: false,
    placement: 'top',
    template: '<div role="tooltip" aria-live="polite" aria-hidden="true" class="is-hidden sui-tooltip_content sui-u-fadeable"></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: 'body',
    'class': false,
    id: false
  };

  // add global metho $(tipselector).sui_tooltip('hide');
  }
  window.$UI.clearTooltips = clearTooltips;

}a[rel~=sui_tooltip]').sui_tooltip({});
});
/*1.0*/
!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var popoverselector = "a[rel=sui_popover], bunit('sui_popover', element, options)
  }

  /* NOTE: POPOVER EXTENDS SUI_TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.sui_tooltip.Constructor.prototype, {

    constructor: Popover,

    setContent: function () {
      var $tip = this.tip(),
          title,
          content,
          footer;

      if(!this.options.target) {
        title = this.getTitle(),
        content = this.getContent(),
        footer = this.getFooter();

        $tip.find('[data-sui-popover-el="title"]')[this.options.html ? 'html' : 'text'](title)
        $tip.find('[data-sui-popover-el="body"]')[this.options.html ? 'html' : 'text'](content)
        $tip.find('[data-sui-popover-el="footer"]')[this.options.html ? 'html' : 'text'](footer)
      }

      // TODO: Support animation - this thing used to remove 'fade' and even position signifiers
      $tip.removeCl.getContent() || this.getFooter();
    },

    getContent: function () {
      var content, $content,
          $e = this.$element,
          o = this.options

      $content = this.$element.find('.popover');
      if($content.length) {
        return $content;
      }

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    },

    /**
      Remove a popover from view.

      @method hide
      @param {Object} e Hide event
    */
    hide: function ( e ) {
      var that = this,
          $tip = this.tip();

      e && e.preventDefault();

      if (!this.isShown) return;

      this.isShown = false;

      escape.call(this);

      /**
        Fires when hide() is called on a popover.

        @event hide
      */
      this.$element.trigger('sui_popover:hide');

      var transitionLength = $tip.hasClass('sui-u-fadeable') ? 200 : 0;

      $tip.removeClass('u-faded-in');

      $tip.one($.support.transition.end, _.bind( function() {
        $tip.addClass('is-hidden');
        $tip.removeClass('is-shown');

        /**
          Fires when a tooltip has been removed from view.

          @event tooltip:hidden
        */
        this.$element.trigger('sui_popover:hidden');
        $tip.detach();
      }, this )).emulateTransitionEnd(tdata-footer')

      return footer
    },

    tip: function () {
      if (!this.$tip) {
        this.$tip = this.options.target ? $(this.options.target) : $(this.options.template);
      }
      return this.$tip
    },

    /**
      Make a tooltip visible.

      @method show
    */
    show: function () {
      var $tip,
          pos,
          actualWidth,
          actualHeight,
          placement,
          tp;

      if (this.options.target || (this.hasContent() && this.enabled)) {
        /**
          Fires when show() is called on a tooltip

          @event show
        */
        this.$element.trigger('sui_popover:show');

        $tip = this.tip()

        this.setContent();

        if ( this.options['class'] ) {
          $tip.addClass(this.options['class']);
        }

        if ( this.options.id ) {
          $tip.attr('id', this.options.id );
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement;

        $tip
          .detach()
          .css({ top: 0, left: 0 })
          .addClass('is-shown')
          .removeClass('is-hidden');

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        this.attached = true;
        pos = this.getPosition()
        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        var arrowDiff = 11; // Height of arrow for top/bottom, Width for left/right

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height + arrowDiff, left: pos.left + pos.width / 2 - actualWidth / 2};
            break
          case 'top':
            tp = {top: pos.top - actualHeight - arrowDiff, left: pos.left + pos.width / 2 - actualWidth / 2};
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - arrowDiff};
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + arrowDiff};
            break
        }

        this.applyPlacement(tp, placement, 'sui-popover_content');

        this.isShown = true;
        setTimeout( _.bind( function() { // Allow reflow
          $tip.addClass('u-faded-in');

          escape.call(this);

          /**
            Fires when a tooltip has been made visible to the user

            @event tooltip:shown
          */
          this.$element.trigger('sui_popover:shown')
        }, this ), 0 );
      }
    }
  });

  function escape() {
    var that = this;
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.sui_popover', function ( e ) {
        e.which == 27 && that.hide();
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.sui_popover');
    }
  }

 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.sui_popover = function (option) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('sui_popover'),
          options = $.extend( {},
                              $.fn.sui_popover.defaults,
                              $this.data(),
                              (typeof option == 'object' && option) );

      if (!data) {
        data = new Popover(this, options);
        $this.data('sui_popover', data);
      }

      if(typeof option == 'string') {
        data[option]();
      } else if(options.show && options.target) {
        data.show();
      }
    });
  }

  $.fn.sui_popover.Constructor = Popover

  $.fn.sui_popover.defaults = $.extend({} , $.fn.sui_tooltip.defaults, {
    placement: 'right',
    trigger: 'click',
    content: '',
    footer: '',
    html: true,
    template: '<div role="tooltip" class="sui-popover_content--align-center sui-popover_content sui-u-fadeable">' +
                '<div class="sui-popover_title" data-sui-popover-el="title"></div>' +
                '<div class="sui-popover_content-body" data-sui-popover-el="body"></div>' +
                '<div class="sui-popover_footer" data-sui-popover-el="footer"></div>' +
              '</div>'
  });

  $.fn.sui_popover.find_and_init = function() {
    $('[data-toggle="sui_popover"]').each( function() {
      var $this = $(this),
          href = $this.attr('href'),
          target = $this.attr('data-target' || href);

      if( !$this.data('sui_popover') ) {
        $this.sui_popover( $.extend( { target: target },
                                     $(targ    $().sui_popover.find_and_init();
  });

}(window.jQuery);

// init popovers on document load
jQuery(document).ready(function(){
  jQuery('.sui-body a[rel~=sui_popover]').sui_popover({});
});
/*1.0*/
!function( $ ){

  "use strict"

  /* JsonForm PUBLIC CLASS DEFINITION
   * ============================== */

  /**
   * Submits a form via AJAX and handles success & error results. Uses jQuery Form plugin.
   *
   *  @class SuiCoreComponents.JsonForm
   *  @constructor
   *  @param {Object} element Form element to attach new JsonForm to
   *  @param {Object} [options] Optional configurations
   *  @param {String} [options.loadingText] Text to display while form is loading
   *  @param {Boolean} [options.showCannedFieldErrorMessage] When true, will display a default error message if none is provided
   */
  var JsonForm = function ( element, options ) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.json_form.defaults, options)
    init.call(this);
  }

  JsonForm.prototype = {
    constructor: JsonForm,

    /**
     *  Destroys the JsonForm object attached to a form.
     *
    s.$element.data('json_form',null);
    },

    /**
     *  Handles display of errors at both field and form level.
     *
     *  @method handleError
     *  @param {Object} params
     *  @param {Object} params.jqXHR jQuery XHR object
     *  @param {Integer} params.status Request status
     *  @param {String} params.error
     */
    handleError: function( params ) {
      handleError.call( this, params.jqXHR, params.status, params.error );
    }
  }

  /* JsonForm PRIVATE METHODS
   * ===================== */

  function init() {
    var self = this;

    self.$form = self.$element;
    self.$submitButton = self.$form.find('[data-button-type="submit"]');

    self.$form.ajaxForm({
      beforeSubmit: $.proxy(clearErrorsAndShowBusyIndicator, this),
      dataType: 'json',
      success: $.proxy(ajaxSuccess, this),
      error:);
    showBusyIndicator.call(this);
  }

  function clearFormErrors() {
    this.baseErrorMessage = null;
    this.$form.find('.control-group').removeClass('error');
    this.$form.find('.sui-control-group').removeClass('is-error');

    this.$form.find('.generic-error').hide();
    this.$form.find('.sui-alert--hidden-unless-active').hide();

    this.$form.find('.control-group .help-inline').remove();
    this.$form.find('.sui-control-group .sui-input-validity_message').remove();
  }

  function showBusyIndicator() {
    this.$submitButton && this.$submitButton.button('loading');
  }

  function hideBusyIndicator() {
    this.$submitButton && this.$submitButton.button('reset');
  }

  function ajaxSuccess(data, textStatus, jqXHR) {
    /* Sometimes it's necessary to have a plain-text response (eg IE with file upload) */
    if( data._http_status >= 400 ) {
      textStatus = 'error';
      jqXHR.status = data._http_status;
      handleError.call( this, jqXHR, status, 'Unknown (' + data._http_status + ')' );
      return;
    }

    handleSuccess.call( this, data, textStatus, jqXHR );
  }

  function ajaxError(jqXHR, status, error) {
    /* Sometimes it's necessary to have a non-JSON response (eg IE with file upload) */
    /* This is the old way of handling this, we can remove this after #41545 is merged to community develop */
    if( jqXHR.responseText && jqXHR.responseText.toLocaleLowerCase() == 'success' ) {
      handleSuccess.call( this );
      return;
    }

    handleError.call( this, jqXHR, status, error );
  }

  function handleSuccess( data, textStatus, jqXHR ) {
    this.$form.trigger('ajax:success', [data, textStatus, jqXHR]);

    if( data && data.redirect_to ) {
      window.location.href = data.redirect_to;
    }
    else {
      hideBusyIndicator.call(this);

      if( data && data.message ) {
        showGenericMessage.call( this, data.message, (data && data.html_safe === true) );
      }
    }
  }

  function handleError( jqXHR, status, error ) {
    var json = loadJsonForError( jqXHR.responseText );

    if( json && json.redirect_to ) {
      window.location.href = json.redirect_to;
      return;
    }

    hideBusyIndicator.call(this);

    if( json && json.errors !== null && json.errors !== undefined ) {
      showFieldErrors.call( this, json.errors, (json && json.html_safe === true) );
    }

    showGenericError.call( this, (json && json.message) || this.baseErrorMessage, jqXHR.status, (json && json.html_safe === true));

    this.$form.trigger('ajaalert.show().css('display', 'flex');
  }

  function showGenericMessage( message, html_safe ) {
    var message_container = this.$form.find('.generic-error'); // TODO: Rename the section to generic-message or something
    var textEl = findTextElement(message_container);
    message_container.removeClass('sui-alert--error').addClass('sui-alert--success');
    textEl.html( html_safe ? message : _.escape(message) );
    showAlert(message_container);

    // Toolkit 3
    var message_container = this.$form.find('.sui-alert--hidden-unless-active');
    message_container.removeClass('sui-alert--error').addClass('sui-alert--success');
    textEl.html( html_safe ? message : _.escape(message) );
    showAlert(message_container);
  }

  function showGenericError(message, http_status, html_safe) {
    var generic_error_container = this.$form.find('.generic-error');

    var messageToShow = message || http_status_to_error_message(http_status, this.options);
    var textEl = findTextElement(generic_error_container);

    if( messageToShow ) {
      generic_error_container.removeClass('sui-alert--success').addClass('sui-alert--error');
      textEl.html( html_safe ? messageToShow : _.escape(messageToShow) );
      showAlert(generic_error_container)
    }
  }

  function showFieldErrors( field_errors, html_safe ) {
    var self = this;

    _.each( field_errors, function(error_msgs,field_name) {

      // Capture the non-field-related messages for putting at thte top
      if( field_name == 'base' ) {
        self.baseErrorMessage = error_msgs.join('<br />');
        return; // next
      }

      addErrorsToField.call( self, field_name, error_msgs, html_safe );
    });
  }

  function addErrorsToField( field_name, error_msgs, html_safe ) {
    var self = this;

    var error_msg = error_msgs[0];

    if( error_msg != '' ) {
      var selectors = [ ':input[name*="[' + field_name + ']"]',  // Rails style input names (eg name="user[email_address]")
        ':input[name*="[' + field_name + '("]',  // Rails style date field names (eg name="user[birthday(3i)]")
        ':input[name="' + field_name + '"]' ];   // Exact field name (eg name="email_address")

     elf.$form.find(selector).length;
      });

      if( !field_selector ) return;

      var control_group = self.$form.find(field_selector).parents('.control-group');

      if( control_group.length ) {
        control_group.addClass('error');

        var label = control_group.find(".control-label").text();
        if (label) {
          error_msg = label + " " + error_msg;
        }

        if( control_group.find('.controls .help-inline').size() == 0 ) {
          control_group.find('.controls').append('<span class="help-inline"></span>');
        }

        control_group.find('.controls .help-inline').html(html_safe ? error_msg : _.escape(error_msg));
      }
      else {
        // Toolkit 3
        control_group = self.$form.find(field_selector).parents('.sui-control-group');

        control_group.addClass('is-error');

        var label = control_group.find(".sui-control-group_label").text();
        if (label) {
          error_msg = label + " " + error_msg;
        }

        if( control_group.find('.sui-control-group_controls .sui-input-validity_message').size() == 0 ) {
          control_group.find('.sui-control-group_controls').append('<div class="sui-input-validity_message"></div>');
        }

        control_group.find('.sui-control-group_controls .sui-input-validity_message').html(html_safe ? error_msg : _.escape(error_msg));
      }
    }
  }

  var ERROR_MSG_4XX = "Oops, something's wrong below.";
  var ERROR_MSG_5XX = "Well, that didn't work as expected. Contact support if this happens again.";

  function http_status_to_error_message(http_status, options) {
    if( http_status >= 400 && http_status < 500 )
    {
      if( options.showCannedFieldErrorMessage ) return ERROR_MSG_4XX;
      else return null;
    }

    return ERROR_MSG_5XX;
  }

  /* JsonForm Static Private Methods
  }
    catch(err) {}
    return json;
  }

  function findTextElement(messageContainer) {
    var textEl = messageContainer.find('.sui-alert_text');

    if(textEl.length) {
      return textEl;
    } else {
      return messageContainer.find('.sui-alert_body');
    }
  }

  /* JsonForm PLUGIN DEFINITION
   * ======================== */

  $.fn.json_form = function ( option, params ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('json_form')
        , options = typeof option == 'object' && option
      if (!data) $this.data('json_form', (data = new JsonForm(this, options)))
      else if( data[option] && typeof data[option] == 'function' ) {
        data[option]( params || {} );
      }
    })
  }

  $.fn.json_form.defaults = {
    loadingText: 'loading...',
    showCannedFieldErrorMessage: true
  }

  $.) {
      $(el).json_form();
    });
  });

}( window.jQuery );
/*1.0*/
/**
  Create and manage growl messages

  @class SuiCoreComponents.Growler
  @static
*/


if(typeof window.jQuery === 'function') {
(function($) {
  window.$UI = window.$UI || {};

  var Growler = {
    defaults: {
      displayTime: 5000,
      processingMessage: 'Processing...',
      successMessage: 'Complete',
      errorMessage: 'Looks like we ran into some trouble. Give it another shot.'
    }
  }
  $UI.Growler = Growler;

  var compiledTemplate = null;

  var growlTemplate = function growlTemplate(params) {
    compiledTemplate = compiledTemplate || _.template('<div class="growl-container sui-opt-in"><div class="growl"><i class="sui-icon sui-icon--24 sui-icon--blue sui-icon-<%- type %>-circular"></i><span class="message"><%- caption %></span><span class="growl-close"><a data-dismiss="growl"><i class="sui-icon sui-icon--16 sui-icon--gray sui-icon-close"></i></a></span></div></div>');

    return compiledTemplate(params);
  };

  var $growlWrapper = $('<div>').addClass('growl-wrapper');

  var showGrowl = function showGrowl(options) {
    var growlTimer = null;

    var type = options.type;
    var caption = options.caption;
    var append = options.append;

    var autoCloseTime = Growler.defaults.displayTime;

    if(!append){
      $('.growl-container').remove(); // Only way to get transitions to work reliably is to start over every show
    }

    var $growl = $( growlTemplate({ type: type, caption: caption }) );

    if(!$('body').find('.growl-wrapper').length){
      $('body').append($growlWrapper);
    }

    $('.growl-wrapper').UI.closeGrowl($(e.currentTarget));
    } );

    $growl.show();

    var reflow = $growl.offsetWidth; reflow = reflow; // force reflow (and shut up jshint)
    $growl.find('.growl').addClass('in');

    if( growlTimer ) {
      window.clearTimeout( growlTimer );
    }
    if( type !== 'error' ) {
      growlTimer = setTimeout( $UI.closeGrowl, autoCloseTime, $growl );
    }
  };

  var failCallback = function failCallback() {
    if( $UI.app && $UI.app.vent && typeof($UI.app.vent.trigger) == 'function' ) {
      $UI.app.vent.trigger("growler:asyncError", this);
    }
  };

  /**
    Display a growl message

    @method growl
    @param {Object} [options={}] Optional parameter to specify options for growl message
      @param {String} [options.caption] Text to include in growl message
      @param {String} [options.type='info'] Type of growl message - info, success, or error
      @param {Boolean} [options.append=false] When true, growl message will stack vertically with any existing growl messages
      @param {Boolean} [options.clearExisting=false] When true, will force error messages off the screen
    @param {Object} [deferred] Optional deferred object
  */
  $UI.growl = function growl(options, deferred) {
    var defaultType = 'info';

    var defaultCaptions = {
      'info': 'Processing...',
      'success': 'Complete',
      'error': 'Looks like we ran into some trouble. Give it another shot.'
    };

    var defaultAppend = false;

    var type = options.type || defaultType;
    var caption = options.caption || defaultCaptions[type];
    var append = options.append || defaultAppend;

    if(!append && !options.clearExisting && $('.growl-container .growl.in .sui-icon-error-circular').length ) {
      return; // Don't show a new growl if an error is showing
    }

    var growlDeferred;

    if(deferred) {
      growlDeferred = deferred
      .done(function(caption){ showGrowl({type: "succewl({type: "error", caption: caption}); });
    }
    else {
      growlDeferred = (type === 'error' ? $.Deferred().reject() : $.Deferred().resolve());
      showGrowl({ type: type, caption: caption, append: append });
    }

    growlDeferred
    .fail(failCallback);

    if(deferred){
      showGrowl({ type: type, caption: caption, append: append});
    }
  };

  /**
    Closes all growl messages

    @method closeGrowls
  */
  $UI.closeGrowls = function closeGrowls() {
    $('.growl-container').find('.growl').removeClass('in');
    $('.growl-container').html('');
  }

  /**
    Closes a single growl message

    @method closeGrowl
    @param {Object} $growl Growl oveClass('in');
    $growl.html('');
  }

  /**
    Allow success & error callbacks with growl messages

    @method withGrowlMessages
    @param {object} [options] Options object to pass success and error functions
  */
  $UI.withGrowlMessages = function withGrowlMessages(options) {
    var deferred = $.Deferred(),
    defaults = {
      caption: Growler.defaults.processingMessage,
      success: Growler.defaults.successMessage,
      error: Growler.defaults.errorMessage
    };

    $UI.growl({caption: options.caption || defaults.caption}, deferred.promise());

    return _.extend({}, options, {
      success: function() {
        var args = arguments,
        success = options.success;
        _.isFunction(success) && (options.success = function() { return success.apply(this, args); });
        var caption = _.result(options, "success") || defaults.success;
        deferred.resolve(caption);
      },
      error: function() {
        var args = arguments,
        error = options.error;
        _.isFunction(error) && (options.error = function() { return error.apply(this, args); });
        var caption = _.result(options, "error") || defaults.error;
        deferred.reject(caption);
      }
    });
  };

  // Patch jQuery Deferred and Promise objects to include a growl method.
  // This allows us to call the growler from ajax requests, model syncs, etc.
  // For example:
  //
  //   1.  $.get(url).growl({caption: "Loading..."});
  //   2.  backbone_model.save().growl({caption: "Saving...", success: "Saved"});
  var showGrowlMessages = function(options){
    var defaults = {
      caption: Growler.defaults.processingMessage,
      success: Growler.defaults.successMessage,
      error: Growler.defaults.errorMessage
    };
    options = options || {};
    options = _.defaults(options, defaults);
    $UI.growl(options, this.pipe(function(){ return options.success; }, function(){ return options.error; }));
    return this;
  };

  var deferredWithoutGrowl = $.Deferred;
  var deferredWithGrowl    = function(beforeStart){
    var dfd = deferredWithoutGrowl(beforeStart);
    dfd.growl = showGrowlMessages;

    var promiseWithoutGrowl = dfd.promise;
    var promiseWithGrowl    = function(e){
      var promise   = promiseWithoutGrowl(e);
      promise.growl = showGrowlMessages;
      return promise;
    }

    dfd.promise = promiseWithGrowl;
    return dfd;
  };

  $.Deferred = deferredWithGrowl;
})(jQuery);
}
;
/*1.0*/
/* ============================================================
 * sui-spicebutton.js v1.4.0
 * ============================================================
 * Copyright © 2006-15 Spiceworks, Inc.  All Rights Reserved.  http://www.spiceworks.com
 * ============================================================ */

/* ============================================================
 * OPTIONS
 * spicecount : The current # of spices, default = 0
 * spicedstate : Whether the current user has spiced this item and in what direction
 *               use the struct:  SpicedState = { up:1, unspiced:0, down:-1 }
 * user_can_downspice : Whether the current user can down spice an item, default = false
 *
 * ============================================================
 * EVENTS
 *
 * spiced(event, SpiceButton, direction) -  the spiced event handler passes the following:
 *                        event - the jQuery Event
 *                        SpiceButton - the instance of the SpiceButton that was spiced
 *                        direction - the direction the item was spiced -1/1
 * USAGE:  $('#elm').on('spiced', function(event, spicebutton, direction){
 *           if (direction == 1){ alert('hey spiced up')}
 *           else { alert('boo, spiced down')}
 *         });
 * ============================================================ */
// Global Struct for the various states of the SpiceButtons
var SpicedState = {
  up: true,
  unspiced: undefined,
  down: false,
  toInt: function(state) { return state == this.unspiced ? 0 : (state ? 1 : -1); },
  fromNativeType: function(state) {
    if( state === SpicedState.up || state === SpicedState.unspiced || state === SpicedState.down ) {
      return state;
    }
    if( state > 0 || parseInt(state) > 0 || state == 'true' )       { return SpicedState.up; }
    else if( state < 0 || parseInt(state) < 0 || state == 'false' ) { return SpicedState.down; }
    return SpicedState.unspiced;
  }
};

!function( $ ){

  "use strict"
  // Plugin Control definition
  /**
    Create a spice button or link, allowing users to spice an element up or down.
    Buttons should be used only once on a page and on the page-level element (i.e. spicing up a topic).
    Links are for repeated items, like posts, comments, or reviews.

    @class SuiCoreComponents.SpiceButton
    @constructor
    @param {Object} element Spice button or link element
    @param {Object} [options] Optional configurations.
    @param {Integer} [options.spicecount = 0] The current number of spices
    @param {Object} [options.spicedstate] Whether the current user has spices this item and in what direction. Uses the format: SpicedState = {up:1, unspiced:0, down: -1}
    @param {Boolean} [options.user_can_downspice = false] Whether the current user can down spice an item
  */
  var SpiceButton = function ( element, options ) {
    this.init('spicebutton', element, options)
  }

  SpiceButton.prototype = {

    constructor : SpiceButton,

    init: function(type, element, options){
      // basic plugin setup
      this.type = type;
      this.$elm = $(element);
      this.$parent = this.$elm.parent('div.sui-spicebttn-wrap')
      this.options = this._getOptions(options);
      this.can_downspice = false;
      this.attached = false;
      this.spice_tip = "Spice this!"; // TODO - localize this
      this.count_tip = "See who spiced this"; // TODO - localize this
      this.spice_text = "Spice"; // TODO - localize this
      this.unspice_text = "Unspice" // TODO - localize this
      this.spice_format = _.template("(<%- count %>)");
      this.status_text_spiced = "Spiced" // TODO -localize this
      this.status_text_unspiced = "Spice" // TODO -localize this
      this.spiced_up_tip = "You spiced this up!" // TODO - localize this
      this.spiced_down_tip = "You spiced this down!" // TODO - localize this

      this.$countelm = this.$elm.find('.sui-spicelink-count');
      this.$icon = this.$elm.find('i');
      this.$downelm = null;
      this.$downlink = null;

      // disable tooltips on touch enabled devices
      if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        this.$elm.attr('rel','');
      }

      // Try to pull some options out of the HTML if they weren't set by JS
      if( this.options.spiceable_class == null || this.options.spiceable_class == undefined ) {
        this.options.spiceable_class = this.$elm.attr('data-spiceable-class');
      }

      if( this.options.spiceable_id == null || this.options.spiceable_id == undefined ) {
        this.options.spiceable_id = parseInt( this.$elm.attr('data-spiceable-id'), 10 );
      }

      if( this.options.spicecount == null || this.options.spicecount == undefined ) {
        this.options.spicecount = parseInt( this.$elm.attr('data-spicecount'), 10 );
      }

      if( this.options.spicedstate == null || this.options.spicedstate == undefined ) {
        this.options.spicedstate = this.$elm.attr('data-spicedstate');
      }
      this.options.spicedstate = SpicedState.fromNativeType( this.options.spicedstate );

      // attach the events or modify style for "status only"
      // unregister handlers first to ensure no doubles, esp. when processing a second init with different options
      this.$elm.off('click').off('keydown');

      if( this.options.status_only ) {
        this.$elm.addClass( 'status-only' );
      }
      else {
        this.$elm.on('click', null, $.proxy(this._click, this));
        this.$elm.on('keydown', null, $.proxy(this._keydown, this));
      }

      if( this.$countelm.size() == 0 ) {
        // If the count is outside the 'Spice' link (ie it's a spicelink not spicebutton) attach a separate handler
        this.$countelm = this.$parent.find('.sui-spicelink-count');
        if(this.$countelm.data('tooltip')) {
          // if tooltip has already been initiated, modify data-original-title instead of title
          this.$countelm.attr('data-original-title', this.count_tip);
        } else {
          this.$countelm.attr('title', this.count_tip);
        }
        this.$countelm.off('click');
        this.$countelm.on('click', null, $.proxy(this._count_click, this));
      }

      // spicebuttons still allow privileged spicedown
      if(!this.$elm.hasClass('sui-spicelink')){
        this.$downelm = this.$parent.find('div.sui-spicebttn-menu');
        this.$downlink = this.$downelm.find('a.sui-spicebttn-down');
        // attach events to the downspice stuff
        this.$parent.off('mouseenter').off('mouseleave');
        this.$downlink.off('click');

        if( !this.options.status_only ) {
          this.$parent.hover($.proxy(this._mouseover, this), $.proxy(this._mouseout, this));
          this.$downlink.on('click', null, $.proxy(this._click, this));
          this.can_downspice = true;
        }

        this.is_button = true;
        this.spice_format = _.template("<%= count %>");
      }

      this._dospice(SpicedState.unspiced); //assume the options have the proper values, just setup the controls
    },

    /**
      Set options on a SpiceButton.

      @method setOptions
      @param {Object} options Configuration options.
      @param {Integer} [options.spicecount = 0] The current number of spices
      @param {Object} [options.spicedstate] Whether the current user has spices this item and in what direction. Uses the format: SpicedState = {up:1, unspiced:0, down: -1}
      @param {Boolean} [options.user_can_downspice = false] Whether the current user can down spice an item
    */
    setOptions: function(options){
      this.options = $.extend(this.options, options);
      this._dospice(SpicedState.unspiced); //assume the options have the proper values, just setup the controls
    },

    /**
      Get a SpiceButton's data id.

      @method dataId
      @return Returns this element's data id
    */
    dataId: function(){
      return this.$elm.data('id');
    },

    /**
      Get the spiced state of a SpiceButton.

      @method getSpicedState
      @return {Object} Returns spiced state
    */
    getSpicedState: function(){
      return this.options.spicedstate;
    },

    _getOptions: function(options){
      options = $.extend({}, $.fn[this.type].defaults, options, this.$elm.data());
      re& this.options.user_can_downspice);
    },

    _dospice: function(dir){
      dir = SpicedState.toInt(dir);
      this._set_spicecount(this.options.spicecount + dir);
      var attr = (typeof(this.$elm.attr('data-original-title')) == 'undefined')? 'title' : 'data-original-title';
      var text;
      if( this.options.status_only ) {
        text = (this.options.spicecount == 0) ? this.status_text_unspiced : this.status_text_spiced;
        this.$elm.attr(attr, this.options.status_only_tip || '');
      }
      else {
        switch(this.options.spicedstate){
          case SpicedState.up :
            this.$elm.attr(attr, this.spiced_up_tip);
            text = this.unspice_text;
            this.$elm.addClass('active');
            break;
          case SpicedState.unspiced :
            this.$elm.attr(attr, this.spice_tip);
            text = this.spice_text
            this.$elm.removeClass('active');
            break;
          case SpicedState.down :
            this.$elm.attr(attr, this.spiced_down_tip);
            text = this.unspice_text;
            this.$elm.addClass('active');
            break;
        }
      }
      if(!this.is_button) { // links get their text changed
        this.$elm.find("span.sui-spicelink-text").text(text);
        if(this.options.spicecount == 0) {
          this.$icon.hide();
          if( this.options.status_only ) {
            this.$countelm.hide();
          }
        } else {
          this.$icon.show();
        }
      }
    },

    /**
      Set state on a SpiceButton.
      Replace `setOptions` which is broken, esp WRT `spicedstate`

      @method setState
      @param {Object} options Configuration options.
      @param {Integer} [options.spicecount = 0] The current number of spices
      @param {Object} [options.spicedstate] Whether the current user has spices this item and in what direction. Uses the format: SpicedState = {up:1, unspiced:0, down: -1}
    */
    setState: function(options) {
      options = options || {};
      this.options.spicecount = options.spicecount;
      this.options.spicedstate = SpicedState.fromNativeType(options.spicedstate);

      this._render_spicecount();
      this._render_spc;
      this._render_spicecount();
    },

    _render_spicecount: function() {
      var c = this.options.spicecount;
      if( !this.is_button && c == 0 ) {
        this.$countelm.html('');
      }
      else {
        this.$countelm.html( this.spice_format({ count: this.options.spicecount }) );
      }
    },

    // This method is a copy of the logic in `_dospice` except that it only handles
    // actually setting the state & rendering (doesn't modify the state according to
    // the "direction"). It also leaves out the complexity of `status_only`.
    // In a later update we should use this function as a primitive & refactor this
    // logic out of `_dospice` (don't want to do that now b/c I'm doing a patch).
    _render_spicedstate: function() {
      var text = null;
      var attr = (typeof(this.$elm.attr('data-original-title')) == 'undefined')? 'title' : 'data-original-title';

      switch(this.options.spicedstate){
        case SpicedState.up :
          this.$elm.attr(attr, this.spiced_up_tip);
          text = this.unspice_text;
          this.$elm.addClass('active');
          break;
        case SpicedState.unspiced :
          this.$elm.attr(attr, this.spice_tip);
          text = this.spice_text
          this.$elm.removeClass('active');
          break;
        case SpicedState.down :
          this.$elm.attr(attr, this.spiced_down_tip);
          text = this.unspice_text;
          this.$elm.addClass('active');
          break;
      }

      if( !this.is_button ) { // links get their text changed
        this.$elm.find("span.sui-spicelink-text").text(text);
        if( this.options.spicecount == 0 ) {
          this.$icon.hide();
        } else {
          this.$icon.show();
        }
      }
    },

    _spicechange: function(e){
      var t = $(e.currentTarget), newstate, dir;
      var targetDirection = (t.attr('data-dir') == 'true');
      if(targetDirection != SpicedState.down){
        if(this.options.spicedstate == SpicedState.unspiced){
          newstate = SpicedState.up;
          dir = SpicedState.up;
        } else if (this.options.spicedstate == SpicedState.down) {
          newstate = SpicedState.unspiced;
          dir = SpicedState.up;
        } else {
          newstate = SpicedState.unspiced;
          dir = SpicedState.down;
        }
      } else { // -1 is downspicing
        if(this.options.spicedstate == SpicedState.unspiced){
          newstate = SpicedState.down;
          dir = SpicedState.down;
        } else {
          return false;
        }
      }

      if( this.options.user_can_spice || this.options.user_can_spice == null || this.options.user_can_spice == undefined ) {
        this.options.spicedstate = newstate;
        this._dospice(dir);
      }

      /**
        Fires when a SpiceButton has been spiced.

        @param {Object} SpiceButton the instance of the SpiceButton that was spiced
        @param {Integer} direction The direction the item was spiced -1/1
        @event spiced
      */
      this.$elm.trigger('spiced', [this, dir] );

      return false;
    },


    _hide_spicedown: function(){
      this.$downelm.hide();
    },

    _click: function(e){
      this._spicechange(e);
      return false;
    },

    _keydown: function(e){
      if(e.which == 13 ){
        this._spicechange(e);
        return false;
      }
    },

    _count_click: function(e){
      /**
        Fires when a spice link's count element has been clicked

        @event count_click
        @param {Object} SpiceButton SpiceButton instance that was clicked
      */
      this.$elm.trigger('count_click', this );
      return false;
    },

    _mouseover: function(e){
      if(this.options.spicedstate == SpicedState.unspiced && this._downspiceable()){
        var w = (this.$elm.outerWidth() - this.$downelm.outerWidth()) / 2;
        this.$downelm.css('left',  w + 'px');
        this.$downen(e){
      this._hide_spicedown();
    }
  }

  // jQuery Plugin method
  $.fn.spicebutton = function ( option, arg ) {
    return this.each(function () {
      var $this = $(this);
      var old_data = $this.data('spicebutton');
      var options = typeof option == 'object' && option;
      if( options.spicecount != undefined && options.spicecount != null ) {
        options.spicecount = parseInt( options.spicecount, 10 );
      }
      var data = new SpiceButton( this, $.extend( old_data && old_data.options, options ) )
      $this.data('spicebutton', data );
      if (typeof option == 'string'){
        var v = arg;
        data[option](v);
      }
    });
  }

  $.fn.spicebutton.Constructor = SpiceButton;

  $.fn.spicebutton.defaults = {
    spicecount : 0,
    spicedstate : SpicedState.unspiced,
    user_can_downspice : true
  };

  $(document).ready(function(){
    $('a.sui-spicebttn').spicebutton();
  });

}( window.jQuery);
/*1.0*/
// Rails composition file
/* sui-core_components.js */






// Components











;
/*1.0*/
/****************************************************************************************************/
/* This code was copied from the App source code so it will need to be removed from there           */
/****************************************************************************************************/

!function( $ ){

  "use strict"

  /* CAROUSEL CLASS DEFINITION
   * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$inner = this.$element.children('.carousel-inner')
    this.$list = this.$element.find('.carousel-items')
    this.itemW = this.$element.find('.item').outerWidth(true)

    this.options = options
    this.options.slide && this.slide(this.options.slide)
    this.options.pause == 'hover' && this.$element
      .bind('mouseenter', $.proxy(this.pause, this))
      .bind('mouseleave', $.proxy(this.cycle, this))

    this.numPages = 0
    this.currPage = 0
    this.resize()
  }

  Carousel.prototype = {

    cycle: function () {
      this.options.interval
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

    , to: function (pos) {
      var visibleWidth = this.$inner.width()
        , visibleCount = Math.floor( visibleWidth/this.itemW )
        , pageSize = visibleCount*this.itemW
        , $circleDiv = this.$element.find('.carousel-circles')
        , isCycling = this.interval
        , that = this

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      this.sliding = true

      isCycling && this.pause()

      this.$element.trigger('slide')
      if($circleDiv){
        $circleDiv.find('.active').removeClass('active').attr('title', 'Inactive Page');
        $circleDiv.children().eq(pos).addClass('active').attr('title', 'Active Page');
      }

      var newLeft = Math.min(Math.max(pos*pageSize, 0), this.itemW*(this.$list.children('.item').length - visibleCount))
      this.$list.animate({left: '-' + newLeft}, function(){
        that.sliding = false
        that.currPage = pos
        that.$element.trigger('slid')
      })


      isCycling && this.cycle(s.interval = null
      return this
    }

    , next: function () {
      if (this.sliding) return
      return
      return this._slide('prev')
    }

    , _slide: function (type) {
      var visibleWidth = this.$inner.width()
        , visibleCount = Math.floor( visibleWidth/this.itemW )
        , currLeft = Math.abs(parseFloat( this.$list.css('left') ))
        , nextPage = (type === 'next') ? this.currPage + 1 : this.currPage - 1

      if (this.currPage == nextPage) {
        return this.pause().cycle()
      } else if( nextPage >= this.numPages ) {
        return this.to(0)
      } else if( nextPage < 0 ) {
        return this.to(this.numPages-1)
      }

      return this.to(nextPage)
    }
    , hideCircles: function () {
      this.$element.find('.carousel-circles').hide()
 -circles').show()
      return this
    }
    , _drawControls: function ( ) {
      if(this.numPages > 1){
        var $circleDiv = this.$element.find('.carousel-circles')
        if($circleDiv){
          var html = []
          var target = this.$element.attr('id') ? ("#" + this.$element.attr('id')) : '#'
          for(var i =0; i < this.numPages; i++){
            if( i == this.currPage ){
              html.push('<div class="carousel-circle active" title="Active Page" data-target='+ target +' data-to='+ i +'></div>');
            } else {
              html.push('<div class="carousel-circle" title="Inactive Page" data-target='+ target +' data-to='+ i +'></div>');
            }
          }

          $circleDiv.html( html.join('') )
        }

        this.$element.children('.carousel-controls').show()
      } else {
        this.$element.children('.carousel-controls').hide()
      }

      return this
    }
    , resize: function () {
      this.itemW = this.$element.find('.item').outerWidth(true) || this.itemW
      var visibleWidth = this.$inner.width()
        , visibleCount = Math.floor( visibleWidth/this.itemW )
        , currLeft = Math.abs(parseFloat( this.$list.css('left') ))

      if(visibleCount == 0 ){ return this};

      var newNumPages = Math.ceil(this.$list.children('.item').length/visibleCount)
      if( this.currPage >= newNumPages-1 ) {
        this.currPage = newNumPages-1
        this.$list.css('left', '-' + this.itemW*(this.$list.children('.item').length - visibleCount) + 'px')
      }

      if( this.numPages != newNumPages ) {
        this.numPages = newNumPages
        this._drawControls()
      }

      return this
    }
  }


  /* CAROUSEL PLUGIN DEFINITION
   * ========================== */

  $.fn.carousel = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (typeof option == 'string') data[option]()
      else if (options.next) data.next()
      else if (options.prev) data.prev()
      else if (options.to !== undefined) data.to(options.to) //added check so that we can slide to page 0
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: false
    , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel

  /* CAROUSEL INITIALIZATION
   * ================= */

  $(function () {
    $('div[data-control-type="carousel"]').carousel()

    /* CAROUSEL DATA-API
     * ================= */

    $('body').delegate('[data-next="carousel"],[data-prev="carousel"],[data-to]', 'click.carousel.data-api', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7

      $target.length || ($target = $this.hasClass('carousel') ? $this : $this.closest('.carousel'))
      $target.carousel($.extend({}, $target.data(), $this.data()))
      e.preventDefault()
    })

    /* CAROUSEL RESIZING
     * ================= */

    $(window).bind('resize', function ( e ) {
      $('l')
        data && data.resize()
      })
    })
  })

}( window.jQuery );
/*1.0*/
// Rails composition file


;
/*1.0*/
// _sui-rating.js
;
/*1.0*/
// Rails composition file


;
/*1.0*/
(function($) {

  jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) +
                                                  $(window).scrollTop()) + "px");
      this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) +
                                                  $(window).scrollLeft()) + "px");
      return this;
  };

  // Create popover registry
  window.$UI.registerPopover = function(popover, closeFunc) {
    // bind to popover context
    var selector = '.popover.in, .tooltip.in, .sui-dropdown.open, .sui-date.in',
        $element = popover.$tip||popover.$el||jQuery(popover),
        $parents = $element.parents(selector),
        $children = $element.find(selector);
    if ($parents.length>0) { popover._parentPopover = $UI.activePopover; }
    if (closeFunc){
      closeFunc = _.bind(closeFunc, popover);
      closeFunc = _.wrap(closeFunc, function(cFunc) {
        var returns = cFunc();
        this.popover._parentPopover && this.popover._parentPopover.close();
        return returns;
      });
    } else {
      closeFunc = function(){return null;};
    }

    // Dropdowns are odd beasts that don't have references back to the data object
    // so for now, clear all Dropdown menus when a popover is registered
    $('html').trigger('click.dropdown.data-api');

    // close any active popover before registering new one, unless it is in my ancestry
    if ($parents.length===0 && $children.length===0) {$UI.finalizePopover();}
    $UI.activePopover = {popover: popover, element: $element, close: closeFunc};
    return $UI.activePopovion() {
    $UI.activePopover = null;
  }

  window.$UI.receivePopoverClose = function(popover){
    if($UI.activePopover && $UI.activePopover.popover == popover){
      $UI.finalizePopover();
    }
  }

  // unregister when closed
  window.$UI.finalizePopover = function() {
    if ($UI.activePopover) $UI.activePopover.close();
    $UI.unregisterPopover();
  }

})(jQuery)

;
/*1.0*/
/* =============================================================
 * bootstrap-scrollspy.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ( $ ) {

  "use strict"

  /* SCROLLSPY CLASS DEFINITION
   * ========================== */

  function ScrollSpy( element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body').on('click.scroll.data-api', this.selector, process)
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        this.targets = this.$body
     $(href).length ? href : null
          })

     return $(id).position().top
        })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active

        this.activeTarget = target

        this.$body
          .find(this.selector).parent('.active')
          .removeClass('active')

        active = this.$body
          .find(this.selector + '[href="' + target + '"]')
          .parent('li')
          .addClass('active')

        if ( active.parent('.dropdown-menu') )  {
          active.closest('li.dropdown').addClass('active')
        }
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  $.fn.scrollspy = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSP   $spy.scrollspy($spy.data())
    })
  })

}( window.jQuery )
;
/*1.0*/
(function($, toolkit) {
   function make(tagName, attributes, content) {
      var el = document.createElement(tagName);
      if (attributes) $(el).attr(attributes);
      if (content) $(el).html(content);
      return el;
    }

    function linkTo(text, url, options) {
      options['href'] = url
      return make('a', options, text);
    }

    function button(text, url, options) {
      options = options || {};
      options['class'] = (options['class'] || '') + ' sui-bttn';
      return toolkit.linkTo(text, url, options );
    }

    function spice_button() {
      if(CurrentUser.permissionClass === "guest") {
        return '<div class="sui-spicebttn-wrap"><a href="javascript:void(0)" class="sui-bttn sui-spicebttn" data-dir="true" data-toggle="spicebttn" onclick="return false;" rel="tooltip" title="Spice This!"><i class="sui-icon sui-icon-pepper sui-icon--16"></i><span class="sui-spicelink-count">0</span></a></div>';
      }
      else {
        return '<div class="sui-spicebttn-wrap"><a href="javascript:void(0)" class="sui-bttn sui-spicebttn" data-dir="true" data-toggle="spicebttn" onclick="return false;" rel="tooltip" title="Spice This!"><i class="sui-icon sui-icon-pepper sui-icon--16"></i><span class="sui-spicelink-count">0</span></a><div class="sui-spicebttn-container"><div class="sui-spicebttn-menu"><a href="#" class="sui-spicebttn-down" data-dir="false" onclick="return false;">Spice Down</a></div></div></div>';
      }
    }

    toolkit.button = button;
    toolkit.linkTo = linkTo;
    toolkit.spice_button = spice_button;

})(jQuery, window.$UI);
/*1.0*/
/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ) {

 /* DATEPICKER PUBLIC CLASS DEFINITION
  * ============================== */

  /**
    Create a Day.getUTCMonth(), today.getUTCDate());f(this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datis._events[i][1];
l.off(ev);e: 'show',
				date: this.date
			});
		},

		hide: function(e){
			if(this.isInline) return;
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}

			if (
				this.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			// this.element.trigger({
			// 	type: 'hide',
			// 	elete this.ele() + (d.getTimezoneOffset()*60000));
		},

		getUTCDate: function(() - (d.getTimez			this.date = d;
			this.setValue();
		},

		setValue: function() {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formatted);
				}
				this.element.data('date', formatted);
			} else {
				this.element.prop('value', formatted);
			}
		},

		getFormattedDate: function(format) {
			if(format == undefined) format = this.format;
			return DPGlobal.formatDate(this.date, form.update();
			th.update();
			this.updateNa.update();
			this.updateNavArrows();
		},

		place: function(){
						if(this.isInline) return;
			var zIndex$(this).css('z-index') != 'auto';
						}).first().css('z-index'))+10;
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left,
				zIndex: zIndex
			});
		},

		update: function(){
			var date, fromArgs = false;
			if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
				date = arguments[0];
				fromArgs = true;
			} else {
				date = this.isInput ? this.element.prop('value') : this.element.data('date') || this.element.find('input').prop('value');
			}

			this.date = DPGlobal.parseDate(date, this.format, this.language);

			if(fromArgs) this.setValue();

			var oldViewDate = this.viewDate;
			if (this.date < this.startDate) {
				this.viewDate = new Date(this.startDate);
			} else if (this.date > this.endDate) {
				this.viewDate = new Date(this.endDate);
			} else {
				this.viewDate = new Date(this.date);
			}

			if (oldViewDate && oldViewDate.getTime() != this.viewDate.getTime()){
				this.element.trigger({
					type: 'changeDate',
					date: this.viewDate
				datepicker-days ('.datepicar += 1;
			}
			year 'visible'},0));
						}
ate')) {
					t(new_month);
		return this.moveMontis.startDate ) {
					eleme 'block');
			this.updat[option].apply(data, args);
			}
		});
	};

	$.fn.datepicker.defaults = {
		autoclose:true
	};
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullY % 100 !== 0)) || (1, 30, 31, 31, 30, 31, 30, 31][month]
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length == 0){
				throw new Error("Invalid date format.");
			}
			return {separators: sepparsed[s])
				s[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="sui-icon sui-icon--16 sui-icon-left"/></th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next"><i class="sui-icon sui-icon--16 sui-icon-right"/></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;

}( window.jQuery );
/*1.0*/
/* =============================================================
 * Searchbar
 * =============================================================
 * Plugin control paired with the Searchbar Helpers to create
 * easy to use Searchbar functionalities
 * ============================================================ */


!function( $ ) {

  "use strict"

 /* SEARCHBAR PUBLIC CLASS DEFINITION
  * =============================== */

  var Searchbar = function ( element, options ) {
    this.init('searchbar', element, options)
  }

  Searchbar.prototype = {

    constructor: Searchbar,
     selectedItem: null,

    init: function ( type, element, options ) {
      // basic plugin setup
      this.type = type;
      this.$element = $(element);
      this.options = this.getOptions(options);
      this.$field = this.$element.find('.sui-search-field');
      this.$button = this.$element.find('.sui-search-bttn, .sui-search_icon');
      this.$form = this.$field.parents('form').first();

      // data-event-enabled
      if(this.$field.data('event-enabled') == true){
        this.$field.on('keydown', null, $.proxy(this.keydown, this));
      }
      this.$button.on('click', null, $.proxy(this.click, this));
      this.$button.on('keydown', null, $.proxy(this.keydown, this));
    },

    getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());
      return options;
    },

    submit: function () {
      if(this.$form){
        this.$form.trigger('submit');
      } else {
        /* TODO - handle non-form based searches, probably by invoking a13){
        this.submit();
      }
    },

    click: function ( e ) {
      this.submit();
    }
  }

  $.fn.searchbar = function ( option ) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('searchbar'),
          options = typeof option == 'object' && option
      if (!data) $this.data('searchbar', (data = new Searchbar(this, options)))
      if (typeof option == 'string') data[option]()
    });
  }

  $.fn.searchbar.Constructor = Searchbar;

  $.fn.searchbar.defaults = {/* no defaults here yet */};

  $(document).ready(function(){
    $('div.sui-search-content, .sui-search--primary').searchbar();
  });

}( window.jQuery );
/*1.0*/
!function( $ ){

  "use strict"

 /* MESSAGEPANEL CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="message-panel"]', 
      MessagePanel = function ( el ) {
        $(el).on('click', dismiss, this.close);
      };

  MessagePanel.prototype = {

 Element) :
        removeElement();
    }

  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  $.fn.messagePanel = function ( option ) {
    return this.each(function () {
      var $this = $(this), 
        data = $this.data('message-panel');
      if (!data) $this.data('message-panel', (data = new MessagePanel(this)));
      if (typeof option == 'string') data[option].call($this);
    })
  }

  $.fn.messagePanel.Constructor = MessagePanel;


 /* ALERT DATA-API
  * ============== */

  $(function () {
    $(document).on('click.message-panel.data-api', dismiss, MessagePanel.prototype.close);
  })

}( window.jQuery );
/*1.0*/
/* ============================================================
 * sui-followbutton.js v1.4.0
 * ============================================================
 * Copyright (c) 2006-15 Spiceworks, Inc.  All Rights Reserved.  http://www.spiceworks.com
 * ============================================================ */

/* ============================================================
 * OPTIONS
 * following : The current # of spices, default = 0
 * buttonText : The text to display in certain states:
 *              follow: The command to follow
 *              following: The state of following
 *              unfollow: The command to un-follow
 *
 * ============================================================
 * EVENTS
 *
 * follow(event, FollowButton) -  the follow event handler passes the following:
 *                        event - the jQuery Event
 *                        FollowButton - the instance of the FollowButton that was clicked
 * USAGE:  $('#elm').on('follow', function(event, followbutton){
 *           alert('hey, I was followed')
 *         });
 *
 * unfollow(event, FollowButton) -  the follow event handler passes the following:
 *                        event - the jQuery Event
 *                        FollowButton - the instance of the FollowButton that was clicked
 * USAGE:  $('#elm').on('unfollow', function(event, followbutton){
 *           alert('hey, I was unfollowed')
 *         });
 * ============================================================ */

!function($) {
  FollowButton = function(element, options) {
    this.init('followbutton', element, options);
  };

  FollowButton.prototype = {
    constructor: FollowButton,

    init: function(type, element, options){
      this.type = type;
      this.$elm = $(element);
      this.options = this._initOptions(options);

      this._setState();
    },

    setOptions: function(options){
      this.options = $.extend(this.options, options);
      this._setState();
    },

    _initOptions: function(options){
      options = $.extend({}, $.fn[this.type].defaults, options, this.$elm.data());
      // Try to pull some options out of the HTML if they weren't set by JS
      if( options.followable_class == null || options.followable_class == undefined ) {
        options.followable_class = this.$elm.attr('data-followable-class');
      }
      if( options.followable_id == null || options.followable_id == undefined ) {
        options.followable_id = parseInt( this.$elm.attr('data-followable-id'), 10 );
      }
      return options;
    },

    dataId: function(){
      return this.$elm.data('followable-id');
    },

    dataFollowClass: function(){
      return this.$elm.data('followable-class');
    },

    toggle: function() {
      if(User && User.kind === 'guest') {
        var message = this.$elm.attr('data-followable-class'),
            name = this.$elm.attr('data-display-name'),
            isFromPopup = this.$elm.attr('data-is-within-popup');

        if (name) {
          message = name + ' ' + message;
        }
        if (isFromPopup === 'true') {
          message += ' popup';
        }

        JoinAndLogin.trackAndShowForm('join', { label: 'Follow Button - ' + message  });
        return;
      }

      if (!this.options.statusOnly) {
        this.options.following ? this.unfollow() : this.follow();
        this._setState();
      }
    },

    follow: function() {
      this.options.following = true;
      this.$elm.trigger("follow", this);
    },

    unfollow: function() {
      this.options.following = false;
      this.$elm.trigger(onText();
      this._sollowing", this.options.following);
    },

    _setButtonText: function() {
      this.$elm.find('.button-text')
        .text(this.options.following ?
          this.options.buttonText.following :
          this.options.buttonText.follow);
    },

    _setTooltip: function() {
      var attr = (typeof(this.$elm.attr('data-original-title')) == 'undefined')? 'title' : 'data-original-title';
      if(this.options.following){
        this.$elm.attr(attr, this.options.buttonText.unfollow);
        this.$elm.sui_tooltip('enable');
      } else {
        this.$elm.sui_tooltip('hide').sui_tooltip('disable');
      }
    }
  };

  $.fn.followbutton = function(option) {
    return this.each(function() {
      var $this = $(this);
      var options = typeof option == 'object' && option;
      var data = $this.data("followbutton");
      if(!data){
        data = new FollowButton( this, options);
        $this.data('followbutton', data);
      } else {
        data.setOptions(options);
      }
      if (typeof option == 'string'){
        data[option]();
      }
    });
  };

  $.fn.followbutton.Constructor = FollowButton;

  $.fn.followbutton.defaults = {
    following: false,
    buttonText: {
      follow: "Follow",
      following: "Following",
      unfollow: "Unfollow"
    },
    statusOnly: false
  };

  $(document).ready(function(){
    $('a.sui-followbttn, a.sui-followlink').followbutton();
  });

 /* FOLLO(this).followbutton('toggle');
    })
  })

}(jQuery);


/* Quick Demo Code  -- REMOVE ONCE YOU'VE GOT THE HTML HELPERS IN PLACE */
// $('body').append($UI.button($('<span class="button-text"></span>')));
// $('body').append($('<div><a class="follow-button"><span class="button-text"></span></a></div>').followbutton());
// $('.sui-bttn').last().followbutton({following: true}).addClass("follow-button");
// $('.follow-button').click(function() { $(this).followbutton("toggle"); });
// $('.follow-button').on("follow unfollow", function(e) { console.log(e); });
/*1.0*/
/* =============================================================
 * bootstrap-typeahead.js v2.2.1
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.$menu = $(this.options.menu).appendTo('body')
    this.source = this.options.source
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = { .change()
      return this.hide()
    }

  , updater: function (ithis.shown his.shown = f items ? this.lice(0, this.o).indexOf(thicat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return _.escape(item).rep '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).data('value', _.escape(item))
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(   }

        }

      pi', $.proxy(this.mousn'
      }

      }

    [40,38,9,13,27]ssRepeat) reropagation(t(function (reventDefault()
 e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead sui-dropdown-menu sui-opt-in"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /*   TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeaheadt()
    $this.typeahead($this.data())
  })

}(window.jQuery);
/*1.0*/
!function( $ ){
  /**
    Displays a timestamp, optimized for caching.
    Generated HTML content displays time in UTC but is post-processed by Javascript to adjust for the user's timezone.

    @class timestamp
    @constructor
    @param {String} datetime Date and time of timestamp. Should be a valid date with an optional time string. Set via the datetime attribute.
    @param {Boolean} utc If true, timestamp will display in UTC when format is not 'from_now'. Set via utc attribute.
    @param {String} format How to format timestamp - should be 'from_now', or a strftime formatted string. Any text that should be treated as static should be surrounded by [ and ]. Set via data-timestamp-format
  */
  $.fn.timestamp = function() {
    return this.each(function() {
      var $this = $(this),
          timestamp = $this.attr('datetime'),
          utc = $this.attr('utc'),
          format = $this.attr('data-timestamp-format') || '%b %e, %Y [at] %l:%M %p';
      if( format == 'from_now' ) {
        timestamp = moment(timestamp).fromNow();
      }
      else if (utc)
        timestamp = moment(timestamp).utc().strftime(format);
      else {
        timestamp = moment(timestamp).strftime(format);
      }

      $this.text(timestamp);
    });
  };

  $(function() {
    $('[data-js-postprocess="timestamp"]').timesprocess="timestamp"]').timestamp();
    });
  });

}( window.jQuery );
/*1.0*/
/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var tipselector = 'a[rel~=tooltip], button[rel~=tooltip]',

  /**
    Create a tooltip.

    @class SuiCoreComponents.Tooltip
    @constructor
    @param {Object} element Tooltip element
    @param {Object} [options] Optional configurations
    @param {Boolean} [options.animation = false] When true, applies a CSS fade transition to the tooltip
    @param {Boolean} [options.html = false] Insert html into the tooltip. If false, jQuery's text method will be used to insert content into the dom. Use text if you're worried about XSS attacks.
    @param {String} [options.placement = 'top'] How to position the tooltip relative to it's element- top|bottom|left|right
    @param {String} [options.selector = false] If a selector is provided, tooltip objects will be delegated to specified targets
    @param {String|Function} [options.title = ''] Default title value if title tag isn't present
    @param {String} [options.trigger = 'hover'] How tooltip is triggered - hover|focus|manual
    @param {Number|Object} [options.delay = 0] Delay showing and hiding the tooltip in milliseconds. If a number is supplied, delay is applied to both hide/show. Object structure is delay: {show: 500, hide: 100}
    @param {String | false} [options.container = 'body'] Appends tooltip to a specific element
    @param {String | false} [options.class = false] Custom class to add to tooltip when shown
    @param {String} [options.template] Template to use when creating tooltip. Defaults to '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  */
  Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype r: '' })) :
        this.fixTitle()
    },

    /**
      Get a tooltip's options and optionally supply additional configurations.
      Passed options will override options set via data attributes.

      @method getOptions
      @param {Object} [options] Additional options to set on tooltip
      @return {Object} Returns tooltip's options set
    */
    getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    },

    /**
      Handles transitions and delay before showing tooltip.
      Fires when a tooltip is hovered over or gains focus.

      @method enter
      @param {Object} e Triggering event
    */
    enter: function (e) {
      var defaults = $.fn[this.type].defaults,
          options = {},
          self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in' && $.contains(document, self.$element[0])) self.show()
      }, self.options.delay.show)
    },

    /**
      Handles transitions and delay before hiding tooltip.
      Fires when mouse leaves tooltip area or tooltip loses focus.

      @method leave
      @param {Object} e Triggering event
    */
    leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    },

    /**
      Make a tooltip visible.

      @method show
    */
    show: function () {
      var $tip,
          pos,
          actualWidth,
          actualHeight,
          placement,
          tp,
          e = $.Event('show')
      if (this.hasContent() && this.enabled) {
        /**
          Fires when show() is called on a tooltip

          @event show
        */
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        if ( this.options['class'] ) {
          $tip.addClass(this.options['class']);
        }

        if ( this.options.id ) {
          $tip.attr('id', this.options.id );
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        /**
          Fires when a tooltip has been made visible to the user

          @event tooltip:shown
        */
        this.$element.trigger('tooltip:shown')
      }
    },

    /**
      Position a tooltip with offset and placement.
      Called automatically when a tooltip is shown.

      @method applyPlacement
      @param {Object} offset Coordinates for tooltip in relation to document. Uses format {top: 5, left: 10}
      @param {String} placement How to position tooltip in relation to it's element - top|bottom|left|right
    */
    applyPlacement: function(offset, placement, cssModule){
      var $tip = this.tip(),
          width = $tip[0].offsetWidth,
          height = $tip[0].offsetHeight,
          actualWidth,
          actualHeight,
          delta,
          replace

      $tip
        .offset(offset)
        .addClass('in');

      $tip.addClass( cssModule ? (cssModule + '--' + placement) : placement );

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    },

    replaceArrow: function(delta, dimension, position){
      if( !this.arrow ) {
        return; // sui-popover has an automatic arrow
      }

      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    },

    /**
      Set the content of a tooltip to it's title.

      ss('fade in top bottom left right')
    },

    /**
      Hide a tooltip.

      @method hide
      @retutooltip:hidden')

      return this
    },

    fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    },

    /**
    Check if a tooltip has content.

    @method hasContent
    @return Returns the tooltip's title
    */
    hasContent: function () {
      return this.getTitle()
    },

    /**
      Get the coordinates and dimensions of tooltip's element.
      Used to help calculate the position of the tooltip.

      @method getPosition
      @return {Object} Returns element's width, height, and offset
    */
    getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth,
        height: el.offsetHeight
      }, this.$element.offset())
    },

    /**
      Get the title of a tooltip.

      @method getTitle
      @return Returns the tooltip's title
    */
    getTitle: function () {
      var title,
          $e = this.$element,
          o = this.options;

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    },

    /**
      Get the tooltip element.

      @method tip
      @return Returns the existing tooltip element, or if one does not exist, creates one from the supplied template
    */
    tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    },

    /**
      Get a tooltip's arrow element.

      @method arrow
      @return Returns the tooltip arrow element
    */
    arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },

    /**
      Check if tooltip has a parentNode, and if not, hide the tooltip.

      @method validate
    */
    validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    },

    /**
      Enable a tooltip.

      @method enable
    */
    enable: function () {
      this.enabled = true
    },

    /**
      Disable a tooltip.

      @method disable
    */
    disable: function () {
      this.enabled = false
    },

    /**
      Toggle a tooltip's enabled state.

      @method toggleEnabled
    */
    toggleEnabled: function () {
      this.enabled = !this.enabled
    },

    /**
      Toggle the visibilty of a tooltip.

      @method toggle
      @param {Object} [e] Optional triggering event
    */
    toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    },

    /**
      Destroy a tooltip.

 + this.type).removeData(this.type)
    },

    /**
      Remove a tooltip from the DOM.

      @method clear
    */
    clear: function(){
      var that = this, $tip = this.tip();
      $tip.removeClass('in');
      $tip.remove();
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip;

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('tooltip'),
          options = typeof option == 'object' && option;
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)));
      if (typeof option == 'string') data[option]();
    })
  }

  $.fn.tooltip.Constructor = Tooltip;

  $.fn.tooltip.defaults = {
    animation: false,
    selector: false,
    placement: 'top',
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: 'body',
    'class': false,
    id: false
  };

  // add global method to clear tooltips on the $UI toolkit
  function clearTooltips() {
    $(tipselector).tooltip('hide');
  }
  window.$UI.clearTooltips = clearTooltips;

 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

jQuery(document).ready(function(){
  jQuery('.sui-body a[rel~=tooltip]').tooltip({});
});
/*1.0*/
/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var popoverselector = "a[rel=popover], button[rel=popover]", Popover = function ( element, options ) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover,

    setContent: function () {
      var $tip = this.tip(),
          title,
          content,
          footer;

      if(!this.options.target) {
        title = this.getTitle(),
        content = this.getContent(),
        footer = this.getFooter();

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
        $tip.find('.popover-footer')[this.options.html ? 'html' : 'text'](footer)
      }

      $tip.removeClass('fade in top bottom left right')
    },

    hasContent: function () {
      return this.getTitle() || this.getContent() || this.getFooter();
    },

    getContent: function () {
      var content, $content,
          $e = this.$element,
          o = this.options

      $content = this.$element.find('.popover');
      if($content.length) {
        return $content;
      }

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    },

    /**
      Remove a popover from view.

      @method hide
      @param {Object} e Hide event
    */
    hide: function ( e ) {
      var that = this,
          $tip = this.tip();

      e && e.preventDefault();

      if (!this.isShown) return;

      this.isShown = false;

      escape.call(this);

      /**
        Fires when hide() is called on a popover.

        @event hide
      */
      this.$element.trigger('popover:hide         $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach();

      this.$element.trigger('popover:hidden');

      $UI.receivePopoverClose(this);
    },

    getFooter: function() {
      var footer,
          $e = this.$element,
          o = this.options

      footer = (typeof o.footer == 'function' ? o.footer.call($e[0]) : o.footer)
        || $e.attr('data-footer')

      return footer
    },

    tip: function () {
      if (!this.$tip) {
        this.$tip = this.options.target ? $(this.options.target) : $(this.options.template);
      }
      return this.$tip
    },

    destroy: function () {
      this.hide();
      this.$element.off('.' + this.type).removeData(this.type)
    },

    /**
      Make a tooltip visible.

      @method show
    */
    show: function () {
      var $tip,
          pos,
          actualWidth,
          actualHeight,
          placement,
          tp,
          e = $.Event('show')

      if (this.options.target || (this.hasContent() && this.enabled)) {
        /**
          Fires when show() is called on a tooltip

          @event show
        */
        this.$element.trigger(e)

        if (e.isDefaultPrevented()) return

        $tip = this.tip()
        this.setContent();

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        if ( this.options['class'] ) {
          $tip.addClass(this.options['class']);
        }

        if ( this.options.id ) {
          $tip.attr('id', this.options.id );
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement;

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' });

        if(this.options.target) {
          $tip
            .on('click.dismiss.popover', '[data-dismiss="popover"], [data-dismiss="clickover"]', $.proxy(this.hide, this))
            .on('click', function(e){e.preventDefault();});
        }

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        this.attached = true;
        pos = this.getPosition()
        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)

        this.isShown = true;
        $tip.addClass('in');
        escape.call(this);

        /**
          Fires when a tooltip has been made visible to the user

          @event tooltip:shown
        */
        this.$element.trigger('popover:shown')
        if(this.$element.parents('.sui-dropdown-menu').length == 0 ){
          $UI.registerPopover(this, this.hide);
        }
      }
    },

    /**
      Get a tooltip's arrow element.

      @method arrow
      @return Returns th$arrow || this.tip().find(".arrow")
    }
  });

  function escape() {
    var that = this;
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.popover', function ( e ) {
        e.which == 27 && that.hide();
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.popover');
    }
  }

 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('popover'),
        options = $.extend({}, $.fn.popover.defaults, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('popover', (data = new Popover(this, options)));

      if(typeof option == 'string') {
        data[option]();
      } else if(options.show && options.target) {
        data.show();
      }
    });
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right',
    trigger: 'focus hover',
    content: '',
    footer: '',
    html: true,
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-footer"></div></div>'
  });

  $.fn.popover.clickover_defaults = {
    keyboard: true,
    show: true,
    placement: 'bottom',
    container: false,
    trigger: 'click'
  };

  $.fn.clickover = $.fn.popover;

 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

  $(function() {
    // close on click outside
    $('html').on('click.popover.data-api', function(e) {
      if (e.isDefaultPrevented()) return;
      var clickovers = $("[d  $elm.popover("hide");
        }
      });
    });

    $('body').on('click.popover.data-api', '[data-toggle="popover"], [data-toggle="clickover"]', function(e) {
      var $this = $(this), href,
        target = $this.attr('data-target' || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) /*strip for ie7*/,
        option = $this.data('popover') ? 'toggle' : $.extend({}, $.fn.clickover.clickover_defaults, $this.data(), $(target).data());

      e.preventDefault();

      if (_.isObject(option)) {
        option.target = target;
        $this.popover(option)
      }

    });
  });
}(window.jQuery);

// init popovers on document load
jQuery(document).ready(function(){
  jQuery('.sui-body a[rel~=popover]').popover({});
});
/*1.0*/
/* =========================================================
 * bootstrap-modal.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */



!function( $ ){

  "use strict"

  /* MODAL CLASS DEFINITION
   * ====================== */
  /**
   Create a modal.

   @class SuiCoreComponents.Modal
   @constructor
   @param {Object} content Modal element
   @param {Object} [options] Optional configurations
   @param {Boolean} [options.backdrop = true] When true, includes a modal-backdrop element
   @param {Boolean} [options.keyboard = true] When true, modal can be closed by pressing the escape key
   @param {Boolean} [options.isdraggable = false] When true, user can reposition modal by dragging it
   @param {Boolean} [options.show = true] When true, show modal immediately after activation
   @param {Boolean} [options.destroyOnHide = false] When true, modal is automatically destroyed when hidden
   */
  var Modal = function ( content, options ) {
    this.options = options
    this.$element = $(content)
      .on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
      .appendTo(document.body) // move the modal so that it is in the same IE layer context as the backdrop
                               // and above every element on the page
    this.options.keyboard = (_.isUndefined(this.$element.data('keyboard'))) ? true : this.$element.data('keyboard');
    this.options.size = this.options.size || this.$element.data('size');
  }

  Modal.prototype = {

    constructor: Modal,

    /**
     Toggle a modal's visibilty.

     @method toggle
     @return Returns modal's show or hide function
     */
    toggle: function () {
      return this[!this.isShown ? 'show' : 'hide']()
    },

    /**
     Make a modal visible.

     @method show
     */
    show: function () {
      var that = this

      if (this.isShown) return

      $('body').addClass('modal-open')

      this.isShown = true

      /**
       Fires when show() is called on a modal.

       @event show
       */
      this.$element.trigger('show')

      this.position();
      $(window).off('resize.modal-reposition');
      $(window).on('resize.modal-reposition', _.debounce( $.proxy( this.position, this), 100 ) );

      if (this.options.isdraggable) {
        if(typeof $(this.$element).draggable === 'function') {
          $(this.$element).draggable();
          $(this.$element).draggable( "option", "handle", "div.modal-header");
        } else {
          console.error("jQueryUI is required for draggable dialogs.");
        }
      }

      escape.call(this)
      backdrop.call(this, function () {
        var transition = $.support.transition && that.$element.hasClass('fade')

        !that.$element.parent().length && that.$element.appendTo(document.body) //don't move modals dom position

        that.$element
          .show()

        var windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        if( typeof ($UI.mobileView) === 'function' && $UI.mobileView() ) {
          var header = that.$element.find('.modal-header');
          var footer = that.$element.find('.modal-footer');
          var body = that.$element.find('.modal-body');
          var height = windowHeight;
          height -= ( header.outerHeight() + footer.outerHeight() + that.$element.find('.footer-actions').outerHeight() );
          height -= ( parseInt( body.css('padding-top') ) + parseInt( body.css('padding-bottom') ) );

          body.css({ 'max-height': height+'px' });

          if( that.$element.outerHeight() > windowHeight ) {
            body.css({ height: height+'px', 'max-height': height+'px' });
          }

          jQuery(that.$element).center(); // recenter now that there's a set height
        }

        if (transition) {
          that.$element[0].offsetWidth // force reflow
        }

        that.$element.addClass('in')

        /**
         Fires after a modal has been made visible to the user (waits for CSS transitions to complete).

         @event shown
         */
        transition ?
          that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
          that.$element.trigger('shown')
      })
    },

    /**
     Position a modal in the middle of the window.
     Called automatically when a modal is shown, but useful for recentering a modal if necessary.

     @method position
     */
    position: function(){
      this.$element.css("left", (window.innerWidth - this.$element.outerWidth())/2 + "px");
      // keep the title of long modals visible
      var winHeight = window.innerHeight;
      var outerHeight = this.$element.outerHeight();

      // align in the center of the screen
      if( this.options.size === 'mega' ) {
        this.$element.css("top", '');
      }
      else {
        this.$element.css("top", (window.innerHeight - this.$element.outerHeight()) / 2);
      }
    },

    /**
     Remove a modal from view.

     @method hide
     @param {Object} e Event
     */
    hide: function ( e ) {
      e && e.preventDefault()

      if (!this.isShown) return

      if (this.options.backdrop && !this.options.keyboard && e && e.currentTarget && $(e.currentTarget).hasClass('modal-backdrop')){
        return;
      }

      var that = this
      this.isShown = false

      $('body').removeClass('modal-open')

      escape.call(this)

      /**
       Fires when hide() is called on a modal, before the CSS transition if any.

       @event hide
       */
      this.$element
        .trigger('hide')
        .removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        hideWithTransition.call(this) :
        hideModal.call(this)
    },

    /**
     Destroy a modal.

     @method destroy
     */
    destroy: function() {
      this.$element.remove();
    }

  }


  /* MODAL PRIVATEut)er(f (callback) {
      callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
    if( this.options.dent).off('keyup.dismiss.modal')
    }
  }


  /* MODAL PLUGIN DEFINITION
   * ======================= */

  $.fn.modal = function ( option ) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('modal'),
        options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
    backdrop: true,
    isdraggable: false,
    keyboard: true,
    show: true,
    destroyOnHide: false
  }

  $.fn.modal.Constructor = Modal


  /* MODAL DATA-API
   * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this), href,
        $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) /*strip for ie7*/,
        option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())
      e.preventDefault()

      $target.modal(option)
    })
  })

}( window.jQuery );
/*1.0*/
/* ============================================================
 * bootstrap-dropdown.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function( $ ){

  "use strict"

 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var dropSelector = '[data-toggle="dropdown"]', Dropdown = function ( element ) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle);
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open');
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown,

    toggle: function ( e ) {
      var $this = $(this),
          selector = $this.attr('data-target'),
          $parent,
          isActive,
          contentRect,
          contentPosition,
          contentLeftPosition;

      if (!selector) {
        selector = $this.attr('href');
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
      }

      $parent = $(selector);
      $parent.length || ($parent = $this.parent());

      isActive = $parent.hasClass('open');

      Dropdown.prototype.clearMenus();

      if (!isActive){
        this.$element = $parent;
        this.$contentElement = $parent.find('.sui-dropdown-menu');


        var relatedTarget = { relatedTarget: this }
        $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

        $this.toggleClass('active');

        $parent.toggleClass('open');

        contentRect = this.$contentElement[0].getBoundingClientRect(),
        contentPosition = this.$contentElement.offset(),
        contentLeftPosition = contentPosition.left + contentRect.width;

        if(contentLeftPosition >= window.innerWidth) {
          this.$contentElement.addClass('sui-dropdown_content--align-right');
        } else if(contentPosition.left < 0) {
          this.$contentElement.addClass('sui-dropdown_content--align-left');
        }

        $parent.trigger('shown.bs.dropdown', relatedTarget)
      }

      return false;
    },

    clearMenus: function() {
      $(dropSelector).each( function() {
        var relatedTarget = { relatedTarget: this }
        $(this).removeClass('active');
        $(this).parent().removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
      });
    }

  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( option ) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('dropdown');
      if (!data) $this.data('dropdown', (data = new Dropdown(this)));
      if (typeof option == 'string') data[option].call($this);
    })
  }

  $.fn.dropdown.Constructor = Dropdown;


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html').on('click.dropdown.data-api', Dropdown.prototype.clearMenus);
    $('body').on('click.dropdown.data-api', dropSelector, Dropdown.prototype.toggle);
  })

}( window.jQuery );
/*1.0*/
!function($) {
  window.JST = (window.JST || {});
  window.JST.helpers = {}; // javascript template helpers
  $l-nav_mobile-toggle').is(':visible');
  }
}(window.jQuery);
/*1.0*/
//














;
/*1.0*/
!function ($) {
  "use strict"; // jshint ;_;

  //***************************************************************************
  // Spiceworks global Marionette application.  All other "applications" are
  // Marionette modules off of this central app.  This gives us a central app
  // for lifecycle and event management.
  // Author: georger@spiceworks.com
  //***************************************************************************
	$UI.app = new Backbone.Marionette.Application();

  _.extend($UI.app, {
    _adContext: '',
    _autoRefreshAds: true,
    _showDeprecationMsg: true,
    pluginEventBus: new Backbone.Wreqr.EventAggregator(),

    init: function(){
      this.registerEventHandlers();
    },

    disableAdRefresh: function(){
      this._autoRefreshAds = false;
    },

    enableAdRefresh: function(){
      this._autoRefreshAds = true;
    },

    trackPageView: function(url){
      // Update the GA page view stats with the current url.  If this is a Backbone
      // app with history, the # is replaced with a / so that the url matches what
      // would otherwise be used if pushState were being used with history

      var ctx = null;
      if (location.pathname !== '/') {
        ctx = location.href.substr(location.href.indexOf(location.pathname));
        ctx = ctx.replace('/#', '\/').replace('#', '\/');
      }
      else {
        ctx = '/' + location.search;
      }

      if(Backbone.history.ctx != ctx || Backbone.history.ctx == null){
        if(typeof GoogleAnalytics !== 'undefined' && typeof GoogleAnalytics.trackPageview === 'function'){
          GoogleAnalytics.trackPageview();
        } else if(window._gaq) {
          window._gaq.push(['_trackPageview', ctx]);
        } else if(window._gua) { // universal analytics
          window._gua('send', {'hitType': 'pageview', 'page': ctx});
        }
        Backbone.history.ctx = ctx;
      }
    },

    trackPageEvent: function(data){
      if(!data || !data.eventCategory || !data.eventAction){
        throw new Error('google events require category and action arguments');
      }
      if(window._gua){
        _.extend(data, {'hitType':'event'});
        window._gua('send', data);
      }
    },

    setGADimension: function(dim, val){
      if(window._gua){
        console.log("set ga dim %O, val %O", dim, val);
        window._gua('set',dim,val);
      }
    },

    updateAds: function(url){
      if(window.Application === undefined || !Application || _.isUndefined(Application) || _.isUndefined(Application.refreshAd) ){ return; }

      var ctx = location.href.replace('#', '\/');
      Application.refreshAd({ref: ctx});
    },

    registerEventHandlers: function(){

      // Start Backbone.history after the app has been initckbone.history.start();
        }
      });

      // Track the page view and optionally trigger ad refreshes once the navigate event is 
      // handled.  Navigate events refresh ads by default but can be optionally configured 
      // not to by calling the enableAdRefresh/disableAdRefresh methods.
      this.on('navigate', function(url){
        this.trackPageView(url);
        if(this._autoRefreshAds){
          this.trigger('ads:refresh', url);
        }
      });

      this.on('ads:refresh', function(url){
        var uri = url || '';
        $UI.app.updateAds(url);
      });

      // Track google universal analytics events
      this.on('ga:event', function(){
        this.trackPageEvent.apply(this, arguments);
      });

      // Set google universal analyticsDimension.apply(this, arguments);
      });
    }
  });

  $UI.app.addInitializer(function(){
    //Tell Backbone Relational to look on our app for Module/Model storage.
    // By default, it only knows about the window scope, which typically we
    // shouldn't be storing anything in.
    Backbone.Relational.store.addModelScope($UI.app);

    $UI.app.init();
  });

  //***************************************************************************
  // Setup the history navigate event to broadcast on the global event bus
  // Author: georger@spiceworks.com
  //********************************************************************    $UI.app.trigger('navigate', url);
  });

  //***************************************************************************
  // Setup the history route event to broadcast a 'navigate' event on the global event bus
  // Author: georger@spiceworks.com
  //*****************************************************************   $UI.app.trigger('navigate', args);
  });

  //***************************************************************************
  // Start the global application on document ready.  This creates some race conditions
  // where routes on the initial URL do no load because history has been started before
  // module routers have registered (the fragment has been matched and no handlers called
  // because they weren't there yet)
  // Author: georger@spiceworks.com
  //***************************************
  $(function(){
		$UI.app.start({});
	});

}(window.jQuery);
/*1.0*/
$UI.app.module("SUI_Shared", function (SUI_Shared, App, Backbone, Marionette, $, _) {
  SUI_Shared.Constants = SUI_Shared.Constants || {};

  _.extend(SUI_Shared.Constants, {
    Commands: {
      Stats: {
        Register: {
          AppStat: 'sui:stats:register:appstat',
          GAStat: 'sui:stats:register:gastat'
        },
        Unregister: 'sui:stats:unregister'
      }
    }
  });
});
/*1.0*/
$UI.app.module("SUI_Shared.Stats", function (Stats, App, Backbone, Marionette, $, _) {
  var NS_SUI_Shared = App.module("SUI_Shared");

  //Worker methods...

  var _recordAppStat = function (name) {
    name = name.replace(/:/g, '_');
//    console.log("Recording App Stat: " + name);
    SPICEWORKS.stats.record_app_stat(name);
  };
  var _recordGAStat = function (name, options) {
    name = name.replace(/:/g, '_');
//    console.log("Recording GA Stat: " + name + ' ' + options);
    SPICEWORKS.stats.record(name, options);
  };

  /************************************************************************************************************
  * Registration Methods
  ************************************************************************************************************/

  // Record an app stat every time one of the events registered is fired...
  var _delegateAppStatEvents = function (mo    _recordAppStat(event);
      })
    });
  };

  // Record a Google Analytics on event, accepting options to pass with event name...
  var _delegateGAStatEvents = function (moordGAStat(event, options);
      })
    });
  };

  var _unregister = function(module) {
    Stats.stopListening(module);
  }

	App.commands.setHandler(NS_SUI_Shared.Constants.Commands.Stats.Register.AppStat, _delegateAppStatEvents);
	App.commands.setHandler(NS_SUI_Shared.Constants.Commands.Stats.Register.GAStat,  _delegateGAStatEvents);
	App.commands.setHandler(NS_SUI_Shared.Constants.Commands.Stats.Unregister,       _unregister);
});
/*1.0*/
!(function($){
  /* Bootstrap style plugin for updating progress bars on the page */

  $UI.progressBar = function(percent, options) {
    if (!options) options = {};
    if (percent) options.progress = percent;
    return jQuery(new $UI.Views.ProgressBar(options).render().el);
  }

  JST.helpers.progressBar = function(percent, options) {
    return $('<div>').append($UI.progressBar(percent, options)).html();
  }

  var ProgressBar = function ( element ) {
    this.$element = $(element);
    this.options = $.fn.progressBar.defaults;
  };

  ProgressBar.prototype = {
    constructor: ProgressBar,
    update: function(percentage) {
      percentage = parseInt(percentage)

      if (percentage > 100) percentage = 100;
      if (percentage < 0 || !percentage)   percentage = 0;

      this.$element.find('.bar').css("width", I18n.toPercentage(percentage, {precision: 0}));
      this.$element.find('.percent').html(I18n.toPercentage(percentage, {precision: 0}));
    },
    activate: function() {
      this.$element.addClass('active')
    },
    deactivate: function() {
      this.$element.removeClass('active')
    }
  };

  $.fn.progressBar = function(method, option) {
    return this.each(function () {
      var $this = $(this),
      data = $this.data('progress');
      if (!data) $this.data('progress', (data = new ProgressBar(this)));

      if (typeof(method) == 'string') data[method](option);
    });
  };

  $.fn.progressBar.defaults = {};
  $.fn.progressBar.Constructor = ProgressBar;

  /* Backbone view for backbone apps and for HTML creation */
  $UI.Views.ProgressBar = Backbone.Marionette.ItemView.extend({
    template: _.template('<div class="bar sui-progress-bar_bar" style="width: <%- percent %>">\
  <% if(showPercent) { %><span class="percent moving"><%- percent %rogress-bar--' + this.options.size;
    },
    modelEvents: {
      'change:progress': 'update'
    },
    initialize: function(options){
      if (!options) options = {};
      defaults = {showPercent: true, active: false, progress: 0};
      this.options = _.extend(defaults, options);
    },
    percentage: function() {
      var progress;
      if (this.model) progress = this.model.get('progress');
      else if (this.options.progress) progress = this.options.progress;

      var percentage = parseFloat(progress);
      if (percentage > 100) percentage = 100;
      if (percentage < 0)   percentage = 0;

      return pe this.options.showPercent,
      };
    },
    update: function() {
      $(this.el).progressBar('update', this.percentage())
    }
  });
}(jQuery));
/*1.0*/
$UI.Views.Builder = Backbone.Marionette.ItemView.extend({
	template: _.template(""),

	constructor: function(){
		this.cid = _.uniqueId('view');
		this._ensureElement();
		this.initialize.apply(this, arguments);
		this.delegateEvents();
	},

	initialize: function(){
	erializeData: function(){
		return {};
	},

	onRender: function(){
	ender();
			that.function(view){
			view.close();
		});
	},

	appendHtml: function({
		return this.render().el.outerHTML;nstructor.prototype;
		return new F();
	};

	//Pass the arguments 'args' to the constructor, then concat the result
	var buildWithArgs = function(constructor, args){
		var builder = build(constructor, args);
		return builder.concat();
	};

	//Special case of buildWithArgs where the last argument is taken to be a callback
	var buildWithArgsAndCallback = function(constructor, args){
		var callback = _.last(args);
		args = _.initial(args);

		var builder = build(constructor, args);
		callback(builder);

		return builder.concat();
	};

})();
/*1.0*/
(function(){
	// Shadow line
	$UI.Views.ShadowLine = $UI.Views.Builder.extend({
		tagName: "div",
		className: "shadow-line",
		template: _.template('&nbsp;'),
    initialize: function(){
    }
	});

	//Icon
	var icon_types =
  [
    "alert-bell", "bookmark", "calculator", "calendar", "cart", "certificate", "check", "clock",
    "close-circular", "close", "compare", "copy", "down-chevron", "down", "download", "drag",
    "edit", "email", "exclamation-triangle", "exclamation", "eye-closed", "file", "flag", "gear",
    "globe", "group", "hourglass", "info", "laptop", "left-chevron", "left", "location", "lock",
    "message", "minus", "next-circular", "paperclip", "plus", "previous-circular", "printer", "question",
    "refresh", "reply-bubble", "reply", "right-chevron", "right", "scan", "screwdriver", "search", "server",
    "share", "stats", "trash", "up-chevron", "up", "user-portal", "viewcolumns", "viewicons", "viewlist",
    "viewtiles", "visible", "alert-error", "alert-info", "alert-neutral", "alert-success", "alert-warning",
    "error-circular", "error", "event-spice", "info-circular", "pepper", "ribbon", "star-empty", "star-filled",
    "star-half", "success-circular", "success", "topic-flag", "event-badge", "event-best-answer",
    "event-follow", "event-helpful-post", "event-message", "event-reply", "event-tag"
  ]

	var icon_colors = ["gray", "blue", "white"];

	$UI.Views.Icon = $UI.Views.Builder.extend({
		tagName: "i",

		initialize: function(type, color){
			this.type  = type;
			this.color = color || "gray";

			if(!_.contains(icon_types, this.type))
				throw new Error("Unrecognized icon type: '" + this.type + "'.");
			if(!_.contains(icon_colors, this.color))
				throw new Error("Unrecognized icon color: '" + this.color + "'.");

			$UI.Builder.prototype.initialize.apply(this, []);
		},

		onRender: function(){
			if(this.color !== "gray")
				this.$el.addClass("sui-icon sui-icon--" + this.color);
			this.$el.addClass("sui-icon sui-icon-" + this.type);
		}
	});
})();
/*1.0*/
// A modal dialog view
//
// Users of this class should subclass it and provide these attributes:
//   - title:     the text that will appear at the top of the modal
//   - template:  a template that will be rendered inside the modal body
//

$UI.Views.BaseModal = Backbone.Marionette.Layout.extend({
	opts: {}, // options is reserved for Marionette
	initialize: function(option){
		this.init(option);
	},

	init: function(option){
			if(!_.isObject(option)){ throw "$UI.Views.BaseModal invoked with non-object options."}
		var temp = _.clone($UI.Views.Defaults.Modal);
		_.extend(temp, this.opts, option);
		this.opts = temp;
		// process options as needed
		this.contents = (_.isFunction(this.opts.contents))? this.opts.contents() : this.opts.contents;
		this.title = (_.isFunction(this.opts.title))? this.opts.title() : this.opts.title;
		this.className = this.build_classes();
		this.attributes = this.build_attributes();
	},

	_baseTemplate: _.template('<div class="modal-header">\
  <% if(_options.closable){\
      print(\'<button class="close" data-dismiss="modal">×</button>\');\
    } %>\
        <h3><%- _title %></h3>\
</div>\
<div class="modal-body">\
        <%= _template(subclassTemplateHelpers) %>\
</div>'),


	_baseTemplateHelpers: function(){
		return {
			_title: this.title,
			_contents: this.contents,
			_template: this.opts.template,
			_nette.getOption(this, "_baseTemplate");
	},

	mixinTemplateHelpers: function(target){
		target = Backbone.Marionette.View.prototype.mixinTemplateHelpers.call(this, target);

		var baseTemplateHelpers = this._baseTemplateHelpers;
		if (_.isFunction(baseTemplateHelpers)){
			baseTemplateHelpers = baseTemplateHelpers.call(this);
		}

		return _.extend(baseTemplateHelpers, {subclassTemplateHelpers: target});
	},

	//Convenience functions to show/hide this view
	show: function(){
		//We haven't ever rendered (isClosed is dynamically set),
		// or we were manually closed at some point...
		if (typeof this.isClosed === 'undefined' || true === this.isClosed) {
			this.render();
		}

		this.$el.modal("show");
	},

	hide: function(){
		this.$el.modal("hide");
	},

	//Modals are always attached directly to the 'body' element
	onRender: function(){
		jQuery('body').append(this.$el);
		// have to manually apply attrs & classes at render time
		this.$el.addClass(this.build_classes());
		this.$el.att$el.modal("hide");
		this.$el.remove();
	},

	build_classes: function(){
		var css_classes = ['modal', 'hide', 'sui-opt-in', 'in'];
		if(this.opts.type != $UI.ModalTypes.MODAL){
			css_classes.push('modal-' + this.opts.type);
		}
		(!this.opts.show)? css_classes.push('hide') : null;
		(!_.isNull(this.opts.size))? css_classes.push('dialog-size' + this.opts.size) : null;
		(!_.isNull(this.opts.css_class))? css_classes.push(this.opts.css_class) : null;
		(this.$('.footer-actions').length > 0) ? css_classes.push('has-footer-in-body') : null;
		return css_classes.join(' ');
	},

	build_attributes: function(){
		var attrs = {};
		attrs['data-isdraggable'] = this.opts.draggable;
		attrs['data-keyboard'] = this.opts.closable;
		attrs['data-backdrop'] = this.opts.backdrop;
		(this.opts.dismissable) ? attrs['data-dismissable'] = this.opts.dismissable : null;
		(this.opts.id) ? attrs['id'] = this.opts.id : null;
		return attrs;
	}

});

$UI.ModalTypes = {
	MODAL: 'modal',
	DIALOG: 'dialog',
	SHEET: 'sheet',
	ALERT: 'alert'
}

// default options for dialogs
$UI.Views.Defaults = {};
$UI.Views.Defaults.Modal = {
	id: "",
	title: "",
	contents: "",
	template: _.template("<%= _contents %>"),
	draggable: false,
	closable: true,
	backdrop: true,
	show: false,
	size: null,
	modal: true,
	css_class: null,
	type: $UI.ModalTypes.MODAL
}

$UI.Views.Modal = $UI.Views.BaseModal.extend({
	templateHelpers: function(){
		return {
			_contents: this.contents
		};
	}
});

//A modal that renders as a dialog
$UI.Views.ModalDialog = $UI.Views.BaseModal.extend({
	init: function(option){
		if(_.isObject(option)){
			$UI.Views.BaseModal.prototype.init.call(this, _.extend(option, {type: $UI.ModalTypes.DIALOG, backdrop:false}))
		} else {
			throw "$UI.Views.ModalSheet invoked with non-object options."
		}
	},
	templateHelpers: function(){
		return {
			_contents: this.contents
		};
	}
});

//A modal that renders as a sheet
$UI.Views.ModalSheet = $UI.Views.BaseModal.extend({
	initialize: function(option){
		if(_.isObject(option)){
			$UI.Views.BaseModal.prototype.initialize.call(this, _.extend(option, {type: $UI.ModalTypes.SHEET}))
		} else {
			throw "$UI.Views.ModalSheet invoked with non-object options."
		}
	},
	templateHelpers: function(){
		return {
			_contents: this.contents
		};
	}
});

//A modal that renders as an alert window
//This modal cannot be dismissed
$UI.Views.ModalAlert = $UI.Views.BaseModal.extend({
	initialize: function(option){
		if(_.isObject(option)){
			$UI.Views.BaseModal.prototype.initialize.call(this, _.extend(option, {type: $UI.ModalTypes.ALERT, closable: false}))
		} else {
			throw "$UI.Views.ModalAlert invoked with non-turn {
			_contents: this.contents
		};
	}
});
/*1.0*/
$UI._delegates = {};
$UI._delegates.modal = function(modal_type, id, title, contents, options){
	// helper validations
	if(!_.isString(id)){ throw "$UI.modal: Invalid Argument: 'id' must be a string.";}
	if(arguments.length == 5 && !_.isObject(options)){ throw "$UI.modal: Invalid Argument: 'options' must be an object.";}
	opts = options || {};
	// everything is an option so merge them all
	opts.id = id;
	opts.title = title;
	opts.contents = contents;
	return new modal_type(opts);
}

$UI.modal = function(id, title, contents, options){
	return $UI._delegates.modal($UI.Views.Modal, id, title, contents, (options || {}));
}

$UI.dialog = function(id, title, contents, options){
	return $UI._delegates.modal($UI.Views.ModalDialog, id, title, contents, (options || {}));
}

$UI.sheet = function(id, contents, options){
	return $UI._delegates.modal($UI.Views.ModalSheet, id, "", contents, (options || {}));
}

$UI.alert = function(id, contents, options){
	return $UI._delegates.modal($UI.Views.ModalAlert, id, "", contents, (options || {}));
}
;
/*1.0*/
/* ============================================================
 * sui-paginator.js v1.0
 * ============================================================
 * Copyright (c) 2006-16 Spiceworks, Inc.  All Rights Reserved.  https://www.spiceworks.com
 * ============================================================ */


!function( $ ) {

  "use strict"

 /* PAGINATOR PUBLIC CLASS DEFINITION
  * =============================== */

  var Paginator = function ( element, options ) {
    this.init('paginator', element, options)
  };

  Paginator.prototype = {

    constructor: Paginator,

    init: function ( type, element, options ) {
      // initializes the Paginator instance and renders where appropriate
      this.type = type;
      this.$element = $(element);
      this.options = this.getOptions(options);
      this.applyOptions();

      var that = this;
      this.$element.on('click', '.sui-previous, .sui-next, .sui-pagination_page-link ', function(e){ that._click(e) });
      this.render();
    },

    getOptions: function ( options ) {
      // get options boilerplate
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())
      return options;
    },

    applyOptions: function(){
      this.collection = null;
      this.hasCollection =  this.options.collection != null;

      if(this.hasCollection){
        // bind to a Backbone.Paginator collection if there is one
        this.collection = this.options.collection;
        if( !_.isUndefined(this.collection.state) ){
          this.pages = this.collection.state.totalPages;
          this.index = this.collection.state.currentPage;
        }
      } else {
        this.pages = this.options.page_count;
        this.index = Math.min(Math.max(1, this.options.current_page), this.options.page_count);
      }
    },

    update: function ( options ){
      this.options = $.extend({}, $.fn[this.type].defaults, options );
      this.applyOptions();
      this.render();
    },

    render: function () {
      // no visibility for empty pages
      if(this.pages <= 1){return;}
      var prev, next, items = "";

      prev = this.options.templates.previous.format(this.index > 1 ?  "" : " disabled");
      next = this.options.templates.next.format(this.index < this.pages ?  "" : " disabled");

      if(this.pages <= 10){
        // we show all the items
        for(var i = 1; i <= this.pages; i++){
          items += this.options.templates.item.format(i, this._isActive(i));
        }
      } else {
        var lbound = Math.max(1, (this.index - 2) );
        var ubound = Math.min(this.pages - 1, lbound + 4);
        lbound = (ubound - lbound == 4)? lbound : ubound - 4;

        if(lbound > 1){
          // always show the first item
          items += this.options.templates.item.format(1, this._isActive(1));
        }

        if(this.index >= 5) {
          // render the prev ellipses
          items += this.options.templates.ellipses;
        }

        for(var i = lbound; i <= ubound; i++){
          // render the items within the 5 slot interval
          items += this.options.templates.item.format(i, this._isActive(i));
        }

        if(ubound <= this.pages - 2) {
          // render the next ellipses
          items += this.options.templates.ellipses;
        }

        if(ubound < this.pages){
          // always show the last item
          items += this.options.templates.item.format(this.pages , this._isActive(this.pages));
        }
      }
      this.$element.html( this.options.templates.container.format(prev + items + next, "pagination-" + this.options.alignment) );
    },

    _isActive: function(i){
      var v = (i == this.index) ? 'active' : "";
      return v
    },

    _click: function(e){
      e.preventDefault();
      e.stopPropagation();

      var $src = $(e.currentTarget);
      if($src.attr('disabled')){
        return
      }
      if($src.hasClass('sui-previous')){
        this.index--;
      }
      else if($src.hasClass('sui-next')){
        this.index++;
      }
      else {
        var data = $src.data("index");
        this.index = data;
      }

      this.gotoPage(this.index);
    },

    gotoPage: function(idx){
      this.index = idx;

      this.render();
      if(this.collection != null){
        // navigate the associated Backbone.Paginator collection
        var promise = this.collectorCollection change failed.");
          }
        });

        if(promise && promise.growl && this.options.growl){
          promise.growl(this.options.growl);
        }
      }
      this.$element.trigger("paginator:change", this.index);
    }
  };


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.paginator = function ( option, arg ) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('paginator'),
        options = typeof option == 'object' && option
      if (!data){ $this.data('paginator', (data = new Paginator(this, options)))}
      else if (typeof option == 'object' && option){
        // re-initialize the control
        data.update(option);
      }

      if (typeof option == 'string'){
        var v = arg;
        data[option](v);
      }
    })
  };

  $.fn.paginator.Constructor = Paginator;

  $.fn.paginator.defaults = {
    page_count: 1,
    current_page:1, /* current page is 0-based */
    collection: null,
    templates: {
      container:  '<div class="sui-pagination {1}"><ul>{0}</ul></div>',
      previous:   '<li class="sui-pagination_entry"><a href="#" class="sui-previous" {0} data-index="-1"><span class="sui-pagination_navigation-label">prev</span></a></li>',
      item:       '<li class="sui-pagination_entry"><a href="#" class="sui-pagination_page-link {1}" data-index="{0}">{0}</a></li>',
      ellipses:   '<li class="sui-pagination_entry"><span class="sui-pagination_ellipses">...</span></li>',
      next:       '<li class="sui-pagination_entry"><a href="#" class="sui-next" {0} data-index="+1"><span class="sui-pagination_navigation-label">next</span></a></li>'
    },
    growl: undefined, /* Options to pass to $UI.app.growl (for requestPager collections) */
    selected_class: 'active',
    alignment: 'center' /* left, center, right */
  };

}( window.jQuery )
;
/*1.0*/







;
/*1.0*/



// Toolkit 3.0











;
