/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,;
jQuery.noConflict();;
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),;
;
jQuery( ($) => {

	// If we're on mobile, add the "global-nav__mobile" class to the global nav.
	const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
	if ( isMobile ) {
		$( '#global-navigation' ).addClass( 'global-nav__mobile' );
	}

	// We need checks later to see which menu is open based on screen size.
	let mobileMenu  = window.matchMedia("only screen and (max-width: 800px)").matches;
	let tabletMenu  = window.matchMedia("only screen and (min-width: 801px) and (max-width: 1023px)").matches;
	let desktopMenu = window.matchMedia("only screen and (min-width: 1024px)").matches;

	// On window resize, check if we're on mobile or not and add the class if we are.
	// On window resize update our menu booleans.
	$( window ).on('resize', function() {
		const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
		mobileMenu = window.matchMedia("only screen and (max-width: 800px)").matches;
		tabletMenu = window.matchMedia("only screen and (min-width: 801px) and (max-width: 1023px)").matches;
		desktopMenu = window.matchMedia("only screen and (min-width: 1024px)").matches;
		if ( isMobile ) {
			$( '#global-navigation' ).addClass( 'global-nav__mobile' );
		} else {
			$( '#global-navigation' ).removeClass( 'global-nav__mobile' );
		}
	});

	// Upon clicking the "#global-nav-trigger", add the "hidden" attribute on the "#global-navigation" element if we have it, or remove it if we don't.
	$( '.hds-explore-nav-trigger' ).on( 'click', function() {

		// Get the button within the clicked element.
		const hdsExploreButton = this.querySelector( 'button' );

		// If the "aria-expanded" attribute is false, open the explore nav.
		if ( 'false' === hdsExploreButton.getAttribute( 'aria-expanded' ) ) {
			setupTabFlow( 'desktopTrigger' );
			openExploreNav();
		} else {
			closeExploreNav();
		}
	} );

	// Upon clicking .hds-global-menu-toggle, check if aria-expanded is true or false and open or close the menu accordingly.
	$( '#global-navigation-trigger--mobile' ).on( 'click', function( e ) {
		e.preventDefault();
		e.stopPropagation();

		// We don't need to get the button here because it's on the clicked element.
		const hdsGlobalMenuButton = e.currentTarget;

		// If the "aria-expanded" attribute is false, open the explore nav.
		if ( 'false' === hdsGlobalMenuButton.getAttribute( 'aria-expanded' ) ) {
			setupTabFlow( 'mobileTrigger' );
			openExploreNav();
		} else {
			closeExploreNav();
		}
	} );

	// Open the explore nav.
	function openExploreNav() {
		// Open the global navigation.
		$( '#global-navigation' ).attr( 'hidden', false );
		$( '#global-navigation' ).attr( 'aria-expanded', 'true' );

		// aria-expand the hds-explore-nav-trigger button.
		$( '.hds-explore-nav-trigger button' ).attr( 'aria-expanded', 'true' );
		$( '.hds-global-menu-toggle' ).attr( 'aria-expanded', 'true' );

		// Add or remove the hds global menu toggle class.
		$( '.hds-global-menu-toggle' ).addClass( 'menu-toggle-active' );
		$( '.hds-global-menu-toggle' ).attr( 'data-menu-action', 'open' );

		// Add a class to the body to prevent scrolling.
		$( 'html' ).addClass( 'html-fixed' );

		if ( ! mobileMenu ) {
			initHomeTabFlow();
		}
	}

	function closeExploreNav() {
		$( '#global-navigation' ).attr( 'hidden', 'hidden' );
		$( '#global-navigation' ).attr( 'aria-expanded', 'false' );

		// aria-expand the hds-explore-nav-trigger button.
		$( '.hds-explore-nav-trigger button' ).attr( 'aria-expanded', 'false' );
		$( '.hds-global-menu-toggle' ).attr( 'aria-expanded', 'false' );

		// Add or remove the hds global menu toggle class.
		$( '.hds-global-menu-toggle' ).removeClass( 'menu-toggle-active' );
		$( '.hds-global-menu-toggle' ).attr( 'data-menu-action', 'closed' );

		// Remove the body class.
		$( 'html' ).removeClass( 'html-fixed' );
	}

	// On click of ".global-nav__primary .usa-nav__submenu-item", log "Global Nav Clicked".
	$( '.global-nav__primary-list .hds-global-menu-item-trigger' ).on( 'click', function(e) {
		// Prevent default and stop propagation.
		e.preventDefault();
		e.stopPropagation();

		// Get the "submenu-id" of the clicked element.
		const submenuId = $( this ).attr( 'submenu-id' );

		// If the submenu ID is 'home', do the home actions.
		if ( 'global-nav-home' === submenuId ) {

			// Show the global nav home submenu.
			$( '.global-nav__home' ).attr( "hidden", false );

			// Hide the other columns.
			$( '.global-nav__secondary, .global-nav__tertiary' ).attr( 'hidden', 'hidden' );
			$( '.global-nav__secondary, .global-nav__tertiary' ).removeClass( 'global-nav__open' );

			// Add a global-nav__open class to the global-nav__home element.
			$( '.global-nav__home' ).addClass( 'global-nav__open' );

			// Remove "usa-current" class from all ".usa-nav__submenu-item" and add it to the clicked element.
			$( '.global-nav__primary-list .hds-global-menu-item-trigger' ).removeClass( 'usa-current' );
			$( this ).addClass( 'usa-current' );

			// If the clicked element has a parent of global-nav__primary, open the primary menu.
			if ( $( this ).parents( '.global-nav__primary' ).length ) {
				$( '.global-nav__primary, .global-nav__secondary' ).addClass( 'global-nav__open' );
			} else {
				$( '.global-nav__primary, .global-nav__secondary' ).removeClass( 'global-nav__open' );
			}

			// Remove active classes from primary and secondary submenu.
			$( '.global-nav__primary-submenu' ).removeClass( 'usa-active' );
			$( '.global-nav__secondary-submenu' ).removeClass( 'usa-active' );

			// Set tab flow for Desktop / Tablet
			// Mobile never displays this menu.
			if ( ! mobileMenu ) {
				const thisLink = $( this ).find('a').first();
				const firstLink = $( '.global-nav__home' ).find('a').first();
				const lastLink = $( '.global-nav__home' ).find('a').last();
				const nextLink = $( this ).next().find('a').first();

				setTabIntoSubmenu( thisLink, firstLink );
				getTabReturnPath( thisLink, firstLink );
				setTabNextPath( nextLink, lastLink );
			}

		} else {

			// Hide the global nav home submenu.
			$( '.global-nav__home' ).attr( 'hidden', 'hidden' );

			// Remove the hidden class from the secondary and tertiary columns.
			$( '.global-nav__secondary, .global-nav__tertiary' ).attr( 'hidden', false );

			// Remove "usa-current" class from all ".usa-nav__submenu-item" and add it to the clicked element.
			$( '.global-nav__primary-list .hds-global-menu-item-trigger' ).removeClass( 'usa-current' );
			$( this ).addClass( 'usa-current' );

			// Remove the "usa-active" class from all "global_nav__secondary" elements and add it to the matching "submenu-id".
			$( '.global-nav__secondary-submenu' ).removeClass( 'usa-active' );
			$( '.global-nav__secondary-submenu[submenu-id="' + submenuId + '"]' ).addClass( 'usa-active' );

			// Do the same thing with the tertiary submenu.
			$( '.global-nav__tertiary-submenu' ).removeClass( 'usa-active' );
			$( '.global-nav__tertiary-submenu[submenu-id="' + submenuId + '"]' ).addClass( 'usa-active' );

			// If the clicked element has a parent of global-nav__primary, open the primary menu.
			if ( $( this ).parents( '.global-nav__primary' ).length ) {
				$( '.global-nav__primary, .global-nav__secondary' ).addClass( 'global-nav__open' );
			} else {
				$( '.global-nav__primary, .global-nav__secondary' ).removeClass( 'global-nav__open' );
			}

			// Set tab flow for Desktop / Tablet / Mobile
			const thisLink = $( this ).find('a').first();

			if ( ! mobileMenu ) {
				const firstLink = $( '.global-nav__secondary-submenu[submenu-id="' + submenuId + '"]' ).find('a').first();
				const nextLink = $( this ).next().find('a').first();
				const lastLink = $( '.global-nav__tertiary-submenu[submenu-id="' + submenuId + '"]' ).find('a').last();

				setTabIntoSubmenu( thisLink, firstLink );
				getTabReturnPath( thisLink, firstLink );
				setTabNextPath( nextLink, lastLink );
			}

			if ( mobileMenu ) {
				const backButton = $( '.global-nav__back' ).first();
				const lastSecondaryLink = $( '.global-nav__secondary-submenu[submenu-id="' + submenuId + '"]' ).find('a').last();
				setupBackButton( thisLink, backButton );
				setupLoopMenu( backButton, lastSecondaryLink );
			}
		}
	} );

	//Mark all scrollers as passive
    jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.touchmove = {
        setup:     };

	// Add a click event listener to the document
	$(document).click(function(e) {

		// Check if the clicked element is a button or a submenu
		if ( ! $(e.target).parents('.hds-nav__inner').length ) {

			// Close all nav menus
			closeNavSubMenus();
		}

		// Check if the clicked element is a button or a submenu
		if ( ! $(e.target).parents('.global-nav__primary-wrapper, .hds-global-menu-toggle, .hds-explore-nav-trigger, #global-navigation').length ) {

			// Close the explore menu.
			closeExploreNav();
		}

	});

	// On click of ".global-nav__primary .usa-nav__submenu-item", log "Global Nav Clicked".
	// Add a click event listener to each menu item with a submenu
	$('.hds-nav-has-submenu button').click(function(e) {
		// Prevent the default behavior of clicking a link
		e.preventDefault();
	  
		const thisButton = this;
		const thisSubmenu = this.parentElement.querySelector('.hds-nav__submenu');

		// Check if the menu is open.
		const isOpen = thisButton.getAttribute( 'aria-expanded' ) == 'true';

		// close all nav menus
		closeNavSubMenus();
	  
		if ( ! isOpen ) {
		  thisButton.setAttribute('aria-expanded', "true");
		  thisSubmenu.removeAttribute('hidden');
		}
	  
	});
	  
	function closeNavSubMenus() {
		let subMenulis = document.querySelectorAll('.hds-nav-has-submenu');

		subMenulis.forEach(subMenu => {

			const linkButton = subMenu.querySelector('button');
			const subMenuLi = subMenu.querySelector('.hds-nav__submenu');

			// If there is a button.
			if (linkButton) {
				linkButton.setAttribute('aria-expanded', "false");

				// Adding this check so the console doesn't throw errors when it doesn't exist.
				if (subMenuLi) {
					subMenuLi.setAttribute('hidden', "true");
				}
			}
		});
	}

	// Handling Search Panel
	// Upon clicking hds-search-panel-mobile-trigger, add the "hds-active" class to .hds-search-panel-mobile.
	$('.hds-search-panel-mobile-trigger').on('click', function(e) {
		// Prevent default.
		e.preventDefault();

		$('.hds-search-panel-mobile').removeClass('hds-inactive');
		$('.hds-search-panel-mobile').addClass('hds-active');

		// Wait until after the animation.
		setTimeout(function(){
			$('html').addClass('html-fixed');
			// Focus on the search input. after the animation.
			$('#search-field-en-small--mobile').focus();
		}, 401);
	});
  
	// Upon clicking .hds-search-panel-bar-close-icon, remove the "hds-active" class from the search panel.
	$('.hds-search-panel-bar-close-icon').on('click', function(e) {
		// Prevent default.
		e.preventDefault();

		$('.hds-search-panel-mobile').removeClass('hds-active');
		$('.hds-search-panel-mobile').addClass('hds-inactive');

		// Remove the html-fixed class from the html.
		$('html').removeClass('html-fixed');

		// Wait until after the animation.
		setTimeout( 401);
	});


	// Function to control direction flow when expand menu is opened.
	function setupTabFlow(trigger) {

		if ( 'desktopTrigger' === trigger) {
			$( '#global-navigation-trigger' ).on( 'keydown', desktopTabExplore );
			$( '.hds-global-menu-item' ).on( 'keydown', desktopTabFlow );
			desktopSetupSkipToContent();
		}

		if ( 'mobileTrigger' === trigger) {
			$( '#global-navigation-trigger--mobile' ).on( 'keydown', mobileTabExplore );
			$( '.hds-global-menu-item' ).on( 'keydown', mobileTabFlow );
			mobileSetupSkipToContent();
		}
	}

	/* Functions that need to update continuously. */

	// Desktop
	$( '#search-field-en-small--desktop' ).on( 'keydown', desktopGoToLastItem );
	// Mobile

	$( '#mobile-header-logo' ).on( 'keydown', mobileGoToLastItem );

	// override HomeLink on mobile only.
	if ( mobileMenu ) {
		overrideHomeLink();
	}


	/* .on() callback functions */

	// removes global-nav__open on all menus and sets focus to the clickedItem.
	function handleBackButton(e, clickedItem) {
		e.stopPropagation();
		e.preventDefault();

		$( '.global-nav__primary, .global-nav__secondary' ).removeClass( 'global-nav__open' );

		// Wait until after the animation to set focus.
		setTimeout(function() {
			clickedItem.focus()
		}, 401);
	}

	// Go from the desktop search to the last menu item.
	function desktopGoToLastItem(e) {
		let flag = false;
		const desktopExpandButton = $( '#global-navigation-trigger' ).attr( 'aria-expanded' );

		if ( 'true' === desktopExpandButton ) {;
			if ( 'Tab' === e.key ) {
				if ( e.shiftKey ) {
					const menuItems = $( '.hds-global-menu-item-trigger' ).not( '.hds-global-menu-item-mobile' );
					const lastItem = menuItems[ menuItems.length - 1 ];

					$( lastItem ).find('a').first().focus();
					lastItem.focus();
					flag = true;
				}
			}
		}

		if ( flag ) {
			e.stopPropagation();
			e.preventDefault();
		}
	}

	// Go from mobile Logo to last item in menu, only if expanded.
	function mobileGoToLastItem(e) {
		let flag = false;
		const mobileExpandButton = $( '#global-navigation-trigger--mobile' ).attr( 'aria-expanded' );

		if ( 'true' === mobileExpandButton ) {
			if ( 'Tab' === e.key ) {
				switch (e.shiftKey) {
					case true:
						let menuItems = $( '.hds-global-menu-item' );

						if ( ! mobileMenu ) {
							menuItems = $( '.hds-global-menu-item-trigger' );
						}

						const lastItem = menuItems[ menuItems.length - 1 ];
						$( lastItem ).find('a').first().focus();
						flag = true;
						break;
					default:
						break;
				}
			}
		}

		if ( flag ) {
			e.stopPropagation();
			e.preventDefault();
		}
	}

	// If tab is pressed while on the explore menu.
	function desktopTabExplore(e) {
		let flag = false;

		// Skip if the menu is not expanded.
		if ( 'true' === e.currentTarget.getAttribute( 'aria-expanded' ) ) {
			// Skip if tab is not pressed.
			if ( 'Tab' === e.key ) {
				// get all menu items that expand out. And note the first item.
				const menuItems = $( '.hds-global-menu-item-trigger' );
				const firstItem = menuItems[0];
				// Skip if shift is being held.
				if ( ! e.shiftKey ) {
					// Set focus to first expanded item a tag.
					$( firstItem ).find('a').first().focus();
					flag = true;
				}
			}
		}

		if ( flag ) {
			e.stopPropagation();
            e.preventDefault();
        }
	}

	// If tab is pressed while on the menu icon.
	function mobileTabExplore(e) {
		let flag = false;

		// Skip if the menu is not open.
		if ( 'true' === e.currentTarget.getAttribute( 'aria-expanded' ) ) {
			// Skip is 'Tab' is not being pushed.
			if ( 'Tab' === e.key ) {
				// get all menu items that expand out. And note hte first item.
				const menuItems = $( '.hds-global-menu-item' );
				const firstItem = menuItems[0];

				if ( ! e.shiftKey ) {
					// Set focus to first expanded item a tag.
					$( firstItem ).find('a').first().focus();
					flag = true;
				}
			}
		}

		if ( flag ) {
			e.stopPropagation();
            e.preventDefault();
        }
	}

	// Desktop: if tab or shift tab is pressed on menu items.
	function desktopTabFlow(e) {
		let flag = false;
		const currItem = e.currentTarget;

		const menuItems = $( '.hds-global-menu-item-trigger' ).not( '.hds-global-menu-item-mobile' );
		const firstItem = menuItems[0];
		const lastItem = menuItems[ menuItems.length - 1 ];
		const nextItem = $( '#search-field-en-small--desktop' );

		if ( 'Tab' === e.key ) {
			switch ( currItem ) {
				case firstItem:
					// if reverse go to open / close
					if ( e.shiftKey ) {
						let menuExpander = $( '#global-navigation-trigger' ) ;
						// Check for mobile width
						if ( tabletMenu ) {
							menuExpander = $( '#global-navigation-trigger--mobile' );
						}

						menuExpander.focus();
						flag = true;
					}
					break;
				case lastItem:
					if ( ! e.shiftKey ) {
						// go to next header item (the logo).
						nextItem.focus();
						flag = true;
					}
					break;
				default:
					break;
			}
		}

		if ( flag ) {
			e.stopPropagation();
			e.preventDefault();
		}
	}

	// Mobile: if tab or shift tab is pressed on menu items.
	function mobileTabFlow(e) {
		let flag = false;
		const currItem = e.currentTarget;
		let menuItems = $( '.hds-global-menu-item' );

		if ( ! mobileMenu ) {
			menuItems = $( '.hds-global-menu-item-trigger' );
		}

		const firstItem = menuItems[0];
		const lastItem = menuItems[ menuItems.length - 1 ];
		const nextItem = $( '#mobile-header-logo' );

		if ( 'Tab' === e.key ) {
			switch ( currItem ) {
				case firstItem:
					// if reverse go to open / close
					if ( e.shiftKey ) {
						let menuExpander = $( '#global-navigation-trigger' ) ;
						// Check for mobile width
						if ( mobileMenu || tabletMenu ) {
							menuExpander = $( '#global-navigation-trigger--mobile' );
						}

						menuExpander.focus();
						flag = true;
					}
					break;
				case lastItem:
					if ( ! e.shiftKey ) {
						// go to next header item (the logo).
						nextItem.focus();
						flag = true;
					}
					break;
				default:
					break;
			}
		}

		if ( flag ) {
			e.stopPropagation();
			e.preventDefault();
		}
	}

	// Closes the explorer Nav when at the end of the Header and Pushing 'Tab'
	function mobileSkipToContent(e) {
		const mobileExpandButton = $( '#global-navigation-trigger--mobile' ).attr( 'aria-expanded' );

		if ( 'true' === mobileExpandButton ) {
			if ( 'Tab' === e.key ) {
				if ( ! e.shiftKey ) {
					closeExploreNav();
				}
			}
		}
	}

	// Closes the explorer Nav when at the end of the Header and pushing 'Tab'
	function skipToContent(e) {
		const desktopExpandButton = $( '#global-navigation-trigger' ).attr( 'aria-expanded' );

		if ( 'true' === desktopExpandButton ) {
			if ( 'Tab' === e.key ) {
				if ( ! e.shiftKey ) {
					closeExploreNav();
				}
			}
		}
	}

	/* Helper Functions */

	// If you are on the mobile search trigger and you hit tab
	// close the explore menu and continue to the content.
	function mobileSetupSkipToContent() {
		const searchButton = $( '.hds-search-panel-mobile-trigger' );
		$( searchButton ).on( 'keydown', mobileSkipToContent );
	}

	// At the end of the header menu close the explore menu
	// and go to the first tab in the content.
	function desktopSetupSkipToContent() {
		const lastHeaderItem = $( '.usa-nav' ).find('a').last();
		$( lastHeaderItem ).on( 'keydown', skipToContent );
	}

	// setup Home button to goto '/'
	
	// setup backButton to go back to the clickedItem.
	function setupBackButton( clickedItem, backButton) {
		backButton.on( 'click', );

		// Wait until animation is over to set new focus.
		setTimeout( 401);
	}

	// Keep focus in the current opened menu.
	function setupLoopMenu( firstLink, lastLink ) {

		firstLink.on( 'keydown', function(e) {
			let flag = false;
			if ( 'Tab' === e.key ) {
				if ( e.shiftKey ) {
					lastLink.focus();
					flag = true;
				}
			}

			if ( flag ) {
				e.stopPropagation();
				e.preventDefault();
			}
		});

		lastLink.on( 'keydown', function(e) {
			let flag = false;
			if ( 'Tab' === e.key ) {
				if ( ! e.shiftKey ) {
					firstLink.focus();
					flag = true;
				}
			}

			if ( flag ) {
				e.stopPropagation();
				e.preventDefault();
			}
		});
	}

	// Sets the tab ordering for the 'Home (Highlights)'
	// called when explore menu opens.
	function initHomeTabFlow() {
		const priMenu = $( '.hds-global-menu-primary' );
		const activeLiItem = priMenu.find('.usa-current');
		const submenuId = activeLiItem.attr( 'submenu-id' );
		const isHighlightsActive = 'global-nav-home' === submenuId ? true : false;

		if ( isHighlightsActive ) {
			const firstLink = $( '.global-nav__home' ).find('a').first();
			const lastLink = $( '.global-nav__home' ).find('a').last();
			const nextLink = activeLiItem.next().find('a').first();
			const clickedItem = activeLiItem.find('a').first();
			setTabIntoSubmenu( clickedItem, firstLink );
			getTabReturnPath( clickedItem, firstLink );
			setTabNextPath( nextLink, lastLink );
		}
	}

	// Sets tab order into the block.
	function setTabIntoSubmenu( clickedItem, firstItem ) {
		$( clickedItem ).on( 'keydown', function(e) {
			let flag = false;
			const doTab = clickedItem.parent().hasClass( 'usa-current' );
			if ( doTab ) {
				if ( 'Tab' === e.key ) {
					if ( ! e.shiftKey ) {
						$( firstItem ).focus();
						flag = true;
					}

					if ( flag ) {
						e.stopPropagation();
						e.preventDefault();
					}
				}
			}
		});
	}

	// Sets the tab from the firstItem to the clickedItem
	function getTabReturnPath( clickedItem, firstItem ) {
		$( firstItem ).on( 'keydown', function(e) {
			let flag = false;

			if ( 'Tab' === e.key ) {
				if ( e.shiftKey ) {
					$( clickedItem ).focus();
					flag = true;
				}
			}

			if ( flag ) {
				e.stopPropagation();
				e.preventDefault();
			}
		});
	}

	// Sets the tab from the lastItem to the nextItem.
	function setTabNextPath( nextItem, lastItem ) {
		// If next item is blank set it to
		// desktop: search Bar
		// mobile: header logo
		if ( 0 === nextItem.length ) {
			nextItem = $( '#search-field-en-small--desktop' );

			if ( ! desktopMenu ) {
				nextItem = $( '#mobile-header-logo' );
			}
		}

		$( lastItem ).on( 'keydown', function(e) {
			let flag = false;

			if ( 'Tab' === e.key ) {
				if ( ! e.shiftKey ) {
					$( nextItem ).focus();
					flag = true;
				}
			}

			if ( flag ) {
				e.stopPropagation();
				e.preventDefault();
			}
		});
	}

	/** JSON Endpoint: Is Live */
    $.getJSON("https://plus.nasa.gov/wp-json/nasaplus/v1/live" )
    .done(function(json) {
        if( true == json) {
            $('body').addClass('is-live');
        }
    })
    .fail(;

} );
;
jQuery(($) => {
	$('.hds-toggle').click(;
  });;
var luxon=function(t){"use strict";ion(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(_(Error)),H=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return i(t,e),t}(e),W=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return i(t,e),t}(e),J=e),Y=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(e),G=e),u=e),n=e),e="numeric",r="short",a="long",$={year:e,month:e,day:e},B={year:e,month:r,day:e},Q={year:e,month:r,day:e,weekday:r},K={year:e,month:a,day:e},X={year:e,month:a,day:e,weekday:a},tt={hour:e,minute:e},et={hour:e,minute:e,second:e},nt={hour:e,minute:e,second:e,timeZoneName:r},rt={hour:e,minute:e,second:e,timeZoneName:a},it={hour:e,minute:e,hourCycle:"h23"},ot={hour:e,minute:e,second:e,hourCycle:"h23"},at={hour:e,minute:e,second:e,hourCycle:"h23",timeZoneName:r},ut={hour:e,minute:e,second:e,hourCycle:"h23",timeZoneName:a},st={year:e,month:e,day:e,hour:e,minute:e},ct={year:e,month:e,day:e,hour:e,minute:e,second:e},lt={year:e,month:r,day:e,hour:e,minute:e},ft={year:e,month:r,day:e,hour:e,minute:e,second:e},dt={year:e,month:r,day:e,weekday:r,hour:e,minute:e},ht={year:e,month:a,day:e,hour:e,minute:e,timeZoneName:r},mt={year:e,month:a,day:e,hour:e,minute:e,second:e,timeZoneName:r},yt={year:e,month:a,day:e,weekday:a,hour:e,minute:e,timeZoneName:a},vt={year:e,month:a,day:e,weekday:a,hour:e,minute:e,second:e,timeZoneName:a},c=),pt=null,gt=c),wt={};var kt={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};var bt={},f=function(n){(r,n),r.create=r.resetCache=r.isValidSpecifier=r.isValidZone=var t=r.prototype;return t.offsetName=t.formatOffset=t.offset=function(t){var e,n,r,i,o,a,u,s,t=new Date(t);return isNaN(t)?NaN:(i=this.name,wt[i]||(wt[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),a=(i=(i=wt[i]).formatToParts?i,t):(o=t,i=(i=i).format(o).replace(/\u200E/g,""),i=(o=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i))[1],a=o[2],[o[3],i,a,o[4],o[5],o[6],o[7]]))[0],o=i[1],e=i[2],n=i[3],u=i[4],r=i[5],i=i[6],u=24===u?0:u,s=(t=+t)%1e3,(Qt({year:a="BC"===n?1-Math.abs(a):a,month:o,day:e,hour:u,minute:r,second:i,millisecond:0})-(t-=0<=s?s:1e3+s))/6e4)},t.equals=function(t){return"iana"===t.type&&t.name===this.name},o(r,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),r}(c),Tt=["base"],St=["padTo","floor"],Ot={};var Mt={};ar Dt={};var Et={};var Vt=null;function It(t,e,n,r,i){t=t.listingMode(n);return"error"===t?null:("en"===t?r:i)(e)}var xt=function(){function t(t,e,n){this.padTo=n.padTo||0,this.floor=n.floor||!1,n.padTo,n.floor;var r=U(n,St);(!e||0<Object.keys(r).length)&&(e=s({useGrouping:!1},n),0<n.padTo&&(e.minimumIntegerDigits=n.padTo),this.inf=(r=t,void 0===(n=e)&&(n={}),t=JSON.stringify([r,n]),(e=Dt[t])||(e=new Intl.NumberFormat(r,n),Dt[t]=e),e))}return t.prototype.format=t}(),Ct=function(){function t(t,e,n){this.opts=n;var n=this.originalZone=void 0,r=(this.opts.timeZone?this.dt=t:"fixed"===t.zone.type?(r=0<=(r=t.offset/60*-1)?"Etc/GMT+"+r:"Etc/GMT"+r,0!==t.offset&&f.create(r).valid?(n=r,this.dt=t):(n="UTC",this.dt=0===t.offset?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)):"system"===t.zone.type?this.dt=t:"iana"===t.zone.type?n=(this.dt=t).zone.name:(this.dt=t.setZone(n="UTC").plus({minutes:t.offset}),this.originalZone=t.zone),s({},this.opts));r.timeZone=r.timeZone||n,this.dtf=Nt(e,r)}var e=t.prototype;return e.format=e.formatToParts=e.resolvedOptions=t}(),Zt=function(){function t(t,e,n){var r;this.opts=s({style:"long"},n),!e&&Ht()&&(this.rtf=(e=t,(n=t=void 0===(t=n)?{}:t).base,n=U(n=t,Tt),n=JSON.stringify([e,n]),(r=Et[n])||(r=new Intl.RelativeTimeFormat(e,t),Et[n]=r),r))}var e=t.prototype;return e.format=e.formatToParts=t}(),g=function(){function i(t,e,n,r){var t=function(e){var n=e.indexOf("-x-");if(-1===(n=(e=-1!==n?e.substring(0,n):e).indexOf("-u-")))return[e];try{r=Nt(e).resolvedOptions(),i=e}catch(t){var e=e.substring(0,n),r=Nt(e).resolvedOptions(),i=e}return[i,(n=r).numberingSystem,n.calendar]}(t),i=t[0],o=t[1],t=t[2];this.locale=i,this.numberingSystem=e||o||null,this.outputCalendar=n||t||null,this.intl=(i=this.locale,e=this.numberingSystem,((o=this.outputCalendar)||e)&&(i.includes("-u-")||(i+="-u"),o&&(i+="-ca-"+o),e)&&(i+="-nu-"+e),i),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}i.fromOpts=i.create=i.resetCache=i.fromObject=var t=i.prototype;return t.listingMode=t.clone=t.redefaultToEN=function(t){return this.clone(s({},t=void 0===t?{}:t,{defaultToEN:!0}))},t.redefaultToSystem=t.months=function(n,r,t){var i=this;return void 0===r&&(r=!1),It(this,n,t=void 0===t?!0:t,ce,},t.weekdays=function(n,r,t){var i=this;return void 0===r&&(r=!1),It(this,n,t=void 0===t?!0:t,he,},t.meridiems=function(t){var n=this;return It(this,void 0,t=void 0===t?!0:t,function(){return me},},t.eras=function(t,e){var n=this;return It(this,t,e=void 0===e?!0:e,ge,},t.extract=t.numberFormatter=t.dtFormatter=t.relFormatter=t.listFormatter=function(t){return void 0===t&&(t={}),e=this.intl,void 0===(t=t)&&(t={}),n=JSON.stringify([e,t]),(r=Ot[n])||(r=new Intl.ListFormat(e,t),Ot[n]=r),r;var e,n,r},t.isEnglish=t.equals=o(i,[{key:"fastNumbers",get:]),i}(),Ft=null,d=function(n){function e(t){var e=n.call(this)||this;return e.fixed=t,e}i(e,n),e.instance=e.parseSpecifier=var t=e.prototype;return t.offsetName=function(){return this.name},t.formatOffset=t.offset=function(){return this.fixed},t.equals=o(e,[{key:"type",get:function(){return"fixed"}},{key:"name",get:,{key:"ianaName",get:,{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:]),e}(c),Lt=c);function w(t,e){var n;return b(t)||null===t?e:t instanceof c?t:"string"==typeof t?"default"===(n=t.toLowerCase())?e:"local"===n||"system"===n?gt.instance:"utc"===n||"gmt"===n?d.utcInstance:d.parseSpecifier(n)||f.create(t):v(t)?d.instance(t):"object"==typeof t&&t.offset&&"number"==typeof t.offset?t:new Lt(t)}var jt,At=zt="system",qt=null,_t=null,Ut=null,Pt=60,k=);n l(t,e){void 0===e&&(e=2);t=t<0?"-"+(""+-t).padStart(e,"0"):(""+t).padStart(e,"0");return t}n Qt(t){var e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&0<=t.year&&(e=new Date(e)).setUTCFullYear(t.year,t.month-1,t.day),+e}nction te(t,e,n,r){void 0===r&&(r=null);var t=new Date(t),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},r=(r&&(i.timeZone=r),s({timeZoneName:e},i)),e=new Intl.DateTimeFormat(n,r).formatToParts(t).find(;return e?e.value:null}nction re(t,e){var n,r,i={};for(n in t)h(t,n)&&null!=(r=t[n])&&(i[e(n)]=ne(r));return i}r ae=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],se=["J","F","M","A","M","J","J","A","S","O","N","D"];ar le=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fe=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],de=["M","T","W","T","F","S","S"];ar me=["AM","PM"],ye=["Before Christ","Anno Domini"],ve=["BC","AD"],pe=["B","A"];r ke={D:$,DD:B,DDD:K,DDDD:X,t:tt,tt:et,ttt:nt,tttt:rt,T:it,TT:ot,TTT:at,TTTT:ut,f:st,ff:lt,fff:ht,ffff:yt,F:ct,FF:ft,FFF:mt,FFFF:vt},S=function(){.create=d.parseFormat=function(t){for(var e=null,n="",r=!1,i=[],o=0;o<t.length;o++){var a=t.charAt(o);"'"===a?(0<n.length&&i.push({literal:r||/^\s+$/.test(n),val:n}),e=null,n="",r=!r):r||a===e?n+=a:(0<n.length&&i.push({literal:/^\s+$/.test(n),val:n}),e=n=a)}return 0<n.length&&i.push({literal:r||/^\s+$/.test(n),val:n}),i},d.macroTokenToFormatOpts=var t=d.prototype;return t.formatWithSystemDefault=t.formatDateTime=function(t,e){return this.loc.dtFormatter(t,s({},this.opts,e=void 0===e?{}:e)).format()},t.formatDateTimeParts=function(t,e){return this.loc.dtFormatter(t,s({},this.opts,e=void 0===e?{}:e)).formatToParts()},t.formatInterval=function(t,e){return this.loc.dtFormatter(t.start,s({},this.opts,e=void 0===e?{}:e)).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())},t.resolvedOptions=function(t,e){return this.loc.dtFormatter(t,s({},this.opts,e=void 0===e?{}:e)).resolvedOptions()},t.num=function(t,e){var n;return void 0===e&&(e=0),this.opts.forceSimple?l(t,e):(n=s({},this.opts),0<e&&(n.padTo=e),this.loc.numberFormatter(n).format(t))},t.formatDateTimeFromString=function(r,t){var n=this,i="en"===this.loc.listingMode(),e=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,o=a=u=function(){return i?me[r.hour<12?0:1]:o({hour:"numeric",hourCycle:"h12"},"dayperiod")},s=c=l=f=return we(d.parseFormat(t),function(t){switch(t){case"S":return n.num(r.millisecond);case"u":case"SSS":return n.num(r.millisecond,3);case"s":return n.num(r.second);case"ss":return n.num(r.second,2);case"uu":return n.num(Math.floor(r.millisecond/10),2);case"uuu":return n.num(Math.floor(r.millisecond/100));case"m":return n.num(r.minute);case"mm":return n.num(r.minute,2);case"h":return n.num(r.hour%12==0?12:r.hour%12);case"hh":return n.num(r.hour%12==0?12:r.hour%12,2);case"H":return n.num(r.hour);case"HH":return n.num(r.hour,2);case"Z":return a({format:"narrow",allowZ:n.opts.allowZ});case"ZZ":return a({format:"short",allowZ:n.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:n.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:n.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:n.loc.locale});case"z":return r.zoneName;case"a":return u();case"d":return e?o({day:"numeric"},"day"):n.num(r.day);case"dd":return e?o({day:"2-digit"},"day"):n.num(r.day,2);case"c":return n.num(r.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return n.num(r.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return e?o({month:"numeric",day:"numeric"},"month"):n.num(r.month);case"LL":return e?o({month:"2-digit",day:"numeric"},"month"):n.num(r.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return e?o({month:"numeric"},"month"):n.num(r.month);case"MM":return e?o({month:"2-digit"},"month"):n.num(r.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return e?o({year:"numeric"},"year"):n.num(r.year);case"yy":return e?o({year:"2-digit"},"year"):n.num(r.year.toString().slice(-2),2);case"yyyy":return e?o({year:"numeric"},"year"):n.num(r.year,4);case"yyyyyy":return e?o({year:"numeric"},"year"):n.num(r.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return n.num(r.weekYear.toString().slice(-2),2);case"kkkk":return n.num(r.weekYear,4);case"W":return n.num(r.weekNumber);case"WW":return n.num(r.weekNumber,2);case"o":return n.num(r.ordinal);case"ooo":return n.num(r.ordinal,3);case"q":return n.num(r.quarter);case"qq":return n.num(r.quarter,2);case"X":return n.num(Math.floor(r.ts/1e3));case"x":return n.num(r.ts);default:return l(t)}})},t.formatDurationFromString=d}(),O=),r=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;nction N(t){if(null!=t){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i],u=a[0],a=a[1],u=u.exec(t);if(u)return a(u)}}return[null,null]}ar e=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,a=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Te=RegExp(a.source+("(?:"+e.source+"?(?:\\[("+r.source+")\\])?)?")),D=RegExp("(?:T"+Te.source+")?"),Se=be("weekYear","weekNumber","weekDay"),Oe=be("year","ordinal"),e=RegExp(a.source+" ?(?:"+e.source+"|("+r.source+"))?"),r=RegExp("(?: "+e.source+")?");Ve=RegExp("^T?"+a.source+"$"),Ie=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;ar Ce={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};ar Fe=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;ar je=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ae=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ze=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;r Ue=p(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,D),Pe=p(/(\d{4})-?W(\d\d)(?:-?(\d))?/,D),Re=p(/(\d{4})-?(\d{3})/,D),He=p(Te),We=M(Ne,De,Ee),Je=M(Se,Ne,De,Ee),Ye=M(Oe,Ne,De,Ee),Ge=M(Ne,De,Ee);var $e=M(Ne);var Be=p(/(\d{4})-(\d\d)-(\d\d)/,r),Qe=p(e),Ke=M(Ne,De,Ee);var a={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Xe=s({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},a),D=365.2425,Te=30.436875,tn=s({years:{quarters:4,months:12,weeks:D/7,days:D,hours:24*D,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:D/28,days:D/4,hours:24*D/4,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:Te/7,days:Te,hours:24*Te,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},a),E=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],en=E.slice(0).reverse();function V(t,e,n){n={values:(n=void 0===n?!1:n)?e.values:s({},t.values,e.values||{}),loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new I(n)}function nn(t,e,n,r,i){var t=t[i][n],o=e[n]/t,a=!(Math.sign(o)===Math.sign(r[i]))&&0!==r[i]&&Math.abs(o)<=1?(a=o)<0?Math.floor(a):Math.ceil(a):Math.trunc(o);r[i]+=a,e[n]-=a*t}var I=function(){.fromMillis=y.fromObject=y.fromDurationLike=y.fromISO=y.fromISOTime=function(t,e){var n=N(t,[Ve,$e])[0];return n?y.fromObject(n,e):y.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},y.invalid=function(t,e){if(void 0===e&&(e=null),!t)throw new u("need to specify a reason the Duration is invalid");t=t instanceof O?t:new O(t,e);if(k.throwOnInvalid)throw new J(t);return new y({invalid:t})},y.normalizeUnit=y.isDuration=function(t){return t&&t.isLuxonDuration||!1};var t=y.prototype;return t.toFormat=function(t,e){e=s({},e=void 0===e?{}:e,{floor:!1!==e.round&&!1!==e.floor});return this.isValid?S.create(this.loc,e).formatDurationFromString(this,t):"Invalid Duration"},t.toHuman=function(n){var r=this,t=(void 0===n&&(n={}),E.map(.filter(function(t){return t}));return this.loc.listFormatter(s({type:"conjunction",style:n.listStyle||"narrow"},n)).format(t)},t.toObject=t.toISO=function(){var t;return this.isValid?(t="P",0!==this.years&&(t+=this.years+"Y"),0===this.months&&0===this.quarters||(t+=this.months+3*this.quarters+"M"),0!==this.weeks&&(t+=this.weeks+"W"),0!==this.days&&(t+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(t+="T"),0!==this.hours&&(t+=this.hours+"H"),0!==this.minutes&&(t+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(t+=Yt(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===t&&(t+="T0S"),t):null},t.toISOTime=function(t){if(void 0===t&&(t={}),!this.isValid)return null;var e=this.toMillis();if(e<0||864e5<=e)return null;t=s({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t);var e=this.shiftTo("hours","minutes","seconds","milliseconds"),n="basic"===t.format?"hhmm":"hh:mm",e=(t.suppressSeconds&&0===e.seconds&&0===e.milliseconds||(n+="basic"===t.format?"ss":":ss",t.suppressMilliseconds&&0===e.milliseconds)||(n+=".SSS"),e.toFormat(n));return e=t.includePrefix?"T"+e:e},t.toJSON=function(){return this.toISO()},t.toString=function(){return this.toISO()},t.toMillis=t.valueOf=function(){return this.toMillis()},t.plus=t.minus=function(t){return this.isValid?(t=y.fromDurationLike(t),this.plus(t.negate())):this},t.mapUnits=t.get=t.set=t.reconfigure=function(t){var t=void 0===t?{}:t,e=t.locale,n=t.numberingSystem,r=t.conversionAccuracy,t=t.matrix,e=this.loc.clone({locale:e,numberingSystem:n});return V(this,{loc:e,matrix:t,conversionAccuracy:r})},t.as=t.normalize=function(){var t,n,r;return this.isValid?(t=this.toObject(),n=this.matrix,r=t,en.reduce(null),V(this,{values:t},!0)):this},t.rescale=function(){var t;return this.isValid?(t=this.normalize().shiftToAll().toObject()),V(this,{values:t},!0)):this},t.shiftTo=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!this.isValid)return this;if(0===e.length)return this;for(var r,e=e.map(function(t){return y.normalizeUnit(t)}),i={},o={},a=this.toObject(),u=0,s=E;u<s.length;u++){var c=s[u];if(0<=e.indexOf(c)){var l,f=c,d=0;for(l in o)d+=this.matrix[l][c]*o[l],o[l]=0;v(a[c])&&(d+=a[c]);var h,m=Math.trunc(d);for(h in o[c]=(1e3*d-1e3*(i[c]=m))/1e3,a)E.indexOf(h)>E.indexOf(c)&&nn(this.matrix,a,h,i,c)}else v(a[c])&&(o[c]=a[c])}for(r in o)0!==o[r]&&(i[f]+=r===f?o[r]:o[r]/this.matrix[f][r]);return V(this,{values:i},!0).normalize()},t.shiftToAll=t.negate=t.equals=function(t){if(!this.isValid||!t.isValid)return!1;if(!this.loc.equals(t.loc))return!1;for(var e,n=0,r=E;n<r.length;n++){var i=r[n];if(e=this.values[i],i=t.values[i],!(void 0===e||0===e?void 0===i||0===i:e===i))return!1}return!0},o(y,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:,{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),y}(),rn="Invalid Interval";var on=function(){.invalid=function(t,e){if(void 0===e&&(e=null),!t)throw new u("need to specify a reason the Interval is invalid");t=t instanceof O?t:new O(t,e);if(k.throwOnInvalid)throw new W(t);return new c({invalid:t})},c.fromDateTimes=c.after=c.before=c.fromISO=c.isInterval=function(t){return t&&t.isLuxonInterval||!1};var t=c.prototype;return t.length=t.count=function(t){var e,n;return void 0===t&&(t="milliseconds"),this.isValid?(e=this.start.startOf(t),n=this.end.startOf(t),Math.floor(n.diff(e,t).get(t))+(n.valueOf()!==this.end.valueOf())):NaN},t.hasSame=t.isEmpty=t.isAfter=t.isBefore=t.contains=t.set=t.splitAt=t.splitBy=t.divideEqually=t.overlaps=t.abutsStart=t.abutsEnd=t.engulfs=t.equals=t.intersection=function(t){var e;return this.isValid?(e=(this.s>t.s?this:t).s,(t=(this.e<t.e?this:t).e)<=e?null:c.fromDateTimes(e,t)):this},t.union=function(t){var e;return this.isValid?(e=(this.s<t.s?this:t).s,t=(this.e>t.e?this:t).e,c.fromDateTimes(e,t)):this},c.merge=c.xor=t.difference=t.toString=},t.toLocaleStrin},t.toISO=function(t){return this.isValid?this.s.toISO(t)+"/"+this.e.toISO(t):rn},t.toISODat},t.toISOTim},t.toFormarn},t.toDuratn)},t.mapEndpoi))},o(c,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",ll}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),c}(),an=function(){function t(){}return t.haset},t.isValidIANAZt)},t.normalizeZe)},t.mont)},t.monthsFor0)},t.weekdt)},t.weekdaysFor0)},t.meridi()},t.et)},t.featu)}},t))}function sn(t,e,n,r){var t=function(t,e,n){for(var r,i,o={},a=t,u=0,s=[["yeaar}],["quarters",function(t,e){return e.quarter-t.quarter+4*(e.year-t.year)}],["montr)}],["wee/7}],["days",un]];u<s.length;u++){var c=s[u],l=c[0],c=c[1];0<=n.indexOf(l)&&(o[r=l]=c(t,e),t=e<(i=a.plus(o))?(o[l]--,a.plus(o)):i)}return[t,o,i,r]}(t,e,n),i=t[0],o=t[1],a=t[2],t=t[3],u=e-i,n=n.filt)}),e=(0===n.length&&(a=a<e?i.plus(((e={})[t]=1,e)):a)!==i&&(o[t]=(o[t]||0)+u/(a-i)),I.fromObject(o,r));return 0<n.length?(t=I.fromMillis(u,r)).shiftTo.apply(t,n).plus(e):e}var cn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ln={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],tel);function x(t,e){t=t.numberingSystem;return void 0===e&&(i in ln){var i=ln[i],o=i[0],i=i[1];o<=r&&r<=i&&(e+=r-o)}}retururn ee(t[1],.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:function(t){return t[0]},literal:!0}}var i=x(n),o=x(n,"{2}"),a=x(n,"{3}"),u=x(n,"{4}"),s=x(n,"{62);case"z":return gn(/[a-z_+-/]{1,256}?/i);case" ":return gn(/[^\S\n\r]/);default:return r(t)}}(e)||{invalidReason:dn};return t.token=e,t}var kn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};var bn=null;function Tn(t,n){var e;return(e=Array.prototype).concat.apply(e,t.map(function(t){return e=n,(t=t).literal||null==(e=On(S.macroTokenToFormatOpts(t.va:e;var e}))}function Sn(e,t,n){var n=Tn(S.parseFormat(n),e),r=n.map(function(t){return wn(t,e)}),i=r.find(function(t){return t.invalidReason});if(i)return{input:t,toko,r=["^"+(i=r).map(function(t){return to.literal&&o.token&&(u[o.token.val[0]]=o.deser(r.slice(s,s+a))),s+=a);return[r,u]}return[r,{}]}(t,r,i),a=i[0],i=i[1],u=i?(u=null,b((o=i).z)||(u=f.create(o.z)),b(o.Z)||(u=u||new d(o.Z),s=o.Z),b(o.q)||(o.M=3*(o.q-1)+1),b(o.h)||(o.h<12&&1===o.a?o.h+=12:12e"k":return"weekYear";case"q":return"quarter";default:return null}}(e);return n&&(t[n]=o[e]),t},{}),u,s]):[null,null,void 0],s=u[0],c=u[1],l=u[2];if(h(i,"a")&&h(i,"H"))throw new Y("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:r,rawMatches:a,matches:i,result:s,zone:c,specificOffset:l}}function On(i,t){return i?S.create(t,i).formatDateTimeParts(bn=bn||L.fromMillis(1555555555555)).map(function(t){return e=i,r=(t=t).type,t=t.value,"literal"===r?{literal:!(n=/^\s+$/.test(t)),val:n?" ":t}:(n=e[r],(t="object"==typeof(t=kn[r])?t[n]:t)?{literal:!1,val:t}:void 0);var e,n,r}):null}var "unit out of range","you specified "+e+" (of type "+typeof e+") as a "+t+", which is invalid")}function Dn(t,e,n){e=new Date(Date.UTC(t,;return i<1?i=Kt(e=n-1):i>Kt(n)?(e=n+1,i=1):e=n,s({weekYear:e,weekNumber:i,weekday:r},oe(t))}function xn(t){var e,n=t.weekYear,r=t.weekNumber,i=t.weekday,o=Dn(n,1,4),a=$t(n),r=7*r+i-o-3,i=(r<1?9),u=T(t,0,999);returnts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new L(s({},t,e,{old:t}))}function _n(t,e,n){var r=t-60*e*1e3,i=n.offset(r);reeconds"),e=_n(Qt(r),n,t.zone),r=e[0],n=e[1];return 0!==i&&(n=t.zone.offset(r+=i)),{ts:r,o:n}}function Hn(t,e,n,r,i,o){var a=n.setZone,u=n.zone;return t&&0!==Object.keys(t).length||e?(t=L.fromObject(t,s({},n,{zone:e||u,specificOffset:oValid?S.create(g.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(t,e):null}function Jn(t,e){var n=9999<t.c.year||t.c.year<0,r="";return n&&0<=t.c.year&&(r+="+"),r+=l(t.c.year,n?6:4),r=e?(r=(r+="-")+l(t.c.month)+"-")+l(t.c.day):(r+=l(t.c.month))+l(t.c.day)}function Yn(t,e,n,r,i,o){var a=l(t.c.hour);return e?(a=(a+=":")+l(t.c.minute),0===t.c.second&&n||(a+=":")):a+=l(t.c.minute),0===t.c.second&&n||(a+=l(t.c.second),0===t.c.millisecond&&r)||(a=(a+=".")+l(t.c.millisecond,3)),i&&(t.isOffsetFixed&&0===t.offset&&!o?a+="Z":a=t.o<0?(a=(a+="-")+l(Math.trunc(-t.o/60))+":")+l(Math.trunc(-t.o%60)):(a=(a+="+")+l(Math.trunc(t.o/60))+":")+l(Math.trunc(t.o%60))),o&&(a+="["+t.zone.ianaName+"]"),a}var Gn={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},$n={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Bn={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Qn=["year","month","day","hour","minute","second","millisecond"],Kn=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Xn=["year","ordinal","hour","minute","second","millisecond"];function tr(t){var e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(e)return e;throw new G(t)}function er(t,e){var n=w(e.zone,k.defaultZone),e=g.fromObject(e),r=k.now();if(b(t.year))s=r;else{for(var i=0,o=Qn;i<o.length;i++){var a=o[i];b(t[a])&&(t[a]=Gn[a])}var u=Fn(t)||Ln(t);if(u)ref t[t.length-1]?(e=t[t.length-1],Array.from(t).slice(0,t.length-1)):Array.from(t);return[e,t]}var L=function(){function p(t){var e,n=t.zone||k.defaultZone,r=t.invalid||(Number.isNaN(t.ts)?new O("invalid input"):null)||(n.isValid?null:An(n)),i=(this.ts=b(t.ts)?k.now():t.ts,null),o=null;r||(o=t.old&&t.old.ts===this.ts&&t.old.zone.equals(n)?(i=(e=[t.old.c,t.old.o])[0],e[1]):(e=n.offset(this.ts),i=Un(this.ts,e),i=(r=Number.isNaN(i.year)?new O("invalid input"):null)?null:i,r?null:e)),this._zone=n,this.loc=t.lothis.weeeturn eturn e.zone=d.utcInstance,er({year:n,month:r,day:i,hour:o,minute:a,second:u,millisecond:t},e)},p.fromJSDate=function(t,e){void 0===e&&(e={});var n,t="[object Date]"===Object.prototype.toString.call(t)?t.valueOf():NaN;return Number.isNaN(t)?p.invalid("invalid input"):(n=w(e.zone,hrow new u("frone,k.defaultZone),loc:g.fromObject(e)});throw new u("fromSeconds requires a numerical input")},p.fromObject=function(t,e){t=t||{};var n=w((e=void 0===e?{}:e).zone,k.defaultZone);if(!n.isValid)return p.invalid(An(n));var r=k.now(),i=b(e.specificOffset)?n.offset(r):e.specificOffset,o=re(t,tr),a=!b(o.ordinal),u=!b(o.year),s=!b(o.month)||!b(o.day),u=u||s,c=o.weekYear||o.weekNumber,e=g.fromObject(e);if((u||a)&&c)throw new Y("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(s&&a)throw new Y("Can't mix ordinal dates with month/day");for(var l,s=c||o.weekday&&!u,f=Un(r,i),d=(s?(v=Kn,l=$n,f=In(f)):a?(v=Xn,l=Bn,f=Cn(f)):(v=Qn,l=Gn),!1),h=R(v);!(m=h()).done;){var m=m.value;b(o[m])?o[m]=(d?l:f)[m]:d=!0}var y,v,c=(s?(r=Rt((c=o).weekYear),v=T(c.weekNumber,1,Kt(c.weekYear)),y=T(c.weekday,1,7),r?v?!y&&F("weekday",c.weekday):F("week",c.week):F("weekYear",c.weekYear)):a?(v=Rt((r=o).year),y=T(r.ordinal,1,$t(r.year)),v?!y&&F("ordinal",r.ordinal):F("year",r.year)):Fn(o))||Ln(o);return c?p.invalid(c):(r=new p({ts:(v=Pn(s?xn(o):a?Zn(o):o,i,n))[0],zone:n,o:v[1],loc:e}),o.weekday&&u&&t.weekday!==r.weekday?p.invalid("mismatched weekdd 0===e&&(e={}]*\)|[\n\t]unction(t,e){void 0===e&&(e={});t=N(t,[je,qe],[Ae,qe],[ze,_e]);return Hn(t[0],t[1],e,"HTTP",e)},p.fromFormat=function(t,e,n){if(void 0===n&&(n={}),b(t)||b(e))throw new u("fromFormat requires an input string and a format");var r=n,i=r.locale,r=r.numberingSystem,i=g.fromOpts({locale:void 0===i?null:i,numberingSystem:void 0===r?null:r,defaultToEN:!0}),i=[(r=Sn(r=i,t,e)).result,r.zone,r.specificOffset,r.invalidReason],r=i[0],o=i[1],a=i[2],i=i[3];return i?p.invalid(i):Hn(r,o,n,"formSQL=functid");t=t instaw new H(t);return new p({invalid:t})},p.isDateTime=function(t){return t&&t.isLuxonDateTimeon(t,e){t=On(t,g.fromObject(e=void 0===e&&(e={}),Tn(S.parseForfunction(t){return t.valions(thi},t.toUTC=tZone(d.in)&&(r=t.offsetlendar,e=thiendar:t});return qn(this,{loc:e})},t.setLocale=function(t){return this.reconfigure({locale:t})},t.set=function(t){if(!this.isValid)return this;var e,t=re(t,tr),n=!b(t.weekYear)||!b(t.weekNumber)||!b(t.weekday),r=!b(t.ordinal),i=!b(t.year),o=!b(t.month)||!b(t.day),a=t.weekYear||t.weekNumber;if((i||o||r)&&a)throw new Y("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(o&&r)throw new Y("Can't mix ordinal dates with month/day");n?e=xn(s({},In(this.c),t)):b(t.ordinal)?(e=s({},this.toObject(),t),b(t.day)&&(e.day=Math.min(Bt(e.year,e.month),e.da,o:i[1]},t.minus=f"===t&&(ndOf=functie&&(e={}),this.ist&&(t=$),void 0=urn void 0===t&&(t={}),this.isValid?S.create(this.loc.clone(t),t).formatDateTimeParts(this):[]},t.toISO=function(t){var e,t=void 0===t?{}:t,n=t.format,r=t.suppressSeconds,r=void 0!==r&&r,i=t.suppressMilliseconds,i=void 0!==i&&i,o=t.includeOffset,o=void 0===o||o,t=t.extendedZone,t=void 0!==t&&t;return this.isValid?(e=Jid 0===t?{}:t).f"===(void 0=ded"===(voidvoid 0!==:mm:ss ZZZ",EEE, dd LLL r="HH:mmfunction(t)QLDate()+" "+this.toSQLTime(t):null},t.toString=functionlueOf=functi(){return this.iid?this.ts/1e3:NaN},t.toUnixInteger=function(){ret/1e3):NaN},t.toJSON=function(){return this.toISO()},t.toBSON=function(){return this.toJSDate()},t.toObject=function(t){var e;return void 0===t&&(t={}),this.isValid?(e=s({},this.c),t.includeConfig&&(e.outputCalendar=this.outputlocale=this.loc.locale),e):{}},t.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},t.diff=function(t,e,n){var r;return void 0===e&&(e="milliseconds"),void 0===n&&(n={}),this.isValid&&t.isValid?(n=s({locale:this.locale,numberingSystem:this.numberingSystem},n),e=e,e=(Array.isArray(e)?e:[e]).map(I.normalizeUnit),t=sn((r=t.valueOf()>this.valueOf())?this=functio,this.diff(p.now(),t,e)},t.until=function(t){return this.isValid?on.fromDateTimes(this,t):this},t.hasSame=function(t,e){var n;return!!this.isValid&&(n=lid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)},t.toRelative=function(t){var e,n,r,i;return this.isValid?(e=(t=void 0===t?{}:t).base||p.fromObject({},{zone:this.zone}),n=t.padding?this<e?-t.padding:t.padding:0,r=["years","months","days","hours","minutes","seconds"],i=t.unit,Array.isArray(t.unit)&&(r=t.unit,i=ve:this.zone}),this,s({},t,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},p.min=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e.every(p.isDateTime))return Wt(e,functionnction(t){return t.vn(g.fromOpts({locale}),t,e)},p.fromStringExptExplain(t,e,n=void 0===n?{}:n)},o(p,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.s.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:Nais.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?zn(this).weekYear:NaN}},{k(this).weekNumber:Nan(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?Cn(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?an.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?an.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return th,get:function(){retthis.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?thion(){return this.isValid?tle}):null}},{key:"istFixed&&(this.offset>thiss.offset>this.set({monthion(){return Gt(this.year)}},{key:"daysInMonth",get:function(){return Bt(this.year,this.month)}},{keyis.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?Kt(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return $}},{key:"DATE_MED",get:function(){return B}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return Q}},{key:"DATE_FULL",get:function(){return K}},{key:"DATE_HUGE",get:function(){return X}},{key:"TIME_SIMPLE",get:function(){return tt}},{key:"TIME_WITH_SECONDS",get:function(){return et}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return nt}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return rt}},{key:"TIME_24_SIMPLE",get:function(){return it}},{key:"TIME_24_WITH_SECONDS",get:function(){return ot}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return at}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return ut}},{key:"DATETIME_SHORT",get:function(){return st}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return ct}},{key:"DATETIME_MED",get:function(){return lt}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return ft}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return dt}},{key:"DATETIME_FULL",get:function(){return ht}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return mt}},{key:"DATETIME_HUGE"of t)return L.fromObject(t);throw new u("Unknown datetime argument: "+t+", of type "+typeof t)}return t.DateTime=L,t.Duration=I,t.FixedOffsetZone=d,t.IANAZone=f,t.Info=an,t.Interval=on,t.InvalidZone=Lt,t.Settings=k,t.SystemZone=gt,t.VERSION="3.3.0",t.Zone=c,Object.defineProperty(t,"__esModule",{value:!0}),oUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function deleteCookie(cname) {
        const d = new Date();
        d.setTime(d.getTime() - 3600);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=;" + expires + ";path=/";
    }

    function resetCookie( selector_value ) {
        deleteCookie('timezoneset_cookie');
        setCookie('timezoneset_cookie', selector_value, 30);
    }

    $(document).ready(function(){

        const DateTime = luxon.DateTime;
        let timezoneString = "America/New_York";
        
        // find all event dates on page
        const eventdates = $('.localized-date');
        
        // timezone selector and reset button
        const timezoneSelect = $('.timezone-select');
        const reset = $('#reset-timezone');
        
        // change the timezone when changing select
        // make it persist
        // show the reset button
        if( timezoneSelect.length ) {
            timezoneSelect.on('change', function() {
                timezoneString = $(this).val();
                updateTimezone( timezoneString );
                resetCookie( timezoneString );
                reset.addClass('show');
            });
        }
        
        // reset back to default
        // clear cookie
        // hide reset buttion
        if( reset.length ) {
            reset.on('click', function(){
                timezoneSelect.val('America/New_York');
                timezoneString = timezoneSelect.val();
                updateTimezone( timezoneString );
                deleteCookie('timezoneset_cookie');
                $(this).removeClass('show'); 
            });
        }

        // search for all relevant times on the page
        function updateTimezone( timezoneString ) {
            if(eventdates.length) {
                eventdates.each(function() {
                    let starttimestamp = Number($(this).attr('data-event-timestamp-start'));
                    let endtimestamp = Number($(this).attr('data-event-timestamp-end'));
                    let currentDateTimeStart = DateTime.fromSeconds( starttimestamp, { zone: timezoneString });
                    let currentDateTimeEnd = DateTime.fromSeconds( endtimestamp, { zone: timezoneString });
                    let startDate = currentDateTimeStart.hasSame(DateTime.now(), "day") ? 'Today' : currentDateTimeStart.toFormat('MMMM d, y');
                    let startTime = currentDateTimeStart.toFormat('t');
                    let endDate = currentDateTimeEnd.hasSame(DateTime.now(), "day") ? 'Today' : currentDateTimeEnd.toFormat('MMMM d, y');
                    let endTime = currentDateTimeEnd.toFormat('t');

                    if(startDate === endDate) {
                        endDate = '';
                    }
        
                    $(this).find('.start-date').text(startDate + ' ');
                    $(this).find('.start-time').text(startTime);
                    $(this).find('.end-date').text(endDate + ' ');
                    $(this).find('.end-time').text(endTime);
                }); 
            }           
        }

        
    });

})( jQuery );;
/**
* Social Share
* Vanilla JS
*/

document.addEventListener( 'DOMContentLoaded', function() {
    var btn = document.getElementById( 'social-share-button' );
    var popover = document.getElementById( 'social-share-popover' );
    var calbtn = document.getElementById( 'calendar-share-button' );
    var calpopover = document.getElementById( 'calendar-share-popover' );
    var copy = document.getElementById('copy-url');
    var copiedUrl = document.getElementById('copy-to-clipboard');
    var label = document.getElementById('alert-label');
    var html = document.body.parentNode;

    if( btn && popover ) {
        const outsideClickListener = event => {
            if (!popover.contains(event.target) && !btn.contains(event.target)) { 
                popover.classList.remove('open');
                if( calpopover ) {
                    calpopover.classList.remove('open');
                }
                removeClickListener();
            }
        }
        const removeClickListener = () => {
            document.removeEventListener('click', outsideClickListener);
        }
        btn.addEventListener('click', function(){
            popover.classList.toggle('open');
            document.addEventListener('click', outsideClickListener);
            if( calpopover ) {
                calpopover.classList.remove('open');
            }
        });

        

        
        if( copy && label ) {
            // Clipboard only works when content is served over SSL
            if (window.isSecureContext && navigator.clipboard) {
                copy.addEventListener( 'click', function(){
                    navigator.clipboard.writeText(copiedUrl.innerText).then(() => {
                        /* Text copied to clipboard */
                        label.innerText = "Copied successfully!";
                        label.classList.remove('error');
                    },() => {
                        /* Rejected - text failed to copy to the clipboard */
                        label.innerText = "Failed to copy URL";
                        label.classList.add('error');
                    });
                })
            } else {
                popover.classList.add('no-ssl');
            }
        }    
    }
    
    if( calbtn && calpopover ) {
        const outsideClickListener = event => {
            if (!calpopover.contains(event.target) && !calbtn.contains(event.target)) { 
                calpopover.classList.remove('open');
                if( popover ) {
                    popover.classList.remove('open');
                }
   er = () => {
            document.removeEventListener('click', outsideClickListener);
        }
        calbtn.addEventListener( 'click', function(){
            calpopover.classList.toggle('open');
            document.addEventListener('click', outsideClickListener);
            if( popover ) {
                popover.classList.remove('open');
            }
        });
    }    
});;
