/**
 * Process ads with cache busting 'On'
 */
var advanced_ads_layer_cache_busting;
if ( ! advanced_ads_layer_cache_busting ) {
	advanced_ads_layer_cache_busting = {
        doc_loaded: false,
        bufferedAds: [],

        flush: function() {
            var _bufferedAds = this.bufferedAds;
            this.bufferedAds = [];

            for ( var i = 0; i < _bufferedAds.length; i++ ) {
                this._process_item( jQuery( _bufferedAds[i] ) );

            }

        },

        _process_item: function( banner ) {
            var banner_id = banner.attr('id');

            advads_items.conditions[banner_id] = advads_items.conditions[banner_id] || {};

            advads_layer_center_if_not_sticky ( banner )

            if (banner.hasClass('advads-effect') ) {
                advads_layer_gather_effects(banner_id);
            }

            if ( ! banner.hasClass( 'use-fancybox' ) ) {
                advads_layer_gather_background( banner_id );
            }

            advads_layer_gather_auto_close( banner );

            // display onload ad right away
            if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-onload')) {
                advads_items.conditions[banner_id].scrolloffset = true;
                advads_check_item_conditions(banner_id);
            // exit popup (if the user leaves the page) 
            } else if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-exit')) {
                    ouibounce(banner[0], {
                    // the modal will fire any time the page is reloaded, for the same user
                    aggressive: true,
                    // amount of time that firing is surpressed for
                    timer: 0,
                    callback: function() {
                        // reset display to none after Ouibounce
                        banner.css('display', 'none');
                        advads_items.conditions[banner_id].scrolloffset = true;
                        advads_check_item_conditions(banner_id);
                    }
                });
            // display after delay of n seconds
            } else if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-delay' ) ) {
                var delay = ( parseInt( banner.attr( 'data-advads-layer-delay' ), 10 ) ) || 0;
                setTimeout( function() {
                    advads_items.conditions[banner_id].delay_expired = true;
                    advads_check_item_conditions(banner_id);
                }, delay );
            // ad depends on scrolling
            }  else {
                // calculate scroll length (document height - window height)
                var advads_scrollhalf = (jQuery(document).height() - jQuery(window).height()) / 2;

                var scroll_handler = function ( event ) {
                    if ( jQuery.inArray( banner_id, advads_items.showed ) !== -1 ) {
                        //console.log( 'off scroll event' )
                        jQuery( window ).off( 'scroll', scroll_handler );
                        return;
                    }

                    // display scroll ads right after scrolling stopped
                    if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-stop' ) ) {
                        advads_items.conditions[banner_id].scrolloffset = true;
                        advads_check_item_conditions( banner_id );
                    }

                    // display ads after half the page was scrolled
                    if ( jQuery( document ).scrollTop() >= advads_scrollhalf) {
                        if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-half' ) ) {
                            advads_items.conditions[banner_id].scrolloffset = true;
                            advads_check_item_conditions(banner_id);
                        }
                    }

                    // display ads after custom scroll offset
                    if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-offset' ) ) {
                        var custom_offset = advads_extract_custom_offset_from_class( '#' + banner_id );
                        if ( jQuery( document ).scrollTop() >= custom_offset ) {
                            advads_items.conditions[banner_id].scrolloffset = true;
                            advads_check_item_conditions( banner_id );
                        }
                    }
                }


                jQuery( window ).onEnd( 'scroll', scroll_handler, 100);
            }

        },

        observe: function (event) {
            if ( event.event === 'postscribe_done' && event.ref && event.ad ) {
                var banner = jQuery( event.ref ).children( 'div' );
                if ( ! banner.hasClass( advanced_ads_layer_settings.layer_class + '' ) ) {
                    return;
                }

                if ( advanced_ads_layer_cache_busting.doc_loaded ) {
                    advanced_ads_layer_cache_busting.bufferedAds.push( banner );
                    advanced_ads_layer_cache_busting.flush();
                }
            }
        },
	}
}

// Advanced Ads Pro is enabled
if ( typeof advanced_ads_pro === 'object' && advanced_ads_pro !== null ) {
	// observe cache busting done event
    advanced_ads_pro.postscribeObservers.add( advanced_ads_layer_cache_busting.observe );
}

/**
 * Process ads with cache busting 'Off'
 */
var layers = function() {
    advanced_ads_layer_cache_busting.doc_loaded = true;

    jQuery('.' + advanced_ads_layer_settings.layer_class).each(function () {
        advanced_ads_layer_cache_busting.bufferedAds.push(jQuery(this));
    });

    advanced_ads_layer_cache_busting.flush();
};

if (typeof advads !== 'undefined' && typeof advads.privacy.dispatch_event !== 'undefined') {
    document.addEventListener('advanced_ads_privacy', function (event) {
        if (
            event.detail.previousState === 'unknown'
            && (event.detail.state === 'accepted' || event.detail.state === 'not_needed')
            && window.advanced_ads_layer_settings.placements !== null
        ) {
            window.advanced_ads_layer_settings.placements.forEach(function (value) {
                document.querySelectorAll('script[type="text/plain"][data-tcf="waiting-for-consent"][data-placement="' + value + '"]').forEach(advads.privacy.decode_ad);
            });
        }

        layers();
    });
} else {
    ( window.advanced_ads_ready || jQuery( document ).ready ).call( null, function() {
        layers();
    });
}

/**
 * adjust position for centered layer banner if not added by the sticky plugin
 * @param {string} $ad jQuery object (wrapped set)
 */
function advads_layer_center_if_not_sticky( $ad ) {
	if ($ad.hasClass('is-sticky')) {
		return;
	}
	/*
	var left = ( jQuery( window ).width() - ad.width() ) / 2;
	var top = ( jQuery( window ).height() - ad.height() ) / 2;
	ad.css('left', left);
	ad.css('top', top);
	ad.css('position', 'fixed'); 
	*/

	var width = parseInt($ad.attr('data-width'), 10);
	var height = parseInt($ad.attr('data-height'), 10);


	var is_transform_supported = getSupportedTransform();

	var transform_property = '';
	if (!height) {
		if (is_transform_supported) {
			transform_property += 'translateY(50%) ';
		} else {
			jQuery($ad).css({'top': '0', 'bottom': 'auto'});
		}
	}
	if (!width) {
		if (is_transform_supported) {
			transform_property += 'translateX(-50%) ';
		} else {
			jQuery($ad).css({'left': '0', 'right': 'auto'});
		}

	}
	if (transform_property) {
		set_ad_transform($ad, transform_property);
	}
}

/**
 * gather information about display effects and duration
 * @param {string} id of the ad, without #
 */
