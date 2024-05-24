/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();
ontal-slider-handle:last-child:after{left:7px;transform:rotate(-135deg)}.horizontal-slider-handle:disabled{opacity:.5;pointer-events:none}button[disabled]:after{opacity:.5}.horizontal-slider-wrapper{display:flex;gap:12px;list-style:none;margin-left:-4px;margin-right:-4px;overflow-x:scroll;overscroll-behavior:contain;padding:6px 4px 24px;scroll-snap-type:inline mandatory;scrollbar-width:none}.horizontal-slider-wrapper::-webkit-scrollbar{height:0}.horizontal-slider-wrapper>a{flex:none;position:relative;scroll-snap-align:center}