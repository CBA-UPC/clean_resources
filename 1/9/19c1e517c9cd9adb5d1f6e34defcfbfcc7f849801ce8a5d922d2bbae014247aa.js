/*! jQuery v1.7.2 jquery.com | jquery.org/license */
((window);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:,flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:},a.offset.setOffset||(a.offset.setOffset=a.fn.offset=,)})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.draggable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:destroy:_mouseCapture:_mouseStart:_mouseDrag:_mouseStop:_mouseUp:cancel:_getHandle:_createHelper:_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:_convertPositionTo:_generatePosition:_clear:_trigger:plugins:{},_uiHash:),a.extend(a.ui.draggable,{version:"1.8.21"}),a.ui.plugin.add("draggable","connectToSortable",{start:stop:drag:),a.ui.plugin.add("draggable","cursor",{start:stop:),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:drag:),a.ui.plugin.add("draggable","snap",{start:drag:),a.ui.plugin.add("draggable","stack",{start:),a.ui.plugin.add("draggable","zIndex",{start:stop:)})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.droppable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.resizable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.selectable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.sortable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:destroy:_setOption:_mouseCapture:_mouseStart:_mouseDrag:_mouseStop:cancel:serialize:toArray:_intersectsWith:_intersectsWithPointer:_intersectsWithSides:_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:refresh:_connectWith:_getItemsAsjQuery:_removeCurrentsFromItems:_refreshItems:refreshPositions:_createPlaceholder:_contactContainers:_createHelper:_adjustOffsetFromHelper:_getParentOffset:_getRelativeOffset:_cacheMargins:_cacheHelperProportions:_setContainment:_convertPositionTo:_generatePosition:_rearrange:_clear:_trigger:_uiHash:),a.extend(a.ui.sortable,{version:"1.8.21"})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.accordion.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.autocomplete.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery),jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.button.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.dialog.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.slider.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.tabs.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.datepicker.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.progressbar.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){ts={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],;var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:_toggleClass:a.fn.toggleClass,toggleClass:switchClass:),a.extend(a.effects,{version:"1.8.21",save:restore:setMode:getBaseline:createWrapper:removeWrapper:setTransition:),a.fn.extend({effect:_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:__toggle:a.fn.toggle,toggle:cssUnit:),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:easeInQuad:easeOutQuad:easeInOutQuad:easeInCubic:easeOutCubic:easeInOutCubic:easeInQuart:easeOutQuart:easeInOutQuart:easeInQuint:easeOutQuint:easeInOutQuint:easeInSine:easeOutSine:easeInOutSine:easeInExpo:easeOutExpo:easeInOutExpo:easeInCirc:easeOutCirc:easeInOutCirc:easeInElastic:easeOutElastic:easeInOutElastic:easeInBack:easeOutBack:easeInOutBack:easeInBounce:easeOutBounce:easeInOutBounce:)}(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.blind.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.bounce.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.clip.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.drop.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.explode.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fade.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fold.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.highlight.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.pulsate.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.scale.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.shake.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.slide.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.transfer.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
((jQuery);;

//#########################################################################################################################
//#########################################################################################################################
//#########################################################################################################################
//######################################################____JQ TIPSY____###################################################
//#########################################################################################################################
//#########################################################################################################################
//#########################################################################################################################


// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// releated under the MIT license

(function($) {
    
    function fixTitle($ele) {
        if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
        }
    }
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element);
    }
    
    Tipsy.prototype = {
        show: 
        
        hide: 
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: 
        
        validate: 
        
        enable: function() { this.enabled = true; },
        disable: 
        toggleEnabled:     };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]();
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
                
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        
        
        if (!options.live) this.each(;
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = 
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = 
    
})(jQuery);






//#########################################################################################################################
//#########################################################################################################################
//#########################################################################################################################
//######################################################____JQ URL____#####################################################
//#########################################################################################################################
//#########################################################################################################################
//#########################################################################################################################


// JQuery URL Parser
// Written by Mark Perkins, mark@allmarkedup.com
// License: http://unlicense.org/ (i.e. do what you want with it!)