function advads_layer_gather_effects(id) {
    var banner = jQuery('#' + id);
    // display effect duration
    advads_items.effect_durations[id] = advads_extract_duration_from_class(banner);
    // load display effects
    if (banner.hasClass('advads-effect-fadein')) {
        advads_items.display_effect_callbacks[id] = 'advads_display_effect_fadein';
    };
    if (banner.hasClass('advads-effect-show')) {
        advads_items.display_effect_callbacks[id] = 'advads_display_effect_show';
    };
    if (banner.hasClass('advads-effect-slide')) {
        advads_items.display_effect_callbacks[id] = 'advads_display_effect_slide';
    };
}

/**
 * gather information about background
 * @param {string} id of the ad, without #
 */
function advads_layer_gather_background(id) {
    var banner = jQuery('#' + id);
    // add display callback to the ads with background
    if (banner.hasClass('advads-has-background') && banner.is(':hidden')) {
        if (!advads_items.display_callbacks[id] != 'undefined') {
            advads_items.display_callbacks[id] = {};
            var length = 0;
        } else {
            var length = advads_items.display_callbacks[id].length;
        }

        advads_items.display_callbacks[id][length] = 'advads_layer_display_background_callback';
    }
}

/**
 * Gather auto close info and schedule auto close.
 *
 * @param {obj} $banner A jQuery object representing the banner wrapper.
 */
function advads_layer_gather_auto_close( $banner ) {
	var delay = parseInt( $banner.data( 'auto-close-delay'), 10 );
	if ( ! delay ) { return; }
	var banner_id = $banner.attr('id');
	advads_items.display_callbacks[ banner_id ] = advads_items.display_callbacks[ banner_id ] || {};
	advads_items.display_callbacks[ banner_id ].auto_close = function( banner_id ) {
		setTimeout( function() {
			advads_layer_close_item( banner_id );
		}, delay );
	}
}

/**
 * check if background can be removed
 *
 * @param {string} id id of the ad, without #
 * @returns {bool} true, if background can be removed
 */
function can_remove_background(item) {
    advads_items.backgrounds[ item ] = false;
    var remove = true;
	jQuery.each( advads_items.backgrounds, function( i, val ) {
		if ( val == true ) {
			//if ( advads_items.conditions.hasOwnProperty(i) && advads_items.conditions[i].scrolloffset == true  ) {
				remove = false;
				//break the loop
				return false;
			//}
		}
	});	
	return remove;
}

/**
 * check item conditions and display the ad if all conditions are true
 *
 * @param {string} id id of the ad, without #
 * @returns {bool} true, if item can be displayed
 */
function advads_check_item_conditions(id) {
    var item = jQuery('#' + id);
    if (item.length == 0) {
        return;
    }

    var display = true;
    jQuery.each(advads_items.conditions[id], function (method, flag) {
        if (flag === false) {
            // display the banner
            display = false;
        }
    });

    if ( display ) {
        advads_items.showed.push(id);
		
		item.trigger( advanced_ads_layer_settings.layer_class + '-trigger' );
		
        if ( item.hasClass('use-fancybox') ) {
            fancybox_display (id);
        } else {
            var ad = jQuery('#' + id);

            var position = jQuery(ad).attr('data-position');
            var width = parseInt( ad.attr( 'data-width' ), 10 );
            var height = parseInt( ad.attr( 'data-height' ), 10 );
            var is_transform_supported = getSupportedTransform();


            switch ( position ) {
                case 'topcenter': 
                    if ( ! width ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateX(-50%)');
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                              
                        }
                    }
                    break; 
                case 'centerleft': 
                    if ( ! height ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateY(50%)');                            
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                               
                        }
                    }
                    break;  
                case 'center': 
                    var transform_property = '';
                    if ( ! height ) {
                        if ( is_transform_supported ) {
                            transform_property += 'translateY(50%) ';
                        } else {
                            jQuery( ad ).css({ 'top':'0', 'bottom':'auto' });                              
                        }
                    }
                    if ( ! width ) {
                        if ( is_transform_supported ) {
                            transform_property += 'translateX(-50%) ';
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto' });                              
                        }

                    }
                    if (transform_property) {
                        set_ad_transform(ad, transform_property);   
                    }
                    break;
                case 'centerright': 
                    if ( ! height ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateY(50%)');
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                              
                        }

                    }
                    break; 
                case 'bottomcenter': 
                    if ( ! width ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateX(-50%)');
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                              
                        }

                    }
                    break;
            }

            advads_layer_call_display_callbacks( id );

            if (advads_items.display_effect_callbacks[id] == undefined) {
                ad.show();
            } else {
                var callback = window[advads_items.display_effect_callbacks[id]];
                callback(id);
            }         
        }       
    }
}

/**
 * shows the ad using fancybox plugin
 *
 * @param {string} id id of the ad, without #
 */
function fancybox_display(id) {
    var banner = jQuery('#' + id);

    var settings = {
        'speedIn'            : 0,
        'speedOut'           : 0,
        'showCloseButton'    : true,
        'hideOnOverlayClick' : banner.hasClass( 'advads-background-click-close' ),
        'centerOnScroll'      : true,
        //'autoScale' : false,
        //'autoDimensions' : false,
        'margin' : 20,
        'padding' : 10,
        'onClosed': function() {
            if ( typeof advads_items.close_functions[ id ] === 'function' ) {
                advads_items.close_functions[ id ]();
            }
        },        
		// Once the content is displayed.
		'onComplete': function() {
			advads_layer_call_display_callbacks( id );
		},
    }

    if (advads_items.display_effect_callbacks[id] == undefined) {
        settings['transitionIn'] = 'none';
    } else {
        var callback = advads_items.display_effect_callbacks[id];
        switch ( callback ) {
            case 'advads_display_effect_fadein': 
                settings['transitionIn'] = 'fade'; 
                break;
            case 'advads_display_effect_show': 
                settings['transitionIn'] = 'elastic'; 
                break;            
            default: 
                settings['transitionIn'] = 'none';
        }
    }

    if ( ! banner.hasClass('advads-has-background') ) {
        settings['overlayShow'] = false;
    }

    if ( ! banner.hasClass('advads-close') ) {
        settings['showCloseButton'] = false;
    }    
    // extract duration of the transitionIn effect
    var speedIn = advads_extract_duration_from_class(banner);
    settings['speedIn'] = ( speedIn ) ? speedIn : 0;

    var position = jQuery(banner).attr('data-position');
    // css for Fancybox
    var output_css = '#fancybox-close { right: -15px; }';
    output_css += '#fancybox-loading, #fancybox-loading div, #fancybox-overlay, #fancybox-wrap, #fancybox-wrap div {';
    output_css += '-webkit-box-sizing: content-box !important; -moz-box-sizing: content-box !important; box-sizing: content-box !important; }';    

    switch ( position ) {
        case 'topleft': 
            output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; right: auto !important; left: 0px !important; }';
            break;  
        case 'topcenter': 
            output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; }';
            break; 
        case 'topright': 
            output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; right: 0px !important; left: auto !important; }';
            break;
        case 'centerleft': 
            output_css += '#fancybox-wrap { left: 0px !important; right: auto !important; }';
            break;    
        case 'center': 
            break;  
        case 'centerright': 
            output_css += '#fancybox-wrap { right: 0px !important; left: auto !important; }';
            break;    
        case 'bottomleft': 
            output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; right: auto !important; left: 0px !important; }';
            break;                                                                                   
        case 'bottomcenter': 
            output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; }';
            break;
        case 'bottomright': 
            output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; right: 0px !important; left: auto !important; }';
            break;
    }  
        

    jQuery('#' + advanced_ads_layer_settings.layer_class + '-custom-css').html(output_css);

    // show fancybox
    if ( typeof jQuery.fancybox == 'function' ) {
        banner.waitForImages( function() {
            settings['content'] = banner.show();
            jQuery.fancybox( settings );
        });
    }
}

