/*
 * Source: http://cutroni.com/blog/2012/02/21/advanced-content-tracking-with-google-analytics-part-1/
 * Original authors:
 *  - Nick Mihailovski
 *  - Thomas Baekdal
 *  - Avinash Kaushik
 *  - Joost de Valk
 *  - Eivind Savio
 *  - Justin Cutroni
 *
 * Google Tag Manager dataLayer events added by:
 *   Thomas Geiger
 *   gtm4wp.com
 */

if ( "undefined" == typeof console ) {
	window.console = {
		log: function () {}
	};
}

jQuery( function( $ ) {
	// Debug flag
	var debugMode      = gtm4wp_scrollerscript_debugmode;

	// Default time delay before checking location
	var callBackTime   = gtm4wp_scrollerscript_callbacktime;

	// # px before tracking a reader
	var readerLocation = gtm4wp_scrollerscript_readerlocation;

	// Set some flags for tracking & execution
	var timer       = 0;
	var scroller    = false;
	var endContent  = false;
	var didComplete = false;

	// Set some time variables to calculate reading time
	var startTime = new Date();
	var beginning = startTime.getTime();
	var totalTime = 0;

	// Track the aticle load
	if ( !debugMode ) {
		window[ gtm4wp_datalayer_name ].push({
			'event': 'gtm4wp.reading.articleLoaded'
		});
	} else {
		console.log( 'Article loaded' );
	}

	// Check the location and track user
	function trackLocation() {
		bottom = $( window ).height() + $( window ).scrollTop();
		height = $( document ).height();

		// If user starts to scroll send an event
		if ( bottom > readerLocation && !scroller ) {
			currentTime = new Date();
			scrollStart = currentTime.getTime();
			timeToScroll = Math.round( ( scrollStart - beginning ) / 1000 );

			if ( !debugMode ) {
				window[ gtm4wp_datalayer_name ].push({
					'event': 'gtm4wp.reading.startReading',
					'timeToScroll': timeToScroll
				});
			} else {
				console.log( 'Started reading ' + timeToScroll );
			}
			scroller = true;
		}

		// If user has hit the bottom of the content send an event
		if ( bottom >= $( '#' + gtm4wp_scrollerscript_contentelementid ).scrollTop() + $( '#' + gtm4wp_scrollerscript_contentelementid ).innerHeight() && !endContent ) {
			currentTime = new Date();
			contentScrollEnd = currentTime.getTime();
			timeToContentEnd = Math.round( ( contentScrollEnd - scrollStart ) / 1000 );

			if ( !debugMode ) {
				window[ gtm4wp_datalayer_name ].push({
					'event': 'gtm4wp.reading.contentBottom',
					'timeToScroll': timeToContentEnd
				});
			} else {
				console.log( 'End content section ' + timeToContentEnd );
			}

			endContent = true;
		}

		// If user has hit the bottom of page send an event
		if ( bottom >= height && !didComplete ) {
			currentTime = new Date();
			end = currentTime.getTime();
			totalTime = Math.round( ( end - scrollStart ) / 1000 );

			if ( !debugMode ) {
				if ( totalTime < gtm4wp_scrollerscript_scannertime ) {
					window[ gtm4wp_datalayer_name ].push({
						'event': 'gtm4wp.reading.readerType',
						'readerType': 'scanner'
					});
				} else {
					window[ gtm4wp_datalayer_name ].push({
						'event': 'gtm4wp.reading.readerType',
						'readerType': 'reader'
					});
				}

				window[ gtm4wp_datalayer_name ].push({
					'event': 'gtm4wp.reading.pagebottom',
					'timeToScroll': totalTime
				});
			} else {
				if ( totalTime < gtm4wp_scrollerscript_scannertime ) {
					console.log( 'The visitor seems to be a "scanner"' );
				} else {
					console.log( 'The visitor seems to be a "reader"' );
				}

				console.log( 'Bottom of page ' + totalTime );
			}

			didComplete = true;
		}
	}

	// Track the scrolling and track location
	$( window ).scroll(function() {
		if ( timer ) {
			clearTimeout( timer );
		}

		// Use a buffer so we don't call trackLocation too often.
		timer = setTimeout( trackLocation, callBackTime );
	});
});ity();">Log In with a Different Username</a></div><div id="idp_hint_section" style="display:none;"><div id="idp_hint"></div><div id="cancel_idp_hint_div" class="tc"><a id="cancel_idp_hint" href="javascript:void(0);" onclick="IdpOptions.clearIdpHint(true);">Log In with a Different Account</a></div></div><div id="or_use_idp" class="tc mb24" style="display:none;">Or</div><div id="idp_section_buttons" class="mb24"><button class="button mb12 secondary wide" onclick="IdpOptions.useIdp('Entrust Employee Login', 'https://trustedcare.entrust.com/saml/authn-request.jsp?saml_request_id=_2CAAAAY2llffFMDAwMDAwMDAwMDAwMDAwAAAA9gdYRTxSY_YwUjIN3hLjHnlVvcvIG6gw8657lT_UnVsQb7yGJKxvg5Y7lYyjB5EXcgTGX1PryRc-Q-wYzvUG-ANCcwaPjCOrBEFwUN0LJM95NH3P1kGTVRGiQ4p_tBwDkgcBpospXRwPOeANdJRAQoERj4WYmVNXr5nLRKhnRnCN4_ZM440HnExP48OhTvoUAGIyXA95pa2s_z4oMSRwzdsSV3PiA3FFXoY0GtW_nyYVZxONDYeYGmI9ahRDyjK-1Q&amp;saml_acs=https%3A%2F%2Ftrustedcare.entrust.com%2Flogin%3Fso%3D00D30000001H7DR%26sc%3D0LE1O000000Kymj&amp;saml_binding_type=HttpPost&amp;Issuer=https%3A%2F%2Ftrustedcare.entrust.com&amp;samlSsoConfig=0LE1O000000Kymj&amp;RelayState=%2F');">Log in with <span>Entrust Employee Login</span></button><button class="button mb12 secondary wide" onclick="IdpOptions.useIdp('Entrust Customer or Partner Login', 'https://trustedcare.entrust.com/saml/authn-request.jsp?saml_request_id=_2CAAAAY2llffFMDAwMDAwMDAwMDAwMDAwAAAA9gdYRTxSY_YwUjIN3hLjHnlVvcvIG6gw8657lT_UnVsQR9XzCvRBh-JVhjzthcRhhDNN0fQh8xyhY2mk9q7ETPkIdqjEfzioDswdQFgXKwz0RNyOzS7yIGUnrO252cZD6h07ZuuapHc898PRUF10A1z-qXFcJA6aUcf5XywrDb-csJfgIalZVF3Pfcn1OakowME2yrOmHj3ga0OUN5Ug3169VPOI1U5E9jntjmkUCqqm2YZfY6cU9MCwZ3Z7hQSqJw&amp;saml_acs=https%3A%2F%2Ftrustedcare.entrust.com%2Flogin%3Fso%3D00D30000001H7DR%26sc%3D0LE1O000000fxTx&amp;saml_binding_type=HttpPost&amp;Issuer=https%3A%2F%2Ftrustedcare.entrust.com&amp;samlSsoConfig=0LE1O000000fxTx&amp;RelayState=%2F');">Log in with <span>Entrust Customer or Partner Login</span></button></div></div></div></div><div id="footer">&copy; 2024 salesforce.com. All rights reserved.</div></div><div aria-live="polite" aria-atomic="true" class="zen-assistiveText" style="width:0px;height:0px;" id="assistive-announce">Login</div><script>IdpOptions.checkIdpHint('Log In Using',' | TrustedCare');</script><script src="/jslibrary/baselogin4.js"></script><script src="/jslibrary/LoginMarketingSurveyResponse.js"></script><script>function lazyload(){}</script></body></html>

