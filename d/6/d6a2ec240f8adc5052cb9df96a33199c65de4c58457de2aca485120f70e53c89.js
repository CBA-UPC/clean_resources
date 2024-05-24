/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
;((function($) {
	'use strict';

	var $scrollTo = $.scrollTo = 

	$scrollTo.defaults = {
		axis:'xy',
		duration: 0,
		limit:true
	};

	
	$.fn.scrollTo = function(target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter:settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this.each(function() {
			// Null target yields nothing, just like jQuery does
			if (target === null) { return; }

			var win = isWin( this ),
				elem = win ? this.contentWindow || window : this,
				$elem = $( elem ),
				targ = target,
				attr = {},
				toff;

			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test( targ )) {
						targ = both( targ );
						// We are done
						break;
					}
					// Relative/Absolute selector
					targ = win ? $( targ ) : $( targ, elem );
					/* falls through */
				case 'object':
					if (targ.length === 0) { return; }
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Get the real position of the target
						toff = (targ = $( targ )).offset();
					}
			}

			var offset = $.isFunction( settings.offset ) && settings.offset( elem, targ ) || settings.offset;

			$.each(settings.axis.split( '' ), ;

			animate( settings.onAfter );

					});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function(elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll' + Dim;

		if ( ! isWin( elem )) {
			return elem[scroll] - $( elem )[Dim.toLowerCase()](); }

		var size = 'client' + Dim,
			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max( html[scroll], body[scroll] ) - Math.min( html[size], body[size] );
	};

	
	// Add special hooks so that window scroll properties can be animated
	$.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
		get: 
		set: 	};

	// AMD requirement
	return $scrollTo;
});