/**
 * Call display callbacks.
 *
 * @param {string} banner_id id of the banner, without #
 */
function advads_layer_call_display_callbacks( banner_id ) {
	// iterate through all callback function and call them
	advads_items.display_callbacks[ banner_id ] = advads_items.display_callbacks[ banner_id ] || {};
	jQuery.each( advads_items.display_callbacks[ banner_id ], function ( key, func ) {
		if ( typeof func === 'string' ) {
			func = window[ func ];
		}
		func( banner_id );
	});
}

/**
 * return a custom offset extracted from a class name
 * @param {str} field
 * @returns {int} offset
 */
function advads_extract_custom_offset_from_class(field) {
    var offset = 0;
    var classes = jQuery(field).attr('class');
    if (classes !== undefined) {
        // create class array
        classes = classes.split(/\s+/);
        jQuery.each(classes, function (key, value) {
            if (value === '')
                return false;
            // get information about the solution from a class
            var pattern = new RegExp(advanced_ads_layer_settings.layer_class + '-offset-', 'gi');
            if (value.match(pattern)) {
                infos = value.split('-');
                offset = parseInt(infos[3])
                return false;
            }
        });
    }

    return offset;
};

/**
 * return a duration extracted from a class name
 * @param {str} field
 * @returns {int} offset
 */
function advads_extract_duration_from_class(field) {
    var duration = 0;
    var classes = field.attr('class');
    if (classes !== undefined) {
        // create class array
        classes = classes.split(/\s+/);
        jQuery.each(classes, function (key, value) {
            if (value === '')
                return false;
            // get information about the solution from a class
            if (value.match(/advads-duration-/gi)) {
                infos = value.split('-');
                duration = parseInt(infos[2])
                return false;
            }
        });
    }

    return duration;
};

/**
 * callback function in case a layer ad is displayed with a background
 * @param {type} ad object
 */
function advads_layer_display_background_callback(id) {
    // display overlay in case it is attached to an ad still not visible
    var banner = jQuery('#' + id);
    // only display background if there is an unvisible ad with a background AND no background visible yet
    if (banner.hasClass('advads-has-background') && banner.is(':hidden')) {
    	//there is background for this ad
    	advads_items.backgrounds[id] = true;
    	if (jQuery('.advads-background').length === 0) {
			var args = {
				"class": "advads-background",
				"style": "position: fixed; bottom: 0; right: 0; display: block; width: 100%; height: 100%; background: #000; z-index: 9998; opacity:.5;",
			}
			if ( banner.hasClass( 'advads-background-click-close' ) ) {
				args.click = function() {
					jQuery( this ).remove();
					advads_layer_close_items();
				}
			}
			jQuery( '<div/>', args ).appendTo( 'body' );
   		}
    }
}

/**
 * callback for display effect fadeIn
 * @param {obj} ad container
 */
function advads_display_effect_fadein(id) {
    var banner = jQuery('#' + id);
    var duration = parseInt(advads_items.effect_durations[id]);
    banner.fadeIn(duration);
}

/**
 * callback for display effect show
 * @param {obj} ad container
 */
function advads_display_effect_show(id) {
    var banner = jQuery('#' + id);
    var duration = parseInt(advads_items.effect_durations[id]);
    banner.show(duration);
}

/**
 * callback for display effect slideDown
 * @link http://api.jquery.com/slideDown/
 * @param {obj} ad container
 */
function advads_display_effect_slide(id) {
    var banner = jQuery('#' + id);
    var duration = parseInt(advads_items.effect_durations[id]);
    banner.slideDown(duration);
}

/**
 * check, if css transform is supported by user's browser
 * 
 * [http://stackoverflow.com/a/12625986]
 */
function getSupportedTransform() {
    var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
    var div = document.createElement('div');
    for(var i = 0; i < prefixes.length; i++) {
        if(div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
        }
    }
    return false;
}

/**
 * set css transform property for the ad
 * @param {string} jQuery object (wrapped set)
 * @param {string} values of property
 */
function set_ad_transform( ad, transform_properties ) {
    jQuery( ad ).css({
        '-webkit-transform': transform_properties,
        '-moz-transform': transform_properties,
        'transform': transform_properties
    }); 
}

/**
 * Close item (when user clicks on the close button/background or automatically after n sec.).
 *
 * @param {string} item_id Id of the item.
 */
function advads_layer_close_item( item_id ) {
	if ( typeof advads_items.close_functions[ item_id ] === 'function' ) {
		advads_items.close_functions[ item_id ]();
		advads_items.close_functions[ item_id ] = null;

		// Close Fancybox window.
		if ( jQuery.fancybox && typeof jQuery.fancybox.close === 'function' ) {
			jQuery.fancybox.close();
		}
	}
}

/**
 * Close all items.
 */
function advads_layer_close_items() {
	for ( var item_id in advads_items.close_functions ) {
		if ( advads_items.close_functions.hasOwnProperty( item_id ) ) {
			advads_layer_close_item( item_id );
		}
	}
}

//https://github.com/tonai/jquery-onend
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.fn.onEnd=function(){var a,b=Array.prototype.slice.call(arguments),c=b.pop(),d=b.pop(),e=function(){var b=Array.prototype.slice.call(arguments);clearTimeout(a),a=setTimeout(function(){d.apply(this,b)}.bind(this),c)};e.guid=d.guid||(d.guid=jQuery.guid++),b.push(e),this.on.apply(this,b)}});