jQuery.url = function()
{
	var segments = {};
	
	var parsed = {};
	
	/**
    * Options object. Only the URI and strictMode values can be changed via the setters below.
    */
  	var options = {
	
		url : window.location, // default URI is the page in which the script is running
		
		strictMode: false, // 'loose' parsing by default
	
		key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"], // keys available to query 
		
		q: {
			name: "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
		}
		
	};
	
    /**
     * Deals with the parsing of the URI according to the regex above.
 	 * Written by Steven Levithan - see credits at top.
     */		
	var parseUri = function()
	{
		str = decodeURI( options.url );
		
		var m = options.parser[ options.strictMode ? "strict" : "loose" ].exec( str );
		var uri = {};
		var i = 14;

		while ( i-- ) {
			uri[ options.key[i] ] = m[i] || "";
		}

		uri[ options.q.name ] = {};
		uri[ options.key[12] ].replace( options.q.parser, ;

		return uri;
	};

    /**
     * Returns the value of the passed in key from the parsed URI.
  	 * 
	 * @param string key The key whose value is required
     */		
	var key = function( key )
	{
		if ( jQuery.isEmptyObject(parsed) )
		{
			setUp(); // if the URI has not been parsed yet then do this first...	
		} 
		if ( key == "base" )
		{
			if ( parsed.port !== null && parsed.port !== "" )
			{
				return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/";	
			}
			else
			{
				return parsed.protocol+"://"+parsed.host+"/";
			}
		}
	
		return ( parsed[key] === "" ) ? null : parsed[key];
	};
	
	/**
     * Returns the value of the required query string parameter.
  	 * 
	 * @param string item The parameter whose value is required
     */		
	var param = function( item )
	{
		if ( jQuery.isEmptyObject(parsed) )
		{
			setUp(); // if the URI has not been parsed yet then do this first...	
		}
		return ( parsed.queryKey[item] === null ) ? null : parsed.queryKey[item];
	};

    /**
     * 'Constructor' (not really!) function.
     *  Called whenever the URI changes to kick off re-parsing of the URI and splitting it up into segments. 
     */	
	var setUp = 
	
    /**
     * Splits up the body of the URI into segments (i.e. sections delimited by '/')
     */
	var getSegments = function()
	{
		var p = parsed.path;
		segments = []; // clear out segments array
		segments = parsed.path.length == 1 ? {} : ( p.charAt( p.length - 1 ) == "/" ? p.substring( 1, p.length - 1 ) : path = p.substring( 1 ) ).split("/");
	};
	
	return {
		
	    /**
	     * Sets the parsing mode - either strict or loose. Set to loose by default.
	     *
	     * @param string mode The mode to set the parser to. Anything apart from a value of 'strict' will set it to loose!
	     */
		setMode : function( mode )
		{
			options.strictMode = mode == "strict" ? true : false;
			return this;
		},
		
		/**
	     * Sets URI to parse if you don't want to to parse the current page's URI.
		 * Calling the function with no value for newUri resets it to the current page's URI.
	     *
	     * @param string newUri The URI to parse.
	     */		
		setUrl : function( newUri )
		{
			options.url = newUri === undefined ? window.location : newUri;
			setUp();
			return this;
		},		
		
		/**
	     * Returns the value of the specified URI segment. Segments are numbered from 1 to the number of segments.
		 * For example the URI http://test.com/about/company/ segment(1) would return 'about'.
		 *
		 * If no integer is passed into the function it returns the number of segments in the URI.
	     *
	     * @param int pos The position of the segment to return. Can be empty.
	     */	
		segment : function( pos )
		{
			if ( jQuery.isEmptyObject(parsed) )
			{
				setUp(); // if the URI has not been parsed yet then do this first...	
			} 
			if ( pos === undefined )
			{
				return segments.length;
			}
			return ( segments[pos] === "" || segments[pos] === undefined ) ? null : segments[pos];
		},
		
		attr : key, // provides public access to private 'key' function - see above
		
		param : param // provides public access to private 'param' function - see above
		
	};
	
}();



//#########################################################################################################################
//#########################################################################################################################
//#########################################################################################################################
//######################################################____JQ BASE 64____#################################################
//#########################################################################################################################
//#########################################################################################################################
//#########################################################################################################################

	(function($){
		
		var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		
		var uTF8Encode = function(string) {
                    string = string+""; // by vigo
			string = string.replace(/\x0d\x0a/g, "\x0a");
			var output = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					output += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					output += String.fromCharCode((c >> 6) | 192);
					output += String.fromCharCode((c & 63) | 128);
				} else {
					output += String.fromCharCode((c >> 12) | 224);
					output += String.fromCharCode(((c >> 6) & 63) | 128);
					output += String.fromCharCode((c & 63) | 128);
				}
			}
			return output;
		};
		
		var uTF8Decode = 		
		$.extend({
			base64Encode: function(input) {
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;
				input = uTF8Encode(input);
				while (i < input.length) {
					chr1 = input.charCodeAt(i++);
					chr2 = input.charCodeAt(i++);
					chr3 = input.charCodeAt(i++);
					enc1 = chr1 >> 2;
					enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
					enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
					enc4 = chr3 & 63;
					if (isNaN(chr2)) {
						enc3 = enc4 = 64;
					} else if (isNaN(chr3)) {
						enc4 = 64;
					}
					output = output + keyString.charAt(enc1) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4);
				}
				return output;
			},
			base64Decode: 		});
	})(jQuery);




// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){ar s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b="undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
    a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,;if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,;return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,;return e};b.every=b.all=var G=b.some=b.any=b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,};b.invoke=b.pluck=
    b.max=b.min=b.shuffle=b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,.sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=b.sortedIndex=b.toArray=b.size=b.first=b.head=b.take=b.initial=b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=b.compact=b.flatten=b.without=b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
    e=[];a.length<3&&(c=true);b.reduce(d,[]);return e};b.union=b.intersection=b.intersect=b.difference=b.zip=b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
    1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=b.bind=b.bindAll=function(a){var c=
    i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,;return a};b.memoize=b.delay=b.defer=b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(c);return function(){d=this;e=arguments;f||(f=setTimeout(c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=b.once=b.wrap=b.compose=b.after=b.keys=L||b.values=b.functions=b.methods=b.extend=b.pick=b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=b.tap=b.isEqual=b.isEmpty=
    b.isElement=b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=;b.isFunction=function(a){return l.call(a)=="[object Function]"};
    b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=b.isNaN=b.isBoolean=b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=b.isNull=b.isUndefined=b.has=b.noConflict=b.identity=b.times=b.escape=b.result=b.mixin=var N=0;b.uniqueId=
        b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=b.template=
    b.chain=var m=b.prototype=m.prototype;var x=M=b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),;j(["concat","join","slice"],;m.prototype.chain=m.prototype.value=).call(this);


/**
 * CROCKFORD JSON -> https://github.com/douglascrockford/JSON-js/blob/master/json2.js
 */

var JSON;JSON||(JSON={});
(function(){nction m(a,j){var c,d,h,n,g=e,f,b=j[a];b&&("object"===typeof b&&"function"===typeof b.toJSON)&&(b=b.toJSON(a));"function"===typeof i&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?""+b:"null";case "boolean":case "null":return""+b;
    case "object":if(!b)return"null";e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){n=b.length;for(c=0;c<n;c+=1)f[c]=m(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&"object"===typeof i){n=i.length;for(c=0;c<n;c+=1)"string"===typeof i[c]&&(d=i[c],(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+
        e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=;var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;"function"!==typeof JSON.stringify&&(JSON.stringify=;"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)if(Object.prototype.hasOwnProperty.call(b,g)){f=c(b,g);f!==void 0?b[g]=f:delete b[g]}return e.call(a,d,b)}var d,a=""+a;q.lastIndex=0;q.test(a)&&(a=a.replace(q,);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    "]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+a+")");return typeof e==="function"?c({"":d},""):d}throw new SyntaxError("JSON.parse");})})();



