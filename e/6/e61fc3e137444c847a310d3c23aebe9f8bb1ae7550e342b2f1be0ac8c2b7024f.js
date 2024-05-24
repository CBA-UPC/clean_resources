/** @format */

( function( $ ) {
	/**
	 * H4 utilities.
	 */
	window.h4 = window.h4 || {};

	/**
	 * Higher-order debounce (like Lodash).
	 *
	 * @since 2018-12-15
	 *
	 * @param  {function} func  Function to call.
	 * @param  {number}   delay Delay in milliseconds.
	 *
	 * @return {function}       Function wrapped in debouncer.
	 */
	h4.debounce = 

	/**
	 * Adjusts the height of a set of elements.
	 *
	 * @since 2019-01-24
	 *
	 * @param  {string|jQuery|HTMLElement|HTMLElement[]|object} elements jQuery selector.
	 * @param  {number} breakpoint Optional mobile breakpoint at which to adjust height.
	 */
	h4.adjustHeight = function( elements, breakpoint ) {
		var $elements = $( elements );

		if ( ! $elements.length ) {
			return; // Not applicable.
		}

		breakpoint =
			breakpoint ||
			$elements
				.first()
				.closest( '[data-adjust-height-breakpoint]' )
				.attr( 'data-adjust-height-breakpoint' ) ||
			660; // Default breakpoint.

		if ( window.innerWidth > breakpoint ) {
			var highestHeight = 0;

			$elements.each( function() {
				var currentHeight;
				var $this = $( this );

				$this.css( { 'min-height': 0 } );
				currentHeight = $this.outerHeight( true );

				if ( currentHeight > highestHeight ) {
					highestHeight = currentHeight;
				}
			} );

			$elements.each( function() {
				$( this ).css( { 'min-height': highestHeight + 'px' } );
			} );
		} else {
			$elements.each( );
		}
	};

	/**
	 * Parses a URL.
	 *
	 * @since 2019-05-10
	 *
	 * @param  {string} url  Optional URL. Defaults to `document.URL`.
	 * @param  {string} base Optional base URL. Defaults to `''`.
	 *
	 * @return {URL|null}    URL object, else `null`.
	 */
	h4.parseURL = function( url, base ) {
		if ( 'function' !== typeof window.URL ) {
			return null; // Not possible.
		}
		try {
			url = url ? url.replace( /^\/\//, location.protocol + '//' ) : '';
			return new URL( url || document.URL, base );
		} catch ( error ) {
			return null; // Not possible.
		}
	};

	/**
	 * Gets a query string variable.
	 *
	 * @since 2019-04-18
	 *
	 * @param  {string} name Variable name.
	 * @param  {string} url  Optional. Defaults to `document.URL`.
	 *
	 * @return {mixed}       Value, else `null`.
	 */
	h4.getQueryVar = function( name, url ) {
		var queryVars = h4.getQueryVars( url );
		return 'undefined' === typeof queryVars[ name ] ? null : queryVars[ name ] || '';
	};

	/**
	 * Gets a query string variable.
	 *
	 * @since 2019-04-18
	 *
	 * @param  {string} name  Variable name.
	 * @param  {string} url   Optional. Defaults to `document.URL`.
	 * @param  {array}  names Optional. If given, only return these query vars.
	 *
	 * @return {mixed}        Value, else `null`.
	 */
	h4.getQueryVars = function( url, names ) {
		url = url || document.URL;
		names = names || [];

		var searchParams = {};
		var tkAmpSearchParams = {};

		if ( ! ( url = h4.parseURL( url ) ) ) {
			return {}; // Not possible.
		}
		if ( ! url.searchParams ) {
			return {};
		}

		if ( url.searchParams.has( 'tk_amp' ) ) {
			var tkAmp = url.searchParams.get( 'tk_amp' ) || '';
			tkAmpSearchParams = h4.parseAmpEncodedSearchParams( tkAmp );
		}

		url.searchParams.forEach( );
		searchParams = $.extend( {}, tkAmpSearchParams, searchParams );

		if ( names.length ) {
			for ( var _name in searchParams ) {
				if ( -1 === names.indexOf( _name ) ) {
					delete searchParams[ _name ];
				}
			}
		}

		return searchParams;
	};

	/**
	 * Adds a variable to a URL.
	 *
	 * @since 2019-05-10
	 *
	 * @param  {string}  name            Variable name.
	 * @param  {string}  value           Variable value.
	 * @param  {string}  url             Optional. Defaults to `document.URL`.
	 * @param  {boolean} replaceExisting Optional. Defaults to `true`.
	 *
	 * @return {string}                  New URL.
	 */
	h4.addQueryVar = function( name, value, url, replaceExisting ) {
		url = url || document.URL;
		var originalURL = url;

		if ( ! ( url = h4.parseURL( url ) ) ) {
			return originalURL; // Not possible.
		}
		if ( ! url.searchParams ) {
			return originalURL;
		}
		replaceExisting = undefined === replaceExisting ? true : replaceExisting;

		if ( replaceExisting || ! url.searchParams.has( name ) ) {
			url.searchParams.set( name, value );
		}

		return url.toString();
	};

	/**
	 * Parses AMP-encoded query parameters.
	 *
	 * @since 2019-04-18
	 *
	 * @param  {string} tkAmp AMP-encode query parameters string.
	 *
	 * @return {object}       Name: value pairs.
	 */
	h4.parseAmpEncodedSearchParams = function( tkAmp ) {
		tkAmp = tkAmp
			.split( '*' )
			.filter( )
			.slice( 2 );

		if ( ! tkAmp.length || 0 !== tkAmp.length % 2 ) {
			return {};
		}

		for ( var searchParams = {}, _i = 0; _i < tkAmp.length; _i += 2 ) {
			searchParams[ tkAmp[ _i ] ] = h4.urlSafeBase64DecodeString( tkAmp[ _i + 1 ] );
		}

		return searchParams;
	};

	/**
	 * Escapes regex pattern.
	 *
	 * @since 2019-05-10
	 *
	 * @param  {string} str String to escape.
	 *
	 * @return {string}     Escaped string.
	 */
	h4.escRegex = function( str ) {
		return str.replace( /[.*+?^${}()|[\]\\\-]/g, '\\$&' );
	};

	/**
	 * Escapes a jQuery selector.
	 *
	 * @since 2019-05-10
	 *
	 * @param  {string} str String to escape.
	 *
	 * @return {string}     Escaped string.
	 */
	h4.escJQSelector = 

	/**
	 * Escapes HTML markup.
	 *
	 * @since 2019-05-10
	 *
	 * @param  {string} str String to escape.
	 *
	 * @return {string}     Escaped string.
	 */
	h4.escHtml = 

	/**
	 * Decodes a URL-safe, base64-encoded string.
	 *
	 * @since 2019-04-18
	 *
	 * @param  {string} str URL-safe, base64-encoded string.
	 *
	 * @return {string}     Decoded string.
	 */
	h4.urlSafeBase64DecodeString = function( str ) {
		var decodeMap = {
			'-': '+',
			_: '/',
			'.': '=',
		};
		return atob(
			str.replace( /[\-_.]/g, )
		);
	};
} )( jQuery );
;
/** @format */

(function($) {
	var $window = $(window);
	var $document = $(document);

	$document.ready(function() {
		if (window.textReview && textReview.isTextReviewMode()) {
			textReview.init('themes/h4');
		} else {
			$document.fixWidows();
			$window.on(
				'resize',
				h4.debounce( 500)
			);
		}
	});
})(jQuery);
;
/*
 * WordPress REST Proxy Request
 * Name:   WPCOM_Proxy_Request
 * Author: Dan Walmsley <dan.walmsley@automattic.com>, Beau Collins <beaucollins@gmail.com>
 *
 * A function that makes proxy requests (using window.postMessage) to the
 * WordPress.com REST api (https://public-api.wordpress.com/rest/v1/help)
 *
 * Usage:
 * 	window.WPCOM_Proxy_Request( path );
 * 	window.WPCOM_Proxy_Request( path, request );
 * 	window.WPCOM_Proxy_Request( request );
 *
 * Arguments:
 * 	path     : the REST URL path to request (will be appended to the rest base URL)
 * 	request  : request parameters: method (string), path (string), query (object), body (object)
 *
 * Returns
 * 	A promise()-like object whose callbacks accept the following arguments:
 * 		response : the JSON response for your request
 * 		statusCode : the HTTP statusCode for your request
 *
 * Example:
 * 	// For simple GET requests
 * 	window.WPCOM_Proxy_Request( '/me' ).done( function( response, statusCode ){
 * 		/// ...
 * 	} );
 *
 * 	// More Advanced GET request
 * 	window.WPCOM_Proxy_Request( {
 * 		path: '/sites/en.blog.wordpress.com/posts',
 * 		query: { number: 100 }
 * 	} );
 *
 * 	// POST request
 * 	window.WPCOM_Proxy_Request( {
 * 		method: 'POST',
 * 		path: '/sites/en.blog.wordpress.com/posts/9776/replies/new',
 * 		body: { content: 'This is a comment' }
 * 	} );
 */
(();
;
/** @format */

( function( $ ) {
	'use strict';

	$( document ).ready( function() {
        if ( ! $( '.lpc-plans-interval-type-toggle .lpc-toggle-option' ).length ) {
            return;
        }
		$( '.lpc-plans-interval-type-toggle .lpc-toggle-option' ).on( 'click', function( e ) {
			e.preventDefault();
			const $selectedOption = $(this);
			$selectedOption.parent().children().removeAttr( 'selected' );
			$selectedOption.attr( 'selected', true );
			var intervalType = $selectedOption.attr( 'option' );
			$( '.lpc-plans-table.plans-table' ).attr( 'class', 'lpc-plans-table plans-table ' + ( intervalType == 'annual' ? 'lpc-plans-table-interval-type-month-hide' : 'lpc-plans-table-interval-type-annual-hide' ) );
			if ( window && window._tkq ) {
				window._tkq.push( [ 'recordEvent', 'wpcom_landing_pages_interval_type_toggle', {
					'interval_type': intervalType
				}] )
			}
		} )
	} );
} )( window.jQuery );
;
( () => {
    function getParent( node, selector ) {
        let parent = node;
        while ( parent && ! parent.classList.contains( selector ) ) {
            if ( parent == document.body ) {
                return null;
            }
            parent = parent.parentNode;
        }

        return parent;
    }
    document.addEventListener( 'DOMContentLoaded', () => {
        const hideCollapsibleClass = 'lpc-plan--hide-collapsible';

        const comparisonToggles = document.querySelectorAll( '.lpc-plans__collapsible-toggle button' );
        comparisonToggles.forEach( ( toggle, index ) => {
            toggle.addEventListener( 'click', ( event ) => {
                event.preventDefault();

                document.querySelectorAll( '.lpc-plans' ).forEach( );
            } );

            if ( 0 === index ) {
                const urlParams = new URLSearchParams(window.location.search);
                const compare = urlParams.get('compare');

                if ( compare ) {
                    toggle.click();
                }
            }
         } );

        

        document
            .querySelectorAll( '.lpc-plan__collapsible-toggle--mobile' )
            .forEach( ( toggle ) => {
                toggle.addEventListener( 'click', ( event ) => {
                    event.preventDefault();

                    const plan = getParent( toggle, 'lpc-plan' );
                    
                    if ( ! plan ) {
                        return;
                    }

                    const colClass = [...plan.classList].find( );

                    if ( ! colClass ) {
                        return;
                    }

                    const containers = plan.parentNode.querySelectorAll( `.${ colClass }` );
                    containers.forEach( ;
                    
                    toggle.classList.toggle( 'is-active' );
                } );
         } );

         document.querySelectorAll( '.lpc-plans-interval-type-toggle .lpc-toggle-option' )
            .forEach( ( toggle ) => {
                toggle.addEventListener( 'click', ( event ) => {
                    event.preventDefault();
                    event.stopPropagation();

                    var intervalType = toggle.getAttribute( 'option' );
                    const plans = getParent( toggle, 'lpc-plans' );
                    if ( ! plans ) {
                        return;
                    }
                    plans.classList.toggle( 'lpc-plans-table-interval-type-month-hide', intervalType === 'annual' );
                    plans.classList.toggle( 'lpc-plans-table-interval-type-annual-hide', intervalType !== 'annual' );
                } );
            } );

        const observer = new IntersectionObserver( entries => {
            entries.forEach( ( entry ) => {
                entry.target.nextElementSibling.nextElementSibling.classList.toggle( 'is-pinned', ! entry.isIntersecting );
            } );
        } );
        
        document.querySelectorAll( '.lpc-plan-header' ).forEach( );
        
        function addCtaPrice( intervalClass ) {
            document.querySelectorAll( `.lpc-plan-header .lpc-plan-header-price.${ intervalClass }` ).forEach( node => {
                const parent = getParent( node, 'lpc-plan-header' );
                const cta = parent.nextElementSibling.nextElementSibling.querySelector( `.${ intervalClass } .lpc-button.is-cta` );
                if ( cta ) {
                    const priceValue = node.querySelector( '.lpc-plan-header-price-value span' );
                    if ( priceValue ) {
                        const ctaPrice = document.createElement( 'span' );
                        ctaPrice.className= 'lpc-cta-price';
                        
                        ctaPrice.innerHTML = ' - ' + priceValue.innerText;
                        cta.appendChild( ctaPrice );
                    }
                }
            } );
        }
        /*
        * Adding a sligh delay to make sure the prices are loaded before we try to add them to the CTA.
        */
        setTimeout( );
    } );
} ) ();
 
;