/*!
 * Ouibounce
 * https://github.com/carlsednaoui/ouibounce
 *
 * Copyright (c) 2014 Carl Sednaoui
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 **/
!function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):e.ouibounce=n()}(this,function(e,n,o){return function(e,n){"use strict";function o(e,n){return"undefined"==typeof e?n:e}function i(e){var n=24*e*60*60*1e3,o=new Date;return o.setTime(o.getTime()+n),"; expires="+o.toUTCString()}function t(){s()||(L.addEventListener("mouseleave",u),L.addEventListener("mouseenter",r),L.addEventListener("keydown",c))}function u(e){e.clientY>k||(D=setTimeout(m,y))}function r(){D&&(clearTimeout(D),D=null)}function c(e){g||e.metaKey&&76===e.keyCode&&(g=!0,D=setTimeout(m,y))}function d(e,n){return a()[e]===n}function a(){for(var e=document.cookie.split("; "),n={},o=e.length-1;o>=0;o--){var i=e[o].split("=");n[i[0]]=i[1]}return n}function s(){return d(T,"true")&&!v}function m(){s()||(e&&(e.style.display="block"),E(),f())}function f(e){var n=e||{};"undefined"!=typeof n.cookieExpire&&(b=i(n.cookieExpire)),n.sitewide===!0&&(w=";path=/"),"undefined"!=typeof n.cookieDomain&&(x=";domain="+n.cookieDomain),"undefined"!=typeof n.cookieName&&(T=n.cookieName),document.cookie=T+"=true"+b+x+w,L.removeEventListener("mouseleave",u),L.removeEventListener("mouseenter",r),L.removeEventListener("keydown",c)}var l=n||{},v=l.aggressive||!1,k=o(l.sensitivity,20),p=o(l.timer,1e3),y=o(l.delay,0),E=l.callback||function(){},b=i(l.cookieExpire)||"",x=l.cookieDomain?";domain="+l.cookieDomain:"",T=l.cookieName?l.cookieName:"viewedOuibounceModal",w=l.sitewide===!0?";path=/":"",D=null,L=document.documentElement;setTimeout(t,p);var g=!1;return{fire:m,disable:f,isDisabled:s}}});

