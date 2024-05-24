"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4263],{44263:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s=n(52322),u=n(2784),r=n(28316),c=n(45237),a=n(59175),i=n(2418);function l(e){let t=(0,a.T)(),{isShow:n,displayMessage:l}=(0,a.C)(e=>e.toast);return(0,u.useEffect)(()=>{let s;return n&&(s=setTimeout(()=>{t((0,i.PE)())},e.timeout?e.timeout:c.T)),()=>{clearTimeout(s)}},[n,e.timeout,t]),(0,r.createPortal)((0,s.jsx)(s.Fragment,{children:n&&(0,s.jsx)("div",{className:"fixed bottom-28 flex justify-center w-full z-50",children:(0,s.jsx)("div",{className:"bg-wynk-toast-background py-3 rounded-lg w-2/5",children:l&&(0,s.jsx)("div",{className:"text-base text-center text-white",children:l})})})}),document.getElementById("wynk-toast"))}}}]);			var _this = $( this );

			e.preventDefault();
			_this.toggleClass( 'toggled-on' );
			_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );

			_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

		});
	}

	initMainNavigation( $( '.mobile-navigation' ) );

	masthead       = $( '#masthead' );
	menuToggle     = masthead.find( '.menu-toggle' );
	siteNavContain = masthead.find( '.mobile-navigation' );
	siteNavigation = masthead.find( '.main-navigation > div > div > ul' );

	// Enable menuToggle.
	(function() {

		// Return early if menuToggle is missing.
		if ( ! menuToggle.length ) {
			return;
		}

		// Add an initial value for the attribute.
		menuToggle.attr( 'aria-expanded', 'false' );

		menuToggle.on( 'click.bam', function() {
			siteNavContain.toggleClass( 'toggled-on' );

			$( this ).attr( 'aria-expanded', siteNavContain.hasClass( 'toggled-on' ) );
		});
	})();

	// Fix sub-menus for touch devices and better focus for hidden submenu items for accessibility.
	(function() {
		if ( ! siteNavigation.length || ! siteNavigation.children().length ) {
			return;
		}

		// Toggle `focus` class to allow submenu access on tablets.
		function toggleFocusClassTouchScreen() {
			if ( 'none' === $( '.menu-toggle' ).css( 'display' ) ) {

				$( document.body ).on( 'touchstart.bam', function( e ) {
					if ( ! $( e.target ).closest( '.main-navigation li' ).length ) {
						$( '.main-navigation li' ).removeClass( 'focus' );
					}
				});

				siteNavigation.find( '.menu-item-has-children > a, .page_item_has_children > a' )
					.on( 'touchstart.bam', function( e ) {
						var el = $( this ).parent( 'li' );

						if ( ! el.hasClass( 'focus' ) ) {
							e.preventDefault();
							el.toggleClass( 'focus' );
							el.siblings( '.focus' ).removeClass( 'focus' );
						}
					});

			} else {
				siteNavigation.find( '.menu-item-has-children > a, .page_item_has_children > a' ).unbind( 'touchstart.bam' );
			}
		}

		if ( 'ontouchstart' in window ) {
			$( window ).on( 'resize.bam', toggleFocusClassTouchScreen );
			toggleFocusClassTouchScreen();
		}

		siteNavigation.find( 'a' ).on( 'focus.bam blur.bam', function() {
			$( this ).parents( '.menu-item, .page_item' ).toggleClass( 'focus' );
		});
	})();
})( jQuery );



/**
 * Search Box.
 */
( function( $ ) {
	var searchButton = $( '.bam-search-button-icon' );

	searchButton.on( 'click.bam', function() {
		var _this 		= $( this ),
			icon		= _this.find( 'i' ),
			container 	= _this.parent().find( '.bam-search-box-container' );

			container.toggleClass( 'active' );

			if ( icon.hasClass( 'fa-search' ) ) {
				icon.removeClass( 'fa-search' );
				icon.addClass( 'fa-times' );
			} else {
				icon.removeClass( 'fa-times' );
				icon.addClass( 'fa-search' );
			}

		if( container.is( '.active' ) ) {
			container.find( '.search-field' ).focus();
		}
	} );

})( jQuery );