/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

( function( $ ) {
	var body, masthead, menuToggle, siteNavigation, socialNavigation, siteHeaderMenu, resizeTimer;

		initMainNavigation( $( '.main-navigation' ) );

	masthead         = $( '#masthead' );
	menuToggle       = masthead.find( '#menu-toggle' );
	siteHeaderMenu   = masthead.find( '#site-header-menu' );
	siteNavigation   = masthead.find( '#site-navigation' );
	socialNavigation = masthead.find( '#social-navigation' );

	// Enable menuToggle.
	( )();

	// Fix sub-menus for touch devices and better focus for hidden submenu items for accessibility.
	( )();

	// Add the default ARIA attributes for the menu toggle and the navigations.
	
	// Add 'below-entry-meta' class to elements.
	
	$( document ).ready( );
} )( jQuery );