/*! waitForImages jQuery Plugin 2015-06-02 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},a.expr[":"]["has-src"]=function(b){return a(b).is('img[src][src!=""]')},a.expr[":"].uncached=function(b){return a(b).is(":has-src")?!b.complete:!1},a.fn.waitForImages=function(){var c,d,e,f=0,g=0,h=a.Deferred();if(a.isPlainObject(arguments[0])?(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished):1===arguments.length&&"boolean"===a.type(arguments[0])?e=arguments[0]:(c=arguments[0],d=arguments[1],e=arguments[2]),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var i=a(this),j=[],k=a.waitForImages.hasImageProperties||[],l=a.waitForImages.hasImageAttributes||[],m=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?i.find("*").addBack().each(function(){var b=a(this);b.is("img:has-src")&&j.push({src:b.attr("src"),element:b[0]}),a.each(k,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=m.exec(e);)j.push({src:d[2],element:b[0]})}),a.each(l,function(c,d){var e,f=b.attr(d);return f?(e=f.split(","),void a.each(e,function(c,d){d=a.trim(d).split(" ")[0],j.push({src:d,element:b[0]})})):!0})}):i.find("img:has-src").each(function(){j.push({src:this.src,element:this})}),f=j.length,g=0,0===f&&(c.call(i[0]),h.resolveWith(i[0])),a.each(j,function(e,j){var k=new Image,l="load."+b+" error."+b;a(k).one(l,function m(b){var e=[g,f,"load"==b.type];return g++,d.apply(j.element,e),h.notifyWith(j.element,e),a(this).off(l,m),g==f?(c.call(i[0]),h.resolveWith(i[0]),!1):void 0}),k.src=j.src})}),h.promise()}});

 c2.17-0.003,3.935-1.766,3.938-3.958v-1.145C67.083,8.767,65.32,7.005,63.172,7z" /> <path fill="#DB0000" d="M47.151,11.209h1.208c2.149,0.005,3.911,1.767,3.916,3.957v1.142c-0.005,2.195-1.767,3.956-3.937,3.958
 h-1.166c-2.171-0.002-3.933-1.763-3.938-3.958v-1.142C43.24,12.976,45.001,11.214,47.151,11.209z" /> <path fill="#1D1D1B" d="M67.909,18.619c0,0-16.098,1.766-16.104,3.957V32h20.021v-9.424
 C71.82,20.385,70.059,18.624,67.909,18.619z" /> <path fill="#DB0000" d="M42.417,22.826c-2.148,0.006-3.91,1.768-3.914,3.959V32h20.021v-5.215
 C58.518,24.594,42.417,22.826,42.417,22.826z" /> </g> </g> <g id="Bild-Shop" display="none"> <g display="inline"> <g> <path fill="#DB0000" d="M67.434,15.775L50,15.744v-3.021C50,11.784,48.491,11,47.542,11H41.84C41.833,11,42,11.022,42,11.022V14
 h3v12.132c0,0.933,0.954,1.687,1.9,1.69l18.732-2.301c0.899,0,1.808-0.729,1.972-1.629l0.649-6.521
 C68.396,16.579,68.158,15.919,67.434,15.775z" /> </g> <circle fill="#DB0000" cx="52.229" cy="31.7" r="2.3" /> <circle fill="#DB0000" cx="61.43" cy="31.7" r="2.3" /> </g> </g> <g id="BILDplus"> <g> <g> <polygon fill="#DB0000" points="65.166,27.37 65.166,30.841 32,30.841 32,6.826 32,6.826 65.166,6.826 65.166,24.808 				" /> <polygon fill="#FFFFFF" points="43.336,9.847 45.497,9.847 45.497,27.374 43.336,27.374 				" /> <path fill="#FFFFFF" d="M39.306,26.423c-0.001,0.523-0.423,0.943-0.941,0.945h-4.259l0.001-17.52h4.263
 c0.514,0,0.936,0.421,0.937,0.943v5.565v0.576c0,0.496-0.405,0.896-0.9,0.896h-0.094c0.546,0,0.995,0.444,0.995,0.992v0.386
 V26.423L39.306,26.423z" /> <polygon fill="#DF1519" points="36.265,12.011 37.152,12.011 37.152,17.001 36.265,17.001 				" /> <polygon fill="#DF1519" points="36.265,19.148 37.152,19.148 37.152,25.198 36.265,25.198 				" /> <path fill="#FFFFFF" d="M51.631,27.374V9.845h-2.163v3.052h-2.102c-0.515,0.002-0.932,0.423-0.933,0.944L46.43,26.423
 c0.002,0.523,0.421,0.943,0.941,0.945L51.631,27.374L51.631,27.374z" /> <polygon fill="#DF1519" points="49.469,15.037 48.583,15.037 48.583,25.198 49.469,25.198 				" /> <polygon fill="#FFFFFF" points="40.242,9.847 42.401,9.847 42.401,12.011 40.242,12.011 				" /> <polygon fill="#FFFFFF" points="40.242,12.897 42.401,12.897 42.401,27.374 40.242,27.374 				" /> </g> <circle fill="#FFFFFF" cx="66.775" cy="18.833" r="13.152" /> <g> <g> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="527.7764" y1="-1067.8423" x2="527.7764" y2="-1043.8242" gradientTransform="matrix(1 0 0 -1 -461 -1037)"> <stop offset="0" style="stop-color:#1D1D1B" /> <stop offset="1" style="stop-color:#646363" /> </linearGradient> <circle fill="url(#SVGID_1_)" cx="66.775" cy="18.833" r="12.009" /> </g> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="54.766" y="6.824" width="24.019" height="24.019"> <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" /> </filter> </defs> <mask maskUnits="userSpaceOnUse" x="54.766" y="6.824" width="24.019" height="24.019" id="SVGID_2_"> <g filter="url(#Adobe_OpacityMaskFilter)"> </g> </mask> <g opacity="0.4" mask="url(#SVGID_2_)"> <circle fill="#010000" cx="66.775" cy="18.833" r="12.009" /> </g> </g> <polygon fill="#FFFFFF" points="68.49,17.134 68.49,12.544 65.061,12.544 65.061,17.134 60.486,17.134 60.486,20.564
 65.061,20.564 65.061,25.126 68.49,25.126 68.49,20.564 73.064,20.564 73.064,17.134 			" /> </g> </g> <g id="Hot" display="none"> <g display="inline"> <path fill="#DB0000" d="M55.119,35.768c-3.28-2.979,1.229-6.268,2.785-7.772c1.146-1.106,5.566-5.611-2.283-10.836
 c0.785,1.416,0.57,3.043,0,4.028c-0.713,1.283-1.417,2.083-2.711,3.424c-1.288,1.339-3.282,2.781-3.924,4.281
 c-1.07,2.57-0.384,5.623,4.282,7.107c-2.559-0.256-13.486-3.854-8.242-10.992c1.975-2.688,4.552-4.631,3.046-6.82
 c2.653,0.99,2.539,2.483,2.539,3.769c1.193-0.657,1.775-1.663,1.689-2.69c-0.086-1.233-0.676-2.42-1.059-3.583
 c-0.517-1.573-0.878-2.423-1.049-3.81c-0.172-1.336,0.19-2.724,0.876-4.009C51.667,6.887,52.525,5.946,54.077,5
 c-1.536,1.595-1.41,2.567-1.068,4.161c0.258,1.233,1.38,2.762,2.726,4.152c1.31,1.352,2.766,2.721,4.221,4.057
 c1.455,1.44,2.824,3.032,2.996,4.729c0.173,2.36-1.067,4.31-2.91,6.522v0.053c0.609-0.981,3.447-2.592,6.593-1.594
 c-2.354,0.254-3.585,1.635-4.022,3.135C61.543,33.859,57.211,35.553,55.119,35.768z" /> </g> </g> </g> </svg> </a></div><div class="flex w-full text-center justify-end"><div style="width: 110px; height: 67px"> <a href="https://epaper.bild.de/?wtmc=nav.epaper" style="display: block; width: 110px; height: 67px"> <span class="uppercase font-extrabold text-xs">Epaper</span> <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="110px" height="43px" viewBox="0 0 110 43" enable-background="new 0 0 110 43" xml:space="preserve"> <g> <polygon points="47,12 47,14 60,14 60,29 62,29 62,12 	" /> <polygon points="50,9 50,11 63,11 63,26 65,26 65,9 	" /> <rect x="45" y="15" fill="#DD0000" width="14" height="16" /> </g> </svg> </a></div><div style="width: 110px; height: 67px"> <a href="https://www.bild.de/corporate-site/kontakt-2015/bild-de/kontakt-42366552.bild.html" style="display: block; width: 110px; height: 67px"> <span class="uppercase font-extrabold text-xs">Kontakt</span> <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="110px" height="43px" viewBox="0 0 110 43" enable-background="new 0 0 110 43" xml:space="preserve"> <g id="Ebene_2"> </g> <path fill="#DD0000" d="M69.499,14.001V13H68.5v-1h-1v-1H55.502v7c1.198,0.899,2,2.3,2,4v9H70.5V14.001H69.499z" /> <g id="_x3C_zeilen_x3E_"> <path fill="#FFFFFF" d="M58.5,26h3v2h-3V26z" /> <path fill="#FFFFFF" d="M58.502,14.001L64.5,14v2l-5.998-0.001V14.001z" /> <path fill="#FFFFFF" d="M58.502,22H67.5v2h-8.998V22z" /> <path fill="#FFFFFF" d="M58.502,18H67.5v2h-8.998V18z" /> </g> <path d="M48.001,8c2.501,0,4.5,2.001,4.5,4.5c0,2.501-1.999,4.5-4.5,4.5c-2.499,0-4.5-1.999-4.5-4.5
 C43.501,10.001,45.502,8,48.001,8z" /> <path d="M45.502,18h5c2.799,0,4.998,2.2,4.998,5v9H40.502v-9C40.502,20.2,42.702,18,45.502,18z" /> <g opacity="0.15"> <rect x="67.5" y="11" width="1" height="1" /> <rect x="68.5" y="12" width="0.999" height="1" /> <rect x="69.499" y="13" width="1.001" height="1.001" /> </g> <polygon points="70.5,14.001 69.5,14.001 69.5,13 68.501,13 68.501,12 67.501,12 67.501,11 66.5,11 66.5,12 66.5,13 66.5,14.001
 66.5,15 70.5,15 " /> </svg> </a></div><div style="width: 110px; height: 67px"> <a href="https://www.bild.de/bildplus/aboseite/bild-de/bildplus-abo-30442024.bild.html" style="display: block; width: 110px; height: 67px"> <span class="uppercase font-extrabold text-xs">Zeitungsabo</span> <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="110px" height="43px" viewBox="0 0 110 43" enable-background="new 0 0 110 43" xml:space="preserve"> <g id="Ebene1"> <path d="M47.829,12.43l9.916,1.915v15.324h2.027V12.43H47.829L47.829,12.43z" /> <path fill="#DD0000" d="M43.323,12.43l13.521,3.043V33.5l-13.521-3.043V12.43z" /> <path d="M56.844,11.191V9.5l-10.14,1.691H56.844z" /> </g> </svg> </a></div><div style="width: 110px; height: 67px"> <a href="https://shop.bild.de/?utm_source=bild&utm_medium=button.home&utm_campaign=button.home&utm_content=home&ref=button.home" style="display: block; width: 110px; height: 67px"> <span class="uppercase font-extrabold text-xs">Bild Shop</span> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="110px" height="43px" viewBox="0 0 110 43" enable-background="new 0 0 110 43" xml:space="preserve"> <g id="Ebene_2"> </g> <g id="Ebene_1"> <g id="login" display="none"> <g display="inline"> <path fill="#1D1D1D" d="M68.096,6.901C67.496,6.298,66.762,6,65.889,6h-14c-0.829,0-1.545,0.307-2.147,0.917
 C49.139,7.53,48.84,8.262,48.84,9.109v4.67h3.049v-4.67h14v21.78h-14v-3.111H48.84v3.111c0,0.83,0.3,1.555,0.901,2.178
 C50.343,33.688,51.059,34,51.888,34h14c0.852,0,1.582-0.307,2.19-0.92c0.612-0.609,0.92-1.341,0.92-2.191V9.109
 C69,8.238,68.699,7.504,68.096,6.901z" /> <path fill="#DB0000" d="M60.32,19.871l-4.42-4.286c-0.498-0.481-0.901-0.31-0.901,0.381v1.213v1.265h-4.158h-0.96h-7.626
 c-0.69,0-1.256,0.565-1.256,1.257v2.154c0,0.689,0.565,1.256,1.256,1.256h7.626h0.96h4.158v1.343v1.136
 c0,0.689,0.403,0.859,0.897,0.377l4.428-4.34C60.816,21.141,60.816,20.354,60.32,19.871z" /> </g> </g> <g id="Ebene_4" display="none"> <g display="inline"> <path fill="#1D1D1B" d="M63.172,7h-1.207c-2.15,0.005-3.91,1.767-3.918,3.957v1.145c0.008,2.192,1.768,3.955,3.938,3.958h1.166
 c2.17-0.003,3.935-1.766,3.938-3.958v-1.145C67.083,8.767,65.32,7.005,63.172,7z" /> <path fill="#DB0000" d="M47.151,11.209h1.208c2.149,0.005,3.911,1.767,3.916,3.957v1.142c-0.005,2.195-1.767,3.956-3.937,3.958
 h-1.166c-2.171-0.002-3.933-1.763-3.938-3.958v-1.142C43.24,12.976,45.001,11.214,47.151,11.209z" /> <path fill="#1D1D1B" d="M67.909,18.619c0,0-16.098,1.766-16.104,3.957V32h20.021v-9.424
 C71.82,20.385,70.059,18.624,67.909,18.619z" /> <path fill="#DB0000" d="M42.417,22.826c-2.148,0.006-3.91,1.768-3.914,3.959V32h20.021v-5.215
 C58.518,24.594,42.417,22.826,42.417,22.826z" /> </g> </g> <g id="BILDplus" display="none"> <g display="inline"> <g> <polygon fill="#DB0000" points="64.656,31.262 64.656,34.825 30.612,34.825 30.612,10.175 30.612,10.175 64.656,10.175
 64.656,28.631 				" /> <polygon fill="#FFFFFF" points="42.358,13.276 44.575,13.276 44.575,31.266 42.358,31.266 				" /> <path fill="#FFFFFF" d="M38.22,30.289c-0.001,0.537-0.434,0.969-0.966,0.971h-4.372l0.001-17.983h4.376
 c0.527,0,0.96,0.432,0.961,0.968v5.713v0.591c0,0.508-0.416,0.92-0.924,0.92h-0.097c0.561,0,1.021,0.456,1.021,1.018v0.396
 V30.289L38.22,30.289z" /> <polygon fill="#DF1519" points="35.099,15.497 36.01,15.497 36.01,20.619 35.099,20.619 				" /> <polygon fill="#DF1519" points="35.099,22.822 36.01,22.822 36.01,29.033 35.099,29.033 				" /> <path fill="#FFFFFF" d="M50.872,31.266V13.274h-2.22v3.132h-2.158c-0.528,0.002-0.957,0.434-0.958,0.97l-0.003,12.913
 c0.002,0.537,0.433,0.969,0.966,0.971L50.872,31.266L50.872,31.266z" /> <polygon fill="#DF1519" points="48.653,18.603 47.743,18.603 47.743,29.033 48.653,29.033 				" /> <polygon fill="#FFFFFF" points="39.181,13.276 41.398,13.276 41.398,15.497 39.181,15.497 				" /> <polygon fill="#FFFFFF" points="39.181,16.406 41.398,16.406 41.398,31.266 39.181,31.266 				" /> </g> <circle fill="#FFFFFF" cx="66.417" cy="22.5" r="13.5" /> <g> <g> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="527.418" y1="-1071.8267" x2="527.418" y2="-1047.1729" gradientTransform="matrix(1 0 0 -1 -461 -1037)"> <stop offset="0" style="stop-color:#1D1D1B" /> <stop offset="1" style="stop-color:#646363" /> </linearGradient> <circle fill="url(#SVGID_1_)" cx="66.417" cy="22.5" r="12.327" /> </g> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="54.09" y="10.173" width="24.654" height="24.654"> <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" /> </filter> </defs> <mask maskUnits="userSpaceOnUse" x="54.09" y="10.173" width="24.654" height="24.654" id="SVGID_2_"> <g filter="url(#Adobe_OpacityMaskFilter)"> </g> </mask> <g opacity="0.4" mask="url(#SVGID_2_)"> <circle fill="#010000" cx="66.417" cy="22.5" r="12.327" /> </g> </g> <polygon fill="#FFFFFF" points="68.178,20.756 68.178,16.045 64.656,16.045 64.656,20.756 59.961,20.756 59.961,24.277
 64.656,24.277 64.656,28.958 68.178,28.958 68.178,24.277 72.873,24.277 72.873,20.756 			" /> </g> </g> <g id="Hot" display="none"> <g display="inline"> <path fill="#DB0000" d="M55.119,35.768c-3.28-2.979,1.229-6.268,2.785-7.772c1.146-1.106,5.566-5.611-2.283-10.836
 c0.785,1.416,0.57,3.043,0,4.028c-0.713,1.283-1.417,2.083-2.711,3.424c-1.288,1.339-3.282,2.781-3.924,4.281
 c-1.07,2.57-0.384,5.623,4.282,7.107c-2.559-0.256-13.486-3.854-8.242-10.992c1.975-2.688,4.552-4.631,3.046-6.82
 c2.653,0.99,2.539,2.483,2.539,3.769c1.193-0.657,1.775-1.663,1.689-2.69c-0.086-1.233-0.676-2.42-1.059-3.583
 c-0.517-1.573-0.878-2.423-1.049-3.81c-0.172-1.336,0.19-2.724,0.876-4.009C51.667,6.887,52.525,5.946,54.077,5
 c-1.536,1.595-1.41,2.567-1.068,4.161c0.258,1.233,1.38,2.762,2.726,4.152c1.31,1.352,2.766,2.721,4.221,4.057
 c1.455,1.44,2.824,3.032,2.996,4.729c0.173,2.36-1.067,4.31-2.91,6.522v0.053c0.609-0.981,3.447-2.592,6.593-1.594
 c-2.354,0.254-3.585,1.635-4.022,3.135C61.543,33.859,57.211,35.553,55.119,35.768z" /> </g> </g> <g> <ellipse fill="#1D1D1D" cx="47.69" cy="27.76" rx="2.175" ry="2.24" /> <ellipse fill="#1D1D1D" cx="59.875" cy="27.76" rx="2.176" ry="2.24" /> <polygon fill="#DB0000" points="48.61,9.142 49.542,18.177 65.338,18.177 70,9.142 		" /> <polygon fill="#1D1D1D" points="48.735,20.105 47.86,20.105 46.61,8 40,8 40,11.065 43.675,11.065 44.907,23.595 62.96,23.595
 64.674,20.105 		" /> </g> </g> </svg> </a></div><div style="width: 110px; height: 67px"> <a href="https://don.bild.de/www/li/https%253A%252F%252Fwww.bild.de%252F" style="display: block; width: 110px; height: 67px"> <span class="uppercase font-extrabold text-xs">Login</span> <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="110px" height="43px" viewBox="0 0 110 43" enable-background="new 0 0 110 43" xml:space="preserve"> <g id="login" display="none"> <g display="inline"> <path fill="#1D1D1D" d="M68.096,6.901C67.496,6.298,66.762,6,65.889,6h-14c-0.829,0-1.545,0.307-2.147,0.917
 C49.139,7.53,48.84,8.262,48.84,9.109v4.67h3.049v-4.67h14v21.78h-14v-3.111H48.84v3.111c0,0.83,0.3,1.555,0.901,2.178
 C50.343,33.688,51.059,34,51.888,34h14c0.852,0,1.582-0.307,2.19-0.92c0.612-0.609,0.92-1.341,0.92-2.191V9.109
 C69,8.238,68.699,7.504,68.096,6.901z" /> <path fill="#DB0000" d="M60.32,19.871l-4.42-4.286c-0.498-0.481-0.901-0.31-0.901,0.381v1.213v1.265h-4.158h-0.96h-7.626
 c-0.69,0-1.256,0.565-1.256,1.257v2.154c0,0.689,0.565,1.256,1.256,1.256h7.626h0.96h4.158v1.343v1.136
 c0,0.689,0.403,0.859,0.897,0.377l4.428-4.34C60.816,21.141,60.816,20.354,60.32,19.871z" /> </g> </g> <g id="Ebene_4" display="none"> <g display="inline"> <path fill="#1D1D1B" d="M63.172,7h-1.207c-2.15,0.005-3.91,1.767-3.918,3.957v1.145c0.008,2.192,1.768,3.955,3.938,3.958h1.166
 c2.17-0.003,3.935-1.766,3.938-3.958v-1.145C67.083,8.767,65.32,7.005,63.172,7z" /> <path fill="#DB0000" d="M47.151,11.209h1.208c2.149,0.005,3.911,1.767,3.916,3.957v1.142c-0.005,2.195-1.767,3.956-3.937,3.958
 h-1.166c-2.171-0.002-3.933-1.763-3.938-3.958v-1.142C43.24,12.976,45.001,11.214,47.151,11.209z" /> <path fill="#1D1D1B" d="M67.909,18.619c0,0-16.098,1.766-16.104,3.957V32h20.021v-9.424C71.82,20.385,70.059,18.624,67.909,18.619
 z" /> <path fill="#DB0000" d="M42.417,22.826c-2.148,0.006-3.91,1.768-3.914,3.959V32h20.021v-5.215
 C58.518,24.594,42.417,22.826,42.417,22.826z" /> </g> </g> <g id="Bild-Shop" display="none"> <g display="inline"> <g> <path fill="#DB0000" d="M67.434,15.775L50,15.744v-3.021C50,11.784,48.491,11,47.542,11H41.84C41.833,11,42,11.022,42,11.022V14
 h3v12.132c0,0.933,0.954,1.687,1.9,1.69l18.732-2.301c0.899,0,1.808-0.729,1.972-1.629l0.649-6.521
 C68.396,16.579,68.158,15.919,67.434,15.775z" /> </g> <circle fill="#DB0000" cx="52.229" cy="31.7" r="2.3" /> <circle fill="#DB0000" cx="61.43" cy="31.7" r="2.3" /> </g> </g> <g id="BILDplus" display="none"> <g display="inline"> <g> <polygon fill="#DB0000" points="64.656,31.262 64.656,34.825 30.612,34.825 30.612,10.175 30.612,10.175 64.656,10.175
 64.656,28.631 			" /> <polygon fill="#FFFFFF" points="42.358,13.276 44.575,13.276 44.575,31.266 42.358,31.266 			" /> <path fill="#FFFFFF" d="M38.22,30.289c-0.001,0.537-0.434,0.969-0.966,0.971h-4.372l0.001-17.983h4.376
 c0.527,0,0.96,0.432,0.961,0.968v5.713v0.591c0,0.508-0.416,0.92-0.924,0.92h-0.097c0.561,0,1.021,0.456,1.021,1.018v0.396
 V30.289L38.22,30.289z" /> <polygon fill="#DF1519" points="35.099,15.497 36.01,15.497 36.01,20.619 35.099,20.619 			" /> <polygon fill="#DF1519" points="35.099,22.822 36.01,22.822 36.01,29.033 35.099,29.033 			" /> <path fill="#FFFFFF" d="M50.872,31.266V13.274h-2.22v3.132h-2.158c-0.528,0.002-0.957,0.434-0.958,0.97l-0.003,12.913
 c0.002,0.537,0.433,0.969,0.966,0.971L50.872,31.266L50.872,31.266z" /> <polygon fill="#DF1519" points="48.653,18.603 47.743,18.603 47.743,29.033 48.653,29.033 			" /> <polygon fill="#FFFFFF" points="39.181,13.276 41.398,13.276 41.398,15.497 39.181,15.497 			" /> <polygon fill="#FFFFFF" points="39.181,16.406 41.398,16.406 41.398,31.266 39.181,31.266 			" /> </g> <circle fill="#FFFFFF" cx="66.417" cy="22.5" r="13.5" /> <g> <g> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="527.418" y1="-1071.8267" x2="527.418" y2="-1047.1729" gradientTransform="matrix(1 0 0 -1 -461 -1037)"> <stop offset="0" style="stop-color:#1D1D1B" /> <stop offset="1" style="stop-color:#646363" /> </linearGradient> <circle fill="url(#SVGID_1_)" cx="66.417" cy="22.5" r="12.327" /> </g> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="54.09" y="10.173" width="24.654" height="24.654"> <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" /> </filter> </defs> <mask maskUnits="userSpaceOnUse" x="54.09" y="10.173" width="24.654" height="24.654" id="SVGID_2_"> <g filter="url(#Adobe_OpacityMaskFilter)"> </g> </mask> <g opacity="0.4" mask="url(#SVGID_2_)"> <circle fill="#010000" cx="66.417" cy="22.5" r="12.327" /> </g> </g> <polygon fill="#FFFFFF" points="68.178,20.756 68.178,16.045 64.656,16.045 64.656,20.756 59.961,20.756 59.961,24.277
 64.656,24.277 64.656,28.958 68.178,28.958 68.178,24.277 72.873,24.277 72.873,20.756 		" /> </g> </g> <rect x="46" y="15.972" fill="#DB0000" width="21" height="15.028" /> <path fill="#FFFFFF" d="M58.58,26.574c0,0.806-0.71,1.458-1.584,1.458h-0.991c-0.875,0-1.585-0.652-1.585-1.458v-6.177
 c0-0.806,0.71-1.459,1.585-1.459h0.991c0.874,0,1.584,0.653,1.584,1.459V26.574z" /> <path fill="#1D1D1D" d="M56.415,7c-4.022,0-7.285,2.99-7.309,6.688h3.368c0.03-2.016,1.811-3.641,4.007-3.641
 c2.217,0,4.014,1.652,4.014,3.692v2.232h3.236V13.73C63.731,10.014,60.455,7,56.415,7z" /> </svg> </a></div></div></div></div>  <div class="mt-2 font-bold menu-desktop-secondary flex"><div class="desktop-menu w-full flex items-center text-black uppercase justify-between md:text-xs lg:text-base"><ul id="menu-desktop_menu" class="flex justify-around w-full"><li id="menu-item-6" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6"><a href="https://www.bild.de/kreditkarten/">Kreditkarten Vergleich</a></li><li id="menu-item-7" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"><a href="https://www.bild.de/kreditkarten/kostenlose-kreditkarten/">Kostenlose Kreditkarte</a></li><li id="menu-item-8" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8"><a href="https://www.bild.de/kreditkarten/kreditkarten-ohne-schufa/">Kreditkarte ohne Schufa</a></li><li id="menu-item-9178" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-9178"><a href="https://www.bild.de/kreditkarten/prepaid-kreditkarten/" aria-current="page">Prepaid Kreditkarte</a></li><li id="menu-item-10" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10"><a href="https://www.bild.de/kreditkarten/reisekreditkarten/">Reisekreditkarte</a></li></ul></div><div style="width: 64px; height: 35px"> <img src="https://www.bild.de/kreditkarten/wp-content/themes/bild-wp-theme/assets/images/noctua-media-gmbh-service.png" alt="Noctua Media GmbH" width="64" height="35" /></div></div> </div> </nav><div class="flex flex-col justify-center max-w-5xl mx-auto xl:flex-row px-4 xl:px-0"><div class="w-full flex justify-between flex flex-col"><main role="main" class="w-full"><article class="mt-6"><div class="flex justify-between items-center"><div class="breadcrumb sm:flex-1 max-w-2xl my-6 mr-6 sm:mx-auto pl-4 xl:pl-7 text-sm truncate sm:flex flex-nowrap overflow-x-scroll justify-start"> <a href="https://www.bild.de/kreditkarten/">Kreditkarten</a> › <span class="mx-1 flex-none font-semibold">Prepaid Kreditkarte &#8211; 10 aufladbare Mastercard &#038; VISA Karten im Vergleich</span></div><aside class="sm:hidden" style="min-width: 50px"> <img src="https://www.bild.de/kreditkarten/wp-content/themes/bild-wp-theme/assets/images/noctua-media-gmbh-service.png" alt="Noctua Media GmbH" width="64" height="35" /></aside></div><div class="flex flex-col md:flex-row justify-between max-w-2xl mx-auto"><div class="text-center flex flex-col justify-between text-center"></div></div><header class="h-min-16 mx-auto max-w-2xl"><h1 class="font-semibold break-words text-3xl sm:text-4xl leading-tight mt-6 mb-6 ">Prepaid Kreditkarte &#8211; 10 aufladbare Mastercard &#038; VISA Karten im Vergleich</h1><h2 class="font-medium break-words text-2xl leading-normal my-2 text-grey-100">➤ Prepaid Kreditkarte - Kreditkarten zum Aufladen: Top-Angebote ✓ 100% Kostenkontrolle ✓ Ohne Schufa-Abfrage ✓ Online-Shopping</h2><div class="flex items-center"><div><div class="wp-block-image rounded-full is-style-rounded"> <a href="https://www.bild.de/kreditkarten/author/hagen/" rel="author"><figure class="aligncenter size-large is-resized"> <picture> <source srcset="https://www.bild.de/kreditkarten/wp-content/uploads/2021/06/hagen-foehr-300x300.jpg.webp" as="image/webp"> <img src="https://www.bild.de/kreditkarten/wp-content/uploads/2021/06/hagen-foehr-300x300.jpg" data-src="https://www.bild.de/kreditkarten/wp-content/uploads/2021/06/hagen-foehr-300x300.jpg" alt="Hagen Föhr" class="wp-image-145 ls-is-cached" loading="eager" width="80" height="80" /> </picture></figure> </a></div></div><div class="w-full flex items-center text-sm"><div class="ml-2 w-11/12"><div>von: <a href="https://www.bild.de/kreditkarten/author/hagen/" rel="author" style="text-decoration:underline">Hagen Föhr</a></div><div>Experte für Finanzprodukte</div><div style="color: #a0aec0;" class="text-sm md:hidden">21.12.2023</div></div><div class="flex hidden md:block text-right" style="color: #a0aec0;">Zuletzt aktualisiert: <time datetime="2023-12-21T16:35:00+01:00">21.12.2023</time></div></div></div><section class="text-sm flex items-center justify-between my-2"></section></header><section><div class="entry"><p>Die Gründe für die Beantragung einer Prepaid Kreditkarte können sehr unterschiedlich sein, oftmals ist die Kostenkontrolle ein wichtiger Punkt, andere Antragsteller*innen verfügen über kein geregeltes Einkommen und greifen daher auf derartig