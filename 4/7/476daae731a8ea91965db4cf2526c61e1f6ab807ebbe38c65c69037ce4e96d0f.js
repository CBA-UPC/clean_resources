( function( $ ) {
	"use strict";

	/**
	 * Global Vars
	 */

	var windowWidth = window.innerWidth,
		windowHeight = window.innerHeight,
		adminBarHeight = $( '#wpadminbar' ).innerHeight(),
		headerHeight = $( '.site-header' ).innerHeight(),
		navBarHeight = $( '.navbar-primary' ).innerHeight();

	if ( $( 'body' ).hasClass( 'admin-bar' ) ) {
		if ( window.innerWidth > 782 ) {
			adminBarHeight = 32;
		} else {
			adminBarHeight = 46;
		}
	}

	$( document ).ready( function() {
		headerHeight = $( '.site-header' ).innerHeight();
		navBarHeight = $( '.navbar-primary' ).innerHeight();
	} );

	$( window ).resize( function() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		adminBarHeight = $( '#wpadminbar' ).innerHeight();
		headerHeight = $( '.site-header' ).innerHeight();
		navBarHeight = $( '.navbar-primary' ).innerHeight();
	} );

	var isIE = /MSIE|Trident/i.test( navigator.userAgent );

	var isRetina = false;

	if ( window.matchMedia ) {
		var mq = window.matchMedia( "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)" );
		if ( mq && mq.matches || ( window.devicePixelRatio > 1 ) ) {
			isRetina = true;
		}
	}

	var rtl = false;

	if ( $( 'body' ).hasClass( 'rtl' ) ) {
		rtl = true;
	}
	/**
	 * Google AdSense
	 */

	try {
		$( '.adsbygoogle' ).each( );
	} catch ( ex ) {}
	( function() {
		var ticking = false;

		var update = function() {

			// Sidebar.
			// -----------------------------------.
			$( '.content-area .site-main' ).each( function() {

				var content = $( this ).find( '.entry-content' );
				var sidebar = $( this ).find( '.post-sidebar .pk-share-buttons-wrap' );

				// Vars offset.
				var offsetTop = 20;
				var offsetBottom = -20;

				// Search elements.
				var elements = [];

				elements.push( '> .alignfull' );
				elements.push( '> .alignwide' );

				var layouts = $( content ).find( elements.join( ',' ) );

				if ( 0 === sidebar.length ) {
					return;
				}
				if ( 0 === layouts.length ) {
					return;
				}

				var disabled = false;

				// Get sidebar values.
				var sidebarTop = $( sidebar ).offset().top;
				var sidebarHeight = $( sidebar ).outerHeight( true );

				for ( let i = 0; i < $( layouts ).length; ++i ) {
					if ( 'none' === $( layouts[ i ] ).css( 'transform' ) ) {
						continue;
					}

					// Get layout values.
					let layoutTop = $( layouts[ i ] ).offset().top;
					let layoutHeight = $( layouts[ i ] ).outerHeight( true );

					// Calc points.
					let pointTop = layoutTop - offsetTop;
					let pointBottom = layoutTop + layoutHeight + offsetBottom;

					// Detect sidebar location.
					if ( sidebarTop + sidebarHeight >= pointTop && sidebarTop <= pointBottom ) {
						disabled = true;
					}
				}


				if ( disabled ) {
					$( sidebar ).css( 'opacity', '0' );
				} else {
					$( sidebar ).css( 'opacity', '1' );
				}
			} );

			// Pagination.
			// -----------------------------------.
			$( '.content-area .site-main' ).each( function() {

				var content = $( this ).find( '.entry-content' );
				var pagination = $( this ).find( '.posts-pagination article:first-child' );

				// Vars offset.
				var offsetTop = -20;
				var offsetBottom = -140;

				// Search elements.
				var elements = [];

				elements.push( '> .alignfull' );

				var layouts = $( content ).find( elements.join( ',' ) );

				if ( 0 === pagination.length ) {
					return;
				}
				if ( 0 === layouts.length ) {
					return;
				}

				var disabled = false;

				// Get pagination values.
				var paginationTop = $( pagination ).find( '> a' ).offset().top;
				var paginationHeight = $( pagination ).find( '> a' ).outerWidth( true );

				for ( let i = 0; i < $( layouts ).length; ++i ) {
					if ( 'none' === $( layouts[ i ] ).css( 'transform' ) ) {
						continue;
					}

					// Get layout values.
					let layoutTop = $( layouts[ i ] ).offset().top;
					let layoutHeight = $( layouts[ i ] ).outerHeight( true );

					// Calc points.
					let pointTop = layoutTop - offsetTop;
					let pointBottom = layoutTop + layoutHeight + offsetBottom;

					// Detect pagination location.
					if ( paginationTop + paginationHeight >= pointTop && paginationTop <= pointBottom ) {
						disabled = true;
					}
				}

				if ( disabled ) {
					$( pagination ).parent().css( 'opacity', '0' );
					$( pagination ).parent().css( 'visibility', 'hidden' );
				} else {
					$( pagination ).parent().css( 'opacity', '1' );
					$( pagination ).parent().css( 'visibility', 'visible' );
				}
			} );

			// Ticking.
			ticking = false;
		};

		var requestTick = function() {
			if ( !ticking ) {
				window.requestAnimationFrame( update );
				ticking = true;
			}
		};

		var onProcess = function() {
			requestTick();
		};

		$( window ).on( 'scroll', onProcess );
		$( window ).on( 'resize', onProcess );
		$( window ).on( 'image-load', onProcess );
		$( window ).on( 'post-load', onProcess );
		$( window ).on( 'slider-refresh', onProcess );

	} )();

	// Init slider for powerkit featured posts.

	function initFeaturedSlider() {
		// Widget Post Featured
		$( '.pk-widget-posts-template-slider' ).each( function() {
			if ( $( this ).hasClass( 'init-slider' ) ) {
				return;
			}

			$( this ).addClass( 'init-slider' );

			// Wrap inner of slider-container.
			$( this ).wrapInner( '<div class="slider-container slider-flip"></div>' );

			// Add owl-carousel class.
			$( this ).find( '.slider-flip > ul' ).addClass( 'owl-carousel' );

			// Add owl dots.
			$( this ).find( '.slider-flip' ).append( '<div class="owl-dots"></div>' );
		} );
	}

	$( document ).ready( function() {
		initFeaturedSlider();
		initSliderFlip();
		$( document.body ).on( 'post-load', function() {
			initFeaturedSlider();
			initSliderFlip();
		} );
	} );
	/**
	 * AJAX Load More.
	 *
	 * Contains functions for AJAX Load More.
	 */


	/**
	 * Check if Load More is defined by the wp_localize_script
	 */
	if ( typeof csco_ajax_pagination !== 'undefined' ) {

		$( '.post-archive .archive-pagination' ).append( '<span class="load-more button btn-lg button-primary">' + csco_ajax_pagination.translation.load_more + '</span>' );

		var query_data = $.parseJSON( csco_ajax_pagination.query_data ),
			infinite = $.parseJSON( query_data.infinite_load ),
			button = $( '.archive-pagination .load-more' ),
			page = 2,
			loading = false,
			scrollHandling = {
				allow: infinite,
				reallow: function() {
					scrollHandling.allow = true;
				},
				delay: 400 //(milliseconds) adjust to the highest acceptable value
			};

	}

	/**
	 * Get next posts
	 */
	function csco_ajax_get_posts() {
		loading = true;
		// Set button text to Load More.
		button.text( csco_ajax_pagination.translation.loading );
		var data = {
			action: 'csco_ajax_load_more',
			page: page,
			posts_per_page: csco_ajax_pagination.posts_per_page,
			query_data: csco_ajax_pagination.query_data,
			_ajax_nonce: csco_ajax_pagination.nonce,
		};

		// Request Url.
		var csco_pagination_url;
		if ( 'ajax_restapi' === csco_ajax_pagination.type ) {
			csco_pagination_url = csco_ajax_pagination.rest_url;
		} else {
			csco_pagination_url = csco_ajax_pagination.url;
		}

		// Send Request.
		$.post( csco_pagination_url, data, function( res ) {
			if ( res.success ) {

				// Get the posts.
				var data = $( res.data.content );

				// Check if there're any posts.
				if ( data.length ) {

					data.imagesLoaded( function() {

						// Append new posts to list, standard and grid archives.
						$( '.archive-main.archive-list, .archive-main.archive-standard, .archive-main.archive-grid' ).append( data );

						// Append new posts to masonry layout.
						$( '.archive-main.archive-masonry' ).colcade( 'append', data );

						// WP Post Load trigger.
						$( document.body ).trigger( 'post-load' );

						// Reinit Facebook widgets.
						if ( $( '#fb-root' ).length ) {
							FB.XFBML.parse();
						}

						// Set button text to Load More.
						button.text( csco_ajax_pagination.translation.load_more );

						// Increment a page.
						page = page + 1;

						// Set the loading state.
						loading = false;

					} );

				}

				// Remove Button on Posts End.
				if ( res.data.posts_end || !data.length ) {

					// Remove Load More button.
					button.remove();
				}

			} else {
				// console.log(res);
			}
		} ).fail( function( xhr, textStatus, e ) {
			// console.log(xhr.responseText);
		} );
	}

	/**
	 * Check if Load More is defined by the wp_localize_script
	 */
	if ( typeof csco_ajax_pagination !== 'undefined' ) {
		// On Scroll Event.
		$( window ).scroll( function() {
			if ( button.length && !loading && scrollHandling.allow ) {
				scrollHandling.allow = false;
				setTimeout( scrollHandling.reallow, scrollHandling.delay );
				var offset = $( button ).offset().top - $( window ).scrollTop();
				if ( 4000 > offset ) {
					csco_ajax_get_posts();
				}
			}
		} );

		// On Click Event.
		$( 'body' ).on( 'click', '.load-more', );

	}

	/**
	 * AJAX Auto Load Next Post.
	 *
	 * Contains functions for AJAX Auto Load Next Post.
	 */

	( function() {
		/**
		 * Check if Load Nextpost is defined by the wp_localize_script
		 */
		if ( typeof csco_ajax_nextpost !== 'undefined' ) {

			var objNextparent = $( '.site-inner > .site-content' ),
				objNextsect = '.cs-nextpost-section',
				objNextpost = null,
				currentNTitle = document.title,
				currentNLink = window.location.href,
				loadingNextpost = false,
				scrollNextpost = {
					allow: true,
					reallow: 
					delay: 400 //(milliseconds) adjust to the highest acceptable value
				};

			// Init.
			if ( csco_ajax_nextpost.next_post ) {
				$( objNextparent ).after( '<div class="cs-nextpost-inner"></div>' );

				objNextpost = $( '.cs-nextpost-inner' );
			}
		}

		/**
		 * Get next post
		 */
		function csco_ajax_get_nextpost() {
			loadingNextpost = true;

			// Set class loading.
			var data = {
				action: 'csco_ajax_load_nextpost',
				not_in: csco_ajax_nextpost.not_in,
				current_user: csco_ajax_nextpost.current_user,
				nonce: csco_ajax_nextpost.nonce,
				next_post: csco_ajax_nextpost.next_post,
			};

			// Request Url.
			var csco_ajax_nextpost_url;
			if ( 'ajax_restapi' === csco_ajax_nextpost.type ) {
				csco_ajax_nextpost_url = csco_ajax_nextpost.rest_url;
			} else {
				csco_ajax_nextpost_url = csco_ajax_nextpost.url;
			}

			// Send Request.
			$.post( csco_ajax_nextpost_url, data, function( res ) {

				csco_ajax_nextpost.next_post = false;

				if ( res.success ) {

					// Get the posts.
					var data = $( res.data.content );

					// Check if there're any posts.
					if ( data.length ) {
						// Set the loading state.
						loadingNextpost = false;

						// Set not_in.
						csco_ajax_nextpost.not_in = res.data.not_in;

						// Set next data.
						csco_ajax_nextpost.next_post = res.data.next_post;

						// Remove loader.
						$( objNextpost ).siblings( '.cs-nextpost-loading' ).remove();

						// Append new post.
						$( objNextpost ).append( data );

						// Reinit facebook.
						if ( $( '#fb-root' ).length ) {
							FB.XFBML.parse();
						}

						$( document.body ).trigger( 'post-load' );
					}
				} else {
					// console.log(res);
				}
			} ).fail( );
		}

		/**
		 * Check if Load Nextpost is defined by the wp_localize_script
		 */
		if ( typeof csco_ajax_nextpost !== 'undefined' ) {

			// On Scroll Event.
			$( window ).scroll( function() {
				var scrollTop = $( window ).scrollTop();

				// Init nextpost.
				if ( csco_ajax_nextpost.next_post ) {

					if ( objNextpost.length && !loadingNextpost && scrollNextpost.allow ) {
						scrollNextpost.allow = false;
						setTimeout( scrollNextpost.reallow, scrollNextpost.delay );
						// Calc current offset.
						let offset = objNextpost.offset().top + objNextpost.innerHeight() - scrollTop;
						// Load nextpost.
						if ( 4000 > offset ) {
							$( objNextpost ).after( '<div class="cs-nextpost-loading"></div>' );

							csco_ajax_get_nextpost();
						}
					}
				}

				// Reset browser data link.
				let objFirst = $( objNextsect ).first();

				if ( objFirst.length ) {
					let firstTop = $( objFirst ).offset().top;
					// If there has been a change.
					if ( scrollTop < firstTop && window.location.href !== currentNLink ) {
						document.title = currentNTitle;
						window.history.pushState( null, currentNTitle, currentNLink );
					}
				}

				// Set browser data link.
				$( objNextsect ).each( function( index, elem ) {

					let elemTop = $( elem ).offset().top;
					let elemHeight = $( elem ).innerHeight();

					if ( scrollTop > elemTop && scrollTop < elemTop + elemHeight ) {
						// If there has been a change.
						if ( window.location.href !== $( elem ).data( 'url' ) ) {
							// New title.
							document.title = $( elem ).data( 'title' );
							// New link.
							window.history.pushState( null, $( elem ).data( 'title' ), $( elem ).data( 'url' ) );
							// Google Analytics.
							if ( typeof gtag === 'function' && typeof window.gaData === 'object' ) {

								var trackingId = Object.keys( window.gaData )[ 0 ];
								if ( trackingId ) {
									gtag( 'config', trackingId, {
										'page_title': $( elem ).data( 'title' ),
										'page_location': $( elem ).data( 'url' )
									} );

									gtag( 'event', 'page_view', { 'send_to': trackingId } );
								}
							}
						}
					}
				} );
			} );
		}

	} )();

	/**
	 * Masonry Archive
	 */

	function initMasonry() {

		var masonryArchive = $( '.archive-masonry' ),
			masonryArchiveOptions = {
				columns: '.archive-col',
				items: '.post-masonry, .post-featured, .widget'
			};

		$( masonryArchive ).imagesLoaded( function() {
			$( masonryArchive ).colcade( masonryArchiveOptions );
		} );

		/**
		 * Masonry Sidebar
		 */

		var masonrySidebar = $( '.sidebar-area' ),
			masonrySidebarOptions = {
				columns: '.sidebar',
				items: ' .widget'
			};

		$( masonrySidebar ).imagesLoaded( );

	}

	$( document ).ready( function() {
		initMasonry();
	} );

	/*
	 * Load Mega Menu Posts
	 */
	function cscoLoadMenuPosts( menuItem ) {
		var dataCat = menuItem.children( 'a' ).data( 'cat' ),
			dataType = menuItem.children( 'a' ).data( 'type' ),
			dataNumberposts = menuItem.children( 'a' ).data( 'numberposts' ),
			menuContainer,
			postsContainer;

		// Containers.
		if ( menuItem.hasClass( 'csco-mega-menu-category' ) ) {
			menuContainer = menuItem;
			postsContainer = menuContainer.find( '.csco-mega-menu-content' );
		} else {
			menuContainer = menuItem.closest( '.sub-menu' );
			postsContainer = menuContainer.find( '.csco-mega-menu-content[data-cat="' + dataCat + '"]' );
		}

		// Set Active.
		menuContainer.find( '.menu-item, .csco-mega-menu-content' ).removeClass( 'active-item' );
		menuItem.addClass( 'active-item' );

		if ( postsContainer ) {
			postsContainer.addClass( 'active-item' );
		}

		// Check Loading.
		if ( menuItem.hasClass( 'loading' ) || menuItem.hasClass( 'loaded' ) ) {
			return false;
		}

		// Check Category.
		if ( !dataCat || typeof dataCat === 'undefined' ) {
			return false;
		}

		// Check Container.
		if ( !postsContainer || typeof postsContainer === 'undefined' ) {
			return false;
		}

		// Create Data.
		var data = {
			'cat': dataCat,
			'type': dataType,
			'per_page': dataNumberposts
		};

		// Get Results.
		$.ajax( {
			url: csco_mega_menu.rest_url,
			type: 'GET',
			data: data,
			global: false,
			async: true,
			beforeSend: function() {
				menuItem.addClass( 'loading' );
				postsContainer.addClass( 'loading' );
			},
			success: function( res ) {
				if ( res.status && 'success' === res.status ) {

					// Set the loaded state.
					menuItem.addClass( 'loaded' );
					postsContainer.addClass( 'loaded' );

					// Check if there're any posts.
					if ( res.content && res.content.length ) {

						$( res.content ).imagesLoaded( );
					}
				}
			},
			complete: 		} );
	}

	/*
	 * Get First Tab
	 */
	function cscoGetFirstTab( container ) {
		var firstTab = false;

		container.find( '.csco-mega-menu-child' ).each( function( index, el ) {
			if ( $( el ).hasClass( 'menu-item-object-category' ) ) {
				firstTab = $( el );
				return false;
			}
		} );

		return firstTab;
	}

	/*
	 * Menu on document ready
	 */
	$( document ).ready( function() {

		/*
		 * Get Menu Posts on Hover
		 */
		$( '.navbar-nav .menu-item.csco-mega-menu-category, .navbar-nav .menu-item.csco-mega-menu-child' ).on( 'hover', );

		/*
		 * Load First Tab on Mega Menu Hover
		 */
		$( '.navbar-nav .menu-item.csco-mega-menu-tabs' ).on( 'hover', function() {
			var tab = cscoGetFirstTab( $( this ) );

			if ( tab ) {
				cscoLoadMenuPosts( tab );
			}
		} );
	} );

	/*
	 * Load First Tab on Navbar Ready.
	 */
	$( document, '.navbar-nav' ).ready( function() {
		var tab = false;

		// Autoload First Tab.
		$( '.navbar-nav .menu-item.csco-mega-menu-tabs' ).each( function( index, el ) {
			tab = cscoGetFirstTab( $( this ) );
			if ( tab ) {
				cscoLoadMenuPosts( tab );
			}
		} );

		// Autoload Category.
		$( '.navbar-nav .menu-item.csco-mega-menu-category' ).each( );
	} );

	/**
	 * Responsive Navigation Menu
	 */

	$.fn.responsiveNav = function() {
		this.removeClass( 'menu-item-expanded' );
		if ( this.prev().hasClass( 'submenu-visible' ) ) {
			this.prev().removeClass( 'submenu-visible' ).slideUp( 350 );
			this.parent().removeClass( 'menu-item-expanded' );
		} else {
			this.parent().parent().find( '.menu-item .sub-menu' ).removeClass( 'submenu-visible' ).slideUp( 350 );
			this.parent().parent().find( '.menu-item-expanded' ).removeClass( 'menu-item-expanded' );
			this.prev().toggleClass( 'submenu-visible' ).hide().slideToggle( 350 );
			this.parent().toggleClass( 'menu-item-expanded' );
		}
	};

	// Make widget nav responsive.

	$( document ).ready( function( e ) {

		$( '.widget_nav_menu .menu-item-has-children' ).each( function( e ) {

			// Add a caret.
			$( this ).append( '<span></span>' );

			// Fire responsiveNav() when clicking a caret.
			$( '> span', this ).on( 'click', );

			// Fire responsiveNav() when clicking a parent item with # href attribute.
			if ( '#' === $( '> a', this ).attr( 'href' ) ) {
				$( '> a', this ).on( 'click', );
			}

		} );

	} );

	/*
	 * ----------------------------------------------------------------------------
	 * Navigation
	 */

	var cscoNavigation = {};

	( function() {
		var $this;

		cscoNavigation = {
			sScrollAllow: false,
			sInFirst: true,
			sInterval: 0,
			sPrevious: 0,
			sDirection: 0,

			loadStickyOffset: 0,
			loadAdminBar: false,

			Sticky: $( 'body' ).hasClass( 'navbar-sticky-enabled' ),
			StickyUp: $( 'body' ).hasClass( 'navbar-smart-enabled' ),
			StickyNav: $( '.site-header .navbar-primary' ),
			StickyHeader: $( '.site-header' ),
			StickyOffsetType: 'auto',
			StickyOffset: 0,
			StickyOffsetFull: 0,

			/*
			 * Initialize
			 */
			init: 

			/*
			 * Events
			 */
			events: function( e ) {
				// DOM Load
				document.addEventListener( 'DOMContentLoaded', function( e ) {
					$this.stickyInit( e );
					$this.smartLevels( e );
					$this.adaptTablet( e );
				} );
				// Resize
				window.addEventListener( 'resize', );
				// Scroll
				window.addEventListener( 'scroll', );
			},

			/*
			 * Init nav bar sticky
			 */
			stickyInit: function( e ) {

				if ( !$this.Sticky ) {
					return;
				}

				$this.sScrollAllow = false;

				// Calc sticky offset.
				if ( $this.StickyOffsetType !== 'size' ) {

					var calcbar = 0;
					var wpadminbar = 0;

					if ( $( '#wpadminbar' ).length > 0 ) {
						calcbar = $( '#wpadminbar' ).outerHeight();

						wpadminbar = calcbar;

						if ( 'resize' !== e.type ) {
							$this.loadAdminBar = wpadminbar;
						}

						if ( 'absolute' === $( '#wpadminbar' ).css( 'position' ) ) {
							wpadminbar = 0;

							if ( 'resize' !== e.type ) {
								$this.loadAdminBar = 0;
							}
						}
					}

					// Calc outside header.
					$this.StickyOffsetFull = $this.StickyHeader.outerHeight();

					// Calc on load offset top.
					var elOffset = $this.StickyNav.not( '.sticky-nav' ).offset();

					if ( elOffset && !$this.StickyNav.hasClass( '.sticky-nav' ) ) {

						$this.StickyOffset = elOffset.top;

						$this.loadStickyOffset = elOffset.top;
					} else {
						$this.StickyOffset = $this.loadStickyOffset;
					}

					// Consider the size of the wpadminbar.
					if ( 32 === $this.loadAdminBar ) {
						if ( 46 === calcbar ) {
							$this.StickyOffset = $this.StickyOffset - wpadminbar + 14;
						} else {
							$this.StickyOffset = $this.StickyOffset - wpadminbar;
						}
					} else if ( 46 === $this.loadAdminBar || 0 === $this.loadAdminBar ) {

						if ( 32 === calcbar ) {
							$this.StickyOffset = $this.StickyOffset - wpadminbar - 14;
						} else {
							$this.StickyOffset = $this.StickyOffset - wpadminbar;
						}
					}
				}

				// Nav Height.
				var navHeight = $this.StickyNav.outerHeight();

				// Set the min-height default of the header.
				$this.StickyHeader.data( 'min-height', $this.StickyOffsetFull - navHeight );

				// Document ready.
				if ( 'resize' !== e.type ) {

					// Add nav dummy.
					$this.StickyNav.after( '<div class="navbar-dummy"></div>' );
					$this.StickyHeader.find( '.navbar-dummy' ).height( navHeight );

					// Set type slide.
					if ( $this.StickyUp ) {
						$this.StickyHeader.addClass( 'sticky-type-slide' );
					}
				}

				// Allow.
				$this.sScrollAllow = true;
			},

			/*
			 * Make nav bar sticky
			 */
			stickyScroll: function( e ) {
				if ( !$this.sScrollAllow ) {
					return;
				}

				var scrollCurrent = $( window ).scrollTop();

				if ( $this.StickyUp ) {

					if ( scrollCurrent > $this.StickyOffsetFull ) {
						$this.StickyNav.addClass( 'sticky-nav' );
					}

					if ( scrollCurrent <= $this.StickyOffset ) {
						$this.StickyNav.removeClass( 'sticky-nav' );
					}

					// Set scroll temporary vars.
					if ( scrollCurrent > $this.sPrevious ) {
						$this.sInterval = 0;
						$this.sDirection = 'down';

						$this.StickyNav.addClass( 'sticky-down' ).removeClass( 'sticky-up' );
					} else {
						$this.sInterval += $this.sPrevious - scrollCurrent;
						$this.sDirection = 'up';

						$this.StickyNav.addClass( 'sticky-up' ).removeClass( 'sticky-down' );
					}

					// Сonditions.
					if ( $this.sInterval > 150 && 'up' === $this.sDirection ) {
						$this.StickyNav.addClass( 'sticky-nav-slide-visible' );

						$( document ).trigger( 'sticky-nav-visible' );
					} else {
						$this.StickyNav.removeClass( 'sticky-nav-slide-visible' );

						$( document ).trigger( 'sticky-nav-hide' );
					}

					if ( scrollCurrent > $this.StickyOffsetFull + 150 ) {
						$this.StickyNav.addClass( 'sticky-nav-slide' );
					} else {
						$this.StickyNav.removeClass( 'sticky-nav-slide' );
					}

					// Show onload document.
					if ( $this.sInFirst && scrollCurrent > $this.StickyOffsetFull + 150 ) {
						$this.StickyNav.addClass( ' sticky-nav-slide-visible sticky-up' );
						$this.StickyNav.addClass( 'sticky-nav-slide' );

						$( document ).trigger( 'sticky-nav-visible' );

						$this.sDirection = 'up';
						$this.sInterval = 151;
						$this.sInFirst = false;
					}
				} else {
					// Сonditions.
					if ( scrollCurrent > $this.StickyOffset ) {
						$this.StickyNav.addClass( 'sticky-nav' );

						$( document ).trigger( 'sticky-nav-visible' );
					} else {
						$this.StickyNav.removeClass( 'sticky-nav' );
						$( document ).trigger( 'sticky-nav-hide' );
					}
				}

				$this.sPrevious = scrollCurrent;
			},

			/*
			 * Smart multi-Level menu
			 */
			smartLevels: function( e ) {

				var windowWidth = $( window ).width();

				// Reset Calc.
				$( '.navbar-nav li' ).removeClass( 'cs-mm-level' );
				$( '.navbar-nav li' ).removeClass( 'cs-mm-position-left cs-mm-position-right' );
				$( '.navbar-nav li .sub-menu' ).removeClass( 'cs-mm-position-init' );

				// Set Settings.
				$( '.navbar-nav > li.menu-item' ).not( '.cs-mega-menu' ).each( function( index, parent ) {
					var position = 'cs-mm-position-right';
					var objPrevWidth = 0;

					$( parent ).find( '.sub-menu' ).each( function( index, el ) {

						// Reset child levels.
						$( el ).parent().next( 'li' ).addClass( 'cs-mm-level' );

						if ( $( el ).parent().hasClass( 'cs-mm-level' ) ) {

							$( el ).parent().removeClass( 'cs-mm-level' );

							position = 'cs-mm-position-right';
							objPrevWidth = 0;
						}

						// Find out position items.
						var offset = $( el ).offset();
						var objOffset = offset.left;

						if ( 'cs-mm-position-right' === position && $( el ).outerWidth() + objOffset > windowWidth ) {
							position = 'cs-mm-position-left';
						}

						if ( 'cs-mm-position-left' === position && objOffset - ( $( el ).outerWidth() + objPrevWidth ) < 0 ) {
							position = 'cs-mm-position-right';
						}

						objPrevWidth = $( el ).outerWidth();

						$( el ).addClass( 'cs-mm-position-init' ).parent().addClass( position );
					} );

				} );
			},

			/*
			 * Adapting nav bar for tablet
			 */
			adaptTablet: function( e ) {
				// Click outside.
				$( document ).on( 'touchstart', function( e ) {

					if ( !$( e.target ).closest( '.navbar-nav' ).length ) {
						$( '.navbar-nav .menu-item-has-children' ).removeClass( 'submenu-visible' );
					} else {
						$( e.target ).parents( '.menu-item' ).siblings().find( '.menu-item' ).removeClass( 'submenu-visible' );
						$( e.target ).parents( '.menu-item' ).siblings().closest( '.menu-item' ).removeClass( 'submenu-visible' );
					}
				} );

				$( '.navbar-nav .menu-item-has-children' ).each( function( e ) {

					// Reset class.
					$( this ).removeClass( 'submenu-visible' );

					// Remove expanded.
					$( this ).find( '> a > .expanded' ).remove();

					// Add a caret.
					if ( 'ontouchstart' in document.documentElement ) {
						$( this ).find( '> a' ).append( '<span class="expanded"></span>' );
					}

					// Check touch device.
					$( this ).addClass( 'ontouchstart' in document.documentElement ? 'touch-device' : '' );

					$( '> a .expanded', this ).on( 'touchstart'} );


					if ( '#' === $( '> a', this ).attr( 'href' ) ) {
						$( '> a', this ).on( 'touchstart', function( e ) {
							e.preventDefault();

							if ( !$( e.target ).hasClass( 'expanded' ) ) {
								$( this ).closest( '.menu-item-has-children' ).toggleClass( 'submenu-visible' );
							}
						} );
					}
				} );
			}
		};

	} )();

	// Initialize.
	cscoNavigation.init();

	/**
	 * Offcanvas Navigation
	 */

	$( '.offcanvas-toggle, .site-overlay' ).on( 'click', function( e ) {
		e.preventDefault();
		$( 'body' ).toggleClass( 'offcanvas-active' );

		// recalc sticky sidebar by simulating window resize
		//  with a delay equal to the animation speed
		setTimeout( function() { $( window ).trigger( 'resize' ); }, 401 );
	} );

	/**
	 * Large Page Header
	 */

	var pageHeader = $( '.page-header-large' ),
		pageHeaderOuter = $( '.overlay-outer', pageHeader );

	// Function for calculating Page Header height.

	function setPageHeaderHeight() {

		// Redefine variables.
		pageHeader = $( '.page-header-large' );
		pageHeaderOuter = $( '.overlay-outer', pageHeader );

		// Define heights.
		var contentHeight = $( '.overlay-inner', pageHeader ).innerHeight(),
			offsetHeight = adminBarHeight + headerHeight,
			availableHeight = windowHeight - offsetHeight,
			viewPortHeight = '100vh';

		// Offset page header.
		pageHeader.css( 'margin-top', '-' + offsetHeight + 'px' );
		pageHeaderOuter.css( 'padding-top', offsetHeight + 'px' );

		// Set the page header height.
		if ( availableHeight >= contentHeight ) {
			pageHeaderOuter.css( 'height', viewPortHeight );
		} else {
			pageHeaderOuter.css( 'height', contentHeight + offsetHeight + 'px' );
		}

		// Return if overlay position is set to bottom.
		if ( $( 'body' ).hasClass( 'style-align-left' ) ) {
			return;
		}

		// Add extra padding, if possible.
		if ( availableHeight - offsetHeight >= contentHeight ) {
			pageHeaderOuter.css( 'padding-bottom', offsetHeight + 'px' );
		} else {
			pageHeaderOuter.css( 'padding-bottom', 0 );
		}
	}

	// Set initial height.

	$( document ).ready( function() {
		setPageHeaderHeight();
	} );

	// Recalculate height on resize.

	$( window ).resize( function() {
		setPageHeaderHeight();
	} );

	/**
	 * Parallax
	 */

	function initParallax() {

		$( '.parallax-enabled .parallax:not(.parallax-video)' ).each} );

		var parallaxVideo = $( '.parallax-video' ),
			speed = 0.8;

		if ( !$( 'body' ).hasClass( 'parallax-enabled' ) ) {
			speed = 1;
		}

		$( parallaxVideo ).each( function() {

			if ( !$( this ).hasClass( 'parallax' ) ) {
				speed = 1;
			}

			$( this ).jarallax( {
				speed: speed,
				videoSrc: $( this ).attr( 'data-video' ),
				videoStartTime: $( this ).data( 'start' ),
				videoEndTime: $( this ).data( 'end' ),
			} );

		} );

	}

	$( document ).ready( function() {
		initParallax();
		$( 'body' ).on( 'post-load', function() {
			initParallax();
		} );
	} );

	/**
	 * Object Fit Images
	 */

	jQuery( document ).ready} );

	( function() {
		var viewport = $( window ).height();
		var lastScrollY = 0;
		var ticking = false;
		var offset = 200;

		var update = function() {
			var article = $( '.single-post .site-main > article' );

			if ( 1 === article.length ) {
				let articleHeight = $( article ).innerHeight();

				// Pagination points.
				let topPoint = $( article ).offset().top;
				let bottomPoint = topPoint + articleHeight + offset;

				if ( lastScrollY > topPoint && lastScrollY + viewport < bottomPoint ) {
					$( '.post-pagination' ).addClass( 'pagination-visible' );
				} else {
					$( '.post-pagination' ).removeClass( 'pagination-visible' );
				}
			}

			ticking = false;
		};

		var requestTick = function() {
			if ( !ticking ) {
				window.requestAnimationFrame( update );
				ticking = true;
			}
		};

		var onProcess };

		$( window ).on( 'scroll', onProcess );
		$( window ).on( 'resize', onProcess );
		$( window ).on( 'slider-refresh', onProcess );

	} )();

	/**
	 * Fullscreen Search
	 */

	$( 'a[href="#search"]' ).on( 'click'} );

	$( '#search, #search button.close' ).on( 'click keyup', function( event ) {
		if ( event.target === this || event.target.className === 'close' || event.keyCode === 27 ) {
			event.preventDefault();
			$( this ).removeClass( 'open' );
			$( 'body' ).removeClass( 'search-open' );
		}
	} );

	/**
	 * Sliders
	 */

	// Slider Parallax

	var owlSlide = $( '.parallax-enabled .slider-featured .slide-parallax:not(.slide-video)' );
	var owlVideo = $( '.slide-video' );

	// Init Hook

	function onInitialized( event ) {

		var $container = $( event.target );

		owlSlide = $( '.parallax-enabled .slider-featured .slide-parallax:not(.slide-video)' );
		$( '.overlay-media', owlSlide ).each( function() {

			$( this ).jarallax( {
				speed: 0.8,
				elementInViewport: $container,
				noIos: false,
			} );

			$( this ).attr( 'data-parallax', 'image' );

		} );

		owlVideo = $( '.slide-video' );

		$( owlVideo ).each( function() {

			var videoSrc = $( this ).data( 'video' ),
				videoStartTime = $( this ).data( 'start' ),
				videoEndTime = $( this ).data( 'end' ),
				speed = 0.8;

			if ( !$( this ).hasClass( 'slide-parallax' ) ) {
				speed = 1;
			}

			$( '.overlay-media', this ).jarallax( {
				speed: speed,
				videoSrc: videoSrc,
				videoStartTime: videoStartTime,
				videoEndTime: videoEndTime,
				elementInViewport: $container,
				noIos: false,
			} );

			$( '.overlay-media', this ).attr( 'data-parallax', 'video' );

		} );

		// Recalc.
		$( window ).trigger( 'slider-refresh' );

	}

	// Resize Hook

	function onResized() {
		// Reinit Parallax.
		owlSlide = $( '.parallax-enabled .slider-featured .slide-parallax .overlay-media' );

		$( owlSlide ).each} );
	}

	// Center
	function initSliderCenter() {
		var sliderCenter = $( '.slider-center' );

		sliderCenter.each( function() {

			function setArrowWidth( event ) {
				var carousel = $( event.target );
				$( '.owl-arrows > button', carousel.parent() ).css( 'width', ( carousel.innerWidth() - $( '.owl-item.center', carousel ).innerWidth() - carousel.parent().data( 'padding' ) * 2 ) / 2 + 'px' );
			}

	}

	}

			var container = $( this );
			var owl = $( '.owl-carousel', container );

			owl.owlCarousel( {
				autoplay: $( this ).data( 'autoplay' ),
				autoplayTimeout: $( this ).data( 'timeout' ),
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				dotsContainer: $( '.owl-dots', container ),
				navContainer: $( '.owl-arrows', container ),
				navText: [ '', '' ],
				autoHeight: true,
				rtl: rtl,
				responsive: {
					0: {
						items: 1,
						loop: false,
						margin: 0,
						dots: true,
						nav: false,
					},
					1240: {
						center: true,
						items: 3,
						loop: true,
						margin: $( this ).data( 'padding' ),
						autoWidth: true,
						dots: false,
						nav: true,
					}
				},
				onInitialized: sliderCenterInitialized,
				onResized: sliderCenterResized,
			} );
		} );
	}

	$( document ).ready( function() {
		initSliderCenter();
		$( document.body ).on( 'post-load', function() {
			initSliderCenter();
		} );
	} );

	// Boxed

	function initSliderBoxed() {
		var sliderBoxed = $( '.slider-boxed' );

		sliderBoxed.each( function() {

			var container = this;
			var owl = $( '.owl-carousel', this );

			owl.owlCarousel( {
				autoplay: $( this ).data( 'autoplay' ),
				autoplayTimeout: $( this ).data( 'timeout' ),
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				items: 1,
				margin: 0,
				autoHeight: true,
				navText: [
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.previous + '</span></div>',
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.next + '</span></div>'
				],
				dots: true,
				dotsContainer: $( '.owl-dots', container ),
				navContainer: $( '.owl-arrows', container ),
				rtl: rtl,
				responsive: {
					0: {
						nav: false,
					},
					1020: {
						nav: true,
						loop: true
					}
				},
				onInitialized: onInitialized,
				onResized: onResized,
			} );

		} );
	}

	$( document ).ready( function() {
		initSliderBoxed();
		$( document.body ).on( 'post-load', function() {
			initSliderBoxed();
		} );
	} );

	// Large
	function sliderLargePosition() {

		// Redefine variables.
		var sliderLarge = $( '.slider-large' );
		var sliderLargeOuter = $( '.overlay-outer', sliderLarge );

		// Define heights.
		var owlSlide = $( '.post-outer', sliderLarge ),
			contentHeight = $( '.overlay-inner', owlSlide ).innerHeight(),
			offsetHeight = adminBarHeight + headerHeight,
			availableHeight = windowHeight - offsetHeight,
			viewPortHeight = '100vh';

		// Offset page header.
		sliderLarge.css( 'margin-top', -offsetHeight + 'px' );
		sliderLargeOuter.css( 'padding-top', offsetHeight + 'px' );

		// Set the slider height.
		if ( availableHeight >= contentHeight ) {
			sliderLargeOuter.css( 'height', viewPortHeight );
		} else {
			sliderLargeOuter.css( 'height', contentHeight + offsetHeight + 'px' );
		}

		// Return if overlay variant is set to bottom.
		if ( $( document.body ).hasClass( 'style-align-left' ) ) {
			return;
		}

		// Add extra padding, if possible.
		if ( availableHeight - offsetHeight >= contentHeight ) {
			sliderLargeOuter.css( 'padding-bottom', offsetHeight + 'px' );
		} else {
			sliderLargeOuter.css( 'padding-bottom', 0 );
		}
	}
}
}

	function initSliderLarge() {
		var sliderLarge = $( '.slider-large' ),
			sliderLargeOuter = $( '.overlay-outer', sliderLarge );

		sliderLarge.each( function() {

			var container = this,
				owl = $( '.owl-carousel', this ),
				autoHeight = false;

			if ( $( document.body ).hasClass( 'style-type-classic' ) ) {
				autoHeight = true;
			}

			owl.owlCarousel( {
				autoplay: $( this ).data( 'autoplay' ),
				autoplayTimeout: $( this ).data( 'timeout' ),
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				autoHeight: autoHeight,
				items: 1,
				margin: 0,
				navText: [
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.previous + '</span></div>',
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.next + '</span></div>'
				],
				dots: true,
				dotsContainer: $( '.owl-dots', container ),
				navContainer: $( '.owl-arrows', container ),
				rtl: rtl,
				responsive: {
					0: {
						nav: false,
					},
					1020: {
						nav: true,
						loop: true,
					}
				},
				onInitialized: sliderLargeInitialized,
				onTranslated: sliderLargePosition,
				onResized: sliderLargeResized,
			} );
		} );
	}

	$( document ).ready( function() {
		initSliderLarge();
		$( document.body ).on( 'post-load', function() {
			initSliderLarge();
		} );
	} );

	// Recalc slider on vertical window resize.
	$( window ).resize( function() {
		if ( $( window ).width() === windowWidth ) {
			return;
		}
		windowWidth = $( window ).width();
		sliderLargeResized();
	} );

	// Multiple

	function initSliderMultiple() {

		var sliderMultiple = $( '.slider-multiple' );

		sliderMultiple.each( function() {

			var container = this;
			var owl = $( '.owl-carousel', this );

			owl.owlCarousel( {
				autoplay: $( this ).data( 'autoplay' ),
				autoplayTimeout: $( this ).data( 'timeout' ),
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				navContainer: $( '.owl-arrows', container ),
				navText: [ '', '' ],
				dots: true,
				dotsContainer: $( '.owl-dots', container ),
				autoHeight: true,
				rtl: rtl,
				responsive: {
					0: {
						nav: false,
						loop: false,
						margin: 0,
						stagePadding: 0,
						items: 1,
					},
					1120: {
						nav: true,
						loop: true,
						margin: $( this ).data( 'padding' ),
						stagePadding: 90,
						items: $( this ).data( 'slides-visible' ),
					}
				},
				onInitialized: onInitialized,
				onResized: onResized,
			} );

		} );

	}

	$( document ).ready( function() {
		initSliderMultiple();
		$( document.body ).on( 'post-load', function() {
			initSliderMultiple();
		} );
	} );

	// Simple

	function initSliderSimple() {

		var sliderSimple = $( '.gallery-type-slider' );

		function onTranslated( event ) {
			setTimeout}, 1000 );
		}

}

		sliderSimple.each( function() {

			$( this ).wrapInner( '<div class="owl-carousel"></div>' );

			$( this ).append( '<div class="owl-arrows"></div>' );
			$( this ).append( '<div class="owl-dots"></div>' );

			var container = this,
				owl = $( this ).find( '.owl-carousel' );

			if ( $( owl ).hasClass( 'owl-loaded' ) ) {
				return;
			}

			$( container ).prepend( '<div class="images-loading"></div>' );

			$( owl ).imagesLoaded( function() {

				owl.parent().find( '.images-loading' ).remove();

				owl.owlCarousel( {
					dragEndSpeed: 250,
					smartSpeed: 250,
					autoHeight: true,
					items: 1,
					margin: 0,
					navText: [
						'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.previous + '</span></div>',
						'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.next + '</span></div>'
					],
					navContainer: $( '.owl-arrows', container ),
					dots: true,
					dotsContainer: $( '.owl-dots', container ),
					rtl: rtl,
					responsive: {
						0: {
							nav: false,
						},
						1020: {
							nav: true,
						}
					},
					onInitialized: onInitialized,
					onTranslated: onTranslated,
				} );

			} );

		} );
	}

	$( document ).ready( function() {
		initSliderSimple();
		$( document.body ).on( 'post-load', function() {
			initSliderSimple();
		} );
	} );

	// Flip

	function initSliderFlip() {

		var sliderFlip = $( '.slider-flip' );

}

		sliderFlip.each( function() {

			var container = this,
				owl = $( '.owl-carousel', this ),
				effectOut = 'flipOut',
				effectIn = 'flipIn';

			if ( isIE ) {
				effectOut = 'fadeOut';
				effectIn = 'fadeIn';
			}

			$( owl ).imagesLoaded( function() {

				owl.owlCarousel( {
					dragEndSpeed: 250,
					smartSpeed: 250,
					autoHeight: true,
					animateOut: effectOut,
					animateIn: effectIn,
					items: 1,
					margin: 0,
					dots: true,
					dotsContainer: $( '> .owl-dots', container ),
					rtl: rtl,
					onInitialized: sliderFlipInitialized,
				} );

			} );

		} );

	}

	$( document ).ready( function() {
		initSliderFlip();
		$( document.body ).on( 'post-load', function() {
			initSliderFlip();
		} );
	} );

	// Loop

	function initSliderLoop() {
		var sliderLoop = $( '.slider-loop' );

		sliderLoop.each( function() {

			var container = this;
			var owl = $( '.owl-carousel', this );

			$( container ).prepend( '<div class="images-loading"></div>' );

			$( owl ).imagesLoaded( function() {

				owl.parent().find( '.images-loading' ).remove();

				owl.owlCarousel( {
					dragEndSpeed: 250,
					smartSpeed: 250,
					autoHeight: true,
					dots: true,
					dotsContainer: $( '> .owl-dots', container ),
					rtl: rtl,
					responsive: {
						0: {
							items: 1,
							margin: 0,
						},
						760: {
							items: 2,
							margin: 40,
						},
						1020: {
							items: 3,
							margin: 30,
						},
						1120: {
							items: 3,
							margin: 40,
						},
						1240: {
							items: $( container ).data( 'columns' ),
							margin: 30,
						},
						1640: {
							items: $( container ).data( 'columns' ),
							margin: 40,
						},
					},
				} );

			} );

		} );
	}

	$( document ).ready( function() {
		initSliderLoop();
		$( document.body ).on( 'post-load'} );
	} );

	/**
	 * Sticky Post Sidebar
	 */

	var stickyPostElements = $( '.sticky-sidebar-enabled .post-sidebar .pk-share-buttons-wrap' );

	$( document ).ready( function() {

		$( document ).on( 'sticky-nav-visible', function() {
			var navBarHeight = $( '.navbar-primary' ).innerHeight();

			$( stickyPostElements ).css( 'top', 60 + navBarHeight + 'px' );
		} );

		$( document ).on( 'sticky-nav-hide', function() {
			$( stickyPostElements ).css( 'top', 60 + 'px' );
		} );

	} );

	/**
	 * Sticky Sidebar
	 */

	var stickyElements = [];

	stickyElements.push( '.sticky-sidebar-enabled.stick-to-top .sidebar-1' );
	stickyElements.push( '.sticky-sidebar-enabled.stick-last .sidebar .widget:last-child' );

	$( document ).ready( function() {

		// Sticky sidebar for mozilla.
		if ( $.browser.mozilla ) {
			stickyElements.push( '.sticky-sidebar-enabled.stick-to-bottom .sidebar-1' );
		}

		// Join elements.
		stickyElements = stickyElements.join( ',' );

		// Sticky nav visible.
		$( document ).on( 'sticky-nav-visible', function() {
			var navBarHeight = $( '.navbar-primary' ).innerHeight();

			$( stickyElements ).css( 'top', 32 + navBarHeight + 'px' );
		} );

		// Sticky nav hide.
		$( document ).on( 'sticky-nav-hide', function() {
			$( stickyElements ).css( 'top', 32 + 'px' );
		} );

	} );
	// Init slider for powerkit twitter.

	function initTwitterSlider() {
		$( '.pk-twitter-slider' ).each( function() {
			if ( $( this ).hasClass( 'init-slider' ) ) {
				return;
			}

			$( this ).addClass( 'init-slider' );

			// Wrap tweet of owl-slide.
			$( this ).find( '.pk-twitter-tweet' ).wrap( '<div class="owl-slide"></div>' );

			// Wrap tweets of owl-carousel.
			$( this ).find( '.pk-tweets' ).wrapInner( '<div class="owl-carousel"></div>' );

			// Add owl dots.
			$( this ).find( '.pk-tweets' ).append( '<div class="owl-dots"></div>' );

			// Wrap tweets of slider-container.
			$( this ).find( '.pk-tweets' ).wrapInner( '<div class="slider-container slider-flip"></div>' );
		} );
	}

	$( document ).ready( function() {
		initTwitterSlider();
		initSliderFlip();
		$( document.body ).on( 'post-load'} );
	} );

	/**
	 * Product Thumbnail Slider
	 */

	var owlProductGallery = $( '.product-gallery-wrapper' );

	owlProductGallery.each( function() {

		var container = this;
		var owl = $( '.owl-carousel', this );

		$( container ).prepend( '<div class="images-loading"></div>' );

		$( owl ).imagesLoaded( function() {

			owl.parent().find( '.images-loading' ).remove();

			owl.owlCarousel( {
				dragEndSpeed: 250,
				smartSpeed: 250,
				autoHeight: true,
				dots: true,
				dotsContainer: $( '> .owl-dots', container ),
				rtl: rtl,
				responsive: {
					0: {
						items: 1,
						margin: 0,
					},
					760: {
						items: 2,
						margin: 15,
					},
					1020: {
						items: 3,
						margin: 15,
					},
					1240: {
						items: 4,
						margin: 15,
					}
				},
			} );

		} );

	} );

} )( jQuery );