/**
 * Touch & Keyboard navigation.
 *
 * Contains handlers for touch devices and keyboard navigation.
 */

(function() {

	/**
	 * Debounce.
	 *
	 * @param {Function} func
	 * @param {number} wait
	 * @param {boolean} immediate
	 */
	
	/**
	 * Add class.
	 *
	 * @param {Object} el
	 * @param {string} cls
	 */
	
	/**
	 * Delete class.
	 *
	 * @param {Object} el
	 * @param {string} cls
	 */
	
	/**
	 * Has class?
	 *
	 * @param {Object} el
	 * @param {string} cls
	 *
	 * @returns {boolean} Has class
	 */
	
	/**
	 * Toggle Aria Expanded state for screenreaders.
	 *
	 * @param {Object} ariaItem
	 */
	
	/**
	 * Open sub-menu.
	 *
	 * @param {Object} currentSubMenu
	 */
	
	/**
	 * Close sub-menu.
	 *
	 * @param {Object} currentSubMenu
	 */
	
	/**
	 * Find first ancestor of an element by selector.
	 *
	 * @param {Object} child
	 * @param {String} selector
	 * @param {String} stopSelector
	 */
	
	/**
	 * Remove all off-canvas states.
	 */
	
	/**
	 * Matches polyfill for IE11.
	 */
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector;
	}

	/**
	 * Toggle `focus` class to allow sub-menu access on touch screens.
	 */
	function toggleSubmenuDisplay() {

		document.addEventListener('touchstart',  false);

		document.addEventListener('touchend',  false);

		document.addEventListener('focus', function(event) {

			if ( event.target.matches('.main-navigation > div > ul > li a') ) {

				// Remove Focused elements in sibling div.
				var currentDiv        = getCurrentParent( event.target, 'div', '.main-navigation' );
				var currentDivSibling = currentDiv.previousElementSibling === null ? currentDiv.nextElementSibling : currentDiv.previousElementSibling;
				var focusedElement    = currentDivSibling.querySelector( '.is-focused' );
				var focusedClass      = 'is-focused';
				var prevLi            = getCurrentParent( event.target, '.main-navigation > div > ul > li', '.main-navigation' ).previousElementSibling;
				var nextLi            = getCurrentParent( event.target, '.main-navigation > div > ul > li', '.main-navigation' ).nextElementSibling;

				if ( null !== focusedElement && null !== hasClass( focusedElement, focusedClass ) ) {
					deleteClass( focusedElement, focusedClass );
				}

				// Add .is-focused class to top-level li.
				if ( getCurrentParent( event.target, '.main-navigation > div > ul > li', '.main-navigation' ) ) {
					addClass( getCurrentParent( event.target, '.main-navigation > div > ul > li', '.main-navigation' ), focusedClass );
				}

				// Check for previous li.
				if ( prevLi && hasClass( prevLi, focusedClass ) ) {
					deleteClass( prevLi, focusedClass );
				}

				// Check for next li.
				if ( nextLi && hasClass( nextLi, focusedClass ) ) {
					deleteClass( nextLi, focusedClass );
				}
			}

		}, true);

		document.addEventListener('click',  false);
	}

	/**
	 * Run our sub-menu function as soon as the document is `ready`.
	 */
	document.addEventListener( 'DOMContentLoaded', ;

	/**
	 * Run our sub-menu function on selective refresh in the customizer.
	 */
	document.addEventListener( 'customize-preview-menu-refreshed', ;

	/**
	 * Run our sub-menu function every time the window resizes.
	 */
	var isResizing = false;
	window.addEventListener( 'resize', );

})();
